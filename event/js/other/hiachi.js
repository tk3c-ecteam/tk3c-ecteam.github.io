$(function(){
    var hitachiContainer = $("#hitachi-container");

    $(hitachiContainer).find('a').click(function(){
        var id = $(this).data('id');
        goAnchor($('#' + id));
    });
});