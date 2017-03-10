var app = getApp();

Page({
	data: {
		userInfoFromWX: {},
		userInfo: {
			name: '',
			imgUrl: ''
		}
	},
	onLoad: function() {
		app.getUserInfo((data) => {
			this.setData({
				userInfoFromWX: data
			})
		})
	},
	toResume: function() {
		wx.navigateTo({
			url: '../resume/resume'
		})
	},
	toUserInfo: function() {
		wx.navigateTo({
			url: '../userInfo/userInfo'
		})
	},
	toCollect: function() {
		wx.navigateTo({
			url: '../collect/collect'
		})
	},
	toConfig: function() {
		wx.navigateTo({
			url: '../config/config'
		})
	}
})