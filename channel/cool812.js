jQuery(function($) {
    jQuery(document).ready(function() {
    var banksAug = [
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202108/web/bank-01.html","image": "201708_thousand/images/20210811/bank01.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202108/web/bank-03.html","image": "201708_thousand/images/20210811/bank02.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202108/web/bank-02.html","image": "201708_thousand/images/20210811/bank03.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202108/web/bank-07.html","image": "201708_thousand/images/20210811/bank04.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/bank.html","image": "201708_thousand/images/20210811/bank05.png"}
    ];
    var bankHtml = "";
    bankHtml = appendBanks(banksAug,'arrow');

    scrollToShow();

    $('.wrapper').prepend(`<div class="animate-group">
        <h2><img src="https://events.tk3c.com/events_net/events_net/201708_thousand/images/20210811/kv_title.png"></h2>
        <p class="product"><img src="https://events.tk3c.com/events_net/events_net/201708_thousand/images/20210811/sp_01.png"></p>
    </div>`);

    $('.animate-group').after(bankHtml);
    //啟動輪播
    swiperBank();

    setTimeout(() => {
        $('.animate-group .product').css('opacity',1);
    }, 2400);
    });
});