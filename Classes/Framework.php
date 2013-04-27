<?php
namespace BusyNoggin\TemplavoilaFramework;

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

/**
 * General purpose library for working with skins.
 *
 * @author Web-Empowered Church <developer@webempoweredchurch.org>
 * @package TYPO3
 * @subpackage tx_templavoilaframework
 */
class Framework {

	/**
	 * Gets the key for the skin applied on the specified page.
	 *
	 * @param	int		The page id.
	 * @return	string
	 */
	public static function getCurrentSkin($pageId) {
		$tmpl = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance("t3lib_tsparser_ext");
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
		$customSkinPaths = self::getCustomSkinPaths();

		foreach ($customSkinPaths as $customSkinPath) {
			$skins = \TYPO3\CMS\Core\Utility\GeneralUtility::get_dirs(PATH_site . $customSkinPath);
			foreach ((array) $skins as $skin) {
				if (substr($skin, 0, 1) != '.') {
					$skinKeys[] = 'LOCAL:' . $skin;
				}
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
		$customSkinPaths = self::getCustomSkinPaths();
		list($skinType, $skinKey) = \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode(':', $skin);
		switch ($skinType) {
			case 'EXT':
				if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded($skinKey)) {
					$relSkinPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::siteRelPath($skinKey);
				} else {
					$relSkinPath = FALSE;
				}
				break;
			case 'LOCAL':
				foreach ($customSkinPaths as $customSkinPath) {
					$relSkinPath = $customSkinPath . $skinKey . '/';
					if (!@is_dir(PATH_site . $relSkinPath)) {
						$relSkinPath = FALSE;
					}

					if ($relSkinPath) {
						break;
					}
				}
				break;
		}
		return $relSkinPath;
	}

	/**
	 * Checks if the given path contains a skin.
	 *
	 * @param string $relativePath
	 * @return boolean
	 */
	public static function isSkin($relativePath) {
		$isSkin = FALSE;
		if (@is_file(PATH_site . $relativePath . '/Configuration/TypoScript/TypoScript.ts') || @is_file(PATH_site . $relativePath . 'typoscript/skin_typoscript.ts')) {
			$isSkin = TRUE;
		}

		return $isSkin;
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
		list($skinType, $skinKey) = \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode(':', $skin);
		$relSkinPath = self::getSkinPath($skin);
		if ($relSkinPath) {
			$absSkinPath = PATH_site . $relSkinPath;

			// @todo We eventually want to use YAML here.
			if (@is_file($absSkinPath . 'Meta/Info.txt')) {
				$infoPath = $absSkinPath . 'Meta/Info.txt';
				$isVersion2Layout = TRUE;
			} else {
				$infoPath = $absSkinPath . 'info.txt';
				$isVersion2Layout = FALSE;
			}

			$infoText = \TYPO3\CMS\Core\Utility\GeneralUtility::getURL($infoPath);
			if ($infoText) {
				$infoLines = preg_split('/[\r\n]+/', $infoText, -1, PREG_SPLIT_NO_EMPTY);
				foreach ($infoLines as $line) {
					list($key, $value) = \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode(':', $line, false, 2);
					$key = \TYPO3\CMS\Core\Utility\GeneralUtility::strtolower($key);
					if (($key == 'title') || ($key == 'description')) {
						$infoArray[$key] = $value;
					}
				}
			} else {
				$infoArray['title'] = $skinKey;
			}

			$infoArray['type'] = $skinType;
			$infoArray['path'] = $relSkinPath;

			if ($isVersion2Layout) {
				if (@is_file($absSkinPath . 'Meta/Screenshot.gif')) {
					$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'Meta/Screenshot.gif');
				} elseif (@is_file($absSkinPath . 'Meta/Screenshot.png')) {
					$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'Meta/Screenshot.png');
				} elseif (@is_file($absSkinPath . 'Meta/Screenshot.jpg')) {
					$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'Meta/Screenshot.jpg');
				}
			} else {
				if (@is_file($absSkinPath . 'screenshot.gif')) {
					$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'screenshot.gif');
				} elseif (@is_file($absSkinPath . 'screenshot.png')) {
					$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'screenshot.png');
				} elseif (@is_file($absSkinPath . 'screenshot.jpg')) {
					$infoArray['icon'] = self::getPathForSkinThumbnail($relSkinPath . 'screenshot.jpg');
				}
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
		$params .= '&md5sum=' . \TYPO3\CMS\Core\Utility\GeneralUtility::shortMD5($salt);
		$url = $thumbScript . '?&dummy=' . $GLOBALS['EXEC_TIME'] . $params;
		return $url;
	}

	/**
	 * Gets the first path (relative to TYPO3 root) where custom skins can be found. Defaults to fileadmin/templates/.
	 *
	 * @return string
	 */
	public static function getCustomSkinPath() {
		$customSkinPaths = self::getCustomSkinPaths();
		return $customSkinPaths[0];
	}

	/**
	 * Gets the path (relative to TYPO3 root) where custom skins can be found. Defaults to fileadmin/templates/.
	 *
	 * @return string
	 */
	public static function getCustomSkinPaths() {
		$extConf = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['templavoila_framework']);
		if (!$extConf['customSkinPath']) {
			$extConf['customSkinPath'] = 'fileadmin/templates/';
		}

		return \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode(',', $extConf['customSkinPath']);
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
				$row['skin_selector'] = \TYPO3\CMS\Core\Utility\GeneralUtility::callUserFunction($userFunc, $_params, $ref = NULL);
			}
		}

		if ($row['root'] && $row['skin_selector']) {
			$skin = $row['skin_selector'];
			$relSkinPath = self::getSkinPath($skin);

			if ($relSkinPath) {
				$relCorePath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::siteRelPath('templavoila_framework') . 'Configuration/';
				$absCorePath = PATH_site . $relCorePath;
				$absSkinPath = PATH_site . $relSkinPath;

				if (@is_file($absSkinPath . 'Configuration/TypoScript/TypoScript.ts')) {
					$skinConstants = @is_file($absSkinPath . 'Configuration/TypoScript/Constants.ts') ? \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absSkinPath . 'Configuration/TypoScript/Constants.ts') : '';
					$skinSetup = @is_file($absSkinPath . 'Configuration/TypoScript/TypoScript.ts') ? \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absSkinPath . 'Configuration/TypoScript/TypoScript.ts') : '';
					$skinIncludeStatic = @is_file($absSkinPath . 'Configuration/TypoScript/IncludeStatic.txt') ? \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absSkinPath . 'Configuration/TypoScript/IncludeStatic.txt') : '';
					$skinIncludeStaticFile = @is_file($absSkinPath . 'Configuration/TypoScript/IncludeStaticFile.txt') ? \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absSkinPath . 'Configuration/TypoScript/IncludeStaticFile.txt') : '';
				} else {
					$skinConstants = @is_file($absSkinPath . 'typoscript/skin_constants.ts') ? \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absSkinPath . 'typoscript/skin_constants.ts') : '';
					$skinSetup = @is_file($absSkinPath . 'typoscript/skin_typoscript.ts') ? \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absSkinPath . 'typoscript/skin_typoscript.ts') : '';
					$skinIncludeStatic = @is_file($absSkinPath . 'typoscript/include_static.txt') ? \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absSkinPath . 'typoscript/include_static.txt') : '';
					$skinIncludeStaticFile = @is_file($absSkinPath . 'typoscript/include_static_file.txt') ? \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absSkinPath . 'typoscript/include_static_file.txt') : '';
				}

				$renderMode = self::getSkinRenderMode($skinConstants, $relSkinPath);
				$coreSubrow = array(
					'constants' => \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absCorePath . 'TypoScript/V' . $renderMode . '/Constants.ts'),
					'config' => \TYPO3\CMS\Core\Utility\GeneralUtility::getUrl($absCorePath . 'TypoScript/V' . $renderMode . '/TypoScript.ts'),
					'editorcfg' => '',
					'include_static' => '',
					'include_static_file' => '',
					'title' => 'TemplaVoila Framework Core',
					'uid' => md5($relCorePath)
				);

				// Set old bnTemplates prefix for backwards compatibility.
				if ($renderMode === 1) {
					$coreSubrow['constants'] .= chr(10) . 'bnTemplates.corePath = ' . $relCorePath;
					$coreSubrow['constants'] .= chr(10) . 'templavoila_framework.corePath = ' . $relCorePath;
				} else {
					$coreSubrow['constants'] .= chr(10) . 'plugin.tx_templavoilaframework.corePath = ' . $relCorePath;
				}
				$pObj->processTemplate($coreSubrow, $idList.',templavoilaframework_core', $pid, 'templavoilaframework_core', $templateID);

				$skinSubrow = array(
					'constants'=>	$skinConstants,
					'config'=>		$skinSetup,
					'editorcfg'=>	'',
					'include_static' => ($skinIncludeStatic) ? implode(',', array_unique(\TYPO3\CMS\Core\Utility\GeneralUtility::intExplode(',', $skinIncludeStatic))) : '',
					'include_static_file' => ($skinIncludeStaticFile) ? implode(',', array_unique(explode(',', $skinIncludeStaticFile))) : '',
					'title' =>	$skin,
					'uid' => md5($relSkinPath)
				);

				// Set old bnTemplates prefix for backwards compatibility.
				if ($renderMode === 1) {
					$skinSubrow['constants'] .= chr(10) . 'bnTemplates.skinPath = ' . $relSkinPath;
					$skinSubrow['constants'] .= chr(10) . 'templavoila_framework.skinPath = ' . $relSkinPath;
					$skinSubrow['constants'] .= chr(10) . 'templavoila_framework.skinKey = ' . $skin;
				} else {
					$skinSubrow['constants'] .= chr(10) . 'plugin.tx_templavoilaframework.skinPath = ' . $relSkinPath;
					$skinSubrow['constants'] .= chr(10) . 'plugin.tx_templavoilaframework.skinKey = ' . $skin;
				}
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
		$tsParser = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Core\\TypoScript\\Parser\\TypoScriptParser');
		$tsParser->parse($constants);

		$skinRenderMode = intval($tsParser->setup['plugin.']['tx_templavoilaframework.']['renderMode']);
		if (!$skinRenderMode) {
			\TYPO3\CMS\Core\Utility\GeneralUtility::deprecationLog('The TemplaVoila Framework now requires that the render mode is set via tha \'plugin.templavoila_framework.renderMode\' TypoScript constant.' .
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

		$fileHandler = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('\\TYPO3\\CMS\\Core\\Utility\\File\\ExtendedFileUtility');
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
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:pages.ds.f1.title',
			'path' => $pageDSPath . 'f1 (page).xml',
			'icon' => '',
			'scope' => 1,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:pages.ds.f2.title',
			'path' => $pageDSPath . 'f2 (page).xml',
			'icon' => '',
			'scope' => 1,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:pages.ds.f3.title',
			'path' => $pageDSPath . 'f3 (page).xml',
			'icon' => '',
			'scope' => 1,
		);

		// Add FCE Data Structures
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.col2.title',
			'path' => $fceDSPath . '2col (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.col3.title',
			'path' => $fceDSPath . '3col (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.col4.title',
			'path' => $fceDSPath . '4col (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.mod1.title',
			'path' => $fceDSPath . '1mod (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.mod2.title',
			'path' => $fceDSPath . '2mod (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.mod3.title',
			'path' => $fceDSPath . '3mod (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.mod4.title',
			'path' => $fceDSPath . '4mod (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.plain_image.title',
			'path' => $fceDSPath . 'plain_image (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.feature_image.title',
			'path' => $fceDSPath . 'feature_image (fce).xml',
			'icon' => '',
			'scope' => 2,
		);
		$staticDataStructureArray[] = array(
			'title' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang.xlf:fce.ds.html_wrapper.title',
			'path' => $fceDSPath . 'html_wrapper (fce).xml',
			'icon' => '',
			'scope' => 2,
		);

		return $staticDataStructureArray;
	}
}

?>
