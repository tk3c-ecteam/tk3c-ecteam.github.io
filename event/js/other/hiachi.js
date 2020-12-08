$(function(){
    var hiachiContainer = $("#hiachi-container");

    $(hiachiContainer).find('a').click(function(){
        var id = $(this).data('id');
        goAnchor($('#' + id));
    });
});