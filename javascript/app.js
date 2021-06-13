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

// (function(){
//     var myDiv = document.getElementById("singh");
//       show = function(){
//         myDiv.style.display = "block";
//         setTimeout(hide, 3000);
//       },
//       hide = function(){
//         myDiv.style.display = "none";
//       };
//     show();
//   })();
// setTimeout(function() {
//     $('#singh').fadeOut('slow');
// }, 1000);
$('#A-animation-logo').delay(3000).slideUp(); 