..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt


================================
TypoScript
================================

The skin's TypoScript is an important component to adapting the skin to produce adequate HTML to replicate the visual design. Following is a list of the objects you might find in a skin. Not all objects are used in all skins.

You should write these objects in:
YourSkinDirectory/Configuration/TypoScript/TypoScript.ts

It is also possible to override these objects in particular sections of the page tree by rewriting them in a TyposScript template on a page, but you will not do that often.

Header & Footer Objects
================================

.. list-table::
    :widths: 20 60
    :header-rows: 1

    * - object
      - details

    * -
        header
      -
        Description
            This is the object that produces the header for the for the page. Headers can be changed for different templates by using the templateKey to target particular templates.

        **Example:**
            In this example all templates would have a header of <h1>My Header</h1> except the F1a template which would be <h1>My F1a Header</h1>

        ::

            plugin.tx_templavoilaframework {
                header = TEXT
                header {
                    value = My Header
                    wrap = <h1>|</h1>
                }

                f1a.header = TEXT
                f1a.header {
                    value = My F1a Header
                    wrap = <h1>|</h1>
                }
            }

        Full TypoScript paths
            plugin.tx_templavoilaframework.header

            plugin.tx_templavoilaframework.[templateKey].header

    * -
        footer
      -
        Description
            This is the object that produces the footer for the for the page. Footers can be changed for different templates by using the templateKey to target particular templates.

        **Example:**
            In this example all templates would have a header of <h1>My Footer</h1> except the F1a template which would be <h1>My F1a Footer</h1>

        ::


            plugin.tx_templavoilaframework {
                footer = TEXT
                footer {
                    value = My Footer
                    wrap = <h1>|</h1>
                }

                f1a.footer = TEXT
                f1a.footer {
                    value = My F1a Footer
                    wrap = <h1>|</h1>
                }
            }

        Full TypoScript paths
            plugin.tx_templavoilaframework.footer

            plugin.tx_templavoilaframework.[templateKey].footer

Pre Code and Post Code Objects
================================

These objects are used to interject code between various content areas in the page template. They are why you can adapt the framework to so many different designs without remapping page templates.

These can be used to interject wrapping divs, breadcrumb menus, etc. anywhere in the page templates.

.. list-table::
    :widths: 20 60
    :header-rows: 1

    * - object
      - details

    * -
        preCodeHeader

        postCodeHeader
      -
        Description
            These objects come before and after the header object. These objects can be changed for differnt templates by using the templateKey to target that template.

        **Example:**
            In this example all templates would have a div around the with a class of "header-wrap" except the F1a template which would have a class of "f1a-header-wrap." However, in real world use, this particular example would have
            just been written in the header.

        ::

            plugin.tx_templavoilaframework {
                preCodeHeader = TEXT
                preCodeHeader.value = <div class="header-wrap">
                postCodeHeader = TEXT
                postCodeHeader.value = </div>

                f1a.preCodeHeader = TEXT
                f1a.preCodeHeader.value = <div class="f1a-header-wrap">
                f1a.postCodeHeader = TEXT
                f1a.postCodeHeader.value = </div>
            }

        Full TypoScript paths
            plugin.tx_templavoilaframework.preCodeHeader

            plugin.tx_templavoilaframework.[templateKey].preCodeHeader

            plugin.tx_templavoilaframework.postCodeHeader

            plugin.tx_templavoilaframework.[templateKey].postCodeHeader

    * -
        preCodeFeature

        postCodeFeature
      -
        Description
            These objects come before and after the feature object. These objects can be changed for differnt templates by using the templateKey to target that template.

            These objects are only generated if the feature is generated. Meaning that if there is not content in the feature then neither the feature, preCodeFeature or postCodeFeature are generated

        **Example:**
            In this example all templates would have a div around the with a class of "feature-wrap" except the F1a template which would have a class of "f1a-feature-wrap"
        ::

            plugin.tx_templavoilaframework {
                preCodeFeature = TEXT
                preCodeFeature.value = <div class="feature-wrap">
                postCodeFeature = TEXT
                postCodeFeature.value = </div>

                f1a.preCodeFeature = TEXT
                f1a.preCodeFeature.value = <div class="f1a-feature-wrap">
                f1a.postCodeFeature = TEXT
                f1a.postCodeFeature.value = </div>
            }

        Full TypoScript paths
            plugin.tx_templavoilaframework.preCodeFeature

            plugin.tx_templavoilaframework.[templateKey].preCodeFeature

            plugin.tx_templavoilaframework.postCodeFeature

            plugin.tx_templavoilaframework.[templateKey].postCodeFeature

    * -
        preCodeContent

      -
        Description
            This object comes after the postCodeFeature when feature content is present and after the postCodeHeader with feature content is not present. The object can be changed for different templates by using the templateKey to target that template.

            **Note:**

            This preCode object is different than the others as it does not have a postCode mate. So if you use this object to open a div to wrap your content you will need to close that div in a different object like plugin.tx_templavoilaframework.preCodeFooter

        **Example:**
            In this example all templates would have a div around the with a class of "content-wrap" except the F1a template which would have a class of "content-wrap grid_6"

        ::

            plugin.tx_templavoilaframework {
                preCodeContent = TEXT
                preCodeContent.value = <div class="content-wrap grid_6">

                f1a.preCodeContent = TEXT
                f1a.preCodeContent.value = <div class="content-wrap grid_6">
            }

        Full TypoScript paths
            plugin.tx_templavoilaframework.preCodeContent

            plugin.tx_templavoilaframework.[templateKey].preCodeContent


    * -
        preCodeContentBlock-1

        postCodeContentBlock-1

      -
        Description
            These objects come before and after contentBlock-1. The objects can be changed for different templates by using the templateKey to target that template.

        **Example:**
            In this example all templates would have a div around the with a class of "content-block-1-wrap" and a breadcrumb menu
            except the F1a template which would not have the breadcrumb menu
        ::

            plugin.tx_templavoilaframework {
                preCodeContentBlock-1 = COA
                preCodeContentBlock-1 {
                    10 = TEXT
                    10.value = <div class="content-block-1-wrap">
                    20 = HMENU
                    20 {
                        I will write breadcrumbs here
                    }
                }
                postCodeContentBlock-1 = TEXT
                postCodeContentBlock-1.value = </div><!-- end #content-block-1-wrap -->

                f1a.preCodeContent.20 >
            }

        Full TypoScript paths
            plugin.tx_templavoilaframework.preCodeContentBlock-1
            plugin.tx_templavoilaframework.[templateKey].preCodeContentBlock-1
            plugin.tx_templavoilaframework.postCodeContentBlock-1
            plugin.tx_templavoilaframework.[templateKey].postCodeContentBlock-1

    * -
        preCodeContentBlock-2

        postCodeContentBlock-2

      -
        Description
            These objects come before and after contentBlock-2. The objects can be changed for different templates by using the templateKey to target that template.

        Examples:
            They work the same as preCodeContentBlock-1 and postCodeContentBlock-1 so refer to those for examples

        Full TypoScript paths
            plugin.tx_templavoilaframework.preCodeContentBlock-2
            plugin.tx_templavoilaframework.[templateKey].preCodeContentBlock-2
            plugin.tx_templavoilaframework.postCodeContentBlock-2
            plugin.tx_templavoilaframework.[templateKey].postCodeContentBlock-2


    * -
        preCodeContentBlock-3

        postCodeContentBlock-3

      -
        Description
            These objects come before and after contentBlock-3. The objects can be changed for different templates by using the templateKey to target that template.

        Examples:
            They work the same as preCodeContentBlock-1 and postCodeContentBlock-1 so refer to those for examples

        Full TypoScript paths
                    plugin.tx_templavoilaframework.preCodeContentBlock-3
                    plugin.tx_templavoilaframework.[templateKey].preCodeContentBlock-3
                    plugin.tx_templavoilaframework.postCodeContentBlock-3
                    plugin.tx_templavoilaframework.[templateKey].postCodeContentBlock-3

    * -
        preCodeGeneratedContent-1

        postCodeGeneratedContent-1

        preCodeGeneratedContent-2

        postCodeGeneratedContent-2

      -
        Description
            These objects come before and after the generated content blocks. The objects can be changed for different templates by using the templateKey to target that template.

        Examples:
            They work the same as preCodeContentBlock-1 and postCodeContentBlock-1 so refer to those for examples

        Full TypoScript paths
            plugin.tx_templavoilaframework.preCodeGeneratedContent-1
            plugin.tx_templavoilaframework.[templateKey].postCodeGeneratedContent-1
            plugin.tx_templavoilaframework.preCodeGeneratedContent-2
            plugin.tx_templavoilaframework.[templateKey].postCodeGeneratedContent-2

// @todo-ron need to finish








