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
	
	
});
