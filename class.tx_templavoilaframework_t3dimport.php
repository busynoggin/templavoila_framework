<?php

/***************************************************************
 * Copyright notice
 *
 * (c) 2010 Christian Technology Ministries International Inc.
 * All rights reserved
 *
 * This file is part of the Web-Empowered Church (WEC)
 * (http://WebEmpoweredChurch.org) ministry of Christian Technology Ministries
 * International (http://CTMIinc.org). The WEC is developing TYPO3-based
 * (http://typo3.org) free software for churches around the world. Our desire
 * is to use the Internet to help offer new life through Jesus Christ. Please
 * see http://WebEmpoweredChurch.org/Jesus.
 *
 * You can redistribute this file and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation;
 * either version 2 of the License, or (at your option) any later version.
 *
 * The GNU General Public License can be found at
 * http://www.gnu.org/copyleft/gpl.html.
 *
 * This file is distributed in the hope that it will be useful for ministry,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * This copyright notice MUST APPEAR in all copies of the file!
 ***************************************************************/

class tx_templavoilaframework_t3dimport {

	public function main($params, $pObj) {
		$content = array();
		$fieldName = $params['fieldName'];
		$fieldValue = $params['fieldValue'];

		if (t3lib_div::_GP('doImport') && $fieldValue) {
			$this->importTemplateObjects($fieldValue);
			$flashSubject = 'Template Objects Have Been Imported';
			$flashText = 'Your import of the template objects was successful. Do not hit the import button again. You have now completed the TemplaVoila Framework extension installation.';
			$flashSeverity = t3lib_flashMessage::OK;
			$justImported = TRUE;
		} else {
			$justImported = FALSE;
		}

		if ($fieldValue) {
			$templateObjects = t3lib_BEFunc::getRecordsByField('tx_templavoila_tmplobj', 'pid', $fieldValue);
			if (count($templateObjects) && !$justImported) {
				$flashSubject = 'Found Existing Template Objects';
				$flashText = 'The SysFolder you\'ve selected for import already contains TemplaVoila Template Objects. Clicking the import button will create new Template Objects in addition to existing Template Objects. If you are simply upgrading the TemplaVoila Framework extension, then <b>do not</b> click the Import button. Rather just click the Update button.';
				$flashSeverity = t3lib_flashMessage::WARNING;
			}

			if ($flashText) {
				$flashMessage = t3lib_div::makeInstance('t3lib_flashMessage', $flashText, $flashSubject, $flashSeverity);
				$content[] = $flashMessage->render();
			}
		}

		$content[] = '<select name="' . $fieldName . '" size="5">';

		$sysFolders = t3lib_BEFunc::getRecordsByField('pages', 'doktype', 254, '', '', 'title');
		foreach ($sysFolders as $sysFolder) {
			if ($sysFolder['uid'] == $fieldValue) {
				$selected = 'selected="selected"';
			} else {
				$selected = '';
			}

			$content[] = '<option ' . $selected . 'value="' . $sysFolder['uid'] . '">' . $sysFolder['title'] . ' (UID:' . $sysFolder['uid'] . ' PID:' . $sysFolder['pid'] . ')</option>';
		}
		$content[] = '</select>';

		if (t3lib_div::int_from_ver(TYPO3_version) >= 4006000) {
			$content[] = '<input type="submit" value="Import" onclick="document.getElementById(\'doImport\').value = 1; Ext.ComponentMgr.all.filterBy(function(item){ return (item.getXType()==\'form\' && item.title==\'Configuration\'); }).first().doSubmit(false);"/>';
			$content[] = '<input type="hidden" id="doImport" name="doImport" value="0" />';
		} else {
			$content[] = '<input type="submit" name="doImport" value="Import" />';
			$content[] = '<input type="hidden" name="submit" value="Update" />';
		}

		return implode(chr(10), $content);
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
}

if (defined('TYPO3_MODE') && $TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/templavoila_framework/class.tx_templavoilaframework_t3dimport.php'])	{
	include_once($TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/templavoila_framework/class.tx_templavoilaframework_t3dimport.php']);
}

?>