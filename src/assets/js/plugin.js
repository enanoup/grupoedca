/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-printshiv-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
        function D(a) { j.cssText = a }

        function E(a, b) { return D(n.join(a + ";") + (b || "")) }

        function F(a, b) { return typeof a === b }

        function G(a, b) { return !!~("" + a).indexOf(b) }

        function H(a, b) { for (var d in a) { var e = a[d]; if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 }

        function I(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f } return !1 }

        function J(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + p.join(d + " ") + d).split(" ");
            return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c))
        }

        function K() { e.input = function(c) { for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k; return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) { for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e; return t }("search tel url email datetime date month week time datetime-local number range color".split(" ")) }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k = b.createElement("input"),
            l = ":)",
            m = {}.toString,
            n = " -webkit- -moz- -o- -ms- ".split(" "),
            o = "Webkit Moz O ms",
            p = o.split(" "),
            q = o.toLowerCase().split(" "),
            r = { svg: "http://www.w3.org/2000/svg" },
            s = {},
            t = {},
            u = {},
            v = [],
            w = v.slice,
            x, y = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            z = function(b) { var c = a.matchMedia || a.msMatchMedia; if (c) return c(b) && c(b).matches || !1; var d; return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) { d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute" }), d },
            A = function() {
                function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f }
                var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
                return d
            }(),
            B = {}.hasOwnProperty,
            C;
        !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) { return B.call(a, b) } : C = function(a, b) { return b in a && F(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = w.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(w.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(w.call(arguments)))
                };
            return e
        }), s.flexbox = function() { return J("flexWrap") }, s.flexboxlegacy = function() { return J("boxDirection") }, s.canvas = function() { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, s.canvastext = function() { return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function") }, s.webgl = function() { return !!a.WebGLRenderingContext }, s.touch = function() { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) { c = a.offsetTop === 9 }), c }, s.geolocation = function() { return "geolocation" in navigator }, s.postmessage = function() { return !!a.postMessage }, s.websqldatabase = function() { return !!a.openDatabase }, s.indexedDB = function() { return !!J("indexedDB", a) }, s.hashchange = function() { return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7) }, s.history = function() { return !!a.history && !!history.pushState }, s.draganddrop = function() { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, s.websockets = function() { return "WebSocket" in a || "MozWebSocket" in a }, s.rgba = function() { return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba") }, s.hsla = function() { return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla") }, s.multiplebgs = function() { return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background) }, s.backgroundsize = function() { return J("backgroundSize") }, s.borderimage = function() { return J("borderImage") }, s.borderradius = function() { return J("borderRadius") }, s.boxshadow = function() { return J("boxShadow") }, s.textshadow = function() { return b.createElement("div").style.textShadow === "" }, s.opacity = function() { return E("opacity:.55"), /^0.55$/.test(j.opacity) }, s.cssanimations = function() { return J("animationName") }, s.csscolumns = function() { return J("columnCount") }, s.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient")
        }, s.cssreflections = function() { return J("boxReflect") }, s.csstransforms = function() { return !!J("transform") }, s.csstransforms3d = function() { var a = !!J("perspective"); return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }, s.csstransitions = function() { return J("transition") }, s.fontface = function() {
            var a;
            return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }), a
        }, s.generatedcontent = function() { var a; return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) { a = b.offsetHeight >= 3 }), a }, s.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") } catch (d) {}
            return c
        }, s.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "") } catch (d) {}
            return c
        }, s.localstorage = function() { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.sessionstorage = function() { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.webworkers = function() { return !!a.Worker }, s.applicationcache = function() { return !!a.applicationCache }, s.svg = function() { return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect }, s.inlinesvg = function() { var a = b.createElement("div"); return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg }, s.smil = function() { return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate"))) }, s.svgclippaths = function() { return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath"))) };
        for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
        return e.input || K(), e.addTest = function(a, b) {
            if (typeof a == "object")
                for (var d in a) C(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
            }
            return e
        }, D(""), i = k = null, e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function(a) { return H([a]) }, e.testAllProps = J, e.testStyles = y, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
    }(this, this.document),
    function(a, b) {
        function l(a, b) {
            var c = a.createElement("p"),
                d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function m() { var a = s.elements; return typeof a == "string" ? a.split(" ") : a }

        function n(a) { var b = j[a[h]]; return b || (b = {}, i++, a[h] = i, j[i] = b), b }

        function o(a, c, d) {
            c || (c = b);
            if (k) return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }

        function p(a, c) {
            a || (a = b);
            if (k) return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode(),
                e = 0,
                f = m(),
                g = f.length;
            for (; e < g; e++) d.createElement(f[e]);
            return d
        }

        function q(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) { return s.shivMethods ? o(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/\w+/g, function(a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) }

        function r(a) { a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a }

        function w(a) {
            var b, c = a.getElementsByTagName("*"),
                d = c.length,
                e = RegExp("^(?:" + m().join("|") + ")$", "i"),
                f = [];
            while (d--) b = c[d], e.test(b.nodeName) && f.push(b.applyElement(x(b)));
            return f
        }

        function x(a) {
            var b, c = a.attributes,
                d = c.length,
                e = a.ownerDocument.createElement(u + ":" + a.nodeName);
            while (d--) b = c[d], b.specified && e.setAttribute(b.nodeName, b.nodeValue);
            return e.style.cssText = a.style.cssText, e
        }

        function y(a) {
            var b, c = a.split("{"),
                d = c.length,
                e = RegExp("(^|[\\s,>+~])(" + m().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"),
                f = "$1" + u + "\\:$2";
            while (d--) b = c[d] = c[d].split("}"), b[b.length - 1] = b[b.length - 1].replace(e, f), c[d] = b.join("}");
            return c.join("{")
        }

        function z(a) { var b = a.length; while (b--) a[b].removeNode() }

        function A(a) {
            function g() { clearTimeout(d._removeSheetTimer), b && b.removeNode(!0), b = null }
            var b, c, d = n(a),
                e = a.namespaces,
                f = a.parentWindow;
            return !v || a.printShived ? a : (typeof e[u] == "undefined" && e.add(u), f.attachEvent("onbeforeprint", function() {
                g();
                var d, e, f, h = a.styleSheets,
                    i = [],
                    j = h.length,
                    k = Array(j);
                while (j--) k[j] = h[j];
                while (f = k.pop())
                    if (!f.disabled && t.test(f.media)) { try { d = f.imports, e = d.length } catch (m) { e = 0 } for (j = 0; j < e; j++) k.push(d[j]); try { i.push(f.cssText) } catch (m) {} }
                i = y(i.reverse().join("")), c = w(a), b = l(a, i)
            }), f.attachEvent("onafterprint", function() { z(c), clearTimeout(d._removeSheetTimer), d._removeSheetTimer = setTimeout(g, 500) }), a.printShived = !0, a)
        }
        var c = "3.7.0",
            d = a.html5 || {},
            e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g, h = "_html5shiv",
            i = 0,
            j = {},
            k;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }()
            } catch (c) { g = !0, k = !0 }
        })();
        var s = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p };
        a.html5 = s, r(b);
        var t = /^$|\b(?:all|print)\b/,
            u = "html5shiv",
            v = !k && function() { var c = b.documentElement; return typeof b.namespaces != "undefined" && typeof b.parentWindow != "undefined" && typeof c.applyElement != "undefined" && typeof c.removeNode != "undefined" && typeof a.attachEvent != "undefined" }();
        s.type += " print", s.shivPrint = A, A(b)
    }(this, document),
    function(a, b, c) {
        function d(a) { return "[object Function]" == o.call(a) }

        function e(a) { return "string" == typeof a }

        function f() {}

        function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function() { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this }

        function k() { var a = B; return a.loader = { load: j, i: 0 }, a }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) { return "[object Array]" == o.call(a) },
            x = [],
            y = {},
            z = { timeout: function(a, b) { return b.length && (a.timeout = b[0]), a } },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) { z[a] = b }, B.addFilter = function(a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function() { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) };

/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

! function(a) {
    "use strict";
    a.matchMedia = a.matchMedia || function(a) {
        var b, c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            e = a.createElement("body"),
            f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
            function(a) { return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), { matches: b, media: a } }
    }(a.document)
}(this),
function(a) {
    "use strict";

    function b() { v(!0) }
    var c = {};
    a.respond = c, c.update = function() {};
    var d = [],
        e = function() { var b = !1; try { b = new a.XMLHttpRequest } catch (c) { b = new a.ActiveXObject("Microsoft.XMLHTTP") } return function() { return b } }(),
        f = function(a, b) {
            var c = e();
            c && (c.open("GET", a, !0), c.onreadystatechange = function() { 4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText) }, 4 !== c.readyState && c.send(null))
        },
        g = function(a) { return a.replace(c.regex.minmaxwh, "").match(c.regex.other) };
    if (c.ajax = f, c.queue = d, c.unsupportedmq = g, c.regex = { media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi, keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi, comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi, urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, findStyles: /@media *([^\{]+)\{([\S\s]+?)$/, only: /(only\s+)?([a-zA-Z]+)\s?/, minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/, maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/, minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi, other: /\([^\)]*\)/g }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported) {
        var h, i, j, k = a.document,
            l = k.documentElement,
            m = [],
            n = [],
            o = [],
            p = {},
            q = 30,
            r = k.getElementsByTagName("head")[0] || l,
            s = k.getElementsByTagName("base")[0],
            t = r.getElementsByTagName("link"),
            u = function() {
                var a, b = k.createElement("div"),
                    c = k.body,
                    d = l.style.fontSize,
                    e = c && c.style.fontSize,
                    f = !1;
                return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = k.createElement("body"), c.style.background = "none"), l.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && l.insertBefore(c, l.firstChild), a = b.offsetWidth, f ? l.removeChild(c) : c.removeChild(b), l.style.fontSize = d, e && (c.style.fontSize = e), a = j = parseFloat(a)
            },
            v = function(b) {
                var c = "clientWidth",
                    d = l[c],
                    e = "CSS1Compat" === k.compatMode && d || k.body[c] || d,
                    f = {},
                    g = t[t.length - 1],
                    p = (new Date).getTime();
                if (b && h && q > p - h) return a.clearTimeout(i), i = a.setTimeout(v, q), void 0;
                h = p;
                for (var s in m)
                    if (m.hasOwnProperty(s)) {
                        var w = m[s],
                            x = w.minw,
                            y = w.maxw,
                            z = null === x,
                            A = null === y,
                            B = "em";
                        x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []), f[w.media].push(n[w.rules]))
                    }
                for (var C in o) o.hasOwnProperty(C) && o[C] && o[C].parentNode === r && r.removeChild(o[C]);
                o.length = 0;
                for (var D in f)
                    if (f.hasOwnProperty(D)) {
                        var E = k.createElement("style"),
                            F = f[D].join("\n");
                        E.type = "text/css", E.media = D, r.insertBefore(E, g.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(k.createTextNode(F)), o.push(E)
                    }
            },
            w = function(a, b, d) {
                var e = a.replace(c.regex.comments, "").replace(c.regex.keyframes, "").match(c.regex.media),
                    f = e && e.length || 0;
                b = b.substring(0, b.lastIndexOf("/"));
                var h = function(a) { return a.replace(c.regex.urls, "$1" + b + "$2$3") },
                    i = !f && d;
                b.length && (b += "/"), i && (f = 1);
                for (var j = 0; f > j; j++) {
                    var k, l, o, p;
                    i ? (k = d, n.push(h(a))) : (k = e[j].match(c.regex.findStyles) && RegExp.$1, n.push(RegExp.$2 && h(RegExp.$2))), o = k.split(","), p = o.length;
                    for (var q = 0; p > q; q++) l = o[q], g(l) || m.push({ media: l.split("(")[0].match(c.regex.only) && RegExp.$2 || "all", rules: n.length - 1, hasquery: l.indexOf("(") > -1, minw: l.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""), maxw: l.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "") })
                }
                v()
            },
            x = function() {
                if (d.length) {
                    var b = d.shift();
                    f(b.href, function(c) { w(c, b.href, b.media), p[b.href] = !0, a.setTimeout(function() { x() }, 0) })
                }
            },
            y = function() {
                for (var b = 0; b < t.length; b++) {
                    var c = t[b],
                        e = c.href,
                        f = c.media,
                        g = c.rel && "stylesheet" === c.rel.toLowerCase();
                    e && g && !p[e] && (c.styleSheet && c.styleSheet.rawCssText ? (w(c.styleSheet.rawCssText, e, f), p[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !s || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push({ href: e, media: f })))
                }
                x()
            };
        y(), c.update = y, c.getEmValue = u, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
    }
}(this);

/*! WOW - v1.0.3 - 2015-01-14
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c }
        return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function() { var a, b, e, f; for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c)); return f }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0
        }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function() { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(a) : void 0 }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) d = b[c], a["" + c] = d, f.push(function() { var b, f, g, h; for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d); return h }.call(this));
            return f
        }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++) f = i[g], c = c || e.getPropertyCSSValue("-" + f + "-" + b); return c }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e
    }()
}).call(this);

/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
! function($) {
    $.flexslider = function(e, t) {
        var a = $(e);
        a.vars = $.extend({}, $.flexslider.defaults, t);
        var n = a.vars.namespace,
            i = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            s = ("ontouchstart" in window || i || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch,
            r = "click touchend MSPointerUp keyup",
            o = "",
            l, c = "vertical" === a.vars.direction,
            d = a.vars.reverse,
            u = a.vars.itemWidth > 0,
            v = "fade" === a.vars.animation,
            p = "" !== a.vars.asNavFor,
            m = {},
            f = !0;
        $.data(e, "flexslider", a), m = {
            init: function() {
                a.animating = !1, a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0, 10), isNaN(a.currentSlide) && (a.currentSlide = 0), a.animatingTo = a.currentSlide, a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last, a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" ")), a.slides = $(a.vars.selector, a), a.container = $(a.containerSelector, a), a.count = a.slides.length, a.syncExists = $(a.vars.sync).length > 0, "slide" === a.vars.animation && (a.vars.animation = "swing"), a.prop = c ? "top" : "marginLeft", a.args = {}, a.manualPause = !1, a.stopped = !1, a.started = !1, a.startTimeout = null, a.transitions = !a.vars.video && !v && a.vars.useCSS && function() {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t)
                        if (void 0 !== e.style[t[n]]) return a.pfx = t[n].replace("Perspective", "").toLowerCase(), a.prop = "-" + a.pfx + "-transform", !0;
                    return !1
                }(), a.ensureAnimationEnd = "", "" !== a.vars.controlsContainer && (a.controlsContainer = $(a.vars.controlsContainer).length > 0 && $(a.vars.controlsContainer)), "" !== a.vars.manualControls && (a.manualControls = $(a.vars.manualControls).length > 0 && $(a.vars.manualControls)), "" !== a.vars.customDirectionNav && (a.customDirectionNav = 2 === $(a.vars.customDirectionNav).length && $(a.vars.customDirectionNav)), a.vars.randomize && (a.slides.sort(function() { return Math.round(Math.random()) - .5 }), a.container.empty().append(a.slides)), a.doMath(), a.setup("init"), a.vars.controlNav && m.controlNav.setup(), a.vars.directionNav && m.directionNav.setup(), a.vars.keyboard && (1 === $(a.containerSelector).length || a.vars.multipleKeyboard) && $(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!a.animating && (39 === t || 37 === t)) {
                        var n = 39 === t ? a.getTarget("next") : 37 === t ? a.getTarget("prev") : !1;
                        a.flexAnimate(n, a.vars.pauseOnAction)
                    }
                }), a.vars.mousewheel && a.bind("mousewheel", function(e, t, n, i) {
                    e.preventDefault();
                    var s = a.getTarget(0 > t ? "next" : "prev");
                    a.flexAnimate(s, a.vars.pauseOnAction)
                }), a.vars.pausePlay && m.pausePlay.setup(), a.vars.slideshow && a.vars.pauseInvisible && m.pauseInvisible.init(), a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function() { a.manualPlay || a.manualPause || a.pause() }, function() { a.manualPause || a.manualPlay || a.stopped || a.play() }), a.vars.pauseInvisible && m.pauseInvisible.isHidden() || (a.vars.initDelay > 0 ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play())), p && m.asNav.setup(), s && a.vars.touch && m.touch(), (!v || v && a.vars.smoothHeight) && $(window).bind("resize orientationchange focus", m.resize), a.find("img").attr("draggable", "false"), setTimeout(function() { a.vars.start(a) }, 200)
            },
            asNav: {
                setup: function() {
                    a.asNav = !0, a.animatingTo = Math.floor(a.currentSlide / a.move), a.currentItem = a.currentSlide, a.slides.removeClass(n + "active-slide").eq(a.currentItem).addClass(n + "active-slide"), i ? (e._slider = a, a.slides.each(function() {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(e) { e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId) }, !1), e.addEventListener("MSGestureTap", function(e) {
                            e.preventDefault();
                            var t = $(this),
                                n = t.index();
                            $(a.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (a.direction = a.currentItem < n ? "next" : "prev", a.flexAnimate(n, a.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : a.slides.on(r, function(e) {
                        e.preventDefault();
                        var t = $(this),
                            i = t.index(),
                            s = t.offset().left - $(a).scrollLeft();
                        0 >= s && t.hasClass(n + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : $(a.vars.asNavFor).data("flexslider").animating || t.hasClass(n + "active-slide") || (a.direction = a.currentItem < i ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() { a.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging() },
                setupPaging: function() {
                    var e = "thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging",
                        t = 1,
                        i, s;
                    if (a.controlNavScaffold = $('<ol class="' + n + "control-nav " + n + e + '"></ol>'), a.pagingCount > 1)
                        for (var l = 0; l < a.pagingCount; l++) {
                            if (s = a.slides.eq(l), i = "thumbnails" === a.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"/>' : "<a>" + t + "</a>", "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions) { var c = s.attr("data-thumbcaption"); "" !== c && void 0 !== c && (i += '<span class="' + n + 'caption">' + c + "</span>") }
                            a.controlNavScaffold.append("<li>" + i + "</li>"), t++
                        }
                    a.controlsContainer ? $(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), a.controlNavScaffold.delegate("a, img", r, function(e) {
                        if (e.preventDefault(), "" === o || o === e.type) {
                            var t = $(this),
                                i = a.controlNav.index(t);
                            t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction))
                        }
                        "" === o && (o = e.type), m.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    a.controlNav = a.manualControls, m.controlNav.active(), a.controlNav.bind(r, function(e) {
                        if (e.preventDefault(), "" === o || o === e.type) {
                            var t = $(this),
                                i = a.controlNav.index(t);
                            t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction))
                        }
                        "" === o && (o = e.type), m.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var e = "thumbnails" === a.vars.controlNav ? "img" : "a";
                    a.controlNav = $("." + n + "control-nav li " + e, a.controlsContainer ? a.controlsContainer : a)
                },
                active: function() { a.controlNav.removeClass(n + "active").eq(a.animatingTo).addClass(n + "active") },
                update: function(e, t) { a.pagingCount > 1 && "add" === e ? a.controlNavScaffold.append($("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(t).closest("li").remove(), m.controlNav.set(), a.pagingCount > 1 && a.pagingCount !== a.controlNav.length ? a.update(t, e) : m.controlNav.active() }
            },
            directionNav: {
                setup: function() {
                    var e = $('<ul class="' + n + 'direction-nav"><li class="' + n + 'nav-prev"><a class="' + n + 'prev" href="#">' + a.vars.prevText + '</a></li><li class="' + n + 'nav-next"><a class="' + n + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
                    a.customDirectionNav ? a.directionNav = a.customDirectionNav : a.controlsContainer ? ($(a.controlsContainer).append(e), a.directionNav = $("." + n + "direction-nav li a", a.controlsContainer)) : (a.append(e), a.directionNav = $("." + n + "direction-nav li a", a)), m.directionNav.update(), a.directionNav.bind(r, function(e) {
                        e.preventDefault();
                        var t;
                        ("" === o || o === e.type) && (t = a.getTarget($(this).hasClass(n + "next") ? "next" : "prev"), a.flexAnimate(t, a.vars.pauseOnAction)), "" === o && (o = e.type), m.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = n + "disabled";
                    1 === a.pagingCount ? a.directionNav.addClass(e).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(e).removeAttr("tabindex") : 0 === a.animatingTo ? a.directionNav.removeClass(e).filter("." + n + "prev").addClass(e).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(e).filter("." + n + "next").addClass(e).attr("tabindex", "-1") : a.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var e = $('<div class="' + n + 'pauseplay"><a></a></div>');
                    a.controlsContainer ? (a.controlsContainer.append(e), a.pausePlay = $("." + n + "pauseplay a", a.controlsContainer)) : (a.append(e), a.pausePlay = $("." + n + "pauseplay a", a)), m.pausePlay.update(a.vars.slideshow ? n + "pause" : n + "play"), a.pausePlay.bind(r, function(e) { e.preventDefault(), ("" === o || o === e.type) && ($(this).hasClass(n + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())), "" === o && (o = e.type), m.setToClearWatchedEvent() })
                },
                update: function(e) { "play" === e ? a.pausePlay.removeClass(n + "pause").addClass(n + "play").html(a.vars.playText) : a.pausePlay.removeClass(n + "play").addClass(n + "pause").html(a.vars.pauseText) }
            },
            touch: function() {
                function t(t) { t.stopPropagation(), a.animating ? t.preventDefault() : (a.pause(), e._gesture.addPointer(t.pointerId), w = 0, p = c ? a.h : a.w, f = Number(new Date), l = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p) }

                function n(t) {
                    t.stopPropagation();
                    var a = t.target._slider;
                    if (a) {
                        var n = -t.translationX,
                            i = -t.translationY;
                        return w += c ? i : n, m = w, y = c ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() { e._gesture.stop() }) : void((!y || Number(new Date) - f > 500) && (t.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / p + 2 : 1)), a.setProps(l + m, "setTouch"))))
                    }
                }

                function s(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !y && null !== m) {
                            var a = d ? -m : m,
                                n = t.getTarget(a > 0 ? "next" : "prev");
                            t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > p / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : v || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        r = null, o = null, m = null, l = null, w = 0
                    }
                }
                var r, o, l, p, m, f, g, h, S, y = !1,
                    x = 0,
                    b = 0,
                    w = 0;
                i ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = a, e.addEventListener("MSGestureChange", n, !1), e.addEventListener("MSGestureEnd", s, !1)) : (g = function(t) { a.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (a.pause(), p = c ? a.h : a.w, f = Number(new Date), x = t.touches[0].pageX, b = t.touches[0].pageY, l = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p, r = c ? b : x, o = c ? x : b, e.addEventListener("touchmove", h, !1), e.addEventListener("touchend", S, !1)) }, h = function(e) {
                    x = e.touches[0].pageX, b = e.touches[0].pageY, m = c ? r - b : r - x, y = c ? Math.abs(m) < Math.abs(x - o) : Math.abs(m) < Math.abs(b - o);
                    var t = 500;
                    (!y || Number(new Date) - f > t) && (e.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (m /= 0 === a.currentSlide && 0 > m || a.currentSlide === a.last && m > 0 ? Math.abs(m) / p + 2 : 1), a.setProps(l + m, "setTouch")))
                }, S = function(t) {
                    if (e.removeEventListener("touchmove", h, !1), a.animatingTo === a.currentSlide && !y && null !== m) {
                        var n = d ? -m : m,
                            i = a.getTarget(n > 0 ? "next" : "prev");
                        a.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(n) > 50 || Math.abs(n) > p / 2) ? a.flexAnimate(i, a.vars.pauseOnAction) : v || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
                    }
                    e.removeEventListener("touchend", S, !1), r = null, o = null, m = null, l = null
                }, e.addEventListener("touchstart", g, !1))
            },
            resize: function() {!a.animating && a.is(":visible") && (u || a.doMath(), v ? m.smoothHeight() : u ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : c ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && m.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal"))) },
            smoothHeight: function(e) {
                if (!c || v) {
                    var t = v ? a : a.viewport;
                    e ? t.animate({ height: a.slides.eq(a.animatingTo).height() }, e) : t.height(a.slides.eq(a.animatingTo).height())
                }
            },
            sync: function(e) {
                var t = $(a.vars.sync).data("flexslider"),
                    n = a.animatingTo;
                switch (e) {
                    case "animate":
                        t.flexAnimate(n, a.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        t.playing || t.asNav || t.play();
                        break;
                    case "pause":
                        t.pause()
                }
            },
            uniqueID: function(e) {
                return e.filter("[id]").add(e.find("[id]")).each(function() {
                    var e = $(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = m.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function() { m.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : a.vars.initDelay > 0 ? setTimeout(a.play, a.vars.initDelay) : a.play() })
                    }
                },
                isHidden: function() { var e = m.pauseInvisible.getHiddenProp(); return e ? document[e] : !1 },
                getHiddenProp: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() { clearTimeout(l), l = setTimeout(function() { o = "" }, 3e3) }
        }, a.flexAnimate = function(e, t, i, r, o) {
            if (a.vars.animationLoop || e === a.currentSlide || (a.direction = e > a.currentSlide ? "next" : "prev"), p && 1 === a.pagingCount && (a.direction = a.currentItem < e ? "next" : "prev"), !a.animating && (a.canAdvance(e, o) || i) && a.is(":visible")) {
                if (p && r) {
                    var l = $(a.vars.asNavFor).data("flexslider");
                    if (a.atEnd = 0 === e || e === a.count - 1, l.flexAnimate(e, !0, !1, !0, o), a.direction = a.currentItem < e ? "next" : "prev", l.direction = a.direction, Math.ceil((e + 1) / a.visible) - 1 === a.currentSlide || 0 === e) return a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), !1;
                    a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), e = Math.floor(e / a.visible)
                }
                if (a.animating = !0, a.animatingTo = e, t && a.pause(), a.vars.before(a), a.syncExists && !o && m.sync("animate"), a.vars.controlNav && m.controlNav.active(), u || a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), a.atEnd = 0 === e || e === a.last, a.vars.directionNav && m.directionNav.update(), e === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause()), v) s ? (a.slides.eq(a.currentSlide).css({ opacity: 0, zIndex: 1 }), a.slides.eq(e).css({ opacity: 1, zIndex: 2 }), a.wrapup(f)) : (a.slides.eq(a.currentSlide).css({ zIndex: 1 }).animate({ opacity: 0 }, a.vars.animationSpeed, a.vars.easing), a.slides.eq(e).css({ zIndex: 2 }).animate({ opacity: 1 }, a.vars.animationSpeed, a.vars.easing, a.wrapup));
                else {
                    var f = c ? a.slides.filter(":first").height() : a.computedW,
                        g, h, S;
                    u ? (g = a.vars.itemMargin, S = (a.itemW + g) * a.move * a.animatingTo, h = S > a.limit && 1 !== a.visible ? a.limit : S) : h = 0 === a.currentSlide && e === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? d ? (a.count + a.cloneOffset) * f : 0 : a.currentSlide === a.last && 0 === e && a.vars.animationLoop && "prev" !== a.direction ? d ? 0 : (a.count + 1) * f : d ? (a.count - 1 - e + a.cloneOffset) * f : (e + a.cloneOffset) * f, a.setProps(h, "", a.vars.animationSpeed), a.transitions ? (a.vars.animationLoop && a.atEnd || (a.animating = !1, a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), a.container.bind("webkitTransitionEnd transitionend", function() { clearTimeout(a.ensureAnimationEnd), a.wrapup(f) }), clearTimeout(a.ensureAnimationEnd), a.ensureAnimationEnd = setTimeout(function() { a.wrapup(f) }, a.vars.animationSpeed + 100)) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function() { a.wrapup(f) })
                }
                a.vars.smoothHeight && m.smoothHeight(a.vars.animationSpeed)
            }
        }, a.wrapup = function(e) { v || u || (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(e, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(e, "jumpStart")), a.animating = !1, a.currentSlide = a.animatingTo, a.vars.after(a) }, a.animateSlides = function() {!a.animating && f && a.flexAnimate(a.getTarget("next")) }, a.pause = function() { clearInterval(a.animatedSlides), a.animatedSlides = null, a.playing = !1, a.vars.pausePlay && m.pausePlay.update("play"), a.syncExists && m.sync("pause") }, a.play = function() { a.playing && clearInterval(a.animatedSlides), a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed), a.started = a.playing = !0, a.vars.pausePlay && m.pausePlay.update("pause"), a.syncExists && m.sync("play") }, a.stop = function() { a.pause(), a.stopped = !0 }, a.canAdvance = function(e, t) { var n = p ? a.pagingCount - 1 : a.last; return t ? !0 : p && a.currentItem === a.count - 1 && 0 === e && "prev" === a.direction ? !0 : p && 0 === a.currentItem && e === a.pagingCount - 1 && "next" !== a.direction ? !1 : e !== a.currentSlide || p ? a.vars.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && e === n && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === n && 0 === e && "next" === a.direction ? !1 : !0 : !1 }, a.getTarget = function(e) { return a.direction = e, "next" === e ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1 }, a.setProps = function(e, t, n) {
            var i = function() {
                var n = e ? e : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo,
                    i = function() {
                        if (u) return "setTouch" === t ? e : d && a.animatingTo === a.last ? 0 : d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : n;
                        switch (t) {
                            case "setTotal":
                                return d ? (a.count - 1 - a.currentSlide + a.cloneOffset) * e : (a.currentSlide + a.cloneOffset) * e;
                            case "setTouch":
                                return d ? e : e;
                            case "jumpEnd":
                                return d ? e : a.count * e;
                            case "jumpStart":
                                return d ? a.count * e : e;
                            default:
                                return e
                        }
                    }();
                return -1 * i + "px"
            }();
            a.transitions && (i = c ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", n), a.container.css("transition-duration", n)), a.args[a.prop] = i, (a.transitions || void 0 === n) && a.container.css(a.args), a.container.css("transform", i)
        }, a.setup = function(e) {
            if (v) a.slides.css({ width: "100%", "float": "left", marginRight: "-100%", position: "relative" }), "init" === e && (s ? a.slides.css({ opacity: 0, display: "block", webkitTransition: "opacity " + a.vars.animationSpeed / 1e3 + "s ease", zIndex: 1 }).eq(a.currentSlide).css({ opacity: 1, zIndex: 2 }) : 0 == a.vars.fadeFirstSlide ? a.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(a.currentSlide).css({ zIndex: 2 }).css({ opacity: 1 }) : a.slides.css({ opacity: 0, display: "block", zIndex: 1 }).eq(a.currentSlide).css({ zIndex: 2 }).animate({ opacity: 1 }, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && m.smoothHeight();
            else { var t, i; "init" === e && (a.viewport = $('<div class="' + n + 'viewport"></div>').css({ overflow: "hidden", position: "relative" }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, d && (i = $.makeArray(a.slides).reverse(), a.slides = $(i), a.container.empty().append(a.slides))), a.vars.animationLoop && !u && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== e && a.container.find(".clone").remove(), a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), a.newSlides = $(a.vars.selector, a), t = d ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset, c && !u ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() { a.newSlides.css({ display: "block" }), a.doMath(), a.viewport.height(a.h), a.setProps(t * a.h, "init") }, "init" === e ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(t * a.computedW, "init"), setTimeout(function() { a.doMath(), a.newSlides.css({ width: a.computedW, "float": "left", display: "block" }), a.vars.smoothHeight && m.smoothHeight() }, "init" === e ? 100 : 0)) }
            u || a.slides.removeClass(n + "active-slide").eq(a.currentSlide).addClass(n + "active-slide"), a.vars.init(a)
        }, a.doMath = function() {
            var e = a.slides.first(),
                t = a.vars.itemMargin,
                n = a.vars.minItems,
                i = a.vars.maxItems;
            a.w = void 0 === a.viewport ? a.width() : a.viewport.width(), a.h = e.height(), a.boxPadding = e.outerWidth() - e.width(), u ? (a.itemT = a.vars.itemWidth + t, a.minW = n ? n * a.itemT : a.w, a.maxW = i ? i * a.itemT - t : a.w, a.itemW = a.minW > a.w ? (a.w - t * (n - 1)) / n : a.maxW < a.w ? (a.w - t * (i - 1)) / i : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, a.visible = Math.floor(a.w / a.itemW), a.move = a.vars.move > 0 && a.vars.move < a.visible ? a.vars.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + t * (a.count - 1) : (a.itemW + t) * a.count - a.w - t) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1), a.computedW = a.itemW - a.boxPadding
        }, a.update = function(e, t) { a.doMath(), u || (e < a.currentSlide ? a.currentSlide += 1 : e <= a.currentSlide && 0 !== e && (a.currentSlide -= 1), a.animatingTo = a.currentSlide), a.vars.controlNav && !a.manualControls && ("add" === t && !u || a.pagingCount > a.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !u || a.pagingCount < a.controlNav.length) && (u && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), m.controlNav.update("remove", a.last))), a.vars.directionNav && m.directionNav.update() }, a.addSlide = function(e, t) {
            var n = $(e);
            a.count += 1, a.last = a.count - 1, c && d ? void 0 !== t ? a.slides.eq(a.count - t).after(n) : a.container.prepend(n) : void 0 !== t ? a.slides.eq(t).before(n) : a.container.append(n), a.update(t, "add"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.added(a)
        }, a.removeSlide = function(e) {
            var t = isNaN(e) ? a.slides.index($(e)) : e;
            a.count -= 1, a.last = a.count - 1, isNaN(e) ? $(e, a.slides).remove() : c && d ? a.slides.eq(a.last).remove() : a.slides.eq(e).remove(), a.doMath(), a.update(t, "remove"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.removed(a)
        }, m.init()
    }, $(window).blur(function(e) { focused = !1 }).focus(function(e) { focused = !0 }), $.flexslider.defaults = { namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0, slideshow: !0, slideshowSpeed: 7e3, animationSpeed: 600, initDelay: 0, randomize: !1, fadeFirstSlide: !0, thumbCaptions: !1, pauseOnAction: !0, pauseOnHover: !1, pauseInvisible: !0, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", customDirectionNav: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: !0, start: function() {}, before: function() {}, after: function() {}, end: function() {}, added: function() {}, removed: function() {}, init: function() {} }, $.fn.flexslider = function(e) {
        if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
            var t = $(this),
                a = e.selector ? e.selector : ".slides > li",
                n = t.find(a);
            1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
        });
        var t = $(this).data("flexslider");
        switch (e) {
            case "play":
                t.play();
                break;
            case "pause":
                t.pause();
                break;
            case "stop":
                t.stop();
                break;
            case "next":
                t.flexAnimate(t.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                t.flexAnimate(t.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && t.flexAnimate(e, !0)
        }
    }
}(jQuery);
// Generated by CoffeeScript 1.6.2
/*

/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=13d0ad762fe4d3a48bc0)
 * Config saved to config.json and https://gist.github.com/13d0ad762fe4d3a48bc0
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher") }(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.alert");
            s || i.data("bs.alert", s = new o(this)), "string" == typeof e && s[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        o = function(e) { t(e).on("click", i, this.close) };
    o.VERSION = "3.3.2", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
        function i() { a.detach().trigger("closed.bs.alert").remove() }
        var s = t(this),
            n = s.attr("data-target");
        n || (n = s.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(n);
        e && e.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var s = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() { return t.fn.alert = s, this }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.button"),
                n = "object" == typeof e && e;
            s || o.data("bs.button", s = new i(this, n)), "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }
    var i = function(e, o) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1 };
    i.VERSION = "3.3.2", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) {
        var i = "disabled",
            o = this.$element,
            s = o.is("input") ? "val" : "html",
            n = o.data();
        e += "Text", null == n.resetText && o.data("resetText", o[s]()), setTimeout(t.proxy(function() { o[s](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i)) }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) { var i = this.$element.find("input"); "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() { return t.fn.button = o, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.carousel"),
                n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : n.slide;
            s || o.data("bs.carousel", s = new i(this, n)), "number" == typeof e ? s.to(e) : a ? s[a]() : n.interval && s.pause().cycle()
        })
    }
    var i = function(e, i) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var s = "prev" == t ? -1 : 1,
            n = (i + s) % this.$items.length;
        return this.$items.eq(n)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, i.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, i.prototype.slide = function(e, o) {
        var s = this.$element.find(".item.active"),
            n = o || this.getItemForDirection(e, s),
            a = this.interval,
            r = "next" == e ? "left" : "right",
            l = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var h = n[0],
            d = t.Event("slide.bs.carousel", { relatedTarget: h, direction: r });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(n)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", { relatedTarget: h, direction: r });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, s.addClass(r), n.addClass(r), s.one("bsTransitionEnd", function() { n.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(c) }, 0) }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() { return t.fn.carousel = o, this };
    var s = function(i) {
        var o, s = t(this),
            n = t(s.attr("data-target") || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var a = t.extend({}, n.data(), s.data()),
                r = s.attr("data-slide-to");
            r && (a.interval = !1), e.call(n, a), r && n.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(s).remove(), t(n).each(function() {
            var o = t(this),
                s = i(o),
                n = { relatedTarget: this };
            s.hasClass("open") && (s.trigger(e = t.Event("hide.bs.dropdown", n)), e.isDefaultPrevented() || (o.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", n)))
        }))
    }

    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function o(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var s = ".dropdown-backdrop",
        n = '[data-toggle="dropdown"]',
        a = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
    a.VERSION = "3.3.2", a.prototype.toggle = function(o) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var n = i(s),
                a = n.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var r = { relatedTarget: this };
                if (n.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, a.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var o = t(this);
            if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
                var s = i(o),
                    a = s.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && s.find(n).trigger("focus"), o.trigger("click");
                var r = " li:not(.divider):visible a",
                    l = s.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                if (l.length) {
                    var h = l.index(e.target);
                    38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = r, this }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", n, a.prototype.toggle).on("keydown.bs.dropdown.data-api", n, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, o) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.modal"),
                a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            n || s.data("bs.modal", n = new i(this, a)), "string" == typeof e ? n[e](o) : a.show && n.show(o)
        })
    }
    var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) {
        var o = this,
            s = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var s = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.options.backdrop && o.adjustBackdrop(), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
            var n = t.Event("shown.bs.modal", { relatedTarget: e });
            s ? o.$element.find(".modal-dialog").one("bsTransitionEnd", function() { o.$element.trigger("focus").trigger(n) }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n)
        }))
    }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") })
    }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) {
        var o = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && s;
            if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function(t) { t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() { o.removeBackdrop(), e && e() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function() { this.options.backdrop && this.adjustBackdrop(), this.adjustDialog() }, i.prototype.adjustBackdrop = function() { this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight) }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" })
    }, i.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function() { this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar() }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", "") }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() { return t.fn.modal = o, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            s = o.attr("href"),
            n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            a = n.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(s) && s }, n.data(), o.data());
        o.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) { t.isDefaultPrevented() || n.one("hidden.bs.modal", function() { o.is(":visible") && o.trigger("focus") }) }), e.call(n, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.tooltip"),
                n = "object" == typeof e && e;
            (s || "destroy" != e) && (s || o.data("bs.tooltip", s = new i(this, n)), "string" == typeof e && s[e]())
        })
    }
    var i = function(t, e) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e) };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, o) {
        this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var s = this.options.trigger.split(" "), n = s.length; n--;) {
            var a = s[n];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.getOptions = function(e) { return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) { i[t] != o && (e[t] = o) }), e
    }, i.prototype.enter = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()) }, i.prototype.leave = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide() }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var s = this,
                n = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), n.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(r);
            h && (r = r.replace(l, "") || "top"), n.detach().css({ top: 0, left: 0, display: "block" }).addClass(r).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var d = this.getPosition(),
                p = n[0].offsetWidth,
                c = n[0].offsetHeight;
            if (h) {
                var f = r,
                    u = this.options.container ? t(this.options.container) : this.$element.parent(),
                    g = this.getPosition(u);
                r = "bottom" == r && d.bottom + c > g.bottom ? "top" : "top" == r && d.top - c < g.top ? "bottom" : "right" == r && d.right + p > g.width ? "left" : "left" == r && d.left - p < g.left ? "right" : r, n.removeClass(f).addClass(r)
            }
            var v = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(v, r);
            var m = function() {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            s = o[0].offsetWidth,
            n = o[0].offsetHeight,
            a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top = e.top + a, e.left = e.left + r, t.offset.setOffset(o[0], t.extend({ using: function(t) { o.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != n && (e.top = e.top + n - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - s + l : 2 * d.top - n + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function o() { "in" != s.hoverState && n.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e() }
        var s = this,
            n = this.tip(),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() { return this.getTitle() }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            o = "BODY" == i.tagName,
            s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, { width: s.right - s.left, height: s.bottom - s.top }));
        var n = o ? { top: 0, left: 0 } : e.offset(),
            a = { scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
            r = o ? { width: t(window).width(), height: t(window).height() } : null;
        return t.extend({}, s, a, r, n)
    }, i.prototype.getCalculatedOffset = function(t, e, i, o) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - o / 2, left: e.left - i } : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var s = { top: 0, left: 0 };
        if (!this.$viewport) return s;
        var n = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - n - a.scroll,
                l = e.top + n - a.scroll + o;
            r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
        } else {
            var h = e.left - n,
                d = e.left + n + i;
            h < a.left ? s.left = a.left - h : d > a.width && (s.left = a.left + a.width - d)
        }
        return s
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t)); return t }, i.prototype.tip = function() { return this.$tip = this.$tip || t(this.options.template) }, i.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type) })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = o, this }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.popover"),
                n = "object" == typeof e && e;
            (s || "destroy" != e) && (s || o.data("bs.popover", s = new i(this, n)), "string" == typeof e && s[e]())
        })
    }
    var i = function(t, e) { this.init("popover", t, e) };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.2", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }, i.prototype.tip = function() { return this.$tip || (this.$tip = t(this.options.template)), this.$tip };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() { return t.fn.popover = o, this }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.tab");
            s || o.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e) { this.element = t(e) };
    i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"),
                n = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                a = t.Event("show.bs.tab", { relatedTarget: s[0] });
            if (s.trigger(n), e.trigger(a), !a.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() { s.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: s[0] }) })
            }
        }
    }, i.prototype.activate = function(e, o, s) {
        function n() { a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s() }
        var a = o.find("> .active"),
            r = s && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() { return t.fn.tab = o, this };
    var s = function(i) { i.preventDefault(), e.call(t(this), "show") };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.affix"),
                n = "object" == typeof e && e;
            s || o.data("bs.affix", s = new i(this, n)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e, o) { this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition() };
    i.VERSION = "3.3.2", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function(t, e, i, o) {
        var s = this.$target.scrollTop(),
            n = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > s ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? s + this.unpin <= n.top ? !1 : "bottom" : t - o >= s + a ? !1 : "bottom";
        var r = null == this.affixed,
            l = r ? s : n.top,
            h = r ? a : e;
        return null != i && i >= s ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                o = this.options.offset,
                s = o.top,
                n = o.bottom,
                a = t("body").height();
            "object" != typeof o && (n = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof n && (n = o.bottom(this.$element));
            var r = this.getState(a, e, s, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({ top: a - e - n })
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() { return t.fn.affix = o, this }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) { var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""); return t(o) }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.collapse"),
                n = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && n.toggle && "show" == e && (n.toggle = !1), s || i.data("bs.collapse", s = new o(this, n)), "string" == typeof e && s[e]()
        })
    }
    var o = function(e, i) { this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    o.VERSION = "3.3.2", o.TRANSITION_DURATION = 350, o.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }, o.prototype.dimension = function() { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() { this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : s.call(this)
            }
        }
    }, o.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var s = t(o);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() { return t.fn.collapse = s, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var s = t(this);
        s.attr("data-target") || o.preventDefault();
        var n = e(s),
            a = n.data("bs.collapse"),
            r = a ? "toggle" : t.extend({}, s.data(), { trigger: this });
        i.call(n, r)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, o) {
        var s = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            s || o.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]()
        })
    }
    e.VERSION = "3.3.2", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
        var e = "offset",
            i = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var o = this;
        this.$body.find(this.selector).map(function() {
            var o = t(this),
                s = o.data("target") || o.attr("href"),
                n = /^#./.test(s) && t(s);
            return n && n.length && n.is(":visible") && [
                [n[e]().top + i, s]
            ] || null
        }).sort(function(t, e) { return t[0] - e[0] }).each(function() { o.offsets.push(this[0]), o.targets.push(this[1]) })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            n = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = n[n.length - 1]) && this.activate(t);
        if (a && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) a != n[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(n[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = o, this }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var i in e)
            if (void 0 !== t.style[i]) return { end: e[i] };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() { i = !0 });
        var s = function() { i || t(o).trigger(t.support.transition.end) };
        return setTimeout(s, e), this
    }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0 } }) })
}(jQuery);

/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) { b.ev.on(o + a + p, c) },
        x = function(b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f },
        y = function(c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) },
        z = function(c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn },
        A = function() { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? { overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY } : { top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function() { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() { b._close() }, b.st.removalDelay)) : b._close()) },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) { d.mfpEl = this, b._openClick(d, a, c) };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) },
        _removeClassFromMFP: function(a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) },
        _hasScrollBar: function(a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) { if (void 0 === c || c === !1) return !0; if (e = a.split("_"), e.length > 1) { var d = b.find(p + "-" + e[0]); if (d.length > 0) { var f = e[1]; "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c) } } else b.find(p + "-" + a).html(c) })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function() { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function(b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() { E && (D.after(E.addClass(C)).detach(), E = null) };
    a.magnificPopup.registerModule(F, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function() { b.types.push(F), w(h + "." + F, function() { G() }) },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() { H && a(document.body).removeClass(H) },
        K = function() { J(), b.req && b.req.abort() };
    a.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function() { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = { data: d, xhr: f };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" };
    a.magnificPopup.registerModule("image", {
        options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function() { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) { L && clearInterval(L), L = setInterval(function() { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) },
                    g = function() { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
    a.magnificPopup.registerModule("zoom", {
        options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) { return a.is("img") ? a : a.find("img") } },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() { b.content.css("visibility", "visible") };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() { f.css(b._getOffset(!0)), e = setTimeout(function() { k(), setTimeout(function() { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() { f.css(b._getOffset()) }, 16)
                        }
                    }), w(h + d, function() { b._allowZoom() && (k(), f && f.remove(), a = null) })
                }
            },
            _allowZoom: function() { return "image" === b.currItem.type },
            _getItemToZoom: function() { return b.currItem.hasSize ? b.currItem.img : !1 },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
        proto: {
            initIframe: function() { b.types.push(P), w("BeforeChange", function(a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function() { R() }) },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a },
        T = function(a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) };
    a.magnificPopup.registerModule("gallery", {
        options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery",
                    g = Boolean(a.fn.mfpFastClick);
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function(a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function(a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                            h = g ? "mfpFastClick" : "click";
                        e[h](function() { b.prev() }), f[h](function() { b.next() }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                    }
                }), w(n + e, function() { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function() { d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null })) : !1
            },
            next: function() { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() },
            prev: function() { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() },
            goTo: function(a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() { d.hasSize = !0 }).on("error.mfploader", function() { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
            options: { replaceSrc: function(a) { return a.src.replace(/\.\w+$/, function(a) { return "@2x" + a }) }, ratio: 1 },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function(b, d) { d.src = a.replaceSrc(d, c) }))
                    }
                }
            }
        }),
        function() {
            var b = 1e3,
                c = "ontouchstart" in window,
                d = function() { v.off("touchmove" + f + " touchend" + f) },
                e = "mfpFastClick",
                f = "." + e;
            a.fn.mfpFastClick = function(e) {
                return a(this).each(function() {
                    var g, h = a(this);
                    if (c) {
                        var i, j, k, l, m, n;
                        h.on("touchstart" + f, function(a) { l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) { m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d()) }).on("touchend" + f, function(a) { d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() { g = !1 }, b), e()) }) })
                    }
                    h.on("click" + f, function() { g || e() })
                })
            }, a.fn.destroyMfpFastClick = function() { a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f) }
        }(), A()
});


// Slide Menu Right
/*! function(t) {
    "use strict";

    function e(t, e) { for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]); return t }

    function s(t, e) {
        for (var s = 0; s < t.length; s++) {
            var i = t[s];
            e(i)
        }
    }

    function i(t) { this.options = e({}, this.options), e(this.options, t), this._init() }
    i.prototype.options = { wrapper: "#o-wrapper", type: "slide-left", menuOpenerClass: ".c-button", maskId: "#c-mask" }, i.prototype._init = function() { this.body = document.body, this.wrapper = document.querySelector(this.options.wrapper), this.mask = document.querySelector(this.options.maskId), this.menu = document.querySelector("#c-menu--" + this.options.type), this.closeBtn = this.menu.querySelector(".c-menu__close"), this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass), this._initEvents() }, i.prototype._initEvents = function() { this.closeBtn.addEventListener("click", function(t) { t.preventDefault(), this.close() }.bind(this)), this.mask.addEventListener("click", function(t) { t.preventDefault(), this.close() }.bind(this)) }, i.prototype.open = function() { this.body.classList.add("has-active-menu"), this.wrapper.classList.add("has-" + this.options.type), this.menu.classList.add("is-active"), this.mask.classList.add("is-active"), this.disableMenuOpeners() }, i.prototype.close = function() { this.body.classList.remove("has-active-menu"), this.wrapper.classList.remove("has-" + this.options.type), this.menu.classList.remove("is-active"), this.mask.classList.remove("is-active"), this.enableMenuOpeners() }, i.prototype.disableMenuOpeners = function() { s(this.menuOpeners, function(t) { t.disabled = !0 }) }, i.prototype.enableMenuOpeners = function() { s(this.menuOpeners, function(t) { t.disabled = !1 }) }, t.Menu = i
}(window); */

/* HTML5 Placeholder jQuery Plugin - v2.1.3
 * Copyright (c)2015 Mathias Bynens
 * 2015-09-23
 */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery) }(function(a) {
    function b(b) {
        var c = {},
            d = /^jQuery\d+$/;
        return a.each(b.attributes, function(a, b) { b.specified && !d.test(b.name) && (c[b.name] = b.value) }), c
    }

    function c(b, c) {
        var d = this,
            f = a(d);
        if (d.value === f.attr("placeholder") && f.hasClass(m.customClass))
            if (d.value = "", f.removeClass(m.customClass), f.data("placeholder-password")) {
                if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c, c;
                f.focus()
            } else d == e() && d.select()
    }

    function d(d) {
        var e, f = this,
            g = a(f),
            h = f.id;
        if (d && "blur" === d.type) { if (g.hasClass(m.customClass)) return; if ("password" === f.type && (e = g.prevAll('input[type="text"]:first'), e.length > 0 && e.is(":visible"))) return }
        if ("" === f.value) {
            if ("password" === f.type) {
                if (!g.data("placeholder-textinput")) {
                    try { e = g.clone().prop({ type: "text" }) } catch (i) { e = a("<input>").attr(a.extend(b(this), { type: "text" })) }
                    e.removeAttr("name").data({ "placeholder-enabled": !0, "placeholder-password": g, "placeholder-id": h }).bind("focus.placeholder", c), g.data({ "placeholder-textinput": e, "placeholder-id": h }).before(e)
                }
                f.value = "", g = g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g.data("placeholder-id")).show()
            } else {
                var j = g.data("placeholder-password");
                j && (j[0].value = "", g.attr("id", g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
            }
            g.addClass(m.customClass), g[0].value = g.attr("placeholder")
        } else g.removeClass(m.customClass)
    }

    function e() { try { return document.activeElement } catch (a) {} }
    var f, g, h = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        i = "placeholder" in document.createElement("input") && !h,
        j = "placeholder" in document.createElement("textarea") && !h,
        k = a.valHooks,
        l = a.propHooks,
        m = {};
    i && j ? (g = a.fn.placeholder = function() { return this }, g.input = !0, g.textarea = !0) : (g = a.fn.placeholder = function(b) { var e = { customClass: "placeholder" }; return m = a.extend({}, e, b), this.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + m.customClass).bind({ "focus.placeholder": c, "blur.placeholder": d }).data("placeholder-enabled", !0).trigger("blur.placeholder") }, g.input = i, g.textarea = j, f = {
        get: function(b) {
            var c = a(b),
                d = c.data("placeholder-password");
            return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(m.customClass) ? "" : b.value
        },
        set: function(b, f) { var g, h, i = a(b); return "" !== f && (g = i.data("placeholder-textinput"), h = i.data("placeholder-password"), g ? (c.call(g[0], !0, f) || (b.value = f), g[0].value = f) : h && (c.call(b, !0, f) || (h[0].value = f), b.value = f)), i.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : (i.hasClass(m.customClass) && c.call(b), b.value = f), i) : (b.value = f, i) }
    }, i || (k.input = f, l.value = f), j || (k.textarea = f, l.value = f), a(function() {
        a(document).delegate("form", "submit.placeholder", function() {
            var b = a("." + m.customClass, this).each(function() { c.call(this, !0, "") });
            setTimeout(function() { b.each(d) }, 10)
        })
    }), a(window).bind("beforeunload.placeholder", function() { a("." + m.customClass).each(function() { this.value = "" }) }))
});

// Snap.svg 0.2.0
// 
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// build: 2013-12-23
! function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = "*",
        h = function() {},
        i = function(a, b) { return a - b },
        j = { n: {} },
        k = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = k.listeners(a),
                j = 0,
                l = [],
                m = {},
                n = [],
                o = b;
            b = a, c = 0;
            for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
            for (l.sort(i); l[j] < 0;)
                if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;
            for (p = 0; q > p; p++)
                if (e = h[p], "zIndex" in e)
                    if (e.zIndex == l[j]) {
                        if (n.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break;
                        while (e)
                    } else m[e.zIndex] = e;
            else if (n.push(e.apply(d, g)), c) break;
            return c = f, b = o, n.length ? n : null
        };
    k._events = j, k.listeners = function(a) {
        var b, c, d, e, h, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, h = m.length; h > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, k.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = { n: {} });
        for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++)
            if (d.f[e] == b) return h;
        return d.f.push(b),
            function(a) {+a == +a && (b.zIndex = +a) }
    }, k.f = function(a) { var b = [].slice.call(arguments, 1); return function() { k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0))) } }, k.stop = function() { c = 1 }, k.nt = function(a) { return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b }, k.nts = function() { return b.split(f) }, k.off = k.unbind = function(a, b) {
        if (!a) return k._events = j = { n: {} }, void 0;
        var c, d, h, i, l, m, n, o = a.split(f),
            p = [j];
        for (i = 0, l = o.length; l > i; i++)
            for (m = 0; m < p.length; m += h.length - 2) {
                if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);
                else
                    for (d in c) c[e](d) && h.push(c[d]);
                p.splice.apply(p, h)
            }
        for (i = 0, l = p.length; l > i; i++)
            for (c = p[i]; c.n;) {
                if (b) {
                    if (c.f) {
                        for (m = 0, n = c.f.length; n > m; m++)
                            if (c.f[m] == b) { c.f.splice(m, 1); break }!c.f.length && delete c.f
                    }
                    for (d in c.n)
                        if (c.n[e](d) && c.n[d].f) {
                            var q = c.n[d].f;
                            for (m = 0, n = q.length; n > m; m++)
                                if (q[m] == b) { q.splice(m, 1); break }!q.length && delete c.n[d].f
                        }
                } else { delete c.f; for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f }
                c = c.n
            }
    }, k.once = function(a, b) { var c = function() { return k.unbind(a, c), b.apply(this, arguments) }; return k.on(a, c) }, k.version = d, k.toString = function() { return "You are running Eve " + d }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() { return k }) : a.eve = k
}(this),
function(a, b) { "function" == typeof define && define.amd ? define(["eve"], function(c) { return b(a, c) }) : b(a, a.eve) }(this, function(a, b) {
    var c = function(b) {
            var c = {},
                d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) { setTimeout(a, 16) },
                e = Array.isArray || function(a) { return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a) },
                f = 0,
                g = "M" + (+new Date).toString(36),
                h = function() { return g + (f++).toString(36) },
                i = Date.now || function() { return +new Date },
                j = function(a) {
                    var b = this;
                    if (null == a) return b.s;
                    var c = b.s - a;
                    b.b += b.dur * c, b.B += b.dur * c, b.s = a
                },
                k = function(a) { var b = this; return null == a ? b.spd : (b.spd = a, void 0) },
                l = function(a) { var b = this; return null == a ? b.dur : (b.s = b.s * a / b.dur, b.dur = a, void 0) },
                m = function() {
                    var a = this;
                    delete c[a.id], b("mina.stop." + a.id, a)
                },
                n = function() {
                    var a = this;
                    a.pdif || (delete c[a.id], a.pdif = a.get() - a.b)
                },
                o = function() {
                    var a = this;
                    a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
                },
                p = function() {
                    var a = 0;
                    for (var f in c)
                        if (c.hasOwnProperty(f)) {
                            var g, h = c[f],
                                i = h.get();
                            if (a++, h.s = (i - h.b) / (h.dur / h.spd), h.s >= 1 && (delete c[f], h.s = 1, a--, function(a) { setTimeout(function() { b("mina.finish." + a.id, a) }) }(h)), e(h.start)) { g = []; for (var j = 0, k = h.start.length; k > j; j++) g[j] = +h.start[j] + (h.end[j] - h.start[j]) * h.easing(h.s) } else g = +h.start + (h.end - h.start) * h.easing(h.s);
                            h.set(g)
                        }
                    a && d(p)
                },
                q = function(a, b, e, f, g, i, r) {
                    var s = { id: h(), start: a, end: b, b: e, s: 0, dur: f - e, spd: 1, get: g, set: i, easing: r || q.linear, status: j, speed: k, duration: l, stop: m, pause: n, resume: o };
                    c[s.id] = s;
                    var t, u = 0;
                    for (t in c)
                        if (c.hasOwnProperty(t) && (u++, 2 == u)) break;
                    return 1 == u && d(p), s
                };
            return q.time = i, q.getById = function(a) { return c[a] || null }, q.linear = function(a) { return a }, q.easeout = function(a) { return Math.pow(a, 1.7) }, q.easein = function(a) { return Math.pow(a, .48) }, q.easeinout = function(a) {
                if (1 == a) return 1;
                if (0 == a) return 0;
                var b = .48 - a / 1.04,
                    c = Math.sqrt(.1734 + b * b),
                    d = c - b,
                    e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                    f = -c - b,
                    g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                    h = e + g + .5;
                return 3 * (1 - h) * h * h + h * h * h
            }, q.backin = function(a) { if (1 == a) return 1; var b = 1.70158; return a * a * ((b + 1) * a - b) }, q.backout = function(a) {
                if (0 == a) return 0;
                a -= 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a + b) + 1
            }, q.elastic = function(a) { return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * 2 * Math.PI / .3) + 1 }, q.bounce = function(a) {
                var b, c = 7.5625,
                    d = 2.75;
                return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
            }, a.mina = q, q
        }("undefined" == typeof b ? function() {} : b),
        d = function() {
            function d(a, b) { if (a) { if (a.tagName) return z(a); if (a instanceof u) return a; if (null == b) return a = I.doc.querySelector(a), z(a) } return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new y(a, b) }

            function e(a, b) {
                if (b) {
                    if ("string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(fb, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(gb, b.substring(4)) : a.getAttribute(b);
                    for (var c in b)
                        if (b[J](c)) {
                            var d = K(b[c]);
                            d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(fb, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(gb, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
                        }
                } else a = I.doc.createElementNS(gb, a);
                return a
            }

            function f(a, b) { return b = K.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || U.call(a).slice(8, -1).toLowerCase() == b }

            function h(a) { if ("function" == typeof a || Object(a) !== a) return a; var b = new a.constructor; for (var c in a) a[J](c) && (b[c] = h(a[c])); return b }

            function i(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }

            function j(a, b, c) {
                function d() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        f = e.join("␀"),
                        g = d.cache = d.cache || {},
                        h = d.count = d.count || [];
                    return g[J](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                }
                return d
            }

            function k(a, b, c, d, e, f) {
                if (null == e) {
                    var g = a - c,
                        h = b - d;
                    return g || h ? (180 + 180 * N.atan2(-h, -g) / R + 360) % 360 : 0
                }
                return k(a, b, e, f) - k(c, d, e, f)
            }

            function l(a) { return a % 360 * R / 180 }

            function m(a) { return 180 * a / R % 360 }

            function n(a, b, c, d, e, f) { return null == b && "[object SVGMatrix]" == U.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, this.f = a.f, void 0) : (null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0), void 0) }

            function o(a) { var b = []; return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) { return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), "skewX" == c ? b.push(["m", 1, 0, N.tan(l(d[0])), 1, 0, 0]) : "skewY" == c ? b.push(["m", 1, N.tan(l(d[0])), 0, 1, 0, 0]) : b.push([c.charAt(0)].concat(d)), a }), b }

            function p(a, b) {
                var c = qb(a),
                    d = new n;
                if (c)
                    for (var e = 0, f = c.length; f > e; e++) {
                        var g, h, i, j, k, l = c[e],
                            m = l.length,
                            o = K(l[0]).toLowerCase(),
                            p = l[0] != o,
                            q = p ? d.invert() : 0;
                        "t" == o && 2 == m ? d.translate(l[1], 0) : "t" == o && 3 == m ? p ? (g = q.x(0, 0), h = q.y(0, 0), i = q.x(l[1], l[2]), j = q.y(l[1], l[2]), d.translate(i - g, j - h)) : d.translate(l[1], l[2]) : "r" == o ? 2 == m ? (k = k || b, d.rotate(l[1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m && (p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.rotate(l[1], i, j)) : d.rotate(l[1], l[2], l[3])) : "s" == o ? 2 == m || 3 == m ? (k = k || b, d.scale(l[1], l[m - 1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m ? p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.scale(l[1], l[1], i, j)) : d.scale(l[1], l[1], l[2], l[3]) : 5 == m && (p ? (i = q.x(l[3], l[4]), j = q.y(l[3], l[4]), d.scale(l[1], l[2], i, j)) : d.scale(l[1], l[2], l[3], l[4])) : "m" == o && 7 == m && d.add(l[1], l[2], l[3], l[4], l[5], l[6])
                    }
                return d
            }

            function q(a, b) {
                if (null == b) {
                    var c = !0;
                    if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), !b) return new n;
                    b = o(b)
                } else b = d._.rgTransform.test(b) ? K(b).replace(/\.{3}|\u2026/g, a._.transform || S) : o(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : K(b)), a._.transform = b;
                var e = p(b, a.getBBox(1));
                return c ? e : (a.matrix = e, void 0)
            }

            function r(a) {
                var b = d._.someDefs;
                if (b && rb(b.ownerDocument.documentElement, b)) return b;
                var c = a.node.ownerSVGElement && z(a.node.ownerSVGElement) || a.node.parentNode && z(a.node.parentNode) || d.select("svg") || d(0, 0),
                    e = c.select("defs"),
                    f = null == e ? !1 : e.node;
                return f || (f = x("defs", c.node).node), d._.someDefs = f, f
            }

            function s(a, b, c) {
                function d(a) { return null == a ? S : a == +a ? a : (e(j, { width: a }), j.getBBox().width) }

                function f(a) { return null == a ? S : a == +a ? a : (e(j, { height: a }), j.getBBox().height) }

                function g(d, e) { null == b ? i[d] = e(a.attr(d)) : d == b && (i = e(null == c ? a.attr(d) : c)) }
                var h = r(a),
                    i = {},
                    j = h.querySelector(".svg---mgr");
                switch (j || (j = e("rect"), e(j, { width: 10, height: 10, "class": "svg---mgr" }), h.appendChild(j)), a.type) {
                    case "rect":
                        g("rx", d), g("ry", f);
                    case "image":
                        g("width", d), g("height", f);
                    case "text":
                        g("x", d), g("y", f);
                        break;
                    case "circle":
                        g("cx", d), g("cy", f), g("r", d);
                        break;
                    case "ellipse":
                        g("cx", d), g("cy", f), g("rx", d), g("ry", f);
                        break;
                    case "line":
                        g("x1", d), g("x2", d), g("y1", f), g("y2", f);
                        break;
                    case "marker":
                        g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
                        break;
                    case "radialGradient":
                        g("fx", d), g("fy", f);
                        break;
                    case "tspan":
                        g("dx", d), g("dy", f);
                        break;
                    default:
                        g(b, d)
                }
                return i
            }

            function t(a) { f(a, "array") || (a = Array.prototype.slice.call(arguments, 0)); for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++]; for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) { d.appendChild(a.node) }) : d.appendChild(a[b].node); var e = d.childNodes; for (b = 0; b < e.length; b++) this[c++] = z(e[b]); return this }

            function u(a) { if (a.snap in hb) return hb[a.snap]; var b, c = this.id = eb(); try { b = a.ownerSVGElement } catch (d) {} if (this.node = a, b && (this.paper = new y(b)), this.type = a.tagName, this.anims = {}, this._ = { transform: [] }, a.snap = c, hb[c] = this, "g" == this.type) { this.add = t; for (var e in y.prototype) y.prototype[J](e) && (this[e] = y.prototype[e]) } }

            function v(a) {
                for (var b, c = 0, d = a.length; d > c; c++)
                    if (b = b || a[c]) return b
            }

            function w(a) { this.node = a }

            function x(a, b) {
                var c = e(a);
                b.appendChild(c);
                var d = z(c);
                return d.type = a, d
            }

            function y(a, b) {
                var c, d, f, g = y.prototype;
                if (a && "svg" == a.tagName) {
                    if (a.snap in hb) return hb[a.snap];
                    c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(I.doc.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
                    for (var h in g) g[J](h) && (c[h] = g[h]);
                    c.paper = c.root = c
                } else c = x("svg", I.doc.body), e(c.node, { height: b, version: 1.1, width: a, xmlns: gb });
                return c
            }

            function z(a) { return a ? a instanceof u || a instanceof w ? a : "svg" == a.tagName ? new y(a) : new u(a) : a }

            function A() { return this.selectAll("stop") }

            function B(a, b) {
                var c = e("stop"),
                    f = { offset: +b + "%" };
                return a = d.color(a), f["stop-color"] = a.hex, a.opacity < 1 && (f["stop-opacity"] = a.opacity), e(c, f), this.node.appendChild(c), this
            }

            function C() {
                if ("linearGradient" == this.type) {
                    var a = e(this.node, "x1") || 0,
                        b = e(this.node, "x2") || 1,
                        c = e(this.node, "y1") || 0,
                        f = e(this.node, "y2") || 0;
                    return d._.box(a, c, N.abs(b - a), N.abs(f - c))
                }
                var g = this.node.cx || .5,
                    h = this.node.cy || .5,
                    i = this.node.r || 0;
                return d._.box(g - i, h - i, 2 * i, 2 * i)
            }

            function D(a, c) {
                function d(a, b) {
                    for (var c = (b - j) / (a - k), d = k; a > d; d++) h[d].offset = +(+j + c * (d - k)).toFixed(2);
                    k = a, j = b
                }
                var f, g = v(b("snap.util.grad.parse", null, c));
                if (!g) return null;
                g.params.unshift(a), f = "l" == g.type.toLowerCase() ? E.apply(0, g.params) : F.apply(0, g.params), g.type != g.type.toLowerCase() && e(f.node, { gradientUnits: "userSpaceOnUse" });
                var h = g.stops,
                    i = h.length,
                    j = 0,
                    k = 0;
                i--;
                for (var l = 0; i > l; l++) "offset" in h[l] && d(l, h[l].offset);
                for (h[i].offset = h[i].offset || 100, d(i, h[i].offset), l = 0; i >= l; l++) {
                    var m = h[l];
                    f.addStop(m.color, m.offset)
                }
                return f
            }

            function E(a, b, c, d, f) { var g = x("linearGradient", a); return g.stops = A, g.addStop = B, g.getBBox = C, null != b && e(g.node, { x1: b, y1: c, x2: d, y2: f }), g }

            function F(a, b, c, d, f, g) { var h = x("radialGradient", a); return h.stops = A, h.addStop = B, h.getBBox = C, null != b && e(h.node, { cx: b, cy: c, r: d }), null != f && null != g && e(h.node, { fx: f, fy: g }), h }

            function G(a) {
                return function(c) {
                    if (b.stop(), c instanceof w && 1 == c.node.childNodes.length && ("radialGradient" == c.node.firstChild.tagName || "linearGradient" == c.node.firstChild.tagName || "pattern" == c.node.firstChild.tagName) && (c = c.node.firstChild, r(this).appendChild(c), c = z(c)), c instanceof u)
                        if ("radialGradient" == c.type || "linearGradient" == c.type || "pattern" == c.type) { c.node.id || e(c.node, { id: c.id }); var f = ib(c.node.id) } else f = c.attr(a);
                    else if (f = d.color(c), f.error) {
                        var g = D(r(this), c);
                        g ? (g.node.id || e(g.node, { id: g.id }), f = ib(g.node.id)) : f = c
                    } else f = K(f);
                    var h = {};
                    h[a] = f, e(this.node, h), this.node.style[a] = S
                }
            }

            function H(a) {
                for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                    var f = c[d];
                    3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(H(f)))
                }
                return b
            }
            d.version = "0.2.0", d.toString = function() { return "Snap v" + this.version }, d._ = {};
            var I = { win: a, doc: a.document };
            d._.glob = I;
            var J = "hasOwnProperty",
                K = String,
                L = parseFloat,
                M = parseInt,
                N = Math,
                O = N.max,
                P = N.min,
                Q = N.abs,
                R = (N.pow, N.PI),
                S = (N.round, ""),
                T = " ",
                U = Object.prototype.toString,
                V = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                W = /^url\(#?([^)]+)\)$/,
                X = "	\n\f\r   ᠎             　\u2028\u2029",
                Y = new RegExp("[," + X + "]+"),
                Z = (new RegExp("[" + X + "]", "g"), new RegExp("[" + X + "]*,[" + X + "]*")),
                $ = { hs: 1, rg: 1 },
                _ = new RegExp("([a-z])[" + X + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + X + "]*,?[" + X + "]*)+)", "ig"),
                ab = new RegExp("([rstm])[" + X + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + X + "]*,?[" + X + "]*)+)", "ig"),
                bb = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + X + "]*,?[" + X + "]*", "ig"),
                cb = 0,
                db = "S" + (+new Date).toString(36),
                eb = function() { return db + (cb++).toString(36) },
                fb = "http://www.w3.org/1999/xlink",
                gb = "http://www.w3.org/2000/svg",
                hb = {},
                ib = d.url = function(a) { return "url('#" + a + "')" };
            d._.$ = e, d._.id = eb, d.format = function() {
                var a = /\{([^\}]+)\}/g,
                    b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    c = function(a, c, d) { var e = d; return c.replace(b, function(a, b, c, d, f) { b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e())) }), e = (null == e || e == d ? a : e) + "" };
                return function(b, d) { return K(b).replace(a, function(a, b) { return c(a, b, d) }) }
            }();
            var jb = function() {
                function a() { this.parentNode.removeChild(this) }
                return function(b, c) {
                    var d = I.doc.createElement("img"),
                        e = I.doc.body;
                    d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() { c.call(d), d.onload = d.onerror = null, e.removeChild(d) }, d.onerror = a, e.appendChild(d), d.src = b
                }
            }();
            d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function(a, b, c) {
                    if (c = f(c, "finite") ? c : 10, f(a, "array")) {
                        for (var d = a.length; d--;)
                            if (Q(a[d] - b) <= c) return a[d]
                    } else { a = +a; var e = b % a; if (c > e) return b - e; if (e > a - c) return b - e + a }
                    return b
                },
                function(a) {
                    function b(a) { return a[0] * a[0] + a[1] * a[1] }

                    function c(a) {
                        var c = N.sqrt(b(a));
                        a[0] && (a[0] /= c), a[1] && (a[1] /= c)
                    }
                    a.add = function(a, b, c, d, e, f) {
                        var g, h, i, j, k = [
                                [],
                                [],
                                []
                            ],
                            l = [
                                [this.a, this.c, this.e],
                                [this.b, this.d, this.f],
                                [0, 0, 1]
                            ],
                            m = [
                                [a, c, e],
                                [b, d, f],
                                [0, 0, 1]
                            ];
                        for (a && a instanceof n && (m = [
                                [a.a, a.c, a.e],
                                [a.b, a.d, a.f],
                                [0, 0, 1]
                            ]), g = 0; 3 > g; g++)
                            for (h = 0; 3 > h; h++) {
                                for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];
                                k[g][h] = j
                            }
                        return this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2], this
                    }, a.invert = function() {
                        var a = this,
                            b = a.a * a.d - a.b * a.c;
                        return new n(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
                    }, a.clone = function() { return new n(this.a, this.b, this.c, this.d, this.e, this.f) }, a.translate = function(a, b) { return this.add(1, 0, 0, 1, a, b) }, a.scale = function(a, b, c, d) { return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this }, a.rotate = function(a, b, c) {
                        a = l(a), b = b || 0, c = c || 0;
                        var d = +N.cos(a).toFixed(9),
                            e = +N.sin(a).toFixed(9);
                        return this.add(d, e, -e, d, b, c), this.add(1, 0, 0, 1, -b, -c)
                    }, a.x = function(a, b) { return a * this.a + b * this.c + this.e }, a.y = function(a, b) { return a * this.b + b * this.d + this.f }, a.get = function(a) { return +this[K.fromCharCode(97 + a)].toFixed(4) }, a.toString = function() { return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" }, a.offset = function() { return [this.e.toFixed(4), this.f.toFixed(4)] }, a.split = function() {
                        var a = {};
                        a.dx = this.e, a.dy = this.f;
                        var d = [
                            [this.a, this.c],
                            [this.b, this.d]
                        ];
                        a.scalex = N.sqrt(b(d[0])), c(d[0]), a.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1], d[1] = [d[1][0] - d[0][0] * a.shear, d[1][1] - d[0][1] * a.shear], a.scaley = N.sqrt(b(d[1])), c(d[1]), a.shear /= a.scaley;
                        var e = -d[0][1],
                            f = d[1][1];
                        return 0 > f ? (a.rotate = m(N.acos(f)), 0 > e && (a.rotate = 360 - a.rotate)) : a.rotate = m(N.asin(e)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
                    }, a.toTransformString = function(a) { var b = a || this.split(); return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : S) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : S) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : S)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] }
                }(n.prototype), d.Matrix = n, d.getRGB = j(function(a) { if (!a || (a = K(a)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: nb }; if ("none" == a) return { r: -1, g: -1, b: -1, hex: "none", toString: nb }; if (!($[J](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = kb(a)), !a) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: nb }; var b, c, e, g, h, i, j = a.match(V); return j ? (j[2] && (e = M(j[2].substring(5), 16), c = M(j[2].substring(3, 5), 16), b = M(j[2].substring(1, 3), 16)), j[3] && (e = M((h = j[3].charAt(3)) + h, 16), c = M((h = j[3].charAt(2)) + h, 16), b = M((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = L(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = L(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = P(N.round(b), 255), c = P(N.round(c), 255), e = P(N.round(e), 255), g = P(O(g, 0), 1), j = { r: b, g: c, b: e, toString: nb }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: nb } }, d), d.hsb = j(function(a, b, c) { return d.hsb2rgb(a, b, c).hex }), d.hsl = j(function(a, b, c) { return d.hsl2rgb(a, b, c).hex }), d.rgb = j(function(a, b, c, d) { if (f(d, "finite")) { var e = N.round; return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")" } return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1) });
            var kb = function(a) {
                    var b = I.doc.getElementsByTagName("head")[0],
                        c = "rgb(255, 0, 0)";
                    return kb = j(function(a) {
                        if ("red" == a.toLowerCase()) return c;
                        b.style.color = c, b.style.color = a;
                        var d = I.doc.defaultView.getComputedStyle(b, S).getPropertyValue("color");
                        return d == c ? null : d
                    }), kb(a)
                },
                lb = function() { return "hsb(" + [this.h, this.s, this.b] + ")" },
                mb = function() { return "hsl(" + [this.h, this.s, this.l] + ")" },
                nb = function() { return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")" },
                ob = function(a, b, c) {
                    if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
                        var e = d.getRGB(a);
                        a = e.r, b = e.g, c = e.b
                    }
                    return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
                },
                pb = function(a, b, c, e) { a = N.round(255 * a), b = N.round(255 * b), c = N.round(255 * c); var g = { r: a, g: b, b: c, opacity: f(e, "finite") ? e : 1, hex: d.rgb(a, b, c), toString: nb }; return f(e, "finite") && (g.opacity = e), g };
            d.color = function(a) { var b; return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = { hex: "none" }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = nb, a }, d.hsb2rgb = function(a, b, c, d) { f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360; var e, g, h, i, j; return a = a % 360 / 60, j = c * b, i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], pb(e, g, h, d) }, d.hsl2rgb = function(a, b, c, d) { f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360; var e, g, h, i, j; return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], pb(e, g, h, d) }, d.rgb2hsb = function(a, b, c) { c = ob(a, b, c), a = c[0], b = c[1], c = c[2]; var d, e, f, g; return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, { h: d, s: e, b: f, toString: lb } }, d.rgb2hsl = function(a, b, c) { c = ob(a, b, c), a = c[0], b = c[1], c = c[2]; var d, e, f, g, h, i; return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), { h: d, s: e, l: f, toString: mb } }, d.parsePathString = function(a) {
                if (!a) return null;
                var b = d.path(a);
                if (b.arr) return d.path.clone(b.arr);
                var c = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                    e = [];
                return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || K(a).replace(_, function(a, b, d) {
                    var f = [],
                        g = b.toLowerCase();
                    if (d.replace(bb, function(a, b) { b && f.push(+b) }), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f));
                    else
                        for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
                }), e.toString = d.path.toString, b.arr = d.path.clone(e), e
            };
            var qb = d.parseTransformString = function(a) {
                if (!a) return null;
                var b = [];
                return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || K(a).replace(ab, function(a, c, d) {
                    var e = [];
                    c.toLowerCase(), d.replace(bb, function(a, b) { b && e.push(+b) }), b.push([c].concat(e))
                }), b.toString = d.path.toString, b
            };
            d._.svgTransform2string = o, d._.rgTransform = new RegExp("^[a-z][" + X + "]*-?\\.?\\d", "i"), d._.transform2matrix = p, d._unit2px = s;
            var rb = I.doc.contains || I.doc.compareDocumentPosition ? function(a, b) {
                var c = 9 == a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b;)
                        if (b = b.parentNode, b == a) return !0;
                return !1
            };
            d._.getSomeDefs = r, d.select = function(a) { return z(I.doc.querySelector(a)) }, d.selectAll = function(a) { for (var b = I.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e])); return c },
                function(a) {
                    function g(a) {
                        function b(a, b) {
                            var c = e(a.node, b);
                            c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function(c) {
                                var d = {};
                                d[b] = ib(c), e(a.node, d)
                            })))
                        }

                        function c(a) {
                            var b = e(a.node, "xlink:href");
                            b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function(b) { a.attr("xlink:href", "#" + b) })))
                        }
                        for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                            d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                            var l = e(d.node, "id");
                            l && (e(d.node, { id: d.id }), h.push({ old: l, id: d.id }))
                        }
                        for (j = 0, k = h.length; k > j; j++) {
                            var m = i[h[j].old];
                            if (m)
                                for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id)
                        }
                    }

                    function h(a, b, c) { return function(d) { var e = d.slice(a, b); return 1 == e.length && (e = e[0]), c ? c(e) : e } }

                    function i(a) {
                        return function() {
                            var b = a ? "<" + this.type : "",
                                c = this.node.attributes,
                                d = this.node.childNodes;
                            if (a)
                                for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                            if (d.length) {
                                for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += z(d[e]).toString());
                                a && (b += "</" + this.type + ">")
                            } else a && (b += "/>");
                            return b
                        }
                    }
                    a.attr = function(a, c) {
                        var d = this;
                        if (d.node, !a) return d;
                        if (f(a, "string")) {
                            if (!(arguments.length > 1)) return v(b("snap.util.getattr." + a, d));
                            var e = {};
                            e[a] = c, a = e
                        }
                        for (var g in a) a[J](g) && b("snap.util.attr." + g, d, a[g]);
                        return d
                    }, a.getBBox = function(a) { var b = this; if ("use" == b.type && (b = b.original), b.removed) return {}; var c = b._; return a ? (c.bboxwt = d.path.get[b.type] ? d.path.getBBox(b.realPath = d.path.get[b.type](b)) : d._.box(b.node.getBBox()), d._.box(c.bboxwt)) : (b.realPath = (d.path.get[b.type] || d.path.get.deflt)(b), c.bbox = d.path.getBBox(d.path.map(b.realPath, b.matrix)), d._.box(c.bbox)) };
                    var j = function() { return this.string };
                    a.transform = function(a) {
                        var b = this._;
                        if (null == a) {
                            var c = new n(this.node.getCTM()),
                                d = q(this),
                                f = d.toTransformString(),
                                g = K(d) == K(this.matrix) ? b.transform : f;
                            return { string: g, globalMatrix: c, localMatrix: d, diffMatrix: c.clone().add(d.invert()), global: c.toTransformString(), local: f, toString: j }
                        }
                        return a instanceof n && (a = a.toTransformString()), q(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, { gradientTransform: this.matrix }) : "pattern" == this.type ? e(this.node, { patternTransform: this.matrix }) : e(this.node, { transform: this.matrix })), this
                    }, a.parent = function() { return z(this.node.parentNode) }, a.append = a.add = function(a) {
                        if (a) {
                            if ("set" == a.type) { var b = this; return a.forEach(function(a) { b.add(a) }), this }
                            a = z(a), this.node.appendChild(a.node), a.paper = this.paper
                        }
                        return this
                    }, a.appendTo = function(a) { return a && (a = z(a), a.append(this)), this }, a.prepend = function(a) {
                        if (a) {
                            a = z(a);
                            var b = a.parent();
                            this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), b && b.add()
                        }
                        return this
                    }, a.prependTo = function(a) { return a = z(a), a.prepend(this), this }, a.before = function(a) {
                        if ("set" == a.type) {
                            var b = this;
                            return a.forEach(function(a) {
                                var c = a.parent();
                                b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                            }), this.parent().add(), this
                        }
                        a = z(a);
                        var c = a.parent();
                        return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
                    }, a.after = function(a) { a = z(a); var b = a.parent(); return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this }, a.insertBefore = function(a) { a = z(a); var b = this.parent(); return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this }, a.insertAfter = function(a) { a = z(a); var b = this.parent(); return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this }, a.remove = function() { var a = this.parent(); return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this }, a.select = function(a) { return z(this.node.querySelector(a)) }, a.selectAll = function(a) { for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e])); return c }, a.asPX = function(a, b) { return null == b && (b = this.attr(a)), +s(this, a, b) }, a.use = function() { var a, b = this.node.id; return b || (b = this.id, e(this.node, { id: b })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? x(this.type, this.node.parentNode) : x("use", this.node.parentNode), e(a.node, { "xlink:href": "#" + b }), a.original = this, a }, a.clone = function() { var a = z(this.node.cloneNode(!0)); return e(a.node, "id") && e(a.node, { id: a.id }), g(a), a.insertAfter(this), a }, a.toDefs = function() { var a = r(this); return a.appendChild(this.node), this }, a.pattern = function(a, b, c, d) { var g = x("pattern", r(this)); return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, { x: a, y: b, width: c, height: d, patternUnits: "userSpaceOnUse", id: g.id, viewBox: [a, b, c, d].join(" ") }), g.node.appendChild(this.node), g }, a.marker = function(a, b, c, d, g, h) { var i = x("marker", r(this)); return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, { viewBox: [a, b, c, d].join(T), markerWidth: c, markerHeight: d, orient: "auto", refX: g || 0, refY: h || 0, id: i.id }), i.node.appendChild(this.node), i };
                    var k = function(a, b, d, e) { "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e) };
                    d.animation = function(a, b, c, d) { return new k(a, b, c, d) }, a.inAnim = function() {
                        var a = this,
                            b = [];
                        for (var c in a.anims) a.anims[J](c) && ! function(a) { b.push({ anim: new k(a._attrs, a.dur, a.easing, a._callback), curStatus: a.status(), status: function(b) { return a.status(b) }, stop: function() { a.stop() } }) }(a.anims[c]);
                        return b
                    }, d.animate = function(a, d, e, f, g, h) {
                        "function" != typeof g || g.length || (h = g, g = c.linear);
                        var i = c.time(),
                            j = c(a, d, i, i + f, c.time, e, g);
                        return h && b.once("mina.finish." + j.id, h), j
                    }, a.stop = function() { for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop(); return this }, a.animate = function(a, d, e, g) {
                        "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof k && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
                        var i, j, l, m, n = [],
                            o = [],
                            p = {},
                            q = this;
                        for (var r in a)
                            if (a[J](r)) {
                                q.equal ? (m = q.equal(r, K(a[r])), i = m.from, j = m.to, l = m.f) : (i = +q.attr(r), j = +a[r]);
                                var s = f(i, "array") ? i.length : 1;
                                p[r] = h(n.length, n.length + s, l), n = n.concat(i), o = o.concat(j)
                            }
                        var t = c.time(),
                            u = c(n, o, t, t + d, c.time, function(a) {
                                var b = {};
                                for (var c in p) p[J](c) && (b[c] = p[c](a));
                                q.attr(b)
                            }, e);
                        return q.anims[u.id] = u, u._attrs = a, u._callback = g, b.once("mina.finish." + u.id, function() { delete q.anims[u.id], g && g.call(q) }), b.once("mina.stop." + u.id, function() { delete q.anims[u.id] }), q
                    };
                    var l = {};
                    a.data = function(a, c) { var e = l[this.id] = l[this.id] || {}; if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e; if (1 == arguments.length) { if (d.is(a, "object")) { for (var f in a) a[J](f) && this.data(f, a[f]); return this } return b("snap.data.get." + this.id, this, e[a], a), e[a] } return e[a] = c, b("snap.data.set." + this.id, this, c, a), this }, a.removeData = function(a) { return null == a ? l[this.id] = {} : l[this.id] && delete l[this.id][a], this }, a.outerSVG = a.toString = i(1), a.innerSVG = i()
                }(u.prototype), d.parse = function(a) {
                    var b = I.doc.createDocumentFragment(),
                        c = !0,
                        d = I.doc.createElement("div");
                    if (a = K(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
                        if (c) b = a;
                        else
                            for (; a.firstChild;) b.appendChild(a.firstChild);
                    return d.innerHTML = S, new w(b)
                }, w.prototype.select = u.prototype.select, w.prototype.selectAll = u.prototype.selectAll, d.fragment = function() {
                    for (var a = Array.prototype.slice.call(arguments, 0), b = I.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
                        var f = a[c];
                        f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
                    }
                    return new w(b)
                },
                function(a) {
                    a.el = function(a, b) { return x(a, this.node).attr(b) }, a.rect = function(a, b, c, d, e, g) { var h; return null == g && (g = e), f(a, "object") && "x" in a ? h = a : null != a && (h = { x: a, y: b, width: c, height: d }, null != e && (h.rx = e, h.ry = g)), this.el("rect", h) }, a.circle = function(a, b, c) { var d; return f(a, "object") && "cx" in a ? d = a : null != a && (d = { cx: a, cy: b, r: c }), this.el("circle", d) }, a.image = function(a, b, c, d, g) {
                            var h = x("image", this.node);
                            if (f(a, "object") && "src" in a) h.attr(a);
                            else if (null != a) {
                                var i = { "xlink:href": a, preserveAspectRatio: "none" };
                                null != b && null != c && (i.x = b, i.y = c), null != d && null != g ? (i.width = d, i.height = g) : jb(a, function() { e(h.node, { width: this.offsetWidth, height: this.offsetHeight }) }), e(h.node, i)
                            }
                            return h
                        }, a.ellipse = function(a, b, c, d) {
                            var e = x("ellipse", this.node);
                            return f(a, "object") && "cx" in a ? e.attr(a) : null != a && e.attr({ cx: a, cy: b, rx: c, ry: d }), e
                        }, a.path = function(a) { var b = x("path", this.node); return f(a, "object") && !f(a, "array") ? b.attr(a) : a && b.attr({ d: a }), b }, a.group = a.g = function(b) {
                            var c = x("g", this.node);
                            c.add = t;
                            for (var d in a) a[J](d) && (c[d] = a[d]);
                            return 1 == arguments.length && b && !b.type ? c.attr(b) : arguments.length && c.add(Array.prototype.slice.call(arguments, 0)), c
                        }, a.text = function(a, b, c) { var d = x("text", this.node); return f(a, "object") ? d.attr(a) : null != a && d.attr({ x: a, y: b, text: c || "" }), d }, a.line = function(a, b, c, d) { var e = x("line", this.node); return f(a, "object") ? e.attr(a) : null != a && e.attr({ x1: a, x2: c, y1: b, y2: d }), e }, a.polyline = function(a) { arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0)); var b = x("polyline", this.node); return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({ points: a }), b }, a.polygon = function(a) { arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0)); var b = x("polygon", this.node); return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({ points: a }), b },
                        function() {
                            a.gradient = function(a) { return D(this.defs, a) }, a.gradientLinear = function(a, b, c, d) { return E(this.defs, a, b, c, d) }, a.gradientRadial = function(a, b, c, d, e) { return F(this.defs, a, b, c, d, e) }, a.toString = function() {
                                var a, b = I.doc.createDocumentFragment(),
                                    c = I.doc.createElement("div"),
                                    d = this.node.cloneNode(!0);
                                return b.appendChild(c), c.appendChild(d), e(d, { xmlns: gb }), a = c.innerHTML, b.removeChild(b.firstChild), a
                            }, a.clear = function() { for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName && b.parentNode.removeChild(b), b = a }
                        }()
                }(y.prototype), d.ajax = function(a, c, d, e) {
                    var g = new XMLHttpRequest,
                        h = eb();
                    if (g) {
                        if (f(c, "function")) e = d, d = c, c = null;
                        else if (f(c, "object")) {
                            var i = [];
                            for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                            c = i.join("&")
                        }
                        return g.open(c ? "POST" : "GET", a, !0), g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c && g.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() { 4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g) }, 4 == g.readyState ? g : (g.send(c), g)
                    }
                }, d.load = function(a, b, c) {
                    d.ajax(a, function(a) {
                        var e = d.parse(a.responseText);
                        c ? b.call(c, e) : b(e)
                    })
                }, b.on("snap.util.attr.mask", function(a) {
                    if (a instanceof u || a instanceof w) {
                        if (b.stop(), a instanceof w && 1 == a.node.childNodes.length && (a = a.node.firstChild, r(this).appendChild(a), a = z(a)), "mask" == a.type) var c = a;
                        else c = x("mask", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, { id: c.id });
                        e(this.node, { mask: ib(c.id) })
                    }
                }),
                function(a) { b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a) }(function(a) {
                    if (a instanceof u || a instanceof w) {
                        if (b.stop(), "clipPath" == a.type) var c = a;
                        else c = x("clipPath", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, { id: c.id });
                        e(this.node, { "clip-path": ib(c.id) })
                    }
                }), b.on("snap.util.attr.fill", G("fill")), b.on("snap.util.attr.stroke", G("stroke"));
            var sb = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            b.on("snap.util.grad.parse", function(a) {
                a = K(a);
                var b = a.match(sb);
                if (!b) return null;
                var c = b[1],
                    d = b[2],
                    e = b[3];
                return d = d.split(/\s*,\s*/).map(function(a) { return +a == a ? +a : a }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) { a = a.split(":"); var b = { color: a[0] }; return a[1] && (b.offset = a[1]), b }), { type: c, params: d, stops: e }
            }), b.on("snap.util.attr.d", function(a) { b.stop(), f(a, "array") && f(a[0], "array") && (a = d.path.toString.call(a)), a = K(a), a.match(/[ruo]/i) && (a = d.path.toAbsolute(a)), e(this.node, { d: a }) })(-1), b.on("snap.util.attr.#text", function(a) {
                b.stop(), a = K(a);
                for (var c = I.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(c)
            })(-1), b.on("snap.util.attr.path", function(a) { b.stop(), this.attr({ d: a }) })(-1), b.on("snap.util.attr.viewBox", function(a) {
                var c;
                c = f(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : f(a, "array") ? a.join(" ") : a, e(this.node, { viewBox: c }), b.stop()
            })(-1), b.on("snap.util.attr.transform", function(a) { this.transform(a), b.stop() })(-1), b.on("snap.util.attr.r", function(a) { "rect" == this.type && (b.stop(), e(this.node, { rx: a, ry: a })) })(-1), b.on("snap.util.attr.textpath", function(a) {
                if (b.stop(), "text" == this.type) {
                    var c, d, g;
                    if (!a && this.textPath) { for (d = this.textPath; d.node.firstChild;) this.node.appendChild(d.node.firstChild); return d.remove(), delete this.textPath, void 0 }
                    if (f(a, "string")) {
                        var h = r(this),
                            i = z(h.parentNode).path(a);
                        h.appendChild(i.node), c = i.id, i.attr({ id: c })
                    } else a = z(a), a instanceof u && (c = a.attr("id"), c || (c = a.id, a.attr({ id: c })));
                    if (c)
                        if (d = this.textPath, g = this.node, d) d.attr({ "xlink:href": "#" + c });
                        else {
                            for (d = e("textPath", { "xlink:href": "#" + c }); g.firstChild;) d.appendChild(g.firstChild);
                            g.appendChild(d), this.textPath = z(d)
                        }
                }
            })(-1), b.on("snap.util.attr.text", function(a) {
                if ("text" == this.type) {
                    for (var c = this.node, d = function(a) {
                            var b = e("tspan");
                            if (f(a, "array"))
                                for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                            else b.appendChild(I.doc.createTextNode(a));
                            return b.normalize && b.normalize(), b
                        }; c.firstChild;) c.removeChild(c.firstChild);
                    for (var g = d(a); g.firstChild;) c.appendChild(g.firstChild)
                }
                b.stop()
            })(-1);
            var tb = { "alignment-baseline": 0, "baseline-shift": 0, clip: 0, "clip-path": 0, "clip-rule": 0, color: 0, "color-interpolation": 0, "color-interpolation-filters": 0, "color-profile": 0, "color-rendering": 0, cursor: 0, direction: 0, display: 0, "dominant-baseline": 0, "enable-background": 0, fill: 0, "fill-opacity": 0, "fill-rule": 0, filter: 0, "flood-color": 0, "flood-opacity": 0, font: 0, "font-family": 0, "font-size": 0, "font-size-adjust": 0, "font-stretch": 0, "font-style": 0, "font-variant": 0, "font-weight": 0, "glyph-orientation-horizontal": 0, "glyph-orientation-vertical": 0, "image-rendering": 0, kerning: 0, "letter-spacing": 0, "lighting-color": 0, marker: 0, "marker-end": 0, "marker-mid": 0, "marker-start": 0, mask: 0, opacity: 0, overflow: 0, "pointer-events": 0, "shape-rendering": 0, "stop-color": 0, "stop-opacity": 0, stroke: 0, "stroke-dasharray": 0, "stroke-dashoffset": 0, "stroke-linecap": 0, "stroke-linejoin": 0, "stroke-miterlimit": 0, "stroke-opacity": 0, "stroke-width": 0, "text-anchor": 0, "text-decoration": 0, "text-rendering": 0, "unicode-bidi": 0, visibility: 0, "word-spacing": 0, "writing-mode": 0 };
            b.on("snap.util.attr", function(a) {
                    var c = b.nt(),
                        d = {};
                    c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
                    var f = c.replace(/-(\w)/gi, function(a, b) { return b.toUpperCase() }),
                        g = c.replace(/[A-Z]/g, function(a) { return "-" + a.toLowerCase() });
                    tb[J](g) ? this.node.style[f] = null == a ? S : a : e(this.node, d)
                }), b.on("snap.util.getattr.transform", function() { return b.stop(), this.transform() })(-1), b.on("snap.util.getattr.textpath", function() { return b.stop(), this.textPath })(-1),
                function() {
                    function a(a) { return function() { b.stop(); var c = I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + a); return "none" == c ? c : d(I.doc.getElementById(c.match(W)[1])) } }

                    function c(a) { return function(c) { b.stop(); var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1); if ("" == c || !c) return this.node.style[d] = "none", void 0; if ("marker" == c.type) { var f = c.node.id; return f || e(c.node, { id: c.id }), this.node.style[d] = ib(f), void 0 } } }
                    b.on("snap.util.getattr.marker-end", a("end"))(-1), b.on("snap.util.getattr.markerEnd", a("end"))(-1), b.on("snap.util.getattr.marker-start", a("start"))(-1), b.on("snap.util.getattr.markerStart", a("start"))(-1), b.on("snap.util.getattr.marker-mid", a("mid"))(-1), b.on("snap.util.getattr.markerMid", a("mid"))(-1), b.on("snap.util.attr.marker-end", c("end"))(-1), b.on("snap.util.attr.markerEnd", c("end"))(-1), b.on("snap.util.attr.marker-start", c("start"))(-1), b.on("snap.util.attr.markerStart", c("start"))(-1), b.on("snap.util.attr.marker-mid", c("mid"))(-1), b.on("snap.util.attr.markerMid", c("mid"))(-1)
                }(), b.on("snap.util.getattr.r", function() { return "rect" == this.type && e(this.node, "rx") == e(this.node, "ry") ? (b.stop(), e(this.node, "rx")) : void 0 })(-1), b.on("snap.util.getattr.text", function() { if ("text" == this.type || "tspan" == this.type) { b.stop(); var a = H(this.node); return 1 == a.length ? a[0] : a } })(-1), b.on("snap.util.getattr.#text", function() { return this.node.textContent })(-1), b.on("snap.util.getattr.viewBox", function() { b.stop(); var a = e(this.node, "viewBox").split(Y); return d._.box(+a[0], +a[1], +a[2], +a[3]) })(-1), b.on("snap.util.getattr.points", function() { var a = e(this.node, "points"); return b.stop(), a.split(Y) }), b.on("snap.util.getattr.path", function() { var a = e(this.node, "d"); return b.stop(), a }), b.on("snap.util.getattr", function() {
                    var a = b.nt();
                    a = a.substring(a.lastIndexOf(".") + 1);
                    var c = a.replace(/[A-Z]/g, function(a) { return "-" + a.toLowerCase() });
                    return tb[J](c) ? I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
                });
            var ub = function(a) {
                var b = a.getBoundingClientRect(),
                    c = a.ownerDocument,
                    d = c.body,
                    e = c.documentElement,
                    f = e.clientTop || d.clientTop || 0,
                    h = e.clientLeft || d.clientLeft || 0,
                    i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                    j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                return { y: i, x: j }
            };
            return d.getElementByPoint = function(a, b) {
                var c = this,
                    d = (c.canvas, I.doc.elementFromPoint(a, b));
                if (I.win.opera && "svg" == d.tagName) {
                    var e = ub(d),
                        f = d.createSVGRect();
                    f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                    var g = d.getIntersectionList(f, null);
                    g.length && (d = g[g.length - 1])
                }
                return d ? z(d) : null
            }, d.plugin = function(a) { a(d, u, y, I) }, I.win.Snap = d, d
        }();
    return d.plugin(function(a, b) {
        function c(a) { var b = c.ps = c.ps || {}; return b[a] ? b[a].sleep = 100 : b[a] = { sleep: 100 }, setTimeout(function() { for (var c in b) b[L](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]) }), b[a] }

        function d(a, b, c, d) { return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), { x: a, y: b, width: c, w: c, height: d, h: d, x2: a + c, y2: b + d, cx: a + c / 2, cy: b + d / 2, r1: O.min(c, d) / 2, r2: O.max(c, d) / 2, r0: O.sqrt(c * c + d * d) / 2, path: w(a, b, c, d), vb: [a, b, c, d].join(" ") } }

        function e() { return this.join(",").replace(M, "$1") }

        function f(a) { var b = K(a); return b.toString = e, b }

        function g(a, b, c, d, e, f, g, h, j) { return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j)) }

        function h(c, d) {
            function e(a) { return +(+a).toFixed(3) }
            return a._.cacher(function(a, f, h) {
                a instanceof b && (a = a.attr("d")), a = F(a);
                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
                    else {
                        if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                continue
                            }
                            if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                        }
                        q += m, j = +l[5], k = +l[6]
                    }
                    o += l.shift() + l
                }
                return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
            }, null, a._.clone)
        }

        function i(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i,
                k = S(j, 3),
                l = S(j, 2),
                m = i * i,
                n = m * i,
                o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                u = j * a + i * c,
                v = j * b + i * d,
                w = j * e + i * g,
                x = j * f + i * h,
                y = 90 - 180 * O.atan2(q - s, r - t) / P;
            return { x: o, y: p, m: { x: q, y: r }, n: { x: s, y: t }, start: { x: u, y: v }, end: { x: w, y: x }, alpha: y }
        }

        function j(b, c, e, f, g, h, i, j) { a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]); var k = E.apply(null, b); return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y) }

        function k(a, b, c) { return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height }

        function l(a, b) { return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y) }

        function m(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e,
                g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c
        }

        function n(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j,
                    r = m(q, a, c, e, g),
                    s = m(q, b, d, f, h),
                    t = r * r + s * s;
                o += n[p] * O.sqrt(t)
            }
            return j * o
        }

        function o(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1,
                    l = k / 2,
                    m = k - l,
                    o = .01;
                for (j = n(a, b, c, d, e, f, g, h, m); T(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                return m
            }
        }

        function p(a, b, c, d, e, f, g, h) {
            if (!(R(a, c) < Q(e, g) || Q(a, c) > R(e, g) || R(b, d) < Q(f, h) || Q(b, d) > R(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                    j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                    k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k,
                        m = j / k,
                        n = +l.toFixed(2),
                        o = +m.toFixed(2);
                    if (!(n < +Q(a, c).toFixed(2) || n > +R(a, c).toFixed(2) || n < +Q(e, g).toFixed(2) || n > +R(e, g).toFixed(2) || o < +Q(b, d).toFixed(2) || o > +R(b, d).toFixed(2) || o < +Q(f, h).toFixed(2) || o > +R(f, h).toFixed(2))) return { x: l, y: m }
                }
            }
        }

        function q(a, b, c) {
            var d = j(a),
                e = j(b);
            if (!l(d, e)) return c ? 0 : [];
            for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 5), k = ~~(g / 5), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = i.apply(0, a.concat(s / h));
                m.push({ x: t.x, y: t.y, t: s / h })
            }
            for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({ x: t.x, y: t.y, t: s / k });
            for (s = 0; h > s; s++)
                for (var u = 0; k > u; u++) {
                    var v = m[s],
                        w = m[s + 1],
                        x = o[u],
                        y = o[u + 1],
                        z = T(w.x - v.x) < .001 ? "y" : "x",
                        A = T(y.x - x.x) < .001 ? "y" : "x",
                        B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                    if (B) {
                        if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                        q[B.x.toFixed(4)] = B.y.toFixed(4);
                        var C = v.t + T((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                            D = x.t + T((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                        C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({ x: B.x, y: B.y, t1: C, t2: D }))
                    }
                }
            return r
        }

        function r(a, b) { return t(a, b) }

        function s(a, b) { return t(a, b, 1) }

        function t(a, b, c) {
            a = F(a), b = F(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var r = a[o];
                if ("M" == r[0]) d = h = r[1], e = i = r[2];
                else {
                    "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                    for (var s = 0, t = b.length; t > s; s++) {
                        var u = b[s];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2];
                        else {
                            "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                            var v = q(l, m, c);
                            if (c) n += v;
                            else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v)
                            }
                        }
                    }
                }
            }
            return n
        }

        function u(a, b, c) {
            var d = v(a);
            return k(d, b, c) && 1 == t(a, [
                ["M", b, c],
                ["H", d.x2 + 10]
            ], 1) % 2
        }

        function v(a) {
            var b = c(a);
            if (b.bbox) return K(b.bbox);
            if (!a) return d();
            a = F(a);
            for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
                else {
                    var l = E(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                    h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
                }
            var m = Q.apply(0, h),
                n = Q.apply(0, i),
                o = R.apply(0, h),
                p = R.apply(0, i),
                q = d(m, n, o - m, p - n);
            return b.bbox = K(q), q
        }

        function w(a, b, c, d, f) {
            if (f) return [
                ["M", a + f, b],
                ["l", c - 2 * f, 0],
                ["a", f, f, 0, 0, 1, f, f],
                ["l", 0, d - 2 * f],
                ["a", f, f, 0, 0, 1, -f, f],
                ["l", 2 * f - c, 0],
                ["a", f, f, 0, 0, 1, -f, -f],
                ["l", 0, 2 * f - d],
                ["a", f, f, 0, 0, 1, f, -f],
                ["z"]
            ];
            var g = [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ];
            return g.toString = e, g
        }

        function x(a, b, c, d, f) {
            if (null == f && null == d && (d = c), null != f) var g = Math.PI / 180,
                h = a + c * Math.cos(-d * g),
                i = a + c * Math.cos(-f * g),
                j = b + c * Math.sin(-d * g),
                k = b + c * Math.sin(-f * g),
                l = [
                    ["M", h, j],
                    ["A", c, c, 0, +(f - d > 180), 0, i, k]
                ];
            else l = [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ];
            return l.toString = e, l
        }

        function y(b) {
            var d = c(b),
                g = String.prototype.toLowerCase;
            if (d.rel) return f(d.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = h[n] = [],
                    q = b[n];
                if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                    case "a":
                        p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                        break;
                    case "v":
                        p[1] = +(q[1] - j).toFixed(3);
                        break;
                    case "m":
                        k = q[1], l = q[2];
                    default:
                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                } else { p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j); for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t] }
                var v = h[n].length;
                switch (h[n][0]) {
                    case "z":
                        i = k, j = l;
                        break;
                    case "h":
                        i += +h[n][v - 1];
                        break;
                    case "v":
                        j += +h[n][v - 1];
                        break;
                    default:
                        i += +h[n][v - 2], j += +h[n][v - 1]
                }
            }
            return h.toString = e, d.rel = f(h), h
        }

        function z(b) {
            var d = c(b);
            if (d.abs) return f(d.abs);
            if (J(b, "array") && J(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
                ["M", 0, 0]
            ];
            var g, h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
                        case "A":
                            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +(o[6] + i), n[7] = +(o[7] + j);
                            break;
                        case "V":
                            n[1] = +o[1] + j;
                            break;
                        case "H":
                            n[1] = +o[1] + i;
                            break;
                        case "R":
                            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                            h.pop(), h = h.concat(H(s, p));
                            break;
                        case "O":
                            h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                            break;
                        case "U":
                            h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                            break;
                        case "M":
                            k = +o[1] + i, l = +o[2] + j;
                        default:
                            for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                    } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(H(s, p)), n = ["R"].concat(o.slice(-2));
                    else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                else
                    for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                    case "Z":
                        i = k, j = l;
                        break;
                    case "H":
                        i = n[1];
                        break;
                    case "V":
                        j = n[1];
                        break;
                    case "M":
                        k = n[n.length - 2], l = n[n.length - 1];
                    default:
                        i = n[n.length - 2], j = n[n.length - 1]
                }
            }
            return h.toString = e, d.abs = f(h), h
        }

        function A(a, b, c, d) { return [a, b, c, d, c, d] }

        function B(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }

        function C(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * P / 180,
                n = P / 180 * (+f || 0),
                o = [],
                p = a._.cacher(function(a, b, c) {
                    var d = a * O.cos(c) - b * O.sin(c),
                        e = a * O.sin(c) + b * O.cos(c);
                    return { x: d, y: e }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (O.cos(P / 180 * f), O.sin(P / 180 * f), (b - i) / 2),
                    r = (c - j) / 2,
                    s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = O.sqrt(s), d = s * d, e = s * e);
                var t = d * d,
                    u = e * e,
                    v = (g == h ? -1 : 1) * O.sqrt(T((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * d * r / e + (b + i) / 2,
                    x = v * -e * q / d + (c + j) / 2,
                    y = O.asin(((c - x) / e).toFixed(9)),
                    z = O.asin(((j - x) / e).toFixed(9));
                y = w > b ? P - y : y, z = w > i ? P - z : z, 0 > y && (y = 2 * P + y), 0 > z && (z = 2 * P + z), h && y > z && (y -= 2 * P), !h && z > y && (z -= 2 * P)
            }
            var A = z - y;
            if (T(A) > m) {
                var B = z,
                    D = i,
                    E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * O.cos(z), j = x + e * O.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
            }
            A = z - y;
            var F = O.cos(y),
                G = O.sin(y),
                H = O.cos(z),
                I = O.sin(z),
                J = O.tan(A / 4),
                K = 4 / 3 * d * J,
                L = 4 / 3 * e * J,
                M = [b, c],
                N = [b + K * G, c - L * F],
                Q = [i + K * I, j - L * H],
                R = [i, j];
            if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k) return [N, Q, R].concat(o);
            o = [N, Q, R].concat(o).join().split(",");
            for (var S = [], U = 0, V = o.length; V > U; U++) S[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
            return S
        }

        function D(a, b, c, d, e, f, g, h, i) { var j = 1 - i; return { x: S(j, 3) * a + 3 * S(j, 2) * i * c + 3 * j * i * i * e + S(i, 3) * g, y: S(j, 3) * b + 3 * S(j, 2) * i * d + 3 * j * i * i * f + S(i, 3) * h } }

        function E(a, b, c, d, e, f, g, h) {
            var i, j = e - 2 * c + a - (g - 2 * e + c),
                k = 2 * (c - a) - 2 * (e - c),
                l = a - c,
                m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j,
                n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j,
                o = [b, h],
                p = [a, g];
            return T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j, T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), { min: { x: Q.apply(0, p), y: Q.apply(0, o) }, max: { x: R.apply(0, p), y: R.apply(0, o) } }
        }

        function F(a, b) {
            var d = !b && c(a);
            if (!b && d.curve) return f(d.curve);
            for (var e = z(a), g = b && z(b), h = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, i = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, j = (function(a, b) {
                    var c, d;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in { T: 1, Q: 1 }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case "S":
                            c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d].concat(a.slice(1));
                            break;
                        case "T":
                            b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), k = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                        a.splice(b, 1), n = R(e.length, g && g.length || 0)
                    }
                }, l = function(a, b, c, d, f) { a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], n = R(e.length, g && g.length || 0)) }, m = 0, n = R(e.length, g && g.length || 0); n > m; m++) {
                e[m] = j(e[m], h), k(e, m), g && (g[m] = j(g[m], i)), g && k(g, m), l(e, g, h, i, m), l(g, e, i, h, m);
                var o = e[m],
                    p = g && g[m],
                    q = o.length,
                    r = g && p.length;
                h.x = o[q - 2], h.y = o[q - 1], h.bx = N(o[q - 4]) || h.x, h.by = N(o[q - 3]) || h.y, i.bx = g && (N(p[r - 4]) || i.x), i.by = g && (N(p[r - 3]) || i.y), i.x = g && p[r - 2], i.y = g && p[r - 1]
            }
            return g || (d.curve = f(e)), g ? [e, g] : e
        }

        function G(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = F(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        }

        function H(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [{ x: +a[d - 2], y: +a[d - 1] }, { x: +a[d], y: +a[d + 1] }, { x: +a[d + 2], y: +a[d + 3] }, { x: +a[d + 4], y: +a[d + 5] }];
                b ? d ? e - 4 == d ? f[3] = { x: +a[0], y: +a[1] } : e - 2 == d && (f[2] = { x: +a[0], y: +a[1] }, f[3] = { x: +a[2], y: +a[3] }) : f[0] = { x: +a[e - 2], y: +a[e - 1] } : e - 4 == d ? f[3] = f[2] : d || (f[0] = { x: +a[d], y: +a[d + 1] }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
            }
            return c
        }
        var I = b.prototype,
            J = a.is,
            K = a._.clone,
            L = "hasOwnProperty",
            M = /,?([a-z]),?/gi,
            N = parseFloat,
            O = Math,
            P = O.PI,
            Q = O.min,
            R = O.max,
            S = O.pow,
            T = O.abs,
            U = h(1),
            V = h(),
            W = h(0, 1),
            X = a._unit2px,
            Y = { path: function(a) { return a.attr("path") }, circle: function(a) { var b = X(a); return x(b.cx, b.cy, b.r) }, ellipse: function(a) { var b = X(a); return x(b.cx, b.cy, b.rx, b.ry) }, rect: function(a) { var b = X(a); return w(b.x, b.y, b.width, b.height, b.rx, b.ry) }, image: function(a) { var b = X(a); return w(b.x, b.y, b.width, b.height) }, text: function(a) { var b = a.node.getBBox(); return w(b.x, b.y, b.width, b.height) }, g: function(a) { var b = a.node.getBBox(); return w(b.x, b.y, b.width, b.height) }, symbol: function(a) { var b = a.getBBox(); return w(b.x, b.y, b.width, b.height) }, line: function(a) { return "M" + [a.attr("x1"), a.attr("y1"), a.attr("x2"), a.attr("y2")] }, polyline: function(a) { return "M" + a.attr("points") }, polygon: function(a) { return "M" + a.attr("points") + "z" }, svg: function(a) { var b = a.node.getBBox(); return w(b.x, b.y, b.width, b.height) }, deflt: function(a) { var b = a.node.getBBox(); return w(b.x, b.y, b.width, b.height) } };
        a.path = c, a.path.getTotalLength = U, a.path.getPointAtLength = V, a.path.getSubpath = function(a, b, c) { if (this.getTotalLength(a) - c < 1e-6) return W(a, b).end; var d = W(a, c, 1); return b ? W(d, b).end : d }, I.getTotalLength = function() { return this.node.getTotalLength ? this.node.getTotalLength() : void 0 }, I.getPointAtLength = function(a) { return V(this.attr("d"), a) }, I.getSubpath = function(b, c) { return a.path.getSubpath(this.attr("d"), b, c) }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = Y, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = F, a.path.map = G, a.path.toString = e, a.path.clone = f
    }), d.plugin(function(a) {
        var b = Math.max,
            c = Math.min,
            d = function(a) {
                if (this.items = [], this.length = 0, this.type = "set", a)
                    for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
            },
            e = d.prototype;
        e.push = function() { for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++); return this }, e.pop = function() { return this.length && delete this[this.length--], this.items.pop() }, e.forEach = function(a, b) {
            for (var c = 0, d = this.items.length; d > c; c++)
                if (a.call(b, this.items[c], c) === !1) return this;
            return this
        }, e.remove = function() { for (; this.length;) this.pop().remove(); return this }, e.attr = function(a) { for (var b = 0, c = this.items.length; c > b; b++) this.items[b].attr(a); return this }, e.clear = function() { for (; this.length;) this.pop() }, e.splice = function(a, e) {
            a = 0 > a ? b(this.length + a, 0) : a, e = b(0, c(this.length - a, e));
            var f, g = [],
                h = [],
                i = [];
            for (f = 2; f < arguments.length; f++) i.push(arguments[f]);
            for (f = 0; e > f; f++) h.push(this[a + f]);
            for (; f < this.length - a; f++) g.push(this[a + f]);
            var j = i.length;
            for (f = 0; f < j + g.length; f++) this.items[a + f] = this[a + f] = j > f ? i[f] : g[f - j];
            for (f = this.items.length = this.length -= e - j; this[f];) delete this[f++];
            return new d(h)
        }, e.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0;
            return !1
        }, e.insertAfter = function(a) { for (var b = this.items.length; b--;) this.items[b].insertAfter(a); return this }, e.getBBox = function() {
            for (var a = [], d = [], e = [], f = [], g = this.items.length; g--;)
                if (!this.items[g].removed) {
                    var h = this.items[g].getBBox();
                    a.push(h.x), d.push(h.y), e.push(h.x + h.width), f.push(h.y + h.height)
                }
            return a = c.apply(0, a), d = c.apply(0, d), e = b.apply(0, e), f = b.apply(0, f), { x: a, y: d, x2: e, y2: f, width: e - a, height: f - d, cx: a + (e - a) / 2, cy: d + (f - d) / 2 }
        }, e.clone = function(a) { a = new d; for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone()); return a }, e.toString = function() { return "Snap‘s set" }, e.type = "set", a.set = function() { var a = new d; return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a }
    }), d.plugin(function(a, b) {
        function c(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }

        function d(b, d, e) {
            d = l(d).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], d = a.parseTransformString(d) || [];
            for (var f, g, j, k, m = Math.max(b.length, d.length), n = [], o = [], p = 0; m > p; p++) {
                if (j = b[p] || c(d[p]), k = d[p] || c(j), j[0] != k[0] || "r" == j[0].toLowerCase() && (j[2] != k[2] || j[3] != k[3]) || "s" == j[0].toLowerCase() && (j[3] != k[3] || j[4] != k[4])) {
                    b = a._.transform2matrix(b, e()), d = a._.transform2matrix(d, e()), n = [
                        ["m", b.a, b.b, b.c, b.d, b.e, b.f]
                    ], o = [
                        ["m", d.a, d.b, d.c, d.d, d.e, d.f]
                    ];
                    break
                }
                for (n[p] = [], o[p] = [], f = 0, g = Math.max(j.length, k.length); g > f; f++) f in j && (n[p][f] = j[f]), f in k && (o[p][f] = k[f])
            }
            return { from: i(n), to: i(o), f: h(n) }
        }

        function e(a) { return a }

        function f(a) { return function(b) { return +b.toFixed(3) + a } }

        function g(b) { return a.rgb(b[0], b[1], b[2]) }

        function h(a) {
            var b, c, d, e, f, g, h = 0,
                i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                f += g + "]", i[b] = f
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])")
        }

        function i(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b
        }
        var j = {},
            k = /[a-z]+$/i,
            l = String;
        j.stroke = j.fill = "colour", b.prototype.equal = function(b, c) {
            var m, n, o = l(this.attr(b) || ""),
                p = this;
            if (o == +o && c == +c) return { from: +o, to: +c, f: e };
            if ("colour" == j[b]) return m = a.color(o), n = a.color(c), { from: [m.r, m.g, m.b, m.opacity], to: [n.r, n.g, n.b, n.opacity], f: g };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), d(o, c, function() { return p.getBBox(1) });
            if ("d" == b || "path" == b) return m = a.path.toCubic(o, c), { from: i(m[0]), to: i(m[1]), f: h(m[0]) };
            if ("points" == b) return m = l(o).split(","), n = l(c).split(","), { from: m, to: n, f: function(a) { return a } };
            var q = o.match(k),
                r = l(c).match(k);
            return q && q == r ? { from: parseFloat(o), to: parseFloat(c), f: f(q) } : { from: this.asPX(b), to: this.asPX(b, c), f: e }
        }
    }), d.plugin(function(a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }, k = function(a) { var b = "y" == a ? "scrollTop" : "scrollLeft"; return e.doc.documentElement[b] || e.doc.body[b] }, l = function() { this.returnValue = !1 }, m = function() { return this.originalEvent.preventDefault() }, n = function() { this.cancelBubble = !0 }, o = function() { return this.originalEvent.stopPropagation() }, p = function() {
                return e.doc.addEventListener ? function(a, b, c, d) {
                    var e = h && j[b] ? j[b] : b,
                        f = function(e) {
                            var f = k("y"),
                                i = k("x");
                            if (h && j[g](b))
                                for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++)
                                    if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
                                        var p = e;
                                        e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;
                                        break
                                    }
                            var q = e.clientX + i,
                                r = e.clientY + f;
                            return c.call(d, e, q, r)
                        };
                    return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
                        function() { return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0 }
                } : e.doc.attachEvent ? function(a, b, c, d) {
                    var f = function(a) {
                        a = a || e.win.event;
                        var b = k("y"),
                            f = k("x"),
                            g = a.clientX + f,
                            h = a.clientY + b;
                        return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, g, h)
                    };
                    a.attachEvent("on" + b, f);
                    var g = function() { return a.detachEvent("on" + b, f), !0 };
                    return g
                } : void 0
            }(), q = [], r = function(c) {
                for (var d, e = c.clientX, f = c.clientY, g = k("y"), i = k("x"), j = q.length; j--;) {
                    if (d = q[j], h) {
                        for (var l, m = c.touches && c.touches.length; m--;)
                            if (l = c.touches[m], l.identifier == d.el._drag.id || d.el.node.contains(l.target)) { e = l.clientX, f = l.clientY, (c.originalEvent ? c.originalEvent : c).preventDefault(); break }
                    } else c.preventDefault();
                    var n = d.el.node;
                    a._.glob, n.nextSibling, n.parentNode, n.style.display, e += i, f += g, b("snap.drag.move." + d.el.id, d.move_scope || d.el, e - d.el._drag.x, f - d.el._drag.y, e, f, c)
                }
            }, s = function(c) {
                a.unmousemove(r).unmouseup(s);
                for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
                q = []
            }, t = i.length; t--;) ! function(b) {
            a[b] = f[b] = function(c, d) { return a.is(c, "function") && (this.events = this.events || [], this.events.push({ name: b, f: c, unbind: p(this.shape || this.node || e.doc, b, c, d || this) })), this }, a["un" + b] = f["un" + b] = function(a) {
                for (var c = this.events || [], d = c.length; d--;)
                    if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                return this
            }
        }(i[t]);
        f.hover = function(a, b, c, d) { return this.mouseover(a, c).mouseout(b, d || c) }, f.unhover = function(a, b) { return this.unmouseover(a).unmouseout(b) };
        var u = [];
        f.drag = function(c, d, e, f, g, h) {
            function i(i, j, k) {
                (i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({ el: this, move_scope: f, start_scope: g, end_scope: h }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i)
            }
            if (!arguments.length) { var j; return this.drag(function(a, b) { this.attr({ transform: j + (j ? "T" : "t") + [a, b] }) }, function() { j = this.transform().local }) }
            return this._drag = {}, u.push({ el: this, start: i }), this.mousedown(i), this
        }, f.undrag = function() { for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id)); return !u.length && a.unmousemove(r).unmouseup(s), this }
    }), d.plugin(function(a, c, d) {
        var e = (c.prototype, d.prototype),
            f = /^\s*url\((.+)\)/,
            g = String,
            h = a._.$;
        a.filter = {}, e.filter = function(b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(g(b)),
                f = a._.id(),
                i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
            return h(i, { id: f, filterUnits: "userSpaceOnUse" }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
        }, b.on("snap.util.getattr.filter", function() { b.stop(); var c = h(this.node, "filter"); if (c) { var d = g(c).match(f); return d && a.select(d[1]) } }), b.on("snap.util.attr.filter", function(d) {
            if (d instanceof c && "filter" == d.type) {
                b.stop();
                var e = d.node.id;
                e || (h(d.node, { id: d.id }), e = d.id), h(this.node, { filter: a.url(e) })
            }
            d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function(b, c) { null == b && (b = 2); var d = null == c ? b : [b, c]; return a.format('<feGaussianBlur stdDeviation="{def}"/>', { def: d }) }, a.filter.blur.toString = function() { return this() }, a.filter.shadow = function(b, c, d, e) {
            return e = e || "#000", null == d && (d = 4), "string" == typeof d && (e = d, d = 4), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', { color: e, dx: b, dy: c, blur: d })
        }, a.filter.shadow.toString = function() { return this() }, a.filter.grayscale = function(b) { return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', { a: .2126 + .7874 * (1 - b), b: .7152 - .7152 * (1 - b), c: .0722 - .0722 * (1 - b), d: .2126 - .2126 * (1 - b), e: .7152 + .2848 * (1 - b), f: .0722 - .0722 * (1 - b), g: .2126 - .2126 * (1 - b), h: .0722 + .9278 * (1 - b) }) }, a.filter.grayscale.toString = function() { return this() }, a.filter.sepia = function(b) { return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', { a: .393 + .607 * (1 - b), b: .769 - .769 * (1 - b), c: .189 - .189 * (1 - b), d: .349 - .349 * (1 - b), e: .686 + .314 * (1 - b), f: .168 - .168 * (1 - b), g: .272 - .272 * (1 - b), h: .534 - .534 * (1 - b), i: .131 + .869 * (1 - b) }) }, a.filter.sepia.toString = function() { return this() }, a.filter.saturate = function(b) { return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', { amount: 1 - b }) }, a.filter.saturate.toString = function() { return this() }, a.filter.hueRotate = function(b) { return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', { angle: b }) }, a.filter.hueRotate.toString = function() { return this() }, a.filter.invert = function(b) { return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', { amount: b, amount2: 1 - b }) }, a.filter.invert.toString = function() { return this() }, a.filter.brightness = function(b) { return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', { amount: b }) }, a.filter.brightness.toString = function() { return this() }, a.filter.contrast = function(b) { return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', { amount: b, amount2: .5 - b / 2 }) }, a.filter.contrast.toString = function() { return this() }
    }), d
});

/*!
 * animsition v3.4.3
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
! function(a) {
    "use strict";
    var b = "animsition",
        c = {
            init: function(d) {
                d = a.extend({ inClass: "fade-in", outClass: "fade-out", inDuration: 1500, outDuration: 800, linkElement: ".animsition-link", loading: !0, loadingParentElement: "body", loadingClass: "animsition-loading", unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"], overlay: !1, overlayClass: "animsition-overlay-slide", overlayParentElement: "body" }, d);
                var e = c.supportCheck.call(this, d);
                if (!e) return "console" in window || (window.console = {}, window.console.log = function(a) { return a }), console.log("Animsition does not support this browser."), c.destroy.call(this);
                var f = c.optionCheck.call(this, d);
                return f && c.addOverlay.call(this, d), d.loading && c.addLoading.call(this, d), this.each(function() {
                    var e = this,
                        f = a(this),
                        g = a(window),
                        h = f.data(b);
                    h || (d = a.extend({}, d), f.data(b, { options: d }), g.on("load." + b + " pageshow." + b, function() { c.pageIn.call(e) }), g.on("unload." + b, function() {}), a(d.linkElement).on("click." + b, function(b) {
                        b.preventDefault();
                        var d = a(this);
                        c.pageOut.call(e, d)
                    }))
                })
            },
            addOverlay: function(b) { a(b.overlayParentElement).prepend('<div class="' + b.overlayClass + '"></div>') },
            addLoading: function(b) { a(b.loadingParentElement).append('<div class="' + b.loadingClass + '"></div>') },
            removeLoading: function() {
                var c = a(this),
                    d = c.data(b).options,
                    e = a(d.loadingParentElement).children("." + d.loadingClass);
                e.fadeOut().remove()
            },
            supportCheck: function(b) {
                var c = a(this),
                    d = b.unSupportCss,
                    e = d.length,
                    f = !1;
                0 === e && (f = !0);
                for (var g = 0; e > g; g++)
                    if ("string" == typeof c.css(d[g])) { f = !0; break }
                return f
            },
            optionCheck: function(b) { var c, d = a(this); return c = b.overlay || d.data("animsition-overlay") ? !0 : !1 },
            animationCheck: function(c, d, e) {
                var f = a(this),
                    g = f.data(b).options,
                    h = typeof c,
                    i = !d && "number" === h,
                    j = d && "string" === h && c.length > 0;
                return i || j ? c = c : d && e ? c = g.inClass : !d && e ? c = g.inDuration : d && !e ? c = g.outClass : d || e || (c = g.outDuration), c
            },
            pageIn: function() {
                var d = this,
                    e = a(this),
                    f = e.data(b).options,
                    g = e.data("animsition-in-duration"),
                    h = e.data("animsition-in"),
                    i = c.animationCheck.call(d, g, !1, !0),
                    j = c.animationCheck.call(d, h, !0, !0),
                    k = c.optionCheck.call(d, f);
                f.loading && c.removeLoading.call(d), k ? c.pageInOverlay.call(d, j, i) : c.pageInBasic.call(d, j, i)
            },
            pageInBasic: function(b, c) {
                var d = a(this);
                d.css({ "animation-duration": c / 1e3 + "s" }).addClass(b).animateCallback(function() { d.removeClass(b).css({ opacity: 1 }) })
            },
            pageInOverlay: function(c, d) {
                var e = a(this),
                    f = e.data(b).options;
                e.css({ opacity: 1 }), a(f.overlayParentElement).children("." + f.overlayClass).css({ "animation-duration": d / 1e3 + "s" }).addClass(c)
            },
            pageOut: function(d) {
                var e = this,
                    f = a(this),
                    g = f.data(b).options,
                    h = d.data("animsition-out"),
                    i = f.data("animsition-out"),
                    j = d.data("animsition-out-duration"),
                    k = f.data("animsition-out-duration"),
                    l = h ? h : i,
                    m = j ? j : k,
                    n = c.animationCheck.call(e, l, !0, !1),
                    o = c.animationCheck.call(e, m, !1, !1),
                    p = c.optionCheck.call(e, g),
                    q = d.attr("href");
                p ? c.pageOutOverlay.call(e, n, o, q) : c.pageOutBasic.call(e, n, o, q)
            },
            pageOutBasic: function(b, c, d) {
                var e = a(this);
                e.css({ "animation-duration": c / 1e3 + "s" }).addClass(b).animateCallback(function() { location.href = d })
            },
            pageOutOverlay: function(d, e, f) {
                var g = this,
                    h = a(this),
                    i = h.data(b).options,
                    j = h.data("animsition-in"),
                    k = c.animationCheck.call(g, j, !0, !0);
                a(i.overlayParentElement).children("." + i.overlayClass).css({ "animation-duration": e / 1e3 + "s" }).removeClass(k).addClass(d).animateCallback(function() { h.css({ opacity: 0 }), location.href = f })
            },
            destroy: function() {
                return this.each(function() {
                    var c = a(this);
                    a(window).unbind("." + b), c.css({ opacity: 1 }).removeData(b)
                })
            }
        };
    a.fn.animateCallback = function(b) { var c = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd"; return this.each(function() { a(this).bind(c, function() { return a(this).unbind(c), b.call(this) }) }) }, a.fn.animsition = function(d) { return c[d] ? c[d].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof d && d ? void a.error("Method " + d + " does not exist on jQuery." + b) : c.init.apply(this, arguments) }
}(jQuery);

/*! jQuery UI - v1.11.4 - 2015-10-18
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, tooltip.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) })(function(e) {
    function t(t, s) { var n, a, o, r = t.nodeName.toLowerCase(); return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t) }

    function i(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() { return "hidden" === e.css(this, "visibility") }).length }

    function s(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function a(t) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return t.delegate(i, "mouseout", function() { e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover") }).delegate(i, "mouseover", o) }

    function o() { e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover")) }

    function r(t, i) { e.extend(t, i); for (var s in i) null == i[s] && (t[s] = i[s]); return t }

    function h(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() { var t = e(this); return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function() { var e = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++e) }) } }(),
        removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) { return function(i) { return !!e.data(i, t) } }) : function(t, i, s) { return !!e.data(t, s[3]) },
        focusable: function(i) { return t(i, !isNaN(e.attr(i, "tabindex"))) },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) { return e.each(n, function() { i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
        e.fn["inner" + i] = function(t) { return void 0 === t ? o["inner" + i].call(this) : this.each(function() { e(this).css(a, s(this, t) + "px") }) }, e.fn["outer" + i] = function(t, n) { return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() { e(this).css(a, s(this, t, !0, n) + "px") }) }
    }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) { return function(i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() { e(t).focus(), s && s.call(t) }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() { var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.bind(e + ".ui-disableSelection", function(e) { e.preventDefault() }) } }(),
        enableSelection: function() { return this.unbind(".ui-disableSelection") },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) { var n, a = e.ui[t].prototype; for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]) },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var l = 0,
        u = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try { s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove") } catch (o) {}
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, s) {
        var n, a, o, r, h = {},
            l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) { return !!e.data(t, n) }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t) }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
            return e.isFunction(s) ? (h[t] = function() {
                var e = function() { return i.prototype[t].apply(this, arguments) },
                    n = function(e) { return i.prototype[t].apply(this, e) };
                return function() {
                    var t, i = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++)
            for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(n) {
            var a = "string" == typeof n,
                o = u.call(arguments, 1),
                r = this;
            return a ? this.each(function() { var i, a = e.data(this, s); return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'") }) : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))), this.each(function() {
                var t = e.data(this, s);
                t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
            })), r
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function(t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") },
        _destroy: e.noop,
        widget: function() { return this.element },
        option: function(t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) { var t; for (t in e) this._setOption(t, e[t]); return this },
        _setOption: function(e, t) { return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this },
        enable: function() { return this._setOptions({ disabled: !1 }) },
        disable: function() { return this._setOptions({ disabled: !0 }) },
        _on: function(t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                function r() { return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0 }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function(t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) },
        _delay: function(e, t) {
            function i() { return ("string" == typeof e ? s[e] : e).apply(s, arguments) }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function(t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function(t) { e(t.currentTarget).removeClass("ui-state-hover") } }) },
        _focusable: function(t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function(t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function(t) { e(t.currentTarget).removeClass("ui-state-focus") } }) },
        _trigger: function(t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({ show: "fadeIn", hide: "fadeOut" }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = { effect: n });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) { e(this)[t](), a && a.call(s[0]), i() })
        }
    }), e.widget;
    var d = !1;
    e(document).mouseup(function() { d = !1 }), e.widget("ui.mouse", {
            version: "1.11.4",
            options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function(i) { return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
            },
            _mouseDestroy: function() { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) },
            _mouseDown: function(t) {
                if (!d) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var i = this,
                        s = 1 === t.which,
                        n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) { return i._mouseMove(e) }, this._mouseUpDelegate = function(e) { return i._mouseUp(e) }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) { if (this._mouseMoved) { if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t); if (!t.which) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) },
            _mouseUp: function(t) { return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1 },
            _mouseDistanceMet: function(e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance },
            _mouseDelayMet: function() { return this.mouseDelayMet },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() { return !0 }
        }),
        function() {
            function t(e, t, i) { return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)] }

            function i(t, i) { return parseInt(e.css(t, i), 10) || 0 }

            function s(t) { var i = t[0]; return 9 === i.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : e.isWindow(i) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() } }
            e.ui = e.ui || {};
            var n, a, o = Math.max,
                r = Math.abs,
                h = Math.round,
                l = /left|center|right/,
                u = /top|center|bottom/,
                d = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                p = /%$/,
                f = e.fn.position;
            e.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== n) return n;
                        var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            a = s.children()[0];
                        return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
                    },
                    getScrollInfo: function(t) {
                        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                            a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                        return { width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0 }
                    },
                    getWithinInfo: function(t) {
                        var i = e(t || window),
                            s = e.isWindow(i[0]),
                            n = !!i[0] && 9 === i[0].nodeType;
                        return { element: i, isWindow: s, isDocument: n, offset: i.offset() || { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s || n ? i.width() : i.outerWidth(), height: s || n ? i.height() : i.outerHeight() }
                    }
                }, e.fn.position = function(n) {
                    if (!n || !n.of) return f.apply(this, arguments);
                    n = e.extend({}, n);
                    var p, m, g, v, y, b, _ = e(n.of),
                        x = e.position.getWithinInfo(n.within),
                        w = e.position.getScrollInfo(x),
                        k = (n.collision || "flip").split(" "),
                        T = {};
                    return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function() {
                        var e, t, i = (n[this] || "").split(" ");
                        1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                    }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function() {
                        var s, l, u = e(this),
                            d = u.outerWidth(),
                            c = u.outerHeight(),
                            f = i(this, "marginLeft"),
                            b = i(this, "marginTop"),
                            D = d + f + i(this, "marginRight") + w.width,
                            S = c + b + i(this, "marginBottom") + w.height,
                            M = e.extend({}, y),
                            C = t(T.my, u.outerWidth(), u.outerHeight());
                        "right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += C[0], M.top += C[1], a || (M.left = h(M.left), M.top = h(M.top)), s = { marginLeft: f, marginTop: b }, e.each(["left", "top"], function(t, i) { e.ui.position[k[t]] && e.ui.position[k[t]][i](M, { targetWidth: m, targetHeight: g, elemWidth: d, elemHeight: c, collisionPosition: s, collisionWidth: D, collisionHeight: S, offset: [p[0] + C[0], p[1] + C[1]], my: n.my, at: n.at, within: x, elem: u }) }), n.using && (l = function(e) {
                            var t = v.left - M.left,
                                i = t + m - d,
                                s = v.top - M.top,
                                a = s + g - c,
                                h = { target: { element: _, left: v.left, top: v.top, width: m, height: g }, element: { element: u, left: M.left, top: M.top, width: d, height: c }, horizontal: 0 > i ? "left" : t > 0 ? "right" : "center", vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle" };
                            d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
                        }), u.offset(e.extend(M, { using: l }))
                    })
                }, e.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollLeft : s.offset.left,
                                a = s.width,
                                r = e.left - t.collisionPosition.marginLeft,
                                h = n - r,
                                l = r + t.collisionWidth - a - n;
                            t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                        },
                        top: function(e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollTop : s.offset.top,
                                a = t.within.height,
                                r = e.top - t.collisionPosition.marginTop,
                                h = n - r,
                                l = r + t.collisionHeight - a - n;
                            t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                        }
                    },
                    flip: {
                        left: function(e, t) {
                            var i, s, n = t.within,
                                a = n.offset.left + n.scrollLeft,
                                o = n.width,
                                h = n.isWindow ? n.scrollLeft : n.offset.left,
                                l = e.left - t.collisionPosition.marginLeft,
                                u = l - h,
                                d = l + t.collisionWidth - o - h,
                                c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                f = -2 * t.offset[0];
                            0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                        },
                        top: function(e, t) {
                            var i, s, n = t.within,
                                a = n.offset.top + n.scrollTop,
                                o = n.height,
                                h = n.isWindow ? n.scrollTop : n.offset.top,
                                l = e.top - t.collisionPosition.marginTop,
                                u = l - h,
                                d = l + t.collisionHeight - o - h,
                                c = "top" === t.my[1],
                                p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                m = -2 * t.offset[1];
                            0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m))
                        }
                    },
                    flipfit: { left: function() { e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments) }, top: function() { e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments) } }
                },
                function() {
                    var t, i, s, n, o, r = document.getElementsByTagName("body")[0],
                        h = document.createElement("div");
                    t = document.createElement(r ? "div" : "body"), s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, r && e.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" });
                    for (o in s) t.style[o] = s[o];
                    t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
                }()
        }(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "drag",
            options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
            _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit() },
            _setOption: function(e, t) { this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName()) },
            _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0) },
            _mouseCapture: function(t) { var i = this.options; return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1) },
            _blockFrames: function(t) { this.iframeBlocks = this.document.find(t).map(function() { var t = e(this); return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0] }) },
            _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
            _blurActiveElement: function(t) { var i = this.document[0]; if (this.handleElement.is(t.target)) try { i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur() } catch (s) {} },
            _mouseStart: function(t) { var i = this.options; return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === e(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0) },
            _refreshOffsets: function(e) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top } },
            _mouseDrag: function(t, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var s = this._uiHash();
                    if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                    this.position = s.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var i = this,
                    s = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { i._trigger("stop", t) !== !1 && i._clear() }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) { return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t) },
            cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this },
            _getHandle: function(t) { return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0 },
            _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle") },
            _removeHandleClassName: function() { this.handleElement.removeClass("ui-draggable-handle") },
            _createHelper: function(t) {
                var i = this.options,
                    s = e.isFunction(i.helper),
                    n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
            _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) },
            _isRootNode: function(e) { return /(html|body)/i.test(e.tagName) || e === this.document[0] },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
                var e = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) }
            },
            _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
            _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
            _setContainment: function() {
                var t, i, s, n = this.options,
                    a = this.document[0];
                return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
            },
            _convertPositionTo: function(e, t) {
                t || (t = this.position);
                var i = "absolute" === e ? 1 : -1,
                    s = this._isRootNode(this.scrollParent[0]);
                return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i }
            },
            _generatePosition: function(e, t) {
                var i, s, n, a, o = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    h = e.pageX,
                    l = e.pageY;
                return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) }
            },
            _clear: function() { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
            _normalizeRightBottom: function() { "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto")) },
            _trigger: function(t, i, s) { return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s) },
            plugins: {},
            _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
        }), e.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, i, s) {
                var n = e.extend({}, i, { item: s.element });
                s.sortables = [], e(s.options.connectToSortable).each(function() {
                    var i = e(this).sortable("instance");
                    i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
                })
            },
            stop: function(t, i, s) {
                var n = e.extend({}, i, { item: s.element });
                s.cancelHelperRemoval = !1, e.each(s.sortables, function() {
                    var e = this;
                    e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
                })
            },
            drag: function(t, i, s) {
                e.each(s.sortables, function() {
                    var n = !1,
                        a = this;
                    a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function() { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function() { return i.helper[0] }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function() { this.refreshPositions() }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function() { this.refreshPositions() }))
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function(t, i, s) {
                var n = e("body"),
                    a = s.options;
                n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._cursor && e("body").css("cursor", n._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function(t, i, s) {
                var n = e(i.helper),
                    a = s.options;
                n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._opacity && e(i.helper).css("opacity", n._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function(e, t, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) },
            drag: function(t, i, s) {
                var n = s.options,
                    a = !1,
                    o = s.scrollParentNotHidden[0],
                    r = s.document[0];
                o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function(t, i, s) {
                var n = s.options;
                s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var t = e(this),
                        i = t.offset();
                    this !== s.element[0] && s.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left })
                })
            },
            drag: function(t, i, s) {
                var n, a, o, r, h, l, u, d, c, p, f = s.options,
                    m = f.snapTolerance,
                    g = i.offset.left,
                    v = g + s.helperProportions.width,
                    y = i.offset.top,
                    b = y + s.helperProportions.height;
                for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d - s.helperProportions.height, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = n || a || o || r || p)
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function(t, i, s) {
                var n, a = s.options,
                    o = e.makeArray(e(a.stack)).sort(function(t, i) { return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0) });
                o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) { e(this).css("zIndex", n + t) }), this.css("zIndex", n + o.length))
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function(t, i, s) {
                var n = e(i.helper),
                    a = s.options;
                n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._zIndex && e(i.helper).css("zIndex", n._zIndex)
            }
        }), e.ui.draggable, e.widget("ui.droppable", {
            version: "1.11.4",
            widgetEventPrefix: "drop",
            options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
            _create: function() {
                var t, i = this.options,
                    s = i.accept;
                this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function(e) { return e.is(s) }, this.proportions = function() { return arguments.length ? (t = arguments[0], void 0) : t ? t : t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function(t) { e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this) },
            _splice: function(e) { for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1) },
            _destroy: function() {
                var t = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(t, i) {
                if ("accept" === t) this.accept = e.isFunction(i) ? i : function(e) { return e.is(i) };
                else if ("scope" === t) {
                    var s = e.ui.ddmanager.droppables[this.options.scope];
                    this._splice(s), this._addToManager(i)
                }
                this._super(t, i)
            },
            _activate: function(t) {
                var i = e.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
            },
            _deactivate: function(t) {
                var i = e.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
            },
            _over: function(t) {
                var i = e.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
            },
            _out: function(t) {
                var i = e.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
            },
            _drop: function(t, i) {
                var s = i || e.ui.ddmanager.current,
                    n = !1;
                return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = e(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, { offset: i.element.offset() }), i.options.tolerance, t) ? (n = !0, !1) : void 0 }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
            },
            ui: function(e) { return { draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs } }
        }), e.ui.intersect = function() {
            function e(e, t, i) { return e >= t && t + i > e }
            return function(t, i, s, n) {
                if (!i.offset) return !1;
                var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
                    o = (t.positionAbs || t.position.absolute).top + t.margins.top,
                    r = a + t.helperProportions.width,
                    h = o + t.helperProportions.height,
                    l = i.offset.left,
                    u = i.offset.top,
                    d = l + i.proportions().width,
                    c = u + i.proportions().height;
                switch (s) {
                    case "fit":
                        return a >= l && d >= r && o >= u && c >= h;
                    case "intersect":
                        return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2;
                    case "pointer":
                        return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width);
                    case "touch":
                        return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d);
                    default:
                        return !1
                }
            }
        }(), e.ui.ddmanager = {
            current: null,
            droppables: { "default": [] },
            prepareOffsets: function(t, i) {
                var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [],
                    o = i ? i.type : null,
                    r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                e: for (s = 0; a.length > s; s++)
                    if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                        for (n = 0; r.length > n; n++)
                            if (r[n] === a[s].element[0]) { a[s].proportions().height = 0; continue e }
                        a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({ width: a[s].element[0].offsetWidth, height: a[s].element[0].offsetHeight }))
                    }
            },
            drop: function(t, i) { var s = !1; return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s },
            dragStart: function(t, i) { t.element.parentsUntil("body").bind("scroll.droppable", function() { t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i) }) },
            drag: function(t, i) {
                t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance, i),
                            r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function() { return e(this).droppable("instance").options.scope === n }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                    }
                })
            },
            dragStop: function(t, i) { t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i) }
        }, e.ui.droppable, e.widget("ui.resizable", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "resize",
            options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null },
            _num: function(e) { return parseInt(e, 10) || 0 },
            _isNumber: function(e) { return !isNaN(parseInt(e, 10)) },
            _hasScroll: function(t, i) {
                if ("hidden" === e(t).css("overflow")) return !1;
                var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                    n = !1;
                return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
            },
            _create: function() {
                var t, i, s, n, a, o = this,
                    r = this.options;
                if (this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({ zIndex: r.zIndex }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
                this._renderAxis = function(t) {
                    var i, s, n, a;
                    t = t || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], { mousedown: o._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() { o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se") }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() { r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show()) }).mouseleave(function() { r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide()) })), this._mouseInit()
            },
            _destroy: function() { this._mouseDestroy(); var t, i = function(t) { e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this },
            _mouseCapture: function(t) { var i, s, n = !1; for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0); return !this.options.disabled && n },
            _mouseStart: function(t) {
                var i, s, n, a = this.options,
                    o = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var i, s, n = this.originalMousePosition,
                    a = this.axis,
                    o = t.pageX - n.left || 0,
                    r = t.pageY - n.top || 0,
                    h = this._change[a];
                return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var i, s, n, a, o, r, h, l = this.options,
                    u = this;
                return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = { width: u.helper.width() - a, height: u.helper.height() - n }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, { top: h, left: r })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } },
            _applyChanges: function() { var e = {}; return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e },
            _updateVirtualBoundaries: function(e) {
                var t, i, s, n, a, o = this.options;
                a = { minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0, maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0, minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0, maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0 }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
            },
            _updateCache: function(e) { this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width) },
            _updateRatio: function(e) {
                var t = this.position,
                    i = this.size,
                    s = this.axis;
                return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries,
                    i = this.axis,
                    s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                    n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                    a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                    o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    h = this.position.top + this.size.height,
                    l = /sw|nw|w/.test(i),
                    u = /nw|ne|n/.test(i);
                return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
            },
            _getPaddingPlusBorderDimensions: function(e) { for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 })
            },
            _renderProxy: function() {
                var t = this.element,
                    i = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(e, t) { return { width: this.originalSize.width + t } },
                w: function(e, t) {
                    var i = this.originalSize,
                        s = this.originalPosition;
                    return { left: s.left + t, width: i.width - t }
                },
                n: function(e, t, i) {
                    var s = this.originalSize,
                        n = this.originalPosition;
                    return { top: n.top + i, height: s.height - i }
                },
                s: function(e, t, i) { return { height: this.originalSize.height + i } },
                se: function(t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s])) },
                sw: function(t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s])) },
                ne: function(t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s])) },
                nw: function(t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s])) }
            },
            _propagate: function(t, i) { e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui()) },
            plugins: {},
            ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
        }), e.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var i = e(this).resizable("instance"),
                    s = i.options,
                    n = i._proportionallyResizeElements,
                    a = n.length && /textarea/i.test(n[0].nodeName),
                    o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                    r = a ? 0 : i.sizeDiff.width,
                    h = { width: i.size.width - r, height: i.size.height - o },
                    l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), {
                    duration: s.animateDuration,
                    easing: s.animateEasing,
                    step: function() {
                        var s = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) };
                        n && n.length && e(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", t)
                    }
                })
            }
        }), e.ui.plugin.add("resizable", "containment", {
            start: function() {
                var t, i, s, n, a, o, r, h = e(this).resizable("instance"),
                    l = h.options,
                    u = h.element,
                    d = l.containment,
                    c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
                c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, s) { i[e] = h._num(t.css("padding" + s)) }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = { height: t.innerHeight() - i[3], width: t.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = { element: c, left: s.left, top: s.top, width: o, height: r }))
            },
            resize: function(t) {
                var i, s, n, a, o = e(this).resizable("instance"),
                    r = o.options,
                    h = o.containerOffset,
                    l = o.position,
                    u = o._aspectRatio || t.shiftKey,
                    d = { top: 0, left: 0 },
                    c = o.containerElement,
                    p = !0;
                c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
            },
            stop: function() {
                var t = e(this).resizable("instance"),
                    i = t.options,
                    s = t.containerOffset,
                    n = t.containerPosition,
                    a = t.containerElement,
                    o = e(t.helper),
                    r = o.offset(),
                    h = o.outerWidth() - t.sizeDiff.width,
                    l = o.outerHeight() - t.sizeDiff.height;
                t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l })
            }
        }), e.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = e(this).resizable("instance"),
                    i = t.options;
                e(i.alsoResize).each(function() {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) })
                })
            },
            resize: function(t, i) {
                var s = e(this).resizable("instance"),
                    n = s.options,
                    a = s.originalSize,
                    o = s.originalPosition,
                    r = { height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0 };
                e(n.alsoResize).each(function() {
                    var t = e(this),
                        s = e(this).data("ui-resizable-alsoresize"),
                        n = {},
                        a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(a, function(e, t) {
                        var i = (s[t] || 0) + (r[t] || 0);
                        i && i >= 0 && (n[t] = i || null)
                    }), t.css(n)
                })
            },
            stop: function() { e(this).removeData("resizable-alsoresize") }
        }), e.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = e(this).resizable("instance"),
                    i = t.options,
                    s = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width })
            },
            stop: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, i = e(this).resizable("instance"),
                    s = i.options,
                    n = i.size,
                    a = i.originalSize,
                    o = i.originalPosition,
                    r = i.axis,
                    h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                    l = h[0] || 1,
                    u = h[1] || 1,
                    d = Math.round((n.width - a.width) / l) * l,
                    c = Math.round((n.height - a.height) / u) * u,
                    p = a.width + d,
                    f = a.height + c,
                    m = s.maxWidth && p > s.maxWidth,
                    g = s.maxHeight && f > s.maxHeight,
                    v = s.minWidth && s.minWidth > p,
                    y = s.minHeight && s.minHeight > f;
                s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p))
            }
        }), e.ui.resizable, e.widget("ui.selectable", e.ui.mouse, {
            version: "1.11.4",
            options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
            _create: function() {
                var t, i = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function() {
                        var t = e(this),
                            i = t.offset();
                        e.data(this, "selectable-item", { element: this, $element: t, left: i.left, top: i.top, right: i.left + t.outerWidth(), bottom: i.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") })
                    })
                }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() { this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy() },
            _mouseStart: function(t) {
                var i = this,
                    s = this.options;
                this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var s = e.data(this, "selectable-item");
                    s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, { unselecting: s.element }))
                }), e(t.target).parents().addBack().each(function() { var s, n = e.data(this, "selectable-item"); return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, { selecting: n.element }) : i._trigger("unselecting", t, { unselecting: n.element }), !1) : void 0 }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, s = this,
                        n = this.options,
                        a = this.opos[0],
                        o = this.opos[1],
                        r = t.pageX,
                        h = t.pageY;
                    return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({ left: a, top: o, width: r - a, height: h - o }), this.selectees.each(function() {
                        var i = e.data(this, "selectable-item"),
                            l = !1;
                        i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, { selecting: i.element }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, { unselecting: i.element }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, { unselecting: i.element })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var i = this;
                return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                    var s = e.data(this, "selectable-item");
                    s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, { unselected: s.element })
                }), e(".ui-selecting", this.element[0]).each(function() {
                    var s = e.data(this, "selectable-item");
                    s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, { selected: s.element })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }), e.widget("ui.sortable", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "sort",
            ready: !1,
            options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
            _isOverAxis: function(e, t, i) { return e >= t && t + i > e },
            _isFloating: function(e) { return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display")) },
            _create: function() { this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 },
            _setOption: function(e, t) { this._super(e, t), "handle" === e && this._setHandleClassName() },
            _setHandleClassName: function() {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function() { this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy(); for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item"); return this },
            _mouseCapture: function(t, i) {
                var s = null,
                    n = !1,
                    a = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() { return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0 }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function() { this === t.target && (n = !0) }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function(t, i, s) {
                var n, a, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                    for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
                return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var i, s, n, a, o = this.options,
                    r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
                        if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                        this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, i) {
                if (t) {
                    if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var s = this,
                            n = this.placeholder.offset(),
                            a = this.options.axis,
                            o = {};
                        a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() { s._clear(t) })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function() { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(); for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this },
            serialize: function(t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    s = [];
                return t = t || {}, e(i).each(function() {
                    var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
                }), !s.length && t.key && s.push(t.key + "="), s.join("&")
            },
            toArray: function(t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    s = [];
                return t = t || {}, i.each(function() { s.push(e(t.item || this).attr(t.attribute || "id") || "") }), s
            },
            _intersectsWith: function(e) {
                var t = this.positionAbs.left,
                    i = t + this.helperProportions.width,
                    s = this.positionAbs.top,
                    n = s + this.helperProportions.height,
                    a = e.left,
                    o = a + e.width,
                    r = e.top,
                    h = r + e.height,
                    l = this.offset.click.top,
                    u = this.offset.click.left,
                    d = "x" === this.options.axis || s + l > r && h > s + l,
                    c = "y" === this.options.axis || t + u > a && o > t + u,
                    p = d && c;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(e) {
                var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    s = t && i,
                    n = this._getDragVerticalDirection(),
                    a = this._getDragHorizontalDirection();
                return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
            },
            _intersectsWithSides: function(e) {
                var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    s = this._getDragVerticalDirection(),
                    n = this._getDragHorizontalDirection();
                return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
            },
            _getDragVerticalDirection: function() { var e = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== e && (e > 0 ? "down" : "up") },
            _getDragHorizontalDirection: function() { var e = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== e && (e > 0 ? "right" : "left") },
            refresh: function(e) { return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this },
            _connectWith: function() { var e = this.options; return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith },
            _getItemsAsjQuery: function(t) {
                function i() { r.push(this) }
                var s, n, a, o, r = [],
                    h = [],
                    l = this._connectWith();
                if (l && t)
                    for (s = l.length - 1; s >= 0; s--)
                        for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--) o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
                return e(r)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = e.grep(this.items, function(e) {
                    for (var i = 0; t.length > i; i++)
                        if (t[i] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var i, s, n, a, o, r, h, l, u = this.items,
                    d = [
                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]
                    ],
                    c = this._connectWith();
                if (c && this.ready)
                    for (i = c.length - 1; i >= 0; i--)
                        for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, { item: this.currentItem }) : e(a.options.items, a.element), a]), this.containers.push(a));
                for (i = d.length - 1; i >= 0; i--)
                    for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 })
            },
            refreshPositions: function(t) {
                this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, s, n, a;
                for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var i, s = t.options;
                s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                    element: function() {
                        var s = t.currentItem[0].nodeName.toLowerCase(),
                            n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                    },
                    update: function(e, n) {
                        (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
            },
            _createTrPlaceholder: function(t, i) {
                var s = this;
                t.children().each(function() { e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i) })
            },
            _contactContainers: function(t) {
                var i, s, n, a, o, r, h, l, u, d, c = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
                            c = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (c)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
                        if (!a && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                        a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var i = this.options,
                    s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
            },
            _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) },
            _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var t = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
            _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var e = this.currentItem.position(); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
            _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
            _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
            _setContainment: function() { var t, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) },
            _convertPositionTo: function(t, i) {
                i || (i = this.position);
                var s = "absolute" === t ? 1 : -1,
                    n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = /(html|body)/i.test(n[0].tagName);
                return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s }
            },
            _generatePosition: function(t) {
                var i, s, n = this.options,
                    a = t.pageX,
                    o = t.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    h = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) }
            },
            _rearrange: function(e, t, i, s) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var n = this.counter;
                this._delay(function() { n === this.counter && this.refreshPositions(!s) })
            },
            _clear: function(e, t) {
                function i(e, t, i) { return function(s) { i._trigger(e, s, t._uiHash(t)) } }
                this.reverting = !1;
                var s, n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && n.push(function(e) { this._trigger("receive", e, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function(e) { this._trigger("update", e, this._uiHash()) }), this !== this.currentContainer && (t || (n.push(function(e) { this._trigger("remove", e, this._uiHash()) }), n.push(function(e) { return function(t) { e._trigger("receive", t, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function(e) { return function(t) { e._trigger("update", t, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                    for (s = 0; n.length > s; s++) n[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() { e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() },
            _uiHash: function(t) { var i = t || this; return { helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null } }
        }), e.widget("ui.accordion", {
            version: "1.11.4",
            options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
            hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
            showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : e() } },
            _createIcons: function() {
                var t = this.options.icons;
                t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() { this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove() },
            _destroy: function() {
                var e;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
            },
            _setOption: function(e, t) { return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0) },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = e.ui.keyCode,
                        s = this.headers.length,
                        n = this.headers.index(t.target),
                        a = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            a = this.headers[(n + 1) % s];
                            break;
                        case i.LEFT:
                        case i.UP:
                            a = this.headers[(n - 1 + s) % s];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            a = this.headers[0];
                            break;
                        case i.END:
                            a = this.headers[s - 1]
                    }
                    a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) { t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus() },
            refresh: function() {
                var t = this.options;
                this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var e = this.headers,
                    t = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
            },
            _refresh: function() {
                var t, i = this.options,
                    s = i.heightStyle,
                    n = this.element.parent();
                this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                    var t = e(this),
                        i = t.uniqueId().attr("id"),
                        s = t.next(),
                        n = s.uniqueId().attr("id");
                    t.attr("aria-controls", n), s.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function() {
                    var i = e(this),
                        s = i.css("position");
                    "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0))
                }), this.headers.each(function() { t -= e(this).outerHeight(!0) }), this.headers.next().each(function() { e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function() { t = Math.max(t, e(this).css("height", "").height()) }).height(t))
            },
            _activate: function(t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }))
            },
            _findActive: function(t) { return "number" == typeof t ? this.headers.eq(t) : e() },
            _setupEvents: function(t) {
                var i = { keydown: "_keydown" };
                t && e.each(t.split(" "), function(e, t) { i[t] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var i = this.options,
                    s = this.active,
                    n = e(t.currentTarget),
                    a = n[0] === s[0],
                    o = a && i.collapsible,
                    r = o ? e() : n.next(),
                    h = s.next(),
                    l = { oldHeader: s, oldPanel: h, newHeader: o ? e() : n, newPanel: r };
                t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var i = t.newPanel,
                    s = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(e(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
            },
            _animate: function(e, t, i) {
                var s, n, a, o = this,
                    r = 0,
                    h = e.css("box-sizing"),
                    l = e.length && (!t.length || e.index() < t.index()),
                    u = this.options.animate || {},
                    d = l && u.down || u,
                    c = function() { o._toggleComplete(i) };
                return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, { duration: a, easing: n, step: function(e, t) { t.now = Math.round(e) } }), e.hide().animate(this.showProps, { duration: a, easing: n, complete: c, step: function(e, i) { i.now = Math.round(e), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0) } }), void 0) : t.animate(this.hideProps, a, n, c) : e.animate(this.showProps, a, n, c)
            },
            _toggleComplete: function(e) {
                var t = e.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
            }
        }), e.widget("ui.menu", {
            version: "1.11.4",
            defaultElement: "<ul>",
            delay: 300,
            options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item": function(e) { e.preventDefault() },
                    "click .ui-menu-item": function(t) { var i = e(t.target);!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var i = e(t.currentTarget);
                            i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, i)
                    },
                    blur: function(t) { this._delay(function() { e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t) }) },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, { click: function(e) { this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1 } })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = e(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                var i, s, n, a, o = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter
                }
                o && t.preventDefault()
            },
            _activate: function(e) { this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e)) },
            refresh: function() {
                var t, i, s = this,
                    n = this.options.icons.submenu,
                    a = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                    var t = e(this),
                        i = t.parent(),
                        s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
                }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function() {
                    var t = e(this);
                    s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
            _setOption: function(e, t) { "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t) },
            focus: function(e, t) {
                var i, s;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, { item: t })
            },
            _scrollIntoView: function(t) {
                var i, s, n, a, o, r;
                this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
            },
            blur: function(e, t) { t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, { item: this.active })) },
            _startOpening: function(e) { clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(e) }, this.delay)) },
            _open: function(t) {
                var i = e.extend({ of: this.active }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(t, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
                }, this.delay)
            },
            _close: function(e) { e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active") },
            _closeOnDocumentClick: function(t) { return !e(t.target).closest(".ui-menu").length },
            _isDivider: function(e) { return !/[^\-\u2014\u2013\s]/.test(e.text()) },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() { this.focus(e, t) }))
            },
            next: function(e) { this._move("next", "first", e) },
            previous: function(e) { this._move("prev", "last", e) },
            isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
            isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
            _move: function(e, t, i) {
                var s;
                this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s)
            },
            nextPage: function(t) { var i, s, n; return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return i = e(this), 0 > i.offset().top - s - n }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0) },
            previousPage: function(t) { var i, s, n; return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return i = e(this), i.offset().top - s + n > 0 }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0) },
            _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
            select: function(t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var i = { item: this.active };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
            },
            _filterMenuItems: function(t) {
                var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    s = RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return s.test(e.trim(e(this).text())) })
            }
        }), e.widget("ui.autocomplete", {
            version: "1.11.4",
            defaultElement: "<input>",
            options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                    a = "textarea" === n,
                    o = "input" === n;
                this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(n) {
                        if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;
                        t = !1, s = !1, i = !1;
                        var a = e.ui.keyCode;
                        switch (n.keyCode) {
                            case a.PAGE_UP:
                                t = !0, this._move("previousPage", n);
                                break;
                            case a.PAGE_DOWN:
                                t = !0, this._move("nextPage", n);
                                break;
                            case a.UP:
                                t = !0, this._keyEvent("previous", n);
                                break;
                            case a.DOWN:
                                t = !0, this._keyEvent("next", n);
                                break;
                            case a.ENTER:
                                this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case a.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case a.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function(s) {
                        if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
                        if (!i) {
                            var n = e.ui.keyCode;
                            switch (s.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", s);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", s);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", s);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", s)
                            }
                        }
                    },
                    input: function(e) { return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0) },
                    focus: function() { this.selectedItem = null, this.previous = this._value() },
                    blur: function(e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0) }
                }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur });
                        var i = this.menu.element[0];
                        e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(s) { s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close() })
                        })
                    },
                    menufocus: function(t, i) { var s, n; return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() { e(t.target).trigger(t.originalEvent) }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: n }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0) },
                    menuselect: function(e, t) {
                        var i = t.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() { this.previous = s, this.selectedItem = i })), !1 !== this._trigger("select", e, { item: i }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                    }
                }), this.liveRegion = e("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
            },
            _destroy: function() { clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
            _setOption: function(e, t) { this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort() },
            _appendTo: function() { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t },
            _initSource: function() {
                var t, i, s = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) { s(e.ui.autocomplete.filter(t, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) { s.xhr && s.xhr.abort(), s.xhr = e.ajax({ url: i, data: t, dataType: "json", success: function(e) { n(e) }, error: function() { n([]) } }) }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) { return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0 },
            _search: function(e) { this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: e }, this._response()) },
            _response: function() { var t = ++this.requestIndex; return e.proxy(function(e) { t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading") }, this) },
            __response: function(e) { e && (e = this._normalize(e)), this._trigger("response", null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close() },
            close: function(e) { this.cancelSearch = !0, this._close(e) },
            _close: function(e) { this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e)) },
            _change: function(e) { this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem }) },
            _normalize: function(t) { return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) { return "string" == typeof t ? { label: t, value: t } : e.extend({}, t, { label: t.label || t.value, value: t.value || t.label }) }) },
            _suggest: function(t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var s = this;
                e.each(i, function(e, i) { s._renderItemData(t, i) })
            },
            _renderItemData: function(e, t) { return this._renderItem(e, t).data("ui-autocomplete-item", t) },
            _renderItem: function(t, i) { return e("<li>").text(i.label).appendTo(t) },
            _move: function(e, t) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0) },
            widget: function() { return this.menu.element },
            _value: function() { return this.valueMethod.apply(this.element, arguments) },
            _keyEvent: function(e, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
            }
        }), e.extend(e.ui.autocomplete, { escapeRegex: function(e) { return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(t, i) { var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i"); return e.grep(t, function(e) { return s.test(e.label || e.value || e) }) } }), e.widget("ui.autocomplete", e.ui.autocomplete, {
            options: { messages: { noResults: "No search results.", results: function(e) { return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } },
            __response: function(t) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
            }
        }), e.ui.autocomplete;
    var c, p = "ui-button ui-widget ui-state-default ui-corner-all",
        f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        m = function() {
            var t = e(this);
            setTimeout(function() { t.find(":ui-button").button("refresh") }, 1)
        },
        g = function(t) {
            var i = t.name,
                s = t.form,
                n = e([]);
            return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function() { return !this.form })), n
        };
    e.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var t = this,
                i = this.options,
                s = "checkbox" === this.type || "radio" === this.type,
                n = s ? "" : "ui-state-active";
            null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() { i.disabled || this === c && e(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function() { i.disabled || e(this).removeClass(n) }).bind("click" + this.eventNamespace, function(e) { i.disabled && (e.preventDefault(), e.stopImmediatePropagation()) }), this._on({ focus: function() { this.buttonElement.addClass("ui-state-focus") }, blur: function() { this.buttonElement.removeClass("ui-state-focus") } }), s && this.element.bind("change" + this.eventNamespace, function() { t.refresh() }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() { return i.disabled ? !1 : void 0 }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (i.disabled) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var s = t.element[0];
                g(s).not(s).map(function() { return e(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() { return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function() { c = null }), void 0) }).bind("mouseup" + this.eventNamespace, function() { return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0) }).bind("keydown" + this.eventNamespace, function(t) { return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0) }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() { e(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) { t.keyCode === e.ui.keyCode.SPACE && e(this).click() })), this._setOption("disabled", i.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() { return this.buttonElement },
        _destroy: function() { this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title") },
        _setOption: function(e, t) { return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0) },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function() { e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var t = this.buttonElement.removeClass(f),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                s = this.options.icons,
                n = s.primary && s.secondary,
                a = [];
            s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.11.4",
        options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" },
        _create: function() { this.element.addClass("ui-buttonset") },
        _init: function() { this.refresh() },
        _setOption: function(e, t) { "disabled" === e && this.buttons.button("option", e, t), this._super(e, t) },
        refresh: function() {
            var t = "rtl" === this.element.css("direction"),
                i = this.element.find(this.options.items),
                s = i.filter(":ui-button");
            i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function() { return e(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() { this.element.removeClass("ui-buttonset"), this.buttons.map(function() { return e(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy") }
    }), e.ui.button, e.extend(e.ui, { datepicker: { version: "1.11.4" } });
    var v;
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(e) { return r(this._defaults, e || {}), this },
        _attachDatepicker: function(t, i) {
            var s, n, a;
            s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
        },
        _newInst: function(t, i) { var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(t, i) {
            var s = e(t);
            i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var s, n, a, o = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: a, alt: n, title: n }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({ src: a, alt: n, title: n }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function() { return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1 }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, n, a = new Date(2009, 11, 20),
                    o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function(e) { for (i = 0, s = 0, n = 0; e.length > n; n++) e[n].length > i && (i = e[n].length, s = n); return s }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, s, n, a) {
            var o, h, l, u, d, c = this._dialogInst;
            return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this
        },
        _destroyDatepicker: function(t) {
            var i, s = e(t),
                n = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null))
        },
        _enableDatepicker: function(t) {
            var i, s, n = e(t),
                a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) { return e === t ? null : e }))
        },
        _disableDatepicker: function(t) {
            var i, s, n = e(t),
                a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) { return e === t ? null : e }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) { try { return e.data(t, "datepicker") } catch (i) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(t, i, s) { var n, a, o, h, l = this._getInst(t); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0) },
        _changeDatepicker: function(e, t, i) { this._optionDatepicker(e, t, i) },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) { var i = this._getInst(e); return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null },
        _doKeyDown: function(t) {
            var i, s, n, a = e.datepicker._getInst(t.target),
                o = !0,
                r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) { var i, s, n = e.datepicker._getInst(t.target); return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0 },
        _doKeyUp: function(t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal) try { i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s)) } catch (n) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, n, a, o, h, l, u;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function() { return o |= "fixed" === e(this).css("position"), !o }), h = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: h.left + "px", top: h.top + "px" }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, s = this._getNumberOfMonths(t),
                n = s[1],
                a = 17,
                r = t.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() { i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(e) { return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus") },
        _checkOffset: function(t, i, s) {
            var n = t.dpDiv.outerWidth(),
                a = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                r = t.input ? t.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
        },
        _findPos: function(t) { for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"]; return i = e(t).offset(), [i.left, i.top] },
        _hideDatepicker: function(t) { var i, s, n, a, o = this._curInst;!o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function() { e.datepicker._tidyDialog(o) }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1) },
        _tidyDialog: function(e) { e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, s) {
            var n = e(t),
                a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function(t) {
            var i, s = e(t),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(t, i, s) {
            var n = e(t),
                a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function(t, i, s, n) {
            var a, o = e(t);
            e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var s, n = e(t),
                a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, s, n, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function() { e(this).val(n) }))
        },
        noWeekends: function(e) { var t = e.getDay(); return [t > 0 && 6 > t, ""] },
        iso8601Week: function(e) { var t, i = new Date(e.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1 },
        parseDate: function(t, i, s) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var n, a, o, r, h = 0,
                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                y = -1,
                b = !1,
                _ = function(e) { var i = t.length > n + 1 && t.charAt(n + 1) === e; return i && n++, i },
                x = function(e) {
                    var t = _(e),
                        s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        n = "y" === e ? s : 1,
                        a = RegExp("^\\d{" + n + "," + s + "}"),
                        o = i.substring(h).match(a);
                    if (!o) throw "Missing number at position " + h;
                    return h += o[0].length, parseInt(o[0], 10)
                },
                w = function(t, s, n) {
                    var a = -1,
                        o = e.map(_(t) ? n : s, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) { return -(e[1].length - t[1].length) });
                    if (e.each(o, function(e, t) { var s = t[1]; return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0 }), -1 !== a) return a + 1;
                    throw "Unknown name at position " + h
                },
                k = function() {
                    if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (n = 0; t.length > n; n++)
                if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1;
                else switch (t.charAt(n)) {
                    case "d":
                        v = x("d");
                        break;
                    case "D":
                        w("D", d, c);
                        break;
                    case "o":
                        y = x("o");
                        break;
                    case "m":
                        g = x("m");
                        break;
                    case "M":
                        g = w("M", p, f);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "!":
                        r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "'":
                        _("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                }
            if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)
                for (g = 1, v = y;;) {
                    if (a = this._getDaysInMonth(m, g - 1), a >= v) break;
                    g++, v -= a
                }
            if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(t) { var i = e.length > s + 1 && e.charAt(s + 1) === t; return i && s++, i },
                l = function(e, t, i) {
                    var s = "" + t;
                    if (h(e))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                u = function(e, t, i, s) { return h(e) ? s[t] : i[t] },
                d = "",
                c = !1;
            if (t)
                for (s = 0; e.length > s; s++)
                    if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            d += l("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += u("D", t.getDay(), n, a);
                            break;
                        case "o":
                            d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += l("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += u("M", t.getMonth(), o, r);
                            break;
                        case "y":
                            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? d += "'" : c = !0;
                            break;
                        default:
                            d += e.charAt(s)
                    }
            return d
        },
        _possibleChars: function(e) {
            var t, i = "",
                s = !1,
                n = function(i) { var s = e.length > t + 1 && e.charAt(t + 1) === i; return s && t++, s };
            for (t = 0; e.length > t; t++)
                if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function(e, t) { return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t] },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    s = e.lastVal = e.input ? e.input.val() : null,
                    n = this._getDefaultDate(e),
                    a = n,
                    o = this._getFormatConfig(e);
                try { a = this.parseDate(i, s, o) || n } catch (r) { s = t ? "" : s }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) { return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date)) },
        _determineDate: function(t, i, s) {
            var n = function(e) { var t = new Date; return t.setDate(t.getDate() + e), t },
                a = function(i) {
                    try { return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t)) } catch (s) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
                                break;
                            case "y":
                            case "Y":
                                a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
                        }
                        l = h.exec(i)
                    }
                    return new Date(a, o, r)
                },
                o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null },
        _setDate: function(e, t, i) {
            var s = !t,
                n = e.selectedMonth,
                a = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function(e) { var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return t },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = { prev: function() { e.datepicker._adjustDate(s, -i, "M") }, next: function() { e.datepicker._adjustDate(s, +i, "M") }, hide: function() { e.datepicker._hideDatepicker() }, today: function() { e.datepicker._gotoToday(s) }, selectDay: function() { return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return e.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function() { return e.datepicker._selectMonthYear(s, this, "Y"), !1 } };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, M, C, N, A, P, I, H, z, F, E, O, j, W, L = new Date,
                R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                Y = this._get(e, "isRTL"),
                B = this._get(e, "showButtonPanel"),
                J = this._get(e, "hideIfNoPrevNext"),
                q = this._get(e, "navigationAsDateFormat"),
                K = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                U = this._get(e, "stepMonths"),
                Q = 1 !== K[0] || 1 !== K[1],
                G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                X = this._getMinMaxDate(e, "min"),
                $ = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - V,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), $)
                for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; K[0] > w; w++) {
                for (k = "", this.maxRows = 4, T = 0; K[1] > T; T++) {
                    if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", Q) {
                        if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) {
                            case 0:
                                M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case K[1] - 1:
                                M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", S = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", C = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + u) % 7, C += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[N] + "'>" + p[N] + "</span></th>";
                    for (M += C + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), H = Q ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, z = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), F = 0; H > F; F++) {
                        for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++) O = g ? g.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], j = z.getMonth() !== Z, W = j && !y || !O[0] || X && X > z || $ && z > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
                        M += E + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
                }
                _ += k
            }
            return _ += l, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(e, t, i, s, n, a, o, r) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                _ = "";
            if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function(e) { var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10); return isNaN(t) ? c : t }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0),
                n = e.drawMonth + ("M" === i ? t : 0),
                a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                n = i && i > t ? i : t;
            return s && n > s ? s : n
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) { var t = this._get(e, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t },
        _getMinMaxDate: function(e, t) { return this._determineDate(e, this._get(e, t + "Date"), null) },
        _getDaysInMonth: function(e, t) { return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate() },
        _getFirstDayOfMonth: function(e, t) { return new Date(e, t, 1).getDay() },
        _canAdjustMonth: function(e, t, i, s) {
            var n = this._getNumberOfMonths(e),
                a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
        },
        _isInRange: function(e, t) {
            var i, s, n = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                o = null,
                r = null,
                h = this._get(e, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
        },
        _getFormatConfig: function(e) { var t = this._get(e, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") } },
        _formatDate: function(e, t, i, s) { t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear); var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e)) }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t) }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
        resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
        _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() },
        _init: function() { this.options.autoOpen && this.open() },
        _appendTo: function() { var t = this.options.appendTo; return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0) },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() { return this.uiDialog },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var i, s = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try { i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur() } catch (n) {}
                this._hide(this.uiDialog, this.options.hide, function() { s._trigger("close", t) })
            }
        },
        isOpen: function() { return this._isOpen },
        moveToTop: function() { this._moveToTop() },
        _moveToTop: function(t, i) {
            var s = !1,
                n = this.uiDialog.siblings(".ui-front:visible").map(function() { return +e(this).css("z-index") }).get(),
                a = Math.max.apply(null, n);
            return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s
        },
        open: function() {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { t._focusTabbable(), t._trigger("focus") }), this._makeFocusTarget(), this._trigger("open"), void 0)
        },
        _focusTabbable: function() {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() { n.focus() }), t.preventDefault()) : (this._delay(function() { s.focus() }), t.preventDefault())
                    }
                },
                mousedown: function(e) { this._moveToTop(e) && this._focusTabbable() }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function(t) { e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus() } }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function(e) { e.preventDefault(), this.close(e) } }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({ "aria-labelledby": t.attr("id") })
        },
        _title: function(e) { this.options.title || e.html("&#160;"), e.text(this.options.title) },
        _createButtonPane: function() { this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons() },
        _createButtons: function() {
            var t = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function(i, s) {
                var n, a;
                s = e.isFunction(s) ? { click: s, text: i } : s, s = e.extend({ type: "button" }, s), n = s.click, s.click = function() { n.apply(t.element[0], arguments) }, a = { icons: s.icons, text: s.showText }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function() {
            function t(e) { return { position: e.position, offset: e.offset } }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) { e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n)) },
                drag: function(e, s) { i._trigger("drag", e, t(s)) },
                stop: function(n, a) {
                    var o = a.offset.left - i.document.scrollLeft(),
                        r = a.offset.top - i.document.scrollTop();
                    s.position = { my: "left top", at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r, of: i.window }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a))
                }
            })
        },
        _makeResizable: function() {
            function t(e) { return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size } }
            var i = this,
                s = this.options,
                n = s.resizable,
                a = this.uiDialog.css("position"),
                o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(s, n) { e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n)) },
                resize: function(e, s) { i._trigger("resize", e, t(s)) },
                stop: function(n, a) {
                    var o = i.uiDialog.offset(),
                        r = o.left - i.document.scrollLeft(),
                        h = o.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h, of: i.window }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a))
                }
            }).css("position", a)
        },
        _trackFocus: function() { this._on(this.widget(), { focusin: function(t) { this._makeFocusTarget(), this._focusedElement = e(t.target) } }) },
        _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                i = e.inArray(this, t); - 1 !== i && t.splice(i, 1)
        },
        _trackingInstances: function() { var e = this.document.data("ui-dialog-instances"); return e || (e = [], this.document.data("ui-dialog-instances", e)), e },
        _minHeight: function() { var e = this.options; return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height) },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                s = !1,
                n = {};
            e.each(t, function(e, t) { i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t) }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function(e, t) { var i, s, n = this.uiDialog; "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: "" + t }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
        _size: function() {
            var e, t, i, s = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({ minHeight: t, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var t = e(this); return e("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _allowInteraction: function(t) { return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() { t = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(e) { t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    }), e.widget("ui.progressbar", {
        version: "1.11.4",
        options: { max: 100, value: 0, change: null, complete: null },
        min: 0,
        _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue() },
        _destroy: function() { this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove() },
        value: function(e) { return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0) },
        _constrainedValue: function(e) { return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e)) },
        _setOptions: function(e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _setOption: function(e, t) { "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t) },
        _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) },
        _refreshValue: function() {
            var t = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    }), e.widget("ui.selectmenu", {
        version: "1.11.4",
        defaultElement: "<select>",
        options: { appendTo: null, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: null, change: null, close: null, focus: null, open: null, select: null },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
        },
        _drawButton: function() {
            var t = this;
            this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, { click: function(e) { this.button.focus(), e.preventDefault() } }), this.element.hide(), this.button = e("<span>", { "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true" }).insertAfter(this.element), e("<span>", { "class": "ui-icon " + this.options.icons.button }).prependTo(this.button), this.buttonText = e("<span>", { "class": "ui-selectmenu-text" }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { t.menuItems || t._refreshMenu() }), this._hoverable(this.button), this._focusable(this.button)
        },
        _drawMenu: function() {
            var t = this;
            this.menu = e("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = e("<div>", { "class": "ui-selectmenu-menu ui-front" }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(e, i) { e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e) },
                focus: function(e, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, { item: s }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 }
        },
        refresh: function() { this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton() },
        _refreshMenu: function() {
            this.menu.empty();
            var e, t = this.element.find("option");
            t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(e) { this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e)) },
        _position: function() { this.menuWrap.position(e.extend({ of: this.button }, this.options.position)) },
        close: function(e) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e)) },
        widget: function() { return this.button },
        menuWidget: function() { return this.menu },
        _renderMenu: function(t, i) {
            var s = this,
                n = "";
            e.each(i, function(i, a) { a.optgroup !== n && (e("<li>", { "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text: a.optgroup }).appendTo(t), n = a.optgroup), s._renderItemData(t, a) })
        },
        _renderItemData: function(e, t) { return this._renderItem(e, t).data("ui-selectmenu-item", t) },
        _renderItem: function(t, i) { var s = e("<li>"); return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t) },
        _setText: function(e, t) { t ? e.text(t) : e.html("&#160;") },
        _move: function(e, t) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s)
        },
        _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex) },
        _toggle: function(e) { this[this.isOpen ? "close" : "open"](e) },
        _setSelection: function() {
            var e;
            this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: { mousedown: function(t) { this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t)) } },
        _buttonEvents: {
            mousedown: function() {
                var e;
                window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(e) { this._setSelection(), this._toggle(e) },
            keydown: function(t) {
                var i = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.TAB:
                    case e.ui.keyCode.ESCAPE:
                        this.close(t), i = !1;
                        break;
                    case e.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case e.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case e.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case e.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t), i = !1
                }
                i && t.preventDefault()
            }
        },
        _selectFocusedItem: function(e) {
            var t = this.menuItems.eq(this.focusIndex);
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
        },
        _select: function(e, t) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, { item: e }), e.index !== i && this._trigger("change", t, { item: e }), this.close(t)
        },
        _setAria: function(e) {
            var t = this.menuItems.eq(e.index).attr("id");
            this.button.attr({ "aria-labelledby": t, "aria-activedescendant": t }), this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(e, t) { "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton() },
        _appendTo: function() { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t },
        _toggleAttr: function() { this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
        _resizeButton: function() {
            var e = this.options.width;
            e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)
        },
        _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
        _getCreateOptions: function() { return { disabled: this.element.prop("disabled") } },
        _parseOptions: function(t) {
            var i = [];
            t.each(function(t, s) {
                var n = e(s),
                    a = n.parent("optgroup");
                i.push({ element: n, index: t, value: n.val(), label: n.text(), optgroup: a.attr("label") || "", disabled: a.prop("disabled") || n.prop("disabled") })
            }), this.items = i
        },
        _destroy: function() { this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element) }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
        numPages: 5,
        _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1 },
        _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
        _createHandles: function() {
            var t, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
            this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) { e(this).data("ui-slider-handle-index", t) })
        },
        _createRange: function() {
            var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
        _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() },
        _mouseCapture: function(t) {
            var i, s, n, a, o, r, h, l, u = this,
                d = this.options;
            return d.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var i = Math.abs(s - u.values(t));
                (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
            }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() { return !0 },
        _mouseDrag: function(e) {
            var t = { x: e.pageX, y: e.pageY },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function(e) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
        _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
        _normValueFromMouse: function(e) { var t, i, s, n, a; return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a) },
        _start: function(e, t) { var i = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i) },
        _slide: function(e, t, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i))
        },
        _stop: function(e, t) {
            var i = { handle: this.handles[t], value: this.value() };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = { handle: this.handles[t], value: this.value() };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function(e) { return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value() },
        values: function(t, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var s, n = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() { var e = this.options.value; return e = this._trimAlignValue(e) },
        _values: function(e) { var t, i, s; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t); if (this.options.values && this.options.values.length) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]); return i } return [] },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max,
                t = this._valueMin(),
                i = this.options.step,
                s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
            e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e },
        _precisionOf: function(e) {
            var t = "" + e,
                i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function() { return this.options.min },
        _valueMax: function() { return this.max },
        _refreshValue: function() {
            var t, i, s, n, a, o = this.options.range,
                r = this.options,
                h = this,
                l = this._animateOff ? !1 : r.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), t = i }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate }))
        },
        _handleEvents: {
            keydown: function(t) {
                var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
                }
                switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + a);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - a)
                }
                this._slide(t, o, n)
            },
            keyup: function(t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    }), e.widget("ui.spinner", {
        version: "1.11.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
        _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
        _getCreateOptions: function() {
            var t = {},
                i = this.element;
            return e.each(["min", "max", "step"], function(e, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (t[s] = n)
            }), t
        },
        _events: {
            keydown: function(e) { this._start(e) && this._keydown(e) && e.preventDefault() },
            keyup: "_stop",
            focus: function() { this.previous = this.element.val() },
            blur: function(e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0) },
            mousewheel: function(e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(e) }, 100), e.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function i() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = s, this._delay(function() { this.previous = s }))
                }
                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, i.call(this) }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) { return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0 },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var i = this.options,
                s = e.ui.keyCode;
            switch (t.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, t), !0;
                case s.DOWN:
                    return this._repeat(null, -1, t), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, t), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() { return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>" },
        _buttonHtml: function() { return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>" },
        _start: function(e) { return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1 },
        _repeat: function(e, t, i) { e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, t, i) }, e), this._spin(t * this.options.step, i) },
        _spin: function(e, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, { value: i }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(t) { var i = this.options.incremental; return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1 },
        _precision: function() { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e },
        _precisionOf: function(e) {
            var t = "" + e,
                i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _adjustValue: function(e) { var t, i, s = this.options; return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e },
        _stop: function(e) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)) },
        _setOption: function(e, t) { if ("culture" === e || "numberFormat" === e) { var i = this._parse(this.element.val()); return this.options[e] = t, this.element.val(this._format(i)), void 0 }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")) },
        _setOptions: h(function(e) { this._super(e) }),
        _parse: function(e) { return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e },
        _format: function(e) { return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e },
        _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
        isValid: function() { var e = this.value(); return null === e ? !1 : e === this._adjustValue(e) },
        _value: function(e, t) { var i; "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh() },
        _destroy: function() { this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
        stepUp: h(function(e) { this._stepUp(e) }),
        _stepUp: function(e) { this._start() && (this._spin((e || 1) * this.options.step), this._stop()) },
        stepDown: h(function(e) { this._stepDown(e) }),
        _stepDown: function(e) { this._start() && (this._spin((e || 1) * -this.options.step), this._stop()) },
        pageUp: h(function(e) { this._stepUp((e || 1) * this.options.page) }),
        pageDown: h(function(e) { this._stepDown((e || 1) * this.options.page) }),
        value: function(e) { return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val()) },
        widget: function() { return this.uiSpinner }
    }), e.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
        _isLocal: function() {
            var e = /#.*$/;
            return function(t) {
                var i, s;
                t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, "");
                try { i = decodeURIComponent(i) } catch (n) {}
                try { s = decodeURIComponent(s) } catch (n) {}
                return t.hash.length > 1 && i === s
            }
        }(),
        _create: function() {
            var t = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) { return t.tabs.index(e) }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                i = this.options.collapsible,
                s = location.hash.substring(1);
            return null === t && (s && this.tabs.each(function(i, n) { return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0 }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() } },
        _tabKeydown: function(t) {
            var i = e(this.document[0].activeElement).closest("li"),
                s = this.tabs.index(i),
                n = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        s++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case e.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
                    case e.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", s) }, this.delay))
            }
        },
        _panelKeydown: function(t) { this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus()) },
        _handlePageNav: function(t) { return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
        _findNextTab: function(t, i) {
            function s() { return t > n && (t = 0), 0 > t && (t = n), t }
            for (var n = this.tabs.length - 1; - 1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) { return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e },
        _setOption: function(e, t) { return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0) },
        _sanitizeSelector: function(e) { return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
        refresh: function() {
            var t = this.options,
                i = this.tablist.children(":has(a[href])");
            t.disabled = e.map(i.filter(".ui-state-disabled"), function(e) { return i.index(e) }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
        },
        _refresh: function() { this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
        _processTabs: function() {
            var t = this,
                i = this.tabs,
                s = this.anchors,
                n = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) { e(this).is(".ui-state-disabled") && t.preventDefault() }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() { e(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function() { return e("a", this)[0] }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = e(), this.anchors.each(function(i, s) {
                var n, a, o, r = e(s).uniqueId().attr("id"),
                    h = e(s).closest("li"),
                    l = h.attr("aria-controls");
                t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": o, "aria-labelledby": r }), a.attr("aria-labelledby", r)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function() { return this.tablist || this.element.find("ol,ul").eq(0) },
        _createPanel: function(t) { return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0) },
        _setupDisabled: function(t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var i = {};
            t && e.each(t.split(" "), function(e, t) { i[t] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(e) { e.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, s = this.element.parent();
            "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    s = t.css("position");
                "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() { i -= e(this).outerHeight(!0) }), this.panels.each(function() { e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() { i = Math.max(i, e(this).height("").height()) }).height(i))
        },
        _eventHandler: function(t) {
            var i = this.options,
                s = this.active,
                n = e(t.currentTarget),
                a = n.closest("li"),
                o = a[0] === s[0],
                r = o && i.collapsible,
                h = r ? e() : this._getPanelForTab(a),
                l = s.length ? this._getPanelForTab(s) : e(),
                u = { oldTab: s, oldPanel: l, newTab: r ? e() : a, newPanel: h };
            t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u))
        },
        _toggle: function(t, i) {
            function s() { a.running = !1, a._trigger("activate", t, i) }

            function n() { i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s()) }
            var a = this,
                o = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() { i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n() }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() { return 0 === e(this).attr("tabIndex") }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _activate: function(t) {
            var i, s = this._findActive(t);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }))
        },
        _findActive: function(t) { return t === !1 ? e() : this.tabs.eq(t) },
        _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() { e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role") }), this.tabs.each(function() {
                var t = e(this),
                    i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(t) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function(e) { return e !== t ? e : null }) : e.map(this.tabs, function(e, i) { return i !== t ? i : null })), this._setupDisabled(i))
        },
        disable: function(t) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === t) i = !0;
                else {
                    if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                    i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                }
                this._setupDisabled(i)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var s = this,
                n = this.tabs.eq(t),
                a = n.find(".ui-tabs-anchor"),
                o = this._getPanelForTab(n),
                r = { tab: n, panel: o },
                h = function(e, t) { "abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr };
            this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function(e, t, n) { setTimeout(function() { o.html(e), s._trigger("load", i, r), h(n, t) }, 1) }).fail(function(e, t) { setTimeout(function() { h(e, t) }, 1) })))
        },
        _ajaxSettings: function(t, i, s) { var n = this; return { url: t.attr("href"), beforeSend: function(t, a) { return n._trigger("beforeLoad", i, e.extend({ jqXHR: t, ajaxSettings: a }, s)) } } },
        _getPanelForTab: function(t) { var i = e(t).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
    }), e.widget("ui.tooltip", {
        version: "1.11.4",
        options: { content: function() { var t = e(this).attr("title") || ""; return e("<a>").text(t).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null },
        _addDescribedBy: function(t, i) {
            var s = (t.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var i = t.data("ui-tooltip-id"),
                s = (t.attr("aria-describedby") || "").split(/\s+/),
                n = e.inArray(i, s); - 1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
        },
        _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body) },
        _setOption: function(t, i) { var s = this; return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function(e, t) { s._updateContent(t.element) }), void 0) },
        _disable: function() {
            var t = this;
            e.each(this.tooltips, function(i, s) {
                var n = e.Event("blur");
                n.target = n.currentTarget = s.element[0], t.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var i = this,
                s = e(t ? t.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function() {
                var t, s = e(this);
                s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", ""))
            }), this._registerCloseHandlers(t, s), this._updateContent(s, t))
        },
        _updateContent: function(e, t) {
            var i, s = this.options.content,
                n = this,
                a = t ? t.type : null;
            return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function(i) { n._delay(function() { e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i)) }) }), i && this._open(t, e, i), void 0)
        },
        _open: function(t, i, s) {
            function n(e) { l.of = e, o.is(":hidden") || o.position(l) }
            var a, o, r, h, l = e.extend({}, this.options.position);
            if (s) {
                if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s), void 0;
                i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: n }), n(t)) : o.position(e.extend({ of: i }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() { o.is(":visible") && (n(l.of), clearInterval(r)) }, e.fx.interval)), this._trigger("open", t, { tooltip: o })
            }
        },
        _registerCloseHandlers: function(t, i) {
            var s = {
                keyup: function(t) {
                    if (t.keyCode === e.ui.keyCode.ESCAPE) {
                        var s = e.Event(t);
                        s.currentTarget = i[0], this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() { this._removeTooltip(this._find(i).tooltip) }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s)
        },
        close: function(t) {
            var i, s = this,
                n = e(t ? t.currentTarget : this.element),
                a = this._find(n);
            return a ? (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { s._removeTooltip(e(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, i) { e(i.element).attr("title", i.title), delete s.parents[t] }), a.closing = !0, this._trigger("close", t, { tooltip: i }), a.hiding || (a.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
        },
        _tooltip: function(t) {
            var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                s = i.uniqueId().attr("id");
            return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = { element: t, tooltip: i }
        },
        _find: function(e) { var t = e.data("ui-tooltip-id"); return t ? this.tooltips[t] : null },
        _removeTooltip: function(e) { e.remove(), delete this.tooltips[e.attr("id")] },
        _destroy: function() {
            var t = this;
            e.each(this.tooltips, function(i, s) {
                var n = e.Event("blur"),
                    a = s.element;
                n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    });
    var y = "ui-effects-",
        b = e;
    e.effects = { effect: {} },
        function(e, t) {
            function i(e, t, i) { var s = d[t.type] || {}; return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e) }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(h, function(e, a) {
                    var o, r = a.re.exec(i),
                        h = r && a.parse(r),
                        l = a.space || "rgba";
                    return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
                }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
            }

            function n(e, t, i) { return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(e) { return [e[1], e[2], e[3], e[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(e) { return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(e) { return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(e) { return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(e) { return [e[1], e[2] / 100, e[3] / 100, e[4]] } }],
                l = e.Color = function(t, i, s, n) { return new e.Color.fn.parse(t, i, s, n) },
                u = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                d = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                c = l.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(e, t) { t.cache = "_" + e, t.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = e.extend(l.prototype, {
                parse: function(n, o, r, h) {
                    if (n === t) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                    var d = this,
                        c = e.type(n),
                        p = this._rgba = [];
                    return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function(e, t) { p[t.idx] = i(n[t.idx], t) }), this) : "object" === c ? (n instanceof l ? f(u, function(e, t) { n[t.cache] && (d[t.cache] = n[t.cache].slice()) }) : f(u, function(t, s) {
                        var a = s.cache;
                        f(s.props, function(e, t) {
                            if (!d[a] && s.to) {
                                if ("alpha" === e || null == n[e]) return;
                                d[a] = s.to(d._rgba)
                            }
                            d[a][t.idx] = i(n[e], t, !0)
                        }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                    }), this) : t
                },
                is: function(e) {
                    var i = l(e),
                        s = !0,
                        n = this;
                    return f(u, function(e, a) { var o, r = i[a.cache]; return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(e, i) { return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t })), s }), s
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return f(u, function(i, s) { t[s.cache] && e.push(i) }), e.pop()
                },
                transition: function(e, t) {
                    var s = l(e),
                        n = s._space(),
                        a = u[n],
                        o = 0 === this.alpha() ? l("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        h = r.slice();
                    return s = s[a.cache], f(a.props, function(e, n) {
                        var a = n.idx,
                            o = r[a],
                            l = s[a],
                            u = d[n.type] || {};
                        null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                    }), this[n](h)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(t)._rgba;
                    return l(e.map(i, function(e, t) { return (1 - s) * n[t] + s * e }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) { return null == e ? t > 2 ? 1 : 0 : e });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) { return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return t && i.push(~~(255 * s)), "#" + e.map(i, function(e) { return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e }).join("")
                },
                toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
            }), l.fn.parse.prototype = l.fn, u.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, s = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255,
                    o = e[3],
                    r = Math.max(s, n, a),
                    h = Math.min(s, n, a),
                    l = r - h,
                    u = r + h,
                    d = .5 * u;
                return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
            }, u.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    s = e[2],
                    a = e[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
            }, f(u, function(s, n) {
                var a = n.props,
                    o = n.cache,
                    h = n.to,
                    u = n.from;
                l.fn[s] = function(s) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
                    var n, r = e.type(s),
                        d = "array" === r || "object" === r ? s : arguments,
                        c = this[o].slice();
                    return f(a, function(e, t) {
                        var s = d["object" === r ? e : t.idx];
                        null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                    }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
                }, f(a, function(t, i) {
                    l.fn[t] || (l.fn[t] = function(n) {
                        var a, o = e.type(n),
                            h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
                            l = this[h](),
                            u = l[i.idx];
                        return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                    })
                })
            }), l.hook = function(t) {
                var i = t.split(" ");
                f(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                                if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === r || "transparent" === r) && o && o.style;) try { r = e.css(o, "backgroundColor"), o = o.parentNode } catch (h) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try { t.style[i] = n } catch (h) {}
                        }
                    }, e.fx.step[i] = function(t) { t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos)) }
                })
            }, l.hook(o), e.cssHooks.borderColor = { expand: function(e) { var t = {}; return f(["Top", "Right", "Bottom", "Left"], function(i, s) { t["border" + s + "Color"] = e }), t } }, a = e.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(b),
        function() {
            function t(t) {
                var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function i(t, i) { var s, a, o = {}; for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a)); return o }
            var s = ["add", "remove", "toggle"],
                n = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e.effects.animateClass = function(n, a, o, r) {
                var h = e.speed(a, o, r);
                return this.queue(function() {
                    var a, o = e(this),
                        r = o.attr("class") || "",
                        l = h.children ? o.find("*").addBack() : o;
                    l = l.map(function() { var i = e(this); return { el: i, start: t(this) } }), a = function() { e.each(s, function(e, t) { n[t] && o[t + "Class"](n[t]) }) }, a(), l = l.map(function() { return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this }), o.attr("class", r), l = l.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            s = e.extend({}, h, { queue: !1, complete: function() { i.resolve(t) } });
                        return this.el.animate(this.diff, s), i.promise()
                    }), e.when.apply(e, l.get()).done(function() {
                        a(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) { t.css(e, "") })
                        }), h.complete.call(o[0])
                    })
                })
            }, e.fn.extend({ addClass: function(t) { return function(i, s, n, a) { return s ? e.effects.animateClass.call(this, { add: i }, s, n, a) : t.apply(this, arguments) } }(e.fn.addClass), removeClass: function(t) { return function(i, s, n, a) { return arguments.length > 1 ? e.effects.animateClass.call(this, { remove: i }, s, n, a) : t.apply(this, arguments) } }(e.fn.removeClass), toggleClass: function(t) { return function(i, s, n, a, o) { return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, { toggle: i }, s, n, a) } }(e.fn.toggleClass), switchClass: function(t, i, s, n, a) { return e.effects.animateClass.call(this, { add: i, remove: t }, s, n, a) } })
        }(),
        function() {
            function t(t, i, s, n) { return e.isPlainObject(t) && (i = t, t = t.effect), t = { effect: t }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t }

            function i(t) { return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0 }
            e.extend(e.effects, {
                version: "1.11.4",
                save: function(e, t) { for (var i = 0; t.length > i; i++) null !== t[i] && e.data(y + t[i], e[0].style[t[i]]) },
                restore: function(e, t) { var i, s; for (s = 0; t.length > s; s++) null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i)) },
                setMode: function(e, t) { return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t },
                getBaseline: function(e, t) {
                    var i, s;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = e[1] / t.width
                    }
                    return { x: s, y: i }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = { width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float") },
                        s = e("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        n = { width: t.width(), height: t.height() },
                        a = document.activeElement;
                    try { a.id } catch (o) { a = document.body }
                    return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({ position: "relative" }), t.css({ position: "relative" })) : (e.extend(i, { position: t.css("position"), zIndex: t.css("z-index") }), e.each(["top", "left", "bottom", "right"], function(e, s) { i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(n), s.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                },
                setTransition: function(t, i, s, n) {
                    return n = n || {}, e.each(i, function(e, i) {
                        var a = t.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), e.fn.extend({
                effect: function() {
                    function i(t) {
                        function i() { e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t() }
                        var n = e(this),
                            a = s.complete,
                            r = s.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                    }
                    var s = t.apply(this, arguments),
                        n = s.mode,
                        a = s.queue,
                        o = e.effects.effect[s.effect];
                    return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function() { s.complete && s.complete.call(this) }) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
                },
                show: function(e) { return function(s) { if (i(s)) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "show", this.effect.call(this, n) } }(e.fn.show),
                hide: function(e) { return function(s) { if (i(s)) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "hide", this.effect.call(this, n) } }(e.fn.hide),
                toggle: function(e) { return function(s) { if (i(s) || "boolean" == typeof s) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) } }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        s = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) { i.indexOf(t) > 0 && (s = [parseFloat(i), t]) }), s
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) { t[i] = function(t) { return Math.pow(t, e + 2) } }), e.extend(t, {
                Sine: function(e) { return 1 - Math.cos(e * Math.PI / 2) },
                Circ: function(e) { return 1 - Math.sqrt(1 - e * e) },
                Elastic: function(e) { return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15) },
                Back: function(e) { return e * e * (3 * e - 2) },
                Bounce: function(e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, i) { e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) { return 1 - i(1 - e) }, e.easing["easeInOut" + t] = function(e) { return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2 } })
        }(), e.effects, e.effects.effect.blind = function(t, i) {
            var s, n, a, o = e(this),
                r = /up|down|vertical/,
                h = /up|left|vertical|horizontal/,
                l = ["position", "top", "bottom", "left", "right", "height", "width"],
                u = e.effects.setMode(o, t.mode || "hide"),
                d = t.direction || "up",
                c = r.test(d),
                p = c ? "height" : "width",
                f = c ? "top" : "left",
                m = h.test(d),
                g = {},
                v = "show" === u;
            o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({ overflow: "hidden" }), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({ position: "absolute" }), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, { duration: t.duration, easing: t.easing, queue: !1, complete: function() { "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i() } })
        }, e.effects.effect.bounce = function(t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = e.effects.setMode(o, t.mode || "effect"),
                l = "hide" === h,
                u = "show" === h,
                d = t.direction || "up",
                c = t.distance,
                p = t.times || 5,
                f = 2 * p + (u || l ? 1 : 0),
                m = t.duration / f,
                g = t.easing,
                v = "up" === d || "down" === d ? "top" : "left",
                y = "up" === d || "left" === d,
                b = o.queue(),
                _ = b.length;
            for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = { opacity: 1 }, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2;
            l && (n = { opacity: 0 }, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function() { l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i() }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue()
        }, e.effects.effect.clip = function(t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = e.effects.setMode(o, t.mode || "hide"),
                l = "show" === h,
                u = t.direction || "vertical",
                d = "vertical" === u,
                c = d ? "height" : "width",
                p = d ? "top" : "left",
                f = {};
            e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({ overflow: "hidden" }), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i() } })
        }, e.effects.effect.drop = function(t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                o = e.effects.setMode(n, t.mode || "hide"),
                r = "show" === o,
                h = t.direction || "left",
                l = "up" === h || "down" === h ? "top" : "left",
                u = "up" === h || "left" === h ? "pos" : "neg",
                d = { opacity: r ? 1 : 0 };
            e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() } })
        }, e.effects.effect.explode = function(t, i) {
            function s() { b.push(this), b.length === d * c && n() }

            function n() { p.css({ visibility: "visible" }), e(b).remove(), m || p.hide(), i() }
            var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                c = d,
                p = e(this),
                f = e.effects.setMode(p, t.mode || "hide"),
                m = "show" === f,
                g = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / c),
                y = Math.ceil(p.outerHeight() / d),
                b = [];
            for (a = 0; d > a; a++)
                for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++) r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -o * v, top: -a * y }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: y, left: r + (m ? l * v : 0), top: h + (m ? u * y : 0), opacity: m ? 0 : 1 }).animate({ left: r + (m ? 0 : l * v), top: h + (m ? 0 : u * y), opacity: m ? 1 : 0 }, t.duration || 500, t.easing, s)
        }, e.effects.effect.fade = function(t, i) {
            var s = e(this),
                n = e.effects.setMode(s, t.mode || "toggle");
            s.animate({ opacity: n }, { queue: !1, duration: t.duration, easing: t.easing, complete: i })
        }, e.effects.effect.fold = function(t, i) {
            var s, n, a = e(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                r = e.effects.setMode(a, t.mode || "hide"),
                h = "show" === r,
                l = "hide" === r,
                u = t.size || 15,
                d = /([0-9]+)%/.exec(u),
                c = !!t.horizFirst,
                p = h !== c,
                f = p ? ["width", "height"] : ["height", "width"],
                m = t.duration / 2,
                g = {},
                v = {};
            e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({ overflow: "hidden" }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? { height: 0, width: u } : { height: u, width: 0 }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function() { l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i() })
        }, e.effects.effect.highlight = function(t, i) {
            var s = e(this),
                n = ["backgroundImage", "backgroundColor", "opacity"],
                a = e.effects.setMode(s, t.mode || "show"),
                o = { backgroundColor: s.css("backgroundColor") };
            "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(o, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === a && s.hide(), e.effects.restore(s, n), i() } })
        }, e.effects.effect.size = function(t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                l = ["width", "height", "overflow"],
                u = ["fontSize"],
                d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = e.effects.setMode(o, t.mode || "effect"),
                f = t.restore || "effect" !== p,
                m = t.scale || "both",
                g = t.origin || ["middle", "center"],
                v = o.css("position"),
                y = f ? r : h,
                b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
            "show" === p && o.show(), s = { height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth() }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = { from: { y: o.from.height / s.height, x: o.from.width / s.width }, to: { y: o.to.height / s.height, x: o.to.width / s.width } }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function() {
                var i = e(this),
                    s = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() };
                f && e.effects.save(i, l), i.from = { height: s.height * a.from.y, width: s.width * a.from.x, outerHeight: s.outerHeight * a.from.y, outerWidth: s.outerWidth * a.from.x }, i.to = { height: s.height * a.to.y, width: s.width * a.to.x, outerHeight: s.height * a.to.y, outerWidth: s.width * a.to.x }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function() { f && e.effects.restore(i, l) })
            })), o.animate(o.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({ position: "relative", top: o.to.top, left: o.to.left }) : e.each(["top", "left"], function(e, t) {
                        o.css(t, function(t, i) {
                            var s = parseInt(i, 10),
                                n = e ? o.to.left : o.to.top;
                            return "auto" === i ? n + "px" : s + n + "px"
                        })
                    })), e.effects.removeWrapper(o), i()
                }
            })
        }, e.effects.effect.scale = function(t, i) {
            var s = e(this),
                n = e.extend(!0, {}, t),
                a = e.effects.setMode(s, t.mode || "effect"),
                o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100),
                r = t.direction || "both",
                h = t.origin,
                l = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() },
                u = { y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1 };
            n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : l), n.to = { height: l.height * u.y, width: l.width * u.x, outerHeight: l.outerHeight * u.y, outerWidth: l.outerWidth * u.x }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
        }, e.effects.effect.puff = function(t, i) {
            var s = e(this),
                n = e.effects.setMode(s, t.mode || "hide"),
                a = "hide" === n,
                o = parseInt(t.percent, 10) || 150,
                r = o / 100,
                h = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() };
            e.extend(t, { effect: "scale", queue: !1, fade: !0, mode: n, complete: i, percent: a ? o : 100, from: a ? h : { height: h.height * r, width: h.width * r, outerHeight: h.outerHeight * r, outerWidth: h.outerWidth * r } }), s.effect(t)
        }, e.effects.effect.pulsate = function(t, i) {
            var s, n = e(this),
                a = e.effects.setMode(n, t.mode || "show"),
                o = "show" === a,
                r = "hide" === a,
                h = o || "hide" === a,
                l = 2 * (t.times || 5) + (h ? 1 : 0),
                u = t.duration / l,
                d = 0,
                c = n.queue(),
                p = c.length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++) n.animate({ opacity: d }, u, t.easing), d = 1 - d;
            n.animate({ opacity: d }, u, t.easing), n.queue(function() { r && n.hide(), i() }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue()
        }, e.effects.effect.shake = function(t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = e.effects.setMode(n, t.mode || "effect"),
                r = t.direction || "left",
                h = t.distance || 20,
                l = t.times || 3,
                u = 2 * l + 1,
                d = Math.round(t.duration / u),
                c = "up" === r || "down" === r ? "top" : "left",
                p = "up" === r || "left" === r,
                f = {},
                m = {},
                g = {},
                v = n.queue(),
                y = v.length;
            for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++) n.animate(m, d, t.easing).animate(g, d, t.easing);
            n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function() { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue()
        }, e.effects.effect.slide = function(t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "width", "height"],
                o = e.effects.setMode(n, t.mode || "show"),
                r = "show" === o,
                h = t.direction || "left",
                l = "up" === h || "down" === h ? "top" : "left",
                u = "up" === h || "left" === h,
                d = {};
            e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({ overflow: "hidden" }), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() } })
        }, e.effects.effect.transfer = function(t, i) {
            var s = e(this),
                n = e(t.to),
                a = "fixed" === n.css("position"),
                o = e("body"),
                r = a ? o.scrollTop() : 0,
                h = a ? o.scrollLeft() : 0,
                l = n.offset(),
                u = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() },
                d = s.offset(),
                c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({ top: d.top - r, left: d.left - h, height: s.innerHeight(), width: s.innerWidth(), position: a ? "fixed" : "absolute" }).animate(u, t.duration, t.easing, function() { c.remove(), i() })
        }
});