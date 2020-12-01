//活動頁面圖片網址轉換成cdn https://events.cdn-tkec.tw

$(function() {
var images = document.getElementsByTagName('img');
var imageUrl = '';
var imageStr = '/events_net/events_net';
var newUrl = 'https://events.cdn-tkec.tw';
var originUrl = 'https://events.tk3c.com';

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
                if (imageUrl.src.indexOf("https://www.cdn-tkec.tw") < 0 && imageUrl.src.indexOf('/images') > -1) {
                    imageUrl.src = newUrl + imageStr + newImagePath;
                }
            }
        }
    }
});






