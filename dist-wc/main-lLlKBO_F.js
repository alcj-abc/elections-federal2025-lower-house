var Co = Object.defineProperty;
var Wn = (e) => {
  throw TypeError(e);
};
var Lo = (e, t, n) => t in e ? Co(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var se = (e, t, n) => Lo(e, typeof t != "symbol" ? t + "" : t, n), Fn = (e, t, n) => t.has(e) || Wn("Cannot " + n);
var I = (e, t, n) => (Fn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), He = (e, t, n) => t.has(e) ? Wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ft = (e, t, n, r) => (Fn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const Oo = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Oo);
const mn = 1, yn = 2, vr = 4, To = 8, ko = 16, Ro = 1, Io = 4, Mo = 8, Do = 16, Bo = 4, pr = 1, $o = 2, gr = "[", wn = "[!", _n = "]", Je = {}, G = Symbol(), Vn = !1, ue = 2, xr = 4, Wt = 8, Ft = 16, Te = 32, it = 64, Ot = 128, oe = 256, Tt = 512, K = 1024, ke = 2048, lt = 4096, Se = 8192, Vt = 16384, mr = 32768, ct = 65536, Ho = 1 << 19, yr = 1 << 20, et = Symbol("$state"), bn = Symbol("legacy props"), Wo = Symbol("");
var Nn = Array.isArray, Fo = Array.prototype.indexOf, An = Array.from, kt = Object.keys, gt = Object.defineProperty, Ce = Object.getOwnPropertyDescriptor, Vo = Object.getOwnPropertyDescriptors, zo = Object.prototype, qo = Array.prototype, wr = Object.getPrototypeOf;
function Xe(e) {
  return typeof e == "function";
}
const te = () => {
};
function _r(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let xt = [], tn = [];
function br() {
  var e = xt;
  xt = [], _r(e);
}
function Go() {
  var e = tn;
  tn = [], _r(e);
}
function ut(e) {
  xt.length === 0 && queueMicrotask(br), xt.push(e);
}
function zn() {
  xt.length > 0 && br(), tn.length > 0 && Go();
}
function Nr(e) {
  return e === this.v;
}
function Ar(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function jo(e, t) {
  return e !== t;
}
function En(e) {
  return !Ar(e, this.v);
}
function Uo(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ko() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yo(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xo() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Zo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ea() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ta() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function na() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ra = !1;
function Q(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Nr,
    rv: 0,
    wv: 0
  };
  return n;
}
function Me(e) {
  return /* @__PURE__ */ oa(Q(e));
}
// @__NO_SIDE_EFFECTS__
function zt(e, t = !1) {
  const n = Q(e);
  return t || (n.equals = En), n;
}
// @__NO_SIDE_EFFECTS__
function oa(e) {
  return R !== null && !ie && R.f & ue && (xe === null ? la([e]) : xe.push(e)), e;
}
function D(e, t) {
  return R !== null && !ie && zr() && R.f & (ue | Ft) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (xe === null || !xe.includes(e)) && na(), nn(e, t);
}
function nn(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ir(), Er(e, ke), k !== null && k.f & K && !(k.f & (Te | it)) && (Ne === null ? ca([e]) : Ne.push(e))), t;
}
function Er(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, o = 0; o < r; o++) {
      var a = n[o], s = a.f;
      s & ke || (we(a, t), s & (K | oe) && (s & ue ? Er(
        /** @type {Derived} */
        a,
        lt
      ) : jt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  var t = ue | ke, n = R !== null && R.f & ue ? (
    /** @type {Derived} */
    R
  ) : null;
  return k === null || n !== null && n.f & oe ? t |= oe : k.f |= yr, {
    ctx: X,
    deps: null,
    effects: null,
    equals: Nr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? k
  };
}
// @__NO_SIDE_EFFECTS__
function aa(e) {
  const t = /* @__PURE__ */ U(e);
  return t.equals = En, t;
}
function Pr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      de(
        /** @type {Effect} */
        t[n]
      );
  }
}
function sa(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ue))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ia(e) {
  var t, n = k;
  ye(sa(e));
  try {
    Pr(e), t = Dr(e);
  } finally {
    ye(n);
  }
  return t;
}
function Sr(e) {
  var t = ia(e), n = (De || e.f & oe) && e.deps !== null ? lt : K;
  we(e, n), e.equals(t) || (e.v = t, e.wv = Ir());
}
function qt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function le(e) {
  O = e;
}
let T;
function ae(e) {
  if (e === null)
    throw qt(), Je;
  return T = e;
}
function Be() {
  return ae(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _e(T)
  );
}
function B(e) {
  if (O) {
    if (/* @__PURE__ */ _e(T) !== null)
      throw qt(), Je;
    T = e;
  }
}
function qn(e = 1) {
  if (O) {
    for (var t = e, n = T; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ _e(n);
    T = n;
  }
}
function rn() {
  for (var e = 0, t = T; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === _n) {
        if (e === 0) return t;
        e -= 1;
      } else (n === gr || n === wn) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(t)
    );
    t.remove(), t = r;
  }
}
function pe(e, t = null, n) {
  if (typeof e != "object" || e === null || et in e)
    return e;
  const r = wr(e);
  if (r !== zo && r !== qo)
    return e;
  var o = /* @__PURE__ */ new Map(), a = Nn(e), s = Q(0);
  a && o.set("length", Q(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, c, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Jo();
        var d = o.get(c);
        return d === void 0 ? (d = Q(u.value), o.set(c, d)) : D(d, pe(u.value, i)), !0;
      },
      deleteProperty(l, c) {
        var u = o.get(c);
        if (u === void 0)
          c in l && o.set(c, Q(G));
        else {
          if (a && typeof c == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(c);
            Number.isInteger(f) && f < d.v && D(d, f);
          }
          D(u, G), Gn(s);
        }
        return !0;
      },
      get(l, c, u) {
        var h;
        if (c === et)
          return e;
        var d = o.get(c), f = c in l;
        if (d === void 0 && (!f || (h = Ce(l, c)) != null && h.writable) && (d = Q(pe(f ? l[c] : G, i)), o.set(c, d)), d !== void 0) {
          var v = N(d);
          return v === G ? void 0 : v;
        }
        return Reflect.get(l, c, u);
      },
      getOwnPropertyDescriptor(l, c) {
        var u = Reflect.getOwnPropertyDescriptor(l, c);
        if (u && "value" in u) {
          var d = o.get(c);
          d && (u.value = N(d));
        } else if (u === void 0) {
          var f = o.get(c), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== G)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(l, c) {
        var v;
        if (c === et)
          return !0;
        var u = o.get(c), d = u !== void 0 && u.v !== G || Reflect.has(l, c);
        if (u !== void 0 || k !== null && (!d || (v = Ce(l, c)) != null && v.writable)) {
          u === void 0 && (u = Q(d ? pe(l[c], i) : G), o.set(c, u));
          var f = N(u);
          if (f === G)
            return !1;
        }
        return d;
      },
      set(l, c, u, d) {
        var y;
        var f = o.get(c), v = c in l;
        if (a && c === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var p = o.get(h + "");
            p !== void 0 ? D(p, G) : h in l && (p = Q(G), o.set(h + "", p));
          }
        f === void 0 ? (!v || (y = Ce(l, c)) != null && y.writable) && (f = Q(void 0), D(f, pe(u, i)), o.set(c, f)) : (v = f.v !== G, D(f, pe(u, i)));
        var w = Reflect.getOwnPropertyDescriptor(l, c);
        if (w != null && w.set && w.set.call(d, u), !v) {
          if (a && typeof c == "string") {
            var b = (
              /** @type {Source<number>} */
              o.get("length")
            ), E = Number(c);
            Number.isInteger(E) && E >= b.v && D(b, E + 1);
          }
          Gn(s);
        }
        return !0;
      },
      ownKeys(l) {
        N(s);
        var c = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== G;
        });
        for (var [u, d] of o)
          d.v !== G && !(u in l) && c.push(u);
        return c;
      },
      setPrototypeOf() {
        ea();
      }
    }
  );
}
function Gn(e, t = 1) {
  D(e, e.v + t);
}
var jn, Cr, Lr, Or, Tr;
function on() {
  if (jn === void 0) {
    jn = window, Cr = document, Lr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Or = Ce(t, "firstChild").get, Tr = Ce(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function V(e) {
  return Or.call(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return Tr.call(e);
}
function F(e, t) {
  if (!O)
    return /* @__PURE__ */ V(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ V(T)
  );
  if (n === null)
    n = T.appendChild(nt());
  else if (t && n.nodeType !== 3) {
    var r = nt();
    return n == null || n.before(r), ae(r), r;
  }
  return ae(n), n;
}
function rt(e, t) {
  if (!O) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ V(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ _e(n) : n;
  }
  return T;
}
function ee(e, t = 1, n = !1) {
  let r = O ? T : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ _e(r);
  if (!O)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var s = nt();
    return r === null ? o == null || o.after(s) : r.before(s), ae(s), s;
  }
  return ae(r), /** @type {TemplateNode} */
  r;
}
function kr(e) {
  e.textContent = "";
}
let Et = !1, Rt = !1, It = null, Pt = !1, Pn = !1;
function Un(e) {
  Pn = e;
}
let pt = [];
let R = null, ie = !1;
function me(e) {
  R = e;
}
let k = null;
function ye(e) {
  k = e;
}
let xe = null;
function la(e) {
  xe = e;
}
let j = null, J = 0, Ne = null;
function ca(e) {
  Ne = e;
}
let Rr = 1, Mt = 0, De = !1;
function Ir() {
  return ++Rr;
}
function _t(e) {
  var d;
  var t = e.f;
  if (t & ke)
    return !0;
  if (t & lt) {
    var n = e.deps, r = (t & oe) !== 0;
    if (n !== null) {
      var o, a, s = (t & Tt) !== 0, i = r && k !== null && !De, l = n.length;
      if (s || i) {
        var c = (
          /** @type {Derived} */
          e
        ), u = c.parent;
        for (o = 0; o < l; o++)
          a = n[o], (s || !((d = a == null ? void 0 : a.reactions) != null && d.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Tt), i && u !== null && !(u.f & oe) && (c.f ^= oe);
      }
      for (o = 0; o < l; o++)
        if (a = n[o], _t(
          /** @type {Derived} */
          a
        ) && Sr(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!r || k !== null && !De) && we(e, K);
  }
  return !1;
}
function ua(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Ot)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Ot;
      }
    n = n.parent;
  }
  throw Et = !1, e;
}
function da(e) {
  return (e.f & Vt) === 0 && (e.parent === null || (e.parent.f & Ot) === 0);
}
function Gt(e, t, n, r) {
  if (Et) {
    if (n === null && (Et = !1), da(t))
      throw e;
    return;
  }
  n !== null && (Et = !0);
  {
    ua(e, t);
    return;
  }
}
function Mr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & ue ? Mr(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? we(a, ke) : a.f & K && we(a, lt), jt(
        /** @type {Effect} */
        a
      ));
    }
}
function Dr(e) {
  var v;
  var t = j, n = J, r = Ne, o = R, a = De, s = xe, i = X, l = ie, c = e.f;
  j = /** @type {null | Value[]} */
  null, J = 0, Ne = null, De = (c & oe) !== 0 && (ie || !Pt || R === null), R = c & (Te | it) ? null : e, xe = null, Kn(e.ctx), ie = !1, Mt++;
  try {
    var u = (
      /** @type {Function} */
      (0, e.fn)()
    ), d = e.deps;
    if (j !== null) {
      var f;
      if (Dt(e, J), d !== null && J > 0)
        for (d.length = J + j.length, f = 0; f < j.length; f++)
          d[J + f] = j[f];
      else
        e.deps = d = j;
      if (!De)
        for (f = J; f < d.length; f++)
          ((v = d[f]).reactions ?? (v.reactions = [])).push(e);
    } else d !== null && J < d.length && (Dt(e, J), d.length = J);
    if (zr() && Ne !== null && !ie && d !== null && !(e.f & (ue | lt | ke)))
      for (f = 0; f < /** @type {Source[]} */
      Ne.length; f++)
        Mr(
          Ne[f],
          /** @type {Effect} */
          e
        );
    return o !== null && Mt++, u;
  } finally {
    j = t, J = n, Ne = r, R = o, De = a, xe = s, Kn(i), ie = l;
  }
}
function fa(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Fo.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & ue && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (j === null || !j.includes(t)) && (we(t, lt), t.f & (oe | Tt) || (t.f ^= Tt), Pr(
    /** @type {Derived} **/
    t
  ), Dt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Dt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      fa(e, n[r]);
}
function Sn(e) {
  var t = e.f;
  if (!(t & Vt)) {
    we(e, K);
    var n = k, r = X, o = Pt;
    k = e, Pt = !0;
    try {
      t & Ft ? ba(e) : Hr(e), $r(e);
      var a = Dr(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Rr;
      var s = e.deps, i;
      Vn && ra && e.f & ke;
    } catch (l) {
      Gt(l, e, n, r || e.ctx);
    } finally {
      Pt = o, k = n;
    }
  }
}
function ha() {
  try {
    Qo();
  } catch (e) {
    if (It !== null)
      Gt(e, It, null);
    else
      throw e;
  }
}
function Br() {
  try {
    for (var e = 0; pt.length > 0; ) {
      e++ > 1e3 && ha();
      var t = pt, n = t.length;
      pt = [];
      for (var r = 0; r < n; r++) {
        var o = t[r];
        o.f & K || (o.f ^= K);
        var a = pa(o);
        va(a);
      }
    }
  } finally {
    Rt = !1, It = null;
  }
}
function va(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Vt | Se)))
        try {
          _t(r) && (Sn(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Wr(r) : r.fn = null));
        } catch (o) {
          Gt(o, r, null, r.ctx);
        }
    }
}
function jt(e) {
  Rt || (Rt = !0, queueMicrotask(Br));
  for (var t = It = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (it | Te)) {
      if (!(n & K)) return;
      t.f ^= K;
    }
  }
  pt.push(t);
}
function pa(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, o = (r & Te) !== 0, a = o && (r & K) !== 0, s = n.next;
    if (!a && !(r & Se)) {
      if (r & xr)
        t.push(n);
      else if (o)
        n.f ^= K;
      else {
        var i = R;
        try {
          R = n, _t(n) && Sn(n);
        } catch (u) {
          Gt(u, n, null, n.ctx);
        } finally {
          R = i;
        }
      }
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    if (s === null) {
      let u = n.parent;
      for (; u !== null; ) {
        if (e === u)
          break e;
        var c = u.next;
        if (c !== null) {
          n = c;
          continue e;
        }
        u = u.parent;
      }
    }
    n = s;
  }
  return t;
}
function S(e) {
  var t;
  for (zn(); pt.length > 0; )
    Rt = !0, Br(), zn();
  return (
    /** @type {T} */
    t
  );
}
function N(e) {
  var t = e.f, n = (t & ue) !== 0;
  if (R !== null && !ie) {
    xe !== null && xe.includes(e) && ta();
    var r = R.deps;
    e.rv < Mt && (e.rv = Mt, j === null && r !== null && r[J] === e ? J++ : j === null ? j = [e] : (!De || !j.includes(e)) && j.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & oe) && (o.f ^= oe);
  }
  return n && (o = /** @type {Derived} */
  e, _t(o) && Sr(o)), e.v;
}
function ot(e) {
  var t = ie;
  try {
    return ie = !0, e();
  } finally {
    ie = t;
  }
}
const ga = -7169;
function we(e, t) {
  e.f = e.f & ga | t;
}
function xa(e) {
  k === null && R === null && Yo(), R !== null && R.f & oe && k === null && Ko(), Pn && Uo();
}
function ma(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ge(e, t, n, r = !0) {
  var o = (e & it) !== 0, a = k, s = {
    ctx: X,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ke,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Sn(s), s.f |= mr;
    } catch (c) {
      throw de(s), c;
    }
  else t !== null && jt(s);
  var i = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (yr | Ot)) === 0;
  if (!i && !o && r && (a !== null && ma(s, a), R !== null && R.f & ue)) {
    var l = (
      /** @type {Derived} */
      R
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return s;
}
function ya(e) {
  const t = Ge(Wt, null, !1);
  return we(t, K), t.teardown = e, t;
}
function Ve(e) {
  xa();
  var t = k !== null && (k.f & Te) !== 0 && X !== null && !X.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      X
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: k,
      reaction: R
    });
  } else {
    var r = Ut(e);
    return r;
  }
}
function wa(e) {
  const t = Ge(it, e, !0);
  return () => {
    de(t);
  };
}
function _a(e) {
  const t = Ge(it, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? at(t, () => {
      de(t), r(void 0);
    }) : (de(t), r(void 0));
  });
}
function Ut(e) {
  return Ge(xr, e, !1);
}
function Cn(e) {
  return Ge(Wt, e, !0);
}
function Le(e, t = [], n = U) {
  const r = t.map(n);
  return je(() => e(...r.map(N)));
}
function je(e, t = 0) {
  return Ge(Wt | Ft | t, e, !0);
}
function Oe(e, t = !0) {
  return Ge(Wt | Te, e, !0, t);
}
function $r(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Pn, r = R;
    Un(!0), me(null);
    try {
      t.call(null);
    } finally {
      Un(n), me(r);
    }
  }
}
function Hr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    de(n, t), n = r;
  }
}
function ba(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Te || de(t), t = n;
  }
}
function de(e, t = !0) {
  var n = !1;
  if ((t || e.f & Ho) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  Hr(e, t && !n), Dt(e, 0), we(e, Vt);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  $r(e);
  var i = e.parent;
  i !== null && i.first !== null && Wr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Wr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function at(e, t) {
  var n = [];
  Ln(e, n, !0), Fr(n, () => {
    de(e), t && t();
  });
}
function Fr(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ln(e, t, n) {
  if (!(e.f & Se)) {
    if (e.f ^= Se, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & ct) !== 0 || (r.f & Te) !== 0;
      Ln(r, t, a ? n : !1), r = o;
    }
  }
}
function Bt(e) {
  Vr(e, !0);
}
function Vr(e, t) {
  if (e.f & Se) {
    e.f ^= Se, e.f & K || (e.f ^= K), _t(e) && (we(e, ke), jt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & ct) !== 0 || (n.f & Te) !== 0;
      Vr(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Na(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let X = null;
function Kn(e) {
  X = e;
}
function fe(e, t = !1, n) {
  X = {
    p: X,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function he(e) {
  const t = X;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = k, r = R;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var a = s[o];
          ye(a.effect), me(a.reaction), Ut(a.fn);
        }
      } finally {
        ye(n), me(r);
      }
    }
    X = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function zr() {
  return !0;
}
function Aa(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ea = [
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
function Pa(e) {
  return Ea.includes(e);
}
const Sa = {
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
function Ca(e) {
  return e = e.toLowerCase(), Sa[e] ?? e;
}
const La = ["touchstart", "touchmove"];
function Oa(e) {
  return La.includes(e);
}
function Ta(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ut(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function qr(e) {
  var t = R, n = k;
  me(null), ye(null);
  try {
    return e();
  } finally {
    me(t), ye(n);
  }
}
const Gr = /* @__PURE__ */ new Set(), an = /* @__PURE__ */ new Set();
function ka(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || vt.call(t, a), !a.cancelBubble)
      return qr(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function jr(e) {
  for (var t = 0; t < e.length; t++)
    Gr.add(e[t]);
  for (var n of an)
    n(e);
}
function vt(e) {
  var E;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = ((E = e.composedPath) == null ? void 0 : E.call(e)) || [], a = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var l = o.indexOf(i);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  o[s] || e.target, a !== t) {
    gt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var u = R, d = k;
    me(null), ye(null);
    try {
      for (var f, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Nn(p)) {
              var [w, ...b] = p;
              w.apply(a, [e, ...b]);
            } else
              p.call(a, e);
        } catch (y) {
          f ? v.push(y) : f = y;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let y of v)
          queueMicrotask(() => {
            throw y;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, me(u), ye(d);
    }
  }
}
function On(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ce(e, t) {
  var n = (
    /** @type {Effect} */
    k
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  var n = (t & pr) !== 0, r = (t & $o) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return ce(T, null), T;
    o === void 0 && (o = On(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ V(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Lr ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ V(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ce(i, l);
    } else
      ce(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ue(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & pr) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (O)
      return ce(T, null), T;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        On(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ V(i)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ V(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ V(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ V(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ V(c)
      ), d = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      ce(u, d);
    } else
      ce(c, c);
    return c;
  };
}
function mt() {
  if (O)
    return ce(T, null), T;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = nt();
  return e.append(t, n), ce(t, n), e;
}
function W(e, t) {
  if (O) {
    k.nodes_end = T, Be();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let sn = !0;
function yt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Ur(e, t) {
  return Kr(e, t);
}
function Ra(e, t) {
  on(), t.intro = t.intro ?? !1;
  const n = t.target, r = O, o = T;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ V(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== gr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ _e(a);
    if (!a)
      throw Je;
    le(!0), ae(
      /** @type {Comment} */
      a
    ), Be();
    const s = Kr(e, { ...t, anchor: a });
    if (T === null || T.nodeType !== 8 || /** @type {Comment} */
    T.data !== _n)
      throw qt(), Je;
    return le(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Je)
      return t.recover === !1 && Xo(), on(), kr(n), le(!1), Ur(e, t);
    throw s;
  } finally {
    le(r), ae(o);
  }
}
const Ye = /* @__PURE__ */ new Map();
function Kr(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: s = !0 }) {
  on();
  var i = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!i.has(v)) {
        i.add(v);
        var h = Oa(v);
        t.addEventListener(v, vt, { passive: h });
        var p = Ye.get(v);
        p === void 0 ? (document.addEventListener(v, vt, { passive: h }), Ye.set(v, 1)) : Ye.set(v, p + 1);
      }
    }
  };
  l(An(Gr)), an.add(l);
  var c = void 0, u = _a(() => {
    var d = n ?? t.appendChild(nt());
    return Oe(() => {
      if (a) {
        fe({});
        var f = (
          /** @type {ComponentContext} */
          X
        );
        f.c = a;
      }
      o && (r.$$events = o), O && ce(
        /** @type {TemplateNode} */
        d,
        null
      ), sn = s, c = e(d, r) || {}, sn = !0, O && (k.nodes_end = T), a && he();
    }), () => {
      var h;
      for (var f of i) {
        t.removeEventListener(f, vt);
        var v = (
          /** @type {number} */
          Ye.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, vt), Ye.delete(f)) : Ye.set(f, v);
      }
      an.delete(l), d !== n && ((h = d.parentNode) == null || h.removeChild(d));
    };
  });
  return ln.set(c, u), c;
}
let ln = /* @__PURE__ */ new WeakMap();
function Ia(e, t) {
  const n = ln.get(e);
  return n ? (ln.delete(e), n(t)) : Promise.resolve();
}
function Fe(e, t, n = !1) {
  O && Be();
  var r = e, o = null, a = null, s = G, i = n ? ct : 0, l = !1;
  const c = (d, f = !0) => {
    l = !0, u(f, d);
  }, u = (d, f) => {
    if (s === (s = d)) return;
    let v = !1;
    if (O) {
      const h = (
        /** @type {Comment} */
        r.data === wn
      );
      !!s === h && (r = rn(), ae(r), le(!1), v = !0);
    }
    s ? (o ? Bt(o) : f && (o = Oe(() => f(r))), a && at(a, () => {
      a = null;
    })) : (a ? Bt(a) : f && (a = Oe(() => f(r))), o && at(o, () => {
      o = null;
    })), v && le(!0);
  };
  je(() => {
    l = !1, t(c), l || u(null, null);
  }, i), O && (r = T);
}
function Ma(e, t, n) {
  O && Be();
  var r = e, o = G, a, s = jo;
  je(() => {
    s(o, o = t()) && (a && at(a), a = Oe(() => n(r)));
  }), O && (r = T);
}
function ze(e, t) {
  return t;
}
function Da(e, t, n, r) {
  for (var o = [], a = t.length, s = 0; s < a; s++)
    Ln(t[s].e, o, !0);
  var i = a > 0 && o.length === 0 && n !== null;
  if (i) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    kr(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Ie(e, t[0].prev, t[a - 1].next);
  }
  Fr(o, () => {
    for (var c = 0; c < a; c++) {
      var u = t[c];
      i || (r.delete(u.k), Ie(e, u.prev, u.next)), de(u.e, !i);
    }
  });
}
function qe(e, t, n, r, o, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & vr) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = O ? ae(
      /** @type {Comment | Text} */
      /* @__PURE__ */ V(c)
    ) : c.appendChild(nt());
  }
  O && Be();
  var u = null, d = !1, f = /* @__PURE__ */ aa(() => {
    var v = n();
    return Nn(v) ? v : v == null ? [] : An(v);
  });
  je(() => {
    var v = N(f), h = v.length;
    if (d && h === 0)
      return;
    d = h === 0;
    let p = !1;
    if (O) {
      var w = (
        /** @type {Comment} */
        s.data === wn
      );
      w !== (h === 0) && (s = rn(), ae(s), le(!1), p = !0);
    }
    if (O) {
      for (var b = null, E, y = 0; y < h; y++) {
        if (T.nodeType === 8 && /** @type {Comment} */
        T.data === _n) {
          s = /** @type {Comment} */
          T, p = !0, le(!1);
          break;
        }
        var x = v[y], g = r(x, y);
        E = Yr(
          T,
          i,
          b,
          null,
          x,
          g,
          y,
          o,
          t,
          n
        ), i.items.set(g, E), b = E;
      }
      h > 0 && ae(rn());
    }
    O || Ba(v, i, s, o, t, r, n), a !== null && (h === 0 ? u ? Bt(u) : u = Oe(() => a(s)) : u !== null && at(u, () => {
      u = null;
    })), p && le(!0), N(f);
  }), O && (s = T);
}
function Ba(e, t, n, r, o, a, s) {
  var ne, Z, ve, Y;
  var i = (o & To) !== 0, l = (o & (mn | yn)) !== 0, c = e.length, u = t.items, d = t.first, f = d, v, h = null, p, w = [], b = [], E, y, x, g;
  if (i)
    for (g = 0; g < c; g += 1)
      E = e[g], y = a(E, g), x = u.get(y), x !== void 0 && ((ne = x.a) == null || ne.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(x));
  for (g = 0; g < c; g += 1) {
    if (E = e[g], y = a(E, g), x = u.get(y), x === void 0) {
      var _ = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = Yr(
        _,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        y,
        g,
        r,
        o,
        s
      ), u.set(y, h), w = [], b = [], f = h.next;
      continue;
    }
    if (l && $a(x, E, g, o), x.e.f & Se && (Bt(x.e), i && ((Z = x.a) == null || Z.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(x))), x !== f) {
      if (v !== void 0 && v.has(x)) {
        if (w.length < b.length) {
          var A = b[0], m;
          h = A.prev;
          var L = w[0], $ = w[w.length - 1];
          for (m = 0; m < w.length; m += 1)
            Yn(w[m], A, n);
          for (m = 0; m < b.length; m += 1)
            v.delete(b[m]);
          Ie(t, L.prev, $.next), Ie(t, h, L), Ie(t, $, A), f = A, h = $, g -= 1, w = [], b = [];
        } else
          v.delete(x), Yn(x, f, n), Ie(t, x.prev, x.next), Ie(t, x, h === null ? t.first : h.next), Ie(t, h, x), h = x;
        continue;
      }
      for (w = [], b = []; f !== null && f.k !== y; )
        f.e.f & Se || (v ?? (v = /* @__PURE__ */ new Set())).add(f), b.push(f), f = f.next;
      if (f === null)
        continue;
      x = f;
    }
    w.push(x), h = x, f = x.next;
  }
  if (f !== null || v !== void 0) {
    for (var M = v === void 0 ? [] : An(v); f !== null; )
      f.e.f & Se || M.push(f), f = f.next;
    var H = M.length;
    if (H > 0) {
      var z = o & vr && c === 0 ? n : null;
      if (i) {
        for (g = 0; g < H; g += 1)
          (ve = M[g].a) == null || ve.measure();
        for (g = 0; g < H; g += 1)
          (Y = M[g].a) == null || Y.fix();
      }
      Da(t, M, z, u);
    }
  }
  i && ut(() => {
    var $e;
    if (p !== void 0)
      for (x of p)
        ($e = x.a) == null || $e.apply();
  }), k.first = t.first && t.first.e, k.last = h && h.e;
}
function $a(e, t, n, r) {
  r & mn && nn(e.v, t), r & yn ? nn(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Yr(e, t, n, r, o, a, s, i, l, c) {
  var u = (l & mn) !== 0, d = (l & ko) === 0, f = u ? d ? /* @__PURE__ */ zt(o) : Q(o) : o, v = l & yn ? Q(s) : s, h = {
    i: v,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = Oe(() => i(e, f, v, c), O), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function Yn(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(a)
    );
    o.before(a), a = s;
  }
}
function Ie(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Qt(e, t, n, r, o) {
  var a = e, s = "", i;
  je(() => {
    if (s === (s = t() ?? "")) {
      O && Be();
      return;
    }
    i !== void 0 && (de(i), i = void 0), s !== "" && (i = Oe(() => {
      if (O) {
        T.data;
        for (var l = Be(), c = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ _e(l);
        if (l === null)
          throw qt(), Je;
        ce(T, c), a = ae(l);
        return;
      }
      var u = s + "";
      u = `<svg>${u}</svg>`;
      var d = On(u);
      for (d = /** @type {Element} */
      /* @__PURE__ */ V(d), ce(
        /** @type {TemplateNode} */
        /* @__PURE__ */ V(d),
        /** @type {TemplateNode} */
        d.lastChild
      ); /* @__PURE__ */ V(d); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ V(d)
        );
    }));
  });
}
function Ha(e, t, ...n) {
  var r = e, o = te, a;
  je(() => {
    o !== (o = t()) && (a && (de(a), a = null), a = Oe(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, ct), O && (r = T);
}
function Wa(e, t, n) {
  O && Be();
  var r = e, o, a;
  je(() => {
    o !== (o = t()) && (a && (at(a), a = null), o && (a = Oe(() => n(r, o))));
  }, ct), O && (r = T);
}
function Ke(e, t) {
  ut(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const o = document.createElement("style");
      o.id = t.hash, o.textContent = t.code, r.appendChild(o);
    }
  });
}
function Qr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Qr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Fa() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Qr(e)) && (r && (r += " "), r += t);
  return r;
}
function Va(e) {
  return typeof e == "object" ? Fa(e) : e ?? "";
}
const Qn = [...` 	
\r\f \v\uFEFF`];
function za(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var a = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || Qn.includes(r[s - 1])) && (i === r.length || Qn.includes(r[i])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(i + 1) : s = i;
        }
  }
  return r === "" ? null : r;
}
function Tn(e, t, n, r, o, a) {
  var s = e.__className;
  if (O || s !== n) {
    var i = za(n, r, a);
    (!O || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = n;
  } else if (a) {
    o ?? (o = {});
    for (var l in a) {
      var c = !!a[l];
      c !== !!o[l] && e.classList.toggle(l, c);
    }
  }
  return a;
}
const St = Symbol("class");
function qa(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function bt(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  O && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Wo] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Xr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function cn(e, t, n, r, o = !1, a = !1, s = !1) {
  let i = O && a;
  i && le(!1);
  var l = t || {}, c = e.tagName === "OPTION";
  for (var u in t)
    u in n || (n[u] = null);
  n.class ? n.class = Va(n.class) : (r || n[St]) && (n.class = null);
  var d = Xr(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const y in n) {
    let x = n[y];
    if (c && y === "value" && x == null) {
      e.value = e.__value = "", l[y] = x;
      continue;
    }
    var v = l[y];
    if (!(x === v && y !== "class")) {
      l[y] = x;
      var h = y[0] + y[1];
      if (h !== "$$") {
        if (h === "on") {
          const g = {}, _ = "$$" + y;
          let A = y.slice(2);
          var p = Pa(A);
          if (Aa(A) && (A = A.slice(0, -7), g.capture = !0), !p && v) {
            if (x != null) continue;
            e.removeEventListener(A, l[_], g), l[_] = null;
          }
          if (x != null)
            if (p)
              e[`__${A}`] = x, jr([A]);
            else {
              let m = function(L) {
                l[y].call(this, L);
              };
              l[_] = ka(A, e, m, g);
            }
          else p && (e[`__${A}`] = void 0);
        } else if (y === "class") {
          var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          Tn(e, w, x, r, t == null ? void 0 : t[St], n[St]);
        } else if (y === "style" && x != null)
          e.style.cssText = x + "";
        else if (y === "autofocus")
          Ta(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!a && (y === "__value" || y === "value" && x != null))
          e.value = e.__value = x;
        else if (y === "selected" && c)
          qa(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var b = y;
          o || (b = Ca(b));
          var E = b === "defaultValue" || b === "defaultChecked";
          if (x == null && !a && !E)
            if (f[y] = null, b === "value" || b === "checked") {
              let g = (
                /** @type {HTMLInputElement} */
                e
              );
              const _ = t === void 0;
              if (b === "value") {
                let A = g.defaultValue;
                g.removeAttribute(b), g.defaultValue = A, g.value = g.__value = _ ? A : null;
              } else {
                let A = g.defaultChecked;
                g.removeAttribute(b), g.defaultChecked = A, g.checked = _ ? A : !1;
              }
            } else
              e.removeAttribute(y);
          else E || d.includes(b) && (a || typeof x != "string") ? e[b] = x : typeof x != "function" && bt(e, b, x);
        }
        y === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && le(!0), l;
}
var Xn = /* @__PURE__ */ new Map();
function Xr(e) {
  var t = Xn.get(e.nodeName);
  if (t) return t;
  Xn.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Vo(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = wr(r);
  }
  return t;
}
function Pe(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
const Ga = () => performance.now(), ge = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Ga(),
  tasks: /* @__PURE__ */ new Set()
};
function Zr() {
  const e = ge.now();
  ge.tasks.forEach((t) => {
    t.c(e) || (ge.tasks.delete(t), t.f());
  }), ge.tasks.size !== 0 && ge.tick(Zr);
}
function Jr(e) {
  let t;
  return ge.tasks.size === 0 && ge.tick(Zr), {
    promise: new Promise((n) => {
      ge.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      ge.tasks.delete(t);
    }
  };
}
function Nt(e, t) {
  qr(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function ja(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Zn(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [o, a] = r.split(":");
    if (!o || a === void 0) break;
    const s = ja(o.trim());
    t[s] = a.trim();
  }
  return t;
}
const Ua = (e) => e;
function Ka(e, t, n, r) {
  var o = (e & Bo) !== 0, a = "both", s, i = t.inert, l = t.style.overflow, c, u;
  function d() {
    var w = R, b = k;
    me(null), ye(null);
    try {
      return s ?? (s = n()(t, (r == null ? void 0 : r()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      me(w), ye(b);
    }
  }
  var f = {
    is_global: o,
    in() {
      t.inert = i, Nt(t, "introstart"), c = un(t, d(), u, 1, () => {
        Nt(t, "introend"), c == null || c.abort(), c = s = void 0, t.style.overflow = l;
      });
    },
    out(w) {
      t.inert = !0, Nt(t, "outrostart"), u = un(t, d(), c, 0, () => {
        Nt(t, "outroend"), w == null || w();
      });
    },
    stop: () => {
      c == null || c.abort(), u == null || u.abort();
    }
  }, v = (
    /** @type {Effect} */
    k
  );
  if ((v.transitions ?? (v.transitions = [])).push(f), sn) {
    var h = o;
    if (!h) {
      for (var p = (
        /** @type {Effect | null} */
        v.parent
      ); p && p.f & ct; )
        for (; (p = p.parent) && !(p.f & Ft); )
          ;
      h = !p || (p.f & mr) !== 0;
    }
    h && Ut(() => {
      ot(() => f.in());
    });
  }
}
function un(e, t, n, r, o) {
  var a = r === 1;
  if (Xe(t)) {
    var s, i = !1;
    return ut(() => {
      if (!i) {
        var w = t({ direction: a ? "in" : "out" });
        s = un(e, w, n, r, o);
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
  if (n == null || n.deactivate(), !(t != null && t.duration))
    return o(), {
      abort: te,
      deactivate: te,
      reset: te,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: u, easing: d = Ua } = t;
  var f = [];
  if (a && n === void 0 && (u && u(0, 1), c)) {
    var v = Zn(c(0, 1));
    f.push(v, v);
  }
  var h = () => 1 - r, p = e.animate(f, { duration: l });
  return p.onfinish = () => {
    var w = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var b = r - w, E = (
      /** @type {number} */
      t.duration * Math.abs(b)
    ), y = [];
    if (E > 0) {
      var x = !1;
      if (c)
        for (var g = Math.ceil(E / 16.666666666666668), _ = 0; _ <= g; _ += 1) {
          var A = w + b * d(_ / g), m = Zn(c(A, 1 - A));
          y.push(m), x || (x = m.overflow === "hidden");
        }
      x && (e.style.overflow = "hidden"), h = () => {
        var L = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return w + b * d(L / E);
      }, u && Jr(() => {
        if (p.playState !== "running") return !1;
        var L = h();
        return u(L, 1 - L), !0;
      });
    }
    p = e.animate(y, { duration: E, fill: "forwards" }), p.onfinish = () => {
      h = () => r, u == null || u(r, 1 - r), o();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = te);
    },
    deactivate: () => {
      o = te;
    },
    reset: () => {
      r === 0 && (u == null || u(1, 0));
    },
    t: () => h()
  };
}
function Jn(e, t) {
  return e === t || (e == null ? void 0 : e[et]) === t;
}
function Kt(e = {}, t, n, r) {
  return Ut(() => {
    var o, a;
    return Cn(() => {
      o = a, a = [], ot(() => {
        e !== n(...a) && (t(e, ...a), o && Jn(n(...o), e) && t(null, ...o));
      });
    }), () => {
      ut(() => {
        a && Jn(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function kn(e) {
  X === null && Na(), Ve(() => {
    const t = ot(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function eo(e, t, n) {
  if (e == null)
    return t(void 0), te;
  const r = ot(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Qe = [];
function to(e, t = te) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(i) {
    if (Ar(e, i) && (e = i, n)) {
      const l = !Qe.length;
      for (const c of r)
        c[1](), Qe.push(c, e);
      if (l) {
        for (let c = 0; c < Qe.length; c += 2)
          Qe[c][0](Qe[c + 1]);
        Qe.length = 0;
      }
    }
  }
  function a(i) {
    o(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, l = te) {
    const c = [i, l];
    return r.add(c), r.size === 1 && (n = t(o, a) || te), i(
      /** @type {T} */
      e
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: s };
}
function Ya(e) {
  let t;
  return eo(e, (n) => t = n)(), t;
}
let At = !1, dn = Symbol();
function dl(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ zt(void 0),
    unsubscribe: te
  });
  if (r.store !== e && !(dn in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = te;
    else {
      var o = !0;
      r.unsubscribe = eo(e, (a) => {
        o ? r.source.v = a : D(r.source, a);
      }), o = !1;
    }
  return e && dn in n ? Ya(e) : N(r.source);
}
function Qa(e, t) {
  return e.set(t), t;
}
function Xa() {
  const e = {};
  function t() {
    ya(() => {
      for (var n in e)
        e[n].unsubscribe();
      gt(e, dn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Za(e) {
  var t = At;
  try {
    return At = !1, [e(), At];
  } finally {
    At = t;
  }
}
const Ja = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function es(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Ja
  );
}
const ts = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Xe(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Xe(o) && (o = o());
      const a = Ce(o, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Xe(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Ce(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === et || t === bn) return !1;
    for (let n of e.props)
      if (Xe(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Xe(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function ns(...e) {
  return new Proxy({ props: e }, ts);
}
function C(e, t, n, r) {
  var g;
  var o = (n & Ro) !== 0, a = !0, s = (n & Mo) !== 0, i = (n & Do) !== 0, l = !1, c;
  s ? [c, l] = Za(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var u = et in e || bn in e, d = s && (((g = Ce(e, t)) == null ? void 0 : g.set) ?? (u && t in e && ((_) => e[t] = _))) || void 0, f = (
    /** @type {V} */
    r
  ), v = !0, h = !1, p = () => (h = !0, v && (v = !1, i ? f = ot(
    /** @type {() => V} */
    r
  ) : f = /** @type {V} */
  r), f);
  c === void 0 && r !== void 0 && (d && a && Zo(), c = p(), d && d(c));
  var w;
  if (w = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? p() : (v = !0, h = !1, _);
  }, !(n & Io))
    return w;
  if (d) {
    var b = e.$$legacy;
    return function(_, A) {
      return arguments.length > 0 ? ((!A || b || l) && d(A ? w() : _), _) : w();
    };
  }
  var E = !1, y = /* @__PURE__ */ zt(c), x = /* @__PURE__ */ U(() => {
    var _ = w(), A = N(y);
    return E ? (E = !1, A) : y.v = _;
  });
  return o || (x.equals = En), function(_, A) {
    if (arguments.length > 0) {
      const m = A ? N(x) : s ? pe(_) : _;
      return x.equals(m) || (E = !0, D(y, m), h && f !== void 0 && (f = m), ot(() => N(x))), _;
    }
    return N(x);
  };
}
function rs(e) {
  return new os(e);
}
var Ae, re;
class os {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    He(this, Ae);
    /** @type {Record<string, any>} */
    He(this, re);
    var a;
    var n = /* @__PURE__ */ new Map(), r = (s, i) => {
      var l = /* @__PURE__ */ zt(i);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return N(n.get(i) ?? r(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === bn ? !0 : (N(n.get(i) ?? r(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, l) {
          return D(n.get(i) ?? r(i, l), l), Reflect.set(s, i, l);
        }
      }
    );
    ft(this, re, (t.hydrate ? Ra : Ur)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && S(), ft(this, Ae, o.$$events);
    for (const s of Object.keys(I(this, re)))
      s === "$set" || s === "$destroy" || s === "$on" || gt(this, s, {
        get() {
          return I(this, re)[s];
        },
        /** @param {any} value */
        set(i) {
          I(this, re)[s] = i;
        },
        enumerable: !0
      });
    I(this, re).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, I(this, re).$destroy = () => {
      Ia(I(this, re));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    I(this, re).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    I(this, Ae)[t] = I(this, Ae)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return I(this, Ae)[t].push(r), () => {
      I(this, Ae)[t] = I(this, Ae)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    I(this, re).$destroy();
  }
}
Ae = new WeakMap(), re = new WeakMap();
let no;
typeof HTMLElement == "function" && (no = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    se(this, "$$ctor");
    /** Slots */
    se(this, "$$s");
    /** @type {any} The Svelte component instance */
    se(this, "$$c");
    /** Whether or not the custom element is connected */
    se(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    se(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    se(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    se(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    se(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    se(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    se(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (a) => {
          const s = document.createElement("slot");
          o !== "default" && (s.name = o), W(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = as(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = Ct(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = rs({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = wa(() => {
        Cn(() => {
          var o;
          this.$$r = !0;
          for (const a of kt(this.$$c)) {
            if (!((o = this.$$p_d[a]) != null && o.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Ct(
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
      for (const o in this.$$l)
        for (const a of this.$$l[o]) {
          const s = this.$$c.$on(o, a);
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
  attributeChangedCallback(t, n, r) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ct(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return kt(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Ct(e, t, n, r) {
  var a;
  const o = (a = n[e]) == null ? void 0 : a.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (o) {
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
    switch (o) {
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
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function be(e, t, n, r, o, a) {
  let s = class extends no {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return kt(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return kt(t).forEach((i) => {
    gt(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(l) {
        var d;
        l = Ct(i, l, t), this.$$d[i] = l;
        var c = this.$$c;
        if (c) {
          var u = (d = Ce(c, i)) == null ? void 0 : d.get;
          u ? c[i] = l : c.$set({ [i]: l });
        }
      }
    });
  }), r.forEach((i) => {
    gt(s.prototype, i, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function er(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function ss(e) {
  return e;
}
function is(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function fn(e, t) {
  if (e === t || e !== e) return () => e;
  const n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const r = (
      /** @type {Array<any>} */
      t.map((o, a) => fn(
        /** @type {Array<any>} */
        e[a],
        o
      ))
    );
    return (o) => r.map((a) => a(o));
  }
  if (n === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (er(e) && er(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (l) => new Date(a + l * i);
    }
    const r = Object.keys(t), o = {};
    return r.forEach((a) => {
      o[a] = fn(e[a], t[a]);
    }), (a) => {
      const s = {};
      return r.forEach((i) => {
        s[i] = o[i](a);
      }), s;
    };
  }
  if (n === "number") {
    const r = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (o) => e + o * r;
  }
  return () => t;
}
var Ee, tt, wt, We;
const Mn = class Mn {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, n = {}) {
    He(this, Ee, Q(
      /** @type {T} */
      void 0
    ));
    He(this, tt, Q(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    He(this, wt);
    /** @type {import('../internal/client/types').Task | null} */
    He(this, We, null);
    I(this, Ee).v = I(this, tt).v = t, ft(this, wt, n);
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
  static of(t, n) {
    const r = new Mn(t(), n);
    return Cn(() => {
      r.set(t());
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
  set(t, n) {
    var d;
    D(I(this, tt), t);
    let {
      delay: r = 0,
      duration: o = 400,
      easing: a = ss,
      interpolate: s = fn
    } = { ...I(this, wt), ...n };
    if (o === 0)
      return (d = I(this, We)) == null || d.abort(), D(I(this, Ee), t), Promise.resolve();
    const i = ge.now() + r;
    let l, c = !1, u = I(this, We);
    return ft(this, We, Jr((f) => {
      if (f < i)
        return !0;
      if (!c) {
        c = !0;
        const h = I(this, Ee).v;
        l = s(h, t), typeof o == "function" && (o = o(h, t)), u == null || u.abort();
      }
      const v = f - i;
      return v > /** @type {number} */
      o ? (D(I(this, Ee), t), !1) : (D(I(this, Ee), l(a(v / /** @type {number} */
      o))), !0);
    })), I(this, We).promise;
  }
  get current() {
    return N(I(this, Ee));
  }
  get target() {
    return N(I(this, tt));
  }
  set target(t) {
    this.set(t);
  }
};
Ee = new WeakMap(), tt = new WeakMap(), wt = new WeakMap(), We = new WeakMap();
let Ze = Mn;
const ls = (e) => e;
function cs(e, { delay: t = 0, duration: n = 400, easing: r = ls } = {}) {
  const o = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (a) => `opacity: ${a * o}`
  };
}
var us = /* @__PURE__ */ Re('<div class="state-labels__label svelte-dbcm70"> </div>'), ds = /* @__PURE__ */ Re('<div aria-hidden="true"></div>');
const fs = {
  hash: "svelte-dbcm70",
  code: `.state-labels.svelte-dbcm70 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-dbcm70 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-dbcm70 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-dbcm70 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-dbcm70 .state-labels__label:where(.svelte-dbcm70) {-webkit-text-stroke:2px #f1f1f1;paint-order:stroke fill;}`
};
function ro(e, t) {
  fe(t, !0), Ke(e, fs);
  let n = C(t, "labels", 7), r = C(t, "overlayLabels", 7, !1);
  var o = ds();
  let a;
  return qe(o, 21, n, ze, (s, i) => {
    var l = mt(), c = rt(l);
    Ma(c, () => N(i).name, (u) => {
      var d = us(), f = F(d, !0);
      B(d), Le(
        (v) => {
          Pe(d, "left", N(i).left + "%"), Pe(d, "top", N(i).top + "%"), Pe(d, "width", N(i).width + "%"), Pe(d, "margin-left", v), yt(f, N(i).name);
        },
        [
          () => Math.round(0 - N(i).width / 2) + "%"
        ]
      ), Ka(3, d, () => cs, () => ({ duration: 1e3 })), W(u, d);
    }), W(s, l);
  }), B(o), Le(() => a = Tn(o, 1, "state-labels svelte-dbcm70", null, a, { "state-labels--overlaid": r() })), W(e, o), he({
    get labels() {
      return n();
    },
    set labels(s) {
      n(s), S();
    },
    get overlayLabels() {
      return r();
    },
    set overlayLabels(s = !1) {
      r(s), S();
    }
  });
}
be(ro, { labels: {}, overlayLabels: {} }, [], [], !0);
var hs = /* @__PURE__ */ Re('<span class="accessible-hide svelte-ivafae"><!></span>');
const vs = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function oo(e, t) {
  fe(t, !0), Ke(e, vs);
  let n = C(t, "children", 7);
  var r = hs(), o = F(r);
  return Ha(o, () => n() ?? te), B(r), W(e, r), he({
    get children() {
      return n();
    },
    set children(a) {
      n(a), S();
    }
  });
}
be(oo, { children: {} }, [], [], !0);
function ps(e, t) {
  D(t, pe(e.target.dataset.id));
}
function gs(e, t) {
  var r;
  const n = e.target.dataset.id;
  (r = t()) == null || r({ code: n, clientX: null, clientY: null });
}
function xs(e, t) {
  N(t) === e.target.dataset.id && D(t, null);
}
var ms = /* @__PURE__ */ Re("<li><button> </button></li>"), ys = /* @__PURE__ */ Re("<li> <ul></ul></li>"), ws = /* @__PURE__ */ Re('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>');
const _s = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function ao(e, t) {
  fe(t, !0), Ke(e, _s);
  let n = C(t, "groups", 7), r = C(t, "layout", 7), o = C(t, "onChange", 7), a = C(t, "onClick", 7), s = Me(null);
  Ve(() => {
    var l;
    (l = o()) == null || l(N(s));
  });
  let i = /* @__PURE__ */ U(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((l) => r().positions[l]).map((l) => n().find((c) => c.name === l)).map((l) => ({
    ...l,
    hexes: [...l.hexes].sort((c, u) => c.coord[0] + c.coord[1] * 1e3 - (u.coord[0] + u.coord[1] * 1e3))
  })));
  return oo(e, {
    children: (l, c) => {
      var u = ws();
      u.__click = [gs, a], u.__focusin = [ps, s], u.__focusout = [xs, s], qe(u, 21, () => N(i), ze, (d, f) => {
        var v = ys(), h = F(v), p = ee(h);
        qe(p, 21, () => N(f).hexes, ze, (w, b) => {
          var E = ms(), y = F(E), x = F(y, !0);
          B(y), B(E), Le(() => {
            bt(y, "data-id", N(b).id), yt(x, N(b).name);
          }), W(w, E);
        }), B(p), B(v), Le(() => yt(h, `${N(f).name ?? ""} `)), W(d, v);
      }), B(u), W(l, u);
    },
    $$slots: { default: !0 }
  }), he({
    get groups() {
      return n();
    },
    set groups(l) {
      n(l), S();
    },
    get layout() {
      return r();
    },
    set layout(l) {
      r(l), S();
    },
    get onChange() {
      return o();
    },
    set onChange(l) {
      o(l), S();
    },
    get onClick() {
      return a();
    },
    set onClick(l) {
      a(l), S();
    }
  });
}
jr(["click", "focusin", "focusout"]);
be(
  ao,
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
function bs(e) {
  return Object.entries(e).reduce((t, [n, r]) => (t[r] = n, t), {});
}
const tr = 16;
function Rn(e = [0, 0], t = "px") {
  const n = e[0] * (tr * Math.sqrt(3)), r = e[1] * 1.5 * tr;
  return [n, r].map((o) => `${Math.round(o)}${t}`);
}
var Ns = /* @__PURE__ */ Ue('<path style="color:#000000;fill:#000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:#ffffff;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), As = /* @__PURE__ */ Ue('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:#000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const Es = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function Lt(e, t) {
  fe(t, !0), Ke(e, Es);
  let n = C(t, "groups", 7), r = C(t, "id", 7), o = C(t, "layout", 7), a = C(t, "type", 7, "focus"), s = /* @__PURE__ */ U(() => n().flatMap((d) => d.hexes.map((f) => ({ ...f, group: d.name }))).sort((d, f) => d.index - f.index)), i = /* @__PURE__ */ U(() => {
    if (!r())
      return;
    const d = N(s).find((y) => y.id === r()), [f, v] = o().positions[d.group], [h, p] = d.coord, w = p % 2 ? 0.5 : 0, [b, E] = Rn([f + h + w, v + p], "").map(Number);
    return [b - 3, E - 3];
  });
  var l = mt(), c = rt(l);
  {
    var u = (d) => {
      var f = As(), v = F(f);
      {
        var h = (p) => {
          var w = Ns();
          qn(), W(p, w);
        };
        Fe(v, (p) => {
          a() === "focus" && p(h);
        });
      }
      qn(), B(f), Le((p) => bt(f, "transform", p), [
        () => `translate(${N(i).join(" ")}) scale(0.95)`
      ]), W(d, f);
    };
    Fe(c, (d) => {
      N(i) && d(u);
    });
  }
  return W(e, l), he({
    get groups() {
      return n();
    },
    set groups(d) {
      n(d), S();
    },
    get id() {
      return r();
    },
    set id(d) {
      r(d), S();
    },
    get layout() {
      return o();
    },
    set layout(d) {
      o(d), S();
    },
    get type() {
      return a();
    },
    set type(d = "focus") {
      a(d), S();
    }
  });
}
be(Lt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var Ps = typeof global == "object" && global && global.Object === Object && global, Ss = typeof self == "object" && self && self.Object === Object && self, so = Ps || Ss || Function("return this")(), $t = so.Symbol, io = Object.prototype, Cs = io.hasOwnProperty, Ls = io.toString, ht = $t ? $t.toStringTag : void 0;
function Os(e) {
  var t = Cs.call(e, ht), n = e[ht];
  try {
    e[ht] = void 0;
    var r = !0;
  } catch {
  }
  var o = Ls.call(e);
  return r && (t ? e[ht] = n : delete e[ht]), o;
}
var Ts = Object.prototype, ks = Ts.toString;
function Rs(e) {
  return ks.call(e);
}
var Is = "[object Null]", Ms = "[object Undefined]", nr = $t ? $t.toStringTag : void 0;
function Ds(e) {
  return e == null ? e === void 0 ? Ms : Is : nr && nr in Object(e) ? Os(e) : Rs(e);
}
function Bs(e) {
  return e != null && typeof e == "object";
}
var $s = "[object Symbol]";
function Hs(e) {
  return typeof e == "symbol" || Bs(e) && Ds(e) == $s;
}
var Ws = /\s/;
function Fs(e) {
  for (var t = e.length; t-- && Ws.test(e.charAt(t)); )
    ;
  return t;
}
var Vs = /^\s+/;
function zs(e) {
  return e && e.slice(0, Fs(e) + 1).replace(Vs, "");
}
function hn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var rr = NaN, qs = /^[-+]0x[0-9a-f]+$/i, Gs = /^0b[01]+$/i, js = /^0o[0-7]+$/i, Us = parseInt;
function or(e) {
  if (typeof e == "number")
    return e;
  if (Hs(e))
    return rr;
  if (hn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zs(e);
  var n = Gs.test(e);
  return n || js.test(e) ? Us(e.slice(2), n ? 2 : 8) : qs.test(e) ? rr : +e;
}
var Xt = function() {
  return so.Date.now();
}, Ks = "Expected a function", Ys = Math.max, Qs = Math.min;
function Xs(e, t, n) {
  var r, o, a, s, i, l, c = 0, u = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Ks);
  t = or(t) || 0, hn(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? Ys(or(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
  function v(_) {
    var A = r, m = o;
    return r = o = void 0, c = _, s = e.apply(m, A), s;
  }
  function h(_) {
    return c = _, i = setTimeout(b, t), u ? v(_) : s;
  }
  function p(_) {
    var A = _ - l, m = _ - c, L = t - A;
    return d ? Qs(L, a - m) : L;
  }
  function w(_) {
    var A = _ - l, m = _ - c;
    return l === void 0 || A >= t || A < 0 || d && m >= a;
  }
  function b() {
    var _ = Xt();
    if (w(_))
      return E(_);
    i = setTimeout(b, p(_));
  }
  function E(_) {
    return i = void 0, f && r ? v(_) : (r = o = void 0, s);
  }
  function y() {
    i !== void 0 && clearTimeout(i), c = 0, r = l = o = i = void 0;
  }
  function x() {
    return i === void 0 ? s : E(Xt());
  }
  function g() {
    var _ = Xt(), A = w(_);
    if (r = arguments, o = this, l = _, A) {
      if (i === void 0)
        return h(l);
      if (d)
        return clearTimeout(i), i = setTimeout(b, t), v(l);
    }
    return i === void 0 && (i = setTimeout(b, t)), s;
  }
  return g.cancel = y, g.flush = x, g;
}
function Zs({ isInteractive: e = !1, onClick: t, onHover: n }) {
  if (!e)
    return {};
  const r = Xs(n, 10), o = ({ target: i, clientX: l, clientY: c }) => {
    var d;
    const u = (d = i == null ? void 0 : i.dataset) == null ? void 0 : d.id;
    !u || !t || t({ code: u, clientX: l, clientY: c });
  }, a = (i) => {
    const l = i.target, { clientX: c, clientY: u } = i, d = l.dataset.id;
    l.nodeName !== "polygon" || !d || r({ code: d, clientX: c, clientY: u });
  }, s = (i) => {
    r({ code: null });
  };
  return {
    onblur: s,
    onmouseout: s,
    onmouseover: a,
    onclick: o
  };
}
var Js = /* @__PURE__ */ Ue('<g><text> </text><text class="hexlabels__text svelte-18lue6v"> </text></g>'), ei = /* @__PURE__ */ Ue('<g class="hexlabels svelte-18lue6v"></g>');
const ti = {
  hash: "svelte-18lue6v",
  code: ".hexlabels.svelte-18lue6v {pointer-events:none;}.hexlabels__text.svelte-18lue6v {font-size:12px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function lo(e, t) {
  fe(t, !0), Ke(e, ti);
  let n = C(t, "hexes", 7), r = C(t, "allocations", 7), o = C(t, "certainties", 7), a = C(t, "labelsToShow", 23, () => ({})), s = C(t, "showElectorateLabels", 7, !1), i = /* @__PURE__ */ U(() => s() ? n() : n().filter(({ id: c }) => a()[c]));
  var l = ei();
  return qe(l, 21, () => N(i), ze, (c, u) => {
    let d = () => N(u).id, f = () => N(u).coordPx, v = () => N(u).shortName;
    var h = Js(), p = F(h);
    let w;
    var b = F(p, !0);
    B(p);
    var E = ee(p), y = F(E, !0);
    B(E), B(h), Le(
      (x) => {
        bt(h, "transform", x), w = Tn(p, 0, "hexlabels__text svelte-18lue6v", null, w, {
          "hexlabels__text--allocation": r()[d()]
        }), Pe(p, "stroke", `var(--u-${r()[d()]})`), Pe(p, "stroke-width", "3"), Pe(p, "opacity", r()[d()] && !o()[d()] ? 1 : 0), yt(b, v()), Pe(E, "fill", r()[d()] && o()[d()] ? "white" : "black"), yt(y, v());
      },
      [
        () => `translate(${f().join(" ")}) rotate(-30) translate(0 3)`
      ]
    ), W(c, h);
  }), B(l), W(e, l), he({
    get hexes() {
      return n();
    },
    set hexes(c) {
      n(c), S();
    },
    get allocations() {
      return r();
    },
    set allocations(c) {
      r(c), S();
    },
    get certainties() {
      return o();
    },
    set certainties(c) {
      o(c), S();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(c = {}) {
      a(c), S();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(c = !1) {
      s(c), S();
    }
  });
}
be(
  lo,
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
var ni = /* @__PURE__ */ Ue('<g><g class="group-hexes svelte-ra45qz"><!></g><g class="group-outline group-outline__under svelte-ra45qz"><!></g></g>'), ri = /* @__PURE__ */ Ue('<g><g class="group-hex-strokes svelte-ra45qz"><!></g><!></g>'), oi = /* @__PURE__ */ Ue("<g><!><!></g>");
const ai = {
  hash: "svelte-ra45qz",
  code: `.group.svelte-ra45qz:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-ra45qz {display:none;}.group--hidden.svelte-ra45qz {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-ra45qz,
.group-outline.svelte-ra45qz {pointer-events:none;}.group.svelte-ra45qz .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-ra45qz .hex-outline {fill:none;stroke:var(--c-stateOutline);stroke-width:1.5px;transition:opacity 0.5s, stroke 0.5s;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-ra45qz:not(.group--has-focuses) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:var(--c-emptyStateOutline);}.group--map-is-full.svelte-ra45qz:not(.group--has-focuses) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:transparent;}.group-hexes.svelte-ra45qz .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-ra45qz .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-ra45qz .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-ra45qz .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-ra45qz .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-ra45qz .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-ra45qz .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-ra45qz .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-ra45qz .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-ra45qz .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-ra45qz .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-ra45qz .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-ra45qz .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-ra45qz .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-ra45qz .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-nullBorder);stroke-width:1.5px;}.group--map-is-empty.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex {fill:var(--c-empty);stroke:var(--c-emptyBorder);stroke-width:1px;}.group-hex-strokes.svelte-ra45qz .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-ra45qz .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filledBorder);stroke-width:1.5px;}.group-hex-strokes.svelte-ra45qz .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--has-focuses.svelte-ra45qz:not(.group--map-is-empty) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:#60646c;}.group--is-outline.svelte-ra45qz .hex {stroke:white !important;fill:#f1f1f1;stroke-width:1.5 !important;}.group--is-outline.svelte-ra45qz .hex-outline {stroke:#cdcbcb !important;}`
};
function co(e, t) {
  fe(t, !0), Ke(e, ai);
  let n = C(t, "groups", 7), r = C(t, "isStaticLayout", 7), o = C(t, "layout", 7), a = C(t, "allocations", 7), s = C(t, "focuses", 7), i = C(t, "certainties", 7), l = C(t, "showElectorateLabels", 7), c = C(t, "showFocusedElectorateLabels", 7), u = C(t, "labelsToShow", 7), d = C(t, "isOutlineOnly", 7, !1), f = Me(void 0), v = /* @__PURE__ */ U(() => {
    const g = Object.values(a());
    return g.length !== 0 && g.some(Boolean);
  }), h = /* @__PURE__ */ U(() => {
    const g = Object.values(a());
    return g.length !== 0 && g.every(Boolean);
  }), p = /* @__PURE__ */ U(() => Object.values(s()).some(Boolean)), w = /* @__PURE__ */ U(() => {
    var g;
    return Array.from(((g = N(f)) == null ? void 0 : g.querySelectorAll("polygon.hex")) || []).filter((_) => _ instanceof SVGPolygonElement);
  });
  Ve(() => {
    const g = { ...a() }, _ = s(), A = i();
    N(w).forEach((m) => {
      const L = m.dataset.id;
      if (!L)
        return;
      const $ = g[L] || null;
      m.dataset.allocation = $;
      const M = N(p) ? _[L] || !1 : !0;
      m.dataset.focused = M;
      const H = A[L] || null;
      m.dataset.certain = H;
    });
  });
  let b = /* @__PURE__ */ U(() => {
    const g = n(), _ = o();
    return g.map((A) => {
      const m = _.positions[A.name], L = m && m[0] !== 1 / 0, $ = Rn(m).join(","), M = N(p) && c() ? s() : u(), H = {
        "data-name": A.name,
        style: `transform: translate(${$})`,
        class: [
          "group",
          !1,
          !L && "group--hidden",
          r() && "group--map-is-static",
          !N(v) && "group--map-is-empty",
          N(h) && "group--map-is-full",
          N(p) && "group--has-focuses",
          d() && "group--is-outline"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: L, labels: M, group: A, groupProps: H };
    });
  });
  var E = oi(), y = F(E);
  qe(y, 17, () => N(b), ze, (g, _) => {
    let A = () => N(_).groupProps, m = () => N(_).group;
    var L = ni();
    let $;
    var M = F(L), H = F(M);
    Qt(H, () => m().svgHexes), B(M);
    var z = ee(M), ne = F(z);
    Qt(ne, () => m().svgOutline), B(z), B(L), Le(() => $ = cn(L, $, { ...A() }, "svelte-ra45qz", !0)), W(g, L);
  });
  var x = ee(y);
  return qe(x, 17, () => N(b), ze, (g, _) => {
    let A = () => N(_).groupProps, m = () => N(_).isVisible, L = () => N(_).labels, $ = () => N(_).group;
    var M = ri();
    let H;
    var z = F(M), ne = F(z);
    Qt(ne, () => $().svgHexes), B(z);
    var Z = ee(z);
    {
      var ve = (Y) => {
        lo(Y, {
          get hexes() {
            return $().hexes;
          },
          get allocations() {
            return a();
          },
          get certainties() {
            return i();
          },
          get labelsToShow() {
            return L();
          },
          get showElectorateLabels() {
            return l();
          }
        });
      };
      Fe(Z, (Y) => {
        m() && Y(ve);
      });
    }
    B(M), Le(() => H = cn(M, H, { ...A() }, "svelte-ra45qz", !0)), W(g, M);
  }), B(E), Kt(E, (g) => D(f, g), () => N(f)), W(e, E), he({
    get groups() {
      return n();
    },
    set groups(g) {
      n(g), S();
    },
    get isStaticLayout() {
      return r();
    },
    set isStaticLayout(g) {
      r(g), S();
    },
    get layout() {
      return o();
    },
    set layout(g) {
      o(g), S();
    },
    get allocations() {
      return a();
    },
    set allocations(g) {
      a(g), S();
    },
    get focuses() {
      return s();
    },
    set focuses(g) {
      s(g), S();
    },
    get certainties() {
      return i();
    },
    set certainties(g) {
      i(g), S();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(g) {
      l(g), S();
    },
    get showFocusedElectorateLabels() {
      return c();
    },
    set showFocusedElectorateLabels(g) {
      c(g), S();
    },
    get labelsToShow() {
      return u();
    },
    set labelsToShow(g) {
      u(g), S();
    },
    get isOutlineOnly() {
      return d();
    },
    set isOutlineOnly(g = !1) {
      d(g), S();
    }
  });
}
be(
  co,
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
function uo(e, t) {
  fe(t, !0);
  let n = /* @__PURE__ */ es(t, ["$$slots", "$$events", "$$legacy", "$$host"]), r = Me(null);
  kn(() => {
    import(
      /* webpackChunkName: "dynamic-hex-map-arrows" */
      "./HexMapArrows-B-S9VvBc.js"
    ).then((i) => {
      D(r, pe(i.default));
    });
  });
  var o = mt(), a = rt(o);
  {
    var s = (i) => {
      var l = mt(), c = rt(l);
      Wa(c, () => N(r), (u, d) => {
        d(u, ns(() => n));
      }), W(i, l);
    };
    Fe(a, (i) => {
      N(r) && i(s);
    });
  }
  W(e, o), he();
}
be(uo, {}, [], [], !0);
var si = /* @__PURE__ */ Re('<div class="hexmap__labels svelte-ko8kvy"><!></div>'), ii = /* @__PURE__ */ Re('<div class="hexmap svelte-ko8kvy"><div><svg class="svelte-ko8kvy"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const li = {
  hash: "svelte-ko8kvy",
  code: ".hexmap.svelte-ko8kvy {position:relative;width:100%;height:100%;position:relative;}.hexmap__labels.svelte-ko8kvy {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-ko8kvy svg:where(.svelte-ko8kvy) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-ko8kvy {position:relative;margin:0 auto;max-height:100%;}"
};
function fo(e, t) {
  fe(t, !0), Ke(e, li);
  let n = C(t, "config", 23, () => ({})), r = C(t, "layout", 23, () => ({})), o = C(t, "allocations", 23, () => ({})), a = C(t, "focuses", 23, () => ({})), s = C(t, "certainties", 23, () => ({})), i = C(t, "labelsToShow", 23, () => ({})), l = C(t, "showStateLabels", 7, !1), c = C(t, "showElectorateLabels", 7, !1), u = C(t, "showFocusedElectorateLabels", 7, !1), d = C(t, "isStaticLayout", 7, !1), f = C(t, "onClick", 7, ({ code: P }) => {
  }), v = C(t, "onHover", 7, ({ code: P }) => {
  }), h = C(t, "customViewbox", 7, null), p = C(t, "onViewboxChange", 7, ({ newViewbox: P }) => {
  }), w = C(t, "isInteractive", 7, !1), b = C(t, "firstPreferenceArrows", 7, "None"), E = C(t, "selectedElectorate", 7, null), y = Me(void 0), x = Me(0), g = Me(null), _ = Me(null);
  const A = r().viewbox, m = { easing: is, duration: 1100 };
  let L = new Ze(A[0], m), $ = new Ze(A[1], m), M = new Ze(A[2], m), H = new Ze(A[3], m);
  Ve(() => {
    const [P, q, dt, Yt] = h() || r().viewbox;
    L.set(P), $.set(q), M.set(dt), H.set(Yt);
  }), Ve(() => {
    p()(r().viewbox);
  }), kn(() => {
    if (!N(y))
      return;
    const P = N(y).getBoundingClientRect();
    D(x, P.height / P.width);
  });
  let z = /* @__PURE__ */ U(() => Zs({
    isInteractive: w(),
    onClick: f(),
    onHover: (P) => {
      D(_, pe(P.code)), v()(P);
    }
  }));
  var ne = ii(), Z = F(ne);
  let ve;
  var Y = F(Z), $e = ee(F(Y));
  const _o = /* @__PURE__ */ U(() => b() !== "None");
  co($e, {
    get groups() {
      return n().groups;
    },
    get isStaticLayout() {
      return d();
    },
    get layout() {
      return r();
    },
    get allocations() {
      return o();
    },
    get focuses() {
      return a();
    },
    get certainties() {
      return s();
    },
    get showElectorateLabels() {
      return c();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    get labelsToShow() {
      return i();
    },
    get isOutlineOnly() {
      return N(_o);
    }
  });
  var Dn = ee($e);
  Lt(Dn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return N(g);
    },
    get layout() {
      return r();
    },
    type: "focus"
  });
  var Bn = ee(Dn);
  Lt(Bn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return E();
    },
    get layout() {
      return r();
    },
    type: "focus"
  });
  var $n = ee(Bn);
  Lt($n, {
    get groups() {
      return n().groups;
    },
    get id() {
      return N(_);
    },
    get layout() {
      return r();
    },
    type: "hover"
  });
  var bo = ee($n);
  {
    var No = (P) => {
      var q = mt(), dt = rt(q);
      qe(dt, 17, () => n().groups, ze, (Yt, Hn) => {
        uo(Yt, {
          get hexes() {
            return N(Hn).hexes;
          },
          get offset() {
            return r().positions[N(Hn).name];
          },
          get firstPreferenceArrows() {
            return b();
          }
        });
      }), W(P, q);
    };
    Fe(bo, (P) => {
      b() !== "None" && P(No);
    });
  }
  B(Y), Kt(Y, (P) => D(y, P), () => N(y));
  var Ao = ee(Y, 2);
  {
    var Eo = (P) => {
      var q = si(), dt = F(q);
      ro(dt, {
        get labels() {
          return r().labels;
        },
        get overlayLabels() {
          return r().overlayLabels;
        }
      }), B(q), W(P, q);
    };
    Fe(Ao, (P) => {
      l() && P(Eo);
    });
  }
  B(Z);
  var Po = ee(Z, 2);
  {
    var So = (P) => {
      ao(P, {
        get groups() {
          return n().groups;
        },
        get layout() {
          return r();
        },
        onChange: (q) => {
          D(g, pe(q));
        },
        get onClick() {
          return f();
        }
      });
    };
    Fe(Po, (P) => {
      w() && P(So);
    });
  }
  return B(ne), Le(
    (P, q) => {
      ve = cn(
        Z,
        ve,
        {
          class: "hexmap__viz",
          ...N(z),
          [St]: {
            "hexmap__viz--vertical": N(x) <= 1
          }
        },
        "svelte-ko8kvy"
      ), Pe(Z, "aspect-ratio", P), bt(Y, "viewBox", q);
    },
    [
      () => N(x) ? N(x).toFixed(3) : null,
      () => [
        L.current,
        $.current,
        M.current,
        H.current
      ].join(" ")
    ]
  ), W(e, ne), he({
    get config() {
      return n();
    },
    set config(P = {}) {
      n(P), S();
    },
    get layout() {
      return r();
    },
    set layout(P = {}) {
      r(P), S();
    },
    get allocations() {
      return o();
    },
    set allocations(P = {}) {
      o(P), S();
    },
    get focuses() {
      return a();
    },
    set focuses(P = {}) {
      a(P), S();
    },
    get certainties() {
      return s();
    },
    set certainties(P = {}) {
      s(P), S();
    },
    get labelsToShow() {
      return i();
    },
    set labelsToShow(P = {}) {
      i(P), S();
    },
    get showStateLabels() {
      return l();
    },
    set showStateLabels(P = !1) {
      l(P), S();
    },
    get showElectorateLabels() {
      return c();
    },
    set showElectorateLabels(P = !1) {
      c(P), S();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(P = !1) {
      u(P), S();
    },
    get isStaticLayout() {
      return d();
    },
    set isStaticLayout(P = !1) {
      d(P), S();
    },
    get onClick() {
      return f();
    },
    set onClick(P = ({ code: q }) => {
    }) {
      f(P), S();
    },
    get onHover() {
      return v();
    },
    set onHover(P = ({ code: q }) => {
    }) {
      v(P), S();
    },
    get customViewbox() {
      return h();
    },
    set customViewbox(P = null) {
      h(P), S();
    },
    get onViewboxChange() {
      return p();
    },
    set onViewboxChange(P = ({ newViewbox: q }) => {
    }) {
      p(P), S();
    },
    get isInteractive() {
      return w();
    },
    set isInteractive(P = !1) {
      w(P), S();
    },
    get firstPreferenceArrows() {
      return b();
    },
    set firstPreferenceArrows(P = "None") {
      b(P), S();
    },
    get selectedElectorate() {
      return E();
    },
    set selectedElectorate(P = null) {
      E(P), S();
    }
  });
}
be(
  fo,
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
let ci = to({
  allocated: {},
  uncertain: {}
});
const ui = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#949494", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "black" }, di = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", PUP: "#cc8500", Teal: "#0098a6" }, fi = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", PUP: "#f5e7cc" }, ar = {
  c: ui,
  allocated: di,
  uncertain: fi
};
function ho(e, t) {
  fe(t, !0);
  const [n, r] = Xa();
  let o = C(t, "rootEl", 15), a = C(t, "colours", 7, ar);
  Ve(() => {
    const i = a(), l = o();
    if (!l)
      return;
    Qa(ci, {
      allocated: i.allocated,
      uncertain: i.uncertain
    });
    const c = { allocated: "a", uncertain: "u" };
    Object.entries(i).forEach(([u, d]) => {
      const f = c[u] || u;
      Object.entries(d).forEach(([v, h]) => {
        const p = `--${f}-${v}`;
        l.style.setProperty(p, h);
      });
    });
  }), kn(() => {
    o();
  }), Kt(Cr.body, (i) => o(i), () => o());
  var s = he({
    get rootEl() {
      return o();
    },
    set rootEl(i) {
      o(i), S();
    },
    get colours() {
      return a();
    },
    set colours(i = ar) {
      a(i), S();
    }
  });
  return r(), s;
}
be(ho, { rootEl: {}, colours: {} }, [], [], !0);
const hi = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.003006, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 33.75, top: 30.75, width: 8, name: "NT" }, { left: 65.25, top: 21.5, width: 8, name: "QLD" }, { left: 57.75, top: 44.25, width: 8, name: "NSW" }, { left: 67.5, top: 57.75, width: 8, name: "ACT" }, { left: 58, top: 67.25, width: 8, name: "VIC" }, { left: 57.75, top: 86.25, width: 8, name: "TAS" }, { left: 34, top: 48.75, width: 8, name: "SA" }, { left: 24.5, top: 53.25, width: 8, name: "WA" }], overlayLabels: !0 }, vi = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.5, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 71, top: 63.5, width: 8, name: "ACT" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, pi = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, gi = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, xi = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, mi = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, yi = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, wi = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, _i = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, bi = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Ni = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Ai = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Ei = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Pi = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, Si = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, Ci = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, Li = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, Oi = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, Ti = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, vo = {
  COUNTRY: hi,
  EXPLODED: vi,
  EXPLODED_STATES_ONLY: pi,
  GRID: gi,
  ACT: xi,
  NSW: mi,
  NT: yi,
  QLD: wi,
  SA: _i,
  TAS: bi,
  VIC: Ni,
  WA: Ai,
  ACT_NT: Ei,
  NSW_QLD: Pi,
  NSW_VIC: Si,
  QLD_VIC: Ci,
  QLD_WA: Li,
  QLD_NSW_VIC: Oi,
  SA_TAS_WA: Ti
}, ki = 291, Ri = 200, Ii = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park.","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart.","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"River.","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New.","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Banks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lille","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long.","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More.","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Forde","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Corio","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wills","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), In = {
  svgWidth: ki,
  svgHeight: Ri,
  groups: Ii
};
function po(e) {
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    let o = r.defaultValue;
    const a = r.type;
    a === "number" && (o = o ?? 0), a === "boolean" && (o = o ?? !1), t[n] = {
      ...r,
      defaultValue: o
    };
  }), t;
}
const sr = ["number", "boolean", "enum", "string", "custom"];
async function Mi({ schema: e, data: t }) {
  const n = po(e), r = {}, o = Object.entries(n).map(
    async ([a, s]) => {
      const { type: i, key: l, values: c, defaultValue: u, codec: d } = s;
      if (!sr.includes(i))
        throw new Error(
          `Unknown type "${i}", must be one of ${sr}`
        );
      let f = t[l || a];
      if (typeof f > "u") {
        typeof u < "u" && (r[a] = u);
        return;
      }
      if (d && (f = await d.decode(f)), i === "number" && (f = Number(f)), i === "boolean" && (f = Number(f) === 1), i === "enum") {
        const v = c[f];
        typeof v > "u" ? f = u : f = v;
      }
      r[a] = f;
    }
  );
  return await Promise.all(o), r;
}
async function Di({ schema: e, data: t }) {
  const n = po(e), r = {}, o = Object.keys(t).filter((s) => !e[s]);
  if (o.length)
    throw console.error(`Unknown keys found in data: ${o.join()}`), new Error("Unknown keys found in data");
  const a = Object.entries(n).map(
    async ([s, i]) => {
      const { type: l, key: c, values: u, defaultValue: d, codec: f } = i, v = c || s, h = t[s];
      if (typeof h > "u" || h === d) return;
      let p = h;
      if (l === "enum") {
        const w = u.indexOf(h);
        if (w === -1)
          throw console.error(`Enum value "${h}" not found in ${u}`), new Error("Invalid enum value");
        p = w;
      }
      f && (p = await f.encode(p)), l === "boolean" && (p = p ? 1 : 0), r[v] = p;
    }
  );
  return await Promise.all(a), r;
}
function Bi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zt, ir;
function $i() {
  if (ir) return Zt;
  ir = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var n = new Uint8Array(256), r = 0; r < n.length; r++)
      n[r] = 255;
    for (var o = 0; o < t.length; o++) {
      var a = t.charAt(o), s = a.charCodeAt(0);
      if (n[s] !== 255)
        throw new TypeError(a + " is ambiguous");
      n[s] = o;
    }
    var i = t.length, l = t.charAt(0), c = Math.log(i) / Math.log(256), u = Math.log(256) / Math.log(i);
    function d(h) {
      if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (h.length === 0)
        return "";
      for (var p = 0, w = 0, b = 0, E = h.length; b !== E && h[b] === 0; )
        b++, p++;
      for (var y = (E - b) * u + 1 >>> 0, x = new Uint8Array(y); b !== E; ) {
        for (var g = h[b], _ = 0, A = y - 1; (g !== 0 || _ < w) && A !== -1; A--, _++)
          g += 256 * x[A] >>> 0, x[A] = g % i >>> 0, g = g / i >>> 0;
        if (g !== 0)
          throw new Error("Non-zero carry");
        w = _, b++;
      }
      for (var m = y - w; m !== y && x[m] === 0; )
        m++;
      for (var L = l.repeat(p); m < y; ++m)
        L += t.charAt(x[m]);
      return L;
    }
    function f(h) {
      if (typeof h != "string")
        throw new TypeError("Expected String");
      if (h.length === 0)
        return new Uint8Array();
      for (var p = 0, w = 0, b = 0; h[p] === l; )
        w++, p++;
      for (var E = (h.length - p) * c + 1 >>> 0, y = new Uint8Array(E); h[p]; ) {
        var x = n[h.charCodeAt(p)];
        if (x === 255)
          return;
        for (var g = 0, _ = E - 1; (x !== 0 || g < b) && _ !== -1; _--, g++)
          x += i * y[_] >>> 0, y[_] = x % 256 >>> 0, x = x / 256 >>> 0;
        if (x !== 0)
          throw new Error("Non-zero carry");
        b = g, p++;
      }
      for (var A = E - b; A !== E && y[A] === 0; )
        A++;
      for (var m = new Uint8Array(w + (E - A)), L = w; A !== E; )
        m[L++] = y[A++];
      return m;
    }
    function v(h) {
      var p = f(h);
      if (p)
        return p;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: d,
      decodeUnsafe: f,
      decode: v
    };
  }
  return Zt = e, Zt;
}
var Hi = $i();
const Wi = /* @__PURE__ */ Bi(Hi);
var Fi = "0123456789abcdefghijklmnopqrstuvwxyz";
Wi(Fi);
new TextEncoder();
new TextDecoder();
const Vi = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, zi = function(e, { delineator: t }) {
  e += t;
  const n = [];
  let r = e;
  for (let a = 0; a < e.length; a++)
    r = Vi(r), n.push(r);
  n.sort();
  let o = "";
  for (let a = 0; a < n.length; a++)
    o += n[a].charAt(n[a].length - 1);
  return o;
}, qi = function(e, { delineator: t }) {
  const r = e.split("").slice(0);
  for (let a = 0; a < e.length - 1; a++) {
    r.sort();
    for (let s = 0; s < e.length; s++)
      r[s] = e[s] + r[s];
  }
  return r.filter(function(a) {
    return a.charAt(a.length - 1) === t;
  })[0].substring(0, e.length - 1);
};
function go(e) {
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
    (t, n, r) => (r === 0 || n !== t[t.length - 1].char ? t.push({ char: n, repeated: 1 }) : t[t.length - 1].repeated++, t),
    []
  ).reduce((t, { char: n, repeated: r }) => t += r === 1 ? n : n + String(r), "");
}
function xo(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, n, r) => n.repeat(+r)
  );
}
async function Gi(e, { delineator: t }) {
  const n = zi(e, { delineator: t });
  return go(n);
}
async function ji(e, { delineator: t }) {
  const n = xo(e);
  return qi(n, { delineator: t });
}
function Ui({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => Gi(t, { delineator: e }),
    decode: (t) => ji(t, { delineator: e })
  };
}
const vn = 26, pn = 97, Ki = 48, lr = async (e, { maxBits: t }) => {
  const n = [1, ...e].map((i) => i ? 1 : 0).join(""), r = [];
  for (let i = n.length; i > 0; i -= t)
    r.push(n.slice(Math.max(0, i - t), i));
  return r.reverse(), r.map((i) => parseInt(i, 2)).map((i) => i > vn ? i % vn : String.fromCharCode(i + pn)).join("");
};
async function cr(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= pn ? i - pn : i - Ki + vn
  ).map(
    (i, l) => Number(i).toString(2).padStart(l > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((l) => l === "1")
  ).slice(1);
}
function Yi({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => go(await lr(t, { maxBits: e })),
    decode: async (t) => cr(xo(t), { maxBits: e })
  } : {
    encode: (t) => lr(t, { maxBits: e }),
    decode: (t) => cr(t, { maxBits: e })
  };
}
var gn = function(e) {
  return Array.isArray(e) ? e.map(String) : [String(e)];
};
function Qi(e, t) {
  t === void 0 && (t = {});
  var n = t.propMap, r = n === void 0 ? {} : n, o = t.arrayProps, a = o === void 0 ? [] : o, s = t.noTypeGuessing, i = s === void 0 ? [] : s, l = e.match(/[A-Z]+([0-9a-z]|$)+/g) || [];
  a = gn(a), i = gn(i);
  var c = l.map(function(u) {
    var d = u.match(/^([A-Z]+)([0-9a-z]*$)/) || [], f = d[1], v = d[2];
    if (typeof f != "string" || typeof v != "string")
      throw new Error("Error reading key/value pair");
    var h = r[f.toLowerCase()] || f.toLowerCase(), p = i.includes(h) ? v : parseFloat(v).toString() === v ? parseFloat(v) : v === "true" || v === "yes" ? !0 : v === "false" || v === "no" ? !1 : v === "" ? null : v;
    return { key: h, value: p };
  }).reduce(
    /** @param {Object<string,any>} obj */
    function(u, d, f, v) {
      var h = d.key, p = d.value;
      if (typeof u[h] < "u")
        return u;
      var w = v.filter(function(y) {
        var x = y.key;
        return x === h;
      }).map(function(y) {
        return y.value;
      }), b = a.includes(h) || w.length > 1;
      if (b) {
        var E = new Set(w.map(function(y) {
          return typeof y;
        }));
        if (E.size > 1)
          throw new Error("Inconsistent types in array property '".concat(h, "'"));
        u[h] = w;
      } else
        u[h] = p;
      return u;
    },
    {}
  );
  return a.forEach(function(u) {
    typeof c[u] > "u" && (c[u] = []);
  }), c;
}
var Ht = function() {
  return Ht = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ht.apply(this, arguments);
};
var ur = function(e) {
  var t = e.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (t !== e)
    throw new Error('Illegal characters found: "'.concat(e, '"'));
  return e;
};
function Xi(e, t) {
  t === void 0 && (t = {});
  var n = Object.entries(t.propMap || {}).reduce(function(r, o) {
    var a, s = o[0], i = o[1];
    return Ht(Ht({}, r), (a = {}, a[i] = String(s), a));
  }, {});
  return Object.entries(e).flatMap(function(r) {
    var o = r[0], a = r[1];
    if (typeof a > "u" || a === null)
      return [];
    var s = n[o] || o, i = gn(a);
    return i.map(function(l) {
      return [ur(s).toUpperCase(), ur(l)].join("");
    });
  }).join("");
}
async function Zi(e, t) {
  const n = Qi(t);
  return await Mi({ schema: e, data: n });
}
async function Ji(e, t) {
  const n = await Di({ schema: e, data: t });
  return Xi(n);
}
function el(e) {
  const t = to(
    /** @type {T} */
    null
  );
  async function n() {
    const o = window.location.hash.slice(1);
    return await Zi(e, o);
  }
  let r;
  return n().then((o) => {
    t.set(o), t.subscribe(async (a) => {
      if (!a)
        return;
      const s = "#" + await Ji(e, a);
      window.location.hash !== s && (window.location.hash = s), r = s;
    }), window.addEventListener("hashchange", () => {
      window.location.hash !== r && n().then((s) => {
        t.set(s);
      });
    });
  }), t;
}
const tl = { Australia: [[112, -44], [156, -10]], "Brisbane & surrounds": [[152.67620200034025, -27.85975844732532], [153.50771856749492, -27.122141459597835]], "Sydney & surrounds": [[150.53643051298894, -34.250330919454555], [151.6159583706169, -33.35329642067877]], "Melbourne & surrounds": [[143.7112326761349, -38.73737902155104], [146.2181523182391, -36.755303142447325]], "Inner-city Sydney": [[150.97804393208258, -33.9820617904466], [151.29883502771884, -33.71564208020996]], "Inner-city Melbourne": [[144.77343032299214, -38.00505753293409], [145.25008324655565, -37.62851493730817]], Perth: [[115.29761105882773, -32.58735478749758], [116.46158922227181, -31.601283791419284]], Adelaide: [[138.1361307284978, -35.308045628940405], [139.08340859017528, -34.53133194772551]], Tasmania: [[143.15169589003773, -43.824678713957354], [149.19913869957333, -39.30289848300832]], "Focus Driven": [[112, -44], [156, -10]] }, nl = {
  areas: tl
}, rl = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, mo = {
  hashCodes: rl
}, st = In.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), ol = Object.values(st).reduce((e, t) => (e[t.id] = t, e), {});
In.groups;
const xn = "q", al = "x", dr = Ui({ delineator: xn }), yo = bs(mo.hashCodes);
if (yo[xn] || al === xn)
  throw new Error("Can not use delineator in allocation map");
function wo(e) {
  return st.map(({ id: t }) => e[t]);
}
function sl(e) {
  return st.reduce((t, { id: n }, r) => (t[n] = e[r] ?? null, t), {});
}
const fr = Yi({ maxBits: 4 }), Jt = {
  encode: async function(e) {
    const t = wo(e);
    return fr.encode(t);
  },
  decode: async function(e) {
    const t = await fr.decode(e);
    return sl(t);
  }
}, en = Object.freeze(
  st.reduce((e, t) => (e[t.id] = null, e), {})
), il = {
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
    values: Object.keys(vo)
  },
  geoArea: {
    type: "enum",
    key: "g",
    defaultValue: "Australia",
    values: Object.keys(nl.areas)
  },
  allocations: {
    type: "custom",
    codec: {
      encode: async (e) => {
        const t = Object.entries(e).reduce((o, [a, s]) => (o[a] = mo.hashCodes[s] || "x", o), {}), n = wo(t).map((o) => o ?? "x").join("");
        return await dr.encode(n);
      },
      decode: async (e) => (await dr.decode(e).catch((r) => (console.error("decoding string failed", e, r), ""))).split("").reduce((r, o, a) => {
        var i;
        const s = (i = st[a]) == null ? void 0 : i.id;
        if (s)
          return r[s] = yo[String(o)] || null, r;
      }, {})
    },
    key: "a",
    defaultValue: en
  },
  focuses: {
    type: "custom",
    codec: Jt,
    key: "f",
    defaultValue: en
  },
  certainties: {
    type: "custom",
    codec: Jt,
    key: "c",
    defaultValue: Object.freeze(
      st.reduce((e, t) => (e[t.id] = !0, e), {})
    )
  },
  labelsToShow: {
    type: "custom",
    codec: Jt,
    key: "li",
    defaultValue: en
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
  },
  combineCoalition: {
    type: "boolean",
    key: "cc",
    defaultValue: !1
  }
}, hr = el(il);
hr.subscribe((e) => {
  e && e.version !== 1 && hr.set({ ...e, version: 1 });
});
var ll = /* @__PURE__ */ Re("<!> <div><!></div>", 1);
function cl(e, t) {
  fe(t, !0);
  let n = C(t, "allocations", 23, () => ({})), r = C(t, "certainties", 23, () => ({})), o = C(t, "focuses", 23, () => ({})), a = C(t, "showStateLabels", 7, !1), s = C(t, "showElectorateLabels", 7, !1), i = C(t, "layout", 7, "COUNTRY"), l = C(t, "selectedElectorate", 7, null), c = C(t, "customViewbox", 7, null), u = C(t, "onClick", 7, () => {
  }), d = C(t, "onHover", 7, () => {
  }), f = C(t, "onApi", 7, () => {
  }), v = C(t, "isStaticLayout", 7, !0), h = C(t, "isInteractive", 7, !0), p = C(t, "colours", 7), w = Me(void 0), b = /* @__PURE__ */ U(() => vo[i()]);
  function E(m, L, $) {
    const M = $.getScreenCTM(), H = $.createSVGPoint();
    H.x = m, H.y = L;
    const z = H.matrixTransform(M);
    return [z.x, z.y].map(Number);
  }
  function y(m) {
    const L = ol[m], $ = N(b).positions[L == null ? void 0 : L.group];
    if (!(N(w) instanceof HTMLDivElement))
      return;
    const M = N(w).querySelector("svg");
    if (!L || !$ || !M)
      throw new Error(`Could not find hexagon with id ${m}`);
    const H = [-0.5, -1], [z, ne] = Rn(
      [
        $[0] + H[0],
        $[1] + H[1]
      ],
      ""
    ).map(Number), Z = Number(L.coordPx[0] + z), ve = Number(L.coordPx[1] + ne), [Y, $e] = E(Z, ve, M);
    return {
      code: m,
      screenCoord: [Y, $e],
      svgCoord: [Z, ve]
    };
  }
  Ve(() => {
    f() && f()({ getHex: y });
  });
  var x = ll(), g = rt(x);
  ho(g, {
    get colours() {
      return p();
    }
  });
  var _ = ee(g, 2), A = F(_);
  return fo(A, {
    config: In,
    get layout() {
      return N(b);
    },
    get allocations() {
      return n();
    },
    get certainties() {
      return r();
    },
    get focuses() {
      return o();
    },
    get showStateLabels() {
      return a();
    },
    get showElectorateLabels() {
      return s();
    },
    get onClick() {
      return u();
    },
    get onHover() {
      return d();
    },
    get selectedElectorate() {
      return l();
    },
    get customViewbox() {
      return c();
    },
    get isStaticLayout() {
      return v();
    },
    get isInteractive() {
      return h();
    }
  }), B(_), Kt(_, (m) => D(w, m), () => N(w)), W(e, x), he({
    get allocations() {
      return n();
    },
    set allocations(m = {}) {
      n(m), S();
    },
    get certainties() {
      return r();
    },
    set certainties(m = {}) {
      r(m), S();
    },
    get focuses() {
      return o();
    },
    set focuses(m = {}) {
      o(m), S();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(m = !1) {
      a(m), S();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(m = !1) {
      s(m), S();
    },
    get layout() {
      return i();
    },
    set layout(m = "COUNTRY") {
      i(m), S();
    },
    get selectedElectorate() {
      return l();
    },
    set selectedElectorate(m = null) {
      l(m), S();
    },
    get customViewbox() {
      return c();
    },
    set customViewbox(m = null) {
      c(m), S();
    },
    get onClick() {
      return u();
    },
    set onClick(m = () => {
    }) {
      u(m), S();
    },
    get onHover() {
      return d();
    },
    set onHover(m = () => {
    }) {
      d(m), S();
    },
    get onApi() {
      return f();
    },
    set onApi(m = () => {
    }) {
      f(m), S();
    },
    get isStaticLayout() {
      return v();
    },
    set isStaticLayout(m = !0) {
      v(m), S();
    },
    get isInteractive() {
      return h();
    },
    set isInteractive(m = !0) {
      h(m), S();
    },
    get colours() {
      return p();
    },
    set colours(m) {
      p(m), S();
    }
  });
}
customElements.define("abcnews-hexmap", be(
  cl,
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
    onApi: {},
    isStaticLayout: {},
    isInteractive: {},
    colours: {}
  },
  [],
  [],
  !0
));
export {
  Pe as A,
  ze as B,
  cl as H,
  Ke as a,
  C as b,
  qe as c,
  bt as d,
  st as e,
  W as f,
  he as g,
  Rn as h,
  S as i,
  Xa as j,
  be as k,
  mt as l,
  rt as m,
  Ue as n,
  kn as o,
  fe as p,
  Fe as q,
  B as r,
  Qa as s,
  Le as t,
  Ve as u,
  dl as v,
  to as w,
  N as x,
  F as y,
  ee as z
};
