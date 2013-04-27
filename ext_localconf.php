<?php
if (!defined ('TYPO3_MODE')) 	die ('Access denied.');

$TYPO3_CONF_VARS['SC_OPTIONS']['t3lib/class.t3lib_tstemplate.php']['includeStaticTypoScriptSourcesAtEnd'][] = 'BusyNoggin\\TemplavoilaFramework\\Framework->includeTypoScriptForFrameworkCoreAndSkins';

// Update TemplaVoila with special stylesheet and Javascript
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
	#Include js file for backend styling
	mod.web_txtemplavoilaM1.javascript.file1 = ' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('templavoila_framework') . 'Resources/Public/JavaScript/backend.js

	#Include css file for backend styling
	mod.web_txtemplavoilaM1.stylesheet = ' . \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath('templavoila_framework') . 'Resources/Public/StyleSheets/backend.css
');

$staticDataStructures = \BusyNoggin\TemplavoilaFramework\Framework::getStaticDataStructureArray(
	'EXT:' . $_EXTKEY . '/Configuration/TemplaVoila/DataStructure/Page/',
	'EXT:' . $_EXTKEY . '/Configuration/TemplaVoila/DataStructure/FCE/'
);
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['templavoila']['staticDataStructures'] = array_merge(
	(array) $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['templavoila']['staticDataStructures'],
	$staticDataStructures
);

?>