var tabMove = [];

document.addEventListener("DOMContentLoaded", function () {
  let tabs = [
    {
      0: [
        {
          "title": "IGD2024/images/bara.png",
          "content": [
            { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=117913", "image": "IGD2024/images/bna01.png" },
            { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=117913", "image": "IGD2024/images/bna02.png" },
            { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=117913", "image": "IGD2024/images/bna03.png" },
          ]
        },
      ],
      1: [
        {
          "title": "IGD2024/images/barb.png",
          "content": [
            { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=11124", "image": "IGD2024/images/bnb01.png" },
            { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=11124", "image": "IGD2024/images/bnb02.png" },
          ]
        },
      ],
      2: [
        {
          "title": "IGD2024/images/barc.png",
          "content": [
            { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=114130", "image": "IGD2024/images/bnc01.png" },
            { "url": "https://www.tk3c.com/dictitleurl.aspx?cid=114130", "image": "IGD2024/images/bnc02.png" },
          ]
        },
      ]
    }
  ];

  const today = new Date();
  const path = "https://events.tk3c.com/events_net/";

  //新增商品頁籤區域

  for (const [i, v] of Object.entries(tabs[0])) {
    let tabHtml = `
        <section class="tab-area tab${Number(i) + 1}-box scroll" id="tab${Number(i) + 1}">
          <h2 class="title">
           <a href="" target="_blank">
             <img src="${path + v[0].title}" />
            </a>
          </h2>

          <div class="content">
            <ul class="tab"></ul>
          </div>
        </section>
    `;

    let nodes = $all('section:not(.event-box,.store-group,.store-box)');
    let lastEl = nodes[nodes.length - 1];
    lastEl.insertAdjacentHTML("afterend", tabHtml);

    for (const [index, value] of Object.entries(v[0].content)) {
      $single(`.tab${Number(i) + 1}-box .tab`).insertAdjacentHTML("afterbegin",
        `<li><a><img src="${path + value.image}"></a></li>`
      );
    }

  }

  //加入頁籤對應的商品內容
  tabAppend(tabs[0][0][0].content, '.tab1-box', 0);
  tabAppend(tabs[0][1][0].content, '.tab2-box', 3);
  tabAppend(tabs[0][2][0].content, '.tab3-box', 5);

  tabSlide2();

  //清空看更多按鈕
  $all('.tab-area .title .more').forEach(more => {
    more.remove();
  });

  //點擊頁籤滑動到指定頁籤
  tabMoveTo('.tab-area .tab .swiper-slide a', tabMove);

  //移除多的樓層標題、右側、手機選單
  removeTitle(3);
});

//頁籤輪播
function tabSlide2() {

  for (let x = 0; x < $('.tab-area').length; x++) {
    tabMove[x] = new Swiper(`.tab-area .tab${x + 1}-container`, {
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints: {
        0: {
          slidesPerView: 2.4,
        },
        600: {
          slidesPerView: 3.5,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });

    tabMove[x].loopDestroy();
    tabMove[x].update();
  }
}





