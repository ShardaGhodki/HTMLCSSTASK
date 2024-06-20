// let toggleButton = document.querySelector('togbtn');
// let box = document.querySelector('.toggle');

// // Add click event listener to the button
// toggleButton.addEventListener('click', function() {
//     // Toggle the visibility of the box element
//     if (box.style.visibility === 'hidden') {
//         box.style.visibility = 'visible'; // Show the box
//     } else {
//         box.style.visibility = 'hidden'; // Hide the box
//     }
// });

// JS
$(document).ready(function() {
    $(window).on('scroll', function(){
      if($(window).scrollTop()){
        $('nav').addClass('black');
      } else {
        $('nav').removeClass('black');
      }
    });
  });