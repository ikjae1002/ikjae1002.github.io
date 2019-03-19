//Loading screen
window.onload = function() {
    $('#loading').animate({opacity: "0"},{duration: 700, queue:false});
    $('#spinningbar').animate({opacity: "0"},{duration: 700, queue:false});
    setTimeout(function(){$('#loading').hide()}, 700);
}

//Fade into the loading screen
function delay(URL){
	$('#loading').show();
	$('#loading').animate({'opacity': "1"},{duration: 700, queue:false});
	$('#spinningbar').animate({'opacity': "1"},{duration: 700, queue:false});
	setTimeout(function() {window.location = URL}, 700);
}


// Hover functions

var active = $('#first');
$('#select > ul > li').each(function(){
	$(this).hover(function(){
		if($(this).find('.bars').attr('id') != active.attr('id')){
			active.removeAttr('id');
			active.animate({width: "0%"},250);
			active = $(this).find('.bars');
			active.animate({width: "50%"},250);
			active.attr('id', 'active');
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

