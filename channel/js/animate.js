$(function(){
    //新增母親節主會場和家電分會場導入連結
    var actbtn= $('.rightbtn .actbtn');
    var navBarm = $('.navibar_m_btn ul');
    var momSaleHtml = "<a href='https://events.tk3c.com/events_net/mom2021/index.html?ec=seasonsale'><div class='link1'>【老媽!你被開除啦!】</div></a>" + 
    "<a href='https://events.tk3c.com/events_net/groupbuy/index.aspx'><div class='link1'>【老媽!出去浪!】</div></a>";
    var momSaleMobile = "<li><a href='https://events.tk3c.com/events_net/mom2021/index.html?ec=seasonsale'><div class='link1'>【老媽!你被開除啦!】</div></a></li>" + 
    "<li><a href='https://events.tk3c.com/events_net/groupbuy/index.aspx'><div class='link1'>【老媽!出去浪!】</div></a></li>";

    var animateHtml = "<div class='animate-group'>" + 
    "<div class='aside-left'>" +
    "<p class='mother'><img src='https://events.tk3c.com/events_net/events_net/seasonsale/images/20210427_mon.png'></p>"+
    "<p class='product'><img src='https://events.tk3c.com/events_net/events_net/seasonsale/images/20210427_s6.png'></p></div>" +
    "<div class='title-area'>"+
    "<h2><img src='https://events.tk3c.com/events_net/events_net/seasonsale/images/20210427_tt.png'></h2>" +
    "<h4 class='sub-title'><img src='https://events.tk3c.com/events_net/events_net/seasonsale/images/20210427_tt2.png'></h4></div>" + 
    "<div class='aside-right'>" +
    "<p class='child'><img src='https://events.tk3c.com/events_net/events_net/seasonsale/images/20210427_kid.png'></p>"+
    "<p class='product'><img src='https://events.tk3c.com/events_net/events_net/seasonsale/images/20210427_potato.png'></p></div>" +
    "</div>";

    var animateGroup = $('.animate-group');
    var asideLeft = $('.animate-group .aside-left');

   $(actbtn).prepend(momSaleHtml);
   $(navBarm ).prepend(momSaleMobile);
   $('.wrapper').eq(0).append(animateHtml);

    setTimeout(() => {
        $('.animate-group .aside-left .mother').css('opacity',1);
        $('.animate-group .aside-left .product').css('opacity',1);
        $('.animate-group .title-area').css('opacity',1);
        $('.animate-group .aside-right .child').css('opacity',1);
        $('.animate-group .aside-right .product').css('opacity',1);
    },800);
   });