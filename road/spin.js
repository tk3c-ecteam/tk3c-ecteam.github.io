var app = new Vue({
  el: '#spin-container',
  data: {
    roll: false,
    count: 0,
    angle: 0,
    rewardList: [500,1000,30,200,80,87,7414,13,"下次會更好",55555],
    isShow: false,
    isAlert: false,
    isWarn: false,
    warnText: '一天只有一次搶券機會，<br>明天也要準時搶券喲!',
    reward: '',
    email: '',
    phone: '',
    emailError: '',
    phoneError: '',
    rewardImg: '',
    alertImg: ''
  },
  mounted() {
    this.delayShow();

    let today = new Date();
    let future = new Date('2021/06/18');

    if (today > future) {
      this.warnText = '一天只有一次搶券機會喲~';
    }

  },
  methods: {
    closeAlert() {
      //關閉視窗
      this.isShow = false;
      this.isAlert = false;
      this.isWarn = false;
      $("#alert-group").css('overflow-y','none');
      $('body').css('overflow-y','auto');
    },
    spin() {
      //按下轉盤按鈕
      this.count++;
      if (this.count > 1) {
        this.isWarn = true;
        alert('今天已玩過，明天請早');
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
      console.log(this.angle);
      setTimeout(() => {
        this.roll = false;
        this.reward = this.rewardList[data];
        alert(this.reward);
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
      //登入驗證
      if (!this.email) {
        this.emailError = "email不能為空!";
      }
      if (!this.phone) {
        this.phoneError = "電話不能為空!";
      }

      if (this.checkEmail(this.email) === false) {
        this.emailError = 'email缺少@格式不正確!';
      }
      if (this.email && this.phone) {
        this.closeAlert(); //關閉彈跳視窗
        //this.sendAjaxData(); 傳資料到後端
        setTimeout(() => {
          this.emailError = '';
          this.phoneError = '';
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
  },
});