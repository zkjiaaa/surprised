(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/kanj/kanj" ], {
    2374: function(a, t, o) {
        "use strict";
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o("de50"), i = {
                data: function() {
                    return {
                        theme_color: "#fff",
                        showdata: [],
                        logdata: [],
                        id: 0,
                        guanggaoid2: 0,
                        shi: 0,
                        fen: 0,
                        miao: 0,
                        timecha: 0,
                        order: [],
                        percent: 0,
                        daojishi: "",
                        invite_member_id: 0
                    };
                },
                onLoad: function(e) {
                    a.showLoading({
                        title: "加载中"
                    }), console.log(e), this.id = e.id, e.invite_member_id && (this.invite_member_id = e.invite_member_id);
                },
                onShareAppMessage: function(e) {
                    return {
                        title: this.showdata.name,
                        imageUrl: this.showdata.image,
                        path: "/pages/kanj/yaoq?id=" + this.showdata.goods.id + "&invite_member_id=" + a.getStorageSync("member_id")
                    };
                },
                onShow: function() {
                    var e = this;
                    clearInterval(this.daojishi), a.hideTabBar({}), this.invite_member_id, a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "bargain.get_order_detail",
                            token: a.getStorageSync("token"),
                            order_id: this.id
                        },
                        success: function(t) {
                            e.showdata = t.data.data.goods, e.logdata = t.data.data.order_log, e.order = t.data.data.order, 
                            e.getpercent();
                            var o = Date.parse(new Date());
                            e.timecha = e.showdata.end_time - o / 1e3, a.hideLoading(), e.timecha < 0 ? e.timecha = 0 : (console.log(e.timecha), 
                            e.timecha = e.timecha - 1, e.shi = parseInt(e.timecha / 3600), e.fen = parseInt(e.timecha % 3600 / 60), 
                            e.miao = parseInt(e.timecha % 60), e.daojishi = setInterval(function() {
                                e.timecha > 1 ? (e.timecha = e.timecha - 1, e.shi = parseInt(e.timecha / 3600), 
                                e.fen = parseInt(e.timecha % 3600 / 60), e.miao = parseInt(e.timecha % 60)) : clearInterval(e.daojishi);
                            }, 1e3));
                        }
                    }), a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(t) {
                            e.theme_color = t.data.data.app_theme_bg_color, a.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: t.data.data.app_theme_bg_color
                            }), e.guanggaoid2 = t.data.data.wx_video_reward_advert_key;
                        }
                    });
                },
                methods: {
                    gobargain: function() {
                        a.navigateTo({
                            url: "./bargain?id=" + e
                        });
                    },
                    godingdlist: function() {
                        a.navigateTo({
                            url: "./kanjlist"
                        });
                    },
                    gomore: function() {
                        a.navigateTo({
                            url: "../homepage/more"
                        });
                    },
                    getpercent: function() {
                        this.percent = this.order.remain_price / this.order.price * 100;
                    },
                    kanjia: function() {
                        a.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "bargain.post_ad_bargain",
                                token: a.getStorageSync("token"),
                                goods_id: that.id
                            },
                            success: function(e) {
                                1 == e.data.code ? a.showToast({
                                    title: e.data.data,
                                    icon: "none"
                                }) : a.showToast({
                                    title: e.data.msg,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    goscreen: function() {
                        var e = this;
                        if (0 != e.guanggaoid2 && "" != e.guanggaoid2) {
                            var a = wx.createRewardedVideoAd({
                                adUnitId: e.guanggaoid2
                            });
                            console.log("执行广告"), a.onLoad(function(e) {
                                console.log("videoAd onLoad", e);
                            }), a.onError(function(e) {
                                console.log("videoAd onError", e);
                            }), a.load().then(function() {
                                console.log("激励视频加载成功"), a.show().then(function() {
                                    console.log("激励视频 广告显示成功");
                                }).catch(function(e) {
                                    console.log("激励视频 广告显示失败");
                                });
                            }).catch(function(e) {
                                console.log("激励视频加载失败");
                            }), a.offClose(), a.show(), console.log(a), a.onClose(function(a) {
                                console.log(a), a.isEnded && (clearInterval(e.dao), clearInterval(e.fdao), e.kanjia);
                            });
                        }
                    }
                }
            };
            t.default = i;
        }).call(this, o("543d")["default"]);
    },
    4339: function(e, a, t) {},
    5393: function(e, a, t) {
        "use strict";
        (function(e) {
            t("0207");
            o(t("66fd"));
            var a = o(t("b6d6"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(a.default);
        }).call(this, t("543d")["createPage"]);
    },
    8807: function(e, a, t) {
        "use strict";
        t.r(a);
        var o = t("2374"), n = t.n(o);
        for (var i in o) "default" !== i && function(e) {
            t.d(a, e, function() {
                return o[e];
            });
        }(i);
        a["default"] = n.a;
    },
    b6d6: function(e, a, t) {
        "use strict";
        t.r(a);
        var o = t("cefa"), n = t("8807");
        for (var i in n) "default" !== i && function(e) {
            t.d(a, e, function() {
                return n[e];
            });
        }(i);
        t("c1ac");
        var r, c = t("f0c5"), d = Object(c["a"])(n["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], r);
        a["default"] = d.exports;
    },
    c1ac: function(e, a, t) {
        "use strict";
        var o = t("4339"), n = t.n(o);
        n.a;
    },
    cefa: function(e, a, t) {
        "use strict";
        var o, n = function() {
            var e = this, a = e.$createElement;
            e._self._c;
        }, i = [];
        t.d(a, "b", function() {
            return n;
        }), t.d(a, "c", function() {
            return i;
        }), t.d(a, "a", function() {
            return o;
        });
    }
}, [ [ "5393", "common/runtime", "common/vendor" ] ] ]);