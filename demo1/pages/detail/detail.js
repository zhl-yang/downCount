// 在需要使用的js文件中，导入js
var util = require('../../utils/util.js');
Page({
  data: {},
  onLoad: function() {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var date = new Date();
    var myDate = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    this.setData({
      myDate: myDate
    });
    var that = this
    setInterval(function() {
      //考研时间
      var t1 = new Date("2018/12/22 00:00:00")
      //往年大纲发布
      //var t2 = new Date("2018/09/15 08:30:00")
      //考试报名
      //var t3 = new Date("2018/10/10 08:30:00")
      //现场确认
      //var t4 = new Date("2018/11/09 08:30:00")
      //拿到系统时间
      var t0 = new Date()
      var t = new Date(t1 - t0 + 16 * 3600 * 1000)
      that.setData({
        d: parseInt(t.getTime() / 1000 / 3600 / 24),
        h: t.getHours(),
        m: t.getMinutes(),
        s: t.getSeconds(),
      })
    }, 1000)
  },
  onShareAppMessage: function() {
    return {
      title: '考研倒计时',
      desc: '看看还有多少天考试',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '分享失败',
          icon: 'cancel',
          duration: 2000
        })
      }
    }
  }
})