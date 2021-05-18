$(function(){
    var banks = [
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-01.html","image": "groupbuy/images/20210518_.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-08.html","image": "groupbuy/images/20210518_bank02.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-02.html","image": "groupbuy/images/20210518_bank03.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-04.html","image": "groupbuy/images/20210518_bank04.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-07.html","image": "groupbuy/images/20210518_bank05.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-12.html","image": "groupbuy/images/20210518_bank06.png"}
    ];
    var bankHtml = appendBanks(banks,'arrow');
    option = {
        speed: 800,
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    };

    //滑鼠滾動後右側選單出現
    scrollToShow();

    $('.wrapper').eq(0).append(bankHtml);

    //啟動輪播
    swiperBank(option);
});