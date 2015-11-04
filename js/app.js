$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show()
		$('.ryu-ready').hide()
	})
	.mousedown(function() {
		console.log('mousedown');
		// play hadouken sound
		//show hadouken animate it to the right of the screen
	})
	.mouseup(function() {
	console.log('mouseup');
	//ryu goes back to his ready position
	})
});