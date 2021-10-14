let i = 0;
setInterval(function(){
  i++;
  if(i < document.querySelectorAll('.carousel-child').length ){
    $('.carousel-container').css('transform', `translate(${-16.7*i}%)`);
  } else {
    i = 0;
    $('.carousel-container').css('transform', `translate(0)`);
  }
}, 3500)