var $body = $('body')

var makeCircle = function() {
	var $newCircle = $('<div>');
	var newRed = Math.floor(Math.random() * 256);
	var newGreen = Math.floor(Math.random() * 256);
	var newBlue = Math.floor(Math.random() * 256);
	var newTrans = Math.random();
	var newSize = Math.random() * 20;


	$newCircle.css('top', Math.random() * document.documentElement.clientHeight - 22);
	$newCircle.css('left', Math.random() * document.documentElement.clientWidth - 22);
	$newCircle.css('background-color', 'rgb(' + newRed + ', ' + newGreen + ', ' + newBlue + ')');
	$newCircle.css('opacity', newTrans);
	$newCircle.css('width', newSize);
	$newCircle.css('height', newSize);


	$body.append($newCircle);
};

$('html').on('keydown', function(e) {

	var numCircles = Math.floor(Math.random() * 25);
	var i = 0;

	for (i=0; i<numCircles; i++) {
		makeCircle();
	}


});

