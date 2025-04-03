var Ir = Object.defineProperty;
var Kn = (e) => {
  throw TypeError(e);
};
var Mr = (e, t, n) => t in e ? Ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var oe = (e, t, n) => Mr(e, typeof t != "symbol" ? t + "" : t, n), Yn = (e, t, n) => t.has(e) || Kn("Cannot " + n);
var I = (e, t, n) => (Yn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), We = (e, t, n) => t.has(e) ? Kn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ht = (e, t, n, o) => (Yn(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
const Dr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Dr);
const bn = 1, Nn = 2, _o = 4, $r = 8, Br = 16, Hr = 1, Fr = 4, Wr = 8, Vr = 16, jr = 4, Gr = 1, Ur = 2, bo = "[", An = "[!", En = "]", Je = {}, j = Symbol(), zn = !1, ie = 2, No = 4, Kt = 8, Yt = 16, Ce = 32, it = 64, It = 128, ee = 256, Mt = 512, Y = 1024, Le = 2048, lt = 4096, Ee = 8192, zt = 16384, Ao = 32768, ct = 65536, Kr = 1 << 19, Eo = 1 << 20, et = Symbol("$state"), Pn = Symbol("legacy props"), Yr = Symbol("");
var Sn = Array.isArray, zr = Array.prototype.indexOf, Cn = Array.from, Dt = Object.keys, xt = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, qr = Object.getOwnPropertyDescriptors, Qr = Object.prototype, Xr = Array.prototype, Po = Object.getPrototypeOf;
function Xe(e) {
  return typeof e == "function";
}
const q = () => {
};
function So(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let yt = [], an = [];
function Co() {
  var e = yt;
  yt = [], So(e);
}
function Zr() {
  var e = an;
  an = [], So(e);
}
function ut(e) {
  yt.length === 0 && queueMicrotask(Co), yt.push(e);
}
function qn() {
  yt.length > 0 && Co(), an.length > 0 && Zr();
}
function Lo(e) {
  return e === this.v;
}
function To(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Jr(e, t) {
  return e !== t;
}
function Ln(e) {
  return !To(e, this.v);
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
function z(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Lo,
    rv: 0,
    wv: 0
  };
  return n;
}
function Ae(e) {
  return /* @__PURE__ */ da(z(e));
}
// @__NO_SIDE_EFFECTS__
function qt(e, t = !1) {
  const n = z(e);
  return t || (n.equals = Ln), n;
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return R !== null && !ae && R.f & ie && (he === null ? va([e]) : he.push(e)), e;
}
function M(e, t) {
  return R !== null && !ae && zo() && R.f & (ie | Yt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (he === null || !he.includes(e)) && ca(), sn(e, t);
}
function sn(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ho(), ko(e, Le), O !== null && O.f & Y && !(O.f & (Ce | it)) && (_e === null ? ga([e]) : _e.push(e))), t;
}
function ko(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var o = n.length, r = 0; r < o; r++) {
      var a = n[r], s = a.f;
      s & Le || (xe(a, t), s & (Y | ee) && (s & ie ? ko(
        /** @type {Derived} */
        a,
        lt
      ) : Zt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  var t = ie | Le, n = R !== null && R.f & ie ? (
    /** @type {Derived} */
    R
  ) : null;
  return O === null || n !== null && n.f & ee ? t |= ee : O.f |= Eo, {
    ctx: Q,
    deps: null,
    effects: null,
    equals: Lo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? O
  };
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  const t = /* @__PURE__ */ U(e);
  return t.equals = Ln, t;
}
function Oo(e) {
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
function pa(e) {
  var t, n = O;
  ge(ha(e));
  try {
    Oo(e), t = Wo(e);
  } finally {
    ge(n);
  }
  return t;
}
function Ro(e) {
  var t = pa(e), n = (Ie || e.f & ee) && e.deps !== null ? lt : Y;
  xe(e, n), e.equals(t) || (e.v = t, e.wv = Ho());
}
function Qt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function se(e) {
  T = e;
}
let k;
function te(e) {
  if (e === null)
    throw Qt(), Je;
  return k = e;
}
function Me() {
  return te(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ye(k)
  );
}
function B(e) {
  if (T) {
    if (/* @__PURE__ */ ye(k) !== null)
      throw Qt(), Je;
    k = e;
  }
}
function Qn(e = 1) {
  if (T) {
    for (var t = e, n = k; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(n);
    k = n;
  }
}
function ln() {
  for (var e = 0, t = k; ; ) {
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
      /* @__PURE__ */ ye(t)
    );
    t.remove(), t = o;
  }
}
function re(e, t = null, n) {
  if (typeof e != "object" || e === null || et in e)
    return e;
  const o = Po(e);
  if (o !== Qr && o !== Xr)
    return e;
  var r = /* @__PURE__ */ new Map(), a = Sn(e), s = z(0);
  a && r.set("length", z(
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
        return f === void 0 ? (f = z(u.value), r.set(c, f)) : M(f, re(u.value, i)), !0;
      },
      deleteProperty(l, c) {
        var u = r.get(c);
        if (u === void 0)
          c in l && r.set(c, z(j));
        else {
          if (a && typeof c == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), d = Number(c);
            Number.isInteger(d) && d < f.v && M(f, d);
          }
          M(u, j), Xn(s);
        }
        return !0;
      },
      get(l, c, u) {
        var h;
        if (c === et)
          return e;
        var f = r.get(c), d = c in l;
        if (f === void 0 && (!d || (h = Pe(l, c)) != null && h.writable) && (f = z(re(d ? l[c] : j, i)), r.set(c, f)), f !== void 0) {
          var p = b(f);
          return p === j ? void 0 : p;
        }
        return Reflect.get(l, c, u);
      },
      getOwnPropertyDescriptor(l, c) {
        var u = Reflect.getOwnPropertyDescriptor(l, c);
        if (u && "value" in u) {
          var f = r.get(c);
          f && (u.value = b(f));
        } else if (u === void 0) {
          var d = r.get(c), p = d == null ? void 0 : d.v;
          if (d !== void 0 && p !== j)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(l, c) {
        var p;
        if (c === et)
          return !0;
        var u = r.get(c), f = u !== void 0 && u.v !== j || Reflect.has(l, c);
        if (u !== void 0 || O !== null && (!f || (p = Pe(l, c)) != null && p.writable)) {
          u === void 0 && (u = z(f ? re(l[c], i) : j), r.set(c, u));
          var d = b(u);
          if (d === j)
            return !1;
        }
        return f;
      },
      set(l, c, u, f) {
        var v;
        var d = r.get(c), p = c in l;
        if (a && c === "length")
          for (var h = u; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var g = r.get(h + "");
            g !== void 0 ? M(g, j) : h in l && (g = z(j), r.set(h + "", g));
          }
        d === void 0 ? (!p || (v = Pe(l, c)) != null && v.writable) && (d = z(void 0), M(d, re(u, i)), r.set(c, d)) : (p = d.v !== j, M(d, re(u, i)));
        var y = Reflect.getOwnPropertyDescriptor(l, c);
        if (y != null && y.set && y.set.call(f, u), !p) {
          if (a && typeof c == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), P = Number(c);
            Number.isInteger(P) && P >= m.v && M(m, P + 1);
          }
          Xn(s);
        }
        return !0;
      },
      ownKeys(l) {
        b(s);
        var c = Reflect.ownKeys(l).filter((d) => {
          var p = r.get(d);
          return p === void 0 || p.v !== j;
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
function Xn(e, t = 1) {
  M(e, e.v + t);
}
var Zn, Io, Mo, Do;
function cn() {
  if (Zn === void 0) {
    Zn = window, Io = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Mo = Pe(t, "firstChild").get, Do = Pe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function K(e) {
  return Mo.call(e);
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return Do.call(e);
}
function F(e, t) {
  if (!T)
    return /* @__PURE__ */ K(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ K(k)
  );
  if (n === null)
    n = k.appendChild(nt());
  else if (t && n.nodeType !== 3) {
    var o = nt();
    return n == null || n.before(o), te(o), o;
  }
  return te(n), n;
}
function mt(e, t) {
  if (!T) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ K(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ye(n) : n;
  }
  return k;
}
function J(e, t = 1, n = !1) {
  let o = T ? k : e;
  for (var r; t--; )
    r = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ ye(o);
  if (!T)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (n && a !== 3) {
    var s = nt();
    return o === null ? r == null || r.after(s) : o.before(s), te(s), s;
  }
  return te(o), /** @type {TemplateNode} */
  o;
}
function $o(e) {
  e.textContent = "";
}
let Tt = !1, $t = !1, Bt = null, kt = !1, Tn = !1;
function Jn(e) {
  Tn = e;
}
let gt = [];
let R = null, ae = !1;
function ve(e) {
  R = e;
}
let O = null;
function ge(e) {
  O = e;
}
let he = null;
function va(e) {
  he = e;
}
let G = null, X = 0, _e = null;
function ga(e) {
  _e = e;
}
let Bo = 1, Ht = 0, Ie = !1;
function Ho() {
  return ++Bo;
}
function bt(e) {
  var f;
  var t = e.f;
  if (t & Le)
    return !0;
  if (t & lt) {
    var n = e.deps, o = (t & ee) !== 0;
    if (n !== null) {
      var r, a, s = (t & Mt) !== 0, i = o && O !== null && !Ie, l = n.length;
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
        if (a = n[r], bt(
          /** @type {Derived} */
          a
        ) && Ro(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || O !== null && !Ie) && xe(e, Y);
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
  throw Tt = !1, e;
}
function ya(e) {
  return (e.f & zt) === 0 && (e.parent === null || (e.parent.f & It) === 0);
}
function Xt(e, t, n, o) {
  if (Tt) {
    if (n === null && (Tt = !1), ya(t))
      throw e;
    return;
  }
  n !== null && (Tt = !0);
  {
    xa(e, t);
    return;
  }
}
function Fo(e, t, n = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var r = 0; r < o.length; r++) {
      var a = o[r];
      a.f & ie ? Fo(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? xe(a, Le) : a.f & Y && xe(a, lt), Zt(
        /** @type {Effect} */
        a
      ));
    }
}
function Wo(e) {
  var p;
  var t = G, n = X, o = _e, r = R, a = Ie, s = he, i = Q, l = ae, c = e.f;
  G = /** @type {null | Value[]} */
  null, X = 0, _e = null, Ie = (c & ee) !== 0 && (ae || !kt || R === null), R = c & (Ce | it) ? null : e, he = null, eo(e.ctx), ae = !1, Ht++;
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
      if (!Ie)
        for (d = X; d < f.length; d++)
          ((p = f[d]).reactions ?? (p.reactions = [])).push(e);
    } else f !== null && X < f.length && (Ft(e, X), f.length = X);
    if (zo() && _e !== null && !ae && f !== null && !(e.f & (ie | lt | Le)))
      for (d = 0; d < /** @type {Source[]} */
      _e.length; d++)
        Fo(
          _e[d],
          /** @type {Effect} */
          e
        );
    return r !== null && Ht++, u;
  } finally {
    G = t, X = n, _e = o, R = r, Ie = a, he = s, eo(i), ae = l;
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
  (G === null || !G.includes(t)) && (xe(t, lt), t.f & (ee | Mt) || (t.f ^= Mt), Oo(
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
function kn(e) {
  var t = e.f;
  if (!(t & zt)) {
    xe(e, Y);
    var n = O, o = Q, r = kt;
    O = e, kt = !0;
    try {
      t & Yt ? La(e) : Go(e), jo(e);
      var a = Wo(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Bo;
      var s = e.deps, i;
      zn && ua && e.f & Le;
    } catch (l) {
      Xt(l, e, n, o || e.ctx);
    } finally {
      kt = r, O = n;
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
function Vo() {
  try {
    for (var e = 0; gt.length > 0; ) {
      e++ > 1e3 && wa();
      var t = gt, n = t.length;
      gt = [];
      for (var o = 0; o < n; o++) {
        var r = t[o];
        r.f & Y || (r.f ^= Y);
        var a = ba(r);
        _a(a);
      }
    }
  } finally {
    $t = !1, Bt = null;
  }
}
function _a(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var o = e[n];
      if (!(o.f & (zt | Ee)))
        try {
          bt(o) && (kn(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? Uo(o) : o.fn = null));
        } catch (r) {
          Xt(r, o, null, o.ctx);
        }
    }
}
function Zt(e) {
  $t || ($t = !0, queueMicrotask(Vo));
  for (var t = Bt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (it | Ce)) {
      if (!(n & Y)) return;
      t.f ^= Y;
    }
  }
  gt.push(t);
}
function ba(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var o = n.f, r = (o & Ce) !== 0, a = r && (o & Y) !== 0, s = n.next;
    if (!a && !(o & Ee)) {
      if (o & No)
        t.push(n);
      else if (r)
        n.f ^= Y;
      else {
        var i = R;
        try {
          R = n, bt(n) && kn(n);
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
  for (qn(); gt.length > 0; )
    $t = !0, Vo(), qn();
  return (
    /** @type {T} */
    t
  );
}
function b(e) {
  var t = e.f, n = (t & ie) !== 0;
  if (R !== null && !ae) {
    he !== null && he.includes(e) && la();
    var o = R.deps;
    e.rv < Ht && (e.rv = Ht, G === null && o !== null && o[X] === e ? X++ : G === null ? G = [e] : (!Ie || !G.includes(e)) && G.push(e));
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
  e, bt(r) && Ro(r)), e.v;
}
function fe(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const Na = -7169;
function xe(e, t) {
  e.f = e.f & Na | t;
}
function Aa(e) {
  O === null && R === null && na(), R !== null && R.f & ee && O === null && ta(), Tn && ea();
}
function Ea(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ke(e, t, n, o = !0) {
  var r = (e & it) !== 0, a = O, s = {
    ctx: Q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Le,
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
      kn(s), s.f |= Ao;
    } catch (c) {
      throw le(s), c;
    }
  else t !== null && Zt(s);
  var i = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Eo | It)) === 0;
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
  return xe(t, Y), t.teardown = e, t;
}
function Ge(e) {
  Aa();
  var t = O !== null && (O.f & Ce) !== 0 && Q !== null && !Q.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Q
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: O,
      reaction: R
    });
  } else {
    var o = Jt(e);
    return o;
  }
}
function Sa(e) {
  const t = Ke(it, e, !0);
  return () => {
    le(t);
  };
}
function Ca(e) {
  const t = Ke(it, e, !0);
  return (n = {}) => new Promise((o) => {
    n.outro ? ot(t, () => {
      le(t), o(void 0);
    }) : (le(t), o(void 0));
  });
}
function Jt(e) {
  return Ke(No, e, !1);
}
function On(e) {
  return Ke(Kt, e, !0);
}
function De(e, t = [], n = U) {
  const o = t.map(n);
  return Ye(() => e(...o.map(b)));
}
function Ye(e, t = 0) {
  return Ke(Kt | Yt | t, e, !0);
}
function Se(e, t = !0) {
  return Ke(Kt | Ce, e, !0, t);
}
function jo(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Tn, o = R;
    Jn(!0), ve(null);
    try {
      t.call(null);
    } finally {
      Jn(n), ve(o);
    }
  }
}
function Go(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var o = n.next;
    le(n, t), n = o;
  }
}
function La(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ce || le(t), t = n;
  }
}
function le(e, t = !0) {
  var n = !1;
  if ((t || e.f & Kr) && e.nodes_start !== null) {
    for (var o = e.nodes_start, r = e.nodes_end; o !== null; ) {
      var a = o === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ye(o)
      );
      o.remove(), o = a;
    }
    n = !0;
  }
  Go(e, t && !n), Ft(e, 0), xe(e, zt);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  jo(e);
  var i = e.parent;
  i !== null && i.first !== null && Uo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Uo(e) {
  var t = e.parent, n = e.prev, o = e.next;
  n !== null && (n.next = o), o !== null && (o.prev = n), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = n));
}
function ot(e, t) {
  var n = [];
  Rn(e, n, !0), Ko(n, () => {
    le(e), t && t();
  });
}
function Ko(e, t) {
  var n = e.length;
  if (n > 0) {
    var o = () => --n || t();
    for (var r of e)
      r.out(o);
  } else
    t();
}
function Rn(e, t, n) {
  if (!(e.f & Ee)) {
    if (e.f ^= Ee, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var r = o.next, a = (o.f & ct) !== 0 || (o.f & Ce) !== 0;
      Rn(o, t, a ? n : !1), o = r;
    }
  }
}
function Wt(e) {
  Yo(e, !0);
}
function Yo(e, t) {
  if (e.f & Ee) {
    e.f ^= Ee, e.f & Y || (e.f ^= Y), bt(e) && (xe(e, Le), Zt(e));
    for (var n = e.first; n !== null; ) {
      var o = n.next, r = (n.f & ct) !== 0 || (n.f & Ce) !== 0;
      Yo(n, r ? t : !1), n = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Ta(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Q = null;
function eo(e) {
  Q = e;
}
function ce(e, t = !1, n) {
  Q = {
    p: Q,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ue(e) {
  const t = Q;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = O, o = R;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var a = s[r];
          ge(a.effect), ve(a.reaction), Jt(a.fn);
        }
      } finally {
        ge(n), ve(o);
      }
    }
    Q = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function zo() {
  return !0;
}
function ka(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Oa = [
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
  return Oa.includes(e);
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
    e.autofocus = !0, ut(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function qo(e) {
  var t = R, n = O;
  ve(null), ge(null);
  try {
    return e();
  } finally {
    ve(t), ge(n);
  }
}
const Qo = /* @__PURE__ */ new Set(), un = /* @__PURE__ */ new Set();
function Ha(e, t, n, o = {}) {
  function r(a) {
    if (o.capture || vt.call(t, a), !a.cancelBubble)
      return qo(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
    t.addEventListener(e, r, o);
  }) : t.addEventListener(e, r, o), r;
}
function Xo(e) {
  for (var t = 0; t < e.length; t++)
    Qo.add(e[t]);
  for (var n of un)
    n(e);
}
function vt(e) {
  var P;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, r = ((P = e.composedPath) == null ? void 0 : P.call(e)) || [], a = (
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
    xt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var u = R, f = O;
    ve(null), ge(null);
    try {
      for (var d, p = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + o];
          if (g !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Sn(g)) {
              var [y, ...m] = g;
              y.apply(a, [e, ...m]);
            } else
              g.call(a, e);
        } catch (v) {
          d ? p.push(v) : d = v;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (d) {
        for (let v of p)
          queueMicrotask(() => {
            throw v;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ve(u), ge(f);
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
    O
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  var n = (t & Ur) !== 0, o, r = !e.startsWith("<!>");
  return () => {
    if (T)
      return pe(k, null), k;
    o === void 0 && (o = In(r ? e : "<!>" + e), o = /** @type {Node} */
    /* @__PURE__ */ K(o));
    var a = (
      /** @type {TemplateNode} */
      n || Io ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    return pe(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function Nt(e, t, n = "svg") {
  var o = !e.startsWith("<!>"), r = (t & Gr) !== 0, a = `<${n}>${o ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (T)
      return pe(k, null), k;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        In(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ K(i)
      );
      if (r)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ K(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ K(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ K(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ K(c)
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
function wt() {
  if (T)
    return pe(k, null), k;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = nt();
  return e.append(t, n), pe(t, n), e;
}
function H(e, t) {
  if (T) {
    O.nodes_end = k, Me();
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
function Zo(e, t) {
  return Jo(e, t);
}
function Fa(e, t) {
  cn(), t.intro = t.intro ?? !1;
  const n = t.target, o = T, r = k;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ K(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== bo); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(a);
    if (!a)
      throw Je;
    se(!0), te(
      /** @type {Comment} */
      a
    ), Me();
    const s = Jo(e, { ...t, anchor: a });
    if (k === null || k.nodeType !== 8 || /** @type {Comment} */
    k.data !== En)
      throw Qt(), Je;
    return se(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Je)
      return t.recover === !1 && ra(), cn(), $o(n), se(!1), Zo(e, t);
    throw s;
  } finally {
    se(o), te(r);
  }
}
const qe = /* @__PURE__ */ new Map();
function Jo(e, { target: t, anchor: n, props: o = {}, events: r, context: a, intro: s = !0 }) {
  cn();
  var i = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var p = f[d];
      if (!i.has(p)) {
        i.add(p);
        var h = $a(p);
        t.addEventListener(p, vt, { passive: h });
        var g = qe.get(p);
        g === void 0 ? (document.addEventListener(p, vt, { passive: h }), qe.set(p, 1)) : qe.set(p, g + 1);
      }
    }
  };
  l(Cn(Qo)), un.add(l);
  var c = void 0, u = Ca(() => {
    var f = n ?? t.appendChild(nt());
    return Se(() => {
      if (a) {
        ce({});
        var d = (
          /** @type {ComponentContext} */
          Q
        );
        d.c = a;
      }
      r && (o.$$events = r), T && pe(
        /** @type {TemplateNode} */
        f,
        null
      ), dn = s, c = e(f, o) || {}, dn = !0, T && (O.nodes_end = k), a && ue();
    }), () => {
      var h;
      for (var d of i) {
        t.removeEventListener(d, vt);
        var p = (
          /** @type {number} */
          qe.get(d)
        );
        --p === 0 ? (document.removeEventListener(d, vt), qe.delete(d)) : qe.set(d, p);
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
  T && Me();
  var o = e, r = null, a = null, s = j, i = n ? ct : 0, l = !1;
  const c = (f, d = !0) => {
    l = !0, u(d, f);
  }, u = (f, d) => {
    if (s === (s = f)) return;
    let p = !1;
    if (T) {
      const h = (
        /** @type {Comment} */
        o.data === An
      );
      !!s === h && (o = ln(), te(o), se(!1), p = !0);
    }
    s ? (r ? Wt(r) : d && (r = Se(() => d(o))), a && ot(a, () => {
      a = null;
    })) : (a ? Wt(a) : d && (a = Se(() => d(o))), r && ot(r, () => {
      r = null;
    })), p && se(!0);
  };
  Ye(() => {
    l = !1, t(c), l || u(null, null);
  }, i), T && (o = k);
}
function Va(e, t, n) {
  T && Me();
  var o = e, r = j, a, s = Jr;
  Ye(() => {
    s(r, r = t()) && (a && ot(a), a = Se(() => n(o)));
  }), T && (o = k);
}
function rt(e, t) {
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
    $o(l), l.append(
      /** @type {Element} */
      n
    ), o.clear(), Re(e, t[0].prev, t[a - 1].next);
  }
  Ko(r, () => {
    for (var c = 0; c < a; c++) {
      var u = t[c];
      i || (o.delete(u.k), Re(e, u.prev, u.next)), le(u.e, !i);
    }
  });
}
function at(e, t, n, o, r, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & _o) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = T ? te(
      /** @type {Comment | Text} */
      /* @__PURE__ */ K(c)
    ) : c.appendChild(nt());
  }
  T && Me();
  var u = null, f = !1, d = /* @__PURE__ */ fa(() => {
    var p = n();
    return Sn(p) ? p : p == null ? [] : Cn(p);
  });
  Ye(() => {
    var p = b(d), h = p.length;
    if (f && h === 0)
      return;
    f = h === 0;
    let g = !1;
    if (T) {
      var y = (
        /** @type {Comment} */
        s.data === An
      );
      y !== (h === 0) && (s = ln(), te(s), se(!1), g = !0);
    }
    if (T) {
      for (var m = null, P, v = 0; v < h; v++) {
        if (k.nodeType === 8 && /** @type {Comment} */
        k.data === En) {
          s = /** @type {Comment} */
          k, g = !0, se(!1);
          break;
        }
        var x = p[v], _ = o(x, v);
        P = er(
          k,
          i,
          m,
          null,
          x,
          _,
          v,
          r,
          t,
          n
        ), i.items.set(_, P), m = P;
      }
      h > 0 && te(ln());
    }
    T || Ga(p, i, s, r, t, o, n), a !== null && (h === 0 ? u ? Wt(u) : u = Se(() => a(s)) : u !== null && ot(u, () => {
      u = null;
    })), g && se(!0), b(d);
  }), T && (s = k);
}
function Ga(e, t, n, o, r, a, s) {
  var we, Be, L, At;
  var i = (r & $r) !== 0, l = (r & (bn | Nn)) !== 0, c = e.length, u = t.items, f = t.first, d = f, p, h = null, g, y = [], m = [], P, v, x, _;
  if (i)
    for (_ = 0; _ < c; _ += 1)
      P = e[_], v = a(P, _), x = u.get(v), x !== void 0 && ((we = x.a) == null || we.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(x));
  for (_ = 0; _ < c; _ += 1) {
    if (P = e[_], v = a(P, _), x = u.get(v), x === void 0) {
      var N = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      h = er(
        N,
        t,
        h,
        h === null ? t.first : h.next,
        P,
        v,
        _,
        o,
        r,
        s
      ), u.set(v, h), y = [], m = [], d = h.next;
      continue;
    }
    if (l && Ua(x, P, _, r), x.e.f & Ee && (Wt(x.e), i && ((Be = x.a) == null || Be.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(x))), x !== d) {
      if (p !== void 0 && p.has(x)) {
        if (y.length < m.length) {
          var A = m[0], C;
          h = A.prev;
          var D = y[0], W = y[y.length - 1];
          for (C = 0; C < y.length; C += 1)
            to(y[C], A, n);
          for (C = 0; C < m.length; C += 1)
            p.delete(m[C]);
          Re(t, D.prev, W.next), Re(t, h, D), Re(t, W, A), d = A, h = W, _ -= 1, y = [], m = [];
        } else
          p.delete(x), to(x, d, n), Re(t, x.prev, x.next), Re(t, x, h === null ? t.first : h.next), Re(t, h, x), h = x;
        continue;
      }
      for (y = [], m = []; d !== null && d.k !== v; )
        d.e.f & Ee || (p ?? (p = /* @__PURE__ */ new Set())).add(d), m.push(d), d = d.next;
      if (d === null)
        continue;
      x = d;
    }
    y.push(x), h = x, d = x.next;
  }
  if (d !== null || p !== void 0) {
    for (var V = p === void 0 ? [] : Cn(p); d !== null; )
      d.e.f & Ee || V.push(d), d = d.next;
    var ne = V.length;
    if (ne > 0) {
      var ke = r & _o && c === 0 ? n : null;
      if (i) {
        for (_ = 0; _ < ne; _ += 1)
          (L = V[_].a) == null || L.measure();
        for (_ = 0; _ < ne; _ += 1)
          (At = V[_].a) == null || At.fix();
      }
      ja(t, V, ke, u);
    }
  }
  i && ut(() => {
    var ze;
    if (g !== void 0)
      for (x of g)
        (ze = x.a) == null || ze.apply();
  }), O.first = t.first && t.first.e, O.last = h && h.e;
}
function Ua(e, t, n, o) {
  o & bn && sn(e.v, t), o & Nn ? sn(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function er(e, t, n, o, r, a, s, i, l, c) {
  var u = (l & bn) !== 0, f = (l & Br) === 0, d = u ? f ? /* @__PURE__ */ qt(r) : z(r) : r, p = l & Nn ? z(s) : s, h = {
    i: p,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: o
  };
  try {
    return h.e = Se(() => i(e, d, p, c), T), h.e.prev = n && n.e, h.e.next = o && o.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), o !== null && (o.prev = h, o.e.prev = h.e), h;
  } finally {
  }
}
function to(e, t, n) {
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
      /* @__PURE__ */ ye(a)
    );
    r.before(a), a = s;
  }
}
function Re(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Pt(e, t, n, o, r) {
  var a = e, s = "", i;
  Ye(() => {
    if (s === (s = t() ?? "")) {
      T && Me();
      return;
    }
    i !== void 0 && (le(i), i = void 0), s !== "" && (i = Se(() => {
      if (T) {
        k.data;
        for (var l = Me(), c = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ ye(l);
        if (l === null)
          throw Qt(), Je;
        pe(k, c), a = te(l);
        return;
      }
      var u = s + "";
      u = `<svg>${u}</svg>`;
      var f = In(u);
      for (f = /** @type {Element} */
      /* @__PURE__ */ K(f), pe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ K(f),
        /** @type {TemplateNode} */
        f.lastChild
      ); /* @__PURE__ */ K(f); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ K(f)
        );
    }));
  });
}
function tr(e, t, ...n) {
  var o = e, r = q, a;
  Ye(() => {
    r !== (r = t()) && (a && (le(a), a = null), a = Se(() => (
      /** @type {SnippetFn} */
      r(o, ...n)
    )));
  }, ct), T && (o = k);
}
function Ka(e, t, n) {
  T && Me();
  var o = e, r, a;
  Ye(() => {
    r !== (r = t()) && (a && (ot(a), a = null), r && (a = Se(() => n(o, r))));
  }, ct), T && (o = k);
}
function $e(e, t) {
  ut(() => {
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
function nr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = nr(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ya() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = nr(e)) && (o && (o += " "), o += t);
  return o;
}
function za(e) {
  return typeof e == "object" ? Ya(e) : e ?? "";
}
const no = [...` 	
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
          (s === 0 || no.includes(o[s - 1])) && (i === o.length || no.includes(o[i])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(i + 1) : s = i;
        }
  }
  return o === "" ? null : o;
}
function en(e, t, n, o, r, a) {
  var s = e.__className;
  if (T || s !== n) {
    var i = qa(n, o, a);
    (!T || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = n;
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
function dt(e, t, n, o) {
  var r = e.__attributes ?? (e.__attributes = {});
  T && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Yr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && or(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Xa(e, t, n, o, r = !1, a = !1, s = !1) {
  let i = T && a;
  i && se(!1);
  var l = t || {}, c = e.tagName === "OPTION";
  for (var u in t)
    u in n || (n[u] = null);
  n.class ? n.class = za(n.class) : n.class = null;
  var f = or(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const v in n) {
    let x = n[v];
    if (c && v === "value" && x == null) {
      e.value = e.__value = "", l[v] = x;
      continue;
    }
    var p = l[v];
    if (!(x === p && v !== "class")) {
      l[v] = x;
      var h = v[0] + v[1];
      if (h !== "$$") {
        if (h === "on") {
          const _ = {}, N = "$$" + v;
          let A = v.slice(2);
          var g = Ra(A);
          if (ka(A) && (A = A.slice(0, -7), _.capture = !0), !g && p) {
            if (x != null) continue;
            e.removeEventListener(A, l[N], _), l[N] = null;
          }
          if (x != null)
            if (g)
              e[`__${A}`] = x, Xo([A]);
            else {
              let C = function(D) {
                l[v].call(this, D);
              };
              l[N] = Ha(A, e, C, _);
            }
          else g && (e[`__${A}`] = void 0);
        } else if (v === "class") {
          var y = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          en(e, y, x, o, t == null ? void 0 : t[hn], n[hn]);
        } else if (v === "style" && x != null)
          e.style.cssText = x + "";
        else if (v === "autofocus")
          Ba(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!a && (v === "__value" || v === "value" && x != null))
          e.value = e.__value = x;
        else if (v === "selected" && c)
          Qa(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var m = v;
          r || (m = Ma(m));
          var P = m === "defaultValue" || m === "defaultChecked";
          if (x == null && !a && !P)
            if (d[v] = null, m === "value" || m === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const N = t === void 0;
              if (m === "value") {
                let A = _.defaultValue;
                _.removeAttribute(m), _.defaultValue = A, _.value = _.__value = N ? A : null;
              } else {
                let A = _.defaultChecked;
                _.removeAttribute(m), _.defaultChecked = A, _.checked = N ? A : !1;
              }
            } else
              e.removeAttribute(v);
          else P || f.includes(m) && (a || typeof x != "string") ? e[m] = x : typeof x != "function" && dt(e, m, x);
        }
        v === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && se(!0), l;
}
var oo = /* @__PURE__ */ new Map();
function or(e) {
  var t = oo.get(e.nodeName);
  if (t) return t;
  oo.set(e.nodeName, t = []);
  for (var n, o = e, r = Element.prototype; r !== o; ) {
    n = qr(o);
    for (var a in n)
      n[a].set && t.push(a);
    o = Po(o);
  }
  return t;
}
function Ve(e, t, n, o) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== n && (r[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
const Za = () => performance.now(), de = {
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
function rr() {
  const e = de.now();
  de.tasks.forEach((t) => {
    t.c(e) || (de.tasks.delete(t), t.f());
  }), de.tasks.size !== 0 && de.tick(rr);
}
function ar(e) {
  let t;
  return de.tasks.size === 0 && de.tick(rr), {
    promise: new Promise((n) => {
      de.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      de.tasks.delete(t);
    }
  };
}
function St(e, t) {
  qo(() => {
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
function ro(e) {
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
    var y = R, m = O;
    ve(null), ge(null);
    try {
      return s ?? (s = n()(t, (o == null ? void 0 : o()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ve(y), ge(m);
    }
  }
  var d = {
    is_global: r,
    in() {
      t.inert = i, St(t, "introstart"), c = pn(t, f(), u, 1, () => {
        St(t, "introend"), c == null || c.abort(), c = s = void 0, t.style.overflow = l;
      });
    },
    out(y) {
      t.inert = !0, St(t, "outrostart"), u = pn(t, f(), c, 0, () => {
        St(t, "outroend"), y == null || y();
      });
    },
    stop: () => {
      c == null || c.abort(), u == null || u.abort();
    }
  }, p = (
    /** @type {Effect} */
    O
  );
  if ((p.transitions ?? (p.transitions = [])).push(d), dn) {
    var h = r;
    if (!h) {
      for (var g = (
        /** @type {Effect | null} */
        p.parent
      ); g && g.f & ct; )
        for (; (g = g.parent) && !(g.f & Yt); )
          ;
      h = !g || (g.f & Ao) !== 0;
    }
    h && Jt(() => {
      fe(() => d.in());
    });
  }
}
function pn(e, t, n, o, r) {
  var a = o === 1;
  if (Xe(t)) {
    var s, i = !1;
    return ut(() => {
      if (!i) {
        var y = t({ direction: a ? "in" : "out" });
        s = pn(e, y, n, o, r);
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
      abort: q,
      deactivate: q,
      reset: q,
      t: () => o
    };
  const { delay: l = 0, css: c, tick: u, easing: f = es } = t;
  var d = [];
  if (a && n === void 0 && (u && u(0, 1), c)) {
    var p = ro(c(0, 1));
    d.push(p, p);
  }
  var h = () => 1 - o, g = e.animate(d, { duration: l });
  return g.onfinish = () => {
    var y = (n == null ? void 0 : n.t()) ?? 1 - o;
    n == null || n.abort();
    var m = o - y, P = (
      /** @type {number} */
      t.duration * Math.abs(m)
    ), v = [];
    if (P > 0) {
      var x = !1;
      if (c)
        for (var _ = Math.ceil(P / 16.666666666666668), N = 0; N <= _; N += 1) {
          var A = y + m * f(N / _), C = ro(c(A, 1 - A));
          v.push(C), x || (x = C.overflow === "hidden");
        }
      x && (e.style.overflow = "hidden"), h = () => {
        var D = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return y + m * f(D / P);
      }, u && ar(() => {
        if (g.playState !== "running") return !1;
        var D = h();
        return u(D, 1 - D), !0;
      });
    }
    g = e.animate(v, { duration: P, fill: "forwards" }), g.onfinish = () => {
      h = () => o, u == null || u(o, 1 - o), r();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = q);
    },
    deactivate: () => {
      r = q;
    },
    reset: () => {
      o === 0 && (u == null || u(1, 0));
    },
    t: () => h()
  };
}
function ao(e, t) {
  return e === t || (e == null ? void 0 : e[et]) === t;
}
function Mn(e = {}, t, n, o) {
  return Jt(() => {
    var r, a;
    return On(() => {
      r = a, a = [], fe(() => {
        e !== n(...a) && (t(e, ...a), r && ao(n(...r), e) && t(null, ...r));
      });
    }), () => {
      ut(() => {
        a && ao(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Dn(e) {
  Q === null && Ta(), Ge(() => {
    const t = fe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function sr(e, t, n) {
  if (e == null)
    return t(void 0), q;
  const o = fe(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const Qe = [];
function ir(e, t = q) {
  let n = null;
  const o = /* @__PURE__ */ new Set();
  function r(i) {
    if (To(e, i) && (e = i, n)) {
      const l = !Qe.length;
      for (const c of o)
        c[1](), Qe.push(c, e);
      if (l) {
        for (let c = 0; c < Qe.length; c += 2)
          Qe[c][0](Qe[c + 1]);
        Qe.length = 0;
      }
    }
  }
  function a(i) {
    r(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, l = q) {
    const c = [i, l];
    return o.add(c), o.size === 1 && (n = t(r, a) || q), i(
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
  return sr(e, (n) => t = n)(), t;
}
let Ct = !1, vn = Symbol();
function os(e, t, n) {
  const o = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ qt(void 0),
    unsubscribe: q
  });
  if (o.store !== e && !(vn in n))
    if (o.unsubscribe(), o.store = e ?? null, e == null)
      o.source.v = void 0, o.unsubscribe = q;
    else {
      var r = !0;
      o.unsubscribe = sr(e, (a) => {
        r ? o.source.v = a : M(o.source, a);
      }), r = !1;
    }
  return e && vn in n ? ns(e) : b(o.source);
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
      xt(e, vn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function so(e, t, n) {
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
      if (Xe(o) && (o = o()), typeof o == "object" && o !== null && t in o) return o[t];
    }
  },
  set(e, t, n) {
    let o = e.props.length;
    for (; o--; ) {
      let r = e.props[o];
      Xe(r) && (r = r());
      const a = Pe(r, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let o = e.props[n];
      if (Xe(o) && (o = o()), typeof o == "object" && o !== null && t in o) {
        const r = Pe(o, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === et || t === Pn) return !1;
    for (let n of e.props)
      if (Xe(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Xe(n) && (n = n());
      for (const o in n)
        t.includes(o) || t.push(o);
    }
    return t;
  }
};
function lr(...e) {
  return new Proxy({ props: e }, cs);
}
function S(e, t, n, o) {
  var _;
  var r = (n & Hr) !== 0, a = !0, s = (n & Wr) !== 0, i = (n & Vr) !== 0, l = !1, c;
  s ? [c, l] = ss(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var u = et in e || Pn in e, f = s && (((_ = Pe(e, t)) == null ? void 0 : _.set) ?? (u && t in e && ((N) => e[t] = N))) || void 0, d = (
    /** @type {V} */
    o
  ), p = !0, h = !1, g = () => (h = !0, p && (p = !1, i ? d = fe(
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
    return N === void 0 ? g() : (p = !0, h = !1, N);
  }, !(n & Fr))
    return y;
  if (f) {
    var m = e.$$legacy;
    return function(N, A) {
      return arguments.length > 0 ? ((!A || m || l) && f(A ? y() : N), N) : y();
    };
  }
  var P = !1, v = /* @__PURE__ */ qt(c), x = /* @__PURE__ */ U(() => {
    var N = y(), A = b(v);
    return P ? (P = !1, A) : v.v = N;
  });
  return r || (x.equals = Ln), function(N, A) {
    if (arguments.length > 0) {
      const C = A ? b(x) : s ? re(N) : N;
      return x.equals(C) || (P = !0, M(v, C), h && d !== void 0 && (d = C), fe(() => b(x))), N;
    }
    return b(x);
  };
}
function us(e) {
  return new ds(e);
}
var be, Z;
class ds {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    We(this, be);
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
          return b(n.get(i) ?? o(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === Pn ? !0 : (b(n.get(i) ?? o(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, l) {
          return M(n.get(i) ?? o(i, l), l), Reflect.set(s, i, l);
        }
      }
    );
    ht(this, Z, (t.hydrate ? Fa : Zo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && E(), ht(this, be, r.$$events);
    for (const s of Object.keys(I(this, Z)))
      s === "$set" || s === "$destroy" || s === "$on" || xt(this, s, {
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
    I(this, be)[t] = I(this, be)[t] || [];
    const o = (...r) => n.call(this, ...r);
    return I(this, be)[t].push(o), () => {
      I(this, be)[t] = I(this, be)[t].filter(
        /** @param {any} fn */
        (r) => r !== o
      );
    };
  }
  $destroy() {
    I(this, Z).$destroy();
  }
}
be = new WeakMap(), Z = new WeakMap();
let cr;
typeof HTMLElement == "function" && (cr = class extends HTMLElement {
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
        a in this.$$d || (this.$$d[a] = Ot(a, r.value, this.$$p_d, "toProp"));
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
        On(() => {
          var r;
          this.$$r = !0;
          for (const a of Dt(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Ot(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ot(t, o, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
function Ot(e, t, n, o) {
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
function me(e, t, n, o, r, a) {
  let s = class extends cr {
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
    xt(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(l) {
        var f;
        l = Ot(i, l, t), this.$$d[i] = l;
        var c = this.$$c;
        if (c) {
          var u = (f = Pe(c, i)) == null ? void 0 : f.get;
          u ? c[i] = l : c.$set({ [i]: l });
        }
      }
    });
  }), o.forEach((i) => {
    xt(s.prototype, i, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function io(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function hs(e) {
  return e;
}
function ps(e) {
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
    if (io(e) && io(t)) {
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
var Ne, tt, _t, je;
const Hn = class Hn {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, n = {}) {
    We(this, Ne, z(
      /** @type {T} */
      void 0
    ));
    We(this, tt, z(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    We(this, _t);
    /** @type {import('../internal/client/types').Task | null} */
    We(this, je, null);
    I(this, Ne).v = I(this, tt).v = t, ht(this, _t, n);
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
    return On(() => {
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
    M(I(this, tt), t);
    let {
      delay: o = 0,
      duration: r = 400,
      easing: a = hs,
      interpolate: s = gn
    } = { ...I(this, _t), ...n };
    if (r === 0)
      return (f = I(this, je)) == null || f.abort(), M(I(this, Ne), t), Promise.resolve();
    const i = de.now() + o;
    let l, c = !1, u = I(this, je);
    return ht(this, je, ar((d) => {
      if (d < i)
        return !0;
      if (!c) {
        c = !0;
        const h = I(this, Ne).v;
        l = s(h, t), typeof r == "function" && (r = r(h, t)), u == null || u.abort();
      }
      const p = d - i;
      return p > /** @type {number} */
      r ? (M(I(this, Ne), t), !1) : (M(I(this, Ne), l(a(p / /** @type {number} */
      r))), !0);
    })), I(this, je).promise;
  }
  get current() {
    return b(I(this, Ne));
  }
  get target() {
    return b(I(this, tt));
  }
  set target(t) {
    this.set(t);
  }
};
Ne = new WeakMap(), tt = new WeakMap(), _t = new WeakMap(), je = new WeakMap();
let Ze = Hn;
function vs(e) {
  return Object.entries(e).reduce((t, [n, o]) => (t[o] = n, t), {});
}
const lo = 16;
function jt(e = [0, 0], t = "px") {
  const n = e[0] * (lo * Math.sqrt(3)), o = e[1] * 1.5 * lo;
  return [n, o].map((r) => `${Math.round(r)}${t}`);
}
var gs = /* @__PURE__ */ Nt("<g><text> </text></g>"), xs = /* @__PURE__ */ Nt('<g class="hexlabels svelte-ejrww9"></g>');
const ys = {
  hash: "svelte-ejrww9",
  code: ".hexlabels.svelte-ejrww9 {pointer-events:none;}.hexlabels__text.svelte-ejrww9 {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:9px;font-family:sans-serif;text-anchor:middle;}.hexlabels__text--allocation.svelte-ejrww9 {fill:white;}"
};
function ur(e, t) {
  ce(t, !0), $e(e, ys);
  let n = S(t, "hexes", 7), o = S(t, "allocations", 7), r = S(t, "labelsToShow", 23, () => ({})), a = S(t, "showElectorateLabels", 7, !1), s = /* @__PURE__ */ U(() => a() ? n() : n().filter(({ id: l }) => r()[l]));
  var i = xs();
  return at(i, 21, () => b(s), rt, (l, c) => {
    let u = () => b(c).id, f = () => b(c).coordPx, d = () => b(c).shortName;
    var p = gs(), h = F(p);
    let g;
    var y = F(h, !0);
    B(h), B(p), De(
      (m) => {
        dt(p, "transform", m), g = en(h, 0, "hexlabels__text svelte-ejrww9", null, g, {
          "hexlabels__text--allocation": o()[u()]
        }), Vt(y, d());
      },
      [
        () => `translate(${f().join(" ")})`
      ]
    ), H(l, p);
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
me(
  ur,
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
var ms = /* @__PURE__ */ Nt('<g><g class="group-hexes svelte-14ppuax"><!></g><g class="group-outline group-outline__under svelte-14ppuax"><!></g><g class="group-hex-strokes svelte-14ppuax"><!></g><!><g class="group-outline group-outline__over svelte-14ppuax"><!></g></g>');
const ws = {
  hash: "svelte-14ppuax",
  code: `.group.svelte-14ppuax:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-14ppuax {display:none;}.group--hidden.svelte-14ppuax {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-14ppuax,
.group-outline.svelte-14ppuax {pointer-events:none;}.group.svelte-14ppuax .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-14ppuax .hex-outline {fill:none;stroke:var(--c-state-outline);stroke-width:1px;transition:opacity 0.5s, stroke 0.5s;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-14ppuax:not(.group--has-focuses) .group-outline:where(.svelte-14ppuax) .hex-outline {stroke:var(--c-empty-state-outline);}.group--map-is-full.svelte-14ppuax:not(.group--has-focuses) .group-outline:where(.svelte-14ppuax) .hex-outline {stroke:transparent;}.group-hexes.svelte-14ppuax .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-14ppuax .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-14ppuax .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-14ppuax .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-14ppuax .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-14ppuax .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-14ppuax .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-14ppuax .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-14ppuax .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-14ppuax .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-14ppuax .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-14ppuax .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-14ppuax .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-14ppuax .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-14ppuax .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-null-border);stroke-width:1;}.group--map-is-empty.svelte-14ppuax .group-hexes:where(.svelte-14ppuax) .hex {fill:var(--a-empty);stroke:var(--a-empty-border);stroke-width:0.5;}.group-hex-strokes.svelte-14ppuax .hex {fill:transparent;stroke:transparent;stroke-width:1px;}.group-hex-strokes.svelte-14ppuax .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filled-border);stroke-width:1px;}.group-hex-strokes.svelte-14ppuax .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);}.group--has-focuses.svelte-14ppuax .group-hexes:where(.svelte-14ppuax) .hex {stroke-width:1;}.group--has-focuses.svelte-14ppuax .group-hexes:where(.svelte-14ppuax) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-14ppuax .group-hex-strokes:where(.svelte-14ppuax) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-14ppuax .group-hexes:where(.svelte-14ppuax) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-14ppuax .group-hex-strokes:where(.svelte-14ppuax) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-14ppuax .group-hexes:where(.svelte-14ppuax) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-14ppuax .group-hex-strokes:where(.svelte-14ppuax) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--has-focuses.svelte-14ppuax:not(.group--map-is-empty) .group-outline:where(.svelte-14ppuax) .hex-outline {stroke:#60646c;}`
};
function dr(e, t) {
  ce(t, !0), $e(e, ws);
  let n = S(t, "name", 7, ""), o = S(t, "svgHexes", 7, ""), r = S(t, "hexes", 23, () => []), a = S(t, "svgOutline", 7, ""), s = S(t, "offset", 23, () => [1 / 0, 1 / 0]), i = S(t, "hasAllocations", 7), l = S(t, "hasAllAllocations", 7), c = S(t, "allocations", 7), u = S(t, "focuses", 7), f = S(t, "hasAnyFocuses", 7, !1), d = S(t, "labelsToShow", 23, () => ({})), p = S(t, "showElectorateLabels", 7), h = S(t, "showFocusedElectorateLabels", 7), g = S(t, "isStaticLayout", 7), y = Ae(`translate(${jt(s()).join(",")})`), m = Ae(!1), P = /* @__PURE__ */ U(() => s()[0] !== 1 / 0);
  Ge(() => {
    b(P) && (M(y, `translate(${jt(s()).join(",")})`), M(m, !0));
  });
  let v = /* @__PURE__ */ U(() => f() && h() ? u() : d());
  var x = ms();
  let _;
  var N = F(x), A = F(N);
  Pt(A, o), B(N);
  var C = J(N), D = F(C);
  Pt(D, a), B(C);
  var W = J(C), V = F(W);
  Pt(V, o), B(W);
  var ne = J(W);
  {
    var ke = (L) => {
      ur(L, {
        get hexes() {
          return r();
        },
        get allocations() {
          return c();
        },
        get labelsToShow() {
          return b(v);
        },
        get showElectorateLabels() {
          return p();
        }
      });
    };
    Ue(ne, (L) => {
      b(P) && L(ke);
    });
  }
  var we = J(ne), Be = F(we);
  return Pt(Be, a), B(we), B(x), De(() => {
    _ = en(x, 0, "group svelte-14ppuax", null, _, {
      "group--never-rendered": !b(m),
      "group--hidden": !b(P),
      "group--map-is-static": g(),
      "group--map-is-empty": !i(),
      "group--map-is-full": l(),
      "group--has-focuses": f()
    }), dt(x, "data-name", n()), Ve(x, "transform", b(y)), Ve(we, "opacity", f() && !i() ? 0 : 1);
  }), H(e, x), ue({
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
    get labelsToShow() {
      return d();
    },
    set labelsToShow(L = {}) {
      d(L), E();
    },
    get showElectorateLabels() {
      return p();
    },
    set showElectorateLabels(L) {
      p(L), E();
    },
    get showFocusedElectorateLabels() {
      return h();
    },
    set showFocusedElectorateLabels(L) {
      h(L), E();
    },
    get isStaticLayout() {
      return g();
    },
    set isStaticLayout(L) {
      g(L), E();
    }
  });
}
me(
  dr,
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
    labelsToShow: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    isStaticLayout: {}
  },
  [],
  [],
  !0
);
const _s = (e) => e;
function bs(e, { delay: t = 0, duration: n = 400, easing: o = _s } = {}) {
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
function fr(e, t) {
  ce(t, !0), $e(e, Es);
  let n = S(t, "labels", 7), o = S(t, "overlayLabels", 7, !1);
  var r = As();
  let a;
  return at(r, 21, n, rt, (s, i) => {
    var l = wt(), c = mt(l);
    Va(c, () => b(i).name, (u) => {
      var f = Ns(), d = F(f, !0);
      B(f), De(
        (p) => {
          Ve(f, "left", b(i).left + "%"), Ve(f, "top", b(i).top + "%"), Ve(f, "width", b(i).width + "%"), Ve(f, "margin-left", p), Vt(d, b(i).name);
        },
        [
          () => Math.round(0 - b(i).width / 2) + "%"
        ]
      ), ts(3, f, () => bs, () => ({ duration: 1e3 })), H(u, f);
    }), H(s, l);
  }), B(r), De(() => a = en(r, 1, "state-labels svelte-dbcm70", null, a, { "state-labels--overlaid": o() })), H(e, r), ue({
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
me(fr, { labels: {}, overlayLabels: {} }, [], [], !0);
var Ps = /* @__PURE__ */ Te('<span class="accessible-hide svelte-ivafae"><!></span>');
const Ss = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function hr(e, t) {
  ce(t, !0), $e(e, Ss);
  let n = S(t, "children", 7);
  var o = Ps(), r = F(o);
  return tr(r, () => n() ?? q), B(o), H(e, o), ue({
    get children() {
      return n();
    },
    set children(a) {
      n(a), E();
    }
  });
}
me(hr, { children: {} }, [], [], !0);
function Cs(e, t) {
  M(t, re(e.target.dataset.id));
}
function Ls(e, t) {
  var o;
  const n = e.target.dataset.id;
  (o = t()) == null || o({ code: n, clientX: null, clientY: null });
}
function Ts(e, t) {
  b(t) === e.target.dataset.id && M(t, null);
}
var ks = /* @__PURE__ */ Te("<li><button> </button></li>"), Os = /* @__PURE__ */ Te("<li> <ul></ul></li>"), Rs = /* @__PURE__ */ Te('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>');
const Is = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function pr(e, t) {
  ce(t, !0), $e(e, Is);
  let n = S(t, "groups", 7), o = S(t, "layout", 7), r = S(t, "onChange", 7), a = S(t, "onClick", 7), s = Ae(null);
  Ge(() => {
    var l;
    (l = r()) == null || l(b(s));
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
  ].filter((l) => o().positions[l]).map((l) => n().find((c) => c.name === l)).map((l) => ({
    ...l,
    hexes: [...l.hexes].sort((c, u) => c.coord[0] + c.coord[1] * 1e3 - (u.coord[0] + u.coord[1] * 1e3))
  })));
  return hr(e, {
    children: (l, c) => {
      var u = Rs();
      u.__click = [Ls, a], u.__focusin = [Cs, s], u.__focusout = [Ts, s], at(u, 21, () => b(i), rt, (f, d) => {
        var p = Os(), h = F(p), g = J(h);
        at(g, 21, () => b(d).hexes, rt, (y, m) => {
          var P = ks(), v = F(P), x = F(v, !0);
          B(v), B(P), De(() => {
            dt(v, "data-id", b(m).id), Vt(x, b(m).name);
          }), H(y, P);
        }), B(g), B(p), De(() => Vt(h, `${b(d).name ?? ""} `)), H(f, p);
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
Xo(["click", "focusin", "focusout"]);
me(
  pr,
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
  let n = /* @__PURE__ */ ls(t, ["$$slots", "$$events", "$$legacy", "$$host"]), o = Ae(null);
  Dn(() => {
    import("./HexMapArrows-B5KnKzHR.js").then((i) => {
      M(o, re(i.default));
    });
  });
  var r = wt(), a = mt(r);
  {
    var s = (i) => {
      var l = wt(), c = mt(l);
      Ka(c, () => b(o), (u, f) => {
        f(u, lr(() => n));
      }), H(i, l);
    };
    Ue(a, (i) => {
      b(o) && i(s);
    });
  }
  H(e, r), ue();
}
me(vr, {}, [], [], !0);
var Ms = /* @__PURE__ */ Nt('<path style="color:#000000;fill:#000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:#ffffff;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), Ds = /* @__PURE__ */ Nt('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:#000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const $s = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function Rt(e, t) {
  ce(t, !0), $e(e, $s);
  let n = S(t, "groups", 7), o = S(t, "id", 7), r = S(t, "layout", 7), a = S(t, "type", 7, "focus"), s = /* @__PURE__ */ U(() => n().flatMap((f) => f.hexes.map((d) => ({ ...d, group: f.name }))).sort((f, d) => f.index - d.index)), i = /* @__PURE__ */ U(() => {
    if (!o())
      return;
    const f = b(s).find((v) => v.id === o()), [d, p] = r().positions[f.group], [h, g] = f.coord, y = g % 2 ? 0.5 : 0, [m, P] = jt([d + h + y, p + g], "").map(Number);
    return [m - 3, P - 3];
  });
  var l = wt(), c = mt(l);
  {
    var u = (f) => {
      var d = Ds(), p = F(d);
      {
        var h = (g) => {
          var y = Ms();
          Qn(), H(g, y);
        };
        Ue(p, (g) => {
          a() === "focus" && g(h);
        });
      }
      Qn(), B(d), De((g) => dt(d, "transform", g), [
        () => `translate(${b(i).join(" ")}) scale(0.95)`
      ]), H(f, d);
    };
    Ue(c, (f) => {
      b(i) && f(u);
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
me(Rt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var Bs = typeof global == "object" && global && global.Object === Object && global, Hs = typeof self == "object" && self && self.Object === Object && self, gr = Bs || Hs || Function("return this")(), Gt = gr.Symbol, xr = Object.prototype, Fs = xr.hasOwnProperty, Ws = xr.toString, pt = Gt ? Gt.toStringTag : void 0;
function Vs(e) {
  var t = Fs.call(e, pt), n = e[pt];
  try {
    e[pt] = void 0;
    var o = !0;
  } catch {
  }
  var r = Ws.call(e);
  return o && (t ? e[pt] = n : delete e[pt]), r;
}
var js = Object.prototype, Gs = js.toString;
function Us(e) {
  return Gs.call(e);
}
var Ks = "[object Null]", Ys = "[object Undefined]", co = Gt ? Gt.toStringTag : void 0;
function zs(e) {
  return e == null ? e === void 0 ? Ys : Ks : co && co in Object(e) ? Vs(e) : Us(e);
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
var uo = NaN, ni = /^[-+]0x[0-9a-f]+$/i, oi = /^0b[01]+$/i, ri = /^0o[0-7]+$/i, ai = parseInt;
function fo(e) {
  if (typeof e == "number")
    return e;
  if (Xs(e))
    return uo;
  if (xn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ti(e);
  var n = oi.test(e);
  return n || ri.test(e) ? ai(e.slice(2), n ? 2 : 8) : ni.test(e) ? uo : +e;
}
var tn = function() {
  return gr.Date.now();
}, si = "Expected a function", ii = Math.max, li = Math.min;
function ci(e, t, n) {
  var o, r, a, s, i, l, c = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(si);
  t = fo(t) || 0, xn(n) && (u = !!n.leading, f = "maxWait" in n, a = f ? ii(fo(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
  function p(N) {
    var A = o, C = r;
    return o = r = void 0, c = N, s = e.apply(C, A), s;
  }
  function h(N) {
    return c = N, i = setTimeout(m, t), u ? p(N) : s;
  }
  function g(N) {
    var A = N - l, C = N - c, D = t - A;
    return f ? li(D, a - C) : D;
  }
  function y(N) {
    var A = N - l, C = N - c;
    return l === void 0 || A >= t || A < 0 || f && C >= a;
  }
  function m() {
    var N = tn();
    if (y(N))
      return P(N);
    i = setTimeout(m, g(N));
  }
  function P(N) {
    return i = void 0, d && o ? p(N) : (o = r = void 0, s);
  }
  function v() {
    i !== void 0 && clearTimeout(i), c = 0, o = l = r = i = void 0;
  }
  function x() {
    return i === void 0 ? s : P(tn());
  }
  function _() {
    var N = tn(), A = y(N);
    if (o = arguments, r = this, l = N, A) {
      if (i === void 0)
        return h(l);
      if (f)
        return clearTimeout(i), i = setTimeout(m, t), p(l);
    }
    return i === void 0 && (i = setTimeout(m, t)), s;
  }
  return _.cancel = v, _.flush = x, _;
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
var di = /* @__PURE__ */ Te('<div class="hexmap__labels svelte-ko8kvy"><!></div>'), fi = /* @__PURE__ */ Te('<div class="hexmap svelte-ko8kvy"><div><svg class="svelte-ko8kvy"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!><!><!><!><!><!></svg></div> <!></div>');
const hi = {
  hash: "svelte-ko8kvy",
  code: ".hexmap.svelte-ko8kvy {position:relative;width:100%;height:100%;position:relative;}.hexmap__labels.svelte-ko8kvy {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-ko8kvy svg:where(.svelte-ko8kvy) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-ko8kvy {position:relative;margin:0 auto;max-height:100%;}"
};
function yr(e, t) {
  ce(t, !0), $e(e, hi);
  let n = S(t, "config", 23, () => ({})), o = S(t, "layout", 23, () => ({})), r = S(t, "allocations", 23, () => ({})), a = S(t, "focuses", 23, () => ({})), s = S(t, "certainties", 23, () => ({})), i = S(t, "labelsToShow", 23, () => ({})), l = S(t, "showStateLabels", 7, !1), c = S(t, "showElectorateLabels", 7, !1), u = S(t, "showFocusedElectorateLabels", 7, !1), f = S(t, "isStaticLayout", 7, !1), d = S(t, "onClick", 7, ({ code: w }) => {
  }), p = S(t, "onHover", 7, ({ code: w }) => {
  }), h = S(t, "customViewbox", 7, null), g = S(t, "onViewboxChange", 7, ({ newViewbox: w }) => {
  }), y = S(t, "isInteractive", 7, !1), m = S(t, "firstPreferenceArrows", 7, "None"), P = S(t, "selectedElectorate", 7, null), v = Ae(void 0), x = Ae(0), _ = Ae(null), N = Ae(null), A = /* @__PURE__ */ U(() => Object.values(a()).some(Boolean)), C = /* @__PURE__ */ U(() => {
    const w = Object.values(r());
    return w.length !== 0 && w.some(Boolean);
  }), D = /* @__PURE__ */ U(() => {
    const w = Object.values(r());
    return w.length !== 0 && w.every(Boolean);
  });
  const W = o().viewbox, V = { easing: ps, duration: 1100 };
  let ne = new Ze(W[0], V), ke = new Ze(W[1], V), we = new Ze(W[2], V), Be = new Ze(W[3], V);
  Ge(() => {
    const [w, $, He, Oe] = h() || o().viewbox;
    ne.set(w), ke.set($), we.set(He), Be.set(Oe);
  }), Ge(() => {
    g()(o().viewbox);
  });
  let L = /* @__PURE__ */ U(() => {
    var w;
    return Array.from(((w = b(v)) == null ? void 0 : w.querySelectorAll("polygon.hex")) || []).filter(($) => $ instanceof SVGPolygonElement);
  });
  Ge(() => {
    const w = { ...r() }, $ = a(), He = s();
    b(L).forEach((Oe) => {
      const Fe = Oe.dataset.id;
      if (!Fe)
        return;
      const kr = w[Fe] || null;
      Oe.dataset.allocation = kr;
      const Or = b(A) ? $[Fe] || !1 : !0;
      Oe.dataset.focused = Or;
      const Rr = He[Fe] || null;
      Oe.dataset.certain = Rr;
    });
  }), Dn(() => {
    if (!b(v))
      return;
    const w = b(v).getBoundingClientRect();
    M(x, w.height / w.width);
  });
  let At = /* @__PURE__ */ U(() => ui({
    isInteractive: y(),
    onClick: d(),
    onHover: (w) => {
      M(N, re(w.code)), p()(w);
    }
  }));
  var ze = fi(), ft = F(ze);
  let Fn;
  var Et = F(ft), Wn = J(F(Et));
  at(Wn, 17, () => n().groups, rt, (w, $) => {
    dr(w, lr(() => b($), {
      get isStaticLayout() {
        return f();
      },
      get layout() {
        return o();
      },
      get offset() {
        return o().positions[b($).name];
      },
      get hasAllocations() {
        return b(C);
      },
      get hasAllAllocations() {
        return b(D);
      },
      get allocations() {
        return r();
      },
      get focuses() {
        return a();
      },
      get hasAnyFocuses() {
        return b(A);
      },
      get showElectorateLabels() {
        return c();
      },
      get showFocusedElectorateLabels() {
        return u();
      },
      get labelsToShow() {
        return i();
      }
    }));
  });
  var Vn = J(Wn);
  Rt(Vn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return b(_);
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
      return P();
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
      return b(N);
    },
    get layout() {
      return o();
    },
    type: "hover"
  });
  var Un = J(Gn);
  {
    var Pr = (w) => {
      var $ = wt(), He = mt($);
      at(He, 17, () => n().groups, rt, (Oe, Fe) => {
        vr(Oe, {
          get hexes() {
            return b(Fe).hexes;
          },
          get offset() {
            return o().positions[b(Fe).name];
          },
          get firstPreferenceArrows() {
            return m();
          }
        });
      }), H(w, $);
    };
    Ue(Un, (w) => {
      m() !== "None" && w(Pr);
    });
  }
  var Sr = J(Un);
  {
    var Cr = (w) => {
      var $ = di(), He = F($);
      fr(He, {
        get labels() {
          return o().labels;
        },
        get overlayLabels() {
          return o().overlayLabels;
        }
      }), B($), H(w, $);
    };
    Ue(Sr, (w) => {
      l() && w(Cr);
    });
  }
  B(Et), Mn(Et, (w) => M(v, w), () => b(v)), B(ft);
  var Lr = J(ft, 2);
  {
    var Tr = (w) => {
      pr(w, {
        get groups() {
          return n().groups;
        },
        get layout() {
          return o();
        },
        onChange: ($) => {
          M(_, re($));
        },
        get onClick() {
          return d();
        }
      });
    };
    Ue(Lr, (w) => {
      y() && w(Tr);
    });
  }
  return B(ze), De(
    (w, $) => {
      Fn = Xa(
        ft,
        Fn,
        {
          class: "hexmap__viz",
          ...b(At),
          [hn]: {
            "hexmap__viz--vertical": b(x) <= 1
          }
        },
        "svelte-ko8kvy"
      ), Ve(ft, "aspect-ratio", w), dt(Et, "viewBox", $);
    },
    [
      () => b(x) ? b(x).toFixed(3) : null,
      () => [
        ne.current,
        ke.current,
        we.current,
        Be.current
      ].join(" ")
    ]
  ), H(e, ze), ue({
    get config() {
      return n();
    },
    set config(w = {}) {
      n(w), E();
    },
    get layout() {
      return o();
    },
    set layout(w = {}) {
      o(w), E();
    },
    get allocations() {
      return r();
    },
    set allocations(w = {}) {
      r(w), E();
    },
    get focuses() {
      return a();
    },
    set focuses(w = {}) {
      a(w), E();
    },
    get certainties() {
      return s();
    },
    set certainties(w = {}) {
      s(w), E();
    },
    get labelsToShow() {
      return i();
    },
    set labelsToShow(w = {}) {
      i(w), E();
    },
    get showStateLabels() {
      return l();
    },
    set showStateLabels(w = !1) {
      l(w), E();
    },
    get showElectorateLabels() {
      return c();
    },
    set showElectorateLabels(w = !1) {
      c(w), E();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(w = !1) {
      u(w), E();
    },
    get isStaticLayout() {
      return f();
    },
    set isStaticLayout(w = !1) {
      f(w), E();
    },
    get onClick() {
      return d();
    },
    set onClick(w = ({ code: $ }) => {
    }) {
      d(w), E();
    },
    get onHover() {
      return p();
    },
    set onHover(w = ({ code: $ }) => {
    }) {
      p(w), E();
    },
    get customViewbox() {
      return h();
    },
    set customViewbox(w = null) {
      h(w), E();
    },
    get onViewboxChange() {
      return g();
    },
    set onViewboxChange(w = ({ newViewbox: $ }) => {
    }) {
      g(w), E();
    },
    get isInteractive() {
      return y();
    },
    set isInteractive(w = !1) {
      y(w), E();
    },
    get firstPreferenceArrows() {
      return m();
    },
    set firstPreferenceArrows(w = "None") {
      m(w), E();
    },
    get selectedElectorate() {
      return P();
    },
    set selectedElectorate(w = null) {
      P(w), E();
    }
  });
}
me(
  yr,
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
const pi = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, $n = {
  hashCodes: pi
};
let Lt = ir({
  allocated: {},
  uncertain: {}
});
var vi = /* @__PURE__ */ Te('<div class="style-root svelte-wcr7hy"><!></div>');
const gi = {
  hash: "svelte-wcr7hy",
  code: ".style-root.svelte-wcr7hy * {box-sizing:border-box;}.style-root.svelte-wcr7hy {height:100%;font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-alt-ptyblue: #cedcf2;--c-alt-ptyred: #f9d2d6;--c-alt-ptylightgreen: #dceecc;--c-alt-ptyblack: #e3e3e3;--c-alt-ptygreen: #cce2dd;--c-alt-ptygold: #f5e7cc;--c-alt-ptybrown: #e6dbd9;--c-alt-ptylightblue: #cfe6ec;--c-alt-ptyorange: #f4dccc;--c-alt-ptypurple: #e9def0;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-empty: #f1f1f1;--a-empty-border: black;--c-empty-state-outline: black;--c-state-outline: #949494;--a-null: #f1f1f1;--a-null-border: #fff;--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-CA: var(--c-ptyblack);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--u-ALP: var(--c-alt-ptyred);--u-CA: var(--c-alt-ptyblack);--u-CLP: var(--c-alt-ptygold);--u-GRN: var(--c-alt-ptylightgreen);--u-IND: var(--c-alt-ptyblack);--u-KAP: var(--c-alt-ptybrown);--u-LIB: var(--c-alt-ptyblue);--u-LNP: var(--c-alt-ptyblue);--u-NAT: var(--c-alt-ptygreen);--u-ONP: var(--c-alt-ptyorange);--u-OTH: var(--c-alt-ptyblack);--u-PUP: var(--c-alt-ptygold);--c-filled-border: #fff;}"
};
function mr(e, t) {
  ce(t, !0), $e(e, gi);
  const [n, o] = as(), r = () => os(Lt, "$partyColours", n);
  let a = S(t, "children", 7), s = S(t, "rootEl", 15);
  Dn(() => {
    if (!s())
      return;
    const u = window.getComputedStyle(s());
    rs(Lt, { allocated: {}, uncertain: {} }), Object.keys($n.hashCodes).forEach((d) => {
      so(Lt, fe(r).allocated[d] = u.getPropertyValue(`--a-${d}`), fe(r)), so(Lt, fe(r).uncertain[d] = u.getPropertyValue(`--u-${d}`), fe(r));
    });
  });
  var i = vi(), l = F(i);
  tr(l, () => a() ?? q), B(i), Mn(i, (u) => s(u), () => s()), H(e, i);
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
me(mr, { children: {}, rootEl: {} }, [], [], !0);
const xi = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.0035, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 33.75, top: 30.75, width: 8, name: "NT" }, { left: 65.25, top: 21.5, width: 8, name: "QLD" }, { left: 57.75, top: 44.25, width: 8, name: "NSW" }, { left: 67.5, top: 57.75, width: 8, name: "ACT" }, { left: 58, top: 67.25, width: 8, name: "VIC" }, { left: 57.75, top: 86.25, width: 8, name: "TAS" }, { left: 34, top: 48.75, width: 8, name: "SA" }, { left: 24.5, top: 53.25, width: 8, name: "WA" }], overlayLabels: !0 }, yi = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.5, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 71, top: 63.5, width: 8, name: "ACT" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, mi = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, wi = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, _i = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, bi = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Ni = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, Ai = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, Ei = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, Pi = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Si = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Ci = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Li = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Ti = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, ki = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, Oi = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, Ri = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, Ii = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, Mi = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, wr = {
  COUNTRY: xi,
  EXPLODED: yi,
  EXPLODED_STATES_ONLY: mi,
  GRID: wi,
  ACT: _i,
  NSW: bi,
  NT: Ni,
  QLD: Ai,
  SA: Ei,
  TAS: Pi,
  VIC: Si,
  WA: Ci,
  ACT_NT: Li,
  NSW_QLD: Ti,
  NSW_VIC: ki,
  QLD_VIC: Oi,
  QLD_WA: Ri,
  QLD_NSW_VIC: Ii,
  SA_TAS_WA: Mi
}, Di = 291, $i = 200, Bi = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park.","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart.","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"River.","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New.","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Banks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lille","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long.","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More.","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Forde","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Corio","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wills","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), Bn = {
  svgWidth: Di,
  svgHeight: $i,
  groups: Bi
};
function _r(e) {
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
const ho = ["number", "boolean", "enum", "string", "custom"];
async function Hi({ schema: e, data: t }) {
  const n = _r(e), o = {}, r = Object.entries(n).map(
    async ([a, s]) => {
      const { type: i, key: l, values: c, defaultValue: u, codec: f } = s;
      if (!ho.includes(i))
        throw new Error(
          `Unknown type "${i}", must be one of ${ho}`
        );
      let d = t[l || a];
      if (typeof d > "u") {
        typeof u < "u" && (o[a] = u);
        return;
      }
      if (f && (d = await f.decode(d)), i === "number" && (d = Number(d)), i === "boolean" && (d = Number(d) === 1), i === "enum") {
        const p = c[d];
        typeof p > "u" ? d = u : d = p;
      }
      o[a] = d;
    }
  );
  return await Promise.all(r), o;
}
async function Fi({ schema: e, data: t }) {
  const n = _r(e), o = {}, r = Object.keys(t).filter((s) => !e[s]);
  if (r.length)
    throw console.error(`Unknown keys found in data: ${r.join()}`), new Error("Unknown keys found in data");
  const a = Object.entries(n).map(
    async ([s, i]) => {
      const { type: l, key: c, values: u, defaultValue: f, codec: d } = i, p = c || s, h = t[s];
      if (typeof h > "u" || h === f) return;
      let g = h;
      if (l === "enum") {
        const y = u.indexOf(h);
        if (y === -1)
          throw console.error(`Enum value "${h}" not found in ${u}`), new Error("Invalid enum value");
        g = y;
      }
      d && (g = await d.encode(g)), l === "boolean" && (g = g ? 1 : 0), o[p] = g;
    }
  );
  return await Promise.all(a), o;
}
function Wi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nn, po;
function Vi() {
  if (po) return nn;
  po = 1;
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
      for (var g = 0, y = 0, m = 0, P = h.length; m !== P && h[m] === 0; )
        m++, g++;
      for (var v = (P - m) * u + 1 >>> 0, x = new Uint8Array(v); m !== P; ) {
        for (var _ = h[m], N = 0, A = v - 1; (_ !== 0 || N < y) && A !== -1; A--, N++)
          _ += 256 * x[A] >>> 0, x[A] = _ % i >>> 0, _ = _ / i >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        y = N, m++;
      }
      for (var C = v - y; C !== v && x[C] === 0; )
        C++;
      for (var D = l.repeat(g); C < v; ++C)
        D += t.charAt(x[C]);
      return D;
    }
    function d(h) {
      if (typeof h != "string")
        throw new TypeError("Expected String");
      if (h.length === 0)
        return new Uint8Array();
      for (var g = 0, y = 0, m = 0; h[g] === l; )
        y++, g++;
      for (var P = (h.length - g) * c + 1 >>> 0, v = new Uint8Array(P); h[g]; ) {
        var x = n[h.charCodeAt(g)];
        if (x === 255)
          return;
        for (var _ = 0, N = P - 1; (x !== 0 || _ < m) && N !== -1; N--, _++)
          x += i * v[N] >>> 0, v[N] = x % 256 >>> 0, x = x / 256 >>> 0;
        if (x !== 0)
          throw new Error("Non-zero carry");
        m = _, g++;
      }
      for (var A = P - m; A !== P && v[A] === 0; )
        A++;
      for (var C = new Uint8Array(y + (P - A)), D = y; A !== P; )
        C[D++] = v[A++];
      return C;
    }
    function p(h) {
      var g = d(h);
      if (g)
        return g;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: f,
      decodeUnsafe: d,
      decode: p
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
function Nr(e) {
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
  const n = Nr(e);
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
async function go(e, { maxBits: t }) {
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
    decode: async (t) => go(Nr(t), { maxBits: e })
  } : {
    encode: (t) => vo(t, { maxBits: e }),
    decode: (t) => go(t, { maxBits: e })
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
    var f = u.match(/^([A-Z]+)([0-9a-z]*$)/) || [], d = f[1], p = f[2];
    if (typeof d != "string" || typeof p != "string")
      throw new Error("Error reading key/value pair");
    var h = o[d.toLowerCase()] || d.toLowerCase(), g = i.includes(h) ? p : parseFloat(p).toString() === p ? parseFloat(p) : p === "true" || p === "yes" ? !0 : p === "false" || p === "no" ? !1 : p === "" ? null : p;
    return { key: h, value: g };
  }).reduce(
    /** @param {Object<string,any>} obj */
    function(u, f, d, p) {
      var h = f.key, g = f.value;
      if (typeof u[h] < "u")
        return u;
      var y = p.filter(function(v) {
        var x = v.key;
        return x === h;
      }).map(function(v) {
        return v.value;
      }), m = a.includes(h) || y.length > 1;
      if (m) {
        var P = new Set(y.map(function(v) {
          return typeof v;
        }));
        if (P.size > 1)
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
var xo = function(e) {
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
      return [xo(s).toUpperCase(), xo(l)].join("");
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
  const t = ir(
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
}, st = Bn.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), il = Object.values(st).reduce((e, t) => (e[t.id] = t, e), {});
Bn.groups;
const _n = "q", ll = "x", yo = Xi({ delineator: _n }), Ar = vs($n.hashCodes);
if (Ar[_n] || ll === _n)
  throw new Error("Can not use delineator in allocation map");
function Er(e) {
  return st.map(({ id: t }) => e[t]);
}
function cl(e) {
  return st.reduce((t, { id: n }, o) => (t[n] = e[o] ?? null, t), {});
}
const mo = Ji({ maxBits: 4 }), on = {
  encode: async function(e) {
    const t = Er(e);
    return mo.encode(t);
  },
  decode: async function(e) {
    const t = await mo.decode(e);
    return cl(t);
  }
}, rn = Object.freeze(
  st.reduce((e, t) => (e[t.id] = null, e), {})
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
    values: Object.keys(wr)
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
        const t = Object.entries(e).reduce((r, [a, s]) => (r[a] = $n.hashCodes[s] || "x", r), {}), n = Er(t).map((r) => r ?? "x").join("");
        return await yo.encode(n);
      },
      decode: async (e) => (await yo.decode(e).catch((o) => (console.error("decoding string failed", e, o), ""))).split("").reduce((o, r, a) => {
        var i;
        const s = (i = st[a]) == null ? void 0 : i.id;
        if (s)
          return o[s] = Ar[String(r)] || null, o;
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
      st.reduce((e, t) => (e[t.id] = !0, e), {})
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
  }
}, wo = rl(ul);
wo.subscribe((e) => {
  e && e.version !== 1 && wo.set({ ...e, version: 1 });
});
function dl(e, t) {
  ce(t, !0);
  let n = S(t, "allocations", 23, () => ({})), o = S(t, "certainties", 23, () => ({})), r = S(t, "focuses", 23, () => ({})), a = S(t, "showStateLabels", 7, !1), s = S(t, "showElectorateLabels", 7, !1), i = S(t, "layout", 7, "COUNTRY"), l = S(t, "selectedElectorate", 7, null), c = S(t, "customViewbox", 7, null), u = S(t, "onClick", 7, () => {
  }), f = S(t, "onHover", 7, () => {
  }), d = S(t, "onApi", 7, () => {
  }), p = S(t, "isStaticLayout", 7, !0), h = S(t, "isInteractive", 7, !0), g = Ae(void 0), y = /* @__PURE__ */ U(() => wr[i()]);
  function m(v, x, _) {
    const N = _.getScreenCTM(), A = _.createSVGPoint();
    A.x = v, A.y = x;
    const C = A.matrixTransform(N);
    return [C.x, C.y].map(Number);
  }
  function P(v) {
    const x = il[v], _ = b(y).positions[x == null ? void 0 : x.group];
    if (!(b(g) instanceof HTMLDivElement))
      return;
    const N = b(g).querySelector("svg");
    if (!x || !_ || !N)
      throw new Error(`Could not find hexagon with id ${v}`);
    const A = [-0.5, -1], [C, D] = jt(
      [
        _[0] + A[0],
        _[1] + A[1]
      ],
      ""
    ).map(Number), W = Number(x.coordPx[0] + C), V = Number(x.coordPx[1] + D), [ne, ke] = m(W, V, N);
    return {
      code: v,
      screenCoord: [ne, ke],
      svgCoord: [W, V]
    };
  }
  return Ge(() => {
    d() && d()({ getHex: P });
  }), Mn(
    mr(e, {
      children: (v, x) => {
        yr(v, {
          config: Bn,
          get layout() {
            return b(y);
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
            return p();
          },
          get isInteractive() {
            return h();
          }
        });
      },
      $$slots: { default: !0 }
    }),
    (v) => M(g, re(v)),
    () => b(g)
  ), ue({
    get allocations() {
      return n();
    },
    set allocations(v = {}) {
      n(v), E();
    },
    get certainties() {
      return o();
    },
    set certainties(v = {}) {
      o(v), E();
    },
    get focuses() {
      return r();
    },
    set focuses(v = {}) {
      r(v), E();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(v = !1) {
      a(v), E();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(v = !1) {
      s(v), E();
    },
    get layout() {
      return i();
    },
    set layout(v = "COUNTRY") {
      i(v), E();
    },
    get selectedElectorate() {
      return l();
    },
    set selectedElectorate(v = null) {
      l(v), E();
    },
    get customViewbox() {
      return c();
    },
    set customViewbox(v = null) {
      c(v), E();
    },
    get onClick() {
      return u();
    },
    set onClick(v = () => {
    }) {
      u(v), E();
    },
    get onHover() {
      return f();
    },
    set onHover(v = () => {
    }) {
      f(v), E();
    },
    get onApi() {
      return d();
    },
    set onApi(v = () => {
    }) {
      d(v), E();
    },
    get isStaticLayout() {
      return p();
    },
    set isStaticLayout(v = !0) {
      p(v), E();
    },
    get isInteractive() {
      return h();
    },
    set isInteractive(v = !0) {
      h(v), E();
    }
  });
}
customElements.define("abcnews-hexmap", me(
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
  dl as H,
  S as a,
  at as b,
  dt as c,
  H as d,
  st as e,
  ue as f,
  E as g,
  jt as h,
  as as i,
  me as j,
  wt as k,
  mt as l,
  Ue as m,
  Nt as n,
  Dn as o,
  ce as p,
  os as q,
  B as r,
  rs as s,
  De as t,
  Ge as u,
  b as v,
  ir as w,
  F as x,
  Ve as y,
  rt as z
};
