(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/index" ], {
    3103: function(t, a, e) {},
    3161: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("b905"), o = e.n(n);
        for (var i in n) "default" !== i && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(i);
        a["default"] = o.a;
    },
    "944a": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("f572"), o = e("3161");
        for (var i in o) "default" !== i && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(i);
        e("f57c");
        var r, c = e("f0c5"), d = Object(c["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], r);
        a["default"] = d.exports;
    },
    ae7d: function(t, a, e) {
        "use strict";
        (function(t) {
            e("0207");
            n(e("66fd"));
            var a = n(e("944a"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(a.default);
        }).call(this, e("543d")["createPage"]);
    },
    b905: function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            e("5c11");
            var n = getApp(), o = e("de50"), i = function() {
                e.e("components/tabBar").then(function() {
                    return resolve(e("7d1c"));
                }.bind(null, e)).catch(e.oe);
            }, r = function() {
                e.e("components/icon/icon").then(function() {
                    return resolve(e("c8d7"));
                }.bind(null, e)).catch(e.oe);
            }, c = function() {
                e.e("components/refresh").then(function() {
                    return resolve(e("0dab"));
                }.bind(null, e)).catch(e.oe);
            }, d = function() {
                e.e("components/navTab").then(function() {
                    return resolve(e("d7c5"));
                }.bind(null, e)).catch(e.oe);
            }, u = {
                components: {
                    refresh: c,
                    navTab: d,
                    tuiIcon: r,
                    itabBar: i
                },
                data: function() {
                    return {
                        currentPage: "index",
                        gaodushow: !1,
                        qq_groupIdList: 0,
                        index_invite_share_icon: "",
                        index_page_icon: "../../static/home.png",
                        gonggaolist: [],
                        prize_draw_name: "抽奖",
                        animation: !1,
                        sharetitle: "",
                        comment_plugin_state: 0,
                        bargain_is_open: 0,
                        index_invite_wx_icon: "",
                        index_invite_qq_icon: "",
                        theme_color: "#FFFFFF",
                        guanggaoid: 0,
                        shareimage: "",
                        toView: "",
                        tabTitle: [ {
                            logo: "",
                            name: "加载中"
                        }, {
                            logo: "",
                            name: "加载中"
                        }, {
                            logo: "",
                            name: "加载中"
                        } ],
                        currentTab: 0,
                        pages: [],
                        list: [],
                        app_index_page_new: 1
                    };
                },
                onLoad: function(a) {
                    var e = this;
                    t.hideTabBar(), setTimeout(function() {
                        e.animation = !0;
                    }, 600), n.globalData.homeindex = !0;
                },
                onShareAppMessage: function(t) {
                    var a = this;
                    return {
                        title: a.sharetitle,
                        imageUrl: a.shareimage,
                        path: "/pages/index/index"
                    };
                },
                onShow: function() {
                    var a = this;
                    t.hideTabBar(), t.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            a.app_index_page_new = e.data.data.app_index_page_new, 2 == a.app_index_page_new && a.getgonggao(), 
                            a.theme_color = e.data.data.app_theme_bg_color, a.index_page_icon = e.data.data.index_page_icon, 
                            a.qq_groupIdList = e.data.data.qq_groupIdList, a.index_invite_wx_icon = e.data.data.index_invite_wx_icon, 
                            a.index_invite_share_icon = e.data.data.index_invite_share_icon, a.index_invite_qq_icon = e.data.data.index_invite_qq_icon, 
                            t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            }), t.setNavigationBarTitle({
                                title: e.data.data.shoname
                            }), a.prize_draw_name = e.data.data.prize_draw_name, a.comment_plugin_state = e.data.data.comment_plugin_state, 
                            a.bargain_is_open = e.data.data.bargain_is_open, a.guanggaoid = e.data.data.wx_prize_list_video_advert_key;
                        }
                    }), t.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.config"
                        },
                        success: function(t) {
                            a.shareimage = t.data.data.share_img, a.sharetitle = t.data.data.title;
                        }
                    }), t.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.prize_cate_list"
                        },
                        success: function(t) {
                            a.tabTitle = t.data.data, a.list = t.data.data, console.log(a.list);
                        }
                    });
                },
                onHide: function() {},
                methods: {
                    gohome: function() {
                        t.reLaunch({
                            url: "../home/index"
                        });
                    },
                    getgonggao: function() {
                        var a = this;
                        t.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "index.notice"
                            },
                            success: function(t) {
                                a.gonggaolist = t.data.data, a.gonggaolist.length > 0 ? a.gaodushow = !0 : a.gaodushow = !1;
                            }
                        });
                    },
                    daotop: function() {
                        var a = this;
                        console.log("refresh"), t.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.prize_cate_list"
                            },
                            success: function(t) {
                                a.tabTitle = t.data.data, a.list = t.data.data;
                            }
                        });
                    },
                    daobottom: function() {
                        var a = this;
                        t.showLoading(), this.getgonggao(), t.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.prize_cate_list"
                            },
                            success: function(e) {
                                a.tabTitle = e.data.data, a.list = e.data.data, console.log(a.list), t.hideLoading();
                            }
                        });
                    },
                    toTop: function() {
                        var t = this;
                        this.toView = "", setTimeout(function() {
                            t.toView = "top" + t.currentTab;
                        }, 10);
                    },
                    goxq: function(a) {
                        t.navigateTo({
                            url: "./indexxq?id=" + a
                        });
                    },
                    changeTab: function(t) {
                        this.currentTab = t;
                    },
                    tiaozh: function(a, e, n) {
                        console.log(a), console.log(e), console.log(n), 1 == a ? t.reLaunch({
                            url: n
                        }) : t.navigateToMiniProgram({
                            appId: e,
                            path: n,
                            success: function(t) {
                                console.log("打开成功");
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    isRequest: function() {
                        var a = this;
                        return new Promise(function(e, n) {
                            a.pages[a.currentTab]++;
                            setTimeout(function() {
                                t.hideLoading(), t.showToast({
                                    icon: "none",
                                    title: "到底啦~"
                                });
                                var a = [];
                                e(a);
                            }, 200);
                        });
                    },
                    swiperTab: function(t) {
                        var a = t.detail.current;
                        this.$refs.navTab.longClick(a);
                    }
                }
            };
            a.default = u;
        }).call(this, e("543d")["default"]);
    },
    f572: function(t, a, e) {
        "use strict";
        var n, o = function() {
            var t = this, a = t.$createElement;
            t._self._c;
        }, i = [];
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return i;
        }), e.d(a, "a", function() {
            return n;
        });
    },
    f57c: function(t, a, e) {
        "use strict";
        var n = e("3103"), o = e.n(n);
        o.a;
    }
}, [ [ "ae7d", "common/runtime", "common/vendor" ] ] ]);