<?php

class ext_update {

	protected $justImported = FALSE;

	protected $justImportedToPid = FALSE;

	public function access() {
		return TRUE;
	}

	public function main() {
		$content = array();

		$content[] = '<h3>Import Template Objects</h3>';
		$content[] = '<p>Using the Templavoila Framework requires several TemplaVoila Template Objects. Select a storage folder and import these onto your site. This import is usually only done with the first installation of the TemplaVoila Framework or on a major version upgrade.</p>';

		$action = t3lib_div::_GP('action');
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
				$flashSeverity = t3lib_flashMessage::WARNING;
			}

			if ($flashText) {
				$flashMessage = t3lib_div::makeInstance('t3lib_flashMessage', $flashText, $flashSubject, $flashSeverity);
				$content[] = $flashMessage->render();
			}
		}

		$content[] = '<br />';
		$content[] = '<form action="' . t3lib_div::linkThisScript(array('action' => 'import')) . '" method="post">';
		$content[] = '<select name="pid" size="5">';

		$sysFolders = t3lib_BEFunc::getRecordsByField('pages', 'doktype', 254, '', '', 'title');
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

	protected function importAction() {
		$pid = intval(t3lib_div::_GP('pid'));
		$result = $this->importTemplateObjects($pid);

		if ($result) {
			$this->justImported = TRUE;
			$this->justImportedToPid = $pid;

			$extensionConfiguration = $this->readExtensionConfiguration();
			$extensionConfiguration['templateObjectPID'] = $pid;
			$this->writeExtensionConfiguration($extensionConfiguration);

			$flashSubject = 'Template Objects Have Been Imported';
			$flashText = 'Your import of the template objects was successful. Do not hit the import button again. You have now completed the TemplaVoila Framework extension installation.';
			$flashSeverity = t3lib_flashMessage::OK;
		}

		if ($flashText) {
			$flashMessage = t3lib_div::makeInstance('t3lib_flashMessage', $flashText, $flashSubject, $flashSeverity);
		}

		return $flashMessage->render() . $this->showFormAction();
	}

	protected function pageHasTemplateObjects($pid) {
		$templateObjects = t3lib_BEFunc::getRecordsByField('tx_templavoila_tmplobj', 'pid', $pid);
		return count($templateObjects) > 0;
	}

	protected function importTemplateObjects($pid) {
		$templateObjectPath = t3lib_extMgm::extPath('templavoila_framework') . 'template_objects.t3d';
		$data = null;

		if(@is_file($templateObjectPath)) {
			require_once(t3lib_extMgm::extPath('impexp') . 'class.tx_impexp.php');
			$import = t3lib_div::makeInstance('tx_impexp');
			$import->init(0, 'import');
			$import->enableLogging = TRUE;

			if ($import->loadFile($templateObjectPath, $loadAllData = TRUE)) {
				$data = $import->dat;
				$import->importData($pid);
			}
		}

		return $data;
	}

	protected function writeExtensionConfiguration($extensionConfiguration) {
		$typo3Version = explode('.', TYPO3_version);
		$majorVersion = intval($typo3Version[0]);
		if ($majorVersion >= 6) {
			$configurationManager = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\Configuration\\ConfigurationManager');
			$configurationManager->setLocalConfigurationValueByPath('EXT/extConf/templavoila_framework', serialize($extensionConfiguration));
			\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::removeCacheFiles();
		} else {
			$install = new t3lib_install();
			$install->allowUpdateLocalConf = 1;
			$install->updateIdentity = 'Caretaker Instance installation';

			$lines = $install->writeToLocalconf_control();
			$install->setValueInLocalconfFile($lines, '$TYPO3_CONF_VARS[\'EXT\'][\'extConf\'][\'templavoila_framework\']', serialize($extensionConfiguration));
			$install->writeToLocalconf_control($lines);

			t3lib_extMgm::removeCacheFiles();
		}
	}

	protected function readExtensionConfiguration() {
		$extensionConfiguration = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['templavoila_framework']);
		if (!$extensionConfiguration) {
			$extensionConfiguration = array();
		}

		return $extensionConfiguration;
	}

}

?>