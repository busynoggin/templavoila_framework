# cat=Site Constants/general/a; type=string; label=Site Name: The overall name of the site.  This will appear on every page.
siteTitle =

# cat=Site Constants/general/b; type=string; label=Site URL: The domain for the site with the trailing slash included.(ex. http://www.mysite.com/)
siteURL =

# cat=Site Constants/general/c; type=user[EXT:templavoila_framework/class.tx_templavoilaframework_pagelink.php:&tx_templavoilaframework_pagelink->main]; label=Site Logo: The path to the logo for your site which will appear in the header of every page (ex. fileadmin/images/mylogo.jpg). This setting is optional and may not be used by all skins.
plugin.tx_templavoilaframework.siteLogo =

# cat=Site Constants/general/d; type=string; label=Copyright: Copyright for the site. The current year will automatically be added before this value.
copyright = 

# cat=Site Constants/general/e; type=options[October 22 2010=%B %d %Y, Oct 22 2010=%b %d %Y, 22 October 2010=%d %B %Y, 22 Oct 08=%d %b %y, 10/22/08=%m/%d/%y, 22.10.2010=%d.%m.%Y]; label=Date Format.
dateFormat = %m/%d/%y

# cat=Site Constants/general/f; type=options[08:37 pm=%I:%M %p, 20:37=%H:%M]; label=Time Format.
timeFormat = %I:%M %p

# cat=Site Constants/general/g; type=options[October 22 2010 08:37 pm=%B %d %Y %I:%M %p, October 22 2010 20:37=%B %d %Y %H:%M, Oct 22 2010 08:37 pm=%b %d %Y %I:%M %p, Oct 22 2010 20:37=%b %d %Y %H:%M %p, 22 October 2010 08:37 pm=%d %B %Y %I:%M %p, 22 October 2010 20:37=%d %B %Y %H:%M, 22 Oct 08 08:37 pm=%d %b %y %I:%M %p, 22 Oct 08 20:37 pm=%d %b %y %H:%M, 10/22/08 08:37 pm=%m/%d/%y %I:%M %p, 10/22/08 20:37=%m/%d/%y %H:%M, 22.10.2010 08:37 pm=%d.%m.%Y %I:%M %p, 22.10.2010 20:37=%d.%m.%Y %H:%M]; label=Date/Time Format.
dateTimeFormat = %m/%d/%y %I:%M %p

# cat=Site Constants/general/h; type=user[EXT:templavoila_framework/class.tx_templavoilaframework_pagelink.php:&tx_templavoilaframework_pagelink->main]; label=Generated Content 1: Page ID of the primary SysFolder for generated content. This SysFolder can contain menus, advertisements, and other content that appears on many pages throughout your site.
plugin.tx_templavoilaframework.generatedContent-1.source =

# cat=Site Constants/general/i; type=user[EXT:templavoila_framework/class.tx_templavoilaframework_pagelink.php:&tx_templavoilaframework_pagelink->main]; label=Generated Content 2: Page ID of the secondary SysFolder for generated content. This SysFolder can contain menus, advertisements, and other content that appears on many pages throughout your site.
plugin.tx_templavoilaframework.generatedContent-2.source =

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
plugin.tx_templavoilaframework.skinCSS = {$templavoila_framework.skinPath}css/mainstyles.css

#Sets the rendering for module headers
plugin.tx_templavoilaframework.moduleHeaderWrap = <{$plugin.tx_templavoilaframework.moduleTitleTag} class="header"><span>|</span></{$plugin.tx_templavoilaframework.moduleTitleTag}>

#Sets the rendering for module footers
plugin.tx_templavoilaframework.moduleFooter = <div class="module-footer"><span>&nbsp;</span></div>

## This setups the default rendering for the content blocks
plugin.tx_templavoilaframework {
	autoHeadlineWrap = <h1 class="main-headline">|</h1>
	createColumnModuleCSS = 1
	minFullImageWidth = 0
	baseDefaults {
		settings {
			feature {
				width = 960
				tag = div
				id = feature
				class =
			}
			contentBlock-1 {
				width = 960
				tag = div
				id = content-block-1
				class =
			}
			contentBlock-2 {
				width = 960
				tag = div
				id = content-block-2
				class =
			}
			contentBlock-3 {
				width = 960
				tag = div
				id = content-block-3
				class =
			}
			generatedContent-1 {
				width = 960
				tag = div
				id = generated-content-1
				class =
			}
			generatedContent-2 {
				width = 960
				tag = div
				id = generated-content-2
				class =
			}
		}
	}
	f1a.settings < .baseDefaults.settings
	f1a.wraps {
		feature {
			beginWrap = <{register:f1afeaturetag} {register:f1afeatureid} {register:f1afeatureclass}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1afeaturetag}>
		}
		contentBlock-1 {
			beginWrap = <{register:f1acontentBlock-1tag} {register:f1acontentBlock-1id} {register:f1acontentBlock-1class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1acontentBlock-1tag}>
		}
	}
	f1b.settings < .baseDefaults.settings
	f1b.wraps {
		feature {
			beginWrap = <{register:f1bfeaturetag} {register:f1bfeatureid} {register:f1bfeatureclass}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1bfeaturetag}>
		}
		contentBlock-1 {
			beginWrap = <{register:f1bcontentBlock-1tag} {register:f1bcontentBlock-1id} {register:f1bcontentBlock-1class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1bcontentBlock-1tag}>
		}
	}
	f1c.settings < .baseDefaults.settings
	f1c.wraps {
		feature {
			beginWrap = <{register:f1cfeaturetag} {register:f1cfeatureid} {register:f1cfeatureclass}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1cfeaturetag}>
		}
		contentBlock-1 {
			beginWrap = <{register:f1ccontentBlock-1tag} {register:f1ccontentBlock-1id} {register:f1ccontentBlock-1class}><!--TYPO3SEARCH_begin-->
			endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1ccontentBlock-1tag}>
		}
	}
	f1d.settings < .baseDefaults.settings
	f1d.wraps {
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
	f1e.settings < .baseDefaults.settings
	f1e.wraps {
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
	f1f.settings < .baseDefaults.settings
	f1f.wraps {
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
	f2a.settings < .baseDefaults.settings
	f2a.wraps {
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
	f2b.settings < .baseDefaults.settings
	f2b.wraps {
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
	f2c.settings < .baseDefaults.settings
	f2c.wraps {
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
	f2d.settings < .baseDefaults.settings
	f2d.wraps {
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
	f2e.settings < .baseDefaults.settings
	f2e.wraps {
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