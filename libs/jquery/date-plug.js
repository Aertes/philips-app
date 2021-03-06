(function(V) {
    function M(aT, aV) {
        function aS(f, m, l) {
            f.stopPropagation();
            f.preventDefault();
            if (!u && !aQ(m) && !m.hasClass("dwa")) {
                u = !0;
                var d = m.find(".dw-ul");
                aR(d);
                clearInterval(b);
                b = setInterval(function() {
                    l(d)
                }, aK.delay);
                l(d)
            }
        }
        function aQ(d) {
            return V.isArray(aK.readonly) ? (d = V(".dwwl", aC).index(d),
            aK.readonly[d]) : aK.readonly
        }
        function aA(t) {
            var m = '<div class="dw-bf">'
              , t = aB[t]
              , t = t.values ? t : p(t)
              , d = 1
              , r = t.labels || []
              , f = t.values
              , l = t.keys || f;
            V.each(f, function(W, X) {
                0 == d % 20 && (m += '</div><div class="dw-bf">');
                m += '<div role="option" aria-selected="false" class="dw-li dw-v" data-val="' + l[W] + '"' + (r[W] ? ' aria-label="' + r[W] + '"' : "") + ' style="height:' + ak + "px;line-height:" + ak + 'px;"><div class="dw-i">' + X + "</div></div>";
                d++
            });
            return m += "</div>"
        }
        function aR(d) {
            i = V(".dw-li", d).index(V(".dw-v", d).eq(0));
            e = V(".dw-li", d).index(V(".dw-v", d).eq(-1));
            ag = V(".dw-ul", aC).index(d)
        }
        function aU(d) {
            var f = aK.headerText;
            return f ? "function" === typeof f ? f.call(af, d) : f.replace(/\{value\}/i, d) : ""
        }
        function aP() {
            aN.temp = an && null !== aN.val && aN.val != al.val() || null === aN.values ? aK.parseValue(al.val() || "", aN) : aN.values.slice(0);
            az()
        }
        function aI(l) {
            var f = window.getComputedStyle ? getComputedStyle(l[0]) : l[0].style, d;
            h ? (V.each(["t", "webkitT", "MozT", "OT", "msT"], function(m, r) {
                if (void 0 !== f[r + "ransform"]) {
                    return d = f[r + "ransform"],
                    !1
                }
            }),
            d = d.split(")")[0].split(", "),
            l = d[13] || d[5]) : l = f.top.replace("px", "");
            return Math.round(s - l / ak)
        }
        function aF(d, f) {
            clearTimeout(aW[f]);
            delete aW[f];
            d.closest(".dwwl").removeClass("dwa")
        }
        function aO(f, W, r, d, t) {
            var l = (s - r) * ak
              , m = f[0].style;
            l == ap[W] && aW[W] || (d && l != ap[W] && am("onAnimStart", [aC, W, d]),
            ap[W] = l,
            m[y + "Transition"] = "all " + (d ? d.toFixed(3) : 0) + "s ease-out",
            h ? m[y + "Transform"] = "translate3d(0," + l + "px,0)" : m.top = l + "px",
            aW[W] && aF(f, W),
            d && t && (f.closest(".dwwl").addClass("dwa"),
            aW[W] = setTimeout(function() {
                aF(f, W)
            }, 1000 * d)),
            a[W] = r)
        }
        function ai(r, l, d, f, m) {
            !1 !== am("validate", [aC, l, r]) && (V(".dw-ul", aC).each(function(aZ) {
                var Z = V(this)
                  , aX = V('.dw-li[data-val="' + aN.temp[aZ] + '"]', Z)
                  , Y = V(".dw-li", Z)
                  , aa = Y.index(aX)
                  , X = Y.length
                  , a0 = aZ == l || void 0 === l;
                if (!aX.hasClass("dw-v")) {
                    for (var t = aX, aY = 0, W = 0; 0 <= aa - aY && !t.hasClass("dw-v"); ) {
                        aY++,
                        t = Y.eq(aa - aY)
                    }
                    for (; aa + W < X && !aX.hasClass("dw-v"); ) {
                        W++,
                        aX = Y.eq(aa + W)
                    }
                    (W < aY && W && 2 !== f || !aY || 0 > aa - aY || 1 == f) && aX.hasClass("dw-v") ? aa += W : (aX = t,
                    aa -= aY)
                }
                if (!aX.hasClass("dw-sel") || a0) {
                    aN.temp[aZ] = aX.attr("data-val"),
                    V(".dw-sel", Z).removeClass("dw-sel"),
                    aK.multiple || (V(".dw-sel", Z).removeAttr("aria-selected"),
                    aX.attr("aria-selected", "true")),
                    aX.addClass("dw-sel"),
                    aO(Z, aZ, aa, a0 ? r : 0.1, a0 ? m : !1)
                }
            }),
            F = aK.formatResult(aN.temp),
            "inline" == aK.display ? az(d, 0, !0) : V(".dwv", aC).html(aU(F)),
            d && am("onChange", [F]))
        }
        function am(l, d) {
            var f;
            d.push(aN);
            V.each([j.defaults, w, aV], function(m, r) {
                r[l] && (f = r[l].apply(af, d))
            });
            return f
        }
        function aj(X, r, Z, d, Y) {
            var r = Math.max(i, Math.min(r, e))
              , m = V(".dw-li", X).eq(r)
              , W = void 0 === Y ? r : Y
              , t = ag
              , l = d ? r == W ? 0.1 : Math.abs((r - W) * aK.timeUnit) : 0;
            aN.temp[t] = m.attr("data-val");
            aO(X, t, r, l, Y);
            setTimeout(function() {
                ai(l, t, !0, Z, void 0 !== Y)
            }, 10)
        }
        function aL(d) {
            var f = a[ag] + 1;
            aj(d, f > e ? i : f, 1, !0)
        }
        function aw(d) {
            var f = a[ag] - 1;
            aj(d, f < i ? e : f, 2, !0)
        }
        function az(f, m, l, d) {
            q && !l && ai(m);
            F = aK.formatResult(aN.temp);
            d || (aN.values = aN.temp.slice(0),
            aN.val = F);
            f && an && al.val(F).trigger("change")
        }
        var s, ak, F, aC, C, ae, aE, ax, ac, ar, A, ad, j, aD, u, ay, B, o, aq, x, ao, i, e, ah, ag, b, aH, au, aN = this, Q = V.mobiscroll, af = aT, al = V(af), aK = P({}, I), w = {}, aW = {}, a = {}, ap = {}, aB = [], an = al.is("input"), q = !1, D = function(d) {
            g(d) && !S && !aQ(this) && !u && (d.preventDefault(),
            S = !0,
            ay = "clickpick" != aK.mode,
            ah = V(".dw-ul", this),
            aR(ah),
            ao = (B = void 0 !== aW[ag]) ? aI(ah) : a[ag],
            o = K(d, "Y"),
            aq = new Date,
            x = o,
            aO(ah, ag, ao, 0.001),
            ay && ah.closest(".dwwl").addClass("dwa"),
            V(document).on(n, z).on(k, aG))
        }, z = function(d) {
            ay && (d.preventDefault(),
            d.stopPropagation(),
            x = K(d, "Y"),
            aO(ah, ag, Math.max(i - 1, Math.min(ao + (o - x) / ak, e + 1))));
            B = !0
        }, aG = function() {
            var r = new Date - aq, l = Math.max(i - 1, Math.min(ao + (o - x) / ak, e + 1)), d, f = ah.offset().top;
            300 > r ? (r = (x - o) / r,
            d = r * r / aK.speedUnit,
            0 > x - o && (d = -d)) : d = x - o;
            r = Math.round(ao - d / ak);
            if (!d && !B) {
                var f = Math.floor((x - f) / ak)
                  , m = V(".dw-li", ah).eq(f);
                d = ay;
                !1 !== am("onValueTap", [m]) ? r = f : d = !0;
                d && (m.addClass("dw-hl"),
                setTimeout(function() {
                    m.removeClass("dw-hl")
                }, 200))
            }
            ay && aj(ah, r, 0, !0, Math.round(l));
            S = !1;
            ah = null;
            V(document).off(n, z).off(k, aG)
        }, aJ = function(f) {
            var d = V(this);
            V(document).on(k, at);
            d.hasClass("dwb-d") || d.addClass("dwb-a");
            setTimeout(function() {
                d.blur()
            }, 10);
            d.hasClass("dwwb") && g(f) && aS(f, d.closest(".dwwl"), d.hasClass("dwwbp") ? aL : aw)
        }, at = function() {
            u && (clearInterval(b),
            u = !1);
            V(document).off(k, at);
            V(".dwb-a", aC).removeClass("dwb-a")
        }, av = function(d) {
            38 == d.keyCode ? aS(d, V(this), aw) : 40 == d.keyCode && aS(d, V(this), aL)
        }, ab = function() {
            u && (clearInterval(b),
            u = !1)
        }, aM = function(f) {
            if (!aQ(this)) {
                f.preventDefault();
                var f = f.originalEvent || f
                  , f = f.wheelDelta ? f.wheelDelta / 120 : f.detail ? -f.detail / 3 : 0
                  , d = V(".dw-ul", this);
                aR(d);
                aj(d, Math.round(a[ag] - f), 0 > f ? 1 : 2)
            }
        };
        aN.position = function(aZ) {
            if (!("inline" == aK.display || C === V(window).width() && aE === V(window).height() && aZ || !1 === am("onPosition", [aC]))) {
                var a1, Z, t, a0, aX, Y, aa, X, m, aY = 0, r = 0, aZ = V(window).scrollTop();
                a0 = V(".dwwr", aC);
                var W = V(".dw", aC)
                  , a2 = {};
                aX = void 0 === aK.anchor ? al : aK.anchor;
                C = V(window).width();
                aE = V(window).height();
                ae = (ae = window.innerHeight) || aE;
                /modal|bubble/.test(aK.display) && (V(".dwc", aC).each(function() {
                    a1 = V(this).outerWidth(!0);
                    aY += a1;
                    r = a1 > r ? a1 : r
                }),
                a1 = aY > C ? r : aY,
                a0.width(a1).css("white-space", aY > C ? "" : "nowrap"));
                ax = W.outerWidth();
                ac = W.outerHeight(!0);
                ar = ac <= ae && ax <= C;
                "modal" == aK.display ? (Z = (C - ax) / 2,
                t = aZ + (ae - ac) / 2) : "bubble" == aK.display ? (m = !0,
                X = V(".dw-arrw-i", aC),
                Z = aX.offset(),
                Y = Z.top,
                aa = Z.left,
                a0 = aX.outerWidth(),
                aX = aX.outerHeight(),
                Z = aa - (W.outerWidth(!0) - a0) / 2,
                Z = Z > C - ax ? C - (ax + 20) : Z,
                Z = 0 <= Z ? Z : 20,
                t = Y - ac,
                t < aZ || Y > aZ + ae ? (W.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"),
                t = Y + aX) : W.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"),
                X = X.outerWidth(),
                a0 = aa + a0 / 2 - (Z + (ax - X) / 2),
                V(".dw-arr", aC).css({
                    left: Math.max(0, Math.min(a0, X))
                })) : (a2.width = "100%",
                "top" == aK.display ? t = aZ : "bottom" == aK.display && (t = aZ + ae - ac));
                a2.top = 0 > t ? 0 : t;
                a2.left = Z;
                W.css(a2);
                V(".dw-persp", aC).height(0).height(t + ac > V(document).height() ? t + ac : V(document).height());
                m && (t + ac > aZ + ae || Y > aZ + ae) && V(window).scrollTop(t + ac - ae)
            }
        }
        ;
        aN.enable = function() {
            aK.disabled = !1;
            an && al.prop("disabled", !1)
        }
        ;
        aN.disable = function() {
            aK.disabled = !0;
            an && al.prop("disabled", !0)
        }
        ;
        aN.setValue = function(m, l, d, f) {
            aN.temp = V.isArray(m) ? m.slice(0) : aK.parseValue.call(af, m + "", aN);
            az(l, d, !1, f)
        }
        ;
        aN.getValue = function() {
            return aN.values
        }
        ;
        aN.getValues = function() {
            var d = [], f;
            for (f in aN._selectedValues) {
                d.push(aN._selectedValues[f])
            }
            return d
        }
        ;
        aN.changeWheel = function(m, l) {
            if (aC) {
                var d = 0
                  , f = m.length;
                V.each(aK.wheels, function(t, r) {
                    V.each(r, function(X, W) {
                        if (-1 < V.inArray(d, m) && (aB[d] = W,
                        V(".dw-ul", aC).eq(d).html(aA(d)),
                        f--,
                        !f)) {
                            return aN.position(),
                            ai(l, void 0, !0),
                            !1
                        }
                        d++
                    });
                    if (!f) {
                        return !1
                    }
                })
            }
        }
        ;
        aN.isVisible = function() {
            return q
        }
        ;
        aN.tap = function(f, m) {
            var d, l;
            if (aK.tap) {
                f.on("touchstart.dw", function(r) {
                    r.preventDefault();
                    d = K(r, "X");
                    l = K(r, "Y")
                }).on("touchend.dw", function(r) {
                    20 > Math.abs(K(r, "X") - d) && 20 > Math.abs(K(r, "Y") - l) && m.call(this, r);
                    O = !0;
                    setTimeout(function() {
                        O = !1
                    }, 300)
                })
            }
            f.on("click.dw", function(r) {
                O || m.call(this, r)
            })
        }
        ;
        aN.show = function(r) {
            if (aK.disabled || q) {
                return !1
            }
            "top" == aK.display && (A = "slidedown");
            "bottom" == aK.display && (A = "slideup");
            aP();
            am("onBeforeShow", []);
            var d, m = 0, f = "";
            A && !r && (f = "dw-" + A + " dw-in");
            var l = '<div role="dialog" class="' + aK.theme + " dw-" + aK.display + (c ? " dw" + c : "") + '">' + ("inline" == aK.display ? '<div class="dw dwbg dwi"><div class="dwwr">' : '<div class="dw-persp"><div class="dwo"></div><div class="dw dwbg ' + f + '"><div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div><div class="dwwr"><div aria-live="assertive" class="dwv' + (aK.headerText ? "" : " dw-hidden") + '"></div>') + '<div class="dwcc">';
            V.each(aK.wheels, function(W, t) {
                l += '<div class="dwc' + ("scroller" != aK.mode ? " dwpm" : " dwsc") + (aK.showLabel ? "" : " dwhl") + '"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>';
                V.each(t, function(X, Y) {
                    aB[m] = Y;
                    d = void 0 !== Y.label ? Y.label : X;
                    l += '<td><div class="dwwl dwrc dwwl' + m + '">' + ("scroller" != aK.mode ? '<div class="dwb-e dwwb dwwbp" style="height:' + ak + "px;line-height:" + ak + 'px;"><span>+</span></div><div class="dwb-e dwwb dwwbm" style="height:' + ak + "px;line-height:" + ak + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + d + '</div><div tabindex="0" aria-live="off" aria-label="' + d + '" role="listbox" class="dwww"><div class="dww" style="height:' + aK.rows * ak + "px;min-width:" + aK.width + 'px;"><div class="dw-ul">';
                    l += aA(m);
                    l += '</div><div class="dwwol"></div></div><div class="dwwo"></div></div><div class="dwwol"></div></div></td>';
                    m++
                });
                l += "</tr></table></div></div>"
            });
            l += "</div>" + ("inline" != aK.display ? '<div class="dwbc' + (aK.button3 ? " dwbc-p" : "") + '"><span class="dwbw dwb-s"><span class="dwb dwb-e" role="button" tabindex="0">' + aK.setText + "</span></span>" + (aK.button3 ? '<span class="dwbw dwb-n"><span class="dwb dwb-e" role="button" tabindex="0">' + aK.button3Text + "</span></span>" : "") + '<span class="dwbw dwb-c"><span class="dwb dwb-e" role="button" tabindex="0">' + aK.cancelText + "</span></span></div></div>" : "") + "</div></div></div>";
            aC = V(l);
            ai();
            am("onMarkupReady", [aC]);
            "inline" != aK.display ? (aC.appendTo("body"),
            A && !r && (aC.addClass("dw-trans"),
            setTimeout(function() {
                aC.removeClass("dw-trans").find(".dw").removeClass(f)
            }, 350))) : al.is("div") ? al.html(aC) : aC.insertAfter(al);
            am("onMarkupInserted", [aC]);
            q = !0;
            j.init(aC, aN);
            if ("inline" != aK.display) {
                aN.tap(V(".dwb-s span", aC), function() {
                    aN.select()
                });
                aN.tap(V(".dwb-c span", aC), function() {
                    aN.cancel()
                });
                aK.button3 && aN.tap(V(".dwb-n span", aC), aK.button3);
                V(window).on("keydown.dw", function(t) {
                    t.keyCode == 13 ? aN.select() : t.keyCode == 27 && aN.cancel()
                });
                if (aK.scrollLock) {
                    aC.on("touchmove touchstart", function(t) {
                        ar && t.preventDefault()
                    })
                }
                V("input,select,button").each(function() {
                    if (!this.disabled) {
                        V(this).attr("autocomplete") && V(this).data("autocomplete", V(this).attr("autocomplete"));
                        V(this).addClass("dwtd").prop("disabled", true).attr("autocomplete", "off")
                    }
                });
                aN.position();
                V(window).on("orientationchange.dw resize.dw scroll.dw", function(t) {
                    clearTimeout(ad);
                    ad = setTimeout(function() {
                        var W = t.type == "scroll";
                        (W && ar || !W) && aN.position(!W)
                    }, 100)
                });
                aN.alert(aK.ariaDesc)
            }
            V(".dwwl", aC).on("DOMMouseScroll mousewheel", aM).on(G, D).on("keydown", av).on("keyup", ab);
            aC.on(G, ".dwb-e", aJ).on("keydown", ".dwb-e", function(t) {
                if (t.keyCode == 32) {
                    t.preventDefault();
                    t.stopPropagation();
                    V(this).click()
                }
            });
            am("onShow", [aC, F])
        }
        ;
        aN.hide = function(f, d) {
            if (!q || !1 === am("onClose", [F, d])) {
                return !1
            }
            V(".dwtd").each(function() {
                V(this).prop("disabled", !1).removeClass("dwtd");
                V(this).data("autocomplete") ? V(this).attr("autocomplete", V(this).data("autocomplete")) : V(this).removeAttr("autocomplete")
            });
            aC && ("inline" != aK.display && A && !f ? (aC.addClass("dw-trans").find(".dw").addClass("dw-" + A + " dw-out"),
            setTimeout(function() {
                aC.remove();
                aC = null
            }, 350)) : (aC.remove(),
            aC = null),
            V(window).off(".dw"));
            ap = {};
            q = !1;
            au = !0
        }
        ;
        aN.select = function() {
            !1 !== aN.hide(!1, "set") && (az(!0, 0, !0),
            am("onSelect", [aN.val]))
        }
        ;
        aN.alert = function(d) {
            L.text(d);
            clearTimeout(E);
            E = setTimeout(function() {
                L.text("")
            }, 5000)
        }
        ;
        aN.cancel = function() {
            !1 !== aN.hide(!1, "cancel") && am("onCancel", [aN.val])
        }
        ;
        aN.init = function(d) {
            j = P({
                defaults: {},
                init: U
            }, Q.themes[d.theme || aK.theme]);
            aD = Q.i18n[d.lang || aK.lang];
            P(aV, d);
            P(aK, j.defaults, aD, aV);
            aN.settings = aK;
            al.off(".dw");
            if (d = Q.presets[aK.preset]) {
                w = d.call(af, aN),
                P(aK, w, aV)
            }
            s = Math.floor(aK.rows / 2);
            ak = aK.height;
            A = aK.animate;
            q && aN.hide();
            if ("inline" == aK.display) {
                aN.show()
            } else {
                aP();
                if (an && (void 0 === aH && (aH = af.readOnly),
                af.readOnly = !0,
                aK.showOnFocus)) {
                    al.on("focus.dw", function() {
                        au || aN.show();
                        au = false
                    })
                }
                aK.showOnTap && aN.tap(al, function() {
                    aN.show()
                })
            }
        }
        ;
        aN.trigger = function(d, f) {
            return am(d, f)
        }
        ;
        aN.option = function(f, l) {
            var d = {};
            "object" === typeof f ? d = f : d[f] = l;
            aN.init(d)
        }
        ;
        aN.destroy = function() {
            aN.hide();
            al.off(".dw");
            delete J[af.id];
            an && (af.readOnly = aH)
        }
        ;
        aN.getInst = function() {
            return aN
        }
        ;
        aN.values = null;
        aN.val = null;
        aN.temp = null;
        aN._selectedValues = {};
        aN.init(aV)
    }
    function T(b) {
        for (var d in b) {
            if (void 0 !== H[b[d]]) {
                return !0
            }
        }
        return !1
    }
    function g(b) {
        if ("touchstart" === b.type) {
            v = !0
        } else {
            if (v) {
                return v = !1
            }
        }
        return !0
    }
    function K(e, i) {
        var d = e.originalEvent
          , f = e.changedTouches;
        return f || d && d.changedTouches ? d ? d.changedTouches[0]["page" + i] : f[0]["page" + i] : e["page" + i]
    }
    function p(a) {
        var d = {
            values: [],
            keys: []
        };
        V.each(a, function(f, e) {
            d.keys.push(f);
            d.values.push(e)
        });
        return d
    }
    function N(e, i, d) {
        var f = e;
        if ("object" === typeof i) {
            return e.each(function() {
                this.id || (R += 1,
                this.id = "mobiscroll" + R);
                J[this.id] = new M(this,i)
            })
        }
        "string" === typeof i && e.each(function() {
            var b;
            if ((b = J[this.id]) && b[i]) {
                if (b = b[i].apply(this, Array.prototype.slice.call(d, 1)),
                void 0 !== b) {
                    return f = b,
                    !1
                }
            }
        });
        return f
    }
    var S, O, v, E, L, R = (new Date).getTime(), J = {}, U = function() {}, H = document.createElement("modernizr").style, h = T(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]), c = function() {
        var b = ["Webkit", "Moz", "O", "ms"], d;
        for (d in b) {
            if (T([b[d] + "Transform"])) {
                return "-" + b[d].toLowerCase()
            }
        }
        return ""
    }(), y = c.replace(/^\-/, "").replace("moz", "Moz"), P = V.extend, G = "touchstart mousedown", n = "touchmove mousemove", k = "touchend mouseup", I = {
        width: 70,
        height: 40,
        rows: 3,
        delay: 300,
        disabled: !1,
        readonly: !1,
        showOnFocus: !0,
        showOnTap: !0,
        showLabel: !0,
        wheels: [],
        theme: "",
        headerText: "{value}",
        display: "modal",
        mode: "scroller",
        preset: "",
        lang: "en-US",
        setText: "Set",
        cancelText: "Cancel",
        ariaDesc: "Select a value",
        scrollLock: !0,
        tap: !0,
        speedUnit: 0.0012,
        timeUnit: 0.1,
        formatResult: function(b) {
            return b.join(" ")
        },
        parseValue: function(a, j) {
            var f = a.split(" "), d = [], i = 0, e;
            V.each(j.settings.wheels, function(m, l) {
                V.each(l, function(q, o) {
                    o = o.values ? o : p(o);
                    e = o.keys || o.values;
                    -1 !== V.inArray(f[i], e) ? d.push(f[i]) : d.push(e[0]);
                    i++
                })
            });
            return d
        }
    };
    V(function() {
        L = V('<div class="dw-hidden" role="alert"></div>').appendTo("body")
    });
    V(document).on("mouseover mouseup mousedown click", function(b) {
        if (O) {
            return b.stopPropagation(),
            b.preventDefault(),
            !1
        }
    });
    V.fn.mobiscroll = function(a) {
        P(this, V.mobiscroll.shorts);
        return N(this, a, arguments)
    }
    ;
    V.mobiscroll = V.mobiscroll || {
        setDefaults: function(b) {
            P(I, b)
        },
        presetShort: function(b) {
            this.shorts[b] = function(a) {
                return N(this, P(a, {
                    preset: b
                }), arguments)
            }
        },
        has3d: h,
        shorts: {},
        presets: {},
        themes: {},
        i18n: {}
    };
    V.scroller = V.scroller || V.mobiscroll;
    V.fn.scroller = V.fn.scroller || V.fn.mobiscroll
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.hu = b.extend(b.mobiscroll.i18n.hu, {
        setText: "OK",
        cancelText: "M\u00e9gse",
        dateFormat: "yy.mm.dd",
        dateOrder: "yymmdd",
        dayNames: "Vas\u00e1rnap,H\u00e9tf\u0151,Kedd,Szerda,Cs\u00fct\u00f6rt\u00f6k,P\u00e9ntek,Szombat".split(","),
        dayNamesShort: "Va,H\u00e9,Ke,Sze,Cs\u00fc,P\u00e9,Szo".split(","),
        dayText: "Nap",
        hourText: "\u00d3ra",
        minuteText: "Perc",
        monthNames: "Janu\u00e1r,Febru\u00e1r,M\u00e1rcius,\u00c1prilis,M\u00e1jus,J\u00fanius,J\u00falius,Augusztus,Szeptember,Okt\u00f3ber,November,December".split(","),
        monthNamesShort: "Jan,Feb,M\u00e1r,\u00c1pr,M\u00e1j,J\u00fan,J\u00fal,Aug,Szep,Okt,Nov,Dec".split(","),
        monthText: "H\u00f3nap",
        secText: "M\u00e1sodperc",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "\u00c9v",
        nowText: "Most",
        dateText: "D\u00e1tum",
        timeText: "Id\u0151",
        calendarText: "Napt\u00e1r",
        wholeText: "Eg\u00e9sz",
        fractionText: "T\u00f6rt",
        unitText: "Egys\u00e9g",
        labels: "\u00c9v,H\u00f3nap,Nap,\u00d3ra,Perc,M\u00e1sodperc,".split(","),
        labelsShort: "\u00c9v,H\u00f3.,Nap,\u00d3ra,Perc,Mp.,".split(","),
        startText: "Ind\u00edt",
        stopText: "Meg\u00e1ll\u00edt",
        resetText: "Vissza\u00e1ll\u00edt",
        lapText: "Lap",
        hideText: "Elrejt"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.de = b.extend(b.mobiscroll.i18n.de, {
        setText: "OK",
        cancelText: "Abbrechen",
        dateFormat: "dd.mm.yy",
        dateOrder: "ddmmyy",
        dayNames: "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
        dayNamesShort: "So,Mo,Di,Mi,Do,Fr,Sa".split(","),
        dayText: "Tag",
        hourText: "Stunde",
        minuteText: "Minuten",
        monthNames: "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","),
        monthNamesShort: "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
        monthText: "Monat",
        secText: "Sekunden",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Jahr",
        nowText: "Jetzt",
        dateText: "Datum",
        timeText: "Zeit",
        calendarText: "Kalender",
        wholeText: "Ganze Zahl",
        fractionText: "Bruchzahl",
        unitText: "Ma\u00dfeinheit",
        labels: "Jahre,Monate,Tage,Stunden,Minuten,Sekunden,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.es = b.extend(b.mobiscroll.i18n.es, {
        setText: "Aceptar",
        cancelText: "Cancelar",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddmmyy",
        dayNames: "Domingo,Lunes,Martes,Mi&#xE9;rcoles,Jueves,Viernes,S&#xE1;bado".split(","),
        dayNamesShort: "Do,Lu,Ma,Mi,Ju,Vi,S&#xE1;".split(","),
        dayText: "D&#237;a",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre".split(","),
        monthNamesShort: "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic".split(","),
        monthText: "Mes",
        secText: "Segundos",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "A&ntilde;o",
        nowText: "Ahora",
        dateText: "Fecha",
        timeText: "Tiempo",
        calendarText: "Calendario",
        wholeText: "Entero",
        fractionText: "Fracci\u00f3n",
        unitText: "Unidad",
        labels: "A\u00f1os,Meses,D\u00edas,Horas,Minutos,Segundos,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Iniciar",
        stopText: "Det\u00e9ngase",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.fr = b.extend(b.mobiscroll.i18n.fr, {
        setText: "Termin\u00e9",
        cancelText: "Annuler",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddmmyy",
        dayNames: "&#68;imanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi".split(","),
        dayNamesShort: "&#68;im.,Lun.,Mar.,Mer.,Jeu.,Ven.,Sam.".split(","),
        dayText: "Jour",
        monthText: "Mois",
        monthNames: "Janvier,F\u00e9vrier,Mars,Avril,Mai,Juin,Juillet,Ao\u00fbt,Septembre,Octobre,Novembre,D\u00e9cembre".split(","),
        monthNamesShort: "Janv.,F\u00e9vr.,Mars,Avril,Mai,Juin,Juil.,Ao\u00fbt,Sept.,Oct.,Nov.,D\u00e9c.".split(","),
        hourText: "Heures",
        minuteText: "Minutes",
        secText: "Secondes",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Ann\u00e9e",
        nowText: "Maintenant",
        dateText: "Date",
        timeText: "Heure",
        calendarText: "Calendrier",
        wholeText: "Entier",
        fractionText: "Fraction",
        unitText: "Unit\u00e9",
        labels: "Ans,Mois,Jours,Heures,Minutes,Secondes,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Ind\u00edt",
        stopText: "Meg\u00e1ll\u00edt",
        resetText: "Vissza\u00e1ll\u00edt",
        lapText: "Lap",
        hideText: "Elrejt"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.it = b.extend(b.mobiscroll.i18n.it, {
        setText: "OK",
        cancelText: "Annulla",
        dateFormat: "dd-mm-yyyy",
        dateOrder: "ddmmyy",
        dayNames: "Domenica,Luned&Igrave;,Merted&Igrave;,Mercoled&Igrave;,Gioved&Igrave;,Venerd&Igrave;,Sabato".split(","),
        dayNamesShort: "Do,Lu,Ma,Me,Gi,Ve,Sa".split(","),
        dayText: "Giorno",
        hourText: "Ore",
        minuteText: "Minuti",
        monthNames: "Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre".split(","),
        monthNamesShort: "Gen,Feb,Mar,Apr,Mag,Giu,Lug,Ago,Set,Ott,Nov,Dic".split(","),
        monthText: "Mese",
        secText: "Secondi",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Anno",
        dateText: "Data",
        timeText: "Volta",
        calendarText: "Calendario",
        wholeText: "Intero",
        fractionText: "Frazione",
        unitText: "Unit\u00e0",
        labels: "Anni,Mesi,Giorni,Ore,Minuti,Secondi,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Inizio",
        stopText: "Arresto",
        resetText: "Ripristina",
        lapText: "Lap",
        hideText: "Nascondi"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.no = b.extend(b.mobiscroll.i18n.no, {
        setText: "OK",
        cancelText: "Avbryt",
        dateFormat: "dd.mm.yy",
        dateOrder: "ddmmyy",
        dayNames: "S\u00f8ndag,Mandag,Tirsdag,Onsdag,Torsdag,Fredag,L\u00f8rdag".split(","),
        dayNamesShort: "S\u00f8,Ma,Ti,On,To,Fr,L\u00f8".split(","),
        dayText: "Dag",
        hourText: "Time",
        minuteText: "Minutt",
        monthNames: "Januar,Februar,Mars,April,Mai,Juni,Juli,August,September,Oktober,November,Desember".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Des".split(","),
        monthText: "M\u00e5ned",
        secText: "Sekund",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "\u00c5r",
        nowText: "N\u00e5",
        dateText: "Dato",
        timeText: "Tid",
        calendarText: "Kalender",
        wholeText: "Hele",
        fractionText: "Fraksjon",
        unitText: "Enhet",
        labels: "\u00c5r,M\u00e5neder,Dager,Timer,Minutter,Sekunder,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stopp",
        resetText: "Tilbakestille",
        lapText: "Runde",
        hideText: "Skjul"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n["pt-BR"] = b.extend(b.mobiscroll.i18n["pt-BR"], {
        setText: "Selecionar",
        cancelText: "Cancelar",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddMMyy",
        dayNames: "Domingo,Segunda-feira,Ter\u00e7a-feira,Quarta-feira,Quinta-feira,Sexta-feira,S\u00e1bado".split(","),
        dayNamesShort: "Dom,Seg,Ter,Qua,Qui,Sex,S\u00e1b".split(","),
        dayText: "Dia",
        hourText: "Hora",
        minuteText: "Minutos",
        monthNames: "Janeiro,Fevereiro,Mar\u00e7o,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro".split(","),
        monthNamesShort: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez".split(","),
        monthText: "M\u00eas",
        secText: "Segundo",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "Ano",
        dateText: "Data",
        timeText: "Tempo",
        calendarText: "Calend\u00e1rio",
        wholeText: "Inteiro",
        fractionText: "Fra\u00e7\u00e3o",
        unitText: "Unidade",
        labels: "Anos,Meses,Dias,Horas,Minutos,Segundos,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Come\u00e7ar",
        stopText: "Pare",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.zh = b.extend(b.mobiscroll.i18n.zh, {
        setText: "\u786e\u5b9a",
        cancelText: "\u53d6\u6d88",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddmmyy",
        dayNames: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","),
        dayNamesShort: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayText: "\u65e5",
        hourText: "\u65f6",
        minuteText: "\u5206",
        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d,\u5341,\u5341\u4e00,\u5341\u4e8c".split(","),
        monthText: "\u6708",
        secText: "\u79d2",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "\u5e74",
        nowText: "\u5f53\u524d",
        dateText: "\u65e5",
        timeText: "\u65f6\u95f4",
        calendarText: "\u65e5\u5386",
        wholeText: "Whole",
        fractionText: "Fraction",
        unitText: "Unit",
        labels: "Years,Months,Days,Hours,Minutes,Seconds,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.nl = b.extend(b.mobiscroll.i18n.nl, {
        setText: "Instellen",
        cancelText: "Annuleer",
        dateFormat: "dd/mm/yy",
        dateOrder: "ddmmyy",
        dayNames: "zondag,maandag,Dinsdag,Woensdag,Donderdag,Vrijdag,Zaterdag".split(","),
        dayNamesShort: "zo,ma,di,wo,do,vr,za".split(","),
        dayText: "Dag",
        hourText: "Uur",
        minuteText: "Minuten",
        monthNames: "januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","),
        monthNamesShort: "jan,feb,mrt,apr,mei,jun,jul,aug,sep,okt,nov,dec".split(","),
        monthText: "Maand",
        secText: "Seconden",
        timeFormat: "hh:ii A",
        timeWheels: "hhiiA",
        yearText: "Jaar",
        nowText: "Nu",
        dateText: "Datum",
        timeText: "Tijd",
        calendarText: "Kalender",
        wholeText: "geheel",
        fractionText: "fractie",
        unitText: "eenheid",
        labels: "Jaren,Maanden,Dagen,Uren,Minuten,Seconden,".split(","),
        labelsShort: "j,m,d,u,min,sec,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Verbergen"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.tr = b.extend(b.mobiscroll.i18n.tr, {
        setText: "Se\u00e7",
        cancelText: "\u0130ptal",
        dateFormat: "dd.mm.yy",
        dateOrder: "ddmmyy",
        dayNames: "Pazar,Pazartesi,Sal\u0131,\u00c7ar\u015famba,Per\u015fembe,Cuma,Cumartesi".split(","),
        dayNamesShort: "Paz,Pzt,Sal,\u00c7ar,Per,Cum,Cmt".split(","),
        dayText: "G\u00fcn",
        hourText: "Saat",
        minuteText: "Dakika",
        monthNames: "Ocak,\u015eubat,Mart,Nisan,May\u0131s,Haziran,Temmuz,A\u011fustos,Eyl\u00fcl,Ekim,Kas\u0131m,Aral\u0131k".split(","),
        monthNamesShort: "Oca,\u015eub,Mar,Nis,May,Haz,Tem,A\u011fu,Eyl,Eki,Kas,Ara".split(","),
        monthText: "Ay",
        secText: "Saniye",
        timeFormat: "hh:ii A",
        timeWheels: "hhiiA",
        yearText: "Y\u0131l",
        nowText: "\u015eimdi",
        dateText: "Tarih",
        timeText: "Zaman",
        calendarText: "Takvim",
        wholeText: "Tam",
        fractionText: "Kesir",
        unitText: "Birim",
        labels: "Y\u0131l,Ay,G\u00fcn,Saat,Dakika,Saniye,".split(","),
        labelsShort: "Y\u0131l,Ay,G\u00fcn,Sa,Dak,Sn,".split(","),
        startText: "Ba\u015fla",
        stopText: "Durdur",
        resetText: "S\u0131f\u0131rla",
        lapText: "Tur",
        hideText: "Gizle"
    })
})(jQuery);
(function(b) {
    b.mobiscroll.i18n.ja = b.extend(b.mobiscroll.i18n.ja, {
        setText: "\u30bb\u30c3\u30c8",
        cancelText: "\u30ad\u30e3\u30f3\u30bb\u30eb",
        dateFormat: "yy\u5e74mm\u6708dd\u65e5",
        dateOrder: "yymmdd",
        dayNames: "\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","),
        dayNamesShort: "\u65e5,\u6708,\u706b,\u6c34,\u6728,\u91d1,\u571f".split(","),
        dayText: "\u65e5",
        hourText: "\u6642",
        minuteText: "\u5206",
        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthText: "\u6708",
        secText: "\u79d2",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "\u5e74",
        nowText: "\u4eca",
        dateText: "\u65e5\u4ed8",
        timeText: "\u6642\u9593",
        calendarText: "\u30ab\u30ec\u30f3\u30c0\u30fc",
        wholeText: "\u5168\u6570",
        fractionText: "\u5206\u6570",
        unitText: "\u5358\u4f4d",
        labels: "\u5e74\u9593,\u6708\u9593,\u65e5\u9593,\u6642\u9593,\u5206,\u79d2,".split(","),
        labelsShort: "\u5e74\u9593,\u6708\u9593,\u65e5\u9593,\u6642\u9593,\u5206,\u79d2,".split(","),
        startText: "\u958b\u59cb",
        stopText: "\u505c\u6b62",
        resetText: "\u30ea\u30bb\u30c3\u30c8",
        lapText: "\u30e9\u30c3\u30d7",
        hideText: "\u96a0\u3059"
    })
})(jQuery);
(function(e) {
    var c = e.mobiscroll
      , g = new Date
      , f = {
        dateFormat: "mm/dd/yy",
        dateOrder: "mmddy",
        timeWheels: "hhiiA",
        timeFormat: "hh:ii A",
        startYear: g.getFullYear() - 100,
        endYear: g.getFullYear() + 1,
        monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
        monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
        dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
        dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
        shortYearCutoff: "+10",
        monthText: "Month",
        dayText: "Day",
        yearText: "Year",
        hourText: "Hours",
        minuteText: "Minutes",
        secText: "Seconds",
        ampmText: "&nbsp;",
        nowText: "Now",
        showNow: !1,
        stepHour: 1,
        stepMinute: 1,
        stepSecond: 1,
        separator: " "
    }
      , b = function(ad) {
        function U(h, i, d) {
            return void 0 !== G[i] ? +h[G[i]] : void 0 !== d ? d : a[Q[i]] ? a[Q[i]]() : Q[i](a)
        }
        function ac(h, j, d, i) {
            h.push({
                values: d,
                keys: j,
                label: i
            })
        }
        function X(d, h) {
            return Math.floor(d / h) * h
        }
        function L(d) {
            var h = U(d, "h", 0);
            return new Date(U(d, "y"),U(d, "m"),U(d, "d", 1),U(d, "a") ? h + 12 : h,U(d, "i", 0),U(d, "s", 0))
        }
        var M = e(this), T = {}, ab;
        if (M.is("input")) {
            switch (M.attr("type")) {
            case "date":
                ab = "yy-mm-dd";
                break;
            case "datetime":
                ab = "yy-mm-ddTHH:ii:ssZ";
                break;
            case "datetime-local":
                ab = "yy-mm-ddTHH:ii:ss";
                break;
            case "month":
                ab = "yy-mm";
                T.dateOrder = "mmyy";
                break;
            case "time":
                ab = "HH:ii:ss"
            }
            var R = M.attr("min")
              , M = M.attr("max");
            R && (T.minDate = c.parseDate(ab, R));
            M && (T.maxDate = c.parseDate(ab, M))
        }
        var af, P, F, S, N, R = e.extend({}, ad.settings), Y = e.extend(ad.settings, f, T, R), O = 0, M = [], H = [], G = {}, Q = {
            y: "getFullYear",
            m: "getMonth",
            d: "getDate",
            h: function(d) {
                d = d.getHours();
                d = Z && 12 <= d ? d - 12 : d;
                return X(d, ag)
            },
            i: function(d) {
                return X(d.getMinutes(), V)
            },
            s: function(d) {
                return X(d.getSeconds(), m)
            },
            a: function(d) {
                return v && 11 < d.getHours() ? 1 : 0
            }
        }, z = Y.preset, ae = Y.dateOrder, aa = Y.timeWheels, W = ae.match(/D/), v = aa.match(/a/i), Z = aa.match(/h/), n = "datetime" == z ? Y.dateFormat + Y.separator + Y.timeFormat : "time" == z ? Y.timeFormat : Y.dateFormat, a = new Date, ag = Y.stepHour, V = Y.stepMinute, m = Y.stepSecond, p = Y.minDate || new Date(Y.startYear,0,1), I = Y.maxDate || new Date(Y.endYear,11,31,23,59,59);
        ab = ab || n;
        if (z.match(/date/i)) {
            e.each(["y", "m", "d"], function(d, h) {
                af = ae.search(RegExp(h, "i"));
                -1 < af && H.push({
                    o: af,
                    v: h
                })
            });
            H.sort(function(d, h) {
                return d.o > h.o ? 1 : -1
            });
            e.each(H, function(d, h) {
                G[h.v] = d
            });
            R = [];
            for (T = 0; 3 > T; T++) {
                if (T == G.y) {
                    O++;
                    F = [];
                    P = [];
                    S = p.getFullYear();
                    N = I.getFullYear();
                    for (af = S; af <= N; af++) {
                        P.push(af),
                        F.push(ae.match(/yy/i) ? af : (af + "").substr(2, 2))
                    }
                    ac(R, P, F, Y.yearText)
                } else {
                    if (T == G.m) {
                        O++;
                        F = [];
                        P = [];
                        for (af = 0; 12 > af; af++) {
                            S = ae.replace(/[dy]/gi, "").replace(/mm/, 9 > af ? "0" + (af + 1) : af + 1).replace(/m/, af + 1),
                            P.push(af),
                            F.push(S.match(/MM/) ? S.replace(/MM/, '<span class="dw-mon">' + Y.monthNames[af] + "</span>") : S.replace(/M/, '<span class="dw-mon">' + Y.monthNamesShort[af] + "</span>"))
                        }
                        ac(R, P, F, Y.monthText)
                    } else {
                        if (T == G.d) {
                            O++;
                            F = [];
                            P = [];
                            for (af = 1; 32 > af; af++) {
                                P.push(af),
                                F.push(ae.match(/dd/i) && 10 > af ? "0" + af : af)
                            }
                            ac(R, P, F, Y.dayText)
                        }
                    }
                }
            }
            M.push(R)
        }
        if (z.match(/time/i)) {
            H = [];
            e.each(["h", "i", "s", "a"], function(d, h) {
                d = aa.search(RegExp(h, "i"));
                -1 < d && H.push({
                    o: d,
                    v: h
                })
            });
            H.sort(function(d, h) {
                return d.o > h.o ? 1 : -1
            });
            e.each(H, function(d, h) {
                G[h.v] = O + d
            });
            R = [];
            for (T = O; T < O + 4; T++) {
                if (T == G.h) {
                    O++;
                    F = [];
                    P = [];
                    for (af = 0; af < (Z ? 12 : 24); af += ag) {
                        P.push(af),
                        F.push(Z && 0 == af ? 12 : aa.match(/hh/i) && 10 > af ? "0" + af : af)
                    }
                    ac(R, P, F, Y.hourText)
                } else {
                    if (T == G.i) {
                        O++;
                        F = [];
                        P = [];
                        for (af = 0; 60 > af; af += V) {
                            P.push(af),
                            F.push(aa.match(/ii/) && 10 > af ? "0" + af : af)
                        }
                        ac(R, P, F, Y.minuteText)
                    } else {
                        if (T == G.s) {
                            O++;
                            F = [];
                            P = [];
                            for (af = 0; 60 > af; af += m) {
                                P.push(af),
                                F.push(aa.match(/ss/) && 10 > af ? "0" + af : af)
                            }
                            ac(R, P, F, Y.secText)
                        } else {
                            T == G.a && (O++,
                            P = aa.match(/A/),
                            ac(R, [0, 1], P ? ["AM", "PM"] : ["am", "pm"], Y.ampmText))
                        }
                    }
                }
            }
            M.push(R)
        }
        ad.setDate = function(h, l, d, j) {
            for (var i in G) {
                ad.temp[G[i]] = h[Q[i]] ? h[Q[i]]() : Q[i](h)
            }
            ad.setValue(ad.temp, l, d, j)
        }
        ;
        ad.getDate = function(d) {
            return L(d ? ad.temp : ad.values)
        }
        ;
        return {
            button3Text: Y.showNow ? Y.nowText : void 0,
            button3: Y.showNow ? function() {
                ad.setDate(new Date, !1, 0.3, !0)
            }
            : void 0,
            wheels: M,
            headerText: function() {
                return c.formatDate(n, L(ad.temp), Y)
            },
            formatResult: function(d) {
                return c.formatDate(ab, L(d), Y)
            },
            parseValue: function(h) {
                var l = new Date, d, j = [];
                try {
                    l = c.parseDate(ab, h, Y)
                } catch (i) {}
                for (d in G) {
                    j[G[d]] = l[Q[d]] ? l[Q[d]]() : Q[d](l)
                }
                return j
            },
            validate: function(d) {
                var h = ad.temp
                  , l = {
                    y: p.getFullYear(),
                    m: 0,
                    d: 1,
                    h: 0,
                    i: 0,
                    s: 0,
                    a: 0
                }
                  , j = {
                    y: I.getFullYear(),
                    m: 11,
                    d: 31,
                    h: X(Z ? 11 : 23, ag),
                    i: X(59, V),
                    s: X(59, m),
                    a: 1
                }
                  , i = !0
                  , k = !0;
                e.each("y,m,d,a,h,i,s".split(","), function(E, J) {
                    if (G[J] !== void 0) {
                        var C = l[J], o = j[J], D = 31, K = U(h, J), w = e(".dw-ul", d).eq(G[J]), aj, al;
                        if (J == "d") {
                            aj = U(h, "y");
                            al = U(h, "m");
                            o = D = 32 - (new Date(aj,al,32)).getDate();
                            W && e(".dw-li", w).each(function() {
                                var q = e(this)
                                  , s = q.data("val")
                                  , r = (new Date(aj,al,s)).getDay()
                                  , s = ae.replace(/[my]/gi, "").replace(/dd/, s < 10 ? "0" + s : s).replace(/d/, s);
                                e(".dw-i", q).html(s.match(/DD/) ? s.replace(/DD/, '<span class="dw-day">' + Y.dayNames[r] + "</span>") : s.replace(/D/, '<span class="dw-day">' + Y.dayNamesShort[r] + "</span>"))
                            })
                        }
                        i && p && (C = p[Q[J]] ? p[Q[J]]() : Q[J](p));
                        k && I && (o = I[Q[J]] ? I[Q[J]]() : Q[J](I));
                        if (J != "y") {
                            var y = e(".dw-li", w).index(e('.dw-li[data-val="' + C + '"]', w))
                              , ah = e(".dw-li", w).index(e('.dw-li[data-val="' + o + '"]', w));
                            e(".dw-li", w).removeClass("dw-v").slice(y, ah + 1).addClass("dw-v");
                            J == "d" && e(".dw-li", w).removeClass("dw-h").slice(D).addClass("dw-h")
                        }
                        K < C && (K = C);
                        K > o && (K = o);
                        i && (i = K == C);
                        k && (k = K == o);
                        if (Y.invalid && J == "d") {
                            var B = [];
                            Y.invalid.dates && e.each(Y.invalid.dates, function(q, r) {
                                r.getFullYear() == aj && r.getMonth() == al && B.push(r.getDate() - 1)
                            });
                            if (Y.invalid.daysOfWeek) {
                                var ak = (new Date(aj,al,1)).getDay(), ai;
                                e.each(Y.invalid.daysOfWeek, function(q, r) {
                                    for (ai = r - ak; ai < D; ai = ai + 7) {
                                        ai >= 0 && B.push(ai)
                                    }
                                })
                            }
                            Y.invalid.daysOfMonth && e.each(Y.invalid.daysOfMonth, function(q, r) {
                                r = (r + "").split("/");
                                r[1] ? r[0] - 1 == al && B.push(r[1] - 1) : B.push(r[0] - 1)
                            });
                            e.each(B, function(r, q) {
                                e(".dw-li", w).eq(q).removeClass("dw-v")
                            })
                        }
                        h[G[J]] = K
                    }
                })
            }
        }
    };
    e.each(["date", "time", "datetime"], function(h, i) {
        c.presets[i] = b;
        c.presetShort(i)
    });
    c.formatDate = function(p, i, n) {
        if (!i) {
            return null
        }
        var n = e.extend({}, f, n), k = function(j) {
            for (var d = 0; h + 1 < p.length && p.charAt(h + 1) == j; ) {
                d++,
                h++
            }
            return d
        }, u = function(l, j, o) {
            j = "" + j;
            if (k(l)) {
                for (; j.length < o; ) {
                    j = "0" + j
                }
            }
            return j
        }, v = function(l, j, q, o) {
            return k(l) ? o[j] : q[j]
        }, h, m = "", a = !1;
        for (h = 0; h < p.length; h++) {
            if (a) {
                "'" == p.charAt(h) && !k("'") ? a = !1 : m += p.charAt(h)
            } else {
                switch (p.charAt(h)) {
                case "d":
                    m += u("d", i.getDate(), 2);
                    break;
                case "D":
                    m += v("D", i.getDay(), n.dayNamesShort, n.dayNames);
                    break;
                case "o":
                    m += u("o", (i.getTime() - (new Date(i.getFullYear(),0,0)).getTime()) / 86400000, 3);
                    break;
                case "m":
                    m += u("m", i.getMonth() + 1, 2);
                    break;
                case "M":
                    m += v("M", i.getMonth(), n.monthNamesShort, n.monthNames);
                    break;
                case "y":
                    m += k("y") ? i.getFullYear() : (10 > i.getYear() % 100 ? "0" : "") + i.getYear() % 100;
                    break;
                case "h":
                    var r = i.getHours()
                      , m = m + u("h", 12 < r ? r - 12 : 0 == r ? 12 : r, 2);
                    break;
                case "H":
                    m += u("H", i.getHours(), 2);
                    break;
                case "i":
                    m += u("i", i.getMinutes(), 2);
                    break;
                case "s":
                    m += u("s", i.getSeconds(), 2);
                    break;
                case "a":
                    m += 11 < i.getHours() ? "pm" : "am";
                    break;
                case "A":
                    m += 11 < i.getHours() ? "PM" : "AM";
                    break;
                case "'":
                    k("'") ? m += "'" : a = !0;
                    break;
                default:
                    m += p.charAt(h)
                }
            }
        }
        return m
    }
    ;
    c.parseDate = function(K, F, J) {
        var G = new Date;
        if (!K || !F) {
            return G
        }
        var F = "object" == typeof F ? F.toString() : F + "", k = e.extend({}, f, J), n = k.shortYearCutoff, J = G.getFullYear(), B = G.getMonth() + 1, I = G.getDate(), y = -1, L = G.getHours(), G = G.getMinutes(), x = 0, E = -1, z = !1, p = function(d) {
            (d = a + 1 < K.length && K.charAt(a + 1) == d) && a++;
            return d
        }, H = function(d) {
            p(d);
            d = F.substr(h).match(RegExp("^\\d{1," + ("@" == d ? 14 : "!" == d ? 20 : "y" == d ? 4 : "o" == d ? 3 : 2) + "}"));
            if (!d) {
                return 0
            }
            h += d[0].length;
            return parseInt(d[0], 10)
        }, v = function(i, d, j) {
            i = p(i) ? j : d;
            for (d = 0; d < i.length; d++) {
                if (F.substr(h, i[d].length).toLowerCase() == i[d].toLowerCase()) {
                    return h += i[d].length,
                    d + 1
                }
            }
            return 0
        }, h = 0, a;
        for (a = 0; a < K.length; a++) {
            if (z) {
                "'" == K.charAt(a) && !p("'") ? z = !1 : h++
            } else {
                switch (K.charAt(a)) {
                case "d":
                    I = H("d");
                    break;
                case "D":
                    v("D", k.dayNamesShort, k.dayNames);
                    break;
                case "o":
                    y = H("o");
                    break;
                case "m":
                    B = H("m");
                    break;
                case "M":
                    B = v("M", k.monthNamesShort, k.monthNames);
                    break;
                case "y":
                    J = H("y");
                    break;
                case "H":
                    L = H("H");
                    break;
                case "h":
                    L = H("h");
                    break;
                case "i":
                    G = H("i");
                    break;
                case "s":
                    x = H("s");
                    break;
                case "a":
                    E = v("a", ["am", "pm"], ["am", "pm"]) - 1;
                    break;
                case "A":
                    E = v("A", ["am", "pm"], ["am", "pm"]) - 1;
                    break;
                case "'":
                    p("'") ? h++ : z = !0;
                    break;
                default:
                    h++
                }
            }
        }
        100 > J && (J += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (J <= ("string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10)) ? 0 : -100));
        if (-1 < y) {
            B = 1;
            I = y;
            do {
                k = 32 - (new Date(J,B - 1,32)).getDate();
                if (I <= k) {
                    break
                }
                B++;
                I -= k
            } while (1)
        }
        L = new Date(J,B - 1,I,-1 == E ? L : E && 12 > L ? L + 12 : !E && 12 == L ? 0 : L,G,x);
        if (L.getFullYear() != J || L.getMonth() + 1 != B || L.getDate() != I) {
            throw "Invalid date"
        }
        return L
    }
})(jQuery);
(function(c) {
    var b = c.mobiscroll
      , f = {
        invalid: [],
        showInput: !0,
        inputClass: ""
    }
      , e = function(I) {
        function d(r, i, j, q) {
            for (var l = 0; l < i; ) {
                var o = c(".dwwl" + l, r)
                  , m = K(q, l, j);
                c.each(m, function(t, s) {
                    c('.dw-li[data-val="' + s + '"]', o).removeClass("dw-v")
                });
                l++
            }
        }
        function K(j, i, l) {
            for (var r = 0, m, q = []; r < i; ) {
                var o = j[r];
                for (m in l) {
                    if (l[m].key == o) {
                        l = l[m].children;
                        break
                    }
                }
                r++
            }
            for (r = 0; r < l.length; ) {
                l[r].invalid && q.push(l[r].key),
                r++
            }
            return q
        }
        function O(j, i) {
            for (var l = []; j; ) {
                l[--j] = !0
            }
            l[i] = !1;
            return l
        }
        function L(C, B, r) {
            var z = 0, u, x, w = [], t = n;
            if (B) {
                for (u = 0; u < B; u++) {
                    w[u] = [{}]
                }
            }
            for (; z < C.length; ) {
                u = w;
                for (var B = z, s = t, o = {
                    keys: [],
                    values: [],
                    label: k[z]
                }, q = 0; q < s.length; ) {
                    o.values.push(s[q].value),
                    o.keys.push(s[q].key),
                    q++
                }
                u[B] = [o];
                u = 0;
                for (B = void 0; u < t.length && void 0 === B; ) {
                    if (t[u].key == C[z] && (void 0 !== r && z <= r || void 0 === r)) {
                        B = u
                    }
                    u++
                }
                if (void 0 !== B && t[B].children) {
                    z++,
                    t = t[B].children
                } else {
                    if ((x = p(t)) && x.children) {
                        z++,
                        t = x.children
                    } else {
                        break
                    }
                }
            }
            return w
        }
        function p(j, i) {
            if (!j) {
                return !1
            }
            for (var m = 0, l; m < j.length; ) {
                if (!(l = j[m++]).invalid) {
                    return i ? m - 1 : l
                }
            }
            return !1
        }
        function v(j, i) {
            c(".dwc", j).css("display", "").slice(i).hide()
        }
        function H(m, l) {
            var u = [], t = n, r = 0, s = !1, q, o;
            if (void 0 !== m[r] && r <= l) {
                s = 0;
                q = m[r];
                for (o = void 0; s < t.length && void 0 === o; ) {
                    t[s].key == m[r] && !t[s].invalid && (o = s),
                    s++
                }
            } else {
                o = p(t, !0),
                q = t[o].key
            }
            s = void 0 !== o ? t[o].children : !1;
            for (u[r] = q; s; ) {
                t = t[o].children;
                r++;
                if (void 0 !== m[r] && r <= l) {
                    s = 0;
                    q = m[r];
                    for (o = void 0; s < t.length && void 0 === o; ) {
                        t[s].key == m[r] && !t[s].invalid && (o = s),
                        s++
                    }
                } else {
                    o = p(t, !0),
                    o = !1 === o ? void 0 : o,
                    q = t[o].key
                }
                s = void 0 !== o && p(t[o].children) ? t[o].children : !1;
                u[r] = q
            }
            return {
                lvl: r + 1,
                nVector: u
            }
        }
        function N(j) {
            var i = [];
            y = y > M++ ? y : M;
            j.children("li").each(function(q) {
                var o = c(this)
                  , m = o.clone();
                m.children("ul,ol").remove();
                var m = m.html().replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                  , l = o.data("invalid") ? !0 : !1
                  , q = {
                    key: o.data("val") || q,
                    value: m,
                    invalid: l,
                    children: null
                }
                  , o = o.children("ul,ol");
                o.length && (q.children = N(o));
                i.push(q)
            });
            M--;
            return i
        }
        var G = c.extend({}, I.settings), P = c.extend(I.settings, f, G), G = c(this), E, h, a = this.id + "_dummy", y = 0, M = 0, A = {}, n = P.wheelArray || N(G), k = function(i) {
            var l = [], j;
            for (j = 0; j < i; j++) {
                l[j] = P.labels && P.labels[j] ? P.labels[j] : j
            }
            return l
        }(y), F = [], g = function(j) {
            for (var i = [], o, m = !0, l = 0; m; ) {
                if (o = p(j),
                i[l++] = o.key,
                m = o.children) {
                    j = o.children
                }
            }
            return i
        }(n), g = L(g, y);
        c("#" + a).remove();
        P.showInput && (E = c('<input type="text" id="' + a + '" value="" class="' + P.inputClass + '" readonly />').insertBefore(G),
        I.settings.anchor = E,
        P.showOnFocus && E.focus(function() {
            I.show()
        }),
        P.showOnTap && I.tap(E, function() {
            I.show()
        }));
        P.wheelArray || G.hide().closest(".ui-field-contain").trigger("create");
        return {
            width: 50,
            wheels: g,
            headerText: !1,
            onBeforeShow: function() {
                var i = I.temp;
                F = i.slice(0);
                I.settings.wheels = L(i, y, y);
                h = true
            },
            onSelect: function(i) {
                E && E.val(i)
            },
            onChange: function(i) {
                E && P.display == "inline" && E.val(i)
            },
            onClose: function() {
                E && E.blur()
            },
            onShow: function(i) {
                c(".dwwl", i).on("mousedown touchstart", function() {
                    clearTimeout(A[c(".dwwl", i).index(this)])
                })
            },
            validate: function(o, j, t) {
                var s = I.temp;
                if (j !== void 0 && F[j] != s[j] || j === void 0 && !h) {
                    I.settings.wheels = L(s, null, j);
                    var r = []
                      , q = (j || 0) + 1
                      , m = H(s, j);
                    if (j !== void 0) {
                        I.temp = m.nVector.slice(0)
                    }
                    for (; q < m.lvl; ) {
                        r.push(q++)
                    }
                    v(o, m.lvl);
                    F = I.temp.slice(0);
                    if (r.length) {
                        h = true;
                        I.settings.readonly = O(y, j);
                        clearTimeout(A[j]);
                        A[j] = setTimeout(function() {
                            I.changeWheel(r);
                            I.settings.readonly = false
                        }, t * 1000);
                        return false
                    }
                    d(o, m.lvl, n, I.temp)
                } else {
                    m = H(s, s.length);
                    d(o, m.lvl, n, s);
                    v(o, m.lvl)
                }
                h = false
            }
        }
    };
    c.each(["list", "image", "treelist"], function(g, h) {
        b.presets[h] = e;
        b.presetShort(h)
    })
})(jQuery);
(function(c) {
    var b = {
        inputClass: "",
        invalid: [],
        rtl: !1,
        group: !1,
        groupLabel: "Groups"
    };
    c.mobiscroll.presetShort("select");
    c.mobiscroll.presets.select = function(T) {
        function g() {
            var o, e = 0, l = [], j = [], i = [[]];
            S.group ? (S.rtl && (e = 1),
            c("optgroup", O).each(function(d) {
                l.push(c(this).attr("label"));
                j.push(d)
            }),
            i[e] = [{
                values: l,
                keys: j,
                label: S.groupLabel
            }],
            o = M,
            e += S.rtl ? -1 : 1) : o = O;
            l = [];
            j = [];
            c("option", o).each(function() {
                var d = c(this).attr("value");
                l.push(c(this).text());
                j.push(d);
                c(this).prop("disabled") && a.push(d)
            });
            i[e] = [{
                values: l,
                keys: j,
                label: k
            }];
            return i
        }
        function L(i, q) {
            var o = [];
            if (v) {
                var d = []
                  , j = 0;
                for (j in T._selectedValues) {
                    d.push(P[j]),
                    o.push(j)
                }
                I.val(d.join(", "))
            } else {
                I.val(i),
                o = q ? T.values[n] : null
            }
            q && (U = !0,
            O.val(o).trigger("change"))
        }
        function p(e) {
            if (v && e.hasClass("dw-v") && e.closest(".dw").find(".dw-ul").index(e.closest(".dw-ul")) == n) {
                var d = e.attr("data-val");
                e.hasClass("dw-msel") ? (e.removeClass("dw-msel").removeAttr("aria-selected"),
                delete T._selectedValues[d]) : (e.addClass("dw-msel").attr("aria-selected", "true"),
                T._selectedValues[d] = d);
                "inline" == S.display && L(d, !0);
                return !1
            }
        }
        var N = c.extend({}, T.settings), S = c.extend(T.settings, b, N), O = c(this), v = O.prop("multiple"), N = this.id + "_dummy", y = v ? O.val() ? O.val()[0] : c("option", O).attr("value") : O.val(), M = O.find('option[value="' + y + '"]').parent(), R = M.index() + "", K = R, U;
        c('label[for="' + this.id + '"]').attr("for", N);
        var H = c('label[for="' + N + '"]'), k = void 0 !== S.label ? S.label : H.length ? H.text() : O.attr("name"), a = [], E = [], P = {}, G, n, m, I, h = S.readonly;
        S.group && !c("optgroup", O).length && (S.group = !1);
        S.invalid.length || (S.invalid = a);
        S.group ? S.rtl ? (G = 1,
        n = 0) : (G = 0,
        n = 1) : (G = -1,
        n = 0);
        c("#" + N).remove();
        I = c('<input type="text" id="' + N + '" class="' + S.inputClass + '" readonly />').insertBefore(O);
        c("option", O).each(function() {
            P[c(this).attr("value")] = c(this).text()
        });
        S.showOnFocus && I.focus(function() {
            T.show()
        });
        S.showOnTap && T.tap(I, function() {
            T.show()
        });
        N = O.val() || [];
        H = 0;
        for (H; H < N.length; H++) {
            T._selectedValues[N[H]] = N[H]
        }
        L(P[y]);
        O.off(".dwsel").on("change.dwsel", function() {
            U || T.setValue(v ? O.val() || [] : [O.val()], true);
            U = false
        }).hide().closest(".ui-field-contain").trigger("create");
        T._setValue || (T._setValue = T.setValue);
        T.setValue = function(o, e, i, f, j) {
            var d = c.isArray(o) ? o[0] : o;
            y = d !== void 0 ? d : c("option", O).attr("value");
            if (v) {
                T._selectedValues = {};
                d = 0;
                for (d; d < o.length; d++) {
                    T._selectedValues[o[d]] = o[d]
                }
            }
            if (S.group) {
                M = O.find('option[value="' + y + '"]').parent();
                K = M.index();
                o = S.rtl ? [y, M.index()] : [M.index(), y];
                if (K !== R) {
                    S.wheels = g();
                    T.changeWheel([n]);
                    R = K + ""
                }
            } else {
                o = [y]
            }
            T._setValue(o, e, i, f, j);
            if (e) {
                e = v ? true : y !== O.val();
                L(P[y], e)
            }
        }
        ;
        T.getValue = function(d) {
            return (d ? T.temp : T.values)[n]
        }
        ;
        return {
            width: 50,
            wheels: void 0,
            headerText: !1,
            multiple: v,
            anchor: I,
            formatResult: function(d) {
                return P[d[n]]
            },
            parseValue: function() {
                var d = O.val() || []
                  , e = 0;
                if (v) {
                    T._selectedValues = {};
                    for (e; e < d.length; e++) {
                        T._selectedValues[d[e]] = d[e]
                    }
                }
                y = v ? O.val() ? O.val()[0] : c("option", O).attr("value") : O.val();
                M = O.find('option[value="' + y + '"]').parent();
                K = M.index();
                R = K + "";
                return S.group && S.rtl ? [y, K] : S.group ? [K, y] : [y]
            },
            validate: function(e, q, j) {
                if (q === void 0 && v) {
                    var f = T._selectedValues
                      , o = 0;
                    c(".dwwl" + n + " .dw-li", e).removeClass("dw-msel").removeAttr("aria-selected");
                    for (o in f) {
                        c(".dwwl" + n + ' .dw-li[data-val="' + f[o] + '"]', e).addClass("dw-msel").attr("aria-selected", "true")
                    }
                }
                if (q === G) {
                    K = T.temp[G];
                    if (K !== R) {
                        M = O.find("optgroup").eq(K);
                        K = M.index();
                        y = (y = M.find("option").eq(0).val()) || O.val();
                        S.wheels = g();
                        if (S.group) {
                            T.temp = S.rtl ? [y, K] : [K, y];
                            S.readonly = [S.rtl, !S.rtl];
                            clearTimeout(m);
                            m = setTimeout(function() {
                                T.changeWheel([n]);
                                S.readonly = h;
                                R = K + ""
                            }, j * 1000);
                            return false
                        }
                    } else {
                        S.readonly = h
                    }
                } else {
                    y = T.temp[n]
                }
                var d = c(".dw-ul", e).eq(n);
                c.each(S.invalid, function(i, l) {
                    c('.dw-li[data-val="' + l + '"]', d).removeClass("dw-v")
                })
            },
            onBeforeShow: function() {
                S.wheels = g();
                if (S.group) {
                    T.temp = S.rtl ? [y, M.index()] : [M.index(), y]
                }
            },
            onMarkupReady: function(d) {
                c(".dwwl" + G, d).on("mousedown touchstart", function() {
                    clearTimeout(m)
                });
                if (v) {
                    d.addClass("dwms");
                    c(".dwwl", d).eq(n).addClass("dwwms").attr("aria-multiselectable", "true");
                    c(".dwwl", d).on("keydown", function(e) {
                        if (e.keyCode == 32) {
                            e.preventDefault();
                            e.stopPropagation();
                            p(c(".dw-sel", this))
                        }
                    });
                    E = {};
                    for (var f in T._selectedValues) {
                        E[f] = T._selectedValues[f]
                    }
                }
            },
            onValueTap: p,
            onSelect: function(d) {
                L(d, true);
                if (S.group) {
                    T.values = null
                }
            },
            onCancel: function() {
                if (S.group) {
                    T.values = null
                }
                if (v) {
                    T._selectedValues = {};
                    for (var d in E) {
                        T._selectedValues[d] = E[d]
                    }
                }
            },
            onChange: function(d) {
                if (S.display == "inline" && !v) {
                    I.val(d);
                    U = true;
                    O.val(T.temp[n]).trigger("change")
                }
            },
            onClose: function() {
                I.blur()
            }
        }
    }
})(jQuery);
(function(b) {
    b.mobiscroll.themes.android = {
        defaults: {
            dateOrder: "Mddyy",
            mode: "clickpick",
            height: 50,
            showLabel: !1
        }
    }
})(jQuery);
(function(c) {
    var b = {
        defaults: {
            dateOrder: "Mddyy",
            mode: "mixed",
            rows: 5,
            width: 70,
            height: 36,
            showLabel: !1,
            useShortLabels: !0
        }
    };
    c.mobiscroll.themes["android-ics"] = b;
    c.mobiscroll.themes["android-ics light"] = b
})(jQuery);
(function(b) {
    b.mobiscroll.themes.ios = {
        defaults: {
            dateOrder: "MMdyy",
            rows: 5,
            height: 30,
            width: 55,
            headerText: !1,
            showLabel: !1,
            useShortLabels: !0
        }
    }
})(jQuery);
(function(b) {
    b.mobiscroll.themes.jqm = {
        defaults: {
            jqmBorder: "a",
            jqmBody: "c",
            jqmHeader: "b",
            jqmWheel: "d",
            jqmClickPick: "c",
            jqmSet: "b",
            jqmCancel: "c"
        },
        init: function(a, e) {
            var c = e.settings;
            b(".dw", a).removeClass("dwbg").addClass("ui-overlay-shadow ui-corner-all ui-body-" + c.jqmBorder);
            b(".dwb-s span", a).attr("data-role", "button").attr("data-theme", c.jqmSet);
            b(".dwb-n span", a).attr("data-role", "button").attr("data-theme", c.jqmCancel);
            b(".dwb-c span", a).attr("data-role", "button").attr("data-theme", c.jqmCancel);
            b(".dwwb", a).attr("data-role", "button").attr("data-theme", c.jqmClickPick);
            b(".dwv", a).addClass("ui-header ui-bar-" + c.jqmHeader);
            b(".dwwr", a).addClass("ui-body-" + c.jqmBody);
            b(".dwpm .dwwl", a).addClass("ui-body-" + c.jqmWheel);
            b(".dwpm .dwl", a).addClass("ui-body-" + c.jqmBody);
            a.trigger("create");
            b(".dwo", a).click(function() {
                e.cancel()
            })
        }
    }
})(jQuery);
(function(c) {
    var b;
    c.mobiscroll.themes.wp = {
        defaults: {
            width: 70,
            height: 76,
            accent: "none",
            dateOrder: "mmMMddDDyy",
            showLabel: !1,
            onAnimStart: function(f, e, a) {
                c(".dwwl" + e, f).addClass("wpam");
                clearTimeout(b[e]);
                b[e] = setTimeout(function() {
                    c(".dwwl" + e, f).removeClass("wpam")
                }, 1000 * a + 100)
            }
        },
        init: function(g, f) {
            var a, e;
            b = {};
            c(".dw", g).addClass("wp-" + f.settings.accent);
            c(".dwwl", g).on("touchstart mousedown DOMMouseScroll mousewheel", ".dw-sel", function() {
                a = !0;
                e = c(this).closest(".dwwl").hasClass("wpa");
                c(".dwwl", g).removeClass("wpa");
                c(this).closest(".dwwl").addClass("wpa")
            }).on("touchmove mousemove", function() {
                a = !1
            }).on("touchend mouseup", function() {
                a && e && c(this).closest(".dwwl").removeClass("wpa")
            })
        }
    };
    c.mobiscroll.themes["wp light"] = c.mobiscroll.themes.wp
})(jQuery);
