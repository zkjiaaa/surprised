(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/homepage/duihlist" ], {
    "33d5": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("7e49"), a = n("d48e");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("fcf5");
        var c, i = n("f0c5"), u = Object(i["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], c);
        e["default"] = u.exports;
    },
    "7e49": function(t, e, n) {
        "use strict";
        var o, a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return o;
        });
    },
    b36b: function(t, e, n) {},
    d48e: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("e5dc"), a = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e["default"] = a.a;
    },
    e5dc: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n("de50"), a = {
                data: function() {
                    return {
                        leftid: 0,
                        theme_color: "#fff",
                        showdata: [],
                        pagenum: 1
                    };
                },
                onLoad: function() {},
                onReachBottom: function() {
                    var e = this;
                    this.pagenum++, t.showLoading({
                        title: "加载中..."
                    }), t.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "question.get_order_list",
                            token: t.getStorageSync("token"),
                            status: this.leftid,
                            page: this.pagenum
                        },
                        success: function(n) {
                            e.showdata = n.data.data, t.hideLoading();
                        }
                    });
                },
                onShow: function() {
                    var e = this;
                    this.pagenum = 1, t.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(n) {
                            e.theme_color = n.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: n.data.data.app_theme_bg_color
                            });
                        }
                    }), t.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "question.get_order_list",
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
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
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
                        this.leftid = e, this.pagenum = 1, t.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "question.get_order_list",
                                token: t.getStorageSync("token"),
                                status: e
                            },
                            success: function(t) {
                                n.showdata = t.data.data;
                            }
                        });
                    },
                    queren: function(e) {
                        var n = this;
                        this.pagenum = 1, t.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "question.post_order_comfirm",
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
                                    url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "question.get_order_list",
                                        token: t.getStorageSync("token"),
                                        status: n.leftid
                                    },
                                    success: function(t) {
                                        n.showdata = t.data.data;
                                    }
                                }));
                            }
                        });
                    },
                    golingq: function(e) {
                        t.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.get_order_info",
                                token: t.getStorageSync("token"),
                                prize_id: e
                            },
                            success: function(n) {
                                t.navigateTo({
                                    url: "./lingq?id=" + e
                                });
                            }
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d")["default"]);
    },
    f89c: function(t, e, n) {
        "use strict";
        (function(t) {
            n("0207");
            o(n("66fd"));
            var e = o(n("33d5"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    fcf5: function(t, e, n) {
        "use strict";
        var o = n("b36b"), a = n.n(o);
        a.a;
    }
}, [ [ "f89c", "common/runtime", "common/vendor" ] ] ]);