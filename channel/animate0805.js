jQuery(function($) {
    jQuery(document).ready(function() {
    var banks = [
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202108/web/bank-01.html","image": "201710_nbchannel/images/20210730_bank01.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202108/web/bank-03.html","image": "201710_nbchannel/images/20210730_bank02.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202108/web/bank-02.html","image": "201710_nbchannel/images/20210730_bank03.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202108/web/bank-07.html","image": "201710_nbchannel/images/20210730_bank04.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/bank.html","image": "201710_nbchannel/images/20210730_bank05.png"}
    ];
    var bankHtml = '';
    //滑鼠滾動後右側選單出現
    scrollToShow();

    $('.wrapper').eq(0).append(`
        <div class='animate-group'>
        <p class='man'><img src='https://events.tk3c.com/events_net/events_net/201710_nbchannel/images/20210730_man.png'></p>
        <p class='cloud-left'><img src='https://events.tk3c.com/events_net/events_net/201710_nbchannel/images/20210730_cloudleft.png'></p>
        <p class='gril'><img src='https://events.tk3c.com/events_net/events_net/201710_nbchannel/images/20210730_woman.png'></p>
        <p class='cloud-right'><img src='https://events.tk3c.com/events_net/events_net/201710_nbchannel/images/20210730_cloudright.png'></p>
        </div>
    `);

    //活動輪播
    bankHtml = slideForSlick(banks);
    $('.animate-group').after(bankHtml);

    $("#bank-area ul").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                 slidesToShow: 2,
                }
            },
        ]
    });


    //新增滾動背景效果
    var scrollbg = '<span class="scrollbg bg-effect"><img src="https://events.tk3c.com/events_net/events_net/201710_nbchannel/images/20210730_leftbg.png"></span>' + 
    '<span class="scrollbgend bg-effect"><img src="https://events.tk3c.com/events_net/events_net/201710_nbchannel/images/20210730_rightbg.png"></span>';
    $('body').prepend(scrollbg);

    scrollUp($('.bg-effect'));
});
});