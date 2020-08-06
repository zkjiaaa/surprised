(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/duih/duihorder" ], {
    "08d8": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2fc9"), a = n("f393");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("19a3");
        var l, r = n("f0c5"), s = Object(r["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], l);
        t["default"] = s.exports;
    },
    "19a3": function(e, t, n) {
        "use strict";
        var o = n("ded7"), a = n.n(o);
        a.a;
    },
    "2fc9": function(e, t, n) {
        "use strict";
        var o, a = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return o;
        });
    },
    "60ed": function(e, t, n) {
        "use strict";
        (function(e) {
            n("0207");
            o(n("66fd"));
            var t = o(n("08d8"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    c22f: function(e, t, n) {
        "use strict";
        (function(e) {
            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("de50"), i = function() {
                Promise.all([ n.e("common/vendor"), n.e("justother/w-picker/w-picker") ]).then(function() {
                    return resolve(n("a004"));
                }.bind(null, n)).catch(n.oe);
            }, l = {
                components: {
                    wPicker: i
                },
                data: function() {
                    var e;
                    return e = {
                        id: 0,
                        list: [],
                        tabList: [ {
                            mode: "region",
                            name: "省市区"
                        } ],
                        resultInfo: {
                            result: "请选择"
                        },
                        name: "",
                        mobile: "",
                        city: "",
                        address: "",
                        theme_color: "#f63"
                    }, o(e, "id", 0), o(e, "qq", ""), o(e, "type", 0), o(e, "tabIndex", 0), o(e, "linkList", [ {
                        label: "浙江省",
                        value: "10",
                        children: [ {
                            label: "杭州市",
                            value: "1010",
                            children: [ {
                                label: "滨江区",
                                value: "10101"
                            }, {
                                label: "萧山区",
                                value: "10102"
                            } ]
                        }, {
                            label: "宁波市",
                            value: "1012",
                            children: [ {
                                label: "海曙区",
                                value: "10121"
                            }, {
                                label: "鄞州区",
                                value: "10122"
                            } ]
                        } ]
                    }, {
                        label: "广东省",
                        value: "20",
                        children: [ {
                            label: "广州市",
                            value: "2010",
                            children: [ {
                                label: "广州1区",
                                value: "20101"
                            }, {
                                label: "广州2区",
                                value: "20102"
                            } ]
                        } ]
                    } ]), e;
                },
                onLoad: function(t) {
                    var n = this;
                    this.id = t.id, this.type = t.type, e.request({
                        url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(t) {
                            n.theme_color = t.data.data.app_theme_bg_color, e.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: t.data.data.app_theme_bg_color
                            });
                        }
                    });
                },
                onShow: function() {},
                methods: {
                    getname: function(e) {
                        this.name = e.detail.value;
                    },
                    getmobile: function(e) {
                        this.mobile = e.detail.value;
                    },
                    getaddress: function(e) {
                        this.address = e.detail.value;
                    },
                    getqq: function(e) {
                        this.qq = e.detail.value;
                    },
                    toggleTab: function(e, t) {
                        this.tabIndex = t, this.mode = e.mode, this.defaultVal = e.value, this.$refs[e.mode].show();
                    },
                    onConfirm: function(e) {
                        console.log(e), this.resultInfo = e;
                    },
                    submit: function() {
                        "" != this.name ? "" != this.mobile || 1 != this.type ? "请选择" != this.resultInfo.result || 1 != this.type ? "" != this.address || 1 != this.type ? 1 == this.type ? e.request({
                            url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "score.post_score_exchange",
                                goods_id: this.id,
                                token: e.getStorageSync("token"),
                                username: this.name,
                                mobile: this.mobile,
                                city_id: this.resultInfo.result,
                                address: this.address,
                                qq: this.qq
                            },
                            success: function(t) {
                                0 == t.data.code ? e.showToast({
                                    title: t.data.msg,
                                    icon: "none"
                                }) : e.redirectTo({
                                    url: "../me/duihlist"
                                });
                            }
                        }) : e.request({
                            url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "score.post_score_exchange",
                                goods_id: this.id,
                                token: e.getStorageSync("token"),
                                username: this.name,
                                qq: this.qq
                            },
                            success: function(t) {
                                0 == t.data.code ? e.showToast({
                                    title: t.data.msg,
                                    icon: "none"
                                }) : e.redirectTo({
                                    url: "../me/duihlist"
                                });
                            }
                        }) : e.showToast({
                            title: "请输入详细地址",
                            icon: "none"
                        }) : e.showToast({
                            title: "请选择地址",
                            icon: "none"
                        }) : e.showToast({
                            title: "请输入联系人电话",
                            icon: "none"
                        }) : e.showToast({
                            title: "请输入昵称",
                            icon: "none"
                        });
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d")["default"]);
    },
    ded7: function(e, t, n) {},
    f393: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("c22f"), a = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t["default"] = a.a;
    }
}, [ [ "60ed", "common/runtime", "common/vendor" ] ] ]);