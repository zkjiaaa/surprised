(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/danmu" ], {
    3916: function(t, e, n) {},
    "4bcb": function(t, e, n) {
        "use strict";
        var a = n("3916"), r = n.n(a);
        r.a;
    },
    "6ecd": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("c268"), r = n("dca0");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("4bcb");
        var u, o = n("f0c5"), c = Object(o["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], u);
        e["default"] = c.exports;
    },
    c268: function(t, e, n) {
        "use strict";
        var a, r = function() {
            var t = this, e = t.$createElement, n = (t._self._c, t.__map(t.items, function(e, n) {
                var a = Number(e.time), r = Number(e.time), i = Number(e.time);
                return {
                    $orig: t.__get_orig(e),
                    m0: a,
                    m1: r,
                    m2: i
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, i = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return a;
        });
    },
    c305: function(t, e, n) {
        "use strict";
        var a;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            name: "l-barrage",
            props: {
                minTime: {
                    type: Number,
                    default: 4
                },
                maxTime: {
                    type: Number,
                    default: 9
                },
                minTop: {
                    type: Number,
                    default: 0
                },
                maxTop: {
                    type: Number,
                    default: 40
                }
            },
            data: function() {
                return {
                    items: [],
                    itemtop: [ 20, 230, 160, 90, 300 ]
                };
            },
            methods: {
                add: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12, n = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0;
                    this.items.push({
                        text: t,
                        time: e,
                        image: a,
                        top: n,
                        display: 1
                    });
                },
                start: function() {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    a && clearInterval(a);
                    var n = 0, r = e.length;
                    a = setInterval(function() {
                        var i = 12;
                        if (n < r) {
                            var u = n;
                            n > 4 && (u = n % 5);
                            var o = t.itemtop[u];
                            t.add(e[n].text, i, o, e[n].avatar), n++;
                        } else clearInterval(a), setTimeout(function() {
                            t.$emit("end", {});
                        }, 500 * i);
                    }, 1e3);
                }
            }
        };
        e.default = r;
    },
    dca0: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("c305"), r = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e["default"] = r.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "pages/index/danmu-create-component", {
    "pages/index/danmu-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("6ecd"));
    }
}, [ [ "pages/index/danmu-create-component" ] ] ]);