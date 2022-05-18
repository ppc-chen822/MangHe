// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'皮皮陈',
    gender:'男',
    city:'山西太原'
  },
  info:function(){
    wx.navigateTo({
      url: '/pages/personinfo/personinfo',
    })
  },
  jump:function(a){
    //跳转修改资料的页面上，还要吧昵称性别传过去
    wx.navigateTo({
      url: '/pages/modify/modify?username='+this.data.username+'&gender='+this.data.gender,
    })
  },
  contact:function(e){
    wx.makePhoneCall({
      phoneNumber: '18434651370',
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