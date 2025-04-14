var Rr = Object.defineProperty;
var zn = (e) => {
  throw TypeError(e);
};
var Ir = (e, t, n) => t in e ? Rr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ie = (e, t, n) => Ir(e, typeof t != "symbol" ? t + "" : t, n), qn = (e, t, n) => t.has(e) || zn("Cannot " + n);
var B = (e, t, n) => (qn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), He = (e, t, n) => t.has(e) ? zn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ft = (e, t, n, o) => (qn(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
const Mr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Mr);
const bn = 1, Nn = 2, mo = 4, Br = 8, Dr = 16, Fr = 1, $r = 4, Hr = 8, Wr = 16, Vr = 4, yo = 1, zr = 2, wo = "[", An = "[!", En = "]", et = {}, U = Symbol(), Gn = !1, de = 2, _o = 4, zt = 8, qt = 16, ke = 32, it = 64, Rt = 128, ae = 256, It = 512, Q = 1024, Re = 2048, lt = 4096, Ce = 8192, Gt = 16384, bo = 32768, ct = 65536, qr = 1 << 19, No = 1 << 20, tt = Symbol("$state"), Pn = Symbol("legacy props"), Gr = Symbol("");
var Sn = Array.isArray, jr = Array.prototype.indexOf, Cn = Array.from, Mt = Object.keys, gt = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, Ur = Object.getOwnPropertyDescriptors, Kr = Object.prototype, Yr = Array.prototype, Ao = Object.getPrototypeOf;
function Ze(e) {
  return typeof e == "function";
}
const pe = () => {
};
function Eo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let xt = [], sn = [];
function Po() {
  var e = xt;
  xt = [], Eo(e);
}
function Qr() {
  var e = sn;
  sn = [], Eo(e);
}
function ut(e) {
  xt.length === 0 && queueMicrotask(Po), xt.push(e);
}
function jn() {
  xt.length > 0 && Po(), sn.length > 0 && Qr();
}
function So(e) {
  return e === this.v;
}
function Co(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xr(e, t) {
  return e !== t;
}
function Ln(e) {
  return !Co(e, this.v);
}
function Zr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Jr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ea(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ta() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function na() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function oa(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ra() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function aa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function sa() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function ia() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let la = !1;
function X(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: So,
    rv: 0,
    wv: 0
  };
  return n;
}
function Be(e) {
  return /* @__PURE__ */ ca(X(e));
}
// @__NO_SIDE_EFFECTS__
function On(e, t = !1) {
  const n = X(e);
  return t || (n.equals = Ln), n;
}
// @__NO_SIDE_EFFECTS__
function ca(e) {
  return M !== null && !le && M.f & de && (me === null ? ha([e]) : me.push(e)), e;
}
function $(e, t) {
  return M !== null && !le && Uo() && M.f & (de | qt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (me === null || !me.includes(e)) && ia(), ln(e, t);
}
function ln(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Fo(), Lo(e, Re), I !== null && I.f & Q && !(I.f & (ke | it)) && (Ae === null ? va([e]) : Ae.push(e))), t;
}
function Lo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var o = n.length, r = 0; r < o; r++) {
      var a = n[r], s = a.f;
      s & Re || (_e(a, t), s & (Q | ae) && (s & de ? Lo(
        /** @type {Derived} */
        a,
        lt
      ) : Kt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  var t = de | Re, n = M !== null && M.f & de ? (
    /** @type {Derived} */
    M
  ) : null;
  return I === null || n !== null && n.f & ae ? t |= ae : I.f |= No, {
    ctx: Z,
    deps: null,
    effects: null,
    equals: So,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? I
  };
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  const t = /* @__PURE__ */ Y(e);
  return t.equals = Ln, t;
}
function Oo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      fe(
        /** @type {Effect} */
        t[n]
      );
  }
}
function da(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & de))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function fa(e) {
  var t, n = I;
  we(da(e));
  try {
    Oo(e), t = Ho(e);
  } finally {
    we(n);
  }
  return t;
}
function To(e) {
  var t = fa(e), n = (De || e.f & ae) && e.deps !== null ? lt : Q;
  _e(e, n), e.equals(t) || (e.v = t, e.wv = Fo());
}
function jt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function ce(e) {
  T = e;
}
let k;
function se(e) {
  if (e === null)
    throw jt(), et;
  return k = e;
}
function $e() {
  return se(
    /** @type {TemplateNode} */
    /* @__PURE__ */ be(k)
  );
}
function D(e) {
  if (T) {
    if (/* @__PURE__ */ be(k) !== null)
      throw jt(), et;
    k = e;
  }
}
function Un(e = 1) {
  if (T) {
    for (var t = e, n = k; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ be(n);
    k = n;
  }
}
function cn() {
  for (var e = 0, t = k; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === En) {
        if (e === 0) return t;
        e -= 1;
      } else (n === wo || n === An) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(t)
    );
    t.remove(), t = o;
  }
}
function ge(e, t = null, n) {
  if (typeof e != "object" || e === null || tt in e)
    return e;
  const o = Ao(e);
  if (o !== Kr && o !== Yr)
    return e;
  var r = /* @__PURE__ */ new Map(), a = Sn(e), s = X(0);
  a && r.set("length", X(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ra();
        var u = r.get(l);
        return u === void 0 ? (u = X(f.value), r.set(l, u)) : $(u, ge(f.value, i)), !0;
      },
      deleteProperty(c, l) {
        var f = r.get(l);
        if (f === void 0)
          l in c && r.set(l, X(U));
        else {
          if (a && typeof l == "string") {
            var u = (
              /** @type {Source<number>} */
              r.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < u.v && $(u, d);
          }
          $(f, U), Kn(s);
        }
        return !0;
      },
      get(c, l, f) {
        var h;
        if (l === tt)
          return e;
        var u = r.get(l), d = l in c;
        if (u === void 0 && (!d || (h = Le(c, l)) != null && h.writable) && (u = X(ge(d ? c[l] : U, i)), r.set(l, u)), u !== void 0) {
          var v = b(u);
          return v === U ? void 0 : v;
        }
        return Reflect.get(c, l, f);
      },
      getOwnPropertyDescriptor(c, l) {
        var f = Reflect.getOwnPropertyDescriptor(c, l);
        if (f && "value" in f) {
          var u = r.get(l);
          u && (f.value = b(u));
        } else if (f === void 0) {
          var d = r.get(l), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== U)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(c, l) {
        var v;
        if (l === tt)
          return !0;
        var f = r.get(l), u = f !== void 0 && f.v !== U || Reflect.has(c, l);
        if (f !== void 0 || I !== null && (!u || (v = Le(c, l)) != null && v.writable)) {
          f === void 0 && (f = X(u ? ge(c[l], i) : U), r.set(l, f));
          var d = b(f);
          if (d === U)
            return !1;
        }
        return u;
      },
      set(c, l, f, u) {
        var m;
        var d = r.get(l), v = l in c;
        if (a && l === "length")
          for (var h = f; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var g = r.get(h + "");
            g !== void 0 ? $(g, U) : h in c && (g = X(U), r.set(h + "", g));
          }
        d === void 0 ? (!v || (m = Le(c, l)) != null && m.writable) && (d = X(void 0), $(d, ge(f, i)), r.set(l, d)) : (v = d.v !== U, $(d, ge(f, i)));
        var y = Reflect.getOwnPropertyDescriptor(c, l);
        if (y != null && y.set && y.set.call(u, f), !v) {
          if (a && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= _.v && $(_, N + 1);
          }
          Kn(s);
        }
        return !0;
      },
      ownKeys(c) {
        b(s);
        var l = Reflect.ownKeys(c).filter((d) => {
          var v = r.get(d);
          return v === void 0 || v.v !== U;
        });
        for (var [f, u] of r)
          u.v !== U && !(f in c) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        aa();
      }
    }
  );
}
function Kn(e, t = 1) {
  $(e, e.v + t);
}
var Yn, ko, Ro, Io, Mo;
function un() {
  if (Yn === void 0) {
    Yn = window, ko = document, Ro = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Io = Le(t, "firstChild").get, Mo = Le(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ot(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function q(e) {
  return Io.call(e);
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return Mo.call(e);
}
function W(e, t) {
  if (!T)
    return /* @__PURE__ */ q(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ q(k)
  );
  if (n === null)
    n = k.appendChild(ot());
  else if (t && n.nodeType !== 3) {
    var o = ot();
    return n == null || n.before(o), se(o), o;
  }
  return se(n), n;
}
function Ve(e, t) {
  if (!T) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ q(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ be(n) : n;
  }
  return k;
}
function ne(e, t = 1, n = !1) {
  let o = T ? k : e;
  for (var r; t--; )
    r = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ be(o);
  if (!T)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (n && a !== 3) {
    var s = ot();
    return o === null ? r == null || r.after(s) : o.before(s), se(s), s;
  }
  return se(o), /** @type {TemplateNode} */
  o;
}
function Bo(e) {
  e.textContent = "";
}
let Ct = !1, Bt = !1, Dt = null, Lt = !1, Tn = !1;
function Qn(e) {
  Tn = e;
}
let pt = [];
let M = null, le = !1;
function ye(e) {
  M = e;
}
let I = null;
function we(e) {
  I = e;
}
let me = null;
function ha(e) {
  me = e;
}
let K = null, te = 0, Ae = null;
function va(e) {
  Ae = e;
}
let Do = 1, Ft = 0, De = !1;
function Fo() {
  return ++Do;
}
function _t(e) {
  var u;
  var t = e.f;
  if (t & Re)
    return !0;
  if (t & lt) {
    var n = e.deps, o = (t & ae) !== 0;
    if (n !== null) {
      var r, a, s = (t & It) !== 0, i = o && I !== null && !De, c = n.length;
      if (s || i) {
        var l = (
          /** @type {Derived} */
          e
        ), f = l.parent;
        for (r = 0; r < c; r++)
          a = n[r], (s || !((u = a == null ? void 0 : a.reactions) != null && u.includes(l))) && (a.reactions ?? (a.reactions = [])).push(l);
        s && (l.f ^= It), i && f !== null && !(f.f & ae) && (l.f ^= ae);
      }
      for (r = 0; r < c; r++)
        if (a = n[r], _t(
          /** @type {Derived} */
          a
        ) && To(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || I !== null && !De) && _e(e, Q);
  }
  return !1;
}
function pa(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Rt)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Rt;
      }
    n = n.parent;
  }
  throw Ct = !1, e;
}
function ga(e) {
  return (e.f & Gt) === 0 && (e.parent === null || (e.parent.f & Rt) === 0);
}
function Ut(e, t, n, o) {
  if (Ct) {
    if (n === null && (Ct = !1), ga(t))
      throw e;
    return;
  }
  n !== null && (Ct = !0);
  {
    pa(e, t);
    return;
  }
}
function $o(e, t, n = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var r = 0; r < o.length; r++) {
      var a = o[r];
      a.f & de ? $o(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? _e(a, Re) : a.f & Q && _e(a, lt), Kt(
        /** @type {Effect} */
        a
      ));
    }
}
function Ho(e) {
  var v;
  var t = K, n = te, o = Ae, r = M, a = De, s = me, i = Z, c = le, l = e.f;
  K = /** @type {null | Value[]} */
  null, te = 0, Ae = null, De = (l & ae) !== 0 && (le || !Lt || M === null), M = l & (ke | it) ? null : e, me = null, Xn(e.ctx), le = !1, Ft++;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), u = e.deps;
    if (K !== null) {
      var d;
      if ($t(e, te), u !== null && te > 0)
        for (u.length = te + K.length, d = 0; d < K.length; d++)
          u[te + d] = K[d];
      else
        e.deps = u = K;
      if (!De)
        for (d = te; d < u.length; d++)
          ((v = u[d]).reactions ?? (v.reactions = [])).push(e);
    } else u !== null && te < u.length && ($t(e, te), u.length = te);
    if (Uo() && Ae !== null && !le && u !== null && !(e.f & (de | lt | Re)))
      for (d = 0; d < /** @type {Source[]} */
      Ae.length; d++)
        $o(
          Ae[d],
          /** @type {Effect} */
          e
        );
    return r !== null && Ft++, f;
  } finally {
    K = t, te = n, Ae = o, M = r, De = a, me = s, Xn(i), le = c;
  }
}
function xa(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var o = jr.call(n, e);
    if (o !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[o] = n[r], n.pop());
    }
  }
  n === null && t.f & de && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (K === null || !K.includes(t)) && (_e(t, lt), t.f & (ae | It) || (t.f ^= It), Oo(
    /** @type {Derived} **/
    t
  ), $t(
    /** @type {Derived} **/
    t,
    0
  ));
}
function $t(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var o = t; o < n.length; o++)
      xa(e, n[o]);
}
function kn(e) {
  var t = e.f;
  if (!(t & Gt)) {
    _e(e, Q);
    var n = I, o = Z, r = Lt;
    I = e, Lt = !0;
    try {
      t & qt ? Sa(e) : zo(e), Vo(e);
      var a = Ho(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Do;
      var s = e.deps, i;
      Gn && la && e.f & Re;
    } catch (c) {
      Ut(c, e, n, o || e.ctx);
    } finally {
      Lt = r, I = n;
    }
  }
}
function ma() {
  try {
    ta();
  } catch (e) {
    if (Dt !== null)
      Ut(e, Dt, null);
    else
      throw e;
  }
}
function Wo() {
  try {
    for (var e = 0; pt.length > 0; ) {
      e++ > 1e3 && ma();
      var t = pt, n = t.length;
      pt = [];
      for (var o = 0; o < n; o++) {
        var r = t[o];
        r.f & Q || (r.f ^= Q);
        var a = wa(r);
        ya(a);
      }
    }
  } finally {
    Bt = !1, Dt = null;
  }
}
function ya(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var o = e[n];
      if (!(o.f & (Gt | Ce)))
        try {
          _t(o) && (kn(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? qo(o) : o.fn = null));
        } catch (r) {
          Ut(r, o, null, o.ctx);
        }
    }
}
function Kt(e) {
  Bt || (Bt = !0, queueMicrotask(Wo));
  for (var t = Dt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (it | ke)) {
      if (!(n & Q)) return;
      t.f ^= Q;
    }
  }
  pt.push(t);
}
function wa(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var o = n.f, r = (o & ke) !== 0, a = r && (o & Q) !== 0, s = n.next;
    if (!a && !(o & Ce)) {
      if (o & _o)
        t.push(n);
      else if (r)
        n.f ^= Q;
      else {
        var i = M;
        try {
          M = n, _t(n) && kn(n);
        } catch (f) {
          Ut(f, n, null, n.ctx);
        } finally {
          M = i;
        }
      }
      var c = n.first;
      if (c !== null) {
        n = c;
        continue;
      }
    }
    if (s === null) {
      let f = n.parent;
      for (; f !== null; ) {
        if (e === f)
          break e;
        var l = f.next;
        if (l !== null) {
          n = l;
          continue e;
        }
        f = f.parent;
      }
    }
    n = s;
  }
  return t;
}
function E(e) {
  var t;
  for (jn(); pt.length > 0; )
    Bt = !0, Wo(), jn();
  return (
    /** @type {T} */
    t
  );
}
function b(e) {
  var t = e.f, n = (t & de) !== 0;
  if (M !== null && !le) {
    me !== null && me.includes(e) && sa();
    var o = M.deps;
    e.rv < Ft && (e.rv = Ft, K === null && o !== null && o[te] === e ? te++ : K === null ? K = [e] : (!De || !K.includes(e)) && K.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), a = r.parent;
    a !== null && !(a.f & ae) && (r.f ^= ae);
  }
  return n && (r = /** @type {Derived} */
  e, _t(r) && To(r)), e.v;
}
function mt(e) {
  var t = le;
  try {
    return le = !0, e();
  } finally {
    le = t;
  }
}
const _a = -7169;
function _e(e, t) {
  e.f = e.f & _a | t;
}
function ba(e) {
  I === null && M === null && ea(), M !== null && M.f & ae && I === null && Jr(), Tn && Zr();
}
function Na(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function je(e, t, n, o = !0) {
  var r = (e & it) !== 0, a = I, s = {
    ctx: Z,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Re,
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
      kn(s), s.f |= bo;
    } catch (l) {
      throw fe(s), l;
    }
  else t !== null && Kt(s);
  var i = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (No | Rt)) === 0;
  if (!i && !r && o && (a !== null && Na(s, a), M !== null && M.f & de)) {
    var c = (
      /** @type {Derived} */
      M
    );
    (c.effects ?? (c.effects = [])).push(s);
  }
  return s;
}
function Aa(e) {
  const t = je(zt, null, !1);
  return _e(t, Q), t.teardown = e, t;
}
function ze(e) {
  ba();
  var t = I !== null && (I.f & ke) !== 0 && Z !== null && !Z.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Z
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: I,
      reaction: M
    });
  } else {
    var o = Yt(e);
    return o;
  }
}
function Ea(e) {
  const t = je(it, e, !0);
  return () => {
    fe(t);
  };
}
function Pa(e) {
  const t = je(it, e, !0);
  return (n = {}) => new Promise((o) => {
    n.outro ? rt(t, () => {
      fe(t), o(void 0);
    }) : (fe(t), o(void 0));
  });
}
function Yt(e) {
  return je(_o, e, !1);
}
function Rn(e) {
  return je(zt, e, !0);
}
function Oe(e, t = [], n = Y) {
  const o = t.map(n);
  return Ue(() => e(...o.map(b)));
}
function Ue(e, t = 0) {
  return je(zt | qt | t, e, !0);
}
function Te(e, t = !0) {
  return je(zt | ke, e, !0, t);
}
function Vo(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Tn, o = M;
    Qn(!0), ye(null);
    try {
      t.call(null);
    } finally {
      Qn(n), ye(o);
    }
  }
}
function zo(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var o = n.next;
    fe(n, t), n = o;
  }
}
function Sa(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & ke || fe(t), t = n;
  }
}
function fe(e, t = !0) {
  var n = !1;
  if ((t || e.f & qr) && e.nodes_start !== null) {
    for (var o = e.nodes_start, r = e.nodes_end; o !== null; ) {
      var a = o === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(o)
      );
      o.remove(), o = a;
    }
    n = !0;
  }
  zo(e, t && !n), $t(e, 0), _e(e, Gt);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  Vo(e);
  var i = e.parent;
  i !== null && i.first !== null && qo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function qo(e) {
  var t = e.parent, n = e.prev, o = e.next;
  n !== null && (n.next = o), o !== null && (o.prev = n), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = n));
}
function rt(e, t) {
  var n = [];
  In(e, n, !0), Go(n, () => {
    fe(e), t && t();
  });
}
function Go(e, t) {
  var n = e.length;
  if (n > 0) {
    var o = () => --n || t();
    for (var r of e)
      r.out(o);
  } else
    t();
}
function In(e, t, n) {
  if (!(e.f & Ce)) {
    if (e.f ^= Ce, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var r = o.next, a = (o.f & ct) !== 0 || (o.f & ke) !== 0;
      In(o, t, a ? n : !1), o = r;
    }
  }
}
function Ht(e) {
  jo(e, !0);
}
function jo(e, t) {
  if (e.f & Ce) {
    e.f ^= Ce, e.f & Q || (e.f ^= Q), _t(e) && (_e(e, Re), Kt(e));
    for (var n = e.first; n !== null; ) {
      var o = n.next, r = (n.f & ct) !== 0 || (n.f & ke) !== 0;
      jo(n, r ? t : !1), n = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Ca(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Z = null;
function Xn(e) {
  Z = e;
}
function he(e, t = !1, n) {
  Z = {
    p: Z,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ve(e) {
  const t = Z;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = I, o = M;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var a = s[r];
          we(a.effect), ye(a.reaction), Yt(a.fn);
        }
      } finally {
        we(n), ye(o);
      }
    }
    Z = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Uo() {
  return !0;
}
function La(e) {
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
function Ta(e) {
  return Oa.includes(e);
}
const ka = {
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
function Ra(e) {
  return e = e.toLowerCase(), ka[e] ?? e;
}
const Ia = ["touchstart", "touchmove"];
function Ma(e) {
  return Ia.includes(e);
}
function Ba(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ut(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Ko(e) {
  var t = M, n = I;
  ye(null), we(null);
  try {
    return e();
  } finally {
    ye(t), we(n);
  }
}
const Yo = /* @__PURE__ */ new Set(), dn = /* @__PURE__ */ new Set();
function Da(e, t, n, o = {}) {
  function r(a) {
    if (o.capture || vt.call(t, a), !a.cancelBubble)
      return Ko(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
    t.addEventListener(e, r, o);
  }) : t.addEventListener(e, r, o), r;
}
function Qo(e) {
  for (var t = 0; t < e.length; t++)
    Yo.add(e[t]);
  for (var n of dn)
    n(e);
}
function vt(e) {
  var N;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, r = ((N = e.composedPath) == null ? void 0 : N.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var c = r.indexOf(i);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = r.indexOf(t);
    if (l === -1)
      return;
    c <= l && (s = c);
  }
  if (a = /** @type {Element} */
  r[s] || e.target, a !== t) {
    gt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var f = M, u = I;
    ye(null), we(null);
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
              var [y, ..._] = g;
              y.apply(a, [e, ..._]);
            } else
              g.call(a, e);
        } catch (m) {
          d ? v.push(m) : d = m;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (d) {
        for (let m of v)
          queueMicrotask(() => {
            throw m;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ye(f), we(u);
    }
  }
}
function Mn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ue(e, t) {
  var n = (
    /** @type {Effect} */
    I
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  var n = (t & yo) !== 0, o = (t & zr) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (T)
      return ue(k, null), k;
    r === void 0 && (r = Mn(a ? e : "<!>" + e), n || (r = /** @type {Node} */
    /* @__PURE__ */ q(r)));
    var s = (
      /** @type {TemplateNode} */
      o || Ro ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ q(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ue(i, c);
    } else
      ue(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ke(e, t, n = "svg") {
  var o = !e.startsWith("<!>"), r = (t & yo) !== 0, a = `<${n}>${o ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (T)
      return ue(k, null), k;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        Mn(a)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ q(i)
      );
      if (r)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ q(c); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ q(c)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ q(c);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ q(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      ue(f, u);
    } else
      ue(l, l);
    return l;
  };
}
function at() {
  if (T)
    return ue(k, null), k;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ot();
  return e.append(t, n), ue(t, n), e;
}
function H(e, t) {
  if (T) {
    I.nodes_end = k, $e();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let fn = !0;
function yt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Xo(e, t) {
  return Zo(e, t);
}
function Fa(e, t) {
  un(), t.intro = t.intro ?? !1;
  const n = t.target, o = T, r = k;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ q(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== wo); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ be(a);
    if (!a)
      throw et;
    ce(!0), se(
      /** @type {Comment} */
      a
    ), $e();
    const s = Zo(e, { ...t, anchor: a });
    if (k === null || k.nodeType !== 8 || /** @type {Comment} */
    k.data !== En)
      throw jt(), et;
    return ce(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === et)
      return t.recover === !1 && na(), un(), Bo(n), ce(!1), Xo(e, t);
    throw s;
  } finally {
    ce(o), se(r);
  }
}
const Qe = /* @__PURE__ */ new Map();
function Zo(e, { target: t, anchor: n, props: o = {}, events: r, context: a, intro: s = !0 }) {
  un();
  var i = /* @__PURE__ */ new Set(), c = (u) => {
    for (var d = 0; d < u.length; d++) {
      var v = u[d];
      if (!i.has(v)) {
        i.add(v);
        var h = Ma(v);
        t.addEventListener(v, vt, { passive: h });
        var g = Qe.get(v);
        g === void 0 ? (document.addEventListener(v, vt, { passive: h }), Qe.set(v, 1)) : Qe.set(v, g + 1);
      }
    }
  };
  c(Cn(Yo)), dn.add(c);
  var l = void 0, f = Pa(() => {
    var u = n ?? t.appendChild(ot());
    return Te(() => {
      if (a) {
        he({});
        var d = (
          /** @type {ComponentContext} */
          Z
        );
        d.c = a;
      }
      r && (o.$$events = r), T && ue(
        /** @type {TemplateNode} */
        u,
        null
      ), fn = s, l = e(u, o) || {}, fn = !0, T && (I.nodes_end = k), a && ve();
    }), () => {
      var h;
      for (var d of i) {
        t.removeEventListener(d, vt);
        var v = (
          /** @type {number} */
          Qe.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, vt), Qe.delete(d)) : Qe.set(d, v);
      }
      dn.delete(c), u !== n && ((h = u.parentNode) == null || h.removeChild(u));
    };
  });
  return hn.set(l, f), l;
}
let hn = /* @__PURE__ */ new WeakMap();
function $a(e, t) {
  const n = hn.get(e);
  return n ? (hn.delete(e), n(t)) : Promise.resolve();
}
function Fe(e, t, n = !1) {
  T && $e();
  var o = e, r = null, a = null, s = U, i = n ? ct : 0, c = !1;
  const l = (u, d = !0) => {
    c = !0, f(d, u);
  }, f = (u, d) => {
    if (s === (s = u)) return;
    let v = !1;
    if (T) {
      const h = (
        /** @type {Comment} */
        o.data === An
      );
      !!s === h && (o = cn(), se(o), ce(!1), v = !0);
    }
    s ? (r ? Ht(r) : d && (r = Te(() => d(o))), a && rt(a, () => {
      a = null;
    })) : (a ? Ht(a) : d && (a = Te(() => d(o))), r && rt(r, () => {
      r = null;
    })), v && ce(!0);
  };
  Ue(() => {
    c = !1, t(l), c || f(null, null);
  }, i), T && (o = k);
}
function Ha(e, t, n) {
  T && $e();
  var o = e, r = U, a, s = Xr;
  Ue(() => {
    s(r, r = t()) && (a && rt(a), a = Te(() => n(o)));
  }), T && (o = k);
}
function qe(e, t) {
  return t;
}
function Wa(e, t, n, o) {
  for (var r = [], a = t.length, s = 0; s < a; s++)
    In(t[s].e, r, !0);
  var i = a > 0 && r.length === 0 && n !== null;
  if (i) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Bo(c), c.append(
      /** @type {Element} */
      n
    ), o.clear(), Me(e, t[0].prev, t[a - 1].next);
  }
  Go(r, () => {
    for (var l = 0; l < a; l++) {
      var f = t[l];
      i || (o.delete(f.k), Me(e, f.prev, f.next)), fe(f.e, !i);
    }
  });
}
function Ge(e, t, n, o, r, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, c = (t & mo) !== 0;
  if (c) {
    var l = (
      /** @type {Element} */
      e
    );
    s = T ? se(
      /** @type {Comment | Text} */
      /* @__PURE__ */ q(l)
    ) : l.appendChild(ot());
  }
  T && $e();
  var f = null, u = !1, d = /* @__PURE__ */ ua(() => {
    var v = n();
    return Sn(v) ? v : v == null ? [] : Cn(v);
  });
  Ue(() => {
    var v = b(d), h = v.length;
    if (u && h === 0)
      return;
    u = h === 0;
    let g = !1;
    if (T) {
      var y = (
        /** @type {Comment} */
        s.data === An
      );
      y !== (h === 0) && (s = cn(), se(s), ce(!1), g = !0);
    }
    if (T) {
      for (var _ = null, N, m = 0; m < h; m++) {
        if (k.nodeType === 8 && /** @type {Comment} */
        k.data === En) {
          s = /** @type {Comment} */
          k, g = !0, ce(!1);
          break;
        }
        var x = v[m], p = o(x, m);
        N = Jo(
          k,
          i,
          _,
          null,
          x,
          p,
          m,
          r,
          t,
          n
        ), i.items.set(p, N), _ = N;
      }
      h > 0 && se(cn());
    }
    T || Va(v, i, s, r, t, o, n), a !== null && (h === 0 ? f ? Ht(f) : f = Te(() => a(s)) : f !== null && rt(f, () => {
      f = null;
    })), g && ce(!0), b(d);
  }), T && (s = k);
}
function Va(e, t, n, o, r, a, s) {
  var J, G, j, ee;
  var i = (r & Br) !== 0, c = (r & (bn | Nn)) !== 0, l = e.length, f = t.items, u = t.first, d = u, v, h = null, g, y = [], _ = [], N, m, x, p;
  if (i)
    for (p = 0; p < l; p += 1)
      N = e[p], m = a(N, p), x = f.get(m), x !== void 0 && ((J = x.a) == null || J.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(x));
  for (p = 0; p < l; p += 1) {
    if (N = e[p], m = a(N, p), x = f.get(m), x === void 0) {
      var w = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : n;
      h = Jo(
        w,
        t,
        h,
        h === null ? t.first : h.next,
        N,
        m,
        p,
        o,
        r,
        s
      ), f.set(m, h), y = [], _ = [], d = h.next;
      continue;
    }
    if (c && za(x, N, p, r), x.e.f & Ce && (Ht(x.e), i && ((G = x.a) == null || G.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(x))), x !== d) {
      if (v !== void 0 && v.has(x)) {
        if (y.length < _.length) {
          var A = _[0], C;
          h = A.prev;
          var O = y[0], L = y[y.length - 1];
          for (C = 0; C < y.length; C += 1)
            Zn(y[C], A, n);
          for (C = 0; C < _.length; C += 1)
            v.delete(_[C]);
          Me(t, O.prev, L.next), Me(t, h, O), Me(t, L, A), d = A, h = L, p -= 1, y = [], _ = [];
        } else
          v.delete(x), Zn(x, d, n), Me(t, x.prev, x.next), Me(t, x, h === null ? t.first : h.next), Me(t, h, x), h = x;
        continue;
      }
      for (y = [], _ = []; d !== null && d.k !== m; )
        d.e.f & Ce || (v ?? (v = /* @__PURE__ */ new Set())).add(d), _.push(d), d = d.next;
      if (d === null)
        continue;
      x = d;
    }
    y.push(x), h = x, d = x.next;
  }
  if (d !== null || v !== void 0) {
    for (var R = v === void 0 ? [] : Cn(v); d !== null; )
      d.e.f & Ce || R.push(d), d = d.next;
    var F = R.length;
    if (F > 0) {
      var V = r & mo && l === 0 ? n : null;
      if (i) {
        for (p = 0; p < F; p += 1)
          (j = R[p].a) == null || j.measure();
        for (p = 0; p < F; p += 1)
          (ee = R[p].a) == null || ee.fix();
      }
      Wa(t, R, V, f);
    }
  }
  i && ut(() => {
    var oe;
    if (g !== void 0)
      for (x of g)
        (oe = x.a) == null || oe.apply();
  }), I.first = t.first && t.first.e, I.last = h && h.e;
}
function za(e, t, n, o) {
  o & bn && ln(e.v, t), o & Nn ? ln(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Jo(e, t, n, o, r, a, s, i, c, l) {
  var f = (c & bn) !== 0, u = (c & Dr) === 0, d = f ? u ? /* @__PURE__ */ On(r) : X(r) : r, v = c & Nn ? X(s) : s, h = {
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
    return h.e = Te(() => i(e, d, v, l), T), h.e.prev = n && n.e, h.e.next = o && o.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), o !== null && (o.prev = h, o.e.prev = h.e), h;
  } finally {
  }
}
function Zn(e, t, n) {
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
      /* @__PURE__ */ be(a)
    );
    r.before(a), a = s;
  }
}
function Me(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function tn(e, t, n, o, r) {
  var a = e, s = "", i;
  Ue(() => {
    if (s === (s = t() ?? "")) {
      T && $e();
      return;
    }
    i !== void 0 && (fe(i), i = void 0), s !== "" && (i = Te(() => {
      if (T) {
        k.data;
        for (var c = $e(), l = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          l = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ be(c);
        if (c === null)
          throw jt(), et;
        ue(k, l), a = se(c);
        return;
      }
      var f = s + "";
      f = `<svg>${f}</svg>`;
      var u = Mn(f);
      for (u = /** @type {Element} */
      /* @__PURE__ */ q(u), ue(
        /** @type {TemplateNode} */
        /* @__PURE__ */ q(u),
        /** @type {TemplateNode} */
        u.lastChild
      ); /* @__PURE__ */ q(u); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ q(u)
        );
    }));
  });
}
function qa(e, t, ...n) {
  var o = e, r = pe, a;
  Ue(() => {
    r !== (r = t()) && (a && (fe(a), a = null), a = Te(() => (
      /** @type {SnippetFn} */
      r(o, ...n)
    )));
  }, ct), T && (o = k);
}
function Ga(e, t, n) {
  T && $e();
  var o = e, r, a;
  Ue(() => {
    r !== (r = t()) && (a && (rt(a), a = null), r && (a = Te(() => n(o, r))));
  }, ct), T && (o = k);
}
function Ye(e, t) {
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
function er(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = er(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function ja() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = er(e)) && (o && (o += " "), o += t);
  return o;
}
function Ua(e) {
  return typeof e == "object" ? ja(e) : e ?? "";
}
const Jn = [...` 	
\r\f \v\uFEFF`];
function Ka(e, t, n) {
  var o = e == null ? "" : "" + e;
  if (t && (o = o ? o + " " + t : t), n) {
    for (var r in n)
      if (n[r])
        o = o ? o + " " + r : r;
      else if (o.length)
        for (var a = r.length, s = 0; (s = o.indexOf(r, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || Jn.includes(o[s - 1])) && (i === o.length || Jn.includes(o[i])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(i + 1) : s = i;
        }
  }
  return o === "" ? null : o;
}
function Bn(e, t, n, o, r, a) {
  var s = e.__className;
  if (T || s !== n) {
    var i = Ka(n, o, a);
    (!T || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = n;
  } else if (a) {
    r ?? (r = {});
    for (var c in a) {
      var l = !!a[c];
      l !== !!r[c] && e.classList.toggle(c, l);
    }
  }
  return a;
}
const Ot = Symbol("class");
function Ya(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function bt(e, t, n, o) {
  var r = e.__attributes ?? (e.__attributes = {});
  T && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Gr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && tr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function vn(e, t, n, o, r = !1, a = !1, s = !1) {
  let i = T && a;
  i && ce(!1);
  var c = t || {}, l = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = Ua(n.class) : (o || n[Ot]) && (n.class = null);
  var u = tr(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const m in n) {
    let x = n[m];
    if (l && m === "value" && x == null) {
      e.value = e.__value = "", c[m] = x;
      continue;
    }
    var v = c[m];
    if (!(x === v && m !== "class")) {
      c[m] = x;
      var h = m[0] + m[1];
      if (h !== "$$") {
        if (h === "on") {
          const p = {}, w = "$$" + m;
          let A = m.slice(2);
          var g = Ta(A);
          if (La(A) && (A = A.slice(0, -7), p.capture = !0), !g && v) {
            if (x != null) continue;
            e.removeEventListener(A, c[w], p), c[w] = null;
          }
          if (x != null)
            if (g)
              e[`__${A}`] = x, Qo([A]);
            else {
              let C = function(O) {
                c[m].call(this, O);
              };
              c[w] = Da(A, e, C, p);
            }
          else g && (e[`__${A}`] = void 0);
        } else if (m === "class") {
          var y = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          Bn(e, y, x, o, t == null ? void 0 : t[Ot], n[Ot]);
        } else if (m === "style" && x != null)
          e.style.cssText = x + "";
        else if (m === "autofocus")
          Ba(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!a && (m === "__value" || m === "value" && x != null))
          e.value = e.__value = x;
        else if (m === "selected" && l)
          Ya(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var _ = m;
          r || (_ = Ra(_));
          var N = _ === "defaultValue" || _ === "defaultChecked";
          if (x == null && !a && !N)
            if (d[m] = null, _ === "value" || _ === "checked") {
              let p = (
                /** @type {HTMLInputElement} */
                e
              );
              const w = t === void 0;
              if (_ === "value") {
                let A = p.defaultValue;
                p.removeAttribute(_), p.defaultValue = A, p.value = p.__value = w ? A : null;
              } else {
                let A = p.defaultChecked;
                p.removeAttribute(_), p.defaultChecked = A, p.checked = w ? A : !1;
              }
            } else
              e.removeAttribute(m);
          else N || u.includes(_) && (a || typeof x != "string") ? e[_] = x : typeof x != "function" && bt(e, _, x);
        }
        m === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && ce(!0), c;
}
var eo = /* @__PURE__ */ new Map();
function tr(e) {
  var t = eo.get(e.nodeName);
  if (t) return t;
  eo.set(e.nodeName, t = []);
  for (var n, o = e, r = Element.prototype; r !== o; ) {
    n = Ur(o);
    for (var a in n)
      n[a].set && t.push(a);
    o = Ao(o);
  }
  return t;
}
function Se(e, t, n, o) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== n && (r[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
const Qa = () => performance.now(), xe = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Qa(),
  tasks: /* @__PURE__ */ new Set()
};
function nr() {
  const e = xe.now();
  xe.tasks.forEach((t) => {
    t.c(e) || (xe.tasks.delete(t), t.f());
  }), xe.tasks.size !== 0 && xe.tick(nr);
}
function or(e) {
  let t;
  return xe.tasks.size === 0 && xe.tick(nr), {
    promise: new Promise((n) => {
      xe.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      xe.tasks.delete(t);
    }
  };
}
function Pt(e, t) {
  Ko(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Xa(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function to(e) {
  const t = {}, n = e.split(";");
  for (const o of n) {
    const [r, a] = o.split(":");
    if (!r || a === void 0) break;
    const s = Xa(r.trim());
    t[s] = a.trim();
  }
  return t;
}
const Za = (e) => e;
function rr(e, t, n, o) {
  var r = (e & Vr) !== 0, a = "both", s, i = t.inert, c = t.style.overflow, l, f;
  function u() {
    var y = M, _ = I;
    ye(null), we(null);
    try {
      return s ?? (s = n()(t, (o == null ? void 0 : o()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ye(y), we(_);
    }
  }
  var d = {
    is_global: r,
    in() {
      t.inert = i, Pt(t, "introstart"), l = pn(t, u(), f, 1, () => {
        Pt(t, "introend"), l == null || l.abort(), l = s = void 0, t.style.overflow = c;
      });
    },
    out(y) {
      t.inert = !0, Pt(t, "outrostart"), f = pn(t, u(), l, 0, () => {
        Pt(t, "outroend"), y == null || y();
      });
    },
    stop: () => {
      l == null || l.abort(), f == null || f.abort();
    }
  }, v = (
    /** @type {Effect} */
    I
  );
  if ((v.transitions ?? (v.transitions = [])).push(d), fn) {
    var h = r;
    if (!h) {
      for (var g = (
        /** @type {Effect | null} */
        v.parent
      ); g && g.f & ct; )
        for (; (g = g.parent) && !(g.f & qt); )
          ;
      h = !g || (g.f & bo) !== 0;
    }
    h && Yt(() => {
      mt(() => d.in());
    });
  }
}
function pn(e, t, n, o, r) {
  var a = o === 1;
  if (Ze(t)) {
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
      abort: pe,
      deactivate: pe,
      reset: pe,
      t: () => o
    };
  const { delay: c = 0, css: l, tick: f, easing: u = Za } = t;
  var d = [];
  if (a && n === void 0 && (f && f(0, 1), l)) {
    var v = to(l(0, 1));
    d.push(v, v);
  }
  var h = () => 1 - o, g = e.animate(d, { duration: c });
  return g.onfinish = () => {
    var y = (n == null ? void 0 : n.t()) ?? 1 - o;
    n == null || n.abort();
    var _ = o - y, N = (
      /** @type {number} */
      t.duration * Math.abs(_)
    ), m = [];
    if (N > 0) {
      var x = !1;
      if (l)
        for (var p = Math.ceil(N / 16.666666666666668), w = 0; w <= p; w += 1) {
          var A = y + _ * u(w / p), C = to(l(A, 1 - A));
          m.push(C), x || (x = C.overflow === "hidden");
        }
      x && (e.style.overflow = "hidden"), h = () => {
        var O = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return y + _ * u(O / N);
      }, f && or(() => {
        if (g.playState !== "running") return !1;
        var O = h();
        return f(O, 1 - O), !0;
      });
    }
    g = e.animate(m, { duration: N, fill: "forwards" }), g.onfinish = () => {
      h = () => o, f == null || f(o, 1 - o), r();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = pe);
    },
    deactivate: () => {
      r = pe;
    },
    reset: () => {
      o === 0 && (f == null || f(1, 0));
    },
    t: () => h()
  };
}
function no(e, t) {
  return e === t || (e == null ? void 0 : e[tt]) === t;
}
function Qt(e = {}, t, n, o) {
  return Yt(() => {
    var r, a;
    return Rn(() => {
      r = a, a = [], mt(() => {
        e !== n(...a) && (t(e, ...a), r && no(n(...r), e) && t(null, ...r));
      });
    }), () => {
      ut(() => {
        a && no(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Dn(e) {
  Z === null && Ca(), ze(() => {
    const t = mt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Xe = [];
function ar(e, t = pe) {
  let n = null;
  const o = /* @__PURE__ */ new Set();
  function r(i) {
    if (Co(e, i) && (e = i, n)) {
      const c = !Xe.length;
      for (const l of o)
        l[1](), Xe.push(l, e);
      if (c) {
        for (let l = 0; l < Xe.length; l += 2)
          Xe[l][0](Xe[l + 1]);
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
  function s(i, c = pe) {
    const l = [i, c];
    return o.add(l), o.size === 1 && (n = t(r, a) || pe), i(
      /** @type {T} */
      e
    ), () => {
      o.delete(l), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
let St = !1, Ja = Symbol();
function es(e, t) {
  return e.set(t), t;
}
function ts() {
  const e = {};
  function t() {
    Aa(() => {
      for (var n in e)
        e[n].unsubscribe();
      gt(e, Ja, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ns(e) {
  var t = St;
  try {
    return St = !1, [e(), St];
  } finally {
    St = t;
  }
}
const os = {
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
function rs(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    os
  );
}
const as = {
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
      const a = Le(r, t);
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
        const r = Le(o, t);
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
function ss(...e) {
  return new Proxy({ props: e }, as);
}
function S(e, t, n, o) {
  var p;
  var r = (n & Fr) !== 0, a = !0, s = (n & Hr) !== 0, i = (n & Wr) !== 0, c = !1, l;
  s ? [l, c] = ns(() => (
    /** @type {V} */
    e[t]
  )) : l = /** @type {V} */
  e[t];
  var f = tt in e || Pn in e, u = s && (((p = Le(e, t)) == null ? void 0 : p.set) ?? (f && t in e && ((w) => e[t] = w))) || void 0, d = (
    /** @type {V} */
    o
  ), v = !0, h = !1, g = () => (h = !0, v && (v = !1, i ? d = mt(
    /** @type {() => V} */
    o
  ) : d = /** @type {V} */
  o), d);
  l === void 0 && o !== void 0 && (u && a && oa(), l = g(), u && u(l));
  var y;
  if (y = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? g() : (v = !0, h = !1, w);
  }, !(n & $r))
    return y;
  if (u) {
    var _ = e.$$legacy;
    return function(w, A) {
      return arguments.length > 0 ? ((!A || _ || c) && u(A ? y() : w), w) : y();
    };
  }
  var N = !1, m = /* @__PURE__ */ On(l), x = /* @__PURE__ */ Y(() => {
    var w = y(), A = b(m);
    return N ? (N = !1, A) : m.v = w;
  });
  return r || (x.equals = Ln), function(w, A) {
    if (arguments.length > 0) {
      const C = A ? b(x) : s ? ge(w) : w;
      return x.equals(C) || (N = !0, $(m, C), h && d !== void 0 && (d = C), mt(() => b(x))), w;
    }
    return b(x);
  };
}
function is(e) {
  return new ls(e);
}
var Ee, re;
class ls {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    He(this, Ee);
    /** @type {Record<string, any>} */
    He(this, re);
    var a;
    var n = /* @__PURE__ */ new Map(), o = (s, i) => {
      var c = /* @__PURE__ */ On(i);
      return n.set(s, c), c;
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
        set(s, i, c) {
          return $(n.get(i) ?? o(i, c), c), Reflect.set(s, i, c);
        }
      }
    );
    ft(this, re, (t.hydrate ? Fa : Xo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && E(), ft(this, Ee, r.$$events);
    for (const s of Object.keys(B(this, re)))
      s === "$set" || s === "$destroy" || s === "$on" || gt(this, s, {
        get() {
          return B(this, re)[s];
        },
        /** @param {any} value */
        set(i) {
          B(this, re)[s] = i;
        },
        enumerable: !0
      });
    B(this, re).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, B(this, re).$destroy = () => {
      $a(B(this, re));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    B(this, re).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    B(this, Ee)[t] = B(this, Ee)[t] || [];
    const o = (...r) => n.call(this, ...r);
    return B(this, Ee)[t].push(o), () => {
      B(this, Ee)[t] = B(this, Ee)[t].filter(
        /** @param {any} fn */
        (r) => r !== o
      );
    };
  }
  $destroy() {
    B(this, re).$destroy();
  }
}
Ee = new WeakMap(), re = new WeakMap();
let sr;
typeof HTMLElement == "function" && (sr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, o) {
    super();
    /** The Svelte component constructor */
    ie(this, "$$ctor");
    /** Slots */
    ie(this, "$$s");
    /** @type {any} The Svelte component instance */
    ie(this, "$$c");
    /** Whether or not the custom element is connected */
    ie(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ie(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ie(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ie(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ie(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ie(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ie(this, "$$me");
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
      const n = {}, o = cs(this);
      for (const r of this.$$s)
        r in o && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = Tt(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = is({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Ea(() => {
        Rn(() => {
          var r;
          this.$$r = !0;
          for (const a of Mt(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Tt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Tt(t, o, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
    return Mt(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Tt(e, t, n, o) {
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
function cs(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Ne(e, t, n, o, r, a) {
  let s = class extends sr {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Mt(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Mt(t).forEach((i) => {
    gt(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(c) {
        var u;
        c = Tt(i, c, t), this.$$d[i] = c;
        var l = this.$$c;
        if (l) {
          var f = (u = Le(l, i)) == null ? void 0 : u.get;
          f ? l[i] = c : l.$set({ [i]: c });
        }
      }
    });
  }), o.forEach((i) => {
    gt(s.prototype, i, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function oo(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function us(e) {
  return e;
}
function ds(e) {
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
    if (oo(e) && oo(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (c) => new Date(a + c * i);
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
var Pe, nt, wt, We;
const Hn = class Hn {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, n = {}) {
    He(this, Pe, X(
      /** @type {T} */
      void 0
    ));
    He(this, nt, X(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    He(this, wt);
    /** @type {import('../internal/client/types').Task | null} */
    He(this, We, null);
    B(this, Pe).v = B(this, nt).v = t, ft(this, wt, n);
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
    return Rn(() => {
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
    var u;
    $(B(this, nt), t);
    let {
      delay: o = 0,
      duration: r = 400,
      easing: a = us,
      interpolate: s = gn
    } = { ...B(this, wt), ...n };
    if (r === 0)
      return (u = B(this, We)) == null || u.abort(), $(B(this, Pe), t), Promise.resolve();
    const i = xe.now() + o;
    let c, l = !1, f = B(this, We);
    return ft(this, We, or((d) => {
      if (d < i)
        return !0;
      if (!l) {
        l = !0;
        const h = B(this, Pe).v;
        c = s(h, t), typeof r == "function" && (r = r(h, t)), f == null || f.abort();
      }
      const v = d - i;
      return v > /** @type {number} */
      r ? ($(B(this, Pe), t), !1) : ($(B(this, Pe), c(a(v / /** @type {number} */
      r))), !0);
    })), B(this, We).promise;
  }
  get current() {
    return b(B(this, Pe));
  }
  get target() {
    return b(B(this, nt));
  }
  set target(t) {
    this.set(t);
  }
};
Pe = new WeakMap(), nt = new WeakMap(), wt = new WeakMap(), We = new WeakMap();
let Je = Hn;
const fs = (e) => e;
function ir(e, { delay: t = 0, duration: n = 400, easing: o = fs } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: o,
    css: (a) => `opacity: ${a * r}`
  };
}
var hs = /* @__PURE__ */ Ie('<div class="state-labels__label svelte-dbcm70"> </div>'), vs = /* @__PURE__ */ Ie('<div aria-hidden="true"></div>');
const ps = {
  hash: "svelte-dbcm70",
  code: `.state-labels.svelte-dbcm70 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-dbcm70 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-dbcm70 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-dbcm70 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-dbcm70 .state-labels__label:where(.svelte-dbcm70) {-webkit-text-stroke:2px #f1f1f1;paint-order:stroke fill;}`
};
function lr(e, t) {
  he(t, !0), Ye(e, ps);
  let n = S(t, "labels", 7), o = S(t, "overlayLabels", 7, !1);
  var r = vs();
  let a;
  return Ge(r, 21, n, qe, (s, i) => {
    var c = at(), l = Ve(c);
    Ha(l, () => b(i).name, (f) => {
      var u = hs(), d = W(u, !0);
      D(u), Oe(
        (v) => {
          Se(u, "left", b(i).left + "%"), Se(u, "top", b(i).top + "%"), Se(u, "width", b(i).width + "%"), Se(u, "margin-left", v), yt(d, b(i).name);
        },
        [
          () => Math.round(0 - b(i).width / 2) + "%"
        ]
      ), rr(3, u, () => ir, () => ({ duration: 1e3 })), H(f, u);
    }), H(s, c);
  }), D(r), Oe(() => a = Bn(r, 1, "state-labels svelte-dbcm70", null, a, { "state-labels--overlaid": o() })), H(e, r), ve({
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
Ne(lr, { labels: {}, overlayLabels: {} }, [], [], !0);
var gs = /* @__PURE__ */ Ie('<span class="accessible-hide svelte-ivafae"><!></span>');
const xs = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function cr(e, t) {
  he(t, !0), Ye(e, xs);
  let n = S(t, "children", 7);
  var o = gs(), r = W(o);
  return qa(r, () => n() ?? pe), D(o), H(e, o), ve({
    get children() {
      return n();
    },
    set children(a) {
      n(a), E();
    }
  });
}
Ne(cr, { children: {} }, [], [], !0);
function ms(e, t, n) {
  var r;
  const o = e.target.dataset.id;
  $(t, ge(o)), (r = n()) == null || r({ code: o });
}
function ys(e, t) {
  var o;
  const n = e.target.dataset.id;
  (o = t()) == null || o({ code: n, clientX: null, clientY: null });
}
function ws(e, t, n) {
  var o;
  b(t) === e.target.dataset.id && $(t, null), (o = n()) == null || o({ code: null });
}
var _s = /* @__PURE__ */ Ie("<li><button> </button></li>"), bs = /* @__PURE__ */ Ie("<li> <ul></ul></li>"), Ns = /* @__PURE__ */ Ie('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>');
const As = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function ur(e, t) {
  he(t, !0), Ye(e, As);
  let n = S(t, "groups", 7), o = S(t, "layout", 7), r = S(t, "onChange", 7), a = S(t, "onClick", 7), s = S(t, "onFocus", 7), i = Be(null);
  ze(() => {
    var l;
    (l = r()) == null || l(b(i));
  });
  let c = /* @__PURE__ */ Y(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((l) => o().positions[l]).map((l) => n().find((f) => f.name === l)).map((l) => ({
    ...l,
    hexes: [...l.hexes].sort((f, u) => f.coord[0] + f.coord[1] * 1e3 - (u.coord[0] + u.coord[1] * 1e3))
  })));
  return cr(e, {
    children: (l, f) => {
      var u = Ns();
      u.__click = [ys, a], u.__focusin = [ms, i, s], u.__focusout = [ws, i, s], Ge(u, 21, () => b(c), qe, (d, v) => {
        var h = bs(), g = W(h), y = ne(g);
        Ge(y, 21, () => b(v).hexes, qe, (_, N) => {
          var m = _s(), x = W(m), p = W(x, !0);
          D(x), D(m), Oe(() => {
            bt(x, "data-id", b(N).id), yt(p, b(N).name);
          }), H(_, m);
        }), D(y), D(h), Oe(() => yt(g, `${b(v).name ?? ""} `)), H(d, h);
      }), D(u), H(l, u);
    },
    $$slots: { default: !0 }
  }), ve({
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
    },
    get onFocus() {
      return s();
    },
    set onFocus(l) {
      s(l), E();
    }
  });
}
Qo(["click", "focusin", "focusout"]);
Ne(
  ur,
  {
    groups: {},
    layout: {},
    onChange: {},
    onClick: {},
    onFocus: {}
  },
  [],
  [],
  !0
);
function Es(e) {
  return Object.entries(e).reduce((t, [n, o]) => (t[o] = n, t), {});
}
const ro = 16;
function Fn(e = [0, 0], t = "px") {
  const n = e[0] * (ro * Math.sqrt(3)), o = e[1] * 1.5 * ro;
  return [n, o].map((r) => `${Math.round(r)}${t}`);
}
var Ps = /* @__PURE__ */ Ke('<path style="color:#000000;fill:var(--c-tileFocusBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:var(--c-tileFocusBorderGap);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), Ss = /* @__PURE__ */ Ke('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:var(--c-tileInteractBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const Cs = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function kt(e, t) {
  he(t, !0), Ye(e, Cs);
  let n = S(t, "groups", 7), o = S(t, "id", 7), r = S(t, "layout", 7), a = S(t, "type", 7, "focus"), s = /* @__PURE__ */ Y(() => n().flatMap((u) => u.hexes.map((d) => ({ ...d, group: u.name }))).sort((u, d) => u.index - d.index)), i = /* @__PURE__ */ Y(() => {
    if (!o())
      return;
    const u = b(s).find((m) => m.id === o()), [d, v] = r().positions[u.group], [h, g] = u.coord, y = g % 2 ? 0.5 : 0, [_, N] = Fn([d + h + y, v + g], "").map(Number);
    return [_ - 3, N - 3];
  });
  var c = at(), l = Ve(c);
  {
    var f = (u) => {
      var d = Ss(), v = W(d);
      {
        var h = (g) => {
          var y = Ps();
          Un(), H(g, y);
        };
        Fe(v, (g) => {
          a() === "focus" && g(h);
        });
      }
      Un(), D(d), Oe((g) => bt(d, "transform", g), [
        () => `translate(${b(i).join(" ")}) scale(0.95)`
      ]), H(u, d);
    };
    Fe(l, (u) => {
      b(i) && u(f);
    });
  }
  return H(e, c), ve({
    get groups() {
      return n();
    },
    set groups(u) {
      n(u), E();
    },
    get id() {
      return o();
    },
    set id(u) {
      o(u), E();
    },
    get layout() {
      return r();
    },
    set layout(u) {
      r(u), E();
    },
    get type() {
      return a();
    },
    set type(u = "focus") {
      a(u), E();
    }
  });
}
Ne(kt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var Ls = typeof global == "object" && global && global.Object === Object && global, Os = typeof self == "object" && self && self.Object === Object && self, dr = Ls || Os || Function("return this")(), Wt = dr.Symbol, fr = Object.prototype, Ts = fr.hasOwnProperty, ks = fr.toString, ht = Wt ? Wt.toStringTag : void 0;
function Rs(e) {
  var t = Ts.call(e, ht), n = e[ht];
  try {
    e[ht] = void 0;
    var o = !0;
  } catch {
  }
  var r = ks.call(e);
  return o && (t ? e[ht] = n : delete e[ht]), r;
}
var Is = Object.prototype, Ms = Is.toString;
function Bs(e) {
  return Ms.call(e);
}
var Ds = "[object Null]", Fs = "[object Undefined]", ao = Wt ? Wt.toStringTag : void 0;
function $s(e) {
  return e == null ? e === void 0 ? Fs : Ds : ao && ao in Object(e) ? Rs(e) : Bs(e);
}
function Hs(e) {
  return e != null && typeof e == "object";
}
var Ws = "[object Symbol]";
function Vs(e) {
  return typeof e == "symbol" || Hs(e) && $s(e) == Ws;
}
var zs = /\s/;
function qs(e) {
  for (var t = e.length; t-- && zs.test(e.charAt(t)); )
    ;
  return t;
}
var Gs = /^\s+/;
function js(e) {
  return e && e.slice(0, qs(e) + 1).replace(Gs, "");
}
function xn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var so = NaN, Us = /^[-+]0x[0-9a-f]+$/i, Ks = /^0b[01]+$/i, Ys = /^0o[0-7]+$/i, Qs = parseInt;
function io(e) {
  if (typeof e == "number")
    return e;
  if (Vs(e))
    return so;
  if (xn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = js(e);
  var n = Ks.test(e);
  return n || Ys.test(e) ? Qs(e.slice(2), n ? 2 : 8) : Us.test(e) ? so : +e;
}
var nn = function() {
  return dr.Date.now();
}, Xs = "Expected a function", Zs = Math.max, Js = Math.min;
function ei(e, t, n) {
  var o, r, a, s, i, c, l = 0, f = !1, u = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Xs);
  t = io(t) || 0, xn(n) && (f = !!n.leading, u = "maxWait" in n, a = u ? Zs(io(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d);
  function v(w) {
    var A = o, C = r;
    return o = r = void 0, l = w, s = e.apply(C, A), s;
  }
  function h(w) {
    return l = w, i = setTimeout(_, t), f ? v(w) : s;
  }
  function g(w) {
    var A = w - c, C = w - l, O = t - A;
    return u ? Js(O, a - C) : O;
  }
  function y(w) {
    var A = w - c, C = w - l;
    return c === void 0 || A >= t || A < 0 || u && C >= a;
  }
  function _() {
    var w = nn();
    if (y(w))
      return N(w);
    i = setTimeout(_, g(w));
  }
  function N(w) {
    return i = void 0, d && o ? v(w) : (o = r = void 0, s);
  }
  function m() {
    i !== void 0 && clearTimeout(i), l = 0, o = c = r = i = void 0;
  }
  function x() {
    return i === void 0 ? s : N(nn());
  }
  function p() {
    var w = nn(), A = y(w);
    if (o = arguments, r = this, c = w, A) {
      if (i === void 0)
        return h(c);
      if (u)
        return clearTimeout(i), i = setTimeout(_, t), v(c);
    }
    return i === void 0 && (i = setTimeout(_, t)), s;
  }
  return p.cancel = m, p.flush = x, p;
}
function ti({ isInteractive: e = !1, onClick: t, onHover: n }) {
  if (!e)
    return {};
  const o = ei(n, 10), r = ({ target: i, clientX: c, clientY: l }) => {
    var u;
    const f = (u = i == null ? void 0 : i.dataset) == null ? void 0 : u.id;
    !f || !t || t({ code: f, clientX: c, clientY: l });
  }, a = (i) => {
    const c = i.target, { clientX: l, clientY: f } = i, u = c.dataset.id;
    c.nodeName !== "polygon" || !u || o({ code: u, clientX: l, clientY: f });
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
var ni = /* @__PURE__ */ Ke('<g><text> </text><text class="hexlabels__text svelte-18lue6v"> </text></g>'), oi = /* @__PURE__ */ Ke('<g class="hexlabels svelte-18lue6v"></g>');
const ri = {
  hash: "svelte-18lue6v",
  code: ".hexlabels.svelte-18lue6v {pointer-events:none;}.hexlabels__text.svelte-18lue6v {font-size:12px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function hr(e, t) {
  he(t, !0), Ye(e, ri);
  let n = S(t, "hexes", 7), o = S(t, "allocations", 7), r = S(t, "certainties", 7), a = S(t, "labelsToShow", 23, () => ({})), s = S(t, "showElectorateLabels", 7, !1), i = /* @__PURE__ */ Y(() => s() ? n() : n().filter(({ id: l }) => a()[l]));
  var c = oi();
  return Ge(c, 21, () => b(i), qe, (l, f) => {
    let u = () => b(f).id, d = () => b(f).coordPx, v = () => b(f).shortName;
    var h = ni(), g = W(h);
    let y;
    var _ = W(g, !0);
    D(g);
    var N = ne(g), m = W(N, !0);
    D(N), D(h), Oe(
      (x) => {
        bt(h, "transform", x), y = Bn(g, 0, "hexlabels__text svelte-18lue6v", null, y, {
          "hexlabels__text--allocation": o()[u()]
        }), Se(g, "stroke", `var(--u-${o()[u()]})`), Se(g, "stroke-width", "3"), Se(g, "opacity", o()[u()] && !r()[u()] ? 1 : 0), yt(_, v()), Se(N, "fill", o()[u()] && r()[u()] ? "white" : "black"), yt(m, v());
      },
      [
        () => `translate(${d().join(" ")}) rotate(-30) translate(0 3)`
      ]
    ), H(l, h);
  }), D(c), H(e, c), ve({
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
    get certainties() {
      return r();
    },
    set certainties(l) {
      r(l), E();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(l = {}) {
      a(l), E();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(l = !1) {
      s(l), E();
    }
  });
}
Ne(
  hr,
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
var ai = /* @__PURE__ */ Ke('<g><g class="group-hexes svelte-ra45qz"><!></g><g class="group-outline group-outline__under svelte-ra45qz"><!></g></g>'), si = /* @__PURE__ */ Ke('<g><g class="group-hex-strokes svelte-ra45qz"><!></g><!></g>'), ii = /* @__PURE__ */ Ke("<g><!><!></g>");
const li = {
  hash: "svelte-ra45qz",
  code: `.group.svelte-ra45qz:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-ra45qz {display:none;}.group--hidden.svelte-ra45qz {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-ra45qz,
.group-outline.svelte-ra45qz {pointer-events:none;}.group.svelte-ra45qz .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-ra45qz .hex-outline {fill:none;stroke:var(--c-stateOutline);stroke-width:1.5px;transition:opacity 0.5s, stroke 0.5s;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-ra45qz:not(.group--has-focuses) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:var(--c-emptyStateOutline);}.group--map-is-full.svelte-ra45qz:not(.group--has-focuses) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:transparent;}.group-hexes.svelte-ra45qz .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-ra45qz .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-ra45qz .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-ra45qz .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-ra45qz .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-ra45qz .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-ra45qz .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-ra45qz .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-ra45qz .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-ra45qz .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-ra45qz .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-ra45qz .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-ra45qz .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-ra45qz .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-ra45qz .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-nullBorder);stroke-width:1.5px;}.group--map-is-empty.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex {fill:var(--c-empty);stroke:var(--c-emptyBorder);stroke-width:1px;}.group-hex-strokes.svelte-ra45qz .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-ra45qz .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filledBorder);stroke-width:1.5px;}.group-hex-strokes.svelte-ra45qz .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-ra45qz .group-hexes:where(.svelte-ra45qz) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-ra45qz .group-hex-strokes:where(.svelte-ra45qz) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--has-focuses.svelte-ra45qz:not(.group--map-is-empty) .group-outline:where(.svelte-ra45qz) .hex-outline {stroke:#60646c;}.group--is-outline.svelte-ra45qz .hex {stroke:white !important;fill:#f1f1f1;stroke-width:1.5 !important;}.group--is-outline.svelte-ra45qz .hex-outline {stroke:#cdcbcb !important;}`
};
function vr(e, t) {
  he(t, !0), Ye(e, li);
  let n = S(t, "groups", 7), o = S(t, "isStaticLayout", 7), r = S(t, "layout", 7), a = S(t, "allocations", 7), s = S(t, "focuses", 7), i = S(t, "certainties", 7), c = S(t, "showElectorateLabels", 7), l = S(t, "showFocusedElectorateLabels", 7), f = S(t, "labelsToShow", 7), u = S(t, "isOutlineOnly", 7, !1), d = Be(void 0), v = /* @__PURE__ */ Y(() => {
    const p = Object.values(a());
    return p.length !== 0 && p.some(Boolean);
  }), h = /* @__PURE__ */ Y(() => {
    const p = Object.values(a());
    return p.length !== 0 && p.every(Boolean);
  }), g = /* @__PURE__ */ Y(() => Object.values(s()).some(Boolean)), y = /* @__PURE__ */ Y(() => {
    var p;
    return Array.from(((p = b(d)) == null ? void 0 : p.querySelectorAll("polygon.hex")) || []).filter((w) => w instanceof SVGPolygonElement);
  });
  ze(() => {
    const p = { ...a() }, w = s(), A = i();
    b(y).forEach((C) => {
      const O = C.dataset.id;
      if (!O)
        return;
      const L = p[O] || null;
      C.dataset.allocation = L;
      const R = b(g) ? w[O] || !1 : !0;
      C.dataset.focused = R;
      const F = A[O] || null;
      C.dataset.certain = F;
    });
  });
  let _ = /* @__PURE__ */ Y(() => {
    const p = n(), w = r();
    return p.map((A) => {
      const C = w.positions[A.name], O = C && C[0] !== 1 / 0, L = Fn(C).join(","), R = b(g) && l() ? s() : f(), F = {
        "data-name": A.name,
        style: `transform: translate(${L})`,
        class: [
          "group",
          !1,
          !O && "group--hidden",
          o() && "group--map-is-static",
          !b(v) && "group--map-is-empty",
          b(h) && "group--map-is-full",
          b(g) && "group--has-focuses",
          u() && "group--is-outline"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: O, labels: R, group: A, groupProps: F };
    });
  });
  var N = ii(), m = W(N);
  Ge(m, 17, () => b(_), qe, (p, w) => {
    let A = () => b(w).groupProps, C = () => b(w).group;
    var O = ai();
    let L;
    var R = W(O), F = W(R);
    tn(F, () => C().svgHexes), D(R);
    var V = ne(R), J = W(V);
    tn(J, () => C().svgOutline), D(V), D(O), Oe(() => L = vn(O, L, { ...A() }, "svelte-ra45qz", !0)), H(p, O);
  });
  var x = ne(m);
  return Ge(x, 17, () => b(_), qe, (p, w) => {
    let A = () => b(w).groupProps, C = () => b(w).isVisible, O = () => b(w).labels, L = () => b(w).group;
    var R = si();
    let F;
    var V = W(R), J = W(V);
    tn(J, () => L().svgHexes), D(V);
    var G = ne(V);
    {
      var j = (ee) => {
        hr(ee, {
          get hexes() {
            return L().hexes;
          },
          get allocations() {
            return a();
          },
          get certainties() {
            return i();
          },
          get labelsToShow() {
            return O();
          },
          get showElectorateLabels() {
            return c();
          }
        });
      };
      Fe(G, (ee) => {
        C() && ee(j);
      });
    }
    D(R), Oe(() => F = vn(R, F, { ...A() }, "svelte-ra45qz", !0)), H(p, R);
  }), D(N), Qt(N, (p) => $(d, p), () => b(d)), H(e, N), ve({
    get groups() {
      return n();
    },
    set groups(p) {
      n(p), E();
    },
    get isStaticLayout() {
      return o();
    },
    set isStaticLayout(p) {
      o(p), E();
    },
    get layout() {
      return r();
    },
    set layout(p) {
      r(p), E();
    },
    get allocations() {
      return a();
    },
    set allocations(p) {
      a(p), E();
    },
    get focuses() {
      return s();
    },
    set focuses(p) {
      s(p), E();
    },
    get certainties() {
      return i();
    },
    set certainties(p) {
      i(p), E();
    },
    get showElectorateLabels() {
      return c();
    },
    set showElectorateLabels(p) {
      c(p), E();
    },
    get showFocusedElectorateLabels() {
      return l();
    },
    set showFocusedElectorateLabels(p) {
      l(p), E();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(p) {
      f(p), E();
    },
    get isOutlineOnly() {
      return u();
    },
    set isOutlineOnly(p = !1) {
      u(p), E();
    }
  });
}
Ne(
  vr,
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
function pr(e, t) {
  he(t, !0);
  let n = /* @__PURE__ */ rs(t, ["$$slots", "$$events", "$$legacy", "$$host"]), o = Be(null);
  Dn(() => {
    import(
      /* webpackChunkName: "dynamic-hex-map-arrows" */
      "./HexMapArrows-DKFy498W.js"
    ).then((i) => {
      $(o, ge(i.default));
    });
  });
  var r = at(), a = Ve(r);
  {
    var s = (i) => {
      var c = at(), l = Ve(c);
      Ga(l, () => b(o), (f, u) => {
        u(f, ss(() => n));
      }), H(i, c);
    };
    Fe(a, (i) => {
      b(o) && i(s);
    });
  }
  H(e, r), ve();
}
Ne(pr, {}, [], [], !0);
var ci = /* @__PURE__ */ Ie('<div class="hexmap__labels svelte-ko8kvy"><!></div>'), ui = /* @__PURE__ */ Ie('<div class="hexmap svelte-ko8kvy"><div><svg class="svelte-ko8kvy"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const di = {
  hash: "svelte-ko8kvy",
  code: ".hexmap.svelte-ko8kvy {position:relative;width:100%;height:100%;position:relative;}.hexmap__labels.svelte-ko8kvy {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-ko8kvy svg:where(.svelte-ko8kvy) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-ko8kvy {position:relative;margin:0 auto;max-height:100%;}"
};
function gr(e, t) {
  he(t, !0), Ye(e, di);
  let n = S(t, "config", 23, () => ({})), o = S(t, "layout", 23, () => ({})), r = S(t, "allocations", 23, () => ({})), a = S(t, "focuses", 23, () => ({})), s = S(t, "certainties", 23, () => ({})), i = S(t, "labelsToShow", 23, () => ({})), c = S(t, "showStateLabels", 7, !1), l = S(t, "showElectorateLabels", 7, !1), f = S(t, "showFocusedElectorateLabels", 7, !1), u = S(t, "isStaticLayout", 7, !1), d = S(t, "onClick", 7, ({ code: P }) => {
  }), v = S(t, "onHover", 7, ({ code: P }) => {
  }), h = S(t, "onFocus", 7, ({ code: P }) => {
  }), g = S(t, "customViewbox", 7, null), y = S(t, "onViewboxChange", 7, ({ newViewbox: P }) => {
  }), _ = S(t, "isInteractive", 7, !1), N = S(t, "firstPreferenceArrows", 7, "None"), m = S(t, "selectedElectorate", 7, null), x = Be(void 0), p = Be(0), w = Be(null), A = Be(null);
  const C = o().viewbox, O = { easing: ds, duration: 1100 };
  let L = new Je(C[0], O), R = new Je(C[1], O), F = new Je(C[2], O), V = new Je(C[3], O);
  ze(() => {
    const [P, z, dt, Zt] = g() || o().viewbox;
    L.set(P), R.set(z), F.set(dt), V.set(Zt);
  }), ze(() => {
    y()(o().viewbox);
  }), Dn(() => {
    if (!b(x))
      return;
    const P = b(x).getBoundingClientRect();
    $(p, P.height / P.width);
  });
  let J = /* @__PURE__ */ Y(() => ti({
    isInteractive: _(),
    onClick: d(),
    onHover: (P) => {
      $(A, ge(P.code)), v()(P);
    }
  }));
  var G = ui(), j = W(G);
  let ee;
  var oe = W(j), Nt = ne(W(oe));
  const Xt = /* @__PURE__ */ Y(() => N() !== "None");
  vr(Nt, {
    get groups() {
      return n().groups;
    },
    get isStaticLayout() {
      return u();
    },
    get layout() {
      return o();
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
      return b(Xt);
    }
  });
  var At = ne(Nt);
  kt(At, {
    get groups() {
      return n().groups;
    },
    get id() {
      return b(w);
    },
    get layout() {
      return o();
    },
    type: "focus"
  });
  var Et = ne(At);
  kt(Et, {
    get groups() {
      return n().groups;
    },
    get id() {
      return m();
    },
    get layout() {
      return o();
    },
    type: "focus"
  });
  var Wn = ne(Et);
  kt(Wn, {
    get groups() {
      return n().groups;
    },
    get id() {
      return b(A);
    },
    get layout() {
      return o();
    },
    type: "hover"
  });
  var Er = ne(Wn);
  {
    var Pr = (P) => {
      var z = at(), dt = Ve(z);
      Ge(dt, 17, () => n().groups, qe, (Zt, Jt) => {
        var Vn = at(), Tr = Ve(Vn);
        {
          var kr = (en) => {
            pr(en, {
              get hexes() {
                return b(Jt).hexes;
              },
              get offset() {
                return o().positions[b(Jt).name];
              },
              get firstPreferenceArrows() {
                return N();
              }
            });
          };
          Fe(Tr, (en) => {
            o().positions[b(Jt).name] && en(kr);
          });
        }
        H(Zt, Vn);
      }), H(P, z);
    };
    Fe(Er, (P) => {
      N() !== "None" && P(Pr);
    });
  }
  D(oe), Qt(oe, (P) => $(x, P), () => b(x));
  var Sr = ne(oe, 2);
  {
    var Cr = (P) => {
      var z = ci(), dt = W(z);
      lr(dt, {
        get labels() {
          return o().labels;
        },
        get overlayLabels() {
          return o().overlayLabels;
        }
      }), D(z), H(P, z);
    };
    Fe(Sr, (P) => {
      c() && P(Cr);
    });
  }
  D(j);
  var Lr = ne(j, 2);
  {
    var Or = (P) => {
      ur(P, {
        get groups() {
          return n().groups;
        },
        get layout() {
          return o();
        },
        onChange: (z) => {
          $(w, ge(z));
        },
        get onClick() {
          return d();
        },
        get onFocus() {
          return h();
        }
      });
    };
    Fe(Lr, (P) => {
      _() && P(Or);
    });
  }
  return D(G), Oe(
    (P, z) => {
      ee = vn(
        j,
        ee,
        {
          class: "hexmap__viz",
          ...b(J),
          [Ot]: {
            "hexmap__viz--vertical": b(p) <= 1
          }
        },
        "svelte-ko8kvy"
      ), Se(j, "aspect-ratio", P), bt(oe, "viewBox", z);
    },
    [
      () => b(p) ? b(p).toFixed(3) : null,
      () => [
        L.current,
        R.current,
        F.current,
        V.current
      ].join(" ")
    ]
  ), rr(3, G, () => ir, () => ({ duration: 750 })), H(e, G), ve({
    get config() {
      return n();
    },
    set config(P = {}) {
      n(P), E();
    },
    get layout() {
      return o();
    },
    set layout(P = {}) {
      o(P), E();
    },
    get allocations() {
      return r();
    },
    set allocations(P = {}) {
      r(P), E();
    },
    get focuses() {
      return a();
    },
    set focuses(P = {}) {
      a(P), E();
    },
    get certainties() {
      return s();
    },
    set certainties(P = {}) {
      s(P), E();
    },
    get labelsToShow() {
      return i();
    },
    set labelsToShow(P = {}) {
      i(P), E();
    },
    get showStateLabels() {
      return c();
    },
    set showStateLabels(P = !1) {
      c(P), E();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(P = !1) {
      l(P), E();
    },
    get showFocusedElectorateLabels() {
      return f();
    },
    set showFocusedElectorateLabels(P = !1) {
      f(P), E();
    },
    get isStaticLayout() {
      return u();
    },
    set isStaticLayout(P = !1) {
      u(P), E();
    },
    get onClick() {
      return d();
    },
    set onClick(P = ({ code: z }) => {
    }) {
      d(P), E();
    },
    get onHover() {
      return v();
    },
    set onHover(P = ({ code: z }) => {
    }) {
      v(P), E();
    },
    get onFocus() {
      return h();
    },
    set onFocus(P = ({ code: z }) => {
    }) {
      h(P), E();
    },
    get customViewbox() {
      return g();
    },
    set customViewbox(P = null) {
      g(P), E();
    },
    get onViewboxChange() {
      return y();
    },
    set onViewboxChange(P = ({ newViewbox: z }) => {
    }) {
      y(P), E();
    },
    get isInteractive() {
      return _();
    },
    set isInteractive(P = !1) {
      _(P), E();
    },
    get firstPreferenceArrows() {
      return N();
    },
    set firstPreferenceArrows(P = "None") {
      N(P), E();
    },
    get selectedElectorate() {
      return m();
    },
    set selectedElectorate(P = null) {
      m(P), E();
    }
  });
}
Ne(
  gr,
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
    firstPreferenceArrows: {},
    selectedElectorate: {}
  },
  [],
  [],
  !0
);
let fi = ar({
  allocated: {},
  uncertain: {}
});
const hi = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#949494", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "black", tileFocusBorder: "black", tileFocusBorderGap: "white", tileInteractBorder: "black" }, vi = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", PUP: "#cc8500", Teal: "#0098a6" }, pi = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", PUP: "#f5e7cc" }, lo = {
  c: hi,
  allocated: vi,
  uncertain: pi
};
function xr(e, t) {
  he(t, !0);
  const [n, o] = ts();
  let r = S(t, "rootEl", 15), a = S(t, "colours", 7, lo);
  ze(() => {
    const i = a(), c = r();
    if (!c)
      return;
    es(fi, {
      allocated: i.allocated,
      uncertain: i.uncertain
    });
    const l = { allocated: "a", uncertain: "u" };
    Object.entries(i).forEach(([f, u]) => {
      const d = l[f] || f;
      Object.entries(u).forEach(([v, h]) => {
        const g = `--${d}-${v}`;
        c.style.setProperty(g, h);
      });
    });
  }), Dn(() => {
    r();
  }), Qt(ko.body, (i) => r(i), () => r());
  var s = ve({
    get rootEl() {
      return r();
    },
    set rootEl(i) {
      r(i), E();
    },
    get colours() {
      return a();
    },
    set colours(i = lo) {
      a(i), E();
    }
  });
  return o(), s;
}
Ne(xr, { rootEl: {}, colours: {} }, [], [], !0);
const gi = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.003006, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 33.75, top: 30.75, width: 8, name: "NT" }, { left: 65.25, top: 21.5, width: 8, name: "QLD" }, { left: 57.75, top: 44.25, width: 8, name: "NSW" }, { left: 67.5, top: 57.75, width: 8, name: "ACT" }, { left: 58, top: 67.25, width: 8, name: "VIC" }, { left: 57.75, top: 86.25, width: 8, name: "TAS" }, { left: 34, top: 48.75, width: 8, name: "SA" }, { left: 24.5, top: 53.25, width: 8, name: "WA" }], overlayLabels: !0 }, xi = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.5, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 71, top: 63.5, width: 8, name: "ACT" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, mi = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, yi = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, wi = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, _i = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, bi = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, Ni = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, Ai = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, Ei = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Pi = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Si = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Ci = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Li = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, Oi = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, Ti = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, ki = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, Ri = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, Ii = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, mr = {
  COUNTRY: gi,
  EXPLODED: xi,
  EXPLODED_STATES_ONLY: mi,
  GRID: yi,
  ACT: wi,
  NSW: _i,
  NT: bi,
  QLD: Ni,
  SA: Ai,
  TAS: Ei,
  VIC: Pi,
  WA: Si,
  ACT_NT: Ci,
  NSW_QLD: Li,
  NSW_VIC: Oi,
  QLD_VIC: Ti,
  QLD_WA: ki,
  QLD_NSW_VIC: Ri,
  SA_TAS_WA: Ii
}, Mi = 291, Bi = 200, Di = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park.","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart.","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"River.","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New.","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Banks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lille","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long.","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More.","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Forde","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Corio","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wills","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), $n = {
  svgWidth: Mi,
  svgHeight: Bi,
  groups: Di
};
function yr(e) {
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
const co = ["number", "boolean", "enum", "string", "custom"];
async function Fi({ schema: e, data: t }) {
  const n = yr(e), o = {}, r = Object.entries(n).map(
    async ([a, s]) => {
      const { type: i, key: c, values: l, defaultValue: f, codec: u } = s;
      if (!co.includes(i))
        throw new Error(
          `Unknown type "${i}", must be one of ${co}`
        );
      let d = t[c || a];
      if (typeof d > "u") {
        typeof f < "u" && (o[a] = f);
        return;
      }
      if (u && (d = await u.decode(d)), i === "number" && (d = Number(d)), i === "boolean" && (d = Number(d) === 1), i === "enum") {
        const v = l[d];
        typeof v > "u" ? d = f : d = v;
      }
      o[a] = d;
    }
  );
  return await Promise.all(r), o;
}
async function $i({ schema: e, data: t }) {
  const n = yr(e), o = {}, r = Object.keys(t).filter((s) => !e[s]);
  if (r.length)
    throw console.error(`Unknown keys found in data: ${r.join()}`), new Error("Unknown keys found in data");
  const a = Object.entries(n).map(
    async ([s, i]) => {
      const { type: c, key: l, values: f, defaultValue: u, codec: d } = i, v = l || s, h = t[s];
      if (typeof h > "u" || h === u) return;
      let g = h;
      if (c === "enum") {
        const y = f.indexOf(h);
        if (y === -1)
          throw console.error(`Enum value "${h}" not found in ${f}`), new Error("Invalid enum value");
        g = y;
      }
      d && (g = await d.encode(g)), c === "boolean" && (g = g ? 1 : 0), o[v] = g;
    }
  );
  return await Promise.all(a), o;
}
function Hi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var on, uo;
function Wi() {
  if (uo) return on;
  uo = 1;
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
    var i = t.length, c = t.charAt(0), l = Math.log(i) / Math.log(256), f = Math.log(256) / Math.log(i);
    function u(h) {
      if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (h.length === 0)
        return "";
      for (var g = 0, y = 0, _ = 0, N = h.length; _ !== N && h[_] === 0; )
        _++, g++;
      for (var m = (N - _) * f + 1 >>> 0, x = new Uint8Array(m); _ !== N; ) {
        for (var p = h[_], w = 0, A = m - 1; (p !== 0 || w < y) && A !== -1; A--, w++)
          p += 256 * x[A] >>> 0, x[A] = p % i >>> 0, p = p / i >>> 0;
        if (p !== 0)
          throw new Error("Non-zero carry");
        y = w, _++;
      }
      for (var C = m - y; C !== m && x[C] === 0; )
        C++;
      for (var O = c.repeat(g); C < m; ++C)
        O += t.charAt(x[C]);
      return O;
    }
    function d(h) {
      if (typeof h != "string")
        throw new TypeError("Expected String");
      if (h.length === 0)
        return new Uint8Array();
      for (var g = 0, y = 0, _ = 0; h[g] === c; )
        y++, g++;
      for (var N = (h.length - g) * l + 1 >>> 0, m = new Uint8Array(N); h[g]; ) {
        var x = n[h.charCodeAt(g)];
        if (x === 255)
          return;
        for (var p = 0, w = N - 1; (x !== 0 || p < _) && w !== -1; w--, p++)
          x += i * m[w] >>> 0, m[w] = x % 256 >>> 0, x = x / 256 >>> 0;
        if (x !== 0)
          throw new Error("Non-zero carry");
        _ = p, g++;
      }
      for (var A = N - _; A !== N && m[A] === 0; )
        A++;
      for (var C = new Uint8Array(y + (N - A)), O = y; A !== N; )
        C[O++] = m[A++];
      return C;
    }
    function v(h) {
      var g = d(h);
      if (g)
        return g;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: u,
      decodeUnsafe: d,
      decode: v
    };
  }
  return on = e, on;
}
var Vi = Wi();
const zi = /* @__PURE__ */ Hi(Vi);
var qi = "0123456789abcdefghijklmnopqrstuvwxyz";
zi(qi);
new TextEncoder();
new TextDecoder();
const Gi = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, ji = function(e, { delineator: t }) {
  e += t;
  const n = [];
  let o = e;
  for (let a = 0; a < e.length; a++)
    o = Gi(o), n.push(o);
  n.sort();
  let r = "";
  for (let a = 0; a < n.length; a++)
    r += n[a].charAt(n[a].length - 1);
  return r;
}, Ui = function(e, { delineator: t }) {
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
function wr(e) {
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
async function Ki(e, { delineator: t }) {
  const n = ji(e, { delineator: t });
  return wr(n);
}
async function Yi(e, { delineator: t }) {
  const n = _r(e);
  return Ui(n, { delineator: t });
}
function Qi({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => Ki(t, { delineator: e }),
    decode: (t) => Yi(t, { delineator: e })
  };
}
const mn = 26, yn = 97, Xi = 48, fo = async (e, { maxBits: t }) => {
  const n = [1, ...e].map((i) => i ? 1 : 0).join(""), o = [];
  for (let i = n.length; i > 0; i -= t)
    o.push(n.slice(Math.max(0, i - t), i));
  return o.reverse(), o.map((i) => parseInt(i, 2)).map((i) => i > mn ? i % mn : String.fromCharCode(i + yn)).join("");
};
async function ho(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= yn ? i - yn : i - Xi + mn
  ).map(
    (i, c) => Number(i).toString(2).padStart(c > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((c) => c === "1")
  ).slice(1);
}
function Zi({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => wr(await fo(t, { maxBits: e })),
    decode: async (t) => ho(_r(t), { maxBits: e })
  } : {
    encode: (t) => fo(t, { maxBits: e }),
    decode: (t) => ho(t, { maxBits: e })
  };
}
var wn = function(e) {
  return Array.isArray(e) ? e.map(String) : [String(e)];
};
function Ji(e, t) {
  t === void 0 && (t = {});
  var n = t.propMap, o = n === void 0 ? {} : n, r = t.arrayProps, a = r === void 0 ? [] : r, s = t.noTypeGuessing, i = s === void 0 ? [] : s, c = e.match(/[A-Z]+([0-9a-z]|$)+/g) || [];
  a = wn(a), i = wn(i);
  var l = c.map(function(f) {
    var u = f.match(/^([A-Z]+)([0-9a-z]*$)/) || [], d = u[1], v = u[2];
    if (typeof d != "string" || typeof v != "string")
      throw new Error("Error reading key/value pair");
    var h = o[d.toLowerCase()] || d.toLowerCase(), g = i.includes(h) ? v : parseFloat(v).toString() === v ? parseFloat(v) : v === "true" || v === "yes" ? !0 : v === "false" || v === "no" ? !1 : v === "" ? null : v;
    return { key: h, value: g };
  }).reduce(
    /** @param {Object<string,any>} obj */
    function(f, u, d, v) {
      var h = u.key, g = u.value;
      if (typeof f[h] < "u")
        return f;
      var y = v.filter(function(m) {
        var x = m.key;
        return x === h;
      }).map(function(m) {
        return m.value;
      }), _ = a.includes(h) || y.length > 1;
      if (_) {
        var N = new Set(y.map(function(m) {
          return typeof m;
        }));
        if (N.size > 1)
          throw new Error("Inconsistent types in array property '".concat(h, "'"));
        f[h] = y;
      } else
        f[h] = g;
      return f;
    },
    {}
  );
  return a.forEach(function(f) {
    typeof l[f] > "u" && (l[f] = []);
  }), l;
}
var Vt = function() {
  return Vt = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Vt.apply(this, arguments);
};
var vo = function(e) {
  var t = e.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (t !== e)
    throw new Error('Illegal characters found: "'.concat(e, '"'));
  return e;
};
function el(e, t) {
  t === void 0 && (t = {});
  var n = Object.entries(t.propMap || {}).reduce(function(o, r) {
    var a, s = r[0], i = r[1];
    return Vt(Vt({}, o), (a = {}, a[i] = String(s), a));
  }, {});
  return Object.entries(e).flatMap(function(o) {
    var r = o[0], a = o[1];
    if (typeof a > "u" || a === null)
      return [];
    var s = n[r] || r, i = wn(a);
    return i.map(function(c) {
      return [vo(s).toUpperCase(), vo(c)].join("");
    });
  }).join("");
}
function tl(e) {
  async function t() {
    const o = window.location.hash.slice(1), r = Ji(o);
    return await Fi({ schema: e, data: r });
  }
  const n = ar(
    /** @type {T} */
    null
  );
  return t().then((o) => {
    n.set(o), n.subscribe(async (r) => {
      if (!r)
        return;
      const a = await $i({ schema: e, data: r }), s = "#" + el(a);
      window.location.hash !== s && (window.location.hash = s);
    });
  }), n;
}
const nl = { Australia: [[112, -44], [156, -10]], "Brisbane & surrounds": [[152.67620200034025, -27.85975844732532], [153.50771856749492, -27.122141459597835]], "Sydney & surrounds": [[150.53643051298894, -34.250330919454555], [151.6159583706169, -33.35329642067877]], "Melbourne & surrounds": [[143.7112326761349, -38.73737902155104], [146.2181523182391, -36.755303142447325]], "Inner-city Sydney": [[150.97804393208258, -33.9820617904466], [151.29883502771884, -33.71564208020996]], "Inner-city Melbourne": [[144.77343032299214, -38.00505753293409], [145.25008324655565, -37.62851493730817]], Perth: [[115.29761105882773, -32.58735478749758], [116.46158922227181, -31.601283791419284]], Adelaide: [[138.1361307284978, -35.308045628940405], [139.08340859017528, -34.53133194772551]], Tasmania: [[143.15169589003773, -43.824678713957354], [149.19913869957333, -39.30289848300832]], "Focus Driven": [[112, -44], [156, -10]] }, ol = {
  areas: nl
}, rl = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, br = {
  hashCodes: rl
}, st = $n.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), al = Object.values(st).reduce((e, t) => (e[t.id] = t, e), {});
$n.groups;
const _n = "q", sl = "x", po = Qi({ delineator: _n }), Nr = Es(br.hashCodes);
if (Nr[_n] || sl === _n)
  throw new Error("Can not use delineator in allocation map");
function Ar(e) {
  return st.map(({ id: t }) => e[t]);
}
function il(e) {
  return st.reduce((t, { id: n }, o) => (t[n] = e[o] ?? null, t), {});
}
const go = Zi({ maxBits: 4 }), rn = {
  encode: async function(e) {
    const t = Ar(e);
    return go.encode(t);
  },
  decode: async function(e) {
    const t = await go.decode(e);
    return il(t);
  }
}, an = Object.freeze(
  st.reduce((e, t) => (e[t.id] = null, e), {})
), ll = {
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
    values: Object.keys(ol.areas)
  },
  allocations: {
    type: "custom",
    codec: {
      encode: async (e) => {
        const t = Object.entries(e).reduce((r, [a, s]) => (r[a] = br.hashCodes[s] || "x", r), {}), n = Ar(t).map((r) => r ?? "x").join("");
        return await po.encode(n);
      },
      decode: async (e) => (await po.decode(e).catch((o) => (console.error("decoding string failed", e, o), ""))).split("").reduce((o, r, a) => {
        var i;
        const s = (i = st[a]) == null ? void 0 : i.id;
        if (s)
          return o[s] = Nr[String(r)] || null, o;
      }, {})
    },
    key: "a",
    defaultValue: an
  },
  focuses: {
    type: "custom",
    codec: rn,
    key: "f",
    defaultValue: an
  },
  certainties: {
    type: "custom",
    codec: rn,
    key: "c",
    defaultValue: Object.freeze(
      st.reduce((e, t) => (e[t.id] = !0, e), {})
    )
  },
  labelsToShow: {
    type: "custom",
    codec: rn,
    key: "li",
    defaultValue: an
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
}, xo = tl(ll);
xo.subscribe((e) => {
  e && e.version !== 1 && xo.set({ ...e, version: 1 });
});
var cl = /* @__PURE__ */ Ie("<!> <div><!></div>", 1);
function ul(e, t) {
  he(t, !0);
  let n = S(t, "allocations", 23, () => ({})), o = S(t, "certainties", 23, () => ({})), r = S(t, "focuses", 23, () => ({})), a = S(t, "showStateLabels", 7, !1), s = S(t, "showElectorateLabels", 7, !1), i = S(t, "layout", 7, "COUNTRY"), c = S(t, "selectedElectorate", 7, null), l = S(t, "customViewbox", 7, null), f = S(t, "onClick", 7, () => {
  }), u = S(t, "onHover", 7, () => {
  }), d = S(t, "onFocus", 7, () => {
  }), v = S(t, "onApi", 7, () => {
  }), h = S(t, "onViewboxChange", 7, () => {
  }), g = S(t, "isStaticLayout", 7, !0), y = S(t, "isInteractive", 7, !0), _ = S(t, "colours", 7), N = Be(void 0), m = /* @__PURE__ */ Y(() => mr[i()]);
  function x(L, R, F, V = !0) {
    const J = V ? F.getScreenCTM() : F.getCTM(), G = F.createSVGPoint();
    G.x = L, G.y = R;
    const j = G.matrixTransform(J);
    return [j.x, j.y].map(Number);
  }
  function p(L) {
    const R = al[L], F = b(m).positions[R == null ? void 0 : R.group];
    if (!(b(N) instanceof HTMLDivElement))
      return;
    const V = b(N).querySelector("svg");
    if (!R || !F || !V)
      throw new Error(`Could not find hexagon with id ${L}`);
    const J = [-0.5, -1], [G, j] = Fn(
      [
        F[0] + J[0],
        F[1] + J[1]
      ],
      ""
    ).map(Number), ee = Number(R.coordPx[0] + G), oe = Number(R.coordPx[1] + j), [Nt, Xt] = x(ee, oe, V), [At, Et] = x(ee, oe, V, !1);
    return {
      code: L,
      screenCoord: [Nt, Xt],
      containerCoord: [At, Et],
      svgCoord: [ee, oe]
    };
  }
  ze(() => {
    v() && v()({ getHex: p });
  });
  var w = cl(), A = Ve(w);
  xr(A, {
    get colours() {
      return _();
    }
  });
  var C = ne(A, 2), O = W(C);
  return gr(O, {
    config: $n,
    get layout() {
      return b(m);
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
      return f();
    },
    get onHover() {
      return u();
    },
    get onFocus() {
      return d();
    },
    get selectedElectorate() {
      return c();
    },
    get customViewbox() {
      return l();
    },
    get isStaticLayout() {
      return g();
    },
    get isInteractive() {
      return y();
    },
    get onViewboxChange() {
      return h();
    }
  }), D(C), Qt(C, (L) => $(N, L), () => b(N)), H(e, w), ve({
    get allocations() {
      return n();
    },
    set allocations(L = {}) {
      n(L), E();
    },
    get certainties() {
      return o();
    },
    set certainties(L = {}) {
      o(L), E();
    },
    get focuses() {
      return r();
    },
    set focuses(L = {}) {
      r(L), E();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(L = !1) {
      a(L), E();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(L = !1) {
      s(L), E();
    },
    get layout() {
      return i();
    },
    set layout(L = "COUNTRY") {
      i(L), E();
    },
    get selectedElectorate() {
      return c();
    },
    set selectedElectorate(L = null) {
      c(L), E();
    },
    get customViewbox() {
      return l();
    },
    set customViewbox(L = null) {
      l(L), E();
    },
    get onClick() {
      return f();
    },
    set onClick(L = () => {
    }) {
      f(L), E();
    },
    get onHover() {
      return u();
    },
    set onHover(L = () => {
    }) {
      u(L), E();
    },
    get onFocus() {
      return d();
    },
    set onFocus(L = () => {
    }) {
      d(L), E();
    },
    get onApi() {
      return v();
    },
    set onApi(L = () => {
    }) {
      v(L), E();
    },
    get onViewboxChange() {
      return h();
    },
    set onViewboxChange(L = () => {
    }) {
      h(L), E();
    },
    get isStaticLayout() {
      return g();
    },
    set isStaticLayout(L = !0) {
      g(L), E();
    },
    get isInteractive() {
      return y();
    },
    set isInteractive(L = !0) {
      y(L), E();
    },
    get colours() {
      return _();
    },
    set colours(L) {
      _(L), E();
    }
  });
}
customElements.define("abcnews-hexmap", Ne(
  ul,
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
    colours: {}
  },
  [],
  [],
  !0
));
export {
  Ve as A,
  Fe as B,
  W as C,
  ne as D,
  Se as E,
  qe as F,
  ul as H,
  Ye as a,
  S as b,
  ge as c,
  $ as d,
  st as e,
  es as f,
  b as g,
  Ge as h,
  Fn as i,
  bt as j,
  rr as k,
  ir as l,
  H as m,
  Ke as n,
  Dn as o,
  he as p,
  ve as q,
  D as r,
  Be as s,
  Oe as t,
  ze as u,
  E as v,
  ar as w,
  ts as x,
  Ne as y,
  at as z
};
