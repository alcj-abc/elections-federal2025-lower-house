var Mn = Object.defineProperty;
var Eo = (e) => {
  throw TypeError(e);
};
var kn = (e, t, o) => t in e ? Mn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var j = (e, t, o) => kn(e, typeof t != "symbol" ? t + "" : t, o), Kt = (e, t, o) => t.has(e) || Eo("Cannot " + o);
var A = (e, t, o) => (Kt(e, t, "read from private field"), o ? o.call(e) : t.get(e)), ee = (e, t, o) => t.has(e) ? Eo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), Te = (e, t, o, n) => (Kt(e, t, "write to private field"), n ? n.call(e, o) : t.set(e, o), o), Lo = (e, t, o) => (Kt(e, t, "access private method"), o);
const In = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(In);
const ro = 1, ao = 2, Ho = 4, Bn = 8, Fn = 16, Hn = 1, Dn = 4, Wn = 8, Gn = 16, Kn = 4, Un = 2, Do = "[", so = "[!", io = "]", qe = {}, B = Symbol(), jt = !1, oe = 2, Wo = 4, Mt = 8, kt = 16, Pe = 32, et = 64, Pt = 128, z = 256, At = 512, H = 1024, Ae = 2048, tt = 4096, _e = 8192, It = 16384, Go = 32768, ft = 65536, Yn = 1 << 19, Ko = 1 << 20, Ve = Symbol("$state"), lo = Symbol("legacy props"), jn = Symbol("");
var co = Array.isArray, qn = Array.prototype.indexOf, uo = Array.from, Et = Object.keys, at = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, Vn = Object.getOwnPropertyDescriptors, zn = Object.prototype, Xn = Array.prototype, Uo = Object.getPrototypeOf;
function Ue(e) {
  return typeof e == "function";
}
const K = () => {
};
function Jn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let Lt = !1, qt = [];
function Yo() {
  Lt = !1;
  const e = qt.slice();
  qt = [], Jn(e);
}
function Bt(e) {
  Lt || (Lt = !0, queueMicrotask(Yo)), qt.push(e);
}
function Qn() {
  Lt && Yo();
}
function jo(e) {
  return e === this.v;
}
function qo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Zn(e, t) {
  return e !== t;
}
function fo(e) {
  return !qo(e, this.v);
}
function er(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function tr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function or(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function nr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function rr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ar(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function sr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ir() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function lr() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function dr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let cr = !1;
function D(e, t) {
  var o = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: jo,
    rv: 0,
    wv: 0
  };
  return o;
}
function he(e) {
  return /* @__PURE__ */ ur(D(e));
}
// @__NO_SIDE_EFFECTS__
function Ft(e, t = !1) {
  const o = D(e);
  return t || (o.equals = fo), o;
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  return S !== null && !se && S.f & oe && (ie === null ? gr([e]) : ie.push(e)), e;
}
function $(e, t) {
  return S !== null && !se && vn() && S.f & (oe | kt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ie === null || !ie.includes(e)) && dr(), Vt(e, t);
}
function Vt(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = nn(), Vo(e, Ae), O !== null && O.f & H && !(O.f & (Pe | et)) && (ve === null ? mr([e]) : ve.push(e))), t;
}
function Vo(e, t) {
  var o = e.reactions;
  if (o !== null)
    for (var n = o.length, r = 0; r < n; r++) {
      var a = o[r], s = a.f;
      s & Ae || (ue(a, t), s & (H | z) && (s & oe ? Vo(
        /** @type {Derived} */
        a,
        tt
      ) : Wt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  var t = oe | Ae, o = S !== null && S.f & oe ? (
    /** @type {Derived} */
    S
  ) : null;
  return O === null || o !== null && o.f & z ? t |= z : O.f |= Ko, {
    ctx: W,
    deps: null,
    effects: null,
    equals: jo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: o ?? O
  };
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
  const t = /* @__PURE__ */ we(e);
  return t.equals = fo, t;
}
function zo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var o = 0; o < t.length; o += 1)
      ne(
        /** @type {Effect} */
        t[o]
      );
  }
}
function hr(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & oe))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function vr(e) {
  var t, o = O;
  ce(hr(e));
  try {
    zo(e), t = an(e);
  } finally {
    ce(o);
  }
  return t;
}
function Xo(e) {
  var t = vr(e), o = (Oe || e.f & z) && e.deps !== null ? tt : H;
  ue(e, o), e.equals(t) || (e.v = t, e.wv = nn());
}
function Ht(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let R = !1;
function me(e) {
  R = e;
}
let C;
function X(e) {
  if (e === null)
    throw Ht(), qe;
  return C = e;
}
function ke() {
  return X(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ee(C)
  );
}
function U(e) {
  if (R) {
    if (/* @__PURE__ */ Ee(C) !== null)
      throw Ht(), qe;
    C = e;
  }
}
function zt() {
  for (var e = 0, t = C; ; ) {
    if (t.nodeType === 8) {
      var o = (
        /** @type {Comment} */
        t.data
      );
      if (o === io) {
        if (e === 0) return t;
        e -= 1;
      } else (o === Do || o === so) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(t)
    );
    t.remove(), t = n;
  }
}
function ge(e, t = null, o) {
  if (typeof e != "object" || e === null || Ve in e)
    return e;
  const n = Uo(e);
  if (n !== zn && n !== Xn)
    return e;
  var r = /* @__PURE__ */ new Map(), a = co(e), s = D(0);
  a && r.set("length", D(
    /** @type {any[]} */
    e.length
  ));
  var l;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, i, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && sr();
        var f = r.get(i);
        return f === void 0 ? (f = D(d.value), r.set(i, f)) : $(f, ge(d.value, l)), !0;
      },
      deleteProperty(c, i) {
        var d = r.get(i);
        if (d === void 0)
          i in c && r.set(i, D(B));
        else {
          if (a && typeof i == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), u = Number(i);
            Number.isInteger(u) && u < f.v && $(f, u);
          }
          $(d, B), Co(s);
        }
        return !0;
      },
      get(c, i, d) {
        var h;
        if (i === Ve)
          return e;
        var f = r.get(i), u = i in c;
        if (f === void 0 && (!u || (h = Ne(c, i)) != null && h.writable) && (f = D(ge(u ? c[i] : B, l)), r.set(i, f)), f !== void 0) {
          var v = g(f);
          return v === B ? void 0 : v;
        }
        return Reflect.get(c, i, d);
      },
      getOwnPropertyDescriptor(c, i) {
        var d = Reflect.getOwnPropertyDescriptor(c, i);
        if (d && "value" in d) {
          var f = r.get(i);
          f && (d.value = g(f));
        } else if (d === void 0) {
          var u = r.get(i), v = u == null ? void 0 : u.v;
          if (u !== void 0 && v !== B)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return d;
      },
      has(c, i) {
        var v;
        if (i === Ve)
          return !0;
        var d = r.get(i), f = d !== void 0 && d.v !== B || Reflect.has(c, i);
        if (d !== void 0 || O !== null && (!f || (v = Ne(c, i)) != null && v.writable)) {
          d === void 0 && (d = D(f ? ge(c[i], l) : B), r.set(i, d));
          var u = g(d);
          if (u === B)
            return !1;
        }
        return f;
      },
      set(c, i, d, f) {
        var w;
        var u = r.get(i), v = i in c;
        if (a && i === "length")
          for (var h = d; h < /** @type {Source<number>} */
          u.v; h += 1) {
            var p = r.get(h + "");
            p !== void 0 ? $(p, B) : h in c && (p = D(B), r.set(h + "", p));
          }
        u === void 0 ? (!v || (w = Ne(c, i)) != null && w.writable) && (u = D(void 0), $(u, ge(d, l)), r.set(i, u)) : (v = u.v !== B, $(u, ge(d, l)));
        var m = Reflect.getOwnPropertyDescriptor(c, i);
        if (m != null && m.set && m.set.call(f, d), !v) {
          if (a && typeof i == "string") {
            var L = (
              /** @type {Source<number>} */
              r.get("length")
            ), E = Number(i);
            Number.isInteger(E) && E >= L.v && $(L, E + 1);
          }
          Co(s);
        }
        return !0;
      },
      ownKeys(c) {
        g(s);
        var i = Reflect.ownKeys(c).filter((u) => {
          var v = r.get(u);
          return v === void 0 || v.v !== B;
        });
        for (var [d, f] of r)
          f.v !== B && !(d in c) && i.push(d);
        return i;
      },
      setPrototypeOf() {
        ir();
      }
    }
  );
}
function Co(e, t = 1) {
  $(e, e.v + t);
}
var Oo, Jo, Qo, Zo;
function Xt() {
  if (Oo === void 0) {
    Oo = window, Jo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Qo = Ne(t, "firstChild").get, Zo = Ne(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ze(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function V(e) {
  return Qo.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return Zo.call(e);
}
function te(e, t) {
  if (!R)
    return /* @__PURE__ */ V(e);
  var o = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ V(C)
  );
  if (o === null)
    o = C.appendChild(Ze());
  else if (t && o.nodeType !== 3) {
    var n = Ze();
    return o == null || o.before(n), X(n), n;
  }
  return X(o), o;
}
function pr(e, t) {
  if (!R) {
    var o = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ V(
        /** @type {Node} */
        e
      )
    );
    return o instanceof Comment && o.data === "" ? /* @__PURE__ */ Ee(o) : o;
  }
  return C;
}
function rt(e, t = 1, o = !1) {
  let n = R ? C : e;
  for (var r; t--; )
    r = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ee(n);
  if (!R)
    return n;
  var a = n == null ? void 0 : n.nodeType;
  if (o && a !== 3) {
    var s = Ze();
    return n === null ? r == null || r.after(s) : n.before(s), X(s), s;
  }
  return X(n), /** @type {TemplateNode} */
  n;
}
function en(e) {
  e.textContent = "";
}
const tn = 0, xr = 1;
let Nt = !1, wt = tn, st = !1, it = null, ze = !1, ho = !1;
function Ro(e) {
  ze = e;
}
function So(e) {
  ho = e;
}
let $e = [], Xe = 0;
let S = null, se = !1;
function de(e) {
  S = e;
}
let O = null;
function ce(e) {
  O = e;
}
let ie = null;
function gr(e) {
  ie = e;
}
let F = null, G = 0, ve = null;
function mr(e) {
  ve = e;
}
let on = 1, Ct = 0, Oe = !1;
function nn() {
  return ++on;
}
function ht(e) {
  var f;
  var t = e.f;
  if (t & Ae)
    return !0;
  if (t & tt) {
    var o = e.deps, n = (t & z) !== 0;
    if (o !== null) {
      var r, a, s = (t & At) !== 0, l = n && O !== null && !Oe, c = o.length;
      if (s || l) {
        var i = (
          /** @type {Derived} */
          e
        ), d = i.parent;
        for (r = 0; r < c; r++)
          a = o[r], (s || !((f = a == null ? void 0 : a.reactions) != null && f.includes(i))) && (a.reactions ?? (a.reactions = [])).push(i);
        s && (i.f ^= At), l && d !== null && !(d.f & z) && (i.f ^= z);
      }
      for (r = 0; r < c; r++)
        if (a = o[r], ht(
          /** @type {Derived} */
          a
        ) && Xo(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || O !== null && !Oe) && ue(e, H);
  }
  return !1;
}
function yr(e, t) {
  for (var o = t; o !== null; ) {
    if (o.f & Pt)
      try {
        o.fn(e);
        return;
      } catch {
        o.f ^= Pt;
      }
    o = o.parent;
  }
  throw Nt = !1, e;
}
function _r(e) {
  return (e.f & It) === 0 && (e.parent === null || (e.parent.f & Pt) === 0);
}
function Dt(e, t, o, n) {
  if (Nt) {
    if (o === null && (Nt = !1), _r(t))
      throw e;
    return;
  }
  o !== null && (Nt = !0);
  {
    yr(e, t);
    return;
  }
}
function rn(e, t, o = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      a.f & oe ? rn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (o ? ue(a, Ae) : a.f & H && ue(a, tt), Wt(
        /** @type {Effect} */
        a
      ));
    }
}
function an(e) {
  var v;
  var t = F, o = G, n = ve, r = S, a = Oe, s = ie, l = W, c = se, i = e.f;
  F = /** @type {null | Value[]} */
  null, G = 0, ve = null, S = i & (Pe | et) ? null : e, Oe = (i & z) !== 0 && (!ze || r === null || c), ie = null, To(e.ctx), se = !1, Ct++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (F !== null) {
      var u;
      if (Ot(e, G), f !== null && G > 0)
        for (f.length = G + F.length, u = 0; u < F.length; u++)
          f[G + u] = F[u];
      else
        e.deps = f = F;
      if (!Oe)
        for (u = G; u < f.length; u++)
          ((v = f[u]).reactions ?? (v.reactions = [])).push(e);
    } else f !== null && G < f.length && (Ot(e, G), f.length = G);
    if (vn() && ve !== null && !se && f !== null && !(e.f & (oe | tt | Ae)))
      for (u = 0; u < /** @type {Source[]} */
      ve.length; u++)
        rn(
          ve[u],
          /** @type {Effect} */
          e
        );
    return r !== null && Ct++, d;
  } finally {
    F = t, G = o, ve = n, S = r, Oe = a, ie = s, To(l), se = c;
  }
}
function Nr(e, t) {
  let o = t.reactions;
  if (o !== null) {
    var n = qn.call(o, e);
    if (n !== -1) {
      var r = o.length - 1;
      r === 0 ? o = t.reactions = null : (o[n] = o[r], o.pop());
    }
  }
  o === null && t.f & oe && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (F === null || !F.includes(t)) && (ue(t, tt), t.f & (z | At) || (t.f ^= At), zo(
    /** @type {Derived} **/
    t
  ), Ot(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ot(e, t) {
  var o = e.deps;
  if (o !== null)
    for (var n = t; n < o.length; n++)
      Nr(e, o[n]);
}
function vo(e) {
  var t = e.f;
  if (!(t & It)) {
    ue(e, H);
    var o = O, n = W;
    O = e;
    try {
      t & kt ? Sr(e) : cn(e), dn(e);
      var r = an(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = on;
      var a = e.deps, s;
      jt && cr && e.f & Ae;
    } catch (l) {
      Dt(l, e, o, n || e.ctx);
    } finally {
      O = o;
    }
  }
}
function sn() {
  if (Xe > 1e3) {
    Xe = 0;
    try {
      nr();
    } catch (e) {
      if (it !== null)
        Dt(e, it, null);
      else
        throw e;
    }
  }
  Xe++;
}
function ln(e) {
  var t = e.length;
  if (t !== 0) {
    sn();
    var o = ze;
    ze = !0;
    try {
      for (var n = 0; n < t; n++) {
        var r = e[n];
        r.f & H || (r.f ^= H);
        var a = Pr(r);
        wr(a);
      }
    } finally {
      ze = o;
    }
  }
}
function wr(e) {
  var t = e.length;
  if (t !== 0)
    for (var o = 0; o < t; o++) {
      var n = e[o];
      if (!(n.f & (It | _e)))
        try {
          ht(n) && (vo(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? un(n) : n.fn = null));
        } catch (r) {
          Dt(r, n, null, n.ctx);
        }
    }
}
function br() {
  if (st = !1, Xe > 1001)
    return;
  const e = $e;
  $e = [], ln(e), st || (Xe = 0, it = null);
}
function Wt(e) {
  wt === tn && (st || (st = !0, queueMicrotask(br))), it = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var o = t.f;
    if (o & (et | Pe)) {
      if (!(o & H)) return;
      t.f ^= H;
    }
  }
  $e.push(t);
}
function Pr(e) {
  var t = [], o = e.first;
  e: for (; o !== null; ) {
    var n = o.f, r = (n & Pe) !== 0, a = r && (n & H) !== 0, s = o.next;
    if (!a && !(n & _e)) {
      if (n & Wo)
        t.push(o);
      else if (r)
        o.f ^= H;
      else {
        var l = S;
        try {
          S = o, ht(o) && vo(o);
        } catch (d) {
          Dt(d, o, null, o.ctx);
        } finally {
          S = l;
        }
      }
      var c = o.first;
      if (c !== null) {
        o = c;
        continue;
      }
    }
    if (s === null) {
      let d = o.parent;
      for (; d !== null; ) {
        if (e === d)
          break e;
        var i = d.next;
        if (i !== null) {
          o = i;
          continue e;
        }
        d = d.parent;
      }
    }
    o = s;
  }
  return t;
}
function N(e) {
  var t = wt, o = $e;
  try {
    sn();
    const r = [];
    wt = xr, $e = r, st = !1, ln(o);
    var n = e == null ? void 0 : e();
    return Qn(), ($e.length > 0 || r.length > 0) && N(), Xe = 0, it = null, n;
  } finally {
    wt = t, $e = o;
  }
}
function g(e) {
  var t = e.f, o = (t & oe) !== 0;
  if (S !== null && !se) {
    ie !== null && ie.includes(e) && lr();
    var n = S.deps;
    e.rv < Ct && (e.rv = Ct, F === null && n !== null && n[G] === e ? G++ : F === null ? F = [e] : (!Oe || !F.includes(e)) && F.push(e));
  } else if (o && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), a = r.parent;
    a !== null && !(a.f & z) && (r.f ^= z);
  }
  return o && (r = /** @type {Derived} */
  e, ht(r) && Xo(r)), e.v;
}
function J(e) {
  var t = se;
  try {
    return se = !0, e();
  } finally {
    se = t;
  }
}
const Ar = -7169;
function ue(e, t) {
  e.f = e.f & Ar | t;
}
function Er(e) {
  O === null && S === null && or(), S !== null && S.f & z && O === null && tr(), ho && er();
}
function Lr(e, t) {
  var o = t.last;
  o === null ? t.last = t.first = e : (o.next = e, e.prev = o, t.last = e);
}
function Ie(e, t, o, n = !0) {
  var r = (e & et) !== 0, a = O, s = {
    ctx: W,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ae,
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
  if (o) {
    var l = ze;
    try {
      Ro(!0), vo(s), s.f |= Go;
    } catch (d) {
      throw ne(s), d;
    } finally {
      Ro(l);
    }
  } else t !== null && Wt(s);
  var c = o && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Ko | Pt)) === 0;
  if (!c && !r && n && (a !== null && Lr(s, a), S !== null && S.f & oe)) {
    var i = (
      /** @type {Derived} */
      S
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return s;
}
function Cr(e) {
  const t = Ie(Mt, null, !1);
  return ue(t, H), t.teardown = e, t;
}
function Rt(e) {
  Er();
  var t = O !== null && (O.f & Pe) !== 0 && W !== null && !W.m;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      W
    );
    (o.e ?? (o.e = [])).push({
      fn: e,
      effect: O,
      reaction: S
    });
  } else {
    var n = vt(e);
    return n;
  }
}
function Or(e) {
  const t = Ie(et, e, !0);
  return () => {
    ne(t);
  };
}
function Rr(e) {
  const t = Ie(et, e, !0);
  return (o = {}) => new Promise((n) => {
    o.outro ? dt(t, () => {
      ne(t), n(void 0);
    }) : (ne(t), n(void 0));
  });
}
function vt(e) {
  return Ie(Wo, e, !1);
}
function po(e) {
  return Ie(Mt, e, !0);
}
function lt(e, t = [], o = we) {
  const n = t.map(o);
  return ot(() => e(...n.map(g)));
}
function ot(e, t = 0) {
  return Ie(Mt | kt | t, e, !0);
}
function Re(e, t = !0) {
  return Ie(Mt | Pe, e, !0, t);
}
function dn(e) {
  var t = e.teardown;
  if (t !== null) {
    const o = ho, n = S;
    So(!0), de(null);
    try {
      t.call(null);
    } finally {
      So(o), de(n);
    }
  }
}
function cn(e, t = !1) {
  var o = e.first;
  for (e.first = e.last = null; o !== null; ) {
    var n = o.next;
    ne(o, t), o = n;
  }
}
function Sr(e) {
  for (var t = e.first; t !== null; ) {
    var o = t.next;
    t.f & Pe || ne(t), t = o;
  }
}
function ne(e, t = !0) {
  var o = !1;
  if ((t || e.f & Yn) && e.nodes_start !== null) {
    for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
      var a = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ee(n)
      );
      n.remove(), n = a;
    }
    o = !0;
  }
  cn(e, t && !o), Ot(e, 0), ue(e, It);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  dn(e);
  var l = e.parent;
  l !== null && l.first !== null && un(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function un(e) {
  var t = e.parent, o = e.prev, n = e.next;
  o !== null && (o.next = n), n !== null && (n.prev = o), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = o));
}
function dt(e, t) {
  var o = [];
  xo(e, o, !0), fn(o, () => {
    ne(e), t && t();
  });
}
function fn(e, t) {
  var o = e.length;
  if (o > 0) {
    var n = () => --o || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function xo(e, t, o) {
  if (!(e.f & _e)) {
    if (e.f ^= _e, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || o) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & ft) !== 0 || (n.f & Pe) !== 0;
      xo(n, t, a ? o : !1), n = r;
    }
  }
}
function St(e) {
  hn(e, !0);
}
function hn(e, t) {
  if (e.f & _e) {
    e.f ^= _e, e.f & H || (e.f ^= H), ht(e) && (ue(e, Ae), Wt(e));
    for (var o = e.first; o !== null; ) {
      var n = o.next, r = (o.f & ft) !== 0 || (o.f & Pe) !== 0;
      hn(o, r ? t : !1), o = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Tr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let W = null;
function To(e) {
  W = e;
}
function Be(e, t = !1, o) {
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
function Fe(e) {
  const t = W;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var o = O, n = S;
      t.e = null;
      try {
        for (var r = 0; r < s.length; r++) {
          var a = s[r];
          ce(a.effect), de(a.reaction), vt(a.fn);
        }
      } finally {
        ce(o), de(n);
      }
    }
    W = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function vn() {
  return !0;
}
const $r = ["touchstart", "touchmove"];
function Mr(e) {
  return $r.includes(e);
}
function kr(e) {
  var t = S, o = O;
  de(null), ce(null);
  try {
    return e();
  } finally {
    de(t), ce(o);
  }
}
const pn = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Set();
function Ir(e) {
  for (var t = 0; t < e.length; t++)
    pn.add(e[t]);
  for (var o of Jt)
    o(e);
}
function mt(e) {
  var E;
  var t = this, o = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((E = e.composedPath) == null ? void 0 : E.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var c = r.indexOf(l);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var i = r.indexOf(t);
    if (i === -1)
      return;
    c <= i && (s = c);
  }
  if (a = /** @type {Element} */
  r[s] || e.target, a !== t) {
    at(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || o;
      }
    });
    var d = S, f = O;
    de(null), ce(null);
    try {
      for (var u, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + n];
          if (p !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (co(p)) {
              var [m, ...L] = p;
              m.apply(a, [e, ...L]);
            } else
              p.call(a, e);
        } catch (w) {
          u ? v.push(w) : u = w;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (u) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw u;
      }
    } finally {
      e.__root = t, delete e.currentTarget, de(d), ce(f);
    }
  }
}
function go(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function be(e, t) {
  var o = (
    /** @type {Effect} */
    O
  );
  o.nodes_start === null && (o.nodes_start = e, o.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function pt(e, t) {
  var o = (t & Un) !== 0, n, r = !e.startsWith("<!>");
  return () => {
    if (R)
      return be(C, null), C;
    n === void 0 && (n = go(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ V(n));
    var a = (
      /** @type {TemplateNode} */
      o || Jo ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return be(a, a), a;
  };
}
// @__NO_SIDE_EFFECTS__
function mo(e, t, o = "svg") {
  var n = !e.startsWith("<!>"), r = `<${o}>${n ? e : "<!>" + e}</${o}>`, a;
  return () => {
    if (R)
      return be(C, null), C;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        go(r)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ V(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ V(l);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return be(c, c), c;
  };
}
function Br() {
  if (R)
    return be(C, null), C;
  var e = document.createDocumentFragment(), t = document.createComment(""), o = Ze();
  return e.append(t, o), be(t, o), e;
}
function le(e, t) {
  if (R) {
    O.nodes_end = C, ke();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Qt = !0;
function xn(e, t) {
  var o = t == null ? "" : typeof t == "object" ? t + "" : t;
  o !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = o, e.nodeValue = o + "");
}
function gn(e, t) {
  return mn(e, t);
}
function Fr(e, t) {
  Xt(), t.intro = t.intro ?? !1;
  const o = t.target, n = R, r = C;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ V(o)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Do); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(a);
    if (!a)
      throw qe;
    me(!0), X(
      /** @type {Comment} */
      a
    ), ke();
    const s = mn(e, { ...t, anchor: a });
    if (C === null || C.nodeType !== 8 || /** @type {Comment} */
    C.data !== io)
      throw Ht(), qe;
    return me(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === qe)
      return t.recover === !1 && rr(), Xt(), en(o), me(!1), gn(e, t);
    throw s;
  } finally {
    me(n), X(r);
  }
}
const Ge = /* @__PURE__ */ new Map();
function mn(e, { target: t, anchor: o, props: n = {}, events: r, context: a, intro: s = !0 }) {
  Xt();
  var l = /* @__PURE__ */ new Set(), c = (f) => {
    for (var u = 0; u < f.length; u++) {
      var v = f[u];
      if (!l.has(v)) {
        l.add(v);
        var h = Mr(v);
        t.addEventListener(v, mt, { passive: h });
        var p = Ge.get(v);
        p === void 0 ? (document.addEventListener(v, mt, { passive: h }), Ge.set(v, 1)) : Ge.set(v, p + 1);
      }
    }
  };
  c(uo(pn)), Jt.add(c);
  var i = void 0, d = Rr(() => {
    var f = o ?? t.appendChild(Ze());
    return Re(() => {
      if (a) {
        Be({});
        var u = (
          /** @type {ComponentContext} */
          W
        );
        u.c = a;
      }
      r && (n.$$events = r), R && be(
        /** @type {TemplateNode} */
        f,
        null
      ), Qt = s, i = e(f, n) || {}, Qt = !0, R && (O.nodes_end = C), a && Fe();
    }), () => {
      var h;
      for (var u of l) {
        t.removeEventListener(u, mt);
        var v = (
          /** @type {number} */
          Ge.get(u)
        );
        --v === 0 ? (document.removeEventListener(u, mt), Ge.delete(u)) : Ge.set(u, v);
      }
      Jt.delete(c), f !== o && ((h = f.parentNode) == null || h.removeChild(f));
    };
  });
  return Zt.set(i, d), i;
}
let Zt = /* @__PURE__ */ new WeakMap();
function Hr(e, t) {
  const o = Zt.get(e);
  return o ? (Zt.delete(e), o(t)) : Promise.resolve();
}
function yn(e, t, o = !1) {
  R && ke();
  var n = e, r = null, a = null, s = B, l = o ? ft : 0, c = !1;
  const i = (f, u = !0) => {
    c = !0, d(u, f);
  }, d = (f, u) => {
    if (s === (s = f)) return;
    let v = !1;
    if (R) {
      const h = (
        /** @type {Comment} */
        n.data === so
      );
      !!s === h && (n = zt(), X(n), me(!1), v = !0);
    }
    s ? (r ? St(r) : u && (r = Re(() => u(n))), a && dt(a, () => {
      a = null;
    })) : (a ? St(a) : u && (a = Re(() => u(n))), r && dt(r, () => {
      r = null;
    })), v && me(!0);
  };
  ot(() => {
    c = !1, t(i), c || d(null, null);
  }, l), R && (n = C);
}
function Dr(e, t, o) {
  R && ke();
  var n = e, r = B, a, s = Zn;
  ot(() => {
    s(r, r = t()) && (a && dt(a), a = Re(() => o(n)));
  }), R && (n = C);
}
function yo(e, t) {
  return t;
}
function Wr(e, t, o, n) {
  for (var r = [], a = t.length, s = 0; s < a; s++)
    xo(t[s].e, r, !0);
  var l = a > 0 && r.length === 0 && o !== null;
  if (l) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      o.parentNode
    );
    en(c), c.append(
      /** @type {Element} */
      o
    ), n.clear(), Le(e, t[0].prev, t[a - 1].next);
  }
  fn(r, () => {
    for (var i = 0; i < a; i++) {
      var d = t[i];
      l || (n.delete(d.k), Le(e, d.prev, d.next)), ne(d.e, !l);
    }
  });
}
function _o(e, t, o, n, r, a = null) {
  var s = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, c = (t & Ho) !== 0;
  if (c) {
    var i = (
      /** @type {Element} */
      e
    );
    s = R ? X(
      /** @type {Comment | Text} */
      /* @__PURE__ */ V(i)
    ) : i.appendChild(Ze());
  }
  R && ke();
  var d = null, f = !1, u = /* @__PURE__ */ fr(() => {
    var v = o();
    return co(v) ? v : v == null ? [] : uo(v);
  });
  ot(() => {
    var v = g(u), h = v.length;
    if (f && h === 0)
      return;
    f = h === 0;
    let p = !1;
    if (R) {
      var m = (
        /** @type {Comment} */
        s.data === so
      );
      m !== (h === 0) && (s = zt(), X(s), me(!1), p = !0);
    }
    if (R) {
      for (var L = null, E, w = 0; w < h; w++) {
        if (C.nodeType === 8 && /** @type {Comment} */
        C.data === io) {
          s = /** @type {Comment} */
          C, p = !0, me(!1);
          break;
        }
        var _ = v[w], y = n(_, w);
        E = _n(
          C,
          l,
          L,
          null,
          _,
          y,
          w,
          r,
          t,
          o
        ), l.items.set(y, E), L = E;
      }
      h > 0 && X(zt());
    }
    R || Gr(v, l, s, r, t, n, o), a !== null && (h === 0 ? d ? St(d) : d = Re(() => a(s)) : d !== null && dt(d, () => {
      d = null;
    })), p && me(!0), g(u);
  }), R && (s = C);
}
function Gr(e, t, o, n, r, a, s) {
  var b, He, De, x;
  var l = (r & Bn) !== 0, c = (r & (ro | ao)) !== 0, i = e.length, d = t.items, f = t.first, u = f, v, h = null, p, m = [], L = [], E, w, _, y;
  if (l)
    for (y = 0; y < i; y += 1)
      E = e[y], w = a(E, y), _ = d.get(w), _ !== void 0 && ((b = _.a) == null || b.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(_));
  for (y = 0; y < i; y += 1) {
    if (E = e[y], w = a(E, y), _ = d.get(w), _ === void 0) {
      var T = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : o;
      h = _n(
        T,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        w,
        y,
        n,
        r,
        s
      ), d.set(w, h), m = [], L = [], u = h.next;
      continue;
    }
    if (c && Kr(_, E, y, r), _.e.f & _e && (St(_.e), l && ((He = _.a) == null || He.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(_))), _ !== u) {
      if (v !== void 0 && v.has(_)) {
        if (m.length < L.length) {
          var I = L[0], M;
          h = I.prev;
          var Y = m[0], fe = m[m.length - 1];
          for (M = 0; M < m.length; M += 1)
            $o(m[M], I, o);
          for (M = 0; M < L.length; M += 1)
            v.delete(L[M]);
          Le(t, Y.prev, fe.next), Le(t, h, Y), Le(t, fe, I), u = I, h = fe, y -= 1, m = [], L = [];
        } else
          v.delete(_), $o(_, u, o), Le(t, _.prev, _.next), Le(t, _, h === null ? t.first : h.next), Le(t, h, _), h = _;
        continue;
      }
      for (m = [], L = []; u !== null && u.k !== w; )
        u.e.f & _e || (v ?? (v = /* @__PURE__ */ new Set())).add(u), L.push(u), u = u.next;
      if (u === null)
        continue;
      _ = u;
    }
    m.push(_), h = _, u = _.next;
  }
  if (u !== null || v !== void 0) {
    for (var re = v === void 0 ? [] : uo(v); u !== null; )
      u.e.f & _e || re.push(u), u = u.next;
    var Q = re.length;
    if (Q > 0) {
      var Z = r & Ho && i === 0 ? o : null;
      if (l) {
        for (y = 0; y < Q; y += 1)
          (De = re[y].a) == null || De.measure();
        for (y = 0; y < Q; y += 1)
          (x = re[y].a) == null || x.fix();
      }
      Wr(t, re, Z, d);
    }
  }
  l && Bt(() => {
    var k;
    if (p !== void 0)
      for (_ of p)
        (k = _.a) == null || k.apply();
  }), O.first = t.first && t.first.e, O.last = h && h.e;
}
function Kr(e, t, o, n) {
  n & ro && Vt(e.v, t), n & ao ? Vt(
    /** @type {Value<number>} */
    e.i,
    o
  ) : e.i = o;
}
function _n(e, t, o, n, r, a, s, l, c, i) {
  var d = (c & ro) !== 0, f = (c & Fn) === 0, u = d ? f ? /* @__PURE__ */ Ft(r) : D(r) : r, v = c & ao ? D(s) : s, h = {
    i: v,
    v: u,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: o,
    next: n
  };
  try {
    return h.e = Re(() => l(e, u, v, i), R), h.e.prev = o && o.e, h.e.next = n && n.e, o === null ? t.first = h : (o.next = h, o.e.next = h.e), n !== null && (n.prev = h, n.e.prev = h.e), h;
  } finally {
  }
}
function $o(e, t, o) {
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
      /* @__PURE__ */ Ee(a)
    );
    r.before(a), a = s;
  }
}
function Le(e, t, o) {
  t === null ? e.first = o : (t.next = o, t.e.next = o && o.e), o !== null && (o.prev = t, o.e.prev = t && t.e);
}
function Ut(e, t, o, n, r) {
  var a = e, s = "", l;
  ot(() => {
    if (s === (s = t() ?? "")) {
      R && ke();
      return;
    }
    l !== void 0 && (ne(l), l = void 0), s !== "" && (l = Re(() => {
      if (R) {
        C.data;
        for (var c = ke(), i = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          i = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Ee(c);
        if (c === null)
          throw Ht(), qe;
        be(C, i), a = X(c);
        return;
      }
      var d = s + "";
      d = `<svg>${d}</svg>`;
      var f = go(d);
      for (f = /** @type {Element} */
      /* @__PURE__ */ V(f), be(
        /** @type {TemplateNode} */
        /* @__PURE__ */ V(f),
        /** @type {TemplateNode} */
        f.lastChild
      ); /* @__PURE__ */ V(f); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ V(f)
        );
    }));
  });
}
function Ur(e, t, ...o) {
  var n = e, r = K, a;
  ot(() => {
    r !== (r = t()) && (a && (ne(a), a = null), a = Re(() => (
      /** @type {SnippetFn} */
      r(n, ...o)
    )));
  }, ft), R && (n = C);
}
function xt(e, t) {
  Bt(() => {
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
function No(e, t, o, n) {
  var r = e.__attributes ?? (e.__attributes = {});
  R && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = o) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[jn] = o), o == null ? e.removeAttribute(t) : typeof o != "string" && Yr(e).includes(t) ? e[t] = o : e.setAttribute(t, o));
}
var Mo = /* @__PURE__ */ new Map();
function Yr(e) {
  var t = Mo.get(e.nodeName);
  if (t) return t;
  Mo.set(e.nodeName, t = []);
  for (var o, n = e, r = Element.prototype; r !== n; ) {
    o = Vn(n);
    for (var a in o)
      o[a].set && t.push(a);
    n = Uo(n);
  }
  return t;
}
function Ye(e, t, o) {
  if (o) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function ye(e, t, o, n) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== o && (r[t] = o, o == null ? e.style.removeProperty(t) : e.style.setProperty(t, o, ""));
}
const jr = () => performance.now(), ae = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => jr(),
  tasks: /* @__PURE__ */ new Set()
};
function Nn() {
  const e = ae.now();
  ae.tasks.forEach((t) => {
    t.c(e) || (ae.tasks.delete(t), t.f());
  }), ae.tasks.size !== 0 && ae.tick(Nn);
}
function wn(e) {
  let t;
  return ae.tasks.size === 0 && ae.tick(Nn), {
    promise: new Promise((o) => {
      ae.tasks.add(t = { c: e, f: o });
    }),
    abort() {
      ae.tasks.delete(t);
    }
  };
}
function yt(e, t) {
  kr(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function qr(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (o) => o[0].toUpperCase() + o.slice(1)
  ).join("");
}
function ko(e) {
  const t = {}, o = e.split(";");
  for (const n of o) {
    const [r, a] = n.split(":");
    if (!r || a === void 0) break;
    const s = qr(r.trim());
    t[s] = a.trim();
  }
  return t;
}
const Vr = (e) => e;
function zr(e, t, o, n) {
  var r = (e & Kn) !== 0, a = "both", s, l = t.inert, c = t.style.overflow, i, d;
  function f() {
    var m = S, L = O;
    de(null), ce(null);
    try {
      return s ?? (s = o()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      de(m), ce(L);
    }
  }
  var u = {
    is_global: r,
    in() {
      t.inert = l, yt(t, "introstart"), i = eo(t, f(), d, 1, () => {
        yt(t, "introend"), i == null || i.abort(), i = s = void 0, t.style.overflow = c;
      });
    },
    out(m) {
      t.inert = !0, yt(t, "outrostart"), d = eo(t, f(), i, 0, () => {
        yt(t, "outroend"), m == null || m();
      });
    },
    stop: () => {
      i == null || i.abort(), d == null || d.abort();
    }
  }, v = (
    /** @type {Effect} */
    O
  );
  if ((v.transitions ?? (v.transitions = [])).push(u), Qt) {
    var h = r;
    if (!h) {
      for (var p = (
        /** @type {Effect | null} */
        v.parent
      ); p && p.f & ft; )
        for (; (p = p.parent) && !(p.f & kt); )
          ;
      h = !p || (p.f & Go) !== 0;
    }
    h && vt(() => {
      J(() => u.in());
    });
  }
}
function eo(e, t, o, n, r) {
  var a = n === 1;
  if (Ue(t)) {
    var s, l = !1;
    return Bt(() => {
      if (!l) {
        var m = t({ direction: a ? "in" : "out" });
        s = eo(e, m, o, n, r);
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
    return r(), {
      abort: K,
      deactivate: K,
      reset: K,
      t: () => n
    };
  const { delay: c = 0, css: i, tick: d, easing: f = Vr } = t;
  var u = [];
  if (a && o === void 0 && (d && d(0, 1), i)) {
    var v = ko(i(0, 1));
    u.push(v, v);
  }
  var h = () => 1 - n, p = e.animate(u, { duration: c });
  return p.onfinish = () => {
    var m = (o == null ? void 0 : o.t()) ?? 1 - n;
    o == null || o.abort();
    var L = n - m, E = (
      /** @type {number} */
      t.duration * Math.abs(L)
    ), w = [];
    if (E > 0) {
      var _ = !1;
      if (i)
        for (var y = Math.ceil(E / 16.666666666666668), T = 0; T <= y; T += 1) {
          var I = m + L * f(T / y), M = ko(i(I, 1 - I));
          w.push(M), _ || (_ = M.overflow === "hidden");
        }
      _ && (e.style.overflow = "hidden"), h = () => {
        var Y = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + L * f(Y / E);
      }, d && wn(() => {
        if (p.playState !== "running") return !1;
        var Y = h();
        return d(Y, 1 - Y), !0;
      });
    }
    p = e.animate(w, { duration: E, fill: "forwards" }), p.onfinish = () => {
      h = () => n, d == null || d(n, 1 - n), r();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = K);
    },
    deactivate: () => {
      r = K;
    },
    reset: () => {
      n === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
var Ce, Je, ct, Tt, bn;
const $t = class $t {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    ee(this, Tt);
    /** */
    ee(this, Ce, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    ee(this, Je);
    /** @type {ResizeObserverOptions} */
    ee(this, ct);
    Te(this, ct, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, o) {
    var n = A(this, Ce).get(t) || /* @__PURE__ */ new Set();
    return n.add(o), A(this, Ce).set(t, n), Lo(this, Tt, bn).call(this).observe(t, A(this, ct)), () => {
      var r = A(this, Ce).get(t);
      r.delete(o), r.size === 0 && (A(this, Ce).delete(t), A(this, Je).unobserve(t));
    };
  }
};
Ce = new WeakMap(), Je = new WeakMap(), ct = new WeakMap(), Tt = new WeakSet(), bn = function() {
  return A(this, Je) ?? Te(this, Je, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var o of t) {
        $t.entries.set(o.target, o);
        for (var n of A(this, Ce).get(o.target) || [])
          n(o);
      }
    }
  ));
}, /** @static */
j($t, "entries", /* @__PURE__ */ new WeakMap());
let to = $t;
var Xr = /* @__PURE__ */ new to({
  box: "border-box"
});
function Io(e, t, o) {
  var n = Xr.observe(e, () => o(e[t]));
  vt(() => (J(() => o(e[t])), n));
}
function Bo(e, t) {
  return e === t || (e == null ? void 0 : e[Ve]) === t;
}
function Pn(e = {}, t, o, n) {
  return vt(() => {
    var r, a;
    return po(() => {
      r = a, a = [], J(() => {
        e !== o(...a) && (t(e, ...a), r && Bo(o(...r), e) && t(null, ...r));
      });
    }), () => {
      Bt(() => {
        a && Bo(o(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Jr(e) {
  W === null && Tr(), Rt(() => {
    const t = J(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function An(e, t, o) {
  if (e == null)
    return t(void 0), K;
  const n = J(
    () => e.subscribe(
      t,
      // @ts-expect-error
      o
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Ke = [];
function Qr(e, t = K) {
  let o = null;
  const n = /* @__PURE__ */ new Set();
  function r(l) {
    if (qo(e, l) && (e = l, o)) {
      const c = !Ke.length;
      for (const i of n)
        i[1](), Ke.push(i, e);
      if (c) {
        for (let i = 0; i < Ke.length; i += 2)
          Ke[i][0](Ke[i + 1]);
        Ke.length = 0;
      }
    }
  }
  function a(l) {
    r(l(
      /** @type {T} */
      e
    ));
  }
  function s(l, c = K) {
    const i = [l, c];
    return n.add(i), n.size === 1 && (o = t(r, a) || K), l(
      /** @type {T} */
      e
    ), () => {
      n.delete(i), n.size === 0 && o && (o(), o = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
function Zr(e) {
  let t;
  return An(e, (o) => t = o)(), t;
}
let _t = !1, oo = Symbol();
function ea(e, t, o) {
  const n = o[t] ?? (o[t] = {
    store: null,
    source: /* @__PURE__ */ Ft(void 0),
    unsubscribe: K
  });
  if (n.store !== e && !(oo in o))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = K;
    else {
      var r = !0;
      n.unsubscribe = An(e, (a) => {
        r ? n.source.v = a : $(n.source, a);
      }), r = !1;
    }
  return e && oo in o ? Zr(e) : g(n.source);
}
function ta(e, t) {
  return e.set(t), t;
}
function oa() {
  const e = {};
  function t() {
    Cr(() => {
      for (var o in e)
        e[o].unsubscribe();
      at(e, oo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function na(e, t, o) {
  return e.set(o), t;
}
function ra(e) {
  var t = _t;
  try {
    return _t = !1, [e(), _t];
  } finally {
    _t = t;
  }
}
const aa = {
  get(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let n = e.props[o];
      if (Ue(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, o) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      Ue(r) && (r = r());
      const a = Ne(r, t);
      if (a && a.set)
        return a.set(o), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let o = e.props.length;
    for (; o--; ) {
      let n = e.props[o];
      if (Ue(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const r = Ne(n, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === Ve || t === lo) return !1;
    for (let o of e.props)
      if (Ue(o) && (o = o()), o != null && t in o) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let o of e.props) {
      Ue(o) && (o = o());
      for (const n in o)
        t.includes(n) || t.push(n);
    }
    return t;
  }
};
function sa(...e) {
  return new Proxy({ props: e }, aa);
}
function P(e, t, o, n) {
  var y;
  var r = (o & Hn) !== 0, a = !0, s = (o & Wn) !== 0, l = (o & Gn) !== 0, c = !1, i;
  s ? [i, c] = ra(() => (
    /** @type {V} */
    e[t]
  )) : i = /** @type {V} */
  e[t];
  var d = Ve in e || lo in e, f = s && (((y = Ne(e, t)) == null ? void 0 : y.set) ?? (d && t in e && ((T) => e[t] = T))) || void 0, u = (
    /** @type {V} */
    n
  ), v = !0, h = !1, p = () => (h = !0, v && (v = !1, l ? u = J(
    /** @type {() => V} */
    n
  ) : u = /** @type {V} */
  n), u);
  i === void 0 && n !== void 0 && (f && a && ar(), i = p(), f && f(i));
  var m;
  if (m = () => {
    var T = (
      /** @type {V} */
      e[t]
    );
    return T === void 0 ? p() : (v = !0, h = !1, T);
  }, !(o & Dn))
    return m;
  if (f) {
    var L = e.$$legacy;
    return function(T, I) {
      return arguments.length > 0 ? ((!I || L || c) && f(I ? m() : T), T) : m();
    };
  }
  var E = !1, w = /* @__PURE__ */ Ft(i), _ = /* @__PURE__ */ we(() => {
    var T = m(), I = g(w);
    return E ? (E = !1, I) : w.v = T;
  });
  return r || (_.equals = fo), function(T, I) {
    if (arguments.length > 0) {
      const M = I ? g(_) : s ? ge(T) : T;
      return _.equals(M) || (E = !0, $(w, M), h && u !== void 0 && (u = M), J(() => g(_))), T;
    }
    return g(_);
  };
}
function ia(e) {
  return new la(e);
}
var pe, q;
class la {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ee(this, pe);
    /** @type {Record<string, any>} */
    ee(this, q);
    var a;
    var o = /* @__PURE__ */ new Map(), n = (s, l) => {
      var c = /* @__PURE__ */ Ft(l);
      return o.set(s, c), c;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return g(o.get(l) ?? n(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === lo ? !0 : (g(o.get(l) ?? n(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, c) {
          return $(o.get(l) ?? n(l, c), c), Reflect.set(s, l, c);
        }
      }
    );
    Te(this, q, (t.hydrate ? Fr : gn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && N(), Te(this, pe, r.$$events);
    for (const s of Object.keys(A(this, q)))
      s === "$set" || s === "$destroy" || s === "$on" || at(this, s, {
        get() {
          return A(this, q)[s];
        },
        /** @param {any} value */
        set(l) {
          A(this, q)[s] = l;
        },
        enumerable: !0
      });
    A(this, q).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(r, s);
    }, A(this, q).$destroy = () => {
      Hr(A(this, q));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    A(this, q).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, o) {
    A(this, pe)[t] = A(this, pe)[t] || [];
    const n = (...r) => o.call(this, ...r);
    return A(this, pe)[t].push(n), () => {
      A(this, pe)[t] = A(this, pe)[t].filter(
        /** @param {any} fn */
        (r) => r !== n
      );
    };
  }
  $destroy() {
    A(this, q).$destroy();
  }
}
pe = new WeakMap(), q = new WeakMap();
let En;
typeof HTMLElement == "function" && (En = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, o, n) {
    super();
    /** The Svelte component constructor */
    j(this, "$$ctor");
    /** Slots */
    j(this, "$$s");
    /** @type {any} The Svelte component instance */
    j(this, "$$c");
    /** Whether or not the custom element is connected */
    j(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    j(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    j(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    j(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    j(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    j(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    j(this, "$$me");
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
          r !== "default" && (s.name = r), le(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, n = da(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), o.default = !0) : o[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = bt(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = ia({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = Or(() => {
        po(() => {
          var r;
          this.$$r = !0;
          for (const a of Et(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = bt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = bt(t, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
    return Et(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === t || !this.$$p_d[o].attribute && o.toLowerCase() === t
    ) || t;
  }
});
function bt(e, t, o, n) {
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
function da(e) {
  const t = {};
  return e.childNodes.forEach((o) => {
    t[
      /** @type {Element} node */
      o.slot || "default"
    ] = !0;
  }), t;
}
function nt(e, t, o, n, r, a) {
  let s = class extends En {
    constructor() {
      super(e, o, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Et(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Et(t).forEach((l) => {
    at(s.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(c) {
        var f;
        c = bt(l, c, t), this.$$d[l] = c;
        var i = this.$$c;
        if (i) {
          var d = (f = Ne(i, l)) == null ? void 0 : f.get;
          d ? i[l] = c : i.$set({ [l]: c });
        }
      }
    });
  }), n.forEach((l) => {
    at(s.prototype, l, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[l];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Fo(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function ca(e) {
  return e;
}
function ua(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function no(e, t) {
  if (e === t || e !== e) return () => e;
  const o = typeof e;
  if (o !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const n = (
      /** @type {Array<any>} */
      t.map((r, a) => no(
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
    if (Fo(e) && Fo(t)) {
      const a = e.getTime(), l = t.getTime() - a;
      return (c) => new Date(a + c * l);
    }
    const n = Object.keys(t), r = {};
    return n.forEach((a) => {
      r[a] = no(e[a], t[a]);
    }), (a) => {
      const s = {};
      return n.forEach((l) => {
        s[l] = r[l](a);
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
var xe, Qe, ut, Me;
const wo = class wo {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, o = {}) {
    ee(this, xe, D(
      /** @type {T} */
      void 0
    ));
    ee(this, Qe, D(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    ee(this, ut);
    /** @type {import('../internal/client/types').Task | null} */
    ee(this, Me, null);
    A(this, xe).v = A(this, Qe).v = t, Te(this, ut, o);
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
    const n = new wo(t(), o);
    return po(() => {
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
    var f;
    $(A(this, Qe), t);
    let {
      delay: n = 0,
      duration: r = 400,
      easing: a = ca,
      interpolate: s = no
    } = { ...A(this, ut), ...o };
    if (r === 0)
      return (f = A(this, Me)) == null || f.abort(), $(A(this, xe), t), Promise.resolve();
    const l = ae.now() + n;
    let c, i = !1, d = A(this, Me);
    return Te(this, Me, wn((u) => {
      if (u < l)
        return !0;
      if (!i) {
        i = !0;
        const h = A(this, xe).v;
        c = s(h, t), typeof r == "function" && (r = r(h, t)), d == null || d.abort();
      }
      const v = u - l;
      return v > /** @type {number} */
      r ? ($(A(this, xe), t), !1) : ($(A(this, xe), c(a(v / /** @type {number} */
      r))), !0);
    })), A(this, Me).promise;
  }
  get current() {
    return g(A(this, xe));
  }
  get target() {
    return g(A(this, Qe));
  }
  set target(t) {
    this.set(t);
  }
};
xe = new WeakMap(), Qe = new WeakMap(), ut = new WeakMap(), Me = new WeakMap();
let je = wo;
var fa = /* @__PURE__ */ mo('<g><text class="hexlabels__text svelte-ejrww9"> </text></g>'), ha = /* @__PURE__ */ mo('<g class="hexlabels svelte-ejrww9"></g>');
const va = {
  hash: "svelte-ejrww9",
  code: ".hexlabels.svelte-ejrww9 {pointer-events:none;}.hexlabels__text.svelte-ejrww9 {transform:rotate(30deg) translate(0, 0.3em);fill:black;font-size:9px;font-family:sans-serif;text-anchor:middle;}.hexlabels__text--allocation.svelte-ejrww9 {fill:white;}"
};
function Ln(e, t) {
  Be(t, !0), xt(e, va);
  let o = P(t, "hexes", 7), n = P(t, "allocations", 7), r = P(t, "labelsToShow", 23, () => ({})), a = P(t, "showAll", 7, !1), s = P(t, "showElectorateLabels", 7, !1), l = /* @__PURE__ */ we(() => s() ? o() : o().filter(({ code: i }) => r()[i]));
  var c = ha();
  return _o(c, 21, () => g(l), yo, (i, d) => {
    let f = () => g(d).id, u = () => g(d).coordPx, v = () => g(d).shortName;
    var h = fa(), p = te(h), m = te(p, !0);
    U(p), U(h), lt(
      (L) => {
        No(h, "transform", L), Ye(p, "hexlabels__text--allocation", n()[f()]), xn(m, v());
      },
      [
        () => `translate(${u().join(" ")})`
      ]
    ), le(i, h);
  }), U(c), le(e, c), Fe({
    get hexes() {
      return o();
    },
    set hexes(i) {
      o(i), N();
    },
    get allocations() {
      return n();
    },
    set allocations(i) {
      n(i), N();
    },
    get labelsToShow() {
      return r();
    },
    set labelsToShow(i = {}) {
      r(i), N();
    },
    get showAll() {
      return a();
    },
    set showAll(i = !1) {
      a(i), N();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(i = !1) {
      s(i), N();
    }
  });
}
nt(
  Ln,
  {
    hexes: {},
    allocations: {},
    labelsToShow: {},
    showAll: {},
    showElectorateLabels: {}
  },
  [],
  [],
  !0
);
var pa = /* @__PURE__ */ mo('<g class="group svelte-1du0cyi"><g class="group-hexes svelte-1du0cyi"><!></g><g class="group-hex-strokes svelte-1du0cyi"><!></g><!><g class="group-outline svelte-1du0cyi"><!></g></g>');
const xa = {
  hash: "svelte-1du0cyi",
  code: `.group.svelte-1du0cyi:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--never-rendered.svelte-1du0cyi {display:none;}.group--hidden.svelte-1du0cyi {opacity:0;}.group-hex-strokes.svelte-1du0cyi,
.group-outline.svelte-1du0cyi {pointer-events:none;}.group.svelte-1du0cyi .hex {transition:all 0.5s;vector-effect:non-scaling-stroke;}.group-outline.svelte-1du0cyi .hex-outline {fill:none;stroke:var(--c-black);stroke-width:2px;transition:opacity 0.5s, stroke 0.2s;vector-effect:non-scaling-stroke;}.group--map-is-filled.svelte-1du0cyi .hex-outline {opacity:0;stroke:white;}.group-hexes.svelte-1du0cyi .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-1du0cyi .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-1du0cyi .hex[data-allocation="NXT"] {fill:var(--a-NXT);}.group-hexes.svelte-1du0cyi .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-1du0cyi .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-1du0cyi .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-1du0cyi .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-1du0cyi .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-1du0cyi .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-1du0cyi .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-1du0cyi .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-1du0cyi .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-1du0cyi .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-1du0cyi .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-1du0cyi .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--c-empty-border);}.group-hex-strokes.svelte-1du0cyi .hex {fill:none;stroke:none;stroke-width:1px;}.group-hex-strokes.svelte-1du0cyi .hex:not([data-allocation="null"]) {fill:none;stroke:var(--c-filled-border);stroke-width:1px;}.group-hex-strokes.svelte-1du0cyi .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);}.group--has-focuses.svelte-1du0cyi .hex-outline {opacity:0;stroke:white;}.group--has-focuses.svelte-1du0cyi .group-hexes:where(.svelte-1du0cyi) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-1du0cyi .group-hex-strokes:where(.svelte-1du0cyi) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-1du0cyi .group-hexes:where(.svelte-1du0cyi) .hex[data-allocation="null"][data-focused="false"] {fill:#ebebeb;stroke:#fff;}.group--has-focuses.svelte-1du0cyi .group-hex-strokes:where(.svelte-1du0cyi) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-1du0cyi .group-hexes:where(.svelte-1du0cyi) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.2;}.group--has-focuses.svelte-1du0cyi .group-hex-strokes:where(.svelte-1du0cyi) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}`
};
function Cn(e, t) {
  Be(t, !0), xt(e, xa);
  let o = P(t, "name", 7, ""), n = P(t, "svgHexes", 7, ""), r = P(t, "hexes", 23, () => []), a = P(t, "svgOutline", 7, ""), s = P(t, "offset", 23, () => [1 / 0, 1 / 0]), l = P(t, "isFilled", 7, !1), c = P(t, "allocations", 7), i = P(t, "focuses", 7), d = P(t, "hasAnyFocuses", 7, !1), f = P(t, "labelsToShow", 23, () => ({})), u = P(t, "showElectorateLabels", 7), v = P(t, "showFocusedElectorateLabels", 7), h = P(t, "isStatic", 7);
  const p = 16;
  function m(b = [0, 0]) {
    const He = b[0] * (p * Math.sqrt(3)), De = b[1] * 1.5 * p;
    return [He, De].map((x) => `${Math.round(x)}px`);
  }
  let L = he(`translate(${m(s()).join(",")})`), E = he(!1), w = /* @__PURE__ */ we(() => s()[0] !== 1 / 0);
  Rt(() => {
    g(w) && ($(L, `translate(${m(s()).join(",")})`), $(E, !0));
  });
  let _ = /* @__PURE__ */ we(() => d() && v() ? i() : f());
  var y = pa(), T = te(y), I = te(T);
  Ut(I, n), U(T);
  var M = rt(T), Y = te(M);
  Ut(Y, n), U(M);
  var fe = rt(M);
  {
    var re = (b) => {
      Ln(b, {
        get hexes() {
          return r();
        },
        get allocations() {
          return c();
        },
        get labelsToShow() {
          return g(_);
        },
        get showElectorateLabels() {
          return u();
        }
      });
    };
    yn(fe, (b) => {
      g(w) && b(re);
    });
  }
  var Q = rt(fe), Z = te(Q);
  return Ut(Z, a), U(Q), U(y), lt(() => {
    No(y, "data-name", o()), Ye(y, "group--never-rendered", !g(E)), Ye(y, "group--hidden", !g(w)), Ye(y, "group--map-is-filled", l()), Ye(y, "group--map-is-static", h()), Ye(y, "group--has-focuses", d()), ye(y, "transform", g(L));
  }), le(e, y), Fe({
    get name() {
      return o();
    },
    set name(b = "") {
      o(b), N();
    },
    get svgHexes() {
      return n();
    },
    set svgHexes(b = "") {
      n(b), N();
    },
    get hexes() {
      return r();
    },
    set hexes(b = []) {
      r(b), N();
    },
    get svgOutline() {
      return a();
    },
    set svgOutline(b = "") {
      a(b), N();
    },
    get offset() {
      return s();
    },
    set offset(b = [1 / 0, 1 / 0]) {
      s(b), N();
    },
    get isFilled() {
      return l();
    },
    set isFilled(b = !1) {
      l(b), N();
    },
    get allocations() {
      return c();
    },
    set allocations(b) {
      c(b), N();
    },
    get focuses() {
      return i();
    },
    set focuses(b) {
      i(b), N();
    },
    get hasAnyFocuses() {
      return d();
    },
    set hasAnyFocuses(b = !1) {
      d(b), N();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(b = {}) {
      f(b), N();
    },
    get showElectorateLabels() {
      return u();
    },
    set showElectorateLabels(b) {
      u(b), N();
    },
    get showFocusedElectorateLabels() {
      return v();
    },
    set showFocusedElectorateLabels(b) {
      v(b), N();
    },
    get isStatic() {
      return h();
    },
    set isStatic(b) {
      h(b), N();
    }
  });
}
nt(
  Cn,
  {
    name: {},
    svgHexes: {},
    hexes: {},
    svgOutline: {},
    offset: {},
    isFilled: {},
    allocations: {},
    focuses: {},
    hasAnyFocuses: {},
    labelsToShow: {},
    showElectorateLabels: {},
    showFocusedElectorateLabels: {},
    isStatic: {}
  },
  [],
  [],
  !0
);
const ga = (e) => e;
function ma(e, { delay: t = 0, duration: o = 400, easing: n = ga } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: n,
    css: (a) => `opacity: ${a * r}`
  };
}
var ya = /* @__PURE__ */ pt('<div class="label svelte-lh1lcp"> </div>'), _a = /* @__PURE__ */ pt('<div class="labels svelte-lh1lcp" aria-hidden="true"></div>');
const Na = {
  hash: "svelte-lh1lcp",
  code: '.labels.svelte-lh1lcp {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;}.label.svelte-lh1lcp {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, "ABC Sans Nova";font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:2px white;paint-order:stroke fill;}'
};
function On(e, t) {
  Be(t, !0), xt(e, Na);
  let o = P(t, "labels", 7);
  var n = _a();
  return _o(n, 21, o, yo, (r, a) => {
    var s = Br(), l = pr(s);
    Dr(l, () => g(a), (c) => {
      var i = ya(), d = te(i, !0);
      U(i), lt(
        (f) => {
          ye(i, "left", g(a).left + "%"), ye(i, "top", g(a).top + "%"), ye(i, "width", g(a).width + "%"), ye(i, "margin-left", f), xn(d, g(a).name);
        },
        [
          () => Math.round(0 - g(a).width / 2) + "%"
        ]
      ), zr(3, i, () => ma, () => ({ duration: 1e3 })), le(c, i);
    }), le(r, s);
  }), U(n), le(e, n), Fe({
    get labels() {
      return o();
    },
    set labels(r) {
      o(r), N();
    }
  });
}
nt(On, { labels: {} }, [], [], !0);
var wa = ({ target: e, clientX: t, clientY: o }, n) => {
  var a;
  const r = (a = e == null ? void 0 : e.dataset) == null ? void 0 : a.id;
  !r || !n() || n()({ code: r, clientX: t, clientY: o });
}, ba = /* @__PURE__ */ pt('<div class="hexmap__labels svelte-ahmprl"><!></div>'), Pa = /* @__PURE__ */ pt('<div class="hexmap svelte-ahmprl"><svg class="svelte-ahmprl"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="5.2070173" height="2.9824252" patternTransform="translate(393.99999,558.99999)" preserveAspectRatio="xMidYMid"><path clip-path="none" style="opacity:0.8;fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0.00999999;stroke-dasharray:none" d="M 2.0117291,0 0,1.1523402 v 1.830085 L 5.2050898,0 Z M 5.2070173,1.1503748 2.0117291,2.9824252 h 3.1952882 z"></path></pattern></defs><!></svg> <!></div>');
const Aa = {
  hash: "svelte-ahmprl",
  code: ".hexmap.svelte-ahmprl {position:relative;height:100%;display:flex;align-items:center;justify-content:center;}.hexmap__labels.svelte-ahmprl {position:absolute;top:0;left:50%;top:50%;pointer-events:none;}.hexmap.svelte-ahmprl svg:where(.svelte-ahmprl) {max-width:100%;max-height:100%;}"
};
function Rn(e, t) {
  Be(t, !0), xt(e, Aa);
  let o = P(t, "config", 23, () => ({})), n = P(t, "layout", 23, () => ({})), r = P(t, "allocations", 23, () => ({})), a = P(t, "focuses", 23, () => ({})), s = P(t, "certainties", 23, () => ({})), l = P(t, "labelsToShow", 23, () => ({})), c = P(t, "showStateLabels", 7, !1), i = P(t, "showElectorateLabels", 7, !1), d = P(t, "showFocusedElectorateLabels", 7, !1), f = P(t, "isStatic", 7, !1), u = P(t, "onClick", 7, () => {
  }), v = he(void 0), h = he(0), p = he(0), m = /* @__PURE__ */ we(() => Object.values(a()).some(Boolean)), L = /* @__PURE__ */ we(() => {
    const x = Object.values(r());
    return x.length !== 0 && x.every(Boolean);
  });
  const E = n().viewbox, w = { easing: ua, duration: 1100 };
  let _ = new je(E[0], w), y = new je(E[1], w), T = new je(E[2], w), I = new je(E[3], w);
  Rt(() => {
    const [x, k, We, Gt] = n().viewbox;
    _.set(x), y.set(k), T.set(We), I.set(Gt);
  });
  let M = /* @__PURE__ */ we(() => {
    var x;
    return Array.from(((x = g(v)) == null ? void 0 : x.querySelectorAll("polygon.hex")) || []).filter((k) => k instanceof SVGPolygonElement);
  }), Y = he(void 0), fe = he(void 0), re = he(void 0);
  Rt(() => {
    const x = r(), k = a(), We = s(), Gt = J(() => g(Y) || {}), Tn = J(() => g(fe) || {}), $n = J(() => g(re) || {});
    g(M).forEach((gt) => {
      const Se = gt.dataset.id;
      if (!Se)
        return;
      const bo = x[Se] || null;
      bo !== Gt[Se] && (gt.dataset.allocation = bo);
      const Po = g(m) ? k[Se] || !1 : !0;
      Po !== Tn[Se] && (gt.dataset.focused = Po);
      const Ao = We[Se] || null;
      Ao !== $n[Se] && (gt.dataset.certain = Ao);
    }), $(Y, ge(x)), $(fe, ge(k)), $(re, ge(We));
  });
  var Q = Pa();
  Q.__click = [wa, u];
  var Z = te(Q), b = rt(te(Z));
  _o(b, 17, () => o().groups, yo, (x, k) => {
    Cn(x, sa(() => g(k), {
      get isStatic() {
        return f();
      },
      get layout() {
        return n();
      },
      get offset() {
        return n().positions[g(k).name];
      },
      get isFilled() {
        return g(L);
      },
      get allocations() {
        return r();
      },
      get focuses() {
        return a();
      },
      get hasAnyFocuses() {
        return g(m);
      },
      get showElectorateLabels() {
        return i();
      },
      get showFocusedElectorateLabels() {
        return d();
      },
      get labelsToShow() {
        return l();
      }
    }));
  }), U(Z), Pn(Z, (x) => $(v, x), () => g(v));
  var He = rt(Z, 2);
  {
    var De = (x) => {
      var k = ba(), We = te(k);
      On(We, {
        get labels() {
          return n().labels;
        }
      }), U(k), lt(() => {
        ye(k, "width", `${g(h)}px`), ye(k, "height", `${g(p)}px`), ye(k, "margin-left", `${0 - g(h) / 2}px`), ye(k, "margin-top", `${0 - g(p) / 2}px`);
      }), le(x, k);
    };
    yn(He, (x) => {
      c() && x(De);
    });
  }
  return U(Q), lt((x) => No(Z, "viewBox", x), [
    () => [
      _.current,
      y.current,
      T.current,
      I.current
    ].join(" ")
  ]), Io(Z, "clientWidth", (x) => $(h, x)), Io(Z, "clientHeight", (x) => $(p, x)), le(e, Q), Fe({
    get config() {
      return o();
    },
    set config(x = {}) {
      o(x), N();
    },
    get layout() {
      return n();
    },
    set layout(x = {}) {
      n(x), N();
    },
    get allocations() {
      return r();
    },
    set allocations(x = {}) {
      r(x), N();
    },
    get focuses() {
      return a();
    },
    set focuses(x = {}) {
      a(x), N();
    },
    get certainties() {
      return s();
    },
    set certainties(x = {}) {
      s(x), N();
    },
    get labelsToShow() {
      return l();
    },
    set labelsToShow(x = {}) {
      l(x), N();
    },
    get showStateLabels() {
      return c();
    },
    set showStateLabels(x = !1) {
      c(x), N();
    },
    get showElectorateLabels() {
      return i();
    },
    set showElectorateLabels(x = !1) {
      i(x), N();
    },
    get showFocusedElectorateLabels() {
      return d();
    },
    set showFocusedElectorateLabels(x = !1) {
      d(x), N();
    },
    get isStatic() {
      return f();
    },
    set isStatic(x = !1) {
      f(x), N();
    },
    get onClick() {
      return u();
    },
    set onClick(x = () => {
    }) {
      u(x), N();
    }
  });
}
Ir(["click"]);
nt(
  Rn,
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
    isStatic: {},
    onClick: {}
  },
  [],
  [],
  !0
);
const Ea = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", NXT: "c", PUP: "m" }, La = {
  hashCodes: Ea
};
let Yt = Qr({});
var Ca = /* @__PURE__ */ pt('<div class="style-root svelte-yk8qkj"><!></div>');
const Oa = {
  hash: "svelte-yk8qkj",
  code: ".style-root.svelte-yk8qkj * {box-sizing:border-box;}.style-root.svelte-yk8qkj {height:100%;font-family:ABCSans, sans-serif;--c-black: #000;--c-grey: #989494;--c-lightgrey: #ddd;--c-white: #fff;--c-ptyaqua: #005d82;--c-ptyblack: #757575;--c-ptyblue: #0a52bf;--c-ptybrown: #804a40;--c-ptygold: #cc8500;--c-ptygreen: #007056;--c-ptylightblue: #00a1c7;--c-ptylightgreen: #51a802;--c-ptyorange: #e5660b;--c-ptypurple: #985eb5;--c-ptyred: #e11f30;--c-ptyteal: #0098a6;--c-supp-ptygold: #a36a00;--c-supp-ptylightgreen: #508423;--c-supp-ptylightblue: #0e81a0;--c-supp-ptyorange: #bd5800;--c-supp-ptyteal: #007e8a;--a-null: var(--c-white);--a-Any: var(--c-white);--a-ALP: var(--c-ptyred);--a-NXT: var(--c-pty-xxxxxx);--a-CLP: var(--c-ptygold);--a-GRN: var(--c-ptylightgreen);--a-IND: var(--c-ptyblack);--a-KAP: var(--c-ptybrown);--a-LIB: var(--c-ptyblue);--a-LNP: var(--c-ptyblue);--a-NAT: var(--c-ptygreen);--a-ONP: var(--c-ptyorange);--a-OTH: var(--c-ptyblack);--a-PUP: var(--c-ptygold);--a-Teal: var(--c-ptyteal);--c-empty-border: #cdcbcb;--c-filled-border: #fff;}"
};
function Sn(e, t) {
  Be(t, !0), xt(e, Oa);
  const [o, n] = oa(), r = () => ea(Yt, "$partyColours", o);
  let a = P(t, "children", 7), s = he(void 0);
  Jr(() => {
    if (!g(s))
      return;
    const d = window.getComputedStyle(g(s));
    ta(Yt, {}), Object.keys(La.hashCodes).forEach((u) => {
      na(Yt, J(r)[u] = d.getPropertyValue(`--a-${u}`), J(r));
    });
  });
  var l = Ca(), c = te(l);
  Ur(c, () => a() ?? K), U(l), Pn(l, (d) => $(s, d), () => g(s)), le(e, l);
  var i = Fe({
    get children() {
      return a();
    },
    set children(d) {
      a(d), N();
    }
  });
  return n(), i;
}
nt(Sn, { children: {} }, [], [], !0);
const Ra = { viewbox: [-50, -1, 480, 502], positions: { ACT: [9.0035, 10], NSW: [4, 6], NT: [2.51, 5], QLD: [5, 0], SA: [2.004, 6], TAS: [7, 16.75, !0], VIC: [4.02, 10], WA: [0.05, 6] }, labels: [{ left: 30, top: 27, width: 8, name: "NT" }, { left: 68, top: 17, width: 8, name: "QLD" }, { left: 64, top: 40, width: 8, name: "NSW" }, { left: 71, top: 55.5, width: 8, name: "ACT" }, { left: 59, top: 65, width: 8, name: "VIC" }, { left: 59, top: 85.5, width: 8, name: "TAS" }, { left: 30, top: 46, width: 8, name: "SA" }, { left: 19, top: 46, width: 8, name: "WA" }] }, Sa = {
  COUNTRY: Ra
}, Ta = 291, $a = 200, Ma = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb.","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn.","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='BANK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BART' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BENN' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='BERO' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='BLAX' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='CALA' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CHIF' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='COOK' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='COWP' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='CUNN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='DOBE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='EMON' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='FARR' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='FOWL' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='GILM' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='GRAY' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='GREE' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='HUNT' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='KSMI' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='LIND' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='LYNE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='MACA' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='MACK' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='MACQ' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='MCMA' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MITC' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='NENG' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='NEWC' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='NSYD' class='hex' points='291,80 291,96 277.1,104 263.3,96 263.3,80 277.1,72' /><polygon data-id='PAGE' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='PARK' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='PARR' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='PATE' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='RICH' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='RIVE' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='ROBE' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='SHOR' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='SYDN' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='WATS' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='WENT' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='WERR' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='WHIT' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,291,80,291,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Banks","coord":[7,4],"shortName":"Banks","index":83,"id":"BANK","coordPx":[207.8,112]},{"name":"Barton","coord":[7,5],"shortName":"Bart.","index":20,"id":"BART","coordPx":[221.7,136]},{"name":"Bennelong","coord":[6,1],"shortName":"Benn.","index":84,"id":"BENN","coordPx":[194,40]},{"name":"Berowra","coord":[4,1],"shortName":"Bero.","index":70,"id":"BERO","coordPx":[138.6,40]},{"name":"Blaxland","coord":[7,3],"shortName":"Blax.","index":0,"id":"BLAX","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad.","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Calare","coord":[0,1],"shortName":"Cala.","index":135,"id":"CALA","coordPx":[27.7,40]},{"name":"Chifley","coord":[5,2],"shortName":"Chifl.","index":3,"id":"CHIF","coordPx":[152.4,64]},{"name":"Cook","coord":[5,3],"shortName":"Cook","index":72,"id":"COOK","coordPx":[166.3,88]},{"name":"Cowper","coord":[1,0],"shortName":"Cowp.","index":143,"id":"COWP","coordPx":[41.6,16]},{"name":"Cunningham","coord":[3,3],"shortName":"Cunni.","index":5,"id":"CUNN","coordPx":[110.9,88]},{"name":"Dobell","coord":[6,0],"shortName":"Dobe.","index":49,"id":"DOBE","coordPx":[180.1,16]},{"name":"Eden-Monaro","coord":[2,2],"shortName":"Eden.","index":51,"id":"EMON","coordPx":[69.3,64]},{"name":"Farrer","coord":[0,3],"shortName":"Farr.","index":75,"id":"FARR","coordPx":[27.7,88]},{"name":"Fowler","coord":[6,2],"shortName":"Fowl.","index":6,"id":"FOWL","coordPx":[180.1,64]},{"name":"Gilmore","coord":[2,3],"shortName":"Gilm.","index":52,"id":"GILM","coordPx":[83.1,88]},{"name":"Grayndler","coord":[8,3],"shortName":"Gray.","index":11,"id":"GRAY","coordPx":[249.4,88]},{"name":"Greenway","coord":[7,2],"shortName":"Gree.","index":53,"id":"GREE","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh.","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Hunter","coord":[8,0],"shortName":"Hunt.","index":55,"id":"HUNT","coordPx":[235.6,16]},{"name":"Kingsford Smith","coord":[8,6],"shortName":"Kings.","index":34,"id":"KSMI","coordPx":[235.6,160]},{"name":"Lindsay","coord":[3,0],"shortName":"Linds.","index":107,"id":"LIND","coordPx":[97,16]},{"name":"Lyne","coord":[2,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[69.3,16]},{"name":"Macarthur","coord":[4,2],"shortName":"Maca.","index":36,"id":"MACA","coordPx":[124.7,64]},{"name":"Mackellar","coord":[5,1],"shortName":"Mack.","index":79,"id":"MACK","coordPx":[166.3,40]},{"name":"Macquarie","coord":[4,0],"shortName":"Macq.","index":59,"id":"MACQ","coordPx":[124.7,16]},{"name":"McMahon","coord":[3,1],"shortName":"McMa.","index":40,"id":"MCMA","coordPx":[110.9,40]},{"name":"Mitchell","coord":[7,1],"shortName":"Mitc.","index":80,"id":"MITC","coordPx":[221.7,40]},{"name":"New England","coord":[1,2],"shortName":"New.","index":139,"id":"NENG","coordPx":[41.6,64]},{"name":"Newcastle","coord":[9,1],"shortName":"Newc.","index":13,"id":"NEWC","coordPx":[277.1,40]},{"name":"North Sydney","coord":[9,3],"shortName":"Nort.","index":91,"id":"NSYD","coordPx":[277.1,88]},{"name":"Page","coord":[1,1],"shortName":"Page","index":144,"id":"PAGE","coordPx":[55.4,40]},{"name":"Parkes","coord":[0,0],"shortName":"Park.","index":141,"id":"PARK","coordPx":[13.9,16]},{"name":"Parramatta","coord":[6,3],"shortName":"Parr.","index":62,"id":"PARR","coordPx":[194,88]},{"name":"Paterson","coord":[9,0],"shortName":"Pate.","index":63,"id":"PATE","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Richmond","coord":[2,1],"shortName":"Rich.","index":65,"id":"RICH","coordPx":[83.1,40]},{"name":"Riverina","coord":[0,2],"shortName":"River.","index":142,"id":"RIVE","coordPx":[13.9,64]},{"name":"Robertson","coord":[5,0],"shortName":"Robe.","index":109,"id":"ROBE","coordPx":[152.4,16]},{"name":"Shortland","coord":[7,0],"shortName":"Shor.","index":66,"id":"SHOR","coordPx":[207.8,16]},{"name":"Sydney","coord":[9,4],"shortName":"Sydn.","index":16,"id":"SYDN","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr.","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Watson","coord":[8,4],"shortName":"Wats.","index":17,"id":"WATS","coordPx":[235.6,112]},{"name":"Wentworth","coord":[8,5],"shortName":"Went.","index":111,"id":"WENT","coordPx":[249.4,136]},{"name":"Werriwa","coord":[4,3],"shortName":"Werr.","index":68,"id":"WERR","coordPx":[138.6,88]},{"name":"Whitlam","coord":[3,2],"shortName":"Whit.","index":43,"id":"WHIT","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Lingi.","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo.","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='BLAI' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='BONN' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='BOWM' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BRIS' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CAPR' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' /><polygon data-id='DAWS' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='DICK' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='FADD' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FAIR' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='FISH' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='FLYN' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='FORD' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='GRIF' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='GROO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='HINK' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='KENN' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='LILL' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='LONG' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='MARA' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='MCPH' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='MONC' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='MORE' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='OXLE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='PETR' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='RANK' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='WBAY' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='WRIG' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,128,27.7,120,27.7,104,41.6,96,41.6,80,55.4,72,69.3,80,83.1,72,83.1,56,97,48,97,32,110.9,24,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,221.7,152,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,110.9,152,97,144,83.1,152,69.3,144,55.4,152,41.6,144,27.7,152,13.9,144,13.9,128' />","hexes":[{"name":"Blair","coord":[2,5],"shortName":"Blair","index":45,"id":"BLAI","coordPx":[83.1,136]},{"name":"Bonner","coord":[6,2],"shortName":"Bonn.","index":124,"id":"BONN","coordPx":[180.1,64]},{"name":"Bowman","coord":[7,4],"shortName":"Bowm.","index":125,"id":"BOWM","coordPx":[207.8,112]},{"name":"Brisbane","coord":[5,3],"shortName":"Brisb.","index":131,"id":"BRIS","coordPx":[166.3,88]},{"name":"Capricornia","coord":[3,2],"shortName":"Capri.","index":112,"id":"CAPR","coordPx":[97,64]},{"name":"Dawson","coord":[3,1],"shortName":"Daws.","index":113,"id":"DAWS","coordPx":[110.9,40]},{"name":"Dickson","coord":[3,3],"shortName":"Dicks.","index":132,"id":"DICK","coordPx":[110.9,88]},{"name":"Fadden","coord":[6,4],"shortName":"Fadd.","index":114,"id":"FADD","coordPx":[180.1,112]},{"name":"Fairfax","coord":[5,1],"shortName":"Fairf.","index":115,"id":"FAIR","coordPx":[166.3,40]},{"name":"Fisher","coord":[5,2],"shortName":"Fishe","index":116,"id":"FISH","coordPx":[152.4,64]},{"name":"Flynn","coord":[2,3],"shortName":"Flynn","index":126,"id":"FLYN","coordPx":[83.1,88]},{"name":"Forde","coord":[5,5],"shortName":"Forde","index":127,"id":"FORD","coordPx":[166.3,136]},{"name":"Griffith","coord":[5,4],"shortName":"Griff.","index":54,"id":"GRIF","coordPx":[152.4,112]},{"name":"Groom","coord":[1,5],"shortName":"Groom","index":117,"id":"GROO","coordPx":[55.4,136]},{"name":"Herbert","coord":[4,1],"shortName":"Herb.","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Hinkler","coord":[1,3],"shortName":"Hinkl.","index":118,"id":"HINK","coordPx":[55.4,88]},{"name":"Kennedy","coord":[1,4],"shortName":"Kenn.","index":148,"id":"KENN","coordPx":[41.6,112]},{"name":"Leichhardt","coord":[5,0],"shortName":"Leich.","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Lilley","coord":[6,3],"shortName":"Lille","index":56,"id":"LILL","coordPx":[194,88]},{"name":"Longman","coord":[4,2],"shortName":"Long.","index":134,"id":"LONG","coordPx":[124.7,64]},{"name":"Maranoa","coord":[0,5],"shortName":"Mara.","index":119,"id":"MARA","coordPx":[27.7,136]},{"name":"McPherson","coord":[7,5],"shortName":"McPh.","index":120,"id":"MCPH","coordPx":[221.7,136]},{"name":"Moncrieff","coord":[6,5],"shortName":"Monc.","index":121,"id":"MONC","coordPx":[194,136]},{"name":"Moreton","coord":[4,4],"shortName":"More.","index":61,"id":"MORE","coordPx":[124.7,112]},{"name":"Oxley","coord":[3,5],"shortName":"Oxley","index":41,"id":"OXLE","coordPx":[110.9,136]},{"name":"Petrie","coord":[4,3],"shortName":"Petrie","index":129,"id":"PETR","coordPx":[138.6,88]},{"name":"Rankin","coord":[3,4],"shortName":"Ranki","index":42,"id":"RANK","coordPx":[97,112]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Wide Bay","coord":[4,0],"shortName":"Wide.","index":122,"id":"WBAY","coordPx":[124.7,16]},{"name":"Wright","coord":[2,4],"shortName":"Wrig.","index":123,"id":"WRIG","coordPx":[69.3,112]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BOOT' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='KING' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='SPEN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='STUR' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel.","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Barker","coord":[0,1],"shortName":"Bark.","index":69,"id":"BARK","coordPx":[27.7,40]},{"name":"Boothby","coord":[1,3],"shortName":"Boot.","index":97,"id":"BOOT","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind.","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Kingston","coord":[1,5],"shortName":"Kings.","index":35,"id":"KING","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makin","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Spence","coord":[1,1],"shortName":"Spen.","index":15,"id":"SPEN","coordPx":[55.4,40]},{"name":"Sturt","coord":[0,5],"shortName":"Sturt","index":93,"id":"STUR","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brad.","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clark","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran.","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyons","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BALL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='CHIS' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='COOP' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='CORA' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='CORI' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FRAS' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='GORT' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='HAWK' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='HIGG' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='KOOY' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='LALO' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACN' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='MARI' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='WANN' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='WILL' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,110.9,152,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Aston","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Ballarat","coord":[1,4],"shortName":"Ball.","index":19,"id":"BALL","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bendi.","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruce","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw.","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casey","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Chisholm","coord":[3,3],"shortName":"Chish.","index":100,"id":"CHIS","coordPx":[110.9,88]},{"name":"Cooper","coord":[4,2],"shortName":"Coop.","index":4,"id":"COOP","coordPx":[124.7,64]},{"name":"Corangamite","coord":[1,5],"shortName":"Cora.","index":47,"id":"CORA","coordPx":[55.4,136]},{"name":"Corio","coord":[0,2],"shortName":"Corio","index":25,"id":"CORI","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deaki","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk.","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flind.","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Fraser","coord":[2,2],"shortName":"Fras.","index":8,"id":"FRAS","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli.","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gipps.","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold.","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Gorton","coord":[1,1],"shortName":"Gort.","index":10,"id":"GORT","coordPx":[55.4,40]},{"name":"Hawke","coord":[1,3],"shortName":"Hawke","index":28,"id":"HAWK","coordPx":[55.4,88]},{"name":"Higgins","coord":[4,4],"shortName":"Higgi.","index":104,"id":"HIGG","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth.","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isaac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga.","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Kooyong","coord":[2,3],"shortName":"Kooy.","index":105,"id":"KOOY","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"La Tr.","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Lalor","coord":[1,2],"shortName":"Lalor","index":12,"id":"LALO","coordPx":[41.6,64]},{"name":"Macnamara","coord":[3,5],"shortName":"Macn.","index":37,"id":"MACN","coordPx":[110.9,136]},{"name":"Mallee","coord":[0,0],"shortName":"Mall.","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Maribyrnong","coord":[2,4],"shortName":"Mari.","index":39,"id":"MARI","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McEw.","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb.","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz.","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona.","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nicho.","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul.","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Wannon","coord":[0,3],"shortName":"Wann.","index":95,"id":"WANN","coordPx":[27.7,88]},{"name":"Wills","coord":[3,2],"shortName":"Wills","index":44,"id":"WILL","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SWAN' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='TANG' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='CANN' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,27.7,168,27.7,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura.","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear.","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moore","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl.","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curti","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowan","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem.","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Perth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Swan","coord":[2,4],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brand","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Tangney","coord":[1,5],"shortName":"Tang.","index":94,"id":"TANG","coordPx":[55.4,136]},{"name":"Canning","coord":[1,6],"shortName":"Canni.","index":85,"id":"CANN","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr.","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"O'Con.","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), ka = {
  svgWidth: Ta,
  svgHeight: $a,
  groups: Ma
};
function Ia(e, t) {
  Be(t, !0);
  let o = P(t, "allocations", 23, () => ({})), n = P(t, "certainties", 23, () => ({})), r = P(t, "showStateLabels", 7, !1), a = P(t, "showElectorateLabels", 7, !1), s = P(t, "onClick", 7, () => {
  });
  return Sn(e, {
    children: (l, c) => {
      Rn(l, {
        config: ka,
        get layout() {
          return Sa.COUNTRY;
        },
        get allocations() {
          return o();
        },
        get certainties() {
          return n();
        },
        focuses: {},
        get showStateLabels() {
          return r();
        },
        get showElectorateLabels() {
          return a();
        },
        get onClick() {
          return s();
        },
        isStatic: !0
      });
    },
    $$slots: { default: !0 }
  }), Fe({
    get allocations() {
      return o();
    },
    set allocations(l = {}) {
      o(l), N();
    },
    get certainties() {
      return n();
    },
    set certainties(l = {}) {
      n(l), N();
    },
    get showStateLabels() {
      return r();
    },
    set showStateLabels(l = !1) {
      r(l), N();
    },
    get showElectorateLabels() {
      return a();
    },
    set showElectorateLabels(l = !1) {
      a(l), N();
    },
    get onClick() {
      return s();
    },
    set onClick(l = () => {
    }) {
      s(l), N();
    }
  });
}
customElements.define("abcnews-hexmap", nt(
  Ia,
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
  Ia as default
};
