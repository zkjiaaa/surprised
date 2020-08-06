(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/me/choujlist" ], {
    "02ee": function(t, e, a) {
        "use strict";
        var n, r = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
        a.d(e, "b", function() {
            return r;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {
            return n;
        });
    },
    "2a23": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("02ee"), r = a("2ca2");
        for (var o in r) "default" !== o && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(o);
        a("cbc3");
        var c, u = a("f0c5"), i = Object(u["a"])(r["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], c);
        e["default"] = i.exports;
    },
    "2ca2": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("302c"), r = a.n(n);
        for (var o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        e["default"] = r.a;
    },
    "302c": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a("de50"), r = {
                data: function() {
                    return {
                        leftid: 0,
                        theme_color: "#fff",
                        prize_draw_name: "抽奖",
                        showdata: []
                    };
                },
                onLoad: function() {
                    var e = this;
                    t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.get_member_prize",
                            token: t.getStorageSync("token"),
                            status: 0
                        },
                        success: function(t) {
                            e.showdata = t.data.data;
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(a) {
                            e.theme_color = a.data.data.app_theme_bg_color, e.prize_draw_name = a.data.data.prize_draw_name, 
                            t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: a.data.data.app_theme_bg_color
                            }), t.setNavigationBarTitle({
                                title: "参与" + e.prize_draw_name
                            });
                        }
                    });
                },
                methods: {
                    bindtap: function(e) {
                        var a = this;
                        this.leftid = e, t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.get_member_prize",
                                token: t.getStorageSync("token"),
                                status: e
                            },
                            success: function(t) {
                                a.showdata = t.data.data;
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
            e.default = r;
        }).call(this, a("543d")["default"]);
    },
    "5f61": function(t, e, a) {
        "use strict";
        (function(t) {
            a("0207");
            n(a("66fd"));
            var e = n(a("2a23"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, a("543d")["createPage"]);
    },
    "615a": function(t, e, a) {},
    cbc3: function(t, e, a) {
        "use strict";
        var n = a("615a"), r = a.n(n);
        r.a;
    }
}, [ [ "5f61", "common/runtime", "common/vendor" ] ] ]);