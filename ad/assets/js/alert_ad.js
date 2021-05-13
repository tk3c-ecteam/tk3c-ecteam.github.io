document.addEventListener('readystatechange',function(){
    var app = new Vue ({
        el: '#alertAd-box',
        data: {
            isAlert: false,
            count: 5
        },
        created() {
            this.isAlert = false;
        },
        mounted:function() {
            this.isAlert = true;
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