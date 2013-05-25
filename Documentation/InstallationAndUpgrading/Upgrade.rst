..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt


================================
Upgrading from Version 1
================================

If you already have TVFW version 2 installed and running, then you simply need to update the extension to the latest version 2.x within the extension manager.

If your site is currently running on TVFW version 1.x, then upgrading is a bit more involved.

Should You Upgrade?
--------------------------------

You should first determine if you need to upgrade to TVFW v2 or be on version 1.3. If you are on TYPO3 version 4.7 or below then you should be on TemplaVoila Framework 1.3 since version 2 requires TYPO3 v6.

The Upgrade Process
--------------------------------

If you are ready to move to version 2, these are the steps you must follow.

-
    Prepare backup copies of needed files in case you have to rollback to your current state.
        +   Save a copy of your current version of TemplaVoila Framework.
        +   Save a copy of your skin.
    	+  Backup your database.
-
    Make sure you are on TemplaVoila Framework 1.3.
-
    Upgrade to latest version of TemplaVoila
-
    Upgrade to TYPO3 version 6.x.
-
    Upgrade to TemplaVoila Framework version 2.
-
    At the beginning of your version 1 skin constants add this line: plugin.tx_templavoilaframework.renderMode = 1
-
    Run the update script. First, in the extension manager you click the "Execute the update script" icon for the TemplaVoila Framework. The click the "Update Database" button.

    .. figure:: Images/UpdateScript.png
        :alt: Update Script
        :align: left

    .. figure:: Images/UpdateDB.png
        :alt: Update Database
        :align: left
-
    Replace existing local processing XML in all TemplaVoila Framework page template objects (F1a, F1b, etc.) with the new XML needed for version 2. You can find the needed XML in /typo3conf/ext/templavoila_framework/Resources/Private/Content/TVFWVersion2LocalProcessingXML/
-
    Clear your TYPO3 cache and you should be back up and running.
