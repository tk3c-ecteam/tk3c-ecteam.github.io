//母親節家電分會場
$(function(){
    let rightbtn = $('.rightbtn');
    let leftbtn = $('.leftbtn .side-content');
    let momHtml = "<a href='https://events.tk3c.com/events_net/groupbuy/index.aspx' target='_blank'>【老媽!不要動!】</a>";
    let animateHtml = "<div class='animate-group'>" + 
    "<div class='aside-left'>" +
    "<p class='child'><img src='https://events.tk3c.com/events_net/events_net/groupbuy/images/20210427_son.png'></p>"+
    "<p class='product'><img src='https://events.tk3c.com/events_net/events_net/groupbuy/images/20210427_house.png'></p>" +
    "<p class='dog'><img src='https://events.tk3c.com/events_net/events_net/groupbuy/images/20210427_dog.png'></p></div>" +
    "<div class='title-area'>"+
    "<h2><img src='https://events.tk3c.com/events_net/events_net/groupbuy/images/20210427_title.png'></h2>" +
    "<h4 class='sub-title'><img src='https://events.tk3c.com/events_net/events_net/groupbuy/images/20210427_subtitle.png'></h4></div>" + 
    "<div class='aside-right'>" +
    "<p class='mother'><img src='https://events.tk3c.com/events_net/events_net/groupbuy/images/20210427_mom.png'></p>"+
    "<p class='product'><img src='https://events.tk3c.com/events_net/events_net/groupbuy/images/20210427_car.png'></p></div>" +
    "</div>";
    let mobileHtml = "<li><a href='https://events.tk3c.com/events_net/mom2021/index.html?ec=groupbuy' target='_blank'>【老媽!你被開除啦!】</a></li>" +
    "<li><a href='https://events.tk3c.com/events_net/groupbuy/index.aspx' target='_blank'>【老媽!不要動!】</a></li>";

    //顯示左側選單
    addLeftAside();
    $('.leftbtn .side-content a').last().text('【老媽!你被開除啦!】');
    $('.leftbtn .side-content a').last().attr('href','https://events.tk3c.com/events_net/mom2021/index.htmll?ec=groupbuy');
    $('.leftbtn .bank').attr('href','https://events.tk3c.com/events_net/events_net/banks/bank.html');
    $('.leftbtn .side-content').prepend(momHtml);

    //新增動畫區
    $('.wrapper').eq(0).append(animateHtml);

    //新增手機版列表
    $('.navibar_m_btn ul').prepend(mobileHtml);
    $('.navibar_m_btn span').text('綜合選單');

    setTimeout(() => {
        $('.aside-left .child').fadeIn('slow');
        $('.aside-left .dog').css('opacity',1);
        $('.aside-right .mother').css('opacity',1);
        $('.aside-right .product').css('opacity',1);
    }, 1000);
});