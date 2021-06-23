$(function() {
    var banks = [
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-01.html","image": "201710_nbchannel/images/0623bank03.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-08.html","image": "201710_nbchannel/images/0623bank01.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-04.html","image": "201710_nbchannel/images/0623bank02.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/202106/web/bank-03.html","image": "201710_nbchannel/images/0623bank05.png"},
        {"url": "https://events.tk3c.com/events_net/events_net/banks/bank.html","image": "201710_nbchannel/images/0623bank04.png"}
    ];    
    var bankHtml = slideForSlick(banks);

    //滑鼠滾動後右側選單出現
    scrollToShow();

    $('.wrapper').eq(0).append(`
        <div class='animate-group'>
            <h2><img src='https://events.cdn-tkec.tw/events_net/events_net/201710_nbchannel/images/20210526_TT2.png'></h2>
            <p class='sub-title'><img src='https://events.cdn-tkec.tw/events_net/events_net/201710_nbchannel/images/20210526_count.png'></p>
        </div>

        <section class="specialbox">
            <a href="https://www.tk3c.com/dictitleurl.aspx?cid=115294" target="_blank"><img src="https://events.cdn-tkec.tw/events_net/events_net/201710_nbchannel/images/20210623_sp1.png"></a>
            <a href="https://www.tk3c.com/dictitleurl.aspx?cid=115295" target="_blank"><img src="https://events.cdn-tkec.tw/events_net/events_net/201710_nbchannel/images/20210623_sp2.png"></a>
        </section>
    `);

    $('.specialbox').after(bankHtml);
    //啟動輪播
    slickForBank();
});