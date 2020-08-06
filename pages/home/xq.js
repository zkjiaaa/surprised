(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/home/xq" ], {
    "639e": function(n, e, t) {
        "use strict";
        var o, a = function() {
            var n = this, e = n.$createElement;
            n._self._c;
        }, c = [];
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {
            return o;
        });
    },
    6801: function(n, e, t) {
        "use strict";
        var o = t("a6cb"), a = t.n(o);
        a.a;
    },
    a6cb: function(n, e, t) {},
    a8ec: function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = t("de50"), a = {
                data: function() {
                    return {
                        img: ""
                    };
                },
                onShareAppMessage: function() {},
                onLoad: function(n) {
                    this.img = n.img, console.log(n);
                },
                onShow: function() {
                    n.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            n.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            });
                        }
                    });
                },
                methods: {
                    goindex: function() {
                        n.switchTab({
                            url: "./index"
                        });
                    },
                    save: function() {
                        var e = [];
                        e.push(this.img), console.log(e), n.previewImage({
                            urls: e,
                            longPressActions: {
                                itemList: [ "保存图片" ],
                                success: function(n) {
                                    console.log("选中了第" + (n.tapIndex + 1) + "个按钮,第" + (n.index + 1) + "张图片");
                                },
                                fail: function(n) {
                                    console.log(n.errMsg);
                                }
                            }
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, t("543d")["default"]);
    },
    ae00: function(n, e, t) {
        "use strict";
        (function(n) {
            t("0207");
            o(t("66fd"));
            var e = o(t("f8a0"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(e.default);
        }).call(this, t("543d")["createPage"]);
    },
    b3ef: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("a8ec"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e["default"] = a.a;
    },
    f8a0: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("639e"), a = t("b3ef");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("6801");
        var u, r = t("f0c5"), i = Object(r["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], u);
        e["default"] = i.exports;
    }
}, [ [ "ae00", "common/runtime", "common/vendor" ] ] ]);