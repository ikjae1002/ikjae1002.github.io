var listEle = document.getElementsByClassName("lists");
var triangleEle = document.getElementsByClassName("triangles");
var listLength = listEle.length;
var time = 500;



for(var i = 0; i<listLength; i++){
    listEle[i].style.opacity = 0.0;
    triangleEle[i].style.opacity = 0.0;
    listEle[i].style.transitionDuration = '1s';
    triangleEle[i].style.transitionDuration = '1s';
    listEle[i].style.transitionProperty = "opacity";
    triangleEle[i].style.transitionProperty = "opacity";
    console.log(listEle[0]);
}

function changeOpacity(ele){
    ele.style.opacity = 1.0;
}


for(var i = 0; i<listLength; i++){
    console.log(time);
    setTimeout(changeOpacity,time,listEle[i]);
    setTimeout(changeOpacity,time,triangleEle[i]);
    time += 500;
}

//jquery for CSS

// $(document).on('click', "a", function(){
//     var newurl = $(this).attr('href');
//
//     if(newurl == '#'){
//         location.hash = newurl;
//         return;
//     }
//
//     $("html").fadeOut(function(){
//         location = newurl;
//     });
//
//     return false;
// });

$('#one').hover(
    function(){
        $('#hometri').animate({marginLeft: '0px'}, 200);
    },
    function(){
        $('#hometri').animate({marginLeft: '-8px'}, 200);
    }
);

$('#two').hover(
    function(){
        $('#abouttri').animate({marginLeft: '0px'}, 200);
    },
    function(){
        $('#abouttri').animate({marginLeft: '-8px'}, 200);
    }
);

$('#three').hover(
    function(){
        $('#photostri').animate({marginLeft: '0px'}, 200);
    },
    function(){
        $('#photostri').animate({marginLeft: '-8px'}, 200);
    }
);


$('#one').click(function (e) {
    e.preventDefault();
    var goTo = "home.html";

    $('#screen').css({'background-color': '#d0b783','z-index': '5', 'margin-top': '-800px', 'overflow': 'visible'});
    $('#screen').animate({height: '2000px'}, 3000);
    $('#title').css({'text-align': 'center', 'top': '0', 'height': '100vh', 'position': 'absolute', 'z-index': '6'});
    $('h2').text('Home');
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