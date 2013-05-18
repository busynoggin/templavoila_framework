..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt

================================
Editor Experience & Back End Layout
================================

When working with this framework, you will notice the back end layout of the content in the TemplaVoila page module looks different than you may be used to.

- Content is placed in tabs corresponding to page content areas which makes for much less scrolling when editing content.
- Overall, the visual noise an editor usually sees when editing a TemplaVoila page has been greatly reduced.
- Below are images to show the difference in what the editor sees with only TemplaVoila compared to TemplaVoila plus the TemplaVoila Framework.

**1024x768 Monitors**

If you have a smaller monitor and have a page with columns or modules, you may find on the backend that the content in the columns may overlap. This is because there is not enough room to display all three frames of the TYPO3 backend and the columns.

If this is your experience, you can click on the vertical bar between the page tree and the content area. This will collapse the page tree frame and give enough room in the content area for the columns. When you are done editing you can click the bar again and the page tree will appear.

// @todo-ron add screenshot

**Back-End Translations**

Currently English, German, Dutch and Spanish are available to the back-end user.

**Example Page**

The page we are using as an example looks like this on the front end. The page template has a feature area and two content areas. There is also a triple module group placed in the main content area.

// @todo-ron add screenshot

.. figure:: /Images/test.png
    :width: 200
    :alt: Example Page
    :align: left

**Standard Layout with TemplaVoila**

This is what the page looks like on the backend with no use of beLayout in the DS or adjustments to the TemplaVoila extension. It is what TemplaVoila provides by default.

// @todo-ron add screenshot

.. figure:: /Images/test.png
    :width: 200
    :alt: Example Page
    :align: left


**The TemplaVoila Framework**

This is what the page looks like on the backend with the TemplaVoila Framework. The content areas are placed in tabs which makes for less clutter and less scrolling to reach content. Columns are easy to recognize.

Compared to the first example, this version has much less visual noise, less scrolling while editing and gives more ability to style through CSS.

// @todo-ron add screenshot

.. figure:: /Images/test.png
    :width: 200
    :alt: Example Page
    :align: left

**Custom Layouts**

It is possible for the developer to use his own back end layout by attaching a file to the template object. However, we recommend staying with the layout provided by the Framework to provide a consistent interface for training from site to site.

