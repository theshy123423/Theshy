// pages/hometown/hometown.js
var a = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  boFang:function(){
    let audio = wx.createInnerAudioContext()
    audio.src='/audios/张卫 - 嘉祥人.mp3'
    a++;
    if(a==1){
      audio.play();
    }
  }
})