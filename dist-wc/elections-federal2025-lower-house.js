var ka = Object.defineProperty;
var Lo = (e) => {
  throw TypeError(e);
};
var Ia = (e, t, r) => t in e ? ka(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ne = (e, t, r) => Ia(e, typeof t != "symbol" ? t + "" : t, r), Ir = (e, t, r) => t.has(e) || Lo("Cannot " + r);
var B = (e, t, r) => (Ir(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Oe = (e, t, r) => t.has(e) ? Lo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ot = (e, t, r, o) => (Ir(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r), To = (e, t, r) => (Ir(e, t, "access private method"), r);
const Ma = "5";
var nn;
typeof window < "u" && ((nn = window.__svelte ?? (window.__svelte = {})).v ?? (nn.v = /* @__PURE__ */ new Set())).add(Ma);
const no = 1, ao = 2, an = 4, Fa = 8, Ba = 16, Da = 1, Ha = 4, Va = 8, Wa = 16, $a = 1, Ga = 2, Ua = 4, sn = 1, ja = 2, so = "[", io = "[!", lo = "]", st = {}, ce = Symbol(), za = "http://www.w3.org/1999/xhtml", Ya = "@attach", Oo = !1;
var yr = Array.isArray, Ka = Array.prototype.indexOf, uo = Array.from, sr = Object.keys, Vt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, qa = Object.getOwnPropertyDescriptors, Qa = Object.prototype, Xa = Array.prototype, ln = Object.getPrototypeOf, Ro = Object.isExtensible;
function Za(e) {
  return typeof e == "function";
}
const ge = () => {
};
function un(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ja(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const ke = 2, cn = 4, _r = 8, Ar = 16, Qe = 32, pt = 64, ir = 128, me = 256, lr = 512, pe = 1024, He = 2048, xt = 4096, ze = 8192, Nr = 16384, dn = 32768, zt = 65536, es = 1 << 19, fn = 1 << 20, Vr = 1 << 21, lt = Symbol("$state"), hn = Symbol("legacy props"), ts = Symbol("");
function vn(e) {
  return e === this.v;
}
function gn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function rs(e, t) {
  return e !== t;
}
function co(e) {
  return !gn(e, this.v);
}
function os(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ns() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function as(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ss() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function is() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ls(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function us() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let fs = !1;
function pn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ee = null;
function ko(e) {
  ee = e;
}
function fo(e) {
  return (
    /** @type {T} */
    wn().get(e)
  );
}
function xn(e, t) {
  return wn().set(e, t), t;
}
function se(e, t = !1, r) {
  var o = ee = {
    p: ee,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  ho(() => {
    o.d = !0;
  });
}
function ie(e) {
  const t = ee;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var r = U, o = Y;
      t.e = null;
      try {
        for (var n = 0; n < i.length; n++) {
          var a = i[n];
          Ve(a.effect), Ee(a.reaction), wt(a.fn);
        }
      } finally {
        Ve(r), Ee(o);
      }
    }
    ee = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function mn() {
  return !0;
}
function wn(e) {
  return ee === null && pn(), ee.c ?? (ee.c = new Map(hs(ee) || void 0));
}
function hs(e) {
  let t = e.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null)
      return r;
    t = t.p;
  }
  return null;
}
function nt(e) {
  if (typeof e != "object" || e === null || lt in e)
    return e;
  const t = ln(e);
  if (t !== Qa && t !== Xa)
    return e;
  var r = /* @__PURE__ */ new Map(), o = yr(e), n = /* @__PURE__ */ Z(0), a = Y, i = (s) => {
    var l = Y;
    Ee(a);
    var u = s();
    return Ee(l), u;
  };
  return o && r.set("length", /* @__PURE__ */ Z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && us();
        var f = r.get(l);
        return f === void 0 ? (f = i(() => /* @__PURE__ */ Z(u.value)), r.set(l, f)) : j(
          f,
          i(() => nt(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = r.get(l);
        if (u === void 0)
          l in s && (r.set(
            l,
            i(() => /* @__PURE__ */ Z(ce))
          ), Mr(n));
        else {
          if (o && typeof l == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), c = Number(l);
            Number.isInteger(c) && c < f.v && j(f, c);
          }
          j(u, ce), Mr(n);
        }
        return !0;
      },
      get(s, l, u) {
        var v;
        if (l === lt)
          return e;
        var f = r.get(l), c = l in s;
        if (f === void 0 && (!c || (v = it(s, l)) != null && v.writable) && (f = i(() => /* @__PURE__ */ Z(nt(c ? s[l] : ce))), r.set(l, f)), f !== void 0) {
          var d = g(f);
          return d === ce ? void 0 : d;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var f = r.get(l);
          f && (u.value = g(f));
        } else if (u === void 0) {
          var c = r.get(l), d = c == null ? void 0 : c.v;
          if (c !== void 0 && d !== ce)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        var d;
        if (l === lt)
          return !0;
        var u = r.get(l), f = u !== void 0 && u.v !== ce || Reflect.has(s, l);
        if (u !== void 0 || U !== null && (!f || (d = it(s, l)) != null && d.writable)) {
          u === void 0 && (u = i(() => /* @__PURE__ */ Z(f ? nt(s[l]) : ce)), r.set(l, u));
          var c = g(u);
          if (c === ce)
            return !1;
        }
        return f;
      },
      set(s, l, u, f) {
        var N;
        var c = r.get(l), d = l in s;
        if (o && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          c.v; v += 1) {
            var h = r.get(v + "");
            h !== void 0 ? j(h, ce) : v in s && (h = i(() => /* @__PURE__ */ Z(ce)), r.set(v + "", h));
          }
        c === void 0 ? (!d || (N = it(s, l)) != null && N.writable) && (c = i(() => /* @__PURE__ */ Z(void 0)), j(
          c,
          i(() => nt(u))
        ), r.set(l, c)) : (d = c.v !== ce, j(
          c,
          i(() => nt(u))
        ));
        var p = Reflect.getOwnPropertyDescriptor(s, l);
        if (p != null && p.set && p.set.call(f, u), !d) {
          if (o && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              r.get("length")
            ), _ = Number(l);
            Number.isInteger(_) && _ >= x.v && j(x, _ + 1);
          }
          Mr(n);
        }
        return !0;
      },
      ownKeys(s) {
        g(n);
        var l = Reflect.ownKeys(s).filter((c) => {
          var d = r.get(c);
          return d === void 0 || d.v !== ce;
        });
        for (var [u, f] of r)
          f.v !== ce && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        cs();
      }
    }
  );
}
function Mr(e, t = 1) {
  j(e, e.v + t);
}
function Io(e) {
  try {
    if (e !== null && typeof e == "object" && lt in e)
      return e[lt];
  } catch {
  }
  return e;
}
function vs(e, t) {
  return Object.is(Io(e), Io(t));
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  var t = ke | He, r = Y !== null && Y.f & ke ? (
    /** @type {Derived} */
    Y
  ) : null;
  return U === null || r !== null && r.f & me ? t |= me : U.f |= fn, {
    ctx: ee,
    deps: null,
    effects: null,
    equals: vn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? U
  };
}
// @__NO_SIDE_EFFECTS__
function H(e) {
  const t = /* @__PURE__ */ Yt(e);
  return Dn(t), t;
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  const t = /* @__PURE__ */ Yt(e);
  return t.equals = co, t;
}
function yn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      _e(
        /** @type {Effect} */
        t[r]
      );
  }
}
function gs(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ke))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function _n(e) {
  var t, r = U;
  Ve(gs(e));
  try {
    yn(e), t = $n(e);
  } finally {
    Ve(r);
  }
  return t;
}
function An(e) {
  var t = _n(e);
  if (e.equals(t) || (e.v = t, e.wv = Vn()), !It) {
    var r = (et || e.f & me) && e.deps !== null ? xt : pe;
    Ie(e, r);
  }
}
const Wt = /* @__PURE__ */ new Map();
function Ot(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: vn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Z(e, t) {
  const r = Ot(e);
  return Dn(r), r;
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t = !1) {
  const r = Ot(e);
  return t || (r.equals = co), r;
}
function j(e, t, r = !1) {
  Y !== null && !Fe && mn() && Y.f & (ke | Ar) && !(he != null && he.includes(e)) && ds();
  let o = r ? nt(t) : t;
  return Wr(e, o);
}
function Wr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    It ? Wt.set(e, t) : Wt.set(e, r), e.v = t, e.f & ke && (e.f & He && _n(
      /** @type {Derived} */
      e
    ), Ie(e, e.f & me ? xt : pe)), e.wv = Vn(), Nn(e, He), U !== null && U.f & pe && !(U.f & (Qe | pt)) && (Ce === null ? Ns([e]) : Ce.push(e));
  }
  return t;
}
function Nn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var o = r.length, n = 0; n < o; n++) {
      var a = r[n], i = a.f;
      i & He || (Ie(a, t), i & (pe | me) && (i & ke ? Nn(
        /** @type {Derived} */
        a,
        xt
      ) : Sr(
        /** @type {Effect} */
        a
      )));
    }
}
function Kt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ps() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let F = !1;
function Re(e) {
  F = e;
}
let V;
function we(e) {
  if (e === null)
    throw Kt(), st;
  return V = e;
}
function ct() {
  return we(
    /** @type {TemplateNode} */
    /* @__PURE__ */ $e(V)
  );
}
function k(e) {
  if (F) {
    if (/* @__PURE__ */ $e(V) !== null)
      throw Kt(), st;
    V = e;
  }
}
function ur(e = 1) {
  if (F) {
    for (var t = e, r = V; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ $e(r);
    V = r;
  }
}
function $r() {
  for (var e = 0, t = V; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === lo) {
        if (e === 0) return t;
        e -= 1;
      } else (r === so || r === io) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $e(t)
    );
    t.remove(), t = o;
  }
}
function Cn(e) {
  if (!e || e.nodeType !== 8)
    throw Kt(), st;
  return (
    /** @type {Comment} */
    e.data
  );
}
var Mo, Pn, Sn, En, Ln;
function Gr() {
  if (Mo === void 0) {
    Mo = window, Pn = document, Sn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    En = it(t, "firstChild").get, Ln = it(t, "nextSibling").get, Ro(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ro(r) && (r.__t = void 0);
  }
}
function tt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ne(e) {
  return En.call(e);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return Ln.call(e);
}
function D(e, t) {
  if (!F)
    return /* @__PURE__ */ ne(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ne(V)
  );
  if (r === null)
    r = V.appendChild(tt());
  else if (t && r.nodeType !== 3) {
    var o = tt();
    return r == null || r.before(o), we(o), o;
  }
  return we(r), r;
}
function ye(e, t) {
  if (!F) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ne(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ $e(r) : r;
  }
  return V;
}
function Q(e, t = 1, r = !1) {
  let o = F ? V : e;
  for (var n; t--; )
    n = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ $e(o);
  if (!F)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (r && a !== 3) {
    var i = tt();
    return o === null ? n == null || n.after(i) : o.before(i), we(i), i;
  }
  return we(o), /** @type {TemplateNode} */
  o;
}
function Tn(e) {
  e.textContent = "";
}
function xs(e) {
  U === null && Y === null && as(), Y !== null && Y.f & me && U === null && ns(), It && os();
}
function ms(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function mt(e, t, r, o = !0) {
  var n = U, a = {
    ctx: ee,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | He,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      po(a), a.f |= dn;
    } catch (l) {
      throw _e(a), l;
    }
  else t !== null && Sr(a);
  var i = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (fn | ir)) === 0;
  if (!i && o && (n !== null && ms(a, n), Y !== null && Y.f & ke)) {
    var s = (
      /** @type {Derived} */
      Y
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return a;
}
function ho(e) {
  const t = mt(_r, null, !1);
  return Ie(t, pe), t.teardown = e, t;
}
function Se(e) {
  xs();
  var t = U !== null && (U.f & Qe) !== 0 && ee !== null && !ee.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ee
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: U,
      reaction: Y
    });
  } else {
    var o = wt(e);
    return o;
  }
}
function ws(e) {
  const t = mt(pt, e, !0);
  return () => {
    _e(t);
  };
}
function bs(e) {
  const t = mt(pt, e, !0);
  return (r = {}) => new Promise((o) => {
    r.outro ? $t(t, () => {
      _e(t), o(void 0);
    }) : (_e(t), o(void 0));
  });
}
function wt(e) {
  return mt(cn, e, !1);
}
function vo(e) {
  return mt(_r, e, !0);
}
function ae(e, t = [], r = Yt) {
  const o = t.map(r);
  return bt(() => e(...o.map(g)));
}
function bt(e, t = 0) {
  return mt(_r | Ar | t, e, !0);
}
function Ye(e, t = !0) {
  return mt(_r | Qe, e, !0, t);
}
function On(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = It, o = Y;
    Fo(!0), Ee(null);
    try {
      t.call(null);
    } finally {
      Fo(r), Ee(o);
    }
  }
}
function Rn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var o = r.next;
    r.f & pt ? r.parent = null : _e(r, t), r = o;
  }
}
function ys(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Qe || _e(t), t = r;
  }
}
function _e(e, t = !0) {
  var r = !1;
  (t || e.f & es) && e.nodes_start !== null && (kn(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Rn(e, t && !r), vr(e, 0), Ie(e, Nr);
  var o = e.transitions;
  if (o !== null)
    for (const a of o)
      a.stop();
  On(e);
  var n = e.parent;
  n !== null && n.first !== null && In(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function kn(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $e(e)
    );
    e.remove(), e = r;
  }
}
function In(e) {
  var t = e.parent, r = e.prev, o = e.next;
  r !== null && (r.next = o), o !== null && (o.prev = r), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = r));
}
function $t(e, t) {
  var r = [];
  go(e, r, !0), Mn(r, () => {
    _e(e), t && t();
  });
}
function Mn(e, t) {
  var r = e.length;
  if (r > 0) {
    var o = () => --r || t();
    for (var n of e)
      n.out(o);
  } else
    t();
}
function go(e, t, r) {
  if (!(e.f & ze)) {
    if (e.f ^= ze, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || r) && t.push(i);
    for (var o = e.first; o !== null; ) {
      var n = o.next, a = (o.f & zt) !== 0 || (o.f & Qe) !== 0;
      go(o, t, a ? r : !1), o = n;
    }
  }
}
function cr(e) {
  Fn(e, !0);
}
function Fn(e, t) {
  if (e.f & ze) {
    e.f ^= ze, e.f & pe || (e.f ^= pe), qt(e) && (Ie(e, He), Sr(e));
    for (var r = e.first; r !== null; ) {
      var o = r.next, n = (r.f & zt) !== 0 || (r.f & Qe) !== 0;
      Fn(r, n ? t : !1), r = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Gt = [], Ur = [];
function Bn() {
  var e = Gt;
  Gt = [], un(e);
}
function _s() {
  var e = Ur;
  Ur = [], un(e);
}
function kt(e) {
  Gt.length === 0 && queueMicrotask(Bn), Gt.push(e);
}
function As() {
  Gt.length > 0 && Bn(), Ur.length > 0 && _s();
}
let or = !1, dr = !1, fr = null, ut = !1, It = !1;
function Fo(e) {
  It = e;
}
let Ht = [];
let Y = null, Fe = !1;
function Ee(e) {
  Y = e;
}
let U = null;
function Ve(e) {
  U = e;
}
let he = null;
function Dn(e) {
  Y !== null && Y.f & Vr && (he === null ? he = [e] : he.push(e));
}
let de = null, xe = 0, Ce = null;
function Ns(e) {
  Ce = e;
}
let Hn = 1, hr = 0, et = !1;
function Vn() {
  return ++Hn;
}
function qt(e) {
  var c;
  var t = e.f;
  if (t & He)
    return !0;
  if (t & xt) {
    var r = e.deps, o = (t & me) !== 0;
    if (r !== null) {
      var n, a, i = (t & lr) !== 0, s = o && U !== null && !et, l = r.length;
      if (i || s) {
        var u = (
          /** @type {Derived} */
          e
        ), f = u.parent;
        for (n = 0; n < l; n++)
          a = r[n], (i || !((c = a == null ? void 0 : a.reactions) != null && c.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        i && (u.f ^= lr), s && f !== null && !(f.f & me) && (u.f ^= me);
      }
      for (n = 0; n < l; n++)
        if (a = r[n], qt(
          /** @type {Derived} */
          a
        ) && An(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || U !== null && !et) && Ie(e, pe);
  }
  return !1;
}
function Cs(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & ir)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= ir;
      }
    r = r.parent;
  }
  throw or = !1, e;
}
function Bo(e) {
  return (e.f & Nr) === 0 && (e.parent === null || (e.parent.f & ir) === 0);
}
function Pr(e, t, r, o) {
  if (or) {
    if (r === null && (or = !1), Bo(t))
      throw e;
    return;
  }
  if (r !== null && (or = !0), Cs(e, t), Bo(t))
    throw e;
}
function Wn(e, t, r = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var n = 0; n < o.length; n++) {
      var a = o[n];
      he != null && he.includes(e) || (a.f & ke ? Wn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Ie(a, He) : a.f & pe && Ie(a, xt), Sr(
        /** @type {Effect} */
        a
      )));
    }
}
function $n(e) {
  var v;
  var t = de, r = xe, o = Ce, n = Y, a = et, i = he, s = ee, l = Fe, u = e.f;
  de = /** @type {null | Value[]} */
  null, xe = 0, Ce = null, et = (u & me) !== 0 && (Fe || !ut || Y === null), Y = u & (Qe | pt) ? null : e, he = null, ko(e.ctx), Fe = !1, hr++, e.f |= Vr;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (de !== null) {
      var d;
      if (vr(e, xe), c !== null && xe > 0)
        for (c.length = xe + de.length, d = 0; d < de.length; d++)
          c[xe + d] = de[d];
      else
        e.deps = c = de;
      if (!et)
        for (d = xe; d < c.length; d++)
          ((v = c[d]).reactions ?? (v.reactions = [])).push(e);
    } else c !== null && xe < c.length && (vr(e, xe), c.length = xe);
    if (mn() && Ce !== null && !Fe && c !== null && !(e.f & (ke | xt | He)))
      for (d = 0; d < /** @type {Source[]} */
      Ce.length; d++)
        Wn(
          Ce[d],
          /** @type {Effect} */
          e
        );
    return n !== null && n !== e && (hr++, Ce !== null && (o === null ? o = Ce : o.push(.../** @type {Source[]} */
    Ce))), f;
  } finally {
    de = t, xe = r, Ce = o, Y = n, et = a, he = i, ko(s), Fe = l, e.f ^= Vr;
  }
}
function Ps(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var o = Ka.call(r, e);
    if (o !== -1) {
      var n = r.length - 1;
      n === 0 ? r = t.reactions = null : (r[o] = r[n], r.pop());
    }
  }
  r === null && t.f & ke && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (de === null || !de.includes(t)) && (Ie(t, xt), t.f & (me | lr) || (t.f ^= lr), yn(
    /** @type {Derived} **/
    t
  ), vr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function vr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var o = t; o < r.length; o++)
      Ps(e, r[o]);
}
function po(e) {
  var t = e.f;
  if (!(t & Nr)) {
    Ie(e, pe);
    var r = U, o = ee, n = ut;
    U = e, ut = !0;
    try {
      t & Ar ? ys(e) : Rn(e), On(e);
      var a = $n(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Hn;
      var i = e.deps, s;
      Oo && fs && e.f & He;
    } catch (l) {
      Pr(l, e, r, o || e.ctx);
    } finally {
      ut = n, U = r;
    }
  }
}
function Ss() {
  try {
    ss();
  } catch (e) {
    if (fr !== null)
      Pr(e, fr, null);
    else
      throw e;
  }
}
function Gn() {
  var e = ut;
  try {
    var t = 0;
    for (ut = !0; Ht.length > 0; ) {
      t++ > 1e3 && Ss();
      var r = Ht, o = r.length;
      Ht = [];
      for (var n = 0; n < o; n++) {
        var a = Ls(r[n]);
        Es(a);
      }
      Wt.clear();
    }
  } finally {
    dr = !1, ut = e, fr = null;
  }
}
function Es(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      if (!(o.f & (Nr | ze)))
        try {
          qt(o) && (po(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? In(o) : o.fn = null));
        } catch (n) {
          Pr(n, o, null, o.ctx);
        }
    }
}
function Sr(e) {
  dr || (dr = !0, queueMicrotask(Gn));
  for (var t = fr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (pt | Qe)) {
      if (!(r & pe)) return;
      t.f ^= pe;
    }
  }
  Ht.push(t);
}
function Ls(e) {
  for (var t = [], r = e; r !== null; ) {
    var o = r.f, n = (o & (Qe | pt)) !== 0, a = n && (o & pe) !== 0;
    if (!a && !(o & ze)) {
      if (o & cn)
        t.push(r);
      else if (n)
        r.f ^= pe;
      else
        try {
          qt(r) && po(r);
        } catch (l) {
          Pr(l, r, null, r.ctx);
        }
      var i = r.first;
      if (i !== null) {
        r = i;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function b(e) {
  for (var t; ; ) {
    if (As(), Ht.length === 0)
      return (
        /** @type {T} */
        t
      );
    dr = !0, Gn();
  }
}
function g(e) {
  var t = e.f, r = (t & ke) !== 0;
  if (Y !== null && !Fe) {
    if (!(he != null && he.includes(e))) {
      var o = Y.deps;
      e.rv < hr && (e.rv = hr, de === null && o !== null && o[xe] === e ? xe++ : de === null ? de = [e] : (!et || !de.includes(e)) && de.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var n = (
      /** @type {Derived} */
      e
    ), a = n.parent;
    a !== null && !(a.f & me) && (n.f ^= me);
  }
  return r && (n = /** @type {Derived} */
  e, qt(n) && An(n)), It && Wt.has(e) ? Wt.get(e) : e.v;
}
function We(e) {
  var t = Fe;
  try {
    return Fe = !0, e();
  } finally {
    Fe = t;
  }
}
const Ts = -7169;
function Ie(e, t) {
  e.f = e.f & Ts | t;
}
function Os(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, kt(() => {
      document.activeElement === r && e.focus();
    });
  }
}
function Un(e) {
  var t = Y, r = U;
  Ee(null), Ve(null);
  try {
    return e();
  } finally {
    Ee(t), Ve(r);
  }
}
const jn = /* @__PURE__ */ new Set(), jr = /* @__PURE__ */ new Set();
function zn(e, t, r, o = {}) {
  function n(a) {
    if (o.capture || Dt.call(t, a), !a.cancelBubble)
      return Un(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? kt(() => {
    t.addEventListener(e, n, o);
  }) : t.addEventListener(e, n, o), n;
}
function Rs(e, t, r, o, n) {
  var a = { capture: o, passive: n }, i = zn(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ho(() => {
    t.removeEventListener(e, i, a);
  });
}
function xo(e) {
  for (var t = 0; t < e.length; t++)
    jn.add(e[t]);
  for (var r of jr)
    r(e);
}
function Dt(e) {
  var N;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, n = ((N = e.composedPath) == null ? void 0 : N.call(e)) || [], a = (
    /** @type {null | Element} */
    n[0] || e.target
  ), i = 0, s = e.__root;
  if (s) {
    var l = n.indexOf(s);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = n.indexOf(t);
    if (u === -1)
      return;
    l <= u && (i = l);
  }
  if (a = /** @type {Element} */
  n[i] || e.target, a !== t) {
    Vt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = Y, c = U;
    Ee(null), Ve(null);
    try {
      for (var d, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + o];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (yr(p)) {
              var [x, ..._] = p;
              x.apply(a, [e, ..._]);
            } else
              p.call(a, e);
        } catch (w) {
          d ? v.push(w) : d = w;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (d) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ee(f), Ve(c);
    }
  }
}
function mo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function be(e, t) {
  var r = (
    /** @type {Effect} */
    U
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ae(e, t) {
  var r = (t & sn) !== 0, o = (t & ja) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (F)
      return be(V, null), V;
    n === void 0 && (n = mo(a ? e : "<!>" + e), r || (n = /** @type {Node} */
    /* @__PURE__ */ ne(n)));
    var i = (
      /** @type {TemplateNode} */
      o || Sn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ne(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      be(s, l);
    } else
      be(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function ks(e, t, r = "svg") {
  var o = !e.startsWith("<!>"), n = (t & sn) !== 0, a = `<${r}>${o ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (F)
      return be(V, null), V;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        mo(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ ne(s)
      );
      if (n)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ ne(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ ne(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ ne(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ne(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      be(f, c);
    } else
      be(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function le(e, t) {
  return /* @__PURE__ */ ks(e, t, "svg");
}
function Do(e = "") {
  if (!F) {
    var t = tt(e + "");
    return be(t, t), t;
  }
  var r = V;
  return r.nodeType !== 3 && (r.before(r = tt()), we(r)), be(r, r), r;
}
function dt() {
  if (F)
    return be(V, null), V;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = tt();
  return e.append(t, r), be(t, r), e;
}
function M(e, t) {
  if (F) {
    U.nodes_end = V, ct();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Is(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ms = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Fs(e) {
  return Ms.includes(e);
}
const Bs = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Ds(e) {
  return e = e.toLowerCase(), Bs[e] ?? e;
}
const Hs = ["touchstart", "touchmove"];
function Vs(e) {
  return Hs.includes(e);
}
let zr = !0;
function je(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Yn(e, t) {
  return Kn(e, t);
}
function Ws(e, t) {
  Gr(), t.intro = t.intro ?? !1;
  const r = t.target, o = F, n = V;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ne(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== so); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ $e(a);
    if (!a)
      throw st;
    Re(!0), we(
      /** @type {Comment} */
      a
    ), ct();
    const i = Kn(e, { ...t, anchor: a });
    if (V === null || V.nodeType !== 8 || /** @type {Comment} */
    V.data !== lo)
      throw Kt(), st;
    return Re(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === st)
      return t.recover === !1 && is(), Gr(), Tn(r), Re(!1), Yn(e, t);
    throw i;
  } finally {
    Re(o), we(n);
  }
}
const Nt = /* @__PURE__ */ new Map();
function Kn(e, { target: t, anchor: r, props: o = {}, events: n, context: a, intro: i = !0 }) {
  Gr();
  var s = /* @__PURE__ */ new Set(), l = (c) => {
    for (var d = 0; d < c.length; d++) {
      var v = c[d];
      if (!s.has(v)) {
        s.add(v);
        var h = Vs(v);
        t.addEventListener(v, Dt, { passive: h });
        var p = Nt.get(v);
        p === void 0 ? (document.addEventListener(v, Dt, { passive: h }), Nt.set(v, 1)) : Nt.set(v, p + 1);
      }
    }
  };
  l(uo(jn)), jr.add(l);
  var u = void 0, f = bs(() => {
    var c = r ?? t.appendChild(tt());
    return Ye(() => {
      if (a) {
        se({});
        var d = (
          /** @type {ComponentContext} */
          ee
        );
        d.c = a;
      }
      n && (o.$$events = n), F && be(
        /** @type {TemplateNode} */
        c,
        null
      ), zr = i, u = e(c, o) || {}, zr = !0, F && (U.nodes_end = V), a && ie();
    }), () => {
      var h;
      for (var d of s) {
        t.removeEventListener(d, Dt);
        var v = (
          /** @type {number} */
          Nt.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, Dt), Nt.delete(d)) : Nt.set(d, v);
      }
      jr.delete(l), c !== r && ((h = c.parentNode) == null || h.removeChild(c));
    };
  });
  return Yr.set(u, f), u;
}
let Yr = /* @__PURE__ */ new WeakMap();
function $s(e, t) {
  const r = Yr.get(e);
  return r ? (Yr.delete(e), r(t)) : Promise.resolve();
}
function qn(e, t, ...r) {
  var o = e, n = ge, a;
  bt(() => {
    n !== (n = t()) && (a && (_e(a), a = null), a = Ye(() => (
      /** @type {SnippetFn} */
      n(o, ...r)
    )));
  }, zt), F && (o = V);
}
function ft(e) {
  ee === null && pn(), Se(() => {
    const t = We(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function fe(e, t, [r, o] = [0, 0]) {
  F && r === 0 && ct();
  var n = e, a = null, i = null, s = ce, l = r > 0 ? zt : 0, u = !1;
  const f = (d, v = !0) => {
    u = !0, c(v, d);
  }, c = (d, v) => {
    if (s === (s = d)) return;
    let h = !1;
    if (F && o !== -1) {
      if (r === 0) {
        const x = Cn(n);
        x === so ? o = 0 : x === io ? o = 1 / 0 : (o = parseInt(x.substring(1)), o !== o && (o = s ? 1 / 0 : -1));
      }
      const p = o > r;
      !!s === p && (n = $r(), we(n), Re(!1), h = !0, o = -1);
    }
    s ? (a ? cr(a) : v && (a = Ye(() => v(n))), i && $t(i, () => {
      i = null;
    })) : (i ? cr(i) : v && (i = Ye(() => v(n, [r + 1, o]))), a && $t(a, () => {
      a = null;
    })), h && Re(!0);
  };
  bt(() => {
    u = !1, t(f), u || c(null, null);
  }, l), F && (n = V);
}
function Gs(e, t, r) {
  F && ct();
  var o = e, n = ce, a, i = rs;
  bt(() => {
    i(n, n = t()) && (a && $t(a), a = Ye(() => r(o)));
  }), F && (o = V);
}
function Ke(e, t) {
  return t;
}
function Us(e, t, r, o) {
  for (var n = [], a = t.length, i = 0; i < a; i++)
    go(t[i].e, n, !0);
  var s = a > 0 && n.length === 0 && r !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Tn(l), l.append(
      /** @type {Element} */
      r
    ), o.clear(), Ze(e, t[0].prev, t[a - 1].next);
  }
  Mn(n, () => {
    for (var u = 0; u < a; u++) {
      var f = t[u];
      s || (o.delete(f.k), Ze(e, f.prev, f.next)), _e(f.e, !s);
    }
  });
}
function qe(e, t, r, o, n, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & an) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = F ? we(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ne(u)
    ) : u.appendChild(tt());
  }
  F && ct();
  var f = null, c = !1, d = /* @__PURE__ */ bn(() => {
    var v = r();
    return yr(v) ? v : v == null ? [] : uo(v);
  });
  bt(() => {
    var v = g(d), h = v.length;
    if (c && h === 0)
      return;
    c = h === 0;
    let p = !1;
    if (F) {
      var x = Cn(i) === io;
      x !== (h === 0) && (i = $r(), we(i), Re(!1), p = !0);
    }
    if (F) {
      for (var _ = null, N, w = 0; w < h; w++) {
        if (V.nodeType === 8 && /** @type {Comment} */
        V.data === lo) {
          i = /** @type {Comment} */
          V, p = !0, Re(!1);
          break;
        }
        var m = v[w], P = o(m, w);
        N = Qn(
          V,
          s,
          _,
          null,
          m,
          P,
          w,
          n,
          t,
          r
        ), s.items.set(P, N), _ = N;
      }
      h > 0 && we($r());
    }
    F || js(v, s, i, n, t, o, r), a !== null && (h === 0 ? f ? cr(f) : f = Ye(() => a(i)) : f !== null && $t(f, () => {
      f = null;
    })), p && Re(!0), g(d);
  }), F && (i = V);
}
function js(e, t, r, o, n, a, i) {
  var G, C, O, R;
  var s = (n & Fa) !== 0, l = (n & (no | ao)) !== 0, u = e.length, f = t.items, c = t.first, d = c, v, h = null, p, x = [], _ = [], N, w, m, P;
  if (s)
    for (P = 0; P < u; P += 1)
      N = e[P], w = a(N, P), m = f.get(w), m !== void 0 && ((G = m.a) == null || G.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(m));
  for (P = 0; P < u; P += 1) {
    if (N = e[P], w = a(N, P), m = f.get(w), m === void 0) {
      var A = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : r;
      h = Qn(
        A,
        t,
        h,
        h === null ? t.first : h.next,
        N,
        w,
        P,
        o,
        n,
        i
      ), f.set(w, h), x = [], _ = [], d = h.next;
      continue;
    }
    if (l && zs(m, N, P, n), m.e.f & ze && (cr(m.e), s && ((C = m.a) == null || C.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(m))), m !== d) {
      if (v !== void 0 && v.has(m)) {
        if (x.length < _.length) {
          var S = _[0], T;
          h = S.prev;
          var I = x[0], L = x[x.length - 1];
          for (T = 0; T < x.length; T += 1)
            Ho(x[T], S, r);
          for (T = 0; T < _.length; T += 1)
            v.delete(_[T]);
          Ze(t, I.prev, L.next), Ze(t, h, I), Ze(t, L, S), d = S, h = L, P -= 1, x = [], _ = [];
        } else
          v.delete(m), Ho(m, d, r), Ze(t, m.prev, m.next), Ze(t, m, h === null ? t.first : h.next), Ze(t, h, m), h = m;
        continue;
      }
      for (x = [], _ = []; d !== null && d.k !== w; )
        d.e.f & ze || (v ?? (v = /* @__PURE__ */ new Set())).add(d), _.push(d), d = d.next;
      if (d === null)
        continue;
      m = d;
    }
    x.push(m), h = m, d = m.next;
  }
  if (d !== null || v !== void 0) {
    for (var W = v === void 0 ? [] : uo(v); d !== null; )
      d.e.f & ze || W.push(d), d = d.next;
    var q = W.length;
    if (q > 0) {
      var $ = n & an && u === 0 ? r : null;
      if (s) {
        for (P = 0; P < q; P += 1)
          (O = W[P].a) == null || O.measure();
        for (P = 0; P < q; P += 1)
          (R = W[P].a) == null || R.fix();
      }
      Us(t, W, $, f);
    }
  }
  s && kt(() => {
    var K;
    if (p !== void 0)
      for (m of p)
        (K = m.a) == null || K.apply();
  }), U.first = t.first && t.first.e, U.last = h && h.e;
}
function zs(e, t, r, o) {
  o & no && Wr(e.v, t), o & ao ? Wr(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Qn(e, t, r, o, n, a, i, s, l, u) {
  var f = (l & no) !== 0, c = (l & Ba) === 0, d = f ? c ? /* @__PURE__ */ Cr(n) : Ot(n) : n, v = l & ao ? Ot(i) : i, h = {
    i: v,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: o
  };
  try {
    return h.e = Ye(() => s(e, d, v, u), F), h.e.prev = r && r.e, h.e.next = o && o.e, r === null ? t.first = h : (r.next = h, r.e.next = h.e), o !== null && (o.prev = h, o.e.prev = h.e), h;
  } finally {
  }
}
function Ho(e, t, r) {
  for (var o = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, n = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== o; ) {
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $e(a)
    );
    n.before(a), a = i;
  }
}
function Ze(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Jt(e, t, r = !1, o = !1, n = !1) {
  var a = e, i = "";
  ae(() => {
    var s = (
      /** @type {Effect} */
      U
    );
    if (i === (i = t() ?? "")) {
      F && ct();
      return;
    }
    if (s.nodes_start !== null && (kn(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), i !== "") {
      if (F) {
        V.data;
        for (var l = ct(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ $e(l);
        if (l === null)
          throw Kt(), st;
        be(V, u), a = we(l);
        return;
      }
      var f = i + "";
      r ? f = `<svg>${f}</svg>` : o && (f = `<math>${f}</math>`);
      var c = mo(f);
      if ((r || o) && (c = /** @type {Element} */
      /* @__PURE__ */ ne(c)), be(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ne(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), r || o)
        for (; /* @__PURE__ */ ne(c); )
          a.before(
            /** @type {Node} */
            /* @__PURE__ */ ne(c)
          );
      else
        a.before(c);
    }
  });
}
function Me(e, t) {
  kt(() => {
    var r = e.getRootNode(), o = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!o.querySelector("#" + t.hash)) {
      const n = document.createElement("style");
      n.id = t.hash, n.textContent = t.code, o.appendChild(n);
    }
  });
}
function Ys(e, t) {
  var r = void 0, o;
  bt(() => {
    r !== (r = t()) && (o && (_e(o), o = null), r && (o = Ye(() => {
      wt(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function Xn(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Xn(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Ks() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Xn(e)) && (o && (o += " "), o += t);
  return o;
}
function qs(e) {
  return typeof e == "object" ? Ks(e) : e ?? "";
}
const Vo = [...` 	
\r\f \v\uFEFF`];
function Qs(e, t, r) {
  var o = e == null ? "" : "" + e;
  if (t && (o = o ? o + " " + t : t), r) {
    for (var n in r)
      if (r[n])
        o = o ? o + " " + n : n;
      else if (o.length)
        for (var a = n.length, i = 0; (i = o.indexOf(n, i)) >= 0; ) {
          var s = i + a;
          (i === 0 || Vo.includes(o[i - 1])) && (s === o.length || Vo.includes(o[s])) ? o = (i === 0 ? "" : o.substring(0, i)) + o.substring(s + 1) : i = s;
        }
  }
  return o === "" ? null : o;
}
function Wo(e, t = !1) {
  var r = t ? " !important;" : ";", o = "";
  for (var n in e) {
    var a = e[n];
    a != null && a !== "" && (o += " " + n + ": " + a + r);
  }
  return o;
}
function Fr(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Xs(e, t) {
  if (t) {
    var r = "", o, n;
    if (Array.isArray(t) ? (o = t[0], n = t[1]) : o = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, i = 0, s = !1, l = [];
      o && l.push(...Object.keys(o).map(Fr)), n && l.push(...Object.keys(n).map(Fr));
      var u = 0, f = -1;
      const p = e.length;
      for (var c = 0; c < p; c++) {
        var d = e[c];
        if (s ? d === "/" && e[c - 1] === "*" && (s = !1) : a ? a === d && (a = !1) : d === "/" && e[c + 1] === "*" ? s = !0 : d === '"' || d === "'" ? a = d : d === "(" ? i++ : d === ")" && i--, !s && a === !1 && i === 0) {
          if (d === ":" && f === -1)
            f = c;
          else if (d === ";" || c === p - 1) {
            if (f !== -1) {
              var v = Fr(e.substring(u, f).trim());
              if (!l.includes(v)) {
                d !== ";" && c++;
                var h = e.substring(u, c).trim();
                r += " " + h + ";";
              }
            }
            u = c + 1, f = -1;
          }
        }
      }
    }
    return o && (r += Wo(o)), n && (r += Wo(n, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function Er(e, t, r, o, n, a) {
  var i = e.__className;
  if (F || i !== r || i === void 0) {
    var s = Qs(r, o, a);
    (!F || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = r;
  } else if (a && n !== a)
    for (var l in a) {
      var u = !!a[l];
      (n == null || u !== !!n[l]) && e.classList.toggle(l, u);
    }
  return a;
}
function Br(e, t = {}, r, o) {
  for (var n in r) {
    var a = r[n];
    t[n] !== a && (r[n] == null ? e.style.removeProperty(n) : e.style.setProperty(n, a, o));
  }
}
function De(e, t, r, o) {
  var n = e.__style;
  if (F || n !== t) {
    var a = Xs(t, o);
    (!F || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  } else o && (Array.isArray(o) ? (Br(e, r == null ? void 0 : r[0], o[0]), Br(e, r == null ? void 0 : r[1], o[1], "important")) : Br(e, r, o));
  return o;
}
function Kr(e, t, r) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!yr(t))
      return ps();
    for (var o of e.options)
      o.selected = t.includes($o(o));
    return;
  }
  for (o of e.options) {
    var n = $o(o);
    if (vs(n, t)) {
      o.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Zs(e, t) {
  let r = !0;
  wt(() => {
    t && Kr(e, We(t), r), r = !1;
    var o = new MutationObserver(() => {
      var n = e.__value;
      Kr(e, n);
    });
    return o.observe(e, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      o.disconnect();
    };
  });
}
function $o(e) {
  return "__value" in e ? e.__value : e.value;
}
const Pt = Symbol("class"), St = Symbol("style"), Zn = Symbol("is custom element"), Jn = Symbol("is html");
function Js(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function z(e, t, r, o) {
  var n = ea(e);
  F && (n[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || n[t] !== (n[t] = r) && (t === "loading" && (e[ts] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ta(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function ei(e, t, r, o, n = !1) {
  var a = ea(e), i = a[Zn], s = !a[Jn];
  let l = F && i;
  l && Re(!1);
  var u = t || {}, f = e.tagName === "OPTION";
  for (var c in t)
    c in r || (r[c] = null);
  r.class ? r.class = qs(r.class) : (o || r[Pt]) && (r.class = null), r[St] && (r.style ?? (r.style = null));
  var d = ta(e);
  for (const w in r) {
    let m = r[w];
    if (f && w === "value" && m == null) {
      e.value = e.__value = "", u[w] = m;
      continue;
    }
    if (w === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Er(e, v, m, o, t == null ? void 0 : t[Pt], r[Pt]), u[w] = m, u[Pt] = r[Pt];
      continue;
    }
    if (w === "style") {
      De(e, m, t == null ? void 0 : t[St], r[St]), u[w] = m, u[St] = r[St];
      continue;
    }
    var h = u[w];
    if (m !== h) {
      u[w] = m;
      var p = w[0] + w[1];
      if (p !== "$$")
        if (p === "on") {
          const P = {}, A = "$$" + w;
          let S = w.slice(2);
          var x = Fs(S);
          if (Is(S) && (S = S.slice(0, -7), P.capture = !0), !x && h) {
            if (m != null) continue;
            e.removeEventListener(S, u[A], P), u[A] = null;
          }
          if (m != null)
            if (x)
              e[`__${S}`] = m, xo([S]);
            else {
              let T = function(I) {
                u[w].call(this, I);
              };
              u[A] = zn(S, e, T, P);
            }
          else x && (e[`__${S}`] = void 0);
        } else if (w === "style")
          z(e, w, m);
        else if (w === "autofocus")
          Os(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!i && (w === "__value" || w === "value" && m != null))
          e.value = e.__value = m;
        else if (w === "selected" && f)
          Js(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var _ = w;
          s || (_ = Ds(_));
          var N = _ === "defaultValue" || _ === "defaultChecked";
          if (m == null && !i && !N)
            if (a[w] = null, _ === "value" || _ === "checked") {
              let P = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (_ === "value") {
                let S = P.defaultValue;
                P.removeAttribute(_), P.defaultValue = S, P.value = P.__value = A ? S : null;
              } else {
                let S = P.defaultChecked;
                P.removeAttribute(_), P.defaultChecked = S, P.checked = A ? S : !1;
              }
            } else
              e.removeAttribute(w);
          else N || d.includes(_) && (i || typeof m != "string") ? e[_] = m : typeof m != "function" && z(e, _, m);
        }
    }
  }
  return l && Re(!0), u;
}
function gr(e, t, r = [], o, n = !1, a = Yt) {
  const i = r.map(a);
  var s = void 0, l = {}, u = e.nodeName === "SELECT", f = !1;
  bt(() => {
    var c = t(...i.map(g));
    ei(e, s, c, o, n), f && u && "value" in c && Kr(
      /** @type {HTMLSelectElement} */
      e,
      c.value,
      !1
    );
    for (let v of Object.getOwnPropertySymbols(l))
      c[v] || _e(l[v]);
    for (let v of Object.getOwnPropertySymbols(c)) {
      var d = c[v];
      v.description === Ya && (!s || d !== s[v]) && (l[v] && _e(l[v]), l[v] = Ye(() => Ys(e, () => d)));
    }
    s = c;
  }), u && Zs(
    /** @type {HTMLSelectElement} */
    e,
    () => (
      /** @type {Record<string | symbol, any>} */
      s.value
    )
  ), f = !0;
}
function ea(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Zn]: e.nodeName.includes("-"),
      [Jn]: e.namespaceURI === za
    })
  );
}
var Go = /* @__PURE__ */ new Map();
function ta(e) {
  var t = Go.get(e.nodeName);
  if (t) return t;
  Go.set(e.nodeName, t = []);
  for (var r, o = e, n = Element.prototype; n !== o; ) {
    r = qa(o);
    for (var a in r)
      r[a].set && t.push(a);
    o = ln(o);
  }
  return t;
}
const ti = () => performance.now(), Be = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => ti(),
  tasks: /* @__PURE__ */ new Set()
};
function ra() {
  const e = Be.now();
  Be.tasks.forEach((t) => {
    t.c(e) || (Be.tasks.delete(t), t.f());
  }), Be.tasks.size !== 0 && Be.tick(ra);
}
function oa(e) {
  let t;
  return Be.tasks.size === 0 && Be.tick(ra), {
    promise: new Promise((r) => {
      Be.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      Be.tasks.delete(t);
    }
  };
}
function er(e, t) {
  Un(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function ri(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Uo(e) {
  const t = {}, r = e.split(";");
  for (const o of r) {
    const [n, a] = o.split(":");
    if (!n || a === void 0) break;
    const i = ri(n.trim());
    t[i] = a.trim();
  }
  return t;
}
const oi = (e) => e;
function ht(e, t, r, o) {
  var n = (e & $a) !== 0, a = (e & Ga) !== 0, i = n && a, s = (e & Ua) !== 0, l = i ? "both" : n ? "in" : "out", u, f = t.inert, c = t.style.overflow, d, v;
  function h() {
    var w = Y, m = U;
    Ee(null), Ve(null);
    try {
      return u ?? (u = r()(t, (o == null ? void 0 : o()) ?? /** @type {P} */
      {}, {
        direction: l
      }));
    } finally {
      Ee(w), Ve(m);
    }
  }
  var p = {
    is_global: s,
    in() {
      var w;
      if (t.inert = f, !n) {
        v == null || v.abort(), (w = v == null ? void 0 : v.reset) == null || w.call(v);
        return;
      }
      a || d == null || d.abort(), er(t, "introstart"), d = qr(t, h(), v, 1, () => {
        er(t, "introend"), d == null || d.abort(), d = u = void 0, t.style.overflow = c;
      });
    },
    out(w) {
      if (!a) {
        w == null || w(), u = void 0;
        return;
      }
      t.inert = !0, er(t, "outrostart"), v = qr(t, h(), d, 0, () => {
        er(t, "outroend"), w == null || w();
      });
    },
    stop: () => {
      d == null || d.abort(), v == null || v.abort();
    }
  }, x = (
    /** @type {Effect} */
    U
  );
  if ((x.transitions ?? (x.transitions = [])).push(p), n && zr) {
    var _ = s;
    if (!_) {
      for (var N = (
        /** @type {Effect | null} */
        x.parent
      ); N && N.f & zt; )
        for (; (N = N.parent) && !(N.f & Ar); )
          ;
      _ = !N || (N.f & dn) !== 0;
    }
    _ && wt(() => {
      We(() => p.in());
    });
  }
}
function qr(e, t, r, o, n) {
  var a = o === 1;
  if (Za(t)) {
    var i, s = !1;
    return kt(() => {
      if (!s) {
        var x = t({ direction: a ? "in" : "out" });
        i = qr(e, x, r, o, n);
      }
    }), {
      abort: () => {
        s = !0, i == null || i.abort();
      },
      deactivate: () => i.deactivate(),
      reset: () => i.reset(),
      t: () => i.t()
    };
  }
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return n(), {
      abort: ge,
      deactivate: ge,
      reset: ge,
      t: () => o
    };
  const { delay: l = 0, css: u, tick: f, easing: c = oi } = t;
  var d = [];
  if (a && r === void 0 && (f && f(0, 1), u)) {
    var v = Uo(u(0, 1));
    d.push(v, v);
  }
  var h = () => 1 - o, p = e.animate(d, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var x = (r == null ? void 0 : r.t()) ?? 1 - o;
    r == null || r.abort();
    var _ = o - x, N = (
      /** @type {number} */
      t.duration * Math.abs(_)
    ), w = [];
    if (N > 0) {
      var m = !1;
      if (u)
        for (var P = Math.ceil(N / 16.666666666666668), A = 0; A <= P; A += 1) {
          var S = x + _ * c(A / P), T = Uo(u(S, 1 - S));
          w.push(T), m || (m = T.overflow === "hidden");
        }
      m && (e.style.overflow = "hidden"), h = () => {
        var I = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return x + _ * c(I / N);
      }, f && oa(() => {
        if (p.playState !== "running") return !1;
        var I = h();
        return f(I, 1 - I), !0;
      });
    }
    p = e.animate(w, { duration: N, fill: "forwards" }), p.onfinish = () => {
      h = () => o, f == null || f(o, 1 - o), n();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = ge);
    },
    deactivate: () => {
      n = ge;
    },
    reset: () => {
      o === 0 && (f == null || f(1, 0));
    },
    t: () => h()
  };
}
var Je, Lt, Ut, wr, na;
const br = class br {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Oe(this, wr);
    /** */
    Oe(this, Je, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Oe(this, Lt);
    /** @type {ResizeObserverOptions} */
    Oe(this, Ut);
    ot(this, Ut, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var o = B(this, Je).get(t) || /* @__PURE__ */ new Set();
    return o.add(r), B(this, Je).set(t, o), To(this, wr, na).call(this).observe(t, B(this, Ut)), () => {
      var n = B(this, Je).get(t);
      n.delete(r), n.size === 0 && (B(this, Je).delete(t), B(this, Lt).unobserve(t));
    };
  }
};
Je = new WeakMap(), Lt = new WeakMap(), Ut = new WeakMap(), wr = new WeakSet(), na = function() {
  return B(this, Lt) ?? ot(this, Lt, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        br.entries.set(r.target, r);
        for (var o of B(this, Je).get(r.target) || [])
          o(r);
      }
    }
  ));
}, /** @static */
Ne(br, "entries", /* @__PURE__ */ new WeakMap());
let Qr = br;
var ni = /* @__PURE__ */ new Qr({
  box: "border-box"
});
function ai(e, t, r) {
  var o = ni.observe(e, () => r(e[t]));
  wt(() => (We(() => r(e[t])), o));
}
function jo(e, t) {
  return e === t || (e == null ? void 0 : e[lt]) === t;
}
function Qt(e = {}, t, r, o) {
  return wt(() => {
    var n, a;
    return vo(() => {
      n = a, a = [], We(() => {
        e !== r(...a) && (t(e, ...a), n && jo(r(...n), e) && t(null, ...n));
      });
    }), () => {
      kt(() => {
        a && jo(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function aa(e, t, r) {
  if (e == null)
    return t(void 0), ge;
  const o = We(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const Ct = [];
function Rt(e, t = ge) {
  let r = null;
  const o = /* @__PURE__ */ new Set();
  function n(s) {
    if (gn(e, s) && (e = s, r)) {
      const l = !Ct.length;
      for (const u of o)
        u[1](), Ct.push(u, e);
      if (l) {
        for (let u = 0; u < Ct.length; u += 2)
          Ct[u][0](Ct[u + 1]);
        Ct.length = 0;
      }
    }
  }
  function a(s) {
    n(s(
      /** @type {T} */
      e
    ));
  }
  function i(s, l = ge) {
    const u = [s, l];
    return o.add(u), o.size === 1 && (r = t(n, a) || ge), s(
      /** @type {T} */
      e
    ), () => {
      o.delete(u), o.size === 0 && r && (r(), r = null);
    };
  }
  return { set: n, update: a, subscribe: i };
}
function sa(e) {
  let t;
  return aa(e, (r) => t = r)(), t;
}
let tr = !1, Xr = Symbol();
function pr(e, t, r) {
  const o = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Cr(void 0),
    unsubscribe: ge
  });
  if (o.store !== e && !(Xr in r))
    if (o.unsubscribe(), o.store = e ?? null, e == null)
      o.source.v = void 0, o.unsubscribe = ge;
    else {
      var n = !0;
      o.unsubscribe = aa(e, (a) => {
        n ? o.source.v = a : j(o.source, a);
      }), n = !1;
    }
  return e && Xr in r ? sa(e) : g(o.source);
}
function vt(e, t) {
  return e.set(t), t;
}
function Mt() {
  const e = {};
  function t() {
    ho(() => {
      for (var r in e)
        e[r].unsubscribe();
      Vt(e, Xr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function si(e, t, r) {
  return e.set(r), t;
}
function ii(e) {
  var t = tr;
  try {
    return tr = !1, [e(), tr];
  } finally {
    tr = t;
  }
}
function zo(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, r, o) {
  var P;
  var n = (r & Da) !== 0, a = !0, i = (r & Va) !== 0, s = (r & Wa) !== 0, l = !1, u;
  i ? [u, l] = ii(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var f = lt in e || hn in e, c = i && (((P = it(e, t)) == null ? void 0 : P.set) ?? (f && t in e && ((A) => e[t] = A))) || void 0, d = (
    /** @type {V} */
    o
  ), v = !0, h = !1, p = () => (h = !0, v && (v = !1, s ? d = We(
    /** @type {() => V} */
    o
  ) : d = /** @type {V} */
  o), d);
  u === void 0 && o !== void 0 && (c && a && ls(), u = p(), c && c(u));
  var x;
  if (x = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A === void 0 ? p() : (v = !0, h = !1, A);
  }, !(r & Ha))
    return x;
  if (c) {
    var _ = e.$$legacy;
    return function(A, S) {
      return arguments.length > 0 ? ((!S || _ || l) && c(S ? x() : A), A) : x();
    };
  }
  var N = !1, w = /* @__PURE__ */ Cr(u), m = /* @__PURE__ */ Yt(() => {
    var A = x(), S = g(w);
    return N ? (N = !1, S) : w.v = A;
  });
  return i && g(m), n || (m.equals = co), function(A, S) {
    if (arguments.length > 0) {
      const T = S ? g(m) : i ? nt(A) : A;
      if (!m.equals(T)) {
        if (N = !0, j(w, T), h && d !== void 0 && (d = T), zo(m))
          return A;
        We(() => g(m));
      }
      return A;
    }
    return zo(m) ? m.v : g(m);
  };
}
function li(e) {
  return new ui(e);
}
var Ge, Pe;
class ui {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Oe(this, Ge);
    /** @type {Record<string, any>} */
    Oe(this, Pe);
    var a;
    var r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ Cr(s);
      return r.set(i, l), l;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return g(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === hn ? !0 : (g(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return j(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    ot(this, Pe, (t.hydrate ? Ws : Yn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && b(), ot(this, Ge, n.$$events);
    for (const i of Object.keys(B(this, Pe)))
      i === "$set" || i === "$destroy" || i === "$on" || Vt(this, i, {
        get() {
          return B(this, Pe)[i];
        },
        /** @param {any} value */
        set(s) {
          B(this, Pe)[i] = s;
        },
        enumerable: !0
      });
    B(this, Pe).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(n, i);
    }, B(this, Pe).$destroy = () => {
      $s(B(this, Pe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    B(this, Pe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    B(this, Ge)[t] = B(this, Ge)[t] || [];
    const o = (...n) => r.call(this, ...n);
    return B(this, Ge)[t].push(o), () => {
      B(this, Ge)[t] = B(this, Ge)[t].filter(
        /** @param {any} fn */
        (n) => n !== o
      );
    };
  }
  $destroy() {
    B(this, Pe).$destroy();
  }
}
Ge = new WeakMap(), Pe = new WeakMap();
let ia;
typeof HTMLElement == "function" && (ia = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, o) {
    super();
    /** The Svelte component constructor */
    Ne(this, "$$ctor");
    /** Slots */
    Ne(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ne(this, "$$c");
    /** Whether or not the custom element is connected */
    Ne(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ne(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ne(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ne(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ne(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ne(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ne(this, "$$me");
    this.$$ctor = t, this.$$s = r, o && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const n = this.$$c.$on(t, r);
      this.$$l_u.set(r, n);
    }
    super.addEventListener(t, r, o);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, o) {
    if (super.removeEventListener(t, r, o), this.$$c) {
      const n = this.$$l_u.get(r);
      n && (n(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(n) {
        return (a) => {
          const i = document.createElement("slot");
          n !== "default" && (i.name = n), M(a, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, o = ci(this);
      for (const n of this.$$s)
        n in o && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), r.default = !0) : r[n] = t(n));
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = nr(a, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = li({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ws(() => {
        vo(() => {
          var n;
          this.$$r = !0;
          for (const a of sr(this.$$c)) {
            if (!((n = this.$$p_d[a]) != null && n.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const i = nr(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, i);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const a of this.$$l[n]) {
          const i = this.$$c.$on(n, a);
          this.$$l_u.set(a, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, o) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = nr(t, o, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return sr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function nr(e, t, r, o) {
  var a;
  const n = (a = r[e]) == null ? void 0 : a.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !r[e])
    return t;
  if (o === "toAttribute")
    switch (n) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (n) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ci(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ve(e, t, r, o, n, a) {
  let i = class extends ia {
    constructor() {
      super(e, r, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return sr(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return sr(t).forEach((s) => {
    Vt(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var c;
        l = nr(s, l, t), this.$$d[s] = l;
        var u = this.$$c;
        if (u) {
          var f = (c = it(u, s)) == null ? void 0 : c.get;
          f ? u[s] = l : u.$set({ [s]: l });
        }
      }
    });
  }), o.forEach((s) => {
    Vt(i.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
function Yo(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function di(e) {
  return e;
}
function fi(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Zr(e, t) {
  if (e === t || e !== e) return () => e;
  const r = typeof e;
  if (r !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const o = (
      /** @type {Array<any>} */
      t.map((n, a) => Zr(
        /** @type {Array<any>} */
        e[a],
        n
      ))
    );
    return (n) => o.map((a) => a(n));
  }
  if (r === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (Yo(e) && Yo(t)) {
      const a = e.getTime(), s = t.getTime() - a;
      return (l) => new Date(a + l * s);
    }
    const o = Object.keys(t), n = {};
    return o.forEach((a) => {
      n[a] = Zr(e[a], t[a]);
    }), (a) => {
      const i = {};
      return o.forEach((s) => {
        i[s] = n[s](a);
      }), i;
    };
  }
  if (r === "number") {
    const o = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (n) => e + n * o;
  }
  return () => t;
}
var Ue, Tt, jt, at;
const No = class No {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, r = {}) {
    Oe(this, Ue, Ot(
      /** @type {T} */
      void 0
    ));
    Oe(this, Tt, Ot(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Oe(this, jt);
    /** @type {import('../internal/client/types').Task | null} */
    Oe(this, at, null);
    B(this, Ue).v = B(this, Tt).v = t, ot(this, jt, r);
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenedOptions<U>} [options]
   */
  static of(t, r) {
    const o = new No(t(), r);
    return vo(() => {
      o.set(t());
    }), o;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenedOptions<T>} [options]
   * @returns
   */
  set(t, r) {
    var c;
    j(B(this, Tt), t);
    let {
      delay: o = 0,
      duration: n = 400,
      easing: a = di,
      interpolate: i = Zr
    } = { ...B(this, jt), ...r };
    if (n === 0)
      return (c = B(this, at)) == null || c.abort(), j(B(this, Ue), t), Promise.resolve();
    const s = Be.now() + o;
    let l, u = !1, f = B(this, at);
    return ot(this, at, oa((d) => {
      if (d < s)
        return !0;
      if (!u) {
        u = !0;
        const h = B(this, Ue).v;
        l = i(h, t), typeof n == "function" && (n = n(h, t)), f == null || f.abort();
      }
      const v = d - s;
      return v > /** @type {number} */
      n ? (j(B(this, Ue), t), !1) : (j(B(this, Ue), l(a(v / /** @type {number} */
      n))), !0);
    })), B(this, at).promise;
  }
  get current() {
    return g(B(this, Ue));
  }
  get target() {
    return g(B(this, Tt));
  }
  set target(t) {
    this.set(t);
  }
};
Ue = new WeakMap(), Tt = new WeakMap(), jt = new WeakMap(), at = new WeakMap();
let Et = No;
const hi = (e) => e;
function gt(e, { delay: t = 0, duration: r = 400, easing: o = hi } = {}) {
  const n = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: o,
    css: (a) => `opacity: ${a * n}`
  };
}
var vi = /* @__PURE__ */ Ae('<div class="state-labels__label svelte-19e6ym4"> </div>'), gi = /* @__PURE__ */ Ae('<div aria-hidden="true"></div>');
const pi = {
  hash: "svelte-19e6ym4",
  code: `.state-labels.svelte-19e6ym4 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-19e6ym4 {position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, ABCSans;font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:5px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-19e6ym4 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-19e6ym4 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {-webkit-text-stroke:3px #f1f1f1;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels--overlaid.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {-webkit-text-stroke:5px #f1f1f1;font-size:1.125rem;}
}.state-labels--ready.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}`
};
function la(e, t) {
  se(t, !0), Me(e, pi);
  let r = y(t, "labels", 7), o = y(t, "overlayLabels", 7, !1), n = /* @__PURE__ */ Z(void 0);
  ft(() => {
    setTimeout(() => {
      j(n, !0);
    });
  });
  var a = gi();
  let i;
  return qe(a, 21, r, Ke, (s, l) => {
    var u = dt(), f = ye(u);
    Gs(f, () => g(l).name, (c) => {
      var d = vi();
      let v;
      var h = D(d, !0);
      k(d), ae(
        (p) => {
          v = De(d, "", v, {
            left: g(l).left + "%",
            top: g(l).top + "%",
            width: g(l).width + "%",
            "margin-left": p
          }), je(h, g(l).name);
        },
        [
          () => Math.round(0 - g(l).width / 2) + "%"
        ]
      ), ht(3, d, () => gt, () => ({ duration: 1e3 })), M(c, d);
    }), M(s, u);
  }), k(a), ae((s) => i = Er(a, 1, "state-labels svelte-19e6ym4", null, i, s), [
    () => ({
      "state-labels--overlaid": o(),
      "state-labels--ready": g(n)
    })
  ]), M(e, a), ie({
    get labels() {
      return r();
    },
    set labels(s) {
      r(s), b();
    },
    get overlayLabels() {
      return o();
    },
    set overlayLabels(s = !1) {
      o(s), b();
    }
  });
}
ve(la, { labels: {}, overlayLabels: {} }, [], [], !0);
var xi = /* @__PURE__ */ Ae('<span class="accessible-hide svelte-ivafae"><!></span>');
const mi = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function ua(e, t) {
  se(t, !0), Me(e, mi);
  let r = y(t, "children", 7);
  var o = xi(), n = D(o);
  return qn(n, () => r() ?? ge), k(o), M(e, o), ie({
    get children() {
      return r();
    },
    set children(a) {
      r(a), b();
    }
  });
}
ve(ua, { children: {} }, [], [], !0);
const Ko = Rt({});
var wi = /* @__PURE__ */ Ae("<a><!></a>");
const bi = {
  hash: "svelte-70abd9",
  code: "a.svelte-70abd9 {display:inline-block;padding:0.5rem 1rem;font-size:0.75rem;font-weight:700;line-height:1.3rem;padding:0.3rem 0.6rem 0.1rem;text-decoration:none;letter-spacing:0.125rem;text-transform:uppercase;color:#fff;background-color:#0058cc;transition:opacity 0.2s;position:absolute;}a.svelte-70abd9:focus {opacity:1;}a.svelte-70abd9:not(:focus) {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;opacity:0.1;}.skip-link--topleft.svelte-70abd9 {left:1rem;top:1rem;}.skip-link--bottomleft.svelte-70abd9 {left:1rem;bottom:1rem;}"
};
function Jr(e, t) {
  se(t, !0), Me(e, bi);
  const [r, o] = Mt(), n = () => pr(Ko, "$links", r);
  let a = y(t, "id", 7), i = y(t, "target", 7), s = y(t, "children", 7), l = y(t, "position", 7, "topleft"), u = /* @__PURE__ */ Z(void 0);
  Se(() => {
    si(Ko, We(n)[a()] = g(u), We(n));
  });
  var f = wi();
  f.__click = (v) => {
    var x;
    v.preventDefault();
    const p = v.target.href.split("#")[1];
    (x = n()[p]) == null || x.focus();
  };
  var c = D(f);
  qn(c, () => s() ?? ge), k(f), Qt(f, (v) => j(u, v), () => g(u)), ae(() => {
    z(f, "id", a()), z(f, "href", `#${i()}`), Er(f, 1, `skip-link--${l()}`, "svelte-70abd9");
  }), M(e, f);
  var d = ie({
    get id() {
      return a();
    },
    set id(v) {
      a(v), b();
    },
    get target() {
      return i();
    },
    set target(v) {
      i(v), b();
    },
    get children() {
      return s();
    },
    set children(v) {
      s(v), b();
    },
    get position() {
      return l();
    },
    set position(v = "topleft") {
      l(v), b();
    }
  });
  return o(), d;
}
xo(["click"]);
ve(
  Jr,
  {
    id: {},
    target: {},
    children: {},
    position: {}
  },
  [],
  [],
  !0
);
function yi(e, t, r) {
  var n;
  const o = e.target.dataset.id;
  j(t, o, !0), (n = r()) == null || n({ code: o });
}
function _i(e, t) {
  var o;
  const r = e.target.dataset.id;
  (o = t()) == null || o({ code: r, clientX: null, clientY: null });
}
function Ai(e, t, r) {
  var o;
  g(t) === e.target.dataset.id && j(t, null), (o = r()) == null || o({ code: null });
}
var Ni = /* @__PURE__ */ Ae("<li><button> </button></li>"), Ci = /* @__PURE__ */ Ae("<li> <ul></ul></li>"), Pi = /* @__PURE__ */ Ae('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>'), Si = /* @__PURE__ */ Ae("<!> <!> <!>", 1);
const Ei = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function ca(e, t) {
  se(t, !0), Me(e, Ei);
  let r = y(t, "groups", 7), o = y(t, "layout", 7), n = y(t, "onChange", 7), a = y(t, "onClick", 7), i = y(t, "onFocus", 7), s = y(t, "customElectorateAltText", 23, () => ({})), l = /* @__PURE__ */ Z(null);
  Se(() => {
    var h;
    (h = n()) == null || h(g(l));
  });
  let u = /* @__PURE__ */ H(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((h) => o().positions[h]).map((h) => r().find((p) => p.name === h)).map((h) => ({
    ...h,
    hexes: [...h.hexes].sort((p, x) => p.coord[0] + p.coord[1] * 1e3 - (x.coord[0] + x.coord[1] * 1e3))
  })));
  var f = Si(), c = ye(f);
  Jr(c, {
    id: "hex-map-top",
    target: "hex-map-bottom",
    position: "topleft",
    children: (h, p) => {
      ur();
      var x = Do("Skip past map");
      M(h, x);
    },
    $$slots: { default: !0 }
  });
  var d = Q(c, 2);
  ua(d, {
    children: (h, p) => {
      var x = Pi();
      x.__click = [_i, a], x.__focusin = [yi, l, i], x.__focusout = [Ai, l, i], qe(x, 21, () => g(u), Ke, (_, N) => {
        var w = Ci(), m = D(w), P = Q(m);
        qe(P, 21, () => g(N).hexes, Ke, (A, S) => {
          var T = Ni(), I = D(T), L = D(I);
          k(I), k(T), ae(() => {
            z(I, "data-id", g(S).id), je(L, `${g(S).name ?? ""} ${(s()[g(S).id] || "") ?? ""}`);
          }), M(A, T);
        }), k(P), k(w), ae(() => je(m, `${g(N).name ?? ""} `)), M(_, w);
      }), k(x), M(h, x);
    },
    $$slots: { default: !0 }
  });
  var v = Q(d, 2);
  return Jr(v, {
    id: "hex-map-bottom",
    target: "hex-map-top",
    position: "bottomleft",
    children: (h, p) => {
      ur();
      var x = Do("Skip above map");
      M(h, x);
    },
    $$slots: { default: !0 }
  }), M(e, f), ie({
    get groups() {
      return r();
    },
    set groups(h) {
      r(h), b();
    },
    get layout() {
      return o();
    },
    set layout(h) {
      o(h), b();
    },
    get onChange() {
      return n();
    },
    set onChange(h) {
      n(h), b();
    },
    get onClick() {
      return a();
    },
    set onClick(h) {
      a(h), b();
    },
    get onFocus() {
      return i();
    },
    set onFocus(h) {
      i(h), b();
    },
    get customElectorateAltText() {
      return s();
    },
    set customElectorateAltText(h = {}) {
      s(h), b();
    }
  });
}
xo(["click", "focusin", "focusout"]);
ve(
  ca,
  {
    groups: {},
    layout: {},
    onChange: {},
    onClick: {},
    onFocus: {},
    customElectorateAltText: {}
  },
  [],
  [],
  !0
);
function Li(e) {
  return Object.entries(e).reduce((t, [r, o]) => (t[o] = r, t), {});
}
const qo = 16;
function Lr(e = [0, 0], t = "px") {
  const r = e[0] * (qo * Math.sqrt(3)), o = e[1] * 1.5 * qo;
  return [r, o].map((n) => `${Math.round(n)}${t}`);
}
var Ti = /* @__PURE__ */ le('<path style="color:#000000;fill:var(--c-tileFocusBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:var(--c-tileFocusBorderGap);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), Oi = /* @__PURE__ */ le('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:var(--c-tileInteractBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const Ri = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function ar(e, t) {
  se(t, !0), Me(e, Ri);
  let r = y(t, "groups", 7), o = y(t, "id", 7), n = y(t, "layout", 7), a = y(t, "type", 7, "focus"), i = /* @__PURE__ */ H(() => r().flatMap((c) => c.hexes.map((d) => ({ ...d, group: c.name }))).sort((c, d) => c.index - d.index)), s = /* @__PURE__ */ H(() => {
    if (!o())
      return;
    const c = g(i).find((w) => w.id === o()), [d, v] = n().positions[c.group], [h, p] = c.coord, x = p % 2 ? 0.5 : 0, [_, N] = Lr([d + h + x, v + p], "").map(Number);
    return [_ - 3, N - 3];
  });
  var l = dt(), u = ye(l);
  {
    var f = (c) => {
      var d = Oi(), v = D(d);
      {
        var h = (p) => {
          var x = Ti();
          ur(), M(p, x);
        };
        fe(v, (p) => {
          a() === "focus" && p(h);
        });
      }
      ur(), k(d), ae((p) => z(d, "transform", p), [
        () => `translate(${g(s).join(" ")}) scale(0.95)`
      ]), M(c, d);
    };
    fe(u, (c) => {
      g(s) && c(f);
    });
  }
  return M(e, l), ie({
    get groups() {
      return r();
    },
    set groups(c) {
      r(c), b();
    },
    get id() {
      return o();
    },
    set id(c) {
      o(c), b();
    },
    get layout() {
      return n();
    },
    set layout(c) {
      n(c), b();
    },
    get type() {
      return a();
    },
    set type(c = "focus") {
      a(c), b();
    }
  });
}
ve(ar, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var ki = typeof global == "object" && global && global.Object === Object && global, Ii = typeof self == "object" && self && self.Object === Object && self, da = ki || Ii || Function("return this")(), xr = da.Symbol, fa = Object.prototype, Mi = fa.hasOwnProperty, Fi = fa.toString, Bt = xr ? xr.toStringTag : void 0;
function Bi(e) {
  var t = Mi.call(e, Bt), r = e[Bt];
  try {
    e[Bt] = void 0;
    var o = !0;
  } catch {
  }
  var n = Fi.call(e);
  return o && (t ? e[Bt] = r : delete e[Bt]), n;
}
var Di = Object.prototype, Hi = Di.toString;
function Vi(e) {
  return Hi.call(e);
}
var Wi = "[object Null]", $i = "[object Undefined]", Qo = xr ? xr.toStringTag : void 0;
function Gi(e) {
  return e == null ? e === void 0 ? $i : Wi : Qo && Qo in Object(e) ? Bi(e) : Vi(e);
}
function Ui(e) {
  return e != null && typeof e == "object";
}
var ji = "[object Symbol]";
function zi(e) {
  return typeof e == "symbol" || Ui(e) && Gi(e) == ji;
}
var Yi = /\s/;
function Ki(e) {
  for (var t = e.length; t-- && Yi.test(e.charAt(t)); )
    ;
  return t;
}
var qi = /^\s+/;
function Qi(e) {
  return e && e.slice(0, Ki(e) + 1).replace(qi, "");
}
function eo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xo = NaN, Xi = /^[-+]0x[0-9a-f]+$/i, Zi = /^0b[01]+$/i, Ji = /^0o[0-7]+$/i, el = parseInt;
function Zo(e) {
  if (typeof e == "number")
    return e;
  if (zi(e))
    return Xo;
  if (eo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = eo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Qi(e);
  var r = Zi.test(e);
  return r || Ji.test(e) ? el(e.slice(2), r ? 2 : 8) : Xi.test(e) ? Xo : +e;
}
var Dr = function() {
  return da.Date.now();
}, tl = "Expected a function", rl = Math.max, ol = Math.min;
function nl(e, t, r) {
  var o, n, a, i, s, l, u = 0, f = !1, c = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(tl);
  t = Zo(t) || 0, eo(r) && (f = !!r.leading, c = "maxWait" in r, a = c ? rl(Zo(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);
  function v(A) {
    var S = o, T = n;
    return o = n = void 0, u = A, i = e.apply(T, S), i;
  }
  function h(A) {
    return u = A, s = setTimeout(_, t), f ? v(A) : i;
  }
  function p(A) {
    var S = A - l, T = A - u, I = t - S;
    return c ? ol(I, a - T) : I;
  }
  function x(A) {
    var S = A - l, T = A - u;
    return l === void 0 || S >= t || S < 0 || c && T >= a;
  }
  function _() {
    var A = Dr();
    if (x(A))
      return N(A);
    s = setTimeout(_, p(A));
  }
  function N(A) {
    return s = void 0, d && o ? v(A) : (o = n = void 0, i);
  }
  function w() {
    s !== void 0 && clearTimeout(s), u = 0, o = l = n = s = void 0;
  }
  function m() {
    return s === void 0 ? i : N(Dr());
  }
  function P() {
    var A = Dr(), S = x(A);
    if (o = arguments, n = this, l = A, S) {
      if (s === void 0)
        return h(l);
      if (c)
        return clearTimeout(s), s = setTimeout(_, t), v(l);
    }
    return s === void 0 && (s = setTimeout(_, t)), i;
  }
  return P.cancel = w, P.flush = m, P;
}
function al({ isInteractive: e = !1, onClick: t, onHover: r }) {
  if (!e)
    return {};
  const o = nl(r, 10), n = ({ target: s, clientX: l, clientY: u }) => {
    var c;
    const f = (c = s == null ? void 0 : s.dataset) == null ? void 0 : c.id;
    !f || !t || t({ code: f, clientX: l, clientY: u });
  }, a = (s) => {
    const l = s.target, { clientX: u, clientY: f } = s, c = l.dataset.id;
    l.nodeName !== "polygon" || !c || o({ code: c, clientX: u, clientY: f });
  }, i = (s) => {
    o({ code: null });
  };
  return {
    onblur: i,
    onmouseout: i,
    onmouseover: a,
    onclick: n
  };
}
var sl = /* @__PURE__ */ le('<g><text> </text><text class="hexlabels__text svelte-1kzhlql"> </text></g>'), il = /* @__PURE__ */ le('<g class="hexlabels svelte-1kzhlql"></g>');
const ll = {
  hash: "svelte-1kzhlql",
  code: ".hexlabels.svelte-1kzhlql {pointer-events:none;}.hexlabels__text.svelte-1kzhlql {font-size:10px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function ha(e, t) {
  se(t, !0), Me(e, ll);
  let r = y(t, "hexes", 7), o = y(t, "allocations", 7), n = y(t, "certainties", 7), a = y(t, "labelsToShow", 23, () => ({})), i = y(t, "showElectorateLabels", 7, !1), s = /* @__PURE__ */ H(() => i() ? r() : r().filter(({ id: u }) => a()[u]));
  var l = il();
  return qe(l, 21, () => g(s), Ke, (u, f) => {
    let c = () => g(f).id, d = () => g(f).coordPx, v = () => g(f).shortName;
    var h = sl(), p = D(h);
    let x, _;
    var N = D(p, !0);
    k(p);
    var w = Q(p);
    let m;
    var P = D(w, !0);
    k(w), k(h), ae(
      (A, S) => {
        z(h, "transform", A), x = Er(p, 0, "hexlabels__text svelte-1kzhlql", null, x, S), _ = De(p, "", _, {
          stroke: `var(--u-${o()[c()]})`,
          "stroke-width": "3",
          opacity: o()[c()] && !n()[c()] ? 1 : 0
        }), je(N, v()), m = De(w, "", m, {
          fill: o()[c()] && n()[c()] ? "white" : "black"
        }), je(P, v());
      },
      [
        () => `translate(${d().join(" ")}) rotate(-30) translate(0 3)`,
        () => ({
          "hexlabels__text--allocation": o()[c()]
        })
      ]
    ), M(u, h);
  }), k(l), M(e, l), ie({
    get hexes() {
      return r();
    },
    set hexes(u) {
      r(u), b();
    },
    get allocations() {
      return o();
    },
    set allocations(u) {
      o(u), b();
    },
    get certainties() {
      return n();
    },
    set certainties(u) {
      n(u), b();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(u = {}) {
      a(u), b();
    },
    get showElectorateLabels() {
      return i();
    },
    set showElectorateLabels(u = !1) {
      i(u), b();
    }
  });
}
ve(
  ha,
  {
    hexes: {},
    allocations: {},
    certainties: {},
    labelsToShow: {},
    showElectorateLabels: {}
  },
  [],
  [],
  !0
);
var ul = /* @__PURE__ */ le('<g class="group-outline group-outline__under svelte-is11bp"><!></g>'), cl = /* @__PURE__ */ le('<g><g class="group-hexes svelte-is11bp"><!></g><!></g>'), dl = /* @__PURE__ */ le('<g class="group-outline group-outline__over svelte-is11bp"><!></g>'), fl = /* @__PURE__ */ le('<g><g class="group-hex-strokes svelte-is11bp"><!></g><!><!></g>'), hl = /* @__PURE__ */ le('<g class="svelte-is11bp"><!><!></g>');
const vl = {
  hash: "svelte-is11bp",
  code: `.group.svelte-is11bp:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--rendered.svelte-is11bp .hex {transition:all 0.5s;}.group--rendered.svelte-is11bp .hex-outline {transition:opacity 0.5s, stroke 0.5s;}.group--hidden.svelte-is11bp {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-is11bp,
.group-outline.svelte-is11bp {pointer-events:none;}.group.svelte-is11bp .hex {vector-effect:non-scaling-stroke;fill:transparent;transform-box:fill-box;transform-origin:50% 50%;--hexFlipMinWidth: 0.03;}
@media (min-width: 46.5rem) {.group.svelte-is11bp .hex {--hexFlipMinWidth: 0.03;}
}.group.svelte-is11bp .hex.hex--flip {
  animation: svelte-is11bp-hex-flip 1s ease-in-out;}.group-outline.svelte-is11bp .hex-outline {fill:transparent;stroke:var(--c-stateOutline);stroke-width:1.5px;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-is11bp:not(.group--has-focuses) .group-outline:where(.svelte-is11bp) .hex-outline {stroke:var(--c-emptyStateOutline);}.group--map-is-full.svelte-is11bp:not(.group--has-focuses) .group-outline:where(.svelte-is11bp) .hex-outline {stroke:var(--c-fullStateOutline);}.group-hexes.svelte-is11bp .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-is11bp .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-is11bp .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-is11bp .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-is11bp .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-is11bp .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-is11bp .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-is11bp .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-is11bp .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-is11bp .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-is11bp .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-is11bp .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-is11bp .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-is11bp .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-is11bp .hex[data-allocation="TOP"] {fill:var(--a-TOP);}.group-hexes.svelte-is11bp .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-nullBorder);stroke-width:1.5px;}.group--map-is-empty.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex {fill:var(--c-empty);stroke:var(--c-emptyBorder);stroke-width:1px;}.group-hex-strokes.svelte-is11bp .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-is11bp .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filledBorder);stroke-width:1.5px;}.group-hex-strokes.svelte-is11bp .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="false"] {fill:#fff;stroke:#fff;}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--is-outline.svelte-is11bp .hex {opacity:0;}.group--is-outline.svelte-is11bp .hex-outline {stroke:var(--c-emptyBorder) !important;}

@keyframes svelte-is11bp-hex-flip {
  from {
    transform: none;
    fill: var(--allocationFrom);
  }
  50% {
    transform: scaleX(var(--hexFlipMinWidth));
    stroke: transparent;
    fill: var(--allocationFrom);
  }
  50.01% {
    fill: var(--allocationTo);
  }
  to {
    transform: none;
    fill: var(--allocationTo);
  }
}`
};
function va(e, t) {
  se(t, !0), Me(e, vl);
  let r = y(t, "groups", 7), o = y(t, "isStaticLayout", 7), n = y(t, "layout", 7), a = y(t, "allocations", 7), i = y(t, "focuses", 7), s = y(t, "certainties", 7), l = y(t, "showElectorateLabels", 7), u = y(t, "showFocusedElectorateLabels", 7), f = y(t, "labelsToShow", 7), c = y(t, "isOutlineOnly", 7, !1), d = y(t, "showStateOutlinesOnTop", 7, !1), v = y(t, "hexFlip", 7, "None"), h = /* @__PURE__ */ Z(void 0), p = /* @__PURE__ */ Z(!1);
  ft(() => {
    setTimeout(
      () => {
        j(p, !0);
      },
      1
    );
  });
  let x = /* @__PURE__ */ H(() => {
    const L = Object.values(a());
    return L.length !== 0 && L.some(Boolean);
  }), _ = /* @__PURE__ */ H(() => {
    const L = Object.values(a());
    return L.length !== 0 && L.every(Boolean);
  }), N = /* @__PURE__ */ H(() => Object.values(i()).some(Boolean)), w = /* @__PURE__ */ H(() => {
    var L;
    return Array.from(((L = g(h)) == null ? void 0 : L.querySelectorAll("polygon.hex")) || []).filter((W) => W instanceof SVGPolygonElement);
  }), m = { allocation: {} };
  Se(() => {
    const L = { ...a() }, W = i(), q = s();
    g(w).forEach(($) => {
      const G = $.dataset.id;
      if (!G)
        return;
      const C = L[G] || null, O = m.allocation[G];
      $.dataset.allocation = C, v() === "Flip" && O !== C && ($.style.setProperty("--allocationFrom", `var(--a-${O})`), $.style.setProperty("--allocationTo", `var(--a-${C})`), $.classList.add("hex--flip")), m.allocation[G] = C;
      const R = g(N) ? W[G] || !1 : !0;
      $.dataset.focused = R;
      const K = q[G] || null;
      $.dataset.certain = K;
    });
  });
  let P = /* @__PURE__ */ H(() => {
    const L = r(), W = n();
    return L.map((q) => {
      const $ = W.positions[q.name], G = $ && $[0] !== 1 / 0, C = Lr($).join(","), O = g(N) && u() ? i() : f(), R = {
        "data-name": q.name,
        style: `transform: translate(${C})`,
        class: [
          "group",
          !G && "group--hidden",
          o() && "group--map-is-static",
          !g(x) && "group--map-is-empty",
          g(_) && "group--map-is-full",
          g(N) && "group--has-focuses",
          c() && "group--is-outline",
          g(p) && "group--rendered"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: G, labels: O, group: q, groupProps: R };
    });
  }), A = /* @__PURE__ */ H(() => d() || g(x) && g(N));
  var S = hl(), T = D(S);
  qe(T, 17, () => g(P), Ke, (L, W) => {
    let q = () => g(W).groupProps, $ = () => g(W).group;
    var G = cl();
    gr(G, () => ({ ...q() }), void 0, "svelte-is11bp");
    var C = D(G), O = D(C);
    Jt(O, () => $().svgHexes, !0), k(C);
    var R = Q(C);
    {
      var K = (X) => {
        var te = ul(), oe = D(te);
        Jt(oe, () => $().svgOutline, !0), k(te), ht(2, te, () => gt, () => ({ duration: 200, delay: 200 })), M(X, te);
      };
      fe(R, (X) => {
        g(A) || X(K);
      });
    }
    k(G), M(L, G);
  });
  var I = Q(T);
  return qe(I, 17, () => g(P), Ke, (L, W) => {
    let q = () => g(W).groupProps, $ = () => g(W).isVisible, G = () => g(W).labels, C = () => g(W).group;
    var O = fl();
    gr(O, () => ({ ...q() }), void 0, "svelte-is11bp");
    var R = D(O), K = D(R);
    Jt(K, () => C().svgHexes, !0), k(R);
    var X = Q(R);
    {
      var te = (J) => {
        var Le = dl(), Xe = D(Le);
        Jt(Xe, () => C().svgOutline, !0), k(Le), ht(3, Le, () => gt, () => ({ duration: 200 })), M(J, Le);
      };
      fe(X, (J) => {
        g(A) && J(te);
      });
    }
    var oe = Q(X);
    {
      var ue = (J) => {
        ha(J, {
          get hexes() {
            return C().hexes;
          },
          get allocations() {
            return a();
          },
          get certainties() {
            return s();
          },
          get labelsToShow() {
            return G();
          },
          get showElectorateLabels() {
            return l();
          }
        });
      };
      fe(oe, (J) => {
        $() && J(ue);
      });
    }
    k(O), M(L, O);
  }), k(S), Qt(S, (L) => j(h, L), () => g(h)), Rs("animationend", S, (L) => {
    L.target.classList.remove("hex--flip");
  }), M(e, S), ie({
    get groups() {
      return r();
    },
    set groups(L) {
      r(L), b();
    },
    get isStaticLayout() {
      return o();
    },
    set isStaticLayout(L) {
      o(L), b();
    },
    get layout() {
      return n();
    },
    set layout(L) {
      n(L), b();
    },
    get allocations() {
      return a();
    },
    set allocations(L) {
      a(L), b();
    },
    get focuses() {
      return i();
    },
    set focuses(L) {
      i(L), b();
    },
    get certainties() {
      return s();
    },
    set certainties(L) {
      s(L), b();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(L) {
      l(L), b();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(L) {
      u(L), b();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(L) {
      f(L), b();
    },
    get isOutlineOnly() {
      return c();
    },
    set isOutlineOnly(L = !1) {
      c(L), b();
    },
    get showStateOutlinesOnTop() {
      return d();
    },
    set showStateOutlinesOnTop(L = !1) {
      d(L), b();
    },
    get hexFlip() {
      return v();
    },
    set hexFlip(L = "None") {
      v(L), b();
    }
  });
}
ve(
  va,
  {
    groups: {},
    isStaticLayout: {},
    layout: {},
    allocations: {},
    focuses: {},
    certainties: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    labelsToShow: {},
    isOutlineOnly: {},
    showStateOutlinesOnTop: {},
    hexFlip: {}
  },
  [],
  [],
  !0
);
var gl = /* @__PURE__ */ le('<g class="svelte-1trui9u"><path d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z" stroke-width="2" class="svelte-1trui9u"></path><path d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064" stroke-width="2" fill="none" class="svelte-1trui9u"></path></g>');
const pl = {
  hash: "svelte-1trui9u",
  code: `path.svelte-1trui9u,
g.svelte-1trui9u {transition:all 0.5s;}`
};
function wo(e, t) {
  se(t, !0), Me(e, pl);
  let r = y(t, "coordPx", 7), o = y(t, "rotation", 7), n = y(t, "colour", 7), a = y(t, "opacity", 7, 1), i = y(t, "value", 7), s = y(t, "arrowHeight", 7), l = y(t, "tether", 7, "base"), u = /* @__PURE__ */ H(() => {
    const w = Math.abs(i());
    return Math.min(1.5, 0.3 + w / 20);
  }), f = /* @__PURE__ */ H(() => l() === "base" ? "" : `translate(0 ${63 * i() * s()})`);
  var c = gl();
  let d;
  var v = D(c);
  let h;
  var p = Q(v);
  let x;
  return k(c), ae(
    (_) => {
      z(c, "data-tether", l()), z(c, "transform", _), d = De(c, "", d, { opacity: a() }), z(v, "transform", `${g(f)} scale(${g(u)} ${i() * s()})`), h = De(v, "", h, { fill: n() }), z(p, "transform", `translate(0 ${-63 * i() * s()}) ${g(f)} rotate(${i() < 0 ? 180 : 0}) scale(${g(u)})`), x = De(p, "", x, { stroke: n() });
    },
    [
      () => `translate(${r().join(" ")}) rotate(${o()})`
    ]
  ), M(e, c), ie({
    get coordPx() {
      return r();
    },
    set coordPx(_) {
      r(_), b();
    },
    get rotation() {
      return o();
    },
    set rotation(_) {
      o(_), b();
    },
    get colour() {
      return n();
    },
    set colour(_) {
      n(_), b();
    },
    get opacity() {
      return a();
    },
    set opacity(_ = 1) {
      a(_), b();
    },
    get value() {
      return i();
    },
    set value(_) {
      i(_), b();
    },
    get arrowHeight() {
      return s();
    },
    set arrowHeight(_) {
      s(_), b();
    },
    get tether() {
      return l();
    },
    set tether(_ = "base") {
      l(_), b();
    }
  });
}
ve(
  wo,
  {
    coordPx: {},
    rotation: {},
    colour: {},
    opacity: {},
    value: {},
    arrowHeight: {},
    tether: {}
  },
  [],
  [],
  !0
);
var xl = /* @__PURE__ */ le('<g class="hex-map-arrows"></g>');
function bo(e, t) {
  se(t, !0);
  let r = y(t, "groups", 7), o = y(t, "layout", 7), n = y(t, "arrowData", 7), a = y(t, "arrowHeight", 7), i = y(t, "getColourForValue", 7), s = y(t, "getRotationForValue", 7);
  var l = dt(), u = ye(l);
  return qe(u, 17, r, Ke, (f, c) => {
    var d = dt(), v = ye(d);
    {
      var h = (p) => {
        var x = xl();
        qe(x, 21, () => g(c).hexes, Ke, (_, N) => {
          let w = () => g(N).coordPx, m = () => g(N).id;
          const P = /* @__PURE__ */ H(() => s()(n()[m()])), A = /* @__PURE__ */ H(() => n()[m()] ? 1 : 0), S = /* @__PURE__ */ H(() => n()[m()] || 0), T = /* @__PURE__ */ H(() => i()(n()[m()]));
          wo(_, {
            get coordPx() {
              return w();
            },
            get rotation() {
              return g(P);
            },
            get opacity() {
              return g(A);
            },
            get value() {
              return g(S);
            },
            get colour() {
              return g(T);
            },
            get arrowHeight() {
              return a();
            }
          });
        }), k(x), ae((_) => z(x, "transform", _), [
          () => `translate(${Lr(o().positions[g(c).name], "").join(",")})`
        ]), ht(3, x, () => gt, () => ({ duration: 750 })), M(p, x);
      };
      fe(v, (p) => {
        o().positions[g(c).name] && p(h);
      });
    }
    M(f, d);
  }), M(e, l), ie({
    get groups() {
      return r();
    },
    set groups(f) {
      r(f), b();
    },
    get layout() {
      return o();
    },
    set layout(f) {
      o(f), b();
    },
    get arrowData() {
      return n();
    },
    set arrowData(f) {
      n(f), b();
    },
    get arrowHeight() {
      return a();
    },
    set arrowHeight(f) {
      a(f), b();
    },
    get getColourForValue() {
      return i();
    },
    set getColourForValue(f) {
      i(f), b();
    },
    get getRotationForValue() {
      return s();
    },
    set getRotationForValue(f) {
      s(f), b();
    }
  });
}
ve(
  bo,
  {
    groups: {},
    layout: {},
    arrowData: {},
    arrowHeight: {},
    getColourForValue: {},
    getRotationForValue: {}
  },
  [],
  [],
  !0
);
const mr = Rt(), ml = { url: "https://www.abc.net.au/news-web/api/syndicate/storylab/elections/federal/2025" }, wl = {
  liveData: ml
}, bl = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m", TOP: "m" }, yl = { LIB: "LNP", LNP: "LNP", CLP: "LNP", NAT: "LNP", ALP: "ALP" }, ga = {
  hashCodes: bl,
  synonyms: yl
};
function _l(e, t = (r) => !0) {
  return e.data.electorates.reduce((r, o) => {
    const n = o.code;
    if (Number(o.counted || 0) <= 5)
      return r[n] = 0, r;
    if (!o.runners)
      return console.error("Missing runners"), r;
    const i = [...o.runners, ...o.ghosts || []].filter((s) => {
      const l = ga.synonyms[s.party.code] || s.party.code;
      return t(l);
    }).reduce((s, l) => {
      var c;
      const u = (c = l == null ? void 0 : l.simple) == null ? void 0 : c.swing, f = u ? Number(u) : 0;
      return s + f;
    }, 0);
    return r[n] = i, r;
  }, {});
}
let rr;
async function pa({ cache: e } = { cache: !0 }) {
  return e && rr || (rr = fetch(wl.liveData.url).then((t) => t.json())), rr;
}
var Al = /* @__PURE__ */ le('<g><g transform="translate(0,10)"><text class="caption svelte-egtalb"> </text></g></g>'), Nl = /* @__PURE__ */ le('<g><!><text class="hex-map-arrow-legend svelte-egtalb"><tspan> </tspan></text></g>'), Cl = /* @__PURE__ */ le('<text class="labor svelte-egtalb">Labor</text><g><text class="lnp svelte-egtalb">L/NP</text></g>', 1), Pl = /* @__PURE__ */ le('<text class="hex-map-arrow-legend__light svelte-egtalb"> </text>'), Sl = /* @__PURE__ */ le('<!><g class="hex-map-arrow-legend svelte-egtalb"><!><!><text> </text><!></g>', 1);
const El = {
  hash: "svelte-egtalb",
  code: `.hex-map-arrow-legend.svelte-egtalb {fill:black;
  /* Text Regular/xs */font-family:ABCSans;font-size:0.75rem;font-style:normal;font-weight:400;line-height:135%; /* 1.0125rem */width:30px;text-align:center;font-size:var(--fontSize);}text.hex-map-arrow-legend__light.svelte-egtalb {fill:var(--Light-grey-compliant, #767676);}.lnp.svelte-egtalb {fill:var(--a-LNP);}.labor.svelte-egtalb {fill:var(--a-ALP);}.lnp.svelte-egtalb,
.labor.svelte-egtalb {font-weight:bold;}.caption.svelte-egtalb {color:#000;
  /* Text Regular/lg */font-family:ABCSans;font-style:normal;font-weight:400;line-height:150%; /* 1.6875rem */}`
};
function yo(e, t) {
  se(t, !0), Me(e, El);
  const [r, o] = Mt(), n = () => pr(a, "$svgElCurrentScale", r), a = fo("svgElCurrentScale");
  let i = /* @__PURE__ */ H(() => n()), s = y(t, "caption", 7, ""), l = y(t, "scales", 7), u = y(t, "arrowHeight", 7), f = y(t, "getRotationForValue", 7), c = y(t, "getColourForValue", 7), d = y(t, "countedPct", 7), v = y(t, "alpLnp", 7, !1), h = y(t, "chartName", 7, "");
  const p = {
    largeScreen: {
      left: 0,
      top: 460,
      fontSize: "18px",
      yOffset: 25,
      arrowGap: 35,
      captionSize: "24px"
    },
    smallScreen: {
      left: 0,
      top: 460,
      fontSize: "12px",
      yOffset: 15,
      arrowGap: 20,
      captionSize: "18px"
    }
  };
  let x = /* @__PURE__ */ H(() => p[g(i) < 1.2 ? "largeScreen" : "smallScreen"]), _ = /* @__PURE__ */ H(() => `scale(${g(i).toFixed(2)})`);
  var N = Sl(), w = ye(N);
  {
    var m = (C) => {
      var O = Al(), R = D(O), K = D(R);
      let X;
      var te = D(K, !0);
      k(K), k(R), k(O), ae(
        (oe) => {
          z(O, "transform", oe), X = De(K, "", X, { "font-size": g(x).captionSize }), je(te, s());
        },
        [
          () => `scale(${n().toFixed(2)})`
        ]
      ), M(C, O);
    };
    fe(w, (C) => {
      s() && C(m);
    });
  }
  var P = Q(w);
  let A;
  var S = D(P);
  qe(S, 17, l, Ke, (C, O, R) => {
    let K = () => g(O).name, X = () => g(O).value, te = () => g(O).tether, oe = /* @__PURE__ */ bn(() => Ja(g(O).colour, null));
    var ue = Nl(), J = D(ue);
    const Le = /* @__PURE__ */ H(() => f()(X())), Xe = /* @__PURE__ */ H(() => c()(X()));
    wo(J, {
      coordPx: [10, 0],
      get arrowHeight() {
        return u();
      },
      get rotation() {
        return g(Le);
      },
      get colour() {
        return g(Xe);
      },
      get value() {
        return X();
      },
      get tether() {
        return te();
      }
    });
    var Te = Q(J);
    let rt;
    var Xt = D(Te), Tr = D(Xt, !0);
    k(Xt), k(Te), k(ue), ae(() => {
      z(ue, "transform", `translate(${R * g(x).arrowGap * g(i)} 0)`), z(Te, "y", g(x).yOffset), z(Te, "transform", g(_)), rt = De(Te, "", rt, { fill: g(oe) }), je(Tr, K());
    }), M(C, ue);
  });
  var T = Q(S);
  {
    var I = (C) => {
      var O = Cl(), R = ye(O), K = Q(R), X = D(K);
      k(K), ae(() => {
        z(R, "y", g(x).yOffset * 2), z(R, "transform", g(_)), z(K, "transform", `translate(${2 * g(x).arrowGap * g(i)} 0)`), z(X, "y", g(x).yOffset * 2), z(X, "transform", g(_));
      }), M(C, O);
    };
    fe(T, (C) => {
      v() && C(I);
    });
  }
  var L = Q(T), W = D(L, !0);
  k(L);
  var q = Q(L);
  {
    var $ = (C) => {
      var O = Pl(), R = D(O);
      k(O), ae(() => {
        z(O, "y", g(x).yOffset * (v() ? 4 : 3)), z(O, "transform", g(_)), je(R, `${d() ?? ""}% counted`);
      }), M(C, O);
    };
    fe(q, (C) => {
      d() && C($);
    });
  }
  k(P), ae(() => {
    z(P, "transform", `translate(${g(x).left} ${g(x).top - (v() ? g(x).yOffset : 0)})`), A = De(P, "", A, { "--fontSize": g(x).fontSize }), z(L, "y", g(x).yOffset * (v() ? 3 : 2)), z(L, "transform", g(_)), je(W, h());
  }), ht(3, P, () => gt), M(e, N);
  var G = ie({
    get caption() {
      return s();
    },
    set caption(C = "") {
      s(C), b();
    },
    get scales() {
      return l();
    },
    set scales(C) {
      l(C), b();
    },
    get arrowHeight() {
      return u();
    },
    set arrowHeight(C) {
      u(C), b();
    },
    get getRotationForValue() {
      return f();
    },
    set getRotationForValue(C) {
      f(C), b();
    },
    get getColourForValue() {
      return c();
    },
    set getColourForValue(C) {
      c(C), b();
    },
    get countedPct() {
      return d();
    },
    set countedPct(C) {
      d(C), b();
    },
    get alpLnp() {
      return v();
    },
    set alpLnp(C = !1) {
      v(C), b();
    },
    get chartName() {
      return h();
    },
    set chartName(C = "") {
      h(C), b();
    }
  });
  return o(), G;
}
ve(
  yo,
  {
    caption: {},
    scales: {},
    arrowHeight: {},
    getRotationForValue: {},
    getColourForValue: {},
    countedPct: {},
    alpLnp: {},
    chartName: {}
  },
  [],
  [],
  !0
);
var Ll = /* @__PURE__ */ Ae("<!> <!>", 1);
const Tl = { hash: "svelte-45h", code: "" };
function xa(e, t) {
  se(t, !0), Me(e, Tl);
  const [r, o] = Mt(), { resetViewboxPadding: n, setViewboxPadding: a } = fo("viewbox-padding") || {}, i = {
    ALP: "Labor",
    LNP: "L/NP",
    GRN: "Greens",
    IND: "Independents",
    ONP: "One Nation",
    TOP: "Trumpet of Patriots"
  };
  let s = y(t, "arrowChart", 7), l = y(t, "groups", 7), u = y(t, "layout", 7), f = y(t, "arrowChartPercentCounted", 7), c = y(t, "arrowChartCaption", 7);
  const d = 0.08;
  let v = /* @__PURE__ */ Z(void 0), h = /* @__PURE__ */ H(() => String(s().split(" ")[0])), p = /* @__PURE__ */ H(() => g(v) ? _l(g(v), (A) => A === g(h)) : {});
  Se(() => {
    vt(mr, (A) => `Change in first pref
for ${g(h)}: ${g(p)[A] ? g(p)[A].toFixed(3) + "%" : "not applicable"}`);
  }), ft(() => () => {
    vt(mr, void 0);
  });
  let x = /* @__PURE__ */ H(() => () => `var(--a-${g(h).length > 3 ? "OTH" : g(h).toUpperCase()}, hotpink)`);
  const _ = () => 20;
  ft(() => {
    const A = a("HexMapArrowsFirsPreference", [33, 0, 30, 0]);
    return pa({ cache: !0 }).then((S) => {
      j(v, S, !0);
    }), () => n(A);
  });
  var N = dt(), w = ye(N);
  {
    var m = (A) => {
      var S = Ll(), T = ye(S);
      bo(T, {
        get groups() {
          return l();
        },
        get layout() {
          return u();
        },
        get arrowData() {
          return g(p);
        },
        arrowHeight: d,
        getRotationForValue: _,
        get getColourForValue() {
          return g(x);
        }
      });
      var I = Q(T, 2);
      const L = /* @__PURE__ */ H(() => c() ? i[g(h)] || g(h) : ""), W = /* @__PURE__ */ H(() => {
        var q, $, G;
        return f() ? (G = ($ = (q = g(v)) == null ? void 0 : q.data) == null ? void 0 : $.overall) == null ? void 0 : G.counted : void 0;
      });
      yo(I, {
        get caption() {
          return g(L);
        },
        chartName: "Primary vote change %",
        get countedPct() {
          return g(W);
        },
        arrowHeight: d,
        getRotationForValue: _,
        get getColourForValue() {
          return g(x);
        },
        scales: [
          { name: "-10", value: -10, tether: "head" },
          { name: "-5", value: -5, tether: "head" },
          { name: "5", value: 5, tether: "base" },
          { name: "10", value: 10, tether: "base" }
        ]
      }), M(A, S);
    };
    fe(w, (A) => {
      g(v) && A(m);
    });
  }
  M(e, N);
  var P = ie({
    get arrowChart() {
      return s();
    },
    set arrowChart(A) {
      s(A), b();
    },
    get groups() {
      return l();
    },
    set groups(A) {
      l(A), b();
    },
    get layout() {
      return u();
    },
    set layout(A) {
      u(A), b();
    },
    get arrowChartPercentCounted() {
      return f();
    },
    set arrowChartPercentCounted(A) {
      f(A), b();
    },
    get arrowChartCaption() {
      return c();
    },
    set arrowChartCaption(A) {
      c(A), b();
    }
  });
  return o(), P;
}
ve(
  xa,
  {
    arrowChart: {},
    groups: {},
    layout: {},
    arrowChartPercentCounted: {},
    arrowChartCaption: {}
  },
  [],
  [],
  !0
);
var Ol = /* @__PURE__ */ Ae("<!> <!>", 1);
function ma(e, t) {
  se(t, !0);
  const [r, o] = Mt(), { resetViewboxPadding: n, setViewboxPadding: a } = fo("viewbox-padding") || {};
  let i = y(t, "groups", 7), s = y(t, "layout", 7), l = y(t, "arrowChartPercentCounted", 7), u = /* @__PURE__ */ Z(void 0), f = /* @__PURE__ */ H(() => {
    const N = g(u);
    if (!N)
      return {};
    const w = ["LIB", "LNP", "NAT", "CLP"];
    return N.data.electorates.reduce(
      (m, P) => {
        var I, L;
        const [A, S] = P.swingDial[0].party.code === "ALP" ? P.swingDial : [...P.swingDial].reverse();
        return A.party.code === "ALP" && w.includes(S.party.code) && Number(P.counted || 0) > 5 && (m[P.code] = Number(((I = A.predicted2CP) == null ? void 0 : I.swing) || ((L = A.simple2CP) == null ? void 0 : L.swing) || 0)), m;
      },
      {}
    );
  });
  Se(() => {
    vt(mr, (N) => `Swing: ${g(f)[N] ? `${g(f)[N].toFixed(2)}% to ${g(f)[N] > 0 ? "ALP" : "Coalition"}` : "not applicable"}`);
  }), ft(() => () => {
    vt(mr, void 0);
  });
  let c = /* @__PURE__ */ H(() => (N) => `var(--a-${N < 0 ? "LNP" : "ALP"}, hotpink)`);
  const d = (N) => N < 0 ? -135 : -45;
  ft(() => {
    pa({ cache: !0 }).then((w) => {
      j(u, w, !0);
    });
    const N = a("HexMapArrowsSwing", [30, 0, 30, 0]);
    return () => n(N);
  });
  const v = 0.06;
  var h = dt(), p = ye(h);
  {
    var x = (N) => {
      var w = Ol(), m = ye(w);
      bo(m, {
        get arrowData() {
          return g(f);
        },
        arrowHeight: v,
        getRotationForValue: d,
        get getColourForValue() {
          return g(c);
        },
        get groups() {
          return i();
        },
        get layout() {
          return s();
        }
      });
      var P = Q(m, 2);
      const A = /* @__PURE__ */ H(() => {
        var S, T, I;
        return l() ? (I = (T = (S = g(u)) == null ? void 0 : S.data) == null ? void 0 : T.overall) == null ? void 0 : I.counted : void 0;
      });
      yo(P, {
        chartName: "Percentage point swing",
        get countedPct() {
          return g(A);
        },
        arrowHeight: v,
        getRotationForValue: d,
        get getColourForValue() {
          return g(c);
        },
        scales: [
          {
            name: "10",
            value: 10,
            tether: "base",
            colour: "var(--a-ALP)"
          },
          {
            name: "5",
            value: 5,
            tether: "base",
            colour: "var(--a-ALP)"
          },
          {
            name: "5",
            value: -5,
            tether: "base",
            colour: "var(--a-LNP)"
          },
          {
            name: "10",
            value: -10,
            tether: "base",
            colour: "var(--a-LNP)"
          }
        ],
        alpLnp: !0
      }), M(N, w);
    };
    fe(p, (N) => {
      g(u) && N(x);
    });
  }
  M(e, h);
  var _ = ie({
    get groups() {
      return i();
    },
    set groups(N) {
      i(N), b();
    },
    get layout() {
      return s();
    },
    set layout(N) {
      s(N), b();
    },
    get arrowChartPercentCounted() {
      return l();
    },
    set arrowChartPercentCounted(N) {
      l(N), b();
    }
  });
  return o(), _;
}
ve(
  ma,
  {
    groups: {},
    layout: {},
    arrowChartPercentCounted: {}
  },
  [],
  [],
  !0
);
function Rl() {
  const e = Rt([0, 0, 0, 0]), t = Rt("none");
  let r = 0;
  function o(i, s) {
    e.set(s);
    const l = [i, r++].join();
    return t.set(l), l;
  }
  function n(i) {
    sa(t) === i && (e.set([0, 0, 0, 0]), t.set("none"));
  }
  const a = {
    setViewboxPadding: o,
    resetViewboxPadding: n
  };
  return xn("viewbox-padding", a), {
    viewboxPadding: e,
    viewboxApi: a
  };
}
function Jo(e, t = [0, 0, 0, 0]) {
  const [r, o, n, a] = t, [i, s, l, u] = e;
  return [i - a, s - r, l + a + o, u + r + n];
}
function kl() {
  return { svgElCurrentScale: Rt(1) };
}
const Il = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABvBAAAbwQGXmrkfAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPpJREFUOI2d0rErhVEYwOHn09dVpFsGRVkMRtnsWCwyUiKRKPGn6FJkRJgsBhtlUgZlsLAZZDCIotw4htvN8dW97v3e8Xd6n06dk4QQEgS/M4BVDMo3NyilEdqNZYwhyQE+YAtnCCmKmMEUCjnAF+zjEOVqTEIIF2jPAX7gAHt4j3oR82kO9Asn2MFz1AuYxBw60ibRK6zjPmoJRlQevKcaG4VvUcJ1pg9hDf3Zhf/gJ2zj1N8v2YdFjNZarAW/YhdH+Ix6FxYwgZZ6N8rCZRyrPMxb1NswjVm01gOz8DfOsYHHzPk4ltDZCBgvXmITd1FPMIwV9DYDVucHs4YzzzgMYBMAAAAASUVORK5CYII=";
var Ml = /* @__PURE__ */ Ae('<div class="hexmap__labels svelte-82t7dm"><!></div>'), Fl = /* @__PURE__ */ Ae('<div class="hexmap svelte-82t7dm"><div><svg><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="10.5" height="6" preserveAspectRatio="xMidYMid"><image x="0" y="0" width="22" height="12" transform="scale(0.5)" transform-origin="top left"></image></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const Bl = {
  hash: "svelte-82t7dm",
  code: ".hexmap.svelte-82t7dm {position:relative;width:100%;height:100%;position:relative;}.hexmap.svelte-82t7dm * {box-sizing:border-box;}.hexmap__labels.svelte-82t7dm {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-82t7dm svg:where(.svelte-82t7dm) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-82t7dm {position:relative;margin:0 auto;max-height:100%;}"
};
function wa(e, t) {
  se(t, !0), Me(e, Bl);
  const [r, o] = Mt(), n = () => pr(te, "$viewboxPadding", r), a = () => pr(oe, "$svgElCurrentScale", r);
  let i = y(t, "config", 23, () => ({})), s = y(t, "layout", 23, () => ({})), l = y(t, "allocations", 23, () => ({})), u = y(t, "focuses", 23, () => ({})), f = y(t, "certainties", 23, () => ({})), c = y(t, "labelsToShow", 23, () => ({})), d = y(t, "showStateLabels", 7, !1), v = y(t, "showElectorateLabels", 7, !1), h = y(t, "showFocusedElectorateLabels", 7, !1), p = y(t, "isStaticLayout", 7, !1), x = y(t, "onClick", 7, ({ code: E }) => {
  }), _ = y(t, "onHover", 7, ({ code: E }) => {
  }), N = y(t, "onFocus", 7, ({ code: E }) => {
  }), w = y(t, "customViewbox", 7, null), m = y(t, "onViewboxChange", 7, ({ newViewbox: E }) => {
  }), P = y(t, "isInteractive", 7, !1), A = y(t, "arrowChart", 7, "None"), S = y(t, "arrowChartPercentCounted", 7, !0), T = y(t, "arrowChartCaption", 7), I = y(t, "selectedElectorate", 7, null), L = y(t, "customElectorateAltText", 7), W = y(t, "showStateOutlinesOnTop", 7, !1), q = y(t, "isInline", 7, !1), $ = y(t, "hexFlip", 7, "None"), G = y(t, "altText", 7, ""), C = /* @__PURE__ */ Z(void 0), O = /* @__PURE__ */ Z(0), R = /* @__PURE__ */ Z(0), K = /* @__PURE__ */ Z(null), X = /* @__PURE__ */ Z(null);
  const { viewboxPadding: te } = Rl(), { svgElCurrentScale: oe } = kl();
  xn("svgElCurrentScale", oe);
  const ue = Jo(s().viewbox, n()), J = {
    easing: fi,
    duration: q() ? 0 : 1100
  };
  let Le = new Et(ue[0], J), Xe = new Et(ue[1], J), Te = new Et(ue[2], J), rt = new Et(ue[3], J);
  Se(() => {
    const [E, re, _t, kr] = Jo(w() || s().viewbox, n());
    Le.set(E), Xe.set(re), Te.set(_t), rt.set(kr);
  }), Se(() => {
    m()(s().viewbox);
  }), Se(() => {
    if (!g(C) || g(R))
      return;
    const E = g(C).getBoundingClientRect();
    j(R, E.height / E.width);
  });
  let Xt = /* @__PURE__ */ H(() => al({
    isInteractive: P(),
    onClick: x(),
    onHover: (E) => {
      j(X, E.code, !0), _()(E);
    }
  }));
  Se(() => {
    let E = g(O), re = Te.current;
    if (!E) {
      vt(oe, 1);
      return;
    }
    vt(oe, re / E + 0.1);
  });
  let Tr = /* @__PURE__ */ H(() => G() ? { "aria-label": G(), role: "img" } : {});
  var Zt = Fl(), Ft = D(Zt);
  gr(
    Ft,
    (E, re) => ({
      class: "hexmap__viz",
      "data-svgratio": g(R) || "null",
      ...g(Xt),
      [Pt]: E,
      [St]: { "aspect-ratio": re }
    }),
    [
      () => ({
        "hexmap__viz--vertical": g(R) <= 1
      }),
      () => g(R) ? g(R).toFixed(3) : null
    ],
    "svelte-82t7dm"
  );
  var yt = D(Ft);
  gr(
    yt,
    (E) => ({
      viewBox: E,
      ...g(Tr)
    }),
    [
      () => [
        Le.current,
        Xe.current,
        Te.current,
        rt.current
      ].join(" ")
    ],
    "svelte-82t7dm"
  );
  var Or = D(yt), Rr = D(Or), Aa = D(Rr);
  k(Rr), k(Or);
  var Co = Q(Or);
  const Na = /* @__PURE__ */ H(() => A() !== "None");
  va(Co, {
    get groups() {
      return i().groups;
    },
    get isStaticLayout() {
      return p();
    },
    get layout() {
      return s();
    },
    get allocations() {
      return l();
    },
    get focuses() {
      return u();
    },
    get certainties() {
      return f();
    },
    get showElectorateLabels() {
      return v();
    },
    get showFocusedElectorateLabels() {
      return h();
    },
    get labelsToShow() {
      return c();
    },
    get showStateOutlinesOnTop() {
      return W();
    },
    get hexFlip() {
      return $();
    },
    get isOutlineOnly() {
      return g(Na);
    }
  });
  var Po = Q(Co);
  ar(Po, {
    get groups() {
      return i().groups;
    },
    get id() {
      return g(K);
    },
    get layout() {
      return s();
    },
    type: "focus"
  });
  var So = Q(Po);
  ar(So, {
    get groups() {
      return i().groups;
    },
    get id() {
      return I();
    },
    get layout() {
      return s();
    },
    type: "focus"
  });
  var Eo = Q(So);
  ar(Eo, {
    get groups() {
      return i().groups;
    },
    get id() {
      return g(X);
    },
    get layout() {
      return s();
    },
    type: "hover"
  });
  var Ca = Q(Eo);
  {
    var Pa = (E) => {
      var re = dt(), _t = ye(re);
      {
        var kr = (At) => {
          ma(At, {
            get groups() {
              return i().groups;
            },
            get layout() {
              return s();
            },
            get arrowChartPercentCounted() {
              return S();
            }
          });
        }, Ra = (At) => {
          xa(At, {
            get groups() {
              return i().groups;
            },
            get layout() {
              return s();
            },
            get arrowChart() {
              return A();
            },
            get arrowChartPercentCounted() {
              return S();
            },
            get arrowChartCaption() {
              return T();
            }
          });
        };
        fe(_t, (At) => {
          A() === "Labor/Coalition 2CP Swing" ? At(kr) : At(Ra, !1);
        });
      }
      M(E, re);
    };
    fe(Ca, (E) => {
      A() !== "None" && E(Pa);
    });
  }
  k(yt), Qt(yt, (E) => j(C, E), () => g(C));
  var Sa = Q(yt, 2);
  {
    var Ea = (E) => {
      var re = Ml(), _t = D(re);
      la(_t, {
        get labels() {
          return s().labels;
        },
        get overlayLabels() {
          return s().overlayLabels;
        }
      }), k(re), M(E, re);
    };
    fe(Sa, (E) => {
      d() && E(Ea);
    });
  }
  k(Ft);
  var La = Q(Ft, 2);
  {
    var Ta = (E) => {
      ca(E, {
        get customElectorateAltText() {
          return L();
        },
        get groups() {
          return i().groups;
        },
        get layout() {
          return s();
        },
        onChange: (re) => {
          j(K, re, !0);
        },
        onClick: x(),
        onFocus: N()
      });
    };
    fe(La, (E) => {
      P() && E(Ta);
    });
  }
  k(Zt), ae(
    (E) => {
      z(Rr, "patternTransform", E), z(Aa, "href", Il);
    },
    [
      () => `scale(${a().toFixed(2)})`
    ]
  ), ai(yt, "clientWidth", (E) => j(O, E)), ht(3, Ft, () => gt, () => ({ duration: q() ? 0 : 250 })), ht(3, Zt, () => gt, () => ({ duration: 750 })), M(e, Zt);
  var Oa = ie({
    get config() {
      return i();
    },
    set config(E = {}) {
      i(E), b();
    },
    get layout() {
      return s();
    },
    set layout(E = {}) {
      s(E), b();
    },
    get allocations() {
      return l();
    },
    set allocations(E = {}) {
      l(E), b();
    },
    get focuses() {
      return u();
    },
    set focuses(E = {}) {
      u(E), b();
    },
    get certainties() {
      return f();
    },
    set certainties(E = {}) {
      f(E), b();
    },
    get labelsToShow() {
      return c();
    },
    set labelsToShow(E = {}) {
      c(E), b();
    },
    get showStateLabels() {
      return d();
    },
    set showStateLabels(E = !1) {
      d(E), b();
    },
    get showElectorateLabels() {
      return v();
    },
    set showElectorateLabels(E = !1) {
      v(E), b();
    },
    get showFocusedElectorateLabels() {
      return h();
    },
    set showFocusedElectorateLabels(E = !1) {
      h(E), b();
    },
    get isStaticLayout() {
      return p();
    },
    set isStaticLayout(E = !1) {
      p(E), b();
    },
    get onClick() {
      return x();
    },
    set onClick(E = ({ code: re }) => {
    }) {
      x(E), b();
    },
    get onHover() {
      return _();
    },
    set onHover(E = ({ code: re }) => {
    }) {
      _(E), b();
    },
    get onFocus() {
      return N();
    },
    set onFocus(E = ({ code: re }) => {
    }) {
      N(E), b();
    },
    get customViewbox() {
      return w();
    },
    set customViewbox(E = null) {
      w(E), b();
    },
    get onViewboxChange() {
      return m();
    },
    set onViewboxChange(E = ({ newViewbox: re }) => {
    }) {
      m(E), b();
    },
    get isInteractive() {
      return P();
    },
    set isInteractive(E = !1) {
      P(E), b();
    },
    get arrowChart() {
      return A();
    },
    set arrowChart(E = "None") {
      A(E), b();
    },
    get arrowChartPercentCounted() {
      return S();
    },
    set arrowChartPercentCounted(E = !0) {
      S(E), b();
    },
    get arrowChartCaption() {
      return T();
    },
    set arrowChartCaption(E) {
      T(E), b();
    },
    get selectedElectorate() {
      return I();
    },
    set selectedElectorate(E = null) {
      I(E), b();
    },
    get customElectorateAltText() {
      return L();
    },
    set customElectorateAltText(E) {
      L(E), b();
    },
    get showStateOutlinesOnTop() {
      return W();
    },
    set showStateOutlinesOnTop(E = !1) {
      W(E), b();
    },
    get isInline() {
      return q();
    },
    set isInline(E = !1) {
      q(E), b();
    },
    get hexFlip() {
      return $();
    },
    set hexFlip(E = "None") {
      $(E), b();
    },
    get altText() {
      return G();
    },
    set altText(E = "") {
      G(E), b();
    }
  });
  return o(), Oa;
}
ve(
  wa,
  {
    config: {},
    layout: {},
    allocations: {},
    focuses: {},
    certainties: {},
    labelsToShow: {},
    showStateLabels: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    isStaticLayout: {},
    onClick: {},
    onHover: {},
    onFocus: {},
    customViewbox: {},
    onViewboxChange: {},
    isInteractive: {},
    arrowChart: {},
    arrowChartPercentCounted: {},
    arrowChartCaption: {},
    selectedElectorate: {},
    customElectorateAltText: {},
    showStateOutlinesOnTop: {},
    isInline: {},
    hexFlip: {},
    altText: {}
  },
  [],
  [],
  !0
);
let Dl = Rt({
  allocated: {},
  uncertain: {}
});
const Hl = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#767676", fullStateOutline: "transparent", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "#767676", tileFocusBorder: "black", tileFocusBorderGap: "white", tileInteractBorder: "black" }, Vl = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", TOP: "#cc8500", Teal: "#0098a6" }, Wl = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", TOP: "#f5e7cc" }, en = {
  c: Hl,
  allocated: Vl,
  uncertain: Wl
};
function ba(e, t) {
  se(t, !0);
  const [r, o] = Mt();
  let n = y(t, "rootEl", 15), a = y(t, "colours", 7, en);
  Se(() => {
    const s = a(), l = n();
    if (!l)
      return;
    vt(Dl, {
      allocated: s.allocated,
      uncertain: s.uncertain
    });
    const u = { allocated: "a", uncertain: "u" };
    Object.entries(s).forEach(([f, c]) => {
      const d = u[f] || f;
      Object.entries(c).forEach(([v, h]) => {
        const p = `--${d}-${v}`;
        l.style.setProperty(p, h);
      });
    });
  }), ft(() => {
    n();
  }), Qt(Pn.body, (s) => n(s), () => n());
  var i = ie({
    get rootEl() {
      return n();
    },
    set rootEl(s) {
      n(s), b();
    },
    get colours() {
      return a();
    },
    set colours(s = en) {
      a(s), b();
    }
  });
  return o(), i;
}
ve(ba, { rootEl: {}, colours: {} }, [], [], !0);
const $l = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.003006, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 34, top: 30.25, width: 8, name: "NT" }, { left: 65.25, top: 21.25, width: 8, name: "QLD" }, { left: 57.75, top: 43.5, width: 8, name: "NSW" }, { left: 67.5, top: 57.5, width: 8, name: "ACT" }, { left: 58, top: 66.5, width: 8, name: "VIC" }, { left: 58, top: 85.5, width: 8, name: "TAS" }, { left: 34, top: 48.5, width: 8, name: "SA" }, { left: 24.5, top: 53, width: 8, name: "WA" }], overlayLabels: !0 }, Gl = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.25, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 71, top: 63, width: 8, name: "ACT" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, Ul = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, jl = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, zl = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, Yl = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Kl = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, ql = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, Ql = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, Xl = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Zl = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Jl = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, eu = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, tu = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, ru = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, ou = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, nu = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, au = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, su = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, iu = {
  COUNTRY: $l,
  EXPLODED: Gl,
  EXPLODED_STATES_ONLY: Ul,
  GRID: jl,
  ACT: zl,
  NSW: Yl,
  NT: Kl,
  QLD: ql,
  SA: Ql,
  TAS: Xl,
  VIC: Zl,
  WA: Jl,
  ACT_NT: eu,
  NSW_QLD: tu,
  NSW_VIC: ru,
  QLD_VIC: ou,
  QLD_WA: nu,
  QLD_NSW_VIC: au,
  SA_TAS_WA: su
}, lu = 291, uu = 200, cu = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Syd","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"Mcma","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"Rivr","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robs","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shld","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chif","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kngs","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunn","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Bnks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Grnw","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Ling","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxly","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fish","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bow","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lill","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flyn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capr","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dick","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Grif","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fair","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blar","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Bris","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrgt","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hink","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Lcht","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kend","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"Mcph","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Rank","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petr","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Ford","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groo","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Strt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makn","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"King","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brdn","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clrk","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyon","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Astn","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Cori","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bndi","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruc","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casy","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chis","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalo","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deak","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flnd","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gips","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawk","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wils","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"Latr","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McE","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nich","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moor","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curt","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowa","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Prth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brnd","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Cani","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"Ocon","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), _o = {
  svgWidth: lu,
  svgHeight: uu,
  groups: cu
};
function du(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hr, tn;
function fu() {
  if (tn) return Hr;
  tn = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), o = 0; o < r.length; o++)
      r[o] = 255;
    for (var n = 0; n < t.length; n++) {
      var a = t.charAt(n), i = a.charCodeAt(0);
      if (r[i] !== 255)
        throw new TypeError(a + " is ambiguous");
      r[i] = n;
    }
    var s = t.length, l = t.charAt(0), u = Math.log(s) / Math.log(256), f = Math.log(256) / Math.log(s);
    function c(h) {
      if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (h.length === 0)
        return "";
      for (var p = 0, x = 0, _ = 0, N = h.length; _ !== N && h[_] === 0; )
        _++, p++;
      for (var w = (N - _) * f + 1 >>> 0, m = new Uint8Array(w); _ !== N; ) {
        for (var P = h[_], A = 0, S = w - 1; (P !== 0 || A < x) && S !== -1; S--, A++)
          P += 256 * m[S] >>> 0, m[S] = P % s >>> 0, P = P / s >>> 0;
        if (P !== 0)
          throw new Error("Non-zero carry");
        x = A, _++;
      }
      for (var T = w - x; T !== w && m[T] === 0; )
        T++;
      for (var I = l.repeat(p); T < w; ++T)
        I += t.charAt(m[T]);
      return I;
    }
    function d(h) {
      if (typeof h != "string")
        throw new TypeError("Expected String");
      if (h.length === 0)
        return new Uint8Array();
      for (var p = 0, x = 0, _ = 0; h[p] === l; )
        x++, p++;
      for (var N = (h.length - p) * u + 1 >>> 0, w = new Uint8Array(N); h[p]; ) {
        var m = r[h.charCodeAt(p)];
        if (m === 255)
          return;
        for (var P = 0, A = N - 1; (m !== 0 || P < _) && A !== -1; A--, P++)
          m += s * w[A] >>> 0, w[A] = m % 256 >>> 0, m = m / 256 >>> 0;
        if (m !== 0)
          throw new Error("Non-zero carry");
        _ = P, p++;
      }
      for (var S = N - _; S !== N && w[S] === 0; )
        S++;
      for (var T = new Uint8Array(x + (N - S)), I = x; S !== N; )
        T[I++] = w[S++];
      return T;
    }
    function v(h) {
      var p = d(h);
      if (p)
        return p;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: c,
      decodeUnsafe: d,
      decode: v
    };
  }
  return Hr = e, Hr;
}
var hu = fu();
const vu = /* @__PURE__ */ du(hu);
var gu = "0123456789abcdefghijklmnopqrstuvwxyz";
vu(gu);
new TextEncoder();
new TextDecoder();
const pu = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, xu = function(e, { delineator: t }) {
  e += t;
  const r = [];
  let o = e;
  for (let a = 0; a < e.length; a++)
    o = pu(o), r.push(o);
  r.sort();
  let n = "";
  for (let a = 0; a < r.length; a++)
    n += r[a].charAt(r[a].length - 1);
  return n;
}, mu = function(e, { delineator: t }) {
  const o = e.split("").slice(0);
  for (let a = 0; a < e.length - 1; a++) {
    o.sort();
    for (let i = 0; i < e.length; i++)
      o[i] = e[i] + o[i];
  }
  return o.filter(function(a) {
    return a.charAt(a.length - 1) === t;
  })[0].substring(0, e.length - 1);
};
function ya(e) {
  if (!e.match(/^[a-z]*$/))
    throw console.error("Unexpected characters in RLE encoder", e), new Error("RLE encoder only supports a-z values.");
  return e.split("").reduce(
    /**
     *
     * @param {Memo[]} memo
     * @param {string} char
     * @param {number} index
     * @returns
     */
    (t, r, o) => (o === 0 || r !== t[t.length - 1].char ? t.push({ char: r, repeated: 1 }) : t[t.length - 1].repeated++, t),
    []
  ).reduce((t, { char: r, repeated: o }) => t += o === 1 ? r : r + String(o), "");
}
function _a(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, r, o) => r.repeat(+o)
  );
}
async function wu(e, { delineator: t }) {
  const r = xu(e, { delineator: t });
  return ya(r);
}
async function bu(e, { delineator: t }) {
  const r = _a(e);
  return mu(r, { delineator: t });
}
function yu({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => wu(t, { delineator: e }),
    decode: (t) => bu(t, { delineator: e })
  };
}
const to = 26, ro = 97, _u = 48, rn = async (e, { maxBits: t }) => {
  const r = [1, ...e].map((s) => s ? 1 : 0).join(""), o = [];
  for (let s = r.length; s > 0; s -= t)
    o.push(r.slice(Math.max(0, s - t), s));
  return o.reverse(), o.map((s) => parseInt(s, 2)).map((s) => s > to ? s % to : String.fromCharCode(s + ro)).join("");
};
async function on(e, { maxBits: t }) {
  return e.split("").map((s) => s.charCodeAt(0)).map(
    (s) => s >= ro ? s - ro : s - _u + to
  ).map(
    (s, l) => Number(s).toString(2).padStart(l > 0 ? t : 0, "0")
  ).flatMap(
    (s) => s.split("").map((l) => l === "1")
  ).slice(1);
}
function Au({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => ya(await rn(t, { maxBits: e })),
    decode: async (t) => on(_a(t), { maxBits: e })
  } : {
    encode: (t) => rn(t, { maxBits: e }),
    decode: (t) => on(t, { maxBits: e })
  };
}
const Ao = _o.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), Nu = Object.values(Ao).reduce((e, t) => (e[t.id] = t, e), {});
_o.groups;
const oo = "q", Cu = "x";
yu({ delineator: oo });
const Pu = Li(ga.hashCodes);
if (Pu[oo] || Cu === oo)
  throw new Error("Can not use delineator in allocation map");
Au({ maxBits: 4 });
Object.freeze(
  Ao.reduce((e, t) => (e[t.id] = null, e), {})
);
Object.freeze(
  Ao.reduce((e, t) => (e[t.id] = !0, e), {})
);
var Su = /* @__PURE__ */ Ae("<!> <div><!></div>", 1);
function Eu(e, t) {
  se(t, !0);
  let r = y(t, "allocations", 23, () => ({})), o = y(t, "certainties", 23, () => ({})), n = y(t, "focuses", 23, () => ({})), a = y(t, "showStateLabels", 7, !1), i = y(t, "showElectorateLabels", 7, !1), s = y(t, "layout", 7, "COUNTRY"), l = y(t, "selectedElectorate", 7, null), u = y(t, "customViewbox", 7, null), f = y(t, "onClick", 7, () => {
  }), c = y(t, "onHover", 7, () => {
  }), d = y(t, "onFocus", 7, () => {
  }), v = y(t, "onApi", 7, () => {
  }), h = y(t, "onViewboxChange", 7, () => {
  }), p = y(t, "isStaticLayout", 7, !0), x = y(t, "isInteractive", 7, !0), _ = y(t, "globalStyleRoot", 7, !0), N = y(t, "colours", 7), w = y(t, "customElectorateAltText", 23, () => ({})), m = y(t, "areStateOutlinesOnTop", 7), P = /* @__PURE__ */ Z(void 0), A = /* @__PURE__ */ H(() => iu[s()]), S = /* @__PURE__ */ H(() => _() ? void 0 : g(P));
  function T(C, O, R, K = !0) {
    const X = K ? R.getScreenCTM() : R.getCTM(), te = R.createSVGPoint();
    te.x = C, te.y = O;
    const oe = te.matrixTransform(X);
    return [oe.x, oe.y].map(Number);
  }
  function I(C) {
    const O = Nu[C], R = g(A).positions[O == null ? void 0 : O.group];
    if (!g(P))
      return;
    const K = g(P).querySelector("svg");
    if (!O || !R || !K)
      throw new Error(`Could not find hexagon with id ${C}`);
    const X = [-0.5, -1], [te, oe] = Lr(
      [
        R[0] + X[0],
        R[1] + X[1]
      ],
      ""
    ).map(Number), ue = Number(O.coordPx[0] + te), J = Number(O.coordPx[1] + oe), [Le, Xe] = T(ue, J, K), [Te, rt] = T(ue, J, K, !1);
    return {
      code: C,
      screenCoord: [Le, Xe],
      containerCoord: [Te, rt],
      svgCoord: [ue, J]
    };
  }
  function L(C) {
    var R;
    const O = (R = g(P)) == null ? void 0 : R.querySelector(`.hexmapkeyboardnav button[data-id="${C}"]`);
    O instanceof HTMLButtonElement && O.focus();
  }
  Se(() => {
    v() && v()({ getHex: I, focusHex: L });
  });
  var W = Su(), q = ye(W);
  ba(q, {
    get colours() {
      return N();
    },
    get rootEl() {
      return g(S);
    },
    set rootEl(C) {
      j(S, C, !0);
    }
  });
  var $ = Q(q, 2), G = D($);
  return wa(G, {
    get config() {
      return _o;
    },
    get layout() {
      return g(A);
    },
    get allocations() {
      return r();
    },
    get certainties() {
      return o();
    },
    get focuses() {
      return n();
    },
    get showStateLabels() {
      return a();
    },
    get showElectorateLabels() {
      return i();
    },
    onClick: f(),
    onHover: c(),
    onFocus: d(),
    get selectedElectorate() {
      return l();
    },
    get customViewbox() {
      return u();
    },
    get isStaticLayout() {
      return p();
    },
    get isInteractive() {
      return x();
    },
    onViewboxChange: h(),
    get customElectorateAltText() {
      return w();
    },
    get showStateOutlinesOnTop() {
      return m();
    }
  }), k($), Qt($, (C) => j(P, C), () => g(P)), M(e, W), ie({
    get allocations() {
      return r();
    },
    set allocations(C = {}) {
      r(C), b();
    },
    get certainties() {
      return o();
    },
    set certainties(C = {}) {
      o(C), b();
    },
    get focuses() {
      return n();
    },
    set focuses(C = {}) {
      n(C), b();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(C = !1) {
      a(C), b();
    },
    get showElectorateLabels() {
      return i();
    },
    set showElectorateLabels(C = !1) {
      i(C), b();
    },
    get layout() {
      return s();
    },
    set layout(C = "COUNTRY") {
      s(C), b();
    },
    get selectedElectorate() {
      return l();
    },
    set selectedElectorate(C = null) {
      l(C), b();
    },
    get customViewbox() {
      return u();
    },
    set customViewbox(C = null) {
      u(C), b();
    },
    get onClick() {
      return f();
    },
    set onClick(C = () => {
    }) {
      f(C), b();
    },
    get onHover() {
      return c();
    },
    set onHover(C = () => {
    }) {
      c(C), b();
    },
    get onFocus() {
      return d();
    },
    set onFocus(C = () => {
    }) {
      d(C), b();
    },
    get onApi() {
      return v();
    },
    set onApi(C = () => {
    }) {
      v(C), b();
    },
    get onViewboxChange() {
      return h();
    },
    set onViewboxChange(C = () => {
    }) {
      h(C), b();
    },
    get isStaticLayout() {
      return p();
    },
    set isStaticLayout(C = !0) {
      p(C), b();
    },
    get isInteractive() {
      return x();
    },
    set isInteractive(C = !0) {
      x(C), b();
    },
    get globalStyleRoot() {
      return _();
    },
    set globalStyleRoot(C = !0) {
      _(C), b();
    },
    get colours() {
      return N();
    },
    set colours(C) {
      N(C), b();
    },
    get customElectorateAltText() {
      return w();
    },
    set customElectorateAltText(C = {}) {
      w(C), b();
    },
    get areStateOutlinesOnTop() {
      return m();
    },
    set areStateOutlinesOnTop(C) {
      m(C), b();
    }
  });
}
customElements.define("abcnews-hexmap", ve(
  Eu,
  {
    allocations: {},
    certainties: {},
    focuses: {},
    showStateLabels: {},
    showElectorateLabels: {},
    layout: {},
    selectedElectorate: {},
    customViewbox: {},
    onClick: {},
    onHover: {},
    onFocus: {},
    onApi: {},
    onViewboxChange: {},
    isStaticLayout: {},
    isInteractive: {},
    globalStyleRoot: {},
    colours: {},
    customElectorateAltText: {},
    areStateOutlinesOnTop: {}
  },
  [],
  [],
  !0
));
export {
  Eu as default
};
