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
        offset = $(element).offset().top;
    }
    $('html,body').animate({'scrollTop': offset},'swing');
}

/*
* 創建按鈕或輪播的 li 
* 使用方法: appendItems(items,element,type);
items - 共有幾張圖片
element - 要擴增的區域
type - 如果是輪播要用的 type == 'slider'

appendItems(miTypes,$(miNav)); 生成錨點按鈕
appendItems(miSliderImages,$(sliderContainer),'slider'); 生成輪播圖片
*/
const appendItems = (items,element,type = '') => {
    let typeHtml = '';
    let hrefHtml = '';
    let item = '';
    let images = '';
    let typeID = '';
    let imageUrl = "https://events.cdn-tkec.tw/events_net/events_net/misuper/images/";
       
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

/*
** 新增左側廣告區域
* 若需要使用 .leftbtn => display: block
即可顯示
*/
const addLeftAside = () => {
    let leftbtnHtml = 
    `<div class="leftbtn">
        <div class="side-content">
            <a href="#" target="_blank">銀行優惠</a>
            <a href="#" target="_blank">搶紅包</a>
            <a href="#" target="_blank">33333333</a>
            <a href="#" target="_blank">444444</a>
        </div>
        <div class="other-content">
            <a href="#" target="_blank">會場1</a>
            <a href="#" target="_blank">會場2</a>
            <a href="#" target="_blank">會場3</a>
            <a href="#" target="_blank">會場4</a>
        </div>
    </div>`;

    if ($('.rightbtn').length > 0) {
        $('.rightbtn').after(leftbtnHtml);
    }
}

$(document).ready(function() {
    const rightbtn = $('body').find('.rightbtn');

    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop();

        if (scrollTop < 300) {
            $(rightbtn).fadeOut('fast');
        } else {
            $(rightbtn).fadeIn('slow');
        }
    });

    $(rightbtn).find('.actbtn').append("<span class='toggle-rightbn'><<</span>");
    $(rightbtn).find('.toggle-rightbn').click(function(){
        $(rightbtn).toggleClass('toggleR');
    });
});

