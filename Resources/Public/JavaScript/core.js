jQuery(document).ready(function(){
	jQuery('.module-group').each(function(){
		var groupHeight = jQuery('.module-group').height();
		if (jQuery('.module-group').children('.module:not(.unframed)').size() > 1) {
			jQuery('.module-group').children('.module:not(.unframed)').each(function(){

				var moduleHeaderHeight = jQuery(this).children('.header').outerHeight(true);

				var moduleFooterHeight = jQuery(this).children('.footer').outerHeight(true);
				var moduleBodyWrapHeight = groupHeight - moduleHeaderHeight - moduleFooterHeight;
				jQuery(this).children('.body').height(moduleBodyWrapHeight + 'px');
			});
		}
	});
});