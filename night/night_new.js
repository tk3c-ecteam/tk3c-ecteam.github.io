$(function(){
    $(document).on('click', 'a[href^="#"]', function (e) {
        if ($($.attr(this, 'href')).length > 0) {
            e.preventDefault();
            $('html,body').animate({'scrollTop': $($.attr(this, 'href')).offset().top - 80},'swing');
        }
    });
});