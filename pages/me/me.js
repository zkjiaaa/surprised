(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/me/me" ], {
    "0875": function(a, t, e) {
        "use strict";
        e.r(t);
        var n = e("66a8"), o = e("bf0e");
        for (var i in o) "default" !== i && function(a) {
            e.d(t, a, function() {
                return o[a];
            });
        }(i);
        e("93d5");
        var r, d = e("f0c5"), u = Object(d["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], r);
        t["default"] = u.exports;
    },
    "66a8": function(a, t, e) {
        "use strict";
        var n, o = function() {
            var a = this, t = a.$createElement;
            a._self._c;
        }, i = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return i;
        }), e.d(t, "a", function() {
            return n;
        });
    },
    "87f0": function(a, t, e) {
        "use strict";
        (function(a) {
            e("0207");
            n(e("66fd"));
            var t = n(e("0875"));
            function n(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            a(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    "93d5": function(a, t, e) {
        "use strict";
        var n = e("ade6"), o = e.n(n);
        o.a;
    },
    ade6: function(a, t, e) {},
    bf0e: function(a, t, e) {
        "use strict";
        e.r(t);
        var n = e("d815"), o = e.n(n);
        for (var i in n) "default" !== i && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(i);
        t["default"] = o.a;
    },
    d815: function(a, t, e) {
        "use strict";
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function() {
                e.e("components/tabBar").then(function() {
                    return resolve(e("7d1c"));
                }.bind(null, e)).catch(e.oe);
            }, o = function() {
                e.e("components/modal/modal").then(function() {
                    return resolve(e("f15b"));
                }.bind(null, e)).catch(e.oe);
            }, i = getApp(), r = e("de50"), d = {
                components: {
                    itabBar: n,
                    tuiModal: o
                },
                data: function() {
                    return {
                        comment_plugin_state: 0,
                        appbox: "",
                        prize_is_show: 0,
                        interstitialAd: "",
                        daily_prize_num: 0,
                        member_prize_num: 0,
                        daodao: "",
                        modal8: !1,
                        member_id: 0,
                        prize_draw_name: "抽奖",
                        guanggaoid: 0,
                        qq_groupIdList: 0,
                        heziid: 0,
                        is_show_help: 0,
                        jilunum: 0,
                        theme_color: "#fff",
                        showdata: [],
                        is_show_about_us: 0,
                        score_name: "",
                        chapingid: 0,
                        choujnum1: 0,
                        choujnum2: 0,
                        kef: ""
                    };
                },
                onLoad: function() {
                    var t = this;
                    a.hideTabBar(), a.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(a) {
                            t.prize_is_show = a.data.data.prize_is_show, t.score_name = a.data.data.score_name, 
                            t.guanggaoid = a.data.data.wx_video_advert_key, t.heziid = a.data.data.wx_table_advert_key;
                        }
                    });
                },
                onShareAppMessage: function(a) {},
                onHide: function() {
                    clearInterval(this.daodao);
                },
                onShow: function() {
                    var t = this;
                    a.hideTabBar(), clearInterval(this.daodao), a.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            t.theme_color = e.data.data.app_theme_bg_color, t.prize_draw_name = e.data.data.prize_draw_name, 
                            a.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            }), a.setNavigationBarTitle({
                                title: e.data.data.wepro_tabbar_list.t5
                            }), t.is_show_help = e.data.data.is_show_help, t.is_show_about_us = e.data.data.is_show_about_us, 
                            t.comment_plugin_state = e.data.data.comment_plugin_state, t.bargain_is_open = e.data.data.bargain_is_open, 
                            t.chapingid = e.data.data.wx_screen_advert_key, t.interstitialAd = wx.createInterstitialAd({
                                adUnitId: t.chapingid
                            }), t.interstitialAd.onLoad(), t.interstitialAd.onError(function(a) {}), t.interstitialAd.onClose(function() {}), 
                            t.daodao = setInterval(function() {
                                i.globalData.chaping && (console.log("是时候展现真正的插屏广告了！"), i.globalData.chaping = !1, 
                                t.interstitialAd.show().catch(function(a) {
                                    console.error(a);
                                }));
                            }, 1e3);
                        }
                    }), a.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "score.get_order_list",
                            token: a.getStorageSync("token"),
                            status: 0
                        },
                        success: function(a) {
                            t.jilunum = a.data.data.length;
                        }
                    }), console.log("getlogin = " + r.getLogin()), a.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "user.userInfo",
                            token: a.getStorageSync("token")
                        },
                        success: function(e) {
                            1001 != e.data.code ? (t.daily_prize_num = e.data.data.daily_prize_num, t.member_prize_num = e.data.data.member_prize_num, 
                            t.showdata = e.data.data.user_info, t.choujnum1 = e.data.data.join_num, t.choujnum2 = e.data.data.win_num) : a.showModal({
                                title: "您未登录",
                                content: "是否去登录？",
                                success: function(t) {
                                    t.confirm ? a.navigateTo({
                                        url: "../../justother/login/login"
                                    }) : t.cancel && a.switchTab({
                                        url: "../index/index"
                                    });
                                }
                            });
                        }
                    }), a.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(a) {
                            t.kef = a.data.data.wepro_service_number;
                        }
                    });
                },
                methods: {
                    show8: function() {
                        this.modal8 = !0;
                    },
                    hide8: function() {
                        this.modal8 = !1;
                    },
                    gojilu: function() {
                        a.navigateTo({
                            url: "./choujlist"
                        });
                    },
                    gomylist: function() {
                        a.navigateTo({
                            url: "./mychouj"
                        });
                    },
                    goduihlist: function() {
                        a.navigateTo({
                            url: "./duihlist"
                        });
                    },
                    gowenti: function() {
                        a.navigateTo({
                            url: "./wenti"
                        });
                    },
                    govip: function() {
                        a.navigateTo({
                            url: "./vip"
                        });
                    },
                    kefu: function() {
                        a.request({
                            url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "index.config"
                            },
                            success: function(t) {
                                a.setClipboardData({
                                    data: t.data.data.wepro_service_number,
                                    success: function() {
                                        console.log("success");
                                    }
                                });
                            }
                        });
                    }
                }
            };
            t.default = d;
        }).call(this, e("543d")["default"]);
    }
}, [ [ "87f0", "common/runtime", "common/vendor" ] ] ]);