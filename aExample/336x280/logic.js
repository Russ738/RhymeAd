
var Rhyme = window.Rhyme || {};
(function ($) {

	/*********************
	 * Private
	 *********************/
	var _initialized            = false,
		_dom                    = {}
	;

	/**
	 * Set DOM elements
	 * @private
	 */
	function _setDomElements() {

		_dom.logo               = document.getElementById('logo');
		_dom.headline1          = document.getElementById('headline1');
		_dom.headline2          = document.getElementById('headline2');
		_dom.heroSmoke          = document.getElementById('heroSmoke');
		_dom.heroMirrors        = document.getElementById('heroMirrors');
		_dom.heroHatBlock       = document.getElementById('heroHatBlock');
		_dom.heroHat            = document.getElementById('heroHat');
		_dom.heroPug            = document.getElementById('heroPug');
		_dom.heroPugTongue      = document.getElementById('heroPugTongue');
		_dom.cta1               = document.getElementById('cta1');
		_dom.ctaButton1         = document.getElementById('ctaButton1');
	}

	/**
	 * Set up the timeline
	 * @private
	 */
	function _setTimeline() {

		var tl = new TimelineMax();
		tl.addLabel('start')

		// -------------------------------------------SLIDE 1
			.addLabel('slide1Started')
			.to(_dom.heroSmoke, 1, {className:"+=show", ease: Power2.easeOut}, 'slide1Started+=0')
			.to(_dom.heroMirrors, 1, {className:"+=show", ease: Power2.easeOut}, 'slide1Started+=0')

			.to(_dom.headline1, 0.5, {opacity: 1, ease: Power0.easeNone}, 'slide1Started+=1')

			.to(_dom.headline1, 0.5, {opacity: 0, ease: Power0.easeNone}, 'slide1Started+=5')
			.to(_dom.headline2, 0.5, {opacity: 1, ease: Power0.easeNone}, 'slide1Started+=5')
			.to(_dom.heroSmoke, 1, {className:"-=show", ease: Power2.easeOut}, 'slide1Started+=5')
			.to(_dom.heroMirrors, 1, {className:"-=show", ease: Power2.easeOut}, 'slide1Started+=5')
			.to(_dom.heroHatBlock, 1, {className:"+=show", ease: Power2.easeOut}, 'slide1Started+=5')

			.to(_dom.heroPug, 1, {className:"+=show", ease: Power2.easeOut}, 'slide1Started+=6')
			.to(_dom.heroSmoke, 1, {className:"+=stopAnimation", ease: Power2.easeOut}, 'slide1Started+=6')

			.to(_dom.heroPugTongue, 1, {className:"+=show", ease: Power2.easeOut}, 'slide1Started+=7')

			.to(_dom.cta1, 1, {className:"+=show", ease: Power2.easeOut}, 'slide1Started+=8')
			.to(_dom.ctaButton1, 0.5, {scale:"1.1", ease: Power2.easeOut}, 'slide1Started+=9')
			.to(_dom.ctaButton1, 0.5, {scale:"1", ease: Power2.easeOut}, 'slide1Started+=9.5')
			.to(_dom.ctaButton1, 0.5, {scale:"1.1", ease: Power2.easeOut}, 'slide1Started+=10')
			.to(_dom.ctaButton1, 0.5, {scale:"1", ease: Power2.easeOut}, 'slide1Started+=10.5')

		;
	}


	/*********************
	 * Public
	 *********************/
	Rhyme.Ad = {

		/*********************
		 * Init
		 *********************/
		init: function() {

			// Only do this once
			if (_initialized) {
				return;
			}

			_setDomElements();
			_setTimeline();

			// Only do this once
			_initialized = true;
		}
	};

}(jQuery));