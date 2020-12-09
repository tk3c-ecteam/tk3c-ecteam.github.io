$(function(){
    var dysonButton = $(".mainwarp .buttongroup");

    $(dysonButton).find('a').click(function(){
        var id = $(this).data('id');
        goAnchor($('#' + id));
    });
});