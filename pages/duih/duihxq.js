(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/duih/duihxq" ], {
    "31e9": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("bc42"), a = o.n(n);
        for (var r in n) "default" !== r && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
        e["default"] = a.a;
    },
    3582: function(t, e, o) {
        "use strict";
        var n, a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
        o.d(e, "b", function() {
            return a;
        }), o.d(e, "c", function() {
            return r;
        }), o.d(e, "a", function() {
            return n;
        });
    },
    "6e9a": function(t, e, o) {},
    "71b2": function(t, e, o) {
        "use strict";
        var n = o("6e9a"), a = o.n(n);
        a.a;
    },
    "71b8": function(t, e, o) {
        "use strict";
        (function(t) {
            o("0207");
            n(o("66fd"));
            var e = n(o("c2f6"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, o("543d")["createPage"]);
    },
    bc42: function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o("de50"), a = {
                data: function() {
                    return {
                        id: 0,
                        theme_color: "#fff",
                        score_icon: "",
                        list: []
                    };
                },
                onLoad: function(e) {
                    var o = this;
                    t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            o.theme_color = e.data.data.app_theme_bg_color, o.score_icon = e.data.data.score_icon, 
                            t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            });
                        }
                    }), this.id = e.id, t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "score.get_order_detail",
                            token: t.getStorageSync("token"),
                            order_id: e.id
                        },
                        success: function(t) {
                            o.list = t.data.data;
                        }
                    });
                },
                onShow: function() {},
                methods: {
                    kefu: function() {
                        t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "index.config"
                            },
                            success: function(e) {
                                t.setClipboardData({
                                    data: e.data.data.wepro_service_number,
                                    success: function() {
                                        wx.hideLoading(), wx.showToast({
                                            title: "已复制客服微信号",
                                            duration: 3e3,
                                            icon: "none"
                                        }), console.log("success");
                                    }
                                });
                            }
                        });
                    },
                    queren: function() {
                        var e = this;
                        t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "score.post_order_comfirm",
                                token: t.getStorageSync("token"),
                                order_id: e.id
                            },
                            success: function(e) {
                                0 == e.data.code ? t.showToast({
                                    title: e.data.msg,
                                    icon: "none"
                                }) : (t.showToast({
                                    title: "确认成功"
                                }), t.navigateBack());
                            }
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, o("543d")["default"]);
    },
    c2f6: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("3582"), a = o("31e9");
        for (var r in a) "default" !== r && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(r);
        o("71b2");
        var c, i = o("f0c5"), u = Object(i["a"])(a["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], c);
        e["default"] = u.exports;
    }
}, [ [ "71b8", "common/runtime", "common/vendor" ] ] ]);