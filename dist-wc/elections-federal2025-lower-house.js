var Cn = Object.defineProperty;
var yo = (e) => {
  throw TypeError(e);
};
var Sn = (e, t, o) => t in e ? Cn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var Z = (e, t, o) => Sn(e, typeof t != "symbol" ? t + "" : t, o), go = (e, t, o) => t.has(e) || yo("Cannot " + o);
var T = (e, t, o) => (go(e, t, "read from private field"), o ? o.call(e) : t.get(e)), Re = (e, t, o) => t.has(e) ? yo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), rt = (e, t, o, n) => (go(e, t, "write to private field"), n ? n.call(e, o) : t.set(e, o), o);
const kn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(kn);
const to = 1, oo = 2, To = 4, Tn = 8, On = 16, Rn = 1, In = 4, Mn = 8, $n = 16, Bn = 4, Dn = 2, Oo = "[", no = "[!", ro = "]", Qe = {}, W = Symbol(), mo = !1, te = 2, Ro = 4, Tt = 8, Ot = 16, ge = 32, Ze = 64, Nt = 128, X = 256, bt = 512, j = 1024, me = 2048, et = 4096, pe = 8192, Rt = 16384, Io = 32768, ht = 65536, Fn = 1 << 19, Mo = 1 << 20, ze = Symbol("$state"), ao = Symbol("legacy props"), Wn = Symbol("");
var so = Array.isArray, Hn = Array.prototype.indexOf, io = Array.from, At = Object.keys, st = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, jn = Object.getOwnPropertyDescriptors, Gn = Object.prototype, Kn = Array.prototype, $o = Object.getPrototypeOf;
function Ve(e) {
  return typeof e == "function";
}
const K = () => {
};
function Bo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let it = [], Kt = [];
function Do() {
  var e = it;
  it = [], Bo(e);
}
function Un() {
  var e = Kt;
  Kt = [], Bo(e);
}
function It(e) {
  it.length === 0 && queueMicrotask(Do), it.push(e);
}
function _o() {
  it.length > 0 && Do(), Kt.length > 0 && Un();
}
function Fo(e) {
  return e === this.v;
}
function Wo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yn(e, t) {
  return e !== t;
}
function lo(e) {
  return !Wo(e, this.v);
}
function Vn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Qn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Jn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Zn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function er() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function tr() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function or() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let nr = !1;
function G(e, t) {
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
function $e(e) {
  return /* @__PURE__ */ rr(G(e));
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t = !1) {
  const o = G(e);
  return t || (o.equals = lo), o;
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return k !== null && !ee && k.f & te && (ie === null ? dr([e]) : ie.push(e)), e;
}
function R(e, t) {
  return k !== null && !ee && rn() && k.f & (te | Ot) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ie === null || !ie.includes(e)) && or(), Ut(e, t);
}
function Ut(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Qo(), Ho(e, me), S !== null && S.f & j && !(S.f & (ge | Ze)) && (ue === null ? cr([e]) : ue.push(e))), t;
}
function Ho(e, t) {
  var o = e.reactions;
  if (o !== null)
    for (var n = o.length, r = 0; r < n; r++) {
      var a = o[r], s = a.f;
      s & me || (ce(a, t), s & (j | X) && (s & te ? Ho(
        /** @type {Derived} */
        a,
        et
      ) : Dt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  var t = te | me, o = k !== null && k.f & te ? (
    /** @type {Derived} */
    k
  ) : null;
  return S === null || o !== null && o.f & X ? t |= X : S.f |= Mo, {
    ctx: U,
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
    parent: o ?? S
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e) {
  const t = /* @__PURE__ */ se(e);
  return t.equals = lo, t;
}
function jo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var o = 0; o < t.length; o += 1)
      oe(
        /** @type {Effect} */
        t[o]
      );
  }
}
function sr(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & te))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ir(e) {
  var t, o = S;
  de(sr(e));
  try {
    jo(e), t = Xo(e);
  } finally {
    de(o);
  }
  return t;
}
function Go(e) {
  var t = ir(e), o = (Se || e.f & X) && e.deps !== null ? et : j;
  ce(e, o), e.equals(t) || (e.v = t, e.wv = Qo());
}
function $t(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let E = !1;
function ve(e) {
  E = e;
}
let C;
function J(e) {
  if (e === null)
    throw $t(), Qe;
  return C = e;
}
function Be() {
  return J(
    /** @type {TemplateNode} */
    /* @__PURE__ */ _e(C)
  );
}
function M(e) {
  if (E) {
    if (/* @__PURE__ */ _e(C) !== null)
      throw $t(), Qe;
    C = e;
  }
}
function Yt() {
  for (var e = 0, t = C; ; ) {
    if (t.nodeType === 8) {
      var o = (
        /** @type {Comment} */
        t.data
      );
      if (o === ro) {
        if (e === 0) return t;
        e -= 1;
      } else (o === Oo || o === no) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(t)
    );
    t.remove(), t = n;
  }
}
function Ee(e, t = null, o) {
  if (typeof e != "object" || e === null || ze in e)
    return e;
  const n = $o(e);
  if (n !== Gn && n !== Kn)
    return e;
  var r = /* @__PURE__ */ new Map(), a = so(e), s = G(0);
  a && r.set("length", G(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Zn();
        var c = r.get(l);
        return c === void 0 ? (c = G(u.value), r.set(l, c)) : R(c, Ee(u.value, i)), !0;
      },
      deleteProperty(d, l) {
        var u = r.get(l);
        if (u === void 0)
          l in d && r.set(l, G(W));
        else {
          if (a && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              r.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && R(c, f);
          }
          R(u, W), wo(s);
        }
        return !0;
      },
      get(d, l, u) {
        var v;
        if (l === ze)
          return e;
        var c = r.get(l), f = l in d;
        if (c === void 0 && (!f || (v = xe(d, l)) != null && v.writable) && (c = G(Ee(f ? d[l] : W, i)), r.set(l, c)), c !== void 0) {
          var h = p(c);
          return h === W ? void 0 : h;
        }
        return Reflect.get(d, l, u);
      },
      getOwnPropertyDescriptor(d, l) {
        var u = Reflect.getOwnPropertyDescriptor(d, l);
        if (u && "value" in u) {
          var c = r.get(l);
          c && (u.value = p(c));
        } else if (u === void 0) {
          var f = r.get(l), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(d, l) {
        var h;
        if (l === ze)
          return !0;
        var u = r.get(l), c = u !== void 0 && u.v !== W || Reflect.has(d, l);
        if (u !== void 0 || S !== null && (!c || (h = xe(d, l)) != null && h.writable)) {
          u === void 0 && (u = G(c ? Ee(d[l], i) : W), r.set(l, u));
          var f = p(u);
          if (f === W)
            return !1;
        }
        return c;
      },
      set(d, l, u, c) {
        var b;
        var f = r.get(l), h = l in d;
        if (a && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          f.v; v += 1) {
            var x = r.get(v + "");
            x !== void 0 ? R(x, W) : v in d && (x = G(W), r.set(v + "", x));
          }
        f === void 0 ? (!h || (b = xe(d, l)) != null && b.writable) && (f = G(void 0), R(f, Ee(u, i)), r.set(l, f)) : (h = f.v !== W, R(f, Ee(u, i)));
        var g = Reflect.getOwnPropertyDescriptor(d, l);
        if (g != null && g.set && g.set.call(c, u), !h) {
          if (a && typeof l == "string") {
            var P = (
              /** @type {Source<number>} */
              r.get("length")
            ), L = Number(l);
            Number.isInteger(L) && L >= P.v && R(P, L + 1);
          }
          wo(s);
        }
        return !0;
      },
      ownKeys(d) {
        p(s);
        var l = Reflect.ownKeys(d).filter((f) => {
          var h = r.get(f);
          return h === void 0 || h.v !== W;
        });
        for (var [u, c] of r)
          c.v !== W && !(u in d) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        er();
      }
    }
  );
}
function wo(e, t = 1) {
  R(e, e.v + t);
}
var No, Ko, Uo, Yo;
function Vt() {
  if (No === void 0) {
    No = window, Ko = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Uo = xe(t, "firstChild").get, Yo = xe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Je(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function z(e) {
  return Uo.call(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return Yo.call(e);
}
function D(e, t) {
  if (!E)
    return /* @__PURE__ */ z(e);
  var o = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ z(C)
  );
  if (o === null)
    o = C.appendChild(Je());
  else if (t && o.nodeType !== 3) {
    var n = Je();
    return o == null || o.before(n), J(n), n;
  }
  return J(o), o;
}
function lr(e, t) {
  if (!E) {
    var o = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ z(
        /** @type {Node} */
        e
      )
    );
    return o instanceof Comment && o.data === "" ? /* @__PURE__ */ _e(o) : o;
  }
  return C;
}
function Ce(e, t = 1, o = !1) {
  let n = E ? C : e;
  for (var r; t--; )
    r = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ _e(n);
  if (!E)
    return n;
  var a = n == null ? void 0 : n.nodeType;
  if (o && a !== 3) {
    var s = Je();
    return n === null ? r == null || r.after(s) : n.before(s), J(s), s;
  }
  return J(n), /** @type {TemplateNode} */
  n;
}
function Vo(e) {
  e.textContent = "";
}
let mt = !1, Pt = !1, Lt = null, _t = !1, co = !1;
function bo(e) {
  co = e;
}
let at = [];
let k = null, ee = !1;
function le(e) {
  k = e;
}
let S = null;
function de(e) {
  S = e;
}
let ie = null;
function dr(e) {
  ie = e;
}
let H = null, q = 0, ue = null;
function cr(e) {
  ue = e;
}
let qo = 1, Et = 0, Se = !1;
function Qo() {
  return ++qo;
}
function vt(e) {
  var c;
  var t = e.f;
  if (t & me)
    return !0;
  if (t & et) {
    var o = e.deps, n = (t & X) !== 0;
    if (o !== null) {
      var r, a, s = (t & bt) !== 0, i = n && S !== null && !Se, d = o.length;
      if (s || i) {
        var l = (
          /** @type {Derived} */
          e
        ), u = l.parent;
        for (r = 0; r < d; r++)
          a = o[r], (s || !((c = a == null ? void 0 : a.reactions) != null && c.includes(l))) && (a.reactions ?? (a.reactions = [])).push(l);
        s && (l.f ^= bt), i && u !== null && !(u.f & X) && (l.f ^= X);
      }
      for (r = 0; r < d; r++)
        if (a = o[r], vt(
          /** @type {Derived} */
          a
        ) && Go(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || S !== null && !Se) && ce(e, j);
  }
  return !1;
}
function ur(e, t) {
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
function fr(e) {
  return (e.f & Rt) === 0 && (e.parent === null || (e.parent.f & Nt) === 0);
}
function Bt(e, t, o, n) {
  if (mt) {
    if (o === null && (mt = !1), fr(t))
      throw e;
    return;
  }
  o !== null && (mt = !0);
  {
    ur(e, t);
    return;
  }
}
function zo(e, t, o = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.f & te ? zo(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (o ? ce(a, me) : a.f & j && ce(a, et), Dt(
        /** @type {Effect} */
        a
      ));
    }
}
function Xo(e) {
  var h;
  var t = H, o = q, n = ue, r = k, a = Se, s = ie, i = U, d = ee, l = e.f;
  H = /** @type {null | Value[]} */
  null, q = 0, ue = null, Se = (l & X) !== 0 && (ee || !_t || k === null), k = l & (ge | Ze) ? null : e, ie = null, Ao(e.ctx), ee = !1, Et++;
  try {
    var u = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (H !== null) {
      var f;
      if (Ct(e, q), c !== null && q > 0)
        for (c.length = q + H.length, f = 0; f < H.length; f++)
          c[q + f] = H[f];
      else
        e.deps = c = H;
      if (!Se)
        for (f = q; f < c.length; f++)
          ((h = c[f]).reactions ?? (h.reactions = [])).push(e);
    } else c !== null && q < c.length && (Ct(e, q), c.length = q);
    if (rn() && ue !== null && !ee && c !== null && !(e.f & (te | et | me)))
      for (f = 0; f < /** @type {Source[]} */
      ue.length; f++)
        zo(
          ue[f],
          /** @type {Effect} */
          e
        );
    return r !== null && Et++, u;
  } finally {
    H = t, q = o, ue = n, k = r, Se = a, ie = s, Ao(i), ee = d;
  }
}
function hr(e, t) {
  let o = t.reactions;
  if (o !== null) {
    var n = Hn.call(o, e);
    if (n !== -1) {
      var r = o.length - 1;
      r === 0 ? o = t.reactions = null : (o[n] = o[r], o.pop());
    }
  }
  o === null && t.f & te && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (H === null || !H.includes(t)) && (ce(t, et), t.f & (X | bt) || (t.f ^= bt), jo(
    /** @type {Derived} **/
    t
  ), Ct(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ct(e, t) {
  var o = e.deps;
  if (o !== null)
    for (var n = t; n < o.length; n++)
      hr(e, o[n]);
}
function uo(e) {
  var t = e.f;
  if (!(t & Rt)) {
    ce(e, j);
    var o = S, n = U, r = _t;
    S = e, _t = !0;
    try {
      t & Ot ? br(e) : en(e), Zo(e);
      var a = Xo(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = qo;
      var s = e.deps, i;
      mo && nr && e.f & me;
    } catch (d) {
      Bt(d, e, o, n || e.ctx);
    } finally {
      _t = r, S = o;
    }
  }
}
function vr() {
  try {
    zn();
  } catch (e) {
    if (Lt !== null)
      Bt(e, Lt, null);
    else
      throw e;
  }
}
function Jo() {
  try {
    for (var e = 0; at.length > 0; ) {
      e++ > 1e3 && vr();
      var t = at, o = t.length;
      at = [];
      for (var n = 0; n < o; n++) {
        var r = t[n];
        r.f & j || (r.f ^= j);
        var a = xr(r);
        pr(a);
      }
    }
  } finally {
    Pt = !1, Lt = null;
  }
}
function pr(e) {
  var t = e.length;
  if (t !== 0)
    for (var o = 0; o < t; o++) {
      var n = e[o];
      if (!(n.f & (Rt | pe)))
        try {
          vt(n) && (uo(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? tn(n) : n.fn = null));
        } catch (r) {
          Bt(r, n, null, n.ctx);
        }
    }
}
function Dt(e) {
  Pt || (Pt = !0, queueMicrotask(Jo));
  for (var t = Lt = e; t.parent !== null; ) {
    t = t.parent;
    var o = t.f;
    if (o & (Ze | ge)) {
      if (!(o & j)) return;
      t.f ^= j;
    }
  }
  at.push(t);
}
function xr(e) {
  var t = [], o = e.first;
  e: for (; o !== null; ) {
    var n = o.f, r = (n & ge) !== 0, a = r && (n & j) !== 0, s = o.next;
    if (!a && !(n & pe)) {
      if (n & Ro)
        t.push(o);
      else if (r)
        o.f ^= j;
      else {
        var i = k;
        try {
          k = o, vt(o) && uo(o);
        } catch (u) {
          Bt(u, o, null, o.ctx);
        } finally {
          k = i;
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
        var l = u.next;
        if (l !== null) {
          o = l;
          continue e;
        }
        u = u.parent;
      }
    }
    o = s;
  }
  return t;
}
function m(e) {
  var t;
  for (_o(); at.length > 0; )
    Pt = !0, Jo(), _o();
  return (
    /** @type {T} */
    t
  );
}
function p(e) {
  var t = e.f, o = (t & te) !== 0;
  if (k !== null && !ee) {
    ie !== null && ie.includes(e) && tr();
    var n = k.deps;
    e.rv < Et && (e.rv = Et, H === null && n !== null && n[q] === e ? q++ : H === null ? H = [e] : (!Se || !H.includes(e)) && H.push(e));
  } else if (o && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), a = r.parent;
    a !== null && !(a.f & X) && (r.f ^= X);
  }
  return o && (r = /** @type {Derived} */
  e, vt(r) && Go(r)), e.v;
}
function ke(e) {
  var t = ee;
  try {
    return ee = !0, e();
  } finally {
    ee = t;
  }
}
const yr = -7169;
function ce(e, t) {
  e.f = e.f & yr | t;
}
function gr(e) {
  S === null && k === null && Qn(), k !== null && k.f & X && S === null && qn(), co && Vn();
}
function mr(e, t) {
  var o = t.last;
  o === null ? t.last = t.first = e : (o.next = e, e.prev = o, t.last = e);
}
function Fe(e, t, o, n = !0) {
  var r = (e & Ze) !== 0, a = S, s = {
    ctx: U,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | me,
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
      uo(s), s.f |= Io;
    } catch (l) {
      throw oe(s), l;
    }
  else t !== null && Dt(s);
  var i = o && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Mo | Nt)) === 0;
  if (!i && !r && n && (a !== null && mr(s, a), k !== null && k.f & te)) {
    var d = (
      /** @type {Derived} */
      k
    );
    (d.effects ?? (d.effects = [])).push(s);
  }
  return s;
}
function _r(e) {
  const t = Fe(Tt, null, !1);
  return ce(t, j), t.teardown = e, t;
}
function lt(e) {
  gr();
  var t = S !== null && (S.f & ge) !== 0 && U !== null && !U.m;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      U
    );
    (o.e ?? (o.e = [])).push({
      fn: e,
      effect: S,
      reaction: k
    });
  } else {
    var n = Ft(e);
    return n;
  }
}
function wr(e) {
  const t = Fe(Ze, e, !0);
  return () => {
    oe(t);
  };
}
function Nr(e) {
  const t = Fe(Ze, e, !0);
  return (o = {}) => new Promise((n) => {
    o.outro ? dt(t, () => {
      oe(t), n(void 0);
    }) : (oe(t), n(void 0));
  });
}
function Ft(e) {
  return Fe(Ro, e, !1);
}
function fo(e) {
  return Fe(Tt, e, !0);
}
function De(e, t = [], o = se) {
  const n = t.map(o);
  return tt(() => e(...n.map(p)));
}
function tt(e, t = 0) {
  return Fe(Tt | Ot | t, e, !0);
}
function Te(e, t = !0) {
  return Fe(Tt | ge, e, !0, t);
}
function Zo(e) {
  var t = e.teardown;
  if (t !== null) {
    const o = co, n = k;
    bo(!0), le(null);
    try {
      t.call(null);
    } finally {
      bo(o), le(n);
    }
  }
}
function en(e, t = !1) {
  var o = e.first;
  for (e.first = e.last = null; o !== null; ) {
    var n = o.next;
    oe(o, t), o = n;
  }
}
function br(e) {
  for (var t = e.first; t !== null; ) {
    var o = t.next;
    t.f & ge || oe(t), t = o;
  }
}
function oe(e, t = !0) {
  var o = !1;
  if ((t || e.f & Fn) && e.nodes_start !== null) {
    for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
      var a = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(n)
      );
      n.remove(), n = a;
    }
    o = !0;
  }
  en(e, t && !o), Ct(e, 0), ce(e, Rt);
  var s = e.transitions;
  if (s !== null)
    for (const d of s)
      d.stop();
  Zo(e);
  var i = e.parent;
  i !== null && i.first !== null && tn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function tn(e) {
  var t = e.parent, o = e.prev, n = e.next;
  o !== null && (o.next = n), n !== null && (n.prev = o), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = o));
}
function dt(e, t) {
  var o = [];
  ho(e, o, !0), on(o, () => {
    oe(e), t && t();
  });
}
function on(e, t) {
  var o = e.length;
  if (o > 0) {
    var n = () => --o || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function ho(e, t, o) {
  if (!(e.f & pe)) {
    if (e.f ^= pe, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || o) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & ht) !== 0 || (n.f & ge) !== 0;
      ho(n, t, a ? o : !1), n = r;
    }
  }
}
function St(e) {
  nn(e, !0);
}
function nn(e, t) {
  if (e.f & pe) {
    e.f ^= pe, e.f & j || (e.f ^= j), vt(e) && (ce(e, me), Dt(e));
    for (var o = e.first; o !== null; ) {
      var n = o.next, r = (o.f & ht) !== 0 || (o.f & ge) !== 0;
      nn(o, r ? t : !1), o = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Ar(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let U = null;
function Ao(e) {
  U = e;
}
function we(e, t = !1, o) {
  U = {
    p: U,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Ne(e) {
  const t = U;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var o = S, n = k;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var a = s[r];
          de(a.effect), le(a.reaction), Ft(a.fn);
        }
      } finally {
        de(o), le(n);
      }
    }
    U = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function rn() {
  return !0;
}
const Pr = ["touchstart", "touchmove"];
function Lr(e) {
  return Pr.includes(e);
}
function Er(e) {
  var t = k, o = S;
  le(null), de(null);
  try {
    return e();
  } finally {
    le(t), de(o);
  }
}
const an = /* @__PURE__ */ new Set(), qt = /* @__PURE__ */ new Set();
function sn(e) {
  for (var t = 0; t < e.length; t++)
    an.add(e[t]);
  for (var o of qt)
    o(e);
}
function pt(e) {
  var L;
  var t = this, o = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((L = e.composedPath) == null ? void 0 : L.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var d = r.indexOf(i);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = r.indexOf(t);
    if (l === -1)
      return;
    d <= l && (s = d);
  }
  if (a = /** @type {Element} */
  r[s] || e.target, a !== t) {
    st(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || o;
      }
    });
    var u = k, c = S;
    le(null), de(null);
    try {
      for (var f, h = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + n];
          if (x !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (so(x)) {
              var [g, ...P] = x;
              g.apply(a, [e, ...P]);
            } else
              x.call(a, e);
        } catch (b) {
          f ? h.push(b) : f = b;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let b of h)
          queueMicrotask(() => {
            throw b;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, le(u), de(c);
    }
  }
}
function vo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ye(e, t) {
  var o = (
    /** @type {Effect} */
    S
  );
  o.nodes_start === null && (o.nodes_start = e, o.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var o = (t & Dn) !== 0, n, r = !e.startsWith("<!>");
  return () => {
    if (E)
      return ye(C, null), C;
    n === void 0 && (n = vo(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ z(n));
    var a = (
      /** @type {TemplateNode} */
      o || Ko ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return ye(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function po(e, t, o = "svg") {
  var n = !e.startsWith("<!>"), r = `<${o}>${n ? e : "<!>" + e}</${o}>`, a;
  return () => {
    if (E)
      return ye(C, null), C;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        vo(r)
      ), i = (
        /** @type {Element} */
        /* @__PURE__ */ z(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ z(i);
    }
    var d = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ye(d, d), d;
  };
}
function Cr() {
  if (E)
    return ye(C, null), C;
  var e = document.createDocumentFragment(), t = document.createComment(""), o = Je();
  return e.append(t, o), ye(t, o), e;
}
function Y(e, t) {
  if (E) {
    S.nodes_end = C, Be();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Qt = !0;
function kt(e, t) {
  var o = t == null ? "" : typeof t == "object" ? t + "" : t;
  o !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = o, e.nodeValue = o + "");
}
function ln(e, t) {
  return dn(e, t);
}
function Sr(e, t) {
  Vt(), t.intro = t.intro ?? !1;
  const o = t.target, n = E, r = C;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ z(o)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Oo); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ _e(a);
    if (!a)
      throw Qe;
    ve(!0), J(
      /** @type {Comment} */
      a
    ), Be();
    const s = dn(e, { ...t, anchor: a });
    if (C === null || C.nodeType !== 8 || /** @type {Comment} */
    C.data !== ro)
      throw $t(), Qe;
    return ve(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Qe)
      return t.recover === !1 && Xn(), Vt(), Vo(o), ve(!1), ln(e, t);
    throw s;
  } finally {
    ve(n), J(r);
  }
}
const Ue = /* @__PURE__ */ new Map();
function dn(e, { target: t, anchor: o, props: n = {}, events: r, context: a, intro: s = !0 }) {
  Vt();
  var i = /* @__PURE__ */ new Set(), d = (c) => {
    for (var f = 0; f < c.length; f++) {
      var h = c[f];
      if (!i.has(h)) {
        i.add(h);
        var v = Lr(h);
        t.addEventListener(h, pt, { passive: v });
        var x = Ue.get(h);
        x === void 0 ? (document.addEventListener(h, pt, { passive: v }), Ue.set(h, 1)) : Ue.set(h, x + 1);
      }
    }
  };
  d(io(an)), qt.add(d);
  var l = void 0, u = Nr(() => {
    var c = o ?? t.appendChild(Je());
    return Te(() => {
      if (a) {
        we({});
        var f = (
          /** @type {ComponentContext} */
          U
        );
        f.c = a;
      }
      r && (n.$$events = r), E && ye(
        /** @type {TemplateNode} */
        c,
        null
      ), Qt = s, l = e(c, n) || {}, Qt = !0, E && (S.nodes_end = C), a && Ne();
    }), () => {
      var v;
      for (var f of i) {
        t.removeEventListener(f, pt);
        var h = (
          /** @type {number} */
          Ue.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, pt), Ue.delete(f)) : Ue.set(f, h);
      }
      qt.delete(d), c !== o && ((v = c.parentNode) == null || v.removeChild(c));
    };
  });
  return zt.set(l, u), l;
}
let zt = /* @__PURE__ */ new WeakMap();
function kr(e, t) {
  const o = zt.get(e);
  return o ? (zt.delete(e), o(t)) : Promise.resolve();
}
function Xt(e, t, o = !1) {
  E && Be();
  var n = e, r = null, a = null, s = W, i = o ? ht : 0, d = !1;
  const l = (c, f = !0) => {
    d = !0, u(f, c);
  }, u = (c, f) => {
    if (s === (s = c)) return;
    let h = !1;
    if (E) {
      const v = (
        /** @type {Comment} */
        n.data === no
      );
      !!s === v && (n = Yt(), J(n), ve(!1), h = !0);
    }
    s ? (r ? St(r) : f && (r = Te(() => f(n))), a && dt(a, () => {
      a = null;
    })) : (a ? St(a) : f && (a = Te(() => f(n))), r && dt(r, () => {
      r = null;
    })), h && ve(!0);
  };
  tt(() => {
    d = !1, t(l), d || u(null, null);
  }, i), E && (n = C);
}
function Tr(e, t, o) {
  E && Be();
  var n = e, r = W, a, s = Yn;
  tt(() => {
    s(r, r = t()) && (a && dt(a), a = Te(() => o(n)));
  }), E && (n = C);
}
function ct(e, t) {
  return t;
}
function Or(e, t, o, n) {
  for (var r = [], a = t.length, s = 0; s < a; s++)
    ho(t[s].e, r, !0);
  var i = a > 0 && r.length === 0 && o !== null;
  if (i) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      o.parentNode
    );
    Vo(d), d.append(
      /** @type {Element} */
      o
    ), n.clear(), Le(e, t[0].prev, t[a - 1].next);
  }
  on(r, () => {
    for (var l = 0; l < a; l++) {
      var u = t[l];
      i || (n.delete(u.k), Le(e, u.prev, u.next)), oe(u.e, !i);
    }
  });
}
function ut(e, t, o, n, r, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, d = (t & To) !== 0;
  if (d) {
    var l = (
      /** @type {Element} */
      e
    );
    s = E ? J(
      /** @type {Comment | Text} */
      /* @__PURE__ */ z(l)
    ) : l.appendChild(Je());
  }
  E && Be();
  var u = null, c = !1, f = /* @__PURE__ */ ar(() => {
    var h = o();
    return so(h) ? h : h == null ? [] : io(h);
  });
  tt(() => {
    var h = p(f), v = h.length;
    if (c && v === 0)
      return;
    c = v === 0;
    let x = !1;
    if (E) {
      var g = (
        /** @type {Comment} */
        s.data === no
      );
      g !== (v === 0) && (s = Yt(), J(s), ve(!1), x = !0);
    }
    if (E) {
      for (var P = null, L, b = 0; b < v; b++) {
        if (C.nodeType === 8 && /** @type {Comment} */
        C.data === ro) {
          s = /** @type {Comment} */
          C, x = !0, ve(!1);
          break;
        }
        var _ = h[b], N = n(_, b);
        L = cn(
          C,
          i,
          P,
          null,
          _,
          N,
          b,
          r,
          t,
          o
        ), i.items.set(N, L), P = L;
      }
      v > 0 && J(Yt());
    }
    E || Rr(h, i, s, r, t, n, o), a !== null && (v === 0 ? u ? St(u) : u = Te(() => a(s)) : u !== null && dt(u, () => {
      u = null;
    })), x && ve(!0), p(f);
  }), E && (s = C);
}
function Rr(e, t, o, n, r, a, s) {
  var He, Pe, je, A;
  var i = (r & Tn) !== 0, d = (r & (to | oo)) !== 0, l = e.length, u = t.items, c = t.first, f = c, h, v = null, x, g = [], P = [], L, b, _, N;
  if (i)
    for (N = 0; N < l; N += 1)
      L = e[N], b = a(L, N), _ = u.get(b), _ !== void 0 && ((He = _.a) == null || He.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(_));
  for (N = 0; N < l; N += 1) {
    if (L = e[N], b = a(L, N), _ = u.get(b), _ === void 0) {
      var O = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : o;
      v = cn(
        O,
        t,
        v,
        v === null ? t.first : v.next,
        L,
        b,
        N,
        n,
        r,
        s
      ), u.set(b, v), g = [], P = [], f = v.next;
      continue;
    }
    if (d && Ir(_, L, N, r), _.e.f & pe && (St(_.e), i && ((Pe = _.a) == null || Pe.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(_))), _ !== f) {
      if (h !== void 0 && h.has(_)) {
        if (g.length < P.length) {
          var I = P[0], $;
          v = I.prev;
          var V = g[0], ne = g[g.length - 1];
          for ($ = 0; $ < g.length; $ += 1)
            Po(g[$], I, o);
          for ($ = 0; $ < P.length; $ += 1)
            h.delete(P[$]);
          Le(t, V.prev, ne.next), Le(t, v, V), Le(t, ne, I), f = I, v = ne, N -= 1, g = [], P = [];
        } else
          h.delete(_), Po(_, f, o), Le(t, _.prev, _.next), Le(t, _, v === null ? t.first : v.next), Le(t, v, _), v = _;
        continue;
      }
      for (g = [], P = []; f !== null && f.k !== b; )
        f.e.f & pe || (h ?? (h = /* @__PURE__ */ new Set())).add(f), P.push(f), f = f.next;
      if (f === null)
        continue;
      _ = f;
    }
    g.push(_), v = _, f = _.next;
  }
  if (f !== null || h !== void 0) {
    for (var F = h === void 0 ? [] : io(h); f !== null; )
      f.e.f & pe || F.push(f), f = f.next;
    var Ae = F.length;
    if (Ae > 0) {
      var re = r & To && l === 0 ? o : null;
      if (i) {
        for (N = 0; N < Ae; N += 1)
          (je = F[N].a) == null || je.measure();
        for (N = 0; N < Ae; N += 1)
          (A = F[N].a) == null || A.fix();
      }
      Or(t, F, re, u);
    }
  }
  i && It(() => {
    var Ge;
    if (x !== void 0)
      for (_ of x)
        (Ge = _.a) == null || Ge.apply();
  }), S.first = t.first && t.first.e, S.last = v && v.e;
}
function Ir(e, t, o, n) {
  n & to && Ut(e.v, t), n & oo ? Ut(
    /** @type {Value<number>} */
    e.i,
    o
  ) : e.i = o;
}
function cn(e, t, o, n, r, a, s, i, d, l) {
  var u = (d & to) !== 0, c = (d & On) === 0, f = u ? c ? /* @__PURE__ */ Mt(r) : G(r) : r, h = d & oo ? G(s) : s, v = {
    i: h,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: o,
    next: n
  };
  try {
    return v.e = Te(() => i(e, f, h, l), E), v.e.prev = o && o.e, v.e.next = n && n.e, o === null ? t.first = v : (o.next = v, o.e.next = v.e), n !== null && (n.prev = v, n.e.prev = v.e), v;
  } finally {
  }
}
function Po(e, t, o) {
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
      /* @__PURE__ */ _e(a)
    );
    r.before(a), a = s;
  }
}
function Le(e, t, o) {
  t === null ? e.first = o : (t.next = o, t.e.next = o && o.e), o !== null && (o.prev = t, o.e.prev = t && t.e);
}
function xt(e, t, o, n, r) {
  var a = e, s = "", i;
  tt(() => {
    if (s === (s = t() ?? "")) {
      E && Be();
      return;
    }
    i !== void 0 && (oe(i), i = void 0), s !== "" && (i = Te(() => {
      if (E) {
        C.data;
        for (var d = Be(), l = d; d !== null && (d.nodeType !== 8 || /** @type {Comment} */
        d.data !== ""); )
          l = d, d = /** @type {TemplateNode} */
          /* @__PURE__ */ _e(d);
        if (d === null)
          throw $t(), Qe;
        ye(C, l), a = J(d);
        return;
      }
      var u = s + "";
      u = `<svg>${u}</svg>`;
      var c = vo(u);
      for (c = /** @type {Element} */
      /* @__PURE__ */ z(c), ye(
        /** @type {TemplateNode} */
        /* @__PURE__ */ z(c),
        /** @type {TemplateNode} */
        c.lastChild
      ); /* @__PURE__ */ z(c); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ z(c)
        );
    }));
  });
}
function un(e, t, ...o) {
  var n = e, r = K, a;
  tt(() => {
    r !== (r = t()) && (a && (oe(a), a = null), a = Te(() => (
      /** @type {SnippetFn} */
      r(n, ...o)
    )));
  }, ht), E && (n = C);
}
function We(e, t) {
  It(() => {
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
const Lo = [...` 	
\r\f \v\uFEFF`];
function Mr(e, t, o) {
  var n = e == null ? "" : "" + e;
  if (o) {
    for (var r in o)
      if (o[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var a = r.length, s = 0; (s = n.indexOf(r, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || Lo.includes(n[s - 1])) && (i === n.length || Lo.includes(n[i])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(i + 1) : s = i;
        }
  }
  return n === "" ? null : n;
}
function Wt(e, t, o, n, r, a) {
  var s = e.__className;
  if (E || s !== o) {
    var i = Mr(o, n, a);
    (!E || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = o;
  } else if (a) {
    r ?? (r = {});
    for (var d in a) {
      var l = !!a[d];
      l !== !!r[d] && e.classList.toggle(d, l);
    }
  }
  return a;
}
function Ht(e, t, o, n) {
  var r = e.__attributes ?? (e.__attributes = {});
  E && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = o) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Wn] = o), o == null ? e.removeAttribute(t) : typeof o != "string" && $r(e).includes(t) ? e[t] = o : e.setAttribute(t, o));
}
var Eo = /* @__PURE__ */ new Map();
function $r(e) {
  var t = Eo.get(e.nodeName);
  if (t) return t;
  Eo.set(e.nodeName, t = []);
  for (var o, n = e, r = Element.prototype; r !== n; ) {
    o = jn(n);
    for (var a in o)
      o[a].set && t.push(a);
    n = $o(n);
  }
  return t;
}
function Ie(e, t, o, n) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== o && (r[t] = o, o == null ? e.style.removeProperty(t) : e.style.setProperty(t, o, ""));
}
const Br = () => performance.now(), ae = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Br(),
  tasks: /* @__PURE__ */ new Set()
};
function fn() {
  const e = ae.now();
  ae.tasks.forEach((t) => {
    t.c(e) || (ae.tasks.delete(t), t.f());
  }), ae.tasks.size !== 0 && ae.tick(fn);
}
function hn(e) {
  let t;
  return ae.tasks.size === 0 && ae.tick(fn), {
    promise: new Promise((o) => {
      ae.tasks.add(t = { c: e, f: o });
    }),
    abort() {
      ae.tasks.delete(t);
    }
  };
}
function yt(e, t) {
  Er(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Dr(e) {
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
  for (const n of o) {
    const [r, a] = n.split(":");
    if (!r || a === void 0) break;
    const s = Dr(r.trim());
    t[s] = a.trim();
  }
  return t;
}
const Fr = (e) => e;
function Wr(e, t, o, n) {
  var r = (e & Bn) !== 0, a = "both", s, i = t.inert, d = t.style.overflow, l, u;
  function c() {
    var g = k, P = S;
    le(null), de(null);
    try {
      return s ?? (s = o()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      le(g), de(P);
    }
  }
  var f = {
    is_global: r,
    in() {
      t.inert = i, yt(t, "introstart"), l = Jt(t, c(), u, 1, () => {
        yt(t, "introend"), l == null || l.abort(), l = s = void 0, t.style.overflow = d;
      });
    },
    out(g) {
      t.inert = !0, yt(t, "outrostart"), u = Jt(t, c(), l, 0, () => {
        yt(t, "outroend"), g == null || g();
      });
    },
    stop: () => {
      l == null || l.abort(), u == null || u.abort();
    }
  }, h = (
    /** @type {Effect} */
    S
  );
  if ((h.transitions ?? (h.transitions = [])).push(f), Qt) {
    var v = r;
    if (!v) {
      for (var x = (
        /** @type {Effect | null} */
        h.parent
      ); x && x.f & ht; )
        for (; (x = x.parent) && !(x.f & Ot); )
          ;
      v = !x || (x.f & Io) !== 0;
    }
    v && Ft(() => {
      ke(() => f.in());
    });
  }
}
function Jt(e, t, o, n, r) {
  var a = n === 1;
  if (Ve(t)) {
    var s, i = !1;
    return It(() => {
      if (!i) {
        var g = t({ direction: a ? "in" : "out" });
        s = Jt(e, g, o, n, r);
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
      abort: K,
      deactivate: K,
      reset: K,
      t: () => n
    };
  const { delay: d = 0, css: l, tick: u, easing: c = Fr } = t;
  var f = [];
  if (a && o === void 0 && (u && u(0, 1), l)) {
    var h = Co(l(0, 1));
    f.push(h, h);
  }
  var v = () => 1 - n, x = e.animate(f, { duration: d });
  return x.onfinish = () => {
    var g = (o == null ? void 0 : o.t()) ?? 1 - n;
    o == null || o.abort();
    var P = n - g, L = (
      /** @type {number} */
      t.duration * Math.abs(P)
    ), b = [];
    if (L > 0) {
      var _ = !1;
      if (l)
        for (var N = Math.ceil(L / 16.666666666666668), O = 0; O <= N; O += 1) {
          var I = g + P * c(O / N), $ = Co(l(I, 1 - I));
          b.push($), _ || (_ = $.overflow === "hidden");
        }
      _ && (e.style.overflow = "hidden"), v = () => {
        var V = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          x.currentTime
        );
        return g + P * c(V / L);
      }, u && hn(() => {
        if (x.playState !== "running") return !1;
        var V = v();
        return u(V, 1 - V), !0;
      });
    }
    x = e.animate(b, { duration: L, fill: "forwards" }), x.onfinish = () => {
      v = () => n, u == null || u(n, 1 - n), r();
    };
  }, {
    abort: () => {
      x && (x.cancel(), x.effect = null, x.onfinish = K);
    },
    deactivate: () => {
      r = K;
    },
    reset: () => {
      n === 0 && (u == null || u(1, 0));
    },
    t: () => v()
  };
}
function So(e, t) {
  return e === t || (e == null ? void 0 : e[ze]) === t;
}
function vn(e = {}, t, o, n) {
  return Ft(() => {
    var r, a;
    return fo(() => {
      r = a, a = [], ke(() => {
        e !== o(...a) && (t(e, ...a), r && So(o(...r), e) && t(null, ...r));
      });
    }), () => {
      It(() => {
        a && So(o(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function pn(e) {
  U === null && Ar(), lt(() => {
    const t = ke(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function xn(e, t, o) {
  if (e == null)
    return t(void 0), K;
  const n = ke(
    () => e.subscribe(
      t,
      // @ts-expect-error
      o
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Ye = [];
function Hr(e, t = K) {
  let o = null;
  const n = /* @__PURE__ */ new Set();
  function r(i) {
    if (Wo(e, i) && (e = i, o)) {
      const d = !Ye.length;
      for (const l of n)
        l[1](), Ye.push(l, e);
      if (d) {
        for (let l = 0; l < Ye.length; l += 2)
          Ye[l][0](Ye[l + 1]);
        Ye.length = 0;
      }
    }
  }
  function a(i) {
    r(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, d = K) {
    const l = [i, d];
    return n.add(l), n.size === 1 && (o = t(r, a) || K), i(
      /** @type {T} */
      e
    ), () => {
      n.delete(l), n.size === 0 && o && (o(), o = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
function jr(e) {
  let t;
  return xn(e, (o) => t = o)(), t;
}
let gt = !1, Zt = Symbol();
function Gr(e, t, o) {
  const n = o[t] ?? (o[t] = {
    store: null,
    source: /* @__PURE__ */ Mt(void 0),
    unsubscribe: K
  });
  if (n.store !== e && !(Zt in o))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = K;
    else {
      var r = !0;
      n.unsubscribe = xn(e, (a) => {
        r ? n.source.v = a : R(n.source, a);
      }), r = !1;
    }
  return e && Zt in o ? jr(e) : p(n.source);
}
function Kr(e, t) {
  return e.set(t), t;
}
function Ur() {
  const e = {};
  function t() {
    _r(() => {
      for (var o in e)
        e[o].unsubscribe();
      st(e, Zt, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Yr(e, t, o) {
  return e.set(o), t;
}
function Vr(e) {
  var t = gt;
  try {
    return gt = !1, [e(), gt];
  } finally {
    gt = t;
  }
}
const qr = {
  get(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let n = e.props[o];
      if (Ve(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, o) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      Ve(r) && (r = r());
      const a = xe(r, t);
      if (a && a.set)
        return a.set(o), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let n = e.props[o];
      if (Ve(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const r = xe(n, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === ze || t === ao) return !1;
    for (let o of e.props)
      if (Ve(o) && (o = o()), o != null && t in o) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let o of e.props) {
      Ve(o) && (o = o());
      for (const n in o)
        t.includes(n) || t.push(n);
    }
    return t;
  }
};
function Qr(...e) {
  return new Proxy({ props: e }, qr);
}
function w(e, t, o, n) {
  var N;
  var r = (o & Rn) !== 0, a = !0, s = (o & Mn) !== 0, i = (o & $n) !== 0, d = !1, l;
  s ? [l, d] = Vr(() => (
    /** @type {V} */
    e[t]
  )) : l = /** @type {V} */
  e[t];
  var u = ze in e || ao in e, c = s && (((N = xe(e, t)) == null ? void 0 : N.set) ?? (u && t in e && ((O) => e[t] = O))) || void 0, f = (
    /** @type {V} */
    n
  ), h = !0, v = !1, x = () => (v = !0, h && (h = !1, i ? f = ke(
    /** @type {() => V} */
    n
  ) : f = /** @type {V} */
  n), f);
  l === void 0 && n !== void 0 && (c && a && Jn(), l = x(), c && c(l));
  var g;
  if (g = () => {
    var O = (
      /** @type {V} */
      e[t]
    );
    return O === void 0 ? x() : (h = !0, v = !1, O);
  }, !(o & In))
    return g;
  if (c) {
    var P = e.$$legacy;
    return function(O, I) {
      return arguments.length > 0 ? ((!I || P || d) && c(I ? g() : O), O) : g();
    };
  }
  var L = !1, b = /* @__PURE__ */ Mt(l), _ = /* @__PURE__ */ se(() => {
    var O = g(), I = p(b);
    return L ? (L = !1, I) : b.v = O;
  });
  return r || (_.equals = lo), function(O, I) {
    if (arguments.length > 0) {
      const $ = I ? p(_) : s ? Ee(O) : O;
      return _.equals($) || (L = !0, R(b, $), v && f !== void 0 && (f = $), ke(() => p(_))), O;
    }
    return p(_);
  };
}
function zr(e) {
  return new Xr(e);
}
var fe, Q;
class Xr {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Re(this, fe);
    /** @type {Record<string, any>} */
    Re(this, Q);
    var a;
    var o = /* @__PURE__ */ new Map(), n = (s, i) => {
      var d = /* @__PURE__ */ Mt(i);
      return o.set(s, d), d;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return p(o.get(i) ?? n(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === ao ? !0 : (p(o.get(i) ?? n(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, d) {
          return R(o.get(i) ?? n(i, d), d), Reflect.set(s, i, d);
        }
      }
    );
    rt(this, Q, (t.hydrate ? Sr : ln)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && m(), rt(this, fe, r.$$events);
    for (const s of Object.keys(T(this, Q)))
      s === "$set" || s === "$destroy" || s === "$on" || st(this, s, {
        get() {
          return T(this, Q)[s];
        },
        /** @param {any} value */
        set(i) {
          T(this, Q)[s] = i;
        },
        enumerable: !0
      });
    T(this, Q).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, T(this, Q).$destroy = () => {
      kr(T(this, Q));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    T(this, Q).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, o) {
    T(this, fe)[t] = T(this, fe)[t] || [];
    const n = (...r) => o.call(this, ...r);
    return T(this, fe)[t].push(n), () => {
      T(this, fe)[t] = T(this, fe)[t].filter(
        /** @param {any} fn */
        (r) => r !== n
      );
    };
  }
  $destroy() {
    T(this, Q).$destroy();
  }
}
fe = new WeakMap(), Q = new WeakMap();
let yn;
typeof HTMLElement == "function" && (yn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, o, n) {
    super();
    /** The Svelte component constructor */
    Z(this, "$$ctor");
    /** Slots */
    Z(this, "$$s");
    /** @type {any} The Svelte component instance */
    Z(this, "$$c");
    /** Whether or not the custom element is connected */
    Z(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Z(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Z(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Z(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Z(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Z(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Z(this, "$$me");
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
          r !== "default" && (s.name = r), Y(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, n = Jr(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), o.default = !0) : o[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = wt(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = zr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = wr(() => {
        fo(() => {
          var r;
          this.$$r = !0;
          for (const a of At(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = wt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = wt(t, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
    return At(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === t || !this.$$p_d[o].attribute && o.toLowerCase() === t
    ) || t;
  }
});
function wt(e, t, o, n) {
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
function Jr(e) {
  const t = {};
  return e.childNodes.forEach((o) => {
    t[
      /** @type {Element} node */
      o.slot || "default"
    ] = !0;
  }), t;
}
function Oe(e, t, o, n, r, a) {
  let s = class extends yn {
    constructor() {
      super(e, o, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return At(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return At(t).forEach((i) => {
    st(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(d) {
        var c;
        d = wt(i, d, t), this.$$d[i] = d;
        var l = this.$$c;
        if (l) {
          var u = (c = xe(l, i)) == null ? void 0 : c.get;
          u ? l[i] = d : l.$set({ [i]: d });
        }
      }
    });
  }), n.forEach((i) => {
    st(s.prototype, i, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function ko(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Zr(e) {
  return e;
}
function ea(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function eo(e, t) {
  if (e === t || e !== e) return () => e;
  const o = typeof e;
  if (o !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const n = (
      /** @type {Array<any>} */
      t.map((r, a) => eo(
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
    if (ko(e) && ko(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (d) => new Date(a + d * i);
    }
    const n = Object.keys(t), r = {};
    return n.forEach((a) => {
      r[a] = eo(e[a], t[a]);
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
var he, Xe, ft, Me;
const xo = class xo {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, o = {}) {
    Re(this, he, G(
      /** @type {T} */
      void 0
    ));
    Re(this, Xe, G(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Re(this, ft);
    /** @type {import('../internal/client/types').Task | null} */
    Re(this, Me, null);
    T(this, he).v = T(this, Xe).v = t, rt(this, ft, o);
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
    const n = new xo(t(), o);
    return fo(() => {
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
    var c;
    R(T(this, Xe), t);
    let {
      delay: n = 0,
      duration: r = 400,
      easing: a = Zr,
      interpolate: s = eo
    } = { ...T(this, ft), ...o };
    if (r === 0)
      return (c = T(this, Me)) == null || c.abort(), R(T(this, he), t), Promise.resolve();
    const i = ae.now() + n;
    let d, l = !1, u = T(this, Me);
    return rt(this, Me, hn((f) => {
      if (f < i)
        return !0;
      if (!l) {
        l = !0;
        const v = T(this, he).v;
        d = s(v, t), typeof r == "function" && (r = r(v, t)), u == null || u.abort();
      }
      const h = f - i;
      return h > /** @type {number} */
      r ? (R(T(this, he), t), !1) : (R(T(this, he), d(a(h / /** @type {number} */
      r))), !0);
    })), T(this, Me).promise;
  }
  get current() {
    return p(T(this, he));
  }
  get target() {
    return p(T(this, Xe));
  }
  set target(t) {
    this.set(t);
  }
};
he = new WeakMap(), Xe = new WeakMap(), ft = new WeakMap(), Me = new WeakMap();
let qe = xo;
var ta = /* @__PURE__ */ po("<g><text> </text></g>"), oa = /* @__PURE__ */ po('<g class="hexlabels svelte-ejrww9"></g>');
const na = {
  hash: "svelte-ejrww9",
  code: ".hexlabels.svelte-ejrww9 {pointer-events:none;}.hexlabels__text.svelte-ejrww9 {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:9px;font-family:sans-serif;text-anchor:middle;}.hexlabels__text--allocation.svelte-ejrww9 {fill:white;}"
};
function gn(e, t) {
  we(t, !0), We(e, na);
  let o = w(t, "hexes", 7), n = w(t, "allocations", 7), r = w(t, "labelsToShow", 23, () => ({})), a = w(t, "showElectorateLabels", 7, !1), s = /* @__PURE__ */ se(() => a() ? o() : o().filter(({ id: d }) => r()[d]));
  var i = oa();
  return ut(i, 21, () => p(s), ct, (d, l) => {
    let u = () => p(l).id, c = () => p(l).coordPx, f = () => p(l).shortName;
    var h = ta(), v = D(h);
    let x;
    var g = D(v, !0);
    M(v), M(h), De(
      (P) => {
        Ht(h, "transform", P), x = Wt(v, 0, "hexlabels__text svelte-ejrww9", null, x, {
          "hexlabels__text--allocation": n()[u()]
        }), kt(g, f());
      },
      [
        () => `translate(${c().join(" ")})`
      ]
    ), Y(d, h);
  }), M(i), Y(e, i), Ne({
    get hexes() {
      return o();
    },
    set hexes(d) {
      o(d), m();
    },
    get allocations() {
      return n();
    },
    set allocations(d) {
      n(d), m();
    },
    get labelsToShow() {
      return r();
    },
    set labelsToShow(d = {}) {
      r(d), m();
    },
    get showElectorateLabels() {
      return a();
    },
    set showElectorateLabels(d = !1) {
      a(d), m();
    }
  });
}
Oe(
  gn,
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
var ra = /* @__PURE__ */ po('<g><g class="group-hexes svelte-1tykyyj"><!></g><g class="group-outline group-outline__under svelte-1tykyyj"><!></g><g class="group-hex-strokes svelte-1tykyyj"><!></g><!><g class="group-outline group-outline__over svelte-1tykyyj"><!></g></g>');
const aa = {
  hash: "svelte-1tykyyj",
  code: `.group.svelte-1tykyyj:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-1tykyyj {display:none;}.group--hidden.svelte-1tykyyj {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-1tykyyj,
.group-outline.svelte-1tykyyj {pointer-events:none;}.group.svelte-1tykyyj .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-1tykyyj .hex-outline {fill:none;stroke:var(--c-state-outline);stroke-width:1px;transition:opacity 0.5s, stroke 0.5s;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-1tykyyj:not(.group--has-focuses) .group-outline:where(.svelte-1tykyyj) .hex-outline {stroke:var(--c-empty-state-outline);}.group-hexes.svelte-1tykyyj .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-1tykyyj .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-1tykyyj .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-1tykyyj .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-1tykyyj .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-1tykyyj .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-1tykyyj .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-1tykyyj .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-1tykyyj .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-1tykyyj .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-1tykyyj .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-1tykyyj .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-1tykyyj .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-1tykyyj .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-1tykyyj .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-null-border);stroke-width:1;}.group-hexes.svelte-1tykyyj .hex[data-userfocused="true"] {fill:limegreen !important;}.group--map-is-empty.svelte-1tykyyj .group-hexes:where(.svelte-1tykyyj) .hex {fill:var(--a-empty);stroke:var(--a-empty-border);stroke-width:0.5;}.group-hex-strokes.svelte-1tykyyj .hex {fill:transparent;stroke:transparent;stroke-width:1px;}.group-hex-strokes.svelte-1tykyyj .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filled-border);stroke-width:1px;}.group-hex-strokes.svelte-1tykyyj .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);}.group--has-focuses.svelte-1tykyyj .group-hexes:where(.svelte-1tykyyj) .hex {stroke-width:1;}.group--has-focuses.svelte-1tykyyj .group-hexes:where(.svelte-1tykyyj) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-1tykyyj .group-hex-strokes:where(.svelte-1tykyyj) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-1tykyyj .group-hexes:where(.svelte-1tykyyj) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-1tykyyj .group-hex-strokes:where(.svelte-1tykyyj) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-1tykyyj .group-hexes:where(.svelte-1tykyyj) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-1tykyyj .group-hex-strokes:where(.svelte-1tykyyj) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--has-focuses.svelte-1tykyyj:not(.group--map-is-empty) .group-outline:where(.svelte-1tykyyj) .hex-outline {stroke:#60646c;}`
};
function mn(e, t) {
  we(t, !0), We(e, aa);
  let o = w(t, "name", 7, ""), n = w(t, "svgHexes", 7, ""), r = w(t, "hexes", 23, () => []), a = w(t, "svgOutline", 7, ""), s = w(t, "offset", 23, () => [1 / 0, 1 / 0]), i = w(t, "hasAllocations", 7), d = w(t, "allocations", 7), l = w(t, "focuses", 7), u = w(t, "hasAnyFocuses", 7, !1), c = w(t, "labelsToShow", 23, () => ({})), f = w(t, "showElectorateLabels", 7), h = w(t, "showFocusedElectorateLabels", 7), v = w(t, "isStaticLayout", 7);
  const x = 16;
  function g(A = [0, 0]) {
    const Ge = A[0] * (x * Math.sqrt(3)), y = A[1] * 1.5 * x;
    return [Ge, y].map((B) => `${Math.round(B)}px`);
  }
  let P = $e(`translate(${g(s()).join(",")})`), L = $e(!1), b = /* @__PURE__ */ se(() => s()[0] !== 1 / 0);
  lt(() => {
    p(b) && (R(P, `translate(${g(s()).join(",")})`), R(L, !0));
  });
  let _ = /* @__PURE__ */ se(() => u() && h() ? l() : c());
  var N = ra();
  let O;
  var I = D(N), $ = D(I);
  xt($, n), M(I);
  var V = Ce(I), ne = D(V);
  xt(ne, a), M(V);
  var F = Ce(V), Ae = D(F);
  xt(Ae, n), M(F);
  var re = Ce(F);
  {
    var He = (A) => {
      gn(A, {
        get hexes() {
          return r();
        },
        get allocations() {
          return d();
        },
        get labelsToShow() {
          return p(_);
        },
        get showElectorateLabels() {
          return f();
        }
      });
    };
    Xt(re, (A) => {
      p(b) && A(He);
    });
  }
  var Pe = Ce(re), je = D(Pe);
  return xt(je, a), M(Pe), M(N), De(() => {
    O = Wt(N, 0, "group svelte-1tykyyj", null, O, {
      "group--never-rendered": !p(L),
      "group--hidden": !p(b),
      "group--map-is-static": v(),
      "group--map-is-empty": !i(),
      "group--has-focuses": u()
    }), Ht(N, "data-name", o()), Ie(N, "transform", p(P)), Ie(Pe, "opacity", u() && !i() ? 0 : 1);
  }), Y(e, N), Ne({
    get name() {
      return o();
    },
    set name(A = "") {
      o(A), m();
    },
    get svgHexes() {
      return n();
    },
    set svgHexes(A = "") {
      n(A), m();
    },
    get hexes() {
      return r();
    },
    set hexes(A = []) {
      r(A), m();
    },
    get svgOutline() {
      return a();
    },
    set svgOutline(A = "") {
      a(A), m();
    },
    get offset() {
      return s();
    },
    set offset(A = [1 / 0, 1 / 0]) {
      s(A), m();
    },
    get hasAllocations() {
      return i();
    },
    set hasAllocations(A) {
      i(A), m();
    },
    get allocations() {
      return d();
    },
    set allocations(A) {
      d(A), m();
    },
    get focuses() {
      return l();
    },
    set focuses(A) {
      l(A), m();
    },
    get hasAnyFocuses() {
      return u();
    },
    set hasAnyFocuses(A = !1) {
      u(A), m();
    },
    get labelsToShow() {
      return c();
    },
    set labelsToShow(A = {}) {
      c(A), m();
    },
    get showElectorateLabels() {
      return f();
    },
    set showElectorateLabels(A) {
      f(A), m();
    },
    get showFocusedElectorateLabels() {
      return h();
    },
    set showFocusedElectorateLabels(A) {
      h(A), m();
    },
    get isStaticLayout() {
      return v();
    },
    set isStaticLayout(A) {
      v(A), m();
    }
  });
}
Oe(
  mn,
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
const sa = (e) => e;
function ia(e, { delay: t = 0, duration: o = 400, easing: n = sa } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: n,
    css: (a) => `opacity: ${a * r}`
  };
}
var la = /* @__PURE__ */ be('<div class="state-labels__label svelte-dbcm70"> </div>'), da = /* @__PURE__ */ be('<div aria-hidden="true"></div>');
const ca = {
  hash: "svelte-dbcm70",
  code: `.state-labels.svelte-dbcm70 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-dbcm70 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-dbcm70 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-dbcm70 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-dbcm70 .state-labels__label:where(.svelte-dbcm70) {-webkit-text-stroke:2px #f1f1f1;paint-order:stroke fill;}`
};
function _n(e, t) {
  we(t, !0), We(e, ca);
  let o = w(t, "labels", 7), n = w(t, "overlayLabels", 7, !1);
  var r = da();
  let a;
  return ut(r, 21, o, ct, (s, i) => {
    var d = Cr(), l = lr(d);
    Tr(l, () => p(i).name, (u) => {
      var c = la(), f = D(c, !0);
      M(c), De(
        (h) => {
          Ie(c, "left", p(i).left + "%"), Ie(c, "top", p(i).top + "%"), Ie(c, "width", p(i).width + "%"), Ie(c, "margin-left", h), kt(f, p(i).name);
        },
        [
          () => Math.round(0 - p(i).width / 2) + "%"
        ]
      ), Wr(3, c, () => ia, () => ({ duration: 1e3 })), Y(u, c);
    }), Y(s, d);
  }), M(r), De(() => a = Wt(r, 1, "state-labels svelte-dbcm70", null, a, { "state-labels--overlaid": n() })), Y(e, r), Ne({
    get labels() {
      return o();
    },
    set labels(s) {
      o(s), m();
    },
    get overlayLabels() {
      return n();
    },
    set overlayLabels(s = !1) {
      n(s), m();
    }
  });
}
Oe(_n, { labels: {}, overlayLabels: {} }, [], [], !0);
var ua = /* @__PURE__ */ be('<span class="accessible-hide svelte-ivafae"><!></span>');
const fa = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function wn(e, t) {
  we(t, !0), We(e, fa);
  let o = w(t, "children", 7);
  var n = ua(), r = D(n);
  return un(r, () => o() ?? K), M(n), Y(e, n), Ne({
    get children() {
      return o();
    },
    set children(a) {
      o(a), m();
    }
  });
}
Oe(wn, { children: {} }, [], [], !0);
function ha(e, t) {
  R(t, Ee(e.target.dataset.id));
}
function va(e, t) {
  var n;
  const o = e.tardet.dataset.id;
  (n = t()) == null || n({ code: o, clientX: null, clientY: null });
}
function pa(e, t) {
  p(t) === e.target.dataset.id && R(t, null);
}
var xa = /* @__PURE__ */ be("<li><button> </button></li>"), ya = /* @__PURE__ */ be("<li> <ul></ul></li>"), ga = /* @__PURE__ */ be("<ul></ul>");
const ma = { hash: "svelte-45h", code: "" };
function Nn(e, t) {
  we(t, !0), We(e, ma);
  let o = w(t, "groups", 7), n = w(t, "onChange", 7), r = w(t, "onClick", 7), a = $e(null);
  lt(() => {
    var i;
    (i = n()) == null || i(p(a));
  });
  let s = /* @__PURE__ */ se(() => o().map((i) => ({
    ...i,
    hexes: i.hexes.toSorted((d, l) => d.coord[0] + d.coord[1] * 1e3 - (l.coord[0] + l.coord[1] * 1e3))
  })));
  return wn(e, {
    children: (i, d) => {
      var l = ga();
      l.__click = [va, r], l.__focusin = [ha, a], l.__focusout = [pa, a], ut(l, 21, () => p(s), ct, (u, c) => {
        var f = ya(), h = D(f), v = Ce(h);
        ut(v, 21, () => p(c).hexes, ct, (x, g) => {
          var P = xa(), L = D(P), b = D(L, !0);
          M(L), M(P), De(() => {
            Ht(L, "data-id", p(g).id), kt(b, p(g).name);
          }), Y(x, P);
        }), M(v), M(f), De(() => kt(h, `${p(c).name ?? ""} `)), Y(u, f);
      }), M(l), Y(i, l);
    },
    $$slots: { default: !0 }
  }), Ne({
    get groups() {
      return o();
    },
    set groups(i) {
      o(i), m();
    },
    get onChange() {
      return n();
    },
    set onChange(i) {
      n(i), m();
    },
    get onClick() {
      return r();
    },
    set onClick(i) {
      r(i), m();
    }
  });
}
sn(["click", "focusin", "focusout"]);
Oe(Nn, { groups: {}, onChange: {}, onClick: {} }, [], [], !0);
var _a = ({ target: e, clientX: t, clientY: o }, n) => {
  var a;
  const r = (a = e == null ? void 0 : e.dataset) == null ? void 0 : a.id;
  !r || !n() || n()({ code: r, clientX: t, clientY: o });
}, wa = /* @__PURE__ */ be('<div class="hexmap__labels svelte-ko8kvy"><!></div>'), Na = /* @__PURE__ */ be('<div class="hexmap svelte-ko8kvy"><div><svg class="svelte-ko8kvy"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!></svg> <!></div> <!></div>');
const ba = {
  hash: "svelte-ko8kvy",
  code: ".hexmap.svelte-ko8kvy {position:relative;width:100%;height:100%;position:relative;}.hexmap__labels.svelte-ko8kvy {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-ko8kvy svg:where(.svelte-ko8kvy) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-ko8kvy {position:relative;margin:0 auto;max-height:100%;}"
};
function bn(e, t) {
  we(t, !0), We(e, ba);
  let o = w(t, "config", 23, () => ({})), n = w(t, "layout", 23, () => ({})), r = w(t, "allocations", 23, () => ({})), a = w(t, "focuses", 23, () => ({})), s = w(t, "certainties", 23, () => ({})), i = w(t, "labelsToShow", 23, () => ({})), d = w(t, "showStateLabels", 7, !1), l = w(t, "showElectorateLabels", 7, !1), u = w(t, "showFocusedElectorateLabels", 7, !1), c = w(t, "isStaticLayout", 7, !1), f = w(t, "onClick", 7, () => {
  }), h = w(t, "isInteractive", 7, !1), v = $e(void 0), x = $e(0), g = $e(null), P = /* @__PURE__ */ se(() => Object.values(a()).some(Boolean)), L = /* @__PURE__ */ se(() => {
    const y = Object.values(r());
    return y.length !== 0 && y.some(Boolean);
  });
  const b = n().viewbox, _ = { easing: ea, duration: 1100 };
  let N = new qe(b[0], _), O = new qe(b[1], _), I = new qe(b[2], _), $ = new qe(b[3], _);
  lt(() => {
    const [y, B, ot, jt] = n().viewbox;
    N.set(y), O.set(B), I.set(ot), $.set(jt);
  });
  let V = /* @__PURE__ */ se(() => {
    var y;
    return Array.from(((y = p(v)) == null ? void 0 : y.querySelectorAll("polygon.hex")) || []).filter((B) => B instanceof SVGPolygonElement);
  });
  lt(() => {
    const y = { ...r() }, B = a(), ot = s(), jt = p(g);
    p(V).forEach((Ke) => {
      const nt = Ke.dataset.id;
      if (!nt)
        return;
      const Pn = y[nt] || null;
      Ke.dataset.allocation = Pn;
      const Ln = p(P) ? B[nt] || !1 : !0;
      Ke.dataset.focused = Ln;
      const En = ot[nt] || null;
      Ke.dataset.certain = En, nt === jt ? Ke.dataset.userfocused = "true" : delete Ke.dataset.userfocused;
    });
  }), pn(() => {
    if (!p(v))
      return;
    const y = p(v).getBoundingClientRect();
    R(x, y.height / y.width);
  });
  var ne = Na();
  ne.__click = [_a, f];
  var F = D(ne);
  let Ae;
  var re = D(F), He = Ce(D(re));
  ut(He, 17, () => o().groups, ct, (y, B) => {
    mn(y, Qr(() => p(B), {
      get isStaticLayout() {
        return c();
      },
      get layout() {
        return n();
      },
      get offset() {
        return n().positions[p(B).name];
      },
      get hasAllocations() {
        return p(L);
      },
      get allocations() {
        return r();
      },
      get focuses() {
        return a();
      },
      get hasAnyFocuses() {
        return p(P);
      },
      get showElectorateLabels() {
        return l();
      },
      get showFocusedElectorateLabels() {
        return u();
      },
      get labelsToShow() {
        return i();
      }
    }));
  }), M(re), vn(re, (y) => R(v, y), () => p(v));
  var Pe = Ce(re, 2);
  {
    var je = (y) => {
      var B = wa(), ot = D(B);
      _n(ot, {
        get labels() {
          return n().labels;
        },
        get overlayLabels() {
          return n().overlayLabels;
        }
      }), M(B), Y(y, B);
    };
    Xt(Pe, (y) => {
      d() && y(je);
    });
  }
  M(F);
  var A = Ce(F, 2);
  {
    var Ge = (y) => {
      Nn(y, {
        get groups() {
          return o().groups;
        },
        onChange: (B) => {
          R(g, Ee(B));
        },
        get onClick() {
          return f();
        }
      });
    };
    Xt(A, (y) => {
      h() && y(Ge);
    });
  }
  return M(ne), De(
    (y, B) => {
      Ae = Wt(F, 1, "hexmap__viz svelte-ko8kvy", null, Ae, {
        "hexmap__viz--vertical": p(x) <= 1
      }), Ie(F, "aspect-ratio", y), Ht(re, "viewBox", B);
    },
    [
      () => p(x) ? p(x).toFixed(3) : null,
      () => [
        N.current,
        O.current,
        I.current,
        $.current
      ].join(" ")
    ]
  ), Y(e, ne), Ne({
    get config() {
      return o();
    },
    set config(y = {}) {
      o(y), m();
    },
    get layout() {
      return n();
    },
    set layout(y = {}) {
      n(y), m();
    },
    get allocations() {
      return r();
    },
    set allocations(y = {}) {
      r(y), m();
    },
    get focuses() {
      return a();
    },
    set focuses(y = {}) {
      a(y), m();
    },
    get certainties() {
      return s();
    },
    set certainties(y = {}) {
      s(y), m();
    },
    get labelsToShow() {
      return i();
    },
    set labelsToShow(y = {}) {
      i(y), m();
    },
    get showStateLabels() {
      return d();
    },
    set showStateLabels(y = !1) {
      d(y), m();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(y = !1) {
      l(y), m();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(y = !1) {
      u(y), m();
    },
    get isStaticLayout() {
      return c();
    },
    set isStaticLayout(y = !1) {
      c(y), m();
    },
    get onClick() {
      return f();
    },
    set onClick(y = () => {
    }) {
      f(y), m();
    },
    get isInteractive() {
      return h();
    },
    set isInteractive(y = !1) {
      h(y), m();
    }
  });
}
sn(["click"]);
Oe(
  bn,
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
    isInteractive: {}
  },
  [],
  [],
  !0
);
const Aa = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, Pa = {
  hashCodes: Aa
};
let Gt = Hr({});
var La = /* @__PURE__ */ be('<div class="style-root svelte-1y6eltw"><!></div>');
const Ea = {
  hash: "svelte-1y6eltw",
  code: ".style-root.svelte-1y6eltw * {box-sizing:border-box;}.style-root.svelte-1y6eltw {height:100%;font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-empty: #f1f1f1;--a-empty-border: black;--c-empty-state-outline: black;--c-state-outline: #949494;--a-null: #f1f1f1;--a-null-border: #fff;--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-CA: var(--c-ptyblack);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--c-filled-border: #fff;}"
};
function An(e, t) {
  we(t, !0), We(e, Ea);
  const [o, n] = Ur(), r = () => Gr(Gt, "$partyColours", o);
  let a = w(t, "children", 7), s = $e(void 0);
  pn(() => {
    if (!p(s))
      return;
    const u = window.getComputedStyle(p(s));
    Kr(Gt, {}), Object.keys(Pa.hashCodes).forEach((f) => {
      Yr(Gt, ke(r)[f] = u.getPropertyValue(`--a-${f}`), ke(r));
    });
  });
  var i = La(), d = D(i);
  un(d, () => a() ?? K), M(i), vn(i, (u) => R(s, u), () => p(s)), Y(e, i);
  var l = Ne({
    get children() {
      return a();
    },
    set children(u) {
      a(u), m();
    }
  });
  return n(), l;
}
Oe(An, { children: {} }, [], [], !0);
const Ca = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.0035, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 33.75, top: 30.75, width: 8, name: "NT" }, { left: 65.25, top: 21.5, width: 8, name: "QLD" }, { left: 57.75, top: 44.25, width: 8, name: "NSW" }, { left: 67.5, top: 57.75, width: 8, name: "ACT" }, { left: 58, top: 67.25, width: 8, name: "VIC" }, { left: 57.75, top: 86.25, width: 8, name: "TAS" }, { left: 34, top: 48.75, width: 8, name: "SA" }, { left: 24.5, top: 53.25, width: 8, name: "WA" }], overlayLabels: !0 }, Sa = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.5, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 71, top: 63.5, width: 8, name: "ACT" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, ka = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.75, width: 8, name: "NSW" }, { left: 60.25, top: 75, width: 8, name: "VIC" }, { left: 60.25, top: 94.25, width: 8, name: "TAS" }, { left: 30, top: 52.25, width: 8, name: "SA" }, { left: 15.75, top: 52.25, width: 8, name: "WA" }], overlayLabels: !0 }, Ta = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, Oa = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, Ra = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Ia = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, Ma = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, $a = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, Ba = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Da = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Fa = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Wa = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Ha = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, ja = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, Ga = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, Ka = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, Ua = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, Ya = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, Va = {
  COUNTRY: Ca,
  EXPLODED: Sa,
  EXPLODED_STATES_ONLY: ka,
  GRID: Ta,
  ACT: Oa,
  NSW: Ra,
  NT: Ia,
  QLD: Ma,
  SA: $a,
  TAS: Ba,
  VIC: Da,
  WA: Fa,
  ACT_NT: Wa,
  NSW_QLD: Ha,
  NSW_VIC: ja,
  QLD_VIC: Ga,
  QLD_WA: Ka,
  QLD_NSW_VIC: Ua,
  SA_TAS_WA: Ya
}, qa = 291, Qa = 200, za = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park.","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart.","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"River.","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New.","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Banks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lille","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long.","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More.","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Forde","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Corio","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wills","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='TMP1' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"TMP1","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), Xa = {
  svgWidth: qa,
  svgHeight: Qa,
  groups: za
};
function Ja(e, t) {
  we(t, !0);
  let o = w(t, "allocations", 23, () => ({})), n = w(t, "certainties", 23, () => ({})), r = w(t, "showStateLabels", 7, !1), a = w(t, "showElectorateLabels", 7, !1), s = w(t, "onClick", 7, () => {
  }), i = w(t, "layout", 7, "COUNTRY"), d = w(t, "focuses", 23, () => ({})), l = w(t, "isStaticLayout", 7, !0), u = w(t, "isInteractive", 7, !0);
  return An(e, {
    children: (c, f) => {
      bn(c, {
        config: Xa,
        get layout() {
          return Va[i()];
        },
        get allocations() {
          return o();
        },
        get certainties() {
          return n();
        },
        get focuses() {
          return d();
        },
        get showStateLabels() {
          return r();
        },
        get showElectorateLabels() {
          return a();
        },
        get onClick() {
          return s();
        },
        get isStaticLayout() {
          return l();
        },
        get isInteractive() {
          return u();
        }
      });
    },
    $$slots: { default: !0 }
  }), Ne({
    get allocations() {
      return o();
    },
    set allocations(c = {}) {
      o(c), m();
    },
    get certainties() {
      return n();
    },
    set certainties(c = {}) {
      n(c), m();
    },
    get showStateLabels() {
      return r();
    },
    set showStateLabels(c = !1) {
      r(c), m();
    },
    get showElectorateLabels() {
      return a();
    },
    set showElectorateLabels(c = !1) {
      a(c), m();
    },
    get onClick() {
      return s();
    },
    set onClick(c = () => {
    }) {
      s(c), m();
    },
    get layout() {
      return i();
    },
    set layout(c = "COUNTRY") {
      i(c), m();
    },
    get focuses() {
      return d();
    },
    set focuses(c = {}) {
      d(c), m();
    },
    get isStaticLayout() {
      return l();
    },
    set isStaticLayout(c = !0) {
      l(c), m();
    },
    get isInteractive() {
      return u();
    },
    set isInteractive(c = !0) {
      u(c), m();
    }
  });
}
customElements.define("abcnews-hexmap", Oe(
  Ja,
  {
    allocations: {},
    certainties: {},
    showStateLabels: {},
    showElectorateLabels: {},
    onClick: {},
    layout: {},
    focuses: {},
    isStaticLayout: {},
    isInteractive: {}
  },
  [],
  [],
  !0
));
export {
  Ja as default
};
