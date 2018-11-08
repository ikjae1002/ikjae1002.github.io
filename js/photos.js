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

var beachDesc = {
    'What are you thinking about?': 'New York',
    'Mojito': 'New York',
    'Sunny gang': 'New York',
    'Hazy': 'New York',
    'The Other Side': 'New York',
    'Dazed by waves': 'New York',
    'Splendor of ocean': 'New York',
    'Standing shadow': 'New York',
    'Bohemian': 'New York'
};

var lakeDesc = {
    'Island for riches': 'Lake George',
    'Wooden Bridge': 'Crandall Park',
    'Rest area': 'Crandall Park',
    'A chair': 'Crandall Park',
    'Closer to fire': 'Lake George',
    '60 Parasail': 'Lake George',
    'Reflection': 'Lake George',
    'Bright Night': 'Lake George',
    'Flower': 'Lake George',
    'Another Flower': 'Lake George'
};

var glampingDesc = {
    'Kitchen light': 'A Tiny House Resort',
    'Baby goat': 'A Tiny House Resort',
    'White hair': 'A Tiny House Resort',
    'Making memories': 'A Tiny House Resort',
    'Stuck': 'A Tiny House Resort',
    'Tree': 'A Tiny House Resort',
    'Fall': 'Catskill',
    'Friends': 'Catskill',
    "What's down there?": 'Catskill',
    'Blue sunlight': 'Catskill'
};

var maineDesc = {
    'Road Trip': 'Along the way',
    'Beach boys': 'Charlestown, Rhode Island',
    'Light house': 'Cape Elizabeth, Maine',
    'Two tones': 'Two Lights, Maine',
    'Rocky roads': 'Two Lights, Maine',
    'Water flowers': 'Two Lights, Maine',
    'Yay': 'Two Lights, Maine',
    'Tall as light house': 'Two Lights, Maine',
    'Grey': 'Two Lights, Maine',
    'Window of the Ocean': 'Two Lights, Maine',
    'Sail man': 'South Port, Maine',
    'Remnant of ships': 'South Port, Maine',
    'Container art': 'South Port, Maine',
    'Seaweeds': 'East End Beach, Maine',
    'New Heaven': 'Sandy Point Bird Sanctuary, Connecticut',
    'Looking for birds': 'Sandy Point Bird Sanctuary, Connecticut',
    'Stiff stature': 'Sandy Point Bird Sanctuary, Connecticut'
};

function subpage(where){
    var count = 0;
    var newCover = $('<div></div>').attr('id', 'cover');
    var coverLetter = $('<div></div>').attr('id', 'letter');
    coverLetter.append($('<p class="coverletter">' + coverDesc[where][0] + '</p>'));
    coverLetter.append($('<p class="coverletter">' + coverDesc[where][1] + '</p>'));
    coverLetter.append($('<p class="coverletter" id="coverdesc">' + coverDesc[where][2] + '</p>'));

    newCover.css({'background': 'url("images/' + where + '/cover.jpg") center center no-repeat', 'background-size': 'cover'});
    newCover.append(coverLetter);
    $('#sub').append(newCover);
    var frameContents = $('<div></div>').attr('id', 'framecontents');
    var album;
    if(where === 'memento'){
        album = mementoDesc;
    }else if(where === 'beach'){
        album = beachDesc;
    }else if(where === 'lake'){
        album = lakeDesc;
    }else if(where === 'glamping'){
        album = glampingDesc;
    }else{
        album = maineDesc;
    }
    for(var key in album){
        console.log(key);
        var frame = $('<div class="frame"></div>');
        frame.css({'background': 'url("images/' + where + '/' + count + '.jpg") center center no-repeat', 'background-size': 'contain'});
        var frameDesc;
        frameDesc = $('<div class="frameDesc"><p class="frameDescLines">' + key + '</p><p class="frameDescLines">' + album[key] + '</p></div>');
        var frameconnector = $('<div class="connector"></div>');
        frameContents.append(frame);
        frameContents.append(frameDesc);
        if(Object.keys(album).length !== count + 1) {
            frameContents.append(frameconnector);
        }
        count++;
    }
    frameContents.append($('<div class="footer">All pictures by Joshua Jung</div>'))
    $('#sub').append(frameContents);
}

//jquery for CSS

$('#screen').animate({height: '0px'}, 500);

$('#one').click(function (e) {
    e.preventDefault();
    var goTo = "home.html";

    $('#screen').css({'background-color': '#d0b783','z-index': '11', 'margin-top': '-800px', 'overflow': 'visible'});
    $('#screen').animate({height: '2000px'}, 1500);
    $('#title').css({'text-align': 'center', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'height': '100vh', 'position': 'fixed', 'z-index': '12'});
    $('h2').text('Home');
    $('h2').css({'opacity': '0', 'color': 'white', 'font-family': 'Raleway, Helvetica', 'font-size': '3em', 'font-weight': '300', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'position': 'absolute', 'margin': '0'});
    setTimeout(function() {
        $('h2').animate({opacity: '1'}, 400);
        setTimeout(function(){
            $('h2').animate({opacity: '0'}, 400);
        }, 1000);
    }, 1000);
    setTimeout(function(){
        window.location = goTo;
    }, 2500);
});

$('#two').click(function (e) {
    e.preventDefault();
    var goTo = "about.html";

    $('#screen').css({'background-color': '#f96161','z-index': '11', 'margin-top': '-800px', 'overflow': 'visible'});
    $('#screen').animate({height: '2000px'}, 1500);
    $('#title').css({'text-align': 'center', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'height': '100vh', 'position': 'fixed', 'z-index': '12'});
    $('h2').text('About');
    $('h2').css({'opacity': '0', 'color': 'white', 'font-family': 'Raleway, Helvetica', 'font-size': '3em', 'font-weight': '300', 'top': '50%','left': '50%', 'transform': 'translate(-50%, -50%)', 'position': 'absolute', 'margin': '0'});
    setTimeout(function() {
        $('h2').animate({opacity: '1'}, 400);
        setTimeout(function(){
            $('h2').animate({opacity: '0'}, 400);
        }, 1000);
    }, 1000);
    setTimeout(function(){
        window.location = goTo;
    }, 2500);
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
        if($(window).scrollTop() + $(window).height() - 50 > $(this).offset().top){
            $(this).animate({opacity: '1.0'}, 1000);
        }
    });

    $('.frame').each(function(){
        if($(window).scrollTop() + $(window).height() - 50 > $(this).offset().top){
            $(this).animate({opacity: '1.0'}, 1000);
        }
    });

    $('.connector').each(function(){
        if($(window).scrollTop() + $(window).height() - 50 > $(this).offset().top){
            $(this).animate({opacity: '1.0'}, 1000);
        }
    });
});