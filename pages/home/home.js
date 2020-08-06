(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/home/home" ], {
    "19b3": function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("7116"), t = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(a, e, function() {
                return i[e];
            });
        }(o);
        a["default"] = t.a;
    },
    "1ed6": function(e, a, n) {
        "use strict";
        var i = n("9b66"), t = n.n(i);
        t.a;
    },
    "57d3": function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("ad7c"), t = n("19b3");
        for (var o in t) "default" !== o && function(e) {
            n.d(a, e, function() {
                return t[e];
            });
        }(o);
        n("1ed6");
        var _, r = n("f0c5"), d = Object(r["a"])(t["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], _);
        a["default"] = d.exports;
    },
    "6f7e": function(e, a, n) {
        "use strict";
        (function(e) {
            n("0207");
            i(n("66fd"));
            var a = i(n("57d3"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(a.default);
        }).call(this, n("543d")["createPage"]);
    },
    7116: function(e, a, n) {
        "use strict";
        (function(e) {
            function i(e, a, n) {
                return a in e ? Object.defineProperty(e, a, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = n, e;
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var t = n("de50"), o = function() {
                n.e("components/icon/icon").then(function() {
                    return resolve(n("c8d7"));
                }.bind(null, n)).catch(n.oe);
            }, _ = getApp(), r = function() {
                n.e("components/tabBar").then(function() {
                    return resolve(n("7d1c"));
                }.bind(null, n)).catch(n.oe);
            }, d = {
                components: {
                    itabBar: r,
                    tuiIcon: o
                },
                data: function() {
                    var e;
                    return e = {
                        comment_plugin_state: 0,
                        prize_is_show: 0,
                        is_show_prize_image: "",
                        is_show_comment_image: "",
                        is_show_question_gift_image: "",
                        is_show_exchange_image: "",
                        is_show_question_image: "",
                        is_show_task_image: "",
                        is_show_bargain_image: "",
                        index_task_image: "",
                        index_exchange_image: "",
                        index_question_gift_image: "",
                        index_comment_image: "",
                        index_question_image: "",
                        index_bargain_image: "",
                        theme_color: "#FFFFFF",
                        invite_member_id: 0,
                        bargain_banner: "",
                        bei: !1,
                        heziid: 0,
                        currentPage: "index",
                        gaodushow: !0,
                        qq_groupIdList: 0,
                        index_invite_share_icon: "",
                        gonggaolist: [],
                        prize_draw_name: "抽奖",
                        animation: !1,
                        sharetitle: ""
                    }, i(e, "comment_plugin_state", 0), i(e, "bargain_is_open", 0), i(e, "interstitialAd", ""), 
                    i(e, "index_invite_wx_icon", ""), i(e, "index_invite_qq_icon", ""), i(e, "chapingid", 0), 
                    i(e, "index_prize_image", ""), i(e, "index_page_banner_url_type", ""), i(e, "index_page_banner_url", ""), 
                    i(e, "index_page_banner_url_appid", ""), i(e, "daodao", ""), i(e, "theme_color", "#FFFFFF"), 
                    i(e, "appbox", ""), i(e, "guanggaoid", 0), i(e, "shareimage", ""), i(e, "question_page_color", ""), 
                    i(e, "toView", ""), i(e, "tabTitle", [ {
                        logo: "",
                        name: "加载中"
                    }, {
                        logo: "",
                        name: "加载中"
                    }, {
                        logo: "",
                        name: "加载中"
                    } ]), i(e, "currentTab", 0), i(e, "pages", []), i(e, "list", []), i(e, "bei", !1), 
                    e;
                },
                onLoad: function(a) {
                    e.hideTabBar(), a.invite_member_id && (this.bei = !0, this.invite_member_id = a.invite_member_id, 
                    e.getStorageSync("token") || e.showModal({
                        title: "您未登录",
                        content: "是否去登录？",
                        success: function(a) {
                            a.confirm ? e.navigateTo({
                                url: "../../justother/login/login"
                            }) : a.cancel;
                        }
                    }));
                },
                onShareAppMessage: function(a) {
                    return {
                        title: this.showdata.name,
                        imageUrl: this.showdata.image,
                        path: "/pages/home/home?invite_member_id=" + e.getStorageSync("member_id")
                    };
                },
                onShow: function() {
                    var a = this;
                    this.bei && e.request({
                        url: t.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "question.post_invite_member",
                            token: e.getStorageSync("token"),
                            invite_member_id: this.invite_member_id
                        },
                        success: function(n) {
                            a.bei = !1, 1 == n.data.code && e.showToast({
                                title: "已成功为您的好友增加答题机会，快去告诉他吧~",
                                icon: "none"
                            });
                        }
                    }), e.hideTabBar({}), e.request({
                        url: t.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(n) {
                            a.prize_is_show = n.data.data.prize_is_show, a.question_page_color = n.data.data.question_page_color, 
                            a.is_show_prize_image = n.data.data.is_show_prize_image, a.is_show_comment_image = n.data.data.is_show_comment_image, 
                            a.is_show_exchange_image = n.data.data.is_show_exchange_image, a.is_show_question_image = n.data.data.is_show_question_image, 
                            a.is_show_task_image = n.data.data.is_show_task_image, a.is_show_bargain_image = n.data.data.is_show_bargain_image, 
                            a.is_show_question_gift_image = n.data.data.is_show_question_gift_image, a.index_exchange_image = n.data.data.index_exchange_image, 
                            a.index_comment_image = n.data.data.index_comment_image, a.index_bargain_image = n.data.data.index_bargain_image, 
                            a.index_question_gift_image = n.data.data.index_question_gift_image, a.bargain_banner = n.data.data.index_page_banner, 
                            a.index_task_image = n.data.data.index_task_image, a.index_question_image = n.data.data.index_question_image, 
                            a.index_prize_image = n.data.data.index_prize_image, a.theme_color = n.data.data.app_theme_bg_color, 
                            a.qq_groupIdList = n.data.data.qq_groupIdList, a.index_invite_wx_icon = n.data.data.index_invite_wx_icon, 
                            a.index_invite_share_icon = n.data.data.index_invite_share_icon, a.index_invite_qq_icon = n.data.data.index_invite_qq_icon, 
                            e.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: n.data.data.app_theme_bg_color
                            }), e.setNavigationBarTitle({
                                title: n.data.data.shoname
                            }), a.prize_draw_name = n.data.data.prize_draw_name, a.comment_plugin_state = n.data.data.comment_plugin_state, 
                            a.bargain_is_open = n.data.data.bargain_is_open, a.guanggaoid = n.data.data.wx_prize_list_video_advert_key, 
                            a.chapingid = n.data.data.wx_screen_advert_key, a.interstitialAd = wx.createInterstitialAd({
                                adUnitId: a.chapingid
                            }), a.index_page_banner_url = n.data.data.index_page_banner_url, a.index_page_banner_url_appid = n.data.data.index_page_banner_url_appid, 
                            a.index_page_banner_url_type = n.data.data.index_page_banner_url_type, a.interstitialAd.onLoad(), 
                            a.interstitialAd.onError(function(e) {}), a.interstitialAd.onClose(function() {}), 
                            a.daodao = setInterval(function() {
                                _.globalData.chaping && (console.log("是时候展现真正的插屏广告了！"), _.globalData.chaping = !1, 
                                a.interstitialAd.show().catch(function(e) {
                                    console.error(e);
                                }));
                            }, 1e3);
                        }
                    }), e.request({
                        url: t.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.prize_cate_list"
                        },
                        success: function(e) {
                            a.list = e.data.data, console.log(a.list);
                        }
                    }), this.getgonggao(), e.request({
                        url: t.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.config"
                        },
                        success: function(e) {
                            a.shareimage = e.data.data.share_img, a.sharetitle = e.data.data.title;
                        }
                    });
                },
                methods: {
                    gozhongc: function() {
                        e.navigateTo({
                            url: "/pages/zhongc/zhongc"
                        });
                    },
                    godati: function() {
                        e.request({
                            url: t.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "user.userInfo",
                                token: e.getStorageSync("token")
                            },
                            success: function(a) {
                                1001 == a.data.code ? e.showModal({
                                    title: "您未登录",
                                    content: "是否去登录？",
                                    success: function(a) {
                                        a.confirm ? e.navigateTo({
                                            url: "../../justother/login/login"
                                        }) : a.cancel;
                                    }
                                }) : e.navigateTo({
                                    url: "/pages/homepage/answer"
                                });
                            }
                        });
                    },
                    gomore: function() {
                        e.navigateTo({
                            url: "../homepage/more"
                        });
                    },
                    getgonggao: function() {
                        var a = this;
                        e.request({
                            url: t.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "index.notice"
                            },
                            success: function(e) {
                                a.gonggaolist = e.data.data, a.gonggaolist.length > 0 ? a.gaodushow = !0 : a.gaodushow = !1;
                            }
                        });
                    },
                    gotiaoz: function() {
                        var a = this;
                        0 == a.index_page_banner_url_type ? e.reLaunch({
                            url: a.index_page_banner_url
                        }) : (console.log(a.index_page_banner_url_appid), e.navigateToMiniProgram({
                            appId: a.index_page_banner_url_appid,
                            success: function(e) {
                                console.log("打开成功");
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        }));
                    },
                    goxq: function(a) {
                        e.navigateTo({
                            url: "/pages/index/indexxq?id=" + a
                        });
                    },
                    gorenwu: function() {
                        e.reLaunch({
                            url: "/pages/renwu/renwu"
                        });
                    },
                    goduih: function() {
                        e.navigateTo({
                            url: "/pages/homepage/exchange"
                        });
                    },
                    goduihuan: function() {
                        e.reLaunch({
                            url: "/pages/renwu/duih"
                        });
                    },
                    goindex: function() {
                        e.navigateTo({
                            url: "/pages/index/index"
                        });
                    }
                }
            };
            a.default = d;
        }).call(this, n("543d")["default"]);
    },
    "9b66": function(e, a, n) {},
    ad7c: function(e, a, n) {
        "use strict";
        var i, t = function() {
            var e = this, a = e.$createElement;
            e._self._c;
        }, o = [];
        n.d(a, "b", function() {
            return t;
        }), n.d(a, "c", function() {
            return o;
        }), n.d(a, "a", function() {
            return i;
        });
    }
}, [ [ "6f7e", "common/runtime", "common/vendor" ] ] ]);