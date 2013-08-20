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

The TemplaVoila Framework extension will be availble in the TER in the Fall. You can get a copy now at `github.com/busynoggin <http://github.com/busynoggin>`_. A manual is located at `www.busynoggin.com/extensions/bn_templavoilaframework/ <http://www.busynoggin.com/extensions/bn_templavoilaframework/>`_

-   Create a folder in the TYPO3 page tree to contain your template objects. It is typically named "Site Resources." Next create folders for Generated Content 1 and Generated Content 2. Note their uids. You can find the uid by hovering over the folder icon.

    .. figure:: Images/FolderSetup.png
        :alt: Folder Setup
        :align: left

-   Create a custom skin directory in filadmin. Typically it is fileadmin/templates/skins/.

-	Copy the TemplaVoila Framework extension into typo3conf/ext/ and install it with the extension manager.

.. // @todo-ron update above when in TER. Retrieve and install the TemplaVoila Framework (templavoila_framework) in the extension manager.

-   Click the configuration icon and make sure the default custom skin path matches the path to the directory you created earlier. You can have multiple paths separated by a comma though it is normal to store all your custom skins in one directory.

    .. figure:: Images/ConfigurationGear.png
        :alt: Example Page
        :align: left

-   Import the template objects by (1) clicking the update script icon for the Framework extension, (2) selecting the Site Resources folder you set up earlier and (3) clicking "Import Template Objects."

    .. figure:: Images/ImportTOsNewInstall.png
        :alt: Example Page

-   Go to the root page of your site and in the Resources tab of the page properties select the "Site Resources" page you created as the General Record Storage Page then save the page.

    .. figure:: Images/AssignGRSP.png
        :alt: Example Page
        :align: left

-   Clear the TYPO3 configuration cache.

-   In the root page of your site and in the Appearance tab of the page properties select a page template.

    .. figure:: Images/AssignPageTemplate.png
        :alt: Example Page
        :align: left

-   You will now need a skin. You can either place one in your custom skin path (default: fileadmin/templates/skins/) or you can download the Busy Noggin TVFW Wireframe (bn_wireframeskin) from the TYPO3 TER using the extension manager.

-   Create a TypoScript template on the root page of your site if there is not already one. In that TypoScript template (1) go to the options tab and check rootlevel, clear constants and clear setup, (2) in the includes tab add the CSS Styled Content static template, (3) in the skins tab select your skin.

    .. figure:: Images/InstallTSTemplateSetup.png
        :alt: Example Page
        :align: left


-   Edit your site constants by clicking on the the root page of your site then select the template module. Next select the constants editor and then the site constants category.

    Now enter "/" in siteURL and the page ids of the Generated Content folders then save.

    .. figure:: Images/ConstantsEditor.png
        :alt: Example Page

-   Clear the TYPO3 cache and view the front end of your site.

