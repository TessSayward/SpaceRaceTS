$(document).foundation()
AOS.init();

$('.button').click(function(event){
  
  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },700);

});

// var sputnik = document.querySelector(".sputnik");
// var status = 0;

// function setTranslate(xPos, yPos, el) {
//   el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
// }
 
// window.addEventListener("DOMContentLoaded", scrollLoop, false);

// var xScrollPosition;
// var yScrollPosition;
 
// function scrollLoop() {
//   xScrollPosition = window.scrollX;
//   yScrollPosition = window.scrollY;

//   setTranslate(0, yScrollPosition * -0.2, sputnik);
  
//   requestAnimationFrame(scrollLoop);
// }

// $('.sputnik').click(function(event){
  
//   // prevent defalt click behavior
//   // don't jump to content
//   event.preventDefault();
    
//   // identify position of target
//   var target = $(this).attr('href');
//   var top = $(target).offset().top;

//   // animate scroll to target
//   $('html,body').animate({
//     scrollTop: top
//     },700);

// });