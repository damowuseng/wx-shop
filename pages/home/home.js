// pages/home/home.js
import { getData, getGoods } from '../../service/home'
const types = ['pop','new','sell']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行','新款','精选'],
    goods: {
      'pop': {page: 0, list: []},
      'sell': {page: 0, list: []},
      'new': {page: 0, list: []}
    },
    currentType: 'pop'
  },

 // 事件监听
  handleTabClick(e) {
    const index = e.detail.index
    this.setData({
      currentType: types[index]
    })
    
  },

// 获取产品数据
  _getGoods(type) {
    const page = this.data.goods[type].page + 1
    
    getGoods(type).then(res => {
      const list = res.data[type]
      
      const oldList = this.data.goods[type].list
      oldList.push(...list)

      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    }).catch(err => {
      console.log(err);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求轮播图数据
    getData().then(res => {
      const banners = res.data.banners;
      const recommends = res.data.recommends;
      this.setData({
        banners,
        recommends
      })
    }).catch(err => {
      console.log(err)
    })
    //获取产品信息
    this._getGoods('pop')
    this._getGoods('sell')
    this._getGoods('new')
    
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
    console.log("dibu");
    this._getGoods(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})