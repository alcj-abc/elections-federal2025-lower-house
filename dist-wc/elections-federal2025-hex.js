var ya = Object.defineProperty;
var fo = (e) => {
  throw TypeError(e);
};
var ma = (e, t, o) => t in e ? ya(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var K = (e, t, o) => ma(e, typeof t != "symbol" ? t + "" : t, o), Tt = (e, t, o) => t.has(e) || fo("Cannot " + o);
var b = (e, t, o) => (Tt(e, t, "read from private field"), o ? o.call(e) : t.get(e)), X = (e, t, o) => t.has(e) ? fo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), Ee = (e, t, o, a) => (Tt(e, t, "write to private field"), a ? a.call(e, o) : t.set(e, o), o), ho = (e, t, o) => (Tt(e, t, "access private method"), o);
const wa = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wa);
const ba = 1, Pa = 2, Aa = 16, Ea = 1, Na = 4, La = 8, Oa = 16, Ca = 4, Ra = 2, Eo = "[", jt = "[!", Vt = "]", Fe = {}, M = Symbol(), Bt = !1, J = 2, No = 4, Nt = 8, Lt = 16, ge = 32, Ue = 64, gt = 128, q = 256, xt = 512, B = 1024, xe = 2048, Ye = 4096, fe = 8192, Ot = 16384, Lo = 32768, nt = 65536, $a = 1 << 19, Oo = 1 << 20, He = Symbol("$state"), Xt = Symbol("legacy props"), Sa = Symbol("");
var Jt = Array.isArray, Ta = Array.prototype.indexOf, Qt = Array.from, _t = Object.keys, Je = Object.defineProperty, he = Object.getOwnPropertyDescriptor, Ia = Object.getOwnPropertyDescriptors, Ma = Object.prototype, ka = Array.prototype, Co = Object.getPrototypeOf;
function Me(e) {
  return typeof e == "function";
}
const G = () => {
};
function Ba(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let yt = !1, Ft = [];
function Ro() {
  yt = !1;
  const e = Ft.slice();
  Ft = [], Ba(e);
}
function Zt(e) {
  yt || (yt = !0, queueMicrotask(Ro)), Ft.push(e);
}
function Fa() {
  yt && Ro();
}
function $o(e) {
  return e === this.v;
}
function So(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ha(e, t) {
  return e !== t;
}
function eo(e) {
  return !So(e, this.v);
}
function Da(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Wa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ga(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function za() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ka() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ua(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ya() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function qa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ja() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Va() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Xa = !1;
function H(e, t) {
  var o = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: $o,
    rv: 0,
    wv: 0
  };
  return o;
}
function Xe(e) {
  return /* @__PURE__ */ Ja(H(e));
}
// @__NO_SIDE_EFFECTS__
function Ct(e, t = !1) {
  const o = H(e);
  return t || (o.equals = eo), o;
}
// @__NO_SIDE_EFFECTS__
function Ja(e) {
  return O !== null && !te && O.f & J && (oe === null ? an([e]) : oe.push(e)), e;
}
function I(e, t) {
  return O !== null && !te && Zo() && O.f & (J | Lt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (oe === null || !oe.includes(e)) && Va(), To(e, t);
}
function To(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = zo(), Io(e, xe), N !== null && N.f & B && !(N.f & (ge | Ue)) && (ie === null ? nn([e]) : ie.push(e))), t;
}
function Io(e, t) {
  var o = e.reactions;
  if (o !== null)
    for (var a = o.length, n = 0; n < a; n++) {
      var r = o[n], s = r.f;
      s & xe || (se(r, t), s & (B | q) && (s & J ? Io(
        /** @type {Derived} */
        r,
        Ye
      ) : St(
        /** @type {Effect} */
        r
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  var t = J | xe, o = O !== null && O.f & J ? (
    /** @type {Derived} */
    O
  ) : null;
  return N === null || o !== null && o.f & q ? t |= q : N.f |= Oo, {
    ctx: D,
    deps: null,
    effects: null,
    equals: $o,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: o ?? N
  };
}
// @__NO_SIDE_EFFECTS__
function Qa(e) {
  const t = /* @__PURE__ */ Pe(e);
  return t.equals = eo, t;
}
function Mo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var o = 0; o < t.length; o += 1)
      Q(
        /** @type {Effect} */
        t[o]
      );
  }
}
function Za(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & J))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function en(e) {
  var t, o = N;
  re(Za(e));
  try {
    Mo(e), t = Uo(e);
  } finally {
    re(o);
  }
  return t;
}
function ko(e) {
  var t = en(e), o = (be || e.f & q) && e.deps !== null ? Ye : B;
  se(e, o), e.equals(t) || (e.v = t, e.wv = zo());
}
function Rt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let L = !1;
function ce(e) {
  L = e;
}
let A;
function j(e) {
  if (e === null)
    throw Rt(), Fe;
  return A = e;
}
function Oe() {
  return j(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _e(A)
  );
}
function z(e) {
  if (L) {
    if (/* @__PURE__ */ _e(A) !== null)
      throw Rt(), Fe;
    A = e;
  }
}
function Ht() {
  for (var e = 0, t = A; ; ) {
    if (t.nodeType === 8) {
      var o = (
        /** @type {Comment} */
        t.data
      );
      if (o === Vt) {
        if (e === 0) return t;
        e -= 1;
      } else (o === Eo || o === jt) && (e += 1);
    }
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(t)
    );
    t.remove(), t = a;
  }
}
function ke(e, t = null, o) {
  if (typeof e != "object" || e === null || He in e)
    return e;
  const a = Co(e);
  if (a !== Ma && a !== ka)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Jt(e), s = H(0);
  r && n.set("length", H(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, i, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Ya();
        var f = n.get(i);
        return f === void 0 ? (f = H(l.value), n.set(i, f)) : I(f, ke(l.value, c)), !0;
      },
      deleteProperty(d, i) {
        var l = n.get(i);
        if (l === void 0)
          i in d && n.set(i, H(M));
        else {
          if (r && typeof i == "string") {
            var f = (
              /** @type {Source<number>} */
              n.get("length")
            ), u = Number(i);
            Number.isInteger(u) && u < f.v && I(f, u);
          }
          I(l, M), po(s);
        }
        return !0;
      },
      get(d, i, l) {
        var p;
        if (i === He)
          return e;
        var f = n.get(i), u = i in d;
        if (f === void 0 && (!u || (p = he(d, i)) != null && p.writable) && (f = H(ke(u ? d[i] : M, c)), n.set(i, f)), f !== void 0) {
          var h = g(f);
          return h === M ? void 0 : h;
        }
        return Reflect.get(d, i, l);
      },
      getOwnPropertyDescriptor(d, i) {
        var l = Reflect.getOwnPropertyDescriptor(d, i);
        if (l && "value" in l) {
          var f = n.get(i);
          f && (l.value = g(f));
        } else if (l === void 0) {
          var u = n.get(i), h = u == null ? void 0 : u.v;
          if (u !== void 0 && h !== M)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return l;
      },
      has(d, i) {
        var h;
        if (i === He)
          return !0;
        var l = n.get(i), f = l !== void 0 && l.v !== M || Reflect.has(d, i);
        if (l !== void 0 || N !== null && (!f || (h = he(d, i)) != null && h.writable)) {
          l === void 0 && (l = H(f ? ke(d[i], c) : M), n.set(i, l));
          var u = g(l);
          if (u === M)
            return !1;
        }
        return f;
      },
      set(d, i, l, f) {
        var R;
        var u = n.get(i), h = i in d;
        if (r && i === "length")
          for (var p = l; p < /** @type {Source<number>} */
          u.v; p += 1) {
            var v = n.get(p + "");
            v !== void 0 ? I(v, M) : p in d && (v = H(M), n.set(p + "", v));
          }
        u === void 0 ? (!h || (R = he(d, i)) != null && R.writable) && (u = H(void 0), I(u, ke(l, c)), n.set(i, u)) : (h = u.v !== M, I(u, ke(l, c)));
        var _ = Reflect.getOwnPropertyDescriptor(d, i);
        if (_ != null && _.set && _.set.call(f, l), !h) {
          if (r && typeof i == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), m = Number(i);
            Number.isInteger(m) && m >= y.v && I(y, m + 1);
          }
          po(s);
        }
        return !0;
      },
      ownKeys(d) {
        g(s);
        var i = Reflect.ownKeys(d).filter((u) => {
          var h = n.get(u);
          return h === void 0 || h.v !== M;
        });
        for (var [l, f] of n)
          f.v !== M && !(l in d) && i.push(l);
        return i;
      },
      setPrototypeOf() {
        qa();
      }
    }
  );
}
function po(e, t = 1) {
  I(e, e.v + t);
}
var vo, Bo, Fo, Ho;
function Dt() {
  if (vo === void 0) {
    vo = window, Bo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Fo = he(t, "firstChild").get, Ho = he(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ke(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  return Fo.call(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return Ho.call(e);
}
function ee(e, t) {
  if (!L)
    return /* @__PURE__ */ Y(e);
  var o = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Y(A)
  );
  if (o === null)
    o = A.appendChild(Ke());
  else if (t && o.nodeType !== 3) {
    var a = Ke();
    return o == null || o.before(a), j(a), a;
  }
  return j(o), o;
}
function tn(e, t) {
  if (!L) {
    var o = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Y(
        /** @type {Node} */
        e
      )
    );
    return o instanceof Comment && o.data === "" ? /* @__PURE__ */ _e(o) : o;
  }
  return A;
}
function ft(e, t = 1, o = !1) {
  let a = L ? A : e;
  for (var n; t--; )
    n = a, a = /** @type {TemplateNode} */
    /* @__PURE__ */ _e(a);
  if (!L)
    return a;
  var r = a == null ? void 0 : a.nodeType;
  if (o && r !== 3) {
    var s = Ke();
    return a === null ? n == null || n.after(s) : a.before(s), j(s), s;
  }
  return j(a), /** @type {TemplateNode} */
  a;
}
function Do(e) {
  e.textContent = "";
}
const Wo = 0, on = 1;
let ht = !1, pt = Wo, Qe = !1, Ze = null, De = !1, to = !1;
function go(e) {
  De = e;
}
function xo(e) {
  to = e;
}
let Ne = [], We = 0;
let O = null, te = !1;
function ne(e) {
  O = e;
}
let N = null;
function re(e) {
  N = e;
}
let oe = null;
function an(e) {
  oe = e;
}
let k = null, W = 0, ie = null;
function nn(e) {
  ie = e;
}
let Go = 1, mt = 0, be = !1;
function zo() {
  return ++Go;
}
function rt(e) {
  var f;
  var t = e.f;
  if (t & xe)
    return !0;
  if (t & Ye) {
    var o = e.deps, a = (t & q) !== 0;
    if (o !== null) {
      var n, r, s = (t & xt) !== 0, c = a && N !== null && !be, d = o.length;
      if (s || c) {
        var i = (
          /** @type {Derived} */
          e
        ), l = i.parent;
        for (n = 0; n < d; n++)
          r = o[n], (s || !((f = r == null ? void 0 : r.reactions) != null && f.includes(i))) && (r.reactions ?? (r.reactions = [])).push(i);
        s && (i.f ^= xt), c && l !== null && !(l.f & q) && (i.f ^= q);
      }
      for (n = 0; n < d; n++)
        if (r = o[n], rt(
          /** @type {Derived} */
          r
        ) && ko(
          /** @type {Derived} */
          r
        ), r.wv > e.wv)
          return !0;
    }
    (!a || N !== null && !be) && se(e, B);
  }
  return !1;
}
function rn(e, t) {
  for (var o = t; o !== null; ) {
    if (o.f & gt)
      try {
        o.fn(e);
        return;
      } catch {
        o.f ^= gt;
      }
    o = o.parent;
  }
  throw ht = !1, e;
}
function sn(e) {
  return (e.f & Ot) === 0 && (e.parent === null || (e.parent.f & gt) === 0);
}
function $t(e, t, o, a) {
  if (ht) {
    if (o === null && (ht = !1), sn(t))
      throw e;
    return;
  }
  o !== null && (ht = !0);
  {
    rn(e, t);
    return;
  }
}
function Ko(e, t, o = !0) {
  var a = e.reactions;
  if (a !== null)
    for (var n = 0; n < a.length; n++) {
      var r = a[n];
      r.f & J ? Ko(
        /** @type {Derived} */
        r,
        t,
        !1
      ) : t === r && (o ? se(r, xe) : r.f & B && se(r, Ye), St(
        /** @type {Effect} */
        r
      ));
    }
}
function Uo(e) {
  var h;
  var t = k, o = W, a = ie, n = O, r = be, s = oe, c = D, d = te, i = e.f;
  k = /** @type {null | Value[]} */
  null, W = 0, ie = null, O = i & (ge | Ue) ? null : e, be = (i & q) !== 0 && (!De || n === null || d), oe = null, _o(e.ctx), te = !1, mt++;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (k !== null) {
      var u;
      if (wt(e, W), f !== null && W > 0)
        for (f.length = W + k.length, u = 0; u < k.length; u++)
          f[W + u] = k[u];
      else
        e.deps = f = k;
      if (!be)
        for (u = W; u < f.length; u++)
          ((h = f[u]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && W < f.length && (wt(e, W), f.length = W);
    if (Zo() && ie !== null && !te && f !== null && !(e.f & (J | Ye | xe)))
      for (u = 0; u < /** @type {Source[]} */
      ie.length; u++)
        Ko(
          ie[u],
          /** @type {Effect} */
          e
        );
    return n !== null && mt++, l;
  } finally {
    k = t, W = o, ie = a, O = n, be = r, oe = s, _o(c), te = d;
  }
}
function ln(e, t) {
  let o = t.reactions;
  if (o !== null) {
    var a = Ta.call(o, e);
    if (a !== -1) {
      var n = o.length - 1;
      n === 0 ? o = t.reactions = null : (o[a] = o[n], o.pop());
    }
  }
  o === null && t.f & J && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (k === null || !k.includes(t)) && (se(t, Ye), t.f & (q | xt) || (t.f ^= xt), Mo(
    /** @type {Derived} **/
    t
  ), wt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function wt(e, t) {
  var o = e.deps;
  if (o !== null)
    for (var a = t; a < o.length; a++)
      ln(e, o[a]);
}
function oo(e) {
  var t = e.f;
  if (!(t & Ot)) {
    se(e, B);
    var o = N, a = D;
    N = e;
    try {
      t & Lt ? _n(e) : Vo(e), jo(e);
      var n = Uo(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Go;
      var r = e.deps, s;
      Bt && Xa && e.f & xe;
    } catch (c) {
      $t(c, e, o, a || e.ctx);
    } finally {
      N = o;
    }
  }
}
function Yo() {
  if (We > 1e3) {
    We = 0;
    try {
      za();
    } catch (e) {
      if (Ze !== null)
        $t(e, Ze, null);
      else
        throw e;
    }
  }
  We++;
}
function qo(e) {
  var t = e.length;
  if (t !== 0) {
    Yo();
    var o = De;
    De = !0;
    try {
      for (var a = 0; a < t; a++) {
        var n = e[a];
        n.f & B || (n.f ^= B);
        var r = un(n);
        dn(r);
      }
    } finally {
      De = o;
    }
  }
}
function dn(e) {
  var t = e.length;
  if (t !== 0)
    for (var o = 0; o < t; o++) {
      var a = e[o];
      if (!(a.f & (Ot | fe)))
        try {
          rt(a) && (oo(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null ? Xo(a) : a.fn = null));
        } catch (n) {
          $t(n, a, null, a.ctx);
        }
    }
}
function cn() {
  if (Qe = !1, We > 1001)
    return;
  const e = Ne;
  Ne = [], qo(e), Qe || (We = 0, Ze = null);
}
function St(e) {
  pt === Wo && (Qe || (Qe = !0, queueMicrotask(cn))), Ze = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var o = t.f;
    if (o & (Ue | ge)) {
      if (!(o & B)) return;
      t.f ^= B;
    }
  }
  Ne.push(t);
}
function un(e) {
  var t = [], o = e.first;
  e: for (; o !== null; ) {
    var a = o.f, n = (a & ge) !== 0, r = n && (a & B) !== 0, s = o.next;
    if (!r && !(a & fe)) {
      if (a & No)
        t.push(o);
      else if (n)
        o.f ^= B;
      else {
        var c = O;
        try {
          O = o, rt(o) && oo(o);
        } catch (l) {
          $t(l, o, null, o.ctx);
        } finally {
          O = c;
        }
      }
      var d = o.first;
      if (d !== null) {
        o = d;
        continue;
      }
    }
    if (s === null) {
      let l = o.parent;
      for (; l !== null; ) {
        if (e === l)
          break e;
        var i = l.next;
        if (i !== null) {
          o = i;
          continue e;
        }
        l = l.parent;
      }
    }
    o = s;
  }
  return t;
}
function P(e) {
  var t = pt, o = Ne;
  try {
    Yo();
    const n = [];
    pt = on, Ne = n, Qe = !1, qo(o);
    var a = e == null ? void 0 : e();
    return Fa(), (Ne.length > 0 || n.length > 0) && P(), We = 0, Ze = null, a;
  } finally {
    pt = t, Ne = o;
  }
}
function g(e) {
  var t = e.f, o = (t & J) !== 0;
  if (O !== null && !te) {
    oe !== null && oe.includes(e) && ja();
    var a = O.deps;
    e.rv < mt && (e.rv = mt, k === null && a !== null && a[W] === e ? W++ : k === null ? k = [e] : (!be || !k.includes(e)) && k.push(e));
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
  e, rt(n) && ko(n)), e.v;
}
function pe(e) {
  var t = te;
  try {
    return te = !0, e();
  } finally {
    te = t;
  }
}
const fn = -7169;
function se(e, t) {
  e.f = e.f & fn | t;
}
function hn(e) {
  N === null && O === null && Ga(), O !== null && O.f & q && N === null && Wa(), to && Da();
}
function pn(e, t) {
  var o = t.last;
  o === null ? t.last = t.first = e : (o.next = e, e.prev = o, t.last = e);
}
function Ce(e, t, o, a = !0) {
  var n = (e & Ue) !== 0, r = N, s = {
    ctx: D,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | xe,
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
    var c = De;
    try {
      go(!0), oo(s), s.f |= Lo;
    } catch (l) {
      throw Q(s), l;
    } finally {
      go(c);
    }
  } else t !== null && St(s);
  var d = o && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Oo | gt)) === 0;
  if (!d && !n && a && (r !== null && pn(s, r), O !== null && O.f & J)) {
    var i = (
      /** @type {Derived} */
      O
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return s;
}
function vn(e) {
  const t = Ce(Nt, null, !1);
  return se(t, B), t.teardown = e, t;
}
function bt(e) {
  hn();
  var t = N !== null && (N.f & ge) !== 0 && D !== null && !D.m;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      D
    );
    (o.e ?? (o.e = [])).push({
      fn: e,
      effect: N,
      reaction: O
    });
  } else {
    var a = st(e);
    return a;
  }
}
function gn(e) {
  const t = Ce(Ue, e, !0);
  return () => {
    Q(t);
  };
}
function xn(e) {
  const t = Ce(Ue, e, !0);
  return (o = {}) => new Promise((a) => {
    o.outro ? tt(t, () => {
      Q(t), a(void 0);
    }) : (Q(t), a(void 0));
  });
}
function st(e) {
  return Ce(No, e, !1);
}
function ao(e) {
  return Ce(Nt, e, !0);
}
function et(e, t = [], o = Pe) {
  const a = t.map(o);
  return qe(() => e(...a.map(g)));
}
function qe(e, t = 0) {
  return Ce(Nt | Lt | t, e, !0);
}
function Ae(e, t = !0) {
  return Ce(Nt | ge, e, !0, t);
}
function jo(e) {
  var t = e.teardown;
  if (t !== null) {
    const o = to, a = O;
    xo(!0), ne(null);
    try {
      t.call(null);
    } finally {
      xo(o), ne(a);
    }
  }
}
function Vo(e, t = !1) {
  var o = e.first;
  for (e.first = e.last = null; o !== null; ) {
    var a = o.next;
    Q(o, t), o = a;
  }
}
function _n(e) {
  for (var t = e.first; t !== null; ) {
    var o = t.next;
    t.f & ge || Q(t), t = o;
  }
}
function Q(e, t = !0) {
  var o = !1;
  if ((t || e.f & $a) && e.nodes_start !== null) {
    for (var a = e.nodes_start, n = e.nodes_end; a !== null; ) {
      var r = a === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(a)
      );
      a.remove(), a = r;
    }
    o = !0;
  }
  Vo(e, t && !o), wt(e, 0), se(e, Ot);
  var s = e.transitions;
  if (s !== null)
    for (const d of s)
      d.stop();
  jo(e);
  var c = e.parent;
  c !== null && c.first !== null && Xo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Xo(e) {
  var t = e.parent, o = e.prev, a = e.next;
  o !== null && (o.next = a), a !== null && (a.prev = o), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = o));
}
function tt(e, t) {
  var o = [];
  no(e, o, !0), Jo(o, () => {
    Q(e), t && t();
  });
}
function Jo(e, t) {
  var o = e.length;
  if (o > 0) {
    var a = () => --o || t();
    for (var n of e)
      n.out(a);
  } else
    t();
}
function no(e, t, o) {
  if (!(e.f & fe)) {
    if (e.f ^= fe, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || o) && t.push(s);
    for (var a = e.first; a !== null; ) {
      var n = a.next, r = (a.f & nt) !== 0 || (a.f & ge) !== 0;
      no(a, t, r ? o : !1), a = n;
    }
  }
}
function Pt(e) {
  Qo(e, !0);
}
function Qo(e, t) {
  if (e.f & fe) {
    e.f ^= fe, e.f & B || (e.f ^= B), rt(e) && (se(e, xe), St(e));
    for (var o = e.first; o !== null; ) {
      var a = o.next, n = (o.f & nt) !== 0 || (o.f & ge) !== 0;
      Qo(o, n ? t : !1), o = a;
    }
    if (e.transitions !== null)
      for (const r of e.transitions)
        (r.is_global || t) && r.in();
  }
}
function yn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let D = null;
function _o(e) {
  D = e;
}
function Re(e, t = !1, o) {
  D = {
    p: D,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function $e(e) {
  const t = D;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var o = N, a = O;
      t.e = null;
      try {
        for (var n = 0; n < s.length; n++) {
          var r = s[n];
          re(r.effect), ne(r.reaction), st(r.fn);
        }
      } finally {
        re(o), ne(a);
      }
    }
    D = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Zo() {
  return !0;
}
const mn = ["touchstart", "touchmove"];
function wn(e) {
  return mn.includes(e);
}
function bn(e) {
  var t = O, o = N;
  ne(null), re(null);
  try {
    return e();
  } finally {
    ne(t), re(o);
  }
}
const ea = /* @__PURE__ */ new Set(), Wt = /* @__PURE__ */ new Set();
function Pn(e) {
  for (var t = 0; t < e.length; t++)
    ea.add(e[t]);
  for (var o of Wt)
    o(e);
}
function dt(e) {
  var m;
  var t = this, o = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, n = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], r = (
    /** @type {null | Element} */
    n[0] || e.target
  ), s = 0, c = e.__root;
  if (c) {
    var d = n.indexOf(c);
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
    Je(e, "currentTarget", {
      configurable: !0,
      get() {
        return r || o;
      }
    });
    var l = O, f = N;
    ne(null), re(null);
    try {
      for (var u, h = []; r !== null; ) {
        var p = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var v = r["__" + a];
          if (v !== void 0 && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === r))
            if (Jt(v)) {
              var [_, ...y] = v;
              _.apply(r, [e, ...y]);
            } else
              v.call(r, e);
        } catch (R) {
          u ? h.push(R) : u = R;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        r = p;
      }
      if (u) {
        for (let R of h)
          queueMicrotask(() => {
            throw R;
          });
        throw u;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ne(l), re(f);
    }
  }
}
function ro(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ve(e, t) {
  var o = (
    /** @type {Effect} */
    N
  );
  o.nodes_start === null && (o.nodes_start = e, o.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function it(e, t) {
  var o = (t & Ra) !== 0, a, n = !e.startsWith("<!>");
  return () => {
    if (L)
      return ve(A, null), A;
    a === void 0 && (a = ro(n ? e : "<!>" + e), a = /** @type {Node} */
    /* @__PURE__ */ Y(a));
    var r = (
      /** @type {TemplateNode} */
      o || Bo ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    return ve(r, r), r;
  };
}
// @__NO_SIDE_EFFECTS__
function so(e, t, o = "svg") {
  var a = !e.startsWith("<!>"), n = `<${o}>${a ? e : "<!>" + e}</${o}>`, r;
  return () => {
    if (L)
      return ve(A, null), A;
    if (!r) {
      var s = (
        /** @type {DocumentFragment} */
        ro(n)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Y(s)
      );
      r = /** @type {Element} */
      /* @__PURE__ */ Y(c);
    }
    var d = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return ve(d, d), d;
  };
}
function An() {
  if (L)
    return ve(A, null), A;
  var e = document.createDocumentFragment(), t = document.createComment(""), o = Ke();
  return e.append(t, o), ve(t, o), e;
}
function ae(e, t) {
  if (L) {
    N.nodes_end = A, Oe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Gt = !0;
function ta(e, t) {
  var o = t == null ? "" : typeof t == "object" ? t + "" : t;
  o !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = o, e.nodeValue = o + "");
}
function oa(e, t) {
  return aa(e, t);
}
function En(e, t) {
  Dt(), t.intro = t.intro ?? !1;
  const o = t.target, a = L, n = A;
  try {
    for (var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Y(o)
    ); r && (r.nodeType !== 8 || /** @type {Comment} */
    r.data !== Eo); )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ _e(r);
    if (!r)
      throw Fe;
    ce(!0), j(
      /** @type {Comment} */
      r
    ), Oe();
    const s = aa(e, { ...t, anchor: r });
    if (A === null || A.nodeType !== 8 || /** @type {Comment} */
    A.data !== Vt)
      throw Rt(), Fe;
    return ce(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Fe)
      return t.recover === !1 && Ka(), Dt(), Do(o), ce(!1), oa(e, t);
    throw s;
  } finally {
    ce(a), j(n);
  }
}
const Te = /* @__PURE__ */ new Map();
function aa(e, { target: t, anchor: o, props: a = {}, events: n, context: r, intro: s = !0 }) {
  Dt();
  var c = /* @__PURE__ */ new Set(), d = (f) => {
    for (var u = 0; u < f.length; u++) {
      var h = f[u];
      if (!c.has(h)) {
        c.add(h);
        var p = wn(h);
        t.addEventListener(h, dt, { passive: p });
        var v = Te.get(h);
        v === void 0 ? (document.addEventListener(h, dt, { passive: p }), Te.set(h, 1)) : Te.set(h, v + 1);
      }
    }
  };
  d(Qt(ea)), Wt.add(d);
  var i = void 0, l = xn(() => {
    var f = o ?? t.appendChild(Ke());
    return Ae(() => {
      if (r) {
        Re({});
        var u = (
          /** @type {ComponentContext} */
          D
        );
        u.c = r;
      }
      n && (a.$$events = n), L && ve(
        /** @type {TemplateNode} */
        f,
        null
      ), Gt = s, i = e(f, a) || {}, Gt = !0, L && (N.nodes_end = A), r && $e();
    }), () => {
      var p;
      for (var u of c) {
        t.removeEventListener(u, dt);
        var h = (
          /** @type {number} */
          Te.get(u)
        );
        --h === 0 ? (document.removeEventListener(u, dt), Te.delete(u)) : Te.set(u, h);
      }
      Wt.delete(d), f !== o && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return zt.set(i, l), i;
}
let zt = /* @__PURE__ */ new WeakMap();
function Nn(e, t) {
  const o = zt.get(e);
  return o ? (zt.delete(e), o(t)) : Promise.resolve();
}
function na(e, t, o = !1) {
  L && Oe();
  var a = e, n = null, r = null, s = M, c = o ? nt : 0, d = !1;
  const i = (f, u = !0) => {
    d = !0, l(u, f);
  }, l = (f, u) => {
    if (s === (s = f)) return;
    let h = !1;
    if (L) {
      const p = (
        /** @type {Comment} */
        a.data === jt
      );
      !!s === p && (a = Ht(), j(a), ce(!1), h = !0);
    }
    s ? (n ? Pt(n) : u && (n = Ae(() => u(a))), r && tt(r, () => {
      r = null;
    })) : (r ? Pt(r) : u && (r = Ae(() => u(a))), n && tt(n, () => {
      n = null;
    })), h && ce(!0);
  };
  qe(() => {
    d = !1, t(i), d || l(null, null);
  }, c), L && (a = A);
}
function Ln(e, t, o) {
  L && Oe();
  var a = e, n = M, r, s = Ha;
  qe(() => {
    s(n, n = t()) && (r && tt(r), r = Ae(() => o(a)));
  }), L && (a = A);
}
function io(e, t) {
  return t;
}
function On(e, t, o, a) {
  for (var n = [], r = t.length, s = 0; s < r; s++)
    no(t[s].e, n, !0);
  var c = r > 0 && n.length === 0 && o !== null;
  if (c) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      o.parentNode
    );
    Do(d), d.append(
      /** @type {Element} */
      o
    ), a.clear(), me(e, t[0].prev, t[r - 1].next);
  }
  Jo(n, () => {
    for (var i = 0; i < r; i++) {
      var l = t[i];
      c || (a.delete(l.k), me(e, l.prev, l.next)), Q(l.e, !c);
    }
  });
}
function lo(e, t, o, a, n, r = null) {
  var s = e, c = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var d = (
      /** @type {Element} */
      e
    );
    s = L ? j(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Y(d)
    ) : d.appendChild(Ke());
  }
  L && Oe();
  var i = null, l = !1, f = /* @__PURE__ */ Qa(() => {
    var u = o();
    return Jt(u) ? u : u == null ? [] : Qt(u);
  });
  qe(() => {
    var u = g(f), h = u.length;
    if (l && h === 0)
      return;
    l = h === 0;
    let p = !1;
    if (L) {
      var v = (
        /** @type {Comment} */
        s.data === jt
      );
      v !== (h === 0) && (s = Ht(), j(s), ce(!1), p = !0);
    }
    if (L) {
      for (var _ = null, y, m = 0; m < h; m++) {
        if (A.nodeType === 8 && /** @type {Comment} */
        A.data === Vt) {
          s = /** @type {Comment} */
          A, p = !0, ce(!1);
          break;
        }
        var R = u[m], S = a(R, m);
        y = ra(
          A,
          c,
          _,
          null,
          R,
          S,
          m,
          n,
          t,
          o
        ), c.items.set(S, y), _ = y;
      }
      h > 0 && j(Ht());
    }
    L || Cn(u, c, s, n, t, a, o), r !== null && (h === 0 ? i ? Pt(i) : i = Ae(() => r(s)) : i !== null && tt(i, () => {
      i = null;
    })), p && ce(!0), g(f);
  }), L && (s = A);
}
function Cn(e, t, o, a, n, r, s) {
  var c = e.length, d = t.items, i = t.first, l = i, f, u = null, h = [], p = [], v, _, y, m;
  for (m = 0; m < c; m += 1) {
    if (v = e[m], _ = r(v, m), y = d.get(_), y === void 0) {
      var R = l ? (
        /** @type {TemplateNode} */
        l.e.nodes_start
      ) : o;
      u = ra(
        R,
        t,
        u,
        u === null ? t.first : u.next,
        v,
        _,
        m,
        a,
        n,
        s
      ), d.set(_, u), h = [], p = [], l = u.next;
      continue;
    }
    if (Rn(y, v, m), y.e.f & fe && Pt(y.e), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (h.length < p.length) {
          var S = p[0], T;
          u = S.prev;
          var C = h[0], $ = h[h.length - 1];
          for (T = 0; T < h.length; T += 1)
            yo(h[T], S, o);
          for (T = 0; T < p.length; T += 1)
            f.delete(p[T]);
          me(t, C.prev, $.next), me(t, u, C), me(t, $, S), l = S, u = $, m -= 1, h = [], p = [];
        } else
          f.delete(y), yo(y, l, o), me(t, y.prev, y.next), me(t, y, u === null ? t.first : u.next), me(t, u, y), u = y;
        continue;
      }
      for (h = [], p = []; l !== null && l.k !== _; )
        l.e.f & fe || (f ?? (f = /* @__PURE__ */ new Set())).add(l), p.push(l), l = l.next;
      if (l === null)
        continue;
      y = l;
    }
    h.push(y), u = y, l = y.next;
  }
  if (l !== null || f !== void 0) {
    for (var F = f === void 0 ? [] : Qt(f); l !== null; )
      l.e.f & fe || F.push(l), l = l.next;
    var V = F.length;
    if (V > 0) {
      var w = c === 0 ? o : null;
      On(t, F, w, d);
    }
  }
  N.first = t.first && t.first.e, N.last = u && u.e;
}
function Rn(e, t, o, a) {
  To(e.v, t), e.i = o;
}
function ra(e, t, o, a, n, r, s, c, d, i) {
  var l = (d & ba) !== 0, f = (d & Aa) === 0, u = l ? f ? /* @__PURE__ */ Ct(n) : H(n) : n, h = d & Pa ? H(s) : s, p = {
    i: h,
    v: u,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    prev: o,
    next: a
  };
  try {
    return p.e = Ae(() => c(e, u, h, i), L), p.e.prev = o && o.e, p.e.next = a && a.e, o === null ? t.first = p : (o.next = p, o.e.next = p.e), a !== null && (a.prev = p, a.e.prev = p.e), p;
  } finally {
  }
}
function yo(e, t, o) {
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
function me(e, t, o) {
  t === null ? e.first = o : (t.next = o, t.e.next = o && o.e), o !== null && (o.prev = t, o.e.prev = t && t.e);
}
function It(e, t, o, a, n) {
  var r = e, s = "", c;
  qe(() => {
    if (s === (s = t() ?? "")) {
      L && Oe();
      return;
    }
    c !== void 0 && (Q(c), c = void 0), s !== "" && (c = Ae(() => {
      if (L) {
        A.data;
        for (var d = Oe(), i = d; d !== null && (d.nodeType !== 8 || /** @type {Comment} */
        d.data !== ""); )
          i = d, d = /** @type {TemplateNode} */
          /* @__PURE__ */ _e(d);
        if (d === null)
          throw Rt(), Fe;
        ve(A, i), r = j(d);
        return;
      }
      var l = s + "";
      l = `<svg>${l}</svg>`;
      var f = ro(l);
      for (f = /** @type {Element} */
      /* @__PURE__ */ Y(f), ve(
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
function $n(e, t, ...o) {
  var a = e, n = G, r;
  qe(() => {
    n !== (n = t()) && (r && (Q(r), r = null), r = Ae(() => (
      /** @type {SnippetFn} */
      n(a, ...o)
    )));
  }, nt), L && (a = A);
}
function lt(e, t) {
  Zt(() => {
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
function co(e, t, o, a) {
  var n = e.__attributes ?? (e.__attributes = {});
  L && (n[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || n[t] !== (n[t] = o) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Sa] = o), o == null ? e.removeAttribute(t) : typeof o != "string" && Sn(e).includes(t) ? e[t] = o : e.setAttribute(t, o));
}
var mo = /* @__PURE__ */ new Map();
function Sn(e) {
  var t = mo.get(e.nodeName);
  if (t) return t;
  mo.set(e.nodeName, t = []);
  for (var o, a = e, n = Element.prototype; n !== a; ) {
    o = Ia(a);
    for (var r in o)
      o[r].set && t.push(r);
    a = Co(a);
  }
  return t;
}
function Mt(e, t, o) {
  if (o) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function ue(e, t, o, a) {
  var n = e.__styles ?? (e.__styles = {});
  n[t] !== o && (n[t] = o, o == null ? e.style.removeProperty(t) : e.style.setProperty(t, o, ""));
}
const Tn = () => performance.now(), Z = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Tn(),
  tasks: /* @__PURE__ */ new Set()
};
function sa() {
  const e = Z.now();
  Z.tasks.forEach((t) => {
    t.c(e) || (Z.tasks.delete(t), t.f());
  }), Z.tasks.size !== 0 && Z.tick(sa);
}
function ia(e) {
  let t;
  return Z.tasks.size === 0 && Z.tick(sa), {
    promise: new Promise((o) => {
      Z.tasks.add(t = { c: e, f: o });
    }),
    abort() {
      Z.tasks.delete(t);
    }
  };
}
function ct(e, t) {
  bn(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function In(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (o) => o[0].toUpperCase() + o.slice(1)
  ).join("");
}
function wo(e) {
  const t = {}, o = e.split(";");
  for (const a of o) {
    const [n, r] = a.split(":");
    if (!n || r === void 0) break;
    const s = In(n.trim());
    t[s] = r.trim();
  }
  return t;
}
const Mn = (e) => e;
function kn(e, t, o, a) {
  var n = (e & Ca) !== 0, r = "both", s, c = t.inert, d = t.style.overflow, i, l;
  function f() {
    var _ = O, y = N;
    ne(null), re(null);
    try {
      return s ?? (s = o()(t, (a == null ? void 0 : a()) ?? /** @type {P} */
      {}, {
        direction: r
      }));
    } finally {
      ne(_), re(y);
    }
  }
  var u = {
    is_global: n,
    in() {
      t.inert = c, ct(t, "introstart"), i = Kt(t, f(), l, 1, () => {
        ct(t, "introend"), i == null || i.abort(), i = s = void 0, t.style.overflow = d;
      });
    },
    out(_) {
      t.inert = !0, ct(t, "outrostart"), l = Kt(t, f(), i, 0, () => {
        ct(t, "outroend"), _ == null || _();
      });
    },
    stop: () => {
      i == null || i.abort(), l == null || l.abort();
    }
  }, h = (
    /** @type {Effect} */
    N
  );
  if ((h.transitions ?? (h.transitions = [])).push(u), Gt) {
    var p = n;
    if (!p) {
      for (var v = (
        /** @type {Effect | null} */
        h.parent
      ); v && v.f & nt; )
        for (; (v = v.parent) && !(v.f & Lt); )
          ;
      p = !v || (v.f & Lo) !== 0;
    }
    p && st(() => {
      pe(() => u.in());
    });
  }
}
function Kt(e, t, o, a, n) {
  var r = a === 1;
  if (Me(t)) {
    var s, c = !1;
    return Zt(() => {
      if (!c) {
        var _ = t({ direction: r ? "in" : "out" });
        s = Kt(e, _, o, a, n);
      }
    }), {
      abort: () => {
        c = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (o == null || o.deactivate(), !(t != null && t.duration))
    return n(), {
      abort: G,
      deactivate: G,
      reset: G,
      t: () => a
    };
  const { delay: d = 0, css: i, tick: l, easing: f = Mn } = t;
  var u = [];
  if (r && o === void 0 && (l && l(0, 1), i)) {
    var h = wo(i(0, 1));
    u.push(h, h);
  }
  var p = () => 1 - a, v = e.animate(u, { duration: d });
  return v.onfinish = () => {
    var _ = (o == null ? void 0 : o.t()) ?? 1 - a;
    o == null || o.abort();
    var y = a - _, m = (
      /** @type {number} */
      t.duration * Math.abs(y)
    ), R = [];
    if (m > 0) {
      var S = !1;
      if (i)
        for (var T = Math.ceil(m / 16.666666666666668), C = 0; C <= T; C += 1) {
          var $ = _ + y * f(C / T), F = wo(i($, 1 - $));
          R.push(F), S || (S = F.overflow === "hidden");
        }
      S && (e.style.overflow = "hidden"), p = () => {
        var V = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          v.currentTime
        );
        return _ + y * f(V / m);
      }, l && ia(() => {
        if (v.playState !== "running") return !1;
        var V = p();
        return l(V, 1 - V), !0;
      });
    }
    v = e.animate(R, { duration: m, fill: "forwards" }), v.onfinish = () => {
      p = () => a, l == null || l(a, 1 - a), n();
    };
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = G);
    },
    deactivate: () => {
      n = G;
    },
    reset: () => {
      a === 0 && (l == null || l(1, 0));
    },
    t: () => p()
  };
}
var we, Ge, ot, At, la;
const Et = class Et {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    X(this, At);
    /** */
    X(this, we, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    X(this, Ge);
    /** @type {ResizeObserverOptions} */
    X(this, ot);
    Ee(this, ot, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, o) {
    var a = b(this, we).get(t) || /* @__PURE__ */ new Set();
    return a.add(o), b(this, we).set(t, a), ho(this, At, la).call(this).observe(t, b(this, ot)), () => {
      var n = b(this, we).get(t);
      n.delete(o), n.size === 0 && (b(this, we).delete(t), b(this, Ge).unobserve(t));
    };
  }
};
we = new WeakMap(), Ge = new WeakMap(), ot = new WeakMap(), At = new WeakSet(), la = function() {
  return b(this, Ge) ?? Ee(this, Ge, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var o of t) {
        Et.entries.set(o.target, o);
        for (var a of b(this, we).get(o.target) || [])
          a(o);
      }
    }
  ));
}, /** @static */
K(Et, "entries", /* @__PURE__ */ new WeakMap());
let Ut = Et;
var Bn = /* @__PURE__ */ new Ut({
  box: "border-box"
});
function bo(e, t, o) {
  var a = Bn.observe(e, () => o(e[t]));
  st(() => (pe(() => o(e[t])), a));
}
function Po(e, t) {
  return e === t || (e == null ? void 0 : e[He]) === t;
}
function da(e = {}, t, o, a) {
  return st(() => {
    var n, r;
    return ao(() => {
      n = r, r = [], pe(() => {
        e !== o(...r) && (t(e, ...r), n && Po(o(...n), e) && t(null, ...n));
      });
    }), () => {
      Zt(() => {
        r && Po(o(...r), e) && t(null, ...r);
      });
    };
  }), e;
}
function Fn(e) {
  D === null && yn(), bt(() => {
    const t = pe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ca(e, t, o) {
  if (e == null)
    return t(void 0), G;
  const a = pe(
    () => e.subscribe(
      t,
      // @ts-expect-error
      o
    )
  );
  return a.unsubscribe ? () => a.unsubscribe() : a;
}
const Ie = [];
function Hn(e, t = G) {
  let o = null;
  const a = /* @__PURE__ */ new Set();
  function n(c) {
    if (So(e, c) && (e = c, o)) {
      const d = !Ie.length;
      for (const i of a)
        i[1](), Ie.push(i, e);
      if (d) {
        for (let i = 0; i < Ie.length; i += 2)
          Ie[i][0](Ie[i + 1]);
        Ie.length = 0;
      }
    }
  }
  function r(c) {
    n(c(
      /** @type {T} */
      e
    ));
  }
  function s(c, d = G) {
    const i = [c, d];
    return a.add(i), a.size === 1 && (o = t(n, r) || G), c(
      /** @type {T} */
      e
    ), () => {
      a.delete(i), a.size === 0 && o && (o(), o = null);
    };
  }
  return { set: n, update: r, subscribe: s };
}
function Dn(e) {
  let t;
  return ca(e, (o) => t = o)(), t;
}
let ut = !1, Yt = Symbol();
function Wn(e, t, o) {
  const a = o[t] ?? (o[t] = {
    store: null,
    source: /* @__PURE__ */ Ct(void 0),
    unsubscribe: G
  });
  if (a.store !== e && !(Yt in o))
    if (a.unsubscribe(), a.store = e ?? null, e == null)
      a.source.v = void 0, a.unsubscribe = G;
    else {
      var n = !0;
      a.unsubscribe = ca(e, (r) => {
        n ? a.source.v = r : I(a.source, r);
      }), n = !1;
    }
  return e && Yt in o ? Dn(e) : g(a.source);
}
function Gn(e, t) {
  return e.set(t), t;
}
function zn() {
  const e = {};
  function t() {
    vn(() => {
      for (var o in e)
        e[o].unsubscribe();
      Je(e, Yt, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Kn(e, t, o) {
  return e.set(o), t;
}
function Un(e) {
  var t = ut;
  try {
    return ut = !1, [e(), ut];
  } finally {
    ut = t;
  }
}
const Yn = {
  get(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let a = e.props[o];
      if (Me(a) && (a = a()), typeof a == "object" && a !== null && t in a) return a[t];
    }
  },
  set(e, t, o) {
    let a = e.props.length;
    for (; a--; ) {
      let n = e.props[a];
      Me(n) && (n = n());
      const r = he(n, t);
      if (r && r.set)
        return r.set(o), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let a = e.props[o];
      if (Me(a) && (a = a()), typeof a == "object" && a !== null && t in a) {
        const n = he(a, t);
        return n && !n.configurable && (n.configurable = !0), n;
      }
    }
  },
  has(e, t) {
    if (t === He || t === Xt) return !1;
    for (let o of e.props)
      if (Me(o) && (o = o()), o != null && t in o) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let o of e.props) {
      Me(o) && (o = o());
      for (const a in o)
        t.includes(a) || t.push(a);
    }
    return t;
  }
};
function qn(...e) {
  return new Proxy({ props: e }, Yn);
}
function E(e, t, o, a) {
  var T;
  var n = (o & Ea) !== 0, r = !0, s = (o & La) !== 0, c = (o & Oa) !== 0, d = !1, i;
  s ? [i, d] = Un(() => (
    /** @type {V} */
    e[t]
  )) : i = /** @type {V} */
  e[t];
  var l = He in e || Xt in e, f = s && (((T = he(e, t)) == null ? void 0 : T.set) ?? (l && t in e && ((C) => e[t] = C))) || void 0, u = (
    /** @type {V} */
    a
  ), h = !0, p = !1, v = () => (p = !0, h && (h = !1, c ? u = pe(
    /** @type {() => V} */
    a
  ) : u = /** @type {V} */
  a), u);
  i === void 0 && a !== void 0 && (f && r && Ua(), i = v(), f && f(i));
  var _;
  if (_ = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? v() : (h = !0, p = !1, C);
  }, !(o & Na))
    return _;
  if (f) {
    var y = e.$$legacy;
    return function(C, $) {
      return arguments.length > 0 ? ((!$ || y || d) && f($ ? _() : C), C) : _();
    };
  }
  var m = !1, R = /* @__PURE__ */ Ct(i), S = /* @__PURE__ */ Pe(() => {
    var C = _(), $ = g(R);
    return m ? (m = !1, $) : R.v = C;
  });
  return n || (S.equals = eo), function(C, $) {
    if (arguments.length > 0) {
      const F = $ ? g(S) : s ? ke(C) : C;
      return S.equals(F) || (m = !0, I(R, F), p && u !== void 0 && (u = F), pe(() => g(S))), C;
    }
    return g(S);
  };
}
function jn(e) {
  return new Vn(e);
}
var le, U;
class Vn {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    X(this, le);
    /** @type {Record<string, any>} */
    X(this, U);
    var r;
    var o = /* @__PURE__ */ new Map(), a = (s, c) => {
      var d = /* @__PURE__ */ Ct(c);
      return o.set(s, d), d;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return g(o.get(c) ?? a(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return c === Xt ? !0 : (g(o.get(c) ?? a(c, Reflect.get(s, c))), Reflect.has(s, c));
        },
        set(s, c, d) {
          return I(o.get(c) ?? a(c, d), d), Reflect.set(s, c, d);
        }
      }
    );
    Ee(this, U, (t.hydrate ? En : oa)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((r = t == null ? void 0 : t.props) != null && r.$$host) || t.sync === !1) && P(), Ee(this, le, n.$$events);
    for (const s of Object.keys(b(this, U)))
      s === "$set" || s === "$destroy" || s === "$on" || Je(this, s, {
        get() {
          return b(this, U)[s];
        },
        /** @param {any} value */
        set(c) {
          b(this, U)[s] = c;
        },
        enumerable: !0
      });
    b(this, U).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(n, s);
    }, b(this, U).$destroy = () => {
      Nn(b(this, U));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    b(this, U).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, o) {
    b(this, le)[t] = b(this, le)[t] || [];
    const a = (...n) => o.call(this, ...n);
    return b(this, le)[t].push(a), () => {
      b(this, le)[t] = b(this, le)[t].filter(
        /** @param {any} fn */
        (n) => n !== a
      );
    };
  }
  $destroy() {
    b(this, U).$destroy();
  }
}
le = new WeakMap(), U = new WeakMap();
let ua;
typeof HTMLElement == "function" && (ua = class extends HTMLElement {
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
          n !== "default" && (s.name = n), ae(r, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, a = Xn(this);
      for (const n of this.$$s)
        n in a && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), o.default = !0) : o[n] = t(n));
      for (const n of this.attributes) {
        const r = this.$$g_p(n.name);
        r in this.$$d || (this.$$d[r] = vt(r, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = jn({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = gn(() => {
        ao(() => {
          var n;
          this.$$r = !0;
          for (const r of _t(this.$$c)) {
            if (!((n = this.$$p_d[r]) != null && n.reflect)) continue;
            this.$$d[r] = this.$$c[r];
            const s = vt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = vt(t, a, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
    return _t(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === t || !this.$$p_d[o].attribute && o.toLowerCase() === t
    ) || t;
  }
});
function vt(e, t, o, a) {
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
function Xn(e) {
  const t = {};
  return e.childNodes.forEach((o) => {
    t[
      /** @type {Element} node */
      o.slot || "default"
    ] = !0;
  }), t;
}
function je(e, t, o, a, n, r) {
  let s = class extends ua {
    constructor() {
      super(e, o, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return _t(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return _t(t).forEach((c) => {
    Je(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(d) {
        var f;
        d = vt(c, d, t), this.$$d[c] = d;
        var i = this.$$c;
        if (i) {
          var l = (f = he(i, c)) == null ? void 0 : f.get;
          l ? i[c] = d : i.$set({ [c]: d });
        }
      }
    });
  }), a.forEach((c) => {
    Je(s.prototype, c, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[c];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Ao(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Jn(e) {
  return e;
}
function Qn(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function qt(e, t) {
  if (e === t || e !== e) return () => e;
  const o = typeof e;
  if (o !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const a = (
      /** @type {Array<any>} */
      t.map((n, r) => qt(
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
    if (Ao(e) && Ao(t)) {
      const r = e.getTime(), c = t.getTime() - r;
      return (d) => new Date(r + d * c);
    }
    const a = Object.keys(t), n = {};
    return a.forEach((r) => {
      n[r] = qt(e[r], t[r]);
    }), (r) => {
      const s = {};
      return a.forEach((c) => {
        s[c] = n[c](r);
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
var de, ze, at, Le;
const uo = class uo {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, o = {}) {
    X(this, de, H(
      /** @type {T} */
      void 0
    ));
    X(this, ze, H(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    X(this, at);
    /** @type {import('../internal/client/types').Task | null} */
    X(this, Le, null);
    b(this, de).v = b(this, ze).v = t, Ee(this, at, o);
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
    const a = new uo(t(), o);
    return ao(() => {
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
    I(b(this, ze), t);
    let {
      delay: a = 0,
      duration: n = 400,
      easing: r = Jn,
      interpolate: s = qt
    } = { ...b(this, at), ...o };
    if (n === 0)
      return (f = b(this, Le)) == null || f.abort(), I(b(this, de), t), Promise.resolve();
    const c = Z.now() + a;
    let d, i = !1, l = b(this, Le);
    return Ee(this, Le, ia((u) => {
      if (u < c)
        return !0;
      if (!i) {
        i = !0;
        const p = b(this, de).v;
        d = s(p, t), typeof n == "function" && (n = n(p, t)), l == null || l.abort();
      }
      const h = u - c;
      return h > /** @type {number} */
      n ? (I(b(this, de), t), !1) : (I(b(this, de), d(r(h / /** @type {number} */
      n))), !0);
    })), b(this, Le).promise;
  }
  get current() {
    return g(b(this, de));
  }
  get target() {
    return g(b(this, ze));
  }
  set target(t) {
    this.set(t);
  }
};
de = new WeakMap(), ze = new WeakMap(), at = new WeakMap(), Le = new WeakMap();
let Be = uo;
const Zn = (e) => e;
function er(e, { delay: t = 0, duration: o = 400, easing: a = Zn } = {}) {
  const n = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: a,
    css: (r) => `opacity: ${r * n}`
  };
}
var tr = /* @__PURE__ */ so('<g><text class="hexlabels__text svelte-fyaz0o"> </text></g>'), or = /* @__PURE__ */ so('<g class="hexlabels"></g>');
const ar = {
  hash: "svelte-fyaz0o",
  code: ".hexlabels__text.svelte-fyaz0o {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:6px;font-family:sans-serif;text-anchor:middle;}"
};
function fa(e, t) {
  Re(t, !0), lt(e, ar);
  let o = E(t, "hexes", 7), a = E(t, "labelsToShow", 23, () => ({})), n = E(t, "showAll", 7, !1), r = E(t, "showElectorateLabels", 7, !1), s = /* @__PURE__ */ Pe(() => r() ? o() : o().filter(({ code: d }) => a()[d]));
  var c = or();
  return lo(c, 21, () => g(s), io, (d, i) => {
    let l = () => g(i).coordPx, f = () => g(i).code;
    var u = tr(), h = ee(u), p = ee(h, !0);
    z(h), z(u), et(
      (v) => {
        co(u, "transform", v), ta(p, f());
      },
      [
        () => `translate(${l().join(" ")})`
      ]
    ), ae(d, u);
  }), z(c), ae(e, c), $e({
    get hexes() {
      return o();
    },
    set hexes(d) {
      o(d), P();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(d = {}) {
      a(d), P();
    },
    get showAll() {
      return n();
    },
    set showAll(d = !1) {
      n(d), P();
    },
    get showElectorateLabels() {
      return r();
    },
    set showElectorateLabels(d = !1) {
      r(d), P();
    }
  });
}
je(
  fa,
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
var nr = /* @__PURE__ */ so('<g class="group svelte-1mzshp9"><g class="group-hexes svelte-1mzshp9"><!></g><!><g class="group-hex-strokes svelte-1mzshp9"><!></g><g class="group-outline svelte-1mzshp9"><!></g></g>');
const rr = {
  hash: "svelte-1mzshp9",
  code: '.group.svelte-1mzshp9 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--hidden.svelte-1mzshp9 {opacity:0;}.group.svelte-1mzshp9 .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-1mzshp9 .hex-outline {fill:none;stroke:var(--c-black);stroke-width:2px;transition:opacity 0.5s, stroke 0.2s;vector-effect:non-scaling-stroke;}.group--map-is-filled.svelte-1mzshp9 .hex-outline {opacity:0;stroke:white;}.group-hexes.svelte-1mzshp9 .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="NXT"] {fill:var(--a-NXT);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--c-lightgrey);}.group-hex-strokes.svelte-1mzshp9 .hex {fill:none;stroke:var(--c-empty-border);stroke-width:1px;}.group--has-focuses.svelte-1mzshp9 .hex-outline {opacity:0;stroke:white;}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.2;}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}'
};
function ha(e, t) {
  Re(t, !0), lt(e, rr);
  let o = E(t, "name", 7, ""), a = E(t, "svgHexes", 7, ""), n = E(t, "hexes", 23, () => []), r = E(t, "svgOutline", 7, ""), s = E(t, "offset", 23, () => [1 / 0, 1 / 0]), c = E(t, "isFilled", 7, !1), d = E(t, "focuses", 7), i = E(t, "hasAnyFocuses", 7, !1), l = E(t, "labelsToShow", 23, () => ({})), f = E(t, "showElectorateLabels", 7), u = E(t, "showFocusedElectorateLabels", 7);
  const h = 16;
  function p(x = [0, 0]) {
    const Se = x[0] * (h * Math.sqrt(3)), ye = x[1] * 1.5 * h;
    return [Se, ye].map((Ve) => `${Math.round(Ve)}px`);
  }
  let v = Xe(""), _ = /* @__PURE__ */ Pe(() => s()[0] !== 1 / 0);
  bt(() => {
    g(_) && I(v, `translate(${p(s()).join(",")})`);
  });
  let y = /* @__PURE__ */ Pe(() => i() && u() ? d() : l());
  var m = nr(), R = ee(m), S = ee(R);
  It(S, a), z(R);
  var T = ft(R);
  {
    var C = (x) => {
      fa(x, {
        get hexes() {
          return n();
        },
        get labelsToShow() {
          return g(y);
        },
        get showElectorateLabels() {
          return f();
        }
      });
    };
    na(T, (x) => {
      g(_) && x(C);
    });
  }
  var $ = ft(T), F = ee($);
  It(F, a), z($);
  var V = ft($), w = ee(V);
  return It(w, r), z(V), z(m), et(() => {
    co(m, "data-name", o()), Mt(m, "group--hidden", !g(_)), Mt(m, "group--map-is-filled", c()), Mt(m, "group--has-focuses", i()), ue(m, "transform", g(v));
  }), ae(e, m), $e({
    get name() {
      return o();
    },
    set name(x = "") {
      o(x), P();
    },
    get svgHexes() {
      return a();
    },
    set svgHexes(x = "") {
      a(x), P();
    },
    get hexes() {
      return n();
    },
    set hexes(x = []) {
      n(x), P();
    },
    get svgOutline() {
      return r();
    },
    set svgOutline(x = "") {
      r(x), P();
    },
    get offset() {
      return s();
    },
    set offset(x = [1 / 0, 1 / 0]) {
      s(x), P();
    },
    get isFilled() {
      return c();
    },
    set isFilled(x = !1) {
      c(x), P();
    },
    get focuses() {
      return d();
    },
    set focuses(x) {
      d(x), P();
    },
    get hasAnyFocuses() {
      return i();
    },
    set hasAnyFocuses(x = !1) {
      i(x), P();
    },
    get labelsToShow() {
      return l();
    },
    set labelsToShow(x = {}) {
      l(x), P();
    },
    get showElectorateLabels() {
      return f();
    },
    set showElectorateLabels(x) {
      f(x), P();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(x) {
      u(x), P();
    }
  });
}
je(
  ha,
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
var sr = /* @__PURE__ */ it('<div class="label svelte-lh1lcp"> </div>'), ir = /* @__PURE__ */ it('<div class="labels svelte-lh1lcp" aria-hidden="true"></div>');
const lr = {
  hash: "svelte-lh1lcp",
  code: '.labels.svelte-lh1lcp {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;}.label.svelte-lh1lcp {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px white;paint-order:stroke fill;}'
};
function pa(e, t) {
  Re(t, !0), lt(e, lr);
  let o = E(t, "labels", 7);
  var a = ir();
  return lo(a, 21, o, io, (n, r) => {
    var s = An(), c = tn(s);
    Ln(c, () => g(r), (d) => {
      var i = sr(), l = ee(i, !0);
      z(i), et(
        (f) => {
          ue(i, "left", g(r).left + "%"), ue(i, "top", g(r).top + "%"), ue(i, "width", g(r).width + "%"), ue(i, "margin-left", f), ta(l, g(r).name);
        },
        [
          () => Math.round(0 - g(r).width / 2) + "%"
        ]
      ), kn(3, i, () => er, () => ({ duration: 1e3 })), ae(d, i);
    }), ae(n, s);
  }), z(a), ae(e, a), $e({
    get labels() {
      return o();
    },
    set labels(n) {
      o(n), P();
    }
  });
}
je(pa, { labels: {} }, [], [], !0);
var dr = ({ target: e, clientX: t, clientY: o }, a) => {
  var r;
  const n = (r = e == null ? void 0 : e.dataset) == null ? void 0 : r.code;
  !n || !a() || a()({ code: n, clientX: t, clientY: o });
}, cr = /* @__PURE__ */ it('<div class="hexmap__labels svelte-ahmprl"><!></div>'), ur = /* @__PURE__ */ it('<div class="hexmap svelte-ahmprl"><svg class="svelte-ahmprl"></svg> <!></div>');
const fr = {
  hash: "svelte-ahmprl",
  code: ".hexmap.svelte-ahmprl {position:relative;height:100%;display:flex;align-items:center;justify-content:center;}.hexmap__labels.svelte-ahmprl {position:absolute;top:0;left:50%;top:50%;pointer-events:none;}.hexmap.svelte-ahmprl svg:where(.svelte-ahmprl) {max-width:100%;max-height:100%;}"
};
function va(e, t) {
  Re(t, !0), lt(e, fr);
  let o = E(t, "config", 23, () => ({})), a = E(t, "layout", 23, () => ({})), n = E(t, "allocations", 23, () => ({})), r = E(t, "focuses", 23, () => ({})), s = E(t, "labelsToShow", 23, () => ({})), c = E(t, "showStateLabels", 7, !1), d = E(t, "showElectorateLabels", 7, !1), i = E(t, "showFocusedElectorateLabels", 7, !1), l = E(t, "onClick", 7, () => {
  }), f = Xe(void 0), u = Xe(0), h = Xe(0), p = /* @__PURE__ */ Pe(() => Object.values(r()).some(Boolean)), v = /* @__PURE__ */ Pe(() => {
    const w = Object.values(n());
    return w.length !== 0 && w.every(Boolean);
  });
  const _ = a().viewbox, y = { easing: Qn, duration: 1100 };
  let m = new Be(_[0], y), R = new Be(_[1], y), S = new Be(_[2], y), T = new Be(_[3], y);
  bt(() => {
    const [w, x, Se, ye] = a().viewbox;
    m.set(w), R.set(x), S.set(Se), T.set(ye);
  }), bt(() => {
    const w = n(), x = r();
    if (!g(f))
      return;
    g(f).querySelectorAll("polygon.hex").forEach((ye) => {
      if (!(ye instanceof SVGPolygonElement))
        return;
      const Ve = ye.dataset.code;
      if (!Ve)
        return;
      const xa = w[Ve] || null;
      ye.dataset.allocation = xa;
      const _a = g(p) ? x[Ve] || !1 : !0;
      ye.dataset.focused = _a;
    });
  });
  var C = ur();
  C.__click = [dr, l];
  var $ = ee(C);
  lo($, 21, () => o().groups, io, (w, x) => {
    ha(w, qn(() => g(x), {
      get offset() {
        return a().positions[g(x).name];
      },
      get isFilled() {
        return g(v);
      },
      get focuses() {
        return r();
      },
      get hasAnyFocuses() {
        return g(p);
      },
      get showElectorateLabels() {
        return d();
      },
      get showFocusedElectorateLabels() {
        return i();
      },
      get labelsToShow() {
        return s();
      }
    }));
  }), z($), da($, (w) => I(f, w), () => g(f));
  var F = ft($, 2);
  {
    var V = (w) => {
      var x = cr(), Se = ee(x);
      pa(Se, {
        get labels() {
          return a().labels;
        }
      }), z(x), et(() => {
        ue(x, "width", `${g(u)}px`), ue(x, "height", `${g(h)}px`), ue(x, "margin-left", `${0 - g(u) / 2}px`), ue(x, "margin-top", `${0 - g(h) / 2}px`);
      }), ae(w, x);
    };
    na(F, (w) => {
      c() && w(V);
    });
  }
  return z(C), et((w) => co($, "viewBox", w), [
    () => [
      m.current,
      R.current,
      S.current,
      T.current
    ].join(" ")
  ]), bo($, "clientWidth", (w) => I(u, w)), bo($, "clientHeight", (w) => I(h, w)), ae(e, C), $e({
    get config() {
      return o();
    },
    set config(w = {}) {
      o(w), P();
    },
    get layout() {
      return a();
    },
    set layout(w = {}) {
      a(w), P();
    },
    get allocations() {
      return n();
    },
    set allocations(w = {}) {
      n(w), P();
    },
    get focuses() {
      return r();
    },
    set focuses(w = {}) {
      r(w), P();
    },
    get labelsToShow() {
      return s();
    },
    set labelsToShow(w = {}) {
      s(w), P();
    },
    get showStateLabels() {
      return c();
    },
    set showStateLabels(w = !1) {
      c(w), P();
    },
    get showElectorateLabels() {
      return d();
    },
    set showElectorateLabels(w = !1) {
      d(w), P();
    },
    get showFocusedElectorateLabels() {
      return i();
    },
    set showFocusedElectorateLabels(w = !1) {
      i(w), P();
    },
    get onClick() {
      return l();
    },
    set onClick(w = () => {
    }) {
      l(w), P();
    }
  });
}
Pn(["click"]);
je(
  va,
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
const hr = "a", pr = "z", vr = "b", gr = "c", xr = "d", _r = "e", yr = "f", mr = "g", wr = "h", br = "i", Pr = "j", Ar = "k", Er = "l", Nr = "m", Lr = "t", Or = "c", Cr = "m", Rr = {
  None: hr,
  Any: pr,
  ALP: vr,
  CA: gr,
  CLP: xr,
  GRN: _r,
  IND: yr,
  KAP: mr,
  LIB: wr,
  LNP: br,
  NAT: Pr,
  ONP: Ar,
  OTH: Er,
  UAP: Nr,
  Teal: Lr,
  NXT: Or,
  PUP: Cr
};
let kt = Hn({});
var $r = /* @__PURE__ */ it('<div class="style-root svelte-ni4bp2"><!></div>');
const Sr = {
  hash: "svelte-ni4bp2",
  code: ".style-root.svelte-ni4bp2 * {box-sizing:border-box;}.style-root.svelte-ni4bp2 {height:100%;font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-null: var(--c-white);--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-NXT: var(--c-pty-xxxxxx);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--c-empty-border: #cdcbcb;}"
};
function ga(e, t) {
  Re(t, !0), lt(e, Sr);
  const [o, a] = zn(), n = () => Wn(kt, "$partyColours", o);
  let r = E(t, "children", 7), s = Xe(void 0);
  Fn(() => {
    if (!g(s))
      return;
    const l = window.getComputedStyle(g(s));
    Gn(kt, {}), Object.keys(Rr).forEach((u) => {
      Kn(kt, pe(n)[u] = l.getPropertyValue(`--a-${u}`), pe(n));
    });
  });
  var c = $r(), d = ee(c);
  $n(d, () => r() ?? G), z(c), da(c, (l) => I(s, l), () => g(s)), ae(e, c);
  var i = $e({
    get children() {
      return r();
    },
    set children(l) {
      r(l), P();
    }
  });
  return a(), i;
}
je(ga, { children: {} }, [], [], !0);
const Tr = { viewbox: [-50, 0, 480, 500], positions: { ACT: [9.0035, 10], NSW: [4, 6], NT: [2.51, 5], QLD: [5, 0], SA: [2.004, 6], TAS: [7, 16.75, !0], VIC: [4.02, 10], WA: [0.05, 6] }, labels: [{ left: 30, top: 27, width: 8, name: "NT" }, { left: 68, top: 17, width: 8, name: "QLD" }, { left: 64, top: 40, width: 8, name: "NSW" }, { left: 71, top: 55.5, width: 8, name: "ACT" }, { left: 59, top: 65, width: 8, name: "VIC" }, { left: 59, top: 85.5, width: 8, name: "TAS" }, { left: 30, top: 46, width: 8, name: "SA" }, { left: 19, top: 46, width: 8, name: "WA" }] }, Ir = {
  COUNTRY: Tr
}, Mr = 291, kr = 200, Br = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='21' class='hex' data-code='BEAN' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='2' class='hex' data-code='CANB' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='26' class='hex' data-code='FENN' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='ACT' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"id":21,"code":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"id":2,"code":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"id":26,"code":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='83' class='hex' data-code='BANK' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='20' class='hex' data-code='BART' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='84' class='hex' data-code='BENN' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='70' class='hex' data-code='BERO' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='0' class='hex' data-code='BLAX' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='71' class='hex' data-code='BRFD' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='135' class='hex' data-code='CALA' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='3' class='hex' data-code='CHIF' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='72' class='hex' data-code='COOK' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='143' class='hex' data-code='COWP' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='5' class='hex' data-code='CUNN' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='49' class='hex' data-code='DOBE' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='51' class='hex' data-code='EMON' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='75' class='hex' data-code='FARR' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='6' class='hex' data-code='FOWL' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='52' class='hex' data-code='GILM' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='11' class='hex' data-code='GRAY' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='53' class='hex' data-code='GREE' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='87' class='hex' data-code='HUGH' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='78' class='hex' data-code='HUME' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='55' class='hex' data-code='HUNT' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='34' class='hex' data-code='KSMI' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='107' class='hex' data-code='LIND' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='137' class='hex' data-code='LYNE' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='36' class='hex' data-code='MACA' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='79' class='hex' data-code='MACK' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='59' class='hex' data-code='MACQ' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='40' class='hex' data-code='MCMA' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='80' class='hex' data-code='MITC' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='139' class='hex' data-code='NENG' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='13' class='hex' data-code='NEWC' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='91' class='hex' data-code='NSYD' points='291,80 291,96 277.1,104 263.3,96 263.3,80 277.1,72' /><polygon data-id='144' class='hex' data-code='PAGE' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='141' class='hex' data-code='PARK' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='62' class='hex' data-code='PARR' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='63' class='hex' data-code='PATE' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='108' class='hex' data-code='REID' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='65' class='hex' data-code='RICH' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='142' class='hex' data-code='RIVE' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='109' class='hex' data-code='ROBE' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='66' class='hex' data-code='SHOR' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='16' class='hex' data-code='SYDN' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='146' class='hex' data-code='WARR' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='17' class='hex' data-code='WATS' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='111' class='hex' data-code='WENT' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='68' class='hex' data-code='WERR' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='43' class='hex' data-code='WHIT' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='NSW' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,291,80,291,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Banks","coord":[7,4],"id":83,"code":"BANK","coordPx":[207.8,112]},{"name":"Barton","coord":[7,5],"id":20,"code":"BART","coordPx":[221.7,136]},{"name":"Bennelong","coord":[6,1],"id":84,"code":"BENN","coordPx":[194,40]},{"name":"Berowra","coord":[4,1],"id":70,"code":"BERO","coordPx":[138.6,40]},{"name":"Blaxland","coord":[7,3],"id":0,"code":"BLAX","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"id":71,"code":"BRFD","coordPx":[249.4,40]},{"name":"Calare","coord":[0,1],"id":135,"code":"CALA","coordPx":[27.7,40]},{"name":"Chifley","coord":[5,2],"id":3,"code":"CHIF","coordPx":[152.4,64]},{"name":"Cook","coord":[5,3],"id":72,"code":"COOK","coordPx":[166.3,88]},{"name":"Cowper","coord":[1,0],"id":143,"code":"COWP","coordPx":[41.6,16]},{"name":"Cunningham","coord":[3,3],"id":5,"code":"CUNN","coordPx":[110.9,88]},{"name":"Dobell","coord":[6,0],"id":49,"code":"DOBE","coordPx":[180.1,16]},{"name":"Eden-Monaro","coord":[2,2],"id":51,"code":"EMON","coordPx":[69.3,64]},{"name":"Farrer","coord":[0,3],"id":75,"code":"FARR","coordPx":[27.7,88]},{"name":"Fowler","coord":[6,2],"id":6,"code":"FOWL","coordPx":[180.1,64]},{"name":"Gilmore","coord":[2,3],"id":52,"code":"GILM","coordPx":[83.1,88]},{"name":"Grayndler","coord":[8,3],"id":11,"code":"GRAY","coordPx":[249.4,88]},{"name":"Greenway","coord":[7,2],"id":53,"code":"GREE","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"id":87,"code":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"id":78,"code":"HUME","coordPx":[55.4,88]},{"name":"Hunter","coord":[8,0],"id":55,"code":"HUNT","coordPx":[235.6,16]},{"name":"Kingsford Smith","coord":[8,6],"id":34,"code":"KSMI","coordPx":[235.6,160]},{"name":"Lindsay","coord":[3,0],"id":107,"code":"LIND","coordPx":[97,16]},{"name":"Lyne","coord":[2,0],"id":137,"code":"LYNE","coordPx":[69.3,16]},{"name":"Macarthur","coord":[4,2],"id":36,"code":"MACA","coordPx":[124.7,64]},{"name":"Mackellar","coord":[5,1],"id":79,"code":"MACK","coordPx":[166.3,40]},{"name":"Macquarie","coord":[4,0],"id":59,"code":"MACQ","coordPx":[124.7,16]},{"name":"McMahon","coord":[3,1],"id":40,"code":"MCMA","coordPx":[110.9,40]},{"name":"Mitchell","coord":[7,1],"id":80,"code":"MITC","coordPx":[221.7,40]},{"name":"New England","coord":[1,2],"id":139,"code":"NENG","coordPx":[41.6,64]},{"name":"Newcastle","coord":[9,1],"id":13,"code":"NEWC","coordPx":[277.1,40]},{"name":"North Sydney","coord":[9,3],"id":91,"code":"NSYD","coordPx":[277.1,88]},{"name":"Page","coord":[1,1],"id":144,"code":"PAGE","coordPx":[55.4,40]},{"name":"Parkes","coord":[0,0],"id":141,"code":"PARK","coordPx":[13.9,16]},{"name":"Parramatta","coord":[6,3],"id":62,"code":"PARR","coordPx":[194,88]},{"name":"Paterson","coord":[9,0],"id":63,"code":"PATE","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"id":108,"code":"REID","coordPx":[235.6,64]},{"name":"Richmond","coord":[2,1],"id":65,"code":"RICH","coordPx":[83.1,40]},{"name":"Riverina","coord":[0,2],"id":142,"code":"RIVE","coordPx":[13.9,64]},{"name":"Robertson","coord":[5,0],"id":109,"code":"ROBE","coordPx":[152.4,16]},{"name":"Shortland","coord":[7,0],"id":66,"code":"SHOR","coordPx":[207.8,16]},{"name":"Sydney","coord":[9,4],"id":16,"code":"SYDN","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"id":146,"code":"WARR","coordPx":[263.3,64]},{"name":"Watson","coord":[8,4],"id":17,"code":"WATS","coordPx":[235.6,112]},{"name":"Wentworth","coord":[8,5],"id":111,"code":"WENT","coordPx":[249.4,136]},{"name":"Werriwa","coord":[4,3],"id":68,"code":"WERR","coordPx":[138.6,88]},{"name":"Whitlam","coord":[3,2],"id":43,"code":"WHIT","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='57' class='hex' data-code='LING' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='67' class='hex' data-code='SOLO' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='NT' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"id":57,"code":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"id":67,"code":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='45' class='hex' data-code='BLAI' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='124' class='hex' data-code='BONN' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='125' class='hex' data-code='BOWM' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='131' class='hex' data-code='BRIS' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='112' class='hex' data-code='CAPR' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' /><polygon data-id='113' class='hex' data-code='DAWS' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='132' class='hex' data-code='DICK' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='114' class='hex' data-code='FADD' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='115' class='hex' data-code='FAIR' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='116' class='hex' data-code='FISH' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='126' class='hex' data-code='FLYN' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='127' class='hex' data-code='FORD' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='54' class='hex' data-code='GRIF' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='117' class='hex' data-code='GROO' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='128' class='hex' data-code='HERB' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='118' class='hex' data-code='HINK' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='148' class='hex' data-code='KENN' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='133' class='hex' data-code='LEIC' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='56' class='hex' data-code='LILL' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='134' class='hex' data-code='LONG' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='119' class='hex' data-code='MARA' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='120' class='hex' data-code='MCPH' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='121' class='hex' data-code='MONC' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='61' class='hex' data-code='MORE' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='41' class='hex' data-code='OXLE' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='129' class='hex' data-code='PETR' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='42' class='hex' data-code='RANK' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='130' class='hex' data-code='RYAN' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='122' class='hex' data-code='WBAY' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='123' class='hex' data-code='WRIG' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='QLD' points='13.9,128,27.7,120,27.7,104,41.6,96,41.6,80,55.4,72,69.3,80,83.1,72,83.1,56,97,48,97,32,110.9,24,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,221.7,152,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,110.9,152,97,144,83.1,152,69.3,144,55.4,152,41.6,144,27.7,152,13.9,144,13.9,128' />","hexes":[{"name":"Blair","coord":[2,5],"id":45,"code":"BLAI","coordPx":[83.1,136]},{"name":"Bonner","coord":[6,2],"id":124,"code":"BONN","coordPx":[180.1,64]},{"name":"Bowman","coord":[7,4],"id":125,"code":"BOWM","coordPx":[207.8,112]},{"name":"Brisbane","coord":[5,3],"id":131,"code":"BRIS","coordPx":[166.3,88]},{"name":"Capricornia","coord":[3,2],"id":112,"code":"CAPR","coordPx":[97,64]},{"name":"Dawson","coord":[3,1],"id":113,"code":"DAWS","coordPx":[110.9,40]},{"name":"Dickson","coord":[3,3],"id":132,"code":"DICK","coordPx":[110.9,88]},{"name":"Fadden","coord":[6,4],"id":114,"code":"FADD","coordPx":[180.1,112]},{"name":"Fairfax","coord":[5,1],"id":115,"code":"FAIR","coordPx":[166.3,40]},{"name":"Fisher","coord":[5,2],"id":116,"code":"FISH","coordPx":[152.4,64]},{"name":"Flynn","coord":[2,3],"id":126,"code":"FLYN","coordPx":[83.1,88]},{"name":"Forde","coord":[5,5],"id":127,"code":"FORD","coordPx":[166.3,136]},{"name":"Griffith","coord":[5,4],"id":54,"code":"GRIF","coordPx":[152.4,112]},{"name":"Groom","coord":[1,5],"id":117,"code":"GROO","coordPx":[55.4,136]},{"name":"Herbert","coord":[4,1],"id":128,"code":"HERB","coordPx":[138.6,40]},{"name":"Hinkler","coord":[1,3],"id":118,"code":"HINK","coordPx":[55.4,88]},{"name":"Kennedy","coord":[1,4],"id":148,"code":"KENN","coordPx":[41.6,112]},{"name":"Leichhardt","coord":[5,0],"id":133,"code":"LEIC","coordPx":[152.4,16]},{"name":"Lilley","coord":[6,3],"id":56,"code":"LILL","coordPx":[194,88]},{"name":"Longman","coord":[4,2],"id":134,"code":"LONG","coordPx":[124.7,64]},{"name":"Maranoa","coord":[0,5],"id":119,"code":"MARA","coordPx":[27.7,136]},{"name":"McPherson","coord":[7,5],"id":120,"code":"MCPH","coordPx":[221.7,136]},{"name":"Moncrieff","coord":[6,5],"id":121,"code":"MONC","coordPx":[194,136]},{"name":"Moreton","coord":[4,4],"id":61,"code":"MORE","coordPx":[124.7,112]},{"name":"Oxley","coord":[3,5],"id":41,"code":"OXLE","coordPx":[110.9,136]},{"name":"Petrie","coord":[4,3],"id":129,"code":"PETR","coordPx":[138.6,88]},{"name":"Rankin","coord":[3,4],"id":42,"code":"RANK","coordPx":[97,112]},{"name":"Ryan","coord":[4,5],"id":130,"code":"RYAN","coordPx":[138.6,136]},{"name":"Wide Bay","coord":[4,0],"id":122,"code":"WBAY","coordPx":[124.7,16]},{"name":"Wright","coord":[2,4],"id":123,"code":"WRIG","coordPx":[69.3,112]}]},{"name":"SA","svgHexes":"<polygon data-id='18' class='hex' data-code='ADEL' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='69' class='hex' data-code='BARK' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='97' class='hex' data-code='BOOT' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='77' class='hex' data-code='GREY' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='29' class='hex' data-code='HIND' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='35' class='hex' data-code='KING' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='38' class='hex' data-code='MAKI' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='149' class='hex' data-code='MAYO' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='15' class='hex' data-code='SPEN' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='93' class='hex' data-code='STUR' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='SA' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"id":18,"code":"ADEL","coordPx":[41.6,112]},{"name":"Barker","coord":[0,1],"id":69,"code":"BARK","coordPx":[27.7,40]},{"name":"Boothby","coord":[1,3],"id":97,"code":"BOOT","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"id":77,"code":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"id":29,"code":"HIND","coordPx":[27.7,88]},{"name":"Kingston","coord":[1,5],"id":35,"code":"KING","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"id":38,"code":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"id":149,"code":"MAYO","coordPx":[41.6,160]},{"name":"Spence","coord":[1,1],"id":15,"code":"SPEN","coordPx":[55.4,40]},{"name":"Sturt","coord":[0,5],"id":93,"code":"STUR","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='96' class='hex' data-code='BASS' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='98' class='hex' data-code='BRAD' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='145' class='hex' data-code='CLAR' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='7' class='hex' data-code='FRAN' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='58' class='hex' data-code='LYON' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='TAS' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"id":96,"code":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"id":98,"code":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"id":145,"code":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"id":7,"code":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"id":58,"code":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='82' class='hex' data-code='ASTO' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='19' class='hex' data-code='BALL' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='22' class='hex' data-code='BEND' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='24' class='hex' data-code='BRUC' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='1' class='hex' data-code='CALW' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='99' class='hex' data-code='CASE' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='100' class='hex' data-code='CHIS' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='4' class='hex' data-code='COOP' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='47' class='hex' data-code='CORA' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='25' class='hex' data-code='CORI' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='101' class='hex' data-code='DEAK' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='50' class='hex' data-code='DUNK' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='102' class='hex' data-code='FLIN' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='8' class='hex' data-code='FRAS' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='9' class='hex' data-code='GELL' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='136' class='hex' data-code='GIPP' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='86' class='hex' data-code='GOLD' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='10' class='hex' data-code='GORT' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='28' class='hex' data-code='HAWK' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='104' class='hex' data-code='HIGG' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='30' class='hex' data-code='HOLT' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='31' class='hex' data-code='HOTH' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='147' class='hex' data-code='INDI' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='32' class='hex' data-code='ISAA' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='33' class='hex' data-code='JAGA' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='105' class='hex' data-code='KOOY' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='106' class='hex' data-code='LTRO' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='12' class='hex' data-code='LALO' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='37' class='hex' data-code='MACN' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='138' class='hex' data-code='MALL' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='39' class='hex' data-code='MARI' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='60' class='hex' data-code='MCEW' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='150' class='hex' data-code='MELB' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='88' class='hex' data-code='MENZ' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='89' class='hex' data-code='MONA' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='140' class='hex' data-code='NICH' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='14' class='hex' data-code='SCUL' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='95' class='hex' data-code='WANN' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='44' class='hex' data-code='WILL' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='VIC' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,110.9,152,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"id":82,"code":"ASTO","coordPx":[152.4,64]},{"name":"Ballarat","coord":[1,4],"id":19,"code":"BALL","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"id":22,"code":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"id":24,"code":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"id":1,"code":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"id":99,"code":"CASE","coordPx":[194,88]},{"name":"Chisholm","coord":[3,3],"id":100,"code":"CHIS","coordPx":[110.9,88]},{"name":"Cooper","coord":[4,2],"id":4,"code":"COOP","coordPx":[124.7,64]},{"name":"Corangamite","coord":[1,5],"id":47,"code":"CORA","coordPx":[55.4,136]},{"name":"Corio","coord":[0,2],"id":25,"code":"CORI","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"id":101,"code":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"id":50,"code":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"id":102,"code":"FLIN","coordPx":[194,136]},{"name":"Fraser","coord":[2,2],"id":8,"code":"FRAS","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"id":9,"code":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"id":136,"code":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"id":86,"code":"GOLD","coordPx":[138.6,136]},{"name":"Gorton","coord":[1,1],"id":10,"code":"GORT","coordPx":[55.4,40]},{"name":"Hawke","coord":[1,3],"id":28,"code":"HAWK","coordPx":[55.4,88]},{"name":"Higgins","coord":[4,4],"id":104,"code":"HIGG","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"id":30,"code":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"id":31,"code":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"id":147,"code":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"id":32,"code":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"id":33,"code":"JAGA","coordPx":[83.1,40]},{"name":"Kooyong","coord":[2,3],"id":105,"code":"KOOY","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"id":106,"code":"LTRO","coordPx":[207.8,112]},{"name":"Lalor","coord":[1,2],"id":12,"code":"LALO","coordPx":[41.6,64]},{"name":"Macnamara","coord":[3,5],"id":37,"code":"MACN","coordPx":[110.9,136]},{"name":"Mallee","coord":[0,0],"id":138,"code":"MALL","coordPx":[13.9,16]},{"name":"Maribyrnong","coord":[2,4],"id":39,"code":"MARI","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"id":60,"code":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"id":150,"code":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"id":88,"code":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"id":89,"code":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"id":140,"code":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"id":14,"code":"SCUL","coordPx":[97,16]},{"name":"Wannon","coord":[0,3],"id":95,"code":"WANN","coordPx":[27.7,88]},{"name":"Wills","coord":[3,2],"id":44,"code":"WILL","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='74' class='hex' data-code='DURA' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='92' class='hex' data-code='PEAR' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='90' class='hex' data-code='MOOR' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='103' class='hex' data-code='HASL' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='73' class='hex' data-code='CURT' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='48' class='hex' data-code='COWA' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='27' class='hex' data-code='FREM' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='64' class='hex' data-code='PERT' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='110' class='hex' data-code='SWAN' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='23' class='hex' data-code='BRAN' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='94' class='hex' data-code='TANG' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='85' class='hex' data-code='CANN' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='46' class='hex' data-code='BURT' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='76' class='hex' data-code='FORR' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='81' class='hex' data-code='OCON' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='WA' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,27.7,168,27.7,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"id":74,"code":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"id":92,"code":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"id":90,"code":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"id":103,"code":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"id":73,"code":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"id":48,"code":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"id":27,"code":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"id":64,"code":"PERT","coordPx":[41.6,112]},{"name":"Swan","coord":[2,4],"id":110,"code":"SWAN","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"id":23,"code":"BRAN","coordPx":[27.7,136]},{"name":"Tangney","coord":[1,5],"id":94,"code":"TANG","coordPx":[55.4,136]},{"name":"Canning","coord":[1,6],"id":85,"code":"CANN","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"id":46,"code":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"id":76,"code":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"id":81,"code":"OCON","coordPx":[55.4,184]}]}]`), Fr = {
  svgWidth: Mr,
  svgHeight: kr,
  groups: Br
};
function Hr(e, t) {
  Re(t, !0);
  let o = E(t, "allocations", 23, () => ({})), a = E(t, "showStateLabels", 7, !1), n = E(t, "showElectorateLabels", 7, !1), r = E(t, "onClick", 7, () => {
  });
  return ga(e, {
    children: (s, c) => {
      va(s, {
        config: Fr,
        get layout() {
          return Ir.COUNTRY;
        },
        get allocations() {
          return o();
        },
        focuses: {},
        get showStateLabels() {
          return a();
        },
        get showElectorateLabels() {
          return n();
        },
        get onClick() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), $e({
    get allocations() {
      return o();
    },
    set allocations(s = {}) {
      o(s), P();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(s = !1) {
      a(s), P();
    },
    get showElectorateLabels() {
      return n();
    },
    set showElectorateLabels(s = !1) {
      n(s), P();
    },
    get onClick() {
      return r();
    },
    set onClick(s = () => {
    }) {
      r(s), P();
    }
  });
}
customElements.define("abcnews-hexmap", je(
  Hr,
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
  Hr as default
};
