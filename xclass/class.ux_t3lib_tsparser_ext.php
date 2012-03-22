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

require_once(PATH_t3lib . 'class.t3lib_tsparser_ext.php');

/**
 * Extends t3lib_TStemplate to allow automatic skin selection and inclusion.
 *
 * @author Web-Empowered Church <developer@webempoweredchurch.org>
 * @package TYPO3
 * @subpackage tx_templavoilaframework
 */
class ux_t3lib_tsparser_ext extends t3lib_tsparser_ext {

	/**
	 * Includes static template records (from static_template table) and static template files (from extensions) for the input template record row.
	 *
	 * @param	string		A list of already processed template ids including the current; The list is on the form "[prefix]_[uid]" where [prefix] is "sys" for "sys_template" records, "static" for "static_template" records and "ext_" for static include files (from extensions). The list is used to check that the recursive inclusion of templates does not go into circles: Simply it is used to NOT include a template record/file which has already BEEN included somewhere in the recursion.
	 * @param	string		The id of the current template. Same syntax as $idList ids, eg. "sys_123"
	 * @param	array		The PID of the input template record
	 * @param	array		A full TypoScript template record
	 * @return	void
	 * @see processTemplate()
	 */
	function includeStaticTypoScriptSources($idList, $templateID, $pid, $row) {
		parent::includeStaticTyposcriptSources($idList, $templateID, $pid, $row);
		$_params = array(
			'idList' => &$idList,
			'templateId' => &$templateId,
			'pid' => &$pid,
			'row' => &$row
		);
		tx_templavoilaframework_lib::includeTypoScriptForFrameworkCoreAndSkins($_params, $this);
	}
}

if (defined('TYPO3_MODE') && $TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/templavoila_framework/xclass/class.ux_t3lib_tsparser_ext.php'])	{
	include_once($TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/templavoila_framework/xclass/class.ux_t3lib_tsparser_ext.php']);
}
?>