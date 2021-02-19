$(document).ready(function () {
    $("#top").click(function () {
      $("#middle").toggle();
      $("#bottom").toggle();

      if ($(this).hasClass('big')) {
        $(this).animate({ height: 88 }, 200).removeClass('big');
      } else {
        $(this).animate({ height: 200 }, 200).addClass('big');
      }
    });

    //click middle
    $("#middle").click(function () {
      $("#top").toggle();
      $("#bottom").toggle();

      if ($(this).hasClass('big')) {
        $(this).animate({ height: 88 }, 200).removeClass('big');
      } else {
        $(this).animate({ height: 150 }, 200).addClass('big');
      }
    });

    //click bottom
    $("#bottom").click(function () {
      $("#top").toggle();
      $("#middle").toggle();

      if ($(this).hasClass('big')) {
        $(this).animate({ height: 88 }, 200).removeClass('big');
      } else {
        $(this).animate({ height: 200 }, 200).addClass('big');
      }
    });
});

