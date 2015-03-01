<?php
defined('TYPO3_MODE') or die();

// Define the TCA for the access control calendar selector.
$skinSelector = array(
	'skin_selector' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:templavoila_framework/Resources/Private/Language/locallang_db.xlf:skinSelectorLabel',
		'config' => array(
			'type' => 'user',
			'userFunc' => BusyNoggin\TemplavoilaFramework\Utility\SkinSelector::class . '->display',
		)
	),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('sys_template', $skinSelector);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('sys_template', '--div--;LLL:EXT:templavoila_framework/Resources/Private/Language/locallang_db.xlf:skinSelectorTab, skin_selector');