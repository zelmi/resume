$(function () {
    $('a[href*=#]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
  });
  
  new Sign().print(document.body)
  
  
  // hover div 
  var target = document.getElementById("trigger");
  
  function tapOrClick(event) {
    return false;
  }
  
  target.addEventListener("touchstart", tapOrClick, false);
  
  