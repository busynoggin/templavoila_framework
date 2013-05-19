..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt

================================
Core Templates & Skins
================================

Sites like `CSS Zen Garden <http://www.csszengarden.com/>`_ do a good job of showing how much a site can change simply through modifying its CSS.

// @todo-ron Make zen garden come up in exernal window.

The flexibility provided by CSS is magnified when you combine it with the ability of TypoScript to change the site's underlying HTML structure and to control the maximum width of images in various content areas.

The TemplaVoila Framework takes advantage of CSS inheritance and the similar behavior of TypoScript. It uses a set of core templates which are then modified by skins. This, combined with the included cloumns and modules, allows for the page templates in the TemplaVoila Framework to be used for vastly different visual designs without creating and remapping new templates.

The Framework is so flexible that over 95% of the visual designs on the web can be built using only the Framework's core templates.

// @todo-ron give varied design examples using the same template

Available Skins
================================

Previously, there are a number of version 1 skins in the TYPO3 extension repository (TER). These skins are now considered deprecated, but will work with the current version 2 provided plugin.tx_templavoilaframework.renderMode = 1 is added to the first line of the constants.

However, we do not recommend using the version 1 skins for any new site development. Rather, you should develop a custom skin for your site using version 2 code. There is a Busy Noggin wireframe skin based on version 2 code. Instructions for downloading that skin are later in this document. This wireframe skin can be used as a starting point for new skins.

Skins can be extensions or simply reside in your custom skin directory. You only need to make a skin an extension if you intend to distribute it via the TYPO3 TER. Therefore, it is likely that most and probably all of your skins will reside in your custom skin directory.

// @todo-ron Update Wireframe skin in the TER to the v2 skin. Upgrade AT-Bone starter to v2 and set both to require v2

You can switch between skins with the Skin Selector. Instructions for how to use the selector can be found here.

// @todo-ron link to skin selector instructions

You can find out how to create new custom skins in Workflow.

If you need to satisfy your inner geek, then check out the explanation of code to understand how the core templates and skins work.

// @todo-ron Make sure the mentioned section exists

// @todo-ron need to finish