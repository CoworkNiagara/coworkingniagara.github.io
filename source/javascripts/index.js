(function($) {
  $(document).ready(function() {
    $(".mobile-toggle").on("click", function() {
      $(".navigation").toggle(600);
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
