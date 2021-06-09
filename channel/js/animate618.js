$(function(){
    var banks = [
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-01.html","image": "201708_thousand/images/bank01.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-08.html","image": "201708_thousand/images/bank02.png"},
        // {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-02.html","image": "201708_thousand/images/bank03.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-04.html","image": "201708_thousand/images/bank04.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-03.html","image": "201708_thousand/images/bank05.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/bank.html","image": "201708_thousand/images/bank06.png"}
    ];
    var bankHtml = slideForSlick(banks);
    
    
    //滑鼠滾動後右側選單出現
    scrollToShow();

    $('.wrapper').eq(0).append(`
        <div class='animate-group'>
            <span class='sub-title'><img src='https://events.cdn-tkec.tw/events_net/events_net/201710_nbchannel/images/20210609_618logo.png'></span>
            <h2><img src='https://events.cdn-tkec.tw/events_net/events_net/201710_nbchannel/images/20210609_TT.png'></h2>
            <p class='product'><img src='https://events.cdn-tkec.tw/events_net/events_net/201710_nbchannel/images/20210609_PP.png'></p>
        </div>
    `);


    setTimeout(function(){
        $('.animate-group').after(bankHtml);
        $("#bank-area ul").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                     slidesToShow: 2,
                    }
                }
            ]
        });
    },50);
});