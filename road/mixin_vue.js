export default {
    methods: {
        closeAlert() {
            //關閉視窗
            this.isShow = false;
            this.isAlert = false;
            this.isWarn = false;
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
              console.log("ok");
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
          }
    }
}