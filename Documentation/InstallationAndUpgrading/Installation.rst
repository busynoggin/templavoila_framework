..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt


================================
New Installation
================================

Before you begin:
================================

-   Make sure you are running on TYPO3 6.1 or above
-   Install the latest version of the TemplaVoila extension (templavoila)

Install and setup the TemplaVoila Framework extension
================================

-   Create a folder in the TYPO3 page tree to contain your template objects. It is typically named "Site Resources." and Create folders for Generated Content 1 and Generated Content 2. Note their uids. You can find the uid by hovering over the folder icon.

    **// @todo-ron sceenshots for folders**

-   Create a custom skin directory in filadmin. Typically is is fileadmin/templates/skins/)

-	Retrieve and install the TemplaVoila Framework (templavoila_framework) in the extension manager.

-   Click the configuration icon and make sure the default custom skin path matches the path to the directory you set earlier. You can have multiple custom skin paths separated by a comma though it is normal to store all your custom skins in one directory.

    .. figure:: /Images/ConfigurationGear.png
        :alt: Example Page
        :align: left

-   Import the template objects by (1) clicking the update script icon for the Framework extension, (2) selecting the Site Resources folder you set up earlier and (3) clicking "Import Template Objects."

    .. figure:: /Images/ImportTOsNewInstall.png
        :alt: Example Page
        :align: left

-   Go to the root page of your site and in the Resources tab of the page properties select the Site Resources page you creates as the General Record Storage page then save the page.

    .. figure:: /Images/AssignGRSP.png
        :alt: Example Page
        :align: left

-   In the root page of your site and in the Appearance tab of the page properties select a page template.

    .. figure:: /Images/AssignPageTemplate.png
        :alt: Example Page
        :align: left

-   You will now need a skin. You can either place one in your custom skin path (default: fileadmin/templates/skins/) or you can download the Busy Noggin TVFW Wireframe (bn_wireframeskin) from the TYPO3 TER using the extension manager.

-   Create a TypoScript template on the root page of your site if there is not already one.

-   In that TypoScript template (1) go to the options tab and check rootlevel, clear constants and clear setup, (2) in the includes tab add the CSS Styled Content static template, (3) in the skins tab select your skin.

    .. figure:: /Images/InstallTSTemplateSetup.png
        :alt: Example Page
        :align: left


    **// @todo-ron edit sceenshot for TS template setup**

-   Prepare to edit your site constants by clicking on the root page of your then select the template module then select the constants editor

    **// @todo-ron edit sceenshot for


-   Now enter "/" in siteURL on the page ids of the Generated Content folders then save.

-   Clear the TYPO3 cache and view the front end of your site.

// @todo-ron screenshots

// @todo-ron need to finish

