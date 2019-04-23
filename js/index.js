// JavaScript for index.html

//Cover action
var first = {name: "#first", trigger: false};
// var second = {name: "#second", trigger: false};
// var third = {name: "#third", trigger: false};
// var fourth = {name: "#fourth", trigger: false};

$(window).scroll(function(){
	if($('#first').offset().top + 300 < $(this).scrollTop() + $(window).height()){
		animateLetters(first);
		// setTimeout(animateLetters, 300, second);
		// setTimeout(animateLetters, 600, third);
		// setTimeout(animateLetters, 900, fourth);
	}
});

// function reset(ele){
// 	ele.trigger = false;
// 	var resetele = $(ele.name).children()[0];
// 	$(resetele).css({'right': 'auto', 'left': '0'});
// 	$(ele.name).css({'color': 'white'});
// }

function animateLetters(ele){
	if(ele.trigger == false){
		ele.trigger = true;
		var what = $(ele.name).children()[0];
		console.log(what);
		$(what).animate({'height': '150%'}, 500, function(){
			$(ele.name).css({'color': 'rgb(20,20,20)'});
			$(this).css({'top': 'auto'});
			setTimeout(function() {$(what).animate({'height': '4px', 'border-radius': '4px', 'bottom': '-50%'}, 500);}, 100);
			setTimeout(function() {$(what).animate({'width': '50px'}, 500);}, 600);
		});
	}
}

//Loading screen
window.onload = function() {
     $('#loading').animate({opacity: "0"},{duration: 700, queue:false});
     $('#spinningbar').animate({opacity: "0"},{duration: 700, queue:false});
     setTimeout(function(){$('#loading').hide()}, 700);
}

//Delay page
function delay(URL){
	$('#loading').show();
	$('#loading').animate({'opacity': "1"},{duration: 700, queue:false});
	$('#spinningbar').animate({'opacity': "1"},{duration: 700, queue:false});
	setTimeout(function() {window.location = URL}, 700);
}

// function animateLetters(ele){
// 	var index, spans, counter;

// 	counter = 100;
// 	index = 0;
//     spans = ele.children();
//     doOne();

//     function doOne() {
//       var span = $(spans[index]);
//       if (!$.trim(span.text())) {
//         // Skip blanks
//         next();
//         return;
//       }

//       // Do this one
//       span.css({position: "relative",}).animate({top: "-20", opacity: "1"}, 50, function(){
//       	next();
//       });

//       function next() {
// 	      index += 1;
// 	      if (index < spans.length) {
// 	        doOne();
// 	      }
// 	  }
//     }
// }

// Fade in for descriptions
$(window).scroll(function(){
	$('.descColumns').each(function(){
		if($(this).offset().top + 100 < $(window).scrollTop() + $(window).height()){
			$(this).animate({marginTop: "0px", opacity: "1"});
		}
	})
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

console.log($("footer").offset());