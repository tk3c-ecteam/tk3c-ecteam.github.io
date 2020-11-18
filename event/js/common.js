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
        offset = $(element).offset().top - 70;
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

/*
* 選單滾動後顯示目前位置功能
* 使用方法: scrollTab();
選單tab的class預設為: .tab-container, .-tab-content
若有不同請加入參數
如: scrollTab('#tab','.content)
參數說明: 第一個為tab頁籤(按鈕)區域; 第二個為tab要顯示的內容的那幾個區塊
*/
function scrollTab(tabContianer = '.tab-container',tabContent = '.tab-content') {
    $(tabContianer).find("li").eq(0).addClass('tab-active');
    $.each($(tabContianer).find("li"),function(i,v){
      let contentArea = $(tabContianer).find("a").eq(i).attr('href');
  
        $(window).scroll(function(){
            let $this = $(this);
            let scrollOffset = $this.scrollTop();
            let contentOffset = $(contentArea).position().top -85;
            let contentHeight = $(tabContent).height();
            if (scrollOffset >= contentOffset && scrollOffset < contentOffset + contentHeight) {
              $(tabContianer).find("li").eq(i).addClass('tab-active').siblings('li').removeClass('tab-active');
            }
          });
      });
}

$(document).ready(function() {
    let rightbtn = $('body').find('.rightbtn');
    let fixBtn = $('body').find('.fix_btn');
    let rightLink = $(rightbtn).find('.btn_01');
    let fixLink = $(fixBtn).find('ul li a');

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

    //錨點位移距離 fix_btn rightbtn
    rightLink.add(fixLink).click(function(e){
        e.preventDefault();
        let proId = $(this).attr('href');
        if (proId.length > 0) {
            goAnchor($(proId));
        }
     });
});

