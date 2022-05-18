// pages/blog-edit/blog-edit.js
const MAX_WORDS_NUM = 140
// 最大上传图片数量
const MAX_IMG_NUM = 9
// 初始化云数据库
const db = wx.cloud.database()
// 当前的文字类容
let content = ''
// 当前的用户信息
let userInfo = {}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordsNum: 0,  //输入文字数目
    footerBottom: 0,
    images: [],
    selectPhoto: true   //控制添加图片是否显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    userInfo = options
  },
  onInput(event){
    let wordsNum = event.detail.value.length
    if(wordsNum >= MAX_WORDS_NUM){
      wordsNum = `最大字数为${MAX_WORDS_NUM}`
    }
    this.setData({
      wordsNum
    })
    content = event.detail.value
  },

  onFocus(event){
    console.log(event)
    this.setData({
      footerBottom: event.detail.height
    })
  },
  onBlur(){
    this.setData({
      footerBottom: 0
    })
  },
  onChooseImage(){
    // 还能再选几张图片
    let max = MAX_IMG_NUM - this.data.images.length
    wx.chooseImage({
      count: max,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          images: this.data.images.concat(res.tempFilePaths)
        })
        max = MAX_IMG_NUM - this.data.images.length
        this.setData({
          selectPhoto: max <= 0 ? false : true
        })
      }
    })
  },
  onDelImage(event){
    this.data.images.splice(event.target.dataset.index, 1)
    this.setData({
      images: this.data.images
    })
    if(this.data.images.length == MAX_IMG_NUM - 1){
      this.setData({
        selectPhoto: true
      })
    }
  },
  onPreviewImage(event){
    wx.previewImage({
      urls: this.data.images,
      current: event.target.dataset.imgsrc
    })
  },
  send(){
    // 将数据存储到云数据库
    // 数据库存储类容： 博客内容，图片的fileId，用户openid，昵称，头像，发表时间
    // 图片 -> 云存储 => 返回： fileID
    if(content.trim() === ''){
      wx.showModal({
        title: '请输入内容后方可完成发布',
        content: ''
      })
      return
    }
    wx.showLoading({
      title: '发布中',
      mask: true
    })
    let promiseArr = []
    let fileIds = []
    for(let i = 0, len = this.data.images.length; i < len; i++){
      let p = new Promise((resolve, reject) => {
        let item = this.data.images[i]
        // 文件扩展名
        let suffix = /\.\w+$/.exec(item)[0]
        wx.cloud.uploadFile({
          cloudPath: 'blog/' + Date.now() + '-' + Math.random() * 1000000 + suffix,
          filePath: item,
          success: (res) => {
            fileIds = fileIds.concat(res.fileID)
            resolve()
          },
          fail: (err) => {
            console.error(err)
            reject()
          }
        })
      })
      promiseArr.push(p)
    }
    // 存入云数据库
    Promise.all(promiseArr).then((res) => {
      db.collection('blog').add({
        data: {
          ...userInfo,
          content,
          img: fileIds,
          createTime: db.serverDate()  //服务端的时间
        }
      })
    }).then((res)=> {
      wx.hideLoading()
      wx.showToast({
        title: '发布成功',
      })
      // 发布成功时，返回博客页面，刷新博客列表
      wx.navigateBack()
      const pages = getCurrentPages()
      // 取到上一个页面
      const prevPage = pages[pages.length - 2]
      prevPage.onPullDownRefresh()
    }).catch((err) => {
      wx.hideLoading()
      wx.showToast({
        title: '发布失败',
      })
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

  }
})