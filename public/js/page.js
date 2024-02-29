; /* Start:"a:4:{s:4:"full";s:33:"/_dist/js/app.js?1707915872302292";s:6:"source";s:16:"/_dist/js/app.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var Yu = Object.defineProperty;
var Xu = (n, e, t) => e in n ? Yu(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var Le = (n, e, t) => (Xu(n, typeof e != "symbol" ? e + "" : e, t), t);

function fo(n, e) {
    const t = document.querySelectorAll(n),
        i = document.querySelectorAll(e);

    function s(r) {
        t.forEach((a, o) => {
            const l = i[o];
            !a.contains(r.target) && !l.contains(r.target) && (a.classList.remove("active"), l.classList.remove("active"))
        })
    }
    t.forEach((r, a) => {
        const o = i[a];
        r.onclick = function() {
            t.forEach((l, u) => {
                const d = i[u];
                u !== a && (l.classList.remove("active"), d.classList.remove("active"))
            }), r.classList.toggle("active"), o.classList.toggle("active")
        }
    }), document.addEventListener("click", s)
}

function po(n) {
    return n !== null && typeof n == "object" && "constructor" in n && n.constructor === Object
}

function Ra(n, e) {
    n === void 0 && (n = {}), e === void 0 && (e = {}), Object.keys(e).forEach(t => {
        typeof n[t] > "u" ? n[t] = e[t] : po(e[t]) && po(n[t]) && Object.keys(e[t]).length > 0 && Ra(n[t], e[t])
    })
}
const nl = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

 function js() {
    const n = typeof document < "u" ? document : {};
    return Ra(n, nl), n
}
const ju = {
    document: nl,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(n) {
        return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0)
    },
    cancelAnimationFrame(n) {
        typeof setTimeout > "u" || clearTimeout(n)
    }
};

function bt() {
    const n = typeof window < "u" ? window : {};
    return Ra(n, ju), n
}

function Uu(n) {
    return n === void 0 && (n = ""), n.trim().split(" ").filter(e => !!e.trim())
}

function Wu(n) {
    const e = n;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    })
}

function wr(n, e) {
    return e === void 0 && (e = 0), setTimeout(n, e)
}

function vi() {
    return Date.now()
}

function Ku(n) {
    const e = bt();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(n, null)), !t && n.currentStyle && (t = n.currentStyle), t || (t = n.style), t
}

function Zu(n, e) {
    e === void 0 && (e = "x");
    const t = bt();
    let i, s, r;
    const a = Ku(n);
    return t.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(o => o.replace(",", ".")).join(", ")), r = new t.WebKitCSSMatrix(s === "none" ? "" : s)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? s = r.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? s = r.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])), s || 0
}

function Or(n) {
    return typeof n == "object" && n !== null && n.constructor && Object.prototype.toString.call(n).slice(8, -1) === "Object"
}

function Qu(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? n instanceof HTMLElement : n && (n.nodeType === 1 || n.nodeType === 11)
}

function Et() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (i != null && !Qu(i)) {
            const s = Object.keys(Object(i)).filter(r => e.indexOf(r) < 0);
            for (let r = 0, a = s.length; r < a; r += 1) {
                const o = s[r],
                    l = Object.getOwnPropertyDescriptor(i, o);
                l !== void 0 && l.enumerable && (Or(n[o]) && Or(i[o]) ? i[o].__swiper__ ? n[o] = i[o] : Et(n[o], i[o]) : !Or(n[o]) && Or(i[o]) ? (n[o] = {}, i[o].__swiper__ ? n[o] = i[o] : Et(n[o], i[o])) : n[o] = i[o])
            }
        }
    }
    return n
}

function Dr(n, e, t) {
    n.style.setProperty(e, t)
}

function al(n) {
    let {
        swiper: e,
        targetPosition: t,
        side: i
    } = n;
    const s = bt(),
        r = -e.translate;
    let a = null,
        o;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > r ? "next" : "prev",
        d = (f, h) => u === "next" && f >= h || u === "prev" && f <= h,
        c = () => {
            o = new Date().getTime(), a === null && (a = o);
            const f = Math.max(Math.min((o - a) / l, 1), 0),
                h = .5 - Math.cos(f * Math.PI) / 2;
            let _ = r + h * (t - r);
            if (d(_, t) && (_ = t), e.wrapperEl.scrollTo({
                    [i]: _
                }), d(_, t)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [i]: _
                    })
                }), s.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = s.requestAnimationFrame(c)
        };
    c()
}

function ol(n) {
    return n.querySelector(".swiper-slide-transform") || n.shadowRoot && n.shadowRoot.querySelector(".swiper-slide-transform") || n
}

function ni(n, e) {
    return e === void 0 && (e = ""), [...n.children].filter(t => t.matches(e))
}

function cn(n) {
    try {
        console.warn(n);
        return
    } catch {}
}

function hn(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...Array.isArray(e) ? e : Uu(e)), t
}

function Ju(n, e) {
    const t = [];
    for (; n.previousElementSibling;) {
        const i = n.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i), n = i
    }
    return t
}

function ed(n, e) {
    const t = [];
    for (; n.nextElementSibling;) {
        const i = n.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i), n = i
    }
    return t
}

function Ii(n, e) {
    return bt().getComputedStyle(n, null).getPropertyValue(e)
}

function fn(n) {
    let e = n,
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function ll(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i;) e ? i.matches(e) && t.push(i) : t.push(i), i = i.parentElement;
    return t
}

function td(n, e) {
    function t(i) {
        i.target === n && (e.call(n, i), n.removeEventListener("transitionend", t))
    }
    e && n.addEventListener("transitionend", t)
}

function aa(n, e, t) {
    const i = bt();
    return t ? n[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : n.offsetWidth
}
let Dn;

function id() {
    const n = bt(),
        e = js();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in n || n.DocumentTouch && e instanceof n.DocumentTouch)
    }
}

function ul() {
    return Dn || (Dn = id()), Dn
}
let Bn;

function sd(n) {
    let {
        userAgent: e
    } = n === void 0 ? {} : n;
    const t = ul(),
        i = bt(),
        s = i.navigator.platform,
        r = e || i.navigator.userAgent,
        a = {
            ios: !1,
            android: !1
        },
        o = i.screen.width,
        l = i.screen.height,
        u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = r.match(/(iPad).*OS\s([\d_]+)/);
    const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
        f = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        h = s === "Win32";
    let _ = s === "MacIntel";
    const p = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && _ && t.touch && p.indexOf(`${o}x${l}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), _ = !1), u && !h && (a.os = "android", a.android = !0), (d || f || c) && (a.os = "ios", a.ios = !0), a
}

function rd(n) {
    return n === void 0 && (n = {}), Bn || (Bn = sd(n)), Bn
}
let Vn;

function nd() {
    const n = bt();
    let e = !1;

    function t() {
        const i = n.navigator.userAgent.toLowerCase();
        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    if (t()) {
        const i = String(n.navigator.userAgent);
        if (i.includes("Version/")) {
            const [s, r] = i.split("Version/")[1].split(" ")[0].split(".").map(a => Number(a));
            e = s < 16 || s === 16 && r < 2
        }
    }
    return {
        isSafari: e || t(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
    }
}

function ad() {
    return Vn || (Vn = nd()), Vn
}

function od(n) {
    let {
        swiper: e,
        on: t,
        emit: i
    } = n;
    const s = bt();
    let r = null,
        a = null;
    const o = () => {
            !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"))
        },
        l = () => {
            !e || e.destroyed || !e.initialized || (r = new ResizeObserver(c => {
                a = s.requestAnimationFrame(() => {
                    const {
                        width: f,
                        height: h
                    } = e;
                    let _ = f,
                        p = h;
                    c.forEach(b => {
                        let {
                            contentBoxSize: w,
                            contentRect: g,
                            target: m
                        } = b;
                        m && m !== e.el || (_ = g ? g.width : (w[0] || w).inlineSize, p = g ? g.height : (w[0] || w).blockSize)
                    }), (_ !== f || p !== h) && o()
                })
            }), r.observe(e.el))
        },
        u = () => {
            a && s.cancelAnimationFrame(a), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
        },
        d = () => {
            !e || e.destroyed || !e.initialized || i("orientationchange")
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
            l();
            return
        }
        s.addEventListener("resize", o), s.addEventListener("orientationchange", d)
    }), t("destroy", () => {
        u(), s.removeEventListener("resize", o), s.removeEventListener("orientationchange", d)
    })
}

function ld(n) {
    let {
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    } = n;
    const r = [],
        a = bt(),
        o = function(d, c) {
            c === void 0 && (c = {});
            const f = a.MutationObserver || a.WebkitMutationObserver,
                h = new f(_ => {
                    if (e.__preventObserver__) return;
                    if (_.length === 1) {
                        s("observerUpdate", _[0]);
                        return
                    }
                    const p = function() {
                        s("observerUpdate", _[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(p) : a.setTimeout(p, 0)
                });
            h.observe(d, {
                attributes: typeof c.attributes > "u" ? !0 : c.attributes,
                childList: typeof c.childList > "u" ? !0 : c.childList,
                characterData: typeof c.characterData > "u" ? !0 : c.characterData
            }), r.push(h)
        },
        l = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const d = ll(e.hostEl);
                    for (let c = 0; c < d.length; c += 1) o(d[c])
                }
                o(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }), o(e.wrapperEl, {
                    attributes: !1
                })
            }
        },
        u = () => {
            r.forEach(d => {
                d.disconnect()
            }), r.splice(0, r.length)
        };
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), i("init", l), i("destroy", u)
}
var ud = {
    on(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
        const s = t ? "unshift" : "push";
        return n.split(" ").forEach(r => {
            i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][s](e)
        }), i
    },
    once(n, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;

        function s() {
            i.off(n, s), s.__emitterProxy && delete s.__emitterProxy;
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            e.apply(i, a)
        }
        return s.__emitterProxy = e, i.on(n, s, t)
    },
    onAny(n, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof n != "function") return t;
        const i = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t
    },
    offAny(n) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
        const t = e.eventsAnyListeners.indexOf(n);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
    },
    off(n, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || n.split(" ").forEach(i => {
            typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((s, r) => {
                (s === e || s.__emitterProxy && s.__emitterProxy === e) && t.eventsListeners[i].splice(r, 1)
            })
        }), t
    },
    emit() {
        const n = this;
        if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
        let e, t, i;
        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
        return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = n) : (e = r[0].events, t = r[0].data, i = r[0].context || n), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(l => {
            n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach(u => {
                u.apply(i, [l, ...t])
            }), n.eventsListeners && n.eventsListeners[l] && n.eventsListeners[l].forEach(u => {
                u.apply(i, t)
            })
        }), n
    }
};

function dd() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null ? e = n.params.width : e = i.clientWidth, typeof n.params.height < "u" && n.params.height !== null ? t = n.params.height : t = i.clientHeight, !(e === 0 && n.isHorizontal() || t === 0 && n.isVertical()) && (e = e - parseInt(Ii(i, "padding-left") || 0, 10) - parseInt(Ii(i, "padding-right") || 0, 10), t = t - parseInt(Ii(i, "padding-top") || 0, 10) - parseInt(Ii(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(n, {
        width: e,
        height: t,
        size: n.isHorizontal() ? e : t
    }))
}

function cd() {
    const n = this;

    function e(x, I) {
        return parseFloat(x.getPropertyValue(n.getDirectionLabel(I)) || 0)
    }
    const t = n.params,
        {
            wrapperEl: i,
            slidesEl: s,
            size: r,
            rtlTranslate: a,
            wrongRTL: o
        } = n,
        l = n.virtual && t.virtual.enabled,
        u = l ? n.virtual.slides.length : n.slides.length,
        d = ni(s, `.${n.params.slideClass}, swiper-slide`),
        c = l ? n.virtual.slides.length : d.length;
    let f = [];
    const h = [],
        _ = [];
    let p = t.slidesOffsetBefore;
    typeof p == "function" && (p = t.slidesOffsetBefore.call(n));
    let b = t.slidesOffsetAfter;
    typeof b == "function" && (b = t.slidesOffsetAfter.call(n));
    const w = n.snapGrid.length,
        g = n.slidesGrid.length;
    let m = t.spaceBetween,
        v = -p,
        S = 0,
        k = 0;
    if (typeof r > "u") return;
    typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * r : typeof m == "string" && (m = parseFloat(m)), n.virtualSize = -m, d.forEach(x => {
        a ? x.style.marginLeft = "" : x.style.marginRight = "", x.style.marginBottom = "", x.style.marginTop = ""
    }), t.centeredSlides && t.cssMode && (Dr(i, "--swiper-centered-offset-before", ""), Dr(i, "--swiper-centered-offset-after", ""));
    const E = t.grid && t.grid.rows > 1 && n.grid;
    E ? n.grid.initSlides(d) : n.grid && n.grid.unsetSlides();
    let M;
    const T = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(x => typeof t.breakpoints[x].slidesPerView < "u").length > 0;
    for (let x = 0; x < c; x += 1) {
        M = 0;
        let I;
        if (d[x] && (I = d[x]), E && n.grid.updateSlide(x, I, d), !(d[x] && Ii(I, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                T && (d[x].style[n.getDirectionLabel("width")] = "");
                const F = getComputedStyle(I),
                    A = I.style.transform,
                    P = I.style.webkitTransform;
                if (A && (I.style.transform = "none"), P && (I.style.webkitTransform = "none"), t.roundLengths) M = n.isHorizontal() ? aa(I, "width", !0) : aa(I, "height", !0);
                else {
                    const L = e(F, "width"),
                        B = e(F, "padding-left"),
                        R = e(F, "padding-right"),
                        H = e(F, "margin-left"),
                        te = e(F, "margin-right"),
                        y = F.getPropertyValue("box-sizing");
                    if (y && y === "border-box") M = L + H + te;
                    else {
                        const {
                            clientWidth: ne,
                            offsetWidth: ze
                        } = I;
                        M = L + B + R + H + te + (ze - ne)
                    }
                }
                A && (I.style.transform = A), P && (I.style.webkitTransform = P), t.roundLengths && (M = Math.floor(M))
            } else M = (r - (t.slidesPerView - 1) * m) / t.slidesPerView, t.roundLengths && (M = Math.floor(M)), d[x] && (d[x].style[n.getDirectionLabel("width")] = `${M}px`);
            d[x] && (d[x].swiperSlideSize = M), _.push(M), t.centeredSlides ? (v = v + M / 2 + S / 2 + m, S === 0 && x !== 0 && (v = v - r / 2 - m), x === 0 && (v = v - r / 2 - m), Math.abs(v) < 1 / 1e3 && (v = 0), t.roundLengths && (v = Math.floor(v)), k % t.slidesPerGroup === 0 && f.push(v), h.push(v)) : (t.roundLengths && (v = Math.floor(v)), (k - Math.min(n.params.slidesPerGroupSkip, k)) % n.params.slidesPerGroup === 0 && f.push(v), h.push(v), v = v + M + m), n.virtualSize += M + m, S = M, k += 1
        }
    }
    if (n.virtualSize = Math.max(n.virtualSize, r) + b, a && o && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${n.virtualSize+m}px`), t.setWrapperSize && (i.style[n.getDirectionLabel("width")] = `${n.virtualSize+m}px`), E && n.grid.updateWrapperSize(M, f), !t.centeredSlides) {
        const x = [];
        for (let I = 0; I < f.length; I += 1) {
            let F = f[I];
            t.roundLengths && (F = Math.floor(F)), f[I] <= n.virtualSize - r && x.push(F)
        }
        f = x, Math.floor(n.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 && f.push(n.virtualSize - r)
    }
    if (l && t.loop) {
        const x = _[0] + m;
        if (t.slidesPerGroup > 1) {
            const I = Math.ceil((n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup),
                F = x * t.slidesPerGroup;
            for (let A = 0; A < I; A += 1) f.push(f[f.length - 1] + F)
        }
        for (let I = 0; I < n.virtual.slidesBefore + n.virtual.slidesAfter; I += 1) t.slidesPerGroup === 1 && f.push(f[f.length - 1] + x), h.push(h[h.length - 1] + x), n.virtualSize += x
    }
    if (f.length === 0 && (f = [0]), m !== 0) {
        const x = n.isHorizontal() && a ? "marginLeft" : n.getDirectionLabel("marginRight");
        d.filter((I, F) => !t.cssMode || t.loop ? !0 : F !== d.length - 1).forEach(I => {
            I.style[x] = `${m}px`
        })
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let x = 0;
        _.forEach(F => {
            x += F + (m || 0)
        }), x -= m;
        const I = x - r;
        f = f.map(F => F <= 0 ? -p : F > I ? I + b : F)
    }
    if (t.centerInsufficientSlides) {
        let x = 0;
        if (_.forEach(I => {
                x += I + (m || 0)
            }), x -= m, x < r) {
            const I = (r - x) / 2;
            f.forEach((F, A) => {
                f[A] = F - I
            }), h.forEach((F, A) => {
                h[A] = F + I
            })
        }
    }
    if (Object.assign(n, {
            slides: d,
            snapGrid: f,
            slidesGrid: h,
            slidesSizesGrid: _
        }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        Dr(i, "--swiper-centered-offset-before", `${-f[0]}px`), Dr(i, "--swiper-centered-offset-after", `${n.size/2-_[_.length-1]/2}px`);
        const x = -n.snapGrid[0],
            I = -n.slidesGrid[0];
        n.snapGrid = n.snapGrid.map(F => F + x), n.slidesGrid = n.slidesGrid.map(F => F + I)
    }
    if (c !== u && n.emit("slidesLengthChange"), f.length !== w && (n.params.watchOverflow && n.checkOverflow(), n.emit("snapGridLengthChange")), h.length !== g && n.emit("slidesGridLengthChange"), t.watchSlidesProgress && n.updateSlidesOffset(), !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const x = `${t.containerModifierClass}backface-hidden`,
            I = n.el.classList.contains(x);
        c <= t.maxBackfaceHiddenSlides ? I || n.el.classList.add(x) : I && n.el.classList.remove(x)
    }
}

function hd(n) {
    const e = this,
        t = [],
        i = e.virtual && e.params.virtual.enabled;
    let s = 0,
        r;
    typeof n == "number" ? e.setTransition(n) : n === !0 && e.setTransition(e.params.speed);
    const a = o => i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)(e.visibleSlides || []).forEach(o => {
            t.push(o)
        });
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const o = e.activeIndex + r;
                if (o > e.slides.length && !i) break;
                t.push(a(o))
            } else t.push(a(e.activeIndex));
    for (r = 0; r < t.length; r += 1)
        if (typeof t[r] < "u") {
            const o = t[r].offsetHeight;
            s = o > s ? o : s
        }(s || s === 0) && (e.wrapperEl.style.height = `${s}px`)
}

function fd() {
    const n = this,
        e = n.slides,
        t = n.isElement ? n.isHorizontal() ? n.wrapperEl.offsetLeft : n.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - n.cssOverflowAdjustment()
}

function pd(n) {
    n === void 0 && (n = this && this.translate || 0);
    const e = this,
        t = e.params,
        {
            slides: i,
            rtlTranslate: s,
            snapGrid: r
        } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -n;
    s && (a = n), i.forEach(l => {
        l.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let o = t.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < i.length; l += 1) {
        const u = i[l];
        let d = u.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
        const c = (a + (t.centeredSlides ? e.minTranslate() : 0) - d) / (u.swiperSlideSize + o),
            f = (a - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (u.swiperSlideSize + o),
            h = -(a - d),
            _ = h + e.slidesSizesGrid[l],
            p = h >= 0 && h <= e.size - e.slidesSizesGrid[l];
        (h >= 0 && h < e.size - 1 || _ > 1 && _ <= e.size || h <= 0 && _ >= e.size) && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l), i[l].classList.add(t.slideVisibleClass)), p && i[l].classList.add(t.slideFullyVisibleClass), u.progress = s ? -c : c, u.originalProgress = s ? -f : f
    }
}

function md(n) {
    const e = this;
    if (typeof n > "u") {
        const d = e.rtlTranslate ? -1 : 1;
        n = e && e.translate && e.translate * d || 0
    }
    const t = e.params,
        i = e.maxTranslate() - e.minTranslate();
    let {
        progress: s,
        isBeginning: r,
        isEnd: a,
        progressLoop: o
    } = e;
    const l = r,
        u = a;
    if (i === 0) s = 0, r = !0, a = !0;
    else {
        s = (n - e.minTranslate()) / i;
        const d = Math.abs(n - e.minTranslate()) < 1,
            c = Math.abs(n - e.maxTranslate()) < 1;
        r = d || s <= 0, a = c || s >= 1, d && (s = 0), c && (s = 1)
    }
    if (t.loop) {
        const d = e.getSlideIndexByData(0),
            c = e.getSlideIndexByData(e.slides.length - 1),
            f = e.slidesGrid[d],
            h = e.slidesGrid[c],
            _ = e.slidesGrid[e.slidesGrid.length - 1],
            p = Math.abs(n);
        p >= f ? o = (p - f) / _ : o = (p + _ - h) / _, o > 1 && (o -= 1)
    }
    Object.assign(e, {
        progress: s,
        progressLoop: o,
        isBeginning: r,
        isEnd: a
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(n), r && !l && e.emit("reachBeginning toEdge"), a && !u && e.emit("reachEnd toEdge"), (l && !r || u && !a) && e.emit("fromEdge"), e.emit("progress", s)
}

function gd() {
    const n = this,
        {
            slides: e,
            params: t,
            slidesEl: i,
            activeIndex: s
        } = n,
        r = n.virtual && t.virtual.enabled,
        a = n.grid && t.grid && t.grid.rows > 1,
        o = c => ni(i, `.${t.slideClass}${c}, swiper-slide${c}`)[0];
    e.forEach(c => {
        c.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    });
    let l, u, d;
    if (r)
        if (t.loop) {
            let c = s - n.virtual.slidesBefore;
            c < 0 && (c = n.virtual.slides.length + c), c >= n.virtual.slides.length && (c -= n.virtual.slides.length), l = o(`[data-swiper-slide-index="${c}"]`)
        } else l = o(`[data-swiper-slide-index="${s}"]`);
    else a ? (l = e.filter(c => c.column === s)[0], d = e.filter(c => c.column === s + 1)[0], u = e.filter(c => c.column === s - 1)[0]) : l = e[s];
    l && (l.classList.add(t.slideActiveClass), a ? (d && d.classList.add(t.slideNextClass), u && u.classList.add(t.slidePrevClass)) : (d = ed(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d && (d = e[0]), d && d.classList.add(t.slideNextClass), u = Ju(l, `.${t.slideClass}, swiper-slide`)[0], t.loop && !u === 0 && (u = e[e.length - 1]), u && u.classList.add(t.slidePrevClass))), n.emitSlidesClasses()
}
const Kr = (n, e) => {
        if (!n || n.destroyed || !n.params) return;
        const t = () => n.isElement ? "swiper-slide" : `.${n.params.slideClass}`,
            i = e.closest(t());
        if (i) {
            let s = i.querySelector(`.${n.params.lazyPreloaderClass}`);
            !s && n.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                i.shadowRoot && (s = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`), s && s.remove())
            })), s && s.remove()
        }
    },
    Rn = (n, e) => {
        if (!n.slides[e]) return;
        const t = n.slides[e].querySelector('[loading="lazy"]');
        t && t.removeAttribute("loading")
    },
    oa = n => {
        if (!n || n.destroyed || !n.params) return;
        let e = n.params.lazyPreloadPrevNext;
        const t = n.slides.length;
        if (!t || !e || e < 0) return;
        e = Math.min(e, t);
        const i = n.params.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(n.params.slidesPerView),
            s = n.activeIndex;
        if (n.params.grid && n.params.grid.rows > 1) {
            const a = s,
                o = [a - e];
            o.push(...Array.from({
                length: e
            }).map((l, u) => a + i + u)), n.slides.forEach((l, u) => {
                o.includes(l.column) && Rn(n, u)
            });
            return
        }
        const r = s + i - 1;
        if (n.params.rewind || n.params.loop)
            for (let a = s - e; a <= r + e; a += 1) {
                const o = (a % t + t) % t;
                (o < s || o > r) && Rn(n, o)
            } else
                for (let a = Math.max(s - e, 0); a <= Math.min(r + e, t - 1); a += 1) a !== s && (a > r || a < s) && Rn(n, a)
    };

function _d(n) {
    const {
        slidesGrid: e,
        params: t
    } = n, i = n.rtlTranslate ? n.translate : -n.translate;
    let s;
    for (let r = 0; r < e.length; r += 1) typeof e[r + 1] < "u" ? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2 ? s = r : i >= e[r] && i < e[r + 1] && (s = r + 1) : i >= e[r] && (s = r);
    return t.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s
}

function vd(n) {
    const e = this,
        t = e.rtlTranslate ? e.translate : -e.translate,
        {
            snapGrid: i,
            params: s,
            activeIndex: r,
            realIndex: a,
            snapIndex: o
        } = e;
    let l = n,
        u;
    const d = h => {
        let _ = h - e.virtual.slidesBefore;
        return _ < 0 && (_ = e.virtual.slides.length + _), _ >= e.virtual.slides.length && (_ -= e.virtual.slides.length), _
    };
    if (typeof l > "u" && (l = _d(e)), i.indexOf(t) >= 0) u = i.indexOf(t);
    else {
        const h = Math.min(s.slidesPerGroupSkip, l);
        u = h + Math.floor((l - h) / s.slidesPerGroup)
    }
    if (u >= i.length && (u = i.length - 1), l === r && !e.params.loop) {
        u !== o && (e.snapIndex = u, e.emit("snapIndexChange"));
        return
    }
    if (l === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = d(l);
        return
    }
    const c = e.grid && s.grid && s.grid.rows > 1;
    let f;
    if (e.virtual && s.virtual.enabled && s.loop) f = d(l);
    else if (c) {
        const h = e.slides.filter(p => p.column === l)[0];
        let _ = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(_) && (_ = Math.max(e.slides.indexOf(h), 0)), f = Math.floor(_ / s.grid.rows)
    } else if (e.slides[l]) {
        const h = e.slides[l].getAttribute("data-swiper-slide-index");
        h ? f = parseInt(h, 10) : f = l
    } else f = l;
    Object.assign(e, {
        previousSnapIndex: o,
        snapIndex: u,
        previousRealIndex: a,
        realIndex: f,
        previousIndex: r,
        activeIndex: l
    }), e.initialized && oa(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (a !== f && e.emit("realIndexChange"), e.emit("slideChange"))
}

function bd(n, e) {
    const t = this,
        i = t.params;
    let s = n.closest(`.${i.slideClass}, swiper-slide`);
    !s && t.isElement && e && e.length > 1 && e.includes(n) && [...e.slice(e.indexOf(n) + 1, e.length)].forEach(o => {
        !s && o.matches && o.matches(`.${i.slideClass}, swiper-slide`) && (s = o)
    });
    let r = !1,
        a;
    if (s) {
        for (let o = 0; o < t.slides.length; o += 1)
            if (t.slides[o] === s) {
                r = !0, a = o;
                break
            }
    }
    if (s && r) t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var wd = {
    updateSize: dd,
    updateSlides: cd,
    updateAutoHeight: hd,
    updateSlidesOffset: fd,
    updateSlidesProgress: pd,
    updateProgress: md,
    updateSlidesClasses: gd,
    updateActiveIndex: vd,
    updateClickedSlide: bd
};

function yd(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this,
        {
            params: t,
            rtlTranslate: i,
            translate: s,
            wrapperEl: r
        } = e;
    if (t.virtualTranslate) return i ? -s : s;
    if (t.cssMode) return s;
    let a = Zu(r, n);
    return a += e.cssOverflowAdjustment(), i && (a = -a), a || 0
}

function Sd(n, e) {
    const t = this,
        {
            rtlTranslate: i,
            params: s,
            wrapperEl: r,
            progress: a
        } = t;
    let o = 0,
        l = 0;
    const u = 0;
    t.isHorizontal() ? o = i ? -n : n : l = n, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? o : l, s.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -o : -l : s.virtualTranslate || (t.isHorizontal() ? o -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${l}px, ${u}px)`);
    let d;
    const c = t.maxTranslate() - t.minTranslate();
    c === 0 ? d = 0 : d = (n - t.minTranslate()) / c, d !== a && t.updateProgress(n), t.emit("setTranslate", t.translate, e)
}

function xd() {
    return -this.snapGrid[0]
}

function Td() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function Ed(n, e, t, i, s) {
    n === void 0 && (n = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = !0);
    const r = this,
        {
            params: a,
            wrapperEl: o
        } = r;
    if (r.animating && a.preventInteractionOnTransition) return !1;
    const l = r.minTranslate(),
        u = r.maxTranslate();
    let d;
    if (i && n > l ? d = l : i && n < u ? d = u : d = n, r.updateProgress(d), a.cssMode) {
        const c = r.isHorizontal();
        if (e === 0) o[c ? "scrollLeft" : "scrollTop"] = -d;
        else {
            if (!r.support.smoothScroll) return al({
                swiper: r,
                targetPosition: -d,
                side: c ? "left" : "top"
            }), !0;
            o.scrollTo({
                [c ? "left" : "top"]: -d,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0), r.setTranslate(d), t && (r.emit("beforeTransitionStart", e, s), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(d), t && (r.emit("beforeTransitionStart", e, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(f) {
        !r || r.destroyed || f.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, t && r.emit("transitionEnd"))
    }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
var kd = {
    getTranslate: yd,
    setTranslate: Sd,
    minTranslate: xd,
    maxTranslate: Td,
    translateTo: Ed
};

function Cd(n, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${n}ms`, t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : ""), t.emit("setTransition", n, e)
}

function dl(n) {
    let {
        swiper: e,
        runCallbacks: t,
        direction: i,
        step: s
    } = n;
    const {
        activeIndex: r,
        previousIndex: a
    } = e;
    let o = i;
    if (o || (r > a ? o = "next" : r < a ? o = "prev" : o = "reset"), e.emit(`transition${s}`), t && r !== a) {
        if (o === "reset") {
            e.emit(`slideResetTransition${s}`);
            return
        }
        e.emit(`slideChangeTransition${s}`), o === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
    }
}

function Md(n, e) {
    n === void 0 && (n = !0);
    const t = this,
        {
            params: i
        } = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(), dl({
        swiper: t,
        runCallbacks: n,
        direction: e,
        step: "Start"
    }))
}

function Fd(n, e) {
    n === void 0 && (n = !0);
    const t = this,
        {
            params: i
        } = t;
    t.animating = !1, !i.cssMode && (t.setTransition(0), dl({
        swiper: t,
        runCallbacks: n,
        direction: e,
        step: "End"
    }))
}
var Ad = {
    setTransition: Cd,
    transitionStart: Md,
    transitionEnd: Fd
};

function Id(n, e, t, i, s) {
    n === void 0 && (n = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    let a = n;
    a < 0 && (a = 0);
    const {
        params: o,
        snapGrid: l,
        slidesGrid: u,
        previousIndex: d,
        activeIndex: c,
        rtlTranslate: f,
        wrapperEl: h,
        enabled: _
    } = r;
    if (r.animating && o.preventInteractionOnTransition || !_ && !i && !s) return !1;
    const p = Math.min(r.params.slidesPerGroupSkip, a);
    let b = p + Math.floor((a - p) / r.params.slidesPerGroup);
    b >= l.length && (b = l.length - 1);
    const w = -l[b];
    if (o.normalizeSlideIndex)
        for (let m = 0; m < u.length; m += 1) {
            const v = -Math.floor(w * 100),
                S = Math.floor(u[m] * 100),
                k = Math.floor(u[m + 1] * 100);
            typeof u[m + 1] < "u" ? v >= S && v < k - (k - S) / 2 ? a = m : v >= S && v < k && (a = m + 1) : v >= S && (a = m)
        }
    if (r.initialized && a !== c && (!r.allowSlideNext && (f ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()) || !r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (c || 0) !== a)) return !1;
    a !== (d || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(w);
    let g;
    if (a > c ? g = "next" : a < c ? g = "prev" : g = "reset", f && -w === r.translate || !f && w === r.translate) return r.updateActiveIndex(a), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), o.effect !== "slide" && r.setTranslate(w), g !== "reset" && (r.transitionStart(t, g), r.transitionEnd(t, g)), !1;
    if (o.cssMode) {
        const m = r.isHorizontal(),
            v = f ? w : -w;
        if (e === 0) {
            const S = r.virtual && r.params.virtual.enabled;
            S && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), S && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                h[m ? "scrollLeft" : "scrollTop"] = v
            })) : h[m ? "scrollLeft" : "scrollTop"] = v, S && requestAnimationFrame(() => {
                r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
            })
        } else {
            if (!r.support.smoothScroll) return al({
                swiper: r,
                targetPosition: v,
                side: m ? "left" : "top"
            }), !0;
            h.scrollTo({
                [m ? "left" : "top"]: v,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e), r.setTranslate(w), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(t, g), e === 0 ? r.transitionEnd(t, g) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(v) {
        !r || r.destroyed || v.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(t, g))
    }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function Pd(n, e, t, i) {
    n === void 0 && (n = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof n == "string" && (n = parseInt(n, 10));
    const s = this,
        r = s.grid && s.params.grid && s.params.grid.rows > 1;
    let a = n;
    if (s.params.loop)
        if (s.virtual && s.params.virtual.enabled) a = a + s.virtual.slidesBefore;
        else {
            let o;
            if (r) {
                const f = a * s.params.grid.rows;
                o = s.slides.filter(h => h.getAttribute("data-swiper-slide-index") * 1 === f)[0].column
            } else o = s.getSlideIndexByData(a);
            const l = r ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length,
                {
                    centeredSlides: u
                } = s.params;
            let d = s.params.slidesPerView;
            d === "auto" ? d = s.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(s.params.slidesPerView, 10)), u && d % 2 === 0 && (d = d + 1));
            let c = l - o < d;
            if (u && (c = c || o < Math.ceil(d / 2)), c) {
                const f = u ? o < s.activeIndex ? "prev" : "next" : o - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
                s.loopFix({
                    direction: f,
                    slideTo: !0,
                    activeSlideIndex: f === "next" ? o + 1 : o - l + 1,
                    slideRealIndex: f === "next" ? s.realIndex : void 0
                })
            }
            if (r) {
                const f = a * s.params.grid.rows;
                a = s.slides.filter(h => h.getAttribute("data-swiper-slide-index") * 1 === f)[0].column
            } else a = s.getSlideIndexByData(a)
        } return requestAnimationFrame(() => {
        s.slideTo(a, e, t, i)
    }), s
}

function Ld(n, e, t) {
    n === void 0 && (n = this.params.speed), e === void 0 && (e = !0);
    const i = this,
        {
            enabled: s,
            params: r,
            animating: a
        } = i;
    if (!s) return i;
    let o = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : o,
        u = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (a && !u && r.loopPreventsSliding) return !1;
        if (i.loopFix({
                direction: "next"
            }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + l, n, e, t)
        }), !0
    }
    return r.rewind && i.isEnd ? i.slideTo(0, n, e, t) : i.slideTo(i.activeIndex + l, n, e, t)
}

function Od(n, e, t) {
    n === void 0 && (n = this.params.speed), e === void 0 && (e = !0);
    const i = this,
        {
            params: s,
            snapGrid: r,
            slidesGrid: a,
            rtlTranslate: o,
            enabled: l,
            animating: u
        } = i;
    if (!l) return i;
    const d = i.virtual && s.virtual.enabled;
    if (s.loop) {
        if (u && !d && s.loopPreventsSliding) return !1;
        i.loopFix({
            direction: "prev"
        }), i._clientLeft = i.wrapperEl.clientLeft
    }
    const c = o ? i.translate : -i.translate;

    function f(w) {
        return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w)
    }
    const h = f(c),
        _ = r.map(w => f(w));
    let p = r[_.indexOf(h) - 1];
    if (typeof p > "u" && s.cssMode) {
        let w;
        r.forEach((g, m) => {
            h >= g && (w = m)
        }), typeof w < "u" && (p = r[w > 0 ? w - 1 : w])
    }
    let b = 0;
    if (typeof p < "u" && (b = a.indexOf(p), b < 0 && (b = i.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (b = b - i.slidesPerViewDynamic("previous", !0) + 1, b = Math.max(b, 0))), s.rewind && i.isBeginning) {
        const w = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(w, n, e, t)
    } else if (s.loop && i.activeIndex === 0 && s.cssMode) return requestAnimationFrame(() => {
        i.slideTo(b, n, e, t)
    }), !0;
    return i.slideTo(b, n, e, t)
}

function Dd(n, e, t) {
    n === void 0 && (n = this.params.speed), e === void 0 && (e = !0);
    const i = this;
    return i.slideTo(i.activeIndex, n, e, t)
}

function Bd(n, e, t, i) {
    n === void 0 && (n = this.params.speed), e === void 0 && (e = !0), i === void 0 && (i = .5);
    const s = this;
    let r = s.activeIndex;
    const a = Math.min(s.params.slidesPerGroupSkip, r),
        o = a + Math.floor((r - a) / s.params.slidesPerGroup),
        l = s.rtlTranslate ? s.translate : -s.translate;
    if (l >= s.snapGrid[o]) {
        const u = s.snapGrid[o],
            d = s.snapGrid[o + 1];
        l - u > (d - u) * i && (r += s.params.slidesPerGroup)
    } else {
        const u = s.snapGrid[o - 1],
            d = s.snapGrid[o];
        l - u <= (d - u) * i && (r -= s.params.slidesPerGroup)
    }
    return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, n, e, t)
}

function Vd() {
    const n = this,
        {
            params: e,
            slidesEl: t
        } = n,
        i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let s = n.clickedIndex,
        r;
    const a = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (n.animating) return;
        r = parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? s < n.loopedSlides - i / 2 || s > n.slides.length - n.loopedSlides + i / 2 ? (n.loopFix(), s = n.getSlideIndex(ni(t, `${a}[data-swiper-slide-index="${r}"]`)[0]), wr(() => {
            n.slideTo(s)
        })) : n.slideTo(s) : s > n.slides.length - i ? (n.loopFix(), s = n.getSlideIndex(ni(t, `${a}[data-swiper-slide-index="${r}"]`)[0]), wr(() => {
            n.slideTo(s)
        })) : n.slideTo(s)
    } else n.slideTo(s)
}
var Rd = {
    slideTo: Id,
    slideToLoop: Pd,
    slideNext: Ld,
    slidePrev: Od,
    slideReset: Dd,
    slideToClosest: Bd,
    slideToClickedSlide: Vd
};

function zd(n) {
    const e = this,
        {
            params: t,
            slidesEl: i
        } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    const s = () => {
            ni(i, `.${t.slideClass}, swiper-slide`).forEach((c, f) => {
                c.setAttribute("data-swiper-slide-index", f)
            })
        },
        r = e.grid && t.grid && t.grid.rows > 1,
        a = t.slidesPerGroup * (r ? t.grid.rows : 1),
        o = e.slides.length % a !== 0,
        l = r && e.slides.length % t.grid.rows !== 0,
        u = d => {
            for (let c = 0; c < d; c += 1) {
                const f = e.isElement ? hn("swiper-slide", [t.slideBlankClass]) : hn("div", [t.slideClass, t.slideBlankClass]);
                e.slidesEl.append(f)
            }
        };
    if (o) {
        if (t.loopAddBlankSlides) {
            const d = a - e.slides.length % a;
            u(d), e.recalcSlides(), e.updateSlides()
        } else cn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else if (l) {
        if (t.loopAddBlankSlides) {
            const d = t.grid.rows - e.slides.length % t.grid.rows;
            u(d), e.recalcSlides(), e.updateSlides()
        } else cn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        s()
    } else s();
    e.loopFix({
        slideRealIndex: n,
        direction: t.centeredSlides ? void 0 : "next"
    })
}

function Nd(n) {
    let {
        slideRealIndex: e,
        slideTo: t = !0,
        direction: i,
        setTranslate: s,
        activeSlideIndex: r,
        byController: a,
        byMousewheel: o
    } = n === void 0 ? {} : n;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
        slides: u,
        allowSlidePrev: d,
        allowSlideNext: c,
        slidesEl: f,
        params: h
    } = l, {
        centeredSlides: _
    } = h;
    if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && h.virtual.enabled) {
        t && (!h.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : h.centeredSlides && l.snapIndex < h.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = c, l.emit("loopFix");
        return
    }
    let p = h.slidesPerView;
    p === "auto" ? p = l.slidesPerViewDynamic() : (p = Math.ceil(parseFloat(h.slidesPerView, 10)), _ && p % 2 === 0 && (p = p + 1));
    const b = h.slidesPerGroupAuto ? p : h.slidesPerGroup;
    let w = b;
    w % b !== 0 && (w += b - w % b), w += h.loopAdditionalSlides, l.loopedSlides = w;
    const g = l.grid && h.grid && h.grid.rows > 1;
    u.length < p + w ? cn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : g && h.grid.fill === "row" && cn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const m = [],
        v = [];
    let S = l.activeIndex;
    typeof r > "u" ? r = l.getSlideIndex(u.filter(A => A.classList.contains(h.slideActiveClass))[0]) : S = r;
    const k = i === "next" || !i,
        E = i === "prev" || !i;
    let M = 0,
        T = 0;
    const x = g ? Math.ceil(u.length / h.grid.rows) : u.length,
        F = (g ? u[r].column : r) + (_ && typeof s > "u" ? -p / 2 + .5 : 0);
    if (F < w) {
        M = Math.max(w - F, b);
        for (let A = 0; A < w - F; A += 1) {
            const P = A - Math.floor(A / x) * x;
            if (g) {
                const L = x - P - 1;
                for (let B = u.length - 1; B >= 0; B -= 1) u[B].column === L && m.push(B)
            } else m.push(x - P - 1)
        }
    } else if (F + p > x - w) {
        T = Math.max(F - (x - w * 2), b);
        for (let A = 0; A < T; A += 1) {
            const P = A - Math.floor(A / x) * x;
            g ? u.forEach((L, B) => {
                L.column === P && v.push(B)
            }) : v.push(P)
        }
    }
    if (l.__preventObserver__ = !0, requestAnimationFrame(() => {
            l.__preventObserver__ = !1
        }), E && m.forEach(A => {
            u[A].swiperLoopMoveDOM = !0, f.prepend(u[A]), u[A].swiperLoopMoveDOM = !1
        }), k && v.forEach(A => {
            u[A].swiperLoopMoveDOM = !0, f.append(u[A]), u[A].swiperLoopMoveDOM = !1
        }), l.recalcSlides(), h.slidesPerView === "auto" ? l.updateSlides() : g && (m.length > 0 && E || v.length > 0 && k) && l.slides.forEach((A, P) => {
            l.grid.updateSlide(P, A, l.slides)
        }), h.watchSlidesProgress && l.updateSlidesOffset(), t) {
        if (m.length > 0 && E) {
            if (typeof e > "u") {
                const A = l.slidesGrid[S],
                    L = l.slidesGrid[S + M] - A;
                o ? l.setTranslate(l.translate - L) : (l.slideTo(S + M, 0, !1, !0), s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - L, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - L))
            } else if (s) {
                const A = g ? m.length / h.grid.rows : m.length;
                l.slideTo(l.activeIndex + A, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate
            }
        } else if (v.length > 0 && k)
            if (typeof e > "u") {
                const A = l.slidesGrid[S],
                    L = l.slidesGrid[S - T] - A;
                o ? l.setTranslate(l.translate - L) : (l.slideTo(S - T, 0, !1, !0), s && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - L, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - L))
            } else {
                const A = g ? v.length / h.grid.rows : v.length;
                l.slideTo(l.activeIndex - A, 0, !1, !0)
            }
    }
    if (l.allowSlidePrev = d, l.allowSlideNext = c, l.controller && l.controller.control && !a) {
        const A = {
            slideRealIndex: e,
            direction: i,
            setTranslate: s,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(P => {
            !P.destroyed && P.params.loop && P.loopFix({
                ...A,
                slideTo: P.params.slidesPerView === h.slidesPerView ? t : !1
            })
        }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...A,
            slideTo: l.controller.control.params.slidesPerView === h.slidesPerView ? t : !1
        })
    }
    l.emit("loopFix")
}

function Gd() {
    const n = this,
        {
            params: e,
            slidesEl: t
        } = n;
    if (!e.loop || n.virtual && n.params.virtual.enabled) return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach(s => {
        const r = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
        i[r] = s
    }), n.slides.forEach(s => {
        s.removeAttribute("data-swiper-slide-index")
    }), i.forEach(s => {
        t.append(s)
    }), n.recalcSlides(), n.slideTo(n.realIndex, 0)
}
var $d = {
    loopCreate: zd,
    loopFix: Nd,
    loopDestroy: Gd
};

function Hd(n) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = n ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    })
}

function qd() {
    const n = this;
    n.params.watchOverflow && n.isLocked || n.params.cssMode || (n.isElement && (n.__preventObserver__ = !0), n[n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", n.isElement && requestAnimationFrame(() => {
        n.__preventObserver__ = !1
    }))
}
var Yd = {
    setGrabCursor: Hd,
    unsetGrabCursor: qd
};

function Xd(n, e) {
    e === void 0 && (e = this);

    function t(i) {
        if (!i || i === js() || i === bt()) return null;
        i.assignedSlot && (i = i.assignedSlot);
        const s = i.closest(n);
        return !s && !i.getRootNode ? null : s || t(i.getRootNode().host)
    }
    return t(e)
}

function mo(n, e, t) {
    const i = bt(),
        {
            params: s
        } = n,
        r = s.edgeSwipeDetection,
        a = s.edgeSwipeThreshold;
    return r && (t <= a || t >= i.innerWidth - a) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0
}

function jd(n) {
    const e = this,
        t = js();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const s = e.touchEventsData;
    if (i.type === "pointerdown") {
        if (s.pointerId !== null && s.pointerId !== i.pointerId) return;
        s.pointerId = i.pointerId
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (s.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
        mo(e, i, i.targetTouches[0].pageX);
        return
    }
    const {
        params: r,
        touches: a,
        enabled: o
    } = e;
    if (!o || !r.simulateTouch && i.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let l = i.target;
    if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
    const u = !!r.noSwipingClass && r.noSwipingClass !== "",
        d = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && d && (l = d[0]);
    const c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
        f = !!(i.target && i.target.shadowRoot);
    if (r.noSwiping && (f ? Xd(c, l) : l.closest(c))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !l.closest(r.swipeHandler)) return;
    a.currentX = i.pageX, a.currentY = i.pageY;
    const h = a.currentX,
        _ = a.currentY;
    if (!mo(e, i, h)) return;
    Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), a.startX = h, a.startY = _, s.touchStartTime = vi(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
    let p = !0;
    l.matches(s.focusableElements) && (p = !1, l.nodeName === "SELECT" && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== l && t.activeElement.blur();
    const b = p && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || b) && !l.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i)
}

function Ud(n) {
    const e = js(),
        t = this,
        i = t.touchEventsData,
        {
            params: s,
            touches: r,
            rtlTranslate: a,
            enabled: o
        } = t;
    if (!o || !s.simulateTouch && n.pointerType === "mouse") return;
    let l = n;
    if (l.originalEvent && (l = l.originalEvent), l.type === "pointermove" && (i.touchId !== null || l.pointerId !== i.pointerId)) return;
    let u;
    if (l.type === "touchmove") {
        if (u = [...l.changedTouches].filter(k => k.identifier === i.touchId)[0], !u || u.identifier !== i.touchId) return
    } else u = l;
    if (!i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
        return
    }
    const d = u.pageX,
        c = u.pageY;
    if (l.preventedByNestedSwiper) {
        r.startX = d, r.startY = c;
        return
    }
    if (!t.allowTouchMove) {
        l.target.matches(i.focusableElements) || (t.allowClick = !1), i.isTouched && (Object.assign(r, {
            startX: d,
            startY: c,
            currentX: d,
            currentY: c
        }), i.touchStartTime = vi());
        return
    }
    if (s.touchReleaseOnEdges && !s.loop) {
        if (t.isVertical()) {
            if (c < r.startY && t.translate <= t.maxTranslate() || c > r.startY && t.translate >= t.minTranslate()) {
                i.isTouched = !1, i.isMoved = !1;
                return
            }
        } else if (d < r.startX && t.translate <= t.maxTranslate() || d > r.startX && t.translate >= t.minTranslate()) return
    }
    if (e.activeElement && l.target === e.activeElement && l.target.matches(i.focusableElements)) {
        i.isMoved = !0, t.allowClick = !1;
        return
    }
    i.allowTouchCallbacks && t.emit("touchMove", l), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = d, r.currentY = c;
    const f = r.currentX - r.startX,
        h = r.currentY - r.startY;
    if (t.params.threshold && Math.sqrt(f ** 2 + h ** 2) < t.params.threshold) return;
    if (typeof i.isScrolling > "u") {
        let k;
        t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : f * f + h * h >= 25 && (k = Math.atan2(Math.abs(h), Math.abs(f)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? k > s.touchAngle : 90 - k > s.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", l), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving) return;
    t.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation();
    let _ = t.isHorizontal() ? f : h,
        p = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    s.oneWayMovement && (_ = Math.abs(_) * (a ? 1 : -1), p = Math.abs(p) * (a ? 1 : -1)), r.diff = _, _ *= s.touchRatio, a && (_ = -_, p = -p);
    const b = t.touchesDirection;
    t.swipeDirection = _ > 0 ? "prev" : "next", t.touchesDirection = p > 0 ? "prev" : "next";
    const w = t.params.loop && !s.cssMode,
        g = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
        if (w && g && t.loopFix({
                direction: t.swipeDirection
            }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
            const k = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(k)
        }
        i.allowMomentumBounce = !1, s.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", l)
    }
    let m;
    if (new Date().getTime(), i.isMoved && i.allowThresholdMove && b !== t.touchesDirection && w && g && Math.abs(_) >= 1) {
        Object.assign(r, {
            startX: d,
            startY: c,
            currentX: d,
            currentY: c,
            startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
        return
    }
    t.emit("sliderMove", l), i.isMoved = !0, i.currentTranslate = _ + i.startTranslate;
    let v = !0,
        S = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (S = 0), _ > 0 ? (w && g && !m && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), i.currentTranslate > t.minTranslate() && (v = !1, s.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + _) ** S))) : _ < 0 && (w && g && !m && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: t.slides.length - (s.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
        }), i.currentTranslate < t.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - _) ** S))), v && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), s.threshold > 0)
        if (Math.abs(_) > s.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }! s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && t.freeMode || s.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
}

function Wd(n) {
    const e = this,
        t = e.touchEventsData;
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    let s;
    if (i.type === "touchend" || i.type === "touchcancel") {
        if (s = [...i.changedTouches].filter(v => v.identifier === t.touchId)[0], !s || s.identifier !== t.touchId) return
    } else {
        if (t.touchId !== null || i.pointerId !== t.pointerId) return;
        s = i
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView))) return;
    t.pointerId = null, t.touchId = null;
    const {
        params: a,
        touches: o,
        rtlTranslate: l,
        slidesGrid: u,
        enabled: d
    } = e;
    if (!d || !a.simulateTouch && i.pointerType === "mouse") return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i), t.allowTouchCallbacks = !1, !t.isTouched) {
        t.isMoved && a.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
        return
    }
    a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const c = vi(),
        f = c - t.touchStartTime;
    if (e.allowClick) {
        const v = i.path || i.composedPath && i.composedPath();
        e.updateClickedSlide(v && v[0] || i.target, v), e.emit("tap click", i), f < 300 && c - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
    }
    if (t.lastClickTime = vi(), wr(() => {
            e.destroyed || (e.allowClick = !0)
        }), !t.isTouched || !t.isMoved || !e.swipeDirection || o.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
        return
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let h;
    if (a.followFinger ? h = l ? e.translate : -e.translate : h = -t.currentTranslate, a.cssMode) return;
    if (a.freeMode && a.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: h
        });
        return
    }
    let _ = 0,
        p = e.slidesSizesGrid[0];
    for (let v = 0; v < u.length; v += v < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
        const S = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        typeof u[v + S] < "u" ? h >= u[v] && h < u[v + S] && (_ = v, p = u[v + S] - u[v]) : h >= u[v] && (_ = v, p = u[u.length - 1] - u[u.length - 2])
    }
    let b = null,
        w = null;
    a.rewind && (e.isBeginning ? w = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (b = 0));
    const g = (h - u[_]) / p,
        m = _ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (f > a.longSwipesMs) {
        if (!a.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (g >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? b : _ + m) : e.slideTo(_)), e.swipeDirection === "prev" && (g > 1 - a.longSwipesRatio ? e.slideTo(_ + m) : w !== null && g < 0 && Math.abs(g) > a.longSwipesRatio ? e.slideTo(w) : e.slideTo(_))
    } else {
        if (!a.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(_ + m) : e.slideTo(_) : (e.swipeDirection === "next" && e.slideTo(b !== null ? b : _ + m), e.swipeDirection === "prev" && e.slideTo(w !== null ? w : _))
    }
}

function go() {
    const n = this,
        {
            params: e,
            el: t
        } = n;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && n.setBreakpoint();
    const {
        allowSlideNext: i,
        allowSlidePrev: s,
        snapGrid: r
    } = n, a = n.virtual && n.params.virtual.enabled;
    n.allowSlideNext = !0, n.allowSlidePrev = !0, n.updateSize(), n.updateSlides(), n.updateSlidesClasses();
    const o = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides && !o ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.params.loop && !a ? n.slideToLoop(n.realIndex, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0), n.autoplay && n.autoplay.running && n.autoplay.paused && (clearTimeout(n.autoplay.resizeTimeout), n.autoplay.resizeTimeout = setTimeout(() => {
        n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.resume()
    }, 500)), n.allowSlidePrev = s, n.allowSlideNext = i, n.params.watchOverflow && r !== n.snapGrid && n.checkOverflow()
}

function Kd(n) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && n.preventDefault(), e.params.preventClicksPropagation && e.animating && (n.stopPropagation(), n.stopImmediatePropagation())))
}

function Zd() {
    const n = this,
        {
            wrapperEl: e,
            rtlTranslate: t,
            enabled: i
        } = n;
    if (!i) return;
    n.previousTranslate = n.translate, n.isHorizontal() ? n.translate = -e.scrollLeft : n.translate = -e.scrollTop, n.translate === 0 && (n.translate = 0), n.updateActiveIndex(), n.updateSlidesClasses();
    let s;
    const r = n.maxTranslate() - n.minTranslate();
    r === 0 ? s = 0 : s = (n.translate - n.minTranslate()) / r, s !== n.progress && n.updateProgress(t ? -n.translate : n.translate), n.emit("setTranslate", n.translate, !1)
}

function Qd(n) {
    const e = this;
    Kr(e, n.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}

function Jd() {
    const n = this;
    n.documentTouchHandlerProceeded || (n.documentTouchHandlerProceeded = !0, n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"))
}
const cl = (n, e) => {
    const t = js(),
        {
            params: i,
            el: s,
            wrapperEl: r,
            device: a
        } = n,
        o = !!i.nested,
        l = e === "on" ? "addEventListener" : "removeEventListener",
        u = e;
    t[l]("touchstart", n.onDocumentTouchStart, {
        passive: !1,
        capture: o
    }), s[l]("touchstart", n.onTouchStart, {
        passive: !1
    }), s[l]("pointerdown", n.onTouchStart, {
        passive: !1
    }), t[l]("touchmove", n.onTouchMove, {
        passive: !1,
        capture: o
    }), t[l]("pointermove", n.onTouchMove, {
        passive: !1,
        capture: o
    }), t[l]("touchend", n.onTouchEnd, {
        passive: !0
    }), t[l]("pointerup", n.onTouchEnd, {
        passive: !0
    }), t[l]("pointercancel", n.onTouchEnd, {
        passive: !0
    }), t[l]("touchcancel", n.onTouchEnd, {
        passive: !0
    }), t[l]("pointerout", n.onTouchEnd, {
        passive: !0
    }), t[l]("pointerleave", n.onTouchEnd, {
        passive: !0
    }), t[l]("contextmenu", n.onTouchEnd, {
        passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && s[l]("click", n.onClick, !0), i.cssMode && r[l]("scroll", n.onScroll), i.updateOnWindowResize ? n[u](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", go, !0) : n[u]("observerUpdate", go, !0), s[l]("load", n.onLoad, {
        capture: !0
    })
};

function ec() {
    const n = this,
        {
            params: e
        } = n;
    n.onTouchStart = jd.bind(n), n.onTouchMove = Ud.bind(n), n.onTouchEnd = Wd.bind(n), n.onDocumentTouchStart = Jd.bind(n), e.cssMode && (n.onScroll = Zd.bind(n)), n.onClick = Kd.bind(n), n.onLoad = Qd.bind(n), cl(n, "on")
}

function tc() {
    cl(this, "off")
}
var ic = {
    attachEvents: ec,
    detachEvents: tc
};
const _o = (n, e) => n.grid && e.grid && e.grid.rows > 1;

function sc() {
    const n = this,
        {
            realIndex: e,
            initialized: t,
            params: i,
            el: s
        } = n,
        r = i.breakpoints;
    if (!r || r && Object.keys(r).length === 0) return;
    const a = n.getBreakpoint(r, n.params.breakpointsBase, n.el);
    if (!a || n.currentBreakpoint === a) return;
    const l = (a in r ? r[a] : void 0) || n.originalParams,
        u = _o(n, i),
        d = _o(n, l),
        c = i.enabled;
    u && !d ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), n.emitContainerClasses()) : !u && d && (s.classList.add(`${i.containerModifierClass}grid`), (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`), n.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(w => {
        if (typeof l[w] > "u") return;
        const g = i[w] && i[w].enabled,
            m = l[w] && l[w].enabled;
        g && !m && n[w].disable(), !g && m && n[w].enable()
    });
    const f = l.direction && l.direction !== i.direction,
        h = i.loop && (l.slidesPerView !== i.slidesPerView || f),
        _ = i.loop;
    f && t && n.changeDirection(), Et(n.params, l);
    const p = n.params.enabled,
        b = n.params.loop;
    Object.assign(n, {
        allowTouchMove: n.params.allowTouchMove,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev
    }), c && !p ? n.disable() : !c && p && n.enable(), n.currentBreakpoint = a, n.emit("_beforeBreakpoint", l), t && (h ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides()) : !_ && b ? (n.loopCreate(e), n.updateSlides()) : _ && !b && n.loopDestroy()), n.emit("breakpoint", l)
}

function rc(n, e, t) {
    if (e === void 0 && (e = "window"), !n || e === "container" && !t) return;
    let i = !1;
    const s = bt(),
        r = e === "window" ? s.innerHeight : t.clientHeight,
        a = Object.keys(n).map(o => {
            if (typeof o == "string" && o.indexOf("@") === 0) {
                const l = parseFloat(o.substr(1));
                return {
                    value: r * l,
                    point: o
                }
            }
            return {
                value: o,
                point: o
            }
        });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
        const {
            point: l,
            value: u
        } = a[o];
        e === "window" ? s.matchMedia(`(min-width: ${u}px)`).matches && (i = l) : u <= t.clientWidth && (i = l)
    }
    return i || "max"
}
var nc = {
    setBreakpoint: sc,
    getBreakpoint: rc
};

function ac(n, e) {
    const t = [];
    return n.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(s => {
            i[s] && t.push(e + s)
        }) : typeof i == "string" && t.push(e + i)
    }), t
}

function oc() {
    const n = this,
        {
            classNames: e,
            params: t,
            rtl: i,
            el: s,
            device: r
        } = n,
        a = ac(["initialized", t.direction, {
            "free-mode": n.params.freeMode && t.freeMode.enabled
        }, {
            autoheight: t.autoHeight
        }, {
            rtl: i
        }, {
            grid: t.grid && t.grid.rows > 1
        }, {
            "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": t.cssMode
        }, {
            centered: t.cssMode && t.centeredSlides
        }, {
            "watch-progress": t.watchSlidesProgress
        }], t.containerModifierClass);
    e.push(...a), s.classList.add(...e), n.emitContainerClasses()
}

function lc() {
    const n = this,
        {
            el: e,
            classNames: t
        } = n;
    e.classList.remove(...t), n.emitContainerClasses()
}
var uc = {
    addClasses: oc,
    removeClasses: lc
};

function dc() {
    const n = this,
        {
            isLocked: e,
            params: t
        } = n,
        {
            slidesOffsetBefore: i
        } = t;
    if (i) {
        const s = n.slides.length - 1,
            r = n.slidesGrid[s] + n.slidesSizesGrid[s] + i * 2;
        n.isLocked = n.size > r
    } else n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked), t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked), e && e !== n.isLocked && (n.isEnd = !1), e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock")
}
var cc = {
        checkOverflow: dc
    },
    vo = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function hc(n, e) {
    return function(i) {
        i === void 0 && (i = {});
        const s = Object.keys(i)[0],
            r = i[s];
        if (typeof r != "object" || r === null) {
            Et(e, i);
            return
        }
        if (n[s] === !0 && (n[s] = {
                enabled: !0
            }), s === "navigation" && n[s] && n[s].enabled && !n[s].prevEl && !n[s].nextEl && (n[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && n[s] && n[s].enabled && !n[s].el && (n[s].auto = !0), !(s in n && "enabled" in r)) {
            Et(e, i);
            return
        }
        typeof n[s] == "object" && !("enabled" in n[s]) && (n[s].enabled = !0), n[s] || (n[s] = {
            enabled: !1
        }), Et(e, i)
    }
}
const zn = {
        eventsEmitter: ud,
        update: wd,
        translate: kd,
        transition: Ad,
        slide: Rd,
        loop: $d,
        grabCursor: Yd,
        events: ic,
        breakpoints: nc,
        checkOverflow: cc,
        classes: uc
    },
    Nn = {};
class ft {
    constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
        s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? t = s[0] : [e, t] = s, t || (t = {}), t = Et({}, t), e && !t.el && (t.el = e);
        const a = js();
        if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
            const d = [];
            return a.querySelectorAll(t.el).forEach(c => {
                const f = Et({}, t, {
                    el: c
                });
                d.push(new ft(f))
            }), d
        }
        const o = this;
        o.__swiper__ = !0, o.support = ul(), o.device = rd({
            userAgent: t.userAgent
        }), o.browser = ad(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const l = {};
        o.modules.forEach(d => {
            d({
                params: t,
                swiper: o,
                extendParams: hc(t, l),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o)
            })
        });
        const u = Et({}, vo, l);
        return o.params = Et({}, u, Nn, t), o.originalParams = Et({}, o.params), o.passedParams = Et({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach(d => {
            o.on(d, o.params.on[d])
        }), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return o.params.direction === "horizontal"
            },
            isVertical() {
                return o.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), o.emit("_swiper"), o.params.init && o.init(), o
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        } [e]
    }
    getSlideIndex(e) {
        const {
            slidesEl: t,
            params: i
        } = this, s = ni(t, `.${i.slideClass}, swiper-slide`), r = fn(s[0]);
        return fn(e) - r
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this,
            {
                slidesEl: t,
                params: i
            } = e;
        e.slides = ni(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(),
            a = (i.maxTranslate() - s) * e + s;
        i.translateTo(a, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach(i => {
            const s = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: s
            }), e.emit("_slideClass", i, s)
        }), e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"), t === void 0 && (t = !1);
        const i = this,
            {
                params: s,
                slides: r,
                slidesGrid: a,
                slidesSizesGrid: o,
                size: l,
                activeIndex: u
            } = i;
        let d = 1;
        if (typeof s.slidesPerView == "number") return s.slidesPerView;
        if (s.centeredSlides) {
            let c = r[u] ? r[u].swiperSlideSize : 0,
                f;
            for (let h = u + 1; h < r.length; h += 1) r[h] && !f && (c += r[h].swiperSlideSize, d += 1, c > l && (f = !0));
            for (let h = u - 1; h >= 0; h -= 1) r[h] && !f && (c += r[h].swiperSlideSize, d += 1, c > l && (f = !0))
        } else if (e === "current")
            for (let c = u + 1; c < r.length; c += 1)(t ? a[c] + o[c] - a[u] < l : a[c] - a[u] < l) && (d += 1);
        else
            for (let c = u - 1; c >= 0; c -= 1) a[u] - a[c] < l && (d += 1);
        return d
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {
            snapGrid: t,
            params: i
        } = e;
        i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(a => {
            a.complete && Kr(e, a)
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

        function s() {
            const a = e.rtlTranslate ? e.translate * -1 : e.translate,
                o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
            e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        let r;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && e.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const a = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(a.length - 1, 0, !1, !0)
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || s()
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const i = this,
            s = i.params.direction;
        return e || (e = s === "horizontal" ? "vertical" : "horizontal"), e === s || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(r => {
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }), i.emit("changeDirection"), t && i.update()), i
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)), !i) return !1;
        i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === "SWIPER-CONTAINER" && (t.isElement = !0);
        const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let a = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : ni(i, s())[0])();
        return !a && t.params.createElements && (a = hn("div", t.params.wrapperClass), i.append(a), ni(i, `.${t.params.slideClass}`).forEach(o => {
            a.append(o)
        })), Object.assign(t, {
            el: i,
            wrapperEl: a,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || Ii(i, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Ii(i, "direction") === "rtl"),
            wrongRTL: Ii(a, "display") === "-webkit-box"
        }), !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach(r => {
            r.complete ? Kr(t, r) : r.addEventListener("load", a => {
                Kr(t, a.target)
            })
        }), oa(t), t.initialized = !0, oa(t), t.emit("init"), t.emit("afterInit"), t
    }
    destroy(e, t) {
        e === void 0 && (e = !0), t === void 0 && (t = !0);
        const i = this,
            {
                params: s,
                el: r,
                wrapperEl: a,
                slides: o
            } = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), a.removeAttribute("style"), o && o.length && o.forEach(l => {
            l.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index")
        })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(l => {
            i.off(l)
        }), e !== !1 && (i.el.swiper = null, Wu(i)), i.destroyed = !0), null
    }
    static extendDefaults(e) {
        Et(Nn, e)
    }
    static get extendedDefaults() {
        return Nn
    }
    static get defaults() {
        return vo
    }
    static installModule(e) {
        ft.prototype.__modules__ || (ft.prototype.__modules__ = []);
        const t = ft.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => ft.installModule(t)), ft) : (ft.installModule(e), ft)
    }
}
Object.keys(zn).forEach(n => {
    Object.keys(zn[n]).forEach(e => {
        ft.prototype[e] = zn[n][e]
    })
});
ft.use([od, ld]);

function fc(n) {
    let {
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    } = n;
    const r = bt();
    t({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }), e.mousewheel = {
        enabled: !1
    };
    let a, o = vi(),
        l;
    const u = [];

    function d(m) {
        let E = 0,
            M = 0,
            T = 0,
            x = 0;
        return "detail" in m && (M = m.detail), "wheelDelta" in m && (M = -m.wheelDelta / 120), "wheelDeltaY" in m && (M = -m.wheelDeltaY / 120), "wheelDeltaX" in m && (E = -m.wheelDeltaX / 120), "axis" in m && m.axis === m.HORIZONTAL_AXIS && (E = M, M = 0), T = E * 10, x = M * 10, "deltaY" in m && (x = m.deltaY), "deltaX" in m && (T = m.deltaX), m.shiftKey && !T && (T = x, x = 0), (T || x) && m.deltaMode && (m.deltaMode === 1 ? (T *= 40, x *= 40) : (T *= 800, x *= 800)), T && !E && (E = T < 1 ? -1 : 1), x && !M && (M = x < 1 ? -1 : 1), {
            spinX: E,
            spinY: M,
            pixelX: T,
            pixelY: x
        }
    }

    function c() {
        e.enabled && (e.mouseEntered = !0)
    }

    function f() {
        e.enabled && (e.mouseEntered = !1)
    }

    function h(m) {
        return e.params.mousewheel.thresholdDelta && m.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && vi() - o < e.params.mousewheel.thresholdTime ? !1 : m.delta >= 6 && vi() - o < 60 ? !0 : (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), s("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), s("scroll", m.raw)), o = new r.Date().getTime(), !1)
    }

    function _(m) {
        const v = e.params.mousewheel;
        if (m.direction < 0) {
            if (e.isEnd && !e.params.loop && v.releaseOnEdges) return !0
        } else if (e.isBeginning && !e.params.loop && v.releaseOnEdges) return !0;
        return !1
    }

    function p(m) {
        let v = m,
            S = !0;
        if (!e.enabled || m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return;
        const k = e.params.mousewheel;
        e.params.cssMode && v.preventDefault();
        let E = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (E = document.querySelector(e.params.mousewheel.eventsTarget));
        const M = E && E.contains(v.target);
        if (!e.mouseEntered && !M && !k.releaseOnEdges) return !0;
        v.originalEvent && (v = v.originalEvent);
        let T = 0;
        const x = e.rtlTranslate ? -1 : 1,
            I = d(v);
        if (k.forceToAxis)
            if (e.isHorizontal())
                if (Math.abs(I.pixelX) > Math.abs(I.pixelY)) T = -I.pixelX * x;
                else return !0;
        else if (Math.abs(I.pixelY) > Math.abs(I.pixelX)) T = -I.pixelY;
        else return !0;
        else T = Math.abs(I.pixelX) > Math.abs(I.pixelY) ? -I.pixelX * x : -I.pixelY;
        if (T === 0) return !0;
        k.invert && (T = -T);
        let F = e.getTranslate() + T * k.sensitivity;
        if (F >= e.minTranslate() && (F = e.minTranslate()), F <= e.maxTranslate() && (F = e.maxTranslate()), S = e.params.loop ? !0 : !(F === e.minTranslate() || F === e.maxTranslate()), S && e.params.nested && v.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled) {
            const A = {
                time: vi(),
                delta: Math.abs(T),
                direction: Math.sign(T),
                raw: m
            };
            u.length >= 2 && u.shift();
            const P = u.length ? u[u.length - 1] : void 0;
            if (u.push(A), P ? (A.direction !== P.direction || A.delta > P.delta || A.time > P.time + 150) && h(A) : h(A), _(A)) return !0
        } else {
            const A = {
                    time: vi(),
                    delta: Math.abs(T),
                    direction: Math.sign(T)
                },
                P = l && A.time < l.time + 500 && A.delta <= l.delta && A.direction === l.direction;
            if (!P) {
                l = void 0;
                let L = e.getTranslate() + T * k.sensitivity;
                const B = e.isBeginning,
                    R = e.isEnd;
                if (L >= e.minTranslate() && (L = e.minTranslate()), L <= e.maxTranslate() && (L = e.maxTranslate()), e.setTransition(0), e.setTranslate(L), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!B && e.isBeginning || !R && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
                        direction: A.direction < 0 ? "next" : "prev",
                        byMousewheel: !0
                    }), e.params.freeMode.sticky) {
                    clearTimeout(a), a = void 0, u.length >= 15 && u.shift();
                    const H = u.length ? u[u.length - 1] : void 0,
                        te = u[0];
                    if (u.push(A), H && (A.delta > H.delta || A.direction !== H.direction)) u.splice(0);
                    else if (u.length >= 15 && A.time - te.time < 500 && te.delta - A.delta >= 1 && A.delta <= 6) {
                        const y = T > 0 ? .8 : .2;
                        l = A, u.splice(0), a = wr(() => {
                            e.slideToClosest(e.params.speed, !0, void 0, y)
                        }, 0)
                    }
                    a || (a = wr(() => {
                        l = A, u.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                    }, 500))
                }
                if (P || s("scroll", v), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), k.releaseOnEdges && (L === e.minTranslate() || L === e.maxTranslate())) return !0
            }
        }
        return v.preventDefault ? v.preventDefault() : v.returnValue = !1, !1
    }

    function b(m) {
        let v = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (v = document.querySelector(e.params.mousewheel.eventsTarget)), v[m]("mouseenter", c), v[m]("mouseleave", f), v[m]("wheel", p)
    }

    function w() {
        return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", p), !0) : e.mousewheel.enabled ? !1 : (b("addEventListener"), e.mousewheel.enabled = !0, !0)
    }

    function g() {
        return e.params.cssMode ? (e.wrapperEl.addEventListener(event, p), !0) : e.mousewheel.enabled ? (b("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1
    }
    i("init", () => {
        !e.params.mousewheel.enabled && e.params.cssMode && g(), e.params.mousewheel.enabled && w()
    }), i("destroy", () => {
        e.params.cssMode && w(), e.mousewheel.enabled && g()
    }), Object.assign(e.mousewheel, {
        enable: w,
        disable: g
    })
}

function hl(n, e, t, i) {
    return n.params.createElements && Object.keys(i).forEach(s => {
        if (!t[s] && t.auto === !0) {
            let r = ni(n.el, `.${i[s]}`)[0];
            r || (r = hn("div", i[s]), r.className = i[s], n.el.append(r)), t[s] = r, e[s] = r
        }
    }), t
}

function Gn(n) {
    let {
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    } = n;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), e.navigation = {
        nextEl: null,
        prevEl: null
    };
    const r = p => (Array.isArray(p) ? p : [p]).filter(b => !!b);

    function a(p) {
        let b;
        return p && typeof p == "string" && e.isElement && (b = e.el.querySelector(p), b) ? b : (p && (typeof p == "string" && (b = [...document.querySelectorAll(p)]), e.params.uniqueNavElements && typeof p == "string" && b.length > 1 && e.el.querySelectorAll(p).length === 1 && (b = e.el.querySelector(p))), p && !b ? p : b)
    }

    function o(p, b) {
        const w = e.params.navigation;
        p = r(p), p.forEach(g => {
            g && (g.classList[b ? "add" : "remove"](...w.disabledClass.split(" ")), g.tagName === "BUTTON" && (g.disabled = b), e.params.watchOverflow && e.enabled && g.classList[e.isLocked ? "add" : "remove"](w.lockClass))
        })
    }

    function l() {
        const {
            nextEl: p,
            prevEl: b
        } = e.navigation;
        if (e.params.loop) {
            o(b, !1), o(p, !1);
            return
        }
        o(b, e.isBeginning && !e.params.rewind), o(p, e.isEnd && !e.params.rewind)
    }

    function u(p) {
        p.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
    }

    function d(p) {
        p.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), s("navigationNext"))
    }

    function c() {
        const p = e.params.navigation;
        if (e.params.navigation = hl(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !(p.nextEl || p.prevEl)) return;
        let b = a(p.nextEl),
            w = a(p.prevEl);
        Object.assign(e.navigation, {
            nextEl: b,
            prevEl: w
        }), b = r(b), w = r(w);
        const g = (m, v) => {
            m && m.addEventListener("click", v === "next" ? d : u), !e.enabled && m && m.classList.add(...p.lockClass.split(" "))
        };
        b.forEach(m => g(m, "next")), w.forEach(m => g(m, "prev"))
    }

    function f() {
        let {
            nextEl: p,
            prevEl: b
        } = e.navigation;
        p = r(p), b = r(b);
        const w = (g, m) => {
            g.removeEventListener("click", m === "next" ? d : u), g.classList.remove(...e.params.navigation.disabledClass.split(" "))
        };
        p.forEach(g => w(g, "next")), b.forEach(g => w(g, "prev"))
    }
    i("init", () => {
        e.params.navigation.enabled === !1 ? _() : (c(), l())
    }), i("toEdge fromEdge lock unlock", () => {
        l()
    }), i("destroy", () => {
        f()
    }), i("enable disable", () => {
        let {
            nextEl: p,
            prevEl: b
        } = e.navigation;
        if (p = r(p), b = r(b), e.enabled) {
            l();
            return
        } [...p, ...b].filter(w => !!w).forEach(w => w.classList.add(e.params.navigation.lockClass))
    }), i("click", (p, b) => {
        let {
            nextEl: w,
            prevEl: g
        } = e.navigation;
        w = r(w), g = r(g);
        const m = b.target;
        if (e.params.navigation.hideOnClick && !g.includes(m) && !w.includes(m)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === m || e.pagination.el.contains(m))) return;
            let v;
            w.length ? v = w[0].classList.contains(e.params.navigation.hiddenClass) : g.length && (v = g[0].classList.contains(e.params.navigation.hiddenClass)), s(v === !0 ? "navigationShow" : "navigationHide"), [...w, ...g].filter(S => !!S).forEach(S => S.classList.toggle(e.params.navigation.hiddenClass))
        }
    });
    const h = () => {
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), l()
        },
        _ = () => {
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f()
        };
    Object.assign(e.navigation, {
        enable: h,
        disable: _,
        update: l,
        init: c,
        destroy: f
    })
}

function Qs(n) {
    return n === void 0 && (n = ""), `.${n.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
}

function pc(n) {
    let {
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    } = n;
    const r = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: g => g,
            formatFractionTotal: g => g,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }), e.pagination = {
        el: null,
        bullets: []
    };
    let a, o = 0;
    const l = g => (Array.isArray(g) ? g : [g]).filter(m => !!m);

    function u() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }

    function d(g, m) {
        const {
            bulletActiveClass: v
        } = e.params.pagination;
        g && (g = g[`${m==="prev"?"previous":"next"}ElementSibling`], g && (g.classList.add(`${v}-${m}`), g = g[`${m==="prev"?"previous":"next"}ElementSibling`], g && g.classList.add(`${v}-${m}-${m}`)))
    }

    function c(g) {
        const m = g.target.closest(Qs(e.params.pagination.bulletClass));
        if (!m) return;
        g.preventDefault();
        const v = fn(m) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === v) return;
            e.slideToLoop(v)
        } else e.slideTo(v)
    }

    function f() {
        const g = e.rtl,
            m = e.params.pagination;
        if (u()) return;
        let v = e.pagination.el;
        v = l(v);
        let S, k;
        const E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            M = e.params.loop ? Math.ceil(E / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (k = e.previousRealIndex || 0, S = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (S = e.snapIndex, k = e.previousSnapIndex) : (k = e.previousIndex || 0, S = e.activeIndex || 0), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const T = e.pagination.bullets;
            let x, I, F;
            if (m.dynamicBullets && (a = aa(T[0], e.isHorizontal() ? "width" : "height", !0), v.forEach(A => {
                    A.style[e.isHorizontal() ? "width" : "height"] = `${a*(m.dynamicMainBullets+4)}px`
                }), m.dynamicMainBullets > 1 && k !== void 0 && (o += S - (k || 0), o > m.dynamicMainBullets - 1 ? o = m.dynamicMainBullets - 1 : o < 0 && (o = 0)), x = Math.max(S - o, 0), I = x + (Math.min(T.length, m.dynamicMainBullets) - 1), F = (I + x) / 2), T.forEach(A => {
                    const P = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(L => `${m.bulletActiveClass}${L}`)].map(L => typeof L == "string" && L.includes(" ") ? L.split(" ") : L).flat();
                    A.classList.remove(...P)
                }), v.length > 1) T.forEach(A => {
                const P = fn(A);
                P === S ? A.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && A.setAttribute("part", "bullet"), m.dynamicBullets && (P >= x && P <= I && A.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), P === x && d(A, "prev"), P === I && d(A, "next"))
            });
            else {
                const A = T[S];
                if (A && A.classList.add(...m.bulletActiveClass.split(" ")), e.isElement && T.forEach((P, L) => {
                        P.setAttribute("part", L === S ? "bullet-active" : "bullet")
                    }), m.dynamicBullets) {
                    const P = T[x],
                        L = T[I];
                    for (let B = x; B <= I; B += 1) T[B] && T[B].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
                    d(P, "prev"), d(L, "next")
                }
            }
            if (m.dynamicBullets) {
                const A = Math.min(T.length, m.dynamicMainBullets + 4),
                    P = (a * A - a) / 2 - F * a,
                    L = g ? "right" : "left";
                T.forEach(B => {
                    B.style[e.isHorizontal() ? L : "top"] = `${P}px`
                })
            }
        }
        v.forEach((T, x) => {
            if (m.type === "fraction" && (T.querySelectorAll(Qs(m.currentClass)).forEach(I => {
                    I.textContent = m.formatFractionCurrent(S + 1)
                }), T.querySelectorAll(Qs(m.totalClass)).forEach(I => {
                    I.textContent = m.formatFractionTotal(M)
                })), m.type === "progressbar") {
                let I;
                m.progressbarOpposite ? I = e.isHorizontal() ? "vertical" : "horizontal" : I = e.isHorizontal() ? "horizontal" : "vertical";
                const F = (S + 1) / M;
                let A = 1,
                    P = 1;
                I === "horizontal" ? A = F : P = F, T.querySelectorAll(Qs(m.progressbarFillClass)).forEach(L => {
                    L.style.transform = `translate3d(0,0,0) scaleX(${A}) scaleY(${P})`, L.style.transitionDuration = `${e.params.speed}ms`
                })
            }
            m.type === "custom" && m.renderCustom ? (T.innerHTML = m.renderCustom(e, S + 1, M), x === 0 && s("paginationRender", T)) : (x === 0 && s("paginationRender", T), s("paginationUpdate", T)), e.params.watchOverflow && e.enabled && T.classList[e.isLocked ? "add" : "remove"](m.lockClass)
        })
    }

    function h() {
        const g = e.params.pagination;
        if (u()) return;
        const m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let v = e.pagination.el;
        v = l(v);
        let S = "";
        if (g.type === "bullets") {
            let k = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && k > m && (k = m);
            for (let E = 0; E < k; E += 1) g.renderBullet ? S += g.renderBullet.call(e, E, g.bulletClass) : S += `<${g.bulletElement} ${e.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`
        }
        g.type === "fraction" && (g.renderFraction ? S = g.renderFraction.call(e, g.currentClass, g.totalClass) : S = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`), g.type === "progressbar" && (g.renderProgressbar ? S = g.renderProgressbar.call(e, g.progressbarFillClass) : S = `<span class="${g.progressbarFillClass}"></span>`), e.pagination.bullets = [], v.forEach(k => {
            g.type !== "custom" && (k.innerHTML = S || ""), g.type === "bullets" && e.pagination.bullets.push(...k.querySelectorAll(Qs(g.bulletClass)))
        }), g.type !== "custom" && s("paginationRender", v[0])
    }

    function _() {
        e.params.pagination = hl(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const g = e.params.pagination;
        if (!g.el) return;
        let m;
        typeof g.el == "string" && e.isElement && (m = e.el.querySelector(g.el)), !m && typeof g.el == "string" && (m = [...document.querySelectorAll(g.el)]), m || (m = g.el), !(!m || m.length === 0) && (e.params.uniqueNavElements && typeof g.el == "string" && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(g.el)], m.length > 1 && (m = m.filter(v => ll(v, ".swiper")[0] === e.el)[0])), Array.isArray(m) && m.length === 1 && (m = m[0]), Object.assign(e.pagination, {
            el: m
        }), m = l(m), m.forEach(v => {
            g.type === "bullets" && g.clickable && v.classList.add(...(g.clickableClass || "").split(" ")), v.classList.add(g.modifierClass + g.type), v.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.type === "bullets" && g.dynamicBullets && (v.classList.add(`${g.modifierClass}${g.type}-dynamic`), o = 0, g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)), g.type === "progressbar" && g.progressbarOpposite && v.classList.add(g.progressbarOppositeClass), g.clickable && v.addEventListener("click", c), e.enabled || v.classList.add(g.lockClass)
        }))
    }

    function p() {
        const g = e.params.pagination;
        if (u()) return;
        let m = e.pagination.el;
        m && (m = l(m), m.forEach(v => {
            v.classList.remove(g.hiddenClass), v.classList.remove(g.modifierClass + g.type), v.classList.remove(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.clickable && (v.classList.remove(...(g.clickableClass || "").split(" ")), v.removeEventListener("click", c))
        })), e.pagination.bullets && e.pagination.bullets.forEach(v => v.classList.remove(...g.bulletActiveClass.split(" ")))
    }
    i("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const g = e.params.pagination;
        let {
            el: m
        } = e.pagination;
        m = l(m), m.forEach(v => {
            v.classList.remove(g.horizontalClass, g.verticalClass), v.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass)
        })
    }), i("init", () => {
        e.params.pagination.enabled === !1 ? w() : (_(), h(), f())
    }), i("activeIndexChange", () => {
        typeof e.snapIndex > "u" && f()
    }), i("snapIndexChange", () => {
        f()
    }), i("snapGridLengthChange", () => {
        h(), f()
    }), i("destroy", () => {
        p()
    }), i("enable disable", () => {
        let {
            el: g
        } = e.pagination;
        g && (g = l(g), g.forEach(m => m.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }), i("lock unlock", () => {
        f()
    }), i("click", (g, m) => {
        const v = m.target,
            S = l(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && S && S.length > 0 && !v.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && v === e.navigation.nextEl || e.navigation.prevEl && v === e.navigation.prevEl)) return;
            const k = S[0].classList.contains(e.params.pagination.hiddenClass);
            s(k === !0 ? "paginationShow" : "paginationHide"), S.forEach(E => E.classList.toggle(e.params.pagination.hiddenClass))
        }
    });
    const b = () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass);
            let {
                el: g
            } = e.pagination;
            g && (g = l(g), g.forEach(m => m.classList.remove(e.params.pagination.paginationDisabledClass))), _(), h(), f()
        },
        w = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {
                el: g
            } = e.pagination;
            g && (g = l(g), g.forEach(m => m.classList.add(e.params.pagination.paginationDisabledClass))), p()
        };
    Object.assign(e.pagination, {
        enable: b,
        disable: w,
        render: h,
        update: f,
        init: _,
        destroy: p
    })
}

function mc(n) {
    const {
        effect: e,
        swiper: t,
        on: i,
        setTranslate: s,
        setTransition: r,
        overwriteParams: a,
        perspective: o,
        recreateShadows: l,
        getEffectParams: u
    } = n;
    i("beforeInit", () => {
        if (t.params.effect !== e) return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`), o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
        const c = a ? a() : {};
        Object.assign(t.params, c), Object.assign(t.originalParams, c)
    }), i("setTranslate", () => {
        t.params.effect === e && s()
    }), i("setTransition", (c, f) => {
        t.params.effect === e && r(f)
    }), i("transitionEnd", () => {
        if (t.params.effect === e && l) {
            if (!u || !u().slideShadows) return;
            t.slides.forEach(c => {
                c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f => f.remove())
            }), l()
        }
    });
    let d;
    i("virtualUpdate", () => {
        t.params.effect === e && (t.slides.length || (d = !0), requestAnimationFrame(() => {
            d && t.slides && t.slides.length && (s(), d = !1)
        }))
    })
}

function gc(n, e) {
    const t = ol(e);
    return t !== e && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t
}

function _c(n) {
    let {
        swiper: e,
        duration: t,
        transformElements: i,
        allSlides: s
    } = n;
    const {
        activeIndex: r
    } = e, a = o => o.parentElement ? o.parentElement : e.slides.filter(u => u.shadowRoot && u.shadowRoot === o.parentNode)[0];
    if (e.params.virtualTranslate && t !== 0) {
        let o = !1,
            l;
        s ? l = i : l = i.filter(u => {
            const d = u.classList.contains("swiper-slide-transform") ? a(u) : u;
            return e.getSlideIndex(d) === r
        }), l.forEach(u => {
            td(u, () => {
                if (o || !e || e.destroyed) return;
                o = !0, e.animating = !1;
                const d = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(d)
            })
        })
    }
}

function vc(n) {
    let {
        swiper: e,
        extendParams: t,
        on: i
    } = n;
    t({
        fadeEffect: {
            crossFade: !1
        }
    }), mc({
        effect: "fade",
        swiper: e,
        on: i,
        setTranslate: () => {
            const {
                slides: a
            } = e, o = e.params.fadeEffect;
            for (let l = 0; l < a.length; l += 1) {
                const u = e.slides[l];
                let c = -u.swiperSlideOffset;
                e.params.virtualTranslate || (c -= e.translate);
                let f = 0;
                e.isHorizontal() || (f = c, c = 0);
                const h = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(u.progress), 0) : 1 + Math.min(Math.max(u.progress, -1), 0),
                    _ = gc(o, u);
                _.style.opacity = h, _.style.transform = `translate3d(${c}px, ${f}px, 0px)`
            }
        },
        setTransition: a => {
            const o = e.slides.map(l => ol(l));
            o.forEach(l => {
                l.style.transitionDuration = `${a}ms`
            }), _c({
                swiper: e,
                duration: a,
                transformElements: o,
                allSlides: !0
            })
        },
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode
        })
    })
}

function bc() {
    new ft(".main-swiper", {
        modules: [Gn, fc],
        breakpoints: {
            1: {
                slidesPerView: 1.1,
                spaceBetween: 10
            },
            575: {
                slidesPerView: 2.3,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 2.6,
                spaceBetween: 15
            },
            998: {
                slidesPerView: 3.2,
                spaceBetween: 20
            }
        },
        freeMode: !0,
        speed: 1e3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: !0
        }
    }), new ft(".swiper__reviews", {
        modules: [Gn],
        breakpoints: {
            1: {
                slidesPerView: 1.1,
                spaceBetween: 10
            },
            575: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            998: {
                slidesPerView: 2.5,
                spaceBetween: 20
            }
        },
        freeMode: !0,
        speed: 1e3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: !0
        }
    }), new ft(".swiper-media", {
        modules: [Gn, vc, pc],
        slidesPerView: 1,
        freeMode: !0,
        effect: "fade",
        speed: 1e3,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: !0
        }
    })
}

function mi(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}

function fl(n, e) {
    n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e
}
/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var At = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Gs = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    za, Ue, ge, Vt = 1e8,
    le = 1 / Vt,
    la = Math.PI * 2,
    wc = la / 4,
    yc = 0,
    pl = Math.sqrt,
    Sc = Math.cos,
    xc = Math.sin,
    Re = function(e) {
        return typeof e == "string"
    },
    _e = function(e) {
        return typeof e == "function"
    },
    xi = function(e) {
        return typeof e == "number"
    },
    Na = function(e) {
        return typeof e > "u"
    },
    di = function(e) {
        return typeof e == "object"
    },
    pt = function(e) {
        return e !== !1
    },
    Ga = function() {
        return typeof window < "u"
    },
    Br = function(e) {
        return _e(e) || Re(e)
    },
    ml = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    We = Array.isArray,
    ua = /(?:-?\.?\d|\.)+/gi,
    gl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Is = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    $n = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    _l = /[+-]=-?[.\d]+/,
    vl = /[^,'"\[\]\s]+/gi,
    Tc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    fe, Ot, da, $a, It = {},
    pn = {},
    bl, wl = function(e) {
        return (pn = gs(e, It)) && vt
    },
    Ha = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    yr = function(e, t) {
        return !t && console.warn(e)
    },
    yl = function(e, t) {
        return e && (It[e] = t) && pn && (pn[e] = t) || It
    },
    Sr = function() {
        return 0
    },
    Ec = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    Zr = {
        suppressEvents: !0,
        kill: !1
    },
    kc = {
        suppressEvents: !0
    },
    qa = {},
    Vi = [],
    ca = {},
    Sl, kt = {},
    Hn = {},
    bo = 30,
    Qr = [],
    Ya = "",
    Xa = function(e) {
        var t = e[0],
            i, s;
        if (di(t) || _e(t) || (e = [e]), !(i = (t._gsap || {}).harness)) {
            for (s = Qr.length; s-- && !Qr[s].targetTest(t););
            i = Qr[s]
        }
        for (s = e.length; s--;) e[s] && (e[s]._gsap || (e[s]._gsap = new Xl(e[s], i))) || e.splice(s, 1);
        return e
    },
    us = function(e) {
        return e._gsap || Xa(Rt(e))[0]._gsap
    },
    xl = function(e, t, i) {
        return (i = e[t]) && _e(i) ? e[t]() : Na(i) && e.getAttribute && e.getAttribute(t) || i
    },
    mt = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    },
    we = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Ve = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Ds = function(e, t) {
        var i = t.charAt(0),
            s = parseFloat(t.substr(2));
        return e = parseFloat(e), i === "+" ? e + s : i === "-" ? e - s : i === "*" ? e * s : e / s
    },
    Cc = function(e, t) {
        for (var i = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < i;);
        return s < i
    },
    mn = function() {
        var e = Vi.length,
            t = Vi.slice(0),
            i, s;
        for (ca = {}, Vi.length = 0, i = 0; i < e; i++) s = t[i], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
    },
    Tl = function(e, t, i, s) {
        Vi.length && !Ue && mn(), e.render(t, i, s || Ue && t < 0 && (e._initted || e._startAt)), Vi.length && !Ue && mn()
    },
    El = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(vl).length < 2 ? t : Re(e) ? e.trim() : e
    },
    kl = function(e) {
        return e
    },
    Nt = function(e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e
    },
    Mc = function(e) {
        return function(t, i) {
            for (var s in i) s in t || s === "duration" && e || s === "ease" || (t[s] = i[s])
        }
    },
    gs = function(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    },
    wo = function n(e, t) {
        for (var i in t) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = di(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
        return e
    },
    gn = function(e, t) {
        var i = {},
            s;
        for (s in e) s in t || (i[s] = e[s]);
        return i
    },
    ur = function(e) {
        var t = e.parent || fe,
            i = e.keyframes ? Mc(We(e.keyframes)) : Nt;
        if (pt(e.inherit))
            for (; t;) i(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    },
    Fc = function(e, t) {
        for (var i = e.length, s = i === t.length; s && i-- && e[i] === t[i];);
        return i < 0
    },
    Cl = function(e, t, i, s, r) {
        i === void 0 && (i = "_first"), s === void 0 && (s = "_last");
        var a = e[s],
            o;
        if (r)
            for (o = t[r]; a && a[r] > o;) a = a._prev;
        return a ? (t._next = a._next, a._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[s] = t, t._prev = a, t.parent = t._dp = e, t
    },
    Fn = function(e, t, i, s) {
        i === void 0 && (i = "_first"), s === void 0 && (s = "_last");
        var r = t._prev,
            a = t._next;
        r ? r._next = a : e[i] === t && (e[i] = a), a ? a._prev = r : e[s] === t && (e[s] = r), t._next = t._prev = t.parent = null
    },
    Gi = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    ds = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var i = e; i;) i._dirty = 1, i = i.parent;
        return e
    },
    Ac = function(e) {
        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e
    },
    ha = function(e, t, i, s) {
        return e._startAt && (Ue ? e._startAt.revert(Zr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s))
    },
    Ic = function n(e) {
        return !e || e._ts && n(e.parent)
    },
    yo = function(e) {
        return e._repeat ? $s(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    $s = function(e, t) {
        var i = Math.floor(e /= t);
        return e && i === e ? i - 1 : i
    },
    _n = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    An = function(e) {
        return e._end = Ve(e._start + (e._tDur / Math.abs(e._ts || e._rts || le) || 0))
    },
    In = function(e, t) {
        var i = e._dp;
        return i && i.smoothChildTiming && e._ts && (e._start = Ve(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), An(e), i._dirty || ds(i, e)), e
    },
    Ml = function(e, t) {
        var i;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = _n(e.rawTime(), t), (!t._dur || Ir(0, t.totalDuration(), i) - t._tTime > le) && t.render(i, !0)), ds(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (i = e; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            e._zTime = -le
        }
    },
    ri = function(e, t, i, s) {
        return t.parent && Gi(t), t._start = Ve((xi(i) ? i : i || e !== fe ? Pt(e, i, t) : e._time) + t._delay), t._end = Ve(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Cl(e, t, "_first", "_last", e._sort ? "_start" : 0), fa(t) || (e._recent = t), s || Ml(e, t), e._ts < 0 && In(e, e._tTime), e
    },
    Fl = function(e, t) {
        return (It.ScrollTrigger || Ha("scrollTrigger", t)) && It.ScrollTrigger.create(t, e)
    },
    Al = function(e, t, i, s, r) {
        if (Ua(e, t, r), !e._initted) return 1;
        if (!i && e._pt && !Ue && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Sl !== Ct.frame) return Vi.push(e), e._lazy = [r, s], 1
    },
    Pc = function n(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t))
    },
    fa = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    },
    Lc = function(e, t, i, s) {
        var r = e.ratio,
            a = t < 0 || !t && (!e._start && Pc(e) && !(!e._initted && fa(e)) || (e._ts < 0 || e._dp._ts < 0) && !fa(e)) ? 0 : 1,
            o = e._rDelay,
            l = 0,
            u, d, c;
        if (o && e._repeat && (l = Ir(0, e._tDur, t), d = $s(l, o), e._yoyo && d & 1 && (a = 1 - a), d !== $s(e._tTime, o) && (r = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== r || Ue || s || e._zTime === le || !t && e._zTime) {
            if (!e._initted && Al(e, t, s, i, l)) return;
            for (c = e._zTime, e._zTime = t || (i ? le : 0), i || (i = t && !c), e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = l, u = e._pt; u;) u.r(a, u.d), u = u._next;
            t < 0 && ha(e, t, i, !0), e._onUpdate && !i && Ft(e, "onUpdate"), l && e._repeat && !i && e.parent && Ft(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && Gi(e, 1), !i && !Ue && (Ft(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = t)
    },
    Oc = function(e, t, i) {
        var s;
        if (i > t)
            for (s = e._first; s && s._start <= i;) {
                if (s.data === "isPause" && s._start > t) return s;
                s = s._next
            } else
                for (s = e._last; s && s._start >= i;) {
                    if (s.data === "isPause" && s._start < t) return s;
                    s = s._prev
                }
    },
    Hs = function(e, t, i, s) {
        var r = e._repeat,
            a = Ve(t) || 0,
            o = e._tTime / e._tDur;
        return o && !s && (e._time *= a / e._dur), e._dur = a, e._tDur = r ? r < 0 ? 1e10 : Ve(a * (r + 1) + e._rDelay * r) : a, o > 0 && !s && In(e, e._tTime = e._tDur * o), e.parent && An(e), i || ds(e.parent, e), e
    },
    So = function(e) {
        return e instanceof at ? ds(e) : Hs(e, e._dur)
    },
    Dc = {
        _start: 0,
        endTime: Sr,
        totalDuration: Sr
    },
    Pt = function n(e, t, i) {
        var s = e.labels,
            r = e._recent || Dc,
            a = e.duration() >= Vt ? r.endTime(!1) : e._dur,
            o, l, u;
        return Re(t) && (isNaN(t) || t in s) ? (l = t.charAt(0), u = t.substr(-1) === "%", o = t.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (o < 0 ? r : i).totalDuration() / 100 : 1)) : o < 0 ? (t in s || (s[t] = a), s[t]) : (l = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), u && i && (l = l / 100 * (We(i) ? i[0] : i).totalDuration()), o > 1 ? n(e, t.substr(0, o - 1), i) + l : a + l)) : t == null ? a : +t
    },
    dr = function(e, t, i) {
        var s = xi(t[1]),
            r = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[r],
            o, l;
        if (s && (a.duration = t[1]), a.parent = i, e) {
            for (o = a, l = i; l && !("immediateRender" in o);) o = l.vars.defaults || {}, l = pt(l.vars.inherit) && l.parent;
            a.immediateRender = pt(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[r - 1]
        }
        return new ke(t[0], a, t[r + 1])
    },
    qi = function(e, t) {
        return e || e === 0 ? t(e) : t
    },
    Ir = function(e, t, i) {
        return i < e ? e : i > t ? t : i
    },
    je = function(e, t) {
        return !Re(e) || !(t = Tc.exec(e)) ? "" : t[1]
    },
    Bc = function(e, t, i) {
        return qi(i, function(s) {
            return Ir(e, t, s)
        })
    },
    pa = [].slice,
    Il = function(e, t) {
        return e && di(e) && "length" in e && (!t && !e.length || e.length - 1 in e && di(e[0])) && !e.nodeType && e !== Ot
    },
    Vc = function(e, t, i) {
        return i === void 0 && (i = []), e.forEach(function(s) {
            var r;
            return Re(s) && !t || Il(s, 1) ? (r = i).push.apply(r, Rt(s)) : i.push(s)
        }) || i
    },
    Rt = function(e, t, i) {
        return ge && !t && ge.selector ? ge.selector(e) : Re(e) && !i && (da || !qs()) ? pa.call((t || $a).querySelectorAll(e), 0) : We(e) ? Vc(e, i) : Il(e) ? pa.call(e, 0) : e ? [e] : []
    },
    ma = function(e) {
        return e = Rt(e)[0] || yr("Invalid scope") || {},
            function(t) {
                var i = e.current || e.nativeElement || e;
                return Rt(t, i.querySelectorAll ? i : i === e ? yr("Invalid scope") || $a.createElement("div") : e)
            }
    },
    Pl = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    Ll = function(e) {
        if (_e(e)) return e;
        var t = di(e) ? e : {
                each: e
            },
            i = cs(t.ease),
            s = t.from || 0,
            r = parseFloat(t.base) || 0,
            a = {},
            o = s > 0 && s < 1,
            l = isNaN(s) || o,
            u = t.axis,
            d = s,
            c = s;
        return Re(s) ? d = c = {
                center: .5,
                edges: .5,
                end: 1
            } [s] || 0 : !o && l && (d = s[0], c = s[1]),
            function(f, h, _) {
                var p = (_ || t).length,
                    b = a[p],
                    w, g, m, v, S, k, E, M, T;
                if (!b) {
                    if (T = t.grid === "auto" ? 0 : (t.grid || [1, Vt])[1], !T) {
                        for (E = -Vt; E < (E = _[T++].getBoundingClientRect().left) && T < p;);
                        T < p && T--
                    }
                    for (b = a[p] = [], w = l ? Math.min(T, p) * d - .5 : s % T, g = T === Vt ? 0 : l ? p * c / T - .5 : s / T | 0, E = 0, M = Vt, k = 0; k < p; k++) m = k % T - w, v = g - (k / T | 0), b[k] = S = u ? Math.abs(u === "y" ? v : m) : pl(m * m + v * v), S > E && (E = S), S < M && (M = S);
                    s === "random" && Pl(b), b.max = E - M, b.min = M, b.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (T > p ? p - 1 : u ? u === "y" ? p / T : T : Math.max(T, p / T)) || 0) * (s === "edges" ? -1 : 1), b.b = p < 0 ? r - p : r, b.u = je(t.amount || t.each) || 0, i = i && p < 0 ? Hl(i) : i
                }
                return p = (b[f] - b.min) / b.max || 0, Ve(b.b + (i ? i(p) : p) * b.v) + b.u
            }
    },
    ga = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(i) {
            var s = Ve(Math.round(parseFloat(i) / e) * e * t);
            return (s - s % 1) / t + (xi(i) ? 0 : je(i))
        }
    },
    Ol = function(e, t) {
        var i = We(e),
            s, r;
        return !i && di(e) && (s = i = e.radius || Vt, e.values ? (e = Rt(e.values), (r = !xi(e[0])) && (s *= s)) : e = ga(e.increment)), qi(t, i ? _e(e) ? function(a) {
            return r = e(a), Math.abs(r - a) <= s ? r : a
        } : function(a) {
            for (var o = parseFloat(r ? a.x : a), l = parseFloat(r ? a.y : 0), u = Vt, d = 0, c = e.length, f, h; c--;) r ? (f = e[c].x - o, h = e[c].y - l, f = f * f + h * h) : f = Math.abs(e[c] - o), f < u && (u = f, d = c);
            return d = !s || u <= s ? e[d] : a, r || d === a || xi(a) ? d : d + je(a)
        } : ga(e))
    },
    Dl = function(e, t, i, s) {
        return qi(We(e) ? !t : i === !0 ? !!(i = 0) : !s, function() {
            return We(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * s) / s
        })
    },
    Rc = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return function(s) {
            return t.reduce(function(r, a) {
                return a(r)
            }, s)
        }
    },
    zc = function(e, t) {
        return function(i) {
            return e(parseFloat(i)) + (t || je(i))
        }
    },
    Nc = function(e, t, i) {
        return Vl(e, t, 0, 1, i)
    },
    Bl = function(e, t, i) {
        return qi(i, function(s) {
            return e[~~t(s)]
        })
    },
    Gc = function n(e, t, i) {
        var s = t - e;
        return We(e) ? Bl(e, n(0, e.length), t) : qi(i, function(r) {
            return (s + (r - e) % s) % s + e
        })
    },
    $c = function n(e, t, i) {
        var s = t - e,
            r = s * 2;
        return We(e) ? Bl(e, n(0, e.length - 1), t) : qi(i, function(a) {
            return a = (r + (a - e) % r) % r || 0, e + (a > s ? r - a : a)
        })
    },
    xr = function(e) {
        for (var t = 0, i = "", s, r, a, o; ~(s = e.indexOf("random(", t));) a = e.indexOf(")", s), o = e.charAt(s + 7) === "[", r = e.substr(s + 7, a - s - 7).match(o ? vl : ua), i += e.substr(t, s - t) + Dl(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5), t = a + 1;
        return i + e.substr(t, e.length - t)
    },
    Vl = function(e, t, i, s, r) {
        var a = t - e,
            o = s - i;
        return qi(r, function(l) {
            return i + ((l - e) / a * o || 0)
        })
    },
    Hc = function n(e, t, i, s) {
        var r = isNaN(e + t) ? 0 : function(h) {
            return (1 - h) * e + h * t
        };
        if (!r) {
            var a = Re(e),
                o = {},
                l, u, d, c, f;
            if (i === !0 && (s = 1) && (i = null), a) e = {
                p: e
            }, t = {
                p: t
            };
            else if (We(e) && !We(t)) {
                for (d = [], c = e.length, f = c - 2, u = 1; u < c; u++) d.push(n(e[u - 1], e[u]));
                c--, r = function(_) {
                    _ *= c;
                    var p = Math.min(f, ~~_);
                    return d[p](_ - p)
                }, i = t
            } else s || (e = gs(We(e) ? [] : {}, e));
            if (!d) {
                for (l in t) ja.call(o, e, l, "get", t[l]);
                r = function(_) {
                    return Za(_, o) || (a ? e.p : e)
                }
            }
        }
        return qi(i, r)
    },
    xo = function(e, t, i) {
        var s = e.labels,
            r = Vt,
            a, o, l;
        for (a in s) o = s[a] - t, o < 0 == !!i && o && r > (o = Math.abs(o)) && (l = a, r = o);
        return l
    },
    Ft = function(e, t, i) {
        var s = e.vars,
            r = s[t],
            a = ge,
            o = e._ctx,
            l, u, d;
        if (r) return l = s[t + "Params"], u = s.callbackScope || e, i && Vi.length && mn(), o && (ge = o), d = l ? r.apply(u, l) : r.call(u), ge = a, d
    },
    rr = function(e) {
        return Gi(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ue), e.progress() < 1 && Ft(e, "onInterrupt"), e
    },
    Ps, Rl = [],
    zl = function(e) {
        if (Ga() && e) {
            e = !e.name && e.default || e;
            var t = e.name,
                i = _e(e),
                s = t && !i && e.init ? function() {
                    this._props = []
                } : e,
                r = {
                    init: Sr,
                    render: Za,
                    add: ja,
                    kill: nh,
                    modifier: rh,
                    rawVars: 0
                },
                a = {
                    targetTest: 0,
                    get: 0,
                    getSetter: Ka,
                    aliases: {},
                    register: 0
                };
            if (qs(), e !== s) {
                if (kt[t]) return;
                Nt(s, Nt(gn(e, r), a)), gs(s.prototype, gs(r, gn(e, a))), kt[s.prop = t] = s, e.targetTest && (Qr.push(s), qa[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            yl(t, s), e.register && e.register(vt, s, gt)
        } else e && Rl.push(e)
    },
    oe = 255,
    nr = {
        aqua: [0, oe, oe],
        lime: [0, oe, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, oe],
        navy: [0, 0, 128],
        white: [oe, oe, oe],
        olive: [128, 128, 0],
        yellow: [oe, oe, 0],
        orange: [oe, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [oe, 0, 0],
        pink: [oe, 192, 203],
        cyan: [0, oe, oe],
        transparent: [oe, oe, oe, 0]
    },
    qn = function(e, t, i) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * oe + .5 | 0
    },
    Nl = function(e, t, i) {
        var s = e ? xi(e) ? [e >> 16, e >> 8 & oe, e & oe] : 0 : nr.black,
            r, a, o, l, u, d, c, f, h, _;
        if (!s) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), nr[e]) s = nr[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (r = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + r + r + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return s = parseInt(e.substr(1, 6), 16), [s >> 16, s >> 8 & oe, s & oe, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), s = [e >> 16, e >> 8 & oe, e & oe]
            } else if (e.substr(0, 3) === "hsl") {
                if (s = _ = e.match(ua), !t) l = +s[0] % 360 / 360, u = +s[1] / 100, d = +s[2] / 100, a = d <= .5 ? d * (u + 1) : d + u - d * u, r = d * 2 - a, s.length > 3 && (s[3] *= 1), s[0] = qn(l + 1 / 3, r, a), s[1] = qn(l, r, a), s[2] = qn(l - 1 / 3, r, a);
                else if (~e.indexOf("=")) return s = e.match(gl), i && s.length < 4 && (s[3] = 1), s
            } else s = e.match(ua) || nr.transparent;
            s = s.map(Number)
        }
        return t && !_ && (r = s[0] / oe, a = s[1] / oe, o = s[2] / oe, c = Math.max(r, a, o), f = Math.min(r, a, o), d = (c + f) / 2, c === f ? l = u = 0 : (h = c - f, u = d > .5 ? h / (2 - c - f) : h / (c + f), l = c === r ? (a - o) / h + (a < o ? 6 : 0) : c === a ? (o - r) / h + 2 : (r - a) / h + 4, l *= 60), s[0] = ~~(l + .5), s[1] = ~~(u * 100 + .5), s[2] = ~~(d * 100 + .5)), i && s.length < 4 && (s[3] = 1), s
    },
    Gl = function(e) {
        var t = [],
            i = [],
            s = -1;
        return e.split(Ri).forEach(function(r) {
            var a = r.match(Is) || [];
            t.push.apply(t, a), i.push(s += a.length + 1)
        }), t.c = i, t
    },
    To = function(e, t, i) {
        var s = "",
            r = (e + s).match(Ri),
            a = t ? "hsla(" : "rgba(",
            o = 0,
            l, u, d, c;
        if (!r) return e;
        if (r = r.map(function(f) {
                return (f = Nl(f, t, 1)) && a + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
            }), i && (d = Gl(e), l = i.c, l.join(s) !== d.c.join(s)))
            for (u = e.replace(Ri, "1").split(Is), c = u.length - 1; o < c; o++) s += u[o] + (~l.indexOf(o) ? r.shift() || a + "0,0,0,0)" : (d.length ? d : r.length ? r : i).shift());
        if (!u)
            for (u = e.split(Ri), c = u.length - 1; o < c; o++) s += u[o] + r[o];
        return s + u[c]
    },
    Ri = function() {
        var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in nr) n += "|" + e + "\\b";
        return new RegExp(n + ")", "gi")
    }(),
    qc = /hsl[a]?\(/,
    $l = function(e) {
        var t = e.join(" "),
            i;
        if (Ri.lastIndex = 0, Ri.test(t)) return i = qc.test(t), e[1] = To(e[1], i), e[0] = To(e[0], i, Gl(e[1])), !0
    },
    Tr, Ct = function() {
        var n = Date.now,
            e = 500,
            t = 33,
            i = n(),
            s = i,
            r = 1e3 / 240,
            a = r,
            o = [],
            l, u, d, c, f, h, _ = function p(b) {
                var w = n() - s,
                    g = b === !0,
                    m, v, S, k;
                if (w > e && (i += w - t), s += w, S = s - i, m = S - a, (m > 0 || g) && (k = ++c.frame, f = S - c.time * 1e3, c.time = S = S / 1e3, a += m + (m >= r ? 4 : r - m), v = 1), g || (l = u(p)), v)
                    for (h = 0; h < o.length; h++) o[h](S, f, k, b)
            };
        return c = {
            time: 0,
            frame: 0,
            tick: function() {
                _(!0)
            },
            deltaRatio: function(b) {
                return f / (1e3 / (b || 60))
            },
            wake: function() {
                bl && (!da && Ga() && (Ot = da = window, $a = Ot.document || {}, It.gsap = vt, (Ot.gsapVersions || (Ot.gsapVersions = [])).push(vt.version), wl(pn || Ot.GreenSockGlobals || !Ot.gsap && Ot || {}), d = Ot.requestAnimationFrame, Rl.forEach(zl)), l && c.sleep(), u = d || function(b) {
                    return setTimeout(b, a - c.time * 1e3 + 1 | 0)
                }, Tr = 1, _(2))
            },
            sleep: function() {
                (d ? Ot.cancelAnimationFrame : clearTimeout)(l), Tr = 0, u = Sr
            },
            lagSmoothing: function(b, w) {
                e = b || 1 / 0, t = Math.min(w || 33, e)
            },
            fps: function(b) {
                r = 1e3 / (b || 240), a = c.time * 1e3 + r
            },
            add: function(b, w, g) {
                var m = w ? function(v, S, k, E) {
                    b(v, S, k, E), c.remove(m)
                } : b;
                return c.remove(b), o[g ? "unshift" : "push"](m), qs(), m
            },
            remove: function(b, w) {
                ~(w = o.indexOf(b)) && o.splice(w, 1) && h >= w && h--
            },
            _listeners: o
        }, c
    }(),
    qs = function() {
        return !Tr && Ct.wake()
    },
    Z = {},
    Yc = /^[\d.\-M][\d.\-,\s]/,
    Xc = /["']/g,
    jc = function(e) {
        for (var t = {}, i = e.substr(1, e.length - 3).split(":"), s = i[0], r = 1, a = i.length, o, l, u; r < a; r++) l = i[r], o = r !== a - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, o), t[s] = isNaN(u) ? u.replace(Xc, "").trim() : +u, s = l.substr(o + 1).trim();
        return t
    },
    Uc = function(e) {
        var t = e.indexOf("(") + 1,
            i = e.indexOf(")"),
            s = e.indexOf("(", t);
        return e.substring(t, ~s && s < i ? e.indexOf(")", i + 1) : i)
    },
    Wc = function(e) {
        var t = (e + "").split("("),
            i = Z[t[0]];
        return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [jc(t[1])] : Uc(e).split(",").map(El)) : Z._CE && Yc.test(e) ? Z._CE("", e) : i
    },
    Hl = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    },
    ql = function n(e, t) {
        for (var i = e._first, s; i;) i instanceof at ? n(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? n(i.timeline, t) : (s = i._ease, i._ease = i._yEase, i._yEase = s, i._yoyo = t)), i = i._next
    },
    cs = function(e, t) {
        return e && (_e(e) ? e : Z[e] || Wc(e)) || t
    },
    Ss = function(e, t, i, s) {
        i === void 0 && (i = function(l) {
            return 1 - t(1 - l)
        }), s === void 0 && (s = function(l) {
            return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
        });
        var r = {
                easeIn: t,
                easeOut: i,
                easeInOut: s
            },
            a;
        return mt(e, function(o) {
            Z[o] = It[o] = r, Z[a = o.toLowerCase()] = i;
            for (var l in r) Z[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Z[o + "." + l] = r[l]
        }), r
    },
    Yl = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    },
    Yn = function n(e, t, i) {
        var s = t >= 1 ? t : 1,
            r = (i || (e ? .3 : .45)) / (t < 1 ? t : 1),
            a = r / la * (Math.asin(1 / s) || 0),
            o = function(d) {
                return d === 1 ? 1 : s * Math.pow(2, -10 * d) * xc((d - a) * r) + 1
            },
            l = e === "out" ? o : e === "in" ? function(u) {
                return 1 - o(1 - u)
            } : Yl(o);
        return r = la / r, l.config = function(u, d) {
            return n(e, u, d)
        }, l
    },
    Xn = function n(e, t) {
        t === void 0 && (t = 1.70158);
        var i = function(a) {
                return a ? --a * a * ((t + 1) * a + t) + 1 : 0
            },
            s = e === "out" ? i : e === "in" ? function(r) {
                return 1 - i(1 - r)
            } : Yl(i);
        return s.config = function(r) {
            return n(e, r)
        }, s
    };
mt("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, e) {
    var t = e < 5 ? e + 1 : e;
    Ss(n + ",Power" + (t - 1), e ? function(i) {
        return Math.pow(i, t)
    } : function(i) {
        return i
    }, function(i) {
        return 1 - Math.pow(1 - i, t)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
    })
});
Z.Linear.easeNone = Z.none = Z.Linear.easeIn;
Ss("Elastic", Yn("in"), Yn("out"), Yn());
(function(n, e) {
    var t = 1 / e,
        i = 2 * t,
        s = 2.5 * t,
        r = function(o) {
            return o < t ? n * o * o : o < i ? n * Math.pow(o - 1.5 / e, 2) + .75 : o < s ? n * (o -= 2.25 / e) * o + .9375 : n * Math.pow(o - 2.625 / e, 2) + .984375
        };
    Ss("Bounce", function(a) {
        return 1 - r(1 - a)
    }, r)
})(7.5625, 2.75);
Ss("Expo", function(n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0
});
Ss("Circ", function(n) {
    return -(pl(1 - n * n) - 1)
});
Ss("Sine", function(n) {
    return n === 1 ? 1 : -Sc(n * wc) + 1
});
Ss("Back", Xn("in"), Xn("out"), Xn());
Z.SteppedEase = Z.steps = It.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
            s = e + (t ? 0 : 1),
            r = t ? 1 : 0,
            a = 1 - le;
        return function(o) {
            return ((s * Ir(0, a, o) | 0) + r) * i
        }
    }
};
Gs.ease = Z["quad.out"];
mt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
    return Ya += n + "," + n + "Params,"
});
var Xl = function(e, t) {
        this.id = yc++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : xl, this.set = t ? t.getSetter : Ka
    },
    Er = function() {
        function n(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Hs(this, +t.duration, 1, 1), this.data = t.data, ge && (this._ctx = ge, ge.data.push(this)), Tr || Ct.wake()
        }
        var e = n.prototype;
        return e.delay = function(i) {
            return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay
        }, e.duration = function(i) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
        }, e.totalDuration = function(i) {
            return arguments.length ? (this._dirty = 0, Hs(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(i, s) {
            if (qs(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (In(this, i), !r._dp || r.parent || Ml(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && ri(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== i || !this._dur && !s || this._initted && Math.abs(this._zTime) === le || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Tl(this, i, s)), this
        }, e.time = function(i, s) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + yo(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), s) : this._time
        }, e.totalProgress = function(i, s) {
            return arguments.length ? this.totalTime(this.totalDuration() * i, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
        }, e.progress = function(i, s) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + yo(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, e.iteration = function(i, s) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (i - 1) * r, s) : this._repeat ? $s(this._tTime, r) + 1 : 1
        }, e.timeScale = function(i, s) {
            if (!arguments.length) return this._rts === -le ? 0 : this._rts;
            if (this._rts === i) return this;
            var r = this.parent && this._ts ? _n(this.parent._time, this) : this._tTime;
            return this._rts = +i || 0, this._ts = this._ps || i === -le ? 0 : this._rts, this.totalTime(Ir(-Math.abs(this._delay), this._tDur, r), s !== !1), An(this), Ac(this)
        }, e.paused = function(i) {
            return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (qs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== le && (this._tTime -= le)))), this) : this._ps
        }, e.startTime = function(i) {
            if (arguments.length) {
                this._start = i;
                var s = this.parent || this._dp;
                return s && (s._sort || !this.parent) && ri(s, this, i - this._delay), this
            }
            return this._start
        }, e.endTime = function(i) {
            return this._start + (pt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(i) {
            var s = this.parent || this._dp;
            return s ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _n(s.rawTime(i), this) : this._tTime : this._tTime
        }, e.revert = function(i) {
            i === void 0 && (i = kc);
            var s = Ue;
            return Ue = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), Ue = s, this
        }, e.globalTime = function(i) {
            for (var s = this, r = arguments.length ? i : s.rawTime(); s;) r = s._start + r / (Math.abs(s._ts) || 1), s = s._dp;
            return !this.parent && this._sat ? this._sat.globalTime(i) : r
        }, e.repeat = function(i) {
            return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, So(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(i) {
            if (arguments.length) {
                var s = this._time;
                return this._rDelay = i, So(this), s ? this.time(s) : this
            }
            return this._rDelay
        }, e.yoyo = function(i) {
            return arguments.length ? (this._yoyo = i, this) : this._yoyo
        }, e.seek = function(i, s) {
            return this.totalTime(Pt(this, i), pt(s))
        }, e.restart = function(i, s) {
            return this.play().totalTime(i ? -this._delay : 0, pt(s))
        }, e.play = function(i, s) {
            return i != null && this.seek(i, s), this.reversed(!1).paused(!1)
        }, e.reverse = function(i, s) {
            return i != null && this.seek(i || this.totalDuration(), s), this.reversed(!0).paused(!1)
        }, e.pause = function(i, s) {
            return i != null && this.seek(i, s), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(i) {
            return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -le : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -le, this
        }, e.isActive = function() {
            var i = this.parent || this._dp,
                s = this._start,
                r;
            return !!(!i || this._ts && this._initted && i.isActive() && (r = i.rawTime(!0)) >= s && r < this.endTime(!0) - le)
        }, e.eventCallback = function(i, s, r) {
            var a = this.vars;
            return arguments.length > 1 ? (s ? (a[i] = s, r && (a[i + "Params"] = r), i === "onUpdate" && (this._onUpdate = s)) : delete a[i], this) : a[i]
        }, e.then = function(i) {
            var s = this;
            return new Promise(function(r) {
                var a = _e(i) ? i : kl,
                    o = function() {
                        var u = s.then;
                        s.then = null, _e(a) && (a = a(s)) && (a.then || a === s) && (s.then = u), r(a), s.then = u
                    };
                s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? o() : s._prom = o
            })
        }, e.kill = function() {
            rr(this)
        }, n
    }();
Nt(Er.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -le,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var at = function(n) {
    fl(e, n);

    function e(i, s) {
        var r;
        return i === void 0 && (i = {}), r = n.call(this, i) || this, r.labels = {}, r.smoothChildTiming = !!i.smoothChildTiming, r.autoRemoveChildren = !!i.autoRemoveChildren, r._sort = pt(i.sortChildren), fe && ri(i.parent || fe, mi(r), s), i.reversed && r.reverse(), i.paused && r.paused(!0), i.scrollTrigger && Fl(mi(r), i.scrollTrigger), r
    }
    var t = e.prototype;
    return t.to = function(s, r, a) {
        return dr(0, arguments, this), this
    }, t.from = function(s, r, a) {
        return dr(1, arguments, this), this
    }, t.fromTo = function(s, r, a, o) {
        return dr(2, arguments, this), this
    }, t.set = function(s, r, a) {
        return r.duration = 0, r.parent = this, ur(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new ke(s, r, Pt(this, a), 1), this
    }, t.call = function(s, r, a) {
        return ri(this, ke.delayedCall(0, s, r), a)
    }, t.staggerTo = function(s, r, a, o, l, u, d) {
        return a.duration = r, a.stagger = a.stagger || o, a.onComplete = u, a.onCompleteParams = d, a.parent = this, new ke(s, a, Pt(this, l)), this
    }, t.staggerFrom = function(s, r, a, o, l, u, d) {
        return a.runBackwards = 1, ur(a).immediateRender = pt(a.immediateRender), this.staggerTo(s, r, a, o, l, u, d)
    }, t.staggerFromTo = function(s, r, a, o, l, u, d, c) {
        return o.startAt = a, ur(o).immediateRender = pt(o.immediateRender), this.staggerTo(s, r, o, l, u, d, c)
    }, t.render = function(s, r, a) {
        var o = this._time,
            l = this._dirty ? this.totalDuration() : this._tDur,
            u = this._dur,
            d = s <= 0 ? 0 : Ve(s),
            c = this._zTime < 0 != s < 0 && (this._initted || !u),
            f, h, _, p, b, w, g, m, v, S, k, E;
        if (this !== fe && d > l && s >= 0 && (d = l), d !== this._tTime || a || c) {
            if (o !== this._time && u && (d += this._time - o, s += this._time - o), f = d, v = this._start, m = this._ts, w = !m, c && (u || (o = this._zTime), (s || !r) && (this._zTime = s)), this._repeat) {
                if (k = this._yoyo, b = u + this._rDelay, this._repeat < -1 && s < 0) return this.totalTime(b * 100 + s, r, a);
                if (f = Ve(d % b), d === l ? (p = this._repeat, f = u) : (p = ~~(d / b), p && p === d / b && (f = u, p--), f > u && (f = u)), S = $s(this._tTime, b), !o && this._tTime && S !== p && this._tTime - S * b - this._dur <= 0 && (S = p), k && p & 1 && (f = u - f, E = 1), p !== S && !this._lock) {
                    var M = k && S & 1,
                        T = M === (k && p & 1);
                    if (p < S && (M = !M), o = M ? 0 : d % u ? u : d, this._lock = 1, this.render(o || (E ? 0 : Ve(p * b)), r, !u)._lock = 0, this._tTime = d, !r && this.parent && Ft(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1), o && o !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (u = this._dur, l = this._tDur, T && (this._lock = 2, o = M ? u : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !w) return this;
                    ql(this, E)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (g = Oc(this, Ve(o), Ve(f)), g && (d -= f - (f = g._start))), this._tTime = d, this._time = f, this._act = !m, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, o = 0), !o && f && !r && !p && (Ft(this, "onStart"), this._tTime !== d)) return this;
            if (f >= o && s >= 0)
                for (h = this._first; h;) {
                    if (_ = h._next, (h._act || f >= h._start) && h._ts && g !== h) {
                        if (h.parent !== this) return this.render(s, r, a);
                        if (h.render(h._ts > 0 ? (f - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (f - h._start) * h._ts, r, a), f !== this._time || !this._ts && !w) {
                            g = 0, _ && (d += this._zTime = -le);
                            break
                        }
                    }
                    h = _
                } else {
                    h = this._last;
                    for (var x = s < 0 ? s : f; h;) {
                        if (_ = h._prev, (h._act || x <= h._end) && h._ts && g !== h) {
                            if (h.parent !== this) return this.render(s, r, a);
                            if (h.render(h._ts > 0 ? (x - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (x - h._start) * h._ts, r, a || Ue && (h._initted || h._startAt)), f !== this._time || !this._ts && !w) {
                                g = 0, _ && (d += this._zTime = x ? -le : le);
                                break
                            }
                        }
                        h = _
                    }
                }
            if (g && !r && (this.pause(), g.render(f >= o ? 0 : -le)._zTime = f >= o ? 1 : -1, this._ts)) return this._start = v, An(this), this.render(s, r, a);
            this._onUpdate && !r && Ft(this, "onUpdate", !0), (d === l && this._tTime >= this.totalDuration() || !d && o) && (v === this._start || Math.abs(m) !== Math.abs(this._ts)) && (this._lock || ((s || !u) && (d === l && this._ts > 0 || !d && this._ts < 0) && Gi(this, 1), !r && !(s < 0 && !o) && (d || o || !l) && (Ft(this, d === l && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, t.add = function(s, r) {
        var a = this;
        if (xi(r) || (r = Pt(this, r, s)), !(s instanceof Er)) {
            if (We(s)) return s.forEach(function(o) {
                return a.add(o, r)
            }), this;
            if (Re(s)) return this.addLabel(s, r);
            if (_e(s)) s = ke.delayedCall(0, s);
            else return this
        }
        return this !== s ? ri(this, s, r) : this
    }, t.getChildren = function(s, r, a, o) {
        s === void 0 && (s = !0), r === void 0 && (r = !0), a === void 0 && (a = !0), o === void 0 && (o = -Vt);
        for (var l = [], u = this._first; u;) u._start >= o && (u instanceof ke ? r && l.push(u) : (a && l.push(u), s && l.push.apply(l, u.getChildren(!0, r, a)))), u = u._next;
        return l
    }, t.getById = function(s) {
        for (var r = this.getChildren(1, 1, 1), a = r.length; a--;)
            if (r[a].vars.id === s) return r[a]
    }, t.remove = function(s) {
        return Re(s) ? this.removeLabel(s) : _e(s) ? this.killTweensOf(s) : (Fn(this, s), s === this._recent && (this._recent = this._last), ds(this))
    }, t.totalTime = function(s, r) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ve(Ct.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), n.prototype.totalTime.call(this, s, r), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function(s, r) {
        return this.labels[s] = Pt(this, r), this
    }, t.removeLabel = function(s) {
        return delete this.labels[s], this
    }, t.addPause = function(s, r, a) {
        var o = ke.delayedCall(0, r || Sr, a);
        return o.data = "isPause", this._hasPause = 1, ri(this, o, Pt(this, s))
    }, t.removePause = function(s) {
        var r = this._first;
        for (s = Pt(this, s); r;) r._start === s && r.data === "isPause" && Gi(r), r = r._next
    }, t.killTweensOf = function(s, r, a) {
        for (var o = this.getTweensOf(s, a), l = o.length; l--;) Pi !== o[l] && o[l].kill(s, r);
        return this
    }, t.getTweensOf = function(s, r) {
        for (var a = [], o = Rt(s), l = this._first, u = xi(r), d; l;) l instanceof ke ? Cc(l._targets, o) && (u ? (!Pi || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && a.push(l) : (d = l.getTweensOf(o, r)).length && a.push.apply(a, d), l = l._next;
        return a
    }, t.tweenTo = function(s, r) {
        r = r || {};
        var a = this,
            o = Pt(a, s),
            l = r,
            u = l.startAt,
            d = l.onStart,
            c = l.onStartParams,
            f = l.immediateRender,
            h, _ = ke.to(a, Nt({
                ease: r.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: r.duration || Math.abs((o - (u && "time" in u ? u.time : a._time)) / a.timeScale()) || le,
                onStart: function() {
                    if (a.pause(), !h) {
                        var b = r.duration || Math.abs((o - (u && "time" in u ? u.time : a._time)) / a.timeScale());
                        _._dur !== b && Hs(_, b, 0, 1).render(_._time, !0, !0), h = 1
                    }
                    d && d.apply(_, c || [])
                }
            }, r));
        return f ? _.render(0) : _
    }, t.tweenFromTo = function(s, r, a) {
        return this.tweenTo(r, Nt({
            startAt: {
                time: Pt(this, s)
            }
        }, a))
    }, t.recent = function() {
        return this._recent
    }, t.nextLabel = function(s) {
        return s === void 0 && (s = this._time), xo(this, Pt(this, s))
    }, t.previousLabel = function(s) {
        return s === void 0 && (s = this._time), xo(this, Pt(this, s), 1)
    }, t.currentLabel = function(s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + le)
    }, t.shiftChildren = function(s, r, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, u; o;) o._start >= a && (o._start += s, o._end += s), o = o._next;
        if (r)
            for (u in l) l[u] >= a && (l[u] += s);
        return ds(this)
    }, t.invalidate = function(s) {
        var r = this._first;
        for (this._lock = 0; r;) r.invalidate(s), r = r._next;
        return n.prototype.invalidate.call(this, s)
    }, t.clear = function(s) {
        s === void 0 && (s = !0);
        for (var r = this._first, a; r;) a = r._next, this.remove(r), r = a;
        return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), ds(this)
    }, t.totalDuration = function(s) {
        var r = 0,
            a = this,
            o = a._last,
            l = Vt,
            u, d, c;
        if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -s : s));
        if (a._dirty) {
            for (c = a.parent; o;) u = o._prev, o._dirty && o.totalDuration(), d = o._start, d > l && a._sort && o._ts && !a._lock ? (a._lock = 1, ri(a, o, d - o._delay, 1)._lock = 0) : l = d, d < 0 && o._ts && (r -= d, (!c && !a._dp || c && c.smoothChildTiming) && (a._start += d / a._ts, a._time -= d, a._tTime -= d), a.shiftChildren(-d, !1, -1 / 0), l = 0), o._end > r && o._ts && (r = o._end), o = u;
            Hs(a, a === fe && a._time > r ? a._time : r, 1, 1), a._dirty = 0
        }
        return a._tDur
    }, e.updateRoot = function(s) {
        if (fe._ts && (Tl(fe, _n(s, fe)), Sl = Ct.frame), Ct.frame >= bo) {
            bo += At.autoSleep || 120;
            var r = fe._first;
            if ((!r || !r._ts) && At.autoSleep && Ct._listeners.length < 2) {
                for (; r && !r._ts;) r = r._next;
                r || Ct.sleep()
            }
        }
    }, e
}(Er);
Nt(at.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Kc = function(e, t, i, s, r, a, o) {
        var l = new gt(this._pt, e, t, 0, 1, Ql, null, r),
            u = 0,
            d = 0,
            c, f, h, _, p, b, w, g;
        for (l.b = i, l.e = s, i += "", s += "", (w = ~s.indexOf("random(")) && (s = xr(s)), a && (g = [i, s], a(g, e, t), i = g[0], s = g[1]), f = i.match($n) || []; c = $n.exec(s);) _ = c[0], p = s.substring(u, c.index), h ? h = (h + 1) % 5 : p.substr(-5) === "rgba(" && (h = 1), _ !== f[d++] && (b = parseFloat(f[d - 1]) || 0, l._pt = {
            _next: l._pt,
            p: p || d === 1 ? p : ",",
            s: b,
            c: _.charAt(1) === "=" ? Ds(b, _) - b : parseFloat(_) - b,
            m: h && h < 4 ? Math.round : 0
        }, u = $n.lastIndex);
        return l.c = u < s.length ? s.substring(u, s.length) : "", l.fp = o, (_l.test(s) || w) && (l.e = 0), this._pt = l, l
    },
    ja = function(e, t, i, s, r, a, o, l, u, d) {
        _e(s) && (s = s(r || 0, e, a));
        var c = e[t],
            f = i !== "get" ? i : _e(c) ? u ? e[t.indexOf("set") || !_e(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : c,
            h = _e(c) ? u ? th : Kl : Wa,
            _;
        if (Re(s) && (~s.indexOf("random(") && (s = xr(s)), s.charAt(1) === "=" && (_ = Ds(f, s) + (je(f) || 0), (_ || _ === 0) && (s = _))), !d || f !== s || _a) return !isNaN(f * s) && s !== "" ? (_ = new gt(this._pt, e, t, +f || 0, s - (f || 0), typeof c == "boolean" ? sh : Zl, 0, h), u && (_.fp = u), o && _.modifier(o, this, e), this._pt = _) : (!c && !(t in e) && Ha(t, s), Kc.call(this, e, t, f, s, h, l || At.stringFilter, u))
    },
    Zc = function(e, t, i, s, r) {
        if (_e(e) && (e = cr(e, r, t, i, s)), !di(e) || e.style && e.nodeType || We(e) || ml(e)) return Re(e) ? cr(e, r, t, i, s) : e;
        var a = {},
            o;
        for (o in e) a[o] = cr(e[o], r, t, i, s);
        return a
    },
    jl = function(e, t, i, s, r, a) {
        var o, l, u, d;
        if (kt[e] && (o = new kt[e]).init(r, o.rawVars ? t[e] : Zc(t[e], s, r, a, i), i, s, a) !== !1 && (i._pt = l = new gt(i._pt, r, e, 0, 1, o.render, o, 0, o.priority), i !== Ps))
            for (u = i._ptLookup[i._targets.indexOf(r)], d = o._props.length; d--;) u[o._props[d]] = l;
        return o
    },
    Pi, _a, Ua = function n(e, t, i) {
        var s = e.vars,
            r = s.ease,
            a = s.startAt,
            o = s.immediateRender,
            l = s.lazy,
            u = s.onUpdate,
            d = s.runBackwards,
            c = s.yoyoEase,
            f = s.keyframes,
            h = s.autoRevert,
            _ = e._dur,
            p = e._startAt,
            b = e._targets,
            w = e.parent,
            g = w && w.data === "nested" ? w.vars.targets : b,
            m = e._overwrite === "auto" && !za,
            v = e.timeline,
            S, k, E, M, T, x, I, F, A, P, L, B, R;
        if (v && (!f || !r) && (r = "none"), e._ease = cs(r, Gs.ease), e._yEase = c ? Hl(cs(c === !0 ? r : c, Gs.ease)) : 0, c && e._yoyo && !e._repeat && (c = e._yEase, e._yEase = e._ease, e._ease = c), e._from = !v && !!s.runBackwards, !v || f && !s.stagger) {
            if (F = b[0] ? us(b[0]).harness : 0, B = F && s[F.prop], S = gn(s, qa), p && (p._zTime < 0 && p.progress(1), t < 0 && d && o && !h ? p.render(-1, !0) : p.revert(d && _ ? Zr : Ec), p._lazy = 0), a) {
                if (Gi(e._startAt = ke.set(b, Nt({
                        data: "isStart",
                        overwrite: !1,
                        parent: w,
                        immediateRender: !0,
                        lazy: !p && pt(l),
                        startAt: null,
                        delay: 0,
                        onUpdate: u && function() {
                            return Ft(e, "onUpdate")
                        },
                        stagger: 0
                    }, a))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ue || !o && !h) && e._startAt.revert(Zr), o && _ && t <= 0 && i <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (d && _ && !p) {
                if (t && (o = !1), E = Nt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: o && !p && pt(l),
                        immediateRender: o,
                        stagger: 0,
                        parent: w
                    }, S), B && (E[F.prop] = B), Gi(e._startAt = ke.set(b, E)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ue ? e._startAt.revert(Zr) : e._startAt.render(-1, !0)), e._zTime = t, !o) n(e._startAt, le, le);
                else if (!t) return
            }
            for (e._pt = e._ptCache = 0, l = _ && pt(l) || l && !_, k = 0; k < b.length; k++) {
                if (T = b[k], I = T._gsap || Xa(b)[k]._gsap, e._ptLookup[k] = P = {}, ca[I.id] && Vi.length && mn(), L = g === b ? k : g.indexOf(T), F && (A = new F).init(T, B || S, e, L, g) !== !1 && (e._pt = M = new gt(e._pt, T, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(H) {
                        P[H] = M
                    }), A.priority && (x = 1)), !F || B)
                    for (E in S) kt[E] && (A = jl(E, S, e, L, T, g)) ? A.priority && (x = 1) : P[E] = M = ja.call(e, T, E, "get", S[E], L, g, 0, s.stringFilter);
                e._op && e._op[k] && e.kill(T, e._op[k]), m && e._pt && (Pi = e, fe.killTweensOf(T, P, e.globalTime(t)), R = !e.parent, Pi = 0), e._pt && l && (ca[I.id] = 1)
            }
            x && Jl(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = u, e._initted = (!e._op || e._pt) && !R, f && t <= 0 && v.render(Vt, !0, !0)
    },
    Qc = function(e, t, i, s, r, a, o, l) {
        var u = (e._pt && e._ptCache || (e._ptCache = {}))[t],
            d, c, f, h;
        if (!u)
            for (u = e._ptCache[t] = [], f = e._ptLookup, h = e._targets.length; h--;) {
                if (d = f[h][t], d && d.d && d.d._pt)
                    for (d = d.d._pt; d && d.p !== t && d.fp !== t;) d = d._next;
                if (!d) return _a = 1, e.vars[t] = "+=0", Ua(e, o), _a = 0, l ? yr(t + " not eligible for reset") : 1;
                u.push(d)
            }
        for (h = u.length; h--;) c = u[h], d = c._pt || c, d.s = (s || s === 0) && !r ? s : d.s + (s || 0) + a * d.c, d.c = i - d.s, c.e && (c.e = we(i) + je(c.e)), c.b && (c.b = d.s + je(c.b))
    },
    Jc = function(e, t) {
        var i = e[0] ? us(e[0]).harness : 0,
            s = i && i.aliases,
            r, a, o, l;
        if (!s) return t;
        r = gs({}, t);
        for (a in s)
            if (a in r)
                for (l = s[a].split(","), o = l.length; o--;) r[l[o]] = r[a];
        return r
    },
    eh = function(e, t, i, s) {
        var r = t.ease || s || "power1.inOut",
            a, o;
        if (We(t)) o = i[e] || (i[e] = []), t.forEach(function(l, u) {
            return o.push({
                t: u / (t.length - 1) * 100,
                v: l,
                e: r
            })
        });
        else
            for (a in t) o = i[a] || (i[a] = []), a === "ease" || o.push({
                t: parseFloat(e),
                v: t[a],
                e: r
            })
    },
    cr = function(e, t, i, s, r) {
        return _e(e) ? e.call(t, i, s, r) : Re(e) && ~e.indexOf("random(") ? xr(e) : e
    },
    Ul = Ya + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Wl = {};
mt(Ul + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
    return Wl[n] = 1
});
var ke = function(n) {
    fl(e, n);

    function e(i, s, r, a) {
        var o;
        typeof s == "number" && (r.duration = s, s = r, r = null), o = n.call(this, a ? s : ur(s)) || this;
        var l = o.vars,
            u = l.duration,
            d = l.delay,
            c = l.immediateRender,
            f = l.stagger,
            h = l.overwrite,
            _ = l.keyframes,
            p = l.defaults,
            b = l.scrollTrigger,
            w = l.yoyoEase,
            g = s.parent || fe,
            m = (We(i) || ml(i) ? xi(i[0]) : "length" in s) ? [i] : Rt(i),
            v, S, k, E, M, T, x, I;
        if (o._targets = m.length ? Xa(m) : yr("GSAP target " + i + " not found. https://gsap.com", !At.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = h, _ || f || Br(u) || Br(d)) {
            if (s = o.vars, v = o.timeline = new at({
                    data: "nested",
                    defaults: p || {},
                    targets: g && g.data === "nested" ? g.vars.targets : m
                }), v.kill(), v.parent = v._dp = mi(o), v._start = 0, f || Br(u) || Br(d)) {
                if (E = m.length, x = f && Ll(f), di(f))
                    for (M in f) ~Ul.indexOf(M) && (I || (I = {}), I[M] = f[M]);
                for (S = 0; S < E; S++) k = gn(s, Wl), k.stagger = 0, w && (k.yoyoEase = w), I && gs(k, I), T = m[S], k.duration = +cr(u, mi(o), S, T, m), k.delay = (+cr(d, mi(o), S, T, m) || 0) - o._delay, !f && E === 1 && k.delay && (o._delay = d = k.delay, o._start += d, k.delay = 0), v.to(T, k, x ? x(S, T, m) : 0), v._ease = Z.none;
                v.duration() ? u = d = 0 : o.timeline = 0
            } else if (_) {
                ur(Nt(v.vars.defaults, {
                    ease: "none"
                })), v._ease = cs(_.ease || s.ease || "none");
                var F = 0,
                    A, P, L;
                if (We(_)) _.forEach(function(B) {
                    return v.to(m, B, ">")
                }), v.duration();
                else {
                    k = {};
                    for (M in _) M === "ease" || M === "easeEach" || eh(M, _[M], k, _.easeEach);
                    for (M in k)
                        for (A = k[M].sort(function(B, R) {
                                return B.t - R.t
                            }), F = 0, S = 0; S < A.length; S++) P = A[S], L = {
                            ease: P.e,
                            duration: (P.t - (S ? A[S - 1].t : 0)) / 100 * u
                        }, L[M] = P.v, v.to(m, L, F), F += L.duration;
                    v.duration() < u && v.to({}, {
                        duration: u - v.duration()
                    })
                }
            }
            u || o.duration(u = v.duration())
        } else o.timeline = 0;
        return h === !0 && !za && (Pi = mi(o), fe.killTweensOf(m), Pi = 0), ri(g, mi(o), r), s.reversed && o.reverse(), s.paused && o.paused(!0), (c || !u && !_ && o._start === Ve(g._time) && pt(c) && Ic(mi(o)) && g.data !== "nested") && (o._tTime = -le, o.render(Math.max(0, -d) || 0)), b && Fl(mi(o), b), o
    }
    var t = e.prototype;
    return t.render = function(s, r, a) {
        var o = this._time,
            l = this._tDur,
            u = this._dur,
            d = s < 0,
            c = s > l - le && !d ? l : s < le ? 0 : s,
            f, h, _, p, b, w, g, m, v;
        if (!u) Lc(this, s, r, a);
        else if (c !== this._tTime || !s || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d) {
            if (f = c, m = this.timeline, this._repeat) {
                if (p = u + this._rDelay, this._repeat < -1 && d) return this.totalTime(p * 100 + s, r, a);
                if (f = Ve(c % p), c === l ? (_ = this._repeat, f = u) : (_ = ~~(c / p), _ && _ === Ve(c / p) && (f = u, _--), f > u && (f = u)), w = this._yoyo && _ & 1, w && (v = this._yEase, f = u - f), b = $s(this._tTime, p), f === o && !a && this._initted && _ === b) return this._tTime = c, this;
                _ !== b && (m && this._yEase && ql(m, w), this.vars.repeatRefresh && !w && !this._lock && this._time !== u && this._initted && (this._lock = a = 1, this.render(Ve(p * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Al(this, d ? s : f, a, r, c)) return this._tTime = 0, this;
                if (o !== this._time && !(a && this.vars.repeatRefresh && _ !== b)) return this;
                if (u !== this._dur) return this.render(s, r, a)
            }
            if (this._tTime = c, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = g = (v || this._ease)(f / u), this._from && (this.ratio = g = 1 - g), f && !o && !r && !_ && (Ft(this, "onStart"), this._tTime !== c)) return this;
            for (h = this._pt; h;) h.r(g, h.d), h = h._next;
            m && m.render(s < 0 ? s : !f && w ? -le : m._dur * m._ease(f / this._dur), r, a) || this._startAt && (this._zTime = s), this._onUpdate && !r && (d && ha(this, s, r, a), Ft(this, "onUpdate")), this._repeat && _ !== b && this.vars.onRepeat && !r && this.parent && Ft(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (d && !this._onUpdate && ha(this, s, !0, !0), (s || !u) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Gi(this, 1), !r && !(d && !o) && (c || o || w) && (Ft(this, c === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, t.targets = function() {
        return this._targets
    }, t.invalidate = function(s) {
        return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), n.prototype.invalidate.call(this, s)
    }, t.resetTo = function(s, r, a, o, l) {
        Tr || Ct.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            d;
        return this._initted || Ua(this, u), d = this._ease(u / this._dur), Qc(this, s, r, a, o, d, u, l) ? this.resetTo(s, r, a, o, 1) : (In(this, 0), this.parent || Cl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function(s, r) {
        if (r === void 0 && (r = "all"), !s && (!r || r === "all")) return this._lazy = this._pt = 0, this.parent ? rr(this) : this;
        if (this.timeline) {
            var a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(s, r, Pi && Pi.vars.overwrite !== !0)._first || rr(this), this.parent && a !== this.timeline.totalDuration() && Hs(this, this._dur * this.timeline._tDur / a, 0, 1), this
        }
        var o = this._targets,
            l = s ? Rt(s) : o,
            u = this._ptLookup,
            d = this._pt,
            c, f, h, _, p, b, w;
        if ((!r || r === "all") && Fc(o, l)) return r === "all" && (this._pt = 0), rr(this);
        for (c = this._op = this._op || [], r !== "all" && (Re(r) && (p = {}, mt(r, function(g) {
                return p[g] = 1
            }), r = p), r = Jc(o, r)), w = o.length; w--;)
            if (~l.indexOf(o[w])) {
                f = u[w], r === "all" ? (c[w] = r, _ = f, h = {}) : (h = c[w] = c[w] || {}, _ = r);
                for (p in _) b = f && f[p], b && ((!("kill" in b.d) || b.d.kill(p) === !0) && Fn(this, b, "_pt"), delete f[p]), h !== "all" && (h[p] = 1)
            } return this._initted && !this._pt && d && rr(this), this
    }, e.to = function(s, r) {
        return new e(s, r, arguments[2])
    }, e.from = function(s, r) {
        return dr(1, arguments)
    }, e.delayedCall = function(s, r, a, o) {
        return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: s,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: a,
            onReverseCompleteParams: a,
            callbackScope: o
        })
    }, e.fromTo = function(s, r, a) {
        return dr(2, arguments)
    }, e.set = function(s, r) {
        return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(s, r)
    }, e.killTweensOf = function(s, r, a) {
        return fe.killTweensOf(s, r, a)
    }, e
}(Er);
Nt(ke.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
mt("staggerTo,staggerFrom,staggerFromTo", function(n) {
    ke[n] = function() {
        var e = new at,
            t = pa.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t)
    }
});
var Wa = function(e, t, i) {
        return e[t] = i
    },
    Kl = function(e, t, i) {
        return e[t](i)
    },
    th = function(e, t, i, s) {
        return e[t](s.fp, i)
    },
    ih = function(e, t, i) {
        return e.setAttribute(t, i)
    },
    Ka = function(e, t) {
        return _e(e[t]) ? Kl : Na(e[t]) && e.setAttribute ? ih : Wa
    },
    Zl = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    sh = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    Ql = function(e, t) {
        var i = t._pt,
            s = "";
        if (!e && t.b) s = t.b;
        else if (e === 1 && t.e) s = t.e;
        else {
            for (; i;) s = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + s, i = i._next;
            s += t.c
        }
        t.set(t.t, t.p, s, t)
    },
    Za = function(e, t) {
        for (var i = t._pt; i;) i.r(e, i.d), i = i._next
    },
    rh = function(e, t, i, s) {
        for (var r = this._pt, a; r;) a = r._next, r.p === s && r.modifier(e, t, i), r = a
    },
    nh = function(e) {
        for (var t = this._pt, i, s; t;) s = t._next, t.p === e && !t.op || t.op === e ? Fn(this, t, "_pt") : t.dep || (i = 1), t = s;
        return !i
    },
    ah = function(e, t, i, s) {
        s.mSet(e, t, s.m.call(s.tween, i, s.mt), s)
    },
    Jl = function(e) {
        for (var t = e._pt, i, s, r, a; t;) {
            for (i = t._next, s = r; s && s.pr > t.pr;) s = s._next;
            (t._prev = s ? s._prev : a) ? t._prev._next = t: r = t, (t._next = s) ? s._prev = t : a = t, t = i
        }
        e._pt = r
    },
    gt = function() {
        function n(t, i, s, r, a, o, l, u, d) {
            this.t = i, this.s = r, this.c = a, this.p = s, this.r = o || Zl, this.d = l || this, this.set = u || Wa, this.pr = d || 0, this._next = t, t && (t._prev = this)
        }
        var e = n.prototype;
        return e.modifier = function(i, s, r) {
            this.mSet = this.mSet || this.set, this.set = ah, this.m = i, this.mt = r, this.tween = s
        }, n
    }();
mt(Ya + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
    return qa[n] = 1
});
It.TweenMax = It.TweenLite = ke;
It.TimelineLite = It.TimelineMax = at;
fe = new at({
    sortChildren: !1,
    defaults: Gs,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
At.stringFilter = $l;
var hs = [],
    Jr = {},
    oh = [],
    Eo = 0,
    lh = 0,
    jn = function(e) {
        return (Jr[e] || oh).map(function(t) {
            return t()
        })
    },
    va = function() {
        var e = Date.now(),
            t = [];
        e - Eo > 2 && (jn("matchMediaInit"), hs.forEach(function(i) {
            var s = i.queries,
                r = i.conditions,
                a, o, l, u;
            for (o in s) a = Ot.matchMedia(s[o]).matches, a && (l = 1), a !== r[o] && (r[o] = a, u = 1);
            u && (i.revert(), l && t.push(i))
        }), jn("matchMediaRevert"), t.forEach(function(i) {
            return i.onMatch(i, function(s) {
                return i.add(null, s)
            })
        }), Eo = e, jn("matchMedia"))
    },
    eu = function() {
        function n(t, i) {
            this.selector = i && ma(i), this.data = [], this._r = [], this.isReverted = !1, this.id = lh++, t && this.add(t)
        }
        var e = n.prototype;
        return e.add = function(i, s, r) {
            _e(i) && (r = s, s = i, i = _e);
            var a = this,
                o = function() {
                    var u = ge,
                        d = a.selector,
                        c;
                    return u && u !== a && u.data.push(a), r && (a.selector = ma(r)), ge = a, c = s.apply(a, arguments), _e(c) && a._r.push(c), ge = u, a.selector = d, a.isReverted = !1, c
                };
            return a.last = o, i === _e ? o(a, function(l) {
                return a.add(null, l)
            }) : i ? a[i] = o : o
        }, e.ignore = function(i) {
            var s = ge;
            ge = null, i(this), ge = s
        }, e.getTweens = function() {
            var i = [];
            return this.data.forEach(function(s) {
                return s instanceof n ? i.push.apply(i, s.getTweens()) : s instanceof ke && !(s.parent && s.parent.data === "nested") && i.push(s)
            }), i
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(i, s) {
            var r = this;
            if (i ? function() {
                    for (var o = r.getTweens(), l = r.data.length, u; l--;) u = r.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(d) {
                        return o.splice(o.indexOf(d), 1)
                    }));
                    for (o.map(function(d) {
                            return {
                                g: d._dur || d._delay || d._sat && !d._sat.vars.immediateRender ? d.globalTime(0) : -1 / 0,
                                t: d
                            }
                        }).sort(function(d, c) {
                            return c.g - d.g || -1 / 0
                        }).forEach(function(d) {
                            return d.t.revert(i)
                        }), l = r.data.length; l--;) u = r.data[l], u instanceof at ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof ke) && u.revert && u.revert(i);
                    r._r.forEach(function(d) {
                        return d(i, r)
                    }), r.isReverted = !0
                }() : this.data.forEach(function(o) {
                    return o.kill && o.kill()
                }), this.clear(), s)
                for (var a = hs.length; a--;) hs[a].id === this.id && hs.splice(a, 1)
        }, e.revert = function(i) {
            this.kill(i || {})
        }, n
    }(),
    uh = function() {
        function n(t) {
            this.contexts = [], this.scope = t
        }
        var e = n.prototype;
        return e.add = function(i, s, r) {
            di(i) || (i = {
                matches: i
            });
            var a = new eu(0, r || this.scope),
                o = a.conditions = {},
                l, u, d;
            ge && !a.selector && (a.selector = ge.selector), this.contexts.push(a), s = a.add("onMatch", s), a.queries = i;
            for (u in i) u === "all" ? d = 1 : (l = Ot.matchMedia(i[u]), l && (hs.indexOf(a) < 0 && hs.push(a), (o[u] = l.matches) && (d = 1), l.addListener ? l.addListener(va) : l.addEventListener("change", va)));
            return d && s(a, function(c) {
                return a.add(null, c)
            }), this
        }, e.revert = function(i) {
            this.kill(i || {})
        }, e.kill = function(i) {
            this.contexts.forEach(function(s) {
                return s.kill(i, !0)
            })
        }, n
    }(),
    vn = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            t.forEach(function(s) {
                return zl(s)
            })
        },
        timeline: function(e) {
            return new at(e)
        },
        getTweensOf: function(e, t) {
            return fe.getTweensOf(e, t)
        },
        getProperty: function(e, t, i, s) {
            Re(e) && (e = Rt(e)[0]);
            var r = us(e || {}).get,
                a = i ? kl : El;
            return i === "native" && (i = ""), e && (t ? a((kt[t] && kt[t].get || r)(e, t, i, s)) : function(o, l, u) {
                return a((kt[o] && kt[o].get || r)(e, o, l, u))
            })
        },
        quickSetter: function(e, t, i) {
            if (e = Rt(e), e.length > 1) {
                var s = e.map(function(d) {
                        return vt.quickSetter(d, t, i)
                    }),
                    r = s.length;
                return function(d) {
                    for (var c = r; c--;) s[c](d)
                }
            }
            e = e[0] || {};
            var a = kt[t],
                o = us(e),
                l = o.harness && (o.harness.aliases || {})[t] || t,
                u = a ? function(d) {
                    var c = new a;
                    Ps._pt = 0, c.init(e, i ? d + i : d, Ps, 0, [e]), c.render(1, c), Ps._pt && Za(1, Ps)
                } : o.set(e, l);
            return a ? u : function(d) {
                return u(e, l, i ? d + i : d, o, 1)
            }
        },
        quickTo: function(e, t, i) {
            var s, r = vt.to(e, gs((s = {}, s[t] = "+=0.1", s.paused = !0, s), i || {})),
                a = function(l, u, d) {
                    return r.resetTo(t, l, u, d)
                };
            return a.tween = r, a
        },
        isTweening: function(e) {
            return fe.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = cs(e.ease, Gs.ease)), wo(Gs, e || {})
        },
        config: function(e) {
            return wo(At, e || {})
        },
        registerEffect: function(e) {
            var t = e.name,
                i = e.effect,
                s = e.plugins,
                r = e.defaults,
                a = e.extendTimeline;
            (s || "").split(",").forEach(function(o) {
                return o && !kt[o] && !It[o] && yr(t + " effect requires " + o + " plugin.")
            }), Hn[t] = function(o, l, u) {
                return i(Rt(o), Nt(l || {}, r), u)
            }, a && (at.prototype[t] = function(o, l, u) {
                return this.add(Hn[t](o, di(l) ? l : (u = l) && {}, this), u)
            })
        },
        registerEase: function(e, t) {
            Z[e] = cs(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? cs(e, t) : Z
        },
        getById: function(e) {
            return fe.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var i = new at(e),
                s, r;
            for (i.smoothChildTiming = pt(e.smoothChildTiming), fe.remove(i), i._dp = 0, i._time = i._tTime = fe._time, s = fe._first; s;) r = s._next, (t || !(!s._dur && s instanceof ke && s.vars.onComplete === s._targets[0])) && ri(i, s, s._start - s._delay), s = r;
            return ri(fe, i, 0), i
        },
        context: function(e, t) {
            return e ? new eu(e, t) : ge
        },
        matchMedia: function(e) {
            return new uh(e)
        },
        matchMediaRefresh: function() {
            return hs.forEach(function(e) {
                var t = e.conditions,
                    i, s;
                for (s in t) t[s] && (t[s] = !1, i = 1);
                i && e.revert()
            }) || va()
        },
        addEventListener: function(e, t) {
            var i = Jr[e] || (Jr[e] = []);
            ~i.indexOf(t) || i.push(t)
        },
        removeEventListener: function(e, t) {
            var i = Jr[e],
                s = i && i.indexOf(t);
            s >= 0 && i.splice(s, 1)
        },
        utils: {
            wrap: Gc,
            wrapYoyo: $c,
            distribute: Ll,
            random: Dl,
            snap: Ol,
            normalize: Nc,
            getUnit: je,
            clamp: Bc,
            splitColor: Nl,
            toArray: Rt,
            selector: ma,
            mapRange: Vl,
            pipe: Rc,
            unitize: zc,
            interpolate: Hc,
            shuffle: Pl
        },
        install: wl,
        effects: Hn,
        ticker: Ct,
        updateRoot: at.updateRoot,
        plugins: kt,
        globalTimeline: fe,
        core: {
            PropTween: gt,
            globals: yl,
            Tween: ke,
            Timeline: at,
            Animation: Er,
            getCache: us,
            _removeLinkedListItem: Fn,
            reverting: function() {
                return Ue
            },
            context: function(e) {
                return e && ge && (ge.data.push(e), e._ctx = ge), ge
            },
            suppressOverwrites: function(e) {
                return za = e
            }
        }
    };
mt("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
    return vn[n] = ke[n]
});
Ct.add(at.updateRoot);
Ps = vn.to({}, {
    duration: 0
});
var dh = function(e, t) {
        for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;) i = i._next;
        return i
    },
    ch = function(e, t) {
        var i = e._targets,
            s, r, a;
        for (s in t)
            for (r = i.length; r--;) a = e._ptLookup[r][s], a && (a = a.d) && (a._pt && (a = dh(a, s)), a && a.modifier && a.modifier(t[s], e, i[r], s))
    },
    Un = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(s, r, a) {
                a._onInit = function(o) {
                    var l, u;
                    if (Re(r) && (l = {}, mt(r, function(d) {
                            return l[d] = 1
                        }), r = l), t) {
                        l = {};
                        for (u in r) l[u] = t(r[u]);
                        r = l
                    }
                    ch(o, r)
                }
            }
        }
    },
    vt = vn.registerPlugin({
        name: "attr",
        init: function(e, t, i, s, r) {
            var a, o, l;
            this.tween = i;
            for (a in t) l = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (l || 0) + "", t[a], s, r, 0, 0, a), o.op = a, o.b = l, this._props.push(a)
        },
        render: function(e, t) {
            for (var i = t._pt; i;) Ue ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var i = t.length; i--;) this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
        }
    }, Un("roundProps", ga), Un("modifiers"), Un("snap", Ol)) || vn;
ke.version = at.version = vt.version = "3.12.4";
bl = 1;
Ga() && qs();
Z.Power0;
Z.Power1;
Z.Power2;
Z.Power3;
Z.Power4;
Z.Linear;
Z.Quad;
Z.Cubic;
Z.Quart;
Z.Quint;
Z.Strong;
Z.Elastic;
Z.Back;
Z.SteppedEase;
Z.Bounce;
Z.Sine;
Z.Expo;
Z.Circ;
/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var ko, Li, Bs, Qa, as, Co, Ja, hh = function() {
        return typeof window < "u"
    },
    Ti = {},
    is = 180 / Math.PI,
    Vs = Math.PI / 180,
    ks = Math.atan2,
    Mo = 1e8,
    eo = /([A-Z])/g,
    fh = /(left|right|width|margin|padding|x)/i,
    ph = /[\s,\(]\S/,
    ai = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    ba = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    mh = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    gh = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    _h = function(e, t) {
        var i = t.s + t.c * e;
        t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
    },
    tu = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    iu = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    },
    vh = function(e, t, i) {
        return e.style[t] = i
    },
    bh = function(e, t, i) {
        return e.style.setProperty(t, i)
    },
    wh = function(e, t, i) {
        return e._gsap[t] = i
    },
    yh = function(e, t, i) {
        return e._gsap.scaleX = e._gsap.scaleY = i
    },
    Sh = function(e, t, i, s, r) {
        var a = e._gsap;
        a.scaleX = a.scaleY = i, a.renderTransform(r, a)
    },
    xh = function(e, t, i, s, r) {
        var a = e._gsap;
        a[t] = i, a.renderTransform(r, a)
    },
    pe = "transform",
    _t = pe + "Origin",
    Th = function n(e, t) {
        var i = this,
            s = this.target,
            r = s.style,
            a = s._gsap;
        if (e in Ti && r) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = ai[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
                return i.tfm[o] = _i(s, o)
            }) : this.tfm[e] = a.x ? a[e] : _i(s, e), e === _t && (this.tfm.zOrigin = a.zOrigin);
            else return ai.transform.split(",").forEach(function(o) {
                return n.call(i, o, t)
            });
            if (this.props.indexOf(pe) >= 0) return;
            a.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(_t, t, "")), e = pe
        }(r || t) && this.props.push(e, t, r[e])
    },
    su = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    Eh = function() {
        var e = this.props,
            t = this.target,
            i = t.style,
            s = t._gsap,
            r, a;
        for (r = 0; r < e.length; r += 3) e[r + 1] ? t[e[r]] = e[r + 2] : e[r + 2] ? i[e[r]] = e[r + 2] : i.removeProperty(e[r].substr(0, 2) === "--" ? e[r] : e[r].replace(eo, "-$1").toLowerCase());
        if (this.tfm) {
            for (a in this.tfm) s[a] = this.tfm[a];
            s.svg && (s.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), r = Ja(), (!r || !r.isStart) && !i[pe] && (su(i), s.zOrigin && i[_t] && (i[_t] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
        }
    },
    ru = function(e, t) {
        var i = {
            target: e,
            props: [],
            revert: Eh,
            save: Th
        };
        return e._gsap || vt.core.getCache(e), t && t.split(",").forEach(function(s) {
            return i.save(s)
        }), i
    },
    nu, wa = function(e, t) {
        var i = Li.createElementNS ? Li.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Li.createElement(e);
        return i && i.style ? i : Li.createElement(e)
    },
    li = function n(e, t, i) {
        var s = getComputedStyle(e);
        return s[t] || s.getPropertyValue(t.replace(eo, "-$1").toLowerCase()) || s.getPropertyValue(t) || !i && n(e, Ys(t) || t, 1) || ""
    },
    Fo = "O,Moz,ms,Ms,Webkit".split(","),
    Ys = function(e, t, i) {
        var s = t || as,
            r = s.style,
            a = 5;
        if (e in r && !i) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(Fo[a] + e in r););
        return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Fo[a] : "") + e
    },
    ya = function() {
        hh() && window.document && (ko = window, Li = ko.document, Bs = Li.documentElement, as = wa("div") || {
            style: {}
        }, wa("div"), pe = Ys(pe), _t = pe + "Origin", as.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", nu = !!Ys("perspective"), Ja = vt.core.reverting, Qa = 1)
    },
    Wn = function n(e) {
        var t = wa("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            s = this.nextSibling,
            r = this.style.cssText,
            a;
        if (Bs.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = n
        } catch {} else this._gsapBBox && (a = this._gsapBBox());
        return i && (s ? i.insertBefore(this, s) : i.appendChild(this)), Bs.removeChild(t), this.style.cssText = r, a
    },
    Ao = function(e, t) {
        for (var i = t.length; i--;)
            if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
    },
    au = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch {
            t = Wn.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === Wn || (t = Wn.call(e, !0)), t && !t.width && !t.x && !t.y ? {
            x: +Ao(e, ["x", "cx", "x1"]) || 0,
            y: +Ao(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    },
    ou = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && au(e))
    },
    _s = function(e, t) {
        if (t) {
            var i = e.style,
                s;
            t in Ti && t !== _t && (t = pe), i.removeProperty ? (s = t.substr(0, 2), (s === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), i.removeProperty(s === "--" ? t : t.replace(eo, "-$1").toLowerCase())) : i.removeAttribute(t)
        }
    },
    Oi = function(e, t, i, s, r, a) {
        var o = new gt(e._pt, t, i, 0, 1, a ? iu : tu);
        return e._pt = o, o.b = s, o.e = r, e._props.push(i), o
    },
    Io = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    kh = {
        grid: 1,
        flex: 1
    },
    $i = function n(e, t, i, s) {
        var r = parseFloat(i) || 0,
            a = (i + "").trim().substr((r + "").length) || "px",
            o = as.style,
            l = fh.test(t),
            u = e.tagName.toLowerCase() === "svg",
            d = (u ? "client" : "offset") + (l ? "Width" : "Height"),
            c = 100,
            f = s === "px",
            h = s === "%",
            _, p, b, w;
        if (s === a || !r || Io[s] || Io[a]) return r;
        if (a !== "px" && !f && (r = n(e, t, i, "px")), w = e.getCTM && ou(e), (h || a === "%") && (Ti[t] || ~t.indexOf("adius"))) return _ = w ? e.getBBox()[l ? "width" : "height"] : e[d], we(h ? r / _ * c : r / 100 * _);
        if (o[l ? "width" : "height"] = c + (f ? a : s), p = ~t.indexOf("adius") || s === "em" && e.appendChild && !u ? e : e.parentNode, w && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === Li || !p.appendChild) && (p = Li.body), b = p._gsap, b && h && b.width && l && b.time === Ct.time && !b.uncache) return we(r / b.width * c);
        if (h && (t === "height" || t === "width")) {
            var g = e.style[t];
            e.style[t] = c + s, _ = e[d], g ? e.style[t] = g : _s(e, t)
        } else(h || a === "%") && !kh[li(p, "display")] && (o.position = li(e, "position")), p === e && (o.position = "static"), p.appendChild(as), _ = as[d], p.removeChild(as), o.position = "absolute";
        return l && h && (b = us(p), b.time = Ct.time, b.width = p[d]), we(f ? _ * r / c : _ && r ? c / _ * r : 0)
    },
    _i = function(e, t, i, s) {
        var r;
        return Qa || ya(), t in ai && t !== "transform" && (t = ai[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ti[t] && t !== "transform" ? (r = Cr(e, s), r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : wn(li(e, _t)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || r === "auto" || s || ~(r + "").indexOf("calc(")) && (r = bn[t] && bn[t](e, t, i) || li(e, t) || xl(e, t) || (t === "opacity" ? 1 : 0))), i && !~(r + "").trim().indexOf(" ") ? $i(e, t, r, i) + i : r
    },
    Ch = function(e, t, i, s) {
        if (!i || i === "none") {
            var r = Ys(t, e, 1),
                a = r && li(e, r, 1);
            a && a !== i ? (t = r, i = a) : t === "borderColor" && (i = li(e, "borderTopColor"))
        }
        var o = new gt(this._pt, e.style, t, 0, 1, Ql),
            l = 0,
            u = 0,
            d, c, f, h, _, p, b, w, g, m, v, S;
        if (o.b = i, o.e = s, i += "", s += "", s === "auto" && (p = e.style[t], e.style[t] = s, s = li(e, t) || s, p ? e.style[t] = p : _s(e, t)), d = [i, s], $l(d), i = d[0], s = d[1], f = i.match(Is) || [], S = s.match(Is) || [], S.length) {
            for (; c = Is.exec(s);) b = c[0], g = s.substring(l, c.index), _ ? _ = (_ + 1) % 5 : (g.substr(-5) === "rgba(" || g.substr(-5) === "hsla(") && (_ = 1), b !== (p = f[u++] || "") && (h = parseFloat(p) || 0, v = p.substr((h + "").length), b.charAt(1) === "=" && (b = Ds(h, b) + v), w = parseFloat(b), m = b.substr((w + "").length), l = Is.lastIndex - m.length, m || (m = m || At.units[t] || v, l === s.length && (s += m, o.e += m)), v !== m && (h = $i(e, t, p, m) || 0), o._pt = {
                _next: o._pt,
                p: g || u === 1 ? g : ",",
                s: h,
                c: w - h,
                m: _ && _ < 4 || t === "zIndex" ? Math.round : 0
            });
            o.c = l < s.length ? s.substring(l, s.length) : ""
        } else o.r = t === "display" && s === "none" ? iu : tu;
        return _l.test(s) && (o.e = 0), this._pt = o, o
    },
    Po = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Mh = function(e) {
        var t = e.split(" "),
            i = t[0],
            s = t[1] || "50%";
        return (i === "top" || i === "bottom" || s === "left" || s === "right") && (e = i, i = s, s = e), t[0] = Po[i] || i, t[1] = Po[s] || s, t.join(" ")
    },
    Fh = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var i = t.t,
                s = i.style,
                r = t.u,
                a = i._gsap,
                o, l, u;
            if (r === "all" || r === !0) s.cssText = "", l = 1;
            else
                for (r = r.split(","), u = r.length; --u > -1;) o = r[u], Ti[o] && (l = 1, o = o === "transformOrigin" ? _t : pe), _s(i, o);
            l && (_s(i, pe), a && (a.svg && i.removeAttribute("transform"), Cr(i, 1), a.uncache = 1, su(s)))
        }
    },
    bn = {
        clearProps: function(e, t, i, s, r) {
            if (r.data !== "isFromStart") {
                var a = e._pt = new gt(e._pt, t, i, 0, 0, Fh);
                return a.u = s, a.pr = -10, a.tween = r, e._props.push(i), 1
            }
        }
    },
    kr = [1, 0, 0, 1, 0, 0],
    lu = {},
    uu = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    Lo = function(e) {
        var t = li(e, pe);
        return uu(t) ? kr : t.substr(7).match(gl).map(we)
    },
    to = function(e, t) {
        var i = e._gsap || us(e),
            s = e.style,
            r = Lo(e),
            a, o, l, u;
        return i.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? kr : r) : (r === kr && !e.offsetParent && e !== Bs && !i.svg && (l = s.display, s.display = "block", a = e.parentNode, (!a || !e.offsetParent) && (u = 1, o = e.nextElementSibling, Bs.appendChild(e)), r = Lo(e), l ? s.display = l : _s(e, "display"), u && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Bs.removeChild(e))), t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r)
    },
    Sa = function(e, t, i, s, r, a) {
        var o = e._gsap,
            l = r || to(e, !0),
            u = o.xOrigin || 0,
            d = o.yOrigin || 0,
            c = o.xOffset || 0,
            f = o.yOffset || 0,
            h = l[0],
            _ = l[1],
            p = l[2],
            b = l[3],
            w = l[4],
            g = l[5],
            m = t.split(" "),
            v = parseFloat(m[0]) || 0,
            S = parseFloat(m[1]) || 0,
            k, E, M, T;
        i ? l !== kr && (E = h * b - _ * p) && (M = v * (b / E) + S * (-p / E) + (p * g - b * w) / E, T = v * (-_ / E) + S * (h / E) - (h * g - _ * w) / E, v = M, S = T) : (k = au(e), v = k.x + (~m[0].indexOf("%") ? v / 100 * k.width : v), S = k.y + (~(m[1] || m[0]).indexOf("%") ? S / 100 * k.height : S)), s || s !== !1 && o.smooth ? (w = v - u, g = S - d, o.xOffset = c + (w * h + g * p) - w, o.yOffset = f + (w * _ + g * b) - g) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = S, o.smooth = !!s, o.origin = t, o.originIsAbsolute = !!i, e.style[_t] = "0px 0px", a && (Oi(a, o, "xOrigin", u, v), Oi(a, o, "yOrigin", d, S), Oi(a, o, "xOffset", c, o.xOffset), Oi(a, o, "yOffset", f, o.yOffset)), e.setAttribute("data-svg-origin", v + " " + S)
    },
    Cr = function(e, t) {
        var i = e._gsap || new Xl(e);
        if ("x" in i && !t && !i.uncache) return i;
        var s = e.style,
            r = i.scaleX < 0,
            a = "px",
            o = "deg",
            l = getComputedStyle(e),
            u = li(e, _t) || "0",
            d, c, f, h, _, p, b, w, g, m, v, S, k, E, M, T, x, I, F, A, P, L, B, R, H, te, y, ne, ze, Gt, me, Ne;
        return d = c = f = p = b = w = g = m = v = 0, h = _ = 1, i.svg = !!(e.getCTM && ou(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[pe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[pe] !== "none" ? l[pe] : "")), s.scale = s.rotate = s.translate = "none"), E = to(e, i.svg), i.svg && (i.uncache ? (H = e.getBBox(), u = i.xOrigin - H.x + "px " + (i.yOrigin - H.y) + "px", R = "") : R = !t && e.getAttribute("data-svg-origin"), Sa(e, R || u, !!R || i.originIsAbsolute, i.smooth !== !1, E)), S = i.xOrigin || 0, k = i.yOrigin || 0, E !== kr && (I = E[0], F = E[1], A = E[2], P = E[3], d = L = E[4], c = B = E[5], E.length === 6 ? (h = Math.sqrt(I * I + F * F), _ = Math.sqrt(P * P + A * A), p = I || F ? ks(F, I) * is : 0, g = A || P ? ks(A, P) * is + p : 0, g && (_ *= Math.abs(Math.cos(g * Vs))), i.svg && (d -= S - (S * I + k * A), c -= k - (S * F + k * P))) : (Ne = E[6], Gt = E[7], y = E[8], ne = E[9], ze = E[10], me = E[11], d = E[12], c = E[13], f = E[14], M = ks(Ne, ze), b = M * is, M && (T = Math.cos(-M), x = Math.sin(-M), R = L * T + y * x, H = B * T + ne * x, te = Ne * T + ze * x, y = L * -x + y * T, ne = B * -x + ne * T, ze = Ne * -x + ze * T, me = Gt * -x + me * T, L = R, B = H, Ne = te), M = ks(-A, ze), w = M * is, M && (T = Math.cos(-M), x = Math.sin(-M), R = I * T - y * x, H = F * T - ne * x, te = A * T - ze * x, me = P * x + me * T, I = R, F = H, A = te), M = ks(F, I), p = M * is, M && (T = Math.cos(M), x = Math.sin(M), R = I * T + F * x, H = L * T + B * x, F = F * T - I * x, B = B * T - L * x, I = R, L = H), b && Math.abs(b) + Math.abs(p) > 359.9 && (b = p = 0, w = 180 - w), h = we(Math.sqrt(I * I + F * F + A * A)), _ = we(Math.sqrt(B * B + Ne * Ne)), M = ks(L, B), g = Math.abs(M) > 2e-4 ? M * is : 0, v = me ? 1 / (me < 0 ? -me : me) : 0), i.svg && (R = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !uu(li(e, pe)), R && e.setAttribute("transform", R))), Math.abs(g) > 90 && Math.abs(g) < 270 && (r ? (h *= -1, g += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, g += g <= 0 ? 180 : -180)), t = t || i.uncache, i.x = d - ((i.xPercent = d && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + a, i.y = c - ((i.yPercent = c && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + a, i.z = f + a, i.scaleX = we(h), i.scaleY = we(_), i.rotation = we(p) + o, i.rotationX = we(b) + o, i.rotationY = we(w) + o, i.skewX = g + o, i.skewY = m + o, i.transformPerspective = v + a, (i.zOrigin = parseFloat(u.split(" ")[2]) || !t && i.zOrigin || 0) && (s[_t] = wn(u)), i.xOffset = i.yOffset = 0, i.force3D = At.force3D, i.renderTransform = i.svg ? Ih : nu ? du : Ah, i.uncache = 0, i
    },
    wn = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    Kn = function(e, t, i) {
        var s = je(t);
        return we(parseFloat(t) + parseFloat($i(e, "x", i + "px", s))) + s
    },
    Ah = function(e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, du(e, t)
    },
    es = "0deg",
    Js = "0px",
    ts = ") ",
    du = function(e, t) {
        var i = t || this,
            s = i.xPercent,
            r = i.yPercent,
            a = i.x,
            o = i.y,
            l = i.z,
            u = i.rotation,
            d = i.rotationY,
            c = i.rotationX,
            f = i.skewX,
            h = i.skewY,
            _ = i.scaleX,
            p = i.scaleY,
            b = i.transformPerspective,
            w = i.force3D,
            g = i.target,
            m = i.zOrigin,
            v = "",
            S = w === "auto" && e && e !== 1 || w === !0;
        if (m && (c !== es || d !== es)) {
            var k = parseFloat(d) * Vs,
                E = Math.sin(k),
                M = Math.cos(k),
                T;
            k = parseFloat(c) * Vs, T = Math.cos(k), a = Kn(g, a, E * T * -m), o = Kn(g, o, -Math.sin(k) * -m), l = Kn(g, l, M * T * -m + m)
        }
        b !== Js && (v += "perspective(" + b + ts), (s || r) && (v += "translate(" + s + "%, " + r + "%) "), (S || a !== Js || o !== Js || l !== Js) && (v += l !== Js || S ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + ts), u !== es && (v += "rotate(" + u + ts), d !== es && (v += "rotateY(" + d + ts), c !== es && (v += "rotateX(" + c + ts), (f !== es || h !== es) && (v += "skew(" + f + ", " + h + ts), (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + ts), g.style[pe] = v || "translate(0, 0)"
    },
    Ih = function(e, t) {
        var i = t || this,
            s = i.xPercent,
            r = i.yPercent,
            a = i.x,
            o = i.y,
            l = i.rotation,
            u = i.skewX,
            d = i.skewY,
            c = i.scaleX,
            f = i.scaleY,
            h = i.target,
            _ = i.xOrigin,
            p = i.yOrigin,
            b = i.xOffset,
            w = i.yOffset,
            g = i.forceCSS,
            m = parseFloat(a),
            v = parseFloat(o),
            S, k, E, M, T;
        l = parseFloat(l), u = parseFloat(u), d = parseFloat(d), d && (d = parseFloat(d), u += d, l += d), l || u ? (l *= Vs, u *= Vs, S = Math.cos(l) * c, k = Math.sin(l) * c, E = Math.sin(l - u) * -f, M = Math.cos(l - u) * f, u && (d *= Vs, T = Math.tan(u - d), T = Math.sqrt(1 + T * T), E *= T, M *= T, d && (T = Math.tan(d), T = Math.sqrt(1 + T * T), S *= T, k *= T)), S = we(S), k = we(k), E = we(E), M = we(M)) : (S = c, M = f, k = E = 0), (m && !~(a + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (m = $i(h, "x", a, "px"), v = $i(h, "y", o, "px")), (_ || p || b || w) && (m = we(m + _ - (_ * S + p * E) + b), v = we(v + p - (_ * k + p * M) + w)), (s || r) && (T = h.getBBox(), m = we(m + s / 100 * T.width), v = we(v + r / 100 * T.height)), T = "matrix(" + S + "," + k + "," + E + "," + M + "," + m + "," + v + ")", h.setAttribute("transform", T), g && (h.style[pe] = T)
    },
    Ph = function(e, t, i, s, r) {
        var a = 360,
            o = Re(r),
            l = parseFloat(r) * (o && ~r.indexOf("rad") ? is : 1),
            u = l - s,
            d = s + u + "deg",
            c, f;
        return o && (c = r.split("_")[1], c === "short" && (u %= a, u !== u % (a / 2) && (u += u < 0 ? a : -a)), c === "cw" && u < 0 ? u = (u + a * Mo) % a - ~~(u / a) * a : c === "ccw" && u > 0 && (u = (u - a * Mo) % a - ~~(u / a) * a)), e._pt = f = new gt(e._pt, t, i, s, u, mh), f.e = d, f.u = "deg", e._props.push(i), f
    },
    Oo = function(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    },
    Lh = function(e, t, i) {
        var s = Oo({}, i._gsap),
            r = "perspective,force3D,transformOrigin,svgOrigin",
            a = i.style,
            o, l, u, d, c, f, h, _;
        s.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), a[pe] = t, o = Cr(i, 1), _s(i, pe), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[pe], a[pe] = t, o = Cr(i, 1), a[pe] = u);
        for (l in Ti) u = s[l], d = o[l], u !== d && r.indexOf(l) < 0 && (h = je(u), _ = je(d), c = h !== _ ? $i(i, l, u, _) : parseFloat(u), f = parseFloat(d), e._pt = new gt(e._pt, o, l, c, f - c, ba), e._pt.u = _ || 0, e._props.push(l));
        Oo(o, s)
    };
mt("padding,margin,Width,Radius", function(n, e) {
    var t = "Top",
        i = "Right",
        s = "Bottom",
        r = "Left",
        a = (e < 3 ? [t, i, s, r] : [t + r, t + i, s + i, s + r]).map(function(o) {
            return e < 2 ? n + o : "border" + o + n
        });
    bn[e > 1 ? "border" + n : n] = function(o, l, u, d, c) {
        var f, h;
        if (arguments.length < 4) return f = a.map(function(_) {
            return _i(o, _, u)
        }), h = f.join(" "), h.split(f[0]).length === 5 ? f[0] : h;
        f = (d + "").split(" "), h = {}, a.forEach(function(_, p) {
            return h[_] = f[p] = f[p] || f[(p - 1) / 2 | 0]
        }), o.init(l, h, c)
    }
});
var cu = {
    name: "css",
    register: ya,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, i, s, r) {
        var a = this._props,
            o = e.style,
            l = i.vars.startAt,
            u, d, c, f, h, _, p, b, w, g, m, v, S, k, E, M;
        Qa || ya(), this.styles = this.styles || ru(e), M = this.styles.props, this.tween = i;
        for (p in t)
            if (p !== "autoRound" && (d = t[p], !(kt[p] && jl(p, t, i, s, e, r)))) {
                if (h = typeof d, _ = bn[p], h === "function" && (d = d.call(i, s, e, r), h = typeof d), h === "string" && ~d.indexOf("random(") && (d = xr(d)), _) _(this, e, p, d, i) && (E = 1);
                else if (p.substr(0, 2) === "--") u = (getComputedStyle(e).getPropertyValue(p) + "").trim(), d += "", Ri.lastIndex = 0, Ri.test(u) || (b = je(u), w = je(d)), w ? b !== w && (u = $i(e, p, u, w) + w) : b && (d += b), this.add(o, "setProperty", u, d, s, r, 0, 0, p), a.push(p), M.push(p, 0, o[p]);
                else if (h !== "undefined") {
                    if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(i, s, e, r) : l[p], Re(u) && ~u.indexOf("random(") && (u = xr(u)), je(u + "") || u === "auto" || (u += At.units[p] || je(_i(e, p)) || ""), (u + "").charAt(1) === "=" && (u = _i(e, p))) : u = _i(e, p), f = parseFloat(u), g = h === "string" && d.charAt(1) === "=" && d.substr(0, 2), g && (d = d.substr(2)), c = parseFloat(d), p in ai && (p === "autoAlpha" && (f === 1 && _i(e, "visibility") === "hidden" && c && (f = 0), M.push("visibility", 0, o.visibility), Oi(this, o, "visibility", f ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), p !== "scale" && p !== "transform" && (p = ai[p], ~p.indexOf(",") && (p = p.split(",")[0]))), m = p in Ti, m) {
                        if (this.styles.save(p), v || (S = e._gsap, S.renderTransform && !t.parseTransform || Cr(e, t.parseTransform), k = t.smoothOrigin !== !1 && S.smooth, v = this._pt = new gt(this._pt, o, pe, 0, 1, S.renderTransform, S, 0, -1), v.dep = 1), p === "scale") this._pt = new gt(this._pt, S, "scaleY", S.scaleY, (g ? Ds(S.scaleY, g + c) : c) - S.scaleY || 0, ba), this._pt.u = 0, a.push("scaleY", p), p += "X";
                        else if (p === "transformOrigin") {
                            M.push(_t, 0, o[_t]), d = Mh(d), S.svg ? Sa(e, d, 0, k, 0, this) : (w = parseFloat(d.split(" ")[2]) || 0, w !== S.zOrigin && Oi(this, S, "zOrigin", S.zOrigin, w), Oi(this, o, p, wn(u), wn(d)));
                            continue
                        } else if (p === "svgOrigin") {
                            Sa(e, d, 1, k, 0, this);
                            continue
                        } else if (p in lu) {
                            Ph(this, S, p, f, g ? Ds(f, g + d) : d);
                            continue
                        } else if (p === "smoothOrigin") {
                            Oi(this, S, "smooth", S.smooth, d);
                            continue
                        } else if (p === "force3D") {
                            S[p] = d;
                            continue
                        } else if (p === "transform") {
                            Lh(this, d, e);
                            continue
                        }
                    } else p in o || (p = Ys(p) || p);
                    if (m || (c || c === 0) && (f || f === 0) && !ph.test(d) && p in o) b = (u + "").substr((f + "").length), c || (c = 0), w = je(d) || (p in At.units ? At.units[p] : b), b !== w && (f = $i(e, p, u, w)), this._pt = new gt(this._pt, m ? S : o, p, f, (g ? Ds(f, g + c) : c) - f, !m && (w === "px" || p === "zIndex") && t.autoRound !== !1 ? _h : ba), this._pt.u = w || 0, b !== w && w !== "%" && (this._pt.b = u, this._pt.r = gh);
                    else if (p in o) Ch.call(this, e, p, u, g ? g + d : d);
                    else if (p in e) this.add(e, p, u || e[p], g ? g + d : d, s, r);
                    else if (p !== "parseTransform") {
                        Ha(p, d);
                        continue
                    }
                    m || (p in o ? M.push(p, 0, o[p]) : M.push(p, 1, u || e[p])), a.push(p)
                }
            } E && Jl(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Ja())
            for (var i = t._pt; i;) i.r(e, i.d), i = i._next;
        else t.styles.revert()
    },
    get: _i,
    aliases: ai,
    getSetter: function(e, t, i) {
        var s = ai[t];
        return s && s.indexOf(",") < 0 && (t = s), t in Ti && t !== _t && (e._gsap.x || _i(e, "x")) ? i && Co === i ? t === "scale" ? yh : wh : (Co = i || {}) && (t === "scale" ? Sh : xh) : e.style && !Na(e.style[t]) ? vh : ~t.indexOf("-") ? bh : Ka(e, t)
    },
    core: {
        _removeProperty: _s,
        _getMatrix: to
    }
};
vt.utils.checkPrefix = Ys;
vt.core.getStyleSaver = ru;
(function(n, e, t, i) {
    var s = mt(n + "," + e + "," + t, function(r) {
        Ti[r] = 1
    });
    mt(e, function(r) {
        At.units[r] = "deg", lu[r] = 1
    }), ai[s[13]] = n + "," + e, mt(i, function(r) {
        var a = r.split(":");
        ai[a[1]] = s[a[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
mt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
    At.units[n] = "px"
});
vt.registerPlugin(cu);
var io = vt.registerPlugin(cu) || vt;
io.core.Tween;

function Do(n, e) {
    for (var t = 0; t < e.length; t++) {
        var i = e[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
    }
}

function Oh(n, e, t) {
    return e && Do(n.prototype, e), t && Do(n, t), n
}
/*!
 * Observer 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var $e, en, Mt, Di, Bi, Rs, hu, ss, hr, fu, wi, Ut, pu, mu = function() {
        return $e || typeof window < "u" && ($e = window.gsap) && $e.registerPlugin && $e
    },
    gu = 1,
    Ls = [],
    j = [],
    ui = [],
    fr = Date.now,
    xa = function(e, t) {
        return t
    },
    Dh = function() {
        var e = hr.core,
            t = e.bridge || {},
            i = e._scrollers,
            s = e._proxies;
        i.push.apply(i, j), s.push.apply(s, ui), j = i, ui = s, xa = function(a, o) {
            return t[a](o)
        }
    },
    zi = function(e, t) {
        return ~ui.indexOf(e) && ui[ui.indexOf(e) + 1][t]
    },
    pr = function(e) {
        return !!~fu.indexOf(e)
    },
    tt = function(e, t, i, s, r) {
        return e.addEventListener(t, i, {
            passive: !s,
            capture: !!r
        })
    },
    et = function(e, t, i, s) {
        return e.removeEventListener(t, i, !!s)
    },
    Vr = "scrollLeft",
    Rr = "scrollTop",
    Ta = function() {
        return wi && wi.isPressed || j.cache++
    },
    yn = function(e, t) {
        var i = function s(r) {
            if (r || r === 0) {
                gu && (Mt.history.scrollRestoration = "manual");
                var a = wi && wi.isPressed;
                r = s.v = Math.round(r) || (wi && wi.iOS ? 1 : 0), e(r), s.cacheID = j.cache, a && xa("ss", r)
            } else(t || j.cache !== s.cacheID || xa("ref")) && (s.cacheID = j.cache, s.v = e());
            return s.v + s.offset
        };
        return i.offset = 0, e && i
    },
    ot = {
        s: Vr,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: yn(function(n) {
            return arguments.length ? Mt.scrollTo(n, Ae.sc()) : Mt.pageXOffset || Di[Vr] || Bi[Vr] || Rs[Vr] || 0
        })
    },
    Ae = {
        s: Rr,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ot,
        sc: yn(function(n) {
            return arguments.length ? Mt.scrollTo(ot.sc(), n) : Mt.pageYOffset || Di[Rr] || Bi[Rr] || Rs[Rr] || 0
        })
    },
    ht = function(e, t) {
        return (t && t._ctx && t._ctx.selector || $e.utils.toArray)(e)[0] || (typeof e == "string" && $e.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    Hi = function(e, t) {
        var i = t.s,
            s = t.sc;
        pr(e) && (e = Di.scrollingElement || Bi);
        var r = j.indexOf(e),
            a = s === Ae.sc ? 1 : 2;
        !~r && (r = j.push(e) - 1), j[r + a] || tt(e, "scroll", Ta);
        var o = j[r + a],
            l = o || (j[r + a] = yn(zi(e, i), !0) || (pr(e) ? s : yn(function(u) {
                return arguments.length ? e[i] = u : e[i]
            })));
        return l.target = e, o || (l.smooth = $e.getProperty(e, "scrollBehavior") === "smooth"), l
    },
    Ea = function(e, t, i) {
        var s = e,
            r = e,
            a = fr(),
            o = a,
            l = t || 50,
            u = Math.max(500, l * 3),
            d = function(_, p) {
                var b = fr();
                p || b - a > l ? (r = s, s = _, o = a, a = b) : i ? s += _ : s = r + (_ - r) / (b - o) * (a - o)
            },
            c = function() {
                r = s = i ? 0 : s, o = a = 0
            },
            f = function(_) {
                var p = o,
                    b = r,
                    w = fr();
                return (_ || _ === 0) && _ !== s && d(_), a === o || w - o > u ? 0 : (s + (i ? b : -b)) / ((i ? w : a) - p) * 1e3
            };
        return {
            update: d,
            reset: c,
            getVelocity: f
        }
    },
    er = function(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    Bo = function(e) {
        var t = Math.max.apply(Math, e),
            i = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(i) ? t : i
    },
    _u = function() {
        hr = $e.core.globals().ScrollTrigger, hr && hr.core && Dh()
    },
    vu = function(e) {
        return $e = e || mu(), !en && $e && typeof document < "u" && document.body && (Mt = window, Di = document, Bi = Di.documentElement, Rs = Di.body, fu = [Mt, Di, Bi, Rs], $e.utils.clamp, pu = $e.core.context || function() {}, ss = "onpointerenter" in Rs ? "pointer" : "mouse", hu = Ce.isTouch = Mt.matchMedia && Mt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Mt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ut = Ce.eventTypes = ("ontouchstart" in Bi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Bi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return gu = 0
        }, 500), _u(), en = 1), en
    };
ot.op = Ae;
j.cache = 0;
var Ce = function() {
    function n(t) {
        this.init(t)
    }
    var e = n.prototype;
    return e.init = function(i) {
        en || vu($e) || console.warn("Please gsap.registerPlugin(Observer)"), hr || _u();
        var s = i.tolerance,
            r = i.dragMinimum,
            a = i.type,
            o = i.target,
            l = i.lineHeight,
            u = i.debounce,
            d = i.preventDefault,
            c = i.onStop,
            f = i.onStopDelay,
            h = i.ignore,
            _ = i.wheelSpeed,
            p = i.event,
            b = i.onDragStart,
            w = i.onDragEnd,
            g = i.onDrag,
            m = i.onPress,
            v = i.onRelease,
            S = i.onRight,
            k = i.onLeft,
            E = i.onUp,
            M = i.onDown,
            T = i.onChangeX,
            x = i.onChangeY,
            I = i.onChange,
            F = i.onToggleX,
            A = i.onToggleY,
            P = i.onHover,
            L = i.onHoverEnd,
            B = i.onMove,
            R = i.ignoreCheck,
            H = i.isNormalizer,
            te = i.onGestureStart,
            y = i.onGestureEnd,
            ne = i.onWheel,
            ze = i.onEnable,
            Gt = i.onDisable,
            me = i.onClick,
            Ne = i.scrollSpeed,
            Ke = i.capture,
            ye = i.allowClicks,
            Ze = i.lockAxis,
            He = i.onLockAxis;
        this.target = o = ht(o) || Bi, this.vars = i, h && (h = $e.utils.toArray(h)), s = s || 1e-9, r = r || 0, _ = _ || 1, Ne = Ne || 1, a = a || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Mt.getComputedStyle(Rs).lineHeight) || 22);
        var Ci, Qe, Kt, ee, Se, ut, wt, C = this,
            yt = 0,
            ci = 0,
            Yi = Hi(o, ot),
            xe = Hi(o, Ae),
            Xi = Yi(),
            ji = xe(),
            Us = ~a.indexOf("touch") && !~a.indexOf("pointer") && Ut[0] === "pointerdown",
            Me = pr(o),
            ve = o.ownerDocument || Di,
            $t = [0, 0, 0],
            Ht = [0, 0, 0],
            Ui = 0,
            hi = function() {
                return Ui = fr()
            },
            Zt = function(z, ie) {
                return (C.event = z) && h && ~h.indexOf(z.target) || ie && Us && z.pointerType !== "touch" || R && R(z, ie)
            },
            dt = function() {
                C._vx.reset(), C._vy.reset(), Qe.pause(), c && c(C)
            },
            Wi = function() {
                var z = C.deltaX = Bo($t),
                    ie = C.deltaY = Bo(Ht),
                    Te = Math.abs(z) >= s,
                    O = Math.abs(ie) >= s;
                I && (Te || O) && I(C, z, ie, $t, Ht), Te && (S && C.deltaX > 0 && S(C), k && C.deltaX < 0 && k(C), T && T(C), F && C.deltaX < 0 != yt < 0 && F(C), yt = C.deltaX, $t[0] = $t[1] = $t[2] = 0), O && (M && C.deltaY > 0 && M(C), E && C.deltaY < 0 && E(C), x && x(C), A && C.deltaY < 0 != ci < 0 && A(C), ci = C.deltaY, Ht[0] = Ht[1] = Ht[2] = 0), (ee || Kt) && (B && B(C), Kt && (g(C), Kt = !1), ee = !1), ut && !(ut = !1) && He && He(C), Se && (ne(C), Se = !1), Ci = 0
            },
            xs = function(z, ie, Te) {
                $t[Te] += z, Ht[Te] += ie, C._vx.update(z), C._vy.update(ie), u ? Ci || (Ci = requestAnimationFrame(Wi)) : Wi()
            },
            Ts = function(z, ie) {
                Ze && !wt && (C.axis = wt = Math.abs(z) > Math.abs(ie) ? "x" : "y", ut = !0), wt !== "y" && ($t[2] += z, C._vx.update(z, !0)), wt !== "x" && (Ht[2] += ie, C._vy.update(ie, !0)), u ? Ci || (Ci = requestAnimationFrame(Wi)) : Wi()
            },
            Ki = function(z) {
                if (!Zt(z, 1)) {
                    z = er(z, d);
                    var ie = z.clientX,
                        Te = z.clientY,
                        O = ie - C.x,
                        Y = Te - C.y,
                        N = C.isDragging;
                    C.x = ie, C.y = Te, (N || Math.abs(C.startX - ie) >= r || Math.abs(C.startY - Te) >= r) && (g && (Kt = !0), N || (C.isDragging = !0), Ts(O, Y), N || b && b(C))
                }
            },
            Mi = C.onPress = function($) {
                Zt($, 1) || $ && $.button || (C.axis = wt = null, Qe.pause(), C.isPressed = !0, $ = er($), yt = ci = 0, C.startX = C.x = $.clientX, C.startY = C.y = $.clientY, C._vx.reset(), C._vy.reset(), tt(H ? o : ve, Ut[1], Ki, d, !0), C.deltaX = C.deltaY = 0, m && m(C))
            },
            Fi = C.onRelease = function($) {
                if (!Zt($, 1)) {
                    et(H ? o : ve, Ut[1], Ki, !0);
                    var z = !isNaN(C.y - C.startY),
                        ie = C.isDragging,
                        Te = ie && (Math.abs(C.x - C.startX) > 3 || Math.abs(C.y - C.startY) > 3),
                        O = er($);
                    !Te && z && (C._vx.reset(), C._vy.reset(), d && ye && $e.delayedCall(.08, function() {
                        if (fr() - Ui > 300 && !$.defaultPrevented) {
                            if ($.target.click) $.target.click();
                            else if (ve.createEvent) {
                                var Y = ve.createEvent("MouseEvents");
                                Y.initMouseEvent("click", !0, !0, Mt, 1, O.screenX, O.screenY, O.clientX, O.clientY, !1, !1, !1, !1, 0, null), $.target.dispatchEvent(Y)
                            }
                        }
                    })), C.isDragging = C.isGesturing = C.isPressed = !1, c && ie && !H && Qe.restart(!0), w && ie && w(C), v && v(C, Te)
                }
            },
            Q = function(z) {
                return z.touches && z.touches.length > 1 && (C.isGesturing = !0) && te(z, C.isDragging)
            },
            Zi = function() {
                return (C.isGesturing = !1) || y(C)
            },
            qt = function(z) {
                if (!Zt(z)) {
                    var ie = Yi(),
                        Te = xe();
                    xs((ie - Xi) * Ne, (Te - ji) * Ne, 1), Xi = ie, ji = Te, c && Qe.restart(!0)
                }
            },
            Yt = function(z) {
                if (!Zt(z)) {
                    z = er(z, d), ne && (Se = !0);
                    var ie = (z.deltaMode === 1 ? l : z.deltaMode === 2 ? Mt.innerHeight : 1) * _;
                    xs(z.deltaX * ie, z.deltaY * ie, 0), c && !H && Qe.restart(!0)
                }
            },
            Xt = function(z) {
                if (!Zt(z)) {
                    var ie = z.clientX,
                        Te = z.clientY,
                        O = ie - C.x,
                        Y = Te - C.y;
                    C.x = ie, C.y = Te, ee = !0, c && Qe.restart(!0), (O || Y) && Ts(O, Y)
                }
            },
            Qi = function(z) {
                C.event = z, P(C)
            },
            Es = function(z) {
                C.event = z, L(C)
            },
            fi = function(z) {
                return Zt(z) || er(z, d) && me(C)
            };
        Qe = C._dc = $e.delayedCall(f || .25, dt).pause(), C.deltaX = C.deltaY = 0, C._vx = Ea(0, 50, !0), C._vy = Ea(0, 50, !0), C.scrollX = Yi, C.scrollY = xe, C.isDragging = C.isGesturing = C.isPressed = !1, pu(this), C.enable = function($) {
            return C.isEnabled || (tt(Me ? ve : o, "scroll", Ta), a.indexOf("scroll") >= 0 && tt(Me ? ve : o, "scroll", qt, d, Ke), a.indexOf("wheel") >= 0 && tt(o, "wheel", Yt, d, Ke), (a.indexOf("touch") >= 0 && hu || a.indexOf("pointer") >= 0) && (tt(o, Ut[0], Mi, d, Ke), tt(ve, Ut[2], Fi), tt(ve, Ut[3], Fi), ye && tt(o, "click", hi, !1, !0), me && tt(o, "click", fi), te && tt(ve, "gesturestart", Q), y && tt(ve, "gestureend", Zi), P && tt(o, ss + "enter", Qi), L && tt(o, ss + "leave", Es), B && tt(o, ss + "move", Xt)), C.isEnabled = !0, $ && $.type && Mi($), ze && ze(C)), C
        }, C.disable = function() {
            C.isEnabled && (Ls.filter(function($) {
                return $ !== C && pr($.target)
            }).length || et(Me ? ve : o, "scroll", Ta), C.isPressed && (C._vx.reset(), C._vy.reset(), et(H ? o : ve, Ut[1], Ki, !0)), et(Me ? ve : o, "scroll", qt, Ke), et(o, "wheel", Yt, Ke), et(o, Ut[0], Mi, Ke), et(ve, Ut[2], Fi), et(ve, Ut[3], Fi), et(o, "click", hi, !0), et(o, "click", fi), et(ve, "gesturestart", Q), et(ve, "gestureend", Zi), et(o, ss + "enter", Qi), et(o, ss + "leave", Es), et(o, ss + "move", Xt), C.isEnabled = C.isPressed = C.isDragging = !1, Gt && Gt(C))
        }, C.kill = C.revert = function() {
            C.disable();
            var $ = Ls.indexOf(C);
            $ >= 0 && Ls.splice($, 1), wi === C && (wi = 0)
        }, Ls.push(C), H && pr(o) && (wi = C), C.enable(p)
    }, Oh(n, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), n
}();
Ce.version = "3.12.4";
Ce.create = function(n) {
    return new Ce(n)
};
Ce.register = vu;
Ce.getAll = function() {
    return Ls.slice()
};
Ce.getById = function(n) {
    return Ls.filter(function(e) {
        return e.vars.id === n
    })[0]
};
mu() && $e.registerPlugin(Ce);
/*!
 * ScrollTrigger 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var D, Fs, K, he, Wt, ue, bu, Sn, Mr, Os, tn, zr, Xe, Pn, ka, st, Vo, Ro, As, wu, Zn, yu, it, Su, xu, Tu, Ai, Ca, so, zs, ro, xn, Ma, Qn, Nr = 1,
    nt = Date.now,
    Jn = nt(),
    zt = 0,
    ar = 0,
    zo = function(e, t, i) {
        var s = Tt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return i["_" + t + "Clamp"] = s, s ? e.substr(6, e.length - 7) : e
    },
    No = function(e, t) {
        return t && (!Tt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
    },
    Bh = function n() {
        return ar && requestAnimationFrame(n)
    },
    Go = function() {
        return Pn = 1
    },
    $o = function() {
        return Pn = 0
    },
    si = function(e) {
        return e
    },
    or = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Eu = function() {
        return typeof window < "u"
    },
    ku = function() {
        return D || Eu() && (D = window.gsap) && D.registerPlugin && D
    },
    vs = function(e) {
        return !!~bu.indexOf(e)
    },
    Cu = function(e) {
        return (e === "Height" ? ro : K["inner" + e]) || Wt["client" + e] || ue["client" + e]
    },
    Mu = function(e) {
        return zi(e, "getBoundingClientRect") || (vs(e) ? function() {
            return ln.width = K.innerWidth, ln.height = ro, ln
        } : function() {
            return bi(e)
        })
    },
    Vh = function(e, t, i) {
        var s = i.d,
            r = i.d2,
            a = i.a;
        return (a = zi(e, "getBoundingClientRect")) ? function() {
            return a()[s]
        } : function() {
            return (t ? Cu(r) : e["client" + r]) || 0
        }
    },
    Rh = function(e, t) {
        return !t || ~ui.indexOf(e) ? Mu(e) : function() {
            return ln
        }
    },
    oi = function(e, t) {
        var i = t.s,
            s = t.d2,
            r = t.d,
            a = t.a;
        return Math.max(0, (i = "scroll" + s) && (a = zi(e, i)) ? a() - Mu(e)()[r] : vs(e) ? (Wt[i] || ue[i]) - Cu(s) : e[i] - e["offset" + s])
    },
    Gr = function(e, t) {
        for (var i = 0; i < As.length; i += 3)(!t || ~t.indexOf(As[i + 1])) && e(As[i], As[i + 1], As[i + 2])
    },
    Tt = function(e) {
        return typeof e == "string"
    },
    lt = function(e) {
        return typeof e == "function"
    },
    sn = function(e) {
        return typeof e == "number"
    },
    rs = function(e) {
        return typeof e == "object"
    },
    tr = function(e, t, i) {
        return e && e.progress(t ? 0 : 1) && i && e.pause()
    },
    ea = function(e, t) {
        if (e.enabled) {
            var i = e._ctx ? e._ctx.add(function() {
                return t(e)
            }) : t(e);
            i && i.totalTime && (e.callbackAnimation = i)
        }
    },
    Cs = Math.abs,
    Fu = "left",
    Au = "top",
    no = "right",
    ao = "bottom",
    fs = "width",
    ps = "height",
    mr = "Right",
    gr = "Left",
    _r = "Top",
    vr = "Bottom",
    Ee = "padding",
    Dt = "margin",
    Xs = "Width",
    oo = "Height",
    Oe = "px",
    Bt = function(e) {
        return K.getComputedStyle(e)
    },
    zh = function(e) {
        var t = Bt(e).position;
        e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
    },
    Ho = function(e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e
    },
    bi = function(e, t) {
        var i = t && Bt(e)[ka] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            s = e.getBoundingClientRect();
        return i && i.progress(0).kill(), s
    },
    Fa = function(e, t) {
        var i = t.d2;
        return e["offset" + i] || e["client" + i] || 0
    },
    Iu = function(e) {
        var t = [],
            i = e.labels,
            s = e.duration(),
            r;
        for (r in i) t.push(i[r] / s);
        return t
    },
    Nh = function(e) {
        return function(t) {
            return D.utils.snap(Iu(e), t)
        }
    },
    lo = function(e) {
        var t = D.utils.snap(e),
            i = Array.isArray(e) && e.slice(0).sort(function(s, r) {
                return s - r
            });
        return i ? function(s, r, a) {
            a === void 0 && (a = .001);
            var o;
            if (!r) return t(s);
            if (r > 0) {
                for (s -= a, o = 0; o < i.length; o++)
                    if (i[o] >= s) return i[o];
                return i[o - 1]
            } else
                for (o = i.length, s += a; o--;)
                    if (i[o] <= s) return i[o];
            return i[0]
        } : function(s, r, a) {
            a === void 0 && (a = .001);
            var o = t(s);
            return !r || Math.abs(o - s) < a || o - s < 0 == r < 0 ? o : t(r < 0 ? s - e : s + e)
        }
    },
    Gh = function(e) {
        return function(t, i) {
            return lo(Iu(e))(t, i.direction)
        }
    },
    $r = function(e, t, i, s) {
        return i.split(",").forEach(function(r) {
            return e(t, r, s)
        })
    },
    Be = function(e, t, i, s, r) {
        return e.addEventListener(t, i, {
            passive: !s,
            capture: !!r
        })
    },
    De = function(e, t, i, s) {
        return e.removeEventListener(t, i, !!s)
    },
    Hr = function(e, t, i) {
        i = i && i.wheelHandler, i && (e(t, "wheel", i), e(t, "touchmove", i))
    },
    qo = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    qr = {
        toggleActions: "play",
        anticipatePin: 0
    },
    Tn = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    rn = function(e, t) {
        if (Tt(e)) {
            var i = e.indexOf("="),
                s = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
            ~i && (e.indexOf("%") > i && (s *= t / 100), e = e.substr(0, i - 1)), e = s + (e in Tn ? Tn[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    },
    Yr = function(e, t, i, s, r, a, o, l) {
        var u = r.startColor,
            d = r.endColor,
            c = r.fontSize,
            f = r.indent,
            h = r.fontWeight,
            _ = he.createElement("div"),
            p = vs(i) || zi(i, "pinType") === "fixed",
            b = e.indexOf("scroller") !== -1,
            w = p ? ue : i,
            g = e.indexOf("start") !== -1,
            m = g ? u : d,
            v = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return v += "position:" + ((b || l) && p ? "fixed;" : "absolute;"), (b || l || !p) && (v += (s === Ae ? no : ao) + ":" + (a + parseFloat(f)) + "px;"), o && (v += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), _._isStart = g, _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), _.style.cssText = v, _.innerText = t || t === 0 ? e + "-" + t : e, w.children[0] ? w.insertBefore(_, w.children[0]) : w.appendChild(_), _._offset = _["offset" + s.op.d2], nn(_, 0, s, g), _
    },
    nn = function(e, t, i, s) {
        var r = {
                display: "block"
            },
            a = i[s ? "os2" : "p2"],
            o = i[s ? "p2" : "os2"];
        e._isFlipped = s, r[i.a + "Percent"] = s ? -100 : 0, r[i.a] = s ? "1px" : 0, r["border" + a + Xs] = 1, r["border" + o + Xs] = 0, r[i.p] = t + "px", D.set(e, r)
    },
    q = [],
    Aa = {},
    Fr, Yo = function() {
        return nt() - zt > 34 && (Fr || (Fr = requestAnimationFrame(Si)))
    },
    Ms = function() {
        (!it || !it.isPressed || it.startX > ue.clientWidth) && (j.cache++, it ? Fr || (Fr = requestAnimationFrame(Si)) : Si(), zt || ws("scrollStart"), zt = nt())
    },
    ta = function() {
        Tu = K.innerWidth, xu = K.innerHeight
    },
    lr = function() {
        j.cache++, !Xe && !yu && !he.fullscreenElement && !he.webkitFullscreenElement && (!Su || Tu !== K.innerWidth || Math.abs(K.innerHeight - xu) > K.innerHeight * .25) && Sn.restart(!0)
    },
    bs = {},
    $h = [],
    Pu = function n() {
        return De(U, "scrollEnd", n) || os(!0)
    },
    ws = function(e) {
        return bs[e] && bs[e].map(function(t) {
            return t()
        }) || $h
    },
    xt = [],
    Lu = function(e) {
        for (var t = 0; t < xt.length; t += 5)(!e || xt[t + 4] && xt[t + 4].query === e) && (xt[t].style.cssText = xt[t + 1], xt[t].getBBox && xt[t].setAttribute("transform", xt[t + 2] || ""), xt[t + 3].uncache = 1)
    },
    uo = function(e, t) {
        var i;
        for (st = 0; st < q.length; st++) i = q[st], i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
        xn = !0, t && Lu(t), t || ws("revert")
    },
    Ou = function(e, t) {
        j.cache++, (t || !rt) && j.forEach(function(i) {
            return lt(i) && i.cacheID++ && (i.rec = 0)
        }), Tt(e) && (K.history.scrollRestoration = so = e)
    },
    rt, ms = 0,
    Xo, Hh = function() {
        if (Xo !== ms) {
            var e = Xo = ms;
            requestAnimationFrame(function() {
                return e === ms && os(!0)
            })
        }
    },
    Du = function() {
        ue.appendChild(zs), ro = !it && zs.offsetHeight || K.innerHeight, ue.removeChild(zs)
    },
    jo = function(e) {
        return Mr(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
        })
    },
    os = function(e, t) {
        if (zt && !e && !xn) {
            Be(U, "scrollEnd", Pu);
            return
        }
        Du(), rt = U.isRefreshing = !0, j.forEach(function(s) {
            return lt(s) && ++s.cacheID && (s.rec = s())
        });
        var i = ws("refreshInit");
        wu && U.sort(), t || uo(), j.forEach(function(s) {
            lt(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"), s(0))
        }), q.slice(0).forEach(function(s) {
            return s.refresh()
        }), xn = !1, q.forEach(function(s) {
            if (s._subPinOffset && s.pin) {
                var r = s.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    a = s.pin[r];
                s.revert(!0, 1), s.adjustPinSpacing(s.pin[r] - a), s.refresh()
            }
        }), Ma = 1, jo(!0), q.forEach(function(s) {
            var r = oi(s.scroller, s._dir),
                a = s.vars.end === "max" || s._endClamp && s.end > r,
                o = s._startClamp && s.start >= r;
            (a || o) && s.setPositions(o ? r - 1 : s.start, a ? Math.max(o ? r : s.start + 1, r) : s.end, !0)
        }), jo(!1), Ma = 0, i.forEach(function(s) {
            return s && s.render && s.render(-1)
        }), j.forEach(function(s) {
            lt(s) && (s.smooth && requestAnimationFrame(function() {
                return s.target.style.scrollBehavior = "smooth"
            }), s.rec && s(s.rec))
        }), Ou(so, 1), Sn.pause(), ms++, rt = 2, Si(2), q.forEach(function(s) {
            return lt(s.vars.onRefresh) && s.vars.onRefresh(s)
        }), rt = U.isRefreshing = !1, ws("refresh")
    },
    Ia = 0,
    an = 1,
    br, Si = function(e) {
        if (e === 2 || !rt && !xn) {
            U.isUpdating = !0, br && br.update(0);
            var t = q.length,
                i = nt(),
                s = i - Jn >= 50,
                r = t && q[0].scroll();
            if (an = Ia > r ? -1 : 1, rt || (Ia = r), s && (zt && !Pn && i - zt > 200 && (zt = 0, ws("scrollEnd")), tn = Jn, Jn = i), an < 0) {
                for (st = t; st-- > 0;) q[st] && q[st].update(0, s);
                an = 1
            } else
                for (st = 0; st < t; st++) q[st] && q[st].update(0, s);
            U.isUpdating = !1
        }
        Fr = 0
    },
    Pa = [Fu, Au, ao, no, Dt + vr, Dt + mr, Dt + _r, Dt + gr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    on = Pa.concat([fs, ps, "boxSizing", "max" + Xs, "max" + oo, "position", Dt, Ee, Ee + _r, Ee + mr, Ee + vr, Ee + gr]),
    qh = function(e, t, i) {
        Ns(i);
        var s = e._gsap;
        if (s.spacerIsNative) Ns(s.spacerState);
        else if (e._gsap.swappedIn) {
            var r = t.parentNode;
            r && (r.insertBefore(e, t), r.removeChild(t))
        }
        e._gsap.swappedIn = !1
    },
    ia = function(e, t, i, s) {
        if (!e._gsap.swappedIn) {
            for (var r = Pa.length, a = t.style, o = e.style, l; r--;) l = Pa[r], a[l] = i[l];
            a.position = i.position === "absolute" ? "absolute" : "relative", i.display === "inline" && (a.display = "inline-block"), o[ao] = o[no] = "auto", a.flexBasis = i.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[fs] = Fa(e, ot) + Oe, a[ps] = Fa(e, Ae) + Oe, a[Ee] = o[Dt] = o[Au] = o[Fu] = "0", Ns(s), o[fs] = o["max" + Xs] = i[fs], o[ps] = o["max" + oo] = i[ps], o[Ee] = i[Ee], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    Yh = /([A-Z])/g,
    Ns = function(e) {
        if (e) {
            var t = e.t.style,
                i = e.length,
                s = 0,
                r, a;
            for ((e.t._gsap || D.core.getCache(e.t)).uncache = 1; s < i; s += 2) a = e[s + 1], r = e[s], a ? t[r] = a : t[r] && t.removeProperty(r.replace(Yh, "-$1").toLowerCase())
        }
    },
    Xr = function(e) {
        for (var t = on.length, i = e.style, s = [], r = 0; r < t; r++) s.push(on[r], i[on[r]]);
        return s.t = e, s
    },
    Xh = function(e, t, i) {
        for (var s = [], r = e.length, a = i ? 8 : 0, o; a < r; a += 2) o = e[a], s.push(o, o in t ? t[o] : e[a + 1]);
        return s.t = e.t, s
    },
    ln = {
        left: 0,
        top: 0
    },
    Uo = function(e, t, i, s, r, a, o, l, u, d, c, f, h, _) {
        lt(e) && (e = e(l)), Tt(e) && e.substr(0, 3) === "max" && (e = f + (e.charAt(4) === "=" ? rn("0" + e.substr(3), i) : 0));
        var p = h ? h.time() : 0,
            b, w, g;
        if (h && h.seek(0), isNaN(e) || (e = +e), sn(e)) h && (e = D.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, e)), o && nn(o, i, s, !0);
        else {
            lt(t) && (t = t(l));
            var m = (e || "0").split(" "),
                v, S, k, E;
            g = ht(t, l) || ue, v = bi(g) || {}, (!v || !v.left && !v.top) && Bt(g).display === "none" && (E = g.style.display, g.style.display = "block", v = bi(g), E ? g.style.display = E : g.style.removeProperty("display")), S = rn(m[0], v[s.d]), k = rn(m[1] || "0", i), e = v[s.p] - u[s.p] - d + S + r - k, o && nn(o, k, s, i - k < 20 || o._isStart && k > 20), i -= i - k
        }
        if (_ && (l[_] = e || -.001, e < 0 && (e = 0)), a) {
            var M = e + i,
                T = a._isStart;
            b = "scroll" + s.d2, nn(a, M, s, T && M > 20 || !T && (c ? Math.max(ue[b], Wt[b]) : a.parentNode[b]) <= M + 1), c && (u = bi(o), c && (a.style[s.op.p] = u[s.op.p] - s.op.m - a._offset + Oe))
        }
        return h && g && (b = bi(g), h.seek(f), w = bi(g), h._caScrollDist = b[s.p] - w[s.p], e = e / h._caScrollDist * f), h && h.seek(p), h ? e : Math.round(e)
    },
    jh = /(webkit|moz|length|cssText|inset)/i,
    Wo = function(e, t, i, s) {
        if (e.parentNode !== t) {
            var r = e.style,
                a, o;
            if (t === ue) {
                e._stOrig = r.cssText, o = Bt(e);
                for (a in o) !+a && !jh.test(a) && o[a] && typeof r[a] == "string" && a !== "0" && (r[a] = o[a]);
                r.top = i, r.left = s
            } else r.cssText = e._stOrig;
            D.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    },
    Bu = function(e, t, i) {
        var s = t,
            r = s;
        return function(a) {
            var o = Math.round(e());
            return o !== s && o !== r && Math.abs(o - s) > 3 && Math.abs(o - r) > 3 && (a = o, i && i()), r = s, s = a, a
        }
    },
    jr = function(e, t, i) {
        var s = {};
        s[t.p] = "+=" + i, D.set(e, s)
    },
    Ko = function(e, t) {
        var i = Hi(e, t),
            s = "_scroll" + t.p2,
            r = function a(o, l, u, d, c) {
                var f = a.tween,
                    h = l.onComplete,
                    _ = {};
                u = u || i();
                var p = Bu(i, u, function() {
                    f.kill(), a.tween = 0
                });
                return c = d && c || 0, d = d || o - u, f && f.kill(), l[s] = o, l.modifiers = _, _[s] = function() {
                    return p(u + d * f.ratio + c * f.ratio * f.ratio)
                }, l.onUpdate = function() {
                    j.cache++, a.tween && Si()
                }, l.onComplete = function() {
                    a.tween = 0, h && h.call(f)
                }, f = a.tween = D.to(e, l), f
            };
        return e[s] = i, i.wheelHandler = function() {
            return r.tween && r.tween.kill() && (r.tween = 0)
        }, Be(e, "wheel", i.wheelHandler), U.isTouch && Be(e, "touchmove", i.wheelHandler), r
    },
    U = function() {
        function n(t, i) {
            Fs || n.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ca(this), this.init(t, i)
        }
        var e = n.prototype;
        return e.init = function(i, s) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ar) {
                this.update = this.refresh = this.kill = si;
                return
            }
            i = Ho(Tt(i) || sn(i) || i.nodeType ? {
                trigger: i
            } : i, qr);
            var r = i,
                a = r.onUpdate,
                o = r.toggleClass,
                l = r.id,
                u = r.onToggle,
                d = r.onRefresh,
                c = r.scrub,
                f = r.trigger,
                h = r.pin,
                _ = r.pinSpacing,
                p = r.invalidateOnRefresh,
                b = r.anticipatePin,
                w = r.onScrubComplete,
                g = r.onSnapComplete,
                m = r.once,
                v = r.snap,
                S = r.pinReparent,
                k = r.pinSpacer,
                E = r.containerAnimation,
                M = r.fastScrollEnd,
                T = r.preventOverlaps,
                x = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? ot : Ae,
                I = !c && c !== 0,
                F = ht(i.scroller || K),
                A = D.core.getCache(F),
                P = vs(F),
                L = ("pinType" in i ? i.pinType : zi(F, "pinType") || P && "fixed") === "fixed",
                B = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
                R = I && i.toggleActions.split(" "),
                H = "markers" in i ? i.markers : qr.markers,
                te = P ? 0 : parseFloat(Bt(F)["border" + x.p2 + Xs]) || 0,
                y = this,
                ne = i.onRefreshInit && function() {
                    return i.onRefreshInit(y)
                },
                ze = Vh(F, P, x),
                Gt = Rh(F, P),
                me = 0,
                Ne = 0,
                Ke = 0,
                ye = Hi(F, x),
                Ze, He, Ci, Qe, Kt, ee, Se, ut, wt, C, yt, ci, Yi, xe, Xi, ji, Us, Me, ve, $t, Ht, Ui, hi, Zt, dt, Wi, xs, Ts, Ki, Mi, Fi, Q, Zi, qt, Yt, Xt, Qi, Es, fi;
            if (y._startClamp = y._endClamp = !1, y._dir = x, b *= 45, y.scroller = F, y.scroll = E ? E.time.bind(E) : ye, Qe = ye(), y.vars = i, s = s || i.animation, "refreshPriority" in i && (wu = 1, i.refreshPriority === -9999 && (br = y)), A.tweenScroll = A.tweenScroll || {
                    top: Ko(F, Ae),
                    left: Ko(F, ot)
                }, y.tweenTo = Ze = A.tweenScroll[x.p], y.scrubDuration = function(O) {
                    Zi = sn(O) && O, Zi ? Q ? Q.duration(O) : Q = D.to(s, {
                        ease: "expo",
                        totalProgress: "+=0",
                        duration: Zi,
                        paused: !0,
                        onComplete: function() {
                            return w && w(y)
                        }
                    }) : (Q && Q.progress(1).kill(), Q = 0)
                }, s && (s.vars.lazy = !1, s._initted && !y.isReverted || s.vars.immediateRender !== !1 && i.immediateRender !== !1 && s.duration() && s.render(0, !0, !0), y.animation = s.pause(), s.scrollTrigger = y, y.scrubDuration(c), Mi = 0, l || (l = s.vars.id)), v && ((!rs(v) || v.push) && (v = {
                    snapTo: v
                }), "scrollBehavior" in ue.style && D.set(P ? [ue, Wt] : F, {
                    scrollBehavior: "auto"
                }), j.forEach(function(O) {
                    return lt(O) && O.target === (P ? he.scrollingElement || Wt : F) && (O.smooth = !1)
                }), Ci = lt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Nh(s) : v.snapTo === "labelsDirectional" ? Gh(s) : v.directional !== !1 ? function(O, Y) {
                    return lo(v.snapTo)(O, nt() - Ne < 500 ? 0 : Y.direction)
                } : D.utils.snap(v.snapTo), qt = v.duration || {
                    min: .1,
                    max: 2
                }, qt = rs(qt) ? Os(qt.min, qt.max) : Os(qt, qt), Yt = D.delayedCall(v.delay || Zi / 2 || .1, function() {
                    var O = ye(),
                        Y = nt() - Ne < 500,
                        N = Ze.tween;
                    if ((Y || Math.abs(y.getVelocity()) < 10) && !N && !Pn && me !== O) {
                        var X = (O - ee) / xe,
                            Ie = s && !I ? s.totalProgress() : X,
                            J = Y ? 0 : (Ie - Fi) / (nt() - tn) * 1e3 || 0,
                            be = D.utils.clamp(-X, 1 - X, Cs(J / 2) * J / .185),
                            Je = X + (v.inertia === !1 ? 0 : be),
                            Pe = Os(0, 1, Ci(Je, y)),
                            de = Math.round(ee + Pe * xe),
                            ae = v,
                            jt = ae.onStart,
                            ce = ae.onInterrupt,
                            St = ae.onComplete;
                        if (O <= Se && O >= ee && de !== O) {
                            if (N && !N._initted && N.data <= Cs(de - O)) return;
                            v.inertia === !1 && (be = Pe - X), Ze(de, {
                                duration: qt(Cs(Math.max(Cs(Je - Ie), Cs(Pe - Ie)) * .185 / J / .05 || 0)),
                                ease: v.ease || "power3",
                                data: Cs(de - O),
                                onInterrupt: function() {
                                    return Yt.restart(!0) && ce && ce(y)
                                },
                                onComplete: function() {
                                    y.update(), me = ye(), Q && s && s.progress(Pe), Mi = Fi = s && !I ? s.totalProgress() : y.progress, g && g(y), St && St(y)
                                }
                            }, O, be * xe, de - O - be * xe), jt && jt(y, Ze.tween)
                        }
                    } else y.isActive && me !== O && Yt.restart(!0)
                }).pause()), l && (Aa[l] = y), f = y.trigger = ht(f || h !== !0 && h), fi = f && f._gsap && f._gsap.stRevert, fi && (fi = fi(y)), h = h === !0 ? f : ht(h), Tt(o) && (o = {
                    targets: f,
                    className: o
                }), h && (_ === !1 || _ === Dt || (_ = !_ && h.parentNode && h.parentNode.style && Bt(h.parentNode).display === "flex" ? !1 : Ee), y.pin = h, He = D.core.getCache(h), He.spacer ? Xi = He.pinState : (k && (k = ht(k), k && !k.nodeType && (k = k.current || k.nativeElement), He.spacerIsNative = !!k, k && (He.spacerState = Xr(k))), He.spacer = Me = k || he.createElement("div"), Me.classList.add("pin-spacer"), l && Me.classList.add("pin-spacer-" + l), He.pinState = Xi = Xr(h)), i.force3D !== !1 && D.set(h, {
                    force3D: !0
                }), y.spacer = Me = He.spacer, Ki = Bt(h), Zt = Ki[_ + x.os2], $t = D.getProperty(h), Ht = D.quickSetter(h, x.a, Oe), ia(h, Me, Ki), Us = Xr(h)), H) {
                ci = rs(H) ? Ho(H, qo) : qo, C = Yr("scroller-start", l, F, x, ci, 0), yt = Yr("scroller-end", l, F, x, ci, 0, C), ve = C["offset" + x.op.d2];
                var $ = ht(zi(F, "content") || F);
                ut = this.markerStart = Yr("start", l, $, x, ci, ve, 0, E), wt = this.markerEnd = Yr("end", l, $, x, ci, ve, 0, E), E && (Es = D.quickSetter([ut, wt], x.a, Oe)), !L && !(ui.length && zi(F, "fixedMarkers") === !0) && (zh(P ? ue : F), D.set([C, yt], {
                    force3D: !0
                }), Wi = D.quickSetter(C, x.a, Oe), Ts = D.quickSetter(yt, x.a, Oe))
            }
            if (E) {
                var z = E.vars.onUpdate,
                    ie = E.vars.onUpdateParams;
                E.eventCallback("onUpdate", function() {
                    y.update(0, 0, 1), z && z.apply(E, ie || [])
                })
            }
            if (y.previous = function() {
                    return q[q.indexOf(y) - 1]
                }, y.next = function() {
                    return q[q.indexOf(y) + 1]
                }, y.revert = function(O, Y) {
                    if (!Y) return y.kill(!0);
                    var N = O !== !1 || !y.enabled,
                        X = Xe;
                    N !== y.isReverted && (N && (Xt = Math.max(ye(), y.scroll.rec || 0), Ke = y.progress, Qi = s && s.progress()), ut && [ut, wt, C, yt].forEach(function(Ie) {
                        return Ie.style.display = N ? "none" : "block"
                    }), N && (Xe = y, y.update(N)), h && (!S || !y.isActive) && (N ? qh(h, Me, Xi) : ia(h, Me, Bt(h), dt)), N || y.update(N), Xe = X, y.isReverted = N)
                }, y.refresh = function(O, Y, N, X) {
                    if (!((Xe || !y.enabled) && !Y)) {
                        if (h && O && zt) {
                            Be(n, "scrollEnd", Pu);
                            return
                        }!rt && ne && ne(y), Xe = y, Ze.tween && !N && (Ze.tween.kill(), Ze.tween = 0), Q && Q.pause(), p && s && s.revert({
                            kill: !1
                        }).invalidate(), y.isReverted || y.revert(!0, !0), y._subPinOffset = !1;
                        var Ie = ze(),
                            J = Gt(),
                            be = E ? E.duration() : oi(F, x),
                            Je = xe <= .01,
                            Pe = 0,
                            de = X || 0,
                            ae = rs(N) ? N.end : i.end,
                            jt = i.endTrigger || f,
                            ce = rs(N) ? N.start : i.start || (i.start === 0 || !f ? 0 : h ? "0 0" : "0 100%"),
                            St = y.pinnedContainer = i.pinnedContainer && ht(i.pinnedContainer, y),
                            Qt = f && Math.max(0, q.indexOf(y)) || 0,
                            ct = Qt,
                            Ge, qe, Ji, Pr, Ye, Fe, Jt, On, ho, Ws, ei, Ks, Lr;
                        for (H && rs(N) && (Ks = D.getProperty(C, x.p), Lr = D.getProperty(yt, x.p)); ct--;) Fe = q[ct], Fe.end || Fe.refresh(0, 1) || (Xe = y), Jt = Fe.pin, Jt && (Jt === f || Jt === h || Jt === St) && !Fe.isReverted && (Ws || (Ws = []), Ws.unshift(Fe), Fe.revert(!0, !0)), Fe !== q[ct] && (Qt--, ct--);
                        for (lt(ce) && (ce = ce(y)), ce = zo(ce, "start", y), ee = Uo(ce, f, Ie, x, ye(), ut, C, y, J, te, L, be, E, y._startClamp && "_startClamp") || (h ? -.001 : 0), lt(ae) && (ae = ae(y)), Tt(ae) && !ae.indexOf("+=") && (~ae.indexOf(" ") ? ae = (Tt(ce) ? ce.split(" ")[0] : "") + ae : (Pe = rn(ae.substr(2), Ie), ae = Tt(ce) ? ce : (E ? D.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, ee) : ee) + Pe, jt = f)), ae = zo(ae, "end", y), Se = Math.max(ee, Uo(ae || (jt ? "100% 0" : be), jt, Ie, x, ye() + Pe, wt, yt, y, J, te, L, be, E, y._endClamp && "_endClamp")) || -.001, Pe = 0, ct = Qt; ct--;) Fe = q[ct], Jt = Fe.pin, Jt && Fe.start - Fe._pinPush <= ee && !E && Fe.end > 0 && (Ge = Fe.end - (y._startClamp ? Math.max(0, Fe.start) : Fe.start), (Jt === f && Fe.start - Fe._pinPush < ee || Jt === St) && isNaN(ce) && (Pe += Ge * (1 - Fe.progress)), Jt === h && (de += Ge));
                        if (ee += Pe, Se += Pe, y._startClamp && (y._startClamp += Pe), y._endClamp && !rt && (y._endClamp = Se || -.001, Se = Math.min(Se, oi(F, x))), xe = Se - ee || (ee -= .01) && .001, Je && (Ke = D.utils.clamp(0, 1, D.utils.normalize(ee, Se, Xt))), y._pinPush = de, ut && Pe && (Ge = {}, Ge[x.a] = "+=" + Pe, St && (Ge[x.p] = "-=" + ye()), D.set([ut, wt], Ge)), h && !(Ma && y.end >= oi(F, x))) Ge = Bt(h), Pr = x === Ae, Ji = ye(), Ui = parseFloat($t(x.a)) + de, !be && Se > 1 && (ei = (P ? he.scrollingElement || Wt : F).style, ei = {
                            style: ei,
                            value: ei["overflow" + x.a.toUpperCase()]
                        }, P && Bt(ue)["overflow" + x.a.toUpperCase()] !== "scroll" && (ei.style["overflow" + x.a.toUpperCase()] = "scroll")), ia(h, Me, Ge), Us = Xr(h), qe = bi(h, !0), On = L && Hi(F, Pr ? ot : Ae)(), _ && (dt = [_ + x.os2, xe + de + Oe], dt.t = Me, ct = _ === Ee ? Fa(h, x) + xe + de : 0, ct && (dt.push(x.d, ct + Oe), Me.style.flexBasis !== "auto" && (Me.style.flexBasis = ct + Oe)), Ns(dt), St && q.forEach(function(Zs) {
                            Zs.pin === St && Zs.vars.pinSpacing !== !1 && (Zs._subPinOffset = !0)
                        }), L && ye(Xt)), L && (Ye = {
                            top: qe.top + (Pr ? Ji - ee : On) + Oe,
                            left: qe.left + (Pr ? On : Ji - ee) + Oe,
                            boxSizing: "border-box",
                            position: "fixed"
                        }, Ye[fs] = Ye["max" + Xs] = Math.ceil(qe.width) + Oe, Ye[ps] = Ye["max" + oo] = Math.ceil(qe.height) + Oe, Ye[Dt] = Ye[Dt + _r] = Ye[Dt + mr] = Ye[Dt + vr] = Ye[Dt + gr] = "0", Ye[Ee] = Ge[Ee], Ye[Ee + _r] = Ge[Ee + _r], Ye[Ee + mr] = Ge[Ee + mr], Ye[Ee + vr] = Ge[Ee + vr], Ye[Ee + gr] = Ge[Ee + gr], ji = Xh(Xi, Ye, S), rt && ye(0)), s ? (ho = s._initted, Zn(1), s.render(s.duration(), !0, !0), hi = $t(x.a) - Ui + xe + de, xs = Math.abs(xe - hi) > 1, L && xs && ji.splice(ji.length - 2, 2), s.render(0, !0, !0), ho || s.invalidate(!0), s.parent || s.totalTime(s.totalTime()), Zn(0)) : hi = xe, ei && (ei.value ? ei.style["overflow" + x.a.toUpperCase()] = ei.value : ei.style.removeProperty("overflow-" + x.a));
                        else if (f && ye() && !E)
                            for (qe = f.parentNode; qe && qe !== ue;) qe._pinOffset && (ee -= qe._pinOffset, Se -= qe._pinOffset), qe = qe.parentNode;
                        Ws && Ws.forEach(function(Zs) {
                            return Zs.revert(!1, !0)
                        }), y.start = ee, y.end = Se, Qe = Kt = rt ? Xt : ye(), !E && !rt && (Qe < Xt && ye(Xt), y.scroll.rec = 0), y.revert(!1, !0), Ne = nt(), Yt && (me = -1, Yt.restart(!0)), Xe = 0, s && I && (s._initted || Qi) && s.progress() !== Qi && s.progress(Qi || 0, !0).render(s.time(), !0, !0), (Je || Ke !== y.progress || E) && (s && !I && s.totalProgress(E && ee < -.001 && !Ke ? D.utils.normalize(ee, Se, 0) : Ke, !0), y.progress = Je || (Qe - ee) / xe === Ke ? 0 : Ke), h && _ && (Me._pinOffset = Math.round(y.progress * hi)), Q && Q.invalidate(), isNaN(Ks) || (Ks -= D.getProperty(C, x.p), Lr -= D.getProperty(yt, x.p), jr(C, x, Ks), jr(ut, x, Ks - (X || 0)), jr(yt, x, Lr), jr(wt, x, Lr - (X || 0))), Je && !rt && y.update(), d && !rt && !Yi && (Yi = !0, d(y), Yi = !1)
                    }
                }, y.getVelocity = function() {
                    return (ye() - Kt) / (nt() - tn) * 1e3 || 0
                }, y.endAnimation = function() {
                    tr(y.callbackAnimation), s && (Q ? Q.progress(1) : s.paused() ? I || tr(s, y.direction < 0, 1) : tr(s, s.reversed()))
                }, y.labelToScroll = function(O) {
                    return s && s.labels && (ee || y.refresh() || ee) + s.labels[O] / s.duration() * xe || 0
                }, y.getTrailing = function(O) {
                    var Y = q.indexOf(y),
                        N = y.direction > 0 ? q.slice(0, Y).reverse() : q.slice(Y + 1);
                    return (Tt(O) ? N.filter(function(X) {
                        return X.vars.preventOverlaps === O
                    }) : N).filter(function(X) {
                        return y.direction > 0 ? X.end <= ee : X.start >= Se
                    })
                }, y.update = function(O, Y, N) {
                    if (!(E && !N && !O)) {
                        var X = rt === !0 ? Xt : y.scroll(),
                            Ie = O ? 0 : (X - ee) / xe,
                            J = Ie < 0 ? 0 : Ie > 1 ? 1 : Ie || 0,
                            be = y.progress,
                            Je, Pe, de, ae, jt, ce, St, Qt;
                        if (Y && (Kt = Qe, Qe = E ? ye() : X, v && (Fi = Mi, Mi = s && !I ? s.totalProgress() : J)), b && !J && h && !Xe && !Nr && zt && ee < X + (X - Kt) / (nt() - tn) * b && (J = 1e-4), J !== be && y.enabled) {
                            if (Je = y.isActive = !!J && J < 1, Pe = !!be && be < 1, ce = Je !== Pe, jt = ce || !!J != !!be, y.direction = J > be ? 1 : -1, y.progress = J, jt && !Xe && (de = J && !be ? 0 : J === 1 ? 1 : be === 1 ? 2 : 3, I && (ae = !ce && R[de + 1] !== "none" && R[de + 1] || R[de], Qt = s && (ae === "complete" || ae === "reset" || ae in s))), T && (ce || Qt) && (Qt || c || !s) && (lt(T) ? T(y) : y.getTrailing(T).forEach(function(Ji) {
                                    return Ji.endAnimation()
                                })), I || (Q && !Xe && !Nr ? (Q._dp._time - Q._start !== Q._time && Q.render(Q._dp._time - Q._start), Q.resetTo ? Q.resetTo("totalProgress", J, s._tTime / s._tDur) : (Q.vars.totalProgress = J, Q.invalidate().restart())) : s && s.totalProgress(J, !!(Xe && (Ne || O)))), h) {
                                if (O && _ && (Me.style[_ + x.os2] = Zt), !L) Ht(or(Ui + hi * J));
                                else if (jt) {
                                    if (St = !O && J > be && Se + 1 > X && X + 1 >= oi(F, x), S)
                                        if (!O && (Je || St)) {
                                            var ct = bi(h, !0),
                                                Ge = X - ee;
                                            Wo(h, ue, ct.top + (x === Ae ? Ge : 0) + Oe, ct.left + (x === Ae ? 0 : Ge) + Oe)
                                        } else Wo(h, Me);
                                    Ns(Je || St ? ji : Us), xs && J < 1 && Je || Ht(Ui + (J === 1 && !St ? hi : 0))
                                }
                            }
                            v && !Ze.tween && !Xe && !Nr && Yt.restart(!0), o && (ce || m && J && (J < 1 || !Qn)) && Mr(o.targets).forEach(function(Ji) {
                                return Ji.classList[Je || m ? "add" : "remove"](o.className)
                            }), a && !I && !O && a(y), jt && !Xe ? (I && (Qt && (ae === "complete" ? s.pause().totalProgress(1) : ae === "reset" ? s.restart(!0).pause() : ae === "restart" ? s.restart(!0) : s[ae]()), a && a(y)), (ce || !Qn) && (u && ce && ea(y, u), B[de] && ea(y, B[de]), m && (J === 1 ? y.kill(!1, 1) : B[de] = 0), ce || (de = J === 1 ? 1 : 3, B[de] && ea(y, B[de]))), M && !Je && Math.abs(y.getVelocity()) > (sn(M) ? M : 2500) && (tr(y.callbackAnimation), Q ? Q.progress(1) : tr(s, ae === "reverse" ? 1 : !J, 1))) : I && a && !Xe && a(y)
                        }
                        if (Ts) {
                            var qe = E ? X / E.duration() * (E._caScrollDist || 0) : X;
                            Wi(qe + (C._isFlipped ? 1 : 0)), Ts(qe)
                        }
                        Es && Es(-X / E.duration() * (E._caScrollDist || 0))
                    }
                }, y.enable = function(O, Y) {
                    y.enabled || (y.enabled = !0, Be(F, "resize", lr), P || Be(F, "scroll", Ms), ne && Be(n, "refreshInit", ne), O !== !1 && (y.progress = Ke = 0, Qe = Kt = me = ye()), Y !== !1 && y.refresh())
                }, y.getTween = function(O) {
                    return O && Ze ? Ze.tween : Q
                }, y.setPositions = function(O, Y, N, X) {
                    if (E) {
                        var Ie = E.scrollTrigger,
                            J = E.duration(),
                            be = Ie.end - Ie.start;
                        O = Ie.start + be * O / J, Y = Ie.start + be * Y / J
                    }
                    y.refresh(!1, !1, {
                        start: No(O, N && !!y._startClamp),
                        end: No(Y, N && !!y._endClamp)
                    }, X), y.update()
                }, y.adjustPinSpacing = function(O) {
                    if (dt && O) {
                        var Y = dt.indexOf(x.d) + 1;
                        dt[Y] = parseFloat(dt[Y]) + O + Oe, dt[1] = parseFloat(dt[1]) + O + Oe, Ns(dt)
                    }
                }, y.disable = function(O, Y) {
                    if (y.enabled && (O !== !1 && y.revert(!0, !0), y.enabled = y.isActive = !1, Y || Q && Q.pause(), Xt = 0, He && (He.uncache = 1), ne && De(n, "refreshInit", ne), Yt && (Yt.pause(), Ze.tween && Ze.tween.kill() && (Ze.tween = 0)), !P)) {
                        for (var N = q.length; N--;)
                            if (q[N].scroller === F && q[N] !== y) return;
                        De(F, "resize", lr), P || De(F, "scroll", Ms)
                    }
                }, y.kill = function(O, Y) {
                    y.disable(O, Y), Q && !Y && Q.kill(), l && delete Aa[l];
                    var N = q.indexOf(y);
                    N >= 0 && q.splice(N, 1), N === st && an > 0 && st--, N = 0, q.forEach(function(X) {
                        return X.scroller === y.scroller && (N = 1)
                    }), N || rt || (y.scroll.rec = 0), s && (s.scrollTrigger = null, O && s.revert({
                        kill: !1
                    }), Y || s.kill()), ut && [ut, wt, C, yt].forEach(function(X) {
                        return X.parentNode && X.parentNode.removeChild(X)
                    }), br === y && (br = 0), h && (He && (He.uncache = 1), N = 0, q.forEach(function(X) {
                        return X.pin === h && N++
                    }), N || (He.spacer = 0)), i.onKill && i.onKill(y)
                }, q.push(y), y.enable(!1, !1), fi && fi(y), s && s.add && !xe) {
                var Te = y.update;
                y.update = function() {
                    y.update = Te, ee || Se || y.refresh()
                }, D.delayedCall(.01, y.update), xe = .01, ee = Se = 0
            } else y.refresh();
            h && Hh()
        }, n.register = function(i) {
            return Fs || (D = i || ku(), Eu() && window.document && n.enable(), Fs = ar), Fs
        }, n.defaults = function(i) {
            if (i)
                for (var s in i) qr[s] = i[s];
            return qr
        }, n.disable = function(i, s) {
            ar = 0, q.forEach(function(a) {
                return a[s ? "kill" : "disable"](i)
            }), De(K, "wheel", Ms), De(he, "scroll", Ms), clearInterval(zr), De(he, "touchcancel", si), De(ue, "touchstart", si), $r(De, he, "pointerdown,touchstart,mousedown", Go), $r(De, he, "pointerup,touchend,mouseup", $o), Sn.kill(), Gr(De);
            for (var r = 0; r < j.length; r += 3) Hr(De, j[r], j[r + 1]), Hr(De, j[r], j[r + 2])
        }, n.enable = function() {
            if (K = window, he = document, Wt = he.documentElement, ue = he.body, D && (Mr = D.utils.toArray, Os = D.utils.clamp, Ca = D.core.context || si, Zn = D.core.suppressOverwrites || si, so = K.history.scrollRestoration || "auto", Ia = K.pageYOffset, D.core.globals("ScrollTrigger", n), ue)) {
                ar = 1, zs = document.createElement("div"), zs.style.height = "100vh", zs.style.position = "absolute", Du(), Bh(), Ce.register(D), n.isTouch = Ce.isTouch, Ai = Ce.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Be(K, "wheel", Ms), bu = [K, he, Wt, ue], D.matchMedia ? (n.matchMedia = function(l) {
                    var u = D.matchMedia(),
                        d;
                    for (d in l) u.add(d, l[d]);
                    return u
                }, D.addEventListener("matchMediaInit", function() {
                    return uo()
                }), D.addEventListener("matchMediaRevert", function() {
                    return Lu()
                }), D.addEventListener("matchMedia", function() {
                    os(0, 1), ws("matchMedia")
                }), D.matchMedia("(orientation: portrait)", function() {
                    return ta(), ta
                })) : console.warn("Requires GSAP 3.11.0 or later"), ta(), Be(he, "scroll", Ms);
                var i = ue.style,
                    s = i.borderTopStyle,
                    r = D.core.Animation.prototype,
                    a, o;
                for (r.revert || Object.defineProperty(r, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), i.borderTopStyle = "solid", a = bi(ue), Ae.m = Math.round(a.top + Ae.sc()) || 0, ot.m = Math.round(a.left + ot.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), zr = setInterval(Yo, 250), D.delayedCall(.5, function() {
                        return Nr = 0
                    }), Be(he, "touchcancel", si), Be(ue, "touchstart", si), $r(Be, he, "pointerdown,touchstart,mousedown", Go), $r(Be, he, "pointerup,touchend,mouseup", $o), ka = D.utils.checkPrefix("transform"), on.push(ka), Fs = nt(), Sn = D.delayedCall(.2, os).pause(), As = [he, "visibilitychange", function() {
                        var l = K.innerWidth,
                            u = K.innerHeight;
                        he.hidden ? (Vo = l, Ro = u) : (Vo !== l || Ro !== u) && lr()
                    }, he, "DOMContentLoaded", os, K, "load", os, K, "resize", lr], Gr(Be), q.forEach(function(l) {
                        return l.enable(0, 1)
                    }), o = 0; o < j.length; o += 3) Hr(De, j[o], j[o + 1]), Hr(De, j[o], j[o + 2])
            }
        }, n.config = function(i) {
            "limitCallbacks" in i && (Qn = !!i.limitCallbacks);
            var s = i.syncInterval;
            s && clearInterval(zr) || (zr = s) && setInterval(Yo, s), "ignoreMobileResize" in i && (Su = n.isTouch === 1 && i.ignoreMobileResize), "autoRefreshEvents" in i && (Gr(De) || Gr(Be, i.autoRefreshEvents || "none"), yu = (i.autoRefreshEvents + "").indexOf("resize") === -1)
        }, n.scrollerProxy = function(i, s) {
            var r = ht(i),
                a = j.indexOf(r),
                o = vs(r);
            ~a && j.splice(a, o ? 6 : 2), s && (o ? ui.unshift(K, s, ue, s, Wt, s) : ui.unshift(r, s))
        }, n.clearMatchMedia = function(i) {
            q.forEach(function(s) {
                return s._ctx && s._ctx.query === i && s._ctx.kill(!0, !0)
            })
        }, n.isInViewport = function(i, s, r) {
            var a = (Tt(i) ? ht(i) : i).getBoundingClientRect(),
                o = a[r ? fs : ps] * s || 0;
            return r ? a.right - o > 0 && a.left + o < K.innerWidth : a.bottom - o > 0 && a.top + o < K.innerHeight
        }, n.positionInViewport = function(i, s, r) {
            Tt(i) && (i = ht(i));
            var a = i.getBoundingClientRect(),
                o = a[r ? fs : ps],
                l = s == null ? o / 2 : s in Tn ? Tn[s] * o : ~s.indexOf("%") ? parseFloat(s) * o / 100 : parseFloat(s) || 0;
            return r ? (a.left + l) / K.innerWidth : (a.top + l) / K.innerHeight
        }, n.killAll = function(i) {
            if (q.slice(0).forEach(function(r) {
                    return r.vars.id !== "ScrollSmoother" && r.kill()
                }), i !== !0) {
                var s = bs.killAll || [];
                bs = {}, s.forEach(function(r) {
                    return r()
                })
            }
        }, n
    }();
U.version = "3.12.4";
U.saveStyles = function(n) {
    return n ? Mr(n).forEach(function(e) {
        if (e && e.style) {
            var t = xt.indexOf(e);
            t >= 0 && xt.splice(t, 5), xt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), D.core.getCache(e), Ca())
        }
    }) : xt
};
U.revert = function(n, e) {
    return uo(!n, e)
};
U.create = function(n, e) {
    return new U(n, e)
};
U.refresh = function(n) {
    return n ? lr() : (Fs || U.register()) && os(!0)
};
U.update = function(n) {
    return ++j.cache && Si(n === !0 ? 2 : 0)
};
U.clearScrollMemory = Ou;
U.maxScroll = function(n, e) {
    return oi(n, e ? ot : Ae)
};
U.getScrollFunc = function(n, e) {
    return Hi(ht(n), e ? ot : Ae)
};
U.getById = function(n) {
    return Aa[n]
};
U.getAll = function() {
    return q.filter(function(n) {
        return n.vars.id !== "ScrollSmoother"
    })
};
U.isScrolling = function() {
    return !!zt
};
U.snapDirectional = lo;
U.addEventListener = function(n, e) {
    var t = bs[n] || (bs[n] = []);
    ~t.indexOf(e) || t.push(e)
};
U.removeEventListener = function(n, e) {
    var t = bs[n],
        i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1)
};
U.batch = function(n, e) {
    var t = [],
        i = {},
        s = e.interval || .016,
        r = e.batchMax || 1e9,
        a = function(u, d) {
            var c = [],
                f = [],
                h = D.delayedCall(s, function() {
                    d(c, f), c = [], f = []
                }).pause();
            return function(_) {
                c.length || h.restart(!0), c.push(_.trigger), f.push(_), r <= c.length && h.progress(1)
            }
        },
        o;
    for (o in e) i[o] = o.substr(0, 2) === "on" && lt(e[o]) && o !== "onRefreshInit" ? a(o, e[o]) : e[o];
    return lt(r) && (r = r(), Be(U, "refresh", function() {
        return r = e.batchMax()
    })), Mr(n).forEach(function(l) {
        var u = {};
        for (o in i) u[o] = i[o];
        u.trigger = l, t.push(U.create(u))
    }), t
};
var Zo = function(e, t, i, s) {
        return t > s ? e(s) : t < 0 && e(0), i > s ? (s - t) / (i - t) : i < 0 ? t / (t - i) : 1
    },
    sa = function n(e, t) {
        t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Ce.isTouch ? " pinch-zoom" : "") : "none", e === Wt && n(ue, t)
    },
    Ur = {
        auto: 1,
        scroll: 1
    },
    Uh = function(e) {
        var t = e.event,
            i = e.target,
            s = e.axis,
            r = (t.changedTouches ? t.changedTouches[0] : t).target,
            a = r._gsap || D.core.getCache(r),
            o = nt(),
            l;
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (; r && r !== ue && (r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth || !(Ur[(l = Bt(r)).overflowY] || Ur[l.overflowX]));) r = r.parentNode;
            a._isScroll = r && r !== i && !vs(r) && (Ur[(l = Bt(r)).overflowY] || Ur[l.overflowX]), a._isScrollT = o
        }(a._isScroll || s === "x") && (t.stopPropagation(), t._gsapAllow = !0)
    },
    Vu = function(e, t, i, s) {
        return Ce.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: s = s && Uh,
            onPress: s,
            onDrag: s,
            onScroll: s,
            onEnable: function() {
                return i && Be(he, Ce.eventTypes[0], Jo, !1, !0)
            },
            onDisable: function() {
                return De(he, Ce.eventTypes[0], Jo, !0)
            }
        })
    },
    Wh = /(input|label|select|textarea)/i,
    Qo, Jo = function(e) {
        var t = Wh.test(e.target.tagName);
        (t || Qo) && (e._gsapAllow = !0, Qo = t)
    },
    Kh = function(e) {
        rs(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var t = e,
            i = t.normalizeScrollX,
            s = t.momentum,
            r = t.allowNestedScroll,
            a = t.onRelease,
            o, l, u = ht(e.target) || Wt,
            d = D.core.globals().ScrollSmoother,
            c = d && d.get(),
            f = Ai && (e.content && ht(e.content) || c && e.content !== !1 && !c.smooth() && c.content()),
            h = Hi(u, Ae),
            _ = Hi(u, ot),
            p = 1,
            b = (Ce.isTouch && K.visualViewport ? K.visualViewport.scale * K.visualViewport.width : K.outerWidth) / K.innerWidth,
            w = 0,
            g = lt(s) ? function() {
                return s(o)
            } : function() {
                return s || 2.8
            },
            m, v, S = Vu(u, e.type, !0, r),
            k = function() {
                return v = !1
            },
            E = si,
            M = si,
            T = function() {
                l = oi(u, Ae), M = Os(Ai ? 1 : 0, l), i && (E = Os(0, oi(u, ot))), m = ms
            },
            x = function() {
                f._gsap.y = or(parseFloat(f._gsap.y) + h.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
            },
            I = function() {
                if (v) {
                    requestAnimationFrame(k);
                    var H = or(o.deltaY / 2),
                        te = M(h.v - H);
                    if (f && te !== h.v + h.offset) {
                        h.offset = te - h.v;
                        var y = or((parseFloat(f && f._gsap.y) || 0) - h.offset);
                        f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)", f._gsap.y = y + "px", h.cacheID = j.cache, Si()
                    }
                    return !0
                }
                h.offset && x(), v = !0
            },
            F, A, P, L, B = function() {
                T(), F.isActive() && F.vars.scrollY > l && (h() > l ? F.progress(1) && h(l) : F.resetTo("scrollY", l))
            };
        return f && D.set(f, {
            y: "+=0"
        }), e.ignoreCheck = function(R) {
            return Ai && R.type === "touchmove" && I() || p > 1.05 && R.type !== "touchstart" || o.isGesturing || R.touches && R.touches.length > 1
        }, e.onPress = function() {
            v = !1;
            var R = p;
            p = or((K.visualViewport && K.visualViewport.scale || 1) / b), F.pause(), R !== p && sa(u, p > 1.01 ? !0 : i ? !1 : "x"), A = _(), P = h(), T(), m = ms
        }, e.onRelease = e.onGestureStart = function(R, H) {
            if (h.offset && x(), !H) L.restart(!0);
            else {
                j.cache++;
                var te = g(),
                    y, ne;
                i && (y = _(), ne = y + te * .05 * -R.velocityX / .227, te *= Zo(_, y, ne, oi(u, ot)), F.vars.scrollX = E(ne)), y = h(), ne = y + te * .05 * -R.velocityY / .227, te *= Zo(h, y, ne, oi(u, Ae)), F.vars.scrollY = M(ne), F.invalidate().duration(te).play(.01), (Ai && F.vars.scrollY >= l || y >= l - 1) && D.to({}, {
                    onUpdate: B,
                    duration: te
                })
            }
            a && a(R)
        }, e.onWheel = function() {
            F._ts && F.pause(), nt() - w > 1e3 && (m = 0, w = nt())
        }, e.onChange = function(R, H, te, y, ne) {
            if (ms !== m && T(), H && i && _(E(y[2] === H ? A + (R.startX - R.x) : _() + H - y[1])), te) {
                h.offset && x();
                var ze = ne[2] === te,
                    Gt = ze ? P + R.startY - R.y : h() + te - ne[1],
                    me = M(Gt);
                ze && Gt !== me && (P += me - Gt), h(me)
            }(te || H) && Si()
        }, e.onEnable = function() {
            sa(u, i ? !1 : "x"), U.addEventListener("refresh", B), Be(K, "resize", B), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = _.smooth = !1), S.enable()
        }, e.onDisable = function() {
            sa(u, !0), De(K, "resize", B), U.removeEventListener("refresh", B), S.kill()
        }, e.lockAxis = e.lockAxis !== !1, o = new Ce(e), o.iOS = Ai, Ai && !h() && h(1), Ai && D.ticker.add(si), L = o._dc, F = D.to(o, {
            ease: "power4",
            paused: !0,
            scrollX: i ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Bu(h, h(), function() {
                    return F.pause()
                })
            },
            onUpdate: Si,
            onComplete: L.vars.onComplete
        }), o
    };
U.sort = function(n) {
    return q.sort(n || function(e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    })
};
U.observe = function(n) {
    return new Ce(n)
};
U.normalizeScroll = function(n) {
    if (typeof n > "u") return it;
    if (n === !0 && it) return it.enable();
    if (n === !1) {
        it && it.kill(), it = n;
        return
    }
    var e = n instanceof Ce ? n : Kh(n);
    return it && it.target === e.target && it.kill(), vs(e.target) && (it = e), e
};
U.core = {
    _getVelocityProp: Ea,
    _inputObserver: Vu,
    _scrollers: j,
    _proxies: ui,
    bridge: {
        ss: function() {
            zt || ws("scrollStart"), zt = nt()
        },
        ref: function() {
            return Xe
        }
    }
};
ku() && D.registerPlugin(U);
io.registerPlugin(U);

function Zh() {
    const n = document.getElementsByClassName("accordion__btn");
    for (let t = 0; t < n.length; t++) n[t].addEventListener("click", function() {
        this.classList.toggle("active"), this.classList.contains("active") && e(t)
    });

    function e(t) {
        for (let i = 0; i < n.length; i++) i !== t && n[i].classList.remove("active")
    }
}

function Qh() {
    const n = document.querySelector(".header"),
        e = document.querySelector(".header__content-burger");
    let t = 0;
    window.addEventListener("scroll", function() {
        const i = window.pageYOffset || document.documentElement.scrollTop;
        i > t ? n.classList.add("outside") : n.classList.remove("outside"), i > 900 ? n.classList.add("__blue") : n.classList.remove("__blue"), t = i
    }), e.addEventListener("click", function() {
        e.classList.contains("active") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    })
}
/*!
 * Cuberto Mouse Follower
 * https://cuberto.com/
 *
 * @version 1.1.2
 * @author Cuberto, Artem Dordzhiev (Draft)
 */
var el = function() {
    n.registerGSAP = function(i) {
        n.gsap = i
    };

    function n(t) {
        t === void 0 && (t = {}), this.options = Object.assign({}, {
            el: null,
            container: document.body,
            className: "mf-cursor",
            innerClassName: "mf-cursor-inner",
            textClassName: "mf-cursor-text",
            mediaClassName: "mf-cursor-media",
            mediaBoxClassName: "mf-cursor-media-box",
            iconSvgClassName: "mf-svgsprite",
            iconSvgNamePrefix: "-",
            iconSvgSrc: "",
            dataAttr: "cursor",
            hiddenState: "-hidden",
            textState: "-text",
            iconState: "-icon",
            activeState: "-active",
            mediaState: "-media",
            stateDetection: {
                "-pointer": "a,button"
            },
            visible: !0,
            visibleOnState: !1,
            speed: .55,
            ease: "expo.out",
            overwrite: !0,
            skewing: 0,
            skewingText: 2,
            skewingIcon: 2,
            skewingMedia: 2,
            skewingDelta: .001,
            skewingDeltaMax: .15,
            stickDelta: .15,
            showTimeout: 0,
            hideOnLeave: !0,
            hideTimeout: 300,
            hideMediaTimeout: 300,
            initialPos: [-window.innerWidth, -window.innerHeight]
        }, t), this.options.visible && t.stateDetection == null && (this.options.stateDetection["-hidden"] = "iframe"), this.gsap = n.gsap || window.gsap, this.el = typeof this.options.el == "string" ? document.querySelector(this.options.el) : this.options.el, this.container = typeof this.options.container == "string" ? document.querySelector(this.options.container) : this.options.container, this.skewing = this.options.skewing, this.pos = {
            x: this.options.initialPos[0],
            y: this.options.initialPos[1]
        }, this.vel = {
            x: 0,
            y: 0
        }, this.event = {}, this.events = [], this.init()
    }
    var e = n.prototype;
    return e.init = function() {
        this.el || this.create(), this.createSetter(), this.bind(), this.render(!0), this.ticker = this.render.bind(this, !1), this.gsap.ticker.add(this.ticker)
    }, e.create = function() {
        this.el = document.createElement("div"), this.el.className = this.options.className, this.el.classList.add(this.options.hiddenState), this.inner = document.createElement("div"), this.inner.className = this.options.innerClassName, this.text = document.createElement("div"), this.text.className = this.options.textClassName, this.media = document.createElement("div"), this.media.className = this.options.mediaClassName, this.mediaBox = document.createElement("div"), this.mediaBox.className = this.options.mediaBoxClassName, this.media.appendChild(this.mediaBox), this.inner.appendChild(this.media), this.inner.appendChild(this.text), this.el.appendChild(this.inner), this.container.appendChild(this.el)
    }, e.createSetter = function() {
        this.setter = {
            x: this.gsap.quickSetter(this.el, "x", "px"),
            y: this.gsap.quickSetter(this.el, "y", "px"),
            rotation: this.gsap.quickSetter(this.el, "rotation", "deg"),
            scaleX: this.gsap.quickSetter(this.el, "scaleX"),
            scaleY: this.gsap.quickSetter(this.el, "scaleY"),
            wc: this.gsap.quickSetter(this.el, "willChange"),
            inner: {
                rotation: this.gsap.quickSetter(this.inner, "rotation", "deg")
            }
        }
    }, e.bind = function() {
        var i = this;
        this.event.mouseleave = function() {
            return i.hide()
        }, this.event.mouseenter = function() {
            return i.show()
        }, this.event.mousedown = function() {
            return i.addState(i.options.activeState)
        }, this.event.mouseup = function() {
            return i.removeState(i.options.activeState)
        }, this.event.mousemoveOnce = function() {
            return i.show()
        }, this.event.mousemove = function(s) {
            i.gsap.to(i.pos, {
                x: i.stick ? i.stick.x - (i.stick.x - s.clientX) * i.options.stickDelta : s.clientX,
                y: i.stick ? i.stick.y - (i.stick.y - s.clientY) * i.options.stickDelta : s.clientY,
                overwrite: i.options.overwrite,
                ease: i.options.ease,
                duration: i.visible ? i.options.speed : 0,
                onUpdate: function() {
                    return i.vel = {
                        x: s.clientX - i.pos.x,
                        y: s.clientY - i.pos.y
                    }
                }
            })
        }, this.event.mouseover = function(s) {
            for (var r = s.target; r && r !== i.container && !(s.relatedTarget && r.contains(s.relatedTarget)); r = r.parentNode) {
                for (var a in i.options.stateDetection) r.matches(i.options.stateDetection[a]) && i.addState(a);
                if (i.options.dataAttr) {
                    var o = i.getFromDataset(r);
                    o.state && i.addState(o.state), o.text && i.setText(o.text), o.icon && i.setIcon(o.icon), o.img && i.setImg(o.img), o.video && i.setVideo(o.video), typeof o.show < "u" && i.show(), typeof o.stick < "u" && i.setStick(o.stick || r)
                }
            }
        }, this.event.mouseout = function(s) {
            for (var r = s.target; r && r !== i.container && !(s.relatedTarget && r.contains(s.relatedTarget)); r = r.parentNode) {
                for (var a in i.options.stateDetection) r.matches(i.options.stateDetection[a]) && i.removeState(a);
                if (i.options.dataAttr) {
                    var o = i.getFromDataset(r);
                    o.state && i.removeState(o.state), o.text && i.removeText(), o.icon && i.removeIcon(), o.img && i.removeImg(), o.video && i.removeVideo(), typeof o.show < "u" && i.hide(), typeof o.stick < "u" && i.removeStick()
                }
            }
        }, this.options.hideOnLeave && this.container.addEventListener("mouseleave", this.event.mouseleave, {
            passive: !0
        }), this.options.visible && this.container.addEventListener("mouseenter", this.event.mouseenter, {
            passive: !0
        }), this.options.activeState && (this.container.addEventListener("mousedown", this.event.mousedown, {
            passive: !0
        }), this.container.addEventListener("mouseup", this.event.mouseup, {
            passive: !0
        })), this.container.addEventListener("mousemove", this.event.mousemove, {
            passive: !0
        }), this.options.visible && this.container.addEventListener("mousemove", this.event.mousemoveOnce, {
            passive: !0,
            once: !0
        }), (this.options.stateDetection || this.options.dataAttr) && (this.container.addEventListener("mouseover", this.event.mouseover, {
            passive: !0
        }), this.container.addEventListener("mouseout", this.event.mouseout, {
            passive: !0
        }))
    }, e.render = function(i) {
        if (i !== !0 && (this.vel.y === 0 || this.vel.x === 0)) {
            this.setter.wc("auto");
            return
        }
        if (this.trigger("render"), this.setter.wc("transform"), this.setter.x(this.pos.x), this.setter.y(this.pos.y), this.skewing) {
            var s = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2)),
                r = Math.min(s * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing,
                a = Math.atan2(this.vel.y, this.vel.x) * 180 / Math.PI;
            this.setter.rotation(a), this.setter.scaleX(1 + r), this.setter.scaleY(1 - r), this.setter.inner.rotation(-a)
        }
    }, e.show = function() {
        var i = this;
        this.trigger("show"), clearInterval(this.visibleInt), this.visibleInt = setTimeout(function() {
            i.el.classList.remove(i.options.hiddenState), i.visible = !0, i.render(!0)
        }, this.options.showTimeout)
    }, e.hide = function() {
        var i = this;
        this.trigger("hide"), clearInterval(this.visibleInt), this.el.classList.add(this.options.hiddenState), this.visibleInt = setTimeout(function() {
            return i.visible = !1
        }, this.options.hideTimeout)
    }, e.toggle = function(i) {
        i === !0 || i !== !1 && !this.visible ? this.show() : this.hide()
    }, e.addState = function(i) {
        var s;
        if (this.trigger("addState", i), i === this.options.hiddenState) return this.hide();
        (s = this.el.classList).add.apply(s, i.split(" ")), this.options.visibleOnState && this.show()
    }, e.removeState = function(i) {
        var s;
        if (this.trigger("removeState", i), i === this.options.hiddenState) return this.show();
        (s = this.el.classList).remove.apply(s, i.split(" ")), this.options.visibleOnState && this.el.className === this.options.className && this.hide()
    }, e.toggleState = function(i, s) {
        s === !0 || s !== !1 && !this.el.classList.contains(i) ? this.addState(i) : this.removeState(i)
    }, e.setSkewing = function(i) {
        this.gsap.to(this, {
            skewing: i
        })
    }, e.removeSkewing = function() {
        this.gsap.to(this, {
            skewing: this.options.skewing
        })
    }, e.setStick = function(i) {
        var s = typeof i == "string" ? document.querySelector(i) : i,
            r = s.getBoundingClientRect();
        this.stick = {
            y: r.top + r.height / 2,
            x: r.left + r.width / 2
        }
    }, e.removeStick = function() {
        this.stick = !1
    }, e.setText = function(i) {
        this.text.innerHTML = i, this.addState(this.options.textState), this.setSkewing(this.options.skewingText)
    }, e.removeText = function() {
        this.removeState(this.options.textState), this.removeSkewing()
    }, e.setIcon = function(i, s) {
        s === void 0 && (s = ""), this.text.innerHTML = "<svg class='" + this.options.iconSvgClassName + " " + this.options.iconSvgNamePrefix + i + "'" + (" style='" + s + "'><use xlink:href='" + this.options.iconSvgSrc + "#" + i + "'></use></svg>"), this.addState(this.options.iconState), this.setSkewing(this.options.skewingIcon)
    }, e.removeIcon = function() {
        this.removeState(this.options.iconState), this.removeSkewing()
    }, e.setMedia = function(i) {
        var s = this;
        clearTimeout(this.mediaInt), i && (this.mediaBox.innerHTML = "", this.mediaBox.appendChild(i)), this.mediaInt = setTimeout(function() {
            return s.addState(s.options.mediaState)
        }, 20), this.setSkewing(this.options.skewingMedia)
    }, e.removeMedia = function() {
        var i = this;
        clearTimeout(this.mediaInt), this.removeState(this.options.mediaState), this.mediaInt = setTimeout(function() {
            return i.mediaBox.innerHTML = ""
        }, this.options.hideMediaTimeout), this.removeSkewing()
    }, e.setImg = function(i) {
        this.mediaImg || (this.mediaImg = new Image), this.mediaImg.src !== i && (this.mediaImg.src = i), this.setMedia(this.mediaImg)
    }, e.removeImg = function() {
        this.removeMedia()
    }, e.setVideo = function(i) {
        this.mediaVideo || (this.mediaVideo = document.createElement("video"), this.mediaVideo.muted = !0, this.mediaVideo.loop = !0, this.mediaVideo.autoplay = !0), this.mediaVideo.src !== i && (this.mediaVideo.src = i, this.mediaVideo.load()), this.mediaVideo.play(), this.setMedia(this.mediaVideo)
    }, e.removeVideo = function() {
        this.mediaVideo && this.mediaVideo.readyState > 2 && this.mediaVideo.pause(), this.removeMedia()
    }, e.on = function(i, s) {
        this.events[i] instanceof Array || this.off(i), this.events[i].push(s)
    }, e.off = function(i, s) {
        s ? this.events[i] = this.events[i].filter(function(r) {
            return r !== s
        }) : this.events[i] = []
    }, e.trigger = function(i) {
        var s = arguments,
            r = this;
        this.events[i] && this.events[i].forEach(function(a) {
            return a.call.apply(a, [r, r].concat([].slice.call(s, 1)))
        })
    }, e.getFromDataset = function(i) {
        var s = i.dataset;
        return {
            state: s[this.options.dataAttr],
            show: s[this.options.dataAttr + "Show"],
            text: s[this.options.dataAttr + "Text"],
            icon: s[this.options.dataAttr + "Icon"],
            img: s[this.options.dataAttr + "Img"],
            video: s[this.options.dataAttr + "Video"],
            stick: s[this.options.dataAttr + "Stick"]
        }
    }, e.destroy = function() {
        this.trigger("destroy"), this.gsap.ticker.remove(this.ticker), this.container.removeEventListener("mouseleave", this.event.mouseleave), this.container.removeEventListener("mouseenter", this.event.mouseenter), this.container.removeEventListener("mousedown", this.event.mousedown), this.container.removeEventListener("mouseup", this.event.mouseup), this.container.removeEventListener("mousemove", this.event.mousemove), this.container.removeEventListener("mousemove", this.event.mousemoveOnce), this.container.removeEventListener("mouseover", this.event.mouseover), this.container.removeEventListener("mouseout", this.event.mouseout), this.el && (this.container.removeChild(this.el), this.el = null, this.mediaImg = null, this.mediaVideo = null)
    }, n
}();

function Jh() {
    el.registerGSAP(io), new el({
        el: null,
        container: document.body,
        className: "mf-cursor",
        innerClassName: "mf-cursor-inner",
        textClassName: "mf-cursor-text",
        mediaClassName: "mf-cursor-media",
        mediaBoxClassName: "mf-cursor-media-box",
        iconSvgClassName: "mf-svgsprite",
        iconSvgNamePrefix: "-",
        iconSvgSrc: "",
        dataAttr: "cursor",
        hiddenState: "-hidden",
        textState: "-text",
        iconState: "-icon",
        activeState: "-active",
        mediaState: "-media",
        stateDetection: {
            "-pointer": "a,button",
            "-hidden": "iframe"
        },
        visible: !0,
        visibleOnState: !0,
        speed: .55,
        ease: "expo.out",
        overwrite: !0,
        skewing: 0,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: .001,
        skewingDeltaMax: .15,
        stickDelta: .15,
        showTimeout: 20,
        hideOnLeave: !0,
        hideTimeout: 300,
        hideMediaTimeout: 300
    }), SmoothScroll({
        animationTime: 1e3,
        stepSize: 75,
        accelerationDelta: 30,
        accelerationMax: 2,
        keyboardSupport: !0,
        arrowScroll: 50,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: !0
    });

    function n() {
        let e = document.querySelector(".hero"),
            t = document.querySelector(".hero__img-left"),
            i = document.querySelector(".hero__img-right"),
            s = document.querySelector(".hero__img-center"),
            r = document.querySelector(".hero__content-tagline"),
            a = document.querySelector(".hero__content-title"),
            o = document.querySelector(".main-page .hero .hero__content .button-main"),
            l = e == null ? void 0 : e.offsetTop,
            u = e == null ? void 0 : e.offsetHeight;
        if (window.pageYOffset >= l && window.pageYOffset <= l + u) {
            let d = (window.pageYOffset - l) / u * 100;
            t && (t.style.transform = "translate(0%," + d * 1.4 + "%)"), i && (i.style.transform = "translate(0%," + d * 1.9 + "%)"), s.style.transform = "translate(-50%," + d * .5 + "%)", r && (r.style.transform = "translate(0%," + d + "%)", r.style.opacity = 1 - d / 70), a.style.opacity = 1 - d / 100, a.style.transform = "translate(0%," + d + "%)", o && (o.style.opacity = 1 - d * 2 / 30)
        }
    }
    window.addEventListener("scroll", n)
}

function ef() {
    const n = document.querySelectorAll(".filter-button"),
        e = document.querySelectorAll(".filter-card");

    function t(i, s) {
        s.forEach(r => {
            r.getAttribute("data-category") !== i && i !== "all" ? (r.classList.add("disabled"), r.classList.remove("active")) : (r.classList.remove("disabled"), r.classList.add("active"))
        })
    }
    n.forEach(i => {
        i.addEventListener("click", () => {
            if (i.classList.contains("active")) e.forEach(s => {
                s.classList.remove("disabled"), s.classList.remove("active")
            }), i.classList.remove("active");
            else {
                n.forEach(r => {
                    r === i ? r.classList.add("active") : r.classList.remove("active")
                });
                const s = i.getAttribute("data-filter");
                t(s, e)
            }
        })
    })
}

function tf() {
    const n = document.querySelector(".about__tecnology"),
        e = document.querySelectorAll(".about__tecnology-buttons-item"),
        t = document.querySelectorAll(".about__tecnology-sceme-picture");
    n && n.addEventListener("click", s => {
        if (s.target.classList.contains("about__tecnology-buttons-item")) {
            const r = s.target.dataset.tabsPath;
            e.forEach(a => {
                a.classList.remove("about__tecnology-buttons-item--active")
            }), document.querySelector(`[data-tabs-path="${r}"]`).classList.add("about__tecnology-buttons-item--active"), i(r)
        }
    });
    const i = s => {
        t.forEach(r => {
            r.classList.remove("about__tecnology-sceme-picture--active")
        }), document.querySelector(`[data-tabs-target="${s}"]`).classList.add("about__tecnology-sceme-picture--active")
    }
}

function sf() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}

function rf() {
    const n = document.querySelectorAll(".services__wrap-grid-hover-link"),
        e = document.querySelectorAll(".services__wrap-grid-images-img");
    n.forEach((t, i) => {
        const s = sf() ? "click" : "mouseenter";
        t.addEventListener(s, () => {
            const r = document.querySelector(".services__wrap-grid-hover-link.active"),
                a = document.querySelector(".services__wrap-grid-images-img.active");
            r && r.classList.remove("active"), a && a.classList.remove("active"), t.classList.add("active"), e[i].classList.add("active")
        })
    })
}
var nf = Object.defineProperty,
    af = (n, e, t) => e in n ? nf(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t,
    se = (n, e, t) => (af(n, typeof e != "symbol" ? e + "" : e, t), t);
const of = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, lf = /^-?[0-9]\d*$/, uf = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/, df = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, cf = n => {
    let e = n;
    return typeof n == "string" && (e = n.trim()), !e
}, hf = n => of.test(n), ff = (n, e) => n.length > e, pf = (n, e) => n.length < e, mf = n => typeof n != "string" ? !1 : !isNaN(+n) && !isNaN(parseFloat(n)), gf = n => lf.test(n), _f = n => uf.test(n), vf = n => df.test(n), bf = (n, e) => n > e, wf = (n, e) => n < e, pi = n => typeof n != "string" || n === "";
var W = (n => (n.Required = "required", n.Email = "email", n.MinLength = "minLength", n.MaxLength = "maxLength", n.Password = "password", n.Number = "number", n.Integer = "integer", n.MaxNumber = "maxNumber", n.MinNumber = "minNumber", n.StrongPassword = "strongPassword", n.CustomRegexp = "customRegexp", n.MinFilesCount = "minFilesCount", n.MaxFilesCount = "maxFilesCount", n.Files = "files", n))(W || {}),
    La = (n => (n.Required = "required", n))(La || {}),
    Ru = (n => (n.Label = "label", n.LabelArrow = "labelArrow", n))(Ru || {});
const tl = [{
        key: W.Required,
        dict: {
            en: "The field is required"
        }
    }, {
        key: W.Email,
        dict: {
            en: "Email has invalid format"
        }
    }, {
        key: W.MaxLength,
        dict: {
            en: "The field must contain a maximum of :value characters"
        }
    }, {
        key: W.MinLength,
        dict: {
            en: "The field must contain a minimum of :value characters"
        }
    }, {
        key: W.Password,
        dict: {
            en: "Password must contain minimum eight characters, at least one letter and one number"
        }
    }, {
        key: W.StrongPassword,
        dict: {
            en: "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        }
    }, {
        key: W.Number,
        dict: {
            en: "Value should be a number"
        }
    }, {
        key: W.MaxNumber,
        dict: {
            en: "Number should be less or equal than :value"
        }
    }, {
        key: W.MinNumber,
        dict: {
            en: "Number should be more or equal than :value"
        }
    }, {
        key: W.MinFilesCount,
        dict: {
            en: "Files count should be more or equal than :value"
        }
    }, {
        key: W.MaxFilesCount,
        dict: {
            en: "Files count should be less or equal than :value"
        }
    }, {
        key: W.Files,
        dict: {
            en: "Uploaded files have one or several invalid properties (extension/size/type etc)."
        }
    }],
    yf = "Value is incorrect",
    ir = n => typeof n == "object" && n !== null && "then" in n && typeof n.then == "function",
    Sf = n => {
        let e = n;
        const t = [];
        for (; e;) t.unshift(e), e = e.parentNode;
        return t
    },
    xf = (n, e) => {
        const t = [...e].reverse();
        for (let i = 0, s = t.length; i < s; ++i) {
            const r = t[i];
            for (const a in n) {
                const o = n[a];
                if (o.groupElem === r) return [a, o]
            }
        }
        return null
    },
    ti = n => Array.isArray(n) ? n.filter(e => e.length > 0) : typeof n == "string" && n.trim() ? [...n.split(" ").filter(e => e.length > 0)] : [],
    sr = n => n instanceof Element || n instanceof HTMLDocument,
    Tf = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",
    Wr = 5,
    ra = {
        errorFieldStyle: {
            color: "#b81111",
            border: "1px solid #B81111"
        },
        errorFieldCssClass: "just-validate-error-field",
        successFieldCssClass: "just-validate-success-field",
        errorLabelStyle: {
            color: "#b81111"
        },
        errorLabelCssClass: "just-validate-error-label",
        successLabelCssClass: "just-validate-success-label",
        focusInvalidField: !0,
        lockForm: !0,
        testingMode: !1,
        validateBeforeSubmitting: !1,
        submitFormAutomatically: !1
    };
class Ef {
    constructor(e, t, i) {
        se(this, "form", null), se(this, "fields", {}), se(this, "groupFields", {}), se(this, "errors", {}), se(this, "isValid", !1), se(this, "isSubmitted", !1), se(this, "globalConfig", ra), se(this, "errorLabels", {}), se(this, "successLabels", {}), se(this, "eventListeners", []), se(this, "dictLocale", tl), se(this, "currentLocale", "en"), se(this, "customStyleTags", {}), se(this, "onSuccessCallback"), se(this, "onFailCallback"), se(this, "onValidateCallback"), se(this, "tooltips", []), se(this, "lastScrollPosition"), se(this, "isScrollTick"), se(this, "fieldIds", new Map), se(this, "getKeyByFieldSelector", s => this.fieldIds.get(s)), se(this, "getFieldSelectorByKey", s => {
            for (const [r, a] of this.fieldIds)
                if (s === a) return r
        }), se(this, "getCompatibleFields", () => {
            const s = {};
            return Object.keys(this.fields).forEach(r => {
                let a = r;
                const o = this.getFieldSelectorByKey(r);
                typeof o == "string" && (a = o), s[a] = {
                    ...this.fields[r]
                }
            }), s
        }), se(this, "setKeyByFieldSelector", s => {
            if (this.fieldIds.has(s)) return this.fieldIds.get(s);
            const r = String(this.fieldIds.size + 1);
            return this.fieldIds.set(s, r), r
        }), se(this, "refreshAllTooltips", () => {
            this.tooltips.forEach(s => {
                s.refresh()
            })
        }), se(this, "handleDocumentScroll", () => {
            this.lastScrollPosition = window.scrollY, this.isScrollTick || (window.requestAnimationFrame(() => {
                this.refreshAllTooltips(), this.isScrollTick = !1
            }), this.isScrollTick = !0)
        }), se(this, "formSubmitHandler", s => {
            s.preventDefault(), this.isSubmitted = !0, this.validateHandler(s)
        }), se(this, "handleFieldChange", s => {
            let r;
            for (const a in this.fields)
                if (this.fields[a].elem === s) {
                    r = a;
                    break
                } r && (this.fields[r].touched = !0, this.validateField(r, !0))
        }), se(this, "handleGroupChange", s => {
            let r;
            for (const a in this.groupFields)
                if (this.groupFields[a].elems.find(l => l === s)) {
                    r = a;
                    break
                } r && (this.groupFields[r].touched = !0, this.validateGroup(r, !0))
        }), se(this, "handlerChange", s => {
            s.target && (this.handleFieldChange(s.target), this.handleGroupChange(s.target), this.renderErrors())
        }), this.initialize(e, t, i)
    }
    initialize(e, t, i) {
        if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = ra, this.errorLabels = {}, this.successLabels = {}, this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], this.currentLocale = "en", typeof e == "string") {
            const s = document.querySelector(e);
            if (!s) throw Error(`Form with ${e} selector not found! Please check the form selector`);
            this.setForm(s)
        } else if (e instanceof HTMLFormElement) this.setForm(e);
        else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");
        if (this.globalConfig = {
                ...ra,
                ...t
            }, i && (this.dictLocale = [...i, ...tl]), this.isTooltip()) {
            const s = document.createElement("style");
            s.textContent = Tf, this.customStyleTags[Ru.Label] = document.head.appendChild(s), this.addListener("scroll", document, this.handleDocumentScroll)
        }
    }
    getLocalisedString(e, t, i) {
        var s;
        const r = i ?? e;
        let a = (s = this.dictLocale.find(o => o.key === r)) == null ? void 0 : s.dict[this.currentLocale];
        if (a || i && (a = i), a && t !== void 0) switch (e) {
            case W.MaxLength:
            case W.MinLength:
            case W.MaxNumber:
            case W.MinNumber:
            case W.MinFilesCount:
            case W.MaxFilesCount:
                a = a.replace(":value", String(t))
        }
        return a || i || yf
    }
    getFieldErrorMessage(e, t) {
        const i = typeof e.errorMessage == "function" ? e.errorMessage(this.getElemValue(t), this.fields) : e.errorMessage;
        return this.getLocalisedString(e.rule, e.value, i)
    }
    getFieldSuccessMessage(e, t) {
        const i = typeof e == "function" ? e(this.getElemValue(t), this.fields) : e;
        return this.getLocalisedString(void 0, void 0, i)
    }
    getGroupErrorMessage(e) {
        return this.getLocalisedString(e.rule, void 0, e.errorMessage)
    }
    getGroupSuccessMessage(e) {
        if (e.successMessage) return this.getLocalisedString(void 0, void 0, e.successMessage)
    }
    setFieldInvalid(e, t) {
        this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(t, this.fields[e].elem)
    }
    setFieldValid(e, t) {
        this.fields[e].isValid = !0, t !== void 0 && (this.fields[e].successMessage = this.getFieldSuccessMessage(t, this.fields[e].elem))
    }
    setGroupInvalid(e, t) {
        this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(t)
    }
    setGroupValid(e, t) {
        this.groupFields[e].isValid = !0, this.groupFields[e].successMessage = this.getGroupSuccessMessage(t)
    }
    getElemValue(e) {
        switch (e.type) {
            case "checkbox":
                return e.checked;
            case "file":
                return e.files;
            default:
                return e.value
        }
    }
    validateGroupRule(e, t, i) {
        switch (i.rule) {
            case La.Required:
                t.every(s => !s.checked) ? this.setGroupInvalid(e, i) : this.setGroupValid(e, i)
        }
    }
    validateFieldRule(e, t, i, s = !1) {
        const r = i.value,
            a = this.getElemValue(t);
        if (i.plugin) {
            i.plugin(a, this.getCompatibleFields()) || this.setFieldInvalid(e, i);
            return
        }
        switch (i.rule) {
            case W.Required: {
                cf(a) && this.setFieldInvalid(e, i);
                break
            }
            case W.Email: {
                if (pi(a)) break;
                hf(a) || this.setFieldInvalid(e, i);
                break
            }
            case W.MaxLength: {
                if (r === void 0) {
                    console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (typeof r != "number") {
                    console.error(`Value for ${i.rule} rule for [${e}] should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (pi(a)) break;
                ff(a, r) && this.setFieldInvalid(e, i);
                break
            }
            case W.MinLength: {
                if (r === void 0) {
                    console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (typeof r != "number") {
                    console.error(`Value for ${i.rule} rule for [${e}] should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (pi(a)) break;
                pf(a, r) && this.setFieldInvalid(e, i);
                break
            }
            case W.Password: {
                if (pi(a)) break;
                _f(a) || this.setFieldInvalid(e, i);
                break
            }
            case W.StrongPassword: {
                if (pi(a)) break;
                vf(a) || this.setFieldInvalid(e, i);
                break
            }
            case W.Number: {
                if (pi(a)) break;
                mf(a) || this.setFieldInvalid(e, i);
                break
            }
            case W.Integer: {
                if (pi(a)) break;
                gf(a) || this.setFieldInvalid(e, i);
                break
            }
            case W.MaxNumber: {
                if (r === void 0) {
                    console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (typeof r != "number") {
                    console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (pi(a)) break;
                const o = +a;
                (Number.isNaN(o) || bf(o, r)) && this.setFieldInvalid(e, i);
                break
            }
            case W.MinNumber: {
                if (r === void 0) {
                    console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (typeof r != "number") {
                    console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (pi(a)) break;
                const o = +a;
                (Number.isNaN(o) || wf(o, r)) && this.setFieldInvalid(e, i);
                break
            }
            case W.CustomRegexp: {
                if (r === void 0) {
                    console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, i);
                    return
                }
                let o;
                try {
                    o = new RegExp(r)
                } catch {
                    console.error(`Value for ${i.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                const l = String(a);
                l !== "" && !o.test(l) && this.setFieldInvalid(e, i);
                break
            }
            case W.MinFilesCount: {
                if (r === void 0) {
                    console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (typeof r != "number") {
                    console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (Number.isFinite(a == null ? void 0 : a.length) && a.length < r) {
                    this.setFieldInvalid(e, i);
                    break
                }
                break
            }
            case W.MaxFilesCount: {
                if (r === void 0) {
                    console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (typeof r != "number") {
                    console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, i);
                    break
                }
                if (Number.isFinite(a == null ? void 0 : a.length) && a.length > r) {
                    this.setFieldInvalid(e, i);
                    break
                }
                break
            }
            case W.Files: {
                if (r === void 0) {
                    console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, i);
                    return
                }
                if (typeof r != "object") {
                    console.error(`Value for ${i.rule} rule for [${e}] field should be an object. This field will be always invalid.`), this.setFieldInvalid(e, i);
                    return
                }
                const o = r.files;
                if (typeof o != "object") {
                    console.error(`Value for ${i.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`), this.setFieldInvalid(e, i);
                    return
                }
                const l = (u, d) => {
                    const c = Number.isFinite(d.minSize) && u.size < d.minSize,
                        f = Number.isFinite(d.maxSize) && u.size > d.maxSize,
                        h = Array.isArray(d.names) && !d.names.includes(u.name),
                        _ = Array.isArray(d.extensions) && !d.extensions.includes(u.name.split(".")[u.name.split(".").length - 1]),
                        p = Array.isArray(d.types) && !d.types.includes(u.type);
                    return c || f || h || _ || p
                };
                if (typeof a == "object" && a !== null)
                    for (let u = 0, d = a.length; u < d; ++u) {
                        const c = a.item(u);
                        if (!c) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                        if (l(c, o)) {
                            this.setFieldInvalid(e, i);
                            break
                        }
                    }
                break
            }
            default: {
                if (typeof i.validator != "function") {
                    console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`), this.setFieldInvalid(e, i);
                    return
                }
                const o = i.validator(a, this.getCompatibleFields());
                if (typeof o != "boolean" && typeof o != "function" && console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`), typeof o == "function")
                    if (s) this.fields[e].asyncCheckPending = !0;
                    else {
                        this.fields[e].asyncCheckPending = !1;
                        const l = o();
                        if (!ir(l)) {
                            console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`), this.setFieldInvalid(e, i);
                            return
                        }
                        return l.then(u => {
                            u || this.setFieldInvalid(e, i)
                        }).catch(() => {
                            this.setFieldInvalid(e, i)
                        })
                    } o || this.setFieldInvalid(e, i)
            }
        }
    }
    isFormValid() {
        let e = !0;
        for (let t = 0, i = Object.values(this.fields).length; t < i; ++t) {
            const s = Object.values(this.fields)[t];
            if (s.isValid === void 0) {
                e = void 0;
                break
            }
            if (s.isValid === !1) {
                e = !1;
                break
            }
        }
        for (let t = 0, i = Object.values(this.groupFields).length; t < i; ++t) {
            const s = Object.values(this.groupFields)[t];
            if (s.isValid === void 0) {
                e = void 0;
                break
            }
            if (s.isValid === !1) {
                e = !1;
                break
            }
        }
        return e
    }
    validateField(e, t = !1) {
        var i;
        const s = this.fields[e];
        s.isValid = !0;
        const r = [];
        return [...s.rules].reverse().forEach(a => {
            const o = this.validateFieldRule(e, s.elem, a, t);
            ir(o) && r.push(o)
        }), s.isValid && this.setFieldValid(e, (i = s.config) == null ? void 0 : i.successMessage), Promise.allSettled(r).finally(() => {
            var a;
            t && ((a = this.onValidateCallback) == null || a.call(this, {
                isValid: this.isFormValid(),
                isSubmitted: this.isSubmitted,
                fields: this.getCompatibleFields(),
                groups: {
                    ...this.groupFields
                }
            }))
        })
    }
    revalidateField(e) {
        if (typeof e != "string" && !sr(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
        const t = this.getKeyByFieldSelector(e);
        return !t || !this.fields[t] ? (console.error("Field not found. Check the field selector."), Promise.reject()) : new Promise(i => {
            this.validateField(t, !0).finally(() => {
                this.clearFieldStyle(t), this.clearFieldLabel(t), this.renderFieldError(t, !0), i(!!this.fields[t].isValid)
            })
        })
    }
    revalidateGroup(e) {
        if (typeof e != "string" && !sr(e)) throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");
        const t = this.getKeyByFieldSelector(e);
        return !t || !this.groupFields[t] ? (console.error("Group not found. Check the group selector."), Promise.reject()) : new Promise(i => {
            this.validateGroup(t).finally(() => {
                this.clearFieldLabel(t), this.renderGroupError(t, !0), i(!!this.groupFields[t].isValid)
            })
        })
    }
    validateGroup(e, t = !1) {
        const i = this.groupFields[e],
            s = [];
        return [...i.rules].reverse().forEach(r => {
            const a = this.validateGroupRule(e, i.elems, r);
            ir(a) && s.push(a)
        }), Promise.allSettled(s).finally(() => {
            var r;
            t && ((r = this.onValidateCallback) == null || r.call(this, {
                isValid: this.isFormValid(),
                isSubmitted: this.isSubmitted,
                fields: this.getCompatibleFields(),
                groups: {
                    ...this.groupFields
                }
            }))
        })
    }
    focusInvalidField() {
        for (const e in this.fields) {
            const t = this.fields[e];
            if (!t.isValid) {
                setTimeout(() => t.elem.focus(), 0);
                break
            }
        }
    }
    afterSubmitValidation(e = !1) {
        this.renderErrors(e), this.globalConfig.focusInvalidField && this.focusInvalidField()
    }
    validate(e = !1) {
        return new Promise(t => {
            const i = [];
            Object.keys(this.fields).forEach(s => {
                const r = this.validateField(s);
                ir(r) && i.push(r)
            }), Object.keys(this.groupFields).forEach(s => {
                const r = this.validateGroup(s);
                ir(r) && i.push(r)
            }), Promise.allSettled(i).then(() => {
                var s;
                this.afterSubmitValidation(e), (s = this.onValidateCallback) == null || s.call(this, {
                    isValid: this.isFormValid(),
                    isSubmitted: this.isSubmitted,
                    fields: this.getCompatibleFields(),
                    groups: {
                        ...this.groupFields
                    }
                }), t(!!i.length)
            })
        })
    }
    revalidate() {
        return new Promise(e => {
            this.validateHandler(void 0, !0).finally(() => {
                this.globalConfig.focusInvalidField && this.focusInvalidField(), e(this.isValid)
            })
        })
    }
    validateHandler(e, t = !1) {
        return this.globalConfig.lockForm && this.lockForm(), this.validate(t).finally(() => {
            var i, s, r;
            this.globalConfig.lockForm && this.unlockForm(), this.isValid ? ((i = this.onSuccessCallback) == null || i.call(this, e), this.globalConfig.submitFormAutomatically && ((s = e == null ? void 0 : e.currentTarget) == null || s.submit())) : (r = this.onFailCallback) == null || r.call(this, this.getCompatibleFields(), this.groupFields)
        })
    }
    setForm(e) {
        this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler)
    }
    addListener(e, t, i) {
        t.addEventListener(e, i), this.eventListeners.push({
            type: e,
            elem: t,
            func: i
        })
    }
    removeListener(e, t, i) {
        t.removeEventListener(e, i), this.eventListeners = this.eventListeners.filter(s => s.type !== e || s.elem !== t)
    }
    addField(e, t, i) {
        if (typeof e != "string" && !sr(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
        let s;
        if (typeof e == "string" ? s = this.form.querySelector(e) : s = e, !s) throw Error("Field doesn't exist in the DOM! Please check the field selector.");
        if (!Array.isArray(t) || !t.length) throw Error("Rules argument should be an array and should contain at least 1 element.");
        t.forEach(a => {
            if (!("rule" in a || "validator" in a || "plugin" in a)) throw Error("Rules argument must contain at least one rule or validator property.");
            if (!a.validator && !a.plugin && (!a.rule || !Object.values(W).includes(a.rule))) throw Error(`Rule should be one of these types: ${Object.values(W).join(", ")}. Provided value: ${a.rule}`)
        });
        const r = this.setKeyByFieldSelector(e);
        return this.fields[r] = {
            elem: s,
            rules: t,
            isValid: void 0,
            touched: !1,
            config: i
        }, this.setListeners(s), (this.isSubmitted || this.globalConfig.validateBeforeSubmitting) && this.validateField(r), this
    }
    removeField(e) {
        if (typeof e != "string" && !sr(e)) throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");
        const t = this.getKeyByFieldSelector(e);
        if (!t || !this.fields[t]) return console.error("Field not found. Check the field selector."), this;
        const i = this.getListenerType(this.fields[t].elem.type);
        return this.removeListener(i, this.fields[t].elem, this.handlerChange), this.clearErrors(), delete this.fields[t], this
    }
    removeGroup(e) {
        if (typeof e != "string") throw Error("Group selector is not valid. Please specify a string selector.");
        const t = this.getKeyByFieldSelector(e);
        return !t || !this.groupFields[t] ? (console.error("Group not found. Check the group selector."), this) : (this.groupFields[t].elems.forEach(i => {
            const s = this.getListenerType(i.type);
            this.removeListener(s, i, this.handlerChange)
        }), this.clearErrors(), delete this.groupFields[t], this)
    }
    addRequiredGroup(e, t, i, s) {
        if (typeof e != "string" && !sr(e)) throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");
        let r;
        if (typeof e == "string" ? r = this.form.querySelector(e) : r = e, !r) throw Error("Group selector not found! Please check the group selector.");
        const a = r.querySelectorAll("input"),
            o = Array.from(a).filter(u => {
                const d = xf(this.groupFields, Sf(u));
                return d ? d[1].elems.find(c => c !== u) : !0
            }),
            l = this.setKeyByFieldSelector(e);
        return this.groupFields[l] = {
            rules: [{
                rule: La.Required,
                errorMessage: t,
                successMessage: s
            }],
            groupElem: r,
            elems: o,
            touched: !1,
            isValid: void 0,
            config: i
        }, a.forEach(u => {
            this.setListeners(u)
        }), this
    }
    getListenerType(e) {
        switch (e) {
            case "checkbox":
            case "select-one":
            case "file":
            case "radio":
                return "change";
            default:
                return "input"
        }
    }
    setListeners(e) {
        const t = this.getListenerType(e.type);
        this.removeListener(t, e, this.handlerChange), this.addListener(t, e, this.handlerChange)
    }
    clearFieldLabel(e) {
        var t, i;
        (t = this.errorLabels[e]) == null || t.remove(), (i = this.successLabels[e]) == null || i.remove()
    }
    clearFieldStyle(e) {
        var t, i, s, r;
        const a = this.fields[e],
            o = ((t = a.config) == null ? void 0 : t.errorFieldStyle) || this.globalConfig.errorFieldStyle;
        Object.keys(o).forEach(u => {
            a.elem.style[u] = ""
        });
        const l = ((i = a.config) == null ? void 0 : i.successFieldStyle) || this.globalConfig.successFieldStyle || {};
        Object.keys(l).forEach(u => {
            a.elem.style[u] = ""
        }), a.elem.classList.remove(...ti(((s = a.config) == null ? void 0 : s.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...ti(((r = a.config) == null ? void 0 : r.successFieldCssClass) || this.globalConfig.successFieldCssClass))
    }
    clearErrors() {
        var e, t;
        Object.keys(this.errorLabels).forEach(i => this.errorLabels[i].remove()), Object.keys(this.successLabels).forEach(i => this.successLabels[i].remove());
        for (const i in this.fields) this.clearFieldStyle(i);
        for (const i in this.groupFields) {
            const s = this.groupFields[i],
                r = ((e = s.config) == null ? void 0 : e.errorFieldStyle) || this.globalConfig.errorFieldStyle;
            Object.keys(r).forEach(o => {
                s.elems.forEach(l => {
                    var u;
                    l.style[o] = "", l.classList.remove(...ti(((u = s.config) == null ? void 0 : u.errorFieldCssClass) || this.globalConfig.errorFieldCssClass))
                })
            });
            const a = ((t = s.config) == null ? void 0 : t.successFieldStyle) || this.globalConfig.successFieldStyle || {};
            Object.keys(a).forEach(o => {
                s.elems.forEach(l => {
                    var u;
                    l.style[o] = "", l.classList.remove(...ti(((u = s.config) == null ? void 0 : u.successFieldCssClass) || this.globalConfig.successFieldCssClass))
                })
            })
        }
        this.tooltips = []
    }
    isTooltip() {
        return !!this.globalConfig.tooltip
    }
    lockForm() {
        const e = this.form.querySelectorAll("input, textarea, button, select");
        for (let t = 0, i = e.length; t < i; ++t) e[t].setAttribute("data-just-validate-fallback-disabled", e[t].disabled ? "true" : "false"), e[t].setAttribute("disabled", "disabled"), e[t].style.pointerEvents = "none", e[t].style.webkitFilter = "grayscale(100%)", e[t].style.filter = "grayscale(100%)"
    }
    unlockForm() {
        const e = this.form.querySelectorAll("input, textarea, button, select");
        for (let t = 0, i = e.length; t < i; ++t) e[t].getAttribute("data-just-validate-fallback-disabled") !== "true" && e[t].removeAttribute("disabled"), e[t].style.pointerEvents = "", e[t].style.webkitFilter = "", e[t].style.filter = ""
    }
    renderTooltip(e, t, i) {
        var s;
        const {
            top: r,
            left: a,
            width: o,
            height: l
        } = e.getBoundingClientRect(), u = t.getBoundingClientRect(), d = i || ((s = this.globalConfig.tooltip) == null ? void 0 : s.position);
        switch (d) {
            case "left": {
                t.style.top = `${r+l/2-u.height/2}px`, t.style.left = `${a-u.width-Wr}px`;
                break
            }
            case "top": {
                t.style.top = `${r-u.height-Wr}px`, t.style.left = `${a+o/2-u.width/2}px`;
                break
            }
            case "right": {
                t.style.top = `${r+l/2-u.height/2}px`, t.style.left = `${a+o+Wr}px`;
                break
            }
            case "bottom": {
                t.style.top = `${r+l+Wr}px`, t.style.left = `${a+o/2-u.width/2}px`;
                break
            }
        }
        return t.dataset.direction = d, {
            refresh: () => {
                this.renderTooltip(e, t, i)
            }
        }
    }
    createErrorLabelElem(e, t, i) {
        const s = document.createElement("div");
        s.innerHTML = t;
        const r = this.isTooltip() ? i == null ? void 0 : i.errorLabelStyle : (i == null ? void 0 : i.errorLabelStyle) || this.globalConfig.errorLabelStyle;
        return Object.assign(s.style, r), s.classList.add(...ti((i == null ? void 0 : i.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label"), this.isTooltip() && (s.dataset.tooltip = "true"), this.globalConfig.testingMode && (s.dataset.testId = `error-label-${e}`), this.errorLabels[e] = s, s
    }
    createSuccessLabelElem(e, t, i) {
        if (t === void 0) return null;
        const s = document.createElement("div");
        s.innerHTML = t;
        const r = (i == null ? void 0 : i.successLabelStyle) || this.globalConfig.successLabelStyle;
        return Object.assign(s.style, r), s.classList.add(...ti((i == null ? void 0 : i.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label"), this.globalConfig.testingMode && (s.dataset.testId = `success-label-${e}`), this.successLabels[e] = s, s
    }
    renderErrorsContainer(e, t) {
        const i = t || this.globalConfig.errorsContainer;
        if (typeof i == "string") {
            const s = this.form.querySelector(i);
            if (s) return s.appendChild(e), !0;
            console.error(`Error container with ${i} selector not found. Errors will be rendered as usual`)
        }
        return i instanceof Element ? (i.appendChild(e), !0) : (i !== void 0 && console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"), !1)
    }
    renderGroupLabel(e, t, i, s) {
        !s && this.renderErrorsContainer(t, i) || e.appendChild(t)
    }
    renderFieldLabel(e, t, i, s) {
        var r, a, o, l, u, d, c;
        if (!(!s && this.renderErrorsContainer(t, i)))
            if (e.type === "checkbox" || e.type === "radio") {
                const f = document.querySelector(`label[for="${e.getAttribute("id")}"]`);
                ((a = (r = e.parentElement) == null ? void 0 : r.tagName) == null ? void 0 : a.toLowerCase()) === "label" ? (l = (o = e.parentElement) == null ? void 0 : o.parentElement) == null || l.appendChild(t): f ? (u = f.parentElement) == null || u.appendChild(t) : (d = e.parentElement) == null || d.appendChild(t)
            } else(c = e.parentElement) == null || c.appendChild(t)
    }
    showLabels(e, t) {
        Object.keys(e).forEach((i, s) => {
            const r = e[i],
                a = this.getKeyByFieldSelector(i);
            if (!a || !this.fields[a]) {
                console.error("Field not found. Check the field selector.");
                return
            }
            const o = this.fields[a];
            o.isValid = !t, this.clearFieldStyle(a), this.clearFieldLabel(a), this.renderFieldError(a, !1, r), s === 0 && this.globalConfig.focusInvalidField && setTimeout(() => o.elem.focus(), 0)
        })
    }
    showErrors(e) {
        if (typeof e != "object") throw Error("[showErrors]: Errors should be an object with key: value format");
        this.showLabels(e, !0)
    }
    showSuccessLabels(e) {
        if (typeof e != "object") throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
        this.showLabels(e, !1)
    }
    renderFieldError(e, t = !1, i) {
        var s, r, a, o, l, u;
        const d = this.fields[e];
        if (d.isValid === !1 && (this.isValid = !1), d.isValid === void 0 || !t && !this.isSubmitted && !d.touched && i === void 0) return;
        if (d.isValid) {
            if (!d.asyncCheckPending) {
                const f = this.createSuccessLabelElem(e, i !== void 0 ? i : d.successMessage, d.config);
                f && this.renderFieldLabel(d.elem, f, (s = d.config) == null ? void 0 : s.errorsContainer, !0), d.elem.classList.add(...ti(((r = d.config) == null ? void 0 : r.successFieldCssClass) || this.globalConfig.successFieldCssClass))
            }
            return
        }
        d.elem.classList.add(...ti(((a = d.config) == null ? void 0 : a.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
        const c = this.createErrorLabelElem(e, i !== void 0 ? i : d.errorMessage, d.config);
        this.renderFieldLabel(d.elem, c, (o = d.config) == null ? void 0 : o.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(d.elem, c, (u = (l = d.config) == null ? void 0 : l.tooltip) == null ? void 0 : u.position))
    }
    renderGroupError(e, t = !0) {
        var i, s, r, a;
        const o = this.groupFields[e];
        if (o.isValid === !1 && (this.isValid = !1), o.isValid === void 0 || !t && !this.isSubmitted && !o.touched) return;
        if (o.isValid) {
            o.elems.forEach(d => {
                var c, f;
                Object.assign(d.style, ((c = o.config) == null ? void 0 : c.successFieldStyle) || this.globalConfig.successFieldStyle), d.classList.add(...ti(((f = o.config) == null ? void 0 : f.successFieldCssClass) || this.globalConfig.successFieldCssClass))
            });
            const u = this.createSuccessLabelElem(e, o.successMessage, o.config);
            u && this.renderGroupLabel(o.groupElem, u, (i = o.config) == null ? void 0 : i.errorsContainer, !0);
            return
        }
        this.isValid = !1, o.elems.forEach(u => {
            var d, c;
            Object.assign(u.style, ((d = o.config) == null ? void 0 : d.errorFieldStyle) || this.globalConfig.errorFieldStyle), u.classList.add(...ti(((c = o.config) == null ? void 0 : c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass))
        });
        const l = this.createErrorLabelElem(e, o.errorMessage, o.config);
        this.renderGroupLabel(o.groupElem, l, (s = o.config) == null ? void 0 : s.errorsContainer), this.isTooltip() && this.tooltips.push(this.renderTooltip(o.groupElem, l, (a = (r = o.config) == null ? void 0 : r.tooltip) == null ? void 0 : a.position))
    }
    renderErrors(e = !1) {
        if (!(!this.isSubmitted && !e && !this.globalConfig.validateBeforeSubmitting)) {
            this.clearErrors(), this.isValid = !0;
            for (const t in this.groupFields) this.renderGroupError(t);
            for (const t in this.fields) this.renderFieldError(t)
        }
    }
    destroy() {
        this.eventListeners.forEach(e => {
            this.removeListener(e.type, e.elem, e.func)
        }), Object.keys(this.customStyleTags).forEach(e => {
            this.customStyleTags[e].remove()
        }), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm()
    }
    refresh() {
        this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach(e => {
            const t = this.getFieldSelectorByKey(e);
            t && this.addField(t, [...this.fields[e].rules], this.fields[e].config)
        })) : console.error("Cannot initialize the library! Form is not defined")
    }
    setCurrentLocale(e) {
        if (typeof e != "string" && e !== void 0) {
            console.error("Current locale should be a string");
            return
        }
        this.currentLocale = e, this.isSubmitted && this.validate()
    }
    onSuccess(e) {
        return this.onSuccessCallback = e, this
    }
    onFail(e) {
        return this.onFailCallback = e, this
    }
    onValidate(e) {
        return this.onValidateCallback = e, this
    }
}

function Ni(n) {
    return typeof n == "string" || n instanceof String
}

function il(n) {
    var e;
    return typeof n == "object" && n != null && ((e = n == null ? void 0 : n.constructor) == null ? void 0 : e.name) === "Object"
}

function zu(n, e) {
    return Array.isArray(e) ? zu(n, (t, i) => e.includes(i)) : Object.entries(n).reduce((t, i) => {
        let [s, r] = i;
        return e(r, s) && (t[s] = r), t
    }, {})
}
const V = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
};

function kf(n) {
    switch (n) {
        case V.LEFT:
            return V.FORCE_LEFT;
        case V.RIGHT:
            return V.FORCE_RIGHT;
        default:
            return n
    }
}

function na(n) {
    return n.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
}

function En(n, e) {
    if (e === n) return !0;
    const t = Array.isArray(e),
        i = Array.isArray(n);
    let s;
    if (t && i) {
        if (e.length != n.length) return !1;
        for (s = 0; s < e.length; s++)
            if (!En(e[s], n[s])) return !1;
        return !0
    }
    if (t != i) return !1;
    if (e && n && typeof e == "object" && typeof n == "object") {
        const r = e instanceof Date,
            a = n instanceof Date;
        if (r && a) return e.getTime() == n.getTime();
        if (r != a) return !1;
        const o = e instanceof RegExp,
            l = n instanceof RegExp;
        if (o && l) return e.toString() == n.toString();
        if (o != l) return !1;
        const u = Object.keys(e);
        for (s = 0; s < u.length; s++)
            if (!Object.prototype.hasOwnProperty.call(n, u[s])) return !1;
        for (s = 0; s < u.length; s++)
            if (!En(n[u[s]], e[u[s]])) return !1;
        return !0
    } else if (e && n && typeof e == "function" && typeof n == "function") return e.toString() === n.toString();
    return !1
}
class Cf {
    constructor(e) {
        for (Object.assign(this, e); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start;
        for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end);) this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos
    }
    get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start)
    }
    get insertedCount() {
        return this.cursorPos - this.startChangePos
    }
    get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount)
    }
    get removedCount() {
        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
    }
    get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount)
    }
    get head() {
        return this.value.substring(0, this.startChangePos)
    }
    get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount)
    }
    get removeDirection() {
        return !this.removedCount || this.insertedCount ? V.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? V.RIGHT : V.LEFT
    }
}

function G(n, e) {
    return new G.InputMask(n, e)
}

function Nu(n) {
    if (n == null) throw new Error("mask property should be defined");
    return n instanceof RegExp ? G.MaskedRegExp : Ni(n) ? G.MaskedPattern : n === Date ? G.MaskedDate : n === Number ? G.MaskedNumber : Array.isArray(n) || n === Array ? G.MaskedDynamic : G.Masked && n.prototype instanceof G.Masked ? n : G.Masked && n instanceof G.Masked ? n.constructor : n instanceof Function ? G.MaskedFunction : (console.warn("Mask not found for mask", n), G.Masked)
}

function Ar(n) {
    if (!n) throw new Error("Options in not defined");
    if (G.Masked) {
        if (n.prototype instanceof G.Masked) return {
            mask: n
        };
        const {
            mask: e = void 0,
            ...t
        } = n instanceof G.Masked ? {
            mask: n
        } : il(n) && n.mask instanceof G.Masked ? n : {};
        if (e) {
            const i = e.mask;
            return {
                ...zu(e, (s, r) => !r.startsWith("_")),
                mask: e.constructor,
                _mask: i,
                ...t
            }
        }
    }
    return il(n) ? {
        ...n
    } : {
        mask: n
    }
}

function Ei(n) {
    if (G.Masked && n instanceof G.Masked) return n;
    const e = Ar(n),
        t = Nu(e.mask);
    if (!t) throw new Error(`Masked class is not found for provided mask ${e.mask}, appropriate module needs to be imported manually before creating mask.`);
    return e.mask === t && delete e.mask, e._mask && (e.mask = e._mask, delete e._mask), new t(e)
}
G.createMask = Ei;
class co {
    get selectionStart() {
        let e;
        try {
            e = this._unsafeSelectionStart
        } catch {}
        return e ?? this.value.length
    }
    get selectionEnd() {
        let e;
        try {
            e = this._unsafeSelectionEnd
        } catch {}
        return e ?? this.value.length
    }
    select(e, t) {
        if (!(e == null || t == null || e === this.selectionStart && t === this.selectionEnd)) try {
            this._unsafeSelect(e, t)
        } catch {}
    }
    get isActive() {
        return !1
    }
}
G.MaskElement = co;
const sl = 90,
    Mf = 89;
class Ln extends co {
    constructor(e) {
        super(), this.input = e, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this)
    }
    get rootElement() {
        var e, t;
        return ((t = (e = this.input).getRootNode) == null ? void 0 : t.call(e)) ?? document
    }
    get isActive() {
        return this.input === this.rootElement.activeElement
    }
    bindEvents(e) {
        this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", e.drop), this.input.addEventListener("click", e.click), this.input.addEventListener("focus", e.focus), this.input.addEventListener("blur", e.commit), this._handlers = e
    }
    _onKeydown(e) {
        if (this._handlers.redo && (e.keyCode === sl && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === Mf && e.ctrlKey)) return e.preventDefault(), this._handlers.redo(e);
        if (this._handlers.undo && e.keyCode === sl && (e.metaKey || e.ctrlKey)) return e.preventDefault(), this._handlers.undo(e);
        e.isComposing || this._handlers.selectionChange(e)
    }
    _onBeforeinput(e) {
        if (e.inputType === "historyUndo" && this._handlers.undo) return e.preventDefault(), this._handlers.undo(e);
        if (e.inputType === "historyRedo" && this._handlers.redo) return e.preventDefault(), this._handlers.redo(e)
    }
    _onCompositionEnd(e) {
        this._handlers.input(e)
    }
    _onInput(e) {
        e.isComposing || this._handlers.input(e)
    }
    unbindEvents() {
        this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {}
    }
}
G.HTMLMaskElement = Ln;
class Ff extends Ln {
    constructor(e) {
        super(e), this.input = e
    }
    get _unsafeSelectionStart() {
        return this.input.selectionStart != null ? this.input.selectionStart : this.value.length
    }
    get _unsafeSelectionEnd() {
        return this.input.selectionEnd
    }
    _unsafeSelect(e, t) {
        this.input.setSelectionRange(e, t)
    }
    get value() {
        return this.input.value
    }
    set value(e) {
        this.input.value = e
    }
}
G.HTMLMaskElement = Ln;
class Gu extends Ln {
    get _unsafeSelectionStart() {
        const e = this.rootElement,
            t = e.getSelection && e.getSelection(),
            i = t && t.anchorOffset,
            s = t && t.focusOffset;
        return s == null || i == null || i < s ? i : s
    }
    get _unsafeSelectionEnd() {
        const e = this.rootElement,
            t = e.getSelection && e.getSelection(),
            i = t && t.anchorOffset,
            s = t && t.focusOffset;
        return s == null || i == null || i > s ? i : s
    }
    _unsafeSelect(e, t) {
        if (!this.rootElement.createRange) return;
        const i = this.rootElement.createRange();
        i.setStart(this.input.firstChild || this.input, e), i.setEnd(this.input.lastChild || this.input, t);
        const s = this.rootElement,
            r = s.getSelection && s.getSelection();
        r && (r.removeAllRanges(), r.addRange(i))
    }
    get value() {
        return this.input.textContent || ""
    }
    set value(e) {
        this.input.textContent = e
    }
}
G.HTMLContenteditableMaskElement = Gu;
const Cn = class Cn {
    constructor() {
        Le(this, "states", []);
        Le(this, "currentIndex", 0)
    }
    get currentState() {
        return this.states[this.currentIndex]
    }
    get isEmpty() {
        return this.states.length === 0
    }
    push(e) {
        this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(e), this.states.length > Cn.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1
    }
    go(e) {
        return this.currentIndex = Math.min(Math.max(this.currentIndex + e, 0), this.states.length - 1), this.currentState
    }
    undo() {
        return this.go(-1)
    }
    redo() {
        return this.go(1)
    }
    clear() {
        this.states.length = 0, this.currentIndex = 0
    }
};
Le(Cn, "MAX_LENGTH", 100);
let Oa = Cn;
class Af {
    constructor(e, t) {
        this.el = e instanceof co ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Gu(e) : new Ff(e), this.masked = Ei(t), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Oa, this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
    }
    maskEquals(e) {
        var t;
        return e == null || ((t = this.masked) == null ? void 0 : t.maskEquals(e))
    }
    get mask() {
        return this.masked.mask
    }
    set mask(e) {
        if (this.maskEquals(e)) return;
        if (!(e instanceof G.Masked) && this.masked.constructor === Nu(e)) {
            this.masked.updateOptions({
                mask: e
            });
            return
        }
        const t = e instanceof G.Masked ? e : Ei({
            mask: e
        });
        t.unmaskedValue = this.masked.unmaskedValue, this.masked = t
    }
    get value() {
        return this._value
    }
    set value(e) {
        this.value !== e && (this.masked.value = e, this.updateControl("auto"))
    }
    get unmaskedValue() {
        return this._unmaskedValue
    }
    set unmaskedValue(e) {
        this.unmaskedValue !== e && (this.masked.unmaskedValue = e, this.updateControl("auto"))
    }
    get rawInputValue() {
        return this._rawInputValue
    }
    set rawInputValue(e) {
        this.rawInputValue !== e && (this.masked.rawInputValue = e, this.updateControl(), this.alignCursor())
    }
    get typedValue() {
        return this.masked.typedValue
    }
    set typedValue(e) {
        this.masked.typedValueEquals(e) || (this.masked.typedValue = e, this.updateControl("auto"))
    }
    get displayValue() {
        return this.masked.displayValue
    }
    _bindEvents() {
        this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange,
            undo: this._onUndo,
            redo: this._onRedo
        })
    }
    _unbindEvents() {
        this.el && this.el.unbindEvents()
    }
    _fireEvent(e, t) {
        const i = this._listeners[e];
        i && i.forEach(s => s(t))
    }
    get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
    }
    get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
    }
    set cursorPos(e) {
        !this.el || !this.el.isActive || (this.el.select(e, e), this._saveSelection())
    }
    _saveSelection() {
        this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
        }
    }
    updateValue() {
        this.masked.value = this.el.value, this._value = this.masked.value
    }
    updateControl(e) {
        const t = this.masked.unmaskedValue,
            i = this.masked.value,
            s = this.masked.rawInputValue,
            r = this.displayValue,
            a = this.unmaskedValue !== t || this.value !== i || this._rawInputValue !== s;
        this._unmaskedValue = t, this._value = i, this._rawInputValue = s, this.el.value !== r && (this.el.value = r), e === "auto" ? this.alignCursor() : e != null && (this.cursorPos = e), a && this._fireChangeEvents(), !this._historyChanging && (a || this.history.isEmpty) && this.history.push({
            unmaskedValue: t,
            selection: {
                start: this.selectionStart,
                end: this.cursorPos
            }
        })
    }
    updateOptions(e) {
        const {
            mask: t,
            ...i
        } = e, s = !this.maskEquals(t), r = this.masked.optionsIsChanged(i);
        s && (this.mask = t), r && this.masked.updateOptions(i), (s || r) && this.updateControl()
    }
    updateCursor(e) {
        e != null && (this.cursorPos = e, this._delayUpdateCursor(e))
    }
    _delayUpdateCursor(e) {
        this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout(() => {
            this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor())
        }, 10)
    }
    _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
    }
    _abortUpdateCursor() {
        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
    }
    alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, V.LEFT))
    }
    alignCursorFriendly() {
        this.selectionStart === this.cursorPos && this.alignCursor()
    }
    on(e, t) {
        return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this
    }
    off(e, t) {
        if (!this._listeners[e]) return this;
        if (!t) return delete this._listeners[e], this;
        const i = this._listeners[e].indexOf(t);
        return i >= 0 && this._listeners[e].splice(i, 1), this
    }
    _onInput(e) {
        this._inputEvent = e, this._abortUpdateCursor();
        const t = new Cf({
                value: this.el.value,
                cursorPos: this.cursorPos,
                oldValue: this.displayValue,
                oldSelection: this._selection
            }),
            i = this.masked.rawInputValue,
            s = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, {
                input: !0,
                raw: !0
            }).offset,
            r = i === this.masked.rawInputValue ? t.removeDirection : V.NONE;
        let a = this.masked.nearestInputPos(t.startChangePos + s, r);
        r !== V.NONE && (a = this.masked.nearestInputPos(a, V.NONE)), this.updateControl(a), delete this._inputEvent
    }
    _onChange() {
        this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
    }
    _onDrop(e) {
        e.preventDefault(), e.stopPropagation()
    }
    _onFocus(e) {
        this.alignCursorFriendly()
    }
    _onClick(e) {
        this.alignCursorFriendly()
    }
    _onUndo() {
        this._applyHistoryState(this.history.undo())
    }
    _onRedo() {
        this._applyHistoryState(this.history.redo())
    }
    _applyHistoryState(e) {
        e && (this._historyChanging = !0, this.unmaskedValue = e.unmaskedValue, this.el.select(e.selection.start, e.selection.end), this._saveSelection(), this._historyChanging = !1)
    }
    destroy() {
        this._unbindEvents(), this._listeners.length = 0, delete this.el
    }
}
G.InputMask = Af;
class re {
    static normalize(e) {
        return Array.isArray(e) ? e : [e, new re]
    }
    constructor(e) {
        Object.assign(this, {
            inserted: "",
            rawInserted: "",
            skip: !1,
            tailShift: 0
        }, e)
    }
    aggregate(e) {
        return this.rawInserted += e.rawInserted, this.skip = this.skip || e.skip, this.inserted += e.inserted, this.tailShift += e.tailShift, this
    }
    get offset() {
        return this.tailShift + this.inserted.length
    }
}
G.ChangeDetails = re;
class yi {
    constructor(e, t, i) {
        e === void 0 && (e = ""), t === void 0 && (t = 0), this.value = e, this.from = t, this.stop = i
    }
    toString() {
        return this.value
    }
    extend(e) {
        this.value += String(e)
    }
    appendTo(e) {
        return e.append(this.toString(), {
            tail: !0
        }).aggregate(e._appendPlaceholder())
    }
    get state() {
        return {
            value: this.value,
            from: this.from,
            stop: this.stop
        }
    }
    set state(e) {
        Object.assign(this, e)
    }
    unshift(e) {
        if (!this.value.length || e != null && this.from >= e) return "";
        const t = this.value[0];
        return this.value = this.value.slice(1), t
    }
    shift() {
        if (!this.value.length) return "";
        const e = this.value[this.value.length - 1];
        return this.value = this.value.slice(0, -1), e
    }
}
const ns = class ns {
    constructor(e) {
        this._value = "", this._update({
            ...ns.DEFAULTS,
            ...e
        }), this._initialized = !0
    }
    updateOptions(e) {
        this.optionsIsChanged(e) && this.withValueRefresh(this._update.bind(this, e))
    }
    _update(e) {
        Object.assign(this, e)
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue
        }
    }
    set state(e) {
        this._value = e._value
    }
    reset() {
        this._value = ""
    }
    get value() {
        return this._value
    }
    set value(e) {
        this.resolve(e, {
            input: !0
        })
    }
    resolve(e, t) {
        t === void 0 && (t = {
            input: !0
        }), this.reset(), this.append(e, t, ""), this.doCommit()
    }
    get unmaskedValue() {
        return this.value
    }
    set unmaskedValue(e) {
        this.resolve(e, {})
    }
    get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue
    }
    set typedValue(e) {
        this.format ? this.value = this.format(e, this) : this.unmaskedValue = String(e)
    }
    get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, {
            raw: !0
        })
    }
    set rawInputValue(e) {
        this.resolve(e, {
            raw: !0
        })
    }
    get displayValue() {
        return this.value
    }
    get isComplete() {
        return !0
    }
    get isFilled() {
        return this.isComplete
    }
    nearestInputPos(e, t) {
        return e
    }
    totalInputPositions(e, t) {
        return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), Math.min(this.displayValue.length, t - e)
    }
    extractInput(e, t, i) {
        return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this.displayValue.slice(e, t)
    }
    extractTail(e, t) {
        return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), new yi(this.extractInput(e, t), e)
    }
    appendTail(e) {
        return Ni(e) && (e = new yi(String(e))), e.appendTo(this)
    }
    _appendCharRaw(e, t) {
        return e ? (this._value += e, new re({
            inserted: e,
            rawInserted: e
        })) : new re
    }
    _appendChar(e, t, i) {
        t === void 0 && (t = {});
        const s = this.state;
        let r;
        if ([e, r] = this.doPrepareChar(e, t), e && (r = r.aggregate(this._appendCharRaw(e, t))), r.inserted) {
            let a, o = this.doValidate(t) !== !1;
            if (o && i != null) {
                const l = this.state;
                if (this.overwrite === !0) {
                    a = i.state;
                    for (let d = 0; d < r.rawInserted.length; ++d) i.unshift(this.displayValue.length - r.tailShift)
                }
                let u = this.appendTail(i);
                if (o = u.rawInserted.length === i.toString().length, !(o && u.inserted) && this.overwrite === "shift") {
                    this.state = l, a = i.state;
                    for (let d = 0; d < r.rawInserted.length; ++d) i.shift();
                    u = this.appendTail(i), o = u.rawInserted.length === i.toString().length
                }
                o && u.inserted && (this.state = l)
            }
            o || (r = new re, this.state = s, i && a && (i.state = a))
        }
        return r
    }
    _appendPlaceholder() {
        return new re
    }
    _appendEager() {
        return new re
    }
    append(e, t, i) {
        if (!Ni(e)) throw new Error("value should be string");
        const s = Ni(i) ? new yi(String(i)) : i;
        t != null && t.tail && (t._beforeTailState = this.state);
        let r;
        [e, r] = this.doPrepare(e, t);
        for (let a = 0; a < e.length; ++a) {
            const o = this._appendChar(e[a], t, s);
            if (!o.rawInserted && !this.doSkipInvalid(e[a], t, s)) break;
            r.aggregate(o)
        }
        return (this.eager === !0 || this.eager === "append") && (t != null && t.input) && e && r.aggregate(this._appendEager()), s != null && (r.tailShift += this.appendTail(s).tailShift), r
    }
    remove(e, t) {
        return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t), new re
    }
    withValueRefresh(e) {
        if (this._refreshing || !this._initialized) return e();
        this._refreshing = !0;
        const t = this.rawInputValue,
            i = this.value,
            s = e();
        return this.rawInputValue = t, this.value && this.value !== i && i.indexOf(this.value) === 0 && (this.append(i.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, s
    }
    runIsolated(e) {
        if (this._isolated || !this._initialized) return e(this);
        this._isolated = !0;
        const t = this.state,
            i = e(this);
        return this.state = t, delete this._isolated, i
    }
    doSkipInvalid(e, t, i) {
        return !!this.skipInvalid
    }
    doPrepare(e, t) {
        return t === void 0 && (t = {}), re.normalize(this.prepare ? this.prepare(e, this, t) : e)
    }
    doPrepareChar(e, t) {
        return t === void 0 && (t = {}), re.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e)
    }
    doValidate(e) {
        return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e))
    }
    doCommit() {
        this.commit && this.commit(this.value, this)
    }
    splice(e, t, i, s, r) {
        s === void 0 && (s = V.NONE), r === void 0 && (r = {
            input: !0
        });
        const a = e + t,
            o = this.extractTail(a),
            l = this.eager === !0 || this.eager === "remove";
        let u;
        l && (s = kf(s), u = this.extractInput(0, a, {
            raw: !0
        }));
        let d = e;
        const c = new re;
        if (s !== V.NONE && (d = this.nearestInputPos(e, t > 1 && e !== 0 && !l ? V.NONE : s), c.tailShift = d - e), c.aggregate(this.remove(d)), l && s !== V.NONE && u === this.rawInputValue)
            if (s === V.FORCE_LEFT) {
                let f;
                for (; u === this.rawInputValue && (f = this.displayValue.length);) c.aggregate(new re({
                    tailShift: -1
                })).aggregate(this.remove(f - 1))
            } else s === V.FORCE_RIGHT && o.unshift();
        return c.aggregate(this.append(i, r, o))
    }
    maskEquals(e) {
        return this.mask === e
    }
    optionsIsChanged(e) {
        return !En(this, e)
    }
    typedValueEquals(e) {
        const t = this.typedValue;
        return e === t || ns.EMPTY_VALUES.includes(e) && ns.EMPTY_VALUES.includes(t) || (this.format ? this.format(e, this) === this.format(this.typedValue, this) : !1)
    }
};
Le(ns, "DEFAULTS", {
    skipInvalid: !0
}), Le(ns, "EMPTY_VALUES", [void 0, null, ""]);
let ki = ns;
G.Masked = ki;
class ls {
    constructor(e, t) {
        e === void 0 && (e = []), t === void 0 && (t = 0), this.chunks = e, this.from = t
    }
    toString() {
        return this.chunks.map(String).join("")
    }
    extend(e) {
        if (!String(e)) return;
        e = Ni(e) ? new yi(String(e)) : e;
        const t = this.chunks[this.chunks.length - 1],
            i = t && (t.stop === e.stop || e.stop == null) && e.from === t.from + t.toString().length;
        if (e instanceof yi) i ? t.extend(e.toString()) : this.chunks.push(e);
        else if (e instanceof ls) {
            if (e.stop == null) {
                let s;
                for (; e.chunks.length && e.chunks[0].stop == null;) s = e.chunks.shift(), s.from += e.from, this.extend(s)
            }
            e.toString() && (e.stop = e.blockIndex, this.chunks.push(e))
        }
    }
    appendTo(e) {
        if (!(e instanceof G.MaskedPattern)) return new yi(this.toString()).appendTo(e);
        const t = new re;
        for (let i = 0; i < this.chunks.length && !t.skip; ++i) {
            const s = this.chunks[i],
                r = e._mapPosToBlock(e.displayValue.length),
                a = s.stop;
            let o;
            if (a != null && (!r || r.index <= a)) {
                if (s instanceof ls || e._stops.indexOf(a) >= 0) {
                    const l = e._appendPlaceholder(a);
                    t.aggregate(l)
                }
                o = s instanceof ls && e._blocks[a]
            }
            if (o) {
                const l = o.appendTail(s);
                l.skip = !1, t.aggregate(l), e._value += l.inserted;
                const u = s.toString().slice(l.rawInserted.length);
                u && t.aggregate(e.append(u, {
                    tail: !0
                }))
            } else t.aggregate(e.append(s.toString(), {
                tail: !0
            }))
        }
        return t
    }
    get state() {
        return {
            chunks: this.chunks.map(e => e.state),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
        }
    }
    set state(e) {
        const {
            chunks: t,
            ...i
        } = e;
        Object.assign(this, i), this.chunks = t.map(s => {
            const r = "chunks" in s ? new ls : new yi;
            return r.state = s, r
        })
    }
    unshift(e) {
        if (!this.chunks.length || e != null && this.from >= e) return "";
        const t = e != null ? e - this.from : e;
        let i = 0;
        for (; i < this.chunks.length;) {
            const s = this.chunks[i],
                r = s.unshift(t);
            if (s.toString()) {
                if (!r) break;
                ++i
            } else this.chunks.splice(i, 1);
            if (r) return r
        }
        return ""
    }
    shift() {
        if (!this.chunks.length) return "";
        let e = this.chunks.length - 1;
        for (; 0 <= e;) {
            const t = this.chunks[e],
                i = t.shift();
            if (t.toString()) {
                if (!i) break;
                --e
            } else this.chunks.splice(e, 1);
            if (i) return i
        }
        return ""
    }
}
class If {
    constructor(e, t) {
        this.masked = e, this._log = [];
        const {
            offset: i,
            index: s
        } = e._mapPosToBlock(t) || (t < 0 ? {
            index: 0,
            offset: 0
        } : {
            index: this.masked._blocks.length,
            offset: 0
        });
        this.offset = i, this.index = s, this.ok = !1
    }
    get block() {
        return this.masked._blocks[this.index]
    }
    get pos() {
        return this.masked._blockStartPos(this.index) + this.offset
    }
    get state() {
        return {
            index: this.index,
            offset: this.offset,
            ok: this.ok
        }
    }
    set state(e) {
        Object.assign(this, e)
    }
    pushState() {
        this._log.push(this.state)
    }
    popState() {
        const e = this._log.pop();
        return e && (this.state = e), e
    }
    bindBlock() {
        this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length))
    }
    _pushLeft(e) {
        var t;
        for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((t = this.block) == null ? void 0 : t.displayValue.length) || 0)
            if (e()) return this.ok = !0;
        return this.ok = !1
    }
    _pushRight(e) {
        for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0)
            if (e()) return this.ok = !0;
        return this.ok = !1
    }
    pushLeftBeforeFilled() {
        return this._pushLeft(() => {
            if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, V.FORCE_LEFT), this.offset !== 0)) return !0
        })
    }
    pushLeftBeforeInput() {
        return this._pushLeft(() => {
            if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, V.LEFT), !0
        })
    }
    pushLeftBeforeRequired() {
        return this._pushLeft(() => {
            if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, V.LEFT), !0
        })
    }
    pushRightBeforeFilled() {
        return this._pushRight(() => {
            if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, V.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0
        })
    }
    pushRightBeforeInput() {
        return this._pushRight(() => {
            if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, V.NONE), !0
        })
    }
    pushRightBeforeRequired() {
        return this._pushRight(() => {
            if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, V.NONE), !0
        })
    }
}
class rl {
    constructor(e) {
        Object.assign(this, e), this._value = "", this.isFixed = !0
    }
    get value() {
        return this._value
    }
    get unmaskedValue() {
        return this.isUnmasking ? this.value : ""
    }
    get rawInputValue() {
        return this._isRawInput ? this.value : ""
    }
    get displayValue() {
        return this.value
    }
    reset() {
        this._isRawInput = !1, this._value = ""
    }
    remove(e, t) {
        return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new re
    }
    nearestInputPos(e, t) {
        t === void 0 && (t = V.NONE);
        const i = 0,
            s = this._value.length;
        switch (t) {
            case V.LEFT:
            case V.FORCE_LEFT:
                return i;
            case V.NONE:
            case V.RIGHT:
            case V.FORCE_RIGHT:
            default:
                return s
        }
    }
    totalInputPositions(e, t) {
        return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), this._isRawInput ? t - e : 0
    }
    extractInput(e, t, i) {
        return e === void 0 && (e = 0), t === void 0 && (t = this._value.length), i === void 0 && (i = {}), i.raw && this._isRawInput && this._value.slice(e, t) || ""
    }
    get isComplete() {
        return !0
    }
    get isFilled() {
        return !!this._value
    }
    _appendChar(e, t) {
        t === void 0 && (t = {});
        const i = new re;
        if (this.isFilled) return i;
        const s = this.eager === !0 || this.eager === "append",
            a = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !s) && !t.tail;
        return a && (i.rawInserted = this.char), this._value = i.inserted = this.char, this._isRawInput = a && (t.raw || t.input), i
    }
    _appendEager() {
        return this._appendChar(this.char, {
            tail: !0
        })
    }
    _appendPlaceholder() {
        const e = new re;
        return this.isFilled || (this._value = e.inserted = this.char), e
    }
    extractTail() {
        return new yi("")
    }
    appendTail(e) {
        return Ni(e) && (e = new yi(String(e))), e.appendTo(this)
    }
    append(e, t, i) {
        const s = this._appendChar(e[0], t);
        return i != null && (s.tailShift += this.appendTail(i).tailShift), s
    }
    doCommit() {}
    get state() {
        return {
            _value: this._value,
            _rawInputValue: this.rawInputValue
        }
    }
    set state(e) {
        this._value = e._value, this._isRawInput = !!e._rawInputValue
    }
}
class un {
    constructor(e) {
        const {
            parent: t,
            isOptional: i,
            placeholderChar: s,
            displayChar: r,
            lazy: a,
            eager: o,
            ...l
        } = e;
        this.masked = Ei(l), Object.assign(this, {
            parent: t,
            isOptional: i,
            placeholderChar: s,
            displayChar: r,
            lazy: a,
            eager: o
        })
    }
    reset() {
        this.isFilled = !1, this.masked.reset()
    }
    remove(e, t) {
        return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), e === 0 && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new re
    }
    get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
    }
    get unmaskedValue() {
        return this.masked.unmaskedValue
    }
    get rawInputValue() {
        return this.masked.rawInputValue
    }
    get displayValue() {
        return this.masked.value && this.displayChar || this.value
    }
    get isComplete() {
        return !!this.masked.value || this.isOptional
    }
    _appendChar(e, t) {
        if (t === void 0 && (t = {}), this.isFilled) return new re;
        const i = this.masked.state,
            s = this.masked._appendChar(e, this.currentMaskFlags(t));
        return s.inserted && this.doValidate(t) === !1 && (s.inserted = s.rawInserted = "", this.masked.state = i), !s.inserted && !this.isOptional && !this.lazy && !t.input && (s.inserted = this.placeholderChar), s.skip = !s.inserted && !this.isOptional, this.isFilled = !!s.inserted, s
    }
    append(e, t, i) {
        return this.masked.append(e, this.currentMaskFlags(t), i)
    }
    _appendPlaceholder() {
        const e = new re;
        return this.isFilled || this.isOptional || (this.isFilled = !0, e.inserted = this.placeholderChar), e
    }
    _appendEager() {
        return new re
    }
    extractTail(e, t) {
        return this.masked.extractTail(e, t)
    }
    appendTail(e) {
        return this.masked.appendTail(e)
    }
    extractInput(e, t, i) {
        return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), this.masked.extractInput(e, t, i)
    }
    nearestInputPos(e, t) {
        t === void 0 && (t = V.NONE);
        const i = 0,
            s = this.value.length,
            r = Math.min(Math.max(e, i), s);
        switch (t) {
            case V.LEFT:
            case V.FORCE_LEFT:
                return this.isComplete ? r : i;
            case V.RIGHT:
            case V.FORCE_RIGHT:
                return this.isComplete ? r : s;
            case V.NONE:
            default:
                return r
        }
    }
    totalInputPositions(e, t) {
        return e === void 0 && (e = 0), t === void 0 && (t = this.value.length), this.value.slice(e, t).length
    }
    doValidate(e) {
        return this.masked.doValidate(this.currentMaskFlags(e)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)))
    }
    doCommit() {
        this.masked.doCommit()
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue,
            masked: this.masked.state,
            isFilled: this.isFilled
        }
    }
    set state(e) {
        this.masked.state = e.masked, this.isFilled = e.isFilled
    }
    currentMaskFlags(e) {
        var t;
        return {
            ...e,
            _beforeTailState: ((t = e == null ? void 0 : e._beforeTailState) == null ? void 0 : t.masked) || (e == null ? void 0 : e._beforeTailState)
        }
    }
}
Le(un, "DEFAULT_DEFINITIONS", {
    0: /\d/,
    a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    "*": /./
});
class Pf extends ki {
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        const t = e.mask;
        t && (e.validate = i => i.search(t) >= 0), super._update(e)
    }
}
G.MaskedRegExp = Pf;
const ii = class ii extends ki {
    constructor(e) {
        super({
            ...ii.DEFAULTS,
            ...e,
            definitions: Object.assign({}, un.DEFAULT_DEFINITIONS, e == null ? void 0 : e.definitions)
        })
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        e.definitions = Object.assign({}, this.definitions, e.definitions), super._update(e), this._rebuildMask()
    }
    _rebuildMask() {
        const e = this.definitions;
        this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
        const t = this.mask;
        if (!t || !e) return;
        let i = !1,
            s = !1;
        for (let r = 0; r < t.length; ++r) {
            if (this.blocks) {
                const u = t.slice(r),
                    d = Object.keys(this.blocks).filter(f => u.indexOf(f) === 0);
                d.sort((f, h) => h.length - f.length);
                const c = d[0];
                if (c) {
                    const {
                        expose: f,
                        repeat: h,
                        ..._
                    } = Ar(this.blocks[c]), p = {
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        displayChar: this.displayChar,
                        overwrite: this.overwrite,
                        ..._,
                        repeat: h,
                        parent: this
                    }, b = h != null ? new G.RepeatBlock(p) : Ei(p);
                    b && (this._blocks.push(b), f && (this.exposeBlock = b), this._maskedBlocks[c] || (this._maskedBlocks[c] = []), this._maskedBlocks[c].push(this._blocks.length - 1)), r += c.length - 1;
                    continue
                }
            }
            let a = t[r],
                o = a in e;
            if (a === ii.STOP_CHAR) {
                this._stops.push(this._blocks.length);
                continue
            }
            if (a === "{" || a === "}") {
                i = !i;
                continue
            }
            if (a === "[" || a === "]") {
                s = !s;
                continue
            }
            if (a === ii.ESCAPE_CHAR) {
                if (++r, a = t[r], !a) break;
                o = !1
            }
            const l = o ? new un({
                isOptional: s,
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar,
                ...Ar(e[a]),
                parent: this
            }) : new rl({
                char: a,
                eager: this.eager,
                isUnmasking: i
            });
            this._blocks.push(l)
        }
    }
    get state() {
        return {
            ...super.state,
            _blocks: this._blocks.map(e => e.state)
        }
    }
    set state(e) {
        if (!e) {
            this.reset();
            return
        }
        const {
            _blocks: t,
            ...i
        } = e;
        this._blocks.forEach((s, r) => s.state = t[r]), super.state = i
    }
    reset() {
        super.reset(), this._blocks.forEach(e => e.reset())
    }
    get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(e => e.isComplete)
    }
    get isFilled() {
        return this._blocks.every(e => e.isFilled)
    }
    get isFixed() {
        return this._blocks.every(e => e.isFixed)
    }
    get isOptional() {
        return this._blocks.every(e => e.isOptional)
    }
    doCommit() {
        this._blocks.forEach(e => e.doCommit()), super.doCommit()
    }
    get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((e, t) => e += t.unmaskedValue, "")
    }
    set unmaskedValue(e) {
        if (this.exposeBlock) {
            const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.unmaskedValue = e, this.appendTail(t), this.doCommit()
        } else super.unmaskedValue = e
    }
    get value() {
        return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce((e, t) => e += t.value, "")
    }
    set value(e) {
        if (this.exposeBlock) {
            const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.value = e, this.appendTail(t), this.doCommit()
        } else super.value = e
    }
    get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue
    }
    set typedValue(e) {
        if (this.exposeBlock) {
            const t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.typedValue = e, this.appendTail(t), this.doCommit()
        } else super.typedValue = e
    }
    get displayValue() {
        return this._blocks.reduce((e, t) => e += t.displayValue, "")
    }
    appendTail(e) {
        return super.appendTail(e).aggregate(this._appendPlaceholder())
    }
    _appendEager() {
        var i;
        const e = new re;
        let t = (i = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : i.index;
        if (t == null) return e;
        this._blocks[t].isFilled && ++t;
        for (let s = t; s < this._blocks.length; ++s) {
            const r = this._blocks[s]._appendEager();
            if (!r.inserted) break;
            e.aggregate(r)
        }
        return e
    }
    _appendCharRaw(e, t) {
        var r, a;
        t === void 0 && (t = {});
        const i = this._mapPosToBlock(this.displayValue.length),
            s = new re;
        if (!i) return s;
        for (let o = i.index, l; l = this._blocks[o]; ++o) {
            const u = l._appendChar(e, {
                ...t,
                _beforeTailState: (a = (r = t._beforeTailState) == null ? void 0 : r._blocks) == null ? void 0 : a[o]
            });
            if (s.aggregate(u), u.skip || u.rawInserted) break
        }
        return s
    }
    extractTail(e, t) {
        e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
        const i = new ls;
        return e === t || this._forEachBlocksInRange(e, t, (s, r, a, o) => {
            const l = s.extractTail(a, o);
            l.stop = this._findStopBefore(r), l.from = this._blockStartPos(r), l instanceof ls && (l.blockIndex = r), i.extend(l)
        }), i
    }
    extractInput(e, t, i) {
        if (e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), i === void 0 && (i = {}), e === t) return "";
        let s = "";
        return this._forEachBlocksInRange(e, t, (r, a, o, l) => {
            s += r.extractInput(o, l, i)
        }), s
    }
    _findStopBefore(e) {
        let t;
        for (let i = 0; i < this._stops.length; ++i) {
            const s = this._stops[i];
            if (s <= e) t = s;
            else break
        }
        return t
    }
    _appendPlaceholder(e) {
        const t = new re;
        if (this.lazy && e == null) return t;
        const i = this._mapPosToBlock(this.displayValue.length);
        if (!i) return t;
        const s = i.index,
            r = e ?? this._blocks.length;
        return this._blocks.slice(s, r).forEach(a => {
            var o;
            if (!a.lazy || e != null) {
                const l = a._appendPlaceholder((o = a._blocks) == null ? void 0 : o.length);
                this._value += l.inserted, t.aggregate(l)
            }
        }), t
    }
    _mapPosToBlock(e) {
        let t = "";
        for (let i = 0; i < this._blocks.length; ++i) {
            const s = this._blocks[i],
                r = t.length;
            if (t += s.displayValue, e <= t.length) return {
                index: i,
                offset: e - r
            }
        }
    }
    _blockStartPos(e) {
        return this._blocks.slice(0, e).reduce((t, i) => t += i.displayValue.length, 0)
    }
    _forEachBlocksInRange(e, t, i) {
        t === void 0 && (t = this.displayValue.length);
        const s = this._mapPosToBlock(e);
        if (s) {
            const r = this._mapPosToBlock(t),
                a = r && s.index === r.index,
                o = s.offset,
                l = r && a ? r.offset : this._blocks[s.index].displayValue.length;
            if (i(this._blocks[s.index], s.index, o, l), r && !a) {
                for (let u = s.index + 1; u < r.index; ++u) i(this._blocks[u], u, 0, this._blocks[u].displayValue.length);
                i(this._blocks[r.index], r.index, 0, r.offset)
            }
        }
    }
    remove(e, t) {
        e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
        const i = super.remove(e, t);
        return this._forEachBlocksInRange(e, t, (s, r, a, o) => {
            i.aggregate(s.remove(a, o))
        }), i
    }
    nearestInputPos(e, t) {
        if (t === void 0 && (t = V.NONE), !this._blocks.length) return 0;
        const i = new If(this, e);
        if (t === V.NONE) return i.pushRightBeforeInput() || (i.popState(), i.pushLeftBeforeInput()) ? i.pos : this.displayValue.length;
        if (t === V.LEFT || t === V.FORCE_LEFT) {
            if (t === V.LEFT) {
                if (i.pushRightBeforeFilled(), i.ok && i.pos === e) return e;
                i.popState()
            }
            if (i.pushLeftBeforeInput(), i.pushLeftBeforeRequired(), i.pushLeftBeforeFilled(), t === V.LEFT) {
                if (i.pushRightBeforeInput(), i.pushRightBeforeRequired(), i.ok && i.pos <= e || (i.popState(), i.ok && i.pos <= e)) return i.pos;
                i.popState()
            }
            return i.ok ? i.pos : t === V.FORCE_LEFT ? 0 : (i.popState(), i.ok || (i.popState(), i.ok) ? i.pos : 0)
        }
        return t === V.RIGHT || t === V.FORCE_RIGHT ? (i.pushRightBeforeInput(), i.pushRightBeforeRequired(), i.pushRightBeforeFilled() ? i.pos : t === V.FORCE_RIGHT ? this.displayValue.length : (i.popState(), i.ok || (i.popState(), i.ok) ? i.pos : this.nearestInputPos(e, V.LEFT))) : e
    }
    totalInputPositions(e, t) {
        e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
        let i = 0;
        return this._forEachBlocksInRange(e, t, (s, r, a, o) => {
            i += s.totalInputPositions(a, o)
        }), i
    }
    maskedBlock(e) {
        return this.maskedBlocks(e)[0]
    }
    maskedBlocks(e) {
        const t = this._maskedBlocks[e];
        return t ? t.map(i => this._blocks[i]) : []
    }
};
Le(ii, "DEFAULTS", {
    lazy: !0,
    placeholderChar: "_"
}), Le(ii, "STOP_CHAR", "`"), Le(ii, "ESCAPE_CHAR", "\\"), Le(ii, "InputDefinition", un), Le(ii, "FixedDefinition", rl);
let ys = ii;
G.MaskedPattern = ys;
class dn extends ys {
    get _matchFrom() {
        return this.maxLength - String(this.from).length
    }
    constructor(e) {
        super(e)
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        const {
            to: t = this.to || 0,
            from: i = this.from || 0,
            maxLength: s = this.maxLength || 0,
            autofix: r = this.autofix,
            ...a
        } = e;
        this.to = t, this.from = i, this.maxLength = Math.max(String(t).length, s), this.autofix = r;
        const o = String(this.from).padStart(this.maxLength, "0"),
            l = String(this.to).padStart(this.maxLength, "0");
        let u = 0;
        for (; u < l.length && l[u] === o[u];) ++u;
        a.mask = l.slice(0, u).replace(/0/g, "\\0") + "0".repeat(this.maxLength - u), super._update(a)
    }
    get isComplete() {
        return super.isComplete && !!this.value
    }
    boundaries(e) {
        let t = "",
            i = "";
        const [, s, r] = e.match(/^(\D*)(\d*)(\D*)/) || [];
        return r && (t = "0".repeat(s.length) + r, i = "9".repeat(s.length) + r), t = t.padEnd(this.maxLength, "0"), i = i.padEnd(this.maxLength, "9"), [t, i]
    }
    doPrepareChar(e, t) {
        t === void 0 && (t = {});
        let i;
        if ([e, i] = super.doPrepareChar(e.replace(/\D/g, ""), t), !this.autofix || !e) return i.skip = !this.isComplete, [e, i];
        const s = String(this.from).padStart(this.maxLength, "0"),
            r = String(this.to).padStart(this.maxLength, "0"),
            a = this.value + e;
        if (a.length > this.maxLength) return ["", i];
        const [o, l] = this.boundaries(a);
        return Number(l) < this.from ? [s[a.length - 1], i] : Number(o) > this.to ? this.autofix === "pad" && a.length < this.maxLength ? ["", i.aggregate(this.append(s[a.length - 1] + e, t))] : [r[a.length - 1], i] : [e, i]
    }
    doValidate(e) {
        const t = this.value;
        if (t.search(/[^0]/) === -1 && t.length <= this._matchFrom) return !0;
        const [s, r] = this.boundaries(t);
        return this.from <= Number(r) && Number(s) <= this.to && super.doValidate(e)
    }
}
G.MaskedRange = dn;
const gi = class gi extends ys {
    static extractPatternOptions(e) {
        const {
            mask: t,
            pattern: i,
            ...s
        } = e;
        return {
            ...s,
            mask: Ni(t) ? t : i
        }
    }
    constructor(e) {
        super(gi.extractPatternOptions({
            ...gi.DEFAULTS,
            ...e
        }))
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        const {
            mask: t,
            pattern: i,
            blocks: s,
            ...r
        } = {
            ...gi.DEFAULTS,
            ...e
        }, a = Object.assign({}, gi.GET_DEFAULT_BLOCKS());
        e.min && (a.Y.from = e.min.getFullYear()), e.max && (a.Y.to = e.max.getFullYear()), e.min && e.max && a.Y.from === a.Y.to && (a.m.from = e.min.getMonth() + 1, a.m.to = e.max.getMonth() + 1, a.m.from === a.m.to && (a.d.from = e.min.getDate(), a.d.to = e.max.getDate())), Object.assign(a, this.blocks, s), Object.keys(a).forEach(o => {
            const l = a[o];
            !("autofix" in l) && "autofix" in e && (l.autofix = e.autofix)
        }), super._update({
            ...r,
            mask: Ni(t) ? t : i,
            blocks: a
        })
    }
    doValidate(e) {
        const t = this.date;
        return super.doValidate(e) && (!this.isComplete || this.isDateExist(this.value) && t != null && (this.min == null || this.min <= t) && (this.max == null || t <= this.max))
    }
    isDateExist(e) {
        return this.format(this.parse(e, this), this).indexOf(e) >= 0
    }
    get date() {
        return this.typedValue
    }
    set date(e) {
        this.typedValue = e
    }
    get typedValue() {
        return this.isComplete ? super.typedValue : null
    }
    set typedValue(e) {
        super.typedValue = e
    }
    maskEquals(e) {
        return e === Date || super.maskEquals(e)
    }
    optionsIsChanged(e) {
        return super.optionsIsChanged(gi.extractPatternOptions(e))
    }
};
Le(gi, "GET_DEFAULT_BLOCKS", () => ({
    d: {
        mask: dn,
        from: 1,
        to: 31,
        maxLength: 2
    },
    m: {
        mask: dn,
        from: 1,
        to: 12,
        maxLength: 2
    },
    Y: {
        mask: dn,
        from: 1900,
        to: 9999
    }
})), Le(gi, "DEFAULTS", {
    mask: Date,
    pattern: "d{.}`m{.}`Y",
    format: (e, t) => {
        if (!e) return "";
        const i = String(e.getDate()).padStart(2, "0"),
            s = String(e.getMonth() + 1).padStart(2, "0"),
            r = e.getFullYear();
        return [i, s, r].join(".")
    },
    parse: (e, t) => {
        const [i, s, r] = e.split(".").map(Number);
        return new Date(r, s - 1, i)
    }
});
let Da = gi;
G.MaskedDate = Da;
const Mn = class Mn extends ki {
    constructor(e) {
        super({
            ...Mn.DEFAULTS,
            ...e
        }), this.currentMask = void 0
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        super._update(e), "mask" in e && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(e.mask) ? e.mask.map(t => {
            const {
                expose: i,
                ...s
            } = Ar(t), r = Ei({
                overwrite: this._overwrite,
                eager: this._eager,
                skipInvalid: this._skipInvalid,
                ...s
            });
            return i && (this.exposeMask = r), r
        }) : [])
    }
    _appendCharRaw(e, t) {
        t === void 0 && (t = {});
        const i = this._applyDispatch(e, t);
        return this.currentMask && i.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))), i
    }
    _applyDispatch(e, t, i) {
        e === void 0 && (e = ""), t === void 0 && (t = {}), i === void 0 && (i = "");
        const s = t.tail && t._beforeTailState != null ? t._beforeTailState._value : this.value,
            r = this.rawInputValue,
            a = t.tail && t._beforeTailState != null ? t._beforeTailState._rawInputValue : r,
            o = r.slice(a.length),
            l = this.currentMask,
            u = new re,
            d = l == null ? void 0 : l.state;
        if (this.currentMask = this.doDispatch(e, {
                ...t
            }, i), this.currentMask)
            if (this.currentMask !== l) {
                if (this.currentMask.reset(), a) {
                    const c = this.currentMask.append(a, {
                        raw: !0
                    });
                    u.tailShift = c.inserted.length - s.length
                }
                o && (u.tailShift += this.currentMask.append(o, {
                    raw: !0,
                    tail: !0
                }).tailShift)
            } else d && (this.currentMask.state = d);
        return u
    }
    _appendPlaceholder() {
        const e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e
    }
    _appendEager() {
        const e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendEager()), e
    }
    appendTail(e) {
        const t = new re;
        return e && t.aggregate(this._applyDispatch("", {}, e)), t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e))
    }
    currentMaskFlags(e) {
        var t, i;
        return {
            ...e,
            _beforeTailState: ((t = e._beforeTailState) == null ? void 0 : t.currentMaskRef) === this.currentMask && ((i = e._beforeTailState) == null ? void 0 : i.currentMask) || e._beforeTailState
        }
    }
    doDispatch(e, t, i) {
        return t === void 0 && (t = {}), i === void 0 && (i = ""), this.dispatch(e, this, t, i)
    }
    doValidate(e) {
        return super.doValidate(e) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)))
    }
    doPrepare(e, t) {
        t === void 0 && (t = {});
        let [i, s] = super.doPrepare(e, t);
        if (this.currentMask) {
            let r;
            [i, r] = super.doPrepare(i, this.currentMaskFlags(t)), s = s.aggregate(r)
        }
        return [i, s]
    }
    doPrepareChar(e, t) {
        t === void 0 && (t = {});
        let [i, s] = super.doPrepareChar(e, t);
        if (this.currentMask) {
            let r;
            [i, r] = super.doPrepareChar(i, this.currentMaskFlags(t)), s = s.aggregate(r)
        }
        return [i, s]
    }
    reset() {
        var e;
        (e = this.currentMask) == null || e.reset(), this.compiledMasks.forEach(t => t.reset())
    }
    get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : ""
    }
    set value(e) {
        this.exposeMask ? (this.exposeMask.value = e, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = e
    }
    get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : ""
    }
    set unmaskedValue(e) {
        this.exposeMask ? (this.exposeMask.unmaskedValue = e, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = e
    }
    get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : ""
    }
    set typedValue(e) {
        if (this.exposeMask) {
            this.exposeMask.typedValue = e, this.currentMask = this.exposeMask, this._applyDispatch();
            return
        }
        let t = String(e);
        this.currentMask && (this.currentMask.typedValue = e, t = this.currentMask.unmaskedValue), this.unmaskedValue = t
    }
    get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : ""
    }
    get isComplete() {
        var e;
        return !!((e = this.currentMask) != null && e.isComplete)
    }
    get isFilled() {
        var e;
        return !!((e = this.currentMask) != null && e.isFilled)
    }
    remove(e, t) {
        const i = new re;
        return this.currentMask && i.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()), i
    }
    get state() {
        var e;
        return {
            ...super.state,
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map(t => t.state),
            currentMaskRef: this.currentMask,
            currentMask: (e = this.currentMask) == null ? void 0 : e.state
        }
    }
    set state(e) {
        const {
            compiledMasks: t,
            currentMaskRef: i,
            currentMask: s,
            ...r
        } = e;
        t && this.compiledMasks.forEach((a, o) => a.state = t[o]), i != null && (this.currentMask = i, this.currentMask.state = s), super.state = r
    }
    extractInput(e, t, i) {
        return this.currentMask ? this.currentMask.extractInput(e, t, i) : ""
    }
    extractTail(e, t) {
        return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t)
    }
    doCommit() {
        this.currentMask && this.currentMask.doCommit(), super.doCommit()
    }
    nearestInputPos(e, t) {
        return this.currentMask ? this.currentMask.nearestInputPos(e, t) : super.nearestInputPos(e, t)
    }
    get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite
    }
    set overwrite(e) {
        this._overwrite = e
    }
    get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager
    }
    set eager(e) {
        this._eager = e
    }
    get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid
    }
    set skipInvalid(e) {
        this._skipInvalid = e
    }
    maskEquals(e) {
        return Array.isArray(e) ? this.compiledMasks.every((t, i) => {
            if (!e[i]) return;
            const {
                mask: s,
                ...r
            } = e[i];
            return En(t, r) && t.maskEquals(s)
        }) : super.maskEquals(e)
    }
    typedValueEquals(e) {
        var t;
        return !!((t = this.currentMask) != null && t.typedValueEquals(e))
    }
};
Le(Mn, "DEFAULTS");
let kn = Mn;
kn.DEFAULTS = {
    dispatch: (n, e, t, i) => {
        if (!e.compiledMasks.length) return;
        const s = e.rawInputValue,
            r = e.compiledMasks.map((a, o) => {
                const l = e.currentMask === a,
                    u = l ? a.displayValue.length : a.nearestInputPos(a.displayValue.length, V.FORCE_LEFT);
                return a.rawInputValue !== s ? (a.reset(), a.append(s, {
                    raw: !0
                })) : l || a.remove(u), a.append(n, e.currentMaskFlags(t)), a.appendTail(i), {
                    index: o,
                    weight: a.rawInputValue.length,
                    totalInputPositions: a.totalInputPositions(0, Math.max(u, a.nearestInputPos(a.displayValue.length, V.FORCE_LEFT)))
                }
            });
        return r.sort((a, o) => o.weight - a.weight || o.totalInputPositions - a.totalInputPositions), e.compiledMasks[r[0].index]
    }
};
G.MaskedDynamic = kn;
class Lf extends ys {
    constructor(e) {
        super(e)
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        const {
            enum: t,
            ...i
        } = e;
        if (t) {
            const s = t.map(o => o.length),
                r = Math.min(...s),
                a = Math.max(...s) - r;
            i.mask = "*".repeat(r), a && (i.mask += "[" + "*".repeat(a) + "]"), this.enum = t
        }
        super._update(i)
    }
    doValidate(e) {
        return this.enum.some(t => t.indexOf(this.unmaskedValue) === 0) && super.doValidate(e)
    }
}
G.MaskedEnum = Lf;
class Of extends ki {
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        super._update({
            ...e,
            validate: e.mask
        })
    }
}
G.MaskedFunction = Of;
const Lt = class Lt extends ki {
    constructor(e) {
        super({
            ...Lt.DEFAULTS,
            ...e
        })
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        super._update(e), this._updateRegExps()
    }
    _updateRegExps() {
        const e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
            t = "\\d*",
            i = (this.scale ? `(${na(this.radix)}\\d{0,${this.scale}})?` : "") + "$";
        this._numberRegExp = new RegExp(e + t + i), this._mapToRadixRegExp = new RegExp(`[${this.mapToRadix.map(na).join("")}]`, "g"), this._thousandsSeparatorRegExp = new RegExp(na(this.thousandsSeparator), "g")
    }
    _removeThousandsSeparators(e) {
        return e.replace(this._thousandsSeparatorRegExp, "")
    }
    _insertThousandsSeparators(e) {
        const t = e.split(this.radix);
        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), t.join(this.radix)
    }
    doPrepareChar(e, t) {
        t === void 0 && (t = {});
        const [i, s] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (t.input && t.raw || !t.input && !t.raw) ? e.replace(this._mapToRadixRegExp, this.radix) : e), t);
        return e && !i && (s.skip = !0), i && !this.allowPositive && !this.value && i !== "-" && s.aggregate(this._appendChar("-")), [i, s]
    }
    _separatorsCount(e, t) {
        t === void 0 && (t = !1);
        let i = 0;
        for (let s = 0; s < e; ++s) this._value.indexOf(this.thousandsSeparator, s) === s && (++i, t && (e += this.thousandsSeparator.length));
        return i
    }
    _separatorsCountFromSlice(e) {
        return e === void 0 && (e = this._value), this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
    }
    extractInput(e, t, i) {
        return e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), [e, t] = this._adjustRangeWithSeparators(e, t), this._removeThousandsSeparators(super.extractInput(e, t, i))
    }
    _appendCharRaw(e, t) {
        if (t === void 0 && (t = {}), !this.thousandsSeparator) return super._appendCharRaw(e, t);
        const i = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
            s = this._separatorsCountFromSlice(i);
        this._value = this._removeThousandsSeparators(this.value);
        const r = super._appendCharRaw(e, t);
        this._value = this._insertThousandsSeparators(this._value);
        const a = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
            o = this._separatorsCountFromSlice(a);
        return r.tailShift += (o - s) * this.thousandsSeparator.length, r.skip = !r.rawInserted && e === this.thousandsSeparator, r
    }
    _findSeparatorAround(e) {
        if (this.thousandsSeparator) {
            const t = e - this.thousandsSeparator.length + 1,
                i = this.value.indexOf(this.thousandsSeparator, t);
            if (i <= e) return i
        }
        return -1
    }
    _adjustRangeWithSeparators(e, t) {
        const i = this._findSeparatorAround(e);
        i >= 0 && (e = i);
        const s = this._findSeparatorAround(t);
        return s >= 0 && (t = s + this.thousandsSeparator.length), [e, t]
    }
    remove(e, t) {
        e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length), [e, t] = this._adjustRangeWithSeparators(e, t);
        const i = this.value.slice(0, e),
            s = this.value.slice(t),
            r = this._separatorsCount(i.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(i + s));
        const a = this._separatorsCountFromSlice(i);
        return new re({
            tailShift: (a - r) * this.thousandsSeparator.length
        })
    }
    nearestInputPos(e, t) {
        if (!this.thousandsSeparator) return e;
        switch (t) {
            case V.NONE:
            case V.LEFT:
            case V.FORCE_LEFT: {
                const i = this._findSeparatorAround(e - 1);
                if (i >= 0) {
                    const s = i + this.thousandsSeparator.length;
                    if (e < s || this.value.length <= s || t === V.FORCE_LEFT) return i
                }
                break
            }
            case V.RIGHT:
            case V.FORCE_RIGHT: {
                const i = this._findSeparatorAround(e);
                if (i >= 0) return i + this.thousandsSeparator.length
            }
        }
        return e
    }
    doValidate(e) {
        let t = !!this._removeThousandsSeparators(this.value).match(this._numberRegExp);
        if (t) {
            const i = this.number;
            t = t && !isNaN(i) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max)
        }
        return t && super.doValidate(e)
    }
    doCommit() {
        if (this.value) {
            const e = this.number;
            let t = e;
            this.min != null && (t = Math.max(t, this.min)), this.max != null && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = this.format(t, this));
            let i = this.value;
            this.normalizeZeros && (i = this._normalizeZeros(i)), this.padFractionalZeros && this.scale > 0 && (i = this._padFractionalZeros(i)), this._value = i
        }
        super.doCommit()
    }
    _normalizeZeros(e) {
        const t = this._removeThousandsSeparators(e).split(this.radix);
        return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (i, s, r, a) => s + a), e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"), t.length > 1 && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix))
    }
    _padFractionalZeros(e) {
        if (!e) return e;
        const t = e.split(this.radix);
        return t.length < 2 && t.push(""), t[1] = t[1].padEnd(this.scale, "0"), t.join(this.radix)
    }
    doSkipInvalid(e, t, i) {
        t === void 0 && (t = {});
        const s = this.scale === 0 && e !== this.thousandsSeparator && (e === this.radix || e === Lt.UNMASKED_RADIX || this.mapToRadix.includes(e));
        return super.doSkipInvalid(e, t, i) && !s
    }
    get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, Lt.UNMASKED_RADIX)
    }
    set unmaskedValue(e) {
        super.unmaskedValue = e
    }
    get typedValue() {
        return this.parse(this.unmaskedValue, this)
    }
    set typedValue(e) {
        this.rawInputValue = this.format(e, this).replace(Lt.UNMASKED_RADIX, this.radix)
    }
    get number() {
        return this.typedValue
    }
    set number(e) {
        this.typedValue = e
    }
    get allowNegative() {
        return this.min != null && this.min < 0 || this.max != null && this.max < 0
    }
    get allowPositive() {
        return this.min != null && this.min > 0 || this.max != null && this.max > 0
    }
    typedValueEquals(e) {
        return (super.typedValueEquals(e) || Lt.EMPTY_VALUES.includes(e) && Lt.EMPTY_VALUES.includes(this.typedValue)) && !(e === 0 && this.value === "")
    }
};
Le(Lt, "UNMASKED_RADIX", "."), Le(Lt, "EMPTY_VALUES", [...ki.EMPTY_VALUES, 0]), Le(Lt, "DEFAULTS", {
    mask: Number,
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: [Lt.UNMASKED_RADIX],
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    scale: 2,
    normalizeZeros: !0,
    padFractionalZeros: !1,
    parse: Number,
    format: e => e.toLocaleString("en-US", {
        useGrouping: !1,
        maximumFractionDigits: 20
    })
});
let Ba = Lt;
G.MaskedNumber = Ba;
const Va = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
};

function $u(n, e, t) {
    e === void 0 && (e = Va.MASKED), t === void 0 && (t = Va.MASKED);
    const i = Ei(n);
    return s => i.runIsolated(r => (r[e] = s, r[t]))
}

function Df(n, e, t, i) {
    return $u(e, t, i)(n)
}
G.PIPE_TYPE = Va;
G.createPipe = $u;
G.pipe = Df;
class Bf extends ys {
    get repeatFrom() {
        return (Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) ?? 0
    }
    get repeatTo() {
        return (Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) ?? 1 / 0
    }
    constructor(e) {
        super(e)
    }
    updateOptions(e) {
        super.updateOptions(e)
    }
    _update(e) {
        var r;
        const {
            repeat: t,
            ...i
        } = Ar(e);
        this._blockOpts = Object.assign({}, this._blockOpts, i);
        const s = Ei(this._blockOpts);
        this.repeat = t ?? s.repeat ?? this.repeat ?? 1 / 0, super._update({
            mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && ((r = this._blocks) == null ? void 0 : r.length) || 0, this.repeatFrom)),
            blocks: {
                m: s
            },
            eager: s.eager,
            overwrite: s.overwrite,
            skipInvalid: s.skipInvalid,
            lazy: s.lazy,
            placeholderChar: s.placeholderChar,
            displayChar: s.displayChar
        })
    }
    _allocateBlock(e) {
        if (e < this._blocks.length) return this._blocks[e];
        if (this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo) return this._blocks.push(Ei(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1]
    }
    _appendCharRaw(e, t) {
        var s, r, a;
        t === void 0 && (t = {});
        const i = new re;
        for (let o = ((s = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : s.index) ?? Math.max(this._blocks.length - 1, 0), l, u; l = this._blocks[o] ?? (u = !u && this._allocateBlock(o)); ++o) {
            const d = l._appendChar(e, {
                ...t,
                _beforeTailState: (a = (r = t._beforeTailState) == null ? void 0 : r._blocks) == null ? void 0 : a[o]
            });
            if (d.skip && u) {
                this._blocks.pop(), this.mask = this.mask.slice(1);
                break
            }
            if (i.aggregate(d), d.skip || d.rawInserted) break
        }
        return i
    }
    _trimEmptyTail(e, t) {
        var a, o;
        e === void 0 && (e = 0);
        const i = Math.max(((a = this._mapPosToBlock(e)) == null ? void 0 : a.index) || 0, this.repeatFrom, 0);
        let s;
        t != null && (s = (o = this._mapPosToBlock(t)) == null ? void 0 : o.index), s == null && (s = this._blocks.length - 1);
        let r = 0;
        for (let l = s; i <= l && !this._blocks[l].unmaskedValue; --l, ++r);
        r && (this._blocks.splice(s - r + 1, r), this.mask = this.mask.slice(r))
    }
    reset() {
        super.reset(), this._trimEmptyTail()
    }
    remove(e, t) {
        e === void 0 && (e = 0), t === void 0 && (t = this.displayValue.length);
        const i = super.remove(e, t);
        return this._trimEmptyTail(e, t), i
    }
    totalInputPositions(e, t) {
        return e === void 0 && (e = 0), t == null && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(e, t)
    }
    get state() {
        return super.state
    }
    set state(e) {
        this._blocks.length = e._blocks.length, this.mask = this.mask.slice(0, this._blocks.length), super.state = e
    }
}
G.RepeatBlock = Bf;
try {
    globalThis.IMask = G
} catch {}
const Vf = () => {
        Nf(), Rf()
    },
    Rf = () => {
        const n = document.querySelectorAll('input[name="phone"]');
        for (phoneInput of n) G(phoneInput, {
            mask: "+{7}(000)000-00-00"
        })
    },
    zf = async n => {
        const e = new FormData(n);
        (await (await fetch("/ajax.php", {
            method: "POST",
            body: e
        })).json()).success ? window.openModal("formSuccess") : window.openModal("formFail")
    }, Nf = () => {
        const n = document.querySelector(".form");
        new Ef(n).addField('[name="name"]', [{
            rule: "required",
            errorMessage: "Имя обязательно для заполнения"
        }, {
            rule: "minLength",
            value: 2,
            errorMessage: "Имя должно содержать не менее 2 символов"
        }]).addField('[name="phone"]', [{
            rule: "required",
            errorMessage: "Телефон обязателен для заполнения"
        }]).addField('[name="email"]', [{
            rule: "required",
            errorMessage: "Почта обязательна для заполнения"
        }, {
            rule: "email",
            errorMessage: "Почта указана в неверном формате"
        }]).onSuccess(t => {
            zf(n)
        })
    }, Gf = () => {
        const n = document.querySelectorAll("[data-open-modal]"),
            e = document.querySelectorAll("[data-close-modal]");
        for (openButton of n) openButton.addEventListener("click", t => {
            const i = t.currentTarget.dataset.targetModal;
            qu(i)
        });
        for (closeModalElement of e) closeModalElement.addEventListener("click", t => {
            const s = t.currentTarget.closest(".modal").dataset.modal;
            Hu(s)
        })
    }, Hu = n => {
        document.querySelector(`[data-modal="${n}"]`).classList.add("hidden")
    }, qu = n => {
        document.querySelector(`[data-modal="${n}"]`).classList.toggle("hidden")
    };
window.openModal = qu;
window.closeModal = Hu;
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", function() {
        document.querySelector(".preloader").classList.add("__hidden")
    }), fo(".submenu", ".submenu__nav"), fo(".header__content-burger", ".header__content-menu"), bc(), Zh(), Qh(), Jh(), ef(), tf(), rf(), Vf(), Gf()
});

/* End */
;; /* /_dist/js/app.js?1707915872302292*/