var Gn = Object.defineProperty;
var Qa = (t) => {
  throw TypeError(t);
};
var xn = (t, e, a) => e in t ? Gn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var pt = (t, e, a) => xn(t, typeof e != "symbol" ? e + "" : e, a), Ka = (t, e, a) => e.has(t) || Qa("Cannot " + a);
var U = (t, e, a) => (Ka(t, e, "read from private field"), a ? a.call(t) : e.get(t)), Wt = (t, e, a) => e.has(t) ? Qa("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), ue = (t, e, a, r) => (Ka(t, e, "write to private field"), r ? r.call(t, a) : e.set(t, a), a);
const En = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(En);
const Ta = 1, va = 2, gr = 4, wn = 8, Cn = 16, Un = 1, Hn = 4, _n = 8, Fn = 16, Dn = 4, kn = 1, Mn = 2, fr = "[", Ra = "[!", Sa = "]", ne = {}, W = Symbol(), ja = !1, yt = 2, Nr = 4, $e = 8, Qe = 16, St = 32, ce = 64, Ce = 128, rt = 256, Ue = 512, Y = 1024, Ot = 2048, pe = 4096, vt = 8192, Ke = 16384, mr = 32768, Ne = 65536, Wn = 1 << 19, Lr = 1 << 20, oe = Symbol("$state"), Oa = Symbol("legacy props"), Jn = Symbol("");
var Ga = Array.isArray, Yn = Array.prototype.indexOf, xa = Array.from, He = Object.keys, Ve = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, Bn = Object.getOwnPropertyDescriptors, $n = Object.prototype, Qn = Array.prototype, br = Object.getPrototypeOf;
function ae(t) {
  return typeof t == "function";
}
const M = () => {
};
function Tr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let Ie = [], ca = [];
function vr() {
  var t = Ie;
  Ie = [], Tr(t);
}
function Kn() {
  var t = ca;
  ca = [], Tr(t);
}
function me(t) {
  Ie.length === 0 && queueMicrotask(vr), Ie.push(t);
}
function za() {
  Ie.length > 0 && vr(), ca.length > 0 && Kn();
}
function Rr(t) {
  return t === this.v;
}
function Sr(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function jn(t, e) {
  return t !== e;
}
function Ea(t) {
  return !Sr(t, this.v);
}
function zn(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xn(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function t2() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function e2(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function a2() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function r2() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function n2() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function o2() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let l2 = !1;
function B(t, e) {
  var a = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Rr,
    rv: 0,
    wv: 0
  };
  return a;
}
function Ut(t) {
  return /* @__PURE__ */ s2(B(t));
}
// @__NO_SIDE_EFFECTS__
function je(t, e = !1) {
  const a = B(t);
  return e || (a.equals = Ea), a;
}
// @__NO_SIDE_EFFECTS__
function s2(t) {
  return w !== null && !it && w.f & yt && (Vt === null ? y2([t]) : Vt.push(t)), t;
}
function F(t, e) {
  return w !== null && !it && Qr() && w.f & (yt | Qe) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Vt === null || !Vt.includes(t)) && o2(), pa(t, e);
}
function pa(t, e) {
  return t.equals(e) || (t.v, t.v = e, t.wv = _r(), Or(t, Ot), E !== null && E.f & Y && !(E.f & (St | ce)) && (mt === null ? u2([t]) : mt.push(t))), e;
}
function Or(t, e) {
  var a = t.reactions;
  if (a !== null)
    for (var r = a.length, n = 0; n < r; n++) {
      var o = a[n], l = o.f;
      l & Ot || (ft(o, e), l & (Y | rt) && (l & yt ? Or(
        /** @type {Derived} */
        o,
        pe
      ) : Xe(
        /** @type {Effect} */
        o
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function $(t) {
  var e = yt | Ot, a = w !== null && w.f & yt ? (
    /** @type {Derived} */
    w
  ) : null;
  return E === null || a !== null && a.f & rt ? e |= rt : E.f |= Lr, {
    ctx: Q,
    deps: null,
    effects: null,
    equals: Rr,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: a ?? E
  };
}
// @__NO_SIDE_EFFECTS__
function c2(t) {
  const e = /* @__PURE__ */ $(t);
  return e.equals = Ea, e;
}
function Gr(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var a = 0; a < e.length; a += 1)
      ut(
        /** @type {Effect} */
        e[a]
      );
  }
}
function p2(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & yt))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function i2(t) {
  var e, a = E;
  gt(p2(t));
  try {
    Gr(t), e = Dr(t);
  } finally {
    gt(a);
  }
  return e;
}
function xr(t) {
  var e = i2(t), a = (wt || t.f & rt) && t.deps !== null ? pe : Y;
  ft(t, a), t.equals(e) || (t.v = e, t.wv = _r());
}
function ze(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let G = !1;
function Tt(t) {
  G = t;
}
let x;
function nt(t) {
  if (t === null)
    throw ze(), ne;
  return x = t;
}
function Yt() {
  return nt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(x)
  );
}
function H(t) {
  if (G) {
    if (/* @__PURE__ */ Gt(x) !== null)
      throw ze(), ne;
    x = t;
  }
}
function ia() {
  for (var t = 0, e = x; ; ) {
    if (e.nodeType === 8) {
      var a = (
        /** @type {Comment} */
        e.data
      );
      if (a === Sa) {
        if (t === 0) return e;
        t -= 1;
      } else (a === fr || a === Ra) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(e)
    );
    e.remove(), e = r;
  }
}
function Et(t, e = null, a) {
  if (typeof t != "object" || t === null || oe in t)
    return t;
  const r = br(t);
  if (r !== $n && r !== Qn)
    return t;
  var n = /* @__PURE__ */ new Map(), o = Ga(t), l = B(0);
  o && n.set("length", B(
    /** @type {any[]} */
    t.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, y, i) {
        (!("value" in i) || i.configurable === !1 || i.enumerable === !1 || i.writable === !1) && a2();
        var u = n.get(y);
        return u === void 0 ? (u = B(i.value), n.set(y, u)) : F(u, Et(i.value, s)), !0;
      },
      deleteProperty(c, y) {
        var i = n.get(y);
        if (i === void 0)
          y in c && n.set(y, B(W));
        else {
          if (o && typeof y == "string") {
            var u = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(y);
            Number.isInteger(p) && p < u.v && F(u, p);
          }
          F(i, W), qa(l);
        }
        return !0;
      },
      get(c, y, i) {
        var P;
        if (y === oe)
          return t;
        var u = n.get(y), p = y in c;
        if (u === void 0 && (!p || (P = Rt(c, y)) != null && P.writable) && (u = B(Et(p ? c[y] : W, s)), n.set(y, u)), u !== void 0) {
          var d = f(u);
          return d === W ? void 0 : d;
        }
        return Reflect.get(c, y, i);
      },
      getOwnPropertyDescriptor(c, y) {
        var i = Reflect.getOwnPropertyDescriptor(c, y);
        if (i && "value" in i) {
          var u = n.get(y);
          u && (i.value = f(u));
        } else if (i === void 0) {
          var p = n.get(y), d = p == null ? void 0 : p.v;
          if (p !== void 0 && d !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return i;
      },
      has(c, y) {
        var d;
        if (y === oe)
          return !0;
        var i = n.get(y), u = i !== void 0 && i.v !== W || Reflect.has(c, y);
        if (i !== void 0 || E !== null && (!u || (d = Rt(c, y)) != null && d.writable)) {
          i === void 0 && (i = B(u ? Et(c[y], s) : W), n.set(y, i));
          var p = f(i);
          if (p === W)
            return !1;
        }
        return u;
      },
      set(c, y, i, u) {
        var A;
        var p = n.get(y), d = y in c;
        if (o && y === "length")
          for (var P = i; P < /** @type {Source<number>} */
          p.v; P += 1) {
            var h = n.get(P + "");
            h !== void 0 ? F(h, W) : P in c && (h = B(W), n.set(P + "", h));
          }
        p === void 0 ? (!d || (A = Rt(c, y)) != null && A.writable) && (p = B(void 0), F(p, Et(i, s)), n.set(y, p)) : (d = p.v !== W, F(p, Et(i, s)));
        var I = Reflect.getOwnPropertyDescriptor(c, y);
        if (I != null && I.set && I.set.call(u, i), !d) {
          if (o && typeof y == "string") {
            var N = (
              /** @type {Source<number>} */
              n.get("length")
            ), V = Number(y);
            Number.isInteger(V) && V >= N.v && F(N, V + 1);
          }
          qa(l);
        }
        return !0;
      },
      ownKeys(c) {
        f(l);
        var y = Reflect.ownKeys(c).filter((p) => {
          var d = n.get(p);
          return d === void 0 || d.v !== W;
        });
        for (var [i, u] of n)
          u.v !== W && !(i in c) && y.push(i);
        return y;
      },
      setPrototypeOf() {
        r2();
      }
    }
  );
}
function qa(t, e = 1) {
  F(t, t.v + e);
}
var Xa, Er, wr, Cr;
function ya() {
  if (Xa === void 0) {
    Xa = window, Er = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype;
    wr = Rt(e, "firstChild").get, Cr = Rt(e, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function se(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function q(t) {
  return wr.call(t);
}
// @__NO_SIDE_EFFECTS__
function Gt(t) {
  return Cr.call(t);
}
function D(t, e) {
  if (!G)
    return /* @__PURE__ */ q(t);
  var a = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ q(x)
  );
  if (a === null)
    a = x.appendChild(se());
  else if (e && a.nodeType !== 3) {
    var r = se();
    return a == null || a.before(r), nt(r), r;
  }
  return nt(a), a;
}
function Bt(t, e) {
  if (!G) {
    var a = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ q(
        /** @type {Node} */
        t
      )
    );
    return a instanceof Comment && a.data === "" ? /* @__PURE__ */ Gt(a) : a;
  }
  return x;
}
function at(t, e = 1, a = !1) {
  let r = G ? x : t;
  for (var n; e--; )
    n = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(r);
  if (!G)
    return r;
  var o = r == null ? void 0 : r.nodeType;
  if (a && o !== 3) {
    var l = se();
    return r === null ? n == null || n.after(l) : r.before(l), nt(l), l;
  }
  return nt(r), /** @type {TemplateNode} */
  r;
}
function Ur(t) {
  t.textContent = "";
}
let xe = !1, _e = !1, Fe = null, Ee = !1, wa = !1;
function Za(t) {
  wa = t;
}
let he = [];
let w = null, it = !1;
function At(t) {
  w = t;
}
let E = null;
function gt(t) {
  E = t;
}
let Vt = null;
function y2(t) {
  Vt = t;
}
let J = null, z = 0, mt = null;
function u2(t) {
  mt = t;
}
let Hr = 1, De = 0, wt = !1;
function _r() {
  return ++Hr;
}
function Le(t) {
  var u;
  var e = t.f;
  if (e & Ot)
    return !0;
  if (e & pe) {
    var a = t.deps, r = (e & rt) !== 0;
    if (a !== null) {
      var n, o, l = (e & Ue) !== 0, s = r && E !== null && !wt, c = a.length;
      if (l || s) {
        var y = (
          /** @type {Derived} */
          t
        ), i = y.parent;
        for (n = 0; n < c; n++)
          o = a[n], (l || !((u = o == null ? void 0 : o.reactions) != null && u.includes(y))) && (o.reactions ?? (o.reactions = [])).push(y);
        l && (y.f ^= Ue), s && i !== null && !(i.f & rt) && (y.f ^= rt);
      }
      for (n = 0; n < c; n++)
        if (o = a[n], Le(
          /** @type {Derived} */
          o
        ) && xr(
          /** @type {Derived} */
          o
        ), o.wv > t.wv)
          return !0;
    }
    (!r || E !== null && !wt) && ft(t, Y);
  }
  return !1;
}
function P2(t, e) {
  for (var a = e; a !== null; ) {
    if (a.f & Ce)
      try {
        a.fn(t);
        return;
      } catch {
        a.f ^= Ce;
      }
    a = a.parent;
  }
  throw xe = !1, t;
}
function d2(t) {
  return (t.f & Ke) === 0 && (t.parent === null || (t.parent.f & Ce) === 0);
}
function qe(t, e, a, r) {
  if (xe) {
    if (a === null && (xe = !1), d2(e))
      throw t;
    return;
  }
  a !== null && (xe = !0);
  {
    P2(t, e);
    return;
  }
}
function Fr(t, e, a = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      o.f & yt ? Fr(
        /** @type {Derived} */
        o,
        e,
        !1
      ) : e === o && (a ? ft(o, Ot) : o.f & Y && ft(o, pe), Xe(
        /** @type {Effect} */
        o
      ));
    }
}
function Dr(t) {
  var d;
  var e = J, a = z, r = mt, n = w, o = wt, l = Vt, s = Q, c = it, y = t.f;
  J = /** @type {null | Value[]} */
  null, z = 0, mt = null, wt = (y & rt) !== 0 && (it || !Ee || w === null), w = y & (St | ce) ? null : t, Vt = null, tr(t.ctx), it = !1, De++;
  try {
    var i = (
      /** @type {Function} */
      (0, t.fn)()
    ), u = t.deps;
    if (J !== null) {
      var p;
      if (ke(t, z), u !== null && z > 0)
        for (u.length = z + J.length, p = 0; p < J.length; p++)
          u[z + p] = J[p];
      else
        t.deps = u = J;
      if (!wt)
        for (p = z; p < u.length; p++)
          ((d = u[p]).reactions ?? (d.reactions = [])).push(t);
    } else u !== null && z < u.length && (ke(t, z), u.length = z);
    if (Qr() && mt !== null && !it && u !== null && !(t.f & (yt | pe | Ot)))
      for (p = 0; p < /** @type {Source[]} */
      mt.length; p++)
        Fr(
          mt[p],
          /** @type {Effect} */
          t
        );
    return n !== null && De++, i;
  } finally {
    J = e, z = a, mt = r, w = n, wt = o, Vt = l, tr(s), it = c;
  }
}
function h2(t, e) {
  let a = e.reactions;
  if (a !== null) {
    var r = Yn.call(a, t);
    if (r !== -1) {
      var n = a.length - 1;
      n === 0 ? a = e.reactions = null : (a[r] = a[n], a.pop());
    }
  }
  a === null && e.f & yt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (J === null || !J.includes(e)) && (ft(e, pe), e.f & (rt | Ue) || (e.f ^= Ue), Gr(
    /** @type {Derived} **/
    e
  ), ke(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ke(t, e) {
  var a = t.deps;
  if (a !== null)
    for (var r = e; r < a.length; r++)
      h2(t, a[r]);
}
function Ca(t) {
  var e = t.f;
  if (!(e & Ke)) {
    ft(t, Y);
    var a = E, r = Q, n = Ee;
    E = t, Ee = !0;
    try {
      e & Qe ? b2(t) : Jr(t), Wr(t);
      var o = Dr(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = Hr;
      var l = t.deps, s;
      ja && l2 && t.f & Ot;
    } catch (c) {
      qe(c, t, a, r || t.ctx);
    } finally {
      Ee = n, E = a;
    }
  }
}
function V2() {
  try {
    Zn();
  } catch (t) {
    if (Fe !== null)
      qe(t, Fe, null);
    else
      throw t;
  }
}
function kr() {
  try {
    for (var t = 0; he.length > 0; ) {
      t++ > 1e3 && V2();
      var e = he, a = e.length;
      he = [];
      for (var r = 0; r < a; r++) {
        var n = e[r];
        n.f & Y || (n.f ^= Y);
        var o = A2(n);
        I2(o);
      }
    }
  } finally {
    _e = !1, Fe = null;
  }
}
function I2(t) {
  var e = t.length;
  if (e !== 0)
    for (var a = 0; a < e; a++) {
      var r = t[a];
      if (!(r.f & (Ke | vt)))
        try {
          Le(r) && (Ca(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Yr(r) : r.fn = null));
        } catch (n) {
          qe(n, r, null, r.ctx);
        }
    }
}
function Xe(t) {
  _e || (_e = !0, queueMicrotask(kr));
  for (var e = Fe = t; e.parent !== null; ) {
    e = e.parent;
    var a = e.f;
    if (a & (ce | St)) {
      if (!(a & Y)) return;
      e.f ^= Y;
    }
  }
  he.push(e);
}
function A2(t) {
  var e = [], a = t.first;
  t: for (; a !== null; ) {
    var r = a.f, n = (r & St) !== 0, o = n && (r & Y) !== 0, l = a.next;
    if (!o && !(r & vt)) {
      if (r & Nr)
        e.push(a);
      else if (n)
        a.f ^= Y;
      else {
        var s = w;
        try {
          w = a, Le(a) && Ca(a);
        } catch (i) {
          qe(i, a, null, a.ctx);
        } finally {
          w = s;
        }
      }
      var c = a.first;
      if (c !== null) {
        a = c;
        continue;
      }
    }
    if (l === null) {
      let i = a.parent;
      for (; i !== null; ) {
        if (t === i)
          break t;
        var y = i.next;
        if (y !== null) {
          a = y;
          continue t;
        }
        i = i.parent;
      }
    }
    a = l;
  }
  return e;
}
function m(t) {
  var e;
  for (za(); he.length > 0; )
    _e = !0, kr(), za();
  return (
    /** @type {T} */
    e
  );
}
function f(t) {
  var e = t.f, a = (e & yt) !== 0;
  if (w !== null && !it) {
    Vt !== null && Vt.includes(t) && n2();
    var r = w.deps;
    t.rv < De && (t.rv = De, J === null && r !== null && r[z] === t ? z++ : J === null ? J = [t] : (!wt || !J.includes(t)) && J.push(t));
  } else if (a && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var n = (
      /** @type {Derived} */
      t
    ), o = n.parent;
    o !== null && !(o.f & rt) && (n.f ^= rt);
  }
  return a && (n = /** @type {Derived} */
  t, Le(n) && xr(n)), t.v;
}
function Dt(t) {
  var e = it;
  try {
    return it = !0, t();
  } finally {
    it = e;
  }
}
const g2 = -7169;
function ft(t, e) {
  t.f = t.f & g2 | e;
}
function f2(t) {
  E === null && w === null && Xn(), w !== null && w.f & rt && E === null && qn(), wa && zn();
}
function N2(t, e) {
  var a = e.last;
  a === null ? e.last = e.first = t : (a.next = t, t.prev = a, e.last = t);
}
function jt(t, e, a, r = !0) {
  var n = (t & ce) !== 0, o = E, l = {
    ctx: Q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Ot,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n ? null : o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (a)
    try {
      Ca(l), l.f |= mr;
    } catch (y) {
      throw ut(l), y;
    }
  else e !== null && Xe(l);
  var s = a && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (Lr | Ce)) === 0;
  if (!s && !n && r && (o !== null && N2(l, o), w !== null && w.f & yt)) {
    var c = (
      /** @type {Derived} */
      w
    );
    (c.effects ?? (c.effects = [])).push(l);
  }
  return l;
}
function Mr(t) {
  const e = jt($e, null, !1);
  return ft(e, Y), e.teardown = t, e;
}
function Ht(t) {
  f2();
  var e = E !== null && (E.f & St) !== 0 && Q !== null && !Q.m;
  if (e) {
    var a = (
      /** @type {ComponentContext} */
      Q
    );
    (a.e ?? (a.e = [])).push({
      fn: t,
      effect: E,
      reaction: w
    });
  } else {
    var r = Ze(t);
    return r;
  }
}
function m2(t) {
  const e = jt(ce, t, !0);
  return () => {
    ut(e);
  };
}
function L2(t) {
  const e = jt(ce, t, !0);
  return (a = {}) => new Promise((r) => {
    a.outro ? Ae(e, () => {
      ut(e), r(void 0);
    }) : (ut(e), r(void 0));
  });
}
function Ze(t) {
  return jt(Nr, t, !1);
}
function Ua(t) {
  return jt($e, t, !0);
}
function Nt(t, e = [], a = $) {
  const r = e.map(a);
  return ie(() => t(...r.map(f)));
}
function ie(t, e = 0) {
  return jt($e | Qe | e, t, !0);
}
function kt(t, e = !0) {
  return jt($e | St, t, !0, e);
}
function Wr(t) {
  var e = t.teardown;
  if (e !== null) {
    const a = wa, r = w;
    Za(!0), At(null);
    try {
      e.call(null);
    } finally {
      Za(a), At(r);
    }
  }
}
function Jr(t, e = !1) {
  var a = t.first;
  for (t.first = t.last = null; a !== null; ) {
    var r = a.next;
    ut(a, e), a = r;
  }
}
function b2(t) {
  for (var e = t.first; e !== null; ) {
    var a = e.next;
    e.f & St || ut(e), e = a;
  }
}
function ut(t, e = !0) {
  var a = !1;
  if ((e || t.f & Wn) && t.nodes_start !== null) {
    for (var r = t.nodes_start, n = t.nodes_end; r !== null; ) {
      var o = r === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gt(r)
      );
      r.remove(), r = o;
    }
    a = !0;
  }
  Jr(t, e && !a), ke(t, 0), ft(t, Ke);
  var l = t.transitions;
  if (l !== null)
    for (const c of l)
      c.stop();
  Wr(t);
  var s = t.parent;
  s !== null && s.first !== null && Yr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function Yr(t) {
  var e = t.parent, a = t.prev, r = t.next;
  a !== null && (a.next = r), r !== null && (r.prev = a), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = a));
}
function Ae(t, e) {
  var a = [];
  Ha(t, a, !0), Br(a, () => {
    ut(t), e && e();
  });
}
function Br(t, e) {
  var a = t.length;
  if (a > 0) {
    var r = () => --a || e();
    for (var n of t)
      n.out(r);
  } else
    e();
}
function Ha(t, e, a) {
  if (!(t.f & vt)) {
    if (t.f ^= vt, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || a) && e.push(l);
    for (var r = t.first; r !== null; ) {
      var n = r.next, o = (r.f & Ne) !== 0 || (r.f & St) !== 0;
      Ha(r, e, o ? a : !1), r = n;
    }
  }
}
function Me(t) {
  $r(t, !0);
}
function $r(t, e) {
  if (t.f & vt) {
    t.f ^= vt, t.f & Y || (t.f ^= Y), Le(t) && (ft(t, Ot), Xe(t));
    for (var a = t.first; a !== null; ) {
      var r = a.next, n = (a.f & Ne) !== 0 || (a.f & St) !== 0;
      $r(a, n ? e : !1), a = r;
    }
    if (t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || e) && o.in();
  }
}
function T2(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Q = null;
function tr(t) {
  Q = t;
}
function ot(t, e = !1, a) {
  Q = {
    p: Q,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function lt(t) {
  const e = Q;
  if (e !== null) {
    t !== void 0 && (e.x = t);
    const l = e.e;
    if (l !== null) {
      var a = E, r = w;
      e.e = null;
      try {
        for (var n = 0; n < l.length; n++) {
          var o = l[n];
          gt(o.effect), At(o.reaction), Ze(o.fn);
        }
      } finally {
        gt(a), At(r);
      }
    }
    Q = e.p, e.m = !0;
  }
  return t || /** @type {T} */
  {};
}
function Qr() {
  return !0;
}
const v2 = ["touchstart", "touchmove"];
function R2(t) {
  return v2.includes(t);
}
function Kr(t) {
  var e = w, a = E;
  At(null), gt(null);
  try {
    return t();
  } finally {
    At(e), gt(a);
  }
}
const jr = /* @__PURE__ */ new Set(), ua = /* @__PURE__ */ new Set();
function S2(t, e, a, r = {}) {
  function n(o) {
    if (r.capture || de.call(e, o), !o.cancelBubble)
      return Kr(() => a == null ? void 0 : a.call(this, o));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? me(() => {
    e.addEventListener(t, n, r);
  }) : e.addEventListener(t, n, r), n;
}
function O2(t, e, a, r, n) {
  var o = { capture: r, passive: n }, l = S2(t, e, a, o);
  (e === document.body || e === window || e === document) && Mr(() => {
    e.removeEventListener(t, l, o);
  });
}
function zr(t) {
  for (var e = 0; e < t.length; e++)
    jr.add(t[e]);
  for (var a of ua)
    a(t);
}
function de(t) {
  var V;
  var e = this, a = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, n = ((V = t.composedPath) == null ? void 0 : V.call(t)) || [], o = (
    /** @type {null | Element} */
    n[0] || t.target
  ), l = 0, s = t.__root;
  if (s) {
    var c = n.indexOf(s);
    if (c !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var y = n.indexOf(e);
    if (y === -1)
      return;
    c <= y && (l = c);
  }
  if (o = /** @type {Element} */
  n[l] || t.target, o !== e) {
    Ve(t, "currentTarget", {
      configurable: !0,
      get() {
        return o || a;
      }
    });
    var i = w, u = E;
    At(null), gt(null);
    try {
      for (var p, d = []; o !== null; ) {
        var P = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var h = o["__" + r];
          if (h !== void 0 && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === o))
            if (Ga(h)) {
              var [I, ...N] = h;
              I.apply(o, [t, ...N]);
            } else
              h.call(o, t);
        } catch (A) {
          p ? d.push(A) : p = A;
        }
        if (t.cancelBubble || P === e || P === null)
          break;
        o = P;
      }
      if (p) {
        for (let A of d)
          queueMicrotask(() => {
            throw A;
          });
        throw p;
      }
    } finally {
      t.__root = e, delete t.currentTarget, At(i), gt(u);
    }
  }
}
function _a(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function It(t, e) {
  var a = (
    /** @type {Effect} */
    E
  );
  a.nodes_start === null && (a.nodes_start = t, a.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function X(t, e) {
  var a = (e & kn) !== 0, r = (e & Mn) !== 0, n, o = !t.startsWith("<!>");
  return () => {
    if (G)
      return It(x, null), x;
    n === void 0 && (n = _a(o ? t : "<!>" + t), a || (n = /** @type {Node} */
    /* @__PURE__ */ q(n)));
    var l = (
      /** @type {TemplateNode} */
      r || Er ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (a) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ q(l)
      ), c = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      It(s, c);
    } else
      It(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function ye(t, e, a = "svg") {
  var r = !t.startsWith("<!>"), n = `<${a}>${r ? t : "<!>" + t}</${a}>`, o;
  return () => {
    if (G)
      return It(x, null), x;
    if (!o) {
      var l = (
        /** @type {DocumentFragment} */
        _a(n)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ q(l)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ q(s);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return It(c, c), c;
  };
}
function be() {
  if (G)
    return It(x, null), x;
  var t = document.createDocumentFragment(), e = document.createComment(""), a = se();
  return t.append(e, a), It(e, a), t;
}
function _(t, e) {
  if (G) {
    E.nodes_end = x, Yt();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
let Pa = !0;
function We(t, e) {
  var a = e == null ? "" : typeof e == "object" ? e + "" : e;
  a !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = a, t.nodeValue = a + "");
}
function qr(t, e) {
  return Xr(t, e);
}
function G2(t, e) {
  ya(), e.intro = e.intro ?? !1;
  const a = e.target, r = G, n = x;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ q(a)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== fr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(o);
    if (!o)
      throw ne;
    Tt(!0), nt(
      /** @type {Comment} */
      o
    ), Yt();
    const l = Xr(t, { ...e, anchor: o });
    if (x === null || x.nodeType !== 8 || /** @type {Comment} */
    x.data !== Sa)
      throw ze(), ne;
    return Tt(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === ne)
      return e.recover === !1 && t2(), ya(), Ur(a), Tt(!1), qr(t, e);
    throw l;
  } finally {
    Tt(r), nt(n);
  }
}
const te = /* @__PURE__ */ new Map();
function Xr(t, { target: e, anchor: a, props: r = {}, events: n, context: o, intro: l = !0 }) {
  ya();
  var s = /* @__PURE__ */ new Set(), c = (u) => {
    for (var p = 0; p < u.length; p++) {
      var d = u[p];
      if (!s.has(d)) {
        s.add(d);
        var P = R2(d);
        e.addEventListener(d, de, { passive: P });
        var h = te.get(d);
        h === void 0 ? (document.addEventListener(d, de, { passive: P }), te.set(d, 1)) : te.set(d, h + 1);
      }
    }
  };
  c(xa(jr)), ua.add(c);
  var y = void 0, i = L2(() => {
    var u = a ?? e.appendChild(se());
    return kt(() => {
      if (o) {
        ot({});
        var p = (
          /** @type {ComponentContext} */
          Q
        );
        p.c = o;
      }
      n && (r.$$events = n), G && It(
        /** @type {TemplateNode} */
        u,
        null
      ), Pa = l, y = t(u, r) || {}, Pa = !0, G && (E.nodes_end = x), o && lt();
    }), () => {
      var P;
      for (var p of s) {
        e.removeEventListener(p, de);
        var d = (
          /** @type {number} */
          te.get(p)
        );
        --d === 0 ? (document.removeEventListener(p, de), te.delete(p)) : te.set(p, d);
      }
      ua.delete(c), u !== a && ((P = u.parentNode) == null || P.removeChild(u));
    };
  });
  return da.set(y, i), y;
}
let da = /* @__PURE__ */ new WeakMap();
function x2(t, e) {
  const a = da.get(t);
  return a ? (da.delete(t), a(e)) : Promise.resolve();
}
function _t(t, e, a = !1) {
  G && Yt();
  var r = t, n = null, o = null, l = W, s = a ? Ne : 0, c = !1;
  const y = (u, p = !0) => {
    c = !0, i(p, u);
  }, i = (u, p) => {
    if (l === (l = u)) return;
    let d = !1;
    if (G) {
      const P = (
        /** @type {Comment} */
        r.data === Ra
      );
      !!l === P && (r = ia(), nt(r), Tt(!1), d = !0);
    }
    l ? (n ? Me(n) : p && (n = kt(() => p(r))), o && Ae(o, () => {
      o = null;
    })) : (o ? Me(o) : p && (o = kt(() => p(r))), n && Ae(n, () => {
      n = null;
    })), d && Tt(!0);
  };
  ie(() => {
    c = !1, e(y), c || i(null, null);
  }, s), G && (r = x);
}
function E2(t, e, a) {
  G && Yt();
  var r = t, n = W, o, l = jn;
  ie(() => {
    l(n, n = e()) && (o && Ae(o), o = kt(() => a(r)));
  }), G && (r = x);
}
function $t(t, e) {
  return e;
}
function w2(t, e, a, r) {
  for (var n = [], o = e.length, l = 0; l < o; l++)
    Ha(e[l].e, n, !0);
  var s = o > 0 && n.length === 0 && a !== null;
  if (s) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    Ur(c), c.append(
      /** @type {Element} */
      a
    ), r.clear(), xt(t, e[0].prev, e[o - 1].next);
  }
  Br(n, () => {
    for (var y = 0; y < o; y++) {
      var i = e[y];
      s || (r.delete(i.k), xt(t, i.prev, i.next)), ut(i.e, !s);
    }
  });
}
function Qt(t, e, a, r, n, o = null) {
  var l = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, c = (e & gr) !== 0;
  if (c) {
    var y = (
      /** @type {Element} */
      t
    );
    l = G ? nt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ q(y)
    ) : y.appendChild(se());
  }
  G && Yt();
  var i = null, u = !1, p = /* @__PURE__ */ c2(() => {
    var d = a();
    return Ga(d) ? d : d == null ? [] : xa(d);
  });
  ie(() => {
    var d = f(p), P = d.length;
    if (u && P === 0)
      return;
    u = P === 0;
    let h = !1;
    if (G) {
      var I = (
        /** @type {Comment} */
        l.data === Ra
      );
      I !== (P === 0) && (l = ia(), nt(l), Tt(!1), h = !0);
    }
    if (G) {
      for (var N = null, V, A = 0; A < P; A++) {
        if (x.nodeType === 8 && /** @type {Comment} */
        x.data === Sa) {
          l = /** @type {Comment} */
          x, h = !0, Tt(!1);
          break;
        }
        var g = d[A], T = r(g, A);
        V = Zr(
          x,
          s,
          N,
          null,
          g,
          T,
          A,
          n,
          e,
          a
        ), s.items.set(T, V), N = V;
      }
      P > 0 && nt(ia());
    }
    G || C2(d, s, l, n, e, r, a), o !== null && (P === 0 ? i ? Me(i) : i = kt(() => o(l)) : i !== null && Ae(i, () => {
      i = null;
    })), h && Tt(!0), f(p);
  }), G && (l = x);
}
function C2(t, e, a, r, n, o, l) {
  var qt, O, Te, v;
  var s = (n & wn) !== 0, c = (n & (Ta | va)) !== 0, y = t.length, i = e.items, u = e.first, p = u, d, P = null, h, I = [], N = [], V, A, g, T;
  if (s)
    for (T = 0; T < y; T += 1)
      V = t[T], A = o(V, T), g = i.get(A), g !== void 0 && ((qt = g.a) == null || qt.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(g));
  for (T = 0; T < y; T += 1) {
    if (V = t[T], A = o(V, T), g = i.get(A), g === void 0) {
      var b = p ? (
        /** @type {TemplateNode} */
        p.e.nodes_start
      ) : a;
      P = Zr(
        b,
        e,
        P,
        P === null ? e.first : P.next,
        V,
        A,
        T,
        r,
        n,
        l
      ), i.set(A, P), I = [], N = [], p = P.next;
      continue;
    }
    if (c && U2(g, V, T, n), g.e.f & vt && (Me(g.e), s && ((O = g.a) == null || O.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(g))), g !== p) {
      if (d !== void 0 && d.has(g)) {
        if (I.length < N.length) {
          var R = N[0], S;
          P = R.prev;
          var C = I[0], st = I[I.length - 1];
          for (S = 0; S < I.length; S += 1)
            er(I[S], R, a);
          for (S = 0; S < N.length; S += 1)
            d.delete(N[S]);
          xt(e, C.prev, st.next), xt(e, P, C), xt(e, st, R), p = R, P = st, T -= 1, I = [], N = [];
        } else
          d.delete(g), er(g, p, a), xt(e, g.prev, g.next), xt(e, g, P === null ? e.first : P.next), xt(e, P, g), P = g;
        continue;
      }
      for (I = [], N = []; p !== null && p.k !== A; )
        p.e.f & vt || (d ?? (d = /* @__PURE__ */ new Set())).add(p), N.push(p), p = p.next;
      if (p === null)
        continue;
      g = p;
    }
    I.push(g), P = g, p = g.next;
  }
  if (p !== null || d !== void 0) {
    for (var K = d === void 0 ? [] : xa(d); p !== null; )
      p.e.f & vt || K.push(p), p = p.next;
    var dt = K.length;
    if (dt > 0) {
      var ct = n & gr && y === 0 ? a : null;
      if (s) {
        for (T = 0; T < dt; T += 1)
          (Te = K[T].a) == null || Te.measure();
        for (T = 0; T < dt; T += 1)
          (v = K[T].a) == null || v.fix();
      }
      w2(e, K, ct, i);
    }
  }
  s && me(() => {
    var Z;
    if (h !== void 0)
      for (g of h)
        (Z = g.a) == null || Z.apply();
  }), E.first = e.first && e.first.e, E.last = P && P.e;
}
function U2(t, e, a, r) {
  r & Ta && pa(t.v, e), r & va ? pa(
    /** @type {Value<number>} */
    t.i,
    a
  ) : t.i = a;
}
function Zr(t, e, a, r, n, o, l, s, c, y) {
  var i = (c & Ta) !== 0, u = (c & Cn) === 0, p = i ? u ? /* @__PURE__ */ je(n) : B(n) : n, d = c & va ? B(l) : l, P = {
    i: d,
    v: p,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: a,
    next: r
  };
  try {
    return P.e = kt(() => s(t, p, d, y), G), P.e.prev = a && a.e, P.e.next = r && r.e, a === null ? e.first = P : (a.next = P, a.e.next = P.e), r !== null && (r.prev = P, r.e.prev = P.e), P;
  } finally {
  }
}
function er(t, e, a) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : a, n = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : a, o = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); o !== r; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Gt(o)
    );
    n.before(o), o = l;
  }
}
function xt(t, e, a) {
  e === null ? t.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function Se(t, e, a, r, n) {
  var o = t, l = "", s;
  ie(() => {
    if (l === (l = e() ?? "")) {
      G && Yt();
      return;
    }
    s !== void 0 && (ut(s), s = void 0), l !== "" && (s = kt(() => {
      if (G) {
        x.data;
        for (var c = Yt(), y = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          y = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Gt(c);
        if (c === null)
          throw ze(), ne;
        It(x, y), o = nt(c);
        return;
      }
      var i = l + "";
      i = `<svg>${i}</svg>`;
      var u = _a(i);
      for (u = /** @type {Element} */
      /* @__PURE__ */ q(u), It(
        /** @type {TemplateNode} */
        /* @__PURE__ */ q(u),
        /** @type {TemplateNode} */
        u.lastChild
      ); /* @__PURE__ */ q(u); )
        o.before(
          /** @type {Node} */
          /* @__PURE__ */ q(u)
        );
    }));
  });
}
function Je(t, e, ...a) {
  var r = t, n = M, o;
  ie(() => {
    n !== (n = e()) && (o && (ut(o), o = null), o = kt(() => (
      /** @type {SnippetFn} */
      n(r, ...a)
    )));
  }, Ne), G && (r = x);
}
function zt(t, e) {
  me(() => {
    var a = t.getRootNode(), r = (
      /** @type {ShadowRoot} */
      a.host ? (
        /** @type {ShadowRoot} */
        a
      ) : (
        /** @type {Document} */
        a.head ?? /** @type {Document} */
        a.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const n = document.createElement("style");
      n.id = e.hash, n.textContent = e.code, r.appendChild(n);
    }
  });
}
const ar = [...` 	
\r\f \v\uFEFF`];
function H2(t, e, a) {
  var r = t == null ? "" : "" + t;
  if (a) {
    for (var n in a)
      if (a[n])
        r = r ? r + " " + n : n;
      else if (r.length)
        for (var o = n.length, l = 0; (l = r.indexOf(n, l)) >= 0; ) {
          var s = l + o;
          (l === 0 || ar.includes(r[l - 1])) && (s === r.length || ar.includes(r[s])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(s + 1) : l = s;
        }
  }
  return r === "" ? null : r;
}
function ta(t, e, a, r, n, o) {
  var l = t.__className;
  if (G || l !== a) {
    var s = H2(a, r, o);
    (!G || s !== t.getAttribute("class")) && (s == null ? t.removeAttribute("class") : e ? t.className = s : t.setAttribute("class", s)), t.__className = a;
  } else if (o) {
    n ?? (n = {});
    for (var c in o) {
      var y = !!o[c];
      y !== !!n[c] && t.classList.toggle(c, y);
    }
  }
  return o;
}
function Ft(t, e, a, r) {
  var n = t.__attributes ?? (t.__attributes = {});
  G && (n[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || n[e] !== (n[e] = a) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Jn] = a), a == null ? t.removeAttribute(e) : typeof a != "string" && _2(t).includes(e) ? t[e] = a : t.setAttribute(e, a));
}
var rr = /* @__PURE__ */ new Map();
function _2(t) {
  var e = rr.get(t.nodeName);
  if (e) return e;
  rr.set(t.nodeName, e = []);
  for (var a, r = t, n = Element.prototype; n !== r; ) {
    a = Bn(r);
    for (var o in a)
      a[o].set && e.push(o);
    r = br(r);
  }
  return e;
}
function Ct(t, e, a, r) {
  var n = t.__styles ?? (t.__styles = {});
  n[e] !== a && (n[e] = a, a == null ? t.style.removeProperty(e) : t.style.setProperty(e, a, ""));
}
const F2 = () => performance.now(), ht = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => F2(),
  tasks: /* @__PURE__ */ new Set()
};
function tn() {
  const t = ht.now();
  ht.tasks.forEach((e) => {
    e.c(t) || (ht.tasks.delete(e), e.f());
  }), ht.tasks.size !== 0 && ht.tick(tn);
}
function en(t) {
  let e;
  return ht.tasks.size === 0 && ht.tick(tn), {
    promise: new Promise((a) => {
      ht.tasks.add(e = { c: t, f: a });
    }),
    abort() {
      ht.tasks.delete(e);
    }
  };
}
function Oe(t, e) {
  Kr(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function D2(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (a) => a[0].toUpperCase() + a.slice(1)
  ).join("");
}
function nr(t) {
  const e = {}, a = t.split(";");
  for (const r of a) {
    const [n, o] = r.split(":");
    if (!n || o === void 0) break;
    const l = D2(n.trim());
    e[l] = o.trim();
  }
  return e;
}
const k2 = (t) => t;
function M2(t, e, a, r) {
  var n = (t & Dn) !== 0, o = "both", l, s = e.inert, c = e.style.overflow, y, i;
  function u() {
    var I = w, N = E;
    At(null), gt(null);
    try {
      return l ?? (l = a()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
      {}, {
        direction: o
      }));
    } finally {
      At(I), gt(N);
    }
  }
  var p = {
    is_global: n,
    in() {
      e.inert = s, Oe(e, "introstart"), y = ha(e, u(), i, 1, () => {
        Oe(e, "introend"), y == null || y.abort(), y = l = void 0, e.style.overflow = c;
      });
    },
    out(I) {
      e.inert = !0, Oe(e, "outrostart"), i = ha(e, u(), y, 0, () => {
        Oe(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      y == null || y.abort(), i == null || i.abort();
    }
  }, d = (
    /** @type {Effect} */
    E
  );
  if ((d.transitions ?? (d.transitions = [])).push(p), Pa) {
    var P = n;
    if (!P) {
      for (var h = (
        /** @type {Effect | null} */
        d.parent
      ); h && h.f & Ne; )
        for (; (h = h.parent) && !(h.f & Qe); )
          ;
      P = !h || (h.f & mr) !== 0;
    }
    P && Ze(() => {
      Dt(() => p.in());
    });
  }
}
function ha(t, e, a, r, n) {
  var o = r === 1;
  if (ae(e)) {
    var l, s = !1;
    return me(() => {
      if (!s) {
        var I = e({ direction: o ? "in" : "out" });
        l = ha(t, I, a, r, n);
      }
    }), {
      abort: () => {
        s = !0, l == null || l.abort();
      },
      deactivate: () => l.deactivate(),
      reset: () => l.reset(),
      t: () => l.t()
    };
  }
  if (a == null || a.deactivate(), !(e != null && e.duration))
    return n(), {
      abort: M,
      deactivate: M,
      reset: M,
      t: () => r
    };
  const { delay: c = 0, css: y, tick: i, easing: u = k2 } = e;
  var p = [];
  if (o && a === void 0 && (i && i(0, 1), y)) {
    var d = nr(y(0, 1));
    p.push(d, d);
  }
  var P = () => 1 - r, h = t.animate(p, { duration: c });
  return h.onfinish = () => {
    var I = (a == null ? void 0 : a.t()) ?? 1 - r;
    a == null || a.abort();
    var N = r - I, V = (
      /** @type {number} */
      e.duration * Math.abs(N)
    ), A = [];
    if (V > 0) {
      var g = !1;
      if (y)
        for (var T = Math.ceil(V / 16.666666666666668), b = 0; b <= T; b += 1) {
          var R = I + N * u(b / T), S = nr(y(R, 1 - R));
          A.push(S), g || (g = S.overflow === "hidden");
        }
      g && (t.style.overflow = "hidden"), P = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          h.currentTime
        );
        return I + N * u(C / V);
      }, i && en(() => {
        if (h.playState !== "running") return !1;
        var C = P();
        return i(C, 1 - C), !0;
      });
    }
    h = t.animate(A, { duration: V, fill: "forwards" }), h.onfinish = () => {
      P = () => r, i == null || i(r, 1 - r), n();
    };
  }, {
    abort: () => {
      h && (h.cancel(), h.effect = null, h.onfinish = M);
    },
    deactivate: () => {
      n = M;
    },
    reset: () => {
      r === 0 && (i == null || i(1, 0));
    },
    t: () => P()
  };
}
function or(t, e) {
  return t === e || (t == null ? void 0 : t[oe]) === e;
}
function Fa(t = {}, e, a, r) {
  return Ze(() => {
    var n, o;
    return Ua(() => {
      n = o, o = [], Dt(() => {
        t !== a(...o) && (e(t, ...o), n && or(a(...n), t) && e(null, ...n));
      });
    }), () => {
      me(() => {
        o && or(a(...o), t) && e(null, ...o);
      });
    };
  }), t;
}
function Da(t) {
  Q === null && T2(), Ht(() => {
    const e = Dt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function an(t, e, a) {
  if (t == null)
    return e(void 0), M;
  const r = Dt(
    () => t.subscribe(
      e,
      // @ts-expect-error
      a
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const ee = [];
function ka(t, e = M) {
  let a = null;
  const r = /* @__PURE__ */ new Set();
  function n(s) {
    if (Sr(t, s) && (t = s, a)) {
      const c = !ee.length;
      for (const y of r)
        y[1](), ee.push(y, t);
      if (c) {
        for (let y = 0; y < ee.length; y += 2)
          ee[y][0](ee[y + 1]);
        ee.length = 0;
      }
    }
  }
  function o(s) {
    n(s(
      /** @type {T} */
      t
    ));
  }
  function l(s, c = M) {
    const y = [s, c];
    return r.add(y), r.size === 1 && (a = e(n, o) || M), s(
      /** @type {T} */
      t
    ), () => {
      r.delete(y), r.size === 0 && a && (a(), a = null);
    };
  }
  return { set: n, update: o, subscribe: l };
}
function W2(t) {
  let e;
  return an(t, (a) => e = a)(), e;
}
let Ge = !1, Va = Symbol();
function rn(t, e, a) {
  const r = a[e] ?? (a[e] = {
    store: null,
    source: /* @__PURE__ */ je(void 0),
    unsubscribe: M
  });
  if (r.store !== t && !(Va in a))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = M;
    else {
      var n = !0;
      r.unsubscribe = an(t, (o) => {
        n ? r.source.v = o : F(r.source, o);
      }), n = !1;
    }
  return t && Va in a ? W2(t) : f(r.source);
}
function Ia(t, e) {
  return t.set(e), e;
}
function nn() {
  const t = {};
  function e() {
    Mr(() => {
      for (var a in t)
        t[a].unsubscribe();
      Ve(t, Va, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function J2(t, e, a) {
  return t.set(a), e;
}
function Y2(t) {
  var e = Ge;
  try {
    return Ge = !1, [t(), Ge];
  } finally {
    Ge = e;
  }
}
const B2 = {
  get(t, e) {
    let a = t.props.length;
    for (; a--; ) {
      let r = t.props[a];
      if (ae(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, a) {
    let r = t.props.length;
    for (; r--; ) {
      let n = t.props[r];
      ae(n) && (n = n());
      const o = Rt(n, e);
      if (o && o.set)
        return o.set(a), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let a = t.props.length;
    for (; a--; ) {
      let r = t.props[a];
      if (ae(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const n = Rt(r, e);
        return n && !n.configurable && (n.configurable = !0), n;
      }
    }
  },
  has(t, e) {
    if (e === oe || e === Oa) return !1;
    for (let a of t.props)
      if (ae(a) && (a = a()), a != null && e in a) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let a of t.props) {
      ae(a) && (a = a());
      for (const r in a)
        e.includes(r) || e.push(r);
    }
    return e;
  }
};
function $2(...t) {
  return new Proxy({ props: t }, B2);
}
function L(t, e, a, r) {
  var T;
  var n = (a & Un) !== 0, o = !0, l = (a & _n) !== 0, s = (a & Fn) !== 0, c = !1, y;
  l ? [y, c] = Y2(() => (
    /** @type {V} */
    t[e]
  )) : y = /** @type {V} */
  t[e];
  var i = oe in t || Oa in t, u = l && (((T = Rt(t, e)) == null ? void 0 : T.set) ?? (i && e in t && ((b) => t[e] = b))) || void 0, p = (
    /** @type {V} */
    r
  ), d = !0, P = !1, h = () => (P = !0, d && (d = !1, s ? p = Dt(
    /** @type {() => V} */
    r
  ) : p = /** @type {V} */
  r), p);
  y === void 0 && r !== void 0 && (u && o && e2(), y = h(), u && u(y));
  var I;
  if (I = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? h() : (d = !0, P = !1, b);
  }, !(a & Hn))
    return I;
  if (u) {
    var N = t.$$legacy;
    return function(b, R) {
      return arguments.length > 0 ? ((!R || N || c) && u(R ? I() : b), b) : I();
    };
  }
  var V = !1, A = /* @__PURE__ */ je(y), g = /* @__PURE__ */ $(() => {
    var b = I(), R = f(A);
    return V ? (V = !1, R) : A.v = b;
  });
  return n || (g.equals = Ea), function(b, R) {
    if (arguments.length > 0) {
      const S = R ? f(g) : l ? Et(b) : b;
      return g.equals(S) || (V = !0, F(A, S), P && p !== void 0 && (p = S), Dt(() => f(g))), b;
    }
    return f(g);
  };
}
function Q2(t) {
  return new K2(t);
}
var Lt, et;
class K2 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Wt(this, Lt);
    /** @type {Record<string, any>} */
    Wt(this, et);
    var o;
    var a = /* @__PURE__ */ new Map(), r = (l, s) => {
      var c = /* @__PURE__ */ je(s);
      return a.set(l, c), c;
    };
    const n = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(l, s) {
          return f(a.get(s) ?? r(s, Reflect.get(l, s)));
        },
        has(l, s) {
          return s === Oa ? !0 : (f(a.get(s) ?? r(s, Reflect.get(l, s))), Reflect.has(l, s));
        },
        set(l, s, c) {
          return F(a.get(s) ?? r(s, c), c), Reflect.set(l, s, c);
        }
      }
    );
    ue(this, et, (e.hydrate ? G2 : qr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: n,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((o = e == null ? void 0 : e.props) != null && o.$$host) || e.sync === !1) && m(), ue(this, Lt, n.$$events);
    for (const l of Object.keys(U(this, et)))
      l === "$set" || l === "$destroy" || l === "$on" || Ve(this, l, {
        get() {
          return U(this, et)[l];
        },
        /** @param {any} value */
        set(s) {
          U(this, et)[l] = s;
        },
        enumerable: !0
      });
    U(this, et).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(n, l);
    }, U(this, et).$destroy = () => {
      x2(U(this, et));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    U(this, et).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, a) {
    U(this, Lt)[e] = U(this, Lt)[e] || [];
    const r = (...n) => a.call(this, ...n);
    return U(this, Lt)[e].push(r), () => {
      U(this, Lt)[e] = U(this, Lt)[e].filter(
        /** @param {any} fn */
        (n) => n !== r
      );
    };
  }
  $destroy() {
    U(this, et).$destroy();
  }
}
Lt = new WeakMap(), et = new WeakMap();
let on;
typeof HTMLElement == "function" && (on = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, a, r) {
    super();
    /** The Svelte component constructor */
    pt(this, "$$ctor");
    /** Slots */
    pt(this, "$$s");
    /** @type {any} The Svelte component instance */
    pt(this, "$$c");
    /** Whether or not the custom element is connected */
    pt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    pt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    pt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    pt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    pt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    pt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    pt(this, "$$me");
    this.$$ctor = e, this.$$s = a, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, a, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(a), this.$$c) {
      const n = this.$$c.$on(e, a);
      this.$$l_u.set(a, n);
    }
    super.addEventListener(e, a, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, a, r) {
    if (super.removeEventListener(e, a, r), this.$$c) {
      const n = this.$$l_u.get(a);
      n && (n(), this.$$l_u.delete(a));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return (o) => {
          const l = document.createElement("slot");
          n !== "default" && (l.name = n), _(o, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const a = {}, r = j2(this);
      for (const n of this.$$s)
        n in r && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), a.default = !0) : a[n] = e(n));
      for (const n of this.attributes) {
        const o = this.$$g_p(n.name);
        o in this.$$d || (this.$$d[o] = we(o, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = Q2({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: a,
          $$host: this
        }
      }), this.$$me = m2(() => {
        Ua(() => {
          var n;
          this.$$r = !0;
          for (const o of He(this.$$c)) {
            if (!((n = this.$$p_d[o]) != null && n.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const l = we(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, l);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const o of this.$$l[n]) {
          const l = this.$$c.$on(n, o);
          this.$$l_u.set(o, l);
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
  attributeChangedCallback(e, a, r) {
    var n;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = we(e, r, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return He(this.$$p_d).find(
      (a) => this.$$p_d[a].attribute === e || !this.$$p_d[a].attribute && a.toLowerCase() === e
    ) || e;
  }
});
function we(t, e, a, r) {
  var o;
  const n = (o = a[t]) == null ? void 0 : o.type;
  if (e = n === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !a[t])
    return e;
  if (r === "toAttribute")
    switch (n) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (n) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function j2(t) {
  const e = {};
  return t.childNodes.forEach((a) => {
    e[
      /** @type {Element} node */
      a.slot || "default"
    ] = !0;
  }), e;
}
function Pt(t, e, a, r, n, o) {
  let l = class extends on {
    constructor() {
      super(t, a, n), this.$$p_d = e;
    }
    static get observedAttributes() {
      return He(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return He(e).forEach((s) => {
    Ve(l.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var u;
        c = we(s, c, e), this.$$d[s] = c;
        var y = this.$$c;
        if (y) {
          var i = (u = Rt(y, s)) == null ? void 0 : u.get;
          i ? y[s] = c : y.$set({ [s]: c });
        }
      }
    });
  }), r.forEach((s) => {
    Ve(l.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
function lr(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function z2(t) {
  return t;
}
function q2(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Aa(t, e) {
  if (t === e || t !== t) return () => t;
  const a = typeof t;
  if (a !== typeof e || Array.isArray(t) !== Array.isArray(e))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<any>} */
      e.map((n, o) => Aa(
        /** @type {Array<any>} */
        t[o],
        n
      ))
    );
    return (n) => r.map((o) => o(n));
  }
  if (a === "object") {
    if (!t || !e)
      throw new Error("Object cannot be null");
    if (lr(t) && lr(e)) {
      const o = t.getTime(), s = e.getTime() - o;
      return (c) => new Date(o + c * s);
    }
    const r = Object.keys(e), n = {};
    return r.forEach((o) => {
      n[o] = Aa(t[o], e[o]);
    }), (o) => {
      const l = {};
      return r.forEach((s) => {
        l[s] = n[s](o);
      }), l;
    };
  }
  if (a === "number") {
    const r = (
      /** @type {number} */
      e - /** @type {number} */
      t
    );
    return (n) => t + n * r;
  }
  return () => e;
}
var bt, le, fe, Jt;
const Ja = class Ja {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(e, a = {}) {
    Wt(this, bt, B(
      /** @type {T} */
      void 0
    ));
    Wt(this, le, B(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Wt(this, fe);
    /** @type {import('../internal/client/types').Task | null} */
    Wt(this, Jt, null);
    U(this, bt).v = U(this, le).v = e, ue(this, fe, a);
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
  static of(e, a) {
    const r = new Ja(e(), a);
    return Ua(() => {
      r.set(e());
    }), r;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenedOptions<T>} [options]
   * @returns
   */
  set(e, a) {
    var u;
    F(U(this, le), e);
    let {
      delay: r = 0,
      duration: n = 400,
      easing: o = z2,
      interpolate: l = Aa
    } = { ...U(this, fe), ...a };
    if (n === 0)
      return (u = U(this, Jt)) == null || u.abort(), F(U(this, bt), e), Promise.resolve();
    const s = ht.now() + r;
    let c, y = !1, i = U(this, Jt);
    return ue(this, Jt, en((p) => {
      if (p < s)
        return !0;
      if (!y) {
        y = !0;
        const P = U(this, bt).v;
        c = l(P, e), typeof n == "function" && (n = n(P, e)), i == null || i.abort();
      }
      const d = p - s;
      return d > /** @type {number} */
      n ? (F(U(this, bt), e), !1) : (F(U(this, bt), c(o(d / /** @type {number} */
      n))), !0);
    })), U(this, Jt).promise;
  }
  get current() {
    return f(U(this, bt));
  }
  get target() {
    return f(U(this, le));
  }
  set target(e) {
    this.set(e);
  }
};
bt = new WeakMap(), le = new WeakMap(), fe = new WeakMap(), Jt = new WeakMap();
let re = Ja;
function X2(t) {
  return Object.entries(t).reduce((e, [a, r]) => (e[r] = a, e), {});
}
const sr = 16;
function ge(t = [0, 0], e = "px") {
  const a = t[0] * (sr * Math.sqrt(3)), r = t[1] * 1.5 * sr;
  return [a, r].map((n) => `${Math.round(n)}${e}`);
}
var Z2 = /* @__PURE__ */ ye("<g><text> </text></g>"), to = /* @__PURE__ */ ye('<g class="hexlabels svelte-ejrww9"></g>');
const eo = {
  hash: "svelte-ejrww9",
  code: ".hexlabels.svelte-ejrww9 {pointer-events:none;}.hexlabels__text.svelte-ejrww9 {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:9px;font-family:sans-serif;text-anchor:middle;}.hexlabels__text--allocation.svelte-ejrww9 {fill:white;}"
};
function ln(t, e) {
  ot(e, !0), zt(t, eo);
  let a = L(e, "hexes", 7), r = L(e, "allocations", 7), n = L(e, "labelsToShow", 23, () => ({})), o = L(e, "showElectorateLabels", 7, !1), l = /* @__PURE__ */ $(() => o() ? a() : a().filter(({ id: c }) => n()[c]));
  var s = to();
  return Qt(s, 21, () => f(l), $t, (c, y) => {
    let i = () => f(y).id, u = () => f(y).coordPx, p = () => f(y).shortName;
    var d = Z2(), P = D(d);
    let h;
    var I = D(P, !0);
    H(P), H(d), Nt(
      (N) => {
        Ft(d, "transform", N), h = ta(P, 0, "hexlabels__text svelte-ejrww9", null, h, {
          "hexlabels__text--allocation": r()[i()]
        }), We(I, p());
      },
      [
        () => `translate(${u().join(" ")})`
      ]
    ), _(c, d);
  }), H(s), _(t, s), lt({
    get hexes() {
      return a();
    },
    set hexes(c) {
      a(c), m();
    },
    get allocations() {
      return r();
    },
    set allocations(c) {
      r(c), m();
    },
    get labelsToShow() {
      return n();
    },
    set labelsToShow(c = {}) {
      n(c), m();
    },
    get showElectorateLabels() {
      return o();
    },
    set showElectorateLabels(c = !1) {
      o(c), m();
    }
  });
}
Pt(
  ln,
  {
    hexes: {},
    allocations: {},
    labelsToShow: {},
    showElectorateLabels: {}
  },
  [],
  [],
  !0
);
var ao = /* @__PURE__ */ ye('<g><g class="group-hexes svelte-1wium0o"><!></g><g class="group-outline group-outline__under svelte-1wium0o"><!></g><g class="group-hex-strokes svelte-1wium0o"><!></g><!><g class="group-outline group-outline__over svelte-1wium0o"><!></g></g>');
const ro = {
  hash: "svelte-1wium0o",
  code: `.group.svelte-1wium0o:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-1wium0o {display:none;}.group--hidden.svelte-1wium0o {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-1wium0o,
.group-outline.svelte-1wium0o {pointer-events:none;}.group.svelte-1wium0o .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-1wium0o .hex-outline {fill:none;stroke:var(--c-state-outline);stroke-width:1px;transition:opacity 0.5s, stroke 0.5s;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-1wium0o:not(.group--has-focuses) .group-outline:where(.svelte-1wium0o) .hex-outline {stroke:var(--c-empty-state-outline);}.group-hexes.svelte-1wium0o .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-1wium0o .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-1wium0o .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-1wium0o .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-1wium0o .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-1wium0o .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-1wium0o .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-1wium0o .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-1wium0o .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-1wium0o .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-1wium0o .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-1wium0o .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-1wium0o .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-1wium0o .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-1wium0o .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-null-border);stroke-width:1;}.group--map-is-empty.svelte-1wium0o .group-hexes:where(.svelte-1wium0o) .hex {fill:var(--a-empty);stroke:var(--a-empty-border);stroke-width:0.5;}.group-hex-strokes.svelte-1wium0o .hex {fill:transparent;stroke:transparent;stroke-width:1px;}.group-hex-strokes.svelte-1wium0o .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filled-border);stroke-width:1px;}.group-hex-strokes.svelte-1wium0o .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);}.group--has-focuses.svelte-1wium0o .group-hexes:where(.svelte-1wium0o) .hex {stroke-width:1;}.group--has-focuses.svelte-1wium0o .group-hexes:where(.svelte-1wium0o) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-1wium0o .group-hex-strokes:where(.svelte-1wium0o) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-1wium0o .group-hexes:where(.svelte-1wium0o) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-1wium0o .group-hex-strokes:where(.svelte-1wium0o) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-1wium0o .group-hexes:where(.svelte-1wium0o) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-1wium0o .group-hex-strokes:where(.svelte-1wium0o) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--has-focuses.svelte-1wium0o:not(.group--map-is-empty) .group-outline:where(.svelte-1wium0o) .hex-outline {stroke:#60646c;}`
};
function sn(t, e) {
  ot(e, !0), zt(t, ro);
  let a = L(e, "name", 7, ""), r = L(e, "svgHexes", 7, ""), n = L(e, "hexes", 23, () => []), o = L(e, "svgOutline", 7, ""), l = L(e, "offset", 23, () => [1 / 0, 1 / 0]), s = L(e, "hasAllocations", 7), c = L(e, "allocations", 7), y = L(e, "focuses", 7), i = L(e, "hasAnyFocuses", 7, !1), u = L(e, "labelsToShow", 23, () => ({})), p = L(e, "showElectorateLabels", 7), d = L(e, "showFocusedElectorateLabels", 7), P = L(e, "isStaticLayout", 7), h = Ut(`translate(${ge(l()).join(",")})`), I = Ut(!1), N = /* @__PURE__ */ $(() => l()[0] !== 1 / 0);
  Ht(() => {
    f(N) && (F(h, `translate(${ge(l()).join(",")})`), F(I, !0));
  });
  let V = /* @__PURE__ */ $(() => i() && d() ? y() : u());
  var A = ao();
  let g;
  var T = D(A), b = D(T);
  Se(b, r), H(T);
  var R = at(T), S = D(R);
  Se(S, o), H(R);
  var C = at(R), st = D(C);
  Se(st, r), H(C);
  var K = at(C);
  {
    var dt = (O) => {
      ln(O, {
        get hexes() {
          return n();
        },
        get allocations() {
          return c();
        },
        get labelsToShow() {
          return f(V);
        },
        get showElectorateLabels() {
          return p();
        }
      });
    };
    _t(K, (O) => {
      f(N) && O(dt);
    });
  }
  var ct = at(K), qt = D(ct);
  return Se(qt, o), H(ct), H(A), Nt(() => {
    g = ta(A, 0, "group svelte-1wium0o", null, g, {
      "group--never-rendered": !f(I),
      "group--hidden": !f(N),
      "group--map-is-static": P(),
      "group--map-is-empty": !s(),
      "group--has-focuses": i()
    }), Ft(A, "data-name", a()), Ct(A, "transform", f(h)), Ct(ct, "opacity", i() && !s() ? 0 : 1);
  }), _(t, A), lt({
    get name() {
      return a();
    },
    set name(O = "") {
      a(O), m();
    },
    get svgHexes() {
      return r();
    },
    set svgHexes(O = "") {
      r(O), m();
    },
    get hexes() {
      return n();
    },
    set hexes(O = []) {
      n(O), m();
    },
    get svgOutline() {
      return o();
    },
    set svgOutline(O = "") {
      o(O), m();
    },
    get offset() {
      return l();
    },
    set offset(O = [1 / 0, 1 / 0]) {
      l(O), m();
    },
    get hasAllocations() {
      return s();
    },
    set hasAllocations(O) {
      s(O), m();
    },
    get allocations() {
      return c();
    },
    set allocations(O) {
      c(O), m();
    },
    get focuses() {
      return y();
    },
    set focuses(O) {
      y(O), m();
    },
    get hasAnyFocuses() {
      return i();
    },
    set hasAnyFocuses(O = !1) {
      i(O), m();
    },
    get labelsToShow() {
      return u();
    },
    set labelsToShow(O = {}) {
      u(O), m();
    },
    get showElectorateLabels() {
      return p();
    },
    set showElectorateLabels(O) {
      p(O), m();
    },
    get showFocusedElectorateLabels() {
      return d();
    },
    set showFocusedElectorateLabels(O) {
      d(O), m();
    },
    get isStaticLayout() {
      return P();
    },
    set isStaticLayout(O) {
      P(O), m();
    }
  });
}
Pt(
  sn,
  {
    name: {},
    svgHexes: {},
    hexes: {},
    svgOutline: {},
    offset: {},
    hasAllocations: {},
    allocations: {},
    focuses: {},
    hasAnyFocuses: {},
    labelsToShow: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    isStaticLayout: {}
  },
  [],
  [],
  !0
);
const no = (t) => t;
function oo(t, { delay: e = 0, duration: a = 400, easing: r = no } = {}) {
  const n = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: a,
    easing: r,
    css: (o) => `opacity: ${o * n}`
  };
}
var lo = /* @__PURE__ */ X('<div class="state-labels__label svelte-dbcm70"> </div>'), so = /* @__PURE__ */ X('<div aria-hidden="true"></div>');
const co = {
  hash: "svelte-dbcm70",
  code: `.state-labels.svelte-dbcm70 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-dbcm70 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-dbcm70 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-dbcm70 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-dbcm70 .state-labels__label:where(.svelte-dbcm70) {-webkit-text-stroke:2px #f1f1f1;paint-order:stroke fill;}`
};
function cn(t, e) {
  ot(e, !0), zt(t, co);
  let a = L(e, "labels", 7), r = L(e, "overlayLabels", 7, !1);
  var n = so();
  let o;
  return Qt(n, 21, a, $t, (l, s) => {
    var c = be(), y = Bt(c);
    E2(y, () => f(s).name, (i) => {
      var u = lo(), p = D(u, !0);
      H(u), Nt(
        (d) => {
          Ct(u, "left", f(s).left + "%"), Ct(u, "top", f(s).top + "%"), Ct(u, "width", f(s).width + "%"), Ct(u, "margin-left", d), We(p, f(s).name);
        },
        [
          () => Math.round(0 - f(s).width / 2) + "%"
        ]
      ), M2(3, u, () => oo, () => ({ duration: 1e3 })), _(i, u);
    }), _(l, c);
  }), H(n), Nt(() => o = ta(n, 1, "state-labels svelte-dbcm70", null, o, { "state-labels--overlaid": r() })), _(t, n), lt({
    get labels() {
      return a();
    },
    set labels(l) {
      a(l), m();
    },
    get overlayLabels() {
      return r();
    },
    set overlayLabels(l = !1) {
      r(l), m();
    }
  });
}
Pt(cn, { labels: {}, overlayLabels: {} }, [], [], !0);
var po = /* @__PURE__ */ X('<span class="accessible-hide svelte-ivafae"><!></span>');
const io = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function pn(t, e) {
  ot(e, !0), zt(t, io);
  let a = L(e, "children", 7);
  var r = po(), n = D(r);
  return Je(n, () => a() ?? M), H(r), _(t, r), lt({
    get children() {
      return a();
    },
    set children(o) {
      a(o), m();
    }
  });
}
Pt(pn, { children: {} }, [], [], !0);
function yo(t, e) {
  F(e, Et(t.target.dataset.id));
}
function uo(t, e) {
  var r;
  const a = t.target.dataset.id;
  (r = e()) == null || r({ code: a, clientX: null, clientY: null });
}
function Po(t, e) {
  f(e) === t.target.dataset.id && F(e, null);
}
var ho = /* @__PURE__ */ X("<li><button> </button></li>"), Vo = /* @__PURE__ */ X("<li> <ul></ul></li>"), Io = /* @__PURE__ */ X('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>');
const Ao = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function yn(t, e) {
  ot(e, !0), zt(t, Ao);
  let a = L(e, "groups", 7), r = L(e, "layout", 7), n = L(e, "onChange", 7), o = L(e, "onClick", 7), l = Ut(null);
  Ht(() => {
    var c;
    (c = n()) == null || c(f(l));
  });
  let s = /* @__PURE__ */ $(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((c) => r().positions[c]).map((c) => a().find((y) => y.name === c)).map((c) => ({
    ...c,
    hexes: [...c.hexes].sort((y, i) => y.coord[0] + y.coord[1] * 1e3 - (i.coord[0] + i.coord[1] * 1e3))
  })));
  return pn(t, {
    children: (c, y) => {
      var i = Io();
      i.__click = [uo, o], i.__focusin = [yo, l], i.__focusout = [Po, l], Qt(i, 21, () => f(s), $t, (u, p) => {
        var d = Vo(), P = D(d), h = at(P);
        Qt(h, 21, () => f(p).hexes, $t, (I, N) => {
          var V = ho(), A = D(V), g = D(A, !0);
          H(A), H(V), Nt(() => {
            Ft(A, "data-id", f(N).id), We(g, f(N).name);
          }), _(I, V);
        }), H(h), H(d), Nt(() => We(P, `${f(p).name ?? ""} `)), _(u, d);
      }), H(i), _(c, i);
    },
    $$slots: { default: !0 }
  }), lt({
    get groups() {
      return a();
    },
    set groups(c) {
      a(c), m();
    },
    get layout() {
      return r();
    },
    set layout(c) {
      r(c), m();
    },
    get onChange() {
      return n();
    },
    set onChange(c) {
      n(c), m();
    },
    get onClick() {
      return o();
    },
    set onClick(c) {
      o(c), m();
    }
  });
}
zr(["click", "focusin", "focusout"]);
Pt(
  yn,
  {
    groups: {},
    layout: {},
    onChange: {},
    onClick: {}
  },
  [],
  [],
  !0
);
const go = /* @__PURE__ */ JSON.parse(`[{"electorate":"Bean","totalVotes":97982,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"2227","percent":2.2728664448572187},"2022":{"party":"United Australia Party","totalVotes":"2831","percent":2.7944210287338738},"party":"United Australia Party","changeInPercent":0.5215545838766551},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2680","percent":2.645372079479612},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"35447","percent":36.177052928088834},"2022":{"party":"Australian Labor Party","totalVotes":"41060","percent":40.52946924754958},"party":"ALP","changeInPercent":4.352416319460744},{"2019":{"party":"Independent","totalVotes":"7683","percent":7.841236145414464},"2022":{"party":"Independent","totalVotes":"8023","percent":7.919335893158555},"party":"Independent","changeInPercent":0.07809974774409145},{"2019":{"party":"The Greens","totalVotes":"12168","percent":12.418607499336613},"2022":{"party":"The Greens","totalVotes":"14559","percent":14.370885113859577},"party":"GRN","changeInPercent":1.9522776145229646},{"2019":{"party":"Liberal","totalVotes":"29223","percent":29.824865791676018},"2022":{"party":"Liberal","totalVotes":"29241","percent":28.86318096121766},"party":"LNP","changeInPercent":-0.9616848304583563},{"2019":{"party":"Informal","totalVotes":"5043","percent":5.146863709660958},"2022":{"party":"Informal","totalVotes":"2915","percent":2.877335676001145},"party":"Informal","changeInPercent":-2.2695280336598134},{"2019":{"party":"Australian Progressives","totalVotes":"2722","percent":2.778061276561001},"party":"Australian Progressives","changeInPercent":null},{"2019":{"party":"The Great Australian Party","totalVotes":"929","percent":0.9481333306117451},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Liberal Democrats","totalVotes":"2540","percent":2.5923128737931456},"party":"Liberal Democrats","changeInPercent":null}]},{"electorate":"Canberra","totalVotes":88307,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"1361","percent":1.5412141732818463},"2022":{"party":"United Australia Party","totalVotes":"1687","percent":1.7948717948717947},"party":"United Australia Party","changeInPercent":0.2536576215899484},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1531","percent":1.6288966911373552},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"4062","percent":4.599861845606804},"2022":{"party":"Independent","totalVotes":"4772","percent":5.077135865517608},"party":"Independent","changeInPercent":0.4772740199108041},{"2019":{"party":"Liberal","totalVotes":"24063","percent":27.249255438413716},"2022":{"party":"Liberal","totalVotes":"20102","percent":21.38738163634429},"party":"LNP","changeInPercent":-5.861873802069425},{"2019":{"party":"The Greens","totalVotes":"20144","percent":22.81132866024211},"2022":{"party":"The Greens","totalVotes":"22795","percent":24.25258006170869},"party":"GRN","changeInPercent":1.4412514014665803},{"2019":{"party":"Australian Labor Party","totalVotes":"34989","percent":39.62200052091001},"2022":{"party":"Australian Labor Party","totalVotes":"41435","percent":44.08447707202894},"party":"ALP","changeInPercent":4.462476551118932},{"2019":{"party":"Informal","totalVotes":"1904","percent":2.1561144643120023},"2022":{"party":"Informal","totalVotes":"1668","percent":1.7746568783913181},"party":"Informal","changeInPercent":-0.38145758592068413},{"2019":{"party":"Australian Progressives","totalVotes":"1784","percent":2.020224897233515},"party":"Australian Progressives","changeInPercent":null}]},{"electorate":"Fenner","totalVotes":89302,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"38864","percent":43.51974199905937},"2022":{"party":"Australian Labor Party","totalVotes":"44100","percent":47.00790926727354},"party":"ALP","changeInPercent":3.48816726821417},{"2019":{"party":"Liberal","totalVotes":"30025","percent":33.62186737139146},"2022":{"party":"Liberal","totalVotes":"25416","percent":27.09190525934296},"party":"LNP","changeInPercent":-6.529962112048501},{"2019":{"party":"United Australia Party","totalVotes":"3529","percent":3.9517591991220806},"2022":{"party":"United Australia Party","totalVotes":"2346","percent":2.500692860340674},"party":"United Australia Party","changeInPercent":-1.4510663387814065},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2419","percent":2.578506406293304},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"12492","percent":13.988488499697654},"2022":{"party":"The Greens","totalVotes":"15294","percent":16.302470846568742},"party":"GRN","changeInPercent":2.3139823468710876},{"2022":{"party":"Liberal Democrats","totalVotes":"1706","percent":1.8184919095230991},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"2669","percent":2.988734854762491},"2022":{"party":"Informal","totalVotes":"2533","percent":2.7000234506576843},"party":"Informal","changeInPercent":-0.28871140410480667},{"2019":{"party":"Australian Progressives","totalVotes":"1723","percent":1.9294080759669436},"party":"Australian Progressives","changeInPercent":null}]},{"electorate":"Banks","totalVotes":98845,"candidates":[{"2019":{"party":"Liberal","totalVotes":"46709","percent":47.25479285750417},"2022":{"party":"Liberal","totalVotes":"41622","percent":42.215122470713524},"party":"LNP","changeInPercent":-5.039670386790647},{"2022":{"party":"Liberal Democrats","totalVotes":"1264","percent":1.2820122724276077},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2029","percent":2.052708786483889},"2022":{"party":"United Australia Party","totalVotes":"5048","percent":5.119935087986207},"party":"United Australia Party","changeInPercent":3.0672263015023176},{"2019":{"party":"The Greens","totalVotes":"5339","percent":5.401386008396985},"2022":{"party":"The Greens","totalVotes":"8063","percent":8.177899487803641},"party":"GRN","changeInPercent":2.776513479406656},{"2022":{"party":"","totalVotes":"961","percent":0.9746944571225722},"party":"no party","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2628","percent":2.665449566408033},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"33341","percent":33.730588294804996},"2022":{"party":"Labor","totalVotes":"32459","percent":32.921547745828896},"party":"ALP","changeInPercent":-0.8090405489760997},{"2019":{"party":"Informal","totalVotes":"7115","percent":7.198138499671202},"2022":{"party":"Informal","totalVotes":"6550","percent":6.643338911709519},"party":"Informal","changeInPercent":-0.5547995879616829},{"2019":{"party":"Animal Justice Party","totalVotes":"1688","percent":1.7077242146795488},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2624","percent":2.6546613384592037},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Barton","totalVotes":99380,"candidates":[{"2019":{"party":"Labor","totalVotes":"44227","percent":44.50291809217146},"2022":{"party":"Labor","totalVotes":"46206","percent":46.65953063779941},"party":"ALP","changeInPercent":2.156612545627951},{"2019":{"party":"United Australia Party","totalVotes":"2057","percent":2.0698329643791507},"2022":{"party":"United Australia Party","totalVotes":"5611","percent":5.66607424162863},"party":"United Australia Party","changeInPercent":3.5962412772494794},{"2019":{"party":"The Greens","totalVotes":"8123","percent":8.173676796136045},"2022":{"party":"The Greens","totalVotes":"11441","percent":11.553298057115159},"party":"GRN","changeInPercent":3.379621260979114},{"2019":{"party":"Liberal","totalVotes":"30109","percent":30.296840410545382},"2022":{"party":"Liberal","totalVotes":"23992","percent":24.22749121460597},"party":"LNP","changeInPercent":-6.069349195939413},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"3288","percent":3.308512779231234},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4373","percent":4.415922769317769},"party":"Pauline Hanson's One Nation","changeInPercent":1.1074099900865346},{"2019":{"party":"Informal","totalVotes":"9473","percent":9.532099013886093},"2022":{"party":"Informal","totalVotes":"7405","percent":7.477683079533061},"party":"Informal","changeInPercent":-2.054415934353032},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2103","percent":2.116119943650634},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Bennelong","totalVotes":101542,"candidates":[{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"2125","percent":2.008924350999263},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"9116","percent":8.977565933308384},"2022":{"party":"The Greens","totalVotes":"11395","percent":10.772561402181928},"party":"GRN","changeInPercent":1.7949954688735446},{"2022":{"party":"Liberal Democrats","totalVotes":"1539","percent":1.454933918206054},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"48942","percent":48.19877489117804},"2022":{"party":"Liberal","totalVotes":"41206","percent":38.95517026224734},"party":"LNP","changeInPercent":-9.243604628930697},{"2019":{"party":"United Australia Party","totalVotes":"1890","percent":1.8612987729215498},"2022":{"party":"United Australia Party","totalVotes":"2915","percent":2.7557715214884},"party":"United Australia Party","changeInPercent":0.8944727485668504},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1664","percent":1.5731059388530695},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"32769","percent":32.27137539146363},"2022":{"party":"Labor","totalVotes":"37596","percent":35.54236230596155},"party":"ALP","changeInPercent":3.270986914497918},{"2022":{"party":"Democratic Alliance","totalVotes":"1208","percent":1.1420144075327572},"party":"Democratic Alliance","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"5237","percent":5.157471785074157},"2022":{"party":"Informal","totalVotes":"6130","percent":5.795155892529637},"party":"Informal","changeInPercent":0.6376841074554802},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"3588","percent":3.5335132260542435},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Berowra","totalVotes":100370,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"2307","percent":2.321182424614394},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"11157","percent":11.115871276277772},"2022":{"party":"The Greens","totalVotes":"14536","percent":14.625360955437724},"party":"GRN","changeInPercent":3.5094896791599517},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2972","percent":2.9902705530793146},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"53741","percent":53.54289130218193},"2022":{"party":"Liberal","totalVotes":"45797","percent":46.0785398786586},"party":"LNP","changeInPercent":-7.4643514235233255},{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"1418","percent":1.4267172423507632},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"19821","percent":19.747932649197967},"2022":{"party":"Labor","totalVotes":"20746","percent":20.87353731298232},"party":"ALP","changeInPercent":1.1256046637843546},{"2022":{"party":"Australian Federation Party","totalVotes":"509","percent":0.5121291088551047},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"495","percent":0.493175251569194},"2022":{"party":"Independent","totalVotes":"904","percent":0.9095573956876515},"party":"Independent","changeInPercent":0.4163821441184575},{"2019":{"party":"United Australia Party","totalVotes":"1576","percent":1.5701902959051508},"2022":{"party":"United Australia Party","totalVotes":"2315","percent":2.329231605107205},"party":"United Australia Party","changeInPercent":0.759041309202054},{"2019":{"party":"Informal","totalVotes":"6423","percent":6.399322506725117},"2022":{"party":"Informal","totalVotes":"6083","percent":6.120395617221221},"party":"Informal","changeInPercent":-0.27892688950389566},{"2019":{"party":"Science Party","totalVotes":"1465","percent":1.4595994819169074},"party":"Science Party","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2163","percent":2.1550264023114476},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Sustainable Australia","totalVotes":"1425","percent":1.4197469363355584},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Blaxland","totalVotes":93209,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4421","percent":4.828475005733882},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"23289","percent":24.985784634531},"2022":{"party":"Liberal","totalVotes":"22059","percent":24.09213529777962},"party":"LNP","changeInPercent":-0.8936493367513805},{"2019":{"party":"The Greens","totalVotes":"4329","percent":4.644401291720756},"2022":{"party":"The Greens","totalVotes":"5187","percent":5.665075741855157},"party":"GRN","changeInPercent":1.0206744501344005},{"2019":{"party":"Labor","totalVotes":"46689","percent":50.09065648167022},"2022":{"party":"Labor","totalVotes":"44905","percent":49.04380686099977},"party":"ALP","changeInPercent":-1.04684962067045},{"2019":{"party":"United Australia Party","totalVotes":"2328","percent":2.4976128914589792},"2022":{"party":"United Australia Party","totalVotes":"5105","percent":5.575517960703793},"party":"United Australia Party","changeInPercent":3.0779050692448133},{"2019":{"party":"Informal","totalVotes":"12401","percent":13.304509221212543},"2022":{"party":"Informal","totalVotes":"9884","percent":10.794989132927775},"party":"Informal","changeInPercent":-2.509520088284768},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"4173","percent":4.477035479406495},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Bradfield","totalVotes":100199,"candidates":[{"2022":{"party":"Independent","totalVotes":"20198","percent":20.133572567783094},"party":"Independent","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"20361","percent":20.3205620814579},"2022":{"party":"Labor","totalVotes":"16902","percent":16.848086124401913},"party":"ALP","changeInPercent":-3.4724759570559875},{"2019":{"party":"The Greens","totalVotes":"13177","percent":13.150829848601283},"2022":{"party":"The Greens","totalVotes":"8960","percent":8.931419457735247},"party":"GRN","changeInPercent":-4.219410390866036},{"2019":{"party":"United Australia Party","totalVotes":"1772","percent":1.7684807233605124},"2022":{"party":"United Australia Party","totalVotes":"2496","percent":2.488038277511962},"party":"United Australia Party","changeInPercent":0.7195575541514494},{"2019":{"party":"Liberal","totalVotes":"58007","percent":57.89179532729868},"2022":{"party":"Liberal","totalVotes":"43562","percent":43.42304625199362},"party":"LNP","changeInPercent":-14.468749075305062},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1568","percent":1.562998405103668},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4056","percent":4.047944590265372},"2022":{"party":"Informal","totalVotes":"3616","percent":3.604465709728868},"party":"Informal","changeInPercent":-0.44347888053650397},{"2019":{"party":"Sustainable Australia","totalVotes":"2826","percent":2.8203874290162574},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Calare","totalVotes":110539,"candidates":[{"2022":{"party":"Independent","totalVotes":"21891","percent":19.585055558537764},"party":"Independent","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"9057","percent":8.102957754039402},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"6315","percent":5.712915803472077},"2022":{"party":"The Greens","totalVotes":"4891","percent":4.3757940129189254},"party":"GRN","changeInPercent":-1.3371217905531516},{"2019":{"party":"Labor","totalVotes":"23074","percent":20.874080641221653},"2022":{"party":"Labor","totalVotes":"16252","percent":14.540054037611611},"party":"ALP","changeInPercent":-6.334026603610042},{"2019":{"party":"The Nationals","totalVotes":"46632","percent":42.18601579533016},"2022":{"party":"The Nationals","totalVotes":"51161","percent":45.77182529031796},"party":"LNP","changeInPercent":3.5858094949878065},{"2019":{"party":"United Australia Party","totalVotes":"3371","percent":3.0496024027718724},"2022":{"party":"United Australia Party","totalVotes":"4067","percent":3.638592159178342},"party":"United Australia Party","changeInPercent":0.5889897564064697},{"2019":{"party":"Informal","totalVotes":"6251","percent":5.655017686065551},"2022":{"party":"Informal","totalVotes":"4455","percent":3.9857211873959955},"party":"Informal","changeInPercent":-1.6692964986695555},{"2019":{"party":"Shooters, Fishers and Farmers","totalVotes":"18129","percent":16.400546413483024},"party":"Shooters, Fishers and Farmers","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1992","percent":1.802078904278128},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Liberal Democrats","totalVotes":"4775","percent":4.319742353377541},"party":"Liberal Democrats","changeInPercent":null}]},{"electorate":"Chifley","totalVotes":100734,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6034","percent":5.657228576786049},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4133","percent":4.1028848253816985},"2022":{"party":"United Australia Party","totalVotes":"5149","percent":4.8274892180761295},"party":"United Australia Party","changeInPercent":0.724604392694431},{"2019":{"party":"Independent","totalVotes":"1581","percent":1.5694800166775866},"2022":{"party":"Independent","totalVotes":"1839","percent":1.72417026064129},"party":"Independent","changeInPercent":0.15469024396370346},{"2022":{"party":"Liberal Democrats","totalVotes":"3263","percent":3.0592537033564597},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"4604","percent":4.57045287589096},"2022":{"party":"The Greens","totalVotes":"5622","percent":5.2709544346521655},"party":"GRN","changeInPercent":0.7005015587612053},{"2019":{"party":"Liberal","totalVotes":"25411","percent":25.225842317390356},"2022":{"party":"Liberal","totalVotes":"24046","percent":22.544534033377087},"party":"LNP","changeInPercent":-2.6813082840132694},{"2019":{"party":"Labor","totalVotes":"49418","percent":49.05791490460024},"2022":{"party":"Labor","totalVotes":"51236","percent":48.036752297018566},"party":"ALP","changeInPercent":-1.0211626075816724},{"2019":{"party":"Informal","totalVotes":"9728","percent":9.657116762959875},"2022":{"party":"Informal","totalVotes":"9471","percent":8.879617476092255},"party":"Informal","changeInPercent":-0.77749928686762},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"5859","percent":5.816308297099291},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Cook","totalVotes":100164,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"3277","percent":3.2716345193882037},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4985","percent":4.872208376093437},"party":"Pauline Hanson's One Nation","changeInPercent":1.6005738567052332},{"2019":{"party":"The Greens","totalVotes":"6406","percent":6.395511361367358},"2022":{"party":"The Greens","totalVotes":"9685","percent":9.465865220153448},"party":"GRN","changeInPercent":3.07035385878609},{"2019":{"party":"Liberal","totalVotes":"59895","percent":59.79693302983108},"2022":{"party":"Liberal","totalVotes":"54322","percent":53.092899379367644},"party":"LNP","changeInPercent":-6.704033650463437},{"2019":{"party":"United Australia Party","totalVotes":"1135","percent":1.1331416476977756},"2022":{"party":"United Australia Party","totalVotes":"4381","percent":4.281874602941895},"party":"United Australia Party","changeInPercent":3.1487329552441192},{"2019":{"party":"Labor","totalVotes":"21718","percent":21.682440797092767},"2022":{"party":"Labor","totalVotes":"24444","percent":23.89092508429849},"party":"ALP","changeInPercent":2.2084842872057244},{"2019":{"party":"Informal","totalVotes":"6141","percent":6.1309452497903445},"2022":{"party":"Informal","totalVotes":"4498","percent":4.396227337145091},"party":"Informal","changeInPercent":-1.7347179126452534},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"551","percent":0.5500978395431493},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1041","percent":1.0392955552893255},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Cowper","totalVotes":114426,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"9047","percent":7.732082115447072},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"14551","percent":12.716515477251674},"2022":{"party":"Labor","totalVotes":"15566","percent":13.303591268823823},"party":"ALP","changeInPercent":0.5870757915721487},{"2019":{"party":"The Nationals","totalVotes":"49668","percent":43.40621886634157},"2022":{"party":"The Nationals","totalVotes":"43909","percent":37.5271353605798},"party":"LNP","changeInPercent":-5.87908350576177},{"2019":{"party":"Independent","totalVotes":"25847","percent":22.588397741771978},"2022":{"party":"Independent","totalVotes":"29206","percent":24.96111310531084},"party":"Independent","changeInPercent":2.3727153635388625},{"2022":{"party":"Liberal Democrats","totalVotes":"4316","percent":3.688699724800438},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3188","percent":2.7860800866935835},"2022":{"party":"United Australia Party","totalVotes":"2674","percent":2.2853528878860914},"party":"United Australia Party","changeInPercent":-0.5007271988074922},{"2019":{"party":"The Greens","totalVotes":"6264","percent":5.474280320906088},"2022":{"party":"The Greens","totalVotes":"6518","percent":5.570654496350615},"party":"GRN","changeInPercent":0.09637417544452731},{"2019":{"party":"Informal","totalVotes":"8898","percent":7.776204708720045},"2022":{"party":"Informal","totalVotes":"5770","percent":4.931371040801326},"party":"Informal","changeInPercent":-2.844833667918719},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2383","percent":2.082568646985825},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"2176","percent":1.901665705346687},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Cunningham","totalVotes":106757,"candidates":[{"2019":{"party":"Liberal","totalVotes":"31177","percent":29.203705611809998},"2022":{"party":"Liberal","totalVotes":"25418","percent":23.714139105285252},"party":"LNP","changeInPercent":-5.489566506524746},{"2019":{"party":"United Australia Party","totalVotes":"3828","percent":3.585713349007559},"2022":{"party":"United Australia Party","totalVotes":"4936","percent":4.605121985352429},"party":"United Australia Party","changeInPercent":1.0194086363448696},{"2019":{"party":"Labor","totalVotes":"46923","percent":43.95308972713733},"2022":{"party":"Labor","totalVotes":"40783","percent":38.04916732751784},"party":"ALP","changeInPercent":-5.903922399619489},{"2022":{"party":"Citizens Party","totalVotes":"1098","percent":1.024397070485609},"party":"Citizens Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"15196","percent":14.23419541575728},"2022":{"party":"The Greens","totalVotes":"22011","percent":20.535522694406865},"party":"GRN","changeInPercent":6.301327278649584},{"2022":{"party":"Liberal Democrats","totalVotes":"2207","percent":2.059056771003405},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5218","percent":4.868218500723049},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"6080","percent":5.6951768970652985},"2022":{"party":"Informal","totalVotes":"5514","percent":5.144376545225544},"party":"Informal","changeInPercent":-0.5508003518397544},{"2019":{"party":"Non-Custodial Parents Party (Equal Parenting)","totalVotes":"1213","percent":1.1362252592335866},"party":"Non-Custodial Parents Party (Equal Parenting)","changeInPercent":null},{"2019":{"party":"Sustainable Australia","totalVotes":"2340","percent":2.191893739988947},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Dobell","totalVotes":107892,"candidates":[{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"2202","percent":2.0647556893302204},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"5411","percent":5.015200385570756},"2022":{"party":"United Australia Party","totalVotes":"3818","percent":3.5800350689658407},"party":"United Australia Party","changeInPercent":-1.4351653166049152},{"2019":{"party":"Liberal","totalVotes":"41326","percent":38.30311793274756},"2022":{"party":"Liberal","totalVotes":"34276","percent":32.139675752716904},"party":"LNP","changeInPercent":-6.163442180030657},{"2019":{"party":"The Greens","totalVotes":"7579","percent":7.024617209802394},"2022":{"party":"The Greens","totalVotes":"8700","percent":8.15775408590959},"party":"GRN","changeInPercent":1.1331368761071952},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"7583","percent":7.110373475109473},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1543","percent":1.4468292591446548},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"42093","percent":39.014014014014016},"2022":{"party":"Labor","totalVotes":"43595","percent":40.87784935347455},"party":"ALP","changeInPercent":1.863835339460536},{"2019":{"party":"Informal","totalVotes":"6439","percent":5.968005042079117},"2022":{"party":"Informal","totalVotes":"4930","percent":4.622727315348767},"party":"Informal","changeInPercent":-1.34527772673035},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1868","percent":1.7313609906202498},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"3176","percent":2.9436844251659067},"party":"Independent","changeInPercent":null}]},{"electorate":"Eden-Monaro","totalVotes":106505,"candidates":[{"2022":{"party":"Sustainable Australia Party - Stop Overdevelopment / Corruption","totalVotes":"2260","percent":2.0810313075506444},"party":"Sustainable Australia Party - Stop Overdevelopment / Corruption","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"2625","percent":2.4171270718232045},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"38878","percent":36.503450542228066},"2022":{"party":"Labor","totalVotes":"43215","percent":39.79281767955801},"party":"ALP","changeInPercent":3.289367137329947},{"2022":{"party":"Australian Democrats","totalVotes":"651","percent":0.5994475138121547},"party":"Australian Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2748","percent":2.5801605558424487},"2022":{"party":"United Australia Party","totalVotes":"2566","percent":2.3627992633517496},"party":"United Australia Party","changeInPercent":-0.21736129249069913},{"2019":{"party":"Liberal","totalVotes":"36732","percent":34.4885216656495},"2022":{"party":"Liberal","totalVotes":"33520","percent":30.865561694290978},"party":"LNP","changeInPercent":-3.6229599713585223},{"2019":{"party":"The Greens","totalVotes":"8715","percent":8.182714426552744},"2022":{"party":"The Greens","totalVotes":"9376","percent":8.633517495395948},"party":"GRN","changeInPercent":0.45080306884320365},{"2022":{"party":"Informed Medical Options Party","totalVotes":"909","percent":0.8370165745856353},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2247","percent":2.109760105159382},"2022":{"party":"Independent","totalVotes":"2044","percent":1.882136279926335},"party":"Independent","changeInPercent":-0.22762382523304714},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4351","percent":4.0064456721915285},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"7246","percent":6.803436458382235},"2022":{"party":"Informal","totalVotes":"7083","percent":6.5220994475138125},"party":"Informal","changeInPercent":-0.28133701086842233},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1157","percent":1.0863339749307543},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Farrer","totalVotes":107017,"candidates":[{"2019":{"party":"The Greens","totalVotes":"4529","percent":4.232037900520478},"2022":{"party":"The Greens","totalVotes":"9163","percent":8.418934563295908},"party":"GRN","changeInPercent":4.18689666277543},{"2019":{"party":"Liberal","totalVotes":"49316","percent":46.08239812366259},"2022":{"party":"Liberal","totalVotes":"52566","percent":48.29746963376762},"party":"LNP","changeInPercent":2.2150715101050267},{"2019":{"party":"Independent","totalVotes":"19926","percent":18.619471672724895},"2022":{"party":"Independent","totalVotes":"3189","percent":2.9300428159282603},"party":"Independent","changeInPercent":-15.689428856796635},{"2022":{"party":"Shooters, Fishers and Farmers Party","totalVotes":"5339","percent":4.905455815064592},"party":"Shooters, Fishers and Farmers Party","changeInPercent":null},{"2019":{"party":"Liberal Democrats","totalVotes":"1084","percent":1.0129231804292775},"2022":{"party":"Liberal Democrats","totalVotes":"1595","percent":1.4654808063360223},"party":"Liberal Democrats","changeInPercent":0.45255762590674475},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6363","percent":5.846303680699756},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4147","percent":3.875085266826766},"2022":{"party":"United Australia Party","totalVotes":"3270","percent":3.004465352174792},"party":"United Australia Party","changeInPercent":-0.8706199146519737},{"2019":{"party":"Labor","totalVotes":"14236","percent":13.302559406449443},"2022":{"party":"Labor","totalVotes":"19097","percent":17.546261416049543},"party":"ALP","changeInPercent":4.243702009600099},{"2019":{"party":"Informal","totalVotes":"9768","percent":9.127521795602568},"2022":{"party":"Informal","totalVotes":"8256","percent":7.585585916683511},"party":"Informal","changeInPercent":-1.5419358789190571},{"2019":{"party":"Sustainable Australia","totalVotes":"1429","percent":1.3353018679275255},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1327","percent":1.2399899081454349},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Fowler","totalVotes":96288,"candidates":[{"2019":{"party":"Labor","totalVotes":"45627","percent":47.385967098703894},"2022":{"party":"Labor","totalVotes":"30973","percent":32.26320559160842},"party":"ALP","changeInPercent":-15.122761507095476},{"2019":{"party":"United Australia Party","totalVotes":"3624","percent":3.7637088733798603},"2022":{"party":"United Australia Party","totalVotes":"5512","percent":5.7416068582618935},"party":"United Australia Party","changeInPercent":1.9778979848820333},{"2022":{"party":"Liberal Democrats","totalVotes":"2094","percent":2.1812272788825116},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Independent","totalVotes":"25346","percent":26.401808314496723},"party":"Independent","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"25137","percent":26.106056829511466},"2022":{"party":"Liberal","totalVotes":"14740","percent":15.354006729096573},"party":"LNP","changeInPercent":-10.752050100414893},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3047","percent":3.173925271611754},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"4633","percent":4.8116068461282815},"2022":{"party":"The Greens","totalVotes":"4191","percent":4.365579525213279},"party":"GRN","changeInPercent":-0.4460273209150021},{"2019":{"party":"Informal","totalVotes":"12624","percent":13.110667996011966},"2022":{"party":"Informal","totalVotes":"10098","percent":10.518640430828846},"party":"Informal","changeInPercent":-2.5920275651831197},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"4643","percent":4.82199235626454},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Gilmore","totalVotes":113647,"candidates":[{"2019":{"party":"The Nationals","totalVotes":"13462","percent":11.845451265761525},"2022":{"party":"Liberal","totalVotes":"46941","percent":40.16342245989305},"party":"LNP","changeInPercent":28.317971194131523},{"2019":{"party":"Independent","totalVotes":"7585","percent":6.674175297192182},"2022":{"party":"Independent","totalVotes":"4721","percent":4.039358288770053},"party":"Independent","changeInPercent":-2.6348170084221287},{"2019":{"party":"The Greens","totalVotes":"10740","percent":9.450315450473836},"2022":{"party":"The Greens","totalVotes":"11417","percent":9.76855614973262},"party":"GRN","changeInPercent":0.3182406992587836},{"2019":{"party":"United Australia Party","totalVotes":"3638","percent":3.2011403732610626},"2022":{"party":"United Australia Party","totalVotes":"3108","percent":2.6592513368983957},"party":"United Australia Party","changeInPercent":-0.5418890363626669},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4453","percent":3.810053475935829},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"890","percent":0.7614973262032085},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"38972","percent":34.29215025473616},"2022":{"party":"Labor","totalVotes":"40175","percent":34.37433155080214},"party":"ALP","changeInPercent":0.08218129606598268},{"2019":{"party":"Informal","totalVotes":"5970","percent":5.253108309062272},"2022":{"party":"Informal","totalVotes":"5170","percent":4.423529411764706},"party":"Informal","changeInPercent":-0.8295788972975657},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1853","percent":1.6304873863806346},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Grayndler","totalVotes":100072,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"1155","percent":1.1541689983212087},"2022":{"party":"United Australia Party","totalVotes":"2101","percent":2.121022451946374},"party":"United Australia Party","changeInPercent":0.9668534536251654},{"2019":{"party":"Labor","totalVotes":"48728","percent":48.69294108242066},"2022":{"party":"Labor","totalVotes":"50723","percent":51.20638830560491},"party":"ALP","changeInPercent":2.513447223184251},{"2019":{"party":"Liberal","totalVotes":"20846","percent":20.83100167879127},"2022":{"party":"Liberal","totalVotes":"15111","percent":15.255007268615733},"party":"LNP","changeInPercent":-5.575994410175538},{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"1222","percent":1.2336456146018413},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2022":{"party":"Independent","totalVotes":"1973","percent":1.9918026167016638},"party":"Independent","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1449","percent":1.462808916168632},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Animal Justice Party","totalVotes":"1148","percent":1.1589403973509933},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"21607","percent":21.591454153009835},"2022":{"party":"The Greens","totalVotes":"20846","percent":21.044661605556453},"party":"GRN","changeInPercent":-0.5467925474533821},{"2019":{"party":"Informal","totalVotes":"4258","percent":4.2549364457590535},"2022":{"party":"Informal","totalVotes":"4483","percent":4.5257228234534},"party":"Informal","changeInPercent":0.2707863776943462},{"2019":{"party":"Science Party","totalVotes":"2613","percent":2.611119993604605},"party":"Science Party","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"865","percent":0.8643776480933727},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Greenway","totalVotes":102432,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"2853","percent":2.785262417994377},"2022":{"party":"United Australia Party","totalVotes":"4359","percent":3.9794409246106373},"party":"United Australia Party","changeInPercent":1.1941785066162605},{"2019":{"party":"Labor","totalVotes":"43901","percent":42.858676975945016},"2022":{"party":"Labor","totalVotes":"48551","percent":44.32343113805255},"party":"ALP","changeInPercent":1.464754162107532},{"2022":{"party":"Liberal Democrats","totalVotes":"3014","percent":2.7515565374573208},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Independent","totalVotes":"3272","percent":2.9870912377439796},"party":"Independent","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2710","percent":2.474027278204824},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"38759","percent":37.838761324586066},"2022":{"party":"Liberal","totalVotes":"29932","percent":27.32567693403202},"party":"LNP","changeInPercent":-10.513084390554045},{"2019":{"party":"The Greens","totalVotes":"5256","percent":5.131208997188379},"2022":{"party":"The Greens","totalVotes":"7086","percent":6.468987931128924},"party":"GRN","changeInPercent":1.3377789339405446},{"2019":{"party":"Informal","totalVotes":"6925","percent":6.760582630427992},"2022":{"party":"Informal","totalVotes":"8999","percent":8.215413828990853},"party":"Informal","changeInPercent":1.4548311985628608},{"2019":{"party":"Australian Better Families","totalVotes":"2072","percent":2.0228053733208373},"party":"Australian Better Families","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2666","percent":2.602702280537332},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Hughes","totalVotes":100699,"candidates":[{"2019":{"party":"Liberal","totalVotes":"50763","percent":50.41062969840813},"2022":{"party":"Liberal","totalVotes":"42148","percent":41.60875059232349},"party":"LNP","changeInPercent":-8.801879106084641},{"2019":{"party":"The Greens","totalVotes":"6631","percent":6.584971052344114},"2022":{"party":"The Greens","totalVotes":"6118","percent":6.039725161901753},"party":"GRN","changeInPercent":-0.5452458904423612},{"2019":{"party":"Independent","totalVotes":"1988","percent":1.974200339626014},"2022":{"party":"Independent","totalVotes":"13891","percent":13.713275943768757},"party":"Independent","changeInPercent":11.739075604142743},{"2019":{"party":"United Australia Party","totalVotes":"2366","percent":2.3495764605408196},"2022":{"party":"United Australia Party","totalVotes":"7186","percent":7.0940609698309895},"party":"United Australia Party","changeInPercent":4.74448450929017},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2600","percent":2.5667351129363447},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"29088","percent":28.886086257063127},"2022":{"party":"Labor","totalVotes":"21828","percent":21.548728478913283},"party":"ALP","changeInPercent":-7.337357778149844},{"2019":{"party":"Informal","totalVotes":"5208","percent":5.171848777048432},"2022":{"party":"Informal","totalVotes":"4387","percent":4.330871900173748},"party":"Informal","changeInPercent":-0.8409768768746835},{"2019":{"party":"Animal Justice Party","totalVotes":"2439","percent":2.4220697325693403},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2216","percent":2.200617682400024},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Hume","totalVotes":109522,"candidates":[{"2019":{"party":"Labor","totalVotes":"27223","percent":24.856193276236738},"2022":{"party":"Labor","totalVotes":"20864","percent":18.49612595521356},"party":"ALP","changeInPercent":-6.360067321023177},{"2019":{"party":"United Australia Party","totalVotes":"4939","percent":4.509596245503186},"2022":{"party":"United Australia Party","totalVotes":"4780","percent":4.2375135192638425},"party":"United Australia Party","changeInPercent":-0.2720827262393435},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"7700","percent":6.82612010425347},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"6068","percent":5.540439363780793},"2022":{"party":"Independent","totalVotes":"1124","percent":0.996436233400117},"party":"Independent","changeInPercent":-4.544003130380676},{"2022":{"party":"Shooters, Fishers and Farmers Party","totalVotes":"3108","percent":2.7552702966259464},"party":"Shooters, Fishers and Farmers Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"5224","percent":4.769817936122423},"2022":{"party":"The Greens","totalVotes":"5194","percent":4.604528288505523},"party":"GRN","changeInPercent":-0.16528964761690013},{"2019":{"party":"Liberal","totalVotes":"54589","percent":49.84295392706488},"2022":{"party":"Liberal","totalVotes":"45177","percent":40.04982181167001},"party":"LNP","changeInPercent":-9.793132115394876},{"2022":{"party":"Liberal Democrats","totalVotes":"770","percent":0.6826120104253471},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"7080","percent":6.464454630119976},"2022":{"party":"Informal","totalVotes":"8040","percent":7.127533199765962},"party":"Informal","changeInPercent":0.663078569645986},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2493","percent":2.2762549989956358},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1906","percent":1.7402896221763664},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Hunter","totalVotes":112075,"candidates":[{"2019":{"party":"The Greens","totalVotes":"7007","percent":6.252063350434976},"2022":{"party":"The Greens","totalVotes":"9562","percent":8.198717289158692},"party":"GRN","changeInPercent":1.946653938723716},{"2019":{"party":"Labor","totalVotes":"38331","percent":34.2012045505242},"2022":{"party":"Labor","totalVotes":"41514","percent":35.595225846280485},"party":"ALP","changeInPercent":1.394021295756282},{"2019":{"party":"Animal Justice Party","totalVotes":"3267","percent":2.9150122685701536},"2022":{"party":"Animal Justice Party","totalVotes":"2469","percent":2.1169873443769935},"party":"Animal Justice Party","changeInPercent":-0.7980249241931601},{"2022":{"party":"Independent","totalVotes":"6126","percent":5.252598003909868},"party":"Independent","changeInPercent":null},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1458","percent":1.250128614054944},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4407","percent":3.932188266785635},"2022":{"party":"United Australia Party","totalVotes":"4370","percent":3.7469561340329935},"party":"United Australia Party","changeInPercent":-0.1852321327526414},{"2019":{"party":"The Nationals","totalVotes":"23942","percent":21.36248048182021},"2022":{"party":"The Nationals","totalVotes":"29540","percent":25.328394553623486},"party":"LNP","changeInPercent":3.965914071803276},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"22029","percent":19.65558777604283},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"10759","percent":9.225057447611208},"party":"Pauline Hanson's One Nation","changeInPercent":-10.43053032843162},{"2019":{"party":"Informal","totalVotes":"10049","percent":8.966317198304706},"2022":{"party":"Informal","totalVotes":"8901","percent":7.631958020372466},"party":"Informal","changeInPercent":-1.3343591779322397},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2356","percent":2.102163729645327},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Socialist Equality Party","totalVotes":"687","percent":0.6129823778719607},"party":"Socialist Equality Party","changeInPercent":null}]},{"electorate":"Kingsford Smith","totalVotes":100181,"candidates":[{"2019":{"party":"The Greens","totalVotes":"11418","percent":11.397370758926344},"2022":{"party":"The Greens","totalVotes":"16401","percent":16.073423626492094},"party":"GRN","changeInPercent":4.676052867565749},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3051","percent":2.99006252572571},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1649","percent":1.6460207025284235},"2022":{"party":"United Australia Party","totalVotes":"3388","percent":3.3203316411532957},"party":"United Australia Party","changeInPercent":1.6743109386248722},{"2019":{"party":"Liberal","totalVotes":"34380","percent":34.31788462882183},"2022":{"party":"Liberal","totalVotes":"27929","percent":27.371175444442265},"party":"LNP","changeInPercent":-6.946709184379564},{"2019":{"party":"Labor","totalVotes":"42629","percent":42.55198091454467},"2022":{"party":"Labor","totalVotes":"46697","percent":45.76432309531743},"party":"ALP","changeInPercent":3.212342180772758},{"2019":{"party":"Informal","totalVotes":"5805","percent":5.794511933400545},"2022":{"party":"Informal","totalVotes":"4572","percent":4.480683666869205},"party":"Informal","changeInPercent":-1.31382826653134},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1359","percent":1.3565446541759416},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Sustainable Australia","totalVotes":"1346","percent":1.343568141663589},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Science Party","totalVotes":"1595","percent":1.592118265938651},"party":"Science Party","changeInPercent":null}]},{"electorate":"Lindsay","totalVotes":109538,"candidates":[{"2019":{"party":"Labor","totalVotes":"34690","percent":31.669375011411567},"2022":{"party":"Labor","totalVotes":"33206","percent":29.521692745376953},"party":"ALP","changeInPercent":-2.1476822660346144},{"2019":{"party":"The Greens","totalVotes":"4781","percent":4.364695356862459},"2022":{"party":"The Greens","totalVotes":"8404","percent":7.471550497866287},"party":"GRN","changeInPercent":3.1068551410038285},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6203","percent":5.514758179231864},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2831","percent":2.584491226788877},"2022":{"party":"United Australia Party","totalVotes":"4272","percent":3.79800853485064},"party":"United Australia Party","changeInPercent":1.2135173080617632},{"2019":{"party":"Liberal","totalVotes":"45247","percent":41.30712629407146},"2022":{"party":"Liberal","totalVotes":"48939","percent":43.50906827880512},"party":"LNP","changeInPercent":2.201941984733658},{"2022":{"party":"Liberal Democrats","totalVotes":"1627","percent":1.446479374110953},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Informed Medical Options Party","totalVotes":"2075","percent":1.84477240398293},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"12135","percent":11.078347240227137},"2022":{"party":"Informal","totalVotes":"7754","percent":6.893669985775248},"party":"Informal","changeInPercent":-4.184677254451889},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2374","percent":2.167284412715222},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2785","percent":2.5424966678230385},"party":"Independent","changeInPercent":null},{"2019":{"party":"Sustainable Australia","totalVotes":"1326","percent":1.2105388084500357},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1997","percent":1.8231116142343295},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Australia First Party","totalVotes":"1372","percent":1.2525333674158738},"party":"Australia First Party","changeInPercent":null}]},{"electorate":"Lyne","totalVotes":111276,"candidates":[{"2019":{"party":"Independent","totalVotes":"5169","percent":4.645206513533916},"2022":{"party":"Independent","totalVotes":"3820","percent":3.327207323340098},"party":"Independent","changeInPercent":-1.317999190193818},{"2019":{"party":"United Australia Party","totalVotes":"4098","percent":3.682734821524857},"2022":{"party":"United Australia Party","totalVotes":"4421","percent":3.850676328923187},"party":"United Australia Party","changeInPercent":0.16794150739832991},{"2019":{"party":"The Nationals","totalVotes":"49934","percent":44.874006973651106},"2022":{"party":"The Nationals","totalVotes":"46661","percent":40.64157615559485},"party":"LNP","changeInPercent":-4.232430818056258},{"2019":{"party":"Labor","totalVotes":"24371","percent":21.90139832488587},"2022":{"party":"Labor","totalVotes":"23024","percent":20.05382759491686},"party":"ALP","changeInPercent":-1.8475707299690107},{"2019":{"party":"Liberal Democrats","totalVotes":"5864","percent":5.269779647003847},"2022":{"party":"Liberal Democrats","totalVotes":"6824","percent":5.943681354574039},"party":"Liberal Democrats","changeInPercent":0.6739017075701925},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"8502","percent":7.405213786135474},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"6589","percent":5.92131277184658},"2022":{"party":"The Greens","totalVotes":"8422","percent":7.335534051615264},"party":"GRN","changeInPercent":1.4142212797686842},{"2019":{"party":"Informal","totalVotes":"10096","percent":9.072935763327223},"2022":{"party":"Informal","totalVotes":"7563","percent":6.587347902204492},"party":"Informal","changeInPercent":-2.485587861122731},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1986","percent":1.7847514288795427},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Australian Workers Party","totalVotes":"1676","percent":1.506164851360581},"party":"Australian Workers Party","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1493","percent":1.341708903986484},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Macarthur","totalVotes":109167,"candidates":[{"2019":{"party":"The Greens","totalVotes":"4397","percent":4.027773960995539},"2022":{"party":"The Greens","totalVotes":"8584","percent":7.16689070157715},"party":"GRN","changeInPercent":3.1391167405816107},{"2019":{"party":"Liberal","totalVotes":"30696","percent":28.118387424771225},"2022":{"party":"Liberal","totalVotes":"33867","percent":28.275988745376672},"party":"LNP","changeInPercent":0.15760132060544763},{"2019":{"party":"Labor","totalVotes":"47539","percent":43.54704260445006},"2022":{"party":"Labor","totalVotes":"51001","percent":42.58138311639518},"party":"ALP","changeInPercent":-0.9656594880548823},{"2019":{"party":"United Australia Party","totalVotes":"2506","percent":2.2955655097236347},"2022":{"party":"United Australia Party","totalVotes":"6602","percent":5.5120937106025565},"party":"United Australia Party","changeInPercent":3.2165282008789218},{"2022":{"party":"Liberal Democrats","totalVotes":"2197","percent":1.8343032235979728},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"8555","percent":7.836617292771625},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"8876","percent":7.4106852128609955},"party":"Pauline Hanson's One Nation","changeInPercent":-0.42593207991062965},{"2019":{"party":"Informal","totalVotes":"9663","percent":8.851576025722059},"2022":{"party":"Informal","totalVotes":"8646","percent":7.218655289589473},"party":"Informal","changeInPercent":-1.6329207361325855},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"3705","percent":3.393882766770178},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"2106","percent":1.92915441479568},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Mackellar","totalVotes":103119,"candidates":[{"2022":{"party":"TNL","totalVotes":"575","percent":0.5589307411907655},"party":"TNL","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2624","percent":2.5506682867557715},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"11975","percent":11.612796865757039},"2022":{"party":"Independent","totalVotes":"37724","percent":36.66974483596598},"party":"Independent","changeInPercent":25.056947970208938},{"2019":{"party":"Labor","totalVotes":"16648","percent":16.14445446522949},"2022":{"party":"Labor","totalVotes":"8162","percent":7.933900364520048},"party":"ALP","changeInPercent":-8.210554100709441},{"2019":{"party":"Liberal","totalVotes":"52088","percent":50.51251466752005},"2022":{"party":"Liberal","totalVotes":"40993","percent":39.84738760631835},"party":"LNP","changeInPercent":-10.665127061201702},{"2019":{"party":"United Australia Party","totalVotes":"2317","percent":2.2469186085978334},"2022":{"party":"United Australia Party","totalVotes":"2881","percent":2.80048602673147},"party":"United Australia Party","changeInPercent":0.5535674181336367},{"2019":{"party":"The Greens","totalVotes":"11283","percent":10.941727518691996},"2022":{"party":"The Greens","totalVotes":"6032","percent":5.863426488456866},"party":"GRN","changeInPercent":-5.078301030235131},{"2019":{"party":"Informal","totalVotes":"4857","percent":4.7100922235475515},"2022":{"party":"Informal","totalVotes":"3884","percent":3.7754556500607537},"party":"Informal","changeInPercent":-0.9346365734867979},{"2019":{"party":"Sustainable Australia","totalVotes":"2550","percent":2.4728711488668433},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1401","percent":1.3586245017891951},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Macquarie","totalVotes":101289,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4955","percent":4.9280436014997955},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"37106","percent":36.63379044121277},"2022":{"party":"Labor","totalVotes":"41025","percent":40.80181407699882},"party":"ALP","changeInPercent":4.168023635786049},{"2019":{"party":"United Australia Party","totalVotes":"3877","percent":3.827661443987007},"2022":{"party":"United Australia Party","totalVotes":"2774","percent":2.7589087690333876},"party":"United Australia Party","changeInPercent":-1.0687526749536196},{"2022":{"party":"Liberal Democrats","totalVotes":"1272","percent":1.265080012332541},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"3611","percent":3.5650465499708752},"2022":{"party":"Animal Justice Party","totalVotes":"2013","percent":2.0020487931017334},"party":"Animal Justice Party","changeInPercent":-1.5629977568691418},{"2019":{"party":"The Greens","totalVotes":"8870","percent":8.757120713996585},"2022":{"party":"The Greens","totalVotes":"9115","percent":9.065412195291755},"party":"GRN","changeInPercent":0.3082914812951696},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1318","percent":1.310829761206202},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"43487","percent":42.93358607548697},"2022":{"party":"Liberal","totalVotes":"32980","percent":32.800580822898745},"party":"LNP","changeInPercent":-10.133005252588227},{"2019":{"party":"Informal","totalVotes":"4338","percent":4.282794775345793},"2022":{"party":"Informal","totalVotes":"5095","percent":5.067281967637025},"party":"Informal","changeInPercent":0.7844871922912322}]},{"electorate":"McMahon","totalVotes":97124,"candidates":[{"2019":{"party":"Labor","totalVotes":"39351","percent":40.516247271529174},"2022":{"party":"Labor","totalVotes":"40657","percent":42.887583202354456},"party":"ALP","changeInPercent":2.371335930825282},{"2019":{"party":"United Australia Party","totalVotes":"3329","percent":3.427577117911124},"2022":{"party":"United Australia Party","totalVotes":"7723","percent":8.14671040833764},"party":"United Australia Party","changeInPercent":4.719133290426516},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7046","percent":7.254643548453524},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4612","percent":4.865030221837783},"party":"Pauline Hanson's One Nation","changeInPercent":-2.3896133266157413},{"2019":{"party":"Liberal","totalVotes":"28441","percent":29.28318438285079},"2022":{"party":"Liberal","totalVotes":"24006","percent":25.32305193092754},"party":"LNP","changeInPercent":-3.9601324519232506},{"2019":{"party":"The Greens","totalVotes":"4218","percent":4.342901857419382},"2022":{"party":"The Greens","totalVotes":"4922","percent":5.192037890695049},"party":"GRN","changeInPercent":0.8491360332756672},{"2022":{"party":"Liberal Democrats","totalVotes":"2822","percent":2.976824650049051},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"11731","percent":12.078374037313125},"2022":{"party":"Informal","totalVotes":"10057","percent":10.608761695798478},"party":"Informal","changeInPercent":-1.4696123415146474},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"3008","percent":3.097071784522878},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Mitchell","totalVotes":103870,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"3708","percent":3.2812997769990444},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2705","percent":2.60421680947338},"2022":{"party":"United Australia Party","totalVotes":"3916","percent":3.4653640579094542},"party":"United Australia Party","changeInPercent":0.8611472484360743},{"2019":{"party":"The Greens","totalVotes":"7955","percent":7.658611726196208},"2022":{"party":"The Greens","totalVotes":"12796","percent":11.323492973700047},"party":"GRN","changeInPercent":3.664881247503839},{"2019":{"party":"Labor","totalVotes":"23618","percent":22.738037932030423},"2022":{"party":"Labor","totalVotes":"27597","percent":24.421259424445154},"party":"ALP","changeInPercent":1.6832214924147308},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3258","percent":2.8830837846447914},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"61202","percent":58.921729084432464},"2022":{"party":"Liberal","totalVotes":"56918","percent":50.368128561820825},"party":"LNP","changeInPercent":-8.553600522611639},{"2019":{"party":"Informal","totalVotes":"5234","percent":5.038991046500433},"2022":{"party":"Informal","totalVotes":"4811","percent":4.25737142048069},"party":"Informal","changeInPercent":-0.7816196260197428},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"3156","percent":3.0384134013670936},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"New England","totalVotes":104440,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"3174","percent":3.058805389048436},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4459","percent":4.269436997319035},"2022":{"party":"United Australia Party","totalVotes":"2545","percent":2.452633810689436},"party":"United Australia Party","changeInPercent":-1.816803186629599},{"2019":{"party":"Independent","totalVotes":"3071","percent":2.9404442742244354},"2022":{"party":"Independent","totalVotes":"2708","percent":2.609718019389781},"party":"Independent","changeInPercent":-0.33072625483465456},{"2019":{"party":"The Nationals","totalVotes":"53348","percent":51.08004595940253},"2022":{"party":"The Nationals","totalVotes":"51036","percent":49.18374033883931},"party":"LNP","changeInPercent":-1.8963056205632256},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4570","percent":4.404140084420716},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"4311","percent":4.127728839525086},"2022":{"party":"The Greens","totalVotes":"7524","percent":7.250929977063778},"party":"GRN","changeInPercent":3.1232011375386914},{"2019":{"party":"Labor","totalVotes":"12410","percent":11.882420528533128},"2022":{"party":"Labor","totalVotes":"18056","percent":17.40069001407012},"party":"ALP","changeInPercent":5.51826948553699},{"2019":{"party":"Informal","totalVotes":"7120","percent":6.8173113749521255},"2022":{"party":"Informal","totalVotes":"6494","percent":6.258311971165892},"party":"Informal","changeInPercent":-0.5589994037862338},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2215","percent":2.1208349291459214},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Newcastle","totalVotes":109081,"candidates":[{"2022":{"party":"Australian Federation Party","totalVotes":"1102","percent":0.9868804012000179},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"16038","percent":14.702835507558603},"2022":{"party":"The Greens","totalVotes":"21195","percent":18.98088031164644},"party":"GRN","changeInPercent":4.278044804087838},{"2019":{"party":"United Australia Party","totalVotes":"3471","percent":3.1820390352123655},"2022":{"party":"United Australia Party","totalVotes":"2517","percent":2.2540634934849773},"party":"United Australia Party","changeInPercent":-0.9279755417273883},{"2019":{"party":"Labor","totalVotes":"47137","percent":43.212841833133176},"2022":{"party":"Labor","totalVotes":"46551","percent":41.688084896789505},"party":"ALP","changeInPercent":-1.524756936343671},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1140","percent":1.0209107598620875},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"30107","percent":27.60059038696015},"2022":{"party":"Liberal","totalVotes":"25816","percent":23.119151032104956},"party":"LNP","changeInPercent":-4.481439354855194},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4757","percent":4.260063583038553},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"3300","percent":3.025274795793951},"2022":{"party":"Animal Justice Party","totalVotes":"2549","percent":2.282720637621457},"party":"Animal Justice Party","changeInPercent":-0.7425541581724944},{"2019":{"party":"Informal","totalVotes":"6014","percent":5.513334127849946},"2022":{"party":"Informal","totalVotes":"6038","percent":5.407244884252004},"party":"Informal","changeInPercent":-0.10608924359794258},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1928","percent":1.767493880694163},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"The Great Australian Party","totalVotes":"1086","percent":0.9955904327976458},"party":"The Great Australian Party","changeInPercent":null}]},{"electorate":"North Sydney","totalVotes":100913,"candidates":[{"2022":{"party":"Sustainable Australia Party - Stop Overdevelopment / Corruption","totalVotes":"1163","percent":1.137341574088562},"party":"Sustainable Australia Party - Stop Overdevelopment / Corruption","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1249","percent":1.237699800818527},"2022":{"party":"United Australia Party","totalVotes":"1730","percent":1.6918322641214205},"party":"United Australia Party","changeInPercent":0.4541324633028936},{"2019":{"party":"The Greens","totalVotes":"13193","percent":13.073637687909386},"2022":{"party":"The Greens","totalVotes":"8308","percent":8.124706618682524},"party":"GRN","changeInPercent":-4.948931069226862},{"2022":{"party":"TNL","totalVotes":"886","percent":0.8664528242841496},"party":"TNL","changeInPercent":null},{"2022":{"party":"Informed Medical Options Party","totalVotes":"491","percent":0.48016742293850734},"party":"Informed Medical Options Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1123","percent":1.098224065091535},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"50319","percent":49.863744017123665},"2022":{"party":"Liberal","totalVotes":"36956","percent":36.14066656235331},"party":"LNP","changeInPercent":-13.723077454770355},{"2019":{"party":"Independent","totalVotes":"4295","percent":4.256141428755463},"2022":{"party":"Independent","totalVotes":"24477","percent":23.93698169300579},"party":"Independent","changeInPercent":19.680840264250328},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1149","percent":1.1236504459396026},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"24289","percent":24.06924776787926},"2022":{"party":"Labor","totalVotes":"20835","percent":20.375332498826474},"party":"ALP","changeInPercent":-3.6939152690527877},{"2019":{"party":"Informal","totalVotes":"4077","percent":4.0401137613587945},"2022":{"party":"Informal","totalVotes":"5138","percent":5.024644030668127},"party":"Informal","changeInPercent":0.9845302693093325},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1660","percent":1.6449813205434385},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Sustainable Australia","totalVotes":"1831","percent":1.8144342156114674},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Page","totalVotes":113548,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"3896","percent":3.465945484307167},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5621","percent":5.000533769838446},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"12634","percent":11.126572022404622},"2022":{"party":"The Greens","totalVotes":"8863","percent":7.88467013023984},"party":"GRN","changeInPercent":-3.2419018921647815},{"2022":{"party":"Australian Federation Party","totalVotes":"816","percent":0.7259269802861007},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"28507","percent":25.105682178461976},"2022":{"party":"Labor","totalVotes":"19531","percent":17.375097857803716},"party":"ALP","changeInPercent":-7.730584320658259},{"2022":{"party":"Indigenous - Aboriginal Party of Australia","totalVotes":"1733","percent":1.5417052167105543},"party":"Indigenous - Aboriginal Party of Australia","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3460","percent":3.04716947898686},"2022":{"party":"United Australia Party","totalVotes":"2431","percent":2.1626574621023416},"party":"United Australia Party","changeInPercent":-0.8845120168845186},{"2019":{"party":"The Nationals","totalVotes":"53672","percent":47.26811568675802},"2022":{"party":"The Nationals","totalVotes":"47701","percent":42.43559177282756},"party":"LNP","changeInPercent":-4.832523913930466},{"2019":{"party":"Independent","totalVotes":"5240","percent":4.614788459506112},"2022":{"party":"Independent","totalVotes":"13734","percent":12.217991602021208},"party":"Independent","changeInPercent":7.603203142515095},{"2022":{"party":"TNL","totalVotes":"243","percent":0.21617678457049322},"party":"TNL","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"5397","percent":4.753055976327191},"2022":{"party":"Informal","totalVotes":"7839","percent":6.9737029392925765},"party":"Informal","changeInPercent":2.220646962965385},{"2019":{"party":"Animal Justice Party","totalVotes":"2646","percent":2.330292035086483},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1992","percent":1.7543241624687358},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Parkes","totalVotes":99799,"candidates":[{"2022":{"party":"Indigenous - Aboriginal Party of Australia","totalVotes":"4466","percent":4.627931316773919},"party":"Indigenous - Aboriginal Party of Australia","changeInPercent":null},{"2019":{"party":"Liberal Democrats","totalVotes":"7568","percent":7.583242317057286},"2022":{"party":"Liberal Democrats","totalVotes":"5723","percent":5.930508492139977},"party":"Liberal Democrats","changeInPercent":-1.6527338249173082},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6662","percent":6.903555403570947},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Nationals","totalVotes":"47692","percent":47.78805398851692},"2022":{"party":"The Nationals","totalVotes":"43931","percent":45.523880581548376},"party":"LNP","changeInPercent":-2.2641734069685455},{"2019":{"party":"United Australia Party","totalVotes":"5906","percent":5.917894968887464},"2022":{"party":"United Australia Party","totalVotes":"2372","percent":2.4580056165221085},"party":"United Australia Party","changeInPercent":-3.4598893523653556},{"2019":{"party":"Independent","totalVotes":"6730","percent":6.743554544634716},"2022":{"party":"Independent","totalVotes":"2191","percent":2.2704427933389293},"party":"Independent","changeInPercent":-4.473111751295786},{"2019":{"party":"Labor","totalVotes":"22135","percent":22.17958095772503},"2022":{"party":"Labor","totalVotes":"18009","percent":18.661982777380544},"party":"ALP","changeInPercent":-3.5175981803444856},{"2019":{"party":"The Greens","totalVotes":"3921","percent":3.9288970831371053},"2022":{"party":"The Greens","totalVotes":"4214","percent":4.366794126485736},"party":"GRN","changeInPercent":0.4378970433486309},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1512","percent":1.5668231417291012},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"5847","percent":5.858776140041484},"2022":{"party":"Informal","totalVotes":"7421","percent":7.690075750510357},"party":"Informal","changeInPercent":1.8312996104688732}]},{"electorate":"Parramatta","totalVotes":92409,"candidates":[{"2022":{"party":"Animal Justice Party","totalVotes":"2397","percent":2.5906791751329385},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"34954","percent":37.8253200445844},"2022":{"party":"Liberal","totalVotes":"29492","percent":31.874972979983575},"party":"LNP","changeInPercent":-5.950347064600827},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2011","percent":2.1734901214819935},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1310","percent":1.4158488608361073},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2186","percent":2.3655704530943957},"2022":{"party":"United Australia Party","totalVotes":"4269","percent":4.613938005274307},"party":"United Australia Party","changeInPercent":2.2483675521799116},{"2019":{"party":"The Greens","totalVotes":"6131","percent":6.63463515458451},"2022":{"party":"The Greens","totalVotes":"7546","percent":8.155721758678828},"party":"GRN","changeInPercent":1.521086604094318},{"2019":{"party":"Labor","totalVotes":"38171","percent":41.30658269216202},"2022":{"party":"Labor","totalVotes":"34258","percent":37.0260689118499},"party":"ALP","changeInPercent":-4.28051378031212},{"2022":{"party":"Independent","totalVotes":"2982","percent":3.222947559552116},"party":"Independent","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"7739","percent":8.374725405534093},"2022":{"party":"Informal","totalVotes":"8259","percent":8.926332627210238},"party":"Informal","changeInPercent":0.5516072216761447},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2526","percent":2.733499983767815},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Socialist Equality Party","totalVotes":"702","percent":0.7596662662727657},"party":"Socialist Equality Party","changeInPercent":null}]},{"electorate":"Paterson","totalVotes":114513,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"15269","percent":13.333857291311904},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"9363","percent":7.7362902492832175},"party":"Pauline Hanson's One Nation","changeInPercent":-5.597567042028687},{"2019":{"party":"Liberal","totalVotes":"35059","percent":30.61573795114965},"2022":{"party":"Liberal","totalVotes":"42142","percent":34.820329347996726},"party":"LNP","changeInPercent":4.204591396847075},{"2019":{"party":"Labor","totalVotes":"44288","percent":38.67508492485569},"2022":{"party":"Labor","totalVotes":"46725","percent":38.60708767465111},"party":"ALP","changeInPercent":-0.06799725020457714},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1883","percent":1.5558511737050411},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"7439","percent":6.496205670971856},"2022":{"party":"The Greens","totalVotes":"8677","percent":7.169474580052385},"party":"GRN","changeInPercent":0.6732689090805293},{"2022":{"party":"Liberal Democrats","totalVotes":"1621","percent":1.3393705536781049},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3888","percent":3.395247701134369},"2022":{"party":"United Australia Party","totalVotes":"4474","percent":3.6966957786279093},"party":"United Australia Party","changeInPercent":0.3014480774935402},{"2019":{"party":"Informal","totalVotes":"6694","percent":5.845624514247291},"2022":{"party":"Informal","totalVotes":"6142","percent":5.074900642005503},"party":"Informal","changeInPercent":-0.7707238722417875},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1876","percent":1.638241946329238},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Reid","totalVotes":99847,"candidates":[{"2019":{"party":"Labor","totalVotes":"34872","percent":34.92543591695294},"2022":{"party":"Labor","totalVotes":"40768","percent":38.90967397113843},"party":"ALP","changeInPercent":3.9842380541854894},{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"1553","percent":1.4822096663358022},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1997","percent":1.905970833015194},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Independent","totalVotes":"2994","percent":2.8575246239596854},"party":"Independent","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1824","percent":1.7408566847369626},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"45288","percent":45.35739681713021},"2022":{"party":"Liberal","totalVotes":"37126","percent":35.43368710391693},"party":"LNP","changeInPercent":-9.923709713213277},{"2019":{"party":"United Australia Party","totalVotes":"1797","percent":1.7997536230432563},"2022":{"party":"United Australia Party","totalVotes":"2530","percent":2.4146751164388793},"party":"United Australia Party","changeInPercent":0.6149214933956231},{"2019":{"party":"The Greens","totalVotes":"7575","percent":7.58660750948952},"2022":{"party":"The Greens","totalVotes":"9184","percent":8.76536611437734},"party":"GRN","changeInPercent":1.17875860488782},{"2019":{"party":"Informal","totalVotes":"6119","percent":6.128376415916352},"2022":{"party":"Informal","totalVotes":"6800","percent":6.490035886080782},"party":"Informal","changeInPercent":0.36165947016442956},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2335","percent":2.338578024377297},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"1861","percent":1.8638516930904285},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Richmond","totalVotes":108381,"candidates":[{"2019":{"party":"Independent","totalVotes":"1566","percent":1.4449027043485483},"2022":{"party":"Independent","totalVotes":"1274","percent":1.1883441534213863},"party":"Independent","changeInPercent":-0.25655855092716195},{"2022":{"party":"Informed Medical Options Party","totalVotes":"2271","percent":2.1183120662637114},"party":"Informed Medical Options Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"7681","percent":7.164577270352959},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"31807","percent":29.347394838578715},"2022":{"party":"Labor","totalVotes":"28733","percent":26.801171554361613},"party":"ALP","changeInPercent":-2.5462232842171026},{"2019":{"party":"The Nationals","totalVotes":"36979","percent":34.11944898090994},"2022":{"party":"The Nationals","totalVotes":"23299","percent":21.732519961196925},"party":"LNP","changeInPercent":-12.386929019713012},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4073","percent":3.7991567793448247},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"20384","percent":18.807724601175483},"2022":{"party":"The Greens","totalVotes":"25216","percent":23.52063278859787},"party":"GRN","changeInPercent":4.712908187422386},{"2019":{"party":"United Australia Party","totalVotes":"3913","percent":3.6104114189756507},"2022":{"party":"United Australia Party","totalVotes":"2922","percent":2.7255428699350794},"party":"United Australia Party","changeInPercent":-0.8848685490405712},{"2019":{"party":"Informal","totalVotes":"8061","percent":7.4376505106983695},"2022":{"party":"Informal","totalVotes":"7424","percent":6.924856354003432},"party":"Informal","changeInPercent":-0.5127941566949374},{"2019":{"party":"Sustainable Australia","totalVotes":"3154","percent":2.9101041695500136},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1338","percent":1.234533728236499},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Involuntary Medication Objectors (Vaccination/Fluoride) Party","totalVotes":"1179","percent":1.0878290475267804},"party":"Involuntary Medication Objectors (Vaccination/Fluoride) Party","changeInPercent":null}]},{"electorate":"Riverina","totalVotes":106430,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"8042","percent":7.554152811437374},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"23380","percent":21.96749036925679},"2022":{"party":"Labor","totalVotes":"20193","percent":18.968043735557686},"party":"ALP","changeInPercent":-2.9994466336991046},{"2019":{"party":"United Australia Party","totalVotes":"10814","percent":10.160668984308934},"2022":{"party":"United Australia Party","totalVotes":"2585","percent":2.428187642074809},"party":"United Australia Party","changeInPercent":-7.732481342234125},{"2022":{"party":"Shooters, Fishers and Farmers Party","totalVotes":"6280","percent":5.899039996994119},"party":"Shooters, Fishers and Farmers Party","changeInPercent":null},{"2019":{"party":"The Nationals","totalVotes":"60493","percent":56.838297472517155},"2022":{"party":"The Nationals","totalVotes":"45951","percent":43.16350109902497},"party":"LNP","changeInPercent":-13.674796373492185},{"2022":{"party":"Independent","totalVotes":"2701","percent":2.537150801254955},"party":"Independent","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"6563","percent":6.16487253189051},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"6254","percent":5.876162736070657},"2022":{"party":"The Greens","totalVotes":"6349","percent":5.963854289954724},"party":"GRN","changeInPercent":0.08769155388406702},{"2019":{"party":"Informal","totalVotes":"5489","percent":5.157380437846472},"2022":{"party":"Informal","totalVotes":"7794","percent":7.321197091810855},"party":"Informal","changeInPercent":2.163816653964383}]},{"electorate":"Robertson","totalVotes":103554,"candidates":[{"2019":{"party":"Animal Justice Party","totalVotes":"2000","percent":1.931359483940746},"2022":{"party":"Animal Justice Party","totalVotes":"1949","percent":1.9017602747745987},"party":"Animal Justice Party","changeInPercent":-0.029599209166147222},{"2019":{"party":"Labor","totalVotes":"32761","percent":31.63663402669139},"2022":{"party":"Labor","totalVotes":"36231","percent":35.35283556457593},"party":"ALP","changeInPercent":3.716201537884544},{"2022":{"party":"Citizens Party","totalVotes":"272","percent":0.2654072830880918},"party":"Citizens Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"45011","percent":43.46621086582846},"2022":{"party":"Liberal","totalVotes":"38448","percent":37.51610007415792},"party":"LNP","changeInPercent":-5.950110791670539},{"2019":{"party":"United Australia Party","totalVotes":"2702","percent":2.609266662803948},"2022":{"party":"United Australia Party","totalVotes":"2792","percent":2.724327699933648},"party":"United Australia Party","changeInPercent":0.11506103712970006},{"2022":{"party":"Liberal Democrats","totalVotes":"736","percent":0.7181608836501308},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Indigenous - Aboriginal Party of Australia","totalVotes":"1127","percent":1.0996838530892628},"party":"Indigenous - Aboriginal Party of Australia","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3679","percent":3.589828656180477},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1114","percent":1.0869989461769642},"party":"Informed Medical Options Party","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"220","percent":0.2146676554388978},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"7601","percent":7.340131718716806},"2022":{"party":"The Greens","totalVotes":"9642","percent":9.408297880644783},"party":"GRN","changeInPercent":2.0681661619279774},{"2019":{"party":"Informal","totalVotes":"7493","percent":7.235838306584004},"2022":{"party":"Informal","totalVotes":"6274","percent":6.121931228289293},"party":"Informal","changeInPercent":-1.1139070782947105},{"2019":{"party":"Sustainable Australia","totalVotes":"1719","percent":1.6600034764470712},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"1352","percent":1.3055990111439442},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2915","percent":2.8149564478436373},"party":"Independent","changeInPercent":null}]},{"electorate":"Shortland","totalVotes":106827,"candidates":[{"2019":{"party":"Animal Justice Party","totalVotes":"3596","percent":3.366190195362596},"2022":{"party":"Animal Justice Party","totalVotes":"2979","percent":2.790214113107169},"party":"Animal Justice Party","changeInPercent":-0.5759760822554267},{"2022":{"party":"Independent","totalVotes":"2554","percent":2.392147312814941},"party":"Independent","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"2984","percent":2.7948972519341364},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"37363","percent":34.97524034186114},"2022":{"party":"Liberal","totalVotes":"32215","percent":30.173463462150874},"party":"LNP","changeInPercent":-4.801776879710264},{"2019":{"party":"Labor","totalVotes":"41126","percent":38.49775805741994},"2022":{"party":"Labor","totalVotes":"40135","percent":37.59155536406721},"party":"ALP","changeInPercent":-0.906202693352725},{"2019":{"party":"United Australia Party","totalVotes":"4532","percent":4.242373182809589},"2022":{"party":"United Australia Party","totalVotes":"3125","percent":2.9269617668546166},"party":"United Australia Party","changeInPercent":-1.3154114159549728},{"2019":{"party":"The Greens","totalVotes":"8256","percent":7.728383273891431},"2022":{"party":"The Greens","totalVotes":"9910","percent":9.28198115504936},"party":"GRN","changeInPercent":1.5535978811579287},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6397","percent":5.991607815222075},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"6847","percent":6.409428328044409},"2022":{"party":"Informal","totalVotes":"6467","percent":6.057171758799617},"party":"Informal","changeInPercent":-0.35225656924479143},{"2019":{"party":"Sustainable Australia","totalVotes":"3097","percent":2.8990798206445936},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"2010","percent":1.8815467999663007},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Sydney","totalVotes":98569,"candidates":[{"2022":{"party":"Socialist Alliance","totalVotes":"1518","percent":1.4236944777911165},"party":"Socialist Alliance","changeInPercent":null},{"2019":{"party":"Labor","totalVotes":"46850","percent":47.53015654008867},"2022":{"party":"Labor","totalVotes":"52410","percent":49.15403661464586},"party":"ALP","changeInPercent":1.6238800745571922},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1889","percent":1.7716461584633854},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"17134","percent":17.38274711116071},"2022":{"party":"The Greens","totalVotes":"23732","percent":22.257653061224488},"party":"GRN","changeInPercent":4.874905950063777},{"2022":{"party":"Citizens Party","totalVotes":"1002","percent":0.9397509003601441},"party":"Citizens Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1366","percent":1.3858312451176333},"2022":{"party":"United Australia Party","totalVotes":"2298","percent":2.1552370948379354},"party":"United Australia Party","changeInPercent":0.769405849720302},{"2019":{"party":"Liberal","totalVotes":"25230","percent":25.596282806967707},"2022":{"party":"Liberal","totalVotes":"20276","percent":19.016356542617046},"party":"LNP","changeInPercent":-6.579926264350661},{"2019":{"party":"Informal","totalVotes":"3754","percent":3.808499629701022},"2022":{"party":"Informal","totalVotes":"3499","percent":3.281625150060024},"party":"Informal","changeInPercent":-0.5268744796409979},{"2019":{"party":"Science Party","totalVotes":"3240","percent":3.28703750672118},"party":"Science Party","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"995","percent":1.0094451602430785},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Warringah","totalVotes":97020,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1980","percent":2.0590039828208355},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1111","percent":1.145124716553288},"2022":{"party":"Independent","totalVotes":"41832","percent":43.50113869159656},"party":"Independent","changeInPercent":42.35601397504327},{"2019":{"party":"United Australia Party","totalVotes":"625","percent":0.6441970727685014},"2022":{"party":"United Australia Party","totalVotes":"2202","percent":2.289862005137111},"party":"United Australia Party","changeInPercent":1.6456649323686097},{"2019":{"party":"The Greens","totalVotes":"5647","percent":5.820449391877963},"2022":{"party":"The Greens","totalVotes":"6910","percent":7.185715919844431},"party":"GRN","changeInPercent":1.365266527966468},{"2019":{"party":"Liberal","totalVotes":"35935","percent":37.03875489589775},"2022":{"party":"Liberal","totalVotes":"31129","percent":32.371078273348374},"party":"LNP","changeInPercent":-4.667676622549379},{"2019":{"party":"Labor","totalVotes":"6091","percent":6.278086992372707},"2022":{"party":"Labor","totalVotes":"7806","percent":8.11746721712093},"party":"ALP","changeInPercent":1.8393802247482238},{"2019":{"party":"Animal Justice Party","totalVotes":"1291","percent":1.3306534735106164},"2022":{"party":"Animal Justice Party","totalVotes":"1475","percent":1.53385397710138},"party":"Animal Justice Party","changeInPercent":0.20320050359076358},{"2019":{"party":"Informal","totalVotes":"4897","percent":5.047412904555762},"2022":{"party":"Informal","totalVotes":"2829","percent":2.9418799330303758},"party":"Informal","changeInPercent":-2.1055329715253865},{"2019":{"party":"Sustainable Australia","totalVotes":"678","percent":0.6988249845392702},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"250","percent":0.25767882910740053},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"461","percent":0.4751597608740466},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Watson","totalVotes":96409,"candidates":[{"2019":{"party":"Liberal","totalVotes":"24769","percent":25.691584810546736},"2022":{"party":"Liberal","totalVotes":"22759","percent":23.96390515099187},"party":"LNP","changeInPercent":-1.727679659554866},{"2019":{"party":"United Australia Party","totalVotes":"3549","percent":3.6811915899967844},"2022":{"party":"United Australia Party","totalVotes":"6126","percent":6.450322200227436},"party":"United Australia Party","changeInPercent":2.769130610230652},{"2019":{"party":"Labor","totalVotes":"43550","percent":45.17213123256128},"2022":{"party":"Labor","totalVotes":"44464","percent":46.818009518594955},"party":"ALP","changeInPercent":1.6458782860336783},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4178","percent":4.399191340605652},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"5982","percent":6.20481490317294},"2022":{"party":"The Greens","totalVotes":"8200","percent":8.634123741734406},"party":"GRN","changeInPercent":2.4293088385614663},{"2019":{"party":"Informal","totalVotes":"12159","percent":12.611893080521527},"2022":{"party":"Informal","totalVotes":"9245","percent":9.734448047845682},"party":"Informal","changeInPercent":-2.877445032675846},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"4522","percent":4.690433465755272},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Science Party","totalVotes":"1878","percent":1.9479509174454668},"party":"Science Party","changeInPercent":null}]},{"electorate":"Wentworth","totalVotes":92525,"candidates":[{"2019":{"party":"Labor","totalVotes":"9824","percent":10.617670899756822},"2022":{"party":"Labor","totalVotes":"9654","percent":10.585526315789473},"party":"ALP","changeInPercent":-0.03214458396734976},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"895","percent":0.9813596491228069},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"6759","percent":7.305052688462578},"2022":{"party":"The Greens","totalVotes":"7410","percent":8.125},"party":"GRN","changeInPercent":0.8199473115374216},{"2019":{"party":"United Australia Party","totalVotes":"625","percent":0.6754931099702783},"2022":{"party":"United Australia Party","totalVotes":"1813","percent":1.9879385964912282},"party":"United Australia Party","changeInPercent":1.3124454865209498},{"2019":{"party":"Independent","totalVotes":"516","percent":0.5576871115914618},"2022":{"party":"Independent","totalVotes":"31810","percent":34.87938596491228},"party":"Independent","changeInPercent":34.32169885332082},{"2022":{"party":"Liberal Democrats","totalVotes":"1346","percent":1.4758771929824561},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"42575","percent":46.01459065117536},"2022":{"party":"Liberal","totalVotes":"35995","percent":39.468201754385966},"party":"LNP","changeInPercent":-6.546388896789395},{"2019":{"party":"Informal","totalVotes":"2771","percent":2.994866252364226},"2022":{"party":"Informal","totalVotes":"2277","percent":2.4967105263157894},"party":"Informal","changeInPercent":-0.4981557260484366},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"346","percent":0.37395298567954605},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null}]},{"electorate":"Werriwa","totalVotes":106553,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"8978","percent":8.045307501366574},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3957","percent":3.7136448527962616},"2022":{"party":"United Australia Party","totalVotes":"8813","percent":7.897448764707464},"party":"United Australia Party","changeInPercent":4.183803911911203},{"2019":{"party":"Labor","totalVotes":"45002","percent":42.2343810122662},"2022":{"party":"Labor","totalVotes":"40108","percent":35.94132248438522},"party":"ALP","changeInPercent":-6.29305852788098},{"2019":{"party":"The Greens","totalVotes":"5060","percent":4.748810451136993},"2022":{"party":"The Greens","totalVotes":"6772","percent":6.068480997912055},"party":"GRN","changeInPercent":1.319670546775062},{"2019":{"party":"Liberal","totalVotes":"33234","percent":31.190111963060634},"2022":{"party":"Liberal","totalVotes":"30864","percent":27.65764877725305},"party":"LNP","changeInPercent":-3.5324631858075826},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5096","percent":4.566594678877707},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"12324","percent":11.566075098777134},"2022":{"party":"Informal","totalVotes":"10962","percent":9.823196795497925},"party":"Informal","changeInPercent":-1.742878303279209},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"4841","percent":4.543278931611498},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2135","percent":2.0036976903512804},"party":"Independent","changeInPercent":null}]},{"electorate":"Whitlam","totalVotes":110691,"candidates":[{"2019":{"party":"Labor","totalVotes":"50102","percent":45.26293917301316},"2022":{"party":"Labor","totalVotes":"49218","percent":42.807939186250806},"party":"ALP","changeInPercent":-2.4549999867623526},{"2022":{"party":"Liberal Democrats","totalVotes":"4062","percent":3.5329726720823835},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"7543","percent":6.560613703967853},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Nationals","totalVotes":"26145","percent":23.619806488332383},"2022":{"party":"Liberal","totalVotes":"30849","percent":26.831283594551813},"party":"LNP","changeInPercent":3.21147710621943},{"2019":{"party":"United Australia Party","totalVotes":"9071","percent":8.194884859654353},"2022":{"party":"United Australia Party","totalVotes":"5886","percent":5.119418303268565},"party":"United Australia Party","changeInPercent":-3.0754665563857877},{"2019":{"party":"The Greens","totalVotes":"9461","percent":8.547217027581285},"2022":{"party":"The Greens","totalVotes":"11779","percent":10.24492493955155},"party":"GRN","changeInPercent":1.6977079119702658},{"2019":{"party":"Informal","totalVotes":"8020","percent":7.245394837882032},"2022":{"party":"Informal","totalVotes":"5637","percent":4.90284760032703},"party":"Informal","changeInPercent":-2.342547237555002},{"2019":{"party":"Christian Democratic Party (Fred Nile Group)","totalVotes":"4214","percent":3.8069942452412575},"party":"Christian Democratic Party (Fred Nile Group)","changeInPercent":null},{"2019":{"party":"Sustainable Australia","totalVotes":"3678","percent":3.3227633682955253},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Lingiari","totalVotes":51009,"candidates":[{"2019":{"party":"Country Liberals (NT)","totalVotes":"17875","percent":35.042835578035245},"2022":{"party":"NT CLP","totalVotes":"15893","percent":32.13368648779797},"party":"LNP","changeInPercent":-2.909149090237271},{"2019":{"party":"The Greens","totalVotes":"3991","percent":7.824109470877688},"2022":{"party":"The Greens","totalVotes":"5018","percent":10.145777310499605},"party":"GRN","changeInPercent":2.3216678396219175},{"2022":{"party":"Citizens Party","totalVotes":"497","percent":1.0048727228613599},"party":"Citizens Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1367","percent":2.6799192299398147},"2022":{"party":"United Australia Party","totalVotes":"1882","percent":3.8051719606138414},"party":"United Australia Party","changeInPercent":1.1252527306740268},{"2019":{"party":"Australian Labor Party (Northern Territory) Branch","totalVotes":"21698","percent":42.537591405438256},"2022":{"party":"A.L.P.","totalVotes":"16747","percent":33.860369194686506},"party":"ALP","changeInPercent":-8.67722221075175},{"2019":{"party":"Independent","totalVotes":"2123","percent":4.162010625575879},"2022":{"party":"Independent","totalVotes":"948","percent":1.91673911724863},"party":"Independent","changeInPercent":-2.2452715083272485},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2470","percent":4.994035463717422},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1948","percent":3.9386158232071007},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"2575","percent":5.048128761591092},"2022":{"party":"Informal","totalVotes":"3647","percent":7.373784346630543},"party":"Informal","changeInPercent":2.325655585039451},{"2019":{"party":"Rise Up Australia Party","totalVotes":"1380","percent":2.705404928542022},"party":"Rise Up Australia Party","changeInPercent":null}]},{"electorate":"Solomon","totalVotes":57602,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"5839","percent":10.219476337160458},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"6521","percent":11.3207874726572},"2022":{"party":"The Greens","totalVotes":"8164","percent":14.28871464575749},"party":"GRN","changeInPercent":2.967927173100291},{"2019":{"party":"Australian Labor Party (Northern Territory) Branch","totalVotes":"22057","percent":38.29207319190306},"2022":{"party":"A.L.P.","totalVotes":"21775","percent":38.11082329879586},"party":"ALP","changeInPercent":-0.18124989310719997},{"2019":{"party":"Country Liberals (NT)","totalVotes":"20962","percent":36.39109753133572},"2022":{"party":"NT CLP","totalVotes":"13771","percent":24.10214225707085},"party":"LNP","changeInPercent":-12.288955274264868},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2948","percent":5.1596191542985155},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1583","percent":2.7481684663726953},"2022":{"party":"United Australia Party","totalVotes":"2628","percent":4.599551946233548},"party":"United Australia Party","changeInPercent":1.851383479860853},{"2019":{"party":"Informal","totalVotes":"2518","percent":4.371375993889101},"2022":{"party":"Informal","totalVotes":"2011","percent":3.519672360683282},"party":"Informal","changeInPercent":-0.8517036332058194},{"2019":{"party":"Rise Up Australia Party","totalVotes":"1277","percent":2.216936911912781},"party":"Rise Up Australia Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2684","percent":4.659560431929447},"party":"Independent","changeInPercent":null}]},{"electorate":"Blair","totalVotes":103690,"candidates":[{"2019":{"party":"The Greens","totalVotes":"8325","percent":8.028739512006943},"2022":{"party":"Queensland Greens","totalVotes":"13113","percent":11.912353854958711},"party":"GRN","changeInPercent":3.883614342951768},{"2022":{"party":"Liberal Democrats","totalVotes":"3080","percent":2.7979905340709856},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3261","percent":3.144951297135693},"2022":{"party":"United Australia Party","totalVotes":"6353","percent":5.771309695763952},"party":"United Australia Party","changeInPercent":2.6263583986282586},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"16114","percent":15.540553573150737},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"10419","percent":9.465020576131687},"party":"Pauline Hanson's One Nation","changeInPercent":-6.0755329970190495},{"2019":{"party":"Australian Labor Party","totalVotes":"29987","percent":28.91985726685312},"2022":{"party":"Australian Labor Party","totalVotes":"36494","percent":33.152554074800825},"party":"ALP","changeInPercent":4.232696807947704},{"2022":{"party":"Australian Values Party","totalVotes":"2103","percent":1.9104461341400265},"party":"Australian Values Party","changeInPercent":null},{"2022":{"party":"Animal Justice Party","totalVotes":"2563","percent":2.3283278372804985},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"27844","percent":26.853119876555116},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"30122","percent":27.3639840478202},"party":"LNP","changeInPercent":0.5108641712650837},{"2019":{"party":"Informal","totalVotes":"7765","percent":7.488668145433504},"2022":{"party":"Informal","totalVotes":"5832","percent":5.298013245033113},"party":"Informal","changeInPercent":-2.190654900400391},{"2019":{"party":"Independent","totalVotes":"3849","percent":3.7120262320378052},"party":"Independent","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2009","percent":1.9375060275822162},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Labour DLP","totalVotes":"2418","percent":2.3319510078117465},"party":"Labour DLP","changeInPercent":null}]},{"electorate":"Bonner","totalVotes":97027,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"46616","percent":48.04435878672947},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"43191","percent":43.6974534859016},"party":"LNP","changeInPercent":-4.346905300827871},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"3771","percent":3.886547043606419},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5371","percent":5.43397982618549},"party":"Pauline Hanson's One Nation","changeInPercent":1.5474327825790706},{"2019":{"party":"United Australia Party","totalVotes":"2394","percent":2.467354447731044},"2022":{"party":"United Australia Party","totalVotes":"3177","percent":3.214253194524539},"party":"United Australia Party","changeInPercent":0.7468987467934949},{"2019":{"party":"Australian Labor Party","totalVotes":"29291","percent":30.18850423078112},"2022":{"party":"Australian Labor Party","totalVotes":"28491","percent":28.825082708592586},"party":"ALP","changeInPercent":-1.3634215221885349},{"2019":{"party":"The Greens","totalVotes":"11010","percent":11.347356921269338},"2022":{"party":"Queensland Greens","totalVotes":"16144","percent":16.333302981556237},"party":"GRN","changeInPercent":4.985946060286899},{"2019":{"party":"Informal","totalVotes":"2840","percent":2.927020313933235},"2022":{"party":"Informal","totalVotes":"2467","percent":2.4959278032395464},"party":"Informal","changeInPercent":-0.4310925106936887},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1105","percent":1.138858255949375},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Bowman","totalVotes":101804,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7175","percent":7.0478566657498725},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"7825","percent":7.471094264682013},"party":"Pauline Hanson's One Nation","changeInPercent":0.42323759893214064},{"2019":{"party":"United Australia Party","totalVotes":"3540","percent":3.47727004832816},"2022":{"party":"United Australia Party","totalVotes":"6601","percent":6.302452810372648},"party":"United Australia Party","changeInPercent":2.825182762044488},{"2019":{"party":"The Greens","totalVotes":"11795","percent":11.585988762720522},"2022":{"party":"Queensland Greens","totalVotes":"13241","percent":12.642141745514957},"party":"GRN","changeInPercent":1.0561529827944351},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"47866","percent":47.017798907705},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"43088","percent":41.139234463465634},"party":"LNP","changeInPercent":-5.878564444239366},{"2022":{"party":"TNL","totalVotes":"1243","percent":1.1867821304792003},"party":"TNL","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"26147","percent":25.683666653569603},"2022":{"party":"Australian Labor Party","totalVotes":"29694","percent":28.351012536162006},"party":"ALP","changeInPercent":2.6673458825924037},{"2019":{"party":"Informal","totalVotes":"3465","percent":3.403599072727987},"2022":{"party":"Informal","totalVotes":"3045","percent":2.907282049323544},"party":"Informal","changeInPercent":-0.49631702340444317},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1816","percent":1.7838198891988528},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Brisbane","totalVotes":104588,"candidates":[{"2022":{"party":"Animal Justice Party","totalVotes":"2135","percent":1.9215192151921519},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1420","percent":1.3577083413011053},"2022":{"party":"United Australia Party","totalVotes":"2102","percent":1.891818918189182},"party":"United Australia Party","changeInPercent":0.5341105768880767},{"2019":{"party":"The Greens","totalVotes":"22807","percent":21.806517000038244},"2022":{"party":"Queensland Greens","totalVotes":"29641","percent":26.677166771667714},"party":"GRN","changeInPercent":4.87064977162947},{"2019":{"party":"Australian Labor Party","totalVotes":"24970","percent":23.87463188893563},"2022":{"party":"Australian Labor Party","totalVotes":"29652","percent":26.68706687066871},"party":"ALP","changeInPercent":2.8124349817330767},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"48777","percent":46.63728152369297},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"41032","percent":36.929169291692915},"party":"LNP","changeInPercent":-9.708112232000055},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"2537","percent":2.425708494282327},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2429","percent":2.1861218612186124},"party":"Pauline Hanson's One Nation","changeInPercent":-0.23958663306371442},{"2022":{"party":"Liberal Democrats","totalVotes":"1807","percent":1.6263162631626316},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"2631","percent":2.515584961945921},"2022":{"party":"Informal","totalVotes":"2312","percent":2.080820808208082},"party":"Informal","changeInPercent":-0.4347641537378393},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"732","percent":0.6998890886143726},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Socialist Alliance","totalVotes":"714","percent":0.682678701189429},"party":"Socialist Alliance","changeInPercent":null}]},{"electorate":"Capricornia","totalVotes":94975,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"15105","percent":15.904185311924191},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"13179","percent":13.700153852551042},"party":"Pauline Hanson's One Nation","changeInPercent":-2.20403145937315},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1126","percent":1.170526841032891},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"4307","percent":4.534877599368254},"2022":{"party":"Queensland Greens","totalVotes":"5302","percent":5.511663686639777},"party":"GRN","changeInPercent":0.9767860872715222},{"2019":{"party":"Australian Labor Party","totalVotes":"21120","percent":22.237430902869175},"2022":{"party":"Australian Labor Party","totalVotes":"25330","percent":26.331656201921078},"party":"ALP","changeInPercent":4.094225299051903},{"2022":{"party":"Liberal Democrats","totalVotes":"1392","percent":1.4470456152022952},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2211","percent":2.327981047644117},"2022":{"party":"Independent","totalVotes":"3048","percent":3.1685309160464055},"party":"Independent","changeInPercent":0.8405498684022885},{"2019":{"party":"United Australia Party","totalVotes":"3250","percent":3.421953145564622},"2022":{"party":"United Australia Party","totalVotes":"3555","percent":3.6955798577903445},"party":"United Australia Party","changeInPercent":0.27362671222572255},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"36163","percent":38.0763358778626},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"35613","percent":37.021289866522515},"party":"LNP","changeInPercent":-1.0550460113400817},{"2022":{"party":"The Great Australian Party","totalVotes":"1747","percent":1.8160838288494325},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"6008","percent":6.32587523032377},"2022":{"party":"Informal","totalVotes":"5904","percent":6.137469333444218},"party":"Informal","changeInPercent":-0.18840589687955145},{"2019":{"party":"Katter's Australian Party (KAP)","totalVotes":"3269","percent":3.4419584101079232},"party":"Katter's Australian Party (KAP)","changeInPercent":null},{"2019":{"party":"Labour DLP","totalVotes":"1637","percent":1.723611476704396},"party":"Labour DLP","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1905","percent":2.005790997630956},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Dawson","totalVotes":95550,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"38164","percent":39.94139194139194},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"40109","percent":41.531882287158034},"party":"LNP","changeInPercent":1.5904903457660922},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"11628","percent":12.169544740973311},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"12289","percent":12.724957027771449},"party":"Pauline Hanson's One Nation","changeInPercent":0.5554122867981377},{"2019":{"party":"Australian Labor Party","totalVotes":"18022","percent":18.86132914704343},"2022":{"party":"Australian Labor Party","totalVotes":"22650","percent":23.45351750988879},"party":"ALP","changeInPercent":4.592188362845359},{"2022":{"party":"The Great Australian Party","totalVotes":"1948","percent":2.017106053389111},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4355","percent":4.557823129251701},"2022":{"party":"United Australia Party","totalVotes":"3713","percent":3.8447201110029616},"party":"United Australia Party","changeInPercent":-0.7131030182487392},{"2019":{"party":"Katter's Australian Party (KAP)","totalVotes":"5619","percent":5.8806907378335955},"2022":{"party":"Katter's Australian Party (KAP)","totalVotes":"5189","percent":5.373081781846045},"party":"Katter's Australian Party (KAP)","changeInPercent":-0.5076089559875507},{"2019":{"party":"The Greens","totalVotes":"4009","percent":4.19570905285191},"2022":{"party":"Queensland Greens","totalVotes":"6675","percent":6.91179820655663},"party":"GRN","changeInPercent":2.7160891537047194},{"2019":{"party":"Informal","totalVotes":"6699","percent":7.010989010989011},"2022":{"party":"Informal","totalVotes":"4001","percent":4.1429370223869775},"party":"Informal","changeInPercent":-2.8680519886020335},{"2019":{"party":"Labour DLP","totalVotes":"2835","percent":2.9670329670329667},"party":"Labour DLP","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1741","percent":1.8220826792255365},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2478","percent":2.5934065934065935},"party":"Independent","changeInPercent":null}]},{"electorate":"Dickson","totalVotes":101364,"candidates":[{"2019":{"party":"Independent","totalVotes":"2302","percent":2.2710232429659443},"2022":{"party":"Independent","totalVotes":"2222","percent":2.1567580684299927},"party":"Independent","changeInPercent":-0.11426517453595153},{"2022":{"party":"Liberal Democrats","totalVotes":"1236","percent":1.199708808541616},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"44528","percent":43.928811017718324},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"41657","percent":40.43387527299199},"party":"LNP","changeInPercent":-3.494935744726334},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5022","percent":4.954421688173316},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5312","percent":5.156030089784033},"party":"Pauline Hanson's One Nation","changeInPercent":0.20160840161071736},{"2019":{"party":"United Australia Party","totalVotes":"2176","percent":2.1467187561658974},"2022":{"party":"United Australia Party","totalVotes":"2717","percent":2.637223974763407},"party":"United Australia Party","changeInPercent":0.4905052185975096},{"2019":{"party":"Australian Labor Party","totalVotes":"30370","percent":29.961327492995544},"2022":{"party":"Australian Labor Party","totalVotes":"31396","percent":30.474156758068432},"party":"ALP","changeInPercent":0.5128292650728881},{"2019":{"party":"The Greens","totalVotes":"9675","percent":9.544808807860779},"2022":{"party":"Queensland Greens","totalVotes":"12871","percent":12.493084202863383},"party":"GRN","changeInPercent":2.9482753950026037},{"2019":{"party":"Informal","totalVotes":"4416","percent":4.35657629927785},"2022":{"party":"Informal","totalVotes":"3996","percent":3.87867022567338},"party":"Informal","changeInPercent":-0.47790607360447},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1044","percent":1.0299514620575352},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"1831","percent":1.806361232784815},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Fadden","totalVotes":102231,"candidates":[{"2022":{"party":"Independent","totalVotes":"4407","percent":3.987116736481168},"party":"Independent","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"21882","percent":21.404466355606424},"2022":{"party":"Australian Labor Party","totalVotes":"23638","percent":21.385855551836137},"party":"ALP","changeInPercent":-0.018610803770286566},{"2019":{"party":"United Australia Party","totalVotes":"4968","percent":4.859582709745576},"2022":{"party":"United Australia Party","totalVotes":"7014","percent":6.345731061874045},"party":"United Australia Party","changeInPercent":1.4861483521284695},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"8334","percent":8.152126067435514},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"9177","percent":8.302648125865142},"party":"Pauline Hanson's One Nation","changeInPercent":0.15052205842962785},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"47359","percent":46.325478573035575},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"47190","percent":42.693904877364716},"party":"LNP","changeInPercent":-3.631573695670859},{"2019":{"party":"The Greens","totalVotes":"8747","percent":8.556113116373702},"2022":{"party":"Queensland Greens","totalVotes":"11353","percent":10.271326596158543},"party":"GRN","changeInPercent":1.7152134797848415},{"2019":{"party":"Liberal Democrats","totalVotes":"4391","percent":4.295174653480842},"2022":{"party":"Liberal Democrats","totalVotes":"2992","percent":2.7069328966534276},"party":"Liberal Democrats","changeInPercent":-1.5882417568274145},{"2019":{"party":"Informal","totalVotes":"5019","percent":4.909469730316636},"2022":{"party":"Informal","totalVotes":"4760","percent":4.306484153766816},"party":"Informal","changeInPercent":-0.6029855765498198},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1531","percent":1.497588794005732},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Fairfax","totalVotes":104355,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"48451","percent":46.429016338460066},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"46551","percent":42.42515379357484},"party":"LNP","changeInPercent":-4.003862544885223},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1997","percent":1.8200045568466623},"party":"Informed Medical Options Party","changeInPercent":null},{"2022":{"party":"Animal Justice Party","totalVotes":"2182","percent":1.9886078833447254},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1318","percent":1.2629965023237986},"2022":{"party":"Independent","totalVotes":"1423","percent":1.2968785600364547},"party":"Independent","changeInPercent":0.03388205771265618},{"2019":{"party":"The Greens","totalVotes":"12291","percent":11.778065258013513},"2022":{"party":"Queensland Greens","totalVotes":"13862","percent":12.633401686033267},"party":"GRN","changeInPercent":0.8553364280197542},{"2019":{"party":"United Australia Party","totalVotes":"2987","percent":2.8623448804561353},"2022":{"party":"United Australia Party","totalVotes":"6132","percent":5.588516746411483},"party":"United Australia Party","changeInPercent":2.7261718659553478},{"2019":{"party":"Australian Labor Party","totalVotes":"20976","percent":20.100618082506827},"2022":{"party":"Australian Labor Party","totalVotes":"22662","percent":20.65345181134655},"party":"ALP","changeInPercent":0.5528337288397225},{"2022":{"party":"The Great Australian Party","totalVotes":"1319","percent":1.2020961494645706},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7661","percent":7.341286953188635},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6798","percent":6.195488721804511},"party":"Pauline Hanson's One Nation","changeInPercent":-1.1457982313841235},{"2019":{"party":"Informal","totalVotes":"6715","percent":6.434765943174741},"2022":{"party":"Informal","totalVotes":"6066","percent":5.528366370471634},"party":"Informal","changeInPercent":-0.9063995727031067},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1502","percent":1.4393177135738586},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Sustainable Australia","totalVotes":"1410","percent":1.3511571079488285},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Liberal Democrats","totalVotes":"1044","percent":1.0004312203536008},"party":"Liberal Democrats","changeInPercent":null}]},{"electorate":"Fisher","totalVotes":104040,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"8596","percent":8.262206843521723},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"10102","percent":9.017710490609156},"party":"Pauline Hanson's One Nation","changeInPercent":0.7555036470874334},{"2019":{"party":"Australian Labor Party","totalVotes":"22011","percent":21.156286043829297},"2022":{"party":"Australian Labor Party","totalVotes":"25313","percent":22.59605084624723},"party":"ALP","changeInPercent":1.4397648024179333},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"49567","percent":47.64225297962322},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"48013","percent":42.859565807327},"party":"LNP","changeInPercent":-4.782687172296221},{"2022":{"party":"Animal Justice Party","totalVotes":"2730","percent":2.43697779047347},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"12289","percent":11.811803152633603},"2022":{"party":"Queensland Greens","totalVotes":"14981","percent":13.373027208455332},"party":"GRN","changeInPercent":1.5612240558217287},{"2019":{"party":"United Australia Party","totalVotes":"3429","percent":3.2958477508650517},"2022":{"party":"United Australia Party","totalVotes":"7355","percent":6.565557380561309},"party":"United Australia Party","changeInPercent":3.269709629696257},{"2019":{"party":"Informal","totalVotes":"4992","percent":4.798154555940023},"2022":{"party":"Informal","totalVotes":"3530","percent":3.151110476326501},"party":"Informal","changeInPercent":-1.6470440796135222},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1592","percent":1.530180699730873},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Love Australia or Leave","totalVotes":"1564","percent":1.5032679738562091},"party":"Love Australia or Leave","changeInPercent":null}]},{"electorate":"Flynn","totalVotes":94974,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"25628","percent":26.984227262198075},"2022":{"party":"Australian Labor Party","totalVotes":"30948","percent":32.24320973505725},"party":"ALP","changeInPercent":5.258982472859174},{"2019":{"party":"The Greens","totalVotes":"2744","percent":2.8892117842778022},"2022":{"party":"Queensland Greens","totalVotes":"4007","percent":4.174697602700479},"party":"GRN","changeInPercent":1.2854858184226767},{"2022":{"party":"The Great Australian Party","totalVotes":"2012","percent":2.0962045362199557},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"17531","percent":18.458736075136354},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"11287","percent":11.759374055822386},"party":"Pauline Hanson's One Nation","changeInPercent":-6.699362019313968},{"2019":{"party":"Independent","totalVotes":"1994","percent":2.099521974435109},"2022":{"party":"Independent","totalVotes":"3745","percent":3.9017325984809808},"party":"Independent","changeInPercent":1.802210624045872},{"2019":{"party":"United Australia Party","totalVotes":"3798","percent":3.998989197043401},"2022":{"party":"United Australia Party","totalVotes":"6266","percent":6.528239375722785},"party":"United Australia Party","changeInPercent":2.5292501786793835},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"33894","percent":35.687661886411014},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"34046","percent":35.470864632278634},"party":"LNP","changeInPercent":-0.2167972541323806},{"2019":{"party":"Informal","totalVotes":"5517","percent":5.8089582412028555},"2022":{"party":"Informal","totalVotes":"3672","percent":3.8256774637175335},"party":"Informal","changeInPercent":-1.983280777485322},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2484","percent":2.615452650199002},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Forde","totalVotes":95983,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"3696","percent":3.850681891584968},"2022":{"party":"United Australia Party","totalVotes":"7485","percent":7.37467486403405},"party":"United Australia Party","changeInPercent":3.5239929724490824},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"39819","percent":41.48547138555786},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"34920","percent":34.405296760463465},"party":"LNP","changeInPercent":-7.0801746250943935},{"2019":{"party":"The Greens","totalVotes":"7987","percent":8.321265224050093},"2022":{"party":"Queensland Greens","totalVotes":"9319","percent":9.181642626310396},"party":"GRN","changeInPercent":0.860377402260303},{"2022":{"party":"TNL","totalVotes":"728","percent":0.7172696460944273},"party":"TNL","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"27008","percent":28.13831616015336},"2022":{"party":"Australian Labor Party","totalVotes":"26497","percent":26.106447544730827},"party":"ALP","changeInPercent":-2.031868615422532},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"10807","percent":11.259285498473687},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"7578","percent":7.466304090801608},"party":"Pauline Hanson's One Nation","changeInPercent":-3.7929814076720794},{"2022":{"party":"Liberal Democrats","totalVotes":"2668","percent":2.6286750216757313},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Independent","totalVotes":"2973","percent":2.9291794750532043},"party":"Independent","changeInPercent":null},{"2022":{"party":"Animal Justice Party","totalVotes":"2444","percent":2.4079766690312923},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4449","percent":4.635195815925737},"2022":{"party":"Informal","totalVotes":"6884","percent":6.782533301804997},"party":"Informal","changeInPercent":2.1473374858792598},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2217","percent":2.309784024254295},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Griffith","totalVotes":101919,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"2109","percent":2.0692903187825626},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3504","percent":3.2301182717392303},"party":"Pauline Hanson's One Nation","changeInPercent":1.1608279529566676},{"2019":{"party":"The Greens","totalVotes":"23562","percent":23.118358696612017},"2022":{"party":"Queensland Greens","totalVotes":"36771","percent":33.89688326772924},"party":"GRN","changeInPercent":10.77852457111722},{"2019":{"party":"Australian Labor Party","totalVotes":"30836","percent":30.25539889520109},"2022":{"party":"Australian Labor Party","totalVotes":"30769","percent":28.36401515500696},"party":"ALP","changeInPercent":-1.8913837401941294},{"2019":{"party":"United Australia Party","totalVotes":"1444","percent":1.4168113894367096},"2022":{"party":"United Australia Party","totalVotes":"2581","percent":2.379262345707464},"party":"United Australia Party","changeInPercent":0.9624509562707546},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"40816","percent":40.04748869200051},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"32685","percent":30.13025562551277},"party":"LNP","changeInPercent":-9.917233066487743},{"2019":{"party":"Informal","totalVotes":"2302","percent":2.258656383991209},"2022":{"party":"Informal","totalVotes":"2169","percent":1.9994653343043356},"party":"Informal","changeInPercent":-0.25919104968687323},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"850","percent":0.8339956239759024},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Groom","totalVotes":98608,"candidates":[{"2022":{"party":"Australian Federation Party","totalVotes":"1539","percent":1.52736150532939},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"12493","percent":12.669357455784521},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"9181","percent":9.111569837835692},"party":"Pauline Hanson's One Nation","changeInPercent":-3.5577876179488293},{"2019":{"party":"The Greens","totalVotes":"7598","percent":7.705257179944833},"2022":{"party":"Queensland Greens","totalVotes":"5616","percent":5.573529703658124},"party":"GRN","changeInPercent":-2.1317274762867084},{"2019":{"party":"United Australia Party","totalVotes":"3784","percent":3.8374168424468604},"2022":{"party":"United Australia Party","totalVotes":"4922","percent":4.8847779917032215},"party":"United Australia Party","changeInPercent":1.047361149256361},{"2022":{"party":"Independent","totalVotes":"6858","percent":6.806137234274826},"party":"Independent","changeInPercent":null},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"50908","percent":51.626642868732766},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"41971","percent":41.653599571266945},"party":"LNP","changeInPercent":-9.973043297465821},{"2019":{"party":"Australian Labor Party","totalVotes":"17811","percent":18.06242901184488},"2022":{"party":"Australian Labor Party","totalVotes":"17985","percent":17.848990690935075},"party":"ALP","changeInPercent":-0.2134383209098054},{"2019":{"party":"Informal","totalVotes":"3160","percent":3.204608145383742},"2022":{"party":"Informal","totalVotes":"4758","percent":4.7220182211548},"party":"Informal","changeInPercent":1.5174100757710578},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2854","percent":2.894288495862405},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Herbert","totalVotes":97676,"candidates":[{"2022":{"party":"Informed Medical Options Party","totalVotes":"1658","percent":1.6901465881057718},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"23393","percent":23.94958843523486},"2022":{"party":"Australian Labor Party","totalVotes":"19971","percent":20.358213215356074},"party":"ALP","changeInPercent":-3.5913752198787847},{"2019":{"party":"The Greens","totalVotes":"6721","percent":6.880912404275359},"2022":{"party":"Queensland Greens","totalVotes":"7596","percent":7.743277131032233},"party":"GRN","changeInPercent":0.8623647267568737},{"2022":{"party":"The Great Australian Party","totalVotes":"749","percent":0.7635221920936207},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"34112","percent":34.92362504607068},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"43453","percent":44.2955004179494},"party":"LNP","changeInPercent":9.371875371878716},{"2022":{"party":"Independent","totalVotes":"2983","percent":3.040836714306102},"party":"Independent","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"5239","percent":5.363651255170154},"2022":{"party":"United Australia Party","totalVotes":"2383","percent":2.4292034496116126},"party":"United Australia Party","changeInPercent":-2.9344478055585417},{"2019":{"party":"Katter's Australian Party (KAP)","totalVotes":"9007","percent":9.22130308366436},"2022":{"party":"Katter's Australian Party (KAP)","totalVotes":"6472","percent":6.597484148504557},"party":"Katter's Australian Party (KAP)","changeInPercent":-2.623818935159803},{"2019":{"party":"Animal Justice Party","totalVotes":"1585","percent":1.622711822760965},"2022":{"party":"Animal Justice Party","totalVotes":"1359","percent":1.385349344533018},"party":"Animal Justice Party","changeInPercent":-0.23736247822794687},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"10189","percent":10.431426348335313},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4874","percent":4.968500886868234},"party":"Pauline Hanson's One Nation","changeInPercent":-5.462925461467079},{"2019":{"party":"Informal","totalVotes":"5759","percent":5.896023588189524},"2022":{"party":"Informal","totalVotes":"5658","percent":5.767701686069033},"party":"Informal","changeInPercent":-0.12832190212049088},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1671","percent":1.7107580162987837},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Hinkler","totalVotes":99877,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"42374","percent":42.426184206574085},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"42720","percent":40.74897221400841},"party":"LNP","changeInPercent":-1.6772119925656739},{"2019":{"party":"United Australia Party","totalVotes":"4029","percent":4.033961772980766},"2022":{"party":"United Australia Party","totalVotes":"7417","percent":7.074792296612838},"party":"United Australia Party","changeInPercent":3.0408305236320716},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"13625","percent":13.641779388648038},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"8837","percent":8.4292759235766},"party":"Pauline Hanson's One Nation","changeInPercent":-5.212503465071437},{"2019":{"party":"Australian Labor Party","totalVotes":"21110","percent":21.13599727665028},"2022":{"party":"Australian Labor Party","totalVotes":"23634","percent":22.543567633564486},"party":"ALP","changeInPercent":1.4075703569142064},{"2019":{"party":"The Greens","totalVotes":"3422","percent":3.4262142435195293},"2022":{"party":"Queensland Greens","totalVotes":"5562","percent":5.305378826177781},"party":"GRN","changeInPercent":1.8791645826582513},{"2019":{"party":"Independent","totalVotes":"1327","percent":1.3286342200907115},"2022":{"party":"Independent","totalVotes":"13236","percent":12.625313582036876},"party":"Independent","changeInPercent":11.296679361946165},{"2019":{"party":"Informal","totalVotes":"7810","percent":7.819618130300269},"2022":{"party":"Informal","totalVotes":"3431","percent":3.2726995240230075},"party":"Informal","changeInPercent":-4.546918606277262},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1471","percent":1.4728115582166064},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"1391","percent":1.3927130370355538},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Kennedy","totalVotes":95944,"candidates":[{"2019":{"party":"Katter's Australian Party (KAP)","totalVotes":"37665","percent":39.25727507712832},"2022":{"party":"Katter's Australian Party (KAP)","totalVotes":"39036","percent":40.33686385946783},"party":"Katter's Australian Party (KAP)","changeInPercent":1.0795887823395134},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"25264","percent":26.33202701575919},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"26387","percent":27.266339447171273},"party":"LNP","changeInPercent":0.9343124314120814},{"2022":{"party":"Independent","totalVotes":"2981","percent":3.0803409971583573},"party":"Independent","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"4751","percent":4.951846910697907},"2022":{"party":"Queensland Greens","totalVotes":"6013","percent":6.213381555153707},"party":"GRN","changeInPercent":1.2615346444558},{"2019":{"party":"Australian Labor Party","totalVotes":"15612","percent":16.27199199533061},"2022":{"party":"Australian Labor Party","totalVotes":"15033","percent":15.533970550245416},"party":"ALP","changeInPercent":-0.7380214450851934},{"2019":{"party":"United Australia Party","totalVotes":"6124","percent":6.382890019177853},"2022":{"party":"United Australia Party","totalVotes":"4154","percent":4.292430896409197},"party":"United Australia Party","changeInPercent":-2.0904591227686558},{"2019":{"party":"Informal","totalVotes":"3996","percent":4.1649295422329695},"2022":{"party":"Informal","totalVotes":"3171","percent":3.2766726943942137},"party":"Informal","changeInPercent":-0.8882568478387558},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2532","percent":2.6390394396731427},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Leichhardt","totalVotes":95945,"candidates":[{"2022":{"party":"Socialist Alliance","totalVotes":"3729","percent":3.7887870598037026},"party":"Socialist Alliance","changeInPercent":null},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1641","percent":1.6673101542338093},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"33753","percent":35.17952993902757},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"33652","percent":34.191542541301736},"party":"LNP","changeInPercent":-0.9879873977258313},{"2019":{"party":"Katter's Australian Party (KAP)","totalVotes":"7318","percent":7.6272864662045965},"2022":{"party":"Katter's Australian Party (KAP)","totalVotes":"5166","percent":5.248826481884131},"party":"Katter's Australian Party (KAP)","changeInPercent":-2.3784599843204655},{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"930","percent":0.944910690699234},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2022":{"party":"Animal Justice Party","totalVotes":"1253","percent":1.2730893499420861},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"9340","percent":9.734743863671895},"2022":{"party":"Queensland Greens","totalVotes":"9143","percent":9.289589725874297},"party":"GRN","changeInPercent":-0.4451541377975978},{"2019":{"party":"United Australia Party","totalVotes":"3562","percent":3.712543644796498},"2022":{"party":"United Australia Party","totalVotes":"3593","percent":3.6506065717014486},"party":"United Australia Party","changeInPercent":-0.06193707309504948},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5428","percent":5.657407889936943},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6822","percent":6.93137713112922},"party":"Pauline Hanson's One Nation","changeInPercent":1.273969241192277},{"2022":{"party":"Australian Federation Party","totalVotes":"466","percent":0.4734713783503688},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"25846","percent":26.9383500964094},"2022":{"party":"Australian Labor Party","totalVotes":"25312","percent":25.717827315031194},"party":"ALP","changeInPercent":-1.2205227813782074},{"2019":{"party":"Informal","totalVotes":"6160","percent":6.4203449893167965},"2022":{"party":"Informal","totalVotes":"6715","percent":6.82266160004877},"party":"Informal","changeInPercent":0.40231661073197333},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1976","percent":2.0595132628068167},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2562","percent":2.6702798478294856},"party":"Independent","changeInPercent":null}]},{"electorate":"Lilley","totalVotes":100085,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"2177","percent":2.175151121546685},"2022":{"party":"United Australia Party","totalVotes":"3320","percent":3.2626748036990083},"party":"United Australia Party","changeInPercent":1.087523682152323},{"2019":{"party":"The Greens","totalVotes":"13539","percent":13.527501623619923},"2022":{"party":"Queensland Greens","totalVotes":"16916","percent":16.623917764871212},"party":"GRN","changeInPercent":3.0964161412512894},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"39392","percent":39.35854523654893},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"29530","percent":29.020116552178226},"party":"LNP","changeInPercent":-10.338428684370701},{"2022":{"party":"Informed Medical Options Party","totalVotes":"1378","percent":1.3542065902100102},"party":"Informed Medical Options Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"2412","percent":2.3703528995548218},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"34434","percent":34.40475595743618},"2022":{"party":"Australian Labor Party","totalVotes":"41424","percent":40.70874730976738},"party":"ALP","changeInPercent":6.303991352331202},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5165","percent":5.1606134785432385},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4027","percent":3.95746729954696},"party":"Pauline Hanson's One Nation","changeInPercent":-1.2031461789962785},{"2019":{"party":"Informal","totalVotes":"3480","percent":3.47704451216466},"2022":{"party":"Informal","totalVotes":"2750","percent":2.7025167801723713},"party":"Informal","changeInPercent":-0.7745277319922885},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1155","percent":1.154019083778788},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Socialist Alliance","totalVotes":"743","percent":0.7423689863615927},"party":"Socialist Alliance","changeInPercent":null}]},{"electorate":"Longman","totalVotes":105722,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"33949","percent":32.11157564177749},"2022":{"party":"Australian Labor Party","totalVotes":"34036","percent":29.923862777162352},"party":"ALP","changeInPercent":-2.18771286461514},{"2019":{"party":"United Australia Party","totalVotes":"3344","percent":3.163012428822762},"2022":{"party":"United Australia Party","totalVotes":"5949","percent":5.230257952207628},"party":"United Australia Party","changeInPercent":2.0672455233848663},{"2022":{"party":"Legalise Cannabis Australia","totalVotes":"6025","percent":5.2970758383007155},"party":"Legalise Cannabis Australia","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"6684","percent":6.3222413499555445},"2022":{"party":"Queensland Greens","totalVotes":"7814","percent":6.869933709623534},"party":"GRN","changeInPercent":0.5476923596679892},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"13160","percent":12.44774030003216},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"8917","percent":7.83967224068506},"party":"Pauline Hanson's One Nation","changeInPercent":-4.608068059347101},{"2022":{"party":"Liberal Democrats","totalVotes":"2011","percent":1.768036433331575},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Animal Justice Party","totalVotes":"2060","percent":1.8111163862073814},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"38411","percent":36.332078469949494},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"41253","percent":36.26892440787044},"party":"LNP","changeInPercent":-0.06315406207905028},{"2019":{"party":"Informal","totalVotes":"6173","percent":5.838898242560678},"2022":{"party":"Informal","totalVotes":"5677","percent":4.991120254611314},"party":"Informal","changeInPercent":-0.8477779879493639},{"2019":{"party":"Australian Progressives","totalVotes":"965","percent":0.9127712302075254},"party":"Australian Progressives","changeInPercent":null},{"2019":{"party":"Australia First Party","totalVotes":"1069","percent":1.0111424301469893},"party":"Australia First Party","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1967","percent":1.86053990654736},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Maranoa","totalVotes":96573,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"51950","percent":53.79350336015243},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"52382","percent":54.36693686493892},"party":"LNP","changeInPercent":0.5734335047864931},{"2022":{"party":"Shooters, Fishers and Farmers Party","totalVotes":"3695","percent":3.835016450611838},"party":"Shooters, Fishers and Farmers Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"14427","percent":14.938958093877169},"2022":{"party":"Australian Labor Party","totalVotes":"14236","percent":14.775451743142117},"party":"ALP","changeInPercent":-0.1635063507350516},{"2019":{"party":"United Australia Party","totalVotes":"3367","percent":3.4864817288476075},"2022":{"party":"United Australia Party","totalVotes":"6202","percent":6.437015433476216},"party":"United Australia Party","changeInPercent":2.950533704628609},{"2019":{"party":"The Greens","totalVotes":"3177","percent":3.2897393681463765},"2022":{"party":"Queensland Greens","totalVotes":"4533","percent":4.704771196379828},"party":"GRN","changeInPercent":1.4150318282334515},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"13564","percent":14.04533358185},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"11070","percent":11.489480949464966},"party":"Pauline Hanson's One Nation","changeInPercent":-2.555852632385035},{"2022":{"party":"Australian Federation Party","totalVotes":"997","percent":1.0347798108958057},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"3813","percent":3.9483085334410237},"2022":{"party":"Informal","totalVotes":"3234","percent":3.3565475510903076},"party":"Informal","changeInPercent":-0.5917609823507162},{"2019":{"party":"Katter's Australian Party (KAP)","totalVotes":"4245","percent":4.3956385325090865},"party":"Katter's Australian Party (KAP)","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2030","percent":2.1020368011763124},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"McPherson","totalVotes":98771,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"44634","percent":45.18937744884632},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"42288","percent":41.197100771568856},"party":"LNP","changeInPercent":-3.9922766772774665},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5421","percent":5.488453088457138},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"7013","percent":6.83208635336295},"party":"Pauline Hanson's One Nation","changeInPercent":1.3436332649058116},{"2022":{"party":"Australian Federation Party","totalVotes":"594","percent":0.5786766425064298},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"10167","percent":10.2935072035314},"2022":{"party":"Queensland Greens","totalVotes":"14971","percent":14.584794637986127},"party":"GRN","changeInPercent":4.291287434454727},{"2022":{"party":"Australian Values Party","totalVotes":"2310","percent":2.2504091653027825},"party":"Australian Values Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3078","percent":3.1162993186259125},"2022":{"party":"United Australia Party","totalVotes":"6490","percent":6.32257813108877},"party":"United Australia Party","changeInPercent":3.2062788124628576},{"2019":{"party":"Liberal Democrats","totalVotes":"3222","percent":3.2620910996142594},"2022":{"party":"Liberal Democrats","totalVotes":"2063","percent":2.009780999142701},"party":"Liberal Democrats","changeInPercent":-1.2523101004715582},{"2019":{"party":"Australian Labor Party","totalVotes":"21138","percent":21.401018517581072},"2022":{"party":"Australian Labor Party","totalVotes":"21354","percent":20.803133037175588},"party":"ALP","changeInPercent":-0.5978854804054841},{"2019":{"party":"Informal","totalVotes":"6250","percent":6.327768272063662},"2022":{"party":"Informal","totalVotes":"5565","percent":5.4214402618657935},"party":"Informal","changeInPercent":-0.9063280101978686},{"2019":{"party":"Independent","totalVotes":"1648","percent":1.6685059379777465},"party":"Independent","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"846","percent":0.8565267133065373},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"2367","percent":2.39645239999595},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Moncrieff","totalVotes":98246,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"47356","percent":48.201453494289844},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"45104","percent":43.286819324747114},"party":"LNP","changeInPercent":-4.91463416954273},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5920","percent":6.025690613358305},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6981","percent":6.69974471678919},"party":"Pauline Hanson's One Nation","changeInPercent":0.6740541034308851},{"2022":{"party":"Australian Federation Party","totalVotes":"645","percent":0.6190138006487649},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"3551","percent":3.6143965148708346},"2022":{"party":"Animal Justice Party","totalVotes":"2384","percent":2.287951784103342},"party":"Animal Justice Party","changeInPercent":-1.3264447307674927},{"2019":{"party":"The Greens","totalVotes":"8900","percent":9.058892982920424},"2022":{"party":"Queensland Greens","totalVotes":"11850","percent":11.372579128198238},"party":"GRN","changeInPercent":2.3136861452778135},{"2019":{"party":"Australian Labor Party","totalVotes":"19822","percent":20.175885023308837},"2022":{"party":"Australian Labor Party","totalVotes":"20430","percent":19.606902243805063},"party":"ALP","changeInPercent":-0.5689827795037736},{"2019":{"party":"Liberal Democrats","totalVotes":"1799","percent":1.8311178063229037},"2022":{"party":"Liberal Democrats","totalVotes":"4305","percent":4.131557227585942},"party":"Liberal Democrats","changeInPercent":2.3004394212630386},{"2022":{"party":"Informed Medical Options Party","totalVotes":"997","percent":0.9568321848787885},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3419","percent":3.4800398998432507},"2022":{"party":"United Australia Party","totalVotes":"5482","percent":5.261137449855084},"party":"United Australia Party","changeInPercent":1.781097550011833},{"2019":{"party":"Informal","totalVotes":"6327","percent":6.439956843026688},"2022":{"party":"Informal","totalVotes":"6020","percent":5.777462139388472},"party":"Informal","changeInPercent":-0.6624947036382158},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1152","percent":1.1725668220589134},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Moreton","totalVotes":93441,"candidates":[{"2022":{"party":"Australian Federation Party","totalVotes":"1468","percent":1.5423246236118553},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"3002","percent":3.2127224665831915},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3364","percent":3.5343188241350685},"party":"Pauline Hanson's One Nation","changeInPercent":0.321596357551877},{"2019":{"party":"Australian Labor Party","totalVotes":"31864","percent":34.100662450102206},"2022":{"party":"Australian Labor Party","totalVotes":"34633","percent":36.38646368497914},"party":"ALP","changeInPercent":2.285801234876935},{"2019":{"party":"The Greens","totalVotes":"15189","percent":16.255177063601632},"2022":{"party":"Queensland Greens","totalVotes":"19250","percent":20.224624662485162},"party":"GRN","changeInPercent":3.96944759888353},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"37011","percent":39.60895110283494},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"30777","percent":32.33523497336653},"party":"LNP","changeInPercent":-7.273716129468411},{"2019":{"party":"United Australia Party","totalVotes":"2015","percent":2.156440962746546},"2022":{"party":"United Australia Party","totalVotes":"3064","percent":3.219129868356079},"party":"United Australia Party","changeInPercent":1.0626889056095332},{"2019":{"party":"Informal","totalVotes":"2799","percent":2.9954730792692716},"2022":{"party":"Informal","totalVotes":"2625","percent":2.7579033630661582},"party":"Informal","changeInPercent":-0.2375697162031134},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1561","percent":1.6705728748622126},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Oxley","totalVotes":95039,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"2368","percent":2.4916087080040823},"2022":{"party":"United Australia Party","totalVotes":"5079","percent":5.130613976604643},"party":"United Australia Party","changeInPercent":2.6390052686005605},{"2019":{"party":"The Greens","totalVotes":"10535","percent":11.084923031597555},"2022":{"party":"Queensland Greens","totalVotes":"13595","percent":13.733155544780493},"party":"GRN","changeInPercent":2.648232513182938},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"31290","percent":32.923326213449215},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"27385","percent":27.663292724811605},"party":"LNP","changeInPercent":-5.26003348863761},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5701","percent":5.9985900525047615},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5568","percent":5.624583308079278},"party":"Pauline Hanson's One Nation","changeInPercent":-0.37400674442548354},{"2019":{"party":"Australian Labor Party","totalVotes":"38501","percent":40.5107376971559},"2022":{"party":"Australian Labor Party","totalVotes":"43785","percent":44.22995333050488},"party":"ALP","changeInPercent":3.7192156333489734},{"2019":{"party":"Informal","totalVotes":"4516","percent":4.751733498879408},"2022":{"party":"Informal","totalVotes":"3582","percent":3.618401115219104},"party":"Informal","changeInPercent":-1.1333323836603038},{"2019":{"party":"Socialist Equality Party","totalVotes":"654","percent":0.6881385536463978},"party":"Socialist Equality Party","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1474","percent":1.5509422447626764},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Petrie","totalVotes":105410,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"3361","percent":3.1885020396546815},"2022":{"party":"United Australia Party","totalVotes":"5914","percent":5.355622769999819},"party":"United Australia Party","changeInPercent":2.1671207303451374},{"2019":{"party":"The Greens","totalVotes":"8877","percent":8.421402144009107},"2022":{"party":"Queensland Greens","totalVotes":"12169","percent":11.02004962599388},"party":"GRN","changeInPercent":2.598647481984772},{"2022":{"party":"Liberal Democrats","totalVotes":"2189","percent":1.9823230036404471},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7638","percent":7.245991841381273},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5613","percent":5.083042037201384},"party":"Pauline Hanson's One Nation","changeInPercent":-2.162949804179889},{"2019":{"party":"Australian Labor Party","totalVotes":"31348","percent":29.739113936059198},"2022":{"party":"Australian Labor Party","totalVotes":"31972","percent":28.953326209407205},"party":"ALP","changeInPercent":-0.7857877266519928},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"48879","percent":46.370363343136326},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"46325","percent":41.95117091989206},"party":"LNP","changeInPercent":-4.419192423244269},{"2022":{"party":"Animal Justice Party","totalVotes":"2331","percent":2.110915907485556},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"3813","percent":3.6173038611137462},"2022":{"party":"Informal","totalVotes":"3913","percent":3.5435495263796573},"party":"Informal","changeInPercent":-0.07375433473408899},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1494","percent":1.4173228346456692},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Rankin","totalVotes":91975,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"26608","percent":28.929600434900788},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"25478","percent":27.882900136798906},"party":"LNP","changeInPercent":-1.0467002981018823},{"2019":{"party":"The Greens","totalVotes":"7709","percent":8.381625441696112},"2022":{"party":"Queensland Greens","totalVotes":"9394","percent":10.280711354309165},"party":"GRN","changeInPercent":1.899085912613053},{"2019":{"party":"United Australia Party","totalVotes":"3134","percent":3.4074476759989127},"2022":{"party":"United Australia Party","totalVotes":"5064","percent":5.541997264021887},"party":"United Australia Party","changeInPercent":2.1345495880229746},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7261","percent":7.894536558847514},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"7006","percent":7.667305061559508},"party":"Pauline Hanson's One Nation","changeInPercent":-0.22723149728800518},{"2022":{"party":"Animal Justice Party","totalVotes":"2284","percent":2.499589603283174},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"35156","percent":38.22343027996738},"2022":{"party":"Australian Labor Party","totalVotes":"38596","percent":42.239124487004105},"party":"ALP","changeInPercent":4.015694207036724},{"2019":{"party":"Informal","totalVotes":"7111","percent":7.731448763250884},"2022":{"party":"Informal","totalVotes":"3553","percent":3.888372093023256},"party":"Informal","changeInPercent":-3.843076670227628},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1593","percent":1.7319923892362052},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Liberal Democrats","totalVotes":"2379","percent":2.5865724381625443},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"","totalVotes":"1024","percent":1.1133460179396575},"party":"no party","changeInPercent":null}]},{"electorate":"Ryan","totalVotes":98795,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"1478","percent":1.4960271268788907},"2022":{"party":"United Australia Party","totalVotes":"2062","percent":2.012571250097603},"party":"United Australia Party","changeInPercent":0.5165441232187122},{"2022":{"party":"Liberal Democrats","totalVotes":"2582","percent":2.52010619192629},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Australian Progressives","totalVotes":"606","percent":0.5914734129772781},"party":"Australian Progressives","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"2080","percent":2.1053697049445823},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2237","percent":2.183376278597642},"party":"Pauline Hanson's One Nation","changeInPercent":0.07800657365305952},{"2019":{"party":"Animal Justice Party","totalVotes":"1854","percent":1.8766131889265654},"2022":{"party":"Animal Justice Party","totalVotes":"1088","percent":1.0619192629030998},"party":"Animal Justice Party","changeInPercent":-0.8146939260234656},{"2019":{"party":"The Greens","totalVotes":"19621","percent":19.860316817652716},"2022":{"party":"Queensland Greens","totalVotes":"30003","percent":29.283790114780977},"party":"GRN","changeInPercent":9.423473297128261},{"2019":{"party":"Australian Labor Party","totalVotes":"23560","percent":23.84736069639152},"2022":{"party":"Australian Labor Party","totalVotes":"22146","percent":21.61513234949637},"party":"ALP","changeInPercent":-2.2322283468951483},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"46869","percent":47.44065995242674},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"38239","percent":37.32236277035996},"party":"LNP","changeInPercent":-10.118297182066783},{"2022":{"party":"Australian Federation Party","totalVotes":"353","percent":0.3445381432029359},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"2369","percent":2.3978946302950552},"2022":{"party":"Informal","totalVotes":"3140","percent":3.0647302256578435},"party":"Informal","changeInPercent":0.6668355953627882},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"964","percent":0.9757578824839315},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Wide Bay","totalVotes":98539,"candidates":[{"2019":{"party":"Independent","totalVotes":"4220","percent":4.282568323201981},"2022":{"party":"Independent","totalVotes":"4106","percent":4.014784105131414},"party":"Independent","changeInPercent":-0.26778421807056674},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"10166","percent":10.31672738712591},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"9765","percent":9.548067897371714},"party":"Pauline Hanson's One Nation","changeInPercent":-0.7686594897541958},{"2019":{"party":"United Australia Party","totalVotes":"3385","percent":3.4351880981134375},"2022":{"party":"United Australia Party","totalVotes":"4406","percent":4.308119524405507},"party":"United Australia Party","changeInPercent":0.8729314262920695},{"2019":{"party":"The Greens","totalVotes":"9330","percent":9.468332335420493},"2022":{"party":"Queensland Greens","totalVotes":"9088","percent":8.88610763454318},"party":"GRN","changeInPercent":-0.5822247008773136},{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"44204","percent":44.85939577223231},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"41601","percent":40.67682259073842},"party":"LNP","changeInPercent":-4.182573181493893},{"2022":{"party":"Australian Federation Party","totalVotes":"501","percent":0.4898701501877347},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"20418","percent":20.720729863302857},"2022":{"party":"Australian Labor Party","totalVotes":"20345","percent":19.89303035043805},"party":"ALP","changeInPercent":-0.8276995128648075},{"2022":{"party":"Australian Values Party","totalVotes":"1057","percent":1.0335184605757197},"party":"Australian Values Party","changeInPercent":null},{"2022":{"party":"Informed Medical Options Party","totalVotes":"2097","percent":2.0504145807259073},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4667","percent":4.736195820943992},"2022":{"party":"Informal","totalVotes":"6569","percent":6.423067897371714},"party":"Informal","changeInPercent":1.686872076427722},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2149","percent":2.180862399659018},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Wright","totalVotes":103162,"candidates":[{"2019":{"party":"Liberal National Party of Queensland","totalVotes":"43522","percent":42.188014966751325},"2022":{"party":"Liberal National Party of Queensland","totalVotes":"45753","percent":41.72031440920613},"party":"LNP","changeInPercent":-0.4677005575451929},{"2019":{"party":"United Australia Party","totalVotes":"4747","percent":4.601500552529032},"2022":{"party":"United Australia Party","totalVotes":"8703","percent":7.9359145040395385},"party":"United Australia Party","changeInPercent":3.3344139515105065},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"13576","percent":13.159884453577869},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"15095","percent":13.764521364871518},"party":"Pauline Hanson's One Nation","changeInPercent":0.6046369112936496},{"2022":{"party":"Australian Federation Party","totalVotes":"1632","percent":1.488154943191144},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"18155","percent":17.59853434404141},"2022":{"party":"Australian Labor Party","totalVotes":"22643","percent":20.647237977130562},"party":"ALP","changeInPercent":3.0487036330891506},{"2019":{"party":"The Greens","totalVotes":"6951","percent":6.737946142959617},"2022":{"party":"Queensland Greens","totalVotes":"12107","percent":11.039884740940673},"party":"GRN","changeInPercent":4.3019385979810565},{"2019":{"party":"Informal","totalVotes":"6269","percent":6.076850002908047},"2022":{"party":"Informal","totalVotes":"3733","percent":3.403972060620429},"party":"Informal","changeInPercent":-2.6728779422876183},{"2019":{"party":"Independent","totalVotes":"5165","percent":5.006688509334833},"party":"Independent","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2164","percent":2.0976716232721353},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Katter's Australian Party (KAP)","totalVotes":"2613","percent":2.5329094046257343},"party":"Katter's Australian Party (KAP)","changeInPercent":null}]},{"electorate":"Adelaide","totalVotes":111299,"candidates":[{"2019":{"party":"Liberal","totalVotes":"38753","percent":34.81882137305816},"2022":{"party":"Liberal","totalVotes":"36080","percent":30.784457603112575},"party":"LNP","changeInPercent":-4.034363769945582},{"2019":{"party":"Australian Labor Party","totalVotes":"43163","percent":38.781121124179016},"2022":{"party":"Australian Labor Party","totalVotes":"45086","percent":38.46862681524206},"party":"ALP","changeInPercent":-0.3124943089369552},{"2019":{"party":"United Australia Party","totalVotes":"3479","percent":3.125814248106452},"2022":{"party":"United Australia Party","totalVotes":"3055","percent":2.6066108086892714},"party":"United Australia Party","changeInPercent":-0.5192034394171805},{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"1631","percent":1.391614477568642},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"16853","percent":15.142094717832148},"2022":{"party":"The Greens","totalVotes":"22666","percent":19.339260422177095},"party":"GRN","changeInPercent":4.197165704344947},{"2022":{"party":"Australian Federation Party","totalVotes":"870","percent":0.742308151738025},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3376","percent":2.880496919847784},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4118","percent":3.699943395717841},"2022":{"party":"Informal","totalVotes":"4438","percent":3.7866248016245456},"party":"Informal","changeInPercent":0.0866814059067047},{"2019":{"party":"Australian Democrats","totalVotes":"2039","percent":1.8320020844751526},"party":"Australian Democrats","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"2894","percent":2.6002030566312366},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Barker","totalVotes":111893,"candidates":[{"2019":{"party":"National Party","totalVotes":"2796","percent":2.4988158329832966},"2022":{"party":"National Party","totalVotes":"2531","percent":2.225876807260703},"party":"National Party","changeInPercent":-0.27293902572259343},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6958","percent":6.1191824673725685},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Independent","totalVotes":"1913","percent":1.6823794280085833},"party":"Independent","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"7229","percent":6.460636500942865},"2022":{"party":"The Greens","totalVotes":"7841","percent":6.895732929960953},"party":"GRN","changeInPercent":0.4350964290180883},{"2019":{"party":"Liberal","totalVotes":"61155","percent":54.6548935143396},"2022":{"party":"Liberal","totalVotes":"56330","percent":49.53917050691244},"party":"LNP","changeInPercent":-5.115723007427157},{"2019":{"party":"United Australia Party","totalVotes":"6259","percent":5.593736873620333},"2022":{"party":"United Australia Party","totalVotes":"4222","percent":3.713019312625321},"party":"United Australia Party","changeInPercent":-1.8807175609950124},{"2019":{"party":"Australian Labor Party","totalVotes":"22205","percent":19.84485177803795},"2022":{"party":"Australian Labor Party","totalVotes":"22054","percent":19.395293207162204},"party":"ALP","changeInPercent":-0.4495585708757446},{"2022":{"party":"Australian Federation Party","totalVotes":"760","percent":0.6683786540964576},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"6227","percent":5.56513812302825},"2022":{"party":"Informal","totalVotes":"7909","percent":6.955535230590636},"party":"Informal","changeInPercent":1.3903971075623858},{"2019":{"party":"Animal Justice Party","totalVotes":"2940","percent":2.6275102106476727},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Centre Alliance","totalVotes":"3082","percent":2.754417166400043},"party":"Centre Alliance","changeInPercent":null}]},{"electorate":"Boothby","totalVotes":116030,"candidates":[{"2019":{"party":"The Greens","totalVotes":"13224","percent":11.397052486425924},"2022":{"party":"The Greens","totalVotes":"17285","percent":14.525698342801437},"party":"GRN","changeInPercent":3.1286458563755133},{"2019":{"party":"United Australia Party","totalVotes":"2094","percent":1.8047056795656298},"2022":{"party":"United Australia Party","totalVotes":"2520","percent":2.1177182426300045},"party":"United Australia Party","changeInPercent":0.31301256306437475},{"2022":{"party":"Australian Federation Party","totalVotes":"543","percent":0.4563178594238462},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1250","percent":1.0504554774950419},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2843","percent":2.450228389209687},"2022":{"party":"Independent","totalVotes":"1048","percent":0.880701872331843},"party":"Independent","changeInPercent":-1.5695265168778443},{"2019":{"party":"Animal Justice Party","totalVotes":"2675","percent":2.3054382487287772},"2022":{"party":"Animal Justice Party","totalVotes":"1358","percent":1.1412148307506134},"party":"Animal Justice Party","changeInPercent":-1.1642234179781639},{"2019":{"party":"Liberal","totalVotes":"49973","percent":43.06903387055072},"2022":{"party":"Liberal","totalVotes":"43196","percent":36.300379844700664},"party":"LNP","changeInPercent":-6.768654025850054},{"2019":{"party":"Australian Labor Party","totalVotes":"38297","percent":33.00611910712747},"2022":{"party":"Australian Labor Party","totalVotes":"36746","percent":30.880029580826246},"party":"ALP","changeInPercent":-2.1260895263012216},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2320","percent":1.9496453662307975},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"5453","percent":4.69964664310954},"2022":{"party":"Informal","totalVotes":"5289","percent":4.444687216377021},"party":"Informal","changeInPercent":-0.25495942673251903},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"868","percent":0.7480823924847022},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Rise Up Australia Party","totalVotes":"603","percent":0.5196931827975524},"party":"Rise Up Australia Party","changeInPercent":null}]},{"electorate":"Grey","totalVotes":111131,"candidates":[{"2019":{"party":"The Greens","totalVotes":"4760","percent":4.283233301239078},"2022":{"party":"The Greens","totalVotes":"6994","percent":6.312730161022456},"party":"GRN","changeInPercent":2.029496859783378},{"2019":{"party":"United Australia Party","totalVotes":"3891","percent":3.5012732720842967},"2022":{"party":"United Australia Party","totalVotes":"5781","percent":5.217885767925482},"party":"United Australia Party","changeInPercent":1.7166124958411855},{"2022":{"party":"Liberal Democrats","totalVotes":"1427","percent":1.287999133511445},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1797","percent":1.6170105551106353},"2022":{"party":"Independent","totalVotes":"11613","percent":10.481803740342263},"party":"Independent","changeInPercent":8.864793185231628},{"2019":{"party":"Australian Labor Party","totalVotes":"23612","percent":21.24699678757502},"2022":{"party":"Australian Labor Party","totalVotes":"22068","percent":19.91840566105856},"party":"ALP","changeInPercent":-1.3285911265164607},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"8990","percent":8.089551970197336},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6452","percent":5.823525164271789},"party":"Pauline Hanson's One Nation","changeInPercent":-2.266026805925547},{"2022":{"party":"Australian Federation Party","totalVotes":"721","percent":0.6507690085926782},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"52392","percent":47.14436115935248},"2022":{"party":"Liberal","totalVotes":"46730","percent":42.17813560545888},"party":"LNP","changeInPercent":-4.966225553893601},{"2019":{"party":"Informal","totalVotes":"7684","percent":6.914362329143084},"2022":{"party":"Informal","totalVotes":"7674","percent":6.92649288757311},"party":"Informal","changeInPercent":0.01213055843002575},{"2019":{"party":"Animal Justice Party","totalVotes":"2681","percent":2.4124681681978926},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Centre Alliance","totalVotes":"5324","percent":4.790742457100179},"party":"Centre Alliance","changeInPercent":null}]},{"electorate":"Hindmarsh","totalVotes":113879,"candidates":[{"2019":{"party":"The Greens","totalVotes":"11966","percent":10.507644078363878},"2022":{"party":"The Greens","totalVotes":"15310","percent":13.08222748207709},"party":"GRN","changeInPercent":2.5745834037132127},{"2019":{"party":"Liberal","totalVotes":"40039","percent":35.1592479737265},"2022":{"party":"Liberal","totalVotes":"36072","percent":30.823129309829188},"party":"LNP","changeInPercent":-4.336118663897313},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4341","percent":3.7093370019396903},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"46950","percent":41.22797003837406},"2022":{"party":"Australian Labor Party","totalVotes":"46547","percent":39.773902195182394},"party":"ALP","changeInPercent":-1.454067843191666},{"2022":{"party":"Australian Federation Party","totalVotes":"653","percent":0.5579813550487486},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4729","percent":4.1526532547704145},"2022":{"party":"United Australia Party","totalVotes":"3896","percent":3.3290893710106046},"party":"United Australia Party","changeInPercent":-0.8235638837598098},{"2022":{"party":"The Great Australian Party","totalVotes":"1184","percent":1.011715044988849},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"3219","percent":2.8266844633338897},"2022":{"party":"Animal Justice Party","totalVotes":"2340","percent":1.9995043963462047},"party":"Animal Justice Party","changeInPercent":-0.827180066987685},{"2019":{"party":"Informal","totalVotes":"4924","percent":4.323887635121489},"2022":{"party":"Informal","totalVotes":"6686","percent":5.713113843577233},"party":"Informal","changeInPercent":1.389226208455744},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2052","percent":1.8019125563097673},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Kingston","totalVotes":110628,"candidates":[{"2022":{"party":"Independent","totalVotes":"2963","percent":2.606026491231156},"party":"Independent","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5313","percent":4.6729054161023065},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"5270","percent":4.763712622482554},"2022":{"party":"United Australia Party","totalVotes":"4321","percent":3.8004186529226547},"party":"United Australia Party","changeInPercent":-0.9632939695598997},{"2019":{"party":"Australian Labor Party","totalVotes":"53655","percent":48.500379650721335},"2022":{"party":"Australian Labor Party","totalVotes":"53810","percent":47.32712976481556},"party":"ALP","changeInPercent":-1.1732498859057756},{"2019":{"party":"The Greens","totalVotes":"9764","percent":8.825975340781719},"2022":{"party":"The Greens","totalVotes":"13603","percent":11.96415064469032},"party":"GRN","changeInPercent":3.1381753039086018},{"2022":{"party":"Australian Federation Party","totalVotes":"1079","percent":0.9490052595472216},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"33650","percent":30.41725422135445},"2022":{"party":"Liberal","totalVotes":"28273","percent":24.866752273566817},"party":"LNP","changeInPercent":-5.550501947787634},{"2019":{"party":"Informal","totalVotes":"4547","percent":4.1101710236106594},"2022":{"party":"Informal","totalVotes":"4336","percent":3.81361149712396},"party":"Informal","changeInPercent":-0.29655952648669937},{"2019":{"party":"Animal Justice Party","totalVotes":"3742","percent":3.3825071410492824},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Makin","totalVotes":111725,"candidates":[{"2022":{"party":"Australian Federation Party","totalVotes":"1907","percent":1.6984173635788782},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"51666","percent":46.243902439024396},"2022":{"party":"Australian Labor Party","totalVotes":"49843","percent":44.391303960598854},"party":"ALP","changeInPercent":-1.8525984784255414},{"2019":{"party":"United Australia Party","totalVotes":"6874","percent":6.152606847169388},"2022":{"party":"United Australia Party","totalVotes":"4638","percent":4.130707777807465},"party":"United Australia Party","changeInPercent":-2.0218990693619237},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5097","percent":4.539503566943651},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"35087","percent":31.404788543298277},"2022":{"party":"Liberal","totalVotes":"33840","percent":30.138669944157957},"party":"LNP","changeInPercent":-1.26611859914032},{"2019":{"party":"The Greens","totalVotes":"9211","percent":8.244349966435443},"2022":{"party":"The Greens","totalVotes":"12317","percent":10.969798986471442},"party":"GRN","changeInPercent":2.725449020035999},{"2019":{"party":"Informal","totalVotes":"5021","percent":4.494070261803536},"2022":{"party":"Informal","totalVotes":"4639","percent":4.1315984004417485},"party":"Informal","changeInPercent":-0.36247186136178744},{"2019":{"party":"Animal Justice Party","totalVotes":"3866","percent":3.460281942268964},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Mayo","totalVotes":116216,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"15390","percent":13.24258277689819},"2022":{"party":"Australian Labor Party","totalVotes":"21051","percent":17.19993463518261},"party":"ALP","changeInPercent":3.9573518582844205},{"2019":{"party":"Animal Justice Party","totalVotes":"2302","percent":1.9807943828732706},"2022":{"party":"Animal Justice Party","totalVotes":"1929","percent":1.5761091592450365},"party":"Animal Justice Party","changeInPercent":-0.4046852236282341},{"2022":{"party":"Liberal Democrats","totalVotes":"1424","percent":1.1634937494893374},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Centre Alliance","totalVotes":"38525","percent":33.14948027810284},"2022":{"party":"Centre Alliance","totalVotes":"36500","percent":29.82269793283765},"party":"Centre Alliance","changeInPercent":-3.326782345265194},{"2019":{"party":"The Greens","totalVotes":"10436","percent":8.979830660150064},"2022":{"party":"The Greens","totalVotes":"13705","percent":11.197810278617535},"party":"GRN","changeInPercent":2.2179796184674707},{"2019":{"party":"Liberal","totalVotes":"42426","percent":36.50616094169477},"2022":{"party":"Liberal","totalVotes":"31411","percent":25.664678486804476},"party":"LNP","changeInPercent":-10.841482454890297},{"2019":{"party":"United Australia Party","totalVotes":"3597","percent":3.0950987815791287},"2022":{"party":"United Australia Party","totalVotes":"4089","percent":3.3409592286951546},"party":"United Australia Party","changeInPercent":0.24586044711602595},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4775","percent":3.9014625377890346},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"1330","percent":1.0866900890595637},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"3540","percent":3.046052178701728},"2022":{"party":"Informal","totalVotes":"6176","percent":5.0461639022795985},"party":"Informal","changeInPercent":2.0001117235778705}]},{"electorate":"Spence","totalVotes":108096,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"7157","percent":6.620966548253405},"2022":{"party":"United Australia Party","totalVotes":"7158","percent":6.404738683440556},"party":"United Australia Party","changeInPercent":-0.21622786481284884},{"2019":{"party":"Australian Labor Party","totalVotes":"51791","percent":47.912041148608644},"2022":{"party":"Australian Labor Party","totalVotes":"46596","percent":41.69254033160047},"party":"ALP","changeInPercent":-6.219500817008175},{"2019":{"party":"The Greens","totalVotes":"7330","percent":6.7810094730609825},"2022":{"party":"The Greens","totalVotes":"12052","percent":10.78372598670377},"party":"GRN","changeInPercent":4.002716513642787},{"2022":{"party":"Australian Federation Party","totalVotes":"1736","percent":1.5533146625388106},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"26252","percent":24.285820011841327},"2022":{"party":"Liberal","totalVotes":"27153","percent":24.295595064467925},"party":"LNP","changeInPercent":0.009775052626597613},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"11532","percent":10.318447401150669},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"6467","percent":5.9826450562463},"2022":{"party":"Informal","totalVotes":"5534","percent":4.951637870097798},"party":"Informal","changeInPercent":-1.0310071861485017},{"2019":{"party":"Animal Justice Party","totalVotes":"3626","percent":3.3544256956779157},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"5473","percent":5.063092066311427},"party":"Independent","changeInPercent":null}]},{"electorate":"Sturt","totalVotes":115953,"candidates":[{"2019":{"party":"The Greens","totalVotes":"12263","percent":10.575836761446448},"2022":{"party":"The Greens","totalVotes":"18454","percent":15.487910298696612},"party":"GRN","changeInPercent":4.912073537250164},{"2019":{"party":"Australian Labor Party","totalVotes":"32766","percent":28.258001086647177},"2022":{"party":"Australian Labor Party","totalVotes":"34528","percent":28.978355196347493},"party":"ALP","changeInPercent":0.7203541097003168},{"2022":{"party":"TNL","totalVotes":"251","percent":0.2106570654044028},"party":"TNL","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2893","percent":2.428011514800547},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Progressives","totalVotes":"565","percent":0.4872663924176175},"2022":{"party":"Australian Progressives","totalVotes":"457","percent":0.38354692784785693},"party":"Australian Progressives","changeInPercent":-0.10371946456976056},{"2019":{"party":"United Australia Party","totalVotes":"2657","percent":2.2914456719532916},"2022":{"party":"United Australia Party","totalVotes":"3008","percent":2.524527700145194},"party":"United Australia Party","changeInPercent":0.23308202819190216},{"2022":{"party":"Australian Federation Party","totalVotes":"755","percent":0.6336497385670283},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"1866","percent":1.609272722568627},"2022":{"party":"Animal Justice Party","totalVotes":"1531","percent":1.2849241718491662},"party":"Animal Justice Party","changeInPercent":-0.3243485507194608},{"2022":{"party":"Liberal Democrats","totalVotes":"1147","percent":0.9626440399157372},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Drew Pavlou Democratic Alliance","totalVotes":"1007","percent":0.8451460751483411},"party":"Drew Pavlou Democratic Alliance","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"55490","percent":47.85559666416566},"2022":{"party":"Liberal","totalVotes":"48579","percent":40.7709545031095},"party":"LNP","changeInPercent":-7.084642161056159},{"2019":{"party":"Informal","totalVotes":"6221","percent":5.36510482695575},"2022":{"party":"Informal","totalVotes":"6541","percent":5.4896727681681226},"party":"Informal","changeInPercent":0.1245679412123728},{"2019":{"party":"Child Protection Party","totalVotes":"1219","percent":1.0512880218709304},"party":"Child Protection Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2906","percent":2.506187851974507},"party":"Independent","changeInPercent":null}]},{"electorate":"Bass","totalVotes":71973,"candidates":[{"2019":{"party":"Independent","totalVotes":"2607","percent":3.622191655204035},"2022":{"party":"Independent","totalVotes":"3450","percent":4.730368968779565},"party":"Independent","changeInPercent":1.1081773135755304},{"2022":{"party":"Jacqui Lambie Network","totalVotes":"4587","percent":6.2893340463164815},"party":"Jacqui Lambie Network","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"7202","percent":10.006530226612757},"2022":{"party":"The Greens","totalVotes":"7614","percent":10.439718645880465},"party":"GRN","changeInPercent":0.433188419267708},{"2019":{"party":"Liberal","totalVotes":"29094","percent":40.423492142886914},"2022":{"party":"Liberal","totalVotes":"27257","percent":37.37265709623902},"party":"LNP","changeInPercent":-3.0508350466478973},{"2019":{"party":"Animal Justice Party","totalVotes":"1667","percent":2.3161463326525222},"2022":{"party":"Animal Justice Party","totalVotes":"969","percent":1.328616675578956},"party":"Animal Justice Party","changeInPercent":-0.9875296570735663},{"2022":{"party":"Liberal Democrats","totalVotes":"732","percent":1.0036608942454035},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3342","percent":4.643407944645909},"2022":{"party":"United Australia Party","totalVotes":"1140","percent":1.5630784418575954},"party":"United Australia Party","changeInPercent":-3.0803295027883135},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3230","percent":4.4287222519298535},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"23878","percent":33.17633001264363},"2022":{"party":"Australian Labor Party","totalVotes":"19630","percent":26.91511387163561},"party":"ALP","changeInPercent":-6.2612161410080205},{"2019":{"party":"Informal","totalVotes":"3240","percent":4.5016881330498935},"2022":{"party":"Informal","totalVotes":"4324","percent":5.9287291075370545},"party":"Informal","changeInPercent":1.427040974487161}]},{"electorate":"Braddon","totalVotes":75303,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"3879","percent":5.151189195649575},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3065","percent":4.008841686721774},"party":"Pauline Hanson's One Nation","changeInPercent":-1.1423475089278012},{"2019":{"party":"The Greens","totalVotes":"3384","percent":4.493844866738377},"2022":{"party":"The Greens","totalVotes":"4745","percent":6.206183948937951},"party":"GRN","changeInPercent":1.7123390821995734},{"2019":{"party":"Liberal","totalVotes":"26513","percent":35.208424631156795},"2022":{"party":"Liberal","totalVotes":"31142","percent":40.731924244009626},"party":"LNP","changeInPercent":5.523499612852831},{"2022":{"party":"The Local Party","totalVotes":"719","percent":0.9404101705556137},"party":"The Local Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"22434","percent":29.79164176726027},"2022":{"party":"Australian Labor Party","totalVotes":"15886","percent":20.777963796170347},"party":"ALP","changeInPercent":-9.013677971089923},{"2019":{"party":"United Australia Party","totalVotes":"2575","percent":3.419518478679468},"2022":{"party":"United Australia Party","totalVotes":"1000","percent":1.3079418227477242},"party":"United Australia Party","changeInPercent":-2.111576655931744},{"2019":{"party":"Independent","totalVotes":"7619","percent":10.117790791867522},"2022":{"party":"Independent","totalVotes":"5538","percent":7.243381814376897},"party":"Independent","changeInPercent":-2.874408977490625},{"2022":{"party":"Animal Justice Party","totalVotes":"566","percent":0.7402950716752119},"party":"Animal Justice Party","changeInPercent":null},{"2022":{"party":"Jacqui Lambie Network","totalVotes":"6966","percent":9.111122737260647},"party":"Jacqui Lambie Network","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"971","percent":1.2700115098880402},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"5330","percent":7.078071258781191},"2022":{"party":"Informal","totalVotes":"5858","percent":7.661923197656169},"party":"Informal","changeInPercent":0.5838519388749779},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"712","percent":0.9455134589591385},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Clark","totalVotes":69150,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1715","percent":2.4920805603185214},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"13641","percent":19.726681127982644},"2022":{"party":"Australian Labor Party","totalVotes":"12364","percent":17.966229765468338},"party":"ALP","changeInPercent":-1.7604513625143063},{"2022":{"party":"Liberal Democrats","totalVotes":"739","percent":1.0738469586445407},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"11719","percent":16.9472161966739},"2022":{"party":"Liberal","totalVotes":"10441","percent":15.171902699875034},"party":"LNP","changeInPercent":-1.7753134967988657},{"2019":{"party":"The Greens","totalVotes":"6458","percent":9.339117859725235},"2022":{"party":"The Greens","totalVotes":"8861","percent":12.875991746345433},"party":"GRN","changeInPercent":3.5368738866201976},{"2019":{"party":"Independent","totalVotes":"33761","percent":48.822848879248006},"2022":{"party":"Independent","totalVotes":"30005","percent":43.60051149408585},"party":"Independent","changeInPercent":-5.222337385162156},{"2022":{"party":"Animal Justice Party","totalVotes":"828","percent":1.2031735883053851},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1882","percent":2.7216196673897324},"2022":{"party":"United Australia Party","totalVotes":"941","percent":1.3673748147287046},"party":"United Australia Party","changeInPercent":-1.3542448526610278},{"2019":{"party":"Informal","totalVotes":"1689","percent":2.4425162689804774},"2022":{"party":"Informal","totalVotes":"2924","percent":4.248888372228196},"party":"Informal","changeInPercent":1.8063721032477185}]},{"electorate":"Franklin","totalVotes":72545,"candidates":[{"2022":{"party":"The Local Party","totalVotes":"3535","percent":4.716163031152024},"party":"The Local Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"30911","percent":42.60941484595768},"2022":{"party":"Australian Labor Party","totalVotes":"26147","percent":34.883596824761526},"party":"ALP","changeInPercent":-7.7258180211961545},{"2022":{"party":"Liberal Democrats","totalVotes":"1434","percent":1.9131478887332398},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2033","percent":2.712294043092522},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4704","percent":6.484251154455856},"2022":{"party":"United Australia Party","totalVotes":"1380","percent":1.8411046627976786},"party":"United Australia Party","changeInPercent":-4.643146491658177},{"2022":{"party":"Jacqui Lambie Network","totalVotes":"4215","percent":5.623374024414648},"party":"Jacqui Lambie Network","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"21969","percent":30.283272451581777},"2022":{"party":"Liberal","totalVotes":"19048","percent":25.41258088186245},"party":"LNP","changeInPercent":-4.870691569719327},{"2022":{"party":"Animal Justice Party","totalVotes":"1097","percent":1.4635447935427923},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"The Greens","totalVotes":"11420","percent":15.741953270383899},"2022":{"party":"The Greens","totalVotes":"12370","percent":16.50323527449803},"party":"GRN","changeInPercent":0.7612820041141326},{"2019":{"party":"Informal","totalVotes":"2284","percent":3.14839065407678},"2022":{"party":"Informal","totalVotes":"3696","percent":4.930958575145087},"party":"Informal","changeInPercent":1.7825679210683067},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1257","percent":1.7327176235440074},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Lyons","totalVotes":74991,"candidates":[{"2019":{"party":"The Nationals","totalVotes":"11222","percent":14.964462402154927},"2022":{"party":"Liberal","totalVotes":"27296","percent":34.874153570972275},"party":"LNP","changeInPercent":19.909691168817346},{"2022":{"party":"Liberal Democrats","totalVotes":"1188","percent":1.5178229206592564},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"26091","percent":34.79217506100732},"2022":{"party":"Australian Labor Party","totalVotes":"21295","percent":27.20710361568928},"party":"ALP","changeInPercent":-7.5850714453180395},{"2022":{"party":"Animal Justice Party","totalVotes":"1312","percent":1.676248882074869},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4365","percent":5.820698483818059},"2022":{"party":"United Australia Party","totalVotes":"1976","percent":2.524594352881053},"party":"United Australia Party","changeInPercent":-3.296104130937006},{"2022":{"party":"Jacqui Lambie Network","totalVotes":"7962","percent":10.172479877347643},"party":"Jacqui Lambie Network","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5820","percent":7.76093131175741},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3927","percent":5.017247987734764},"party":"Pauline Hanson's One Nation","changeInPercent":-2.743683324022646},{"2019":{"party":"The Greens","totalVotes":"6765","percent":9.02108252990359},"2022":{"party":"The Greens","totalVotes":"8382","percent":10.709083940206977},"party":"GRN","changeInPercent":1.6880014103033876},{"2019":{"party":"Informal","totalVotes":"3427","percent":4.56988171913963},"2022":{"party":"Informal","totalVotes":"4932","percent":6.301264852433882},"party":"Informal","changeInPercent":1.7313831332942522}]},{"electorate":"Aston","totalVotes":103919,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"3611","percent":3.4748217361598934},"2022":{"party":"United Australia Party","totalVotes":"5990","percent":5.902640914465905},"party":"United Australia Party","changeInPercent":2.4278191783060112},{"2019":{"party":"Liberal","totalVotes":"54744","percent":52.67949075722438},"2022":{"party":"Liberal","totalVotes":"42260","percent":41.64367363027198},"party":"LNP","changeInPercent":-11.035817126952402},{"2019":{"party":"The Greens (VIC)","totalVotes":"8867","percent":8.532607126704454},"2022":{"party":"The Greens","totalVotes":"11855","percent":11.68210484824596},"party":"GRN","changeInPercent":3.149497721541506},{"2022":{"party":"TNL","totalVotes":"973","percent":0.9588096176586519},"party":"TNL","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3022","percent":2.977926685061096},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"2111","percent":2.080212849822625},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"29839","percent":28.713709716221285},"2022":{"party":"Australian Labor Party","totalVotes":"31949","percent":31.483050847457626},"party":"ALP","changeInPercent":2.7693411312363416},{"2019":{"party":"Informal","totalVotes":"3829","percent":3.684600506163454},"2022":{"party":"Informal","totalVotes":"3320","percent":3.2715806070161606},"party":"Informal","changeInPercent":-0.4130198991472933},{"2019":{"party":"Labour DLP","totalVotes":"3029","percent":2.9147701575265352},"party":"Labour DLP","changeInPercent":null}]},{"electorate":"Ballarat","totalVotes":107372,"candidates":[{"2019":{"party":"The Greens (VIC)","totalVotes":"9077","percent":8.453786834556496},"2022":{"party":"The Greens","totalVotes":"14076","percent":13.8531035636607},"party":"GRN","changeInPercent":5.3993167291042035},{"2019":{"party":"Liberal","totalVotes":"31462","percent":29.30186640837462},"2022":{"party":"Liberal","totalVotes":"26142","percent":25.728035902331488},"party":"LNP","changeInPercent":-3.5738305060431337},{"2019":{"party":"Independent","totalVotes":"1645","percent":1.5320567745781022},"2022":{"party":"Independent","totalVotes":"2044","percent":2.011632827800687},"party":"Independent","changeInPercent":0.479576053222585},{"2022":{"party":"Australian Federation Party","totalVotes":"682","percent":0.6712003857925971},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4741","percent":4.415490071899565},"2022":{"party":"United Australia Party","totalVotes":"3693","percent":3.6345205641232567},"party":"United Australia Party","changeInPercent":-0.7809695077763079},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3476","percent":3.42095680500743},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"3216","percent":3.16507395998386},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"49077","percent":45.7074470066684},"2022":{"party":"Australian Labor Party","totalVotes":"43171","percent":42.487378086586816},"party":"ALP","changeInPercent":-3.2200689200815873},{"2019":{"party":"Informal","totalVotes":"4689","percent":4.367060313675818},"2022":{"party":"Informal","totalVotes":"5109","percent":5.028097904713165},"party":"Informal","changeInPercent":0.6610375910373465},{"2019":{"party":"Animal Justice Party","totalVotes":"4393","percent":4.091383228402191},"party":"Animal Justice Party","changeInPercent":null}]},{"electorate":"Bendigo","totalVotes":105979,"candidates":[{"2022":{"party":"Independent","totalVotes":"4319","percent":4.171213891813063},"party":"Independent","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"44340","percent":41.83847743420866},"2022":{"party":"Australian Labor Party","totalVotes":"42883","percent":41.41564374221338},"party":"ALP","changeInPercent":-0.42283369199527954},{"2019":{"party":"Liberal","totalVotes":"32210","percent":30.39281367063286},"2022":{"party":"Liberal","totalVotes":"26576","percent":25.666631254647825},"party":"LNP","changeInPercent":-4.726182415985036},{"2019":{"party":"The Greens (VIC)","totalVotes":"11381","percent":10.738919974711973},"2022":{"party":"The Greens","totalVotes":"14026","percent":13.546062988323692},"party":"GRN","changeInPercent":2.8071430136117197},{"2022":{"party":"Liberal Democrats","totalVotes":"2888","percent":2.789179374752518},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"6278","percent":5.9238150954434365},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5508","percent":5.319529084534928},"party":"Pauline Hanson's One Nation","changeInPercent":-0.6042860109085089},{"2019":{"party":"United Australia Party","totalVotes":"4321","percent":4.077222846035535},"2022":{"party":"United Australia Party","totalVotes":"3579","percent":3.4565349661493294},"party":"United Australia Party","changeInPercent":-0.6206878798862054},{"2019":{"party":"Informal","totalVotes":"4318","percent":4.074392096547429},"2022":{"party":"Informal","totalVotes":"3764","percent":3.6352046975652628},"party":"Informal","changeInPercent":-0.4391873989821664},{"2019":{"party":"Rise Up Australia Party","totalVotes":"1464","percent":1.3814057501957935},"party":"Rise Up Australia Party","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1667","percent":1.5729531322243084},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Bruce","totalVotes":98561,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"4821","percent":4.8398269267450384},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3979","percent":4.037093779486815},"2022":{"party":"United Australia Party","totalVotes":"8299","percent":8.331409181716879},"party":"United Australia Party","changeInPercent":4.294315402230064},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4544","percent":4.561745188784371},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"51713","percent":52.468014731993385},"2022":{"party":"Australian Labor Party","totalVotes":"39516","percent":39.67031753521197},"party":"ALP","changeInPercent":-12.797697196781414},{"2019":{"party":"Liberal","totalVotes":"27170","percent":27.566684591268352},"2022":{"party":"Liberal","totalVotes":"28837","percent":28.949613998453987},"party":"LNP","changeInPercent":1.3829294071856353},{"2019":{"party":"The Greens (VIC)","totalVotes":"6801","percent":6.900295248627754},"2022":{"party":"The Greens","totalVotes":"9273","percent":9.309212837939585},"party":"GRN","changeInPercent":2.408917589311831},{"2019":{"party":"Informal","totalVotes":"5521","percent":5.60160712655107},"2022":{"party":"Informal","totalVotes":"4321","percent":4.337874331148166},"party":"Informal","changeInPercent":-1.2637327954029036},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"3377","percent":3.4263045220726247},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Calwell","totalVotes":96336,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5957","percent":6.566430405978902},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"21978","percent":22.81390134529148},"2022":{"party":"Liberal","totalVotes":"20111","percent":22.168454237811265},"party":"LNP","changeInPercent":-0.6454471074802157},{"2019":{"party":"The Greens (VIC)","totalVotes":"5893","percent":6.117131705696728},"2022":{"party":"The Greens","totalVotes":"8277","percent":9.123777819420408},"party":"GRN","changeInPercent":3.0066461137236793},{"2019":{"party":"Australian Labor Party","totalVotes":"47115","percent":48.906950672645735},"2022":{"party":"Australian Labor Party","totalVotes":"38127","percent":42.02757966908806},"party":"ALP","changeInPercent":-6.879371003557672},{"2019":{"party":"United Australia Party","totalVotes":"3037","percent":3.1525078890549745},"2022":{"party":"United Australia Party","totalVotes":"7578","percent":8.353266680629195},"party":"United Australia Party","changeInPercent":5.200758791574221},{"2019":{"party":"Victorian Socialists","totalVotes":"3984","percent":4.135525660189337},"2022":{"party":"Victorian Socialists","totalVotes":"3433","percent":3.7842127889416775},"party":"Victorian Socialists","changeInPercent":-0.35131287124765986},{"2022":{"party":"Australian Federation Party","totalVotes":"1512","percent":1.6666850384153264},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"8884","percent":9.221890051486465},"2022":{"party":"Informal","totalVotes":"5724","percent":6.309593359715164},"party":"Informal","changeInPercent":-2.912296691771301},{"2019":{"party":"Citizens Electoral Council","totalVotes":"2851","percent":2.959433648895532},"party":"Citizens Electoral Council","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1771","percent":1.8383574157116758},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Socialist Equality Party","totalVotes":"823","percent":0.8543016110280685},"party":"Socialist Equality Party","changeInPercent":null}]},{"electorate":"Casey","totalVotes":106720,"candidates":[{"2019":{"party":"The Greens (VIC)","totalVotes":"10919","percent":10.231446776611694},"2022":{"party":"The Greens","totalVotes":"12894","percent":12.132902995116352},"party":"GRN","changeInPercent":1.9014562185046575},{"2019":{"party":"Independent","totalVotes":"2302","percent":2.157046476761619},"2022":{"party":"Independent","totalVotes":"3455","percent":3.251060946806809},"party":"Independent","changeInPercent":1.09401447004519},{"2019":{"party":"Animal Justice Party","totalVotes":"3105","percent":2.9094827586206895},"2022":{"party":"Animal Justice Party","totalVotes":"1844","percent":1.7351538020005082},"party":"Animal Justice Party","changeInPercent":-1.1743289566201813},{"2019":{"party":"Liberal","totalVotes":"45168","percent":42.32383808095952},"2022":{"party":"Liberal","totalVotes":"36347","percent":34.20153754951869},"party":"LNP","changeInPercent":-8.122300531440828},{"2019":{"party":"Australian Labor Party","totalVotes":"28551","percent":26.75318590704648},"2022":{"party":"Australian Labor Party","totalVotes":"24779","percent":23.316364457576242},"party":"ALP","changeInPercent":-3.436821449470237},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3260","percent":3.067571255163588},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"686","percent":0.645507325473074},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"2008","percent":1.8894733375363448},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Derryn Hinch's Justice Party","totalVotes":"3309","percent":3.1006371814092955},"2022":{"party":"Derryn Hinch's Justice Party","totalVotes":"1207","percent":1.1357541426326536},"party":"Derryn Hinch's Justice Party","changeInPercent":-1.9648830387766418},{"2019":{"party":"United Australia Party","totalVotes":"2607","percent":2.4428410794602695},"2022":{"party":"United Australia Party","totalVotes":"4834","percent":4.548662407196559},"party":"United Australia Party","changeInPercent":2.10582132773629},{"2019":{"party":"Informal","totalVotes":"6892","percent":6.458020989505248},"2022":{"party":"Informal","totalVotes":"6652","percent":6.259350916977972},"party":"Informal","changeInPercent":-0.19867007252727564},{"2019":{"party":"Rise Up Australia Party","totalVotes":"820","percent":0.7683658170914542},"party":"Rise Up Australia Party","changeInPercent":null},{"2019":{"party":"Labour DLP","totalVotes":"2246","percent":2.1045727136431784},"party":"Labour DLP","changeInPercent":null},{"2019":{"party":"The Great Australian Party","totalVotes":"801","percent":0.7505622188905547},"party":"The Great Australian Party","changeInPercent":null}]},{"electorate":"Chisholm","totalVotes":99383,"candidates":[{"2019":{"party":"Liberal","totalVotes":"41172","percent":41.427608343479264},"2022":{"party":"Liberal","totalVotes":"35038","percent":34.59484009834026},"party":"LNP","changeInPercent":-6.832768245139},{"2019":{"party":"Derryn Hinch's Justice Party","totalVotes":"2063","percent":2.075807733717034},"2022":{"party":"Derryn Hinch's Justice Party","totalVotes":"946","percent":0.934035011502651},"party":"Derryn Hinch's Justice Party","changeInPercent":-1.141772722214383},{"2022":{"party":"Australian Federation Party","totalVotes":"567","percent":0.559828595689221},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1377","percent":1.3595837323881084},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"1780","percent":1.7910507833331657},"2022":{"party":"Animal Justice Party","totalVotes":"1122","percent":1.1078089671310511},"party":"Animal Justice Party","changeInPercent":-0.6832418162021145},{"2022":{"party":"Citizens Party","totalVotes":"384","percent":0.3791431759165095},"party":"Citizens Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1620","percent":1.5995102733977744},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"11235","percent":11.304750309409053},"2022":{"party":"The Greens","totalVotes":"12130","percent":11.97658001007099},"party":"GRN","changeInPercent":0.6718297006619363},{"2019":{"party":"United Australia Party","totalVotes":"1517","percent":1.5264179990541642},"2022":{"party":"United Australia Party","totalVotes":"2295","percent":2.265972887313514},"party":"United Australia Party","changeInPercent":0.7395548882593497},{"2019":{"party":"Independent","totalVotes":"2319","percent":2.333397059859332},"2022":{"party":"Independent","totalVotes":"1590","percent":1.569889712779297},"party":"Independent","changeInPercent":-0.7635073470800349},{"2019":{"party":"Australian Labor Party","totalVotes":"32561","percent":32.76314862702876},"2022":{"party":"Australian Labor Party","totalVotes":"38692","percent":38.202624381670795},"party":"ALP","changeInPercent":5.439475754642032},{"2019":{"party":"Informal","totalVotes":"4463","percent":4.490707666301078},"2022":{"party":"Informal","totalVotes":"4763","percent":4.70275767419358},"party":"Informal","changeInPercent":0.21205000789250228},{"2019":{"party":"Rise Up Australia Party","totalVotes":"571","percent":0.5745449422939537},"party":"Rise Up Australia Party","changeInPercent":null},{"2019":{"party":"Labour DLP","totalVotes":"1702","percent":1.7125665355241841},"party":"Labour DLP","changeInPercent":null}]},{"electorate":"Cooper","totalVotes":102467,"candidates":[{"2019":{"party":"Animal Justice Party","totalVotes":"2476","percent":2.416387715069242},"2022":{"party":"Animal Justice Party","totalVotes":"2207","percent":2.2539037367620174},"party":"Animal Justice Party","changeInPercent":-0.1624839783072245},{"2019":{"party":"Victorian Socialists","totalVotes":"4125","percent":4.025686318522061},"2022":{"party":"Victorian Socialists","totalVotes":"3250","percent":3.319069843442029},"party":"Victorian Socialists","changeInPercent":-0.7066164750800317},{"2019":{"party":"The Greens (VIC)","totalVotes":"20605","percent":20.108913113490196},"2022":{"party":"The Greens","totalVotes":"25648","percent":26.193077952184968},"party":"GRN","changeInPercent":6.084164838694772},{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"1585","percent":1.6186848313401896},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"19012","percent":18.55426625157368},"2022":{"party":"Liberal","totalVotes":"15329","percent":15.654775886191649},"party":"LNP","changeInPercent":-2.8994903653820305},{"2019":{"party":"United Australia Party","totalVotes":"1892","percent":1.8464481247621185},"2022":{"party":"United Australia Party","totalVotes":"4170","percent":4.258621922201003},"party":"United Australia Party","changeInPercent":2.412173797438885},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2807","percent":2.866655092474392},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"45601","percent":44.50310831779988},"2022":{"party":"Australian Labor Party","totalVotes":"38754","percent":39.577610065462274},"party":"ALP","changeInPercent":-4.925498252337604},{"2019":{"party":"Informal","totalVotes":"4986","percent":4.865956844642665},"2022":{"party":"Informal","totalVotes":"4169","percent":4.257600669941483},"party":"Informal","changeInPercent":-0.6083561747011821},{"2019":{"party":"Independent","totalVotes":"1660","percent":1.6200337669688778},"party":"Independent","changeInPercent":null},{"2019":{"party":"Reason Australia","totalVotes":"2110","percent":2.0591995471712843},"party":"Reason Australia","changeInPercent":null}]},{"electorate":"Corangamite","totalVotes":105816,"candidates":[{"2022":{"party":"Australian Federation Party","totalVotes":"868","percent":0.8262338774927418},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"9184","percent":8.67921675361004},"2022":{"party":"The Greens","totalVotes":"15349","percent":14.61044214935034},"party":"GRN","changeInPercent":5.931225395740299},{"2019":{"party":"Australian Labor Party","totalVotes":"36047","percent":34.06573675058592},"2022":{"party":"Australian Labor Party","totalVotes":"38573","percent":36.71695778401789},"party":"ALP","changeInPercent":2.6512210334319732},{"2019":{"party":"Animal Justice Party","totalVotes":"2143","percent":2.0252135782868375},"2022":{"party":"Animal Justice Party","totalVotes":"1986","percent":1.890438341820951},"party":"Animal Justice Party","changeInPercent":-0.13477523646588652},{"2019":{"party":"Liberal","totalVotes":"43017","percent":40.65264232252211},"2022":{"party":"Liberal","totalVotes":"34463","percent":32.80472133644282},"party":"LNP","changeInPercent":-7.847920986079295},{"2022":{"party":"Liberal Democrats","totalVotes":"2526","percent":2.4044548093855598},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2548","percent":2.425396221027081},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2257","percent":2.132947758373025},"2022":{"party":"United Australia Party","totalVotes":"3233","percent":3.0774356289562608},"party":"United Australia Party","changeInPercent":0.9444878705832358},{"2019":{"party":"Derryn Hinch's Justice Party","totalVotes":"2724","percent":2.574279882059424},"2022":{"party":"Derryn Hinch's Justice Party","totalVotes":"1421","percent":1.3526248155727953},"party":"Derryn Hinch's Justice Party","changeInPercent":-1.2216550664866286},{"2019":{"party":"Informal","totalVotes":"4196","percent":3.9653738565056322},"2022":{"party":"Informal","totalVotes":"4088","percent":3.8912950359335583},"party":"Informal","changeInPercent":-0.07407882057207393},{"2019":{"party":"Rise Up Australia Party","totalVotes":"1117","percent":1.0556059575111514},"party":"Rise Up Australia Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"5131","percent":4.848983140545853},"party":"Independent","changeInPercent":null}]},{"electorate":"Corio","totalVotes":102400,"candidates":[{"2022":{"party":"Socialist Alliance","totalVotes":"2444","percent":2.389402160629613},"party":"Socialist Alliance","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"1080","percent":1.0558732952045755},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"33426","percent":32.642578125},"2022":{"party":"Liberal","totalVotes":"23822","percent":23.28982744292907},"party":"LNP","changeInPercent":-9.35275068207093},{"2019":{"party":"The Greens (VIC)","totalVotes":"12902","percent":12.599609375000002},"2022":{"party":"The Greens","totalVotes":"14450","percent":14.127193625653812},"party":"GRN","changeInPercent":1.5275842506538098},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3788","percent":3.7033778168841964},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Animal Justice Party","totalVotes":"2350","percent":2.2975020775284745},"party":"Animal Justice Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"3383","percent":3.30742533118248},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"5414","percent":5.287109375},"2022":{"party":"United Australia Party","totalVotes":"4781","percent":4.674194652197292},"party":"United Australia Party","changeInPercent":-0.6129147228027083},{"2019":{"party":"Australian Labor Party","totalVotes":"47010","percent":45.908203125},"2022":{"party":"Australian Labor Party","totalVotes":"40846","percent":39.933519088820454},"party":"ALP","changeInPercent":-5.974684036179546},{"2019":{"party":"Informal","totalVotes":"3648","percent":3.5624999999999996},"2022":{"party":"Informal","totalVotes":"5341","percent":5.221684508970035},"party":"Informal","changeInPercent":1.6591845089700352}]},{"electorate":"Deakin","totalVotes":101424,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"31648","percent":31.203659883262347},"2022":{"party":"Australian Labor Party","totalVotes":"32844","percent":31.37322329206786},"party":"ALP","changeInPercent":0.16956340880551224},{"2019":{"party":"The Greens (VIC)","totalVotes":"8730","percent":8.607430194036915},"2022":{"party":"The Greens","totalVotes":"13904","percent":13.281369402414795},"party":"GRN","changeInPercent":4.673939208377879},{"2019":{"party":"Independent","totalVotes":"1614","percent":1.5913393279697114},"2022":{"party":"Independent","totalVotes":"1271","percent":1.2140837536298335},"party":"Independent","changeInPercent":-0.377255574339878},{"2019":{"party":"Animal Justice Party","totalVotes":"1964","percent":1.9364253036756585},"2022":{"party":"Animal Justice Party","totalVotes":"1650","percent":1.5761118752865657},"party":"Animal Justice Party","changeInPercent":-0.36031342838909275},{"2022":{"party":"Liberal Democrats","totalVotes":"1843","percent":1.7604692037291763},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"46536","percent":45.882631329862754},"2022":{"party":"Liberal","totalVotes":"41626","percent":39.76195934586581},"party":"LNP","changeInPercent":-6.120671983996942},{"2019":{"party":"Derryn Hinch's Justice Party","totalVotes":"3386","percent":3.338460324972393},"2022":{"party":"Derryn Hinch's Justice Party","totalVotes":"1080","percent":1.031636863823934},"party":"Derryn Hinch's Justice Party","changeInPercent":-2.306823461148459},{"2019":{"party":"United Australia Party","totalVotes":"1997","percent":1.9689619813850767},"2022":{"party":"United Australia Party","totalVotes":"2836","percent":2.7090019868561823},"party":"United Australia Party","changeInPercent":0.7400400054711056},{"2022":{"party":"Australian Federation Party","totalVotes":"909","percent":0.8682943603851445},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2306","percent":2.20273574812777},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4155","percent":4.096663511594889},"2022":{"party":"Informal","totalVotes":"4419","percent":4.22111416781293},"party":"Informal","changeInPercent":0.12445065621804119},{"2019":{"party":"Labour DLP","totalVotes":"1394","percent":1.3744281432402587},"party":"Labour DLP","changeInPercent":null}]},{"electorate":"Dunkley","totalVotes":102078,"candidates":[{"2022":{"party":"Independent","totalVotes":"3698","percent":3.6806274384903257},"party":"Independent","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"37301","percent":36.54166421755912},"2022":{"party":"Australian Labor Party","totalVotes":"38506","percent":38.32510550203042},"party":"ALP","changeInPercent":1.7834412844712944},{"2022":{"party":"Liberal Democrats","totalVotes":"2398","percent":2.386734612628394},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"2961","percent":2.900722976547346},"2022":{"party":"Animal Justice Party","totalVotes":"2013","percent":2.0035432757385143},"party":"Animal Justice Party","changeInPercent":-0.8971797008088318},{"2019":{"party":"The Greens (VIC)","totalVotes":"8125","percent":7.959599521934208},"2022":{"party":"The Greens","totalVotes":"9898","percent":9.851500915677999},"party":"GRN","changeInPercent":1.8919013937437912},{"2019":{"party":"Liberal","totalVotes":"38616","percent":37.82989478633986},"2022":{"party":"Liberal","totalVotes":"31108","percent":30.961860020702286},"party":"LNP","changeInPercent":-6.868034765637571},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2689","percent":2.676367545186719},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"566","percent":0.5633410303368103},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2513","percent":2.46184290444562},"2022":{"party":"United Australia Party","totalVotes":"4846","percent":4.823234333943786},"party":"United Australia Party","changeInPercent":2.3613914294981657},{"2019":{"party":"Informal","totalVotes":"5250","percent":5.1431258449421025},"2022":{"party":"Informal","totalVotes":"4750","percent":4.72768532526475},"party":"Informal","changeInPercent":-0.41544051967735207},{"2019":{"party":"Derryn Hinch's Justice Party","totalVotes":"5027","percent":4.924665451909324},"party":"Derryn Hinch's Justice Party","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1337","percent":1.3097827151785888},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Rise Up Australia Party","totalVotes":"948","percent":0.9287015811438312},"party":"Rise Up Australia Party","changeInPercent":null}]},{"electorate":"Flinders","totalVotes":103076,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"2447","percent":2.373976483371493},"2022":{"party":"United Australia Party","totalVotes":"4472","percent":4.27578426029506},"party":"United Australia Party","changeInPercent":1.901807776923567},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3373","percent":3.2250045415865918},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"2366","percent":2.2621881842258746},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"45293","percent":43.94136365400287},"2022":{"party":"Liberal","totalVotes":"43013","percent":41.125739800552644},"party":"LNP","changeInPercent":-2.8156238534502265},{"2022":{"party":"Australian Federation Party","totalVotes":"486","percent":0.46467601755442733},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"6599","percent":6.402072257363499},"2022":{"party":"The Greens","totalVotes":"9293","percent":8.88525561961583},"party":"GRN","changeInPercent":2.4831833622523307},{"2019":{"party":"Independent","totalVotes":"940","percent":0.9119484652101362},"2022":{"party":"Independent","totalVotes":"5189","percent":4.961324804711777},"party":"Independent","changeInPercent":4.049376339501641},{"2019":{"party":"Australian Labor Party","totalVotes":"23982","percent":23.26632775815903},"2022":{"party":"Australian Labor Party","totalVotes":"21487","percent":20.544225492164568},"party":"ALP","changeInPercent":-2.7221022659944616},{"2019":{"party":"Animal Justice Party","totalVotes":"2304","percent":2.2352438977065465},"2022":{"party":"Animal Justice Party","totalVotes":"2060","percent":1.9696143953953094},"party":"Animal Justice Party","changeInPercent":-0.26562950231123716},{"2019":{"party":"Informal","totalVotes":"6124","percent":5.9412472350498655},"2022":{"party":"Informal","totalVotes":"5687","percent":5.437474304181128},"party":"Informal","changeInPercent":-0.5037729308687373},{"2019":{"party":"Sustainable Australia","totalVotes":"1072","percent":1.0400093135162405},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Fraser","totalVotes":98605,"candidates":[{"2019":{"party":"Liberal","totalVotes":"23929","percent":24.267532072410123},"2022":{"party":"Liberal","totalVotes":"22730","percent":23.5888707852925},"party":"LNP","changeInPercent":-0.6786612871176239},{"2019":{"party":"Australian Labor Party","totalVotes":"46709","percent":47.36980883322347},"2022":{"party":"Australian Labor Party","totalVotes":"38732","percent":40.19551884100084},"party":"ALP","changeInPercent":-7.174289992222633},{"2022":{"party":"Liberal Democrats","totalVotes":"2349","percent":2.4377587978289523},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"7645","percent":7.753156533644338},"2022":{"party":"The Greens","totalVotes":"17078","percent":17.72330555526728},"party":"GRN","changeInPercent":9.970149021622943},{"2019":{"party":"United Australia Party","totalVotes":"7314","percent":7.417473758937174},"2022":{"party":"United Australia Party","totalVotes":"4088","percent":4.242468269699769},"party":"United Australia Party","changeInPercent":-3.175005489237405},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2695","percent":2.796832677798649},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Victorian Socialists","totalVotes":"4429","percent":4.59635322076817},"party":"Victorian Socialists","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"6046","percent":6.131534912022716},"2022":{"party":"Informal","totalVotes":"4258","percent":4.418891852343839},"party":"Informal","changeInPercent":-1.7126430596788769},{"2019":{"party":"The Great Australian Party","totalVotes":"1656","percent":1.6794280208914356},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"5306","percent":5.381065868870747},"party":"Independent","changeInPercent":null}]},{"electorate":"Gellibrand","totalVotes":102113,"candidates":[{"2019":{"party":"The Greens (VIC)","totalVotes":"16303","percent":15.965645902088863},"2022":{"party":"The Greens","totalVotes":"15241","percent":15.724367042898708},"party":"GRN","changeInPercent":-0.2412788591901549},{"2019":{"party":"Liberal","totalVotes":"28895","percent":28.29708264373782},"2022":{"party":"Liberal","totalVotes":"24869","percent":25.65771825929059},"party":"LNP","changeInPercent":-2.63936438444723},{"2022":{"party":"Australian Federation Party","totalVotes":"1135","percent":1.1709964302663889},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Victorian Socialists","totalVotes":"1503","percent":1.5506675195509978},"party":"Victorian Socialists","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"5391","percent":5.279445320380363},"2022":{"party":"United Australia Party","totalVotes":"5080","percent":5.2411117759940575},"party":"United Australia Party","changeInPercent":-0.03833354438630554},{"2022":{"party":"Liberal Democrats","totalVotes":"2185","percent":2.254297092627365},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2802","percent":2.8908651961290053},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"47942","percent":46.94994760706276},"2022":{"party":"Australian Labor Party","totalVotes":"39382","percent":40.63099684295236},"party":"ALP","changeInPercent":-6.318950764110404},{"2019":{"party":"Informal","totalVotes":"3582","percent":3.5078785267301913},"2022":{"party":"Informal","totalVotes":"4729","percent":4.878979840290531},"party":"Informal","changeInPercent":1.3711013135603394}]},{"electorate":"Gippsland","totalVotes":101998,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"9443","percent":9.081641485299917},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Nationals","totalVotes":"52202","percent":51.179434890880216},"2022":{"party":"The Nationals","totalVotes":"54635","percent":52.54426374556401},"party":"LNP","changeInPercent":1.3648288546837932},{"2019":{"party":"United Australia Party","totalVotes":"4257","percent":4.173611247279358},"2022":{"party":"United Australia Party","totalVotes":"4593","percent":4.417238096154031},"party":"United Australia Party","changeInPercent":0.24362684887467267},{"2019":{"party":"The Greens (VIC)","totalVotes":"5835","percent":5.7207004058903115},"2022":{"party":"The Greens","totalVotes":"8545","percent":8.21800555881476},"party":"GRN","changeInPercent":2.497305152924448},{"2022":{"party":"Liberal Democrats","totalVotes":"4286","percent":4.1219861702843845},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"22426","percent":21.986705621678855},"2022":{"party":"Australian Labor Party","totalVotes":"19404","percent":18.661460487213763},"party":"ALP","changeInPercent":-3.325245134465092},{"2019":{"party":"Informal","totalVotes":"5320","percent":5.215788544873429},"2022":{"party":"Informal","totalVotes":"3073","percent":2.955404456669135},"party":"Informal","changeInPercent":-2.260384088204294},{"2019":{"party":"Shooters, Fishers and Farmers","totalVotes":"6872","percent":6.737387007588384},"party":"Shooters, Fishers and Farmers","changeInPercent":null},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"2043","percent":2.0029804505970703},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"3043","percent":2.983391831212377},"party":"Independent","changeInPercent":null}]},{"electorate":"Goldstein","totalVotes":101580,"candidates":[{"2019":{"party":"The Greens (VIC)","totalVotes":"13951","percent":13.734002756448119},"2022":{"party":"The Greens","totalVotes":"7683","percent":7.56394352885581},"party":"GRN","changeInPercent":-6.170059227592309},{"2022":{"party":"Derryn Hinch's Justice Party","totalVotes":"589","percent":0.5798728020950242},"party":"Derryn Hinch's Justice Party","changeInPercent":null},{"2022":{"party":"Sustainable Australia Party - Stop Overdevelopment / Corruption","totalVotes":"443","percent":0.43613523145686883},"party":"Sustainable Australia Party - Stop Overdevelopment / Corruption","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"2072","percent":2.0398920983716304},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1349","percent":1.3280173262453239},"2022":{"party":"Independent","totalVotes":"33815","percent":33.29099966526867},"party":"Independent","changeInPercent":31.96298233902335},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1239","percent":1.21980034260736},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1945","percent":1.9147469974404412},"2022":{"party":"United Australia Party","totalVotes":"1840","percent":1.8114871916041508},"party":"United Australia Party","changeInPercent":-0.10325980583629035},{"2019":{"party":"Liberal","totalVotes":"52320","percent":51.50620200826934},"2022":{"party":"Liberal","totalVotes":"39607","percent":38.993246303187824},"party":"LNP","changeInPercent":-12.512955705081517},{"2019":{"party":"Australian Labor Party","totalVotes":"28118","percent":27.68064579641662},"2022":{"party":"Australian Labor Party","totalVotes":"10799","percent":10.6316577076811},"party":"ALP","changeInPercent":-17.04898808873552},{"2019":{"party":"Informal","totalVotes":"2244","percent":2.2090962787950383},"2022":{"party":"Informal","totalVotes":"3487","percent":3.4329651288715617},"party":"Informal","changeInPercent":1.2238688500765234},{"2019":{"party":"Sustainable Australia","totalVotes":"1653","percent":1.6272888363851152},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Gorton","totalVotes":100598,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6719","percent":6.751203239452187},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"6730","percent":6.689993836855604},"2022":{"party":"The Greens","totalVotes":"8325","percent":8.36490057574631},"party":"GRN","changeInPercent":1.674906738890706},{"2019":{"party":"United Australia Party","totalVotes":"7473","percent":7.428577108888845},"2022":{"party":"United Australia Party","totalVotes":"7082","percent":7.115943048340585},"party":"United Australia Party","changeInPercent":-0.3126340605482598},{"2022":{"party":"Victorian Socialists","totalVotes":"2064","percent":2.073892467067914},"party":"Victorian Socialists","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"47398","percent":47.11624485576254},"2022":{"party":"Australian Labor Party","totalVotes":"38178","percent":38.3609818835847},"party":"ALP","changeInPercent":-8.755262972177839},{"2019":{"party":"Independent","totalVotes":"8363","percent":8.313286546452217},"2022":{"party":"Independent","totalVotes":"2341","percent":2.352220089828482},"party":"Independent","changeInPercent":-5.961066456623735},{"2022":{"party":"The Great Australian Party","totalVotes":"1312","percent":1.3182882348803795},"party":"The Great Australian Party","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"1063","percent":1.0680948122544538},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"24677","percent":24.530308753653156},"2022":{"party":"Liberal","totalVotes":"25350","percent":25.471499050470747},"party":"LNP","changeInPercent":0.9411902968175916},{"2019":{"party":"Informal","totalVotes":"5957","percent":5.9215888983876415},"2022":{"party":"Informal","totalVotes":"7089","percent":7.122976598374245},"party":"Informal","changeInPercent":1.2013876999866033}]},{"electorate":"Higgins","totalVotes":102541,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"2648","percent":2.6942056264943783},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1249","percent":1.2180493656196059},"2022":{"party":"United Australia Party","totalVotes":"1917","percent":1.9504502212952128},"party":"United Australia Party","changeInPercent":0.732400855675607},{"2019":{"party":"Animal Justice Party","totalVotes":"1729","percent":1.686154806370135},"2022":{"party":"Animal Justice Party","totalVotes":"1295","percent":1.3175967848603551},"party":"Animal Justice Party","changeInPercent":-0.3685580215097799},{"2019":{"party":"Liberal","totalVotes":"48091","percent":46.89928906486186},"2022":{"party":"Liberal","totalVotes":"38859","percent":39.53706058910312},"party":"LNP","changeInPercent":-7.362228475758741},{"2022":{"party":"Reason Australia","totalVotes":"1458","percent":1.4834410133794578},"party":"Reason Australia","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"25498","percent":24.866151100535397},"2022":{"party":"Australian Labor Party","totalVotes":"27187","percent":27.661392888029713},"party":"ALP","changeInPercent":2.795241787494316},{"2022":{"party":"Australian Federation Party","totalVotes":"515","percent":0.5239863661799867},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"22573","percent":22.01363357096186},"2022":{"party":"The Greens","totalVotes":"21632","percent":22.00946227806888},"party":"GRN","changeInPercent":-0.0041712928929804605},{"2019":{"party":"Informal","totalVotes":"2063","percent":2.0118781755590445},"2022":{"party":"Informal","totalVotes":"2774","percent":2.8224042325889},"party":"Informal","changeInPercent":0.8105260570298554},{"2019":{"party":"Sustainable Australia","totalVotes":"1338","percent":1.3048439160920997},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Holt","totalVotes":98756,"candidates":[{"2022":{"party":"Independent","totalVotes":"2673","percent":2.8100459405191174},"party":"Independent","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"48031","percent":48.63603224107902},"2022":{"party":"Australian Labor Party","totalVotes":"36326","percent":38.18845074272258},"party":"ALP","changeInPercent":-10.447581498356442},{"2019":{"party":"United Australia Party","totalVotes":"5958","percent":6.033051156385435},"2022":{"party":"United Australia Party","totalVotes":"8592","percent":9.032515795338666},"party":"United Australia Party","changeInPercent":2.9994646389532313},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4295","percent":4.515206627208982},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"730","percent":0.7674274360564742},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"2423","percent":2.5472283254312837},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"6735","percent":6.819838794604885},"2022":{"party":"The Greens","totalVotes":"7583","percent":7.97178390084417},"party":"GRN","changeInPercent":1.1519451062392854},{"2019":{"party":"Liberal","totalVotes":"33963","percent":34.39082182348414},"2022":{"party":"Liberal","totalVotes":"26274","percent":27.621080075270964},"party":"LNP","changeInPercent":-6.769741748213175},{"2019":{"party":"Informal","totalVotes":"4069","percent":4.120255984446515},"2022":{"party":"Informal","totalVotes":"6227","percent":6.546261156607761},"party":"Informal","changeInPercent":2.426005172161246}]},{"electorate":"Hotham","totalVotes":99648,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"6591","percent":6.344210222350563},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"43310","percent":43.462989723827874},"2022":{"party":"Australian Labor Party","totalVotes":"47135","percent":45.37010299355087},"party":"ALP","changeInPercent":1.9071132697229984},{"2019":{"party":"The Greens (VIC)","totalVotes":"8722","percent":8.752809890815671},"2022":{"party":"The Greens","totalVotes":"12408","percent":11.943401674848397},"party":"GRN","changeInPercent":3.1905917840327263},{"2019":{"party":"United Australia Party","totalVotes":"3483","percent":3.4953034682080926},"2022":{"party":"United Australia Party","totalVotes":"5869","percent":5.649244393108095},"party":"United Australia Party","changeInPercent":2.1539409249000023},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2926","percent":2.81644046587737},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"37447","percent":37.57927906229929},"2022":{"party":"Liberal","totalVotes":"25273","percent":24.326691693136972},"party":"LNP","changeInPercent":-13.25258736916232},{"2019":{"party":"Informal","totalVotes":"3780","percent":3.7933526011560694},"2022":{"party":"Informal","totalVotes":"3688","percent":3.549908557127731},"party":"Informal","changeInPercent":-0.24344404402833852},{"2019":{"party":"Rise Up Australia Party","totalVotes":"1134","percent":1.1380057803468207},"party":"Rise Up Australia Party","changeInPercent":null},{"2019":{"party":"Sustainable Australia","totalVotes":"1772","percent":1.7782594733461787},"party":"Sustainable Australia","changeInPercent":null}]},{"electorate":"Indi","totalVotes":105557,"candidates":[{"2022":{"party":"Animal Justice Party","totalVotes":"1749","percent":1.6278247272998025},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"32664","percent":30.944418655323663},"2022":{"party":"Independent","totalVotes":"41319","percent":38.45631212538625},"party":"Independent","changeInPercent":7.511893470062585},{"2019":{"party":"Derryn Hinch's Justice Party","totalVotes":"2891","percent":2.738804626884053},"2022":{"party":"Derryn Hinch's Justice Party","totalVotes":"1074","percent":0.9995904843453333},"party":"Derryn Hinch's Justice Party","changeInPercent":-1.73921414253872},{"2019":{"party":"United Australia Party","totalVotes":"3980","percent":3.7704747198196236},"2022":{"party":"United Australia Party","totalVotes":"2558","percent":2.3807751014481964},"party":"United Australia Party","changeInPercent":-1.3896996183714272},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5366","percent":4.994229552138789},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"4255","percent":4.030997470560929},"2022":{"party":"The Greens","totalVotes":"3626","percent":3.374781281411712},"party":"GRN","changeInPercent":-0.6562161891492169},{"2019":{"party":"Liberal","totalVotes":"35426","percent":33.561014428223615},"2022":{"party":"The Nationals","totalVotes":"3854","percent":3.5869848479207773},"party":"LNP","changeInPercent":-29.974029580302837},{"2019":{"party":"Australian Labor Party","totalVotes":"12202","percent":11.559631289256043},"2022":{"party":"Australian Labor Party","totalVotes":"8723","percent":8.118647853765683},"party":"ALP","changeInPercent":-3.4409834354903595},{"2022":{"party":"Liberal Democrats","totalVotes":"2300","percent":2.1406500130300437},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4601","percent":4.358782458766354},"2022":{"party":"Informal","totalVotes":"5880","percent":5.472618294181155},"party":"Informal","changeInPercent":1.1138358354148004}]},{"electorate":"Isaacs","totalVotes":101017,"candidates":[{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3130","percent":3.0817399523462576},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"43364","percent":42.92742805666373},"2022":{"party":"Australian Labor Party","totalVotes":"39228","percent":38.623161294133865},"party":"ALP","changeInPercent":-4.304266762529863},{"2022":{"party":"Liberal Democrats","totalVotes":"4785","percent":4.7112222594175215},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"34089","percent":33.74580516150747},"2022":{"party":"Liberal","totalVotes":"31306","percent":30.823307012189115},"party":"LNP","changeInPercent":-2.922498149318354},{"2019":{"party":"The Greens (VIC)","totalVotes":"10822","percent":10.713048298801192},"2022":{"party":"The Greens","totalVotes":"12621","percent":12.426402536281826},"party":"GRN","changeInPercent":1.7133542374806332},{"2019":{"party":"Animal Justice Party","totalVotes":"3607","percent":3.5706861221378583},"2022":{"party":"Animal Justice Party","totalVotes":"2259","percent":2.2241695055431934},"party":"Animal Justice Party","changeInPercent":-1.346516616594665},{"2019":{"party":"United Australia Party","totalVotes":"3813","percent":3.7746121939871506},"2022":{"party":"United Australia Party","totalVotes":"4855","percent":4.780142961227182},"party":"United Australia Party","changeInPercent":1.0055307672400313},{"2019":{"party":"Informal","totalVotes":"4180","percent":4.137917380242929},"2022":{"party":"Informal","totalVotes":"3382","percent":3.3298544788610362},"party":"Informal","changeInPercent":-0.8080629013818932},{"2019":{"party":"Rise Up Australia Party","totalVotes":"1142","percent":1.130502786659671},"party":"Rise Up Australia Party","changeInPercent":null}]},{"electorate":"Jagajaga","totalVotes":100936,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"41086","percent":40.70500118887216},"2022":{"party":"Australian Labor Party","totalVotes":"41412","percent":39.34781369363206},"party":"ALP","changeInPercent":-1.3571874952400975},{"2022":{"party":"Australian Federation Party","totalVotes":"764","percent":0.725918324686924},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3652","percent":3.6181342632955533},"2022":{"party":"United Australia Party","totalVotes":"3493","percent":3.318890979229614},"party":"United Australia Party","changeInPercent":-0.29924328406593936},{"2022":{"party":"Independent","totalVotes":"3150","percent":2.9929878570206943},"party":"Independent","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"3760","percent":3.57258233091994},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"13929","percent":13.799833557898076},"2022":{"party":"The Greens","totalVotes":"16855","percent":16.014860422248827},"party":"GRN","changeInPercent":2.215026864350751},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2274","percent":2.160652186306368},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"37755","percent":37.40489022747087},"2022":{"party":"Liberal","totalVotes":"29535","percent":28.062824240351176},"party":"LNP","changeInPercent":-9.342065987119696},{"2019":{"party":"Informal","totalVotes":"3169","percent":3.139613220258382},"2022":{"party":"Informal","totalVotes":"4003","percent":3.803469965604393},"party":"Informal","changeInPercent":0.6638567453460111},{"2019":{"party":"Rise Up Australia Party","totalVotes":"1345","percent":1.3325275422049616},"party":"Rise Up Australia Party","changeInPercent":null}]},{"electorate":"Kooyong","totalVotes":102062,"candidates":[{"2019":{"party":"Independent","totalVotes":"8890","percent":8.710391722678372},"2022":{"party":"Independent","totalVotes":"41303","percent":39.12639845400377},"party":"Independent","changeInPercent":30.416006731325396},{"2019":{"party":"United Australia Party","totalVotes":"1185","percent":1.1610589641590405},"2022":{"party":"United Australia Party","totalVotes":"1011","percent":0.9577219290850014},"party":"United Australia Party","changeInPercent":-0.2033370350740391},{"2022":{"party":"Liberal Democrats","totalVotes":"1080","percent":1.0230857402688442},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Derryn Hinch's Justice Party","totalVotes":"177","percent":0.16767238521072725},"party":"Derryn Hinch's Justice Party","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"741","percent":0.7019504940177903},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"48928","percent":47.93948776234054},"2022":{"party":"Liberal","totalVotes":"43736","percent":41.43118327444275},"party":"LNP","changeInPercent":-6.508304487897789},{"2019":{"party":"Australian Labor Party","totalVotes":"16666","percent":16.32929003938782},"2022":{"party":"Australian Labor Party","totalVotes":"7091","percent":6.717315726154051},"party":"ALP","changeInPercent":-9.61197431323377},{"2019":{"party":"Animal Justice Party","totalVotes":"1117","percent":1.094432795751602},"2022":{"party":"Animal Justice Party","totalVotes":"500","percent":0.4736508056800205},"party":"Animal Justice Party","changeInPercent":-0.6207819900715815},{"2019":{"party":"The Greens (VIC)","totalVotes":"21035","percent":20.610021359565753},"2022":{"party":"The Greens","totalVotes":"6461","percent":6.120515710997224},"party":"GRN","changeInPercent":-14.489505648568528},{"2022":{"party":"Australian Values Party","totalVotes":"152","percent":0.14398984492672623},"party":"Australian Values Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"3033","percent":2.971723070290608},"2022":{"party":"Informal","totalVotes":"3046","percent":2.8854807082026848},"party":"Informal","changeInPercent":-0.08624236208792313}]},{"electorate":"La Trobe","totalVotes":103305,"candidates":[{"2019":{"party":"Liberal","totalVotes":"45123","percent":43.67939596340932},"2022":{"party":"Liberal","totalVotes":"41786","percent":43.456918516977794},"party":"LNP","changeInPercent":-0.222477446431526},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"4796","percent":4.642563283480954},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4555","percent":4.7371431542821485},"party":"Pauline Hanson's One Nation","changeInPercent":0.09457987080119423},{"2019":{"party":"The Greens (VIC)","totalVotes":"7752","percent":7.503993030347031},"2022":{"party":"The Greens","totalVotes":"9980","percent":10.379075451094586},"party":"GRN","changeInPercent":2.875082420747555},{"2019":{"party":"United Australia Party","totalVotes":"2506","percent":2.4258264362809157},"2022":{"party":"United Australia Party","totalVotes":"6182","percent":6.429202849565805},"party":"United Australia Party","changeInPercent":4.00337641328489},{"2019":{"party":"Australian Labor Party","totalVotes":"34040","percent":32.950970427375246},"2022":{"party":"Australian Labor Party","totalVotes":"23918","percent":24.874421506941914},"party":"ALP","changeInPercent":-8.076548920433332},{"2022":{"party":"Australian Federation Party","totalVotes":"890","percent":0.9255888929332848},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1911","percent":1.9874161510061878},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Animal Justice Party","totalVotes":"2450","percent":2.5479694243669075},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4616","percent":4.46832195924689},"2022":{"party":"Informal","totalVotes":"4483","percent":4.662264052831366},"party":"Informal","changeInPercent":0.193942093584476},{"2019":{"party":"Rise Up Australia Party","totalVotes":"947","percent":0.9167029669425487},"party":"Rise Up Australia Party","changeInPercent":null},{"2019":{"party":"Derryn Hinch's Justice Party","totalVotes":"3525","percent":3.41222593291709},"party":"Derryn Hinch's Justice Party","changeInPercent":null}]},{"electorate":"Lalor","totalVotes":97815,"candidates":[{"2022":{"party":"Independent","totalVotes":"2535","percent":2.68897044784352},"party":"Independent","changeInPercent":null},{"2022":{"party":"Victorian Socialists","totalVotes":"1482","percent":1.5720134925854425},"party":"Victorian Socialists","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4451","percent":4.5504268261514085},"2022":{"party":"United Australia Party","totalVotes":"6340","percent":6.72507796423192},"party":"United Australia Party","changeInPercent":2.1746511380805114},{"2019":{"party":"Australian Labor Party","totalVotes":"48332","percent":49.41164443081327},"2022":{"party":"Australian Labor Party","totalVotes":"39047","percent":41.418630799584186},"party":"ALP","changeInPercent":-7.993013631229083},{"2022":{"party":"Liberal Democrats","totalVotes":"3403","percent":3.609690900990729},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"951","percent":1.008761694634788},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3489","percent":3.700914356026052},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"7273","percent":7.435464908245157},"2022":{"party":"The Greens","totalVotes":"9192","percent":9.750302310287037},"party":"GRN","changeInPercent":2.3148374020418796},{"2019":{"party":"Liberal","totalVotes":"28209","percent":28.839135101978226},"2022":{"party":"Liberal","totalVotes":"22083","percent":23.42427392494219},"party":"LNP","changeInPercent":-5.414861177036034},{"2019":{"party":"Informal","totalVotes":"4337","percent":4.433880284209988},"2022":{"party":"Informal","totalVotes":"5752","percent":6.101364108874133},"party":"Informal","changeInPercent":1.6674838246641448},{"2019":{"party":"Australia First Party","totalVotes":"4094","percent":4.185452129019067},"party":"Australia First Party","changeInPercent":null},{"2019":{"party":"","totalVotes":"1119","percent":1.1439963195828862},"party":"no party","changeInPercent":null}]},{"electorate":"Macnamara","totalVotes":101380,"candidates":[{"2019":{"party":"Independent","totalVotes":"1108","percent":1.0929177352535018},"2022":{"party":"Independent","totalVotes":"1835","percent":1.9048508818369614},"party":"Independent","changeInPercent":0.8119331465834596},{"2019":{"party":"Liberal","totalVotes":"36283","percent":35.789110278161374},"2022":{"party":"Liberal","totalVotes":"26976","percent":28.002865061816824},"party":"LNP","changeInPercent":-7.78624521634455},{"2019":{"party":"Australian Labor Party","totalVotes":"30855","percent":30.43499704083646},"2022":{"party":"Australian Labor Party","totalVotes":"29552","percent":30.676922757518195},"party":"ALP","changeInPercent":0.24192571668173457},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1349","percent":1.4003508662659732},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1946","percent":2.0200761940352736},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"1919","percent":1.8928782797395935},"2022":{"party":"Animal Justice Party","totalVotes":"1724","percent":1.7896255696386494},"party":"Animal Justice Party","changeInPercent":-0.10325271010094417},{"2019":{"party":"The Greens (VIC)","totalVotes":"23534","percent":23.213651607812192},"2022":{"party":"The Greens","totalVotes":"27587","percent":28.637123311845368},"party":"GRN","changeInPercent":5.423471704033176},{"2019":{"party":"United Australia Party","totalVotes":"1136","percent":1.1205365949891497},"2022":{"party":"United Australia Party","totalVotes":"2062","percent":2.140491835611888},"party":"United Australia Party","changeInPercent":1.0199552406227383},{"2019":{"party":"Informal","totalVotes":"4288","percent":4.2296310909449595},"2022":{"party":"Informal","totalVotes":"3302","percent":3.4276935214308697},"party":"Informal","changeInPercent":-0.8019375695140898},{"2019":{"party":"Sustainable Australia","totalVotes":"974","percent":0.9607417636614718},"party":"Sustainable Australia","changeInPercent":null},{"2019":{"party":"Rise Up Australia Party","totalVotes":"365","percent":0.36003156441112644},"party":"Rise Up Australia Party","changeInPercent":null}]},{"electorate":"Mallee","totalVotes":105619,"candidates":[{"2019":{"party":"Liberal","totalVotes":"17665","percent":16.725210426154387},"2022":{"party":"The Nationals","totalVotes":"50187","percent":46.322755718004096},"party":"LNP","changeInPercent":29.59754529184971},{"2019":{"party":"Independent","totalVotes":"2761","percent":2.61411299103381},"2022":{"party":"Independent","totalVotes":"10256","percent":9.466319617507523},"party":"Independent","changeInPercent":6.852206626473713},{"2022":{"party":"Citizens Party","totalVotes":"822","percent":0.7587085340865038},"party":"Citizens Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"14722","percent":13.938779954364271},"2022":{"party":"Australian Labor Party","totalVotes":"17133","percent":15.813811818131473},"party":"ALP","changeInPercent":1.8750318637672017},{"2019":{"party":"The Greens (VIC)","totalVotes":"3297","percent":3.121597439854572},"2022":{"party":"The Greens","totalVotes":"5463","percent":5.04236584150191},"party":"GRN","changeInPercent":1.9207684016473383},{"2019":{"party":"United Australia Party","totalVotes":"3171","percent":3.0023007224079},"2022":{"party":"United Australia Party","totalVotes":"9271","percent":8.55716158091968},"party":"United Australia Party","changeInPercent":5.554860858511779},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6901","percent":6.369644274611877},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"11792","percent":11.16465787405675},"2022":{"party":"Informal","totalVotes":"6113","percent":5.642317845341603},"party":"Informal","changeInPercent":-5.522340028715147},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1309","percent":1.2393603423626431},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Citizens Electoral Council","totalVotes":"416","percent":0.39386852744297907},"party":"Citizens Electoral Council","changeInPercent":null},{"2019":{"party":"Rise Up Australia Party","totalVotes":"919","percent":0.8701085978848503},"party":"Rise Up Australia Party","changeInPercent":null},{"2019":{"party":"Science Party","totalVotes":"497","percent":0.4705592743729821},"party":"Science Party","changeInPercent":null},{"2019":{"party":"Shooters, Fishers and Farmers","totalVotes":"5512","percent":5.218757988619472},"party":"Shooters, Fishers and Farmers","changeInPercent":null}]},{"electorate":"Maribyrnong","totalVotes":103938,"candidates":[{"2022":{"party":"The Great Australian Party","totalVotes":"1741","percent":1.7606310360519795},"party":"The Great Australian Party","changeInPercent":null},{"2022":{"party":"Victorian Socialists","totalVotes":"1837","percent":1.8577135055872984},"party":"Victorian Socialists","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"47487","percent":45.68781388904924},"2022":{"party":"Australian Labor Party","totalVotes":"39792","percent":40.240683622389646},"party":"ALP","changeInPercent":-5.447130266659592},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2227","percent":2.2521110380745313},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"3617","percent":3.4799592064499993},"2022":{"party":"United Australia Party","totalVotes":"3433","percent":3.4717095616119735},"party":"United Australia Party","changeInPercent":-0.008249644838025816},{"2019":{"party":"Liberal","totalVotes":"34877","percent":33.55558121187631},"2022":{"party":"Liberal","totalVotes":"25493","percent":25.780452040248775},"party":"LNP","changeInPercent":-7.775129171627533},{"2019":{"party":"The Greens (VIC)","totalVotes":"14943","percent":14.376840039254171},"2022":{"party":"The Greens","totalVotes":"15278","percent":15.450270516256257},"party":"GRN","changeInPercent":1.073430477002086},{"2022":{"party":"Australian Federation Party","totalVotes":"590","percent":0.5966526773524802},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"3577","percent":3.6173332659149517},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"3014","percent":2.8998056533702785},"2022":{"party":"Informal","totalVotes":"4917","percent":4.97244273651211},"party":"Informal","changeInPercent":2.0726370831418315}]},{"electorate":"McEwen","totalVotes":101462,"candidates":[{"2019":{"party":"The Greens (VIC)","totalVotes":"8026","percent":7.910350673158424},"2022":{"party":"The Greens","totalVotes":"13524","percent":13.573270973634294},"party":"GRN","changeInPercent":5.66292030047587},{"2019":{"party":"United Australia Party","totalVotes":"3016","percent":2.9725414440874416},"2022":{"party":"United Australia Party","totalVotes":"5474","percent":5.49394301313769},"party":"United Australia Party","changeInPercent":2.5214015690502483},{"2022":{"party":"Australian Federation Party","totalVotes":"1721","percent":1.727269990063932},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5693","percent":5.6109676529143915},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5387","percent":5.406626052570832},"party":"Pauline Hanson's One Nation","changeInPercent":-0.2043416003435592},{"2022":{"party":"Liberal Democrats","totalVotes":"2579","percent":2.588395877033632},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"33162","percent":32.68415761565907},"2022":{"party":"Liberal","totalVotes":"31796","percent":31.911839979124224},"party":"LNP","changeInPercent":-0.7723176365348436},{"2019":{"party":"Australian Labor Party","totalVotes":"37911","percent":37.36472768129941},"2022":{"party":"Australian Labor Party","totalVotes":"35238","percent":35.366379959252086},"party":"ALP","changeInPercent":-1.9983477220473205},{"2019":{"party":"Informal","totalVotes":"5334","percent":5.257140604364195},"2022":{"party":"Informal","totalVotes":"3918","percent":3.9322741551833156},"party":"Informal","changeInPercent":-1.3248664491808793},{"2019":{"party":"Animal Justice Party","totalVotes":"2890","percent":2.848357020362303},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Derryn Hinch's Justice Party","totalVotes":"3878","percent":3.8221205968737064},"party":"Derryn Hinch's Justice Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1552","percent":1.5296367112810707},"party":"Independent","changeInPercent":null}]},{"electorate":"Melbourne","totalVotes":95960,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"1079","percent":1.1244268445185495},"2022":{"party":"United Australia Party","totalVotes":"1709","percent":1.7176052020623322},"party":"United Australia Party","changeInPercent":0.5931783575437828},{"2019":{"party":"Australian Labor Party","totalVotes":"18371","percent":19.14443518132555},"2022":{"party":"Australian Labor Party","totalVotes":"24155","percent":24.276625895737645},"party":"ALP","changeInPercent":5.1321907144120935},{"2019":{"party":"The Greens (VIC)","totalVotes":"45876","percent":47.8074197582326},"2022":{"party":"The Greens","totalVotes":"47883","percent":48.12410174976633},"party":"GRN","changeInPercent":0.3166819915337342},{"2019":{"party":"Liberal","totalVotes":"19979","percent":20.820133388912048},"2022":{"party":"Liberal","totalVotes":"14660","percent":14.73381642026553},"party":"LNP","changeInPercent":-6.086316968646518},{"2022":{"party":"Liberal Democrats","totalVotes":"1596","percent":1.6040362214695625},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1154","percent":1.2025844101709044},"2022":{"party":"Independent","totalVotes":"1094","percent":1.099508537774249},"party":"Independent","changeInPercent":-0.10307587239665539},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"937","percent":0.941718007216153},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"1849","percent":1.9268445185493956},"2022":{"party":"Animal Justice Party","totalVotes":"1316","percent":1.3226263580538498},"party":"Animal Justice Party","changeInPercent":-0.6042181604955459},{"2022":{"party":"Victorian Socialists","totalVotes":"3156","percent":3.1718911747856766},"party":"Victorian Socialists","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"2896","percent":3.0179241350562735},"2022":{"party":"Informal","totalVotes":"2993","percent":3.008070432868672},"party":"Informal","changeInPercent":-0.00985370218760151},{"2019":{"party":"Reason Australia","totalVotes":"4756","percent":4.956231763234681},"party":"Reason Australia","changeInPercent":null}]},{"electorate":"Menzies","totalVotes":101702,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"29539","percent":29.04465988869442},"2022":{"party":"Australian Labor Party","totalVotes":"33635","percent":32.225458447506085},"party":"ALP","changeInPercent":3.1807985588116665},{"2022":{"party":"Australian Federation Party","totalVotes":"968","percent":0.9274340352961467},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"3646","percent":3.493207120547263},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2312","percent":2.2151110429800527},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"50863","percent":50.0117991779906},"2022":{"party":"Liberal","totalVotes":"42526","percent":40.743863414260254},"party":"LNP","changeInPercent":-9.26793576373035},{"2019":{"party":"The Greens (VIC)","totalVotes":"10264","percent":10.09223024129319},"2022":{"party":"The Greens","totalVotes":"14289","percent":13.690191043746527},"party":"GRN","changeInPercent":3.5979608024533363},{"2019":{"party":"United Australia Party","totalVotes":"2605","percent":2.5614048887927474},"2022":{"party":"United Australia Party","totalVotes":"3643","percent":3.4903328415122536},"party":"United Australia Party","changeInPercent":0.9289279527195062},{"2019":{"party":"Informal","totalVotes":"3376","percent":3.319502074688797},"2022":{"party":"Informal","totalVotes":"3355","percent":3.214402054151417},"party":"Informal","changeInPercent":-0.10510002053737999},{"2019":{"party":"Labour DLP","totalVotes":"3026","percent":2.975359383296297},"party":"Labour DLP","changeInPercent":null},{"2019":{"party":"Reason Australia","totalVotes":"2029","percent":1.995044345243948},"party":"Reason Australia","changeInPercent":null}]},{"electorate":"Monash","totalVotes":105117,"candidates":[{"2019":{"party":"The Greens (VIC)","totalVotes":"7047","percent":6.703958446302691},"2022":{"party":"The Greens","totalVotes":"9533","percent":9.395450603169596},"party":"GRN","changeInPercent":2.6914921568669055},{"2019":{"party":"Liberal","totalVotes":"46501","percent":44.23737359323421},"2022":{"party":"Liberal","totalVotes":"36546","percent":36.01868643065521},"party":"LNP","changeInPercent":-8.218687162579002},{"2019":{"party":"Independent","totalVotes":"2723","percent":2.590446835430996},"2022":{"party":"Independent","totalVotes":"10372","percent":10.222344871087282},"party":"Independent","changeInPercent":7.631898035656286},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7656","percent":7.2833128799337885},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"7289","percent":7.183828747141844},"party":"Pauline Hanson's One Nation","changeInPercent":-0.0994841327919449},{"2022":{"party":"Australian Federation Party","totalVotes":"674","percent":0.6642750137979974},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"29656","percent":28.212372879743526},"2022":{"party":"Australian Labor Party","totalVotes":"24759","percent":24.401758259086968},"party":"ALP","changeInPercent":-3.8106146206565583},{"2022":{"party":"Liberal Democrats","totalVotes":"3548","percent":3.4968067491918315},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"4028","percent":3.831920621783346},"2022":{"party":"United Australia Party","totalVotes":"3991","percent":3.933414807222266},"party":"United Australia Party","changeInPercent":0.10149418543891997},{"2019":{"party":"Informal","totalVotes":"4636","percent":4.4103237345053605},"2022":{"party":"Informal","totalVotes":"4752","percent":4.683434518647007},"party":"Informal","changeInPercent":0.2731107841416467}]},{"electorate":"Nicholls","totalVotes":102971,"candidates":[{"2022":{"party":"Liberal Democrats","totalVotes":"3366","percent":3.25689404934688},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Nationals","totalVotes":"48855","percent":47.44539724776879},"2022":{"party":"The Nationals","totalVotes":"24886","percent":24.079342041606193},"party":"LNP","changeInPercent":-23.366055206162596},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"10754","percent":10.443717163084752},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6219","percent":6.017416545718433},"party":"Pauline Hanson's One Nation","changeInPercent":-4.426300617366319},{"2019":{"party":"Australian Labor Party","totalVotes":"18493","percent":17.959425469306893},"2022":{"party":"Australian Labor Party","totalVotes":"10970","percent":10.614417029511369},"party":"ALP","changeInPercent":-7.345008439795524},{"2022":{"party":"Citizens Party","totalVotes":"377","percent":0.3647798742138365},"party":"Citizens Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"5077","percent":4.930514416680425},"2022":{"party":"United Australia Party","totalVotes":"3821","percent":3.697145621673924},"party":"United Australia Party","changeInPercent":-1.233368795006501},{"2019":{"party":"The Greens (VIC)","totalVotes":"4011","percent":3.8952714842042906},"2022":{"party":"The Greens","totalVotes":"3058","percent":2.958877600387034},"party":"GRN","changeInPercent":-0.9363938838172565},{"2022":{"party":"FUSION: Science, Pirate, Secular, Climate Emergency","totalVotes":"653","percent":0.6318335752298017},"party":"FUSION: Science, Pirate, Secular, Climate Emergency","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"367","percent":0.35510401548137394},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1772","percent":1.7208728671179265},"2022":{"party":"Independent","totalVotes":"24287","percent":23.499758103531686},"party":"Independent","changeInPercent":21.77888523641376},{"2019":{"party":"Informal","totalVotes":"7679","percent":7.4574394732497495},"2022":{"party":"Informal","totalVotes":"8159","percent":7.894533139816158},"party":"Informal","changeInPercent":0.43709366656640825}]},{"electorate":"Scullin","totalVotes":96864,"candidates":[{"2019":{"party":"The Greens (VIC)","totalVotes":"6128","percent":6.326395771390817},"2022":{"party":"The Greens","totalVotes":"9953","percent":10.301606359195164},"party":"GRN","changeInPercent":3.975210587804347},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5907","percent":6.113894179017968},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"3422","percent":3.5418564212966794},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"55467","percent":57.262760158572846},"2022":{"party":"Australian Labor Party","totalVotes":"42147","percent":43.62320940630951},"party":"ALP","changeInPercent":-13.639550752263332},{"2019":{"party":"United Australia Party","totalVotes":"4625","percent":4.774735711926},"2022":{"party":"United Australia Party","totalVotes":"7444","percent":7.704727995363086},"party":"United Australia Party","changeInPercent":2.9299922834370866},{"2019":{"party":"Liberal","totalVotes":"20484","percent":21.14717542120912},"2022":{"party":"Liberal","totalVotes":"19780","percent":20.472799536308685},"party":"LNP","changeInPercent":-0.6743758849004351},{"2022":{"party":"Victorian Socialists","totalVotes":"2469","percent":2.5554773536474293},"party":"Victorian Socialists","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"5055","percent":5.218657086223985},"2022":{"party":"Informal","totalVotes":"5494","percent":5.686428748861473},"party":"Informal","changeInPercent":0.46777166263748793},{"2019":{"party":"Animal Justice Party","totalVotes":"3500","percent":3.613313511727783},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1605","percent":1.656962338949455},"party":"Independent","changeInPercent":null}]},{"electorate":"Wannon","totalVotes":108050,"candidates":[{"2019":{"party":"Independent","totalVotes":"10797","percent":9.992596020360944},"2022":{"party":"Independent","totalVotes":"2346","percent":2.1986054880791723},"party":"Independent","changeInPercent":-7.7939905322817715},{"2019":{"party":"Liberal","totalVotes":"53094","percent":49.13836186950486},"2022":{"party":"Liberal","totalVotes":"44948","percent":42.12400659769081},"party":"LNP","changeInPercent":-7.014355271814054},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3275","percent":3.0692382666066877},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens (VIC)","totalVotes":"6590","percent":6.099028227672374},"2022":{"party":"The Greens","totalVotes":"6444","percent":6.039136302294197},"party":"GRN","changeInPercent":-0.05989192537817711},{"2019":{"party":"United Australia Party","totalVotes":"6258","percent":5.79176307265155},"2022":{"party":"United Australia Party","totalVotes":"3308","percent":3.1001649422702053},"party":"United Australia Party","changeInPercent":-2.6915981303813448},{"2022":{"party":"Liberal Democrats","totalVotes":"1973","percent":1.849040335882441},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"27150","percent":25.127255900046276},"2022":{"party":"Australian Labor Party","totalVotes":"19303","percent":18.09023091917829},"party":"ALP","changeInPercent":-7.037024980867987},{"2019":{"party":"Informal","totalVotes":"4161","percent":3.850994909763998},"2022":{"party":"Informal","totalVotes":"5603","percent":5.250974658869396},"party":"Informal","changeInPercent":1.3999797491053978}]},{"electorate":"Wills","totalVotes":100333,"candidates":[{"2019":{"party":"Liberal","totalVotes":"17241","percent":17.183778019196076},"2022":{"party":"Liberal","totalVotes":"15771","percent":16.419060310453602},"party":"LNP","changeInPercent":-0.7647177087424737},{"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2554","percent":2.6589487054022256},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"Victorian Socialists","totalVotes":"4344","percent":4.329582490307277},"2022":{"party":"Victorian Socialists","totalVotes":"2714","percent":2.825523408951308},"party":"Victorian Socialists","changeInPercent":-1.5040590813559689},{"2022":{"party":"Australian Federation Party","totalVotes":"789","percent":0.821421506876412},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Socialist Alliance","totalVotes":"3096","percent":3.223220513674742},"party":"Socialist Alliance","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2979","percent":2.969112854195529},"2022":{"party":"United Australia Party","totalVotes":"3352","percent":3.489740039353274},"party":"United Australia Party","changeInPercent":0.5206271851577449},{"2019":{"party":"Australian Labor Party","totalVotes":"42355","percent":42.214425961548045},"2022":{"party":"Australian Labor Party","totalVotes":"35449","percent":36.905666663196364},"party":"ALP","changeInPercent":-5.308759298351681},{"2019":{"party":"Animal Justice Party","totalVotes":"3596","percent":3.5840650633390805},"2022":{"party":"Animal Justice Party","totalVotes":"1680","percent":1.749034387265364},"party":"Animal Justice Party","changeInPercent":-1.8350306760737165},{"2019":{"party":"The Greens (VIC)","totalVotes":"25575","percent":25.490117907368465},"2022":{"party":"The Greens","totalVotes":"25793","percent":26.852883304009247},"party":"GRN","changeInPercent":1.362765396640782},{"2019":{"party":"Informal","totalVotes":"4243","percent":4.228917704045529},"2022":{"party":"Informal","totalVotes":"4855","percent":5.054501160817465},"party":"Informal","changeInPercent":0.8255834567719367}]},{"electorate":"Brand","totalVotes":94769,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"35875","percent":37.85520581624793},"2022":{"party":"Australian Labor Party","totalVotes":"48031","percent":46.98235386180452},"party":"ALP","changeInPercent":9.127148045556588},{"2022":{"party":"Australian Federation Party","totalVotes":"598","percent":0.5849440488301119},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"26510","percent":27.97328240247338},"2022":{"party":"Liberal","totalVotes":"21056","percent":20.59629078957665},"party":"LNP","changeInPercent":-7.376991612896731},{"2019":{"party":"United Australia Party","totalVotes":"2570","percent":2.7118572528991547},"2022":{"party":"United Australia Party","totalVotes":"2711","percent":2.651811565850223},"party":"United Australia Party","changeInPercent":-0.06004568704893165},{"2019":{"party":"The Greens (WA)","totalVotes":"9863","percent":10.407411706359674},"2022":{"party":"The Greens (WA)","totalVotes":"10900","percent":10.662023632522107},"party":"GRN","changeInPercent":0.25461192616243267},{"2019":{"party":"Australian Christians","totalVotes":"2726","percent":2.8764680433475083},"2022":{"party":"Australian Christians","totalVotes":"2090","percent":2.0443696689881836},"party":"Australian Christians","changeInPercent":-0.8320983743593247},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2397","percent":2.52930810708143},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2592","percent":2.5354096564676425},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":0.006101549386212657},{"2022":{"party":"Liberal Democrats","totalVotes":"1074","percent":1.0505516863604352},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"The Great Australian Party","totalVotes":"1490","percent":1.4574692855465998},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7524","percent":7.939305047009043},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5139","percent":5.026801784177166},"party":"Pauline Hanson's One Nation","changeInPercent":-2.912503262831877},{"2019":{"party":"Informal","totalVotes":"5928","percent":6.255210037037427},"2022":{"party":"Informal","totalVotes":"6551","percent":6.4079740198763595},"party":"Informal","changeInPercent":0.15276398283893222},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1376","percent":1.4519515875444502},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Burt","totalVotes":94082,"candidates":[{"2022":{"party":"Australian Federation Party","totalVotes":"1741","percent":1.7906916945230136},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5116","percent":5.43780957037478},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4436","percent":4.562612496785806},"party":"Pauline Hanson's One Nation","changeInPercent":-0.875197073588974},{"2019":{"party":"United Australia Party","totalVotes":"1871","percent":1.9886907166089156},"2022":{"party":"United Australia Party","totalVotes":"2274","percent":2.3389046027256364},"party":"United Australia Party","changeInPercent":0.3502138861167208},{"2019":{"party":"The Greens (WA)","totalVotes":"8285","percent":8.80614782849004},"2022":{"party":"The Greens (WA)","totalVotes":"9004","percent":9.260992543070198},"party":"GRN","changeInPercent":0.4548447145801582},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"901","percent":0.9576752194893815},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2390","percent":2.458215479557727},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":1.5005402600683455},{"2019":{"party":"Liberal","totalVotes":"29420","percent":31.270593737378032},"2022":{"party":"Liberal","totalVotes":"21009","percent":21.608639753149912},"party":"LNP","changeInPercent":-9.66195398422812},{"2019":{"party":"Australian Christians","totalVotes":"3298","percent":3.5054526902064156},"2022":{"party":"Australian Christians","totalVotes":"3428","percent":3.525842118796606},"party":"Australian Christians","changeInPercent":0.020389428590190217},{"2019":{"party":"Australian Labor Party","totalVotes":"36058","percent":38.326141025913564},"2022":{"party":"Australian Labor Party","totalVotes":"47268","percent":48.61712522499357},"party":"ALP","changeInPercent":10.290984199080007},{"2019":{"party":"Informal","totalVotes":"6042","percent":6.422057354222913},"2022":{"party":"Informal","totalVotes":"5675","percent":5.836976086397532},"party":"Informal","changeInPercent":-0.5850812678253812},{"2019":{"party":"Independent","totalVotes":"1149","percent":1.2212750579281904},"party":"Independent","changeInPercent":null},{"2019":{"party":"Shooters, Fishers and Farmers","totalVotes":"1942","percent":2.064156799387768},"party":"Shooters, Fishers and Farmers","changeInPercent":null}]},{"electorate":"Canning","totalVotes":96782,"candidates":[{"2019":{"party":"Liberal","totalVotes":"44580","percent":46.06228430906574},"2022":{"party":"Liberal","totalVotes":"41294","percent":40.957330741306464},"party":"LNP","changeInPercent":-5.104953567759274},{"2019":{"party":"Australian Labor Party","totalVotes":"24996","percent":25.827116612593247},"2022":{"party":"Australian Labor Party","totalVotes":"30897","percent":30.64509730019242},"party":"ALP","changeInPercent":4.817980687599171},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"6503","percent":6.719224649211631},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4215","percent":4.180635178830017},"party":"Pauline Hanson's One Nation","changeInPercent":-2.5385894703816136},{"2022":{"party":"Australian Federation Party","totalVotes":"628","percent":0.6228799270000595},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2055","percent":2.123328718150069},"2022":{"party":"United Australia Party","totalVotes":"2438","percent":2.418123028704053},"party":"United Australia Party","changeInPercent":0.29479431055398386},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2554","percent":2.6389204604161933},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2202","percent":2.184047132570272},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":-0.45487332784592116},{"2022":{"party":"Informed Medical Options Party","totalVotes":"785","percent":0.7785999087500743},"party":"Informed Medical Options Party","changeInPercent":null},{"2019":{"party":"The Greens (WA)","totalVotes":"6840","percent":7.067429893988551},"2022":{"party":"The Greens (WA)","totalVotes":"7659","percent":7.5965563071551845},"party":"GRN","changeInPercent":0.5291264131666331},{"2022":{"party":"Independent","totalVotes":"1708","percent":1.6940747059173593},"party":"Independent","changeInPercent":null},{"2019":{"party":"Australian Christians","totalVotes":"1764","percent":1.8226529726602054},"2022":{"party":"Australian Christians","totalVotes":"1689","percent":1.675229612584555},"party":"Australian Christians","changeInPercent":-0.1474233600756505},{"2022":{"party":"Liberal Democrats","totalVotes":"749","percent":0.7428934161194978},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"5890","percent":6.085842408712364},"2022":{"party":"Informal","totalVotes":"6558","percent":6.504532740870047},"party":"Informal","changeInPercent":0.41869033215768336},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"1600","percent":1.6531999752020003},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null}]},{"electorate":"Cowan","totalVotes":89703,"candidates":[{"2019":{"party":"Australian Labor Party","totalVotes":"32353","percent":36.06679821187697},"2022":{"party":"Australian Labor Party","totalVotes":"46712","percent":43.36307009645108},"party":"ALP","changeInPercent":7.296271884574111},{"2019":{"party":"The Greens (WA)","totalVotes":"8551","percent":9.532568587449695},"2022":{"party":"The Greens (WA)","totalVotes":"9829","percent":9.124328137909266},"party":"GRN","changeInPercent":-0.40824044954042904},{"2019":{"party":"Australian Christians","totalVotes":"1981","percent":2.2083988272410067},"2022":{"party":"Australian Christians","totalVotes":"1859","percent":1.7257224548146635},"party":"Australian Christians","changeInPercent":-0.4826763724263432},{"2022":{"party":"Australian Federation Party","totalVotes":"1125","percent":1.0443452187555118},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"4777","percent":5.325351437521599},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2839","percent":2.6354631787083536},"party":"Pauline Hanson's One Nation","changeInPercent":-2.6898882588132453},{"2022":{"party":"Liberal Democrats","totalVotes":"1080","percent":1.0025714100052914},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1714","percent":1.591117959952842},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"2171","percent":2.4202089116306036},"2022":{"party":"United Australia Party","totalVotes":"2423","percent":2.2492875244840933},"party":"United Australia Party","changeInPercent":-0.17092138714651028},{"2019":{"party":"Liberal","totalVotes":"33438","percent":37.27634527273335},"2022":{"party":"Liberal","totalVotes":"30328","percent":28.15369048392637},"party":"LNP","changeInPercent":-9.122654788806983},{"2022":{"party":"Animal Justice Party","totalVotes":"1775","percent":1.6477446784809187},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4850","percent":5.406731101523918},"2022":{"party":"Informal","totalVotes":"8039","percent":7.4626588565116085},"party":"Informal","changeInPercent":2.0559277549876906},{"2019":{"party":"Shooters, Fishers and Farmers","totalVotes":"1582","percent":1.7635976500228534},"party":"Shooters, Fishers and Farmers","changeInPercent":null}]},{"electorate":"Curtin","totalVotes":91989,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"1114","percent":1.211014360412658},"2022":{"party":"United Australia Party","totalVotes":"1828","percent":1.6861913107646898},"party":"United Australia Party","changeInPercent":0.4751769503520318},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1343","percent":1.4599571687919208},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1243","percent":1.1465731943547643},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":-0.3133839744371565},{"2022":{"party":"Australian Federation Party","totalVotes":"763","percent":0.703809611659441},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"48256","percent":52.45844611855765},"2022":{"party":"Liberal","totalVotes":"43408","percent":40.04058666174707},"party":"LNP","changeInPercent":-12.417859456810582},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"1054","percent":1.1457891704442922},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"1310","percent":1.2083756111059865},"party":"Pauline Hanson's One Nation","changeInPercent":0.06258644066169428},{"2019":{"party":"Independent","totalVotes":"6902","percent":7.50307101936101},"2022":{"party":"Independent","totalVotes":"30942","percent":28.541647449497283},"party":"Independent","changeInPercent":21.038576430136274},{"2019":{"party":"Australian Labor Party","totalVotes":"15692","percent":17.0585613497266},"2022":{"party":"Australian Labor Party","totalVotes":"14654","percent":13.517203210035975},"party":"ALP","changeInPercent":-3.541358139690624},{"2019":{"party":"The Greens (WA)","totalVotes":"13847","percent":15.05288675819935},"2022":{"party":"The Greens (WA)","totalVotes":"10889","percent":10.044276358269533},"party":"GRN","changeInPercent":-5.008610399929816},{"2019":{"party":"Informal","totalVotes":"2927","percent":3.1819021839567774},"2022":{"party":"Informal","totalVotes":"3373","percent":3.1113365925652614},"party":"Informal","changeInPercent":-0.07056559139151597},{"2019":{"party":"Australian Christians","totalVotes":"854","percent":0.9283718705497397},"party":"Australian Christians","changeInPercent":null}]},{"electorate":"Durack","totalVotes":81613,"candidates":[{"2022":{"party":"Australian Federation Party","totalVotes":"1453","percent":1.5176202711453697},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"34429","percent":42.185681202749564},"2022":{"party":"Liberal","totalVotes":"30736","percent":32.1029433268576},"party":"LNP","changeInPercent":-10.082737875891965},{"2022":{"party":"The Great Australian Party","totalVotes":"2738","percent":2.8597689624198366},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2895","percent":3.547228995380638},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2483","percent":2.5934281715443586},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":-0.9538008238362794},{"2019":{"party":"Australian Labor Party","totalVotes":"16742","percent":20.513888718709026},"2022":{"party":"Australian Labor Party","totalVotes":"26093","percent":27.253451985544487},"party":"ALP","changeInPercent":6.739563266835461},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7407","percent":9.075759989217405},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6174","percent":6.448580560255687},"party":"Pauline Hanson's One Nation","changeInPercent":-2.6271794289617176},{"2019":{"party":"The Greens (WA)","totalVotes":"6287","percent":7.703429600676364},"2022":{"party":"The Greens (WA)","totalVotes":"8457","percent":8.833113993858495},"party":"GRN","changeInPercent":1.1296843931821314},{"2019":{"party":"United Australia Party","totalVotes":"2083","percent":2.5522894636883833},"2022":{"party":"United Australia Party","totalVotes":"2229","percent":2.3281318543585887},"party":"United Australia Party","changeInPercent":-0.22415760932979456},{"2019":{"party":"Informal","totalVotes":"3892","percent":4.768848100180119},"2022":{"party":"Informal","totalVotes":"6219","percent":6.495581876292536},"party":"Informal","changeInPercent":1.7267337761124173}]},{"electorate":"Forrest","totalVotes":95880,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"1564","percent":1.6312056737588652},"2022":{"party":"United Australia Party","totalVotes":"2426","percent":2.4181651449304256},"party":"United Australia Party","changeInPercent":0.7869594711715604},{"2022":{"party":"Liberal Democrats","totalVotes":"1577","percent":1.5719070212511461},"party":"Liberal Democrats","changeInPercent":null},{"2022":{"party":"Australian Federation Party","totalVotes":"1152","percent":1.1482795741796579},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"The Greens (WA)","totalVotes":"11645","percent":12.145390070921986},"2022":{"party":"The Greens (WA)","totalVotes":"12780","percent":12.73872652605558},"party":"GRN","changeInPercent":0.5933364551335938},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1167","percent":1.2171464330413015},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2130","percent":2.12312108767593},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":0.9059746546346283},{"2022":{"party":"The Great Australian Party","totalVotes":"2907","percent":2.8976117379689805},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"19126","percent":19.94785148101794},"2022":{"party":"Australian Labor Party","totalVotes":"26092","percent":26.007734938798293},"party":"ALP","changeInPercent":6.059883457780355},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"5371","percent":5.601793909052983},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"5020","percent":5.0037877277620515},"party":"Pauline Hanson's One Nation","changeInPercent":-0.5980061812909314},{"2019":{"party":"Liberal","totalVotes":"47470","percent":49.50980392156863},"2022":{"party":"Liberal","totalVotes":"41006","percent":40.873569634384594},"party":"LNP","changeInPercent":-8.636234287184038},{"2019":{"party":"Informal","totalVotes":"5418","percent":5.65081351689612},"2022":{"party":"Informal","totalVotes":"5234","percent":5.2170966069933415},"party":"Informal","changeInPercent":-0.43371690990277845},{"2019":{"party":"Shooters, Fishers and Farmers","totalVotes":"2881","percent":3.0047976637463494},"party":"Shooters, Fishers and Farmers","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1238","percent":1.2911973299958281},"party":"Independent","changeInPercent":null}]},{"electorate":"Fremantle","totalVotes":96302,"candidates":[{"2022":{"party":"The Great Australian Party","totalVotes":"2293","percent":2.203155325813332},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"Socialist Alliance","totalVotes":"990","percent":1.028016032896513},"2022":{"party":"Socialist Alliance","totalVotes":"1184","percent":1.1376083322123791},"party":"Socialist Alliance","changeInPercent":0.109592299315866},{"2022":{"party":"Australian Federation Party","totalVotes":"1367","percent":1.3134379984242586},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"34636","percent":35.96602355091275},"2022":{"party":"Australian Labor Party","totalVotes":"43111","percent":41.42181825169584},"party":"ALP","changeInPercent":5.455794700783088},{"2019":{"party":"United Australia Party","totalVotes":"1767","percent":1.8348528587152917},"2022":{"party":"United Australia Party","totalVotes":"2000","percent":1.9216356963046946},"party":"United Australia Party","changeInPercent":0.08678283758940286},{"2019":{"party":"Liberal","totalVotes":"31862","percent":33.08550185873606},"2022":{"party":"Liberal","totalVotes":"23749","percent":22.818463075770097},"party":"LNP","changeInPercent":-10.267038782965962},{"2019":{"party":"The Greens (WA)","totalVotes":"14574","percent":15.133642084276547},"2022":{"party":"The Greens (WA)","totalVotes":"17790","percent":17.092949518630256},"party":"GRN","changeInPercent":1.9593074343537094},{"2022":{"party":"Liberal Democrats","totalVotes":"1251","percent":1.2019831280385864},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2333","percent":2.422587277522793},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2248","percent":2.1599185226464765},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":-0.26266875487631625},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"3485","percent":3.6188241158023713},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3060","percent":2.940102615346183},"party":"Pauline Hanson's One Nation","changeInPercent":-0.6787215004561884},{"2019":{"party":"Informal","totalVotes":"5199","percent":5.398641772756537},"2022":{"party":"Informal","totalVotes":"6025","percent":5.788927535117892},"party":"Informal","changeInPercent":0.3902857623613558},{"2019":{"party":"Australian Christians","totalVotes":"1456","percent":1.5119104483811343},"party":"Australian Christians","changeInPercent":null}]},{"electorate":"Hasluck","totalVotes":89099,"candidates":[{"2022":{"party":"Independent","totalVotes":"3318","percent":3.1813605637854168},"party":"Independent","changeInPercent":null},{"2019":{"party":"The Greens (WA)","totalVotes":"9651","percent":10.831771400352418},"2022":{"party":"The Greens (WA)","totalVotes":"10826","percent":10.380171628553622},"party":"GRN","changeInPercent":-0.4515997717987954},{"2019":{"party":"United Australia Party","totalVotes":"1920","percent":2.154906340138498},"2022":{"party":"United Australia Party","totalVotes":"2973","percent":2.8505681001006757},"party":"United Australia Party","changeInPercent":0.6956617599621779},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1542","percent":1.7306591544237309},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2561","percent":2.4555347811496238},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":0.7248756267258929},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"4445","percent":4.988832646831053},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3783","percent":3.6272112757083272},"party":"Pauline Hanson's One Nation","changeInPercent":-1.3616213711227259},{"2019":{"party":"Liberal","totalVotes":"36735","percent":41.2294189609311},"2022":{"party":"Liberal","totalVotes":"32889","percent":31.5345893858766},"party":"LNP","changeInPercent":-9.694829575054499},{"2022":{"party":"Australian Federation Party","totalVotes":"1739","percent":1.6673857807181551},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"25792","percent":28.94757516919382},"2022":{"party":"Australian Labor Party","totalVotes":"39144","percent":37.53200057529124},"party":"ALP","changeInPercent":8.584425406097424},{"2022":{"party":"Liberal Democrats","totalVotes":"1280","percent":1.2272879812071529},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4899","percent":5.498378208509635},"2022":{"party":"Informal","totalVotes":"5782","percent":5.543889927609186},"party":"Informal","changeInPercent":0.045511719099550874},{"2019":{"party":"Shooters, Fishers and Farmers","totalVotes":"2436","percent":2.734037419050719},"party":"Shooters, Fishers and Farmers","changeInPercent":null},{"2019":{"party":"Australian Christians","totalVotes":"1679","percent":1.88442070056903},"party":"Australian Christians","changeInPercent":null}]},{"electorate":"Moore","totalVotes":93527,"candidates":[{"2022":{"party":"The Great Australian Party","totalVotes":"1926","percent":1.765741317980124},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1428","percent":1.526831823965272},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"3095","percent":2.8374711210532104},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":1.3106392970879384},{"2019":{"party":"Australian Labor Party","totalVotes":"21760","percent":23.26600874613748},"2022":{"party":"Australian Labor Party","totalVotes":"34227","percent":31.379038468590707},"party":"ALP","changeInPercent":8.113029722453227},{"2019":{"party":"The Greens (WA)","totalVotes":"10735","percent":11.477968928758541},"2022":{"party":"The Greens (WA)","totalVotes":"14902","percent":13.662033811287543},"party":"GRN","changeInPercent":2.184064882529002},{"2019":{"party":"Liberal","totalVotes":"45503","percent":48.65226084446203},"2022":{"party":"Liberal","totalVotes":"43706","percent":40.06930947229455},"party":"LNP","changeInPercent":-8.582951372167479},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"4113","percent":4.397660568605858},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"3541","percent":3.2463603359125752},"party":"Pauline Hanson's One Nation","changeInPercent":-1.1513002326932824},{"2019":{"party":"United Australia Party","totalVotes":"1591","percent":1.7011130475691514},"2022":{"party":"United Australia Party","totalVotes":"2342","percent":2.147126773992446},"party":"United Australia Party","changeInPercent":0.4460137264232944},{"2022":{"party":"Australian Federation Party","totalVotes":"792","percent":0.7260992335619202},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4748","percent":5.076608893688453},"2022":{"party":"Informal","totalVotes":"4545","percent":4.1668194653269275},"party":"Informal","changeInPercent":-0.9097894283615258},{"2019":{"party":"Australian Christians","totalVotes":"1259","percent":1.346135340596833},"party":"Australian Christians","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"2390","percent":2.555411806216387},"party":"Independent","changeInPercent":null}]},{"electorate":"O'Connor","totalVotes":91742,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"7252","percent":7.904776438272547},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"6833","percent":6.658286560648581},"party":"Pauline Hanson's One Nation","changeInPercent":-1.246489877623966},{"2019":{"party":"Australian Labor Party","totalVotes":"18243","percent":19.8851125983737},"2022":{"party":"Australian Labor Party","totalVotes":"25754","percent":25.095494231368882},"party":"ALP","changeInPercent":5.210381632995183},{"2019":{"party":"The Greens (WA)","totalVotes":"7245","percent":7.897146345185411},"2022":{"party":"The Greens (WA)","totalVotes":"10284","percent":10.021047708138447},"party":"GRN","changeInPercent":2.1239013629530357},{"2022":{"party":"Australian Federation Party","totalVotes":"1348","percent":1.3135328967882756},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1279","percent":1.3941270083495019},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2366","percent":2.305503585905831},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":0.911376577556329},{"2019":{"party":"Australian Christians","totalVotes":"2527","percent":2.754463604455974},"2022":{"party":"Australian Christians","totalVotes":"2779","percent":2.7079435609603992},"party":"Australian Christians","changeInPercent":-0.046520043495574814},{"2019":{"party":"United Australia Party","totalVotes":"1598","percent":1.7418412504632557},"2022":{"party":"United Australia Party","totalVotes":"1722","percent":1.6779700654817586},"party":"United Australia Party","changeInPercent":-0.06387118498149702},{"2019":{"party":"The Great Australian Party","totalVotes":"883","percent":0.9624817422772557},"2022":{"party":"The Great Australian Party","totalVotes":"2337","percent":2.277245088868101},"party":"The Great Australian Party","changeInPercent":1.3147633465908455},{"2019":{"party":"The Nationals","totalVotes":"10795","percent":11.766693553661355},"2022":{"party":"Liberal","totalVotes":"43295","percent":42.187987215466165},"party":"LNP","changeInPercent":30.42129366180481},{"2019":{"party":"Informal","totalVotes":"5785","percent":6.305726929868545},"2022":{"party":"Informal","totalVotes":"5906","percent":5.754989086373557},"party":"Informal","changeInPercent":-0.5507378434949874}]},{"electorate":"Pearce","totalVotes":107414,"candidates":[{"2022":{"party":"The Great Australian Party","totalVotes":"2160","percent":2.1339234553753137},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"The Greens (WA)","totalVotes":"8676","percent":8.077159401940156},"2022":{"party":"The Greens (WA)","totalVotes":"10416","percent":10.290253107032068},"party":"GRN","changeInPercent":2.2130937050919126},{"2022":{"party":"Liberal Democrats","totalVotes":"1548","percent":1.5293118096856415},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"29027","percent":27.02347924851509},"2022":{"party":"Australian Labor Party","totalVotes":"40596","percent":40.105905830748256},"party":"ALP","changeInPercent":13.082426582233165},{"2019":{"party":"United Australia Party","totalVotes":"2495","percent":2.3227884633288025},"2022":{"party":"United Australia Party","totalVotes":"2534","percent":2.503408349963447},"party":"United Australia Party","changeInPercent":0.18061988663464446},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1305","percent":1.214925428715065},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2206","percent":2.1793681215546026},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":0.9644426928395375},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"8199","percent":7.63308321075465},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"4295","percent":4.2431487226097095},"party":"Pauline Hanson's One Nation","changeInPercent":-3.3899344881449407},{"2019":{"party":"Liberal","totalVotes":"43689","percent":40.67346900776435},"2022":{"party":"Liberal","totalVotes":"28380","percent":28.037383177570092},"party":"LNP","changeInPercent":-12.636085830194261},{"2019":{"party":"Australian Christians","totalVotes":"1609","percent":1.4979425400785744},"2022":{"party":"Australian Christians","totalVotes":"2097","percent":2.0716840212602},"party":"Australian Christians","changeInPercent":0.5737414811816257},{"2022":{"party":"Australian Federation Party","totalVotes":"684","percent":0.675742427535516},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"7491","percent":6.973951254026477},"2022":{"party":"Informal","totalVotes":"6306","percent":6.229870976665152},"party":"Informal","changeInPercent":-0.7440802773613244},{"2019":{"party":"Shooters, Fishers and Farmers","totalVotes":"2125","percent":1.9783268475245313},"party":"Shooters, Fishers and Farmers","changeInPercent":null},{"2019":{"party":"Independent","totalVotes":"1456","percent":1.3555030070568082},"party":"Independent","changeInPercent":null}]},{"electorate":"Perth","totalVotes":91926,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"2333","percent":2.537910928355416},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2749","percent":2.5428040218668198},"party":"Pauline Hanson's One Nation","changeInPercent":0.004893093511403546},{"2022":{"party":"Australian Christians","totalVotes":"1514","percent":1.4004384463828174},"party":"Australian Christians","changeInPercent":null},{"2022":{"party":"The Great Australian Party","totalVotes":"702","percent":0.649344642906696},"party":"The Great Australian Party","changeInPercent":null},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2222","percent":2.4171616300067447},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1878","percent":1.7371356686307338},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":-0.6800259613760109},{"2022":{"party":"Animal Justice Party","totalVotes":"1535","percent":1.4198632861278895},"party":"Animal Justice Party","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"30207","percent":32.860126623588535},"2022":{"party":"Australian Labor Party","totalVotes":"40066","percent":37.06074424885995},"party":"ALP","changeInPercent":4.200617625271413},{"2022":{"party":"Liberal Democrats","totalVotes":"1407","percent":1.301464262919831},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1661","percent":1.8068881491634574},"2022":{"party":"United Australia Party","totalVotes":"1605","percent":1.4846127519447965},"party":"United Australia Party","changeInPercent":-0.32227539721866094},{"2019":{"party":"The Greens (WA)","totalVotes":"16552","percent":18.0057872636686},"2022":{"party":"The Greens (WA)","totalVotes":"22621","percent":20.924252374917906},"party":"GRN","changeInPercent":2.9184651112493043},{"2019":{"party":"Liberal","totalVotes":"32800","percent":35.68087374627418},"2022":{"party":"Liberal","totalVotes":"27294","percent":25.246741714380853},"party":"LNP","changeInPercent":-10.434132031893327},{"2022":{"party":"Australian Federation Party","totalVotes":"710","percent":0.6567445818571996},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4220","percent":4.590649000282836},"2022":{"party":"Informal","totalVotes":"6028","percent":5.575853999204507},"party":"Informal","changeInPercent":0.9852049989216711},{"2019":{"party":"Science Party","totalVotes":"1329","percent":1.445728085634097},"party":"Science Party","changeInPercent":null},{"2019":{"party":"VOTEFLUX.ORG | Upgrade Democracy!","totalVotes":"602","percent":0.6548745730261297},"party":"VOTEFLUX.ORG | Upgrade Democracy!","changeInPercent":null}]},{"electorate":"Stirling","totalVotes":91038,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"3129","percent":3.437026296711263},"party":"Pauline Hanson's One Nation","changeInPercent":null},{"2019":{"party":"The Greens (WA)","totalVotes":"10439","percent":11.466640304048859},"party":"GRN","changeInPercent":null},{"2019":{"party":"United Australia Party","totalVotes":"1577","percent":1.7322436784639381},"party":"United Australia Party","changeInPercent":null},{"2019":{"party":"Liberal","totalVotes":"40757","percent":44.76921724993959},"party":"LNP","changeInPercent":null},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1750","percent":1.922274215162899},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":null},{"2019":{"party":"Australian Christians","totalVotes":"1504","percent":1.6520573826314289},"party":"Australian Christians","changeInPercent":null},{"2019":{"party":"Australian Labor Party","totalVotes":"27623","percent":30.342274654539864},"party":"ALP","changeInPercent":null},{"2019":{"party":"Informal","totalVotes":"4259","percent":4.678266218502164},"party":"Informal","changeInPercent":null}]},{"electorate":"Swan","totalVotes":89333,"candidates":[{"2019":{"party":"United Australia Party","totalVotes":"1482","percent":1.6589614140351272},"2022":{"party":"United Australia Party","totalVotes":"2637","percent":2.4976084712211475},"party":"United Australia Party","changeInPercent":0.8386470571860203},{"2022":{"party":"Liberal Democrats","totalVotes":"1821","percent":1.7247421411049335},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"Animal Justice Party","totalVotes":"1304","percent":1.459706939204997},"2022":{"party":"Animal Justice Party","totalVotes":"2214","percent":2.0969682045064926},"party":"Animal Justice Party","changeInPercent":0.6372612653014955},{"2019":{"party":"Australian Labor Party","totalVotes":"27953","percent":31.290788398464176},"2022":{"party":"Australian Labor Party","totalVotes":"39082","percent":37.01612979608073},"party":"ALP","changeInPercent":5.725341397616557},{"2022":{"party":"Australian Federation Party","totalVotes":"792","percent":0.7501349674657372},"party":"Australian Federation Party","changeInPercent":null},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1102","percent":1.2335866924876586},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2059","percent":1.9501614873888296},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":0.7165747949011709},{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"2038","percent":2.2813517960887912},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2544","percent":2.4095244409505496},"party":"Pauline Hanson's One Nation","changeInPercent":0.1281726448617584},{"2019":{"party":"Liberal","totalVotes":"37591","percent":42.07963462550233},"2022":{"party":"Liberal","totalVotes":"32096","percent":30.399408984571085},"party":"LNP","changeInPercent":-11.680225640931244},{"2019":{"party":"The Greens (WA)","totalVotes":"10367","percent":11.60489404811212},"2022":{"party":"The Greens (WA)","totalVotes":"14861","percent":14.075449181197374},"party":"GRN","changeInPercent":2.470555133085254},{"2019":{"party":"Australian Christians","totalVotes":"1450","percent":1.6231403848521824},"2022":{"party":"Australian Christians","totalVotes":"1930","percent":1.8279804131425164},"party":"Australian Christians","changeInPercent":0.204840028290334},{"2019":{"party":"Informal","totalVotes":"5196","percent":5.8164396135806475},"2022":{"party":"Informal","totalVotes":"5545","percent":5.251891912370597},"party":"Informal","changeInPercent":-0.5645477012100502},{"2019":{"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","totalVotes":"599","percent":0.6705248900182463},"party":"FRASER ANNING'S CONSERVATIVE NATIONAL PARTY","changeInPercent":null},{"2019":{"party":"Australia First Party","totalVotes":"251","percent":0.2809711976537226},"party":"Australia First Party","changeInPercent":null}]},{"electorate":"Tangney","totalVotes":87250,"candidates":[{"2019":{"party":"Pauline Hanson's One Nation","totalVotes":"1732","percent":1.9851002865329512},"2022":{"party":"Pauline Hanson's One Nation","totalVotes":"2288","percent":2.0461638898577164},"party":"Pauline Hanson's One Nation","changeInPercent":0.061063603324765126},{"2019":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"1080","percent":1.2378223495702005},"2022":{"party":"WESTERN AUSTRALIA PARTY","totalVotes":"2096","percent":1.8744578291703555},"party":"WESTERN AUSTRALIA PARTY","changeInPercent":0.636635479600155},{"2019":{"party":"Australian Christians","totalVotes":"1695","percent":1.9426934097421202},"2022":{"party":"Australian Christians","totalVotes":"2481","percent":2.2187642529444904},"party":"Australian Christians","changeInPercent":0.2760708432023702},{"2019":{"party":"United Australia Party","totalVotes":"969","percent":1.1106017191977078},"2022":{"party":"United Australia Party","totalVotes":"1721","percent":1.5390944293903541},"party":"United Australia Party","changeInPercent":0.42849271019264634},{"2019":{"party":"Australian Labor Party","totalVotes":"21644","percent":24.806876790830945},"2022":{"party":"Australian Labor Party","totalVotes":"40940","percent":36.612740231982045},"party":"ALP","changeInPercent":11.8058634411511},{"2019":{"party":"Liberal","totalVotes":"44740","percent":51.277936962750715},"2022":{"party":"Liberal","totalVotes":"43008","percent":38.462157593968826},"party":"LNP","changeInPercent":-12.81577936878189},{"2022":{"party":"Australian Federation Party","totalVotes":"1028","percent":0.9193428665969111},"party":"Australian Federation Party","changeInPercent":null},{"2022":{"party":"Liberal Democrats","totalVotes":"1110","percent":0.9926756633488046},"party":"Liberal Democrats","changeInPercent":null},{"2019":{"party":"The Greens (WA)","totalVotes":"9319","percent":10.68080229226361},"2022":{"party":"The Greens (WA)","totalVotes":"12876","percent":11.515037694846136},"party":"GRN","changeInPercent":0.8342354025825252},{"2019":{"party":"Informal","totalVotes":"3831","percent":4.390830945558739},"2022":{"party":"Informal","totalVotes":"4271","percent":3.819565547894365},"party":"Informal","changeInPercent":-0.5712653976643742},{"2019":{"party":"Independent","totalVotes":"1933","percent":2.2154727793696276},"party":"Independent","changeInPercent":null}]},{"totalVotes":null,"candidates":[{"2019":{"percent":null},"2022":{"percent":null},"party":"no party","changeInPercent":null}]}]`), fo = {
  diffedElectorates: go
}, No = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, Ma = {
  hashCodes: No
};
function un(t) {
  const e = {};
  return Object.entries(t).forEach(([a, r]) => {
    let n = r.defaultValue;
    const o = r.type;
    o === "number" && (n = n ?? 0), o === "boolean" && (n = n ?? !1), e[a] = {
      ...r,
      defaultValue: n
    };
  }), e;
}
const cr = ["number", "boolean", "enum", "string", "custom"];
async function mo({ schema: t, data: e }) {
  const a = un(t), r = {}, n = Object.entries(a).map(
    async ([o, l]) => {
      const { type: s, key: c, values: y, defaultValue: i, codec: u } = l;
      if (!cr.includes(s))
        throw new Error(
          `Unknown type "${s}", must be one of ${cr}`
        );
      let p = e[c || o];
      if (typeof p > "u") {
        typeof i < "u" && (r[o] = i);
        return;
      }
      if (u && (p = await u.decode(p)), s === "number" && (p = Number(p)), s === "boolean" && (p = Number(p) === 1), s === "enum") {
        const d = y[p];
        typeof d > "u" ? p = i : p = d;
      }
      r[o] = p;
    }
  );
  return await Promise.all(n), r;
}
async function Lo({ schema: t, data: e }) {
  const a = un(t), r = {}, n = Object.keys(e).filter((l) => !t[l]);
  if (n.length)
    throw console.error(`Unknown keys found in data: ${n.join()}`), new Error("Unknown keys found in data");
  const o = Object.entries(a).map(
    async ([l, s]) => {
      const { type: c, key: y, values: i, defaultValue: u, codec: p } = s, d = y || l, P = e[l];
      if (typeof P > "u" || P === u) return;
      let h = P;
      if (c === "enum") {
        const I = i.indexOf(P);
        if (I === -1)
          throw console.error(`Enum value "${P}" not found in ${i}`), new Error("Invalid enum value");
        h = I;
      }
      p && (h = await p.encode(h)), c === "boolean" && (h = h ? 1 : 0), r[d] = h;
    }
  );
  return await Promise.all(o), r;
}
function bo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var aa, pr;
function To() {
  if (pr) return aa;
  pr = 1;
  function t(e) {
    if (e.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var a = new Uint8Array(256), r = 0; r < a.length; r++)
      a[r] = 255;
    for (var n = 0; n < e.length; n++) {
      var o = e.charAt(n), l = o.charCodeAt(0);
      if (a[l] !== 255)
        throw new TypeError(o + " is ambiguous");
      a[l] = n;
    }
    var s = e.length, c = e.charAt(0), y = Math.log(s) / Math.log(256), i = Math.log(256) / Math.log(s);
    function u(P) {
      if (P instanceof Uint8Array || (ArrayBuffer.isView(P) ? P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength) : Array.isArray(P) && (P = Uint8Array.from(P))), !(P instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (P.length === 0)
        return "";
      for (var h = 0, I = 0, N = 0, V = P.length; N !== V && P[N] === 0; )
        N++, h++;
      for (var A = (V - N) * i + 1 >>> 0, g = new Uint8Array(A); N !== V; ) {
        for (var T = P[N], b = 0, R = A - 1; (T !== 0 || b < I) && R !== -1; R--, b++)
          T += 256 * g[R] >>> 0, g[R] = T % s >>> 0, T = T / s >>> 0;
        if (T !== 0)
          throw new Error("Non-zero carry");
        I = b, N++;
      }
      for (var S = A - I; S !== A && g[S] === 0; )
        S++;
      for (var C = c.repeat(h); S < A; ++S)
        C += e.charAt(g[S]);
      return C;
    }
    function p(P) {
      if (typeof P != "string")
        throw new TypeError("Expected String");
      if (P.length === 0)
        return new Uint8Array();
      for (var h = 0, I = 0, N = 0; P[h] === c; )
        I++, h++;
      for (var V = (P.length - h) * y + 1 >>> 0, A = new Uint8Array(V); P[h]; ) {
        var g = a[P.charCodeAt(h)];
        if (g === 255)
          return;
        for (var T = 0, b = V - 1; (g !== 0 || T < N) && b !== -1; b--, T++)
          g += s * A[b] >>> 0, A[b] = g % 256 >>> 0, g = g / 256 >>> 0;
        if (g !== 0)
          throw new Error("Non-zero carry");
        N = T, h++;
      }
      for (var R = V - N; R !== V && A[R] === 0; )
        R++;
      for (var S = new Uint8Array(I + (V - R)), C = I; R !== V; )
        S[C++] = A[R++];
      return S;
    }
    function d(P) {
      var h = p(P);
      if (h)
        return h;
      throw new Error("Non-base" + s + " character");
    }
    return {
      encode: u,
      decodeUnsafe: p,
      decode: d
    };
  }
  return aa = t, aa;
}
var vo = To();
const Ro = /* @__PURE__ */ bo(vo);
var So = "0123456789abcdefghijklmnopqrstuvwxyz";
Ro(So);
new TextEncoder();
new TextDecoder();
const Oo = function(t) {
  return t.slice(t.length - 1) + t.slice(0, t.length - 1);
}, Go = function(t, { delineator: e }) {
  t += e;
  const a = [];
  let r = t;
  for (let o = 0; o < t.length; o++)
    r = Oo(r), a.push(r);
  a.sort();
  let n = "";
  for (let o = 0; o < a.length; o++)
    n += a[o].charAt(a[o].length - 1);
  return n;
}, xo = function(t, { delineator: e }) {
  const r = t.split("").slice(0);
  for (let o = 0; o < t.length - 1; o++) {
    r.sort();
    for (let l = 0; l < t.length; l++)
      r[l] = t[l] + r[l];
  }
  return r.filter(function(o) {
    return o.charAt(o.length - 1) === e;
  })[0].substring(0, t.length - 1);
};
function Pn(t) {
  if (!t.match(/^[a-z]*$/))
    throw console.error("Unexpected characters in RLE encoder", t), new Error("RLE encoder only supports a-z values.");
  return t.split("").reduce(
    /**
     *
     * @param {Memo[]} memo
     * @param {string} char
     * @param {number} index
     * @returns
     */
    (e, a, r) => (r === 0 || a !== e[e.length - 1].char ? e.push({ char: a, repeated: 1 }) : e[e.length - 1].repeated++, e),
    []
  ).reduce((e, { char: a, repeated: r }) => e += r === 1 ? a : a + String(r), "");
}
function dn(t) {
  return t.replace(
    /(\w)(\d+)/g,
    (e, a, r) => a.repeat(+r)
  );
}
async function Eo(t, { delineator: e }) {
  const a = Go(t, { delineator: e });
  return Pn(a);
}
async function wo(t, { delineator: e }) {
  const a = dn(t);
  return xo(a, { delineator: e });
}
function Co({ delineator: t = "q" }) {
  if (t.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (e) => Eo(e, { delineator: t }),
    decode: (e) => wo(e, { delineator: t })
  };
}
const ga = 26, fa = 97, Uo = 48, ir = async (t, { maxBits: e }) => {
  const a = [1, ...t].map((s) => s ? 1 : 0).join(""), r = [];
  for (let s = a.length; s > 0; s -= e)
    r.push(a.slice(Math.max(0, s - e), s));
  return r.reverse(), r.map((s) => parseInt(s, 2)).map((s) => s > ga ? s % ga : String.fromCharCode(s + fa)).join("");
};
async function yr(t, { maxBits: e }) {
  return t.split("").map((s) => s.charCodeAt(0)).map(
    (s) => s >= fa ? s - fa : s - Uo + ga
  ).map(
    (s, c) => Number(s).toString(2).padStart(c > 0 ? e : 0, "0")
  ).flatMap(
    (s) => s.split("").map((c) => c === "1")
  ).slice(1);
}
function Ho({ maxBits: t = 5 } = {}) {
  if (![4, 5].includes(t))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return t === 4 ? {
    encode: async (e) => Pn(await ir(e, { maxBits: t })),
    decode: async (e) => yr(dn(e), { maxBits: t })
  } : {
    encode: (e) => ir(e, { maxBits: t }),
    decode: (e) => yr(e, { maxBits: t })
  };
}
var Na = function(t) {
  return Array.isArray(t) ? t.map(String) : [String(t)];
};
function _o(t, e) {
  e === void 0 && (e = {});
  var a = e.propMap, r = a === void 0 ? {} : a, n = e.arrayProps, o = n === void 0 ? [] : n, l = e.noTypeGuessing, s = l === void 0 ? [] : l, c = t.match(/[A-Z]+([0-9a-z]|$)+/g) || [];
  o = Na(o), s = Na(s);
  var y = c.map(function(i) {
    var u = i.match(/^([A-Z]+)([0-9a-z]*$)/) || [], p = u[1], d = u[2];
    if (typeof p != "string" || typeof d != "string")
      throw new Error("Error reading key/value pair");
    var P = r[p.toLowerCase()] || p.toLowerCase(), h = s.includes(P) ? d : parseFloat(d).toString() === d ? parseFloat(d) : d === "true" || d === "yes" ? !0 : d === "false" || d === "no" ? !1 : d === "" ? null : d;
    return { key: P, value: h };
  }).reduce(
    /** @param {Object<string,any>} obj */
    function(i, u, p, d) {
      var P = u.key, h = u.value;
      if (typeof i[P] < "u")
        return i;
      var I = d.filter(function(A) {
        var g = A.key;
        return g === P;
      }).map(function(A) {
        return A.value;
      }), N = o.includes(P) || I.length > 1;
      if (N) {
        var V = new Set(I.map(function(A) {
          return typeof A;
        }));
        if (V.size > 1)
          throw new Error("Inconsistent types in array property '".concat(P, "'"));
        i[P] = I;
      } else
        i[P] = h;
      return i;
    },
    {}
  );
  return o.forEach(function(i) {
    typeof y[i] > "u" && (y[i] = []);
  }), y;
}
var Ye = function() {
  return Ye = Object.assign || function(e) {
    for (var a, r = 1, n = arguments.length; r < n; r++) {
      a = arguments[r];
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
    return e;
  }, Ye.apply(this, arguments);
};
var ur = function(t) {
  var e = t.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (e !== t)
    throw new Error('Illegal characters found: "'.concat(t, '"'));
  return t;
};
function Fo(t, e) {
  e === void 0 && (e = {});
  var a = Object.entries(e.propMap || {}).reduce(function(r, n) {
    var o, l = n[0], s = n[1];
    return Ye(Ye({}, r), (o = {}, o[s] = String(l), o));
  }, {});
  return Object.entries(t).flatMap(function(r) {
    var n = r[0], o = r[1];
    if (typeof o > "u" || o === null)
      return [];
    var l = a[n] || n, s = Na(o);
    return s.map(function(c) {
      return [ur(l).toUpperCase(), ur(c)].join("");
    });
  }).join("");
}
async function Do(t, e) {
  const a = _o(e);
  return await mo({ schema: t, data: a });
}
async function ko(t, e) {
  const a = await Lo({ schema: t, data: e });
  return Fo(a);
}
function Mo(t) {
  const e = ka(
    /** @type {T} */
    null
  );
  async function a() {
    const n = window.location.hash.slice(1);
    return await Do(t, n);
  }
  let r;
  return a().then((n) => {
    e.set(n), e.subscribe(async (o) => {
      if (!o)
        return;
      const l = "#" + await ko(t, o);
      window.location.hash !== l && (window.location.hash = l), r = l;
    }), window.addEventListener("hashchange", () => {
      window.location.hash !== r && a().then((l) => {
        e.set(l);
      });
    });
  }), e;
}
const Wo = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.0035, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 33.75, top: 30.75, width: 8, name: "NT" }, { left: 65.25, top: 21.5, width: 8, name: "QLD" }, { left: 57.75, top: 44.25, width: 8, name: "NSW" }, { left: 67.5, top: 57.75, width: 8, name: "ACT" }, { left: 58, top: 67.25, width: 8, name: "VIC" }, { left: 57.75, top: 86.25, width: 8, name: "TAS" }, { left: 34, top: 48.75, width: 8, name: "SA" }, { left: 24.5, top: 53.25, width: 8, name: "WA" }], overlayLabels: !0 }, Jo = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.5, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 71, top: 63.5, width: 8, name: "ACT" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, Yo = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, Bo = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, $o = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, Qo = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Ko = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, jo = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, zo = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, qo = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Xo = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Zo = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, t1 = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, e1 = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, a1 = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, r1 = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, n1 = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, o1 = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, l1 = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, hn = {
  COUNTRY: Wo,
  EXPLODED: Jo,
  EXPLODED_STATES_ONLY: Yo,
  GRID: Bo,
  ACT: $o,
  NSW: Qo,
  NT: Ko,
  QLD: jo,
  SA: zo,
  TAS: qo,
  VIC: Xo,
  WA: Zo,
  ACT_NT: t1,
  NSW_QLD: e1,
  NSW_VIC: a1,
  QLD_VIC: r1,
  QLD_WA: n1,
  QLD_NSW_VIC: o1,
  SA_TAS_WA: l1
}, s1 = 291, c1 = 200, p1 = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park.","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart.","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"River.","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New.","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Banks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lille","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long.","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More.","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Forde","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Corio","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wills","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='TMP1' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"TMP1","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), Wa = {
  svgWidth: s1,
  svgHeight: c1,
  groups: p1
}, i1 = { Australia: [[112, -44], [156, -10]], "Brisbane & surrounds": [[152.67620200034025, -27.85975844732532], [153.50771856749492, -27.122141459597835]], "Sydney & surrounds": [[150.53643051298894, -34.250330919454555], [151.6159583706169, -33.35329642067877]], "Melbourne & surrounds": [[143.7112326761349, -38.73737902155104], [146.2181523182391, -36.755303142447325]], "Inner-city Sydney": [[150.97804393208258, -33.9820617904466], [151.29883502771884, -33.71564208020996]], "Inner-city Melbourne": [[144.77343032299214, -38.00505753293409], [145.25008324655565, -37.62851493730817]], Perth: [[115.29761105882773, -32.58735478749758], [116.46158922227181, -31.601283791419284]], Adelaide: [[138.1361307284978, -35.308045628940405], [139.08340859017528, -34.53133194772551]], Tasmania: [[143.15169589003773, -43.824678713957354], [149.19913869957333, -39.30289848300832]], "Focus Driven": [[112, -44], [156, -10]] }, y1 = {
  areas: i1
}, Kt = Wa.groups.flatMap((t) => t.hexes.map((e) => ({ ...e, group: t.name }))).sort((t, e) => t.index - e.index), u1 = Object.values(Kt).reduce((t, e) => (t[e.id] = e, t), {});
Wa.groups;
const ma = "q", P1 = "x", Pr = Co({ delineator: ma }), Vn = X2(Ma.hashCodes);
if (Vn[ma] || P1 === ma)
  throw new Error("Can not use delineator in allocation map");
function In(t) {
  return Kt.map(({ id: e }) => t[e]);
}
function d1(t) {
  return Kt.reduce((e, { id: a }, r) => (e[a] = t[r] ?? null, e), {});
}
const dr = Ho({ maxBits: 4 }), ra = {
  encode: async function(t) {
    const e = In(t);
    return dr.encode(e);
  },
  decode: async function(t) {
    const e = await dr.decode(t);
    return d1(e);
  }
}, na = Object.freeze(
  Kt.reduce((t, e) => (t[e.id] = null, t), {})
), h1 = {
  version: {
    type: "number",
    key: "ver"
  },
  vizType: {
    type: "enum",
    key: "v",
    defaultValue: "hex",
    values: ["hex", "geo"]
  },
  layout: {
    type: "enum",
    key: "l",
    defaultValue: "COUNTRY",
    values: Object.keys(hn)
  },
  geoArea: {
    type: "enum",
    key: "g",
    defaultValue: "Australia",
    values: Object.keys(y1.areas)
  },
  allocations: {
    type: "custom",
    codec: {
      encode: async (t) => {
        const e = Object.entries(t).reduce((n, [o, l]) => (n[o] = Ma.hashCodes[l] || "x", n), {}), a = In(e).map((n) => n ?? "x").join("");
        return await Pr.encode(a);
      },
      decode: async (t) => (await Pr.decode(t).catch((r) => (console.error("decoding string failed", t, r), ""))).split("").reduce((r, n, o) => {
        var s;
        const l = (s = Kt[o]) == null ? void 0 : s.id;
        if (l)
          return r[l] = Vn[String(n)] || null, r;
      }, {})
    },
    key: "a",
    defaultValue: na
  },
  focuses: {
    type: "custom",
    codec: ra,
    key: "f",
    defaultValue: na
  },
  certainties: {
    type: "custom",
    codec: ra,
    key: "c",
    defaultValue: Object.freeze(
      Kt.reduce((t, e) => (t[e.id] = !0, t), {})
    )
  },
  labelsToShow: {
    type: "custom",
    codec: ra,
    key: "li",
    defaultValue: na
  },
  showLabelsWhen: {
    type: "enum",
    key: "lb",
    defaultValue: "none",
    values: ["none", "states", "electorates"]
  },
  showStateLabels: {
    type: "boolean",
    key: "ls",
    defaultValue: !1
  },
  showElectorateLabels: {
    type: "boolean",
    key: "le",
    defaultValue: !1
  },
  showFocusedElectorateLabels: {
    type: "boolean",
    key: "lf",
    defaultValue: !1
  },
  showTotals: {
    type: "boolean",
    key: "t",
    defaultValue: !1
  },
  firstPreferenceArrows: {
    type: "enum",
    key: "fpa",
    defaultValue: "None",
    values: ["None", "ALP", "LNP", "GRN", "Independent", "Informal"]
  }
}, hr = Mo(h1);
hr.subscribe((t) => {
  t && t.version !== 1 && hr.set({ ...t, version: 1 });
});
function V1(t = "") {
  const e = t.trim().toLowerCase();
  return Kt.find((a) => a.name.toLowerCase() === e || a.id.toLocaleLowerCase() === e);
}
const oa = ka({});
var I1 = /* @__PURE__ */ ye('<g><path id="path14" style="color:#000000;" d="M 0 -4.2808757 L -0.74207357 -2.2406901 C -0.56187965 -2.394702 -0.34988926 -2.4842981 -0.13280843 -2.5104411 L -0.13280843 0 L 0.13280843 0 L 0.13280843 -2.5104411 C 0.35029345 -2.4845375 0.56222883 -2.3950633 0.74207357 -2.2406901 L 0 -4.2808757 z "></path></g>'), A1 = /* @__PURE__ */ ye('<g class="hex-map-arrows"></g>');
function An(t, e) {
  ot(e, !0);
  const [a, r] = nn(), n = () => rn(oa, "$arrowData", a);
  let o = L(e, "hexes", 7), l = L(e, "offset", 7), s = L(e, "firstPreferenceArrows", 7);
  const c = 0.5;
  Ht(() => {
    console.group("first preference arrows"), Ia(oa, fo.diffedElectorates.reduce(
      (u, p) => {
        const d = V1(p.electorate);
        if (!d)
          return console.error("couldn't match", p.electorate), u;
        const P = p.candidates.find((h) => h.party === s());
        return P || console.error("couldn't find party", s(), p.candidates), {
          ...u,
          [d.id]: P == null ? void 0 : P.changeInPercent
        };
      },
      {}
    )), console.log("all done"), console.groupEnd();
  }), Da(() => () => {
    Ia(oa, {});
  });
  var y = A1();
  Qt(y, 21, o, $t, (u, p) => {
    var d = be(), P = Bt(d);
    {
      var h = (I) => {
        var N = I1(), V = D(N);
        H(N), Nt(
          (A, g) => {
            Ft(N, "transform", A), Ft(V, "transform", `scale(1 ${n()[f(p).id] * c})`), Ct(V, "fill", g);
          },
          [
            () => `translate(${f(p).coordPx.join(" ")}) scale(2) rotate(10)`,
            () => `var(--a-${s().length > 3 ? "OTH" : s().toUpperCase()}, hotpink)`
          ]
        ), _(I, N);
      };
      _t(P, (I) => {
        n()[f(p).id] && I(h);
      });
    }
    _(u, d);
  }), H(y), Nt((u) => Ft(y, "transform", u), [
    () => `translate(${ge(l(), "").join(",")})`
  ]), _(t, y);
  var i = lt({
    get hexes() {
      return o();
    },
    set hexes(u) {
      o(u), m();
    },
    get offset() {
      return l();
    },
    set offset(u) {
      l(u), m();
    },
    get firstPreferenceArrows() {
      return s();
    },
    set firstPreferenceArrows(u) {
      s(u), m();
    }
  });
  return r(), i;
}
Pt(
  An,
  {
    hexes: {},
    offset: {},
    firstPreferenceArrows: {}
  },
  [],
  [],
  !0
);
var g1 = typeof global == "object" && global && global.Object === Object && global, f1 = typeof self == "object" && self && self.Object === Object && self, gn = g1 || f1 || Function("return this")(), Be = gn.Symbol, fn = Object.prototype, N1 = fn.hasOwnProperty, m1 = fn.toString, Pe = Be ? Be.toStringTag : void 0;
function L1(t) {
  var e = N1.call(t, Pe), a = t[Pe];
  try {
    t[Pe] = void 0;
    var r = !0;
  } catch {
  }
  var n = m1.call(t);
  return r && (e ? t[Pe] = a : delete t[Pe]), n;
}
var b1 = Object.prototype, T1 = b1.toString;
function v1(t) {
  return T1.call(t);
}
var R1 = "[object Null]", S1 = "[object Undefined]", Vr = Be ? Be.toStringTag : void 0;
function O1(t) {
  return t == null ? t === void 0 ? S1 : R1 : Vr && Vr in Object(t) ? L1(t) : v1(t);
}
function G1(t) {
  return t != null && typeof t == "object";
}
var x1 = "[object Symbol]";
function E1(t) {
  return typeof t == "symbol" || G1(t) && O1(t) == x1;
}
var w1 = /\s/;
function C1(t) {
  for (var e = t.length; e-- && w1.test(t.charAt(e)); )
    ;
  return e;
}
var U1 = /^\s+/;
function H1(t) {
  return t && t.slice(0, C1(t) + 1).replace(U1, "");
}
function La(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ir = NaN, _1 = /^[-+]0x[0-9a-f]+$/i, F1 = /^0b[01]+$/i, D1 = /^0o[0-7]+$/i, k1 = parseInt;
function Ar(t) {
  if (typeof t == "number")
    return t;
  if (E1(t))
    return Ir;
  if (La(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = La(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = H1(t);
  var a = F1.test(t);
  return a || D1.test(t) ? k1(t.slice(2), a ? 2 : 8) : _1.test(t) ? Ir : +t;
}
var la = function() {
  return gn.Date.now();
}, M1 = "Expected a function", W1 = Math.max, J1 = Math.min;
function Y1(t, e, a) {
  var r, n, o, l, s, c, y = 0, i = !1, u = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError(M1);
  e = Ar(e) || 0, La(a) && (i = !!a.leading, u = "maxWait" in a, o = u ? W1(Ar(a.maxWait) || 0, e) : o, p = "trailing" in a ? !!a.trailing : p);
  function d(b) {
    var R = r, S = n;
    return r = n = void 0, y = b, l = t.apply(S, R), l;
  }
  function P(b) {
    return y = b, s = setTimeout(N, e), i ? d(b) : l;
  }
  function h(b) {
    var R = b - c, S = b - y, C = e - R;
    return u ? J1(C, o - S) : C;
  }
  function I(b) {
    var R = b - c, S = b - y;
    return c === void 0 || R >= e || R < 0 || u && S >= o;
  }
  function N() {
    var b = la();
    if (I(b))
      return V(b);
    s = setTimeout(N, h(b));
  }
  function V(b) {
    return s = void 0, p && r ? d(b) : (r = n = void 0, l);
  }
  function A() {
    s !== void 0 && clearTimeout(s), y = 0, r = c = n = s = void 0;
  }
  function g() {
    return s === void 0 ? l : V(la());
  }
  function T() {
    var b = la(), R = I(b);
    if (r = arguments, n = this, c = b, R) {
      if (s === void 0)
        return P(c);
      if (u)
        return clearTimeout(s), s = setTimeout(N, e), d(c);
    }
    return s === void 0 && (s = setTimeout(N, e)), l;
  }
  return T.cancel = A, T.flush = g, T;
}
var B1 = ({ target: t, clientX: e, clientY: a }, r) => {
  var o;
  const n = (o = t == null ? void 0 : t.dataset) == null ? void 0 : o.id;
  !n || !r() || r()({ code: n, clientX: e, clientY: a });
}, $1 = (t, e) => {
  const a = t.target, { clientX: r, clientY: n } = t, o = a.dataset.id;
  a.nodeName !== "polygon" || !o || f(e)({ code: o, clientX: r, clientY: n });
}, Q1 = (t, e) => {
  f(e)({ code: null });
}, K1 = /* @__PURE__ */ X('<div class="hex-map-interaction-handlers"><!></div>'), j1 = /* @__PURE__ */ X("<!> <!>", 1);
function Nn(t, e) {
  ot(e, !0);
  let a = L(e, "isInteractive", 7, !1), r = L(e, "onClick", 7), n = L(e, "onHover", 7), o = L(e, "children", 7);
  const l = /* @__PURE__ */ $(() => Y1(n(), 60));
  var s = j1(), c = Bt(s);
  {
    var y = (p) => {
      var d = K1();
      d.__click = [B1, r], d.__mouseover = [$1, l], d.__mouseout = [Q1, l];
      var P = D(d);
      Je(P, () => o() ?? M), H(d), O2("blur", d, (h) => {
        f(l)({ code: null });
      }), _(p, d);
    };
    _t(c, (p) => {
      a() && p(y);
    });
  }
  var i = at(c, 2);
  {
    var u = (p) => {
      var d = be(), P = Bt(d);
      Je(P, () => o() ?? M), _(p, d);
    };
    _t(i, (p) => {
      a() || p(u);
    });
  }
  return _(t, s), lt({
    get isInteractive() {
      return a();
    },
    set isInteractive(p = !1) {
      a(p), m();
    },
    get onClick() {
      return r();
    },
    set onClick(p) {
      r(p), m();
    },
    get onHover() {
      return n();
    },
    set onHover(p) {
      n(p), m();
    },
    get children() {
      return o();
    },
    set children(p) {
      o(p), m();
    }
  });
}
zr(["click", "mouseover", "mouseout"]);
Pt(
  Nn,
  {
    isInteractive: {},
    onClick: {},
    onHover: {},
    children: {}
  },
  [],
  [],
  !0
);
var z1 = /* @__PURE__ */ ye('<g><path style="color:#000000;fill:#0058cc;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z" id="path6-1"></path><path id="path11-2" style="color:#000000;fill:#ffffff;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path><path style="color:#000000;fill:#0058cc;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z" id="path3-3"></path></g>');
function ba(t, e) {
  ot(e, !0);
  let a = L(e, "groups", 7), r = L(e, "id", 7), n = L(e, "layout", 7), o = /* @__PURE__ */ $(() => a().flatMap((i) => i.hexes.map((u) => ({ ...u, group: i.name }))).sort((i, u) => i.index - u.index)), l = /* @__PURE__ */ $(() => {
    if (!r())
      return;
    const i = f(o).find((V) => V.id === r()), [u, p] = n().positions[i.group], [d, P] = i.coord, h = P % 2 ? 0.5 : 0, [I, N] = ge([u + d + h, p + P], "").map(Number);
    return [I - 3, N - 3];
  });
  var s = be(), c = Bt(s);
  {
    var y = (i) => {
      var u = z1();
      Nt((p) => Ft(u, "transform", p), [
        () => `translate(${f(l).join(" ")}) scale(0.95)`
      ]), _(i, u);
    };
    _t(c, (i) => {
      f(l) && i(y);
    });
  }
  return _(t, s), lt({
    get groups() {
      return a();
    },
    set groups(i) {
      a(i), m();
    },
    get id() {
      return r();
    },
    set id(i) {
      r(i), m();
    },
    get layout() {
      return n();
    },
    set layout(i) {
      n(i), m();
    }
  });
}
Pt(ba, { groups: {}, id: {}, layout: {} }, [], [], !0);
var q1 = /* @__PURE__ */ X('<div class="hexmap__labels svelte-ko8kvy"><!></div>'), X1 = /* @__PURE__ */ X('<div><svg class="svelte-ko8kvy"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!><!><!><!><!></svg></div> <!>', 1), Z1 = /* @__PURE__ */ X('<div class="hexmap svelte-ko8kvy"><!></div>');
const t0 = {
  hash: "svelte-ko8kvy",
  code: ".hexmap.svelte-ko8kvy {position:relative;width:100%;height:100%;position:relative;}.hexmap__labels.svelte-ko8kvy {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-ko8kvy svg:where(.svelte-ko8kvy) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-ko8kvy {position:relative;margin:0 auto;max-height:100%;}"
};
function mn(t, e) {
  ot(e, !0), zt(t, t0);
  let a = L(e, "config", 23, () => ({})), r = L(e, "layout", 23, () => ({})), n = L(e, "allocations", 23, () => ({})), o = L(e, "focuses", 23, () => ({})), l = L(e, "certainties", 23, () => ({})), s = L(e, "labelsToShow", 23, () => ({})), c = L(e, "showStateLabels", 7, !1), y = L(e, "showElectorateLabels", 7, !1), i = L(e, "showFocusedElectorateLabels", 7, !1), u = L(e, "isStaticLayout", 7, !1), p = L(e, "onClick", 7, ({ code: v }) => {
  }), d = L(e, "onHover", 7, ({ code: v }) => {
  }), P = L(e, "customViewbox", 7, null), h = L(e, "onViewboxChange", 7, ({ newViewbox: v }) => {
  }), I = L(e, "isInteractive", 7, !1), N = L(e, "firstPreferenceArrows", 7, "None"), V = L(e, "selectedElectorate", 7, null), A = Ut(void 0), g = Ut(0), T = Ut(null), b = /* @__PURE__ */ $(() => Object.values(o()).some(Boolean)), R = /* @__PURE__ */ $(() => {
    const v = Object.values(n());
    return v.length !== 0 && v.some(Boolean);
  });
  const S = r().viewbox, C = { easing: q2, duration: 1100 };
  let st = new re(S[0], C), K = new re(S[1], C), dt = new re(S[2], C), ct = new re(S[3], C);
  Ht(() => {
    const [v, Z, Xt, tt] = P() || r().viewbox;
    st.set(v), K.set(Z), dt.set(Xt), ct.set(tt);
  }), Ht(() => {
    h()(r().viewbox);
  });
  let qt = /* @__PURE__ */ $(() => {
    var v;
    return Array.from(((v = f(A)) == null ? void 0 : v.querySelectorAll("polygon.hex")) || []).filter((Z) => Z instanceof SVGPolygonElement);
  });
  Ht(() => {
    const v = { ...n() }, Z = o(), Xt = l();
    f(qt).forEach((tt) => {
      const Mt = tt.dataset.id;
      if (!Mt)
        return;
      const Zt = v[Mt] || null;
      tt.dataset.allocation = Zt;
      const ve = f(b) ? Z[Mt] || !1 : !0;
      tt.dataset.focused = ve;
      const Re = Xt[Mt] || null;
      tt.dataset.certain = Re;
    });
  }), Da(() => {
    if (!f(A))
      return;
    const v = f(A).getBoundingClientRect();
    F(g, v.height / v.width);
  });
  var O = Z1(), Te = D(O);
  return Nn(Te, {
    get isInteractive() {
      return I();
    },
    get onClick() {
      return p();
    },
    get onHover() {
      return d();
    },
    children: (v, Z) => {
      var Xt = X1(), tt = Bt(Xt);
      let Mt;
      var Zt = D(tt), ve = at(D(Zt));
      Qt(ve, 17, () => a().groups, $t, (k, j) => {
        sn(k, $2(() => f(j), {
          get isStaticLayout() {
            return u();
          },
          get layout() {
            return r();
          },
          get offset() {
            return r().positions[f(j).name];
          },
          get hasAllocations() {
            return f(R);
          },
          get allocations() {
            return n();
          },
          get focuses() {
            return o();
          },
          get hasAnyFocuses() {
            return f(b);
          },
          get showElectorateLabels() {
            return y();
          },
          get showFocusedElectorateLabels() {
            return i();
          },
          get labelsToShow() {
            return s();
          }
        }));
      });
      var Re = at(ve);
      ba(Re, {
        get groups() {
          return a().groups;
        },
        get id() {
          return f(T);
        },
        get layout() {
          return r();
        }
      });
      var Ya = at(Re);
      ba(Ya, {
        get groups() {
          return a().groups;
        },
        get id() {
          return V();
        },
        get layout() {
          return r();
        }
      });
      var Ba = at(Ya);
      {
        var bn = (k) => {
          var j = be(), ea = Bt(j);
          Qt(ea, 17, () => a().groups, $t, (On, $a) => {
            An(On, {
              get hexes() {
                return f($a).hexes;
              },
              get offset() {
                return r().positions[f($a).name];
              },
              get firstPreferenceArrows() {
                return N();
              }
            });
          }), _(k, j);
        };
        _t(Ba, (k) => {
          N() !== "None" && k(bn);
        });
      }
      var Tn = at(Ba);
      {
        var vn = (k) => {
          var j = q1(), ea = D(j);
          cn(ea, {
            get labels() {
              return r().labels;
            },
            get overlayLabels() {
              return r().overlayLabels;
            }
          }), H(j), _(k, j);
        };
        _t(Tn, (k) => {
          c() && k(vn);
        });
      }
      H(Zt), Fa(Zt, (k) => F(A, k), () => f(A)), H(tt);
      var Rn = at(tt, 2);
      {
        var Sn = (k) => {
          yn(k, {
            get groups() {
              return a().groups;
            },
            get layout() {
              return r();
            },
            onChange: (j) => {
              F(T, Et(j));
            },
            get onClick() {
              return p();
            }
          });
        };
        _t(Rn, (k) => {
          I() && k(Sn);
        });
      }
      Nt(
        (k, j) => {
          Mt = ta(tt, 1, "hexmap__viz svelte-ko8kvy", null, Mt, {
            "hexmap__viz--vertical": f(g) <= 1
          }), Ct(tt, "aspect-ratio", k), Ft(Zt, "viewBox", j);
        },
        [
          () => f(g) ? f(g).toFixed(3) : null,
          () => [
            st.current,
            K.current,
            dt.current,
            ct.current
          ].join(" ")
        ]
      ), _(v, Xt);
    },
    $$slots: { default: !0 }
  }), H(O), _(t, O), lt({
    get config() {
      return a();
    },
    set config(v = {}) {
      a(v), m();
    },
    get layout() {
      return r();
    },
    set layout(v = {}) {
      r(v), m();
    },
    get allocations() {
      return n();
    },
    set allocations(v = {}) {
      n(v), m();
    },
    get focuses() {
      return o();
    },
    set focuses(v = {}) {
      o(v), m();
    },
    get certainties() {
      return l();
    },
    set certainties(v = {}) {
      l(v), m();
    },
    get labelsToShow() {
      return s();
    },
    set labelsToShow(v = {}) {
      s(v), m();
    },
    get showStateLabels() {
      return c();
    },
    set showStateLabels(v = !1) {
      c(v), m();
    },
    get showElectorateLabels() {
      return y();
    },
    set showElectorateLabels(v = !1) {
      y(v), m();
    },
    get showFocusedElectorateLabels() {
      return i();
    },
    set showFocusedElectorateLabels(v = !1) {
      i(v), m();
    },
    get isStaticLayout() {
      return u();
    },
    set isStaticLayout(v = !1) {
      u(v), m();
    },
    get onClick() {
      return p();
    },
    set onClick(v = ({ code: Z }) => {
    }) {
      p(v), m();
    },
    get onHover() {
      return d();
    },
    set onHover(v = ({ code: Z }) => {
    }) {
      d(v), m();
    },
    get customViewbox() {
      return P();
    },
    set customViewbox(v = null) {
      P(v), m();
    },
    get onViewboxChange() {
      return h();
    },
    set onViewboxChange(v = ({ newViewbox: Z }) => {
    }) {
      h(v), m();
    },
    get isInteractive() {
      return I();
    },
    set isInteractive(v = !1) {
      I(v), m();
    },
    get firstPreferenceArrows() {
      return N();
    },
    set firstPreferenceArrows(v = "None") {
      N(v), m();
    },
    get selectedElectorate() {
      return V();
    },
    set selectedElectorate(v = null) {
      V(v), m();
    }
  });
}
Pt(
  mn,
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
    customViewbox: {},
    onViewboxChange: {},
    isInteractive: {},
    firstPreferenceArrows: {},
    selectedElectorate: {}
  },
  [],
  [],
  !0
);
let sa = ka({});
var e0 = /* @__PURE__ */ X('<div class="style-root svelte-1y6eltw"><!></div>');
const a0 = {
  hash: "svelte-1y6eltw",
  code: ".style-root.svelte-1y6eltw * {box-sizing:border-box;}.style-root.svelte-1y6eltw {height:100%;font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-empty: #f1f1f1;--a-empty-border: black;--c-empty-state-outline: black;--c-state-outline: #949494;--a-null: #f1f1f1;--a-null-border: #fff;--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-CA: var(--c-ptyblack);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--c-filled-border: #fff;}"
};
function Ln(t, e) {
  ot(e, !0), zt(t, a0);
  const [a, r] = nn(), n = () => rn(sa, "$partyColours", a);
  let o = L(e, "children", 7), l = Ut(void 0);
  Da(() => {
    if (!f(l))
      return;
    const i = window.getComputedStyle(f(l));
    Ia(sa, {}), Object.keys(Ma.hashCodes).forEach((p) => {
      J2(sa, Dt(n)[p] = i.getPropertyValue(`--a-${p}`), Dt(n));
    });
  });
  var s = e0(), c = D(s);
  Je(c, () => o() ?? M), H(s), Fa(s, (i) => F(l, i), () => f(l)), _(t, s);
  var y = lt({
    get children() {
      return o();
    },
    set children(i) {
      o(i), m();
    }
  });
  return r(), y;
}
Pt(Ln, { children: {} }, [], [], !0);
var r0 = /* @__PURE__ */ X("<div><!></div>");
function n0(t, e) {
  ot(e, !0);
  let a = L(e, "allocations", 23, () => ({})), r = L(e, "certainties", 23, () => ({})), n = L(e, "showStateLabels", 7, !1), o = L(e, "showElectorateLabels", 7, !1), l = L(e, "layoutName", 7, "COUNTRY"), s = L(e, "selectedElectorate", 7, null), c = L(e, "customViewbox", 7, null), y = L(e, "onClick", 7, () => {
  }), i = L(e, "onHover", 7, () => {
  }), u = L(e, "onApi", 7, () => {
  }), p = Ut(null), d = /* @__PURE__ */ $(() => hn[l()]);
  function P(V, A, g) {
    const T = g.getScreenCTM(), b = g.createSVGPoint();
    b.x = V, b.y = A;
    const R = b.matrixTransform(T);
    return [R.x, R.y].map(Number);
  }
  function h(V) {
    var ct;
    const A = u1[V], g = f(d).positions[A == null ? void 0 : A.group], T = (ct = f(p)) == null ? void 0 : ct.querySelector("svg");
    if (!A || !g || !T)
      throw new Error(`Could not find hexagon with id ${V}`);
    const b = [-0.5, -1], [R, S] = ge(
      [
        g[0] + b[0],
        g[1] + b[1]
      ],
      ""
    ).map(Number), C = Number(A.coordPx[0] + R), st = Number(A.coordPx[1] + S), [K, dt] = P(C, st, T);
    return {
      code: V,
      screenCoord: [K, dt],
      svgCoord: [C, st]
    };
  }
  Ht(() => {
    u() && u()({ getHex: h });
  });
  var I = r0(), N = D(I);
  return Ln(N, {
    children: (V, A) => {
      mn(V, {
        config: Wa,
        get layout() {
          return f(d);
        },
        get allocations() {
          return a();
        },
        get certainties() {
          return r();
        },
        focuses: {},
        get showStateLabels() {
          return n();
        },
        get showElectorateLabels() {
          return o();
        },
        get onClick() {
          return y();
        },
        get onHover() {
          return i();
        },
        get selectedElectorate() {
          return s();
        },
        get customViewbox() {
          return c();
        },
        isStaticLayout: !0,
        isInteractive: !0
      });
    },
    $$slots: { default: !0 }
  }), H(I), Fa(I, (V) => F(p, V), () => f(p)), _(t, I), lt({
    get allocations() {
      return a();
    },
    set allocations(V = {}) {
      a(V), m();
    },
    get certainties() {
      return r();
    },
    set certainties(V = {}) {
      r(V), m();
    },
    get showStateLabels() {
      return n();
    },
    set showStateLabels(V = !1) {
      n(V), m();
    },
    get showElectorateLabels() {
      return o();
    },
    set showElectorateLabels(V = !1) {
      o(V), m();
    },
    get layoutName() {
      return l();
    },
    set layoutName(V = "COUNTRY") {
      l(V), m();
    },
    get selectedElectorate() {
      return s();
    },
    set selectedElectorate(V = null) {
      s(V), m();
    },
    get customViewbox() {
      return c();
    },
    set customViewbox(V = null) {
      c(V), m();
    },
    get onClick() {
      return y();
    },
    set onClick(V = () => {
    }) {
      y(V), m();
    },
    get onHover() {
      return i();
    },
    set onHover(V = () => {
    }) {
      i(V), m();
    },
    get onApi() {
      return u();
    },
    set onApi(V = () => {
    }) {
      u(V), m();
    }
  });
}
customElements.define("abcnews-hexmap", Pt(
  n0,
  {
    allocations: {},
    certainties: {},
    showStateLabels: {},
    showElectorateLabels: {},
    layoutName: {},
    selectedElectorate: {},
    customViewbox: {},
    onClick: {},
    onHover: {},
    onApi: {}
  },
  [],
  [],
  !0
));
export {
  n0 as default
};
