var app = new Vue({
  el: '#spin-container',
  data: {
    roll: false,
    count: 0,
    angle: 0,
    //轉盤轉到的獎勵
    rewardList: ["spin9","spin100","spinCom2000","spin300",
    "spin500","spin1000","spin1500","spin2000","spinM100","spinMM500"],
    isShow: false,
    isAlert: false,
    isWarn: false,
    reward: '',
    email: '',
    password: '',
    emailError: '',
    passError: '',
    rewardImg: '',
    alertImg: '',
    isRule: false,
    isOpen: true
  },
  mounted() {
    //
  },
  methods: {
    closeAlert() {
      //關閉視窗
      this.isAlert = false;
      this.isWarn = false;
      $("#alert-group").css('overflow-y','hidden');
      $('body').css('overflow-y','auto');
    },
    spin() {
      //按下轉盤按鈕
      let today = new Date();
      let incoming = new Date();
      let incoming2 = new Date('2021/06/03 10:00:00');
      let incoming3 = new Date('2021/06/10 10:00:00');
      let future = new Date('2021/06/18');

       //活動時間6/8還沒到顯示
      /*if (today < incoming) {
        this.isOpen = false;
        return false;
      }*/

      //活動時間6/3還沒到顯示(備用)
      /*if (today < incoming2) {
        this.alertImg = './dist/images/incoming63.png';
        this.isWarn = true;
        return false;
      }*/

      //活動時間6/10還沒到顯示(備用)
      /*if (today < incoming3) {
        this.alertImg = './dist/images/incoming610.png';
        this.isWarn = true;
        return false;
      }*/

      this.count++;

      //玩超過1次顯示
      if (this.count > 1) {
        this.alertImg = './dist/images/spin_alert.png';
        this.isWarn = true;
        return false;
      }

      //活動時間最後一天更換提示視窗
      if (today > future) {
        this.alertImg = './dist/images/spin_alert_end.png';
        this.isWarn = true;
        return false;
      }

     const data = Math.floor(Math.random() * this.rewardList.length);
     this.rotate(data);
    },
    rotate(data) {
      //轉盤旋轉
      this.roll = true;
      const {angle,rewardList} = this;
      this.angle = angle - angle % 360 + 8 * 360 + (360 / rewardList.length * data);
      setTimeout(() => {
        this.roll = false;
        this.reward = this.rewardList[data];
        this.rewardImg = './dist/images/' + this.reward + '.png';
        this.isAlert = true;
      },4000);
    },
    delayShow() {
      //延遲載入
      setTimeout(() => {
        this.isShow = true;
      },2000);
    },
    checkform(e) {
      //登入驗證(用不到可跳過)
      if (!this.email) {
        this.emailError = "email不能為空!";
      }
      if (!this.password) {
        this.passError = "密碼不能為空!";
      }

      if (this.checkEmail(this.email) === false) {
        this.emailError = 'email缺少@格式不正確!';
      }
      if (this.email && this.password) {;
        this.closeAlert(); //關閉彈跳視窗
        //this.sendAjaxData(); 傳資料到後端
        setTimeout(() => {
          this.emailError = '';
          this.passError = '';
        },80);
        return true;
      }
      e.preventDefault();
    },
    checkEmail(email) {
      //email格式驗證
      const rule = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!rule.test(email)) {
        return false;
      } else {
        return true;
      }
    },
    sendAjaxData() {
      //傳送會員資料到後端
      $.ajax({
        url: '',
        data: '',
        type: 'json',
        method: 'post',
        success: function(data) {
          console.log(data);
        }
      });
    },
    seeRule() {
      //觀看使用規則
      this.isRule = true;

      $("#alert-group").css('overflow-y','scroll');
      $('body').css('overflow-y','hidden');
    }
  },
});