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
			ele.find('a').css({'color': 'black'})
			ele.find('.cover').animate({'width': '0%'}, 500);
		}, 100);
	})
}

function hideLetters(ele){
	ele.find('.cover').animate({'width': '100%'},500, function(){
		$(this).css({'left': 'auto', 'right': '0'});
		setTimeout(function() {
			ele.find('a').css({'color': 'white'})
			ele.find('.cover').animate({'width': '0%'}, 500);
		}, 100);
		ele.find('.cover').css({'left': '0', 'right': 'auto'});
	});
}

// Hover functions

function subpage(name){
	var going;
	console.log(name);
	if(name == "project"){
		going = project;
	}else if(name == "boston"){
		going = boston;
	}else if(name == "street"){
		going = street;
	}else if(name == "fourth"){
		going = fourth;
	}
	$('#subloading').css({'visibility':'hidden'});
	var content = $('#framecontents');
	var clickbutton = $('<a id="clickback" href="#"></a>');
    var backbutton = $('<div></div>').attr('id', 'backbtn');
    clickbutton.append(backbutton);
    content.append(clickbutton);
    $('#sub').css({'display': 'block'});
    $('#backbtn').css({'opacity': '1'});
    var framebackground = $('<div id="framebackground"></div>');
    framebackground.css({'background': 'url("images/' + name + '/background.jpg") center center no-repeat', 'background-size': 'cover'});
    var framebackbox = $('<div id="backbox"></div>');
    var frameletters = $('<div id="frameletters"></div>');
    var frametitle = $('<h1>' + name + '</h1>');
    var framesubtitle = $('<h2>' + framedesc[name] + '</h2>');
    frameletters.append(frametitle, framesubtitle);
    framebackbox.append(frameletters);
    framebackground.append(framebackbox);
    content.append(framebackground);
    $('#sub').animate({'opacity': '1'},300);
}

var framedesc = {
	'project': 'Personal Experiments'
}

var project = {
	'name': 'Project',
	'subtitle': 'Personal Experiments',
	'background' : '../images/project/background.jpg',
	'1' : '../images/project/1.jpg',
	'2' : '../images/project/2.jpg',
	'3' : '../images/project/3.jpg'
};

var boston = {

};

var street = {

};

var fourth = {

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
			var where = $(this).find('a').text();
			setTimeout(hideLetters, 1000, $('#select > ul > li').eq(ele).find('.letters'));
			setTimeout(function(){
				active.animate({width: '0%'}, 500);
				setTimeout(function(){
					$('#container').animate({'opacity': '0'}, 500);
					$('#container').fadeOut(function(){
						$(this).css({'visibility':'hidden'});
						$('#sub').css({'visibility': 'visible'});
						subpage(where);
					});
				},500, function(){});
			},1000);
		}
	});
});

$(document).on('click', '#clickback', function(e){
    e.preventDefault();
    $('#sub').fadeOut(function(){
        $(this).css({'visibility': 'hidden', 'opacity': '0.0'});
        $(this).find('#framecontents').empty();
    });
    $('#container').css({'visibility': 'visible'});
    setTimeout(function() {
        $('#container').css({'display': 'block'});
        $('#container').animate({opacity: '1.0'}, 1000);
        setTimeout(function(){
            $('#select > ul > li').each(function(ele){
    			setTimeout(animateLetters, (250 * ele), $(this));
    		});
    		setTimeout(function(){
    			$('#active').animate({'width': '50%'},250);
    		}, 1000);
    		clicked = false;
        },1000);
    }, 500);
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

