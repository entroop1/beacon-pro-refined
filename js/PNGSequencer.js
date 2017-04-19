/**
 * @param slides ~ Array (ARRAY) of image locations
 * @param duration ~ Number - in milliseconds how long to run for
 * @param element ~ jQuery object - The <img> tag to change the src of.
 * @returns void
 * 
 * @example
 * 	<img src="#" id="sequence" data-loop="true" data-autoplay="true" />
 * 	<script>var vid = new PNGSequence(tiffanyCrystal, 4, $('#sequence'));</script>
 */
var	PNGSequence = function (slides, duration, element) {
	this.slides = slides;
	this.NSlides = slides.length;
	this.duration = duration;
	this.interval = (this.duration * 1000) / this.NSlides;
	this.element = element;
	this.index = 0;
	this.loop = this.element.data('loop') == true;
	this.autoplay = this.element.data('autoplay') == true;

	var inter;
	
	this.interGo = function () {
		var self = this;
		return setTimeout(function () {
			// Update the image
			element.attr({
				"src": slides[self.index]
			});
			
			// Increase the index
			self.index++;
			
			// Call the onTimeChange event
			if (self.hasOwnProperty('onTimeChange')) {
				if (self.onTimeChange) {
					self.onTimeChange.call(self, self.index, self.NSlides);
				}
			}
			
			// Check if its the end of the animation
			if (self.index > self.NSlides) {
				// If we're not looping, clear the interval
				if (!self.loop) {
					clearTimout(inter);
				} else {
					// If we're looping then start the loop from the beginning 
					self.index = 0;
					self.play();
				}
				return;
			}
			
			//Fire the timeout again
			self.interGo();
		}, this.interval);
	};
	
	/**
	 * Pauses the sequence
	 */
	this.pause = function () {
		clearTimout(inter);
		return this.index;
	};
	
	/**
	 * Plays the sequence from last known point
	 */
	this.play = function () {
		return inter = this.interGo();
	};
	
	/**
	 * Stops the sequence and sets the pointer
	 * at the beginning again
	 */
	this.stop = function () {
		clearTimout(inter);
		this.index = 0;
		return 0;
	};
	
	this.onTimeChange = function () {
		return this;
	};
	
	if (this.autoplay) {
		inter = this.interGo();
	}
	
	return this;
};