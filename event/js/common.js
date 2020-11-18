//判斷為手機裝置(電腦尺寸在768以下進行手機裝置判斷)
const isMobile = () => {
    let ua = navigator.userAgent;
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    if ($(window).width() > 768) {
        isMobile = false;
    } else {
        isMobile = true;
    }
    return isMobile;
}


/*
* 錨點
* 使用方法: 
* 1. 回到頂端 - goAnchor();
* 2. 到其他位置 - goAnchor($(element));
* $(element) -----> 選擇器(區域)名稱
*/
const goAnchor = (element = null) => {
    let offset = '';

    if (element === null) {
        offset = 0;
    } else {
        offset = $(element).offset().top - 60;
    }
    $('html,body').animate({'scrollTop': offset},'swing');
}

/*
* 創建按鈕或輪播的 li 
* 使用方法: appendItems(items,element,type);
items - 共有幾張圖片
element - 要擴增的區域
imageUrl - 圖片資料夾連結 如: https://events.cdn-tkec.tw/events_net/events_net/misuper/images/
type - 如果是輪播要用的 type == 'slider'

appendItems(miTypes,$(miNav)imageUrl); 生成錨點按鈕
appendItems(miSliderImages,$(sliderContainer),imageUrl,'slider'); 生成輪播圖片
*/
const appendItems = (items,element,imageUrl,type = '') => {
    let typeHtml = '';
    let hrefHtml = '';
    let item = '';
    let images = '';
    let typeID = '';
       
    if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {

            if (type == 'slider') {
                hrefHtml = items[i].url;
            } else {
                hrefHtml = '#';
            }

            item = items[i].title;
            images = imageUrl + items[i].image + ".png";
            typeID = items[i].id;
            typeHtml = "<li><a data-id='" + typeID +"' href='"+ hrefHtml +"' target='_blank'><img src='"+ images +"' alt='"+ item +"'>" +  item + "</a></li>";
            element.find("ul").append(typeHtml);
        }
    } else {
        console.log("陣列不存在");
    }
}

/*
* 新增上面每個item的data-id
* data-id = $('.protitle').find('a') 商品區的id
* id相同可進行錨點
* 使用方法: addProID($(element))
*/
const addProID = (element) => {
    if ($('.protitle').find('a').length > 0) {
        $.each($('.protitle').find('a'),function(i,v){
            let id = $('.protitle').find('a').attr('id');
            element.find('li').children('a').attr('data-id',id);
        });
    } else {
        console.log("商品標題不存在");
    }
}

$(document).ready(function() {
    const rightbtn = $('body').find('.rightbtn');
    const fixBtn = $('body').find('.fix_btn');

    //右側選單滑鼠滾到後顯示
    $(rightbtn).hide();
    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop();

        if (scrollTop < 300) {
            $(rightbtn).fadeOut('fast');
        } else {
            $(rightbtn).fadeIn('slow');
        }
    });

    //調整手機版商品列表錨點位移距離 fix_btn
    $(fixBtn).find('ul li a').click(function(e){
        e.preventDefault();
        let proId = $(this).attr('href');
        if (proId.length > 0) {
            goAnchor($(proId));
        }
     });

      //調整右側選單錨點位移距離 rightbtn
    $(rightbtn).find('.btn_01').click(function(e){
        e.preventDefault();
        let proRightId = $(this).attr('href');
        if (proRightId.length > 0) {
            goAnchor($(proRightId));
        }
     });
});

