..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /../Includes/MainInclude.txt


================================
New Installation
================================

What you need to have installed:

- TYPO3 6.1 or above
- The latest version of the TemplaVoila extension
- Create a folder in the TYPO3 page tree and neme it "Site Resources"

Install and setup the TemplaVoila Framework extension
- Retrieve and install the TemplaVoila Framework (templavoila_framework) in the extension manager.
- The default custom skin path is fileadmin/templates/skins/. If you want to change that, click the configuration gear adjust for the Framework extension. You can have multiple custom skin paths separated by a comma though it is normal to store all your custom skins in one directory.
- Import the template objects by clicking the update script icon for the Framework extension. Select the Site Resources folder you set up earlier and click "Import Template Objects"
- Go to the root page of your site and in the Resources tab of the page properties select the Site Resources page you creates as the General Record Storage page then save the page
- In the root page of your site and in the Appearance tab of the page properties select a page template.

// @todo-ron Put install instructions in