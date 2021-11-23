'use strict';

jQuery(document).ready(function($){
    $(".nav-item a").click(function(e) {
        let title = $(this).text();
        if (title == 'Back to Top') {
            $('.head-title h2.title').text('Documentation');
        } else {
            $('.head-title h2.title').text(title);
        }
        
        $(".nav-item a").removeClass('button-primary');
        $(this).addClass('button-primary');
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top - 80 + 'px'},'slow');
    });
});