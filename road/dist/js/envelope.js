var app = new Vue({
  el: '#envelope-container',
  data: {
    rewardList: [0,10,50,100,0],
    isShow: false,
    isAlert: false,
    isWarn: false,
    reward: '',
    email: '',
    password: '',
    emailError: '',
    passError: '',
    timing: 3,
    active: false,
    redImg: 'red',
    count: 0,
    rewardImg: '',
    alertImg: '',
    isRule: false
  },
  mounted() {
    let today = new Date();
    let incoming = new Date('2021/06/07 10:00:00');
    let future = new Date('2021/06/18');

    this.alertImg = this.getImgUrl('red_alert');
    if (today > future) {
      this.alertImg = this.getImgUrl('red_alert_end');
    }

    this.goRain();
     //還沒到6/7顯示尚未開放
    /*if (today < incoming) {
        this.alertImg = this.getImgUrl('incoming');
        this.isWarn = true;
        $('#particle_canvas').hide();
    }*/
  },
  methods: {
    delayShow() {
      //延遲載入
      setTimeout(() => {
        this.isShow = true;
      },800);
    },
    closeAlert() {
      //關閉視窗
      if (event.target.getAttribute('class') == 'detail') {
        return false;
      }
      this.isShow = false;
      this.isAlert = false;
      this.isWarn = false;
      $("#alert-group").css('overflow-y','hidden');
      $('body').css('overflow-y','auto');
    },
    randomList() {
       //搶紅包隨機購物金
        const number = Math.floor(Math.random() * this.rewardList.length);
        return number;
    },
    choice(e) {
        this.count++;

        if (this.count > 1) {
            this.isWarn = true;
            return false;
        }

        e.target.src = this.getImgUrl('red_open');

        //搶紅包隨機購物金
        this.reward = this.rewardList[this.randomList()];
        console.log(this.reward);
        this.getRewardImg(this.reward);
            setTimeout(() => {
                this.isAlert = true;
            }, 300);
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
              clearInterval(countdown);
          }
      }, 1000);
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
        this.goRain();
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
    getImgUrl(image) {
        let img = './dist/images/' + image + '.png';
        return img;
    },
    getRewardImg(reward) {
      switch (reward) {
        case 0:
          this.rewardImg = this.getImgUrl('bg_0');
          break;     
        case 10:
          this.rewardImg = this.getImgUrl('bg_10');
          break;
        case 50:
          this.rewardImg = this.getImgUrl('bg_50');
          break;        
        case 100:
          this.rewardImg = this.getImgUrl('bg_100');
          break;
      }
    },
    seeRule() {
      this.isRule = true;

      $("#alert-group").css('overflow-y','scroll');
      $('body').css('overflow-y','hidden');
    }
  },
});