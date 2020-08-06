(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/home/cate" ], {
    "254b": function(t, a, e) {
        "use strict";
        var n = e("4ec5"), o = e.n(n);
        o.a;
    },
    4033: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("e5d6"), o = e("a897");
        for (var i in o) "default" !== i && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(i);
        e("254b");
        var r, c = e("f0c5"), u = Object(c["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], r);
        a["default"] = u.exports;
    },
    "4ec5": function(t, a, e) {},
    "71ab": function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = e("de50"), o = {
                data: function() {
                    return {
                        list: [],
                        id: 0,
                        config: [],
                        app_theme_bg_color: "",
                        qq_app_index_images: []
                    };
                },
                onLoad: function(a) {
                    var e = this;
                    this.id = a.id, console.log(a), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(n) {
                            e.app_theme_bg_color = n.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: n.data.data.app_theme_bg_color
                            }), t.setNavigationBarTitle({
                                title: a.name
                            });
                        }
                    });
                },
                onShow: function() {
                    var a = this;
                    t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.get_image_page",
                            cate_id: this.id,
                            page: 1
                        },
                        success: function(t) {
                            a.config = t.data.data.config, a.qq_app_index_images = t.data.data.images;
                        }
                    });
                },
                methods: {
                    yulan: function(a) {
                        t.navigateTo({
                            url: "./xq?img=" + a
                        });
                    }
                }
            };
            a.default = o;
        }).call(this, e("543d")["default"]);
    },
    "97a4": function(t, a, e) {
        "use strict";
        (function(t) {
            e("0207");
            n(e("66fd"));
            var a = n(e("4033"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(a.default);
        }).call(this, e("543d")["createPage"]);
    },
    a897: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("71ab"), o = e.n(n);
        for (var i in n) "default" !== i && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(i);
        a["default"] = o.a;
    },
    e5d6: function(t, a, e) {
        "use strict";
        var n, o = function() {
            var t = this, a = t.$createElement;
            t._self._c;
        }, i = [];
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return i;
        }), e.d(a, "a", function() {
            return n;
        });
    }
}, [ [ "97a4", "common/runtime", "common/vendor" ] ] ]);