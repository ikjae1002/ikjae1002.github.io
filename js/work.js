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

$("#button").hover(function(){
    $("#circle").animate({'height': '200px', 'width': '200px', 'border-radius': '200px'}, 300);
    $(this).css({'color': 'white'});
    },
    function(){
        $("#circle").animate({'height': '0px', 'width': '0px', 'border-radius': '0px'}, 300);
        $(this).css({'color': 'black'});
    }
);

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