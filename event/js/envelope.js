$(function () {
  var app = new Vue({
    el: '#app',
    data: {
      rewardList: [
        { "name": 0, "image": "bg_0.png" },
        { "name": 10, "image": "bg_10.png" },
        { "name": 50, "image": "bg_50.png" },
        { "name": 100, "image": "bg_100.png" },
        { "name": 0, "image": "bg_0.png" },
        { "name": 10, "image": "bg_10.png" },
      ],
      isShow: false,
      isAlert: false,
      isWarn: false,
      reward: '',
      timing: 3,
      active: false,
      count: 0,
      rewardImg: '',
      alertImg: '',
      isRule: false
    },
    mounted() {
      $('#particle_canvas').hide();
      this.goRain();
    },
    filters: {
      siteUrl: function (value) {
        return 'https://events.tk3c.com/events_net/events_net/618exportgo1c/' + value;
      }
    },
    methods: {
      closeAlert() {
        //關閉視窗
        this.isShow = false;
        this.isAlert = false;
        this.isWarn = false;
        this.closeGame();
        $('#particle_canvas').hide();
        $("#alert-group").css('overflow-y', 'hidden');
        $('body').css('overflow-y', 'auto');
        window.scrollTo(0, 0);
      },
      closeGame() {
        //關閉遊戲畫面
        this.active = false;
      },
      randomList() {
        //搶紅包隨機購物金
        const number = Math.floor(Math.random() * this.rewardList.length);
        return number;
      },
      //彈出訊息顯示圖
      getMsgImg(image) {
        return this.$options.filters.siteUrl(image);
      },
      choice(e) {
        this.count++;

        //點擊紅包後換圖
        e.target.src = this.getMsgImg('images/red_open.png');

        //搶紅包隨機購物金
        this.reward = this.rewardList[this.randomList()].image;
        this.rewardImg = this.getMsgImg('images/' + this.reward);
        setTimeout(() => {
          this.isAlert = true;
        }, 300);

        setTimeout(() => {
          e.target.src = this.getMsgImg('images/red.png');
        }, 1500);
      },
      goRain() {
        //紅包雨
        this.isShow = false;
        $('#particle_canvas').fadeIn();
        var countdown = setInterval(() => {
          this.timing--;
          if (this.timing === 0) {
            $('#particle_canvas').hide();
            this.active = true;
            this.timing = 3;
            clearInterval(countdown);
          }
        }, 1000);
      },
      seeRule() {
        this.isRule = true;

        let pos = event.target.offsetParent.offsetTop;
        setTimeout(function () {
          $("#alert-group").animate({ 'scrollTop': pos * 2 }, 'swing');
        }, 40);
        $("#alert-group").css('overflow-y', 'scroll');
        $('body').css('overflow-y', 'hidden');
      }
    }
  });
});