// pages/textlist/textlist.js
const db = wx.cloud.database()
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
    textlist:[]
  },
  again:function(){
    db.collection('textlist').aggregate().sample({
        size:1
    })
    .end().then(res=>{
      console.log(res.list)
      this.setData({
        textlist:res.list
      })
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('textlist').aggregate().sample({
      size:1
  })
  .end().then(res=>{
    console.log(res.list)
    this.setData({
      textlist:res.list
    })
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  change:function (e) {
    let index = 1;
    let change = "iconlist["+ index +"].detail";
    this.setData({
      [change]:13
  
    })
    console.log(change)
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