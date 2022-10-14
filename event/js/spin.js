const app = new Vue({
  el: '#app',
  data: {
    roll: false,
    count: 0,
    angle: 0,
    //轉盤轉到的獎勵
    rewardList: ["spin9", "spin100", "spinCom2000", "spin300",
      "spin500", "spin1000", "spin1500", "spin2000", "spinM100", "spinMM500"],
    isShow: false,
    isAlert: false,
    isWarn: false,
    reward: '',
    rewardImg: '',
    alertImg: '',
    isRule: false,
    isOpen: false,
    isIncoming: false,
    today: new Date()
  },
  mounted() {
    //
  },
  filters: {
    siteUrl: function (value) {
      return 'https://events.tk3c.com/events_net/events_net/618exportgo2c/' + value;
    }
  },
  methods: {
    closeAlert() {
      //關閉視窗
      this.isAlert = false;
      this.isWarn = false;
      this.closeGame();
      $("#alert-group").css('overflow-y', 'hidden');
      $('body').css('overflow-y', 'auto');
      window.scrollTo(0, 0);
    },
    //彈出訊息顯示圖
    getMsgImg(image) {
      return this.$options.filters.siteUrl(image);
    },
    showWheel() {
      //顯示轉盤遊戲畫面
      this.isOpen = true;
    },
    closeGame() {
      //關閉遊戲畫面
      this.isOpen = false;
    },
    spin() {
      //按下轉盤按鈕
      this.count++;

      const data = Math.floor(Math.random() * this.rewardList.length);
      this.rotate(data);
    },
    rotate(data) {
      //轉盤旋轉
      this.roll = true;
      const { angle, rewardList } = this;
      this.angle = angle - angle % 360 + 8 * 360 + (360 / rewardList.length * data);
      setTimeout(() => {
        this.roll = false;
        this.reward = this.rewardList[data];
        this.rewardImg = this.getMsgImg('images/' + this.reward + '.png');
        this.isAlert = true;
      }, 4000);
    },
    seeRule() {
      //觀看使用規則
      this.isRule = true;
      let pos = event.target.offsetParent.offsetTop;
      setTimeout(function () {
        $("#alert-group").animate({ 'scrollTop': pos * 2 }, 'swing');
      }, 40);
      $("#alert-group").css('overflow-y', 'scroll');
      $('body').css('overflow-y', 'hidden');
    }
  },
});