//活動頁面圖片網址轉換成cdn https://events.cdn-tkec.tw

$(window).load(() => {
var images = document.getElementsByTagName('img');
var imageUrl = '';
var imageStr = '/events_net/events_net';
var newUrl = 'https://events.cdn-tkec.tw';
var originUrl = 'https://events.tk3c.com';
var location = window.location.pathname.split('/');


    for (var i = 0; i < images.length; i++) {
        imageUrl = images[i];
        var newImagePath = imageUrl.getAttribute('src');

        //排除含有cdn網址的圖片
            if (imageUrl.src.indexOf(newUrl) < 0) {
                if (imageUrl.src.indexOf(imageStr) > -1) {
                    imageUrl.src = imageUrl.src.replace(originUrl,newUrl);
                    if (imageUrl.src.indexOf('https://events.tk3c.com.tw') > -1) {
                        imageUrl.src = imageUrl.src.replace('https://events.tk3c.com.tw',newUrl);
                    }
                } else {
                    //圖片使用簡短網址: /images/xxxx.png (要到正式機才會抓的到圖片，不然在本機專案資料夾不同會顯示不出來)
                    if (imageUrl.src.indexOf("https://www.cdn-tkec.tw") < 0 && 
                        newImagePath.indexOf('/images') > -1 &&
                        location[2] != undefined) {
                        var localImage = newImagePath.replace('./images','/images');
                        imageUrl.src = newUrl + imageStr + '/' + location[2] + localImage;
                    }
                }
            }
    }
});






