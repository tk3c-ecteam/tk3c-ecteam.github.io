//var location = window.location;
$(function() {
var images = document.getElementsByTagName('img');
var imageUrl = '';
var imageStr = '/events_net/events_net';

    for (var i = 0; i < images.length; i++) {
        imageUrl = images[i];

        if (imageUrl.src.indexOf(imageStr) != -1) {
            imageUrl.src = imageUrl.src.replace("/events_net/events_net","");
            imageUrl.src = imageUrl.src.replace("https://events.tk3c.com","https://events.cdn-tkec.tw/events_net/events_net");
        } else {
            imageUrl.src = imageUrl.src.replace(window.location.origin,"https://events.cdn-tkec.tw/events_net/events_net");
        }
    }
});






