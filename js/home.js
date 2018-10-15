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

$('#two').click(function (e) {
    e.preventDefault();
    var goTo = "about.html";

    $('#screen').css({'background-color': '#f96161','z-index': '5', 'margin-top': '-800px', 'overflow': 'visible'});
    $('#screen').animate({height: '2000px'}, 3000);
    $('#title').css({'text-align': 'center', 'top': '0', 'height': '100vh', 'position': 'absolute', 'z-index': '6'});
    $('h2').text('About');
    $('h2').css({'opacity': '0', 'color': 'black', 'font-family': 'Raleway, Helvetica', 'font-size': '3em', 'font-weight': '300', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'position': 'absolute', 'margin': '0'});
    setTimeout(function() {
        $('h2').animate({opacity: '1'}, 1000);
        setTimeout(function(){
            $('h2').animate({opacity: '0'}, 1000);
        }, 1000);
    }, 2000);
    setTimeout(function(){
        window.location = goTo;
    }, 4000);
});

$('#three').click(function (e) {
    e.preventDefault();
    var goTo = "photos.html";

    $('#screen').css({'background-color': '#bcd2d0','z-index': '5', 'margin-top': '-800px', 'overflow': 'visible'});
    $('#screen').animate({height: '2000px'}, 3000);
    $('#title').css({'text-align': 'center', 'top': '0', 'height': '100vh', 'position': 'absolute', 'z-index': '6'});
    $('h2').text('Photos');
    $('h2').css({'opacity': '0', 'color': 'black', 'font-family': 'Raleway, Helvetica', 'font-size': '3em', 'font-weight': '300', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'position': 'absolute', 'margin': '0'});
    setTimeout(function() {
        $('h2').animate({opacity: '1'}, 1000);
        setTimeout(function(){
            $('h2').animate({opacity: '0'}, 1000);
        }, 1000);
    }, 2000);
    setTimeout(function(){
        window.location = goTo;
    }, 4000);
});