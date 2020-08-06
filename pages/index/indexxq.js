(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/indexxq" ], {
    "0182": function(e, a, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = t("de50"), n = function() {
                t.e("pages/index/danmu").then(function() {
                    return resolve(t("6ecd"));
                }.bind(null, t)).catch(t.oe);
            }, r = {
                components: {
                    lBarrage: n
                },
                data: function() {
                    return {
                        daojishi: "",
                        daily_prize_num: 0,
                        member_prize_num: 0,
                        rule: [],
                        leftid: 0,
                        shareshow: !1,
                        dibushow: !1,
                        yichou: !1,
                        showren: !1,
                        showma: !1,
                        showdata: [],
                        share_image: "",
                        member: [],
                        wei: [],
                        help_member: [],
                        wx_template_id: 0,
                        mymember: [],
                        guanggaoid2: 0,
                        mymember1: [],
                        mymember2: [],
                        zhulitype: 0,
                        luck_member: [],
                        detail_invite_name: "",
                        detail_support_name: "",
                        detail_support_tips: "",
                        theme_color: "#FFF",
                        id: 0,
                        danmulist: [],
                        qq_groupIdList: 0,
                        sharetitle: "",
                        guanggaoid: 0,
                        prize_draw_name: "抽奖",
                        yuguanggao: "",
                        guanggaoid3: 0,
                        choujma: "",
                        invite_id: 0,
                        daxiao: !1,
                        swiperList: []
                    };
                },
                onLoad: function(a) {
                    var t = this;
                    if (this.id = a.id, a.invite_id && (this.invite_id = a.invite_id), a.scene) {
                        var n = decodeURIComponent(a.scene), r = n.split("&");
                        this.id = r[0], this.invite_id = r[1];
                    }
                    e.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.barrageShow"
                        },
                        success: function(e) {
                            t.list = e.data.data, setTimeout(function() {
                                t.$refs.lBarrage.start(t.list);
                            }, 1e3);
                        }
                    });
                },
                onShareAppMessage: function(a) {
                    var t = this;
                    return "button" === a.from && e.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.share_prize",
                            prize_id: t.id,
                            token: e.getStorageSync("token")
                        },
                        success: function(a) {
                            0 == a.data.code && e.showToast({
                                title: a.data.msg
                            });
                        }
                    }), {
                        title: this.showdata.goods.title,
                        imageUrl: t.share_image,
                        path: "/pages/index/indexxq?id=" + this.id + "&invite_id=" + e.getStorageSync("member_id")
                    };
                },
                onShow: function() {
                    var a = this, t = this;
                    this.daojishi = setInterval(function() {
                        a.daxiao = !a.daxiao;
                    }, 500), e.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "index.config"
                        },
                        success: function(o) {
                            a.prize_draw_name = o.data.data.prize_draw_name, a.qq_groupIdList = o.data.data.qq_groupIdList, 
                            a.theme_color = o.data.data.app_theme_bg_color, a.detail_invite_name = o.data.data.detail_invite_name, 
                            a.detail_support_name = o.data.data.detail_support_name, a.detail_support_tips = o.data.data.detail_support_tips, 
                            e.setNavigationBarColor({
                                frontColor: "#ffffff",
                                backgroundColor: o.data.data.app_theme_bg_color
                            }), e.setNavigationBarTitle({
                                title: a.prize_draw_name + "详情"
                            }), a.wx_template_id = o.data.data.wx_personal_template_id, a.guanggaoid = o.data.data.wx_detail_video_advert_key, 
                            a.guanggaoid2 = o.data.data.wx_video_reward_advert_key, a.yuguanggao = wx.createRewardedVideoAd({
                                adUnitId: t.guanggaoid2
                            }), a.yuguanggao.onLoad(function(a) {
                                console.log("videoAd onLoad", a), 1004 == a.errCode && e.showToast({
                                    title: "暂无合适广告，您可以选择稍后再试",
                                    icon: "none"
                                });
                            }), a.yuguanggao.onError(function(a) {
                                console.log("videoAd onError", a), 1004 == a.errCode && e.showToast({
                                    title: "暂无合适广告，您可以选择稍后再试",
                                    icon: "none"
                                });
                            }), a.guanggaoid3 = o.data.data.wx_jion_prize_advert_key;
                        }
                    }), e.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "user.userInfo",
                            token: e.getStorageSync("token")
                        },
                        success: function(e) {
                            a.daily_prize_num = e.data.data.daily_prize_num, a.member_prize_num = e.data.data.member_prize_num;
                        }
                    }), e.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.get_prize_info",
                            id: this.id,
                            token: e.getStorageSync("token")
                        },
                        success: function(t) {
                            if ("请先授权登陆" == t.data.msg && e.showModal({
                                title: "您未登录",
                                content: "是否去登录？",
                                success: function(a) {
                                    a.confirm ? e.navigateTo({
                                        url: "../../justother/login/login"
                                    }) : a.cancel && e.navigateBack();
                                }
                            }), a.help_member = t.data.data.help_member, a.share_image = t.data.data.goods.share_img, 
                            a.wei = [], t.data.data.help_member.length < 5) for (var o = t.data.data.help_member.length; o < 5; o++) a.wei.push("../../static/user.png");
                            a.showdata = t.data.data, a.member = t.data.data.member, a.luck_member = t.data.data.luck_member, 
                            a.swiperList = t.data.data.goods.thumbs, 1 == t.data.data.is_join && (a.yichou = !0);
                        }
                    }), e.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.get_member_lucky_code",
                            prize_id: this.id,
                            token: e.getStorageSync("token")
                        },
                        success: function(e) {
                            a.mymember = e.data.data.member, a.mymember1 = e.data.data.share_member, a.mymember2 = e.data.data.invite_member;
                        }
                    }), e.request({
                        url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                        data: {
                            controller: "prizedraw.setting"
                        },
                        success: function(e) {
                            a.zhulitype = e.data.data.type, null != e.data.data.rule && "" != e.data.data.rule && void 0 != e.data.data.rule && (a.rule = e.data.data.rule, 
                            a.rule = a.rule.split("\n"));
                        }
                    });
                },
                onHide: function() {
                    clearInterval(this.daojishi);
                },
                onUnload: function() {
                    clearInterval(this.daojishi);
                },
                onPageScroll: function(e) {
                    e.scrollTop >= 500 ? this.dibushow = !0 : this.dibushow = !1;
                },
                methods: {
                    showhaibao: function() {
                        e.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.get_user_goods_qrcode",
                                prize_id: this.id,
                                token: e.getStorageSync("token")
                            },
                            success: function(a) {
                                var t = [];
                                t.push(a.data.image_path), console.log(t), e.previewImage({
                                    urls: t,
                                    longPressActions: {
                                        success: function(e) {
                                            console.log("选中了第" + (e.tapIndex + 1) + "个按钮,第" + (e.index + 1) + "张图片");
                                        },
                                        fail: function(e) {
                                            console.log(e.errMsg);
                                        }
                                    }
                                });
                            }
                        });
                    },
                    showshare: function() {
                        this.shareshow = !this.shareshow;
                    },
                    chakanm: function(a) {
                        e.navigateTo({
                            url: "./zhongjlist?id=" + this.id
                        });
                    },
                    bdtap: function(e) {
                        this.leftid = e;
                    },
                    onEnd: function() {
                        console.log("一轮结束"), this.$refs.lBarrage.start(this.list);
                    },
                    shouquan: function() {
                        console.log(this.member_prize_num), console.log(this.daily_prize_num);
                        var a = this;
                        if (parseInt(this.member_prize_num) >= parseInt(this.daily_prize_num) && this.daily_prize_num > 0) e.showModal({
                            title: "提示",
                            showCancel: !1,
                            content: "今日" + a.prize_draw_name + "次数已用完，请明天再来",
                            success: function(e) {}
                        }); else {
                            var t = [];
                            t.push(this.wx_template_id), console.log(t), wx.requestSubscribeMessage({
                                tmplIds: t,
                                success: function(t) {
                                    console.log("guangaoid = " + a.guanggaoid2), 0 != a.guanggaoid2 && "" != a.guanggaoid2 ? (console.log("执行广告"), 
                                    a.yuguanggao.load().then(function() {
                                        console.log("激励视频加载成功"), a.yuguanggao.show().then(function() {
                                            console.log("激励视频 广告显示成功");
                                        }).catch(function(e) {
                                            console.log("激励视频 广告显示失败");
                                        });
                                    }).catch(function(e) {
                                        console.log("激励视频加载失败");
                                    }), a.yuguanggao.offClose(), a.yuguanggao.show(), console.log(a.yuguanggao), a.yuguanggao.onClose(function(t) {
                                        console.log(t), t.isEnded && (a.showma = !0, a.openma(), a.yichou = !0, a.chouj(), 
                                        clearInterval(a.daojishi), e.request({
                                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                            data: {
                                                controller: "adv.addSeeLog",
                                                token: e.getStorageSync("token"),
                                                type: 0
                                            },
                                            success: function(e) {}
                                        }), e.request({
                                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                            data: {
                                                controller: "adv.videoRewardPoints",
                                                token: e.getStorageSync("token"),
                                                adv_id: t.data.data.adv_id
                                            },
                                            success: function(e) {}
                                        }));
                                    })) : (a.showma = !0, a.openma(), a.yichou = !0, a.chouj(), clearInterval(a.daojishi));
                                },
                                fail: function(t) {
                                    console.log(t), 10001 != t.errCode && 10004 != t.errCode && 20001 != t.errCode && 20004 != t.errCode || (0 != a.guanggaoid2 && "" != a.guanggaoid2 ? (console.log("执行广告"), 
                                    a.yuguanggao.load().then(function() {
                                        console.log("激励视频加载成功"), a.yuguanggao.show().then(function() {
                                            console.log("激励视频 广告显示成功");
                                        }).catch(function(e) {
                                            console.log("激励视频 广告显示失败");
                                        });
                                    }).catch(function(e) {
                                        console.log("激励视频加载失败");
                                    }), a.yuguanggao.offClose(), a.yuguanggao.show(), console.log(a.yuguanggao), a.yuguanggao.onClose(function(t) {
                                        console.log(t), t.isEnded && (a.showma = !0, a.openma(), a.yichou = !0, a.chouj(), 
                                        clearInterval(a.daojishi), e.request({
                                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                            data: {
                                                controller: "adv.addSeeLog",
                                                token: e.getStorageSync("token"),
                                                type: 0
                                            },
                                            success: function(e) {}
                                        }), e.request({
                                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                            data: {
                                                controller: "adv.videoRewardPoints",
                                                token: e.getStorageSync("token"),
                                                adv_id: t.data.data.adv_id
                                            },
                                            success: function(e) {}
                                        }));
                                    })) : (a.showma = !0, a.openma(), a.yichou = !0, a.chouj(), clearInterval(a.daojishi)));
                                }
                            }), console.log("!!!!");
                        }
                    },
                    ma: function(e) {
                        console.log(e.detail.formId);
                    },
                    chouj: function(a) {
                        var t = this, n = this;
                        0 != this.invite_id ? e.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.good_luck",
                                prize_id: this.id,
                                token: e.getStorageSync("token"),
                                invite_id: this.invite_id
                            },
                            success: function(a) {
                                console.log(a), t.choujma = a.data.data, 1001 == a.data.code && (t.choujma = a.data.data.lucky_code), 
                                e.request({
                                    url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "user.userInfo",
                                        token: e.getStorageSync("token")
                                    },
                                    success: function(e) {
                                        t.daily_prize_num = e.data.data.daily_prize_num, t.member_prize_num = e.data.data.member_prize_num;
                                    }
                                }), e.request({
                                    url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "prizedraw.get_prize_info",
                                        id: n.id,
                                        token: e.getStorageSync("token")
                                    },
                                    success: function(e) {
                                        n.showdata = e.data.data, n.member = e.data.data.member, n.swiperList = e.data.data.goods.thumbs, 
                                        1 == e.data.data.is_join && (n.yichou = !0);
                                    }
                                }), e.request({
                                    url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "prizedraw.get_member_lucky_code",
                                        prize_id: n.id,
                                        token: e.getStorageSync("token")
                                    },
                                    success: function(e) {
                                        n.mymember = e.data.data.member, n.mymember1 = e.data.data.share_member, n.mymember2 = e.data.data.invite_member;
                                    }
                                });
                            }
                        }) : e.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.good_luck",
                                prize_id: this.id,
                                formid: a,
                                token: e.getStorageSync("token")
                            },
                            success: function(a) {
                                t.choujma = a.data.data, 1001 == a.data.code && (t.choujma = a.data.data.lucky_code), 
                                e.request({
                                    url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "prizedraw.get_prize_info",
                                        id: n.id,
                                        token: e.getStorageSync("token")
                                    },
                                    success: function(e) {
                                        n.showdata = e.data.data, n.member = e.data.data.member, n.swiperList = e.data.data.goods.thumbs, 
                                        1 == e.data.data.is_join && (n.yichou = !0);
                                    }
                                }), e.request({
                                    url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                                    data: {
                                        controller: "prizedraw.get_member_lucky_code",
                                        prize_id: n.id,
                                        token: e.getStorageSync("token")
                                    },
                                    success: function(e) {
                                        n.mymember = e.data.data.member, n.mymember1 = e.data.data.share_member, n.mymember2 = e.data.data.invite_member;
                                    }
                                });
                            }
                        });
                    },
                    openma: function() {
                        this.showma = !0;
                    },
                    goma: function() {
                        e.navigateTo({
                            url: "./quanbuma?id=" + this.id
                        });
                    },
                    gozhuli: function() {
                        e.navigateTo({
                            url: "./quanbzhuli?id=" + this.id + "&num" + this.help_member.length
                        });
                    },
                    closema: function() {
                        this.showma = !1;
                    },
                    ren: function() {
                        var a = this;
                        this.showren = !this.showren, e.request({
                            url: o.getUrl() + "&c=entry&from=wxapp&a=wxapp&do=index",
                            data: {
                                controller: "prizedraw.get_member_lucky_code",
                                prize_id: this.id,
                                token: e.getStorageSync("token")
                            },
                            success: function(e) {
                                a.mymember = e.data.data.member, a.mymember1 = e.data.data.share_member, a.mymember2 = e.data.data.invite_member;
                            }
                        });
                    },
                    gomore: function() {
                        console.log("?????"), e.reLaunch({
                            url: "/pages/index/index"
                        });
                    }
                }
            };
            a.default = r;
        }).call(this, t("543d")["default"]);
    },
    1771: function(e, a, t) {},
    "2a65": function(e, a, t) {
        "use strict";
        (function(e) {
            t("0207");
            o(t("66fd"));
            var a = o(t("aab2"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(a.default);
        }).call(this, t("543d")["createPage"]);
    },
    "44bd": function(e, a, t) {
        "use strict";
        t.r(a);
        var o = t("0182"), n = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(a, e, function() {
                return o[e];
            });
        }(r);
        a["default"] = n.a;
    },
    "6ae8": function(e, a, t) {
        "use strict";
        var o = t("1771"), n = t.n(o);
        n.a;
    },
    aab2: function(e, a, t) {
        "use strict";
        t.r(a);
        var o = t("fda3"), n = t("44bd");
        for (var r in n) "default" !== r && function(e) {
            t.d(a, e, function() {
                return n[e];
            });
        }(r);
        t("6ae8");
        var i, d = t("f0c5"), s = Object(d["a"])(n["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
        a["default"] = s.exports;
    },
    fda3: function(e, a, t) {
        "use strict";
        var o, n = function() {
            var e = this, a = e.$createElement;
            e._self._c;
        }, r = [];
        t.d(a, "b", function() {
            return n;
        }), t.d(a, "c", function() {
            return r;
        }), t.d(a, "a", function() {
            return o;
        });
    }
}, [ [ "2a65", "common/runtime", "common/vendor" ] ] ]);