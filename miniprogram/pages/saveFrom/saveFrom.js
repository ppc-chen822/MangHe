// pages/saveFrom/saveFrom.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ["山西省", "晋中市", "榆次区"],
  },
  changeRegin(e) {
    this.setData({
      region: e.detail.value
    });
  },
  submit: function (e) {
    //获取表单数据
    var value = e.detail.value
    //添加数据库
    wx.cloud.callFunction({
        name: "submit",
        data: value
      })
      .then(res => {
        console.log(res)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  warn:function () {
    wx.showModal({
      title: '提示',
      content: '上传成功'
    })
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