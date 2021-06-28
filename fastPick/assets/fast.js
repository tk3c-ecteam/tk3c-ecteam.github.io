$(function(){
    //選擇門市，彈出訊息視窗(radio)
    $('#up_StoreShipment input[name="rblGetProductStore"]').on('change',function(){
        $('#fastPickBox').fadeIn('fast');

        //取得門市radio的值
        console.log($('input[name="rblGetProductStore"]:checked').val());
    });

    //選擇門市，彈出訊息視窗(手機版select)
    $('#ctl00_ContentPlaceHolder1_ddl_AddSystemStore').on('change',function(e){
        e.preventDefault();
        if ($(this).val() != 00) {
            $('#fastPickBox').fadeIn('fast');
        }
        //取得門市地址 select value值
        console.log($('#ctl00_ContentPlaceHolder1_ddl_AddSystemStore').val());
    });


    $("#fastPickBox #goPick").on('click',function(){
        $('#fastPickBox').fadeOut('slow');
    });
});