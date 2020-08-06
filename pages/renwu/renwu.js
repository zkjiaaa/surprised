(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/renwu/renwu" ], {
    "3de4": function(a, e, t) {
        "use strict";
        (function(a) {
            t("0207");
            n(t("66fd"));
            var e = n(t("d12f"));
            function n(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            a(e.default);
        }).call(this, t("543d")["createPage"]);
    },
    "406d": function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("84cb"), o = t.n(n);
        for (var i in n) "default" !== i && function(a) {
            t.d(e, a, function() {
                return n[a];
            });
        }(i);
        e["default"] = o.a;
    },
    "58f6": function(a, e, t) {},
    "84cb": function(a, e, t) {
        "use strict";
        (function(a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = t("de50"), o = function() {
                t.e("components/tabBar").then(function() {
                    return resolve(t("7d1c"));
                }.bind(null, t)).catch(t.oe);
            }, i = getApp(), d = {
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
                        shareimage: "",
                        sharetitle: "",
                        prize_is_show: 0,
                        qian: !1,
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
                        path: "/pages/renwu/renwu"
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
                    a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.config"
                        },
                        success: function(a) {
                            e.shareimage = a.data.data.share_img, e.sharetitle = a.data.data.title;
                        }
                    }), a.hideTabBar(), clearInterval(this.daodao), a.request({
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
                            e.prize_is_show = t.data.data.prize_is_show, e.score_icon = t.data.data.score_icon, 
                            e.prize_draw_name = t.data.data.prize_draw_name, e.theme_color = t.data.data.app_theme_bg_color, 
                            e.comment_plugin_state = t.data.data.comment_plugin_state, e.bargain_is_open = t.data.data.bargain_is_open, 
                            e.task_self_name = t.data.data.task_self_name, e.task_sign_name = t.data.data.task_sign_name, 
                            e.task_message = t.data.data.task_message, a.setNavigationBarColor({
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
                            }), e.showdata = t.data.data.user_info, e.choujnum1 = t.data.data.join_num, e.choujnum2 = t.data.data.win_num;
                        }
                    }), a.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "sign.getSignInfo",
                            token: a.getStorageSync("token")
                        },
                        success: function(a) {
                            e.num = a.data.data.num, e.dianid = a.data.data.continuation, e.see_adv_end = a.data.data.see_adv_end, 
                            e.participate_prizedraw_end = a.data.data.participate_prizedraw_end, e.participate_prizedraw_num = parseInt(a.data.data.participate_prizedraw_num), 
                            e.see_adv_need_num = parseInt(a.data.data.see_adv_need_num), e.see_adv_score = a.data.data.see_adv_score, 
                            e.days_cycle = a.data.data.days_cycle, e.invite_new_need_num = parseInt(a.data.data.invite_new_need_num), 
                            e.invite_new_score = a.data.data.invite_new_score, e.invite_new_end = a.data.data.invite_new_end, 
                            e.invite_new_num = a.data.data.invite_new_num, e.participate_prizedraw_score = a.data.data.participate_prizedraw_score, 
                            e.participate_prizedraw_need_num = parseInt(a.data.data.participate_prizedraw_need_num), 
                            e.see_adv = parseInt(a.data.data.see_adv), e.sign_cycle_days = a.data.data.sign_cycle_days, 
                            1 == a.data.data.has_sign ? e.qian = !0 : e.qian = !1;
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
                            url: "../home/index"
                        });
                    },
                    ma: function() {
                        var e = this, t = wx.createRewardedVideoAd({
                            adUnitId: e.guanggaoid2
                        });
                        t.load().then(function() {
                            console.log("激励视频加载成功"), t.show().then(function() {
                                console.log("激励视频 广告显示成功");
                            }).catch(function(a) {
                                console.log("激励视频 广告显示失败");
                            });
                        }).catch(function(a) {
                            console.log("激励视频加载失败");
                        }), t.offClose(), t.show(), t.onClose(function(t) {
                            console.log(t), t.isEnded && a.request({
                                url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                data: {
                                    controller: "adv.addSeeLog",
                                    token: a.getStorageSync("token"),
                                    type: 1
                                },
                                success: function(t) {
                                    console.log("执行了这个"), a.request({
                                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                        data: {
                                            controller: "sign.getSignInfo",
                                            token: a.getStorageSync("token")
                                        },
                                        success: function(a) {
                                            e.num = a.data.data.num, e.dianid = a.data.data.continuation, e.see_adv_end = a.data.data.see_adv_end, 
                                            e.participate_prizedraw_end = a.data.data.participate_prizedraw_end, e.participate_prizedraw_num = parseInt(a.data.data.participate_prizedraw_num), 
                                            e.see_adv_need_num = parseInt(a.data.data.see_adv_need_num), e.see_adv_score = a.data.data.see_adv_score, 
                                            e.participate_prizedraw_score = a.data.data.participate_prizedraw_score, e.participate_prizedraw_need_num = parseInt(a.data.data.participate_prizedraw_need_num), 
                                            e.see_adv = parseInt(a.data.data.see_adv), e.sign_cycle_days = a.data.data.sign_cycle_days, 
                                            1 == a.data.data.has_sign && (e.qian = !0);
                                        }
                                    });
                                }
                            });
                        });
                    },
                    qiandao: function(e) {
                        var t = [];
                        t.push(this.wx_sign_template_id), console.log("thatlist"), console.log(t), wx.requestSubscribeMessage({
                            tmplIds: t,
                            success: function(a) {
                                console.log(a);
                            },
                            fail: function(a) {
                                console.log(a);
                            }
                        }), console.log(e.detail.formId);
                        var o = this;
                        console.log("guanggaoid", o.guanggaoid2);
                        var i = wx.createRewardedVideoAd({
                            adUnitId: o.guanggaoid2
                        });
                        0 == o.guanggaoid2 || "" == o.guanggaoid2 ? a.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "sign.doSign",
                                token: a.getStorageSync("token")
                            },
                            success: function(e) {
                                1 == e.data.code ? (a.request({
                                    url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "sign.getSignInfo",
                                        token: a.getStorageSync("token")
                                    },
                                    success: function(a) {
                                        o.days_cycle = a.data.data.days_cycle, o.sign_cycle_days = a.data.data.sign_cycle_days, 
                                        1 == a.data.data.has_sign ? o.qian = !0 : o.qian = !1;
                                    }
                                }), o.dianid = parseInt(o.dianid) + 1, o.qian = !0) : a.showToast({
                                    title: e.data.msg,
                                    icon: "none"
                                });
                            }
                        }) : (i.load().then(function() {
                            console.log("激励视频加载成功"), i.show().then(function() {
                                console.log("激励视频 广告显示成功");
                            }).catch(function(a) {
                                console.log("激励视频 广告显示失败");
                            });
                        }).catch(function(a) {
                            console.log("激励视频加载失败", a);
                        }), i.offClose(), i.show(), i.onClose(function(e) {
                            console.log(e), e.isEnded && a.request({
                                url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                data: {
                                    controller: "sign.doSign",
                                    token: a.getStorageSync("token")
                                },
                                success: function(e) {
                                    1 == e.data.code ? (a.request({
                                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                        data: {
                                            controller: "sign.getSignInfo",
                                            token: a.getStorageSync("token")
                                        },
                                        success: function(a) {
                                            o.days_cycle = a.data.data.days_cycle, o.sign_cycle_days = a.data.data.sign_cycle_days, 
                                            1 == a.data.data.has_sign ? o.qian = !0 : o.qian = !1;
                                        }
                                    }), o.dianid = parseInt(o.dianid) + 1, o.qian = !0) : a.showToast({
                                        title: e.data.msg,
                                        icon: "none"
                                    });
                                }
                            });
                        }));
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
                    },
                    gopaih: function() {
                        a.navigateTo({
                            url: "./paih"
                        });
                    }
                }
            };
            e.default = d;
        }).call(this, t("543d")["default"]);
    },
    b656: function(a, e, t) {
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
    d12f: function(a, e, t) {
        "use strict";
        t.r(e);
        var n = t("b656"), o = t("406d");
        for (var i in o) "default" !== i && function(a) {
            t.d(e, a, function() {
                return o[a];
            });
        }(i);
        t("f1f7");
        var d, r = t("f0c5"), s = Object(r["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], d);
        e["default"] = s.exports;
    },
    f1f7: function(a, e, t) {
        "use strict";
        var n = t("58f6"), o = t.n(n);
        o.a;
    }
}, [ [ "3de4", "common/runtime", "common/vendor" ] ] ]);