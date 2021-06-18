$(document).ready(function(){
    $(this).scrollTop(0);
});
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    $(".mobile-nav li a").click(function() {
        $(".mobile-nav").removeClass("open");
        $("#header").removeClass("abc");
        $("#main_body").removeClass("abc");

    });

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});  

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
}); 

});

$('#A-animation-logo').delay(3000).slideUp(); 

// blur effect
document.addEventListener("DOMContentLoaded", () => {
            
    const header = document.querySelector("#header");
    const mainbody = document.querySelector("#main_body");

    document.querySelector(".hamberger").addEventListener("click", () => {
        header.classList.add("abc");
        mainbody.classList.add("abc");
        // document.getElementById("main_body").style.position="fixed";
    });

    document.querySelector(".times").addEventListener("click", () => {
        header.classList.remove("abc");
        // document.getElementById("main_body").style.position="";
        mainbody.classList.remove("abc");
    });
});

const targetDiv = document.getElementById("A-animation-logo");
const btn = document.getElementById("logo");

$("#logo").click( function() {
    $(window).scrollTop(0);
  });