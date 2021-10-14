$(document).ready(function(){
  $('.please-wait').css('bottom', '0');
  setTimeout(function(){
    $('.please-wait').slideUp();
  }, 1000)
  setTimeout(function(){
    $('.loading-screen').css('transform', 'translate(0, 110%)')
    $('body').css('color', 'rgba(0, 0, 0, 1)')
    $('.nav-bar').css('background-color', 'rgba(253, 253, 253, .8)')
    $('.nav-bar .subtitle h1').css('border', '3px solid rgba(0, 0, 0, 1)')
    $('.hamburger-menu').css('opacity', '1')
  }, 1500)
})

$('.nav-bar').ready(function(){
  $('.nav-bar').css('opacity', '1')
})

$('.slide-in').css('opacity', '0');
$('.slide-in').css('transition', 'opacity 1.3s, top .5s, background-size .3s');
$('.slide-in').css('position', 'relative');
$('.slide-in').css('top', '40px');
setTimeout(function(){
  $('.slide-in').each(function(){
    if($(this).visible(true)){
      $(this).css('opacity', '1');
      $(this).css('top', '0');
    }
  })
}, 1800)
window.onscroll = function(){
  $('.slide-in').each(function(){
    if($(this).visible(true)){
      $(this).css('opacity', '1');
      $(this).css('top', '0');
    }
  })
}

const toggler = document.getElementById('toggler');
$('.menu-links').fadeOut();
toggler.addEventListener("click", function(){
  if(toggler.checked){
    $('.menu-links').fadeIn(1500);
    $('.hamburger-menu-screen').css('opacity', '.98')
    $('.hamburger-menu-screen').css('transform', 'translate(0,0)')
    $('.nav-bar').css('background-color', 'rgba(255, 255, 255, 0)')
    $('.nav-bar').css('color', 'rgba(255, 255, 255, .5)')
    $('.nav-bar .subtitle h1').css('border', '3px solid rgba(255, 255, 255, .5)')
    $('.hamburger-menu p').css('opacity', '0')
    $('.hamburger-button').css('background-color', 'rgba(255, 255, 255, .5)')
  } else {
    $('.menu-links').fadeOut();
    $('.hamburger-menu-screen').css('transform', 'translate(0,110%)')
    setTimeout(function(){
      $('.hamburger-menu-screen').css('opacity', '0')
      $('.hamburger-menu-screen').css('transform', 'translate(0,-110%)')
    }, 500)
    $('.nav-bar').css('background-color', 'rgba(253, 253, 253, .8)')
    $('.nav-bar').css('color', 'rgba(0, 0, 0, 1)')
    $('.nav-bar .subtitle h1').css('border', '3px solid rgba(0, 0, 0, 1)')
    $('.hamburger-button').css('background-color', 'rgba(0, 0, 0, 1)')
    $('.hamburger-menu p').css('opacity', '1')
  }
})
