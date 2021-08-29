$(function(){
    $('.wrapper').eq(0).append(`
        <div class="product-box">
           <h2><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/t.png"></h2>
            <ul>
                <li><a href="" target=""><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/b1.png"></a></li>
                <li><a href="" target=""><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/b2.png"></a></li>
                <li><a href="" target=""><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/b3.png"></a></li>
                <li><a href="" target=""><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/b4.png"></a></li>
                <li><a href="" target=""><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/b5.png"></a></li>
                <li><a href="" target=""><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/b6.png"></a></li>
                <li><a href="" target=""><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/b7.png"></a></li>
                <li><a href="" target=""><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/b8.png"></a></li>
            </ul>
        </div>
    `);

    $('body').prepend(`
    <span class="bubble"><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/bubble1.png"></span>
    <span class="bubble"><img src="https://events.tk3c.com/events_net/events_net/seasonsale/images/20210907/bubble2.png"></span>
    `);

    let status = false;
    $('.rightbtn .link1').on('click',function(){
        status = true;
        $('.bubble').remove();
    });
});