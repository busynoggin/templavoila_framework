..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /../Includes/MainInclude.txt

================================
What's New in Version 2
================================

Although the overall concepts remain the same, the coding and structure of the skins have changed from version 1. Also, a number of new features have also been added.

**These features include:**

- the ability to change the ID's on the various content areas of the framework.  For example, #content-block-1 can now be #myCustomID.
- the ability to add CSS classes to the various content areas in the framework. This feature along with the ability change the IDs make it cleaner to work with external CSS frameworks like blueprint, 960gs, etc.
- The ability to change the tag on the various content areas in framework. For example, #content-block-1  can now be a section or article tag rather than the default div tag.
-  all in-line styles have been moved to an external CSS file. This allows for easier overrides and for better accessibility scoring.
- easier accommodation of responses / adaptive designs when used with the Adaptive Profiles extension from Busy Noggin (bn_adaptiveprofiles).