//Loading screen
window.onload = function() {
    $('#loading').animate({opacity: "0"},{duration: 700, queue:false});
    $('#spinningbar').animate({opacity: "0"},{duration: 700, queue:false});
    setTimeout(function(){$('#loading').hide()}, 700);
    $('#select > ul > li').each(function(ele){
    	setTimeout(animateLetters, (250 * ele), $(this));
    });
}

//Fade into the loading screen
function delay(URL){
	$('#loading').show();
	$('#loading').animate({'opacity': "1"},{duration: 700, queue:false});
	$('#spinningbar').animate({'opacity': "1"},{duration: 700, queue:false});
	setTimeout(function() {window.location = URL}, 700);
}

// Animate Letters
function animateLetters(ele){
	ele.find('.cover').animate({'width': '100%'},500, function(){
		$(this).css({'left': 'auto', 'right': '0'});
		setTimeout(function() {
			ele.css({'color': 'black'})
			ele.find('.cover').animate({'width': '0%'}, 500);
		}, 100);
	})
}

function hideLetters(ele){
	ele.find('.cover').animate({'width': '100%'},500, function(){
		$(this).css({'left': 'auto', 'right': '0'});
		setTimeout(function() {
			ele.css({'color': 'white'})
			ele.find('.cover').animate({'width': '0%'}, 500);
		}, 100);
	});
	ele.find('.cover').css({'left': '0', 'right': 'auto'});
}

// Hover functions

var project = {
	'name': 'project',
	'':''
};

var active = $('#first');
var clicked = false;
$('#select > ul > li').each(function(ele){
	$(this).hover(function(){
		if(!clicked){
			if($(this).find('.bars').attr('id') != active.attr('id')){
				active.removeAttr('id');
				active.animate({width: "0%"},250);
				active = $(this).find('.bars');
				active.animate({width: "50%"},250);
				active.attr('id', 'active');
			}
		}
	});
		// var active = $('#active');
		// $(this).hover(function(){
		// 	if($(this).children()[0] != active){
		// 		active.removeAttr('id');
		// 		active.animate({width: "0%"}, 300);
		// 		$(this).find('.bars').animate({width: "100%"}, 300);
		// 		$(this).find('.bars').attr('id', 'active');
		// 	}
		// })
	$(this).click(function(){
		if(!clicked){
			clicked = true;
			var time = 0;
			$('#select > ul > li').each(function(another){
				if(ele != another){
					setTimeout(hideLetters, time, $(this));
					time += 150;
				}
			});
			setTimeout(hideLetters, 1000, $('#select > ul > li').eq(ele).find('.letters'));
			setTimeout(function(){
				active.animate({width: '0%'}, 500);
				setTimeout(function(){$('#container').animate({'opacity': '0'}, 500);},500);
			},1000);
		}
	});
});



$("#info > a").hover(function(){
	$(this).animate({opacity: "1"}, 300)},
	function(){
		$(this).animate({opacity: ".7"}, 300)
});


$("#links > a").hover(function(){
	$(this).animate({opacity: "1"}, 300)},
	function(){
		$(this).animate({opacity: ".7"}, 300)
});

$("footer").css({'bottom': '0', 'top': 'auto'});

