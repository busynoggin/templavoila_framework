
..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt
================================
Plain Image
================================

Normally when you want just a single image for content you should use the standard TYPO3 image element. However, there may be times in which you need to shift an image, add extra padding around it, etc. In this case you can use Plain Image utility FCE. It is also helpful in situations where you need a true full-bleed image as the standard TYPO image element will add space below the image.

Options
================================

**width:** Set a custom width or leave blank to fill the content block.

**Link:** The image can be linked

**Alt Text:** You can supply alt text

**Image Width:** You can change the width of the image. It will even override the maxImageWidth setting so you can make a image extend beyond what it would normally be allowed. If you leave the default of "0" then the maxImageWidth setting will be honored.

**Margin:** You can control the margin to the top, bottom, right and left

**Z-index:** You can add z-index if needed.

**Display:** You can choose inline, float left, float right or display block.

Plain Image FCE in Action
================================

The following images are place with the Plain Image utility FCE. Both are set to 150 pixels wide.

- The first is floated left with a z-index of 10.
- The second is floated right with a top margin of -15px.

.. figure:: Images/PlainImage.png
    :alt: Plain Image
    :align: left

// @todo-ron need to finish