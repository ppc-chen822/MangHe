// pages/modify/modify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    gender:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      username:options.username,
      gender:options.gender
    })
  },
  formSumbit:function(e){
    //提取表单数据
    var formData = e.detail.value
    //获取前一个页面
    var pages=getCurrentPages()//获得页面栈，数组
    //第一个元素  index ，最后一个元素当前页：pages[pages.length-1]
    var prevPage=pages[pages.length-2]
    //用表单数据给前一个页面的昵称和性别赋值
    prevPage.setData({
      username:formData.username,
      gender:formData.gender
    })
    //返回到前一个页面
    wx.navigateBack()
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