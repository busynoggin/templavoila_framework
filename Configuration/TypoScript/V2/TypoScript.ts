##############################################################
# dsConfig is the library included in each TV datastructure
##############################################################

plugin.tx_templavoilaframework {
	dsConfig = COA
	dsConfig {
		5 = LOAD_REGISTER
		5 {
			tvfwRenderMode = {$plugin.tx_templavoilaframework.renderMode}
			tvfwGeneratedContentRenderMode = {$plugin.tx_templavoilaframework.generatedContentRenderMode}
			disableAutoMainHeadline = {$plugin.tx_templavoilaframework.disableAutoMainHeadline}
		}

		7 = LOAD_REGISTER
		7 {
			f1ageneratedContent-1disable = 1
			f1ageneratedContent-2disable = 1
			f1bgeneratedContent-1disable = 1
			f1bgeneratedContent-2disable = 1
			f1cgeneratedContent-1disable = 1
			f1cgeneratedContent-2disable = 1
			f1dgeneratedContent-1disable = 0
			f1dgeneratedContent-2disable = 1
			f1egeneratedContent-1disable = 1
			f1egeneratedContent-2disable = 0
			f1fgeneratedContent-1disable = 0
			f1fgeneratedContent-2disable = 0
			f2ageneratedContent-1disable = 1
			f2ageneratedContent-2disable = 1
			f2bgeneratedContent-1disable = 1
			f2bgeneratedContent-2disable = 1
			f2cgeneratedContent-1disable = 1
			f2cgeneratedContent-2disable = 1
			f2dgeneratedContent-1disable = 0
			f2dgeneratedContent-2disable = 1
			f2egeneratedContent-1disable = 1
			f2egeneratedContent-2disable = 0
			f2fgeneratedContent-1disable = 0
			f2fgeneratedContent-2disable = 0
		}

		10 = CASE
		10 {
			key.field = field_auto_header_switch
			default = LOAD_REGISTER
			default.autoMainHeadline = {$plugin.tx_templavoilaframework.autoMainHeadlineDefault}
			1 = LOAD_REGISTER
			1.autoMainHeadline = 1
			2 = LOAD_REGISTER
			2.autoMainHeadline = 0
		}
		20 = CASE
		20 {
			key.field = field_feature_bleed_switch
			default = CASE
			default {
				key = {$plugin.tx_templavoilaframework.featureBleedDefault}
				default = LOAD_REGISTER
				default {
					featureClass = none
					featureLeftPadding = 0
					featureRightPadding = 0
				}
				1 = LOAD_REGISTER
				1 {
					featureClass = bleed
					featureLeftPadding = {$plugin.tx_templavoilaframework.featureLeftPadding}
					featureRightPadding = {$plugin.tx_templavoilaframework.featureRightPadding}
				}
			}
			1 = LOAD_REGISTER
			1 {
				featureClass = bleed
				featureLeftPadding = {$plugin.tx_templavoilaframework.featureLeftPadding}
				featureRightPadding = {$plugin.tx_templavoilaframework.featureRightPadding}
			}
			2 = LOAD_REGISTER
			2 {
				featureClass = none
				featureLeftPadding = 0
				featureRightPadding = 0
			}
		}

		30 = LOAD_REGISTER
		30 {
			autoHeadlineBeginWrap = {$plugin.tx_templavoilaframework.autoHeadlineBeginWrap}
			autoHeadlineEndWrap = {$plugin.tx_templavoilaframework.autoHeadlineEndWrap}
			globalGutter = {$plugin.tx_templavoilaframework.globalGutter}
			generatedContent-1contentsource = {$plugin.tx_templavoilaframework.generatedContent-1.source}
			generatedContent-2contentsource = {$plugin.tx_templavoilaframework.generatedContent-2.source}
			createColumnModuleCSS = {$plugin.tx_templavoilaframework.createColumnModuleCSS}
			tvfwColumnBottomMargin = {$plugin.tx_templavoilaframework.columnBottomMargin}
			tvfwModuleBottomMargin = {$plugin.tx_templavoilaframework.moduleBottomMargin}

			## f1a feature
			f1afeaturewidth = {$plugin.tx_templavoilaframework.f1a.settings.feature.width}
			f1afeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f1a.settings.feature.columnModuleRenderMode}
			f1afeaturetag = {$plugin.tx_templavoilaframework.f1a.settings.feature.tag}
			f1afeatureid = {$plugin.tx_templavoilaframework.f1a.settings.feature.id}
			f1afeatureid {
				wrap = id="|"
				required = 1
			}
			f1afeatureclass = {$plugin.tx_templavoilaframework.f1a.settings.feature.class}
			f1afeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1afeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1a.wraps.feature.beginWrap}
			f1afeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f1a.wraps.feature.endWrap}
			f1afeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f1a.settings.feature.minFullImageWidth}

			## f1a contentBlock-1
			f1acontentBlock-1width = {$plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.width}
			f1acontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.columnModuleRenderMode}
			f1acontentBlock-1tag = {$plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.tag}
			f1acontentBlock-1id = {$plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.id}
			f1acontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1acontentBlock-1class = {$plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.class}
			f1acontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1acontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1a.wraps.contentBlock-1.beginWrap}
			f1acontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1a.wraps.contentBlock-1.endWrap}
			f1acontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.minFullImageWidth}

			## f1b feature
			f1bfeaturewidth = {$plugin.tx_templavoilaframework.f1b.settings.feature.width}
			f1bfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f1b.settings.feature.columnModuleRenderMode}
			f1bfeaturetag = {$plugin.tx_templavoilaframework.f1b.settings.feature.tag}
			f1bfeatureid = {$plugin.tx_templavoilaframework.f1b.settings.feature.id}
			f1bfeatureid {
				wrap = id="|"
				required = 1
			}
			f1bfeatureclass = {$plugin.tx_templavoilaframework.f1b.settings.feature.class}
			f1bfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1bfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1b.wraps.feature.beginWrap}
			f1bfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f1b.wraps.feature.endWrap}
			f1bfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f1b.settings.feature.minFullImageWidth}

			## f1b contentBlock-1
			f1bcontentBlock-1width = {$plugin.tx_templavoilaframework.f1b.settings.contentBlock-1.width}
			f1bcontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1b.settings.contentBlock-1.columnModuleRenderMode}
			f1bcontentBlock-1tag = {$plugin.tx_templavoilaframework.f1b.settings.contentBlock-1.tag}
			f1bcontentBlock-1id = {$plugin.tx_templavoilaframework.f1b.settings.contentBlock-1.id}
			f1bcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1bcontentBlock-1class = {$plugin.tx_templavoilaframework.f1b.settings.contentBlock-1.class}
			f1bcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1bcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1b.wraps.contentBlock-1.beginWrap}
			f1bcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1b.wraps.contentBlock-1.endWrap}
			f1bcontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f1b.settings.contentBlock-1.minFullImageWidth}

			## f1c feature
			f1cfeaturewidth = {$plugin.tx_templavoilaframework.f1c.settings.feature.width}
			f1cfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f1c.settings.feature.columnModuleRenderMode}
			f1cfeaturetag = {$plugin.tx_templavoilaframework.f1c.settings.feature.tag}
			f1cfeatureid = {$plugin.tx_templavoilaframework.f1c.settings.feature.id}
			f1cfeatureid {
				wrap = id="|"
				required = 1
			}
			f1cfeatureclass = {$plugin.tx_templavoilaframework.f1c.settings.feature.class}
			f1cfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1cfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1c.wraps.feature.beginWrap}
			f1cfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f1c.wraps.feature.endWrap}
			f1cfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f1c.settings.feature.minFullImageWidth}

			## f1c contentBlock-1
			f1ccontentBlock-1width = {$plugin.tx_templavoilaframework.f1c.settings.contentBlock-1.width}
			f1ccontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1c.settings.contentBlock-1.columnModuleRenderMode}
			f1ccontentBlock-1tag = {$plugin.tx_templavoilaframework.f1c.settings.contentBlock-1.tag}
			f1ccontentBlock-1id = {$plugin.tx_templavoilaframework.f1c.settings.contentBlock-1.id}
			f1ccontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1ccontentBlock-1class = {$plugin.tx_templavoilaframework.f1c.settings.contentBlock-1.class}
			f1ccontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1ccontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1c.wraps.contentBlock-1.beginWrap}
			f1ccontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1c.wraps.contentBlock-1.endWrap}
			f1ccontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f1c.settings.contentBlock-1.minFullImageWidth}


			## f1d feature
			f1dfeaturewidth = {$plugin.tx_templavoilaframework.f1d.settings.feature.width}
			f1dfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f1d.settings.feature.columnModuleRenderMode}
			f1dfeaturetag = {$plugin.tx_templavoilaframework.f1d.settings.feature.tag}
			f1dfeatureid = {$plugin.tx_templavoilaframework.f1d.settings.feature.id}
			f1dfeatureid {
				wrap = id="|"
				required = 1
			}
			f1dfeatureclass = {$plugin.tx_templavoilaframework.f1d.settings.feature.class}
			f1dfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1dfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1d.wraps.feature.beginWrap}
			f1dfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f1d.wraps.feature.endWrap}
			f1dfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f1d.settings.feature.minFullImageWidth}

			## f1d contentBlock-1
			f1dcontentBlock-1width = {$plugin.tx_templavoilaframework.f1d.settings.contentBlock-1.width}
			f1dcontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1d.settings.contentBlock-1.columnModuleRenderMode}
			f1dcontentBlock-1tag = {$plugin.tx_templavoilaframework.f1d.settings.contentBlock-1.tag}
			f1dcontentBlock-1id = {$plugin.tx_templavoilaframework.f1d.settings.contentBlock-1.id}
			f1dcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1dcontentBlock-1class = {$plugin.tx_templavoilaframework.f1d.settings.contentBlock-1.class}
			f1dcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1dcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1d.wraps.contentBlock-1.beginWrap}
			f1dcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1d.wraps.contentBlock-1.endWrap}
			f1dcontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f1d.settings.contentBlock-1.minFullImageWidth}

			## f1d Generated Content 1
			f1dgeneratedContent-1width = {$plugin.tx_templavoilaframework.f1d.settings.generatedContent-1.width}
			f1dgeneratedContent-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1d.settings.generatedContent-1.columnModuleRenderMode}
			f1dgeneratedContent-1tag = {$plugin.tx_templavoilaframework.f1d.settings.generatedContent-1.tag}
			f1dgeneratedContent-1id = {$plugin.tx_templavoilaframework.f1d.settings.generatedContent-1.id}
			f1dgeneratedContent-1id {
				wrap = id="|"
				required = 1
			}
			f1dgeneratedContent-1class = {$plugin.tx_templavoilaframework.f1d.settings.generatedContent-1.class}
			f1dgeneratedContent-1class {
				wrap = class="|"
				required = 1
			}
			f1dgeneratedContent-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1d.wraps.generatedContent-1.beginWrap}
			f1dgeneratedContent-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1d.wraps.generatedContent-1.endWrap}
			f1dgeneratedContent-1minFullImageWidth = {$plugin.tx_templavoilaframework.f1d.settings.generatedContent-1.minFullImageWidth}

			## f1e feature
			f1efeaturewidth = {$plugin.tx_templavoilaframework.f1e.settings.feature.width}
			f1efeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f1e.settings.feature.columnModuleRenderMode}
			f1efeaturetag = {$plugin.tx_templavoilaframework.f1e.settings.feature.tag}
			f1efeatureid = {$plugin.tx_templavoilaframework.f1e.settings.feature.id}
			f1efeatureid {
				wrap = id="|"
				required = 1
			}
			f1efeatureclass = {$plugin.tx_templavoilaframework.f1e.settings.feature.class}
			f1efeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1efeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1e.wraps.feature.beginWrap}
			f1efeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f1e.wraps.feature.endWrap}
			f1efeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f1e.settings.feature.minFullImageWidth}

			## f1e contentBlock-1
			f1econtentBlock-1width = {$plugin.tx_templavoilaframework.f1e.settings.contentBlock-1.width}
			f1econtentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1e.settings.contentBlock-1.columnModuleRenderMode}
			f1econtentBlock-1tag = {$plugin.tx_templavoilaframework.f1e.settings.contentBlock-1.tag}
			f1econtentBlock-1id = {$plugin.tx_templavoilaframework.f1e.settings.contentBlock-1.id}
			f1econtentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1econtentBlock-1class = {$plugin.tx_templavoilaframework.f1e.settings.contentBlock-1.class}
			f1econtentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1econtentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1e.wraps.contentBlock-1.beginWrap}
			f1econtentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1e.wraps.contentBlock-1.endWrap}
			f1econtentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f1e.settings.contentBlock-1.minFullImageWidth}

			## f1e Generated Content 2
			f1egeneratedContent-2width = {$plugin.tx_templavoilaframework.f1e.settings.generatedContent-2.width}
			f1egeneratedContent-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1e.settings.generatedContent-2.columnModuleRenderMode}
			f1egeneratedContent-2tag = {$plugin.tx_templavoilaframework.f1e.settings.generatedContent-2.tag}
			f1egeneratedContent-2id = {$plugin.tx_templavoilaframework.f1e.settings.generatedContent-2.id}
			f1egeneratedContent-2id {
				wrap = id="|"
				required = 1
			}
			f1egeneratedContent-2class = {$plugin.tx_templavoilaframework.f1e.settings.generatedContent-2.class}
			f1egeneratedContent-2class {
				wrap = class="|"
				required = 1
			}
			f1egeneratedContent-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1e.wraps.generatedContent-2.beginWrap}
			f1egeneratedContent-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1e.wraps.generatedContent-2.endWrap}
			f1egeneratedContent-2minFullImageWidth = {$plugin.tx_templavoilaframework.f1e.settings.generatedContent-2.minFullImageWidth}

			## f1f feature
			f1ffeaturewidth = {$plugin.tx_templavoilaframework.f1f.settings.feature.width}
			f1ffeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f1f.settings.feature.columnModuleRenderMode}
			f1ffeaturetag = {$plugin.tx_templavoilaframework.f1f.settings.feature.tag}
			f1ffeatureid = {$plugin.tx_templavoilaframework.f1f.settings.feature.id}
			f1ffeatureid {
				wrap = id="|"
				required = 1
			}
			f1ffeatureclass = {$plugin.tx_templavoilaframework.f1f.settings.feature.class}
			f1ffeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1ffeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1f.wraps.feature.beginWrap}
			f1ffeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f1f.wraps.feature.endWrap}
			f1ffeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f1f.settings.feature.minFullImageWidth}

			## f1f contentBlock-1
			f1fcontentBlock-1width = {$plugin.tx_templavoilaframework.f1f.settings.contentBlock-1.width}
			f1fcontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1f.settings.contentBlock-1.columnModuleRenderMode}
			f1fcontentBlock-1tag = {$plugin.tx_templavoilaframework.f1f.settings.contentBlock-1.tag}
			f1fcontentBlock-1id = {$plugin.tx_templavoilaframework.f1f.settings.contentBlock-1.id}
			f1fcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1fcontentBlock-1class = {$plugin.tx_templavoilaframework.f1f.settings.contentBlock-1.class}
			f1fcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1fcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1f.wraps.contentBlock-1.beginWrap}
			f1fcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1f.wraps.contentBlock-1.endWrap}
			f1fcontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f1f.settings.contentBlock-1.minFullImageWidth}

			## f1f Generated Content 1
			f1fgeneratedContent-1width = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-1.width}
			f1fgeneratedContent-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-1.columnModuleRenderMode}
			f1fgeneratedContent-1tag = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-1.tag}
			f1fgeneratedContent-1id = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-1.id}
			f1fgeneratedContent-1id {
				wrap = id="|"
				required = 1
			}
			f1fgeneratedContent-1class = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-1.class}
			f1fgeneratedContent-1class {
				wrap = class="|"
				required = 1
			}
			f1fgeneratedContent-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1f.wraps.generatedContent-1.beginWrap}
			f1fgeneratedContent-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1f.wraps.generatedContent-1.endWrap}
			f1fgeneratedContent-1minFullImageWidth = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-1.minFullImageWidth}


			## f1f Generated Content 2
			f1fgeneratedContent-2width = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-2.width}
			f1fgeneratedContent-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-2.columnModuleRenderMode}
			f1fgeneratedContent-2tag = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-2.tag}
			f1fgeneratedContent-2id = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-2.id}
			f1fgeneratedContent-2id {
				wrap = id="|"
				required = 1
			}
			f1fgeneratedContent-2class = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-2.class}
			f1fgeneratedContent-2class {
				wrap = class="|"
				required = 1
			}
			f1fgeneratedContent-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f1f.wraps.generatedContent-2.beginWrap}
			f1fgeneratedContent-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f1f.wraps.generatedContent-2.endWrap}
			f1fgeneratedContent-2minFullImageWidth = {$plugin.tx_templavoilaframework.f1f.settings.generatedContent-2.minFullImageWidth}

			## f2a feature
			f2afeaturewidth = {$plugin.tx_templavoilaframework.f2a.settings.feature.width}
			f2afeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f2a.settings.feature.columnModuleRenderMode}
			f2afeaturetag = {$plugin.tx_templavoilaframework.f2a.settings.feature.tag}
			f2afeatureid = {$plugin.tx_templavoilaframework.f2a.settings.feature.id}
			f2afeatureid {
				wrap = id="|"
				required = 1
			}
			f2afeatureclass = {$plugin.tx_templavoilaframework.f2a.settings.feature.class}
			f2afeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2afeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2a.wraps.feature.beginWrap}
			f2afeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f2a.wraps.feature.endWrap}
			f2afeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f2a.settings.feature.minFullImageWidth}

			## f2a contentBlock-1
			f2acontentBlock-1width = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-1.width}
			f2acontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-1.columnModuleRenderMode}
			f2acontentBlock-1tag = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-1.tag}
			f2acontentBlock-1id = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-1.id}
			f2acontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2acontentBlock-1class = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-1.class}
			f2acontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2acontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2a.wraps.contentBlock-1.beginWrap}
			f2acontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2a.wraps.contentBlock-1.endWrap}
			f2acontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-1.minFullImageWidth}

			## f2a contentBlock-2
			f2acontentBlock-2width = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-2.width}
			f2acontentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-2.columnModuleRenderMode}
			f2acontentBlock-2tag = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-2.tag}
			f2acontentBlock-2id = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-2.id}
			f2acontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2acontentBlock-2class = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-2.class}
			f2acontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2acontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2a.wraps.contentBlock-2.beginWrap}
			f2acontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2a.wraps.contentBlock-2.endWrap}
			f2acontentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f2a.settings.contentBlock-2.minFullImageWidth}

			## f2b feature
			f2bfeaturewidth = {$plugin.tx_templavoilaframework.f2b.settings.feature.width}
			f2bfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f2b.settings.feature.columnModuleRenderMode}
			f2bfeaturetag = {$plugin.tx_templavoilaframework.f2b.settings.feature.tag}
			f2bfeatureid = {$plugin.tx_templavoilaframework.f2b.settings.feature.id}
			f2bfeatureid {
				wrap = id="|"
				required = 1
			}
			f2bfeatureclass = {$plugin.tx_templavoilaframework.f2b.settings.feature.class}
			f2bfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2bfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2b.wraps.feature.beginWrap}
			f2bfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f2b.wraps.feature.endWrap}
			f2bfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f2b.settings.feature.minFullImageWidth}

			## f2b contentBlock-1
			f2bcontentBlock-1width = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-1.width}
			f2bcontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-1.columnModuleRenderMode}
			f2bcontentBlock-1tag = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-1.tag}
			f2bcontentBlock-1id = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-1.id}
			f2bcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2bcontentBlock-1class = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-1.class}
			f2bcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2bcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2b.wraps.contentBlock-1.beginWrap}
			f2bcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2b.wraps.contentBlock-1.endWrap}
			f2bcontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-1.minFullImageWidth}

			## f2b contentBlock-2
			f2bcontentBlock-2width = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-2.width}
			f2bcontentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-2.columnModuleRenderMode}
			f2bcontentBlock-2tag = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-2.tag}
			f2bcontentBlock-2id = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-2.id}
			f2bcontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2bcontentBlock-2class = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-2.class}
			f2bcontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2bcontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2b.wraps.contentBlock-2.beginWrap}
			f2bcontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2b.wraps.contentBlock-2.endWrap}
			f2bcontentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f2b.settings.contentBlock-2.minFullImageWidth}

			## f2c feature
			f2cfeaturewidth = {$plugin.tx_templavoilaframework.f2c.settings.feature.width}
			f2cfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f2c.settings.feature.columnModuleRenderMode}
			f2cfeaturetag = {$plugin.tx_templavoilaframework.f2c.settings.feature.tag}
			f2cfeatureid = {$plugin.tx_templavoilaframework.f2c.settings.feature.id}
			f2cfeatureid {
				wrap = id="|"
				required = 1
			}
			f2cfeatureclass = {$plugin.tx_templavoilaframework.f2c.settings.feature.class}
			f2cfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2cfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2c.wraps.feature.beginWrap}
			f2cfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f2c.wraps.feature.endWrap}
			f2cfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f2c.settings.feature.minFullImageWidth}

			## f2c contentBlock-1
			f2ccontentBlock-1width = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-1.width}
			f2ccontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-1.columnModuleRenderMode}
			f2ccontentBlock-1tag = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-1.tag}
			f2ccontentBlock-1id = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-1.id}
			f2ccontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2ccontentBlock-1class = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-1.class}
			f2ccontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2ccontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2c.wraps.contentBlock-1.beginWrap}
			f2ccontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2c.wraps.contentBlock-1.endWrap}
			f2ccontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-1.minFullImageWidth}

			## f2c contentBlock-2
			f2ccontentBlock-2width = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-2.width}
			f2ccontentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-2.columnModuleRenderMode}
			f2ccontentBlock-2tag = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-2.tag}
			f2ccontentBlock-2id = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-2.id}
			f2ccontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2ccontentBlock-2class = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-2.class}
			f2ccontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2ccontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2c.wraps.contentBlock-2.beginWrap}
			f2ccontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2c.wraps.contentBlock-2.endWrap}
			f2ccontentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f2c.settings.contentBlock-2.minFullImageWidth}

			## f2d feature
			f2dfeaturewidth = {$plugin.tx_templavoilaframework.f2d.settings.feature.width}
			f2dfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f2d.settings.feature.columnModuleRenderMode}
			f2dfeaturetag = {$plugin.tx_templavoilaframework.f2d.settings.feature.tag}
			f2dfeatureid = {$plugin.tx_templavoilaframework.f2d.settings.feature.id}
			f2dfeatureid {
				wrap = id="|"
				required = 1
			}
			f2dfeatureclass = {$plugin.tx_templavoilaframework.f2d.settings.feature.class}
			f2dfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2dfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2d.wraps.feature.beginWrap}
			f2dfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f2d.wraps.feature.endWrap}
			f2dfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f2d.settings.feature.minFullImageWidth}

			## f2d contentBlock-1
			f2dcontentBlock-1width = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-1.width}
			f2dcontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-1.columnModuleRenderMode}
			f2dcontentBlock-1tag = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-1.tag}
			f2dcontentBlock-1id = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-1.id}
			f2dcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2dcontentBlock-1class = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-1.class}
			f2dcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2dcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2d.wraps.contentBlock-1.beginWrap}
			f2dcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2d.wraps.contentBlock-1.endWrap}
			f2dcontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-1.minFullImageWidth}

			## f2d contentBlock-2
			f2dcontentBlock-2width = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-2.width}
			f2dcontentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-2.columnModuleRenderMode}
			f2dcontentBlock-2tag = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-2.tag}
			f2dcontentBlock-2id = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-2.id}
			f2dcontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2dcontentBlock-2class = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-2.class}
			f2dcontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2dcontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2d.wraps.contentBlock-2.beginWrap}
			f2dcontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2d.wraps.contentBlock-2.endWrap}
			f2dcontentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f2d.settings.contentBlock-2.minFullImageWidth}

			## f2d Generated Content 1
			f2dgeneratedContent-1width = {$plugin.tx_templavoilaframework.f2d.settings.generatedContent-1.width}
			f2dgeneratedContent-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2d.settings.generatedContent-1.columnModuleRenderMode}
			f2dgeneratedContent-1tag = {$plugin.tx_templavoilaframework.f2d.settings.generatedContent-1.tag}
			f2dgeneratedContent-1id = {$plugin.tx_templavoilaframework.f2d.settings.generatedContent-1.id}
			f2dgeneratedContent-1id {
				wrap = id="|"
				required = 1
			}
			f2dgeneratedContent-1class = {$plugin.tx_templavoilaframework.f2d.settings.generatedContent-1.class}
			f2dgeneratedContent-1class {
				wrap = class="|"
				required = 1
			}
			f2dgeneratedContent-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2d.wraps.generatedContent-1.beginWrap}
			f2dgeneratedContent-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2d.wraps.generatedContent-1.endWrap}
			f2dgeneratedContent-1minFullImageWidth = {$plugin.tx_templavoilaframework.f2d.settings.generatedContent-1.minFullImageWidth}

			## f2e feature
			f2efeaturewidth = {$plugin.tx_templavoilaframework.f2e.settings.feature.width}
			f2efeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f2e.settings.feature.columnModuleRenderMode}
			f2efeaturetag = {$plugin.tx_templavoilaframework.f2e.settings.feature.tag}
			f2efeatureid = {$plugin.tx_templavoilaframework.f2e.settings.feature.id}
			f2efeatureid {
				wrap = id="|"
				required = 1
			}
			f2efeatureclass = {$plugin.tx_templavoilaframework.f2e.settings.feature.class}
			f2efeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2efeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2e.wraps.feature.beginWrap}
			f2efeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f2e.wraps.feature.endWrap}
			f2efeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f2e.settings.feature.minFullImageWidth}

			## f2e contentBlock-1
			f2econtentBlock-1width = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-1.width}
			f2econtentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-1.columnModuleRenderMode}
			f2econtentBlock-1tag = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-1.tag}
			f2econtentBlock-1id = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-1.id}
			f2econtentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2econtentBlock-1class = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-1.class}
			f2econtentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2econtentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2e.wraps.contentBlock-1.beginWrap}
			f2econtentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2e.wraps.contentBlock-1.endWrap}
			f2econtentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-1.minFullImageWidth}

			## f2e contentBlock-2
			f2econtentBlock-2width = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-2.width}
			f2econtentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-2.columnModuleRenderMode}
			f2econtentBlock-2tag = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-2.tag}
			f2econtentBlock-2id = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-2.id}
			f2econtentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2econtentBlock-2class = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-2.class}
			f2econtentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2econtentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2e.wraps.contentBlock-2.beginWrap}
			f2econtentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2e.wraps.contentBlock-2.endWrap}
			f2econtentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f2e.settings.contentBlock-2.minFullImageWidth}

			## f2e Generated Content 1
			f2egeneratedContent-2width = {$plugin.tx_templavoilaframework.f2e.settings.generatedContent-2.width}
			f2egeneratedContent-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f2e.settings.generatedContent-2.columnModuleRenderMode}
			f2egeneratedContent-2tag = {$plugin.tx_templavoilaframework.f2e.settings.generatedContent-2.tag}
			f2egeneratedContent-2id = {$plugin.tx_templavoilaframework.f2e.settings.generatedContent-2.id}
			f2egeneratedContent-2id {
				wrap = id="|"
				required = 1
			}
			f2egeneratedContent-2class = {$plugin.tx_templavoilaframework.f2e.settings.generatedContent-2.class}
			f2egeneratedContent-2class {
				wrap = class="|"
				required = 1
			}
			f2egeneratedContent-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f2e.wraps.generatedContent-2.beginWrap}
			f2egeneratedContent-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f2e.wraps.generatedContent-2.endWrap}
			f2egeneratedContent-2minFullImageWidth = {$plugin.tx_templavoilaframework.f2e.settings.generatedContent-2.minFullImageWidth}

			## f3a feature
			f3afeaturewidth = {$plugin.tx_templavoilaframework.f3a.settings.feature.width}
			f3afeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f3a.settings.feature.columnModuleRenderMode}
			f3afeaturetag = {$plugin.tx_templavoilaframework.f3a.settings.feature.tag}
			f3afeatureid = {$plugin.tx_templavoilaframework.f3a.settings.feature.id}
			f3afeatureid {
				wrap = id="|"
				required = 1
			}
			f3afeatureclass = {$plugin.tx_templavoilaframework.f3a.settings.feature.class}
			f3afeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f3afeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3a.wraps.feature.beginWrap}
			f3afeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f3a.wraps.feature.endWrap}
			f3afeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f3a.settings.feature.minFullImageWidth}

			## f3a contentBlock-1
			f3acontentBlock-1width = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-1.width}
			f3acontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-1.columnModuleRenderMode}
			f3acontentBlock-1tag = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-1.tag}
			f3acontentBlock-1id = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-1.id}
			f3acontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f3acontentBlock-1class = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-1.class}
			f3acontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f3acontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3a.wraps.contentBlock-1.beginWrap}
			f3acontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3a.wraps.contentBlock-1.endWrap}
			f3acontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-1.minFullImageWidth}

			## f3a contentBlock-2
			f3acontentBlock-2width = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-2.width}
			f3acontentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-2.columnModuleRenderMode}
			f3acontentBlock-2tag = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-2.tag}
			f3acontentBlock-2id = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-2.id}
			f3acontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f3acontentBlock-2class = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-2.class}
			f3acontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f3acontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3a.wraps.contentBlock-2.beginWrap}
			f3acontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3a.wraps.contentBlock-2.endWrap}
			f3acontentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-2.minFullImageWidth}

			## f3a contentBlock-3
			f3acontentBlock-3width = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-3.width}
			f3acontentBlock-3columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-3.columnModuleRenderMode}
			f3acontentBlock-3tag = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-3.tag}
			f3acontentBlock-3id = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-3.id}
			f3acontentBlock-3id {
				wrap = id="|"
				required = 1
			}
			f3acontentBlock-3class = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-3.class}
			f3acontentBlock-3class {
				wrap = class="|"
				required = 1
			}
			f3acontentBlock-3beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3a.wraps.contentBlock-3.beginWrap}
			f3acontentBlock-3endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3a.wraps.contentBlock-3.endWrap}
			f3acontentBlock-3minFullImageWidth = {$plugin.tx_templavoilaframework.f3a.settings.contentBlock-3.minFullImageWidth}

			## f3b feature
			f3bfeaturewidth = {$plugin.tx_templavoilaframework.f3b.settings.feature.width}
			f3bfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f3b.settings.feature.columnModuleRenderMode}
			f3bfeaturetag = {$plugin.tx_templavoilaframework.f3b.settings.feature.tag}
			f3bfeatureid = {$plugin.tx_templavoilaframework.f3b.settings.feature.id}
			f3bfeatureid {
				wrap = id="|"
				required = 1
			}
			f3bfeatureclass = {$plugin.tx_templavoilaframework.f3b.settings.feature.class}
			f3bfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f3bfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3b.wraps.feature.beginWrap}
			f3bfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f3b.wraps.feature.endWrap}
			f3bfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f3b.settings.feature.minFullImageWidth}

			## f3b contentBlock-1
			f3bcontentBlock-1width = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-1.width}
			f3bcontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-1.columnModuleRenderMode}
			f3bcontentBlock-1tag = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-1.tag}
			f3bcontentBlock-1id = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-1.id}
			f3bcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f3bcontentBlock-1class = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-1.class}
			f3bcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f3bcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3b.wraps.contentBlock-1.beginWrap}
			f3bcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3b.wraps.contentBlock-1.endWrap}
			f3bcontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-1.minFullImageWidth}

			## f3b contentBlock-2
			f3bcontentBlock-2width = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-2.width}
			f3bcontentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-2.columnModuleRenderMode}
			f3bcontentBlock-2tag = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-2.tag}
			f3bcontentBlock-2id = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-2.id}
			f3bcontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f3bcontentBlock-2class = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-2.class}
			f3bcontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f3bcontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3b.wraps.contentBlock-2.beginWrap}
			f3bcontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3b.wraps.contentBlock-2.endWrap}
			f3bcontentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-2.minFullImageWidth}

			## f3b contentBlock-3
			f3bcontentBlock-3width = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-3.width}
			f3bcontentBlock-3columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-3.columnModuleRenderMode}
			f3bcontentBlock-3tag = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-3.tag}
			f3bcontentBlock-3id = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-3.id}
			f3bcontentBlock-3id {
				wrap = id="|"
				required = 1
			}
			f3bcontentBlock-3class = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-3.class}
			f3bcontentBlock-3class {
				wrap = class="|"
				required = 1
			}
			f3bcontentBlock-3beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3b.wraps.contentBlock-3.beginWrap}
			f3bcontentBlock-3endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3b.wraps.contentBlock-3.endWrap}
			f3bcontentBlock-3minFullImageWidth = {$plugin.tx_templavoilaframework.f3b.settings.contentBlock-3.minFullImageWidth}

			## f3c feature
			f3cfeaturewidth = {$plugin.tx_templavoilaframework.f3c.settings.feature.width}
			f3cfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f3c.settings.feature.columnModuleRenderMode}
			f3cfeaturetag = {$plugin.tx_templavoilaframework.f3c.settings.feature.tag}
			f3cfeatureid = {$plugin.tx_templavoilaframework.f3c.settings.feature.id}
			f3cfeatureid {
				wrap = id="|"
				required = 1
			}
			f3cfeatureclass = {$plugin.tx_templavoilaframework.f3c.settings.feature.class}
			f3cfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f3cfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3c.wraps.feature.beginWrap}
			f3cfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f3c.wraps.feature.endWrap}
			f3cfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f3c.settings.feature.minFullImageWidth}

			## f3c contentBlock-1
			f3ccontentBlock-1width = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-1.width}
			f3ccontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-1.columnModuleRenderMode}
			f3ccontentBlock-1tag = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-1.tag}
			f3ccontentBlock-1id = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-1.id}
			f3ccontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f3ccontentBlock-1class = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-1.class}
			f3ccontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f3ccontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3c.wraps.contentBlock-1.beginWrap}
			f3ccontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3c.wraps.contentBlock-1.endWrap}
			f3ccontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-1.minFullImageWidth}

			## f3c contentBlock-2
			f3ccontentBlock-2width = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-2.width}
			f3ccontentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-2.columnModuleRenderMode}
			f3ccontentBlock-2tag = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-2.tag}
			f3ccontentBlock-2id = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-2.id}
			f3ccontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f3ccontentBlock-2class = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-2.class}
			f3ccontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f3ccontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3c.wraps.contentBlock-2.beginWrap}
			f3ccontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3c.wraps.contentBlock-2.endWrap}
			f3ccontentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-2.minFullImageWidth}

			## f3c contentBlock-3
			f3ccontentBlock-3width = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-3.width}
			f3ccontentBlock-3columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-3.columnModuleRenderMode}
			f3ccontentBlock-3tag = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-3.tag}
			f3ccontentBlock-3id = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-3.id}
			f3ccontentBlock-3id {
				wrap = id="|"
				required = 1
			}
			f3ccontentBlock-3class = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-3.class}
			f3ccontentBlock-3class {
				wrap = class="|"
				required = 1
			}
			f3ccontentBlock-3beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3c.wraps.contentBlock-3.beginWrap}
			f3ccontentBlock-3endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3c.wraps.contentBlock-3.endWrap}
			f3ccontentBlock-3minFullImageWidth = {$plugin.tx_templavoilaframework.f3c.settings.contentBlock-3.minFullImageWidth}

			## f3d feature
			f3dfeaturewidth = {$plugin.tx_templavoilaframework.f3d.settings.feature.width}
			f3dfeaturecolumnModuleRenderMode = {$plugin.tx_templavoilaframework.f3d.settings.feature.columnModuleRenderMode}
			f3dfeaturetag = {$plugin.tx_templavoilaframework.f3d.settings.feature.tag}
			f3dfeatureid = {$plugin.tx_templavoilaframework.f3d.settings.feature.id}
			f3dfeatureid {
				wrap = id="|"
				required = 1
			}
			f3dfeatureclass = {$plugin.tx_templavoilaframework.f3d.settings.feature.class}
			f3dfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f3dfeaturebeginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3d.wraps.feature.beginWrap}
			f3dfeatureendWrap.dataWrap = {$plugin.tx_templavoilaframework.f3d.wraps.feature.endWrap}
			f3dfeatureminFullImageWidth = {$plugin.tx_templavoilaframework.f3d.settings.feature.minFullImageWidth}

			## f3d contentBlock-1
			f3dcontentBlock-1width = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-1.width}
			f3dcontentBlock-1columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-1.columnModuleRenderMode}
			f3dcontentBlock-1tag = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-1.tag}
			f3dcontentBlock-1id = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-1.id}
			f3dcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f3dcontentBlock-1class = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-1.class}
			f3dcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f3dcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3d.wraps.contentBlock-1.beginWrap}
			f3dcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3d.wraps.contentBlock-1.endWrap}
			f3dcontentBlock-1minFullImageWidth = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-1.minFullImageWidth}

			## f3d contentBlock-2
			f3dcontentBlock-2width = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-2.width}
			f3dcontentBlock-2columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-2.columnModuleRenderMode}
			f3dcontentBlock-2tag = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-2.tag}
			f3dcontentBlock-2id = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-2.id}
			f3dcontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f3dcontentBlock-2class = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-2.class}
			f3dcontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f3dcontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3d.wraps.contentBlock-2.beginWrap}
			f3dcontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3d.wraps.contentBlock-2.endWrap}
			f3dcontentBlock-2minFullImageWidth = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-2.minFullImageWidth}

			## f3d contentBlock-3
			f3dcontentBlock-3width = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-3.width}
			f3dcontentBlock-3columnModuleRenderMode = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-3.columnModuleRenderMode}
			f3dcontentBlock-3tag = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-3.tag}
			f3dcontentBlock-3id = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-3.id}
			f3dcontentBlock-3id {
				wrap = id="|"
				required = 1
			}
			f3dcontentBlock-3class = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-3.class}
			f3dcontentBlock-3class {
				wrap = class="|"
				required = 1
			}
			f3dcontentBlock-3beginWrap.dataWrap = {$plugin.tx_templavoilaframework.f3d.wraps.contentBlock-3.beginWrap}
			f3dcontentBlock-3endWrap.dataWrap = {$plugin.tx_templavoilaframework.f3d.wraps.contentBlock-3.endWrap}
			f3dcontentBlock-3minFullImageWidth = {$plugin.tx_templavoilaframework.f3d.settings.contentBlock-3.minFullImageWidth}
		}
	}
	##############################################################
	# moduleGroupSetup is the library used to load the register
	# with the various values needed by the module groups. The
	# default values are supplied by the the skins via constants
	##############################################################

	### Setup for Modules

	moduleGroupSetup = COA
	moduleGroupSetup.10 = LOAD_REGISTER
	moduleGroupSetup.10 {
		moduleBodyBorderWidth1 = {$plugin.tx_templavoilaframework.moduleBodyBorderWidth}
		moduleBodyTopBuffer1 = {$plugin.tx_templavoilaframework.moduleBodyTopBuffer}
		moduleBodyLeftBuffer1 = {$plugin.tx_templavoilaframework.moduleBodyLeftBuffer}
		moduleBodyRightBuffer1 = {$plugin.tx_templavoilaframework.moduleBodyRightBuffer}
		moduleBodyBottomBuffer1 = {$plugin.tx_templavoilaframework.moduleBodyBottomBuffer}
		moduleBodyBorderWidth2 = {$plugin.tx_templavoilaframework.moduleBodyBorderWidth}
		moduleBodyTopBuffer2 = {$plugin.tx_templavoilaframework.moduleBodyTopBuffer}
		moduleBodyLeftBuffer2 = {$plugin.tx_templavoilaframework.moduleBodyLeftBuffer}
		moduleBodyRightBuffer2 = {$plugin.tx_templavoilaframework.moduleBodyRightBuffer}
		moduleBodyBottomBuffer2 = {$plugin.tx_templavoilaframework.moduleBodyBottomBuffer}
		moduleBodyBorderWidth3 = {$plugin.tx_templavoilaframework.moduleBodyBorderWidth}
		moduleBodyTopBuffer3 = {$plugin.tx_templavoilaframework.moduleBodyTopBuffer}
		moduleBodyLeftBuffer3 = {$plugin.tx_templavoilaframework.moduleBodyLeftBuffer}
		moduleBodyRightBuffer3 = {$plugin.tx_templavoilaframework.moduleBodyRightBuffer}
		moduleBodyBottomBuffer3 = {$plugin.tx_templavoilaframework.moduleBodyBottomBuffer}
		moduleBodyBorderWidth4 = {$plugin.tx_templavoilaframework.moduleBodyBorderWidth}
		moduleBodyTopBuffer4 = {$plugin.tx_templavoilaframework.moduleBodyTopBuffer}
		moduleBodyLeftBuffer4 = {$plugin.tx_templavoilaframework.moduleBodyLeftBuffer}
		moduleBodyRightBuffer4 = {$plugin.tx_templavoilaframework.moduleBodyRightBuffer}
		moduleBodyBottomBuffer4 = {$plugin.tx_templavoilaframework.moduleBodyBottomBuffer}
		defaultHeaderInsideModule = {$plugin.tx_templavoilaframework.defaultHeaderInsideModule}
		renderedModuleHeader1 {
			field = field_module_1_title
			parseFunc < lib.parseFunc
			dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
		}
		renderedModuleHeader2 {
			field = field_module_2_title
			parseFunc < lib.parseFunc
			dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
		}
		renderedModuleHeader3 {
			field = field_module_3_title
			parseFunc < lib.parseFunc
			dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
		}
		renderedModuleHeader4 {
			field = field_module_4_title
			parseFunc < lib.parseFunc
			dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
		}
	}

	moduleGroupSetup.15 = CASE
	moduleGroupSetup.15 {
		key = {$plugin.tx_templavoilaframework.moduleFooterTotalHeight}
		default = LOAD_REGISTER
		default {
			renderedModuleFooter = {$plugin.tx_templavoilaframework.moduleFooter}
			renderedModuleFooter1.data = register:renderedModuleFooter
		 	renderedModuleFooter2.data = register:renderedModuleFooter
			renderedModuleFooter3.data = register:renderedModuleFooter
		 	renderedModuleFooter4.data = register:renderedModuleFooter
		}
		0 = LOAD_REGISTER
		0 {
			renderedModuleFooter =
		}
	}

	moduleGroupSetup.20 = CASE
	moduleGroupSetup.20 {
		key.field = field_module_1_frame
		default = CASE
		default {
			key.field = field_module_1_show_title
			default = CASE
			default {
				key = {$plugin.tx_templavoilaframework.showModuleTitleDefault}
				default = LOAD_REGISTER
				default.classModule1 = module module-1
				0 = LOAD_REGISTER
				0 {
					classModule1 = module module-1 title-no-show
					renderedModuleHeader1 = &nbsp;
					renderedModuleHeader1.dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
				}
			}
			1 = LOAD_REGISTER
			1.classModule1 = module module-1
			2 = LOAD_REGISTER
			2 {
				classModule1 = module module-1 title-no-show
				renderedModuleHeader1 = &nbsp;
				renderedModuleHeader1.dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
			}
		}
		1 = LOAD_REGISTER
		1 {
			renderedModuleHeader1 =
			renderedModuleFooter1 =
			classModule1 = module module-1 unframed
			moduleBodyBorderWidth1 = 0
			moduleBodyTopBuffer1 = 0
			moduleBodyLeftBuffer1 = 0
			moduleBodyRightBuffer1 = 0
			moduleBodyBottomBuffer1 = 0
		}
	}

	moduleGroupSetup.25 = CASE
	moduleGroupSetup.25 {
		key.field = field_module_2_frame
		default = CASE
		default {
			key.field = field_module_2_show_title
			default = CASE
			default {
				key = {$plugin.tx_templavoilaframework.showModuleTitleDefault}
				default = LOAD_REGISTER
				default.classModule2 = module module-2
				0 = LOAD_REGISTER
				0 {
					classModule2 = module module-2 title-no-show
					renderedModuleHeader2 = &nbsp;
					renderedModuleHeader2.dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
				}
			}
			1 = LOAD_REGISTER
			1.classModule2 = module module-2
			2 = LOAD_REGISTER
			2 {
				classModule2 = module module-2 title-no-show
				renderedModuleHeader2 = &nbsp;
				renderedModuleHeader2.dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
			}
		}
		1 = LOAD_REGISTER
		1 {
			renderedModuleHeader2 =
			renderedModuleFooter2 =
			classModule2 = module module-2 unframed
			moduleBodyBorderWidth2 = 0
			moduleBodyTopBuffer2 = 0
			moduleBodyLeftBuffer2 = 0
			moduleBodyRightBuffer2 = 0
			moduleBodyBottomBuffer2 = 0
		}
	}

	moduleGroupSetup.30 = CASE
	moduleGroupSetup.30 {
		key.field = field_module_3_frame
		default = CASE
		default {
			key.field = field_module_3_show_title
			default = CASE
			default {
				key = {$plugin.tx_templavoilaframework.showModuleTitleDefault}
				default = LOAD_REGISTER
				default.classModule3 = module module-3
				0 = LOAD_REGISTER
				0 {
					classModule3 = module module-3 title-no-show
					renderedModuleHeader3 = &nbsp;
					renderedModuleHeader3.dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
				}
			}
			1 = LOAD_REGISTER
			1.classModule3 = module module-3
			2 = LOAD_REGISTER
			2 {
				classModule3 = module module-3 title-no-show
				renderedModuleHeader3 = &nbsp;
				renderedModuleHeader3.dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
			}
		}
		1 = LOAD_REGISTER
		1 {
			renderedModuleHeader3 =
			renderedModuleFooter3 =
			classModule3 = module module-3 unframed
			moduleBodyBorderWidth3 = 0
			moduleBodyTopBuffer3 = 0
			moduleBodyLeftBuffer3 = 0
			moduleBodyRightBuffer3 = 0
			moduleBodyBottomBuffer3 = 0
		}
	}


	moduleGroupSetup.35 = CASE
	moduleGroupSetup.35 {
		key.field = field_module_4_frame
		default = CASE
		default {
			key.field = field_module_4_show_title
			default = CASE
			default {
				key = {$plugin.tx_templavoilaframework.showModuleTitleDefault}
				default = LOAD_REGISTER
				default.classModule4 = module module-4
				0 = LOAD_REGISTER
				0 {
					classModule4 = module module-4 title-no-show
					renderedModuleHeader4 = &nbsp;
					renderedModuleHeader4.dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
				}
			}
			1 = LOAD_REGISTER
			1.classModule4 = module module-4
			2 = LOAD_REGISTER
			2 {
				classModule4 = module module-4 title-no-show
				renderedModuleHeader4 = &nbsp;
				renderedModuleHeader4.dataWrap = {$plugin.tx_templavoilaframework.moduleHeaderWrap}
			}
		}
		1 = LOAD_REGISTER
		1 {
			renderedModuleHeader4 =
			renderedModuleFooter4 =
			classModule4 = module module-4 unframed
			moduleBodyBorderWidth4 = 0
			moduleBodyTopBuffer4 = 0
			moduleBodyLeftBuffer4 = 0
			moduleBodyRightBuffer4 = 0
			moduleBodyBottomBuffer4 = 0
		}
	}

	moduleGroupSetup.40 = CASE
	moduleGroupSetup.40 {
		key.data = register:moduleDistribution
		default = CASE
		default {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:tempModuleWidth
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = one-half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-half
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}

			default = LOAD_REGISTER
			default {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:tempModuleWidth
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = one-half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-half
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}
		}
		11 = LOAD_REGISTER
		11 {
			moduleWidth1.data = register:containerWidth
		}


		1323 = CASE
		1323 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:tempModuleWidth
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = one-half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-half
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}

			default = LOAD_REGISTER
			default {
				tempModuleWidth1.data = register:containerWidth
				tempModuleWidth1.dataWrap = (|-({register:globalGutter}*2))/3
				tempModuleWidth2.data = register:containerWidth
				tempModuleWidth2.dataWrap = (((|-({register:globalGutter}*2))/3)*2)+{register:globalGutter}
				moduleWidth1.data = register:tempModuleWidth1
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth2
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = third
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = two-third
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = third-two-third
				classModuleGroupDistribution.noTrimWrap = | ||
			}
		}

		2313 = CASE
		2313 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:tempModuleWidth
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = one-half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-half
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}

			default = LOAD_REGISTER
			default {
				tempModuleWidth1.data = register:containerWidth
				tempModuleWidth1.dataWrap = (((|-({register:globalGutter}*2))/3)*2)+{register:globalGutter}
				tempModuleWidth2.data = register:containerWidth
				tempModuleWidth2.dataWrap = (|-({register:globalGutter}*2))/3
				moduleWidth1.data = register:tempModuleWidth1
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth2
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = two-third
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = third
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = two-third-third
				classModuleGroupDistribution.noTrimWrap = | ||
			}
		}




		3414 = CASE
		3414 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:tempModuleWidth
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = one-half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-half
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}

			default = LOAD_REGISTER
			default {
				tempModuleWidth1.data = register:containerWidth
				tempModuleWidth1.dataWrap = (((|-({register:globalGutter}*3))/4)*3)+({register:globalGutter}*2)
				tempModuleWidth2.data = register:containerWidth
				tempModuleWidth2.dataWrap = (|-({register:globalGutter}*3))/4
				moduleWidth1.data = register:tempModuleWidth1
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth2
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = three-quarter
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-quarter
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = three-quarter-quarter
				classModuleGroupDistribution.noTrimWrap = | ||
			}
		}



		1434 = CASE
		1434 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:tempModuleWidth
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = one-half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-half
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}

			default = LOAD_REGISTER
			default {
				tempModuleWidth1.data = register:containerWidth
				tempModuleWidth1.dataWrap = (|-({register:globalGutter}*3))/4
				tempModuleWidth2.data = register:containerWidth
				tempModuleWidth2.dataWrap = (((|-({register:globalGutter}*3))/4)*3)+({register:globalGutter}*2)
				moduleWidth1.data = register:tempModuleWidth1
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth2
				moduleWidth2.prioriCalc = intval
				classModule1Distribution = one-quarter
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = three-quarter
				classModule2Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = quarter-three-quarter
				classModuleGroupDistribution.noTrimWrap = | ||
			}
		}


		131313 = CASE
		131313 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				moduleWidth3.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = full
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				moduleWidth3.data = register:tempModuleWidth
				moduleWidth3.prioriCalc = intval
				classModule1Distribution = half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = half
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = full
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate full-half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}

			default = LOAD_REGISTER
			default {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-({register:globalGutter}*2))/3
				moduleWidth1.data = register:tempModuleWidth
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				moduleWidth3.data = register:tempModuleWidth
				moduleWidth3.prioriCalc = intval
				classModule1Distribution = third
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = third
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = third
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = third-third-third
				classModuleGroupDistribution.noTrimWrap = | ||
			}
		}


		121414 = CASE
		121414 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				moduleWidth3.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = full
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				moduleWidth3.data = register:tempModuleWidth
				moduleWidth3.prioriCalc = intval
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = half
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = half
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate full-half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}

			default = LOAD_REGISTER
			default {
				tempModuleWidth1.data = register:containerWidth
				tempModuleWidth1.dataWrap = ((|-({register:globalGutter}*3))/2)+{register:globalGutter}
				tempModuleWidth2.data = register:containerWidth
				tempModuleWidth2.dataWrap = (|-({register:globalGutter}*3))/4
				tempModuleWidth3.data = register:containerWidth
				tempModuleWidth3.dataWrap = (|-({register:globalGutter}*3))/4
				moduleWidth1.data = register:tempModuleWidth1
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth2
				moduleWidth2.prioriCalc = intval
				moduleWidth3.data = register:tempModuleWidth3
				moduleWidth3.prioriCalc = intval
				classModule1Distribution = one-half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-quarter
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = one-quarter
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = half-quarter-quarter
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}


		141214 = CASE
		141214 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				moduleWidth3.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = full
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				moduleWidth3.data = register:tempModuleWidth
				moduleWidth3.prioriCalc = intval
				classModule1Distribution = half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = half
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = full
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate full-half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempModuleWidth1.data = register:containerWidth
				tempModuleWidth1.dataWrap = (|-({register:globalGutter}*3))/4
				tempModuleWidth2.data = register:containerWidth
				tempModuleWidth2.dataWrap = ((|-({register:globalGutter}*3))/2)+{register:globalGutter}
				tempModuleWidth3.data = register:containerWidth
				tempModuleWidth3.dataWrap = (|-({register:globalGutter}*3))/4
				moduleWidth1.data = register:tempModuleWidth1
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth2
				moduleWidth2.prioriCalc = intval
				moduleWidth3.data = register:tempModuleWidth3
				moduleWidth3.prioriCalc = intval
				classModule1Distribution = one-quarter
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-half
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = one-quarter
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = quarter-half-quarter
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}


		141412 = CASE
		141412 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				moduleWidth3.data = register:containerWidth
				classModule1Distribution = full
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = full
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = full
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempModuleWidth.data = register:containerWidth
				tempModuleWidth.dataWrap = (|-{register:globalGutter})/2
				moduleWidth1.data = register:tempModuleWidth
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth
				moduleWidth2.prioriCalc = intval
				moduleWidth3.data = register:containerWidth
				classModule1Distribution = half
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = half
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = full
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate half-half-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempModuleWidth1.data = register:containerWidth
				tempModuleWidth1.dataWrap = (|-({register:globalGutter}*3))/4
				tempModuleWidth2.data = register:containerWidth
				tempModuleWidth2.dataWrap = (|-({register:globalGutter}*3))/4
				tempModuleWidth3.data = register:containerWidth
				tempModuleWidth3.dataWrap = ((|-({register:globalGutter}*3))/2)+{register:globalGutter}
				moduleWidth1.data = register:tempModuleWidth1
				moduleWidth1.prioriCalc = intval
				moduleWidth2.data = register:tempModuleWidth2
				moduleWidth2.prioriCalc = intval
				moduleWidth3.data = register:tempModuleWidth3
				moduleWidth3.prioriCalc = intval
				classModule1Distribution = one-quarter
				classModule1Distribution.noTrimWrap = | ||
				classModule2Distribution = one-quarter
				classModule2Distribution.noTrimWrap = | ||
				classModule3Distribution = one-half
				classModule3Distribution.noTrimWrap = | ||
				classModuleGroupDistribution = quarter-quarter-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}


		14141414 = CASE
		14141414 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				moduleWidth1.data = register:containerWidth
				moduleWidth2.data = register:containerWidth
				moduleWidth3.data = register:containerWidth
				moduleWidth4.data = register:containerWidth
				quadModuleDistribution = full
				quadModuleDistribution.noTrimWrap = | ||
				classModuleGroupDistribution = full full-full-full-full
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempQuadModuleWidth.data = register:containerWidth
				tempQuadModuleWidth.dataWrap = (|-{register:globalGutter})/2
				quadModuleWidth.data = register:tempQuadModuleWidth
				quadModuleWidth.prioriCalc = intval
				moduleWidth1.data = register:quadModuleWidth
				moduleWidth2.data = register:quadModuleWidth
				moduleWidth3.data = register:quadModuleWidth
				moduleWidth4.data = register:quadModuleWidth
				quadModuleDistribution = half
				quadModuleDistribution.noTrimWrap = | ||
				classModuleGroupDistribution = intermediate half-half-half-half
				classModuleGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempQuadModuleWidth.data = register:containerWidth
				tempQuadModuleWidth.dataWrap = (|-({register:globalGutter}*3))/4
				quadModuleWidth.data = register:tempQuadModuleWidth
				quadModuleWidth.prioriCalc = intval
				moduleWidth1.data = register:quadModuleWidth
				moduleWidth2.data = register:quadModuleWidth
				moduleWidth3.data = register:quadModuleWidth
				moduleWidth4.data = register:quadModuleWidth
				quadModuleDistribution = quarter
				quadModuleDistribution.noTrimWrap = | ||
				classModuleGroupDistribution = quarter-quarter-quarter-quarter
				classModuleGroupDistribution.noTrimWrap = | ||
			}
		}
	}

	### Sets the width of module content area

	moduleGroupSetup.50 = COA
	moduleGroupSetup.50.10 = CASE
	moduleGroupSetup.50.10 {
		key.field = field_module_1_bleed
		default = LOAD_REGISTER
		default {
			tempBodyWidthMod1.data = register:moduleWidth1
			tempBodyWidthMod1.dataWrap = |-({register:moduleBodyLeftBuffer1}+{register:moduleBodyRightBuffer1})-(2*{register:moduleBodyBorderWidth1})
			bodyWidthMod1.data = register:tempBodyWidthMod1
			bodyWidthMod1.prioriCalc = intval
			moduleBodyClass1 = inner-wrap
		}
		1 = LOAD_REGISTER
		1 {
			tempBodyWidthMod1.data = register:moduleWidth1
			tempBodyWidthMod1.dataWrap = |-(2*{register:moduleBodyBorderWidth1})
			bodyWidthMod1.data = register:tempBodyWidthMod1
			bodyWidthMod1.prioriCalc = intval
			moduleBodyTopBuffer1 = 0
			moduleBodyLeftBuffer1 = 0
			moduleBodyRightBuffer1 = 0
			moduleBodyBottomBuffer1 = 0
			moduleBodyClass1 = inner-wrap bleed
		}
	}
	moduleGroupSetup.50.20 = CASE
	moduleGroupSetup.50.20 {
		key.field = field_module_2_bleed
		default = LOAD_REGISTER
		default {
			tempBodyWidthMod2.data = register:moduleWidth2
			tempBodyWidthMod2.dataWrap = |-({register:moduleBodyLeftBuffer2}+{register:moduleBodyRightBuffer2})-(2*{register:moduleBodyBorderWidth2})
			bodyWidthMod2.data = register:tempBodyWidthMod2
			bodyWidthMod2.prioriCalc = intval
			moduleBodyClass2 = inner-wrap
		}
		1 = LOAD_REGISTER
		1 {
			tempBodyWidthMod2.data = register:moduleWidth2
			tempBodyWidthMod2.dataWrap = |-(2*{register:moduleBodyBorderWidth2})
			bodyWidthMod2.data = register:tempBodyWidthMod2
			bodyWidthMod2.prioriCalc = intval
			moduleBodyTopBuffer2 = 0
			moduleBodyLeftBuffer2 = 0
			moduleBodyRightBuffer2 = 0
			moduleBodyBottomBuffer2 = 0
			moduleBodyClass2 = inner-wrap bleed
		}
	}

	moduleGroupSetup.50.30 = CASE
	moduleGroupSetup.50.30 {
		key.field = field_module_3_bleed
		default = LOAD_REGISTER
		default {
			tempBodyWidthMod3.data = register:moduleWidth3
			tempBodyWidthMod3.dataWrap = |-({register:moduleBodyLeftBuffer3}+{register:moduleBodyRightBuffer3})-(2*{register:moduleBodyBorderWidth3})
			bodyWidthMod3.data = register:tempBodyWidthMod3
			bodyWidthMod3.prioriCalc = intval
			moduleBodyClass3 = inner-wrap
		}
		1 = LOAD_REGISTER
		1 {
			tempBodyWidthMod3.data = register:moduleWidth3
			tempBodyWidthMod3.dataWrap = |-(2*{register:moduleBodyBorderWidth3})
			bodyWidthMod3.data = register:tempBodyWidthMod3
			bodyWidthMod3.prioriCalc = intval
			moduleBodyTopBuffer3 = 0
			moduleBodyLeftBuffer3 = 0
			moduleBodyRightBuffer3 = 0
			moduleBodyBottomBuffer3 = 0
			moduleBodyClass3 = inner-wrap bleed
		}
	}

	moduleGroupSetup.50.40 = CASE
	moduleGroupSetup.50.40 {
		key.field = field_module_4_bleed
		default = LOAD_REGISTER
		default {
			tempBodyWidthMod4.data = register:moduleWidth4
			tempBodyWidthMod4.dataWrap = |-({register:moduleBodyLeftBuffer4}+{register:moduleBodyRightBuffer4})-(2*{register:moduleBodyBorderWidth4})
			bodyWidthMod4.data = register:tempBodyWidthMod4
			bodyWidthMod4.prioriCalc = intval
			moduleBodyClass4 = inner-wrap
		}
		1 = LOAD_REGISTER
		1 {
			tempBodyWidthMod4.data = register:moduleWidth4
			tempBodyWidthMod4.dataWrap = |-(2*{register:moduleBodyBorderWidth4})
			bodyWidthMod4.data = register:tempBodyWidthMod4
			bodyWidthMod4.prioriCalc = intval
			moduleBodyTopBuffer4 = 0
			moduleBodyLeftBuffer4 = 0
			moduleBodyRightBuffer4 = 0
			moduleBodyBottomBuffer4 = 0
			moduleBodyClass4 = inner-wrap bleed
		}
	}

	##############################################################
	# columnGroupSetup is the library used to load the register with
	# the various values needed by the column groups. There are default
	# values supplied by the the skins via constants
	##############################################################

	columnGroupSetup = COA
	columnGroupSetup.10 = LOAD_REGISTER
	columnGroupSetup.10.columnRuleDefault = {$plugin.tx_templavoilaframework.columnRuleDefault}

	columnGroupSetup.20 = CASE
	columnGroupSetup.20 {
		key.data = register:columnRuleDefault
		default = LOAD_REGISTER
		default.columnGroupDefaultClass = column-group
		1 = LOAD_REGISTER
		1.columnGroupDefaultClass = column-group rule
	}
	columnGroupSetup.30 = CASE
	columnGroupSetup.30 {
		key.field = field_group_rule
		default = LOAD_REGISTER
		default.columnGroupClass.data = register:columnGroupDefaultClass
		1 = LOAD_REGISTER
		1.columnGroupClass = column-group rule
		2 = LOAD_REGISTER
		2.columnGroupClass = column-group
	}
	columnGroupSetup.40 = CASE
	columnGroupSetup.40 {
		key.field = field_column_distribution
		default = CASE
		default {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth.data = register:containerWidth
				tempColumnWidth.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:tempColumnWidth
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = half
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth.data = register:containerWidth
				tempColumnWidth.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:tempColumnWidth
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = half
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}

		1323 = CASE
		1323 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth.data = register:containerWidth
				tempColumnWidth.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:tempColumnWidth
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = half
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth1.data = register:containerWidth
				tempColumnWidth1.dataWrap = (|-({register:globalGutter}*2))/3
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (((|-({register:globalGutter}*2))/3)*2)+{register:globalGutter}
				columnWidth1.data = register:tempColumnWidth1
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = third
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = two-third
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = third-two-third
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}

		2313 = CASE
		2313 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth.data = register:containerWidth
				tempColumnWidth.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:tempColumnWidth
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = half
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth1.data = register:containerWidth
				tempColumnWidth1.dataWrap = (((|-({register:globalGutter}*2))/3)*2)+{register:globalGutter}
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (|-({register:globalGutter}*2))/3
				columnWidth1.data = register:tempColumnWidth1
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = two-third
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = third
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = two-third-third
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}

		3414 = CASE
		3414 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth.data = register:containerWidth
				tempColumnWidth.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:tempColumnWidth
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = half
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth1.data = register:containerWidth
				tempColumnWidth1.dataWrap = (((|-({register:globalGutter}*3))/4)*3)+({register:globalGutter}*2)
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (|-({register:globalGutter}*3))/4
				columnWidth1.data = register:tempColumnWidth1
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = three-quarter
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = quarter
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = three-quarter-quarter
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}

		1434 = CASE
		1434 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth.data = register:containerWidth
				tempColumnWidth.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:tempColumnWidth
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = half
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth1.data = register:containerWidth
				tempColumnWidth1.dataWrap = (|-({register:globalGutter}*3))/4
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (((|-({register:globalGutter}*3))/4)*3)+({register:globalGutter}*2)
				columnWidth1.data = register:tempColumnWidth1
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				classColumn1Distribution = quarter
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = three-quarter
				classColumn2Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = quarter-three-quarter
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}

		131313 = CASE
		131313 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = full
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth.data = register:containerWidth
				tempColumnWidth.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:tempColumnWidth
				columnWidth2.prioriCalc = intval
				columnWidth3.data = register:tempColumnWidth
				columnWidth3.prioriCalc = intval
				classColumn1Distribution = half
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = full
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate full-half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth.data = register:containerWidth
				tempColumnWidth.dataWrap = (|-({register:globalGutter}*2))/3
				columnWidth1.data = register:tempColumnWidth
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth
				columnWidth2.prioriCalc = intval
				columnWidth3.data = register:tempColumnWidth
				columnWidth3.prioriCalc = intval
				classColumn1Distribution = third
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = third
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = third
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = third-third-third
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}

		121414 = CASE
		121414 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = full
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (|-{register:globalGutter})/2
				tempColumnWidth3.data = register:containerWidth
				tempColumnWidth3.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				columnWidth3.data = register:tempColumnWidth3
				columnWidth3.prioriCalc = intval
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = half
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate full-half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth1.data = register:containerWidth
				tempColumnWidth1.dataWrap = ((|-({register:globalGutter}*3))/2)+{register:globalGutter}
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (|-({register:globalGutter}*3))/4
				tempColumnWidth3.data = register:containerWidth
				tempColumnWidth3.dataWrap = (|-({register:globalGutter}*3))/4
				columnWidth1.data = register:tempColumnWidth1
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				columnWidth3.data = register:tempColumnWidth3
				columnWidth3.prioriCalc = intval
				classColumn1Distribution = half
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = quarter
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = quarter
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = half-quarter-quarter
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}

		141214 = CASE
		141214 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = full
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (|-{register:globalGutter})/2
				tempColumnWidth3.data = register:containerWidth
				tempColumnWidth3.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				columnWidth3.data = register:tempColumnWidth3
				columnWidth3.prioriCalc = intval
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = half
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate full-half-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth1.data = register:containerWidth
				tempColumnWidth1.dataWrap = (|-({register:globalGutter}*3))/4
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = ((|-({register:globalGutter}*3))/2)+{register:globalGutter}
				tempColumnWidth3.data = register:containerWidth
				tempColumnWidth3.dataWrap = (|-({register:globalGutter}*3))/4
				columnWidth1.data = register:tempColumnWidth1
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				columnWidth3.data = register:tempColumnWidth3
				columnWidth3.prioriCalc = intval
				classColumn1Distribution = quarter
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = quarter
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = quarter-half-quarter
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}

		141412 = CASE
		141412 {
			key.data = register:columnModuleRenderMode
			full = LOAD_REGISTER
			full {
				columnWidth1.data = register:containerWidth
				columnWidth2.data = register:containerWidth
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = full
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = full
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = full full-full-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			intermediate = LOAD_REGISTER
			intermediate {
				tempColumnWidth1.data = register:containerWidth
				tempColumnWidth1.dataWrap = (|-{register:globalGutter})/2
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (|-{register:globalGutter})/2
				columnWidth1.data = register:tempColumnWidth1
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				columnWidth3.data = register:containerWidth
				classColumn1Distribution = full
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = half
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = half
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = intermediate half-half-full
				classColumnGroupDistribution.noTrimWrap = | ||
			}
			default = LOAD_REGISTER
			default {
				tempColumnWidth1.data = register:containerWidth
				tempColumnWidth1.dataWrap = (|-({register:globalGutter}*3))/4
				tempColumnWidth2.data = register:containerWidth
				tempColumnWidth2.dataWrap = (|-({register:globalGutter}*3))/4
				tempColumnWidth3.data = register:containerWidth
				tempColumnWidth3.dataWrap = ((|-({register:globalGutter}*3))/2)+{register:globalGutter}
				columnWidth1.data = register:tempColumnWidth1
				columnWidth1.prioriCalc = intval
				columnWidth2.data = register:tempColumnWidth2
				columnWidth2.prioriCalc = intval
				columnWidth3.data = register:tempColumnWidth3
				columnWidth3.prioriCalc = intval
				classColumn1Distribution = quarter
				classColumn1Distribution.noTrimWrap = | ||
				classColumn2Distribution = quarter
				classColumn2Distribution.noTrimWrap = | ||
				classColumn3Distribution = half
				classColumn3Distribution.noTrimWrap = | ||
				classColumnGroupDistribution = quarter-quarter-half
				classColumnGroupDistribution.noTrimWrap = | ||
			}
		}
	}

	##############################################################
	# The following allows for custom header, footer, preCode and
	# postCode objects to be written for each template as well as
	# global defaults for each
	##############################################################

	f1a.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f1a.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f1a.preCodeHeader

	f1a.header =< plugin.tx_templavoilaframework.header
	f1a.evaluatedHeader =< plugin.tx_templavoilaframework.f1a.header

	f1a.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f1a.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f1a.postCodeHeader

	f1a.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f1a.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f1a.preCodeFeature
	f1a.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1a.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f1a.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f1a.postCodeFeature
	f1a.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1a.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f1a.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f1a.preCodeContent

	f1a.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f1a.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f1a.preCodeContentBlock-1

	f1a.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f1a.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f1a.postCodeContentBlock-1

	f1a.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f1a.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f1a.preCodeFooter

	f1a.footer =< plugin.tx_templavoilaframework.footer
	f1a.evaluatedFooter =< plugin.tx_templavoilaframework.f1a.footer

	f1a.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f1a.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f1a.postCodeFooter

	f1b.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f1b.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f1b.preCodeHeader

	f1b.header =< plugin.tx_templavoilaframework.header
	f1b.evaluatedHeader =< plugin.tx_templavoilaframework.f1b.header

	f1b.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f1b.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f1b.postCodeHeader

	f1b.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f1b.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f1b.preCodeFeature
	f1b.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1b.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f1b.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f1b.postCodeFeature
	f1b.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1b.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f1b.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f1b.preCodeContent

	f1b.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f1b.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f1b.preCodeContentBlock-1

	f1b.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f1b.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f1b.postCodeContentBlock-1

	f1b.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f1b.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f1b.preCodeFooter

	f1b.footer =< plugin.tx_templavoilaframework.footer
	f1b.evaluatedFooter =< plugin.tx_templavoilaframework.f1b.footer

	f1b.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f1b.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f1b.postCodeFooter

	f1c.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f1c.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f1c.preCodeHeader

	f1c.header =< plugin.tx_templavoilaframework.header
	f1c.evaluatedHeader =< plugin.tx_templavoilaframework.f1c.header

	f1c.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f1c.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f1c.postCodeHeader

	f1c.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f1c.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f1c.preCodeFeature
	f1c.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1c.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f1c.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f1c.postCodeFeature
	f1c.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1c.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f1c.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f1c.preCodeContent

	f1c.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f1c.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f1c.preCodeContentBlock-1

	f1c.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f1c.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f1c.postCodeContentBlock-1

	f1c.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f1c.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f1c.preCodeFooter

	f1c.footer =< plugin.tx_templavoilaframework.footer
	f1c.evaluatedFooter =< plugin.tx_templavoilaframework.f1c.footer

	f1c.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f1c.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f1c.postCodeFooter

	f1d.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f1d.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f1d.preCodeHeader

	f1d.header =< plugin.tx_templavoilaframework.header
	f1d.evaluatedHeader =< plugin.tx_templavoilaframework.f1d.header

	f1d.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f1d.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f1d.postCodeHeader

	f1d.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f1d.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f1d.preCodeFeature
	f1d.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1d.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f1d.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f1d.postCodeFeature
	f1d.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1d.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f1d.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f1d.preCodeContent

	f1d.preCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.preCodeGeneratedContent-1
	f1d.evaluatedPreCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.f1d.preCodeGeneratedContent-1

	f1d.postCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.postCodeGeneratedContent-1
	f1d.evaluatedPostCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.f1d.postCodeGeneratedContent-1

	f1d.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f1d.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f1d.preCodeContentBlock-1

	f1d.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f1d.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f1d.postCodeContentBlock-1

	f1d.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f1d.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f1d.preCodeFooter

	f1d.footer =< plugin.tx_templavoilaframework.footer
	f1d.evaluatedFooter =< plugin.tx_templavoilaframework.f1d.footer

	f1d.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f1d.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f1d.postCodeFooter

	f1e.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f1e.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f1e.preCodeHeader

	f1e.header =< plugin.tx_templavoilaframework.header
	f1e.evaluatedHeader =< plugin.tx_templavoilaframework.f1e.header

	f1e.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f1e.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f1e.postCodeHeader

	f1e.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f1e.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f1e.preCodeFeature
	f1e.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1e.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f1e.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f1e.postCodeFeature
	f1e.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1e.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f1e.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f1e.preCodeContent

	f1e.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f1e.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f1e.preCodeContentBlock-1

	f1e.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f1e.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f1e.postCodeContentBlock-1

	f1e.preCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.preCodeGeneratedContent-2
	f1e.evaluatedPreCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.f1e.preCodeGeneratedContent-2

	f1e.postCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.postCodeGeneratedContent-2
	f1e.evaluatedPostCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.f1e.postCodeGeneratedContent-2

	f1e.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f1e.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f1e.preCodeFooter

	f1e.footer =< plugin.tx_templavoilaframework.footer
	f1e.evaluatedFooter =< plugin.tx_templavoilaframework.f1e.footer

	f1e.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f1e.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f1e.postCodeFooter

	f1f.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f1f.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f1f.preCodeHeader

	f1f.header =< plugin.tx_templavoilaframework.header
	f1f.evaluatedHeader =< plugin.tx_templavoilaframework.f1f.header

	f1f.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f1f.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f1f.postCodeHeader

	f1f.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f1f.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f1f.preCodeFeature
	f1f.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1f.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f1f.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f1f.postCodeFeature
	f1f.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1f.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f1f.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f1f.preCodeContent

	f1f.preCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.preCodeGeneratedContent-1
	f1f.evaluatedPreCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.f1f.preCodeGeneratedContent-1

	f1f.postCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.postCodeGeneratedContent-1
	f1f.evaluatedPostCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.f1f.postCodeGeneratedContent-1

	f1f.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f1f.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f1f.preCodeContentBlock-1

	f1f.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f1f.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f1f.postCodeContentBlock-1

	f1f.preCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.preCodeGeneratedContent-2
	f1f.evaluatedPreCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.f1f.preCodeGeneratedContent-2

	f1f.postCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.postCodeGeneratedContent-2
	f1f.evaluatedPostCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.f1f.postCodeGeneratedContent-2

	f1f.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f1f.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f1f.preCodeFooter

	f1f.footer =< plugin.tx_templavoilaframework.footer
	f1f.evaluatedFooter =< plugin.tx_templavoilaframework.f1f.footer

	f1f.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f1f.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f1f.postCodeFooter

	f2a.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f2a.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f2a.preCodeHeader

	f2a.header =< plugin.tx_templavoilaframework.header
	f2a.evaluatedHeader =< plugin.tx_templavoilaframework.f2a.header

	f2a.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f2a.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f2a.postCodeHeader

	f2a.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f2a.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f2a.preCodeFeature
	f2a.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2a.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f2a.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f2a.postCodeFeature
	f2a.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2a.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f2a.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f2a.preCodeContent

	f2a.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f2a.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f2a.preCodeContentBlock-1

	f2a.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f2a.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f2a.postCodeContentBlock-1

	f2a.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f2a.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f2a.preCodeContentBlock-2

	f2a.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f2a.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f2a.postCodeContentBlock-2

	f2a.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f2a.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f2a.preCodeFooter

	f2a.footer =< plugin.tx_templavoilaframework.footer
	f2a.evaluatedFooter =< plugin.tx_templavoilaframework.f2a.footer

	f2a.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f2a.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f2a.postCodeFooter

	f2b.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f2b.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f2b.preCodeHeader

	f2b.header =< plugin.tx_templavoilaframework.header
	f2b.evaluatedHeader =< plugin.tx_templavoilaframework.f2b.header

	f2b.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f2b.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f2b.postCodeHeader

	f2b.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f2b.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f2b.preCodeFeature
	f2b.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2b.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f2b.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f2b.postCodeFeature
	f2b.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2b.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f2b.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f2b.preCodeContent

	f2b.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f2b.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f2b.preCodeContentBlock-1

	f2b.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f2b.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f2b.postCodeContentBlock-1

	f2b.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f2b.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f2b.preCodeContentBlock-2

	f2b.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f2b.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f2b.postCodeContentBlock-2

	f2b.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f2b.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f2b.preCodeFooter

	f2b.footer =< plugin.tx_templavoilaframework.footer
	f2b.evaluatedFooter =< plugin.tx_templavoilaframework.f2b.footer

	f2b.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f2b.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f2b.postCodeFooter

	f2c.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f2c.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f2c.preCodeHeader

	f2c.header =< plugin.tx_templavoilaframework.header
	f2c.evaluatedHeader =< plugin.tx_templavoilaframework.f2c.header

	f2c.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f2c.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f2c.postCodeHeader

	f2c.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f2c.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f2c.preCodeFeature
	f2c.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2c.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f2c.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f2c.postCodeFeature
	f2c.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2c.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f2c.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f2c.preCodeContent

	f2c.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f2c.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f2c.preCodeContentBlock-1

	f2c.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f2c.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f2c.postCodeContentBlock-1

	f2c.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f2c.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f2c.preCodeContentBlock-2

	f2c.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f2c.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f2c.postCodeContentBlock-2

	f2c.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f2c.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f2c.preCodeFooter

	f2c.footer =< plugin.tx_templavoilaframework.footer
	f2c.evaluatedFooter =< plugin.tx_templavoilaframework.f2c.footer

	f2c.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f2c.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f2c.postCodeFooter

	f2d.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f2d.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f2d.preCodeHeader

	f2d.header =< plugin.tx_templavoilaframework.header
	f2d.evaluatedHeader =< plugin.tx_templavoilaframework.f2d.header

	f2d.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f2d.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f2d.postCodeHeader

	f2d.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f2d.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f2d.preCodeFeature
	f2d.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2d.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f2d.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f2d.postCodeFeature
	f2d.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2d.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f2d.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f2d.preCodeContent

	f2d.preCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.preCodeGeneratedContent-1
	f2d.evaluatedPreCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.f2d.preCodeGeneratedContent-1

	f2d.postCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.postCodeGeneratedContent-1
	f2d.evaluatedPostCodeGeneratedContent-1 =< plugin.tx_templavoilaframework.f2d.postCodeGeneratedContent-1

	f2d.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f2d.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f2d.preCodeContentBlock-1

	f2d.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f2d.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f2d.postCodeContentBlock-1

	f2d.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f2d.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f2d.preCodeContentBlock-2

	f2d.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f2d.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f2d.postCodeContentBlock-2

	f2d.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f2d.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f2d.preCodeFooter

	f2d.footer =< plugin.tx_templavoilaframework.footer
	f2d.evaluatedFooter =< plugin.tx_templavoilaframework.f2d.footer

	f2d.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f2d.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f2d.postCodeFooter

	f2e.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f2e.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f2e.preCodeHeader

	f2e.header =< plugin.tx_templavoilaframework.header
	f2e.evaluatedHeader =< plugin.tx_templavoilaframework.f2e.header

	f2e.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f2e.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f2e.postCodeHeader

	f2e.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f2e.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f2e.preCodeFeature
	f2e.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2e.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f2e.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f2e.postCodeFeature
	f2e.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2e.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f2e.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f2e.preCodeContent

	f2e.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f2e.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f2e.preCodeContentBlock-1

	f2e.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f2e.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f2e.postCodeContentBlock-1

	f2e.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f2e.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f2e.preCodeContentBlock-2

	f2e.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f2e.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f2e.postCodeContentBlock-2

	f2e.preCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.preCodeGeneratedContent-2
	f2e.evaluatedPreCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.f2e.preCodeGeneratedContent-2

	f2e.postCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.postCodeGeneratedContent-2
	f2e.evaluatedPostCodeGeneratedContent-2 =< plugin.tx_templavoilaframework.f2e.postCodeGeneratedContent-2

	f2e.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f2e.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f2e.preCodeFooter

	f2e.footer =< plugin.tx_templavoilaframework.footer
	f2e.evaluatedFooter =< plugin.tx_templavoilaframework.f2e.footer

	f2e.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f2e.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f2e.postCodeFooter

	f3a.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f3a.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f3a.preCodeHeader

	f3a.header =< plugin.tx_templavoilaframework.header
	f3a.evaluatedHeader =< plugin.tx_templavoilaframework.f3a.header

	f3a.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f3a.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f3a.postCodeHeader

	f3a.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f3a.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f3a.preCodeFeature
	f3a.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3a.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f3a.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f3a.postCodeFeature
	f3a.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3a.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f3a.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f3a.preCodeContent

	f3a.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f3a.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f3a.preCodeContentBlock-1

	f3a.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f3a.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f3a.postCodeContentBlock-1

	f3a.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f3a.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f3a.preCodeContentBlock-2

	f3a.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f3a.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f3a.postCodeContentBlock-2

	f3a.preCodeContentBlock-3 =< plugin.tx_templavoilaframework.preCodeContentBlock-3
	f3a.evaluatedPreCodeContentBlock-3 =< plugin.tx_templavoilaframework.f3a.preCodeContentBlock-3

	f3a.postCodeContentBlock-3 =< plugin.tx_templavoilaframework.postCodeContentBlock-3
	f3a.evaluatedPostContentBlock-3 =< plugin.tx_templavoilaframework.f3a.postCodeContentBlock-3

	f3a.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f3a.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f3a.preCodeFooter

	f3a.footer =< plugin.tx_templavoilaframework.footer
	f3a.evaluatedFooter =< plugin.tx_templavoilaframework.f3a.footer

	f3a.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f3a.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f3a.postCodeFooter

	f3b.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f3b.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f3b.preCodeHeader

	f3b.header =< plugin.tx_templavoilaframework.header
	f3b.evaluatedHeader =< plugin.tx_templavoilaframework.f3b.header

	f3b.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f3b.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f3b.postCodeHeader

	f3b.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f3b.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f3b.preCodeFeature
	f3b.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3b.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f3b.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f3b.postCodeFeature
	f3b.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3b.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f3b.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f3b.preCodeContent

	f3b.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f3b.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f3b.preCodeContentBlock-1

	f3b.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f3b.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f3b.postCodeContentBlock-1

	f3b.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f3b.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f3b.preCodeContentBlock-2

	f3b.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f3b.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f3b.postCodeContentBlock-2

	f3b.preCodeContentBlock-3 =< plugin.tx_templavoilaframework.preCodeContentBlock-3
	f3b.evaluatedPreCodeContentBlock-3 =< plugin.tx_templavoilaframework.f3b.preCodeContentBlock-3

	f3b.postCodeContentBlock-3 =< plugin.tx_templavoilaframework.postCodeContentBlock-3
	f3b.evaluatedPostContentBlock-3 =< plugin.tx_templavoilaframework.f3b.postCodeContentBlock-3

	f3b.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f3b.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f3b.preCodeFooter

	f3b.footer =< plugin.tx_templavoilaframework.footer
	f3b.evaluatedFooter =< plugin.tx_templavoilaframework.f3b.footer

	f3b.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f3b.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f3b.postCodeFooter

	f3c.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f3c.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f3c.preCodeHeader

	f3c.header =< plugin.tx_templavoilaframework.header
	f3c.evaluatedHeader =< plugin.tx_templavoilaframework.f3c.header

	f3c.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f3c.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f3c.postCodeHeader

	f3c.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f3c.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f3c.preCodeFeature
	f3c.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3c.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f3c.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f3c.postCodeFeature
	f3c.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3c.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f3c.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f3c.preCodeContent

	f3c.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f3c.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f3c.preCodeContentBlock-1

	f3c.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f3c.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f3c.postCodeContentBlock-1

	f3c.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f3c.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f3c.preCodeContentBlock-2

	f3c.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f3c.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f3c.postCodeContentBlock-2

	f3c.preCodeContentBlock-3 =< plugin.tx_templavoilaframework.preCodeContentBlock-3
	f3c.evaluatedPreCodeContentBlock-3 =< plugin.tx_templavoilaframework.f3c.preCodeContentBlock-3

	f3c.postCodeContentBlock-3 =< plugin.tx_templavoilaframework.postCodeContentBlock-3
	f3c.evaluatedPostContentBlock-3 =< plugin.tx_templavoilaframework.f3c.postCodeContentBlock-3

	f3c.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f3c.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f3c.preCodeFooter

	f3c.footer =< plugin.tx_templavoilaframework.footer
	f3c.evaluatedFooter =< plugin.tx_templavoilaframework.f3c.footer

	f3c.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f3c.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f3c.postCodeFooter

	f3d.preCodeHeader =< plugin.tx_templavoilaframework.preCodeHeader
	f3d.evaluatedPreCodeHeader =< plugin.tx_templavoilaframework.f3d.preCodeHeader

	f3d.header =< plugin.tx_templavoilaframework.header
	f3d.evaluatedHeader =< plugin.tx_templavoilaframework.f3d.header

	f3d.postCodeHeader =< plugin.tx_templavoilaframework.postCodeHeader
	f3d.evaluatedPostCodeHeader =< plugin.tx_templavoilaframework.f3d.postCodeHeader

	f3d.preCodeFeature =< plugin.tx_templavoilaframework.preCodeFeature
	f3d.evaluatedPreCodeFeature =< plugin.tx_templavoilaframework.f3d.preCodeFeature
	f3d.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3d.postCodeFeature =< plugin.tx_templavoilaframework.postCodeFeature
	f3d.evaluatedPostCodeFeature =< plugin.tx_templavoilaframework.f3d.postCodeFeature
	f3d.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3d.preCodeContent =< plugin.tx_templavoilaframework.preCodeContent
	f3d.evaluatedPreCodeContent =< plugin.tx_templavoilaframework.f3d.preCodeContent

	f3d.preCodeContentBlock-1 =< plugin.tx_templavoilaframework.preCodeContentBlock-1
	f3d.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoilaframework.f3d.preCodeContentBlock-1

	f3d.postCodeContentBlock-1 =< plugin.tx_templavoilaframework.postCodeContentBlock-1
	f3d.evaluatedPostContentBlock-1 =< plugin.tx_templavoilaframework.f3d.postCodeContentBlock-1

	f3d.preCodeContentBlock-2 =< plugin.tx_templavoilaframework.preCodeContentBlock-2
	f3d.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoilaframework.f3d.preCodeContentBlock-2

	f3d.postCodeContentBlock-2 =< plugin.tx_templavoilaframework.postCodeContentBlock-2
	f3d.evaluatedPostContentBlock-2 =< plugin.tx_templavoilaframework.f3d.postCodeContentBlock-2

	f3d.preCodeContentBlock-3 =< plugin.tx_templavoilaframework.preCodeContentBlock-3
	f3d.evaluatedPreCodeContentBlock-3 =< plugin.tx_templavoilaframework.f3d.preCodeContentBlock-3

	f3d.postCodeContentBlock-3 =< plugin.tx_templavoilaframework.postCodeContentBlock-3
	f3d.evaluatedPostContentBlock-3 =< plugin.tx_templavoilaframework.f3d.postCodeContentBlock-3

	f3d.preCodeFooter =< plugin.tx_templavoilaframework.preCodeFooter
	f3d.evaluatedPreCodeFooter =< plugin.tx_templavoilaframework.f3d.preCodeFooter

	f3d.footer =< plugin.tx_templavoilaframework.footer
	f3d.evaluatedFooter =< plugin.tx_templavoilaframework.f3d.footer

	f3d.postCodeFooter =< plugin.tx_templavoilaframework.postCodeFooter
	f3d.evaluatedPostCodeFooter =< plugin.tx_templavoilaframework.f3d.postCodeFooter
}

###  Defines the page object and uses TemplaVoila to render the page ###
page = PAGE
page {
	typeNum = 0
	config {
		# Set up XHTML Transitional output
		xmlprologue = none
		doctype = xhtml_trans

		# Get rid of extra comments in the XHTML output.
		disablePrefixComment = 1

		# Turn off the page title since we'll manually add it later.
		noPageTitle = 2

		# Enabled indexed search indexing.
		index_enable = 1

		# Clear the cache at midnight so that scheduled content appears on time.
		cache_clearAtMidnight = 1

		# Shorten email links using MD5 Hash.
		notification_email_urlmode = 76

		# Add the URL in front of local anchors to account for base URL.
		prefixLocalAnchors = all
	}

	headerData {
		# Set the new page title
		1 = COA
		1 {
			wrap = <title> | </title>

			1 = TEXT
			1.data = TSFE:page|title
			1.htmlSpecialChars = 1

			# Don't repeat the same title twice.
			2 = TEXT
			2.noTrimWrap = | &#124; {$siteTitle} |
			2.if {
				value.data = TSFE:page|title
				equals = {$siteTitle}
				negate = 1
			}
		}
		3 = TEXT
		3.value = <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

	}

	includeCSS.tf_skin = {$plugin.tx_templavoilaframework.skinCSS}

	includeJS.tf_skin = {$plugin.tx_templavoilaframework.skinJS}

	## This will put CSS in external stylesheet for columns and modules
	## provided register:createColumnModuleCSS is true
	cssInline {
		10 = COA
		10 {
			if.isTrue.data = register:createColumnModuleCSS
			10 = TEXT
			10 {
				data = register:globalGutter
				wrap = .column-group .column, .module-group .module {float:left;margin-right:|px;}
			}

			20 = TEXT
			20 {
				value = .two-column-group > .column-2, .three-column-group > .column-3, .four-column-group > .column-4, .dual-module-group > .module-2, .triple-module-group > .module-3, .quad-module-group > .module-4 {margin-right:0;}
			}

			30 = TEXT
			30 {
				data = register:tvfwColumnBottomMargin
				wrap = .column-group {margin-bottom: |px;}
			}

			35 = TEXT
			35 {
				data = register:tvfwColumnBottomMargin
				wrap (
					.column-group.intermediate  > .column, .column-group.full  > .column {margin-bottom: |px;}
					.column-group {
						clear:both;
						margin-bottom: 0;
					}
					.column-group:before,
					.column-group:after {
						content: '.';
						display: block;
						overflow: hidden;
						visibility: hidden;
						font-size: 0;
						line-height: 0;
						width: 0;
						height: 0;
					}
					.column-group:after {clear: both}
				)
			}

			40 = TEXT
			40.value (

				.four-column-group.full  > .column,
				.three-column-group.full > .column,
				.two-column-group.full > .column {
					clear: both;
					margin-right: 0;
					float: none;
				}

				.three-column-group.intermediate.half-half-full > .column-2 {
					margin-right: 0;
				}

				.three-column-group.intermediate.full-half-half > .column-2 {
					clear: both;
				}

				.three-column-group.intermediate.half-half-full > .column-3 {
					clear: both;
					float: none;
				}

				.four-column-group.intermediate  > .column-2 {
					margin-right: 0;
				}

				.four-column-group.intermediate  > .column-3 {
					clear: both;
				}

			)

			50 = TEXT
			50 {
				data = register:tvfwModuleBottomMargin
				wrap (

					.module-group {
						clear:both;
						margin-bottom: |px;
					}

					.module-group:before,
					.module-group:after {
						content: '.';
						display: block;
						overflow: hidden;
						visibility: hidden;
						font-size: 0;
						line-height: 0;
						width: 0;
						height: 0;
					}

					.module-group:after {clear: both}

					.module-group .module.unframed .body,
					.module-group .module.unframed .inner-wrap {
						padding: 0;
						border: 0;
					}
				)
			}

			60 = TEXT
			60 {
				value (
					.quad-module-group.full  > .module,
					.triple-module-group.full > .module,
					.dual-module-group.full > .module {
						clear: both;
						margin-right: 0;
						float: none;
					}

					.triple-module-group.intermediate.half-half-full > .module-2 {
						margin-right: 0;
					}

					.triple-module-group.intermediate.full-half-half > .module-2 {
						clear: both;
					}

					.triple-module-group.intermediate.half-half-full > .module-3 {
						clear: both;
						float: none;
					}

					.quad-module-group.intermediate  > .module-2 {
						margin-right: 0;
					}

					.quad-module-group.intermediate  > .module-3 {
						clear: both;
					}
				)
			}

			90 = TEXT
			90.data = register:aggregateColumnModuleCss

		}

		70 = TEXT
		70.value = .module-feature img {display:block;}

		90 = TEXT
		90.data = register:aggregateCss
	}
}

[globalVar = LIT:1 = {$plugin.tx_templavoilaframework.enableJQuery}]
page {
	javascriptLibs {
		jQuery = 1
	}

	includeJS.tf_core = {$plugin.tx_templavoilaframework.corePath}Resources/Public/JavaScript/core.js
}
[global]

# Let TemplaVoila render the page content.
page.10 = USER
page.10.userFunc = tx_templavoila_pi1->main_page

# Temporarily disabled - See http://bugs.typo3.org/view.php?id=17890
# page.10.renderUnmapped = false

page.10.disableExplosivePreview = 1
plugin.tx_templavoila_pi1.disableExplosivePreview = 1