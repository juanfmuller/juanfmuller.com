$('.project-item').mouseover(function(){
  $(this).find('h3').css('top', '20px');
  $(this).find('h3').css('opacity', '0');
  $(this).find('h4').css('top', '20px');
  $(this).find('h4').css('opacity', '0');
  setTimeout(function(){
    $('.project-item h3').css('top', '0');
    $('.project-item h3').css('opacity', '1');
    $('.project-item h4').css('top', '0');
    $('.project-item h4').css('opacity', '1');
  }, 150);
})
