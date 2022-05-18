// pages/Star/Star.js
const db = wx.cloud.database()

function convertUTCTimeToLocalTime(UTCDateString) {
  if (!UTCDateString) {
    return '-';
  }

  function formatFunc(str) { //格式化显示
    return str > 9 ? str : '0' + str
  }
  var date2 = new Date(UTCDateString); //这步是关键
  var year = date2.getFullYear();
  var mon = formatFunc(date2.getMonth() + 1);
  var day = formatFunc(date2.getDate());
  var hour = date2.getHours();
  var noon = hour >= 12 ? 'PM' : 'AM';
  hour = hour >= 12 ? hour - 12 : hour;
  hour = formatFunc(hour);
  var min = formatFunc(date2.getMinutes());
  var dateStr = year + '-' + mon + '-' + day + ' ' + noon + ' ' + hour + ':' + min;
  return dateStr;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postlist: [{
      id: '1',
      SexImgsrc: '../../images/man.png',
      profileimgsrc: '../../images/image03.jpg',
      intername: '皮皮陈',
      age: '22',
      city: '太原',
      work: 'web前端工程师',
      text: '昨天晚上也好冷，本来以为街上没人，结果刚刚偷电动车的时候被抓了，本来想反抗，但警察说了一句老实点别动，我立刻就放弃了抵抗，因为我记得你说过，你喜欢老实人。',
      date: '2021年12月14日',
      textoneimgsrc: '../../images/photo01.jpg',
      texttwoimgsrc: '../../images/photo02.jpg',
      CommentNumber: '28',
      LikeNumber: '132'
    }, ],
    bloglist: [],
  },
  fabu: function () {
    wx.navigateTo({
      url: '/pages/post/post',
    })
  },
  // showblog: function () {
  //   db.collection('blog').get({
  //     success: function (res) {
  //       // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
  //       console.log(res.data)
  //       return res.data
  //     }
  //   })
  //   this.setData({
  //     bloglist:res.data
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(convertUTCTimeToLocalTime("2017-11-16T05:23:20.000Z"))
    db.collection('blog').get().then(res => {
      for(var i=0;i<res.data.length;i++){
        res.data[i].createTime=convertUTCTimeToLocalTime(res.data[i].createTime)
      }
      console.log(res)
      this.setData({
        bloglist: res.data
      })
      // var blogl = res.data
    })

  },
  // db.collection('blog').doc('todo-identifiant-aleatoire').get({
  //   success: function(res) {
  //     // res.data 包含该记录的数据
  //     console.log(res.data)
  //   }
  // })
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
    console.log(convertUTCTimeToLocalTime("2017-11-16T05:23:20.000Z"))
    db.collection('blog').get().then(res => {
      for(var i=0;i<res.data.length;i++){
        res.data[i].createTime=convertUTCTimeToLocalTime(res.data[i].createTime)
      }
      console.log(res)
      this.setData({
        bloglist: res.data
      })
      // var blogl = res.data
    })
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

  },

})