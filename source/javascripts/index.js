(function($) {
  $(document).ready(function() {
    $(".mobile-toggle").on("click", function() {
      $(".header .navigation").toggle();
    });

    //Temporarily commenting out
    //var resizeWelcome = function() {
    //  var height = $(window).height();
    //  $(".welcome").height(height);
    //};
    //resizeWelcome();
    //$(window).resize(resizeWelcome);
  });
})(jQuery);
