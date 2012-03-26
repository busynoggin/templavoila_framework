##############################################################
# dsConfig is the library included in each TV datastructure
##############################################################

plugin.tx_templavoila_framework {
	dsConfig = COA
	dsConfig {
		10 = CASE
		10 {
			key.field = field_auto_header_switch
			default = LOAD_REGISTER
			default.autoMainHeadline = {$plugin.tx_templavoila_framework.autoMainHeadlineDefault}
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
				key = {$plugin.tx_templavoila_framework.featureBleedDefault}
				default = LOAD_REGISTER
				default {
					featureClass = none
					featureLeftPadding = 0
					featureRightPadding = 0
				}
				1 = LOAD_REGISTER
				1 {
					featureClass = bleed
					featureLeftPadding = {$plugin.tx_templavoila_framework.featureLeftPadding}
					featureRightPadding = {$plugin.tx_templavoila_framework.featureRightPadding}
				}
			}
			1 = LOAD_REGISTER
			1 {
				featureClass = bleed
				featureLeftPadding = {$plugin.tx_templavoila_framework.featureLeftPadding}
				featureRightPadding = {$plugin.tx_templavoila_framework.featureRightPadding}
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
			autoHeadlineWrap = {$plugin.tx_templavoila_framework.autoHeadlineWrap}
			generatedContent-1contentsource = {$plugin.tx_templavoila_framework.generatedContent-1.source}
			generatedContent-2contentsource = {$plugin.tx_templavoila_framework.generatedContent-2.source}
			
			## f1a feature
			f1afeaturewidth = {$plugin.tx_templavoila_framework.f1a.settings.feature.width}
			f1afeaturetag = {$plugin.tx_templavoila_framework.f1a.settings.feature.tag}
			f1afeatureid = {$plugin.tx_templavoila_framework.f1a.settings.feature.id}
			f1afeatureid {
				wrap = id="|"
				required = 1
			}
			f1afeatureclass = {$plugin.tx_templavoila_framework.f1a.settings.feature.class}
			f1afeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1afeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1a.wraps.feature.beginWrap}
			f1afeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f1a.wraps.feature.endWrap}
			
			## f1a contentBlock-1
			f1acontentBlock-1width = {$plugin.tx_templavoila_framework.f1a.settings.contentBlock-1.width}
			f1acontentBlock-1tag = {$plugin.tx_templavoila_framework.f1a.settings.contentBlock-1.tag}
			f1acontentBlock-1id = {$plugin.tx_templavoila_framework.f1a.settings.contentBlock-1.id}
			f1acontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1acontentBlock-1class = {$plugin.tx_templavoila_framework.f1a.settings.contentBlock-1.class}
			f1acontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1acontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1a.wraps.contentBlock-1.beginWrap}
			f1acontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f1a.wraps.contentBlock-1.endWrap}
			
			## f1b feature
			f1bfeaturewidth = {$plugin.tx_templavoila_framework.f1b.settings.feature.width}
			f1bfeaturetag = {$plugin.tx_templavoila_framework.f1b.settings.feature.tag}
			f1bfeatureid = {$plugin.tx_templavoila_framework.f1b.settings.feature.id}
			f1bfeatureid {
				wrap = id="|"
				required = 1
			}
			f1bfeatureclass = {$plugin.tx_templavoila_framework.f1b.settings.feature.class}
			f1bfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1bfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1b.wraps.feature.beginWrap}
			f1bfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f1b.wraps.feature.endWrap}

			## f1b contentBlock-1
			f1bcontentBlock-1width = {$plugin.tx_templavoila_framework.f1b.settings.contentBlock-1.width}
			f1bcontentBlock-1tag = {$plugin.tx_templavoila_framework.f1b.settings.contentBlock-1.tag}
			f1bcontentBlock-1id = {$plugin.tx_templavoila_framework.f1b.settings.contentBlock-1.id}
			f1bcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1bcontentBlock-1class = {$plugin.tx_templavoila_framework.f1b.settings.contentBlock-1.class}
			f1bcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1bcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1b.wraps.contentBlock-1.beginWrap}
			f1bcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f1b.wraps.contentBlock-1.endWrap}
			
			## f1c feature
			f1cfeaturewidth = {$plugin.tx_templavoila_framework.f1c.settings.feature.width}
			f1cfeaturetag = {$plugin.tx_templavoila_framework.f1c.settings.feature.tag}
			f1cfeatureid = {$plugin.tx_templavoila_framework.f1c.settings.feature.id}
			f1cfeatureid {
				wrap = id="|"
				required = 1
			}
			f1cfeatureclass = {$plugin.tx_templavoila_framework.f1c.settings.feature.class}
			f1cfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1cfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1c.wraps.feature.beginWrap}
			f1cfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f1c.wraps.feature.endWrap}

			## f1c contentBlock-1
			f1ccontentBlock-1width = {$plugin.tx_templavoila_framework.f1c.settings.contentBlock-1.width}
			f1ccontentBlock-1tag = {$plugin.tx_templavoila_framework.f1c.settings.contentBlock-1.tag}
			f1ccontentBlock-1id = {$plugin.tx_templavoila_framework.f1c.settings.contentBlock-1.id}
			f1ccontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1ccontentBlock-1class = {$plugin.tx_templavoila_framework.f1c.settings.contentBlock-1.class}
			f1ccontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1ccontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1c.wraps.contentBlock-1.beginWrap}
			f1ccontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f1c.wraps.contentBlock-1.endWrap}
			
			## f1d feature
			f1dfeaturewidth = {$plugin.tx_templavoila_framework.f1d.settings.feature.width}
			f1dfeaturetag = {$plugin.tx_templavoila_framework.f1d.settings.feature.tag}
			f1dfeatureid = {$plugin.tx_templavoila_framework.f1d.settings.feature.id}
			f1dfeatureid {
				wrap = id="|"
				required = 1
			}
			f1dfeatureclass = {$plugin.tx_templavoila_framework.f1d.settings.feature.class}
			f1dfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1dfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1d.wraps.feature.beginWrap}
			f1dfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f1d.wraps.feature.endWrap}

			## f1d contentBlock-1
			f1dcontentBlock-1width = {$plugin.tx_templavoila_framework.f1d.settings.contentBlock-1.width}
			f1dcontentBlock-1tag = {$plugin.tx_templavoila_framework.f1d.settings.contentBlock-1.tag}
			f1dcontentBlock-1id = {$plugin.tx_templavoila_framework.f1d.settings.contentBlock-1.id}
			f1dcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1dcontentBlock-1class = {$plugin.tx_templavoila_framework.f1d.settings.contentBlock-1.class}
			f1dcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1dcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1d.wraps.contentBlock-1.beginWrap}
			f1dcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f1d.wraps.contentBlock-1.endWrap}
			
			## f1d generatedContent-1
			f1dgeneratedContent-1width = {$plugin.tx_templavoila_framework.f1d.settings.generatedContent-1.width}
			f1dgeneratedContent-1wrap = {$plugin.tx_templavoila_framework.f1d.wraps.generatedContent-1.wrap}
			
			## f1e feature
			f1efeaturewidth = {$plugin.tx_templavoila_framework.f1e.settings.feature.width}
			f1efeaturetag = {$plugin.tx_templavoila_framework.f1e.settings.feature.tag}
			f1efeatureid = {$plugin.tx_templavoila_framework.f1e.settings.feature.id}
			f1efeatureid {
				wrap = id="|"
				required = 1
			}
			f1efeatureclass = {$plugin.tx_templavoila_framework.f1e.settings.feature.class}
			f1efeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1efeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1e.wraps.feature.beginWrap}
			f1efeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f1e.wraps.feature.endWrap}

			## f1e contentBlock-1
			f1econtentBlock-1width = {$plugin.tx_templavoila_framework.f1e.settings.contentBlock-1.width}
			f1econtentBlock-1tag = {$plugin.tx_templavoila_framework.f1e.settings.contentBlock-1.tag}
			f1econtentBlock-1id = {$plugin.tx_templavoila_framework.f1e.settings.contentBlock-1.id}
			f1econtentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1econtentBlock-1class = {$plugin.tx_templavoila_framework.f1e.settings.contentBlock-1.class}
			f1econtentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1econtentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1e.wraps.contentBlock-1.beginWrap}
			f1econtentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f1e.wraps.contentBlock-1.endWrap}
			
			## f1e generatedContent-2
			f1egeneratedContent-2width = {$plugin.tx_templavoila_framework.f1e.settings.generatedContent-2.width}
			f1egeneratedContent-2wrap = {$plugin.tx_templavoila_framework.f1e.wraps.generatedContent-2.wrap}
			
			## f1f feature
			f1ffeaturewidth = {$plugin.tx_templavoila_framework.f1f.settings.feature.width}
			f1ffeaturetag = {$plugin.tx_templavoila_framework.f1f.settings.feature.tag}
			f1ffeatureid = {$plugin.tx_templavoila_framework.f1f.settings.feature.id}
			f1ffeatureid {
				wrap = id="|"
				required = 1
			}
			f1ffeatureclass = {$plugin.tx_templavoila_framework.f1f.settings.feature.class}
			f1ffeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f1ffeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1f.wraps.feature.beginWrap}
			f1ffeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f1f.wraps.feature.endWrap}

			## f1f contentBlock-1
			f1fcontentBlock-1width = {$plugin.tx_templavoila_framework.f1f.settings.contentBlock-1.width}
			f1fcontentBlock-1tag = {$plugin.tx_templavoila_framework.f1f.settings.contentBlock-1.tag}
			f1fcontentBlock-1id = {$plugin.tx_templavoila_framework.f1f.settings.contentBlock-1.id}
			f1fcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f1fcontentBlock-1class = {$plugin.tx_templavoila_framework.f1f.settings.contentBlock-1.class}
			f1fcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f1fcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1f.wraps.contentBlock-1.beginWrap}
			f1fcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f1f.wraps.contentBlock-1.endWrap}
			
			## f1f Generated Content 1
			f1fgeneratedContent-1width = {$plugin.tx_templavoila_framework.f1f.settings.generatedContent-1.width}
			f1fgeneratedContent-1tag = {$plugin.tx_templavoila_framework.f1f.settings.generatedContent-1.tag}
			f1fgeneratedContent-1id = {$plugin.tx_templavoila_framework.f1f.settings.generatedContent-1.id}
			f1fgeneratedContent-1id {
				wrap = id="|"
				required = 1
			}
			f1fgeneratedContent-1class = {$plugin.tx_templavoila_framework.f1f.settings.generatedContent-1.class}
			f1fgeneratedContent-1class {
				wrap = class="|"
				required = 1
			}
			f1fgeneratedContent-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1f.wraps.generatedContent-1.beginWrap}
			f1fgeneratedContent-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f1f.wraps.generatedContent-1.endWrap}


			## f1f Generated Content 2
			f1fgeneratedContent-2width = {$plugin.tx_templavoila_framework.f1f.settings.generatedContent-2.width}
			f1fgeneratedContent-2tag = {$plugin.tx_templavoila_framework.f1f.settings.generatedContent-2.tag}
			f1fgeneratedContent-2id = {$plugin.tx_templavoila_framework.f1f.settings.generatedContent-2.id}
			f1fgeneratedContent-2id {
				wrap = id="|"
				required = 1
			}
			f1fgeneratedContent-2class = {$plugin.tx_templavoila_framework.f1f.settings.generatedContent-2.class}
			f1fgeneratedContent-2class {
				wrap = class="|"
				required = 1
			}
			f1fgeneratedContent-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f1f.wraps.generatedContent-2.beginWrap}
			f1fgeneratedContent-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f1f.wraps.generatedContent-2.endWrap}
			
			## f2a feature
			f2afeaturewidth = {$plugin.tx_templavoila_framework.f2a.settings.feature.width}
			f2afeaturetag = {$plugin.tx_templavoila_framework.f2a.settings.feature.tag}
			f2afeatureid = {$plugin.tx_templavoila_framework.f2a.settings.feature.id}
			f2afeatureid {
				wrap = id="|"
				required = 1
			}
			f2afeatureclass = {$plugin.tx_templavoila_framework.f2a.settings.feature.class}
			f2afeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2afeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2a.wraps.feature.beginWrap}
			f2afeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f2a.wraps.feature.endWrap}

			## f2a contentBlock-1
			f2acontentBlock-1width = {$plugin.tx_templavoila_framework.f2a.settings.contentBlock-1.width}
			f2acontentBlock-1tag = {$plugin.tx_templavoila_framework.f2a.settings.contentBlock-1.tag}
			f2acontentBlock-1id = {$plugin.tx_templavoila_framework.f2a.settings.contentBlock-1.id}
			f2acontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2acontentBlock-1class = {$plugin.tx_templavoila_framework.f2a.settings.contentBlock-1.class}
			f2acontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2acontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2a.wraps.contentBlock-1.beginWrap}
			f2acontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2a.wraps.contentBlock-1.endWrap}

			## f2a contentBlock-2
			f2acontentBlock-2width = {$plugin.tx_templavoila_framework.f2a.settings.contentBlock-2.width}
			f2acontentBlock-2tag = {$plugin.tx_templavoila_framework.f2a.settings.contentBlock-2.tag}
			f2acontentBlock-2id = {$plugin.tx_templavoila_framework.f2a.settings.contentBlock-2.id}
			f2acontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2acontentBlock-2class = {$plugin.tx_templavoila_framework.f2a.settings.contentBlock-2.class}
			f2acontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2acontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2a.wraps.contentBlock-2.beginWrap}
			f2acontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2a.wraps.contentBlock-2.endWrap}
			
			## f2b feature
			f2bfeaturewidth = {$plugin.tx_templavoila_framework.f2b.settings.feature.width}
			f2bfeaturetag = {$plugin.tx_templavoila_framework.f2b.settings.feature.tag}
			f2bfeatureid = {$plugin.tx_templavoila_framework.f2b.settings.feature.id}
			f2bfeatureid {
				wrap = id="|"
				required = 1
			}
			f2bfeatureclass = {$plugin.tx_templavoila_framework.f2b.settings.feature.class}
			f2bfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2bfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2b.wraps.feature.beginWrap}
			f2bfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f2b.wraps.feature.endWrap}

			## f2b contentBlock-1
			f2bcontentBlock-1width = {$plugin.tx_templavoila_framework.f2b.settings.contentBlock-1.width}
			f2bcontentBlock-1tag = {$plugin.tx_templavoila_framework.f2b.settings.contentBlock-1.tag}
			f2bcontentBlock-1id = {$plugin.tx_templavoila_framework.f2b.settings.contentBlock-1.id}
			f2bcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2bcontentBlock-1class = {$plugin.tx_templavoila_framework.f2b.settings.contentBlock-1.class}
			f2bcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2bcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2b.wraps.contentBlock-1.beginWrap}
			f2bcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2b.wraps.contentBlock-1.endWrap}

			## f2b contentBlock-2
			f2bcontentBlock-2width = {$plugin.tx_templavoila_framework.f2b.settings.contentBlock-2.width}
			f2bcontentBlock-2tag = {$plugin.tx_templavoila_framework.f2b.settings.contentBlock-2.tag}
			f2bcontentBlock-2id = {$plugin.tx_templavoila_framework.f2b.settings.contentBlock-2.id}
			f2bcontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2bcontentBlock-2class = {$plugin.tx_templavoila_framework.f2b.settings.contentBlock-2.class}
			f2bcontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2bcontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2b.wraps.contentBlock-2.beginWrap}
			f2bcontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2b.wraps.contentBlock-2.endWrap}
			
			## f2c feature
			f2cfeaturewidth = {$plugin.tx_templavoila_framework.f2c.settings.feature.width}
			f2cfeaturetag = {$plugin.tx_templavoila_framework.f2c.settings.feature.tag}
			f2cfeatureid = {$plugin.tx_templavoila_framework.f2c.settings.feature.id}
			f2cfeatureid {
				wrap = id="|"
				required = 1
			}
			f2cfeatureclass = {$plugin.tx_templavoila_framework.f2c.settings.feature.class}
			f2cfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2cfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2c.wraps.feature.beginWrap}
			f2cfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f2c.wraps.feature.endWrap}

			## f2c contentBlock-1
			f2ccontentBlock-1width = {$plugin.tx_templavoila_framework.f2c.settings.contentBlock-1.width}
			f2ccontentBlock-1tag = {$plugin.tx_templavoila_framework.f2c.settings.contentBlock-1.tag}
			f2ccontentBlock-1id = {$plugin.tx_templavoila_framework.f2c.settings.contentBlock-1.id}
			f2ccontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2ccontentBlock-1class = {$plugin.tx_templavoila_framework.f2c.settings.contentBlock-1.class}
			f2ccontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2ccontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2c.wraps.contentBlock-1.beginWrap}
			f2ccontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2c.wraps.contentBlock-1.endWrap}

			## f2c contentBlock-2
			f2ccontentBlock-2width = {$plugin.tx_templavoila_framework.f2c.settings.contentBlock-2.width}
			f2ccontentBlock-2tag = {$plugin.tx_templavoila_framework.f2c.settings.contentBlock-2.tag}
			f2ccontentBlock-2id = {$plugin.tx_templavoila_framework.f2c.settings.contentBlock-2.id}
			f2ccontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2ccontentBlock-2class = {$plugin.tx_templavoila_framework.f2c.settings.contentBlock-2.class}
			f2ccontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2ccontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2c.wraps.contentBlock-2.beginWrap}
			f2ccontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2c.wraps.contentBlock-2.endWrap}
			
			## f2d feature
			f2dfeaturewidth = {$plugin.tx_templavoila_framework.f2d.settings.feature.width}
			f2dfeaturetag = {$plugin.tx_templavoila_framework.f2d.settings.feature.tag}
			f2dfeatureid = {$plugin.tx_templavoila_framework.f2d.settings.feature.id}
			f2dfeatureid {
				wrap = id="|"
				required = 1
			}
			f2dfeatureclass = {$plugin.tx_templavoila_framework.f2d.settings.feature.class}
			f2dfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2dfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2d.wraps.feature.beginWrap}
			f2dfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f2d.wraps.feature.endWrap}

			## f2d contentBlock-1
			f2dcontentBlock-1width = {$plugin.tx_templavoila_framework.f2d.settings.contentBlock-1.width}
			f2dcontentBlock-1tag = {$plugin.tx_templavoila_framework.f2d.settings.contentBlock-1.tag}
			f2dcontentBlock-1id = {$plugin.tx_templavoila_framework.f2d.settings.contentBlock-1.id}
			f2dcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2dcontentBlock-1class = {$plugin.tx_templavoila_framework.f2d.settings.contentBlock-1.class}
			f2dcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2dcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2d.wraps.contentBlock-1.beginWrap}
			f2dcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2d.wraps.contentBlock-1.endWrap}

			## f2d contentBlock-2
			f2dcontentBlock-2width = {$plugin.tx_templavoila_framework.f2d.settings.contentBlock-2.width}
			f2dcontentBlock-2tag = {$plugin.tx_templavoila_framework.f2d.settings.contentBlock-2.tag}
			f2dcontentBlock-2id = {$plugin.tx_templavoila_framework.f2d.settings.contentBlock-2.id}
			f2dcontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2dcontentBlock-2class = {$plugin.tx_templavoila_framework.f2d.settings.contentBlock-2.class}
			f2dcontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2dcontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2d.wraps.contentBlock-2.beginWrap}
			f2dcontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2d.wraps.contentBlock-2.endWrap}

			## f2d generatedContent-1
			f2dgeneratedContent-1width = {$plugin.tx_templavoila_framework.f2d.settings.generatedContent-1.width}
			f2dgeneratedContent-1wrap = {$plugin.tx_templavoila_framework.f2d.wraps.generatedContent-1.wrap}
			
			## f2e feature
			f2efeaturewidth = {$plugin.tx_templavoila_framework.f2e.settings.feature.width}
			f2efeaturetag = {$plugin.tx_templavoila_framework.f2e.settings.feature.tag}
			f2efeatureid = {$plugin.tx_templavoila_framework.f2e.settings.feature.id}
			f2efeatureid {
				wrap = id="|"
				required = 1
			}
			f2efeatureclass = {$plugin.tx_templavoila_framework.f2e.settings.feature.class}
			f2efeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f2efeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2e.wraps.feature.beginWrap}
			f2efeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f2e.wraps.feature.endWrap}

			## f2e contentBlock-1
			f2econtentBlock-1width = {$plugin.tx_templavoila_framework.f2e.settings.contentBlock-1.width}
			f2econtentBlock-1tag = {$plugin.tx_templavoila_framework.f2e.settings.contentBlock-1.tag}
			f2econtentBlock-1id = {$plugin.tx_templavoila_framework.f2e.settings.contentBlock-1.id}
			f2econtentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f2econtentBlock-1class = {$plugin.tx_templavoila_framework.f2e.settings.contentBlock-1.class}
			f2econtentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f2econtentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2e.wraps.contentBlock-1.beginWrap}
			f2econtentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2e.wraps.contentBlock-1.endWrap}

			## f2e contentBlock-2
			f2econtentBlock-2width = {$plugin.tx_templavoila_framework.f2e.settings.contentBlock-2.width}
			f2econtentBlock-2tag = {$plugin.tx_templavoila_framework.f2e.settings.contentBlock-2.tag}
			f2econtentBlock-2id = {$plugin.tx_templavoila_framework.f2e.settings.contentBlock-2.id}
			f2econtentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f2econtentBlock-2class = {$plugin.tx_templavoila_framework.f2e.settings.contentBlock-2.class}
			f2econtentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f2econtentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f2e.wraps.contentBlock-2.beginWrap}
			f2econtentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f2e.wraps.contentBlock-2.endWrap}

			## f2e generatedContent-2
			f2egeneratedContent-2width = {$plugin.tx_templavoila_framework.f2e.settings.generatedContent-2.width}
			f2egeneratedContent-2rap = {$plugin.tx_templavoila_framework.f2e.wraps.generatedContent-2.wrap}
			
			## f3a feature
			f3afeaturewidth = {$plugin.tx_templavoila_framework.f3a.settings.feature.width}
			f3afeaturetag = {$plugin.tx_templavoila_framework.f3a.settings.feature.tag}
			f3afeatureid = {$plugin.tx_templavoila_framework.f3a.settings.feature.id}
			f3afeatureid {
				wrap = id="|"
				required = 1
			}
			f3afeatureclass = {$plugin.tx_templavoila_framework.f3a.settings.feature.class}
			f3afeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f3afeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3a.wraps.feature.beginWrap}
			f3afeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f3a.wraps.feature.endWrap}

			## f3a contentBlock-1
			f3acontentBlock-1width = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-1.width}
			f3acontentBlock-1tag = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-1.tag}
			f3acontentBlock-1id = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-1.id}
			f3acontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f3acontentBlock-1class = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-1.class}
			f3acontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f3acontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3a.wraps.contentBlock-1.beginWrap}
			f3acontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3a.wraps.contentBlock-1.endWrap}

			## f3a contentBlock-2
			f3acontentBlock-2width = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-2.width}
			f3acontentBlock-2tag = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-2.tag}
			f3acontentBlock-2id = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-2.id}
			f3acontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f3acontentBlock-2class = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-2.class}
			f3acontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f3acontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3a.wraps.contentBlock-2.beginWrap}
			f3acontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3a.wraps.contentBlock-2.endWrap}

			## f3a contentBlock-3
			f3acontentBlock-3width = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-3.width}
			f3acontentBlock-3tag = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-3.tag}
			f3acontentBlock-3id = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-3.id}
			f3acontentBlock-3id {
				wrap = id="|"
				required = 1
			}
			f3acontentBlock-3class = {$plugin.tx_templavoila_framework.f3a.settings.contentBlock-3.class}
			f3acontentBlock-3class {
				wrap = class="|"
				required = 1
			}
			f3acontentBlock-3beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3a.wraps.contentBlock-3.beginWrap}
			f3acontentBlock-3endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3a.wraps.contentBlock-3.endWrap}
			
			## f3b feature
			f3bfeaturewidth = {$plugin.tx_templavoila_framework.f3b.settings.feature.width}
			f3bfeaturetag = {$plugin.tx_templavoila_framework.f3b.settings.feature.tag}
			f3bfeatureid = {$plugin.tx_templavoila_framework.f3b.settings.feature.id}
			f3bfeatureid {
				wrap = id="|"
				required = 1
			}
			f3bfeatureclass = {$plugin.tx_templavoila_framework.f3b.settings.feature.class}
			f3bfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f3bfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3b.wraps.feature.beginWrap}
			f3bfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f3b.wraps.feature.endWrap}

			## f3b contentBlock-1
			f3bcontentBlock-1width = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-1.width}
			f3bcontentBlock-1tag = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-1.tag}
			f3bcontentBlock-1id = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-1.id}
			f3bcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f3bcontentBlock-1class = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-1.class}
			f3bcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f3bcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3b.wraps.contentBlock-1.beginWrap}
			f3bcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3b.wraps.contentBlock-1.endWrap}

			## f3b contentBlock-2
			f3bcontentBlock-2width = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-2.width}
			f3bcontentBlock-2tag = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-2.tag}
			f3bcontentBlock-2id = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-2.id}
			f3bcontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f3bcontentBlock-2class = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-2.class}
			f3bcontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f3bcontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3b.wraps.contentBlock-2.beginWrap}
			f3bcontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3b.wraps.contentBlock-2.endWrap}

			## f3b contentBlock-3
			f3bcontentBlock-3width = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-3.width}
			f3bcontentBlock-3tag = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-3.tag}
			f3bcontentBlock-3id = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-3.id}
			f3bcontentBlock-3id {
				wrap = id="|"
				required = 1
			}
			f3bcontentBlock-3class = {$plugin.tx_templavoila_framework.f3b.settings.contentBlock-3.class}
			f3bcontentBlock-3class {
				wrap = class="|"
				required = 1
			}
			f3bcontentBlock-3beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3b.wraps.contentBlock-3.beginWrap}
			f3bcontentBlock-3endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3b.wraps.contentBlock-3.endWrap}

			## f3c feature
			f3cfeaturewidth = {$plugin.tx_templavoila_framework.f3c.settings.feature.width}
			f3cfeaturetag = {$plugin.tx_templavoila_framework.f3c.settings.feature.tag}
			f3cfeatureid = {$plugin.tx_templavoila_framework.f3c.settings.feature.id}
			f3cfeatureid {
				wrap = id="|"
				required = 1
			}
			f3cfeatureclass = {$plugin.tx_templavoila_framework.f3c.settings.feature.class}
			f3cfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f3cfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3c.wraps.feature.beginWrap}
			f3cfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f3c.wraps.feature.endWrap}

			## f3c contentBlock-1
			f3ccontentBlock-1width = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-1.width}
			f3ccontentBlock-1tag = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-1.tag}
			f3ccontentBlock-1id = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-1.id}
			f3ccontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f3ccontentBlock-1class = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-1.class}
			f3ccontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f3ccontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3c.wraps.contentBlock-1.beginWrap}
			f3ccontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3c.wraps.contentBlock-1.endWrap}

			## f3c contentBlock-2
			f3ccontentBlock-2width = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-2.width}
			f3ccontentBlock-2tag = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-2.tag}
			f3ccontentBlock-2id = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-2.id}
			f3ccontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f3ccontentBlock-2class = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-2.class}
			f3ccontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f3ccontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3c.wraps.contentBlock-2.beginWrap}
			f3ccontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3c.wraps.contentBlock-2.endWrap}

			## f3c contentBlock-3
			f3ccontentBlock-3width = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-3.width}
			f3ccontentBlock-3tag = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-3.tag}
			f3ccontentBlock-3id = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-3.id}
			f3ccontentBlock-3id {
				wrap = id="|"
				required = 1
			}
			f3ccontentBlock-3class = {$plugin.tx_templavoila_framework.f3c.settings.contentBlock-3.class}
			f3ccontentBlock-3class {
				wrap = class="|"
				required = 1
			}
			f3ccontentBlock-3beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3c.wraps.contentBlock-3.beginWrap}
			f3ccontentBlock-3endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3c.wraps.contentBlock-3.endWrap}

			## f3d feature
			f3dfeaturewidth = {$plugin.tx_templavoila_framework.f3d.settings.feature.width}
			f3dfeaturetag = {$plugin.tx_templavoila_framework.f3d.settings.feature.tag}
			f3dfeatureid = {$plugin.tx_templavoila_framework.f3d.settings.feature.id}
			f3dfeatureid {
				wrap = id="|"
				required = 1
			}
			f3dfeatureclass = {$plugin.tx_templavoila_framework.f3d.settings.feature.class}
			f3dfeatureclass {
				noTrimWrap = |class="{register:featureClass} |"|
				insertData = 1
			}
			f3dfeaturebeginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3d.wraps.feature.beginWrap}
			f3dfeatureendWrap.dataWrap = {$plugin.tx_templavoila_framework.f3d.wraps.feature.endWrap}

			## f3d contentBlock-1
			f3dcontentBlock-1width = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-1.width}
			f3dcontentBlock-1tag = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-1.tag}
			f3dcontentBlock-1id = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-1.id}
			f3dcontentBlock-1id {
				wrap = id="|"
				required = 1
			}
			f3dcontentBlock-1class = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-1.class}
			f3dcontentBlock-1class {
				wrap = class="|"
				required = 1
			}
			f3dcontentBlock-1beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3d.wraps.contentBlock-1.beginWrap}
			f3dcontentBlock-1endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3d.wraps.contentBlock-1.endWrap}

			## f3d contentBlock-2
			f3dcontentBlock-2width = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-2.width}
			f3dcontentBlock-2tag = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-2.tag}
			f3dcontentBlock-2id = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-2.id}
			f3dcontentBlock-2id {
				wrap = id="|"
				required = 1
			}
			f3dcontentBlock-2class = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-2.class}
			f3dcontentBlock-2class {
				wrap = class="|"
				required = 1
			}
			f3dcontentBlock-2beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3d.wraps.contentBlock-2.beginWrap}
			f3dcontentBlock-2endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3d.wraps.contentBlock-2.endWrap}

			## f3d contentBlock-3
			f3dcontentBlock-3width = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-3.width}
			f3dcontentBlock-3tag = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-3.tag}
			f3dcontentBlock-3id = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-3.id}
			f3dcontentBlock-3id {
				wrap = id="|"
				required = 1
			}
			f3dcontentBlock-3class = {$plugin.tx_templavoila_framework.f3d.settings.contentBlock-3.class}
			f3dcontentBlock-3class {
				wrap = class="|"
				required = 1
			}
			f3dcontentBlock-3beginWrap.dataWrap = {$plugin.tx_templavoila_framework.f3d.wraps.contentBlock-3.beginWrap}
			f3dcontentBlock-3endWrap.dataWrap = {$plugin.tx_templavoila_framework.f3d.wraps.contentBlock-3.endWrap}
		}
	}
	##############################################################
	# moduleGroupSetup is the library used to load the register
	# with the various values needed by the module groups. The 
	# default values supplied by the the skins via constants
	##############################################################

	### Setup for Modules

	moduleGroupSetup = COA
	moduleGroupSetup.10 = LOAD_REGISTER
	moduleGroupSetup.10 {
		moduleGutter = {$plugin.tx_templavoila_framework.globalGutter}
		moduleBodyWrapBorderWidth1 = {$plugin.tx_templavoila_framework.moduleBodyWrapBorderWidth}
		moduleBodyTopBuffer1 = {$plugin.tx_templavoila_framework.moduleBodyTopBuffer}
		moduleBodyLeftBuffer1 = {$plugin.tx_templavoila_framework.moduleBodyLeftBuffer}
		moduleBodyRightBuffer1 = {$plugin.tx_templavoila_framework.moduleBodyRightBuffer}
		moduleBodyBottomBuffer1 = {$plugin.tx_templavoila_framework.moduleBodyBottomBuffer}
		moduleBodyWrapBorderWidth2 = {$plugin.tx_templavoila_framework.moduleBodyWrapBorderWidth}
		moduleBodyTopBuffer2 = {$plugin.tx_templavoila_framework.moduleBodyTopBuffer}
		moduleBodyLeftBuffer2 = {$plugin.tx_templavoila_framework.moduleBodyLeftBuffer}
		moduleBodyRightBuffer2 = {$plugin.tx_templavoila_framework.moduleBodyRightBuffer}
		moduleBodyBottomBuffer2 = {$plugin.tx_templavoila_framework.moduleBodyBottomBuffer}
		moduleBodyWrapBorderWidth3 = {$plugin.tx_templavoila_framework.moduleBodyWrapBorderWidth}
		moduleBodyTopBuffer3 = {$plugin.tx_templavoila_framework.moduleBodyTopBuffer}
		moduleBodyLeftBuffer3 = {$plugin.tx_templavoila_framework.moduleBodyLeftBuffer}
		moduleBodyRightBuffer3 = {$plugin.tx_templavoila_framework.moduleBodyRightBuffer}
		moduleBodyBottomBuffer3 = {$plugin.tx_templavoila_framework.moduleBodyBottomBuffer}
		moduleBodyWrapBorderWidth4 = {$plugin.tx_templavoila_framework.moduleBodyWrapBorderWidth}
		moduleBodyTopBuffer4 = {$plugin.tx_templavoila_framework.moduleBodyTopBuffer}
		moduleBodyLeftBuffer4 = {$plugin.tx_templavoila_framework.moduleBodyLeftBuffer}
		moduleBodyRightBuffer4 = {$plugin.tx_templavoila_framework.moduleBodyRightBuffer}
		moduleBodyBottomBuffer4 = {$plugin.tx_templavoila_framework.moduleBodyBottomBuffer}
		graphicHeaderMod1.cObject =< graphicHeaderMod1
		graphicHeaderMod2.cObject =< graphicHeaderMod2
		graphicHeaderMod3.cObject =< graphicHeaderMod3
		graphicHeaderMod4.cObject =< graphicHeaderMod4
		defaultHeaderInsideModule = {$plugin.tx_templavoila_framework.defaultHeaderInsideModule}
	}

	moduleGroupSetup.15 = CASE
	moduleGroupSetup.15 {
		key = {$plugin.tx_templavoila_framework.moduleFooterTotalHeight}
		default = LOAD_REGISTER
		default {
			renderedModuleFooter = <div class="module-footer"><span>&nbsp;</span></div>
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
				key = {$plugin.tx_templavoila_framework.showModuleTitleDefault}
				default = LOAD_REGISTER
				default {
					renderedModuleHeader1.field = field_module_1_title
					renderedModuleHeader1.parseFunc < lib.parseFunc
					renderedModuleHeader1.dataWrap = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="moduleHeader"><span class="module-header-inner-wrap"><span {register:graphicHeaderMod1}>|&nbsp;</span></span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
					classModule1 = module module-1
				}
				0 = LOAD_REGISTER
				0 {
					renderedModuleHeader1 = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header module-header-no-title"><span class="module-header-inner-wrap">&nbsp;</span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
					classModule1 = module module-1
				}
			}
			1 = LOAD_REGISTER
			1 {
				renderedModuleHeader1.field = field_module_1_title
				renderedModuleHeader1.parseFunc < lib.parseFunc
				renderedModuleHeader1.dataWrap = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="moduleHeader"><span class="module-header-inner-wrap"><span {register:graphicHeaderMod1}>|&nbsp;</span></span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
				classModule1 = module module-1
			}
			2 = LOAD_REGISTER
			2 {
				renderedModuleHeader1 = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header moduleHeaderNoTitle"><span class="module-header-inner-wrap">&nbsp;</span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
				classModule1 = module module-1
			}
		}
		1 = LOAD_REGISTER
		1 {
			renderedModuleHeader1 = 
			renderedModuleFooter1 =
			classModule1 = module module-1 unframed
			moduleBodyWrapBorderWidth1 = 0
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
				key = {$plugin.tx_templavoila_framework.showModuleTitleDefault}
				default = LOAD_REGISTER
				default {
					renderedModuleHeader2.field = field_module_2_title
					renderedModuleHeader2.parseFunc < lib.parseFunc
					renderedModuleHeader2.dataWrap = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="moduleHeader"><span class="module-header-inner-wrap"><span {register:graphicHeaderMod2}>|&nbsp;</span></span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
					classModule2 = module module-2
				}
				0 = LOAD_REGISTER
				0 {
					renderedModuleHeader2 = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header moduleHeaderNoTitle"><span class="module-header-inner-wrap">&nbsp;</span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
					classModule2 = module module-2
				}
			}
			1 = LOAD_REGISTER
			1 {
				renderedModuleHeader2.field = field_module_2_title
				renderedModuleHeader2.parseFunc < lib.parseFunc
				renderedModuleHeader2.dataWrap = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="moduleHeader"><span class="module-header-inner-wrap"><span {register:graphicHeaderMod2}>|&nbsp;</span></span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
				classModule2 = module module-2
			}
			2 = LOAD_REGISTER
			2 {
				renderedModuleHeader2 = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header moduleHeaderNoTitle"><span class="module-header-inner-wrap">&nbsp;</span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
				classModule2 = module module-2
			}
		}
		1 = LOAD_REGISTER
		1 {
			renderedModuleHeader2 = 
			renderedModuleFooter2 =
			classModule2 = module module-2 unframed
			moduleBodyWrapBorderWidth2 = 0
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
				key = {$plugin.tx_templavoila_framework.showModuleTitleDefault}
				default = LOAD_REGISTER
				default {
					renderedModuleHeader3.field = field_module_3_title
					renderedModuleHeader3.parseFunc < lib.parseFunc
					renderedModuleHeader3.dataWrap = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="moduleHeader"><span class="module-header-inner-wrap"><span {register:graphicHeaderMod3}>|&nbsp;</span></span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
					classModule3 = module module-3
				}
				0 = LOAD_REGISTER
				0 {
					renderedModuleHeader3 = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header module-header-no-title"><span class="module-header-inner-wrap">&nbsp;</span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
					classModule3 = module module-3
				}
			}
			1 = LOAD_REGISTER
			1 {
				renderedModuleHeader3.field = field_module_3_title
				renderedModuleHeader3.parseFunc < lib.parseFunc
				renderedModuleHeader3.dataWrap = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="moduleHeader"><span class="module-header-inner-wrap"><span {register:graphicHeaderMod3}>|&nbsp;</span></span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
				classModule3 = module module-3
			}
			2 = LOAD_REGISTER
			2 {
				renderedModuleHeader3 = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header moduleHeaderNoTitle"><span class="module-header-inner-wrap">&nbsp;</span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
				classModule3 = module module-3
			}
		}
		1 = LOAD_REGISTER
		1 {
			renderedModuleHeader3 = 
			renderedModuleFooter3 =
			classModule3 = module module-3 unframed
			moduleBodyWrapBorderWidth3 = 0
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
				key = {$plugin.tx_templavoila_framework.showModuleTitleDefault}
				default = LOAD_REGISTER
				default {
					renderedModuleHeader4.field = field_module_4_title
					renderedModuleHeader4.parseFunc < lib.parseFunc
					renderedModuleHeader4.dataWrap = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header"><span class="module-header-inner-wrap"><span {register:graphicHeaderMod4}>|&nbsp;</span></span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
					classModule4 = module module-4
				}
				0 = LOAD_REGISTER
				0 {
					renderedModuleHeader4 = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header moduleHeaderNoTitle"><span class="module-header-inner-wrap">&nbsp;</span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
					classModule4 = module module-4
				}
			}
			1 = LOAD_REGISTER
			1 {
				renderedModuleHeader4.field = field_module_4_title
				renderedModuleHeader4.parseFunc < lib.parseFunc
				renderedModuleHeader4.dataWrap = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="moduleHeader"><span class="module-header-inner-wrap"><span {register:graphicHeaderMod4}>|&nbsp;</span></span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
				classModule4 = module module-4
			}
			2 = LOAD_REGISTER
			2 {
				renderedModuleHeader4 = <{$plugin.tx_templavoila_framework.moduleTitleTag} class="module-header moduleHeaderNoTitle"><span class="module-header-inner-wrap">&nbsp;</span></{$plugin.tx_templavoila_framework.moduleTitleTag}>
				classModule4 = module module-4
			}
		}
		1 = LOAD_REGISTER
		1 {
			renderedModuleHeader4 = 
			renderedModuleFooter4 =
			classModule4 = module module-4 unframed
			moduleBodyWrapBorderWidth4 = 0
			moduleBodyTopBuffer4 = 0
			moduleBodyLeftBuffer4 = 0
			moduleBodyRightBuffer4 = 0
			moduleBodyBottomBuffer4 = 0
		}
	}

	moduleGroupSetup.40 = CASE
	moduleGroupSetup.40 {
		key.data = register:moduleDistribution
		default = LOAD_REGISTER
		default {
			tempModuleWidth.data = register:containerWidth
			tempModuleWidth.dataWrap = (|-{register:moduleGutter})/2
			moduleWidth1.data = register:tempModuleWidth
			moduleWidth1.prioriCalc = intval
			moduleWidth2.data = register:tempModuleWidth
			moduleWidth2.prioriCalc = intval
			classModule1Distribution = one-half
			classModule1Distribution.noTrimWrap = | ||
			classModule2Distribution = one-half
			classModule2Distribution.noTrimWrap = | ||
		}
		11 = LOAD_REGISTER
		11 {
			moduleWidth1.data = register:containerWidth
		}
		1323 = LOAD_REGISTER
		1323 {
			tempModuleWidth1.data = register:containerWidth
			tempModuleWidth1.dataWrap = (|-({register:moduleGutter}*2))/3
			tempModuleWidth2.data = register:containerWidth
			tempModuleWidth2.dataWrap = (((|-({register:moduleGutter}*2))/3)*2)+{register:moduleGutter}
			moduleWidth1.data = register:tempModuleWidth1
			moduleWidth1.prioriCalc = intval
			moduleWidth2.data = register:tempModuleWidth2
			moduleWidth2.prioriCalc = intval
			classModule1Distribution = one-third
			classModule1Distribution.noTrimWrap = | ||
			classModule2Distribution = two-third
			classModule2Distribution.noTrimWrap = | ||
		}
		2313 = LOAD_REGISTER
		2313 {
			tempModuleWidth1.data = register:containerWidth
			tempModuleWidth1.dataWrap = (((|-({register:moduleGutter}*2))/3)*2)+{register:moduleGutter}
			tempModuleWidth2.data = register:containerWidth
			tempModuleWidth2.dataWrap = (|-({register:moduleGutter}*2))/3
			moduleWidth1.data = register:tempModuleWidth1
			moduleWidth1.prioriCalc = intval
			moduleWidth2.data = register:tempModuleWidth2
			moduleWidth2.prioriCalc = intval
			classModule1Distribution = two-third
			classModule1Distribution.noTrimWrap = | ||
			classModule2Distribution = one-third
			classModule2Distribution.noTrimWrap = | ||
		}
		3414 = LOAD_REGISTER
		3414 {
			tempModuleWidth1.data = register:containerWidth
			tempModuleWidth1.dataWrap = (((|-({register:moduleGutter}*3))/4)*3)+({register:moduleGutter}*2)
			tempModuleWidth2.data = register:containerWidth
			tempModuleWidth2.dataWrap = (|-({register:moduleGutter}*3))/4
			moduleWidth1.data = register:tempModuleWidth1
			moduleWidth1.prioriCalc = intval
			moduleWidth2.data = register:tempModuleWidth2
			moduleWidth2.prioriCalc = intval
			classModule1Distribution = threeQuarter
			classModule1Distribution.noTrimW-qap = | ||
			classModule2Distribution = one-quarter
			classModule2Distribution.noTrimWrap = | ||
		}
		1434 = LOAD_REGISTER
		1434 {
			tempModuleWidth1.data = register:containerWidth
			tempModuleWidth1.dataWrap = (|-({register:moduleGutter}*3))/4
			tempModuleWidth2.data = register:containerWidth
			tempModuleWidth2.dataWrap = (((|-({register:moduleGutter}*3))/4)*3)+({register:moduleGutter}*2)
			moduleWidth1.data = register:tempModuleWidth1
			moduleWidth1.prioriCalc = intval
			moduleWidth2.data = register:tempModuleWidth2
			moduleWidth2.prioriCalc = intval
			classModule1Distribution = one-quarter
			classModule1Distribution.noTrimWrap = | ||
			classModule2Distribution = three-quarter
			classModule2Distribution.noTrimWrap = | ||
		}
		131313 = LOAD_REGISTER
		131313 {
			tempModuleWidth.data = register:containerWidth
			tempModuleWidth.dataWrap = (|-({register:moduleGutter}*2))/3
			moduleWidth1.data = register:tempModuleWidth
			moduleWidth1.prioriCalc = intval
			moduleWidth2.data = register:tempModuleWidth
			moduleWidth2.prioriCalc = intval
			moduleWidth3.data = register:tempModuleWidth
			moduleWidth3.prioriCalc = intval
			classModule1Distribution = one-third
			classModule1Distribution.noTrimWrap = | ||
			classModule2Distribution = one-third
			classModule2Distribution.noTrimWrap = | ||
			classModule3Distribution = one-third
			classModule3Distribution.noTrimWrap = | ||
		}
		121414 = LOAD_REGISTER
		121414 {
			tempModuleWidth1.data = register:containerWidth
			tempModuleWidth1.dataWrap = ((|-({register:moduleGutter}*3))/2)+{register:moduleGutter}
			tempModuleWidth2.data = register:containerWidth
			tempModuleWidth2.dataWrap = (|-({register:moduleGutter}*3))/4
			tempModuleWidth3.data = register:containerWidth
			tempModuleWidth3.dataWrap = (|-({register:moduleGutter}*3))/4
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
		}
		141214 = LOAD_REGISTER
		141214 {
			tempModuleWidth1.data = register:containerWidth
			tempModuleWidth1.dataWrap = (|-({register:moduleGutter}*3))/4
			tempModuleWidth2.data = register:containerWidth
			tempModuleWidth2.dataWrap = ((|-({register:moduleGutter}*3))/2)+{register:moduleGutter}
			tempModuleWidth3.data = register:containerWidth
			tempModuleWidth3.dataWrap = (|-({register:moduleGutter}*3))/4
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
		}
		141412 = LOAD_REGISTER
		141412 {
			tempModuleWidth1.data = register:containerWidth
			tempModuleWidth1.dataWrap = (|-({register:moduleGutter}*3))/4
			tempModuleWidth2.data = register:containerWidth
			tempModuleWidth2.dataWrap = (|-({register:moduleGutter}*3))/4
			tempModuleWidth3.data = register:containerWidth
			tempModuleWidth3.dataWrap = ((|-({register:moduleGutter}*3))/2)+{register:moduleGutter}
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
		}
		14141414 = LOAD_REGISTER
		14141414 {
			tempModuleWidth.data = register:containerWidth
			tempModuleWidth.dataWrap = (|-({register:moduleGutter}*3))/4
			moduleWidth1.data = register:tempModuleWidth
			moduleWidth1.prioriCalc = intval
			moduleWidth2.data = register:tempModuleWidth
			moduleWidth2.prioriCalc = intval
			moduleWidth3.data = register:tempModuleWidth
			moduleWidth3.prioriCalc = intval
			moduleWidth4.data = register:tempModuleWidth
			moduleWidth4.prioriCalc = intval
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
			tempBodyWidthMod1.dataWrap = |-({register:moduleBodyLeftBuffer1}+{register:moduleBodyRightBuffer1})-(2*{register:moduleBodyWrapBorderWidth1})
			bodyWidthMod1.data = register:tempBodyWidthMod1
			bodyWidthMod1.prioriCalc = intval
			moduleBodyClass1 = moduleBody
		}
		1 = LOAD_REGISTER
		1 {
			tempBodyWidthMod1.data = register:moduleWidth1
			tempBodyWidthMod1.dataWrap = |-(2*{register:moduleBodyWrapBorderWidth1})
			bodyWidthMod1.data = register:tempBodyWidthMod1
			bodyWidthMod1.prioriCalc = intval
			moduleBodyTopBuffer1 = 0
			moduleBodyLeftBuffer1 = 0
			moduleBodyRightBuffer1 = 0
			moduleBodyBottomBuffer1 = 0
			moduleBodyClass1 = module-body module-body-bleed
		}
	}
	moduleGroupSetup.50.20 = CASE
	moduleGroupSetup.50.20 {
		key.field = field_module_2_bleed
		default = LOAD_REGISTER
		default {
			tempBodyWidthMod2.data = register:moduleWidth2
			tempBodyWidthMod2.dataWrap = |-({register:moduleBodyLeftBuffer2}+{register:moduleBodyRightBuffer2})-(2*{register:moduleBodyWrapBorderWidth2})
			bodyWidthMod2.data = register:tempBodyWidthMod2
			bodyWidthMod2.prioriCalc = intval
			moduleBodyClass2 = module-body
		}
		1 = LOAD_REGISTER
		1 {
			tempBodyWidthMod2.data = register:moduleWidth2
			tempBodyWidthMod2.dataWrap = |-(2*{register:moduleBodyWrapBorderWidth2})
			bodyWidthMod2.data = register:tempBodyWidthMod2
			bodyWidthMod2.prioriCalc = intval
			moduleBodyTopBuffer2 = 0
			moduleBodyLeftBuffer2 = 0
			moduleBodyRightBuffer2 = 0
			moduleBodyBottomBuffer2 = 0
			moduleBodyClass2 = module-body module-body-bleed
		}
	}

	moduleGroupSetup.50.30 = CASE
	moduleGroupSetup.50.30 {
		key.field = field_module_3_bleed
		default = LOAD_REGISTER
		default {
			tempBodyWidthMod3.data = register:moduleWidth3
			tempBodyWidthMod3.dataWrap = |-({register:moduleBodyLeftBuffer3}+{register:moduleBodyRightBuffer3})-(2*{register:moduleBodyWrapBorderWidth3})
			bodyWidthMod3.data = register:tempBodyWidthMod3
			bodyWidthMod3.prioriCalc = intval
			moduleBodyClass3 = module-body
		}
		1 = LOAD_REGISTER
		1 {
			tempBodyWidthMod3.data = register:moduleWidth3
			tempBodyWidthMod3.dataWrap = |-(2*{register:moduleBodyWrapBorderWidth3})
			bodyWidthMod3.data = register:tempBodyWidthMod3
			bodyWidthMod3.prioriCalc = intval
			moduleBodyTopBuffer3 = 0
			moduleBodyLeftBuffer3 = 0
			moduleBodyRightBuffer3 = 0
			moduleBodyBottomBuffer3 = 0
			moduleBodyClass3 = module-body module-body-bleed
		}
	}

	moduleGroupSetup.50.40 = CASE
	moduleGroupSetup.50.40 {
		key.field = field_module_4_bleed
		default = LOAD_REGISTER
		default {
			tempBodyWidthMod4.data = register:moduleWidth4
			tempBodyWidthMod4.dataWrap = |-({register:moduleBodyLeftBuffer4}+{register:moduleBodyRightBuffer4})-(2*{register:moduleBodyWrapBorderWidth4})
			bodyWidthMod4.data = register:tempBodyWidthMod4
			bodyWidthMod4.prioriCalc = intval
			moduleBodyClass4 = module-body
		}
		1 = LOAD_REGISTER
		1 {
			tempBodyWidthMod4.data = register:moduleWidth4
			tempBodyWidthMod4.dataWrap = |-(2*{register:moduleBodyWrapBorderWidth4})
			bodyWidthMod4.data = register:tempBodyWidthMod4
			bodyWidthMod4.prioriCalc = intval
			moduleBodyTopBuffer4 = 0
			moduleBodyLeftBuffer4 = 0
			moduleBodyRightBuffer4 = 0
			moduleBodyBottomBuffer4 = 0
			moduleBodyClass4 = module-body module-body-bleed
		}
	}

	##############################################################
	# columnGroupSetup is the library used to load the register with
	# the various values needed by the column groups. There are default
	# values supplied by the the skins via constants
	##############################################################

	columnGroupSetup = COA
	columnGroupSetup.10 = LOAD_REGISTER
	columnGroupSetup.10 {
		columnGutter = {$plugin.tx_templavoila_framework.globalGutter}
		columnRuleDefault = {$plugin.tx_templavoila_framework.columnRuleDefault}
	}

	columnGroupSetup.20 = CASE
	columnGroupSetup.20 {
		key.data = register:columnRuleDefault
		default = LOAD_REGISTER
		default.columnGroupDefaultClass = column-group
		1 = LOAD_REGISTER
		1.columnGroupDefaultClass = column-group column-group-rule
	}
	columnGroupSetup.30 = CASE
	columnGroupSetup.30 {
		key.field = field_group_rule
		default = LOAD_REGISTER
		default.columnGroupClass.data = register:columnGroupDefaultClass
		1 = LOAD_REGISTER
		1.columnGroupClass = column-group column-group-rule
		2 = LOAD_REGISTER
		2.columnGroupClass = column-group
	}
	columnGroupSetup.40 = CASE
	columnGroupSetup.40 {
		key.field = field_column_distribution
		default = LOAD_REGISTER
		default {
			tempColumnWidth.data = register:containerWidth
			tempColumnWidth.dataWrap = (|-{register:columnGutter})/2
			columnWidth1.data = register:tempColumnWidth
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth
			columnWidth2.prioriCalc = intval
			classColumn1Distribution = one-half
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = one-half
			classColumn2Distribution.noTrimWrap = | ||
		}
		1323 = LOAD_REGISTER
		1323 {
			tempColumnWidth1.data = register:containerWidth
			tempColumnWidth1.dataWrap = (|-({register:columnGutter}*2))/3
			tempColumnWidth2.data = register:containerWidth
			tempColumnWidth2.dataWrap = (((|-({register:columnGutter}*2))/3)*2)+{register:columnGutter}
			columnWidth1.data = register:tempColumnWidth1
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth2
			columnWidth2.prioriCalc = intval
			classColumn1Distribution = one-third
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = two-third
			classColumn2Distribution.noTrimWrap = | ||
		}
		2313 = LOAD_REGISTER
		2313 {
			tempColumnWidth1.data = register:containerWidth
			tempColumnWidth1.dataWrap = (((|-({register:columnGutter}*2))/3)*2)+{register:columnGutter}
			tempColumnWidth2.data = register:containerWidth
			tempColumnWidth2.dataWrap = (|-({register:columnGutter}*2))/3
			columnWidth1.data = register:tempColumnWidth1
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth2
			columnWidth2.prioriCalc = intval
			classColumn1Distribution = two-third
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = one-third
			classColumn2Distribution.noTrimWrap = | ||
		}
		3414 = LOAD_REGISTER
		3414 {
			tempColumnWidth1.data = register:containerWidth
			tempColumnWidth1.dataWrap = (((|-({register:columnGutter}*3))/4)*3)+({register:columnGutter}*2)
			tempColumnWidth2.data = register:containerWidth
			tempColumnWidth2.dataWrap = (|-({register:columnGutter}*3))/4
			columnWidth1.data = register:tempColumnWidth1
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth2
			columnWidth2.prioriCalc = intval
			classColumn1Distribution = three-quarter
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = one-quarter
			classColumn2Distribution.noTrimWrap = | ||
		}
		1434 = LOAD_REGISTER
		1434 {
			tempColumnWidth1.data = register:containerWidth
			tempColumnWidth1.dataWrap = (|-({register:columnGutter}*3))/4
			tempColumnWidth2.data = register:containerWidth
			tempColumnWidth2.dataWrap = (((|-({register:columnGutter}*3))/4)*3)+({register:columnGutter}*2)
			columnWidth1.data = register:tempColumnWidth1
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth2
			columnWidth2.prioriCalc = intval
			classColumn1Distribution = one-quarter
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = three-quarter
			classColumn2Distribution.noTrimWrap = | ||
		}
		131313 = LOAD_REGISTER
		131313 {
			tempColumnWidth.data = register:containerWidth
			tempColumnWidth.dataWrap = (|-({register:columnGutter}*2))/3
			columnWidth1.data = register:tempColumnWidth
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth
			columnWidth2.prioriCalc = intval
			columnWidth3.data = register:tempColumnWidth
			columnWidth3.prioriCalc = intval
			classColumn1Distribution = one-third
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = one-third
			classColumn2Distribution.noTrimWrap = | ||
			classColumn3Distribution = one-third
			classColumn3Distribution.noTrimWrap = | ||
		}
		121414 = LOAD_REGISTER
		121414 {
			tempColumnWidth1.data = register:containerWidth
			tempColumnWidth1.dataWrap = ((|-({register:columnGutter}*3))/2)+{register:columnGutter}
			tempColumnWidth2.data = register:containerWidth
			tempColumnWidth2.dataWrap = (|-({register:columnGutter}*3))/4
			tempColumnWidth3.data = register:containerWidth
			tempColumnWidth3.dataWrap = (|-({register:columnGutter}*3))/4
			columnWidth1.data = register:tempColumnWidth1
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth2
			columnWidth2.prioriCalc = intval
			columnWidth3.data = register:tempColumnWidth3
			columnWidth3.prioriCalc = intval
			classColumn1Distribution = one-half
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = one-quarter
			classColumn2Distribution.noTrimWrap = | ||
			classColumn3Distribution = one-quarter
			classColumn3Distribution.noTrimWrap = | ||
		}
		141214 = LOAD_REGISTER
		141214 {
			tempColumnWidth1.data = register:containerWidth
			tempColumnWidth1.dataWrap = (|-({register:columnGutter}*3))/4
			tempColumnWidth2.data = register:containerWidth
			tempColumnWidth2.dataWrap = ((|-({register:columnGutter}*3))/2)+{register:columnGutter}
			tempColumnWidth3.data = register:containerWidth
			tempColumnWidth3.dataWrap = (|-({register:columnGutter}*3))/4
			columnWidth1.data = register:tempColumnWidth1
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth2
			columnWidth2.prioriCalc = intval
			columnWidth3.data = register:tempColumnWidth3
			columnWidth3.prioriCalc = intval
			classColumn1Distribution = one-quarter
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = one-half
			classColumn2Distribution.noTrimWrap = | ||
			classColumn3Distribution = one-quarter
			classColumn3Distribution.noTrimWrap = | ||
		}
		141412 = LOAD_REGISTER
		141412 {
			tempColumnWidth1.data = register:containerWidth
			tempColumnWidth1.dataWrap = (|-({register:columnGutter}*3))/4
			tempColumnWidth2.data = register:containerWidth
			tempColumnWidth2.dataWrap = (|-({register:columnGutter}*3))/4
			tempColumnWidth3.data = register:containerWidth
			tempColumnWidth3.dataWrap = ((|-({register:columnGutter}*3))/2)+{register:columnGutter}
			columnWidth1.data = register:tempColumnWidth1
			columnWidth1.prioriCalc = intval
			columnWidth2.data = register:tempColumnWidth2
			columnWidth2.prioriCalc = intval
			columnWidth3.data = register:tempColumnWidth3
			columnWidth3.prioriCalc = intval
			classColumn1Distribution = one-quarter
			classColumn1Distribution.noTrimWrap = | ||
			classColumn2Distribution = one-quarter
			classColumn2Distribution.noTrimWrap = | ||
			classColumn3Distribution = one-half
			classColumn3Distribution.noTrimWrap = | ||
		}
	}

	##############################################################
	# The following allows for custom header, footer, preCode and
	# postCode objects to be written for each template as well as
	# global defaults for each
	##############################################################

	f1a.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f1a.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f1a.preCodeHeader

	f1a.header =< plugin.tx_templavoila_framework.header
	f1a.evaluatedHeader =< plugin.tx_templavoila_framework.f1a.header

	f1a.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f1a.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f1a.postCodeHeader

	f1a.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f1a.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f1a.preCodeFeature
	f1a.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1a.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f1a.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f1a.postCodeFeature
	f1a.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1a.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f1a.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f1a.preCodeContent

	f1a.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f1a.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f1a.preCodeContentBlock-1

	f1a.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f1a.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f1a.postCodeContentBlock-1

	f1a.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f1a.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f1a.preCodeFooter

	f1a.footer =< plugin.tx_templavoila_framework.footer
	f1a.evaluatedFooter =< plugin.tx_templavoila_framework.f1a.footer

	f1a.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f1a.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f1a.postCodeFooter

	f1b.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f1b.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f1b.preCodeHeader

	f1b.header =< plugin.tx_templavoila_framework.header
	f1b.evaluatedHeader =< plugin.tx_templavoila_framework.f1b.header

	f1b.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f1b.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f1b.postCodeHeader

	f1b.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f1b.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f1b.preCodeFeature
	f1b.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1b.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f1b.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f1b.postCodeFeature
	f1b.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1b.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f1b.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f1b.preCodeContent

	f1b.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f1b.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f1b.preCodeContentBlock-1

	f1b.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f1b.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f1b.postCodeContentBlock-1

	f1b.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f1b.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f1b.preCodeFooter

	f1b.footer =< plugin.tx_templavoila_framework.footer
	f1b.evaluatedFooter =< plugin.tx_templavoila_framework.f1b.footer

	f1b.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f1b.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f1b.postCodeFooter

	f1c.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f1c.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f1c.preCodeHeader

	f1c.header =< plugin.tx_templavoila_framework.header
	f1c.evaluatedHeader =< plugin.tx_templavoila_framework.f1c.header

	f1c.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f1c.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f1c.postCodeHeader

	f1c.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f1c.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f1c.preCodeFeature
	f1c.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1c.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f1c.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f1c.postCodeFeature
	f1c.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1c.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f1c.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f1c.preCodeContent

	f1c.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f1c.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f1c.preCodeContentBlock-1

	f1c.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f1c.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f1c.postCodeContentBlock-1

	f1c.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f1c.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f1c.preCodeFooter

	f1c.footer =< plugin.tx_templavoila_framework.footer
	f1c.evaluatedFooter =< plugin.tx_templavoila_framework.f1c.footer

	f1c.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f1c.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f1c.postCodeFooter

	f1d.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f1d.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f1d.preCodeHeader

	f1d.header =< plugin.tx_templavoila_framework.header
	f1d.evaluatedHeader =< plugin.tx_templavoila_framework.f1d.header

	f1d.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f1d.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f1d.postCodeHeader

	f1d.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f1d.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f1d.preCodeFeature
	f1d.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1d.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f1d.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f1d.postCodeFeature
	f1d.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1d.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f1d.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f1d.preCodeContent

	f1d.preCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.preCodeGeneratedContent-1
	f1d.evaluatedPreCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.f1d.preCodeGeneratedContent-1

	f1d.postCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.postCodeGeneratedContent-1
	f1d.evaluatedPostCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.f1d.postCodeGeneratedContent-1

	f1d.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f1d.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f1d.preCodeContentBlock-1

	f1d.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f1d.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f1d.postCodeContentBlock-1

	f1d.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f1d.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f1d.preCodeFooter

	f1d.footer =< plugin.tx_templavoila_framework.footer
	f1d.evaluatedFooter =< plugin.tx_templavoila_framework.f1d.footer

	f1d.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f1d.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f1d.postCodeFooter

	f1e.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f1e.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f1e.preCodeHeader

	f1e.header =< plugin.tx_templavoila_framework.header
	f1e.evaluatedHeader =< plugin.tx_templavoila_framework.f1e.header

	f1e.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f1e.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f1e.postCodeHeader

	f1e.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f1e.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f1e.preCodeFeature
	f1e.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1e.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f1e.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f1e.postCodeFeature
	f1e.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1e.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f1e.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f1e.preCodeContent

	f1e.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f1e.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f1e.preCodeContentBlock-1

	f1e.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f1e.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f1e.postCodeContentBlock-1

	f1e.preCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.preCodeGeneratedContent-2
	f1e.evaluatedPreCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.f1e.preCodeGeneratedContent-2

	f1e.postCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.postCodeGeneratedContent-2
	f1e.evaluatedPostCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.f1e.postCodeGeneratedContent-2

	f1e.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f1e.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f1e.preCodeFooter

	f1e.footer =< plugin.tx_templavoila_framework.footer
	f1e.evaluatedFooter =< plugin.tx_templavoila_framework.f1e.footer

	f1e.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f1e.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f1e.postCodeFooter

	f1f.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f1f.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f1f.preCodeHeader

	f1f.header =< plugin.tx_templavoila_framework.header
	f1f.evaluatedHeader =< plugin.tx_templavoila_framework.f1f.header

	f1f.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f1f.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f1f.postCodeHeader

	f1f.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f1f.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f1f.preCodeFeature
	f1f.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1f.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f1f.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f1f.postCodeFeature
	f1f.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f1f.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f1f.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f1f.preCodeContent

	f1f.preCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.preCodeGeneratedContent-1
	f1f.evaluatedPreCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.f1f.preCodeGeneratedContent-1

	f1f.postCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.postCodeGeneratedContent-1
	f1f.evaluatedPostCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.f1f.postCodeGeneratedContent-1

	f1f.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f1f.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f1f.preCodeContentBlock-1

	f1f.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f1f.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f1f.postCodeContentBlock-1

	f1f.preCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.preCodeGeneratedContent-2
	f1f.evaluatedPreCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.f1f.preCodeGeneratedContent-2

	f1f.postCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.postCodeGeneratedContent-2
	f1f.evaluatedPostCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.f1f.postCodeGeneratedContent-2

	f1f.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f1f.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f1f.preCodeFooter

	f1f.footer =< plugin.tx_templavoila_framework.footer
	f1f.evaluatedFooter =< plugin.tx_templavoila_framework.f1f.footer

	f1f.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f1f.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f1f.postCodeFooter

	f2a.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f2a.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f2a.preCodeHeader

	f2a.header =< plugin.tx_templavoila_framework.header
	f2a.evaluatedHeader =< plugin.tx_templavoila_framework.f2a.header

	f2a.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f2a.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f2a.postCodeHeader

	f2a.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f2a.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f2a.preCodeFeature
	f2a.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2a.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f2a.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f2a.postCodeFeature
	f2a.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2a.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f2a.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f2a.preCodeContent

	f2a.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f2a.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f2a.preCodeContentBlock-1

	f2a.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f2a.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f2a.postCodeContentBlock-1

	f2a.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f2a.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f2a.preCodeContentBlock-2

	f2a.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f2a.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f2a.postCodeContentBlock-2

	f2a.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f2a.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f2a.preCodeFooter

	f2a.footer =< plugin.tx_templavoila_framework.footer
	f2a.evaluatedFooter =< plugin.tx_templavoila_framework.f2a.footer

	f2a.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f2a.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f2a.postCodeFooter

	f2b.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f2b.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f2b.preCodeHeader

	f2b.header =< plugin.tx_templavoila_framework.header
	f2b.evaluatedHeader =< plugin.tx_templavoila_framework.f2b.header

	f2b.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f2b.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f2b.postCodeHeader

	f2b.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f2b.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f2b.preCodeFeature
	f2b.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2b.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f2b.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f2b.postCodeFeature
	f2b.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2b.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f2b.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f2b.preCodeContent

	f2b.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f2b.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f2b.preCodeContentBlock-1

	f2b.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f2b.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f2b.postCodeContentBlock-1

	f2b.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f2b.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f2b.preCodeContentBlock-2

	f2b.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f2b.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f2b.postCodeContentBlock-2

	f2b.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f2b.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f2b.preCodeFooter

	f2b.footer =< plugin.tx_templavoila_framework.footer
	f2b.evaluatedFooter =< plugin.tx_templavoila_framework.f2b.footer

	f2b.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f2b.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f2b.postCodeFooter

	f2c.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f2c.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f2c.preCodeHeader

	f2c.header =< plugin.tx_templavoila_framework.header
	f2c.evaluatedHeader =< plugin.tx_templavoila_framework.f2c.header

	f2c.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f2c.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f2c.postCodeHeader

	f2c.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f2c.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f2c.preCodeFeature
	f2c.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2c.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f2c.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f2c.postCodeFeature
	f2c.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2c.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f2c.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f2c.preCodeContent

	f2c.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f2c.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f2c.preCodeContentBlock-1

	f2c.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f2c.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f2c.postCodeContentBlock-1

	f2c.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f2c.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f2c.preCodeContentBlock-2

	f2c.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f2c.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f2c.postCodeContentBlock-2

	f2c.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f2c.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f2c.preCodeFooter

	f2c.footer =< plugin.tx_templavoila_framework.footer
	f2c.evaluatedFooter =< plugin.tx_templavoila_framework.f2c.footer

	f2c.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f2c.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f2c.postCodeFooter

	f2d.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f2d.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f2d.preCodeHeader

	f2d.header =< plugin.tx_templavoila_framework.header
	f2d.evaluatedHeader =< plugin.tx_templavoila_framework.f2d.header

	f2d.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f2d.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f2d.postCodeHeader

	f2d.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f2d.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f2d.preCodeFeature
	f2d.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2d.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f2d.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f2d.postCodeFeature
	f2d.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2d.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f2d.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f2d.preCodeContent

	f2d.preCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.preCodeGeneratedContent-1
	f2d.evaluatedPreCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.f2d.preCodeGeneratedContent-1

	f2d.postCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.postCodeGeneratedContent-1
	f2d.evaluatedPostCodeGeneratedContent-1 =< plugin.tx_templavoila_framework.f2d.postCodeGeneratedContent-1

	f2d.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f2d.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f2d.preCodeContentBlock-1

	f2d.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f2d.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f2d.postCodeContentBlock-1

	f2d.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f2d.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f2d.preCodeContentBlock-2

	f2d.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f2d.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f2d.postCodeContentBlock-2

	f2d.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f2d.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f2d.preCodeFooter

	f2d.footer =< plugin.tx_templavoila_framework.footer
	f2d.evaluatedFooter =< plugin.tx_templavoila_framework.f2d.footer

	f2d.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f2d.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f2d.postCodeFooter

	f2e.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f2e.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f2e.preCodeHeader

	f2e.header =< plugin.tx_templavoila_framework.header
	f2e.evaluatedHeader =< plugin.tx_templavoila_framework.f2e.header

	f2e.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f2e.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f2e.postCodeHeader

	f2e.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f2e.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f2e.preCodeFeature
	f2e.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2e.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f2e.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f2e.postCodeFeature
	f2e.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f2e.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f2e.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f2e.preCodeContent

	f2e.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f2e.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f2e.preCodeContentBlock-1

	f2e.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f2e.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f2e.postCodeContentBlock-1

	f2e.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f2e.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f2e.preCodeContentBlock-2

	f2e.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f2e.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f2e.postCodeContentBlock-2

	f2e.preCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.preCodeGeneratedContent-2
	f2e.evaluatedPreCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.f2e.preCodeGeneratedContent-2

	f2e.postCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.postCodeGeneratedContent-2
	f2e.evaluatedPostCodeGeneratedContent-2 =< plugin.tx_templavoila_framework.f2e.postCodeGeneratedContent-2

	f2e.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f2e.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f2e.preCodeFooter

	f2e.footer =< plugin.tx_templavoila_framework.footer
	f2e.evaluatedFooter =< plugin.tx_templavoila_framework.f2e.footer

	f2e.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f2e.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f2e.postCodeFooter

	f3a.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f3a.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f3a.preCodeHeader

	f3a.header =< plugin.tx_templavoila_framework.header
	f3a.evaluatedHeader =< plugin.tx_templavoila_framework.f3a.header

	f3a.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f3a.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f3a.postCodeHeader

	f3a.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f3a.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f3a.preCodeFeature
	f3a.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3a.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f3a.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f3a.postCodeFeature
	f3a.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3a.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f3a.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f3a.preCodeContent

	f3a.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f3a.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f3a.preCodeContentBlock-1

	f3a.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f3a.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f3a.postCodeContentBlock-1

	f3a.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f3a.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f3a.preCodeContentBlock-2

	f3a.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f3a.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f3a.postCodeContentBlock-2

	f3a.preCodeContentBlock-3 =< plugin.tx_templavoila_framework.preCodeContentBlock-3
	f3a.evaluatedPreCodeContentBlock-3 =< plugin.tx_templavoila_framework.f3a.preCodeContentBlock-3

	f3a.postCodeContentBlock-3 =< plugin.tx_templavoila_framework.postCodeContentBlock-3
	f3a.evaluatedPostContentBlock-3 =< plugin.tx_templavoila_framework.f3a.postCodeContentBlock-3

	f3a.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f3a.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f3a.preCodeFooter

	f3a.footer =< plugin.tx_templavoila_framework.footer
	f3a.evaluatedFooter =< plugin.tx_templavoila_framework.f3a.footer

	f3a.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f3a.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f3a.postCodeFooter

	f3b.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f3b.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f3b.preCodeHeader

	f3b.header =< plugin.tx_templavoila_framework.header
	f3b.evaluatedHeader =< plugin.tx_templavoila_framework.f3b.header

	f3b.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f3b.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f3b.postCodeHeader

	f3b.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f3b.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f3b.preCodeFeature
	f3b.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3b.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f3b.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f3b.postCodeFeature
	f3b.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3b.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f3b.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f3b.preCodeContent

	f3b.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f3b.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f3b.preCodeContentBlock-1

	f3b.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f3b.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f3b.postCodeContentBlock-1

	f3b.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f3b.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f3b.preCodeContentBlock-2

	f3b.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f3b.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f3b.postCodeContentBlock-2

	f3b.preCodeContentBlock-3 =< plugin.tx_templavoila_framework.preCodeContentBlock-3
	f3b.evaluatedPreCodeContentBlock-3 =< plugin.tx_templavoila_framework.f3b.preCodeContentBlock-3

	f3b.postCodeContentBlock-3 =< plugin.tx_templavoila_framework.postCodeContentBlock-3
	f3b.evaluatedPostContentBlock-3 =< plugin.tx_templavoila_framework.f3b.postCodeContentBlock-3

	f3b.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f3b.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f3b.preCodeFooter

	f3b.footer =< plugin.tx_templavoila_framework.footer
	f3b.evaluatedFooter =< plugin.tx_templavoila_framework.f3b.footer

	f3b.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f3b.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f3b.postCodeFooter

	f3c.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f3c.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f3c.preCodeHeader

	f3c.header =< plugin.tx_templavoila_framework.header
	f3c.evaluatedHeader =< plugin.tx_templavoila_framework.f3c.header

	f3c.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f3c.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f3c.postCodeHeader

	f3c.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f3c.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f3c.preCodeFeature
	f3c.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3c.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f3c.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f3c.postCodeFeature
	f3c.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3c.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f3c.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f3c.preCodeContent

	f3c.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f3c.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f3c.preCodeContentBlock-1

	f3c.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f3c.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f3c.postCodeContentBlock-1

	f3c.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f3c.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f3c.preCodeContentBlock-2

	f3c.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f3c.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f3c.postCodeContentBlock-2

	f3c.preCodeContentBlock-3 =< plugin.tx_templavoila_framework.preCodeContentBlock-3
	f3c.evaluatedPreCodeContentBlock-3 =< plugin.tx_templavoila_framework.f3c.preCodeContentBlock-3

	f3c.postCodeContentBlock-3 =< plugin.tx_templavoila_framework.postCodeContentBlock-3
	f3c.evaluatedPostContentBlock-3 =< plugin.tx_templavoila_framework.f3c.postCodeContentBlock-3

	f3c.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f3c.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f3c.preCodeFooter

	f3c.footer =< plugin.tx_templavoila_framework.footer
	f3c.evaluatedFooter =< plugin.tx_templavoila_framework.f3c.footer

	f3c.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f3c.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f3c.postCodeFooter

	f3d.preCodeHeader =< plugin.tx_templavoila_framework.preCodeHeader
	f3d.evaluatedPreCodeHeader =< plugin.tx_templavoila_framework.f3d.preCodeHeader

	f3d.header =< plugin.tx_templavoila_framework.header
	f3d.evaluatedHeader =< plugin.tx_templavoila_framework.f3d.header

	f3d.postCodeHeader =< plugin.tx_templavoila_framework.postCodeHeader
	f3d.evaluatedPostCodeHeader =< plugin.tx_templavoila_framework.f3d.postCodeHeader

	f3d.preCodeFeature =< plugin.tx_templavoila_framework.preCodeFeature
	f3d.evaluatedPreCodeFeature =< plugin.tx_templavoila_framework.f3d.preCodeFeature
	f3d.evaluatedPreCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3d.postCodeFeature =< plugin.tx_templavoila_framework.postCodeFeature
	f3d.evaluatedPostCodeFeature =< plugin.tx_templavoila_framework.f3d.postCodeFeature
	f3d.evaluatedPostCodeFeature.if.isFalse.data = register:noFeatureContentFlag

	f3d.preCodeContent =< plugin.tx_templavoila_framework.preCodeContent
	f3d.evaluatedPreCodeContent =< plugin.tx_templavoila_framework.f3d.preCodeContent

	f3d.preCodeContentBlock-1 =< plugin.tx_templavoila_framework.preCodeContentBlock-1
	f3d.evaluatedPreCodeContentBlock-1 =< plugin.tx_templavoila_framework.f3d.preCodeContentBlock-1

	f3d.postCodeContentBlock-1 =< plugin.tx_templavoila_framework.postCodeContentBlock-1
	f3d.evaluatedPostContentBlock-1 =< plugin.tx_templavoila_framework.f3d.postCodeContentBlock-1

	f3d.preCodeContentBlock-2 =< plugin.tx_templavoila_framework.preCodeContentBlock-2
	f3d.evaluatedPreCodeContentBlock-2 =< plugin.tx_templavoila_framework.f3d.preCodeContentBlock-2

	f3d.postCodeContentBlock-2 =< plugin.tx_templavoila_framework.postCodeContentBlock-2
	f3d.evaluatedPostContentBlock-2 =< plugin.tx_templavoila_framework.f3d.postCodeContentBlock-2

	f3d.preCodeContentBlock-3 =< plugin.tx_templavoila_framework.preCodeContentBlock-3
	f3d.evaluatedPreCodeContentBlock-3 =< plugin.tx_templavoila_framework.f3d.preCodeContentBlock-3

	f3d.postCodeContentBlock-3 =< plugin.tx_templavoila_framework.postCodeContentBlock-3
	f3d.evaluatedPostContentBlock-3 =< plugin.tx_templavoila_framework.f3d.postCodeContentBlock-3

	f3d.preCodeFooter =< plugin.tx_templavoila_framework.preCodeFooter
	f3d.evaluatedPreCodeFooter =< plugin.tx_templavoila_framework.f3d.preCodeFooter

	f3d.footer =< plugin.tx_templavoila_framework.footer
	f3d.evaluatedFooter =< plugin.tx_templavoila_framework.f3d.footer

	f3d.postCodeFooter =< plugin.tx_templavoila_framework.postCodeFooter
	f3d.evaluatedPostCodeFooter =< plugin.tx_templavoila_framework.f3d.postCodeFooter
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

		2 =< additionalDocHeadCode

	}

	includeCSS.tf_skin_main = {$templavoila_framework.skinPath}css/mainstyles.css
	includeCSS.tf_skin_rte = {$templavoila_framework.skinPath}css/rte.css

	includeJS.tf_skin = {$templavoila_framework.skinPath}js/skin.js
}

[globalVar = LIT:1 = {$plugin.tx_templavoila_framework.enableJQuery}]
page {
	includeJSlibs.tf_jquery = {$templavoila_framework.corePath}js/jquery-1.4.2.min.js
	includeJSlibs.tf_jquery.forceOnTop = 1

	includeJS.tf_core = {$templavoila_framework.corePath}js/core.js
	
	jsInline {
		1 = TEXT
		1.dataWrap = jQuery.noConflict();
	}
	cssInline {
		10 = TEXT
		10.data = register:aggregateCss
		20 = TEXT
		20.value (
			.column-group .column-1,
			.three-column-group .column-2,
			.four-column-group .column-2,
			.four-column-group .column-3,
			.double-module-group .module-1,
			.triple-module-group .module-1,
			.triple-module-group .module-2,
			.quad-module-group .module-1,
			.quad-module-group .module-2,
			.quad-module-group .module-3 {
				float:left;
			}
			.two-column-group .column-2,
			.three-column-group .column-3,
			.four-column-group .column-4,
			.double-module-group .module-2,
			.triple-module-group .module-3,
			.quad-module-group .module-4 {
				float:right;
			}
		)
		30 = TEXT
		30 {
			data = register:moduleGutter
			wrap (
				.three-column-group .column-1,
				.four-column-group .column-1,
				.four-column-group .column-2,
				.triple-module-group .module-1,
				.quad-module-group .module-1,
				.quad-module-group .module-2 {
					|px;
				}
			)
		}
	}
}
[global]

# Let TemplaVoila render the page content.
page.10 = USER
page.10.userFunc = tx_templavoila_pi1->main_page

# Temporarily disabled - See http://bugs.typo3.org/view.php?id=17890
# page.10.renderUnmapped = false

page.10.disableExplosivePreview = 1
plugin.tx_templavoila_pi1.disableExplosivePreview = 1