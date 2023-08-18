document.addEventListener("DOMContentLoaded", function () {
  var app = new Vue({
    el: '#red-group',
    data: {
      rewardList: [
        { "name": "5元燦坤k幣", "image": "reward1.png" },
        { "name": "5元購物金", "image": "reward2.png" },
        { "name": "10元燦坤k幣", "image": "reward3.png" },
        { "name": "10元購物金", "image": "reward4.png" },
        { "name": "50元燦坤k幣", "image": "reward5.png" },
        { "name": "50元購物金", "image": "reward6.png" },
        { "name": "銘謝惠顧", "image": "reward7.png" },
        { "name": "銘謝惠顧", "image": "reward7.png" },
        { "name": "銘謝惠顧", "image": "reward7.png" },
        { "name": "10元燦坤k幣", "image": "reward3.png" },
      ],
      rate: [15, 22, 27, 6, 2, 2, 20, 3, 1, 2],//機率
      isRed: false,//整個搶紅包區塊 id:red-group
      reward: '',
      timing: 5,//5秒內下紅包雨
      active: false,//搶紅包區塊開關
      count: 0,//計算點擊紅包次數
      rewardImg: '',//抽到獎金圖
      isEffect: false,//紅包雨效果,
      today: new Date()
    },
    mounted() {

      this.goRain();//下紅包雨
    },
    filters: {
      siteUrl: function (value) {
        return './' + value;//正式的路徑:https://www.tk3c.com/
      }
    },
    methods: {
      randomList() {
        //搶紅包隨機購物金
        const { rate, rewardList } = this;
        var total = eval(rate.join("+"));
        var randomList = [];

        for (let i = 0; i < rewardList.length; i++) {
          for (let j = 0; j < rate.length; j++) {
            randomList.push(i);
          }
        }

        const randNumber = Math.floor(Math.random() * total);
        var newRand = rewardList[randomList[randNumber]];
        return newRand;
      },
      //彈出訊息顯示圖
      getMsgImg(image) {
        return this.$options.filters.siteUrl(image);
      },
      choice(e) {
        this.count++;

        //搶紅包隨機購物金
        var num = this.randomList();


        this.reward = num.image;
        this.rewardImg = this.getMsgImg('images/game/' + this.reward);
        setTimeout(() => {
          this.active = false;
          Swal.fire({
            imageUrl: this.rewardImg,
            showCloseButton: true,
            closeButtonHtml: "<a><img src='" + this.getMsgImg('images/game/close.png') + "'></a>",
            showDenyButton: true,
            background: 'transparent',
            backdrop: 'rgb(0 0 0 / 75%)',
            allowOutsideClick: false,
            position: 'center',
            returnFocus: false,
            confirmButtonText: '確定',
            confirmButtonColor: '#0eb3e1',
            denyButtonText: "活動詳情",
            denyButtonColor: "red"
          }).then(function (result) {
            $('body').css('overflow-y', 'auto');
            if (result.isDenied) {
              //活動詳情
              Swal.fire({
                width: 1000,
                title: "<p style='margin-bottom:5px';>活動詳情</p>",
                html: "<ul style='text-align:left;'>" +
                  "<li style='margin-bottom:10px';>1.如欲參加本活動，請先登入燦坤線上購物會員帳號及密碼(活動期間成為燦坤線上購物會員，登入後亦可參加)。​</li>" +
                  "<li style='margin-bottom:10px';>2.活動期間(2023/9/5-9/10)，每位燦坤線上購物會員可於每日兩個指定時段(12:09、21:09)參加整點紅包雨活動(於燦坤線上購物網站首頁進行，)，整點紅包雨(燦坤K幣或購物金)共有3種面額(5、10、50)，均有限量，每個時段限搶1次、一天最多搶2次(不論是使用任何裝置登錄)，天天都可登入搶紅包雨。​</li>" +
                  "<li style='margin-bottom:10px';>3.若燦坤線上購物會員於參加整點紅包雨活動時已將您的「燦坤線上購物會員帳號」完成「燦坤實體有效會員」身分綁定，整點紅包雨將為燦坤K幣，如尚未完成「燦坤實體有效會員」身分綁定，整點紅包雨則為購物金，1燦坤K幣或$1購物金皆可折抵消費金額一元NT$1元。​</li>" +
                  "<li style='margin-bottom:10px';>4.活動結束後，燦坤將於2023/9/12前將購物金/燦坤K幣匯入至您的會員帳號中，使用期限2023/9/13-2023/12/13，逾期失效​</li>" +
                  "<li style='margin-bottom:10px;padding-left:10px';>(1) 購物金：您可在之後於燦坤線上購物消費結帳時勾選「我要使用購物金」進行折抵，$1購物金可折抵消費金額一元NT$1元，但每項商品有可折抵購物金上限，其餘使用限制及折抵規則，可參考網頁說明(<a style='text-decoration:underline;color:blue' target='_blank' href='https://events.tk3c.com/events_net/events_net/memberonly/index.html#pro05'>https://events.tk3c.com/events_net/events_net/memberonly/index.html#pro05</a>)。​</li>" +
                  "<li style='margin-bottom:10px;padding-left:10px';>(2) 燦坤K幣：您可在之後於燦坤實體門市消費結帳時使用(台新銀行燦坤生活聯名卡友除可於燦坤實體門市消費折抵外，可同時於燦坤線上購物消費折抵)， 1燦坤K幣可折抵消費金額NT$1元，燦坤K幣需下載並綁定燦坤新版APP「名稱：TK3C」方可天天使用，使用限制及折抵規則，悉以燦坤3C實體門市會員條款及最新公告為準。如您的會員卡屬於臨時卡身分(會員卡正在申請核卡中)，請盡速於2023/?/?前配合完成核卡，避免影響您燦坤K幣匯入的權益。​</li>" +

                  "<li style='margin-bottom:10px';>5.活動期間，若當日未搶整點紅包雨，無法補搶。如遇到臨時維護或提早例行維護的狀況，將不會進行補償。​</li>" +
                  "<li style='margin-bottom:10px';>6.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式進行簽到，將會無法參與活動或無法獲得活動獎勵。​</li>" +
                  "<li style='margin-bottom:10px';>7.參加本活動之同時即視同同意本活動最後公告之內容，購物金/燦坤K幣回饋若有爭議，以燦坤線上購物電腦系統之紀錄與認定為準，而非依會員自行判定，恕不接受客人以截圖、翻拍等方式要求回饋。​</li>" +
                  "<li style='margin-bottom:10px';>8.活動未盡事宜以燦坤線上購物官網公告為主，燦坤線上購物保留活動最終解釋、修改、變更之權利。​</li>",
                showCloseButton: true,
                position: 'center',
                returnFocus: false,
                confirmButtonText: '關閉',
                confirmButtonColor: '#000'
              })
            }
          });
          this.isRed = false;

        }, 300);

      },
      goRain() {
        //紅包雨
        this.isRed = true;
        $('body').css('overflow-y', 'hidden');
        setTimeout(() => {
          this.isEffect = true;
        }, 8);

        var countdown = setInterval(() => {
          this.timing--;
          if (this.timing === 0) {
            this.isEffect = false;
            this.active = true;
            this.timing = 6;
            clearInterval(countdown);
          }
        }, 1000);
      }
    }
  });
});