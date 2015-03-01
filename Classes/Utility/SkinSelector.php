<?php
namespace BusyNoggin\TemplavoilaFramework\Utility;

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

/**
 * Backend interface for skin selection with sys_template records.
 *
 * @author Web-Empowered Church <developer@webempoweredchurch.org>
 * @package TYPO3
 * @subpackage tx_templavoilaframework
 */
class SkinSelector {

	/**
	 * Displays the skin selector as a TCEForm's userfunc. Handles display of
	 * skins but leaves the saving to TCEmain.
	 *
	 * @param	array	$PA
	 * @param	object	$pObj
	 * @return	string
	 */
	public function display($PA, $pObj) {
		$this->pObj = $pObj;
		return $this->renderSkinSelector($PA['table'], $PA['row']);
	}

	/**
	 * Renders the template selector.
	 *
	 * @param	string	$table: The table name, generally sys_template.
	 * @param	array	$row: The current row.
	 * @return string  HTML output containing a table with the skin selector.
	 */
	public function renderSkinSelector($table, $row) {
		$GLOBALS['LANG']->includeLLFile('EXT:templavoila_framework/Resources/Private/Language/locallang_db.xlf');

		$uid = $row['uid'];
		$currentSkin =  $row['skin_selector'];
		$customSkins = \BusyNoggin\TemplavoilaFramework\Framework::getCustomSkinKeys();
		$standardSkins = \BusyNoggin\TemplavoilaFramework\Framework::getStandardSkinKeys();

		$tmplHTML = array();
		if (!count($customSkins) && !count($standardSkins)) {
			$title = $GLOBALS['LANG']->getLL('noSkinsTitle');
			$message = sprintf($GLOBALS['LANG']->getLL('noSkinsMessage'), \BusyNoggin\TemplavoilaFramework\Framework::getCustomSkinPath());
			$severity = \TYPO3\CMS\Core\Messaging\FlashMessage::WARNING;
			$flashMessage = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('\\TYPO3\\CMS\\Core\\Messaging\\FlashMessage', $message, $title, $severity);
			$tmplHTML[] = $flashMessage->render();
		} else {
			if ($currentSkin) {
				$key = array_search($currentSkin, $customSkins);
				if($key !== FALSE) {
					unset($customSkins[$key]);
				}
				$key = array_search($currentSkin, $standardSkins);
				if ($key !== FALSE) {
					unset($standardSkins[$key]);
				}
			}

			$tmplHTML = array();
			$tmplHTML[] = '<h2>' . $GLOBALS['LANG']->getLL('currentSkin') . '</h2>';
			$currentSkinHTML = self::drawSkinPreview($currentSkin, $isCurrent = TRUE);
			if($currentSkin && $currentSkinHTML) {
				$tmplHTML[] = '<div class="currentWrapper">';
				$tmplHTML[] = $currentSkinHTML;
				$tmplHTML[] = '</div>';
			} else {
				$tmplHTML[] = '<div class="noSkinSelected">';
				$tmplHTML[] = $GLOBALS['LANG']->getLL('noSkinSelected');
				$tmplHTML[] = '</div>';
			}

			$pageRenderer = $GLOBALS['SOBE']->doc->getPageRenderer();
			$pageRenderer->addCssInlineBlock('skinSelector',
				'ul { margin-left: 0px; padding-left: 0px; padding-bottom: 20px; }
				 li { list-style:none; padding: 8px 15px 8px 15px; clear:both; border-bottom: 1px solid #ccc }
				 img { margin:0px;padding:0px; }
				 .iconWrapper { display: inline-block; min-width: 130px; text-align: center; }
				 .infoWrapper { display: inline-block; margin-left: 5px; vertical-align: top; }
				 .infoWrapper h2 { background: none; }
				 .buttonWrapper { margin-top: 10px; }
				 .currentWrapper { margin: 10px; padding: 10px; border-bottom: 1px solid #ccc; }
				 .noSkinSelected { margin: 10px; padding: 10px; border-bottom: 1px solid #ccc; }'
			);

			if (count($customSkins)) {
				$tmplHTML[] = '<h3>' . $GLOBALS['LANG']->getLL('customSkins') . '</h3>';
				$tmplHTML[] = '<ul>';
				foreach ($customSkins as $skin) {
					if ($skin != $currentSkin) {
						$tmplHTML[] = '<li>';
						$tmplHTML[] = self::drawSkinPreview($skin);
						$tmplHTML[] = '</li>';
					}
				}
				$tmplHTML[] = '</ul>';
			}

			if (count($standardSkins)) {
				$tmplHTML[] = '<h3>' . $GLOBALS['LANG']->getLL('standardSkins') . '</h3>';
				$tmplHTML[] = '<ul>';
				foreach ($standardSkins as $skin) {
					if ($skin != $currentSkin) {
						$tmplHTML[] = '<li>';
						$tmplHTML[] = self::drawSkinPreview($skin);
						$tmplHTML[] = '</li>';
					}
				}
				$tmplHTML[] = '</ul>';
			}
			$tmplHTML[] = '<input type="hidden" name="data[' . $table . '][' . $uid . '][skin_selector]" id="skinSelector" value="' . $row['skin_selector'] . '" />';
		}

		return implode(chr(10), $tmplHTML);
	}

	/**
	 * Draws a preview of the skin, reading metadeta from within it.
	 *
	 * @param	string		$skin
	 * @param	boolean		$currentlySelected
	 * @return	string
	 */
	protected function drawSkinPreview($skin, $currentlySelected = FALSE) {
		$skinInfo = \BusyNoggin\TemplavoilaFramework\Framework::getSkinInfo($skin);
		if ($skinInfo) {
			if ($skinInfo['icon']) {
				$previewIconFilename = $GLOBALS['BACK_PATH'] . $skinInfo['icon'];
			} else {
				$previewIconFilename = $GLOBALS['BACK_PATH'].'../' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::siteRelPath('templavoila_framework') . '/Resources/Public/Images/DefaultScreenshot.gif';
			}

			$html = array();
			$html[] = '<div class="iconWrapper"><img src="' . $previewIconFilename . '" /></div>';
			$html[] = '<div class="infoWrapper">';
			$html[] = '<h2>' . htmlspecialchars($skinInfo['title']) . '</h2>';
			if ($skinInfo['description']) {
				$html[] = '<p>' . $skinInfo['description'] . '</p>';
			}

			// For the current skin, tell the user what type it is and where its located.
			if ($currentlySelected) {
				switch($skinInfo['type']) {
					case 'EXT':
						$html[] = '<p>(' . $GLOBALS['LANG']->getLL('standardSkin') . ')</p>';
						break;
					case 'LOCAL':
						$html[] = '<div>(' . sprintf($GLOBALS['LANG']->getLL('customSkinPath'), $skinInfo['path']) . ')</div>';
						break;
				}
			}

			$html[] = '<div class="buttonWrapper">';
			if (!$currentlySelected) {
			}

			if ($currentlySelected) {
				$html[] = '<input type="submit" value="' . $GLOBALS['LANG']->getLL('unselectSkinButton') . '" onclick="$(\'skinSelector\').value = \'\'; TBE_EDITOR.submitForm();" /> ';
			} else {
				$html[] = '<input type="submit" value="' . $GLOBALS['LANG']->getLL('selectSkinButton') . '" onclick="$(\'skinSelector\').value = \'' . $skin . '\'; TBE_EDITOR.submitForm();" /> ';
			}

			$html[] = '</div>';
			$html[] = '</div>';

			return implode(chr(10), $html);
		} else {
			return FALSE;
		}
	}

}