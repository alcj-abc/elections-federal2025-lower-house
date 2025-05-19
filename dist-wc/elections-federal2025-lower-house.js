var ka = Object.defineProperty;
var Lo = (e) => {
  throw TypeError(e);
};
var Ia = (e, t, r) => t in e ? ka(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Pe = (e, t, r) => Ia(e, typeof t != "symbol" ? t + "" : t, r), Ir = (e, t, r) => t.has(e) || Lo("Cannot " + r);
var B = (e, t, r) => (Ir(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Oe = (e, t, r) => t.has(e) ? Lo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ot = (e, t, r, o) => (Ir(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r), To = (e, t, r) => (Ir(e, t, "access private method"), r);
const Ma = "5";
var nn;
typeof window < "u" && ((nn = window.__svelte ?? (window.__svelte = {})).v ?? (nn.v = /* @__PURE__ */ new Set())).add(Ma);
const no = 1, ao = 2, an = 4, Fa = 8, Ba = 16, Da = 1, Ha = 4, Va = 8, Wa = 16, $a = 1, Ga = 2, Ua = 4, sn = 1, ja = 2, so = "[", io = "[!", lo = "]", st = {}, de = Symbol(), za = "http://www.w3.org/1999/xhtml", Ya = "@attach", Oo = !1;
var _r = Array.isArray, Ka = Array.prototype.indexOf, uo = Array.from, ir = Object.keys, Gt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, qa = Object.getOwnPropertyDescriptors, Qa = Object.prototype, Xa = Array.prototype, ln = Object.getPrototypeOf, Ro = Object.isExtensible;
function Za(e) {
  return typeof e == "function";
}
const pe = () => {
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
const ke = 2, cn = 4, Ar = 8, Nr = 16, Xe = 32, pt = 64, lr = 128, be = 256, ur = 512, xe = 1024, Ve = 2048, xt = 4096, Ye = 8192, Cr = 16384, dn = 32768, qt = 65536, es = 1 << 19, fn = 1 << 20, Vr = 1 << 21, lt = Symbol("$state"), hn = Symbol("legacy props"), ts = Symbol("");
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
let te = null;
function ko(e) {
  te = e;
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
function le(e, t = !1, r) {
  var o = te = {
    p: te,
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
function ue(e) {
  const t = te;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var r = z, o = Q;
      t.e = null;
      try {
        for (var n = 0; n < i.length; n++) {
          var a = i[n];
          We(a.effect), Te(a.reaction), wt(a.fn);
        }
      } finally {
        We(r), Te(o);
      }
    }
    te = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function mn() {
  return !0;
}
function wn(e) {
  return te === null && pn(), te.c ?? (te.c = new Map(hs(te) || void 0));
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
  var r = /* @__PURE__ */ new Map(), o = _r(e), n = /* @__PURE__ */ ee(0), a = Q, i = (s) => {
    var l = Q;
    Te(a);
    var u = s();
    return Te(l), u;
  };
  return o && r.set("length", /* @__PURE__ */ ee(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && us();
        var f = r.get(l);
        return f === void 0 ? (f = i(() => /* @__PURE__ */ ee(u.value)), r.set(l, f)) : K(
          f,
          i(() => nt(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = r.get(l);
        if (u === void 0)
          l in s && (r.set(
            l,
            i(() => /* @__PURE__ */ ee(de))
          ), Mr(n));
        else {
          if (o && typeof l == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), c = Number(l);
            Number.isInteger(c) && c < f.v && K(f, c);
          }
          K(u, de), Mr(n);
        }
        return !0;
      },
      get(s, l, u) {
        var h;
        if (l === lt)
          return e;
        var f = r.get(l), c = l in s;
        if (f === void 0 && (!c || (h = it(s, l)) != null && h.writable) && (f = i(() => /* @__PURE__ */ ee(nt(c ? s[l] : de))), r.set(l, f)), f !== void 0) {
          var d = v(f);
          return d === de ? void 0 : d;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var f = r.get(l);
          f && (u.value = v(f));
        } else if (u === void 0) {
          var c = r.get(l), d = c == null ? void 0 : c.v;
          if (c !== void 0 && d !== de)
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
        var u = r.get(l), f = u !== void 0 && u.v !== de || Reflect.has(s, l);
        if (u !== void 0 || z !== null && (!f || (d = it(s, l)) != null && d.writable)) {
          u === void 0 && (u = i(() => /* @__PURE__ */ ee(f ? nt(s[l]) : de)), r.set(l, u));
          var c = v(u);
          if (c === de)
            return !1;
        }
        return f;
      },
      set(s, l, u, f) {
        var A;
        var c = r.get(l), d = l in s;
        if (o && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          c.v; h += 1) {
            var g = r.get(h + "");
            g !== void 0 ? K(g, de) : h in s && (g = i(() => /* @__PURE__ */ ee(de)), r.set(h + "", g));
          }
        c === void 0 ? (!d || (A = it(s, l)) != null && A.writable) && (c = i(() => /* @__PURE__ */ ee(void 0)), K(
          c,
          i(() => nt(u))
        ), r.set(l, c)) : (d = c.v !== de, K(
          c,
          i(() => nt(u))
        ));
        var _ = Reflect.getOwnPropertyDescriptor(s, l);
        if (_ != null && _.set && _.set.call(f, u), !d) {
          if (o && typeof l == "string") {
            var N = (
              /** @type {Source<number>} */
              r.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p >= N.v && K(N, p + 1);
          }
          Mr(n);
        }
        return !0;
      },
      ownKeys(s) {
        v(n);
        var l = Reflect.ownKeys(s).filter((c) => {
          var d = r.get(c);
          return d === void 0 || d.v !== de;
        });
        for (var [u, f] of r)
          f.v !== de && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        cs();
      }
    }
  );
}
function Mr(e, t = 1) {
  K(e, e.v + t);
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
function Qt(e) {
  var t = ke | Ve, r = Q !== null && Q.f & ke ? (
    /** @type {Derived} */
    Q
  ) : null;
  return z === null || r !== null && r.f & be ? t |= be : z.f |= fn, {
    ctx: te,
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
    parent: r ?? z
  };
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = /* @__PURE__ */ Qt(e);
  return Dn(t), t;
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  const t = /* @__PURE__ */ Qt(e);
  return t.equals = co, t;
}
function yn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ne(
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
  var t, r = z;
  We(gs(e));
  try {
    yn(e), t = $n(e);
  } finally {
    We(r);
  }
  return t;
}
function An(e) {
  var t = _n(e);
  if (e.equals(t) || (e.v = t, e.wv = Vn()), !Ft) {
    var r = (et || e.f & be) && e.deps !== null ? xt : xe;
    Ie(e, r);
  }
}
const Ut = /* @__PURE__ */ new Map();
function kt(e, t) {
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
function ee(e, t) {
  const r = kt(e);
  return Dn(r), r;
}
// @__NO_SIDE_EFFECTS__
function Pr(e, t = !1) {
  const r = kt(e);
  return t || (r.equals = co), r;
}
function K(e, t, r = !1) {
  Q !== null && !Be && mn() && Q.f & (ke | Nr) && !(he != null && he.includes(e)) && ds();
  let o = r ? nt(t) : t;
  return Wr(e, o);
}
function Wr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Ft ? Ut.set(e, t) : Ut.set(e, r), e.v = t, e.f & ke && (e.f & Ve && _n(
      /** @type {Derived} */
      e
    ), Ie(e, e.f & be ? xt : xe)), e.wv = Vn(), Nn(e, Ve), z !== null && z.f & xe && !(z.f & (Xe | pt)) && (Se === null ? Ns([e]) : Se.push(e));
  }
  return t;
}
function Nn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var o = r.length, n = 0; n < o; n++) {
      var a = r[n], i = a.f;
      i & Ve || (Ie(a, t), i & (xe | be) && (i & ke ? Nn(
        /** @type {Derived} */
        a,
        xt
      ) : Er(
        /** @type {Effect} */
        a
      )));
    }
}
function Xt(e) {
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
function ye(e) {
  if (e === null)
    throw Xt(), st;
  return V = e;
}
function ct() {
  return ye(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(V)
  );
}
function k(e) {
  if (F) {
    if (/* @__PURE__ */ Ge(V) !== null)
      throw Xt(), st;
    V = e;
  }
}
function cr(e = 1) {
  if (F) {
    for (var t = e, r = V; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(r);
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
      /* @__PURE__ */ Ge(t)
    );
    t.remove(), t = o;
  }
}
function Cn(e) {
  if (!e || e.nodeType !== 8)
    throw Xt(), st;
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
function se(e) {
  return En.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return Ln.call(e);
}
function D(e, t) {
  if (!F)
    return /* @__PURE__ */ se(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ se(V)
  );
  if (r === null)
    r = V.appendChild(tt());
  else if (t && r.nodeType !== 3) {
    var o = tt();
    return r == null || r.before(o), ye(o), o;
  }
  return ye(r), r;
}
function Ae(e, t) {
  if (!F) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ se(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ge(r) : r;
  }
  return V;
}
function X(e, t = 1, r = !1) {
  let o = F ? V : e;
  for (var n; t--; )
    n = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(o);
  if (!F)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (r && a !== 3) {
    var i = tt();
    return o === null ? n == null || n.after(i) : o.before(i), ye(i), i;
  }
  return ye(o), /** @type {TemplateNode} */
  o;
}
function Tn(e) {
  e.textContent = "";
}
function xs(e) {
  z === null && Q === null && as(), Q !== null && Q.f & be && z === null && ns(), Ft && os();
}
function ms(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function mt(e, t, r, o = !0) {
  var n = z, a = {
    ctx: te,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ve,
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
      throw Ne(a), l;
    }
  else t !== null && Er(a);
  var i = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (fn | lr)) === 0;
  if (!i && o && (n !== null && ms(a, n), Q !== null && Q.f & ke)) {
    var s = (
      /** @type {Derived} */
      Q
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return a;
}
function ho(e) {
  const t = mt(Ar, null, !1);
  return Ie(t, xe), t.teardown = e, t;
}
function Le(e) {
  xs();
  var t = z !== null && (z.f & Xe) !== 0 && te !== null && !te.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      te
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: z,
      reaction: Q
    });
  } else {
    var o = wt(e);
    return o;
  }
}
function ws(e) {
  const t = mt(pt, e, !0);
  return () => {
    Ne(t);
  };
}
function bs(e) {
  const t = mt(pt, e, !0);
  return (r = {}) => new Promise((o) => {
    r.outro ? jt(t, () => {
      Ne(t), o(void 0);
    }) : (Ne(t), o(void 0));
  });
}
function wt(e) {
  return mt(cn, e, !1);
}
function vo(e) {
  return mt(Ar, e, !0);
}
function ie(e, t = [], r = Qt) {
  const o = t.map(r);
  return bt(() => e(...o.map(v)));
}
function bt(e, t = 0) {
  return mt(Ar | Nr | t, e, !0);
}
function Ke(e, t = !0) {
  return mt(Ar | Xe, e, !0, t);
}
function On(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ft, o = Q;
    Fo(!0), Te(null);
    try {
      t.call(null);
    } finally {
      Fo(r), Te(o);
    }
  }
}
function Rn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var o = r.next;
    r.f & pt ? r.parent = null : Ne(r, t), r = o;
  }
}
function ys(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Xe || Ne(t), t = r;
  }
}
function Ne(e, t = !0) {
  var r = !1;
  (t || e.f & es) && e.nodes_start !== null && (kn(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Rn(e, t && !r), gr(e, 0), Ie(e, Cr);
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
      /* @__PURE__ */ Ge(e)
    );
    e.remove(), e = r;
  }
}
function In(e) {
  var t = e.parent, r = e.prev, o = e.next;
  r !== null && (r.next = o), o !== null && (o.prev = r), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = r));
}
function jt(e, t) {
  var r = [];
  go(e, r, !0), Mn(r, () => {
    Ne(e), t && t();
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
  if (!(e.f & Ye)) {
    if (e.f ^= Ye, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || r) && t.push(i);
    for (var o = e.first; o !== null; ) {
      var n = o.next, a = (o.f & qt) !== 0 || (o.f & Xe) !== 0;
      go(o, t, a ? r : !1), o = n;
    }
  }
}
function dr(e) {
  Fn(e, !0);
}
function Fn(e, t) {
  if (e.f & Ye) {
    e.f ^= Ye, e.f & xe || (e.f ^= xe), Zt(e) && (Ie(e, Ve), Er(e));
    for (var r = e.first; r !== null; ) {
      var o = r.next, n = (r.f & qt) !== 0 || (r.f & Xe) !== 0;
      Fn(r, n ? t : !1), r = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let zt = [], Ur = [];
function Bn() {
  var e = zt;
  zt = [], un(e);
}
function _s() {
  var e = Ur;
  Ur = [], un(e);
}
function Mt(e) {
  zt.length === 0 && queueMicrotask(Bn), zt.push(e);
}
function As() {
  zt.length > 0 && Bn(), Ur.length > 0 && _s();
}
let nr = !1, fr = !1, hr = null, ut = !1, Ft = !1;
function Fo(e) {
  Ft = e;
}
let $t = [];
let Q = null, Be = !1;
function Te(e) {
  Q = e;
}
let z = null;
function We(e) {
  z = e;
}
let he = null;
function Dn(e) {
  Q !== null && Q.f & Vr && (he === null ? he = [e] : he.push(e));
}
let fe = null, we = 0, Se = null;
function Ns(e) {
  Se = e;
}
let Hn = 1, vr = 0, et = !1;
function Vn() {
  return ++Hn;
}
function Zt(e) {
  var c;
  var t = e.f;
  if (t & Ve)
    return !0;
  if (t & xt) {
    var r = e.deps, o = (t & be) !== 0;
    if (r !== null) {
      var n, a, i = (t & ur) !== 0, s = o && z !== null && !et, l = r.length;
      if (i || s) {
        var u = (
          /** @type {Derived} */
          e
        ), f = u.parent;
        for (n = 0; n < l; n++)
          a = r[n], (i || !((c = a == null ? void 0 : a.reactions) != null && c.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        i && (u.f ^= ur), s && f !== null && !(f.f & be) && (u.f ^= be);
      }
      for (n = 0; n < l; n++)
        if (a = r[n], Zt(
          /** @type {Derived} */
          a
        ) && An(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || z !== null && !et) && Ie(e, xe);
  }
  return !1;
}
function Cs(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & lr)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= lr;
      }
    r = r.parent;
  }
  throw nr = !1, e;
}
function Bo(e) {
  return (e.f & Cr) === 0 && (e.parent === null || (e.parent.f & lr) === 0);
}
function Sr(e, t, r, o) {
  if (nr) {
    if (r === null && (nr = !1), Bo(t))
      throw e;
    return;
  }
  if (r !== null && (nr = !0), Cs(e, t), Bo(t))
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
      ) : t === a && (r ? Ie(a, Ve) : a.f & xe && Ie(a, xt), Er(
        /** @type {Effect} */
        a
      )));
    }
}
function $n(e) {
  var h;
  var t = fe, r = we, o = Se, n = Q, a = et, i = he, s = te, l = Be, u = e.f;
  fe = /** @type {null | Value[]} */
  null, we = 0, Se = null, et = (u & be) !== 0 && (Be || !ut || Q === null), Q = u & (Xe | pt) ? null : e, he = null, ko(e.ctx), Be = !1, vr++, e.f |= Vr;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (fe !== null) {
      var d;
      if (gr(e, we), c !== null && we > 0)
        for (c.length = we + fe.length, d = 0; d < fe.length; d++)
          c[we + d] = fe[d];
      else
        e.deps = c = fe;
      if (!et)
        for (d = we; d < c.length; d++)
          ((h = c[d]).reactions ?? (h.reactions = [])).push(e);
    } else c !== null && we < c.length && (gr(e, we), c.length = we);
    if (mn() && Se !== null && !Be && c !== null && !(e.f & (ke | xt | Ve)))
      for (d = 0; d < /** @type {Source[]} */
      Se.length; d++)
        Wn(
          Se[d],
          /** @type {Effect} */
          e
        );
    return n !== null && n !== e && (vr++, Se !== null && (o === null ? o = Se : o.push(.../** @type {Source[]} */
    Se))), f;
  } finally {
    fe = t, we = r, Se = o, Q = n, et = a, he = i, ko(s), Be = l, e.f ^= Vr;
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
  (fe === null || !fe.includes(t)) && (Ie(t, xt), t.f & (be | ur) || (t.f ^= ur), yn(
    /** @type {Derived} **/
    t
  ), gr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function gr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var o = t; o < r.length; o++)
      Ps(e, r[o]);
}
function po(e) {
  var t = e.f;
  if (!(t & Cr)) {
    Ie(e, xe);
    var r = z, o = te, n = ut;
    z = e, ut = !0;
    try {
      t & Nr ? ys(e) : Rn(e), On(e);
      var a = $n(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Hn;
      var i = e.deps, s;
      Oo && fs && e.f & Ve;
    } catch (l) {
      Sr(l, e, r, o || e.ctx);
    } finally {
      ut = n, z = r;
    }
  }
}
function Ss() {
  try {
    ss();
  } catch (e) {
    if (hr !== null)
      Sr(e, hr, null);
    else
      throw e;
  }
}
function Gn() {
  var e = ut;
  try {
    var t = 0;
    for (ut = !0; $t.length > 0; ) {
      t++ > 1e3 && Ss();
      var r = $t, o = r.length;
      $t = [];
      for (var n = 0; n < o; n++) {
        var a = Ls(r[n]);
        Es(a);
      }
      Ut.clear();
    }
  } finally {
    fr = !1, ut = e, hr = null;
  }
}
function Es(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      if (!(o.f & (Cr | Ye)))
        try {
          Zt(o) && (po(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? In(o) : o.fn = null));
        } catch (n) {
          Sr(n, o, null, o.ctx);
        }
    }
}
function Er(e) {
  fr || (fr = !0, queueMicrotask(Gn));
  for (var t = hr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (pt | Xe)) {
      if (!(r & xe)) return;
      t.f ^= xe;
    }
  }
  $t.push(t);
}
function Ls(e) {
  for (var t = [], r = e; r !== null; ) {
    var o = r.f, n = (o & (Xe | pt)) !== 0, a = n && (o & xe) !== 0;
    if (!a && !(o & Ye)) {
      if (o & cn)
        t.push(r);
      else if (n)
        r.f ^= xe;
      else
        try {
          Zt(r) && po(r);
        } catch (l) {
          Sr(l, r, null, r.ctx);
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
function w(e) {
  for (var t; ; ) {
    if (As(), $t.length === 0)
      return (
        /** @type {T} */
        t
      );
    fr = !0, Gn();
  }
}
function v(e) {
  var t = e.f, r = (t & ke) !== 0;
  if (Q !== null && !Be) {
    if (!(he != null && he.includes(e))) {
      var o = Q.deps;
      e.rv < vr && (e.rv = vr, fe === null && o !== null && o[we] === e ? we++ : fe === null ? fe = [e] : (!et || !fe.includes(e)) && fe.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var n = (
      /** @type {Derived} */
      e
    ), a = n.parent;
    a !== null && !(a.f & be) && (n.f ^= be);
  }
  return r && (n = /** @type {Derived} */
  e, Zt(n) && An(n)), Ft && Ut.has(e) ? Ut.get(e) : e.v;
}
function $e(e) {
  var t = Be;
  try {
    return Be = !0, e();
  } finally {
    Be = t;
  }
}
const Ts = -7169;
function Ie(e, t) {
  e.f = e.f & Ts | t;
}
function Os(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Mt(() => {
      document.activeElement === r && e.focus();
    });
  }
}
function Un(e) {
  var t = Q, r = z;
  Te(null), We(null);
  try {
    return e();
  } finally {
    Te(t), We(r);
  }
}
const jn = /* @__PURE__ */ new Set(), jr = /* @__PURE__ */ new Set();
function zn(e, t, r, o = {}) {
  function n(a) {
    if (o.capture || Wt.call(t, a), !a.cancelBubble)
      return Un(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Mt(() => {
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
function Wt(e) {
  var A;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, n = ((A = e.composedPath) == null ? void 0 : A.call(e)) || [], a = (
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
    Gt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = Q, c = z;
    Te(null), We(null);
    try {
      for (var d, h = []; a !== null; ) {
        var g = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var _ = a["__" + o];
          if (_ != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (_r(_)) {
              var [N, ...p] = _;
              N.apply(a, [e, ...p]);
            } else
              _.call(a, e);
        } catch (x) {
          d ? h.push(x) : d = x;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        a = g;
      }
      if (d) {
        for (let x of h)
          queueMicrotask(() => {
            throw x;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Te(f), We(c);
    }
  }
}
function mo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function _e(e, t) {
  var r = (
    /** @type {Effect} */
    z
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  var r = (t & sn) !== 0, o = (t & ja) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (F)
      return _e(V, null), V;
    n === void 0 && (n = mo(a ? e : "<!>" + e), r || (n = /** @type {Node} */
    /* @__PURE__ */ se(n)));
    var i = (
      /** @type {TemplateNode} */
      o || Sn ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ se(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      _e(s, l);
    } else
      _e(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function ks(e, t, r = "svg") {
  var o = !e.startsWith("<!>"), n = (t & sn) !== 0, a = `<${r}>${o ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (F)
      return _e(V, null), V;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        mo(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ se(s)
      );
      if (n)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ se(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ se(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ se(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ se(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      _e(f, c);
    } else
      _e(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ce(e, t) {
  return /* @__PURE__ */ ks(e, t, "svg");
}
function Do(e = "") {
  if (!F) {
    var t = tt(e + "");
    return _e(t, t), t;
  }
  var r = V;
  return r.nodeType !== 3 && (r.before(r = tt()), ye(r)), _e(r, r), r;
}
function dt() {
  if (F)
    return _e(V, null), V;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = tt();
  return e.append(t, r), _e(t, r), e;
}
function I(e, t) {
  if (F) {
    z.nodes_end = V, ct();
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
function ze(e, t) {
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
      /* @__PURE__ */ se(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== so); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(a);
    if (!a)
      throw st;
    Re(!0), ye(
      /** @type {Comment} */
      a
    ), ct();
    const i = Kn(e, { ...t, anchor: a });
    if (V === null || V.nodeType !== 8 || /** @type {Comment} */
    V.data !== lo)
      throw Xt(), st;
    return Re(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === st)
      return t.recover === !1 && is(), Gr(), Tn(r), Re(!1), Yn(e, t);
    throw i;
  } finally {
    Re(o), ye(n);
  }
}
const Pt = /* @__PURE__ */ new Map();
function Kn(e, { target: t, anchor: r, props: o = {}, events: n, context: a, intro: i = !0 }) {
  Gr();
  var s = /* @__PURE__ */ new Set(), l = (c) => {
    for (var d = 0; d < c.length; d++) {
      var h = c[d];
      if (!s.has(h)) {
        s.add(h);
        var g = Vs(h);
        t.addEventListener(h, Wt, { passive: g });
        var _ = Pt.get(h);
        _ === void 0 ? (document.addEventListener(h, Wt, { passive: g }), Pt.set(h, 1)) : Pt.set(h, _ + 1);
      }
    }
  };
  l(uo(jn)), jr.add(l);
  var u = void 0, f = bs(() => {
    var c = r ?? t.appendChild(tt());
    return Ke(() => {
      if (a) {
        le({});
        var d = (
          /** @type {ComponentContext} */
          te
        );
        d.c = a;
      }
      n && (o.$$events = n), F && _e(
        /** @type {TemplateNode} */
        c,
        null
      ), zr = i, u = e(c, o) || {}, zr = !0, F && (z.nodes_end = V), a && ue();
    }), () => {
      var g;
      for (var d of s) {
        t.removeEventListener(d, Wt);
        var h = (
          /** @type {number} */
          Pt.get(d)
        );
        --h === 0 ? (document.removeEventListener(d, Wt), Pt.delete(d)) : Pt.set(d, h);
      }
      jr.delete(l), c !== r && ((g = c.parentNode) == null || g.removeChild(c));
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
  var o = e, n = pe, a;
  bt(() => {
    n !== (n = t()) && (a && (Ne(a), a = null), a = Ke(() => (
      /** @type {SnippetFn} */
      n(o, ...r)
    )));
  }, qt), F && (o = V);
}
function ft(e) {
  te === null && pn(), Le(() => {
    const t = $e(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ne(e, t, [r, o] = [0, 0]) {
  F && r === 0 && ct();
  var n = e, a = null, i = null, s = de, l = r > 0 ? qt : 0, u = !1;
  const f = (d, h = !0) => {
    u = !0, c(h, d);
  }, c = (d, h) => {
    if (s === (s = d)) return;
    let g = !1;
    if (F && o !== -1) {
      if (r === 0) {
        const N = Cn(n);
        N === so ? o = 0 : N === io ? o = 1 / 0 : (o = parseInt(N.substring(1)), o !== o && (o = s ? 1 / 0 : -1));
      }
      const _ = o > r;
      !!s === _ && (n = $r(), ye(n), Re(!1), g = !0, o = -1);
    }
    s ? (a ? dr(a) : h && (a = Ke(() => h(n))), i && jt(i, () => {
      i = null;
    })) : (i ? dr(i) : h && (i = Ke(() => h(n, [r + 1, o]))), a && jt(a, () => {
      a = null;
    })), g && Re(!0);
  };
  bt(() => {
    u = !1, t(f), u || c(null, null);
  }, l), F && (n = V);
}
function Gs(e, t, r) {
  F && ct();
  var o = e, n = de, a, i = rs;
  bt(() => {
    i(n, n = t()) && (a && jt(a), a = Ke(() => r(o)));
  }), F && (o = V);
}
function qe(e, t) {
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
      s || (o.delete(f.k), Ze(e, f.prev, f.next)), Ne(f.e, !s);
    }
  });
}
function Qe(e, t, r, o, n, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & an) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = F ? ye(
      /** @type {Comment | Text} */
      /* @__PURE__ */ se(u)
    ) : u.appendChild(tt());
  }
  F && ct();
  var f = null, c = !1, d = /* @__PURE__ */ bn(() => {
    var h = r();
    return _r(h) ? h : h == null ? [] : uo(h);
  });
  bt(() => {
    var h = v(d), g = h.length;
    if (c && g === 0)
      return;
    c = g === 0;
    let _ = !1;
    if (F) {
      var N = Cn(i) === io;
      N !== (g === 0) && (i = $r(), ye(i), Re(!1), _ = !0);
    }
    if (F) {
      for (var p = null, A, x = 0; x < g; x++) {
        if (V.nodeType === 8 && /** @type {Comment} */
        V.data === lo) {
          i = /** @type {Comment} */
          V, _ = !0, Re(!1);
          break;
        }
        var m = h[x], C = o(m, x);
        A = Qn(
          V,
          s,
          p,
          null,
          m,
          C,
          x,
          n,
          t,
          r
        ), s.items.set(C, A), p = A;
      }
      g > 0 && ye($r());
    }
    F || js(h, s, i, n, t, o, r), a !== null && (g === 0 ? f ? dr(f) : f = Ke(() => a(i)) : f !== null && jt(f, () => {
      f = null;
    })), _ && Re(!0), v(d);
  }), F && (i = V);
}
function js(e, t, r, o, n, a, i) {
  var U, O, R, G;
  var s = (n & Fa) !== 0, l = (n & (no | ao)) !== 0, u = e.length, f = t.items, c = t.first, d = c, h, g = null, _, N = [], p = [], A, x, m, C;
  if (s)
    for (C = 0; C < u; C += 1)
      A = e[C], x = a(A, C), m = f.get(x), m !== void 0 && ((U = m.a) == null || U.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(m));
  for (C = 0; C < u; C += 1) {
    if (A = e[C], x = a(A, C), m = f.get(x), m === void 0) {
      var b = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : r;
      g = Qn(
        b,
        t,
        g,
        g === null ? t.first : g.next,
        A,
        x,
        C,
        o,
        n,
        i
      ), f.set(x, g), N = [], p = [], d = g.next;
      continue;
    }
    if (l && zs(m, A, C, n), m.e.f & Ye && (dr(m.e), s && ((O = m.a) == null || O.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(m))), m !== d) {
      if (h !== void 0 && h.has(m)) {
        if (N.length < p.length) {
          var S = p[0], T;
          g = S.prev;
          var M = N[0], L = N[N.length - 1];
          for (T = 0; T < N.length; T += 1)
            Ho(N[T], S, r);
          for (T = 0; T < p.length; T += 1)
            h.delete(p[T]);
          Ze(t, M.prev, L.next), Ze(t, g, M), Ze(t, L, S), d = S, g = L, C -= 1, N = [], p = [];
        } else
          h.delete(m), Ho(m, d, r), Ze(t, m.prev, m.next), Ze(t, m, g === null ? t.first : g.next), Ze(t, g, m), g = m;
        continue;
      }
      for (N = [], p = []; d !== null && d.k !== x; )
        d.e.f & Ye || (h ?? (h = /* @__PURE__ */ new Set())).add(d), p.push(d), d = d.next;
      if (d === null)
        continue;
      m = d;
    }
    N.push(m), g = m, d = m.next;
  }
  if (d !== null || h !== void 0) {
    for (var H = h === void 0 ? [] : uo(h); d !== null; )
      d.e.f & Ye || H.push(d), d = d.next;
    var Y = H.length;
    if (Y > 0) {
      var $ = n & an && u === 0 ? r : null;
      if (s) {
        for (C = 0; C < Y; C += 1)
          (R = H[C].a) == null || R.measure();
        for (C = 0; C < Y; C += 1)
          (G = H[C].a) == null || G.fix();
      }
      Us(t, H, $, f);
    }
  }
  s && Mt(() => {
    var E;
    if (_ !== void 0)
      for (m of _)
        (E = m.a) == null || E.apply();
  }), z.first = t.first && t.first.e, z.last = g && g.e;
}
function zs(e, t, r, o) {
  o & no && Wr(e.v, t), o & ao ? Wr(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Qn(e, t, r, o, n, a, i, s, l, u) {
  var f = (l & no) !== 0, c = (l & Ba) === 0, d = f ? c ? /* @__PURE__ */ Pr(n) : kt(n) : n, h = l & ao ? kt(i) : i, g = {
    i: h,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: o
  };
  try {
    return g.e = Ke(() => s(e, d, h, u), F), g.e.prev = r && r.e, g.e.next = o && o.e, r === null ? t.first = g : (r.next = g, r.e.next = g.e), o !== null && (o.prev = g, o.e.prev = g.e), g;
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
      /* @__PURE__ */ Ge(a)
    );
    n.before(a), a = i;
  }
}
function Ze(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function er(e, t, r = !1, o = !1, n = !1) {
  var a = e, i = "";
  ie(() => {
    var s = (
      /** @type {Effect} */
      z
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
          /* @__PURE__ */ Ge(l);
        if (l === null)
          throw Xt(), st;
        _e(V, u), a = ye(l);
        return;
      }
      var f = i + "";
      r ? f = `<svg>${f}</svg>` : o && (f = `<math>${f}</math>`);
      var c = mo(f);
      if ((r || o) && (c = /** @type {Element} */
      /* @__PURE__ */ se(c)), _e(
        /** @type {TemplateNode} */
        /* @__PURE__ */ se(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), r || o)
        for (; /* @__PURE__ */ se(c); )
          a.before(
            /** @type {Node} */
            /* @__PURE__ */ se(c)
          );
      else
        a.before(c);
    }
  });
}
function Me(e, t) {
  Mt(() => {
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
    r !== (r = t()) && (o && (Ne(o), o = null), r && (o = Ke(() => {
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
      const _ = e.length;
      for (var c = 0; c < _; c++) {
        var d = e[c];
        if (s ? d === "/" && e[c - 1] === "*" && (s = !1) : a ? a === d && (a = !1) : d === "/" && e[c + 1] === "*" ? s = !0 : d === '"' || d === "'" ? a = d : d === "(" ? i++ : d === ")" && i--, !s && a === !1 && i === 0) {
          if (d === ":" && f === -1)
            f = c;
          else if (d === ";" || c === _ - 1) {
            if (f !== -1) {
              var h = Fr(e.substring(u, f).trim());
              if (!l.includes(h)) {
                d !== ";" && c++;
                var g = e.substring(u, c).trim();
                r += " " + g + ";";
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
function Lr(e, t, r, o, n, a) {
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
function He(e, t, r, o) {
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
    if (!_r(t))
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
    t && Kr(e, $e(t), r), r = !1;
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
const Et = Symbol("class"), Lt = Symbol("style"), Zn = Symbol("is custom element"), Jn = Symbol("is html");
function Js(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function q(e, t, r, o) {
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
  r.class ? r.class = qs(r.class) : (o || r[Et]) && (r.class = null), r[Lt] && (r.style ?? (r.style = null));
  var d = ta(e);
  for (const x in r) {
    let m = r[x];
    if (f && x === "value" && m == null) {
      e.value = e.__value = "", u[x] = m;
      continue;
    }
    if (x === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lr(e, h, m, o, t == null ? void 0 : t[Et], r[Et]), u[x] = m, u[Et] = r[Et];
      continue;
    }
    if (x === "style") {
      He(e, m, t == null ? void 0 : t[Lt], r[Lt]), u[x] = m, u[Lt] = r[Lt];
      continue;
    }
    var g = u[x];
    if (m !== g) {
      u[x] = m;
      var _ = x[0] + x[1];
      if (_ !== "$$")
        if (_ === "on") {
          const C = {}, b = "$$" + x;
          let S = x.slice(2);
          var N = Fs(S);
          if (Is(S) && (S = S.slice(0, -7), C.capture = !0), !N && g) {
            if (m != null) continue;
            e.removeEventListener(S, u[b], C), u[b] = null;
          }
          if (m != null)
            if (N)
              e[`__${S}`] = m, xo([S]);
            else {
              let T = function(M) {
                u[x].call(this, M);
              };
              u[b] = zn(S, e, T, C);
            }
          else N && (e[`__${S}`] = void 0);
        } else if (x === "style")
          q(e, x, m);
        else if (x === "autofocus")
          Os(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!i && (x === "__value" || x === "value" && m != null))
          e.value = e.__value = m;
        else if (x === "selected" && f)
          Js(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var p = x;
          s || (p = Ds(p));
          var A = p === "defaultValue" || p === "defaultChecked";
          if (m == null && !i && !A)
            if (a[x] = null, p === "value" || p === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const b = t === void 0;
              if (p === "value") {
                let S = C.defaultValue;
                C.removeAttribute(p), C.defaultValue = S, C.value = C.__value = b ? S : null;
              } else {
                let S = C.defaultChecked;
                C.removeAttribute(p), C.defaultChecked = S, C.checked = b ? S : !1;
              }
            } else
              e.removeAttribute(x);
          else A || d.includes(p) && (i || typeof m != "string") ? e[p] = m : typeof m != "function" && q(e, p, m);
        }
    }
  }
  return l && Re(!0), u;
}
function pr(e, t, r = [], o, n = !1, a = Qt) {
  const i = r.map(a);
  var s = void 0, l = {}, u = e.nodeName === "SELECT", f = !1;
  bt(() => {
    var c = t(...i.map(v));
    ei(e, s, c, o, n), f && u && "value" in c && Kr(
      /** @type {HTMLSelectElement} */
      e,
      c.value,
      !1
    );
    for (let h of Object.getOwnPropertySymbols(l))
      c[h] || Ne(l[h]);
    for (let h of Object.getOwnPropertySymbols(c)) {
      var d = c[h];
      h.description === Ya && (!s || d !== s[h]) && (l[h] && Ne(l[h]), l[h] = Ke(() => Ys(e, () => d)));
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
const ti = () => performance.now(), De = {
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
  const e = De.now();
  De.tasks.forEach((t) => {
    t.c(e) || (De.tasks.delete(t), t.f());
  }), De.tasks.size !== 0 && De.tick(ra);
}
function oa(e) {
  let t;
  return De.tasks.size === 0 && De.tick(ra), {
    promise: new Promise((r) => {
      De.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      De.tasks.delete(t);
    }
  };
}
function tr(e, t) {
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
  var n = (e & $a) !== 0, a = (e & Ga) !== 0, i = n && a, s = (e & Ua) !== 0, l = i ? "both" : n ? "in" : "out", u, f = t.inert, c = t.style.overflow, d, h;
  function g() {
    var x = Q, m = z;
    Te(null), We(null);
    try {
      return u ?? (u = r()(t, (o == null ? void 0 : o()) ?? /** @type {P} */
      {}, {
        direction: l
      }));
    } finally {
      Te(x), We(m);
    }
  }
  var _ = {
    is_global: s,
    in() {
      var x;
      if (t.inert = f, !n) {
        h == null || h.abort(), (x = h == null ? void 0 : h.reset) == null || x.call(h);
        return;
      }
      a || d == null || d.abort(), tr(t, "introstart"), d = qr(t, g(), h, 1, () => {
        tr(t, "introend"), d == null || d.abort(), d = u = void 0, t.style.overflow = c;
      });
    },
    out(x) {
      if (!a) {
        x == null || x(), u = void 0;
        return;
      }
      t.inert = !0, tr(t, "outrostart"), h = qr(t, g(), d, 0, () => {
        tr(t, "outroend"), x == null || x();
      });
    },
    stop: () => {
      d == null || d.abort(), h == null || h.abort();
    }
  }, N = (
    /** @type {Effect} */
    z
  );
  if ((N.transitions ?? (N.transitions = [])).push(_), n && zr) {
    var p = s;
    if (!p) {
      for (var A = (
        /** @type {Effect | null} */
        N.parent
      ); A && A.f & qt; )
        for (; (A = A.parent) && !(A.f & Nr); )
          ;
      p = !A || (A.f & dn) !== 0;
    }
    p && wt(() => {
      $e(() => _.in());
    });
  }
}
function qr(e, t, r, o, n) {
  var a = o === 1;
  if (Za(t)) {
    var i, s = !1;
    return Mt(() => {
      if (!s) {
        var N = t({ direction: a ? "in" : "out" });
        i = qr(e, N, r, o, n);
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
      abort: pe,
      deactivate: pe,
      reset: pe,
      t: () => o
    };
  const { delay: l = 0, css: u, tick: f, easing: c = oi } = t;
  var d = [];
  if (a && r === void 0 && (f && f(0, 1), u)) {
    var h = Uo(u(0, 1));
    d.push(h, h);
  }
  var g = () => 1 - o, _ = e.animate(d, { duration: l, fill: "forwards" });
  return _.onfinish = () => {
    _.cancel();
    var N = (r == null ? void 0 : r.t()) ?? 1 - o;
    r == null || r.abort();
    var p = o - N, A = (
      /** @type {number} */
      t.duration * Math.abs(p)
    ), x = [];
    if (A > 0) {
      var m = !1;
      if (u)
        for (var C = Math.ceil(A / 16.666666666666668), b = 0; b <= C; b += 1) {
          var S = N + p * c(b / C), T = Uo(u(S, 1 - S));
          x.push(T), m || (m = T.overflow === "hidden");
        }
      m && (e.style.overflow = "hidden"), g = () => {
        var M = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          _.currentTime
        );
        return N + p * c(M / A);
      }, f && oa(() => {
        if (_.playState !== "running") return !1;
        var M = g();
        return f(M, 1 - M), !0;
      });
    }
    _ = e.animate(x, { duration: A, fill: "forwards" }), _.onfinish = () => {
      g = () => o, f == null || f(o, 1 - o), n();
    };
  }, {
    abort: () => {
      _ && (_.cancel(), _.effect = null, _.onfinish = pe);
    },
    deactivate: () => {
      n = pe;
    },
    reset: () => {
      o === 0 && (f == null || f(1, 0));
    },
    t: () => g()
  };
}
var Je, Ot, Yt, br, na;
const yr = class yr {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Oe(this, br);
    /** */
    Oe(this, Je, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Oe(this, Ot);
    /** @type {ResizeObserverOptions} */
    Oe(this, Yt);
    ot(this, Yt, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var o = B(this, Je).get(t) || /* @__PURE__ */ new Set();
    return o.add(r), B(this, Je).set(t, o), To(this, br, na).call(this).observe(t, B(this, Yt)), () => {
      var n = B(this, Je).get(t);
      n.delete(r), n.size === 0 && (B(this, Je).delete(t), B(this, Ot).unobserve(t));
    };
  }
};
Je = new WeakMap(), Ot = new WeakMap(), Yt = new WeakMap(), br = new WeakSet(), na = function() {
  return B(this, Ot) ?? ot(this, Ot, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        yr.entries.set(r.target, r);
        for (var o of B(this, Je).get(r.target) || [])
          o(r);
      }
    }
  ));
}, /** @static */
Pe(yr, "entries", /* @__PURE__ */ new WeakMap());
let Qr = yr;
var ni = /* @__PURE__ */ new Qr({
  box: "border-box"
});
function ai(e, t, r) {
  var o = ni.observe(e, () => r(e[t]));
  wt(() => ($e(() => r(e[t])), o));
}
function jo(e, t) {
  return e === t || (e == null ? void 0 : e[lt]) === t;
}
function Jt(e = {}, t, r, o) {
  return wt(() => {
    var n, a;
    return vo(() => {
      n = a, a = [], $e(() => {
        e !== r(...a) && (t(e, ...a), n && jo(r(...n), e) && t(null, ...n));
      });
    }), () => {
      Mt(() => {
        a && jo(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function aa(e, t, r) {
  if (e == null)
    return t(void 0), pe;
  const o = $e(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const St = [];
function It(e, t = pe) {
  let r = null;
  const o = /* @__PURE__ */ new Set();
  function n(s) {
    if (gn(e, s) && (e = s, r)) {
      const l = !St.length;
      for (const u of o)
        u[1](), St.push(u, e);
      if (l) {
        for (let u = 0; u < St.length; u += 2)
          St[u][0](St[u + 1]);
        St.length = 0;
      }
    }
  }
  function a(s) {
    n(s(
      /** @type {T} */
      e
    ));
  }
  function i(s, l = pe) {
    const u = [s, l];
    return o.add(u), o.size === 1 && (r = t(n, a) || pe), s(
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
let rr = !1, Xr = Symbol();
function xr(e, t, r) {
  const o = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Pr(void 0),
    unsubscribe: pe
  });
  if (o.store !== e && !(Xr in r))
    if (o.unsubscribe(), o.store = e ?? null, e == null)
      o.source.v = void 0, o.unsubscribe = pe;
    else {
      var n = !0;
      o.unsubscribe = aa(e, (a) => {
        n ? o.source.v = a : K(o.source, a);
      }), n = !1;
    }
  return e && Xr in r ? sa(e) : v(o.source);
}
function vt(e, t) {
  return e.set(t), t;
}
function Bt() {
  const e = {};
  function t() {
    ho(() => {
      for (var r in e)
        e[r].unsubscribe();
      Gt(e, Xr, {
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
  var t = rr;
  try {
    return rr = !1, [e(), rr];
  } finally {
    rr = t;
  }
}
function zo(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, r, o) {
  var C;
  var n = (r & Da) !== 0, a = !0, i = (r & Va) !== 0, s = (r & Wa) !== 0, l = !1, u;
  i ? [u, l] = ii(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var f = lt in e || hn in e, c = i && (((C = it(e, t)) == null ? void 0 : C.set) ?? (f && t in e && ((b) => e[t] = b))) || void 0, d = (
    /** @type {V} */
    o
  ), h = !0, g = !1, _ = () => (g = !0, h && (h = !1, s ? d = $e(
    /** @type {() => V} */
    o
  ) : d = /** @type {V} */
  o), d);
  u === void 0 && o !== void 0 && (c && a && ls(), u = _(), c && c(u));
  var N;
  if (N = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? _() : (h = !0, g = !1, b);
  }, !(r & Ha))
    return N;
  if (c) {
    var p = e.$$legacy;
    return function(b, S) {
      return arguments.length > 0 ? ((!S || p || l) && c(S ? N() : b), b) : N();
    };
  }
  var A = !1, x = /* @__PURE__ */ Pr(u), m = /* @__PURE__ */ Qt(() => {
    var b = N(), S = v(x);
    return A ? (A = !1, S) : x.v = b;
  });
  return i && v(m), n || (m.equals = co), function(b, S) {
    if (arguments.length > 0) {
      const T = S ? v(m) : i ? nt(b) : b;
      if (!m.equals(T)) {
        if (A = !0, K(x, T), g && d !== void 0 && (d = T), zo(m))
          return b;
        $e(() => v(m));
      }
      return b;
    }
    return zo(m) ? m.v : v(m);
  };
}
function li(e) {
  return new ui(e);
}
var Ue, Ee;
class ui {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Oe(this, Ue);
    /** @type {Record<string, any>} */
    Oe(this, Ee);
    var a;
    var r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ Pr(s);
      return r.set(i, l), l;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return v(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === hn ? !0 : (v(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return K(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    ot(this, Ee, (t.hydrate ? Ws : Yn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && w(), ot(this, Ue, n.$$events);
    for (const i of Object.keys(B(this, Ee)))
      i === "$set" || i === "$destroy" || i === "$on" || Gt(this, i, {
        get() {
          return B(this, Ee)[i];
        },
        /** @param {any} value */
        set(s) {
          B(this, Ee)[i] = s;
        },
        enumerable: !0
      });
    B(this, Ee).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(n, i);
    }, B(this, Ee).$destroy = () => {
      $s(B(this, Ee));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    B(this, Ee).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    B(this, Ue)[t] = B(this, Ue)[t] || [];
    const o = (...n) => r.call(this, ...n);
    return B(this, Ue)[t].push(o), () => {
      B(this, Ue)[t] = B(this, Ue)[t].filter(
        /** @param {any} fn */
        (n) => n !== o
      );
    };
  }
  $destroy() {
    B(this, Ee).$destroy();
  }
}
Ue = new WeakMap(), Ee = new WeakMap();
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
    Pe(this, "$$ctor");
    /** Slots */
    Pe(this, "$$s");
    /** @type {any} The Svelte component instance */
    Pe(this, "$$c");
    /** Whether or not the custom element is connected */
    Pe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Pe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Pe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Pe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Pe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Pe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Pe(this, "$$me");
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
          n !== "default" && (i.name = n), I(a, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, o = ci(this);
      for (const n of this.$$s)
        n in o && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), r.default = !0) : r[n] = t(n));
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = ar(a, n.value, this.$$p_d, "toProp"));
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
          for (const a of ir(this.$$c)) {
            if (!((n = this.$$p_d[a]) != null && n.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const i = ar(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ar(t, o, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
    return ir(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function ar(e, t, r, o) {
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
      return ir(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ir(t).forEach((s) => {
    Gt(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var c;
        l = ar(s, l, t), this.$$d[s] = l;
        var u = this.$$c;
        if (u) {
          var f = (c = it(u, s)) == null ? void 0 : c.get;
          f ? u[s] = l : u.$set({ [s]: l });
        }
      }
    });
  }), o.forEach((s) => {
    Gt(i.prototype, s, {
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
var je, Rt, Kt, at;
const No = class No {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, r = {}) {
    Oe(this, je, kt(
      /** @type {T} */
      void 0
    ));
    Oe(this, Rt, kt(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Oe(this, Kt);
    /** @type {import('../internal/client/types').Task | null} */
    Oe(this, at, null);
    B(this, je).v = B(this, Rt).v = t, ot(this, Kt, r);
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
    K(B(this, Rt), t);
    let {
      delay: o = 0,
      duration: n = 400,
      easing: a = di,
      interpolate: i = Zr
    } = { ...B(this, Kt), ...r };
    if (n === 0)
      return (c = B(this, at)) == null || c.abort(), K(B(this, je), t), Promise.resolve();
    const s = De.now() + o;
    let l, u = !1, f = B(this, at);
    return ot(this, at, oa((d) => {
      if (d < s)
        return !0;
      if (!u) {
        u = !0;
        const g = B(this, je).v;
        l = i(g, t), typeof n == "function" && (n = n(g, t)), f == null || f.abort();
      }
      const h = d - s;
      return h > /** @type {number} */
      n ? (K(B(this, je), t), !1) : (K(B(this, je), l(a(h / /** @type {number} */
      n))), !0);
    })), B(this, at).promise;
  }
  get current() {
    return v(B(this, je));
  }
  get target() {
    return v(B(this, Rt));
  }
  set target(t) {
    this.set(t);
  }
};
je = new WeakMap(), Rt = new WeakMap(), Kt = new WeakMap(), at = new WeakMap();
let Tt = No;
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
var vi = /* @__PURE__ */ Ce('<div class="state-labels__label svelte-19e6ym4"> </div>'), gi = /* @__PURE__ */ Ce('<div aria-hidden="true"></div>');
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
  le(t, !0), Me(e, pi);
  let r = y(t, "labels", 7), o = y(t, "overlayLabels", 7, !1), n = /* @__PURE__ */ ee(void 0);
  ft(() => {
    setTimeout(() => {
      K(n, !0);
    });
  });
  var a = gi();
  let i;
  return Qe(a, 21, r, qe, (s, l) => {
    var u = dt(), f = Ae(u);
    Gs(f, () => v(l).name, (c) => {
      var d = vi();
      let h;
      var g = D(d, !0);
      k(d), ie(
        (_) => {
          h = He(d, "", h, {
            left: v(l).left + "%",
            top: v(l).top + "%",
            width: v(l).width + "%",
            "margin-left": _
          }), ze(g, v(l).name);
        },
        [
          () => Math.round(0 - v(l).width / 2) + "%"
        ]
      ), ht(3, d, () => gt, () => ({ duration: 1e3 })), I(c, d);
    }), I(s, u);
  }), k(a), ie((s) => i = Lr(a, 1, "state-labels svelte-19e6ym4", null, i, s), [
    () => ({
      "state-labels--overlaid": o(),
      "state-labels--ready": v(n)
    })
  ]), I(e, a), ue({
    get labels() {
      return r();
    },
    set labels(s) {
      r(s), w();
    },
    get overlayLabels() {
      return o();
    },
    set overlayLabels(s = !1) {
      o(s), w();
    }
  });
}
ve(la, { labels: {}, overlayLabels: {} }, [], [], !0);
var xi = /* @__PURE__ */ Ce('<span class="accessible-hide svelte-ivafae"><!></span>');
const mi = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function ua(e, t) {
  le(t, !0), Me(e, mi);
  let r = y(t, "children", 7);
  var o = xi(), n = D(o);
  return qn(n, () => r() ?? pe), k(o), I(e, o), ue({
    get children() {
      return r();
    },
    set children(a) {
      r(a), w();
    }
  });
}
ve(ua, { children: {} }, [], [], !0);
const Ko = It({});
var wi = /* @__PURE__ */ Ce("<a><!></a>");
const bi = {
  hash: "svelte-70abd9",
  code: "a.svelte-70abd9 {display:inline-block;padding:0.5rem 1rem;font-size:0.75rem;font-weight:700;line-height:1.3rem;padding:0.3rem 0.6rem 0.1rem;text-decoration:none;letter-spacing:0.125rem;text-transform:uppercase;color:#fff;background-color:#0058cc;transition:opacity 0.2s;position:absolute;}a.svelte-70abd9:focus {opacity:1;}a.svelte-70abd9:not(:focus) {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;opacity:0.1;}.skip-link--topleft.svelte-70abd9 {left:1rem;top:1rem;}.skip-link--bottomleft.svelte-70abd9 {left:1rem;bottom:1rem;}"
};
function Jr(e, t) {
  le(t, !0), Me(e, bi);
  const [r, o] = Bt(), n = () => xr(Ko, "$links", r);
  let a = y(t, "id", 7), i = y(t, "target", 7), s = y(t, "children", 7), l = y(t, "position", 7, "topleft"), u = /* @__PURE__ */ ee(void 0);
  Le(() => {
    si(Ko, $e(n)[a()] = v(u), $e(n));
  });
  var f = wi();
  f.__click = (h) => {
    var N;
    h.preventDefault();
    const _ = h.target.href.split("#")[1];
    (N = n()[_]) == null || N.focus();
  };
  var c = D(f);
  qn(c, () => s() ?? pe), k(f), Jt(f, (h) => K(u, h), () => v(u)), ie(() => {
    q(f, "id", a()), q(f, "href", `#${i()}`), Lr(f, 1, `skip-link--${l()}`, "svelte-70abd9");
  }), I(e, f);
  var d = ue({
    get id() {
      return a();
    },
    set id(h) {
      a(h), w();
    },
    get target() {
      return i();
    },
    set target(h) {
      i(h), w();
    },
    get children() {
      return s();
    },
    set children(h) {
      s(h), w();
    },
    get position() {
      return l();
    },
    set position(h = "topleft") {
      l(h), w();
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
  K(t, o, !0), (n = r()) == null || n({ code: o });
}
function _i(e, t) {
  var o;
  const r = e.target.dataset.id;
  (o = t()) == null || o({ code: r, clientX: null, clientY: null });
}
function Ai(e, t, r) {
  var o;
  v(t) === e.target.dataset.id && K(t, null), (o = r()) == null || o({ code: null });
}
var Ni = /* @__PURE__ */ Ce("<li><button> </button></li>"), Ci = /* @__PURE__ */ Ce("<li> <ul></ul></li>"), Pi = /* @__PURE__ */ Ce('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>'), Si = /* @__PURE__ */ Ce("<!> <!> <!>", 1);
const Ei = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function ca(e, t) {
  le(t, !0), Me(e, Ei);
  let r = y(t, "groups", 7), o = y(t, "layout", 7), n = y(t, "onChange", 7), a = y(t, "onClick", 7), i = y(t, "onFocus", 7), s = y(t, "isSkippable", 7), l = y(t, "customElectorateAltText", 23, () => ({})), u = /* @__PURE__ */ ee(null);
  Le(() => {
    var p;
    (p = n()) == null || p(v(u));
  });
  let f = /* @__PURE__ */ W(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((p) => o().positions[p]).map((p) => r().find((A) => A.name === p)).map((p) => ({
    ...p,
    hexes: [...p.hexes].sort((A, x) => A.coord[0] + A.coord[1] * 1e3 - (x.coord[0] + x.coord[1] * 1e3))
  })));
  var c = Si(), d = Ae(c);
  {
    var h = (p) => {
      Jr(p, {
        id: "hex-map-top",
        target: "hex-map-bottom",
        position: "topleft",
        children: (A, x) => {
          cr();
          var m = Do("Skip past map");
          I(A, m);
        },
        $$slots: { default: !0 }
      });
    };
    ne(d, (p) => {
      s() && p(h);
    });
  }
  var g = X(d, 2);
  ua(g, {
    children: (p, A) => {
      var x = Pi();
      x.__click = [_i, a], x.__focusin = [yi, u, i], x.__focusout = [Ai, u, i], Qe(x, 21, () => v(f), qe, (m, C) => {
        var b = Ci(), S = D(b), T = X(S);
        Qe(T, 21, () => v(C).hexes, qe, (M, L) => {
          var H = Ni(), Y = D(H), $ = D(Y);
          k(Y), k(H), ie(() => {
            q(Y, "data-id", v(L).id), ze($, `${v(L).name ?? ""} ${(l()[v(L).id] || "") ?? ""}`);
          }), I(M, H);
        }), k(T), k(b), ie(() => ze(S, `${v(C).name ?? ""} `)), I(m, b);
      }), k(x), I(p, x);
    },
    $$slots: { default: !0 }
  });
  var _ = X(g, 2);
  {
    var N = (p) => {
      Jr(p, {
        id: "hex-map-bottom",
        target: "hex-map-top",
        position: "bottomleft",
        children: (A, x) => {
          cr();
          var m = Do("Skip above map");
          I(A, m);
        },
        $$slots: { default: !0 }
      });
    };
    ne(_, (p) => {
      s() && p(N);
    });
  }
  return I(e, c), ue({
    get groups() {
      return r();
    },
    set groups(p) {
      r(p), w();
    },
    get layout() {
      return o();
    },
    set layout(p) {
      o(p), w();
    },
    get onChange() {
      return n();
    },
    set onChange(p) {
      n(p), w();
    },
    get onClick() {
      return a();
    },
    set onClick(p) {
      a(p), w();
    },
    get onFocus() {
      return i();
    },
    set onFocus(p) {
      i(p), w();
    },
    get isSkippable() {
      return s();
    },
    set isSkippable(p) {
      s(p), w();
    },
    get customElectorateAltText() {
      return l();
    },
    set customElectorateAltText(p = {}) {
      l(p), w();
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
    isSkippable: {},
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
function Tr(e = [0, 0], t = "px") {
  const r = e[0] * (qo * Math.sqrt(3)), o = e[1] * 1.5 * qo;
  return [r, o].map((n) => `${Math.round(n)}${t}`);
}
var Ti = /* @__PURE__ */ ce('<path style="color:#000000;fill:var(--c-tileFocusBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:var(--c-tileFocusBorderGap);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), Oi = /* @__PURE__ */ ce('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:var(--c-tileInteractBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const Ri = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function sr(e, t) {
  le(t, !0), Me(e, Ri);
  let r = y(t, "groups", 7), o = y(t, "id", 7), n = y(t, "layout", 7), a = y(t, "type", 7, "focus"), i = /* @__PURE__ */ W(() => r().flatMap((c) => c.hexes.map((d) => ({ ...d, group: c.name }))).sort((c, d) => c.index - d.index)), s = /* @__PURE__ */ W(() => {
    if (!o())
      return;
    const c = v(i).find((x) => x.id === o()), [d, h] = n().positions[c.group], [g, _] = c.coord, N = _ % 2 ? 0.5 : 0, [p, A] = Tr([d + g + N, h + _], "").map(Number);
    return [p - 3, A - 3];
  });
  var l = dt(), u = Ae(l);
  {
    var f = (c) => {
      var d = Oi(), h = D(d);
      {
        var g = (_) => {
          var N = Ti();
          cr(), I(_, N);
        };
        ne(h, (_) => {
          a() === "focus" && _(g);
        });
      }
      cr(), k(d), ie((_) => q(d, "transform", _), [
        () => `translate(${v(s).join(" ")}) scale(0.95)`
      ]), I(c, d);
    };
    ne(u, (c) => {
      v(s) && c(f);
    });
  }
  return I(e, l), ue({
    get groups() {
      return r();
    },
    set groups(c) {
      r(c), w();
    },
    get id() {
      return o();
    },
    set id(c) {
      o(c), w();
    },
    get layout() {
      return n();
    },
    set layout(c) {
      n(c), w();
    },
    get type() {
      return a();
    },
    set type(c = "focus") {
      a(c), w();
    }
  });
}
ve(sr, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var ki = typeof global == "object" && global && global.Object === Object && global, Ii = typeof self == "object" && self && self.Object === Object && self, da = ki || Ii || Function("return this")(), mr = da.Symbol, fa = Object.prototype, Mi = fa.hasOwnProperty, Fi = fa.toString, Vt = mr ? mr.toStringTag : void 0;
function Bi(e) {
  var t = Mi.call(e, Vt), r = e[Vt];
  try {
    e[Vt] = void 0;
    var o = !0;
  } catch {
  }
  var n = Fi.call(e);
  return o && (t ? e[Vt] = r : delete e[Vt]), n;
}
var Di = Object.prototype, Hi = Di.toString;
function Vi(e) {
  return Hi.call(e);
}
var Wi = "[object Null]", $i = "[object Undefined]", Qo = mr ? mr.toStringTag : void 0;
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
  function h(b) {
    var S = o, T = n;
    return o = n = void 0, u = b, i = e.apply(T, S), i;
  }
  function g(b) {
    return u = b, s = setTimeout(p, t), f ? h(b) : i;
  }
  function _(b) {
    var S = b - l, T = b - u, M = t - S;
    return c ? ol(M, a - T) : M;
  }
  function N(b) {
    var S = b - l, T = b - u;
    return l === void 0 || S >= t || S < 0 || c && T >= a;
  }
  function p() {
    var b = Dr();
    if (N(b))
      return A(b);
    s = setTimeout(p, _(b));
  }
  function A(b) {
    return s = void 0, d && o ? h(b) : (o = n = void 0, i);
  }
  function x() {
    s !== void 0 && clearTimeout(s), u = 0, o = l = n = s = void 0;
  }
  function m() {
    return s === void 0 ? i : A(Dr());
  }
  function C() {
    var b = Dr(), S = N(b);
    if (o = arguments, n = this, l = b, S) {
      if (s === void 0)
        return g(l);
      if (c)
        return clearTimeout(s), s = setTimeout(p, t), h(l);
    }
    return s === void 0 && (s = setTimeout(p, t)), i;
  }
  return C.cancel = x, C.flush = m, C;
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
var sl = /* @__PURE__ */ ce('<g><text> </text><text class="hexlabels__text svelte-1kzhlql"> </text></g>'), il = /* @__PURE__ */ ce('<g class="hexlabels svelte-1kzhlql"></g>');
const ll = {
  hash: "svelte-1kzhlql",
  code: ".hexlabels.svelte-1kzhlql {pointer-events:none;}.hexlabels__text.svelte-1kzhlql {font-size:10px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function ha(e, t) {
  le(t, !0), Me(e, ll);
  let r = y(t, "hexes", 7), o = y(t, "allocations", 7), n = y(t, "certainties", 7), a = y(t, "labelsToShow", 23, () => ({})), i = y(t, "showElectorateLabels", 7, !1), s = /* @__PURE__ */ W(() => i() ? r() : r().filter(({ id: u }) => a()[u]));
  var l = il();
  return Qe(l, 21, () => v(s), qe, (u, f) => {
    let c = () => v(f).id, d = () => v(f).coordPx, h = () => v(f).shortName;
    var g = sl(), _ = D(g);
    let N, p;
    var A = D(_, !0);
    k(_);
    var x = X(_);
    let m;
    var C = D(x, !0);
    k(x), k(g), ie(
      (b, S) => {
        q(g, "transform", b), N = Lr(_, 0, "hexlabels__text svelte-1kzhlql", null, N, S), p = He(_, "", p, {
          stroke: `var(--u-${o()[c()]})`,
          "stroke-width": "3",
          opacity: o()[c()] && !n()[c()] ? 1 : 0
        }), ze(A, h()), m = He(x, "", m, {
          fill: o()[c()] && n()[c()] ? "white" : "black"
        }), ze(C, h());
      },
      [
        () => `translate(${d().join(" ")}) rotate(-30) translate(0 3)`,
        () => ({
          "hexlabels__text--allocation": o()[c()]
        })
      ]
    ), I(u, g);
  }), k(l), I(e, l), ue({
    get hexes() {
      return r();
    },
    set hexes(u) {
      r(u), w();
    },
    get allocations() {
      return o();
    },
    set allocations(u) {
      o(u), w();
    },
    get certainties() {
      return n();
    },
    set certainties(u) {
      n(u), w();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(u = {}) {
      a(u), w();
    },
    get showElectorateLabels() {
      return i();
    },
    set showElectorateLabels(u = !1) {
      i(u), w();
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
var ul = /* @__PURE__ */ ce('<g class="group-outline group-outline__under svelte-is11bp"><!></g>'), cl = /* @__PURE__ */ ce('<g><g class="group-hexes svelte-is11bp"><!></g><!></g>'), dl = /* @__PURE__ */ ce('<g class="group-outline group-outline__over svelte-is11bp"><!></g>'), fl = /* @__PURE__ */ ce('<g><g class="group-hex-strokes svelte-is11bp"><!></g><!><!></g>'), hl = /* @__PURE__ */ ce('<g class="svelte-is11bp"><!><!></g>');
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
  le(t, !0), Me(e, vl);
  let r = y(t, "groups", 7), o = y(t, "isStaticLayout", 7), n = y(t, "layout", 7), a = y(t, "allocations", 7), i = y(t, "focuses", 7), s = y(t, "certainties", 7), l = y(t, "showElectorateLabels", 7), u = y(t, "showFocusedElectorateLabels", 7), f = y(t, "labelsToShow", 7), c = y(t, "isOutlineOnly", 7, !1), d = y(t, "showStateOutlinesOnTop", 7, !1), h = y(t, "hexFlip", 7, "None"), g = /* @__PURE__ */ ee(void 0), _ = /* @__PURE__ */ ee(!1);
  ft(() => {
    setTimeout(
      () => {
        K(_, !0);
      },
      1
    );
  });
  let N = /* @__PURE__ */ W(() => {
    const L = Object.values(a());
    return L.length !== 0 && L.some(Boolean);
  }), p = /* @__PURE__ */ W(() => {
    const L = Object.values(a());
    return L.length !== 0 && L.every(Boolean);
  }), A = /* @__PURE__ */ W(() => Object.values(i()).some(Boolean)), x = /* @__PURE__ */ W(() => {
    var L;
    return Array.from(((L = v(g)) == null ? void 0 : L.querySelectorAll("polygon.hex")) || []).filter((H) => H instanceof SVGPolygonElement);
  }), m = { allocation: {} };
  Le(() => {
    const L = { ...a() }, H = i(), Y = s();
    v(x).forEach(($) => {
      const U = $.dataset.id;
      if (!U)
        return;
      const O = L[U] || null, R = m.allocation[U];
      $.dataset.allocation = O, h() === "Flip" && R !== O && ($.style.setProperty("--allocationFrom", `var(--a-${R})`), $.style.setProperty("--allocationTo", `var(--a-${O})`), $.classList.add("hex--flip")), m.allocation[U] = O;
      const G = v(A) ? H[U] || !1 : !0;
      $.dataset.focused = G;
      const E = Y[U] || null;
      $.dataset.certain = E;
    });
  });
  let C = /* @__PURE__ */ W(() => {
    const L = r(), H = n();
    return L.map((Y) => {
      const $ = H.positions[Y.name], U = $ && $[0] !== 1 / 0, O = Tr($).join(","), R = v(A) && u() ? i() : f(), G = {
        "data-name": Y.name,
        style: `transform: translate(${O})`,
        class: [
          "group",
          !U && "group--hidden",
          o() && "group--map-is-static",
          !v(N) && "group--map-is-empty",
          v(p) && "group--map-is-full",
          v(A) && "group--has-focuses",
          c() && "group--is-outline",
          v(_) && "group--rendered"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: U, labels: R, group: Y, groupProps: G };
    });
  }), b = /* @__PURE__ */ W(() => d() || v(N) && v(A));
  var S = hl(), T = D(S);
  Qe(T, 17, () => v(C), qe, (L, H) => {
    let Y = () => v(H).groupProps, $ = () => v(H).group;
    var U = cl();
    pr(U, () => ({ ...Y() }), void 0, "svelte-is11bp");
    var O = D(U), R = D(O);
    er(R, () => $().svgHexes, !0), k(O);
    var G = X(O);
    {
      var E = (j) => {
        var Z = ul(), re = D(Z);
        er(re, () => $().svgOutline, !0), k(Z), ht(2, Z, () => gt, () => ({ duration: 200, delay: 200 })), I(j, Z);
      };
      ne(G, (j) => {
        v(b) || j(E);
      });
    }
    k(U), I(L, U);
  });
  var M = X(T);
  return Qe(M, 17, () => v(C), qe, (L, H) => {
    let Y = () => v(H).groupProps, $ = () => v(H).isVisible, U = () => v(H).labels, O = () => v(H).group;
    var R = fl();
    pr(R, () => ({ ...Y() }), void 0, "svelte-is11bp");
    var G = D(R), E = D(G);
    er(E, () => O().svgHexes, !0), k(G);
    var j = X(G);
    {
      var Z = (J) => {
        var ge = dl(), Fe = D(ge);
        er(Fe, () => O().svgOutline, !0), k(ge), ht(3, ge, () => gt, () => ({ duration: 200 })), I(J, ge);
      };
      ne(j, (J) => {
        v(b) && J(Z);
      });
    }
    var re = X(j);
    {
      var ae = (J) => {
        ha(J, {
          get hexes() {
            return O().hexes;
          },
          get allocations() {
            return a();
          },
          get certainties() {
            return s();
          },
          get labelsToShow() {
            return U();
          },
          get showElectorateLabels() {
            return l();
          }
        });
      };
      ne(re, (J) => {
        $() && J(ae);
      });
    }
    k(R), I(L, R);
  }), k(S), Jt(S, (L) => K(g, L), () => v(g)), Rs("animationend", S, (L) => {
    L.target.classList.remove("hex--flip");
  }), I(e, S), ue({
    get groups() {
      return r();
    },
    set groups(L) {
      r(L), w();
    },
    get isStaticLayout() {
      return o();
    },
    set isStaticLayout(L) {
      o(L), w();
    },
    get layout() {
      return n();
    },
    set layout(L) {
      n(L), w();
    },
    get allocations() {
      return a();
    },
    set allocations(L) {
      a(L), w();
    },
    get focuses() {
      return i();
    },
    set focuses(L) {
      i(L), w();
    },
    get certainties() {
      return s();
    },
    set certainties(L) {
      s(L), w();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(L) {
      l(L), w();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(L) {
      u(L), w();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(L) {
      f(L), w();
    },
    get isOutlineOnly() {
      return c();
    },
    set isOutlineOnly(L = !1) {
      c(L), w();
    },
    get showStateOutlinesOnTop() {
      return d();
    },
    set showStateOutlinesOnTop(L = !1) {
      d(L), w();
    },
    get hexFlip() {
      return h();
    },
    set hexFlip(L = "None") {
      h(L), w();
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
var gl = /* @__PURE__ */ ce('<g class="svelte-1trui9u"><path d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z" stroke-width="2" class="svelte-1trui9u"></path><path d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064" stroke-width="2" fill="none" class="svelte-1trui9u"></path></g>');
const pl = {
  hash: "svelte-1trui9u",
  code: `path.svelte-1trui9u,
g.svelte-1trui9u {transition:all 0.5s;}`
};
function wo(e, t) {
  le(t, !0), Me(e, pl);
  let r = y(t, "coordPx", 7), o = y(t, "rotation", 7), n = y(t, "colour", 7), a = y(t, "opacity", 7, 1), i = y(t, "value", 7), s = y(t, "arrowHeight", 7), l = y(t, "tether", 7, "base"), u = /* @__PURE__ */ W(() => {
    const x = Math.abs(i());
    return Math.min(1.5, 0.3 + x / 20);
  }), f = /* @__PURE__ */ W(() => l() === "base" ? "" : `translate(0 ${63 * i() * s()})`);
  var c = gl();
  let d;
  var h = D(c);
  let g;
  var _ = X(h);
  let N;
  return k(c), ie(
    (p) => {
      q(c, "data-tether", l()), q(c, "transform", p), d = He(c, "", d, { opacity: a() }), q(h, "transform", `${v(f)} scale(${v(u)} ${i() * s()})`), g = He(h, "", g, { fill: n() }), q(_, "transform", `translate(0 ${-63 * i() * s()}) ${v(f)} rotate(${i() < 0 ? 180 : 0}) scale(${v(u)})`), N = He(_, "", N, { stroke: n() });
    },
    [
      () => `translate(${r().join(" ")}) rotate(${o()})`
    ]
  ), I(e, c), ue({
    get coordPx() {
      return r();
    },
    set coordPx(p) {
      r(p), w();
    },
    get rotation() {
      return o();
    },
    set rotation(p) {
      o(p), w();
    },
    get colour() {
      return n();
    },
    set colour(p) {
      n(p), w();
    },
    get opacity() {
      return a();
    },
    set opacity(p = 1) {
      a(p), w();
    },
    get value() {
      return i();
    },
    set value(p) {
      i(p), w();
    },
    get arrowHeight() {
      return s();
    },
    set arrowHeight(p) {
      s(p), w();
    },
    get tether() {
      return l();
    },
    set tether(p = "base") {
      l(p), w();
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
var xl = /* @__PURE__ */ ce('<g class="hex-map-arrows"></g>');
function bo(e, t) {
  le(t, !0);
  let r = y(t, "groups", 7), o = y(t, "layout", 7), n = y(t, "arrowData", 7), a = y(t, "arrowHeight", 7), i = y(t, "getColourForValue", 7), s = y(t, "getRotationForValue", 7);
  var l = dt(), u = Ae(l);
  return Qe(u, 17, r, qe, (f, c) => {
    var d = dt(), h = Ae(d);
    {
      var g = (_) => {
        var N = xl();
        Qe(N, 21, () => v(c).hexes, qe, (p, A) => {
          let x = () => v(A).coordPx, m = () => v(A).id;
          const C = /* @__PURE__ */ W(() => s()(n()[m()])), b = /* @__PURE__ */ W(() => n()[m()] ? 1 : 0), S = /* @__PURE__ */ W(() => n()[m()] || 0), T = /* @__PURE__ */ W(() => i()(n()[m()]));
          wo(p, {
            get coordPx() {
              return x();
            },
            get rotation() {
              return v(C);
            },
            get opacity() {
              return v(b);
            },
            get value() {
              return v(S);
            },
            get colour() {
              return v(T);
            },
            get arrowHeight() {
              return a();
            }
          });
        }), k(N), ie((p) => q(N, "transform", p), [
          () => `translate(${Tr(o().positions[v(c).name], "").join(",")})`
        ]), ht(3, N, () => gt, () => ({ duration: 750 })), I(_, N);
      };
      ne(h, (_) => {
        o().positions[v(c).name] && _(g);
      });
    }
    I(f, d);
  }), I(e, l), ue({
    get groups() {
      return r();
    },
    set groups(f) {
      r(f), w();
    },
    get layout() {
      return o();
    },
    set layout(f) {
      o(f), w();
    },
    get arrowData() {
      return n();
    },
    set arrowData(f) {
      n(f), w();
    },
    get arrowHeight() {
      return a();
    },
    set arrowHeight(f) {
      a(f), w();
    },
    get getColourForValue() {
      return i();
    },
    set getColourForValue(f) {
      i(f), w();
    },
    get getRotationForValue() {
      return s();
    },
    set getRotationForValue(f) {
      s(f), w();
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
const wr = It(), ml = { url: "https://www.abc.net.au/news-web/api/syndicate/storylab/elections/federal/2025" }, wl = {
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
let or;
async function pa({ cache: e } = { cache: !0 }) {
  return e && or || (or = fetch(wl.liveData.url).then((t) => t.json())), or;
}
var Al = /* @__PURE__ */ ce('<g><g transform="translate(0,10)"><text class="caption svelte-egtalb"> </text></g></g>'), Nl = /* @__PURE__ */ ce('<g><!><text class="hex-map-arrow-legend svelte-egtalb"><tspan> </tspan></text></g>'), Cl = /* @__PURE__ */ ce('<text class="labor svelte-egtalb">Labor</text><g><text class="lnp svelte-egtalb">L/NP</text></g>', 1), Pl = /* @__PURE__ */ ce('<text class="hex-map-arrow-legend__light svelte-egtalb"> </text>'), Sl = /* @__PURE__ */ ce('<!><g class="hex-map-arrow-legend svelte-egtalb"><!><!><text> </text><!></g>', 1);
const El = {
  hash: "svelte-egtalb",
  code: `.hex-map-arrow-legend.svelte-egtalb {fill:black;
  /* Text Regular/xs */font-family:ABCSans;font-size:0.75rem;font-style:normal;font-weight:400;line-height:135%; /* 1.0125rem */width:30px;text-align:center;font-size:var(--fontSize);}text.hex-map-arrow-legend__light.svelte-egtalb {fill:var(--Light-grey-compliant, #767676);}.lnp.svelte-egtalb {fill:var(--a-LNP);}.labor.svelte-egtalb {fill:var(--a-ALP);}.lnp.svelte-egtalb,
.labor.svelte-egtalb {font-weight:bold;}.caption.svelte-egtalb {color:#000;
  /* Text Regular/lg */font-family:ABCSans;font-style:normal;font-weight:400;line-height:150%; /* 1.6875rem */}`
};
function yo(e, t) {
  le(t, !0), Me(e, El);
  const [r, o] = Bt(), n = () => xr(a, "$svgElCurrentScale", r), a = fo("svgElCurrentScale");
  let i = /* @__PURE__ */ W(() => n()), s = y(t, "caption", 7, ""), l = y(t, "scales", 7), u = y(t, "arrowHeight", 7), f = y(t, "getRotationForValue", 7), c = y(t, "getColourForValue", 7), d = y(t, "countedPct", 7), h = y(t, "alpLnp", 7, !1), g = y(t, "chartName", 7, "");
  const _ = {
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
  let N = /* @__PURE__ */ W(() => _[v(i) < 1.2 ? "largeScreen" : "smallScreen"]), p = /* @__PURE__ */ W(() => `scale(${v(i).toFixed(2)})`);
  var A = Sl(), x = Ae(A);
  {
    var m = (O) => {
      var R = Al(), G = D(R), E = D(G);
      let j;
      var Z = D(E, !0);
      k(E), k(G), k(R), ie(
        (re) => {
          q(R, "transform", re), j = He(E, "", j, { "font-size": v(N).captionSize }), ze(Z, s());
        },
        [
          () => `scale(${n().toFixed(2)})`
        ]
      ), I(O, R);
    };
    ne(x, (O) => {
      s() && O(m);
    });
  }
  var C = X(x);
  let b;
  var S = D(C);
  Qe(S, 17, l, qe, (O, R, G) => {
    let E = () => v(R).name, j = () => v(R).value, Z = () => v(R).tether, re = /* @__PURE__ */ bn(() => Ja(v(R).colour, null));
    var ae = Nl(), J = D(ae);
    const ge = /* @__PURE__ */ W(() => f()(j())), Fe = /* @__PURE__ */ W(() => c()(j()));
    wo(J, {
      coordPx: [10, 0],
      get arrowHeight() {
        return u();
      },
      get rotation() {
        return v(ge);
      },
      get colour() {
        return v(Fe);
      },
      get value() {
        return j();
      },
      get tether() {
        return Z();
      }
    });
    var me = X(J);
    let rt;
    var yt = D(me), Dt = D(yt, !0);
    k(yt), k(me), k(ae), ie(() => {
      q(ae, "transform", `translate(${G * v(N).arrowGap * v(i)} 0)`), q(me, "y", v(N).yOffset), q(me, "transform", v(p)), rt = He(me, "", rt, { fill: v(re) }), ze(Dt, E());
    }), I(O, ae);
  });
  var T = X(S);
  {
    var M = (O) => {
      var R = Cl(), G = Ae(R), E = X(G), j = D(E);
      k(E), ie(() => {
        q(G, "y", v(N).yOffset * 2), q(G, "transform", v(p)), q(E, "transform", `translate(${2 * v(N).arrowGap * v(i)} 0)`), q(j, "y", v(N).yOffset * 2), q(j, "transform", v(p));
      }), I(O, R);
    };
    ne(T, (O) => {
      h() && O(M);
    });
  }
  var L = X(T), H = D(L, !0);
  k(L);
  var Y = X(L);
  {
    var $ = (O) => {
      var R = Pl(), G = D(R);
      k(R), ie(() => {
        q(R, "y", v(N).yOffset * (h() ? 4 : 3)), q(R, "transform", v(p)), ze(G, `${d() ?? ""}% counted`);
      }), I(O, R);
    };
    ne(Y, (O) => {
      d() && O($);
    });
  }
  k(C), ie(() => {
    q(C, "transform", `translate(${v(N).left} ${v(N).top - (h() ? v(N).yOffset : 0)})`), b = He(C, "", b, { "--fontSize": v(N).fontSize }), q(L, "y", v(N).yOffset * (h() ? 3 : 2)), q(L, "transform", v(p)), ze(H, g());
  }), ht(3, C, () => gt), I(e, A);
  var U = ue({
    get caption() {
      return s();
    },
    set caption(O = "") {
      s(O), w();
    },
    get scales() {
      return l();
    },
    set scales(O) {
      l(O), w();
    },
    get arrowHeight() {
      return u();
    },
    set arrowHeight(O) {
      u(O), w();
    },
    get getRotationForValue() {
      return f();
    },
    set getRotationForValue(O) {
      f(O), w();
    },
    get getColourForValue() {
      return c();
    },
    set getColourForValue(O) {
      c(O), w();
    },
    get countedPct() {
      return d();
    },
    set countedPct(O) {
      d(O), w();
    },
    get alpLnp() {
      return h();
    },
    set alpLnp(O = !1) {
      h(O), w();
    },
    get chartName() {
      return g();
    },
    set chartName(O = "") {
      g(O), w();
    }
  });
  return o(), U;
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
var Ll = /* @__PURE__ */ Ce("<!> <!>", 1);
const Tl = { hash: "svelte-45h", code: "" };
function xa(e, t) {
  le(t, !0), Me(e, Tl);
  const [r, o] = Bt(), { resetViewboxPadding: n, setViewboxPadding: a } = fo("viewbox-padding") || {}, i = {
    ALP: "Labor",
    LNP: "L/NP",
    GRN: "Greens",
    IND: "Independents",
    ONP: "One Nation",
    TOP: "Trumpet of Patriots"
  };
  let s = y(t, "arrowChart", 7), l = y(t, "groups", 7), u = y(t, "layout", 7), f = y(t, "arrowChartPercentCounted", 7), c = y(t, "arrowChartCaption", 7);
  const d = 0.08;
  let h = /* @__PURE__ */ ee(void 0), g = /* @__PURE__ */ W(() => String(s().split(" ")[0])), _ = /* @__PURE__ */ W(() => v(h) ? _l(v(h), (b) => b === v(g)) : {});
  Le(() => {
    vt(wr, (b) => `Change in first pref
for ${v(g)}: ${v(_)[b] ? v(_)[b].toFixed(3) + "%" : "not applicable"}`);
  }), ft(() => () => {
    vt(wr, void 0);
  });
  let N = /* @__PURE__ */ W(() => () => `var(--a-${v(g).length > 3 ? "OTH" : v(g).toUpperCase()}, hotpink)`);
  const p = () => 20;
  ft(() => {
    const b = a("HexMapArrowsFirsPreference", [33, 0, 30, 0]);
    return pa({ cache: !0 }).then((S) => {
      K(h, S, !0);
    }), () => n(b);
  });
  var A = dt(), x = Ae(A);
  {
    var m = (b) => {
      var S = Ll(), T = Ae(S);
      bo(T, {
        get groups() {
          return l();
        },
        get layout() {
          return u();
        },
        get arrowData() {
          return v(_);
        },
        arrowHeight: d,
        getRotationForValue: p,
        get getColourForValue() {
          return v(N);
        }
      });
      var M = X(T, 2);
      const L = /* @__PURE__ */ W(() => c() ? i[v(g)] || v(g) : ""), H = /* @__PURE__ */ W(() => {
        var Y, $, U;
        return f() ? (U = ($ = (Y = v(h)) == null ? void 0 : Y.data) == null ? void 0 : $.overall) == null ? void 0 : U.counted : void 0;
      });
      yo(M, {
        get caption() {
          return v(L);
        },
        chartName: "Primary vote change %",
        get countedPct() {
          return v(H);
        },
        arrowHeight: d,
        getRotationForValue: p,
        get getColourForValue() {
          return v(N);
        },
        scales: [
          { name: "-10", value: -10, tether: "head" },
          { name: "-5", value: -5, tether: "head" },
          { name: "5", value: 5, tether: "base" },
          { name: "10", value: 10, tether: "base" }
        ]
      }), I(b, S);
    };
    ne(x, (b) => {
      v(h) && b(m);
    });
  }
  I(e, A);
  var C = ue({
    get arrowChart() {
      return s();
    },
    set arrowChart(b) {
      s(b), w();
    },
    get groups() {
      return l();
    },
    set groups(b) {
      l(b), w();
    },
    get layout() {
      return u();
    },
    set layout(b) {
      u(b), w();
    },
    get arrowChartPercentCounted() {
      return f();
    },
    set arrowChartPercentCounted(b) {
      f(b), w();
    },
    get arrowChartCaption() {
      return c();
    },
    set arrowChartCaption(b) {
      c(b), w();
    }
  });
  return o(), C;
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
var Ol = /* @__PURE__ */ Ce("<!> <!>", 1);
function ma(e, t) {
  le(t, !0);
  const [r, o] = Bt(), { resetViewboxPadding: n, setViewboxPadding: a } = fo("viewbox-padding") || {};
  let i = y(t, "groups", 7), s = y(t, "layout", 7), l = y(t, "arrowChartPercentCounted", 7), u = /* @__PURE__ */ ee(void 0), f = /* @__PURE__ */ W(() => {
    const A = v(u);
    if (!A)
      return {};
    const x = ["LIB", "LNP", "NAT", "CLP"];
    return A.data.electorates.reduce(
      (m, C) => {
        var M, L;
        const [b, S] = C.swingDial[0].party.code === "ALP" ? C.swingDial : [...C.swingDial].reverse();
        return b.party.code === "ALP" && x.includes(S.party.code) && Number(C.counted || 0) > 5 && (m[C.code] = Number(((M = b.predicted2CP) == null ? void 0 : M.swing) || ((L = b.simple2CP) == null ? void 0 : L.swing) || 0)), m;
      },
      {}
    );
  });
  Le(() => {
    vt(wr, (A) => `Swing: ${v(f)[A] ? `${v(f)[A].toFixed(2)}% to ${v(f)[A] > 0 ? "ALP" : "Coalition"}` : "not applicable"}`);
  }), ft(() => () => {
    vt(wr, void 0);
  });
  let c = /* @__PURE__ */ W(() => (A) => `var(--a-${A < 0 ? "LNP" : "ALP"}, hotpink)`);
  const d = (A) => A < 0 ? -135 : -45;
  ft(() => {
    pa({ cache: !0 }).then((x) => {
      K(u, x, !0);
    });
    const A = a("HexMapArrowsSwing", [30, 0, 30, 0]);
    return () => n(A);
  });
  const h = 0.06;
  var g = dt(), _ = Ae(g);
  {
    var N = (A) => {
      var x = Ol(), m = Ae(x);
      bo(m, {
        get arrowData() {
          return v(f);
        },
        arrowHeight: h,
        getRotationForValue: d,
        get getColourForValue() {
          return v(c);
        },
        get groups() {
          return i();
        },
        get layout() {
          return s();
        }
      });
      var C = X(m, 2);
      const b = /* @__PURE__ */ W(() => {
        var S, T, M;
        return l() ? (M = (T = (S = v(u)) == null ? void 0 : S.data) == null ? void 0 : T.overall) == null ? void 0 : M.counted : void 0;
      });
      yo(C, {
        chartName: "Percentage point swing",
        get countedPct() {
          return v(b);
        },
        arrowHeight: h,
        getRotationForValue: d,
        get getColourForValue() {
          return v(c);
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
      }), I(A, x);
    };
    ne(_, (A) => {
      v(u) && A(N);
    });
  }
  I(e, g);
  var p = ue({
    get groups() {
      return i();
    },
    set groups(A) {
      i(A), w();
    },
    get layout() {
      return s();
    },
    set layout(A) {
      s(A), w();
    },
    get arrowChartPercentCounted() {
      return l();
    },
    set arrowChartPercentCounted(A) {
      l(A), w();
    }
  });
  return o(), p;
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
  const e = It([0, 0, 0, 0]), t = It("none");
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
  return { svgElCurrentScale: It(1) };
}
const Il = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABvBAAAbwQGXmrkfAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPpJREFUOI2d0rErhVEYwOHn09dVpFsGRVkMRtnsWCwyUiKRKPGn6FJkRJgsBhtlUgZlsLAZZDCIotw4htvN8dW97v3e8Xd6n06dk4QQEgS/M4BVDMo3NyilEdqNZYwhyQE+YAtnCCmKmMEUCjnAF+zjEOVqTEIIF2jPAX7gAHt4j3oR82kO9Asn2MFz1AuYxBw60ibRK6zjPmoJRlQevKcaG4VvUcJ1pg9hDf3Zhf/gJ2zj1N8v2YdFjNZarAW/YhdH+Ix6FxYwgZZ6N8rCZRyrPMxb1NswjVm01gOz8DfOsYHHzPk4ltDZCBgvXmITd1FPMIwV9DYDVucHs4YzzzgMYBMAAAAASUVORK5CYII=";
var Ml = /* @__PURE__ */ Ce('<div class="hexmap__labels svelte-82t7dm"><!></div>'), Fl = /* @__PURE__ */ Ce('<div class="hexmap svelte-82t7dm"><div><svg><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="10.5" height="6" preserveAspectRatio="xMidYMid"><image x="0" y="0" width="22" height="12" transform="scale(0.5)" transform-origin="top left"></image></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const Bl = {
  hash: "svelte-82t7dm",
  code: ".hexmap.svelte-82t7dm {position:relative;width:100%;height:100%;position:relative;}.hexmap.svelte-82t7dm * {box-sizing:border-box;}.hexmap__labels.svelte-82t7dm {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-82t7dm svg:where(.svelte-82t7dm) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-82t7dm {position:relative;margin:0 auto;max-height:100%;}"
};
function wa(e, t) {
  le(t, !0), Me(e, Bl);
  const [r, o] = Bt(), n = () => xr(Z, "$viewboxPadding", r), a = () => xr(re, "$svgElCurrentScale", r);
  let i = y(t, "config", 23, () => ({})), s = y(t, "layout", 23, () => ({})), l = y(t, "allocations", 23, () => ({})), u = y(t, "focuses", 23, () => ({})), f = y(t, "certainties", 23, () => ({})), c = y(t, "labelsToShow", 23, () => ({})), d = y(t, "showStateLabels", 7, !1), h = y(t, "showElectorateLabels", 7, !1), g = y(t, "showFocusedElectorateLabels", 7, !1), _ = y(t, "isStaticLayout", 7, !1), N = y(t, "onClick", 7, ({ code: P }) => {
  }), p = y(t, "onHover", 7, ({ code: P }) => {
  }), A = y(t, "onFocus", 7, ({ code: P }) => {
  }), x = y(t, "customViewbox", 7, null), m = y(t, "onViewboxChange", 7, ({ newViewbox: P }) => {
  }), C = y(t, "isInteractive", 7, !1), b = y(t, "arrowChart", 7, "None"), S = y(t, "arrowChartPercentCounted", 7, !0), T = y(t, "arrowChartCaption", 7), M = y(t, "selectedElectorate", 7, null), L = y(t, "customElectorateAltText", 7), H = y(t, "showStateOutlinesOnTop", 7, !1), Y = y(t, "isInline", 7, !1), $ = y(t, "hexFlip", 7, "None"), U = y(t, "altText", 7, ""), O = /* @__PURE__ */ ee(void 0), R = /* @__PURE__ */ ee(0), G = /* @__PURE__ */ ee(0), E = /* @__PURE__ */ ee(null), j = /* @__PURE__ */ ee(null);
  const { viewboxPadding: Z } = Rl(), { svgElCurrentScale: re } = kl();
  xn("svgElCurrentScale", re);
  const ae = Jo(s().viewbox, n()), J = {
    easing: fi,
    duration: Y() ? 0 : 1100
  };
  let ge = new Tt(ae[0], J), Fe = new Tt(ae[1], J), me = new Tt(ae[2], J), rt = new Tt(ae[3], J);
  Le(() => {
    const [P, oe, Nt, kr] = Jo(x() || s().viewbox, n());
    ge.set(P), Fe.set(oe), me.set(Nt), rt.set(kr);
  }), Le(() => {
    m()(s().viewbox);
  }), Le(() => {
    if (!v(O) || v(G))
      return;
    const P = v(O).getBoundingClientRect();
    K(G, P.height / P.width);
  });
  let yt = /* @__PURE__ */ W(() => al({
    isInteractive: C(),
    onClick: N(),
    onHover: (P) => {
      K(j, P.code, !0), p()(P);
    }
  }));
  Le(() => {
    let P = v(R), oe = me.current;
    if (!P) {
      vt(re, 1);
      return;
    }
    vt(re, oe / P + 0.1);
  });
  let Dt = /* @__PURE__ */ W(() => U() ? { "aria-label": U(), role: "img" } : {});
  var _t = Fl(), Ht = D(_t);
  pr(
    Ht,
    (P, oe) => ({
      class: "hexmap__viz",
      "data-svgratio": v(G) || "null",
      ...v(yt),
      [Et]: P,
      [Lt]: { "aspect-ratio": oe }
    }),
    [
      () => ({
        "hexmap__viz--vertical": v(G) <= 1
      }),
      () => v(G) ? v(G).toFixed(3) : null
    ],
    "svelte-82t7dm"
  );
  var At = D(Ht);
  pr(
    At,
    (P) => ({
      viewBox: P,
      ...v(Dt)
    }),
    [
      () => [
        ge.current,
        Fe.current,
        me.current,
        rt.current
      ].join(" ")
    ],
    "svelte-82t7dm"
  );
  var Or = D(At), Rr = D(Or), Aa = D(Rr);
  k(Rr), k(Or);
  var Co = X(Or);
  const Na = /* @__PURE__ */ W(() => b() !== "None");
  va(Co, {
    get groups() {
      return i().groups;
    },
    get isStaticLayout() {
      return _();
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
      return h();
    },
    get showFocusedElectorateLabels() {
      return g();
    },
    get labelsToShow() {
      return c();
    },
    get showStateOutlinesOnTop() {
      return H();
    },
    get hexFlip() {
      return $();
    },
    get isOutlineOnly() {
      return v(Na);
    }
  });
  var Po = X(Co);
  sr(Po, {
    get groups() {
      return i().groups;
    },
    get id() {
      return v(E);
    },
    get layout() {
      return s();
    },
    type: "focus"
  });
  var So = X(Po);
  sr(So, {
    get groups() {
      return i().groups;
    },
    get id() {
      return M();
    },
    get layout() {
      return s();
    },
    type: "focus"
  });
  var Eo = X(So);
  sr(Eo, {
    get groups() {
      return i().groups;
    },
    get id() {
      return v(j);
    },
    get layout() {
      return s();
    },
    type: "hover"
  });
  var Ca = X(Eo);
  {
    var Pa = (P) => {
      var oe = dt(), Nt = Ae(oe);
      {
        var kr = (Ct) => {
          ma(Ct, {
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
        }, Ra = (Ct) => {
          xa(Ct, {
            get groups() {
              return i().groups;
            },
            get layout() {
              return s();
            },
            get arrowChart() {
              return b();
            },
            get arrowChartPercentCounted() {
              return S();
            },
            get arrowChartCaption() {
              return T();
            }
          });
        };
        ne(Nt, (Ct) => {
          b() === "Labor/Coalition 2CP Swing" ? Ct(kr) : Ct(Ra, !1);
        });
      }
      I(P, oe);
    };
    ne(Ca, (P) => {
      b() !== "None" && P(Pa);
    });
  }
  k(At), Jt(At, (P) => K(O, P), () => v(O));
  var Sa = X(At, 2);
  {
    var Ea = (P) => {
      var oe = Ml(), Nt = D(oe);
      la(Nt, {
        get labels() {
          return s().labels;
        },
        get overlayLabels() {
          return s().overlayLabels;
        }
      }), k(oe), I(P, oe);
    };
    ne(Sa, (P) => {
      d() && P(Ea);
    });
  }
  k(Ht);
  var La = X(Ht, 2);
  {
    var Ta = (P) => {
      ca(P, {
        get customElectorateAltText() {
          return L();
        },
        get groups() {
          return i().groups;
        },
        get layout() {
          return s();
        },
        onChange: (oe) => {
          K(E, oe, !0);
        },
        onClick: N(),
        onFocus: A(),
        isSkippable
      });
    };
    ne(La, (P) => {
      C() && P(Ta);
    });
  }
  k(_t), ie(
    (P) => {
      q(Rr, "patternTransform", P), q(Aa, "href", Il);
    },
    [
      () => `scale(${a().toFixed(2)})`
    ]
  ), ai(At, "clientWidth", (P) => K(R, P)), ht(3, Ht, () => gt, () => ({ duration: Y() ? 0 : 250 })), ht(3, _t, () => gt, () => ({ duration: 750 })), I(e, _t);
  var Oa = ue({
    get config() {
      return i();
    },
    set config(P = {}) {
      i(P), w();
    },
    get layout() {
      return s();
    },
    set layout(P = {}) {
      s(P), w();
    },
    get allocations() {
      return l();
    },
    set allocations(P = {}) {
      l(P), w();
    },
    get focuses() {
      return u();
    },
    set focuses(P = {}) {
      u(P), w();
    },
    get certainties() {
      return f();
    },
    set certainties(P = {}) {
      f(P), w();
    },
    get labelsToShow() {
      return c();
    },
    set labelsToShow(P = {}) {
      c(P), w();
    },
    get showStateLabels() {
      return d();
    },
    set showStateLabels(P = !1) {
      d(P), w();
    },
    get showElectorateLabels() {
      return h();
    },
    set showElectorateLabels(P = !1) {
      h(P), w();
    },
    get showFocusedElectorateLabels() {
      return g();
    },
    set showFocusedElectorateLabels(P = !1) {
      g(P), w();
    },
    get isStaticLayout() {
      return _();
    },
    set isStaticLayout(P = !1) {
      _(P), w();
    },
    get onClick() {
      return N();
    },
    set onClick(P = ({ code: oe }) => {
    }) {
      N(P), w();
    },
    get onHover() {
      return p();
    },
    set onHover(P = ({ code: oe }) => {
    }) {
      p(P), w();
    },
    get onFocus() {
      return A();
    },
    set onFocus(P = ({ code: oe }) => {
    }) {
      A(P), w();
    },
    get customViewbox() {
      return x();
    },
    set customViewbox(P = null) {
      x(P), w();
    },
    get onViewboxChange() {
      return m();
    },
    set onViewboxChange(P = ({ newViewbox: oe }) => {
    }) {
      m(P), w();
    },
    get isInteractive() {
      return C();
    },
    set isInteractive(P = !1) {
      C(P), w();
    },
    get arrowChart() {
      return b();
    },
    set arrowChart(P = "None") {
      b(P), w();
    },
    get arrowChartPercentCounted() {
      return S();
    },
    set arrowChartPercentCounted(P = !0) {
      S(P), w();
    },
    get arrowChartCaption() {
      return T();
    },
    set arrowChartCaption(P) {
      T(P), w();
    },
    get selectedElectorate() {
      return M();
    },
    set selectedElectorate(P = null) {
      M(P), w();
    },
    get customElectorateAltText() {
      return L();
    },
    set customElectorateAltText(P) {
      L(P), w();
    },
    get showStateOutlinesOnTop() {
      return H();
    },
    set showStateOutlinesOnTop(P = !1) {
      H(P), w();
    },
    get isInline() {
      return Y();
    },
    set isInline(P = !1) {
      Y(P), w();
    },
    get hexFlip() {
      return $();
    },
    set hexFlip(P = "None") {
      $(P), w();
    },
    get altText() {
      return U();
    },
    set altText(P = "") {
      U(P), w();
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
let Dl = It({
  allocated: {},
  uncertain: {}
});
const Hl = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#767676", fullStateOutline: "transparent", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "#767676", tileFocusBorder: "black", tileFocusBorderGap: "white", tileInteractBorder: "black" }, Vl = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", TOP: "#cc8500", Teal: "#0098a6" }, Wl = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", TOP: "#f5e7cc" }, en = {
  c: Hl,
  allocated: Vl,
  uncertain: Wl
};
function ba(e, t) {
  le(t, !0);
  const [r, o] = Bt();
  let n = y(t, "rootEl", 15), a = y(t, "colours", 7, en);
  Le(() => {
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
      Object.entries(c).forEach(([h, g]) => {
        const _ = `--${d}-${h}`;
        l.style.setProperty(_, g);
      });
    });
  }), ft(() => {
    n();
  }), Jt(Pn.body, (s) => n(s), () => n());
  var i = ue({
    get rootEl() {
      return n();
    },
    set rootEl(s) {
      n(s), w();
    },
    get colours() {
      return a();
    },
    set colours(s = en) {
      a(s), w();
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
    function c(g) {
      if (g instanceof Uint8Array || (ArrayBuffer.isView(g) ? g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength) : Array.isArray(g) && (g = Uint8Array.from(g))), !(g instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (g.length === 0)
        return "";
      for (var _ = 0, N = 0, p = 0, A = g.length; p !== A && g[p] === 0; )
        p++, _++;
      for (var x = (A - p) * f + 1 >>> 0, m = new Uint8Array(x); p !== A; ) {
        for (var C = g[p], b = 0, S = x - 1; (C !== 0 || b < N) && S !== -1; S--, b++)
          C += 256 * m[S] >>> 0, m[S] = C % s >>> 0, C = C / s >>> 0;
        if (C !== 0)
          throw new Error("Non-zero carry");
        N = b, p++;
      }
      for (var T = x - N; T !== x && m[T] === 0; )
        T++;
      for (var M = l.repeat(_); T < x; ++T)
        M += t.charAt(m[T]);
      return M;
    }
    function d(g) {
      if (typeof g != "string")
        throw new TypeError("Expected String");
      if (g.length === 0)
        return new Uint8Array();
      for (var _ = 0, N = 0, p = 0; g[_] === l; )
        N++, _++;
      for (var A = (g.length - _) * u + 1 >>> 0, x = new Uint8Array(A); g[_]; ) {
        var m = r[g.charCodeAt(_)];
        if (m === 255)
          return;
        for (var C = 0, b = A - 1; (m !== 0 || C < p) && b !== -1; b--, C++)
          m += s * x[b] >>> 0, x[b] = m % 256 >>> 0, m = m / 256 >>> 0;
        if (m !== 0)
          throw new Error("Non-zero carry");
        p = C, _++;
      }
      for (var S = A - p; S !== A && x[S] === 0; )
        S++;
      for (var T = new Uint8Array(N + (A - S)), M = N; S !== A; )
        T[M++] = x[S++];
      return T;
    }
    function h(g) {
      var _ = d(g);
      if (_)
        return _;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: c,
      decodeUnsafe: d,
      decode: h
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
var Su = /* @__PURE__ */ Ce("<!> <div><!></div>", 1);
function Eu(e, t) {
  le(t, !0);
  let r = y(t, "allocations", 23, () => ({})), o = y(t, "certainties", 23, () => ({})), n = y(t, "focuses", 23, () => ({})), a = y(t, "showStateLabels", 7, !1), i = y(t, "showElectorateLabels", 7, !1), s = y(t, "layout", 7, "COUNTRY"), l = y(t, "selectedElectorate", 7, null), u = y(t, "customViewbox", 7, null), f = y(t, "onClick", 7, () => {
  }), c = y(t, "onHover", 7, () => {
  }), d = y(t, "onFocus", 7, () => {
  }), h = y(t, "onApi", 7, () => {
  }), g = y(t, "onViewboxChange", 7, () => {
  }), _ = y(t, "isStaticLayout", 7, !0), N = y(t, "isInteractive", 7, !0), p = y(t, "isSkippable", 7, !0), A = y(t, "colours", 7), x = y(t, "customElectorateAltText", 23, () => ({})), m = y(t, "areStateOutlinesOnTop", 7), C = y(t, "globalStyleRoot", 7, !0), b = /* @__PURE__ */ ee(void 0), S = /* @__PURE__ */ W(() => iu[s()]);
  function T(E, j, Z, re = !0) {
    const ae = re ? Z.getScreenCTM() : Z.getCTM(), J = Z.createSVGPoint();
    J.x = E, J.y = j;
    const ge = J.matrixTransform(ae);
    return [ge.x, ge.y].map(Number);
  }
  function M(E) {
    const j = Nu[E], Z = v(S).positions[j == null ? void 0 : j.group];
    if (!v(b))
      return;
    const re = v(b).querySelector("svg");
    if (!j || !Z || !re)
      throw new Error(`Could not find hexagon with id ${E}`);
    const ae = [-0.5, -1], [J, ge] = Tr(
      [
        Z[0] + ae[0],
        Z[1] + ae[1]
      ],
      ""
    ).map(Number), Fe = Number(j.coordPx[0] + J), me = Number(j.coordPx[1] + ge), [rt, yt] = T(Fe, me, re), [Dt, _t] = T(Fe, me, re, !1);
    return {
      code: E,
      screenCoord: [rt, yt],
      containerCoord: [Dt, _t],
      svgCoord: [Fe, me]
    };
  }
  function L(E) {
    var Z;
    const j = (Z = v(b)) == null ? void 0 : Z.querySelector(`.hexmapkeyboardnav button[data-id="${E}"]`);
    j instanceof HTMLButtonElement && j.focus();
  }
  Le(() => {
    h() && h()({ getHex: M, focusHex: L });
  });
  function H() {
    if (!C())
      return v(b);
  }
  var Y = Su(), $ = Ae(Y), U = () => {
  }, O = H;
  ba($, {
    get colours() {
      return A();
    },
    get rootEl() {
      return U();
    },
    set rootEl(E) {
      O();
    }
  });
  var R = X($, 2), G = D(R);
  return wa(G, {
    get config() {
      return _o;
    },
    get layout() {
      return v(S);
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
      return _();
    },
    get isInteractive() {
      return N();
    },
    get isSkippable() {
      return p();
    },
    onViewboxChange: g(),
    get customElectorateAltText() {
      return x();
    },
    get showStateOutlinesOnTop() {
      return m();
    }
  }), k(R), Jt(R, (E) => K(b, E), () => v(b)), I(e, Y), ue({
    get allocations() {
      return r();
    },
    set allocations(E = {}) {
      r(E), w();
    },
    get certainties() {
      return o();
    },
    set certainties(E = {}) {
      o(E), w();
    },
    get focuses() {
      return n();
    },
    set focuses(E = {}) {
      n(E), w();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(E = !1) {
      a(E), w();
    },
    get showElectorateLabels() {
      return i();
    },
    set showElectorateLabels(E = !1) {
      i(E), w();
    },
    get layout() {
      return s();
    },
    set layout(E = "COUNTRY") {
      s(E), w();
    },
    get selectedElectorate() {
      return l();
    },
    set selectedElectorate(E = null) {
      l(E), w();
    },
    get customViewbox() {
      return u();
    },
    set customViewbox(E = null) {
      u(E), w();
    },
    get onClick() {
      return f();
    },
    set onClick(E = () => {
    }) {
      f(E), w();
    },
    get onHover() {
      return c();
    },
    set onHover(E = () => {
    }) {
      c(E), w();
    },
    get onFocus() {
      return d();
    },
    set onFocus(E = () => {
    }) {
      d(E), w();
    },
    get onApi() {
      return h();
    },
    set onApi(E = () => {
    }) {
      h(E), w();
    },
    get onViewboxChange() {
      return g();
    },
    set onViewboxChange(E = () => {
    }) {
      g(E), w();
    },
    get isStaticLayout() {
      return _();
    },
    set isStaticLayout(E = !0) {
      _(E), w();
    },
    get isInteractive() {
      return N();
    },
    set isInteractive(E = !0) {
      N(E), w();
    },
    get isSkippable() {
      return p();
    },
    set isSkippable(E = !0) {
      p(E), w();
    },
    get colours() {
      return A();
    },
    set colours(E) {
      A(E), w();
    },
    get customElectorateAltText() {
      return x();
    },
    set customElectorateAltText(E = {}) {
      x(E), w();
    },
    get areStateOutlinesOnTop() {
      return m();
    },
    set areStateOutlinesOnTop(E) {
      m(E), w();
    },
    get globalStyleRoot() {
      return C();
    },
    set globalStyleRoot(E = !0) {
      C(E), w();
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
    isSkippable: {},
    colours: {},
    customElectorateAltText: {},
    areStateOutlinesOnTop: {},
    globalStyleRoot: {}
  },
  [],
  [],
  !0
));
export {
  Eu as default
};
