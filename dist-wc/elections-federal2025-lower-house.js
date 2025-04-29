var da = Object.defineProperty;
var gn = (e) => {
  throw TypeError(e);
};
var fa = (e, t, o) => t in e ? da(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var pe = (e, t, o) => fa(e, typeof t != "symbol" ? t + "" : t, o), To = (e, t, o) => t.has(e) || gn("Cannot " + o);
var S = (e, t, o) => (To(e, t, "read from private field"), o ? o.call(e) : t.get(e)), Le = (e, t, o) => t.has(e) ? gn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), ot = (e, t, o, n) => (To(e, t, "write to private field"), n ? n.call(e, o) : t.set(e, o), o), Nn = (e, t, o) => (To(e, t, "access private method"), o);
const ha = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ha);
const Ko = 1, Yo = 2, Bn = 4, pa = 8, va = 16, ga = 1, Na = 4, Pa = 8, xa = 16, ma = 4, Wn = 1, Oa = 2, Vn = "[", jo = "[!", zo = "]", pt = {}, J = Symbol(), Pn = !1, _e = 2, $n = 4, co = 8, uo = 16, Ve = 32, mt = 64, qt = 128, Pe = 256, Qt = 512, te = 1024, $e = 2048, Ot = 4096, We = 8192, fo = 16384, Un = 32768, kt = 65536, Aa = 1 << 19, Kn = 1 << 20, bt = Symbol("$state"), Yn = Symbol("legacy props"), La = Symbol("");
var qo = Array.isArray, wa = Array.prototype.indexOf, Qo = Array.from, Xt = Object.keys, Ct = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, Ta = Object.getOwnPropertyDescriptors, ya = Object.prototype, _a = Array.prototype, jn = Object.getPrototypeOf;
function ba(e) {
  return typeof e == "function";
}
const re = () => {
};
function zn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let Et = [], bo = [];
function qn() {
  var e = Et;
  Et = [], zn(e);
}
function Ra() {
  var e = bo;
  bo = [], zn(e);
}
function At(e) {
  Et.length === 0 && queueMicrotask(qn), Et.push(e);
}
function xn() {
  Et.length > 0 && qn(), bo.length > 0 && Ra();
}
function Qn(e) {
  return e === this.v;
}
function Xn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ca(e, t) {
  return e !== t;
}
function Xo(e) {
  return !Xn(e, this.v);
}
function Ea(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ha(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ia() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ga() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Da(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ka() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ma() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fa() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ba() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Wa = !1;
function ne(e, t) {
  var o = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qn,
    rv: 0,
    wv: 0
  };
  return o;
}
function ge(e) {
  return /* @__PURE__ */ Va(ne(e));
}
// @__NO_SIDE_EFFECTS__
function ho(e, t = !1) {
  const o = ne(e);
  return t || (o.equals = Xo), o;
}
// @__NO_SIDE_EFFECTS__
function Va(e) {
  return V !== null && !we && V.f & _e && (Se === null ? Ya([e]) : Se.push(e)), e;
}
function W(e, t) {
  return V !== null && !we && xr() && V.f & (_e | uo) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Se === null || !Se.includes(e)) && Ba(), Ro(e, t);
}
function Ro(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ir(), Zn(e, $e), F !== null && F.f & te && !(F.f & (Ve | mt)) && (Me === null ? ja([e]) : Me.push(e))), t;
}
function Zn(e, t) {
  var o = e.reactions;
  if (o !== null)
    for (var n = o.length, r = 0; r < n; r++) {
      var a = o[r], s = a.f;
      s & $e || (Ge(a, t), s & (te | Pe) && (s & _e ? Zn(
        /** @type {Derived} */
        a,
        Ot
      ) : go(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function K(e) {
  var t = _e | $e, o = V !== null && V.f & _e ? (
    /** @type {Derived} */
    V
  ) : null;
  return F === null || o !== null && o.f & Pe ? t |= Pe : F.f |= Kn, {
    ctx: z,
    deps: null,
    effects: null,
    equals: Qn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: o ?? F
  };
}
// @__NO_SIDE_EFFECTS__
function $a(e) {
  const t = /* @__PURE__ */ K(e);
  return t.equals = Xo, t;
}
function Jn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var o = 0; o < t.length; o += 1)
      be(
        /** @type {Effect} */
        t[o]
      );
  }
}
function Ua(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & _e))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Ka(e) {
  var t, o = F;
  Ie(Ua(e));
  try {
    Jn(e), t = cr(e);
  } finally {
    Ie(o);
  }
  return t;
}
function er(e) {
  var t = Ka(e), o = (Qe || e.f & Pe) && e.deps !== null ? Ot : te;
  Ge(e, o), e.equals(t) || (e.v = t, e.wv = ir());
}
function po(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let H = !1;
function ye(e) {
  H = e;
}
let I;
function de(e) {
  if (e === null)
    throw po(), pt;
  return I = e;
}
function at() {
  return de(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ke(I)
  );
}
function M(e) {
  if (H) {
    if (/* @__PURE__ */ ke(I) !== null)
      throw po(), pt;
    I = e;
  }
}
function Zt(e = 1) {
  if (H) {
    for (var t = e, o = I; t--; )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ ke(o);
    I = o;
  }
}
function Co() {
  for (var e = 0, t = I; ; ) {
    if (t.nodeType === 8) {
      var o = (
        /** @type {Comment} */
        t.data
      );
      if (o === zo) {
        if (e === 0) return t;
        e -= 1;
      } else (o === Vn || o === jo) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ke(t)
    );
    t.remove(), t = n;
  }
}
function ae(e, t = null, o) {
  if (typeof e != "object" || e === null || bt in e)
    return e;
  const n = jn(e);
  if (n !== ya && n !== _a)
    return e;
  var r = /* @__PURE__ */ new Map(), a = qo(e), s = ne(0);
  a && r.set("length", ne(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && ka();
        var u = r.get(l);
        return u === void 0 ? (u = ne(f.value), r.set(l, u)) : W(u, ae(f.value, i)), !0;
      },
      deleteProperty(c, l) {
        var f = r.get(l);
        if (f === void 0)
          l in c && r.set(l, ne(J));
        else {
          if (a && typeof l == "string") {
            var u = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h < u.v && W(u, h);
          }
          W(f, J), mn(s);
        }
        return !0;
      },
      get(c, l, f) {
        var d;
        if (l === bt)
          return e;
        var u = r.get(l), h = l in c;
        if (u === void 0 && (!h || (d = rt(c, l)) != null && d.writable) && (u = ne(ae(h ? c[l] : J, i)), r.set(l, u)), u !== void 0) {
          var v = N(u);
          return v === J ? void 0 : v;
        }
        return Reflect.get(c, l, f);
      },
      getOwnPropertyDescriptor(c, l) {
        var f = Reflect.getOwnPropertyDescriptor(c, l);
        if (f && "value" in f) {
          var u = r.get(l);
          u && (f.value = N(u));
        } else if (f === void 0) {
          var h = r.get(l), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== J)
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
        if (l === bt)
          return !0;
        var f = r.get(l), u = f !== void 0 && f.v !== J || Reflect.has(c, l);
        if (f !== void 0 || F !== null && (!u || (v = rt(c, l)) != null && v.writable)) {
          f === void 0 && (f = ne(u ? ae(c[l], i) : J), r.set(l, f));
          var h = N(f);
          if (h === J)
            return !1;
        }
        return u;
      },
      set(c, l, f, u) {
        var x;
        var h = r.get(l), v = l in c;
        if (a && l === "length")
          for (var d = f; d < /** @type {Source<number>} */
          h.v; d += 1) {
            var g = r.get(d + "");
            g !== void 0 ? W(g, J) : d in c && (g = ne(J), r.set(d + "", g));
          }
        h === void 0 ? (!v || (x = rt(c, l)) != null && x.writable) && (h = ne(void 0), W(h, ae(f, i)), r.set(l, h)) : (v = h.v !== J, W(h, ae(f, i)));
        var p = Reflect.getOwnPropertyDescriptor(c, l);
        if (p != null && p.set && p.set.call(u, f), !v) {
          if (a && typeof l == "string") {
            var L = (
              /** @type {Source<number>} */
              r.get("length")
            ), y = Number(l);
            Number.isInteger(y) && y >= L.v && W(L, y + 1);
          }
          mn(s);
        }
        return !0;
      },
      ownKeys(c) {
        N(s);
        var l = Reflect.ownKeys(c).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== J;
        });
        for (var [f, u] of r)
          u.v !== J && !(f in c) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        Ma();
      }
    }
  );
}
function mn(e, t = 1) {
  W(e, e.v + t);
}
var On, tr, or, nr, rr;
function Eo() {
  if (On === void 0) {
    On = window, tr = document, or = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    nr = rt(t, "firstChild").get, rr = rt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ze(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Z(e) {
  return nr.call(e);
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return rr.call(e);
}
function $(e, t) {
  if (!H)
    return /* @__PURE__ */ Z(e);
  var o = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Z(I)
  );
  if (o === null)
    o = I.appendChild(Ze());
  else if (t && o.nodeType !== 3) {
    var n = Ze();
    return o == null || o.before(n), de(n), n;
  }
  return de(o), o;
}
function Xe(e, t) {
  if (!H) {
    var o = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Z(
        /** @type {Node} */
        e
      )
    );
    return o instanceof Comment && o.data === "" ? /* @__PURE__ */ ke(o) : o;
  }
  return I;
}
function X(e, t = 1, o = !1) {
  let n = H ? I : e;
  for (var r; t--; )
    r = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ ke(n);
  if (!H)
    return n;
  var a = n == null ? void 0 : n.nodeType;
  if (o && a !== 3) {
    var s = Ze();
    return n === null ? r == null || r.after(s) : n.before(s), de(s), s;
  }
  return de(n), /** @type {TemplateNode} */
  n;
}
function ar(e) {
  e.textContent = "";
}
let Ut = !1, Jt = !1, eo = null, Kt = !1, Zo = !1;
function An(e) {
  Zo = e;
}
let Rt = [];
let V = null, we = !1;
function He(e) {
  V = e;
}
let F = null;
function Ie(e) {
  F = e;
}
let Se = null;
function Ya(e) {
  Se = e;
}
let ee = null, ce = 0, Me = null;
function ja(e) {
  Me = e;
}
let sr = 1, to = 0, Qe = !1;
function ir() {
  return ++sr;
}
function Mt(e) {
  var u;
  var t = e.f;
  if (t & $e)
    return !0;
  if (t & Ot) {
    var o = e.deps, n = (t & Pe) !== 0;
    if (o !== null) {
      var r, a, s = (t & Qt) !== 0, i = n && F !== null && !Qe, c = o.length;
      if (s || i) {
        var l = (
          /** @type {Derived} */
          e
        ), f = l.parent;
        for (r = 0; r < c; r++)
          a = o[r], (s || !((u = a == null ? void 0 : a.reactions) != null && u.includes(l))) && (a.reactions ?? (a.reactions = [])).push(l);
        s && (l.f ^= Qt), i && f !== null && !(f.f & Pe) && (l.f ^= Pe);
      }
      for (r = 0; r < c; r++)
        if (a = o[r], Mt(
          /** @type {Derived} */
          a
        ) && er(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || F !== null && !Qe) && Ge(e, te);
  }
  return !1;
}
function za(e, t) {
  for (var o = t; o !== null; ) {
    if (o.f & qt)
      try {
        o.fn(e);
        return;
      } catch {
        o.f ^= qt;
      }
    o = o.parent;
  }
  throw Ut = !1, e;
}
function qa(e) {
  return (e.f & fo) === 0 && (e.parent === null || (e.parent.f & qt) === 0);
}
function vo(e, t, o, n) {
  if (Ut) {
    if (o === null && (Ut = !1), qa(t))
      throw e;
    return;
  }
  o !== null && (Ut = !0);
  {
    za(e, t);
    return;
  }
}
function lr(e, t, o = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.f & _e ? lr(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (o ? Ge(a, $e) : a.f & te && Ge(a, Ot), go(
        /** @type {Effect} */
        a
      ));
    }
}
function cr(e) {
  var v;
  var t = ee, o = ce, n = Me, r = V, a = Qe, s = Se, i = z, c = we, l = e.f;
  ee = /** @type {null | Value[]} */
  null, ce = 0, Me = null, Qe = (l & Pe) !== 0 && (we || !Kt || V === null), V = l & (Ve | mt) ? null : e, Se = null, Ln(e.ctx), we = !1, to++;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), u = e.deps;
    if (ee !== null) {
      var h;
      if (oo(e, ce), u !== null && ce > 0)
        for (u.length = ce + ee.length, h = 0; h < ee.length; h++)
          u[ce + h] = ee[h];
      else
        e.deps = u = ee;
      if (!Qe)
        for (h = ce; h < u.length; h++)
          ((v = u[h]).reactions ?? (v.reactions = [])).push(e);
    } else u !== null && ce < u.length && (oo(e, ce), u.length = ce);
    if (xr() && Me !== null && !we && u !== null && !(e.f & (_e | Ot | $e)))
      for (h = 0; h < /** @type {Source[]} */
      Me.length; h++)
        lr(
          Me[h],
          /** @type {Effect} */
          e
        );
    return r !== null && to++, f;
  } finally {
    ee = t, ce = o, Me = n, V = r, Qe = a, Se = s, Ln(i), we = c;
  }
}
function Qa(e, t) {
  let o = t.reactions;
  if (o !== null) {
    var n = wa.call(o, e);
    if (n !== -1) {
      var r = o.length - 1;
      r === 0 ? o = t.reactions = null : (o[n] = o[r], o.pop());
    }
  }
  o === null && t.f & _e && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !ee.includes(t)) && (Ge(t, Ot), t.f & (Pe | Qt) || (t.f ^= Qt), Jn(
    /** @type {Derived} **/
    t
  ), oo(
    /** @type {Derived} **/
    t,
    0
  ));
}
function oo(e, t) {
  var o = e.deps;
  if (o !== null)
    for (var n = t; n < o.length; n++)
      Qa(e, o[n]);
}
function Jo(e) {
  var t = e.f;
  if (!(t & fo)) {
    Ge(e, te);
    var o = F, n = z, r = Kt;
    F = e, Kt = !0;
    try {
      t & uo ? as(e) : hr(e), fr(e);
      var a = cr(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = sr;
      var s = e.deps, i;
      Pn && Wa && e.f & $e;
    } catch (c) {
      vo(c, e, o, n || e.ctx);
    } finally {
      Kt = r, F = o;
    }
  }
}
function Xa() {
  try {
    Ia();
  } catch (e) {
    if (eo !== null)
      vo(e, eo, null);
    else
      throw e;
  }
}
function ur() {
  try {
    for (var e = 0; Rt.length > 0; ) {
      e++ > 1e3 && Xa();
      var t = Rt, o = t.length;
      Rt = [];
      for (var n = 0; n < o; n++) {
        var r = t[n];
        r.f & te || (r.f ^= te);
        var a = Ja(r);
        Za(a);
      }
    }
  } finally {
    Jt = !1, eo = null;
  }
}
function Za(e) {
  var t = e.length;
  if (t !== 0)
    for (var o = 0; o < t; o++) {
      var n = e[o];
      if (!(n.f & (fo | We)))
        try {
          Mt(n) && (Jo(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? pr(n) : n.fn = null));
        } catch (r) {
          vo(r, n, null, n.ctx);
        }
    }
}
function go(e) {
  Jt || (Jt = !0, queueMicrotask(ur));
  for (var t = eo = e; t.parent !== null; ) {
    t = t.parent;
    var o = t.f;
    if (o & (mt | Ve)) {
      if (!(o & te)) return;
      t.f ^= te;
    }
  }
  Rt.push(t);
}
function Ja(e) {
  var t = [], o = e.first;
  e: for (; o !== null; ) {
    var n = o.f, r = (n & Ve) !== 0, a = r && (n & te) !== 0, s = o.next;
    if (!a && !(n & We)) {
      if (n & $n)
        t.push(o);
      else if (r)
        o.f ^= te;
      else {
        var i = V;
        try {
          V = o, Mt(o) && Jo(o);
        } catch (f) {
          vo(f, o, null, o.ctx);
        } finally {
          V = i;
        }
      }
      var c = o.first;
      if (c !== null) {
        o = c;
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
function m(e) {
  var t;
  for (xn(); Rt.length > 0; )
    Jt = !0, ur(), xn();
  return (
    /** @type {T} */
    t
  );
}
function N(e) {
  var t = e.f, o = (t & _e) !== 0;
  if (V !== null && !we) {
    Se !== null && Se.includes(e) && Fa();
    var n = V.deps;
    e.rv < to && (e.rv = to, ee === null && n !== null && n[ce] === e ? ce++ : ee === null ? ee = [e] : (!Qe || !ee.includes(e)) && ee.push(e));
  } else if (o && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), a = r.parent;
    a !== null && !(a.f & Pe) && (r.f ^= Pe);
  }
  return o && (r = /** @type {Derived} */
  e, Mt(r) && er(r)), e.v;
}
function st(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const es = -7169;
function Ge(e, t) {
  e.f = e.f & es | t;
}
function ts(e) {
  F === null && V === null && Ha(), V !== null && V.f & Pe && F === null && Sa(), Zo && Ea();
}
function os(e, t) {
  var o = t.last;
  o === null ? t.last = t.first = e : (o.next = e, e.prev = o, t.last = e);
}
function lt(e, t, o, n = !0) {
  var r = (e & mt) !== 0, a = F, s = {
    ctx: z,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | $e,
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
      Jo(s), s.f |= Un;
    } catch (l) {
      throw be(s), l;
    }
  else t !== null && go(s);
  var i = o && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Kn | qt)) === 0;
  if (!i && !r && n && (a !== null && os(s, a), V !== null && V.f & _e)) {
    var c = (
      /** @type {Derived} */
      V
    );
    (c.effects ?? (c.effects = [])).push(s);
  }
  return s;
}
function dr(e) {
  const t = lt(co, null, !1);
  return Ge(t, te), t.teardown = e, t;
}
function De(e) {
  ts();
  var t = F !== null && (F.f & Ve) !== 0 && z !== null && !z.m;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      z
    );
    (o.e ?? (o.e = [])).push({
      fn: e,
      effect: F,
      reaction: V
    });
  } else {
    var n = Ft(e);
    return n;
  }
}
function ns(e) {
  const t = lt(mt, e, !0);
  return () => {
    be(t);
  };
}
function rs(e) {
  const t = lt(mt, e, !0);
  return (o = {}) => new Promise((n) => {
    o.outro ? St(t, () => {
      be(t), n(void 0);
    }) : (be(t), n(void 0));
  });
}
function Ft(e) {
  return lt($n, e, !1);
}
function en(e) {
  return lt(co, e, !0);
}
function xe(e, t = [], o = K) {
  const n = t.map(o);
  return Lt(() => e(...n.map(N)));
}
function Lt(e, t = 0) {
  return lt(co | uo | t, e, !0);
}
function Je(e, t = !0) {
  return lt(co | Ve, e, !0, t);
}
function fr(e) {
  var t = e.teardown;
  if (t !== null) {
    const o = Zo, n = V;
    An(!0), He(null);
    try {
      t.call(null);
    } finally {
      An(o), He(n);
    }
  }
}
function hr(e, t = !1) {
  var o = e.first;
  for (e.first = e.last = null; o !== null; ) {
    var n = o.next;
    be(o, t), o = n;
  }
}
function as(e) {
  for (var t = e.first; t !== null; ) {
    var o = t.next;
    t.f & Ve || be(t), t = o;
  }
}
function be(e, t = !0) {
  var o = !1;
  if ((t || e.f & Aa) && e.nodes_start !== null) {
    for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
      var a = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ke(n)
      );
      n.remove(), n = a;
    }
    o = !0;
  }
  hr(e, t && !o), oo(e, 0), Ge(e, fo);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  fr(e);
  var i = e.parent;
  i !== null && i.first !== null && pr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function pr(e) {
  var t = e.parent, o = e.prev, n = e.next;
  o !== null && (o.next = n), n !== null && (n.prev = o), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = o));
}
function St(e, t) {
  var o = [];
  tn(e, o, !0), vr(o, () => {
    be(e), t && t();
  });
}
function vr(e, t) {
  var o = e.length;
  if (o > 0) {
    var n = () => --o || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function tn(e, t, o) {
  if (!(e.f & We)) {
    if (e.f ^= We, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || o) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & kt) !== 0 || (n.f & Ve) !== 0;
      tn(n, t, a ? o : !1), n = r;
    }
  }
}
function no(e) {
  gr(e, !0);
}
function gr(e, t) {
  if (e.f & We) {
    e.f ^= We, e.f & te || (e.f ^= te), Mt(e) && (Ge(e, $e), go(e));
    for (var o = e.first; o !== null; ) {
      var n = o.next, r = (o.f & kt) !== 0 || (o.f & Ve) !== 0;
      gr(o, r ? t : !1), o = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Nr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let z = null;
function Ln(e) {
  z = e;
}
function Pr(e) {
  return (
    /** @type {T} */
    mr().get(e)
  );
}
function ss(e, t) {
  return mr().set(e, t), t;
}
function se(e, t = !1, o) {
  z = {
    p: z,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ie(e) {
  const t = z;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var o = F, n = V;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var a = s[r];
          Ie(a.effect), He(a.reaction), Ft(a.fn);
        }
      } finally {
        Ie(o), He(n);
      }
    }
    z = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function xr() {
  return !0;
}
function mr(e) {
  return z === null && Nr(), z.c ?? (z.c = new Map(is(z) || void 0));
}
function is(e) {
  let t = e.p;
  for (; t !== null; ) {
    const o = t.c;
    if (o !== null)
      return o;
    t = t.p;
  }
  return null;
}
function ls(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const cs = [
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
function us(e) {
  return cs.includes(e);
}
const ds = {
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
function fs(e) {
  return e = e.toLowerCase(), ds[e] ?? e;
}
const hs = ["touchstart", "touchmove"];
function ps(e) {
  return hs.includes(e);
}
function vs(e, t) {
  if (t) {
    const o = document.body;
    e.autofocus = !0, At(() => {
      document.activeElement === o && e.focus();
    });
  }
}
function Or(e) {
  var t = V, o = F;
  He(null), Ie(null);
  try {
    return e();
  } finally {
    He(t), Ie(o);
  }
}
const Ar = /* @__PURE__ */ new Set(), So = /* @__PURE__ */ new Set();
function Lr(e, t, o, n = {}) {
  function r(a) {
    if (n.capture || _t.call(t, a), !a.cancelBubble)
      return Or(() => o == null ? void 0 : o.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? At(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function gs(e, t, o, n, r) {
  var a = { capture: n, passive: r }, s = Lr(e, t, o, a);
  (t === document.body || t === window || t === document) && dr(() => {
    t.removeEventListener(e, s, a);
  });
}
function on(e) {
  for (var t = 0; t < e.length; t++)
    Ar.add(e[t]);
  for (var o of So)
    o(e);
}
function _t(e) {
  var y;
  var t = this, o = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], a = (
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
    Ct(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || o;
      }
    });
    var f = V, u = F;
    He(null), Ie(null);
    try {
      for (var h, v = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + n];
          if (g !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (qo(g)) {
              var [p, ...L] = g;
              p.apply(a, [e, ...L]);
            } else
              g.call(a, e);
        } catch (x) {
          h ? v.push(x) : h = x;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (h) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, He(f), Ie(u);
    }
  }
}
function nn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function fe(e, t) {
  var o = (
    /** @type {Effect} */
    F
  );
  o.nodes_start === null && (o.nodes_start = e, o.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  var o = (t & Wn) !== 0, n = (t & Oa) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (H)
      return fe(I, null), I;
    r === void 0 && (r = nn(a ? e : "<!>" + e), o || (r = /** @type {Node} */
    /* @__PURE__ */ Z(r)));
    var s = (
      /** @type {TemplateNode} */
      n || or ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (o) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Z(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      fe(i, c);
    } else
      fe(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t, o = "svg") {
  var n = !e.startsWith("<!>"), r = (t & Wn) !== 0, a = `<${o}>${n ? e : "<!>" + e}</${o}>`, s;
  return () => {
    if (H)
      return fe(I, null), I;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        nn(a)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Z(i)
      );
      if (r)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Z(c); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Z(c)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Z(c);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Z(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      fe(f, u);
    } else
      fe(l, l);
    return l;
  };
}
function wn(e = "") {
  if (!H) {
    var t = Ze(e + "");
    return fe(t, t), t;
  }
  var o = I;
  return o.nodeType !== 3 && (o.before(o = Ze()), de(o)), fe(o, o), o;
}
function vt() {
  if (H)
    return fe(I, null), I;
  var e = document.createDocumentFragment(), t = document.createComment(""), o = Ze();
  return e.append(t, o), fe(t, o), e;
}
function D(e, t) {
  if (H) {
    F.nodes_end = I, at();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Ho = !0;
function Ht(e, t) {
  var o = t == null ? "" : typeof t == "object" ? t + "" : t;
  o !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = o, e.nodeValue = o + "");
}
function wr(e, t) {
  return Tr(e, t);
}
function Ns(e, t) {
  Eo(), t.intro = t.intro ?? !1;
  const o = t.target, n = H, r = I;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Z(o)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Vn); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ ke(a);
    if (!a)
      throw pt;
    ye(!0), de(
      /** @type {Comment} */
      a
    ), at();
    const s = Tr(e, { ...t, anchor: a });
    if (I === null || I.nodeType !== 8 || /** @type {Comment} */
    I.data !== zo)
      throw po(), pt;
    return ye(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === pt)
      return t.recover === !1 && Ga(), Eo(), ar(o), ye(!1), wr(e, t);
    throw s;
  } finally {
    ye(n), de(r);
  }
}
const dt = /* @__PURE__ */ new Map();
function Tr(e, { target: t, anchor: o, props: n = {}, events: r, context: a, intro: s = !0 }) {
  Eo();
  var i = /* @__PURE__ */ new Set(), c = (u) => {
    for (var h = 0; h < u.length; h++) {
      var v = u[h];
      if (!i.has(v)) {
        i.add(v);
        var d = ps(v);
        t.addEventListener(v, _t, { passive: d });
        var g = dt.get(v);
        g === void 0 ? (document.addEventListener(v, _t, { passive: d }), dt.set(v, 1)) : dt.set(v, g + 1);
      }
    }
  };
  c(Qo(Ar)), So.add(c);
  var l = void 0, f = rs(() => {
    var u = o ?? t.appendChild(Ze());
    return Je(() => {
      if (a) {
        se({});
        var h = (
          /** @type {ComponentContext} */
          z
        );
        h.c = a;
      }
      r && (n.$$events = r), H && fe(
        /** @type {TemplateNode} */
        u,
        null
      ), Ho = s, l = e(u, n) || {}, Ho = !0, H && (F.nodes_end = I), a && ie();
    }), () => {
      var d;
      for (var h of i) {
        t.removeEventListener(h, _t);
        var v = (
          /** @type {number} */
          dt.get(h)
        );
        --v === 0 ? (document.removeEventListener(h, _t), dt.delete(h)) : dt.set(h, v);
      }
      So.delete(c), u !== o && ((d = u.parentNode) == null || d.removeChild(u));
    };
  });
  return Io.set(l, f), l;
}
let Io = /* @__PURE__ */ new WeakMap();
function Ps(e, t) {
  const o = Io.get(e);
  return o ? (Io.delete(e), o(t)) : Promise.resolve();
}
function Te(e, t, o = !1) {
  H && at();
  var n = e, r = null, a = null, s = J, i = o ? kt : 0, c = !1;
  const l = (u, h = !0) => {
    c = !0, f(h, u);
  }, f = (u, h) => {
    if (s === (s = u)) return;
    let v = !1;
    if (H) {
      const d = (
        /** @type {Comment} */
        n.data === jo
      );
      !!s === d && (n = Co(), de(n), ye(!1), v = !0);
    }
    s ? (r ? no(r) : h && (r = Je(() => h(n))), a && St(a, () => {
      a = null;
    })) : (a ? no(a) : h && (a = Je(() => h(n))), r && St(r, () => {
      r = null;
    })), v && ye(!0);
  };
  Lt(() => {
    c = !1, t(l), c || f(null, null);
  }, i), H && (n = I);
}
function xs(e, t, o) {
  H && at();
  var n = e, r = J, a, s = Ca;
  Lt(() => {
    s(r, r = t()) && (a && St(a), a = Je(() => o(n)));
  }), H && (n = I);
}
function et(e, t) {
  return t;
}
function ms(e, t, o, n) {
  for (var r = [], a = t.length, s = 0; s < a; s++)
    tn(t[s].e, r, !0);
  var i = a > 0 && r.length === 0 && o !== null;
  if (i) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      o.parentNode
    );
    ar(c), c.append(
      /** @type {Element} */
      o
    ), n.clear(), ze(e, t[0].prev, t[a - 1].next);
  }
  vr(r, () => {
    for (var l = 0; l < a; l++) {
      var f = t[l];
      i || (n.delete(f.k), ze(e, f.prev, f.next)), be(f.e, !i);
    }
  });
}
function tt(e, t, o, n, r, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, c = (t & Bn) !== 0;
  if (c) {
    var l = (
      /** @type {Element} */
      e
    );
    s = H ? de(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Z(l)
    ) : l.appendChild(Ze());
  }
  H && at();
  var f = null, u = !1, h = /* @__PURE__ */ $a(() => {
    var v = o();
    return qo(v) ? v : v == null ? [] : Qo(v);
  });
  Lt(() => {
    var v = N(h), d = v.length;
    if (u && d === 0)
      return;
    u = d === 0;
    let g = !1;
    if (H) {
      var p = (
        /** @type {Comment} */
        s.data === jo
      );
      p !== (d === 0) && (s = Co(), de(s), ye(!1), g = !0);
    }
    if (H) {
      for (var L = null, y, x = 0; x < d; x++) {
        if (I.nodeType === 8 && /** @type {Comment} */
        I.data === zo) {
          s = /** @type {Comment} */
          I, g = !0, ye(!1);
          break;
        }
        var P = v[x], A = n(P, x);
        y = yr(
          I,
          i,
          L,
          null,
          P,
          A,
          x,
          r,
          t,
          o
        ), i.items.set(A, y), L = y;
      }
      d > 0 && de(Co());
    }
    H || Os(v, i, s, r, t, n, o), a !== null && (d === 0 ? f ? no(f) : f = Je(() => a(s)) : f !== null && St(f, () => {
      f = null;
    })), g && ye(!0), N(h);
  }), H && (s = I);
}
function Os(e, t, o, n, r, a, s) {
  var E, k, U, Y;
  var i = (r & pa) !== 0, c = (r & (Ko | Yo)) !== 0, l = e.length, f = t.items, u = t.first, h = u, v, d = null, g, p = [], L = [], y, x, P, A;
  if (i)
    for (A = 0; A < l; A += 1)
      y = e[A], x = a(y, A), P = f.get(x), P !== void 0 && ((E = P.a) == null || E.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(P));
  for (A = 0; A < l; A += 1) {
    if (y = e[A], x = a(y, A), P = f.get(x), P === void 0) {
      var _ = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : o;
      d = yr(
        _,
        t,
        d,
        d === null ? t.first : d.next,
        y,
        x,
        A,
        n,
        r,
        s
      ), f.set(x, d), p = [], L = [], h = d.next;
      continue;
    }
    if (c && As(P, y, A, r), P.e.f & We && (no(P.e), i && ((k = P.a) == null || k.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(P))), P !== h) {
      if (v !== void 0 && v.has(P)) {
        if (p.length < L.length) {
          var T = L[0], C;
          d = T.prev;
          var G = p[0], R = p[p.length - 1];
          for (C = 0; C < p.length; C += 1)
            Tn(p[C], T, o);
          for (C = 0; C < L.length; C += 1)
            v.delete(L[C]);
          ze(t, G.prev, R.next), ze(t, d, G), ze(t, R, T), h = T, d = R, A -= 1, p = [], L = [];
        } else
          v.delete(P), Tn(P, h, o), ze(t, P.prev, P.next), ze(t, P, d === null ? t.first : d.next), ze(t, d, P), d = P;
        continue;
      }
      for (p = [], L = []; h !== null && h.k !== x; )
        h.e.f & We || (v ?? (v = /* @__PURE__ */ new Set())).add(h), L.push(h), h = h.next;
      if (h === null)
        continue;
      P = h;
    }
    p.push(P), d = P, h = P.next;
  }
  if (h !== null || v !== void 0) {
    for (var B = v === void 0 ? [] : Qo(v); h !== null; )
      h.e.f & We || B.push(h), h = h.next;
    var q = B.length;
    if (q > 0) {
      var b = r & Bn && l === 0 ? o : null;
      if (i) {
        for (A = 0; A < q; A += 1)
          (U = B[A].a) == null || U.measure();
        for (A = 0; A < q; A += 1)
          (Y = B[A].a) == null || Y.fix();
      }
      ms(t, B, b, f);
    }
  }
  i && At(() => {
    var j;
    if (g !== void 0)
      for (P of g)
        (j = P.a) == null || j.apply();
  }), F.first = t.first && t.first.e, F.last = d && d.e;
}
function As(e, t, o, n) {
  n & Ko && Ro(e.v, t), n & Yo ? Ro(
    /** @type {Value<number>} */
    e.i,
    o
  ) : e.i = o;
}
function yr(e, t, o, n, r, a, s, i, c, l) {
  var f = (c & Ko) !== 0, u = (c & va) === 0, h = f ? u ? /* @__PURE__ */ ho(r) : ne(r) : r, v = c & Yo ? ne(s) : s, d = {
    i: v,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: o,
    next: n
  };
  try {
    return d.e = Je(() => i(e, h, v, l), H), d.e.prev = o && o.e, d.e.next = n && n.e, o === null ? t.first = d : (o.next = d, o.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function Tn(e, t, o) {
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
      /* @__PURE__ */ ke(a)
    );
    r.before(a), a = s;
  }
}
function ze(e, t, o) {
  t === null ? e.first = o : (t.next = o, t.e.next = o && o.e), o !== null && (o.prev = t, o.e.prev = t && t.e);
}
function Bt(e, t, o, n, r) {
  var a = e, s = "", i;
  Lt(() => {
    if (s === (s = t() ?? "")) {
      H && at();
      return;
    }
    i !== void 0 && (be(i), i = void 0), s !== "" && (i = Je(() => {
      if (H) {
        I.data;
        for (var c = at(), l = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          l = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ ke(c);
        if (c === null)
          throw po(), pt;
        fe(I, l), a = de(c);
        return;
      }
      var f = s + "";
      f = `<svg>${f}</svg>`;
      var u = nn(f);
      for (u = /** @type {Element} */
      /* @__PURE__ */ Z(u), fe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Z(u),
        /** @type {TemplateNode} */
        u.lastChild
      ); /* @__PURE__ */ Z(u); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ Z(u)
        );
    }));
  });
}
function _r(e, t, ...o) {
  var n = e, r = re, a;
  Lt(() => {
    r !== (r = t()) && (a && (be(a), a = null), a = Je(() => (
      /** @type {SnippetFn} */
      r(n, ...o)
    )));
  }, kt), H && (n = I);
}
function Ue(e, t) {
  At(() => {
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
function br(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (o = br(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function Ls() {
  for (var e, t, o = 0, n = "", r = arguments.length; o < r; o++) (e = arguments[o]) && (t = br(e)) && (n && (n += " "), n += t);
  return n;
}
function ws(e) {
  return typeof e == "object" ? Ls(e) : e ?? "";
}
const yn = [...` 	
\r\f \v\uFEFF`];
function Ts(e, t, o) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), o) {
    for (var r in o)
      if (o[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var a = r.length, s = 0; (s = n.indexOf(r, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || yn.includes(n[s - 1])) && (i === n.length || yn.includes(n[i])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(i + 1) : s = i;
        }
  }
  return n === "" ? null : n;
}
function No(e, t, o, n, r, a) {
  var s = e.__className;
  if (H || s !== o) {
    var i = Ts(o, n, a);
    (!H || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = o;
  } else if (a) {
    r ?? (r = {});
    for (var c in a) {
      var l = !!a[c];
      l !== !!r[c] && e.classList.toggle(c, l);
    }
  }
  return a;
}
const Yt = Symbol("class");
function ys(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ue(e, t, o, n) {
  var r = e.__attributes ?? (e.__attributes = {});
  H && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = o) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[La] = o), o == null ? e.removeAttribute(t) : typeof o != "string" && Rr(e).includes(t) ? e[t] = o : e.setAttribute(t, o));
}
function Go(e, t, o, n, r = !1, a = !1, s = !1) {
  let i = H && a;
  i && ye(!1);
  var c = t || {}, l = e.tagName === "OPTION";
  for (var f in t)
    f in o || (o[f] = null);
  o.class ? o.class = ws(o.class) : (n || o[Yt]) && (o.class = null);
  var u = Rr(e), h = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const x in o) {
    let P = o[x];
    if (l && x === "value" && P == null) {
      e.value = e.__value = "", c[x] = P;
      continue;
    }
    var v = c[x];
    if (!(P === v && x !== "class")) {
      c[x] = P;
      var d = x[0] + x[1];
      if (d !== "$$") {
        if (d === "on") {
          const A = {}, _ = "$$" + x;
          let T = x.slice(2);
          var g = us(T);
          if (ls(T) && (T = T.slice(0, -7), A.capture = !0), !g && v) {
            if (P != null) continue;
            e.removeEventListener(T, c[_], A), c[_] = null;
          }
          if (P != null)
            if (g)
              e[`__${T}`] = P, on([T]);
            else {
              let C = function(G) {
                c[x].call(this, G);
              };
              c[_] = Lr(T, e, C, A);
            }
          else g && (e[`__${T}`] = void 0);
        } else if (x === "class") {
          var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          No(e, p, P, n, t == null ? void 0 : t[Yt], o[Yt]);
        } else if (x === "style" && P != null)
          e.style.cssText = P + "";
        else if (x === "autofocus")
          vs(
            /** @type {HTMLElement} */
            e,
            !!P
          );
        else if (!a && (x === "__value" || x === "value" && P != null))
          e.value = e.__value = P;
        else if (x === "selected" && l)
          ys(
            /** @type {HTMLOptionElement} */
            e,
            P
          );
        else {
          var L = x;
          r || (L = fs(L));
          var y = L === "defaultValue" || L === "defaultChecked";
          if (P == null && !a && !y)
            if (h[x] = null, L === "value" || L === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                e
              );
              const _ = t === void 0;
              if (L === "value") {
                let T = A.defaultValue;
                A.removeAttribute(L), A.defaultValue = T, A.value = A.__value = _ ? T : null;
              } else {
                let T = A.defaultChecked;
                A.removeAttribute(L), A.defaultChecked = T, A.checked = _ ? T : !1;
              }
            } else
              e.removeAttribute(x);
          else y || u.includes(L) && (a || typeof P != "string") ? e[L] = P : typeof P != "function" && ue(e, L, P);
        }
        x === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && ye(!0), c;
}
var _n = /* @__PURE__ */ new Map();
function Rr(e) {
  var t = _n.get(e.nodeName);
  if (t) return t;
  _n.set(e.nodeName, t = []);
  for (var o, n = e, r = Element.prototype; r !== n; ) {
    o = Ta(n);
    for (var a in o)
      o[a].set && t.push(a);
    n = jn(n);
  }
  return t;
}
function Ne(e, t, o, n) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== o && (r[t] = o, o == null ? e.style.removeProperty(t) : e.style.setProperty(t, o, ""));
}
const _s = () => performance.now(), Ee = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => _s(),
  tasks: /* @__PURE__ */ new Set()
};
function Cr() {
  const e = Ee.now();
  Ee.tasks.forEach((t) => {
    t.c(e) || (Ee.tasks.delete(t), t.f());
  }), Ee.tasks.size !== 0 && Ee.tick(Cr);
}
function Er(e) {
  let t;
  return Ee.tasks.size === 0 && Ee.tick(Cr), {
    promise: new Promise((o) => {
      Ee.tasks.add(t = { c: e, f: o });
    }),
    abort() {
      Ee.tasks.delete(t);
    }
  };
}
function Wt(e, t) {
  Or(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function bs(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (o) => o[0].toUpperCase() + o.slice(1)
  ).join("");
}
function bn(e) {
  const t = {}, o = e.split(";");
  for (const n of o) {
    const [r, a] = n.split(":");
    if (!r || a === void 0) break;
    const s = bs(r.trim());
    t[s] = a.trim();
  }
  return t;
}
const Rs = (e) => e;
function Pt(e, t, o, n) {
  var r = (e & ma) !== 0, a = "both", s, i = t.inert, c = t.style.overflow, l, f;
  function u() {
    var p = V, L = F;
    He(null), Ie(null);
    try {
      return s ?? (s = o()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      He(p), Ie(L);
    }
  }
  var h = {
    is_global: r,
    in() {
      t.inert = i, Wt(t, "introstart"), l = Do(t, u(), f, 1, () => {
        Wt(t, "introend"), l == null || l.abort(), l = s = void 0, t.style.overflow = c;
      });
    },
    out(p) {
      t.inert = !0, Wt(t, "outrostart"), f = Do(t, u(), l, 0, () => {
        Wt(t, "outroend"), p == null || p();
      });
    },
    stop: () => {
      l == null || l.abort(), f == null || f.abort();
    }
  }, v = (
    /** @type {Effect} */
    F
  );
  if ((v.transitions ?? (v.transitions = [])).push(h), Ho) {
    var d = r;
    if (!d) {
      for (var g = (
        /** @type {Effect | null} */
        v.parent
      ); g && g.f & kt; )
        for (; (g = g.parent) && !(g.f & uo); )
          ;
      d = !g || (g.f & Un) !== 0;
    }
    d && Ft(() => {
      st(() => h.in());
    });
  }
}
function Do(e, t, o, n, r) {
  var a = n === 1;
  if (ba(t)) {
    var s, i = !1;
    return At(() => {
      if (!i) {
        var p = t({ direction: a ? "in" : "out" });
        s = Do(e, p, o, n, r);
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
      abort: re,
      deactivate: re,
      reset: re,
      t: () => n
    };
  const { delay: c = 0, css: l, tick: f, easing: u = Rs } = t;
  var h = [];
  if (a && o === void 0 && (f && f(0, 1), l)) {
    var v = bn(l(0, 1));
    h.push(v, v);
  }
  var d = () => 1 - n, g = e.animate(h, { duration: c });
  return g.onfinish = () => {
    var p = (o == null ? void 0 : o.t()) ?? 1 - n;
    o == null || o.abort();
    var L = n - p, y = (
      /** @type {number} */
      t.duration * Math.abs(L)
    ), x = [];
    if (y > 0) {
      var P = !1;
      if (l)
        for (var A = Math.ceil(y / 16.666666666666668), _ = 0; _ <= A; _ += 1) {
          var T = p + L * u(_ / A), C = bn(l(T, 1 - T));
          x.push(C), P || (P = C.overflow === "hidden");
        }
      P && (e.style.overflow = "hidden"), d = () => {
        var G = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return p + L * u(G / y);
      }, f && Er(() => {
        if (g.playState !== "running") return !1;
        var G = d();
        return f(G, 1 - G), !0;
      });
    }
    g = e.animate(x, { duration: y, fill: "forwards" }), g.onfinish = () => {
      d = () => n, f == null || f(n, 1 - n), r();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = re);
    },
    deactivate: () => {
      r = re;
    },
    reset: () => {
      n === 0 && (f == null || f(1, 0));
    },
    t: () => d()
  };
}
var qe, gt, Gt, io, Sr;
const lo = class lo {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Le(this, io);
    /** */
    Le(this, qe, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Le(this, gt);
    /** @type {ResizeObserverOptions} */
    Le(this, Gt);
    ot(this, Gt, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, o) {
    var n = S(this, qe).get(t) || /* @__PURE__ */ new Set();
    return n.add(o), S(this, qe).set(t, n), Nn(this, io, Sr).call(this).observe(t, S(this, Gt)), () => {
      var r = S(this, qe).get(t);
      r.delete(o), r.size === 0 && (S(this, qe).delete(t), S(this, gt).unobserve(t));
    };
  }
};
qe = new WeakMap(), gt = new WeakMap(), Gt = new WeakMap(), io = new WeakSet(), Sr = function() {
  return S(this, gt) ?? ot(this, gt, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var o of t) {
        lo.entries.set(o.target, o);
        for (var n of S(this, qe).get(o.target) || [])
          n(o);
      }
    }
  ));
}, /** @static */
pe(lo, "entries", /* @__PURE__ */ new WeakMap());
let ko = lo;
var Cs = /* @__PURE__ */ new ko({
  box: "border-box"
});
function Es(e, t, o) {
  var n = Cs.observe(e, () => o(e[t]));
  Ft(() => (st(() => o(e[t])), n));
}
function Rn(e, t) {
  return e === t || (e == null ? void 0 : e[bt]) === t;
}
function Po(e = {}, t, o, n) {
  return Ft(() => {
    var r, a;
    return en(() => {
      r = a, a = [], st(() => {
        e !== o(...a) && (t(e, ...a), r && Rn(o(...r), e) && t(null, ...r));
      });
    }), () => {
      At(() => {
        a && Rn(o(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function it(e) {
  z === null && Nr(), De(() => {
    const t = st(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Hr(e, t, o) {
  if (e == null)
    return t(void 0), re;
  const n = st(
    () => e.subscribe(
      t,
      // @ts-expect-error
      o
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const ft = [];
function ro(e, t = re) {
  let o = null;
  const n = /* @__PURE__ */ new Set();
  function r(i) {
    if (Xn(e, i) && (e = i, o)) {
      const c = !ft.length;
      for (const l of n)
        l[1](), ft.push(l, e);
      if (c) {
        for (let l = 0; l < ft.length; l += 2)
          ft[l][0](ft[l + 1]);
        ft.length = 0;
      }
    }
  }
  function a(i) {
    r(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, c = re) {
    const l = [i, c];
    return n.add(l), n.size === 1 && (o = t(r, a) || re), i(
      /** @type {T} */
      e
    ), () => {
      n.delete(l), n.size === 0 && o && (o(), o = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
function Ir(e) {
  let t;
  return Hr(e, (o) => t = o)(), t;
}
let Vt = !1, Mo = Symbol();
function Ss(e, t, o) {
  const n = o[t] ?? (o[t] = {
    store: null,
    source: /* @__PURE__ */ ho(void 0),
    unsubscribe: re
  });
  if (n.store !== e && !(Mo in o))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = re;
    else {
      var r = !0;
      n.unsubscribe = Hr(e, (a) => {
        r ? n.source.v = a : W(n.source, a);
      }), r = !1;
    }
  return e && Mo in o ? Ir(e) : N(n.source);
}
function It(e, t) {
  return e.set(t), t;
}
function xo() {
  const e = {};
  function t() {
    dr(() => {
      for (var o in e)
        e[o].unsubscribe();
      Ct(e, Mo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Hs(e) {
  var t = Vt;
  try {
    return Vt = !1, [e(), Vt];
  } finally {
    Vt = t;
  }
}
function O(e, t, o, n) {
  var A;
  var r = (o & ga) !== 0, a = !0, s = (o & Pa) !== 0, i = (o & xa) !== 0, c = !1, l;
  s ? [l, c] = Hs(() => (
    /** @type {V} */
    e[t]
  )) : l = /** @type {V} */
  e[t];
  var f = bt in e || Yn in e, u = s && (((A = rt(e, t)) == null ? void 0 : A.set) ?? (f && t in e && ((_) => e[t] = _))) || void 0, h = (
    /** @type {V} */
    n
  ), v = !0, d = !1, g = () => (d = !0, v && (v = !1, i ? h = st(
    /** @type {() => V} */
    n
  ) : h = /** @type {V} */
  n), h);
  l === void 0 && n !== void 0 && (u && a && Da(), l = g(), u && u(l));
  var p;
  if (p = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? g() : (v = !0, d = !1, _);
  }, !(o & Na))
    return p;
  if (u) {
    var L = e.$$legacy;
    return function(_, T) {
      return arguments.length > 0 ? ((!T || L || c) && u(T ? p() : _), _) : p();
    };
  }
  var y = !1, x = /* @__PURE__ */ ho(l), P = /* @__PURE__ */ K(() => {
    var _ = p(), T = N(x);
    return y ? (y = !1, T) : x.v = _;
  });
  return r || (P.equals = Xo), function(_, T) {
    if (arguments.length > 0) {
      const C = T ? N(P) : s ? ae(_) : _;
      return P.equals(C) || (y = !0, W(x, C), d && h !== void 0 && (h = C), st(() => N(P))), _;
    }
    return N(P);
  };
}
function Is(e) {
  return new Gs(e);
}
var Fe, ve;
class Gs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Le(this, Fe);
    /** @type {Record<string, any>} */
    Le(this, ve);
    var a;
    var o = /* @__PURE__ */ new Map(), n = (s, i) => {
      var c = /* @__PURE__ */ ho(i);
      return o.set(s, c), c;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return N(o.get(i) ?? n(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === Yn ? !0 : (N(o.get(i) ?? n(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, c) {
          return W(o.get(i) ?? n(i, c), c), Reflect.set(s, i, c);
        }
      }
    );
    ot(this, ve, (t.hydrate ? Ns : wr)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && m(), ot(this, Fe, r.$$events);
    for (const s of Object.keys(S(this, ve)))
      s === "$set" || s === "$destroy" || s === "$on" || Ct(this, s, {
        get() {
          return S(this, ve)[s];
        },
        /** @param {any} value */
        set(i) {
          S(this, ve)[s] = i;
        },
        enumerable: !0
      });
    S(this, ve).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, S(this, ve).$destroy = () => {
      Ps(S(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    S(this, ve).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, o) {
    S(this, Fe)[t] = S(this, Fe)[t] || [];
    const n = (...r) => o.call(this, ...r);
    return S(this, Fe)[t].push(n), () => {
      S(this, Fe)[t] = S(this, Fe)[t].filter(
        /** @param {any} fn */
        (r) => r !== n
      );
    };
  }
  $destroy() {
    S(this, ve).$destroy();
  }
}
Fe = new WeakMap(), ve = new WeakMap();
let Gr;
typeof HTMLElement == "function" && (Gr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, o, n) {
    super();
    /** The Svelte component constructor */
    pe(this, "$$ctor");
    /** Slots */
    pe(this, "$$s");
    /** @type {any} The Svelte component instance */
    pe(this, "$$c");
    /** Whether or not the custom element is connected */
    pe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    pe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    pe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    pe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    pe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    pe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    pe(this, "$$me");
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
          r !== "default" && (s.name = r), D(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, n = Ds(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), o.default = !0) : o[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = jt(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Is({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = ns(() => {
        en(() => {
          var r;
          this.$$r = !0;
          for (const a of Xt(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = jt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = jt(t, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
    return Xt(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === t || !this.$$p_d[o].attribute && o.toLowerCase() === t
    ) || t;
  }
});
function jt(e, t, o, n) {
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
function Ds(e) {
  const t = {};
  return e.childNodes.forEach((o) => {
    t[
      /** @type {Element} node */
      o.slot || "default"
    ] = !0;
  }), t;
}
function he(e, t, o, n, r, a) {
  let s = class extends Gr {
    constructor() {
      super(e, o, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Xt(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Xt(t).forEach((i) => {
    Ct(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(c) {
        var u;
        c = jt(i, c, t), this.$$d[i] = c;
        var l = this.$$c;
        if (l) {
          var f = (u = rt(l, i)) == null ? void 0 : u.get;
          f ? l[i] = c : l.$set({ [i]: c });
        }
      }
    });
  }), n.forEach((i) => {
    Ct(s.prototype, i, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Cn(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function ks(e) {
  return e;
}
function Ms(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Fo(e, t) {
  if (e === t || e !== e) return () => e;
  const o = typeof e;
  if (o !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const n = (
      /** @type {Array<any>} */
      t.map((r, a) => Fo(
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
    if (Cn(e) && Cn(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (c) => new Date(a + c * i);
    }
    const n = Object.keys(t), r = {};
    return n.forEach((a) => {
      r[a] = Fo(e[a], t[a]);
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
var Be, Nt, Dt, nt;
const ln = class ln {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, o = {}) {
    Le(this, Be, ne(
      /** @type {T} */
      void 0
    ));
    Le(this, Nt, ne(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Le(this, Dt);
    /** @type {import('../internal/client/types').Task | null} */
    Le(this, nt, null);
    S(this, Be).v = S(this, Nt).v = t, ot(this, Dt, o);
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
    const n = new ln(t(), o);
    return en(() => {
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
    var u;
    W(S(this, Nt), t);
    let {
      delay: n = 0,
      duration: r = 400,
      easing: a = ks,
      interpolate: s = Fo
    } = { ...S(this, Dt), ...o };
    if (r === 0)
      return (u = S(this, nt)) == null || u.abort(), W(S(this, Be), t), Promise.resolve();
    const i = Ee.now() + n;
    let c, l = !1, f = S(this, nt);
    return ot(this, nt, Er((h) => {
      if (h < i)
        return !0;
      if (!l) {
        l = !0;
        const d = S(this, Be).v;
        c = s(d, t), typeof r == "function" && (r = r(d, t)), f == null || f.abort();
      }
      const v = h - i;
      return v > /** @type {number} */
      r ? (W(S(this, Be), t), !1) : (W(S(this, Be), c(a(v / /** @type {number} */
      r))), !0);
    })), S(this, nt).promise;
  }
  get current() {
    return N(S(this, Be));
  }
  get target() {
    return N(S(this, Nt));
  }
  set target(t) {
    this.set(t);
  }
};
Be = new WeakMap(), Nt = new WeakMap(), Dt = new WeakMap(), nt = new WeakMap();
let ht = ln;
const Fs = (e) => e;
function xt(e, { delay: t = 0, duration: o = 400, easing: n = Fs } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: n,
    css: (a) => `opacity: ${a * r}`
  };
}
var Bs = /* @__PURE__ */ Re('<div class="state-labels__label svelte-1uzomw4"> </div>'), Ws = /* @__PURE__ */ Re('<div aria-hidden="true"></div>');
const Vs = {
  hash: "svelte-1uzomw4",
  code: `.state-labels.svelte-1uzomw4 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-1uzomw4 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, ABCSans;font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:5px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-1uzomw4 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-1uzomw4 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-1uzomw4 .state-labels__label:where(.svelte-1uzomw4) {-webkit-text-stroke:5px #f1f1f1;paint-order:stroke fill;}`
};
function Dr(e, t) {
  se(t, !0), Ue(e, Vs);
  let o = O(t, "labels", 7), n = O(t, "overlayLabels", 7, !1);
  var r = Ws();
  let a;
  return tt(r, 21, o, et, (s, i) => {
    var c = vt(), l = Xe(c);
    xs(l, () => N(i).name, (f) => {
      var u = Bs(), h = $(u, !0);
      M(u), xe(
        (v) => {
          Ne(u, "left", N(i).left + "%"), Ne(u, "top", N(i).top + "%"), Ne(u, "width", N(i).width + "%"), Ne(u, "margin-left", v), Ht(h, N(i).name);
        },
        [
          () => Math.round(0 - N(i).width / 2) + "%"
        ]
      ), Pt(3, u, () => xt, () => ({ duration: 1e3 })), D(f, u);
    }), D(s, c);
  }), M(r), xe(() => a = No(r, 1, "state-labels svelte-1uzomw4", null, a, { "state-labels--overlaid": n() })), D(e, r), ie({
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
he(Dr, { labels: {}, overlayLabels: {} }, [], [], !0);
var $s = /* @__PURE__ */ Re('<span class="accessible-hide svelte-ivafae"><!></span>');
const Us = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function kr(e, t) {
  se(t, !0), Ue(e, Us);
  let o = O(t, "children", 7);
  var n = $s(), r = $(n);
  return _r(r, () => o() ?? re), M(n), D(e, n), ie({
    get children() {
      return o();
    },
    set children(a) {
      o(a), m();
    }
  });
}
he(kr, { children: {} }, [], [], !0);
var Ks = (e, t) => {
  e.preventDefault();
  const o = document.querySelector(N(t));
  o instanceof HTMLAnchorElement && o.focus();
}, Ys = /* @__PURE__ */ Re("<a><!></a>");
const js = {
  hash: "svelte-70abd9",
  code: "a.svelte-70abd9 {display:inline-block;padding:0.5rem 1rem;font-size:0.75rem;font-weight:700;line-height:1.3rem;padding:0.3rem 0.6rem 0.1rem;text-decoration:none;letter-spacing:0.125rem;text-transform:uppercase;color:#fff;background-color:#0058cc;transition:opacity 0.2s;position:absolute;}a.svelte-70abd9:focus {opacity:1;}a.svelte-70abd9:not(:focus) {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;opacity:0.1;}.skip-link--topleft.svelte-70abd9 {left:1rem;top:1rem;}.skip-link--bottomleft.svelte-70abd9 {left:1rem;bottom:1rem;}"
};
function Bo(e, t) {
  se(t, !0), Ue(e, js);
  let o = O(t, "id", 7), n = O(t, "target", 7), r = O(t, "children", 7), a = O(t, "position", 7, "topleft"), s = /* @__PURE__ */ K(() => `#${n()}`);
  var i = Ys();
  i.__click = [Ks, s];
  var c = $(i);
  return _r(c, () => r() ?? re), M(i), xe(() => {
    ue(i, "id", o()), ue(i, "href", N(s)), No(i, 1, `skip-link--${a()}`, "svelte-70abd9");
  }), D(e, i), ie({
    get id() {
      return o();
    },
    set id(l) {
      o(l), m();
    },
    get target() {
      return n();
    },
    set target(l) {
      n(l), m();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), m();
    },
    get position() {
      return a();
    },
    set position(l = "topleft") {
      a(l), m();
    }
  });
}
on(["click"]);
he(
  Bo,
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
function zs(e, t, o) {
  var r;
  const n = e.target.dataset.id;
  W(t, ae(n)), (r = o()) == null || r({ code: n });
}
function qs(e, t) {
  var n;
  const o = e.target.dataset.id;
  (n = t()) == null || n({ code: o, clientX: null, clientY: null });
}
function Qs(e, t, o) {
  var n;
  N(t) === e.target.dataset.id && W(t, null), (n = o()) == null || n({ code: null });
}
var Xs = /* @__PURE__ */ Re("<li><button> </button></li>"), Zs = /* @__PURE__ */ Re("<li> <ul></ul></li>"), Js = /* @__PURE__ */ Re('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>'), ei = /* @__PURE__ */ Re("<!> <!> <!>", 1);
const ti = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function Mr(e, t) {
  se(t, !0), Ue(e, ti);
  let o = O(t, "groups", 7), n = O(t, "layout", 7), r = O(t, "onChange", 7), a = O(t, "onClick", 7), s = O(t, "onFocus", 7), i = O(t, "customElectorateAltText", 23, () => ({})), c = ge(null);
  De(() => {
    var d;
    (d = r()) == null || d(N(c));
  });
  let l = /* @__PURE__ */ K(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((d) => n().positions[d]).map((d) => o().find((g) => g.name === d)).map((d) => ({
    ...d,
    hexes: [...d.hexes].sort((g, p) => g.coord[0] + g.coord[1] * 1e3 - (p.coord[0] + p.coord[1] * 1e3))
  })));
  var f = ei(), u = Xe(f);
  Bo(u, {
    id: "hex-map-top",
    target: "hex-map-bottom",
    position: "topleft",
    children: (d, g) => {
      Zt();
      var p = wn("Skip past map");
      D(d, p);
    },
    $$slots: { default: !0 }
  });
  var h = X(u, 2);
  kr(h, {
    children: (d, g) => {
      var p = Js();
      p.__click = [qs, a], p.__focusin = [zs, c, s], p.__focusout = [Qs, c, s], tt(p, 21, () => N(l), et, (L, y) => {
        var x = Zs(), P = $(x), A = X(P);
        tt(A, 21, () => N(y).hexes, et, (_, T) => {
          var C = Xs(), G = $(C), R = $(G);
          M(G), M(C), xe(() => {
            ue(G, "data-id", N(T).id), Ht(R, `${N(T).name ?? ""} ${i()[N(T).id] || ""}`);
          }), D(_, C);
        }), M(A), M(x), xe(() => Ht(P, `${N(y).name ?? ""} `)), D(L, x);
      }), M(p), D(d, p);
    },
    $$slots: { default: !0 }
  });
  var v = X(h, 2);
  return Bo(v, {
    id: "hex-map-bottom",
    target: "hex-map-top",
    position: "bottomleft",
    children: (d, g) => {
      Zt();
      var p = wn("Skip above map");
      D(d, p);
    },
    $$slots: { default: !0 }
  }), D(e, f), ie({
    get groups() {
      return o();
    },
    set groups(d) {
      o(d), m();
    },
    get layout() {
      return n();
    },
    set layout(d) {
      n(d), m();
    },
    get onChange() {
      return r();
    },
    set onChange(d) {
      r(d), m();
    },
    get onClick() {
      return a();
    },
    set onClick(d) {
      a(d), m();
    },
    get onFocus() {
      return s();
    },
    set onFocus(d) {
      s(d), m();
    },
    get customElectorateAltText() {
      return i();
    },
    set customElectorateAltText(d = {}) {
      i(d), m();
    }
  });
}
on(["click", "focusin", "focusout"]);
he(
  Mr,
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
function oi(e) {
  return Object.entries(e).reduce((t, [o, n]) => (t[n] = o, t), {});
}
const En = 16;
function mo(e = [0, 0], t = "px") {
  const o = e[0] * (En * Math.sqrt(3)), n = e[1] * 1.5 * En;
  return [o, n].map((r) => `${Math.round(r)}${t}`);
}
var ni = /* @__PURE__ */ Ce('<path style="color:#000000;fill:var(--c-tileFocusBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:var(--c-tileFocusBorderGap);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), ri = /* @__PURE__ */ Ce('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:var(--c-tileInteractBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const ai = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function zt(e, t) {
  se(t, !0), Ue(e, ai);
  let o = O(t, "groups", 7), n = O(t, "id", 7), r = O(t, "layout", 7), a = O(t, "type", 7, "focus"), s = /* @__PURE__ */ K(() => o().flatMap((u) => u.hexes.map((h) => ({ ...h, group: u.name }))).sort((u, h) => u.index - h.index)), i = /* @__PURE__ */ K(() => {
    if (!n())
      return;
    const u = N(s).find((x) => x.id === n()), [h, v] = r().positions[u.group], [d, g] = u.coord, p = g % 2 ? 0.5 : 0, [L, y] = mo([h + d + p, v + g], "").map(Number);
    return [L - 3, y - 3];
  });
  var c = vt(), l = Xe(c);
  {
    var f = (u) => {
      var h = ri(), v = $(h);
      {
        var d = (g) => {
          var p = ni();
          Zt(), D(g, p);
        };
        Te(v, (g) => {
          a() === "focus" && g(d);
        });
      }
      Zt(), M(h), xe((g) => ue(h, "transform", g), [
        () => `translate(${N(i).join(" ")}) scale(0.95)`
      ]), D(u, h);
    };
    Te(l, (u) => {
      N(i) && u(f);
    });
  }
  return D(e, c), ie({
    get groups() {
      return o();
    },
    set groups(u) {
      o(u), m();
    },
    get id() {
      return n();
    },
    set id(u) {
      n(u), m();
    },
    get layout() {
      return r();
    },
    set layout(u) {
      r(u), m();
    },
    get type() {
      return a();
    },
    set type(u = "focus") {
      a(u), m();
    }
  });
}
he(zt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var si = typeof global == "object" && global && global.Object === Object && global, ii = typeof self == "object" && self && self.Object === Object && self, Fr = si || ii || Function("return this")(), ao = Fr.Symbol, Br = Object.prototype, li = Br.hasOwnProperty, ci = Br.toString, yt = ao ? ao.toStringTag : void 0;
function ui(e) {
  var t = li.call(e, yt), o = e[yt];
  try {
    e[yt] = void 0;
    var n = !0;
  } catch {
  }
  var r = ci.call(e);
  return n && (t ? e[yt] = o : delete e[yt]), r;
}
var di = Object.prototype, fi = di.toString;
function hi(e) {
  return fi.call(e);
}
var pi = "[object Null]", vi = "[object Undefined]", Sn = ao ? ao.toStringTag : void 0;
function gi(e) {
  return e == null ? e === void 0 ? vi : pi : Sn && Sn in Object(e) ? ui(e) : hi(e);
}
function Ni(e) {
  return e != null && typeof e == "object";
}
var Pi = "[object Symbol]";
function xi(e) {
  return typeof e == "symbol" || Ni(e) && gi(e) == Pi;
}
var mi = /\s/;
function Oi(e) {
  for (var t = e.length; t-- && mi.test(e.charAt(t)); )
    ;
  return t;
}
var Ai = /^\s+/;
function Li(e) {
  return e && e.slice(0, Oi(e) + 1).replace(Ai, "");
}
function Wo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Hn = NaN, wi = /^[-+]0x[0-9a-f]+$/i, Ti = /^0b[01]+$/i, yi = /^0o[0-7]+$/i, _i = parseInt;
function In(e) {
  if (typeof e == "number")
    return e;
  if (xi(e))
    return Hn;
  if (Wo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Wo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Li(e);
  var o = Ti.test(e);
  return o || yi.test(e) ? _i(e.slice(2), o ? 2 : 8) : wi.test(e) ? Hn : +e;
}
var yo = function() {
  return Fr.Date.now();
}, bi = "Expected a function", Ri = Math.max, Ci = Math.min;
function Ei(e, t, o) {
  var n, r, a, s, i, c, l = 0, f = !1, u = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(bi);
  t = In(t) || 0, Wo(o) && (f = !!o.leading, u = "maxWait" in o, a = u ? Ri(In(o.maxWait) || 0, t) : a, h = "trailing" in o ? !!o.trailing : h);
  function v(_) {
    var T = n, C = r;
    return n = r = void 0, l = _, s = e.apply(C, T), s;
  }
  function d(_) {
    return l = _, i = setTimeout(L, t), f ? v(_) : s;
  }
  function g(_) {
    var T = _ - c, C = _ - l, G = t - T;
    return u ? Ci(G, a - C) : G;
  }
  function p(_) {
    var T = _ - c, C = _ - l;
    return c === void 0 || T >= t || T < 0 || u && C >= a;
  }
  function L() {
    var _ = yo();
    if (p(_))
      return y(_);
    i = setTimeout(L, g(_));
  }
  function y(_) {
    return i = void 0, h && n ? v(_) : (n = r = void 0, s);
  }
  function x() {
    i !== void 0 && clearTimeout(i), l = 0, n = c = r = i = void 0;
  }
  function P() {
    return i === void 0 ? s : y(yo());
  }
  function A() {
    var _ = yo(), T = p(_);
    if (n = arguments, r = this, c = _, T) {
      if (i === void 0)
        return d(c);
      if (u)
        return clearTimeout(i), i = setTimeout(L, t), v(c);
    }
    return i === void 0 && (i = setTimeout(L, t)), s;
  }
  return A.cancel = x, A.flush = P, A;
}
function Si({ isInteractive: e = !1, onClick: t, onHover: o }) {
  if (!e)
    return {};
  const n = Ei(o, 10), r = ({ target: i, clientX: c, clientY: l }) => {
    var u;
    const f = (u = i == null ? void 0 : i.dataset) == null ? void 0 : u.id;
    !f || !t || t({ code: f, clientX: c, clientY: l });
  }, a = (i) => {
    const c = i.target, { clientX: l, clientY: f } = i, u = c.dataset.id;
    c.nodeName !== "polygon" || !u || n({ code: u, clientX: l, clientY: f });
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
var Hi = /* @__PURE__ */ Ce('<g><text> </text><text class="hexlabels__text svelte-1kzhlql"> </text></g>'), Ii = /* @__PURE__ */ Ce('<g class="hexlabels svelte-1kzhlql"></g>');
const Gi = {
  hash: "svelte-1kzhlql",
  code: ".hexlabels.svelte-1kzhlql {pointer-events:none;}.hexlabels__text.svelte-1kzhlql {font-size:10px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function Wr(e, t) {
  se(t, !0), Ue(e, Gi);
  let o = O(t, "hexes", 7), n = O(t, "allocations", 7), r = O(t, "certainties", 7), a = O(t, "labelsToShow", 23, () => ({})), s = O(t, "showElectorateLabels", 7, !1), i = /* @__PURE__ */ K(() => s() ? o() : o().filter(({ id: l }) => a()[l]));
  var c = Ii();
  return tt(c, 21, () => N(i), et, (l, f) => {
    let u = () => N(f).id, h = () => N(f).coordPx, v = () => N(f).shortName;
    var d = Hi(), g = $(d);
    let p;
    var L = $(g, !0);
    M(g);
    var y = X(g), x = $(y, !0);
    M(y), M(d), xe(
      (P) => {
        ue(d, "transform", P), p = No(g, 0, "hexlabels__text svelte-1kzhlql", null, p, {
          "hexlabels__text--allocation": n()[u()]
        }), Ne(g, "stroke", `var(--u-${n()[u()]})`), Ne(g, "stroke-width", "3"), Ne(g, "opacity", n()[u()] && !r()[u()] ? 1 : 0), Ht(L, v()), Ne(y, "fill", n()[u()] && r()[u()] ? "white" : "black"), Ht(x, v());
      },
      [
        () => `translate(${h().join(" ")}) rotate(-30) translate(0 3)`
      ]
    ), D(l, d);
  }), M(c), D(e, c), ie({
    get hexes() {
      return o();
    },
    set hexes(l) {
      o(l), m();
    },
    get allocations() {
      return n();
    },
    set allocations(l) {
      n(l), m();
    },
    get certainties() {
      return r();
    },
    set certainties(l) {
      r(l), m();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(l = {}) {
      a(l), m();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(l = !1) {
      s(l), m();
    }
  });
}
he(
  Wr,
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
var Di = /* @__PURE__ */ Ce('<g class="group-outline group-outline__under svelte-1fpog18"><!></g>'), ki = /* @__PURE__ */ Ce('<g><g class="group-hexes svelte-1fpog18"><!></g><!></g>'), Mi = /* @__PURE__ */ Ce('<g class="group-outline group-outline__over svelte-1fpog18"><!></g>'), Fi = /* @__PURE__ */ Ce('<g><g class="group-hex-strokes svelte-1fpog18"><!></g><!><!></g>'), Bi = /* @__PURE__ */ Ce('<g class="svelte-1fpog18"><!><!></g>');
const Wi = {
  hash: "svelte-1fpog18",
  code: `.group.svelte-1fpog18:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--rendered.svelte-1fpog18 .hex {transition:all 0.5s;}.group--rendered.svelte-1fpog18 .hex-outline {transition:opacity 0.5s, stroke 0.5s;}.group--hidden.svelte-1fpog18 {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-1fpog18,
.group-outline.svelte-1fpog18 {pointer-events:none;}.group.svelte-1fpog18 .hex {vector-effect:non-scaling-stroke;fill:transparent;transform-box:fill-box;transform-origin:50% 50%;--hexFlipMinWidth: 0.03;}
@media (min-width: 46.5rem) {.group.svelte-1fpog18 .hex {--hexFlipMinWidth: 0.03;}
}.group.svelte-1fpog18 .hex.hex--flip {
  animation: svelte-1fpog18-hex-flip 1s ease-in-out;}.group-outline.svelte-1fpog18 .hex-outline {fill:transparent;stroke:var(--c-stateOutline);stroke-width:1.5px;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-1fpog18:not(.group--has-focuses) .group-outline:where(.svelte-1fpog18) .hex-outline {stroke:var(--c-emptyStateOutline);}.group--map-is-full.svelte-1fpog18:not(.group--has-focuses) .group-outline:where(.svelte-1fpog18) .hex-outline {stroke:var(--c-fullStateOutline);}.group-hexes.svelte-1fpog18 .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-1fpog18 .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-1fpog18 .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-1fpog18 .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-1fpog18 .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-1fpog18 .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-1fpog18 .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-1fpog18 .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-1fpog18 .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-1fpog18 .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-1fpog18 .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-1fpog18 .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-1fpog18 .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-1fpog18 .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-1fpog18 .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-nullBorder);stroke-width:1.5px;}.group--map-is-empty.svelte-1fpog18 .group-hexes:where(.svelte-1fpog18) .hex {fill:var(--c-empty);stroke:var(--c-emptyBorder);stroke-width:1px;}.group-hex-strokes.svelte-1fpog18 .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-1fpog18 .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filledBorder);stroke-width:1.5px;}.group-hex-strokes.svelte-1fpog18 .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-1fpog18 .group-hexes:where(.svelte-1fpog18) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-1fpog18 .group-hexes:where(.svelte-1fpog18) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-1fpog18 .group-hex-strokes:where(.svelte-1fpog18) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-1fpog18 .group-hexes:where(.svelte-1fpog18) .hex[data-allocation="null"][data-focused="false"] {fill:#fff;stroke:#fff;}.group--has-focuses.svelte-1fpog18 .group-hex-strokes:where(.svelte-1fpog18) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-1fpog18 .group-hexes:where(.svelte-1fpog18) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-1fpog18 .group-hex-strokes:where(.svelte-1fpog18) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--is-outline.svelte-1fpog18 .hex {stroke:white !important;fill:#f1f1f1;stroke-width:1.5 !important;}.group--is-outline.svelte-1fpog18 .hex-outline {stroke:#cdcbcb !important;}

@keyframes svelte-1fpog18-hex-flip {
  from {
    transform: none;
    fill: var(--allocationFrom);
  }
  50% {
    transform: scaleX(var(--hexFlipMinWidth));
    stroke: transparent;
    fill: var(--allocationFrom);
  }
  50.01% {
    fill: var(--allocationTo);
  }
  to {
    transform: none;
    fill: var(--allocationTo);
  }
}`
};
function Vr(e, t) {
  se(t, !0), Ue(e, Wi);
  let o = O(t, "groups", 7), n = O(t, "isStaticLayout", 7), r = O(t, "layout", 7), a = O(t, "allocations", 7), s = O(t, "focuses", 7), i = O(t, "certainties", 7), c = O(t, "showElectorateLabels", 7), l = O(t, "showFocusedElectorateLabels", 7), f = O(t, "labelsToShow", 7), u = O(t, "isOutlineOnly", 7, !1), h = O(t, "showStateOutlinesOnTop", 7, !1), v = O(t, "hexFlip", 7, "None"), d = ge(void 0), g = ge(!1);
  it(() => {
    setTimeout(
      () => {
        W(g, !0);
      },
      1
    );
  });
  let p = /* @__PURE__ */ K(() => {
    const R = Object.values(a());
    return R.length !== 0 && R.some(Boolean);
  }), L = /* @__PURE__ */ K(() => {
    const R = Object.values(a());
    return R.length !== 0 && R.every(Boolean);
  }), y = /* @__PURE__ */ K(() => Object.values(s()).some(Boolean)), x = /* @__PURE__ */ K(() => {
    var R;
    return Array.from(((R = N(d)) == null ? void 0 : R.querySelectorAll("polygon.hex")) || []).filter((B) => B instanceof SVGPolygonElement);
  }), P = { allocation: {}, focus: {} };
  De(() => {
    const R = { ...a() }, B = s(), q = i();
    N(x).forEach((b) => {
      const E = b.dataset.id;
      if (!E)
        return;
      const k = R[E] || null, U = P.allocation[E];
      k !== U && (b.dataset.allocation = k, v() === "Flip" && (b.style.setProperty("--allocationFrom", `var(--a-${U})`), b.style.setProperty("--allocationTo", `var(--a-${k})`), b.classList.add("hex--flip"))), P.allocation[E] = k;
      const Y = N(y) ? B[E] || !1 : !0;
      Y !== P.focus[E] && (b.dataset.focused = Y), P.focus[E] = Y;
      const j = q[E] || null;
      b.dataset.certain = j;
    });
  });
  let A = /* @__PURE__ */ K(() => {
    const R = o(), B = r();
    return R.map((q) => {
      const b = B.positions[q.name], E = b && b[0] !== 1 / 0, k = mo(b).join(","), U = N(y) && l() ? s() : f(), Y = {
        "data-name": q.name,
        style: `transform: translate(${k})`,
        class: [
          "group",
          !E && "group--hidden",
          n() && "group--map-is-static",
          !N(p) && "group--map-is-empty",
          N(L) && "group--map-is-full",
          N(y) && "group--has-focuses",
          u() && "group--is-outline",
          N(g) && "group--rendered"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: E, labels: U, group: q, groupProps: Y };
    });
  }), _ = /* @__PURE__ */ K(() => h() || N(p) && N(y));
  var T = Bi(), C = $(T);
  tt(C, 17, () => N(A), et, (R, B) => {
    let q = () => N(B).groupProps, b = () => N(B).group;
    var E = ki();
    let k;
    var U = $(E), Y = $(U);
    Bt(Y, () => b().svgHexes), M(U);
    var j = X(U);
    {
      var me = (le) => {
        var oe = Di(), Ke = $(oe);
        Bt(Ke, () => b().svgOutline), M(oe), Pt(3, oe, () => xt, () => ({ duration: 200 })), D(le, oe);
      };
      Te(j, (le) => {
        N(_) || le(me);
      });
    }
    M(E), xe(() => k = Go(E, k, { ...q() }, "svelte-1fpog18", !0)), D(R, E);
  });
  var G = X(C);
  return tt(G, 17, () => N(A), et, (R, B) => {
    let q = () => N(B).groupProps, b = () => N(B).isVisible, E = () => N(B).labels, k = () => N(B).group;
    var U = Fi();
    let Y;
    var j = $(U), me = $(j);
    Bt(me, () => k().svgHexes), M(j);
    var le = X(j);
    {
      var oe = (Oe) => {
        var Ae = Mi(), Ye = $(Ae);
        Bt(Ye, () => k().svgOutline), M(Ae), Pt(3, Ae, () => xt, () => ({ duration: 200 })), D(Oe, Ae);
      };
      Te(le, (Oe) => {
        N(_) && Oe(oe);
      });
    }
    var Ke = X(le);
    {
      var wt = (Oe) => {
        Wr(Oe, {
          get hexes() {
            return k().hexes;
          },
          get allocations() {
            return a();
          },
          get certainties() {
            return i();
          },
          get labelsToShow() {
            return E();
          },
          get showElectorateLabels() {
            return c();
          }
        });
      };
      Te(Ke, (Oe) => {
        b() && Oe(wt);
      });
    }
    M(U), xe(() => Y = Go(U, Y, { ...q() }, "svelte-1fpog18", !0)), D(R, U);
  }), M(T), Po(T, (R) => W(d, R), () => N(d)), gs("animationend", T, (R) => {
    R.target.classList.remove("hex--flip");
  }), D(e, T), ie({
    get groups() {
      return o();
    },
    set groups(R) {
      o(R), m();
    },
    get isStaticLayout() {
      return n();
    },
    set isStaticLayout(R) {
      n(R), m();
    },
    get layout() {
      return r();
    },
    set layout(R) {
      r(R), m();
    },
    get allocations() {
      return a();
    },
    set allocations(R) {
      a(R), m();
    },
    get focuses() {
      return s();
    },
    set focuses(R) {
      s(R), m();
    },
    get certainties() {
      return i();
    },
    set certainties(R) {
      i(R), m();
    },
    get showElectorateLabels() {
      return c();
    },
    set showElectorateLabels(R) {
      c(R), m();
    },
    get showFocusedElectorateLabels() {
      return l();
    },
    set showFocusedElectorateLabels(R) {
      l(R), m();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(R) {
      f(R), m();
    },
    get isOutlineOnly() {
      return u();
    },
    set isOutlineOnly(R = !1) {
      u(R), m();
    },
    get showStateOutlinesOnTop() {
      return h();
    },
    set showStateOutlinesOnTop(R = !1) {
      h(R), m();
    },
    get hexFlip() {
      return v();
    },
    set hexFlip(R = "None") {
      v(R), m();
    }
  });
}
he(
  Vr,
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
    isOutlineOnly: {},
    showStateOutlinesOnTop: {},
    hexFlip: {}
  },
  [],
  [],
  !0
);
var Vi = /* @__PURE__ */ Ce('<g class="svelte-1hugu1z"><path d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z" stroke-width="2" class="svelte-1hugu1z"></path><path d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064" stroke-width="2" fill="none" class="svelte-1hugu1z"></path></g>'), $i = /* @__PURE__ */ Ce('<g class="hex-map-arrows svelte-1hugu1z"></g>');
const Ui = {
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
function rn(e, t) {
  se(t, !0), Ue(e, Ui);
  let o = O(t, "hexes", 7), n = O(t, "offset", 7), r = O(t, "arrowData", 7), a = O(t, "arrowHeight", 7), s = O(t, "getColourForValue", 7), i = O(t, "getRotationForValue", 7), c = /* @__PURE__ */ K(() => o().map((u) => ({
    id: u.id,
    coordPx: u.coordPx,
    value: r()[u.id]
  })).filter(({ value: u }) => typeof u == "number"));
  function l(u) {
    const d = Math.abs(u);
    return Math.min(1.5, 0.3 + d / 20);
  }
  var f = $i();
  return tt(f, 21, () => N(c), et, (u, h) => {
    let v = () => N(h).coordPx, d = () => N(h).value;
    var g = Vi(), p = $(g), L = X(p);
    M(g), xe(
      (y, x, P, A) => {
        ue(g, "transform", y), Ne(g, "opacity", d() === 0 ? 0 : 1), ue(p, "transform", x), Ne(p, "fill", P), ue(L, "transform", A), Ne(L, "stroke", P);
      },
      [
        () => `translate(${v().join(" ")}) rotate(${i()(d())})`,
        () => `scale(${l(d())} ${d() * a()})`,
        () => s()(d()),
        () => `translate(0 ${-63 * d() * a()}) rotate(${d() < 0 ? 180 : 0}) scale(${l(d())})`
      ]
    ), D(u, g);
  }), M(f), xe((u) => ue(f, "transform", u), [
    () => `translate(${mo(n(), "").join(",")})`
  ]), Pt(3, f, () => xt, () => ({ duration: 750 })), D(e, f), ie({
    get hexes() {
      return o();
    },
    set hexes(u) {
      o(u), m();
    },
    get offset() {
      return n();
    },
    set offset(u) {
      n(u), m();
    },
    get arrowData() {
      return r();
    },
    set arrowData(u) {
      r(u), m();
    },
    get arrowHeight() {
      return a();
    },
    set arrowHeight(u) {
      a(u), m();
    },
    get getColourForValue() {
      return s();
    },
    set getColourForValue(u) {
      s(u), m();
    },
    get getRotationForValue() {
      return i();
    },
    set getRotationForValue(u) {
      i(u), m();
    }
  });
}
he(
  rn,
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
const Ki = { pct: { OTH: 11.47, IND: 7.84, TOP: 2.27, LNP: 29.82, ALP: 36.18, GRN: 12.42 } }, Yi = { pct: { IND: 4.6, ALP: 39.62, GRN: 22.81, LNP: 27.25, OTH: 4.18, TOP: 1.54 } }, ji = { pct: { TOP: 3.95, OTH: 4.92, GRN: 13.99, ALP: 43.52, LNP: 33.62 } }, zi = { pct: { LNP: 47.25, GRN: 5.4, ALP: 33.73, TOP: 2.05, OTH: 11.56 } }, qi = { pct: { ALP: 44.5, LNP: 30.3, TOP: 2.07, OTH: 11.65, GRN: 8.17, ONP: 3.31 } }, Qi = { pct: { ALP: 32.27, TOP: 1.86, LNP: 48.2, GRN: 8.98, OTH: 8.69 } }, Xi = { pct: { GRN: 11.12, LNP: 53.54, TOP: 1.57, OTH: 11.43, IND: 2.59, ALP: 19.75 } }, Zi = { pct: { OTH: 17.78, LNP: 24.99, ALP: 50.09, TOP: 2.5, GRN: 4.64 } }, Ji = { pct: { GRN: 13.15, LNP: 57.89, TOP: 1.77, OTH: 6.87, ALP: 20.32 } }, el = { pct: { OTH: 28.18, ALP: 20.87, TOP: 3.05, LNP: 42.19, GRN: 5.71 } }, tl = { pct: { OTH: 15.47, IND: 1.57, TOP: 4.1, GRN: 4.57, LNP: 25.23, ALP: 49.06 } }, ol = { pct: { LNP: 59.8, OTH: 7.72, ALP: 21.68, ONP: 3.27, GRN: 6.4, TOP: 1.13 } }, nl = { pct: { OTH: 11.76, LNP: 43.41, TOP: 2.79, ALP: 12.72, IND: 23.86, GRN: 5.47 } }, rl = { pct: { LNP: 29.2, GRN: 14.23, ALP: 43.95, OTH: 9.02, TOP: 3.59 } }, al = { pct: { TOP: 5.02, OTH: 7.7, LNP: 38.3, GRN: 7.02, ALP: 39.01, IND: 2.94 } }, sl = { pct: { ALP: 36.5, LNP: 40.97, GRN: 8.18, IND: 3.88, OTH: 7.89, TOP: 2.58 } }, il = { pct: { LNP: 46.08, OTH: 12.72, ALP: 13.3, IND: 19.79, TOP: 3.88, GRN: 4.23 } }, ll = { pct: { OTH: 17.93, ALP: 47.39, TOP: 3.76, GRN: 4.81, LNP: 26.11 } }, cl = { pct: { GRN: 9.45, IND: 6.67, TOP: 3.2, ALP: 34.29, OTH: 6.88, LNP: 39.5 } }, ul = { pct: { OTH: 7.73, LNP: 20.83, TOP: 1.15, GRN: 21.59, ALP: 48.69 } }, dl = { pct: { OTH: 11.39, GRN: 5.13, LNP: 37.84, ALP: 42.86, TOP: 2.79 } }, fl = { pct: { LNP: 50.41, GRN: 6.58, OTH: 9.79, TOP: 2.35, ALP: 28.89, IND: 1.97 } }, hl = { pct: { ALP: 24.86, TOP: 4.51, OTH: 10.48, LNP: 49.84, GRN: 4.77, IND: 5.54 } }, pl = { pct: { ONP: 19.66, LNP: 21.36, OTH: 14.6, TOP: 3.93, GRN: 6.25, ALP: 34.2 } }, vl = { pct: { GRN: 11.4, OTH: 10.09, ALP: 42.55, TOP: 1.65, LNP: 34.32 } }, gl = { pct: { OTH: 17.53, ALP: 31.67, LNP: 41.31, GRN: 4.36, TOP: 2.58, IND: 2.54 } }, Nl = { pct: { ALP: 21.9, LNP: 44.87, TOP: 3.68, OTH: 18.98, IND: 4.65, GRN: 5.92 } }, Pl = { pct: { OTH: 14.17, ALP: 43.55, ONP: 7.84, LNP: 28.12, TOP: 2.3, GRN: 4.03 } }, xl = { pct: { TOP: 2.25, OTH: 8.54, IND: 11.61, GRN: 10.94, ALP: 16.14, LNP: 50.51 } }, ml = { pct: { LNP: 42.93, GRN: 8.76, ALP: 36.63, OTH: 7.85, TOP: 3.83 } }, Ol = { pct: { TOP: 3.43, ONP: 7.25, OTH: 15.18, ALP: 40.52, GRN: 4.34, LNP: 29.28 } }, Al = { pct: { ALP: 22.74, LNP: 58.92, TOP: 2.6, OTH: 8.08, GRN: 7.66 } }, Ll = { pct: { IND: 19.7, OTH: 8.94, ALP: 11.88, LNP: 51.08, GRN: 4.13, TOP: 4.27 } }, wl = { pct: { ALP: 43.21, GRN: 14.7, OTH: 11.3, TOP: 3.18, LNP: 27.6 } }, Tl = { pct: { IND: 4.61, OTH: 8.84, TOP: 3.05, GRN: 11.13, LNP: 47.27, ALP: 25.11 } }, yl = { pct: { OTH: 13.44, LNP: 47.79, GRN: 3.93, ALP: 22.18, IND: 6.74, TOP: 5.92 } }, _l = { pct: { LNP: 37.83, ALP: 41.31, TOP: 2.37, GRN: 6.63, OTH: 11.87 } }, bl = { pct: { LNP: 30.62, ONP: 13.33, ALP: 38.68, TOP: 3.4, GRN: 6.5, OTH: 7.48 } }, Rl = { pct: { OTH: 10.33, GRN: 7.59, ALP: 34.93, LNP: 45.36, TOP: 1.8 } }, Cl = { pct: { OTH: 12.67, TOP: 3.61, ALP: 29.35, IND: 1.44, LNP: 34.12, GRN: 18.81 } }, El = { pct: { LNP: 56.84, GRN: 5.88, ALP: 21.97, TOP: 10.16, OTH: 5.16 } }, Sl = { pct: { OTH: 12.13, TOP: 2.61, IND: 2.81, LNP: 43.47, GRN: 7.34, ALP: 31.64 } }, Hl = { pct: { OTH: 14.56, ALP: 38.5, TOP: 4.24, GRN: 7.73, LNP: 34.98 } }, Il = { pct: { LNP: 25.6, OTH: 8.1, ALP: 47.53, TOP: 1.39, GRN: 17.38 } }, Gl = { pct: { OTH: 7.81, IND: 42.41, ALP: 6.28, TOP: 0.64, LNP: 37.04, GRN: 5.82 } }, Dl = { pct: { TOP: 3.68, OTH: 19.25, GRN: 6.2, ALP: 45.17, LNP: 25.69 } }, kl = { pct: { IND: 32.02, ALP: 10.62, TOP: 0.68, OTH: 3.37, LNP: 46.01, GRN: 7.31 } }, Ml = { pct: { OTH: 16.11, LNP: 31.19, GRN: 4.75, IND: 2, TOP: 3.71, ALP: 42.23 } }, Fl = { pct: { TOP: 8.19, OTH: 14.38, LNP: 23.62, ALP: 45.26, GRN: 8.55 } }, Bl = { pct: { ALP: 42.54, GRN: 7.82, TOP: 2.68, OTH: 7.75, IND: 4.16, LNP: 35.04 } }, Wl = { pct: { ALP: 38.29, OTH: 6.59, LNP: 36.39, GRN: 11.32, TOP: 2.75, IND: 4.66 } }, Vl = { pct: { IND: 5.75, OTH: 11.76, ALP: 28.92, ONP: 15.54, LNP: 26.85, TOP: 3.14, GRN: 8.03 } }, $l = { pct: { TOP: 2.47, GRN: 11.35, ONP: 3.89, LNP: 48.04, OTH: 4.07, ALP: 30.19 } }, Ul = { pct: { GRN: 11.59, LNP: 47.02, TOP: 3.48, OTH: 5.19, ONP: 7.05, ALP: 25.68 } }, Kl = { pct: { ONP: 2.43, LNP: 46.64, TOP: 1.36, GRN: 21.81, OTH: 3.9, ALP: 23.87 } }, Yl = { pct: { GRN: 4.53, OTH: 13.5, IND: 2.33, LNP: 38.08, ALP: 22.24, ONP: 15.9, TOP: 3.42 } }, jl = { pct: { OTH: 17.68, ONP: 12.17, LNP: 39.94, ALP: 18.86, GRN: 4.2, IND: 2.59, TOP: 4.56 } }, zl = { pct: { GRN: 9.54, LNP: 43.93, ALP: 29.96, IND: 2.27, TOP: 2.15, ONP: 4.95, OTH: 7.19 } }, ql = { pct: { OTH: 10.7, ALP: 21.4, ONP: 8.15, GRN: 8.56, LNP: 46.33, TOP: 4.86 } }, Ql = { pct: { TOP: 2.86, OTH: 10.23, GRN: 11.78, LNP: 46.43, ONP: 7.34, IND: 1.26, ALP: 20.1 } }, Xl = { pct: { TOP: 3.3, ALP: 21.16, GRN: 11.81, ONP: 8.26, LNP: 47.64, OTH: 7.83 } }, Zl = { pct: { ALP: 26.98, TOP: 4, GRN: 2.89, IND: 3.56, ONP: 18.46, OTH: 8.42, LNP: 35.69 } }, Jl = { pct: { ONP: 11.26, GRN: 8.32, TOP: 3.85, LNP: 41.49, ALP: 28.14, OTH: 6.94 } }, e1 = { pct: { LNP: 40.05, ALP: 30.26, GRN: 23.12, TOP: 1.42, ONP: 2.07, OTH: 3.09 } }, t1 = { pct: { GRN: 7.71, ONP: 12.67, OTH: 6.1, LNP: 51.63, TOP: 3.84, ALP: 18.06 } }, o1 = { pct: { ONP: 10.43, TOP: 5.36, OTH: 18.45, GRN: 6.88, LNP: 34.92, ALP: 23.95 } }, n1 = { pct: { ONP: 13.64, LNP: 42.43, GRN: 3.43, IND: 4.65, OTH: 10.69, TOP: 4.03, ALP: 21.14 } }, r1 = { pct: { TOP: 6.38, OTH: 46.06, GRN: 4.95, LNP: 26.33, ALP: 16.27 } }, a1 = { pct: { OTH: 16.11, IND: 2.67, ALP: 26.94, ONP: 5.66, TOP: 3.71, LNP: 35.18, GRN: 9.73 } }, s1 = { pct: { ONP: 5.16, OTH: 5.37, LNP: 39.36, ALP: 34.4, GRN: 13.53, TOP: 2.18 } }, i1 = { pct: { LNP: 36.33, TOP: 3.16, OTH: 9.62, ALP: 32.11, ONP: 12.45, GRN: 6.32 } }, l1 = { pct: { ALP: 14.94, LNP: 53.79, OTH: 10.45, TOP: 3.49, ONP: 14.05, GRN: 3.29 } }, c1 = { pct: { ALP: 21.4, OTH: 12.84, IND: 1.67, GRN: 10.29, LNP: 45.19, TOP: 3.12, ONP: 5.49 } }, u1 = { pct: { OTH: 13.06, LNP: 48.2, ONP: 6.03, GRN: 9.06, TOP: 3.48, ALP: 20.18 } }, d1 = { pct: { OTH: 4.67, ALP: 34.1, GRN: 16.26, ONP: 3.21, LNP: 39.61, TOP: 2.16 } }, f1 = { pct: { LNP: 32.92, GRN: 11.08, ALP: 40.51, TOP: 2.49, ONP: 6, OTH: 6.99 } }, h1 = { pct: { TOP: 3.19, LNP: 46.37, ONP: 7.25, ALP: 29.74, OTH: 5.03, GRN: 8.42 } }, p1 = { pct: { ALP: 38.22, TOP: 3.41, GRN: 8.38, ONP: 7.89, OTH: 13.16, LNP: 28.93 } }, v1 = { pct: { ALP: 23.85, TOP: 1.5, OTH: 5.25, ONP: 2.11, LNP: 47.44, GRN: 19.86 } }, g1 = { pct: { GRN: 9.47, ALP: 20.72, TOP: 3.44, LNP: 44.86, IND: 4.28, OTH: 6.92, ONP: 10.32 } }, N1 = { pct: { TOP: 4.6, GRN: 6.74, IND: 5.01, ALP: 17.6, OTH: 10.71, ONP: 13.16, LNP: 42.19 } }, P1 = { pct: { OTH: 8.13, GRN: 15.14, ALP: 38.78, LNP: 34.82, TOP: 3.13 } }, x1 = { pct: { GRN: 6.46, TOP: 5.59, LNP: 54.65, OTH: 13.45, ALP: 19.84 } }, m1 = { pct: { OTH: 8.27, GRN: 11.4, LNP: 43.07, ALP: 33.01, TOP: 1.8, IND: 2.45 } }, O1 = { pct: { OTH: 14.12, ALP: 21.25, ONP: 8.09, IND: 1.62, TOP: 3.5, LNP: 47.14, GRN: 4.28 } }, A1 = { pct: { OTH: 8.95, TOP: 4.15, ALP: 41.23, LNP: 35.16, GRN: 10.51 } }, L1 = { pct: { ALP: 48.5, LNP: 30.42, GRN: 8.83, OTH: 7.49, TOP: 4.76 } }, w1 = { pct: { ALP: 46.24, LNP: 31.4, OTH: 7.95, GRN: 8.24, TOP: 6.15 } }, T1 = { pct: { LNP: 36.51, GRN: 8.98, OTH: 38.18, TOP: 3.1, ALP: 13.24 } }, y1 = { pct: { ALP: 47.91, LNP: 24.29, TOP: 6.62, GRN: 6.78, OTH: 9.34, IND: 5.06 } }, _1 = { pct: { GRN: 10.58, LNP: 47.86, ALP: 28.26, OTH: 8.51, TOP: 2.29, IND: 2.51 } }, b1 = { pct: { GRN: 10.01, ALP: 33.18, OTH: 6.82, LNP: 41.73, IND: 3.62, TOP: 4.64 } }, R1 = { pct: { TOP: 3.42, IND: 11.72, OTH: 8.02, LNP: 37.4, GRN: 4.49, ALP: 29.79, ONP: 5.15 } }, C1 = { pct: { IND: 48.82, ALP: 19.73, LNP: 16.95, GRN: 9.34, TOP: 2.72, OTH: 2.44 } }, E1 = { pct: { GRN: 15.74, LNP: 30.28, OTH: 4.88, ALP: 42.61, TOP: 6.48 } }, S1 = { pct: { LNP: 38.04, ALP: 34.79, GRN: 9.02, ONP: 7.76, TOP: 5.82, OTH: 4.57 } }, H1 = { pct: { LNP: 52.68, GRN: 8.53, ALP: 28.71, TOP: 3.47, OTH: 6.6 } }, I1 = { pct: { OTH: 8.46, TOP: 4.42, IND: 3.66, GRN: 8.45, LNP: 29.3, ALP: 45.71 } }, G1 = { pct: { OTH: 7.03, GRN: 10.74, ALP: 41.84, TOP: 4.08, LNP: 30.39, ONP: 5.92 } }, D1 = { pct: { OTH: 9.03, TOP: 4.04, LNP: 27.57, ALP: 52.47, GRN: 6.9 } }, k1 = { pct: { OTH: 19.01, GRN: 6.12, ALP: 48.91, TOP: 3.15, LNP: 22.81 } }, M1 = { pct: { IND: 2.16, OTH: 16.09, TOP: 2.44, LNP: 42.32, ALP: 26.75, GRN: 10.23 } }, F1 = { pct: { IND: 2.33, OTH: 10.64, GRN: 11.3, LNP: 41.43, TOP: 1.53, ALP: 32.76 } }, B1 = { pct: { IND: 1.62, OTH: 13.37, TOP: 1.85, GRN: 20.11, ALP: 44.5, LNP: 18.55 } }, W1 = { pct: { OTH: 9.62, ALP: 34.07, GRN: 8.68, IND: 4.85, LNP: 40.65, TOP: 2.13 } }, V1 = { pct: { ALP: 45.91, LNP: 32.64, GRN: 12.6, TOP: 5.29, OTH: 3.56 } }, $1 = { pct: { OTH: 10.75, IND: 1.59, GRN: 8.61, LNP: 45.88, TOP: 1.97, ALP: 31.2 } }, U1 = { pct: { OTH: 15.21, TOP: 2.46, ALP: 36.54, GRN: 7.96, LNP: 37.83 } }, K1 = { pct: { IND: 14.8, OTH: 9.22, LNP: 43.94, ALP: 23.27, GRN: 6.4, TOP: 2.37 } }, Y1 = { pct: { TOP: 7.42, LNP: 24.27, ALP: 47.37, OTH: 7.81, GRN: 7.75, IND: 5.38 } }, j1 = { pct: { ALP: 46.95, GRN: 15.97, LNP: 28.3, TOP: 5.28, OTH: 3.51 } }, z1 = { pct: { OTH: 13.96, TOP: 4.17, ALP: 21.99, IND: 2.98, LNP: 51.18, GRN: 5.72 } }, q1 = { pct: { TOP: 1.91, OTH: 3.84, ALP: 27.68, GRN: 13.73, LNP: 51.51, IND: 1.33 } }, Q1 = { pct: { TOP: 7.43, IND: 8.31, GRN: 6.69, ALP: 47.12, LNP: 24.53, OTH: 5.92 } }, X1 = { pct: { ALP: 48.64, GRN: 6.82, TOP: 6.03, LNP: 34.39, OTH: 4.12 } }, Z1 = { pct: { TOP: 3.5, ALP: 43.46, LNP: 37.58, GRN: 8.75, OTH: 6.71 } }, J1 = { pct: { GRN: 4.03, OTH: 7.1, IND: 30.94, LNP: 42.6, TOP: 3.77, ALP: 11.56 } }, ec = { pct: { GRN: 10.71, LNP: 33.75, OTH: 8.84, ALP: 42.93, TOP: 3.77 } }, tc = { pct: { TOP: 3.62, ALP: 40.71, OTH: 4.47, LNP: 37.4, GRN: 13.8 } }, oc = { pct: { TOP: 1.16, IND: 9.89, LNP: 47.94, ALP: 16.33, OTH: 4.07, GRN: 20.61 } }, nc = { pct: { GRN: 7.5, OTH: 8.8, LNP: 43.68, ONP: 4.64, TOP: 2.43, ALP: 32.95 } }, rc = { pct: { OTH: 9.76, LNP: 28.84, ALP: 49.41, TOP: 4.55, GRN: 7.44 } }, ac = { pct: { IND: 2, GRN: 23.21, OTH: 7.44, LNP: 35.79, TOP: 1.12, ALP: 30.43 } }, sc = { pct: { LNP: 41.48, IND: 19.1, OTH: 19.36, ALP: 13.94, TOP: 3, GRN: 3.12 } }, ic = { pct: { TOP: 3.48, GRN: 14.38, ALP: 45.69, LNP: 33.56, OTH: 2.9 } }, lc = { pct: { GRN: 7.91, OTH: 11.93, ALP: 37.36, LNP: 32.68, IND: 1.53, ONP: 5.61, TOP: 2.97 } }, cc = { pct: { OTH: 9.9, GRN: 47.81, IND: 1.2, LNP: 20.82, ALP: 19.14, TOP: 1.12 } }, uc = { pct: { OTH: 8.29, LNP: 50.01, ALP: 29.04, TOP: 2.56, GRN: 10.09 } }, dc = { pct: { IND: 5.32, ONP: 7.28, ALP: 28.21, GRN: 6.7, LNP: 44.24, TOP: 3.83, OTH: 4.41 } }, fc = { pct: { LNP: 47.45, IND: 7.87, TOP: 4.93, ALP: 17.96, GRN: 3.9, ONP: 10.44, OTH: 7.46 } }, hc = { pct: { ALP: 57.26, TOP: 4.77, GRN: 6.33, OTH: 8.83, LNP: 21.15, IND: 1.66 } }, pc = { pct: { GRN: 6.1, TOP: 5.79, ALP: 25.13, IND: 9.99, LNP: 49.14, OTH: 3.85 } }, vc = { pct: { OTH: 12.14, LNP: 17.18, GRN: 25.49, TOP: 2.97, ALP: 42.21 } }, gc = { pct: { OTH: 13.11, ALP: 37.86, LNP: 27.97, GRN: 10.41, TOP: 2.71, ONP: 7.94 } }, Nc = { pct: { GRN: 8.81, ALP: 38.33, ONP: 5.44, OTH: 12.95, IND: 1.22, LNP: 31.27, TOP: 1.99 } }, Pc = { pct: { OTH: 12.2, ONP: 6.72, GRN: 7.07, TOP: 2.12, LNP: 46.06, ALP: 25.83 } }, xc = { pct: { GRN: 9.53, ALP: 36.07, TOP: 2.42, OTH: 9.38, ONP: 5.33, LNP: 37.28 } }, mc = { pct: { TOP: 1.21, GRN: 15.05, LNP: 52.46, IND: 7.5, ONP: 1.15, OTH: 5.57, ALP: 17.06 } }, Oc = { pct: { LNP: 51.84, OTH: 8.32, ONP: 9.08, GRN: 7.7, ALP: 20.51, TOP: 2.55 } }, Ac = { pct: { GRN: 12.15, OTH: 9.87, LNP: 49.51, ONP: 5.6, IND: 1.29, ALP: 19.95, TOP: 1.63 } }, Lc = { pct: { OTH: 10.36, ALP: 35.97, ONP: 3.62, TOP: 1.83, LNP: 33.09, GRN: 15.13 } }, wc = { pct: { OTH: 11.85, LNP: 41.23, ALP: 28.95, ONP: 4.99, TOP: 2.15, GRN: 10.83 } }, Tc = { pct: { ONP: 4.4, LNP: 48.65, GRN: 11.48, OTH: 7.95, ALP: 23.27, IND: 2.56, TOP: 1.7 } }, yc = { pct: { LNP: 51.15, GRN: 7.9, ALP: 19.89, TOP: 1.74, OTH: 11.42, ONP: 7.9 } }, _c = { pct: { ONP: 7.63, ALP: 27.02, LNP: 41.92, OTH: 11.67, GRN: 8.08, TOP: 2.32, IND: 1.36 } }, bc = { pct: { OTH: 9.11, ALP: 32.86, LNP: 35.68, TOP: 1.81, GRN: 18.01, ONP: 2.54 } }, Rc = { pct: { LNP: 42.08, OTH: 11.08, GRN: 11.6, TOP: 1.66, ONP: 2.28, ALP: 31.29 } }, Cc = { pct: { ALP: 24.81, ONP: 1.99, IND: 2.57, OTH: 7.57, GRN: 10.68, LNP: 51.28, TOP: 1.11 } }, Ec = {
  BEAN: Ki,
  CANB: Yi,
  FENN: ji,
  BANK: zi,
  BART: qi,
  BENN: Qi,
  BERO: Xi,
  BLAX: Zi,
  BRFD: Ji,
  CALA: el,
  CHIF: tl,
  COOK: ol,
  COWP: nl,
  CUNN: rl,
  DOBE: al,
  EMON: sl,
  FARR: il,
  FOWL: ll,
  GILM: cl,
  GRAY: ul,
  GREE: dl,
  HUGH: fl,
  HUME: hl,
  HUNT: pl,
  KSMI: vl,
  LIND: gl,
  LYNE: Nl,
  MACA: Pl,
  MACK: xl,
  MACQ: ml,
  MCMA: Ol,
  MITC: Al,
  NENG: Ll,
  NEWC: wl,
  "!!!!!": { pct: { OTH: 6.24, ALP: 24.47, TOP: 1.23, GRN: 17.58, IND: 2.11, LNP: 48.37 } },
  PAGE: Tl,
  PARK: yl,
  PARR: _l,
  PATE: bl,
  REID: Rl,
  RICH: Cl,
  RIVE: El,
  ROBE: Sl,
  SHOR: Hl,
  SYDN: Il,
  WARR: Gl,
  WATS: Dl,
  WENT: kl,
  WERR: Ml,
  WHIT: Fl,
  LING: Bl,
  SOLO: Wl,
  BLAI: Vl,
  BONN: $l,
  BOWM: Ul,
  BRIS: Kl,
  CAPR: Yl,
  DAWS: jl,
  DICK: zl,
  FADD: ql,
  FAIR: Ql,
  FISH: Xl,
  FLYN: Zl,
  FORD: Jl,
  GRIF: e1,
  GROO: t1,
  HERB: o1,
  HINK: n1,
  KENN: r1,
  LEIC: a1,
  LILL: s1,
  LONG: i1,
  MARA: l1,
  MCPH: c1,
  MONC: u1,
  MORE: d1,
  OXLE: f1,
  PETR: h1,
  RANK: p1,
  RYAN: v1,
  WBAY: g1,
  WRIG: N1,
  ADEL: P1,
  BARK: x1,
  BOOT: m1,
  GREY: O1,
  HIND: A1,
  KING: L1,
  MAKI: w1,
  MAYO: T1,
  SPEN: y1,
  STUR: _1,
  BASS: b1,
  BRAD: R1,
  CLAR: C1,
  FRAN: E1,
  LYON: S1,
  ASTO: H1,
  BALL: I1,
  BEND: G1,
  BRUC: D1,
  CALW: k1,
  CASE: M1,
  CHIS: F1,
  COOP: B1,
  CORA: W1,
  CORI: V1,
  DEAK: $1,
  DUNK: U1,
  FLIN: K1,
  FRAS: Y1,
  GELL: j1,
  GIPP: z1,
  GOLD: q1,
  GORT: Q1,
  HOLT: X1,
  HOTH: Z1,
  INDI: J1,
  ISAA: ec,
  JAGA: tc,
  KOOY: oc,
  LTRO: nc,
  LALO: rc,
  MACN: ac,
  MALL: sc,
  MARI: ic,
  MCEW: lc,
  MELB: cc,
  MENZ: uc,
  MONA: dc,
  NICH: fc,
  SCUL: hc,
  WANN: pc,
  WILL: vc,
  BRAN: gc,
  BURT: Nc,
  CANN: Pc,
  COWA: xc,
  CURT: mc,
  DURA: Oc,
  FORR: Ac,
  FREM: Lc,
  HASL: wc,
  MOOR: Tc,
  OCON: yc,
  PEAR: _c,
  PERT: bc,
  SWAN: Rc,
  TANG: Cc
}, so = ro(), Sc = { url: "https://abcnewsdata.sgp1.digitaloceanspaces.com/elections-2025-results-data__ash-test/latest.json" }, Hc = {
  liveData: Sc
}, Ic = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, Gc = { LIB: "LNP", LNP: "LNP", CLP: "LNP", NAT: "LNP", ALP: "ALP", UAP: "TOP" }, $r = {
  hashCodes: Ic,
  synonyms: Gc
};
function Dc(e, t = (o) => !0) {
  return e.data.electorates.reduce((o, n) => {
    const r = n.code;
    if (!n.accumulatedCandidates)
      return console.error("Missing accumulatedCandidates"), o;
    const s = n.accumulatedCandidates.filter(
      (i) => t($r.synonyms[i.party.code] || i.party.code)
    ).reduce((i, c) => {
      var u;
      const l = (u = c == null ? void 0 : c.simple) == null ? void 0 : u.pct, f = l ? Number(l) : 0;
      return i + f;
    }, 0);
    return o[r] = s, o;
  }, {});
}
let $t;
async function Ur({ cache: e } = { cache: !0 }) {
  return e && $t || ($t = fetch(Hc.liveData.url).then((t) => t.json())), $t;
}
function Kr(e, t) {
  se(t, !0);
  const [o, n] = xo(), { resetViewboxPadding: r, setViewboxPadding: a } = Pr("viewbox-padding") || {};
  let s = O(t, "arrowChart", 7), i = O(t, "hexes", 7), c = O(t, "offset", 7), l = ge(ae({})), f = ge(void 0), u = /* @__PURE__ */ K(() => String(s().split(" ")[0])), h = /* @__PURE__ */ K(() => N(f) ? Dc(N(f), (p) => p === N(u)) : {});
  De(() => {
    const p = N(f), L = N(u), y = N(h);
    !p || !y || W(l, ae(p.data.electorates.reduce(
      (x, P) => {
        var R;
        const A = P.code, _ = (R = Ec[A]) == null ? void 0 : R.pct;
        let T = (_ == null ? void 0 : _[L]) || 0;
        const C = N(h)[A], G = T && C ? C - T : 0;
        return x[A] = G, x;
      },
      {}
    )));
  }), De(() => {
    It(so, (p) => `Change in first pref
for ${N(u)}: ${N(l)[p] ? N(l)[p].toFixed(3) + "%" : "not applicable"}`);
  }), it(() => () => {
    It(so, void 0);
  });
  let v = /* @__PURE__ */ K(() => () => `var(--a-${N(u).length > 3 ? "OTH" : N(u).toUpperCase()}, hotpink)`);
  const d = () => 20;
  it(() => {
    const p = a("HexMapArrowsFirsPreference", [30, 0, 30, 0]);
    return Ur({ cache: !0 }).then((L) => {
      W(f, ae(L));
    }), () => r(p);
  }), rn(e, {
    get arrowData() {
      return N(l);
    },
    arrowHeight: 0.08,
    get hexes() {
      return i();
    },
    get offset() {
      return c();
    },
    getRotationForValue: d,
    get getColourForValue() {
      return N(v);
    }
  });
  var g = ie({
    get arrowChart() {
      return s();
    },
    set arrowChart(p) {
      s(p), m();
    },
    get hexes() {
      return i();
    },
    set hexes(p) {
      i(p), m();
    },
    get offset() {
      return c();
    },
    set offset(p) {
      c(p), m();
    }
  });
  return n(), g;
}
he(Kr, { arrowChart: {}, hexes: {}, offset: {} }, [], [], !0);
function Yr(e, t) {
  se(t, !0);
  const [o, n] = xo(), { resetViewboxPadding: r, setViewboxPadding: a } = Pr("viewbox-padding") || {};
  let s = O(t, "hexes", 7), i = O(t, "offset", 7), c = ge(void 0), l = /* @__PURE__ */ K(() => {
    const p = N(c);
    if (!p)
      return {};
    const L = ["LIB", "LNP", "NAT", "CLP"];
    return p.data.electorates.reduce(
      (y, x) => {
        var T, C;
        const [P, A] = x.swingDial[0].party.code === "ALP" ? x.swingDial : [...x.swingDial].reverse();
        return P.party.code === "ALP" && L.includes(A.party.code) && (y[x.code] = Number(((T = P.predicted2CP) == null ? void 0 : T.swing) || ((C = P.simple2CP) == null ? void 0 : C.swing) || 0)), y;
      },
      {}
    );
  });
  De(() => {
    It(so, (p) => `Swing: ${N(l)[p] ? `${N(l)[p].toFixed(2)}% to ${N(l)[p] > 0 ? "ALP" : "Coalition"}` : "not applicable"}`);
  }), it(() => () => {
    It(so, void 0);
  });
  let f = /* @__PURE__ */ K(() => (p) => `var(--a-${p < 0 ? "LNP" : "ALP"}, hotpink)`);
  const u = (p) => p < 0 ? -135 : -45;
  it(() => {
    Ur({ cache: !0 }).then((L) => {
      W(c, ae(L));
    });
    const p = a("HexMapArrowsSwing", [30, 0, 30, 0]);
    return () => r(p);
  });
  var h = vt(), v = Xe(h);
  {
    var d = (p) => {
      rn(p, {
        get arrowData() {
          return N(l);
        },
        arrowHeight: 0.06,
        get hexes() {
          return s();
        },
        get offset() {
          return i();
        },
        getRotationForValue: u,
        get getColourForValue() {
          return N(f);
        }
      });
    };
    Te(v, (p) => {
      N(c) && p(d);
    });
  }
  D(e, h);
  var g = ie({
    get hexes() {
      return s();
    },
    set hexes(p) {
      s(p), m();
    },
    get offset() {
      return i();
    },
    set offset(p) {
      i(p), m();
    }
  });
  return n(), g;
}
he(Yr, { hexes: {}, offset: {} }, [], [], !0);
function kc() {
  const e = ro([0, 0, 0, 0]), t = ro("none");
  let o = 0;
  function n(s, i) {
    e.set(i);
    const c = [s, o++].join();
    return t.set(c), c;
  }
  function r(s) {
    Ir(t) === s && (e.set([0, 0, 0, 0]), t.set("none"));
  }
  const a = {
    setViewboxPadding: n,
    resetViewboxPadding: r
  };
  return ss("viewbox-padding", a), {
    viewboxPadding: e,
    viewboxApi: a
  };
}
function Gn(e, t = [0, 0, 0, 0]) {
  const [o, n, r, a] = t, [s, i, c, l] = e;
  return [s - a, i - o, c + a + n, l + o + r];
}
const Mc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABvBAAAbwQGXmrkfAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPpJREFUOI2d0rErhVEYwOHn09dVpFsGRVkMRtnsWCwyUiKRKPGn6FJkRJgsBhtlUgZlsLAZZDCIotw4htvN8dW97v3e8Xd6n06dk4QQEgS/M4BVDMo3NyilEdqNZYwhyQE+YAtnCCmKmMEUCjnAF+zjEOVqTEIIF2jPAX7gAHt4j3oR82kO9Asn2MFz1AuYxBw60ibRK6zjPmoJRlQevKcaG4VvUcJ1pg9hDf3Zhf/gJ2zj1N8v2YdFjNZarAW/YhdH+Ix6FxYwgZZ6N8rCZRyrPMxb1NswjVm01gOz8DfOsYHHzPk4ltDZCBgvXmITd1FPMIwV9DYDVucHs4YzzzgMYBMAAAAASUVORK5CYII=";
var Fc = /* @__PURE__ */ Re('<div class="hexmap__labels svelte-82t7dm"><!></div>'), Bc = /* @__PURE__ */ Re('<div class="hexmap svelte-82t7dm"><div><svg class="svelte-82t7dm"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="10.5" height="6" preserveAspectRatio="xMidYMid"><image x="0" y="0" width="22" height="12" transform="scale(0.5)" transform-origin="top left"></image></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const Wc = {
  hash: "svelte-82t7dm",
  code: ".hexmap.svelte-82t7dm {position:relative;width:100%;height:100%;position:relative;}.hexmap.svelte-82t7dm * {box-sizing:border-box;}.hexmap__labels.svelte-82t7dm {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-82t7dm svg:where(.svelte-82t7dm) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-82t7dm {position:relative;margin:0 auto;max-height:100%;}"
};
function jr(e, t) {
  se(t, !0), Ue(e, Wc);
  const [o, n] = xo(), r = () => Ss(U, "$viewboxPadding", o);
  let a = O(t, "config", 23, () => ({})), s = O(t, "layout", 23, () => ({})), i = O(t, "allocations", 23, () => ({})), c = O(t, "focuses", 23, () => ({})), l = O(t, "certainties", 23, () => ({})), f = O(t, "labelsToShow", 23, () => ({})), u = O(t, "showStateLabels", 7, !1), h = O(t, "showElectorateLabels", 7, !1), v = O(t, "showFocusedElectorateLabels", 7, !1), d = O(t, "isStaticLayout", 7, !1), g = O(t, "onClick", 7, ({ code: w }) => {
  }), p = O(t, "onHover", 7, ({ code: w }) => {
  }), L = O(t, "onFocus", 7, ({ code: w }) => {
  }), y = O(t, "customViewbox", 7, null), x = O(t, "onViewboxChange", 7, ({ newViewbox: w }) => {
  }), P = O(t, "isInteractive", 7, !1), A = O(t, "arrowChart", 7, "None"), _ = O(t, "selectedElectorate", 7, null), T = O(t, "customElectorateAltText", 7), C = O(t, "showStateOutlinesOnTop", 7, !1), G = O(t, "isInline", 7, !1), R = O(t, "hexFlip", 7, "None"), B = ge(void 0), q = ge(0), b = ge(0), E = ge(null), k = ge(null);
  const { viewboxPadding: U } = kc(), Y = Gn(s().viewbox, r()), j = {
    easing: Ms,
    duration: G() ? 0 : 1100
  };
  let me = new ht(Y[0], j), le = new ht(Y[1], j), oe = new ht(Y[2], j), Ke = new ht(Y[3], j);
  De(() => {
    const [w, Q, je, Lo] = Gn(y() || s().viewbox, r());
    me.set(w), le.set(Q), oe.set(je), Ke.set(Lo);
  }), De(() => {
    x()(s().viewbox);
  }), it(() => {
    if (!N(B))
      return;
    const w = N(B).getBoundingClientRect();
    W(b, w.height / w.width);
  });
  let wt = /* @__PURE__ */ K(() => Si({
    isInteractive: P(),
    onClick: g(),
    onHover: (w) => {
      W(k, ae(w.code)), p()(w);
    }
  })), Oe = /* @__PURE__ */ K(() => {
    let w = N(q), Q = oe.current;
    return w ? Q / w + 0.1 : 1;
  });
  var Ae = Bc(), Ye = $(Ae);
  let cn;
  var ct = $(Ye), Oo = $(ct), Ao = $(Oo), Xr = $(Ao);
  ue(Xr, "href", Mc), M(Ao), M(Oo);
  var un = X(Oo);
  const Zr = /* @__PURE__ */ K(() => A() !== "None");
  Vr(un, {
    get groups() {
      return a().groups;
    },
    get isStaticLayout() {
      return d();
    },
    get layout() {
      return s();
    },
    get allocations() {
      return i();
    },
    get focuses() {
      return c();
    },
    get certainties() {
      return l();
    },
    get showElectorateLabels() {
      return h();
    },
    get showFocusedElectorateLabels() {
      return v();
    },
    get labelsToShow() {
      return f();
    },
    get showStateOutlinesOnTop() {
      return C();
    },
    get hexFlip() {
      return R();
    },
    get isOutlineOnly() {
      return N(Zr);
    }
  });
  var dn = X(un);
  zt(dn, {
    get groups() {
      return a().groups;
    },
    get id() {
      return N(E);
    },
    get layout() {
      return s();
    },
    type: "focus"
  });
  var fn = X(dn);
  zt(fn, {
    get groups() {
      return a().groups;
    },
    get id() {
      return _();
    },
    get layout() {
      return s();
    },
    type: "focus"
  });
  var hn = X(fn);
  zt(hn, {
    get groups() {
      return a().groups;
    },
    get id() {
      return N(k);
    },
    get layout() {
      return s();
    },
    type: "hover"
  });
  var Jr = X(hn);
  {
    var ea = (w) => {
      var Q = vt(), je = Xe(Q);
      tt(je, 17, () => a().groups, et, (Lo, Tt) => {
        var pn = vt(), sa = Xe(pn);
        {
          var ia = (wo) => {
            var vn = vt(), la = Xe(vn);
            {
              var ca = (ut) => {
                Yr(ut, {
                  get hexes() {
                    return N(Tt).hexes;
                  },
                  get offset() {
                    return s().positions[N(Tt).name];
                  }
                });
              }, ua = (ut) => {
                Kr(ut, {
                  get hexes() {
                    return N(Tt).hexes;
                  },
                  get offset() {
                    return s().positions[N(Tt).name];
                  },
                  get arrowChart() {
                    return A();
                  }
                });
              };
              Te(la, (ut) => {
                A() === "Labor/Coalition 2CP Swing" ? ut(ca) : ut(ua, !1);
              });
            }
            D(wo, vn);
          };
          Te(sa, (wo) => {
            s().positions[N(Tt).name] && wo(ia);
          });
        }
        D(Lo, pn);
      }), D(w, Q);
    };
    Te(Jr, (w) => {
      A() !== "None" && w(ea);
    });
  }
  M(ct), Po(ct, (w) => W(B, w), () => N(B));
  var ta = X(ct, 2);
  {
    var oa = (w) => {
      var Q = Fc(), je = $(Q);
      Dr(je, {
        get labels() {
          return s().labels;
        },
        get overlayLabels() {
          return s().overlayLabels;
        }
      }), M(Q), D(w, Q);
    };
    Te(ta, (w) => {
      u() && w(oa);
    });
  }
  M(Ye);
  var na = X(Ye, 2);
  {
    var ra = (w) => {
      Mr(w, {
        get customElectorateAltText() {
          return T();
        },
        get groups() {
          return a().groups;
        },
        get layout() {
          return s();
        },
        onChange: (Q) => {
          W(E, ae(Q));
        },
        get onClick() {
          return g();
        },
        get onFocus() {
          return L();
        }
      });
    };
    Te(na, (w) => {
      P() && w(ra);
    });
  }
  M(Ae), xe(
    (w, Q, je) => {
      cn = Go(
        Ye,
        cn,
        {
          class: "hexmap__viz",
          ...N(wt),
          [Yt]: {
            "hexmap__viz--vertical": N(b) <= 1
          }
        },
        "svelte-82t7dm"
      ), Ne(Ye, "aspect-ratio", w), ue(ct, "viewBox", Q), ue(Ao, "patternTransform", je);
    },
    [
      () => N(b) ? N(b).toFixed(3) : null,
      () => [
        me.current,
        le.current,
        oe.current,
        Ke.current
      ].join(" "),
      () => `scale(${N(Oe).toFixed(2)})`
    ]
  ), Es(ct, "clientWidth", (w) => W(q, w)), Pt(3, Ye, () => xt, () => ({ duration: G() ? 0 : 250 })), Pt(3, Ae, () => xt, () => ({ duration: 750 })), D(e, Ae);
  var aa = ie({
    get config() {
      return a();
    },
    set config(w = {}) {
      a(w), m();
    },
    get layout() {
      return s();
    },
    set layout(w = {}) {
      s(w), m();
    },
    get allocations() {
      return i();
    },
    set allocations(w = {}) {
      i(w), m();
    },
    get focuses() {
      return c();
    },
    set focuses(w = {}) {
      c(w), m();
    },
    get certainties() {
      return l();
    },
    set certainties(w = {}) {
      l(w), m();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(w = {}) {
      f(w), m();
    },
    get showStateLabels() {
      return u();
    },
    set showStateLabels(w = !1) {
      u(w), m();
    },
    get showElectorateLabels() {
      return h();
    },
    set showElectorateLabels(w = !1) {
      h(w), m();
    },
    get showFocusedElectorateLabels() {
      return v();
    },
    set showFocusedElectorateLabels(w = !1) {
      v(w), m();
    },
    get isStaticLayout() {
      return d();
    },
    set isStaticLayout(w = !1) {
      d(w), m();
    },
    get onClick() {
      return g();
    },
    set onClick(w = ({ code: Q }) => {
    }) {
      g(w), m();
    },
    get onHover() {
      return p();
    },
    set onHover(w = ({ code: Q }) => {
    }) {
      p(w), m();
    },
    get onFocus() {
      return L();
    },
    set onFocus(w = ({ code: Q }) => {
    }) {
      L(w), m();
    },
    get customViewbox() {
      return y();
    },
    set customViewbox(w = null) {
      y(w), m();
    },
    get onViewboxChange() {
      return x();
    },
    set onViewboxChange(w = ({ newViewbox: Q }) => {
    }) {
      x(w), m();
    },
    get isInteractive() {
      return P();
    },
    set isInteractive(w = !1) {
      P(w), m();
    },
    get arrowChart() {
      return A();
    },
    set arrowChart(w = "None") {
      A(w), m();
    },
    get selectedElectorate() {
      return _();
    },
    set selectedElectorate(w = null) {
      _(w), m();
    },
    get customElectorateAltText() {
      return T();
    },
    set customElectorateAltText(w) {
      T(w), m();
    },
    get showStateOutlinesOnTop() {
      return C();
    },
    set showStateOutlinesOnTop(w = !1) {
      C(w), m();
    },
    get isInline() {
      return G();
    },
    set isInline(w = !1) {
      G(w), m();
    },
    get hexFlip() {
      return R();
    },
    set hexFlip(w = "None") {
      R(w), m();
    }
  });
  return n(), aa;
}
he(
  jr,
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
    customElectorateAltText: {},
    showStateOutlinesOnTop: {},
    isInline: {},
    hexFlip: {}
  },
  [],
  [],
  !0
);
let Vc = ro({
  allocated: {},
  uncertain: {}
});
const $c = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#949494", fullStateOutline: "transparent", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "#767676", tileFocusBorder: "black", tileFocusBorderGap: "white", tileInteractBorder: "black" }, Uc = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", TOP: "#cc8500", Teal: "#0098a6" }, Kc = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", TOP: "#f5e7cc" }, Dn = {
  c: $c,
  allocated: Uc,
  uncertain: Kc
};
function zr(e, t) {
  se(t, !0);
  const [o, n] = xo();
  let r = O(t, "rootEl", 15), a = O(t, "colours", 7, Dn);
  De(() => {
    const i = a(), c = r();
    if (!c)
      return;
    It(Vc, {
      allocated: i.allocated,
      uncertain: i.uncertain
    });
    const l = { allocated: "a", uncertain: "u" };
    Object.entries(i).forEach(([f, u]) => {
      const h = l[f] || f;
      Object.entries(u).forEach(([v, d]) => {
        const g = `--${h}-${v}`;
        c.style.setProperty(g, d);
      });
    });
  }), it(() => {
    r();
  }), Po(tr.body, (i) => r(i), () => r());
  var s = ie({
    get rootEl() {
      return r();
    },
    set rootEl(i) {
      r(i), m();
    },
    get colours() {
      return a();
    },
    set colours(i = Dn) {
      a(i), m();
    }
  });
  return n(), s;
}
he(zr, { rootEl: {}, colours: {} }, [], [], !0);
const Yc = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.003006, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 34, top: 30.25, width: 8, name: "NT" }, { left: 65.25, top: 21.25, width: 8, name: "QLD" }, { left: 57.75, top: 43.5, width: 8, name: "NSW" }, { left: 67.5, top: 57.5, width: 8, name: "ACT" }, { left: 58, top: 66.5, width: 8, name: "VIC" }, { left: 58, top: 85.5, width: 8, name: "TAS" }, { left: 34, top: 48.5, width: 8, name: "SA" }, { left: 24.5, top: 53, width: 8, name: "WA" }], overlayLabels: !0 }, jc = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.25, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 71, top: 63, width: 8, name: "ACT" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, zc = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, qc = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, Qc = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, Xc = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Zc = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, Jc = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, eu = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, tu = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, ou = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, nu = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, ru = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, au = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, su = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, iu = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, lu = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, cu = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, uu = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, du = {
  COUNTRY: Yc,
  EXPLODED: jc,
  EXPLODED_STATES_ONLY: zc,
  GRID: qc,
  ACT: Qc,
  NSW: Xc,
  NT: Zc,
  QLD: Jc,
  SA: eu,
  TAS: tu,
  VIC: ou,
  WA: nu,
  ACT_NT: ru,
  NSW_QLD: au,
  NSW_VIC: su,
  QLD_VIC: iu,
  QLD_WA: lu,
  QLD_NSW_VIC: cu,
  SA_TAS_WA: uu
}, fu = 291, hu = 200, pu = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Syd","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"Mcma","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"Rivr","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robs","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shld","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chif","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kngs","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunn","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Bnks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Grnw","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Ling","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxly","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fish","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bow","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lill","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flyn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capr","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dick","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Grif","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fair","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blar","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Bris","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrgt","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hink","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Lcht","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kend","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"Mcph","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Rank","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petr","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Ford","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groo","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Strt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makn","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"King","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brdn","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clrk","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyon","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Astn","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Cori","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bndi","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruc","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casy","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chis","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalo","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deak","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flnd","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gips","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawk","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wils","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"Latr","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McE","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nich","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moor","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curt","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowa","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Prth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brnd","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Cani","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"Ocon","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), an = {
  svgWidth: fu,
  svgHeight: hu,
  groups: pu
};
function vu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _o, kn;
function gu() {
  if (kn) return _o;
  kn = 1;
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
    var i = t.length, c = t.charAt(0), l = Math.log(i) / Math.log(256), f = Math.log(256) / Math.log(i);
    function u(d) {
      if (d instanceof Uint8Array || (ArrayBuffer.isView(d) ? d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength) : Array.isArray(d) && (d = Uint8Array.from(d))), !(d instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (d.length === 0)
        return "";
      for (var g = 0, p = 0, L = 0, y = d.length; L !== y && d[L] === 0; )
        L++, g++;
      for (var x = (y - L) * f + 1 >>> 0, P = new Uint8Array(x); L !== y; ) {
        for (var A = d[L], _ = 0, T = x - 1; (A !== 0 || _ < p) && T !== -1; T--, _++)
          A += 256 * P[T] >>> 0, P[T] = A % i >>> 0, A = A / i >>> 0;
        if (A !== 0)
          throw new Error("Non-zero carry");
        p = _, L++;
      }
      for (var C = x - p; C !== x && P[C] === 0; )
        C++;
      for (var G = c.repeat(g); C < x; ++C)
        G += t.charAt(P[C]);
      return G;
    }
    function h(d) {
      if (typeof d != "string")
        throw new TypeError("Expected String");
      if (d.length === 0)
        return new Uint8Array();
      for (var g = 0, p = 0, L = 0; d[g] === c; )
        p++, g++;
      for (var y = (d.length - g) * l + 1 >>> 0, x = new Uint8Array(y); d[g]; ) {
        var P = o[d.charCodeAt(g)];
        if (P === 255)
          return;
        for (var A = 0, _ = y - 1; (P !== 0 || A < L) && _ !== -1; _--, A++)
          P += i * x[_] >>> 0, x[_] = P % 256 >>> 0, P = P / 256 >>> 0;
        if (P !== 0)
          throw new Error("Non-zero carry");
        L = A, g++;
      }
      for (var T = y - L; T !== y && x[T] === 0; )
        T++;
      for (var C = new Uint8Array(p + (y - T)), G = p; T !== y; )
        C[G++] = x[T++];
      return C;
    }
    function v(d) {
      var g = h(d);
      if (g)
        return g;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: u,
      decodeUnsafe: h,
      decode: v
    };
  }
  return _o = e, _o;
}
var Nu = gu();
const Pu = /* @__PURE__ */ vu(Nu);
var xu = "0123456789abcdefghijklmnopqrstuvwxyz";
Pu(xu);
new TextEncoder();
new TextDecoder();
const mu = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, Ou = function(e, { delineator: t }) {
  e += t;
  const o = [];
  let n = e;
  for (let a = 0; a < e.length; a++)
    n = mu(n), o.push(n);
  o.sort();
  let r = "";
  for (let a = 0; a < o.length; a++)
    r += o[a].charAt(o[a].length - 1);
  return r;
}, Au = function(e, { delineator: t }) {
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
function qr(e) {
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
function Qr(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, o, n) => o.repeat(+n)
  );
}
async function Lu(e, { delineator: t }) {
  const o = Ou(e, { delineator: t });
  return qr(o);
}
async function wu(e, { delineator: t }) {
  const o = Qr(e);
  return Au(o, { delineator: t });
}
function Tu({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => Lu(t, { delineator: e }),
    decode: (t) => wu(t, { delineator: e })
  };
}
const Vo = 26, $o = 97, yu = 48, Mn = async (e, { maxBits: t }) => {
  const o = [1, ...e].map((i) => i ? 1 : 0).join(""), n = [];
  for (let i = o.length; i > 0; i -= t)
    n.push(o.slice(Math.max(0, i - t), i));
  return n.reverse(), n.map((i) => parseInt(i, 2)).map((i) => i > Vo ? i % Vo : String.fromCharCode(i + $o)).join("");
};
async function Fn(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= $o ? i - $o : i - yu + Vo
  ).map(
    (i, c) => Number(i).toString(2).padStart(c > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((c) => c === "1")
  ).slice(1);
}
function _u({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => qr(await Mn(t, { maxBits: e })),
    decode: async (t) => Fn(Qr(t), { maxBits: e })
  } : {
    encode: (t) => Mn(t, { maxBits: e }),
    decode: (t) => Fn(t, { maxBits: e })
  };
}
const sn = an.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), bu = Object.values(sn).reduce((e, t) => (e[t.id] = t, e), {});
an.groups;
const Uo = "q", Ru = "x";
Tu({ delineator: Uo });
const Cu = oi($r.hashCodes);
if (Cu[Uo] || Ru === Uo)
  throw new Error("Can not use delineator in allocation map");
_u({ maxBits: 4 });
Object.freeze(
  sn.reduce((e, t) => (e[t.id] = null, e), {})
);
Object.freeze(
  sn.reduce((e, t) => (e[t.id] = !0, e), {})
);
var Eu = /* @__PURE__ */ Re("<!> <div><!></div>", 1);
function Su(e, t) {
  se(t, !0);
  let o = O(t, "allocations", 23, () => ({})), n = O(t, "certainties", 23, () => ({})), r = O(t, "focuses", 23, () => ({})), a = O(t, "showStateLabels", 7, !1), s = O(t, "showElectorateLabels", 7, !1), i = O(t, "layout", 7, "COUNTRY"), c = O(t, "selectedElectorate", 7, null), l = O(t, "customViewbox", 7, null), f = O(t, "onClick", 7, () => {
  }), u = O(t, "onHover", 7, () => {
  }), h = O(t, "onFocus", 7, () => {
  }), v = O(t, "onApi", 7, () => {
  }), d = O(t, "onViewboxChange", 7, () => {
  }), g = O(t, "isStaticLayout", 7, !0), p = O(t, "isInteractive", 7, !0), L = O(t, "colours", 7), y = O(t, "customElectorateAltText", 23, () => ({})), x = O(t, "areStateOutlinesOnTop", 7), P = ge(void 0), A = /* @__PURE__ */ K(() => du[i()]);
  function _(b, E, k, U = !0) {
    const Y = U ? k.getScreenCTM() : k.getCTM(), j = k.createSVGPoint();
    j.x = b, j.y = E;
    const me = j.matrixTransform(Y);
    return [me.x, me.y].map(Number);
  }
  function T(b) {
    const E = bu[b], k = N(A).positions[E == null ? void 0 : E.group];
    if (!N(P))
      return;
    const U = N(P).querySelector("svg");
    if (!E || !k || !U)
      throw new Error(`Could not find hexagon with id ${b}`);
    const Y = [-0.5, -1], [j, me] = mo(
      [
        k[0] + Y[0],
        k[1] + Y[1]
      ],
      ""
    ).map(Number), le = Number(E.coordPx[0] + j), oe = Number(E.coordPx[1] + me), [Ke, wt] = _(le, oe, U), [Oe, Ae] = _(le, oe, U, !1);
    return {
      code: b,
      screenCoord: [Ke, wt],
      containerCoord: [Oe, Ae],
      svgCoord: [le, oe]
    };
  }
  function C(b) {
    var k;
    const E = (k = N(P)) == null ? void 0 : k.querySelector(`.hexmapkeyboardnav button[data-id="${b}"]`);
    E instanceof HTMLButtonElement && E.focus();
  }
  De(() => {
    v() && v()({ getHex: T, focusHex: C });
  });
  var G = Eu(), R = Xe(G);
  zr(R, {
    get colours() {
      return L();
    },
    get rootEl() {
      return N(P);
    },
    set rootEl(b) {
      W(P, ae(b));
    }
  });
  var B = X(R, 2), q = $(B);
  return jr(q, {
    config: an,
    get layout() {
      return N(A);
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
      return u();
    },
    get onFocus() {
      return h();
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
      return p();
    },
    get onViewboxChange() {
      return d();
    },
    get customElectorateAltText() {
      return y();
    },
    get showStateOutlinesOnTop() {
      return x();
    }
  }), M(B), Po(B, (b) => W(P, b), () => N(P)), D(e, G), ie({
    get allocations() {
      return o();
    },
    set allocations(b = {}) {
      o(b), m();
    },
    get certainties() {
      return n();
    },
    set certainties(b = {}) {
      n(b), m();
    },
    get focuses() {
      return r();
    },
    set focuses(b = {}) {
      r(b), m();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(b = !1) {
      a(b), m();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(b = !1) {
      s(b), m();
    },
    get layout() {
      return i();
    },
    set layout(b = "COUNTRY") {
      i(b), m();
    },
    get selectedElectorate() {
      return c();
    },
    set selectedElectorate(b = null) {
      c(b), m();
    },
    get customViewbox() {
      return l();
    },
    set customViewbox(b = null) {
      l(b), m();
    },
    get onClick() {
      return f();
    },
    set onClick(b = () => {
    }) {
      f(b), m();
    },
    get onHover() {
      return u();
    },
    set onHover(b = () => {
    }) {
      u(b), m();
    },
    get onFocus() {
      return h();
    },
    set onFocus(b = () => {
    }) {
      h(b), m();
    },
    get onApi() {
      return v();
    },
    set onApi(b = () => {
    }) {
      v(b), m();
    },
    get onViewboxChange() {
      return d();
    },
    set onViewboxChange(b = () => {
    }) {
      d(b), m();
    },
    get isStaticLayout() {
      return g();
    },
    set isStaticLayout(b = !0) {
      g(b), m();
    },
    get isInteractive() {
      return p();
    },
    set isInteractive(b = !0) {
      p(b), m();
    },
    get colours() {
      return L();
    },
    set colours(b) {
      L(b), m();
    },
    get customElectorateAltText() {
      return y();
    },
    set customElectorateAltText(b = {}) {
      y(b), m();
    },
    get areStateOutlinesOnTop() {
      return x();
    },
    set areStateOutlinesOnTop(b) {
      x(b), m();
    }
  });
}
customElements.define("abcnews-hexmap", he(
  Su,
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
    customElectorateAltText: {},
    areStateOutlinesOnTop: {}
  },
  [],
  [],
  !0
));
export {
  Su as default
};
