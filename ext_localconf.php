<?php
if (!defined ('TYPO3_MODE')) 	die ('Access denied.');

if (t3lib_div::int_from_ver(TYPO3_version) >= 4004000) {
	$TYPO3_CONF_VARS['SC_OPTIONS']['t3lib/class.t3lib_tstemplate.php']['includeStaticTypoScriptSourcesAtEnd'][] = 'EXT:templavoila_framework/class.tx_templavoilaframework_lib.php:&tx_templavoilaframework_lib->includeTypoScriptForFrameworkCoreAndSkins';
	$backendStylesheet = 'backend.css';
} else {
	$TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['t3lib/class.t3lib_tstemplate.php'] = t3lib_extMgm::extPath($_EXTKEY) . 'xclass/class.ux_t3lib_tstemplate.php';
	$TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['t3lib/class.t3lib_tsparser_ext.php'] = t3lib_extMgm::extPath($_EXTKEY) . 'xclass/class.ux_t3lib_tsparser_ext.php';
	$backendStylesheet = 'backend_typo3_4-3.css';
}

// Update TemplaVoila with special stylesheet and Javascript
t3lib_extMgm::addPageTSConfig('
	#Include js file for backend styling
	mod.web_txtemplavoilaM1.javascript.file1 = ' . t3lib_extMgm::extRelPath('templavoila_framework') . 'core_templates/js/backend.js

	#Include css file for backend styling
	mod.web_txtemplavoilaM1.stylesheet = ' . t3lib_extMgm::extRelPath('templavoila_framework') . 'core_templates/css/' . $backendStylesheet . '
');

$staticDataStructures = tx_templavoilaframework_lib::getStaticDataStructureArray(
	'EXT:' . $_EXTKEY . '/core_templates/datastructures/page/',
	'EXT:' . $_EXTKEY . '/core_templates/datastructures/fce/'
);
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['templavoila']['staticDataStructures'] = array_merge(
	(array) $GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['templavoila']['staticDataStructures'],
	$staticDataStructures
);

?>