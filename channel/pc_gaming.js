$(function(){
    let pcGaming = $('#pc-gaming');
    $('.aside-container .go-top').text('GO TOP');

removeGoTop();
mobileReload();
$('.wrapper').eq(1).css({
    'max-width': '1144px',
    'margin': '0 auto',
    'text-align': 'center'
});

    $('.protitle').eq(1).append("<a class='more' href='' target='_blank'><img src='https://events.tk3c.com/events_net/events_net/pcdiy-gaming/images/cta.png'></a>");

});