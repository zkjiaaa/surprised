(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/icon/icon" ], {
    "2ceb": function(e, t, n) {
        "use strict";
        var u = n("59be"), a = n.n(u);
        a.a;
    },
    3373: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = {
            name: "tuiIcon",
            props: {
                name: {
                    type: String,
                    default: ""
                },
                size: {
                    type: Number,
                    default: 32
                },
                color: {
                    type: String,
                    default: ""
                },
                bold: {
                    type: Boolean,
                    default: !1
                },
                visible: {
                    type: Boolean,
                    default: !0
                },
                index: {
                    type: Number,
                    default: 0
                }
            },
            methods: {
                handleClick: function(e) {
                    this.$emit("click", {
                        index: e
                    });
                }
            }
        };
        t.default = u;
    },
    "59be": function(e, t, n) {},
    "613d": function(e, t, n) {
        "use strict";
        n.r(t);
        var u = n("3373"), a = n.n(u);
        for (var c in u) "default" !== c && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(c);
        t["default"] = a.a;
    },
    c8d7: function(e, t, n) {
        "use strict";
        n.r(t);
        var u = n("faa8"), a = n("613d");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("2ceb");
        var i, o = n("f0c5"), r = Object(o["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], i);
        t["default"] = r.exports;
    },
    faa8: function(e, t, n) {
        "use strict";
        var u, a = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, c = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {
            return u;
        });
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/icon/icon-create-component", {
    "components/icon/icon-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("c8d7"));
    }
}, [ [ "components/icon/icon-create-component" ] ] ]);