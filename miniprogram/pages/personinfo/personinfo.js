// pages/detail/detail.js
Page({

  data: {
    username:'皮皮陈',
    gender:'男',
    city:'山西太原'
  },
  changeAvtar:function(){
    wx.chooseImage({
      count: 1,//选择图片的张数，默认9张
      sizeType:['compressed','original'],
      sourceType:['album','camera'],
      success:res=>{
        this.setData({
          imgUrl:res.tempFilePaths[0]
        })
      }
    })
  },
  jump:function(a){
    //跳转修改资料的页面上，还要吧昵称性别传过去
    wx.navigateTo({
      url: '/pages/modify/modify?username='+this.data.username+'&gender='+this.data.gender,
    })
  }
})