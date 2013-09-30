# cat=Site Constants/general/a; type=string; label=Site Name: The overall name of the site.  This will appear on every page.
siteTitle =

# cat=Site Constants/general/b; type=string; label=Site URL: The domain for the site with the trailing slash included.(ex. http://www.mysite.com/)
siteURL =

# cat=Site Constants/general/c; type=user[BusyNoggin\TemplavoilaFramework\Utility\PageLink->main]; label=Site Logo: The path to the logo for your site which will appear in the header of every page (ex. fileadmin/images/mylogo.jpg). This setting is optional and may not be used by all skins.
plugin.tx_templavoilaframework.siteLogo =

# cat=Site Constants/general/d; type=string; label=Copyright: Copyright for the site. The current year will automatically be added before this value.
copyright =

# cat=Site Constants/general/e; type=options[October 22 2010=%B %d %Y, Oct 22 2010=%b %d %Y, 22 October 2010=%d %B %Y, 22 Oct 08=%d %b %y, 10/22/08=%m/%d/%y, 22.10.2010=%d.%m.%Y]; label=Date Format.
dateFormat = %m/%d/%y

# cat=Site Constants/general/f; type=options[08:37 pm=%I:%M %p, 20:37=%H:%M]; label=Time Format.
timeFormat = %I:%M %p

# cat=Site Constants/general/g; type=options[October 22 2010 08:37 pm=%B %d %Y %I:%M %p, October 22 2010 20:37=%B %d %Y %H:%M, Oct 22 2010 08:37 pm=%b %d %Y %I:%M %p, Oct 22 2010 20:37=%b %d %Y %H:%M %p, 22 October 2010 08:37 pm=%d %B %Y %I:%M %p, 22 October 2010 20:37=%d %B %Y %H:%M, 22 Oct 08 08:37 pm=%d %b %y %I:%M %p, 22 Oct 08 20:37 pm=%d %b %y %H:%M, 10/22/08 08:37 pm=%m/%d/%y %I:%M %p, 10/22/08 20:37=%m/%d/%y %H:%M, 22.10.2010 08:37 pm=%d.%m.%Y %I:%M %p, 22.10.2010 20:37=%d.%m.%Y %H:%M]; label=Date/Time Format.
dateTimeFormat = %m/%d/%y %I:%M %p

# cat=Site Constants/general/h; type=user[BusyNoggin\TemplavoilaFramework\Utility\PageLink->main]; label=Generated Content 1: Page ID of the primary SysFolder for generated content. This SysFolder can contain menus, advertisements, and other content that appears on many pages throughout your site.
plugin.tx_templavoilaframework.generatedContent-1.source =

# cat=Site Constants/general/i; type=user[BusyNoggin\TemplavoilaFramework\Utility\PageLink->main]; label=Generated Content 2: Page ID of the secondary SysFolder for generated content. This SysFolder can contain menus, advertisements, and other content that appears on many pages throughout your site.
plugin.tx_templavoilaframework.generatedContent-2.source =

# This sets the generated content to be pulled from a sysfolder not a TV page.
plugin.tx_templavoilaframework.generatedContentRenderMode = 0

# This includes jQuery, enables jQuery.noConflict, and includes core.js for equal height modules.
# Alternatively, you can disable the parts individually
#
# page.includeJSlibs.tf_jquery >
# page.includeJS.tf_core >
# page.jsInline.1 >
plugin.tx_templavoilaframework.enableJQuery = 1

# This sets the HTML tag to be used for wrapping the module titles.
# Values could be h1, h2, h3, h4, h5, div, p
plugin.tx_templavoilaframework.moduleTitleTag = h3

# This sets the header level for normal headers inside a framed module
plugin.tx_templavoilaframework.defaultHeaderInsideModule = {$content.defaultHeaderType}

# Sets up the default for the skin CSS
plugin.tx_templavoilaframework.skinCSS = {$plugin.tx_templavoilaframework.skinPath}Resources/Public/StyleSheets/Screen.css
plugin.tx_templavoilaframework.skinJS = {$plugin.tx_templavoilaframework.skinPath}Resources/Public/JavaScript/JavaScript.js

#Sets the rendering for module headers
plugin.tx_templavoilaframework.moduleHeaderWrap = <{$plugin.tx_templavoilaframework.moduleTitleTag} class="header"><span>|</span></{$plugin.tx_templavoilaframework.moduleTitleTag}>

#Sets the rendering for module footers
plugin.tx_templavoilaframework.moduleFooter = <div class="footer"><span>&nbsp;</span></div>

#Sets the bottom margin for columns and modules
plugin.tx_templavoilaframework.columnBottomMargin = 15
plugin.tx_templavoilaframework.moduleBottomMargin = 15

## Default Constants
plugin.tx_templavoilaframework {
	createColumnModuleCSS = 1
	minFullImageWidth = 0
	autoMainHeadlineDefault = 1
	autoHeadlineBeginWrap = <h1 class="main-headline">
	autoHeadlineEndWrap = </h1>
	featureBleedDefault = 0
	featureLeftPadding = 20
	featureRightPadding = 20
	globalGutter = 20
	columnRuleDefault = 0
	moduleBodyTopBuffer = 10
	moduleBodyBottomBuffer = 10
	moduleBodyLeftBuffer = 10
	moduleBodyRightBuffer = 10
	moduleBodyBorderWidth = 1
	showModuleTitleDefault = 1
	// Include any top/bottom border or padding in the height parameter below.
	// Enter zero if you do not want a footer on your module.
	moduleFooterTotalHeight = 20

	twoColumnGroup {
		column-1 {
			beginWrap = <div class="{register:columnGroupClass} two-column-group{register:classColumnGroupDistribution}"><div class="column{register:classColumn1Distribution} column-1 column-1-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div>
		}
		column-2 {
			beginWrap.default = <div class="column{register:originalClassColumn2Distribution} column-2 column-2-c{register:tx_templavoila_pi1.parentRec.uid}">
			beginWrap.level-2 = <div class="column{register:classColumn2Distribution} column-2 column-2-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div></div><!-- end .two-column-group  -->
		}
	}

	threeColumnGroup {
		column-1 {
			beginWrap = <div class="{register:columnGroupClass} three-column-group{register:classColumnGroupDistribution}"><div class="column{register:classColumn1Distribution} column-1 column-1-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div>
		}
		column-2 {
			beginWrap.default = <div class="column{register:originalClassColumn2Distribution} column-2 column-2-c{register:tx_templavoila_pi1.parentRec.uid}">
			beginWrap.level-2 = <div class="column{register:classColumn2Distribution} column-2 column-2-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div>
		}

		column-3 {
			beginWrap.default = <div class="column{register:originalClassColumn3Distribution} column-3 column-3-c{register:tx_templavoila_pi1.parentRec.uid}">
			beginWrap.level-2 = <div class="column{register:classColumn3Distribution} column-3 column-3-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div></div><!-- end .three-column-group  -->
		}
	}

	fourColumnGroup {
		column-1 {
			beginWrap = <div class="{register:columnGroupClass} four-column-group"><div class="column{register:classColumnDistribution} quarter column-1 column-1-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div>
		}
		column-2 {
			beginWrap = <div class="column{register:classColumnDistribution} column-2 column-2-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div>
		}

		column-3 {
			beginWrap = <div class="column{register:classColumnDistribution} column-3 column-3-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div>
		}

		column-4 {
			beginWrap = <div class="column{register:classColumnDistribution} column-4 column-4-c{register:tx_templavoila_pi1.parentRec.uid}">
			endWrap = </div></div><!-- end .four-column-group  -->
		}
	}

	## This setups the default rendering for the content blocks
	baseDefaults {
		settings {
			feature {
				width = 960
				tag = div
				id = feature
				class =
				minFullImageWidth = {$plugin.tx_templavoilaframework.minFullImageWidth}
			}
			contentBlock-1 {
				width = 960
				tag = div
				id = content-block-1
				class =
				minFullImageWidth = {$plugin.tx_templavoilaframework.minFullImageWidth}
			}
			contentBlock-2 {
				width = 960
				tag = div
				id = content-block-2
				class =
				minFullImageWidth = {$plugin.tx_templavoilaframework.minFullImageWidth}
			}
			contentBlock-3 {
				width = 960
				tag = div
				id = content-block-3
				class =
				minFullImageWidth = {$plugin.tx_templavoilaframework.minFullImageWidth}
			}
			generatedContent-1 {
				width = 960
				tag = div
				id = generated-content-1
				class =
				minFullImageWidth = {$plugin.tx_templavoilaframework.minFullImageWidth}
				disable = 0
			}
			generatedContent-2 {
				width = 960
				tag = div
				id = generated-content-2
				class =
				minFullImageWidth = {$plugin.tx_templavoilaframework.minFullImageWidth}
				disable = 0
			}
		}
	}
	f1a.settings < .baseDefaults.settings
	f1a {
		settings {
			generatedContent-1.disable = 1
			generatedContent-2.disable = 1
		}
		wraps {
			feature {
				beginWrap = <{register:f1afeaturetag} {register:f1afeatureid} {register:f1afeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1afeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f1acontentBlock-1tag} {register:f1acontentBlock-1id} {register:f1acontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1acontentBlock-1tag}>
			}
		}
	}
	f1b.settings < .baseDefaults.settings
	f1b {
		settings {
			generatedContent-1.disable = 1
			generatedContent-2.disable = 1
		}
		wraps {
			feature {
				beginWrap = <{register:f1bfeaturetag} {register:f1bfeatureid} {register:f1bfeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1bfeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f1bcontentBlock-1tag} {register:f1bcontentBlock-1id} {register:f1bcontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1bcontentBlock-1tag}>
			}
		}
	}
	f1c.settings < .baseDefaults.settings
	f1c {
		settings {
			generatedContent-1.disable = 1
			generatedContent-2.disable = 1
		}
		wraps {
			feature {
				beginWrap = <{register:f1cfeaturetag} {register:f1cfeatureid} {register:f1cfeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1cfeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f1ccontentBlock-1tag} {register:f1ccontentBlock-1id} {register:f1ccontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1ccontentBlock-1tag}>
			}
		}
	}
	f1d.settings < .baseDefaults.settings
	f1d {
		settings {
			generatedContent-1.disable = 0
			generatedContent-2.disable = 1
		}
		wraps {
			feature {
				beginWrap = <{register:f1dfeaturetag} {register:f1dfeatureid} {register:f1dfeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1dfeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f1dcontentBlock-1tag} {register:f1dcontentBlock-1id} {register:f1dcontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1dcontentBlock-1tag}>
			}
			generatedContent-1 {
				beginWrap = <{register:f1dgeneratedContent-1tag} {register:f1dgeneratedContent-1id} {register:f1dgeneratedContent-1class}>
				endWrap = <div class="clear-only">&nbsp;</div></{register:f1dgeneratedContent-1tag}>
			}
		}

	}
	f1e.settings < .baseDefaults.settings
	f1e {
		settings {
			generatedContent-1.disable = 1
			generatedContent-2.disable = 0
		}
		wraps {
			feature {
				beginWrap = <{register:f1efeaturetag} {register:f1efeatureid} {register:f1efeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1efeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f1econtentBlock-1tag} {register:f1econtentBlock-1id} {register:f1econtentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1econtentBlock-1tag}>
			}
			generatedContent-2 {
				beginWrap = <{register:f1egeneratedContent-2tag} {register:f1egeneratedContent-2id} {register:f1egeneratedContent-2class}>
				endWrap = <div class="clear-only">&nbsp;</div></{register:f1egeneratedContent-2tag}>
			}
		}
	}
	f1f.settings < .baseDefaults.settings
	f1f {
		settings {
			generatedContent-1.disable = 0
			generatedContent-2.disable = 0
		}
		wraps {
			feature {
				beginWrap = <{register:f1ffeaturetag} {register:f1ffeatureid} {register:f1ffeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1ffeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f1fcontentBlock-1tag} {register:f1fcontentBlock-1id} {register:f1fcontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1fcontentBlock-1tag}>
			}
			generatedContent-1 {
				beginWrap = <{register:f1fgeneratedContent-1tag} {register:f1fgeneratedContent-1id} {register:f1fgeneratedContent-1class}>
				endWrap = <div class="clear-only">&nbsp;</div></{register:f1fgeneratedContent-1tag}>
			}
			generatedContent-2 {
				beginWrap = <{register:f1fgeneratedContent-2tag} {register:f1fgeneratedContent-2id} {register:f1fgeneratedContent-2class}>
				endWrap = <div class="clear-only">&nbsp;</div></{register:f1fgeneratedContent-2tag}>
			}
		}
	}
	f2a.settings < .baseDefaults.settings
	f2a {
		settings {
			generatedContent-1.disable = 1
			generatedContent-2.disable = 1
		}
		wraps {
			feature {
				beginWrap = <{register:f2afeaturetag} {register:f2afeatureid} {register:f2afeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2afeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f2acontentBlock-1tag} {register:f2acontentBlock-1id} {register:f2acontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2acontentBlock-1tag}>
			}
			contentBlock-2 {
				beginWrap = <{register:f2acontentBlock-2tag} {register:f2acontentBlock-2id} {register:f2acontentBlock-2class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2acontentBlock-2tag}>
			}
		}
	}
	f2b.settings < .baseDefaults.settings
	f2b {
		settings {
			generatedContent-1.disable = 1
			generatedContent-2.disable = 1
		}
		wraps {
			feature {
				beginWrap = <{register:f2bfeaturetag} {register:f2bfeatureid} {register:f2bfeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2bfeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f2bcontentBlock-1tag} {register:f2bcontentBlock-1id} {register:f2bcontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2bcontentBlock-1tag}>
			}
			contentBlock-2 {
				beginWrap = <{register:f2bcontentBlock-2tag} {register:f2bcontentBlock-2id} {register:f2bcontentBlock-2class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2bcontentBlock-2tag}>
			}
		}
	}
	f2c.settings < .baseDefaults.settings
	f2c {
		settings {
			generatedContent-1.disable = 1
			generatedContent-2.disable = 1
		}
		wraps {
			feature {
				beginWrap = <{register:f2cfeaturetag} {register:f2cfeatureid} {register:f2cfeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2cfeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f2ccontentBlock-1tag} {register:f2ccontentBlock-1id} {register:f2ccontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2ccontentBlock-1tag}>
			}
			contentBlock-2 {
				beginWrap = <{register:f2ccontentBlock-2tag} {register:f2ccontentBlock-2id} {register:f2ccontentBlock-2class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2ccontentBlock-2tag}>
			}
		}
	}
	f2d.settings < .baseDefaults.settings
	f2d {
		settings {
			generatedContent-1.disable = 0
			generatedContent-2.disable = 1
		}
		wraps {
			feature {
				beginWrap = <{register:f2dfeaturetag} {register:f2dfeatureid} {register:f2dfeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2dfeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f2dcontentBlock-1tag} {register:f2dcontentBlock-1id} {register:f2dcontentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2dcontentBlock-1tag}>
			}
			contentBlock-2 {
				beginWrap = <{register:f2dcontentBlock-2tag} {register:f2dcontentBlock-2id} {register:f2dcontentBlock-2class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2dcontentBlock-2tag}>
			}
			generatedContent-1 {
				beginWrap = <{register:f2dgeneratedContent-1tag} {register:f2dgeneratedContent-1id} {register:f2dgeneratedContent-1class}>
				endWrap = <div class="clear-only">&nbsp;</div></{register:f2dgeneratedContent-1tag}>
			}
		}
	}
	f2e.settings < .baseDefaults.settings
	f2e {
		settings {
			generatedContent-1.disable = 1
			generatedContent-2.disable = 0
		}
		wraps {
			feature {
				beginWrap = <{register:f2efeaturetag} {register:f2efeatureid} {register:f2efeatureclass}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2efeaturetag}>
			}
			contentBlock-1 {
				beginWrap = <{register:f2econtentBlock-1tag} {register:f2econtentBlock-1id} {register:f2econtentBlock-1class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2econtentBlock-1tag}>
			}
			contentBlock-2 {
				beginWrap = <{register:f2econtentBlock-2tag} {register:f2econtentBlock-2id} {register:f2econtentBlock-2class}><!--TYPO3SEARCH_begin-->
				endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f2econtentBlock-2tag}>
			}

			generatedContent-2 {
				beginWrap = <{register:f2egeneratedContent-2tag} {register:f2egeneratedContent-2id} {register:f2egeneratedContent-2class}>
				endWrap = <div class="clear-only">&nbsp;</div></{register:f2egeneratedContent-2tag}>
			}
		}
	}
	f3a.settings < .baseDefaults.settings
	f3a.wraps {
		feature {
			beginWrap = <{register:f3afeaturetag} {register:f3afeatureid} {register:f3afeatureclass}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3afeaturetag}>
		}
		contentBlock-1 {
			beginWrap = <{register:f3acontentBlock-1tag} {register:f3acontentBlock-1id} {register:f3acontentBlock-1class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3acontentBlock-1tag}>
		}
		contentBlock-2 {
			beginWrap = <{register:f3acontentBlock-2tag} {register:f3acontentBlock-2id} {register:f3acontentBlock-2class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3acontentBlock-2tag}>
		}
		contentBlock-3 {
			beginWrap = <{register:f3acontentBlock-3tag} {register:f3acontentBlock-3id} {register:f3acontentBlock-3class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3acontentBlock-3tag}>
		}
	}
	f3b.settings < .baseDefaults.settings
	f3b.wraps {
		feature {
			beginWrap = <{register:f3bfeaturetag} {register:f3bfeatureid} {register:f3bfeatureclass}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3bfeaturetag}>
		}
		contentBlock-1 {
			beginWrap = <{register:f3bcontentBlock-1tag} {register:f3bcontentBlock-1id} {register:f3bcontentBlock-1class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3bcontentBlock-1tag}>
		}
		contentBlock-2 {
			beginWrap = <{register:f3bcontentBlock-2tag} {register:f3bcontentBlock-2id} {register:f3bcontentBlock-2class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3bcontentBlock-2tag}>
		}
		contentBlock-3 {
			beginWrap = <{register:f3bcontentBlock-3tag} {register:f3bcontentBlock-3id} {register:f3bcontentBlock-3class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3bcontentBlock-3tag}>
		}
	}
	f3c.settings < .baseDefaults.settings
	f3c.wraps {
		feature {
			beginWrap = <{register:f3cfeaturetag} {register:f3cfeatureid} {register:f3cfeatureclass}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3cfeaturetag}>
		}
		contentBlock-1 {
			beginWrap = <{register:f3ccontentBlock-1tag} {register:f3ccontentBlock-1id} {register:f3ccontentBlock-1class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3ccontentBlock-1tag}>
		}
		contentBlock-2 {
			beginWrap = <{register:f3ccontentBlock-2tag} {register:f3ccontentBlock-2id} {register:f3ccontentBlock-2class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3ccontentBlock-2tag}>
		}
		contentBlock-3 {
			beginWrap = <{register:f3ccontentBlock-3tag} {register:f3ccontentBlock-3id} {register:f3ccontentBlock-3class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3ccontentBlock-3tag}>
		}
	}
	f3d.settings < .baseDefaults.settings
	f3d.wraps {
		feature {
			beginWrap = <{register:f3dfeaturetag} {register:f3dfeatureid} {register:f3dfeatureclass}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3dfeaturetag}>
		}
		contentBlock-1 {
			beginWrap = <{register:f3dcontentBlock-1tag} {register:f3dcontentBlock-1id} {register:f3dcontentBlock-1class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3dcontentBlock-1tag}>
		}
		contentBlock-2 {
			beginWrap = <{register:f3dcontentBlock-2tag} {register:f3dcontentBlock-2id} {register:f3dcontentBlock-2class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3dcontentBlock-2tag}>
		}
		contentBlock-3 {
			beginWrap = <{register:f3dcontentBlock-3tag} {register:f3dcontentBlock-3id} {register:f3dcontentBlock-3class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f3dcontentBlock-3tag}>
		}
	}
}