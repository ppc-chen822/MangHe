// pages/saveGet/saveGet.js
//在page页面引入app，同时声明变量，获得所需要的全局变
//获取应用实例
var app = new getApp();
Page({

  /**
   * 页面的初始数
   * 据
   */
  data: {

  },
  t :null,
  /**
   * 生命周期函数--监听页面加载
   */ 
  onLoad: function (options) {
    // wx.request({
      
    // })
    // console.log(app.globalData.a)
  },
  
  radioChange(e) {
    // console.log(1)
    console.log('radio发生change事件，携带value值为：', e)
    if (e.detail.value == 1) {
      wx.navigateTo({
        url: '/pages/boxlist/boxlist',
      })
    } else if (e.detail.value == 0) {
      wx.navigateTo({
        url: '/pages/boxlistm/boxlistm',
      })
    }
    // const items = this.data.items
 
  },
  // showboxlist: function () {
  //   this.radioChange();
  //   console.log()
  // },

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