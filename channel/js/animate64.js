$(function(){
    var banks = [
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-01.html","image": "201708_thousand/images/bank01.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-08.html","image": "201708_thousand/images/bank02.png"},
        // {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-02.html","image": "201708_thousand/images/bank03.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-04.html","image": "201708_thousand/images/bank04.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-03.html","image": "201708_thousand/images/bank05.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/bank.html","image": "201708_thousand/images/bank06.png"}
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
    
    $('.wrapper').prepend(`
        <div class='animate-group'>
            <h2><img src='https://events.cdn-tkec.tw/events_net/events_net/201708_thousand/images/title.png'></h2>
            <h4><img src='https://events.cdn-tkec.tw/events_net/events_net/201708_thousand/images/title_s_01.png'></h4>
        </div>
    `);
});