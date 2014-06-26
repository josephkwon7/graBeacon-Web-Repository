function getMousePosition(e) {
    return this.X = parseInt(e.clientX), this.Y = parseInt(e.clientY), this
}

function getMousePosition(e) {
    return this.X = parseInt(e.clientX), this.Y = parseInt(e.clientY), this
}
kakaoUI = {},
    function (e, t) {
        function n(e) {
            var t = e.length,
                n = ct.type(e);
            return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e) {
            var t = Ct[e] = {};
            return ct.each(e.match(ht) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function r(e, n, i, r) {
            if (ct.acceptData(e)) {
                var o, a, s = ct.expando,
                    l = e.nodeType,
                    u = l ? ct.cache : e,
                    c = l ? e[s] : e[s] && s;
                if (c && u[c] && (r || u[c].data) || i !== t || "string" != typeof n) return c || (c = l ? e[s] = tt.pop() || ct.guid++ : s), u[c] || (u[c] = l ? {} : {
                    toJSON: ct.noop
                }), ("object" == typeof n || "function" == typeof n) && (r ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), a = u[c], r || (a.data || (a.data = {}), a = a.data), i !== t && (a[ct.camelCase(n)] = i), "string" == typeof n ? (o = a[n], null == o && (o = a[ct.camelCase(n)])) : o = a, o
            }
        }

        function o(e, t, n) {
            if (ct.acceptData(e)) {
                var i, r, o = e.nodeType,
                    a = o ? ct.cache : e,
                    l = o ? e[ct.expando] : ct.expando;
                if (a[l]) {
                    if (t && (i = n ? a[l] : a[l].data)) {
                        ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in i ? t = [t] : (t = ct.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !s(i) : !ct.isEmptyObject(i)) return
                    }(n || (delete a[l].data, s(a[l]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
                }
            }
        }

        function a(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var r = "data-" + n.replace(jt, "-$1").toLowerCase();
                if (i = e.getAttribute(r), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : $t.test(i) ? ct.parseJSON(i) : i
                    } catch (o) {}
                    ct.data(e, n, i)
                } else i = t
            }
            return i
        }

        function s(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return Y.activeElement
            } catch (e) {}
        }

        function d(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function h(e, t, n) {
            if (ct.isFunction(t)) return ct.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ct.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Rt.test(t)) return ct.filter(t, e, n);
                t = ct.filter(t, e)
            }
            return ct.grep(e, function (e) {
                return ct.inArray(e, t) >= 0 !== n
            })
        }

        function f(e) {
            var t = Qt.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function p(e, t) {
            return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function m(e) {
            return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
        }

        function g(e) {
            var t = on.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function v(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ct._data(n, "globalEval", !t || ct._data(t[i], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && ct.hasData(e)) {
                var n, i, r, o = ct._data(e),
                    a = ct._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) ct.event.add(t, n, s[n][i])
                }
                a.data && (a.data = ct.extend({}, a.data))
            }
        }

        function b(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                    r = ct._data(t);
                    for (i in r.events) ct.removeEvent(t, i, r.handle);
                    t.removeAttribute(ct.expando)
                }
                "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function _(e, n) {
            var i, r, o = 0,
                a = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(n || "*") : t;
            if (!a)
                for (a = [], i = e.childNodes || e; null != (r = i[o]); o++)!n || ct.nodeName(r, n) ? a.push(r) : ct.merge(a, _(r, n));
            return n === t || n && ct.nodeName(e, n) ? ct.merge([e], a) : a
        }

        function x(e) {
            tn.test(e.type) && (e.defaultChecked = e.checked)
        }

        function w(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Cn.length; r--;)
                if (t = Cn[r] + n, t in e) return t;
            return i
        }

        function k(e, t) {
            return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
        }

        function F(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = ct._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && k(i) && (o[a] = ct._data(i, "olddisplay", E(i.nodeName)))) : o[a] || (r = k(i), (n && "none" !== n || !r) && ct._data(i, "olddisplay", r ? n : ct.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function C(e, t, n) {
            var i = yn.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function $(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ct.css(e, n + Fn[o], !0, r)), i ? ("content" === n && (a -= ct.css(e, "padding" + Fn[o], !0, r)), "margin" !== n && (a -= ct.css(e, "border" + Fn[o] + "Width", !0, r))) : (a += ct.css(e, "padding" + Fn[o], !0, r), "padding" !== n && (a += ct.css(e, "border" + Fn[o] + "Width", !0, r)));
            return a
        }

        function j(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = dn(e),
                a = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = hn(e, t, o), (0 > r || null == r) && (r = e.style[t]), bn.test(r)) return r;
                i = a && (ct.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + $(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function E(e) {
            var t = Y,
                n = xn[e];
            return n || (n = A(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), xn[e] = n), n
        }

        function A(e, t) {
            var n = ct(t.createElement(e)).appendTo(t.body),
                i = ct.css(n[0], "display");
            return n.remove(), i
        }

        function T(e, t, n, i) {
            var r;
            if (ct.isArray(t)) ct.each(t, function (t, r) {
                n || jn.test(e) ? i(e, r) : T(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== ct.type(t)) i(e, t);
            else
                for (r in t) T(e + "[" + r + "]", t[r], n, i)
        }

        function S(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(ht) || [];
                if (ct.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function D(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, ct.each(e[s] || [], function (e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                a = e === Bn;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function I(e, n) {
            var i, r, o = ct.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
            return i && ct.extend(!0, e, i), e
        }

        function N(e, n, i) {
            for (var r, o, a, s, l = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
            if (o)
                for (s in l)
                    if (l[s] && l[s].test(o)) {
                        u.unshift(s);
                        break
                    }
            if (u[0] in i) a = u[0];
            else {
                for (s in i) {
                    if (!u[0] || e.converters[s + " " + u[0]]) {
                        a = s;
                        break
                    }
                    r || (r = s)
                }
                a = a || r
            }
            return a ? (a !== u[0] && u.unshift(a), i[a]) : void 0
        }

        function O(e, t, n, i) {
            var r, o, a, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a)
                    for (r in u)
                        if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function M() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function q() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function L() {
            return setTimeout(function () {
                Jn = t
            }), Jn = ct.now()
        }

        function P(e, t, n) {
            for (var i, r = (oi[t] || []).concat(oi["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function H(e, t, n) {
            var i, r, o = 0,
                a = ri.length,
                s = ct.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var t = Jn || L(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                    return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: ct.extend({}, t),
                    opts: ct.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Jn || L(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = ct.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (U(c, u.opts.specialEasing); a > o; o++)
                if (i = ri[o].call(u, e, c, u.opts)) return i;
            return ct.map(c, P, u), ct.isFunction(u.opts.start) && u.opts.start.call(e, u), ct.fx.timer(ct.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function U(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = ct.camelCase(n), r = t[i], o = e[n], ct.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = ct.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function R(e, t, n) {
            var i, r, o, a, s, l, u = this,
                c = {},
                d = e.style,
                h = e.nodeType && k(e),
                f = ct._data(e, "fxshow");
            n.queue || (s = ct._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, u.always(function () {
                u.always(function () {
                    s.unqueued--, ct.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], ti.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) continue;
                    c[i] = f && f[i] || ct.style(e, i)
                }
            if (!ct.isEmptyObject(c)) {
                f ? "hidden" in f && (h = f.hidden) : f = ct._data(e, "fxshow", {}), o && (f.hidden = !h), h ? ct(e).show() : u.done(function () {
                    ct(e).hide()
                }), u.done(function () {
                    var t;
                    ct._removeData(e, "fxshow");
                    for (t in c) ct.style(e, t, c[t])
                });
                for (i in c) a = P(h ? f[i] : 0, i, u), i in f || (f[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function W(e, t, n, i, r) {
            return new W.prototype.init(e, t, n, i, r)
        }

        function B(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Fn[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function z(e) {
            return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var Q, Z, X = typeof t,
            V = e.location,
            Y = e.document,
            K = Y.documentElement,
            G = e.jQuery,
            J = e.$,
            et = {},
            tt = [],
            nt = "1.10.2",
            it = tt.concat,
            rt = tt.push,
            ot = tt.slice,
            at = tt.indexOf,
            st = et.toString,
            lt = et.hasOwnProperty,
            ut = nt.trim,
            ct = function (e, t) {
                return new ct.fn.init(e, t, Z)
            },
            dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ht = /\S+/g,
            ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            pt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            gt = /^[\],:{}\s]*$/,
            vt = /(?:^|:|,)(?:\s*\[)+/g,
            yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            _t = /^-ms-/,
            xt = /-([\da-z])/gi,
            wt = function (e, t) {
                return t.toUpperCase()
            },
            kt = function (e) {
                (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (Ft(), ct.ready())
            },
            Ft = function () {
                Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", kt, !1), e.removeEventListener("load", kt, !1)) : (Y.detachEvent("onreadystatechange", kt), e.detachEvent("onload", kt))
            };
        ct.fn = ct.prototype = {
                jquery: nt,
                constructor: ct,
                init: function (e, n, i) {
                    var r, o;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (r[1]) {
                            if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), mt.test(r[1]) && ct.isPlainObject(n))
                                for (r in n) ct.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                            return this
                        }
                        if (o = Y.getElementById(r[2]), o && o.parentNode) {
                            if (o.id !== r[2]) return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = Y, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function () {
                    return ot.call(this)
                },
                get: function (e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function (e) {
                    var t = ct.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function (e, t) {
                    return ct.each(this, e, t)
                },
                ready: function (e) {
                    return ct.ready.promise().done(e), this
                },
                slice: function () {
                    return this.pushStack(ot.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function (e) {
                    return this.pushStack(ct.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: rt,
                sort: [].sort,
                splice: [].splice
            }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function () {
                var e, n, i, r, o, a, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
                    if (null != (o = arguments[l]))
                        for (r in o) e = s[r], i = o[r], s !== i && (c && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, a = e && ct.isArray(e) ? e : []) : a = e && ct.isPlainObject(e) ? e : {}, s[r] = ct.extend(c, a, i)) : i !== t && (s[r] = i));
                return s
            }, ct.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                noConflict: function (t) {
                    return e.$ === ct && (e.$ = J), t && e.jQuery === ct && (e.jQuery = G), ct
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? ct.readyWait++ : ct.ready(!0)
                },
                ready: function (e) {
                    if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                        if (!Y.body) return setTimeout(ct.ready);
                        ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (Q.resolveWith(Y, [ct]), ct.fn.trigger && ct(Y).trigger("ready").off("ready"))
                    }
                },
                isFunction: function (e) {
                    return "function" === ct.type(e)
                },
                isArray: Array.isArray || function (e) {
                    return "array" === ct.type(e)
                },
                isWindow: function (e) {
                    return null != e && e == e.window
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
                },
                isPlainObject: function (e) {
                    var n;
                    if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    if (ct.support.ownLast)
                        for (n in e) return lt.call(e, n);
                    for (n in e);
                    return n === t || lt.call(e, n)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw new Error(e)
                },
                parseHTML: function (e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || Y;
                    var i = mt.exec(e),
                        r = !n && [];
                    return i ? [t.createElement(i[1])] : (i = ct.buildFragment([e], t, r), r && ct(r).remove(), ct.merge([], i.childNodes))
                },
                parseJSON: function (t) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ct.trim(t), t && gt.test(t.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? new Function("return " + t)() : (ct.error("Invalid JSON: " + t), void 0)
                },
                parseXML: function (n) {
                    var i, r;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (o) {
                        i = t
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i
                },
                noop: function () {},
                globalEval: function (t) {
                    t && ct.trim(t) && (e.execScript || function (t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function (e) {
                    return e.replace(_t, "ms-").replace(xt, wt)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t, i) {
                    var r, o = 0,
                        a = e.length,
                        s = n(e);
                    if (i) {
                        if (s)
                            for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                        else
                            for (o in e)
                                if (r = t.apply(e[o], i), r === !1) break
                    } else if (s)
                        for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.call(e[o], o, e[o]), r === !1) break; return e
                },
                trim: ut && !ut.call("﻿ ") ? function (e) {
                    return null == e ? "" : ut.call(e)
                } : function (e) {
                    return null == e ? "" : (e + "").replace(ft, "")
                },
                makeArray: function (e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? ct.merge(i, "string" == typeof e ? [e] : e) : rt.call(i, e)), i
                },
                inArray: function (e, t, n) {
                    var i;
                    if (t) {
                        if (at) return at.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, n) {
                    var i = n.length,
                        r = e.length,
                        o = 0;
                    if ("number" == typeof i)
                        for (; i > o; o++) e[r++] = n[o];
                    else
                        for (; n[o] !== t;) e[r++] = n[o++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    var i, r = [],
                        o = 0,
                        a = e.length;
                    for (n = !!n; a > o; o++) i = !!t(e[o], o), n !== i && r.push(e[o]);
                    return r
                },
                map: function (e, t, i) {
                    var r, o = 0,
                        a = e.length,
                        s = n(e),
                        l = [];
                    if (s)
                        for (; a > o; o++) r = t(e[o], o, i), null != r && (l[l.length] = r);
                    else
                        for (o in e) r = t(e[o], o, i), null != r && (l[l.length] = r);
                    return it.apply([], l)
                },
                guid: 1,
                proxy: function (e, n) {
                    var i, r, o;
                    return "string" == typeof n && (o = e[n], n = e, e = o), ct.isFunction(e) ? (i = ot.call(arguments, 2), r = function () {
                        return e.apply(n || this, i.concat(ot.call(arguments)))
                    }, r.guid = e.guid = e.guid || ct.guid++, r) : t
                },
                access: function (e, n, i, r, o, a, s) {
                    var l = 0,
                        u = e.length,
                        c = null == i;
                    if ("object" === ct.type(i)) {
                        o = !0;
                        for (l in i) ct.access(e, n, l, i[l], !0, a, s)
                    } else if (r !== t && (o = !0, ct.isFunction(r) || (s = !0), c && (s ? (n.call(e, r), n = null) : (c = n, n = function (e, t, n) {
                        return c.call(ct(e), n)
                    })), n))
                        for (; u > l; l++) n(e[l], i, s ? r : r.call(e[l], l, n(e[l], i)));
                    return o ? e : c ? n.call(e) : u ? n(e[0], i) : a
                },
                now: function () {
                    return (new Date).getTime()
                },
                swap: function (e, t, n, i) {
                    var r, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    r = n.apply(e, i || []);
                    for (o in t) e.style[o] = a[o];
                    return r
                }
            }), ct.ready.promise = function (t) {
                if (!Q)
                    if (Q = ct.Deferred(), "complete" === Y.readyState) setTimeout(ct.ready);
                    else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", kt, !1), e.addEventListener("load", kt, !1);
                else {
                    Y.attachEvent("onreadystatechange", kt), e.attachEvent("onload", kt);
                    var n = !1;
                    try {
                        n = null == e.frameElement && Y.documentElement
                    } catch (i) {}
                    n && n.doScroll && ! function r() {
                        if (!ct.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(r, 50)
                            }
                            Ft(), ct.ready()
                        }
                    }()
                }
                return Q.promise(t)
            }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                et["[object " + t + "]"] = t.toLowerCase()
            }), Z = ct(Y),
            function (e, t) {
                function n(e, t, n, i) {
                    var r, o, a, s, l, u, c, d, p, m;
                    if ((t ? t.ownerDocument || t : H) !== D && S(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (N && !i) {
                        if (r = bt.exec(e))
                            if (a = r[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && L(t, o) && o.id === a) return n.push(o), n
                            } else {
                                if (r[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = r[3]) && k.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n
                            }
                        if (k.qsa && (!O || !O.test(e))) {
                            if (d = c = P, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (u = h(e), (c = t.getAttribute("id")) ? d = c.replace(wt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + f(u[l]);
                                p = ft.test(e) && t.parentNode || t, m = u.join(",")
                            }
                            if (m) try {
                                return et.apply(n, p.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                c || t.removeAttribute("id")
                            }
                        }
                    }
                    return x(e.replace(ut, "$1"), t, n, i)
                }

                function i() {
                    function e(n, i) {
                        return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = i
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[P] = !0, e
                }

                function o(e) {
                    var t = D.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
                }

                function s(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function d() {}

                function h(e, t) {
                    var i, r, o, a, s, l, u, c = B[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], u = C.preFilter; s;) {
                        (!i || (r = dt.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ht.exec(s)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(ut, " ")
                        }), s = s.slice(i.length));
                        for (a in C.filter)!(r = vt[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: a,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return t ? s.length : s ? n.error(e) : B(e, l).slice(0)
                }

                function f(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function p(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        o = R++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function (t, n, a) {
                        var s, l, u, c = U + " " + o;
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r)
                                    if (u = t[P] || (t[P] = {}), (l = u[i]) && l[0] === c) {
                                        if ((s = l[1]) === !0 || s === F) return s === !0
                                    } else if (l = u[i] = [c], l[1] = e(t, n, a) || F, l[1] === !0) return !0
                    }
                }

                function m(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, t, n, i, r) {
                    for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
                    return a
                }

                function v(e, t, n, i, o, a) {
                    return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function (r, a, s, l) {
                        var u, c, d, h = [],
                            f = [],
                            p = a.length,
                            m = r || _(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !r && t ? m : g(m, h, e, s, l),
                            y = n ? o || (r ? e : p || i) ? [] : a : v;
                        if (n && n(v, y, s, l), i)
                            for (u = g(y, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (y[f[c]] = !(v[f[c]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                                    o(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(d = y[c]) && (u = o ? nt.call(r, d) : h[c]) > -1 && (r[u] = !(a[u] = d))
                            }
                        } else y = g(y === a ? y.splice(p, y.length) : y), o ? o(null, a, y, l) : et.apply(a, y)
                    })
                }

                function y(e) {
                    for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                        return e === t
                    }, a, !0), u = p(function (e) {
                        return nt.call(t, e) > -1
                    }, a, !0), c = [
                        function (e, n, i) {
                            return !o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
                        }
                    ]; r > s; s++)
                        if (n = C.relative[e[s].type]) c = [p(m(c), n)];
                        else {
                            if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                                for (i = ++s; r > i && !C.relative[e[i].type]; i++);
                                return v(s > 1 && m(c), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(ut, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                            }
                            c.push(n)
                        }
                    return m(c)
                }

                function b(e, t) {
                    var i = 0,
                        o = t.length > 0,
                        a = e.length > 0,
                        s = function (r, s, l, u, c) {
                            var d, h, f, p = [],
                                m = 0,
                                v = "0",
                                y = r && [],
                                b = null != c,
                                _ = A,
                                x = r || a && C.find.TAG("*", c && s.parentNode || s),
                                w = U += null == _ ? 1 : Math.random() || .1;
                            for (b && (A = s !== D && s, F = i); null != (d = x[v]); v++) {
                                if (a && d) {
                                    for (h = 0; f = e[h++];)
                                        if (f(d, s, l)) {
                                            u.push(d);
                                            break
                                        }
                                    b && (U = w, F = ++i)
                                }
                                o && ((d = !f && d) && m--, r && y.push(d))
                            }
                            if (m += v, o && v !== m) {
                                for (h = 0; f = t[h++];) f(y, p, s, l);
                                if (r) {
                                    if (m > 0)
                                        for (; v--;) y[v] || p[v] || (p[v] = G.call(u));
                                    p = g(p)
                                }
                                et.apply(u, p), b && !r && p.length > 0 && m + t.length > 1 && n.uniqueSort(u)
                            }
                            return b && (U = w, A = _), y
                        };
                    return o ? r(s) : s
                }

                function _(e, t, i) {
                    for (var r = 0, o = t.length; o > r; r++) n(e, t[r], i);
                    return i
                }

                function x(e, t, n, i) {
                    var r, o, a, s, l, u = h(e);
                    if (!i && 1 === u.length) {
                        if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && k.getById && 9 === t.nodeType && N && C.relative[o[1].type]) {
                            if (t = (C.find.ID(a.matches[0].replace(kt, Ft), t) || [])[0], !t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (r = vt.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                            if ((l = C.find[s]) && (i = l(a.matches[0].replace(kt, Ft), ft.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(r, 1), e = i.length && f(o), !e) return et.apply(n, i), n;
                                break
                            }
                    }
                    return E(e, u)(i, t, !N, n, ft.test(e)), n
                }
                var w, k, F, C, $, j, E, A, T, S, D, I, N, O, M, q, L, P = "sizzle" + -new Date,
                    H = e.document,
                    U = 0,
                    R = 0,
                    W = i(),
                    B = i(),
                    z = i(),
                    Q = !1,
                    Z = function (e, t) {
                        return e === t ? (Q = !0, 0) : 0
                    },
                    X = typeof t,
                    V = 1 << 31,
                    Y = {}.hasOwnProperty,
                    K = [],
                    G = K.pop,
                    J = K.push,
                    et = K.push,
                    tt = K.slice,
                    nt = K.indexOf || function (e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    rt = "[\\x20\\t\\r\\n\\f]",
                    ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    at = ot.replace("w", "w#"),
                    st = "\\[" + rt + "*(" + ot + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + rt + "*\\]",
                    lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
                    ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
                    dt = new RegExp("^" + rt + "*," + rt + "*"),
                    ht = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
                    ft = new RegExp(rt + "*[+~]"),
                    pt = new RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
                    mt = new RegExp(lt),
                    gt = new RegExp("^" + at + "$"),
                    vt = {
                        ID: new RegExp("^#(" + ot + ")"),
                        CLASS: new RegExp("^\\.(" + ot + ")"),
                        TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + st),
                        PSEUDO: new RegExp("^" + lt),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + it + ")$", "i"),
                        needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    yt = /^[^{]+\{\s*\[native \w/,
                    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    _t = /^(?:input|select|textarea|button)$/i,
                    xt = /^h\d$/i,
                    wt = /'|\\/g,
                    kt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
                    Ft = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    };
                try {
                    et.apply(K = tt.call(H.childNodes), H.childNodes), K[H.childNodes.length].nodeType
                } catch (Ct) {
                    et = {
                        apply: K.length ? function (e, t) {
                            J.apply(e, tt.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                j = n.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, k = n.support = {}, S = n.setDocument = function (e) {
                    var t = e ? e.ownerDocument || e : H,
                        n = t.defaultView;
                    return t !== D && 9 === t.nodeType && t.documentElement ? (D = t, I = t.documentElement, N = !j(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                        S()
                    }), k.attributes = o(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), k.getElementsByTagName = o(function (e) {
                        return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                    }), k.getElementsByClassName = o(function (e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), k.getById = o(function (e) {
                        return I.appendChild(e).id = P, !t.getElementsByName || !t.getElementsByName(P).length
                    }), k.getById ? (C.find.ID = function (e, t) {
                        if (typeof t.getElementById !== X && N) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, C.filter.ID = function (e) {
                        var t = e.replace(kt, Ft);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete C.find.ID, C.filter.ID = function (e) {
                        var t = e.replace(kt, Ft);
                        return function (e) {
                            var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), C.find.TAG = k.getElementsByTagName ? function (e, t) {
                        return typeof t.getElementsByTagName !== X ? t.getElementsByTagName(e) : void 0
                    } : function (e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, C.find.CLASS = k.getElementsByClassName && function (e, t) {
                        return typeof t.getElementsByClassName !== X && N ? t.getElementsByClassName(e) : void 0
                    }, M = [], O = [], (k.qsa = yt.test(t.querySelectorAll)) && (o(function (e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + rt + "*(?:value|" + it + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
                    }), o(function (e) {
                        var n = t.createElement("input");
                        n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (k.matchesSelector = yt.test(q = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function (e) {
                        k.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), M.push("!=", lt)
                    }), O = O.length && new RegExp(O.join("|")), M = M.length && new RegExp(M.join("|")), L = yt.test(I.contains) || I.compareDocumentPosition ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, Z = I.compareDocumentPosition ? function (e, n) {
                        if (e === n) return Q = !0, 0;
                        var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                        return i ? 1 & i || !k.sortDetached && n.compareDocumentPosition(e) === i ? e === t || L(H, e) ? -1 : n === t || L(H, n) ? 1 : T ? nt.call(T, e) - nt.call(T, n) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function (e, n) {
                        var i, r = 0,
                            o = e.parentNode,
                            a = n.parentNode,
                            l = [e],
                            u = [n];
                        if (e === n) return Q = !0, 0;
                        if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : T ? nt.call(T, e) - nt.call(T, n) : 0;
                        if (o === a) return s(e, n);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (i = n; i = i.parentNode;) u.unshift(i);
                        for (; l[r] === u[r];) r++;
                        return r ? s(l[r], u[r]) : l[r] === H ? -1 : u[r] === H ? 1 : 0
                    }, t) : D
                }, n.matches = function (e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== D && S(e), t = t.replace(pt, "='$1']"), !(!k.matchesSelector || !N || M && M.test(t) || O && O.test(t))) try {
                        var i = q.call(e, t);
                        if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (r) {}
                    return n(t, D, null, [e]).length > 0
                }, n.contains = function (e, t) {
                    return (e.ownerDocument || e) !== D && S(e), L(e, t)
                }, n.attr = function (e, n) {
                    (e.ownerDocument || e) !== D && S(e);
                    var i = C.attrHandle[n.toLowerCase()],
                        r = i && Y.call(C.attrHandle, n.toLowerCase()) ? i(e, n, !N) : t;
                    return r === t ? k.attributes || !N ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null : r
                }, n.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, n.uniqueSort = function (e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (Q = !k.detectDuplicates, T = !k.sortStable && e.slice(0), e.sort(Z), Q) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, $ = n.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += $(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += $(t);
                    return n
                }, C = n.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: vt,
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
                            return e[1] = e[1].replace(kt, Ft), e[3] = (e[4] || e[5] || "").replace(kt, Ft), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var n, i = !e[5] && e[2];
                            return vt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && mt.test(i) && (n = h(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(kt, Ft).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = W[e + " "];
                            return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && W(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, t, i) {
                            return function (r) {
                                var o = n.attr(r, e);
                                return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function (e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === r ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var u, c, d, h, f, p, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (c = g[P] || (g[P] = {}), u = c[e] || [], f = u[0] === U && u[1], h = u[0] === U && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (h = f = 0) || p.pop();)
                                            if (1 === d.nodeType && ++h && d === t) {
                                                c[e] = [U, f, h];
                                                break
                                            }
                                    } else if (y && (u = (t[P] || (t[P] = {}))[e]) && u[0] === U) h = u[1];
                                    else
                                        for (;
                                            (d = ++f && d && d[m] || (h = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[P] || (d[P] = {}))[e] = [U, h]), d !== t)););
                                    return h -= r, h === i || h % i === 0 && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function (e, t) {
                            var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return o[P] ? o(t) : o.length > 1 ? (i = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, n) {
                                for (var i, r = o(e, t), a = r.length; a--;) i = nt.call(e, r[a]), e[i] = !(n[i] = r[a])
                            }) : function (e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [],
                                n = [],
                                i = E(e.replace(ut, "$1"));
                            return i[P] ? r(function (e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, r, o) {
                                return t[0] = e, i(t, null, o, n), !n.pop()
                            }
                        }),
                        has: r(function (e) {
                            return function (t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: r(function (e) {
                            return function (t) {
                                return (t.textContent || t.innerText || $(t)).indexOf(e) > -1
                            }
                        }),
                        lang: r(function (e) {
                            return gt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(kt, Ft).toLowerCase(),
                                function (t) {
                                    var n;
                                    do
                                        if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function (e) {
                            return e === I
                        },
                        focus: function (e) {
                            return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function (e) {
                            return e.disabled === !1
                        },
                        disabled: function (e) {
                            return e.disabled === !0
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !C.pseudos.empty(e)
                        },
                        header: function (e) {
                            return xt.test(e.nodeName)
                        },
                        input: function (e) {
                            return _t.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: c(function () {
                            return [0]
                        }),
                        last: c(function (e, t) {
                            return [t - 1]
                        }),
                        eq: c(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[w] = l(w);
                for (w in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[w] = u(w);
                d.prototype = C.filters = C.pseudos, C.setFilters = new d, E = n.compile = function (e, t) {
                    var n, i = [],
                        r = [],
                        o = z[e + " "];
                    if (!o) {
                        for (t || (t = h(e)), n = t.length; n--;) o = y(t[n]), o[P] ? i.push(o) : r.push(o);
                        o = z(e, b(r, i))
                    }
                    return o
                }, k.sortStable = P.split("").sort(Z).join("") === P, k.detectDuplicates = Q, S(), k.sortDetached = o(function (e) {
                    return 1 & e.compareDocumentPosition(D.createElement("div"))
                }), o(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), k.attributes && o(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), o(function (e) {
                    return null == e.getAttribute("disabled")
                }) || a(it, function (e, t, n) {
                    var i;
                    return n ? void 0 : (i = e.getAttributeNode(t)) && i.specified ? i.value : e[t] === !0 ? t.toLowerCase() : null
                }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
            }(e);
        var Ct = {};
        ct.Callbacks = function (e) {
            e = "string" == typeof e ? Ct[e] || i(e) : ct.extend({}, e);
            var n, r, o, a, s, l, u = [],
                c = !e.once && [],
                d = function (t) {
                    for (r = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++)
                        if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            r = !1;
                            break
                        }
                    n = !1, u && (c ? c.length && d(c.shift()) : r ? u = [] : h.disable())
                },
                h = {
                    add: function () {
                        if (u) {
                            var t = u.length;
                            ! function i(t) {
                                ct.each(t, function (t, n) {
                                    var r = ct.type(n);
                                    "function" === r ? e.unique && h.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }(arguments), n ? a = u.length : r && (l = t, d(r))
                        }
                        return this
                    },
                    remove: function () {
                        return u && ct.each(arguments, function (e, t) {
                            for (var i;
                                (i = ct.inArray(t, u, i)) > -1;) u.splice(i, 1), n && (a >= i && a--, s >= i && s--)
                        }), this
                    },
                    has: function (e) {
                        return e ? ct.inArray(e, u) > -1 : !(!u || !u.length)
                    },
                    empty: function () {
                        return u = [], a = 0, this
                    },
                    disable: function () {
                        return u = c = r = t, this
                    },
                    disabled: function () {
                        return !u
                    },
                    lock: function () {
                        return c = t, r || h.disable(), this
                    },
                    locked: function () {
                        return !c
                    },
                    fireWith: function (e, t) {
                        return !u || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : d(t)), this
                    },
                    fire: function () {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!o
                    }
                };
            return h
        }, ct.extend({
            Deferred: function (e) {
                var t = [
                        ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ct.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var e = arguments;
                            return ct.Deferred(function (n) {
                                ct.each(t, function (t, o) {
                                    var a = o[0],
                                        s = ct.isFunction(e[t]) && e[t];
                                    r[o[1]](function () {
                                        var e = s && s.apply(this, arguments);
                                        e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? ct.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ct.each(t, function (e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function (e) {
                var t, n, i, r = 0,
                    o = ot.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ct.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : ct.Deferred(),
                    u = function (e, n, i) {
                        return function (r) {
                            n[e] = this, i[e] = arguments.length > 1 ? ot.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && ct.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        }), ct.support = function (t) {
            var n, i, r, o, a, s, l, u, c, d = Y.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
            o = Y.createElement("select"), s = o.appendChild(Y.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!r.value, t.optSelected = s.selected, t.enctype = !!Y.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
            try {
                delete d.test
            } catch (h) {
                t.deleteExpando = !1
            }
            r = Y.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), a = Y.createDocumentFragment(), a.appendChild(r), t.appendChecked = r.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || d.attributes[l].expando === !1;
            d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
            for (c in ct(t)) break;
            return t.ownLast = "0" !== c, ct(function () {
                var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    a = Y.getElementsByTagName("body")[0];
                a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(a, null != a.style.zoom ? {
                    zoom: 1
                } : {}, function () {
                    t.boxSizing = 4 === d.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, i = d.appendChild(Y.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== X && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = r = i = null)
            }), n = o = a = s = i = r = null, t
        }({});
        var $t = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            jt = /([A-Z])/g;
        ct.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !!e && !s(e)
            },
            data: function (e, t, n) {
                return r(e, t, n)
            },
            removeData: function (e, t) {
                return o(e, t)
            },
            _data: function (e, t, n) {
                return r(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return o(e, t, !0)
            },
            acceptData: function (e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), ct.fn.extend({
            data: function (e, n) {
                var i, r, o = null,
                    s = 0,
                    l = this[0];
                if (e === t) {
                    if (this.length && (o = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; s < i.length; s++) r = i[s].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), a(l, r, o[r]));
                        ct._data(l, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    ct.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    ct.data(this, e, n)
                }) : l ? a(l, e, ct.data(l, e)) : null
            },
            removeData: function (e) {
                return this.each(function () {
                    ct.removeData(this, e)
                })
            }
        }), ct.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = ct._data(e, t), n && (!i || ct.isArray(n) ? i = ct._data(e, t, ct.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = ct.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = ct._queueHooks(e, t),
                    a = function () {
                        ct.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ct._data(e, n) || ct._data(e, n, {
                    empty: ct.Callbacks("once memory").add(function () {
                        ct._removeData(e, t + "queue"), ct._removeData(e, n)
                    })
                })
            }
        }), ct.fn.extend({
            queue: function (e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
                    var t = ct.queue(this, e, n);
                    ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    ct.dequeue(this, e)
                })
            },
            delay: function (e, t) {
                return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, n) {
                var i, r = 1,
                    o = ct.Deferred(),
                    a = this,
                    s = this.length,
                    l = function () {
                        --r || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = ct._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
                return l(), o.promise(n)
            }
        });
        var Et, At, Tt = /[\t\r\n\f]/g,
            St = /\r/g,
            Dt = /^(?:input|select|textarea|button|object)$/i,
            It = /^(?:a|area)$/i,
            Nt = /^(?:checked|selected)$/i,
            Ot = ct.support.getSetAttribute,
            Mt = ct.support.input;
        ct.fn.extend({
            attr: function (e, t) {
                return ct.access(this, ct.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    ct.removeAttr(this, e)
                })
            },
            prop: function (e, t) {
                return ct.access(this, ct.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = ct.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function (e) {
                var t, n, i, r, o, a = 0,
                    s = this.length,
                    l = "string" == typeof e && e;
                if (ct.isFunction(e)) return this.each(function (t) {
                    ct(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ht) || []; s > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Tt, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            n.className = ct.trim(i)
                        }
                return this
            },
            removeClass: function (e) {
                var t, n, i, r, o, a = 0,
                    s = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (ct.isFunction(e)) return this.each(function (t) {
                    ct(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ht) || []; s > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Tt, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            n.className = e ? ct.trim(i) : ""
                        }
                return this
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ct.isFunction(e) ? this.each(function (n) {
                    ct(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)
                        for (var t, i = 0, r = ct(this), o = e.match(ht) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === X || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
                })
            },
            hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Tt, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function (e) {
                var n, i, r, o = this[0]; {
                    if (arguments.length) return r = ct.isFunction(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = r ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
                    });
                    if (o) return i = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)
                }
            }
        }), ct.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ct.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== r || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ct(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, o = ct.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = ct.inArray(ct(i).val(), o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            },
            attr: function (e, n, i) {
                var r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === X ? ct.prop(e, n, i) : (1 === a && ct.isXMLDoc(e) || (n = n.toLowerCase(), r = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? At : Et)), i === t ? r && "get" in r && null !== (o = r.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== i ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (ct.removeAttr(e, n), void 0))
            },
            removeAttr: function (e, t) {
                var n, i, r = 0,
                    o = t && t.match(ht);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? Mt && Ot || !Nt.test(n) ? e[i] = !1 : e[ct.camelCase("default-" + n)] = e[i] = !1 : ct.attr(e, n, ""), e.removeAttribute(Ot ? n : i)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (e, n, i) {
                var r, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ct.isXMLDoc(e), a && (n = ct.propFix[n] || n, o = ct.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ct.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Dt.test(e.nodeName) || It.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), At = {
            set: function (e, t, n) {
                return t === !1 ? ct.removeAttr(e, n) : Mt && Ot || !Nt.test(n) ? e.setAttribute(!Ot && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function (e, n) {
            var i = ct.expr.attrHandle[n] || ct.find.attr;
            ct.expr.attrHandle[n] = Mt && Ot || !Nt.test(n) ? function (e, n, r) {
                var o = ct.expr.attrHandle[n],
                    a = r ? t : (ct.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null;
                return ct.expr.attrHandle[n] = o, a
            } : function (e, n, i) {
                return i ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), Mt && Ot || (ct.attrHooks.value = {
            set: function (e, t, n) {
                return ct.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Et && Et.set(e, t, n)
            }
        }), Ot || (Et = {
            set: function (e, n, i) {
                var r = e.getAttributeNode(i);
                return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
            }
        }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function (e, n, i) {
            var r;
            return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
        }, ct.valHooks.button = {
            get: function (e, n) {
                var i = e.getAttributeNode(n);
                return i && i.specified ? i.value : t
            },
            set: Et.set
        }, ct.attrHooks.contenteditable = {
            set: function (e, t, n) {
                Et.set(e, "" === t ? !1 : t, n)
            }
        }, ct.each(["width", "height"], function (e, t) {
            ct.attrHooks[t] = {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ct.support.hrefNormalized || ct.each(["href", "src"], function (e, t) {
            ct.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ct.support.style || (ct.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || t
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        }), ct.support.optSelected || (ct.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ct.propFix[this.toLowerCase()] = this
        }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function () {
            ct.valHooks[this] = {
                set: function (e, t) {
                    return ct.isArray(t) ? e.checked = ct.inArray(ct(e).val(), t) >= 0 : void 0
                }
            }, ct.support.checkOn || (ct.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var qt = /^(?:input|select|textarea)$/i,
            Lt = /^key/,
            Pt = /^(?:mouse|contextmenu)|click/,
            Ht = /^(?:focusinfocus|focusoutblur)$/,
            Ut = /^([^.]*)(?:\.(.+)|)$/;
        ct.event = {
            global: {},
            add: function (e, n, i, r, o) {
                var a, s, l, u, c, d, h, f, p, m, g, v = ct._data(e);
                if (v) {
                    for (i.handler && (u = i, i = u.handler, o = u.selector), i.guid || (i.guid = ct.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function (e) {
                        return typeof ct === X || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), n = (n || "").match(ht) || [""], l = n.length; l--;) a = Ut.exec(n[l]) || [], p = g = a[1], m = (a[2] || "").split(".").sort(), p && (c = ct.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ct.event.special[p] || {}, h = ct.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && ct.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, u), (f = s[p]) || (f = s[p] = [], f.delegateCount = 0, c.setup && c.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))), c.add && (c.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), o ? f.splice(f.delegateCount++, 0, h) : f.push(h), ct.event.global[p] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, i, r) {
                var o, a, s, l, u, c, d, h, f, p, m, g = ct.hasData(e) && ct._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(ht) || [""], u = t.length; u--;)
                        if (s = Ut.exec(t[u]) || [], f = m = s[1], p = (s[2] || "").split(".").sort(), f) {
                            for (d = ct.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !h.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || ct.removeEvent(e, f, g.handle), delete c[f])
                        } else
                            for (f in c) ct.event.remove(e, f + t[u], n, i, !0);
                    ct.isEmptyObject(c) && (delete g.handle, ct._removeData(e, "events"))
                }
            },
            trigger: function (n, i, r, o) {
                var a, s, l, u, c, d, h, f = [r || Y],
                    p = lt.call(n, "type") ? n.type : n,
                    m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = d = r = r || Y, 3 !== r.nodeType && 8 !== r.nodeType && !Ht.test(p + ct.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), s = p.indexOf(":") < 0 && "on" + p, n = n[ct.expando] ? n : new ct.Event(p, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : ct.makeArray(i, [n]), c = ct.event.special[p] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
                    if (!o && !c.noBubble && !ct.isWindow(r)) {
                        for (u = c.delegateType || p, Ht.test(u + p) || (l = l.parentNode); l; l = l.parentNode) f.push(l), d = l;
                        d === (r.ownerDocument || Y) && f.push(d.defaultView || d.parentWindow || e)
                    }
                    for (h = 0;
                        (l = f[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? u : c.bindType || p, a = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), a && a.apply(l, i), a = s && l[s], a && ct.acceptData(l) && a.apply && a.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = p, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), i) === !1) && ct.acceptData(r) && s && r[p] && !ct.isWindow(r)) {
                        d = r[s], d && (r[s] = null), ct.event.triggered = p;
                        try {
                            r[p]()
                        } catch (g) {}
                        ct.event.triggered = t, d && (r[s] = d)
                    }
                    return n.result
                }
            },
            dispatch: function (e) {
                e = ct.event.fix(e);
                var n, i, r, o, a, s = [],
                    l = ot.call(arguments),
                    u = (ct._data(this, "events") || {})[e.type] || [],
                    c = ct.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (s = ct.event.handlers.call(this, e, u), n = 0;
                        (o = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, a = 0;
                            (r = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, n) {
                var i, r, o, a, s = [],
                    l = n.delegateCount,
                    u = e.target;
                if (l && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], a = 0; l > a; a++) r = n[a], i = r.selector + " ", o[i] === t && (o[i] = r.needsContext ? ct(i, this).index(u) >= 0 : ct.find(i, this, null, [u]).length), o[i] && o.push(r);
                            o.length && s.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return l < n.length && s.push({
                    elem: this,
                    handlers: n.slice(l)
                }), s
            },
            fix: function (e) {
                if (e[ct.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Pt.test(r) ? this.mouseHooks : Lt.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ct.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, n) {
                    var i, r, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || Y, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== c() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === c() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function (e) {
                        return ct.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, i) {
                var r = ct.extend(new ct.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ct.event.trigger(r, null, t) : ct.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ct.removeEvent = Y.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === X && (e[i] = null), e.detachEvent(i, n))
        }, ct.Event = function (e, t) {
            return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, t && ct.extend(this, t), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, void 0) : new ct.Event(e, t)
        }, ct.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ct.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (e, t) {
            ct.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !ct.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ct.support.submitBubbles || (ct.event.special.submit = {
            setup: function () {
                return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target,
                        i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                    i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), ct._data(i, "submitBubbles", !0))
                }), void 0)
            },
            postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function () {
                return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), void 0)
            }
        }), ct.support.changeBubbles || (ct.event.special.change = {
            setup: function () {
                return qt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ct.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
                })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    qt.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                    }), ct._data(t, "changeBubbles", !0))
                }), void 0)
            },
            handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return ct.event.remove(this, "._change"), !qt.test(this.nodeName)
            }
        }), ct.support.focusinBubbles || ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = 0,
                i = function (e) {
                    ct.event.simulate(t, e.target, ct.event.fix(e), !0)
                };
            ct.event.special[t] = {
                setup: function () {
                    0 === n++ && Y.addEventListener(e, i, !0)
                },
                teardown: function () {
                    0 === --n && Y.removeEventListener(e, i, !0)
                }
            }
        }), ct.fn.extend({
            on: function (e, n, i, r, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (a in e) this.on(a, n, i, e[a], o);
                    return this
                }
                if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = u;
                else if (!r) return this;
                return 1 === o && (s = r, r = function (e) {
                    return ct().off(e), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = ct.guid++)), this.each(function () {
                    ct.event.add(this, e, r, i, n)
                })
            },
            one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function (e, n, i) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ct(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = u), this.each(function () {
                    ct.event.remove(this, e, i, n)
                })
            },
            trigger: function (e, t) {
                return this.each(function () {
                    ct.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? ct.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Rt = /^.[^:#\[\.,]*$/,
            Wt = /^(?:parents|prev(?:Until|All))/,
            Bt = ct.expr.match.needsContext,
            zt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ct.fn.extend({
            find: function (e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(ct(e).filter(function () {
                    for (t = 0; r > t; t++)
                        if (ct.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) ct.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function (e) {
                var t, n = ct(e, this),
                    i = n.length;
                return this.filter(function () {
                    for (t = 0; i > t; t++)
                        if (ct.contains(this, n[t])) return !0
                })
            },
            not: function (e) {
                return this.pushStack(h(this, e || [], !0))
            },
            filter: function (e) {
                return this.pushStack(h(this, e || [], !1))
            },
            is: function (e) {
                return !!h(this, "string" == typeof e && Bt.test(e) ? ct(e) : e || [], !1).length
            },
            closest: function (e, t) {
                for (var n, i = 0, r = this.length, o = [], a = Bt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
                            n = o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ct.unique(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
                    i = ct.merge(this.get(), n);
                return this.pushStack(ct.unique(i))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ct.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return ct.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return ct.dir(e, "parentNode", n)
            },
            next: function (e) {
                return d(e, "nextSibling")
            },
            prev: function (e) {
                return d(e, "previousSibling")
            },
            nextAll: function (e) {
                return ct.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return ct.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return ct.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return ct.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return ct.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return ct.sibling(e.firstChild)
            },
            contents: function (e) {
                return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
            }
        }, function (e, t) {
            ct.fn[e] = function (n, i) {
                var r = ct.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ct.filter(i, r)), this.length > 1 && (zt[e] || (r = ct.unique(r)), Wt.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        }), ct.extend({
            filter: function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ct.find.matchesSelector(i, e) ? [i] : [] : ct.find.matches(e, ct.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function (e, n, i) {
                for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ct(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
                return r
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Zt = / jQuery\d+="(?:null|\d+)"/g,
            Xt = new RegExp("<(?:" + Qt + ")[\\s/>]", "i"),
            Vt = /^\s+/,
            Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Kt = /<([\w:]+)/,
            Gt = /<tbody/i,
            Jt = /<|&#?\w+;/,
            en = /<(?:script|style|link)/i,
            tn = /^(?:checkbox|radio)$/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rn = /^$|\/(?:java|ecma)script/i,
            on = /^true\/(.*)/,
            an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            sn = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ln = f(Y),
            un = ln.appendChild(Y.createElement("div"));
        sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ct.fn.extend({
            text: function (e) {
                return ct.access(this, function (e) {
                    return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function (e, t) {
                for (var n, i = e ? ct.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ct.cleanData(_(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && v(_(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ct.cleanData(_(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ct.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return ct.clone(this, e, t)
                })
            },
            html: function (e) {
                return ct.access(this, function (e) {
                    var n = this[0] || {},
                        i = 0,
                        r = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Zt, "") : t;
                    if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Xt.test(e) || !ct.support.leadingWhitespace && Vt.test(e) || sn[(Kt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Yt, "<$1></$2>");
                        try {
                            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(_(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = ct.map(this, function (e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    t = 0;
                return this.domManip(arguments, function (n) {
                    var i = e[t++],
                        r = e[t++];
                    r && (i && i.parentNode !== r && (i = this.nextSibling), ct(this).remove(), r.insertBefore(n, i))
                }, !0), t ? this : this.remove()
            },
            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, t, n) {
                e = it.apply([], e);
                var i, r, o, a, s, l, u = 0,
                    c = this.length,
                    d = this,
                    h = c - 1,
                    f = e[0],
                    p = ct.isFunction(f);
                if (p || !(1 >= c || "string" != typeof f || ct.support.checkClone) && nn.test(f)) return this.each(function (i) {
                    var r = d.eq(i);
                    p && (e[0] = f.call(this, i, r.html())), r.domManip(e, t, n)
                });
                if (c && (l = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (a = ct.map(_(l, "script"), m), o = a.length; c > u; u++) r = l, u !== h && (r = ct.clone(r, !0, !0), o && ct.merge(a, _(r, "script"))), t.call(this[u], r, u);
                    if (o)
                        for (s = a[a.length - 1].ownerDocument, ct.map(a, g), u = 0; o > u; u++) r = a[u], rn.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(s, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(an, "")));
                    l = i = null
                }
                return this
            }
        }), ct.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ct.fn[e] = function (e) {
                for (var n, i = 0, r = [], o = ct(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ct(o[i])[t](n), rt.apply(r, n.get());
                return this.pushStack(r)
            }
        }), ct.extend({
            clone: function (e, t, n) {
                var i, r, o, a, s, l = ct.contains(e.ownerDocument, e);
                if (ct.support.html5Clone || ct.isXMLDoc(e) || !Xt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(o = un.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
                    for (i = _(o), s = _(e), a = 0; null != (r = s[a]); ++a) i[a] && b(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || _(e), i = i || _(o), a = 0; null != (r = s[a]); a++) y(r, i[a]);
                    else y(e, o);
                return i = _(o, "script"), i.length > 0 && v(i, !l && _(e, "script")), i = s = r = null, o
            },
            buildFragment: function (e, t, n, i) {
                for (var r, o, a, s, l, u, c, d = e.length, h = f(t), p = [], m = 0; d > m; m++)
                    if (o = e[m], o || 0 === o)
                        if ("object" === ct.type(o)) ct.merge(p, o.nodeType ? [o] : o);
                        else if (Jt.test(o)) {
                    for (s = s || h.appendChild(t.createElement("div")), l = (Kt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[l] || sn._default, s.innerHTML = c[1] + o.replace(Yt, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                    if (!ct.support.leadingWhitespace && Vt.test(o) && p.push(t.createTextNode(Vt.exec(o)[0])), !ct.support.tbody)
                        for (o = "table" !== l || Gt.test(o) ? "<table>" !== c[1] || Gt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) ct.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (ct.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = h.lastChild
                } else p.push(t.createTextNode(o));
                for (s && h.removeChild(s), ct.support.appendChecked || ct.grep(_(p, "input"), x), m = 0; o = p[m++];)
                    if ((!i || -1 === ct.inArray(o, i)) && (a = ct.contains(o.ownerDocument, o), s = _(h.appendChild(o), "script"), a && v(s), n))
                        for (r = 0; o = s[r++];) rn.test(o.type || "") && n.push(o);
                return s = null, h
            },
            cleanData: function (e, t) {
                for (var n, i, r, o, a = 0, s = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = e[a]); a++)
                    if ((t || ct.acceptData(n)) && (r = n[s], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) c[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== X ? n.removeAttribute(s) : n[s] = null, tt.push(r))
                    }
            },
            _evalUrl: function (e) {
                return ct.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ct.fn.extend({
            wrapAll: function (e) {
                if (ct.isFunction(e)) return this.each(function (t) {
                    ct(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return ct.isFunction(e) ? this.each(function (t) {
                    ct(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = ct(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = ct.isFunction(e);
                return this.each(function (n) {
                    ct(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var cn, dn, hn, fn = /alpha\([^)]*\)/i,
            pn = /opacity\s*=\s*([^)]*)/,
            mn = /^(top|right|bottom|left)$/,
            gn = /^(none|table(?!-c[ea]).+)/,
            vn = /^margin/,
            yn = new RegExp("^(" + dt + ")(.*)$", "i"),
            bn = new RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"),
            _n = new RegExp("^([+-])=(" + dt + ")", "i"),
            xn = {
                BODY: "block"
            },
            wn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Fn = ["Top", "Right", "Bottom", "Left"],
            Cn = ["Webkit", "O", "Moz", "ms"];
        ct.fn.extend({
            css: function (e, n) {
                return ct.access(this, function (e, n, i) {
                    var r, o, a = {},
                        s = 0;
                    if (ct.isArray(n)) {
                        for (o = dn(e), r = n.length; r > s; s++) a[n[s]] = ct.css(e, n[s], !1, o);
                        return a
                    }
                    return i !== t ? ct.style(e, n, i) : ct.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function () {
                return F(this, !0)
            },
            hide: function () {
                return F(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    k(this) ? ct(this).show() : ct(this).hide()
                })
            }
        }), ct.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = hn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
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
                "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, n, i, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, l = ct.camelCase(n),
                        u = e.style;
                    if (n = ct.cssProps[l] || (ct.cssProps[l] = w(u, l)), s = ct.cssHooks[n] || ct.cssHooks[l], i === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : u[n];
                    if (a = typeof i, "string" === a && (o = _n.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || ct.cssNumber[l] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (i = s.set(e, i, r)) === t))) try {
                        u[n] = i
                    } catch (c) {}
                }
            },
            css: function (e, n, i, r) {
                var o, a, s, l = ct.camelCase(n);
                return n = ct.cssProps[l] || (ct.cssProps[l] = w(e.style, l)), s = ct.cssHooks[n] || ct.cssHooks[l], s && "get" in s && (a = s.get(e, !0, i)), a === t && (a = hn(e, n, r)), "normal" === a && n in kn && (a = kn[n]), "" === i || i ? (o = parseFloat(a), i === !0 || ct.isNumeric(o) ? o || 0 : a) : a
            }
        }), e.getComputedStyle ? (dn = function (t) {
            return e.getComputedStyle(t, null)
        }, hn = function (e, n, i) {
            var r, o, a, s = i || dn(e),
                l = s ? s.getPropertyValue(n) || s[n] : t,
                u = e.style;
            return s && ("" !== l || ct.contains(e.ownerDocument, e) || (l = ct.style(e, n)), bn.test(l) && vn.test(n) && (r = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = r, u.minWidth = o, u.maxWidth = a)), l
        }) : Y.documentElement.currentStyle && (dn = function (e) {
            return e.currentStyle
        }, hn = function (e, n, i) {
            var r, o, a, s = i || dn(e),
                l = s ? s[n] : t,
                u = e.style;
            return null == l && u && u[n] && (l = u[n]), bn.test(l) && !mn.test(n) && (r = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, a && (o.left = a)), "" === l ? "auto" : l
        }), ct.each(["height", "width"], function (e, t) {
            ct.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? 0 === e.offsetWidth && gn.test(ct.css(e, "display")) ? ct.swap(e, wn, function () {
                        return j(e, t, i)
                    }) : j(e, t, i) : void 0
                },
                set: function (e, n, i) {
                    var r = i && dn(e);
                    return C(e, n, i ? $(e, t, i, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ct.support.opacity || (ct.cssHooks.opacity = {
            get: function (e, t) {
                return pn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = fn.test(o) ? o.replace(fn, r) : o + " " + r)
            }
        }), ct(function () {
            ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
                get: function (e, t) {
                    return t ? ct.swap(e, {
                        display: "inline-block"
                    }, hn, [e, "marginRight"]) : void 0
                }
            }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, t) {
                ct.cssHooks[t] = {
                    get: function (e, n) {
                        return n ? (n = hn(e, t), bn.test(n) ? ct(e).position()[t] + "px" : n) : void 0
                    }
                }
            })
        }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
        }, ct.expr.filters.visible = function (e) {
            return !ct.expr.filters.hidden(e)
        }), ct.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            ct.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Fn[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, vn.test(e) || (ct.cssHooks[e + t].set = C)
        });
        var $n = /%20/g,
            jn = /\[\]$/,
            En = /\r?\n/g,
            An = /^(?:submit|button|image|reset|file)$/i,
            Tn = /^(?:input|select|textarea|keygen)/i;
        ct.fn.extend({
            serialize: function () {
                return ct.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ct.prop(this, "elements");
                    return e ? ct.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ct(this).is(":disabled") && Tn.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
                }).map(function (e, t) {
                    var n = ct(this).val();
                    return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(En, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(En, "\r\n")
                    }
                }).get()
            }
        }), ct.param = function (e, n) {
            var i, r = [],
                o = function (e, t) {
                    t = ct.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function () {
                o(this.name, this.value)
            });
            else
                for (i in e) T(i, e[i], n, o);
            return r.join("&").replace($n, "+")
        }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ct.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ct.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
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
        });
        var Sn, Dn, In = ct.now(),
            Nn = /\?/,
            On = /#.*$/,
            Mn = /([?&])_=[^&]*/,
            qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ln = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Pn = /^(?:GET|HEAD)$/,
            Hn = /^\/\//,
            Un = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Rn = ct.fn.load,
            Wn = {},
            Bn = {},
            zn = "*/".concat("*");
        try {
            Dn = V.href
        } catch (Qn) {
            Dn = Y.createElement("a"), Dn.href = "", Dn = Dn.href
        }
        Sn = Un.exec(Dn.toLowerCase()) || [], ct.fn.load = function (e, n, i) {
            if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
            var r, o, a, s = this,
                l = e.indexOf(" ");
            return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ct.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ct.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function (e) {
                o = arguments, s.html(r ? ct("<div>").append(ct.parseHTML(e)).find(r) : e)
            }).complete(i && function (e, t) {
                s.each(i, o || [e.responseText, t, e])
            }), this
        }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ct.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dn,
                type: "GET",
                isLocal: Ln.test(Sn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ct.parseJSON,
                    "text xml": ct.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? I(I(e, ct.ajaxSettings), t) : I(ct.ajaxSettings, e)
            },
            ajaxPrefilter: S(Wn),
            ajaxTransport: S(Bn),
            ajax: function (e, n) {
                function i(e, n, i, r) {
                    var o, d, y, b, x, k = n;
                    2 !== _ && (_ = 2, l && clearTimeout(l), c = t, s = r || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = N(h, w, i)), b = O(h, b, w, o), o ? (h.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ct.lastModified[a] = x), x = w.getResponseHeader("etag"), x && (ct.etag[a] = x)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, d = b.data, y = b.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || k) + "", o ? m.resolveWith(f, [d, k, w]) : m.rejectWith(f, [w, k, y]), w.statusCode(v), v = t, u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [w, h, o ? d : y]), g.fireWith(f, [w, k]), u && (p.trigger("ajaxComplete", [w, h]), --ct.active || ct.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var r, o, a, s, l, u, c, d, h = ct.ajaxSetup({}, n),
                    f = h.context || h,
                    p = h.context && (f.nodeType || f.jquery) ? ct(f) : ct.event,
                    m = ct.Deferred(),
                    g = ct.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    b = {},
                    _ = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === _) {
                                if (!d)
                                    for (d = {}; t = qn.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === _ ? s : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return _ || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return _ || (h.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > _)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || x;
                            return c && c.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, h.url = ((e || h.url || Dn) + "").replace(On, "").replace(Hn, Sn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ct.trim(h.dataType || "*").toLowerCase().match(ht) || [""], null == h.crossDomain && (r = Un.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === Sn[1] && r[2] === Sn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Sn[3] || ("http:" === Sn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ct.param(h.data, h.traditional)), D(Wn, h, n, w), 2 === _) return w;
                u = h.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pn.test(h.type), a = h.url, h.hasContent || (h.data && (a = h.url += (Nn.test(a) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Mn.test(a) ? a.replace(Mn, "$1_=" + In++) : a + (Nn.test(a) ? "&" : "?") + "_=" + In++)), h.ifModified && (ct.lastModified[a] && w.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && w.setRequestHeader("If-None-Match", ct.etag[a])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : h.accepts["*"]);
                for (o in h.headers) w.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (h.beforeSend.call(f, w, h) === !1 || 2 === _)) return w.abort();
                x = "abort";
                for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](h[o]);
                if (c = D(Bn, h, n, w)) {
                    w.readyState = 1, u && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (l = setTimeout(function () {
                        w.abort("timeout")
                    }, h.timeout));
                    try {
                        _ = 1, c.send(y, i)
                    } catch (k) {
                        if (!(2 > _)) throw k;
                        i(-1, k)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function (e, t, n) {
                return ct.get(e, t, n, "json")
            },
            getScript: function (e, n) {
                return ct.get(e, t, n, "script")
            }
        }), ct.each(["get", "post"], function (e, n) {
            ct[n] = function (e, i, r, o) {
                return ct.isFunction(i) && (o = o || r, r = i, i = t), ct.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: i,
                    success: r
                })
            }
        }), ct.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (e) {
                    return ct.globalEval(e), e
                }
            }
        }), ct.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ct.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, i = Y.head || ct("head")[0] || Y.documentElement;
                return {
                    send: function (t, r) {
                        n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function () {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Zn = [],
            Xn = /(=)\?(?=&|$)|\?\?/;
        ct.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Zn.pop() || ct.expando + "_" + In++;
                return this[e] = !0, e
            }
        }), ct.ajaxPrefilter("json jsonp", function (n, i, r) {
            var o, a, s, l = n.jsonp !== !1 && (Xn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xn.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Xn, "$1" + o) : n.jsonp !== !1 && (n.url += (Nn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
                return s || ct.error(o + " was not called"), s[0]
            }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
                s = arguments
            }, r.always(function () {
                e[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Zn.push(o)), s && ct.isFunction(a) && a(s[0]), s = a = t
            }), "script") : void 0
        });
        var Vn, Yn, Kn = 0,
            Gn = e.ActiveXObject && function () {
                var e;
                for (e in Vn) Vn[e](t, !0)
            };
        ct.ajaxSettings.xhr = e.ActiveXObject ? function () {
            return !this.isLocal && M() || q()
        } : M, Yn = ct.ajaxSettings.xhr(), ct.support.cors = !!Yn && "withCredentials" in Yn, Yn = ct.support.ajax = !!Yn, Yn && ct.ajaxTransport(function (n) {
            if (!n.crossDomain || ct.support.cors) {
                var i;
                return {
                    send: function (r, o) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in r) l.setRequestHeader(s, r[s])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function (e, r) {
                            var s, u, c, d;
                            try {
                                if (i && (r || 4 === l.readyState))
                                    if (i = t, a && (l.onreadystatechange = ct.noop, Gn && delete Vn[a]), r) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (h) {
                                            c = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                    }
                            } catch (f) {
                                r || o(-1, f)
                            }
                            d && o(s, c, d, u)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Kn, Gn && (Vn || (Vn = {}, ct(e).unload(Gn)), Vn[a] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function () {
                        i && i(t, !0)
                    }
                }
            }
        });
        var Jn, ei, ti = /^(?:toggle|show|hide)$/,
            ni = new RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"),
            ii = /queueHooks$/,
            ri = [R],
            oi = {
                "*": [
                    function (e, t) {
                        var n = this.createTween(e, t),
                            i = n.cur(),
                            r = ni.exec(t),
                            o = r && r[3] || (ct.cssNumber[e] ? "" : "px"),
                            a = (ct.cssNumber[e] || "px" !== o && +i) && ni.exec(ct.css(n.elem, e)),
                            s = 1,
                            l = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3], r = r || [], a = +i || 1;
                            do s = s || ".5", a /= s, ct.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                        }
                        return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                    }
                ]
            };
        ct.Animation = ct.extend(H, {
            tweener: function (e, t) {
                ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], oi[n] = oi[n] || [], oi[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? ri.unshift(e) : ri.push(e)
            }
        }), ct.Tween = W, W.prototype = {
            constructor: W,
            init: function (e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ct.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = W.propHooks[this.prop];
                return e && e.get ? e.get(this) : W.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = W.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function (e) {
                    ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ct.each(["toggle", "show", "hide"], function (e, t) {
            var n = ct.fn[t];
            ct.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, i, r)
            }
        }), ct.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(k).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = ct.isEmptyObject(e),
                    o = ct.speed(t, n, i),
                    a = function () {
                        var t = H(this, ct.extend({}, e), o);
                        (r || ct._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, n, i) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = ct.timers,
                        a = ct._data(this);
                    if (n) a[n] && a[n].stop && r(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && ii.test(n) && r(a[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                    (t || !i) && ct.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ct._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = ct.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, ct.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ct.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
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
            ct.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ct.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? ct.extend({}, e) : {
                complete: n || !n && t || ct.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ct.isFunction(t) && t
            };
            return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
            }, i
        }, ct.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ct.timers = [], ct.fx = W.prototype.init, ct.fx.tick = function () {
            var e, n = ct.timers,
                i = 0;
            for (Jn = ct.now(); i < n.length; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
            n.length || ct.fx.stop(), Jn = t
        }, ct.fx.timer = function (e) {
            e() && ct.timers.push(e) && ct.fx.start()
        }, ct.fx.interval = 13, ct.fx.start = function () {
            ei || (ei = setInterval(ct.fx.tick, ct.fx.interval))
        }, ct.fx.stop = function () {
            clearInterval(ei), ei = null
        }, ct.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function (e) {
            return ct.grep(ct.timers, function (t) {
                return e === t.elem
            }).length
        }), ct.fn.offset = function (e) {
            if (arguments.length) return e === t ? this : this.each(function (t) {
                ct.offset.setOffset(this, e, t)
            });
            var n, i, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                a = o && o.ownerDocument;
            if (a) return n = a.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== X && (r = o.getBoundingClientRect()), i = z(a), {
                top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : r
        }, ct.offset = {
            setOffset: function (e, t, n) {
                var i = ct.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var r, o, a = ct(e),
                    s = a.offset(),
                    l = ct.css(e, "top"),
                    u = ct.css(e, "left"),
                    c = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [l, u]) > -1,
                    d = {},
                    h = {};
                c ? (h = a.position(), r = h.top, o = h.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), ct.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + r), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
            }
        }, ct.fn.extend({
            position: function () {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ct.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ct.css(i, "marginTop", !0),
                        left: t.left - n.left - ct.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || K; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
                    return e || K
                })
            }
        }), ct.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, n) {
            var i = /Y/.test(n);
            ct.fn[e] = function (r) {
                return ct.access(this, function (e, r, o) {
                    var a = z(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : (a ? a.scrollTo(i ? ct(a).scrollLeft() : o, i ? o : ct(a).scrollTop()) : e[r] = o, void 0)
                }, e, r, arguments.length, null)
            }
        }), ct.each({
            Height: "height",
            Width: "width"
        }, function (e, n) {
            ct.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function (i, r) {
                ct.fn[r] = function (r, o) {
                    var a = arguments.length && (i || "boolean" != typeof r),
                        s = i || (r === !0 || o === !0 ? "margin" : "border");
                    return ct.access(this, function (n, i, r) {
                        var o;
                        return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ct.css(n, i, s) : ct.style(n, i, r, s)
                    }, n, a ? r : t, a, null)
                }
            })
        }), ct.fn.size = function () {
            return this.length
        }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ct
        }))
    }(window),
    function (e, t) {
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
            buttonClickSelector: "button[data-remote]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
            disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with]",
            CSRFProtection: function (t) {
                var n = e('meta[name="csrf-token"]').attr("content");
                n && t.setRequestHeader("X-CSRF-Token", n)
            },
            fire: function (t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), r.result !== !1
            },
            confirm: function (e) {
                return confirm(e)
            },
            ajax: function (t) {
                return e.ajax(t)
            },
            href: function (e) {
                return e.attr("href")
            },
            handleRemote: function (i) {
                var r, o, a, s, l, u, c, d;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("cross-domain"), l = s === t ? null : s, u = i.data("with-credentials") || null, c = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                        var h = i.data("ujs:submit-button");
                        h && (a.push(h), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                    d = {
                        type: r || "GET",
                        data: a,
                        dataType: c,
                        beforeSend: function (e, r) {
                            return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [e, r])
                        },
                        success: function (e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function (e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function (e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: l
                    }, u && (d.xhrFields = {
                        withCredentials: u
                    }), o && (d.url = o);
                    var f = n.ajax(d);
                    return i.trigger("ajax:send", f), f
                }
                return !1
            },
            handleMethod: function (i) {
                var r = n.href(i),
                    o = i.data("method"),
                    a = i.attr("target"),
                    s = e("meta[name=csrf-token]").attr("content"),
                    l = e("meta[name=csrf-param]").attr("content"),
                    u = e('<form method="post" action="' + r + '"></form>'),
                    c = '<input name="_method" value="' + o + '" type="hidden" />';
                l !== t && s !== t && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && u.attr("target", a), u.hide().append(c).appendTo("body"), u.submit()
            },
            disableFormElements: function (t) {
                t.find(n.disableSelector).each(function () {
                    var t = e(this),
                        n = t.is("button") ? "html" : "val";
                    t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
                })
            },
            enableFormElements: function (t) {
                t.find(n.enableSelector).each(function () {
                    var t = e(this),
                        n = t.is("button") ? "html" : "val";
                    t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
                })
            },
            allowAction: function (e) {
                var t, i = e.data("confirm"),
                    r = !1;
                return i ? (n.fire(e, "confirm") && (r = n.confirm(i), t = n.fire(e, "confirm:complete", [r])), r && t) : !0
            },
            blankInputs: function (t, n, i) {
                var r, o, a = e(),
                    s = n || "input,textarea",
                    l = t.find(s);
                return l.each(function () {
                    if (r = e(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                        if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                        a = a.add(r)
                    }
                }), a.length ? a : !1
            },
            nonBlankInputs: function (e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function (t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function (e) {
                e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                    return n.stopEverything(e)
                })
            },
            enableElement: function (e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
            n.enableElement(e(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
            var r = e(this),
                o = r.data("method"),
                a = r.data("params");
            if (!n.allowAction(r)) return n.stopEverything(i);
            if (r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== t) {
                if (!(!i.metaKey && !i.ctrlKey || o && "GET" !== o || a)) return !0;
                var s = n.handleRemote(r);
                return s === !1 ? n.enableElement(r) : s.error(function () {
                    n.enableElement(r)
                }), !1
            }
            return r.data("method") ? (n.handleMethod(r), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function (t) {
            var i = e(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.inputChangeSelector, "change.rails", function (t) {
            var i = e(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
            var r = e(this),
                o = r.data("remote") !== t,
                a = n.blankInputs(r, n.requiredInputSelector),
                s = n.nonBlankInputs(r, n.fileInputSelector);
            if (!n.allowAction(r)) return n.stopEverything(i);
            if (a && r.attr("novalidate") == t && n.fire(r, "ajax:aborted:required", [a])) return n.stopEverything(i);
            if (o) {
                if (s) {
                    setTimeout(function () {
                        n.disableFormElements(r)
                    }, 13);
                    var l = n.fire(r, "ajax:aborted:file", [s]);
                    return l || setTimeout(function () {
                        n.enableFormElements(r)
                    }, 13), l
                }
                return n.handleRemote(r), !1
            }
            setTimeout(function () {
                n.disableFormElements(r)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function (t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var r = i.attr("name"),
                o = r ? {
                    name: r,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", o)
        }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
            this == t.target && n.disableFormElements(e(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
            this == t.target && n.enableFormElements(e(this))
        }), e(function () {
            var t = e("meta[name=csrf-token]").attr("content"),
                n = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + n + '"]').val(t)
        }))
    }(jQuery),
    function (e, t) {
        var n = "ui-effects-";
        e.effects = {
                effect: {}
            },
            function (e, t) {
                function n(e, t, n) {
                    var i = d[t.type] || {};
                    return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : e > i.max ? i.max : e)
                }

                function i(n) {
                    var i = u(),
                        r = i._rgba = [];
                    return n = n.toLowerCase(), p(l, function (e, o) {
                        var a, s = o.re.exec(n),
                            l = s && o.parse(s),
                            u = o.space || "rgba";
                        return l ? (a = i[u](l), i[c[u].cache] = a[c[u].cache], r = i._rgba = a._rgba, !1) : t
                    }), r.length ? ("0,0,0,0" === r.join() && e.extend(r, o.transparent), i) : o[n]
                }

                function r(e, t, n) {
                    return n = (n + 1) % 1, 1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e
                }
                var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    s = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (e) {
                            return [e[1], e[2], e[3], e[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function (e) {
                            return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function (e) {
                            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function (e) {
                            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function (e) {
                            return [e[1], e[2] / 100, e[3] / 100, e[4]]
                        }
                    }],
                    u = e.Color = function (t, n, i, r) {
                        return new e.Color.fn.parse(t, n, i, r)
                    },
                    c = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    d = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    h = u.support = {},
                    f = e("<p>")[0],
                    p = e.each;
                f.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = f.style.backgroundColor.indexOf("rgba") > -1, p(c, function (e, t) {
                    t.cache = "_" + e, t.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), u.fn = e.extend(u.prototype, {
                    parse: function (r, a, s, l) {
                        if (r === t) return this._rgba = [null, null, null, null], this;
                        (r.jquery || r.nodeType) && (r = e(r).css(a), a = t);
                        var d = this,
                            h = e.type(r),
                            f = this._rgba = [];
                        return a !== t && (r = [r, a, s, l], h = "array"), "string" === h ? this.parse(i(r) || o._default) : "array" === h ? (p(c.rgba.props, function (e, t) {
                            f[t.idx] = n(r[t.idx], t)
                        }), this) : "object" === h ? (r instanceof u ? p(c, function (e, t) {
                            r[t.cache] && (d[t.cache] = r[t.cache].slice())
                        }) : p(c, function (t, i) {
                            var o = i.cache;
                            p(i.props, function (e, t) {
                                if (!d[o] && i.to) {
                                    if ("alpha" === e || null == r[e]) return;
                                    d[o] = i.to(d._rgba)
                                }
                                d[o][t.idx] = n(r[e], t, !0)
                            }), d[o] && 0 > e.inArray(null, d[o].slice(0, 3)) && (d[o][3] = 1, i.from && (d._rgba = i.from(d[o])))
                        }), this) : t
                    },
                    is: function (e) {
                        var n = u(e),
                            i = !0,
                            r = this;
                        return p(c, function (e, o) {
                            var a, s = n[o.cache];
                            return s && (a = r[o.cache] || o.to && o.to(r._rgba) || [], p(o.props, function (e, n) {
                                return null != s[n.idx] ? i = s[n.idx] === a[n.idx] : t
                            })), i
                        }), i
                    },
                    _space: function () {
                        var e = [],
                            t = this;
                        return p(c, function (n, i) {
                            t[i.cache] && e.push(n)
                        }), e.pop()
                    },
                    transition: function (e, t) {
                        var i = u(e),
                            r = i._space(),
                            o = c[r],
                            a = 0 === this.alpha() ? u("transparent") : this,
                            s = a[o.cache] || o.to(a._rgba),
                            l = s.slice();
                        return i = i[o.cache], p(o.props, function (e, r) {
                            var o = r.idx,
                                a = s[o],
                                u = i[o],
                                c = d[r.type] || {};
                            null !== u && (null === a ? l[o] = u : (c.mod && (u - a > c.mod / 2 ? a += c.mod : a - u > c.mod / 2 && (a -= c.mod)), l[o] = n((u - a) * t + a, r)))
                        }), this[r](l)
                    },
                    blend: function (t) {
                        if (1 === this._rgba[3]) return this;
                        var n = this._rgba.slice(),
                            i = n.pop(),
                            r = u(t)._rgba;
                        return u(e.map(n, function (e, t) {
                            return (1 - i) * r[t] + i * e
                        }))
                    },
                    toRgbaString: function () {
                        var t = "rgba(",
                            n = e.map(this._rgba, function (e, t) {
                                return null == e ? t > 2 ? 1 : 0 : e
                            });
                        return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                    },
                    toHslaString: function () {
                        var t = "hsla(",
                            n = e.map(this.hsla(), function (e, t) {
                                return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                            });
                        return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                    },
                    toHexString: function (t) {
                        var n = this._rgba.slice(),
                            i = n.pop();
                        return t && n.push(~~(255 * i)), "#" + e.map(n, function (e) {
                            return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                        }).join("")
                    },
                    toString: function () {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), u.fn.parse.prototype = u.fn, c.hsla.to = function (e) {
                    if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                    var t, n, i = e[0] / 255,
                        r = e[1] / 255,
                        o = e[2] / 255,
                        a = e[3],
                        s = Math.max(i, r, o),
                        l = Math.min(i, r, o),
                        u = s - l,
                        c = s + l,
                        d = .5 * c;
                    return t = l === s ? 0 : i === s ? 60 * (r - o) / u + 360 : r === s ? 60 * (o - i) / u + 120 : 60 * (i - r) / u + 240, n = 0 === u ? 0 : .5 >= d ? u / c : u / (2 - c), [Math.round(t) % 360, n, d, null == a ? 1 : a]
                }, c.hsla.from = function (e) {
                    if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                    var t = e[0] / 360,
                        n = e[1],
                        i = e[2],
                        o = e[3],
                        a = .5 >= i ? i * (1 + n) : i + n - i * n,
                        s = 2 * i - a;
                    return [Math.round(255 * r(s, a, t + 1 / 3)), Math.round(255 * r(s, a, t)), Math.round(255 * r(s, a, t - 1 / 3)), o]
                }, p(c, function (i, r) {
                    var o = r.props,
                        a = r.cache,
                        l = r.to,
                        c = r.from;
                    u.fn[i] = function (i) {
                        if (l && !this[a] && (this[a] = l(this._rgba)), i === t) return this[a].slice();
                        var r, s = e.type(i),
                            d = "array" === s || "object" === s ? i : arguments,
                            h = this[a].slice();
                        return p(o, function (e, t) {
                            var i = d["object" === s ? e : t.idx];
                            null == i && (i = h[t.idx]), h[t.idx] = n(i, t)
                        }), c ? (r = u(c(h)), r[a] = h, r) : u(h)
                    }, p(o, function (t, n) {
                        u.fn[t] || (u.fn[t] = function (r) {
                            var o, a = e.type(r),
                                l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : i,
                                u = this[l](),
                                c = u[n.idx];
                            return "undefined" === a ? c : ("function" === a && (r = r.call(this, c), a = e.type(r)), null == r && n.empty ? this : ("string" === a && (o = s.exec(r), o && (r = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), u[n.idx] = r, this[l](u)))
                        })
                    })
                }), u.hook = function (t) {
                    var n = t.split(" ");
                    p(n, function (t, n) {
                        e.cssHooks[n] = {
                            set: function (t, r) {
                                var o, a, s = "";
                                if ("transparent" !== r && ("string" !== e.type(r) || (o = i(r)))) {
                                    if (r = u(o || r), !h.rgba && 1 !== r._rgba[3]) {
                                        for (a = "backgroundColor" === n ? t.parentNode : t;
                                            ("" === s || "transparent" === s) && a && a.style;) try {
                                            s = e.css(a, "backgroundColor"), a = a.parentNode
                                        } catch (l) {}
                                        r = r.blend(s && "transparent" !== s ? s : "_default")
                                    }
                                    r = r.toRgbaString()
                                }
                                try {
                                    t.style[n] = r
                                } catch (l) {}
                            }
                        }, e.fx.step[n] = function (t) {
                            t.colorInit || (t.start = u(t.elem, n), t.end = u(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                        }
                    })
                }, u.hook(a), e.cssHooks.borderColor = {
                    expand: function (e) {
                        var t = {};
                        return p(["Top", "Right", "Bottom", "Left"], function (n, i) {
                            t["border" + i + "Color"] = e
                        }), t
                    }
                }, o = e.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function () {
                function n(t) {
                    var n, i, r = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        o = {};
                    if (r && r.length && r[0] && r[r[0]])
                        for (i = r.length; i--;) n = r[i], "string" == typeof r[n] && (o[e.camelCase(n)] = r[n]);
                    else
                        for (n in r) "string" == typeof r[n] && (o[n] = r[n]);
                    return o
                }

                function i(t, n) {
                    var i, r, a = {};
                    for (i in n) r = n[i], t[i] !== r && (o[i] || (e.fx.step[i] || !isNaN(parseFloat(r))) && (a[i] = r));
                    return a
                }
                var r = ["add", "remove", "toggle"],
                    o = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, n) {
                    e.fx.step[n] = function (e) {
                        ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, n, e.end), e.setAttr = !0)
                    }
                }), e.fn.addBack || (e.fn.addBack = function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }), e.effects.animateClass = function (t, o, a, s) {
                    var l = e.speed(o, a, s);
                    return this.queue(function () {
                        var o, a = e(this),
                            s = a.attr("class") || "",
                            u = l.children ? a.find("*").addBack() : a;
                        u = u.map(function () {
                            var t = e(this);
                            return {
                                el: t,
                                start: n(this)
                            }
                        }), o = function () {
                            e.each(r, function (e, n) {
                                t[n] && a[n + "Class"](t[n])
                            })
                        }, o(), u = u.map(function () {
                            return this.end = n(this.el[0]), this.diff = i(this.start, this.end), this
                        }), a.attr("class", s), u = u.map(function () {
                            var t = this,
                                n = e.Deferred(),
                                i = e.extend({}, l, {
                                    queue: !1,
                                    complete: function () {
                                        n.resolve(t)
                                    }
                                });
                            return this.el.animate(this.diff, i), n.promise()
                        }), e.when.apply(e, u.get()).done(function () {
                            o(), e.each(arguments, function () {
                                var t = this.el;
                                e.each(this.diff, function (e) {
                                    t.css(e, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, e.fn.extend({
                    addClass: function (t) {
                        return function (n, i, r, o) {
                            return i ? e.effects.animateClass.call(this, {
                                add: n
                            }, i, r, o) : t.apply(this, arguments)
                        }
                    }(e.fn.addClass),
                    removeClass: function (t) {
                        return function (n, i, r, o) {
                            return arguments.length > 1 ? e.effects.animateClass.call(this, {
                                remove: n
                            }, i, r, o) : t.apply(this, arguments)
                        }
                    }(e.fn.removeClass),
                    toggleClass: function (n) {
                        return function (i, r, o, a, s) {
                            return "boolean" == typeof r || r === t ? o ? e.effects.animateClass.call(this, r ? {
                                add: i
                            } : {
                                remove: i
                            }, o, a, s) : n.apply(this, arguments) : e.effects.animateClass.call(this, {
                                toggle: i
                            }, r, o, a)
                        }
                    }(e.fn.toggleClass),
                    switchClass: function (t, n, i, r, o) {
                        return e.effects.animateClass.call(this, {
                            add: n,
                            remove: t
                        }, i, r, o)
                    }
                })
            }(),
            function () {
                function i(t, n, i, r) {
                    return e.isPlainObject(t) && (n = t, t = t.effect), t = {
                        effect: t
                    }, null == n && (n = {}), e.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (r = i, i = n, n = {}), e.isFunction(i) && (r = i, i = null), n && e.extend(t, n), i = i || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, t.complete = r || n.complete, t
                }

                function r(t) {
                    return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                }
                e.extend(e.effects, {
                    version: "1.10.3",
                    save: function (e, t) {
                        for (var i = 0; t.length > i; i++) null !== t[i] && e.data(n + t[i], e[0].style[t[i]])
                    },
                    restore: function (e, i) {
                        var r, o;
                        for (o = 0; i.length > o; o++) null !== i[o] && (r = e.data(n + i[o]), r === t && (r = ""), e.css(i[o], r))
                    },
                    setMode: function (e, t) {
                        return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                    },
                    getBaseline: function (e, t) {
                        var n, i;
                        switch (e[0]) {
                        case "top":
                            n = 0;
                            break;
                        case "middle":
                            n = .5;
                            break;
                        case "bottom":
                            n = 1;
                            break;
                        default:
                            n = e[0] / t.height
                        }
                        switch (e[1]) {
                        case "left":
                            i = 0;
                            break;
                        case "center":
                            i = .5;
                            break;
                        case "right":
                            i = 1;
                            break;
                        default:
                            i = e[1] / t.width
                        }
                        return {
                            x: i,
                            y: n
                        }
                    },
                    createWrapper: function (t) {
                        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                        var n = {
                                width: t.outerWidth(!0),
                                height: t.outerHeight(!0),
                                "float": t.css("float")
                            },
                            i = e("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            r = {
                                width: t.width(),
                                height: t.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (a) {
                            o = document.body
                        }
                        return t.wrap(i), (t[0] === o || e.contains(t[0], o)) && e(o).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({
                            position: "relative"
                        }), t.css({
                            position: "relative"
                        })) : (e.extend(n, {
                            position: t.css("position"),
                            zIndex: t.css("z-index")
                        }), e.each(["top", "left", "bottom", "right"], function (e, i) {
                            n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                        }), t.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), t.css(r), i.css(n).show()
                    },
                    removeWrapper: function (t) {
                        var n = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
                    },
                    setTransition: function (t, n, i, r) {
                        return r = r || {}, e.each(n, function (e, n) {
                            var o = t.cssUnit(n);
                            o[0] > 0 && (r[n] = o[0] * i + o[1])
                        }), r
                    }
                }), e.fn.extend({
                    effect: function () {
                        function t(t) {
                            function i() {
                                e.isFunction(o) && o.call(r[0]), e.isFunction(t) && t()
                            }
                            var r = e(this),
                                o = n.complete,
                                s = n.mode;
                            (r.is(":hidden") ? "hide" === s : "show" === s) ? (r[s](), i()) : a.call(r[0], n, i)
                        }
                        var n = i.apply(this, arguments),
                            r = n.mode,
                            o = n.queue,
                            a = e.effects.effect[n.effect];
                        return e.fx.off || !a ? r ? this[r](n.duration, n.complete) : this.each(function () {
                            n.complete && n.complete.call(this)
                        }) : o === !1 ? this.each(t) : this.queue(o || "fx", t)
                    },
                    show: function (e) {
                        return function (t) {
                            if (r(t)) return e.apply(this, arguments);
                            var n = i.apply(this, arguments);
                            return n.mode = "show", this.effect.call(this, n)
                        }
                    }(e.fn.show),
                    hide: function (e) {
                        return function (t) {
                            if (r(t)) return e.apply(this, arguments);
                            var n = i.apply(this, arguments);
                            return n.mode = "hide", this.effect.call(this, n)
                        }
                    }(e.fn.hide),
                    toggle: function (e) {
                        return function (t) {
                            if (r(t) || "boolean" == typeof t) return e.apply(this, arguments);
                            var n = i.apply(this, arguments);
                            return n.mode = "toggle", this.effect.call(this, n)
                        }
                    }(e.fn.toggle),
                    cssUnit: function (t) {
                        var n = this.css(t),
                            i = [];
                        return e.each(["em", "px", "%", "pt"], function (e, t) {
                            n.indexOf(t) > 0 && (i = [parseFloat(n), t])
                        }), i
                    }
                })
            }(),
            function () {
                var t = {};
                e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
                    t[n] = function (t) {
                        return Math.pow(t, e + 2)
                    }
                }), e.extend(t, {
                    Sine: function (e) {
                        return 1 - Math.cos(e * Math.PI / 2)
                    },
                    Circ: function (e) {
                        return 1 - Math.sqrt(1 - e * e)
                    },
                    Elastic: function (e) {
                        return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function (e) {
                        return e * e * (3 * e - 2)
                    },
                    Bounce: function (e) {
                        for (var t, n = 4;
                            ((t = Math.pow(2, --n)) - 1) / 11 > e;);
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                    }
                }), e.each(t, function (t, n) {
                    e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function (e) {
                        return 1 - n(1 - e)
                    }, e.easing["easeInOut" + t] = function (e) {
                        return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
                    }
                })
            }()
    }(jQuery),
    function (e) {
        e.effects.effect.puff = function (t, n) {
            var i = e(this),
                r = e.effects.setMode(i, t.mode || "hide"),
                o = "hide" === r,
                a = parseInt(t.percent, 10) || 150,
                s = a / 100,
                l = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            e.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: r,
                complete: n,
                percent: o ? a : 100,
                from: o ? l : {
                    height: l.height * s,
                    width: l.width * s,
                    outerHeight: l.outerHeight * s,
                    outerWidth: l.outerWidth * s
                }
            }), i.effect(t)
        }, e.effects.effect.scale = function (t, n) {
            var i = e(this),
                r = e.extend(!0, {}, t),
                o = e.effects.setMode(i, t.mode || "effect"),
                a = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === o ? 0 : 100),
                s = t.direction || "both",
                l = t.origin,
                u = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                },
                c = {
                    y: "horizontal" !== s ? a / 100 : 1,
                    x: "vertical" !== s ? a / 100 : 1
                };
            r.effect = "size", r.queue = !1, r.complete = n, "effect" !== o && (r.origin = l || ["middle", "center"], r.restore = !0), r.from = t.from || ("show" === o ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : u), r.to = {
                height: u.height * c.y,
                width: u.width * c.x,
                outerHeight: u.outerHeight * c.y,
                outerWidth: u.outerWidth * c.x
            }, r.fade && ("show" === o && (r.from.opacity = 0, r.to.opacity = 1), "hide" === o && (r.from.opacity = 1, r.to.opacity = 0)), i.effect(r)
        }, e.effects.effect.size = function (t, n) {
            var i, r, o, a = e(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                u = ["width", "height", "overflow"],
                c = ["fontSize"],
                d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                f = e.effects.setMode(a, t.mode || "effect"),
                p = t.restore || "effect" !== f,
                m = t.scale || "both",
                g = t.origin || ["middle", "center"],
                v = a.css("position"),
                y = p ? s : l,
                b = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === f && a.show(), i = {
                height: a.height(),
                width: a.width(),
                outerHeight: a.outerHeight(),
                outerWidth: a.outerWidth()
            }, "toggle" === t.mode && "show" === f ? (a.from = t.to || b, a.to = t.from || i) : (a.from = t.from || ("show" === f ? b : i), a.to = t.to || ("hide" === f ? b : i)), o = {
                from: {
                    y: a.from.height / i.height,
                    x: a.from.width / i.width
                },
                to: {
                    y: a.to.height / i.height,
                    x: a.to.width / i.width
                }
            }, ("box" === m || "both" === m) && (o.from.y !== o.to.y && (y = y.concat(d), a.from = e.effects.setTransition(a, d, o.from.y, a.from), a.to = e.effects.setTransition(a, d, o.to.y, a.to)), o.from.x !== o.to.x && (y = y.concat(h), a.from = e.effects.setTransition(a, h, o.from.x, a.from), a.to = e.effects.setTransition(a, h, o.to.x, a.to))), ("content" === m || "both" === m) && o.from.y !== o.to.y && (y = y.concat(c).concat(u), a.from = e.effects.setTransition(a, c, o.from.y, a.from), a.to = e.effects.setTransition(a, c, o.to.y, a.to)), e.effects.save(a, y), a.show(), e.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), g && (r = e.effects.getBaseline(g, i), a.from.top = (i.outerHeight - a.outerHeight()) * r.y, a.from.left = (i.outerWidth - a.outerWidth()) * r.x, a.to.top = (i.outerHeight - a.to.outerHeight) * r.y, a.to.left = (i.outerWidth - a.to.outerWidth) * r.x), a.css(a.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(c), h = h.concat(["marginLeft", "marginRight"]), u = s.concat(d).concat(h), a.find("*[width]").each(function () {
                var n = e(this),
                    i = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    };
                p && e.effects.save(n, u), n.from = {
                    height: i.height * o.from.y,
                    width: i.width * o.from.x,
                    outerHeight: i.outerHeight * o.from.y,
                    outerWidth: i.outerWidth * o.from.x
                }, n.to = {
                    height: i.height * o.to.y,
                    width: i.width * o.to.x,
                    outerHeight: i.height * o.to.y,
                    outerWidth: i.width * o.to.x
                }, o.from.y !== o.to.y && (n.from = e.effects.setTransition(n, d, o.from.y, n.from), n.to = e.effects.setTransition(n, d, o.to.y, n.to)), o.from.x !== o.to.x && (n.from = e.effects.setTransition(n, h, o.from.x, n.from), n.to = e.effects.setTransition(n, h, o.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function () {
                    p && e.effects.restore(n, u)
                })
            })), a.animate(a.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function () {
                    0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === f && a.hide(), e.effects.restore(a, y), p || ("static" === v ? a.css({
                        position: "relative",
                        top: a.to.top,
                        left: a.to.left
                    }) : e.each(["top", "left"], function (e, t) {
                        a.css(t, function (t, n) {
                            var i = parseInt(n, 10),
                                r = e ? a.to.left : a.to.top;
                            return "auto" === n ? r + "px" : i + r + "px"
                        })
                    })), e.effects.removeWrapper(a), n()
                }
            })
        }
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function (e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function (e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function (e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function (e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function (e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function (e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function (e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function (e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function (e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function (e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function (e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function (e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function (e, t, n, i, r) {
            return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
        },
        easeInOutExpo: function (e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function (e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function (e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function (e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a)) + n
        },
        easeOutElastic: function (e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - o) * Math.PI / a) + i + n
        },
        easeInOutElastic: function (e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (a || (a = .3 * r * 1.5), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - o) * Math.PI / a) * .5 + i + n
        },
        easeInBack: function (e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function (e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function (e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
        },
        easeInBounce: function (e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function (e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function (e, t, n, i, r) {
            return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    }),
    function ($) {
        for (var supportedCSS, supportedCSSOrigin, styles = document.getElementsByTagName("head")[0].style, toCheck = "transformProperty WebkitTransform OTransform msTransform MozTransform".split(" "), a = 0; a < toCheck.length; a++) void 0 !== styles[toCheck[a]] && (supportedCSS = toCheck[a]);
        supportedCSS && (supportedCSSOrigin = supportedCSS.replace(/[tT]ransform/, "TransformOrigin"), "T" == supportedCSSOrigin[0] && (supportedCSSOrigin[0] = "t")), eval('IE = "v"==""'), jQuery.fn.extend({
            rotate: function (e) {
                if (0 !== this.length && "undefined" != typeof e) {
                    "number" == typeof e && (e = {
                        angle: e
                    });
                    for (var t = [], n = 0, i = this.length; i > n; n++) {
                        var r = this.get(n);
                        if (r.Wilq32 && r.Wilq32.PhotoEffect) r.Wilq32.PhotoEffect._handleRotation(e);
                        else {
                            var o = $.extend(!0, {}, e),
                                a = new Wilq32.PhotoEffect(r, o)._rootObj;
                            t.push($(a))
                        }
                    }
                    return t
                }
            },
            getRotateAngle: function () {
                for (var e = [], t = 0, n = this.length; n > t; t++) {
                    var i = this.get(t);
                    i.Wilq32 && i.Wilq32.PhotoEffect && (e[t] = i.Wilq32.PhotoEffect._angle)
                }
                return e
            },
            stopRotate: function () {
                for (var e = 0, t = this.length; t > e; e++) {
                    var n = this.get(e);
                    n.Wilq32 && n.Wilq32.PhotoEffect && clearTimeout(n.Wilq32.PhotoEffect._timer)
                }
            }
        }), Wilq32 = window.Wilq32 || {}, Wilq32.PhotoEffect = function () {
            return supportedCSS ? function (e, t) {
                e.Wilq32 = {
                    PhotoEffect: this
                }, this._img = this._rootObj = this._eventObj = e, this._handleRotation(t)
            } : function (e, t) {
                if (this._img = e, this._onLoadDelegate = [t], this._rootObj = document.createElement("span"), this._rootObj.style.display = "inline-block", this._rootObj.Wilq32 = {
                    PhotoEffect: this
                }, e.parentNode.insertBefore(this._rootObj, e), e.complete) this._Loader();
                else {
                    var n = this;
                    jQuery(this._img).bind("load", function () {
                        n._Loader()
                    })
                }
            }
        }(), Wilq32.PhotoEffect.prototype = {
            _setupParameters: function (e) {
                this._parameters = this._parameters || {}, "number" != typeof this._angle && (this._angle = 0), "number" == typeof e.angle && (this._angle = e.angle), this._parameters.animateTo = "number" == typeof e.animateTo ? e.animateTo : this._angle, this._parameters.step = e.step || this._parameters.step || null, this._parameters.easing = e.easing || this._parameters.easing || this._defaultEasing, this._parameters.duration = e.duration || this._parameters.duration || 1e3, this._parameters.callback = e.callback || this._parameters.callback || this._emptyFunction, this._parameters.center = e.center || this._parameters.center || ["50%", "50%"], this._rotationCenterX = "string" == typeof this._parameters.center[0] ? parseInt(this._parameters.center[0], 10) / 100 * this._imgWidth * this._aspectW : this._parameters.center[0], this._rotationCenterY = "string" == typeof this._parameters.center[1] ? parseInt(this._parameters.center[1], 10) / 100 * this._imgHeight * this._aspectH : this._parameters.center[1], e.bind && e.bind != this._parameters.bind && this._BindEvents(e.bind)
            },
            _emptyFunction: function () {},
            _defaultEasing: function (e, t, n, i, r) {
                return -i * ((t = t / r - 1) * t * t * t - 1) + n
            },
            _handleRotation: function (e, t) {
                return supportedCSS || this._img.complete || t ? (this._setupParameters(e), this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart(), void 0) : (this._onLoadDelegate.push(e), void 0)
            },
            _BindEvents: function (e) {
                if (e && this._eventObj) {
                    if (this._parameters.bind) {
                        var t = this._parameters.bind;
                        for (var n in t) t.hasOwnProperty(n) && jQuery(this._eventObj).unbind(n, t[n])
                    }
                    this._parameters.bind = e;
                    for (var n in e) e.hasOwnProperty(n) && jQuery(this._eventObj).bind(n, e[n])
                }
            },
            _Loader: function () {
                return IE ? function () {
                    var e = this._img.width,
                        t = this._img.height;
                    this._imgWidth = e, this._imgHeight = t, this._img.parentNode.removeChild(this._img), this._vimage = this.createVMLNode("image"), this._vimage.src = this._img.src, this._vimage.style.height = t + "px", this._vimage.style.width = e + "px", this._vimage.style.position = "absolute", this._vimage.style.top = "0px", this._vimage.style.left = "0px", this._aspectW = this._aspectH = 1, this._container = this.createVMLNode("group"), this._container.style.width = e, this._container.style.height = t, this._container.style.position = "absolute", this._container.style.top = "0px", this._container.style.left = "0px", this._container.setAttribute("coordsize", e - 1 + "," + (t - 1)), this._container.appendChild(this._vimage), this._rootObj.appendChild(this._container), this._rootObj.style.position = "relative", this._rootObj.style.width = e + "px", this._rootObj.style.height = t + "px", this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._eventObj = this._rootObj;
                    for (var n; n = this._onLoadDelegate.shift();) this._handleRotation(n, !0)
                } : function () {
                    this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._imgWidth = this._img.naturalWidth, this._imgHeight = this._img.naturalHeight;
                    var e = Math.sqrt(this._imgHeight * this._imgHeight + this._imgWidth * this._imgWidth);
                    this._width = 3 * e, this._height = 3 * e, this._aspectW = this._img.offsetWidth / this._img.naturalWidth, this._aspectH = this._img.offsetHeight / this._img.naturalHeight, this._img.parentNode.removeChild(this._img), this._canvas = document.createElement("canvas"), this._canvas.setAttribute("width", this._width), this._canvas.style.position = "relative", this._canvas.style.left = -this._img.height * this._aspectW + "px", this._canvas.style.top = -this._img.width * this._aspectH + "px", this._canvas.Wilq32 = this._rootObj.Wilq32, this._rootObj.appendChild(this._canvas), this._rootObj.style.width = this._img.width * this._aspectW + "px", this._rootObj.style.height = this._img.height * this._aspectH + "px", this._eventObj = this._canvas, this._cnv = this._canvas.getContext("2d");
                    for (var t; t = this._onLoadDelegate.shift();) this._handleRotation(t, !0)
                }
            }(),
            _animateStart: function () {
                this._timer && clearTimeout(this._timer), this._animateStartTime = +new Date, this._animateStartAngle = this._angle, this._animate()
            },
            _animate: function () {
                var e = +new Date,
                    t = e - this._animateStartTime > this._parameters.duration;
                if (t && !this._parameters.animatedGif) clearTimeout(this._timer);
                else {
                    if (this._canvas || this._vimage || this._img) {
                        var n = this._parameters.easing(0, e - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
                        this._rotate(~~(10 * n) / 10)
                    }
                    this._parameters.step && this._parameters.step(this._angle);
                    var i = this;
                    this._timer = setTimeout(function () {
                        i._animate.call(i)
                    }, 10)
                }
                this._parameters.callback && t && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj))
            },
            _rotate: function () {
                var e = Math.PI / 180;
                return IE ? function (e) {
                    this._angle = e, this._container.style.rotation = e % 360 + "deg", this._vimage.style.top = -(this._rotationCenterY - this._imgHeight / 2) + "px", this._vimage.style.left = -(this._rotationCenterX - this._imgWidth / 2) + "px", this._container.style.top = this._rotationCenterY - this._imgHeight / 2 + "px", this._container.style.left = this._rotationCenterX - this._imgWidth / 2 + "px"
                } : supportedCSS ? function (e) {
                    this._angle = e, this._img.style[supportedCSS] = "rotate(" + e % 360 + "deg)", this._img.style[supportedCSSOrigin] = this._parameters.center.join(" ")
                } : function (t) {
                    this._angle = t, t = t % 360 * e, this._canvas.width = this._width, this._canvas.height = this._height, this._cnv.translate(this._imgWidth * this._aspectW, this._imgHeight * this._aspectH), this._cnv.translate(this._rotationCenterX, this._rotationCenterY), this._cnv.rotate(t), this._cnv.translate(-this._rotationCenterX, -this._rotationCenterY), this._cnv.scale(this._aspectW, this._aspectH), this._cnv.drawImage(this._img, 0, 0)
                }
            }()
        }, IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function () {
            document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
                return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                    function (e) {
                        return document.createElement("<rvml:" + e + ' class="rvml">')
                    }
            } catch (e) {
                return function (e) {
                    return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                }
            }
        }())
    }(jQuery),
    function () {
        var e = this,
            t = e._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = i.push,
            s = i.slice,
            l = i.concat,
            u = r.toString,
            c = r.hasOwnProperty,
            d = i.forEach,
            h = i.map,
            f = i.reduce,
            p = i.reduceRight,
            m = i.filter,
            g = i.every,
            v = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            _ = Array.isArray,
            x = Object.keys,
            w = o.bind,
            k = function (e) {
                return e instanceof k ? e : this instanceof k ? (this._wrapped = e, void 0) : new k(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : e._ = k, k.VERSION = "1.5.2";
        var F = k.each = k.forEach = function (e, t, i) {
            if (null != e)
                if (d && e.forEach === d) e.forEach(t, i);
                else if (e.length === +e.length) {
                for (var r = 0, o = e.length; o > r; r++)
                    if (t.call(i, e[r], r, e) === n) return
            } else
                for (var a = k.keys(e), r = 0, o = a.length; o > r; r++)
                    if (t.call(i, e[a[r]], a[r], e) === n) return
        };
        k.map = k.collect = function (e, t, n) {
            var i = [];
            return null == e ? i : h && e.map === h ? e.map(t, n) : (F(e, function (e, r, o) {
                i.push(t.call(n, e, r, o))
            }), i)
        };
        var C = "Reduce of empty array with no initial value";
        k.reduce = k.foldl = k.inject = function (e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []), f && e.reduce === f) return i && (t = k.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
            if (F(e, function (e, o, a) {
                r ? n = t.call(i, n, e, o, a) : (n = e, r = !0)
            }), !r) throw new TypeError(C);
            return n
        }, k.reduceRight = k.foldr = function (e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []), p && e.reduceRight === p) return i && (t = k.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
            var o = e.length;
            if (o !== +o) {
                var a = k.keys(e);
                o = a.length
            }
            if (F(e, function (s, l, u) {
                l = a ? a[--o] : --o, r ? n = t.call(i, n, e[l], l, u) : (n = e[l], r = !0)
            }), !r) throw new TypeError(C);
            return n
        }, k.find = k.detect = function (e, t, n) {
            var i;
            return $(e, function (e, r, o) {
                return t.call(n, e, r, o) ? (i = e, !0) : void 0
            }), i
        }, k.filter = k.select = function (e, t, n) {
            var i = [];
            return null == e ? i : m && e.filter === m ? e.filter(t, n) : (F(e, function (e, r, o) {
                t.call(n, e, r, o) && i.push(e)
            }), i)
        }, k.reject = function (e, t, n) {
            return k.filter(e, function (e, i, r) {
                return !t.call(n, e, i, r)
            }, n)
        }, k.every = k.all = function (e, t, i) {
            t || (t = k.identity);
            var r = !0;
            return null == e ? r : g && e.every === g ? e.every(t, i) : (F(e, function (e, o, a) {
                return (r = r && t.call(i, e, o, a)) ? void 0 : n
            }), !!r)
        };
        var $ = k.some = k.any = function (e, t, i) {
            t || (t = k.identity);
            var r = !1;
            return null == e ? r : v && e.some === v ? e.some(t, i) : (F(e, function (e, o, a) {
                return r || (r = t.call(i, e, o, a)) ? n : void 0
            }), !!r)
        };
        k.contains = k.include = function (e, t) {
            return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : $(e, function (e) {
                return e === t
            })
        }, k.invoke = function (e, t) {
            var n = s.call(arguments, 2),
                i = k.isFunction(t);
            return k.map(e, function (e) {
                return (i ? t : e[t]).apply(e, n)
            })
        }, k.pluck = function (e, t) {
            return k.map(e, function (e) {
                return e[t]
            })
        }, k.where = function (e, t, n) {
            return k.isEmpty(t) ? n ? void 0 : [] : k[n ? "find" : "filter"](e, function (e) {
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            })
        }, k.findWhere = function (e, t) {
            return k.where(e, t, !0)
        }, k.max = function (e, t, n) {
            if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            if (!t && k.isEmpty(e)) return -1 / 0;
            var i = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return F(e, function (e, r, o) {
                var a = t ? t.call(n, e, r, o) : e;
                a > i.computed && (i = {
                    value: e,
                    computed: a
                })
            }), i.value
        }, k.min = function (e, t, n) {
            if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            if (!t && k.isEmpty(e)) return 1 / 0;
            var i = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return F(e, function (e, r, o) {
                var a = t ? t.call(n, e, r, o) : e;
                a < i.computed && (i = {
                    value: e,
                    computed: a
                })
            }), i.value
        }, k.shuffle = function (e) {
            var t, n = 0,
                i = [];
            return F(e, function (e) {
                t = k.random(n++), i[n - 1] = i[t], i[t] = e
            }), i
        }, k.sample = function (e, t, n) {
            return arguments.length < 2 || n ? e[k.random(e.length - 1)] : k.shuffle(e).slice(0, Math.max(0, t))
        };
        var j = function (e) {
            return k.isFunction(e) ? e : function (t) {
                return t[e]
            }
        };
        k.sortBy = function (e, t, n) {
            var i = j(t);
            return k.pluck(k.map(e, function (e, t, r) {
                return {
                    value: e,
                    index: t,
                    criteria: i.call(n, e, t, r)
                }
            }).sort(function (e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var E = function (e) {
            return function (t, n, i) {
                var r = {},
                    o = null == n ? k.identity : j(n);
                return F(t, function (n, a) {
                    var s = o.call(i, n, a, t);
                    e(r, s, n)
                }), r
            }
        };
        k.groupBy = E(function (e, t, n) {
            (k.has(e, t) ? e[t] : e[t] = []).push(n)
        }), k.indexBy = E(function (e, t, n) {
            e[t] = n
        }), k.countBy = E(function (e, t) {
            k.has(e, t) ? e[t]++ : e[t] = 1
        }), k.sortedIndex = function (e, t, n, i) {
            n = null == n ? k.identity : j(n);
            for (var r = n.call(i, t), o = 0, a = e.length; a > o;) {
                var s = o + a >>> 1;
                n.call(i, e[s]) < r ? o = s + 1 : a = s
            }
            return o
        }, k.toArray = function (e) {
            return e ? k.isArray(e) ? s.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : []
        }, k.size = function (e) {
            return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length
        }, k.first = k.head = k.take = function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
        }, k.initial = function (e, t, n) {
            return s.call(e, 0, e.length - (null == t || n ? 1 : t))
        }, k.last = function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
        }, k.rest = k.tail = k.drop = function (e, t, n) {
            return s.call(e, null == t || n ? 1 : t)
        }, k.compact = function (e) {
            return k.filter(e, k.identity)
        };
        var A = function (e, t, n) {
            return t && k.every(e, k.isArray) ? l.apply(n, e) : (F(e, function (e) {
                k.isArray(e) || k.isArguments(e) ? t ? a.apply(n, e) : A(e, t, n) : n.push(e)
            }), n)
        };
        k.flatten = function (e, t) {
            return A(e, t, [])
        }, k.without = function (e) {
            return k.difference(e, s.call(arguments, 1))
        }, k.uniq = k.unique = function (e, t, n, i) {
            k.isFunction(t) && (i = n, n = t, t = !1);
            var r = n ? k.map(e, n, i) : e,
                o = [],
                a = [];
            return F(r, function (n, i) {
                (t ? i && a[a.length - 1] === n : k.contains(a, n)) || (a.push(n), o.push(e[i]))
            }), o
        }, k.union = function () {
            return k.uniq(k.flatten(arguments, !0))
        }, k.intersection = function (e) {
            var t = s.call(arguments, 1);
            return k.filter(k.uniq(e), function (e) {
                return k.every(t, function (t) {
                    return k.indexOf(t, e) >= 0
                })
            })
        }, k.difference = function (e) {
            var t = l.apply(i, s.call(arguments, 1));
            return k.filter(e, function (e) {
                return !k.contains(t, e)
            })
        }, k.zip = function () {
            for (var e = k.max(k.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = k.pluck(arguments, "" + n);
            return t
        }, k.object = function (e, t) {
            if (null == e) return {};
            for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, k.indexOf = function (e, t, n) {
            if (null == e) return -1;
            var i = 0,
                r = e.length;
            if (n) {
                if ("number" != typeof n) return i = k.sortedIndex(e, t), e[i] === t ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            if (y && e.indexOf === y) return e.indexOf(t, n);
            for (; r > i; i++)
                if (e[i] === t) return i;
            return -1
        }, k.lastIndexOf = function (e, t, n) {
            if (null == e) return -1;
            var i = null != n;
            if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            for (var r = i ? n : e.length; r--;)
                if (e[r] === t) return r;
            return -1
        }, k.range = function (e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = e, e += n;
            return o
        };
        var T = function () {};
        k.bind = function (e, t) {
            var n, i;
            if (w && e.bind === w) return w.apply(e, s.call(arguments, 1));
            if (!k.isFunction(e)) throw new TypeError;
            return n = s.call(arguments, 2), i = function () {
                if (!(this instanceof i)) return e.apply(t, n.concat(s.call(arguments)));
                T.prototype = e.prototype;
                var r = new T;
                T.prototype = null;
                var o = e.apply(r, n.concat(s.call(arguments)));
                return Object(o) === o ? o : r
            }
        }, k.partial = function (e) {
            var t = s.call(arguments, 1);
            return function () {
                return e.apply(this, t.concat(s.call(arguments)))
            }
        }, k.bindAll = function (e) {
            var t = s.call(arguments, 1);
            if (0 === t.length) throw new Error("bindAll must be passed function names");
            return F(t, function (t) {
                e[t] = k.bind(e[t], e)
            }), e
        }, k.memoize = function (e, t) {
            var n = {};
            return t || (t = k.identity),
                function () {
                    var i = t.apply(this, arguments);
                    return k.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
        }, k.delay = function (e, t) {
            var n = s.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, k.defer = function (e) {
            return k.delay.apply(k, [e, 1].concat(s.call(arguments, 1)))
        }, k.throttle = function (e, t, n) {
            var i, r, o, a = null,
                s = 0;
            n || (n = {});
            var l = function () {
                s = n.leading === !1 ? 0 : new Date, a = null, o = e.apply(i, r)
            };
            return function () {
                var u = new Date;
                s || n.leading !== !1 || (s = u);
                var c = t - (u - s);
                return i = this, r = arguments, 0 >= c ? (clearTimeout(a), a = null, s = u, o = e.apply(i, r)) : a || n.trailing === !1 || (a = setTimeout(l, c)), o
            }
        }, k.debounce = function (e, t, n) {
            var i, r, o, a, s;
            return function () {
                o = this, r = arguments, a = new Date;
                var l = function () {
                        var u = new Date - a;
                        t > u ? i = setTimeout(l, t - u) : (i = null, n || (s = e.apply(o, r)))
                    },
                    u = n && !i;
                return i || (i = setTimeout(l, t)), u && (s = e.apply(o, r)), s
            }
        }, k.once = function (e) {
            var t, n = !1;
            return function () {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, k.wrap = function (e, t) {
            return function () {
                var n = [e];
                return a.apply(n, arguments), t.apply(this, n)
            }
        }, k.compose = function () {
            var e = arguments;
            return function () {
                for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, k.after = function (e, t) {
            return function () {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, k.keys = x || function (e) {
            if (e !== Object(e)) throw new TypeError("Invalid object");
            var t = [];
            for (var n in e) k.has(e, n) && t.push(n);
            return t
        }, k.values = function (e) {
            for (var t = k.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = e[t[r]];
            return i
        }, k.pairs = function (e) {
            for (var t = k.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]];
            return i
        }, k.invert = function (e) {
            for (var t = {}, n = k.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i];
            return t
        }, k.functions = k.methods = function (e) {
            var t = [];
            for (var n in e) k.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, k.extend = function (e) {
            return F(s.call(arguments, 1), function (t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, k.pick = function (e) {
            var t = {},
                n = l.apply(i, s.call(arguments, 1));
            return F(n, function (n) {
                n in e && (t[n] = e[n])
            }), t
        }, k.omit = function (e) {
            var t = {},
                n = l.apply(i, s.call(arguments, 1));
            for (var r in e) k.contains(n, r) || (t[r] = e[r]);
            return t
        }, k.defaults = function (e) {
            return F(s.call(arguments, 1), function (t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        }, k.clone = function (e) {
            return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e
        }, k.tap = function (e, t) {
            return t(e), e
        };
        var S = function (e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
            var r = u.call(e);
            if (r != u.call(t)) return !1;
            switch (r) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t) return !1;
            for (var o = n.length; o--;)
                if (n[o] == e) return i[o] == t;
            var a = e.constructor,
                s = t.constructor;
            if (a !== s && !(k.isFunction(a) && a instanceof a && k.isFunction(s) && s instanceof s)) return !1;
            n.push(e), i.push(t);
            var l = 0,
                c = !0;
            if ("[object Array]" == r) {
                if (l = e.length, c = l == t.length)
                    for (; l-- && (c = S(e[l], t[l], n, i)););
            } else {
                for (var d in e)
                    if (k.has(e, d) && (l++, !(c = k.has(t, d) && S(e[d], t[d], n, i)))) break;
                if (c) {
                    for (d in t)
                        if (k.has(t, d) && !l--) break;
                    c = !l
                }
            }
            return n.pop(), i.pop(), c
        };
        k.isEqual = function (e, t) {
            return S(e, t, [], [])
        }, k.isEmpty = function (e) {
            if (null == e) return !0;
            if (k.isArray(e) || k.isString(e)) return 0 === e.length;
            for (var t in e)
                if (k.has(e, t)) return !1;
            return !0
        }, k.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, k.isArray = _ || function (e) {
            return "[object Array]" == u.call(e)
        }, k.isObject = function (e) {
            return e === Object(e)
        }, F(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
            k["is" + e] = function (t) {
                return u.call(t) == "[object " + e + "]"
            }
        }), k.isArguments(arguments) || (k.isArguments = function (e) {
            return !(!e || !k.has(e, "callee"))
        }), "function" != typeof / . / && (k.isFunction = function (e) {
            return "function" == typeof e
        }), k.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, k.isNaN = function (e) {
            return k.isNumber(e) && e != +e
        }, k.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" == u.call(e)
        }, k.isNull = function (e) {
            return null === e
        }, k.isUndefined = function (e) {
            return void 0 === e
        }, k.has = function (e, t) {
            return c.call(e, t)
        }, k.noConflict = function () {
            return e._ = t, this
        }, k.identity = function (e) {
            return e
        }, k.times = function (e, t, n) {
            for (var i = Array(Math.max(0, e)), r = 0; e > r; r++) i[r] = t.call(n, r);
            return i
        }, k.random = function (e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        };
        var D = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        D.unescape = k.invert(D.escape);
        var I = {
            escape: new RegExp("[" + k.keys(D.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + k.keys(D.unescape).join("|") + ")", "g")
        };
        k.each(["escape", "unescape"], function (e) {
            k[e] = function (t) {
                return null == t ? "" : ("" + t).replace(I[e], function (t) {
                    return D[e][t]
                })
            }
        }), k.result = function (e, t) {
            if (null == e) return void 0;
            var n = e[t];
            return k.isFunction(n) ? n.call(e) : n
        }, k.mixin = function (e) {
            F(k.functions(e), function (t) {
                var n = k[t] = e[t];
                k.prototype[t] = function () {
                    var e = [this._wrapped];
                    return a.apply(e, arguments), L.call(this, n.apply(k, e))
                }
            })
        };
        var N = 0;
        k.uniqueId = function (e) {
            var t = ++N + "";
            return e ? e + t : t
        }, k.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var O = /(.)^/,
            M = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            q = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        k.template = function (e, t, n) {
            var i;
            n = k.defaults({}, n, k.templateSettings);
            var r = new RegExp([(n.escape || O).source, (n.interpolate || O).source, (n.evaluate || O).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(r, function (t, n, i, r, s) {
                return a += e.slice(o, s).replace(q, function (e) {
                    return "\\" + M[e]
                }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), o = s + t.length, t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", a)
            } catch (s) {
                throw s.source = a, s
            }
            if (t) return i(t, k);
            var l = function (e) {
                return i.call(this, e, k)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
        }, k.chain = function (e) {
            return k(e).chain()
        };
        var L = function (e) {
            return this._chain ? k(e).chain() : e
        };
        k.mixin(k), F(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = i[e];
            k.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], L.call(this, n)
            }
        }), F(["concat", "join", "slice"], function (e) {
            var t = i[e];
            k.prototype[e] = function () {
                return L.call(this, t.apply(this._wrapped, arguments))
            }
        }), k.extend(k.prototype, {
            chain: function () {
                return this._chain = !0, this
            },
            value: function () {
                return this._wrapped
            }
        })
    }.call(this),
    function (e, t) {
        function n() {
            var e = m.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function i(e) {
            var t = p[e[h]];
            return t || (t = {}, f++, e[h] = f, p[f] = t), t
        }

        function r(e, n, r) {
            return n || (n = t), l ? n.createElement(e) : (r || (r = i(n)), n = r.cache[e] ? r.cache[e].cloneNode() : d.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), n.canHaveChildren && !c.test(e) ? r.frag.appendChild(n) : n)
        }

        function o(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return m.shivMethods ? r(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(m, t.frag)
        }

        function a(e) {
            e || (e = t);
            var n = i(e);
            if (m.shivCSS && !s && !n.hasCSS) {
                var r, a = e;
                r = a.createElement("p"), a = a.getElementsByTagName("head")[0] || a.documentElement, r.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>", r = a.insertBefore(r.lastChild, a.firstChild), n.hasCSS = !!r
            }
            return l || o(e, n), e
        }
        var s, l, u = e.html5 || {},
            c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            f = 0,
            p = {};
        ! function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", s = "hidden" in e;
                var n;
                if (!(n = 1 == e.childNodes.length)) {
                    t.createElement("a");
                    var i = t.createDocumentFragment();
                    n = "undefined" == typeof i.cloneNode || "undefined" == typeof i.createDocumentFragment || "undefined" == typeof i.createElement
                }
                l = n
            } catch (r) {
                l = s = !0
            }
        }();
        var m = {
            elements: u.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
            version: "3.6.2pre",
            shivCSS: !1 !== u.shivCSS,
            supportsUnknownElements: l,
            shivMethods: !1 !== u.shivMethods,
            type: "default",
            shivDocument: a,
            createElement: r,
            createDocumentFragment: function (e, r) {
                if (e || (e = t), l) return e.createDocumentFragment();
                for (var r = r || i(e), o = r.frag.cloneNode(), a = 0, s = n(), u = s.length; u > a; a++) o.createElement(s[a]);
                return o
            }
        };
        e.html5 = m, a(t)
    }(this, document), kakaoUI.Browser = {
        appname: new Array("Firefox", "Chrome", "Safari", "Opera", "MSIE"),
        name: function () {
            for (var e = new Array, t = kakaoUI.Browser.appname, n = 0; n < t.length; n++) navigator.userAgent.indexOf(t[n]) >= 0 && e.push(t[n]);
            return e[0]
        },
        vision: function () {
            var e = new RegExp(kakaoUI.Browser.name() + "((.|/)[0-9]{1,}[.0-9]{0,})");
            return e.exec(navigator.userAgent)[1]
        }
    }, kakaoUI.select = function (e) {
        function t(e) {
            var e = e;
            $(e).find(".icon").removeClass("on").addClass("off"), n({
                obj: $(e),
                top: -$(e).find(".list").height(),
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: e,
                height: 0,
                duration: 500,
                easing: "easeOutExpo"
            })
        }

        function n(e) {
            $(e.obj).find(".list ul").stop().animate({
                top: e.top
            }, {
                duration: e.duration,
                easing: e.easing,
                complete: function () {}
            })
        }

        function i(e) {
            $(e.obj).find(".list").stop().animate({
                height: e.height
            }, {
                duration: e.duration,
                easing: e.easing,
                complete: function () {}
            })
        }
        var r = $(e.obj).find("ul").height() + 3;
        $(e.obj).find(".list").height(0), $(e.obj).find("ul").css("top", -r), $(e.obj).find(".selected-text input , .selected-text .icon").on("click", function () {
            return t($("#header aside .select")), 1 == $(e.obj).find("ul").position().top ? ($(e.obj).find(".icon").removeClass("on").addClass("off"), n({
                obj: $(e.obj),
                top: -r,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: 0,
                duration: 500,
                easing: "easeOutExpo"
            })) : ($(e.obj).find(".icon").removeClass("off").addClass("on"), n({
                obj: $(e.obj),
                top: 1,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: r + 20,
                duration: 500,
                easing: "easeOutExpo"
            })), !1
        }), $(e.obj).find(".selected-text input, .selected-text .icon").on("focus", function () {
            return $(e.obj).find(".icon").removeClass("off").addClass("on"), n({
                obj: $(e.obj),
                top: 1,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: r + 20,
                duration: 500,
                easing: "easeOutExpo"
            }), !1
        }), $(e.obj).find("ul li").eq($(e.obj).find("ul li").length - 1).find("a").focusout(function () {
            $(e.obj).find(".icon").removeClass("on").addClass("off"), n({
                obj: $(e.obj),
                top: -r,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: 0,
                duration: 500,
                easing: "easeOutExpo"
            })
        }), $(document).on("click", function (e) {
            try {
                e = e || window.event, t($("#header aside .select")), e.stopPropagation()
            } catch (e) {}
        }), $(e.obj).find("ul li A").on("click", function () {
            return $(e.obj).find(".selected-text input").val($(this).html()), $(e.obj).find(".icon").removeClass("on").addClass("off"), e.selected({
                self: $(this),
                index: $(this).parent().index()
            }), n({
                obj: $(e.obj),
                top: -r,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: 0,
                duration: 500,
                easing: "easeOutExpo"
            }), !1
        })
    }, kakaoUI.formSelect = function (e) {
        function t(e, t) {
            $(e).find(".default").removeClass("on").addClass("off"), $(e).find(".icon").removeClass("on").addClass("off"), n({
                obj: $(e),
                top: -t,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e),
                height: 0,
                duration: 500,
                easing: "easeOutExpo"
            })
        }

        function n(e) {
            $(e.obj).stop().find(".list .box").stop().animate({
                top: e.top
            }, {
                duration: e.duration,
                easing: e.easing,
                complete: function () {}
            })
        }

        function i(e) {
            $(e.obj).stop().find(".list").stop().animate({
                height: e.height
            }, {
                duration: e.duration,
                easing: e.easing,
                complete: function () {}
            })
        }
        var r = $(e.obj).find(".list .box").height();
        e.height > 0 && (r = e.height, $(e.obj).find(".content").addClass("scroll"));
        $(e.obj).find(".list").height(0), $(e.obj).find(".box").css("top", -r), $(e.obj).find(".selected-text input ,.selected-text .icon ").hover(function () {
            $(e.obj).removeClass("hover").addClass("hover")
        }, function () {
            $(e.obj).removeClass("hover")
        });
        try {
            e.init()
        } catch (o) {}
        $(e.obj).find(".selected-text input ,.selected-text .icon ").on("click", function () {
            return $.each($(".form-select"), function () {
                "open" == $(this).attr("state") && ($(this).stop().find(".list .box").stop(), $(this).stop().find(".list").stop(), t($(this), $(this).find(".list .box").height()))
            }), 2 == $(e.obj).find(".box").position().top ? ($(e.obj).attr("state", "close"), $(e.obj).find(".default").removeClass("on").addClass("off"), $(e.obj).find(".icon").removeClass("on").addClass("off"), n({
                obj: $(e.obj),
                top: -r,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: 0,
                duration: 500,
                easing: "easeOutExpo"
            })) : ($(e.obj).attr("state", "open"), $(e.obj).find(".default").removeClass("off").addClass("on"), $(e.obj).find(".icon").removeClass("off").addClass("on"), n({
                obj: $(e.obj),
                top: 2,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: r + 20,
                duration: 500,
                easing: "easeOutExpo"
            })), !1
        }), $(e.obj).find(".selected-text input ,.selected-text .icon").on("focusin", function () {
            return $(e.obj).attr("state", "open"), $(e.obj).find(".default").removeClass("off").addClass("on"), $(e.obj).find(".icon").removeClass("off").addClass("on"), n({
                obj: $(e.obj),
                top: 2,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: r + 20,
                duration: 500,
                easing: "easeOutExpo"
            }), !1
        }), $(e.obj).find("ul li").eq($(e.obj).find("ul li").length - 1).find("a").focusout(function () {
            $(e.obj).attr("state", "close"), $(e.obj).find(".default").removeClass("on").addClass("off"), $(e.obj).find(".icon").removeClass("on").addClass("off"), n({
                obj: $(e.obj),
                top: -r,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: 0,
                duration: 500,
                easing: "easeOutExpo"
            }), $(e.obj).removeClass("on").addClass("off")
        }), $(e.obj).find("ul li A").on("click", function () {
            return $(e.obj).attr("state", "close"), $(e.obj).find("ul li").removeClass("selected"), $(e.obj).find(".selected-text input").val($(this).html()), $(e.obj).find(".icon").removeClass("on").addClass("off"), e.selected({
                self: $(this),
                index: $(this).parent().index()
            }), n({
                obj: $(e.obj),
                top: -r,
                duration: 500,
                easing: "easeOutExpo"
            }), i({
                obj: $(e.obj),
                height: 0,
                duration: 500,
                easing: "easeOutExpo"
            }), !1
        })
    }, kakaoUI.HeaderBackground = function () {
        $(window).scrollTop() > 1
    }, kakaoUI.serviceList = function () {
        function e(e) {
            $("#header .quick-service .list").stop().animate({
                top: e.top
            }, {
                duration: e.duration,
                easing: e.easing,
                complete: function () {}
            })
        }
        var t = "";
        $("#header .button-service button").on("click", function () {
            0 == $("#header .quick-service .list").position().top ? ($(this).removeClass("on").addClass("off"), e({
                top: -500,
                duration: 500,
                easing: "easeOutQuart"
            })) : ($(this).removeClass("off").addClass("on"), e({
                top: 0,
                duration: 1e3,
                easing: "easeOutExpo"
            }))
        }), $("#header .button-service button").focusin(function () {
            return $(this).removeClass("off").addClass("on"), e({
                top: 0,
                duration: 1e3,
                easing: "easeOutExpo"
            }), !1
        }), $("#header .quick-service li").eq($("#header .quick-service li").length - 1).find("A").focusout(function () {
            return $("#header .button-service button").removeClass("on").addClass("off"), e({
                top: -500,
                duration: 500,
                easing: "easeOutQuart"
            }), !1
        }), $("#header .quick-service .list").on("mouseover", function () {
            return "in" == t ? !1 : (e({
                top: 0,
                duration: 1e3,
                easing: "easeOutExpo"
            }), t = "in", void 0)
        }), $("#header .quick-service .list").on("mouseleave", function () {
            return "out" == t ? !1 : ($("#header .button-service button").removeClass("on").addClass("off"), e({
                top: -500,
                duration: 500,
                easing: "easeOutQuart"
            }), t = "out", void 0)
        })
    }, kakaoUI.imageViewRolling = function (e) {
        function t() {
            _ = new Array, $.each($(e.obj).find(".overflow-hidden span"), function () {
                _.push($(this).position().left)
            })
        }

        function n() {
            return $(e.obj).find(".overflow-hidden .on").index()
        }

        function i() {
            if (1 != e.rolling) return !1;
            clearInterval(m), m = null;
            var t = 0;
            m = setInterval(function () {
                t = $(e.obj).find(".overflow-hidden .on").index(), t += 1, h.length == t && (t = 0), 0 > t && (t = h.length - 1), e.Action($(e.obj), t), $(e.obj).find(".overflow-hidden span").removeClass("on").addClass("off"), $(e.obj).find(".overflow-hidden span").eq(t).removeClass("off").addClass("on"), $(e.obj).parent().find(".button .center").removeClass("on").addClass("off"), $(e.obj).parent().find(".button .center").eq(t).removeClass("off").addClass("on"), $.each($(e.obj).find(".overflow-hidden span"), function (e) {
                    o({
                        obj: $(this),
                        left: v * e - v * t,
                        duration: 200,
                        easing: "easeOutExpo"
                    })
                })
            }, e.time)
        }

        function r(e) {
            f = e > c ? "right" : "left"
        }

        function o(e) {
            return $(e.obj).stop().animate({
                left: e.left
            }, {
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    g = null
                }
            }), !1
        }

        function a(t) {
            $(e.obj).find(".button .center").removeClass("on").addClass("off"), $(e.obj).find(".button .center").eq(t).removeClass("off").addClass("on")
        }

        function s() {
            if ($(e.obj).find(".overflow-hidden span").stop(), !d) return !1;
            var n = $(d).index();
            "left" == f ? n += 1 : n -= 1, h.length == n && (n -= 1), 0 > n && (n = 0), $.each($(e.obj).find(".overflow-hidden span"), function (e) {
                o({
                    obj: $(this),
                    left: v * e - v * n,
                    duration: 200,
                    easing: "easeOutExpo"
                })
            }), $(e.obj).find(".overflow-hidden span").removeClass("on").addClass("off"), $(e.obj).find(".overflow-hidden span").eq(n).removeClass("off").addClass("on"), a(n), t()
        }

        function l(t) {
            var n = null;
            return d && (t = t || window.event, n = getMousePosition(t).X - $(e.obj).find(".overflow-hidden").offset().left - c, $.each($(e.obj).find(".overflow-hidden span"), function (e) {
                $(this).css("left", n - -_[e])
            })), !1
        }

        function u(t) {
            return t = t || window.event, getMousePosition(t).X - $(e.obj).find(".overflow-hidden").offset().left
        }
        var c, d, h = null,
            f = "",
            p = null,
            m = null,
            g = null,
            v = ($(e.obj).find(".overflow-hidden").width(), $(e.obj).find(".overflow-hidden span").width()),
            y = 0;
        $(e.obj).find(".overflow-hidden span").length > 0 && (h = $(e.obj).find(".overflow-hidden span"));
        try {
            e.init()
        } catch (b) {}
        if (null == h || 1 == h.length) return !1;
        if (e.firstActive > h.length - 1) return alert("셋팅값 .firstActive(" + e.firstActive + ")  값은 " + (h.length - 1) + " 이하 이여야 합니다."), !1;
        $(e.obj).find(".overflow-hidden span").removeClass("on").removeClass("off").addClass("off"), $(e.obj).find(".overflow-hidden span").eq(e.firstActive).removeClass("off").addClass("on"), $(e.obj).parent().find(".button .center").removeClass("on").removeClass("off").addClass("off"), $(e.obj).parent().find(".button .center").eq(e.firstActive).removeClass("off").addClass("on"), $.each($(e.obj).find(".overflow-hidden span"), function (t) {
            $(this).css("left", v * t - v * e.firstActive)
        }), $(document).on("mousemove", function (e) {
            try {
                e = e || window.event, l(e)
            } catch (e) {}
        }), $(document).on("mouseup", function () {
            try {
                return s(), d = null, !1
            } catch (e) {}
        });
        var _ = new Array;
        t(), $(e.obj).find(".overflow-hidden span").on("mousedown", function (e) {
            return t(), e = e || window.event, r(u(e)), s(), d = this, c = u(e), e.stopPropagation(), !1
        }), $(e.obj).find(".overflow-hidden span").on("mouseup", function (e) {
            return e = e || window.event, t(), e.stopPropagation(), r(u(e)), s(), d = null, !1
        }), $(e.obj).find(".overflow-hidden").on("mouseover", function () {
            p = this, clearInterval(m), m = null
        }), $(e.obj).find(".overflow-hidden").on("mouseleave", function () {
            clearInterval(m), m = null, i()
        }), $(e.obj).parent().find(".button .left").on("mousedown", function () {
            e.Action(this)
        }), $(e.obj).parent().find(".button .right").on("mousedown", function () {
            e.Action(this)
        }), $(e.obj).parent().find(".button .left , .button .right").on("mouseover", function () {
            p = this, clearInterval(m), m = null
        }), $(e.obj).parent().find(".button .left , .button .right").on("mouseleave", function () {
            clearInterval(m), m = null, i()
        }), $(e.obj).parent().find(".button .left").on("click", function () {
            var t = n();
            return t > $(e.obj).find(".overflow-hidden span").length && (t = 3), t -= 1, 0 > t ? !1 : ($(e.obj).find(".overflow-hidden span").removeClass("on").addClass("off"), $(e.obj).find(".overflow-hidden span").eq(t).removeClass("off").addClass("on"), $(e.obj).parent().find(".button .center").removeClass("on").addClass("off"), $(e.obj).parent().find(".button .center").eq(t).removeClass("off").addClass("on"), $.each($(e.obj).find(".overflow-hidden span"), function (e) {
                o({
                    obj: $(this),
                    left: v * e - v * t,
                    duration: 200,
                    easing: "easeOutExpo"
                })
            }), !1)
        }), $(e.obj).parent().find(".button .right").on("click", function () {
            var t = n();
            return 0 > t && (t = 0), t += 1, t > $(e.obj).find(".overflow-hidden span").length - 1 ? !1 : ($.each($(e.obj).find(".overflow-hidden span"), function (e) {
                o({
                    obj: $(this),
                    left: v * e - v * t,
                    duration: 200,
                    easing: "easeOutExpo"
                })
            }), $(e.obj).find(".overflow-hidden span").removeClass("on").addClass("off"), $(e.obj).find(".overflow-hidden span").eq(t).removeClass("off").addClass("on"), $(e.obj).parent().find(".button .center").removeClass("on").addClass("off"), $(e.obj).parent().find(".button .center").eq(t).removeClass("off").addClass("on"), !1)
        }), $(e.obj).parent().find(".button .center").on("click", function () {
            var t = $(this).index();
            return $.each($(e.obj).find(".overflow-hidden span"), function (e) {
                o({
                    obj: $(this),
                    left: v * e - v * t,
                    duration: 200,
                    easing: "easeOutExpo"
                })
            }), $(e.obj).find(".overflow-hidden span").removeClass("on").addClass("off"), $(e.obj).find(".overflow-hidden span").eq(t).removeClass("off").addClass("on"), $(e.obj).parent().find(".button .center").removeClass("on").addClass("off"), $(e.obj).parent().find(".button .center").eq(t).removeClass("off").addClass("on"), y = t, !1
        }), i()
    }, $(document).ready(function () {
        $("html").attr("manifest", location.href + "offline_html.appcache"), $(window).scroll(function () {
            kakaoUI.HeaderBackground()
        }), kakaoUI.serviceList(), kakaoUI.servicePlacVisual(), $(window).trigger("scroll")
    }), kakaoUI.formDefaultSet = function () {
        $(".category .form-select").eq(0).css("display", "block"), $(".category .form-select").eq(1).css("display", "block"), $(".category .form-select").eq(2).css("display", "block"), $(".form").css("display", "block"), $(".form .selected-default").css("display", "block"), $(".agreement.-type1").css("display", "block"), $(".consent.-type1").css("display", "block")
    }, kakaoUI.formReset = function () {
        $(".category .form-select").css("display", "none"), $(".category .form-select").eq(0).css("display", "block"), $(".selected-game").css("display", "none"), $(".selected-kakaotalk").css("display", "none"), $(".form").css("display", "none"), $(".form table").css("display", "none"), $(".check-point article ").css("display", "none"), $(".check-point").css("display", "none"), $(".agreement").css("display", "none"), $(".consent").css("display", "none"), $(".selected-kakaotalk").css("display", "none")
    }, kakaoUI.formValue = function () {
        var e = {
            agit: "문의 하실 내용을 입력해 주세요.",
            album: "아래 내용을 함께 보내주시면 더욱 빨리 처리가 가능합니다. \r\n\r\n휴대폰 번호: \r\n휴대폰 모델명: \r\n휴대폰 OS정보: \r\nAS 수리여부: \r\n탈옥(루팅) 여부: \r\n카카오계정(이메일): \r\n현재 사용중인 카카오앨범 버전: \r\n가장 최근에 발생한 문제 일시:",
            kakaotalk: {
                pcInstallAndLogin: '아래 내용을 함께 보내주시면 더욱 빨리 처리가 가능합니다.\r\n\r\n현재 사용 중인 카카오톡PC버전 :\r\n(버전정보는 "더보기>버전정보"를 클릭하시면 확인하실 수 있습니다.)\r\n현재 사용 중인 카카오톡 버전:\r\n가장 최근에 발생한 문제 일시:\r\n문의내용 :\r\n',
                topresent: "아래 내용을 함께 보내주시면 더욱 빨리 처리가 가능합니다.\r\n\r\n보낸사람 전화번호:\r\n받은사람 전화번호:\r\n상품명: \r\n주문번호: \r\n문의내용:",
                authnumber: "아래 내용을 함께 보내주시면 더욱 빨리 처리가 가능합니다.\r\n\r\n국가:\r\n통신사:\r\n문의내용:",
                plusfriend: "(중요)각 플러스 친구가 진행하는 쿠폰 및 응모권 사용 등\r\n이벤트 관련 문의는 쿠폰페이지내에 명시된\r\n고객센터 연락처 혹은 각 플러스 친구의 홈에 게시된 연락처로 문의 하시기 바랍니다.\r\n\r\n그외의 질문은 아래 내용을 함께 보내주시면 더욱 빨리 처리가 가능 합니다.\r\n\r\n현재 사용중인 카카오톡버전:\r\n이용중인 플러스친구명:\r\n문의내용:\r\n"
            },
            base: "아래 내용을 함께 보내주시면 더욱 빨리 처리가 가능합니다. \r\n\r\n휴대폰 번호: \r\n통화시 네트워크 종류(3G/LTE/Wi-Fi): \r\n가입한 이동 통신사 및 요금제: \r\n상대방의 가입한 이동통신사 및 요금제: \r\n현재 사용 중인 카카오톡 버전: \r\n통화 날짜 및 대략적인 시각('시간'이 아닌 '시각'): \r\n발생 빈도(항상 또는 특정상황): \r\n부가 장비 모델명 (ex. 블루투스 이상시 블루투스 핸드셋 모델명):",
            game: "게임 진행에 필요한 카카오 계정에 관해 불편하신 사항을 말씀해주세요. \r\n\r\n카카오는 게임을 직접 운영하지 않는 중개자이므로\r\n게임의 결제, 이벤트, 버그에 대한 문의는 이용하시는 게임의 고객센터로 연락을 하시면 \r\n더욱 자세한 답변을 받으실 수 있습니다.\r\n\r\n연락 번호:\r\n문의 내용:\r\n",
            general: "보낸사람 전화번호:\r\n받은사람 전화번호:\r\n상품명:\r\n주문번호:\r\n문의내용:",
            page: "아래 내용을 함께 보내주시면 더욱 빠른 처리가 가능합니다.\r\n\r\n휴대폰 번호:\r\n통신사:\r\n휴대폰 모델명:\r\n휴대폰 OS정보:\r\nAS 수리여부:\r\n탈옥(루팅) 여부:\r\n카카오계정(이메일):\r\n현재 사용중인 카카오페이지 버전:\r\n가장 최근에 발생한 문제 일시:\r\n문의내용:\r\n",
            place: "아래 내용을 함께 보내주시면 더욱 빠른 처리가 가능합니다.\r\n\r\n휴대폰 번호:\r\n통신사:\r\n휴대폰 모델명:\r\n휴대폰 OS정보:\r\nAS 수리여부:\r\n탈옥(루팅) 여부:\r\n카카오계정(이메일):\r\n현재 사용중인 카카오플레이스 버전:\r\n가장 최근에 발생한 문제 일시:\r\n문의내용:\r\n",
            story: "아래 내용을 함께 보내주시면 더욱 빠른 처리가 가능합니다.\r\n\r\n휴대폰 번호:\r\n통신사:\r\n휴대폰 모델명:\r\n휴대폰 OS정보:\r\nAS 수리여부:\r\n탈옥(루팅) 여부:\r\n카카오계정(이메일):\r\n현재 사용중인 카카오스토리 버전:\r\n가장 최근에 발생한 문제 일시:\r\n문의내용:\r\n",
            style: "카카오스타일은 상품을 직접 판매하지 않는 통신판매중개자입니다.\r\n따라서, 결제취소, 환불, 배송 문의 등은 구매하신 쇼핑몰의 고객센터로\r\n직접 연락을 취하셔야 합니다.\r\n상품 정보가 상이하거나 서비스에 오류가 발생하는 경우,\r\n아래 내용을 함께 보내주시면 더욱 빨리 처리가 가능합니다.\r\n\r\n휴대폰 모델명:\r\n휴대폰 OS정보:\r\n쇼핑몰명:\r\n상품명:\r\n문의내용:"
        };
        return e
    }, kakaoUI.setContactFormList = function (e) {
        var t = $("#talk-list ul");
        if (void 0 != t && "none" != t.css("display")) switch (t.find("li").css("display", "none"), e) {
        case "iphone":
            t.find("li").css("display", "block"), t.find(".pc-only").css("display", "none");
            break;
        case "blackberry":
            t.find("li").css("display", "block"), t.find(".major").css("display", "none"), t.find(".pc-only").css("display", "none");
            break;
        case "bada":
            t.find("li").css("display", "block"), t.find(".account").css("display", "none"), t.find(".major").css("display", "none"), t.find(".pc-only").css("display", "none");
            break;
        case "pc":
            t.find("li").css("display", "none"), t.find(".pc").css("display", "block"), t.find(".pc-only").css("display", "block")
        }
    }, kakaoUI.setTableLabel = function (e) {
        var t = $(e),
            n = t.parent().find("label");
        t.focus(function () {
            n.css("display", "none")
        }).blur(function () {
            "" == $(this).val() ? n.css("display", "block") : n.css("display", "none")
        }).change(function () {
            "" == $(this).val() ? n.css("display", "block") : n.css("display", "none")
        })
    }, kakaoUI.setSearchPopup = function () {
        var e = $("#search-input");
        e.keyup(function () {
            var e = $(this).val();
            $.each($("#tel-list ul a"), function () {
                var t = $(this);
                t.text().indexOf(e) > 0 ? t.parent().css("display", "block") : t.parent().css("display", "none")
            })
        }).change(function () {
            var e = $(this).val();
            $.each($("#tel-list ul a"), function () {
                var t = $(this);
                t.text().indexOf(e) > 0 ? t.parent().css("display", "block") : t.parent().css("display", "none")
            }), 0 != $("#tel-list ul").length
        })
    }, kakaoUI.servicePlace = function () {
        $(".phonechange button").removeClass("on").addClass("off"), $(".phonechange button").eq(0).removeClass("off").addClass("on"), $(".keyword-search .-typeblock").css("z-index", 1), $(".phonechange button").on("click", function () {
            $(".phonechange button").removeClass("on").addClass("off"), $(this).removeClass("off").addClass("on"), $(".keyword-search .-typeblock , .keyword-search .-typewrite").css("z-index", 0), 0 == $(this).index() ? $(".keyword-search .-typeblock").css("z-index", 1) : $(".keyword-search .-typewrite").css("z-index", 1)
        })
    }, kakaoUI.servicePlacVisual = function () {
        if (0 == $(".place-visual").length) return !1;
        var e = 0,
            t = !1;
        $.each($(".place-visual .animation .img"), function () {
            $(this).attr("top", $(this).position().top).attr("left", $(this).position().left)
        });
        var n, i = 0;
        $(window).scroll(function () {
            return n = kakaoUI.getScrollPosition(".place-visual .animation"), n.top < 1323 || n.bottom > 1389 ? (t = !1, clearInterval(i), $(".place-visual .animation").stop().css("left", 620), $.each($(".place-visual .animation .img"), function () {
                $(this).stop().css("left", $(this).attr("left") + "px")
            }), void 0) : (t || (t = !0, i = setInterval("intervalAnim()", 2600), intervalAnim()), void 0)
        }), intervalAnim = function () {
            function t(e) {
                $(e.obj).stop().animate()
            }
            $("#bug").val(n.top + "," + n.bottom), $.each($(".place-visual .animation .img"), function () {
                e = -(-$(this).position().left + 180), t({
                    obj: $(this),
                    left: e,
                    duration: 2300,
                    easing: "linear",
                    complete: function () {
                        e = -(-$(this).position().left - 180), t({
                            obj: $(this),
                            left: e,
                            duration: 1300,
                            easing: "linear"
                        })
                    }
                })
            }), t({
                obj: $(".place-visual .animation"),
                left: $(".place-visual .animation").position().left + 90,
                duration: 1300,
                easing: "linear",
                complete: function () {
                    t({
                        obj: $(".place-visual .animation"),
                        left: 630,
                        duration: 1300,
                        easing: "linear"
                    })
                }
            })
        }
    }, kakaoUI.formCheckbox = function () {
        $(".checkbox").on("click", function () {
            $(this).attr("class").indexOf("on") > 0 ? ($(this).parent().find("input")[0].checked = !1, $(this).removeClass("on").addClass("off")) : ($(this).parent().find("input")[0].checked = !0, $(this).removeClass("off").addClass("on"))
        })
    }, kakaoUI.formCheckboxReset = function () {
        var e = $(".consent .checkbox");
        (void 0 != e || e.attr("class").indexOf("on") > 0) && (e.parent().find("input")[0].checked = !1, e.removeClass("on").addClass("off")), e = $("td .checkbox"), (void 0 != e || e.attr("class").indexOf("on") > 0) && (e.parent().find("input")[0].checked = !1, e.removeClass("on").addClass("off"))
    }, kakaoUI.faq = function () {
        "Chrome" == kakaoUI.Browser.name() && $(".faq").addClass("brower-chrome"), $(".faq A.faq-title, .faq button").on("click", function () {
            return "on" == $(this).parent().parent().parent().parent().attr("class") ? ($(this).parent().parent().parent().parent().removeClass("on").addClass("off"), $(this).parent().parent().parent().parent().attr("open", null)) : ($(this).parent().parent().parent().parent().removeClass("off").addClass("on"), $(this).parent().parent().parent().parent().attr("open", "open")), !1
        })
    }, kakaoUI.scrollAnimtion = function () {
        function e(e) {
            $(e.obj).stop().animate({
                top: e.top
            }, {
                duration: e.duration,
                easing: "linear",
                complete: e.complete
            })
        }
        if (0 == $(".image-upload").length) return !1;
        kakaoUI.albumUploadAnimation = !1;
        var t = [],
            n = [];
        $(window).scroll(function () {
            var e = kakaoUI.getScrollPosition(".image-upload");
            if (e.top < 3201 || e.bottom > 3579) {
                kakaoUI.albumUploadAnimation = !1, $(".animation .item_0").stop().css("top", 420), $(".animation .item_1").stop().css("top", 420), $(".animation .item_2").stop().css("top", 420), $(".animation .item_3").stop().css("top", 420), $(".animation .item_4").stop().css("top", 420), $(".animation .item_5").stop().css("top", 420);
                for (var i = 0; i < t.length; i++) clearInterval(t[i]);
                for (var i = 0; i < n.length; i++) clearTimeout(n[i]);
                t = [], n = []
            }
            kakaoUI.albumUploadAnimation || (kakaoUI.albumUploadAnimation = !0, t[0] = setInterval("animUpload1()", 3e3), t[1] = setInterval("animUpload5()", 9e3), animUpload1(), animUpload5(), n[0] = setTimeout(function () {
                t[2] = setInterval("animUpload6()", 7e3), animUpload6()
            }, 700), n[1] = setTimeout(function () {
                t[3] = setInterval("animUpload2()", 4e3), animUpload2()
            }, 1e3), n[2] = setTimeout(function () {
                t[4] = setInterval("animUpload3()", 3e3), animUpload3()
            }, 2e3), n[3] = setTimeout(function () {
                t[5] = setInterval("animUpload4()", 5e3), animUpload4()
            }, 5e3))
        }), animUpload1 = function () {
            e({
                obj: $(".animation .item_0"),
                top: -172,
                duration: 2500,
                complete: function () {
                    $(this).css("top", "420px")
                }
            })
        }, animUpload2 = function () {
            e({
                obj: $(".animation .item_1"),
                top: -127,
                duration: 3500,
                complete: function () {
                    $(this).css("top", "420px")
                }
            })
        }, animUpload3 = function () {
            e({
                obj: $(".animation .item_2"),
                top: -107,
                duration: 2500,
                complete: function () {
                    $(this).css("top", "420px")
                }
            })
        }, animUpload4 = function () {
            e({
                obj: $(".animation .item_3"),
                top: -172,
                duration: 4500,
                complete: function () {
                    $(this).css("top", "420px")
                }
            })
        }, animUpload5 = function () {
            e({
                obj: $(".animation .item_4"),
                top: -126,
                duration: 8500,
                complete: function () {
                    $(this).css("top", "420px")
                }
            })
        }, animUpload6 = function () {
            e({
                obj: $(".animation .item_5"),
                top: -102,
                duration: 6500,
                complete: function () {
                    $(this).css("top", "420px")
                }
            })
        }
    }, kakaoUI.serviceHome = function () {
        function e(e) {
            $(e.obj).animate({
                height: e.height,
                bottom: e.bottom,
                opacity: e.opacity
            }, {
                duration: e.duration,
                easing: e.easing,
                complete: function () {}
            })
        }
        kakaoUI.homeVisualAnimationEnd = !1, $(".ani-sublayer-0 , .ani-sublayer-1 , .ani-sublayer-2, .ani-sublayer-3").css("display", "none"), $(".ani-sublayer-0").css("opacity", "hide"), $(".ani-sublayer-1").css("opacity", "hide"), $(".ani-sublayer-2").css("opacity", "hide"), $(".ani-sublayer-3").css("opacity", "hide"), $.each($(".home-visual img"), function (e) {});
        var t = [],
            n = 0;
        $(window).scroll(function () {
            function i() {
                $(".home-visual .layer_0").stop().animate({
                    width: 201,
                    left: 381,
                    top: 249
                }, {
                    duration: 1300,
                    easing: "easeInOutQuad",
                    complete: function () {}
                }), $(".home-visual .layer_1").stop().animate({
                    top: 341,
                    left: 490,
                    width: 88
                }, {
                    duration: 1300,
                    easing: "easeInOutQuad",
                    complete: function () {}
                }), $(".ani-sublayer-0").stop().hide(), $(".ani-sublayer-1").stop().hide(), $(".ani-sublayer-2").stop().hide(), $(".ani-sublayer-3").stop().hide(), t[n++] = setTimeout(function () {
                    e({
                        obj: ".ani-sublayer-0",
                        opacity: "show",
                        duration: 200
                    })
                }, 200), t[n++] = setTimeout(function () {
                    e({
                        obj: ".ani-sublayer-1",
                        opacity: "show",
                        duration: 200
                    })
                }, 400), t[n++] = setTimeout(function () {
                    e({
                        obj: ".ani-sublayer-2",
                        opacity: "show",
                        duration: 200
                    })
                }, 600), t[n++] = setTimeout(function () {
                    e({
                        obj: ".ani-sublayer-3",
                        opacity: "show",
                        duration: 200
                    })
                }, 800), t[n++] = setTimeout(function () {
                    $(".home-visual .layer_2").fadeIn({
                        duration: 300,
                        queue: !1
                    }), e({
                        obj: ".home-visual .layer_2",
                        bottom: 241,
                        height: 43,
                        duration: 500,
                        easing: "easeOutBounce"
                    })
                }, 100), t[n++] = setTimeout(function () {
                    $(".home-visual .layer_3").fadeIn({
                        duration: 300,
                        queue: !1
                    }), e({
                        obj: ".home-visual .layer_3",
                        bottom: 359,
                        height: 43,
                        duration: 500,
                        easing: "easeOutBounce"
                    })
                }, 200), t[n++] = setTimeout(function () {
                    $(".home-visual .layer_4").fadeIn({
                        duration: 300,
                        queue: !1
                    }), e({
                        obj: ".home-visual .layer_4",
                        bottom: 459,
                        height: 43,
                        duration: 500,
                        easing: "easeOutBounce"
                    })
                }, 300), t[n++] = setTimeout(function () {
                    $(".home-visual .layer_5").fadeIn({
                        duration: 300,
                        queue: !1
                    }), e({
                        obj: ".home-visual .layer_5",
                        bottom: 297,
                        height: 43,
                        duration: 500,
                        easing: "easeOutBounce"
                    })
                }, 100), t[n++] = setTimeout(function () {
                    $(".home-visual .layer_6").fadeIn({
                        duration: 300,
                        queue: !1
                    }), e({
                        obj: ".home-visual .layer_6",
                        bottom: 290,
                        height: 54,
                        duration: 500,
                        easing: "easeOutBounce"
                    })
                }, 200), t[n++] = setTimeout(function () {
                    $(".home-visual .layer_7").fadeIn({
                        duration: 300,
                        queue: !1
                    }), e({
                        obj: ".home-visual .layer_7",
                        bottom: 377,
                        height: 54,
                        duration: 500,
                        easing: "easeOutBounce"
                    })
                }, 500), t[n++] = setTimeout(function () {
                    $(".home-visual .layer_8").fadeIn({
                        duration: 300,
                        queue: !1
                    }), e({
                        obj: ".home-visual .layer_8",
                        bottom: 547,
                        height: 43,
                        duration: 500,
                        easing: "easeOutBounce"
                    })
                }, 200)
            }
            var r = kakaoUI.getScrollPosition(".home-visual");
            if ($(".home-visual .layer_2").css("display", "none"), r.top < 692 || r.bottom > 927) {
                kakaoUI.homeVisualAnimationEnd = !1;
                for (var o = 0; o < t.length; o++) clearTimeout(t[o]);
                return t = [], $(".home-visual .layer_0").stop().css({
                    width: 310,
                    left: 184,
                    top: 225
                }), $(".home-visual .layer_1").stop().css({
                    top: 333,
                    left: 620,
                    width: 116
                }), $(".home-visual .layer_2").css({
                    display: "none",
                    bottom: 441,
                    width: 31
                }), $(".home-visual .layer_3").css({
                    display: "none",
                    bottom: 559,
                    width: 31
                }), $(".home-visual .layer_4").css({
                    display: "none",
                    bottom: 659,
                    width: 31
                }), $(".home-visual .layer_5").css({
                    display: "none",
                    bottom: 497,
                    width: 31
                }), $(".home-visual .layer_6").css({
                    display: "none",
                    bottom: 490,
                    width: 31
                }), $(".home-visual .layer_7").css({
                    display: "none",
                    bottom: 577,
                    width: 33
                }), $(".home-visual .layer_8").css({
                    display: "none",
                    bottom: 647,
                    width: 31
                }), void 0
            }
            kakaoUI.homeVisualAnimationEnd || (kakaoUI.homeVisualAnimationEnd = !0, i())
        })
    }, kakaoUI.serviceAgit = function () {
        function e(t) {
            $(".animation .layer_0").stop().animate({
                top: t[0]
            }, {
                duration: 1300,
                easing: "easeInOutQuad",
                complete: function () {}
            }), $(".animation .layer_1").stop().animate({
                top: t[1]
            }, {
                duration: 1400,
                easing: "easeInOutQuad",
                complete: function () {}
            }), $(".animation .layer_2").delay(1e3).animate({
                top: t[2]
            }, {
                duration: 1400,
                easing: "easeInOutQuad",
                complete: function () {}
            }), $(".animation .layer_3").delay(100).animate({
                top: t[3]
            }, {
                duration: 1100,
                easing: "easeInOutQuad",
                complete: function () {}
            }), $(".animation .layer_4").delay(300).animate({
                top: t[4]
            }, {
                duration: 1300,
                easing: "easeInOutQuad",
                complete: function () {}
            }), $(".animation .layer_5").delay(600).animate({
                top: t[5]
            }, {
                duration: 1200,
                easing: "easeInOutQuad",
                complete: function () {}
            }), setTimeout(function () {
                -187 == $(".animation .layer_0").position().top ? e([-180, 210, 78, 2, 94, 36]) : e([-187, 200, 73, -7, 89, 31])
            }, 1300)
        }
        return 0 == $(".service-agit .animation .layer_0").length ? !1 : (e([-180, 210, 78, -7, 89, 31]), void 0)
    }, kakaoUI.setLnb = function (e) {
        $("#content-lnb li").eq(e.initIdx).addClass("on"), $("#content-lnb").find("li").on("click", function () {
            return e.selected({
                self: $(this).find("span"),
                idx: $(this).index()
            }), !1
        })
    }, kakaoUI.setLinkTab = function () {
        function e(e) {
            for (var r = 0; i > r; r++) r == e ? (t.eq(r).css("display", "block"), n.eq(r).addClass("on")) : (t.eq(r).css("display", "none"), n.eq(r).removeClass("on"))
        }
        var t = $(".tab-box section"),
            n = $(".link-tab li"),
            i = n.length;
        $.each($(".link-tab li"), function (t) {
            $(this).on("click", function () {
                return e(t), !1
            })
        })
    }, kakaoUI.setLocation = function (e) {
        var t = $("#location");
        switch (e.title) {
        case "api":
            t.append("<li><a href=" + e.secondlink + '><span class="location-api">API</span></a></li>');
            break;
        case "voicechart":
            t.append("<li ><a href=" + e.secondlink + '><span class="location-voicechart">보이스톡 현황 기상도</span></a></li>');
            break;
        case "theme":
            t.append("<li ><a href=" + e.secondlink + '><span class="location-theme">사용자 테마</span></a></li>');
            break;
        case "allchart":
            t.append("<li ><a href=" + e.secondlink + '><span class="location-voicechart">보이스톡 현황 기상도</span></a></li>'), t.append("<li><a href=" + e.thirdlink + '><span class="location-allchart">전체 기상도</span></a></li>')
        }
    }, kakaoUI.setIphoneAnimation = function () {
        function e(e) {
            var t = e ? a + 1 >= o ? 0 : a + 1 : 0 > a - 1 ? o - 1 : a - 1,
                n = i.eq(s),
                r = i.eq(a),
                u = i.eq(t);
            l = !0, n.stop().css({
                display: "none",
                opacity: "1",
                "z-index": "0"
            }), r.stop().css({
                display: "block",
                "z-index": "0"
            }), u.stop().css({
                display: "none",
                opacity: "1",
                "z-index": "1"
            }), r.animate({
                opacity: "hide"
            }, {
                duration: 600
            }), u.animate({
                opacity: "show"
            }, {
                duration: 600
            }), s = a, a = t
        }

        function t() {
            r.stop().fadeIn(350, "swing", function () {
                r.fadeOut(350, "swing")
            })
        }

        function n() {
            return $(".iphone-box img").is(":animated") ? !0 : !1
        }
        if (0 == $(".iphone-box button").length) return !1;
        var i = $(".iphone-box img"),
            r = $("#lenz-effect"),
            o = i.size(),
            a = 0,
            s = 0,
            l = !1;
        r.fadeOut(30), $(".iphone-box .btn-iphone-left").on("click", function () {
            n() || (e(!1), t())
        }), $(".iphone-box .btn-iphone-right").on("click", function () {
            n() || (e(!0), t())
        }), $(".iphone-box img").eq(0).css("display", "block")
    }, kakaoUI.setIconsAnimation = function () {
        if (0 == $(".character-box span").length) return !1;
        kakaoUI.storyIconAnimationEnd = !1;
        var e = [];
        $(window).scroll(function () {
            var t = kakaoUI.getScrollPosition(".character-box");
            if (t.top < 3197 || t.bottom > 3122) {
                kakaoUI.storyIconAnimationEnd = !1;
                for (var n = 0; n < e.length; n++) clearTimeout(e[n]);
                return $.each($(".character-box span"), function () {
                    var e = this;
                    "img-cloud img-icons" != $(e).attr("class") && "img-char img-icons" != $(e).attr("class") && $(e).stop().css("top", "210px")
                }), e = [], void 0
            }
            kakaoUI.storyIconAnimationEnd || (kakaoUI.storyIconAnimationEnd = !0, $.each($(".character-box span"), function (t) {
                var n = this;
                "img-cloud img-icons" != $(n).attr("class") && "img-char img-icons" != $(n).attr("class") && ($(n).css("top", "210px"), e[t] = setTimeout(function () {
                    $(n).stop().animate({
                        top: "-=63"
                    }, {
                        duration: 150,
                        easing: "easeInOutExpo",
                        complete: function () {
                            $(n).stop().animate({
                                top: "174px"
                            }, {
                                duration: 200
                            })
                        }
                    })
                }, 150 * (t + 1)))
            }))
        })
    }, kakaoUI.getScrollPosition = function (e) {
        if (0 == $(e).length) return !1;
        var t = document.documentElement,
            n = document.body,
            i = t && t.scrollTop || n && n.scrollTop || 0,
            r = $(e).offset().top,
            o = $(window).height();
        return offset = [], offset.top = o + r + i, offset.bottom = r + i, offset
    }, kakaoUI.doClockAnimation = function () {
        if (0 == $(".story-intro").length) return !1;
        kakaoUI.storyClockAnimationEnd = !1;
        var e = [];
        $(window).scroll(function () {
            var t = kakaoUI.getScrollPosition(".story-intro");
            if (t.top < 1320 || t.bottom > 1420) {
                kakaoUI.storyClockAnimationEnd = !1;
                for (var n = 0; n < e.length; n++) clearTimeout(e[n]);
                return e = [], $(".story-intro .img-hour").rotate({
                    angle: 0,
                    center: ["50%", "50%"]
                }), $(".story-intro .img-min").rotate({
                    angle: 0,
                    center: ["50%", "50%"]
                }), $(".story-intro .img-sec").rotate({
                    angle: 0,
                    center: ["50%", "50%"]
                }), void 0
            }
            kakaoUI.storyClockAnimationEnd || (kakaoUI.storyClockAnimationEnd = !0, $(".story-intro .img-hour").rotate({
                angle: 180,
                animateTo: 242,
                duration: 1500,
                center: ["50%", "50%"]
            }), $(".story-intro .img-min").rotate({
                angle: 0,
                animateTo: 750,
                duration: 1500,
                center: ["50%", "50%"]
            }), $(".story-intro .img-sec").rotate({
                angle: 0,
                animateTo: 860,
                duration: 2e3,
                center: ["50%", "50%"]
            }))
        }), $(window).trigger("scroll")
    }, kakaoUI.animStyleSprite = function () {
        function e() {
            n = [], n.push({
                left: 206,
                top: 38
            }), n.push({
                left: 269,
                top: 198
            }), n.push({
                left: 118,
                top: 264
            }), n.push({
                left: 88,
                top: 187
            }), n.push({
                left: 362,
                top: 125
            }), n.push({
                left: 358,
                top: 300
            }), n.push({
                left: 198,
                top: 203
            }), n.push({
                left: 403,
                top: 169
            }), n.push({
                left: 422,
                top: 373
            }), n.push({
                left: 388,
                top: 57
            }), n.push({
                left: 123,
                top: 111
            }), n.push({
                left: 80,
                top: 106
            }), n.push({
                left: 484,
                top: 205
            }), n.push({
                left: 309,
                top: 376
            }), n.push({
                left: 267,
                top: 347
            }), n.push({
                left: 168,
                top: 38
            }), n.push({
                left: 76,
                top: 263
            }), n.push({
                left: 448,
                top: 234
            }), n.push({
                left: 468,
                top: 34
            })
        }

        function t() {
            i = [], i.push({
                left: 206,
                top: 18
            }), i.push({
                left: 269,
                top: 208
            }), i.push({
                left: 108,
                top: 274
            }), i.push({
                left: 78,
                top: 187
            }), i.push({
                left: 372,
                top: 125
            }), i.push({
                left: 368,
                top: 310
            }), i.push({
                left: 188,
                top: 203
            }), i.push({
                left: 413,
                top: 169
            }), i.push({
                left: 432,
                top: 383
            }), i.push({
                left: 398,
                top: 47
            }), i.push({
                left: 113,
                top: 101
            }), i.push({
                left: 70,
                top: 106
            }), i.push({
                left: 494,
                top: 205
            }), i.push({
                left: 309,
                top: 386
            }), i.push({
                left: 267,
                top: 357
            }), i.push({
                left: 158,
                top: 28
            }), i.push({
                left: 66,
                top: 273
            }), i.push({
                left: 458,
                top: 244
            }), i.push({
                left: 468,
                top: 34
            })
        }
        kakaoUI.styleSpriteAnimationEnd = !1;
        var n = [],
            i = [];
        t(), e(), $(window).scroll(function () {
            var e = kakaoUI.getScrollPosition("#sprite-box");
            return e.top < 1354 || e.bottom > 1742 ? (kakaoUI.styleSpriteAnimationEnd = !1, void 0) : (kakaoUI.styleSpriteAnimationEnd || (kakaoUI.styleSpriteAnimationEnd = !0, $.each($(".gather-style .anim-box span"), function (e) {
                Math.floor(300 * Math.random()) - 150, Math.floor(300 * Math.random()) - 150;
                $(this).css("left", i[e].left), $(this).css("top", i[e].top)
            }), $.each($(".gather-style .anim-box span"), function (e) {
                $(this).stop().animate({
                    left: n[e].left,
                    top: n[e].top
                }, {
                    duration: 2e3,
                    complete: function () {}
                })
            })), void 0)
        })
    }, kakaoUI.animStyleConnect = function () {
        kakaoUI.styleConnectAnimationEnd = !1;
        var e = [];
        $(window).scroll(function () {
            var t = kakaoUI.getScrollPosition("#box-indicator");
            if (t.top < 3900 || t.bottom > 3880) {
                kakaoUI.styleConnectAnimationEnd = !1;
                for (var n = 0; n < e.length; n++) clearTimeout(e[n]);
                e = [], $.each($(".with-friend .indicator-box span"), function () {
                    $(this).stop(), $(this).hide()
                })
            }
            kakaoUI.styleConnectAnimationEnd || (kakaoUI.styleConnectAnimationEnd = !0, $.each($(".with-friend .indicator-box span"), function () {
                $(this).stop(), $(this).hide()
            }), $.each($(".with-friend .indicator-group1 span"), function (t) {
                var n = this;
                e[t] = setTimeout(function () {
                    $(n).stop().animate({
                        opacity: "show"
                    }, {
                        duration: 330,
                        easing: "easeOutExpo",
                        complete: function () {}
                    })
                }, 330 * (t + 1))
            }), $.each($(".with-friend .indicator-group2 span"), function (t) {
                var n = this;
                e[t + 3] = setTimeout(function () {
                    $(n).stop().animate({
                        opacity: "show"
                    }, {
                        duration: 330,
                        easing: "easeOutExpo",
                        complete: function () {}
                    })
                }, 330 * (t + 1.5))
            }), $.each($(".with-friend .indicator-group3 span"), function (t) {
                var n = this;
                e[t + 6] = setTimeout(function () {
                    $(n).stop().animate({
                        opacity: "show"
                    }, {
                        duration: 330,
                        easing: "easeOutExpo",
                        complete: function () {}
                    })
                }, 330 * (t + 2))
            }))
        })
    }, kakaoUI.animStyleDisNumber = function () {
        kakaoUI.styleDisNumberAnimEnd = !1;
        var e = 0,
            t = "-=47px",
            n = $(".discount-number1"),
            i = $(".discount-number2");
        $(window).scroll(function () {
            function r() {
                $(".discount-number2").css("background-position-y", t), ++a % 10 == 0 && $(".discount-number1").css("background-position-y", t)
            }
            var o = 0,
                a = 0,
                s = kakaoUI.getScrollPosition("#box-disnumber");
            return s.top < 2389 || s.bottom > 2412 ? (kakaoUI.styleDisNumberAnimEnd = !1, clearInterval(e), void 0) : (kakaoUI.styleDisNumberAnimEnd || (kakaoUI.styleDisNumberAnimEnd = !0, n.css("background-position-y", "0"), i.css("background-position-y", "0"), r(), e = setInterval(function () {
                r(), o++, 39 == o && clearInterval(e)
            }, 30)), void 0)
        })
    }, kakaoUI.animPhone = function () {
        kakaoUI.talkPhoneAnimationEnd = !1;
        var e = [];
        $(window).scroll(function () {
            var t = kakaoUI.getScrollPosition(".trans-multimedia");
            if (t.bottom > 2630 || t.top < 2170) {
                kakaoUI.talkPhoneAnimationEnd = !1;
                for (var n = 0; n < e.length; n++) clearTimeout(e[n]);
                return e = [], $.each($(".trans-multimedia .anim-box div"), function () {
                    $(this).find("img").rotate({
                        angle: 0,
                        animateTo: 0,
                        center: ["25%", "90%"]
                    })
                }), void 0
            }
            if (!kakaoUI.talkPhoneAnimationEnd) {
                kakaoUI.talkPhoneAnimationEnd = !0;
                var i = 0;
                $($(".trans-multimedia .anim-box div").get().reverse()).each(function (t) {
                    if (0 == t) return e[t] = 0, void 0;
                    var n = $(this).find("img");
                    e[t] = setTimeout(function () {
                        var e = 8 + 7 * i++;
                        n.show(), n.rotate({
                            angle: 0,
                            animateTo: e,
                            easing: $.easing.easeInOut,
                            center: ["25%", "90%"]
                        })
                    }, 60 * (t + 1))
                })
            }
        })
    }, kakaoUI.animFriendConnect = function () {
        kakaoUI.talkFriendAnimationEnd = !1;
        var e = [];
        $(window).scroll(function () {
            var t = kakaoUI.getScrollPosition(".voice-talk .anim-box");
            if (t.top < 1746 || t.bottom > 1727) {
                kakaoUI.talkFriendAnimationEnd = !1;
                for (var n = 0; n < e.length; n++) clearTimeout(e[n]);
                return e = [], $.each($(".voice-talk .indicator-box span"), function () {
                    $(this).stop(), $(this).hide()
                }), void 0
            }
            kakaoUI.talkFriendAnimationEnd || (kakaoUI.talkFriendAnimationEnd = !0, $.each($(".voice-talk .indicator-box span"), function () {
                $(this).stop(), $(this).hide()
            }), $.each($(".voice-talk .indicator-box span"), function (t) {
                var n = this;
                e[t] = setTimeout(function () {
                    $(n).stop().animate({
                        opacity: "show"
                    }, {
                        duration: 330,
                        easing: "easeOutExpo",
                        complete: function () {}
                    })
                }, 330 * (t + 1))
            }))
        })
    }, kakaoUI.setTableClass = function () {
        $(".table-date tr:nth-child(even) td:first-child").css({
            background: "none",
            "border-left": "1px solid #e6e6e6"
        }), $(".table-expand tr:nth-child(even) td:first-child").css({
            background: "none",
            "border-left": "1px solid #e6e6e6"
        })
    }, kakaoUI.rotateMainCompass = function () {
        kakaoUI.mainCompassAnimationEnd = !1;
        var e = $(".block-content .place-compass");
        $(window).scroll(function () {
            var t = kakaoUI.getScrollPosition(".place-compass"),
                n = $(".block-content .place-compass").parent().offset(),
                i = {};
            return n.top < 776 ? i = {
                top: 1591,
                bottom: 1672
            } : n.top < 1080 ? i = {
                top: 2194,
                bottom: 2275
            } : n.top < 1384 && (i = {
                top: 2792,
                bottom: 2873
            }), t.top < i.top || t.bottom > i.bottom ? (kakaoUI.mainCompassAnimationEnd = !1, e.rotate({
                angle: 0,
                center: ["50%", "50%"]
            }), void 0) : (kakaoUI.mainCompassAnimationEnd || (kakaoUI.mainCompassAnimationEnd = !0, e.rotate({
                angle: 0,
                animateTo: 765,
                duration: 2e3,
                easing: $.easeOutExpo,
                center: ["50%", "50%"]
            })), void 0)
        }), $(window).trigger("scroll")
    }, kakaoUI.openPopup = function (e) {
        var t = $("#layer-content"),
            n = $("#popup-layer");
        if (void 0 !== e.content) {
            var i = $("#popup-content");
            i.children().remove(), i.append(e.content)
        }
        setTimeout(function () {
            n.stop().fadeIn(1e3), t.outerHeight() < $(document).height() && t.css("margin-top", "-" + t.outerHeight() / 2 + "px"), t.outerHeight() < $(document).width() ? t.css("margin-left", "-" + t.outerWidth() / 2 + "px") : t.css("left", "0px"), $("#popup-button").on("click", function () {
                n.stop().fadeOut()
            }), $("#popup-layer .bg").on("click", function () {
                n.stop().fadeOut()
            })
        }, 300)
    }, kakaoUI.MuiscAnimation = function () {
        function e(e) {
            e.delay ? $(e.obj).stop().animate({
                width: e.width,
                height: e.height,
                top: e.top,
                left: e.left,
                opacity: e.opacity
            }, {
                duration: "slow",
                easing: "linear",
                complete: function () {}
            }) : $(e.obj).stop().animate({
                width: e.width,
                height: e.height,
                top: e.top,
                left: e.left,
                right: e.right,
                opacity: e.opacity
            }, {
                duration: "slow",
                easing: "linear",
                complete: function () {}
            })
        }
        if ("MSIE" == kakaoUI.Browser.name() && kakaoUI.Browser.vision() <= 7) return !1;
        var t = [];
        t[0] = setInterval(function () {
            $("#animation-speeker .icon1 img").css({
                width: 62,
                height: 62,
                top: 55,
                left: 38,
                opacity: .5
            }), e({
                obj: $("#animation-speeker .icon1 img"),
                width: 82,
                height: 82,
                top: 44,
                left: 28,
                opacity: 0
            })
        }, 500), setTimeout(function () {
            t[1] = setInterval(function () {
                $("#animation-speeker .icon2 img").css({
                    width: 62,
                    height: 62,
                    top: 55,
                    left: 38,
                    opacity: .5
                }), e({
                    obj: $("#animation-speeker .icon2 img"),
                    width: 82,
                    height: 82,
                    top: 44,
                    left: 28,
                    opacity: 0,
                    delay: 500
                })
            }, 500)
        }, 500)
    }, kakaoUI.setPageYoutube = function (e) {
        for (var t = 0, n = [], i = 0, r = 9, o = $("#youtube-link"), a = $("#movie-button"), s = 0; s < e.length; s++) a.append('<div class="button-box"><img src="' + e[s].img_src + '" alt="' + e[s].img_alt + '" /><button id="btn' + t + '" title="' + e[s].button_title + '"></button></div>'), i += a.find("img").eq(s).width() + r, n[s] = e.url, a.find("button").eq(t++).on("click", function () {
            var t = $(this).parent().index();
            a.find("button").removeClass("on"), $(this).addClass("on"), o.append('<iframe style="position:absolute;left:0;top:0" width="640" height="360" src="' + e[t].url + '" frameborder="0" allowfullscreen></iframe>');
            var n = o.children();
            1 != n.length && n.eq(0).remove()
        });
        a.find("div").eq(e.length - 1).addClass("end"), a.find("button").eq(0).trigger("click")
    }, kakaoUI.widgetAnimation = function () {
        kakaoUI.homeWidgetAnimationEnd = !1;
        var e;
        return 0 == $(".required-widget").length ? !1 : "MSIE" == kakaoUI.Browser.name() && kakaoUI.Browser.vision() <= 9 ? !1 : ($(window).scroll(function () {
            return e = kakaoUI.getScrollPosition(".required-widget .layer_0"), e.bottom > 3013 || e.top < 2974 ? (kakaoUI.homeWidgetAnimationEnd = !1, $(".required-widget .layer_1").stop().rotate({
                angle: 0,
                center: ["50%", "50%"]
            }), $(".required-widget .layer_2").stop().rotate({
                angle: 0,
                center: ["50%", "50%"]
            }), void 0) : (kakaoUI.homeWidgetAnimationEnd || (kakaoUI.homeWidgetAnimationEnd = !0, $(".required-widget .layer_1").stop().rotate({
                angle: 0,
                animateTo: 180,
                duration: 2e3,
                center: ["50%", "50%"]
            }), $(".required-widget .layer_2").stop().rotate({
                angle: 0,
                animateTo: 180,
                duration: 2e3,
                center: ["50%", "50%"]
            })), void 0)
        }), void 0)
    }, kakaoUI.setMainBanner = function (e) {
        $(".main-banner").append('<a href="' + e.link + '"><img src="' + e.src + '" alt="메인 배너 이미지" /></a>')
    }, $(document).ready(function () {
        $("html").attr("manifest", location.href + "offline_html.appcache"), kakaoUI.formCheckbox(), kakaoUI.serviceAgit(), kakaoUI.servicePlacVisual(), kakaoUI.scrollAnimtion(), kakaoUI.servicePlace(), kakaoUI.MuiscAnimation(), $(window).trigger("scroll")
    }),
    function (e) {
        e.extend(e.fn, {
            validate: function (t) {
                if (!this.length) return t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
                var n = e.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                    n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.submit(function (t) {
                    function i() {
                        var i;
                        return n.settings.submitHandler ? (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), !1) : !0
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function () {
                if (e(this[0]).is("form")) return this.validate().form();
                var t = !0,
                    n = e(this[0].form).validate();
                return this.each(function () {
                    t = t && n.element(this)
                }), t
            },
            removeAttrs: function (t) {
                var n = {},
                    i = this;
                return e.each(t.split(/\s/), function (e, t) {
                    n[t] = i.attr(t), i.removeAttr(t)
                }), n
            },
            rules: function (t, n) {
                var i = this[0];
                if (t) {
                    var r = e.data(i.form, "validator").settings,
                        o = r.rules,
                        a = e.validator.staticRules(i);
                    switch (t) {
                    case "add":
                        e.extend(a, e.validator.normalizeRule(n)), delete a.messages, o[i.name] = a, n.messages && (r.messages[i.name] = e.extend(r.messages[i.name], n.messages));
                        break;
                    case "remove":
                        if (!n) return delete o[i.name], a;
                        var s = {};
                        return e.each(n.split(/\s/), function (e, t) {
                            s[t] = a[t], delete a[t]
                        }), s
                    }
                }
                var l = e.validator.normalizeRules(e.extend({}, e.validator.classRules(i), e.validator.attributeRules(i), e.validator.dataRules(i), e.validator.staticRules(i)), i);
                if (l.required) {
                    var u = l.required;
                    delete l.required, l = e.extend({
                        required: u
                    }, l)
                }
                return l
            }
        }), e.extend(e.expr[":"], {
            blank: function (t) {
                return !e.trim("" + e(t).val())
            },
            filled: function (t) {
                return !!e.trim("" + e(t).val())
            },
            unchecked: function (t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function (t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function (t, n) {
            return 1 === arguments.length ? function () {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                    return n
                })
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (e) {
                    this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
                },
                onfocusout: function (e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function (e, t) {
                    (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
                },
                onclick: function (e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function (t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
                },
                unhighlight: function (t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
                }
            },
            setDefaults: function (t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function t(t) {
                        var n = e.data(this[0].form, "validator"),
                            i = "on" + t.type.replace(/^validate/, "");
                        n.settings[i] && n.settings[i].call(n, this[0], t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n = this.groups = {};
                    e.each(this.settings.groups, function (t, i) {
                        "string" == typeof i && (i = i.split(/\s/)), e.each(i, function (e, i) {
                            n[i] = t
                        })
                    });
                    var i = this.settings.rules;
                    e.each(i, function (t, n) {
                        i[t] = e.validator.normalizeRule(n)
                    }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function () {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function (t) {
                    t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
                    var n = this.check(t) !== !1;
                    return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
                },
                showErrors: function (t) {
                    if (t) {
                        e.extend(this.errorMap, t), this.errorList = [];
                        for (var n in t) this.errorList.push({
                            message: t[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = e.grep(this.successList, function (e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function () {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid)
                },
                objectLength: function (e) {
                    var t = 0;
                    for (var n in e) t++;
                    return t
                },
                hideErrors: function () {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function () {
                    return 0 === this.size()
                },
                size: function () {
                    return this.errorList.length
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function () {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function (e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function () {
                    var t = this,
                        n = {};
                    return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function (t) {
                    return e(t)[0]
                },
                errors: function () {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function () {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
                },
                prepareForm: function () {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function (e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function (t) {
                    var n = e(t).attr("type"),
                        i = e(t).val();
                    return "radio" === n || "checkbox" === n ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
                },
                check: function (t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n, i = e(t).rules(),
                        r = !1,
                        o = this.elementValue(t);
                    for (var a in i) {
                        var s = {
                            method: a,
                            parameters: i[a]
                        };
                        try {
                            if (n = e.validator.methods[a].call(this, o, t, s.parameters), "dependency-mismatch" === n) {
                                r = !0;
                                continue
                            }
                            if (r = !1, "pending" === n) return this.toHide = this.toHide.not(this.errorsFor(t)), void 0;
                            if (!n) return this.formatAndAdd(t, s), !1
                        } catch (l) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", l), l
                        }
                    }
                    return r ? void 0 : (this.objectLength(i) && this.successList.push(t), !0)
                },
                customDataMessage: function (t, n) {
                    return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
                },
                customMessage: function (e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                },
                findDefined: function () {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e];
                    return void 0
                },
                defaultMessage: function (t, n) {
                    return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function (t, n) {
                    var i = this.defaultMessage(t, n.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: t
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function (e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function () {
                    var e, t;
                    for (e = 0; this.errorList[e]; e++) {
                        var n = this.errorList[e];
                        this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function () {
                    return e(this.errorList).map(function () {
                        return this.element
                    })
                },
                showLabel: function (t, n) {
                    var i = this.errorsFor(t);
                    i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
                },
                errorsFor: function (t) {
                    var n = this.idOrName(t);
                    return this.errors().filter(function () {
                        return e(this).attr("for") === n
                    })
                },
                idOrName: function (e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function (e) {
                    return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
                },
                checkable: function (e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function (t) {
                    return e(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function (t, n) {
                    switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function (e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
                },
                dependTypes: {
                    "boolean": function (e) {
                        return e
                    },
                    string: function (t, n) {
                        return !!e(t, n.form).length
                    },
                    "function": function (e, t) {
                        return e(t)
                    }
                },
                optional: function (t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                },
                startRequest: function (e) {
                    this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
                },
                stopRequest: function (t, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function (t) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function (t, n) {
                t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
            },
            classRules: function (t) {
                var n = {},
                    i = e(t).attr("class");
                return i && e.each(i.split(" "), function () {
                    this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function (t) {
                var n = {},
                    i = e(t),
                    r = i[0].getAttribute("type");
                for (var o in e.validator.methods) {
                    var a;
                    "required" === o ? (a = i.get(0).getAttribute(o), "" === a && (a = !0), a = !!a) : a = i.attr(o), /min|max/.test(o) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? n[o] = a : r === o && "range" !== r && (n[o] = !0)
                }
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            dataRules: function (t) {
                var n, i, r = {},
                    o = e(t);
                for (n in e.validator.methods) i = o.data("rule-" + n.toLowerCase()), void 0 !== i && (r[n] = i);
                return r
            },
            staticRules: function (t) {
                var n = {},
                    i = e.data(t.form, "validator");
                return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
            },
            normalizeRules: function (t, n) {
                return e.each(t, function (i, r) {
                    if (r === !1) return delete t[i], void 0;
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                        case "string":
                            o = !!e(r.depends, n.form).length;
                            break;
                        case "function":
                            o = r.depends.call(n, n)
                        }
                        o ? t[i] = void 0 !== r.param ? r.param : !0 : delete t[i]
                    }
                }), e.each(t, function (i, r) {
                    t[i] = e.isFunction(r) ? r(n) : r
                }), e.each(["minlength", "maxlength"], function () {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function () {
                    var n;
                    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
                }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function (t) {
                if ("string" == typeof t) {
                    var n = {};
                    e.each(t.split(/\s/), function () {
                        n[this] = !0
                    }), t = n
                }
                return t
            },
            addMethod: function (t, n, i) {
                e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function (t, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = e(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
                },
                email: function (e, t) {
                    return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
                },
                url: function (e, t) {
                    return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
                },
                date: function (e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                },
                dateISO: function (e, t) {
                    return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
                },
                number: function (e, t) {
                    return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function (e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                creditcard: function (e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    var n = 0,
                        i = 0,
                        r = !1;
                    e = e.replace(/\D/g, "");
                    for (var o = e.length - 1; o >= 0; o--) {
                        var a = e.charAt(o);
                        i = parseInt(a, 10), r && (i *= 2) > 9 && (i -= 9), n += i, r = !r
                    }
                    return n % 10 === 0
                },
                minlength: function (t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || r >= i
                },
                maxlength: function (t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i >= r
                },
                rangelength: function (t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || r >= i[0] && r <= i[1]
                },
                min: function (e, t, n) {
                    return this.optional(t) || e >= n
                },
                max: function (e, t, n) {
                    return this.optional(t) || n >= e
                },
                range: function (e, t, n) {
                    return this.optional(t) || e >= n[0] && e <= n[1]
                },
                equalTo: function (t, n, i) {
                    var r = e(i);
                    return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                        e(n).valid()
                    }), t === r.val()
                },
                remote: function (t, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r = this.previousValue(n);
                    if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), r.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = r.message, i = "string" == typeof i && {
                        url: i
                    } || i, r.old === t) return r.valid;
                    r.old = t;
                    var o = this;
                    this.startRequest(n);
                    var a = {};
                    return a[n.name] = t, e.ajax(e.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: a,
                        success: function (i) {
                            o.settings.messages[n.name].remote = r.originalMessage;
                            var a = i === !0 || "true" === i;
                            if (a) {
                                var s = o.formSubmitted;
                                o.prepareElement(n), o.formSubmitted = s, o.successList.push(n), delete o.invalid[n.name], o.showErrors()
                            } else {
                                var l = {},
                                    u = i || o.defaultMessage(n, "remote");
                                l[n.name] = r.message = e.isFunction(u) ? u(t) : u, o.invalid[n.name] = !0, o.showErrors(l)
                            }
                            r.valid = a, o.stopRequest(n, a)
                        }
                    }, i)), "pending"
                }
            }
        }), e.format = e.validator.format
    }(jQuery),
    function (e) {
        var t = {};
        if (e.ajaxPrefilter) e.ajaxPrefilter(function (e, n, i) {
            var r = e.port;
            "abort" === e.mode && (t[r] && t[r].abort(), t[r] = i)
        });
        else {
            var n = e.ajax;
            e.ajax = function (i) {
                var r = ("mode" in i ? i : e.ajaxSettings).mode,
                    o = ("port" in i ? i : e.ajaxSettings).port;
                return "abort" === r ? (t[o] && t[o].abort(), t[o] = n.apply(this, arguments), t[o]) : n.apply(this, arguments)
            }
        }
    }(jQuery),
    function (e) {
        e.extend(e.fn, {
            validateDelegate: function (t, n, i) {
                return this.bind(n, function (n) {
                    var r = e(n.target);
                    return r.is(t) ? i.apply(r, arguments) : void 0
                })
            }
        })
    }(jQuery),
    function () {
        function e(e) {
            return e.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g, "")
        }
        jQuery.validator.addMethod("maxWords", function (t, n, i) {
            return this.optional(n) || e(t).match(/\b\w+\b/g).length <= i
        }, jQuery.validator.format("Please enter {0} words or less.")), jQuery.validator.addMethod("minWords", function (t, n, i) {
            return this.optional(n) || e(t).match(/\b\w+\b/g).length >= i
        }, jQuery.validator.format("Please enter at least {0} words.")), jQuery.validator.addMethod("rangeWords", function (t, n, i) {
            var r = e(t),
                o = /\b\w+\b/g;
            return this.optional(n) || r.match(o).length >= i[0] && r.match(o).length <= i[1]
        }, jQuery.validator.format("Please enter between {0} and {1} words."))
    }(), jQuery.validator.addMethod("letterswithbasicpunc", function (e, t) {
        return this.optional(t) || /^[a-z\-.,()'"\s]+$/i.test(e)
    }, "Letters or punctuation only please"), jQuery.validator.addMethod("alphanumeric", function (e, t) {
        return this.optional(t) || /^\w+$/i.test(e)
    }, "Letters, numbers, and underscores only please"), jQuery.validator.addMethod("lettersonly", function (e, t) {
        return this.optional(t) || /^[a-z]+$/i.test(e)
    }, "Letters only please"), jQuery.validator.addMethod("nowhitespace", function (e, t) {
        return this.optional(t) || /^\S+$/i.test(e)
    }, "No white space please"), jQuery.validator.addMethod("ziprange", function (e, t) {
        return this.optional(t) || /^90[2-5]\d\{2\}-\d{4}$/.test(e)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx"), jQuery.validator.addMethod("zipcodeUS", function (e, t) {
        return this.optional(t) || /\d{5}-\d{4}$|^\d{5}$/.test(e)
    }, "The specified US ZIP Code is invalid"), jQuery.validator.addMethod("integer", function (e, t) {
        return this.optional(t) || /^-?\d+$/.test(e)
    }, "A positive or negative non-decimal number please"), jQuery.validator.addMethod("vinUS", function (e) {
        if (17 !== e.length) return !1;
        var t, n, i, r, o, a, s = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            l = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
            u = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            c = 0;
        for (t = 0; 17 > t; t++) {
            if (r = u[t], i = e.slice(t, t + 1), 8 === t && (a = i), isNaN(i)) {
                for (n = 0; n < s.length; n++)
                    if (i.toUpperCase() === s[n]) {
                        i = l[n], i *= r, isNaN(a) && 8 === n && (a = s[n]);
                        break
                    }
            } else i *= r;
            c += i
        }
        return o = c % 11, 10 === o && (o = "X"), o === a ? !0 : !1
    }, "The specified vehicle identification number (VIN) is invalid."), jQuery.validator.addMethod("dateITA", function (e, t) {
        var n = !1,
            i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (i.test(e)) {
            var r = e.split("/"),
                o = parseInt(r[0], 10),
                a = parseInt(r[1], 10),
                s = parseInt(r[2], 10),
                l = new Date(s, a - 1, o);
            n = l.getFullYear() === s && l.getMonth() === a - 1 && l.getDate() === o ? !0 : !1
        } else n = !1;
        return this.optional(t) || n
    }, "Please enter a correct date"), jQuery.validator.addMethod("iban", function (e, t) {
        if (this.optional(t)) return !0;
        if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(e)) return !1;
        var n = e.replace(/ /g, "").toUpperCase(),
            i = n.substring(0, 2),
            r = {
                AL: "\\d{8}[\\dA-Z]{16}",
                AD: "\\d{8}[\\dA-Z]{12}",
                AT: "\\d{16}",
                AZ: "[\\dA-Z]{4}\\d{20}",
                BE: "\\d{12}",
                BH: "[A-Z]{4}[\\dA-Z]{14}",
                BA: "\\d{16}",
                BR: "\\d{23}[A-Z][\\dA-Z]",
                BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                CR: "\\d{17}",
                HR: "\\d{17}",
                CY: "\\d{8}[\\dA-Z]{16}",
                CZ: "\\d{20}",
                DK: "\\d{14}",
                DO: "[A-Z]{4}\\d{20}",
                EE: "\\d{16}",
                FO: "\\d{14}",
                FI: "\\d{14}",
                FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                GE: "[\\dA-Z]{2}\\d{16}",
                DE: "\\d{18}",
                GI: "[A-Z]{4}[\\dA-Z]{15}",
                GR: "\\d{7}[\\dA-Z]{16}",
                GL: "\\d{14}",
                GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                HU: "\\d{24}",
                IS: "\\d{22}",
                IE: "[\\dA-Z]{4}\\d{14}",
                IL: "\\d{19}",
                IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                KZ: "\\d{3}[\\dA-Z]{13}",
                KW: "[A-Z]{4}[\\dA-Z]{22}",
                LV: "[A-Z]{4}[\\dA-Z]{13}",
                LB: "\\d{4}[\\dA-Z]{20}",
                LI: "\\d{5}[\\dA-Z]{12}",
                LT: "\\d{16}",
                LU: "\\d{3}[\\dA-Z]{13}",
                MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                MR: "\\d{23}",
                MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                MD: "[\\dA-Z]{2}\\d{18}",
                ME: "\\d{18}",
                NL: "[A-Z]{4}\\d{10}",
                NO: "\\d{11}",
                PK: "[\\dA-Z]{4}\\d{16}",
                PS: "[\\dA-Z]{4}\\d{21}",
                PL: "\\d{24}",
                PT: "\\d{21}",
                RO: "[A-Z]{4}[\\dA-Z]{16}",
                SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                SA: "\\d{2}[\\dA-Z]{18}",
                RS: "\\d{18}",
                SK: "\\d{20}",
                SI: "\\d{15}",
                ES: "\\d{20}",
                SE: "\\d{20}",
                CH: "\\d{5}[\\dA-Z]{12}",
                TN: "\\d{20}",
                TR: "\\d{5}[\\dA-Z]{17}",
                AE: "\\d{3}\\d{16}",
                GB: "[A-Z]{4}\\d{14}",
                VG: "[\\dA-Z]{4}\\d{16}"
            },
            o = r[i];
        if ("undefined" != typeof o) {
            var a = new RegExp("^[A-Z]{2}\\d{2}" + o + "$", "");
            if (!a.test(n)) return !1
        }
        for (var s, l = n.substring(4, n.length) + n.substring(0, 4), u = "", c = !0, d = 0; d < l.length; d++) s = l.charAt(d), "0" !== s && (c = !1), c || (u += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(s));
        for (var h = "", f = "", p = 0; p < u.length; p++) {
            var m = u.charAt(p);
            f = "" + h + m, h = f % 97
        }
        return 1 === h
    }, "Please specify a valid IBAN"), jQuery.validator.addMethod("dateNL", function (e, t) {
        return this.optional(t) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(e)
    }, "Please enter a correct date"), jQuery.validator.addMethod("phoneNL", function (e, t) {
        return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
    }, "Please specify a valid phone number."), jQuery.validator.addMethod("mobileNL", function (e, t) {
        return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
    }, "Please specify a valid mobile number"), jQuery.validator.addMethod("postalcodeNL", function (e, t) {
        return this.optional(t) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(e)
    }, "Please specify a valid postal code"), jQuery.validator.addMethod("bankaccountNL", function (e, t) {
        if (this.optional(t)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(e)) return !1;
        for (var n = e.replace(/ /g, ""), i = 0, r = n.length, o = 0; r > o; o++) {
            var a = r - o,
                s = n.substring(o, o + 1);
            i += a * s
        }
        return i % 11 === 0
    }, "Please specify a valid bank account number"), jQuery.validator.addMethod("giroaccountNL", function (e, t) {
        return this.optional(t) || /^[0-9]{1,7}$/.test(e)
    }, "Please specify a valid giro account number"), jQuery.validator.addMethod("bankorgiroaccountNL", function (e, t) {
        return this.optional(t) || $.validator.methods.bankaccountNL.call(this, e, t) || $.validator.methods.giroaccountNL.call(this, e, t)
    }, "Please specify a valid bank or giro account number"), jQuery.validator.addMethod("time", function (e, t) {
        return this.optional(t) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(e)
    }, "Please enter a valid time, between 00:00 and 23:59"), jQuery.validator.addMethod("time12h", function (e, t) {
        return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e)
    }, "Please enter a valid time in 12-hour am/pm format"), jQuery.validator.addMethod("phoneUS", function (e, t) {
        return e = e.replace(/\s+/g, ""), this.optional(t) || e.length > 9 && e.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
    }, "Please specify a valid phone number"), jQuery.validator.addMethod("phoneUK", function (e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number"), jQuery.validator.addMethod("mobileUK", function (e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number"), jQuery.validator.addMethod("phonesUK", function (e, t) {
        return e = e.replace(/\(|\)|\s+|-/g, ""), this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number"), jQuery.validator.addMethod("postcodeUK", function (e, t) {
        return this.optional(t) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(e)
    }, "Please specify a valid UK postcode"), jQuery.validator.addMethod("strippedminlength", function (e, t, n) {
        return jQuery(e).text().length >= n
    }, jQuery.validator.format("Please enter at least {0} characters")), jQuery.validator.addMethod("email2", function (e, t) {
        return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)
    }, jQuery.validator.messages.email), jQuery.validator.addMethod("url2", function (e, t) {
        return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
    }, jQuery.validator.messages.url), jQuery.validator.addMethod("creditcardtypes", function (e, t, n) {
        if (/[^0-9\-]+/.test(e)) return !1;
        e = e.replace(/\D/g, "");
        var i = 0;
        return n.mastercard && (i |= 1), n.visa && (i |= 2), n.amex && (i |= 4), n.dinersclub && (i |= 8), n.enroute && (i |= 16), n.discover && (i |= 32), n.jcb && (i |= 64), n.unknown && (i |= 128), n.all && (i = 255), 1 & i && /^(5[12345])/.test(e) ? 16 === e.length : 2 & i && /^(4)/.test(e) ? 16 === e.length : 4 & i && /^(3[47])/.test(e) ? 15 === e.length : 8 & i && /^(3(0[012345]|[68]))/.test(e) ? 14 === e.length : 16 & i && /^(2(014|149))/.test(e) ? 15 === e.length : 32 & i && /^(6011)/.test(e) ? 16 === e.length : 64 & i && /^(3)/.test(e) ? 16 === e.length : 64 & i && /^(2131|1800)/.test(e) ? 15 === e.length : 128 & i ? !0 : !1
    }, "Please enter a valid credit card number."), jQuery.validator.addMethod("ipv4", function (e, t) {
        return this.optional(t) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e)
    }, "Please enter a valid IP v4 address."), jQuery.validator.addMethod("ipv6", function (e, t) {
        return this.optional(t) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e)
    }, "Please enter a valid IP v6 address."), jQuery.validator.addMethod("pattern", function (e, t, n) {
        return this.optional(t) ? !0 : ("string" == typeof n && (n = new RegExp("^(?:" + n + ")$")), n.test(e))
    }, "Invalid format."), jQuery.validator.addMethod("require_from_group", function (e, t, n) {
        var i = this,
            r = n[1],
            o = $(r, t.form).filter(function () {
                return i.elementValue(this)
            }).length >= n[0];
        if (!$(t).data("being_validated")) {
            var a = $(r, t.form);
            a.data("being_validated", !0), a.valid(), a.data("being_validated", !1)
        }
        return o
    }, jQuery.format("Please fill at least {0} of these fields.")), jQuery.validator.addMethod("skip_or_fill_minimum", function (e, t, n) {
        var i = this,
            r = n[0],
            o = n[1],
            a = $(o, t.form).filter(function () {
                return i.elementValue(this)
            }).length,
            s = a >= r || 0 === a;
        if (!$(t).data("being_validated")) {
            var l = $(o, t.form);
            l.data("being_validated", !0), l.valid(), l.data("being_validated", !1)
        }
        return s
    }, jQuery.format("Please either skip these fields or fill at least {0} of them.")), jQuery.validator.addMethod("accept", function (e, t, n) {
        var i, r, o = "string" == typeof n ? n.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
            a = this.optional(t);
        if (a) return a;
        if ("file" === $(t).attr("type") && (o = o.replace(/\*/g, ".*"), t.files && t.files.length))
            for (i = 0; i < t.files.length; i++)
                if (r = t.files[i], !r.type.match(new RegExp(".?(" + o + ")$", "i"))) return !1;
        return !0
    }, jQuery.format("Please enter a value with a valid mimetype.")), jQuery.validator.addMethod("extension", function (e, t, n) {
        return n = "string" == typeof n ? n.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || e.match(new RegExp(".(" + n + ")$", "i"))
    }, jQuery.format("Please enter a value with a valid extension.")),
    function () {
        var e, t, n, i, r, o = {}.hasOwnProperty,
            a = function (e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t) o.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            };
        i = function () {
            function e() {
                this.options_index = 0, this.parsed = []
            }
            return e.prototype.add_node = function (e) {
                return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
            }, e.prototype.add_group = function (e) {
                var t, n, i, r, o, a;
                for (t = this.parsed.length, this.parsed.push({
                    array_index: t,
                    group: !0,
                    label: this.escapeExpression(e.label),
                    children: 0,
                    disabled: e.disabled
                }), o = e.childNodes, a = [], i = 0, r = o.length; r > i; i++) n = o[i], a.push(this.add_option(n, t, e.disabled));
                return a
            }, e.prototype.add_option = function (e, t, n) {
                return "OPTION" === e.nodeName.toUpperCase() ? ("" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: e.value,
                    text: e.text,
                    html: e.innerHTML,
                    selected: e.selected,
                    disabled: n === !0 ? n : e.disabled,
                    group_array_index: t,
                    classes: e.className,
                    style: e.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, e.prototype.escapeExpression = function (e) {
                var t, n;
                return null == e || e === !1 ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(n, function (e) {
                    return t[e] || "&amp;"
                })) : e
            }, e
        }(), i.select_to_array = function (e) {
            var t, n, r, o, a;
            for (n = new i, a = e.childNodes, r = 0, o = a.length; o > r; r++) t = a[r], n.add_node(t);
            return n.parsed
        }, t = function () {
            function e(t, n) {
                this.form_field = t, this.options = null != n ? n : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
            }
            return e.prototype.set_default_values = function () {
                var e = this;
                return this.click_test_action = function (t) {
                    return e.test_active_click(t)
                }, this.activate_action = function (t) {
                    return e.activate_field(t)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
            }, e.prototype.set_default_text = function () {
                return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
            }, e.prototype.mouse_enter = function () {
                return this.mouse_on_container = !0
            }, e.prototype.mouse_leave = function () {
                return this.mouse_on_container = !1
            }, e.prototype.input_focus = function () {
                var e = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function () {
                        return e.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, e.prototype.input_blur = function () {
                var e = this;
                return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                    return e.blur_test()
                }, 100))
            }, e.prototype.results_option_build = function (e) {
                var t, n, i, r, o;
                for (t = "", o = this.results_data, i = 0, r = o.length; r > i; i++) n = o[i], t += n.group ? this.result_add_group(n) : this.result_add_option(n), (null != e ? e.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(n.text));
                return t
            }, e.prototype.result_add_option = function (e) {
                var t, n;
                return e.search_match ? this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), n = "" !== e.style.cssText ? ' style="' + e.style + '"' : "", '<li class="' + t.join(" ") + '"' + n + ' data-option-array-index="' + e.array_index + '">' + e.search_text + "</li>") : "" : ""
            }, e.prototype.result_add_group = function (e) {
                return e.search_match || e.group_match ? e.active_options > 0 ? '<li class="group-result">' + e.search_text + "</li>" : "" : ""
            }, e.prototype.results_update_field = function () {
                return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build(), this.results_showing ? this.winnow_results() : void 0
            }, e.prototype.results_toggle = function () {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, e.prototype.results_search = function () {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, e.prototype.winnow_results = function () {
                var e, t, n, i, r, o, a, s, l, u, c, d, h;
                for (this.no_results_clear(), r = 0, a = this.get_search_text(), e = a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = this.search_contains ? "" : "^", n = new RegExp(i + e, "i"), u = new RegExp(e, "i"), h = this.results_data, c = 0, d = h.length; d > c; c++) t = h[c], t.search_match = !1, o = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (o = this.results_data[t.group_array_index], 0 === o.active_options && o.search_match && (r += 1), o.active_options += 1), (!t.group || this.group_search) && (t.search_text = t.group ? t.label : t.html, t.search_match = this.search_string_match(t.search_text, n), t.search_match && !t.group && (r += 1), t.search_match ? (a.length && (s = t.search_text.search(u), l = t.search_text.substr(0, s + a.length) + "</em>" + t.search_text.substr(s + a.length), t.search_text = l.substr(0, s) + "<em>" + l.substr(s)), null != o && (o.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
                return this.result_clear_highlight(), 1 > r && a.length ? (this.update_results_content(""), this.no_results(a)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
            }, e.prototype.search_string_match = function (e, t) {
                var n, i, r, o;
                if (t.test(e)) return !0;
                if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (i = e.replace(/\[|\]/g, "").split(" "), i.length))
                    for (r = 0, o = i.length; o > r; r++)
                        if (n = i[r], t.test(n)) return !0
            }, e.prototype.choices_count = function () {
                var e, t, n, i;
                if (null != this.selected_option_count) return this.selected_option_count;
                for (this.selected_option_count = 0, i = this.form_field.options, t = 0, n = i.length; n > t; t++) e = i[t], e.selected && (this.selected_option_count += 1);
                return this.selected_option_count
            }, e.prototype.choices_click = function (e) {
                return e.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
            }, e.prototype.keyup_checker = function (e) {
                var t, n;
                switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), t) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (e.preventDefault(), this.results_showing) return this.result_select(e);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
                }
            }, e.prototype.container_width = function () {
                return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
            }, e.prototype.include_option_in_results = function (e) {
                return this.is_multiple && !this.display_selected_options && e.selected ? !1 : !this.display_disabled_options && e.disabled ? !1 : e.empty ? !1 : !0
            }, e.browser_is_supported = function () {
                return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
            }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
        }(), e = jQuery, e.fn.extend({
            chosen: function (i) {
                return t.browser_is_supported() ? this.each(function () {
                    var t, r;
                    t = e(this), r = t.data("chosen"), "destroy" === i && r ? r.destroy() : r || t.data("chosen", new n(this, i))
                }) : this
            }
        }), n = function (t) {
            function n() {
                return r = n.__super__.constructor.apply(this, arguments)
            }
            return a(n, t), n.prototype.setup = function () {
                return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, n.prototype.set_up_html = function () {
                var t, n;
                return t = ["chosen-container"], t.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), n = {
                    "class": t.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", n), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, n.prototype.register_observers = function () {
                var e = this;
                return this.container.bind("mousedown.chosen", function (t) {
                    e.container_mousedown(t)
                }), this.container.bind("mouseup.chosen", function (t) {
                    e.container_mouseup(t)
                }), this.container.bind("mouseenter.chosen", function (t) {
                    e.mouse_enter(t)
                }), this.container.bind("mouseleave.chosen", function (t) {
                    e.mouse_leave(t)
                }), this.search_results.bind("mouseup.chosen", function (t) {
                    e.search_results_mouseup(t)
                }), this.search_results.bind("mouseover.chosen", function (t) {
                    e.search_results_mouseover(t)
                }), this.search_results.bind("mouseout.chosen", function (t) {
                    e.search_results_mouseout(t)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (t) {
                    e.search_results_mousewheel(t)
                }), this.form_field_jq.bind("chosen:updated.chosen", function (t) {
                    e.results_update_field(t)
                }), this.form_field_jq.bind("chosen:activate.chosen", function (t) {
                    e.activate_field(t)
                }), this.form_field_jq.bind("chosen:open.chosen", function (t) {
                    e.container_mousedown(t)
                }), this.search_field.bind("blur.chosen", function (t) {
                    e.input_blur(t)
                }), this.search_field.bind("keyup.chosen", function (t) {
                    e.keyup_checker(t)
                }), this.search_field.bind("keydown.chosen", function (t) {
                    e.keydown_checker(t)
                }), this.search_field.bind("focus.chosen", function (t) {
                    e.input_focus(t)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function (t) {
                    e.choices_click(t)
                }) : this.container.bind("click.chosen", function (e) {
                    e.preventDefault()
                })
            }, n.prototype.destroy = function () {
                return e(document).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, n.prototype.search_field_disabled = function () {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, n.prototype.container_mousedown = function (t) {
                return this.is_disabled || (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null != t && e(t.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(document).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, n.prototype.container_mouseup = function (e) {
                return "ABBR" !== e.target.nodeName || this.is_disabled ? void 0 : this.results_reset(e)
            }, n.prototype.search_results_mousewheel = function (e) {
                var t, n, i;
                return t = -(null != (n = e.originalEvent) ? n.wheelDelta : void 0) || (null != (i = e.originialEvent) ? i.detail : void 0), null != t ? (e.preventDefault(), "DOMMouseScroll" === e.type && (t = 40 * t), this.search_results.scrollTop(t + this.search_results.scrollTop())) : void 0
            }, n.prototype.blur_test = function () {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
            }, n.prototype.close_field = function () {
                return e(document).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, n.prototype.activate_field = function () {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, n.prototype.test_active_click = function (t) {
                return this.container.is(e(t.target).closest(".chosen-container")) ? this.active_field = !0 : this.close_field()
            }, n.prototype.results_build = function () {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, n.prototype.result_do_highlight = function (e) {
                var t, n, i, r, o;
                if (e.length) {
                    if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), r = i + o, n = this.result_highlight.position().top + this.search_results.scrollTop(), t = n + this.result_highlight.outerHeight(), t >= r) return this.search_results.scrollTop(t - i > 0 ? t - i : 0);
                    if (o > n) return this.search_results.scrollTop(n)
                }
            }, n.prototype.result_clear_highlight = function () {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, n.prototype.results_show = function () {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results())
            }, n.prototype.update_results_content = function (e) {
                return this.search_results.html(e)
            }, n.prototype.results_hide = function () {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, n.prototype.set_tab_index = function () {
                var e;
                return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
            }, n.prototype.set_label_behavior = function () {
                var t = this;
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (e) {
                    return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
                }) : void 0
            }, n.prototype.show_search_field_default = function () {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, n.prototype.search_results_mouseup = function (t) {
                var n;
                return n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), n.length ? (this.result_highlight = n, this.result_select(t), this.search_field.focus()) : void 0
            }, n.prototype.search_results_mouseover = function (t) {
                var n;
                return n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), n ? this.result_do_highlight(n) : void 0
            }, n.prototype.search_results_mouseout = function (t) {
                return e(t.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, n.prototype.choice_build = function (t) {
                var n, i, r = this;
                return n = e("<li />", {
                    "class": "search-choice"
                }).html("<span>" + t.html + "</span>"), t.disabled ? n.addClass("search-choice-disabled") : (i = e("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": t.array_index
                }), i.bind("click.chosen", function (e) {
                    return r.choice_destroy_link_click(e)
                }), n.append(i)), this.search_container.before(n)
            }, n.prototype.choice_destroy_link_click = function (t) {
                return t.preventDefault(), t.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(e(t.target))
            }, n.prototype.choice_destroy = function (e) {
                return this.result_deselect(e[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, n.prototype.results_reset = function () {
                return this.form_field.options[0].selected = !0, this.selected_option_count = null, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
            }, n.prototype.results_reset_cleanup = function () {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, n.prototype.result_select = function (e) {
                var t, n, i;
                return this.result_highlight ? (t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? t.removeClass("active-result") : (this.result_single_selected && (this.result_single_selected.removeClass("result-selected"), i = this.result_single_selected[0].getAttribute("data-option-array-index"), this.results_data[i].selected = !1), this.result_single_selected = t), t.addClass("result-selected"), n = this.results_data[t[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[n.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
            }, n.prototype.single_set_selected_text = function (e) {
                return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(e)
            }, n.prototype.result_deselect = function (e) {
                var t;
                return t = this.results_data[e], this.form_field.options[t.options_index].disabled ? !1 : (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[t.options_index].value
                }), this.search_field_scale(), !0)
            }, n.prototype.single_deselect_control_build = function () {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
            }, n.prototype.get_search_text = function () {
                return this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html()
            }, n.prototype.winnow_results_set_highlight = function () {
                var e, t;
                return t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first(), null != e ? this.result_do_highlight(e) : void 0
            }, n.prototype.no_results = function (t) {
                var n;
                return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n)
            }, n.prototype.no_results_clear = function () {
                return this.search_results.find(".no-results").remove()
            }, n.prototype.keydown_arrow = function () {
                var e;
                return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
            }, n.prototype.keyup_arrow = function () {
                var e;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, n.prototype.keydown_backstroke = function () {
                var e;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, n.prototype.clear_backstroke = function () {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, n.prototype.keydown_checker = function (e) {
                var t, n;
                switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                    break;
                case 13:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    e.preventDefault(), this.keydown_arrow()
                }
            }, n.prototype.search_field_scale = function () {
                var t, n, i, r, o, a, s, l, u;
                if (this.is_multiple) {
                    for (i = 0, s = 0, o = "position:absolute; left: -1000px; top: -1000px; display:none;", a = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, u = a.length; u > l; l++) r = a[l], o += r + ":" + this.search_field.css(r) + ";";
                    return t = e("<div />", {
                        style: o
                    }), t.text(this.search_field.val()), e("body").append(t), s = t.width() + 25, t.remove(), n = this.container.outerWidth(), s > n - 10 && (s = n - 10), this.search_field.css({
                        width: s + "px"
                    })
                }
            }, n
        }(t)
    }.call(this);
var kakao = kakao || {};
kakao.weblogin = kakao.weblogin || {}, kakao.weblogin.messages = {
        en: {
            error: "An unexpected error has occurred.\nThe error might have been caused by temporary errors in the server or in the network connection.\nThe Kakao Team is currently identifying and solving the problem.",
            invalid_access: "Invalid access. Please try again.",
            invalid_email: "Email address or password is not in the correct format.",
            invalid_password: "Password is not in the correct format."
        },
        ko: {
            error: "예상하지 못한 오류가 발생했습니다.\n서버의 일시적인 장애이거나 네트워크 문제일 수 있습니다.\n해당 오류는 카카오팀에서 확인 및 대응 중입니다.",
            invalid_access: "정상적인 접근이 아닙니다. 경로를 확인해 주세요.",
            invalid_email: "카카오계정 이메일 형식이 올바르지 않습니다.",
            invalid_password: "비밀번호 형식이 올바르지 않습니다.\n(4~16자리 숫자/기호/대소문자 가능, 공백 불가)"
        },
        ja: {
            error: "予期しないエラーが発生しました。\nサーバーの一時的な障害またはネットワークの問題である場合があります。該当エラーはカカオチームで確認しており、対応中です。",
            invalid_access: "正常なアクセスではありません。もう一度お試しください。",
            invalid_email: "Eメールアドレスまたはパスワードの形式が正しくありません。",
            invalid_password: "パスワードの形式が正しくありません。"
        }
    },
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery)
    }(function (e) {
        e.fn.kakaoLogin = function (t, n) {
            function i(e) {
                window.console && console.log(e)
            }

            function r(e) {
                return !e || !e.length || /^\s*$/.test(e)
            }

            function o(e) {
                return (e || "").replace(/^\s+|\s+$/g, "")
            }

            function a() {
                var e = "string" == typeof p.password;
                return e ? f.find(p.password).val() : p.password.val()
            }

            function s(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (n) {
                    i("cannot get iframe.contentWindow document: " + n)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (n) {
                    i("cannot get iframe.contentDocument: " + n), t = e.document
                }
                return t
            }

            function l(e) {
                var t = {};
                "?" === e[0] && (e = e.substr(1));
                var n = e.split("&");
                for (var i in n) {
                    var r = decodeURIComponent(n[i]),
                        o = r.indexOf("=");
                    if (-1 !== o) {
                        var a = r.substr(0, o),
                            s = r.substr(o + 1);
                        t[a] = s
                    }
                }
                return t
            }

            function u() {
                p.el_iframe.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                });
                var e = p.el_iframe.clone();
                e.appendTo("body"), e.load(c)
            }

            function c() {
                try {
                    var t, n = this,
                        i = s(n);
                    if (p.callback_url) t = l(i.location.search);
                    else {
                        document.domain = "kakao.com";
                        var r = i.body ? i.body : i.documentElement;
                        responseText = r ? r.innerHTML : null;
                        var t = e.parseJSON(responseText.trim())
                    }
                    p.done(t)
                } catch (o) {
                    p.fail(o, o.message)
                } finally {
                    p.always(), p.el_iframe.remove(), p.el_cb_url.remove(), v = !1
                }
            }

            function d() {
                return p.login() && h() ? (f.attr("action", p.weblogin_url + "/external/login"), f.attr("target", p.el_iframe.attr("name")), f.attr("method", "POST"), u(), p.callback_url && (p.el_cb_url.val(p.callback_url), f.append(p.el_cb_url)), !0) : (p.always(), !1)
            }

            function h() {
                for (var e in g)
                    if (!g[e]()) return !1;
                return !0
            }
            var f, p, m, g, v = !1;
            return f = this, p = jQuery.extend({
                el_iframe: e('<iframe name="_ifr_kilo" src="about:blank" />'),
                el_cb_url: e('<input type="hidden" name="callback_url" />'),
                locale: "ko",
                email: f.find('input[name="email"]'),
                password: 'input[name="password"]',
                continue_url: f.find('input[name="continue"]').val(),
                remember: f.find('input[name="remember"]'),
                weblogin_url: "https://" + (n ? n + "-" : "") + "accounts.kakao.com",
                done: function (e) {
                    0 == e.status ? location.href = p.continue_url : p.error(e.message)
                },
                fail: function () {
                    alert(m.error)
                },
                always: function () {},
                error: function (e) {
                    alert(e)
                },
                login: function () {
                    return !0
                }
            }, t), m = kakao.weblogin.messages[p.locale], g = [
                function () {
                    var e = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i,
                        t = a();
                    return r(p.email.val()) || !o(p.email.val()).match(e) ? (p.error(m.invalid_email), !1) : t.length < 4 ? (p.error(m.invalid_password), !1) : -1 == p.continue_url.indexOf("kakao.com") ? (p.error(m.invalid_access), !1) : !0
                }
            ], p.validator && g.push(p.validator), f.submit(function (e) {
                return v ? void 0 : (v = !0, d(e))
            }), f
        }
    });