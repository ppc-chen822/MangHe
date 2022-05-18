// pages/Star/Star.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postlist: []
    // postlist:[
    //   {
    //     id:'1',
    //     SexImgsrc:'../../images/man.png',
    //     profileimgsrc:'../../images/image03.jpg',
    //     intername:'皮皮陈',
    //     age:'22',
    //     city:'太原',
    //     work:'web前端工程师',
    //   }
    // ]
  },
  getinfo: function () {
    db.collection("personinfo").aggregate().sample({
        size: 1
      })
      .end().then(res => {
        console.log(res.list[0].sex);
        console.log(res.list)
        if (res.list[0].sex == '女') {
          console.log(res.list)
          this.setData({
            postlist: res.list
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '重新解锁'
          })
        }
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