var tn = Object.defineProperty;
var er = (e) => {
  throw TypeError(e);
};
var rn = (e, t, r) => t in e ? tn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var W = (e, t, r) => rn(e, typeof t != "symbol" ? t + "" : t, r), tr = (e, t, r) => t.has(e) || er("Cannot " + r);
var S = (e, t, r) => (tr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), we = (e, t, r) => t.has(e) ? er("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Be = (e, t, r, n) => (tr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const nn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(nn);
const sn = 1, ln = 2, an = 16, on = 1, un = 4, fn = 8, cn = 16, hn = 4, vn = 2, hr = "[", Ft = "[!", Rt = "]", Ne = {}, R = Symbol(), Tt = !1, K = 2, vr = 4, zt = 8, vt = 16, ce = 32, Re = 64, st = 128, U = 256, lt = 512, M = 1024, he = 2048, ze = 4096, ae = 8192, dt = 16384, dr = 32768, Ke = 65536, dn = 1 << 19, _r = 1 << 20, Ce = Symbol("$state"), Dt = Symbol("legacy props"), _n = Symbol("");
var Mt = Array.isArray, gn = Array.prototype.indexOf, Ht = Array.from, at = Object.keys, it = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, pn = Object.getOwnPropertyDescriptors, wn = Object.prototype, yn = Array.prototype, gr = Object.getPrototypeOf;
function Le(e) {
  return typeof e == "function";
}
const ye = () => {
};
function bn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let ot = !1, At = [];
function pr() {
  ot = !1;
  const e = At.slice();
  At = [], bn(e);
}
function qt(e) {
  ot || (ot = !0, queueMicrotask(pr)), At.push(e);
}
function mn() {
  ot && pr();
}
function wr(e) {
  return e === this.v;
}
function xn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $n(e, t) {
  return e !== t;
}
function Bt(e) {
  return !xn(e, this.v);
}
function En(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Tn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function An(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ln() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Sn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function kn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Nn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Cn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function On() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Pn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let In = !1;
function D(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: wr,
    rv: 0,
    wv: 0
  };
  return r;
}
function yr(e) {
  return /* @__PURE__ */ Fn(D(e));
}
// @__NO_SIDE_EFFECTS__
function jt(e, t = !1) {
  const r = D(e);
  return t || (r.equals = Bt), r;
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  return L !== null && !J && L.f & K && (Q === null ? qn([e]) : Q.push(e)), e;
}
function F(e, t) {
  return L !== null && !J && Hr() && L.f & (K | vt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Q === null || !Q.includes(e)) && Pn(), br(e, t);
}
function br(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Nr(), mr(e, he), T !== null && T.f & M && !(T.f & (ce | Re)) && (te === null ? Bn([e]) : te.push(e))), t;
}
function mr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var l = r[s], a = l.f;
      a & he || (ue(l, t), a & (M | U) && (a & K ? mr(
        /** @type {Derived} */
        l,
        ze
      ) : pt(
        /** @type {Effect} */
        l
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  var t = K | he, r = L !== null && L.f & K ? (
    /** @type {Derived} */
    L
  ) : null;
  return T === null || r !== null && r.f & U ? t |= U : T.f |= _r, {
    ctx: q,
    deps: null,
    effects: null,
    equals: wr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? T
  };
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  const t = /* @__PURE__ */ ge(e);
  return t.equals = Bt, t;
}
function xr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      G(
        /** @type {Effect} */
        t[r]
      );
  }
}
function zn(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & K))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Dn(e) {
  var t, r = T;
  ee(zn(e));
  try {
    xr(e), t = Or(e);
  } finally {
    ee(r);
  }
  return t;
}
function $r(e) {
  var t = Dn(e), r = (_e || e.f & U) && e.deps !== null ? ze : M;
  ue(e, r), e.equals(t) || (e.v = t, e.wv = Nr());
}
function _t(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let A = !1;
function se(e) {
  A = e;
}
let E;
function V(e) {
  if (e === null)
    throw _t(), Ne;
  return E = e;
}
function xe() {
  return V(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ve(E)
  );
}
function j(e) {
  if (A) {
    if (/* @__PURE__ */ ve(E) !== null)
      throw _t(), Ne;
    E = e;
  }
}
function Lt() {
  for (var e = 0, t = E; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Rt) {
        if (e === 0) return t;
        e -= 1;
      } else (r === hr || r === Ft) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ve(t)
    );
    t.remove(), t = n;
  }
}
function Se(e, t = null, r) {
  if (typeof e != "object" || e === null || Ce in e)
    return e;
  const n = gr(e);
  if (n !== wn && n !== yn)
    return e;
  var s = /* @__PURE__ */ new Map(), l = Mt(e), a = D(0);
  l && s.set("length", D(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, i, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Nn();
        var h = s.get(i);
        return h === void 0 ? (h = D(o.value), s.set(i, h)) : F(h, Se(o.value, c)), !0;
      },
      deleteProperty(u, i) {
        var o = s.get(i);
        if (o === void 0)
          i in u && s.set(i, D(R));
        else {
          if (l && typeof i == "string") {
            var h = (
              /** @type {Source<number>} */
              s.get("length")
            ), f = Number(i);
            Number.isInteger(f) && f < h.v && F(h, f);
          }
          F(o, R), rr(a);
        }
        return !0;
      },
      get(u, i, o) {
        var d;
        if (i === Ce)
          return e;
        var h = s.get(i), f = i in u;
        if (h === void 0 && (!f || (d = ie(u, i)) != null && d.writable) && (h = D(Se(f ? u[i] : R, c)), s.set(i, h)), h !== void 0) {
          var v = b(h);
          return v === R ? void 0 : v;
        }
        return Reflect.get(u, i, o);
      },
      getOwnPropertyDescriptor(u, i) {
        var o = Reflect.getOwnPropertyDescriptor(u, i);
        if (o && "value" in o) {
          var h = s.get(i);
          h && (o.value = b(h));
        } else if (o === void 0) {
          var f = s.get(i), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== R)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return o;
      },
      has(u, i) {
        var v;
        if (i === Ce)
          return !0;
        var o = s.get(i), h = o !== void 0 && o.v !== R || Reflect.has(u, i);
        if (o !== void 0 || T !== null && (!h || (v = ie(u, i)) != null && v.writable)) {
          o === void 0 && (o = D(h ? Se(u[i], c) : R), s.set(i, o));
          var f = b(o);
          if (f === R)
            return !1;
        }
        return h;
      },
      set(u, i, o, h) {
        var k;
        var f = s.get(i), v = i in u;
        if (l && i === "length")
          for (var d = o; d < /** @type {Source<number>} */
          f.v; d += 1) {
            var _ = s.get(d + "");
            _ !== void 0 ? F(_, R) : d in u && (_ = D(R), s.set(d + "", _));
          }
        f === void 0 ? (!v || (k = ie(u, i)) != null && k.writable) && (f = D(void 0), F(f, Se(o, c)), s.set(i, f)) : (v = f.v !== R, F(f, Se(o, c)));
        var w = Reflect.getOwnPropertyDescriptor(u, i);
        if (w != null && w.set && w.set.call(h, o), !v) {
          if (l && typeof i == "string") {
            var y = (
              /** @type {Source<number>} */
              s.get("length")
            ), p = Number(i);
            Number.isInteger(p) && p >= y.v && F(y, p + 1);
          }
          rr(a);
        }
        return !0;
      },
      ownKeys(u) {
        b(a);
        var i = Reflect.ownKeys(u).filter((f) => {
          var v = s.get(f);
          return v === void 0 || v.v !== R;
        });
        for (var [o, h] of s)
          h.v !== R && !(o in u) && i.push(o);
        return i;
      },
      setPrototypeOf() {
        Cn();
      }
    }
  );
}
function rr(e, t = 1) {
  F(e, e.v + t);
}
var nr, Er, Tr, Ar;
function St() {
  if (nr === void 0) {
    nr = window, Er = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Tr = ie(t, "firstChild").get, Ar = ie(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Fe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  return Tr.call(e);
}
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return Ar.call(e);
}
function le(e, t) {
  if (!A)
    return /* @__PURE__ */ Y(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Y(E)
  );
  if (r === null)
    r = E.appendChild(Fe());
  else if (t && r.nodeType !== 3) {
    var n = Fe();
    return r == null || r.before(n), V(n), n;
  }
  return V(r), r;
}
function Mn(e, t) {
  if (!A) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Y(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ve(r) : r;
  }
  return E;
}
function et(e, t = 1, r = !1) {
  let n = A ? E : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ ve(n);
  if (!A)
    return n;
  var l = n == null ? void 0 : n.nodeType;
  if (r && l !== 3) {
    var a = Fe();
    return n === null ? s == null || s.after(a) : n.before(a), V(a), a;
  }
  return V(n), /** @type {TemplateNode} */
  n;
}
function Lr(e) {
  e.textContent = "";
}
const Sr = 0, Hn = 1;
let tt = !1, rt = Sr, Ye = !1, Ue = null, Oe = !1, Yt = !1;
function sr(e) {
  Oe = e;
}
function lr(e) {
  Yt = e;
}
let be = [], Pe = 0;
let L = null, J = !1;
function Z(e) {
  L = e;
}
let T = null;
function ee(e) {
  T = e;
}
let Q = null;
function qn(e) {
  Q = e;
}
let z = null, H = 0, te = null;
function Bn(e) {
  te = e;
}
let kr = 1, ut = 0, _e = !1;
function Nr() {
  return ++kr;
}
function Ge(e) {
  var h;
  var t = e.f;
  if (t & he)
    return !0;
  if (t & ze) {
    var r = e.deps, n = (t & U) !== 0;
    if (r !== null) {
      var s, l, a = (t & lt) !== 0, c = n && T !== null && !_e, u = r.length;
      if (a || c) {
        var i = (
          /** @type {Derived} */
          e
        ), o = i.parent;
        for (s = 0; s < u; s++)
          l = r[s], (a || !((h = l == null ? void 0 : l.reactions) != null && h.includes(i))) && (l.reactions ?? (l.reactions = [])).push(i);
        a && (i.f ^= lt), c && o !== null && !(o.f & U) && (i.f ^= U);
      }
      for (s = 0; s < u; s++)
        if (l = r[s], Ge(
          /** @type {Derived} */
          l
        ) && $r(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!n || T !== null && !_e) && ue(e, M);
  }
  return !1;
}
function jn(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & st)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= st;
      }
    r = r.parent;
  }
  throw tt = !1, e;
}
function Yn(e) {
  return (e.f & dt) === 0 && (e.parent === null || (e.parent.f & st) === 0);
}
function gt(e, t, r, n) {
  if (tt) {
    if (r === null && (tt = !1), Yn(t))
      throw e;
    return;
  }
  r !== null && (tt = !0);
  {
    jn(e, t);
    return;
  }
}
function Cr(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var l = n[s];
      l.f & K ? Cr(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? ue(l, he) : l.f & M && ue(l, ze), pt(
        /** @type {Effect} */
        l
      ));
    }
}
function Or(e) {
  var v;
  var t = z, r = H, n = te, s = L, l = _e, a = Q, c = q, u = J, i = e.f;
  z = /** @type {null | Value[]} */
  null, H = 0, te = null, L = i & (ce | Re) ? null : e, _e = (i & U) !== 0 && (!Oe || s === null || u), Q = null, ar(e.ctx), J = !1, ut++;
  try {
    var o = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (z !== null) {
      var f;
      if (ft(e, H), h !== null && H > 0)
        for (h.length = H + z.length, f = 0; f < z.length; f++)
          h[H + f] = z[f];
      else
        e.deps = h = z;
      if (!_e)
        for (f = H; f < h.length; f++)
          ((v = h[f]).reactions ?? (v.reactions = [])).push(e);
    } else h !== null && H < h.length && (ft(e, H), h.length = H);
    if (Hr() && te !== null && !J && h !== null && !(e.f & (K | ze | he)))
      for (f = 0; f < /** @type {Source[]} */
      te.length; f++)
        Cr(
          te[f],
          /** @type {Effect} */
          e
        );
    return s !== null && ut++, o;
  } finally {
    z = t, H = r, te = n, L = s, _e = l, Q = a, ar(c), J = u;
  }
}
function Un(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = gn.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  r === null && t.f & K && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (z === null || !z.includes(t)) && (ue(t, ze), t.f & (U | lt) || (t.f ^= lt), xr(
    /** @type {Derived} **/
    t
  ), ft(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ft(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Un(e, r[n]);
}
function Ut(e) {
  var t = e.f;
  if (!(t & dt)) {
    ue(e, M);
    var r = T, n = q;
    T = e;
    try {
      t & vt ? es(e) : Rr(e), Fr(e);
      var s = Or(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = kr;
      var l = e.deps, a;
      Tt && In && e.f & he;
    } catch (c) {
      gt(c, e, r, n || e.ctx);
    } finally {
      T = r;
    }
  }
}
function Pr() {
  if (Pe > 1e3) {
    Pe = 0;
    try {
      Ln();
    } catch (e) {
      if (Ue !== null)
        gt(e, Ue, null);
      else
        throw e;
    }
  }
  Pe++;
}
function Ir(e) {
  var t = e.length;
  if (t !== 0) {
    Pr();
    var r = Oe;
    Oe = !0;
    try {
      for (var n = 0; n < t; n++) {
        var s = e[n];
        s.f & M || (s.f ^= M);
        var l = Kn(s);
        Vn(l);
      }
    } finally {
      Oe = r;
    }
  }
}
function Vn(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if (!(n.f & (dt | ae)))
        try {
          Ge(n) && (Ut(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? zr(n) : n.fn = null));
        } catch (s) {
          gt(s, n, null, n.ctx);
        }
    }
}
function Wn() {
  if (Ye = !1, Pe > 1001)
    return;
  const e = be;
  be = [], Ir(e), Ye || (Pe = 0, Ue = null);
}
function pt(e) {
  rt === Sr && (Ye || (Ye = !0, queueMicrotask(Wn))), Ue = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Re | ce)) {
      if (!(r & M)) return;
      t.f ^= M;
    }
  }
  be.push(t);
}
function Kn(e) {
  var t = [], r = e.first;
  e: for (; r !== null; ) {
    var n = r.f, s = (n & ce) !== 0, l = s && (n & M) !== 0, a = r.next;
    if (!l && !(n & ae)) {
      if (n & vr)
        t.push(r);
      else if (s)
        r.f ^= M;
      else {
        var c = L;
        try {
          L = r, Ge(r) && Ut(r);
        } catch (o) {
          gt(o, r, null, r.ctx);
        } finally {
          L = c;
        }
      }
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    if (a === null) {
      let o = r.parent;
      for (; o !== null; ) {
        if (e === o)
          break e;
        var i = o.next;
        if (i !== null) {
          r = i;
          continue e;
        }
        o = o.parent;
      }
    }
    r = a;
  }
  return t;
}
function x(e) {
  var t = rt, r = be;
  try {
    Pr();
    const s = [];
    rt = Hn, be = s, Ye = !1, Ir(r);
    var n = e == null ? void 0 : e();
    return mn(), (be.length > 0 || s.length > 0) && x(), Pe = 0, Ue = null, n;
  } finally {
    rt = t, be = r;
  }
}
function b(e) {
  var t = e.f, r = (t & K) !== 0;
  if (L !== null && !J) {
    Q !== null && Q.includes(e) && On();
    var n = L.deps;
    e.rv < ut && (e.rv = ut, z === null && n !== null && n[H] === e ? H++ : z === null ? z = [e] : (!_e || !z.includes(e)) && z.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), l = s.parent;
    l !== null && !(l.f & U) && (s.f ^= U);
  }
  return r && (s = /** @type {Derived} */
  e, Ge(s) && $r(s)), e.v;
}
function ct(e) {
  var t = J;
  try {
    return J = !0, e();
  } finally {
    J = t;
  }
}
const Gn = -7169;
function ue(e, t) {
  e.f = e.f & Gn | t;
}
function Xn(e) {
  T === null && L === null && An(), L !== null && L.f & U && T === null && Tn(), Yt && En();
}
function Jn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function De(e, t, r, n = !0) {
  var s = (e & Re) !== 0, l = T, a = {
    ctx: q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | he,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s ? null : l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r) {
    var c = Oe;
    try {
      sr(!0), Ut(a), a.f |= dr;
    } catch (o) {
      throw G(a), o;
    } finally {
      sr(c);
    }
  } else t !== null && pt(a);
  var u = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (_r | st)) === 0;
  if (!u && !s && n && (l !== null && Jn(a, l), L !== null && L.f & K)) {
    var i = (
      /** @type {Derived} */
      L
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return a;
}
function kt(e) {
  Xn();
  var t = T !== null && (T.f & ce) !== 0 && q !== null && !q.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      q
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: T,
      reaction: L
    });
  } else {
    var n = wt(e);
    return n;
  }
}
function Qn(e) {
  const t = De(Re, e, !0);
  return () => {
    G(t);
  };
}
function Zn(e) {
  const t = De(Re, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Ve(t, () => {
      G(t), n(void 0);
    }) : (G(t), n(void 0));
  });
}
function wt(e) {
  return De(vr, e, !1);
}
function Vt(e) {
  return De(zt, e, !0);
}
function yt(e, t = [], r = ge) {
  const n = t.map(r);
  return Me(() => e(...n.map(b)));
}
function Me(e, t = 0) {
  return De(zt | vt | t, e, !0);
}
function pe(e, t = !0) {
  return De(zt | ce, e, !0, t);
}
function Fr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Yt, n = L;
    lr(!0), Z(null);
    try {
      t.call(null);
    } finally {
      lr(r), Z(n);
    }
  }
}
function Rr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    G(r, t), r = n;
  }
}
function es(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & ce || G(t), t = r;
  }
}
function G(e, t = !0) {
  var r = !1;
  if ((t || e.f & dn) && e.nodes_start !== null) {
    for (var n = e.nodes_start, s = e.nodes_end; n !== null; ) {
      var l = n === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ve(n)
      );
      n.remove(), n = l;
    }
    r = !0;
  }
  Rr(e, t && !r), ft(e, 0), ue(e, dt);
  var a = e.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  Fr(e);
  var c = e.parent;
  c !== null && c.first !== null && zr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function zr(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Ve(e, t) {
  var r = [];
  Wt(e, r, !0), Dr(r, () => {
    G(e), t && t();
  });
}
function Dr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var s of e)
      s.out(n);
  } else
    t();
}
function Wt(e, t, r) {
  if (!(e.f & ae)) {
    if (e.f ^= ae, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var s = n.next, l = (n.f & Ke) !== 0 || (n.f & ce) !== 0;
      Wt(n, t, l ? r : !1), n = s;
    }
  }
}
function ht(e) {
  Mr(e, !0);
}
function Mr(e, t) {
  if (e.f & ae) {
    e.f ^= ae, e.f & M || (e.f ^= M), Ge(e) && (ue(e, he), pt(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Ke) !== 0 || (r.f & ce) !== 0;
      Mr(r, s ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
let q = null;
function ar(e) {
  q = e;
}
function $e(e, t = !1, r) {
  q = {
    p: q,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Ee(e) {
  const t = q;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var r = T, n = L;
      t.e = null;
      try {
        for (var s = 0; s < a.length; s++) {
          var l = a[s];
          ee(l.effect), Z(l.reaction), wt(l.fn);
        }
      } finally {
        ee(r), Z(n);
      }
    }
    q = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Hr() {
  return !0;
}
const ts = ["touchstart", "touchmove"];
function rs(e) {
  return ts.includes(e);
}
function ns(e) {
  var t = L, r = T;
  Z(null), ee(null);
  try {
    return e();
  } finally {
    Z(t), ee(r);
  }
}
const qr = /* @__PURE__ */ new Set(), Nt = /* @__PURE__ */ new Set();
function ss(e) {
  for (var t = 0; t < e.length; t++)
    qr.add(e[t]);
  for (var r of Nt)
    r(e);
}
function Je(e) {
  var p;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((p = e.composedPath) == null ? void 0 : p.call(e)) || [], l = (
    /** @type {null | Element} */
    s[0] || e.target
  ), a = 0, c = e.__root;
  if (c) {
    var u = s.indexOf(c);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var i = s.indexOf(t);
    if (i === -1)
      return;
    u <= i && (a = u);
  }
  if (l = /** @type {Element} */
  s[a] || e.target, l !== t) {
    it(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var o = L, h = T;
    Z(null), ee(null);
    try {
      for (var f, v = []; l !== null; ) {
        var d = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var _ = l["__" + n];
          if (_ !== void 0 && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (Mt(_)) {
              var [w, ...y] = _;
              w.apply(l, [e, ...y]);
            } else
              _.call(l, e);
        } catch (k) {
          f ? v.push(k) : f = k;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        l = d;
      }
      if (f) {
        for (let k of v)
          queueMicrotask(() => {
            throw k;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Z(o), ee(h);
    }
  }
}
function Kt(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function fe(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  var r = (t & vn) !== 0, n, s = !e.startsWith("<!>");
  return () => {
    if (A)
      return fe(E, null), E;
    n === void 0 && (n = Kt(s ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ Y(n));
    var l = (
      /** @type {TemplateNode} */
      r || Er ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return fe(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Gt(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), s = `<${r}>${n ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (A)
      return fe(E, null), E;
    if (!l) {
      var a = (
        /** @type {DocumentFragment} */
        Kt(s)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Y(a)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ Y(c);
    }
    var u = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return fe(u, u), u;
  };
}
function ls() {
  if (A)
    return fe(E, null), E;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Fe();
  return e.append(t, r), fe(t, r), e;
}
function oe(e, t) {
  if (A) {
    T.nodes_end = E, xe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Ct = !0;
function Br(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function jr(e, t) {
  return Yr(e, t);
}
function as(e, t) {
  St(), t.intro = t.intro ?? !1;
  const r = t.target, n = A, s = E;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Y(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== hr); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ ve(l);
    if (!l)
      throw Ne;
    se(!0), V(
      /** @type {Comment} */
      l
    ), xe();
    const a = Yr(e, { ...t, anchor: l });
    if (E === null || E.nodeType !== 8 || /** @type {Comment} */
    E.data !== Rt)
      throw _t(), Ne;
    return se(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Ne)
      return t.recover === !1 && Sn(), St(), Lr(r), se(!1), jr(e, t);
    throw a;
  } finally {
    se(n), V(s);
  }
}
const Ae = /* @__PURE__ */ new Map();
function Yr(e, { target: t, anchor: r, props: n = {}, events: s, context: l, intro: a = !0 }) {
  St();
  var c = /* @__PURE__ */ new Set(), u = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!c.has(v)) {
        c.add(v);
        var d = rs(v);
        t.addEventListener(v, Je, { passive: d });
        var _ = Ae.get(v);
        _ === void 0 ? (document.addEventListener(v, Je, { passive: d }), Ae.set(v, 1)) : Ae.set(v, _ + 1);
      }
    }
  };
  u(Ht(qr)), Nt.add(u);
  var i = void 0, o = Zn(() => {
    var h = r ?? t.appendChild(Fe());
    return pe(() => {
      if (l) {
        $e({});
        var f = (
          /** @type {ComponentContext} */
          q
        );
        f.c = l;
      }
      s && (n.$$events = s), A && fe(
        /** @type {TemplateNode} */
        h,
        null
      ), Ct = a, i = e(h, n) || {}, Ct = !0, A && (T.nodes_end = E), l && Ee();
    }), () => {
      var d;
      for (var f of c) {
        t.removeEventListener(f, Je);
        var v = (
          /** @type {number} */
          Ae.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, Je), Ae.delete(f)) : Ae.set(f, v);
      }
      Nt.delete(u), h !== r && ((d = h.parentNode) == null || d.removeChild(h));
    };
  });
  return Ot.set(i, o), i;
}
let Ot = /* @__PURE__ */ new WeakMap();
function is(e, t) {
  const r = Ot.get(e);
  return r ? (Ot.delete(e), r(t)) : Promise.resolve();
}
function Ur(e, t, r = !1) {
  A && xe();
  var n = e, s = null, l = null, a = R, c = r ? Ke : 0, u = !1;
  const i = (h, f = !0) => {
    u = !0, o(f, h);
  }, o = (h, f) => {
    if (a === (a = h)) return;
    let v = !1;
    if (A) {
      const d = (
        /** @type {Comment} */
        n.data === Ft
      );
      !!a === d && (n = Lt(), V(n), se(!1), v = !0);
    }
    a ? (s ? ht(s) : f && (s = pe(() => f(n))), l && Ve(l, () => {
      l = null;
    })) : (l ? ht(l) : f && (l = pe(() => f(n))), s && Ve(s, () => {
      s = null;
    })), v && se(!0);
  };
  Me(() => {
    u = !1, t(i), u || o(null, null);
  }, c), A && (n = E);
}
function os(e, t, r) {
  A && xe();
  var n = e, s = R, l, a = $n;
  Me(() => {
    a(s, s = t()) && (l && Ve(l), l = pe(() => r(n)));
  }), A && (n = E);
}
function Xt(e, t) {
  return t;
}
function us(e, t, r, n) {
  for (var s = [], l = t.length, a = 0; a < l; a++)
    Wt(t[a].e, s, !0);
  var c = l > 0 && s.length === 0 && r !== null;
  if (c) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Lr(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), de(e, t[0].prev, t[l - 1].next);
  }
  Dr(s, () => {
    for (var i = 0; i < l; i++) {
      var o = t[i];
      c || (n.delete(o.k), de(e, o.prev, o.next)), G(o.e, !c);
    }
  });
}
function Jt(e, t, r, n, s, l = null) {
  var a = e, c = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var u = (
      /** @type {Element} */
      e
    );
    a = A ? V(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Y(u)
    ) : u.appendChild(Fe());
  }
  A && xe();
  var i = null, o = !1, h = /* @__PURE__ */ Rn(() => {
    var f = r();
    return Mt(f) ? f : f == null ? [] : Ht(f);
  });
  Me(() => {
    var f = b(h), v = f.length;
    if (o && v === 0)
      return;
    o = v === 0;
    let d = !1;
    if (A) {
      var _ = (
        /** @type {Comment} */
        a.data === Ft
      );
      _ !== (v === 0) && (a = Lt(), V(a), se(!1), d = !0);
    }
    if (A) {
      for (var w = null, y, p = 0; p < v; p++) {
        if (E.nodeType === 8 && /** @type {Comment} */
        E.data === Rt) {
          a = /** @type {Comment} */
          E, d = !0, se(!1);
          break;
        }
        var k = f[p], C = n(k, p);
        y = Vr(
          E,
          c,
          w,
          null,
          k,
          C,
          p,
          s,
          t,
          r
        ), c.items.set(C, y), w = y;
      }
      v > 0 && V(Lt());
    }
    A || fs(f, c, a, s, t, n, r), l !== null && (v === 0 ? i ? ht(i) : i = pe(() => l(a)) : i !== null && Ve(i, () => {
      i = null;
    })), d && se(!0), b(h);
  }), A && (a = E);
}
function fs(e, t, r, n, s, l, a) {
  var c = e.length, u = t.items, i = t.first, o = i, h, f = null, v = [], d = [], _, w, y, p;
  for (p = 0; p < c; p += 1) {
    if (_ = e[p], w = l(_, p), y = u.get(w), y === void 0) {
      var k = o ? (
        /** @type {TemplateNode} */
        o.e.nodes_start
      ) : r;
      f = Vr(
        k,
        t,
        f,
        f === null ? t.first : f.next,
        _,
        w,
        p,
        n,
        s,
        a
      ), u.set(w, f), v = [], d = [], o = f.next;
      continue;
    }
    if (cs(y, _, p), y.e.f & ae && ht(y.e), y !== o) {
      if (h !== void 0 && h.has(y)) {
        if (v.length < d.length) {
          var C = d[0], O;
          f = C.prev;
          var N = v[0], P = v[v.length - 1];
          for (O = 0; O < v.length; O += 1)
            ir(v[O], C, r);
          for (O = 0; O < d.length; O += 1)
            h.delete(d[O]);
          de(t, N.prev, P.next), de(t, f, N), de(t, P, C), o = C, f = P, p -= 1, v = [], d = [];
        } else
          h.delete(y), ir(y, o, r), de(t, y.prev, y.next), de(t, y, f === null ? t.first : f.next), de(t, f, y), f = y;
        continue;
      }
      for (v = [], d = []; o !== null && o.k !== w; )
        o.e.f & ae || (h ?? (h = /* @__PURE__ */ new Set())).add(o), d.push(o), o = o.next;
      if (o === null)
        continue;
      y = o;
    }
    v.push(y), f = y, o = y.next;
  }
  if (o !== null || h !== void 0) {
    for (var g = h === void 0 ? [] : Ht(h); o !== null; )
      o.e.f & ae || g.push(o), o = o.next;
    var I = g.length;
    if (I > 0) {
      var Te = c === 0 ? r : null;
      us(t, g, Te, u);
    }
  }
  T.first = t.first && t.first.e, T.last = f && f.e;
}
function cs(e, t, r, n) {
  br(e.v, t), e.i = r;
}
function Vr(e, t, r, n, s, l, a, c, u, i) {
  var o = (u & sn) !== 0, h = (u & an) === 0, f = o ? h ? /* @__PURE__ */ jt(s) : D(s) : s, v = u & ln ? D(a) : a, d = {
    i: v,
    v: f,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return d.e = pe(() => c(e, f, v, i), A), d.e.prev = r && r.e, d.e.next = n && n.e, r === null ? t.first = d : (r.next = d, r.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function ir(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, s = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== n; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ve(l)
    );
    s.before(l), l = a;
  }
}
function de(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function $t(e, t, r, n, s) {
  var l = e, a = "", c;
  Me(() => {
    if (a === (a = t() ?? "")) {
      A && xe();
      return;
    }
    c !== void 0 && (G(c), c = void 0), a !== "" && (c = pe(() => {
      if (A) {
        E.data;
        for (var u = xe(), i = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          i = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ ve(u);
        if (u === null)
          throw _t(), Ne;
        fe(E, i), l = V(u);
        return;
      }
      var o = a + "";
      o = `<svg>${o}</svg>`;
      var h = Kt(o);
      for (h = /** @type {Element} */
      /* @__PURE__ */ Y(h), fe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Y(h),
        /** @type {TemplateNode} */
        h.lastChild
      ); /* @__PURE__ */ Y(h); )
        l.before(
          /** @type {Node} */
          /* @__PURE__ */ Y(h)
        );
    }));
  });
}
function hs(e, t, ...r) {
  var n = e, s = ye, l;
  Me(() => {
    s !== (s = t()) && (l && (G(l), l = null), l = pe(() => (
      /** @type {SnippetFn} */
      s(n, ...r)
    )));
  }, Ke), A && (n = E);
}
function Xe(e, t) {
  qt(() => {
    var r = e.getRootNode(), n = (
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
    if (!n.querySelector("#" + t.hash)) {
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function Qt(e, t, r, n) {
  var s = e.__attributes ?? (e.__attributes = {});
  A && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[_n] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && vs(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var or = /* @__PURE__ */ new Map();
function vs(e) {
  var t = or.get(e.nodeName);
  if (t) return t;
  or.set(e.nodeName, t = []);
  for (var r, n = e, s = Element.prototype; s !== n; ) {
    r = pn(n);
    for (var l in r)
      r[l].set && t.push(l);
    n = gr(n);
  }
  return t;
}
function Et(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function je(e, t, r, n) {
  var s = e.__styles ?? (e.__styles = {});
  s[t] !== r && (s[t] = r, r == null ? e.style.removeProperty(t) : e.style.setProperty(t, r, ""));
}
const ds = () => performance.now(), X = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => ds(),
  tasks: /* @__PURE__ */ new Set()
};
function Wr() {
  const e = X.now();
  X.tasks.forEach((t) => {
    t.c(e) || (X.tasks.delete(t), t.f());
  }), X.tasks.size !== 0 && X.tick(Wr);
}
function Kr(e) {
  let t;
  return X.tasks.size === 0 && X.tick(Wr), {
    promise: new Promise((r) => {
      X.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      X.tasks.delete(t);
    }
  };
}
function Qe(e, t) {
  ns(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function _s(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function ur(e) {
  const t = {}, r = e.split(";");
  for (const n of r) {
    const [s, l] = n.split(":");
    if (!s || l === void 0) break;
    const a = _s(s.trim());
    t[a] = l.trim();
  }
  return t;
}
const gs = (e) => e;
function ps(e, t, r, n) {
  var s = (e & hn) !== 0, l = "both", a, c = t.inert, u = t.style.overflow, i, o;
  function h() {
    var w = L, y = T;
    Z(null), ee(null);
    try {
      return a ?? (a = r()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: l
      }));
    } finally {
      Z(w), ee(y);
    }
  }
  var f = {
    is_global: s,
    in() {
      t.inert = c, Qe(t, "introstart"), i = Pt(t, h(), o, 1, () => {
        Qe(t, "introend"), i == null || i.abort(), i = a = void 0, t.style.overflow = u;
      });
    },
    out(w) {
      t.inert = !0, Qe(t, "outrostart"), o = Pt(t, h(), i, 0, () => {
        Qe(t, "outroend"), w == null || w();
      });
    },
    stop: () => {
      i == null || i.abort(), o == null || o.abort();
    }
  }, v = (
    /** @type {Effect} */
    T
  );
  if ((v.transitions ?? (v.transitions = [])).push(f), Ct) {
    var d = s;
    if (!d) {
      for (var _ = (
        /** @type {Effect | null} */
        v.parent
      ); _ && _.f & Ke; )
        for (; (_ = _.parent) && !(_.f & vt); )
          ;
      d = !_ || (_.f & dr) !== 0;
    }
    d && wt(() => {
      ct(() => f.in());
    });
  }
}
function Pt(e, t, r, n, s) {
  var l = n === 1;
  if (Le(t)) {
    var a, c = !1;
    return qt(() => {
      if (!c) {
        var w = t({ direction: l ? "in" : "out" });
        a = Pt(e, w, r, n, s);
      }
    }), {
      abort: () => {
        c = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return s(), {
      abort: ye,
      deactivate: ye,
      reset: ye,
      t: () => n
    };
  const { delay: u = 0, css: i, tick: o, easing: h = gs } = t;
  var f = [];
  if (l && r === void 0 && (o && o(0, 1), i)) {
    var v = ur(i(0, 1));
    f.push(v, v);
  }
  var d = () => 1 - n, _ = e.animate(f, { duration: u });
  return _.onfinish = () => {
    var w = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var y = n - w, p = (
      /** @type {number} */
      t.duration * Math.abs(y)
    ), k = [];
    if (p > 0) {
      var C = !1;
      if (i)
        for (var O = Math.ceil(p / 16.666666666666668), N = 0; N <= O; N += 1) {
          var P = w + y * h(N / O), g = ur(i(P, 1 - P));
          k.push(g), C || (C = g.overflow === "hidden");
        }
      C && (e.style.overflow = "hidden"), d = () => {
        var I = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          _.currentTime
        );
        return w + y * h(I / p);
      }, o && Kr(() => {
        if (_.playState !== "running") return !1;
        var I = d();
        return o(I, 1 - I), !0;
      });
    }
    _ = e.animate(k, { duration: p, fill: "forwards" }), _.onfinish = () => {
      d = () => n, o == null || o(n, 1 - n), s();
    };
  }, {
    abort: () => {
      _ && (_.cancel(), _.effect = null, _.onfinish = ye);
    },
    deactivate: () => {
      s = ye;
    },
    reset: () => {
      n === 0 && (o == null || o(1, 0));
    },
    t: () => d()
  };
}
function fr(e, t) {
  return e === t || (e == null ? void 0 : e[Ce]) === t;
}
function ws(e = {}, t, r, n) {
  return wt(() => {
    var s, l;
    return Vt(() => {
      s = l, l = [], ct(() => {
        e !== r(...l) && (t(e, ...l), s && fr(r(...s), e) && t(null, ...s));
      });
    }), () => {
      qt(() => {
        l && fr(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
let Ze = !1;
function ys(e) {
  var t = Ze;
  try {
    return Ze = !1, [e(), Ze];
  } finally {
    Ze = t;
  }
}
const bs = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Le(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let s = e.props[n];
      Le(s) && (s = s());
      const l = ie(s, t);
      if (l && l.set)
        return l.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Le(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const s = ie(n, t);
        return s && !s.configurable && (s.configurable = !0), s;
      }
    }
  },
  has(e, t) {
    if (t === Ce || t === Dt) return !1;
    for (let r of e.props)
      if (Le(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props) {
      Le(r) && (r = r());
      for (const n in r)
        t.includes(n) || t.push(n);
    }
    return t;
  }
};
function ms(...e) {
  return new Proxy({ props: e }, bs);
}
function $(e, t, r, n) {
  var O;
  var s = (r & on) !== 0, l = !0, a = (r & fn) !== 0, c = (r & cn) !== 0, u = !1, i;
  a ? [i, u] = ys(() => (
    /** @type {V} */
    e[t]
  )) : i = /** @type {V} */
  e[t];
  var o = Ce in e || Dt in e, h = a && (((O = ie(e, t)) == null ? void 0 : O.set) ?? (o && t in e && ((N) => e[t] = N))) || void 0, f = (
    /** @type {V} */
    n
  ), v = !0, d = !1, _ = () => (d = !0, v && (v = !1, c ? f = ct(
    /** @type {() => V} */
    n
  ) : f = /** @type {V} */
  n), f);
  i === void 0 && n !== void 0 && (h && l && kn(), i = _(), h && h(i));
  var w;
  if (w = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? _() : (v = !0, d = !1, N);
  }, !(r & un))
    return w;
  if (h) {
    var y = e.$$legacy;
    return function(N, P) {
      return arguments.length > 0 ? ((!P || y || u) && h(P ? w() : N), N) : w();
    };
  }
  var p = !1, k = /* @__PURE__ */ jt(i), C = /* @__PURE__ */ ge(() => {
    var N = w(), P = b(k);
    return p ? (p = !1, P) : k.v = N;
  });
  return s || (C.equals = Bt), function(N, P) {
    if (arguments.length > 0) {
      const g = P ? b(C) : a ? Se(N) : N;
      return C.equals(g) || (p = !0, F(k, g), d && f !== void 0 && (f = g), ct(() => b(C))), N;
    }
    return b(C);
  };
}
function xs(e) {
  return new $s(e);
}
var re, B;
class $s {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    we(this, re);
    /** @type {Record<string, any>} */
    we(this, B);
    var l;
    var r = /* @__PURE__ */ new Map(), n = (a, c) => {
      var u = /* @__PURE__ */ jt(c);
      return r.set(a, u), u;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, c) {
          return b(r.get(c) ?? n(c, Reflect.get(a, c)));
        },
        has(a, c) {
          return c === Dt ? !0 : (b(r.get(c) ?? n(c, Reflect.get(a, c))), Reflect.has(a, c));
        },
        set(a, c, u) {
          return F(r.get(c) ?? n(c, u), u), Reflect.set(a, c, u);
        }
      }
    );
    Be(this, B, (t.hydrate ? as : jr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && x(), Be(this, re, s.$$events);
    for (const a of Object.keys(S(this, B)))
      a === "$set" || a === "$destroy" || a === "$on" || it(this, a, {
        get() {
          return S(this, B)[a];
        },
        /** @param {any} value */
        set(c) {
          S(this, B)[a] = c;
        },
        enumerable: !0
      });
    S(this, B).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, S(this, B).$destroy = () => {
      is(S(this, B));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    S(this, B).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    S(this, re)[t] = S(this, re)[t] || [];
    const n = (...s) => r.call(this, ...s);
    return S(this, re)[t].push(n), () => {
      S(this, re)[t] = S(this, re)[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    S(this, B).$destroy();
  }
}
re = new WeakMap(), B = new WeakMap();
let Gr;
typeof HTMLElement == "function" && (Gr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    W(this, "$$ctor");
    /** Slots */
    W(this, "$$s");
    /** @type {any} The Svelte component instance */
    W(this, "$$c");
    /** Whether or not the custom element is connected */
    W(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    W(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    W(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    W(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    W(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    W(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    W(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const s = this.$$c.$on(t, r);
      this.$$l_u.set(r, s);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const s = this.$$l_u.get(r);
      s && (s(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return (l) => {
          const a = document.createElement("slot");
          s !== "default" && (a.name = s), oe(l, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Es(this);
      for (const s of this.$$s)
        s in n && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), r.default = !0) : r[s] = t(s));
      for (const s of this.attributes) {
        const l = this.$$g_p(s.name);
        l in this.$$d || (this.$$d[l] = nt(l, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = xs({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Qn(() => {
        Vt(() => {
          var s;
          this.$$r = !0;
          for (const l of at(this.$$c)) {
            if (!((s = this.$$p_d[l]) != null && s.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const a = nt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, a);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const l of this.$$l[s]) {
          const a = this.$$c.$on(s, l);
          this.$$l_u.set(l, a);
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
  attributeChangedCallback(t, r, n) {
    var s;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = nt(t, n, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
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
    return at(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function nt(e, t, r, n) {
  var l;
  const s = (l = r[e]) == null ? void 0 : l.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (s) {
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
    switch (s) {
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
function Es(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function He(e, t, r, n, s, l) {
  let a = class extends Gr {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return at(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return at(t).forEach((c) => {
    it(a.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(u) {
        var h;
        u = nt(c, u, t), this.$$d[c] = u;
        var i = this.$$c;
        if (i) {
          var o = (h = ie(i, c)) == null ? void 0 : h.get;
          o ? i[c] = u : i.$set({ [c]: u });
        }
      }
    });
  }), n.forEach((c) => {
    it(a.prototype, c, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[c];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function cr(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Ts(e) {
  return e;
}
function As(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function It(e, t) {
  if (e === t || e !== e) return () => e;
  const r = typeof e;
  if (r !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const n = (
      /** @type {Array<any>} */
      t.map((s, l) => It(
        /** @type {Array<any>} */
        e[l],
        s
      ))
    );
    return (s) => n.map((l) => l(s));
  }
  if (r === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (cr(e) && cr(t)) {
      const l = e.getTime(), c = t.getTime() - l;
      return (u) => new Date(l + u * c);
    }
    const n = Object.keys(t), s = {};
    return n.forEach((l) => {
      s[l] = It(e[l], t[l]);
    }), (l) => {
      const a = {};
      return n.forEach((c) => {
        a[c] = s[c](l);
      }), a;
    };
  }
  if (r === "number") {
    const n = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (s) => e + s * n;
  }
  return () => t;
}
var ne, Ie, We, me;
const Zt = class Zt {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, r = {}) {
    we(this, ne, D(
      /** @type {T} */
      void 0
    ));
    we(this, Ie, D(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    we(this, We);
    /** @type {import('../internal/client/types').Task | null} */
    we(this, me, null);
    S(this, ne).v = S(this, Ie).v = t, Be(this, We, r);
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
    const n = new Zt(t(), r);
    return Vt(() => {
      n.set(t());
    }), n;
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
    var h;
    F(S(this, Ie), t);
    let {
      delay: n = 0,
      duration: s = 400,
      easing: l = Ts,
      interpolate: a = It
    } = { ...S(this, We), ...r };
    if (s === 0)
      return (h = S(this, me)) == null || h.abort(), F(S(this, ne), t), Promise.resolve();
    const c = X.now() + n;
    let u, i = !1, o = S(this, me);
    return Be(this, me, Kr((f) => {
      if (f < c)
        return !0;
      if (!i) {
        i = !0;
        const d = S(this, ne).v;
        u = a(d, t), typeof s == "function" && (s = s(d, t)), o == null || o.abort();
      }
      const v = f - c;
      return v > /** @type {number} */
      s ? (F(S(this, ne), t), !1) : (F(S(this, ne), u(l(v / /** @type {number} */
      s))), !0);
    })), S(this, me).promise;
  }
  get current() {
    return b(S(this, ne));
  }
  get target() {
    return b(S(this, Ie));
  }
  set target(t) {
    this.set(t);
  }
};
ne = new WeakMap(), Ie = new WeakMap(), We = new WeakMap(), me = new WeakMap();
let ke = Zt;
const Ls = (e) => e;
function Ss(e, { delay: t = 0, duration: r = 400, easing: n = Ls } = {}) {
  const s = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (l) => `opacity: ${l * s}`
  };
}
var ks = /* @__PURE__ */ Gt('<g><text class="hexlabels__text svelte-fyaz0o"> </text></g>'), Ns = /* @__PURE__ */ Gt('<g class="hexlabels"></g>');
const Cs = {
  hash: "svelte-fyaz0o",
  code: ".hexlabels__text.svelte-fyaz0o {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:6px;font-family:sans-serif;text-anchor:middle;}"
};
function Xr(e, t) {
  $e(t, !0), Xe(e, Cs);
  let r = $(t, "hexes", 7), n = $(t, "labelsToShow", 23, () => ({})), s = $(t, "showAll", 7, !1), l = $(t, "showElectorateLabels", 7, !1), a = /* @__PURE__ */ ge(() => l() ? r() : r().filter(({ code: u }) => n()[u]));
  var c = Ns();
  return Jt(c, 21, () => b(a), Xt, (u, i) => {
    let o = () => b(i).coordPx, h = () => b(i).code;
    var f = ks(), v = le(f), d = le(v, !0);
    j(v), j(f), yt(
      (_) => {
        Qt(f, "transform", _), Br(d, h());
      },
      [
        () => `translate(${o().join(" ")})`
      ]
    ), oe(u, f);
  }), j(c), oe(e, c), Ee({
    get hexes() {
      return r();
    },
    set hexes(u) {
      r(u), x();
    },
    get labelsToShow() {
      return n();
    },
    set labelsToShow(u = {}) {
      n(u), x();
    },
    get showAll() {
      return s();
    },
    set showAll(u = !1) {
      s(u), x();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(u = !1) {
      l(u), x();
    }
  });
}
He(
  Xr,
  {
    hexes: {},
    labelsToShow: {},
    showAll: {},
    showElectorateLabels: {}
  },
  [],
  [],
  !0
);
var Os = /* @__PURE__ */ Gt('<g class="group svelte-1mzshp9"><g class="group-hexes svelte-1mzshp9"><!></g><!><g class="group-hex-strokes svelte-1mzshp9"><!></g><g class="group-outline svelte-1mzshp9"><!></g></g>');
const Ps = {
  hash: "svelte-1mzshp9",
  code: '.group.svelte-1mzshp9 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--hidden.svelte-1mzshp9 {opacity:0;}.group.svelte-1mzshp9 .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-1mzshp9 .hex-outline {fill:none;stroke:var(--c-black);stroke-width:2px;transition:opacity 0.5s, stroke 0.2s;vector-effect:non-scaling-stroke;}.group--map-is-filled.svelte-1mzshp9 .hex-outline {opacity:0;stroke:white;}.group-hexes.svelte-1mzshp9 .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="NXT"] {fill:var(--a-NXT);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--c-lightgrey);}.group-hex-strokes.svelte-1mzshp9 .hex {fill:none;stroke:var(--c-empty-border);stroke-width:1px;}.group--has-focuses.svelte-1mzshp9 .hex-outline {opacity:0;stroke:white;}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.2;}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}'
};
function Jr(e, t) {
  $e(t, !0), Xe(e, Ps);
  let r = $(t, "name", 7, ""), n = $(t, "svgHexes", 7, ""), s = $(t, "hexes", 23, () => []), l = $(t, "svgOutline", 7, ""), a = $(t, "offset", 23, () => [1 / 0, 1 / 0]), c = $(t, "isFilled", 7, !1), u = $(t, "focuses", 7), i = $(t, "hasAnyFocuses", 7, !1), o = $(t, "labelsToShow", 23, () => ({})), h = $(t, "showElectorateLabels", 7), f = $(t, "showFocusedElectorateLabels", 7);
  const v = 16;
  function d(m = [0, 0]) {
    const qe = m[0] * (v * Math.sqrt(3)), mt = m[1] * 1.5 * v;
    return [qe, mt].map((xt) => `${Math.round(xt)}px`);
  }
  let _ = yr(""), w = /* @__PURE__ */ ge(() => a()[0] !== 1 / 0);
  kt(() => {
    b(w) && F(_, `translate(${d(a()).join(",")})`);
  });
  let y = /* @__PURE__ */ ge(() => i() && f() ? (console.log("showing focusetd electoraotsts", u()), u()) : o());
  var p = Os(), k = le(p), C = le(k);
  $t(C, n), j(k);
  var O = et(k);
  {
    var N = (m) => {
      Xr(m, {
        get hexes() {
          return s();
        },
        get labelsToShow() {
          return b(y);
        },
        get showElectorateLabels() {
          return h();
        }
      });
    };
    Ur(O, (m) => {
      b(w) && m(N);
    });
  }
  var P = et(O), g = le(P);
  $t(g, n), j(P);
  var I = et(P), Te = le(I);
  return $t(Te, l), j(I), j(p), yt(() => {
    Qt(p, "data-name", r()), Et(p, "group--hidden", !b(w)), Et(p, "group--map-is-filled", c()), Et(p, "group--has-focuses", i()), je(p, "transform", b(_));
  }), oe(e, p), Ee({
    get name() {
      return r();
    },
    set name(m = "") {
      r(m), x();
    },
    get svgHexes() {
      return n();
    },
    set svgHexes(m = "") {
      n(m), x();
    },
    get hexes() {
      return s();
    },
    set hexes(m = []) {
      s(m), x();
    },
    get svgOutline() {
      return l();
    },
    set svgOutline(m = "") {
      l(m), x();
    },
    get offset() {
      return a();
    },
    set offset(m = [1 / 0, 1 / 0]) {
      a(m), x();
    },
    get isFilled() {
      return c();
    },
    set isFilled(m = !1) {
      c(m), x();
    },
    get focuses() {
      return u();
    },
    set focuses(m) {
      u(m), x();
    },
    get hasAnyFocuses() {
      return i();
    },
    set hasAnyFocuses(m = !1) {
      i(m), x();
    },
    get labelsToShow() {
      return o();
    },
    set labelsToShow(m = {}) {
      o(m), x();
    },
    get showElectorateLabels() {
      return h();
    },
    set showElectorateLabels(m) {
      h(m), x();
    },
    get showFocusedElectorateLabels() {
      return f();
    },
    set showFocusedElectorateLabels(m) {
      f(m), x();
    }
  });
}
He(
  Jr,
  {
    name: {},
    svgHexes: {},
    hexes: {},
    svgOutline: {},
    offset: {},
    isFilled: {},
    focuses: {},
    hasAnyFocuses: {},
    labelsToShow: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {}
  },
  [],
  [],
  !0
);
var Is = /* @__PURE__ */ bt('<div class="label svelte-lh1lcp"> </div>'), Fs = /* @__PURE__ */ bt('<div class="labels svelte-lh1lcp" aria-hidden="true"></div>');
const Rs = {
  hash: "svelte-lh1lcp",
  code: '.labels.svelte-lh1lcp {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;}.label.svelte-lh1lcp {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px white;paint-order:stroke fill;}'
};
function Qr(e, t) {
  $e(t, !0), Xe(e, Rs);
  let r = $(t, "labels", 7);
  var n = Fs();
  return Jt(n, 21, r, Xt, (s, l) => {
    var a = ls(), c = Mn(a);
    os(c, () => b(l), (u) => {
      var i = Is(), o = le(i, !0);
      j(i), yt(
        (h) => {
          je(i, "left", b(l).left + "%"), je(i, "top", b(l).top + "%"), je(i, "width", b(l).width + "%"), je(i, "margin-left", h), Br(o, b(l).name);
        },
        [
          () => Math.round(0 - b(l).width / 2) + "%"
        ]
      ), ps(3, i, () => Ss, () => ({ duration: 1e3 })), oe(u, i);
    }), oe(s, a);
  }), j(n), oe(e, n), Ee({
    get labels() {
      return r();
    },
    set labels(s) {
      r(s), x();
    }
  });
}
He(Qr, { labels: {} }, [], [], !0);
var zs = ({ target: e, clientX: t, clientY: r }, n) => {
  var l;
  const s = (l = e == null ? void 0 : e.dataset) == null ? void 0 : l.code;
  !s || !n() || n()({ code: s, clientX: t, clientY: r });
}, Ds = /* @__PURE__ */ bt('<div class="hexmap svelte-emh312"><svg></svg> <!></div>');
const Ms = {
  hash: "svelte-emh312",
  code: ".hexmap.svelte-emh312 {position:relative;}"
};
function Zr(e, t) {
  $e(t, !0), Xe(e, Ms);
  let r = $(t, "config", 23, () => ({})), n = $(t, "layout", 23, () => ({})), s = $(t, "allocations", 23, () => ({})), l = $(t, "focuses", 23, () => ({})), a = $(t, "labelsToShow", 23, () => ({})), c = $(t, "showStateLabels", 7, !1), u = $(t, "showElectorateLabels", 7, !1), i = $(t, "showFocusedElectorateLabels", 7, !1), o = $(t, "onClick", 7, () => {
  }), h = yr(void 0), f = /* @__PURE__ */ ge(() => Object.values(l()).some(Boolean)), v = /* @__PURE__ */ ge(() => {
    const g = Object.values(s());
    return g.length !== 0 && g.every(Boolean);
  });
  const d = n().viewbox, _ = { easing: As, duration: 1100 };
  let w = new ke(d[0], _), y = new ke(d[1], _), p = new ke(d[2], _), k = new ke(d[3], _);
  kt(() => {
    const [g, I, Te, m] = n().viewbox;
    w.set(g), y.set(I), p.set(Te), k.set(m);
  }), kt(() => {
    const g = s(), I = l();
    if (!b(h))
      return;
    b(h).querySelectorAll("polygon.hex").forEach((m) => {
      if (!(m instanceof SVGPolygonElement))
        return;
      const qe = m.dataset.code;
      if (!qe)
        return;
      const mt = g[qe] || null;
      m.dataset.allocation = mt;
      const xt = b(f) ? I[qe] || !1 : !0;
      m.dataset.focused = xt;
    });
  });
  var C = Ds();
  C.__click = [zs, o];
  var O = le(C);
  Jt(O, 21, () => r().groups, Xt, (g, I) => {
    Jr(g, ms(() => b(I), {
      get offset() {
        return n().positions[b(I).name];
      },
      get isFilled() {
        return b(v);
      },
      get focuses() {
        return l();
      },
      get hasAnyFocuses() {
        return b(f);
      },
      get showElectorateLabels() {
        return u();
      },
      get showFocusedElectorateLabels() {
        return i();
      },
      get labelsToShow() {
        return a();
      }
    }));
  }), j(O), ws(O, (g) => F(h, g), () => b(h));
  var N = et(O, 2);
  {
    var P = (g) => {
      Qr(g, {
        get labels() {
          return n().labels;
        }
      });
    };
    Ur(N, (g) => {
      c() && g(P);
    });
  }
  return j(C), yt((g) => Qt(O, "viewBox", g), [
    () => [
      w.current,
      y.current,
      p.current,
      k.current
    ].join(" ")
  ]), oe(e, C), Ee({
    get config() {
      return r();
    },
    set config(g = {}) {
      r(g), x();
    },
    get layout() {
      return n();
    },
    set layout(g = {}) {
      n(g), x();
    },
    get allocations() {
      return s();
    },
    set allocations(g = {}) {
      s(g), x();
    },
    get focuses() {
      return l();
    },
    set focuses(g = {}) {
      l(g), x();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(g = {}) {
      a(g), x();
    },
    get showStateLabels() {
      return c();
    },
    set showStateLabels(g = !1) {
      c(g), x();
    },
    get showElectorateLabels() {
      return u();
    },
    set showElectorateLabels(g = !1) {
      u(g), x();
    },
    get showFocusedElectorateLabels() {
      return i();
    },
    set showFocusedElectorateLabels(g = !1) {
      i(g), x();
    },
    get onClick() {
      return o();
    },
    set onClick(g = () => {
    }) {
      o(g), x();
    }
  });
}
ss(["click"]);
He(
  Zr,
  {
    config: {},
    layout: {},
    allocations: {},
    focuses: {},
    labelsToShow: {},
    showStateLabels: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    onClick: {}
  },
  [],
  [],
  !0
);
var Hs = /* @__PURE__ */ bt('<div class="style-root svelte-1y00iv0"><!></div>');
const qs = {
  hash: "svelte-1y00iv0",
  code: ".style-root.svelte-1y00iv0 * {box-sizing:border-box;}.style-root.svelte-1y00iv0 {font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-null: var(--c-white);--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-NXT: var(--c-pty-xxxxxx);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--c-empty-border: #cdcbcb;}"
};
function en(e, t) {
  $e(t, !0), Xe(e, qs);
  let r = $(t, "allocations", 23, () => ({})), n = $(t, "children", 7);
  var s = Hs(), l = le(s);
  return hs(l, () => n() ?? ye), j(s), oe(e, s), Ee({
    get allocations() {
      return r();
    },
    set allocations(a = {}) {
      r(a), x();
    },
    get children() {
      return n();
    },
    set children(a) {
      n(a), x();
    }
  });
}
He(en, { allocations: {}, children: {} }, [], [], !0);
const Bs = { viewbox: [-50, 0, 480, 500], positions: { ACT: [9, 10], NSW: [4, 6], NT: [2.5, 5], QLD: [5, 0], SA: [2, 6], TAS: [7, 16.75, !0], VIC: [4, 10], WA: [0, 6] }, labels: [{ left: 30, top: 27, width: 8, name: "NT" }, { left: 68, top: 17, width: 8, name: "QLD" }, { left: 64, top: 40, width: 8, name: "NSW" }, { left: 71, top: 55.5, width: 8, name: "ACT" }, { left: 59, top: 65, width: 8, name: "VIC" }, { left: 59, top: 85.5, width: 8, name: "TAS" }, { left: 30, top: 46, width: 8, name: "SA" }, { left: 19, top: 46, width: 8, name: "WA" }] }, js = {
  COUNTRY: Bs
};
function Ys(e, t) {
  $e(t, !0);
  let r = $(t, "allocations", 23, () => ({})), n = $(t, "showStateLabels", 7, !1), s = $(t, "showElectorateLabels", 7, !1), l = $(t, "onClick", 7, () => {
  });
  return en(e, {
    children: (a, c) => {
      Zr(a, {
        get layout() {
          return js.COUNTRY;
        },
        get allocations() {
          return r();
        },
        focuses: {},
        get showStateLabels() {
          return n();
        },
        get showElectorateLabels() {
          return s();
        },
        get onClick() {
          return l();
        }
      });
    },
    $$slots: { default: !0 }
  }), Ee({
    get allocations() {
      return r();
    },
    set allocations(a = {}) {
      r(a), x();
    },
    get showStateLabels() {
      return n();
    },
    set showStateLabels(a = !1) {
      n(a), x();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(a = !1) {
      s(a), x();
    },
    get onClick() {
      return l();
    },
    set onClick(a = () => {
    }) {
      l(a), x();
    }
  });
}
customElements.define("abcnews-hexmap", He(
  Ys,
  {
    allocations: {},
    showStateLabels: {},
    showElectorateLabels: {},
    onClick: {}
  },
  [],
  [],
  !0
));
export {
  Ys as default
};
