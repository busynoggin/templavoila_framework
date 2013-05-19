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

You should first ask yourself if you need to upgrade to TVFW v2 or just stay on your current version 1.x. If you are on TYPO3 version 4.7 or below and are not planning to make any changes to your site skins that require the features of version 2 then you should just stay on version 1.x.

The Upgrade Process
--------------------------------

However, if it is necessary for you to move to version 2, these are the steps you must follow.

- Prepare backup copies of needed files in case you have to rollback to your current state.
	+ Save a copy of your current version of TemplaVoila Framework in case you have to return to it.
	+ Save a copy of your skin in case you have to return to it.
	+ Backup your database in case you have to recover it.
- Temporarily unistall the TemplaVoila Framework extension
- Upgrade to latest version of TemplaVoila
- Upgrade to TYPO3 version 6.x.
- Upgrade to TemplaVoila Framework version 2 and then reinstall it
- At the beginning of your version 1 skin constants add this line: plugin.tx_templavoilaframework.renderMode = 1
- Run the update script
- Replace existing local processing XML in all TemplaVoila Framework template objects with the new XML needed for version 2. You can find the needed XML here.
- Clear your TYPO3 cache and you should be back up and running.

// @todo-ron  Is it only the page template objects that need the new XML or do flexible content template objects also need to be modified?