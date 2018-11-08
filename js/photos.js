// Javascript for CSS
$(window).on('resize', function () { AOS.refresh(); });
$(window).on('load', function() { setTimeout(AOS.refreshHard, 150); });

$(document).ready(function () {
    AOS.init({
        startEvent: 'load',
        easing: 'ease-in-out-quart',
        duration: 600,  once: false });
});

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

for(var i = 0; i < 11; i++){
    if($('div').hasClass(i.toString())){
        console.log($('.' + i.toString()));
        for(var j = 0; j < 10 - i; j++){
            var appendClass = $('<div></div>').addClass("empty");
            $('.' + i.toString()).append(appendClass);
        }for(var j = 0; j < i; j++){
            var appendClass = $('<div></div>').addClass("fill");
            $('.' + i.toString()).append(appendClass);
        }
    }
}

var coverDesc = {
    'memento': ['01', 'Memento', 'Photos of Everyday Journey'],
    'beach': ['02', 'Beach', 'Beach Party'],
    'lake': ['03', 'Lake George', 'Family Hour'],
    'glamping': ['04', 'Glamping', 'Last of Summer'],
    'maine': ['05', 'Maine', 'Journey With Friends']
};

var mementoDesc = {
    'The Eclipse': 'New York',
    'Jacob Hashimoto': 'New York',
    'Subway Surfer': 'New York',
    'City of Friends': 'New York',
    'Hangers': 'Brookyln',
    'Love Me': 'Brooklyn',
    'Friends With Style': 'Brooklyn',
    'GTR': 'Brooklyn',
    'Rowing': 'Brooklyn',
    'Chelsea': 'New York',
    'Williamsburg Bridge': 'Brooklyn',
    'Forest Point': 'Brooklyn',
    'Lights': 'Brooklyn'
};

function subpage(where){
    var count = 0;
    var newCover = $('<div></div>').attr('id', 'cover');
    var coverLetter = $('<div></div>').attr('id', 'letter');
    coverLetter.append($('<p class="coverletter">' + coverDesc[where][0] + '</p>'));
    coverLetter.append($('<p class="coverletter">' + coverDesc[where][1] + '</p>'));
    coverLetter.append($('<p class="coverletter" id="coverdesc">' + coverDesc[where][2] + '</p>'));

    newCover.css({'background': 'url("../images/' + where + '/cover.jpg") center center no-repeat', 'background-size': 'cover'});
    newCover.append(coverLetter);
    $('#sub').append(newCover);
    var frameContents = $('<div></div>').attr('id', 'framecontents');
    for(var key in mementoDesc){
        console.log(key);
        var frame = $('<div class="frame"></div>');
        frame.css({'background': 'url("../images/' + where + '/' + count + '.jpg") center center no-repeat', 'background-size': 'contain'});
        var frameDesc;
        if(where === 'memento'){
            frameDesc = $('<div class="frameDesc"><p class="frameDescLines">' + key + '</p><p class="frameDescLines">' + mementoDesc[key] + '</p></div>');
        }
        var frameconnector = $('<div class="connector"></div>');
        frameContents.append(frame);
        frameContents.append(frameDesc);
        if(Object.keys(mementoDesc).length !== count + 1) {
            frameContents.append(frameconnector);
        }
        count++;
    }
    $('#sub').append(frameContents);
}

//jquery for CSS

$('#screen').animate({height: '0px'}, 1000);

$('#one').click(function (e) {
    e.preventDefault();
    var goTo = "home.html";

    $('#screen').css({'background-color': '#d0b783','z-index': '11', 'margin-top': '-800px', 'overflow': 'visible'});
    $('#screen').animate({height: '2000px'}, 3000);
    $('#title').css({'text-align': 'center', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'height': '100vh', 'position': 'fixed', 'z-index': '12'});
    $('h2').text('Home');
    $('h2').css({'opacity': '0', 'color': 'black', 'font-family': 'Raleway, Helvetica', 'font-size': '3em', 'font-weight': '300', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'position': 'absolute', 'margin': '0'});
    setTimeout(function() {
        $('h2').animate({opacity: '1'}, 1000);
        setTimeout(function(){
            $('h2').animate({opacity: '0'}, 1000);
        }, 500);
    }, 2000);
    setTimeout(function(){
        window.location = goTo;
    }, 3500);
});

$('#two').click(function (e) {
    e.preventDefault();
    var goTo = "about.html";

    $('#screen').css({'background-color': '#f96161','z-index': '5', 'margin-top': '-800px', 'overflow': 'visible'});
    $('#screen').animate({height: '2000px'}, 3000);
    $('#title').css({'text-align': 'center', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'height': '100vh', 'position': 'fixed', 'z-index': '6'});
    $('h2').text('About');
    $('h2').css({'opacity': '0', 'color': 'black', 'font-family': 'Raleway, Helvetica', 'font-size': '3em', 'font-weight': '300', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'position': 'absolute', 'margin': '0'});
    setTimeout(function() {
        $('h2').animate({opacity: '1'}, 1000);
        setTimeout(function(){
            $('h2').animate({opacity: '0'}, 1000);
        }, 500);
    }, 2000);
    setTimeout(function(){
        window.location = goTo;
    }, 3500);
});

$('.images').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('id');
    $('#maincontent').fadeOut(function(){
        $(this).css({'visibility': 'hidden', 'opacity': '0.0'});
    });
    subpage(id);
    $('#sub').css({'visibility': 'visible', 'display': 'block'});
    setTimeout(function() {
        var clickbutton = $('<a id="clickback" href="#"></a>');
        var backbutton = $('<div></div>').attr('id', 'backbtn');
        clickbutton.append(backbutton);
        $('#sub').append(clickbutton);
        $(window).scrollTop(0);
        $('#sub').animate({opacity: '1.0'}, 1000);
        $('.lists').animate({opacity: '0'}, 400, function(){
            $(this).css({'visibility': 'hidden'});
        });
        $('#active').animate({marginTop: '-15px'}, 100);
        setTimeout(function(){
            $('#backbtn').animate({opacity: '1.0'},500);
            $('#slide').animate({width: '98%'}, 1000);
        },300);
    }, 500);
    $(window).refresh;
});

$(document).on('click', '#clickback', function(e){
    e.preventDefault();
    $('#sub').fadeOut(function(){
        $(this).css({'visibility': 'hidden', 'opacity': '0.0'});
        $(this).empty();
    });
    $('#maincontent').css({'visibility': 'visible'});
    setTimeout(function() {
        $('#maincontent').css({'display': 'block'});
        $('#maincontent').animate({opacity: '1.0'}, 1000);
        $('.lists').css({'visibility': 'visible'});
        $('#slide').animate({width: '234px'}, 1000);
        setTimeout(function(){
            $('.lists').animate({opacity: '1.0'}, 400);
            $('#active').animate({marginTop: '5px'}, 200);
        },1000);
    }, 500);
});

$(window).on('scroll', function(){
    var calc = ($('#background').height() - $(window).scrollTop()) / $('#background').height();
    $('#background').css({'opacity': calc});
    if(calc > 1){
        $('#background').css({'opacity': '1'});
    }else if(calc < 0){
        $('#background').css({'opacity': '0'});
    }
    var calculate = ($('#cover').height() - $(window).scrollTop()) / $('#cover').height();
    $('#cover').css({'opacity': calculate});
    if(calculate > 1){
        $('#cover').css({'opacity': '1'})
    }else if(calculate < 0){
        $('#cover').css({'opacity': '0'})
    }

    $('.frameDescLines').each(function(){
        if($(window).scrollTop() + $(window).height() > $(this).offset().top){
            $(this).animate({opacity: '1.0'}, 1000);
        }
    });

    $('.frame').each(function(){
        if($(window).scrollTop() + $(window).height() > $(this).offset().top){
            $(this).animate({opacity: '1.0'}, 1000);
        }
    });

    $('.connector').each(function(){
        if($(window).scrollTop() + $(window).height() > $(this).offset().top){
            $(this).animate({opacity: '1.0'}, 1000);
        }
    });
});