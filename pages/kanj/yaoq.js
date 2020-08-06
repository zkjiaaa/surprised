(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/kanj/yaoq" ], {
    "0855": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("3359"), i = a.n(n);
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        t["default"] = i.a;
    },
    "1df7": function(e, t, a) {
        "use strict";
        var n, i = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, o = [];
        a.d(t, "b", function() {
            return i;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {
            return n;
        });
    },
    3359: function(t, a, n) {
        "use strict";
        (function(t) {
            var i;
            function o(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var r = n("de50"), d = {
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
                        goods_list: [],
                        invite_member_id: 0
                    };
                },
                onLoad: function(e) {
                    t.showLoading({
                        title: "加载中"
                    }), this.id = e.id, e.invite_member_id && (this.invite_member_id = e.invite_member_id), 
                    console.log(e);
                },
                onShareAppMessage: function(e) {
                    return {
                        title: this.showdata.name,
                        imageUrl: this.showdata.image,
                        path: "/pages/kanj/yaoq?id=" + this.id + "&invite_member_id=" + this.invite_member_id
                    };
                },
                onShow: function() {
                    var e = this;
                    clearInterval(this.daojishi), t.hideTabBar({}), t.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "user.userInfo",
                            token: t.getStorageSync("token")
                        },
                        success: function(e) {
                            1001 != e.data.code || t.showModal({
                                title: "您未登录",
                                content: "是否去登录？",
                                success: function(e) {
                                    e.confirm ? t.navigateTo({
                                        url: "../../justother/login/login"
                                    }) : e.cancel && t.switchTab({
                                        url: "../index/index"
                                    });
                                }
                            });
                        }
                    }), this.invite_member_id, console.log(this.id), this.getkanjiadata(), t.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(a) {
                            e.theme_color = a.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: a.data.data.app_theme_bg_color
                            }), e.guanggaoid2 = a.data.data.wx_video_reward_advert_key;
                        }
                    });
                },
                methods: (i = {
                    getkanjiadata: function() {
                        var e = this;
                        t.request({
                            url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "bargain.friend_bargain_page",
                                token: t.getStorageSync("token"),
                                goods_id: this.id,
                                invite_member_id: this.invite_member_id
                            },
                            success: function(a) {
                                console.log(a), 0 == a.data.code && (t.hideLoading(), t.showToast({
                                    title: a.data.msg,
                                    icon: "none"
                                }), setTimeout(function() {
                                    t.reLaunch({
                                        url: "../homepage/more"
                                    });
                                }, 2e3)), e.showdata = a.data.data.goods, e.order = a.data.data.order, e.logdata = a.data.data.order_log, 
                                e.getpercent(), t.hideLoading(), e.goods_list = a.data.data.goods_list;
                                var n = Date.parse(new Date());
                                e.timecha = e.showdata.end_time - n / 1e3, e.timecha < 0 ? e.timecha = 0 : (e.timecha = e.timecha - 1, 
                                e.shi = parseInt(e.timecha / 3600), e.fen = parseInt(e.timecha % 3600 / 60), e.miao = parseInt(e.timecha % 60), 
                                e.daojishi = setInterval(function() {
                                    e.timecha > 1 ? (e.timecha = e.timecha - 1, e.shi = parseInt(e.timecha / 3600), 
                                    e.fen = parseInt(e.timecha % 3600 / 60), e.miao = parseInt(e.timecha % 60)) : clearInterval(e.daojishi);
                                }, 1e3));
                            }
                        });
                    },
                    gomore: function() {
                        t.reLaunch({
                            url: "../homepage/bargain?id=" + this.id
                        });
                    },
                    getpercent: function() {
                        this.percent = this.order.remain_price / this.order.price * 100;
                    },
                    gobargain: function() {
                        t.navigateTo({
                            url: "./bargain?id=" + e
                        });
                    },
                    godingdlist: function() {
                        t.navigateTo({
                            url: "./kanjlist"
                        });
                    }
                }, o(i, "gomore", function() {
                    t.navigateTo({
                        url: "../homepage/more"
                    });
                }), o(i, "kanjia", function() {
                    var e = this;
                    t.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "bargain.post_friend_bargain",
                            token: t.getStorageSync("token"),
                            goods_id: e.id,
                            invite_member_id: e.invite_member_id
                        },
                        success: function(a) {
                            1 == a.data.code ? (t.showToast({
                                title: a.data.data,
                                icon: "none"
                            }), e.getkanjiadata()) : t.showToast({
                                title: a.data.msg,
                                icon: "none"
                            });
                        }
                    });
                }), o(i, "goscreen", function() {
                    var e = this;
                    t.showModal({
                        title: "帮砍一刀",
                        content: "观看视频帮助朋友砍价？",
                        success: function(t) {
                            if (t.confirm) {
                                if (0 != e.guanggaoid2 && "" != e.guanggaoid2) {
                                    var a = wx.createRewardedVideoAd({
                                        adUnitId: e.guanggaoid2
                                    });
                                    a.onLoad(function(e) {}), a.onError(function(e) {}), a.load().then(function() {
                                        a.show().then(function() {}).catch(function(e) {});
                                    }).catch(function(e) {}), a.offClose(), a.show(), a.onClose(function(t) {
                                        t.isEnded && (clearInterval(e.dao), clearInterval(e.fdao), e.kanjia());
                                    });
                                }
                            } else t.cancel;
                        }
                    });
                }), i)
            };
            a.default = d;
        }).call(this, n("543d")["default"]);
    },
    "7e13": function(e, t, a) {},
    "974c": function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("1df7"), i = a("0855");
        for (var o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        a("caf5");
        var r, d = a("f0c5"), c = Object(d["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], r);
        t["default"] = c.exports;
    },
    b488: function(e, t, a) {
        "use strict";
        (function(e) {
            a("0207");
            n(a("66fd"));
            var t = n(a("974c"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, a("543d")["createPage"]);
    },
    caf5: function(e, t, a) {
        "use strict";
        var n = a("7e13"), i = a.n(n);
        i.a;
    }
}, [ [ "b488", "common/runtime", "common/vendor" ] ] ]);