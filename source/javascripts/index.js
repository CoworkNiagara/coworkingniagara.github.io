(function($) {
  $(document).ready(function() {
    var resizeWelcome = function() {
      var height = $(window).height();

      $(".welcome").height(height);
    };

    resizeWelcome();
    $(window).resize(resizeWelcome);
  });
})(jQuery);
