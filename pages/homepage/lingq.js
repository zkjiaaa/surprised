(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/homepage/lingq" ], {
    "0d44": function(e, t, n) {
        "use strict";
        var a, o = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, l = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return l;
        }), n.d(t, "a", function() {
            return a;
        });
    },
    "24d5": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("de50"), o = function() {
                Promise.all([ n.e("common/vendor"), n.e("justother/w-picker/w-picker") ]).then(function() {
                    return resolve(n("a004"));
                }.bind(null, n)).catch(n.oe);
            }, l = {
                components: {
                    wPicker: o
                },
                data: function() {
                    return {
                        theme_color: "#fff",
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
                        id: 0,
                        qq: "",
                        tabIndex: 0,
                        linkList: [ {
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
                        } ]
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    this.id = t.id, e.request({
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
                        e.request({
                            url: a.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "question.post_gift_exchange",
                                token: e.getStorageSync("token"),
                                gift_id: this.id,
                                username: this.name,
                                mobile: this.mobile,
                                address: this.resultInfo.result + this.address,
                                qq: this.qq
                            },
                            success: function(t) {
                                1 == t.data.code ? (e.showToast({
                                    title: "兑换成功"
                                }), setTimeout(function() {
                                    e.navigateBack({});
                                }, 1e3)) : e.showToast({
                                    title: t.data.msg,
                                    icon: "none"
                                });
                            }
                        });
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d")["default"]);
    },
    "2ae4": function(e, t, n) {
        "use strict";
        var a = n("f095"), o = n.n(a);
        o.a;
    },
    b039: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("0d44"), o = n("b7ef");
        for (var l in o) "default" !== l && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(l);
        n("2ae4");
        var i, u = n("f0c5"), r = Object(u["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        t["default"] = r.exports;
    },
    b7ef: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("24d5"), o = n.n(a);
        for (var l in a) "default" !== l && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(l);
        t["default"] = o.a;
    },
    cb15: function(e, t, n) {
        "use strict";
        (function(e) {
            n("0207");
            a(n("66fd"));
            var t = a(n("b039"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    f095: function(e, t, n) {}
}, [ [ "cb15", "common/runtime", "common/vendor" ] ] ]);