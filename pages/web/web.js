Page({
    data: {
        url: "https://mp.weixin.qq.com/s/Kx9ZiuC_e4IGMlkKM1nU1w",
        title: "爱存图王"
    },
    onLoad: function(t) {
        this.setData({
            url: t.url,
            title: t.title
        }, function() {
            wx.setNavigationBarTitle({
                title: t.title
            });
        });
    }
});