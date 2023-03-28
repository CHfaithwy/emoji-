//下载更多源码就到小二源码博客:xiaoerbolg.cn
Page({
    data: {
        url: "https://play.igo9go.cn/emojimix"
    },
    onLoad: function(n) {
        var o = this;
        wx.request({
            url: "https://wxapp.igo9go.cn/api/webview",
            success: function(n) {
                o.setData({
                    url: n.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var n = null;
        wx.createInterstitialAd && ((n = wx.createInterstitialAd({
            adUnitId: "adunit-4e164272962ed757"
        })).onLoad(function() {}), n.onError(function(n) {}), n.onClose(function() {})), 
        n && n.show().catch(function(n) {
            console.error(n);
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});