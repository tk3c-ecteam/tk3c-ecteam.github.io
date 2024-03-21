const app = new Vue({
  el: '#app',
  data: {
    roll: false,
    count: 0,
    angle: 0,
    //轉盤轉到的獎勵
    rewardList: ["spin9", "spin100", "spinCom2000", "spin300",
      "spin500", "spin1000", "spin1500", "spin2000", "spinM100", "spinMM500"],
    rate: [8, 6, 7, 1, 19, 8, 4, 8, 9, 30],
    reward: '',
    rewardImg: '',
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
    //彈出訊息顯示圖
    getMsgImg(image) {
      return this.$options.filters.siteUrl(image);
    },
    spin() {
      //按下轉盤按鈕
      this.count++;

      const data = Math.floor(Math.random() * this.rewardList.length);
      this.rotate();
    },
    rotate() {
      //轉盤旋轉
      this.roll = true;
      const { angle, rewardList, rate } = this;
      var total = eval(rate.join("+"));
      var randomList = [];

      //將中獎機率合到rewardList陣列裡
      for (let i = 0; i < rewardList.length; i++) {
        for (let j = 0; j < rate.length; j++) {
          randomList.push(i);
        }
      }


      var randNumber = Math.floor(Math.random() * total);
      var newRand = rewardList[randomList[randNumber]]; //中獎獎勵
      angle = angle - angle % 360 + 8 * 360 + (360 / rewardList.length * randNumber);
      setTimeout(() => {
        this.roll = false;
        this.rewardImg = `<img src=${this.getMsgImg('images/' + newRand + '.png')}>`;
        this.alert(this.rewardImg);
      }, 4000);
    },
    alert(message) {
      //彈跳視窗顯示訊息

      Swal.fire({
        width: 900,
        html: message,
        showCloseButton: true,
        position: 'center',
        returnFocus: false,
        confirmButtonText: '確定',
        confirmButtonColor: '#000'
      })
    }
  },
});