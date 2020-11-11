//活動頁面圖片網址轉換成cdn https://events.cdn-tkec.tw

$(function() {
var images = document.getElementsByTagName('img');
var imageUrl = '';
var imageStr = '/events_net/events_net';

    for (var i = 0; i < images.length; i++) {
        imageUrl = images[i];

        if (imageUrl.src.indexOf(imageStr) != -1) {
            imageUrl.src = imageUrl.src.replace(imageStr,"");
            imageUrl.src = imageUrl.src.replace("https://events.tk3c.com","https://events.cdn-tkec.tw" + imageStr);
        } else {
            let newImagePath = imageUrl.getAttribute('src');
            if (imageUrl.src.indexOf("https://www.cdn-tkec.tw") == -1) {
                imageUrl.src = "https://events.cdn-tkec.tw" + imageStr + "/" + newImagePath;
            }
        }
    }
});






