document.observe("dom:loaded", function() {
	mousedownStatus = 0;

	function getCookie( name ) {
		var start = document.cookie.indexOf( name + "=" );
		var len = start + name.length + 1;
		if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
			return null;
		}
		if ( start == -1 ) return null;
		var end = document.cookie.indexOf( ';', len );
		if ( end == -1 ) end = document.cookie.length;
		return unescape( document.cookie.substring( len, end ) );
	}

	function setCookie( name, value, expires, path, domain, secure ) {
		var today = new Date();
		today.setTime( today.getTime() );
		if ( expires ) {
			expires = expires * 1000 * 60 * 60 * 24;
		}
		var expires_date = new Date( today.getTime() + (expires) );
		document.cookie = name+'='+escape( value ) +
			( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) +
			( ( path ) ? ';path=' + path : '' ) +
			( ( domain ) ? ';domain=' + domain : '' ) +
			( ( secure ) ? ';secure' : '' );
	}

	function deleteCookie( name, path, domain ) {
		if ( getCookie( name ) ) document.cookie = name + '=' +
				( ( path ) ? ';path=' + path : '') +
				( ( domain ) ? ';domain=' + domain : '' ) +
				';expires=Thu, 01-Jan-1970 00:00:01 GMT';
	}

	function revealContentArea(contentTarget) {
		$$('.tvContentTab').invoke('removeClassName', 'tvfwActiveTab');
		$(contentTarget + 'Tab').addClassName('tvfwActiveTab');
		$$('.tvContent').invoke('hide');
		$$('#' + contentTarget).invoke('show');
		setCookie ("tvActiveTab", contentTarget + 'Tab');
	}

	if (getCookie("tvActiveTab") != null) {
		if (getCookie("tvCurrentPage") != top.fsMod.recentIds["web"]) {
			setCookie ("tvActiveTab","tvMainContentTab");
			setCookie ("tvCurrentPage",top.fsMod.recentIds["web"]);
		}
	}
	else {
		setCookie ("tvActiveTab","tvMainContentTab");
		setCookie ("tvCurrentPage",top.fsMod.recentIds["web"]);
	}

	$(getCookie("tvActiveTab")).addClassName('tvfwActiveTab');
	$$('.tvContent').invoke('hide');
	if (getCookie("tvActiveTab") == "tvFeatureContentTab") {
		$$('#tvFeatureContent').invoke('show');
	}
	else if (getCookie("tvActiveTab") == "tvSecondaryContentTab") {
		$$('#tvSecondaryContent').invoke('show');
	}
	else if (getCookie("tvActiveTab") == "tvAdditionalContentTab") {
		$$('#tvAdditionalContent').invoke('show');
	}
	else {
		$$('#tvMainContent').invoke('show');
	}	

	if ($('tvFeatureContentTab')) {
		$('tvFeatureContentTab').observe('click', function(event) {
			revealContentArea('tvFeatureContent');
		});
	}

	$$('.sortable_handle').invoke('observe', 'mousedown', function(event) {
		mousedownStatus = 1;
	});
	$$('.sortable_handle').invoke('observe', 'mouseup', function(event) {
		mousedownStatus = 0;
	});

	if ($('tvFeatureContentTab')) {
		$('tvFeatureContentTab').observe('mouseover', function(event) {
			if (mousedownStatus == 1) {
				revealContentArea('tvFeatureContent');
			}
			mousedownStatus = 0;
		});
		$('tvFeatureContentTab').observe('click', function(event) {
			revealContentArea('tvFeatureContent');
		});
	}

	if ($('tvMainContentTab')) {
		$('tvMainContentTab').observe('mouseover', function(event) {
			if (mousedownStatus == 1) {
				revealContentArea('tvMainContent');
			}
			mousedownStatus = 0;
		});
		$('tvMainContentTab').observe('click', function(event) {
			revealContentArea('tvMainContent');
		});
	}

	if ($('tvSecondaryContentTab')) {
		$('tvSecondaryContentTab').observe('mouseover', function(event) {
			if (mousedownStatus == 1) {
				revealContentArea('tvSecondaryContent');
			}
			mousedownStatus = 0;
		});
		$('tvSecondaryContentTab').observe('click', function(event) {
			revealContentArea('tvSecondaryContent');
		});
	}

	if ($('tvAdditionalContentTab')) {
		$('tvAdditionalContentTab').observe('mouseover', function(event) {
			if (mousedownStatus == 1) {
				revealContentArea('tvAdditionalContent');
			}
			mousedownStatus = 0;
		});
		$('tvAdditionalContentTab').observe('click', function(event) {
			revealContentArea('tvAdditionalContent');
		});
	}
});