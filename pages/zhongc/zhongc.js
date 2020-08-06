(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/zhongc/zhongc" ], {
    "0084": function(t, n, e) {},
    "12ac": function(t, n, e) {
        "use strict";
        var o = e("0084"), a = e.n(o);
        a.a;
    },
    "3daf": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = e("de50"), a = function() {
                e.e("components/tabBar").then(function() {
                    return resolve(e("7d1c"));
                }.bind(null, e)).catch(e.oe);
            }, c = {
                components: {
                    itabBar: a
                },
                data: function() {
                    return {
                        list: [],
                        theme_color: "#fff"
                    };
                },
                onLoad: function() {
                    t.hideTabBar();
                },
                onShow: function() {
                    var n = this;
                    t.hideTabBar(), t.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            n.theme_color = e.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            });
                        }
                    }), t.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "comment.get_comment_list",
                            token: t.getStorageSync("token")
                        },
                        success: function(t) {
                            n.list = t.data.data;
                            for (var e = 0; e < t.data.data.length; e++) n.list[e].check_time = 0;
                        }
                    });
                },
                onShareAppMessage: function() {},
                methods: {
                    quanbu: function(t) {
                        this.list[t].check_time = 1;
                    },
                    fabu: function() {
                        t.navigateTo({
                            url: "./fabu"
                        });
                    },
                    yulan: function(n, e) {
                        console.log(n), t.previewImage({
                            urls: n,
                            current: e,
                            longPressActions: {
                                itemList: [ "发送给朋友", "保存图片", "收藏" ],
                                success: function(t) {
                                    console.log("选中了第" + (t.tapIndex + 1) + "个按钮,第" + (t.index + 1) + "张图片");
                                },
                                fail: function(t) {
                                    console.log(t.errMsg);
                                }
                            }
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d")["default"]);
    },
    "513d": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("3daf"), a = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n["default"] = a.a;
    },
    "5e94": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("cf28"), a = e("513d");
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        e("12ac");
        var r, u = e("f0c5"), i = Object(u["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], r);
        n["default"] = i.exports;
    },
    "930e": function(t, n, e) {
        "use strict";
        (function(t) {
            e("0207");
            o(e("66fd"));
            var n = o(e("5e94"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    cf28: function(t, n, e) {
        "use strict";
        var o, a = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, c = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {
            return o;
        });
    }
}, [ [ "930e", "common/runtime", "common/vendor" ] ] ]);