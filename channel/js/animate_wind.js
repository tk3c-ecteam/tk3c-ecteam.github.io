$(function(){
    var banks = [
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-01.html","image": "201708_thousand/images/20210511_bank1.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-08.html","image": "201708_thousand/images/20210511_bank2.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-02.html","image": "201708_thousand/images/20210511_bank3.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-04.html","image": "201708_thousand/images/20210511_bank4.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-07.html","image": "201708_thousand/images/20210511_bank5.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-12.html","image": "201708_thousand/images/20210511_bank6.png"}
    ];
    var bankHtml = appendBanks(banks,'arrow');
    option = {
        speed: 800,
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    };
    $('.wrapper').prepend(bankHtml);
    //啟動輪播
    swiperBank(option);
    
    $('.wrapper').prepend("<div class='animate-group'><h2><img src='https://events.cdn-tkec.tw/events_net/events_net/201708_thousand/images/20210511_TT.png'></h2></div>");
});