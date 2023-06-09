
! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return he.isFunction(t) ? he.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? he.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function (e) {
            return se.call(t, e) > -1 !== n
        }) : Te.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return he.each(e.match(Ne) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function u(e, t, n, i) {
        var r;
        try {
            e && he.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && he.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function f() {
        te.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), he.ready()
    }

    function d() {
        this.expando = he.expando + d.uid++
    }

    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : qe.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(He, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = p(n)
                } catch (e) { }
                Pe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function m(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return he.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            u = (he.cssNumber[t] || "px" !== c && +l) && Me.exec(he.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                o = o || ".5", u /= o, he.style(e, t, u + c)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function g(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Be[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = he.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Be[i] = r, r)
    }

    function v(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Le.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && We(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none", Le.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? he.merge([e], n) : n
    }

    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval"))
    }

    function w(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === he.type(o)) he.merge(d, o.nodeType ? [o] : o);
                else if (Ge.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), a = (Ve.exec(o) || ["", ""])[1].toLowerCase(), l = $e[a] || $e._default, s.innerHTML = l[1] + he.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                    he.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
                } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (i && he.inArray(o, i) > -1) r && r.push(o);
            else if (c = he.contains(o.ownerDocument, o), s = y(f.appendChild(o), "script"), c && b(s), n)
                for (u = 0; o = s[u++];) Qe.test(o.type || "") && n.push(o);
        return f
    }

    function _() {
        return !0
    }

    function E() {
        return !1
    }

    function x() {
        try {
            return te.activeElement
        } catch (e) { }
    }

    function T(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) T(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = E;
        else if (!r) return e;
        return 1 === o && (s = r, r = function (e) {
            return he().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = he.guid++)), e.each(function () {
            he.event.add(this, t, r, i, n)
        })
    }

    function C(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
    }

    function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function S(e) {
        var t = nt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function j(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Le.hasData(e) && (o = Le.access(e), s = Le.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; n < i; n++) he.event.add(t, r, c[r][n])
            }
            Pe.hasData(e) && (a = Pe.access(e), l = he.extend({}, a), Pe.set(t, l))
        }
    }

    function N(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function D(e, t, i, r) {
        t = re.apply([], t);
        var o, s, a, l, c, u, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            m = he.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !de.checkClone && tt.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            m && (t[0] = h.call(this, n, o.html())), D(o, t, i, r)
        });
        if (d && (o = w(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (l = (a = he.map(y(o, "script"), A)).length; f < d; f++) c = o, f !== p && (c = he.clone(c, !0, !0), l && he.merge(a, y(c, "script"))), i.call(e[f], c, f);
            if (l)
                for (u = a[a.length - 1].ownerDocument, he.map(a, S), f = 0; f < l; f++) c = a[f], Qe.test(c.type || "") && !Le.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(it, ""), u))
        }
        return e
    }

    function k(e, t, n) {
        for (var i, r = t ? he.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || he.cleanData(y(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function O(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || st(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !de.pixelMarginRight() && ot.test(s) && rt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function I(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function L(e) {
        if (e in dt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
            if ((e = ft[n] + t) in dt) return e
    }

    function P(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = L(e) || e), t
    }

    function q(e, t, n) {
        var i = Me.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function H(e, t, n, i, r) {
        var o, s = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += he.css(e, n + Fe[o], !0, r)), i ? ("content" === n && (s -= he.css(e, "padding" + Fe[o], !0, r)), "margin" !== n && (s -= he.css(e, "border" + Fe[o] + "Width", !0, r))) : (s += he.css(e, "padding" + Fe[o], !0, r), "padding" !== n && (s += he.css(e, "border" + Fe[o] + "Width", !0, r)));
        return s
    }

    function R(e, t, n) {
        var i, r = st(e),
            o = O(e, t, r),
            s = "border-box" === he.css(e, "boxSizing", !1, r);
        return ot.test(o) ? o : (i = s && (de.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + H(e, t, n || (s ? "border" : "content"), i, r) + "px")
    }

    function M(e, t, n, i, r) {
        return new M.prototype.init(e, t, n, i, r)
    }

    function F() {
        ht && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setTimeout(F, he.fx.interval), he.fx.tick())
    }

    function W() {
        return e.setTimeout(function () {
            pt = void 0
        }), pt = he.now()
    }

    function U(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Fe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function B(e, t, n) {
        for (var i, r = (V.tweeners[t] || []).concat(V.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function K(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = he.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = he.cssHooks[i]) && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function V(e, t, n) {
        var i, r, o = 0,
            s = V.prefilters.length,
            a = he.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = pt || W(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, {
                    specialEasing: {},
                    easing: he.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || W(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (K(u, c.opts.specialEasing); o < s; o++)
            if (i = V.prefilters[o].call(c, e, u, c.opts)) return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(u, B, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), he.fx.timer(he.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function Q(e) {
        return (e.match(Ne) || []).join(" ")
    }

    function $(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function G(e, t, n, i) {
        var r;
        if (Array.isArray(t)) he.each(t, function (t, r) {
            n || At.test(e) ? i(e, r) : G(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== he.type(t)) i(e, t);
        else
            for (r in t) G(e + "[" + r + "]", t[r], n, i)
    }

    function z(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (he.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Y(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, he.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            s = e === Rt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function X(e, t) {
        var n, i, r = he.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && he.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function Z(e, t, n, i) {
        var r, o, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
                    if (!(s = c[l + " " + o] || c["* " + o]))
                        for (r in c)
                            if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else try {
                            t = s(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + l + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        re = ee.concat,
        oe = ee.push,
        se = ee.indexOf,
        ae = {},
        le = ae.toString,
        ce = ae.hasOwnProperty,
        ue = ce.toString,
        fe = ue.call(Object),
        de = {},
        pe = "3.2.1",
        he = function (e, t) {
            return new he.fn.init(e, t)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ge = /^-ms-/,
        ve = /-([a-z])/g,
        ye = function (e, t) {
            return t.toUpperCase()
        };
    he.fn = he.prototype = {
        jquery: pe,
        constructor: he,
        length: 0,
        toArray: function () {
            return ie.call(this)
        },
        get: function (e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return he.each(this, e)
        },
        map: function (e) {
            return this.pushStack(he.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (he.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, he.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isFunction: function (e) {
            return "function" === he.type(e)
        },
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = he.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof (n = ce.call(t, "constructor") && t.constructor) || ue.call(n) !== fe))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            n(e)
        },
        camelCase: function (e) {
            return e.replace(ge, "ms-").replace(ve, ye)
        },
        each: function (e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function (e, t, n) {
            var r, o, s = 0,
                a = [];
            if (i(e))
                for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return re.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return i = ie.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(ie.call(arguments)))
            }, r.guid = e.guid = e.guid || he.guid++ , r
        },
        now: Date.now,
        support: de
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ae["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function (e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, d, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : M) !== k && D(t), t = t || k, I)) {
                if (11 !== h && (l = me.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (p && (s = p.getElementById(r)) && H(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(r)), n
                    }
                if (w.qsa && !K[e + " "] && (!L || !L.test(e))) {
                    if (1 !== h) p = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, we) : t.setAttribute("id", a = R), o = (u = T(e)).length; o--;) u[o] = "#" + a + " " + f(u[o]);
                        d = u.join(","), p = ge.test(e) && c(t.parentNode) || t
                    }
                    if (d) try {
                        return Y.apply(n, p.querySelectorAll(d)), n
                    } catch (e) { } finally {
                            a === R && t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(oe, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[R] = !0, e
        }

        function r(e) {
            var t = k.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function u() { }

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function d(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = W++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function (t, n, l) {
                var c, u, f, d = [F, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (f = t[R] || (t[R] = {}), u = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === F && c[1] === a) return d[2] = c[2];
                                if (u[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function m(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function g(e, t, n, r, o, s) {
            return r && !r[R] && (r = g(r)), o && !o[R] && (o = g(o, s)), i(function (i, s, a, l) {
                var c, u, f, d = [],
                    p = [],
                    g = s.length,
                    v = i || h(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : m(v, d, e, a, l),
                    b = n ? o || (i ? e : g || r) ? [] : s : y;
                if (n && n(y, b, a, l), r)
                    for (c = m(b, p), r(c, [], a, l), u = c.length; u--;)(f = c[u]) && (b[p[u]] = !(y[p[u]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(f = b[u]) && c.push(y[u] = f);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(f = b[u]) && (c = o ? J(i, f) : d[u]) > -1 && (i[c] = !(s[c] = f))
                    }
                } else b = m(b === s ? b.splice(g, b.length) : b), o ? o(null, s, b, l) : Y.apply(s, b)
            })
        }

        function v(e) {
            for (var t, n, i, r = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = d(function (e) {
                return e === t
            }, s, !0), c = d(function (e) {
                return J(t, e) > -1
            }, s, !0), u = [function (e, n, i) {
                var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, r
            }]; a < r; a++)
                if (n = _.relative[e[a].type]) u = [d(p(u), n)];
                else {
                    if ((n = _.filter[e[a].type].apply(null, e[a].matches))[R]) {
                        for (i = ++a; i < r && !_.relative[e[i].type]; i++);
                        return g(a > 1 && p(u), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                    }
                    u.push(n)
                }
            return p(u)
        }

        function y(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function (i, s, a, l, c) {
                    var u, f, d, p = 0,
                        h = "0",
                        g = i && [],
                        v = [],
                        y = S,
                        b = i || o && _.find.TAG("*", c),
                        w = F += null == y ? 1 : Math.random() || .1,
                        E = b.length;
                    for (c && (S = s === k || s || c); h !== E && null != (u = b[h]); h++) {
                        if (o && u) {
                            for (f = 0, s || u.ownerDocument === k || (D(u), a = !I); d = e[f++];)
                                if (d(u, s || k, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (F = w)
                        }
                        r && ((u = !d && u) && p-- , i && g.push(u))
                    }
                    if (p += h, r && h !== p) {
                        for (f = 0; d = n[f++];) d(g, v, s, a);
                        if (i) {
                            if (p > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = G.call(l));
                            v = m(v)
                        }
                        Y.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (F = w, S = y), g
                };
            return r ? i(s) : s
        }
        var b, w, _, E, x, T, C, A, S, j, N, D, k, O, I, L, P, q, H, R = "sizzle" + 1 * new Date,
            M = e.document,
            F = 0,
            W = 0,
            U = n(),
            B = n(),
            K = n(),
            V = function (e, t) {
                return e === t && (N = !0), 0
            },
            Q = {}.hasOwnProperty,
            $ = [],
            G = $.pop,
            z = $.push,
            Y = $.push,
            X = $.slice,
            J = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(ie),
            ue = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            we = function (e, t) {
                return t ? "\0" === e ? "?" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            _e = function () {
                D()
            },
            Ee = d(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                    dir: "parentNode",
                    next: "legend"
                });
        try {
            Y.apply($ = X.call(M.childNodes), M.childNodes), $[M.childNodes.length].nodeType
        } catch (e) {
            Y = {
                apply: $.length ? function (e, t) {
                    z.apply(e, X.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, x = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : M;
            return i !== k && 9 === i.nodeType && i.documentElement ? (k = i, O = k.documentElement, I = !x(k), M !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), w.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function (e) {
                return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = he.test(k.getElementsByClassName), w.getById = r(function (e) {
                return O.appendChild(e).id = R, !k.getElementsByName || !k.getElementsByName(R).length
            }), w.getById ? (_.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, _.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (_.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, _.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), _.find.TAG = w.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, _.find.CLASS = w.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && I) return t.getElementsByClassName(e)
            }, P = [], L = [], (w.qsa = he.test(k.querySelectorAll)) && (r(function (e) {
                O.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || L.push(".#.+[+~]")
            }), r(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = k.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (w.matchesSelector = he.test(q = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (e) {
                w.disconnectedMatch = q.call(e, "*"), q.call(e, "[s!='']:x"), P.push("!=", ie)
            }), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), t = he.test(O.compareDocumentPosition), H = t || he.test(O.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function (e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === M && H(M, e) ? -1 : t === k || t.ownerDocument === M && H(M, t) ? 1 : j ? J(j, e) - J(j, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return N = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !o) return e === k ? -1 : t === k ? 1 : r ? -1 : o ? 1 : j ? J(j, e) - J(j, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === M ? -1 : l[i] === M ? 1 : 0
            }, k) : k
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== k && D(e), n = n.replace(le, "='$1']"), w.matchesSelector && I && !K[n + " "] && (!P || !P.test(n)) && (!L || !L.test(n))) try {
                var i = q.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) { }
            return t(n, k, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== k && D(e), H(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== k && D(e);
            var n = _.attrHandle[t.toLowerCase()],
                i = n && Q.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : w.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function (e) {
            return (e + "").replace(be, we)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (N = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(V), N) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return j = null, e
        }, E = t.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += E(t);
            return n
        }, (_ = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = U[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && U(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, f, d, p, h, m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (b = (p = (c = (u = (f = (d = g)[R] || (d[R] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === F && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        u[e] = [F, p, b];
                                        break
                                    }
                            } else if (y && (d = t, f = d[R] || (d[R] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), c = u[e] || [], p = c[0] === F && c[1], b = p), !1 === b)
                                for (;
                                    (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[R] || (d[R] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), u[e] = [F, b]), d !== t)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) i = J(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        r = C(e.replace(oe, "$1"));
                    return r[R] ? i(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(ve, ye),
                        function (t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === O
                },
                focus: function (e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !_.pseudos.empty(e)
                },
                header: function (e) {
                    return pe.test(e.nodeName)
                },
                input: function (e) {
                    return de.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (e, t) {
                    return [t - 1]
                }),
                eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = _.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[b] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in {
            submit: !0,
            reset: !0
        }) _.pseudos[b] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return u.prototype = _.filters = _.pseudos, _.setFilters = new u, T = t.tokenize = function (e, n) {
            var i, r, o, s, a, l, c, u = B[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = _.preFilter; a;) {
                i && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), a = a.slice(i.length));
                for (s in _.filter) !(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
        }, C = t.compile = function (e, t) {
            var n, i = [],
                r = [],
                o = K[e + " "];
            if (!o) {
                for (t || (t = T(e)), n = t.length; n--;)(o = v(t[n]))[R] ? i.push(o) : r.push(o);
                (o = K(e, y(r, i))).selector = e
            }
            return o
        }, A = t.select = function (e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                d = !i && T(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && I && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)
                    if ((l = _.find[a]) && (i = l(s.matches[0].replace(ve, ye), ge.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && f(o))) return Y.apply(n, i), n;
                        break
                    }
            }
            return (u || C(e, d))(i, t, !I, n, !t || ge.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = R.split("").sort(V).join("") === R, w.detectDuplicates = !!N, D(), w.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
    var we = function (e, t, n) {
        for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && he(e).is(n)) break;
                i.push(e)
            }
        return i
    },
        _e = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ee = he.expr.match.needsContext,
        xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Te = /^.[^:#\[\.,]*$/;
    he.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, he.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (he.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, r[t], n);
            return i > 1 ? he.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function (e) {
            return !!o(this, "string" == typeof e && Ee.test(e) ? he(e) : e || [], !1).length
        }
    });
    var Ce, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || Ce, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), xe.test(i[1]) && he.isPlainObject(t))
                    for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, Ce = he(te);
    var Se = /^(?:parents|prev(?:Until|All))/,
        je = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    he.fn.extend({
        has: function (e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && he(e);
            if (!Ee.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), he.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return we(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function (e) {
            return s(e, "nextSibling")
        },
        prev: function (e) {
            return s(e, "previousSibling")
        },
        nextAll: function (e) {
            return we(e, "nextSibling")
        },
        prevAll: function (e) {
            return we(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function (e) {
            return _e((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return _e(e.firstChild)
        },
        contents: function (e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
        }
    }, function (e, t) {
        he.fn[e] = function (n, i) {
            var r = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = he.filter(i, r)), this.length > 1 && (je[e] || he.uniqueSort(r), Se.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Ne = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function (e) {
        e = "string" == typeof e ? a(e) : he.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            l = -1,
            c = function () {
                for (r = r || e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            u = {
                add: function () {
                    return o && (n && !t && (l = o.length - 1, s.push(n)), function t(n) {
                        he.each(n, function (n, i) {
                            he.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== he.type(i) && t(i)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function () {
                    return he.each(arguments, function (e, t) {
                        for (var n;
                            (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? he.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return r = s = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return r = s = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return u
    }, he.extend({
        Deferred: function (t) {
            var n = [
                ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
            ],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return r.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return he.Deferred(function (t) {
                            he.each(n, function (n, i) {
                                var r = he.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, i, r) {
                        function o(t, n, i, r) {
                            return function () {
                                var a = this,
                                    u = arguments,
                                    f = function () {
                                        var e, f;
                                        if (!(t < s)) {
                                            if ((e = i.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? r ? f.call(e, o(s, n, l, r), o(s, n, c, r)) : (s++ , f.call(e, o(s, n, l, r), o(s, n, c, r), o(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, u = [e]), (r || n.resolveWith)(a, u))
                                        }
                                    },
                                    d = r ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== c && (a = void 0, u = [e]), n.rejectWith(a, u))
                                        }
                                    };
                                t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var s = 0;
                        return he.Deferred(function (e) {
                            n[0][3].add(o(0, e, he.isFunction(r) ? r : l, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : l)), n[2][3].add(o(0, e, he.isFunction(i) ? i : c))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? he.extend(e, r) : r
                    }
                },
                o = {};
            return he.each(n, function (e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = ie.call(arguments),
                o = he.Deferred(),
                s = function (e) {
                    return function (n) {
                        i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (u(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || he.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) u(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, he.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var ke = he.Deferred();
    he.fn.ready = function (e) {
        return ke.then(e).catch(function (e) {
            he.readyException(e)
        }), this
    }, he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || ke.resolveWith(te, [he]))
        }
    }), he.ready.then = ke.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Oe = function (e, t, n, i, r, o, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === he.type(n)) {
            r = !0;
            for (a in n) Oe(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, he.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(he(e), n)
        })), t))
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    },
        Ie = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[he.camelCase(t)] = n;
            else
                for (i in t) r[he.camelCase(i)] = t[i];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(Ne) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                } (void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Le = new d,
        Pe = new d,
        qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        He = /[A-Z]/g;
    he.extend({
        hasData: function (e) {
            return Pe.hasData(e) || Le.hasData(e)
        },
        data: function (e, t, n) {
            return Pe.access(e, t, n)
        },
        removeData: function (e, t) {
            Pe.remove(e, t)
        },
        _data: function (e, t, n) {
            return Le.access(e, t, n)
        },
        _removeData: function (e, t) {
            Le.remove(e, t)
        }
    }), he.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Pe.get(o), 1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = he.camelCase(i.slice(5)), h(o, i, r[i]));
                    Le.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                Pe.set(this, e)
            }) : Oe(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Pe.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n
                } else this.each(function () {
                    Pe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Pe.remove(this, e)
            })
        }
    }), he.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Le.get(e, t), n && (!i || Array.isArray(n) ? i = Le.access(e, t, he.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = he._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                he.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Le.get(e, n) || Le.access(e, n, {
                empty: he.Callbacks("once memory").add(function () {
                    Le.remove(e, [t + "queue", n])
                })
            })
        }
    }), he.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                he.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = he.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Le.get(o[s], e + "queueHooks")) && n.empty && (i++ , n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Me = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
        Fe = ["Top", "Right", "Bottom", "Left"],
        We = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
        },
        Ue = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        Be = {};
    he.fn.extend({
        show: function () {
            return v(this, !0)
        },
        hide: function () {
            return v(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                We(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var Ke = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        $e = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $e.optgroup = $e.option, $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td;
    var Ge = /<|&#?\w+;/;
    ! function () {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")),
            t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ze = te.documentElement,
        Ye = /^key/,
        Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, l, c, u, f, d, p, h, m, g = Le.get(e);
            if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && he.find.matchesSelector(ze, r), n.guid || (n.guid = he.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                    return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(Ne) || [""]).length; c--;) a = Je.exec(t[c]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p && (f = he.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = he.event.special[p] || {}, u = he.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && he.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), he.event.global[p] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, l, c, u, f, d, p, h, m, g = Le.hasData(e) && Le.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(Ne) || [""]).length; c--;)
                    if (a = Je.exec(t[c]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = he.event.special[p] || {}, d = l[p = (i ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount-- , f.remove && f.remove.call(e, u));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || he.removeEvent(e, p, g.handle), delete l[p])
                    } else
                        for (p in l) he.event.remove(e, p + t[c], n, i, !0);
                he.isEmptyObject(l) && Le.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, r, o, s, a = he.event.fix(e),
                l = new Array(arguments.length),
                c = (Le.get(this, "events") || {})[a.type] || [],
                u = he.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = he.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((he.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? he(r, this).index(c) > -1 : he.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: he.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== x() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return r(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, he.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, he.Event = function (e, t) {
        return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _ : E, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void (this[he.expando] = !0)) : new he.Event(e, t)
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: E,
        isPropagationStopped: E,
        isImmediatePropagationStopped: E,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = _, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = _, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp), he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || he.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({
        on: function (e, t, n, i) {
            return T(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return T(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = E), this.each(function () {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ze, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = he.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (s = y(a), o = y(e), i = 0, r = o.length; i < r; i++) N(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || y(e), s = s || y(a), i = 0, r = o.length; i < r; i++) j(o[i], s[i]);
                else j(e, a);
            return (s = y(a, "script")).length > 0 && b(s, !l && y(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, i, r = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ie(n)) {
                    if (t = n[Le.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                        n[Le.expando] = void 0
                    }
                    n[Pe.expando] && (n[Pe.expando] = void 0)
                }
        }
    }), he.fn.extend({
        detach: function (e) {
            return k(this, e, !0)
        },
        remove: function (e) {
            return k(this, e)
        },
        text: function (e) {
            return Oe(this, function (e) {
                return void 0 === e ? he.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return D(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || C(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return D(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return D(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return D(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return he.clone(this, e, t)
            })
        },
        html: function (e) {
            return Oe(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !$e[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return D(this, arguments, function (t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        he.fn[e] = function (e) {
            for (var n, i = [], r = he(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), he(r[s])[t](n), oe.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var rt = /^margin/,
        ot = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
        st = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function () {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ze.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, ze.removeChild(s), a = null
            }
        }
        var n, i, r, o, s = te.createElement("div"),
            a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(de, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), i
            },
            pixelMarginRight: function () {
                return t(), r
            },
            reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/,
        lt = /^--/,
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "Moz", "ms"],
        dt = te.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = O(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = he.camelCase(t),
                    l = lt.test(t),
                    c = e.style;
                return l || (t = P(a)), s = he.cssHooks[t] || he.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t] : ("string" === (o = typeof n) && (r = Me.exec(n)) && r[1] && (n = m(e, t, r), o = "number"), void (null != n && n === n && ("number" === o && (n += r && r[3] || (he.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = he.camelCase(t);
            return lt.test(t) || (t = P(a)), (s = he.cssHooks[t] || he.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = O(e, t, i)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), he.each(["height", "width"], function (e, t) {
        he.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return !at.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, i) : Ue(e, ct, function () {
                    return R(e, t, i)
                })
            },
            set: function (e, n, i) {
                var r, o = i && st(e),
                    s = i && H(e, t, i, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return s && (r = Me.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = he.css(e, t)), q(0, n, s)
            }
        }
    }), he.cssHooks.marginLeft = I(de.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        he.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Fe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, rt.test(e) || (he.cssHooks[e + t].set = q)
    }), he.fn.extend({
        css: function (e, t) {
            return Oe(this, function (e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = st(e), r = t.length; s < r; s++) o[t[s]] = he.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = M, M.prototype = {
        constructor: M,
        init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (he.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, he.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, he.fx = M.prototype.init, he.fx.step = {};
    var pt, ht, mt = /^(?:toggle|show|hide)$/,
        gt = /queueHooks$/;
    he.Animation = he.extend(V, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return m(n.elem, e, Me.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t,
                d = this,
                p = {},
                h = e.style,
                m = e.nodeType && We(e),
                g = Le.get(e, "fxshow");
            n.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++ , d.always(function () {
                d.always(function () {
                    s.unqueued-- , he.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (i in t)
                if (r = t[i], mt.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    p[i] = g && g[i] || he.style(e, i)
                }
            if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(p)) {
                f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = Le.get(e, "display")), "none" === (u = he.css(e, "display")) && (c ? u = c : (v([e], !0), c = e.style.display || c, u = he.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (d.done(function () {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in p) l || (g ? "hidden" in g && (m = g.hidden) : g = Le.access(e, "fxshow", {
                    display: c
                }), o && (g.hidden = !m), m && v([e], !0), d.done(function () {
                    m || v([e]), Le.remove(e, "fxshow");
                    for (i in p) he.style(e, i, p[i])
                })), l = B(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }],
        prefilter: function (e, t) {
            t ? V.prefilters.unshift(e) : V.prefilters.push(e)
        }
    }), he.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return he.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
        }, i
    }, he.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(We).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var r = he.isEmptyObject(e),
                o = he.speed(t, n, i),
                s = function () {
                    var t = V(this, he.extend({}, e), o);
                    (r || Le.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = he.timers,
                    s = Le.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && gt.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || he.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Le.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = he.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), he.each(["toggle", "show", "hide"], function (e, t) {
        var n = he.fn[t];
        he.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, r)
        }
    }), he.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        he.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), he.timers = [], he.fx.tick = function () {
        var e, t = 0,
            n = he.timers;
        for (pt = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(), pt = void 0
    }, he.fx.timer = function (e) {
        he.timers.push(e), he.fx.start()
    }, he.fx.interval = 13, he.fx.start = function () {
        ht || (ht = !0, F())
    }, he.fx.stop = function () {
        ht = null
    }, he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, he.fn.delay = function (t, n) {
        return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    },
        function () {
            var e = te.createElement("input"),
                t = te.createElement("select").appendChild(te.createElement("option"));
            e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", de.radioValue = "t" === e.value
        }();
    var vt, yt = he.expr.attrHandle;
    he.fn.extend({
        attr: function (e, t) {
            return Oe(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                he.removeAttr(this, e)
            })
        }
    }), he.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = he.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!de.radioValue && "radio" === t && r(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), vt = {
        set: function (e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function (e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = yt[s], yt[s] = r, r = null != n(e, t, i) ? s : null, yt[s] = o), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function (e, t) {
            return Oe(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[he.propFix[e] || e]
            })
        }
    }), he.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), de.optSelected || (he.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        he.propFix[this.toLowerCase()] = this
    }), he.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).addClass(e.call(this, t, $(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = $(n), i = 1 === n.nodeType && " " + Q(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = Q(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (he.isFunction(e)) return this.each(function (t) {
                he(this).removeClass(e.call(this, t, $(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = $(n), i = 1 === n.nodeType && " " + Q(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = Q(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
                he(this).toggleClass(e.call(this, n, $(this), t), t)
            }) : this.each(function () {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = he(this), o = e.match(Ne) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = $(this)) && Le.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Le.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + Q($(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    he.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = he.isFunction(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, he(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = he.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(_t, "") : null == n ? "" : n : void 0
        }
    }), he.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : Q(he.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, o = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        l = a ? null : [],
                        c = a ? s + 1 : o.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++)
                        if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), a) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = he.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = he.inArray(he.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), he.each(["radio", "checkbox"], function () {
        he.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
            }
        }, de.checkOn || (he.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function (t, n, i, r) {
            var o, s, a, l, c, u, f, d = [i || te],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[p] || {}, r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !he.isWindow(i)) {
                    for (l = f.delegateType || p, Et.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (i.ownerDocument || te) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : f.bindType || p, (u = (Le.get(s, "events") || {})[t.type] && Le.get(s, "handle")) && u.apply(s, n), (u = c && s[c]) && u.apply && Ie(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Ie(i) || c && he.isFunction(i[p]) && !he.isWindow(i) && ((a = i[c]) && (i[c] = null), he.event.triggered = p, i[p](), he.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(i, null, t)
        }
    }), he.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return he.event.trigger(e, t, n, !0)
        }
    }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        he.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), he.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), de.focusin = "onfocusin" in e, de.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = Le.access(i, t);
                r || i.addEventListener(e, n, !0), Le.access(i, t, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = Le.access(i, t) - 1;
                r ? Le.access(i, t, r) : (i.removeEventListener(e, n, !0), Le.remove(i, t))
            }
        }
    });
    var xt = e.location,
        Tt = he.now(),
        Ct = /\?/;
    he.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
    };
    var At = /\[\]$/,
        St = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    he.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                var n = he.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) G(n, e[n], t, r);
        return i.join("&")
    }, he.fn.extend({
        serialize: function () {
            return he.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Nt.test(this.nodeName) && !jt.test(e) && (this.checked || !Ke.test(e))
            }).map(function (e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                        name: t.name,
                        value: n.replace(St, "\r\n")
                    }
            }).get()
        }
    });
    var Dt = /%20/g,
        kt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Ht = {},
        Rt = {},
        Mt = "*/".concat("*"),
        Ft = te.createElement("a");
    Ft.href = xt.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: Lt.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? X(X(e, he.ajaxSettings), t) : X(he.ajaxSettings, e)
        },
        ajaxPrefilter: z(Ht),
        ajaxTransport: z(Rt),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var c, d, p, w, _, E = n;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = J(h, x, i)), w = Z(h, w, x, c), c ? (h.ifModified && ((_ = x.getResponseHeader("Last-Modified")) && (he.lastModified[o] = _), (_ = x.getResponseHeader("etag")) && (he.etag[o] = _)), 204 === t || "HEAD" === h.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = w.state, d = w.data, p = w.error, c = !p)) : (p = E, !t && E || (E = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || E) + "", c ? v.resolveWith(m, [d, E, x]) : v.rejectWith(m, [x, E, p]), x.statusCode(b), b = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? d : p]), y.fireWith(m, [x, E]), f && (g.trigger("ajaxComplete", [x, h]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, c, u, f, d, p, h = he.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                v = he.Deferred(),
                y = he.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                _ = {},
                E = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = It.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return u ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u) x.always(e[x.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || E;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (v.promise(x), h.url = ((t || h.url || xt.href) + "").replace(qt, xt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) {
                c = te.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Y(Ht, h, n, x), u) return x;
            (f = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(kt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (p = h.url.slice(o.length), h.data && (o += (Ct.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ot, "$1"), p = (Ct.test(o) ? "&" : "?") + "_=" + Tt++ + p), h.url = o + p), h.ifModified && (he.lastModified[o] && x.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && x.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) x.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, x, h) || u)) return x.abort();
            if (E = "abort", y.add(h.complete), x.done(h.success), x.fail(h.error), r = Y(Rt, h, n, x)) {
                if (x.readyState = 1, f && g.trigger("ajaxSend", [x, h]), u) return x;
                h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, r.send(w, i)
                } catch (e) {
                    if (u) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return he.get(e, void 0, t, "script")
        }
    }), he.each(["get", "post"], function (e, t) {
        he[t] = function (e, n, i, r) {
            return he.isFunction(n) && (r = r || i, i = n, n = void 0), he.ajax(he.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, he.isPlainObject(e) && e))
        }
    }), he._evalUrl = function (e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, he.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return he.isFunction(e) ? this.each(function (t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = he.isFunction(e);
            return this.each(function (n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                he(this).replaceWith(this.childNodes)
            }), this
        }
    }), he.expr.pseudos.hidden = function (e) {
        return !he.expr.pseudos.visible(e)
    }, he.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, he.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) { }
    };
    var Wt = {
        0: 200,
        1223: 204
    },
        Ut = he.ajaxSettings.xhr();
    de.cors = !!Ut && "withCredentials" in Ut, de.ajax = Ut = !!Ut, he.ajaxTransport(function (t) {
        var n, i;
        if (de.cors || Ut && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), he.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return he.globalEval(e), e
            }
        }
    }), he.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), he.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, r) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), te.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Bt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Bt.pop() || he.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Kt, "$1" + r) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || he.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? he(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Bt.push(r)), s && he.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), de.createHTMLDocument = function () {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), he.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = xe.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = w([e], t, o), o && o.length && he(o).remove(), he.merge([], r.childNodes))
    }, he.fn.load = function (e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = Q(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && he.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        he.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), he.expr.pseudos.animated = function (e) {
        return he.grep(he.timers, function (t) {
            return e === t.elem
        }).length
    }, he.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, l, c = he.css(e, "position"),
                u = he(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (i = u.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
        }
    }, he.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                he.offset.setOffset(this, e, t)
            });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, r = t.defaultView, {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                    top: 0,
                    left: 0
                } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + he.css(e[0], "borderTopWidth", !0),
                    left: i.left + he.css(e[0], "borderLeftWidth", !0)
                }), {
                        top: t.top - i.top - he.css(n, "marginTop", !0),
                        left: t.left - i.left - he.css(n, "marginLeft", !0)
                    }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                return e || ze
            })
        }
    }), he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function (i) {
            return Oe(this, function (e, i, r) {
                var o;
                return he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), he.each(["top", "left"], function (e, t) {
        he.cssHooks[t] = I(de.pixelPosition, function (e, n) {
            if (n) return n = O(e, t), ot.test(n) ? he(e).position()[t] + "px" : n
        })
    }), he.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            he.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Oe(this, function (t, n, r) {
                    var o;
                    return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? he.css(t, n, a) : he.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }), he.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), he.holdReady = function (e) {
        e ? he.readyWait++ : he.ready(!0)
    }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function () {
        return he
    });
    var Vt = e.jQuery,
        Qt = e.$;
    return he.noConflict = function (t) {
        return e.$ === he && (e.$ = Qt), t && e.jQuery === he && (e.jQuery = Vt), he
    }, t || (e.jQuery = e.$ = he), he
}),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
    }(this, function () {
        "use strict";

        function e(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function t(e, t) {
            if (1 !== e.nodeType) return [];
            var n = window.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function n(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function i(e) {
            if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
            var r = t(e),
                o = r.overflow,
                s = r.overflowX,
                a = r.overflowY;
            return /(auto|scroll)/.test(o + a + s) ? e : i(n(e))
        }

        function r(e) {
            var n = e && e.offsetParent,
                i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? r(n) : n : window.document.documentElement
        }

        function o(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e)
        }

        function s(e) {
            return null === e.parentNode ? e : s(e.parentNode)
        }

        function a(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                l = n ? t : e,
                c = document.createRange();
            c.setStart(i, 0), c.setEnd(l, 0);
            var u = c.commonAncestorContainer;
            if (e !== u && t !== u || i.contains(l)) return o(u) ? u : r(u);
            var f = s(e);
            return f.host ? a(f.host, t) : a(e, s(t).host)
        }

        function l(e) {
            var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var i = window.document.documentElement;
                return (window.document.scrollingElement || i)[t]
            }
            return e[t]
        }

        function c(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = l(t, "top"),
                r = l(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }

        function u(e, t) {
            var n = "x" === t ? "Left" : "Top",
                i = "Left" == n ? "Right" : "Bottom";
            return +e["border" + n + "Width"].split("px")[0] + +e["border" + i + "Width"].split("px")[0]
        }

        function f(e, t, n, i) {
            return $(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], te() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }

        function d() {
            var e = window.document.body,
                t = window.document.documentElement,
                n = te() && window.getComputedStyle(t);
            return {
                height: f("Height", e, t, n),
                width: f("Width", e, t, n)
            }
        }

        function p(e) {
            return oe({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function h(e) {
            var n = {};
            if (te()) try {
                n = e.getBoundingClientRect();
                var i = l(e, "top"),
                    r = l(e, "left");
                n.top += i, n.left += r, n.bottom += i, n.right += r
            } catch (e) { } else n = e.getBoundingClientRect();
            var o = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
                s = "HTML" === e.nodeName ? d() : {},
                a = s.width || e.clientWidth || o.right - o.left,
                c = s.height || e.clientHeight || o.bottom - o.top,
                f = e.offsetWidth - a,
                h = e.offsetHeight - c;
            if (f || h) {
                var m = t(e);
                f -= u(m, "x"), h -= u(m, "y"), o.width -= f, o.height -= h
            }
            return p(o)
        }

        function m(e, n) {
            var r = te(),
                o = "HTML" === n.nodeName,
                s = h(e),
                a = h(n),
                l = i(e),
                u = t(n),
                f = +u.borderTopWidth.split("px")[0],
                d = +u.borderLeftWidth.split("px")[0],
                m = p({
                    top: s.top - a.top - f,
                    left: s.left - a.left - d,
                    width: s.width,
                    height: s.height
                });
            if (m.marginTop = 0, m.marginLeft = 0, !r && o) {
                var g = +u.marginTop.split("px")[0],
                    v = +u.marginLeft.split("px")[0];
                m.top -= f - g, m.bottom -= f - g, m.left -= d - v, m.right -= d - v, m.marginTop = g, m.marginLeft = v
            }
            return (r ? n.contains(l) : n === l && "BODY" !== l.nodeName) && (m = c(m, n)), m
        }

        function g(e) {
            var t = window.document.documentElement,
                n = m(e, t),
                i = $(t.clientWidth, window.innerWidth || 0),
                r = $(t.clientHeight, window.innerHeight || 0),
                o = l(t),
                s = l(t, "left");
            return p({
                top: o - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r
            })
        }

        function v(e) {
            var i = e.nodeName;
            return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
        }

        function y(e, t, r, o) {
            var s = {
                top: 0,
                left: 0
            },
                l = a(e, t);
            if ("viewport" === o) s = g(l);
            else {
                var c;
                "scrollParent" === o ? "BODY" === (c = i(n(e))).nodeName && (c = window.document.documentElement) : c = "window" === o ? window.document.documentElement : o;
                var u = m(c, l);
                if ("HTML" !== c.nodeName || v(l)) s = u;
                else {
                    var f = d(),
                        p = f.height,
                        h = f.width;
                    s.top += u.top - u.marginTop, s.bottom = p + u.top, s.left += u.left - u.marginLeft, s.right = h + u.left
                }
            }
            return s.left += r, s.top += r, s.right -= r, s.bottom -= r, s
        }

        function b(e) {
            return e.width * e.height
        }

        function w(e, t, n, i, r) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = y(n, i, o, r),
                a = {
                    top: {
                        width: s.width,
                        height: t.top - s.top
                    },
                    right: {
                        width: s.right - t.right,
                        height: s.height
                    },
                    bottom: {
                        width: s.width,
                        height: s.bottom - t.bottom
                    },
                    left: {
                        width: t.left - s.left,
                        height: s.height
                    }
                },
                l = Object.keys(a).map(function (e) {
                    return oe({
                        key: e
                    }, a[e], {
                            area: b(a[e])
                        })
                }).sort(function (e, t) {
                    return t.area - e.area
                }),
                c = l.filter(function (e) {
                    var t = e.width,
                        i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight
                }),
                u = 0 < c.length ? c[0].key : l[0].key,
                f = e.split("-")[1];
            return u + (f ? "-" + f : "")
        }

        function _(e, t, n) {
            return m(n, a(t, n))
        }

        function E(e) {
            var t = window.getComputedStyle(e),
                n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return {
                width: e.offsetWidth + i,
                height: e.offsetHeight + n
            }
        }

        function x(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e]
            })
        }

        function T(e, t, n) {
            n = n.split("-")[0];
            var i = E(e),
                r = {
                    width: i.width,
                    height: i.height
                },
                o = -1 !== ["right", "left"].indexOf(n),
                s = o ? "top" : "left",
                a = o ? "left" : "top",
                l = o ? "height" : "width",
                c = o ? "width" : "height";
            return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[x(a)], r
        }

        function C(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function A(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = C(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }

        function S(t, n, i) {
            return (void 0 === i ? t : t.slice(0, A(t, "name", i))).forEach(function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t.function || t.fn;
                t.enabled && e(i) && (n.offsets.popper = p(n.offsets.popper), n.offsets.reference = p(n.offsets.reference), n = i(n, t))
            }), n
        }

        function j() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = _(this.state, this.popper, this.reference), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = S(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function N(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }

        function D(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
                var r = t[i],
                    o = r ? "" + r + n : e;
                if (void 0 !== window.document.body.style[o]) return o
            }
            return null
        }

        function k() {
            return this.state.isDestroyed = !0, N(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[D("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function O(e, t, n, r) {
            var o = "BODY" === e.nodeName,
                s = o ? window : e;
            s.addEventListener(t, n, {
                passive: !0
            }), o || O(i(s.parentNode), t, n, r), r.push(s)
        }

        function I(e, t, n, r) {
            n.updateBound = r, window.addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var o = i(e);
            return O(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }

        function L() {
            this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function P(e, t) {
            return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }

        function q() {
            this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = P(this.reference, this.state))
        }

        function H(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function R(e, t) {
            Object.keys(t).forEach(function (n) {
                var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && H(t[n]) && (i = "px"), e.style[n] = t[n] + i
            })
        }

        function M(e, t) {
            Object.keys(t).forEach(function (n) {
                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
            })
        }

        function F(e, t, n) {
            var i = C(e, function (e) {
                return e.name === t
            }),
                r = !!i && e.some(function (e) {
                    return e.name === n && e.enabled && e.order < i.order
                });
            if (!r) {
                var o = "`" + t + "`";
                console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return r
        }

        function W(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }

        function U(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = ae.indexOf(e),
                i = ae.slice(n + 1).concat(ae.slice(0, n));
            return t ? i.reverse() : i
        }

        function B(e, t, n, i) {
            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +r[1],
                s = r[2];
            if (!o) return e;
            if (0 === s.indexOf("%")) {
                var a;
                switch (s) {
                    case "%p":
                        a = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        a = i
                }
                return p(a)[t] / 100 * o
            }
            if ("vh" === s || "vw" === s) {
                return ("vh" === s ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
            }
            return o
        }

        function K(e, t, n, i) {
            var r = [0, 0],
                o = -1 !== ["right", "left"].indexOf(i),
                s = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim()
                }),
                a = s.indexOf(C(s, function (e) {
                    return -1 !== e.search(/,|\s/)
                }));
            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
            return (c = c.map(function (e, i) {
                var r = (1 === i ? !o : o) ? "height" : "width",
                    s = !1;
                return e.reduce(function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                }, []).map(function (e) {
                    return B(e, r, t, n)
                })
            })).forEach(function (e, t) {
                e.forEach(function (n, i) {
                    H(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                })
            }), r
        }
        for (var V = Math.min, Q = Math.floor, $ = Math.max, G = ["native code", "[object MutationObserverConstructor]"], z = "undefined" != typeof window, Y = ["Edge", "Trident", "Firefox"], X = 0, J = 0; J < Y.length; J += 1)
            if (z && 0 <= navigator.userAgent.indexOf(Y[J])) {
                X = 1;
                break
            }
        var Z, ee = z && function (e) {
            return G.some(function (t) {
                return -1 < (e || "").toString().indexOf(t)
            })
        }(window.MutationObserver) ? function (e) {
            var t = !1,
                n = 0,
                i = document.createElement("span");
            return new MutationObserver(function () {
                e(), t = !1
            }).observe(i, {
                attributes: !0
            }),
                function () {
                    t || (t = !0, i.setAttribute("x-index", n), ++n)
                }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, X))
            }
        },
            te = function () {
                return void 0 == Z && (Z = -1 !== navigator.appVersion.indexOf("MSIE 10")), Z
            },
            ne = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            ie = function () {
                function e(e, t) {
                    for (var n, i = 0; i < t.length; i++) n = t[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            re = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            oe = Object.assign || function (e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            },
            se = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            ae = se.slice(3),
            le = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            },
            ce = function () {
                function t(n, i) {
                    var r = this,
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    ne(this, t), this.scheduleUpdate = function () {
                        return requestAnimationFrame(r.update)
                    }, this.update = ee(this.update.bind(this)), this.options = oe({}, t.Defaults, o), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = n.jquery ? n[0] : n, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(oe({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                        r.options.modifiers[e] = oe({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                        return oe({
                            name: e
                        }, r.options.modifiers[e])
                    }).sort(function (e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                    }), this.update();
                    var s = this.options.eventsEnabled;
                    s && this.enableEventListeners(), this.state.eventsEnabled = s
                }
                return ie(t, [{
                    key: "update",
                    value: function () {
                        return j.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        return k.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function () {
                        return L.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function () {
                        return q.call(this)
                    }
                }]), t
            }();
        return ce.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ce.placements = se, ce.Defaults = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () { },
            onUpdate: function () { },
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = {
                                    start: re({}, l, o[l]),
                                    end: re({}, l, o[l] + o[c] - s[c])
                                };
                            e.offsets.popper = oe({}, s, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (e, t) {
                        var n, i = t.offset,
                            r = e.placement,
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = r.split("-")[0];
                        return n = H(+i) ? [+i, 0] : K(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.boundariesElement || r(e.instance.popper);
                        e.instance.reference === n && (n = r(n));
                        var i = y(e.instance.popper, e.instance.reference, t.padding, n);
                        t.boundaries = i;
                        var o = t.priority,
                            s = e.offsets.popper,
                            a = {
                                primary: function (e) {
                                    var n = s[e];
                                    return s[e] < i[e] && !t.escapeWithReference && (n = $(s[e], i[e])), re({}, e, n)
                                },
                                secondary: function (e) {
                                    var n = "right" === e ? "left" : "top",
                                        r = s[n];
                                    return s[e] > i[e] && !t.escapeWithReference && (r = V(s[n], i[e] - ("right" === e ? s.width : s.height))), re({}, n, r)
                                }
                            };
                        return o.forEach(function (e) {
                            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                            s = oe({}, s, a[t](e))
                        }), e.offsets.popper = s, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Q,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, n) {
                        if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = n.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            d = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            m = E(i)[c];
                        a[h] - m < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - m)), a[f] + m > s[h] && (e.offsets.popper[f] += a[f] + m - s[h]);
                        var g = a[f] + a[c] / 2 - m / 2,
                            v = t(e.instance.popper, "margin" + u).replace("px", ""),
                            y = g - p(e.offsets.popper)[f] - v;
                        return y = $(V(s[c] - m, y), 0), e.arrowElement = i, e.offsets.arrow = {}, e.offsets.arrow[f] = Math.round(y), e.offsets.arrow[d] = "", e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (N(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                            i = e.placement.split("-")[0],
                            r = x(i),
                            o = e.placement.split("-")[1] || "",
                            s = [];
                        switch (t.behavior) {
                            case le.FLIP:
                                s = [i, r];
                                break;
                            case le.CLOCKWISE:
                                s = U(i);
                                break;
                            case le.COUNTERCLOCKWISE:
                                s = U(i, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach(function (a, l) {
                            if (i !== a || s.length === l + 1) return e;
                            i = e.placement.split("-")[0], r = x(i);
                            var c = e.offsets.popper,
                                u = e.offsets.reference,
                                f = Q,
                                d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                                p = f(c.left) < f(n.left),
                                h = f(c.right) > f(n.right),
                                m = f(c.top) < f(n.top),
                                g = f(c.bottom) > f(n.bottom),
                                v = "left" === i && p || "right" === i && h || "top" === i && m || "bottom" === i && g,
                                y = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!t.flipVariations && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && m || !y && "end" === o && g);
                            (d || v || b) && (e.flipped = !0, (d || v) && (i = s[l + 1]), b && (o = W(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = oe({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = S(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = x(t), e.offsets.popper = p(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = C(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.x,
                            i = t.y,
                            o = e.offsets.popper,
                            s = C(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, l, c = void 0 === s ? t.gpuAcceleration : s,
                            u = h(r(e.instance.popper)),
                            f = {
                                position: o.position
                            },
                            d = {
                                left: Q(o.left),
                                top: Q(o.top),
                                bottom: Q(o.bottom),
                                right: Q(o.right)
                            },
                            p = "bottom" === n ? "top" : "bottom",
                            m = "right" === i ? "left" : "right",
                            g = D("transform");
                        if (l = "bottom" == p ? -u.height + d.bottom : d.top, a = "right" == m ? -u.width + d.right : d.left, c && g) f[g] = "translate3d(" + a + "px, " + l + "px, 0)", f[p] = 0, f[m] = 0, f.willChange = "transform";
                        else {
                            var v = "bottom" == p ? -1 : 1,
                                y = "right" == m ? -1 : 1;
                            f[p] = l * v, f[m] = a * y, f.willChange = p + ", " + m
                        }
                        var b = {
                            "x-placement": e.placement
                        };
                        return e.attributes = oe({}, b, e.attributes), e.styles = oe({}, f, e.styles), e.arrowStyles = oe({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return R(e.instance.popper, e.styles), M(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && R(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function (e, t, n, i, r) {
                        var o = _(r, t, e),
                            s = w(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), R(t, {
                            position: "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        }, ce
    }),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
    }(this, function (e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function o() {
            return (o = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }
        t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
        var s = function (e) {
            function t(e) {
                return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }
            var n = !1,
                i = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (e) {
                        do {
                            e += ~~(1e6 * Math.random())
                        } while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function (t) {
                        var n = t.getAttribute("data-target");
                        n && "#" !== n || (n = t.getAttribute("href") || ""), "#" === n.charAt(0) && (n = function (t) {
                            return t = "function" == typeof e.escapeSelector ? e.escapeSelector(t).substr(1) : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")
                        }(n));
                        try {
                            return e(document).find(n).length > 0 ? n : null
                        } catch (e) {
                            return null
                        }
                    },
                    reflow: function (e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function (t) {
                        e(t).trigger(n.end)
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(n)
                    },
                    isElement: function (e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function (e, n, r) {
                        for (var o in r)
                            if (Object.prototype.hasOwnProperty.call(r, o)) {
                                var s = r[o],
                                    a = n[o],
                                    l = a && i.isElement(a) ? "element" : t(a);
                                if (!new RegExp(s).test(l)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + l + '" but expected type "' + s + '".')
                            }
                    }
                };
            return n = !window.QUnit && {
                end: "transitionend"
            }, e.fn.emulateTransitionEnd = function (t) {
                var n = this,
                    r = !1;
                return e(this).one(i.TRANSITION_END, function () {
                    r = !0
                }), setTimeout(function () {
                    r || i.triggerTransitionEnd(n)
                }, t), this
            }, i.supportsTransitionEnd() && (e.event.special[i.TRANSITION_END] = {
                bindType: n.end,
                delegateType: n.end,
                handle: function (t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }), i
        }(t),
            a = function (e) {
                var t = "alert",
                    n = "bs.alert",
                    i = "." + n,
                    o = e.fn[t],
                    a = {
                        CLOSE: "close" + i,
                        CLOSED: "closed" + i,
                        CLICK_DATA_API: "click" + i + ".data-api"
                    },
                    l = function () {
                        function t(e) {
                            this._element = e
                        }
                        var i = t.prototype;
                        return i.close = function (e) {
                            e = e || this._element;
                            var t = this._getRootElement(e);
                            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                        }, i.dispose = function () {
                            e.removeData(this._element, n), this._element = null
                        }, i._getRootElement = function (t) {
                            var n = s.getSelectorFromElement(t),
                                i = !1;
                            return n && (i = e(n)[0]), i || (i = e(t).closest(".alert")[0]), i
                        }, i._triggerCloseEvent = function (t) {
                            var n = e.Event(a.CLOSE);
                            return e(t).trigger(n), n
                        }, i._removeElement = function (t) {
                            var n = this;
                            e(t).removeClass("show"), s.supportsTransitionEnd() && e(t).hasClass("fade") ? e(t).one(s.TRANSITION_END, function (e) {
                                return n._destroyElement(t, e)
                            }).emulateTransitionEnd(150) : this._destroyElement(t)
                        }, i._destroyElement = function (t) {
                            e(t).detach().trigger(a.CLOSED).remove()
                        }, t._jQueryInterface = function (i) {
                            return this.each(function () {
                                var r = e(this),
                                    o = r.data(n);
                                o || (o = new t(this), r.data(n, o)), "close" === i && o[i](this)
                            })
                        }, t._handleDismiss = function (e) {
                            return function (t) {
                                t && t.preventDefault(), e.close(this)
                            }
                        }, r(t, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }]), t
                    }();
                return e(document).on(a.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l)), e.fn[t] = l._jQueryInterface, e.fn[t].Constructor = l, e.fn[t].noConflict = function () {
                    return e.fn[t] = o, l._jQueryInterface
                }, l
            }(t),
            l = function (e) {
                var t = "button",
                    n = "bs.button",
                    i = "." + n,
                    o = ".data-api",
                    s = e.fn[t],
                    a = "active",
                    l = '[data-toggle^="button"]',
                    c = ".btn",
                    u = {
                        CLICK_DATA_API: "click" + i + o,
                        FOCUS_BLUR_DATA_API: "focus" + i + o + " blur" + i + o
                    },
                    f = function () {
                        function t(e) {
                            this._element = e
                        }
                        var i = t.prototype;
                        return i.toggle = function () {
                            var t = !0,
                                n = !0,
                                i = e(this._element).closest('[data-toggle="buttons"]')[0];
                            if (i) {
                                var r = e(this._element).find("input")[0];
                                if (r) {
                                    if ("radio" === r.type)
                                        if (r.checked && e(this._element).hasClass(a)) t = !1;
                                        else {
                                            var o = e(i).find(".active")[0];
                                            o && e(o).removeClass(a)
                                        }
                                    if (t) {
                                        if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
                                        r.checked = !e(this._element).hasClass(a), e(r).trigger("change")
                                    }
                                    r.focus(), n = !1
                                }
                            }
                            n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(a)), t && e(this._element).toggleClass(a)
                        }, i.dispose = function () {
                            e.removeData(this._element, n), this._element = null
                        }, t._jQueryInterface = function (i) {
                            return this.each(function () {
                                var r = e(this).data(n);
                                r || (r = new t(this), e(this).data(n, r)), "toggle" === i && r[i]()
                            })
                        }, r(t, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }]), t
                    }();
                return e(document).on(u.CLICK_DATA_API, l, function (t) {
                    t.preventDefault();
                    var n = t.target;
                    e(n).hasClass("btn") || (n = e(n).closest(c)), f._jQueryInterface.call(e(n), "toggle")
                }).on(u.FOCUS_BLUR_DATA_API, l, function (t) {
                    var n = e(t.target).closest(c)[0];
                    e(n).toggleClass("focus", /^focus(in)?$/.test(t.type))
                }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
                    return e.fn[t] = s, f._jQueryInterface
                }, f
            }(t),
            c = function (e) {
                var t = "carousel",
                    n = "bs.carousel",
                    i = "." + n,
                    a = e.fn[t],
                    l = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    c = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    u = "next",
                    f = "prev",
                    d = {
                        SLIDE: "slide" + i,
                        SLID: "slid" + i,
                        KEYDOWN: "keydown" + i,
                        MOUSEENTER: "mouseenter" + i,
                        MOUSELEAVE: "mouseleave" + i,
                        TOUCHEND: "touchend" + i,
                        LOAD_DATA_API: "load" + i + ".data-api",
                        CLICK_DATA_API: "click" + i + ".data-api"
                    },
                    p = "active",
                    h = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    m = function () {
                        function a(t, n) {
                            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(h.INDICATORS)[0], this._addEventListeners()
                        }
                        var m = a.prototype;
                        return m.next = function () {
                            this._isSliding || this._slide(u)
                        }, m.nextWhenVisible = function () {
                            !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                        }, m.prev = function () {
                            this._isSliding || this._slide(f)
                        }, m.pause = function (t) {
                            t || (this._isPaused = !0), e(this._element).find(h.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, m.cycle = function (e) {
                            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                        }, m.to = function (t) {
                            var n = this;
                            this._activeElement = e(this._element).find(h.ACTIVE_ITEM)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || t < 0))
                                if (this._isSliding) e(this._element).one(d.SLID, function () {
                                    return n.to(t)
                                });
                                else {
                                    if (i === t) return this.pause(), void this.cycle();
                                    var r = t > i ? u : f;
                                    this._slide(r, this._items[t])
                                }
                        }, m.dispose = function () {
                            e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, m._getConfig = function (e) {
                            return e = o({}, l, e), s.typeCheckConfig(t, e, c), e
                        }, m._addEventListeners = function () {
                            var t = this;
                            this._config.keyboard && e(this._element).on(d.KEYDOWN, function (e) {
                                return t._keydown(e)
                            }), "hover" === this._config.pause && (e(this._element).on(d.MOUSEENTER, function (e) {
                                return t.pause(e)
                            }).on(d.MOUSELEAVE, function (e) {
                                return t.cycle(e)
                            }), "ontouchstart" in document.documentElement && e(this._element).on(d.TOUCHEND, function () {
                                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                                    return t.cycle(e)
                                }, 500 + t._config.interval)
                            }))
                        }, m._keydown = function (e) {
                            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next();
                                    break;
                                default:
                                    return
                            }
                        }, m._getItemIndex = function (t) {
                            return this._items = e.makeArray(e(t).parent().find(h.ITEM)), this._items.indexOf(t)
                        }, m._getItemByDirection = function (e, t) {
                            var n = e === u,
                                i = e === f,
                                r = this._getItemIndex(t),
                                o = this._items.length - 1;
                            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                            var s = (r + (e === f ? -1 : 1)) % this._items.length;
                            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                        }, m._triggerSlideEvent = function (t, n) {
                            var i = this._getItemIndex(t),
                                r = this._getItemIndex(e(this._element).find(h.ACTIVE_ITEM)[0]),
                                o = e.Event(d.SLIDE, {
                                    relatedTarget: t,
                                    direction: n,
                                    from: r,
                                    to: i
                                });
                            return e(this._element).trigger(o), o
                        }, m._setActiveIndicatorElement = function (t) {
                            if (this._indicatorsElement) {
                                e(this._indicatorsElement).find(h.ACTIVE).removeClass(p);
                                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                                n && e(n).addClass(p)
                            }
                        }, m._slide = function (t, n) {
                            var i, r, o, a = this,
                                l = e(this._element).find(h.ACTIVE_ITEM)[0],
                                c = this._getItemIndex(l),
                                f = n || l && this._getItemByDirection(t, l),
                                m = this._getItemIndex(f),
                                g = Boolean(this._interval);
                            if (t === u ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), f && e(f).hasClass(p)) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(f, o).isDefaultPrevented() && l && f) {
                                this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(f);
                                var v = e.Event(d.SLID, {
                                    relatedTarget: f,
                                    direction: o,
                                    from: c,
                                    to: m
                                });
                                s.supportsTransitionEnd() && e(this._element).hasClass("slide") ? (e(f).addClass(r), s.reflow(f), e(l).addClass(i), e(f).addClass(i), e(l).one(s.TRANSITION_END, function () {
                                    e(f).removeClass(i + " " + r).addClass(p), e(l).removeClass(p + " " + r + " " + i), a._isSliding = !1, setTimeout(function () {
                                        return e(a._element).trigger(v)
                                    }, 0)
                                }).emulateTransitionEnd(600)) : (e(l).removeClass(p), e(f).addClass(p), this._isSliding = !1, e(this._element).trigger(v)), g && this.cycle()
                            }
                        }, a._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = e(this).data(n),
                                    r = o({}, l, e(this).data());
                                "object" == typeof t && (r = o({}, r, t));
                                var s = "string" == typeof t ? t : r.slide;
                                if (i || (i = new a(this, r), e(this).data(n, i)), "number" == typeof t) i.to(t);
                                else if ("string" == typeof s) {
                                    if (void 0 === i[s]) throw new Error('No method named "' + s + '"');
                                    i[s]()
                                } else r.interval && (i.pause(), i.cycle())
                            })
                        }, a._dataApiClickHandler = function (t) {
                            t.preventDefault();
                            var i = s.getSelectorFromElement(this);
                            if (i) {
                                var r = e(i)[0];
                                if (r && e(r).hasClass("carousel")) {
                                    var l = o({}, e(r).data(), e(this).data()),
                                        c = this.getAttribute("data-slide-to");
                                    console.log(l);
                                    console.log(e(r));
                                    c && (l.interval = !1),
                                        //  a._jQueryInterface.call(e(r), l),
                                        c && e(r).data(n).to(c), t.preventDefault()
                                }
                            }
                        }, r(a, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return l
                            }
                        }]), a
                    }();
                return e(document).on(d.CLICK_DATA_API, h.DATA_SLIDE, m._dataApiClickHandler), e(window).on(d.LOAD_DATA_API, function () {
                    e(h.DATA_RIDE).each(function () {
                        var t = e(this);
                        m._jQueryInterface.call(t, t.data())
                    })
                }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
                    return e.fn[t] = a, m._jQueryInterface
                }, m
            }(t),
            u = function (e) {
                var t = "collapse",
                    n = "bs.collapse",
                    i = "." + n,
                    a = e.fn[t],
                    l = {
                        toggle: !0,
                        parent: ""
                    },
                    c = {
                        toggle: "boolean",
                        parent: "(string|element)"
                    },
                    u = {
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        CLICK_DATA_API: "click" + i + ".data-api"
                    },
                    f = "show",
                    d = "collapse",
                    p = "collapsing",
                    h = "collapsed",
                    m = "width",
                    g = {
                        ACTIVES: ".show, .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    },
                    v = function () {
                        function i(t, n) {
                            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                            for (var i = e(g.DATA_TOGGLE), r = 0; r < i.length; r++) {
                                var o = i[r],
                                    a = s.getSelectorFromElement(o);
                                null !== a && e(a).filter(t).length > 0 && this._triggerArray.push(o)
                            }
                            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        var a = i.prototype;
                        return a.toggle = function () {
                            e(this._element).hasClass(f) ? this.hide() : this.show()
                        }, a.show = function () {
                            var t = this;
                            if (!this._isTransitioning && !e(this._element).hasClass(f)) {
                                var r, o;
                                if (this._parent && ((r = e.makeArray(e(this._parent).children().children(g.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) {
                                    var a = e.Event(u.SHOW);
                                    if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                                        r && (i._jQueryInterface.call(e(r), "hide"), o || e(r).data(n, null));
                                        var l = this._getDimension();
                                        e(this._element).removeClass(d).addClass(p), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var c = function () {
                                            e(t._element).removeClass(p).addClass(d).addClass(f), t._element.style[l] = "", t.setTransitioning(!1), e(t._element).trigger(u.SHOWN)
                                        };
                                        if (s.supportsTransitionEnd()) {
                                            var m = "scroll" + (l[0].toUpperCase() + l.slice(1));
                                            e(this._element).one(s.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[l] = this._element[m] + "px"
                                        } else c()
                                    }
                                }
                            }
                        }, a.hide = function () {
                            var t = this;
                            if (!this._isTransitioning && e(this._element).hasClass(f)) {
                                var n = e.Event(u.HIDE);
                                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var i = this._getDimension();
                                    if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), e(this._element).addClass(p).removeClass(d).removeClass(f), this._triggerArray.length)
                                        for (var r = 0; r < this._triggerArray.length; r++) {
                                            var o = this._triggerArray[r],
                                                a = s.getSelectorFromElement(o);
                                            null !== a && (e(a).hasClass(f) || e(o).addClass(h).attr("aria-expanded", !1))
                                        }
                                    this.setTransitioning(!0);
                                    var l = function () {
                                        t.setTransitioning(!1), e(t._element).removeClass(p).addClass(d).trigger(u.HIDDEN)
                                    };
                                    this._element.style[i] = "", s.supportsTransitionEnd() ? e(this._element).one(s.TRANSITION_END, l).emulateTransitionEnd(600) : l()
                                }
                            }
                        }, a.setTransitioning = function (e) {
                            this._isTransitioning = e
                        }, a.dispose = function () {
                            e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }, a._getConfig = function (e) {
                            return e = o({}, l, e), e.toggle = Boolean(e.toggle), s.typeCheckConfig(t, e, c), e
                        }, a._getDimension = function () {
                            return e(this._element).hasClass(m) ? m : "height"
                        }, a._getParent = function () {
                            var t = this,
                                n = null;
                            s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                            var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return e(n).find(r).each(function (e, n) {
                                t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                            }), n
                        }, a._addAriaAndCollapsedClass = function (t, n) {
                            if (t) {
                                var i = e(t).hasClass(f);
                                n.length && e(n).toggleClass(h, !i).attr("aria-expanded", i)
                            }
                        }, i._getTargetFromElement = function (t) {
                            var n = s.getSelectorFromElement(t);
                            return n ? e(n)[0] : null
                        }, i._jQueryInterface = function (t) {
                            return this.each(function () {
                                var r = e(this),
                                    s = r.data(n),
                                    a = o({}, l, r.data(), "object" == typeof t && t);
                                if (!s && a.toggle && /show|hide/.test(t) && (a.toggle = !1), s || (s = new i(this, a), r.data(n, s)), "string" == typeof t) {
                                    if (void 0 === s[t]) throw new Error('No method named "' + t + '"');
                                    s[t]()
                                }
                            })
                        }, r(i, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return l
                            }
                        }]), i
                    }();
                return e(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
                    "A" === t.currentTarget.tagName && t.preventDefault();
                    var i = e(this),
                        r = s.getSelectorFromElement(this);
                    e(r).each(function () {
                        var t = e(this),
                            r = t.data(n) ? "toggle" : i.data();
                        v._jQueryInterface.call(t, r)
                    })
                }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
                    return e.fn[t] = a, v._jQueryInterface
                }, v
            }(t),
            f = function (e) {
                var t = "dropdown",
                    i = "bs.dropdown",
                    a = "." + i,
                    l = ".data-api",
                    c = e.fn[t],
                    u = new RegExp("38|40|27"),
                    f = {
                        HIDE: "hide" + a,
                        HIDDEN: "hidden" + a,
                        SHOW: "show" + a,
                        SHOWN: "shown" + a,
                        CLICK: "click" + a,
                        CLICK_DATA_API: "click" + a + l,
                        KEYDOWN_DATA_API: "keydown" + a + l,
                        KEYUP_DATA_API: "keyup" + a + l
                    },
                    d = "disabled",
                    p = "show",
                    h = "dropup",
                    m = "dropdown-menu-right",
                    g = '[data-toggle="dropdown"]',
                    v = ".dropdown-menu",
                    y = {
                        offset: 0,
                        flip: !0,
                        boundary: "scrollParent"
                    },
                    b = {
                        offset: "(number|string|function)",
                        flip: "boolean",
                        boundary: "(string|element)"
                    },
                    w = function () {
                        function l(e, t) {
                            this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                        }
                        var c = l.prototype;
                        return c.toggle = function () {
                            if (!this._element.disabled && !e(this._element).hasClass(d)) {
                                var t = l._getParentFromElement(this._element),
                                    i = e(this._menu).hasClass(p);
                                if (l._clearMenus(), !i) {
                                    var r = {
                                        relatedTarget: this._element
                                    },
                                        o = e.Event(f.SHOW, r);
                                    if (e(t).trigger(o), !o.isDefaultPrevented()) {
                                        if (!this._inNavbar) {
                                            if (void 0 === n) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                            var s = this._element;
                                            e(t).hasClass(h) && (e(this._menu).hasClass("dropdown-menu-left") || e(this._menu).hasClass(m)) && (s = t), "scrollParent" !== this._config.boundary && e(t).addClass("position-static"), this._popper = new n(s, this._menu, this._getPopperConfig())
                                        }
                                        "ontouchstart" in document.documentElement && !e(t).closest(".navbar-nav").length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(p), e(t).toggleClass(p).trigger(e.Event(f.SHOWN, r))
                                    }
                                }
                            }
                        }, c.dispose = function () {
                            e.removeData(this._element, i), e(this._element).off(a), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                        }, c.update = function () {
                            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                        }, c._addEventListeners = function () {
                            var t = this;
                            e(this._element).on(f.CLICK, function (e) {
                                e.preventDefault(), e.stopPropagation(), t.toggle()
                            })
                        }, c._getConfig = function (n) {
                            return n = o({}, this.constructor.Default, e(this._element).data(), n), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
                        }, c._getMenuElement = function () {
                            if (!this._menu) {
                                var t = l._getParentFromElement(this._element);
                                this._menu = e(t).find(v)[0]
                            }
                            return this._menu
                        }, c._getPlacement = function () {
                            var t = e(this._element).parent(),
                                n = "bottom-start";
                            return t.hasClass(h) ? (n = "top-start", e(this._menu).hasClass(m) && (n = "top-end")) : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass(m) && (n = "bottom-end"), n
                        }, c._detectNavbar = function () {
                            return e(this._element).closest(".navbar").length > 0
                        }, c._getPopperConfig = function () {
                            var e = this,
                                t = {};
                            return "function" == typeof this._config.offset ? t.fn = function (t) {
                                return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}), t
                            } : t.offset = this._config.offset, {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: t,
                                        flip: {
                                            enabled: this._config.flip
                                        },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary
                                        }
                                    }
                                }
                        }, l._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data(i);
                                if (n || (n = new l(this, "object" == typeof t ? t : null), e(this).data(i, n)), "string" == typeof t) {
                                    if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }, l._clearMenus = function (t) {
                            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                                for (var n = e.makeArray(e(g)), r = 0; r < n.length; r++) {
                                    var o = l._getParentFromElement(n[r]),
                                        s = e(n[r]).data(i),
                                        a = {
                                            relatedTarget: n[r]
                                        };
                                    if (s) {
                                        var c = s._menu;
                                        if (e(o).hasClass(p) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
                                            var u = e.Event(f.HIDE, a);
                                            e(o).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(c).removeClass(p), e(o).removeClass(p).trigger(e.Event(f.HIDDEN, a)))
                                        }
                                    }
                                }
                        }, l._getParentFromElement = function (t) {
                            var n, i = s.getSelectorFromElement(t);
                            return i && (n = e(i)[0]), n || t.parentNode
                        }, l._dataApiKeydownHandler = function (t) {
                            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(v).length)) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(d))) {
                                var n = l._getParentFromElement(this),
                                    i = e(n).hasClass(p);
                                if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                                    var r = e(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                    if (r.length) {
                                        var o = r.indexOf(t.target);
                                        38 === t.which && o > 0 && o-- , 40 === t.which && o < r.length - 1 && o++ , o < 0 && (o = 0), r[o].focus()
                                    }
                                } else {
                                    if (27 === t.which) {
                                        var s = e(n).find(g)[0];
                                        e(s).trigger("focus")
                                    }
                                    e(this).trigger("click")
                                }
                            }
                        }, r(l, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return y
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return b
                            }
                        }]), l
                    }();
                return e(document).on(f.KEYDOWN_DATA_API, g, w._dataApiKeydownHandler).on(f.KEYDOWN_DATA_API, v, w._dataApiKeydownHandler).on(f.CLICK_DATA_API + " " + f.KEYUP_DATA_API, w._clearMenus).on(f.CLICK_DATA_API, g, function (t) {
                    t.preventDefault(), t.stopPropagation(), w._jQueryInterface.call(e(this), "toggle")
                }).on(f.CLICK_DATA_API, ".dropdown form", function (e) {
                    e.stopPropagation()
                }), e.fn[t] = w._jQueryInterface, e.fn[t].Constructor = w, e.fn[t].noConflict = function () {
                    return e.fn[t] = c, w._jQueryInterface
                }, w
            }(t),
            d = function (e) {
                var t = "bs.modal",
                    n = "." + t,
                    i = e.fn.modal,
                    a = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    l = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    c = {
                        HIDE: "hide" + n,
                        HIDDEN: "hidden" + n,
                        SHOW: "show" + n,
                        SHOWN: "shown" + n,
                        FOCUSIN: "focusin" + n,
                        RESIZE: "resize" + n,
                        CLICK_DISMISS: "click.dismiss" + n,
                        KEYDOWN_DISMISS: "keydown.dismiss" + n,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + n,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
                        CLICK_DATA_API: "click" + n + ".data-api"
                    },
                    u = "modal-open",
                    f = "fade",
                    d = "show",
                    p = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        STICKY_CONTENT: ".sticky-top",
                        NAVBAR_TOGGLER: ".navbar-toggler"
                    },
                    h = function () {
                        function i(t, n) {
                            this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                        }
                        var h = i.prototype;
                        return h.toggle = function (e) {
                            return this._isShown ? this.hide() : this.show(e)
                        }, h.show = function (t) {
                            var n = this;
                            if (!this._isTransitioning && !this._isShown) {
                                s.supportsTransitionEnd() && e(this._element).hasClass(f) && (this._isTransitioning = !0);
                                var i = e.Event(c.SHOW, {
                                    relatedTarget: t
                                });
                                e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(u), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, p.DATA_DISMISS, function (e) {
                                    return n.hide(e)
                                }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                                    e(n._element).one(c.MOUSEUP_DISMISS, function (t) {
                                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                    })
                                }), this._showBackdrop(function () {
                                    return n._showElement(t)
                                }))
                            }
                        }, h.hide = function (t) {
                            var n = this;
                            if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                                var i = e.Event(c.HIDE);
                                if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                    this._isShown = !1;
                                    var r = s.supportsTransitionEnd() && e(this._element).hasClass(f);
                                    r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(d), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), r ? e(this._element).one(s.TRANSITION_END, function (e) {
                                        return n._hideModal(e)
                                    }).emulateTransitionEnd(300) : this._hideModal()
                                }
                            }
                        }, h.dispose = function () {
                            e.removeData(this._element, t), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                        }, h.handleUpdate = function () {
                            this._adjustDialog()
                        }, h._getConfig = function (e) {
                            return e = o({}, a, e), s.typeCheckConfig("modal", e, l), e
                        }, h._showElement = function (t) {
                            var n = this,
                                i = s.supportsTransitionEnd() && e(this._element).hasClass(f);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), e(this._element).addClass(d), this._config.focus && this._enforceFocus();
                            var r = e.Event(c.SHOWN, {
                                relatedTarget: t
                            }),
                                o = function () {
                                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                                };
                            i ? e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                        }, h._enforceFocus = function () {
                            var t = this;
                            e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
                                document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                            })
                        }, h._setEscapeEvent = function () {
                            var t = this;
                            this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
                                27 === e.which && (e.preventDefault(), t.hide())
                            }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS)
                        }, h._setResizeEvent = function () {
                            var t = this;
                            this._isShown ? e(window).on(c.RESIZE, function (e) {
                                return t.handleUpdate(e)
                            }) : e(window).off(c.RESIZE)
                        }, h._hideModal = function () {
                            var t = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                                e(document.body).removeClass(u), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(c.HIDDEN)
                            })
                        }, h._removeBackdrop = function () {
                            this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                        }, h._showBackdrop = function (t) {
                            var n = this,
                                i = e(this._element).hasClass(f) ? f : "";
                            if (this._isShown && this._config.backdrop) {
                                var r = s.supportsTransitionEnd() && i;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), r && s.reflow(this._backdrop), e(this._backdrop).addClass(d), !t) return;
                                if (!r) return void t();
                                e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(150)
                            } else if (!this._isShown && this._backdrop) {
                                e(this._backdrop).removeClass(d);
                                var o = function () {
                                    n._removeBackdrop(), t && t()
                                };
                                s.supportsTransitionEnd() && e(this._element).hasClass(f) ? e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                            } else t && t()
                        }, h._adjustDialog = function () {
                            var e = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, h._resetAdjustments = function () {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, h._checkScrollbar = function () {
                            var e = document.body.getBoundingClientRect();
                            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }, h._setScrollbar = function () {
                            var t = this;
                            if (this._isBodyOverflowing) {
                                e(p.FIXED_CONTENT).each(function (n, i) {
                                    var r = e(i)[0].style.paddingRight,
                                        o = e(i).css("padding-right");
                                    e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                                }), e(p.STICKY_CONTENT).each(function (n, i) {
                                    var r = e(i)[0].style.marginRight,
                                        o = e(i).css("margin-right");
                                    e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                                }), e(p.NAVBAR_TOGGLER).each(function (n, i) {
                                    var r = e(i)[0].style.marginRight,
                                        o = e(i).css("margin-right");
                                    e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                                });
                                var n = document.body.style.paddingRight,
                                    i = e("body").css("padding-right");
                                e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                            }
                        }, h._resetScrollbar = function () {
                            e(p.FIXED_CONTENT).each(function (t, n) {
                                var i = e(n).data("padding-right");
                                void 0 !== i && e(n).css("padding-right", i).removeData("padding-right")
                            }), e(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function (t, n) {
                                var i = e(n).data("margin-right");
                                void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                            });
                            var t = e("body").data("padding-right");
                            void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
                        }, h._getScrollbarWidth = function () {
                            var e = document.createElement("div");
                            e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                            var t = e.getBoundingClientRect().width - e.clientWidth;
                            return document.body.removeChild(e), t
                        }, i._jQueryInterface = function (n, r) {
                            return this.each(function () {
                                var s = e(this).data(t),
                                    a = o({}, i.Default, e(this).data(), "object" == typeof n && n);
                                if (s || (s = new i(this, a), e(this).data(t, s)), "string" == typeof n) {
                                    if (void 0 === s[n]) throw new Error('No method named "' + n + '"');
                                    s[n](r)
                                } else a.show && s.show(r)
                            })
                        }, r(i, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }]), i
                    }();
                return e(document).on(c.CLICK_DATA_API, p.DATA_TOGGLE, function (n) {
                    var i, r = this,
                        a = s.getSelectorFromElement(this);
                    a && (i = e(a)[0]);
                    var l = e(i).data(t) ? "toggle" : o({}, e(i).data(), e(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
                    var u = e(i).one(c.SHOW, function (t) {
                        t.isDefaultPrevented() || u.one(c.HIDDEN, function () {
                            e(r).is(":visible") && r.focus()
                        })
                    });
                    h._jQueryInterface.call(e(i), l, this)
                }), e.fn.modal = h._jQueryInterface, e.fn.modal.Constructor = h, e.fn.modal.noConflict = function () {
                    return e.fn.modal = i, h._jQueryInterface
                }, h
            }(t),
            p = function (e) {
                var t = "tooltip",
                    i = "bs.tooltip",
                    a = "." + i,
                    l = e.fn[t],
                    c = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                    u = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(number|string)",
                        container: "(string|element|boolean)",
                        fallbackPlacement: "(string|array)",
                        boundary: "(string|element)"
                    },
                    f = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: "right",
                        BOTTOM: "bottom",
                        LEFT: "left"
                    },
                    d = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: 0,
                        container: !1,
                        fallbackPlacement: "flip",
                        boundary: "scrollParent"
                    },
                    p = "show",
                    h = "out",
                    m = {
                        HIDE: "hide" + a,
                        HIDDEN: "hidden" + a,
                        SHOW: "show" + a,
                        SHOWN: "shown" + a,
                        INSERTED: "inserted" + a,
                        CLICK: "click" + a,
                        FOCUSIN: "focusin" + a,
                        FOCUSOUT: "focusout" + a,
                        MOUSEENTER: "mouseenter" + a,
                        MOUSELEAVE: "mouseleave" + a
                    },
                    g = "fade",
                    v = "show",
                    y = "hover",
                    b = "focus",
                    w = function () {
                        function l(e, t) {
                            if (void 0 === n) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                        }
                        var w = l.prototype;
                        return w.enable = function () {
                            this._isEnabled = !0
                        }, w.disable = function () {
                            this._isEnabled = !1
                        }, w.toggleEnabled = function () {
                            this._isEnabled = !this._isEnabled
                        }, w.toggle = function (t) {
                            if (this._isEnabled)
                                if (t) {
                                    var n = this.constructor.DATA_KEY,
                                        i = e(t.currentTarget).data(n);
                                    i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                                } else {
                                    if (e(this.getTipElement()).hasClass(v)) return void this._leave(null, this);
                                    this._enter(null, this)
                                }
                        }, w.dispose = function () {
                            clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                        }, w.show = function () {
                            var t = this;
                            if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var i = e.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                e(this.element).trigger(i);
                                var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                                if (i.isDefaultPrevented() || !r) return;
                                var o = this.getTipElement(),
                                    a = s.getUID(this.constructor.NAME);
                                o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(o).addClass(g);
                                var c = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                    u = this._getAttachment(c);
                                this.addAttachmentClass(u);
                                var f = !1 === this.config.container ? document.body : e(this.config.container);
                                e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(f), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                    placement: u,
                                    modifiers: {
                                        offset: {
                                            offset: this.config.offset
                                        },
                                        flip: {
                                            behavior: this.config.fallbackPlacement
                                        },
                                        arrow: {
                                            element: ".arrow"
                                        },
                                        preventOverflow: {
                                            boundariesElement: this.config.boundary
                                        }
                                    },
                                    onCreate: function (e) {
                                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                    },
                                    onUpdate: function (e) {
                                        t._handlePopperPlacementChange(e)
                                    }
                                }), e(o).addClass(v), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                                var d = function () {
                                    t.config.animation && t._fixTransition();
                                    var n = t._hoverState;
                                    t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === h && t._leave(null, t)
                                };
                                s.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(this.tip).one(s.TRANSITION_END, d).emulateTransitionEnd(l._TRANSITION_DURATION) : d()
                            }
                        }, w.hide = function (t) {
                            var n = this,
                                i = this.getTipElement(),
                                r = e.Event(this.constructor.Event.HIDE),
                                o = function () {
                                    n._hoverState !== p && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                                };
                            e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(v), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger[b] = !1, this._activeTrigger[y] = !1, s.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(i).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                        }, w.update = function () {
                            null !== this._popper && this._popper.scheduleUpdate()
                        }, w.isWithContent = function () {
                            return Boolean(this.getTitle())
                        }, w.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-tooltip-" + t)
                        }, w.getTipElement = function () {
                            return this.tip = this.tip || e(this.config.template)[0], this.tip
                        }, w.setContent = function () {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(g + " " + v)
                        }, w.setElementContent = function (t, n) {
                            var i = this.config.html;
                            "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                        }, w.getTitle = function () {
                            var e = this.element.getAttribute("data-original-title");
                            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                        }, w._getAttachment = function (e) {
                            return f[e.toUpperCase()]
                        }, w._setListeners = function () {
                            var t = this;
                            this.config.trigger.split(" ").forEach(function (n) {
                                if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                    return t.toggle(e)
                                });
                                else if ("manual" !== n) {
                                    var i = n === y ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                        r = n === y ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                    e(t.element).on(i, t.config.selector, function (e) {
                                        return t._enter(e)
                                    }).on(r, t.config.selector, function (e) {
                                        return t._leave(e)
                                    })
                                }
                                e(t.element).closest(".modal").on("hide.bs.modal", function () {
                                    return t.hide()
                                })
                            }), this.config.selector ? this.config = o({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }, w._fixTitle = function () {
                            var e = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, w._enter = function (t, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? b : y] = !0), e(n.getTipElement()).hasClass(v) || n._hoverState === p ? n._hoverState = p : (clearTimeout(n._timeout), n._hoverState = p, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                                n._hoverState === p && n.show()
                            }, n.config.delay.show) : n.show())
                        }, w._leave = function (t, n) {
                            var i = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? b : y] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                                n._hoverState === h && n.hide()
                            }, n.config.delay.hide) : n.hide())
                        }, w._isWithActiveTrigger = function () {
                            for (var e in this._activeTrigger)
                                if (this._activeTrigger[e]) return !0;
                            return !1
                        }, w._getConfig = function (n) {
                            return "number" == typeof (n = o({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                                show: n.delay,
                                hide: n.delay
                            }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
                        }, w._getDelegateConfig = function () {
                            var e = {};
                            if (this.config)
                                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                            return e
                        }, w._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(c);
                            null !== n && n.length > 0 && t.removeClass(n.join(""))
                        }, w._handlePopperPlacementChange = function (e) {
                            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                        }, w._fixTransition = function () {
                            var t = this.getTipElement(),
                                n = this.config.animation;
                            null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                        }, l._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data(i),
                                    r = "object" == typeof t && t;
                                if ((n || !/dispose|hide/.test(t)) && (n || (n = new l(this, r), e(this).data(i, n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }, r(l, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return d
                            }
                        }, {
                            key: "NAME",
                            get: function () {
                                return t
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function () {
                                return i
                            }
                        }, {
                            key: "Event",
                            get: function () {
                                return m
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function () {
                                return a
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return u
                            }
                        }]), l
                    }();
                return e.fn[t] = w._jQueryInterface, e.fn[t].Constructor = w, e.fn[t].noConflict = function () {
                    return e.fn[t] = l, w._jQueryInterface
                }, w
            }(t),
            h = function (e) {
                var t = "popover",
                    n = "bs.popover",
                    i = "." + n,
                    s = e.fn[t],
                    a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                    l = o({}, p.Default, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    }),
                    c = o({}, p.DefaultType, {
                        content: "(string|element|function)"
                    }),
                    u = {
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        INSERTED: "inserted" + i,
                        CLICK: "click" + i,
                        FOCUSIN: "focusin" + i,
                        FOCUSOUT: "focusout" + i,
                        MOUSEENTER: "mouseenter" + i,
                        MOUSELEAVE: "mouseleave" + i
                    },
                    f = function (o) {
                        function s() {
                            return o.apply(this, arguments) || this
                        } ! function (e, t) {
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
                        }(s, o);
                        var f = s.prototype;
                        return f.isWithContent = function () {
                            return this.getTitle() || this._getContent()
                        }, f.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-popover-" + t)
                        }, f.getTipElement = function () {
                            return this.tip = this.tip || e(this.config.template)[0], this.tip
                        }, f.setContent = function () {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(".popover-header"), this.getTitle());
                            var n = this._getContent();
                            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
                        }, f._getContent = function () {
                            return this.element.getAttribute("data-content") || this.config.content
                        }, f._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(a);
                            null !== n && n.length > 0 && t.removeClass(n.join(""))
                        }, s._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = e(this).data(n),
                                    r = "object" == typeof t ? t : null;
                                if ((i || !/destroy|hide/.test(t)) && (i || (i = new s(this, r), e(this).data(n, i)), "string" == typeof t)) {
                                    if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                    i[t]()
                                }
                            })
                        }, r(s, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return l
                            }
                        }, {
                            key: "NAME",
                            get: function () {
                                return t
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function () {
                                return n
                            }
                        }, {
                            key: "Event",
                            get: function () {
                                return u
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function () {
                                return i
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return c
                            }
                        }]), s
                    }(p);
                return e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
                    return e.fn[t] = s, f._jQueryInterface
                }, f
            }(t),
            m = function (e) {
                var t = "scrollspy",
                    n = "bs.scrollspy",
                    i = "." + n,
                    a = e.fn[t],
                    l = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    c = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    u = {
                        ACTIVATE: "activate" + i,
                        SCROLL: "scroll" + i,
                        LOAD_DATA_API: "load" + i + ".data-api"
                    },
                    f = "active",
                    d = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        NAV_LIST_GROUP: ".nav, .list-group",
                        NAV_LINKS: ".nav-link",
                        NAV_ITEMS: ".nav-item",
                        LIST_ITEMS: ".list-group-item",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    },
                    p = "position",
                    h = function () {
                        function a(t, n) {
                            var i = this;
                            this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + d.NAV_LINKS + "," + this._config.target + " " + d.LIST_ITEMS + "," + this._config.target + " " + d.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(u.SCROLL, function (e) {
                                return i._process(e)
                            }), this.refresh(), this._process()
                        }
                        var h = a.prototype;
                        return h.refresh = function () {
                            var t = this,
                                n = this._scrollElement !== this._scrollElement.window ? p : "offset",
                                i = "auto" === this._config.method ? n : this._config.method,
                                r = i === p ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                                var n, o = s.getSelectorFromElement(t);
                                if (o && (n = e(o)[0]), n) {
                                    var a = n.getBoundingClientRect();
                                    if (a.width || a.height) return [e(n)[i]().top + r, o]
                                }
                                return null
                            }).filter(function (e) {
                                return e
                            }).sort(function (e, t) {
                                return e[0] - t[0]
                            }).forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1])
                            })
                        }, h.dispose = function () {
                            e.removeData(this._element, n), e(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }, h._getConfig = function (n) {
                            if ("string" != typeof (n = o({}, l, n)).target) {
                                var i = e(n.target).attr("id");
                                i || (i = s.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                            }
                            return s.typeCheckConfig(t, n, c), n
                        }, h._getScrollTop = function () {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                        }, h._getScrollHeight = function () {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }, h._getOffsetHeight = function () {
                            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                        }, h._process = function () {
                            var e = this._getScrollTop() + this._config.offset,
                                t = this._getScrollHeight(),
                                n = this._config.offset + t - this._getOffsetHeight();
                            if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i)
                            } else {
                                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                                for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                            }
                        }, h._activate = function (t) {
                            this._activeTarget = t, this._clear();
                            var n = this._selector.split(",");
                            n = n.map(function (e) {
                                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                            });
                            var i = e(n.join(","));
                            i.hasClass("dropdown-item") ? (i.closest(d.DROPDOWN).find(d.DROPDOWN_TOGGLE).addClass(f), i.addClass(f)) : (i.addClass(f), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_LINKS + ", " + d.LIST_ITEMS).addClass(f), i.parents(d.NAV_LIST_GROUP).prev(d.NAV_ITEMS).children(d.NAV_LINKS).addClass(f)), e(this._scrollElement).trigger(u.ACTIVATE, {
                                relatedTarget: t
                            })
                        }, h._clear = function () {
                            e(this._selector).filter(d.ACTIVE).removeClass(f)
                        }, a._jQueryInterface = function (t) {
                            console.log(t);
                            return this.each(function () {
                                var i = e(this).data(n);
                                if (i || (i = new a(this, "object" == typeof t && t), e(this).data(n, i)), "string" == typeof t) {
                                    if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                    i[t]()
                                }
                            })
                        }, r(a, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return l
                            }
                        }]), a
                    }();
                return e(window).on(u.LOAD_DATA_API, function () {
                    for (var t = e.makeArray(e(d.DATA_SPY)), n = t.length; n--;) {
                        var i = e(t[n]);
                        h._jQueryInterface.call(i, i.data())
                    }
                }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
                    return e.fn[t] = a, h._jQueryInterface
                }, h
            }(t),
            g = function (e) {
                var t = "bs.tab",
                    n = "." + t,
                    i = e.fn.tab,
                    o = {
                        HIDE: "hide" + n,
                        HIDDEN: "hidden" + n,
                        SHOW: "show" + n,
                        SHOWN: "shown" + n,
                        CLICK_DATA_API: "click.bs.tab.data-api"
                    },
                    a = "active",
                    l = "show",
                    c = ".active",
                    u = "> li > .active",
                    f = function () {
                        function n(e) {
                            this._element = e
                        }
                        var i = n.prototype;
                        return i.show = function () {
                            var t = this;
                            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(a) || e(this._element).hasClass("disabled"))) {
                                var n, i, r = e(this._element).closest(".nav, .list-group")[0],
                                    l = s.getSelectorFromElement(this._element);
                                if (r) {
                                    var f = "UL" === r.nodeName ? u : c;
                                    i = (i = e.makeArray(e(r).find(f)))[i.length - 1]
                                }
                                var d = e.Event(o.HIDE, {
                                    relatedTarget: this._element
                                }),
                                    p = e.Event(o.SHOW, {
                                        relatedTarget: i
                                    });
                                if (i && e(i).trigger(d), e(this._element).trigger(p), !p.isDefaultPrevented() && !d.isDefaultPrevented()) {
                                    l && (n = e(l)[0]), this._activate(this._element, r);
                                    var h = function () {
                                        var n = e.Event(o.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                            r = e.Event(o.SHOWN, {
                                                relatedTarget: i
                                            });
                                        e(i).trigger(n), e(t._element).trigger(r)
                                    };
                                    n ? this._activate(n, n.parentNode, h) : h()
                                }
                            }
                        }, i.dispose = function () {
                            e.removeData(this._element, t), this._element = null
                        }, i._activate = function (t, n, i) {
                            var r = this,
                                o = ("UL" === n.nodeName ? e(n).find(u) : e(n).children(c))[0],
                                a = i && s.supportsTransitionEnd() && o && e(o).hasClass("fade"),
                                l = function () {
                                    return r._transitionComplete(t, o, i)
                                };
                            o && a ? e(o).one(s.TRANSITION_END, l).emulateTransitionEnd(150) : l()
                        }, i._transitionComplete = function (t, n, i) {
                            if (n) {
                                e(n).removeClass(l + " " + a);
                                var r = e(n.parentNode).find("> .dropdown-menu .active")[0];
                                r && e(r).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                            }
                            if (e(t).addClass(a), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), s.reflow(t), e(t).addClass(l), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                                var o = e(t).closest(".dropdown")[0];
                                o && e(o).find(".dropdown-toggle").addClass(a), t.setAttribute("aria-expanded", !0)
                            }
                            i && i()
                        }, n._jQueryInterface = function (i) {
                            return this.each(function () {
                                var r = e(this),
                                    o = r.data(t);
                                if (o || (o = new n(this), r.data(t, o)), "string" == typeof i) {
                                    if (void 0 === o[i]) throw new Error('No method named "' + i + '"');
                                    o[i]()
                                }
                            })
                        }, r(n, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0-beta.3"
                            }
                        }]), n
                    }();
                return e(document).on(o.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
                    t.preventDefault(), f._jQueryInterface.call(e(this), "show")
                }), e.fn.tab = f._jQueryInterface, e.fn.tab.Constructor = f, e.fn.tab.noConflict = function () {
                    return e.fn.tab = i, f._jQueryInterface
                }, f
            }(t);
        ! function (e) {
            if (void 0 === e) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(t), e.Util = s, e.Alert = a, e.Button = l, e.Carousel = c, e.Collapse = u, e.Dropdown = f, e.Modal = d, e.Popover = h, e.Scrollspy = m, e.Tab = g, e.Tooltip = p, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }),
    //function() {
    //    var e, t, n, i, r, o, s, a, l, c, u, f, d, p, h, m, g, v, y, b, w, _, E, x, T, C, A, S, j, N, D, k, O, I, L, P, q, H, R, M, F, W, U, B, K, V, Q, $, G, z = [].slice,
    //        Y = {}.hasOwnProperty,
    //        X = function(e, t) {
    //            function n() {
    //                this.constructor = e
    //            }
    //            for (var i in t) Y.call(t, i) && (e[i] = t[i]);
    //            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    //        },
    //        J = [].indexOf || function(e) {
    //            for (var t = 0, n = this.length; n > t; t++)
    //                if (t in this && this[t] === e) return t;
    //            return -1
    //        };
    //    for (w = {
    //            catchupTime: 100,
    //            initialRate: .03,
    //            minTime: 250,
    //            ghostTime: 100,
    //            maxProgressPerFrame: 20,
    //            easeFactor: 1.25,
    //            startOnPageLoad: !0,
    //            restartOnPushState: !0,
    //            restartOnRequestAfter: 500,
    //            target: "body",
    //            elements: {
    //                checkInterval: 100,
    //                selectors: ["body"]
    //            },
    //            eventLag: {
    //                minSamples: 10,
    //                sampleCount: 3,
    //                lagThreshold: 3
    //            },
    //            ajax: {
    //                trackMethods: ["GET"],
    //                trackWebSockets: !0,
    //                ignoreURLs: []
    //            }
    //        }, j = function() {
    //            var e;
    //            return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
    //        }, D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, b = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == D && (D = function(e) {
    //            return setTimeout(e, 50)
    //        }, b = function(e) {
    //            return clearTimeout(e)
    //        }), O = function(e) {
    //            var t, n;
    //            return t = j(), (n = function() {
    //                var i;
    //                return (i = j() - t) >= 33 ? (t = j(), e(i, function() {
    //                    return D(n)
    //                })) : setTimeout(n, 33 - i)
    //            })()
    //        }, k = function() {
    //            var e, t, n;
    //            return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? z.call(arguments, 2) : [], "function" == typeof n[t] ? n[t].apply(n, e) : n[t]
    //        }, _ = function() {
    //            var e, t, n, i, r, o, s;
    //            for (t = arguments[0], o = 0, s = (i = 2 <= arguments.length ? z.call(arguments, 1) : []).length; s > o; o++)
    //                if (n = i[o])
    //                    for (e in n) Y.call(n, e) && (r = n[e], null != t[e] && "object" == typeof t[e] && null != r && "object" == typeof r ? _(t[e], r) : t[e] = r);
    //            return t
    //        }, g = function(e) {
    //            var t, n, i, r, o;
    //            for (n = t = 0, r = 0, o = e.length; o > r; r++) i = e[r], n += Math.abs(i), t++;
    //            return n / t
    //        }, x = function(e, t) {
    //            var n, i, r;
    //            if (null == e && (e = "options"), null == t && (t = !0), r = document.querySelector("[data-pace-" + e + "]")) {
    //                if (n = r.getAttribute("data-pace-" + e), !t) return n;
    //                try {
    //                    return JSON.parse(n)
    //                } catch (e) {
    //                    return i = e, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0
    //                }
    //            }
    //        }, s = function() {
    //            function e() {}
    //            return e.prototype.on = function(e, t, n, i) {
    //                var r;
    //                return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (r = this.bindings)[e] && (r[e] = []), this.bindings[e].push({
    //                    handler: t,
    //                    ctx: n,
    //                    once: i
    //                })
    //            }, e.prototype.once = function(e, t, n) {
    //                return this.on(e, t, n, !0)
    //            }, e.prototype.off = function(e, t) {
    //                var n, i, r;
    //                if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
    //                    if (null == t) return delete this.bindings[e];
    //                    for (n = 0, r = []; n < this.bindings[e].length;) r.push(this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : n++);
    //                    return r
    //                }
    //            }, e.prototype.trigger = function() {
    //                var e, t, n, i, r, o, s, a, l;
    //                if (n = arguments[0], e = 2 <= arguments.length ? z.call(arguments, 1) : [], null != (s = this.bindings) ? s[n] : void 0) {
    //                    for (r = 0, l = []; r < this.bindings[n].length;) a = this.bindings[n][r], i = a.handler, t = a.ctx, o = a.once, i.apply(null != t ? t : this, e), l.push(o ? this.bindings[n].splice(r, 1) : r++);
    //                    return l
    //                }
    //            }, e
    //        }(), c = window.Pace || {}, window.Pace = c, _(c, s.prototype), N = c.options = _({}, w, window.paceOptions, x()), U = 0, K = (Q = ["ajax", "document", "eventLag", "elements"]).length; K > U; U++) q = Q[U], !0 === N[q] && (N[q] = w[q]);
    //    l = function(e) {
    //        function t() {
    //            return $ = t.__super__.constructor.apply(this, arguments)
    //        }
    //        return X(t, e), t
    //    }(Error), t = function() {
    //        function e() {
    //            this.progress = 0
    //        }
    //        return e.prototype.getElement = function() {
    //            var e;
    //            if (null == this.el) {
    //                if (!(e = document.querySelector(N.target))) throw new l;
    //                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
    //            }
    //            return this.el
    //        }, e.prototype.finish = function() {
    //            var e;
    //            return e = this.getElement(), e.className = e.className.replace("pace-active", ""), e.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
    //        }, e.prototype.update = function(e) {
    //            return this.progress = e, this.render()
    //        }, e.prototype.destroy = function() {
    //            try {
    //                this.getElement().parentNode.removeChild(this.getElement())
    //            } catch (e) {
    //                l = e
    //            }
    //            return this.el = void 0
    //        }, e.prototype.render = function() {
    //            var e, t, n, i, r, o, s;
    //            if (null == document.querySelector(N.target)) return !1;
    //            for (e = this.getElement(), i = "translate3d(" + this.progress + "%, 0, 0)", r = 0, o = (s = ["webkitTransform", "msTransform", "transform"]).length; o > r; r++) t = s[r], e.children[0].style[t] = i;
    //            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), e.children[0].setAttribute("data-progress", "" + n)), this.lastRenderedProgress = this.progress
    //        }, e.prototype.done = function() {
    //            return this.progress >= 100
    //        }, e
    //    }(), a = function() {
    //        function e() {
    //            this.bindings = {}
    //        }
    //        return e.prototype.trigger = function(e, t) {
    //            var n, i, r, o, s;
    //            if (null != this.bindings[e]) {
    //                for (s = [], i = 0, r = (o = this.bindings[e]).length; r > i; i++) n = o[i], s.push(n.call(this, t));
    //                return s
    //            }
    //        }, e.prototype.on = function(e, t) {
    //            var n;
    //            return null == (n = this.bindings)[e] && (n[e] = []), this.bindings[e].push(t)
    //        }, e
    //    }(), W = window.XMLHttpRequest, F = window.XDomainRequest, M = window.WebSocket, E = function(e, t) {
    //        var n, i;
    //        i = [];
    //        for (n in t.prototype) try {
    //            i.push(null == e[n] && "function" != typeof t[n] ? "function" == typeof Object.defineProperty ? Object.defineProperty(e, n, {
    //                get: function() {
    //                    return t.prototype[n]
    //                },
    //                configurable: !0,
    //                enumerable: !0
    //            }) : e[n] = t.prototype[n] : void 0)
    //        } catch (e) {
    //            e
    //        }
    //        return i
    //    }, A = [], c.ignore = function() {
    //        var e, t, n;
    //        return t = arguments[0], e = 2 <= arguments.length ? z.call(arguments, 1) : [], A.unshift("ignore"), n = t.apply(null, e), A.shift(), n
    //    }, c.track = function() {
    //        var e, t, n;
    //        return t = arguments[0], e = 2 <= arguments.length ? z.call(arguments, 1) : [], A.unshift("track"), n = t.apply(null, e), A.shift(), n
    //    }, P = function(e) {
    //        var t;
    //        if (null == e && (e = "GET"), "track" === A[0]) return "force";
    //        if (!A.length && N.ajax) {
    //            if ("socket" === e && N.ajax.trackWebSockets) return !0;
    //            if (t = e.toUpperCase(), J.call(N.ajax.trackMethods, t) >= 0) return !0
    //        }
    //        return !1
    //    }, u = function(e) {
    //        function t() {
    //            var e, n = this;
    //            t.__super__.constructor.apply(this, arguments), e = function(e) {
    //                var t;
    //                return t = e.open, e.open = function(i, r) {
    //                    return P(i) && n.trigger("request", {
    //                        type: i,
    //                        url: r,
    //                        request: e
    //                    }), t.apply(e, arguments)
    //                }
    //            }, window.XMLHttpRequest = function(t) {
    //                var n;
    //                return n = new W(t), e(n), n
    //            };
    //            try {
    //                E(window.XMLHttpRequest, W)
    //            } catch (e) {}
    //            if (null != F) {
    //                window.XDomainRequest = function() {
    //                    var t;
    //                    return t = new F, e(t), t
    //                };
    //                try {
    //                    E(window.XDomainRequest, F)
    //                } catch (e) {}
    //            }
    //            if (null != M && N.ajax.trackWebSockets) {
    //                window.WebSocket = function(e, t) {
    //                    var i;
    //                    return i = null != t ? new M(e, t) : new M(e), P("socket") && n.trigger("request", {
    //                        type: "socket",
    //                        url: e,
    //                        protocols: t,
    //                        request: i
    //                    }), i
    //                };
    //                try {
    //                    E(window.WebSocket, M)
    //                } catch (e) {}
    //            }
    //        }
    //        return X(t, a), t
    //    }(), B = null, L = function(e) {
    //        var t, n, i, r;
    //        for (n = 0, i = (r = N.ajax.ignoreURLs).length; i > n; n++)
    //            if ("string" == typeof(t = r[n])) {
    //                if (-1 !== e.indexOf(t)) return !0
    //            } else if (t.test(e)) return !0;
    //        return !1
    //    }, (T = function() {
    //        return null == B && (B = new u), B
    //    })().on("request", function(t) {
    //        var n, i, r, o, s;
    //        return o = t.type, r = t.request, s = t.url, L(s) ? void 0 : c.running || !1 === N.restartOnRequestAfter && "force" !== P(o) ? void 0 : (i = arguments, "boolean" == typeof(n = N.restartOnRequestAfter || 0) && (n = 0), setTimeout(function() {
    //            var t, n, s, a, l;
    //            if ("socket" === o ? r.readyState < 2 : 0 < (s = r.readyState) && 4 > s) {
    //                for (c.restart(), l = [], t = 0, n = (a = c.sources).length; n > t; t++) {
    //                    if ((q = a[t]) instanceof e) {
    //                        q.watch.apply(q, i);
    //                        break
    //                    }
    //                    l.push(void 0)
    //                }
    //                return l
    //            }
    //        }, n))
    //    }), e = function() {
    //        function e() {
    //            var e = this;
    //            this.elements = [], T().on("request", function() {
    //                return e.watch.apply(e, arguments)
    //            })
    //        }
    //        return e.prototype.watch = function(e) {
    //            var t, n, i, r;
    //            return i = e.type, t = e.request, r = e.url, L(r) ? void 0 : (n = "socket" === i ? new p(t) : new h(t), this.elements.push(n))
    //        }, e
    //    }(), h = function() {
    //        return function(e) {
    //            var t, n, i, r, o, s = this;
    //            if (this.progress = 0, null != window.ProgressEvent)
    //                for (e.addEventListener("progress", function(e) {
    //                        return s.progress = e.lengthComputable ? 100 * e.loaded / e.total : s.progress + (100 - s.progress) / 2
    //                    }, !1), o = ["load", "abort", "timeout", "error"], n = 0, i = o.length; i > n; n++) t = o[n], e.addEventListener(t, function() {
    //                    return s.progress = 100
    //                }, !1);
    //            else r = e.onreadystatechange, e.onreadystatechange = function() {
    //                var t;
    //                return 0 === (t = e.readyState) || 4 === t ? s.progress = 100 : 3 === e.readyState && (s.progress = 50), "function" == typeof r ? r.apply(null, arguments) : void 0
    //            }
    //        }
    //    }(), p = function() {
    //        return function(e) {
    //            var t, n, i, r, o = this;
    //            for (this.progress = 0, n = 0, i = (r = ["error", "open"]).length; i > n; n++) t = r[n], e.addEventListener(t, function() {
    //                return o.progress = 100
    //            }, !1)
    //        }
    //    }(), i = function() {
    //        return function(e) {
    //            var t, n, i, o;
    //            for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), n = 0, i = (o = e.selectors).length; i > n; n++) t = o[n], this.elements.push(new r(t))
    //        }
    //    }(), r = function() {
    //        function e(e) {
    //            this.selector = e, this.progress = 0, this.check()
    //        }
    //        return e.prototype.check = function() {
    //            var e = this;
    //            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
    //                return e.check()
    //            }, N.elements.checkInterval)
    //        }, e.prototype.done = function() {
    //            return this.progress = 100
    //        }, e
    //    }(), n = function() {
    //        function e() {
    //            var e, t, n = this;
    //            this.progress = null != (t = this.states[document.readyState]) ? t : 100, e = document.onreadystatechange, document.onreadystatechange = function() {
    //                return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0
    //            }
    //        }
    //        return e.prototype.states = {
    //            loading: 0,
    //            interactive: 50,
    //            complete: 100
    //        }, e
    //    }(), o = function() {
    //        return function() {
    //            var e, t, n, i, r, o = this;
    //            this.progress = 0, e = 0, r = [], i = 0, n = j(), t = setInterval(function() {
    //                var s;
    //                return s = j() - n - 50, n = j(), r.push(s), r.length > N.eventLag.sampleCount && r.shift(), e = g(r), ++i >= N.eventLag.minSamples && e < N.eventLag.lagThreshold ? (o.progress = 100, clearInterval(t)) : o.progress = 3 / (e + 3) * 100
    //            }, 50)
    //        }
    //    }(), d = function() {
    //        function e(e) {
    //            this.source = e, this.last = this.sinceLastUpdate = 0, this.rate = N.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = k(this.source, "progress"))
    //        }
    //        return e.prototype.tick = function(e, t) {
    //            var n;
    //            return null == t && (t = k(this.source, "progress")), t >= 100 && (this.done = !0), t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / N.catchupTime, this.sinceLastUpdate = 0, this.last = t), t > this.progress && (this.progress += this.catchup * e), n = 1 - Math.pow(this.progress / 100, N.easeFactor), this.progress += n * this.rate * e, this.progress = Math.min(this.lastProgress + N.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
    //        }, e
    //    }(), H = null, I = null, v = null, R = null, m = null, y = null, c.running = !1, C = function() {
    //        return N.restartOnPushState ? c.restart() : void 0
    //    }, null != window.history.pushState && (V = window.history.pushState, window.history.pushState = function() {
    //        return C(), V.apply(window.history, arguments)
    //    }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function() {
    //        return C(), G.apply(window.history, arguments)
    //    }), f = {
    //        ajax: e,
    //        elements: i,
    //        document: n,
    //        eventLag: o
    //    }, (S = function() {
    //        var e, n, i, r, o, s, a, l;
    //        for (c.sources = H = [], n = 0, r = (s = ["ajax", "elements", "document", "eventLag"]).length; r > n; n++) e = s[n], !1 !== N[e] && H.push(new f[e](N[e]));
    //        for (i = 0, o = (l = null != (a = N.extraSources) ? a : []).length; o > i; i++) q = l[i], H.push(new q(N));
    //        return c.bar = v = new t, I = [], R = new d
    //    })(), c.stop = function() {
    //        return c.trigger("stop"), c.running = !1, v.destroy(), y = !0, null != m && ("function" == typeof b && b(m), m = null), S()
    //    }, c.restart = function() {
    //        return c.trigger("restart"), c.stop(), c.start()
    //    }, c.go = function() {
    //        var e;
    //        return c.running = !0, v.render(), e = j(), y = !1, m = O(function(t, n) {
    //            var i, r, o, s, a, l, u, f, p, h, m, g, b, w, _;
    //            for (100 - v.progress, r = h = 0, o = !0, l = m = 0, b = H.length; b > m; l = ++m)
    //                for (q = H[l], p = null != I[l] ? I[l] : I[l] = [], a = null != (_ = q.elements) ? _ : [q], u = g = 0, w = a.length; w > g; u = ++g) s = a[u], f = null != p[u] ? p[u] : p[u] = new d(s), o &= f.done, f.done || (r++, h += f.tick(t));
    //            return i = h / r, v.update(R.tick(t, i)), v.done() || o || y ? (v.update(100), c.trigger("done"), setTimeout(function() {
    //                return v.finish(), c.running = !1, c.trigger("hide")
    //            }, Math.max(N.ghostTime, Math.max(N.minTime - (j() - e), 0)))) : n()
    //        })
    //    }, c.start = function(e) {
    //        _(N, e), c.running = !0;
    //        try {
    //            v.render()
    //        } catch (e) {
    //            l = e
    //        }
    //        return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
    //    }, "function" == typeof define && define.amd ? define(["pace"], function() {
    //        return c
    //    }) : "object" == typeof exports ? module.exports = c : N.startOnPageLoad && c.start()
    //}.call(this),
    function (e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Pjax = e()
        }
    }(function () {
        return function e(t, n, i) {
            function r(s, a) {
                if (!n[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(s, !0);
                        if (o) return o(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var u = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(u.exports, function (e) {
                        var n = t[s][1][e];
                        return r(n || e)
                    }, u, u.exports, e, t, n, i)
                }
                return n[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
            return r
        }({
            1: [function (e, t, n) {
                var i = e("./lib/clone.js"),
                    r = e("./lib/execute-scripts.js"),
                    o = e("./lib/foreach-els.js"),
                    s = e("./lib/uniqueid.js"),
                    a = e("./lib/events/on.js"),
                    l = e("./lib/events/trigger.js"),
                    c = function (t) {
                        this.firstrun = !0, e("./lib/proto/parse-options.js").apply(this, [t]), this.log("Pjax options", this.options), this.maxUid = this.lastUid = s(), this.parseDOM(document), a(window, "popstate", function (e) {
                            if (e.state) {
                                var t = i(this.options);
                                t.url = e.state.url, t.title = e.state.title, t.history = !1, t.requestOptions = {}, e.state.uid < this.lastUid ? t.backward = !0 : t.forward = !0, this.lastUid = e.state.uid, this.loadUrl(e.state.url, t)
                            }
                        }.bind(this))
                    };
                if (c.prototype = {
                    log: e("./lib/proto/log.js"),
                    getElements: e("./lib/proto/get-elements.js"),
                    parseDOM: e("./lib/proto/parse-dom.js"),
                    refresh: e("./lib/proto/refresh.js"),
                    reload: e("./lib/reload.js"),
                    attachLink: e("./lib/proto/attach-link.js"),
                    attachForm: e("./lib/proto/attach-form.js"),
                    switches: e("./lib/switches.js"),
                    forEachSelectors: function (t, n, i) {
                        return e("./lib/foreach-selectors.js").bind(this)(this.options.selectors, t, n, i)
                    },
                    switchSelectors: function (t, n, i, r) {
                        return e("./lib/switches-selectors.js").bind(this)(this.options.switches, this.options.switchesOptions, t, n, i, r)
                    },
                    latestChance: function (e) {
                        window.location = e
                    },
                    onSwitch: function () {
                        l(window, "resize scroll")
                    },
                    loadContent: function (e, t) {
                        var n = document.implementation.createHTMLDocument("pjax"),
                            i = /<html[^>]+>/gi,
                            s = /\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi,
                            a = e.match(i);
                        if (a && a.length && (a = a[0].match(s)).length && (a.shift(), a.forEach(function (e) {
                            var t = e.trim().split("=");
                            1 === t.length ? n.documentElement.setAttribute(t[0], !0) : n.documentElement.setAttribute(t[0], t[1].slice(1, -1))
                        })), n.documentElement.innerHTML = e, this.log("load content", n.documentElement.attributes, n.documentElement.innerHTML.length), document.activeElement && !document.activeElement.value) try {
                            document.activeElement.blur()
                        } catch (e) { }
                        this.switchSelectors(this.options.selectors, n, document, t);
                        var l = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
                        l && document.activeElement !== l && l.focus(), this.options.selectors.forEach(function (e) {
                            o(document.querySelectorAll(e), function (e) {
                                r(e)
                            })
                        })
                    },
                    doRequest: e("./lib/request.js"),
                    loadUrl: function (e, t) {
                        this.log("load href", e, t), l(document, "pjax:send", t), this.doRequest(e, t.requestOptions, function (n) {

                            if (!1 !== n) {
                                document.activeElement.blur();
                                try {
                                    this.loadContent(n, t)
                                } catch (t) {
                                    if (this.options.debug) throw t;
                                    return console && console.error && console.error("Pjax switch fail: ", t), void this.latestChance(e)
                                }
                                t.history && (this.firstrun && (this.lastUid = this.maxUid = s(), this.firstrun = !1, window.history.replaceState({
                                    url: window.location.href,
                                    title: document.title,
                                    uid: this.maxUid
                                }, document.title)), this.lastUid = this.maxUid = s(), window.history.pushState({
                                    url: e,
                                    title: t.title,
                                    uid: this.maxUid
                                }, t.title, e)), this.forEachSelectors(function (e) {
                                    this.parseDOM(e)
                                }, this), l(document, "pjax:complete pjax:success", t), t.analytics(), !1 !== t.scrollTo && (t.scrollTo.length > 1 ? window.scrollTo(t.scrollTo[0], t.scrollTo[1]) : window.scrollTo(0, t.scrollTo))
                            } else l(document, "pjax:complete pjax:error", t)
                        }.bind(this))
                    }
                }, c.isSupported = e("./lib/is-supported.js"), c.isSupported()) t.exports = c;
                else {
                    var u = function () { };
                    for (var f in c.prototype) c.prototype.hasOwnProperty(f) && "function" == typeof c.prototype[f] && (u[f] = u);
                    t.exports = u
                }
            }, {
                "./lib/clone.js": 2,
                "./lib/events/on.js": 4,
                "./lib/events/trigger.js": 5,
                "./lib/execute-scripts.js": 6,
                "./lib/foreach-els.js": 7,
                "./lib/foreach-selectors.js": 8,
                "./lib/is-supported.js": 9,
                "./lib/proto/attach-form.js": 11,
                "./lib/proto/attach-link.js": 12,
                "./lib/proto/get-elements.js": 13,
                "./lib/proto/log.js": 14,
                "./lib/proto/parse-dom.js": 15,
                "./lib/proto/parse-options.js": 17,
                "./lib/proto/refresh.js": 18,
                "./lib/reload.js": 19,
                "./lib/request.js": 20,
                "./lib/switches-selectors.js": 21,
                "./lib/switches.js": 22,
                "./lib/uniqueid.js": 23
            }],
            2: [function (e, t, n) {
                t.exports = function (e) {
                    if (null === e || "object" != typeof e) return e;
                    var t = e.constructor();
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }
            }, {}],
            3: [function (e, t, n) {
                t.exports = function (e) {
                    var t = e.text || e.textContent || e.innerHTML || "",
                        n = e.src || "",
                        i = e.parentNode || document.querySelector("head") || document.documentElement,
                        r = document.createElement("script");
                    if (t.match("document.write")) return console && console.log && console.log("Script contains document.write. Can�t be executed correctly. Code skipped ", e), !1;
                    if (r.type = "text/javascript", "" != n && (r.src = n, r.onload = function () {
                        document.dispatchEvent(new Event("pjax:complete"))
                    }, r.async = !1), "" != t) try {
                        r.appendChild(document.createTextNode(t))
                    } catch (e) {
                        r.text = t
                    }
                    return i.appendChild(r), ["head", "body"].indexOf(i.tagName.toLowerCase()) > 0 && i.removeChild(r), !0
                }
            }, {}],
            4: [function (e, t, n) {
                var i = e("../foreach-els");
                t.exports = function (e, t, n, r) {
                    (t = "string" == typeof t ? t.split(" ") : t).forEach(function (t) {
                        i(e, function (e) {
                            e.addEventListener(t, n, r)
                        })
                    })
                }
            }, {
                "../foreach-els": 7
            }],
            5: [function (e, t, n) {
                var i = e("../foreach-els");
                t.exports = function (e, t, n) {
                    (t = "string" == typeof t ? t.split(" ") : t).forEach(function (t) {
                        var r;
                        (r = document.createEvent("HTMLEvents")).initEvent(t, !0, !0), r.eventName = t, n && Object.keys(n).forEach(function (e) {
                            r[e] = n[e]
                        }), i(e, function (e) {
                            var t = !1;
                            e.parentNode || e === document || e === window || (t = !0, document.body.appendChild(e)), e.dispatchEvent(r), t && e.parentNode.removeChild(e)
                        })
                    })
                }
            }, {
                "../foreach-els": 7
            }],
            6: [function (e, t, n) {
                var i = e("./foreach-els"),
                    r = e("./eval-script");
                t.exports = function (e) {
                    "script" === e.tagName.toLowerCase() && r(e), i(e.querySelectorAll("script"), function (e) {
                        e.type && "text/javascript" !== e.type.toLowerCase() || (e.parentNode && e.parentNode.removeChild(e), r(e))
                    })
                }
            }, {
                "./eval-script": 3,
                "./foreach-els": 7
            }],
            7: [function (e, t, n) {
                t.exports = function (e, t, n) {
                    return e instanceof HTMLCollection || e instanceof NodeList || e instanceof Array ? Array.prototype.forEach.call(e, t, n) : t.call(n, e)
                }
            }, {}],
            8: [function (e, t, n) {
                var i = e("./foreach-els");
                t.exports = function (e, t, n, r) {
                    r = r || document, e.forEach(function (e) {
                        i(r.querySelectorAll(e), t, n)
                    })
                }
            }, {
                "./foreach-els": 7
            }],
            9: [function (e, t, n) {
                t.exports = function () {
                    return window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
                }
            }, {}],
            10: [function (e, t, n) {
                Function.prototype.bind || (Function.prototype.bind = function (e) {
                    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    var t = Array.prototype.slice.call(arguments, 1),
                        n = this,
                        i = function () { },
                        r = function () {
                            return n.apply(this instanceof i && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                        };
                    return i.prototype = this.prototype, r.prototype = new i, r
                })
            }, {}],
            11: [function (e, t, n) {
                e("../polyfills/Function.prototype.bind");
                var i = e("../events/on"),
                    r = e("../clone"),
                    o = "data-pjax-click-state",
                    s = function (e, t) {
                        this.options.requestOptions = {
                            requestUrl: e.getAttribute("action") || window.location.href,
                            requestMethod: e.getAttribute("method") || "GET"
                        };
                        var n = document.createElement("a");
                        if (n.setAttribute("href", this.options.requestOptions.requestUrl), n.protocol === window.location.protocol && n.host === window.location.host)
                            if (n.pathname === window.location.pathname && n.hash.length > 0) e.setAttribute(o, "anchor-present");
                            else if (n.href !== window.location.href.split("#")[0] + "#")
                                if (this.options.currentUrlFullReload) e.setAttribute(o, "reload");
                                else {
                                    t.preventDefault();
                                    var i = [];
                                    for (var s in e.elements) {
                                        var a = e.elements[s];
                                        a.name && void 0 !== a.attributes && "button" !== a.tagName.toLowerCase() && ("checkbox" !== a.attributes.type && "radio" !== a.attributes.type || a.checked) && i.push({
                                            name: encodeURIComponent(a.name),
                                            value: encodeURIComponent(a.value)
                                        })
                                    }
                                    var l = i.map(function (e) {
                                        return e.name + "=" + e.value
                                    }).join("&");
                                    this.options.requestOptions.requestPayload = i, this.options.requestOptions.requestPayloadString = l, e.setAttribute(o, "submit"), this.loadUrl(n.href, r(this.options))
                                } else e.setAttribute(o, "anchor-empty");
                        else e.setAttribute(o, "external")
                    },
                    a = function (e) {
                        return e.defaultPrevented || !1 === e.returnValue
                    };
                t.exports = function (e) {
                    var t = this;
                    i(e, "submit", function (n) {
                        a(n) || s.call(t, e, n)
                    }), i(e, "keyup", function (n) {
                        a(n) || 13 == n.keyCode && s.call(t, e, n)
                    }.bind(this))
                }
            }, {
                "../clone": 2,
                "../events/on": 4,
                "../polyfills/Function.prototype.bind": 10
            }],
            12: [function (e, t, n) {
                e("../polyfills/Function.prototype.bind");
                var i = e("../events/on"),
                    r = e("../clone"),
                    o = "data-pjax-click-state",
                    s = function (e, t) {
                        if (t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) e.setAttribute(o, "modifier");
                        else if (e.protocol === window.location.protocol && e.host === window.location.host)
                            if (e.pathname === window.location.pathname && e.hash.length > 0) e.setAttribute(o, "anchor-present");
                            else if (e.hash && e.href.replace(e.hash, "") === window.location.href.replace(location.hash, "")) e.setAttribute(o, "anchor");
                            else if (e.href !== window.location.href.split("#")[0] + "#") {
                                if (t.preventDefault(), this.options.currentUrlFullReload && e.href === window.location.href.split("#")[0]) return e.setAttribute(o, "reload"), void this.reload();
                                this.options.requestOptions = this.options.requestOptions || {}, e.setAttribute(o, "load"), this.loadUrl(e.href, r(this.options))
                            } else e.setAttribute(o, "anchor-empty");
                        else e.setAttribute(o, "external")
                    },
                    a = function (e) {
                        return e.defaultPrevented || !1 === e.returnValue
                    };
                t.exports = function (e) {
                    var t = this;
                    i(e, "click", function (n) {
                        a(n) || s.call(t, e, n)
                    }), i(e, "keyup", function (n) {
                        a(n) || (n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey ? e.setAttribute("data-pjax-keyup-state", "modifier") : 13 == n.keyCode && s.call(t, e, n))
                    }.bind(this))
                }
            }, {
                "../clone": 2,
                "../events/on": 4,
                "../polyfills/Function.prototype.bind": 10
            }],
            13: [function (e, t, n) {
                t.exports = function (e) {
                    return e.querySelectorAll(this.options.elements)
                }
            }, {}],
            14: [function (e, t, n) {
                t.exports = function () {
                    this.options.debug && console && ("function" == typeof console.log ? console.log.apply(console, arguments) : console.log && console.log(arguments))
                }
            }, {}],
            15: [function (e, t, n) {
                var i = e("../foreach-els"),
                    r = e("./parse-element");
                t.exports = function (e) {
                    i(this.getElements(e), r, this)
                }
            }, {
                "../foreach-els": 7,
                "./parse-element": 16
            }],
            16: [function (e, t, n) {
                t.exports = function (e) {
                    switch (e.tagName.toLowerCase()) {
                        case "a":
                            e.hasAttribute("data-pjax-click-state") || this.attachLink(e);
                            break;
                        case "form":
                            e.hasAttribute("data-pjax-click-state") || this.attachForm(e);
                            break;
                        default:
                            throw "Pjax can only be applied on <a> or <form> submit"
                    }
                }
            }, {}],
            17: [function (e, t, n) {
                t.exports = function (e) {
                    this.options = e, this.options.elements = this.options.elements || "a[href], form[action]", this.options.selectors = this.options.selectors || ["title", ".js-Pjax"], this.options.switches = this.options.switches || {}, this.options.switchesOptions = this.options.switchesOptions || {}, this.options.history = this.options.history || !0, this.options.analytics = this.options.analytics || function () {
                        window._gaq && _gaq.push(["_trackPageview"]), window.ga && ga("send", "pageview", {
                            page: location.pathname,
                            title: document.title
                        })
                    }, this.options.scrollTo = void 0 === this.options.scrollTo ? 0 : this.options.scrollTo, this.options.cacheBust = void 0 === this.options.cacheBust || this.options.cacheBust, this.options.debug = this.options.debug || !1, this.options.switches.head || (this.options.switches.head = this.switchElementsAlt), this.options.switches.body || (this.options.switches.body = this.switchElementsAlt), "function" != typeof e.analytics && (e.analytics = function () { })
                }
            }, {}],
            18: [function (e, t, n) {
                t.exports = function (e) {
                    this.parseDOM(e || document)
                }
            }, {}],
            19: [function (e, t, n) {
                t.exports = function () {
                    window.location.reload()
                }
            }, {}],
            20: [function (e, t, n) {
                t.exports = function (e, t, n) {
                    var i = (t = t || {}).requestMethod || "GET",
                        r = t.requestPayloadString || null,
                        o = new XMLHttpRequest;
                    return o.onreadystatechange = function () {
                        4 === o.readyState && (200 === o.status ? n(o.responseText, o) : n(null, o))
                    }, this.options.cacheBust && (e += (/[?&]/.test(e) ? "&" : "?") + (new Date).getTime()), o.open(i.toUpperCase(), e, !0), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), void 0 != t.requestPayloadString && "" != t.requestPayloadString && o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send(r), o
                }
            }, {}],
            21: [function (e, t, n) {
                var i = e("./foreach-els"),
                    r = e("./switches");
                t.exports = function (e, t, n, o, s, a) {
                    n.forEach(function (n) {
                        var l = o.querySelectorAll(n),
                            c = s.querySelectorAll(n);
                        if (this.log && this.log("Pjax switch", n, l, c), l.length !== c.length) throw "DOM doesn�t look the same on new loaded page: �" + n + "� - new " + l.length + ", old " + c.length;
                        i(l, function (i, o) {
                            var s = c[o];
                            this.log && this.log("newEl", i, "oldEl", s), e[n] ? e[n].bind(this)(s, i, a, t[n]) : r.outerHTML.bind(this)(s, i, a)
                        }, this)
                    }, this)
                }
            }, {
                "./foreach-els": 7,
                "./switches": 22
            }],
            22: [function (e, t, n) {
                var i = e("./events/on.js");
                t.exports = {
                    outerHTML: function (e, t) {
                        e.outerHTML = t.outerHTML, this.onSwitch()
                    },
                    innerHTML: function (e, t) {
                        e.innerHTML = t.innerHTML, e.className = t.className, this.onSwitch()
                    },
                    sideBySide: function (e, t, n, r) {
                        var o = Array.prototype.forEach,
                            s = [],
                            a = [],
                            l = document.createDocumentFragment(),
                            c = "animationend webkitAnimationEnd MSAnimationEnd oanimationend",
                            u = 0,
                            f = function (e) {
                                e.target == e.currentTarget && --u <= 0 && s && (s.forEach(function (e) {
                                    e.parentNode && e.parentNode.removeChild(e)
                                }), a.forEach(function (e) {
                                    e.className = e.className.replace(e.getAttribute("data-pjax-classes"), ""), e.removeAttribute("data-pjax-classes")
                                }), a = null, s = null, this.onSwitch())
                            }.bind(this);
                        r = r || {}, o.call(e.childNodes, function (e) {
                            s.push(e), e.classList && !e.classList.contains("js-Pjax-remove") && (e.hasAttribute("data-pjax-classes") && (e.className = e.className.replace(e.getAttribute("data-pjax-classes"), ""), e.removeAttribute("data-pjax-classes")), e.classList.add("js-Pjax-remove"), r.callbacks && r.callbacks.removeElement && r.callbacks.removeElement(e), r.classNames && (e.className += " " + r.classNames.remove + " " + (n.backward ? r.classNames.backward : r.classNames.forward)), u++ , i(e, c, f, !0))
                        }), o.call(t.childNodes, function (e) {
                            if (e.classList) {
                                var t = "";
                                r.classNames && (t = " js-Pjax-add " + r.classNames.add + " " + (n.backward ? r.classNames.forward : r.classNames.backward)), r.callbacks && r.callbacks.addElement && r.callbacks.addElement(e), e.className += t, e.setAttribute("data-pjax-classes", t), a.push(e), l.appendChild(e), u++ , i(e, c, f, !0)
                            }
                        }), e.className = t.className, e.appendChild(l)
                    }
                }
            }, {
                "./events/on.js": 4
            }],
            23: [function (e, t, n) {
                t.exports = function () {
                    var e = 0;
                    return function () {
                        var t = "pjax" + (new Date).getTime() + "_" + e;
                        return e++ , t
                    }
                }()
            }, {}]
        }, {}, [1])(1)
    });
var MODULE_CONFIG = {
    chat: ["../static/scripts/libs/list.js/dist/list.js"],
    mail: ["../static/scripts/libs/list.js/dist/list.js", "../static/scripts/libs/notie/dist/notie.min.js", "scripts/plugins/notie.js", "scripts/app/mail.js"],
    user: ["../libs/list.js/dist/list.js", "../libs/notie/dist/notie.min.js", "scripts/plugins/notie.js", "scripts/app/user.js"],
    screenfull: ["../libs/screenfull/dist/screenfull.js", "scripts/plugins/screenfull.js"],
    jscroll: ["../libs/jscroll/jquery.jscroll.min.js"],
    stick_in_parent: ["../libs/sticky-kit/jquery.sticky-kit.min.js"],
    scrollreveal: ["../libs/scrollreveal/dist/scrollreveal.min.js", "scripts/plugins/jquery.scrollreveal.js"],
    owlCarousel: ["../static/scripts/libs/owl.carousel/dist/assets/owl.carousel.min.css", "../static/scripts/libs/owl.carousel/dist/owl.carousel.min.js"],
    html5sortable: ["../libs/html5sortable/dist/html.sortable.min.js", "scripts/plugins/jquery.html5sortable.js", "scripts/plugins/sortable.js"],
    easyPieChart: ["/Scripts/jquery.easypiechart.min.js"],
    peity: ["../libs/peity/jquery.peity.js", "scripts/plugins/jquery.peity.tooltip.js"],
    chart: ["../libs/moment/min/moment-with-locales.min.js", "../libs/chart.js/dist/Chart.min.js", "scripts/plugins/jquery.chart.js", "scripts/plugins/chartjs.js"],
    dataTable: ["../static/scripts/libs/datatable/jquery.dataTables.min.js"],
    bootstrapTable: ["../libs/bootstrap-table/dist/bootstrap-table.min.css", "../libs/bootstrap-table/dist/bootstrap-table.min.js", "../libs/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js", "../libs/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.min.js", "scripts/plugins/tableExport.min.js", "scripts/plugins/bootstrap-table.js"],
    bootstrapWizard: ["../libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"],
    dropzone: ["../static/scripts/libs/dropzone/dist/min/dropzone.min.js", "../static/scripts/libs/dropzone/dist/min/dropzone.min.css"],
    datetimepicker: ["../libs/moment/min/moment-with-locales.min.js", "scripts/plugins/datetimepicker.js"],
    datepicker: ["../libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js", "../libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"],
    fullCalendar: ["../libs/moment/min/moment-with-locales.min.js", "../libs/fullcalendar/dist/fullcalendar.min.js", "../libs/fullcalendar/dist/fullcalendar.min.css", "scripts/plugins/fullcalendar.js"],
    parsley: ["../static/scripts/libs/parsleyjs/dist/parsley.min.js"],
    select2: ["../libs/select2/dist/css/select2.min.css", "../libs/select2/dist/js/select2.min.js", "scripts/plugins/select2.js"],
    summernote: ["../libs/summernote/dist/summernote.css", "../libs/summernote/dist/summernote-bs4.css", "../libs/summernote/dist/summernote.min.js", "../libs/summernote/dist/summernote-bs4.min.js"],
    vectorMap: ["../libs/jqvmap/dist/jqvmap.min.css", "../libs/jqvmap/dist/jquery.vmap.js", "../libs/jqvmap/dist/maps/jquery.vmap.world.js", "../libs/jqvmap/dist/maps/jquery.vmap.usa.js", "../libs/jqvmap/dist/maps/jquery.vmap.france.js", "scripts/plugins/jqvmap.js"],
    waves: ["../libs/node-waves/dist/waves.min.css", "../libs/node-waves/dist/waves.min.js", "scripts/plugins/waves.js"]
},
    MODULE_OPTION_CONFIG = {
        parsley: {
            errorClass: "is-invalid",
            successClass: "is-valid",
            errorsWrapper: '<ul class="list-unstyled text-sm mt-1 text-muted"></ul>'
        }
    },
    lazyload = lazyload || {};
!function (e, t) {
    "use strict";
    var n = [],
        i = !1,
        r = e.Deferred();
    t.load = function (t) {
        return t = e.isArray(t) ? t : t.split(/\s+/), i || (i = r.promise()), e.each(t, function (e, t) {
            i = i.then(function () {
                return n[t] ? n[t].promise() : t.indexOf(".css") >= 0 ? s(t) : o(t)
            })
        }), r.resolve(), i
    }, t.unload = function (t) {
        t = e.isArray(t) ? t : t.split(/\s+/), e.each(t, function (t, i) {
            i.indexOf(".css") >= 0 ? e('link[href="' + i + '"]').remove() : e('script[src="' + i + '"]').remove(), delete n[i]
        })
    };
    var o = function (t) {
        var i = e.Deferred(),
            r = document.createElement("script");
        return r.src = t, r.onload = function (e) {
            i.resolve(e)
        }, r.onerror = function (e) {
            i.reject(e)
        }, document.body.appendChild(r), n[t] = i, i.promise()
    },
        s = function (t) {
            var i = e.Deferred(),
                r = document.createElement("link");
            r.rel = "stylesheet", r.type = "text/css", r.href = t, r.onload = function (e) {
                i.resolve(e)
            }, r.onerror = function (e) {
                i.reject(e)
            };
            var o = document.getElementsByTagName("head")[0];
            return o.insertBefore(r, o.firstChild), n[t] = i, i.promise()
        }
}(jQuery, lazyload),
    function ($, MODULE_CONFIG, MODULE_OPTION_CONFIG) {
        "use strict";
        $.fn.plugin = function () {
            return this.each(function () {
                var self = $(this),
                    opts = self.attr("data-option") || self.attr("data-plugin-option"),
                    attr = self.attr("data-plugin"),
                    options = opts && eval("[" + opts + "]");
                options && $.isPlainObject(options[0]) && (options[0] = $.extend({}, MODULE_OPTION_CONFIG[attr], options[0])), self[attr] && opts ? self[attr].apply(self, options) : lazyload.load(MODULE_CONFIG[attr]).then(function () {
                    opts && self[attr].apply(self, options), self[attr] && self[attr].init && self[attr].init(), window[attr] && window[attr].init && window[attr].init()
                })
            })
        }
    }(jQuery, MODULE_CONFIG, MODULE_OPTION_CONFIG),
    function (e) {
        "use strict";

        function t() {
            var t = window.location.pathname.split("/");
            t.length > 0 && (t = t[t.length - 1]), e("#aside .active").removeClass("active"), e("#aside a").filter(function () {
                return t == e(this).attr("href")
            }).parents("li").addClass("active")
        }
        e(document).on("click", "[data-nav] a", function (t) {
            var n, i, r, o = e(this);
            r = (i = o.parent()).parents("li"), n = i.closest("[data-nav]").find(".active"), r.addClass("active"), o.next().is("ul") && i.toggleClass("active") || i.addClass("active"), n.not(r).not(i).removeClass("active"), o.attr("href") && "" != o.attr("href") && e(document).trigger("Nav:changed")
        }), t(), e(document).on("pjaxEnd", function () {
            t()
        })
    }(jQuery),
    function (e) {
        "use strict";
        e.extend(jQuery.easing, {
            def: "easeOutQuad",
            easeInOutExpo: function (e, t, n, i, r) {
                return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
            }
        }), e(document).on("click", "[data-scroll-to]", function (t) {
            t.preventDefault();
            console.log('main App');
            var n = e(e(this).attr("href")) || e("#" + e(this).attr("data-scroll-to"));
            n && e("html,body").animate({
                // scrollTop: n.offset().top
            }, 600, "easeInOutExpo")
        })
    }(jQuery),
    function (e) {
        "use strict";
        e(document).on("click", "[data-toggle-class]", function (t) {
            t.preventDefault();
            var n = e(this),
                i = n.attr("data-toggle-class"),
                r = n.attr("data-toggle-class-target") || n.attr("data-target"),
                o = i && i.split(",") || "",
                s = r && r.split(",") || Array(n),
                a = 0;
            e.each(o, function (t, n) {
                var i = e(s[s.length && a]),
                    r = i.attr("data-class"),
                    l = o[t];
                r != l && i.removeClass(i.attr("data-class")), i.toggleClass(o[t]), i.attr("data-class", l), a++
            }), n.toggleClass("active")
        })
    }(jQuery),
    function (e) {
        "use strict";

        function t() {
            var t = e(".setting");
            e("body").removeClass(e("body").attr("ui-class")).addClass(app.setting.bg).attr("ui-class", app.setting.bg), app.setting.folded ? e("#aside").addClass("folded") : e("#aside").removeClass("folded"), app.setting.container ? e("body").addClass("container") : e("body").removeClass("container"), e("#aside .sidenav").removeClass(e("#aside .sidenav").attr("ui-class")).addClass(app.setting.aside).attr("ui-class", app.setting.aside), e("#aside .navbar").removeClass(e("#aside .navbar").attr("ui-class")).addClass(app.setting.brand).attr("ui-class", app.setting.brand), app.setting.fixedContent ? e("body").addClass("fixed-content") : e("body").removeClass("fixed-content"), app.setting.fixedAside ? e("body").addClass("fixed-aside") : e("body").removeClass("fixed-aside"), t.find('input[name="folded"]').prop("checked", app.setting.folded), t.find('input[name="fixedContent"]').prop("checked", app.setting.fixedContent), t.find('input[name="fixedAside"]').prop("checked", app.setting.fixedAside), t.find('input[name="container"]').prop("checked", app.setting.container), t.find('input[name="ajax"]').prop("checked", app.setting.ajax), t.find('input[name="theme"][value="' + app.setting.theme + '"]').prop("checked", !0), t.find('input[name="bg"][value="' + app.setting.bg + '"]').prop("checked", !0), t.find('input[name="aside"][value="' + app.setting.aside + '"]').prop("checked", !0), t.find('input[name="brand"][value="' + app.setting.brand + '"]').prop("checked", !0), i != app.setting.theme && lazyload.load("../assets/css/theme/" + app.setting.theme + ".css").then(function () {
                lazyload.unload("../assets/css/theme/" + i + ".css"), i = app.setting.theme
            })
        }

        function n(e, t) {
            try {
                if (arguments.length > 1) return sessionStorage.setItem(e, JSON.stringify(t));
                var n = sessionStorage.getItem(e);
                return n && JSON.parse(n) || !1
            } catch (e) { }
        }
        window.app = {
            color: {
                primary: "#FF5745",
                accent: "#6284f3",
                warn: "#907eec",
                grey: "#E3E3E3",
                blue: "#488fff",
                success: "#83C85C"
            },
            setting: {
                ajax: !0,
                folded: !1,
                container: !1,
                theme: "primary",
                aside: "dark",
                brand: "dark",
                header: "white",
                fixedContent: !1,
                fixedAside: !1,
                bg: ""
            }
        }, window.hexToRGB = function (e, t) {
            return "rgba(" + parseInt(e.slice(1, 3), 16) + ", " + parseInt(e.slice(3, 5), 16) + ", " + parseInt(e.slice(5, 7), 16) + ", " + t + ")"
        };
        var i, r = app.color.primary + "-setting";
        n(r) ? app.setting = n(r) : n(r, app.setting);
        for (var o = window.location.search.substring(1).split("&"), s = 0; s < o.length; s++) {
            var a = o[s].split("=");
            app.setting[a[0]] = "true" == a[1] || "false" == a[1] ? "true" == a[1] : a[1], n(r, app.setting)
        }
        // e(document).on("click.setting", ".setting input", function(i) {
        //     var o = e(this),
        //         s = o.attr("name");
        //     app.setting[s] = o.is(":checkbox") ? o.prop("checked") : e(this).val(), n(r, app.setting), t(app.setting), "ajax" == s && location.reload()
        // }), t()
    }(jQuery),
    function (e) {
        "use strict";
        if (e(document).on("pjax:send", function () {
            e(document).trigger("pjaxSend")
        }), e(document).on("pjaxSend", function () {
            e("#aside").modal("hide"), e("body").removeClass("modal-open").find(".modal-backdrop").remove(), e(".jqvmap-label, .note-popover, .dz-hidden-input").remove()
        }), e(document).on("refresh", function () {
            n && n.refresh(), i && i.refresh()
        }), e(document).on("pjax:success", function () {
            bootstrap && bootstrap.Util ? e(document).one(bootstrap.Util.TRANSITION_END, function () {
                e(".js-Pjax-onswitch").removeClass("js-Pjax-onswitch"), e(document).trigger("pjaxEnd")
            }).emulateTransitionEnd(600) : e(document).trigger("pjaxEnd")
        }), app.setting.ajax) var t = {
            classNames: {
                remove: "animate animate-reverse animate-fast animate-no-delay",
                add: "animate",
                backward: "fadeInRight",
                forward: "fadeInLeft"
            },
            callbacks: {
                addElement: function (t) {
                    e(t).parent().addClass("js-Pjax-onswitch")
                },
                removeElement: function (t) {
                    e(t).css("width", e(t).parent().width())
                }
            }
        },
            n = new Pjax({
                cacheBust: !1,
                elements: "#aside a:not(.no-ajax), #content-headerrrr a, #nav a, .app-header a",
                selectors: ["title", "#content-headerrrr", "#content-footer"],
                switches: {
                    "#content-headerrrr": function (e, t, n, i) {
                        this.switches.sideBySide.bind(this)(e, t, n, i)
                    }
                },
                switchesOptions: {
                    "#content-headerrrr": t
                }
            }),
            i = new Pjax({
                cacheBust: !1,
                elements: "#content-aside a, #content-body a",
                selectors: ["#content-body"],
                switches: {
                    "#content-body": function (e, t, n, i) {
                        this.switches.sideBySide.bind(this)(e, t, n, i)
                    }
                },
                switchesOptions: {
                    "#content-body": t
                }
            })
    }(jQuery);
var app = app || {};
! function (e, t) {
    "use strict";
    (navigator.userAgent.match(/MSIE/i) || navigator.userAgent.match(/Trident.*rv:11\./)) && e("body").addClass("ie");
    var n = window.navigator.userAgent || window.navigator.vendor || window.opera;
    /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(n) && e("body").addClass("touch"), /iPhone|iPod|iPad/.test(n) && e(document, ".modal, .aside").on("shown.bs.modal", function (t) {
        var n = e(".modal-backdrop");
        e(t.target).after(e(n))
    }), e(window).on("resize", function () {
        var t = e(window).width();
        t > 1200 && e(".aside-lg").modal("hide"), t > 991 && (e("#aside").modal("hide"), e(".aside-md, .aside-sm").modal("hide")), t > 768 && e(".aside-sm").modal("hide")
    }), app.init = function () {
        e('[data-toggle="popover"]').popover(), e('[data-toggle="tooltip"]').tooltip(), e("body").find("[data-plugin]").plugin()
    }, app.init(), e(document).on("pjaxEnd", function () {
        app.init()
    })
}(jQuery);