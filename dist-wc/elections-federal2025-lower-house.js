var Gr = Object.defineProperty;
var Xo = (e) => {
  throw TypeError(e);
};
var kr = (e, t, o) => t in e ? Gr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var he = (e, t, o) => kr(e, typeof t != "symbol" ? t + "" : t, o), Zo = (e, t, o) => t.has(e) || Xo("Cannot " + o);
var G = (e, t, o) => (Zo(e, t, "read from private field"), o ? o.call(e) : t.get(e)), Ke = (e, t, o) => t.has(e) ? Xo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), ht = (e, t, o, n) => (Zo(e, t, "write to private field"), n ? n.call(e, o) : t.set(e, o), o);
const Mr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Mr);
const Oo = 1, Ro = 2, Ln = 4, Br = 8, Fr = 16, Wr = 1, $r = 4, Vr = 8, zr = 16, qr = 4, An = 1, Ur = 2, yn = "[", Co = "[!", Eo = "]", nt = {}, Y = Symbol(), Jo = !1, xe = 2, wn = 4, Yt = 8, Qt = 16, Ge = 32, it = 64, Mt = 128, de = 256, Bt = 512, X = 1024, ke = 2048, lt = 4096, De = 8192, Xt = 16384, _n = 32768, _t = 65536, Kr = 1 << 19, bn = 1 << 20, gt = Symbol("$state"), Tn = Symbol("legacy props"), jr = Symbol("");
var So = Array.isArray, Yr = Array.prototype.indexOf, Ho = Array.from, Ft = Object.keys, xt = Object.defineProperty, Ye = Object.getOwnPropertyDescriptor, Qr = Object.getOwnPropertyDescriptors, Xr = Object.prototype, Zr = Array.prototype, On = Object.getPrototypeOf;
function Jr(e) {
  return typeof e == "function";
}
const pe = () => {
};
function Rn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let mt = [], ho = [];
function Cn() {
  var e = mt;
  mt = [], Rn(e);
}
function ea() {
  var e = ho;
  ho = [], Rn(e);
}
function ct(e) {
  mt.length === 0 && queueMicrotask(Cn), mt.push(e);
}
function en() {
  mt.length > 0 && Cn(), ho.length > 0 && ea();
}
function En(e) {
  return e === this.v;
}
function Sn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ta(e, t) {
  return e !== t;
}
function Io(e) {
  return !Sn(e, this.v);
}
function oa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function na() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ra(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function aa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function sa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ia(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function la() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ca() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ua() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function da() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let fa = !1;
function J(e, t) {
  var o = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: En,
    rv: 0,
    wv: 0
  };
  return o;
}
function ye(e) {
  return /* @__PURE__ */ ha(J(e));
}
// @__NO_SIDE_EFFECTS__
function Do(e, t = !1) {
  const o = J(e);
  return t || (o.equals = Io), o;
}
// @__NO_SIDE_EFFECTS__
function ha(e) {
  return D !== null && !ve && D.f & xe && (we === null ? Na([e]) : we.push(e)), e;
}
function M(e, t) {
  return D !== null && !ve && Xn() && D.f & (xe | Qt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (we === null || !we.includes(e)) && da(), po(e, t);
}
function po(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = $n(), Hn(e, ke), H !== null && H.f & X && !(H.f & (Ge | it)) && (Ee === null ? xa([e]) : Ee.push(e))), t;
}
function Hn(e, t) {
  var o = e.reactions;
  if (o !== null)
    for (var n = o.length, r = 0; r < n; r++) {
      var a = o[r], s = a.f;
      s & ke || (Te(a, t), s & (X | de) && (s & xe ? Hn(
        /** @type {Derived} */
        a,
        lt
      ) : eo(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function V(e) {
  var t = xe | ke, o = D !== null && D.f & xe ? (
    /** @type {Derived} */
    D
  ) : null;
  return H === null || o !== null && o.f & de ? t |= de : H.f |= bn, {
    ctx: te,
    deps: null,
    effects: null,
    equals: En,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: o ?? H
  };
}
// @__NO_SIDE_EFFECTS__
function pa(e) {
  const t = /* @__PURE__ */ V(e);
  return t.equals = Io, t;
}
function In(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var o = 0; o < t.length; o += 1)
      me(
        /** @type {Effect} */
        t[o]
      );
  }
}
function va(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & xe))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ga(e) {
  var t, o = H;
  be(va(e));
  try {
    In(e), t = zn(e);
  } finally {
    be(o);
  }
  return t;
}
function Dn(e) {
  var t = ga(e), o = (We || e.f & de) && e.deps !== null ? lt : X;
  Te(e, o), e.equals(t) || (e.v = t, e.wv = $n());
}
function Zt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let E = !1;
function ge(e) {
  E = e;
}
let S;
function ae(e) {
  if (e === null)
    throw Zt(), nt;
  return S = e;
}
function Qe() {
  return ae(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Re(S)
  );
}
function k(e) {
  if (E) {
    if (/* @__PURE__ */ Re(S) !== null)
      throw Zt(), nt;
    S = e;
  }
}
function Wt(e = 1) {
  if (E) {
    for (var t = e, o = S; t--; )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Re(o);
    S = o;
  }
}
function vo() {
  for (var e = 0, t = S; ; ) {
    if (t.nodeType === 8) {
      var o = (
        /** @type {Comment} */
        t.data
      );
      if (o === Eo) {
        if (e === 0) return t;
        e -= 1;
      } else (o === yn || o === Co) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Re(t)
    );
    t.remove(), t = n;
  }
}
function ee(e, t = null, o) {
  if (typeof e != "object" || e === null || gt in e)
    return e;
  const n = On(e);
  if (n !== Xr && n !== Zr)
    return e;
  var r = /* @__PURE__ */ new Map(), a = So(e), s = J(0);
  a && r.set("length", J(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && la();
        var d = r.get(l);
        return d === void 0 ? (d = J(f.value), r.set(l, d)) : M(d, ee(f.value, i)), !0;
      },
      deleteProperty(u, l) {
        var f = r.get(l);
        if (f === void 0)
          l in u && r.set(l, J(Y));
        else {
          if (a && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h < d.v && M(d, h);
          }
          M(f, Y), tn(s);
        }
        return !0;
      },
      get(u, l, f) {
        var c;
        if (l === gt)
          return e;
        var d = r.get(l), h = l in u;
        if (d === void 0 && (!h || (c = Ye(u, l)) != null && c.writable) && (d = J(ee(h ? u[l] : Y, i)), r.set(l, d)), d !== void 0) {
          var g = N(d);
          return g === Y ? void 0 : g;
        }
        return Reflect.get(u, l, f);
      },
      getOwnPropertyDescriptor(u, l) {
        var f = Reflect.getOwnPropertyDescriptor(u, l);
        if (f && "value" in f) {
          var d = r.get(l);
          d && (f.value = N(d));
        } else if (f === void 0) {
          var h = r.get(l), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== Y)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return f;
      },
      has(u, l) {
        var g;
        if (l === gt)
          return !0;
        var f = r.get(l), d = f !== void 0 && f.v !== Y || Reflect.has(u, l);
        if (f !== void 0 || H !== null && (!d || (g = Ye(u, l)) != null && g.writable)) {
          f === void 0 && (f = J(d ? ee(u[l], i) : Y), r.set(l, f));
          var h = N(f);
          if (h === Y)
            return !1;
        }
        return d;
      },
      set(u, l, f, d) {
        var m;
        var h = r.get(l), g = l in u;
        if (a && l === "length")
          for (var c = f; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var p = r.get(c + "");
            p !== void 0 ? M(p, Y) : c in u && (p = J(Y), r.set(c + "", p));
          }
        h === void 0 ? (!g || (m = Ye(u, l)) != null && m.writable) && (h = J(void 0), M(h, ee(f, i)), r.set(l, h)) : (g = h.v !== Y, M(h, ee(f, i)));
        var P = Reflect.getOwnPropertyDescriptor(u, l);
        if (P != null && P.set && P.set.call(d, f), !g) {
          if (a && typeof l == "string") {
            var L = (
              /** @type {Source<number>} */
              r.get("length")
            ), _ = Number(l);
            Number.isInteger(_) && _ >= L.v && M(L, _ + 1);
          }
          tn(s);
        }
        return !0;
      },
      ownKeys(u) {
        N(s);
        var l = Reflect.ownKeys(u).filter((h) => {
          var g = r.get(h);
          return g === void 0 || g.v !== Y;
        });
        for (var [f, d] of r)
          d.v !== Y && !(f in u) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        ca();
      }
    }
  );
}
function tn(e, t = 1) {
  M(e, e.v + t);
}
var on, Gn, kn, Mn, Bn;
function go() {
  if (on === void 0) {
    on = window, Gn = document, kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Mn = Ye(t, "firstChild").get, Bn = Ye(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ve(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function j(e) {
  return Mn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return Bn.call(e);
}
function $(e, t) {
  if (!E)
    return /* @__PURE__ */ j(e);
  var o = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ j(S)
  );
  if (o === null)
    o = S.appendChild(Ve());
  else if (t && o.nodeType !== 3) {
    var n = Ve();
    return o == null || o.before(n), ae(n), n;
  }
  return ae(o), o;
}
function $e(e, t) {
  if (!E) {
    var o = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ j(
        /** @type {Node} */
        e
      )
    );
    return o instanceof Comment && o.data === "" ? /* @__PURE__ */ Re(o) : o;
  }
  return S;
}
function K(e, t = 1, o = !1) {
  let n = E ? S : e;
  for (var r; t--; )
    r = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Re(n);
  if (!E)
    return n;
  var a = n == null ? void 0 : n.nodeType;
  if (o && a !== 3) {
    var s = Ve();
    return n === null ? r == null || r.after(s) : n.before(s), ae(s), s;
  }
  return ae(n), /** @type {TemplateNode} */
  n;
}
function Fn(e) {
  e.textContent = "";
}
let Ht = !1, $t = !1, Vt = null, It = !1, Go = !1;
function nn(e) {
  Go = e;
}
let Nt = [];
let D = null, ve = !1;
function _e(e) {
  D = e;
}
let H = null;
function be(e) {
  H = e;
}
let we = null;
function Na(e) {
  we = e;
}
let Q = null, re = 0, Ee = null;
function xa(e) {
  Ee = e;
}
let Wn = 1, zt = 0, We = !1;
function $n() {
  return ++Wn;
}
function bt(e) {
  var d;
  var t = e.f;
  if (t & ke)
    return !0;
  if (t & lt) {
    var o = e.deps, n = (t & de) !== 0;
    if (o !== null) {
      var r, a, s = (t & Bt) !== 0, i = n && H !== null && !We, u = o.length;
      if (s || i) {
        var l = (
          /** @type {Derived} */
          e
        ), f = l.parent;
        for (r = 0; r < u; r++)
          a = o[r], (s || !((d = a == null ? void 0 : a.reactions) != null && d.includes(l))) && (a.reactions ?? (a.reactions = [])).push(l);
        s && (l.f ^= Bt), i && f !== null && !(f.f & de) && (l.f ^= de);
      }
      for (r = 0; r < u; r++)
        if (a = o[r], bt(
          /** @type {Derived} */
          a
        ) && Dn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || H !== null && !We) && Te(e, X);
  }
  return !1;
}
function ma(e, t) {
  for (var o = t; o !== null; ) {
    if (o.f & Mt)
      try {
        o.fn(e);
        return;
      } catch {
        o.f ^= Mt;
      }
    o = o.parent;
  }
  throw Ht = !1, e;
}
function Pa(e) {
  return (e.f & Xt) === 0 && (e.parent === null || (e.parent.f & Mt) === 0);
}
function Jt(e, t, o, n) {
  if (Ht) {
    if (o === null && (Ht = !1), Pa(t))
      throw e;
    return;
  }
  o !== null && (Ht = !0);
  {
    ma(e, t);
    return;
  }
}
function Vn(e, t, o = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.f & xe ? Vn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (o ? Te(a, ke) : a.f & X && Te(a, lt), eo(
        /** @type {Effect} */
        a
      ));
    }
}
function zn(e) {
  var g;
  var t = Q, o = re, n = Ee, r = D, a = We, s = we, i = te, u = ve, l = e.f;
  Q = /** @type {null | Value[]} */
  null, re = 0, Ee = null, We = (l & de) !== 0 && (ve || !It || D === null), D = l & (Ge | it) ? null : e, we = null, rn(e.ctx), ve = !1, zt++;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), d = e.deps;
    if (Q !== null) {
      var h;
      if (qt(e, re), d !== null && re > 0)
        for (d.length = re + Q.length, h = 0; h < Q.length; h++)
          d[re + h] = Q[h];
      else
        e.deps = d = Q;
      if (!We)
        for (h = re; h < d.length; h++)
          ((g = d[h]).reactions ?? (g.reactions = [])).push(e);
    } else d !== null && re < d.length && (qt(e, re), d.length = re);
    if (Xn() && Ee !== null && !ve && d !== null && !(e.f & (xe | lt | ke)))
      for (h = 0; h < /** @type {Source[]} */
      Ee.length; h++)
        Vn(
          Ee[h],
          /** @type {Effect} */
          e
        );
    return r !== null && zt++, f;
  } finally {
    Q = t, re = o, Ee = n, D = r, We = a, we = s, rn(i), ve = u;
  }
}
function La(e, t) {
  let o = t.reactions;
  if (o !== null) {
    var n = Yr.call(o, e);
    if (n !== -1) {
      var r = o.length - 1;
      r === 0 ? o = t.reactions = null : (o[n] = o[r], o.pop());
    }
  }
  o === null && t.f & xe && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Q.includes(t)) && (Te(t, lt), t.f & (de | Bt) || (t.f ^= Bt), In(
    /** @type {Derived} **/
    t
  ), qt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function qt(e, t) {
  var o = e.deps;
  if (o !== null)
    for (var n = t; n < o.length; n++)
      La(e, o[n]);
}
function ko(e) {
  var t = e.f;
  if (!(t & Xt)) {
    Te(e, X);
    var o = H, n = te, r = It;
    H = e, It = !0;
    try {
      t & Qt ? Ea(e) : Kn(e), Un(e);
      var a = zn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Wn;
      var s = e.deps, i;
      Jo && fa && e.f & ke;
    } catch (u) {
      Jt(u, e, o, n || e.ctx);
    } finally {
      It = r, H = o;
    }
  }
}
function Aa() {
  try {
    aa();
  } catch (e) {
    if (Vt !== null)
      Jt(e, Vt, null);
    else
      throw e;
  }
}
function qn() {
  try {
    for (var e = 0; Nt.length > 0; ) {
      e++ > 1e3 && Aa();
      var t = Nt, o = t.length;
      Nt = [];
      for (var n = 0; n < o; n++) {
        var r = t[n];
        r.f & X || (r.f ^= X);
        var a = wa(r);
        ya(a);
      }
    }
  } finally {
    $t = !1, Vt = null;
  }
}
function ya(e) {
  var t = e.length;
  if (t !== 0)
    for (var o = 0; o < t; o++) {
      var n = e[o];
      if (!(n.f & (Xt | De)))
        try {
          bt(n) && (ko(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? jn(n) : n.fn = null));
        } catch (r) {
          Jt(r, n, null, n.ctx);
        }
    }
}
function eo(e) {
  $t || ($t = !0, queueMicrotask(qn));
  for (var t = Vt = e; t.parent !== null; ) {
    t = t.parent;
    var o = t.f;
    if (o & (it | Ge)) {
      if (!(o & X)) return;
      t.f ^= X;
    }
  }
  Nt.push(t);
}
function wa(e) {
  var t = [], o = e.first;
  e: for (; o !== null; ) {
    var n = o.f, r = (n & Ge) !== 0, a = r && (n & X) !== 0, s = o.next;
    if (!a && !(n & De)) {
      if (n & wn)
        t.push(o);
      else if (r)
        o.f ^= X;
      else {
        var i = D;
        try {
          D = o, bt(o) && ko(o);
        } catch (f) {
          Jt(f, o, null, o.ctx);
        } finally {
          D = i;
        }
      }
      var u = o.first;
      if (u !== null) {
        o = u;
        continue;
      }
    }
    if (s === null) {
      let f = o.parent;
      for (; f !== null; ) {
        if (e === f)
          break e;
        var l = f.next;
        if (l !== null) {
          o = l;
          continue e;
        }
        f = f.parent;
      }
    }
    o = s;
  }
  return t;
}
function A(e) {
  var t;
  for (en(); Nt.length > 0; )
    $t = !0, qn(), en();
  return (
    /** @type {T} */
    t
  );
}
function N(e) {
  var t = e.f, o = (t & xe) !== 0;
  if (D !== null && !ve) {
    we !== null && we.includes(e) && ua();
    var n = D.deps;
    e.rv < zt && (e.rv = zt, Q === null && n !== null && n[re] === e ? re++ : Q === null ? Q = [e] : (!We || !Q.includes(e)) && Q.push(e));
  } else if (o && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), a = r.parent;
    a !== null && !(a.f & de) && (r.f ^= de);
  }
  return o && (r = /** @type {Derived} */
  e, bt(r) && Dn(r)), e.v;
}
function Pt(e) {
  var t = ve;
  try {
    return ve = !0, e();
  } finally {
    ve = t;
  }
}
const _a = -7169;
function Te(e, t) {
  e.f = e.f & _a | t;
}
function ba(e) {
  H === null && D === null && ra(), D !== null && D.f & de && H === null && na(), Go && oa();
}
function Ta(e, t) {
  var o = t.last;
  o === null ? t.last = t.first = e : (o.next = e, e.prev = o, t.last = e);
}
function Xe(e, t, o, n = !0) {
  var r = (e & it) !== 0, a = H, s = {
    ctx: te,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ke,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (o)
    try {
      ko(s), s.f |= _n;
    } catch (l) {
      throw me(s), l;
    }
  else t !== null && eo(s);
  var i = o && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (bn | Mt)) === 0;
  if (!i && !r && n && (a !== null && Ta(s, a), D !== null && D.f & xe)) {
    var u = (
      /** @type {Derived} */
      D
    );
    (u.effects ?? (u.effects = [])).push(s);
  }
  return s;
}
function Oa(e) {
  const t = Xe(Yt, null, !1);
  return Te(t, X), t.teardown = e, t;
}
function Oe(e) {
  ba();
  var t = H !== null && (H.f & Ge) !== 0 && te !== null && !te.m;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      te
    );
    (o.e ?? (o.e = [])).push({
      fn: e,
      effect: H,
      reaction: D
    });
  } else {
    var n = to(e);
    return n;
  }
}
function Ra(e) {
  const t = Xe(it, e, !0);
  return () => {
    me(t);
  };
}
function Ca(e) {
  const t = Xe(it, e, !0);
  return (o = {}) => new Promise((n) => {
    o.outro ? Lt(t, () => {
      me(t), n(void 0);
    }) : (me(t), n(void 0));
  });
}
function to(e) {
  return Xe(wn, e, !1);
}
function Mo(e) {
  return Xe(Yt, e, !0);
}
function fe(e, t = [], o = V) {
  const n = t.map(o);
  return ut(() => e(...n.map(N)));
}
function ut(e, t = 0) {
  return Xe(Yt | Qt | t, e, !0);
}
function ze(e, t = !0) {
  return Xe(Yt | Ge, e, !0, t);
}
function Un(e) {
  var t = e.teardown;
  if (t !== null) {
    const o = Go, n = D;
    nn(!0), _e(null);
    try {
      t.call(null);
    } finally {
      nn(o), _e(n);
    }
  }
}
function Kn(e, t = !1) {
  var o = e.first;
  for (e.first = e.last = null; o !== null; ) {
    var n = o.next;
    me(o, t), o = n;
  }
}
function Ea(e) {
  for (var t = e.first; t !== null; ) {
    var o = t.next;
    t.f & Ge || me(t), t = o;
  }
}
function me(e, t = !0) {
  var o = !1;
  if ((t || e.f & Kr) && e.nodes_start !== null) {
    for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
      var a = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Re(n)
      );
      n.remove(), n = a;
    }
    o = !0;
  }
  Kn(e, t && !o), qt(e, 0), Te(e, Xt);
  var s = e.transitions;
  if (s !== null)
    for (const u of s)
      u.stop();
  Un(e);
  var i = e.parent;
  i !== null && i.first !== null && jn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function jn(e) {
  var t = e.parent, o = e.prev, n = e.next;
  o !== null && (o.next = n), n !== null && (n.prev = o), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = o));
}
function Lt(e, t) {
  var o = [];
  Bo(e, o, !0), Yn(o, () => {
    me(e), t && t();
  });
}
function Yn(e, t) {
  var o = e.length;
  if (o > 0) {
    var n = () => --o || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function Bo(e, t, o) {
  if (!(e.f & De)) {
    if (e.f ^= De, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || o) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & _t) !== 0 || (n.f & Ge) !== 0;
      Bo(n, t, a ? o : !1), n = r;
    }
  }
}
function Ut(e) {
  Qn(e, !0);
}
function Qn(e, t) {
  if (e.f & De) {
    e.f ^= De, e.f & X || (e.f ^= X), bt(e) && (Te(e, ke), eo(e));
    for (var o = e.first; o !== null; ) {
      var n = o.next, r = (o.f & _t) !== 0 || (o.f & Ge) !== 0;
      Qn(o, r ? t : !1), o = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Sa(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let te = null;
function rn(e) {
  te = e;
}
function oe(e, t = !1, o) {
  te = {
    p: te,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ne(e) {
  const t = te;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var o = H, n = D;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var a = s[r];
          be(a.effect), _e(a.reaction), to(a.fn);
        }
      } finally {
        be(o), _e(n);
      }
    }
    te = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Xn() {
  return !0;
}
function Ha(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ia = [
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
function Da(e) {
  return Ia.includes(e);
}
const Ga = {
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
function ka(e) {
  return e = e.toLowerCase(), Ga[e] ?? e;
}
const Ma = ["touchstart", "touchmove"];
function Ba(e) {
  return Ma.includes(e);
}
function Fa(e, t) {
  if (t) {
    const o = document.body;
    e.autofocus = !0, ct(() => {
      document.activeElement === o && e.focus();
    });
  }
}
function Zn(e) {
  var t = D, o = H;
  _e(null), be(null);
  try {
    return e();
  } finally {
    _e(t), be(o);
  }
}
const Jn = /* @__PURE__ */ new Set(), No = /* @__PURE__ */ new Set();
function Wa(e, t, o, n = {}) {
  function r(a) {
    if (n.capture || vt.call(t, a), !a.cancelBubble)
      return Zn(() => o == null ? void 0 : o.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ct(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function Fo(e) {
  for (var t = 0; t < e.length; t++)
    Jn.add(e[t]);
  for (var o of No)
    o(e);
}
function vt(e) {
  var _;
  var t = this, o = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var u = r.indexOf(i);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = r.indexOf(t);
    if (l === -1)
      return;
    u <= l && (s = u);
  }
  if (a = /** @type {Element} */
  r[s] || e.target, a !== t) {
    xt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || o;
      }
    });
    var f = D, d = H;
    _e(null), be(null);
    try {
      for (var h, g = []; a !== null; ) {
        var c = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + n];
          if (p !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (So(p)) {
              var [P, ...L] = p;
              P.apply(a, [e, ...L]);
            } else
              p.call(a, e);
        } catch (m) {
          h ? g.push(m) : h = m;
        }
        if (e.cancelBubble || c === t || c === null)
          break;
        a = c;
      }
      if (h) {
        for (let m of g)
          queueMicrotask(() => {
            throw m;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, _e(f), be(d);
    }
  }
}
function Wo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function se(e, t) {
  var o = (
    /** @type {Effect} */
    H
  );
  o.nodes_start === null && (o.nodes_start = e, o.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  var o = (t & An) !== 0, n = (t & Ur) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (E)
      return se(S, null), S;
    r === void 0 && (r = Wo(a ? e : "<!>" + e), o || (r = /** @type {Node} */
    /* @__PURE__ */ j(r)));
    var s = (
      /** @type {TemplateNode} */
      n || kn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (o) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ j(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      se(i, u);
    } else
      se(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Me(e, t, o = "svg") {
  var n = !e.startsWith("<!>"), r = (t & An) !== 0, a = `<${o}>${n ? e : "<!>" + e}</${o}>`, s;
  return () => {
    if (E)
      return se(S, null), S;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        Wo(a)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ j(i)
      );
      if (r)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ j(u); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ j(u)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ j(u);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ j(l)
      ), d = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      se(f, d);
    } else
      se(l, l);
    return l;
  };
}
function an(e = "") {
  if (!E) {
    var t = Ve(e + "");
    return se(t, t), t;
  }
  var o = S;
  return o.nodeType !== 3 && (o.before(o = Ve()), ae(o)), se(o, o), o;
}
function rt() {
  if (E)
    return se(S, null), S;
  var e = document.createDocumentFragment(), t = document.createComment(""), o = Ve();
  return e.append(t, o), se(t, o), e;
}
function I(e, t) {
  if (E) {
    H.nodes_end = S, Qe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let xo = !0;
function At(e, t) {
  var o = t == null ? "" : typeof t == "object" ? t + "" : t;
  o !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = o, e.nodeValue = o + "");
}
function er(e, t) {
  return tr(e, t);
}
function $a(e, t) {
  go(), t.intro = t.intro ?? !1;
  const o = t.target, n = E, r = S;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ j(o)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== yn); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Re(a);
    if (!a)
      throw nt;
    ge(!0), ae(
      /** @type {Comment} */
      a
    ), Qe();
    const s = tr(e, { ...t, anchor: a });
    if (S === null || S.nodeType !== 8 || /** @type {Comment} */
    S.data !== Eo)
      throw Zt(), nt;
    return ge(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === nt)
      return t.recover === !1 && sa(), go(), Fn(o), ge(!1), er(e, t);
    throw s;
  } finally {
    ge(n), ae(r);
  }
}
const et = /* @__PURE__ */ new Map();
function tr(e, { target: t, anchor: o, props: n = {}, events: r, context: a, intro: s = !0 }) {
  go();
  var i = /* @__PURE__ */ new Set(), u = (d) => {
    for (var h = 0; h < d.length; h++) {
      var g = d[h];
      if (!i.has(g)) {
        i.add(g);
        var c = Ba(g);
        t.addEventListener(g, vt, { passive: c });
        var p = et.get(g);
        p === void 0 ? (document.addEventListener(g, vt, { passive: c }), et.set(g, 1)) : et.set(g, p + 1);
      }
    }
  };
  u(Ho(Jn)), No.add(u);
  var l = void 0, f = Ca(() => {
    var d = o ?? t.appendChild(Ve());
    return ze(() => {
      if (a) {
        oe({});
        var h = (
          /** @type {ComponentContext} */
          te
        );
        h.c = a;
      }
      r && (n.$$events = r), E && se(
        /** @type {TemplateNode} */
        d,
        null
      ), xo = s, l = e(d, n) || {}, xo = !0, E && (H.nodes_end = S), a && ne();
    }), () => {
      var c;
      for (var h of i) {
        t.removeEventListener(h, vt);
        var g = (
          /** @type {number} */
          et.get(h)
        );
        --g === 0 ? (document.removeEventListener(h, vt), et.delete(h)) : et.set(h, g);
      }
      No.delete(u), d !== o && ((c = d.parentNode) == null || c.removeChild(d));
    };
  });
  return mo.set(l, f), l;
}
let mo = /* @__PURE__ */ new WeakMap();
function Va(e, t) {
  const o = mo.get(e);
  return o ? (mo.delete(e), o(t)) : Promise.resolve();
}
function Ie(e, t, o = !1) {
  E && Qe();
  var n = e, r = null, a = null, s = Y, i = o ? _t : 0, u = !1;
  const l = (d, h = !0) => {
    u = !0, f(h, d);
  }, f = (d, h) => {
    if (s === (s = d)) return;
    let g = !1;
    if (E) {
      const c = (
        /** @type {Comment} */
        n.data === Co
      );
      !!s === c && (n = vo(), ae(n), ge(!1), g = !0);
    }
    s ? (r ? Ut(r) : h && (r = ze(() => h(n))), a && Lt(a, () => {
      a = null;
    })) : (a ? Ut(a) : h && (a = ze(() => h(n))), r && Lt(r, () => {
      r = null;
    })), g && ge(!0);
  };
  ut(() => {
    u = !1, t(l), u || f(null, null);
  }, i), E && (n = S);
}
function za(e, t, o) {
  E && Qe();
  var n = e, r = Y, a, s = ta;
  ut(() => {
    s(r, r = t()) && (a && Lt(a), a = ze(() => o(n)));
  }), E && (n = S);
}
function qe(e, t) {
  return t;
}
function qa(e, t, o, n) {
  for (var r = [], a = t.length, s = 0; s < a; s++)
    Bo(t[s].e, r, !0);
  var i = a > 0 && r.length === 0 && o !== null;
  if (i) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      o.parentNode
    );
    Fn(u), u.append(
      /** @type {Element} */
      o
    ), n.clear(), Fe(e, t[0].prev, t[a - 1].next);
  }
  Yn(r, () => {
    for (var l = 0; l < a; l++) {
      var f = t[l];
      i || (n.delete(f.k), Fe(e, f.prev, f.next)), me(f.e, !i);
    }
  });
}
function Ue(e, t, o, n, r, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, u = (t & Ln) !== 0;
  if (u) {
    var l = (
      /** @type {Element} */
      e
    );
    s = E ? ae(
      /** @type {Comment | Text} */
      /* @__PURE__ */ j(l)
    ) : l.appendChild(Ve());
  }
  E && Qe();
  var f = null, d = !1, h = /* @__PURE__ */ pa(() => {
    var g = o();
    return So(g) ? g : g == null ? [] : Ho(g);
  });
  ut(() => {
    var g = N(h), c = g.length;
    if (d && c === 0)
      return;
    d = c === 0;
    let p = !1;
    if (E) {
      var P = (
        /** @type {Comment} */
        s.data === Co
      );
      P !== (c === 0) && (s = vo(), ae(s), ge(!1), p = !0);
    }
    if (E) {
      for (var L = null, _, m = 0; m < c; m++) {
        if (S.nodeType === 8 && /** @type {Comment} */
        S.data === Eo) {
          s = /** @type {Comment} */
          S, p = !0, ge(!1);
          break;
        }
        var x = g[m], v = n(x, m);
        _ = or(
          S,
          i,
          L,
          null,
          x,
          v,
          m,
          r,
          t,
          o
        ), i.items.set(v, _), L = _;
      }
      c > 0 && ae(vo());
    }
    E || Ua(g, i, s, r, t, n, o), a !== null && (c === 0 ? f ? Ut(f) : f = ze(() => a(s)) : f !== null && Lt(f, () => {
      f = null;
    })), p && ge(!0), N(h);
  }), E && (s = S);
}
function Ua(e, t, o, n, r, a, s) {
  var z, le, Z, q;
  var i = (r & Br) !== 0, u = (r & (Oo | Ro)) !== 0, l = e.length, f = t.items, d = t.first, h = d, g, c = null, p, P = [], L = [], _, m, x, v;
  if (i)
    for (v = 0; v < l; v += 1)
      _ = e[v], m = a(_, v), x = f.get(m), x !== void 0 && ((z = x.a) == null || z.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(x));
  for (v = 0; v < l; v += 1) {
    if (_ = e[v], m = a(_, v), x = f.get(m), x === void 0) {
      var y = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : o;
      c = or(
        y,
        t,
        c,
        c === null ? t.first : c.next,
        _,
        m,
        v,
        n,
        r,
        s
      ), f.set(m, c), P = [], L = [], h = c.next;
      continue;
    }
    if (u && Ka(x, _, v, r), x.e.f & De && (Ut(x.e), i && ((le = x.a) == null || le.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(x))), x !== h) {
      if (g !== void 0 && g.has(x)) {
        if (P.length < L.length) {
          var b = L[0], R;
          c = b.prev;
          var C = P[0], B = P[P.length - 1];
          for (R = 0; R < P.length; R += 1)
            sn(P[R], b, o);
          for (R = 0; R < L.length; R += 1)
            g.delete(L[R]);
          Fe(t, C.prev, B.next), Fe(t, c, C), Fe(t, B, b), h = b, c = B, v -= 1, P = [], L = [];
        } else
          g.delete(x), sn(x, h, o), Fe(t, x.prev, x.next), Fe(t, x, c === null ? t.first : c.next), Fe(t, c, x), c = x;
        continue;
      }
      for (P = [], L = []; h !== null && h.k !== m; )
        h.e.f & De || (g ?? (g = /* @__PURE__ */ new Set())).add(h), L.push(h), h = h.next;
      if (h === null)
        continue;
      x = h;
    }
    P.push(x), c = x, h = x.next;
  }
  if (h !== null || g !== void 0) {
    for (var F = g === void 0 ? [] : Ho(g); h !== null; )
      h.e.f & De || F.push(h), h = h.next;
    var O = F.length;
    if (O > 0) {
      var W = r & Ln && l === 0 ? o : null;
      if (i) {
        for (v = 0; v < O; v += 1)
          (Z = F[v].a) == null || Z.measure();
        for (v = 0; v < O; v += 1)
          (q = F[v].a) == null || q.fix();
      }
      qa(t, F, W, f);
    }
  }
  i && ct(() => {
    var Le;
    if (p !== void 0)
      for (x of p)
        (Le = x.a) == null || Le.apply();
  }), H.first = t.first && t.first.e, H.last = c && c.e;
}
function Ka(e, t, o, n) {
  n & Oo && po(e.v, t), n & Ro ? po(
    /** @type {Value<number>} */
    e.i,
    o
  ) : e.i = o;
}
function or(e, t, o, n, r, a, s, i, u, l) {
  var f = (u & Oo) !== 0, d = (u & Fr) === 0, h = f ? d ? /* @__PURE__ */ Do(r) : J(r) : r, g = u & Ro ? J(s) : s, c = {
    i: g,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: o,
    next: n
  };
  try {
    return c.e = ze(() => i(e, h, g, l), E), c.e.prev = o && o.e, c.e.next = n && n.e, o === null ? t.first = c : (o.next = c, o.e.next = c.e), n !== null && (n.prev = c, n.e.prev = c.e), c;
  } finally {
  }
}
function sn(e, t, o) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : o, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : o, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Re(a)
    );
    r.before(a), a = s;
  }
}
function Fe(e, t, o) {
  t === null ? e.first = o : (t.next = o, t.e.next = o && o.e), o !== null && (o.prev = t, o.e.prev = t && t.e);
}
function lo(e, t, o, n, r) {
  var a = e, s = "", i;
  ut(() => {
    if (s === (s = t() ?? "")) {
      E && Qe();
      return;
    }
    i !== void 0 && (me(i), i = void 0), s !== "" && (i = ze(() => {
      if (E) {
        S.data;
        for (var u = Qe(), l = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          l = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Re(u);
        if (u === null)
          throw Zt(), nt;
        se(S, l), a = ae(u);
        return;
      }
      var f = s + "";
      f = `<svg>${f}</svg>`;
      var d = Wo(f);
      for (d = /** @type {Element} */
      /* @__PURE__ */ j(d), se(
        /** @type {TemplateNode} */
        /* @__PURE__ */ j(d),
        /** @type {TemplateNode} */
        d.lastChild
      ); /* @__PURE__ */ j(d); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ j(d)
        );
    }));
  });
}
function nr(e, t, ...o) {
  var n = e, r = pe, a;
  ut(() => {
    r !== (r = t()) && (a && (me(a), a = null), a = ze(() => (
      /** @type {SnippetFn} */
      r(n, ...o)
    )));
  }, _t), E && (n = S);
}
function Be(e, t) {
  ct(() => {
    var o = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      o.host ? (
        /** @type {ShadowRoot} */
        o
      ) : (
        /** @type {Document} */
        o.head ?? /** @type {Document} */
        o.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, n.appendChild(r);
    }
  });
}
function rr(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (o = rr(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function ja() {
  for (var e, t, o = 0, n = "", r = arguments.length; o < r; o++) (e = arguments[o]) && (t = rr(e)) && (n && (n += " "), n += t);
  return n;
}
function Ya(e) {
  return typeof e == "object" ? ja(e) : e ?? "";
}
const ln = [...` 	
\r\f \v\uFEFF`];
function Qa(e, t, o) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), o) {
    for (var r in o)
      if (o[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var a = r.length, s = 0; (s = n.indexOf(r, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || ln.includes(n[s - 1])) && (i === n.length || ln.includes(n[i])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(i + 1) : s = i;
        }
  }
  return n === "" ? null : n;
}
function oo(e, t, o, n, r, a) {
  var s = e.__className;
  if (E || s !== o) {
    var i = Qa(o, n, a);
    (!E || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = o;
  } else if (a) {
    r ?? (r = {});
    for (var u in a) {
      var l = !!a[u];
      l !== !!r[u] && e.classList.toggle(u, l);
    }
  }
  return a;
}
const Dt = Symbol("class");
function Xa(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ne(e, t, o, n) {
  var r = e.__attributes ?? (e.__attributes = {});
  E && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = o) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[jr] = o), o == null ? e.removeAttribute(t) : typeof o != "string" && ar(e).includes(t) ? e[t] = o : e.setAttribute(t, o));
}
function Po(e, t, o, n, r = !1, a = !1, s = !1) {
  let i = E && a;
  i && ge(!1);
  var u = t || {}, l = e.tagName === "OPTION";
  for (var f in t)
    f in o || (o[f] = null);
  o.class ? o.class = Ya(o.class) : (n || o[Dt]) && (o.class = null);
  var d = ar(e), h = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const m in o) {
    let x = o[m];
    if (l && m === "value" && x == null) {
      e.value = e.__value = "", u[m] = x;
      continue;
    }
    var g = u[m];
    if (!(x === g && m !== "class")) {
      u[m] = x;
      var c = m[0] + m[1];
      if (c !== "$$") {
        if (c === "on") {
          const v = {}, y = "$$" + m;
          let b = m.slice(2);
          var p = Da(b);
          if (Ha(b) && (b = b.slice(0, -7), v.capture = !0), !p && g) {
            if (x != null) continue;
            e.removeEventListener(b, u[y], v), u[y] = null;
          }
          if (x != null)
            if (p)
              e[`__${b}`] = x, Fo([b]);
            else {
              let R = function(C) {
                u[m].call(this, C);
              };
              u[y] = Wa(b, e, R, v);
            }
          else p && (e[`__${b}`] = void 0);
        } else if (m === "class") {
          var P = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          oo(e, P, x, n, t == null ? void 0 : t[Dt], o[Dt]);
        } else if (m === "style" && x != null)
          e.style.cssText = x + "";
        else if (m === "autofocus")
          Fa(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!a && (m === "__value" || m === "value" && x != null))
          e.value = e.__value = x;
        else if (m === "selected" && l)
          Xa(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var L = m;
          r || (L = ka(L));
          var _ = L === "defaultValue" || L === "defaultChecked";
          if (x == null && !a && !_)
            if (h[m] = null, L === "value" || L === "checked") {
              let v = (
                /** @type {HTMLInputElement} */
                e
              );
              const y = t === void 0;
              if (L === "value") {
                let b = v.defaultValue;
                v.removeAttribute(L), v.defaultValue = b, v.value = v.__value = y ? b : null;
              } else {
                let b = v.defaultChecked;
                v.removeAttribute(L), v.defaultChecked = b, v.checked = y ? b : !1;
              }
            } else
              e.removeAttribute(m);
          else _ || d.includes(L) && (a || typeof x != "string") ? e[L] = x : typeof x != "function" && Ne(e, L, x);
        }
        m === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && ge(!0), u;
}
var cn = /* @__PURE__ */ new Map();
function ar(e) {
  var t = cn.get(e.nodeName);
  if (t) return t;
  cn.set(e.nodeName, t = []);
  for (var o, n = e, r = Element.prototype; r !== n; ) {
    o = Qr(n);
    for (var a in o)
      o[a].set && t.push(a);
    n = On(n);
  }
  return t;
}
function ue(e, t, o, n) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== o && (r[t] = o, o == null ? e.style.removeProperty(t) : e.style.setProperty(t, o, ""));
}
const Za = () => performance.now(), Ae = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Za(),
  tasks: /* @__PURE__ */ new Set()
};
function sr() {
  const e = Ae.now();
  Ae.tasks.forEach((t) => {
    t.c(e) || (Ae.tasks.delete(t), t.f());
  }), Ae.tasks.size !== 0 && Ae.tick(sr);
}
function ir(e) {
  let t;
  return Ae.tasks.size === 0 && Ae.tick(sr), {
    promise: new Promise((o) => {
      Ae.tasks.add(t = { c: e, f: o });
    }),
    abort() {
      Ae.tasks.delete(t);
    }
  };
}
function Ct(e, t) {
  Zn(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Ja(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (o) => o[0].toUpperCase() + o.slice(1)
  ).join("");
}
function un(e) {
  const t = {}, o = e.split(";");
  for (const n of o) {
    const [r, a] = n.split(":");
    if (!r || a === void 0) break;
    const s = Ja(r.trim());
    t[s] = a.trim();
  }
  return t;
}
const es = (e) => e;
function $o(e, t, o, n) {
  var r = (e & qr) !== 0, a = "both", s, i = t.inert, u = t.style.overflow, l, f;
  function d() {
    var P = D, L = H;
    _e(null), be(null);
    try {
      return s ?? (s = o()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      _e(P), be(L);
    }
  }
  var h = {
    is_global: r,
    in() {
      t.inert = i, Ct(t, "introstart"), l = Lo(t, d(), f, 1, () => {
        Ct(t, "introend"), l == null || l.abort(), l = s = void 0, t.style.overflow = u;
      });
    },
    out(P) {
      t.inert = !0, Ct(t, "outrostart"), f = Lo(t, d(), l, 0, () => {
        Ct(t, "outroend"), P == null || P();
      });
    },
    stop: () => {
      l == null || l.abort(), f == null || f.abort();
    }
  }, g = (
    /** @type {Effect} */
    H
  );
  if ((g.transitions ?? (g.transitions = [])).push(h), xo) {
    var c = r;
    if (!c) {
      for (var p = (
        /** @type {Effect | null} */
        g.parent
      ); p && p.f & _t; )
        for (; (p = p.parent) && !(p.f & Qt); )
          ;
      c = !p || (p.f & _n) !== 0;
    }
    c && to(() => {
      Pt(() => h.in());
    });
  }
}
function Lo(e, t, o, n, r) {
  var a = n === 1;
  if (Jr(t)) {
    var s, i = !1;
    return ct(() => {
      if (!i) {
        var P = t({ direction: a ? "in" : "out" });
        s = Lo(e, P, o, n, r);
      }
    }), {
      abort: () => {
        i = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (o == null || o.deactivate(), !(t != null && t.duration))
    return r(), {
      abort: pe,
      deactivate: pe,
      reset: pe,
      t: () => n
    };
  const { delay: u = 0, css: l, tick: f, easing: d = es } = t;
  var h = [];
  if (a && o === void 0 && (f && f(0, 1), l)) {
    var g = un(l(0, 1));
    h.push(g, g);
  }
  var c = () => 1 - n, p = e.animate(h, { duration: u });
  return p.onfinish = () => {
    var P = (o == null ? void 0 : o.t()) ?? 1 - n;
    o == null || o.abort();
    var L = n - P, _ = (
      /** @type {number} */
      t.duration * Math.abs(L)
    ), m = [];
    if (_ > 0) {
      var x = !1;
      if (l)
        for (var v = Math.ceil(_ / 16.666666666666668), y = 0; y <= v; y += 1) {
          var b = P + L * d(y / v), R = un(l(b, 1 - b));
          m.push(R), x || (x = R.overflow === "hidden");
        }
      x && (e.style.overflow = "hidden"), c = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return P + L * d(C / _);
      }, f && ir(() => {
        if (p.playState !== "running") return !1;
        var C = c();
        return f(C, 1 - C), !0;
      });
    }
    p = e.animate(m, { duration: _, fill: "forwards" }), p.onfinish = () => {
      c = () => n, f == null || f(n, 1 - n), r();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = pe);
    },
    deactivate: () => {
      r = pe;
    },
    reset: () => {
      n === 0 && (f == null || f(1, 0));
    },
    t: () => c()
  };
}
function dn(e, t) {
  return e === t || (e == null ? void 0 : e[gt]) === t;
}
function no(e = {}, t, o, n) {
  return to(() => {
    var r, a;
    return Mo(() => {
      r = a, a = [], Pt(() => {
        e !== o(...a) && (t(e, ...a), r && dn(o(...r), e) && t(null, ...r));
      });
    }), () => {
      ct(() => {
        a && dn(o(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function st(e) {
  te === null && Sa(), Oe(() => {
    const t = Pt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const tt = [];
function lr(e, t = pe) {
  let o = null;
  const n = /* @__PURE__ */ new Set();
  function r(i) {
    if (Sn(e, i) && (e = i, o)) {
      const u = !tt.length;
      for (const l of n)
        l[1](), tt.push(l, e);
      if (u) {
        for (let l = 0; l < tt.length; l += 2)
          tt[l][0](tt[l + 1]);
        tt.length = 0;
      }
    }
  }
  function a(i) {
    r(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, u = pe) {
    const l = [i, u];
    return n.add(l), n.size === 1 && (o = t(r, a) || pe), i(
      /** @type {T} */
      e
    ), () => {
      n.delete(l), n.size === 0 && o && (o(), o = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
let Et = !1, ts = Symbol();
function yt(e, t) {
  return e.set(t), t;
}
function Vo() {
  const e = {};
  function t() {
    Oa(() => {
      for (var o in e)
        e[o].unsubscribe();
      xt(e, ts, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function os(e) {
  var t = Et;
  try {
    return Et = !1, [e(), Et];
  } finally {
    Et = t;
  }
}
function w(e, t, o, n) {
  var v;
  var r = (o & Wr) !== 0, a = !0, s = (o & Vr) !== 0, i = (o & zr) !== 0, u = !1, l;
  s ? [l, u] = os(() => (
    /** @type {V} */
    e[t]
  )) : l = /** @type {V} */
  e[t];
  var f = gt in e || Tn in e, d = s && (((v = Ye(e, t)) == null ? void 0 : v.set) ?? (f && t in e && ((y) => e[t] = y))) || void 0, h = (
    /** @type {V} */
    n
  ), g = !0, c = !1, p = () => (c = !0, g && (g = !1, i ? h = Pt(
    /** @type {() => V} */
    n
  ) : h = /** @type {V} */
  n), h);
  l === void 0 && n !== void 0 && (d && a && ia(), l = p(), d && d(l));
  var P;
  if (P = () => {
    var y = (
      /** @type {V} */
      e[t]
    );
    return y === void 0 ? p() : (g = !0, c = !1, y);
  }, !(o & $r))
    return P;
  if (d) {
    var L = e.$$legacy;
    return function(y, b) {
      return arguments.length > 0 ? ((!b || L || u) && d(b ? P() : y), y) : P();
    };
  }
  var _ = !1, m = /* @__PURE__ */ Do(l), x = /* @__PURE__ */ V(() => {
    var y = P(), b = N(m);
    return _ ? (_ = !1, b) : m.v = y;
  });
  return r || (x.equals = Io), function(y, b) {
    if (arguments.length > 0) {
      const R = b ? N(x) : s ? ee(y) : y;
      return x.equals(R) || (_ = !0, M(m, R), c && h !== void 0 && (h = R), Pt(() => N(x))), y;
    }
    return N(x);
  };
}
function ns(e) {
  return new rs(e);
}
var Se, ce;
class rs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ke(this, Se);
    /** @type {Record<string, any>} */
    Ke(this, ce);
    var a;
    var o = /* @__PURE__ */ new Map(), n = (s, i) => {
      var u = /* @__PURE__ */ Do(i);
      return o.set(s, u), u;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return N(o.get(i) ?? n(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === Tn ? !0 : (N(o.get(i) ?? n(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, u) {
          return M(o.get(i) ?? n(i, u), u), Reflect.set(s, i, u);
        }
      }
    );
    ht(this, ce, (t.hydrate ? $a : er)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && A(), ht(this, Se, r.$$events);
    for (const s of Object.keys(G(this, ce)))
      s === "$set" || s === "$destroy" || s === "$on" || xt(this, s, {
        get() {
          return G(this, ce)[s];
        },
        /** @param {any} value */
        set(i) {
          G(this, ce)[s] = i;
        },
        enumerable: !0
      });
    G(this, ce).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, G(this, ce).$destroy = () => {
      Va(G(this, ce));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    G(this, ce).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, o) {
    G(this, Se)[t] = G(this, Se)[t] || [];
    const n = (...r) => o.call(this, ...r);
    return G(this, Se)[t].push(n), () => {
      G(this, Se)[t] = G(this, Se)[t].filter(
        /** @param {any} fn */
        (r) => r !== n
      );
    };
  }
  $destroy() {
    G(this, ce).$destroy();
  }
}
Se = new WeakMap(), ce = new WeakMap();
let cr;
typeof HTMLElement == "function" && (cr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, o, n) {
    super();
    /** The Svelte component constructor */
    he(this, "$$ctor");
    /** Slots */
    he(this, "$$s");
    /** @type {any} The Svelte component instance */
    he(this, "$$c");
    /** Whether or not the custom element is connected */
    he(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    he(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    he(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    he(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    he(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    he(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    he(this, "$$me");
    this.$$ctor = t, this.$$s = o, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, o, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(o), this.$$c) {
      const r = this.$$c.$on(t, o);
      this.$$l_u.set(o, r);
    }
    super.addEventListener(t, o, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, o, n) {
    if (super.removeEventListener(t, o, n), this.$$c) {
      const r = this.$$l_u.get(o);
      r && (r(), this.$$l_u.delete(o));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (a) => {
          const s = document.createElement("slot");
          r !== "default" && (s.name = r), I(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, n = as(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), o.default = !0) : o[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = Gt(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = ns({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = Ra(() => {
        Mo(() => {
          var r;
          this.$$r = !0;
          for (const a of Ft(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Gt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const a of this.$$l[r]) {
          const s = this.$$c.$on(r, a);
          this.$$l_u.set(a, s);
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
  attributeChangedCallback(t, o, n) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Gt(t, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
    return Ft(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === t || !this.$$p_d[o].attribute && o.toLowerCase() === t
    ) || t;
  }
});
function Gt(e, t, o, n) {
  var a;
  const r = (a = o[e]) == null ? void 0 : a.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !o[e])
    return t;
  if (n === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function as(e) {
  const t = {};
  return e.childNodes.forEach((o) => {
    t[
      /** @type {Element} node */
      o.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, o, n, r, a) {
  let s = class extends cr {
    constructor() {
      super(e, o, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ft(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Ft(t).forEach((i) => {
    xt(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(u) {
        var d;
        u = Gt(i, u, t), this.$$d[i] = u;
        var l = this.$$c;
        if (l) {
          var f = (d = Ye(l, i)) == null ? void 0 : d.get;
          f ? l[i] = u : l.$set({ [i]: u });
        }
      }
    });
  }), n.forEach((i) => {
    xt(s.prototype, i, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function fn(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function ss(e) {
  return e;
}
function is(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Ao(e, t) {
  if (e === t || e !== e) return () => e;
  const o = typeof e;
  if (o !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const n = (
      /** @type {Array<any>} */
      t.map((r, a) => Ao(
        /** @type {Array<any>} */
        e[a],
        r
      ))
    );
    return (r) => n.map((a) => a(r));
  }
  if (o === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (fn(e) && fn(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (u) => new Date(a + u * i);
    }
    const n = Object.keys(t), r = {};
    return n.forEach((a) => {
      r[a] = Ao(e[a], t[a]);
    }), (a) => {
      const s = {};
      return n.forEach((i) => {
        s[i] = r[i](a);
      }), s;
    };
  }
  if (o === "number") {
    const n = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (r) => e + r * n;
  }
  return () => t;
}
var He, at, wt, je;
const jo = class jo {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, o = {}) {
    Ke(this, He, J(
      /** @type {T} */
      void 0
    ));
    Ke(this, at, J(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Ke(this, wt);
    /** @type {import('../internal/client/types').Task | null} */
    Ke(this, je, null);
    G(this, He).v = G(this, at).v = t, ht(this, wt, o);
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
  static of(t, o) {
    const n = new jo(t(), o);
    return Mo(() => {
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
  set(t, o) {
    var d;
    M(G(this, at), t);
    let {
      delay: n = 0,
      duration: r = 400,
      easing: a = ss,
      interpolate: s = Ao
    } = { ...G(this, wt), ...o };
    if (r === 0)
      return (d = G(this, je)) == null || d.abort(), M(G(this, He), t), Promise.resolve();
    const i = Ae.now() + n;
    let u, l = !1, f = G(this, je);
    return ht(this, je, ir((h) => {
      if (h < i)
        return !0;
      if (!l) {
        l = !0;
        const c = G(this, He).v;
        u = s(c, t), typeof r == "function" && (r = r(c, t)), f == null || f.abort();
      }
      const g = h - i;
      return g > /** @type {number} */
      r ? (M(G(this, He), t), !1) : (M(G(this, He), u(a(g / /** @type {number} */
      r))), !0);
    })), G(this, je).promise;
  }
  get current() {
    return N(G(this, He));
  }
  get target() {
    return N(G(this, at));
  }
  set target(t) {
    this.set(t);
  }
};
He = new WeakMap(), at = new WeakMap(), wt = new WeakMap(), je = new WeakMap();
let ot = jo;
const ls = (e) => e;
function zo(e, { delay: t = 0, duration: o = 400, easing: n = ls } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: n,
    css: (a) => `opacity: ${a * r}`
  };
}
var cs = /* @__PURE__ */ Pe('<div class="state-labels__label svelte-dbcm70"> </div>'), us = /* @__PURE__ */ Pe('<div aria-hidden="true"></div>');
const ds = {
  hash: "svelte-dbcm70",
  code: `.state-labels.svelte-dbcm70 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-dbcm70 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-dbcm70 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-dbcm70 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-dbcm70 .state-labels__label:where(.svelte-dbcm70) {-webkit-text-stroke:2px #f1f1f1;paint-order:stroke fill;}`
};
function ur(e, t) {
  oe(t, !0), Be(e, ds);
  let o = w(t, "labels", 7), n = w(t, "overlayLabels", 7, !1);
  var r = us();
  let a;
  return Ue(r, 21, o, qe, (s, i) => {
    var u = rt(), l = $e(u);
    za(l, () => N(i).name, (f) => {
      var d = cs(), h = $(d, !0);
      k(d), fe(
        (g) => {
          ue(d, "left", N(i).left + "%"), ue(d, "top", N(i).top + "%"), ue(d, "width", N(i).width + "%"), ue(d, "margin-left", g), At(h, N(i).name);
        },
        [
          () => Math.round(0 - N(i).width / 2) + "%"
        ]
      ), $o(3, d, () => zo, () => ({ duration: 1e3 })), I(f, d);
    }), I(s, u);
  }), k(r), fe(() => a = oo(r, 1, "state-labels svelte-dbcm70", null, a, { "state-labels--overlaid": n() })), I(e, r), ne({
    get labels() {
      return o();
    },
    set labels(s) {
      o(s), A();
    },
    get overlayLabels() {
      return n();
    },
    set overlayLabels(s = !1) {
      n(s), A();
    }
  });
}
ie(ur, { labels: {}, overlayLabels: {} }, [], [], !0);
var fs = /* @__PURE__ */ Pe('<span class="accessible-hide svelte-ivafae"><!></span>');
const hs = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function dr(e, t) {
  oe(t, !0), Be(e, hs);
  let o = w(t, "children", 7);
  var n = fs(), r = $(n);
  return nr(r, () => o() ?? pe), k(n), I(e, n), ne({
    get children() {
      return o();
    },
    set children(a) {
      o(a), A();
    }
  });
}
ie(dr, { children: {} }, [], [], !0);
var ps = (e, t) => {
  e.preventDefault();
  const o = document.querySelector(N(t));
  o instanceof HTMLAnchorElement && o.focus();
}, vs = /* @__PURE__ */ Pe("<a><!></a>");
const gs = {
  hash: "svelte-70abd9",
  code: "a.svelte-70abd9 {display:inline-block;padding:0.5rem 1rem;font-size:0.75rem;font-weight:700;line-height:1.3rem;padding:0.3rem 0.6rem 0.1rem;text-decoration:none;letter-spacing:0.125rem;text-transform:uppercase;color:#fff;background-color:#0058cc;transition:opacity 0.2s;position:absolute;}a.svelte-70abd9:focus {opacity:1;}a.svelte-70abd9:not(:focus) {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;opacity:0.1;}.skip-link--topleft.svelte-70abd9 {left:1rem;top:1rem;}.skip-link--bottomleft.svelte-70abd9 {left:1rem;bottom:1rem;}"
};
function yo(e, t) {
  oe(t, !0), Be(e, gs);
  let o = w(t, "id", 7), n = w(t, "target", 7), r = w(t, "children", 7), a = w(t, "position", 7, "topleft"), s = /* @__PURE__ */ V(() => `#${n()}`);
  var i = vs();
  i.__click = [ps, s];
  var u = $(i);
  return nr(u, () => r() ?? pe), k(i), fe(() => {
    Ne(i, "id", o()), Ne(i, "href", N(s)), oo(i, 1, `skip-link--${a()}`, "svelte-70abd9");
  }), I(e, i), ne({
    get id() {
      return o();
    },
    set id(l) {
      o(l), A();
    },
    get target() {
      return n();
    },
    set target(l) {
      n(l), A();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), A();
    },
    get position() {
      return a();
    },
    set position(l = "topleft") {
      a(l), A();
    }
  });
}
Fo(["click"]);
ie(
  yo,
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
function Ns(e, t, o) {
  var r;
  const n = e.target.dataset.id;
  M(t, ee(n)), (r = o()) == null || r({ code: n });
}
function xs(e, t) {
  var n;
  const o = e.target.dataset.id;
  (n = t()) == null || n({ code: o, clientX: null, clientY: null });
}
function ms(e, t, o) {
  var n;
  N(t) === e.target.dataset.id && M(t, null), (n = o()) == null || n({ code: null });
}
var Ps = /* @__PURE__ */ Pe("<li><button> </button></li>"), Ls = /* @__PURE__ */ Pe("<li> <ul></ul></li>"), As = /* @__PURE__ */ Pe('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>'), ys = /* @__PURE__ */ Pe("<!> <!> <!>", 1);
const ws = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function fr(e, t) {
  oe(t, !0), Be(e, ws);
  let o = w(t, "groups", 7), n = w(t, "layout", 7), r = w(t, "onChange", 7), a = w(t, "onClick", 7), s = w(t, "onFocus", 7), i = w(t, "customElectorateAltText", 23, () => ({})), u = ye(null);
  Oe(() => {
    var c;
    (c = r()) == null || c(N(u));
  });
  let l = /* @__PURE__ */ V(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((c) => n().positions[c]).map((c) => o().find((p) => p.name === c)).map((c) => ({
    ...c,
    hexes: [...c.hexes].sort((p, P) => p.coord[0] + p.coord[1] * 1e3 - (P.coord[0] + P.coord[1] * 1e3))
  })));
  var f = ys(), d = $e(f);
  yo(d, {
    id: "hex-map-top",
    target: "hex-map-bottom",
    position: "topleft",
    children: (c, p) => {
      Wt();
      var P = an("Skip past map");
      I(c, P);
    },
    $$slots: { default: !0 }
  });
  var h = K(d, 2);
  dr(h, {
    children: (c, p) => {
      var P = As();
      P.__click = [xs, a], P.__focusin = [Ns, u, s], P.__focusout = [ms, u, s], Ue(P, 21, () => N(l), qe, (L, _) => {
        var m = Ls(), x = $(m), v = K(x);
        Ue(v, 21, () => N(_).hexes, qe, (y, b) => {
          var R = Ps(), C = $(R), B = $(C);
          k(C), k(R), fe(() => {
            Ne(C, "data-id", N(b).id), At(B, `${N(b).name ?? ""} ${i()[N(b).id] || ""}`);
          }), I(y, R);
        }), k(v), k(m), fe(() => At(x, `${N(_).name ?? ""} `)), I(L, m);
      }), k(P), I(c, P);
    },
    $$slots: { default: !0 }
  });
  var g = K(h, 2);
  return yo(g, {
    id: "hex-map-bottom",
    target: "hex-map-top",
    position: "bottomleft",
    children: (c, p) => {
      Wt();
      var P = an("Skip above map");
      I(c, P);
    },
    $$slots: { default: !0 }
  }), I(e, f), ne({
    get groups() {
      return o();
    },
    set groups(c) {
      o(c), A();
    },
    get layout() {
      return n();
    },
    set layout(c) {
      n(c), A();
    },
    get onChange() {
      return r();
    },
    set onChange(c) {
      r(c), A();
    },
    get onClick() {
      return a();
    },
    set onClick(c) {
      a(c), A();
    },
    get onFocus() {
      return s();
    },
    set onFocus(c) {
      s(c), A();
    },
    get customElectorateAltText() {
      return i();
    },
    set customElectorateAltText(c = {}) {
      i(c), A();
    }
  });
}
Fo(["click", "focusin", "focusout"]);
ie(
  fr,
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
function _s(e) {
  return Object.entries(e).reduce((t, [o, n]) => (t[n] = o, t), {});
}
const hn = 16;
function ro(e = [0, 0], t = "px") {
  const o = e[0] * (hn * Math.sqrt(3)), n = e[1] * 1.5 * hn;
  return [o, n].map((r) => `${Math.round(r)}${t}`);
}
var bs = /* @__PURE__ */ Me('<path style="color:#000000;fill:var(--c-tileFocusBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:var(--c-tileFocusBorderGap);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), Ts = /* @__PURE__ */ Me('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:var(--c-tileInteractBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const Os = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function kt(e, t) {
  oe(t, !0), Be(e, Os);
  let o = w(t, "groups", 7), n = w(t, "id", 7), r = w(t, "layout", 7), a = w(t, "type", 7, "focus"), s = /* @__PURE__ */ V(() => o().flatMap((d) => d.hexes.map((h) => ({ ...h, group: d.name }))).sort((d, h) => d.index - h.index)), i = /* @__PURE__ */ V(() => {
    if (!n())
      return;
    const d = N(s).find((m) => m.id === n()), [h, g] = r().positions[d.group], [c, p] = d.coord, P = p % 2 ? 0.5 : 0, [L, _] = ro([h + c + P, g + p], "").map(Number);
    return [L - 3, _ - 3];
  });
  var u = rt(), l = $e(u);
  {
    var f = (d) => {
      var h = Ts(), g = $(h);
      {
        var c = (p) => {
          var P = bs();
          Wt(), I(p, P);
        };
        Ie(g, (p) => {
          a() === "focus" && p(c);
        });
      }
      Wt(), k(h), fe((p) => Ne(h, "transform", p), [
        () => `translate(${N(i).join(" ")}) scale(0.95)`
      ]), I(d, h);
    };
    Ie(l, (d) => {
      N(i) && d(f);
    });
  }
  return I(e, u), ne({
    get groups() {
      return o();
    },
    set groups(d) {
      o(d), A();
    },
    get id() {
      return n();
    },
    set id(d) {
      n(d), A();
    },
    get layout() {
      return r();
    },
    set layout(d) {
      r(d), A();
    },
    get type() {
      return a();
    },
    set type(d = "focus") {
      a(d), A();
    }
  });
}
ie(kt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var Rs = typeof global == "object" && global && global.Object === Object && global, Cs = typeof self == "object" && self && self.Object === Object && self, hr = Rs || Cs || Function("return this")(), Kt = hr.Symbol, pr = Object.prototype, Es = pr.hasOwnProperty, Ss = pr.toString, pt = Kt ? Kt.toStringTag : void 0;
function Hs(e) {
  var t = Es.call(e, pt), o = e[pt];
  try {
    e[pt] = void 0;
    var n = !0;
  } catch {
  }
  var r = Ss.call(e);
  return n && (t ? e[pt] = o : delete e[pt]), r;
}
var Is = Object.prototype, Ds = Is.toString;
function Gs(e) {
  return Ds.call(e);
}
var ks = "[object Null]", Ms = "[object Undefined]", pn = Kt ? Kt.toStringTag : void 0;
function Bs(e) {
  return e == null ? e === void 0 ? Ms : ks : pn && pn in Object(e) ? Hs(e) : Gs(e);
}
function Fs(e) {
  return e != null && typeof e == "object";
}
var Ws = "[object Symbol]";
function $s(e) {
  return typeof e == "symbol" || Fs(e) && Bs(e) == Ws;
}
var Vs = /\s/;
function zs(e) {
  for (var t = e.length; t-- && Vs.test(e.charAt(t)); )
    ;
  return t;
}
var qs = /^\s+/;
function Us(e) {
  return e && e.slice(0, zs(e) + 1).replace(qs, "");
}
function wo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var vn = NaN, Ks = /^[-+]0x[0-9a-f]+$/i, js = /^0b[01]+$/i, Ys = /^0o[0-7]+$/i, Qs = parseInt;
function gn(e) {
  if (typeof e == "number")
    return e;
  if ($s(e))
    return vn;
  if (wo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Us(e);
  var o = js.test(e);
  return o || Ys.test(e) ? Qs(e.slice(2), o ? 2 : 8) : Ks.test(e) ? vn : +e;
}
var co = function() {
  return hr.Date.now();
}, Xs = "Expected a function", Zs = Math.max, Js = Math.min;
function ei(e, t, o) {
  var n, r, a, s, i, u, l = 0, f = !1, d = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Xs);
  t = gn(t) || 0, wo(o) && (f = !!o.leading, d = "maxWait" in o, a = d ? Zs(gn(o.maxWait) || 0, t) : a, h = "trailing" in o ? !!o.trailing : h);
  function g(y) {
    var b = n, R = r;
    return n = r = void 0, l = y, s = e.apply(R, b), s;
  }
  function c(y) {
    return l = y, i = setTimeout(L, t), f ? g(y) : s;
  }
  function p(y) {
    var b = y - u, R = y - l, C = t - b;
    return d ? Js(C, a - R) : C;
  }
  function P(y) {
    var b = y - u, R = y - l;
    return u === void 0 || b >= t || b < 0 || d && R >= a;
  }
  function L() {
    var y = co();
    if (P(y))
      return _(y);
    i = setTimeout(L, p(y));
  }
  function _(y) {
    return i = void 0, h && n ? g(y) : (n = r = void 0, s);
  }
  function m() {
    i !== void 0 && clearTimeout(i), l = 0, n = u = r = i = void 0;
  }
  function x() {
    return i === void 0 ? s : _(co());
  }
  function v() {
    var y = co(), b = P(y);
    if (n = arguments, r = this, u = y, b) {
      if (i === void 0)
        return c(u);
      if (d)
        return clearTimeout(i), i = setTimeout(L, t), g(u);
    }
    return i === void 0 && (i = setTimeout(L, t)), s;
  }
  return v.cancel = m, v.flush = x, v;
}
function ti({ isInteractive: e = !1, onClick: t, onHover: o }) {
  if (!e)
    return {};
  const n = ei(o, 10), r = ({ target: i, clientX: u, clientY: l }) => {
    var d;
    const f = (d = i == null ? void 0 : i.dataset) == null ? void 0 : d.id;
    !f || !t || t({ code: f, clientX: u, clientY: l });
  }, a = (i) => {
    const u = i.target, { clientX: l, clientY: f } = i, d = u.dataset.id;
    u.nodeName !== "polygon" || !d || n({ code: d, clientX: l, clientY: f });
  }, s = (i) => {
    n({ code: null });
  };
  return {
    onblur: s,
    onmouseout: s,
    onmouseover: a,
    onclick: r
  };
}
var oi = /* @__PURE__ */ Me('<g><text> </text><text class="hexlabels__text svelte-18lue6v"> </text></g>'), ni = /* @__PURE__ */ Me('<g class="hexlabels svelte-18lue6v"></g>');
const ri = {
  hash: "svelte-18lue6v",
  code: ".hexlabels.svelte-18lue6v {pointer-events:none;}.hexlabels__text.svelte-18lue6v {font-size:12px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function vr(e, t) {
  oe(t, !0), Be(e, ri);
  let o = w(t, "hexes", 7), n = w(t, "allocations", 7), r = w(t, "certainties", 7), a = w(t, "labelsToShow", 23, () => ({})), s = w(t, "showElectorateLabels", 7, !1), i = /* @__PURE__ */ V(() => s() ? o() : o().filter(({ id: l }) => a()[l]));
  var u = ni();
  return Ue(u, 21, () => N(i), qe, (l, f) => {
    let d = () => N(f).id, h = () => N(f).coordPx, g = () => N(f).shortName;
    var c = oi(), p = $(c);
    let P;
    var L = $(p, !0);
    k(p);
    var _ = K(p), m = $(_, !0);
    k(_), k(c), fe(
      (x) => {
        Ne(c, "transform", x), P = oo(p, 0, "hexlabels__text svelte-18lue6v", null, P, {
          "hexlabels__text--allocation": n()[d()]
        }), ue(p, "stroke", `var(--u-${n()[d()]})`), ue(p, "stroke-width", "3"), ue(p, "opacity", n()[d()] && !r()[d()] ? 1 : 0), At(L, g()), ue(_, "fill", n()[d()] && r()[d()] ? "white" : "black"), At(m, g());
      },
      [
        () => `translate(${h().join(" ")}) rotate(-30) translate(0 3)`
      ]
    ), I(l, c);
  }), k(u), I(e, u), ne({
    get hexes() {
      return o();
    },
    set hexes(l) {
      o(l), A();
    },
    get allocations() {
      return n();
    },
    set allocations(l) {
      n(l), A();
    },
    get certainties() {
      return r();
    },
    set certainties(l) {
      r(l), A();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(l = {}) {
      a(l), A();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(l = !1) {
      s(l), A();
    }
  });
}
ie(
  vr,
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
var ai = /* @__PURE__ */ Me('<g><g class="group-hexes svelte-ra45qz"><!></g><g class="group-outline group-outline__under svelte-ra45qz"><!></g></g>'), si = /* @__PURE__ */ Me('<g><g class="group-hex-strokes svelte-ra45qz"><!></g><!></g>'), ii = /* @__PURE__ */ Me("<g><!><!></g>");
const li = {
  hash: "svelte-ra45qz",
  code: `.group.svelte-ra45qz:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-ra45qz {display:none;}.group--hidden.svelte-ra45qz {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-ra45qz,
.group-outline.svelte-ra45qz {pointer-events:none;}.group.svelte-ra45qz .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-ra45qz .hex-outline {fill:none;stroke:var(--c-stateOutline);stroke-width:1.5px;transition:opacity 0.5s, stroke 0.5s;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-ra45qz:not(.group--has-focuses) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:var(--c-emptyStateOutline);}.group--map-is-full.svelte-ra45qz:not(.group--has-focuses) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:transparent;}.group-hexes.svelte-ra45qz .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-ra45qz .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-ra45qz .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-ra45qz .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-ra45qz .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-ra45qz .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-ra45qz .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-ra45qz .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-ra45qz .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-ra45qz .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-ra45qz .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-ra45qz .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-ra45qz .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-ra45qz .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-ra45qz .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-nullBorder);stroke-width:1.5px;}.group--map-is-empty.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex {fill:var(--c-empty);stroke:var(--c-emptyBorder);stroke-width:1px;}.group-hex-strokes.svelte-ra45qz .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-ra45qz .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filledBorder);stroke-width:1.5px;}.group-hex-strokes.svelte-ra45qz .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--has-focuses.svelte-ra45qz:not(.group--map-is-empty) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:#60646c;}.group--is-outline.svelte-ra45qz .hex {stroke:white !important;fill:#f1f1f1;stroke-width:1.5 !important;}.group--is-outline.svelte-ra45qz .hex-outline {stroke:#cdcbcb !important;}`
};
function gr(e, t) {
  oe(t, !0), Be(e, li);
  let o = w(t, "groups", 7), n = w(t, "isStaticLayout", 7), r = w(t, "layout", 7), a = w(t, "allocations", 7), s = w(t, "focuses", 7), i = w(t, "certainties", 7), u = w(t, "showElectorateLabels", 7), l = w(t, "showFocusedElectorateLabels", 7), f = w(t, "labelsToShow", 7), d = w(t, "isOutlineOnly", 7, !1), h = ye(void 0), g = /* @__PURE__ */ V(() => {
    const v = Object.values(a());
    return v.length !== 0 && v.some(Boolean);
  }), c = /* @__PURE__ */ V(() => {
    const v = Object.values(a());
    return v.length !== 0 && v.every(Boolean);
  }), p = /* @__PURE__ */ V(() => Object.values(s()).some(Boolean)), P = /* @__PURE__ */ V(() => {
    var v;
    return Array.from(((v = N(h)) == null ? void 0 : v.querySelectorAll("polygon.hex")) || []).filter((y) => y instanceof SVGPolygonElement);
  });
  Oe(() => {
    const v = { ...a() }, y = s(), b = i();
    N(P).forEach((R) => {
      const C = R.dataset.id;
      if (!C)
        return;
      const B = v[C] || null;
      R.dataset.allocation = B;
      const F = N(p) ? y[C] || !1 : !0;
      R.dataset.focused = F;
      const O = b[C] || null;
      R.dataset.certain = O;
    });
  });
  let L = /* @__PURE__ */ V(() => {
    const v = o(), y = r();
    return v.map((b) => {
      const R = y.positions[b.name], C = R && R[0] !== 1 / 0, B = ro(R).join(","), F = N(p) && l() ? s() : f(), O = {
        "data-name": b.name,
        style: `transform: translate(${B})`,
        class: [
          "group",
          !1,
          !C && "group--hidden",
          n() && "group--map-is-static",
          !N(g) && "group--map-is-empty",
          N(c) && "group--map-is-full",
          N(p) && "group--has-focuses",
          d() && "group--is-outline"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: C, labels: F, group: b, groupProps: O };
    });
  });
  var _ = ii(), m = $(_);
  Ue(m, 17, () => N(L), qe, (v, y) => {
    let b = () => N(y).groupProps, R = () => N(y).group;
    var C = ai();
    let B;
    var F = $(C), O = $(F);
    lo(O, () => R().svgHexes), k(F);
    var W = K(F), z = $(W);
    lo(z, () => R().svgOutline), k(W), k(C), fe(() => B = Po(C, B, { ...b() }, "svelte-ra45qz", !0)), I(v, C);
  });
  var x = K(m);
  return Ue(x, 17, () => N(L), qe, (v, y) => {
    let b = () => N(y).groupProps, R = () => N(y).isVisible, C = () => N(y).labels, B = () => N(y).group;
    var F = si();
    let O;
    var W = $(F), z = $(W);
    lo(z, () => B().svgHexes), k(W);
    var le = K(W);
    {
      var Z = (q) => {
        vr(q, {
          get hexes() {
            return B().hexes;
          },
          get allocations() {
            return a();
          },
          get certainties() {
            return i();
          },
          get labelsToShow() {
            return C();
          },
          get showElectorateLabels() {
            return u();
          }
        });
      };
      Ie(le, (q) => {
        R() && q(Z);
      });
    }
    k(F), fe(() => O = Po(F, O, { ...b() }, "svelte-ra45qz", !0)), I(v, F);
  }), k(_), no(_, (v) => M(h, v), () => N(h)), I(e, _), ne({
    get groups() {
      return o();
    },
    set groups(v) {
      o(v), A();
    },
    get isStaticLayout() {
      return n();
    },
    set isStaticLayout(v) {
      n(v), A();
    },
    get layout() {
      return r();
    },
    set layout(v) {
      r(v), A();
    },
    get allocations() {
      return a();
    },
    set allocations(v) {
      a(v), A();
    },
    get focuses() {
      return s();
    },
    set focuses(v) {
      s(v), A();
    },
    get certainties() {
      return i();
    },
    set certainties(v) {
      i(v), A();
    },
    get showElectorateLabels() {
      return u();
    },
    set showElectorateLabels(v) {
      u(v), A();
    },
    get showFocusedElectorateLabels() {
      return l();
    },
    set showFocusedElectorateLabels(v) {
      l(v), A();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(v) {
      f(v), A();
    },
    get isOutlineOnly() {
      return d();
    },
    set isOutlineOnly(v = !1) {
      d(v), A();
    }
  });
}
ie(
  gr,
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
    isOutlineOnly: {}
  },
  [],
  [],
  !0
);
var ci = /* @__PURE__ */ Me('<g class="svelte-1hugu1z"><path d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z" stroke-width="2" class="svelte-1hugu1z"></path><path d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064" stroke-width="2" fill="none" class="svelte-1hugu1z"></path></g>'), ui = /* @__PURE__ */ Me('<g class="hex-map-arrows svelte-1hugu1z"></g>');
const di = {
  hash: "svelte-1hugu1z",
  code: `path.svelte-1hugu1z,
g.svelte-1hugu1z {transition:all 0.5s;}

@keyframes svelte-1hugu1z-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`
};
function qo(e, t) {
  oe(t, !0), Be(e, di);
  let o = w(t, "hexes", 7), n = w(t, "offset", 7), r = w(t, "arrowData", 7), a = w(t, "arrowHeight", 7), s = w(t, "getColourForValue", 7), i = w(t, "getRotationForValue", 7), u = /* @__PURE__ */ V(() => o().map((d) => ({
    id: d.id,
    coordPx: d.coordPx,
    value: r()[d.id]
  })).filter(({ value: d }) => typeof d == "number"));
  function l(d) {
    const c = Math.abs(d);
    return Math.min(1.5, 0.3 + c / 20);
  }
  var f = ui();
  return Ue(f, 21, () => N(u), qe, (d, h) => {
    let g = () => N(h).coordPx, c = () => N(h).value;
    var p = ci(), P = $(p), L = K(P);
    k(p), fe(
      (_, m, x, v) => {
        Ne(p, "transform", _), ue(p, "opacity", c() === 0 ? 0 : 1), Ne(P, "transform", m), ue(P, "fill", x), Ne(L, "transform", v), ue(L, "stroke", x);
      },
      [
        () => `translate(${g().join(" ")}) rotate(${i()(c())})`,
        () => `scale(${l(c())} ${c() * a()})`,
        () => s()(c()),
        () => `translate(0 ${-63 * c() * a()}) rotate(${c() < 0 ? 180 : 0}) scale(${l(c())})`
      ]
    ), I(d, p);
  }), k(f), fe((d) => Ne(f, "transform", d), [
    () => `translate(${ro(n(), "").join(",")})`
  ]), $o(3, f, () => zo, () => ({ duration: 750 })), I(e, f), ne({
    get hexes() {
      return o();
    },
    set hexes(d) {
      o(d), A();
    },
    get offset() {
      return n();
    },
    set offset(d) {
      n(d), A();
    },
    get arrowData() {
      return r();
    },
    set arrowData(d) {
      r(d), A();
    },
    get arrowHeight() {
      return a();
    },
    set arrowHeight(d) {
      a(d), A();
    },
    get getColourForValue() {
      return s();
    },
    set getColourForValue(d) {
      s(d), A();
    },
    get getRotationForValue() {
      return i();
    },
    set getRotationForValue(d) {
      i(d), A();
    }
  });
}
ie(
  qo,
  {
    hexes: {},
    offset: {},
    arrowData: {},
    arrowHeight: {},
    getColourForValue: {},
    getRotationForValue: {}
  },
  [],
  [],
  !0
);
const fi = { pct: { OTH: 13.74, IND: 7.84, LNP: 29.82, ALP: 36.18, GRN: 12.42 } }, hi = { pct: { IND: 4.6, ALP: 39.62, GRN: 22.81, LNP: 27.25, OTH: 5.72 } }, pi = { pct: { OTH: 8.87, GRN: 13.99, ALP: 43.52, LNP: 33.62 } }, vi = { pct: { LNP: 47.25, GRN: 5.4, ALP: 33.73, OTH: 13.61 } }, gi = { pct: { ALP: 44.5, LNP: 30.3, OTH: 17.03, GRN: 8.17 } }, Ni = { pct: { ALP: 32.27, OTH: 10.55, LNP: 48.2, GRN: 8.98 } }, xi = { pct: { GRN: 11.12, LNP: 53.54, OTH: 13, IND: 2.59, ALP: 19.75 } }, mi = { pct: { OTH: 20.28, LNP: 24.99, ALP: 50.09, GRN: 4.64 } }, Pi = { pct: { GRN: 13.15, LNP: 57.89, OTH: 8.64, ALP: 20.32 } }, Li = { pct: { OTH: 31.23, ALP: 20.87, LNP: 42.19, GRN: 5.71 } }, Ai = { pct: { OTH: 19.58, IND: 1.57, GRN: 4.57, LNP: 25.23, ALP: 49.06 } }, yi = { pct: { LNP: 59.8, OTH: 12.13, ALP: 21.68, GRN: 6.4 } }, wi = { pct: { OTH: 14.55, LNP: 43.41, ALP: 12.72, IND: 23.86, GRN: 5.47 } }, _i = { pct: { LNP: 29.2, GRN: 14.23, ALP: 43.95, OTH: 12.61 } }, bi = { pct: { OTH: 12.71, LNP: 38.3, GRN: 7.02, ALP: 39.01, IND: 2.94 } }, Ti = { pct: { ALP: 36.5, LNP: 40.97, GRN: 8.18, IND: 3.88, OTH: 10.47 } }, Oi = { pct: { LNP: 46.08, OTH: 16.59, ALP: 13.3, IND: 19.79, GRN: 4.23 } }, Ri = { pct: { OTH: 21.7, ALP: 47.39, GRN: 4.81, LNP: 26.11 } }, Ci = { pct: { GRN: 9.45, IND: 6.67, OTH: 10.08, ALP: 34.29, LNP: 39.5 } }, Ei = { pct: { OTH: 8.88, LNP: 20.83, GRN: 21.59, ALP: 48.69 } }, Si = { pct: { OTH: 14.17, GRN: 5.13, LNP: 37.84, ALP: 42.86 } }, Hi = { pct: { LNP: 50.41, GRN: 6.58, OTH: 12.14, ALP: 28.89, IND: 1.97 } }, Ii = { pct: { ALP: 24.86, OTH: 14.99, LNP: 49.84, GRN: 4.77, IND: 5.54 } }, Di = { pct: { OTH: 38.18, LNP: 21.36, GRN: 6.25, ALP: 34.2 } }, Gi = { pct: { GRN: 11.4, OTH: 11.73, ALP: 42.55, LNP: 34.32 } }, ki = { pct: { OTH: 20.12, ALP: 31.67, LNP: 41.31, GRN: 4.36, IND: 2.54 } }, Mi = { pct: { ALP: 21.9, LNP: 44.87, OTH: 22.66, IND: 4.65, GRN: 5.92 } }, Bi = { pct: { OTH: 24.31, ALP: 43.55, LNP: 28.12, GRN: 4.03 } }, Fi = { pct: { OTH: 10.79, IND: 11.61, GRN: 10.94, ALP: 16.14, LNP: 50.51 } }, Wi = { pct: { LNP: 42.93, GRN: 8.76, ALP: 36.63, OTH: 11.68 } }, $i = { pct: { OTH: 25.86, ALP: 40.52, GRN: 4.34, LNP: 29.28 } }, Vi = { pct: { ALP: 22.74, LNP: 58.92, OTH: 10.68, GRN: 7.66 } }, zi = { pct: { IND: 19.7, OTH: 13.21, ALP: 11.88, LNP: 51.08, GRN: 4.13 } }, qi = { pct: { ALP: 43.21, GRN: 14.7, OTH: 14.48, LNP: 27.6 } }, Ui = { pct: { IND: 4.61, OTH: 11.88, GRN: 11.13, LNP: 47.27, ALP: 25.11 } }, Ki = { pct: { OTH: 19.36, LNP: 47.79, GRN: 3.93, ALP: 22.18, IND: 6.74 } }, ji = { pct: { LNP: 37.83, ALP: 41.31, OTH: 14.23, GRN: 6.63 } }, Yi = { pct: { LNP: 30.62, OTH: 24.21, ALP: 38.68, GRN: 6.5 } }, Qi = { pct: { OTH: 12.13, GRN: 7.59, ALP: 34.93, LNP: 45.36 } }, Xi = { pct: { OTH: 16.28, ALP: 29.35, IND: 1.44, LNP: 34.12, GRN: 18.81 } }, Zi = { pct: { LNP: 56.84, GRN: 5.88, ALP: 21.97, OTH: 15.32 } }, Ji = { pct: { OTH: 14.74, IND: 2.81, LNP: 43.47, GRN: 7.34, ALP: 31.64 } }, el = { pct: { OTH: 18.8, ALP: 38.5, GRN: 7.73, LNP: 34.98 } }, tl = { pct: { LNP: 25.6, OTH: 9.49, ALP: 47.53, GRN: 17.38 } }, ol = { pct: { OTH: 8.45, IND: 42.41, ALP: 6.28, LNP: 37.04, GRN: 5.82 } }, nl = { pct: { OTH: 22.93, GRN: 6.2, ALP: 45.17, LNP: 25.69 } }, rl = { pct: { IND: 32.02, ALP: 10.62, OTH: 4.04, LNP: 46.01, GRN: 7.31 } }, al = { pct: { OTH: 19.82, LNP: 31.19, GRN: 4.75, IND: 2, ALP: 42.23 } }, sl = { pct: { OTH: 22.57, LNP: 23.62, ALP: 45.26, GRN: 8.55 } }, il = { pct: { ALP: 42.54, GRN: 7.82, OTH: 10.43, IND: 4.16, LNP: 35.04 } }, ll = { pct: { ALP: 38.29, OTH: 9.34, LNP: 36.39, GRN: 11.32, IND: 4.66 } }, cl = { pct: { IND: 5.75, OTH: 30.44, ALP: 28.92, LNP: 26.85, GRN: 8.03 } }, ul = { pct: { OTH: 10.42, GRN: 11.35, LNP: 48.04, ALP: 30.19 } }, dl = { pct: { GRN: 11.59, LNP: 47.02, OTH: 15.71, ALP: 25.68 } }, fl = { pct: { OTH: 7.68, LNP: 46.64, GRN: 21.81, ALP: 23.87 } }, hl = { pct: { GRN: 4.53, OTH: 32.82, IND: 2.33, LNP: 38.08, ALP: 22.24 } }, pl = { pct: { OTH: 34.41, LNP: 39.94, ALP: 18.86, GRN: 4.2, IND: 2.59 } }, vl = { pct: { GRN: 9.54, LNP: 43.93, ALP: 29.96, IND: 2.27, OTH: 14.29 } }, gl = { pct: { OTH: 23.71, ALP: 21.4, GRN: 8.56, LNP: 46.33 } }, Nl = { pct: { OTH: 20.43, GRN: 11.78, LNP: 46.43, IND: 1.26, ALP: 20.1 } }, xl = { pct: { OTH: 19.39, ALP: 21.16, GRN: 11.81, LNP: 47.64 } }, ml = { pct: { ALP: 26.98, OTH: 30.88, GRN: 2.89, IND: 3.56, LNP: 35.69 } }, Pl = { pct: { OTH: 22.05, GRN: 8.32, LNP: 41.49, ALP: 28.14 } }, Ll = { pct: { LNP: 40.05, ALP: 30.26, GRN: 23.12, OTH: 6.58 } }, Al = { pct: { GRN: 7.71, OTH: 22.61, LNP: 51.63, ALP: 18.06 } }, yl = { pct: { OTH: 34.25, GRN: 6.88, LNP: 34.92, ALP: 23.95 } }, wl = { pct: { OTH: 28.36, LNP: 42.43, GRN: 3.43, IND: 4.65, ALP: 21.14 } }, _l = { pct: { OTH: 52.44, GRN: 4.95, LNP: 26.33, ALP: 16.27 } }, bl = { pct: { OTH: 25.48, IND: 2.67, ALP: 26.94, LNP: 35.18, GRN: 9.73 } }, Tl = { pct: { OTH: 12.71, LNP: 39.36, ALP: 34.4, GRN: 13.53 } }, Ol = { pct: { LNP: 36.33, OTH: 25.23, ALP: 32.11, GRN: 6.32 } }, Rl = { pct: { ALP: 14.94, LNP: 53.79, OTH: 27.98, GRN: 3.29 } }, Cl = { pct: { ALP: 21.4, OTH: 21.45, IND: 1.67, GRN: 10.29, LNP: 45.19 } }, El = { pct: { OTH: 22.56, LNP: 48.2, GRN: 9.06, ALP: 20.18 } }, Sl = { pct: { OTH: 10.04, ALP: 34.1, GRN: 16.26, LNP: 39.61 } }, Hl = { pct: { LNP: 32.92, GRN: 11.08, ALP: 40.51, OTH: 15.48 } }, Il = { pct: { OTH: 15.47, LNP: 46.37, ALP: 29.74, GRN: 8.42 } }, Dl = { pct: { ALP: 38.22, OTH: 23.35, GRN: 8.38, LNP: 28.93, "no party": 1.11 } }, Gl = { pct: { ALP: 23.85, OTH: 8.85, LNP: 47.44, GRN: 19.86 } }, kl = { pct: { GRN: 9.47, ALP: 20.72, OTH: 20.67, LNP: 44.86, IND: 4.28 } }, Ml = { pct: { OTH: 28.47, GRN: 6.74, IND: 5.01, ALP: 17.6, LNP: 42.19 } }, Bl = { pct: { OTH: 11.26, GRN: 15.14, ALP: 38.78, LNP: 34.82 } }, Fl = { pct: { GRN: 6.46, OTH: 19.04, LNP: 54.65, ALP: 19.84 } }, Wl = { pct: { OTH: 10.08, GRN: 11.4, LNP: 43.07, ALP: 33.01, IND: 2.45 } }, $l = { pct: { OTH: 25.71, ALP: 21.25, IND: 1.62, LNP: 47.14, GRN: 4.28 } }, Vl = { pct: { OTH: 13.11, ALP: 41.23, LNP: 35.16, GRN: 10.51 } }, zl = { pct: { ALP: 48.5, LNP: 30.42, GRN: 8.83, OTH: 12.26 } }, ql = { pct: { ALP: 46.24, LNP: 31.4, OTH: 14.11, GRN: 8.24 } }, Ul = { pct: { LNP: 36.51, GRN: 8.98, OTH: 41.27, ALP: 13.24 } }, Kl = { pct: { ALP: 47.91, LNP: 24.29, OTH: 15.96, GRN: 6.78, IND: 5.06 } }, jl = { pct: { GRN: 10.58, LNP: 47.86, ALP: 28.26, OTH: 10.8, IND: 2.51 } }, Yl = { pct: { GRN: 10.01, ALP: 33.18, OTH: 11.46, LNP: 41.73, IND: 3.62 } }, Ql = { pct: { OTH: 16.59, IND: 11.72, LNP: 37.4, GRN: 4.49, ALP: 29.79 } }, Xl = { pct: { IND: 48.82, ALP: 19.73, LNP: 16.95, GRN: 9.34, OTH: 5.16 } }, Zl = { pct: { GRN: 15.74, LNP: 30.28, OTH: 11.37, ALP: 42.61 } }, Jl = { pct: { LNP: 38.04, ALP: 34.79, GRN: 9.02, OTH: 18.15 } }, ec = { pct: { LNP: 52.68, GRN: 8.53, ALP: 28.71, OTH: 10.07 } }, tc = { pct: { OTH: 12.87, IND: 3.66, GRN: 8.45, LNP: 29.3, ALP: 45.71 } }, oc = { pct: { OTH: 17.03, GRN: 10.74, ALP: 41.84, LNP: 30.39 } }, nc = { pct: { OTH: 13.07, LNP: 27.57, ALP: 52.47, GRN: 6.9 } }, rc = { pct: { OTH: 22.16, GRN: 6.12, ALP: 48.91, LNP: 22.81 } }, ac = { pct: { IND: 2.16, OTH: 18.53, LNP: 42.32, ALP: 26.75, GRN: 10.23 } }, sc = { pct: { IND: 2.33, OTH: 12.17, GRN: 11.3, LNP: 41.43, ALP: 32.76 } }, ic = { pct: { IND: 1.62, OTH: 15.21, GRN: 20.11, ALP: 44.5, LNP: 18.55 } }, lc = { pct: { OTH: 11.75, ALP: 34.07, GRN: 8.68, IND: 4.85, LNP: 40.65 } }, cc = { pct: { ALP: 45.91, LNP: 32.64, GRN: 12.6, OTH: 8.85 } }, uc = { pct: { OTH: 12.71, IND: 1.59, GRN: 8.61, LNP: 45.88, ALP: 31.2 } }, dc = { pct: { OTH: 17.67, ALP: 36.54, GRN: 7.96, LNP: 37.83 } }, fc = { pct: { IND: 14.8, OTH: 11.59, LNP: 43.94, ALP: 23.27, GRN: 6.4 } }, hc = { pct: { OTH: 15.23, LNP: 24.27, ALP: 47.37, GRN: 7.75, IND: 5.38 } }, pc = { pct: { ALP: 46.95, GRN: 15.97, LNP: 28.3, OTH: 8.79 } }, vc = { pct: { OTH: 18.13, ALP: 21.99, IND: 2.98, LNP: 51.18, GRN: 5.72 } }, gc = { pct: { OTH: 5.75, ALP: 27.68, GRN: 13.73, LNP: 51.51, IND: 1.33 } }, Nc = { pct: { OTH: 13.35, IND: 8.31, GRN: 6.69, ALP: 47.12, LNP: 24.53 } }, xc = { pct: { ALP: 48.64, GRN: 6.82, OTH: 10.15, LNP: 34.39 } }, mc = { pct: { OTH: 10.2, ALP: 43.46, LNP: 37.58, GRN: 8.75 } }, Pc = { pct: { GRN: 4.03, OTH: 10.87, IND: 30.94, LNP: 42.6, ALP: 11.56 } }, Lc = { pct: { GRN: 10.71, LNP: 33.75, OTH: 12.61, ALP: 42.93 } }, Ac = { pct: { OTH: 8.09, ALP: 40.71, LNP: 37.4, GRN: 13.8 } }, yc = { pct: { OTH: 5.23, IND: 9.89, LNP: 47.94, ALP: 16.33, GRN: 20.61 } }, wc = { pct: { GRN: 7.5, OTH: 15.87, LNP: 43.68, ALP: 32.95 } }, _c = { pct: { OTH: 13.17, LNP: 28.84, ALP: 49.41, GRN: 7.44, "no party": 1.14 } }, bc = { pct: { IND: 2, GRN: 23.21, OTH: 8.56, LNP: 35.79, ALP: 30.43 } }, Tc = { pct: { LNP: 41.48, IND: 19.1, OTH: 22.36, ALP: 13.94, GRN: 3.12 } }, Oc = { pct: { OTH: 6.38, GRN: 14.38, ALP: 45.69, LNP: 33.56 } }, Rc = { pct: { GRN: 7.91, OTH: 20.51, ALP: 37.36, LNP: 32.68, IND: 1.53 } }, Cc = { pct: { OTH: 11.03, GRN: 47.81, IND: 1.2, LNP: 20.82, ALP: 19.14 } }, Ec = { pct: { OTH: 10.85, LNP: 50.01, ALP: 29.04, GRN: 10.09 } }, Sc = { pct: { IND: 5.32, OTH: 15.53, ALP: 28.21, GRN: 6.7, LNP: 44.24 } }, Hc = { pct: { LNP: 47.45, IND: 7.87, OTH: 22.83, ALP: 17.96, GRN: 3.9 } }, Ic = { pct: { ALP: 57.26, OTH: 13.61, GRN: 6.33, LNP: 21.15, IND: 1.66 } }, Dc = { pct: { GRN: 6.1, OTH: 9.64, ALP: 25.13, IND: 9.99, LNP: 49.14 } }, Gc = { pct: { OTH: 15.11, LNP: 17.18, GRN: 25.49, ALP: 42.21 } }, kc = { pct: { OTH: 23.76, ALP: 37.86, LNP: 27.97, GRN: 10.41 } }, Mc = { pct: { GRN: 8.81, ALP: 38.33, OTH: 20.38, IND: 1.22, LNP: 31.27 } }, Bc = { pct: { OTH: 21.04, GRN: 7.07, LNP: 46.06, ALP: 25.83 } }, Fc = { pct: { GRN: 9.53, ALP: 36.07, OTH: 17.12, LNP: 37.28 } }, Wc = { pct: { OTH: 7.93, GRN: 15.05, LNP: 52.46, IND: 7.5, ALP: 17.06 } }, $c = { pct: { LNP: 51.84, OTH: 19.94, GRN: 7.7, ALP: 20.51 } }, Vc = { pct: { GRN: 12.15, OTH: 17.11, LNP: 49.51, IND: 1.29, ALP: 19.95 } }, zc = { pct: { OTH: 15.81, ALP: 35.97, LNP: 33.09, GRN: 15.13 } }, qc = { pct: { OTH: 18.99, LNP: 41.23, ALP: 28.95, GRN: 10.83 } }, Uc = { pct: { OTH: 14.05, LNP: 48.65, GRN: 11.48, ALP: 23.27, IND: 2.56 } }, Kc = { pct: { LNP: 51.15, GRN: 7.9, ALP: 19.89, OTH: 21.06 } }, jc = { pct: { OTH: 21.62, ALP: 27.02, LNP: 41.92, GRN: 8.08, IND: 1.36 } }, Yc = { pct: { OTH: 13.45, ALP: 32.86, LNP: 35.68, GRN: 18.01 } }, Qc = { pct: { LNP: 42.08, OTH: 15.02, GRN: 11.6, ALP: 31.29 } }, Xc = { pct: { ALP: 24.81, OTH: 10.67, IND: 2.57, GRN: 10.68, LNP: 51.28 } }, Zc = {
  BEAN: fi,
  CANB: hi,
  FENN: pi,
  BANK: vi,
  BART: gi,
  BENN: Ni,
  BERO: xi,
  BLAX: mi,
  BRFD: Pi,
  CALA: Li,
  CHIF: Ai,
  COOK: yi,
  COWP: wi,
  CUNN: _i,
  DOBE: bi,
  EMON: Ti,
  FARR: Oi,
  FOWL: Ri,
  GILM: Ci,
  GRAY: Ei,
  GREE: Si,
  HUGH: Hi,
  HUME: Ii,
  HUNT: Di,
  KSMI: Gi,
  LIND: ki,
  LYNE: Mi,
  MACA: Bi,
  MACK: Fi,
  MACQ: Wi,
  MCMA: $i,
  MITC: Vi,
  NENG: zi,
  NEWC: qi,
  "!!!!!": { pct: { OTH: 7.47, ALP: 24.47, GRN: 17.58, IND: 2.11, LNP: 48.37 } },
  PAGE: Ui,
  PARK: Ki,
  PARR: ji,
  PATE: Yi,
  REID: Qi,
  RICH: Xi,
  RIVE: Zi,
  ROBE: Ji,
  SHOR: el,
  SYDN: tl,
  WARR: ol,
  WATS: nl,
  WENT: rl,
  WERR: al,
  WHIT: sl,
  LING: il,
  SOLO: ll,
  BLAI: cl,
  BONN: ul,
  BOWM: dl,
  BRIS: fl,
  CAPR: hl,
  DAWS: pl,
  DICK: vl,
  FADD: gl,
  FAIR: Nl,
  FISH: xl,
  FLYN: ml,
  FORD: Pl,
  GRIF: Ll,
  GROO: Al,
  HERB: yl,
  HINK: wl,
  KENN: _l,
  LEIC: bl,
  LILL: Tl,
  LONG: Ol,
  MARA: Rl,
  MCPH: Cl,
  MONC: El,
  MORE: Sl,
  OXLE: Hl,
  PETR: Il,
  RANK: Dl,
  RYAN: Gl,
  WBAY: kl,
  WRIG: Ml,
  ADEL: Bl,
  BARK: Fl,
  BOOT: Wl,
  GREY: $l,
  HIND: Vl,
  KING: zl,
  MAKI: ql,
  MAYO: Ul,
  SPEN: Kl,
  STUR: jl,
  BASS: Yl,
  BRAD: Ql,
  CLAR: Xl,
  FRAN: Zl,
  LYON: Jl,
  ASTO: ec,
  BALL: tc,
  BEND: oc,
  BRUC: nc,
  CALW: rc,
  CASE: ac,
  CHIS: sc,
  COOP: ic,
  CORA: lc,
  CORI: cc,
  DEAK: uc,
  DUNK: dc,
  FLIN: fc,
  FRAS: hc,
  GELL: pc,
  GIPP: vc,
  GOLD: gc,
  GORT: Nc,
  HOLT: xc,
  HOTH: mc,
  INDI: Pc,
  ISAA: Lc,
  JAGA: Ac,
  KOOY: yc,
  LTRO: wc,
  LALO: _c,
  MACN: bc,
  MALL: Tc,
  MARI: Oc,
  MCEW: Rc,
  MELB: Cc,
  MENZ: Ec,
  MONA: Sc,
  NICH: Hc,
  SCUL: Ic,
  WANN: Dc,
  WILL: Gc,
  BRAN: kc,
  BURT: Mc,
  CANN: Bc,
  COWA: Fc,
  CURT: Wc,
  DURA: $c,
  FORR: Vc,
  FREM: zc,
  HASL: qc,
  MOOR: Uc,
  OCON: Kc,
  PEAR: jc,
  PERT: Yc,
  SWAN: Qc,
  TANG: Xc
}, jt = lr(), Jc = { url: "https://www.abc.net.au/news-web/api/syndicate/storylab/elections/federal/2022" }, e1 = {
  liveData: Jc
}, t1 = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, o1 = { LIB: "LNP", LNP: "LNP", CLP: "LNP", NAT: "LNP", ALP: "ALP" }, Nr = {
  hashCodes: t1,
  synonyms: o1
};
function uo(e, t = (o) => !0) {
  return e.data.electorates.reduce((o, n) => {
    const r = n.code, s = n.accumulatedCandidates.filter(
      (i) => t(Nr.synonyms[i.party.code] || i.party.code)
    ).reduce((i, u) => {
      var d;
      const l = (d = u == null ? void 0 : u.simple) == null ? void 0 : d.pct, f = l ? Number(l) : 0;
      return i + f;
    }, 0);
    return o[r] = s, o;
  }, {});
}
let St;
async function xr({ cache: e } = { cache: !0 }) {
  return e && St || (St = fetch(e1.liveData.url).then((t) => t.json())), St;
}
function mr(e, t) {
  oe(t, !0);
  const [o, n] = Vo();
  let r = w(t, "arrowChart", 7), a = w(t, "hexes", 7), s = w(t, "offset", 7), i = ye(ee({})), u = ye(void 0), l = /* @__PURE__ */ V(() => String(r().split(" ")[0])), f = /* @__PURE__ */ V(() => {
    if (!N(u))
      return {};
    const c = ["ALP", "LNP", "GRN"];
    return N(l) === "OTH" ? uo(N(u), (p) => ![...c, "IND"].includes(p)) : N(l) === "OTH+IND" ? uo(N(u), (p) => ![...c].includes(p)) : uo(N(u), (p) => p === N(l));
  });
  Oe(() => {
    const c = N(u), p = N(l), P = N(f);
    !c || !P || M(i, ee(c.data.electorates.reduce(
      (L, _) => {
        var R;
        const m = _.code, x = (R = Zc[m]) == null ? void 0 : R.pct;
        let v = (x == null ? void 0 : x[p]) || 0;
        N(l) === "OTH+IND" && (v = ((x == null ? void 0 : x.OTH) || 0) + ((x == null ? void 0 : x.IND) || 0));
        const y = N(f)[m], b = v && y ? y - v : 0;
        return L[m] = b, L;
      },
      {}
    )));
  }), Oe(() => {
    yt(jt, (c) => `Change in first pref
for ${N(l)}: ${N(i)[c] ? N(i)[c].toFixed(3) + "%" : "not applicable"}`);
  }), st(() => () => {
    yt(jt, void 0);
  });
  let d = /* @__PURE__ */ V(() => () => `var(--a-${N(l).length > 3 ? "OTH" : N(l).toUpperCase()}, hotpink)`);
  const h = () => 20;
  st(() => {
    xr({ cache: !0 }).then((c) => {
      M(u, ee(c));
    });
  }), qo(e, {
    get arrowData() {
      return N(i);
    },
    arrowHeight: 0.08,
    get hexes() {
      return a();
    },
    get offset() {
      return s();
    },
    getRotationForValue: h,
    get getColourForValue() {
      return N(d);
    }
  });
  var g = ne({
    get arrowChart() {
      return r();
    },
    set arrowChart(c) {
      r(c), A();
    },
    get hexes() {
      return a();
    },
    set hexes(c) {
      a(c), A();
    },
    get offset() {
      return s();
    },
    set offset(c) {
      s(c), A();
    }
  });
  return n(), g;
}
ie(mr, { arrowChart: {}, hexes: {}, offset: {} }, [], [], !0);
function Pr(e, t) {
  oe(t, !0);
  const [o, n] = Vo();
  let r = w(t, "hexes", 7), a = w(t, "offset", 7), s = ye(void 0), i = /* @__PURE__ */ V(() => {
    const c = N(s);
    if (!c)
      return {};
    const p = ["LIB", "LNP", "NAT", "CLP"];
    return c.data.electorates.reduce(
      (P, L) => {
        const [_, m] = L.swingDial[0].party.code === "ALP" ? L.swingDial : [...L.swingDial].reverse();
        return _.party.code === "ALP" && p.includes(m.party.code) && (P[L.code] = Number(_.predicted2CP.swing || _.simple2CP.swing || 0)), P;
      },
      {}
    );
  });
  Oe(() => {
    yt(jt, (c) => `Swing: ${N(i)[c] ? `${N(i)[c].toFixed(2)}% to ${N(i)[c] > 0 ? "ALP" : "Coalition"}` : "not applicable"}`);
  }), st(() => () => {
    yt(jt, void 0);
  });
  let u = /* @__PURE__ */ V(() => (c) => `var(--a-${c < 0 ? "LNP" : "ALP"}, hotpink)`);
  const l = (c) => c < 0 ? -135 : -45;
  st(() => {
    xr({ cache: !0 }).then((c) => {
      M(s, ee(c));
    });
  });
  var f = rt(), d = $e(f);
  {
    var h = (c) => {
      qo(c, {
        get arrowData() {
          return N(i);
        },
        arrowHeight: 0.03,
        get hexes() {
          return r();
        },
        get offset() {
          return a();
        },
        getRotationForValue: l,
        get getColourForValue() {
          return N(u);
        }
      });
    };
    Ie(d, (c) => {
      N(s) && c(h);
    });
  }
  I(e, f);
  var g = ne({
    get hexes() {
      return r();
    },
    set hexes(c) {
      r(c), A();
    },
    get offset() {
      return a();
    },
    set offset(c) {
      a(c), A();
    }
  });
  return n(), g;
}
ie(Pr, { hexes: {}, offset: {} }, [], [], !0);
var n1 = /* @__PURE__ */ Pe('<div class="hexmap__labels svelte-82t7dm"><!></div>'), r1 = /* @__PURE__ */ Pe('<div class="hexmap svelte-82t7dm"><div><svg class="svelte-82t7dm"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const a1 = {
  hash: "svelte-82t7dm",
  code: ".hexmap.svelte-82t7dm {position:relative;width:100%;height:100%;position:relative;}.hexmap.svelte-82t7dm * {box-sizing:border-box;}.hexmap__labels.svelte-82t7dm {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-82t7dm svg:where(.svelte-82t7dm) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-82t7dm {position:relative;margin:0 auto;max-height:100%;}"
};
function Lr(e, t) {
  oe(t, !0), Be(e, a1);
  let o = w(t, "config", 23, () => ({})), n = w(t, "layout", 23, () => ({})), r = w(t, "allocations", 23, () => ({})), a = w(t, "focuses", 23, () => ({})), s = w(t, "certainties", 23, () => ({})), i = w(t, "labelsToShow", 23, () => ({})), u = w(t, "showStateLabels", 7, !1), l = w(t, "showElectorateLabels", 7, !1), f = w(t, "showFocusedElectorateLabels", 7, !1), d = w(t, "isStaticLayout", 7, !1), h = w(t, "onClick", 7, ({ code: T }) => {
  }), g = w(t, "onHover", 7, ({ code: T }) => {
  }), c = w(t, "onFocus", 7, ({ code: T }) => {
  }), p = w(t, "customViewbox", 7, null), P = w(t, "onViewboxChange", 7, ({ newViewbox: T }) => {
  }), L = w(t, "isInteractive", 7, !1), _ = w(t, "arrowChart", 7, "None"), m = w(t, "selectedElectorate", 7, null), x = w(t, "customElectorateAltText", 7), v = ye(void 0), y = ye(0), b = ye(null), R = ye(null);
  const C = n().viewbox, B = { easing: is, duration: 1100 };
  let F = new ot(C[0], B), O = new ot(C[1], B), W = new ot(C[2], B), z = new ot(C[3], B);
  Oe(() => {
    const [T, U, dt, so] = p() || n().viewbox;
    F.set(T), O.set(U), W.set(dt), z.set(so);
  }), Oe(() => {
    P()(n().viewbox);
  }), st(() => {
    if (!N(v))
      return;
    const T = N(v).getBoundingClientRect();
    M(y, T.height / T.width);
  });
  let le = /* @__PURE__ */ V(() => ti({
    isInteractive: L(),
    onClick: h(),
    onHover: (T) => {
      M(R, ee(T.code)), g()(T);
    }
  }));
  var Z = r1(), q = $(Z);
  let Le;
  var Ce = $(q), Ze = K($(Ce));
  const ao = /* @__PURE__ */ V(() => _() !== "None");
  gr(Ze, {
    get groups() {
      return o().groups;
    },
    get isStaticLayout() {
      return d();
    },
    get layout() {
      return n();
    },
    get allocations() {
      return r();
    },
    get focuses() {
      return a();
    },
    get certainties() {
      return s();
    },
    get showElectorateLabels() {
      return l();
    },
    get showFocusedElectorateLabels() {
      return f();
    },
    get labelsToShow() {
      return i();
    },
    get isOutlineOnly() {
      return N(ao);
    }
  });
  var Tt = K(Ze);
  kt(Tt, {
    get groups() {
      return o().groups;
    },
    get id() {
      return N(b);
    },
    get layout() {
      return n();
    },
    type: "focus"
  });
  var Ot = K(Tt);
  kt(Ot, {
    get groups() {
      return o().groups;
    },
    get id() {
      return m();
    },
    get layout() {
      return n();
    },
    type: "focus"
  });
  var Rt = K(Ot);
  kt(Rt, {
    get groups() {
      return o().groups;
    },
    get id() {
      return N(R);
    },
    get layout() {
      return n();
    },
    type: "hover"
  });
  var _r = K(Rt);
  {
    var br = (T) => {
      var U = rt(), dt = $e(U);
      Ue(dt, 17, () => o().groups, qe, (so, ft) => {
        var Yo = rt(), Er = $e(Yo);
        {
          var Sr = (io) => {
            var Qo = rt(), Hr = $e(Qo);
            {
              var Ir = (Je) => {
                Pr(Je, {
                  get hexes() {
                    return N(ft).hexes;
                  },
                  get offset() {
                    return n().positions[N(ft).name];
                  }
                });
              }, Dr = (Je) => {
                mr(Je, {
                  get hexes() {
                    return N(ft).hexes;
                  },
                  get offset() {
                    return n().positions[N(ft).name];
                  },
                  get arrowChart() {
                    return _();
                  }
                });
              };
              Ie(Hr, (Je) => {
                _() === "Labor/Coalition 2CP Swing" ? Je(Ir) : Je(Dr, !1);
              });
            }
            I(io, Qo);
          };
          Ie(Er, (io) => {
            n().positions[N(ft).name] && io(Sr);
          });
        }
        I(so, Yo);
      }), I(T, U);
    };
    Ie(_r, (T) => {
      _() !== "None" && T(br);
    });
  }
  k(Ce), no(Ce, (T) => M(v, T), () => N(v));
  var Tr = K(Ce, 2);
  {
    var Or = (T) => {
      var U = n1(), dt = $(U);
      ur(dt, {
        get labels() {
          return n().labels;
        },
        get overlayLabels() {
          return n().overlayLabels;
        }
      }), k(U), I(T, U);
    };
    Ie(Tr, (T) => {
      u() && T(Or);
    });
  }
  k(q);
  var Rr = K(q, 2);
  {
    var Cr = (T) => {
      fr(T, {
        get customElectorateAltText() {
          return x();
        },
        get groups() {
          return o().groups;
        },
        get layout() {
          return n();
        },
        onChange: (U) => {
          M(b, ee(U));
        },
        get onClick() {
          return h();
        },
        get onFocus() {
          return c();
        }
      });
    };
    Ie(Rr, (T) => {
      L() && T(Cr);
    });
  }
  return k(Z), fe(
    (T, U) => {
      Le = Po(
        q,
        Le,
        {
          class: "hexmap__viz",
          ...N(le),
          [Dt]: {
            "hexmap__viz--vertical": N(y) <= 1
          }
        },
        "svelte-82t7dm"
      ), ue(q, "aspect-ratio", T), Ne(Ce, "viewBox", U);
    },
    [
      () => N(y) ? N(y).toFixed(3) : null,
      () => [
        F.current,
        O.current,
        W.current,
        z.current
      ].join(" ")
    ]
  ), $o(3, Z, () => zo, () => ({ duration: 750 })), I(e, Z), ne({
    get config() {
      return o();
    },
    set config(T = {}) {
      o(T), A();
    },
    get layout() {
      return n();
    },
    set layout(T = {}) {
      n(T), A();
    },
    get allocations() {
      return r();
    },
    set allocations(T = {}) {
      r(T), A();
    },
    get focuses() {
      return a();
    },
    set focuses(T = {}) {
      a(T), A();
    },
    get certainties() {
      return s();
    },
    set certainties(T = {}) {
      s(T), A();
    },
    get labelsToShow() {
      return i();
    },
    set labelsToShow(T = {}) {
      i(T), A();
    },
    get showStateLabels() {
      return u();
    },
    set showStateLabels(T = !1) {
      u(T), A();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(T = !1) {
      l(T), A();
    },
    get showFocusedElectorateLabels() {
      return f();
    },
    set showFocusedElectorateLabels(T = !1) {
      f(T), A();
    },
    get isStaticLayout() {
      return d();
    },
    set isStaticLayout(T = !1) {
      d(T), A();
    },
    get onClick() {
      return h();
    },
    set onClick(T = ({ code: U }) => {
    }) {
      h(T), A();
    },
    get onHover() {
      return g();
    },
    set onHover(T = ({ code: U }) => {
    }) {
      g(T), A();
    },
    get onFocus() {
      return c();
    },
    set onFocus(T = ({ code: U }) => {
    }) {
      c(T), A();
    },
    get customViewbox() {
      return p();
    },
    set customViewbox(T = null) {
      p(T), A();
    },
    get onViewboxChange() {
      return P();
    },
    set onViewboxChange(T = ({ newViewbox: U }) => {
    }) {
      P(T), A();
    },
    get isInteractive() {
      return L();
    },
    set isInteractive(T = !1) {
      L(T), A();
    },
    get arrowChart() {
      return _();
    },
    set arrowChart(T = "None") {
      _(T), A();
    },
    get selectedElectorate() {
      return m();
    },
    set selectedElectorate(T = null) {
      m(T), A();
    },
    get customElectorateAltText() {
      return x();
    },
    set customElectorateAltText(T) {
      x(T), A();
    }
  });
}
ie(
  Lr,
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
    selectedElectorate: {},
    customElectorateAltText: {}
  },
  [],
  [],
  !0
);
let s1 = lr({
  allocated: {},
  uncertain: {}
});
const i1 = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#949494", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "black", tileFocusBorder: "black", tileFocusBorderGap: "white", tileInteractBorder: "black" }, l1 = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", PUP: "#cc8500", Teal: "#0098a6" }, c1 = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", PUP: "#f5e7cc" }, Nn = {
  c: i1,
  allocated: l1,
  uncertain: c1
};
function Ar(e, t) {
  oe(t, !0);
  const [o, n] = Vo();
  let r = w(t, "rootEl", 15), a = w(t, "colours", 7, Nn);
  Oe(() => {
    const i = a(), u = r();
    if (!u)
      return;
    yt(s1, {
      allocated: i.allocated,
      uncertain: i.uncertain
    });
    const l = { allocated: "a", uncertain: "u" };
    Object.entries(i).forEach(([f, d]) => {
      const h = l[f] || f;
      Object.entries(d).forEach(([g, c]) => {
        const p = `--${h}-${g}`;
        u.style.setProperty(p, c);
      });
    });
  }), st(() => {
    r();
  }), no(Gn.body, (i) => r(i), () => r());
  var s = ne({
    get rootEl() {
      return r();
    },
    set rootEl(i) {
      r(i), A();
    },
    get colours() {
      return a();
    },
    set colours(i = Nn) {
      a(i), A();
    }
  });
  return n(), s;
}
ie(Ar, { rootEl: {}, colours: {} }, [], [], !0);
const u1 = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.003006, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 33.75, top: 30.75, width: 8, name: "NT" }, { left: 65.25, top: 21.5, width: 8, name: "QLD" }, { left: 57.75, top: 44.25, width: 8, name: "NSW" }, { left: 67.5, top: 57.75, width: 8, name: "ACT" }, { left: 58, top: 67.25, width: 8, name: "VIC" }, { left: 57.75, top: 86.25, width: 8, name: "TAS" }, { left: 34, top: 48.75, width: 8, name: "SA" }, { left: 24.5, top: 53.25, width: 8, name: "WA" }], overlayLabels: !0 }, d1 = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.5, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 71, top: 63.5, width: 8, name: "ACT" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, f1 = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, h1 = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, p1 = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, v1 = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, g1 = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, N1 = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, x1 = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, m1 = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, P1 = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, L1 = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, A1 = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, y1 = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, w1 = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, _1 = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, b1 = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, T1 = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, O1 = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, R1 = {
  COUNTRY: u1,
  EXPLODED: d1,
  EXPLODED_STATES_ONLY: f1,
  GRID: h1,
  ACT: p1,
  NSW: v1,
  NT: g1,
  QLD: N1,
  SA: x1,
  TAS: m1,
  VIC: P1,
  WA: L1,
  ACT_NT: A1,
  NSW_QLD: y1,
  NSW_VIC: w1,
  QLD_VIC: _1,
  QLD_WA: b1,
  QLD_NSW_VIC: T1,
  SA_TAS_WA: O1
}, C1 = 291, E1 = 200, S1 = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park.","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart.","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"River.","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New.","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Banks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lille","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long.","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More.","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Forde","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Corio","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wills","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), Uo = {
  svgWidth: C1,
  svgHeight: E1,
  groups: S1
};
function H1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fo, xn;
function I1() {
  if (xn) return fo;
  xn = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var o = new Uint8Array(256), n = 0; n < o.length; n++)
      o[n] = 255;
    for (var r = 0; r < t.length; r++) {
      var a = t.charAt(r), s = a.charCodeAt(0);
      if (o[s] !== 255)
        throw new TypeError(a + " is ambiguous");
      o[s] = r;
    }
    var i = t.length, u = t.charAt(0), l = Math.log(i) / Math.log(256), f = Math.log(256) / Math.log(i);
    function d(c) {
      if (c instanceof Uint8Array || (ArrayBuffer.isView(c) ? c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength) : Array.isArray(c) && (c = Uint8Array.from(c))), !(c instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (c.length === 0)
        return "";
      for (var p = 0, P = 0, L = 0, _ = c.length; L !== _ && c[L] === 0; )
        L++, p++;
      for (var m = (_ - L) * f + 1 >>> 0, x = new Uint8Array(m); L !== _; ) {
        for (var v = c[L], y = 0, b = m - 1; (v !== 0 || y < P) && b !== -1; b--, y++)
          v += 256 * x[b] >>> 0, x[b] = v % i >>> 0, v = v / i >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        P = y, L++;
      }
      for (var R = m - P; R !== m && x[R] === 0; )
        R++;
      for (var C = u.repeat(p); R < m; ++R)
        C += t.charAt(x[R]);
      return C;
    }
    function h(c) {
      if (typeof c != "string")
        throw new TypeError("Expected String");
      if (c.length === 0)
        return new Uint8Array();
      for (var p = 0, P = 0, L = 0; c[p] === u; )
        P++, p++;
      for (var _ = (c.length - p) * l + 1 >>> 0, m = new Uint8Array(_); c[p]; ) {
        var x = o[c.charCodeAt(p)];
        if (x === 255)
          return;
        for (var v = 0, y = _ - 1; (x !== 0 || v < L) && y !== -1; y--, v++)
          x += i * m[y] >>> 0, m[y] = x % 256 >>> 0, x = x / 256 >>> 0;
        if (x !== 0)
          throw new Error("Non-zero carry");
        L = v, p++;
      }
      for (var b = _ - L; b !== _ && m[b] === 0; )
        b++;
      for (var R = new Uint8Array(P + (_ - b)), C = P; b !== _; )
        R[C++] = m[b++];
      return R;
    }
    function g(c) {
      var p = h(c);
      if (p)
        return p;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: d,
      decodeUnsafe: h,
      decode: g
    };
  }
  return fo = e, fo;
}
var D1 = I1();
const G1 = /* @__PURE__ */ H1(D1);
var k1 = "0123456789abcdefghijklmnopqrstuvwxyz";
G1(k1);
new TextEncoder();
new TextDecoder();
const M1 = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, B1 = function(e, { delineator: t }) {
  e += t;
  const o = [];
  let n = e;
  for (let a = 0; a < e.length; a++)
    n = M1(n), o.push(n);
  o.sort();
  let r = "";
  for (let a = 0; a < o.length; a++)
    r += o[a].charAt(o[a].length - 1);
  return r;
}, F1 = function(e, { delineator: t }) {
  const n = e.split("").slice(0);
  for (let a = 0; a < e.length - 1; a++) {
    n.sort();
    for (let s = 0; s < e.length; s++)
      n[s] = e[s] + n[s];
  }
  return n.filter(function(a) {
    return a.charAt(a.length - 1) === t;
  })[0].substring(0, e.length - 1);
};
function yr(e) {
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
    (t, o, n) => (n === 0 || o !== t[t.length - 1].char ? t.push({ char: o, repeated: 1 }) : t[t.length - 1].repeated++, t),
    []
  ).reduce((t, { char: o, repeated: n }) => t += n === 1 ? o : o + String(n), "");
}
function wr(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, o, n) => o.repeat(+n)
  );
}
async function W1(e, { delineator: t }) {
  const o = B1(e, { delineator: t });
  return yr(o);
}
async function $1(e, { delineator: t }) {
  const o = wr(e);
  return F1(o, { delineator: t });
}
function V1({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => W1(t, { delineator: e }),
    decode: (t) => $1(t, { delineator: e })
  };
}
const _o = 26, bo = 97, z1 = 48, mn = async (e, { maxBits: t }) => {
  const o = [1, ...e].map((i) => i ? 1 : 0).join(""), n = [];
  for (let i = o.length; i > 0; i -= t)
    n.push(o.slice(Math.max(0, i - t), i));
  return n.reverse(), n.map((i) => parseInt(i, 2)).map((i) => i > _o ? i % _o : String.fromCharCode(i + bo)).join("");
};
async function Pn(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= bo ? i - bo : i - z1 + _o
  ).map(
    (i, u) => Number(i).toString(2).padStart(u > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((u) => u === "1")
  ).slice(1);
}
function q1({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => yr(await mn(t, { maxBits: e })),
    decode: async (t) => Pn(wr(t), { maxBits: e })
  } : {
    encode: (t) => mn(t, { maxBits: e }),
    decode: (t) => Pn(t, { maxBits: e })
  };
}
const Ko = Uo.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), U1 = Object.values(Ko).reduce((e, t) => (e[t.id] = t, e), {});
Uo.groups;
const To = "q", K1 = "x";
V1({ delineator: To });
const j1 = _s(Nr.hashCodes);
if (j1[To] || K1 === To)
  throw new Error("Can not use delineator in allocation map");
q1({ maxBits: 4 });
Object.freeze(
  Ko.reduce((e, t) => (e[t.id] = null, e), {})
);
Object.freeze(
  Ko.reduce((e, t) => (e[t.id] = !0, e), {})
);
var Y1 = /* @__PURE__ */ Pe("<!> <div><!></div>", 1);
function Q1(e, t) {
  oe(t, !0);
  let o = w(t, "allocations", 23, () => ({})), n = w(t, "certainties", 23, () => ({})), r = w(t, "focuses", 23, () => ({})), a = w(t, "showStateLabels", 7, !1), s = w(t, "showElectorateLabels", 7, !1), i = w(t, "layout", 7, "COUNTRY"), u = w(t, "selectedElectorate", 7, null), l = w(t, "customViewbox", 7, null), f = w(t, "onClick", 7, () => {
  }), d = w(t, "onHover", 7, () => {
  }), h = w(t, "onFocus", 7, () => {
  }), g = w(t, "onApi", 7, () => {
  }), c = w(t, "onViewboxChange", 7, () => {
  }), p = w(t, "isStaticLayout", 7, !0), P = w(t, "isInteractive", 7, !0), L = w(t, "colours", 7), _ = w(t, "customElectorateAltText", 23, () => ({})), m = ye(void 0), x = /* @__PURE__ */ V(() => R1[i()]);
  function v(O, W, z, le = !0) {
    const Z = le ? z.getScreenCTM() : z.getCTM(), q = z.createSVGPoint();
    q.x = O, q.y = W;
    const Le = q.matrixTransform(Z);
    return [Le.x, Le.y].map(Number);
  }
  function y(O) {
    const W = U1[O], z = N(x).positions[W == null ? void 0 : W.group];
    if (!N(m))
      return;
    const le = N(m).querySelector("svg");
    if (!W || !z || !le)
      throw new Error(`Could not find hexagon with id ${O}`);
    const Z = [-0.5, -1], [q, Le] = ro(
      [
        z[0] + Z[0],
        z[1] + Z[1]
      ],
      ""
    ).map(Number), Ce = Number(W.coordPx[0] + q), Ze = Number(W.coordPx[1] + Le), [ao, Tt] = v(Ce, Ze, le), [Ot, Rt] = v(Ce, Ze, le, !1);
    return {
      code: O,
      screenCoord: [ao, Tt],
      containerCoord: [Ot, Rt],
      svgCoord: [Ce, Ze]
    };
  }
  function b(O) {
    var z;
    const W = (z = N(m)) == null ? void 0 : z.querySelector(`.hexmapkeyboardnav button[data-id="${O}"]`);
    W instanceof HTMLButtonElement && W.focus();
  }
  Oe(() => {
    g() && g()({ getHex: y, focusHex: b });
  });
  var R = Y1(), C = $e(R);
  Ar(C, {
    get colours() {
      return L();
    },
    get rootEl() {
      return N(m);
    },
    set rootEl(O) {
      M(m, ee(O));
    }
  });
  var B = K(C, 2), F = $(B);
  return Lr(F, {
    config: Uo,
    get layout() {
      return N(x);
    },
    get allocations() {
      return o();
    },
    get certainties() {
      return n();
    },
    get focuses() {
      return r();
    },
    get showStateLabels() {
      return a();
    },
    get showElectorateLabels() {
      return s();
    },
    get onClick() {
      return f();
    },
    get onHover() {
      return d();
    },
    get onFocus() {
      return h();
    },
    get selectedElectorate() {
      return u();
    },
    get customViewbox() {
      return l();
    },
    get isStaticLayout() {
      return p();
    },
    get isInteractive() {
      return P();
    },
    get onViewboxChange() {
      return c();
    },
    get customElectorateAltText() {
      return _();
    }
  }), k(B), no(B, (O) => M(m, O), () => N(m)), I(e, R), ne({
    get allocations() {
      return o();
    },
    set allocations(O = {}) {
      o(O), A();
    },
    get certainties() {
      return n();
    },
    set certainties(O = {}) {
      n(O), A();
    },
    get focuses() {
      return r();
    },
    set focuses(O = {}) {
      r(O), A();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(O = !1) {
      a(O), A();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(O = !1) {
      s(O), A();
    },
    get layout() {
      return i();
    },
    set layout(O = "COUNTRY") {
      i(O), A();
    },
    get selectedElectorate() {
      return u();
    },
    set selectedElectorate(O = null) {
      u(O), A();
    },
    get customViewbox() {
      return l();
    },
    set customViewbox(O = null) {
      l(O), A();
    },
    get onClick() {
      return f();
    },
    set onClick(O = () => {
    }) {
      f(O), A();
    },
    get onHover() {
      return d();
    },
    set onHover(O = () => {
    }) {
      d(O), A();
    },
    get onFocus() {
      return h();
    },
    set onFocus(O = () => {
    }) {
      h(O), A();
    },
    get onApi() {
      return g();
    },
    set onApi(O = () => {
    }) {
      g(O), A();
    },
    get onViewboxChange() {
      return c();
    },
    set onViewboxChange(O = () => {
    }) {
      c(O), A();
    },
    get isStaticLayout() {
      return p();
    },
    set isStaticLayout(O = !0) {
      p(O), A();
    },
    get isInteractive() {
      return P();
    },
    set isInteractive(O = !0) {
      P(O), A();
    },
    get colours() {
      return L();
    },
    set colours(O) {
      L(O), A();
    },
    get customElectorateAltText() {
      return _();
    },
    set customElectorateAltText(O = {}) {
      _(O), A();
    }
  });
}
customElements.define("abcnews-hexmap", ie(
  Q1,
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
    colours: {},
    customElectorateAltText: {}
  },
  [],
  [],
  !0
));
export {
  Q1 as default
};
