..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: ../Includes/MainInclude.txt


=========================
Constants
=========================

These are the TypoScript constants for the skin. You should write them in:
YourSkinDirectory/Configuration/TypoScript/Constants.ts

.. list-table::
    :widths: 25 75
    :header-rows: 1

    *
        - property
        - details

    *
        -
            renderMode
        -
            Description
                This constant must be at the beginning of your skin constants. It tells the Framework which rendering to use.
            Default
                Null

    *
        -
            generatedContent-1.source

            generatedContent-2.source
        -
            Description
                These two constants are to be set to the id of the pages / folders in the TYPO3 page where your generated content will reside.

                These constants set the id of the pages / folders from which content is pulled for the generated content blocks (generatedContent-1 & generatedContent-2). Note that these constants can be reset at different points in the page tree. This, for instance, allows you to pull one set of content for a products section and another set for the rest of the site.

            Full TypoScript path
                plugin.tx_templavoilaframework.generatedContent-1.source

                plugin.tx_templavoilaframework.generatedContent-2.source

            Default
                Null

    *
        -
            generatedContentRenderMode

        -
            Description
                This constant is normally set to "0" which indicates the generated content is records coming from a folder in the page tree. When set to "1" the generated content is on a TemplaVoila page. This can be helpful when you want to have generated content in the Framework's column groups and rendered as such. In order to set to "1" you must have the wec_contentelements installed. Though this is documented, the "1" is no officially supported. We use it often at Busy Noggin, but may someday approach it a different way.

            Full TypoScript path
                plugin.tx_templavoilaframework.generatedContentRenderMode

            Default
                0

    *
        -
           enableJQuery
        -
            Description
                This includes jQuery and the Framework's core.js for equal height modules. jQuery is inserted using the TYPO3 page renderer. jQuery is no longer set to noConflict by default.

            Full TypoScript path
                plugin.tx_templavoilaframework.enableJQuery

            Default
                1

    *
        -
            moduleTitleTag
        -
            Description
                This sets the HTML tag to be used for wrapping the module titles. Values could be h1, h2, h3, h4, h5, div, p or really any HTML tag (but don't go crazy)

            Full TypoScript path
                plugin.tx_templavoilaframework.moduleTitleTag

            Default
                h3

    *
        -
            defaultHeaderInsideModule
        -

            Description
                This constant allows the developer to specify what should be the normal header level of content elements within a framed module. Its value can be numbers 1 through 5. A value of 3 would mean that a "normal" header inside your module would be an h3. If no value is specified it will use the normal header specified for the entire site.
            Full TypoScript path
                plugin.tx_templavoilaframework.defaultHeaderInsideModule
            Default
                The normal header specified for the entire site.


    *
        -
            skinCSS
        -
            Description
                This sets path to the CSS for the skin. You should normally not need to touch this.
            Full TypoScript path
                plugin.tx_templavoilaframework.skinCSS

            **Default**
            {$plugin.tx_templavoilaframework.skinPath}Resources/Public/StyleSheets/Screen.css

    *
        -
            moduleHeaderWrap
        -
            Description
                This sets up the wrap for the module headers. You should only touch this if you must and also know what you are doing.

            Full TypoScript path
                plugin.tx_templavoilaframework.moduleHeaderWrap

            **Default**
            <{$plugin.tx_templavoilaframework.moduleTitleTag} class="header"><span>|</span></{$plugin.tx_templavoilaframework.moduleTitleTag}>

    *
        -
            moduleFooter

        -
            Description
                This sets up the wrap for the module footers. You should only touch this if you must and also know what you are doing.
            Full TypoScript path
                plugin.tx_templavoilaframework.moduleFooter

            **Default**
            <div class="footer"><span>&nbsp;</span></div>

    *
        -
            columnBottomMargin
        -
            Description
                This is for the margin in pixels you want to have below your column groups
            Full TypoScript path
                plugin.tx_templavoilaframework.columnBottomMargin

            Default
                15

    *
        -
            moduleBottomMargin
        -
            Description
                This is for the margin in pixels you want to have below your module groups
            Full TypoScript path
                    plugin.tx_templavoilaframework.moduleBottomMargin

            Default
                15

    *
        -
            createColumnModuleCSS
        -
            Description
                This tells the Framework whether to generate the CSS for your columns and modules. You really should never touch this. Most changes you might want to make can usually be done by putting additional CSS in your skin. If you unset this, you are responsible for figuring out all the math for your column and module distributions. Again, touching this constant is not for mere mortals.
            Full TypoScript path
                plugin.tx_templavoilaframework.createColumnModuleCSS

            Default
                1

    *
        -
            minFullImageWidth

        -

            Description
                This essentially makes the TYPO3 core maxImageWidth go below your setting. Meaning if you set to 320 images governed by maxImageWidth will be smaller than 320 pixels wide. This setting was included to help with certain responsive design settings. For Busy Noggin, is has proved to be an unnecessary setting due our work with the adaptive profiles extension. We recommend you do not touch it.

            Full TypoScript path
                plugin.tx_templavoilaframework.minFullImageWidth

            Default
                0

    *
        -
            autoMainHeadlineDefault
        -
            Description
                The Framework can automatically generate an H1 headline from the page title and place it at the beginning of the main content block (contentBlock-1). Set this constant to "1" to have the headline generated by default or set it to "0" to not have it generated. In either case the default can be overridden on a page by page basis via a drop down menu in the page properties.
            Full TypoScript path
                plugin.tx_templavoilaframework.autoMainHeadlineDefault

            Default
                1

    *
        -
            autoHeadlineBeginWrap
        -
            Description
                This will be the code in front of the text for the auto headline when it is generated. Match it to autoHeadlineEndWrap.
            Full TypoScript path
                plugin.tx_templavoilaframework.autoHeadlineBeginWrap

            Default
                <h1 class="main-headline">

    *
        -
            autoHeadlineEndWrap
        -
            Description
                This will be the code after the text for the auto headline when it is generated. Match it to autoHeadlineBeginWrap.
            Full TypoScript path
                plugin.tx_templavoilaframework.autoHeadlineEndWrap

            Default
                </h1>

    *
        -
            featureBleedDefault
        -
            Description
                Set this constant to "1" if you want feature content to bleed by default or set it to "0" if you want it not to bleed by default. In either case the default can be overridden on a page by page basis via a drop down menu in the page properties.

            Full TypoScript path
                plugin.tx_templavoilaframework.featureBleedDefault

            Default
                0

    *
        -
            featureLeftPadding

            featureRightPadding
        -
            Description
                These values are needed so the framework can adjust the max image widths for the feature area. When calculating the values add the CSS padding and border values together for your no-bleed feature.

                As an example, if your CSS is 20px of padding on the right with no border then you give featureRightPadding a value of 20. However, if your CSS is 20px of padding on the right and a 4px right border then you would give featureRightPadding a value of 24.
            Full TypoScript paths
                plugin.tx_templavoilaframework.featureLeftPadding
                plugin.tx_templavoilaframework.featureRightPadding

            Default
                20

    *
        -
            Global gutter
        -
            Description
                This is the value that specifies how many pixels you want between modules or between columns.
            Full TypoScript paths
                plugin.tx_templavoilaframework.globalGutter

            Default
                20

    *
        -
            columnRuleDefault
        -
            Description
                This setting deteremines if you columns groups get the CSS class "rule" by default. You are

                Set this value to "1" if you want your column groups to have a CSS class of "rule" by default or set it to "0" if you do not want the class added by default. This default can be overridden on an individual column group basis. The CSS class is normally used to add a bottom border on the bottom of the column group. You are responsible for writing the CSS for the rule. We recommend you use ".column-group.rule" as your declaration to properly target.

            Full TypoScript paths
                plugin.tx_templavoilaframework.columnRuleDefault

            Default
                0

    *
        -
            moduleBodyTopBuffer

            moduleBodyBottomBuffer

            moduleBodyLeftBuffer

            moduleBodyRightBuffer
        -
            Description
                These are the padding values around the body of the module. These are needed to recalculate the max image widths when the modules are set to bleed or the module feature image FCE is used. You are responsible for writing the CSS for the padding.
            Full TypoScript paths
                plugin.tx_templavoilaframework.moduleBodyTopBuffer
                plugin.tx_templavoilaframework.moduleBodyBottomBuffer
                plugin.tx_templavoilaframework.moduleBodyLeftBuffer
                plugin.tx_templavoilaframework.moduleBodyRightBuffer

            Default
                10

    *
        -
            moduleBodyBorderWidth
        -
            Description
                This needs to be the width of any border you put on the div with a class of body within a module. It is needed to recalculate the max image widths when the modules are set to bleed or the module feature image FCE is used. You are responsible for writing the CSS for the border.

            Full TypoScript paths
                plugin.tx_templavoilaframework.moduleBodyBorderWidth

            Default
                10

    *
        -
            showModuleTitleDefault
        -
            Description
                Set this to "1" if you want the module title to render on the front end by default. Set it to "0" if you want the module title to not be rendered by default. This setting can be overridden on a module by module basis
            Full TypoScript paths
                plugin.tx_templavoilaframework.showModuleTitleDefault

            Default
                1

    *
        -
            Module footer height
        -
            Description
                Give the total height for the footers on your modules in pixels. This is needed for calculating the module heights and evening out those heights. Include any top/bottom border or padding in this number. Enter "0" if you do not want a footer on your modules.
            Full TypoScript paths
                plugin.tx_templavoilaframework.moduleFooterTotalHeight

            Default
                20

    *

        -
            Tag for content blocks
        -
            Description
                This allows you to set the HTML tag for the various content blocks in the Framework. It is a very helpful feature for semantic HTML5 markup.
                Examples:
                This sets the tag for contentBlock-1 to a div for all templates
                plugin.tx_templavoilaframework.baseDefaults.settings.contentBlock-1.tag = div
                This overrides the previous example setting for the F1a template and makes the tag for contentBlock-1 a section for F1a.
                plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.tag = section
            Full TypoScript paths
                plugin.tx_templavoilaframework.baseDefaults.settings.[contentBlockKey].tag
                plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].tag

            Default
                div

    *
        -
            id for content blocks
        -
            Description
                This allows you to set the ids for the various content blocks in the Framework. You generally will not touch this unless you must for some CSS framework like YAML
                It can be set for all templates and all content blocks (feature, contentBlock-1, contentBlock-2, contentBlock-3, generatedContent-1, generatedContent-1)
                Examples:
                This sets the id for contentBlock-1 to content-block-1 for all templates
                plugin.tx_templavoilaframework.baseDefaults.settings.contentBlock-1.id = content-block-1
                This overrides the previous example setting for the F1a template and makes the id for contentBlock-1 "my-css-id" for F1a.
                plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.id = my-css-id
            Full TypoScript paths
                plugin.tx_templavoilaframework.baseDefaults.settings.[contentBlockKey].id
                plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].id

            Default
                varies according to the content block

    *
        -
            width for content blocks
        -
            Description
                This is a very important set of constants that will be the most common you will adjust. They are the width in pixels of each content block. All the image sizing and calculations for columns and modules depend upon these values.

                They can be set for all templates and all content blocks (feature, contentBlock-1, contentBlock-2, contentBlock-3, generatedContent-1, generatedContent-1)

            **Example:** ::

                This sets the width for contentBlock-1 to 640 pixels for all templates
                plugin.tx_templavoilaframework {
                    baseDefaults.settings.contentBlock-1.width = 640
                }
                This overrides the previous example setting for the F1a template and makes the width for contentBlock-1 960 pixels for F1a.
                plugin.tx_templavoilaframework {
                    f1a.settings.contentBlock-1.width = 960
                }

                Another example:
                plugin.tx_templavoilaframework {
                    f1a {
                        settings {
                            feature =980
                            contentBlock-1 = 980
                        }
                    }
                    f1d {
                        settings {
                            feature = 980
                            contentBlock-1 = 700
                            generatedContent-1 = 260
                        }
                    }
                }

                would mean that:

                - the feature area in both template F1a & F1d is 980 pixels wide
                - contentBlock-1 is 980 pixels wide in template F1a but 700 pixels wide in F1d
                - generatedContent-1 is 260 pixels wide in template F1d

            Full TypoScript paths
                plugin.tx_templavoilaframework.baseDefaults.settings.[contentBlockKey].width
                plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].width

            Default
                960

    *

        -
            class for content blocks
        -


            Description
                This allows you to set the class for the various content blocks in the Framework. You generally will not touch this unless you must for some CSS framework like 960gs, Blueprint or YAML
                It can be set for all templates and all content blocks (feature, contentBlock-1, contentBlock-2, contentBlock-3, generatedContent-1, generatedContent-1)
                Examples:
                This sets a class of "my-class" to content-block-1 for all templates
                plugin.tx_templavoilaframework.baseDefaults.settings.contentBlock-1.id = my-class
                This overrides the previous example setting for the F1a template and makes the class for contentBlock-1 "my-new-class my-third-class" for F1a.
                plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.id = my-new-class my-third-class
            Full TypoScript paths
                plugin.tx_templavoilaframework.baseDefaults.settings.[contentBlockKey].class
                plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].class

            Default
                This property is blank by default

    *
        -
            minFullImageWidth
        -
            Description
                This is the minFullImageWidth in pixels of the content block. This is one you will normally not touch
                It can be set for all templates and all content blocks (feature, contentBlock-1, contentBlock-2, contentBlock-3, generatedContent-1, generatedContent-1)
                Examples:
                This sets the minFullImageWidth for contentBlock-1 to 320 pixels for template F1a
                plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.minFullImageWidth = 320
            Full TypoScript paths
                plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].minFullImageWidth

            Default
                {$plugin.tx_templavoilaframework.minFullImageWidth} which is set to "0" by default


    *
        -
            Begin wrap for content blocks
        -
            Description
                This is the markup at the front of a content block. It would be surprising if you ever need to adjust this. If so, think again. Odds are 4 to 1 you will screw it up.
                Example:
                plugin.tx_templavoilaframework.f1a.wraps.contentBlock-1.beginWrap = <{register:f1acontentBlock-1tag} {register:f1acontentBlock-1id} {register:f1acontentBlock-1class}><!--TYPO3SEARCH_begin-->
            Full TypoScript paths
                plugin.tx_templavoilaframework.[templateKey].wraps.[contentBlockKey].beginWrap

            Default
                Varies according to content block

    *
        -
            Begin wrap for content blocks
        -
            Description
                This is the markup at the front of a content block. It would be surprising if you ever need to adjust this. If so, think again. Odds are 4 to 1 you will screw it up.
                Example:
                plugin.tx_templavoilaframework.f1a.wraps.contentBlock-1.endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1acontentBlock-1tag}>
            Full TypoScript paths
                plugin.tx_templavoilaframework.[templateKey].wraps.[contentBlockKey].beginWrap

            Default
                Varies according to content block

// @todo-ron need to finish








