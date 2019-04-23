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