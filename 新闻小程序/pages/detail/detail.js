// pages/detail/detail.js
var common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {
      id: '356412',
      title: '明德报国，敦行立世——南京大学举行2021年研究生毕业典礼暨学位授予仪式',
      poster: 'https://news.nju.edu.cn/DFS//file/2021/06/21/20210621190840802cbkjsd.jpg',
      add_date: '2021 - 6 - 21',
      content: '    6月21日，南京大学举行2021年研究生毕业典礼暨学位授予仪式，为今年毕业的3918名硕士生、522名博士生颁发证书，授予学位。校党委书记胡金波出席仪式，校长吕建做题为"明德报国，敦行立世"的主题演讲，校党委常委、常务副校长谈哲敏宣读《南京大学关于颁发2021年度第一批"青苗奖"的决定》。仪式由校党委常委、副校长、研究生院院长王振林主持。'

    },
    isAdd:false
  },
  //添加收藏
  addFavorites:function(){
    let article = this.data.article
    wx.setStorageSync(article.id, article)
    this.setData({
      isAdd:true
    })
  },
  //取消收藏
  cancelFavorites:function(){
    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({
      isAdd:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id

    //检查当前新闻是否在收藏夹中
    var newarticle = wx.getStorageSync(id)
    //已存在
    if( newarticle != '' ){
      this.setData({
        isAdd:true,
        article:newarticle
      })
    }
    //不存在
    else{
      let result = common.getNewsDetail(id)
      //获取新闻内容
      if( result.code == '200' ){
        this.setData({
          article:result.news,
          isAdd:false
        })
      }
    }
    
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