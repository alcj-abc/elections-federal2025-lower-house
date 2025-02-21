var Ea = Object.defineProperty;
var yo = (e) => {
  throw TypeError(e);
};
var La = (e, t, o) => t in e ? Ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var K = (e, t, o) => La(e, typeof t != "symbol" ? t + "" : t, o), Ft = (e, t, o) => t.has(e) || yo("Cannot " + o);
var w = (e, t, o) => (Ft(e, t, "read from private field"), o ? o.call(e) : t.get(e)), X = (e, t, o) => t.has(e) ? yo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), Re = (e, t, o, a) => (Ft(e, t, "write to private field"), a ? a.call(e, o) : t.set(e, o), o), _o = (e, t, o) => (Ft(e, t, "access private method"), o);
const Ca = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ca);
const eo = 1, to = 2, $o = 4, Oa = 8, Ra = 16, Sa = 1, $a = 4, Ta = 8, Ma = 16, Ia = 4, ka = 2, To = "[", oo = "[!", ao = "]", We = {}, k = Symbol(), Wt = !1, Q = 2, Mo = 4, St = 8, $t = 16, me = 32, Xe = 64, Nt = 128, q = 256, wt = 512, j = 1024, ye = 2048, Je = 4096, pe = 8192, Tt = 16384, Io = 32768, lt = 65536, Ba = 1 << 19, ko = 1 << 20, Ge = Symbol("$state"), no = Symbol("legacy props"), ja = Symbol("");
var ro = Array.isArray, Fa = Array.prototype.indexOf, so = Array.from, bt = Object.keys, tt = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, Ha = Object.getOwnPropertyDescriptors, Da = Object.prototype, Wa = Array.prototype, Bo = Object.getPrototypeOf;
function Fe(e) {
  return typeof e == "function";
}
const W = () => {
};
function Ga(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let Pt = !1, Gt = [];
function jo() {
  Pt = !1;
  const e = Gt.slice();
  Gt = [], Ga(e);
}
function Mt(e) {
  Pt || (Pt = !0, queueMicrotask(jo)), Gt.push(e);
}
function Ka() {
  Pt && jo();
}
function Fo(e) {
  return e === this.v;
}
function Ho(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ua(e, t) {
  return e !== t;
}
function io(e) {
  return !Ho(e, this.v);
}
function Ya(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Va(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function za() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ja(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Za() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function en() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function tn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let on = !1;
function F(e, t) {
  var o = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Fo,
    rv: 0,
    wv: 0
  };
  return o;
}
function Ke(e) {
  return /* @__PURE__ */ an(F(e));
}
// @__NO_SIDE_EFFECTS__
function It(e, t = !1) {
  const o = F(e);
  return t || (o.equals = io), o;
}
// @__NO_SIDE_EFFECTS__
function an(e) {
  return R !== null && !oe && R.f & Q && (ae === null ? cn([e]) : ae.push(e)), e;
}
function M(e, t) {
  return R !== null && !oe && sa() && R.f & (Q | $t) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ae === null || !ae.includes(e)) && tn(), Kt(e, t);
}
function Kt(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Xo(), Do(e, ye), C !== null && C.f & j && !(C.f & (me | Xe)) && (de === null ? un([e]) : de.push(e))), t;
}
function Do(e, t) {
  var o = e.reactions;
  if (o !== null)
    for (var a = o.length, n = 0; n < a; n++) {
      var r = o[n], s = r.f;
      s & ye || (ie(r, t), s & (j | q) && (s & Q ? Do(
        /** @type {Derived} */
        r,
        Je
      ) : jt(
        /** @type {Effect} */
        r
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  var t = Q | ye, o = R !== null && R.f & Q ? (
    /** @type {Derived} */
    R
  ) : null;
  return C === null || o !== null && o.f & q ? t |= q : C.f |= ko, {
    ctx: H,
    deps: null,
    effects: null,
    equals: Fo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: o ?? C
  };
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  const t = /* @__PURE__ */ Ee(e);
  return t.equals = io, t;
}
function Wo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var o = 0; o < t.length; o += 1)
      Z(
        /** @type {Effect} */
        t[o]
      );
  }
}
function rn(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Q))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function sn(e) {
  var t, o = C;
  se(rn(e));
  try {
    Wo(e), t = Qo(e);
  } finally {
    se(o);
  }
  return t;
}
function Go(e) {
  var t = sn(e), o = (Ae || e.f & q) && e.deps !== null ? Je : j;
  ie(e, o), e.equals(t) || (e.v = t, e.wv = Xo());
}
function kt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function fe(e) {
  O = e;
}
let L;
function V(e) {
  if (e === null)
    throw kt(), We;
  return L = e;
}
function Te() {
  return V(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _e(L)
  );
}
function G(e) {
  if (O) {
    if (/* @__PURE__ */ _e(L) !== null)
      throw kt(), We;
    L = e;
  }
}
function Ut() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var o = (
        /** @type {Comment} */
        t.data
      );
      if (o === ao) {
        if (e === 0) return t;
        e -= 1;
      } else (o === To || o === oo) && (e += 1);
    }
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(t)
    );
    t.remove(), t = a;
  }
}
function He(e, t = null, o) {
  if (typeof e != "object" || e === null || Ge in e)
    return e;
  const a = Bo(e);
  if (a !== Da && a !== Wa)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ro(e), s = F(0);
  r && n.set("length", F(
    /** @type {any[]} */
    e.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, i, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Qa();
        var f = n.get(i);
        return f === void 0 ? (f = F(u.value), n.set(i, f)) : M(f, He(u.value, l)), !0;
      },
      deleteProperty(d, i) {
        var u = n.get(i);
        if (u === void 0)
          i in d && n.set(i, F(k));
        else {
          if (r && typeof i == "string") {
            var f = (
              /** @type {Source<number>} */
              n.get("length")
            ), c = Number(i);
            Number.isInteger(c) && c < f.v && M(f, c);
          }
          M(u, k), No(s);
        }
        return !0;
      },
      get(d, i, u) {
        var p;
        if (i === Ge)
          return e;
        var f = n.get(i), c = i in d;
        if (f === void 0 && (!c || (p = ve(d, i)) != null && p.writable) && (f = F(He(c ? d[i] : k, l)), n.set(i, f)), f !== void 0) {
          var h = g(f);
          return h === k ? void 0 : h;
        }
        return Reflect.get(d, i, u);
      },
      getOwnPropertyDescriptor(d, i) {
        var u = Reflect.getOwnPropertyDescriptor(d, i);
        if (u && "value" in u) {
          var f = n.get(i);
          f && (u.value = g(f));
        } else if (u === void 0) {
          var c = n.get(i), h = c == null ? void 0 : c.v;
          if (c !== void 0 && h !== k)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(d, i) {
        var h;
        if (i === Ge)
          return !0;
        var u = n.get(i), f = u !== void 0 && u.v !== k || Reflect.has(d, i);
        if (u !== void 0 || C !== null && (!f || (h = ve(d, i)) != null && h.writable)) {
          u === void 0 && (u = F(f ? He(d[i], l) : k), n.set(i, u));
          var c = g(u);
          if (c === k)
            return !1;
        }
        return f;
      },
      set(d, i, u, f) {
        var _;
        var c = n.get(i), h = i in d;
        if (r && i === "length")
          for (var p = u; p < /** @type {Source<number>} */
          c.v; p += 1) {
            var x = n.get(p + "");
            x !== void 0 ? M(x, k) : p in d && (x = F(k), n.set(p + "", x));
          }
        c === void 0 ? (!h || (_ = ve(d, i)) != null && _.writable) && (c = F(void 0), M(c, He(u, l)), n.set(i, c)) : (h = c.v !== k, M(c, He(u, l)));
        var y = Reflect.getOwnPropertyDescriptor(d, i);
        if (y != null && y.set && y.set.call(f, u), !h) {
          if (r && typeof i == "string") {
            var P = (
              /** @type {Source<number>} */
              n.get("length")
            ), A = Number(i);
            Number.isInteger(A) && A >= P.v && M(P, A + 1);
          }
          No(s);
        }
        return !0;
      },
      ownKeys(d) {
        g(s);
        var i = Reflect.ownKeys(d).filter((c) => {
          var h = n.get(c);
          return h === void 0 || h.v !== k;
        });
        for (var [u, f] of n)
          f.v !== k && !(u in d) && i.push(u);
        return i;
      },
      setPrototypeOf() {
        Za();
      }
    }
  );
}
function No(e, t = 1) {
  M(e, e.v + t);
}
var wo, Ko, Uo, Yo;
function Yt() {
  if (wo === void 0) {
    wo = window, Ko = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Uo = ve(t, "firstChild").get, Yo = ve(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ze(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  return Uo.call(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return Yo.call(e);
}
function J(e, t) {
  if (!O)
    return /* @__PURE__ */ Y(e);
  var o = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Y(L)
  );
  if (o === null)
    o = L.appendChild(ze());
  else if (t && o.nodeType !== 3) {
    var a = ze();
    return o == null || o.before(a), V(a), a;
  }
  return V(o), o;
}
function ln(e, t) {
  if (!O) {
    var o = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Y(
        /** @type {Node} */
        e
      )
    );
    return o instanceof Comment && o.data === "" ? /* @__PURE__ */ _e(o) : o;
  }
  return L;
}
function et(e, t = 1, o = !1) {
  let a = O ? L : e;
  for (var n; t--; )
    n = a, a = /** @type {TemplateNode} */
    /* @__PURE__ */ _e(a);
  if (!O)
    return a;
  var r = a == null ? void 0 : a.nodeType;
  if (o && r !== 3) {
    var s = ze();
    return a === null ? n == null || n.after(s) : a.before(s), V(s), s;
  }
  return V(a), /** @type {TemplateNode} */
  a;
}
function qo(e) {
  e.textContent = "";
}
const Vo = 0, dn = 1;
let mt = !1, yt = Vo, ot = !1, at = null, Ue = !1, lo = !1;
function bo(e) {
  Ue = e;
}
function Po(e) {
  lo = e;
}
let Se = [], Ye = 0;
let R = null, oe = !1;
function re(e) {
  R = e;
}
let C = null;
function se(e) {
  C = e;
}
let ae = null;
function cn(e) {
  ae = e;
}
let B = null, D = 0, de = null;
function un(e) {
  de = e;
}
let zo = 1, At = 0, Ae = !1;
function Xo() {
  return ++zo;
}
function dt(e) {
  var f;
  var t = e.f;
  if (t & ye)
    return !0;
  if (t & Je) {
    var o = e.deps, a = (t & q) !== 0;
    if (o !== null) {
      var n, r, s = (t & wt) !== 0, l = a && C !== null && !Ae, d = o.length;
      if (s || l) {
        var i = (
          /** @type {Derived} */
          e
        ), u = i.parent;
        for (n = 0; n < d; n++)
          r = o[n], (s || !((f = r == null ? void 0 : r.reactions) != null && f.includes(i))) && (r.reactions ?? (r.reactions = [])).push(i);
        s && (i.f ^= wt), l && u !== null && !(u.f & q) && (i.f ^= q);
      }
      for (n = 0; n < d; n++)
        if (r = o[n], dt(
          /** @type {Derived} */
          r
        ) && Go(
          /** @type {Derived} */
          r
        ), r.wv > e.wv)
          return !0;
    }
    (!a || C !== null && !Ae) && ie(e, j);
  }
  return !1;
}
function fn(e, t) {
  for (var o = t; o !== null; ) {
    if (o.f & Nt)
      try {
        o.fn(e);
        return;
      } catch {
        o.f ^= Nt;
      }
    o = o.parent;
  }
  throw mt = !1, e;
}
function hn(e) {
  return (e.f & Tt) === 0 && (e.parent === null || (e.parent.f & Nt) === 0);
}
function Bt(e, t, o, a) {
  if (mt) {
    if (o === null && (mt = !1), hn(t))
      throw e;
    return;
  }
  o !== null && (mt = !0);
  {
    fn(e, t);
    return;
  }
}
function Jo(e, t, o = !0) {
  var a = e.reactions;
  if (a !== null)
    for (var n = 0; n < a.length; n++) {
      var r = a[n];
      r.f & Q ? Jo(
        /** @type {Derived} */
        r,
        t,
        !1
      ) : t === r && (o ? ie(r, ye) : r.f & j && ie(r, Je), jt(
        /** @type {Effect} */
        r
      ));
    }
}
function Qo(e) {
  var h;
  var t = B, o = D, a = de, n = R, r = Ae, s = ae, l = H, d = oe, i = e.f;
  B = /** @type {null | Value[]} */
  null, D = 0, de = null, R = i & (me | Xe) ? null : e, Ae = (i & q) !== 0 && (!Ue || n === null || d), ae = null, Ao(e.ctx), oe = !1, At++;
  try {
    var u = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (B !== null) {
      var c;
      if (Et(e, D), f !== null && D > 0)
        for (f.length = D + B.length, c = 0; c < B.length; c++)
          f[D + c] = B[c];
      else
        e.deps = f = B;
      if (!Ae)
        for (c = D; c < f.length; c++)
          ((h = f[c]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && D < f.length && (Et(e, D), f.length = D);
    if (sa() && de !== null && !oe && f !== null && !(e.f & (Q | Je | ye)))
      for (c = 0; c < /** @type {Source[]} */
      de.length; c++)
        Jo(
          de[c],
          /** @type {Effect} */
          e
        );
    return n !== null && At++, u;
  } finally {
    B = t, D = o, de = a, R = n, Ae = r, ae = s, Ao(l), oe = d;
  }
}
function pn(e, t) {
  let o = t.reactions;
  if (o !== null) {
    var a = Fa.call(o, e);
    if (a !== -1) {
      var n = o.length - 1;
      n === 0 ? o = t.reactions = null : (o[a] = o[n], o.pop());
    }
  }
  o === null && t.f & Q && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (B === null || !B.includes(t)) && (ie(t, Je), t.f & (q | wt) || (t.f ^= wt), Wo(
    /** @type {Derived} **/
    t
  ), Et(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Et(e, t) {
  var o = e.deps;
  if (o !== null)
    for (var a = t; a < o.length; a++)
      pn(e, o[a]);
}
function co(e) {
  var t = e.f;
  if (!(t & Tt)) {
    ie(e, j);
    var o = C, a = H;
    C = e;
    try {
      t & $t ? Pn(e) : oa(e), ta(e);
      var n = Qo(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = zo;
      var r = e.deps, s;
      Wt && on && e.f & ye;
    } catch (l) {
      Bt(l, e, o, a || e.ctx);
    } finally {
      C = o;
    }
  }
}
function Zo() {
  if (Ye > 1e3) {
    Ye = 0;
    try {
      za();
    } catch (e) {
      if (at !== null)
        Bt(e, at, null);
      else
        throw e;
    }
  }
  Ye++;
}
function ea(e) {
  var t = e.length;
  if (t !== 0) {
    Zo();
    var o = Ue;
    Ue = !0;
    try {
      for (var a = 0; a < t; a++) {
        var n = e[a];
        n.f & j || (n.f ^= j);
        var r = gn(n);
        vn(r);
      }
    } finally {
      Ue = o;
    }
  }
}
function vn(e) {
  var t = e.length;
  if (t !== 0)
    for (var o = 0; o < t; o++) {
      var a = e[o];
      if (!(a.f & (Tt | pe)))
        try {
          dt(a) && (co(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null ? aa(a) : a.fn = null));
        } catch (n) {
          Bt(n, a, null, a.ctx);
        }
    }
}
function xn() {
  if (ot = !1, Ye > 1001)
    return;
  const e = Se;
  Se = [], ea(e), ot || (Ye = 0, at = null);
}
function jt(e) {
  yt === Vo && (ot || (ot = !0, queueMicrotask(xn))), at = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var o = t.f;
    if (o & (Xe | me)) {
      if (!(o & j)) return;
      t.f ^= j;
    }
  }
  Se.push(t);
}
function gn(e) {
  var t = [], o = e.first;
  e: for (; o !== null; ) {
    var a = o.f, n = (a & me) !== 0, r = n && (a & j) !== 0, s = o.next;
    if (!r && !(a & pe)) {
      if (a & Mo)
        t.push(o);
      else if (n)
        o.f ^= j;
      else {
        var l = R;
        try {
          R = o, dt(o) && co(o);
        } catch (u) {
          Bt(u, o, null, o.ctx);
        } finally {
          R = l;
        }
      }
      var d = o.first;
      if (d !== null) {
        o = d;
        continue;
      }
    }
    if (s === null) {
      let u = o.parent;
      for (; u !== null; ) {
        if (e === u)
          break e;
        var i = u.next;
        if (i !== null) {
          o = i;
          continue e;
        }
        u = u.parent;
      }
    }
    o = s;
  }
  return t;
}
function b(e) {
  var t = yt, o = Se;
  try {
    Zo();
    const n = [];
    yt = dn, Se = n, ot = !1, ea(o);
    var a = e == null ? void 0 : e();
    return Ka(), (Se.length > 0 || n.length > 0) && b(), Ye = 0, at = null, a;
  } finally {
    yt = t, Se = o;
  }
}
function g(e) {
  var t = e.f, o = (t & Q) !== 0;
  if (R !== null && !oe) {
    ae !== null && ae.includes(e) && en();
    var a = R.deps;
    e.rv < At && (e.rv = At, B === null && a !== null && a[D] === e ? D++ : B === null ? B = [e] : (!Ae || !B.includes(e)) && B.push(e));
  } else if (o && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var n = (
      /** @type {Derived} */
      e
    ), r = n.parent;
    r !== null && !(r.f & q) && (n.f ^= q);
  }
  return o && (n = /** @type {Derived} */
  e, dt(n) && Go(n)), e.v;
}
function xe(e) {
  var t = oe;
  try {
    return oe = !0, e();
  } finally {
    oe = t;
  }
}
const mn = -7169;
function ie(e, t) {
  e.f = e.f & mn | t;
}
function yn(e) {
  C === null && R === null && Va(), R !== null && R.f & q && C === null && qa(), lo && Ya();
}
function _n(e, t) {
  var o = t.last;
  o === null ? t.last = t.first = e : (o.next = e, e.prev = o, t.last = e);
}
function Me(e, t, o, a = !0) {
  var n = (e & Xe) !== 0, r = C, s = {
    ctx: H,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ye,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n ? null : r,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (o) {
    var l = Ue;
    try {
      bo(!0), co(s), s.f |= Io;
    } catch (u) {
      throw Z(s), u;
    } finally {
      bo(l);
    }
  } else t !== null && jt(s);
  var d = o && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (ko | Nt)) === 0;
  if (!d && !n && a && (r !== null && _n(s, r), R !== null && R.f & Q)) {
    var i = (
      /** @type {Derived} */
      R
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return s;
}
function Nn(e) {
  const t = Me(St, null, !1);
  return ie(t, j), t.teardown = e, t;
}
function Lt(e) {
  yn();
  var t = C !== null && (C.f & me) !== 0 && H !== null && !H.m;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      H
    );
    (o.e ?? (o.e = [])).push({
      fn: e,
      effect: C,
      reaction: R
    });
  } else {
    var a = ct(e);
    return a;
  }
}
function wn(e) {
  const t = Me(Xe, e, !0);
  return () => {
    Z(t);
  };
}
function bn(e) {
  const t = Me(Xe, e, !0);
  return (o = {}) => new Promise((a) => {
    o.outro ? rt(t, () => {
      Z(t), a(void 0);
    }) : (Z(t), a(void 0));
  });
}
function ct(e) {
  return Me(Mo, e, !1);
}
function uo(e) {
  return Me(St, e, !0);
}
function nt(e, t = [], o = Ee) {
  const a = t.map(o);
  return Qe(() => e(...a.map(g)));
}
function Qe(e, t = 0) {
  return Me(St | $t | t, e, !0);
}
function Le(e, t = !0) {
  return Me(St | me, e, !0, t);
}
function ta(e) {
  var t = e.teardown;
  if (t !== null) {
    const o = lo, a = R;
    Po(!0), re(null);
    try {
      t.call(null);
    } finally {
      Po(o), re(a);
    }
  }
}
function oa(e, t = !1) {
  var o = e.first;
  for (e.first = e.last = null; o !== null; ) {
    var a = o.next;
    Z(o, t), o = a;
  }
}
function Pn(e) {
  for (var t = e.first; t !== null; ) {
    var o = t.next;
    t.f & me || Z(t), t = o;
  }
}
function Z(e, t = !0) {
  var o = !1;
  if ((t || e.f & Ba) && e.nodes_start !== null) {
    for (var a = e.nodes_start, n = e.nodes_end; a !== null; ) {
      var r = a === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(a)
      );
      a.remove(), a = r;
    }
    o = !0;
  }
  oa(e, t && !o), Et(e, 0), ie(e, Tt);
  var s = e.transitions;
  if (s !== null)
    for (const d of s)
      d.stop();
  ta(e);
  var l = e.parent;
  l !== null && l.first !== null && aa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function aa(e) {
  var t = e.parent, o = e.prev, a = e.next;
  o !== null && (o.next = a), a !== null && (a.prev = o), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = o));
}
function rt(e, t) {
  var o = [];
  fo(e, o, !0), na(o, () => {
    Z(e), t && t();
  });
}
function na(e, t) {
  var o = e.length;
  if (o > 0) {
    var a = () => --o || t();
    for (var n of e)
      n.out(a);
  } else
    t();
}
function fo(e, t, o) {
  if (!(e.f & pe)) {
    if (e.f ^= pe, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || o) && t.push(s);
    for (var a = e.first; a !== null; ) {
      var n = a.next, r = (a.f & lt) !== 0 || (a.f & me) !== 0;
      fo(a, t, r ? o : !1), a = n;
    }
  }
}
function Ct(e) {
  ra(e, !0);
}
function ra(e, t) {
  if (e.f & pe) {
    e.f ^= pe, e.f & j || (e.f ^= j), dt(e) && (ie(e, ye), jt(e));
    for (var o = e.first; o !== null; ) {
      var a = o.next, n = (o.f & lt) !== 0 || (o.f & me) !== 0;
      ra(o, n ? t : !1), o = a;
    }
    if (e.transitions !== null)
      for (const r of e.transitions)
        (r.is_global || t) && r.in();
  }
}
function An(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let H = null;
function Ao(e) {
  H = e;
}
function Ie(e, t = !1, o) {
  H = {
    p: H,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ke(e) {
  const t = H;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var o = C, a = R;
      t.e = null;
      try {
        for (var n = 0; n < s.length; n++) {
          var r = s[n];
          se(r.effect), re(r.reaction), ct(r.fn);
        }
      } finally {
        se(o), re(a);
      }
    }
    H = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function sa() {
  return !0;
}
const En = ["touchstart", "touchmove"];
function Ln(e) {
  return En.includes(e);
}
function Cn(e) {
  var t = R, o = C;
  re(null), se(null);
  try {
    return e();
  } finally {
    re(t), se(o);
  }
}
const ia = /* @__PURE__ */ new Set(), qt = /* @__PURE__ */ new Set();
function On(e) {
  for (var t = 0; t < e.length; t++)
    ia.add(e[t]);
  for (var o of qt)
    o(e);
}
function pt(e) {
  var A;
  var t = this, o = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, n = ((A = e.composedPath) == null ? void 0 : A.call(e)) || [], r = (
    /** @type {null | Element} */
    n[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var d = n.indexOf(l);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var i = n.indexOf(t);
    if (i === -1)
      return;
    d <= i && (s = d);
  }
  if (r = /** @type {Element} */
  n[s] || e.target, r !== t) {
    tt(e, "currentTarget", {
      configurable: !0,
      get() {
        return r || o;
      }
    });
    var u = R, f = C;
    re(null), se(null);
    try {
      for (var c, h = []; r !== null; ) {
        var p = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var x = r["__" + a];
          if (x !== void 0 && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === r))
            if (ro(x)) {
              var [y, ...P] = x;
              y.apply(r, [e, ...P]);
            } else
              x.call(r, e);
        } catch (_) {
          c ? h.push(_) : c = _;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        r = p;
      }
      if (c) {
        for (let _ of h)
          queueMicrotask(() => {
            throw _;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, re(u), se(f);
    }
  }
}
function ho(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ge(e, t) {
  var o = (
    /** @type {Effect} */
    C
  );
  o.nodes_start === null && (o.nodes_start = e, o.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ut(e, t) {
  var o = (t & ka) !== 0, a, n = !e.startsWith("<!>");
  return () => {
    if (O)
      return ge(L, null), L;
    a === void 0 && (a = ho(n ? e : "<!>" + e), a = /** @type {Node} */
    /* @__PURE__ */ Y(a));
    var r = (
      /** @type {TemplateNode} */
      o || Ko ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    return ge(r, r), r;
  };
}
// @__NO_SIDE_EFFECTS__
function po(e, t, o = "svg") {
  var a = !e.startsWith("<!>"), n = `<${o}>${a ? e : "<!>" + e}</${o}>`, r;
  return () => {
    if (O)
      return ge(L, null), L;
    if (!r) {
      var s = (
        /** @type {DocumentFragment} */
        ho(n)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Y(s)
      );
      r = /** @type {Element} */
      /* @__PURE__ */ Y(l);
    }
    var d = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return ge(d, d), d;
  };
}
function Rn() {
  if (O)
    return ge(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), o = ze();
  return e.append(t, o), ge(t, o), e;
}
function ne(e, t) {
  if (O) {
    C.nodes_end = L, Te();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Vt = !0;
function la(e, t) {
  var o = t == null ? "" : typeof t == "object" ? t + "" : t;
  o !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = o, e.nodeValue = o + "");
}
function da(e, t) {
  return ca(e, t);
}
function Sn(e, t) {
  Yt(), t.intro = t.intro ?? !1;
  const o = t.target, a = O, n = L;
  try {
    for (var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Y(o)
    ); r && (r.nodeType !== 8 || /** @type {Comment} */
    r.data !== To); )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ _e(r);
    if (!r)
      throw We;
    fe(!0), V(
      /** @type {Comment} */
      r
    ), Te();
    const s = ca(e, { ...t, anchor: r });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== ao)
      throw kt(), We;
    return fe(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === We)
      return t.recover === !1 && Xa(), Yt(), qo(o), fe(!1), da(e, t);
    throw s;
  } finally {
    fe(a), V(n);
  }
}
const Be = /* @__PURE__ */ new Map();
function ca(e, { target: t, anchor: o, props: a = {}, events: n, context: r, intro: s = !0 }) {
  Yt();
  var l = /* @__PURE__ */ new Set(), d = (f) => {
    for (var c = 0; c < f.length; c++) {
      var h = f[c];
      if (!l.has(h)) {
        l.add(h);
        var p = Ln(h);
        t.addEventListener(h, pt, { passive: p });
        var x = Be.get(h);
        x === void 0 ? (document.addEventListener(h, pt, { passive: p }), Be.set(h, 1)) : Be.set(h, x + 1);
      }
    }
  };
  d(so(ia)), qt.add(d);
  var i = void 0, u = bn(() => {
    var f = o ?? t.appendChild(ze());
    return Le(() => {
      if (r) {
        Ie({});
        var c = (
          /** @type {ComponentContext} */
          H
        );
        c.c = r;
      }
      n && (a.$$events = n), O && ge(
        /** @type {TemplateNode} */
        f,
        null
      ), Vt = s, i = e(f, a) || {}, Vt = !0, O && (C.nodes_end = L), r && ke();
    }), () => {
      var p;
      for (var c of l) {
        t.removeEventListener(c, pt);
        var h = (
          /** @type {number} */
          Be.get(c)
        );
        --h === 0 ? (document.removeEventListener(c, pt), Be.delete(c)) : Be.set(c, h);
      }
      qt.delete(d), f !== o && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return zt.set(i, u), i;
}
let zt = /* @__PURE__ */ new WeakMap();
function $n(e, t) {
  const o = zt.get(e);
  return o ? (zt.delete(e), o(t)) : Promise.resolve();
}
function ua(e, t, o = !1) {
  O && Te();
  var a = e, n = null, r = null, s = k, l = o ? lt : 0, d = !1;
  const i = (f, c = !0) => {
    d = !0, u(c, f);
  }, u = (f, c) => {
    if (s === (s = f)) return;
    let h = !1;
    if (O) {
      const p = (
        /** @type {Comment} */
        a.data === oo
      );
      !!s === p && (a = Ut(), V(a), fe(!1), h = !0);
    }
    s ? (n ? Ct(n) : c && (n = Le(() => c(a))), r && rt(r, () => {
      r = null;
    })) : (r ? Ct(r) : c && (r = Le(() => c(a))), n && rt(n, () => {
      n = null;
    })), h && fe(!0);
  };
  Qe(() => {
    d = !1, t(i), d || u(null, null);
  }, l), O && (a = L);
}
function Tn(e, t, o) {
  O && Te();
  var a = e, n = k, r, s = Ua;
  Qe(() => {
    s(n, n = t()) && (r && rt(r), r = Le(() => o(a)));
  }), O && (a = L);
}
function vo(e, t) {
  return t;
}
function Mn(e, t, o, a) {
  for (var n = [], r = t.length, s = 0; s < r; s++)
    fo(t[s].e, n, !0);
  var l = r > 0 && n.length === 0 && o !== null;
  if (l) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      o.parentNode
    );
    qo(d), d.append(
      /** @type {Element} */
      o
    ), a.clear(), be(e, t[0].prev, t[r - 1].next);
  }
  na(n, () => {
    for (var i = 0; i < r; i++) {
      var u = t[i];
      l || (a.delete(u.k), be(e, u.prev, u.next)), Z(u.e, !l);
    }
  });
}
function xo(e, t, o, a, n, r = null) {
  var s = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, d = (t & $o) !== 0;
  if (d) {
    var i = (
      /** @type {Element} */
      e
    );
    s = O ? V(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Y(i)
    ) : i.appendChild(ze());
  }
  O && Te();
  var u = null, f = !1, c = /* @__PURE__ */ nn(() => {
    var h = o();
    return ro(h) ? h : h == null ? [] : so(h);
  });
  Qe(() => {
    var h = g(c), p = h.length;
    if (f && p === 0)
      return;
    f = p === 0;
    let x = !1;
    if (O) {
      var y = (
        /** @type {Comment} */
        s.data === oo
      );
      y !== (p === 0) && (s = Ut(), V(s), fe(!1), x = !0);
    }
    if (O) {
      for (var P = null, A, _ = 0; _ < p; _++) {
        if (L.nodeType === 8 && /** @type {Comment} */
        L.data === ao) {
          s = /** @type {Comment} */
          L, x = !0, fe(!1);
          break;
        }
        var m = h[_], N = a(m, _);
        A = fa(
          L,
          l,
          P,
          null,
          m,
          N,
          _,
          n,
          t,
          o
        ), l.items.set(N, A), P = A;
      }
      p > 0 && V(Ut());
    }
    O || In(h, l, s, n, t, a, o), r !== null && (p === 0 ? u ? Ct(u) : u = Le(() => r(s)) : u !== null && rt(u, () => {
      u = null;
    })), x && fe(!0), g(c);
  }), O && (s = L);
}
function In(e, t, o, a, n, r, s) {
  var ee, Ce, we, Oe;
  var l = (n & Oa) !== 0, d = (n & (eo | to)) !== 0, i = e.length, u = t.items, f = t.first, c = f, h, p = null, x, y = [], P = [], A, _, m, N;
  if (l)
    for (N = 0; N < i; N += 1)
      A = e[N], _ = r(A, N), m = u.get(_), m !== void 0 && ((ee = m.a) == null || ee.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(m));
  for (N = 0; N < i; N += 1) {
    if (A = e[N], _ = r(A, N), m = u.get(_), m === void 0) {
      var $ = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : o;
      p = fa(
        $,
        t,
        p,
        p === null ? t.first : p.next,
        A,
        _,
        N,
        a,
        n,
        s
      ), u.set(_, p), y = [], P = [], c = p.next;
      continue;
    }
    if (d && kn(m, A, N, n), m.e.f & pe && (Ct(m.e), l && ((Ce = m.a) == null || Ce.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(m))), m !== c) {
      if (h !== void 0 && h.has(m)) {
        if (y.length < P.length) {
          var T = P[0], S;
          p = T.prev;
          var z = y[0], Ne = y[y.length - 1];
          for (S = 0; S < y.length; S += 1)
            Eo(y[S], T, o);
          for (S = 0; S < P.length; S += 1)
            h.delete(P[S]);
          be(t, z.prev, Ne.next), be(t, p, z), be(t, Ne, T), c = T, p = Ne, N -= 1, y = [], P = [];
        } else
          h.delete(m), Eo(m, c, o), be(t, m.prev, m.next), be(t, m, p === null ? t.first : p.next), be(t, p, m), p = m;
        continue;
      }
      for (y = [], P = []; c !== null && c.k !== _; )
        c.e.f & pe || (h ?? (h = /* @__PURE__ */ new Set())).add(c), P.push(c), c = c.next;
      if (c === null)
        continue;
      m = c;
    }
    y.push(m), p = m, c = m.next;
  }
  if (c !== null || h !== void 0) {
    for (var le = h === void 0 ? [] : so(h); c !== null; )
      c.e.f & pe || le.push(c), c = c.next;
    var v = le.length;
    if (v > 0) {
      var I = n & $o && i === 0 ? o : null;
      if (l) {
        for (N = 0; N < v; N += 1)
          (we = le[N].a) == null || we.measure();
        for (N = 0; N < v; N += 1)
          (Oe = le[N].a) == null || Oe.fix();
      }
      Mn(t, le, I, u);
    }
  }
  l && Mt(() => {
    var ht;
    if (x !== void 0)
      for (m of x)
        (ht = m.a) == null || ht.apply();
  }), C.first = t.first && t.first.e, C.last = p && p.e;
}
function kn(e, t, o, a) {
  a & eo && Kt(e.v, t), a & to ? Kt(
    /** @type {Value<number>} */
    e.i,
    o
  ) : e.i = o;
}
function fa(e, t, o, a, n, r, s, l, d, i) {
  var u = (d & eo) !== 0, f = (d & Ra) === 0, c = u ? f ? /* @__PURE__ */ It(n) : F(n) : n, h = d & to ? F(s) : s, p = {
    i: h,
    v: c,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    prev: o,
    next: a
  };
  try {
    return p.e = Le(() => l(e, c, h, i), O), p.e.prev = o && o.e, p.e.next = a && a.e, o === null ? t.first = p : (o.next = p, o.e.next = p.e), a !== null && (a.prev = p, a.e.prev = p.e), p;
  } finally {
  }
}
function Eo(e, t, o) {
  for (var a = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : o, n = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : o, r = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); r !== a; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(r)
    );
    n.before(r), r = s;
  }
}
function be(e, t, o) {
  t === null ? e.first = o : (t.next = o, t.e.next = o && o.e), o !== null && (o.prev = t, o.e.prev = t && t.e);
}
function Ht(e, t, o, a, n) {
  var r = e, s = "", l;
  Qe(() => {
    if (s === (s = t() ?? "")) {
      O && Te();
      return;
    }
    l !== void 0 && (Z(l), l = void 0), s !== "" && (l = Le(() => {
      if (O) {
        L.data;
        for (var d = Te(), i = d; d !== null && (d.nodeType !== 8 || /** @type {Comment} */
        d.data !== ""); )
          i = d, d = /** @type {TemplateNode} */
          /* @__PURE__ */ _e(d);
        if (d === null)
          throw kt(), We;
        ge(L, i), r = V(d);
        return;
      }
      var u = s + "";
      u = `<svg>${u}</svg>`;
      var f = ho(u);
      for (f = /** @type {Element} */
      /* @__PURE__ */ Y(f), ge(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Y(f),
        /** @type {TemplateNode} */
        f.lastChild
      ); /* @__PURE__ */ Y(f); )
        r.before(
          /** @type {Node} */
          /* @__PURE__ */ Y(f)
        );
    }));
  });
}
function Bn(e, t, ...o) {
  var a = e, n = W, r;
  Qe(() => {
    n !== (n = t()) && (r && (Z(r), r = null), r = Le(() => (
      /** @type {SnippetFn} */
      n(a, ...o)
    )));
  }, lt), O && (a = L);
}
function ft(e, t) {
  Mt(() => {
    var o = e.getRootNode(), a = (
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
    if (!a.querySelector("#" + t.hash)) {
      const n = document.createElement("style");
      n.id = t.hash, n.textContent = t.code, a.appendChild(n);
    }
  });
}
function go(e, t, o, a) {
  var n = e.__attributes ?? (e.__attributes = {});
  O && (n[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || n[t] !== (n[t] = o) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[ja] = o), o == null ? e.removeAttribute(t) : typeof o != "string" && jn(e).includes(t) ? e[t] = o : e.setAttribute(t, o));
}
var Lo = /* @__PURE__ */ new Map();
function jn(e) {
  var t = Lo.get(e.nodeName);
  if (t) return t;
  Lo.set(e.nodeName, t = []);
  for (var o, a = e, n = Element.prototype; n !== a; ) {
    o = Ha(a);
    for (var r in o)
      o[r].set && t.push(r);
    a = Bo(a);
  }
  return t;
}
function vt(e, t, o) {
  if (o) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function he(e, t, o, a) {
  var n = e.__styles ?? (e.__styles = {});
  n[t] !== o && (n[t] = o, o == null ? e.style.removeProperty(t) : e.style.setProperty(t, o, ""));
}
const Fn = () => performance.now(), te = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Fn(),
  tasks: /* @__PURE__ */ new Set()
};
function ha() {
  const e = te.now();
  te.tasks.forEach((t) => {
    t.c(e) || (te.tasks.delete(t), t.f());
  }), te.tasks.size !== 0 && te.tick(ha);
}
function pa(e) {
  let t;
  return te.tasks.size === 0 && te.tick(ha), {
    promise: new Promise((o) => {
      te.tasks.add(t = { c: e, f: o });
    }),
    abort() {
      te.tasks.delete(t);
    }
  };
}
function xt(e, t) {
  Cn(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Hn(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (o) => o[0].toUpperCase() + o.slice(1)
  ).join("");
}
function Co(e) {
  const t = {}, o = e.split(";");
  for (const a of o) {
    const [n, r] = a.split(":");
    if (!n || r === void 0) break;
    const s = Hn(n.trim());
    t[s] = r.trim();
  }
  return t;
}
const Dn = (e) => e;
function Wn(e, t, o, a) {
  var n = (e & Ia) !== 0, r = "both", s, l = t.inert, d = t.style.overflow, i, u;
  function f() {
    var y = R, P = C;
    re(null), se(null);
    try {
      return s ?? (s = o()(t, (a == null ? void 0 : a()) ?? /** @type {P} */
      {}, {
        direction: r
      }));
    } finally {
      re(y), se(P);
    }
  }
  var c = {
    is_global: n,
    in() {
      t.inert = l, xt(t, "introstart"), i = Xt(t, f(), u, 1, () => {
        xt(t, "introend"), i == null || i.abort(), i = s = void 0, t.style.overflow = d;
      });
    },
    out(y) {
      t.inert = !0, xt(t, "outrostart"), u = Xt(t, f(), i, 0, () => {
        xt(t, "outroend"), y == null || y();
      });
    },
    stop: () => {
      i == null || i.abort(), u == null || u.abort();
    }
  }, h = (
    /** @type {Effect} */
    C
  );
  if ((h.transitions ?? (h.transitions = [])).push(c), Vt) {
    var p = n;
    if (!p) {
      for (var x = (
        /** @type {Effect | null} */
        h.parent
      ); x && x.f & lt; )
        for (; (x = x.parent) && !(x.f & $t); )
          ;
      p = !x || (x.f & Io) !== 0;
    }
    p && ct(() => {
      xe(() => c.in());
    });
  }
}
function Xt(e, t, o, a, n) {
  var r = a === 1;
  if (Fe(t)) {
    var s, l = !1;
    return Mt(() => {
      if (!l) {
        var y = t({ direction: r ? "in" : "out" });
        s = Xt(e, y, o, a, n);
      }
    }), {
      abort: () => {
        l = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (o == null || o.deactivate(), !(t != null && t.duration))
    return n(), {
      abort: W,
      deactivate: W,
      reset: W,
      t: () => a
    };
  const { delay: d = 0, css: i, tick: u, easing: f = Dn } = t;
  var c = [];
  if (r && o === void 0 && (u && u(0, 1), i)) {
    var h = Co(i(0, 1));
    c.push(h, h);
  }
  var p = () => 1 - a, x = e.animate(c, { duration: d });
  return x.onfinish = () => {
    var y = (o == null ? void 0 : o.t()) ?? 1 - a;
    o == null || o.abort();
    var P = a - y, A = (
      /** @type {number} */
      t.duration * Math.abs(P)
    ), _ = [];
    if (A > 0) {
      var m = !1;
      if (i)
        for (var N = Math.ceil(A / 16.666666666666668), $ = 0; $ <= N; $ += 1) {
          var T = y + P * f($ / N), S = Co(i(T, 1 - T));
          _.push(S), m || (m = S.overflow === "hidden");
        }
      m && (e.style.overflow = "hidden"), p = () => {
        var z = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          x.currentTime
        );
        return y + P * f(z / A);
      }, u && pa(() => {
        if (x.playState !== "running") return !1;
        var z = p();
        return u(z, 1 - z), !0;
      });
    }
    x = e.animate(_, { duration: A, fill: "forwards" }), x.onfinish = () => {
      p = () => a, u == null || u(a, 1 - a), n();
    };
  }, {
    abort: () => {
      x && (x.cancel(), x.effect = null, x.onfinish = W);
    },
    deactivate: () => {
      n = W;
    },
    reset: () => {
      a === 0 && (u == null || u(1, 0));
    },
    t: () => p()
  };
}
var Pe, qe, st, Ot, va;
const Rt = class Rt {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    X(this, Ot);
    /** */
    X(this, Pe, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    X(this, qe);
    /** @type {ResizeObserverOptions} */
    X(this, st);
    Re(this, st, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, o) {
    var a = w(this, Pe).get(t) || /* @__PURE__ */ new Set();
    return a.add(o), w(this, Pe).set(t, a), _o(this, Ot, va).call(this).observe(t, w(this, st)), () => {
      var n = w(this, Pe).get(t);
      n.delete(o), n.size === 0 && (w(this, Pe).delete(t), w(this, qe).unobserve(t));
    };
  }
};
Pe = new WeakMap(), qe = new WeakMap(), st = new WeakMap(), Ot = new WeakSet(), va = function() {
  return w(this, qe) ?? Re(this, qe, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var o of t) {
        Rt.entries.set(o.target, o);
        for (var a of w(this, Pe).get(o.target) || [])
          a(o);
      }
    }
  ));
}, /** @static */
K(Rt, "entries", /* @__PURE__ */ new WeakMap());
let Jt = Rt;
var Gn = /* @__PURE__ */ new Jt({
  box: "border-box"
});
function Oo(e, t, o) {
  var a = Gn.observe(e, () => o(e[t]));
  ct(() => (xe(() => o(e[t])), a));
}
function Ro(e, t) {
  return e === t || (e == null ? void 0 : e[Ge]) === t;
}
function xa(e = {}, t, o, a) {
  return ct(() => {
    var n, r;
    return uo(() => {
      n = r, r = [], xe(() => {
        e !== o(...r) && (t(e, ...r), n && Ro(o(...n), e) && t(null, ...n));
      });
    }), () => {
      Mt(() => {
        r && Ro(o(...r), e) && t(null, ...r);
      });
    };
  }), e;
}
function Kn(e) {
  H === null && An(), Lt(() => {
    const t = xe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ga(e, t, o) {
  if (e == null)
    return t(void 0), W;
  const a = xe(
    () => e.subscribe(
      t,
      // @ts-expect-error
      o
    )
  );
  return a.unsubscribe ? () => a.unsubscribe() : a;
}
const je = [];
function Un(e, t = W) {
  let o = null;
  const a = /* @__PURE__ */ new Set();
  function n(l) {
    if (Ho(e, l) && (e = l, o)) {
      const d = !je.length;
      for (const i of a)
        i[1](), je.push(i, e);
      if (d) {
        for (let i = 0; i < je.length; i += 2)
          je[i][0](je[i + 1]);
        je.length = 0;
      }
    }
  }
  function r(l) {
    n(l(
      /** @type {T} */
      e
    ));
  }
  function s(l, d = W) {
    const i = [l, d];
    return a.add(i), a.size === 1 && (o = t(n, r) || W), l(
      /** @type {T} */
      e
    ), () => {
      a.delete(i), a.size === 0 && o && (o(), o = null);
    };
  }
  return { set: n, update: r, subscribe: s };
}
function Yn(e) {
  let t;
  return ga(e, (o) => t = o)(), t;
}
let gt = !1, Qt = Symbol();
function qn(e, t, o) {
  const a = o[t] ?? (o[t] = {
    store: null,
    source: /* @__PURE__ */ It(void 0),
    unsubscribe: W
  });
  if (a.store !== e && !(Qt in o))
    if (a.unsubscribe(), a.store = e ?? null, e == null)
      a.source.v = void 0, a.unsubscribe = W;
    else {
      var n = !0;
      a.unsubscribe = ga(e, (r) => {
        n ? a.source.v = r : M(a.source, r);
      }), n = !1;
    }
  return e && Qt in o ? Yn(e) : g(a.source);
}
function Vn(e, t) {
  return e.set(t), t;
}
function zn() {
  const e = {};
  function t() {
    Nn(() => {
      for (var o in e)
        e[o].unsubscribe();
      tt(e, Qt, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Xn(e, t, o) {
  return e.set(o), t;
}
function Jn(e) {
  var t = gt;
  try {
    return gt = !1, [e(), gt];
  } finally {
    gt = t;
  }
}
const Qn = {
  get(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let a = e.props[o];
      if (Fe(a) && (a = a()), typeof a == "object" && a !== null && t in a) return a[t];
    }
  },
  set(e, t, o) {
    let a = e.props.length;
    for (; a--; ) {
      let n = e.props[a];
      Fe(n) && (n = n());
      const r = ve(n, t);
      if (r && r.set)
        return r.set(o), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let a = e.props[o];
      if (Fe(a) && (a = a()), typeof a == "object" && a !== null && t in a) {
        const n = ve(a, t);
        return n && !n.configurable && (n.configurable = !0), n;
      }
    }
  },
  has(e, t) {
    if (t === Ge || t === no) return !1;
    for (let o of e.props)
      if (Fe(o) && (o = o()), o != null && t in o) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let o of e.props) {
      Fe(o) && (o = o());
      for (const a in o)
        t.includes(a) || t.push(a);
    }
    return t;
  }
};
function Zn(...e) {
  return new Proxy({ props: e }, Qn);
}
function E(e, t, o, a) {
  var N;
  var n = (o & Sa) !== 0, r = !0, s = (o & Ta) !== 0, l = (o & Ma) !== 0, d = !1, i;
  s ? [i, d] = Jn(() => (
    /** @type {V} */
    e[t]
  )) : i = /** @type {V} */
  e[t];
  var u = Ge in e || no in e, f = s && (((N = ve(e, t)) == null ? void 0 : N.set) ?? (u && t in e && (($) => e[t] = $))) || void 0, c = (
    /** @type {V} */
    a
  ), h = !0, p = !1, x = () => (p = !0, h && (h = !1, l ? c = xe(
    /** @type {() => V} */
    a
  ) : c = /** @type {V} */
  a), c);
  i === void 0 && a !== void 0 && (f && r && Ja(), i = x(), f && f(i));
  var y;
  if (y = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? x() : (h = !0, p = !1, $);
  }, !(o & $a))
    return y;
  if (f) {
    var P = e.$$legacy;
    return function($, T) {
      return arguments.length > 0 ? ((!T || P || d) && f(T ? y() : $), $) : y();
    };
  }
  var A = !1, _ = /* @__PURE__ */ It(i), m = /* @__PURE__ */ Ee(() => {
    var $ = y(), T = g(_);
    return A ? (A = !1, T) : _.v = $;
  });
  return n || (m.equals = io), function($, T) {
    if (arguments.length > 0) {
      const S = T ? g(m) : s ? He($) : $;
      return m.equals(S) || (A = !0, M(_, S), p && c !== void 0 && (c = S), xe(() => g(m))), $;
    }
    return g(m);
  };
}
function er(e) {
  return new tr(e);
}
var ce, U;
class tr {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    X(this, ce);
    /** @type {Record<string, any>} */
    X(this, U);
    var r;
    var o = /* @__PURE__ */ new Map(), a = (s, l) => {
      var d = /* @__PURE__ */ It(l);
      return o.set(s, d), d;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return g(o.get(l) ?? a(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === no ? !0 : (g(o.get(l) ?? a(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, d) {
          return M(o.get(l) ?? a(l, d), d), Reflect.set(s, l, d);
        }
      }
    );
    Re(this, U, (t.hydrate ? Sn : da)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((r = t == null ? void 0 : t.props) != null && r.$$host) || t.sync === !1) && b(), Re(this, ce, n.$$events);
    for (const s of Object.keys(w(this, U)))
      s === "$set" || s === "$destroy" || s === "$on" || tt(this, s, {
        get() {
          return w(this, U)[s];
        },
        /** @param {any} value */
        set(l) {
          w(this, U)[s] = l;
        },
        enumerable: !0
      });
    w(this, U).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(n, s);
    }, w(this, U).$destroy = () => {
      $n(w(this, U));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    w(this, U).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, o) {
    w(this, ce)[t] = w(this, ce)[t] || [];
    const a = (...n) => o.call(this, ...n);
    return w(this, ce)[t].push(a), () => {
      w(this, ce)[t] = w(this, ce)[t].filter(
        /** @param {any} fn */
        (n) => n !== a
      );
    };
  }
  $destroy() {
    w(this, U).$destroy();
  }
}
ce = new WeakMap(), U = new WeakMap();
let ma;
typeof HTMLElement == "function" && (ma = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, o, a) {
    super();
    /** The Svelte component constructor */
    K(this, "$$ctor");
    /** Slots */
    K(this, "$$s");
    /** @type {any} The Svelte component instance */
    K(this, "$$c");
    /** Whether or not the custom element is connected */
    K(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    K(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    K(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    K(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    K(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    K(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    K(this, "$$me");
    this.$$ctor = t, this.$$s = o, a && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, o, a) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(o), this.$$c) {
      const n = this.$$c.$on(t, o);
      this.$$l_u.set(o, n);
    }
    super.addEventListener(t, o, a);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, o, a) {
    if (super.removeEventListener(t, o, a), this.$$c) {
      const n = this.$$l_u.get(o);
      n && (n(), this.$$l_u.delete(o));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(n) {
        return (r) => {
          const s = document.createElement("slot");
          n !== "default" && (s.name = n), ne(r, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, a = or(this);
      for (const n of this.$$s)
        n in a && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), o.default = !0) : o[n] = t(n));
      for (const n of this.attributes) {
        const r = this.$$g_p(n.name);
        r in this.$$d || (this.$$d[r] = _t(r, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = er({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = wn(() => {
        uo(() => {
          var n;
          this.$$r = !0;
          for (const r of bt(this.$$c)) {
            if (!((n = this.$$p_d[r]) != null && n.reflect)) continue;
            this.$$d[r] = this.$$c[r];
            const s = _t(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, s);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const r of this.$$l[n]) {
          const s = this.$$c.$on(n, r);
          this.$$l_u.set(r, s);
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
  attributeChangedCallback(t, o, a) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = _t(t, a, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
    return bt(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === t || !this.$$p_d[o].attribute && o.toLowerCase() === t
    ) || t;
  }
});
function _t(e, t, o, a) {
  var r;
  const n = (r = o[e]) == null ? void 0 : r.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !a || !o[e])
    return t;
  if (a === "toAttribute")
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
function or(e) {
  const t = {};
  return e.childNodes.forEach((o) => {
    t[
      /** @type {Element} node */
      o.slot || "default"
    ] = !0;
  }), t;
}
function Ze(e, t, o, a, n, r) {
  let s = class extends ma {
    constructor() {
      super(e, o, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return bt(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return bt(t).forEach((l) => {
    tt(s.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(d) {
        var f;
        d = _t(l, d, t), this.$$d[l] = d;
        var i = this.$$c;
        if (i) {
          var u = (f = ve(i, l)) == null ? void 0 : f.get;
          u ? i[l] = d : i.$set({ [l]: d });
        }
      }
    });
  }), a.forEach((l) => {
    tt(s.prototype, l, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[l];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function So(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function ar(e) {
  return e;
}
function nr(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Zt(e, t) {
  if (e === t || e !== e) return () => e;
  const o = typeof e;
  if (o !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const a = (
      /** @type {Array<any>} */
      t.map((n, r) => Zt(
        /** @type {Array<any>} */
        e[r],
        n
      ))
    );
    return (n) => a.map((r) => r(n));
  }
  if (o === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (So(e) && So(t)) {
      const r = e.getTime(), l = t.getTime() - r;
      return (d) => new Date(r + d * l);
    }
    const a = Object.keys(t), n = {};
    return a.forEach((r) => {
      n[r] = Zt(e[r], t[r]);
    }), (r) => {
      const s = {};
      return a.forEach((l) => {
        s[l] = n[l](r);
      }), s;
    };
  }
  if (o === "number") {
    const a = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (n) => e + n * a;
  }
  return () => t;
}
var ue, Ve, it, $e;
const mo = class mo {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, o = {}) {
    X(this, ue, F(
      /** @type {T} */
      void 0
    ));
    X(this, Ve, F(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    X(this, it);
    /** @type {import('../internal/client/types').Task | null} */
    X(this, $e, null);
    w(this, ue).v = w(this, Ve).v = t, Re(this, it, o);
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
    const a = new mo(t(), o);
    return uo(() => {
      a.set(t());
    }), a;
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
    var f;
    M(w(this, Ve), t);
    let {
      delay: a = 0,
      duration: n = 400,
      easing: r = ar,
      interpolate: s = Zt
    } = { ...w(this, it), ...o };
    if (n === 0)
      return (f = w(this, $e)) == null || f.abort(), M(w(this, ue), t), Promise.resolve();
    const l = te.now() + a;
    let d, i = !1, u = w(this, $e);
    return Re(this, $e, pa((c) => {
      if (c < l)
        return !0;
      if (!i) {
        i = !0;
        const p = w(this, ue).v;
        d = s(p, t), typeof n == "function" && (n = n(p, t)), u == null || u.abort();
      }
      const h = c - l;
      return h > /** @type {number} */
      n ? (M(w(this, ue), t), !1) : (M(w(this, ue), d(r(h / /** @type {number} */
      n))), !0);
    })), w(this, $e).promise;
  }
  get current() {
    return g(w(this, ue));
  }
  get target() {
    return g(w(this, Ve));
  }
  set target(t) {
    this.set(t);
  }
};
ue = new WeakMap(), Ve = new WeakMap(), it = new WeakMap(), $e = new WeakMap();
let De = mo;
const rr = (e) => e;
function sr(e, { delay: t = 0, duration: o = 400, easing: a = rr } = {}) {
  const n = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: a,
    css: (r) => `opacity: ${r * n}`
  };
}
var ir = /* @__PURE__ */ po('<g><text class="hexlabels__text svelte-fyaz0o"> </text></g>'), lr = /* @__PURE__ */ po('<g class="hexlabels"></g>');
const dr = {
  hash: "svelte-fyaz0o",
  code: ".hexlabels__text.svelte-fyaz0o {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:6px;font-family:sans-serif;text-anchor:middle;}"
};
function ya(e, t) {
  Ie(t, !0), ft(e, dr);
  let o = E(t, "hexes", 7), a = E(t, "labelsToShow", 23, () => ({})), n = E(t, "showAll", 7, !1), r = E(t, "showElectorateLabels", 7, !1), s = /* @__PURE__ */ Ee(() => r() ? o() : o().filter(({ code: d }) => a()[d]));
  var l = lr();
  return xo(l, 21, () => g(s), vo, (d, i) => {
    let u = () => g(i).coordPx, f = () => g(i).code;
    var c = ir(), h = J(c), p = J(h, !0);
    G(h), G(c), nt(
      (x) => {
        go(c, "transform", x), la(p, f());
      },
      [
        () => `translate(${u().join(" ")})`
      ]
    ), ne(d, c);
  }), G(l), ne(e, l), ke({
    get hexes() {
      return o();
    },
    set hexes(d) {
      o(d), b();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(d = {}) {
      a(d), b();
    },
    get showAll() {
      return n();
    },
    set showAll(d = !1) {
      n(d), b();
    },
    get showElectorateLabels() {
      return r();
    },
    set showElectorateLabels(d = !1) {
      r(d), b();
    }
  });
}
Ze(
  ya,
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
var cr = /* @__PURE__ */ po('<g class="group svelte-7jyjup"><g class="group-hexes svelte-7jyjup"><!></g><!><g class="group-hex-strokes svelte-7jyjup"><!></g><g class="group-outline svelte-7jyjup"><!></g></g>');
const ur = {
  hash: "svelte-7jyjup",
  code: '.group.svelte-7jyjup {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-7jyjup {display:none;}.group--hidden.svelte-7jyjup {opacity:0;}.group.svelte-7jyjup .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-7jyjup .hex-outline {fill:none;stroke:var(--c-black);stroke-width:2px;transition:opacity 0.5s, stroke 0.2s;vector-effect:non-scaling-stroke;}.group--map-is-filled.svelte-7jyjup .hex-outline {opacity:0;stroke:white;}.group-hexes.svelte-7jyjup .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-7jyjup .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-7jyjup .hex[data-allocation="NXT"] {fill:var(--a-NXT);}.group-hexes.svelte-7jyjup .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-7jyjup .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-7jyjup .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-7jyjup .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-7jyjup .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-7jyjup .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-7jyjup .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-7jyjup .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-7jyjup .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-7jyjup .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-7jyjup .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-7jyjup .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--c-empty-border);}.group-hex-strokes.svelte-7jyjup .hex {fill:none;stroke:none;stroke-width:1px;}.group-hex-strokes.svelte-7jyjup .hex:not([data-allocation="null"]) {fill:none;stroke:var(--c-filled-border);stroke-width:1px;}.group-hex-strokes.svelte-7jyjup .hex[data-certain="null"] {fill:url(#uncertainty-hash);}.group--has-focuses.svelte-7jyjup .hex-outline {opacity:0;stroke:white;}.group--has-focuses.svelte-7jyjup .group-hexes:where(.svelte-7jyjup) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-7jyjup .group-hex-strokes:where(.svelte-7jyjup) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-7jyjup .group-hexes:where(.svelte-7jyjup) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-7jyjup .group-hex-strokes:where(.svelte-7jyjup) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-7jyjup .group-hexes:where(.svelte-7jyjup) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.2;}.group--has-focuses.svelte-7jyjup .group-hex-strokes:where(.svelte-7jyjup) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}'
};
function _a(e, t) {
  Ie(t, !0), ft(e, ur);
  let o = E(t, "name", 7, ""), a = E(t, "svgHexes", 7, ""), n = E(t, "hexes", 23, () => []), r = E(t, "svgOutline", 7, ""), s = E(t, "offset", 23, () => [1 / 0, 1 / 0]), l = E(t, "isFilled", 7, !1), d = E(t, "focuses", 7), i = E(t, "hasAnyFocuses", 7, !1), u = E(t, "labelsToShow", 23, () => ({})), f = E(t, "showElectorateLabels", 7), c = E(t, "showFocusedElectorateLabels", 7);
  const h = 16;
  function p(v = [0, 0]) {
    const I = v[0] * (h * Math.sqrt(3)), ee = v[1] * 1.5 * h;
    return [I, ee].map((Ce) => `${Math.round(Ce)}px`);
  }
  let x = Ke(`translate(${p(s()).join(",")})`), y = Ke(!1), P = /* @__PURE__ */ Ee(() => s()[0] !== 1 / 0);
  Lt(() => {
    g(P) && (M(x, `translate(${p(s()).join(",")})`), M(y, !0));
  });
  let A = /* @__PURE__ */ Ee(() => i() && c() ? d() : u());
  var _ = cr(), m = J(_), N = J(m);
  Ht(N, a), G(m);
  var $ = et(m);
  {
    var T = (v) => {
      ya(v, {
        get hexes() {
          return n();
        },
        get labelsToShow() {
          return g(A);
        },
        get showElectorateLabels() {
          return f();
        }
      });
    };
    ua($, (v) => {
      g(P) && v(T);
    });
  }
  var S = et($), z = J(S);
  Ht(z, a), G(S);
  var Ne = et(S), le = J(Ne);
  return Ht(le, r), G(Ne), G(_), nt(() => {
    go(_, "data-name", o()), vt(_, "group--never-rendered", !g(y)), vt(_, "group--hidden", !g(P)), vt(_, "group--map-is-filled", l()), vt(_, "group--has-focuses", i()), he(_, "transform", g(x));
  }), ne(e, _), ke({
    get name() {
      return o();
    },
    set name(v = "") {
      o(v), b();
    },
    get svgHexes() {
      return a();
    },
    set svgHexes(v = "") {
      a(v), b();
    },
    get hexes() {
      return n();
    },
    set hexes(v = []) {
      n(v), b();
    },
    get svgOutline() {
      return r();
    },
    set svgOutline(v = "") {
      r(v), b();
    },
    get offset() {
      return s();
    },
    set offset(v = [1 / 0, 1 / 0]) {
      s(v), b();
    },
    get isFilled() {
      return l();
    },
    set isFilled(v = !1) {
      l(v), b();
    },
    get focuses() {
      return d();
    },
    set focuses(v) {
      d(v), b();
    },
    get hasAnyFocuses() {
      return i();
    },
    set hasAnyFocuses(v = !1) {
      i(v), b();
    },
    get labelsToShow() {
      return u();
    },
    set labelsToShow(v = {}) {
      u(v), b();
    },
    get showElectorateLabels() {
      return f();
    },
    set showElectorateLabels(v) {
      f(v), b();
    },
    get showFocusedElectorateLabels() {
      return c();
    },
    set showFocusedElectorateLabels(v) {
      c(v), b();
    }
  });
}
Ze(
  _a,
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
var fr = /* @__PURE__ */ ut('<div class="label svelte-lh1lcp"> </div>'), hr = /* @__PURE__ */ ut('<div class="labels svelte-lh1lcp" aria-hidden="true"></div>');
const pr = {
  hash: "svelte-lh1lcp",
  code: '.labels.svelte-lh1lcp {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;}.label.svelte-lh1lcp {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px white;paint-order:stroke fill;}'
};
function Na(e, t) {
  Ie(t, !0), ft(e, pr);
  let o = E(t, "labels", 7);
  var a = hr();
  return xo(a, 21, o, vo, (n, r) => {
    var s = Rn(), l = ln(s);
    Tn(l, () => g(r), (d) => {
      var i = fr(), u = J(i, !0);
      G(i), nt(
        (f) => {
          he(i, "left", g(r).left + "%"), he(i, "top", g(r).top + "%"), he(i, "width", g(r).width + "%"), he(i, "margin-left", f), la(u, g(r).name);
        },
        [
          () => Math.round(0 - g(r).width / 2) + "%"
        ]
      ), Wn(3, i, () => sr, () => ({ duration: 1e3 })), ne(d, i);
    }), ne(n, s);
  }), G(a), ne(e, a), ke({
    get labels() {
      return o();
    },
    set labels(n) {
      o(n), b();
    }
  });
}
Ze(Na, { labels: {} }, [], [], !0);
var vr = ({ target: e, clientX: t, clientY: o }, a) => {
  var r;
  const n = (r = e == null ? void 0 : e.dataset) == null ? void 0 : r.code;
  !n || !a() || a()({ code: n, clientX: t, clientY: o });
}, xr = /* @__PURE__ */ ut('<div class="hexmap__labels svelte-ahmprl"><!></div>'), gr = /* @__PURE__ */ ut('<div class="hexmap svelte-ahmprl"><svg class="svelte-ahmprl"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!></svg> <!></div>');
const mr = {
  hash: "svelte-ahmprl",
  code: ".hexmap.svelte-ahmprl {position:relative;height:100%;display:flex;align-items:center;justify-content:center;}.hexmap__labels.svelte-ahmprl {position:absolute;top:0;left:50%;top:50%;pointer-events:none;}.hexmap.svelte-ahmprl svg:where(.svelte-ahmprl) {max-width:100%;max-height:100%;}"
};
function wa(e, t) {
  Ie(t, !0), ft(e, mr);
  let o = E(t, "config", 23, () => ({})), a = E(t, "layout", 23, () => ({})), n = E(t, "allocations", 23, () => ({})), r = E(t, "focuses", 23, () => ({})), s = E(t, "certainties", 23, () => ({})), l = E(t, "labelsToShow", 23, () => ({})), d = E(t, "showStateLabels", 7, !1), i = E(t, "showElectorateLabels", 7, !1), u = E(t, "showFocusedElectorateLabels", 7, !1), f = E(t, "onClick", 7, () => {
  }), c = Ke(void 0), h = Ke(0), p = Ke(0), x = /* @__PURE__ */ Ee(() => Object.values(r()).some(Boolean)), y = /* @__PURE__ */ Ee(() => {
    const v = Object.values(n());
    return v.length !== 0 && v.every(Boolean);
  });
  const P = a().viewbox, A = { easing: nr, duration: 1100 };
  let _ = new De(P[0], A), m = new De(P[1], A), N = new De(P[2], A), $ = new De(P[3], A);
  Lt(() => {
    const [v, I, ee, Ce] = a().viewbox;
    _.set(v), m.set(I), N.set(ee), $.set(Ce);
  }), Lt(() => {
    const v = n(), I = r(), ee = s();
    if (!g(c))
      return;
    g(c).querySelectorAll("polygon.hex").forEach((we) => {
      if (!(we instanceof SVGPolygonElement))
        return;
      const Oe = we.dataset.code;
      if (!Oe)
        return;
      const ht = v[Oe] || null;
      we.dataset.allocation = ht;
      const Pa = g(x) ? I[Oe] || !1 : !0;
      we.dataset.focused = Pa;
      const Aa = ee[Oe] || null;
      we.dataset.certain = Aa;
    });
  });
  var T = gr();
  T.__click = [vr, f];
  var S = J(T), z = et(J(S));
  xo(z, 17, () => o().groups, vo, (v, I) => {
    _a(v, Zn(() => g(I), {
      get layout() {
        return a();
      },
      get offset() {
        return a().positions[g(I).name];
      },
      get isFilled() {
        return g(y);
      },
      get focuses() {
        return r();
      },
      get hasAnyFocuses() {
        return g(x);
      },
      get showElectorateLabels() {
        return i();
      },
      get showFocusedElectorateLabels() {
        return u();
      },
      get labelsToShow() {
        return l();
      }
    }));
  }), G(S), xa(S, (v) => M(c, v), () => g(c));
  var Ne = et(S, 2);
  {
    var le = (v) => {
      var I = xr(), ee = J(I);
      Na(ee, {
        get labels() {
          return a().labels;
        }
      }), G(I), nt(() => {
        he(I, "width", `${g(h)}px`), he(I, "height", `${g(p)}px`), he(I, "margin-left", `${0 - g(h) / 2}px`), he(I, "margin-top", `${0 - g(p) / 2}px`);
      }), ne(v, I);
    };
    ua(Ne, (v) => {
      d() && v(le);
    });
  }
  return G(T), nt((v) => go(S, "viewBox", v), [
    () => [
      _.current,
      m.current,
      N.current,
      $.current
    ].join(" ")
  ]), Oo(S, "clientWidth", (v) => M(h, v)), Oo(S, "clientHeight", (v) => M(p, v)), ne(e, T), ke({
    get config() {
      return o();
    },
    set config(v = {}) {
      o(v), b();
    },
    get layout() {
      return a();
    },
    set layout(v = {}) {
      a(v), b();
    },
    get allocations() {
      return n();
    },
    set allocations(v = {}) {
      n(v), b();
    },
    get focuses() {
      return r();
    },
    set focuses(v = {}) {
      r(v), b();
    },
    get certainties() {
      return s();
    },
    set certainties(v = {}) {
      s(v), b();
    },
    get labelsToShow() {
      return l();
    },
    set labelsToShow(v = {}) {
      l(v), b();
    },
    get showStateLabels() {
      return d();
    },
    set showStateLabels(v = !1) {
      d(v), b();
    },
    get showElectorateLabels() {
      return i();
    },
    set showElectorateLabels(v = !1) {
      i(v), b();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(v = !1) {
      u(v), b();
    },
    get onClick() {
      return f();
    },
    set onClick(v = () => {
    }) {
      f(v), b();
    }
  });
}
On(["click"]);
Ze(
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
    onClick: {}
  },
  [],
  [],
  !0
);
const yr = "a", _r = "z", Nr = "b", wr = "c", br = "d", Pr = "e", Ar = "f", Er = "g", Lr = "h", Cr = "i", Or = "j", Rr = "k", Sr = "l", $r = "m", Tr = "t", Mr = "c", Ir = "m", kr = {
  None: yr,
  Any: _r,
  ALP: Nr,
  CA: wr,
  CLP: br,
  GRN: Pr,
  IND: Ar,
  KAP: Er,
  LIB: Lr,
  LNP: Cr,
  NAT: Or,
  ONP: Rr,
  OTH: Sr,
  UAP: $r,
  Teal: Tr,
  NXT: Mr,
  PUP: Ir
};
let Dt = Un({});
var Br = /* @__PURE__ */ ut('<div class="style-root svelte-yk8qkj"><!></div>');
const jr = {
  hash: "svelte-yk8qkj",
  code: ".style-root.svelte-yk8qkj * {box-sizing:border-box;}.style-root.svelte-yk8qkj {height:100%;font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-null: var(--c-white);--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-NXT: var(--c-pty-xxxxxx);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--c-empty-border: #cdcbcb;--c-filled-border: #fff;}"
};
function ba(e, t) {
  Ie(t, !0), ft(e, jr);
  const [o, a] = zn(), n = () => qn(Dt, "$partyColours", o);
  let r = E(t, "children", 7), s = Ke(void 0);
  Kn(() => {
    if (!g(s))
      return;
    const u = window.getComputedStyle(g(s));
    Vn(Dt, {}), Object.keys(kr).forEach((c) => {
      Xn(Dt, xe(n)[c] = u.getPropertyValue(`--a-${c}`), xe(n));
    });
  });
  var l = Br(), d = J(l);
  Bn(d, () => r() ?? W), G(l), xa(l, (u) => M(s, u), () => g(s)), ne(e, l);
  var i = ke({
    get children() {
      return r();
    },
    set children(u) {
      r(u), b();
    }
  });
  return a(), i;
}
Ze(ba, { children: {} }, [], [], !0);
const Fr = { viewbox: [-50, -1, 480, 502], positions: { ACT: [9.0035, 10], NSW: [4, 6], NT: [2.51, 5], QLD: [5, 0], SA: [2.004, 6], TAS: [7, 16.75, !0], VIC: [4.02, 10], WA: [0.05, 6] }, labels: [{ left: 30, top: 27, width: 8, name: "NT" }, { left: 68, top: 17, width: 8, name: "QLD" }, { left: 64, top: 40, width: 8, name: "NSW" }, { left: 71, top: 55.5, width: 8, name: "ACT" }, { left: 59, top: 65, width: 8, name: "VIC" }, { left: 59, top: 85.5, width: 8, name: "TAS" }, { left: 30, top: 46, width: 8, name: "SA" }, { left: 19, top: 46, width: 8, name: "WA" }] }, Hr = {
  COUNTRY: Fr
}, Dr = 291, Wr = 200, Gr = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' data-code='' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' data-code='' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' data-code='' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='ACT' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='BANK' class='hex' data-code='' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BART' class='hex' data-code='' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BENN' class='hex' data-code='' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='BERO' class='hex' data-code='' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='BLAX' class='hex' data-code='' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' data-code='' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='CALA' class='hex' data-code='' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CHIF' class='hex' data-code='' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='COOK' class='hex' data-code='' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='COWP' class='hex' data-code='' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='CUNN' class='hex' data-code='' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='DOBE' class='hex' data-code='' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='EMON' class='hex' data-code='' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='FARR' class='hex' data-code='' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='FOWL' class='hex' data-code='' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='GILM' class='hex' data-code='' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='GRAY' class='hex' data-code='' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='GREE' class='hex' data-code='' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' data-code='' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' data-code='' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='HUNT' class='hex' data-code='' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='KSMI' class='hex' data-code='' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='LIND' class='hex' data-code='' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='LYNE' class='hex' data-code='' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='MACA' class='hex' data-code='' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='MACK' class='hex' data-code='' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='MACQ' class='hex' data-code='' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='MCMA' class='hex' data-code='' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MITC' class='hex' data-code='' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='NENG' class='hex' data-code='' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='NEWC' class='hex' data-code='' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='NSYD' class='hex' data-code='' points='291,80 291,96 277.1,104 263.3,96 263.3,80 277.1,72' /><polygon data-id='PAGE' class='hex' data-code='' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='PARK' class='hex' data-code='' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='PARR' class='hex' data-code='' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='PATE' class='hex' data-code='' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' data-code='' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='RICH' class='hex' data-code='' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='RIVE' class='hex' data-code='' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='ROBE' class='hex' data-code='' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='SHOR' class='hex' data-code='' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='SYDN' class='hex' data-code='' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' data-code='' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='WATS' class='hex' data-code='' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='WENT' class='hex' data-code='' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='WERR' class='hex' data-code='' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='WHIT' class='hex' data-code='' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='NSW' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,291,80,291,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Banks","coord":[7,4],"shortName":"Banks","index":83,"id":"BANK","coordPx":[207.8,112]},{"name":"Barton","coord":[7,5],"shortName":"Bart.","index":20,"id":"BART","coordPx":[221.7,136]},{"name":"Bennelong","coord":[6,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[194,40]},{"name":"Berowra","coord":[4,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[138.6,40]},{"name":"Blaxland","coord":[7,3],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Calare","coord":[0,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[27.7,40]},{"name":"Chifley","coord":[5,2],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[152.4,64]},{"name":"Cook","coord":[5,3],"shortName":"Cook","index":72,"id":"COOK","coordPx":[166.3,88]},{"name":"Cowper","coord":[1,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[41.6,16]},{"name":"Cunningham","coord":[3,3],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[110.9,88]},{"name":"Dobell","coord":[6,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[180.1,16]},{"name":"Eden-Monaro","coord":[2,2],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[69.3,64]},{"name":"Farrer","coord":[0,3],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[27.7,88]},{"name":"Fowler","coord":[6,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[180.1,64]},{"name":"Gilmore","coord":[2,3],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[83.1,88]},{"name":"Grayndler","coord":[8,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[249.4,88]},{"name":"Greenway","coord":[7,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Hunter","coord":[8,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[235.6,16]},{"name":"Kingsford Smith","coord":[8,6],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[235.6,160]},{"name":"Lindsay","coord":[3,0],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[97,16]},{"name":"Lyne","coord":[2,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[69.3,16]},{"name":"Macarthur","coord":[4,2],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[124.7,64]},{"name":"Mackellar","coord":[5,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[166.3,40]},{"name":"Macquarie","coord":[4,0],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[124.7,16]},{"name":"McMahon","coord":[3,1],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[110.9,40]},{"name":"Mitchell","coord":[7,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[221.7,40]},{"name":"New England","coord":[1,2],"shortName":"New.","index":139,"id":"NENG","coordPx":[41.6,64]},{"name":"Newcastle","coord":[9,1],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[277.1,40]},{"name":"North Sydney","coord":[9,3],"shortName":"Nort.","index":91,"id":"NSYD","coordPx":[277.1,88]},{"name":"Page","coord":[1,1],"shortName":"Page","index":144,"id":"PAGE","coordPx":[55.4,40]},{"name":"Parkes","coord":[0,0],"shortName":"Park.","index":141,"id":"PARK","coordPx":[13.9,16]},{"name":"Parramatta","coord":[6,3],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[194,88]},{"name":"Paterson","coord":[9,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Richmond","coord":[2,1],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[83.1,40]},{"name":"Riverina","coord":[0,2],"shortName":"River.","index":142,"id":"RIVE","coordPx":[13.9,64]},{"name":"Robertson","coord":[5,0],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[152.4,16]},{"name":"Shortland","coord":[7,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[207.8,16]},{"name":"Sydney","coord":[9,4],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Watson","coord":[8,4],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[235.6,112]},{"name":"Wentworth","coord":[8,5],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,136]},{"name":"Werriwa","coord":[4,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[138.6,88]},{"name":"Whitlam","coord":[3,2],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' data-code='' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' data-code='' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='NT' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='BLAI' class='hex' data-code='' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='BONN' class='hex' data-code='' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='BOWM' class='hex' data-code='' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BRIS' class='hex' data-code='' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CAPR' class='hex' data-code='' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' /><polygon data-id='DAWS' class='hex' data-code='' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='DICK' class='hex' data-code='' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='FADD' class='hex' data-code='' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FAIR' class='hex' data-code='' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='FISH' class='hex' data-code='' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='FLYN' class='hex' data-code='' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='FORD' class='hex' data-code='' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='GRIF' class='hex' data-code='' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='GROO' class='hex' data-code='' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='HERB' class='hex' data-code='' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='HINK' class='hex' data-code='' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='KENN' class='hex' data-code='' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='LEIC' class='hex' data-code='' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='LILL' class='hex' data-code='' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='LONG' class='hex' data-code='' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='MARA' class='hex' data-code='' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='MCPH' class='hex' data-code='' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='MONC' class='hex' data-code='' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='MORE' class='hex' data-code='' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='OXLE' class='hex' data-code='' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='PETR' class='hex' data-code='' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='RANK' class='hex' data-code='' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='RYAN' class='hex' data-code='' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='WBAY' class='hex' data-code='' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='WRIG' class='hex' data-code='' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='QLD' points='13.9,128,27.7,120,27.7,104,41.6,96,41.6,80,55.4,72,69.3,80,83.1,72,83.1,56,97,48,97,32,110.9,24,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,221.7,152,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,110.9,152,97,144,83.1,152,69.3,144,55.4,152,41.6,144,27.7,152,13.9,144,13.9,128' />","hexes":[{"name":"Blair","coord":[2,5],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[83.1,136]},{"name":"Bonner","coord":[6,2],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[180.1,64]},{"name":"Bowman","coord":[7,4],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[207.8,112]},{"name":"Brisbane","coord":[5,3],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,88]},{"name":"Capricornia","coord":[3,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[97,64]},{"name":"Dawson","coord":[3,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[110.9,40]},{"name":"Dickson","coord":[3,3],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[110.9,88]},{"name":"Fadden","coord":[6,4],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,112]},{"name":"Fairfax","coord":[5,1],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[166.3,40]},{"name":"Fisher","coord":[5,2],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[152.4,64]},{"name":"Flynn","coord":[2,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[83.1,88]},{"name":"Forde","coord":[5,5],"shortName":"Forde","index":127,"id":"FORD","coordPx":[166.3,136]},{"name":"Griffith","coord":[5,4],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[152.4,112]},{"name":"Groom","coord":[1,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[55.4,136]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Hinkler","coord":[1,3],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[55.4,88]},{"name":"Kennedy","coord":[1,4],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[41.6,112]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Lilley","coord":[6,3],"shortName":"Lille","index":56,"id":"LILL","coordPx":[194,88]},{"name":"Longman","coord":[4,2],"shortName":"Long.","index":134,"id":"LONG","coordPx":[124.7,64]},{"name":"Maranoa","coord":[0,5],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[27.7,136]},{"name":"McPherson","coord":[7,5],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[221.7,136]},{"name":"Moncrieff","coord":[6,5],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[194,136]},{"name":"Moreton","coord":[4,4],"shortName":"More.","index":61,"id":"MORE","coordPx":[124.7,112]},{"name":"Oxley","coord":[3,5],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[110.9,136]},{"name":"Petrie","coord":[4,3],"shortName":"Petri","index":129,"id":"PETR","coordPx":[138.6,88]},{"name":"Rankin","coord":[3,4],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[97,112]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Wide Bay","coord":[4,0],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[124.7,16]},{"name":"Wright","coord":[2,4],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,112]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' data-code='' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BARK' class='hex' data-code='' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BOOT' class='hex' data-code='' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' data-code='' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' data-code='' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='KING' class='hex' data-code='' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' data-code='' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' data-code='' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='SPEN' class='hex' data-code='' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='STUR' class='hex' data-code='' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='SA' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Barker","coord":[0,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[27.7,40]},{"name":"Boothby","coord":[1,3],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Kingston","coord":[1,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Spence","coord":[1,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[55.4,40]},{"name":"Sturt","coord":[0,5],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' data-code='' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' data-code='' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' data-code='' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' data-code='' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' data-code='' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='TAS' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' data-code='' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BALL' class='hex' data-code='' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' data-code='' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' data-code='' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' data-code='' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' data-code='' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='CHIS' class='hex' data-code='' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='COOP' class='hex' data-code='' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='CORA' class='hex' data-code='' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='CORI' class='hex' data-code='' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' data-code='' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' data-code='' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' data-code='' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FRAS' class='hex' data-code='' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' data-code='' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' data-code='' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' data-code='' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='GORT' class='hex' data-code='' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='HAWK' class='hex' data-code='' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='HIGG' class='hex' data-code='' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' data-code='' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' data-code='' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' data-code='' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' data-code='' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' data-code='' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='KOOY' class='hex' data-code='' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' data-code='' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='LALO' class='hex' data-code='' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACN' class='hex' data-code='' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='MALL' class='hex' data-code='' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='MARI' class='hex' data-code='' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' data-code='' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' data-code='' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' data-code='' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' data-code='' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' data-code='' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' data-code='' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='WANN' class='hex' data-code='' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='WILL' class='hex' data-code='' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='VIC' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,110.9,152,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Ballarat","coord":[1,4],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Chisholm","coord":[3,3],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[110.9,88]},{"name":"Cooper","coord":[4,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[124.7,64]},{"name":"Corangamite","coord":[1,5],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[55.4,136]},{"name":"Corio","coord":[0,2],"shortName":"Corio","index":25,"id":"CORI","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Fraser","coord":[2,2],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Gorton","coord":[1,1],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[55.4,40]},{"name":"Hawke","coord":[1,3],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,88]},{"name":"Higgins","coord":[4,4],"shortName":"Higgi.","index":104,"id":"HIGG","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Kooyong","coord":[2,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Lalor","coord":[1,2],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[41.6,64]},{"name":"Macnamara","coord":[3,5],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[110.9,136]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Maribyrnong","coord":[2,4],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Wannon","coord":[0,3],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[27.7,88]},{"name":"Wills","coord":[3,2],"shortName":"Wills","index":44,"id":"WILL","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' data-code='' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' data-code='' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' data-code='' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' data-code='' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' data-code='' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' data-code='' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' data-code='' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' data-code='' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SWAN' class='hex' data-code='' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' data-code='' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='TANG' class='hex' data-code='' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='CANN' class='hex' data-code='' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' data-code='' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' data-code='' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' data-code='' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='WA' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,27.7,168,27.7,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Swan","coord":[2,4],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Tangney","coord":[1,5],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[55.4,136]},{"name":"Canning","coord":[1,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), Kr = {
  svgWidth: Dr,
  svgHeight: Wr,
  groups: Gr
};
function Ur(e, t) {
  Ie(t, !0);
  let o = E(t, "allocations", 23, () => ({})), a = E(t, "certainties", 23, () => ({})), n = E(t, "showStateLabels", 7, !1), r = E(t, "showElectorateLabels", 7, !1), s = E(t, "onClick", 7, () => {
  });
  return ba(e, {
    children: (l, d) => {
      wa(l, {
        config: Kr,
        get layout() {
          return Hr.COUNTRY;
        },
        get allocations() {
          return o();
        },
        get certainties() {
          return a();
        },
        focuses: {},
        get showStateLabels() {
          return n();
        },
        get showElectorateLabels() {
          return r();
        },
        get onClick() {
          return s();
        }
      });
    },
    $$slots: { default: !0 }
  }), ke({
    get allocations() {
      return o();
    },
    set allocations(l = {}) {
      o(l), b();
    },
    get certainties() {
      return a();
    },
    set certainties(l = {}) {
      a(l), b();
    },
    get showStateLabels() {
      return n();
    },
    set showStateLabels(l = !1) {
      n(l), b();
    },
    get showElectorateLabels() {
      return r();
    },
    set showElectorateLabels(l = !1) {
      r(l), b();
    },
    get onClick() {
      return s();
    },
    set onClick(l = () => {
    }) {
      s(l), b();
    }
  });
}
customElements.define("abcnews-hexmap", Ze(
  Ur,
  {
    allocations: {},
    certainties: {},
    showStateLabels: {},
    showElectorateLabels: {},
    onClick: {}
  },
  [],
  [],
  !0
));
export {
  Ur as default
};
