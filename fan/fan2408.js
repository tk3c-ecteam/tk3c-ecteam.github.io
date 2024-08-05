var pro = [];
document.addEventListener("DOMContentLoaded", function () {

  const testPath = "https://tk3c-ecteam.github.io/fan/images/";

  let links = [
    { "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=27404", "image": `${testPath + 'S1.png'}` },
    { "url": "https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920", "image": `${testPath + 'S2.png'}` },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=115230", "image": `${testPath + 'S3.png'}` },
    { "url": "https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040", "image": `${testPath + 'S4.png'}` },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943", "image": `${testPath + 'S5.png'}` },
    { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=115927", "image": `${testPath + 'S6.png'}` },
    { "url": "https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677", "image": `${testPath + 'S7.png'}` },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412", "image": `${testPath + 'S8.png'}` }
  ];

  let specials = [
    { "url": "https://www.tk3c.com/pt.aspx?pid=215933", "image": `${testPath + 'PD1.png'}` },
    { "url": "https://www.tk3c.com/pt.aspx?pid=245836", "image": `${testPath + 'PD2.png'}` },
  ];

  let products = [
    { "url": "https://www.tk3c.com/events/eventgift.aspx", "image": `${testPath + 'e1.png'}` },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=88225", "image": `${testPath + 'e2.png'}` },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=69945", "image": `${testPath + 'e3.png'}` },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=88225", "image": `${testPath + 'e4.png'}` },
    { "url": "https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120792", "image": `${testPath + 'e5.png'}` },
    { "url": "https://www.tk3c.com/events/eventgift.aspx", "image": `${testPath + 'e6.png'}` },
  ];



  let spHtml = appendBanks(specials, 'sp', 'page');
  let proHtml = appendBanks(products, 'pro');

  $single('.special-box .special').insertAdjacentHTML("afterbegin", spHtml);
  $single('.pro-box .products').insertAdjacentHTML("afterbegin", proHtml);
  const today = new Date();

  fetch('https://events.tk3c.com/events_net/ashx/fkabow/GetAdSystemAll.ashx?menuid=6880')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })

  //速速GO樓層 輪播
  proSlide('.sale-box .sales', 0);

  $(document).on('scroll', function () {
    if ($(this).scrollTop() > $('.special-box').position().top - 100) {
      $('.background2').addClass('fixed');
    } else {
      $('.background2').removeClass('fixed');
    }
  });

  //移除多餘樓層標題、右側、手機選單、上方選單
  $all('.protitle').forEach((v, i) => {
    if (i >= 0 && i < 1) {
      v.remove();
      if ($('.aside-container').not('.left').length > 0) $('.aside-container').not('.left').find('.aside-content li').eq(i).remove();
      if ($('.nav-footer .box-area.type li').length > 0) $all('.nav-footer .box-area.type li')[i].remove();
      if ($('.mobile-for-product .top-nav li').length > 0) $all('.mobile-for-product .top-nav li')[i].remove();
    }
  });


  //系統生成樓層看更多按鈕與樓層圖片
  for (let i = 0; i < links.length; i++) {
    let newUrl = addGALink(links[i].url),
      wrapper2nd = $all('.wrapper')[1];

    $all('.protitle')[i].insertAdjacentHTML('afterbegin',
      `<img src="${testPath + links[i].image}">
      `
    );

    $all('.protitle')[i].querySelector('a').setAttribute('href', newUrl);

  }


  setTimeout(() => {

    let sp = new Swiper('.special-box .sp-container', {
      loop: false,
      autoplay: {
        delay: 2300,
        disableOnInteraction: false,
      },
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: '.special-box .swiper-pagination',
        clickable: true
      }
    });

    new Swiper('.pro-box .pro-container', {
      loop: false,
      autoplay: {
        delay: 1700,
        disableOnInteraction: false,
      },
      roundLengths: true,
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 2.3,
        },
        600: {
          slidesPerView: 3.4,
        },
        992: {
          slidesPerView: 4.3,
        },
      }
    });

  }, 35);
});






