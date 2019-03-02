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
		  noSelect: true,
          maxSpeed: 0.07,
          minSpeed: 0.05,
          initial: [0.06, 0.06],
          zoom: 1

        })) {
          
          $('#myCanvasContainer').hide();
        }

    var isNavOpen = false;
    var toggleBtnHandler = (function() {

        var openNavBtn = $('.nav-open');
        var closeNavBtn = $('.nav-close');
  
        return function() {
            if (!isNavOpen) {
                openNavBtn.animate({opacity: 0});
                closeNavBtn.animate({opacity: 1});
            }
            else {
                closeNavBtn.animate({opacity: 0});
                openNavBtn.animate({opacity: 1}); 
            }
            isNavOpen = !isNavOpen;
        };
    })();

    $('.nav-toggle-btn').click(toggleBtnHandler);

});
