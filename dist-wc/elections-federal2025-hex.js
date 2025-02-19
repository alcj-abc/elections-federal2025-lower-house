var oa = Object.defineProperty;
var eo = (e) => {
  throw TypeError(e);
};
var aa = (e, t, o) => t in e ? oa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var q = (e, t, o) => aa(e, typeof t != "symbol" ? t + "" : t, o), to = (e, t, o) => t.has(e) || eo("Cannot " + o);
var O = (e, t, o) => (to(e, t, "read from private field"), o ? o.call(e) : t.get(e)), _e = (e, t, o) => t.has(e) ? eo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), Ge = (e, t, o, a) => (to(e, t, "write to private field"), a ? a.call(e, o) : t.set(e, o), o);
const na = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(na);
const ra = 1, sa = 2, ia = 16, la = 1, da = 4, ca = 8, ua = 16, fa = 4, ha = 2, ho = "[", Mt = "[!", kt = "]", Ce = {}, k = Symbol(), Et = !1, j = 2, po = 4, Bt = 8, ht = 16, ue = 32, ke = 64, nt = 128, Y = 256, rt = 512, H = 1024, fe = 2048, Be = 4096, se = 8192, pt = 16384, vo = 32768, je = 65536, pa = 1 << 19, go = 1 << 20, Se = Symbol("$state"), Ft = Symbol("legacy props"), va = Symbol("");
var Ht = Array.isArray, ga = Array.prototype.indexOf, Dt = Array.from, st = Object.keys, it = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, xa = Object.getOwnPropertyDescriptors, _a = Object.prototype, ya = Array.prototype, xo = Object.getPrototypeOf;
function Le(e) {
  return typeof e == "function";
}
const ye = () => {
};
function ma(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let lt = !1, Nt = [];
function _o() {
  lt = !1;
  const e = Nt.slice();
  Nt = [], ma(e);
}
function Wt(e) {
  lt || (lt = !0, queueMicrotask(_o)), Nt.push(e);
}
function wa() {
  lt && _o();
}
function yo(e) {
  return e === this.v;
}
function Pa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Aa(e, t) {
  return e !== t;
}
function Gt(e) {
  return !Pa(e, this.v);
}
function ba(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ea() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Na(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function La() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Oa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ra(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ca() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Sa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ta() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function $a() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ia = !1;
function F(e, t) {
  var o = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: yo,
    rv: 0,
    wv: 0
  };
  return o;
}
function mo(e) {
  return /* @__PURE__ */ Ma(F(e));
}
// @__NO_SIDE_EFFECTS__
function zt(e, t = !1) {
  const o = F(e);
  return t || (o.equals = Gt), o;
}
// @__NO_SIDE_EFFECTS__
function Ma(e) {
  return L !== null && !J && L.f & j && (Q === null ? Wa([e]) : Q.push(e)), e;
}
function M(e, t) {
  return L !== null && !J && Wo() && L.f & (j | ht) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Q === null || !Q.includes(e)) && $a(), wo(e, t);
}
function wo(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = So(), Po(e, fe), E !== null && E.f & H && !(E.f & (ue | ke)) && (te === null ? Ga([e]) : te.push(e))), t;
}
function Po(e, t) {
  var o = e.reactions;
  if (o !== null)
    for (var a = o.length, n = 0; n < a; n++) {
      var r = o[n], s = r.f;
      s & fe || (de(r, t), s & (H | Y) && (s & j ? Po(
        /** @type {Derived} */
        r,
        Be
      ) : xt(
        /** @type {Effect} */
        r
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  var t = j | fe, o = L !== null && L.f & j ? (
    /** @type {Derived} */
    L
  ) : null;
  return E === null || o !== null && o.f & Y ? t |= Y : E.f |= go, {
    ctx: W,
    deps: null,
    effects: null,
    equals: yo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: o ?? E
  };
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  const t = /* @__PURE__ */ ge(e);
  return t.equals = Gt, t;
}
function Ao(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var o = 0; o < t.length; o += 1)
      V(
        /** @type {Effect} */
        t[o]
      );
  }
}
function Ba(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & j))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Fa(e) {
  var t, o = E;
  ee(Ba(e));
  try {
    Ao(e), t = $o(e);
  } finally {
    ee(o);
  }
  return t;
}
function bo(e) {
  var t = Fa(e), o = (ve || e.f & Y) && e.deps !== null ? Be : H;
  de(e, o), e.equals(t) || (e.v = t, e.wv = So());
}
function vt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let N = !1;
function ne(e) {
  N = e;
}
let b;
function U(e) {
  if (e === null)
    throw vt(), Ce;
  return b = e;
}
function Pe() {
  return U(
    /** @type {TemplateNode} */
    /* @__PURE__ */ he(b)
  );
}
function z(e) {
  if (N) {
    if (/* @__PURE__ */ he(b) !== null)
      throw vt(), Ce;
    b = e;
  }
}
function Lt() {
  for (var e = 0, t = b; ; ) {
    if (t.nodeType === 8) {
      var o = (
        /** @type {Comment} */
        t.data
      );
      if (o === kt) {
        if (e === 0) return t;
        e -= 1;
      } else (o === ho || o === Mt) && (e += 1);
    }
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ he(t)
    );
    t.remove(), t = a;
  }
}
function Oe(e, t = null, o) {
  if (typeof e != "object" || e === null || Se in e)
    return e;
  const a = xo(e);
  if (a !== _a && a !== ya)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ht(e), s = F(0);
  r && n.set("length", F(
    /** @type {any[]} */
    e.length
  ));
  var u;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, i, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Ca();
        var f = n.get(i);
        return f === void 0 ? (f = F(l.value), n.set(i, f)) : M(f, Oe(l.value, u)), !0;
      },
      deleteProperty(d, i) {
        var l = n.get(i);
        if (l === void 0)
          i in d && n.set(i, F(k));
        else {
          if (r && typeof i == "string") {
            var f = (
              /** @type {Source<number>} */
              n.get("length")
            ), c = Number(i);
            Number.isInteger(c) && c < f.v && M(f, c);
          }
          M(l, k), oo(s);
        }
        return !0;
      },
      get(d, i, l) {
        var p;
        if (i === Se)
          return e;
        var f = n.get(i), c = i in d;
        if (f === void 0 && (!c || (p = ie(d, i)) != null && p.writable) && (f = F(Oe(c ? d[i] : k, u)), n.set(i, f)), f !== void 0) {
          var h = m(f);
          return h === k ? void 0 : h;
        }
        return Reflect.get(d, i, l);
      },
      getOwnPropertyDescriptor(d, i) {
        var l = Reflect.getOwnPropertyDescriptor(d, i);
        if (l && "value" in l) {
          var f = n.get(i);
          f && (l.value = m(f));
        } else if (l === void 0) {
          var c = n.get(i), h = c == null ? void 0 : c.v;
          if (c !== void 0 && h !== k)
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
        if (i === Se)
          return !0;
        var l = n.get(i), f = l !== void 0 && l.v !== k || Reflect.has(d, i);
        if (l !== void 0 || E !== null && (!f || (h = ie(d, i)) != null && h.writable)) {
          l === void 0 && (l = F(f ? Oe(d[i], u) : k), n.set(i, l));
          var c = m(l);
          if (c === k)
            return !1;
        }
        return f;
      },
      set(d, i, l, f) {
        var R;
        var c = n.get(i), h = i in d;
        if (r && i === "length")
          for (var p = l; p < /** @type {Source<number>} */
          c.v; p += 1) {
            var v = n.get(p + "");
            v !== void 0 ? M(v, k) : p in d && (v = F(k), n.set(p + "", v));
          }
        c === void 0 ? (!h || (R = ie(d, i)) != null && R.writable) && (c = F(void 0), M(c, Oe(l, u)), n.set(i, c)) : (h = c.v !== k, M(c, Oe(l, u)));
        var _ = Reflect.getOwnPropertyDescriptor(d, i);
        if (_ != null && _.set && _.set.call(f, l), !h) {
          if (r && typeof i == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(i);
            Number.isInteger(x) && x >= y.v && M(y, x + 1);
          }
          oo(s);
        }
        return !0;
      },
      ownKeys(d) {
        m(s);
        var i = Reflect.ownKeys(d).filter((c) => {
          var h = n.get(c);
          return h === void 0 || h.v !== k;
        });
        for (var [l, f] of n)
          f.v !== k && !(l in d) && i.push(l);
        return i;
      },
      setPrototypeOf() {
        Sa();
      }
    }
  );
}
function oo(e, t = 1) {
  M(e, e.v + t);
}
var ao, Eo, No, Lo;
function Ot() {
  if (ao === void 0) {
    ao = window, Eo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    No = ie(t, "firstChild").get, Lo = ie(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Me(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function K(e) {
  return No.call(e);
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return Lo.call(e);
}
function re(e, t) {
  if (!N)
    return /* @__PURE__ */ K(e);
  var o = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ K(b)
  );
  if (o === null)
    o = b.appendChild(Me());
  else if (t && o.nodeType !== 3) {
    var a = Me();
    return o == null || o.before(a), U(a), a;
  }
  return U(o), o;
}
function Ha(e, t) {
  if (!N) {
    var o = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ K(
        /** @type {Node} */
        e
      )
    );
    return o instanceof Comment && o.data === "" ? /* @__PURE__ */ he(o) : o;
  }
  return b;
}
function et(e, t = 1, o = !1) {
  let a = N ? b : e;
  for (var n; t--; )
    n = a, a = /** @type {TemplateNode} */
    /* @__PURE__ */ he(a);
  if (!N)
    return a;
  var r = a == null ? void 0 : a.nodeType;
  if (o && r !== 3) {
    var s = Me();
    return a === null ? n == null || n.after(s) : a.before(s), U(s), s;
  }
  return U(a), /** @type {TemplateNode} */
  a;
}
function Oo(e) {
  e.textContent = "";
}
const Ro = 0, Da = 1;
let tt = !1, ot = Ro, Ke = !1, Ye = null, Te = !1, Kt = !1;
function no(e) {
  Te = e;
}
function ro(e) {
  Kt = e;
}
let me = [], $e = 0;
let L = null, J = !1;
function Z(e) {
  L = e;
}
let E = null;
function ee(e) {
  E = e;
}
let Q = null;
function Wa(e) {
  Q = e;
}
let B = null, D = 0, te = null;
function Ga(e) {
  te = e;
}
let Co = 1, dt = 0, ve = !1;
function So() {
  return ++Co;
}
function Ve(e) {
  var f;
  var t = e.f;
  if (t & fe)
    return !0;
  if (t & Be) {
    var o = e.deps, a = (t & Y) !== 0;
    if (o !== null) {
      var n, r, s = (t & rt) !== 0, u = a && E !== null && !ve, d = o.length;
      if (s || u) {
        var i = (
          /** @type {Derived} */
          e
        ), l = i.parent;
        for (n = 0; n < d; n++)
          r = o[n], (s || !((f = r == null ? void 0 : r.reactions) != null && f.includes(i))) && (r.reactions ?? (r.reactions = [])).push(i);
        s && (i.f ^= rt), u && l !== null && !(l.f & Y) && (i.f ^= Y);
      }
      for (n = 0; n < d; n++)
        if (r = o[n], Ve(
          /** @type {Derived} */
          r
        ) && bo(
          /** @type {Derived} */
          r
        ), r.wv > e.wv)
          return !0;
    }
    (!a || E !== null && !ve) && de(e, H);
  }
  return !1;
}
function za(e, t) {
  for (var o = t; o !== null; ) {
    if (o.f & nt)
      try {
        o.fn(e);
        return;
      } catch {
        o.f ^= nt;
      }
    o = o.parent;
  }
  throw tt = !1, e;
}
function Ka(e) {
  return (e.f & pt) === 0 && (e.parent === null || (e.parent.f & nt) === 0);
}
function gt(e, t, o, a) {
  if (tt) {
    if (o === null && (tt = !1), Ka(t))
      throw e;
    return;
  }
  o !== null && (tt = !0);
  {
    za(e, t);
    return;
  }
}
function To(e, t, o = !0) {
  var a = e.reactions;
  if (a !== null)
    for (var n = 0; n < a.length; n++) {
      var r = a[n];
      r.f & j ? To(
        /** @type {Derived} */
        r,
        t,
        !1
      ) : t === r && (o ? de(r, fe) : r.f & H && de(r, Be), xt(
        /** @type {Effect} */
        r
      ));
    }
}
function $o(e) {
  var h;
  var t = B, o = D, a = te, n = L, r = ve, s = Q, u = W, d = J, i = e.f;
  B = /** @type {null | Value[]} */
  null, D = 0, te = null, L = i & (ue | ke) ? null : e, ve = (i & Y) !== 0 && (!Te || n === null || d), Q = null, so(e.ctx), J = !1, dt++;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (B !== null) {
      var c;
      if (ct(e, D), f !== null && D > 0)
        for (f.length = D + B.length, c = 0; c < B.length; c++)
          f[D + c] = B[c];
      else
        e.deps = f = B;
      if (!ve)
        for (c = D; c < f.length; c++)
          ((h = f[c]).reactions ?? (h.reactions = [])).push(e);
    } else f !== null && D < f.length && (ct(e, D), f.length = D);
    if (Wo() && te !== null && !J && f !== null && !(e.f & (j | Be | fe)))
      for (c = 0; c < /** @type {Source[]} */
      te.length; c++)
        To(
          te[c],
          /** @type {Effect} */
          e
        );
    return n !== null && dt++, l;
  } finally {
    B = t, D = o, te = a, L = n, ve = r, Q = s, so(u), J = d;
  }
}
function Ya(e, t) {
  let o = t.reactions;
  if (o !== null) {
    var a = ga.call(o, e);
    if (a !== -1) {
      var n = o.length - 1;
      n === 0 ? o = t.reactions = null : (o[a] = o[n], o.pop());
    }
  }
  o === null && t.f & j && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (B === null || !B.includes(t)) && (de(t, Be), t.f & (Y | rt) || (t.f ^= rt), Ao(
    /** @type {Derived} **/
    t
  ), ct(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ct(e, t) {
  var o = e.deps;
  if (o !== null)
    for (var a = t; a < o.length; a++)
      Ya(e, o[a]);
}
function Yt(e) {
  var t = e.f;
  if (!(t & pt)) {
    de(e, H);
    var o = E, a = W;
    E = e;
    try {
      t & ht ? en(e) : Bo(e), ko(e);
      var n = $o(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Co;
      var r = e.deps, s;
      Et && Ia && e.f & fe;
    } catch (u) {
      gt(u, e, o, a || e.ctx);
    } finally {
      E = o;
    }
  }
}
function Io() {
  if ($e > 1e3) {
    $e = 0;
    try {
      La();
    } catch (e) {
      if (Ye !== null)
        gt(e, Ye, null);
      else
        throw e;
    }
  }
  $e++;
}
function Mo(e) {
  var t = e.length;
  if (t !== 0) {
    Io();
    var o = Te;
    Te = !0;
    try {
      for (var a = 0; a < t; a++) {
        var n = e[a];
        n.f & H || (n.f ^= H);
        var r = ja(n);
        Ua(r);
      }
    } finally {
      Te = o;
    }
  }
}
function Ua(e) {
  var t = e.length;
  if (t !== 0)
    for (var o = 0; o < t; o++) {
      var a = e[o];
      if (!(a.f & (pt | se)))
        try {
          Ve(a) && (Yt(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null ? Fo(a) : a.fn = null));
        } catch (n) {
          gt(n, a, null, a.ctx);
        }
    }
}
function qa() {
  if (Ke = !1, $e > 1001)
    return;
  const e = me;
  me = [], Mo(e), Ke || ($e = 0, Ye = null);
}
function xt(e) {
  ot === Ro && (Ke || (Ke = !0, queueMicrotask(qa))), Ye = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var o = t.f;
    if (o & (ke | ue)) {
      if (!(o & H)) return;
      t.f ^= H;
    }
  }
  me.push(t);
}
function ja(e) {
  var t = [], o = e.first;
  e: for (; o !== null; ) {
    var a = o.f, n = (a & ue) !== 0, r = n && (a & H) !== 0, s = o.next;
    if (!r && !(a & se)) {
      if (a & po)
        t.push(o);
      else if (n)
        o.f ^= H;
      else {
        var u = L;
        try {
          L = o, Ve(o) && Yt(o);
        } catch (l) {
          gt(l, o, null, o.ctx);
        } finally {
          L = u;
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
  var t = ot, o = me;
  try {
    Io();
    const n = [];
    ot = Da, me = n, Ke = !1, Mo(o);
    var a = e == null ? void 0 : e();
    return wa(), (me.length > 0 || n.length > 0) && P(), $e = 0, Ye = null, a;
  } finally {
    ot = t, me = o;
  }
}
function m(e) {
  var t = e.f, o = (t & j) !== 0;
  if (L !== null && !J) {
    Q !== null && Q.includes(e) && Ta();
    var a = L.deps;
    e.rv < dt && (e.rv = dt, B === null && a !== null && a[D] === e ? D++ : B === null ? B = [e] : (!ve || !B.includes(e)) && B.push(e));
  } else if (o && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var n = (
      /** @type {Derived} */
      e
    ), r = n.parent;
    r !== null && !(r.f & Y) && (n.f ^= Y);
  }
  return o && (n = /** @type {Derived} */
  e, Ve(n) && bo(n)), e.v;
}
function ut(e) {
  var t = J;
  try {
    return J = !0, e();
  } finally {
    J = t;
  }
}
const Va = -7169;
function de(e, t) {
  e.f = e.f & Va | t;
}
function Xa(e) {
  E === null && L === null && Na(), L !== null && L.f & Y && E === null && Ea(), Kt && ba();
}
function Ja(e, t) {
  var o = t.last;
  o === null ? t.last = t.first = e : (o.next = e, e.prev = o, t.last = e);
}
function Fe(e, t, o, a = !0) {
  var n = (e & ke) !== 0, r = E, s = {
    ctx: W,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | fe,
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
    var u = Te;
    try {
      no(!0), Yt(s), s.f |= vo;
    } catch (l) {
      throw V(s), l;
    } finally {
      no(u);
    }
  } else t !== null && xt(s);
  var d = o && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (go | nt)) === 0;
  if (!d && !n && a && (r !== null && Ja(s, r), L !== null && L.f & j)) {
    var i = (
      /** @type {Derived} */
      L
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return s;
}
function Rt(e) {
  Xa();
  var t = E !== null && (E.f & ue) !== 0 && W !== null && !W.m;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      W
    );
    (o.e ?? (o.e = [])).push({
      fn: e,
      effect: E,
      reaction: L
    });
  } else {
    var a = _t(e);
    return a;
  }
}
function Qa(e) {
  const t = Fe(ke, e, !0);
  return () => {
    V(t);
  };
}
function Za(e) {
  const t = Fe(ke, e, !0);
  return (o = {}) => new Promise((a) => {
    o.outro ? Ue(t, () => {
      V(t), a(void 0);
    }) : (V(t), a(void 0));
  });
}
function _t(e) {
  return Fe(po, e, !1);
}
function Ut(e) {
  return Fe(Bt, e, !0);
}
function yt(e, t = [], o = ge) {
  const a = t.map(o);
  return He(() => e(...a.map(m)));
}
function He(e, t = 0) {
  return Fe(Bt | ht | t, e, !0);
}
function xe(e, t = !0) {
  return Fe(Bt | ue, e, !0, t);
}
function ko(e) {
  var t = e.teardown;
  if (t !== null) {
    const o = Kt, a = L;
    ro(!0), Z(null);
    try {
      t.call(null);
    } finally {
      ro(o), Z(a);
    }
  }
}
function Bo(e, t = !1) {
  var o = e.first;
  for (e.first = e.last = null; o !== null; ) {
    var a = o.next;
    V(o, t), o = a;
  }
}
function en(e) {
  for (var t = e.first; t !== null; ) {
    var o = t.next;
    t.f & ue || V(t), t = o;
  }
}
function V(e, t = !0) {
  var o = !1;
  if ((t || e.f & pa) && e.nodes_start !== null) {
    for (var a = e.nodes_start, n = e.nodes_end; a !== null; ) {
      var r = a === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ he(a)
      );
      a.remove(), a = r;
    }
    o = !0;
  }
  Bo(e, t && !o), ct(e, 0), de(e, pt);
  var s = e.transitions;
  if (s !== null)
    for (const d of s)
      d.stop();
  ko(e);
  var u = e.parent;
  u !== null && u.first !== null && Fo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Fo(e) {
  var t = e.parent, o = e.prev, a = e.next;
  o !== null && (o.next = a), a !== null && (a.prev = o), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = o));
}
function Ue(e, t) {
  var o = [];
  qt(e, o, !0), Ho(o, () => {
    V(e), t && t();
  });
}
function Ho(e, t) {
  var o = e.length;
  if (o > 0) {
    var a = () => --o || t();
    for (var n of e)
      n.out(a);
  } else
    t();
}
function qt(e, t, o) {
  if (!(e.f & se)) {
    if (e.f ^= se, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || o) && t.push(s);
    for (var a = e.first; a !== null; ) {
      var n = a.next, r = (a.f & je) !== 0 || (a.f & ue) !== 0;
      qt(a, t, r ? o : !1), a = n;
    }
  }
}
function ft(e) {
  Do(e, !0);
}
function Do(e, t) {
  if (e.f & se) {
    e.f ^= se, e.f & H || (e.f ^= H), Ve(e) && (de(e, fe), xt(e));
    for (var o = e.first; o !== null; ) {
      var a = o.next, n = (o.f & je) !== 0 || (o.f & ue) !== 0;
      Do(o, n ? t : !1), o = a;
    }
    if (e.transitions !== null)
      for (const r of e.transitions)
        (r.is_global || t) && r.in();
  }
}
let W = null;
function so(e) {
  W = e;
}
function Ae(e, t = !1, o) {
  W = {
    p: W,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function be(e) {
  const t = W;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var o = E, a = L;
      t.e = null;
      try {
        for (var n = 0; n < s.length; n++) {
          var r = s[n];
          ee(r.effect), Z(r.reaction), _t(r.fn);
        }
      } finally {
        ee(o), Z(a);
      }
    }
    W = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Wo() {
  return !0;
}
const tn = ["touchstart", "touchmove"];
function on(e) {
  return tn.includes(e);
}
function an(e) {
  var t = L, o = E;
  Z(null), ee(null);
  try {
    return e();
  } finally {
    Z(t), ee(o);
  }
}
const Go = /* @__PURE__ */ new Set(), Ct = /* @__PURE__ */ new Set();
function nn(e) {
  for (var t = 0; t < e.length; t++)
    Go.add(e[t]);
  for (var o of Ct)
    o(e);
}
function Je(e) {
  var x;
  var t = this, o = (
    /** @type {Node} */
    t.ownerDocument
  ), a = e.type, n = ((x = e.composedPath) == null ? void 0 : x.call(e)) || [], r = (
    /** @type {null | Element} */
    n[0] || e.target
  ), s = 0, u = e.__root;
  if (u) {
    var d = n.indexOf(u);
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
    it(e, "currentTarget", {
      configurable: !0,
      get() {
        return r || o;
      }
    });
    var l = L, f = E;
    Z(null), ee(null);
    try {
      for (var c, h = []; r !== null; ) {
        var p = r.assignedSlot || r.parentNode || /** @type {any} */
        r.host || null;
        try {
          var v = r["__" + a];
          if (v !== void 0 && (!/** @type {any} */
          r.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === r))
            if (Ht(v)) {
              var [_, ...y] = v;
              _.apply(r, [e, ...y]);
            } else
              v.call(r, e);
        } catch (R) {
          c ? h.push(R) : c = R;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        r = p;
      }
      if (c) {
        for (let R of h)
          queueMicrotask(() => {
            throw R;
          });
        throw c;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Z(l), ee(f);
    }
  }
}
function jt(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ce(e, t) {
  var o = (
    /** @type {Effect} */
    E
  );
  o.nodes_start === null && (o.nodes_start = e, o.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function mt(e, t) {
  var o = (t & ha) !== 0, a, n = !e.startsWith("<!>");
  return () => {
    if (N)
      return ce(b, null), b;
    a === void 0 && (a = jt(n ? e : "<!>" + e), a = /** @type {Node} */
    /* @__PURE__ */ K(a));
    var r = (
      /** @type {TemplateNode} */
      o || Eo ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    return ce(r, r), r;
  };
}
// @__NO_SIDE_EFFECTS__
function Vt(e, t, o = "svg") {
  var a = !e.startsWith("<!>"), n = `<${o}>${a ? e : "<!>" + e}</${o}>`, r;
  return () => {
    if (N)
      return ce(b, null), b;
    if (!r) {
      var s = (
        /** @type {DocumentFragment} */
        jt(n)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ K(s)
      );
      r = /** @type {Element} */
      /* @__PURE__ */ K(u);
    }
    var d = (
      /** @type {TemplateNode} */
      r.cloneNode(!0)
    );
    return ce(d, d), d;
  };
}
function rn() {
  if (N)
    return ce(b, null), b;
  var e = document.createDocumentFragment(), t = document.createComment(""), o = Me();
  return e.append(t, o), ce(t, o), e;
}
function le(e, t) {
  if (N) {
    E.nodes_end = b, Pe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let St = !0;
function zo(e, t) {
  var o = t == null ? "" : typeof t == "object" ? t + "" : t;
  o !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = o, e.nodeValue = o + "");
}
function Ko(e, t) {
  return Yo(e, t);
}
function sn(e, t) {
  Ot(), t.intro = t.intro ?? !1;
  const o = t.target, a = N, n = b;
  try {
    for (var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ K(o)
    ); r && (r.nodeType !== 8 || /** @type {Comment} */
    r.data !== ho); )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ he(r);
    if (!r)
      throw Ce;
    ne(!0), U(
      /** @type {Comment} */
      r
    ), Pe();
    const s = Yo(e, { ...t, anchor: r });
    if (b === null || b.nodeType !== 8 || /** @type {Comment} */
    b.data !== kt)
      throw vt(), Ce;
    return ne(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Ce)
      return t.recover === !1 && Oa(), Ot(), Oo(o), ne(!1), Ko(e, t);
    throw s;
  } finally {
    ne(a), U(n);
  }
}
const Ne = /* @__PURE__ */ new Map();
function Yo(e, { target: t, anchor: o, props: a = {}, events: n, context: r, intro: s = !0 }) {
  Ot();
  var u = /* @__PURE__ */ new Set(), d = (f) => {
    for (var c = 0; c < f.length; c++) {
      var h = f[c];
      if (!u.has(h)) {
        u.add(h);
        var p = on(h);
        t.addEventListener(h, Je, { passive: p });
        var v = Ne.get(h);
        v === void 0 ? (document.addEventListener(h, Je, { passive: p }), Ne.set(h, 1)) : Ne.set(h, v + 1);
      }
    }
  };
  d(Dt(Go)), Ct.add(d);
  var i = void 0, l = Za(() => {
    var f = o ?? t.appendChild(Me());
    return xe(() => {
      if (r) {
        Ae({});
        var c = (
          /** @type {ComponentContext} */
          W
        );
        c.c = r;
      }
      n && (a.$$events = n), N && ce(
        /** @type {TemplateNode} */
        f,
        null
      ), St = s, i = e(f, a) || {}, St = !0, N && (E.nodes_end = b), r && be();
    }), () => {
      var p;
      for (var c of u) {
        t.removeEventListener(c, Je);
        var h = (
          /** @type {number} */
          Ne.get(c)
        );
        --h === 0 ? (document.removeEventListener(c, Je), Ne.delete(c)) : Ne.set(c, h);
      }
      Ct.delete(d), f !== o && ((p = f.parentNode) == null || p.removeChild(f));
    };
  });
  return Tt.set(i, l), i;
}
let Tt = /* @__PURE__ */ new WeakMap();
function ln(e, t) {
  const o = Tt.get(e);
  return o ? (Tt.delete(e), o(t)) : Promise.resolve();
}
function Uo(e, t, o = !1) {
  N && Pe();
  var a = e, n = null, r = null, s = k, u = o ? je : 0, d = !1;
  const i = (f, c = !0) => {
    d = !0, l(c, f);
  }, l = (f, c) => {
    if (s === (s = f)) return;
    let h = !1;
    if (N) {
      const p = (
        /** @type {Comment} */
        a.data === Mt
      );
      !!s === p && (a = Lt(), U(a), ne(!1), h = !0);
    }
    s ? (n ? ft(n) : c && (n = xe(() => c(a))), r && Ue(r, () => {
      r = null;
    })) : (r ? ft(r) : c && (r = xe(() => c(a))), n && Ue(n, () => {
      n = null;
    })), h && ne(!0);
  };
  He(() => {
    d = !1, t(i), d || l(null, null);
  }, u), N && (a = b);
}
function dn(e, t, o) {
  N && Pe();
  var a = e, n = k, r, s = Aa;
  He(() => {
    s(n, n = t()) && (r && Ue(r), r = xe(() => o(a)));
  }), N && (a = b);
}
function Xt(e, t) {
  return t;
}
function cn(e, t, o, a) {
  for (var n = [], r = t.length, s = 0; s < r; s++)
    qt(t[s].e, n, !0);
  var u = r > 0 && n.length === 0 && o !== null;
  if (u) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      o.parentNode
    );
    Oo(d), d.append(
      /** @type {Element} */
      o
    ), a.clear(), pe(e, t[0].prev, t[r - 1].next);
  }
  Ho(n, () => {
    for (var i = 0; i < r; i++) {
      var l = t[i];
      u || (a.delete(l.k), pe(e, l.prev, l.next)), V(l.e, !u);
    }
  });
}
function Jt(e, t, o, a, n, r = null) {
  var s = e, u = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var d = (
      /** @type {Element} */
      e
    );
    s = N ? U(
      /** @type {Comment | Text} */
      /* @__PURE__ */ K(d)
    ) : d.appendChild(Me());
  }
  N && Pe();
  var i = null, l = !1, f = /* @__PURE__ */ ka(() => {
    var c = o();
    return Ht(c) ? c : c == null ? [] : Dt(c);
  });
  He(() => {
    var c = m(f), h = c.length;
    if (l && h === 0)
      return;
    l = h === 0;
    let p = !1;
    if (N) {
      var v = (
        /** @type {Comment} */
        s.data === Mt
      );
      v !== (h === 0) && (s = Lt(), U(s), ne(!1), p = !0);
    }
    if (N) {
      for (var _ = null, y, x = 0; x < h; x++) {
        if (b.nodeType === 8 && /** @type {Comment} */
        b.data === kt) {
          s = /** @type {Comment} */
          b, p = !0, ne(!1);
          break;
        }
        var R = c[x], S = a(R, x);
        y = qo(
          b,
          u,
          _,
          null,
          R,
          S,
          x,
          n,
          t,
          o
        ), u.items.set(S, y), _ = y;
      }
      h > 0 && U(Lt());
    }
    N || un(c, u, s, n, t, a, o), r !== null && (h === 0 ? i ? ft(i) : i = xe(() => r(s)) : i !== null && Ue(i, () => {
      i = null;
    })), p && ne(!0), m(f);
  }), N && (s = b);
}
function un(e, t, o, a, n, r, s) {
  var u = e.length, d = t.items, i = t.first, l = i, f, c = null, h = [], p = [], v, _, y, x;
  for (x = 0; x < u; x += 1) {
    if (v = e[x], _ = r(v, x), y = d.get(_), y === void 0) {
      var R = l ? (
        /** @type {TemplateNode} */
        l.e.nodes_start
      ) : o;
      c = qo(
        R,
        t,
        c,
        c === null ? t.first : c.next,
        v,
        _,
        x,
        a,
        n,
        s
      ), d.set(_, c), h = [], p = [], l = c.next;
      continue;
    }
    if (fn(y, v, x), y.e.f & se && ft(y.e), y !== l) {
      if (f !== void 0 && f.has(y)) {
        if (h.length < p.length) {
          var S = p[0], T;
          c = S.prev;
          var C = h[0], $ = h[h.length - 1];
          for (T = 0; T < h.length; T += 1)
            io(h[T], S, o);
          for (T = 0; T < p.length; T += 1)
            f.delete(p[T]);
          pe(t, C.prev, $.next), pe(t, c, C), pe(t, $, S), l = S, c = $, x -= 1, h = [], p = [];
        } else
          f.delete(y), io(y, l, o), pe(t, y.prev, y.next), pe(t, y, c === null ? t.first : c.next), pe(t, c, y), c = y;
        continue;
      }
      for (h = [], p = []; l !== null && l.k !== _; )
        l.e.f & se || (f ?? (f = /* @__PURE__ */ new Set())).add(l), p.push(l), l = l.next;
      if (l === null)
        continue;
      y = l;
    }
    h.push(y), c = y, l = y.next;
  }
  if (l !== null || f !== void 0) {
    for (var g = f === void 0 ? [] : Dt(f); l !== null; )
      l.e.f & se || g.push(l), l = l.next;
    var I = g.length;
    if (I > 0) {
      var Ee = u === 0 ? o : null;
      cn(t, g, Ee, d);
    }
  }
  E.first = t.first && t.first.e, E.last = c && c.e;
}
function fn(e, t, o, a) {
  wo(e.v, t), e.i = o;
}
function qo(e, t, o, a, n, r, s, u, d, i) {
  var l = (d & ra) !== 0, f = (d & ia) === 0, c = l ? f ? /* @__PURE__ */ zt(n) : F(n) : n, h = d & sa ? F(s) : s, p = {
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
    return p.e = xe(() => u(e, c, h, i), N), p.e.prev = o && o.e, p.e.next = a && a.e, o === null ? t.first = p : (o.next = p, o.e.next = p.e), a !== null && (a.prev = p, a.e.prev = p.e), p;
  } finally {
  }
}
function io(e, t, o) {
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
      /* @__PURE__ */ he(r)
    );
    n.before(r), r = s;
  }
}
function pe(e, t, o) {
  t === null ? e.first = o : (t.next = o, t.e.next = o && o.e), o !== null && (o.prev = t, o.e.prev = t && t.e);
}
function At(e, t, o, a, n) {
  var r = e, s = "", u;
  He(() => {
    if (s === (s = t() ?? "")) {
      N && Pe();
      return;
    }
    u !== void 0 && (V(u), u = void 0), s !== "" && (u = xe(() => {
      if (N) {
        b.data;
        for (var d = Pe(), i = d; d !== null && (d.nodeType !== 8 || /** @type {Comment} */
        d.data !== ""); )
          i = d, d = /** @type {TemplateNode} */
          /* @__PURE__ */ he(d);
        if (d === null)
          throw vt(), Ce;
        ce(b, i), r = U(d);
        return;
      }
      var l = s + "";
      l = `<svg>${l}</svg>`;
      var f = jt(l);
      for (f = /** @type {Element} */
      /* @__PURE__ */ K(f), ce(
        /** @type {TemplateNode} */
        /* @__PURE__ */ K(f),
        /** @type {TemplateNode} */
        f.lastChild
      ); /* @__PURE__ */ K(f); )
        r.before(
          /** @type {Node} */
          /* @__PURE__ */ K(f)
        );
    }));
  });
}
function hn(e, t, ...o) {
  var a = e, n = ye, r;
  He(() => {
    n !== (n = t()) && (r && (V(r), r = null), r = xe(() => (
      /** @type {SnippetFn} */
      n(a, ...o)
    )));
  }, je), N && (a = b);
}
function Xe(e, t) {
  Wt(() => {
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
function Qt(e, t, o, a) {
  var n = e.__attributes ?? (e.__attributes = {});
  N && (n[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || n[t] !== (n[t] = o) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[va] = o), o == null ? e.removeAttribute(t) : typeof o != "string" && pn(e).includes(t) ? e[t] = o : e.setAttribute(t, o));
}
var lo = /* @__PURE__ */ new Map();
function pn(e) {
  var t = lo.get(e.nodeName);
  if (t) return t;
  lo.set(e.nodeName, t = []);
  for (var o, a = e, n = Element.prototype; n !== a; ) {
    o = xa(a);
    for (var r in o)
      o[r].set && t.push(r);
    a = xo(a);
  }
  return t;
}
function bt(e, t, o) {
  if (o) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function ze(e, t, o, a) {
  var n = e.__styles ?? (e.__styles = {});
  n[t] !== o && (n[t] = o, o == null ? e.style.removeProperty(t) : e.style.setProperty(t, o, ""));
}
const vn = () => performance.now(), X = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => vn(),
  tasks: /* @__PURE__ */ new Set()
};
function jo() {
  const e = X.now();
  X.tasks.forEach((t) => {
    t.c(e) || (X.tasks.delete(t), t.f());
  }), X.tasks.size !== 0 && X.tick(jo);
}
function Vo(e) {
  let t;
  return X.tasks.size === 0 && X.tick(jo), {
    promise: new Promise((o) => {
      X.tasks.add(t = { c: e, f: o });
    }),
    abort() {
      X.tasks.delete(t);
    }
  };
}
function Qe(e, t) {
  an(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function gn(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (o) => o[0].toUpperCase() + o.slice(1)
  ).join("");
}
function co(e) {
  const t = {}, o = e.split(";");
  for (const a of o) {
    const [n, r] = a.split(":");
    if (!n || r === void 0) break;
    const s = gn(n.trim());
    t[s] = r.trim();
  }
  return t;
}
const xn = (e) => e;
function _n(e, t, o, a) {
  var n = (e & fa) !== 0, r = "both", s, u = t.inert, d = t.style.overflow, i, l;
  function f() {
    var _ = L, y = E;
    Z(null), ee(null);
    try {
      return s ?? (s = o()(t, (a == null ? void 0 : a()) ?? /** @type {P} */
      {}, {
        direction: r
      }));
    } finally {
      Z(_), ee(y);
    }
  }
  var c = {
    is_global: n,
    in() {
      t.inert = u, Qe(t, "introstart"), i = $t(t, f(), l, 1, () => {
        Qe(t, "introend"), i == null || i.abort(), i = s = void 0, t.style.overflow = d;
      });
    },
    out(_) {
      t.inert = !0, Qe(t, "outrostart"), l = $t(t, f(), i, 0, () => {
        Qe(t, "outroend"), _ == null || _();
      });
    },
    stop: () => {
      i == null || i.abort(), l == null || l.abort();
    }
  }, h = (
    /** @type {Effect} */
    E
  );
  if ((h.transitions ?? (h.transitions = [])).push(c), St) {
    var p = n;
    if (!p) {
      for (var v = (
        /** @type {Effect | null} */
        h.parent
      ); v && v.f & je; )
        for (; (v = v.parent) && !(v.f & ht); )
          ;
      p = !v || (v.f & vo) !== 0;
    }
    p && _t(() => {
      ut(() => c.in());
    });
  }
}
function $t(e, t, o, a, n) {
  var r = a === 1;
  if (Le(t)) {
    var s, u = !1;
    return Wt(() => {
      if (!u) {
        var _ = t({ direction: r ? "in" : "out" });
        s = $t(e, _, o, a, n);
      }
    }), {
      abort: () => {
        u = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (o == null || o.deactivate(), !(t != null && t.duration))
    return n(), {
      abort: ye,
      deactivate: ye,
      reset: ye,
      t: () => a
    };
  const { delay: d = 0, css: i, tick: l, easing: f = xn } = t;
  var c = [];
  if (r && o === void 0 && (l && l(0, 1), i)) {
    var h = co(i(0, 1));
    c.push(h, h);
  }
  var p = () => 1 - a, v = e.animate(c, { duration: d });
  return v.onfinish = () => {
    var _ = (o == null ? void 0 : o.t()) ?? 1 - a;
    o == null || o.abort();
    var y = a - _, x = (
      /** @type {number} */
      t.duration * Math.abs(y)
    ), R = [];
    if (x > 0) {
      var S = !1;
      if (i)
        for (var T = Math.ceil(x / 16.666666666666668), C = 0; C <= T; C += 1) {
          var $ = _ + y * f(C / T), g = co(i($, 1 - $));
          R.push(g), S || (S = g.overflow === "hidden");
        }
      S && (e.style.overflow = "hidden"), p = () => {
        var I = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          v.currentTime
        );
        return _ + y * f(I / x);
      }, l && Vo(() => {
        if (v.playState !== "running") return !1;
        var I = p();
        return l(I, 1 - I), !0;
      });
    }
    v = e.animate(R, { duration: x, fill: "forwards" }), v.onfinish = () => {
      p = () => a, l == null || l(a, 1 - a), n();
    };
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = ye);
    },
    deactivate: () => {
      n = ye;
    },
    reset: () => {
      a === 0 && (l == null || l(1, 0));
    },
    t: () => p()
  };
}
function uo(e, t) {
  return e === t || (e == null ? void 0 : e[Se]) === t;
}
function yn(e = {}, t, o, a) {
  return _t(() => {
    var n, r;
    return Ut(() => {
      n = r, r = [], ut(() => {
        e !== o(...r) && (t(e, ...r), n && uo(o(...n), e) && t(null, ...n));
      });
    }), () => {
      Wt(() => {
        r && uo(o(...r), e) && t(null, ...r);
      });
    };
  }), e;
}
let Ze = !1;
function mn(e) {
  var t = Ze;
  try {
    return Ze = !1, [e(), Ze];
  } finally {
    Ze = t;
  }
}
const wn = {
  get(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let a = e.props[o];
      if (Le(a) && (a = a()), typeof a == "object" && a !== null && t in a) return a[t];
    }
  },
  set(e, t, o) {
    let a = e.props.length;
    for (; a--; ) {
      let n = e.props[a];
      Le(n) && (n = n());
      const r = ie(n, t);
      if (r && r.set)
        return r.set(o), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let a = e.props[o];
      if (Le(a) && (a = a()), typeof a == "object" && a !== null && t in a) {
        const n = ie(a, t);
        return n && !n.configurable && (n.configurable = !0), n;
      }
    }
  },
  has(e, t) {
    if (t === Se || t === Ft) return !1;
    for (let o of e.props)
      if (Le(o) && (o = o()), o != null && t in o) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let o of e.props) {
      Le(o) && (o = o());
      for (const a in o)
        t.includes(a) || t.push(a);
    }
    return t;
  }
};
function Pn(...e) {
  return new Proxy({ props: e }, wn);
}
function A(e, t, o, a) {
  var T;
  var n = (o & la) !== 0, r = !0, s = (o & ca) !== 0, u = (o & ua) !== 0, d = !1, i;
  s ? [i, d] = mn(() => (
    /** @type {V} */
    e[t]
  )) : i = /** @type {V} */
  e[t];
  var l = Se in e || Ft in e, f = s && (((T = ie(e, t)) == null ? void 0 : T.set) ?? (l && t in e && ((C) => e[t] = C))) || void 0, c = (
    /** @type {V} */
    a
  ), h = !0, p = !1, v = () => (p = !0, h && (h = !1, u ? c = ut(
    /** @type {() => V} */
    a
  ) : c = /** @type {V} */
  a), c);
  i === void 0 && a !== void 0 && (f && r && Ra(), i = v(), f && f(i));
  var _;
  if (_ = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? v() : (h = !0, p = !1, C);
  }, !(o & da))
    return _;
  if (f) {
    var y = e.$$legacy;
    return function(C, $) {
      return arguments.length > 0 ? ((!$ || y || d) && f($ ? _() : C), C) : _();
    };
  }
  var x = !1, R = /* @__PURE__ */ zt(i), S = /* @__PURE__ */ ge(() => {
    var C = _(), $ = m(R);
    return x ? (x = !1, $) : R.v = C;
  });
  return n || (S.equals = Gt), function(C, $) {
    if (arguments.length > 0) {
      const g = $ ? m(S) : s ? Oe(C) : C;
      return S.equals(g) || (x = !0, M(R, g), p && c !== void 0 && (c = g), ut(() => m(S))), C;
    }
    return m(S);
  };
}
function An(e) {
  return new bn(e);
}
var oe, G;
class bn {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    _e(this, oe);
    /** @type {Record<string, any>} */
    _e(this, G);
    var r;
    var o = /* @__PURE__ */ new Map(), a = (s, u) => {
      var d = /* @__PURE__ */ zt(u);
      return o.set(s, d), d;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, u) {
          return m(o.get(u) ?? a(u, Reflect.get(s, u)));
        },
        has(s, u) {
          return u === Ft ? !0 : (m(o.get(u) ?? a(u, Reflect.get(s, u))), Reflect.has(s, u));
        },
        set(s, u, d) {
          return M(o.get(u) ?? a(u, d), d), Reflect.set(s, u, d);
        }
      }
    );
    Ge(this, G, (t.hydrate ? sn : Ko)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((r = t == null ? void 0 : t.props) != null && r.$$host) || t.sync === !1) && P(), Ge(this, oe, n.$$events);
    for (const s of Object.keys(O(this, G)))
      s === "$set" || s === "$destroy" || s === "$on" || it(this, s, {
        get() {
          return O(this, G)[s];
        },
        /** @param {any} value */
        set(u) {
          O(this, G)[s] = u;
        },
        enumerable: !0
      });
    O(this, G).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(n, s);
    }, O(this, G).$destroy = () => {
      ln(O(this, G));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    O(this, G).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, o) {
    O(this, oe)[t] = O(this, oe)[t] || [];
    const a = (...n) => o.call(this, ...n);
    return O(this, oe)[t].push(a), () => {
      O(this, oe)[t] = O(this, oe)[t].filter(
        /** @param {any} fn */
        (n) => n !== a
      );
    };
  }
  $destroy() {
    O(this, G).$destroy();
  }
}
oe = new WeakMap(), G = new WeakMap();
let Xo;
typeof HTMLElement == "function" && (Xo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, o, a) {
    super();
    /** The Svelte component constructor */
    q(this, "$$ctor");
    /** Slots */
    q(this, "$$s");
    /** @type {any} The Svelte component instance */
    q(this, "$$c");
    /** Whether or not the custom element is connected */
    q(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    q(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    q(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    q(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    q(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    q(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    q(this, "$$me");
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
          n !== "default" && (s.name = n), le(r, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, a = En(this);
      for (const n of this.$$s)
        n in a && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), o.default = !0) : o[n] = t(n));
      for (const n of this.attributes) {
        const r = this.$$g_p(n.name);
        r in this.$$d || (this.$$d[r] = at(r, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = An({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = Qa(() => {
        Ut(() => {
          var n;
          this.$$r = !0;
          for (const r of st(this.$$c)) {
            if (!((n = this.$$p_d[r]) != null && n.reflect)) continue;
            this.$$d[r] = this.$$c[r];
            const s = at(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = at(t, a, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
    return st(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === t || !this.$$p_d[o].attribute && o.toLowerCase() === t
    ) || t;
  }
});
function at(e, t, o, a) {
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
function En(e) {
  const t = {};
  return e.childNodes.forEach((o) => {
    t[
      /** @type {Element} node */
      o.slot || "default"
    ] = !0;
  }), t;
}
function De(e, t, o, a, n, r) {
  let s = class extends Xo {
    constructor() {
      super(e, o, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return st(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return st(t).forEach((u) => {
    it(s.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(d) {
        var f;
        d = at(u, d, t), this.$$d[u] = d;
        var i = this.$$c;
        if (i) {
          var l = (f = ie(i, u)) == null ? void 0 : f.get;
          l ? i[u] = d : i.$set({ [u]: d });
        }
      }
    });
  }), a.forEach((u) => {
    it(s.prototype, u, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[u];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function fo(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Nn(e) {
  return e;
}
function Ln(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function It(e, t) {
  if (e === t || e !== e) return () => e;
  const o = typeof e;
  if (o !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const a = (
      /** @type {Array<any>} */
      t.map((n, r) => It(
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
    if (fo(e) && fo(t)) {
      const r = e.getTime(), u = t.getTime() - r;
      return (d) => new Date(r + d * u);
    }
    const a = Object.keys(t), n = {};
    return a.forEach((r) => {
      n[r] = It(e[r], t[r]);
    }), (r) => {
      const s = {};
      return a.forEach((u) => {
        s[u] = n[u](r);
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
var ae, Ie, qe, we;
const Zt = class Zt {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, o = {}) {
    _e(this, ae, F(
      /** @type {T} */
      void 0
    ));
    _e(this, Ie, F(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    _e(this, qe);
    /** @type {import('../internal/client/types').Task | null} */
    _e(this, we, null);
    O(this, ae).v = O(this, Ie).v = t, Ge(this, qe, o);
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
    const a = new Zt(t(), o);
    return Ut(() => {
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
    M(O(this, Ie), t);
    let {
      delay: a = 0,
      duration: n = 400,
      easing: r = Nn,
      interpolate: s = It
    } = { ...O(this, qe), ...o };
    if (n === 0)
      return (f = O(this, we)) == null || f.abort(), M(O(this, ae), t), Promise.resolve();
    const u = X.now() + a;
    let d, i = !1, l = O(this, we);
    return Ge(this, we, Vo((c) => {
      if (c < u)
        return !0;
      if (!i) {
        i = !0;
        const p = O(this, ae).v;
        d = s(p, t), typeof n == "function" && (n = n(p, t)), l == null || l.abort();
      }
      const h = c - u;
      return h > /** @type {number} */
      n ? (M(O(this, ae), t), !1) : (M(O(this, ae), d(r(h / /** @type {number} */
      n))), !0);
    })), O(this, we).promise;
  }
  get current() {
    return m(O(this, ae));
  }
  get target() {
    return m(O(this, Ie));
  }
  set target(t) {
    this.set(t);
  }
};
ae = new WeakMap(), Ie = new WeakMap(), qe = new WeakMap(), we = new WeakMap();
let Re = Zt;
const On = (e) => e;
function Rn(e, { delay: t = 0, duration: o = 400, easing: a = On } = {}) {
  const n = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: a,
    css: (r) => `opacity: ${r * n}`
  };
}
var Cn = /* @__PURE__ */ Vt('<g><text class="hexlabels__text svelte-fyaz0o"> </text></g>'), Sn = /* @__PURE__ */ Vt('<g class="hexlabels"></g>');
const Tn = {
  hash: "svelte-fyaz0o",
  code: ".hexlabels__text.svelte-fyaz0o {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:6px;font-family:sans-serif;text-anchor:middle;}"
};
function Jo(e, t) {
  Ae(t, !0), Xe(e, Tn);
  let o = A(t, "hexes", 7), a = A(t, "labelsToShow", 23, () => ({})), n = A(t, "showAll", 7, !1), r = A(t, "showElectorateLabels", 7, !1), s = /* @__PURE__ */ ge(() => r() ? o() : o().filter(({ code: d }) => a()[d]));
  var u = Sn();
  return Jt(u, 21, () => m(s), Xt, (d, i) => {
    let l = () => m(i).coordPx, f = () => m(i).code;
    var c = Cn(), h = re(c), p = re(h, !0);
    z(h), z(c), yt(
      (v) => {
        Qt(c, "transform", v), zo(p, f());
      },
      [
        () => `translate(${l().join(" ")})`
      ]
    ), le(d, c);
  }), z(u), le(e, u), be({
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
De(
  Jo,
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
var $n = /* @__PURE__ */ Vt('<g class="group svelte-1mzshp9"><g class="group-hexes svelte-1mzshp9"><!></g><!><g class="group-hex-strokes svelte-1mzshp9"><!></g><g class="group-outline svelte-1mzshp9"><!></g></g>');
const In = {
  hash: "svelte-1mzshp9",
  code: '.group.svelte-1mzshp9 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--hidden.svelte-1mzshp9 {opacity:0;}.group.svelte-1mzshp9 .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-1mzshp9 .hex-outline {fill:none;stroke:var(--c-black);stroke-width:2px;transition:opacity 0.5s, stroke 0.2s;vector-effect:non-scaling-stroke;}.group--map-is-filled.svelte-1mzshp9 .hex-outline {opacity:0;stroke:white;}.group-hexes.svelte-1mzshp9 .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="NXT"] {fill:var(--a-NXT);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-1mzshp9 .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--c-lightgrey);}.group-hex-strokes.svelte-1mzshp9 .hex {fill:none;stroke:var(--c-empty-border);stroke-width:1px;}.group--has-focuses.svelte-1mzshp9 .hex-outline {opacity:0;stroke:white;}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-1mzshp9 .group-hexes:where(.svelte-1mzshp9) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.2;}.group--has-focuses.svelte-1mzshp9 .group-hex-strokes:where(.svelte-1mzshp9) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}'
};
function Qo(e, t) {
  Ae(t, !0), Xe(e, In);
  let o = A(t, "name", 7, ""), a = A(t, "svgHexes", 7, ""), n = A(t, "hexes", 23, () => []), r = A(t, "svgOutline", 7, ""), s = A(t, "offset", 23, () => [1 / 0, 1 / 0]), u = A(t, "isFilled", 7, !1), d = A(t, "focuses", 7), i = A(t, "hasAnyFocuses", 7, !1), l = A(t, "labelsToShow", 23, () => ({})), f = A(t, "showElectorateLabels", 7), c = A(t, "showFocusedElectorateLabels", 7);
  const h = 16;
  function p(w = [0, 0]) {
    const We = w[0] * (h * Math.sqrt(3)), wt = w[1] * 1.5 * h;
    return [We, wt].map((Pt) => `${Math.round(Pt)}px`);
  }
  let v = mo(""), _ = /* @__PURE__ */ ge(() => s()[0] !== 1 / 0);
  Rt(() => {
    m(_) && M(v, `translate(${p(s()).join(",")})`);
  });
  let y = /* @__PURE__ */ ge(() => i() && c() ? (console.log("showing focusetd electoraotsts", d()), d()) : l());
  var x = $n(), R = re(x), S = re(R);
  At(S, a), z(R);
  var T = et(R);
  {
    var C = (w) => {
      Jo(w, {
        get hexes() {
          return n();
        },
        get labelsToShow() {
          return m(y);
        },
        get showElectorateLabels() {
          return f();
        }
      });
    };
    Uo(T, (w) => {
      m(_) && w(C);
    });
  }
  var $ = et(T), g = re($);
  At(g, a), z($);
  var I = et($), Ee = re(I);
  return At(Ee, r), z(I), z(x), yt(() => {
    Qt(x, "data-name", o()), bt(x, "group--hidden", !m(_)), bt(x, "group--map-is-filled", u()), bt(x, "group--has-focuses", i()), ze(x, "transform", m(v));
  }), le(e, x), be({
    get name() {
      return o();
    },
    set name(w = "") {
      o(w), P();
    },
    get svgHexes() {
      return a();
    },
    set svgHexes(w = "") {
      a(w), P();
    },
    get hexes() {
      return n();
    },
    set hexes(w = []) {
      n(w), P();
    },
    get svgOutline() {
      return r();
    },
    set svgOutline(w = "") {
      r(w), P();
    },
    get offset() {
      return s();
    },
    set offset(w = [1 / 0, 1 / 0]) {
      s(w), P();
    },
    get isFilled() {
      return u();
    },
    set isFilled(w = !1) {
      u(w), P();
    },
    get focuses() {
      return d();
    },
    set focuses(w) {
      d(w), P();
    },
    get hasAnyFocuses() {
      return i();
    },
    set hasAnyFocuses(w = !1) {
      i(w), P();
    },
    get labelsToShow() {
      return l();
    },
    set labelsToShow(w = {}) {
      l(w), P();
    },
    get showElectorateLabels() {
      return f();
    },
    set showElectorateLabels(w) {
      f(w), P();
    },
    get showFocusedElectorateLabels() {
      return c();
    },
    set showFocusedElectorateLabels(w) {
      c(w), P();
    }
  });
}
De(
  Qo,
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
var Mn = /* @__PURE__ */ mt('<div class="label svelte-lh1lcp"> </div>'), kn = /* @__PURE__ */ mt('<div class="labels svelte-lh1lcp" aria-hidden="true"></div>');
const Bn = {
  hash: "svelte-lh1lcp",
  code: '.labels.svelte-lh1lcp {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;}.label.svelte-lh1lcp {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px white;paint-order:stroke fill;}'
};
function Zo(e, t) {
  Ae(t, !0), Xe(e, Bn);
  let o = A(t, "labels", 7);
  var a = kn();
  return Jt(a, 21, o, Xt, (n, r) => {
    var s = rn(), u = Ha(s);
    dn(u, () => m(r), (d) => {
      var i = Mn(), l = re(i, !0);
      z(i), yt(
        (f) => {
          ze(i, "left", m(r).left + "%"), ze(i, "top", m(r).top + "%"), ze(i, "width", m(r).width + "%"), ze(i, "margin-left", f), zo(l, m(r).name);
        },
        [
          () => Math.round(0 - m(r).width / 2) + "%"
        ]
      ), _n(3, i, () => Rn, () => ({ duration: 1e3 })), le(d, i);
    }), le(n, s);
  }), z(a), le(e, a), be({
    get labels() {
      return o();
    },
    set labels(n) {
      o(n), P();
    }
  });
}
De(Zo, { labels: {} }, [], [], !0);
var Fn = ({ target: e, clientX: t, clientY: o }, a) => {
  var r;
  const n = (r = e == null ? void 0 : e.dataset) == null ? void 0 : r.code;
  !n || !a() || a()({ code: n, clientX: t, clientY: o });
}, Hn = /* @__PURE__ */ mt('<div class="hexmap svelte-emh312"><svg></svg> <!></div>');
const Dn = {
  hash: "svelte-emh312",
  code: ".hexmap.svelte-emh312 {position:relative;}"
};
function ea(e, t) {
  Ae(t, !0), Xe(e, Dn);
  let o = A(t, "config", 23, () => ({})), a = A(t, "layout", 23, () => ({})), n = A(t, "allocations", 23, () => ({})), r = A(t, "focuses", 23, () => ({})), s = A(t, "labelsToShow", 23, () => ({})), u = A(t, "showStateLabels", 7, !1), d = A(t, "showElectorateLabels", 7, !1), i = A(t, "showFocusedElectorateLabels", 7, !1), l = A(t, "onClick", 7, () => {
  }), f = mo(void 0), c = /* @__PURE__ */ ge(() => Object.values(r()).some(Boolean)), h = /* @__PURE__ */ ge(() => {
    const g = Object.values(n());
    return g.length !== 0 && g.every(Boolean);
  });
  const p = a().viewbox, v = { easing: Ln, duration: 1100 };
  let _ = new Re(p[0], v), y = new Re(p[1], v), x = new Re(p[2], v), R = new Re(p[3], v);
  Rt(() => {
    const [g, I, Ee, w] = a().viewbox;
    _.set(g), y.set(I), x.set(Ee), R.set(w);
  }), Rt(() => {
    const g = n(), I = r();
    if (!m(f))
      return;
    m(f).querySelectorAll("polygon.hex").forEach((w) => {
      if (!(w instanceof SVGPolygonElement))
        return;
      const We = w.dataset.code;
      if (!We)
        return;
      const wt = g[We] || null;
      w.dataset.allocation = wt;
      const Pt = m(c) ? I[We] || !1 : !0;
      w.dataset.focused = Pt;
    });
  });
  var S = Hn();
  S.__click = [Fn, l];
  var T = re(S);
  Jt(T, 21, () => o().groups, Xt, (g, I) => {
    Qo(g, Pn(() => m(I), {
      get offset() {
        return a().positions[m(I).name];
      },
      get isFilled() {
        return m(h);
      },
      get focuses() {
        return r();
      },
      get hasAnyFocuses() {
        return m(c);
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
  }), z(T), yn(T, (g) => M(f, g), () => m(f));
  var C = et(T, 2);
  {
    var $ = (g) => {
      Zo(g, {
        get labels() {
          return a().labels;
        }
      });
    };
    Uo(C, (g) => {
      u() && g($);
    });
  }
  return z(S), yt((g) => Qt(T, "viewBox", g), [
    () => [
      _.current,
      y.current,
      x.current,
      R.current
    ].join(" ")
  ]), le(e, S), be({
    get config() {
      return o();
    },
    set config(g = {}) {
      o(g), P();
    },
    get layout() {
      return a();
    },
    set layout(g = {}) {
      a(g), P();
    },
    get allocations() {
      return n();
    },
    set allocations(g = {}) {
      n(g), P();
    },
    get focuses() {
      return r();
    },
    set focuses(g = {}) {
      r(g), P();
    },
    get labelsToShow() {
      return s();
    },
    set labelsToShow(g = {}) {
      s(g), P();
    },
    get showStateLabels() {
      return u();
    },
    set showStateLabels(g = !1) {
      u(g), P();
    },
    get showElectorateLabels() {
      return d();
    },
    set showElectorateLabels(g = !1) {
      d(g), P();
    },
    get showFocusedElectorateLabels() {
      return i();
    },
    set showFocusedElectorateLabels(g = !1) {
      i(g), P();
    },
    get onClick() {
      return l();
    },
    set onClick(g = () => {
    }) {
      l(g), P();
    }
  });
}
nn(["click"]);
De(
  ea,
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
var Wn = /* @__PURE__ */ mt('<div class="style-root svelte-1y00iv0"><!></div>');
const Gn = {
  hash: "svelte-1y00iv0",
  code: ".style-root.svelte-1y00iv0 * {box-sizing:border-box;}.style-root.svelte-1y00iv0 {font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-null: var(--c-white);--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-NXT: var(--c-pty-xxxxxx);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--c-empty-border: #cdcbcb;}"
};
function ta(e, t) {
  Ae(t, !0), Xe(e, Gn);
  let o = A(t, "allocations", 23, () => ({})), a = A(t, "children", 7);
  var n = Wn(), r = re(n);
  return hn(r, () => a() ?? ye), z(n), le(e, n), be({
    get allocations() {
      return o();
    },
    set allocations(s = {}) {
      o(s), P();
    },
    get children() {
      return a();
    },
    set children(s) {
      a(s), P();
    }
  });
}
De(ta, { allocations: {}, children: {} }, [], [], !0);
const zn = { viewbox: [-50, 0, 480, 500], positions: { ACT: [9, 10], NSW: [4, 6], NT: [2.5, 5], QLD: [5, 0], SA: [2, 6], TAS: [7, 16.75, !0], VIC: [4, 10], WA: [0, 6] }, labels: [{ left: 30, top: 27, width: 8, name: "NT" }, { left: 68, top: 17, width: 8, name: "QLD" }, { left: 64, top: 40, width: 8, name: "NSW" }, { left: 71, top: 55.5, width: 8, name: "ACT" }, { left: 59, top: 65, width: 8, name: "VIC" }, { left: 59, top: 85.5, width: 8, name: "TAS" }, { left: 30, top: 46, width: 8, name: "SA" }, { left: 19, top: 46, width: 8, name: "WA" }] }, Kn = {
  COUNTRY: zn
}, Yn = 291, Un = 200, qn = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='21' class='hex' data-code='BEAN' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='2' class='hex' data-code='CANB' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='26' class='hex' data-code='FENN' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='ACT' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"id":21,"code":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"id":2,"code":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"id":26,"code":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='83' class='hex' data-code='BANK' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='20' class='hex' data-code='BART' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='84' class='hex' data-code='BENN' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='70' class='hex' data-code='BERO' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='0' class='hex' data-code='BLAX' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='71' class='hex' data-code='BRFD' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='135' class='hex' data-code='CALA' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='3' class='hex' data-code='CHIF' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='72' class='hex' data-code='COOK' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='143' class='hex' data-code='COWP' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='5' class='hex' data-code='CUNN' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='49' class='hex' data-code='DOBE' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='51' class='hex' data-code='EMON' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='75' class='hex' data-code='FARR' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='6' class='hex' data-code='FOWL' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='52' class='hex' data-code='GILM' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='11' class='hex' data-code='GRAY' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='53' class='hex' data-code='GREE' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='87' class='hex' data-code='HUGH' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='78' class='hex' data-code='HUME' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='55' class='hex' data-code='HUNT' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='34' class='hex' data-code='KSMI' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='107' class='hex' data-code='LIND' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='137' class='hex' data-code='LYNE' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='36' class='hex' data-code='MACA' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='79' class='hex' data-code='MACK' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='59' class='hex' data-code='MACQ' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='40' class='hex' data-code='MCMA' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='80' class='hex' data-code='MITC' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='139' class='hex' data-code='NENG' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='13' class='hex' data-code='NEWC' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='91' class='hex' data-code='NSYD' points='291,80 291,96 277.1,104 263.3,96 263.3,80 277.1,72' /><polygon data-id='144' class='hex' data-code='PAGE' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='141' class='hex' data-code='PARK' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='62' class='hex' data-code='PARR' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='63' class='hex' data-code='PATE' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='108' class='hex' data-code='REID' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='65' class='hex' data-code='RICH' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='142' class='hex' data-code='RIVE' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='109' class='hex' data-code='ROBE' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='66' class='hex' data-code='SHOR' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='16' class='hex' data-code='SYDN' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='146' class='hex' data-code='WARR' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='17' class='hex' data-code='WATS' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='111' class='hex' data-code='WENT' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='68' class='hex' data-code='WERR' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='43' class='hex' data-code='WHIT' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='NSW' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,291,80,291,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Banks","coord":[7,4],"id":83,"code":"BANK","coordPx":[207.8,112]},{"name":"Barton","coord":[7,5],"id":20,"code":"BART","coordPx":[221.7,136]},{"name":"Bennelong","coord":[6,1],"id":84,"code":"BENN","coordPx":[194,40]},{"name":"Berowra","coord":[4,1],"id":70,"code":"BERO","coordPx":[138.6,40]},{"name":"Blaxland","coord":[7,3],"id":0,"code":"BLAX","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"id":71,"code":"BRFD","coordPx":[249.4,40]},{"name":"Calare","coord":[0,1],"id":135,"code":"CALA","coordPx":[27.7,40]},{"name":"Chifley","coord":[5,2],"id":3,"code":"CHIF","coordPx":[152.4,64]},{"name":"Cook","coord":[5,3],"id":72,"code":"COOK","coordPx":[166.3,88]},{"name":"Cowper","coord":[1,0],"id":143,"code":"COWP","coordPx":[41.6,16]},{"name":"Cunningham","coord":[3,3],"id":5,"code":"CUNN","coordPx":[110.9,88]},{"name":"Dobell","coord":[6,0],"id":49,"code":"DOBE","coordPx":[180.1,16]},{"name":"Eden-Monaro","coord":[2,2],"id":51,"code":"EMON","coordPx":[69.3,64]},{"name":"Farrer","coord":[0,3],"id":75,"code":"FARR","coordPx":[27.7,88]},{"name":"Fowler","coord":[6,2],"id":6,"code":"FOWL","coordPx":[180.1,64]},{"name":"Gilmore","coord":[2,3],"id":52,"code":"GILM","coordPx":[83.1,88]},{"name":"Grayndler","coord":[8,3],"id":11,"code":"GRAY","coordPx":[249.4,88]},{"name":"Greenway","coord":[7,2],"id":53,"code":"GREE","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"id":87,"code":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"id":78,"code":"HUME","coordPx":[55.4,88]},{"name":"Hunter","coord":[8,0],"id":55,"code":"HUNT","coordPx":[235.6,16]},{"name":"Kingsford Smith","coord":[8,6],"id":34,"code":"KSMI","coordPx":[235.6,160]},{"name":"Lindsay","coord":[3,0],"id":107,"code":"LIND","coordPx":[97,16]},{"name":"Lyne","coord":[2,0],"id":137,"code":"LYNE","coordPx":[69.3,16]},{"name":"Macarthur","coord":[4,2],"id":36,"code":"MACA","coordPx":[124.7,64]},{"name":"Mackellar","coord":[5,1],"id":79,"code":"MACK","coordPx":[166.3,40]},{"name":"Macquarie","coord":[4,0],"id":59,"code":"MACQ","coordPx":[124.7,16]},{"name":"McMahon","coord":[3,1],"id":40,"code":"MCMA","coordPx":[110.9,40]},{"name":"Mitchell","coord":[7,1],"id":80,"code":"MITC","coordPx":[221.7,40]},{"name":"New England","coord":[1,2],"id":139,"code":"NENG","coordPx":[41.6,64]},{"name":"Newcastle","coord":[9,1],"id":13,"code":"NEWC","coordPx":[277.1,40]},{"name":"North Sydney","coord":[9,3],"id":91,"code":"NSYD","coordPx":[277.1,88]},{"name":"Page","coord":[1,1],"id":144,"code":"PAGE","coordPx":[55.4,40]},{"name":"Parkes","coord":[0,0],"id":141,"code":"PARK","coordPx":[13.9,16]},{"name":"Parramatta","coord":[6,3],"id":62,"code":"PARR","coordPx":[194,88]},{"name":"Paterson","coord":[9,0],"id":63,"code":"PATE","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"id":108,"code":"REID","coordPx":[235.6,64]},{"name":"Richmond","coord":[2,1],"id":65,"code":"RICH","coordPx":[83.1,40]},{"name":"Riverina","coord":[0,2],"id":142,"code":"RIVE","coordPx":[13.9,64]},{"name":"Robertson","coord":[5,0],"id":109,"code":"ROBE","coordPx":[152.4,16]},{"name":"Shortland","coord":[7,0],"id":66,"code":"SHOR","coordPx":[207.8,16]},{"name":"Sydney","coord":[9,4],"id":16,"code":"SYDN","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"id":146,"code":"WARR","coordPx":[263.3,64]},{"name":"Watson","coord":[8,4],"id":17,"code":"WATS","coordPx":[235.6,112]},{"name":"Wentworth","coord":[8,5],"id":111,"code":"WENT","coordPx":[249.4,136]},{"name":"Werriwa","coord":[4,3],"id":68,"code":"WERR","coordPx":[138.6,88]},{"name":"Whitlam","coord":[3,2],"id":43,"code":"WHIT","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='57' class='hex' data-code='LING' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='67' class='hex' data-code='SOLO' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='NT' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"id":57,"code":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"id":67,"code":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='45' class='hex' data-code='BLAI' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='124' class='hex' data-code='BONN' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='125' class='hex' data-code='BOWM' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='131' class='hex' data-code='BRIS' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='112' class='hex' data-code='CAPR' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' /><polygon data-id='113' class='hex' data-code='DAWS' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='132' class='hex' data-code='DICK' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='114' class='hex' data-code='FADD' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='115' class='hex' data-code='FAIR' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='116' class='hex' data-code='FISH' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='126' class='hex' data-code='FLYN' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='127' class='hex' data-code='FORD' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='54' class='hex' data-code='GRIF' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='117' class='hex' data-code='GROO' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='128' class='hex' data-code='HERB' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='118' class='hex' data-code='HINK' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='148' class='hex' data-code='KENN' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='133' class='hex' data-code='LEIC' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='56' class='hex' data-code='LILL' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='134' class='hex' data-code='LONG' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='119' class='hex' data-code='MARA' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='120' class='hex' data-code='MCPH' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='121' class='hex' data-code='MONC' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='61' class='hex' data-code='MORE' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='41' class='hex' data-code='OXLE' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='129' class='hex' data-code='PETR' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='42' class='hex' data-code='RANK' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='130' class='hex' data-code='RYAN' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='122' class='hex' data-code='WBAY' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='123' class='hex' data-code='WRIG' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='QLD' points='13.9,128,27.7,120,27.7,104,41.6,96,41.6,80,55.4,72,69.3,80,83.1,72,83.1,56,97,48,97,32,110.9,24,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,221.7,152,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,110.9,152,97,144,83.1,152,69.3,144,55.4,152,41.6,144,27.7,152,13.9,144,13.9,128' />","hexes":[{"name":"Blair","coord":[2,5],"id":45,"code":"BLAI","coordPx":[83.1,136]},{"name":"Bonner","coord":[6,2],"id":124,"code":"BONN","coordPx":[180.1,64]},{"name":"Bowman","coord":[7,4],"id":125,"code":"BOWM","coordPx":[207.8,112]},{"name":"Brisbane","coord":[5,3],"id":131,"code":"BRIS","coordPx":[166.3,88]},{"name":"Capricornia","coord":[3,2],"id":112,"code":"CAPR","coordPx":[97,64]},{"name":"Dawson","coord":[3,1],"id":113,"code":"DAWS","coordPx":[110.9,40]},{"name":"Dickson","coord":[3,3],"id":132,"code":"DICK","coordPx":[110.9,88]},{"name":"Fadden","coord":[6,4],"id":114,"code":"FADD","coordPx":[180.1,112]},{"name":"Fairfax","coord":[5,1],"id":115,"code":"FAIR","coordPx":[166.3,40]},{"name":"Fisher","coord":[5,2],"id":116,"code":"FISH","coordPx":[152.4,64]},{"name":"Flynn","coord":[2,3],"id":126,"code":"FLYN","coordPx":[83.1,88]},{"name":"Forde","coord":[5,5],"id":127,"code":"FORD","coordPx":[166.3,136]},{"name":"Griffith","coord":[5,4],"id":54,"code":"GRIF","coordPx":[152.4,112]},{"name":"Groom","coord":[1,5],"id":117,"code":"GROO","coordPx":[55.4,136]},{"name":"Herbert","coord":[4,1],"id":128,"code":"HERB","coordPx":[138.6,40]},{"name":"Hinkler","coord":[1,3],"id":118,"code":"HINK","coordPx":[55.4,88]},{"name":"Kennedy","coord":[1,4],"id":148,"code":"KENN","coordPx":[41.6,112]},{"name":"Leichhardt","coord":[5,0],"id":133,"code":"LEIC","coordPx":[152.4,16]},{"name":"Lilley","coord":[6,3],"id":56,"code":"LILL","coordPx":[194,88]},{"name":"Longman","coord":[4,2],"id":134,"code":"LONG","coordPx":[124.7,64]},{"name":"Maranoa","coord":[0,5],"id":119,"code":"MARA","coordPx":[27.7,136]},{"name":"McPherson","coord":[7,5],"id":120,"code":"MCPH","coordPx":[221.7,136]},{"name":"Moncrieff","coord":[6,5],"id":121,"code":"MONC","coordPx":[194,136]},{"name":"Moreton","coord":[4,4],"id":61,"code":"MORE","coordPx":[124.7,112]},{"name":"Oxley","coord":[3,5],"id":41,"code":"OXLE","coordPx":[110.9,136]},{"name":"Petrie","coord":[4,3],"id":129,"code":"PETR","coordPx":[138.6,88]},{"name":"Rankin","coord":[3,4],"id":42,"code":"RANK","coordPx":[97,112]},{"name":"Ryan","coord":[4,5],"id":130,"code":"RYAN","coordPx":[138.6,136]},{"name":"Wide Bay","coord":[4,0],"id":122,"code":"WBAY","coordPx":[124.7,16]},{"name":"Wright","coord":[2,4],"id":123,"code":"WRIG","coordPx":[69.3,112]}]},{"name":"SA","svgHexes":"<polygon data-id='18' class='hex' data-code='ADEL' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='69' class='hex' data-code='BARK' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='97' class='hex' data-code='BOOT' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='77' class='hex' data-code='GREY' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='29' class='hex' data-code='HIND' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='35' class='hex' data-code='KING' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='38' class='hex' data-code='MAKI' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='149' class='hex' data-code='MAYO' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='15' class='hex' data-code='SPEN' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='93' class='hex' data-code='STUR' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='SA' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"id":18,"code":"ADEL","coordPx":[41.6,112]},{"name":"Barker","coord":[0,1],"id":69,"code":"BARK","coordPx":[27.7,40]},{"name":"Boothby","coord":[1,3],"id":97,"code":"BOOT","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"id":77,"code":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"id":29,"code":"HIND","coordPx":[27.7,88]},{"name":"Kingston","coord":[1,5],"id":35,"code":"KING","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"id":38,"code":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"id":149,"code":"MAYO","coordPx":[41.6,160]},{"name":"Spence","coord":[1,1],"id":15,"code":"SPEN","coordPx":[55.4,40]},{"name":"Sturt","coord":[0,5],"id":93,"code":"STUR","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='96' class='hex' data-code='BASS' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='98' class='hex' data-code='BRAD' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='145' class='hex' data-code='CLAR' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='7' class='hex' data-code='FRAN' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='58' class='hex' data-code='LYON' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='TAS' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"id":96,"code":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"id":98,"code":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"id":145,"code":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"id":7,"code":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"id":58,"code":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='82' class='hex' data-code='ASTO' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='19' class='hex' data-code='BALL' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='22' class='hex' data-code='BEND' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='24' class='hex' data-code='BRUC' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='1' class='hex' data-code='CALW' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='99' class='hex' data-code='CASE' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='100' class='hex' data-code='CHIS' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='4' class='hex' data-code='COOP' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='47' class='hex' data-code='CORA' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='25' class='hex' data-code='CORI' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='101' class='hex' data-code='DEAK' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='50' class='hex' data-code='DUNK' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='102' class='hex' data-code='FLIN' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='8' class='hex' data-code='FRAS' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='9' class='hex' data-code='GELL' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='136' class='hex' data-code='GIPP' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='86' class='hex' data-code='GOLD' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='10' class='hex' data-code='GORT' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='28' class='hex' data-code='HAWK' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='104' class='hex' data-code='HIGG' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='30' class='hex' data-code='HOLT' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='31' class='hex' data-code='HOTH' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='147' class='hex' data-code='INDI' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='32' class='hex' data-code='ISAA' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='33' class='hex' data-code='JAGA' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='105' class='hex' data-code='KOOY' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='106' class='hex' data-code='LTRO' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='12' class='hex' data-code='LALO' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='37' class='hex' data-code='MACN' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='138' class='hex' data-code='MALL' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='39' class='hex' data-code='MARI' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='60' class='hex' data-code='MCEW' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='150' class='hex' data-code='MELB' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='88' class='hex' data-code='MENZ' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='89' class='hex' data-code='MONA' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='140' class='hex' data-code='NICH' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='14' class='hex' data-code='SCUL' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='95' class='hex' data-code='WANN' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='44' class='hex' data-code='WILL' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='VIC' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,110.9,152,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"id":82,"code":"ASTO","coordPx":[152.4,64]},{"name":"Ballarat","coord":[1,4],"id":19,"code":"BALL","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"id":22,"code":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"id":24,"code":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"id":1,"code":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"id":99,"code":"CASE","coordPx":[194,88]},{"name":"Chisholm","coord":[3,3],"id":100,"code":"CHIS","coordPx":[110.9,88]},{"name":"Cooper","coord":[4,2],"id":4,"code":"COOP","coordPx":[124.7,64]},{"name":"Corangamite","coord":[1,5],"id":47,"code":"CORA","coordPx":[55.4,136]},{"name":"Corio","coord":[0,2],"id":25,"code":"CORI","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"id":101,"code":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"id":50,"code":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"id":102,"code":"FLIN","coordPx":[194,136]},{"name":"Fraser","coord":[2,2],"id":8,"code":"FRAS","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"id":9,"code":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"id":136,"code":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"id":86,"code":"GOLD","coordPx":[138.6,136]},{"name":"Gorton","coord":[1,1],"id":10,"code":"GORT","coordPx":[55.4,40]},{"name":"Hawke","coord":[1,3],"id":28,"code":"HAWK","coordPx":[55.4,88]},{"name":"Higgins","coord":[4,4],"id":104,"code":"HIGG","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"id":30,"code":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"id":31,"code":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"id":147,"code":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"id":32,"code":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"id":33,"code":"JAGA","coordPx":[83.1,40]},{"name":"Kooyong","coord":[2,3],"id":105,"code":"KOOY","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"id":106,"code":"LTRO","coordPx":[207.8,112]},{"name":"Lalor","coord":[1,2],"id":12,"code":"LALO","coordPx":[41.6,64]},{"name":"Macnamara","coord":[3,5],"id":37,"code":"MACN","coordPx":[110.9,136]},{"name":"Mallee","coord":[0,0],"id":138,"code":"MALL","coordPx":[13.9,16]},{"name":"Maribyrnong","coord":[2,4],"id":39,"code":"MARI","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"id":60,"code":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"id":150,"code":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"id":88,"code":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"id":89,"code":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"id":140,"code":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"id":14,"code":"SCUL","coordPx":[97,16]},{"name":"Wannon","coord":[0,3],"id":95,"code":"WANN","coordPx":[27.7,88]},{"name":"Wills","coord":[3,2],"id":44,"code":"WILL","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='74' class='hex' data-code='DURA' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='92' class='hex' data-code='PEAR' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='90' class='hex' data-code='MOOR' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='103' class='hex' data-code='HASL' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='73' class='hex' data-code='CURT' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='48' class='hex' data-code='COWA' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='27' class='hex' data-code='FREM' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='64' class='hex' data-code='PERT' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='110' class='hex' data-code='SWAN' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='23' class='hex' data-code='BRAN' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='94' class='hex' data-code='TANG' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='85' class='hex' data-code='CANN' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='46' class='hex' data-code='BURT' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='76' class='hex' data-code='FORR' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='81' class='hex' data-code='OCON' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' data-code='WA' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,27.7,168,27.7,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"id":74,"code":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"id":92,"code":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"id":90,"code":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"id":103,"code":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"id":73,"code":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"id":48,"code":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"id":27,"code":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"id":64,"code":"PERT","coordPx":[41.6,112]},{"name":"Swan","coord":[2,4],"id":110,"code":"SWAN","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"id":23,"code":"BRAN","coordPx":[27.7,136]},{"name":"Tangney","coord":[1,5],"id":94,"code":"TANG","coordPx":[55.4,136]},{"name":"Canning","coord":[1,6],"id":85,"code":"CANN","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"id":46,"code":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"id":76,"code":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"id":81,"code":"OCON","coordPx":[55.4,184]}]}]`), jn = {
  svgWidth: Yn,
  svgHeight: Un,
  groups: qn
};
function Vn(e, t) {
  Ae(t, !0);
  let o = A(t, "allocations", 23, () => ({})), a = A(t, "showStateLabels", 7, !1), n = A(t, "showElectorateLabels", 7, !1), r = A(t, "onClick", 7, () => {
  });
  return ta(e, {
    children: (s, u) => {
      ea(s, {
        config: jn,
        get layout() {
          return Kn.COUNTRY;
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
  }), be({
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
customElements.define("abcnews-hexmap", De(
  Vn,
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
  Vn as default
};
