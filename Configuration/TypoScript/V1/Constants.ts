# cat=Site Constants/general/a; type=string; label=Site Name: The overall name of the site.  This will appear on every page.
siteTitle =

# cat=Site Constants/general/b; type=string; label=Site URL: The domain for the site with the trailing slash included.(ex. http://www.mysite.com/)
siteURL =

# cat=Site Constants/general/c; type=user[BusyNoggin\TemplavoilaFramework\Utility\PageLink->main]; label=Site Logo: The path to the logo for your site which will appear in the header of every page (ex. fileadmin/images/mylogo.jpg). This setting is optional and may not be used by all skins.
siteLogo =

# cat=Site Constants/general/d; type=string; label=Copyright: Copyright for the site. The current year will automatically be added before this value.
copyright =

# cat=Site Constants/general/e; type=options[October 22 2010=%B %d %Y, Oct 22 2010=%b %d %Y, 22 October 2010=%d %B %Y, 22 Oct 08=%d %b %y, 10/22/08=%m/%d/%y, 22.10.2010=%d.%m.%Y]; label=Date Format.
dateFormat = %m/%d/%y

# cat=Site Constants/general/f; type=options[08:37 pm=%I:%M %p, 20:37=%H:%M]; label=Time Format.
timeFormat = %I:%M %p

# cat=Site Constants/general/g; type=options[October 22 2010 08:37 pm=%B %d %Y %I:%M %p, October 22 2010 20:37=%B %d %Y %H:%M, Oct 22 2010 08:37 pm=%b %d %Y %I:%M %p, Oct 22 2010 20:37=%b %d %Y %H:%M %p, 22 October 2010 08:37 pm=%d %B %Y %I:%M %p, 22 October 2010 20:37=%d %B %Y %H:%M, 22 Oct 08 08:37 pm=%d %b %y %I:%M %p, 22 Oct 08 20:37 pm=%d %b %y %H:%M, 10/22/08 08:37 pm=%m/%d/%y %I:%M %p, 10/22/08 20:37=%m/%d/%y %H:%M, 22.10.2010 08:37 pm=%d.%m.%Y %I:%M %p, 22.10.2010 20:37=%d.%m.%Y %H:%M]; label=Date/Time Format.
dateTimeFormat = %m/%d/%y %I:%M %p

# cat=Site Constants/general/h; type=user[BusyNoggin\TemplavoilaFramework\Utility\PageLink->main]; label=Generated Content 1: Page ID of the primary SysFolder for generated content. This SysFolder can contain menus, advertisements, and other content that appears on many pages throughout your site.
generatedContent-1.source =

# cat=Site Constants/general/i; type=user[BusyNoggin\TemplavoilaFramework\Utility\PageLink->main]; label=Generated Content 2: Page ID of the secondary SysFolder for generated content. This SysFolder can contain menus, advertisements, and other content that appears on many pages throughout your site.
generatedContent-2.source =

# This includes jQuery, enables jQuery.noConflict, and includes core.js for equal height modules.
# Alternatively, you can disable the parts individually
#
# page.includeJSLibs.tf_jquery >
# page.includeJS.tf_core >
# page.jsInline.1 >
enableJQuery = 1

# This sets the HTML tag to be used for wrapping the module titles.
# Values could be h1, h2, h3, h4, h5, div, p
moduleTitleTag = h3

# This sets the header level for normal headers inside a framed module
defaultHeaderInsideModule = {$content.defaultHeaderType}