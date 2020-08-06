(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/tabBar" ], {
    1494: function(a, e, t) {
        "use strict";
        var r = t("f2f4"), o = t.n(r);
        o.a;
    },
    "7d1c": function(a, e, t) {
        "use strict";
        t.r(e);
        var r = t("aa38"), o = t("c788");
        for (var n in o) "default" !== n && function(a) {
            t.d(e, a, function() {
                return o[a];
            });
        }(n);
        t("1494");
        var _, u = t("f0c5"), p = Object(u["a"])(o["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], _);
        e["default"] = p.exports;
    },
    aa38: function(a, e, t) {
        "use strict";
        var r, o = function() {
            var a = this, e = a.$createElement;
            a._self._c;
        }, n = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return n;
        }), t.d(e, "a", function() {
            return r;
        });
    },
    c788: function(a, e, t) {
        "use strict";
        t.r(e);
        var r = t("ee11"), o = t.n(r);
        for (var n in r) "default" !== n && function(a) {
            t.d(e, a, function() {
                return r[a];
            });
        }(n);
        e["default"] = o.a;
    },
    ee11: function(a, e, t) {
        "use strict";
        (function(a) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = t("de50"), o = getApp(), n = {
                name: "navTab",
                props: {
                    index: {
                        type: Number,
                        value: 0
                    },
                    comment_plugin_state: {
                        type: Number,
                        value: 0
                    },
                    bargain_is_open: {
                        type: Number,
                        value: 0
                    }
                },
                data: function() {
                    return {
                        theme_color: "#FF6633",
                        theme_color2: "#FF6633",
                        tablist: [],
                        app_index_page_new: 0,
                        wepro_tabbar_iconPath6: "",
                        wepro_tabbar_show6: 0,
                        wepro_tabbar_show1: 1,
                        wepro_tabbar_show2: 2,
                        wepro_tabbar_show3: 3,
                        wepro_tabbar_show4: 4,
                        wepro_tabbar_show5: 5,
                        isIphoneX: !1,
                        modelmes: "",
                        wepro_tabbar_text6: ""
                    };
                },
                created: function() {
                    var e = this;
                    a.request({
                        url: r.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(a) {
                            e.theme_color = a.data.data.app_theme_bg_color, e.theme_color2 = a.data.data.icon_selected_color, 
                            e.tablist = a.data.data.wepro_tabbar_list, e.wepro_tabbar_text6 = a.data.data.wepro_tabbar_text6, 
                            e.wepro_tabbar_show6 = a.data.data.wepro_tabbar_show6, e.wepro_tabbar_show5 = a.data.data.wepro_tabbar_show5, 
                            e.wepro_tabbar_show4 = a.data.data.wepro_tabbar_show4, e.wepro_tabbar_show3 = a.data.data.wepro_tabbar_show3, 
                            e.wepro_tabbar_show2 = a.data.data.wepro_tabbar_show2, e.wepro_tabbar_show1 = a.data.data.wepro_tabbar_show1, 
                            e.wepro_tabbar_iconPath6 = a.data.data.wepro_tabbar_iconPath6, e.wepro_tabbar_selectedIconPath6 = a.data.data.wepro_tabbar_selectedIconPath6, 
                            e.app_index_page_new = a.data.data.app_index_page_new, console.log(e.tablist);
                        }
                    }), this.modelmes = wx.getStorageSync("modelmes"), this.isIphoneX = o.globalData.isIphoneX;
                },
                methods: {
                    gokanjia: function() {
                        a.reLaunch({
                            url: "/pages/homepage/more"
                        });
                    },
                    goindex: function() {
                        1 == this.app_index_page_new && a.reLaunch({
                            url: "/pages/home/home"
                        }), 2 == this.app_index_page_new && a.reLaunch({
                            url: "/pages/index/index"
                        });
                    },
                    gorenwu: function() {
                        a.reLaunch({
                            url: "/pages/renwu/renwu"
                        });
                    },
                    goduih: function() {
                        a.reLaunch({
                            url: "/pages/renwu/duih"
                        });
                    },
                    gopaih: function() {
                        a.reLaunch({
                            url: "/pages/renwu/paih"
                        });
                    },
                    gome: function() {
                        a.reLaunch({
                            url: "/pages/me/me"
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, t("543d")["default"]);
    },
    f2f4: function(a, e, t) {}
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/tabBar-create-component", {
    "components/tabBar-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("7d1c"));
    }
}, [ [ "components/tabBar-create-component" ] ] ]);