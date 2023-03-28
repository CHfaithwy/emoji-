//下载更多源码就到小二源码博客:xiaoerbolg.cn
!function() {
    var t = require("../../B5ADE364024680CFD3CB8B6368652D80.js"), e = (getApp(), 0), o = null;
    let n = null, i = null;
    Page({
        data: {
            errorNum: 0,
            showError: !1,
            current1: 0,
            current2: 0,
            resultUrl: "../../static/default.png",
            emojis: [],
            freeTime: 1,
            downTime: 0,
            imgUrl: "http://img.igo9go.cn/emojimix/emojis/",
            apiUrl: "https://www.gstatic.com/android/keyboard/emojikitchen/",
            gzh: "https://mp.weixin.qq.com/s/Kx9ZiuC_e4IGMlkKM1nU1w",
            all: 189
        },
        createURL: function(t, e) {
            var o = t[0].map(function(t) {
                return "u" + t.toString(16);
            }).join("-"), n = e[0].map(function(t) {
                return "u" + t.toString(16);
            }).join("-");
            return "".concat(API).concat(t[2], "/").concat(o, "/").concat(o, "_").concat(n, ".png");
        },
        onLoad: function() {
            wx.showShareMenu({
                withShareTicket: !0,
                menus: [ "shareAppMessage", "shareTimeline" ]
            });
            var e = this;
            wx.request({
                timeout: 2e3,
                url: "https://wxapp.igo9go.cn/avatar/api/emoji/api",
                header: {
                    "content-type": "application/json"
                },
                complete: function(o) {
                    var n = {
                        gzh: "https://mp.weixin.qq.com/s/oB8Gt9MpBsxI2EcMesqRKg",
                        imgUrl: "../../static/emojis/",
                        apiUrl: "https://www.gstatic.com/android/keyboard/emojikitchen/"
                    };
                    console.log(n), e.setData({
                        imgUrl: n.imgUrl,
                        apiUrl: n.apiUrl,
                        gzh: n.gzh
                    });
                    var i = t.emojis.map(function(t, o) {
                        var n = {};
                        return n.id = t[0], n.key = t[1], n.time = t[2], n.img = e.data.imgUrl + "".concat(t[0].map(function(t) {
                            return t.toString(16);
                        }).filter(function(t) {
                            return "fe0f" != t;
                        }).join("_"), ".svg"), n;
                    });
                    e.setData({
                        emojis: i
                    });
                },
                fail: function() {
                    var o = t.emojis.map(function(t, o) {
                        var n = {};
                        return n.id = t[0], n.key = t[1], n.time = t[2], n.img = e.data.imgUrl + "".concat(t[0].map(function(t) {
                            return t.toString(16);
                        }).filter(function(t) {
                            return "fe0f" != t;
                        }).join("_"), ".svg"), n;
                    });
                    e.setData({
                        emojis: o
                    });
                }
            }), wx.showLoading({
                title: "加载中,小主稍等片刻"
            }), setTimeout(function() {
                wx.hideLoading();
            }, 3e3), this.initRewardedVideoAd(), this.getVideoId(), wx.createInterstitialAd && (n = wx.createInterstitialAd({
                adUnitId: "adunit-4e164272962ed757"
            }), n.onLoad(() => {}), n.onError(t => {}), n.onClose(() => {}));
        },
        getVideoId() {
            wx.createRewardedVideoAd && (i = wx.createRewardedVideoAd({
                adUnitId: "adunit-df287c05332593ba"
            }), i.onLoad(() => {}), i.onError(t => {}), i.onClose(t => {}));
        },
        onShow: function() {},
        _showAd: function() {
            var t = this;
            o.show().catch(function() {
                o.load().then(function() {
                    return o.show();
                }).catch(function(e) {
                    console.log("激励视频 广告显示失败 : ", e), wx.showToast({
                        title: "恭喜你，获得免广告奖励",
                        icon: "none"
                    }), t.save();
                });
            }), i && i.show().catch(() => {
                i.load().then(() => i.show()).catch(e => {
                    console.log("激励视频 广告显示失败"), wx.showToast({
                        title: "恭喜你，获得免广告奖励",
                        icon: "none"
                    }), t.save();
                });
            });
        },
        initRewardedVideoAd: function() {
            var t = this;
            wx.createRewardedVideoAd && ((o = wx.createRewardedVideoAd({
                adUnitId: "adunit-df287c05332593ba"
            })).onLoad(function() {
                console.log("on ad load");
            }), o.onError(function(t) {
                console.log("on  error", t);
            }), o.onClose(function(e) {
                console.log("on ad close", e), e.isEnded ? t.save() : wx.showModal({
                    title: "提示",
                    content: "你未观看完整视频广告，无法解锁保存emoji",
                    showCancel: !0,
                    confirmText: "继续观看",
                    cancelText: "忍痛放弃",
                    confirmColor: "#ff5459",
                    cancelColor: "#979797",
                    success: function(e) {
                        e.confirm && t._showAd();
                    }
                });
            }));
        },
        random1: function() {
            this.setData({
                current1: Math.floor(189 * Math.random())
            }), this.current1 = Math.floor(189 * Math.random());
        },
        random2: function() {
            this.setData({
                current2: Math.floor(189 * Math.random())
            }), this.current2 = Math.floor(189 * Math.random());
        },
        getImgName: function(t) {
            return "../../static/emojis/" + t.map(function(t) {
                return "" + t.toString(16);
            }).join("-") + ".svg";
        },
        change1: function(t) {
            console.log("转动", t), this.setData({
                current1: t.detail.current
            }), this.current1 = t.detail.current, this.getResult();
        },
        change2: function(t) {
            this.setData({
                current2: t.detail.current
            }), this.current2 = t.detail.current, this.getResult();
        },
        getResult: function() {
            e = 0, this.data.showError && this.setData({
                showError: !1
            }), this.setData({
                resultUrl: this.getResultUrl(this.data.current1, this.data.current2)
            }), console.log("resultUrl", this.data.resultUrl), this.resultUrl = this.getResultUrl(this.data.current1, this.data.current2);
        },
        reverse: function() {
            ++e >= 2 ? this.setData({
                showError: !0
            }) : this.setData({
                resultUrl: this.getResultUrl(this.data.current2, this.data.current1)
            });
        },
        getResultUrl: function(t, e) {
            t = 188 == t ? 0 : t + 1, e = 188 == e ? 0 : e + 1;
            var o = this.data.emojis[t], n = this.data.emojis[e], i = o.id.map(function(t) {
                return "u" + t.toString(16);
            }).join("-"), a = n.id.map(function(t) {
                return "u" + t.toString(16);
            }).join("-");
            return this.data.apiUrl + "".concat(o.time, "/").concat(i, "/").concat(i, "_").concat(a, ".png");
        },
        getResultUrl2: function(t, e) {
            var o = "", n = this, i = this.data.emojis[t + 1], a = this.data.emojis[e + 1], r = i.id.map(function(t) {
                return "u" + t.toString(16);
            }).join("-"), s = a.id.map(function(t) {
                return "u" + t.toString(16);
            }).join("-"), c = this.data.apiUrl + "".concat(i.time, "/").concat(r, "/").concat(r, "_").concat(s, ".png");
            return wx.downloadFile({
                url: c,
                success: function(t) {
                    200 === t.statusCode ? o = c : n.setData({
                        showError: 1
                    });
                }
            }), o;
        },
        saveEmoji: function() {
            var t = this;
            n && n.show().catch(t => {
                console.error(t);
            }), console.log(this.data.downTime, this.data.freeTime), this.data.downTime >= this.data.freeTime && o ? wx.showModal({
                title: "提示",
                content: "观看完整视频广告，才能解锁保存哦！",
                showCancel: !0,
                confirmText: "我要解锁",
                cancelText: "忍痛放弃",
                confirmColor: "#ff5459",
                cancelColor: "#979797",
                success: function(e) {
                    e.confirm && t._showAd();
                }
            }) : this.save();
        },
        save: function() {
            var t = this;
            wx.downloadFile({
                url: this.data.resultUrl,
                success: function(e) {
                    200 === e.statusCode && wx.saveImageToPhotosAlbum({
                        filePath: e.tempFilePath,
                        success: function() {
                            t.setData({
                                downTime: t.data.downTime + 1
                            }), wx.showToast({
                                title: "保存成功~",
                                duration: 2e3
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    });
                }
            });
        },
        onShareAppMessage: function(t) {
            return console.log(this.data.freeTime, this.data.downTime), {
                title: "我制作了一个超好玩的emoji，你也来试试吧~"
            };
        },
        onShareTimeline: function() {
            return {
                title: "我从未见过，如此简单好玩的emoji合成器",
                path: "pages/emoji/index",
                query: ""
            };
        },
        gzh: function() {
            wx.switchTab({
                url: "/pages/web/web?title=emoji合成器&url=" + this.data.gzh
            });
        }
    });
}();