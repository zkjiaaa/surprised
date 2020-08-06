(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/me/mychouj" ], {
    "3dad": function(t, e, n) {
        "use strict";
        var a, o = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
    },
    "502e": function(t, e, n) {},
    "6c7a": function(t, e, n) {
        "use strict";
        var a = n("502e"), o = n.n(a);
        o.a;
    },
    "73e8": function(t, e, n) {
        "use strict";
        (function(t) {
            n("0207");
            a(n("66fd"));
            var e = a(n("7ebc"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "7ebc": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("3dad"), o = n("c4cd");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("6c7a");
        var c, u = n("f0c5"), d = Object(u["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], c);
        e["default"] = d.exports;
    },
    c4cd: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d1bf"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e["default"] = o.a;
    },
    d1bf: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("de50"), o = {
                data: function() {
                    return {
                        leftid: 4,
                        theme_color: "#fff",
                        showdata: []
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    var e = this;
                    t.request({
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.get_member_prize",
                            token: t.getStorageSync("token"),
                            status: 2
                        },
                        success: function(t) {
                            e.showdata = t.data.data;
                        }
                    }), t.request({
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(n) {
                            e.theme_color = n.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: n.data.data.app_theme_bg_color
                            });
                        }
                    });
                },
                methods: {
                    kefu: function() {
                        t.request({
                            url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
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
                    bindtap: function(e) {
                        var n = this;
                        this.leftid = e, 4 != e ? t.request({
                            url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.get_order_list",
                                token: t.getStorageSync("token"),
                                status: e
                            },
                            success: function(t) {
                                n.showdata = t.data.data;
                            }
                        }) : t.request({
                            url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.get_member_prize",
                                token: t.getStorageSync("token"),
                                status: 2
                            },
                            success: function(t) {
                                n.showdata = t.data.data;
                            }
                        });
                    },
                    golingq: function(e, n) {
                        t.request({
                            url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.get_order_info",
                                token: t.getStorageSync("token"),
                                prize_id: e
                            },
                            success: function(a) {
                                t.navigateTo({
                                    url: "./lingq?id=" + e + "&type=" + n
                                });
                            }
                        });
                    },
                    goxq: function(e) {
                        t.navigateTo({
                            url: "../index/indexxq?id=" + e
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d")["default"]);
    }
}, [ [ "73e8", "common/runtime", "common/vendor" ] ] ]);