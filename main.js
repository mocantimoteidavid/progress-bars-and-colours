// List of beautiful colours
var colors = [ 'rgb(0,129,138)', 'rgb(255,102,0)', 'rgb(147,222,255)', 'rgb(247,56,89)', 'rgb(9,0,137)', 'rgb(82,76,132)', 'rgb(0,43,220)', 'rgb(246,236,102)', 'rgb(255,87,12)', 'rgb(217,244,137)', 'rgb(255,225,33)', 'rgb(253,164,3)', 'rgb(131,255,230)', 'rgb(214,95,0)', 'rgb(58,0,136)' ];

// Pairs of beautiful colours from darker to lighter
var colourPairs = [
	['rgb(255, 87, 12)', 'rgb(255, 225, 33)'],
	['rgb(0, 43, 220)', 'rgb(255, 87, 12)'],
	['rgb(82, 76, 132)', 'rgb(131, 255, 230)'],
	['rgb(9, 0, 137)', 'rgb(147, 222, 255)'],
	['rgb(214, 95, 0)', 'rgb(255, 225, 33)'],
	['rgb(30, 9, 124)', 'rgb(255, 102, 0)'],
	['rgb(58, 0, 136)', 'rgb(247, 56, 89)']
];

window.onscroll = function() {handleScroll()};

function fadeToColor(rgbColor1, rgbColor2, ratio) {
    var color1 = rgbColor1.substring(4, rgbColor1.length - 1).split(','),
        color2 = rgbColor2.substring(4, rgbColor2.length - 1).split(','),
        difference,
        newColor = [];
    for (var i = 0; i < color1.length; i++) {
        difference = color2[i] - color1[i];
        newColor.push(Math.floor(parseInt(color1[i], 10) + difference * ratio));
    }
    return 'rgb(' + newColor + ')';
}

var random = Math.floor(Math.random() * (colourPairs.length));
var colour1 = colourPairs[random][0];
var colour2 = colourPairs[random][1];

function handleScroll() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	var ratio = scrolled / 100;

	if(document.getElementById('vertical-bar')) {
		document.getElementById("vertical-bar").style.height = scrolled + "vh";

		if( (scrolled >= 23 && scrolled <= 25) || (scrolled >= 48 && scrolled <= 50) || (scrolled >= 70 && scrolled <= 72) || (scrolled >= 85)) {
			document.getElementById("vertical-bar").style.backgroundColor = fadeToColor(colour1, colour2, ratio);	
		}
	}
	if(document.getElementById('horizontal-bar')) {
		document.getElementById("horizontal-bar").style.width = scrolled + "%";

		if( (scrolled >= 23 && scrolled <= 25) || (scrolled >= 48 && scrolled <= 50) || (scrolled >= 70 && scrolled <= 72) || (scrolled >= 85)) {
			document.getElementById("horizontal-bar").style.backgroundColor = fadeToColor(colour1, colour2, ratio);	
		}
	}
}

window.onload = function() {
	var container = document.getElementById("container");
	var container2 = document.getElementById("container2");
	var container3 = document.getElementById("container3");

	for(var i=0; i<colors.length; i++) {
		var random = Math.floor(Math.random() * (colors.length));
		var box = document.createElement("div");
		box.style.backgroundColor = colors[random];
		container.appendChild(box);
	}

	for(var i=0; i<colors.length; i++) {
		var random = Math.floor(Math.random() * (colors.length));
		var box = document.createElement("div");
		box.style.backgroundColor = colors[random];
		container2.appendChild(box);
	}

	for(var i=0; i<colors.length; i++) {
		var random = Math.floor(Math.random() * (colors.length));
		var box = document.createElement("div");
		box.style.backgroundColor = colors[random];
		container3.appendChild(box);
	}
};