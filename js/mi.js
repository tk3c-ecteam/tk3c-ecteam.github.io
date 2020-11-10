$(function(){
    let miContainer = $('#mi-container');
    let miNav = $(miContainer).find('.mi-nav');
    let asideContainer = $(miContainer).find('.aside-container');
    let sliderContainer = $(miContainer).find('.slider-container');
    let miContent = $(miContainer).find('.mi-content');
    let miEvent = $(miContent).find('.event');
    let goTop = $(miContainer).find("#go-Top");

    let imageUrl = "https://events.tk3c.com/events_net/events_net/misuper/images/";
    const miTypes = [
        "明星主打",
        "新品登場",
        "狂歡降價",
        "智慧家庭",
        "智慧生活",
        "手機線材",
        "耳機配件",
        "生活好物"
    ];

    const miSliderImages = [
        {"title": "米家掃地機器人","url": "https://www.tk3c.com/pt.aspx?pid=207766"},
        {"title": "米家電動打氣機","url": "https://www.tk3c.com/pt.aspx?pid=202572"},
        {"title": "米家手持無線吸塵器Lite","url": "https://www.tk3c.com/pt.aspx?pid=205772"},
        {"title": "小米空氣淨化器3","url": "https://www.tk3c.com/pt.aspx?pid=203789"},
    ];

   /* const appendElement = (items,element,type = '') => {
        let typeHtml = '';
        let hrefHtml = '';
        let item = '';
        let imageName = '';
        let typeID = '';
        let images = '';

        for (let i = 0; i < items.length; i++) {
            if (type == 'slider') {
                hrefHtml = items[i].url;
                item = items[i].title;

                if (i === 0 || i === 3) {
                    imageName = "20201103_main_item_";
                } else {
                    imageName = "20201103_main_item%20_";
                }
            } else {
                item  = items[i];
                imageName = "20201103_button0";
                typeID = i + 1;
            }

            if (type == 'slider') {
                if (i === 1) {
                    images = imageUrl + '1103_main_item%20_2_2.png';
                } else {
                    images = imageUrl + imageName + (i + 1) + ".png";
                }
            }

            if (type != 'slider') {
                if (i === 0) {
                    images = imageUrl + '20201103_button02.png';
                } else if (i === 1) {
                    images = imageUrl + '1103_button04_2_2.png';
                } else {
                    images = imageUrl + imageName + (i + 1) + '.png';
                }
            }

            typeHtml = "<li><a data-id='" + typeID + "' href='"+ hrefHtml +"' target='_blank'><img src='"+ images +"' alt='"+ item +"'>" +  item + "</a></li>";
            element.find("ul").append(typeHtml);
        }
    }*/

    $(miNav,sliderContainer).append("<ul></ul>");
    $(sliderContainer).append("<ul></ul>");
    $('.buttongroup_6').append("<ul></ul>");

    appendItems(miTypes,$(miNav));
    appendItems(miSliderImages,$(sliderContainer),'slider');
    appendItems(miTypes,$('.buttongroup_6'));
    
    if (isMobile() === true) {
        $('.buttongroup_6').fadeIn();
        $(miNav).hide();
    }

    $(sliderContainer).find('ul').slick({
        infinite: true,
        dots: false,
        autoplaySpeed: 3500,
        autoplay: true
    });

    $(goTop).on('click',function(e){
        e.preventDefault();
        goAnchor();
    });

    $(miNav).find('a').on('click',function(e){
        e.preventDefault();
        let id = $(this).data('id');

        if ($(miEvent).find('.title').eq(id - 1).is(':visible')) {
            if (id === 1) {
                goAnchor($(miEvent).find('.title').eq(id - 1));
            }
        } else {
            goAnchor($('.protitle').eq(id - 2));
        }
        
    });

    $('.buttongroup_6').find('a').on('click',function(e){
        e.preventDefault();
        let id = $(this).data('id');

        if ($(miEvent).find('.title').eq(id - 1).is(':visible')) {
            if (id === 1) {
                goAnchor($(miEvent).find('.title').eq(id - 1));
            }
        } else {
            goAnchor($('.protitle').eq(id - 2));
        }
        
    });
});