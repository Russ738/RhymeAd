
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
			.to(_dom.dog, 1, {left:300}, 'slide1Started+=0')
			.to(_dom.glass, 1, {left:300}, 'slide1Started+=0')
			.to(_dom.glass, 1, {className:".show", left:70, y:20}, 'slide1Started+=1')
			.to(_dom.logo, 2, {scale:1.5}) 
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