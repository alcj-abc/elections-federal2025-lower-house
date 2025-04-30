var ls = Object.defineProperty;
var hn = (e) => {
  throw TypeError(e);
};
var cs = (e, t, o) => t in e ? ls(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var ue = (e, t, o) => cs(e, typeof t != "symbol" ? t + "" : t, o), Lo = (e, t, o) => t.has(e) || hn("Cannot " + o);
var S = (e, t, o) => (Lo(e, t, "read from private field"), o ? o.call(e) : t.get(e)), me = (e, t, o) => t.has(e) ? hn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o), et = (e, t, o, n) => (Lo(e, t, "write to private field"), n ? n.call(e, o) : t.set(e, o), o), pn = (e, t, o) => (Lo(e, t, "access private method"), o);
const us = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(us);
const Vo = 1, $o = 2, Mn = 4, ds = 8, fs = 16, hs = 1, ps = 4, vs = 8, gs = 16, Ns = 4, kn = 1, Ps = 2, Fn = "[", Uo = "[!", Ko = "]", ht = {}, Z = Symbol(), vn = !1, ye = 2, Bn = 4, lo = 8, co = 16, We = 32, mt = 64, qt = 128, pe = 256, Qt = 512, te = 1024, Ve = 2048, Ot = 4096, Be = 8192, uo = 16384, Wn = 32768, Mt = 65536, xs = 1 << 19, Vn = 1 << 20, bt = Symbol("$state"), $n = Symbol("legacy props"), ms = Symbol("");
var Yo = Array.isArray, Os = Array.prototype.indexOf, jo = Array.from, Xt = Object.keys, Ct = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, As = Object.getOwnPropertyDescriptors, Ls = Object.prototype, Ts = Array.prototype, Un = Object.getPrototypeOf;
function ws(e) {
  return typeof e == "function";
}
const ie = () => {
};
function Kn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let Et = [], yo = [];
function Yn() {
  var e = Et;
  Et = [], Kn(e);
}
function ys() {
  var e = yo;
  yo = [], Kn(e);
}
function At(e) {
  Et.length === 0 && queueMicrotask(Yn), Et.push(e);
}
function gn() {
  Et.length > 0 && Yn(), yo.length > 0 && ys();
}
function jn(e) {
  return e === this.v;
}
function zn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _s(e, t) {
  return e !== t;
}
function zo(e) {
  return !zn(e, this.v);
}
function bs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Rs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Cs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Es() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ss() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Hs(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Is() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ds() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ms() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ks = !1;
function ne(e, t) {
  var o = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: jn,
    rv: 0,
    wv: 0
  };
  return o;
}
function fe(e) {
  return /* @__PURE__ */ Fs(ne(e));
}
// @__NO_SIDE_EFFECTS__
function fo(e, t = !1) {
  const o = ne(e);
  return t || (o.equals = zo), o;
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  return W !== null && !Oe && W.f & ye && (Ee === null ? $s([e]) : Ee.push(e)), e;
}
function F(e, t) {
  return W !== null && !Oe && gr() && W.f & (ye | co) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ee === null || !Ee.includes(e)) && Ms(), _o(e, t);
}
function _o(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = rr(), qn(e, Ve), D !== null && D.f & te && !(D.f & (We | mt)) && (Me === null ? Us([e]) : Me.push(e))), t;
}
function qn(e, t) {
  var o = e.reactions;
  if (o !== null)
    for (var n = o.length, r = 0; r < n; r++) {
      var s = o[r], a = s.f;
      a & Ve || (Ie(s, t), a & (te | pe) && (a & ye ? qn(
        /** @type {Derived} */
        s,
        Ot
      ) : vo(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  var t = ye | Ve, o = W !== null && W.f & ye ? (
    /** @type {Derived} */
    W
  ) : null;
  return D === null || o !== null && o.f & pe ? t |= pe : D.f |= Vn, {
    ctx: z,
    deps: null,
    effects: null,
    equals: jn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: o ?? D
  };
}
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  const t = /* @__PURE__ */ Y(e);
  return t.equals = zo, t;
}
function Qn(e) {
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
function Ws(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ye))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Vs(e) {
  var t, o = D;
  He(Ws(e));
  try {
    Qn(e), t = ar(e);
  } finally {
    He(o);
  }
  return t;
}
function Xn(e) {
  var t = Vs(e), o = (qe || e.f & pe) && e.deps !== null ? Ot : te;
  Ie(e, o), e.equals(t) || (e.v = t, e.wv = rr());
}
function ho(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let H = !1;
function Le(e) {
  H = e;
}
let I;
function ve(e) {
  if (e === null)
    throw ho(), ht;
  return I = e;
}
function rt() {
  return ve(
    /** @type {TemplateNode} */
    /* @__PURE__ */ De(I)
  );
}
function B(e) {
  if (H) {
    if (/* @__PURE__ */ De(I) !== null)
      throw ho(), ht;
    I = e;
  }
}
function Nn(e = 1) {
  if (H) {
    for (var t = e, o = I; t--; )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ De(o);
    I = o;
  }
}
function bo() {
  for (var e = 0, t = I; ; ) {
    if (t.nodeType === 8) {
      var o = (
        /** @type {Comment} */
        t.data
      );
      if (o === Ko) {
        if (e === 0) return t;
        e -= 1;
      } else (o === Fn || o === Uo) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ De(t)
    );
    t.remove(), t = n;
  }
}
function re(e, t = null, o) {
  if (typeof e != "object" || e === null || bt in e)
    return e;
  const n = Un(e);
  if (n !== Ls && n !== Ts)
    return e;
  var r = /* @__PURE__ */ new Map(), s = Yo(e), a = ne(0);
  s && r.set("length", ne(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Is();
        var c = r.get(l);
        return c === void 0 ? (c = ne(d.value), r.set(l, c)) : F(c, re(d.value, i)), !0;
      },
      deleteProperty(u, l) {
        var d = r.get(l);
        if (d === void 0)
          l in u && r.set(l, ne(Z));
        else {
          if (s && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              r.get("length")
            ), f = Number(l);
            Number.isInteger(f) && f < c.v && F(c, f);
          }
          F(d, Z), Pn(a);
        }
        return !0;
      },
      get(u, l, d) {
        var h;
        if (l === bt)
          return e;
        var c = r.get(l), f = l in u;
        if (c === void 0 && (!f || (h = ot(u, l)) != null && h.writable) && (c = ne(re(f ? u[l] : Z, i)), r.set(l, c)), c !== void 0) {
          var p = P(c);
          return p === Z ? void 0 : p;
        }
        return Reflect.get(u, l, d);
      },
      getOwnPropertyDescriptor(u, l) {
        var d = Reflect.getOwnPropertyDescriptor(u, l);
        if (d && "value" in d) {
          var c = r.get(l);
          c && (d.value = P(c));
        } else if (d === void 0) {
          var f = r.get(l), p = f == null ? void 0 : f.v;
          if (f !== void 0 && p !== Z)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return d;
      },
      has(u, l) {
        var p;
        if (l === bt)
          return !0;
        var d = r.get(l), c = d !== void 0 && d.v !== Z || Reflect.has(u, l);
        if (d !== void 0 || D !== null && (!c || (p = ot(u, l)) != null && p.writable)) {
          d === void 0 && (d = ne(c ? re(u[l], i) : Z), r.set(l, d));
          var f = P(d);
          if (f === Z)
            return !1;
        }
        return c;
      },
      set(u, l, d, c) {
        var x;
        var f = r.get(l), p = l in u;
        if (s && l === "length")
          for (var h = d; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = r.get(h + "");
            g !== void 0 ? F(g, Z) : h in u && (g = ne(Z), r.set(h + "", g));
          }
        f === void 0 ? (!p || (x = ot(u, l)) != null && x.writable) && (f = ne(void 0), F(f, re(d, i)), r.set(l, f)) : (p = f.v !== Z, F(f, re(d, i)));
        var v = Reflect.getOwnPropertyDescriptor(u, l);
        if (v != null && v.set && v.set.call(c, d), !p) {
          if (s && typeof l == "string") {
            var L = (
              /** @type {Source<number>} */
              r.get("length")
            ), y = Number(l);
            Number.isInteger(y) && y >= L.v && F(L, y + 1);
          }
          Pn(a);
        }
        return !0;
      },
      ownKeys(u) {
        P(a);
        var l = Reflect.ownKeys(u).filter((f) => {
          var p = r.get(f);
          return p === void 0 || p.v !== Z;
        });
        for (var [d, c] of r)
          c.v !== Z && !(d in u) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Gs();
      }
    }
  );
}
function Pn(e, t = 1) {
  F(e, e.v + t);
}
var xn, Zn, Jn, er, tr;
function Ro() {
  if (xn === void 0) {
    xn = window, Zn = document, Jn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    er = ot(t, "firstChild").get, tr = ot(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function X(e) {
  return er.call(e);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return tr.call(e);
}
function U(e, t) {
  if (!H)
    return /* @__PURE__ */ X(e);
  var o = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ X(I)
  );
  if (o === null)
    o = I.appendChild(Nt());
  else if (t && o.nodeType !== 3) {
    var n = Nt();
    return o == null || o.before(n), ve(n), n;
  }
  return ve(o), o;
}
function nt(e, t) {
  if (!H) {
    var o = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ X(
        /** @type {Node} */
        e
      )
    );
    return o instanceof Comment && o.data === "" ? /* @__PURE__ */ De(o) : o;
  }
  return I;
}
function ee(e, t = 1, o = !1) {
  let n = H ? I : e;
  for (var r; t--; )
    r = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ De(n);
  if (!H)
    return n;
  var s = n == null ? void 0 : n.nodeType;
  if (o && s !== 3) {
    var a = Nt();
    return n === null ? r == null || r.after(a) : n.before(a), ve(a), a;
  }
  return ve(n), /** @type {TemplateNode} */
  n;
}
function or(e) {
  e.textContent = "";
}
let Ut = !1, Zt = !1, Jt = null, Kt = !1, qo = !1;
function mn(e) {
  qo = e;
}
let Rt = [];
let W = null, Oe = !1;
function Se(e) {
  W = e;
}
let D = null;
function He(e) {
  D = e;
}
let Ee = null;
function $s(e) {
  Ee = e;
}
let J = null, ae = 0, Me = null;
function Us(e) {
  Me = e;
}
let nr = 1, eo = 0, qe = !1;
function rr() {
  return ++nr;
}
function kt(e) {
  var c;
  var t = e.f;
  if (t & Ve)
    return !0;
  if (t & Ot) {
    var o = e.deps, n = (t & pe) !== 0;
    if (o !== null) {
      var r, s, a = (t & Qt) !== 0, i = n && D !== null && !qe, u = o.length;
      if (a || i) {
        var l = (
          /** @type {Derived} */
          e
        ), d = l.parent;
        for (r = 0; r < u; r++)
          s = o[r], (a || !((c = s == null ? void 0 : s.reactions) != null && c.includes(l))) && (s.reactions ?? (s.reactions = [])).push(l);
        a && (l.f ^= Qt), i && d !== null && !(d.f & pe) && (l.f ^= pe);
      }
      for (r = 0; r < u; r++)
        if (s = o[r], kt(
          /** @type {Derived} */
          s
        ) && Xn(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!n || D !== null && !qe) && Ie(e, te);
  }
  return !1;
}
function Ks(e, t) {
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
function Ys(e) {
  return (e.f & uo) === 0 && (e.parent === null || (e.parent.f & qt) === 0);
}
function po(e, t, o, n) {
  if (Ut) {
    if (o === null && (Ut = !1), Ys(t))
      throw e;
    return;
  }
  o !== null && (Ut = !0);
  {
    Ks(e, t);
    return;
  }
}
function sr(e, t, o = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      s.f & ye ? sr(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (o ? Ie(s, Ve) : s.f & te && Ie(s, Ot), vo(
        /** @type {Effect} */
        s
      ));
    }
}
function ar(e) {
  var p;
  var t = J, o = ae, n = Me, r = W, s = qe, a = Ee, i = z, u = Oe, l = e.f;
  J = /** @type {null | Value[]} */
  null, ae = 0, Me = null, qe = (l & pe) !== 0 && (Oe || !Kt || W === null), W = l & (We | mt) ? null : e, Ee = null, On(e.ctx), Oe = !1, eo++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (J !== null) {
      var f;
      if (to(e, ae), c !== null && ae > 0)
        for (c.length = ae + J.length, f = 0; f < J.length; f++)
          c[ae + f] = J[f];
      else
        e.deps = c = J;
      if (!qe)
        for (f = ae; f < c.length; f++)
          ((p = c[f]).reactions ?? (p.reactions = [])).push(e);
    } else c !== null && ae < c.length && (to(e, ae), c.length = ae);
    if (gr() && Me !== null && !Oe && c !== null && !(e.f & (ye | Ot | Ve)))
      for (f = 0; f < /** @type {Source[]} */
      Me.length; f++)
        sr(
          Me[f],
          /** @type {Effect} */
          e
        );
    return r !== null && eo++, d;
  } finally {
    J = t, ae = o, Me = n, W = r, qe = s, Ee = a, On(i), Oe = u;
  }
}
function js(e, t) {
  let o = t.reactions;
  if (o !== null) {
    var n = Os.call(o, e);
    if (n !== -1) {
      var r = o.length - 1;
      r === 0 ? o = t.reactions = null : (o[n] = o[r], o.pop());
    }
  }
  o === null && t.f & ye && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (J === null || !J.includes(t)) && (Ie(t, Ot), t.f & (pe | Qt) || (t.f ^= Qt), Qn(
    /** @type {Derived} **/
    t
  ), to(
    /** @type {Derived} **/
    t,
    0
  ));
}
function to(e, t) {
  var o = e.deps;
  if (o !== null)
    for (var n = t; n < o.length; n++)
      js(e, o[n]);
}
function Qo(e) {
  var t = e.f;
  if (!(t & uo)) {
    Ie(e, te);
    var o = D, n = z, r = Kt;
    D = e, Kt = !0;
    try {
      t & co ? oa(e) : ur(e), cr(e);
      var s = ar(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = nr;
      var a = e.deps, i;
      vn && ks && e.f & Ve;
    } catch (u) {
      po(u, e, o, n || e.ctx);
    } finally {
      Kt = r, D = o;
    }
  }
}
function zs() {
  try {
    Es();
  } catch (e) {
    if (Jt !== null)
      po(e, Jt, null);
    else
      throw e;
  }
}
function ir() {
  try {
    for (var e = 0; Rt.length > 0; ) {
      e++ > 1e3 && zs();
      var t = Rt, o = t.length;
      Rt = [];
      for (var n = 0; n < o; n++) {
        var r = t[n];
        r.f & te || (r.f ^= te);
        var s = Qs(r);
        qs(s);
      }
    }
  } finally {
    Zt = !1, Jt = null;
  }
}
function qs(e) {
  var t = e.length;
  if (t !== 0)
    for (var o = 0; o < t; o++) {
      var n = e[o];
      if (!(n.f & (uo | Be)))
        try {
          kt(n) && (Qo(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? dr(n) : n.fn = null));
        } catch (r) {
          po(r, n, null, n.ctx);
        }
    }
}
function vo(e) {
  Zt || (Zt = !0, queueMicrotask(ir));
  for (var t = Jt = e; t.parent !== null; ) {
    t = t.parent;
    var o = t.f;
    if (o & (mt | We)) {
      if (!(o & te)) return;
      t.f ^= te;
    }
  }
  Rt.push(t);
}
function Qs(e) {
  var t = [], o = e.first;
  e: for (; o !== null; ) {
    var n = o.f, r = (n & We) !== 0, s = r && (n & te) !== 0, a = o.next;
    if (!s && !(n & Be)) {
      if (n & Bn)
        t.push(o);
      else if (r)
        o.f ^= te;
      else {
        var i = W;
        try {
          W = o, kt(o) && Qo(o);
        } catch (d) {
          po(d, o, null, o.ctx);
        } finally {
          W = i;
        }
      }
      var u = o.first;
      if (u !== null) {
        o = u;
        continue;
      }
    }
    if (a === null) {
      let d = o.parent;
      for (; d !== null; ) {
        if (e === d)
          break e;
        var l = d.next;
        if (l !== null) {
          o = l;
          continue e;
        }
        d = d.parent;
      }
    }
    o = a;
  }
  return t;
}
function O(e) {
  var t;
  for (gn(); Rt.length > 0; )
    Zt = !0, ir(), gn();
  return (
    /** @type {T} */
    t
  );
}
function P(e) {
  var t = e.f, o = (t & ye) !== 0;
  if (W !== null && !Oe) {
    Ee !== null && Ee.includes(e) && Ds();
    var n = W.deps;
    e.rv < eo && (e.rv = eo, J === null && n !== null && n[ae] === e ? ae++ : J === null ? J = [e] : (!qe || !J.includes(e)) && J.push(e));
  } else if (o && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), s = r.parent;
    s !== null && !(s.f & pe) && (r.f ^= pe);
  }
  return o && (r = /** @type {Derived} */
  e, kt(r) && Xn(r)), e.v;
}
function st(e) {
  var t = Oe;
  try {
    return Oe = !0, e();
  } finally {
    Oe = t;
  }
}
const Xs = -7169;
function Ie(e, t) {
  e.f = e.f & Xs | t;
}
function Zs(e) {
  D === null && W === null && Cs(), W !== null && W.f & pe && D === null && Rs(), qo && bs();
}
function Js(e, t) {
  var o = t.last;
  o === null ? t.last = t.first = e : (o.next = e, e.prev = o, t.last = e);
}
function it(e, t, o, n = !0) {
  var r = (e & mt) !== 0, s = D, a = {
    ctx: z,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ve,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (o)
    try {
      Qo(a), a.f |= Wn;
    } catch (l) {
      throw be(a), l;
    }
  else t !== null && vo(a);
  var i = o && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Vn | qt)) === 0;
  if (!i && !r && n && (s !== null && Js(a, s), W !== null && W.f & ye)) {
    var u = (
      /** @type {Derived} */
      W
    );
    (u.effects ?? (u.effects = [])).push(a);
  }
  return a;
}
function lr(e) {
  const t = it(lo, null, !1);
  return Ie(t, te), t.teardown = e, t;
}
function Ge(e) {
  Zs();
  var t = D !== null && (D.f & We) !== 0 && z !== null && !z.m;
  if (t) {
    var o = (
      /** @type {ComponentContext} */
      z
    );
    (o.e ?? (o.e = [])).push({
      fn: e,
      effect: D,
      reaction: W
    });
  } else {
    var n = Ft(e);
    return n;
  }
}
function ea(e) {
  const t = it(mt, e, !0);
  return () => {
    be(t);
  };
}
function ta(e) {
  const t = it(mt, e, !0);
  return (o = {}) => new Promise((n) => {
    o.outro ? St(t, () => {
      be(t), n(void 0);
    }) : (be(t), n(void 0));
  });
}
function Ft(e) {
  return it(Bn, e, !1);
}
function Xo(e) {
  return it(lo, e, !0);
}
function _e(e, t = [], o = Y) {
  const n = t.map(o);
  return Lt(() => e(...n.map(P)));
}
function Lt(e, t = 0) {
  return it(lo | co | t, e, !0);
}
function Qe(e, t = !0) {
  return it(lo | We, e, !0, t);
}
function cr(e) {
  var t = e.teardown;
  if (t !== null) {
    const o = qo, n = W;
    mn(!0), Se(null);
    try {
      t.call(null);
    } finally {
      mn(o), Se(n);
    }
  }
}
function ur(e, t = !1) {
  var o = e.first;
  for (e.first = e.last = null; o !== null; ) {
    var n = o.next;
    be(o, t), o = n;
  }
}
function oa(e) {
  for (var t = e.first; t !== null; ) {
    var o = t.next;
    t.f & We || be(t), t = o;
  }
}
function be(e, t = !0) {
  var o = !1;
  if ((t || e.f & xs) && e.nodes_start !== null) {
    for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
      var s = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(n)
      );
      n.remove(), n = s;
    }
    o = !0;
  }
  ur(e, t && !o), to(e, 0), Ie(e, uo);
  var a = e.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  cr(e);
  var i = e.parent;
  i !== null && i.first !== null && dr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function dr(e) {
  var t = e.parent, o = e.prev, n = e.next;
  o !== null && (o.next = n), n !== null && (n.prev = o), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = o));
}
function St(e, t) {
  var o = [];
  Zo(e, o, !0), fr(o, () => {
    be(e), t && t();
  });
}
function fr(e, t) {
  var o = e.length;
  if (o > 0) {
    var n = () => --o || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function Zo(e, t, o) {
  if (!(e.f & Be)) {
    if (e.f ^= Be, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || o) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Mt) !== 0 || (n.f & We) !== 0;
      Zo(n, t, s ? o : !1), n = r;
    }
  }
}
function oo(e) {
  hr(e, !0);
}
function hr(e, t) {
  if (e.f & Be) {
    e.f ^= Be, e.f & te || (e.f ^= te), kt(e) && (Ie(e, Ve), vo(e));
    for (var o = e.first; o !== null; ) {
      var n = o.next, r = (o.f & Mt) !== 0 || (o.f & We) !== 0;
      hr(o, r ? t : !1), o = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
function pr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let z = null;
function On(e) {
  z = e;
}
function vr(e) {
  return (
    /** @type {T} */
    Nr().get(e)
  );
}
function na(e, t) {
  return Nr().set(e, t), t;
}
function le(e, t = !1, o) {
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
function ce(e) {
  const t = z;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var o = D, n = W;
      t.e = null;
      try {
        for (var r = 0; r < a.length; r++) {
          var s = a[r];
          He(s.effect), Se(s.reaction), Ft(s.fn);
        }
      } finally {
        He(o), Se(n);
      }
    }
    z = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function gr() {
  return !0;
}
function Nr(e) {
  return z === null && pr(), z.c ?? (z.c = new Map(ra(z) || void 0));
}
function ra(e) {
  let t = e.p;
  for (; t !== null; ) {
    const o = t.c;
    if (o !== null)
      return o;
    t = t.p;
  }
  return null;
}
function sa(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const aa = [
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
function ia(e) {
  return aa.includes(e);
}
const la = {
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
function ca(e) {
  return e = e.toLowerCase(), la[e] ?? e;
}
const ua = ["touchstart", "touchmove"];
function da(e) {
  return ua.includes(e);
}
function fa(e, t) {
  if (t) {
    const o = document.body;
    e.autofocus = !0, At(() => {
      document.activeElement === o && e.focus();
    });
  }
}
function Pr(e) {
  var t = W, o = D;
  Se(null), He(null);
  try {
    return e();
  } finally {
    Se(t), He(o);
  }
}
const xr = /* @__PURE__ */ new Set(), Co = /* @__PURE__ */ new Set();
function mr(e, t, o, n = {}) {
  function r(s) {
    if (n.capture || _t.call(t, s), !s.cancelBubble)
      return Pr(() => o == null ? void 0 : o.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? At(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function ha(e, t, o, n, r) {
  var s = { capture: n, passive: r }, a = mr(e, t, o, s);
  (t === document.body || t === window || t === document) && lr(() => {
    t.removeEventListener(e, a, s);
  });
}
function Or(e) {
  for (var t = 0; t < e.length; t++)
    xr.add(e[t]);
  for (var o of Co)
    o(e);
}
function _t(e) {
  var y;
  var t = this, o = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], s = (
    /** @type {null | Element} */
    r[0] || e.target
  ), a = 0, i = e.__root;
  if (i) {
    var u = r.indexOf(i);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = r.indexOf(t);
    if (l === -1)
      return;
    u <= l && (a = u);
  }
  if (s = /** @type {Element} */
  r[a] || e.target, s !== t) {
    Ct(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || o;
      }
    });
    var d = W, c = D;
    Se(null), He(null);
    try {
      for (var f, p = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var g = s["__" + n];
          if (g !== void 0 && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Yo(g)) {
              var [v, ...L] = g;
              v.apply(s, [e, ...L]);
            } else
              g.call(s, e);
        } catch (x) {
          f ? p.push(x) : f = x;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        s = h;
      }
      if (f) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Se(d), He(c);
    }
  }
}
function Jo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function we(e, t) {
  var o = (
    /** @type {Effect} */
    D
  );
  o.nodes_start === null && (o.nodes_start = e, o.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  var o = (t & kn) !== 0, n = (t & Ps) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    if (H)
      return we(I, null), I;
    r === void 0 && (r = Jo(s ? e : "<!>" + e), o || (r = /** @type {Node} */
    /* @__PURE__ */ X(r)));
    var a = (
      /** @type {TemplateNode} */
      n || Jn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (o) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ X(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      we(i, u);
    } else
      we(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Re(e, t, o = "svg") {
  var n = !e.startsWith("<!>"), r = (t & kn) !== 0, s = `<${o}>${n ? e : "<!>" + e}</${o}>`, a;
  return () => {
    if (H)
      return we(I, null), I;
    if (!a) {
      var i = (
        /** @type {DocumentFragment} */
        Jo(s)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ X(i)
      );
      if (r)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ X(u); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ X(u)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ X(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ X(l)
      ), c = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      we(d, c);
    } else
      we(l, l);
    return l;
  };
}
function pt() {
  if (H)
    return we(I, null), I;
  var e = document.createDocumentFragment(), t = document.createComment(""), o = Nt();
  return e.append(t, o), we(t, o), e;
}
function V(e, t) {
  if (H) {
    D.nodes_end = I, rt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Eo = !0;
function Ht(e, t) {
  var o = t == null ? "" : typeof t == "object" ? t + "" : t;
  o !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = o, e.nodeValue = o + "");
}
function Ar(e, t) {
  return Lr(e, t);
}
function pa(e, t) {
  Ro(), t.intro = t.intro ?? !1;
  const o = t.target, n = H, r = I;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ X(o)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Fn); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ De(s);
    if (!s)
      throw ht;
    Le(!0), ve(
      /** @type {Comment} */
      s
    ), rt();
    const a = Lr(e, { ...t, anchor: s });
    if (I === null || I.nodeType !== 8 || /** @type {Comment} */
    I.data !== Ko)
      throw ho(), ht;
    return Le(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === ht)
      return t.recover === !1 && Ss(), Ro(), or(o), Le(!1), Ar(e, t);
    throw a;
  } finally {
    Le(n), ve(r);
  }
}
const ut = /* @__PURE__ */ new Map();
function Lr(e, { target: t, anchor: o, props: n = {}, events: r, context: s, intro: a = !0 }) {
  Ro();
  var i = /* @__PURE__ */ new Set(), u = (c) => {
    for (var f = 0; f < c.length; f++) {
      var p = c[f];
      if (!i.has(p)) {
        i.add(p);
        var h = da(p);
        t.addEventListener(p, _t, { passive: h });
        var g = ut.get(p);
        g === void 0 ? (document.addEventListener(p, _t, { passive: h }), ut.set(p, 1)) : ut.set(p, g + 1);
      }
    }
  };
  u(jo(xr)), Co.add(u);
  var l = void 0, d = ta(() => {
    var c = o ?? t.appendChild(Nt());
    return Qe(() => {
      if (s) {
        le({});
        var f = (
          /** @type {ComponentContext} */
          z
        );
        f.c = s;
      }
      r && (n.$$events = r), H && we(
        /** @type {TemplateNode} */
        c,
        null
      ), Eo = a, l = e(c, n) || {}, Eo = !0, H && (D.nodes_end = I), s && ce();
    }), () => {
      var h;
      for (var f of i) {
        t.removeEventListener(f, _t);
        var p = (
          /** @type {number} */
          ut.get(f)
        );
        --p === 0 ? (document.removeEventListener(f, _t), ut.delete(f)) : ut.set(f, p);
      }
      Co.delete(u), c !== o && ((h = c.parentNode) == null || h.removeChild(c));
    };
  });
  return So.set(l, d), l;
}
let So = /* @__PURE__ */ new WeakMap();
function va(e, t) {
  const o = So.get(e);
  return o ? (So.delete(e), o(t)) : Promise.resolve();
}
function Ae(e, t, o = !1) {
  H && rt();
  var n = e, r = null, s = null, a = Z, i = o ? Mt : 0, u = !1;
  const l = (c, f = !0) => {
    u = !0, d(f, c);
  }, d = (c, f) => {
    if (a === (a = c)) return;
    let p = !1;
    if (H) {
      const h = (
        /** @type {Comment} */
        n.data === Uo
      );
      !!a === h && (n = bo(), ve(n), Le(!1), p = !0);
    }
    a ? (r ? oo(r) : f && (r = Qe(() => f(n))), s && St(s, () => {
      s = null;
    })) : (s ? oo(s) : f && (s = Qe(() => f(n))), r && St(r, () => {
      r = null;
    })), p && Le(!0);
  };
  Lt(() => {
    u = !1, t(l), u || d(null, null);
  }, i), H && (n = I);
}
function ga(e, t, o) {
  H && rt();
  var n = e, r = Z, s, a = _s;
  Lt(() => {
    a(r, r = t()) && (s && St(s), s = Qe(() => o(n)));
  }), H && (n = I);
}
function Xe(e, t) {
  return t;
}
function Na(e, t, o, n) {
  for (var r = [], s = t.length, a = 0; a < s; a++)
    Zo(t[a].e, r, !0);
  var i = s > 0 && r.length === 0 && o !== null;
  if (i) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      o.parentNode
    );
    or(u), u.append(
      /** @type {Element} */
      o
    ), n.clear(), je(e, t[0].prev, t[s - 1].next);
  }
  fr(r, () => {
    for (var l = 0; l < s; l++) {
      var d = t[l];
      i || (n.delete(d.k), je(e, d.prev, d.next)), be(d.e, !i);
    }
  });
}
function Ze(e, t, o, n, r, s = null) {
  var a = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, u = (t & Mn) !== 0;
  if (u) {
    var l = (
      /** @type {Element} */
      e
    );
    a = H ? ve(
      /** @type {Comment | Text} */
      /* @__PURE__ */ X(l)
    ) : l.appendChild(Nt());
  }
  H && rt();
  var d = null, c = !1, f = /* @__PURE__ */ Bs(() => {
    var p = o();
    return Yo(p) ? p : p == null ? [] : jo(p);
  });
  Lt(() => {
    var p = P(f), h = p.length;
    if (c && h === 0)
      return;
    c = h === 0;
    let g = !1;
    if (H) {
      var v = (
        /** @type {Comment} */
        a.data === Uo
      );
      v !== (h === 0) && (a = bo(), ve(a), Le(!1), g = !0);
    }
    if (H) {
      for (var L = null, y, x = 0; x < h; x++) {
        if (I.nodeType === 8 && /** @type {Comment} */
        I.data === Ko) {
          a = /** @type {Comment} */
          I, g = !0, Le(!1);
          break;
        }
        var N = p[x], m = n(N, x);
        y = Tr(
          I,
          i,
          L,
          null,
          N,
          m,
          x,
          r,
          t,
          o
        ), i.items.set(m, y), L = y;
      }
      h > 0 && ve(bo());
    }
    H || Pa(p, i, a, r, t, n, o), s !== null && (h === 0 ? d ? oo(d) : d = Qe(() => s(a)) : d !== null && St(d, () => {
      d = null;
    })), g && Le(!0), P(f);
  }), H && (a = I);
}
function Pa(e, t, o, n, r, s, a) {
  var E, G, $, K;
  var i = (r & ds) !== 0, u = (r & (Vo | $o)) !== 0, l = e.length, d = t.items, c = t.first, f = c, p, h = null, g, v = [], L = [], y, x, N, m;
  if (i)
    for (m = 0; m < l; m += 1)
      y = e[m], x = s(y, m), N = d.get(x), N !== void 0 && ((E = N.a) == null || E.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(N));
  for (m = 0; m < l; m += 1) {
    if (y = e[m], x = s(y, m), N = d.get(x), N === void 0) {
      var w = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : o;
      h = Tr(
        w,
        t,
        h,
        h === null ? t.first : h.next,
        y,
        x,
        m,
        n,
        r,
        a
      ), d.set(x, h), v = [], L = [], f = h.next;
      continue;
    }
    if (u && xa(N, y, m, r), N.e.f & Be && (oo(N.e), i && ((G = N.a) == null || G.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(N))), N !== f) {
      if (p !== void 0 && p.has(N)) {
        if (v.length < L.length) {
          var b = L[0], C;
          h = b.prev;
          var M = v[0], R = v[v.length - 1];
          for (C = 0; C < v.length; C += 1)
            An(v[C], b, o);
          for (C = 0; C < L.length; C += 1)
            p.delete(L[C]);
          je(t, M.prev, R.next), je(t, h, M), je(t, R, b), f = b, h = R, m -= 1, v = [], L = [];
        } else
          p.delete(N), An(N, f, o), je(t, N.prev, N.next), je(t, N, h === null ? t.first : h.next), je(t, h, N), h = N;
        continue;
      }
      for (v = [], L = []; f !== null && f.k !== x; )
        f.e.f & Be || (p ?? (p = /* @__PURE__ */ new Set())).add(f), L.push(f), f = f.next;
      if (f === null)
        continue;
      N = f;
    }
    v.push(N), h = N, f = N.next;
  }
  if (f !== null || p !== void 0) {
    for (var k = p === void 0 ? [] : jo(p); f !== null; )
      f.e.f & Be || k.push(f), f = f.next;
    var q = k.length;
    if (q > 0) {
      var _ = r & Mn && l === 0 ? o : null;
      if (i) {
        for (m = 0; m < q; m += 1)
          ($ = k[m].a) == null || $.measure();
        for (m = 0; m < q; m += 1)
          (K = k[m].a) == null || K.fix();
      }
      Na(t, k, _, d);
    }
  }
  i && At(() => {
    var j;
    if (g !== void 0)
      for (N of g)
        (j = N.a) == null || j.apply();
  }), D.first = t.first && t.first.e, D.last = h && h.e;
}
function xa(e, t, o, n) {
  n & Vo && _o(e.v, t), n & $o ? _o(
    /** @type {Value<number>} */
    e.i,
    o
  ) : e.i = o;
}
function Tr(e, t, o, n, r, s, a, i, u, l) {
  var d = (u & Vo) !== 0, c = (u & fs) === 0, f = d ? c ? /* @__PURE__ */ fo(r) : ne(r) : r, p = u & $o ? ne(a) : a, h = {
    i: p,
    v: f,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: o,
    next: n
  };
  try {
    return h.e = Qe(() => i(e, f, p, l), H), h.e.prev = o && o.e, h.e.next = n && n.e, o === null ? t.first = h : (o.next = h, o.e.next = h.e), n !== null && (n.prev = h, n.e.prev = h.e), h;
  } finally {
  }
}
function An(e, t, o) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : o, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : o, s = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); s !== n; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ De(s)
    );
    r.before(s), s = a;
  }
}
function je(e, t, o) {
  t === null ? e.first = o : (t.next = o, t.e.next = o && o.e), o !== null && (o.prev = t, o.e.prev = t && t.e);
}
function Bt(e, t, o, n, r) {
  var s = e, a = "", i;
  Lt(() => {
    if (a === (a = t() ?? "")) {
      H && rt();
      return;
    }
    i !== void 0 && (be(i), i = void 0), a !== "" && (i = Qe(() => {
      if (H) {
        I.data;
        for (var u = rt(), l = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          l = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ De(u);
        if (u === null)
          throw ho(), ht;
        we(I, l), s = ve(u);
        return;
      }
      var d = a + "";
      d = `<svg>${d}</svg>`;
      var c = Jo(d);
      for (c = /** @type {Element} */
      /* @__PURE__ */ X(c), we(
        /** @type {TemplateNode} */
        /* @__PURE__ */ X(c),
        /** @type {TemplateNode} */
        c.lastChild
      ); /* @__PURE__ */ X(c); )
        s.before(
          /** @type {Node} */
          /* @__PURE__ */ X(c)
        );
    }));
  });
}
function ma(e, t, ...o) {
  var n = e, r = ie, s;
  Lt(() => {
    r !== (r = t()) && (s && (be(s), s = null), s = Qe(() => (
      /** @type {SnippetFn} */
      r(n, ...o)
    )));
  }, Mt), H && (n = I);
}
function Je(e, t) {
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
function wr(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (o = wr(e[t])) && (n && (n += " "), n += o);
  } else for (o in e) e[o] && (n && (n += " "), n += o);
  return n;
}
function Oa() {
  for (var e, t, o = 0, n = "", r = arguments.length; o < r; o++) (e = arguments[o]) && (t = wr(e)) && (n && (n += " "), n += t);
  return n;
}
function Aa(e) {
  return typeof e == "object" ? Oa(e) : e ?? "";
}
const Ln = [...` 	
\r\f \v\uFEFF`];
function La(e, t, o) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), o) {
    for (var r in o)
      if (o[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var s = r.length, a = 0; (a = n.indexOf(r, a)) >= 0; ) {
          var i = a + s;
          (a === 0 || Ln.includes(n[a - 1])) && (i === n.length || Ln.includes(n[i])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(i + 1) : a = i;
        }
  }
  return n === "" ? null : n;
}
function en(e, t, o, n, r, s) {
  var a = e.__className;
  if (H || a !== o) {
    var i = La(o, n, s);
    (!H || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = o;
  } else if (s) {
    r ?? (r = {});
    for (var u in s) {
      var l = !!s[u];
      l !== !!r[u] && e.classList.toggle(u, l);
    }
  }
  return s;
}
const Yt = Symbol("class");
function Ta(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Te(e, t, o, n) {
  var r = e.__attributes ?? (e.__attributes = {});
  H && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = o) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[ms] = o), o == null ? e.removeAttribute(t) : typeof o != "string" && yr(e).includes(t) ? e[t] = o : e.setAttribute(t, o));
}
function Ho(e, t, o, n, r = !1, s = !1, a = !1) {
  let i = H && s;
  i && Le(!1);
  var u = t || {}, l = e.tagName === "OPTION";
  for (var d in t)
    d in o || (o[d] = null);
  o.class ? o.class = Aa(o.class) : (n || o[Yt]) && (o.class = null);
  var c = yr(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const x in o) {
    let N = o[x];
    if (l && x === "value" && N == null) {
      e.value = e.__value = "", u[x] = N;
      continue;
    }
    var p = u[x];
    if (!(N === p && x !== "class")) {
      u[x] = N;
      var h = x[0] + x[1];
      if (h !== "$$") {
        if (h === "on") {
          const m = {}, w = "$$" + x;
          let b = x.slice(2);
          var g = ia(b);
          if (sa(b) && (b = b.slice(0, -7), m.capture = !0), !g && p) {
            if (N != null) continue;
            e.removeEventListener(b, u[w], m), u[w] = null;
          }
          if (N != null)
            if (g)
              e[`__${b}`] = N, Or([b]);
            else {
              let C = function(M) {
                u[x].call(this, M);
              };
              u[w] = mr(b, e, C, m);
            }
          else g && (e[`__${b}`] = void 0);
        } else if (x === "class") {
          var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          en(e, v, N, n, t == null ? void 0 : t[Yt], o[Yt]);
        } else if (x === "style" && N != null)
          e.style.cssText = N + "";
        else if (x === "autofocus")
          fa(
            /** @type {HTMLElement} */
            e,
            !!N
          );
        else if (!s && (x === "__value" || x === "value" && N != null))
          e.value = e.__value = N;
        else if (x === "selected" && l)
          Ta(
            /** @type {HTMLOptionElement} */
            e,
            N
          );
        else {
          var L = x;
          r || (L = ca(L));
          var y = L === "defaultValue" || L === "defaultChecked";
          if (N == null && !s && !y)
            if (f[x] = null, L === "value" || L === "checked") {
              let m = (
                /** @type {HTMLInputElement} */
                e
              );
              const w = t === void 0;
              if (L === "value") {
                let b = m.defaultValue;
                m.removeAttribute(L), m.defaultValue = b, m.value = m.__value = w ? b : null;
              } else {
                let b = m.defaultChecked;
                m.removeAttribute(L), m.defaultChecked = b, m.checked = w ? b : !1;
              }
            } else
              e.removeAttribute(x);
          else y || c.includes(L) && (s || typeof N != "string") ? e[L] = N : typeof N != "function" && Te(e, L, N);
        }
        x === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && Le(!0), u;
}
var Tn = /* @__PURE__ */ new Map();
function yr(e) {
  var t = Tn.get(e.nodeName);
  if (t) return t;
  Tn.set(e.nodeName, t = []);
  for (var o, n = e, r = Element.prototype; r !== n; ) {
    o = As(n);
    for (var s in o)
      o[s].set && t.push(s);
    n = Un(n);
  }
  return t;
}
function he(e, t, o, n) {
  var r = e.__styles ?? (e.__styles = {});
  r[t] !== o && (r[t] = o, o == null ? e.style.removeProperty(t) : e.style.setProperty(t, o, ""));
}
const wa = () => performance.now(), Ce = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => wa(),
  tasks: /* @__PURE__ */ new Set()
};
function _r() {
  const e = Ce.now();
  Ce.tasks.forEach((t) => {
    t.c(e) || (Ce.tasks.delete(t), t.f());
  }), Ce.tasks.size !== 0 && Ce.tick(_r);
}
function br(e) {
  let t;
  return Ce.tasks.size === 0 && Ce.tick(_r), {
    promise: new Promise((o) => {
      Ce.tasks.add(t = { c: e, f: o });
    }),
    abort() {
      Ce.tasks.delete(t);
    }
  };
}
function Wt(e, t) {
  Pr(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function ya(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (o) => o[0].toUpperCase() + o.slice(1)
  ).join("");
}
function wn(e) {
  const t = {}, o = e.split(";");
  for (const n of o) {
    const [r, s] = n.split(":");
    if (!r || s === void 0) break;
    const a = ya(r.trim());
    t[a] = s.trim();
  }
  return t;
}
const _a = (e) => e;
function Pt(e, t, o, n) {
  var r = (e & Ns) !== 0, s = "both", a, i = t.inert, u = t.style.overflow, l, d;
  function c() {
    var v = W, L = D;
    Se(null), He(null);
    try {
      return a ?? (a = o()(t, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: s
      }));
    } finally {
      Se(v), He(L);
    }
  }
  var f = {
    is_global: r,
    in() {
      t.inert = i, Wt(t, "introstart"), l = Io(t, c(), d, 1, () => {
        Wt(t, "introend"), l == null || l.abort(), l = a = void 0, t.style.overflow = u;
      });
    },
    out(v) {
      t.inert = !0, Wt(t, "outrostart"), d = Io(t, c(), l, 0, () => {
        Wt(t, "outroend"), v == null || v();
      });
    },
    stop: () => {
      l == null || l.abort(), d == null || d.abort();
    }
  }, p = (
    /** @type {Effect} */
    D
  );
  if ((p.transitions ?? (p.transitions = [])).push(f), Eo) {
    var h = r;
    if (!h) {
      for (var g = (
        /** @type {Effect | null} */
        p.parent
      ); g && g.f & Mt; )
        for (; (g = g.parent) && !(g.f & co); )
          ;
      h = !g || (g.f & Wn) !== 0;
    }
    h && Ft(() => {
      st(() => f.in());
    });
  }
}
function Io(e, t, o, n, r) {
  var s = n === 1;
  if (ws(t)) {
    var a, i = !1;
    return At(() => {
      if (!i) {
        var v = t({ direction: s ? "in" : "out" });
        a = Io(e, v, o, n, r);
      }
    }), {
      abort: () => {
        i = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (o == null || o.deactivate(), !(t != null && t.duration))
    return r(), {
      abort: ie,
      deactivate: ie,
      reset: ie,
      t: () => n
    };
  const { delay: u = 0, css: l, tick: d, easing: c = _a } = t;
  var f = [];
  if (s && o === void 0 && (d && d(0, 1), l)) {
    var p = wn(l(0, 1));
    f.push(p, p);
  }
  var h = () => 1 - n, g = e.animate(f, { duration: u });
  return g.onfinish = () => {
    var v = (o == null ? void 0 : o.t()) ?? 1 - n;
    o == null || o.abort();
    var L = n - v, y = (
      /** @type {number} */
      t.duration * Math.abs(L)
    ), x = [];
    if (y > 0) {
      var N = !1;
      if (l)
        for (var m = Math.ceil(y / 16.666666666666668), w = 0; w <= m; w += 1) {
          var b = v + L * c(w / m), C = wn(l(b, 1 - b));
          x.push(C), N || (N = C.overflow === "hidden");
        }
      N && (e.style.overflow = "hidden"), h = () => {
        var M = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return v + L * c(M / y);
      }, d && br(() => {
        if (g.playState !== "running") return !1;
        var M = h();
        return d(M, 1 - M), !0;
      });
    }
    g = e.animate(x, { duration: y, fill: "forwards" }), g.onfinish = () => {
      h = () => n, d == null || d(n, 1 - n), r();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = ie);
    },
    deactivate: () => {
      r = ie;
    },
    reset: () => {
      n === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
var ze, vt, Gt, ao, Rr;
const io = class io {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    me(this, ao);
    /** */
    me(this, ze, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    me(this, vt);
    /** @type {ResizeObserverOptions} */
    me(this, Gt);
    et(this, Gt, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, o) {
    var n = S(this, ze).get(t) || /* @__PURE__ */ new Set();
    return n.add(o), S(this, ze).set(t, n), pn(this, ao, Rr).call(this).observe(t, S(this, Gt)), () => {
      var r = S(this, ze).get(t);
      r.delete(o), r.size === 0 && (S(this, ze).delete(t), S(this, vt).unobserve(t));
    };
  }
};
ze = new WeakMap(), vt = new WeakMap(), Gt = new WeakMap(), ao = new WeakSet(), Rr = function() {
  return S(this, vt) ?? et(this, vt, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var o of t) {
        io.entries.set(o.target, o);
        for (var n of S(this, ze).get(o.target) || [])
          n(o);
      }
    }
  ));
}, /** @static */
ue(io, "entries", /* @__PURE__ */ new WeakMap());
let Go = io;
var ba = /* @__PURE__ */ new Go({
  box: "border-box"
});
function Ra(e, t, o) {
  var n = ba.observe(e, () => o(e[t]));
  Ft(() => (st(() => o(e[t])), n));
}
function yn(e, t) {
  return e === t || (e == null ? void 0 : e[bt]) === t;
}
function go(e = {}, t, o, n) {
  return Ft(() => {
    var r, s;
    return Xo(() => {
      r = s, s = [], st(() => {
        e !== o(...s) && (t(e, ...s), r && yn(o(...r), e) && t(null, ...r));
      });
    }), () => {
      At(() => {
        s && yn(o(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
function at(e) {
  z === null && pr(), Ge(() => {
    const t = st(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Cr(e, t, o) {
  if (e == null)
    return t(void 0), ie;
  const n = st(
    () => e.subscribe(
      t,
      // @ts-expect-error
      o
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const dt = [];
function no(e, t = ie) {
  let o = null;
  const n = /* @__PURE__ */ new Set();
  function r(i) {
    if (zn(e, i) && (e = i, o)) {
      const u = !dt.length;
      for (const l of n)
        l[1](), dt.push(l, e);
      if (u) {
        for (let l = 0; l < dt.length; l += 2)
          dt[l][0](dt[l + 1]);
        dt.length = 0;
      }
    }
  }
  function s(i) {
    r(i(
      /** @type {T} */
      e
    ));
  }
  function a(i, u = ie) {
    const l = [i, u];
    return n.add(l), n.size === 1 && (o = t(r, s) || ie), i(
      /** @type {T} */
      e
    ), () => {
      n.delete(l), n.size === 0 && o && (o(), o = null);
    };
  }
  return { set: r, update: s, subscribe: a };
}
function Er(e) {
  let t;
  return Cr(e, (o) => t = o)(), t;
}
let Vt = !1, Do = Symbol();
function Ca(e, t, o) {
  const n = o[t] ?? (o[t] = {
    store: null,
    source: /* @__PURE__ */ fo(void 0),
    unsubscribe: ie
  });
  if (n.store !== e && !(Do in o))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = ie;
    else {
      var r = !0;
      n.unsubscribe = Cr(e, (s) => {
        r ? n.source.v = s : F(n.source, s);
      }), r = !1;
    }
  return e && Do in o ? Er(e) : P(n.source);
}
function It(e, t) {
  return e.set(t), t;
}
function No() {
  const e = {};
  function t() {
    lr(() => {
      for (var o in e)
        e[o].unsubscribe();
      Ct(e, Do, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Ea(e) {
  var t = Vt;
  try {
    return Vt = !1, [e(), Vt];
  } finally {
    Vt = t;
  }
}
function A(e, t, o, n) {
  var m;
  var r = (o & hs) !== 0, s = !0, a = (o & vs) !== 0, i = (o & gs) !== 0, u = !1, l;
  a ? [l, u] = Ea(() => (
    /** @type {V} */
    e[t]
  )) : l = /** @type {V} */
  e[t];
  var d = bt in e || $n in e, c = a && (((m = ot(e, t)) == null ? void 0 : m.set) ?? (d && t in e && ((w) => e[t] = w))) || void 0, f = (
    /** @type {V} */
    n
  ), p = !0, h = !1, g = () => (h = !0, p && (p = !1, i ? f = st(
    /** @type {() => V} */
    n
  ) : f = /** @type {V} */
  n), f);
  l === void 0 && n !== void 0 && (c && s && Hs(), l = g(), c && c(l));
  var v;
  if (v = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? g() : (p = !0, h = !1, w);
  }, !(o & ps))
    return v;
  if (c) {
    var L = e.$$legacy;
    return function(w, b) {
      return arguments.length > 0 ? ((!b || L || u) && c(b ? v() : w), w) : v();
    };
  }
  var y = !1, x = /* @__PURE__ */ fo(l), N = /* @__PURE__ */ Y(() => {
    var w = v(), b = P(x);
    return y ? (y = !1, b) : x.v = w;
  });
  return r || (N.equals = zo), function(w, b) {
    if (arguments.length > 0) {
      const C = b ? P(N) : a ? re(w) : w;
      return N.equals(C) || (y = !0, F(x, C), h && f !== void 0 && (f = C), st(() => P(N))), w;
    }
    return P(N);
  };
}
function Sa(e) {
  return new Ha(e);
}
var ke, de;
class Ha {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    me(this, ke);
    /** @type {Record<string, any>} */
    me(this, de);
    var s;
    var o = /* @__PURE__ */ new Map(), n = (a, i) => {
      var u = /* @__PURE__ */ fo(i);
      return o.set(a, u), u;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, i) {
          return P(o.get(i) ?? n(i, Reflect.get(a, i)));
        },
        has(a, i) {
          return i === $n ? !0 : (P(o.get(i) ?? n(i, Reflect.get(a, i))), Reflect.has(a, i));
        },
        set(a, i, u) {
          return F(o.get(i) ?? n(i, u), u), Reflect.set(a, i, u);
        }
      }
    );
    et(this, de, (t.hydrate ? pa : Ar)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && O(), et(this, ke, r.$$events);
    for (const a of Object.keys(S(this, de)))
      a === "$set" || a === "$destroy" || a === "$on" || Ct(this, a, {
        get() {
          return S(this, de)[a];
        },
        /** @param {any} value */
        set(i) {
          S(this, de)[a] = i;
        },
        enumerable: !0
      });
    S(this, de).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(r, a);
    }, S(this, de).$destroy = () => {
      va(S(this, de));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    S(this, de).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, o) {
    S(this, ke)[t] = S(this, ke)[t] || [];
    const n = (...r) => o.call(this, ...r);
    return S(this, ke)[t].push(n), () => {
      S(this, ke)[t] = S(this, ke)[t].filter(
        /** @param {any} fn */
        (r) => r !== n
      );
    };
  }
  $destroy() {
    S(this, de).$destroy();
  }
}
ke = new WeakMap(), de = new WeakMap();
let Sr;
typeof HTMLElement == "function" && (Sr = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, o, n) {
    super();
    /** The Svelte component constructor */
    ue(this, "$$ctor");
    /** Slots */
    ue(this, "$$s");
    /** @type {any} The Svelte component instance */
    ue(this, "$$c");
    /** Whether or not the custom element is connected */
    ue(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ue(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ue(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ue(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ue(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ue(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ue(this, "$$me");
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
        return (s) => {
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), V(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, n = Ia(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), o.default = !0) : o[r] = t(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = jt(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Sa({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$host: this
        }
      }), this.$$me = ea(() => {
        Xo(() => {
          var r;
          this.$$r = !0;
          for (const s of Xt(this.$$c)) {
            if (!((r = this.$$p_d[s]) != null && r.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = jt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const a = this.$$c.$on(r, s);
          this.$$l_u.set(s, a);
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
  var s;
  const r = (s = o[e]) == null ? void 0 : s.type;
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
function Ia(e) {
  const t = {};
  return e.childNodes.forEach((o) => {
    t[
      /** @type {Element} node */
      o.slot || "default"
    ] = !0;
  }), t;
}
function ge(e, t, o, n, r, s) {
  let a = class extends Sr {
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
    Ct(a.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(u) {
        var c;
        u = jt(i, u, t), this.$$d[i] = u;
        var l = this.$$c;
        if (l) {
          var d = (c = ot(l, i)) == null ? void 0 : c.get;
          d ? l[i] = u : l.$set({ [i]: u });
        }
      }
    });
  }), n.forEach((i) => {
    Ct(a.prototype, i, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[i];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function _n(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Ga(e) {
  return e;
}
function Da(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Mo(e, t) {
  if (e === t || e !== e) return () => e;
  const o = typeof e;
  if (o !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const n = (
      /** @type {Array<any>} */
      t.map((r, s) => Mo(
        /** @type {Array<any>} */
        e[s],
        r
      ))
    );
    return (r) => n.map((s) => s(r));
  }
  if (o === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (_n(e) && _n(t)) {
      const s = e.getTime(), i = t.getTime() - s;
      return (u) => new Date(s + u * i);
    }
    const n = Object.keys(t), r = {};
    return n.forEach((s) => {
      r[s] = Mo(e[s], t[s]);
    }), (s) => {
      const a = {};
      return n.forEach((i) => {
        a[i] = r[i](s);
      }), a;
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
var Fe, gt, Dt, tt;
const rn = class rn {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, o = {}) {
    me(this, Fe, ne(
      /** @type {T} */
      void 0
    ));
    me(this, gt, ne(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    me(this, Dt);
    /** @type {import('../internal/client/types').Task | null} */
    me(this, tt, null);
    S(this, Fe).v = S(this, gt).v = t, et(this, Dt, o);
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
    const n = new rn(t(), o);
    return Xo(() => {
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
    F(S(this, gt), t);
    let {
      delay: n = 0,
      duration: r = 400,
      easing: s = Ga,
      interpolate: a = Mo
    } = { ...S(this, Dt), ...o };
    if (r === 0)
      return (c = S(this, tt)) == null || c.abort(), F(S(this, Fe), t), Promise.resolve();
    const i = Ce.now() + n;
    let u, l = !1, d = S(this, tt);
    return et(this, tt, br((f) => {
      if (f < i)
        return !0;
      if (!l) {
        l = !0;
        const h = S(this, Fe).v;
        u = a(h, t), typeof r == "function" && (r = r(h, t)), d == null || d.abort();
      }
      const p = f - i;
      return p > /** @type {number} */
      r ? (F(S(this, Fe), t), !1) : (F(S(this, Fe), u(s(p / /** @type {number} */
      r))), !0);
    })), S(this, tt).promise;
  }
  get current() {
    return P(S(this, Fe));
  }
  get target() {
    return P(S(this, gt));
  }
  set target(t) {
    this.set(t);
  }
};
Fe = new WeakMap(), gt = new WeakMap(), Dt = new WeakMap(), tt = new WeakMap();
let ft = rn;
const Ma = (e) => e;
function xt(e, { delay: t = 0, duration: o = 400, easing: n = Ma } = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: o,
    easing: n,
    css: (s) => `opacity: ${s * r}`
  };
}
var ka = /* @__PURE__ */ $e('<div class="state-labels__label svelte-1uzomw4"> </div>'), Fa = /* @__PURE__ */ $e('<div aria-hidden="true"></div>');
const Ba = {
  hash: "svelte-1uzomw4",
  code: `.state-labels.svelte-1uzomw4 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-1uzomw4 {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, ABCSans;font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:5px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-1uzomw4 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-1uzomw4 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-1uzomw4 .state-labels__label:where(.svelte-1uzomw4) {-webkit-text-stroke:5px #f1f1f1;paint-order:stroke fill;}`
};
function Hr(e, t) {
  le(t, !0), Je(e, Ba);
  let o = A(t, "labels", 7), n = A(t, "overlayLabels", 7, !1);
  var r = Fa();
  let s;
  return Ze(r, 21, o, Xe, (a, i) => {
    var u = pt(), l = nt(u);
    ga(l, () => P(i).name, (d) => {
      var c = ka(), f = U(c, !0);
      B(c), _e(
        (p) => {
          he(c, "left", P(i).left + "%"), he(c, "top", P(i).top + "%"), he(c, "width", P(i).width + "%"), he(c, "margin-left", p), Ht(f, P(i).name);
        },
        [
          () => Math.round(0 - P(i).width / 2) + "%"
        ]
      ), Pt(3, c, () => xt, () => ({ duration: 1e3 })), V(d, c);
    }), V(a, u);
  }), B(r), _e(() => s = en(r, 1, "state-labels svelte-1uzomw4", null, s, { "state-labels--overlaid": n() })), V(e, r), ce({
    get labels() {
      return o();
    },
    set labels(a) {
      o(a), O();
    },
    get overlayLabels() {
      return n();
    },
    set overlayLabels(a = !1) {
      n(a), O();
    }
  });
}
ge(Hr, { labels: {}, overlayLabels: {} }, [], [], !0);
var Wa = /* @__PURE__ */ $e('<span class="accessible-hide svelte-ivafae"><!></span>');
const Va = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function Ir(e, t) {
  le(t, !0), Je(e, Va);
  let o = A(t, "children", 7);
  var n = Wa(), r = U(n);
  return ma(r, () => o() ?? ie), B(n), V(e, n), ce({
    get children() {
      return o();
    },
    set children(s) {
      o(s), O();
    }
  });
}
ge(Ir, { children: {} }, [], [], !0);
function $a(e, t, o) {
  var r;
  const n = e.target.dataset.id;
  F(t, re(n)), (r = o()) == null || r({ code: n });
}
function Ua(e, t) {
  var n;
  const o = e.target.dataset.id;
  (n = t()) == null || n({ code: o, clientX: null, clientY: null });
}
function Ka(e, t, o) {
  var n;
  P(t) === e.target.dataset.id && F(t, null), (n = o()) == null || n({ code: null });
}
var Ya = /* @__PURE__ */ $e("<li><button> </button></li>"), ja = /* @__PURE__ */ $e("<li> <ul></ul></li>"), za = /* @__PURE__ */ $e('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>');
const qa = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function Gr(e, t) {
  le(t, !0), Je(e, qa);
  let o = A(t, "groups", 7), n = A(t, "layout", 7), r = A(t, "onChange", 7), s = A(t, "onClick", 7), a = A(t, "onFocus", 7), i = A(t, "customElectorateAltText", 23, () => ({})), u = fe(null);
  Ge(() => {
    var d;
    (d = r()) == null || d(P(u));
  });
  let l = /* @__PURE__ */ Y(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((d) => n().positions[d]).map((d) => o().find((c) => c.name === d)).map((d) => ({
    ...d,
    hexes: [...d.hexes].sort((c, f) => c.coord[0] + c.coord[1] * 1e3 - (f.coord[0] + f.coord[1] * 1e3))
  })));
  return Ir(e, {
    children: (d, c) => {
      var f = za();
      f.__click = [Ua, s], f.__focusin = [$a, u, a], f.__focusout = [Ka, u, a], Ze(f, 21, () => P(l), Xe, (p, h) => {
        var g = ja(), v = U(g), L = ee(v);
        Ze(L, 21, () => P(h).hexes, Xe, (y, x) => {
          var N = Ya(), m = U(N), w = U(m);
          B(m), B(N), _e(() => {
            Te(m, "data-id", P(x).id), Ht(w, `${P(x).name ?? ""} ${i()[P(x).id] || ""}`);
          }), V(y, N);
        }), B(L), B(g), _e(() => Ht(v, `${P(h).name ?? ""} `)), V(p, g);
      }), B(f), V(d, f);
    },
    $$slots: { default: !0 }
  }), ce({
    get groups() {
      return o();
    },
    set groups(d) {
      o(d), O();
    },
    get layout() {
      return n();
    },
    set layout(d) {
      n(d), O();
    },
    get onChange() {
      return r();
    },
    set onChange(d) {
      r(d), O();
    },
    get onClick() {
      return s();
    },
    set onClick(d) {
      s(d), O();
    },
    get onFocus() {
      return a();
    },
    set onFocus(d) {
      a(d), O();
    },
    get customElectorateAltText() {
      return i();
    },
    set customElectorateAltText(d = {}) {
      i(d), O();
    }
  });
}
Or(["click", "focusin", "focusout"]);
ge(
  Gr,
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
function Qa(e) {
  return Object.entries(e).reduce((t, [o, n]) => (t[n] = o, t), {});
}
const bn = 16;
function Po(e = [0, 0], t = "px") {
  const o = e[0] * (bn * Math.sqrt(3)), n = e[1] * 1.5 * bn;
  return [o, n].map((r) => `${Math.round(r)}${t}`);
}
var Xa = /* @__PURE__ */ Re('<path style="color:#000000;fill:var(--c-tileFocusBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:var(--c-tileFocusBorderGap);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), Za = /* @__PURE__ */ Re('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:var(--c-tileInteractBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const Ja = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function zt(e, t) {
  le(t, !0), Je(e, Ja);
  let o = A(t, "groups", 7), n = A(t, "id", 7), r = A(t, "layout", 7), s = A(t, "type", 7, "focus"), a = /* @__PURE__ */ Y(() => o().flatMap((c) => c.hexes.map((f) => ({ ...f, group: c.name }))).sort((c, f) => c.index - f.index)), i = /* @__PURE__ */ Y(() => {
    if (!n())
      return;
    const c = P(a).find((x) => x.id === n()), [f, p] = r().positions[c.group], [h, g] = c.coord, v = g % 2 ? 0.5 : 0, [L, y] = Po([f + h + v, p + g], "").map(Number);
    return [L - 3, y - 3];
  });
  var u = pt(), l = nt(u);
  {
    var d = (c) => {
      var f = Za(), p = U(f);
      {
        var h = (g) => {
          var v = Xa();
          Nn(), V(g, v);
        };
        Ae(p, (g) => {
          s() === "focus" && g(h);
        });
      }
      Nn(), B(f), _e((g) => Te(f, "transform", g), [
        () => `translate(${P(i).join(" ")}) scale(0.95)`
      ]), V(c, f);
    };
    Ae(l, (c) => {
      P(i) && c(d);
    });
  }
  return V(e, u), ce({
    get groups() {
      return o();
    },
    set groups(c) {
      o(c), O();
    },
    get id() {
      return n();
    },
    set id(c) {
      n(c), O();
    },
    get layout() {
      return r();
    },
    set layout(c) {
      r(c), O();
    },
    get type() {
      return s();
    },
    set type(c = "focus") {
      s(c), O();
    }
  });
}
ge(zt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var ei = typeof global == "object" && global && global.Object === Object && global, ti = typeof self == "object" && self && self.Object === Object && self, Dr = ei || ti || Function("return this")(), ro = Dr.Symbol, Mr = Object.prototype, oi = Mr.hasOwnProperty, ni = Mr.toString, yt = ro ? ro.toStringTag : void 0;
function ri(e) {
  var t = oi.call(e, yt), o = e[yt];
  try {
    e[yt] = void 0;
    var n = !0;
  } catch {
  }
  var r = ni.call(e);
  return n && (t ? e[yt] = o : delete e[yt]), r;
}
var si = Object.prototype, ai = si.toString;
function ii(e) {
  return ai.call(e);
}
var li = "[object Null]", ci = "[object Undefined]", Rn = ro ? ro.toStringTag : void 0;
function ui(e) {
  return e == null ? e === void 0 ? ci : li : Rn && Rn in Object(e) ? ri(e) : ii(e);
}
function di(e) {
  return e != null && typeof e == "object";
}
var fi = "[object Symbol]";
function hi(e) {
  return typeof e == "symbol" || di(e) && ui(e) == fi;
}
var pi = /\s/;
function vi(e) {
  for (var t = e.length; t-- && pi.test(e.charAt(t)); )
    ;
  return t;
}
var gi = /^\s+/;
function Ni(e) {
  return e && e.slice(0, vi(e) + 1).replace(gi, "");
}
function ko(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Cn = NaN, Pi = /^[-+]0x[0-9a-f]+$/i, xi = /^0b[01]+$/i, mi = /^0o[0-7]+$/i, Oi = parseInt;
function En(e) {
  if (typeof e == "number")
    return e;
  if (hi(e))
    return Cn;
  if (ko(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ko(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ni(e);
  var o = xi.test(e);
  return o || mi.test(e) ? Oi(e.slice(2), o ? 2 : 8) : Pi.test(e) ? Cn : +e;
}
var To = function() {
  return Dr.Date.now();
}, Ai = "Expected a function", Li = Math.max, Ti = Math.min;
function wi(e, t, o) {
  var n, r, s, a, i, u, l = 0, d = !1, c = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Ai);
  t = En(t) || 0, ko(o) && (d = !!o.leading, c = "maxWait" in o, s = c ? Li(En(o.maxWait) || 0, t) : s, f = "trailing" in o ? !!o.trailing : f);
  function p(w) {
    var b = n, C = r;
    return n = r = void 0, l = w, a = e.apply(C, b), a;
  }
  function h(w) {
    return l = w, i = setTimeout(L, t), d ? p(w) : a;
  }
  function g(w) {
    var b = w - u, C = w - l, M = t - b;
    return c ? Ti(M, s - C) : M;
  }
  function v(w) {
    var b = w - u, C = w - l;
    return u === void 0 || b >= t || b < 0 || c && C >= s;
  }
  function L() {
    var w = To();
    if (v(w))
      return y(w);
    i = setTimeout(L, g(w));
  }
  function y(w) {
    return i = void 0, f && n ? p(w) : (n = r = void 0, a);
  }
  function x() {
    i !== void 0 && clearTimeout(i), l = 0, n = u = r = i = void 0;
  }
  function N() {
    return i === void 0 ? a : y(To());
  }
  function m() {
    var w = To(), b = v(w);
    if (n = arguments, r = this, u = w, b) {
      if (i === void 0)
        return h(u);
      if (c)
        return clearTimeout(i), i = setTimeout(L, t), p(u);
    }
    return i === void 0 && (i = setTimeout(L, t)), a;
  }
  return m.cancel = x, m.flush = N, m;
}
function yi({ isInteractive: e = !1, onClick: t, onHover: o }) {
  if (!e)
    return {};
  const n = wi(o, 10), r = ({ target: i, clientX: u, clientY: l }) => {
    var c;
    const d = (c = i == null ? void 0 : i.dataset) == null ? void 0 : c.id;
    !d || !t || t({ code: d, clientX: u, clientY: l });
  }, s = (i) => {
    const u = i.target, { clientX: l, clientY: d } = i, c = u.dataset.id;
    u.nodeName !== "polygon" || !c || n({ code: c, clientX: l, clientY: d });
  }, a = (i) => {
    n({ code: null });
  };
  return {
    onblur: a,
    onmouseout: a,
    onmouseover: s,
    onclick: r
  };
}
var _i = /* @__PURE__ */ Re('<g><text> </text><text class="hexlabels__text svelte-1kzhlql"> </text></g>'), bi = /* @__PURE__ */ Re('<g class="hexlabels svelte-1kzhlql"></g>');
const Ri = {
  hash: "svelte-1kzhlql",
  code: ".hexlabels.svelte-1kzhlql {pointer-events:none;}.hexlabels__text.svelte-1kzhlql {font-size:10px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function kr(e, t) {
  le(t, !0), Je(e, Ri);
  let o = A(t, "hexes", 7), n = A(t, "allocations", 7), r = A(t, "certainties", 7), s = A(t, "labelsToShow", 23, () => ({})), a = A(t, "showElectorateLabels", 7, !1), i = /* @__PURE__ */ Y(() => a() ? o() : o().filter(({ id: l }) => s()[l]));
  var u = bi();
  return Ze(u, 21, () => P(i), Xe, (l, d) => {
    let c = () => P(d).id, f = () => P(d).coordPx, p = () => P(d).shortName;
    var h = _i(), g = U(h);
    let v;
    var L = U(g, !0);
    B(g);
    var y = ee(g), x = U(y, !0);
    B(y), B(h), _e(
      (N) => {
        Te(h, "transform", N), v = en(g, 0, "hexlabels__text svelte-1kzhlql", null, v, {
          "hexlabels__text--allocation": n()[c()]
        }), he(g, "stroke", `var(--u-${n()[c()]})`), he(g, "stroke-width", "3"), he(g, "opacity", n()[c()] && !r()[c()] ? 1 : 0), Ht(L, p()), he(y, "fill", n()[c()] && r()[c()] ? "white" : "black"), Ht(x, p());
      },
      [
        () => `translate(${f().join(" ")}) rotate(-30) translate(0 3)`
      ]
    ), V(l, h);
  }), B(u), V(e, u), ce({
    get hexes() {
      return o();
    },
    set hexes(l) {
      o(l), O();
    },
    get allocations() {
      return n();
    },
    set allocations(l) {
      n(l), O();
    },
    get certainties() {
      return r();
    },
    set certainties(l) {
      r(l), O();
    },
    get labelsToShow() {
      return s();
    },
    set labelsToShow(l = {}) {
      s(l), O();
    },
    get showElectorateLabels() {
      return a();
    },
    set showElectorateLabels(l = !1) {
      a(l), O();
    }
  });
}
ge(
  kr,
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
var Ci = /* @__PURE__ */ Re('<g class="group-outline group-outline__under svelte-17sgil6"><!></g>'), Ei = /* @__PURE__ */ Re('<g><g class="group-hexes svelte-17sgil6"><!></g><!></g>'), Si = /* @__PURE__ */ Re('<g class="group-outline group-outline__over svelte-17sgil6"><!></g>'), Hi = /* @__PURE__ */ Re('<g><g class="group-hex-strokes svelte-17sgil6"><!></g><!><!></g>'), Ii = /* @__PURE__ */ Re('<g class="svelte-17sgil6"><!><!></g>');
const Gi = {
  hash: "svelte-17sgil6",
  code: `.group.svelte-17sgil6:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--rendered.svelte-17sgil6 .hex {transition:all 0.5s;}.group--rendered.svelte-17sgil6 .hex-outline {transition:opacity 0.5s, stroke 0.5s;}.group--hidden.svelte-17sgil6 {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-17sgil6,
.group-outline.svelte-17sgil6 {pointer-events:none;}.group.svelte-17sgil6 .hex {vector-effect:non-scaling-stroke;fill:transparent;transform-box:fill-box;transform-origin:50% 50%;--hexFlipMinWidth: 0.03;}
@media (min-width: 46.5rem) {.group.svelte-17sgil6 .hex {--hexFlipMinWidth: 0.03;}
}.group.svelte-17sgil6 .hex.hex--flip {
  animation: svelte-17sgil6-hex-flip 1s ease-in-out;}.group-outline.svelte-17sgil6 .hex-outline {fill:transparent;stroke:var(--c-stateOutline);stroke-width:1.5px;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-17sgil6:not(.group--has-focuses) .group-outline:where(.svelte-17sgil6) .hex-outline {stroke:var(--c-emptyStateOutline);}.group--map-is-full.svelte-17sgil6:not(.group--has-focuses) .group-outline:where(.svelte-17sgil6) .hex-outline {stroke:var(--c-fullStateOutline);}.group-hexes.svelte-17sgil6 .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-17sgil6 .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-17sgil6 .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-17sgil6 .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-17sgil6 .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-17sgil6 .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-17sgil6 .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-17sgil6 .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-17sgil6 .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-17sgil6 .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-17sgil6 .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-17sgil6 .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-17sgil6 .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-17sgil6 .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-17sgil6 .hex[data-allocation="TOP"] {fill:var(--a-TOP);}.group-hexes.svelte-17sgil6 .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-nullBorder);stroke-width:1.5px;}.group--map-is-empty.svelte-17sgil6 .group-hexes:where(.svelte-17sgil6) .hex {fill:var(--c-empty);stroke:var(--c-emptyBorder);stroke-width:1px;}.group-hex-strokes.svelte-17sgil6 .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-17sgil6 .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filledBorder);stroke-width:1.5px;}.group-hex-strokes.svelte-17sgil6 .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-17sgil6 .group-hexes:where(.svelte-17sgil6) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-17sgil6 .group-hexes:where(.svelte-17sgil6) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-17sgil6 .group-hex-strokes:where(.svelte-17sgil6) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-17sgil6 .group-hexes:where(.svelte-17sgil6) .hex[data-allocation="null"][data-focused="false"] {fill:#fff;stroke:#fff;}.group--has-focuses.svelte-17sgil6 .group-hex-strokes:where(.svelte-17sgil6) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-17sgil6 .group-hexes:where(.svelte-17sgil6) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-17sgil6 .group-hex-strokes:where(.svelte-17sgil6) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--is-outline.svelte-17sgil6 .hex {stroke:white !important;fill:#f1f1f1;stroke-width:1.5 !important;}.group--is-outline.svelte-17sgil6 .hex-outline {stroke:#cdcbcb !important;}

@keyframes svelte-17sgil6-hex-flip {
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
function Fr(e, t) {
  le(t, !0), Je(e, Gi);
  let o = A(t, "groups", 7), n = A(t, "isStaticLayout", 7), r = A(t, "layout", 7), s = A(t, "allocations", 7), a = A(t, "focuses", 7), i = A(t, "certainties", 7), u = A(t, "showElectorateLabels", 7), l = A(t, "showFocusedElectorateLabels", 7), d = A(t, "labelsToShow", 7), c = A(t, "isOutlineOnly", 7, !1), f = A(t, "showStateOutlinesOnTop", 7, !1), p = A(t, "hexFlip", 7, "None"), h = fe(void 0), g = fe(!1);
  at(() => {
    setTimeout(
      () => {
        F(g, !0);
      },
      1
    );
  });
  let v = /* @__PURE__ */ Y(() => {
    const R = Object.values(s());
    return R.length !== 0 && R.some(Boolean);
  }), L = /* @__PURE__ */ Y(() => {
    const R = Object.values(s());
    return R.length !== 0 && R.every(Boolean);
  }), y = /* @__PURE__ */ Y(() => Object.values(a()).some(Boolean)), x = /* @__PURE__ */ Y(() => {
    var R;
    return Array.from(((R = P(h)) == null ? void 0 : R.querySelectorAll("polygon.hex")) || []).filter((k) => k instanceof SVGPolygonElement);
  }), N = { allocation: {}, focus: {} };
  Ge(() => {
    const R = { ...s() }, k = a(), q = i();
    P(x).forEach((_) => {
      const E = _.dataset.id;
      if (!E)
        return;
      const G = R[E] || null, $ = N.allocation[E];
      G !== $ && (_.dataset.allocation = G, p() === "Flip" && (_.style.setProperty("--allocationFrom", `var(--a-${$})`), _.style.setProperty("--allocationTo", `var(--a-${G})`), _.classList.add("hex--flip"))), N.allocation[E] = G;
      const K = P(y) ? k[E] || !1 : !0;
      K !== N.focus[E] && (_.dataset.focused = K), N.focus[E] = K;
      const j = q[E] || null;
      _.dataset.certain = j;
    });
  });
  let m = /* @__PURE__ */ Y(() => {
    const R = o(), k = r();
    return R.map((q) => {
      const _ = k.positions[q.name], E = _ && _[0] !== 1 / 0, G = Po(_).join(","), $ = P(y) && l() ? a() : d(), K = {
        "data-name": q.name,
        style: `transform: translate(${G})`,
        class: [
          "group",
          !E && "group--hidden",
          n() && "group--map-is-static",
          !P(v) && "group--map-is-empty",
          P(L) && "group--map-is-full",
          P(y) && "group--has-focuses",
          c() && "group--is-outline",
          P(g) && "group--rendered"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: E, labels: $, group: q, groupProps: K };
    });
  }), w = /* @__PURE__ */ Y(() => f() || P(v) && P(y));
  var b = Ii(), C = U(b);
  Ze(C, 17, () => P(m), Xe, (R, k) => {
    let q = () => P(k).groupProps, _ = () => P(k).group;
    var E = Ei();
    let G;
    var $ = U(E), K = U($);
    Bt(K, () => _().svgHexes), B($);
    var j = ee($);
    {
      var Ne = (se) => {
        var oe = Ci(), Ue = U(oe);
        Bt(Ue, () => _().svgOutline), B(oe), Pt(3, oe, () => xt, () => ({ duration: 200 })), V(se, oe);
      };
      Ae(j, (se) => {
        P(w) || se(Ne);
      });
    }
    B(E), _e(() => G = Ho(E, G, { ...q() }, "svelte-17sgil6", !0)), V(R, E);
  });
  var M = ee(C);
  return Ze(M, 17, () => P(m), Xe, (R, k) => {
    let q = () => P(k).groupProps, _ = () => P(k).isVisible, E = () => P(k).labels, G = () => P(k).group;
    var $ = Hi();
    let K;
    var j = U($), Ne = U(j);
    Bt(Ne, () => G().svgHexes), B(j);
    var se = ee(j);
    {
      var oe = (Pe) => {
        var xe = Si(), Ke = U(xe);
        Bt(Ke, () => G().svgOutline), B(xe), Pt(3, xe, () => xt, () => ({ duration: 200 })), V(Pe, xe);
      };
      Ae(se, (Pe) => {
        P(w) && Pe(oe);
      });
    }
    var Ue = ee(se);
    {
      var Tt = (Pe) => {
        kr(Pe, {
          get hexes() {
            return G().hexes;
          },
          get allocations() {
            return s();
          },
          get certainties() {
            return i();
          },
          get labelsToShow() {
            return E();
          },
          get showElectorateLabels() {
            return u();
          }
        });
      };
      Ae(Ue, (Pe) => {
        _() && Pe(Tt);
      });
    }
    B($), _e(() => K = Ho($, K, { ...q() }, "svelte-17sgil6", !0)), V(R, $);
  }), B(b), go(b, (R) => F(h, R), () => P(h)), ha("animationend", b, (R) => {
    R.target.classList.remove("hex--flip");
  }), V(e, b), ce({
    get groups() {
      return o();
    },
    set groups(R) {
      o(R), O();
    },
    get isStaticLayout() {
      return n();
    },
    set isStaticLayout(R) {
      n(R), O();
    },
    get layout() {
      return r();
    },
    set layout(R) {
      r(R), O();
    },
    get allocations() {
      return s();
    },
    set allocations(R) {
      s(R), O();
    },
    get focuses() {
      return a();
    },
    set focuses(R) {
      a(R), O();
    },
    get certainties() {
      return i();
    },
    set certainties(R) {
      i(R), O();
    },
    get showElectorateLabels() {
      return u();
    },
    set showElectorateLabels(R) {
      u(R), O();
    },
    get showFocusedElectorateLabels() {
      return l();
    },
    set showFocusedElectorateLabels(R) {
      l(R), O();
    },
    get labelsToShow() {
      return d();
    },
    set labelsToShow(R) {
      d(R), O();
    },
    get isOutlineOnly() {
      return c();
    },
    set isOutlineOnly(R = !1) {
      c(R), O();
    },
    get showStateOutlinesOnTop() {
      return f();
    },
    set showStateOutlinesOnTop(R = !1) {
      f(R), O();
    },
    get hexFlip() {
      return p();
    },
    set hexFlip(R = "None") {
      p(R), O();
    }
  });
}
ge(
  Fr,
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
var Di = /* @__PURE__ */ Re('<g class="svelte-1hugu1z"><path d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z" stroke-width="2" class="svelte-1hugu1z"></path><path d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064" stroke-width="2" fill="none" class="svelte-1hugu1z"></path></g>'), Mi = /* @__PURE__ */ Re('<g class="hex-map-arrows svelte-1hugu1z"></g>');
const ki = {
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
function tn(e, t) {
  le(t, !0), Je(e, ki);
  let o = A(t, "hexes", 7), n = A(t, "offset", 7), r = A(t, "arrowData", 7), s = A(t, "arrowHeight", 7), a = A(t, "getColourForValue", 7), i = A(t, "getRotationForValue", 7), u = /* @__PURE__ */ Y(() => o().map((c) => ({
    id: c.id,
    coordPx: c.coordPx,
    value: r()[c.id]
  })).filter(({ value: c }) => typeof c == "number"));
  function l(c) {
    const h = Math.abs(c);
    return Math.min(1.5, 0.3 + h / 20);
  }
  var d = Mi();
  return Ze(d, 21, () => P(u), Xe, (c, f) => {
    let p = () => P(f).coordPx, h = () => P(f).value;
    var g = Di(), v = U(g), L = ee(v);
    B(g), _e(
      (y, x, N, m) => {
        Te(g, "transform", y), he(g, "opacity", h() === 0 ? 0 : 1), Te(v, "transform", x), he(v, "fill", N), Te(L, "transform", m), he(L, "stroke", N);
      },
      [
        () => `translate(${p().join(" ")}) rotate(${i()(h())})`,
        () => `scale(${l(h())} ${h() * s()})`,
        () => a()(h()),
        () => `translate(0 ${-63 * h() * s()}) rotate(${h() < 0 ? 180 : 0}) scale(${l(h())})`
      ]
    ), V(c, g);
  }), B(d), _e((c) => Te(d, "transform", c), [
    () => `translate(${Po(n(), "").join(",")})`
  ]), Pt(3, d, () => xt, () => ({ duration: 750 })), V(e, d), ce({
    get hexes() {
      return o();
    },
    set hexes(c) {
      o(c), O();
    },
    get offset() {
      return n();
    },
    set offset(c) {
      n(c), O();
    },
    get arrowData() {
      return r();
    },
    set arrowData(c) {
      r(c), O();
    },
    get arrowHeight() {
      return s();
    },
    set arrowHeight(c) {
      s(c), O();
    },
    get getColourForValue() {
      return a();
    },
    set getColourForValue(c) {
      a(c), O();
    },
    get getRotationForValue() {
      return i();
    },
    set getRotationForValue(c) {
      i(c), O();
    }
  });
}
ge(
  tn,
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
const Fi = { pct: { OTH: 11.47, IND: 7.84, TOP: 2.27, LNP: 29.82, ALP: 36.18, GRN: 12.42 } }, Bi = { pct: { IND: 4.6, ALP: 39.62, GRN: 22.81, LNP: 27.25, OTH: 4.18, TOP: 1.54 } }, Wi = { pct: { TOP: 3.95, OTH: 4.92, GRN: 13.99, ALP: 43.52, LNP: 33.62 } }, Vi = { pct: { LNP: 47.25, GRN: 5.4, ALP: 33.73, TOP: 2.05, OTH: 11.56 } }, $i = { pct: { ALP: 44.5, LNP: 30.3, TOP: 2.07, OTH: 11.65, GRN: 8.17, ONP: 3.31 } }, Ui = { pct: { ALP: 32.27, TOP: 1.86, LNP: 48.2, GRN: 8.98, OTH: 8.69 } }, Ki = { pct: { GRN: 11.12, LNP: 53.54, TOP: 1.57, OTH: 11.43, IND: 2.59, ALP: 19.75 } }, Yi = { pct: { OTH: 17.78, LNP: 24.99, ALP: 50.09, TOP: 2.5, GRN: 4.64 } }, ji = { pct: { GRN: 13.15, LNP: 57.89, TOP: 1.77, OTH: 6.87, ALP: 20.32 } }, zi = { pct: { OTH: 28.18, ALP: 20.87, TOP: 3.05, LNP: 42.19, GRN: 5.71 } }, qi = { pct: { OTH: 15.47, IND: 1.57, TOP: 4.1, GRN: 4.57, LNP: 25.23, ALP: 49.06 } }, Qi = { pct: { LNP: 59.8, OTH: 7.72, ALP: 21.68, ONP: 3.27, GRN: 6.4, TOP: 1.13 } }, Xi = { pct: { OTH: 11.76, LNP: 43.41, TOP: 2.79, ALP: 12.72, IND: 23.86, GRN: 5.47 } }, Zi = { pct: { LNP: 29.2, GRN: 14.23, ALP: 43.95, OTH: 9.02, TOP: 3.59 } }, Ji = { pct: { TOP: 5.02, OTH: 7.7, LNP: 38.3, GRN: 7.02, ALP: 39.01, IND: 2.94 } }, el = { pct: { ALP: 36.5, LNP: 40.97, GRN: 8.18, IND: 3.88, OTH: 7.89, TOP: 2.58 } }, tl = { pct: { LNP: 46.08, OTH: 12.72, ALP: 13.3, IND: 19.79, TOP: 3.88, GRN: 4.23 } }, ol = { pct: { OTH: 17.93, ALP: 47.39, TOP: 3.76, GRN: 4.81, LNP: 26.11 } }, nl = { pct: { GRN: 9.45, IND: 6.67, TOP: 3.2, ALP: 34.29, OTH: 6.88, LNP: 39.5 } }, rl = { pct: { OTH: 7.73, LNP: 20.83, TOP: 1.15, GRN: 21.59, ALP: 48.69 } }, sl = { pct: { OTH: 11.39, GRN: 5.13, LNP: 37.84, ALP: 42.86, TOP: 2.79 } }, al = { pct: { LNP: 50.41, GRN: 6.58, OTH: 9.79, TOP: 2.35, ALP: 28.89, IND: 1.97 } }, il = { pct: { ALP: 24.86, TOP: 4.51, OTH: 10.48, LNP: 49.84, GRN: 4.77, IND: 5.54 } }, ll = { pct: { ONP: 19.66, LNP: 21.36, OTH: 14.6, TOP: 3.93, GRN: 6.25, ALP: 34.2 } }, cl = { pct: { GRN: 11.4, OTH: 10.09, ALP: 42.55, TOP: 1.65, LNP: 34.32 } }, ul = { pct: { OTH: 17.53, ALP: 31.67, LNP: 41.31, GRN: 4.36, TOP: 2.58, IND: 2.54 } }, dl = { pct: { ALP: 21.9, LNP: 44.87, TOP: 3.68, OTH: 18.98, IND: 4.65, GRN: 5.92 } }, fl = { pct: { OTH: 14.17, ALP: 43.55, ONP: 7.84, LNP: 28.12, TOP: 2.3, GRN: 4.03 } }, hl = { pct: { TOP: 2.25, OTH: 8.54, IND: 11.61, GRN: 10.94, ALP: 16.14, LNP: 50.51 } }, pl = { pct: { LNP: 42.93, GRN: 8.76, ALP: 36.63, OTH: 7.85, TOP: 3.83 } }, vl = { pct: { TOP: 3.43, ONP: 7.25, OTH: 15.18, ALP: 40.52, GRN: 4.34, LNP: 29.28 } }, gl = { pct: { ALP: 22.74, LNP: 58.92, TOP: 2.6, OTH: 8.08, GRN: 7.66 } }, Nl = { pct: { IND: 19.7, OTH: 8.94, ALP: 11.88, LNP: 51.08, GRN: 4.13, TOP: 4.27 } }, Pl = { pct: { ALP: 43.21, GRN: 14.7, OTH: 11.3, TOP: 3.18, LNP: 27.6 } }, xl = { pct: { IND: 4.61, OTH: 8.84, TOP: 3.05, GRN: 11.13, LNP: 47.27, ALP: 25.11 } }, ml = { pct: { OTH: 13.44, LNP: 47.79, GRN: 3.93, ALP: 22.18, IND: 6.74, TOP: 5.92 } }, Ol = { pct: { LNP: 37.83, ALP: 41.31, TOP: 2.37, GRN: 6.63, OTH: 11.87 } }, Al = { pct: { LNP: 30.62, ONP: 13.33, ALP: 38.68, TOP: 3.4, GRN: 6.5, OTH: 7.48 } }, Ll = { pct: { OTH: 10.33, GRN: 7.59, ALP: 34.93, LNP: 45.36, TOP: 1.8 } }, Tl = { pct: { OTH: 12.67, TOP: 3.61, ALP: 29.35, IND: 1.44, LNP: 34.12, GRN: 18.81 } }, wl = { pct: { LNP: 56.84, GRN: 5.88, ALP: 21.97, TOP: 10.16, OTH: 5.16 } }, yl = { pct: { OTH: 12.13, TOP: 2.61, IND: 2.81, LNP: 43.47, GRN: 7.34, ALP: 31.64 } }, _l = { pct: { OTH: 14.56, ALP: 38.5, TOP: 4.24, GRN: 7.73, LNP: 34.98 } }, bl = { pct: { LNP: 25.6, OTH: 8.1, ALP: 47.53, TOP: 1.39, GRN: 17.38 } }, Rl = { pct: { OTH: 7.81, IND: 42.41, ALP: 6.28, TOP: 0.64, LNP: 37.04, GRN: 5.82 } }, Cl = { pct: { TOP: 3.68, OTH: 19.25, GRN: 6.2, ALP: 45.17, LNP: 25.69 } }, El = { pct: { IND: 32.02, ALP: 10.62, TOP: 0.68, OTH: 3.37, LNP: 46.01, GRN: 7.31 } }, Sl = { pct: { OTH: 16.11, LNP: 31.19, GRN: 4.75, IND: 2, TOP: 3.71, ALP: 42.23 } }, Hl = { pct: { TOP: 8.19, OTH: 14.38, LNP: 23.62, ALP: 45.26, GRN: 8.55 } }, Il = { pct: { ALP: 42.54, GRN: 7.82, TOP: 2.68, OTH: 7.75, IND: 4.16, LNP: 35.04 } }, Gl = { pct: { ALP: 38.29, OTH: 6.59, LNP: 36.39, GRN: 11.32, TOP: 2.75, IND: 4.66 } }, Dl = { pct: { IND: 5.75, OTH: 11.76, ALP: 28.92, ONP: 15.54, LNP: 26.85, TOP: 3.14, GRN: 8.03 } }, Ml = { pct: { TOP: 2.47, GRN: 11.35, ONP: 3.89, LNP: 48.04, OTH: 4.07, ALP: 30.19 } }, kl = { pct: { GRN: 11.59, LNP: 47.02, TOP: 3.48, OTH: 5.19, ONP: 7.05, ALP: 25.68 } }, Fl = { pct: { ONP: 2.43, LNP: 46.64, TOP: 1.36, GRN: 21.81, OTH: 3.9, ALP: 23.87 } }, Bl = { pct: { GRN: 4.53, OTH: 13.5, IND: 2.33, LNP: 38.08, ALP: 22.24, ONP: 15.9, TOP: 3.42 } }, Wl = { pct: { OTH: 17.68, ONP: 12.17, LNP: 39.94, ALP: 18.86, GRN: 4.2, IND: 2.59, TOP: 4.56 } }, Vl = { pct: { GRN: 9.54, LNP: 43.93, ALP: 29.96, IND: 2.27, TOP: 2.15, ONP: 4.95, OTH: 7.19 } }, $l = { pct: { OTH: 10.7, ALP: 21.4, ONP: 8.15, GRN: 8.56, LNP: 46.33, TOP: 4.86 } }, Ul = { pct: { TOP: 2.86, OTH: 10.23, GRN: 11.78, LNP: 46.43, ONP: 7.34, IND: 1.26, ALP: 20.1 } }, Kl = { pct: { TOP: 3.3, ALP: 21.16, GRN: 11.81, ONP: 8.26, LNP: 47.64, OTH: 7.83 } }, Yl = { pct: { ALP: 26.98, TOP: 4, GRN: 2.89, IND: 3.56, ONP: 18.46, OTH: 8.42, LNP: 35.69 } }, jl = { pct: { ONP: 11.26, GRN: 8.32, TOP: 3.85, LNP: 41.49, ALP: 28.14, OTH: 6.94 } }, zl = { pct: { LNP: 40.05, ALP: 30.26, GRN: 23.12, TOP: 1.42, ONP: 2.07, OTH: 3.09 } }, ql = { pct: { GRN: 7.71, ONP: 12.67, OTH: 6.1, LNP: 51.63, TOP: 3.84, ALP: 18.06 } }, Ql = { pct: { ONP: 10.43, TOP: 5.36, OTH: 18.45, GRN: 6.88, LNP: 34.92, ALP: 23.95 } }, Xl = { pct: { ONP: 13.64, LNP: 42.43, GRN: 3.43, IND: 4.65, OTH: 10.69, TOP: 4.03, ALP: 21.14 } }, Zl = { pct: { TOP: 6.38, OTH: 46.06, GRN: 4.95, LNP: 26.33, ALP: 16.27 } }, Jl = { pct: { OTH: 16.11, IND: 2.67, ALP: 26.94, ONP: 5.66, TOP: 3.71, LNP: 35.18, GRN: 9.73 } }, e1 = { pct: { ONP: 5.16, OTH: 5.37, LNP: 39.36, ALP: 34.4, GRN: 13.53, TOP: 2.18 } }, t1 = { pct: { LNP: 36.33, TOP: 3.16, OTH: 9.62, ALP: 32.11, ONP: 12.45, GRN: 6.32 } }, o1 = { pct: { ALP: 14.94, LNP: 53.79, OTH: 10.45, TOP: 3.49, ONP: 14.05, GRN: 3.29 } }, n1 = { pct: { ALP: 21.4, OTH: 12.84, IND: 1.67, GRN: 10.29, LNP: 45.19, TOP: 3.12, ONP: 5.49 } }, r1 = { pct: { OTH: 13.06, LNP: 48.2, ONP: 6.03, GRN: 9.06, TOP: 3.48, ALP: 20.18 } }, s1 = { pct: { OTH: 4.67, ALP: 34.1, GRN: 16.26, ONP: 3.21, LNP: 39.61, TOP: 2.16 } }, a1 = { pct: { LNP: 32.92, GRN: 11.08, ALP: 40.51, TOP: 2.49, ONP: 6, OTH: 6.99 } }, i1 = { pct: { TOP: 3.19, LNP: 46.37, ONP: 7.25, ALP: 29.74, OTH: 5.03, GRN: 8.42 } }, l1 = { pct: { ALP: 38.22, TOP: 3.41, GRN: 8.38, ONP: 7.89, OTH: 13.16, LNP: 28.93 } }, c1 = { pct: { ALP: 23.85, TOP: 1.5, OTH: 5.25, ONP: 2.11, LNP: 47.44, GRN: 19.86 } }, u1 = { pct: { GRN: 9.47, ALP: 20.72, TOP: 3.44, LNP: 44.86, IND: 4.28, OTH: 6.92, ONP: 10.32 } }, d1 = { pct: { TOP: 4.6, GRN: 6.74, IND: 5.01, ALP: 17.6, OTH: 10.71, ONP: 13.16, LNP: 42.19 } }, f1 = { pct: { OTH: 8.13, GRN: 15.14, ALP: 38.78, LNP: 34.82, TOP: 3.13 } }, h1 = { pct: { GRN: 6.46, TOP: 5.59, LNP: 54.65, OTH: 13.45, ALP: 19.84 } }, p1 = { pct: { OTH: 8.27, GRN: 11.4, LNP: 43.07, ALP: 33.01, TOP: 1.8, IND: 2.45 } }, v1 = { pct: { OTH: 14.12, ALP: 21.25, ONP: 8.09, IND: 1.62, TOP: 3.5, LNP: 47.14, GRN: 4.28 } }, g1 = { pct: { OTH: 8.95, TOP: 4.15, ALP: 41.23, LNP: 35.16, GRN: 10.51 } }, N1 = { pct: { ALP: 48.5, LNP: 30.42, GRN: 8.83, OTH: 7.49, TOP: 4.76 } }, P1 = { pct: { ALP: 46.24, LNP: 31.4, OTH: 7.95, GRN: 8.24, TOP: 6.15 } }, x1 = { pct: { LNP: 36.51, GRN: 8.98, OTH: 38.18, TOP: 3.1, ALP: 13.24 } }, m1 = { pct: { ALP: 47.91, LNP: 24.29, TOP: 6.62, GRN: 6.78, OTH: 9.34, IND: 5.06 } }, O1 = { pct: { GRN: 10.58, LNP: 47.86, ALP: 28.26, OTH: 8.51, TOP: 2.29, IND: 2.51 } }, A1 = { pct: { GRN: 10.01, ALP: 33.18, OTH: 6.82, LNP: 41.73, IND: 3.62, TOP: 4.64 } }, L1 = { pct: { TOP: 3.42, IND: 11.72, OTH: 8.02, LNP: 37.4, GRN: 4.49, ALP: 29.79, ONP: 5.15 } }, T1 = { pct: { IND: 48.82, ALP: 19.73, LNP: 16.95, GRN: 9.34, TOP: 2.72, OTH: 2.44 } }, w1 = { pct: { GRN: 15.74, LNP: 30.28, OTH: 4.88, ALP: 42.61, TOP: 6.48 } }, y1 = { pct: { LNP: 38.04, ALP: 34.79, GRN: 9.02, ONP: 7.76, TOP: 5.82, OTH: 4.57 } }, _1 = { pct: { LNP: 52.68, GRN: 8.53, ALP: 28.71, TOP: 3.47, OTH: 6.6 } }, b1 = { pct: { OTH: 8.46, TOP: 4.42, IND: 3.66, GRN: 8.45, LNP: 29.3, ALP: 45.71 } }, R1 = { pct: { OTH: 7.03, GRN: 10.74, ALP: 41.84, TOP: 4.08, LNP: 30.39, ONP: 5.92 } }, C1 = { pct: { OTH: 9.03, TOP: 4.04, LNP: 27.57, ALP: 52.47, GRN: 6.9 } }, E1 = { pct: { OTH: 19.01, GRN: 6.12, ALP: 48.91, TOP: 3.15, LNP: 22.81 } }, S1 = { pct: { IND: 2.16, OTH: 16.09, TOP: 2.44, LNP: 42.32, ALP: 26.75, GRN: 10.23 } }, H1 = { pct: { IND: 2.33, OTH: 10.64, GRN: 11.3, LNP: 41.43, TOP: 1.53, ALP: 32.76 } }, I1 = { pct: { IND: 1.62, OTH: 13.37, TOP: 1.85, GRN: 20.11, ALP: 44.5, LNP: 18.55 } }, G1 = { pct: { OTH: 9.62, ALP: 34.07, GRN: 8.68, IND: 4.85, LNP: 40.65, TOP: 2.13 } }, D1 = { pct: { ALP: 45.91, LNP: 32.64, GRN: 12.6, TOP: 5.29, OTH: 3.56 } }, M1 = { pct: { OTH: 10.75, IND: 1.59, GRN: 8.61, LNP: 45.88, TOP: 1.97, ALP: 31.2 } }, k1 = { pct: { OTH: 15.21, TOP: 2.46, ALP: 36.54, GRN: 7.96, LNP: 37.83 } }, F1 = { pct: { IND: 14.8, OTH: 9.22, LNP: 43.94, ALP: 23.27, GRN: 6.4, TOP: 2.37 } }, B1 = { pct: { TOP: 7.42, LNP: 24.27, ALP: 47.37, OTH: 7.81, GRN: 7.75, IND: 5.38 } }, W1 = { pct: { ALP: 46.95, GRN: 15.97, LNP: 28.3, TOP: 5.28, OTH: 3.51 } }, V1 = { pct: { OTH: 13.96, TOP: 4.17, ALP: 21.99, IND: 2.98, LNP: 51.18, GRN: 5.72 } }, $1 = { pct: { TOP: 1.91, OTH: 3.84, ALP: 27.68, GRN: 13.73, LNP: 51.51, IND: 1.33 } }, U1 = { pct: { TOP: 7.43, IND: 8.31, GRN: 6.69, ALP: 47.12, LNP: 24.53, OTH: 5.92 } }, K1 = { pct: { ALP: 48.64, GRN: 6.82, TOP: 6.03, LNP: 34.39, OTH: 4.12 } }, Y1 = { pct: { TOP: 3.5, ALP: 43.46, LNP: 37.58, GRN: 8.75, OTH: 6.71 } }, j1 = { pct: { GRN: 4.03, OTH: 7.1, IND: 30.94, LNP: 42.6, TOP: 3.77, ALP: 11.56 } }, z1 = { pct: { GRN: 10.71, LNP: 33.75, OTH: 8.84, ALP: 42.93, TOP: 3.77 } }, q1 = { pct: { TOP: 3.62, ALP: 40.71, OTH: 4.47, LNP: 37.4, GRN: 13.8 } }, Q1 = { pct: { TOP: 1.16, IND: 9.89, LNP: 47.94, ALP: 16.33, OTH: 4.07, GRN: 20.61 } }, X1 = { pct: { GRN: 7.5, OTH: 8.8, LNP: 43.68, ONP: 4.64, TOP: 2.43, ALP: 32.95 } }, Z1 = { pct: { OTH: 9.76, LNP: 28.84, ALP: 49.41, TOP: 4.55, GRN: 7.44 } }, J1 = { pct: { IND: 2, GRN: 23.21, OTH: 7.44, LNP: 35.79, TOP: 1.12, ALP: 30.43 } }, ec = { pct: { LNP: 41.48, IND: 19.1, OTH: 19.36, ALP: 13.94, TOP: 3, GRN: 3.12 } }, tc = { pct: { TOP: 3.48, GRN: 14.38, ALP: 45.69, LNP: 33.56, OTH: 2.9 } }, oc = { pct: { GRN: 7.91, OTH: 11.93, ALP: 37.36, LNP: 32.68, IND: 1.53, ONP: 5.61, TOP: 2.97 } }, nc = { pct: { OTH: 9.9, GRN: 47.81, IND: 1.2, LNP: 20.82, ALP: 19.14, TOP: 1.12 } }, rc = { pct: { OTH: 8.29, LNP: 50.01, ALP: 29.04, TOP: 2.56, GRN: 10.09 } }, sc = { pct: { IND: 5.32, ONP: 7.28, ALP: 28.21, GRN: 6.7, LNP: 44.24, TOP: 3.83, OTH: 4.41 } }, ac = { pct: { LNP: 47.45, IND: 7.87, TOP: 4.93, ALP: 17.96, GRN: 3.9, ONP: 10.44, OTH: 7.46 } }, ic = { pct: { ALP: 57.26, TOP: 4.77, GRN: 6.33, OTH: 8.83, LNP: 21.15, IND: 1.66 } }, lc = { pct: { GRN: 6.1, TOP: 5.79, ALP: 25.13, IND: 9.99, LNP: 49.14, OTH: 3.85 } }, cc = { pct: { OTH: 12.14, LNP: 17.18, GRN: 25.49, TOP: 2.97, ALP: 42.21 } }, uc = { pct: { OTH: 13.11, ALP: 37.86, LNP: 27.97, GRN: 10.41, TOP: 2.71, ONP: 7.94 } }, dc = { pct: { GRN: 8.81, ALP: 38.33, ONP: 5.44, OTH: 12.95, IND: 1.22, LNP: 31.27, TOP: 1.99 } }, fc = { pct: { OTH: 12.2, ONP: 6.72, GRN: 7.07, TOP: 2.12, LNP: 46.06, ALP: 25.83 } }, hc = { pct: { GRN: 9.53, ALP: 36.07, TOP: 2.42, OTH: 9.38, ONP: 5.33, LNP: 37.28 } }, pc = { pct: { TOP: 1.21, GRN: 15.05, LNP: 52.46, IND: 7.5, ONP: 1.15, OTH: 5.57, ALP: 17.06 } }, vc = { pct: { LNP: 51.84, OTH: 8.32, ONP: 9.08, GRN: 7.7, ALP: 20.51, TOP: 2.55 } }, gc = { pct: { GRN: 12.15, OTH: 9.87, LNP: 49.51, ONP: 5.6, IND: 1.29, ALP: 19.95, TOP: 1.63 } }, Nc = { pct: { OTH: 10.36, ALP: 35.97, ONP: 3.62, TOP: 1.83, LNP: 33.09, GRN: 15.13 } }, Pc = { pct: { OTH: 11.85, LNP: 41.23, ALP: 28.95, ONP: 4.99, TOP: 2.15, GRN: 10.83 } }, xc = { pct: { ONP: 4.4, LNP: 48.65, GRN: 11.48, OTH: 7.95, ALP: 23.27, IND: 2.56, TOP: 1.7 } }, mc = { pct: { LNP: 51.15, GRN: 7.9, ALP: 19.89, TOP: 1.74, OTH: 11.42, ONP: 7.9 } }, Oc = { pct: { ONP: 7.63, ALP: 27.02, LNP: 41.92, OTH: 11.67, GRN: 8.08, TOP: 2.32, IND: 1.36 } }, Ac = { pct: { OTH: 9.11, ALP: 32.86, LNP: 35.68, TOP: 1.81, GRN: 18.01, ONP: 2.54 } }, Lc = { pct: { LNP: 42.08, OTH: 11.08, GRN: 11.6, TOP: 1.66, ONP: 2.28, ALP: 31.29 } }, Tc = { pct: { ALP: 24.81, ONP: 1.99, IND: 2.57, OTH: 7.57, GRN: 10.68, LNP: 51.28, TOP: 1.11 } }, wc = {
  BEAN: Fi,
  CANB: Bi,
  FENN: Wi,
  BANK: Vi,
  BART: $i,
  BENN: Ui,
  BERO: Ki,
  BLAX: Yi,
  BRFD: ji,
  CALA: zi,
  CHIF: qi,
  COOK: Qi,
  COWP: Xi,
  CUNN: Zi,
  DOBE: Ji,
  EMON: el,
  FARR: tl,
  FOWL: ol,
  GILM: nl,
  GRAY: rl,
  GREE: sl,
  HUGH: al,
  HUME: il,
  HUNT: ll,
  KSMI: cl,
  LIND: ul,
  LYNE: dl,
  MACA: fl,
  MACK: hl,
  MACQ: pl,
  MCMA: vl,
  MITC: gl,
  NENG: Nl,
  NEWC: Pl,
  "!!!!!": { pct: { OTH: 6.24, ALP: 24.47, TOP: 1.23, GRN: 17.58, IND: 2.11, LNP: 48.37 } },
  PAGE: xl,
  PARK: ml,
  PARR: Ol,
  PATE: Al,
  REID: Ll,
  RICH: Tl,
  RIVE: wl,
  ROBE: yl,
  SHOR: _l,
  SYDN: bl,
  WARR: Rl,
  WATS: Cl,
  WENT: El,
  WERR: Sl,
  WHIT: Hl,
  LING: Il,
  SOLO: Gl,
  BLAI: Dl,
  BONN: Ml,
  BOWM: kl,
  BRIS: Fl,
  CAPR: Bl,
  DAWS: Wl,
  DICK: Vl,
  FADD: $l,
  FAIR: Ul,
  FISH: Kl,
  FLYN: Yl,
  FORD: jl,
  GRIF: zl,
  GROO: ql,
  HERB: Ql,
  HINK: Xl,
  KENN: Zl,
  LEIC: Jl,
  LILL: e1,
  LONG: t1,
  MARA: o1,
  MCPH: n1,
  MONC: r1,
  MORE: s1,
  OXLE: a1,
  PETR: i1,
  RANK: l1,
  RYAN: c1,
  WBAY: u1,
  WRIG: d1,
  ADEL: f1,
  BARK: h1,
  BOOT: p1,
  GREY: v1,
  HIND: g1,
  KING: N1,
  MAKI: P1,
  MAYO: x1,
  SPEN: m1,
  STUR: O1,
  BASS: A1,
  BRAD: L1,
  CLAR: T1,
  FRAN: w1,
  LYON: y1,
  ASTO: _1,
  BALL: b1,
  BEND: R1,
  BRUC: C1,
  CALW: E1,
  CASE: S1,
  CHIS: H1,
  COOP: I1,
  CORA: G1,
  CORI: D1,
  DEAK: M1,
  DUNK: k1,
  FLIN: F1,
  FRAS: B1,
  GELL: W1,
  GIPP: V1,
  GOLD: $1,
  GORT: U1,
  HOLT: K1,
  HOTH: Y1,
  INDI: j1,
  ISAA: z1,
  JAGA: q1,
  KOOY: Q1,
  LTRO: X1,
  LALO: Z1,
  MACN: J1,
  MALL: ec,
  MARI: tc,
  MCEW: oc,
  MELB: nc,
  MENZ: rc,
  MONA: sc,
  NICH: ac,
  SCUL: ic,
  WANN: lc,
  WILL: cc,
  BRAN: uc,
  BURT: dc,
  CANN: fc,
  COWA: hc,
  CURT: pc,
  DURA: vc,
  FORR: gc,
  FREM: Nc,
  HASL: Pc,
  MOOR: xc,
  OCON: mc,
  PEAR: Oc,
  PERT: Ac,
  SWAN: Lc,
  TANG: Tc
}, so = no(), yc = { url: "https://abcnewsdata.sgp1.digitaloceanspaces.com/elections-2025-results-data__ash-test/latest.json" }, _c = {
  liveData: yc
}, bc = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m" }, Rc = { LIB: "LNP", LNP: "LNP", CLP: "LNP", NAT: "LNP", ALP: "ALP", UAP: "TOP" }, Br = {
  hashCodes: bc,
  synonyms: Rc
};
function Cc(e, t = (o) => !0) {
  return e.data.electorates.reduce((o, n) => {
    const r = n.code;
    if (!n.accumulatedCandidates)
      return console.error("Missing accumulatedCandidates"), o;
    const a = n.accumulatedCandidates.filter(
      (i) => t(Br.synonyms[i.party.code] || i.party.code)
    ).reduce((i, u) => {
      var c;
      const l = (c = u == null ? void 0 : u.simple) == null ? void 0 : c.pct, d = l ? Number(l) : 0;
      return i + d;
    }, 0);
    return o[r] = a, o;
  }, {});
}
let $t;
async function Wr({ cache: e } = { cache: !0 }) {
  return e && $t || ($t = fetch(_c.liveData.url).then((t) => t.json())), $t;
}
function Vr(e, t) {
  le(t, !0);
  const [o, n] = No(), { resetViewboxPadding: r, setViewboxPadding: s } = vr("viewbox-padding") || {};
  let a = A(t, "arrowChart", 7), i = A(t, "hexes", 7), u = A(t, "offset", 7), l = fe(re({})), d = fe(void 0), c = /* @__PURE__ */ Y(() => String(a().split(" ")[0])), f = /* @__PURE__ */ Y(() => P(d) ? Cc(P(d), (v) => v === P(c)) : {});
  Ge(() => {
    const v = P(d), L = P(c), y = P(f);
    !v || !y || F(l, re(v.data.electorates.reduce(
      (x, N) => {
        var R;
        const m = N.code, w = (R = wc[m]) == null ? void 0 : R.pct;
        let b = (w == null ? void 0 : w[L]) || 0;
        const C = P(f)[m], M = b && C ? C - b : 0;
        return x[m] = M, x;
      },
      {}
    )));
  }), Ge(() => {
    It(so, (v) => `Change in first pref
for ${P(c)}: ${P(l)[v] ? P(l)[v].toFixed(3) + "%" : "not applicable"}`);
  }), at(() => () => {
    It(so, void 0);
  });
  let p = /* @__PURE__ */ Y(() => () => `var(--a-${P(c).length > 3 ? "OTH" : P(c).toUpperCase()}, hotpink)`);
  const h = () => 20;
  at(() => {
    const v = s("HexMapArrowsFirsPreference", [30, 0, 30, 0]);
    return Wr({ cache: !0 }).then((L) => {
      F(d, re(L));
    }), () => r(v);
  }), tn(e, {
    get arrowData() {
      return P(l);
    },
    arrowHeight: 0.08,
    get hexes() {
      return i();
    },
    get offset() {
      return u();
    },
    getRotationForValue: h,
    get getColourForValue() {
      return P(p);
    }
  });
  var g = ce({
    get arrowChart() {
      return a();
    },
    set arrowChart(v) {
      a(v), O();
    },
    get hexes() {
      return i();
    },
    set hexes(v) {
      i(v), O();
    },
    get offset() {
      return u();
    },
    set offset(v) {
      u(v), O();
    }
  });
  return n(), g;
}
ge(Vr, { arrowChart: {}, hexes: {}, offset: {} }, [], [], !0);
function $r(e, t) {
  le(t, !0);
  const [o, n] = No(), { resetViewboxPadding: r, setViewboxPadding: s } = vr("viewbox-padding") || {};
  let a = A(t, "hexes", 7), i = A(t, "offset", 7), u = fe(void 0), l = /* @__PURE__ */ Y(() => {
    const v = P(u);
    if (!v)
      return {};
    const L = ["LIB", "LNP", "NAT", "CLP"];
    return v.data.electorates.reduce(
      (y, x) => {
        var b, C;
        const [N, m] = x.swingDial[0].party.code === "ALP" ? x.swingDial : [...x.swingDial].reverse();
        return N.party.code === "ALP" && L.includes(m.party.code) && (y[x.code] = Number(((b = N.predicted2CP) == null ? void 0 : b.swing) || ((C = N.simple2CP) == null ? void 0 : C.swing) || 0)), y;
      },
      {}
    );
  });
  Ge(() => {
    It(so, (v) => `Swing: ${P(l)[v] ? `${P(l)[v].toFixed(2)}% to ${P(l)[v] > 0 ? "ALP" : "Coalition"}` : "not applicable"}`);
  }), at(() => () => {
    It(so, void 0);
  });
  let d = /* @__PURE__ */ Y(() => (v) => `var(--a-${v < 0 ? "LNP" : "ALP"}, hotpink)`);
  const c = (v) => v < 0 ? -135 : -45;
  at(() => {
    Wr({ cache: !0 }).then((L) => {
      F(u, re(L));
    });
    const v = s("HexMapArrowsSwing", [30, 0, 30, 0]);
    return () => r(v);
  });
  var f = pt(), p = nt(f);
  {
    var h = (v) => {
      tn(v, {
        get arrowData() {
          return P(l);
        },
        arrowHeight: 0.06,
        get hexes() {
          return a();
        },
        get offset() {
          return i();
        },
        getRotationForValue: c,
        get getColourForValue() {
          return P(d);
        }
      });
    };
    Ae(p, (v) => {
      P(u) && v(h);
    });
  }
  V(e, f);
  var g = ce({
    get hexes() {
      return a();
    },
    set hexes(v) {
      a(v), O();
    },
    get offset() {
      return i();
    },
    set offset(v) {
      i(v), O();
    }
  });
  return n(), g;
}
ge($r, { hexes: {}, offset: {} }, [], [], !0);
function Ec() {
  const e = no([0, 0, 0, 0]), t = no("none");
  let o = 0;
  function n(a, i) {
    e.set(i);
    const u = [a, o++].join();
    return t.set(u), u;
  }
  function r(a) {
    Er(t) === a && (e.set([0, 0, 0, 0]), t.set("none"));
  }
  const s = {
    setViewboxPadding: n,
    resetViewboxPadding: r
  };
  return na("viewbox-padding", s), {
    viewboxPadding: e,
    viewboxApi: s
  };
}
function Sn(e, t = [0, 0, 0, 0]) {
  const [o, n, r, s] = t, [a, i, u, l] = e;
  return [a - s, i - o, u + s + n, l + o + r];
}
const Sc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABvBAAAbwQGXmrkfAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPpJREFUOI2d0rErhVEYwOHn09dVpFsGRVkMRtnsWCwyUiKRKPGn6FJkRJgsBhtlUgZlsLAZZDCIotw4htvN8dW97v3e8Xd6n06dk4QQEgS/M4BVDMo3NyilEdqNZYwhyQE+YAtnCCmKmMEUCjnAF+zjEOVqTEIIF2jPAX7gAHt4j3oR82kO9Asn2MFz1AuYxBw60ibRK6zjPmoJRlQevKcaG4VvUcJ1pg9hDf3Zhf/gJ2zj1N8v2YdFjNZarAW/YhdH+Ix6FxYwgZZ6N8rCZRyrPMxb1NswjVm01gOz8DfOsYHHzPk4ltDZCBgvXmITd1FPMIwV9DYDVucHs4YzzzgMYBMAAAAASUVORK5CYII=";
var Hc = /* @__PURE__ */ $e('<div class="hexmap__labels svelte-82t7dm"><!></div>'), Ic = /* @__PURE__ */ $e('<div class="hexmap svelte-82t7dm"><div><svg class="svelte-82t7dm"><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="10.5" height="6" preserveAspectRatio="xMidYMid"><image x="0" y="0" width="22" height="12" transform="scale(0.5)" transform-origin="top left"></image></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const Gc = {
  hash: "svelte-82t7dm",
  code: ".hexmap.svelte-82t7dm {position:relative;width:100%;height:100%;position:relative;}.hexmap.svelte-82t7dm * {box-sizing:border-box;}.hexmap__labels.svelte-82t7dm {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-82t7dm svg:where(.svelte-82t7dm) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-82t7dm {position:relative;margin:0 auto;max-height:100%;}"
};
function Ur(e, t) {
  le(t, !0), Je(e, Gc);
  const [o, n] = No(), r = () => Ca($, "$viewboxPadding", o);
  let s = A(t, "config", 23, () => ({})), a = A(t, "layout", 23, () => ({})), i = A(t, "allocations", 23, () => ({})), u = A(t, "focuses", 23, () => ({})), l = A(t, "certainties", 23, () => ({})), d = A(t, "labelsToShow", 23, () => ({})), c = A(t, "showStateLabels", 7, !1), f = A(t, "showElectorateLabels", 7, !1), p = A(t, "showFocusedElectorateLabels", 7, !1), h = A(t, "isStaticLayout", 7, !1), g = A(t, "onClick", 7, ({ code: T }) => {
  }), v = A(t, "onHover", 7, ({ code: T }) => {
  }), L = A(t, "onFocus", 7, ({ code: T }) => {
  }), y = A(t, "customViewbox", 7, null), x = A(t, "onViewboxChange", 7, ({ newViewbox: T }) => {
  }), N = A(t, "isInteractive", 7, !1), m = A(t, "arrowChart", 7, "None"), w = A(t, "selectedElectorate", 7, null), b = A(t, "customElectorateAltText", 7), C = A(t, "showStateOutlinesOnTop", 7, !1), M = A(t, "isInline", 7, !1), R = A(t, "hexFlip", 7, "None"), k = fe(void 0), q = fe(0), _ = fe(0), E = fe(null), G = fe(null);
  const { viewboxPadding: $ } = Ec(), K = Sn(a().viewbox, r()), j = {
    easing: Da,
    duration: M() ? 0 : 1100
  };
  let Ne = new ft(K[0], j), se = new ft(K[1], j), oe = new ft(K[2], j), Ue = new ft(K[3], j);
  Ge(() => {
    const [T, Q, Ye, Oo] = Sn(y() || a().viewbox, r());
    Ne.set(T), se.set(Q), oe.set(Ye), Ue.set(Oo);
  }), Ge(() => {
    x()(a().viewbox);
  }), at(() => {
    if (!P(k))
      return;
    const T = P(k).getBoundingClientRect();
    F(_, T.height / T.width);
  });
  let Tt = /* @__PURE__ */ Y(() => yi({
    isInteractive: N(),
    onClick: g(),
    onHover: (T) => {
      F(G, re(T.code)), v()(T);
    }
  })), Pe = /* @__PURE__ */ Y(() => {
    let T = P(q), Q = oe.current;
    return T ? Q / T + 0.1 : 1;
  });
  var xe = Ic(), Ke = U(xe);
  let sn;
  var lt = U(Ke), xo = U(lt), mo = U(xo), zr = U(mo);
  Te(zr, "href", Sc), B(mo), B(xo);
  var an = ee(xo);
  const qr = /* @__PURE__ */ Y(() => m() !== "None");
  Fr(an, {
    get groups() {
      return s().groups;
    },
    get isStaticLayout() {
      return h();
    },
    get layout() {
      return a();
    },
    get allocations() {
      return i();
    },
    get focuses() {
      return u();
    },
    get certainties() {
      return l();
    },
    get showElectorateLabels() {
      return f();
    },
    get showFocusedElectorateLabels() {
      return p();
    },
    get labelsToShow() {
      return d();
    },
    get showStateOutlinesOnTop() {
      return C();
    },
    get hexFlip() {
      return R();
    },
    get isOutlineOnly() {
      return P(qr);
    }
  });
  var ln = ee(an);
  zt(ln, {
    get groups() {
      return s().groups;
    },
    get id() {
      return P(E);
    },
    get layout() {
      return a();
    },
    type: "focus"
  });
  var cn = ee(ln);
  zt(cn, {
    get groups() {
      return s().groups;
    },
    get id() {
      return w();
    },
    get layout() {
      return a();
    },
    type: "focus"
  });
  var un = ee(cn);
  zt(un, {
    get groups() {
      return s().groups;
    },
    get id() {
      return P(G);
    },
    get layout() {
      return a();
    },
    type: "hover"
  });
  var Qr = ee(un);
  {
    var Xr = (T) => {
      var Q = pt(), Ye = nt(Q);
      Ze(Ye, 17, () => s().groups, Xe, (Oo, wt) => {
        var dn = pt(), ns = nt(dn);
        {
          var rs = (Ao) => {
            var fn = pt(), ss = nt(fn);
            {
              var as = (ct) => {
                $r(ct, {
                  get hexes() {
                    return P(wt).hexes;
                  },
                  get offset() {
                    return a().positions[P(wt).name];
                  }
                });
              }, is = (ct) => {
                Vr(ct, {
                  get hexes() {
                    return P(wt).hexes;
                  },
                  get offset() {
                    return a().positions[P(wt).name];
                  },
                  get arrowChart() {
                    return m();
                  }
                });
              };
              Ae(ss, (ct) => {
                m() === "Labor/Coalition 2CP Swing" ? ct(as) : ct(is, !1);
              });
            }
            V(Ao, fn);
          };
          Ae(ns, (Ao) => {
            a().positions[P(wt).name] && Ao(rs);
          });
        }
        V(Oo, dn);
      }), V(T, Q);
    };
    Ae(Qr, (T) => {
      m() !== "None" && T(Xr);
    });
  }
  B(lt), go(lt, (T) => F(k, T), () => P(k));
  var Zr = ee(lt, 2);
  {
    var Jr = (T) => {
      var Q = Hc(), Ye = U(Q);
      Hr(Ye, {
        get labels() {
          return a().labels;
        },
        get overlayLabels() {
          return a().overlayLabels;
        }
      }), B(Q), V(T, Q);
    };
    Ae(Zr, (T) => {
      c() && T(Jr);
    });
  }
  B(Ke);
  var es = ee(Ke, 2);
  {
    var ts = (T) => {
      Gr(T, {
        get customElectorateAltText() {
          return b();
        },
        get groups() {
          return s().groups;
        },
        get layout() {
          return a();
        },
        onChange: (Q) => {
          F(E, re(Q));
        },
        get onClick() {
          return g();
        },
        get onFocus() {
          return L();
        }
      });
    };
    Ae(es, (T) => {
      N() && T(ts);
    });
  }
  B(xe), _e(
    (T, Q, Ye) => {
      sn = Ho(
        Ke,
        sn,
        {
          class: "hexmap__viz",
          ...P(Tt),
          [Yt]: {
            "hexmap__viz--vertical": P(_) <= 1
          }
        },
        "svelte-82t7dm"
      ), he(Ke, "aspect-ratio", T), Te(lt, "viewBox", Q), Te(mo, "patternTransform", Ye);
    },
    [
      () => P(_) ? P(_).toFixed(3) : null,
      () => [
        Ne.current,
        se.current,
        oe.current,
        Ue.current
      ].join(" "),
      () => `scale(${P(Pe).toFixed(2)})`
    ]
  ), Ra(lt, "clientWidth", (T) => F(q, T)), Pt(3, Ke, () => xt, () => ({ duration: M() ? 0 : 250 })), Pt(3, xe, () => xt, () => ({ duration: 750 })), V(e, xe);
  var os = ce({
    get config() {
      return s();
    },
    set config(T = {}) {
      s(T), O();
    },
    get layout() {
      return a();
    },
    set layout(T = {}) {
      a(T), O();
    },
    get allocations() {
      return i();
    },
    set allocations(T = {}) {
      i(T), O();
    },
    get focuses() {
      return u();
    },
    set focuses(T = {}) {
      u(T), O();
    },
    get certainties() {
      return l();
    },
    set certainties(T = {}) {
      l(T), O();
    },
    get labelsToShow() {
      return d();
    },
    set labelsToShow(T = {}) {
      d(T), O();
    },
    get showStateLabels() {
      return c();
    },
    set showStateLabels(T = !1) {
      c(T), O();
    },
    get showElectorateLabels() {
      return f();
    },
    set showElectorateLabels(T = !1) {
      f(T), O();
    },
    get showFocusedElectorateLabels() {
      return p();
    },
    set showFocusedElectorateLabels(T = !1) {
      p(T), O();
    },
    get isStaticLayout() {
      return h();
    },
    set isStaticLayout(T = !1) {
      h(T), O();
    },
    get onClick() {
      return g();
    },
    set onClick(T = ({ code: Q }) => {
    }) {
      g(T), O();
    },
    get onHover() {
      return v();
    },
    set onHover(T = ({ code: Q }) => {
    }) {
      v(T), O();
    },
    get onFocus() {
      return L();
    },
    set onFocus(T = ({ code: Q }) => {
    }) {
      L(T), O();
    },
    get customViewbox() {
      return y();
    },
    set customViewbox(T = null) {
      y(T), O();
    },
    get onViewboxChange() {
      return x();
    },
    set onViewboxChange(T = ({ newViewbox: Q }) => {
    }) {
      x(T), O();
    },
    get isInteractive() {
      return N();
    },
    set isInteractive(T = !1) {
      N(T), O();
    },
    get arrowChart() {
      return m();
    },
    set arrowChart(T = "None") {
      m(T), O();
    },
    get selectedElectorate() {
      return w();
    },
    set selectedElectorate(T = null) {
      w(T), O();
    },
    get customElectorateAltText() {
      return b();
    },
    set customElectorateAltText(T) {
      b(T), O();
    },
    get showStateOutlinesOnTop() {
      return C();
    },
    set showStateOutlinesOnTop(T = !1) {
      C(T), O();
    },
    get isInline() {
      return M();
    },
    set isInline(T = !1) {
      M(T), O();
    },
    get hexFlip() {
      return R();
    },
    set hexFlip(T = "None") {
      R(T), O();
    }
  });
  return n(), os;
}
ge(
  Ur,
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
let Dc = no({
  allocated: {},
  uncertain: {}
});
const Mc = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#949494", fullStateOutline: "transparent", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "#767676", tileFocusBorder: "black", tileFocusBorderGap: "white", tileInteractBorder: "black" }, kc = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", TOP: "#cc8500", Teal: "#0098a6" }, Fc = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", TOP: "#f5e7cc" }, Hn = {
  c: Mc,
  allocated: kc,
  uncertain: Fc
};
function Kr(e, t) {
  le(t, !0);
  const [o, n] = No();
  let r = A(t, "rootEl", 15), s = A(t, "colours", 7, Hn);
  Ge(() => {
    const i = s(), u = r();
    if (!u)
      return;
    It(Dc, {
      allocated: i.allocated,
      uncertain: i.uncertain
    });
    const l = { allocated: "a", uncertain: "u" };
    Object.entries(i).forEach(([d, c]) => {
      const f = l[d] || d;
      Object.entries(c).forEach(([p, h]) => {
        const g = `--${f}-${p}`;
        u.style.setProperty(g, h);
      });
    });
  }), at(() => {
    r();
  }), go(Zn.body, (i) => r(i), () => r());
  var a = ce({
    get rootEl() {
      return r();
    },
    set rootEl(i) {
      r(i), O();
    },
    get colours() {
      return s();
    },
    set colours(i = Hn) {
      s(i), O();
    }
  });
  return n(), a;
}
ge(Kr, { rootEl: {}, colours: {} }, [], [], !0);
const Bc = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.003006, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 34, top: 30.25, width: 8, name: "NT" }, { left: 65.25, top: 21.25, width: 8, name: "QLD" }, { left: 57.75, top: 43.5, width: 8, name: "NSW" }, { left: 67.5, top: 57.5, width: 8, name: "ACT" }, { left: 58, top: 66.5, width: 8, name: "VIC" }, { left: 58, top: 85.5, width: 8, name: "TAS" }, { left: 34, top: 48.5, width: 8, name: "SA" }, { left: 24.5, top: 53, width: 8, name: "WA" }], overlayLabels: !0 }, Wc = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.25, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 71, top: 63, width: 8, name: "ACT" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, Vc = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, $c = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, Uc = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, Kc = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Yc = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, jc = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, zc = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, qc = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Qc = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Xc = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Zc = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Jc = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, eu = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, tu = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, ou = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, nu = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, ru = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, su = {
  COUNTRY: Bc,
  EXPLODED: Wc,
  EXPLODED_STATES_ONLY: Vc,
  GRID: $c,
  ACT: Uc,
  NSW: Kc,
  NT: Yc,
  QLD: jc,
  SA: zc,
  TAS: qc,
  VIC: Qc,
  WA: Xc,
  ACT_NT: Zc,
  NSW_QLD: Jc,
  NSW_VIC: eu,
  QLD_VIC: tu,
  QLD_WA: ou,
  QLD_NSW_VIC: nu,
  SA_TAS_WA: ru
}, au = 291, iu = 200, lu = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Syd","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"Mcma","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"Rivr","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robs","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shld","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chif","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kngs","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunn","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Bnks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Grnw","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Ling","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxly","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fish","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bow","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lill","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flyn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capr","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dick","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Grif","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fair","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blar","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Bris","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrgt","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hink","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Lcht","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kend","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"Mcph","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Rank","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petr","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Ford","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groo","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Strt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makn","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"King","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brdn","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clrk","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyon","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Astn","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Cori","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bndi","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruc","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casy","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chis","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalo","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deak","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flnd","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gips","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawk","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wils","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"Latr","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McE","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nich","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moor","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curt","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowa","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Prth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brnd","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Cani","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"Ocon","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), on = {
  svgWidth: au,
  svgHeight: iu,
  groups: lu
};
function cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wo, In;
function uu() {
  if (In) return wo;
  In = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var o = new Uint8Array(256), n = 0; n < o.length; n++)
      o[n] = 255;
    for (var r = 0; r < t.length; r++) {
      var s = t.charAt(r), a = s.charCodeAt(0);
      if (o[a] !== 255)
        throw new TypeError(s + " is ambiguous");
      o[a] = r;
    }
    var i = t.length, u = t.charAt(0), l = Math.log(i) / Math.log(256), d = Math.log(256) / Math.log(i);
    function c(h) {
      if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))), !(h instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (h.length === 0)
        return "";
      for (var g = 0, v = 0, L = 0, y = h.length; L !== y && h[L] === 0; )
        L++, g++;
      for (var x = (y - L) * d + 1 >>> 0, N = new Uint8Array(x); L !== y; ) {
        for (var m = h[L], w = 0, b = x - 1; (m !== 0 || w < v) && b !== -1; b--, w++)
          m += 256 * N[b] >>> 0, N[b] = m % i >>> 0, m = m / i >>> 0;
        if (m !== 0)
          throw new Error("Non-zero carry");
        v = w, L++;
      }
      for (var C = x - v; C !== x && N[C] === 0; )
        C++;
      for (var M = u.repeat(g); C < x; ++C)
        M += t.charAt(N[C]);
      return M;
    }
    function f(h) {
      if (typeof h != "string")
        throw new TypeError("Expected String");
      if (h.length === 0)
        return new Uint8Array();
      for (var g = 0, v = 0, L = 0; h[g] === u; )
        v++, g++;
      for (var y = (h.length - g) * l + 1 >>> 0, x = new Uint8Array(y); h[g]; ) {
        var N = o[h.charCodeAt(g)];
        if (N === 255)
          return;
        for (var m = 0, w = y - 1; (N !== 0 || m < L) && w !== -1; w--, m++)
          N += i * x[w] >>> 0, x[w] = N % 256 >>> 0, N = N / 256 >>> 0;
        if (N !== 0)
          throw new Error("Non-zero carry");
        L = m, g++;
      }
      for (var b = y - L; b !== y && x[b] === 0; )
        b++;
      for (var C = new Uint8Array(v + (y - b)), M = v; b !== y; )
        C[M++] = x[b++];
      return C;
    }
    function p(h) {
      var g = f(h);
      if (g)
        return g;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: c,
      decodeUnsafe: f,
      decode: p
    };
  }
  return wo = e, wo;
}
var du = uu();
const fu = /* @__PURE__ */ cu(du);
var hu = "0123456789abcdefghijklmnopqrstuvwxyz";
fu(hu);
new TextEncoder();
new TextDecoder();
const pu = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, vu = function(e, { delineator: t }) {
  e += t;
  const o = [];
  let n = e;
  for (let s = 0; s < e.length; s++)
    n = pu(n), o.push(n);
  o.sort();
  let r = "";
  for (let s = 0; s < o.length; s++)
    r += o[s].charAt(o[s].length - 1);
  return r;
}, gu = function(e, { delineator: t }) {
  const n = e.split("").slice(0);
  for (let s = 0; s < e.length - 1; s++) {
    n.sort();
    for (let a = 0; a < e.length; a++)
      n[a] = e[a] + n[a];
  }
  return n.filter(function(s) {
    return s.charAt(s.length - 1) === t;
  })[0].substring(0, e.length - 1);
};
function Yr(e) {
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
function jr(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, o, n) => o.repeat(+n)
  );
}
async function Nu(e, { delineator: t }) {
  const o = vu(e, { delineator: t });
  return Yr(o);
}
async function Pu(e, { delineator: t }) {
  const o = jr(e);
  return gu(o, { delineator: t });
}
function xu({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => Nu(t, { delineator: e }),
    decode: (t) => Pu(t, { delineator: e })
  };
}
const Fo = 26, Bo = 97, mu = 48, Gn = async (e, { maxBits: t }) => {
  const o = [1, ...e].map((i) => i ? 1 : 0).join(""), n = [];
  for (let i = o.length; i > 0; i -= t)
    n.push(o.slice(Math.max(0, i - t), i));
  return n.reverse(), n.map((i) => parseInt(i, 2)).map((i) => i > Fo ? i % Fo : String.fromCharCode(i + Bo)).join("");
};
async function Dn(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= Bo ? i - Bo : i - mu + Fo
  ).map(
    (i, u) => Number(i).toString(2).padStart(u > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((u) => u === "1")
  ).slice(1);
}
function Ou({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => Yr(await Gn(t, { maxBits: e })),
    decode: async (t) => Dn(jr(t), { maxBits: e })
  } : {
    encode: (t) => Gn(t, { maxBits: e }),
    decode: (t) => Dn(t, { maxBits: e })
  };
}
const nn = on.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), Au = Object.values(nn).reduce((e, t) => (e[t.id] = t, e), {});
on.groups;
const Wo = "q", Lu = "x";
xu({ delineator: Wo });
const Tu = Qa(Br.hashCodes);
if (Tu[Wo] || Lu === Wo)
  throw new Error("Can not use delineator in allocation map");
Ou({ maxBits: 4 });
Object.freeze(
  nn.reduce((e, t) => (e[t.id] = null, e), {})
);
Object.freeze(
  nn.reduce((e, t) => (e[t.id] = !0, e), {})
);
var wu = /* @__PURE__ */ $e("<!> <div><!></div>", 1);
function yu(e, t) {
  le(t, !0);
  let o = A(t, "allocations", 23, () => ({})), n = A(t, "certainties", 23, () => ({})), r = A(t, "focuses", 23, () => ({})), s = A(t, "showStateLabels", 7, !1), a = A(t, "showElectorateLabels", 7, !1), i = A(t, "layout", 7, "COUNTRY"), u = A(t, "selectedElectorate", 7, null), l = A(t, "customViewbox", 7, null), d = A(t, "onClick", 7, () => {
  }), c = A(t, "onHover", 7, () => {
  }), f = A(t, "onFocus", 7, () => {
  }), p = A(t, "onApi", 7, () => {
  }), h = A(t, "onViewboxChange", 7, () => {
  }), g = A(t, "isStaticLayout", 7, !0), v = A(t, "isInteractive", 7, !0), L = A(t, "colours", 7), y = A(t, "customElectorateAltText", 23, () => ({})), x = A(t, "areStateOutlinesOnTop", 7), N = fe(void 0), m = /* @__PURE__ */ Y(() => su[i()]);
  function w(_, E, G, $ = !0) {
    const K = $ ? G.getScreenCTM() : G.getCTM(), j = G.createSVGPoint();
    j.x = _, j.y = E;
    const Ne = j.matrixTransform(K);
    return [Ne.x, Ne.y].map(Number);
  }
  function b(_) {
    const E = Au[_], G = P(m).positions[E == null ? void 0 : E.group];
    if (!P(N))
      return;
    const $ = P(N).querySelector("svg");
    if (!E || !G || !$)
      throw new Error(`Could not find hexagon with id ${_}`);
    const K = [-0.5, -1], [j, Ne] = Po(
      [
        G[0] + K[0],
        G[1] + K[1]
      ],
      ""
    ).map(Number), se = Number(E.coordPx[0] + j), oe = Number(E.coordPx[1] + Ne), [Ue, Tt] = w(se, oe, $), [Pe, xe] = w(se, oe, $, !1);
    return {
      code: _,
      screenCoord: [Ue, Tt],
      containerCoord: [Pe, xe],
      svgCoord: [se, oe]
    };
  }
  function C(_) {
    var G;
    const E = (G = P(N)) == null ? void 0 : G.querySelector(`.hexmapkeyboardnav button[data-id="${_}"]`);
    E instanceof HTMLButtonElement && E.focus();
  }
  Ge(() => {
    p() && p()({ getHex: b, focusHex: C });
  });
  var M = wu(), R = nt(M);
  Kr(R, {
    get colours() {
      return L();
    },
    get rootEl() {
      return P(N);
    },
    set rootEl(_) {
      F(N, re(_));
    }
  });
  var k = ee(R, 2), q = U(k);
  return Ur(q, {
    config: on,
    get layout() {
      return P(m);
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
      return s();
    },
    get showElectorateLabels() {
      return a();
    },
    get onClick() {
      return d();
    },
    get onHover() {
      return c();
    },
    get onFocus() {
      return f();
    },
    get selectedElectorate() {
      return u();
    },
    get customViewbox() {
      return l();
    },
    get isStaticLayout() {
      return g();
    },
    get isInteractive() {
      return v();
    },
    get onViewboxChange() {
      return h();
    },
    get customElectorateAltText() {
      return y();
    },
    get showStateOutlinesOnTop() {
      return x();
    }
  }), B(k), go(k, (_) => F(N, _), () => P(N)), V(e, M), ce({
    get allocations() {
      return o();
    },
    set allocations(_ = {}) {
      o(_), O();
    },
    get certainties() {
      return n();
    },
    set certainties(_ = {}) {
      n(_), O();
    },
    get focuses() {
      return r();
    },
    set focuses(_ = {}) {
      r(_), O();
    },
    get showStateLabels() {
      return s();
    },
    set showStateLabels(_ = !1) {
      s(_), O();
    },
    get showElectorateLabels() {
      return a();
    },
    set showElectorateLabels(_ = !1) {
      a(_), O();
    },
    get layout() {
      return i();
    },
    set layout(_ = "COUNTRY") {
      i(_), O();
    },
    get selectedElectorate() {
      return u();
    },
    set selectedElectorate(_ = null) {
      u(_), O();
    },
    get customViewbox() {
      return l();
    },
    set customViewbox(_ = null) {
      l(_), O();
    },
    get onClick() {
      return d();
    },
    set onClick(_ = () => {
    }) {
      d(_), O();
    },
    get onHover() {
      return c();
    },
    set onHover(_ = () => {
    }) {
      c(_), O();
    },
    get onFocus() {
      return f();
    },
    set onFocus(_ = () => {
    }) {
      f(_), O();
    },
    get onApi() {
      return p();
    },
    set onApi(_ = () => {
    }) {
      p(_), O();
    },
    get onViewboxChange() {
      return h();
    },
    set onViewboxChange(_ = () => {
    }) {
      h(_), O();
    },
    get isStaticLayout() {
      return g();
    },
    set isStaticLayout(_ = !0) {
      g(_), O();
    },
    get isInteractive() {
      return v();
    },
    set isInteractive(_ = !0) {
      v(_), O();
    },
    get colours() {
      return L();
    },
    set colours(_) {
      L(_), O();
    },
    get customElectorateAltText() {
      return y();
    },
    set customElectorateAltText(_ = {}) {
      y(_), O();
    },
    get areStateOutlinesOnTop() {
      return x();
    },
    set areStateOutlinesOnTop(_) {
      x(_), O();
    }
  });
}
customElements.define("abcnews-hexmap", ge(
  yu,
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
  yu as default
};
