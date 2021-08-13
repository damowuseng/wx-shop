// pages/home/home.js
import { getData } from '../../service/home'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: []
  },
  handleTabClick(e) {
    console.log(e);
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
      // console.log(res)
      // console.log(banners)
      // console.log(recommends)

    }).catch(err => {
      console.log(err)
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