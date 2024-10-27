$(document).ready(function(){
    $("#header").load("/header.html",function(){
        $.getScript("/js/nav.js");
        $.getScript("/js/scroll.js");
    });
    $("#footer").load("/footer.html");
});