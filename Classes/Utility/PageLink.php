<?php
namespace \BusyNoggin\TemplavoilaFramework\Utility;

/***************************************************************
 * Copyright notice
 *
 * (c) 2013 Busy Noggin Digital
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

/* Copied from Georg Ringer's constantsextended extension */

class PageLink {

	/**
	 * Builds an input form that also includes the link popup wizard.
	 * @param		array		$params:  Contains fieldName and fieldValue.
	 * @param		obj			$pObj:  Objet
	 * @return		string		HTML output
	 */
	public function main($params, $pObj) {
		/* Pull the current fieldname and value from constants */
		$fieldName = $params['fieldName'];
		$fieldValue = $params['fieldValue'];


		// get the configuration
		$conf = $this->getConf($fieldName, $pObj);
		$formName = ($conf['formName']!='') ? $conf['formName'] : 'editForm';

		$input = '<input name="'. $fieldName .'" value="'. $fieldValue .'" />';

		$wizard = '<a href="#" onclick="this.blur(); vHWin=window.open(\'../../../../typo3/browse_links.php?mode=wizard&amp;P[field]='. $fieldName .'&amp;P[formName]='.$formName.'&amp;P[itemName]='. $fieldName .'&amp;P[fieldChangeFunc][temp]=temp=1;\',\'popUpID478be36b64\',\'height=300,width=500,status=0,menubar=0,scrollbars=1\'); vHWin.focus(); return false;">
								<img src="../../../../typo3/sysext/t3skin/icons/gfx/link_popup.gif" width="16" height="15" border="0" alt="Link" title="Link" />
							</a>';

		return $input.$wizard;
	}

	/**
	 * Get the possible configuration of a single field
	 * @param		string		$fieldName:  Name of the field
	 * @param		obj		$pObj:  Objet
	 * @return		array		configuration
	 */
	function getConf($fieldName, $pObj) {
		$key = substr($fieldName, 5,-1);
		$tempConf = '';
		$realConf = array();

		// get the complete line from constants and find the key 'settings'
		$conf = \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode(';', $pObj->flatSetup[$key.'..']);
		foreach ($conf as $key=>$value) {
			if (strpos($value, 'settings') !== false) {
				$tempConf = $value;
			}
		}

		// if settings are found, split them accordingly
		if ($tempConf!='') {
			$tempConf = substr($tempConf, 9);

			$tempConf = \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode(',', $tempConf);

			foreach ($tempConf as $key) {
				$split = \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode(':', $key);
				$realConf[$split[0]] = $split[1];
			}

		}

		return $realConf;
	}
}

?>