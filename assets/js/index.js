$(document).ready(function(e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // Resize event
    $win.resize(function() {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e) {
        if($win.width() <= 768) {
            $navbar.toggleClass("toggle-left");
        }
    })
});

function toggle_onclick($win, $navbar, width) {
    if($win.width() <= 768) {
        $navbar.css({left: `-${width}px`});
    } else {
        $navbar.removeClass("toggle-left");
        $navbar.css({left: `0px`});
    }
}