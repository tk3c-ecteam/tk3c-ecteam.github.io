/**
 * Copyright (c) 2021 by aureliendotpro (https://codepen.io/aureliendotpro/pen/hAxGg)
 */

// number of drops created.
var nbDrop = 300; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,2000);
	var dropTop = randRange(-500,1200);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}
// Make it rain

$(function() {
    createRain();
});
