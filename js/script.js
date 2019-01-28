$(document).ready(function () {	

	$(function(){
		new TypeIt('.welcome-box p',{
			speed:70,
			cursorSpeed:800
		});	
		
	});

	$('.welcome-box h1').delay(2800).animate({
		opacity: 1
		}, 2000, function() {	
	});
	

	if(!$('#myCanvas').tagcanvas({
          textColour: '#000046',
          outlineColour: 'transparent',
          outlineThickness: 0.6,
          reverse: true,
          shape:'sphere',
          depth: 0.4,
          maxSpeed: 0.07,
          minSpeed: 0.05,
          initial: [0.06, 0.06],
          zoom: 1

        })) {
          
          $('#myCanvasContainer').hide();
        }

});
