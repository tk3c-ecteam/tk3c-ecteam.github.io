$(function(){
    let pcGaming = $('#pc-gaming');
    $('.aside-container .go-top').text('GO TOP');

removeGoTop();
mobileReload();
$('.wrapper').eq(1).css({
    'max-width': '1144px',
    'margin': '0 auto',
    'text-align': 'center'
});

    $('.protitle').eq(1).append("<a class='more' href='' target='_blank'><img src='https://events.tk3c.com/events_net/events_net/pcdiy-gaming/images/cta.png'></a>");

    //彈出視窗
    $('.news-box .price').on('click',function(){
        Swal.fire({
            title: "<p style='margin-bottom:5px';></p>活動辦法",
            html: "<ul style='text-align:left;'><li style='margin-bottom:20px';>*活動期間(2022/1/19~2022/2/11)內，於燦坤線上購物網站購買</li>" +
            "<li style='margin-bottom:20px';>組裝機單筆發票滿一萬且後續未退貨退款者，即可回饋2%購物金。</li>" +
            "<li style='margin-bottom:20px';>*本活動免登錄，符合活動資格者將於2022/2/25統一回饋至帳戶。</li>" +
            "<li style='margin-bottom:20px';>*若有取消、退貨、退款或換貨等情事或有其他爭議者，燦坤線上購物將逕行取消資格，恕不另行通知。</li>" + 
            "<li style='margin-bottom:20px';>*活動未盡事宜以燦坤線上購物公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>",
            confirmButtonText: "<a style='color:white' href='https://www.tk3c.com/events/eventgift.aspx?&ec=pcdiy-gaming' target='_blank'>前往活動專區</a>",
            showCloseButton: true,
            confirmButtonColor:'#208c82'
          });
    });
});