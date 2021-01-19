$(function() {
    var airpodsmax = $('#airpodsmax');
    var picktype = $(airpodsmax).find('.picktype');
    var pickcolor = $(airpodsmax).find('.pickcolor');
    var addpurchase = $(airpodsmax).find('.addpurchase');
    var pickspec = $(airpodsmax).find('.pickspec');
    var actarea = $(airpodsmax).find('.actarea');
    var rightpd = $(airpodsmax).find('.right_pd');
    var autom = '';

    $(picktype).hide();
    $(pickspec).hide();

    //每位顧客限購先隱藏
    $(rightpd).find('.wording h5').hide();
    //贈品區塊先隱藏
    $(rightpd).find('.pikegift').hide();
    //身分驗證先隱藏
    $(actarea).find('.all_register').hide();
    $(actarea).find('.actbtn').text('商品確認');

    //加購區塊先隱藏
    $(addpurchase).hide();

    //sticky滾動固定位置

    if (isMobile() === false) {
        $('.pd_main').addClass('sticky');
        var sticky = $('.sticky');
        Stickyfill.add(sticky);
    }

    changeAirPodColor('dimensioncolorspace_gray');

    $(addpurchase).find('li').append("<input name='check[]' class='check' type='checkbox' style='display:none;'>");

    $(pickcolor).find('input').on('click', function() {
        autom = $(this).data('autom');
        changeAirPodColor(autom);
    });


    $(actarea).find('.actbtn').click(function(){
        autom = $(this).data('autom');
        window.open(goToColorPage(autom),"_blank");
    });

    $(addpurchase).find('li').click(function() {
        $(addpurchase).find('b a').not(this).text('我要加購');
        $(addpurchase).find('.check').not(this).attr('checked', false);

        // .buy-active點選加購的樣式class
        $(this).addClass('buy-active').siblings().removeClass('buy-active');
        $(this).find('b a').text('已加購');
        $(this).find('.check').attr('checked', 'checked');
    });
});

function changeAirPodColor(type) {
    var pdmainImg = $(airpodsmax).find('.pd_main li img');
    var airPodImage = $(airpodsmax).find('.pd_inside li').eq(0).find('img');
    var airPod2Iamge = $(airpodsmax).find('.pd_inside li').eq(1).find('img');
    var url = 'https://events.cdn-tkec.tw/events_net/events_net/preorder/images/airpodsmax/product/';
    var colorImageUrl = '';
    var colorAirPod = '';
    var colorAirPod2 = '';

    switch (type) {
        case 'dimensioncolorspace_gray':
            colorImageUrl = url + 'spacegray/airpods-max-select-spacegray-202011.png';
            colorAirPod = url + 'spacegray/airpods-max-spacegray-witb.jpg';
            colorAirPod2 = url + 'spacegray/airpods-max-smartcase-spacegray-witb.jpg';
            break;

        case 'dimensioncolorsilver':
            colorImageUrl = url + 'silver/airpods-max-select-silver-202011.png';
            colorAirPod = url + 'silver/airpods-max-silver-witb.jpg';
            colorAirPod2 = url + 'silver/airpods-max-smartcase-silver-witb.jpg';
            break;

        case 'dimensioncolorgreen':
            colorImageUrl = url + 'green/airpods-max-select-green-202011.png';
            colorAirPod = url + 'green/airpods-max-green-witb.jpg';
            colorAirPod2 = url + 'green/airpods-max-smartcase-green-witb.jpg';
            break;

        case 'dimensioncolorskyblue':
            colorImageUrl = url + 'skyblue/airpods-max-select-skyblue-202011.png';
            colorAirPod = url + 'skyblue/airpods-max-skyblue-witb.jpg';
            colorAirPod2 = url + 'skyblue/airpods-max-smartcase-skyblue-witb.jpg';
            break;

        case 'dimensioncolorpink':
            colorImageUrl = url + 'pink/airpods-max-select-pink-202011.png';
            colorAirPod = url + 'pink/airpods-max-pink-witb.jpg';
            colorAirPod2 = url + 'pink/airpods-max-smartcase-pink-witb.jpg';
            break;
    }

    $(pdmainImg).attr('src', colorImageUrl);
    $(airPodImage).attr('src', colorAirPod);
    $(airPod2Iamge).attr('src', colorAirPod2);
}

function goToColorPage(type) {
    var url = '';
    switch (type) {
        case 'dimensioncolorspace_gray':
        url = 'http://www.tk3c.com/pt.aspx?pid=213950-vip';
        break;
    
        case 'dimensioncolorsilver':
        url = 'http://www.tk3c.com/pt.aspx?pid=213951-vip';
        break;

        case 'dimensioncolorgreen':
        url = 'http://www.tk3c.com/pt.aspx?pid=213954-vip';
        break;

        case 'dimensioncolorskyblue':
        url = 'http://www.tk3c.com/pt.aspx?pid=213952-vip';
        break;

        case 'dimensioncolorpink':
        url = 'http://www.tk3c.com/pt.aspx?pid=213953-vip';
        break;
    }

    return url;
}

//判斷為手機裝置
function isMobile() {
    var ua = navigator.userAgent;
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    return isMobile;
}