//下载更多源码就到小二源码博客:xiaoerbolg.cn
var a, e, t;

e = require("../../@babel/runtime/helpers/defineProperty"), t = [ {
    valid: !1,
    text: "emoji合成器",
    appid: "wx74597f43481ede54",
    slogan: "帮你发现更多好看、好玩的emoji",
    imgUrl: "../../assets/images/navi/wallpaper.png",
    seq: 10,
    id: 11
} ], Page((e(a = {
    data: {
        showShareMenu: !1,
        loadStatus: "none",
        tabs: []
    },
    onLoad: function(a) {
        this.app = getApp(), wx.showShareMenu({
            withShareTicket: !0,
            menus: [ "shareAppMessage", "shareTimeline" ]
        }), this.loadSettings();
    },
    onShareAppMessage: function() {},
    onShowShareMenu: function() {
        wx.hideTabBar({
            animation: !1
        }), this.setData({
            showShareMenu: !0
        });
    },
    onHideShareMenu: function() {
        wx.showTabBar({
            animation: !1
        }), this.setData({
            showShareMenu: !1
        });
    }
}, "onShareAppMessage", function() {
    return {
        title: "我从未见过，如此简单好玩的emoji合成器",
        path: "pages/emoji/index",
        imageUrl: "https://img.igo9go.cn/wxapp/cd40693c-3606-50f2-bc6e-fcc75041b6ab.png"
    };
}), e(a, "loadSettings", function() {
    var a = this;
    console.log("loadSettings"), wx.showLoading({
        title: "加载中"
    }), wx.request({
        url: "https://wxapp.igo9go.cn/avatar/api/emoji/more",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            var n, i = e.data;
            n = i && i.length > 0 ? i : t, a.setData({
                tabs: n,
                loadStatus: "loaded"
            }), wx.hideLoading({
                success: function(a) {}
            });
        },
        fail: function() {
            a.tabs = t, a.loadStatus = "loaded", a.setData({
                tabs: t,
                loadStatus: "loaded"
            });
        }
    }), console.log(this.data.tabs);
}), e(a, "onShareTimeline", function() {
    return {
        title: "我从未见过，如此简单好玩的emoji合成器",
        path: "pages/emoji/index",
        query: ""
    };
}), e(a, "onFollow", function(a) {
    wx.navigateTo({
        url: "/pages/faq"
    });
}), e(a, "onNav2Xcx", function(a) {}), e(a, "getXcxConfig", function() {
    for (var a = this.tabs, e = 0; e < a.length; e++) if (a[e].appid === appid) return {
        text: a[e].text,
        appid: appid,
        path: a[e].path || ""
    };
    return {
        appid: appid
    };
}), a));