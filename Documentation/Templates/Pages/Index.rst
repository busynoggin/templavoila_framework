..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /../Includes/MainInclude.txt

================================
Page Template Overview
================================

The Busy Noggin QuickSite ships with a number of page template structures. Each of these templates are flexible in their ability to accomodate various visual designs by adjusting the CSS and the TypoScript objects associated with them.

Normally, you will only use two or three of these templates per site. It is recommended that you move any unused templates to a sysFolder called "Unused Templates." This will hide them from the user. Later, if you want to make them available again, you may do so by moving them back into the main GRSP.

Content Categories
================================

Fortunately, web pages are very similar and content on any web page will fall into one of these six categories.

**Header**
This occurs at the top of the site and can include any or all of the following: site identifier (logo), tag line, login box, search, global menu, etc.

**Footer**
This occurs at the bottom of the page and can include any or all of the following: copyright, links, contact info, etc.

**Main Content**
This is content that is central to the page and unique to the page. It is why the page exists.

**Feature**
This is content unique to a page and that falls right after the header. Often it spans the entire width of the page but does not have to.

**Additional Content Blocks**
This content is unique to the page but secondary to the main content.

**Generated Content Blocks**
These house information that is automatically generated and displayed on multiple pages in a site. This can include any or all of the following: menus, links, ads, teasers, etc. Find out more about generated content.

Categorizing content in a layout
================================

In the front-end coding stage of the workflow, there is a process of visualizing the HTML structure. An important part of this visualization is categorizing the content in a layout. Find out more about categorizing content here.

Installed Page Templates
================================

See the F1 Series, F2 Series and F3 Series templates that come pre-installed in the Busy Noggin QuickSite. Templates in each series can be used with templates in other series to create sites.

Pre & Post Code Libraries
================================

Each content block within the templates of the QuickSite is surrounded by pre code and post code TypoScript libraries. These can be used to place HTML code in various parts of the page template. This is how the structure of a page can be radically altered by the skin without needing to remap the page template itself.

You can find out more about pre and post code objects here.

The Magical Feature
================================

See how one page template can present multiple looks through the disappearing act of the magical feature.

Generated Content
================================

Generated content is content automatically retrieved by the system and used on multiple pages. Find out how the QuickSite handles generated content.

Auto Page Headline
================================

The framework can be set to auto generate an H1 headline from the page title or not. The default behavior can also be overridden on a page by page basis in the "extended" tab of the page properties. You can set the default (on or off) for this headline with the autoMainHeadlineDefault constant.


.. toctree::
	:maxdepth: 1
	:titlesonly:
	:glob:

	F1Series
	F2Series
	F3Series


