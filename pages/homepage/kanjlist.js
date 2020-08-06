(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/homepage/kanjlist" ], {
    "41cc": function(t, a, e) {
        "use strict";
        (function(t) {
            e("0207");
            n(e("66fd"));
            var a = n(e("8d29"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(a.default);
        }).call(this, e("543d")["createPage"]);
    },
    "6d84": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("efab"), o = e.n(n);
        for (var r in n) "default" !== r && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(r);
        a["default"] = o.a;
    },
    "8d29": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("cbca"), o = e("6d84");
        for (var r in o) "default" !== r && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(r);
        e("add1");
        var c, i = e("f0c5"), u = Object(i["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], c);
        a["default"] = u.exports;
    },
    add1: function(t, a, e) {
        "use strict";
        var n = e("c226"), o = e.n(n);
        o.a;
    },
    c226: function(t, a, e) {},
    cbca: function(t, a, e) {
        "use strict";
        var n, o = function() {
            var t = this, a = t.$createElement;
            t._self._c;
        }, r = [];
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return r;
        }), e.d(a, "a", function() {
            return n;
        });
    },
    efab: function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = e("de50"), o = {
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
                    var a = this;
                    this.pagenum++, t.showLoading({
                        title: "加载中..."
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "bargain.get_order_list",
                            token: t.getStorageSync("token"),
                            status: this.leftid,
                            page: this.pagenum
                        },
                        success: function(e) {
                            e.data.data.length > 0 && a.showdata.push(e.data.data), t.hideLoading();
                        }
                    });
                },
                onShow: function() {
                    var a = this;
                    this.pagenum = 1, t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            a.theme_color = e.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            });
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "bargain.get_order_list",
                            token: t.getStorageSync("token"),
                            status: this.leftid
                        },
                        success: function(t) {
                            a.showdata = t.data.data;
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
                            success: function(a) {
                                t.setClipboardData({
                                    data: a.data.data.wepro_service_number,
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
                    bindtap: function(a) {
                        var e = this;
                        this.leftid = a, this.pagenum = 1, t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "bargain.get_order_list",
                                token: t.getStorageSync("token"),
                                status: a
                            },
                            success: function(t) {
                                e.showdata = t.data.data;
                            }
                        });
                    },
                    queren: function(a) {
                        var e = this;
                        this.pagenum = 1, t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "bargain.post_order_comfirm",
                                token: t.getStorageSync("token"),
                                order_id: a
                            },
                            success: function(a) {
                                0 == a.data.code ? t.showToast({
                                    title: a.data.msg,
                                    icon: "none"
                                }) : (t.showToast({
                                    title: "确认成功"
                                }), t.request({
                                    url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "bargain.get_order_list",
                                        token: t.getStorageSync("token"),
                                        status: e.leftid
                                    },
                                    success: function(t) {
                                        e.showdata = t.data.data;
                                    }
                                }));
                            }
                        });
                    },
                    gogoods: function(a) {
                        t.navigateTo({
                            url: "../kanj/kanj?id=" + a
                        });
                    },
                    lingqu: function(a) {
                        t.navigateTo({
                            url: "./lingq2?id=" + a
                        });
                    }
                }
            };
            a.default = o;
        }).call(this, e("543d")["default"]);
    }
}, [ [ "41cc", "common/runtime", "common/vendor" ] ] ]);