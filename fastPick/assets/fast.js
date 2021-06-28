$(function(){

    if (isMobile() === false) {
        $('#fastPickBox').css('overflow-y','auto');
        $('body').css('overflow-y','hidden');
    }


    //選擇門市，彈出訊息視窗(radio)
    $('#up_StoreShipment input[name="rblGetProductStore"]').on('change',function(){
        $('#fastPickBox').fadeIn('fast');

        //取得門市radio的值
        console.log($('input[name="rblGetProductStore"]:checked').val());

        $('#fastPickBox').css('overflow-y','hidden');
        $('body').css('overflow-y','auto');
    });

    //選擇門市，彈出訊息視窗(手機版select)
    $('#ctl00_ContentPlaceHolder1_ddl_AddSystemStore option').on('click',function(){
        if ($(this).val() != '') {
            $('#fastPickBox').fadeIn('fast');
        }

        //取得門市地址 select value值
        console.log($('#ctl00_ContentPlaceHolder1_ddl_AddSystemStore').val());
    });


    $("#fastPickBox #goPick").on('click',function(){
        $('#fastPickBox').fadeOut('slow');
    });
});

//判斷為手機裝置
function isMobile() {
    let ua = navigator.userAgent;
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    return isMobile;
}