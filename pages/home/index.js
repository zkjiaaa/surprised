(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/home/index" ], {
    "22df": function(e, a, t) {
        "use strict";
        var n, c = function() {
            var e = this, a = e.$createElement;
            e._self._c;
        }, o = [];
        t.d(a, "b", function() {
            return c;
        }), t.d(a, "c", function() {
            return o;
        }), t.d(a, "a", function() {
            return n;
        });
    },
    "32d3": function(e, a, t) {
        "use strict";
        var n = t("b62f"), c = t.n(n);
        c.a;
    },
    "49c4": function(e, a, t) {
        "use strict";
        t.r(a);
        var n = t("9327"), c = t.n(n);
        for (var o in n) "default" !== o && function(e) {
            t.d(a, e, function() {
                return n[e];
            });
        }(o);
        a["default"] = c.a;
    },
    9327: function(e, a, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = t("de50"), c = getApp(), o = {
                data: function() {
                    return {
                        qq_app_check_page: 0,
                        app_index_page_new: 1,
                        loading: !0,
                        qq_app_index_images: [],
                        qq_check_index_list_type: 2,
                        cate: [],
                        qq_check_image_type: 1,
                        app_theme_bg_color: "#fff",
                        qq_check_cate_type: 1,
                        guanggaoid: 0
                    };
                },
                onLoad: function() {
                    e.hideTabBar({}), c.globalData.homeindex = !0;
                },
                onShareAppMessage: function(e) {
                    return {
                        path: "/pages/home/index"
                    };
                },
                onShow: function() {
                    var a = this;
                    e.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(t) {
                            a.qq_app_check_page = 0, a.qq_app_index_images = t.data.data.qq_app_index_images, 
                            a.qq_check_image_type = t.data.data.qq_check_image_type, a.app_theme_bg_color = t.data.data.app_theme_bg_color, 
                            a.qq_check_index_list_type = t.data.data.qq_check_index_list_type, a.qq_check_cate_type = t.data.data.qq_check_cate_type, 
                            1 == a.qq_app_check_page && setTimeout(function() {
                                a.loading = !1;
                            }, 1e3), e.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: t.data.data.app_theme_bg_color
                            }), a.app_index_page_new = t.data.data.app_index_page_new, 0 == a.qq_app_check_page && (1 == a.app_index_page_new && e.reLaunch({
                                url: "/pages/home/home"
                            }), 2 == a.app_index_page_new && e.reLaunch({
                                url: "/pages/index/index"
                            }));
                        }
                    }), e.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.get_image_page"
                        },
                        success: function(e) {
                            a.cate = e.data.data.cate;
                        }
                    });
                },
                methods: {
                    yulan: function(a) {
                        e.navigateTo({
                            url: "./xq?img=" + a
                        });
                    },
                    gocate: function(a, t) {
                        e.navigateTo({
                            url: "./cate?id=" + a + "&name=" + t
                        });
                    }
                }
            };
            a.default = o;
        }).call(this, t("543d")["default"]);
    },
    b62f: function(e, a, t) {},
    d704: function(e, a, t) {
        "use strict";
        t.r(a);
        var n = t("22df"), c = t("49c4");
        for (var o in c) "default" !== o && function(e) {
            t.d(a, e, function() {
                return c[e];
            });
        }(o);
        t("32d3");
        var _, i = t("f0c5"), d = Object(i["a"])(c["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], _);
        a["default"] = d.exports;
    },
    ea4b: function(e, a, t) {
        "use strict";
        (function(e) {
            t("0207");
            n(t("66fd"));
            var a = n(t("d704"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(a.default);
        }).call(this, t("543d")["createPage"]);
    }
}, [ [ "ea4b", "common/runtime", "common/vendor" ] ] ]);