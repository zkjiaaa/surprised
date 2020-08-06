(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/main" ], {
    "115d": function(t, e, n) {
        "use strict";
        (function(t) {
            n("0207");
            var e = r(n("66fd")), o = r(n("a5fd"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach(function(e) {
                        c(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            e.default.config.productionTip = !1, o.default.mpType = "app";
            var u = new e.default(i({}, o.default));
            t(u).$mount();
        }).call(this, n("543d")["createApp"]);
    },
    "9b5a": function(t, e, n) {},
    "9f60": function(t, e, n) {
        "use strict";
        var o = n("9b5a"), r = n.n(o);
        r.a;
    },
    a5fd: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("f2c1");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("9f60");
        var a, i, c, u, f = n("f0c5"), l = Object(f["a"])(o["default"], a, i, !1, null, null, null, !1, c, u);
        e["default"] = l.exports;
    },
    d181: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            n("de50");
            var o = {
                globalData: {
                    goodsid: 0,
                    pingjid: 0,
                    isIphoneX: !1,
                    chaping: !1,
                    tabid: 0
                },
                data: {
                    daojishi: ""
                },
                onLoad: function() {
                    t.hideTabBar();
                },
                onLaunch: function() {
                    t.hideTabBar();
                    var e = this;
                    wx.getSystemInfo({
                        success: function(t) {
                            var n = t.model;
                            -1 != n.search("iPhone X") && (e.globalData.isIphoneX = !0), wx.setStorageSync("modelmes", n);
                        }
                    });
                },
                onShow: function() {
                    var t = this;
                    clearInterval(this.daojishi), console.log("App Show"), this.daojishi = setInterval(function() {
                        t.globalData.chaping = !0;
                    }, 6e4);
                },
                onHide: function() {
                    console.log("App Hide");
                },
                methods: {
                    setnavtitle: function() {
                        t.request({
                            url: util.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "navigation.navList"
                            },
                            success: function(e) {
                                t.setNavigationBarColor({
                                    frontColor: "#ffffff",
                                    backgroundColor: e.data.data.wepro_top_backgroundColor
                                });
                            }
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d")["default"]);
    },
    f2c1: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("d181"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e["default"] = r.a;
    }
}, [ [ "115d", "common/runtime", "common/vendor" ] ] ]);