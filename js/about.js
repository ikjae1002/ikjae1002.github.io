//Loading screen
window.onload = function() {
    $('#loading').animate({opacity: "0"},{duration: 700, queue:false});
    $('#spinningbar').animate({opacity: "0"},{duration: 700, queue:false});
    setTimeout(function(){
    	$('#loading').hide();
    }, 700);
    start();
}

//Fade into the loading screen
function delay(URL){
	$('#loading').show();
	$('#loading').animate({'opacity': "1"},{duration: 700, queue:false});
	$('#spinningbar').animate({'opacity': "1"},{duration: 700, queue:false});
	setTimeout(function() {window.location = URL}, 700);
}


//Animating letters
var titles = [false, false, false];
var widths = ['70%', '95%', '95%', '90%', '90%', '60%', '65%', '70%', '40%', '65%', '60%'];

function start(){
	animateLetters($('#name1'));
	setTimeout(animateLetters, 300, $('#name2'));
	setTimeout(fadingin, 500, $('#first'));
	setTimeout(fadingin, 700, $('#second'));
	setTimeout(fadingin, 900, $('#third'));
	setTimeout(fadingin, 1200, $('#fourth'));
}

function fadingin(ele){
	ele.css({'color': 'rgb(20,20,20)'});
}

function animateLetters(ele){
	ele.find('.cover').animate({'width': '100%'},600, function(){
		$(this).css({'left': 'auto', 'right': '0'});
		setTimeout(function() {
			ele.css({'color': 'rgb(20,20,20)'})
			ele.find('.cover').animate({'width': '0%'}, 600);
		}, 100);
	})
}

$(window).scroll(function(){
	$('.title').each(function(ele){
		if(titles[ele] == false){
			if($(this).offset().top + 250 < $(window).scrollTop() + $(window).height()){
				titles[ele] = true;
				animateLetters($(this));
				if(ele == 2){
					$('.skillbar').each(function(ele){						
						var time = ele * 100;
						var element = $(this);
						setTimeout(function(){
							element.animate({'width': widths[ele]}, 300);
						}, time);
					});
				}
			}
		}
	});
});


// Hover functions
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
