$(function(){
    // inicializacion de TABS
    $('ul.tabs').tabs();
  // Fin de tabs
        var window_width = $(window).width();
        $(window).load(function() {
            setTimeout(function() {
                $('body').addClass('loaded');
            }, 200);
        });
        $('.slider').slider({
            full_width: true
        });
    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    if (is_touch_device()) {
        $('body').css({
            overflow: 'auto'
        })
    }
});