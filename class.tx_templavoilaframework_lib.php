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

/**
 * General purpose library for working with skins.
 *
 * @author Web-Empowered Church <developer@webempoweredchurch.org>
 * @package TYPO3
 * @subpackage tx_templavoilaframework
 */
class tx_templavoilaframework_lib {

	/**
	 * Gets the key for the skin applied on the specified page.
	 *
	 * @param	int		The page id.
	 * @return	string
	 */
	public static function getCurrentSkin($pageId) {
		$tmpl = t3lib_div::makeInstance("t3lib_tsparser_ext");
		$tmpl->tt_track = 0;
		$tmpl->init();
		$templateRow = $tmpl->ext_getFirstTemplate($pageId);

		return $templateRow['skin_selector'];
	}

	/**
	 * Gets an array of all skin keys available.
	 *
	 * @return	array
	 */
	public static function getSkinKeys() {
		return array_merge(self::getCustomSkinKeys(), self::getStandardSkinKeys());
	}

	/**
	 * Gets an array of standard skin keys.
	 *
	 * @return	array
	 */
	public static function getStandardSkinKeys() {
		$skinKeys = array();
		foreach ((array) $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['templavoila_framework']['skins'] as $skin) {
			$skinKeys[] = 'EXT:' . $skin;
		}

		natsort($skinKeys);
		return $skinKeys;
	}

	/**
	 * Gets an array of custom skin keys.
	 *
	 * @return array
	 */
	public static function getCustomSkinKeys() {
		$skinKeys = array();
		$customSkinPath = self::getCustomSkinPath();
		$skins = t3lib_div::get_dirs(PATH_site . $customSkinPath);
		foreach ((array) $skins as $skin) {
			if (substr($skin, 0, 1) != '.') {
				$skinKeys[] = 'LOCAL:' . $skin;
			}
		}

		natsort($skinKeys);
		return $skinKeys;
	}

	/**
	 * Gets the site-relative path for the specified skin.
	 *
	 * @return	string	$skin: The skin key.
	 */
	public static function getSkinPath($skin) {
		$customSkinPath = self::getCustomSkinPath();
		list($skinType, $skinKey) = t3lib_div::trimExplode(':', $skin);
		switch ($skinType) {
			case 'EXT':
				if (t3lib_extMgm::isLoaded($skinKey)) {
					$relSkinPath = t3lib_extMgm::siteRelPath($skinKey);
				} else {
					$relSkinPath = FALSE;
				}
				break;
			case 'LOCAL':
				$relSkinPath = $customSkinPath . $skinKey . '/';
				if (!@is_dir(PATH_site . $relSkinPath)) {
					$relSkinPath = FALSE;
				}
				break;
		}
		return $relSkinPath;
	}

	/**
	 * Gets the info array on the specified skin. This includes title, description,
	 * and thumbnail path.
	 *
	 * @param	string		The skin key.
	 * @return	array
	 */
	public static function getSkinInfo($skin) {
		$infoArray = array();
		list($skinType, $skinKey) = t3lib_div::trimExplode(':', $skin);
		$relSkinPath = self::getSkinPath($skin);
		if ($relSkinPath) {
			$absSkinPath = PATH_site . $relSkinPath;

			$infoText = t3lib_div::getURL($absSkinPath . 'info.txt');
			if ($infoText) {
				//$infoLines = t3lib_div::trimExplode('\n', $infoText);
				$infoLines = preg_split('/[\r\n]+/', $infoText, -1, PREG_SPLIT_NO_EMPTY);
				foreach ($infoLines as $line) {
					list($key, $value) = t3lib_div::trimExplode(':', $line, false, 2);
					$key = t3lib_div::strtolower($key);
					if (($key == 'title') || ($key == 'description')) {
						$infoArray[$key] = $value;
					}
				}
			} else {
				$infoArray['title'] = $skinKey;
			}

			$infoArray['type'] = $skinType;
			$infoArray['path'] = $relSkinPath;

			if (@is_file($absSkinPath . 'screenshot.gif')) {
				$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'screenshot.gif');
			} elseif (@is_file($absSkinPath . 'screenshot.png')) {
				$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'screenshot.png');
			} elseif (@is_file($absSkinPath . 'screenshot.jpg')) {
				$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'screenshot.jpg');
			}
		} else {
			return FALSE;
		}

		return $infoArray;
	}

	/**
	 * Helper function that gets the skin thumbnail.
	 *
	 * @param	string	Path to the skin screenshot, relative to TYPO3 root.
	 * @param	int		Thumbnail width.
	 * @param	int		Thumbnail height.
	 * @return	string
	 */
	protected static function getPathForSkinThumbnail($relativeScreenshotPath, $width = 130, $height = 98) {
		$absoluteScreenshotPath = PATH_site . $relativeScreenshotPath;
		$screenshotSize = $width . 'x' . $height;
		$thumbScript = '../typo3/thumbs.php';

		$salt = basename($absoluteScreenshotPath) . ':' . filemtime($absoluteScreenshotPath) . ':' . $GLOBALS['TYPO3_CONF_VARS']['SYS']['encryptionKey'];
		$params  = '&file=' . rawurlencode($absoluteScreenshotPath);
		$params .= '&size=' . $width . 'x' . $height;
		$params .= '&md5sum=' . t3lib_div::shortMD5($salt);
		$url = $thumbScript . '?&dummy=' . $GLOBALS['EXEC_TIME'] . $params;
		return $url;
	}

	/**
	 * Gets the path (relative to TYPO3 root) where custom skins can be found. Defaults to fileadmin/templates/.
	 *
	 * @return string
	 */
	public static function getCustomSkinPath() {
		$extConf = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['templavoila_framework']);
		if (!$extConf['customSkinPath']) {
			$extConf['customSkinPath'] = 'fileadmin/templates/';
		}

		return $extConf['customSkinPath'];
	}

	/**
	 * Includes static template records (from static_template table) and static template files (from extensions) for the input template record row.
	 *
	 * @param	array		Array of parameters from the parent class.  Includes idList, templateId, pid, and row.
	 * @param	object		Reference back to parent object, t3lib_tstemplate or one of its subclasses.
	 * @return	void
	 */
	public static function includeTypoScriptForFrameworkCoreAndSkins($params, $pObj) {
		$idList = $params['idList'];
		$templateID = $params['templateId'];
		$pid = $params['pid'];
		$row = $params['row'];

			// Call hook for possible manipulation of current skin.
		if (is_array($GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/templavoila_framework/class.tx_templavoilaframework_lib.php']['assignSkinKey'])) {
			$_params = array('skinKey' => &$row['skin_selector']);
			foreach($GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/templavoila_framework/class.tx_templavoilaframework_lib.php']['assignSkinKey'] as $userFunc) {
				$row['skin_selector'] = t3lib_div::callUserFunction($userFunc, $_params, $ref = NULL);
			}
		}

		if ($row['root'] && $row['skin_selector']) {
			$skin = $row['skin_selector'];
			list($skinType, $skinKey) = t3lib_div::trimExplode(':', $skin);
			switch ($skinType) {
				case 'EXT':
					if (t3lib_extMgm::isLoaded($skinKey)) {
						$relSkinPath = t3lib_extMgm::siteRelPath($skinKey);
					} else {
						$relSkinPath = FALSE;
					}
					break;
				case 'LOCAL':
					$relSkinPath = self::getCustomSkinPath() . $skinKey . '/';
					break;
			}

			if ($relSkinPath) {
				$relCorePath = t3lib_extMgm::siteRelPath('templavoila_framework') . 'core_templates/';
				$absCorePath = PATH_site . $relCorePath;
				$absSkinPath = PATH_site . $relSkinPath;

				$skinConstants = @is_file($absSkinPath . 'typoscript/skin_constants.ts') ? t3lib_div::getUrl($absSkinPath . 'typoscript/skin_constants.ts') : '';
				$skinSetup = @is_file($absSkinPath . 'typoscript/skin_typoscript.ts') ? t3lib_div::getUrl($absSkinPath . 'typoscript/skin_typoscript.ts') : '';

				$renderMode = self::getSkinRenderMode($skinConstants, $relSkinPath);
				$coreSubrow = array(
					'constants' => t3lib_div::getUrl($absCorePath . 'typoscript/v' . $renderMode . '/core_constants.ts'),
					'config' => t3lib_div::getUrl($absCorePath . 'typoscript/v' . $renderMode . '/core_typoscript.ts'),
					'editorcfg' => '',
					'include_static' => '',
					'include_static_file' => '',
					'title' => 'TemplaVoila Framework Core',
					'uid' => md5($relCorePath)
				);

				// Set old bnTemplates prefix for backwards compatibility.
				$coreSubrow['constants'] .= chr(10) . 'bnTemplates.corePath = ' . $relCorePath;
				$coreSubrow['constants'] .= chr(10) . 'templavoila_framework.corePath = ' . $relCorePath;
				$pObj->processTemplate($coreSubrow, $idList.',templavoilaframework_core', $pid, 'templavoilaframework_core', $templateID);

				$skinSubrow = array(
					'constants'=>	$skinConstants,
					'config'=>		$skinSetup,
					'editorcfg'=>	'',
					'include_static'=>	'',
					'include_static_file'=>	'',
					'title' =>	$skin,
					'uid' => md5($relSkinPath)
				);

				// Set old bnTemplates prefix for backwards compatibility.
				$skinSubrow['constants'] .= chr(10) . 'bnTemplates.skinPath = ' . $relSkinPath;
				$skinSubrow['constants'] .= chr(10) . 'templavoila_framework.skinPath = ' . $relSkinPath;
				$pObj->processTemplate($skinSubrow, $idList . ',templavoilaframework_skin_' . $skin, $pid, 'templavoilaframework_skin_' . $skin, $templateID);
			}
		}
	}

	/**
	 * Gets the skin rendering mode, as defined in the constants. Defaults to 1 if no render mode is defined.
	 *
	 * @param string $constants
	 * @param string $relativeSkinPath
	 * @return string
	 */
	public static function getSkinRenderMode($constants, $relativeSkinPath) {
		$tsParser = t3lib_div::makeInstance('t3lib_TSparser');
		$tsParser->parse($constants);

		$skinRenderingMode = $tsParser->setup['plugin.']['templavoila_framework.']['renderMode'];
		if (!$skinRenderMode) {
			t3lib_div::deprecationLog('The TemplaVoila Framework now requires that the render mode is set via tha \'plugin.templavoila_framework.renderMode\' TypoScript constant.' .
			                          'This value currently defaults to 1 but will be removed in a future version of the TemplaVoila Framework.' .
			                          'The skin at ' . $relativeSkinPath . ' should be updated to include this TypoScript constant.');
			$skinRenderMode = 1;
		}

		return $skinRenderMode;
	}

	/**
	 * Makes a new, local copy of a given skin key.
	 *
	 * @param	string	$skinKey: The skin to copy.
	 * @return	void
	 */
	public static function copySkinToLocal($skinKey) {
		$copyFrom = self::getSkinPath($skinKey);
		$copyTo = self::getCustomSkinPath();

		$filemounts['1'] = array(
			'name' => $copyTo,
			'path' => PATH_site . $copyTo
		);
		$filemounts['2'] = array(
			'name' => 'typo3conf/ext/',
			'path' => PATH_site . 'typo3conf/ext/'
		);

		$fileCommands = array(
			'copy' => array(
				array(
					'data' => PATH_site . $copyFrom,
					'target' => PATH_site . $copyTo,
					'altName' => 1
				)
			)
		);

		$fileHandler = t3lib_div::makeInstance('t3lib_extFileFunctions');
		$fileHandler->init($filemounts, $TYPO3_CONF_VARS['BE']['fileExtensions']);
		$fileHandler->init_actionPerms($GLOBALS['BE_USER']->getFileoperationPermissions());
		$fileHandler->start($fileCommands);

		$fileHandler->processData();
		$fileHandler->printLogErrorMessages();
	}

	/**
	 * Gets the static data structure array.  This array changed in TemplaVoila 1.5.
	 * See ext_localconf.php and ext_tables.php for usage.
	 *
	 * @param	string	Path where page data structures are found.
	 * @param	string	Path where FCE data structures are found.
	 * @return	void
	 */
	public static function getStaticDataStructureArray($pageDSPath, $fceDSPath) {
		$staticDataStructureArray = array();
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:pages.ds.f1.title',
			'path' => $pageDSPath . 'f1 (page).xml',
			'icon' => '',
			'scope' => 1,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:pages.ds.f2.title',
			'path' => $pageDSPath . 'f2 (page).xml',
			'icon' => '',
			'scope' => 1,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:pages.ds.f3.title',
			'path' => $pageDSPath . 'f3 (page).xml',
			'icon' => '',
			'scope' => 1,
		);

		// Add FCE Data Structures
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.col2.title',
			'path' => $fceDSPath . '2col (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.col3.title',
			'path' => $fceDSPath . '3col (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.col4.title',
			'path' => $fceDSPath . '4col (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.mod1.title',
			'path' => $fceDSPath . '1mod (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.mod2.title',
			'path' => $fceDSPath . '2mod (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.mod3.title',
			'path' => $fceDSPath . '3mod (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.mod4.title',
			'path' => $fceDSPath . '4mod (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.plain_image.title',
			'path' => $fceDSPath . 'plain_image (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.feature_image.title',
			'path' => $fceDSPath . 'feature_image (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/lang/locallang.xml:fce.ds.html_wrapper.title',
			'path' => $fceDSPath . 'html_wrapper (fce).xml',
			'icon' => '',
			'scope' => 2,
		);

		return $staticDataStructureArray;
	}
}

if (defined('TYPO3_MODE') && $TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/templavoila_framework/class.tx_templavoilaframework_lib.php'])	{
	include_once($TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/templavoila_framework/class.tx_templavoilaframework_lib.php']);
}

?>
