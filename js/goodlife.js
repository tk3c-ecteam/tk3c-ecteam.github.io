let app = new Vue({
  el: '#goodlife-container',
  data: {
    isShow: false,
    isAlert: false,
    isWarn: false,
    active: false,
    rewardImg: '',
    alertImg: '',

    //折扣碼區
    tickets: [
      {"name": 200,"image":"discount200.png","code": "A757cf7"},
      {"name": 500,"image":"discount500.png","code": "A02a7ed"},
    ],
    ruleTime: '2021/08/13 10:00-2021/08/31 23:59',
    cheerCount: 0,
    today: new Date(),
    future: new Date('2021/08/18'),
    isRule:false
  },
  mounted() {
    //應援券第二批使用規則時間
    if (this.today > this.future) {
      this.ruleTime = '2021/08/18 10:00-2021/08/31 23:59';
    }
  },
  filters: {
    siteUrl: function(value) {
      return 'https://events.tk3c.com/events_net/events_net/goodlife/' + value;
    }
  },
  methods: {
    closeAlert() {
      //關閉視窗
      this.isShow = false;
      this.isAlert = false;
      this.isWarn = false;
      this.closeGame();
      $("#alert-group").css('overflow-y','hidden');
      $('body').css('overflow-y','auto');
      window.scrollTo(0,0);
    },
    closeGame() {
      //關閉遊戲畫面
      this.active = false;
    },
    //彈跳視窗票券顯示圖
    getRewardImg(reward) {
      switch (reward) {
        case 1:
          this.rewardImg = this.$options.filters.siteUrl('images/alert200.png');
          break;     
        case 2:
          this.rewardImg = this.$options.filters.siteUrl('images/alert500.png');
          break;
      }
    },
    seeRule() {
      //使用規則視窗

      let pos = event.target.offsetParent.offsetTop;
      setTimeout(function(){
        $("#alert-group").animate({'scrollTop': pos * 1.5},'swing');
      },40);
      $("#alert-group").css('overflow-y','scroll');
      $('body').css('overflow-y','hidden');
    },
    //點擊搶券動作
    getTicket(value) {
      //紀錄點擊應援券次數
      this.cheerCount++;

      let copyText = '';
      copyText = $('.discountCode').eq(value - 1);
      copyText.select();
      document.execCommand('copy');
      //第一批活動時間結束顯示彈出視窗
      //https://events.tk3c.com/events_net/events_net/21mystery/images/sell-out.png
      /*if (this.today > this.future) {
        this.alertImg = this.$options.filters.siteUrl('images/sell-out.png');
        this.isWarn = true;
        return false;
      }*/

      //每個人搶券超過一次顯示提示訊息
      //https://events.tk3c.com/events_net/events_net/21mystery/images/sell-out2.png
      /*if (this.cheerCount > 1) {
        this.alertImg = this.$options.filters.siteUrl('images/sold-out2.png');
        this.isWarn = true;
        return false;
      }*/

      this.getRewardImg(value);
      this.isAlert = true;
      this.isRule = true;
    }
  }
});

