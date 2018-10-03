// Javascript for CSS
AOS.init();
var myname = document.querySelector("h1");
var navigate = document.querySelectorAll("li");
var time = 1000;

function changeProperty(ele){
    ele.style.bottom = 0;
}

setTimeout(function(e){
    $('#active').animate({marginTop: "5px"}, 1000);
},2000);

setTimeout(changeProperty,500,myname);

for(var i = 0; i<navigate.length; i++){
    setTimeout(changeProperty,time,navigate[i]);
    time += 400;
}

//jquery for CSS

$(document).on('click', "a", function(){
    var newurl = $(this).attr('href');

    if(newurl == '#'){
        location.hash = newurl;
        return;
    }

    $("html").fadeOut(function(){
        location = newurl;
    });

    return false;
});

$('#screen').animate({height: '0px'}, 1000);

setTimeout(function(){
    $('#firstleft').animate({left: '0px'}, 1000);
    $('#firstright').animate({right: '0px'}, 1000);

},1000);

setTimeout(function(){
    $('#secondleft').animate({left: '0px'}, 1000);
    $('#secondright').animate({right: '0px'}, 1000);
},1500);

setTimeout(function(){
    $('#thirdleft').animate({left: '0px'}, 1000);
    $('#thirdright').animate({right: '0px'}, 1000);
},2000);