..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt

================================
F2 Series Page Templates
================================

The F2 Series of templates always have a:

- Header
- Footer
- Feature Content (but will only show if a user has placed content in it. See magical feature)
- Main Content Area
- Secondary Content Area

Depending on the template it may also include an area of generated content.


Graphical representations of the templates
================================

Please note that the feature area will only show if a user places content in it and the feature area does not have to span the entire top of the layout.

Templates F2a, F2b and F2c
--------------------------------

These templates each contain a header, footer, feature content (F), main content (c1) and secondary content (c2). They are identical except for the ID on the body tag (f2a, f2b, f2c). These ID's allow them to be targeted independently with CSS.

When user enters feature content.


When user does not enter feature content.


Template F2d
--------------------------------

This is the same as F2a except it has an area for generated content (g1) that comes just before the main content (c1). This area pulls from the sysFolder indicated by the TypoScript constant "generatedContent-1.source." It has an ID on the body tag of "f2d."

When user enters feature content.


When user does not enter feature content.


Template F2e
--------------------------------

Identical to F2d except the generated content (g20 comes after the content (c2) and is generated from the sysFolder indicated by the TypoScript constant "generatedContent-2.source." This template has an ID of "f2e" on the body tag.

When user enters feature content.


When user does not enter feature content.

