(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/quanbzhuli" ], {
    2988: function(t, e, n) {},
    3504: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8ec4"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e["default"] = o.a;
    },
    "36d4": function(t, e, n) {
        "use strict";
        (function(t) {
            n("0207");
            a(n("66fd"));
            var e = a(n("5afb"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "5afb": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("f3bf"), o = n("3504");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("73c1");
        var u, c = n("f0c5"), f = Object(c["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], u);
        e["default"] = f.exports;
    },
    "73c1": function(t, e, n) {
        "use strict";
        var a = n("2988"), o = n.n(a);
        o.a;
    },
    "8ec4": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("de50"), o = {
                data: function() {
                    return {
                        help_member: [],
                        showdata: [],
                        num: 0,
                        theme_color: "#fff"
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    this.num = e.num, t.request({
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.get_prize_info",
                            id: e.id,
                            token: t.getStorageSync("token")
                        },
                        success: function(t) {
                            n.help_member = t.data.data.help_member;
                        }
                    }), t.request({
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
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
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "user.userInfo",
                            token: t.getStorageSync("token")
                        },
                        success: function(e) {
                            1001 == e.data.code && t.showModal({
                                title: "您未登录",
                                content: "是否去登录？",
                                success: function(e) {
                                    e.confirm ? t.navigateTo({
                                        url: "../../justother/login/login"
                                    }) : e.cancel && t.switchTab({
                                        url: "../index/index"
                                    });
                                }
                            }), n.showdata = e.data.data.user_info;
                        }
                    });
                },
                methods: {}
            };
            e.default = o;
        }).call(this, n("543d")["default"]);
    },
    f3bf: function(t, e, n) {
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
    }
}, [ [ "36d4", "common/runtime", "common/vendor" ] ] ]);