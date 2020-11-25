Page({
  global : {
      timer : null ,
      isRand : false
  },
  data: {
    dice : ['first','second','third','fourth','fifth','sixth'],
    buttonType : 'primary',
    buttonValue : '摇一摇',
    num : 0
  },
  shake : function () { 
    let me = this;
    this.global.isRand = !this.global.isRand;
    if ( this.global.isRand ) {
      this.global.timer = setInterval(function (){
        let num = Math.floor(Math.random()*6);
        me.setData({num : num});
      },50);
    } else {
      clearInterval(this.global.timer);
    }

    this.setData({
      dice: this.data.dice, 
      buttonType : (this.global.isRand) ? 'default' : 'primary',
      buttonValue : (this.global.isRand) ? '点击停止' : '摇一摇',
    });

  },
})
