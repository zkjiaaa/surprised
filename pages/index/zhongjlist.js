(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/zhongjlist" ], {
    "022a": function(t, e, a) {
        "use strict";
        (function(t) {
            a("0207");
            n(a("66fd"));
            var e = n(a("ac8d"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, a("543d")["createPage"]);
    },
    "2f84": function(t, e, a) {
        "use strict";
        var n = a("ba5c"), o = a.n(n);
        o.a;
    },
    a8b0: function(t, e, a) {
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
    ac8d: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("a8b0"), o = a("c125");
        for (var r in o) "default" !== r && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(r);
        a("2f84");
        var i, c = a("f0c5"), u = Object(c["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], i);
        e["default"] = u.exports;
    },
    ba5c: function(t, e, a) {},
    c125: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("d65b"), o = a.n(n);
        for (var r in n) "default" !== r && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(r);
        e["default"] = o.a;
    },
    d65b: function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a("de50"), o = {
                data: function() {
                    return {
                        showdata: [],
                        theme_color: "#fff",
                        id: 0,
                        psize: 20
                    };
                },
                onLoad: function(e) {
                    var a = this;
                    this.id = e.id, t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.prize_cate_all_member",
                            prize_id: e.id,
                            psize: this.psize,
                            token: t.getStorageSync("token")
                        },
                        success: function(t) {
                            a.showdata = t.data.data;
                        }
                    }), t.request({
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
                    });
                },
                onReachBottom: function() {
                    var e = this;
                    this.psize = this.psize + 10, t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.prize_cate_all_member",
                            prize_id: this.id,
                            psize: this.psize,
                            token: t.getStorageSync("token")
                        },
                        success: function(t) {
                            e.showdata = t.data.data;
                        }
                    });
                },
                methods: {}
            };
            e.default = o;
        }).call(this, a("543d")["default"]);
    }
}, [ [ "022a", "common/runtime", "common/vendor" ] ] ]);