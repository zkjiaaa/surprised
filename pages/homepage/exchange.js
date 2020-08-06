(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/homepage/exchange" ], {
    "26df": function(t, e, a) {
        "use strict";
        var n, o = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return r;
        }), a.d(e, "a", function() {
            return n;
        });
    },
    "318f": function(t, e, a) {
        "use strict";
        (function(t) {
            a("0207");
            n(a("66fd"));
            var e = n(a("ab3e"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, a("543d")["createPage"]);
    },
    "4a4f": function(t, e, a) {},
    6491: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("d989"), o = a.n(n);
        for (var r in n) "default" !== r && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(r);
        e["default"] = o.a;
    },
    "9c81": function(t, e, a) {
        "use strict";
        var n = a("4a4f"), o = a.n(n);
        o.a;
    },
    ab3e: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("26df"), o = a("6491");
        for (var r in o) "default" !== r && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(r);
        a("9c81");
        var u, c = a("f0c5"), i = Object(c["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], u);
        e["default"] = i.exports;
    },
    d989: function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a("de50"), o = {
                data: function() {
                    return {
                        theme_color: "#FFF",
                        member_voucher: 0,
                        voucher_image: "",
                        voucher_name: "",
                        list: []
                    };
                },
                onShow: function() {
                    var e = this;
                    t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(a) {
                            e.theme_color = a.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: a.data.data.app_theme_bg_color
                            });
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "question.get_gift_list",
                            token: t.getStorageSync("token")
                        },
                        success: function(a) {
                            "请先授权登陆！" == a.data.msg && t.showModal({
                                title: "您未登录",
                                content: "是否去登录？",
                                success: function(e) {
                                    e.confirm ? t.navigateTo({
                                        url: "../../justother/login/login"
                                    }) : e.cancel && t.switchTab({
                                        url: "./homepage"
                                    });
                                }
                            }), e.list = a.data.data.gift_list, e.member_voucher = a.data.data.member_voucher, 
                            e.voucher_image = a.data.data.voucher_image, e.voucher_name = a.data.data.voucher_name;
                        }
                    });
                },
                methods: {
                    gojilu: function() {
                        t.navigateTo({
                            url: "./duihlist"
                        });
                    },
                    goredeemqb: function(e) {
                        t.navigateTo({
                            url: "./lingq?id=" + e
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, a("543d")["default"]);
    }
}, [ [ "318f", "common/runtime", "common/vendor" ] ] ]);