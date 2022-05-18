// pages/accost/accost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconlist:[
      {
        id:'1',
        detail:'12',
        imgsrc:'../../images/icon_06.png'
      },
      {
        id:'2',
        detail:'10',
        imgsrc:'../../images/icon_05.png'
      },
      {
        id:'3',
        detail:'23',
        imgsrc:'../../images/icon_08.png'
      }
    ],
    boxlist:[
      {
        id:'1',
        title:'《土味情话》'
      },
      {
        id:'2',
        title:'《晚安情话》'
      },
      {
        id:'3',
        title:'《八字情话》'
      },
      {
        id:'4',
        title:'《网抑云》'
      }
    ]
  },
  showtextlistT:function(){
    wx.navigateTo({
      url: '/pages/textlist/textlist',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})