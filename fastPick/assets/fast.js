$(function(){
    $('#fastPickBox').css('overflow-y','auto');
    $('body').css('overflow-y','hidden');

    $("#fastPickBox #goPick").on('click',function(){
        let checkRadio = $('#fastPickBox input[type="radio"]');

        //判斷是否有勾選門市
        if ($(checkRadio).is(':checked')) {
            $('#fastPickBox').fadeOut();
            $('#fastPickBox').css('overflow-y','hidden');
            $('body').css('overflow-y','auto');
        } else {
           //alert('請選擇快取門市');
           $('#alertBox').fadeIn('fast');
            return false;
        }
    });

    $('#alertBox .alertSure').on('click',function(){
        $('#alertBox').fadeOut('slow');
    });
});