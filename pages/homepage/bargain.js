(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/homepage/bargain" ], {
    "131a": function(a, t, e) {
        "use strict";
        var o = e("5d29"), n = e.n(o);
        n.a;
    },
    "5d29": function(a, t, e) {},
    8541: function(a, t, e) {
        "use strict";
        (function(a) {
            e("0207");
            o(e("66fd"));
            var t = o(e("f393f"));
            function o(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            a(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    "8bc1": function(a, t, e) {
        "use strict";
        e.r(t);
        var o = e("c4fd"), n = e.n(o);
        for (var i in o) "default" !== i && function(a) {
            e.d(t, a, function() {
                return o[a];
            });
        }(i);
        t["default"] = n.a;
    },
    "997b": function(a, t, e) {
        "use strict";
        var o, n = function() {
            var a = this, t = a.$createElement;
            a._self._c;
        }, i = [];
        e.d(t, "b", function() {
            return n;
        }), e.d(t, "c", function() {
            return i;
        }), e.d(t, "a", function() {
            return o;
        });
    },
    c4fd: function(a, t, o) {
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
                        daojishi: "",
                        goods_list: [],
                        invite_member_id: 0
                    };
                },
                onLoad: function(t) {
                    a.showLoading({
                        title: "加载中"
                    }), console.log(t), this.id = t.id, t.invite_member_id && (this.invite_member_id = t.invite_member_id);
                },
                onShareAppMessage: function(t) {
                    return {
                        title: this.showdata.name,
                        imageUrl: this.showdata.image,
                        path: "/pages/kanj/yaoq?id=" + this.id + "&invite_member_id=" + a.getStorageSync("member_id")
                    };
                },
                onShow: function() {
                    var t = this;
                    clearInterval(this.daojishi), a.hideTabBar({}), this.invite_member_id, this.getgoods(), 
                    a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            t.theme_color = e.data.data.app_theme_bg_color, a.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            }), t.guanggaoid2 = e.data.data.wx_video_reward_advert_key;
                        }
                    });
                },
                methods: {
                    getgoods: function() {
                        var t = this;
                        a.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "bargain.get_goods_detail",
                                token: a.getStorageSync("token"),
                                goods_id: this.id
                            },
                            success: function(e) {
                                t.showdata = e.data.data.goods, t.showdata.self_bargain = parseInt(t.showdata.self_bargain), 
                                t.showdata.self_bargain_limit = parseInt(t.showdata.self_bargain_limit), t.logdata = e.data.data.order_log, 
                                t.goods_list = e.data.data.goods_list;
                                var o = Date.parse(new Date());
                                t.timecha = t.showdata.end_time - o / 1e3, a.hideLoading(), t.timecha < 0 ? t.timecha = 0 : (console.log(t.timecha), 
                                clearInterval(t.daojishi), t.timecha = t.timecha - 1, t.shi = parseInt(t.timecha / 3600), 
                                t.fen = parseInt(t.timecha % 3600 / 60), t.miao = parseInt(t.timecha % 60), t.daojishi = setInterval(function() {
                                    t.timecha > 1 ? (t.timecha = t.timecha - 1, t.shi = parseInt(t.timecha / 3600), 
                                    t.fen = parseInt(t.timecha % 3600 / 60), t.miao = parseInt(t.timecha % 60)) : clearInterval(t.daojishi);
                                }, 1e3));
                            }
                        });
                    },
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
                    kanjia: function() {
                        var t = this;
                        a.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "bargain.post_ad_bargain",
                                token: a.getStorageSync("token"),
                                goods_id: t.id
                            },
                            success: function(e) {
                                1 == e.data.code ? (a.showToast({
                                    title: e.data.data,
                                    icon: "none"
                                }), t.getgoods()) : a.showToast({
                                    title: e.data.msg,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    goscreen: function() {
                        var t = this;
                        0 != t.guanggaoid2 && "" != t.guanggaoid2 && a.showModal({
                            title: "再砍一刀",
                            content: "观看视频再砍一刀？",
                            success: function(a) {
                                if (a.confirm) {
                                    var e = wx.createRewardedVideoAd({
                                        adUnitId: t.guanggaoid2
                                    });
                                    console.log("执行广告"), e.onLoad(function(a) {
                                        console.log("videoAd onLoad", a);
                                    }), e.onError(function(a) {
                                        console.log("videoAd onError", a);
                                    }), e.load().then(function() {
                                        console.log("激励视频加载成功"), e.show().then(function() {
                                            console.log("激励视频 广告显示成功");
                                        }).catch(function(a) {
                                            console.log("激励视频 广告显示失败");
                                        });
                                    }).catch(function(a) {
                                        console.log("激励视频加载失败");
                                    }), e.offClose(), e.show(), console.log(e), e.onClose(function(a) {
                                        console.log(a), a.isEnded && (clearInterval(t.dao), clearInterval(t.fdao), t.kanjia());
                                    });
                                } else a.cancel;
                            }
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, o("543d")["default"]);
    },
    f393f: function(a, t, e) {
        "use strict";
        e.r(t);
        var o = e("997b"), n = e("8bc1");
        for (var i in n) "default" !== i && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(i);
        e("131a");
        var r, d = e("f0c5"), c = Object(d["a"])(n["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], r);
        t["default"] = c.exports;
    }
}, [ [ "8541", "common/runtime", "common/vendor" ] ] ]);