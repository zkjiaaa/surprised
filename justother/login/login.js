(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "justother/login/login" ], {
    "0175": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("ad0d"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t["default"] = o.a;
    },
    "0caf": function(e, t, n) {
        "use strict";
        var a = n("67a5"), o = n.n(a);
        o.a;
    },
    "67a5": function(e, t, n) {},
    "6e69": function(e, t, n) {
        "use strict";
        (function(e) {
            n("0207");
            a(n("66fd"));
            var t = a(n("926e"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "926e": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("ea78"), o = n("0175");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("0caf");
        var c, u = n("f0c5"), i = Object(u["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], c);
        t["default"] = i.exports;
    },
    ad0d: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("de50"), o = {
                data: function() {
                    return {
                        SessionKey: "",
                        OpenId: "",
                        theme_color: "#fff",
                        logoimg: "",
                        nickName: null,
                        avatarUrl: null,
                        isCanUse: e.getStorageSync("isCanUse") || !0
                    };
                },
                onShow: function() {
                    var t = this;
                    console.log("asdfasdgas Show"), e.request({
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(n) {
                            t.theme_color = n.data.data.app_theme_bg_color, e.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: n.data.data.app_theme_bg_color
                            });
                        }
                    }), e.request({
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.get_auth_logo"
                        },
                        success: function(e) {
                            null != e.data.data && "" != e.data.data && (t.logoimg = e.data.data);
                        }
                    });
                },
                methods: {
                    wxGetUserInfo: function() {
                        var t = this;
                        e.getUserInfo({
                            provider: "weixin",
                            success: function(e) {
                                t.login(e.userInfo.nickName, e.userInfo.avatarUrl, e.encryptedData, e.iv);
                            },
                            fail: function(e) {}
                        });
                    },
                    quxiao: function() {
                        e.navigateBack();
                    },
                    login: function(t, n, o, r) {
                        e.showLoading({}), e.login({
                            provider: "weixin",
                            success: function(c) {
                                c.code;
                                e.request({
                                    url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "user.calculateToken",
                                        code: c.code
                                    },
                                    success: function(c) {
                                        e.hideLoading(), e.setStorageSync("token", c.data.data.token), console.log(e.getStorageSync("token")), 
                                        e.request({
                                            url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                            data: {
                                                controller: "user.applogin_do",
                                                token: e.getStorageSync("token"),
                                                nickName: t,
                                                avatarUrl: n,
                                                encrypteddata: o,
                                                iv: r
                                            },
                                            success: function(t) {
                                                e.setStorageSync("member_id", t.data.data.member_id), e.navigateBack({});
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            };
            t.default = o;
        }).call(this, n("543d")["default"]);
    },
    ea78: function(e, t, n) {
        "use strict";
        var a, o = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return a;
        });
    }
}, [ [ "6e69", "common/runtime", "common/vendor" ] ] ]);