var Ir = Object.defineProperty;
var Un = (e) => {
  throw TypeError(e);
};
var Mr = (e, t, n) => t in e ? Ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var oe = (e, t, n) => Mr(e, typeof t != "symbol" ? t + "" : t, n), Kn = (e, t, n) => t.has(e) || Un("Cannot " + n);
var I = (e, t, n) => (Kn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), We = (e, t, n) => t.has(e) ? Un("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), pt = (e, t, n, o) => (Kn(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
const Dr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Dr);
const _n = 1, Nn = 2, wo = 4, $r = 8, Br = 16, Hr = 1, Fr = 4, Wr = 8, Vr = 16, jr = 4, Gr = 1, Ur = 2, bo = "[", An = "[!", En = "]", et = {}, j = Symbol(), Yn = !1, ie = 2, _o = 4, Kt = 8, Yt = 16, Le = 32, lt = 64, It = 128, ee = 256, Mt = 512, K = 1024, Oe = 2048, ct = 4096, Pe = 8192, zt = 16384, No = 32768, ut = 65536, Kr = 1 << 19, Ao = 1 << 20, tt = Symbol("$state"), Pn = Symbol("legacy props"), Yr = Symbol("");
var Sn = Array.isArray, zr = Array.prototype.indexOf, Cn = Array.from, Dt = Object.keys, mt = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, qr = Object.getOwnPropertyDescriptors, Qr = Object.prototype, Xr = Array.prototype, Eo = Object.getPrototypeOf;
function Ze(e) {
  return typeof e == "function";
}
const z = () => {
};
function Po(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let wt = [], an = [];
function So() {
  var e = wt;
  wt = [], Po(e);
}
function Zr() {
  var e = an;
  an = [], Po(e);
}
function dt(e) {
  wt.length === 0 && queueMicrotask(So), wt.push(e);
}
function zn() {
  wt.length > 0 && So(), an.length > 0 && Zr();
}
function Co(e) {
  return e === this.v;
}
function Lo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Jr(e, t) {
  return e !== t;
}
function Ln(e) {
  return !Lo(e, this.v);
}
function ea(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ta() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function na(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function oa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ra() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function aa(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function sa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ia() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function la() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function ca() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ua = !1;
function Y(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Co,
    rv: 0,
    wv: 0
  };
  return n;
}
function Ee(e) {
  return /* @__PURE__ */ da(Y(e));
}
// @__NO_SIDE_EFFECTS__
function qt(e, t = !1) {
  const n = Y(e);
  return t || (n.equals = Ln), n;
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return R !== null && !ae && R.f & ie && (ve === null ? pa([e]) : ve.push(e)), e;
}
function D(e, t) {
  return R !== null && !ae && Yo() && R.f & (ie | Yt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ve === null || !ve.includes(e)) && ca(), sn(e, t);
}
function sn(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Bo(), Oo(e, Oe), k !== null && k.f & K && !(k.f & (Le | lt)) && (_e === null ? ga([e]) : _e.push(e))), t;
}
function Oo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var o = n.length, r = 0; r < o; r++) {
      var a = n[r], s = a.f;
      s & Oe || (ye(a, t), s & (K | ee) && (s & ie ? Oo(
        /** @type {Derived} */
        a,
        ct
      ) : Zt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function V(e) {
  var t = ie | Oe, n = R !== null && R.f & ie ? (
    /** @type {Derived} */
    R
  ) : null;
  return k === null || n !== null && n.f & ee ? t |= ee : k.f |= Ao, {
    ctx: q,
    deps: null,
    effects: null,
    equals: Co,
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
function fa(e) {
  const t = /* @__PURE__ */ V(e);
  return t.equals = Ln, t;
}
function To(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      le(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ha(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ie))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function va(e) {
  var t, n = k;
  xe(ha(e));
  try {
    To(e), t = Fo(e);
  } finally {
    xe(n);
  }
  return t;
}
function ko(e) {
  var t = va(e), n = (Me || e.f & ee) && e.deps !== null ? ct : K;
  ye(e, n), e.equals(t) || (e.v = t, e.wv = Bo());
}
function Qt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function se(e) {
  O = e;
}
let T;
function te(e) {
  if (e === null)
    throw Qt(), et;
  return T = e;
}
function De() {
  return te(
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(T)
  );
}
function B(e) {
  if (O) {
    if (/* @__PURE__ */ me(T) !== null)
      throw Qt(), et;
    T = e;
  }
}
function qn(e = 1) {
  if (O) {
    for (var t = e, n = T; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ me(n);
    T = n;
  }
}
function ln() {
  for (var e = 0, t = T; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === En) {
        if (e === 0) return t;
        e -= 1;
      } else (n === bo || n === An) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(t)
    );
    t.remove(), t = o;
  }
}
function re(e, t = null, n) {
  if (typeof e != "object" || e === null || tt in e)
    return e;
  const o = Eo(e);
  if (o !== Qr && o !== Xr)
    return e;
  var r = /* @__PURE__ */ new Map(), a = Sn(e), s = Y(0);
  a && r.set("length", Y(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, c, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && sa();
        var f = r.get(c);
        return f === void 0 ? (f = Y(u.value), r.set(c, f)) : D(f, re(u.value, i)), !0;
      },
      deleteProperty(l, c) {
        var u = r.get(c);
        if (u === void 0)
          c in l && r.set(c, Y(j));
        else {
          if (a && typeof c == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), d = Number(c);
            Number.isInteger(d) && d < f.v && D(f, d);
          }
          D(u, j), Qn(s);
        }
        return !0;
      },
      get(l, c, u) {
        var h;
        if (c === tt)
          return e;
        var f = r.get(c), d = c in l;
        if (f === void 0 && (!d || (h = Se(l, c)) != null && h.writable) && (f = Y(re(d ? l[c] : j, i)), r.set(c, f)), f !== void 0) {
          var v = _(f);
          return v === j ? void 0 : v;
        }
        return Reflect.get(l, c, u);
      },
      getOwnPropertyDescriptor(l, c) {
        var u = Reflect.getOwnPropertyDescriptor(l, c);
        if (u && "value" in u) {
          var f = r.get(c);
          f && (u.value = _(f));
        } else if (u === void 0) {
          var d = r.get(c), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== j)
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
        if (c === tt)
          return !0;
        var u = r.get(c), f = u !== void 0 && u.v !== j || Reflect.has(l, c);
        if (u !== void 0 || k !== null && (!f || (v = Se(l, c)) != null && v.writable)) {
          u === void 0 && (u = Y(f ? re(l[c], i) : j), r.set(c, u));
          var d = _(u);
          if (d === j)
            return !1;
        }
        return f;
      },
      set(l, c, u, f) {
        var p;
        var d = r.get(c), v = c in l;
        if (a && c === "length")
          for (var h = u; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var g = r.get(h + "");
            g !== void 0 ? D(g, j) : h in l && (g = Y(j), r.set(h + "", g));
          }
        d === void 0 ? (!v || (p = Se(l, c)) != null && p.writable) && (d = Y(void 0), D(d, re(u, i)), r.set(c, d)) : (v = d.v !== j, D(d, re(u, i)));
        var y = Reflect.getOwnPropertyDescriptor(l, c);
        if (y != null && y.set && y.set.call(f, u), !v) {
          if (a && typeof c == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), S = Number(c);
            Number.isInteger(S) && S >= w.v && D(w, S + 1);
          }
          Qn(s);
        }
        return !0;
      },
      ownKeys(l) {
        _(s);
        var c = Reflect.ownKeys(l).filter((d) => {
          var v = r.get(d);
          return v === void 0 || v.v !== j;
        });
        for (var [u, f] of r)
          f.v !== j && !(u in l) && c.push(u);
        return c;
      },
      setPrototypeOf() {
        ia();
      }
    }
  );
}
function Qn(e, t = 1) {
  D(e, e.v + t);
}
var Xn, Ro, Io, Mo;
function cn() {
  if (Xn === void 0) {
    Xn = window, Ro = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Io = Se(t, "firstChild").get, Mo = Se(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ot(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  return Io.call(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return Mo.call(e);
}
function F(e, t) {
  if (!O)
    return /* @__PURE__ */ U(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ U(T)
  );
  if (n === null)
    n = T.appendChild(ot());
  else if (t && n.nodeType !== 3) {
    var o = ot();
    return n == null || n.before(o), te(o), o;
  }
  return te(n), n;
}
function bt(e, t) {
  if (!O) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ U(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ me(n) : n;
  }
  return T;
}
function J(e, t = 1, n = !1) {
  let o = O ? T : e;
  for (var r; t--; )
    r = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ me(o);
  if (!O)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (n && a !== 3) {
    var s = ot();
    return o === null ? r == null || r.after(s) : o.before(s), te(s), s;
  }
  return te(o), /** @type {TemplateNode} */
  o;
}
function Do(e) {
  e.textContent = "";
}
let Ot = !1, $t = !1, Bt = null, Tt = !1, On = !1;
function Zn(e) {
  On = e;
}
let yt = [];
let R = null, ae = !1;
function ge(e) {
  R = e;
}
let k = null;
function xe(e) {
  k = e;
}
let ve = null;
function pa(e) {
  ve = e;
}
let G = null, X = 0, _e = null;
function ga(e) {
  _e = e;
}
let $o = 1, Ht = 0, Me = !1;
function Bo() {
  return ++$o;
}
function At(e) {
  var f;
  var t = e.f;
  if (t & Oe)
    return !0;
  if (t & ct) {
    var n = e.deps, o = (t & ee) !== 0;
    if (n !== null) {
      var r, a, s = (t & Mt) !== 0, i = o && k !== null && !Me, l = n.length;
      if (s || i) {
        var c = (
          /** @type {Derived} */
          e
        ), u = c.parent;
        for (r = 0; r < l; r++)
          a = n[r], (s || !((f = a == null ? void 0 : a.reactions) != null && f.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Mt), i && u !== null && !(u.f & ee) && (c.f ^= ee);
      }
      for (r = 0; r < l; r++)
        if (a = n[r], At(
          /** @type {Derived} */
          a
        ) && ko(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || k !== null && !Me) && ye(e, K);
  }
  return !1;
}
function xa(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & It)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= It;
      }
    n = n.parent;
  }
  throw Ot = !1, e;
}
function ya(e) {
  return (e.f & zt) === 0 && (e.parent === null || (e.parent.f & It) === 0);
}
function Xt(e, t, n, o) {
  if (Ot) {
    if (n === null && (Ot = !1), ya(t))
      throw e;
    return;
  }
  n !== null && (Ot = !0);
  {
    xa(e, t);
    return;
  }
}
function Ho(e, t, n = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var r = 0; r < o.length; r++) {
      var a = o[r];
      a.f & ie ? Ho(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? ye(a, Oe) : a.f & K && ye(a, ct), Zt(
        /** @type {Effect} */
        a
      ));
    }
}
function Fo(e) {
  var v;
  var t = G, n = X, o = _e, r = R, a = Me, s = ve, i = q, l = ae, c = e.f;
  G = /** @type {null | Value[]} */
  null, X = 0, _e = null, Me = (c & ee) !== 0 && (ae || !Tt || R === null), R = c & (Le | lt) ? null : e, ve = null, Jn(e.ctx), ae = !1, Ht++;
  try {
    var u = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (G !== null) {
      var d;
      if (Ft(e, X), f !== null && X > 0)
        for (f.length = X + G.length, d = 0; d < G.length; d++)
          f[X + d] = G[d];
      else
        e.deps = f = G;
      if (!Me)
        for (d = X; d < f.length; d++)
          ((v = f[d]).reactions ?? (v.reactions = [])).push(e);
    } else f !== null && X < f.length && (Ft(e, X), f.length = X);
    if (Yo() && _e !== null && !ae && f !== null && !(e.f & (ie | ct | Oe)))
      for (d = 0; d < /** @type {Source[]} */
      _e.length; d++)
        Ho(
          _e[d],
          /** @type {Effect} */
          e
        );
    return r !== null && Ht++, u;
  } finally {
    G = t, X = n, _e = o, R = r, Me = a, ve = s, Jn(i), ae = l;
  }
}
function ma(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var o = zr.call(n, e);
    if (o !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[o] = n[r], n.pop());
    }
  }
  n === null && t.f & ie && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (G === null || !G.includes(t)) && (ye(t, ct), t.f & (ee | Mt) || (t.f ^= Mt), To(
    /** @type {Derived} **/
    t
  ), Ft(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ft(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var o = t; o < n.length; o++)
      ma(e, n[o]);
}
function Tn(e) {
  var t = e.f;
  if (!(t & zt)) {
    ye(e, K);
    var n = k, o = q, r = Tt;
    k = e, Tt = !0;
    try {
      t & Yt ? La(e) : jo(e), Vo(e);
      var a = Fo(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = $o;
      var s = e.deps, i;
      Yn && ua && e.f & Oe;
    } catch (l) {
      Xt(l, e, n, o || e.ctx);
    } finally {
      Tt = r, k = n;
    }
  }
}
function wa() {
  try {
    oa();
  } catch (e) {
    if (Bt !== null)
      Xt(e, Bt, null);
    else
      throw e;
  }
}
function Wo() {
  try {
    for (var e = 0; yt.length > 0; ) {
      e++ > 1e3 && wa();
      var t = yt, n = t.length;
      yt = [];
      for (var o = 0; o < n; o++) {
        var r = t[o];
        r.f & K || (r.f ^= K);
        var a = _a(r);
        ba(a);
      }
    }
  } finally {
    $t = !1, Bt = null;
  }
}
function ba(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var o = e[n];
      if (!(o.f & (zt | Pe)))
        try {
          At(o) && (Tn(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? Go(o) : o.fn = null));
        } catch (r) {
          Xt(r, o, null, o.ctx);
        }
    }
}
function Zt(e) {
  $t || ($t = !0, queueMicrotask(Wo));
  for (var t = Bt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (lt | Le)) {
      if (!(n & K)) return;
      t.f ^= K;
    }
  }
  yt.push(t);
}
function _a(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var o = n.f, r = (o & Le) !== 0, a = r && (o & K) !== 0, s = n.next;
    if (!a && !(o & Pe)) {
      if (o & _o)
        t.push(n);
      else if (r)
        n.f ^= K;
      else {
        var i = R;
        try {
          R = n, At(n) && Tn(n);
        } catch (u) {
          Xt(u, n, null, n.ctx);
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
function E(e) {
  var t;
  for (zn(); yt.length > 0; )
    $t = !0, Wo(), zn();
  return (
    /** @type {T} */
    t
  );
}
function _(e) {
  var t = e.f, n = (t & ie) !== 0;
  if (R !== null && !ae) {
    ve !== null && ve.includes(e) && la();
    var o = R.deps;
    e.rv < Ht && (e.rv = Ht, G === null && o !== null && o[X] === e ? X++ : G === null ? G = [e] : (!Me || !G.includes(e)) && G.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), a = r.parent;
    a !== null && !(a.f & ee) && (r.f ^= ee);
  }
  return n && (r = /** @type {Derived} */
  e, At(r) && ko(r)), e.v;
}
function he(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const Na = -7169;
function ye(e, t) {
  e.f = e.f & Na | t;
}
function Aa(e) {
  k === null && R === null && na(), R !== null && R.f & ee && k === null && ta(), On && ea();
}
function Ea(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ke(e, t, n, o = !0) {
  var r = (e & lt) !== 0, a = k, s = {
    ctx: q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Oe,
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
  if (n)
    try {
      Tn(s), s.f |= No;
    } catch (c) {
      throw le(s), c;
    }
  else t !== null && Zt(s);
  var i = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Ao | It)) === 0;
  if (!i && !r && o && (a !== null && Ea(s, a), R !== null && R.f & ie)) {
    var l = (
      /** @type {Derived} */
      R
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return s;
}
function Pa(e) {
  const t = Ke(Kt, null, !1);
  return ye(t, K), t.teardown = e, t;
}
function Ge(e) {
  Aa();
  var t = k !== null && (k.f & Le) !== 0 && q !== null && !q.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      q
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: k,
      reaction: R
    });
  } else {
    var o = Jt(e);
    return o;
  }
}
function Sa(e) {
  const t = Ke(lt, e, !0);
  return () => {
    le(t);
  };
}
function Ca(e) {
  const t = Ke(lt, e, !0);
  return (n = {}) => new Promise((o) => {
    n.outro ? rt(t, () => {
      le(t), o(void 0);
    }) : (le(t), o(void 0));
  });
}
function Jt(e) {
  return Ke(_o, e, !1);
}
function kn(e) {
  return Ke(Kt, e, !0);
}
function $e(e, t = [], n = V) {
  const o = t.map(n);
  return Ye(() => e(...o.map(_)));
}
function Ye(e, t = 0) {
  return Ke(Kt | Yt | t, e, !0);
}
function Ce(e, t = !0) {
  return Ke(Kt | Le, e, !0, t);
}
function Vo(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = On, o = R;
    Zn(!0), ge(null);
    try {
      t.call(null);
    } finally {
      Zn(n), ge(o);
    }
  }
}
function jo(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var o = n.next;
    le(n, t), n = o;
  }
}
function La(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Le || le(t), t = n;
  }
}
function le(e, t = !0) {
  var n = !1;
  if ((t || e.f & Kr) && e.nodes_start !== null) {
    for (var o = e.nodes_start, r = e.nodes_end; o !== null; ) {
      var a = o === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(o)
      );
      o.remove(), o = a;
    }
    n = !0;
  }
  jo(e, t && !n), Ft(e, 0), ye(e, zt);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  Vo(e);
  var i = e.parent;
  i !== null && i.first !== null && Go(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Go(e) {
  var t = e.parent, n = e.prev, o = e.next;
  n !== null && (n.next = o), o !== null && (o.prev = n), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = n));
}
function rt(e, t) {
  var n = [];
  Rn(e, n, !0), Uo(n, () => {
    le(e), t && t();
  });
}
function Uo(e, t) {
  var n = e.length;
  if (n > 0) {
    var o = () => --n || t();
    for (var r of e)
      r.out(o);
  } else
    t();
}
function Rn(e, t, n) {
  if (!(e.f & Pe)) {
    if (e.f ^= Pe, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var r = o.next, a = (o.f & ut) !== 0 || (o.f & Le) !== 0;
      Rn(o, t, a ? n : !1), o = r;
    }
  }
}
function Wt(e) {
  Ko(e, !0);
}
function Ko(e, t) {
  if (e.f & Pe) {
    e.f ^= Pe, e.f & K || (e.f ^= K), At(e) && (ye(e, Oe), Zt(e));
    for (var n = e.first; n !== null; ) {
      var o = n.next, r = (n.f & ut) !== 0 || (n.f & Le) !== 0;
      Ko(n, r ? t : !1), n = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Oa(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let q = null;
function Jn(e) {
  q = e;
}
function ce(e, t = !1, n) {
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
function ue(e) {
  const t = q;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = k, o = R;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var a = s[r];
          xe(a.effect), ge(a.reaction), Jt(a.fn);
        }
      } finally {
        xe(n), ge(o);
      }
    }
    q = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Yo() {
  return !0;
}
function Ta(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ka = [
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
function Ra(e) {
  return ka.includes(e);
}
const Ia = {
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
function Ma(e) {
  return e = e.toLowerCase(), Ia[e] ?? e;
}
const Da = ["touchstart", "touchmove"];
function $a(e) {
  return Da.includes(e);
}
function Ba(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, dt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function zo(e) {
  var t = R, n = k;
  ge(null), xe(null);
  try {
    return e();
  } finally {
    ge(t), xe(n);
  }
}
const qo = /* @__PURE__ */ new Set(), un = /* @__PURE__ */ new Set();
function Ha(e, t, n, o = {}) {
  function r(a) {
    if (o.capture || xt.call(t, a), !a.cancelBubble)
      return zo(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? dt(() => {
    t.addEventListener(e, r, o);
  }) : t.addEventListener(e, r, o), r;
}
function Qo(e) {
  for (var t = 0; t < e.length; t++)
    qo.add(e[t]);
  for (var n of un)
    n(e);
}
function xt(e) {
  var S;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, r = ((S = e.composedPath) == null ? void 0 : S.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var l = r.indexOf(i);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = r.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  r[s] || e.target, a !== t) {
    mt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var u = R, f = k;
    ge(null), xe(null);
    try {
      for (var d, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + o];
          if (g !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Sn(g)) {
              var [y, ...w] = g;
              y.apply(a, [e, ...w]);
            } else
              g.call(a, e);
        } catch (p) {
          d ? v.push(p) : d = p;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (d) {
        for (let p of v)
          queueMicrotask(() => {
            throw p;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ge(u), xe(f);
    }
  }
}
function In(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function pe(e, t) {
  var n = (
    /** @type {Effect} */
    k
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  var n = (t & Ur) !== 0, o, r = !e.startsWith("<!>");
  return () => {
    if (O)
      return pe(T, null), T;
    o === void 0 && (o = In(r ? e : "<!>" + e), o = /** @type {Node} */
    /* @__PURE__ */ U(o));
    var a = (
      /** @type {TemplateNode} */
      n || Ro ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    return pe(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function Et(e, t, n = "svg") {
  var o = !e.startsWith("<!>"), r = (t & Gr) !== 0, a = `<${n}>${o ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (O)
      return pe(T, null), T;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        In(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ U(i)
      );
      if (r)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ U(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ U(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ U(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ U(c)
      ), f = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      pe(u, f);
    } else
      pe(c, c);
    return c;
  };
}
function _t() {
  if (O)
    return pe(T, null), T;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ot();
  return e.append(t, n), pe(t, n), e;
}
function H(e, t) {
  if (O) {
    k.nodes_end = T, De();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let dn = !0;
function Vt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Xo(e, t) {
  return Zo(e, t);
}
function Fa(e, t) {
  cn(), t.intro = t.intro ?? !1;
  const n = t.target, o = O, r = T;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ U(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== bo); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ me(a);
    if (!a)
      throw et;
    se(!0), te(
      /** @type {Comment} */
      a
    ), De();
    const s = Zo(e, { ...t, anchor: a });
    if (T === null || T.nodeType !== 8 || /** @type {Comment} */
    T.data !== En)
      throw Qt(), et;
    return se(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === et)
      return t.recover === !1 && ra(), cn(), Do(n), se(!1), Xo(e, t);
    throw s;
  } finally {
    se(o), te(r);
  }
}
const Qe = /* @__PURE__ */ new Map();
function Zo(e, { target: t, anchor: n, props: o = {}, events: r, context: a, intro: s = !0 }) {
  cn();
  var i = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var v = f[d];
      if (!i.has(v)) {
        i.add(v);
        var h = $a(v);
        t.addEventListener(v, xt, { passive: h });
        var g = Qe.get(v);
        g === void 0 ? (document.addEventListener(v, xt, { passive: h }), Qe.set(v, 1)) : Qe.set(v, g + 1);
      }
    }
  };
  l(Cn(qo)), un.add(l);
  var c = void 0, u = Ca(() => {
    var f = n ?? t.appendChild(ot());
    return Ce(() => {
      if (a) {
        ce({});
        var d = (
          /** @type {ComponentContext} */
          q
        );
        d.c = a;
      }
      r && (o.$$events = r), O && pe(
        /** @type {TemplateNode} */
        f,
        null
      ), dn = s, c = e(f, o) || {}, dn = !0, O && (k.nodes_end = T), a && ue();
    }), () => {
      var h;
      for (var d of i) {
        t.removeEventListener(d, xt);
        var v = (
          /** @type {number} */
          Qe.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, xt), Qe.delete(d)) : Qe.set(d, v);
      }
      un.delete(l), f !== n && ((h = f.parentNode) == null || h.removeChild(f));
    };
  });
  return fn.set(c, u), c;
}
let fn = /* @__PURE__ */ new WeakMap();
function Wa(e, t) {
  const n = fn.get(e);
  return n ? (fn.delete(e), n(t)) : Promise.resolve();
}
function Ue(e, t, n = !1) {
  O && De();
  var o = e, r = null, a = null, s = j, i = n ? ut : 0, l = !1;
  const c = (f, d = !0) => {
    l = !0, u(d, f);
  }, u = (f, d) => {
    if (s === (s = f)) return;
    let v = !1;
    if (O) {
      const h = (
        /** @type {Comment} */
        o.data === An
      );
      !!s === h && (o = ln(), te(o), se(!1), v = !0);
    }
    s ? (r ? Wt(r) : d && (r = Ce(() => d(o))), a && rt(a, () => {
      a = null;
    })) : (a ? Wt(a) : d && (a = Ce(() => d(o))), r && rt(r, () => {
      r = null;
    })), v && se(!0);
  };
  Ye(() => {
    l = !1, t(c), l || u(null, null);
  }, i), O && (o = T);
}
function Va(e, t, n) {
  O && De();
  var o = e, r = j, a, s = Jr;
  Ye(() => {
    s(r, r = t()) && (a && rt(a), a = Ce(() => n(o)));
  }), O && (o = T);
}
function at(e, t) {
  return t;
}
function ja(e, t, n, o) {
  for (var r = [], a = t.length, s = 0; s < a; s++)
    Rn(t[s].e, r, !0);
  var i = a > 0 && r.length === 0 && n !== null;
  if (i) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Do(l), l.append(
      /** @type {Element} */
      n
    ), o.clear(), Ie(e, t[0].prev, t[a - 1].next);
  }
  Uo(r, () => {
    for (var c = 0; c < a; c++) {
      var u = t[c];
      i || (o.delete(u.k), Ie(e, u.prev, u.next)), le(u.e, !i);
    }
  });
}
function st(e, t, n, o, r, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & wo) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = O ? te(
      /** @type {Comment | Text} */
      /* @__PURE__ */ U(c)
    ) : c.appendChild(ot());
  }
  O && De();
  var u = null, f = !1, d = /* @__PURE__ */ fa(() => {
    var v = n();
    return Sn(v) ? v : v == null ? [] : Cn(v);
  });
  Ye(() => {
    var v = _(d), h = v.length;
    if (f && h === 0)
      return;
    f = h === 0;
    let g = !1;
    if (O) {
      var y = (
        /** @type {Comment} */
        s.data === An
      );
      y !== (h === 0) && (s = ln(), te(s), se(!1), g = !0);
    }
    if (O) {
      for (var w = null, S, p = 0; p < h; p++) {
        if (T.nodeType === 8 && /** @type {Comment} */
        T.data === En) {
          s = /** @type {Comment} */
          T, g = !0, se(!1);
          break;
        }
        var x = v[p], m = o(x, p);
        S = Jo(
          T,
          i,
          w,
          null,
          x,
          m,
          p,
          r,
          t,
          n
        ), i.items.set(m, S), w = S;
      }
      h > 0 && te(ln());
    }
    O || Ga(v, i, s, r, t, o, n), a !== null && (h === 0 ? u ? Wt(u) : u = Ce(() => a(s)) : u !== null && rt(u, () => {
      u = null;
    })), g && se(!0), _(d);
  }), O && (s = T);
}
function Ga(e, t, n, o, r, a, s) {
  var He, ke, ze, L;
  var i = (r & $r) !== 0, l = (r & (_n | Nn)) !== 0, c = e.length, u = t.items, f = t.first, d = f, v, h = null, g, y = [], w = [], S, p, x, m;
  if (i)
    for (m = 0; m < c; m += 1)
      S = e[m], p = a(S, m), x = u.get(p), x !== void 0 && ((He = x.a) == null || He.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(x));
  for (m = 0; m < c; m += 1) {
    if (S = e[m], p = a(S, m), x = u.get(p), x === void 0) {
      var N = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      h = Jo(
        N,
        t,
        h,
        h === null ? t.first : h.next,
        S,
        p,
        m,
        o,
        r,
        s
      ), u.set(p, h), y = [], w = [], d = h.next;
      continue;
    }
    if (l && Ua(x, S, m, r), x.e.f & Pe && (Wt(x.e), i && ((ke = x.a) == null || ke.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(x))), x !== d) {
      if (v !== void 0 && v.has(x)) {
        if (y.length < w.length) {
          var A = w[0], C;
          h = A.prev;
          var M = y[0], Q = y[y.length - 1];
          for (C = 0; C < y.length; C += 1)
            eo(y[C], A, n);
          for (C = 0; C < w.length; C += 1)
            v.delete(w[C]);
          Ie(t, M.prev, Q.next), Ie(t, h, M), Ie(t, Q, A), d = A, h = Q, m -= 1, y = [], w = [];
        } else
          v.delete(x), eo(x, d, n), Ie(t, x.prev, x.next), Ie(t, x, h === null ? t.first : h.next), Ie(t, h, x), h = x;
        continue;
      }
      for (y = [], w = []; d !== null && d.k !== p; )
        d.e.f & Pe || (v ?? (v = /* @__PURE__ */ new Set())).add(d), w.push(d), d = d.next;
      if (d === null)
        continue;
      x = d;
    }
    y.push(x), h = x, d = x.next;
  }
  if (d !== null || v !== void 0) {
    for (var W = v === void 0 ? [] : Cn(v); d !== null; )
      d.e.f & Pe || W.push(d), d = d.next;
    var de = W.length;
    if (de > 0) {
      var ne = r & wo && c === 0 ? n : null;
      if (i) {
        for (m = 0; m < de; m += 1)
          (ze = W[m].a) == null || ze.measure();
        for (m = 0; m < de; m += 1)
          (L = W[m].a) == null || L.fix();
      }
      ja(t, W, ne, u);
    }
  }
  i && dt(() => {
    var qe;
    if (g !== void 0)
      for (x of g)
        (qe = x.a) == null || qe.apply();
  }), k.first = t.first && t.first.e, k.last = h && h.e;
}
function Ua(e, t, n, o) {
  o & _n && sn(e.v, t), o & Nn ? sn(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Jo(e, t, n, o, r, a, s, i, l, c) {
  var u = (l & _n) !== 0, f = (l & Br) === 0, d = u ? f ? /* @__PURE__ */ qt(r) : Y(r) : r, v = l & Nn ? Y(s) : s, h = {
    i: v,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: o
  };
  try {
    return h.e = Ce(() => i(e, d, v, c), O), h.e.prev = n && n.e, h.e.next = o && o.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), o !== null && (o.prev = h, o.e.prev = h.e), h;
  } finally {
  }
}
function eo(e, t, n) {
  for (var o = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== o; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(a)
    );
    r.before(a), a = s;
  }
}
function Ie(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Pt(e, t, n, o, r) {
  var a = e, s = "", i;
  Ye(() => {
    if (s === (s = t() ?? "")) {
      O && De();
      return;
    }
    i !== void 0 && (le(i), i = void 0), s !== "" && (i = Ce(() => {
      if (O) {
        T.data;
        for (var l = De(), c = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ me(l);
        if (l === null)
          throw Qt(), et;
        pe(T, c), a = te(l);
        return;
      }
      var u = s + "";
      u = `<svg>${u}</svg>`;
      var f = In(u);
      for (f = /** @type {Element} */
      /* @__PURE__ */ U(f), pe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ U(f),
        /** @type {TemplateNode} */
        f.lastChild
      ); /* @__PURE__ */ U(f); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ U(f)
        );
    }));
  });
}
function er(e, t, ...n) {
  var o = e, r = z, a;
  Ye(() => {
    r !== (r = t()) && (a && (le(a), a = null), a = Ce(() => (
      /** @type {SnippetFn} */
      r(o, ...n)
    )));
  }, ut), O && (o = T);
}
function Ka(e, t, n) {
  O && De();
  var o = e, r, a;
  Ye(() => {
    r !== (r = t()) && (a && (rt(a), a = null), r && (a = Ce(() => n(o, r))));
  }, ut), O && (o = T);
}
function Be(e, t) {
  dt(() => {
    var n = e.getRootNode(), o = (
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
    if (!o.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, o.appendChild(r);
    }
  });
}
function tr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = tr(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ya() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = tr(e)) && (o && (o += " "), o += t);
  return o;
}
function za(e) {
  return typeof e == "object" ? Ya(e) : e ?? "";
}
const to = [...` 	
\r\f \v\uFEFF`];
function qa(e, t, n) {
  var o = e == null ? "" : "" + e;
  if (t && (o = o ? o + " " + t : t), n) {
    for (var r in n)
      if (n[r])
        o = o ? o + " " + r : r;
      else if (o.length)
        for (var a = r.length, s = 0; (s = o.indexOf(r, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || to.includes(o[s - 1])) && (i === o.length || to.includes(o[i])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(i + 1) : s = i;
        }
  }
  return o === "" ? null : o;
}
function en(e, t, n, o, r, a) {
  var s = e.__className;
  if (O || s !== n) {
    var i = qa(n, o, a);
    (!O || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = n;
  } else if (a) {
    r ?? (r = {});
    for (var l in a) {
      var c = !!a[l];
      c !== !!r[l] && e.classList.toggle(l, c);
    }
  }
  return a;
}
const hn = Symbol("class");
function Qa(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ft(e, t, n, o) {
  var r = e.__attributes ?? (e.__attributes = {});
  O && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Yr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && nr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Xa(e, t, n, o, r = !1, a = !1, s = !1) {
  let i = O && a;
  i && se(!1);
  var l = t || {}, c = e.tagName === "OPTION";
  for (var u in t)
    u in n || (n[u] = null);
  n.class ? n.class = za(n.class) : n.class = null;
  var f = nr(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const p in n) {
    let x = n[p];
    if (c && p === "value" && x == null) {
      e.value = e.__value = "", l[p] = x;
      continue;
    }
    var v = l[p];
    if (!(x === v && p !== "class")) {
      l[p] = x;
      var h = p[0] + p[1];
      if (h !== "$$") {
        if (h === "on") {
          const m = {}, N = "$$" + p;
          let A = p.slice(2);
          var g = Ra(A);
          if (Ta(A) && (A = A.slice(0, -7), m.capture = !0), !g && v) {
            if (x != null) continue;
            e.removeEventListener(A, l[N], m), l[N] = null;
          }
          if (x != null)
            if (g)
              e[`__${A}`] = x, Qo([A]);
            else {
              let C = function(M) {
                l[p].call(this, M);
              };
              l[N] = Ha(A, e, C, m);
            }
          else g && (e[`__${A}`] = void 0);
        } else if (p === "class") {
          var y = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          en(e, y, x, o, t == null ? void 0 : t[hn], n[hn]);
        } else if (p === "style" && x != null)
          e.style.cssText = x + "";
        else if (p === "autofocus")
          Ba(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!a && (p === "__value" || p === "value" && x != null))
          e.value = e.__value = x;
        else if (p === "selected" && c)
          Qa(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var w = p;
          r || (w = Ma(w));
          var S = w === "defaultValue" || w === "defaultChecked";
          if (x == null && !a && !S)
            if (d[p] = null, w === "value" || w === "checked") {
              let m = (
                /** @type {HTMLInputElement} */
                e
              );
              const N = t === void 0;
              if (w === "value") {
                let A = m.defaultValue;
                m.removeAttribute(w), m.defaultValue = A, m.value = m.__value = N ? A : null;
              } else {
                let A = m.defaultChecked;
                m.removeAttribute(w), m.defaultChecked = A, m.checked = N ? A : !1;
              }
            } else
              e.removeAttribute(p);
          else S || f.includes(w) && (a || typeof x != "string") ? e[w] = x : typeof x != "function" && ft(e, w, x);
        }
        p === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && se(!0), l;
}
var no = /* @__PURE__ */ new Map();
function nr(e) {
  var t = no.get(e.nodeName);
  if (t) return t;
  no.set(e.nodeName, t = []);
  for (var n, o = e, r = Element.prototype; r !== o; ) {
    n = qr(o);
    for (var a in n)
      n[a].set && t.push(a);
    o = Eo(o);
  }
  return t;
}
function Ve(e, t, n, o) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== n && (r[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
const Za = () => performance.now(), fe = {
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
function or() {
  const e = fe.now();
  fe.tasks.forEach((t) => {
    t.c(e) || (fe.tasks.delete(t), t.f());
  }), fe.tasks.size !== 0 && fe.tick(or);
}
function rr(e) {
  let t;
  return fe.tasks.size === 0 && fe.tick(or), {
    promise: new Promise((n) => {
      fe.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      fe.tasks.delete(t);
    }
  };
}
function St(e, t) {
  zo(() => {
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
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function oo(e) {
  const t = {}, n = e.split(";");
  for (const o of n) {
    const [r, a] = o.split(":");
    if (!r || a === void 0) break;
    const s = Ja(r.trim());
    t[s] = a.trim();
  }
  return t;
}
const es = (e) => e;
function ts(e, t, n, o) {
  var r = (e & jr) !== 0, a = "both", s, i = t.inert, l = t.style.overflow, c, u;
  function f() {
    var y = R, w = k;
    ge(null), xe(null);
    try {
      return s ?? (s = n()(t, (o == null ? void 0 : o()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ge(y), xe(w);
    }
  }
  var d = {
    is_global: r,
    in() {
      t.inert = i, St(t, "introstart"), c = vn(t, f(), u, 1, () => {
        St(t, "introend"), c == null || c.abort(), c = s = void 0, t.style.overflow = l;
      });
    },
    out(y) {
      t.inert = !0, St(t, "outrostart"), u = vn(t, f(), c, 0, () => {
        St(t, "outroend"), y == null || y();
      });
    },
    stop: () => {
      c == null || c.abort(), u == null || u.abort();
    }
  }, v = (
    /** @type {Effect} */
    k
  );
  if ((v.transitions ?? (v.transitions = [])).push(d), dn) {
    var h = r;
    if (!h) {
      for (var g = (
        /** @type {Effect | null} */
        v.parent
      ); g && g.f & ut; )
        for (; (g = g.parent) && !(g.f & Yt); )
          ;
      h = !g || (g.f & No) !== 0;
    }
    h && Jt(() => {
      he(() => d.in());
    });
  }
}
function vn(e, t, n, o, r) {
  var a = o === 1;
  if (Ze(t)) {
    var s, i = !1;
    return dt(() => {
      if (!i) {
        var y = t({ direction: a ? "in" : "out" });
        s = vn(e, y, n, o, r);
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
    return r(), {
      abort: z,
      deactivate: z,
      reset: z,
      t: () => o
    };
  const { delay: l = 0, css: c, tick: u, easing: f = es } = t;
  var d = [];
  if (a && n === void 0 && (u && u(0, 1), c)) {
    var v = oo(c(0, 1));
    d.push(v, v);
  }
  var h = () => 1 - o, g = e.animate(d, { duration: l });
  return g.onfinish = () => {
    var y = (n == null ? void 0 : n.t()) ?? 1 - o;
    n == null || n.abort();
    var w = o - y, S = (
      /** @type {number} */
      t.duration * Math.abs(w)
    ), p = [];
    if (S > 0) {
      var x = !1;
      if (c)
        for (var m = Math.ceil(S / 16.666666666666668), N = 0; N <= m; N += 1) {
          var A = y + w * f(N / m), C = oo(c(A, 1 - A));
          p.push(C), x || (x = C.overflow === "hidden");
        }
      x && (e.style.overflow = "hidden"), h = () => {
        var M = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return y + w * f(M / S);
      }, u && rr(() => {
        if (g.playState !== "running") return !1;
        var M = h();
        return u(M, 1 - M), !0;
      });
    }
    g = e.animate(p, { duration: S, fill: "forwards" }), g.onfinish = () => {
      h = () => o, u == null || u(o, 1 - o), r();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = z);
    },
    deactivate: () => {
      r = z;
    },
    reset: () => {
      o === 0 && (u == null || u(1, 0));
    },
    t: () => h()
  };
}
function ro(e, t) {
  return e === t || (e == null ? void 0 : e[tt]) === t;
}
function Mn(e = {}, t, n, o) {
  return Jt(() => {
    var r, a;
    return kn(() => {
      r = a, a = [], he(() => {
        e !== n(...a) && (t(e, ...a), r && ro(n(...r), e) && t(null, ...r));
      });
    }), () => {
      dt(() => {
        a && ro(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Dn(e) {
  q === null && Oa(), Ge(() => {
    const t = he(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ar(e, t, n) {
  if (e == null)
    return t(void 0), z;
  const o = he(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const Xe = [];
function sr(e, t = z) {
  let n = null;
  const o = /* @__PURE__ */ new Set();
  function r(i) {
    if (Lo(e, i) && (e = i, n)) {
      const l = !Xe.length;
      for (const c of o)
        c[1](), Xe.push(c, e);
      if (l) {
        for (let c = 0; c < Xe.length; c += 2)
          Xe[c][0](Xe[c + 1]);
        Xe.length = 0;
      }
    }
  }
  function a(i) {
    r(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, l = z) {
    const c = [i, l];
    return o.add(c), o.size === 1 && (n = t(r, a) || z), i(
      /** @type {T} */
      e
    ), () => {
      o.delete(c), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
function ns(e) {
  let t;
  return ar(e, (n) => t = n)(), t;
}
let Ct = !1, pn = Symbol();
function os(e, t, n) {
  const o = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ qt(void 0),
    unsubscribe: z
  });
  if (o.store !== e && !(pn in n))
    if (o.unsubscribe(), o.store = e ?? null, e == null)
      o.source.v = void 0, o.unsubscribe = z;
    else {
      var r = !0;
      o.unsubscribe = ar(e, (a) => {
        r ? o.source.v = a : D(o.source, a);
      }), r = !1;
    }
  return e && pn in n ? ns(e) : _(o.source);
}
function rs(e, t) {
  return e.set(t), t;
}
function as() {
  const e = {};
  function t() {
    Pa(() => {
      for (var n in e)
        e[n].unsubscribe();
      mt(e, pn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ao(e, t, n) {
  return e.set(n), t;
}
function ss(e) {
  var t = Ct;
  try {
    return Ct = !1, [e(), Ct];
  } finally {
    Ct = t;
  }
}
const is = {
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
function ls(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    is
  );
}
const cs = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let o = e.props[n];
      if (Ze(o) && (o = o()), typeof o == "object" && o !== null && t in o) return o[t];
    }
  },
  set(e, t, n) {
    let o = e.props.length;
    for (; o--; ) {
      let r = e.props[o];
      Ze(r) && (r = r());
      const a = Se(r, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let o = e.props[n];
      if (Ze(o) && (o = o()), typeof o == "object" && o !== null && t in o) {
        const r = Se(o, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === tt || t === Pn) return !1;
    for (let n of e.props)
      if (Ze(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Ze(n) && (n = n());
      for (const o in n)
        t.includes(o) || t.push(o);
    }
    return t;
  }
};
function ir(...e) {
  return new Proxy({ props: e }, cs);
}
function P(e, t, n, o) {
  var m;
  var r = (n & Hr) !== 0, a = !0, s = (n & Wr) !== 0, i = (n & Vr) !== 0, l = !1, c;
  s ? [c, l] = ss(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var u = tt in e || Pn in e, f = s && (((m = Se(e, t)) == null ? void 0 : m.set) ?? (u && t in e && ((N) => e[t] = N))) || void 0, d = (
    /** @type {V} */
    o
  ), v = !0, h = !1, g = () => (h = !0, v && (v = !1, i ? d = he(
    /** @type {() => V} */
    o
  ) : d = /** @type {V} */
  o), d);
  c === void 0 && o !== void 0 && (f && a && aa(), c = g(), f && f(c));
  var y;
  if (y = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? g() : (v = !0, h = !1, N);
  }, !(n & Fr))
    return y;
  if (f) {
    var w = e.$$legacy;
    return function(N, A) {
      return arguments.length > 0 ? ((!A || w || l) && f(A ? y() : N), N) : y();
    };
  }
  var S = !1, p = /* @__PURE__ */ qt(c), x = /* @__PURE__ */ V(() => {
    var N = y(), A = _(p);
    return S ? (S = !1, A) : p.v = N;
  });
  return r || (x.equals = Ln), function(N, A) {
    if (arguments.length > 0) {
      const C = A ? _(x) : s ? re(N) : N;
      return x.equals(C) || (S = !0, D(p, C), h && d !== void 0 && (d = C), he(() => _(x))), N;
    }
    return _(x);
  };
}
function us(e) {
  return new ds(e);
}
var Ne, Z;
class ds {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    We(this, Ne);
    /** @type {Record<string, any>} */
    We(this, Z);
    var a;
    var n = /* @__PURE__ */ new Map(), o = (s, i) => {
      var l = /* @__PURE__ */ qt(i);
      return n.set(s, l), l;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return _(n.get(i) ?? o(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === Pn ? !0 : (_(n.get(i) ?? o(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, l) {
          return D(n.get(i) ?? o(i, l), l), Reflect.set(s, i, l);
        }
      }
    );
    pt(this, Z, (t.hydrate ? Fa : Xo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && E(), pt(this, Ne, r.$$events);
    for (const s of Object.keys(I(this, Z)))
      s === "$set" || s === "$destroy" || s === "$on" || mt(this, s, {
        get() {
          return I(this, Z)[s];
        },
        /** @param {any} value */
        set(i) {
          I(this, Z)[s] = i;
        },
        enumerable: !0
      });
    I(this, Z).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, I(this, Z).$destroy = () => {
      Wa(I(this, Z));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    I(this, Z).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    I(this, Ne)[t] = I(this, Ne)[t] || [];
    const o = (...r) => n.call(this, ...r);
    return I(this, Ne)[t].push(o), () => {
      I(this, Ne)[t] = I(this, Ne)[t].filter(
        /** @param {any} fn */
        (r) => r !== o
      );
    };
  }
  $destroy() {
    I(this, Z).$destroy();
  }
}
Ne = new WeakMap(), Z = new WeakMap();
let lr;
typeof HTMLElement == "function" && (lr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, o) {
    super();
    /** The Svelte component constructor */
    oe(this, "$$ctor");
    /** Slots */
    oe(this, "$$s");
    /** @type {any} The Svelte component instance */
    oe(this, "$$c");
    /** Whether or not the custom element is connected */
    oe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    oe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    oe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    oe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    oe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    oe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    oe(this, "$$me");
    this.$$ctor = t, this.$$s = n, o && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, o);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, o) {
    if (super.removeEventListener(t, n, o), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (a) => {
          const s = document.createElement("slot");
          r !== "default" && (s.name = r), H(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, o = fs(this);
      for (const r of this.$$s)
        r in o && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = kt(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = us({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Sa(() => {
        kn(() => {
          var r;
          this.$$r = !0;
          for (const a of Dt(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = kt(
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
  attributeChangedCallback(t, n, o) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = kt(t, o, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
    return Dt(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function kt(e, t, n, o) {
  var a;
  const r = (a = n[e]) == null ? void 0 : a.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !n[e])
    return t;
  if (o === "toAttribute")
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
function fs(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function we(e, t, n, o, r, a) {
  let s = class extends lr {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Dt(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Dt(t).forEach((i) => {
    mt(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(l) {
        var f;
        l = kt(i, l, t), this.$$d[i] = l;
        var c = this.$$c;
        if (c) {
          var u = (f = Se(c, i)) == null ? void 0 : f.get;
          u ? c[i] = l : c.$set({ [i]: l });
        }
      }
    });
  }), o.forEach((i) => {
    mt(s.prototype, i, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function so(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function hs(e) {
  return e;
}
function vs(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function gn(e, t) {
  if (e === t || e !== e) return () => e;
  const n = typeof e;
  if (n !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const o = (
      /** @type {Array<any>} */
      t.map((r, a) => gn(
        /** @type {Array<any>} */
        e[a],
        r
      ))
    );
    return (r) => o.map((a) => a(r));
  }
  if (n === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (so(e) && so(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (l) => new Date(a + l * i);
    }
    const o = Object.keys(t), r = {};
    return o.forEach((a) => {
      r[a] = gn(e[a], t[a]);
    }), (a) => {
      const s = {};
      return o.forEach((i) => {
        s[i] = r[i](a);
      }), s;
    };
  }
  if (n === "number") {
    const o = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (r) => e + r * o;
  }
  return () => t;
}
var Ae, nt, Nt, je;
const Hn = class Hn {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, n = {}) {
    We(this, Ae, Y(
      /** @type {T} */
      void 0
    ));
    We(this, nt, Y(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    We(this, Nt);
    /** @type {import('../internal/client/types').Task | null} */
    We(this, je, null);
    I(this, Ae).v = I(this, nt).v = t, pt(this, Nt, n);
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
    const o = new Hn(t(), n);
    return kn(() => {
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
  set(t, n) {
    var f;
    D(I(this, nt), t);
    let {
      delay: o = 0,
      duration: r = 400,
      easing: a = hs,
      interpolate: s = gn
    } = { ...I(this, Nt), ...n };
    if (r === 0)
      return (f = I(this, je)) == null || f.abort(), D(I(this, Ae), t), Promise.resolve();
    const i = fe.now() + o;
    let l, c = !1, u = I(this, je);
    return pt(this, je, rr((d) => {
      if (d < i)
        return !0;
      if (!c) {
        c = !0;
        const h = I(this, Ae).v;
        l = s(h, t), typeof r == "function" && (r = r(h, t)), u == null || u.abort();
      }
      const v = d - i;
      return v > /** @type {number} */
      r ? (D(I(this, Ae), t), !1) : (D(I(this, Ae), l(a(v / /** @type {number} */
      r))), !0);
    })), I(this, je).promise;
  }
  get current() {
    return _(I(this, Ae));
  }
  get target() {
    return _(I(this, nt));
  }
  set target(t) {
    this.set(t);
  }
};
Ae = new WeakMap(), nt = new WeakMap(), Nt = new WeakMap(), je = new WeakMap();
let Je = Hn;
function ps(e) {
  return Object.entries(e).reduce((t, [n, o]) => (t[o] = n, t), {});
}
const io = 16;
function jt(e = [0, 0], t = "px") {
  const n = e[0] * (io * Math.sqrt(3)), o = e[1] * 1.5 * io;
  return [n, o].map((r) => `${Math.round(r)}${t}`);
}
var gs = /* @__PURE__ */ Et("<g><text> </text></g>"), xs = /* @__PURE__ */ Et('<g class="hexlabels svelte-ejrww9"></g>');
const ys = {
  hash: "svelte-ejrww9",
  code: ".hexlabels.svelte-ejrww9 {pointer-events:none;}.hexlabels__text.svelte-ejrww9 {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:9px;font-family:sans-serif;text-anchor:middle;}.hexlabels__text--allocation.svelte-ejrww9 {fill:white;}"
};
function cr(e, t) {
  ce(t, !0), Be(e, ys);
  let n = P(t, "hexes", 7), o = P(t, "allocations", 7), r = P(t, "labelsToShow", 23, () => ({})), a = P(t, "showElectorateLabels", 7, !1), s = /* @__PURE__ */ V(() => a() ? n() : n().filter(({ id: l }) => r()[l]));
  var i = xs();
  return st(i, 21, () => _(s), at, (l, c) => {
    let u = () => _(c).id, f = () => _(c).coordPx, d = () => _(c).shortName;
    var v = gs(), h = F(v);
    let g;
    var y = F(h, !0);
    B(h), B(v), $e(
      (w) => {
        ft(v, "transform", w), g = en(h, 0, "hexlabels__text svelte-ejrww9", null, g, {
          "hexlabels__text--allocation": o()[u()]
        }), Vt(y, d());
      },
      [
        () => `translate(${f().join(" ")})`
      ]
    ), H(l, v);
  }), B(i), H(e, i), ue({
    get hexes() {
      return n();
    },
    set hexes(l) {
      n(l), E();
    },
    get allocations() {
      return o();
    },
    set allocations(l) {
      o(l), E();
    },
    get labelsToShow() {
      return r();
    },
    set labelsToShow(l = {}) {
      r(l), E();
    },
    get showElectorateLabels() {
      return a();
    },
    set showElectorateLabels(l = !1) {
      a(l), E();
    }
  });
}
we(
  cr,
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
var ms = /* @__PURE__ */ Et('<g><g class="group-hexes svelte-4wb87v"><!></g><g class="group-outline group-outline__under svelte-4wb87v"><!></g><!><g class="group-outline group-outline__over svelte-4wb87v"><!></g><g class="group-hex-strokes svelte-4wb87v"><!></g></g>');
const ws = {
  hash: "svelte-4wb87v",
  code: `.group.svelte-4wb87v:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-4wb87v {display:none;}.group--hidden.svelte-4wb87v {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-4wb87v,
.group-outline.svelte-4wb87v {pointer-events:none;}.group.svelte-4wb87v .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-4wb87v .hex-outline {fill:none;stroke:var(--c-state-outline);stroke-width:1.5px;transition:opacity 0.5s, stroke 0.5s;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-4wb87v:not(.group--has-focuses) .group-outline:where(.svelte-4wb87v) .hex-outline {stroke:var(--c-empty-state-outline);}.group--map-is-full.svelte-4wb87v:not(.group--has-focuses) .group-outline:where(.svelte-4wb87v) .hex-outline {stroke:transparent;}.group-hexes.svelte-4wb87v .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-4wb87v .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-4wb87v .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-4wb87v .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-4wb87v .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-4wb87v .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-4wb87v .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-4wb87v .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-4wb87v .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-4wb87v .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-4wb87v .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-4wb87v .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-4wb87v .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-4wb87v .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-4wb87v .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-null-border);stroke-width:1.5px;}.group--map-is-empty.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex {fill:var(--a-empty);stroke:var(--a-empty-border);stroke-width:1px;}.group-hex-strokes.svelte-4wb87v .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-4wb87v .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filled-border);stroke-width:1.5px;}.group-hex-strokes.svelte-4wb87v .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-4wb87v .group-hex-strokes:where(.svelte-4wb87v) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-4wb87v .group-hex-strokes:where(.svelte-4wb87v) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-4wb87v .group-hexes:where(.svelte-4wb87v) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-4wb87v .group-hex-strokes:where(.svelte-4wb87v) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--has-focuses.svelte-4wb87v:not(.group--map-is-empty) .group-outline:where(.svelte-4wb87v) .hex-outline {stroke:#60646c;}.group--is-outline.svelte-4wb87v .hex {stroke:white !important;fill:#f1f1f1;stroke-width:1.5 !important;}.group--is-outline.svelte-4wb87v .hex-outline {stroke:#cdcbcb !important;}`
};
function ur(e, t) {
  ce(t, !0), Be(e, ws);
  let n = P(t, "name", 7, ""), o = P(t, "svgHexes", 7, ""), r = P(t, "hexes", 23, () => []), a = P(t, "svgOutline", 7, ""), s = P(t, "offset", 23, () => [1 / 0, 1 / 0]), i = P(t, "hasAllocations", 7), l = P(t, "hasAllAllocations", 7), c = P(t, "allocations", 7), u = P(t, "focuses", 7), f = P(t, "hasAnyFocuses", 7, !1), d = P(t, "isOutlineOnly", 7, !1), v = P(t, "labelsToShow", 23, () => ({})), h = P(t, "showElectorateLabels", 7), g = P(t, "showFocusedElectorateLabels", 7), y = P(t, "isStaticLayout", 7), w = Ee(`translate(${jt(s()).join(",")})`), S = Ee(!1), p = /* @__PURE__ */ V(() => s()[0] !== 1 / 0);
  Ge(() => {
    _(p) && (D(w, `translate(${jt(s()).join(",")})`), D(S, !0));
  });
  let x = /* @__PURE__ */ V(() => f() && g() ? u() : v());
  var m = ms();
  let N;
  var A = F(m), C = F(A);
  Pt(C, o), B(A);
  var M = J(A), Q = F(M);
  Pt(Q, a), B(M);
  var W = J(M);
  {
    var de = (L) => {
      cr(L, {
        get hexes() {
          return r();
        },
        get allocations() {
          return c();
        },
        get labelsToShow() {
          return _(x);
        },
        get showElectorateLabels() {
          return h();
        }
      });
    };
    Ue(W, (L) => {
      _(p) && L(de);
    });
  }
  var ne = J(W), He = F(ne);
  Pt(He, a), B(ne);
  var ke = J(ne), ze = F(ke);
  return Pt(ze, o), B(ke), B(m), $e(() => {
    N = en(m, 0, "group svelte-4wb87v", null, N, {
      "group--never-rendered": !_(S),
      "group--hidden": !_(p),
      "group--map-is-static": y(),
      "group--map-is-empty": !i(),
      "group--map-is-full": l(),
      "group--has-focuses": f(),
      "group--is-outline": d()
    }), ft(m, "data-name", n()), Ve(m, "transform", _(w)), Ve(ne, "opacity", f() && !i() ? 0 : 1);
  }), H(e, m), ue({
    get name() {
      return n();
    },
    set name(L = "") {
      n(L), E();
    },
    get svgHexes() {
      return o();
    },
    set svgHexes(L = "") {
      o(L), E();
    },
    get hexes() {
      return r();
    },
    set hexes(L = []) {
      r(L), E();
    },
    get svgOutline() {
      return a();
    },
    set svgOutline(L = "") {
      a(L), E();
    },
    get offset() {
      return s();
    },
    set offset(L = [1 / 0, 1 / 0]) {
      s(L), E();
    },
    get hasAllocations() {
      return i();
    },
    set hasAllocations(L) {
      i(L), E();
    },
    get hasAllAllocations() {
      return l();
    },
    set hasAllAllocations(L) {
      l(L), E();
    },
    get allocations() {
      return c();
    },
    set allocations(L) {
      c(L), E();
    },
    get focuses() {
      return u();
    },
    set focuses(L) {
      u(L), E();
    },
    get hasAnyFocuses() {
      return f();
    },
    set hasAnyFocuses(L = !1) {
      f(L), E();
    },
    get isOutlineOnly() {
      return d();
    },
    set isOutlineOnly(L = !1) {
      d(L), E();
    },
    get labelsToShow() {
      return v();
    },
    set labelsToShow(L = {}) {
      v(L), E();
    },
    get showElectorateLabels() {
      return h();
    },
    set showElectorateLabels(L) {
      h(L), E();
    },
    get showFocusedElectorateLabels() {
      return g();
    },
    set showFocusedElectorateLabels(L) {
      g(L), E();
    },
    get isStaticLayout() {
      return y();
    },
    set isStaticLayout(L) {
      y(L), E();
    }
  });
}
we(
  ur,
  {
    name: {},
    svgHexes: {},
    hexes: {},
    svgOutline: {},
    offset: {},
    hasAllocations: {},
    hasAllAllocations: {},
    allocations: {},
    focuses: {},
    hasAnyFocuses: {},
    isOutlineOnly: {},
    labelsToShow: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    isStaticLayout: {}
  },
  [],
  [],
  !0
);
const bs = (e) => e;
function _s(e, { delay: t = 0, duration: n = 400, easing: o = bs } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: o,
    css: (a) => `opacity: ${a * r}`
  };
}
var Ns = /* @__PURE__ */ Te('<div class="state-labels__label svelte-dbcm70"> </div>'), As = /* @__PURE__ */ Te('<div aria-hidden="true"></div>');
const Es = {
  hash: "svelte-dbcm70",
  code: `.state-labels.svelte-dbcm70 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-dbcm70 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-dbcm70 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-dbcm70 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-dbcm70 .state-labels__label:where(.svelte-dbcm70) {-webkit-text-stroke:2px #f1f1f1;paint-order:stroke fill;}`
};
function dr(e, t) {
  ce(t, !0), Be(e, Es);
  let n = P(t, "labels", 7), o = P(t, "overlayLabels", 7, !1);
  var r = As();
  let a;
  return st(r, 21, n, at, (s, i) => {
    var l = _t(), c = bt(l);
    Va(c, () => _(i).name, (u) => {
      var f = Ns(), d = F(f, !0);
      B(f), $e(
        (v) => {
          Ve(f, "left", _(i).left + "%"), Ve(f, "top", _(i).top + "%"), Ve(f, "width", _(i).width + "%"), Ve(f, "margin-left", v), Vt(d, _(i).name);
        },
        [
          () => Math.round(0 - _(i).width / 2) + "%"
        ]
      ), ts(3, f, () => _s, () => ({ duration: 1e3 })), H(u, f);
    }), H(s, l);
  }), B(r), $e(() => a = en(r, 1, "state-labels svelte-dbcm70", null, a, { "state-labels--overlaid": o() })), H(e, r), ue({
    get labels() {
      return n();
    },
    set labels(s) {
      n(s), E();
    },
    get overlayLabels() {
      return o();
    },
    set overlayLabels(s = !1) {
      o(s), E();
    }
  });
}
we(dr, { labels: {}, overlayLabels: {} }, [], [], !0);
var Ps = /* @__PURE__ */ Te('<span class="accessible-hide svelte-ivafae"><!></span>');
const Ss = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function fr(e, t) {
  ce(t, !0), Be(e, Ss);
  let n = P(t, "children", 7);
  var o = Ps(), r = F(o);
  return er(r, () => n() ?? z), B(o), H(e, o), ue({
    get children() {
      return n();
    },
    set children(a) {
      n(a), E();
    }
  });
}
we(fr, { children: {} }, [], [], !0);
function Cs(e, t) {
  D(t, re(e.target.dataset.id));
}
function Ls(e, t) {
  var o;
  const n = e.target.dataset.id;
  (o = t()) == null || o({ code: n, clientX: null, clientY: null });
}
function Os(e, t) {
  _(t) === e.target.dataset.id && D(t, null);
}
var Ts = /* @__PURE__ */ Te("<li><button> </button></li>"), ks = /* @__PURE__ */ Te("<li> <ul></ul></li>"), Rs = /* @__PURE__ */ Te('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>');
const Is = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function hr(e, t) {
  ce(t, !0), Be(e, Is);
  let n = P(t, "groups", 7), o = P(t, "layout", 7), r = P(t, "onChange", 7), a = P(t, "onClick", 7), s = Ee(null);
  Ge(() => {
    var l;
    (l = r()) == null || l(_(s));
  });
  let i = /* @__PURE__ */ V(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((l) => o().positions[l]).map((l) => n().find((c) => c.name === l)).map((l) => ({
    ...l,
    hexes: [...l.hexes].sort((c, u) => c.coord[0] + c.coord[1] * 1e3 - (u.coord[0] + u.coord[1] * 1e3))
  })));
  return fr(e, {
    children: (l, c) => {
      var u = Rs();
      u.__click = [Ls, a], u.__focusin = [Cs, s], u.__focusout = [Os, s], st(u, 21, () => _(i), at, (f, d) => {
        var v = ks(), h = F(v), g = J(h);
        st(g, 21, () => _(d).hexes, at, (y, w) => {
          var S = Ts(), p = F(S), x = F(p, !0);
          B(p), B(S), $e(() => {
            ft(p, "data-id", _(w).id), Vt(x, _(w).name);
          }), H(y, S);
        }), B(g), B(v), $e(() => Vt(h, `${_(d).name ?? ""} `)), H(f, v);
      }), B(u), H(l, u);
    },
    $$slots: { default: !0 }
  }), ue({
    get groups() {
      return n();
    },
    set groups(l) {
      n(l), E();
    },
    get layout() {
      return o();
    },
    set layout(l) {
      o(l), E();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), E();
    },
    get onClick() {
      return a();
    },
    set onClick(l) {
      a(l), E();
    }
  });
}
Qo(["click", "focusin", "focusout"]);
we(
  hr,
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
function vr(e, t) {
  ce(t, !0);
  let n = /* @__PURE__ */ ls(t, ["$$slots", "$$events", "$$legacy", "$$host"]), o = Ee(null);
  Dn(() => {
    import(
      /* webpackChunkName: "dynamic-hex-map-arrows" */
      "./HexMapArrows-Dizlxc5b.js"
    ).then((i) => {
      D(o, re(i.default));
    });
  });
  var r = _t(), a = bt(r);
  {
    var s = (i) => {
      var l = _t(), c = bt(l);
      Ka(c, () => _(o), (u, f) => {
        f(u, ir(() => n));
      }), H(i, l);
    };
    Ue(a, (i) => {
      _(o) && i(s);
    });
  }
  H(e, r), ue();
}
we(vr, {}, [], [], !0);
var Ms = /* @__PURE__ */ Et('<path style="color:#000000;fill:#000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:#ffffff;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), Ds = /* @__PURE__ */ Et('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:#000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const $s = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function Rt(e, t) {
  ce(t, !0), Be(e, $s);
  let n = P(t, "groups", 7), o = P(t, "id", 7), r = P(t, "layout", 7), a = P(t, "type", 7, "focus"), s = /* @__PURE__ */ V(() => n().flatMap((f) => f.hexes.map((d) => ({ ...d, group: f.name }))).sort((f, d) => f.index - d.index)), i = /* @__PURE__ */ V(() => {
    if (!o())
      return;
    const f = _(s).find((p) => p.id === o()), [d, v] = r().positions[f.group], [h, g] = f.coord, y = g % 2 ? 0.5 : 0, [w, S] = jt([d + h + y, v + g], "").map(Number);
    return [w - 3, S - 3];
  });
  var l = _t(), c = bt(l);
  {
    var u = (f) => {
      var d = Ds(), v = F(d);
      {
        var h = (g) => {
          var y = Ms();
          qn(), H(g, y);
        };
        Ue(v, (g) => {
          a() === "focus" && g(h);
        });
      }
      qn(), B(d), $e((g) => ft(d, "transform", g), [
        () => `translate(${_(i).join(" ")}) scale(0.95)`
      ]), H(f, d);
    };
    Ue(c, (f) => {
      _(i) && f(u);
    });
  }
  return H(e, l), ue({
    get groups() {
      return n();
    },
    set groups(f) {
      n(f), E();
    },
    get id() {
      return o();
    },
    set id(f) {
      o(f), E();
    },
    get layout() {
      return r();
    },
    set layout(f) {
      r(f), E();
    },
    get type() {
      return a();
    },
    set type(f = "focus") {
      a(f), E();
    }
  });
}
we(Rt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var Bs = typeof global == "object" && global && global.Object === Object && global, Hs = typeof self == "object" && self && self.Object === Object && self, pr = Bs || Hs || Function("return this")(), Gt = pr.Symbol, gr = Object.prototype, Fs = gr.hasOwnProperty, Ws = gr.toString, gt = Gt ? Gt.toStringTag : void 0;
function Vs(e) {
  var t = Fs.call(e, gt), n = e[gt];
  try {
    e[gt] = void 0;
    var o = !0;
  } catch {
  }
  var r = Ws.call(e);
  return o && (t ? e[gt] = n : delete e[gt]), r;
}
var js = Object.prototype, Gs = js.toString;
function Us(e) {
  return Gs.call(e);
}
var Ks = "[object Null]", Ys = "[object Undefined]", lo = Gt ? Gt.toStringTag : void 0;
function zs(e) {
  return e == null ? e === void 0 ? Ys : Ks : lo && lo in Object(e) ? Vs(e) : Us(e);
}
function qs(e) {
  return e != null && typeof e == "object";
}
var Qs = "[object Symbol]";
function Xs(e) {
  return typeof e == "symbol" || qs(e) && zs(e) == Qs;
}
var Zs = /\s/;
function Js(e) {
  for (var t = e.length; t-- && Zs.test(e.charAt(t)); )
    ;
  return t;
}
var ei = /^\s+/;
function ti(e) {
  return e && e.slice(0, Js(e) + 1).replace(ei, "");
}
function xn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var co = NaN, ni = /^[-+]0x[0-9a-f]+$/i, oi = /^0b[01]+$/i, ri = /^0o[0-7]+$/i, ai = parseInt;
function uo(e) {
  if (typeof e == "number")
    return e;
  if (Xs(e))
    return co;
  if (xn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ti(e);
  var n = oi.test(e);
  return n || ri.test(e) ? ai(e.slice(2), n ? 2 : 8) : ni.test(e) ? co : +e;
}
var tn = function() {
  return pr.Date.now();
}, si = "Expected a function", ii = Math.max, li = Math.min;
function ci(e, t, n) {
  var o, r, a, s, i, l, c = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(si);
  t = uo(t) || 0, xn(n) && (u = !!n.leading, f = "maxWait" in n, a = f ? ii(uo(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
  function v(N) {
    var A = o, C = r;
    return o = r = void 0, c = N, s = e.apply(C, A), s;
  }
  function h(N) {
    return c = N, i = setTimeout(w, t), u ? v(N) : s;
  }
  function g(N) {
    var A = N - l, C = N - c, M = t - A;
    return f ? li(M, a - C) : M;
  }
  function y(N) {
    var A = N - l, C = N - c;
    return l === void 0 || A >= t || A < 0 || f && C >= a;
  }
  function w() {
    var N = tn();
    if (y(N))
      return S(N);
    i = setTimeout(w, g(N));
  }
  function S(N) {
    return i = void 0, d && o ? v(N) : (o = r = void 0, s);
  }
  function p() {
    i !== void 0 && clearTimeout(i), c = 0, o = l = r = i = void 0;
  }
  function x() {
    return i === void 0 ? s : S(tn());
  }
  function m() {
    var N = tn(), A = y(N);
    if (o = arguments, r = this, l = N, A) {
      if (i === void 0)
        return h(l);
      if (f)
        return clearTimeout(i), i = setTimeout(w, t), v(l);
    }
    return i === void 0 && (i = setTimeout(w, t)), s;
  }
  return m.cancel = p, m.flush = x, m;
}
function ui({ isInteractive: e = !1, onClick: t, onHover: n }) {
  if (!e)
    return {};
  const o = ci(n, 10), r = ({ target: i, clientX: l, clientY: c }) => {
    var f;
    const u = (f = i == null ? void 0 : i.dataset) == null ? void 0 : f.id;
    !u || !t || t({ code: u, clientX: l, clientY: c });
  }, a = (i) => {
    const l = i.target, { clientX: c, clientY: u } = i, f = l.dataset.id;
    l.nodeName !== "polygon" || !f || o({ code: f, clientX: c, clientY: u });
  }, s = (i) => {
    o({ code: null });
  };
  return {
    onblur: s,
    onmouseout: s,
    onmouseover: a,
    onclick: r
  };
}
var di = /* @__PURE__ */ Te('<div class="hexmap__labels svelte-ko8kvy"><!></div>'), fi = /* @__PURE__ */ Te('<div class="hexmap svelte-ko8kvy"><div><svg class="svelte-ko8kvy"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const hi = {
  hash: "svelte-ko8kvy",
  code: ".hexmap.svelte-ko8kvy {position:relative;width:100%;height:100%;position:relative;}.hexmap__labels.svelte-ko8kvy {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-ko8kvy svg:where(.svelte-ko8kvy) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-ko8kvy {position:relative;margin:0 auto;max-height:100%;}"
};
function xr(e, t) {
  ce(t, !0), Be(e, hi);
  let n = P(t, "config", 23, () => ({})), o = P(t, "layout", 23, () => ({})), r = P(t, "allocations", 23, () => ({})), a = P(t, "focuses", 23, () => ({})), s = P(t, "certainties", 23, () => ({})), i = P(t, "labelsToShow", 23, () => ({})), l = P(t, "showStateLabels", 7, !1), c = P(t, "showElectorateLabels", 7, !1), u = P(t, "showFocusedElectorateLabels", 7, !1), f = P(t, "isStaticLayout", 7, !1), d = P(t, "onClick", 7, ({ code: b }) => {
  }), v = P(t, "onHover", 7, ({ code: b }) => {
  }), h = P(t, "customViewbox", 7, null), g = P(t, "onViewboxChange", 7, ({ newViewbox: b }) => {
  }), y = P(t, "isInteractive", 7, !1), w = P(t, "firstPreferenceArrows", 7, "None"), S = P(t, "selectedElectorate", 7, null), p = Ee(void 0), x = Ee(0), m = Ee(null), N = Ee(null), A = /* @__PURE__ */ V(() => Object.values(a()).some(Boolean)), C = /* @__PURE__ */ V(() => {
    const b = Object.values(r());
    return b.length !== 0 && b.some(Boolean);
  }), M = /* @__PURE__ */ V(() => {
    const b = Object.values(r());
    return b.length !== 0 && b.every(Boolean);
  });
  const Q = o().viewbox, W = { easing: vs, duration: 1100 };
  let de = new Je(Q[0], W), ne = new Je(Q[1], W), He = new Je(Q[2], W), ke = new Je(Q[3], W);
  Ge(() => {
    const [b, $, be, Re] = h() || o().viewbox;
    de.set(b), ne.set($), He.set(be), ke.set(Re);
  }), Ge(() => {
    g()(o().viewbox);
  });
  let ze = /* @__PURE__ */ V(() => {
    var b;
    return Array.from(((b = _(p)) == null ? void 0 : b.querySelectorAll("polygon.hex")) || []).filter(($) => $ instanceof SVGPolygonElement);
  });
  Ge(() => {
    const b = { ...r() }, $ = a(), be = s();
    _(ze).forEach((Re) => {
      const Fe = Re.dataset.id;
      if (!Fe)
        return;
      const Tr = b[Fe] || null;
      Re.dataset.allocation = Tr;
      const kr = _(A) ? $[Fe] || !1 : !0;
      Re.dataset.focused = kr;
      const Rr = be[Fe] || null;
      Re.dataset.certain = Rr;
    });
  }), Dn(() => {
    if (!_(p))
      return;
    const b = _(p).getBoundingClientRect();
    D(x, b.height / b.width);
  });
  let L = /* @__PURE__ */ V(() => ui({
    isInteractive: y(),
    onClick: d(),
    onHover: (b) => {
      D(N, re(b.code)), v()(b);
    }
  }));
  var qe = fi(), ht = F(qe);
  let Fn;
  var vt = F(ht), Wn = J(F(vt));
  st(Wn, 17, () => n().groups, at, (b, $) => {
    const be = /* @__PURE__ */ V(() => w() !== "None");
    ur(b, ir(() => _($), {
      get isStaticLayout() {
        return f();
      },
      get layout() {
        return o();
      },
      get offset() {
        return o().positions[_($).name];
      },
      get hasAllocations() {
        return _(C);
      },
      get hasAllAllocations() {
        return _(M);
      },
      get allocations() {
        return r();
      },
      get focuses() {
        return a();
      },
      get hasAnyFocuses() {
        return _(A);
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
        return _(be);
      }
    }));
  });
  var Vn = J(Wn);
  Rt(Vn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return _(m);
    },
    get layout() {
      return o();
    },
    type: "focus"
  });
  var jn = J(Vn);
  Rt(jn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return S();
    },
    get layout() {
      return o();
    },
    type: "focus"
  });
  var Gn = J(jn);
  Rt(Gn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return _(N);
    },
    get layout() {
      return o();
    },
    type: "hover"
  });
  var Er = J(Gn);
  {
    var Pr = (b) => {
      var $ = _t(), be = bt($);
      st(be, 17, () => n().groups, at, (Re, Fe) => {
        vr(Re, {
          get hexes() {
            return _(Fe).hexes;
          },
          get offset() {
            return o().positions[_(Fe).name];
          },
          get firstPreferenceArrows() {
            return w();
          }
        });
      }), H(b, $);
    };
    Ue(Er, (b) => {
      w() !== "None" && b(Pr);
    });
  }
  B(vt), Mn(vt, (b) => D(p, b), () => _(p));
  var Sr = J(vt, 2);
  {
    var Cr = (b) => {
      var $ = di(), be = F($);
      dr(be, {
        get labels() {
          return o().labels;
        },
        get overlayLabels() {
          return o().overlayLabels;
        }
      }), B($), H(b, $);
    };
    Ue(Sr, (b) => {
      l() && b(Cr);
    });
  }
  B(ht);
  var Lr = J(ht, 2);
  {
    var Or = (b) => {
      hr(b, {
        get groups() {
          return n().groups;
        },
        get layout() {
          return o();
        },
        onChange: ($) => {
          D(m, re($));
        },
        get onClick() {
          return d();
        }
      });
    };
    Ue(Lr, (b) => {
      y() && b(Or);
    });
  }
  return B(qe), $e(
    (b, $) => {
      Fn = Xa(
        ht,
        Fn,
        {
          class: "hexmap__viz",
          ..._(L),
          [hn]: {
            "hexmap__viz--vertical": _(x) <= 1
          }
        },
        "svelte-ko8kvy"
      ), Ve(ht, "aspect-ratio", b), ft(vt, "viewBox", $);
    },
    [
      () => _(x) ? _(x).toFixed(3) : null,
      () => [
        de.current,
        ne.current,
        He.current,
        ke.current
      ].join(" ")
    ]
  ), H(e, qe), ue({
    get config() {
      return n();
    },
    set config(b = {}) {
      n(b), E();
    },
    get layout() {
      return o();
    },
    set layout(b = {}) {
      o(b), E();
    },
    get allocations() {
      return r();
    },
    set allocations(b = {}) {
      r(b), E();
    },
    get focuses() {
      return a();
    },
    set focuses(b = {}) {
      a(b), E();
    },
    get certainties() {
      return s();
    },
    set certainties(b = {}) {
      s(b), E();
    },
    get labelsToShow() {
      return i();
    },
    set labelsToShow(b = {}) {
      i(b), E();
    },
    get showStateLabels() {
      return l();
    },
    set showStateLabels(b = !1) {
      l(b), E();
    },
    get showElectorateLabels() {
      return c();
    },
    set showElectorateLabels(b = !1) {
      c(b), E();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(b = !1) {
      u(b), E();
    },
    get isStaticLayout() {
      return f();
    },
    set isStaticLayout(b = !1) {
      f(b), E();
    },
    get onClick() {
      return d();
    },
    set onClick(b = ({ code: $ }) => {
    }) {
      d(b), E();
    },
    get onHover() {
      return v();
    },
    set onHover(b = ({ code: $ }) => {
    }) {
      v(b), E();
    },
    get customViewbox() {
      return h();
    },
    set customViewbox(b = null) {
      h(b), E();
    },
    get onViewboxChange() {
      return g();
    },
    set onViewboxChange(b = ({ newViewbox: $ }) => {
    }) {
      g(b), E();
    },
    get isInteractive() {
      return y();
    },
    set isInteractive(b = !1) {
      y(b), E();
    },
    get firstPreferenceArrows() {
      return w();
    },
    set firstPreferenceArrows(b = "None") {
      w(b), E();
    },
    get selectedElectorate() {
      return S();
    },
    set selectedElectorate(b = null) {
      S(b), E();
    }
  });
}
we(
  xr,
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
const vi = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, $n = {
  hashCodes: vi
};
let Lt = sr({
  allocated: {},
  uncertain: {}
});
var pi = /* @__PURE__ */ Te('<div class="style-root svelte-wcr7hy"><!></div>');
const gi = {
  hash: "svelte-wcr7hy",
  code: ".style-root.svelte-wcr7hy * {box-sizing:border-box;}.style-root.svelte-wcr7hy {height:100%;font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-alt-ptyblue: #cedcf2;--c-alt-ptyred: #f9d2d6;--c-alt-ptylightgreen: #dceecc;--c-alt-ptyblack: #e3e3e3;--c-alt-ptygreen: #cce2dd;--c-alt-ptygold: #f5e7cc;--c-alt-ptybrown: #e6dbd9;--c-alt-ptylightblue: #cfe6ec;--c-alt-ptyorange: #f4dccc;--c-alt-ptypurple: #e9def0;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-empty: #f1f1f1;--a-empty-border: black;--c-empty-state-outline: black;--c-state-outline: #949494;--a-null: #f1f1f1;--a-null-border: #fff;--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-CA: var(--c-ptyblack);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--u-ALP: var(--c-alt-ptyred);--u-CA: var(--c-alt-ptyblack);--u-CLP: var(--c-alt-ptygold);--u-GRN: var(--c-alt-ptylightgreen);--u-IND: var(--c-alt-ptyblack);--u-KAP: var(--c-alt-ptybrown);--u-LIB: var(--c-alt-ptyblue);--u-LNP: var(--c-alt-ptyblue);--u-NAT: var(--c-alt-ptygreen);--u-ONP: var(--c-alt-ptyorange);--u-OTH: var(--c-alt-ptyblack);--u-PUP: var(--c-alt-ptygold);--c-filled-border: #fff;}"
};
function yr(e, t) {
  ce(t, !0), Be(e, gi);
  const [n, o] = as(), r = () => os(Lt, "$partyColours", n);
  let a = P(t, "children", 7), s = P(t, "rootEl", 15);
  Dn(() => {
    if (!s())
      return;
    const u = window.getComputedStyle(s());
    rs(Lt, { allocated: {}, uncertain: {} }), Object.keys($n.hashCodes).forEach((d) => {
      ao(Lt, he(r).allocated[d] = u.getPropertyValue(`--a-${d}`), he(r)), ao(Lt, he(r).uncertain[d] = u.getPropertyValue(`--u-${d}`), he(r));
    });
  });
  var i = pi(), l = F(i);
  er(l, () => a() ?? z), B(i), Mn(i, (u) => s(u), () => s()), H(e, i);
  var c = ue({
    get children() {
      return a();
    },
    set children(u) {
      a(u), E();
    },
    get rootEl() {
      return s();
    },
    set rootEl(u) {
      s(u), E();
    }
  });
  return o(), c;
}
we(yr, { children: {}, rootEl: {} }, [], [], !0);
const xi = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.0035, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 33.75, top: 30.75, width: 8, name: "NT" }, { left: 65.25, top: 21.5, width: 8, name: "QLD" }, { left: 57.75, top: 44.25, width: 8, name: "NSW" }, { left: 67.5, top: 57.75, width: 8, name: "ACT" }, { left: 58, top: 67.25, width: 8, name: "VIC" }, { left: 57.75, top: 86.25, width: 8, name: "TAS" }, { left: 34, top: 48.75, width: 8, name: "SA" }, { left: 24.5, top: 53.25, width: 8, name: "WA" }], overlayLabels: !0 }, yi = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.5, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 71, top: 63.5, width: 8, name: "ACT" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, mi = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, wi = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, bi = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, _i = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Ni = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, Ai = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, Ei = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, Pi = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Si = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Ci = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Li = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Oi = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, Ti = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, ki = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, Ri = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, Ii = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, Mi = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, mr = {
  COUNTRY: xi,
  EXPLODED: yi,
  EXPLODED_STATES_ONLY: mi,
  GRID: wi,
  ACT: bi,
  NSW: _i,
  NT: Ni,
  QLD: Ai,
  SA: Ei,
  TAS: Pi,
  VIC: Si,
  WA: Ci,
  ACT_NT: Li,
  NSW_QLD: Oi,
  NSW_VIC: Ti,
  QLD_VIC: ki,
  QLD_WA: Ri,
  QLD_NSW_VIC: Ii,
  SA_TAS_WA: Mi
}, Di = 291, $i = 200, Bi = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park.","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart.","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"River.","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New.","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Banks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lille","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long.","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More.","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Forde","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Corio","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wills","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), Bn = {
  svgWidth: Di,
  svgHeight: $i,
  groups: Bi
};
function wr(e) {
  const t = {};
  return Object.entries(e).forEach(([n, o]) => {
    let r = o.defaultValue;
    const a = o.type;
    a === "number" && (r = r ?? 0), a === "boolean" && (r = r ?? !1), t[n] = {
      ...o,
      defaultValue: r
    };
  }), t;
}
const fo = ["number", "boolean", "enum", "string", "custom"];
async function Hi({ schema: e, data: t }) {
  const n = wr(e), o = {}, r = Object.entries(n).map(
    async ([a, s]) => {
      const { type: i, key: l, values: c, defaultValue: u, codec: f } = s;
      if (!fo.includes(i))
        throw new Error(
          `Unknown type "${i}", must be one of ${fo}`
        );
      let d = t[l || a];
      if (typeof d > "u") {
        typeof u < "u" && (o[a] = u);
        return;
      }
      if (f && (d = await f.decode(d)), i === "number" && (d = Number(d)), i === "boolean" && (d = Number(d) === 1), i === "enum") {
        const v = c[d];
        typeof v > "u" ? d = u : d = v;
      }
      o[a] = d;
    }
  );
  return await Promise.all(r), o;
}
async function Fi({ schema: e, data: t }) {
  const n = wr(e), o = {}, r = Object.keys(t).filter((s) => !e[s]);
  if (r.length)
    throw console.error(`Unknown keys found in data: ${r.join()}`), new Error("Unknown keys found in data");
  const a = Object.entries(n).map(
    async ([s, i]) => {
      const { type: l, key: c, values: u, defaultValue: f, codec: d } = i, v = c || s, h = t[s];
      if (typeof h > "u" || h === f) return;
      let g = h;
      if (l === "enum") {
        const y = u.indexOf(h);
        if (y === -1)
          throw console.error(`Enum value "${h}" not found in ${u}`), new Error("Invalid enum value");
        g = y;
      }
      d && (g = await d.encode(g)), l === "boolean" && (g = g ? 1 : 0), o[v] = g;
    }
  );
  return await Promise.all(a), o;
}
function Wi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nn, ho;
function Vi() {
  if (ho) return nn;
  ho = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var n = new Uint8Array(256), o = 0; o < n.length; o++)
      n[o] = 255;
    for (var r = 0; r < t.length; r++) {
      var a = t.charAt(r), s = a.charCodeAt(0);
      if (n[s] !== 255)
        throw new TypeError(a + " is ambiguous");
      n[s] = r;
    }
    var i = t.length, l = t.charAt(0), c = Math.log(i) / Math.log(256), u = Math.log(256) / Math.log(i);
    function f(h) {
      if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (h.length === 0)
        return "";
      for (var g = 0, y = 0, w = 0, S = h.length; w !== S && h[w] === 0; )
        w++, g++;
      for (var p = (S - w) * u + 1 >>> 0, x = new Uint8Array(p); w !== S; ) {
        for (var m = h[w], N = 0, A = p - 1; (m !== 0 || N < y) && A !== -1; A--, N++)
          m += 256 * x[A] >>> 0, x[A] = m % i >>> 0, m = m / i >>> 0;
        if (m !== 0)
          throw new Error("Non-zero carry");
        y = N, w++;
      }
      for (var C = p - y; C !== p && x[C] === 0; )
        C++;
      for (var M = l.repeat(g); C < p; ++C)
        M += t.charAt(x[C]);
      return M;
    }
    function d(h) {
      if (typeof h != "string")
        throw new TypeError("Expected String");
      if (h.length === 0)
        return new Uint8Array();
      for (var g = 0, y = 0, w = 0; h[g] === l; )
        y++, g++;
      for (var S = (h.length - g) * c + 1 >>> 0, p = new Uint8Array(S); h[g]; ) {
        var x = n[h.charCodeAt(g)];
        if (x === 255)
          return;
        for (var m = 0, N = S - 1; (x !== 0 || m < w) && N !== -1; N--, m++)
          x += i * p[N] >>> 0, p[N] = x % 256 >>> 0, x = x / 256 >>> 0;
        if (x !== 0)
          throw new Error("Non-zero carry");
        w = m, g++;
      }
      for (var A = S - w; A !== S && p[A] === 0; )
        A++;
      for (var C = new Uint8Array(y + (S - A)), M = y; A !== S; )
        C[M++] = p[A++];
      return C;
    }
    function v(h) {
      var g = d(h);
      if (g)
        return g;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: f,
      decodeUnsafe: d,
      decode: v
    };
  }
  return nn = e, nn;
}
var ji = Vi();
const Gi = /* @__PURE__ */ Wi(ji);
var Ui = "0123456789abcdefghijklmnopqrstuvwxyz";
Gi(Ui);
new TextEncoder();
new TextDecoder();
const Ki = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, Yi = function(e, { delineator: t }) {
  e += t;
  const n = [];
  let o = e;
  for (let a = 0; a < e.length; a++)
    o = Ki(o), n.push(o);
  n.sort();
  let r = "";
  for (let a = 0; a < n.length; a++)
    r += n[a].charAt(n[a].length - 1);
  return r;
}, zi = function(e, { delineator: t }) {
  const o = e.split("").slice(0);
  for (let a = 0; a < e.length - 1; a++) {
    o.sort();
    for (let s = 0; s < e.length; s++)
      o[s] = e[s] + o[s];
  }
  return o.filter(function(a) {
    return a.charAt(a.length - 1) === t;
  })[0].substring(0, e.length - 1);
};
function br(e) {
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
    (t, n, o) => (o === 0 || n !== t[t.length - 1].char ? t.push({ char: n, repeated: 1 }) : t[t.length - 1].repeated++, t),
    []
  ).reduce((t, { char: n, repeated: o }) => t += o === 1 ? n : n + String(o), "");
}
function _r(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, n, o) => n.repeat(+o)
  );
}
async function qi(e, { delineator: t }) {
  const n = Yi(e, { delineator: t });
  return br(n);
}
async function Qi(e, { delineator: t }) {
  const n = _r(e);
  return zi(n, { delineator: t });
}
function Xi({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => qi(t, { delineator: e }),
    decode: (t) => Qi(t, { delineator: e })
  };
}
const yn = 26, mn = 97, Zi = 48, vo = async (e, { maxBits: t }) => {
  const n = [1, ...e].map((i) => i ? 1 : 0).join(""), o = [];
  for (let i = n.length; i > 0; i -= t)
    o.push(n.slice(Math.max(0, i - t), i));
  return o.reverse(), o.map((i) => parseInt(i, 2)).map((i) => i > yn ? i % yn : String.fromCharCode(i + mn)).join("");
};
async function po(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= mn ? i - mn : i - Zi + yn
  ).map(
    (i, l) => Number(i).toString(2).padStart(l > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((l) => l === "1")
  ).slice(1);
}
function Ji({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => br(await vo(t, { maxBits: e })),
    decode: async (t) => po(_r(t), { maxBits: e })
  } : {
    encode: (t) => vo(t, { maxBits: e }),
    decode: (t) => po(t, { maxBits: e })
  };
}
var wn = function(e) {
  return Array.isArray(e) ? e.map(String) : [String(e)];
};
function el(e, t) {
  t === void 0 && (t = {});
  var n = t.propMap, o = n === void 0 ? {} : n, r = t.arrayProps, a = r === void 0 ? [] : r, s = t.noTypeGuessing, i = s === void 0 ? [] : s, l = e.match(/[A-Z]+([0-9a-z]|$)+/g) || [];
  a = wn(a), i = wn(i);
  var c = l.map(function(u) {
    var f = u.match(/^([A-Z]+)([0-9a-z]*$)/) || [], d = f[1], v = f[2];
    if (typeof d != "string" || typeof v != "string")
      throw new Error("Error reading key/value pair");
    var h = o[d.toLowerCase()] || d.toLowerCase(), g = i.includes(h) ? v : parseFloat(v).toString() === v ? parseFloat(v) : v === "true" || v === "yes" ? !0 : v === "false" || v === "no" ? !1 : v === "" ? null : v;
    return { key: h, value: g };
  }).reduce(
    /** @param {Object<string,any>} obj */
    function(u, f, d, v) {
      var h = f.key, g = f.value;
      if (typeof u[h] < "u")
        return u;
      var y = v.filter(function(p) {
        var x = p.key;
        return x === h;
      }).map(function(p) {
        return p.value;
      }), w = a.includes(h) || y.length > 1;
      if (w) {
        var S = new Set(y.map(function(p) {
          return typeof p;
        }));
        if (S.size > 1)
          throw new Error("Inconsistent types in array property '".concat(h, "'"));
        u[h] = y;
      } else
        u[h] = g;
      return u;
    },
    {}
  );
  return a.forEach(function(u) {
    typeof c[u] > "u" && (c[u] = []);
  }), c;
}
var Ut = function() {
  return Ut = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ut.apply(this, arguments);
};
var go = function(e) {
  var t = e.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (t !== e)
    throw new Error('Illegal characters found: "'.concat(e, '"'));
  return e;
};
function tl(e, t) {
  t === void 0 && (t = {});
  var n = Object.entries(t.propMap || {}).reduce(function(o, r) {
    var a, s = r[0], i = r[1];
    return Ut(Ut({}, o), (a = {}, a[i] = String(s), a));
  }, {});
  return Object.entries(e).flatMap(function(o) {
    var r = o[0], a = o[1];
    if (typeof a > "u" || a === null)
      return [];
    var s = n[r] || r, i = wn(a);
    return i.map(function(l) {
      return [go(s).toUpperCase(), go(l)].join("");
    });
  }).join("");
}
async function nl(e, t) {
  const n = el(t);
  return await Hi({ schema: e, data: n });
}
async function ol(e, t) {
  const n = await Fi({ schema: e, data: t });
  return tl(n);
}
function rl(e) {
  const t = sr(
    /** @type {T} */
    null
  );
  async function n() {
    const r = window.location.hash.slice(1);
    return await nl(e, r);
  }
  let o;
  return n().then((r) => {
    t.set(r), t.subscribe(async (a) => {
      if (!a)
        return;
      const s = "#" + await ol(e, a);
      window.location.hash !== s && (window.location.hash = s), o = s;
    }), window.addEventListener("hashchange", () => {
      window.location.hash !== o && n().then((s) => {
        t.set(s);
      });
    });
  }), t;
}
const al = { Australia: [[112, -44], [156, -10]], "Brisbane & surrounds": [[152.67620200034025, -27.85975844732532], [153.50771856749492, -27.122141459597835]], "Sydney & surrounds": [[150.53643051298894, -34.250330919454555], [151.6159583706169, -33.35329642067877]], "Melbourne & surrounds": [[143.7112326761349, -38.73737902155104], [146.2181523182391, -36.755303142447325]], "Inner-city Sydney": [[150.97804393208258, -33.9820617904466], [151.29883502771884, -33.71564208020996]], "Inner-city Melbourne": [[144.77343032299214, -38.00505753293409], [145.25008324655565, -37.62851493730817]], Perth: [[115.29761105882773, -32.58735478749758], [116.46158922227181, -31.601283791419284]], Adelaide: [[138.1361307284978, -35.308045628940405], [139.08340859017528, -34.53133194772551]], Tasmania: [[143.15169589003773, -43.824678713957354], [149.19913869957333, -39.30289848300832]], "Focus Driven": [[112, -44], [156, -10]] }, sl = {
  areas: al
}, it = Bn.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), il = Object.values(it).reduce((e, t) => (e[t.id] = t, e), {});
Bn.groups;
const bn = "q", ll = "x", xo = Xi({ delineator: bn }), Nr = ps($n.hashCodes);
if (Nr[bn] || ll === bn)
  throw new Error("Can not use delineator in allocation map");
function Ar(e) {
  return it.map(({ id: t }) => e[t]);
}
function cl(e) {
  return it.reduce((t, { id: n }, o) => (t[n] = e[o] ?? null, t), {});
}
const yo = Ji({ maxBits: 4 }), on = {
  encode: async function(e) {
    const t = Ar(e);
    return yo.encode(t);
  },
  decode: async function(e) {
    const t = await yo.decode(e);
    return cl(t);
  }
}, rn = Object.freeze(
  it.reduce((e, t) => (e[t.id] = null, e), {})
), ul = {
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
    values: Object.keys(mr)
  },
  geoArea: {
    type: "enum",
    key: "g",
    defaultValue: "Australia",
    values: Object.keys(sl.areas)
  },
  allocations: {
    type: "custom",
    codec: {
      encode: async (e) => {
        const t = Object.entries(e).reduce((r, [a, s]) => (r[a] = $n.hashCodes[s] || "x", r), {}), n = Ar(t).map((r) => r ?? "x").join("");
        return await xo.encode(n);
      },
      decode: async (e) => (await xo.decode(e).catch((o) => (console.error("decoding string failed", e, o), ""))).split("").reduce((o, r, a) => {
        var i;
        const s = (i = it[a]) == null ? void 0 : i.id;
        if (s)
          return o[s] = Nr[String(r)] || null, o;
      }, {})
    },
    key: "a",
    defaultValue: rn
  },
  focuses: {
    type: "custom",
    codec: on,
    key: "f",
    defaultValue: rn
  },
  certainties: {
    type: "custom",
    codec: on,
    key: "c",
    defaultValue: Object.freeze(
      it.reduce((e, t) => (e[t.id] = !0, e), {})
    )
  },
  labelsToShow: {
    type: "custom",
    codec: on,
    key: "li",
    defaultValue: rn
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
}, mo = rl(ul);
mo.subscribe((e) => {
  e && e.version !== 1 && mo.set({ ...e, version: 1 });
});
function dl(e, t) {
  ce(t, !0);
  let n = P(t, "allocations", 23, () => ({})), o = P(t, "certainties", 23, () => ({})), r = P(t, "focuses", 23, () => ({})), a = P(t, "showStateLabels", 7, !1), s = P(t, "showElectorateLabels", 7, !1), i = P(t, "layout", 7, "COUNTRY"), l = P(t, "selectedElectorate", 7, null), c = P(t, "customViewbox", 7, null), u = P(t, "onClick", 7, () => {
  }), f = P(t, "onHover", 7, () => {
  }), d = P(t, "onApi", 7, () => {
  }), v = P(t, "isStaticLayout", 7, !0), h = P(t, "isInteractive", 7, !0), g = Ee(void 0), y = /* @__PURE__ */ V(() => mr[i()]);
  function w(p, x, m) {
    const N = m.getScreenCTM(), A = m.createSVGPoint();
    A.x = p, A.y = x;
    const C = A.matrixTransform(N);
    return [C.x, C.y].map(Number);
  }
  function S(p) {
    const x = il[p], m = _(y).positions[x == null ? void 0 : x.group];
    if (!(_(g) instanceof HTMLDivElement))
      return;
    const N = _(g).querySelector("svg");
    if (!x || !m || !N)
      throw new Error(`Could not find hexagon with id ${p}`);
    const A = [-0.5, -1], [C, M] = jt(
      [
        m[0] + A[0],
        m[1] + A[1]
      ],
      ""
    ).map(Number), Q = Number(x.coordPx[0] + C), W = Number(x.coordPx[1] + M), [de, ne] = w(Q, W, N);
    return {
      code: p,
      screenCoord: [de, ne],
      svgCoord: [Q, W]
    };
  }
  return Ge(() => {
    d() && d()({ getHex: S });
  }), Mn(
    yr(e, {
      children: (p, x) => {
        xr(p, {
          config: Bn,
          get layout() {
            return _(y);
          },
          get allocations() {
            return n();
          },
          get certainties() {
            return o();
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
            return u();
          },
          get onHover() {
            return f();
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
        });
      },
      $$slots: { default: !0 }
    }),
    (p) => D(g, re(p)),
    () => _(g)
  ), ue({
    get allocations() {
      return n();
    },
    set allocations(p = {}) {
      n(p), E();
    },
    get certainties() {
      return o();
    },
    set certainties(p = {}) {
      o(p), E();
    },
    get focuses() {
      return r();
    },
    set focuses(p = {}) {
      r(p), E();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(p = !1) {
      a(p), E();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(p = !1) {
      s(p), E();
    },
    get layout() {
      return i();
    },
    set layout(p = "COUNTRY") {
      i(p), E();
    },
    get selectedElectorate() {
      return l();
    },
    set selectedElectorate(p = null) {
      l(p), E();
    },
    get customViewbox() {
      return c();
    },
    set customViewbox(p = null) {
      c(p), E();
    },
    get onClick() {
      return u();
    },
    set onClick(p = () => {
    }) {
      u(p), E();
    },
    get onHover() {
      return f();
    },
    set onHover(p = () => {
    }) {
      f(p), E();
    },
    get onApi() {
      return d();
    },
    set onApi(p = () => {
    }) {
      d(p), E();
    },
    get isStaticLayout() {
      return v();
    },
    set isStaticLayout(p = !0) {
      v(p), E();
    },
    get isInteractive() {
      return h();
    },
    set isInteractive(p = !0) {
      h(p), E();
    }
  });
}
customElements.define("abcnews-hexmap", we(
  dl,
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
    isInteractive: {}
  },
  [],
  [],
  !0
));
export {
  at as A,
  dl as H,
  P as a,
  st as b,
  ft as c,
  H as d,
  it as e,
  ue as f,
  E as g,
  jt as h,
  as as i,
  we as j,
  _t as k,
  bt as l,
  Ue as m,
  Et as n,
  Dn as o,
  ce as p,
  os as q,
  B as r,
  rs as s,
  $e as t,
  Ge as u,
  _ as v,
  sr as w,
  F as x,
  J as y,
  Ve as z
};
