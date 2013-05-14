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
    :widths: 20 60 20
    :header-rows: 1

    *
        - property
        - description
        - default

    *
        -
            Generated Content Source
        -
            Description
                These two constants are to be set to the id of the pages / folders in the TYPO3 page where your generated content will reside.

                These constants set the id of the pages / folders from which content is pulled for the generated content blocks (generatedContent-1 & generatedContent-2). Note that these constants can be reset at different points in the page tree. This, for instance, allows you to pull one set of content for a products section and another set for the rest of the site.

            Full TypoScript path
                plugin.tx_templavoilaframework.generatedContent-1.source

                plugin.tx_templavoilaframework.generatedContent-2.source

        -
            Null

    *
        -
            generatedContentRenderMode

        -
            Description
                This constant is normally set to "0" which indicates the generated content is records coming from a folder in the page tree. When set to "1" the generated content is on a TemplaVoila page. This can be helpful when you want to have generated content in the Framework's column groups and rendered as such. In order to set to "1" you must have the wec_contentelements installed. Though this is documented, the "1" is no officially supported. We use it often at Busy Noggin, but may someday approach it a different way.

            Full TypoScript path
                plugin.tx_templavoilaframework.generatedContentRenderMode

        -
            0

    *
        -
           enableJQuery
        -
            Description
                This includes jQuery and the Framework's core.js for equal height modules. jQuery is inserted using the TYPO3 page renderer. jQuery is no longer set to noConflict by default.

            Full TypoScript path
                plugin.tx_templavoilaframework.enableJQuery
        -
           1

    *
        -
            moduleTitleTag
        -
            Description
                This sets the HTML tag to be used for wrapping the module titles. Values could be h1, h2, h3, h4, h5, div, p or really any HTML tag (but don't go crazy)

            Full TypoScript path
                plugin.tx_templavoilaframework.moduleTitleTag
        -
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
        -


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
        -

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
        -


.. container:: table-row

    Property
        Module footer wrap

    Full TypoScript path
        plugin.tx_templavoilaframework.moduleFooter

    Description
        This sets up the wrap for the module footers. You should only touch this if you must and also know what you are doing.

    Default
        <div class="footer"><span>&nbsp;</span></div>

.. container:: table-row

    Property
        Bottom Margin for Columns

    Full TypoScript path
        plugin.tx_templavoilaframework.columnBottomMargin

    Description
        This is for the margin in pixels you want to have below your column groups

    Default
        15

.. container:: table-row

    Property
        Bottom Margin for Modules

    Full TypoScript path
        plugin.tx_templavoilaframework.moduleBottomMargin

    Description
        This is for the margin in pixels you want to have below your module groups

    Default
        15

.. container:: table-row

    Property
        Create CSS for Columns and Modules

    Full TypoScript path
        plugin.tx_templavoilaframework.createColumnModuleCSS

    Description
        This tells the Framework whether to generate the CSS for your columns and modules. You really should never touch this. Most changes you might want to make can usually be done by putting additional CSS in your skin. If you unset this, you are responsible for figuring out all the math for your column and module distributions. Again, touching this constant is not for mere mortals.

    Default
        1

.. container:: table-row

    Property
        Minium Full Image Width

    Full TypoScript path
        plugin.tx_templavoilaframework.minFullImageWidth

    Description
        This essentially makes the TYPO3 core maxImageWidth go below your setting. Meaning if you set to 320 images governed by maxImageWidth will be smaller than 320 pixels wide. This setting was included to help with certain responsive design settings. For Busy Noggin, is has proved to be an unnecessary setting due our work with the adaptive profiles extension. We recommend you do not touch it.

    Default
        0

.. container:: table-row

    Property
        Auto Main Headline Default

    Full TypoScript path
        plugin.tx_templavoilaframework.autoMainHeadlineDefault

    Description
        The Framework can automatically generate an H1 headline from the page title and place it at the beginning of the main content block (contentBlock-1). Set this constant to "1" to have the headline generated by default or set it to "0" to not have it generated. In either case the default can be overridden on a page by page basis via a drop down menu in the page properties.

    Default
        1

.. container:: table-row

    Property
        Auto Main Headline beginning wrap

    Full TypoScript path
        plugin.tx_templavoilaframework.autoHeadlineBeginWrap

    Description
        This will be the code in front of the text for the auto headline when it is generated. Match it to autoHeadlineEndWrap.

    Default
        <h1 class="main-headline">

.. container:: table-row

    Property
        Auto Main Headline ending wrap

    Full TypoScript path
        plugin.tx_templavoilaframework.autoHeadlineEndWrap

    Description
        This will be the code after the text for the auto headline when it is generated. Match it to autoHeadlineBeginWrap.

    Default
        </h1>

.. container:: table-row

    Property
        Feature bleed default

    Full TypoScript path
        plugin.tx_templavoilaframework.featureBleedDefault

    Description
        Set this constant to "1" if you want feature content to bleed by default or set it to "0" if you want it not to bleed by default. In either case the default can be overridden on a page by page basis via a drop down menu in the page properties.

    Default
        0

.. container:: table-row

    Property
        Feature left and right padding

    Full TypoScript paths
        plugin.tx_templavoilaframework.featureLeftPadding
        plugin.tx_templavoilaframework.featureRightPadding

    Description
        These values are needed so the framework can adjust the max image widths for the feature area. When calculating the values add the CSS padding and border values together for your no-bleed feature.

        As an example, if your CSS is 20px of padding on the right with no border then you give featureRightPadding a value of 20. However, if your CSS is 20px of padding on the right and a 4px right border then you would give featureRightPadding a value of 24.

    Default
        20

.. container:: table-row

    Property
        Global gutter

    Full TypoScript paths
        plugin.tx_templavoilaframework.globalGutter

    Description
        This is the value that specifies how many pixels you want between modules or between columns.

    Default
        20

.. container:: table-row

    Property
        Column group rule default

    Full TypoScript paths
        plugin.tx_templavoilaframework.columnRuleDefault

    Description
        This setting deteremines if you columns groups get the CSS class "rule" by default. You are

        Set this value to "1" if you want your column groups to have a CSS class of "rule" by default or set it to "0" if you do not want the class added by default. This default can be overridden on an individual column group basis. The CSS class is normally used to add a bottom border on the bottom of the column group. You are responsible for writing the CSS for the rule. We recommend you use ".column-group.rule" as your declaration to properly target.

    Default
        0

.. container:: table-row

    Property
        Module Body Buffers

    Full TypoScript paths
        plugin.tx_templavoilaframework.moduleBodyTopBuffer
        plugin.tx_templavoilaframework.moduleBodyBottomBuffer
        plugin.tx_templavoilaframework.moduleBodyLeftBuffer
        plugin.tx_templavoilaframework.moduleBodyRightBuffer

    Description
        These are the padding values around the body of the module. These are needed to recalculate the max image widths when the modules are set to bleed or the module feature image FCE is used. You are responsible for writing the CSS for the padding.

    Default
        10

.. container:: table-row

    Property
        Module Body Border Width

    Full TypoScript paths
        plugin.tx_templavoilaframework.moduleBodyBorderWidth

    Description
        This needs to be the width of any border you put on the div with a class of body within a module. It is needed to recalculate the max image widths when the modules are set to bleed or the module feature image FCE is used. You are responsible for writing the CSS for the border.

    Default
        10

.. container:: table-row

    Property
        Show module titles by default

    Full TypoScript paths
        plugin.tx_templavoilaframework.showModuleTitleDefault

    Description
        Set this to "1" if you want the module title to render on the front end by default. Set it to "0" if you want the module title to not be rendered by default. This setting can be overridden on a module by module basis

    Default
        1

.. container:: table-row

    Property
        Module footer height

    Full TypoScript paths
        plugin.tx_templavoilaframework.moduleFooterTotalHeight

    Description
        Give the total height for the footers on your modules in pixels. This is needed for calculating the module heights and evening out those heights. Include any top/bottom border or padding in this number. Enter "0" if you do not want a footer on your modules.

    Default
        20

.. container:: table-row

    Property
        Tag for content blocks

    Full TypoScript paths
        plugin.tx_templavoilaframework.baseDefaults.settings.[contentBlockKey].tag
        plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].tag

    Description
        This allows you to set the HTML tag for the various content blocks in the Framework. It is a very helpful feature for semantic HTML5 markup.
        Examples:
        This sets the tag for contentBlock-1 to a div for all templates
        plugin.tx_templavoilaframework.baseDefaults.settings.contentBlock-1.tag = div
        This overrides the previous example setting for the F1a template and makes the tag for contentBlock-1 a section for F1a.
        plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.tag = section

    Default
        div

.. container:: table-row

    Property
        id for content blocks

    Full TypoScript paths
        plugin.tx_templavoilaframework.baseDefaults.settings.[contentBlockKey].id
        plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].id

    Description
        This allows you to set the ids for the various content blocks in the Framework. You generally will not touch this unless you must for some CSS framework like YAML
        It can be set for all templates and all content blocks (feature, contentBlock-1, contentBlock-2, contentBlock-3, generatedContent-1, generatedContent-1)
        Examples:
        This sets the id for contentBlock-1 to content-block-1 for all templates
        plugin.tx_templavoilaframework.baseDefaults.settings.contentBlock-1.id = content-block-1
        This overrides the previous example setting for the F1a template and makes the id for contentBlock-1 "my-css-id" for F1a.
        plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.id = my-css-id

    Default
        varies according to the content block

.. container:: table-row

    Property
        width for content blocks

    Full TypoScript paths
        plugin.tx_templavoilaframework.baseDefaults.settings.[contentBlockKey].width
        plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].width

    Description
        This is a very important set of constants that will be the most common you will adjust. They are the width in pixels of each content block. All the image sizing and calculations for columns and modules depend upon these values.

        They can be set for all templates and all content blocks (feature, contentBlock-1, contentBlock-2, contentBlock-3, generatedContent-1, generatedContent-1)

        **Example:** ::

            This sets the width for contentBlock-1 to 640 pixels for all templates
            plugin.tx_templavoilaframework.baseDefaults.settings.contentBlock-1.width = 640
            This overrides the previous example setting for the F1a template and makes the width for contentBlock-1 960 pixels for F1a.
            plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.width = 960

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

    Default
        960

.. container:: table-row

    Property
        class for content blocks

    Full TypoScript paths
        plugin.tx_templavoilaframework.baseDefaults.settings.[contentBlockKey].class
        plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].class

    Description
        This allows you to set the class for the various content blocks in the Framework. You generally will not touch this unless you must for some CSS framework like 960gs, Blueprint or YAML
        It can be set for all templates and all content blocks (feature, contentBlock-1, contentBlock-2, contentBlock-3, generatedContent-1, generatedContent-1)
        Examples:
        This sets a class of "my-class" to content-block-1 for all templates
        plugin.tx_templavoilaframework.baseDefaults.settings.contentBlock-1.id = my-class
        This overrides the previous example setting for the F1a template and makes the class for contentBlock-1 "my-new-class my-third-class" for F1a.
        plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.id = my-new-class my-third-class

    Default
        This property is blank by default

.. container:: table-row

    Property
        minFullImageWidth

    Full TypoScript paths
        plugin.tx_templavoilaframework.[templateKey].settings.[contentBlockKey].minFullImageWidth

    Description
        This is the minFullImageWidth in pixels of the content block. This is one you will normally not touch
        It can be set for all templates and all content blocks (feature, contentBlock-1, contentBlock-2, contentBlock-3, generatedContent-1, generatedContent-1)
        Examples:
        This sets the minFullImageWidth for contentBlock-1 to 320 pixels for template F1a
        plugin.tx_templavoilaframework.f1a.settings.contentBlock-1.minFullImageWidth = 320

    Default
        {$plugin.tx_templavoilaframework.minFullImageWidth} which is set to "0" by default


.. container:: table-row

    Property
        Begin wrap for content blocks

    Full TypoScript paths
        plugin.tx_templavoilaframework.[templateKey].wraps.[contentBlockKey].beginWrap

    Description
        This is the markup at the front of a content block. It would be surprising if you ever need to adjust this. If so, think again. Odds are 4 to 1 you will screw it up.
        Example:
        plugin.tx_templavoilaframework.f1a.wraps.contentBlock-1.beginWrap = <{register:f1acontentBlock-1tag} {register:f1acontentBlock-1id} {register:f1acontentBlock-1class}><!--TYPO3SEARCH_begin-->

    Default
        Varies according to content block

.. container:: table-row

    Property
        Begin wrap for content blocks

    Full TypoScript paths
        plugin.tx_templavoilaframework.[templateKey].wraps.[contentBlockKey].beginWrap

    Description
        This is the markup at the front of a content block. It would be surprising if you ever need to adjust this. If so, think again. Odds are 4 to 1 you will screw it up.
        Example:
        plugin.tx_templavoilaframework.f1a.wraps.contentBlock-1.endWrap = <!--TYPO3SEARCH_end--><div class="clear-only">&nbsp;</div></{register:f1acontentBlock-1tag}>

    Default
        Varies according to content block










