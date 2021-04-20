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
        offset = $(element).offset().top - 120;
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
* 文字多行省略最後面加入 "..."
用於商品區的商品名稱
storg 商品標題 - 字多餘 50個
*/

function productSubstr() {
    var proText = $('.bg01').find('storg');
    var proText2 = $('.bg01').find('h4');

    $.each(proText,function(i,v){
        var text = v.textContent;
        var text2 = $(proText2).eq(i).text();
        var textNum = chineseTansform(text);
        var text2Num = chineseTansform(text2);
        if (textNum > 50) {
            $(v).text(text.substr(0,50) + '...');
        }
        if (text2Num > 30) {
            $(proText2).eq(i).text(text2.substr(0,30) + '...');
        }
    });
}

//轉換1個中文文字長度為2個英文字(解決字串截取計算錯誤問題)
function chineseTansform (str) {
    return str.replace(/[^\x00-\xff]/g,"xx").length;
}

//新增css嵌入檔案(共用類font icon或特殊字型等等)
function cssLoader(url) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}

//新增js嵌入檔案
function jsLoader(url) {
    let body = document.getElementsByTagName('body')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    body.appendChild(script);
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

//右側選單滑鼠滾到後顯示
const scrollToShow = () =>  {
    let rightbtn = $('body').find('.rightbtn');

    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop();

        if (scrollTop < 300) {
            $(rightbtn).fadeOut('fast');
        } else {
            $(rightbtn).fadeIn('slow');
        }
    });
}

//右側選單永遠顯示
const rigntbtnShow = () => {
    let rightbtn = $('body').find('.rightbtn');
    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop();

        if (scrollTop < 300) {
            $(rightbtn).show();
        }
    });
}

const scrollFadeIn = () => {
    $.each($('.wrapper'),function(i,v){
        $(window).scroll(function(){
            const scrollTop = $(window).scrollTop();
           if ($('.wrapper').position() > scrollTop) {
                $('.wrapper').addClass('slide-up').siblings('.wrapper').removeClass('slide-up');
           }
        });
    });
}

$(document).ready(function() {
    let rightbtn = $('body').find('.rightbtn');
    let fixBtn = $('body').find('.fix_btn');
    let rightLink = $(rightbtn).find('.btn_01');
    let fixLink = $(fixBtn).find('ul li a');
    let fontIcon = "";

    //嵌入 font awesome icon 連結
    fontIcon = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";
    cssLoader(fontIcon);

    //商品名稱太長省略文字
    productSubstr();

    scrollFadeIn();
    
    $(document).on('click', 'a[href^="#"]', function (e) {
        if ($($.attr(this, 'href')).length > 0) {
            e.preventDefault();
            goAnchor($($.attr(this, 'href')));
        }
    });
     
    $(rightbtn).append("<i class='fas fa-angle-double-right toggle-rightbn'></i>");
    $(rightbtn).find('.toggle-rightbn').click(function(){
        $(rightbtn).find('.actbtn').toggleClass('toggleR');
        $('div#gotop').toggleClass('toggleR');
        $(rightbtn).find('i').toggleClass('fas fa-angle-double-right fas fa-angle-double-left');
    });
});

