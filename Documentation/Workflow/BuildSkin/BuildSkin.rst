..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt



================================
Visualize the HTML Structure
================================

The key to any front-end code is to first accurately visualize the HTML structure needed to produce the design. When starting the coding process, we often print a ghosted image of the layout 0and use the print to outline content areas, make notes on color values, dimensions, etc.

To complete this visualization process you must:

- categorize the content
- determine the page templates & FCEs needed

When visualizing the HTML structure of a page, remember to think in terms of large blocks not individual elements.

Categorize Content
================================

We categorize each of the major content areas of a page into one of these six categories.

**Header**
This occurs at the top of the site and can include any or all of the following: site identifier (logo), tag line, login box, search, global menu, etc. Every web page has a header as does every template in the QuickSite.

**Footer**
This occurs at the bottom of the page and can include any or all of the following: copyright, links, contact info, etc. Every web page has a footer as does every template in the QuickSite.

**Main Content  Block**
This is content that is central to the page and unique to the page. It is why the page exists. Every web page has a main content block as does every template in the QuickSite.

**Feature**
This is content unique to a page and that falls right after the header. Often it spans the entire width of the page but does not have to. Not every web page has a feature but every page template in the QuickSite has a feature area available (it only appears if content is placed in it).

**Additional Content Blocks**
This content is unique to the page but secondary to the main content. Not every web page has additional content blocks and only the F2 and F3 series templates in the QuickSite have them.

**Generated Content Blocks**
These contain information that is automatically generated and displayed on multiple pages in a site. This can include any or all of the following: menus, links, ads, teasers, etc. Not every web page has generated content. Only some of the templates in the QuickSite have generated content blocks.

Determine page templates & FCEs needed
================================
Once the content is characterized, you will be able determine:

- which page templates are needed (F1a,F2d, etc.)
- what part of the layouts should be handled by utility FCEs
- what must be handled by custom content elements FCEs

In the Templates section, you can find out what page templates and utility FCEs are available in the Busy Noggin QuickSite. Once you have determined which templates are needed for your site, it is recommended that you move any unneeded page or FCE templates into a sysFolder labeled "Unused Templates".


Setup the Skin
================================

We generally copy an existing starter skin, rename it and edit it to create our custom skin.

================================
Code Static HTML Pages
================================

This is actually an optional step. In the past we just started writing the TypoScript to create the HTML, the CSS and the JavaScript all at the same time.

However, recently as we have worked more in teams we have been first coding the page templates as static files. This means that front-end developers that are not familiar with TypoScript can code the pages and then be followed by TypoScript expert who can quickly write the TypoScript to output the desired HTML.

The files you will work with in this stage are located at:

- skinDirectory/Resources/Development/StaticHTML/YourTemplateChoice.php
- skinDirectory/Resources/Images/
- skinDirectory/Resources/JavaScript/
- skinDirectory/Resources/Public/Stylesheets

**Be careful with your capitalization. If you develop locally on a case insensitive drive and make a mistake on capitalization, you will likely see your code fail on the production server.**


================================
Edit the Skin
================================

You will need to edit TypoScript in the skin to create proper HTML for header, footer, menus, etc. If you want, you can write simple TypoScript HTML objects as placeholders and then replace them later with the final TypoScript for menu and content generation later. This may let you get to the CSS coding more quickly.

The preCode and postCode objects are very important for making major changes to a page's structure without remapping page templates.

