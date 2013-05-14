..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /../Includes/MainInclude.txt

================================
Magical Feature
================================

All of the templates in the Busy Noggin QuckSite have a content area called "feature" which structurally falls immediately after the header. On designs that take advantage of it, it usually spans the entire width of the page; however, it doesn't have too. It can span just part of the page with other content floated to the right or left.

**What makes it magical?**

This feature content can perform a disappearing act. It is programmed so that it only appears if an editor places content within it. Add to that the ability to set the feature to bleed or not and this means that every page template has three looks.

Three page templates for the price of one. What a deal!

**Example of a page template with various feature scenarios**

**No feature content placed.**

This is what this template looks like if the user does not place any content in the feature area. Both it and its pre & post TypoScript objects are simply not rendered.

// @todo-ron add screen

**The same template with feature content placed.**

This is what this template looks like if the user places content in the feature area (in this case an image and text set in 2 columns).

// @todo-ron add screen


**The same template with feature content set to bleed.**

This is what this template looks like if the user places content in the feature area (in this case a large image) and it is set to bleed.

// @todo-ron add screen