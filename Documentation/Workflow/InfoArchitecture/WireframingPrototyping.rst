..  Editor configuration
    ...................................................
    * utf-8 with BOM as encoding
    * tab indent with 4 characters for code snippet.
    * optional: soft carriage return preferred.


.. include:: /Includes/MainInclude.txt

================================
Wireframing
================================

Creating wireframes can be helpful in the early planning stages and can take the form of quick hand sketches or more polished pieces created with software.

Software you might want to take a look at are:
- Balsamiq Mockups
- OmniGraffle

================================
Prototyping
================================

Having a set of paper wireframes is a good idea and having a workable clickable HTML wireframe prototype is a great idea, but having a working, clickable wireframe driven by TYPO3 is a fantastic idea. Here's why.

- Organizational concepts can be explored and tested just like they will be on the final site. Pages are discovered by clicking on links and menus.
- User experience testing can begin immediately.
- Content and pages can be easily moved around and tested as the information architect experiments with different organizational schemes.
- The client can be trained immediately on content entry and can even enter permanent site content. After all, the pages in the wireframe will be the actual pages in the finished site but simply skinned with the final design.

Just before prototyping, we set up a TYPO3 installation with the TemplaVoila Framework and the Busy Noggin Wireframe skin. With that we have all we need to build a fully-functional prototype.

**Fast tracking workflow**

Although the workflow is presented in sequential steps, it is possible to fast track the process by working some steps concurrently.

Once the infomation archtecture is nailed down and replicated in the working prototype, the following three steps can actually begin at the same time.

- The graphic desiginer can mockup the visual design.
- The programmer can begin installing extensions, setting up users, etc.
- The content editor can begin entering content. Initially the content will be presented in the wireframe but will automatically be reformatted when the final skin is integrated.

================================
Visual Design
================================

Once the information architecture is complete, it is time to work on the visual design. This is simply creating static visual designs of what various pages in a site should look like.

Most designers use Adobe Photoshop, Fireworks or Illustrator for this process. Don't worry about which is better. Use whatever program you know the best.

It is not necessary to work up a visual design on every page. Just do a mockup on each different page layout. Often this is simply a home page and a couple of interior page variations.

**Design considerations for the web**

Any medium has technical issues of which designers must be aware. For print you think about dot gain. For video you have to be aware about screen proportions and safe area. Web is no different. Here is what you need to consider when designing for the web.

- Flexibility, your site will be accessed by a variety of computers, monitors, browsers, smart phones, assistive technologies and connection speeds. Design accordingly. Your designer must understand that no other users will be viewing the site on his eight-core MacPro with dual 30" monitors. And yes, I am jealous.
- Pay particular attention to the width of your design so the smaller monitors can see your site. Generally a page width of 930 to 980 pixels is considered the basic depending on the edge treatment. Of course, with responsive and adaptive design you may have to design different looks for different sizes.
- Watch your fonts. If you plan to use any but the few fonts common across platforms make sure you know how you will handle that in code.
- Design in an RGB color space not CMYK.
- Finally, if your designer has little or no experience designing for the web, get a new designer. If fact, if you needed to be told to design in RGB then please get another designer.

Having said all this, web design is not as limiting as some designers (and coders) would lead you to believe. Those who think so are way behind the times.

// @todo-ron need to finish