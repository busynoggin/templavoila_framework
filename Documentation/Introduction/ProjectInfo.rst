..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt

================================
Project Information
================================

Contact
================================

You can contact the developers at extensions@busynoggin.com.

Reporting Bugs
================================

You can report bugs and suggest features for the TemplaVoila Framework project on Forge.

// @todo-ron  link to forge

Known Issues
================================

No known issues

// @todo-ron what about load order with like timtab or other?

Releases & Changelog
================================


.. list-table::
    :widths: 30 70
    :header-rows: 1

    *
        -
            version
        -
            changes

    *
        -
            2.0.0
        -
            !! TYPO3 version 6.0 or higher is now required.


            Added the ability to change the ID's on the various content areas of the framework. For example, #content-block-1 can now be #myCustomID.

            the ability to add CSS classes to the various content areas in the framework. This feature along with the ability change the IDs make it cleaner to work with external CSS frameworks like blueprint, 960gs, etc.

            Added the ability to change the tag on the various content areas in framework. For example, #content-block-1 can now be a section or article tag rather than the default div tag.

            Moved all in-line styles to an external CSS file.

            Namespaced all Framework TypoScript objects

            Addition of several new settings

            Complete recoding of rendering

    *
        -
            1.2.6
        -
            Fix issues with duplicate Template Object imports in new Extension Manager (TYPO3 4.6+)

    *
        -
            1.2.5
        -
            Updated jQuery to version 1.7.2.

            Fixed typo in TS definition of Plain Image FCE.

    *
        -
            1.2.4
        -
            Fixed bug with preCodeFeature and postCodeFeature not working.

            Changed default on Plain Image FCE to be display:block.

    *
        -
            1.2.3
        -
            Temporarily disabled TemplaVoila's renderUnmapped setting to avoid page titles and other element showing up unexpectedly.

    *
        -
            1.2.2
        -
            Switched several TS settings to use references instead of copies.

            Use TemplaVoila's setting to disable processing of unmapped content areas (ex. Generated Content should not be processed for templates that do not use it)

    *
        -
            1.2.1
        -
            Added separate backend stylesheet for TYPO3 4.3

            Fixed minor CSS issue with flags in TV page module.

    *
        -   1.2.0
        -   !!! TemplaVoila 1.5 and greater is now required.

            TV Framework Core TypoScript is now included before Skin TypoScript. Skin behavior does not change, but overriding the Core or overriding Skin objects from a TypoScript Template is now made easier by simply rewriting the original object.

            Updated backend styling to match TemplaVoila and TYPO3 4.4.

            Added distribution class (.oneThird, .oneHalf, etc) for modules and columns.

            Added .plainImage and .plainImageLink classes to Plain Image FCE.

            Fixed bug with sorting of skins in backend skin selector.

            Added localization to tab names, content element headers, and data structure names.

            Fixed several bugs with TemplaVoila 1.5 compatibility.

    *
        -   1.1.0
        -   Added feature for setting moduleTitleTag, allowing skin developer to specify what tag is used in module headers (defaults to h3)

            Fixed bug with unframed modules interfering with equal height module calculations.

            Fixed bug with missing classes on 3 and 4 column groups.

            Added Spanish and Dutch localization for the backend.

    *
        -
            1.0.4
        -
            Fixed bug that caused Skin TypoScript to be included before Static TypoScript from Extensions.

    *
        -
            1.0.3
        -
            Changed filename for jQuery library to reflect current version and avoid caching problems.

            Added TypoScript constant (enableJQuery = 1) to handle loading of jQuery and related Javascript. This constant is enabled by default.

            Switched jQuery include to use includeJSLibs rather than includeJS.

            Added support for TYPO3 4.4, using a hook rather than XCLASS.

    *
        -
            1.0.2
        -
            Removed TypoScript that unset the page TS object before the extension defines a new one. This avoids issues with extensions that write directly to the page object from a static template.

            Adjusted backend CSS so that move icon appears for content elements in TemplaVoila Page Module.

            Fixed bug where TypoScript from the framework was loaded even when no skin was selected.

    *
        -
            1.0.1
        -
            Updated default skin path for better TemplaVoila compatibility.

            Fixed PHP error when using the Link Wizard for Site Constants.

            Set jQuery.noConflict() by default.

    *
        -
            1.0.0
        -
            Initial release.


// @todo-ron need to finish