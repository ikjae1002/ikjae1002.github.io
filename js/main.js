var listEle = document.getElementsByClassName("lists");
var listLength = listEle.length;
var time = 500;



for(var i = 0; i<listLength; i++){
    listEle[i].style.opacity = 0.0;
    listEle[i].style.transitionDuration = '1s';
    listEle[i].style.transitionProperty = "opacity";
    console.log(listEle[0]);
}

function changeOpacity(ele){
    ele.style.opacity = 1.0;
}


for(var i = 0; i<listLength; i++){
    console.log(time);
    setTimeout(changeOpacity,time,listEle[i]);
    time += 500;
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