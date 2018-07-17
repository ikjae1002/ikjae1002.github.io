// Javascript for CSS
var myname = document.querySelector("h1");
var navigate = document.querySelectorAll("li");
var underline = document.getElementById("active");
var time = 1000;

function changeProperty(ele){
    ele.style.bottom = 0;
}

setTimeout(function(e){
    e.style.width = "50%";
},2800,underline);

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