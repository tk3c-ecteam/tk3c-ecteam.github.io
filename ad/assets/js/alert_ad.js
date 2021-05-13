document.addEventListener('DOMContentLoaded', function () {
    var app = new Vue ({
        el: '#alertAd-box',
        data: {
            isAlert: false,
            count: 5
        },
        mounted() {
            //延遲1秒載入
            setTimeout(() => {
                this.isAlert = true;
            }, 1000);
    
            this.countdown();

            document.addEventListener('click',e => {
                this.isAlert = false;
            });
        },
        methods: {
            closeAlert:function() {
                //關閉廣告
                this.isAlert = false;
            },
            countdown() {
                //倒數並自動移除廣告
                var countDown = setInterval(() => {
                    this.count--;
                    if (this.count < 0) this.count = 0;
                    if (this.count === 0) {
                        this.isAlert = false;
                        clearInterval(countDown);
                    }
                },1500);
            }
        }
    });
});
