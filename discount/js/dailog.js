





            $(function () {                
                $("a[id^='a']").click().each(function () {
                    var n = $(this).attr('id').replace('a', '');
                    $('#divShow' + n).show();
                    $("div[id^='divShow']").hide();
                });

                //$('body').click(function (evt) {
                //    if ($(evt.target).parents("#divShow").length == 0 && 
                //        evt.target.id != "aaa" && evt.target.id != "divShow") {
                //        $('#divShow').hide();
                //    }
                //});

                //$('body').click(function (evt) {
                //    if ($(evt.target).parents("#divShow2").length == 0 &&
                //        evt.target.id != "aaa" && evt.target.id != "divShow2") {
                //        $('#divShow2').hide();
                //    }
                //});
            });

