'use strict';

jQuery(document).ready(function($){
    $(".nav-item a").click(function(e) {
        $(".nav-item a").removeClass('button-primary');
        $(this).addClass('button-primary');
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top - 80 + 'px'},'slow');
    });
});