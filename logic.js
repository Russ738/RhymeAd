
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

		_dom.dog                = document.getElementById('dog');
		_dom.logo               = document.getElementById('logo');
		_dom.glass 				= document.getElementById('glass')
		_dom.glasslogo			= document.getElementById('glasslogo')
		_dom.crystalball		= document.getElementById('crystalball')
		_dom.finaltext			= document.getElementById('finaltext')

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
			.set(_dom.crystalball, {scale:5.5})
			.to(_dom.dog, 1, {left:300}, 'slide1Started+=0')
			.to(_dom.glass, 1, {left:300}, 'slide1Started+=0')
			.to(_dom.glass, 1, {className:"", left:70, y:20}, 'slide1Started+=1')
			.to(_dom.logo, 1, {scale:1.7}, 'slide1Started+=2') 
			.to(_dom.logo, 1, {className:'+=hide'},'slide1Started+=4')
			.to(_dom.glass, 1,{ className:'+=hide'},'slide1Started+=4')
			.to(_dom.glasslogo, 0,{ className:'+=show'},'slide1Started+=4')
			.to(_dom.glasslogo, 1,{scale:.1, className:'+=show', left:10, y:-97},'slide1Started+=4')
			.to(_dom.crystalball, 1,{scale:.5, className:'+=show', left:70, y:-85},'slide1Started+=4')
			.to(_dom.glasslogo, 1,{className:'+=hide'},'slide1Started+=8')
			.to(_dom.crystalball, 1,{className:'+=hide'},'slide1Started+=8')
			.to(_dom.finaltext, 1,{scale:1.8, className:'+=show', ease: Power2.easeOut, x:145, y:150},'slide1Started+=9')
			.to(_dom.logo, 1, {scale:5, className:'+=show', x:-25, y:-80},'slide1Started+=9')


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