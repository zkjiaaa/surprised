(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/homepage/more" ], {
    "0c8d": function(t, a, o) {
        "use strict";
        o.r(a);
        var n = o("cfc0"), e = o.n(n);
        for (var r in n) "default" !== r && function(t) {
            o.d(a, t, function() {
                return n[t];
            });
        }(r);
        a["default"] = e.a;
    },
    "39bc": function(t, a, o) {
        "use strict";
        var n, e = function() {
            var t = this, a = t.$createElement;
            t._self._c;
        }, r = [];
        o.d(a, "b", function() {
            return e;
        }), o.d(a, "c", function() {
            return r;
        }), o.d(a, "a", function() {
            return n;
        });
    },
    "515a": function(t, a, o) {
        "use strict";
        var n = o("ad72"), e = o.n(n);
        e.a;
    },
    "82ca": function(t, a, o) {
        "use strict";
        o.r(a);
        var n = o("39bc"), e = o("0c8d");
        for (var r in e) "default" !== r && function(t) {
            o.d(a, t, function() {
                return e[t];
            });
        }(r);
        o("515a");
        var c, i = o("f0c5"), u = Object(i["a"])(e["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], c);
        a["default"] = u.exports;
    },
    a01f: function(t, a, o) {
        "use strict";
        (function(t) {
            o("0207");
            n(o("66fd"));
            var a = n(o("82ca"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(a.default);
        }).call(this, o("543d")["createPage"]);
    },
    ad72: function(t, a, o) {},
    cfc0: function(t, a, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = o("de50"), e = function() {
                o.e("components/tabBar").then(function() {
                    return resolve(o("7d1c"));
                }.bind(null, o)).catch(o.oe);
            }, r = {
                components: {
                    itabBar: e
                },
                data: function() {
                    return {
                        goodLottery: !1,
                        goods_list: [],
                        member_goods_list: [],
                        bargain_banner: "",
                        wepro_tabbar_show6: 0,
                        comment_plugin_state: 0,
                        theme_color: "#fff"
                    };
                },
                onShareAppMessage: function(t) {},
                onShow: function() {
                    var a = this;
                    t.hideTabBar({}), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "bargain.get_goods_list",
                            token: t.getStorageSync("token")
                        },
                        success: function(o) {
                            "请先授权登陆！" == o.data.msg ? t.showModal({
                                title: "您未登录",
                                content: "是否去登录？",
                                success: function(a) {
                                    a.confirm ? t.navigateTo({
                                        url: "../../justother/login/login"
                                    }) : a.cancel && (console.log("返回10"), t.switchTab({
                                        url: "../home/index"
                                    }));
                                }
                            }) : (a.goods_list = o.data.data.goods_list, a.member_goods_list = o.data.data.member_goods_list);
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(o) {
                            a.theme_color = o.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: o.data.data.app_theme_bg_color
                            }), a.wepro_tabbar_show6 = o.data.data.wepro_tabbar_show6, a.bargain_banner = o.data.data.bargain_banner, 
                            a.comment_plugin_state = o.data.data.comment_plugin_state;
                        }
                    });
                },
                methods: {
                    goodcloseLottery: function() {
                        this.goodLottery = !this.goodLottery;
                    },
                    gojilu: function() {
                        t.navigateTo({
                            url: "./kanjlist"
                        });
                    },
                    gobargain: function(a) {
                        t.navigateTo({
                            url: "../homepage/bargain?id=" + a
                        });
                    }
                }
            };
            a.default = r;
        }).call(this, o("543d")["default"]);
    }
}, [ [ "a01f", "common/runtime", "common/vendor" ] ] ]);