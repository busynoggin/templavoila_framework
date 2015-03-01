<?php

class ext_update {

	protected $justImported = FALSE;

	protected $justImportedToPid = FALSE;

	/**
	 * Checks whether the update script should be active and allow access.
	 *
	 * @return boolean
	 */
	public function access() {
		return TRUE;
	}

	/**
	 * Main entry point for update form.
	 *
	 * @return string
	 */
	public function main() {
		$content = array();
		$action = \TYPO3\CMS\Core\Utility\GeneralUtility::_GP('action');

		if ($action === 'update_database') {
			$content[] = $this->updateDatabase();
		} elseif ($this->databaseNeedsUpdate()) {
			$content[] = $this->showUpdateDatabaseForm();
		}

		$content[] = '<h3>Import Template Objects</h3>';
		$content[] = '<p>Using the Templavoila Framework requires several TemplaVoila Template Objects. Select a storage folder and import these onto your site. This import is usually only done with the first installation of the TemplaVoila Framework or on a major version upgrade.</p>';

		if ($action === 'import') {
			$content[] = $this->importAction();
		} else {
			$content[] = $this->showFormAction();
		}

		return implode(chr(10), $content);
	}

	/**
	 * Shows the TO import form.
	 *
	 * @return string
	 */
	public function showFormAction() {
		$content = array();

		if ($this->justImported && $this->justImportedToPid) {
			$pid = $this->justImportedToPid;
		} else {
			$extensionConfiguration = $this->readExtensionConfiguration();
			$pid = $extensionConfiguration['templateObjectPID'];
		}

		if ($pid) {
			if ($this->pageHasTemplateObjects($pid) && !$this->justImported) {
				$flashSubject = 'Found Existing Template Objects';
				$flashText = 'The SysFolder you\'ve selected for import already contains TemplaVoila Template Objects. Clicking the import button will create new Template Objects in addition to existing Template Objects.';
				$flashSeverity = \TYPO3\CMS\Core\Messaging\FlashMessage::WARNING;
			}

			if ($flashText) {
				$flashMessage = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Messaging\\FlashMessage', $flashText, $flashSubject, $flashSeverity);
				$content[] = $flashMessage->render();
			}
		}

		$content[] = '<br />';
		$content[] = '<form action="' . \TYPO3\CMS\Core\Utility\GeneralUtility::linkThisScript(array('action' => 'import')) . '" method="post">';
		$content[] = '<select name="pid" size="5">';

		$sysFolders = \TYPO3\CMS\Backend\Utility\BackendUtility::getRecordsByField('pages', 'doktype', 254, '', '', 'title');
		foreach ($sysFolders as $sysFolder) {
			if ($sysFolder['uid'] == $pid) {
				$selected = 'selected="selected"';
			} else {
				$selected = '';
			}

			$content[] = '<option ' . $selected . 'value="' . $sysFolder['uid'] . '">' . $sysFolder['title'] . ' (UID:' . $sysFolder['uid'] . ' PID:' . $sysFolder['pid'] . ')</option>';
		}
		$content[] = '</select>';
		$content[] = '<br /><br />';
		$content[] = '<input type="submit" name="import" value="Import Template Objects" />';
		$content[] = '</form>';

		return implode(chr(10), $content);
	}

	/**
	 * Imports the template objects.
	 *
	 * @return string
	 */
	protected function importAction() {
		$pid = intval(\TYPO3\CMS\Core\Utility\GeneralUtility::_GP('pid'));
		$result = $this->importTemplateObjects($pid);

		if ($result) {
			$this->justImported = TRUE;
			$this->justImportedToPid = $pid;

			$extensionConfiguration = $this->readExtensionConfiguration();
			$extensionConfiguration['templateObjectPID'] = $pid;
			$this->writeExtensionConfiguration($extensionConfiguration);

			$flashSubject = 'Template Objects Have Been Imported';
			$flashText = 'Your import of the template objects was successful. Do not hit the import button again. You have now completed the TemplaVoila Framework extension installation.';
			$flashSeverity = \TYPO3\CMS\Core\Messaging\FlashMessage::OK;
		}

		if ($flashText) {
			$flashMessage = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Messaging\\FlashMessage', $flashText, $flashSubject, $flashSeverity);
		}

		return $flashMessage->render() . $this->showFormAction();
	}

	/**
	 * Checks if the given page ID has template objects.
	 *
	 * @return boolean
	 */
	protected function pageHasTemplateObjects($pid) {
		$templateObjects = \TYPO3\CMS\Backend\Utility\BackendUtility::getRecordsByField('tx_templavoila_tmplobj', 'pid', $pid);
		return count($templateObjects) > 0;
	}

	/**
	 * Helper function for T3D import to a particular PID
	 *
	 * @return mixed
	 */
	protected function importTemplateObjects($pid) {
		$templateObjectPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('templavoila_framework') . 'Resources/Private/Content/TemplateObjects.t3d';
		$data = null;

		if(@is_file($templateObjectPath)) {
			$import = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Impexp\\ImportExport');
			$import->init(0, 'import');
			$import->enableLogging = TRUE;

			if ($import->loadFile($templateObjectPath, $loadAllData = TRUE)) {
				$data = $import->dat;
				$import->importData($pid);
			}
		}

		return $data;
	}

	/**
	 * Writes extension configuration.
	 *
	 * @param array $xtensionConfiguration
	 * @return void
	 */
	protected function writeExtensionConfiguration($extensionConfiguration) {
		$configurationManager = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Configuration\\ConfigurationManager');
		$configurationManager->setLocalConfigurationValueByPath('EXT/extConf/templavoila_framework', serialize($extensionConfiguration));
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::removeCacheFiles();
	}

	/**
	 * Reads extension configuration
	 *
	 * @return mixed
	 */
	protected function readExtensionConfiguration() {
		$extensionConfiguration = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['templavoila_framework']);
		if (!$extensionConfiguration) {
			$extensionConfiguration = array();
		}

		return $extensionConfiguration;
	}

	/**
	 * Shows the database update form.
	 *
	 * @return string
	 */
	protected function showUpdateDatabaseForm() {
		$content = array();

		$content[] = '<p>Pages and content elements in your database are using old paths for data structures and template objects. These must be updated for your site to work properly.</p>';
		$content[] = '<p>It is highly recommended that you backup your database before running this update.';
		$content[] = '<form action="' . \TYPO3\CMS\Core\Utility\GeneralUtility::linkThisScript(array('action' => 'update_database')) . '" method="post">';
		$content[] = '<input type="submit" value="Update Database" />';
		$content[] = '</form>';

		$flashSubject = 'Database Update Required';
		$flashText = implode(chr(10), $content);
		$flashSeverity = t3lib_flashMessage::WARNING;

		$flashMessage = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Messaging\\FlashMessage', $flashText, $flashSubject, $flashSeverity);

		return $flashMessage->render();
	}

	/**
	 * Checks if the database needs an update
	 *
	 * @return boolean
	 */
	protected function databaseNeedsUpdate() {
		return $this->pageDataStructureNeedsUpdate() || $this->contentDataStructureNeedsUpdate() || $this->templateObjectDataStructureNeedsUpdate() || $this->templateObjectFileRefNeedsUpdate();
	}

	/**
	 * Performs necessary database updates for new skin paths.
	 *
	 * @return void
	 */
	protected function updateDatabase() {
		if ($this->pageDataStructureNeedsUpdate()) {
			$this->updatePageDataStructure();
		}

		if ($this->contentDataStructureNeedsUpdate()) {
			$this->updateContentDataStructure();
		}

		if ($this->templateObjectDataStructureNeedsUpdate()) {
			$this->updateTemplateObjectDataStructure();
		}

		if ($this->templateObjectFileRefNeedsUpdate()) {
			$this->updateTemplateObjectFileRef();
		}

		if ($this->databaseNeedsUpdate()) {
			$flashSubject = 'Database Not Updated';
			$flashText = 'Pages and content elements could not be updated automatically. Try again or file a bug report.';
			$flashSeverity = t3lib_flashMessage::ERROR;
		} else {
			$flashSubject = 'Database Updated';
			$flashText = 'Pages and content elements have been updated to use the correct paths for data structures and template objects.';
			$flashSeverity = t3lib_flashMessage::OK;
		}

		$flashMessage = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Messaging\\FlashMessage', $flashText, $flashSubject, $flashSeverity);
		return $flashMessage->render();
	}

	/**
	 * Checks if the DS field on pages needs an update
	 *
	 * @return boolean
	 */
	protected function pageDataStructureNeedsUpdate() {
		$statement = $GLOBALS['TYPO3_DB']->prepare_SELECTquery('COUNT(*)', 'pages', 'tx_templavoila_ds LIKE :path OR tx_templavoila_next_ds LIKE :path');
		$statement->execute(array(':path' => 'EXT:templavoila_framework/core_templates/%'));
		$row = $statement->fetch(\TYPO3\CMS\Core\Database\PreparedStatement::FETCH_NUM);
		$statement->free();

		return $row[0] > 0;
	}

	/**
	 * Updates the DS field on pages
	 *
	 * @return void
	 */
	protected function updatePageDataStructure() {
		$oldPath = 'EXT:templavoila_framework/core_templates/datastructures/page/';
		$newPath = 'EXT:templavoila_framework/Configuration/TemplaVoila/DataStructure/Page/';

		$fieldsValues = array(
			'tx_templavoila_ds' => 'replace(tx_templavoila_ds, \'' . $oldPath . '\', \'' . $newPath . '\')',
			'tx_templavoila_next_ds' => 'replace(tx_templavoila_next_ds, \'' . $oldPath . '\', \'' . $newPath . '\')'
		);
		$GLOBALS['TYPO3_DB']->exec_UPDATEquery('pages', 'tx_templavoila_ds LIKE \'' . $oldPath . '%\' OR tx_templavoila_next_ds LIKE \'' . $oldPath . '%\'', $fieldsValues, $no_quote_fields = 'tx_templavoila_ds,tx_templavoila_next_ds');
	}

	/**
	 * Check if the DS field on tt_content needs an update
	 *
	 * @return boolean
	 */
	protected function contentDataStructureNeedsUpdate() {
		$statement = $GLOBALS['TYPO3_DB']->prepare_SELECTquery('COUNT(*)', 'tt_content', 'tx_templavoila_ds LIKE :path');
		$statement->execute(array(':path' => 'EXT:templavoila_framework/core_templates/%'));
		$row = $statement->fetch(\TYPO3\CMS\Core\Database\PreparedStatement::FETCH_NUM);
		$statement->free();

		return $row[0] > 0;
	}

	/**
	 * Updates the DS field for tt_content
	 *
	 * @return void
	 */
	protected function updateContentDataStructure() {
		$oldPath = 'EXT:templavoila_framework/core_templates/datastructures/fce/';
		$newPath = 'EXT:templavoila_framework/Configuration/TemplaVoila/DataStructure/FCE/';

		$fieldsValues = array(
			'tx_templavoila_ds' => 'replace(tx_templavoila_ds, \'' . $oldPath . '\', \'' . $newPath . '\')'
		);
		$GLOBALS['TYPO3_DB']->exec_UPDATEquery('tt_content', 'tx_templavoila_ds LIKE \'' . $oldPath . '%\'', $fieldsValues, $no_quote_fields = 'tx_templavoila_ds');
	}

	/**
	 * Checks if the DS field on template objects needs an update
	 *
	 * @return boolean
	 */
	protected function templateObjectDataStructureNeedsUpdate() {
		$statement = $GLOBALS['TYPO3_DB']->prepare_SELECTquery('COUNT(*)', 'tx_templavoila_tmplobj', 'fileref LIKE :path');
		$statement->execute(array(':path' => 'EXT:templavoila_framework/core_templates/%'));
		$row = $statement->fetch(\TYPO3\CMS\Core\Database\PreparedStatement::FETCH_NUM);
		$statement->free();

		return $row[0] > 0;
	}

	/**
	 * Updates the DS field for template objects
	 *
	 * @return void
	 */
	protected function updateTemplateObjectDataStructure() {
		$oldPath = 'EXT:templavoila_framework/core_templates/datastructures/page/';
		$newPath = 'EXT:templavoila_framework/Configuration/TemplaVoila/DataStructure/Page/';

		$fieldsValues = array(
			'datastructure' => 'replace(datastructure, \'' . $oldPath . '\', \'' . $newPath . '\')'
		);
		$GLOBALS['TYPO3_DB']->exec_UPDATEquery('tx_templavoila_tmplobj', 'datastructure LIKE \'' . $oldPath . '%\'', $fieldsValues, $no_quote_fields = 'datastructure');


		$oldPath = 'EXT:templavoila_framework/core_templates/datastructures/fce/';
		$newPath = 'EXT:templavoila_framework/Configuration/TemplaVoila/DataStructure/FCE/';

		$fieldsValues = array(
			'datastructure' => 'replace(datastructure, \'' . $oldPath . '\', \'' . $newPath . '\')'
		);
		$GLOBALS['TYPO3_DB']->exec_UPDATEquery('tx_templavoila_tmplobj', 'datastructure LIKE \'' . $oldPath . '%\'', $fieldsValues, $no_quote_fields = 'datastructure');
	}

	/**
	 * Checks if the fileref field on template objects needs an update
	 *
	 * @return boolean
	 */
	protected function templateObjectFileRefNeedsUpdate() {
		$statement = $GLOBALS['TYPO3_DB']->prepare_SELECTquery('COUNT(*)', 'tx_templavoila_tmplobj', 'fileref LIKE :path');
		$statement->execute(array(':path' => 'EXT:templavoila_framework/core_templates/%'));
		$row = $statement->fetch(\TYPO3\CMS\Core\Database\PreparedStatement::FETCH_NUM);
		$statement->free();

		return $row[0] > 0;
	}

	/**
	 * Checks if the DS field on template objects needs an update
	 *
	 * @return boolean
	 */
	protected function updateTemplateObjectFileRef() {
		$oldPath = 'EXT:templavoila_framework/core_templates/pages/';
		$newPath = 'EXT:templavoila_framework/Resources/Private/Templates/Page/';

		$fieldsValues = array(
			'fileref' => 'replace(fileref, \'' . $oldPath . '\', \'' . $newPath . '\')'
		);
		$GLOBALS['TYPO3_DB']->exec_UPDATEquery('tx_templavoila_tmplobj', 'fileref LIKE \'' . $oldPath . '%\'', $fieldsValues, $no_quote_fields = 'fileref');

		$oldPath = 'EXT:templavoila_framework/core_templates/fce/';
		$newPath = 'EXT:templavoila_framework/Resources/Private/Templates/FCE/';

		$fieldsValues = array(
			'fileref' => 'replace(fileref, \'' . $oldPath . '\', \'' . $newPath . '\')'
		);
		$GLOBALS['TYPO3_DB']->exec_UPDATEquery('tx_templavoila_tmplobj', 'fileref LIKE \'' . $oldPath . '%\'', $fieldsValues, $no_quote_fields = 'fileref');
	}
}