(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/homepage/answer" ], {
    "2efa": function(t, o, e) {
        "use strict";
        var n = e("a163"), a = e.n(n);
        a.a;
    },
    "58e1": function(t, o, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var n = e("de50"), a = {
                data: function() {
                    return {
                        Inv: "5",
                        showjieguo: !1,
                        thatindex: 0,
                        question_reborn_time: 20,
                        fuhuodao: 20,
                        redy: "",
                        ready: 5,
                        getnum: 0,
                        fdao: "",
                        id: 0,
                        shipinfuh: 2,
                        daojishi: 0,
                        dao: 0,
                        showdata: [],
                        question_list: [],
                        duile: !1,
                        chengyukong: "",
                        question_length: 1,
                        goodLottery: !1,
                        xiayiti: !0,
                        theme_color: "#FFF",
                        Lottery: !0
                    };
                },
                onLoad: function() {
                    var o = this;
                    t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(e) {
                            o.theme_color = e.data.data.app_theme_bg_color, t.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: e.data.data.app_theme_bg_color
                            }), o.guanggaoid2 = e.data.data.wx_video_reward_advert_key;
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "question.get_question_order",
                            token: t.getStorageSync("token")
                        },
                        success: function(e) {
                            if (0 == e.data.code) return t.showToast({
                                title: e.data.msg,
                                icon: "none"
                            }), void setTimeout(function() {
                                t.navigateBack({});
                            }, 2e3);
                            o.question_list = e.data.data.question_list, o.question_length = e.data.data.question_num, 
                            o.id = e.data.data.question_order_id, o.daojishi = e.data.data.question_list[0].answer_deadline, 
                            o.question_reborn_time = e.data.data.question_reborn_time, o.redy = setInterval(function() {
                                o.ready > 1 ? o.ready-- : (clearInterval(o.redy), o.Lottery = !1);
                            }, 1e3), setTimeout(function() {
                                o.datidaojishi(o.question_list[0].answer_deadline);
                            }, 5e3);
                        }
                    }), t.request({
                        url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "user.userInfo",
                            token: t.getStorageSync("token")
                        },
                        success: function(e) {
                            1001 == e.data.code ? t.showModal({
                                title: "您未登录",
                                content: "是否去登录？",
                                success: function(o) {
                                    o.confirm ? t.navigateTo({
                                        url: "../../justother/login/login"
                                    }) : o.cancel && (console.log("返回10"), t.switchTab({
                                        url: "../home/index"
                                    }));
                                }
                            }) : o.showdata = e.data.data.user_info;
                        }
                    });
                },
                methods: {
                    fuhuodaojishi: function() {
                        var o = this;
                        clearInterval(this.fdao), this.goodLottery = !0, this.fuhuodao = this.question_reborn_time, 
                        this.fdao = setInterval(function() {
                            if (!(o.fuhuodao > 1)) return clearInterval(o.fdao), console.log("复活返回"), void t.switchTab({
                                url: "../home/index"
                            });
                            o.fuhuodao = o.fuhuodao - 1;
                        }, 1e3);
                    },
                    datidaojishi: function(t) {
                        var o = this;
                        clearInterval(this.dao), this.daojishi = t, this.dao = setInterval(function() {
                            o.daojishi > 1 ? o.daojishi = o.daojishi - 1 : o.fuhuodaojishi();
                        }, 1e3);
                    },
                    goback: function() {
                        t.switchTab({
                            url: "../home/index"
                        });
                    },
                    xuandaan: function(t, o, e, n) {
                        var a = this;
                        if (this.xiayiti) {
                            this.chengyukong = n, this.xiayiti = !1;
                            var i = this;
                            clearInterval(i.dao), clearInterval(i.fdao), this.Inv = t, this.duile = t == o, 
                            setTimeout(function() {
                                a.xiayiti = !0, a.changeTab(t, o, e);
                            }, 2e3);
                        }
                    },
                    changeTab: function(o, e, a) {
                        var i = this;
                        this.Inv = o;
                        var r = this;
                        if (o == e) this.thatindex++, this.Inv = 5, this.thatindex == this.question_length ? t.request({
                            url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "question.post_question_result",
                                token: t.getStorageSync("token"),
                                question_order_id: r.id,
                                status: 3
                            },
                            success: function(t) {
                                i.getnum = t.data.data.voucher_num, i.showjieguo = !0;
                            }
                        }) : this.datidaojishi(a); else {
                            if (this.shipinfuh <= 0) return t.showToast({
                                title: "答题失败，无可用复活机会",
                                icon: "none"
                            }), console.log("返回3"), void t.switchTab({
                                url: "../home/index"
                            });
                            this.fuhuodaojishi(), t.request({
                                url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                data: {
                                    controller: "question.post_question_result",
                                    token: t.getStorageSync("token"),
                                    question_order_id: r.id,
                                    status: 1
                                },
                                success: function(t) {}
                            });
                        }
                    },
                    goodcloseLottery: function() {
                        console.log("返回5"), clearInterval(this.fdao), t.switchTab({
                            url: "../home/index"
                        });
                    },
                    goscreen: function() {
                        clearInterval(this.fdao), clearInterval(this.dao);
                        var o = this;
                        if (0 != o.guanggaoid2 && "" != o.guanggaoid2) {
                            var e = wx.createRewardedVideoAd({
                                adUnitId: o.guanggaoid2
                            });
                            console.log("执行广告"), e.onLoad(function(t) {
                                console.log("videoAd onLoad", t);
                            }), e.onError(function(t) {
                                console.log("videoAd onError", t);
                            }), e.load().then(function() {
                                console.log("激励视频加载成功"), e.show().then(function() {
                                    console.log("激励视频 广告显示成功");
                                }).catch(function(t) {
                                    console.log("激励视频 广告显示失败");
                                });
                            }).catch(function(t) {
                                console.log("激励视频加载失败");
                            }), e.offClose(), e.show(), console.log(e), e.onClose(function(e) {
                                console.log(e), e.isEnded && t.request({
                                    url: n.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "question.post_answer_fail_video",
                                        token: t.getStorageSync("token")
                                    },
                                    success: function(t) {
                                        o.shipinfuh = o.shipinfuh - 1, o.goodLottery = !1, o.thatindex++, o.Inv = 5;
                                    }
                                });
                            });
                        }
                    }
                }
            };
            o.default = a;
        }).call(this, e("543d")["default"]);
    },
    7233: function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e("8bdd"), a = e("ff58");
        for (var i in a) "default" !== i && function(t) {
            e.d(o, t, function() {
                return a[t];
            });
        }(i);
        e("2efa");
        var r, s = e("f0c5"), u = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], r);
        o["default"] = u.exports;
    },
    "8bdd": function(t, o, e) {
        "use strict";
        var n, a = function() {
            var t = this, o = t.$createElement;
            t._self._c;
        }, i = [];
        e.d(o, "b", function() {
            return a;
        }), e.d(o, "c", function() {
            return i;
        }), e.d(o, "a", function() {
            return n;
        });
    },
    "8f7a": function(t, o, e) {
        "use strict";
        (function(t) {
            e("0207");
            n(e("66fd"));
            var o = n(e("7233"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(o.default);
        }).call(this, e("543d")["createPage"]);
    },
    a163: function(t, o, e) {},
    ff58: function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e("58e1"), a = e.n(n);
        for (var i in n) "default" !== i && function(t) {
            e.d(o, t, function() {
                return n[t];
            });
        }(i);
        o["default"] = a.a;
    }
}, [ [ "8f7a", "common/runtime", "common/vendor" ] ] ]);