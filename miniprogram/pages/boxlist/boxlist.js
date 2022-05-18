Page({



  /**
   
  * 页面的初始数据
   
  */

  data: {

    arr: '', //存储请求回来的数组

    ini: 0,

    uhide: '',

    arr: [

      {
        img: "../../images/image05.png",
        price: 5,
        state: 0,
        num: 0,
        service_name: "女生盲盒",
      },
    ],

    add_car_num: 0, //控制是否初次进入界面

    price: '0.00' //价钱

  },

  // 滚动到底部

  lower: function () {

    console.log("我到了底部")

  },



  //数量加函数

  numadd: function (e) {

    var _this = this;

    const index = e.currentTarget.dataset.index;

    console.log(index)

    let carts = this.data.arr;

    let num = carts[index].num; //数量

    num = num + 1;

    carts[index].num = num;

    this.setData({

      arr: carts

    });

    var sum = 0;

    for (var i = 0; i < carts.length; i++) {

      var QC = _this.data.arr[i].num;

      sum += parseFloat(QC);

    }

    // console.log(sum);

    var price = 0;

    if (sum > 0) {

      for (var i = 0; i < carts.length; i++) {

        var QB = _this.data.arr[i].price;

        var QR = _this.data.arr[i].num;



        price += QB * QR;

      }

    }

    console.log(price.toFixed(2))



    this.setData({

      add_car_num: sum,

      price: price.toFixed(2)

    })

  },

  //数量减函数

  numminus: function (e) {

    const index = e.currentTarget.dataset.index;

    // console.log(index)

    let carts = this.data.arr;

    // console.log(carts[index].num)

    let _this = this;

    let num = carts[index].num;

    if (num <= 1) {

      const index = e.currentTarget.dataset.index;

      let carts = this.data.arr;

      let state = carts[index].state; //是否初次进入状态

      state = 0;

      carts[index].state = state;

      carts[index].num = 0;

      console.log(carts[index].num)

      this.setData({

        arr: carts,

      });

    } else {

      num = num - 1;

      carts[index].num = num;

      this.setData({

        arr: carts,

      });

    }

    var sum = 0;

    for (var i = 0; i < carts.length; i++) {



      var QC = _this.data.arr[i].num;

      sum += parseFloat(QC);

    }

    if (sum <= 0) {

      this.setData({

        ico_num: 0

      });

    } else {

      this.setData({

        ico_num: 1

      });

    }

    var price = 0;

    if (sum > 0) {

      for (var i = 0; i < carts.length; i++) {

        var QB = _this.data.arr[i].price;

        var QR = _this.data.arr[i].num;



        price += QB * QR;

      }

    }
    this.setData({

      add_car_num: sum,

      price: price.toFixed(2)

    });
  },

  // 产品数量为零时方法

  showadd: function (e) {

    var _this = this;

    const index = e.currentTarget.dataset.index;

    // console.log(index)

    let carts = this.data.arr;

    // console.log(carts[index].state)

    let num = carts[index].num;

    let state = carts[index].state;

    state = 1;

    carts[index].state = state;

    carts[index].num = 1;

    var sum = 0;

    for (var i = 0; i < carts.length; i++) {



      var QC = _this.data.arr[i].num;

      sum += parseFloat(QC);

    }

    if (sum <= 0) {

      this.setData({

        ico_num: 0

      });

    } else {

      this.setData({

        ico_num: 1

      });

    }

    var price = 0;

    if (sum > 0) {

      for (var i = 0; i < carts.length; i++) {

        var QB = _this.data.arr[i].price;

        var QR = _this.data.arr[i].num;



        price += QB * QR;

      }

    }



    this.setData({

      arr: carts,

      add_car_num: sum,

      price: price.toFixed(2)

    });



  },

  /**
   
  * 生命周期函数--监听页面加载
   
  */

  onLoad: function (options) {

    var that = this;

    // wx.request({

    // method:"post",

    // url: '',

    // data:{id:1},

    // success: function (options) {

    // console.log(options)

    // that.setData({

    // arr: options.data.data.datas.service

    // })

    // }

    // })

  },



  /**
   
  * 生命周期函数--监听页面初次渲染完成
   
  */

  onReady: function () {



  },
showinfo:function () {
  wx.navigateTo({
    url: '/pages/boxinfow/boxinfow',
  })
}
})