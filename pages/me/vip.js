(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/me/vip" ], {
    "27fc": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("5a66"), u = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n["default"] = u.a;
    },
    "5a66": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = e("de50"), u = {
                data: function() {
                    return {
                        showdata: ""
                    };
                },
                onLoad: function() {
                    var n = this;
                    t.request({
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(t) {
                            n.showdata = t.data.data.personal_center_about_us;
                        }
                    });
                },
                methods: {}
            };
            n.default = u;
        }).call(this, e("543d")["default"]);
    },
    a6ae: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("d757"), u = e("27fc");
        for (var r in u) "default" !== r && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(r);
        var o, c = e("f0c5"), f = Object(c["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
        n["default"] = f.exports;
    },
    bb56: function(t, n, e) {
        "use strict";
        (function(t) {
            e("0207");
            a(e("66fd"));
            var n = a(e("a6ae"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    d757: function(t, n, e) {
        "use strict";
        var a, u = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return u;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {
            return a;
        });
    }
}, [ [ "bb56", "common/runtime", "common/vendor" ] ] ]);