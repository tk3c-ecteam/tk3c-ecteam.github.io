﻿//判斷為手機裝置(電腦尺寸在768以下進行手機裝置判斷)
function isMobile() {
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
function goAnchor(element = null) {
    let offset = '';

    if (element === null) {
        offset = 0;
    } else {
        offset = $(element).offset().top - 25;
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
function appendItems(items,element,imageUrl,type = '') {
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
function addProID(element){
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
function addLeftAside() {
    let leftbtnHtml = 
    `<div class="leftbtn">
        <div class="side-content">
            <a href="#" class="bank" target="_blank">銀行優惠</a>
            <a href="https://www.tk3c.com/dic2.aspx?cid=12504&aid=22579&hid=114972&strPreView=y" target="_blank">三菱|獻給一家之煮的好禮</a>
            <a href="https://www.tk3c.com/dic2.aspx?cid=108783&aid=22319&hid=114940" target="_blank">THERMOS 四折起</a>
            <a href="https://events.tk3c.com/events_net/Yeelight_event/index.html" target="_blank">Yeelight母親節</a>
            <a href="https://www.tk3c.com/dic2.aspx?cid=83185&aid=22281&hid=114911" target="_blank">母親節感謝季加碼活動</a>
            <a href="https://www.tk3c.com/dic2.aspx?cid=842&aid=13880&hid=114919" target="_blank">寵媽有禮(舒壓家電)</a>
            <a href="https://www.tkec.com.tw/dic2.aspx?cid=14719&aid=5959&hid=114923" target="_blank">Logitech羅技-美力放異彩</a>
            <a href="#" target="_blank">回主會場</a>
        </div>
        <a class="top"></a>
    </div>`;
    let mobileHtml = '<li> <a href="https://events.tk3c.com/events_net/events_net/banks/bank.html" target="_blank">銀行優惠</a></li>' +
    '<li> <a href="https://www.tk3c.com/dic2.aspx?cid=12504&aid=22579&hid=114972&strPreView=y" target="_blank">三菱|獻給一家之煮的好禮</a></li>' +
    '<li><a href="https://www.tk3c.com/dic2.aspx?cid=108783&aid=22319&hid=114940" target="_blank">THERMOS 四折起</a></li>'+
    '<li><a href="https://events.tk3c.com/events_net/Yeelight_event/index.html" target="_blank">Yeelight母親節</a></li>' + 
    '<li><a href="https://www.tk3c.com/dic2.aspx?cid=83185&aid=22281&hid=114911" target="_blank">母親節感謝季加碼活動</a></li>' +
    '<li> <a href="https://www.tk3c.com/dic2.aspx?cid=842&aid=13880&hid=114919" target="_blank">寵媽有禮(舒壓家電)</a></li>' + 
    '<li> <a href="https://www.tkec.com.tw/dic2.aspx?cid=14719&aid=5959&hid=114923" target="_blank">Logitech羅技-美力放異彩</a></li>';

    if ($('.rightbtn').length > 0) {
        $('.rightbtn').after(leftbtnHtml);
        $('.navibar_m_btn ul').append(mobileHtml);
        $('.fix_btn ul').append(mobileHtml);
        scrollToShow();
    }
    
    $('.navibar_m_btn span').text('快速選單');
    $('.fix_btn span').text('快速選單');
}

//右側選單滑鼠滾到後顯示
function scrollToShow(){
    let rightbtn = $('body').find('.rightbtn');

    if (isMobile() === false) {
        $('.leftbtn .top').fadeOut('fast');
        $(window).scroll(function(){
            const scrollTop = $(window).scrollTop();
    
            if (scrollTop < 300) {
                $(rightbtn).fadeOut('fast');
                $('.leftbtn').fadeOut('fast');
                $('.leftbtn .top').fadeOut('fast');
            } else {
                $(rightbtn).fadeIn('slow');
                $('.leftbtn').fadeIn('slow');
                $('.leftbtn .top').fadeIn('slow');
            }
        });
    }
}

//右側選單永遠顯示
function rigntbtnShow(){
    let rightbtn = $('body').find('.rightbtn');
    $(window).scroll(function(){
        const scrollTop = $(window).scrollTop();

        if (scrollTop < 300) {
            $(rightbtn).show();
        }
    });
}

//滑鼠滾動後顯示物件
function scrollFadeIn() {
    let scrollTop = 0;
    let scrollPos = 0;
    $(window).scroll(function(){
        scrollTop = $(this).scrollTop() + $(this).innerHeight();
        $('.wrapper').each(function(){
            scrollPos = $(this).offset().top + $(this).outerHeight() - 800;
            if (scrollPos < scrollTop) {
               if ($(this).css('opacity') == 0) {
                   $(this).fadeTo('500',1);
               }
           } else {
            if ($(this).css('opacity') == 1) {
                $(this).fadeTo('500',0);
            }
           }
        });
    });
}

function scrollUp(element){
    $(window).scroll(function(){
        //滑鼠滾動時更新背景移動位置
       let scrollTop = $(window).scrollTop();

       if (scrollTop > 300) {
           $(element).css({'transform': 'translateY('+ (scrollTop + 200) + 'px' +')'});
       } else {
           $(element).css({'transform': 'translateY('+ -(scrollTop + 200) + 'px' +')'});
       }
    });
}

//價錢百位數加上逗號
function addNumComma(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//新增銀行區
function appendBanks(banks = '',type = '') {
    if (banks == '') {
        banks = [
            {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-01.html","image": "groupbuy/images/202100503_bank_01.png"},
            {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-12.html","image": "groupbuy/images/20210416_bank_02.png"},
            {"url": "https://events.tk3c.com/events_net/events_net/banks/202105/web/bank-02.html","image": "groupbuy/images/20210416_bank_03.png"},
        ];
    }
    let imagePath = "https://events.tk3c.com/events_net/events_net/";
    let bankBannerHtml = "<div id='bank-area'>" +
    "<div class='bank-container'>" +
    "<div class='swiper-wrapper'>";
    for (let x = 0; x < banks.length;x++) {
        bankBannerHtml += "<div class='swiper-slide'><a href='"+ banks[x].url +"' target='_blank'><img src='"+ imagePath + banks[x].image +"'></a></div>";
    }

    bankBannerHtml += "</div>";

    //顯示頁數(下方點點)
    if (type == 'page') {
        bankBannerHtml += "<div class='swiper-pagination'></div>";
    }

    //顯示上下頁(左右箭頭)
    if (type == 'arrow') {
        bankBannerHtml += "<div class='swiper-button-prev'></div><div class='swiper-button-next'></div>";
    }

    //顯示左右箭頭與頁數
    if (type == 'all') {
        bankBannerHtml += "<div class='swiper-pagination'></div>" + 
        "<div class='swiper-button-prev'></div>" +
        "<div class='swiper-button-next'></div>";
    }

    bankBannerHtml += "</div></div>";
    return bankBannerHtml;
}

//啟動輪播
function swiperBank(options = '',element = '') {
    if (options == '') {
        options = {
            autoplay: {
                delay: 3000
            }
        };
    }

    //預設為銀行區塊
    if (element == '') {
        element = '.bank-container';
    }
    setTimeout(function(){
        new Swiper(element,options);
      },400);
}

//新增fb粉絲團
function addFBArea() {
    let location = window.location.pathname.split('/');
    let fbfansHtml ="<a href='https://www.facebook.com/TDdd331/' target='_blank' class='fb-fans'><img src='https://events.tk3c.com/events_net/events_net/groupbuy/images/20210416_bt_fb.png'></a>";

    if (location[2] == '201708_thousand') {
        //家用生活頻道頁
        $('.wrapper').append(fbfansHtml);
    } else {
        $('.wrapper').eq(1).append(fbfansHtml);
    }
}

//新增看更多按鈕
function readMore(links) {
    for (let i = 0; i < links.length; i++) {
        $('.protitle a').eq(i).attr('href',links.url);
    }
}

//使用slick 輪播
function slideForSlick() {
    jsLoader('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
    cssLoader('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
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

    addFBArea();
});

