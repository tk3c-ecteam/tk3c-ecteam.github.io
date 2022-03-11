$(function(){
  $(".dropdown-item").on('click',function(){
    autoHide();
  });

  $("#pills-tab").on('click',function(){
    showTab();
  });

  $(".tabclose").on('click',function(){
    autoHide();
    $("#mainmenu_m a[id^='pills-'].active").css({"background-color":"#fff",'color': 'gray'});
  });

  for (x = 0; x < $('#mainmenu_m .nav-item').length; x++) {
    $('#mainmenu_m .nav-item').eq(x).find('.nav-link').attr('data-id',x + 1);
  }


  $('#mainmenu_m .nav-item .nav-link').on('click',function(){
    let id = $(this).data('id') - 1;
    $(this).css({"background-color":"black",'color': 'white'});
    $('#mainmenu_m .nav-item .nav-link').not($(this)).css({"background-color":"#fff",'color': 'gray'});

    if (id === 0 || id == 5) {
      autoHide();
      goAnchor($($.attr(this, 'href')));
      $('#mainmenu_m .tab-pane').addClass('fade');
      
    } else {
      console.log(id);
      showTab();
      $('#mainmenu_m .tab-pane').eq(id).addClass('fade').siblings('#mainmenu_m .tab-pane').removeClass('fade');
    }
  });

  $('#mainmenu .dropdown').each(function(i,v) {
    $(this).hover(function(){
      $("#dropdown-menu" + (i + 1)).show();
    },function(){
      $("#dropdown-menu" + (i + 1)).hide();
    });
  });
  
  //隱藏區
  function autoHide() {
    $("#pills-tabContent").hide();
    $(".embed-responsive-item").show();
  }

  function showTab() {
    $("#pills-tabContent").show();
    $(".embed-responsive-item").hide();
  }

  function goAnchor(element = null) {
    let offset = '';
  
    if (element === null) {
        offset = 0;
    } else {
        offset = $(element).offset().top - 250;
    }
    $('html,body').animate({'scrollTop': offset},'swing');
  }
}); 
