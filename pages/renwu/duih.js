(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/renwu/duih" ], {
    1145: function(a, e, t) {
        "use strict";
        (function(a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = t("de50"), o = function() {
                t.e("components/tabBar").then(function() {
                    return resolve(t("7d1c"));
                }.bind(null, t)).catch(t.oe);
            }, i = getApp(), r = {
                components: {
                    itabBar: o
                },
                data: function() {
                    return {
                        prize_draw_name: "抽奖",
                        dianid: 2,
                        bargain_is_open: 0,
                        days_cycle: 0,
                        comment_plugin_state: 0,
                        score_icon: "",
                        score_goods_style: 1,
                        invite_new_need_num: 0,
                        invite_new_score: 0,
                        invite_new_end: 0,
                        invite_new_num: 0,
                        interstitialAd: "",
                        chapingid: 0,
                        daodao: "",
                        guanggaoid: 0,
                        wx_personal_template_id: "",
                        guanggaoid2: 0,
                        showdata: [],
                        score_name: "",
                        see_adv_need_num: 0,
                        see_adv_score: 0,
                        see_adv_end: 0,
                        participate_prizedraw_end: 0,
                        see_adv: 0,
                        psize: 6,
                        theme_color: "#fff",
                        participate_prizedraw_score: 0,
                        participate_prizedraw_need_num: 0,
                        participate_prizedraw_num: 0,
                        qian: !1,
                        shareimage: "",
                        sharetitle: "",
                        num: [],
                        list: [],
                        task_self_name: "",
                        task_sign_name: "",
                        task_message: "",
                        sign_cycle_days: 0
                    };
                },
                onLoad: function(e) {
                    a.hideTabBar();
                },
                onShareAppMessage: function(a) {
                    var e = this;
                    return {
                        title: e.sharetitle,
                        imageUrl: e.shareimage,
                        path: "/pages/renwu/duih"
                    };
                },
                onHide: function() {
                    clearInterval(this.daodao);
                },
                onReachBottom: function() {
                    var e = this;
                    a.showLoading({}), this.psize = this.psize + 6, a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "score.get_goods_list",
                            token: a.getStorageSync("token"),
                            psize: this.psize
                        },
                        success: function(t) {
                            e.list = t.data.data.goods_list, a.hideLoading();
                        }
                    });
                },
                onShow: function() {
                    var e = this;
                    a.hideTabBar(), clearInterval(this.daodao), a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.config"
                        },
                        success: function(a) {
                            e.shareimage = a.data.data.share_img, e.sharetitle = a.data.data.title;
                        }
                    }), a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "score.get_goods_list",
                            token: a.getStorageSync("token"),
                            psize: this.psize
                        },
                        success: function(a) {
                            e.list = a.data.data.goods_list, a.data.data.score_goods_style && (e.score_goods_style = a.data.data.score_goods_style);
                        }
                    }), a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(t) {
                            e.score_icon = t.data.data.score_icon, e.prize_draw_name = t.data.data.prize_draw_name, 
                            e.theme_color = t.data.data.app_theme_bg_color, e.comment_plugin_state = t.data.data.comment_plugin_state, 
                            e.bargain_is_open = t.data.data.bargain_is_open, e.task_self_name = t.data.data.task_self_name, 
                            e.task_sign_name = t.data.data.task_sign_name, e.task_message = t.data.data.task_message, 
                            a.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: t.data.data.app_theme_bg_color
                            }), a.setNavigationBarTitle({
                                title: t.data.data.wepro_tabbar_list.t2
                            }), e.score_name = t.data.data.score_name, e.guanggaoid2 = t.data.data.wx_sign_advert_key, 
                            e.guanggaoid = t.data.data.wx_video_advert_key, e.wx_sign_template_id = t.data.data.wx_sign_template_id, 
                            e.chapingid = t.data.data.wx_screen_advert_key, e.interstitialAd = wx.createInterstitialAd({
                                adUnitId: e.chapingid
                            }), e.interstitialAd.onLoad(), e.interstitialAd.onError(function(a) {}), e.interstitialAd.onClose(function() {}), 
                            e.daodao = setInterval(function() {
                                i.globalData.chaping && (console.log("是时候展现真正的插屏广告了！"), i.globalData.chaping = !1, 
                                e.interstitialAd.show().catch(function(a) {
                                    console.error(a);
                                }));
                            }, 1e3);
                        }
                    }), a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "user.userInfo",
                            token: a.getStorageSync("token")
                        },
                        success: function(t) {
                            1001 == t.data.code && a.showModal({
                                title: "您未登录",
                                content: "是否去登录？",
                                success: function(e) {
                                    e.confirm ? a.navigateTo({
                                        url: "../../justother/login/login"
                                    }) : e.cancel && a.reLaunch({
                                        url: "../index/index"
                                    });
                                }
                            }), e.showdata = t.data.data.user_info, e.choujnum1 = t.data.data.join_num;
                        }
                    });
                },
                methods: {
                    gomingx: function() {},
                    lingqu: function(e) {
                        var t = this;
                        a.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "index.taskOver",
                                token: a.getStorageSync("token"),
                                type: e
                            },
                            success: function(n) {
                                1 == n.data.code ? 0 == e ? t.see_adv_end = 1 : 1 == e ? t.participate_prizedraw_end = 1 : t.invite_new_end = 1 : a.showToast({
                                    title: n.data.msg,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    goindex: function() {
                        a.reLaunch({
                            url: "../index/index"
                        });
                    },
                    duihuan: function(e, t, n) {
                        var o = this;
                        a.showModal({
                            title: "兑换奖品",
                            content: "是否消耗" + t + this.score_name + "兑换此礼品？",
                            success: function(i) {
                                i.confirm ? parseFloat(o.showdata.score) >= t ? a.navigateTo({
                                    url: "../duih/duihorder?id=" + e + "&type=" + n
                                }) : a.showToast({
                                    title: o.score_name + "不足",
                                    icon: "none"
                                }) : i.cancel && a.showToast({
                                    title: "取消兑换",
                                    icon: "none"
                                });
                            }
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, t("543d")["default"]);
    },
    "5bcc": function(a, e, t) {},
    "6e2e": function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("1145"), o = t.n(n);
        for (var i in n) "default" !== i && function(a) {
            t.d(e, a, function() {
                return n[a];
            });
        }(i);
        e["default"] = o.a;
    },
    "8ba3": function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("c35f"), o = t("6e2e");
        for (var i in o) "default" !== i && function(a) {
            t.d(e, a, function() {
                return o[a];
            });
        }(i);
        t("ef8b");
        var r, s = t("f0c5"), d = Object(s["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], r);
        e["default"] = d.exports;
    },
    c35f: function(a, e, t) {
        "use strict";
        var n, o = function() {
            var a = this, e = a.$createElement;
            a._self._c;
        }, i = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {
            return n;
        });
    },
    ef8b: function(a, e, t) {
        "use strict";
        var n = t("5bcc"), o = t.n(n);
        o.a;
    },
    f626: function(a, e, t) {
        "use strict";
        (function(a) {
            t("0207");
            n(t("66fd"));
            var e = n(t("8ba3"));
            function n(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            a(e.default);
        }).call(this, t("543d")["createPage"]);
    }
}, [ [ "f626", "common/runtime", "common/vendor" ] ] ]);