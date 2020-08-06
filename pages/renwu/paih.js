(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/renwu/paih" ], {
    "1c92": function(t, a, e) {
        "use strict";
        (function(t) {
            e("0207");
            n(e("66fd"));
            var a = n(e("e1a5"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(a.default);
        }).call(this, e("543d")["createPage"]);
    },
    "24bf": function(t, a, e) {
        "use strict";
        var n, r = function() {
            var t = this, a = t.$createElement;
            t._self._c;
        }, o = [];
        e.d(a, "b", function() {
            return r;
        }), e.d(a, "c", function() {
            return o;
        }), e.d(a, "a", function() {
            return n;
        });
    },
    2969: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("f2e3"), r = e.n(n);
        for (var o in n) "default" !== o && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(o);
        a["default"] = r.a;
    },
    6224: function(t, a, e) {
        "use strict";
        var n = e("bfbd"), r = e.n(n);
        r.a;
    },
    bfbd: function(t, a, e) {},
    e1a5: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("24bf"), r = e("2969");
        for (var o in r) "default" !== o && function(t) {
            e.d(a, t, function() {
                return r[t];
            });
        }(o);
        e("6224");
        var i, u = e("f0c5"), c = Object(u["a"])(r["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], i);
        a["default"] = c.exports;
    },
    f2e3: function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = e("de50"), r = (getApp(), function() {
                e.e("components/tabBar").then(function() {
                    return resolve(e("7d1c"));
                }.bind(null, e)).catch(e.oe);
            }), o = {
                components: {
                    itabBar: r
                },
                data: function() {
                    return {
                        that: !1,
                        showdata: [],
                        theme_color: "#fff",
                        sign_rule: "",
                        bargain_is_open: 0,
                        shareimage: "",
                        sharetitle: "",
                        comment_plugin_state: 0
                    };
                },
                onLoad: function() {
                    t.hideTabBar({});
                },
                onShow: function() {
                    var a = this;
                    t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "user.scoreRanking"
                        },
                        success: function(t) {
                            a.showdata = t.data.data;
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.config"
                        },
                        success: function(t) {
                            a.shareimage = t.data.data.share_img, a.sharetitle = t.data.data.title;
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            a.theme_color = e.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            }), a.bargain_is_open = e.data.data.bargain_is_open, a.comment_plugin_state = e.data.data.comment_plugin_state;
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "sign.getSignInfo",
                            token: t.getStorageSync("token")
                        },
                        success: function(t) {
                            a.sign_rule = t.data.data.sign_rule;
                        }
                    });
                },
                onShareAppMessage: function(t) {
                    var a = this;
                    return {
                        title: a.sharetitle,
                        imageUrl: a.shareimage,
                        path: "/pages/renwu/paih"
                    };
                },
                methods: {
                    showthis: function() {
                        this.that = !this.that;
                    }
                }
            };
            a.default = o;
        }).call(this, e("543d")["default"]);
    }
}, [ [ "1c92", "common/runtime", "common/vendor" ] ] ]);