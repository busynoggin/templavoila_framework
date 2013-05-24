..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt

================================
Mapping Blocks vs Elements
================================

When we first started working with TemplaVoila, we had a tendency to map our templates similar to the examples in the Futuristic Template Building tutorial. We generally would map TypoScript objects to individual elements; however, in the TemplaVoila Framework, TypoScript objects are mapped to larger areas.

// @todo-ron link FTB tutorial

Let's take a look at this header design..

.. figure:: Images/r1_header.jpg
	:width: 500
	:alt: Example Page

The Old Way
================================

In the past we would have mapped the masthead, utility menu and global menu as separate Typoscript objects (see below). In this example, the menu (#1), the site-wide promo (#2) and utility menu (#3) would have been seperate objects and the logo, upper right button and search would be in the template HTML.

.. figure:: Images/r1_mapping_then.jpg
	:width: 500
	:alt: Example Page

This approach meant that if the utility menu (#3) was eliminated or the coding on the search changed, then we would be making those changes in the DS and template files plus having to make changes in multiple files and update the mapping on all the templates for the site.

The TemplaVoila Framework Way
================================

We now create a single TypoScript object (#1) for the entire header. Like this:

.. figure:: Images/r1_mapping_now.jpg
	:width: 500
	:alt: Example Page

Some of the practical advantages of this approach are:

- Less remapping of page templates when designs change. When something like a header structurally changes then only one TypoScript library needs to be rewritten as opposed to several templates being recoded and remapped.
- A single set of page templates can be used over and over for a variety of designs without remapping.
- Sites with totally different designs can have very large differences in their HTML code yet use the same core templates. This allows skins to be switched without remapping.
- Future changes to the underlying structure can be easily made in a single place in the code.

// @todo-ron need to finish