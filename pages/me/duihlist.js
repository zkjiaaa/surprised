(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/me/duihlist" ], {
    "458b": function(t, e, o) {
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
    "6c63": function(t, e, o) {
        "use strict";
        (function(t) {
            o("0207");
            n(o("66fd"));
            var e = n(o("aa2e"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, o("543d")["createPage"]);
    },
    7810: function(t, e, o) {},
    "9f1b": function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o("de50"), a = {
                data: function() {
                    return {
                        leftid: 0,
                        theme_color: "#fff",
                        showdata: []
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    var e = this;
                    t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(o) {
                            e.theme_color = o.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: o.data.data.app_theme_bg_color
                            });
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "score.get_order_list",
                            token: t.getStorageSync("token"),
                            status: this.leftid
                        },
                        success: function(t) {
                            e.showdata = t.data.data;
                        }
                    });
                },
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
                    bindtap: function(e) {
                        var o = this;
                        this.leftid = e, t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "score.get_order_list",
                                token: t.getStorageSync("token"),
                                status: e
                            },
                            success: function(t) {
                                o.showdata = t.data.data;
                            }
                        });
                    },
                    queren: function(e) {
                        var o = this;
                        t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "score.post_order_comfirm",
                                token: t.getStorageSync("token"),
                                order_id: e
                            },
                            success: function(e) {
                                0 == e.data.code ? t.showToast({
                                    title: e.data.msg,
                                    icon: "none"
                                }) : (t.showToast({
                                    title: "确认成功"
                                }), t.request({
                                    url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "score.get_order_list",
                                        token: t.getStorageSync("token"),
                                        status: o.leftid
                                    },
                                    success: function(t) {
                                        o.showdata = t.data.data;
                                    }
                                }));
                            }
                        });
                    },
                    golingq: function(e) {
                        t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.get_order_info",
                                token: t.getStorageSync("token"),
                                prize_id: e
                            },
                            success: function(o) {
                                t.navigateTo({
                                    url: "./lingq?id=" + e
                                });
                            }
                        });
                    },
                    goxq: function(e) {
                        t.navigateTo({
                            url: "../duih/duihxq?id=" + e
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, o("543d")["default"]);
    },
    aa2e: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("458b"), a = o("dd6a");
        for (var r in a) "default" !== r && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(r);
        o("c929");
        var c, u = o("f0c5"), i = Object(u["a"])(a["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], c);
        e["default"] = i.exports;
    },
    c929: function(t, e, o) {
        "use strict";
        var n = o("7810"), a = o.n(n);
        a.a;
    },
    dd6a: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("9f1b"), a = o.n(n);
        for (var r in n) "default" !== r && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
        e["default"] = a.a;
    }
}, [ [ "6c63", "common/runtime", "common/vendor" ] ] ]);