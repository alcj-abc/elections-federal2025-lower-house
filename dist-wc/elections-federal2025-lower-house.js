var ga = Object.defineProperty;
var wo = (e) => {
  throw TypeError(e);
};
var pa = (e, t, r) => t in e ? ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ae = (e, t, r) => pa(e, typeof t != "symbol" ? t + "" : t, r), Sr = (e, t, r) => t.has(e) || wo("Cannot " + r);
var D = (e, t, r) => (Sr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Le = (e, t, r) => t.has(e) ? wo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), at = (e, t, r, o) => (Sr(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r), yo = (e, t, r) => (Sr(e, t, "access private method"), r);
const xa = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xa);
const zr = 1, Yr = 2, Uo = 4, ma = 8, wa = 16, ya = 1, ba = 4, _a = 8, Na = 16, Aa = 1, Ca = 2, Pa = 4, jo = 1, Sa = 2, zo = "[", Kr = "[!", qr = "]", bt = {}, ie = Symbol(), bo = !1, Re = 2, Yo = 4, gr = 8, pr = 16, Qe = 32, Ct = 64, er = 128, Ee = 256, tr = 512, de = 1024, Xe = 2048, Pt = 4096, ze = 8192, xr = 16384, Ko = 32768, Ht = 65536, Ea = 1 << 19, qo = 1 << 20, Rt = Symbol("$state"), Qo = Symbol("legacy props"), La = Symbol("");
var Qr = Array.isArray, Ta = Array.prototype.indexOf, Xr = Array.from, rr = Object.keys, It = Object.defineProperty, it = Object.getOwnPropertyDescriptor, Oa = Object.getOwnPropertyDescriptors, Ra = Object.prototype, ka = Array.prototype, Xo = Object.getPrototypeOf;
function Ia(e) {
  return typeof e == "function";
}
const pe = () => {
};
function Zo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Fa(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
let Ft = [], Tr = [];
function Jo() {
  var e = Ft;
  Ft = [], Zo(e);
}
function Ma() {
  var e = Tr;
  Tr = [], Zo(e);
}
function St(e) {
  Ft.length === 0 && queueMicrotask(Jo), Ft.push(e);
}
function _o() {
  Ft.length > 0 && Jo(), Tr.length > 0 && Ma();
}
function en(e) {
  return e === this.v;
}
function tn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ba(e, t) {
  return e !== t;
}
function Zr(e) {
  return !tn(e, this.v);
}
function Da(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ha() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Va(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $a() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ga(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ja() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function za() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ya() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ka = !1;
function ge(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: en,
    rv: 0,
    wv: 0
  };
  return r;
}
function we(e) {
  return /* @__PURE__ */ qa(ge(e));
}
// @__NO_SIDE_EFFECTS__
function mr(e, t = !1) {
  const r = ge(e);
  return t || (r.equals = Zr), r;
}
// @__NO_SIDE_EFFECTS__
function qa(e) {
  return z !== null && !Te && z.f & Re && (Be === null ? Za([e]) : Be.push(e)), e;
}
function U(e, t) {
  return z !== null && !Te && Cn() && z.f & (Re | pr) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Be === null || !Be.includes(e)) && Ya(), Or(e, t);
}
function Or(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = hn(), rn(e, Xe), j !== null && j.f & de && !(j.f & (Qe | Ct)) && ($e === null ? Ja([e]) : $e.push(e))), t;
}
function rn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var o = r.length, n = 0; n < o; n++) {
      var a = r[n], s = a.f;
      s & Xe || (Ve(a, t), s & (de | Ee) && (s & Re ? rn(
        /** @type {Derived} */
        a,
        Pt
      ) : br(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  var t = Re | Xe, r = z !== null && z.f & Re ? (
    /** @type {Derived} */
    z
  ) : null;
  return j === null || r !== null && r.f & Ee ? t |= Ee : j.f |= qo, {
    ctx: Z,
    deps: null,
    effects: null,
    equals: en,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? j
  };
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  const t = /* @__PURE__ */ B(e);
  return t.equals = Zr, t;
}
function nn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ke(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Qa(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Re))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Xa(e) {
  var t, r = j;
  He(Qa(e));
  try {
    nn(e), t = gn(e);
  } finally {
    He(r);
  }
  return t;
}
function an(e) {
  var t = Xa(e), r = (rt || e.f & Ee) && e.deps !== null ? Pt : de;
  Ve(e, r), e.equals(t) || (e.v = t, e.wv = hn());
}
function wr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let V = !1;
function Oe(e) {
  V = e;
}
let W;
function ye(e) {
  if (e === null)
    throw wr(), bt;
  return W = e;
}
function lt() {
  return ye(
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(W)
  );
}
function I(e) {
  if (V) {
    if (/* @__PURE__ */ We(W) !== null)
      throw wr(), bt;
    W = e;
  }
}
function or(e = 1) {
  if (V) {
    for (var t = e, r = W; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ We(r);
    W = r;
  }
}
function Rr() {
  for (var e = 0, t = W; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === qr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === zo || r === Kr) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(t)
    );
    t.remove(), t = o;
  }
}
function Pe(e, t = null, r) {
  if (typeof e != "object" || e === null || Rt in e)
    return e;
  const o = Xo(e);
  if (o !== Ra && o !== ka)
    return e;
  var n = /* @__PURE__ */ new Map(), a = Qr(e), s = ge(0);
  a && n.set("length", ge(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, c, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Ua();
        var h = n.get(c);
        return h === void 0 ? (h = ge(f.value), n.set(c, h)) : U(h, Pe(f.value, i)), !0;
      },
      deleteProperty(l, c) {
        var f = n.get(c);
        if (f === void 0)
          c in l && n.set(c, ge(ie));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(c);
            Number.isInteger(d) && d < h.v && U(h, d);
          }
          U(f, ie), No(s);
        }
        return !0;
      },
      get(l, c, f) {
        var u;
        if (c === Rt)
          return e;
        var h = n.get(c), d = c in l;
        if (h === void 0 && (!d || (u = it(l, c)) != null && u.writable) && (h = ge(Pe(d ? l[c] : ie, i)), n.set(c, h)), h !== void 0) {
          var v = g(h);
          return v === ie ? void 0 : v;
        }
        return Reflect.get(l, c, f);
      },
      getOwnPropertyDescriptor(l, c) {
        var f = Reflect.getOwnPropertyDescriptor(l, c);
        if (f && "value" in f) {
          var h = n.get(c);
          h && (f.value = g(h));
        } else if (f === void 0) {
          var d = n.get(c), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(l, c) {
        var v;
        if (c === Rt)
          return !0;
        var f = n.get(c), h = f !== void 0 && f.v !== ie || Reflect.has(l, c);
        if (f !== void 0 || j !== null && (!h || (v = it(l, c)) != null && v.writable)) {
          f === void 0 && (f = ge(h ? Pe(l[c], i) : ie), n.set(c, f));
          var d = g(f);
          if (d === ie)
            return !1;
        }
        return h;
      },
      set(l, c, f, h) {
        var b;
        var d = n.get(c), v = c in l;
        if (a && c === "length")
          for (var u = f; u < /** @type {Source<number>} */
          d.v; u += 1) {
            var m = n.get(u + "");
            m !== void 0 ? U(m, ie) : u in l && (m = ge(ie), n.set(u + "", m));
          }
        d === void 0 ? (!v || (b = it(l, c)) != null && b.writable) && (d = ge(void 0), U(d, Pe(f, i)), n.set(c, d)) : (v = d.v !== ie, U(d, Pe(f, i)));
        var p = Reflect.getOwnPropertyDescriptor(l, c);
        if (p != null && p.set && p.set.call(h, f), !v) {
          if (a && typeof c == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), _ = Number(c);
            Number.isInteger(_) && _ >= C.v && U(C, _ + 1);
          }
          No(s);
        }
        return !0;
      },
      ownKeys(l) {
        g(s);
        var c = Reflect.ownKeys(l).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== ie;
        });
        for (var [f, h] of n)
          h.v !== ie && !(f in l) && c.push(f);
        return c;
      },
      setPrototypeOf() {
        ja();
      }
    }
  );
}
function No(e, t = 1) {
  U(e, e.v + t);
}
var Ao, sn, ln, cn, un;
function kr() {
  if (Ao === void 0) {
    Ao = window, sn = document, ln = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    cn = it(t, "firstChild").get, un = it(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function ot(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  return cn.call(e);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return un.call(e);
}
function H(e, t) {
  if (!V)
    return /* @__PURE__ */ te(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ te(W)
  );
  if (r === null)
    r = W.appendChild(ot());
  else if (t && r.nodeType !== 3) {
    var o = ot();
    return r == null || r.before(o), ye(o), o;
  }
  return ye(r), r;
}
function _e(e, t) {
  if (!V) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ te(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ We(r) : r;
  }
  return W;
}
function Q(e, t = 1, r = !1) {
  let o = V ? W : e;
  for (var n; t--; )
    n = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ We(o);
  if (!V)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (r && a !== 3) {
    var s = ot();
    return o === null ? n == null || n.after(s) : o.before(s), ye(s), s;
  }
  return ye(o), /** @type {TemplateNode} */
  o;
}
function dn(e) {
  e.textContent = "";
}
let qt = !1, nr = !1, ar = null, Qt = !1, Jr = !1;
function Co(e) {
  Jr = e;
}
let kt = [];
let z = null, Te = !1;
function De(e) {
  z = e;
}
let j = null;
function He(e) {
  j = e;
}
let Be = null;
function Za(e) {
  Be = e;
}
let le = null, me = 0, $e = null;
function Ja(e) {
  $e = e;
}
let fn = 1, sr = 0, rt = !1;
function hn() {
  return ++fn;
}
function Vt(e) {
  var h;
  var t = e.f;
  if (t & Xe)
    return !0;
  if (t & Pt) {
    var r = e.deps, o = (t & Ee) !== 0;
    if (r !== null) {
      var n, a, s = (t & tr) !== 0, i = o && j !== null && !rt, l = r.length;
      if (s || i) {
        var c = (
          /** @type {Derived} */
          e
        ), f = c.parent;
        for (n = 0; n < l; n++)
          a = r[n], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= tr), i && f !== null && !(f.f & Ee) && (c.f ^= Ee);
      }
      for (n = 0; n < l; n++)
        if (a = r[n], Vt(
          /** @type {Derived} */
          a
        ) && an(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || j !== null && !rt) && Ve(e, de);
  }
  return !1;
}
function es(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & er)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= er;
      }
    r = r.parent;
  }
  throw qt = !1, e;
}
function ts(e) {
  return (e.f & xr) === 0 && (e.parent === null || (e.parent.f & er) === 0);
}
function yr(e, t, r, o) {
  if (qt) {
    if (r === null && (qt = !1), ts(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    es(e, t);
    return;
  }
}
function vn(e, t, r = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var n = 0; n < o.length; n++) {
      var a = o[n];
      a.f & Re ? vn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Ve(a, Xe) : a.f & de && Ve(a, Pt), br(
        /** @type {Effect} */
        a
      ));
    }
}
function gn(e) {
  var v;
  var t = le, r = me, o = $e, n = z, a = rt, s = Be, i = Z, l = Te, c = e.f;
  le = /** @type {null | Value[]} */
  null, me = 0, $e = null, rt = (c & Ee) !== 0 && (Te || !Qt || z === null), z = c & (Qe | Ct) ? null : e, Be = null, Po(e.ctx), Te = !1, sr++;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (le !== null) {
      var d;
      if (ir(e, me), h !== null && me > 0)
        for (h.length = me + le.length, d = 0; d < le.length; d++)
          h[me + d] = le[d];
      else
        e.deps = h = le;
      if (!rt)
        for (d = me; d < h.length; d++)
          ((v = h[d]).reactions ?? (v.reactions = [])).push(e);
    } else h !== null && me < h.length && (ir(e, me), h.length = me);
    if (Cn() && $e !== null && !Te && h !== null && !(e.f & (Re | Pt | Xe)))
      for (d = 0; d < /** @type {Source[]} */
      $e.length; d++)
        vn(
          $e[d],
          /** @type {Effect} */
          e
        );
    return n !== null && sr++, f;
  } finally {
    le = t, me = r, $e = o, z = n, rt = a, Be = s, Po(i), Te = l;
  }
}
function rs(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var o = Ta.call(r, e);
    if (o !== -1) {
      var n = r.length - 1;
      n === 0 ? r = t.reactions = null : (r[o] = r[n], r.pop());
    }
  }
  r === null && t.f & Re && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (le === null || !le.includes(t)) && (Ve(t, Pt), t.f & (Ee | tr) || (t.f ^= tr), nn(
    /** @type {Derived} **/
    t
  ), ir(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ir(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var o = t; o < r.length; o++)
      rs(e, r[o]);
}
function eo(e) {
  var t = e.f;
  if (!(t & xr)) {
    Ve(e, de);
    var r = j, o = Z, n = Qt;
    j = e, Qt = !0;
    try {
      t & pr ? ds(e) : wn(e), mn(e);
      var a = gn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = fn;
      var s = e.deps, i;
      bo && Ka && e.f & Xe;
    } catch (l) {
      yr(l, e, r, o || e.ctx);
    } finally {
      Qt = n, j = r;
    }
  }
}
function os() {
  try {
    Wa();
  } catch (e) {
    if (ar !== null)
      yr(e, ar, null);
    else
      throw e;
  }
}
function pn() {
  try {
    for (var e = 0; kt.length > 0; ) {
      e++ > 1e3 && os();
      var t = kt, r = t.length;
      kt = [];
      for (var o = 0; o < r; o++) {
        var n = t[o];
        n.f & de || (n.f ^= de);
        var a = as(n);
        ns(a);
      }
    }
  } finally {
    nr = !1, ar = null;
  }
}
function ns(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      if (!(o.f & (xr | ze)))
        try {
          Vt(o) && (eo(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? yn(o) : o.fn = null));
        } catch (n) {
          yr(n, o, null, o.ctx);
        }
    }
}
function br(e) {
  nr || (nr = !0, queueMicrotask(pn));
  for (var t = ar = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (Ct | Qe)) {
      if (!(r & de)) return;
      t.f ^= de;
    }
  }
  kt.push(t);
}
function as(e) {
  var t = [], r = e.first;
  e: for (; r !== null; ) {
    var o = r.f, n = (o & Qe) !== 0, a = n && (o & de) !== 0, s = r.next;
    if (!a && !(o & ze)) {
      if (o & Yo)
        t.push(r);
      else if (n)
        r.f ^= de;
      else {
        var i = z;
        try {
          z = r, Vt(r) && eo(r);
        } catch (f) {
          yr(f, r, null, r.ctx);
        } finally {
          z = i;
        }
      }
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    if (s === null) {
      let f = r.parent;
      for (; f !== null; ) {
        if (e === f)
          break e;
        var c = f.next;
        if (c !== null) {
          r = c;
          continue e;
        }
        f = f.parent;
      }
    }
    r = s;
  }
  return t;
}
function w(e) {
  var t;
  for (_o(); kt.length > 0; )
    nr = !0, pn(), _o();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, r = (t & Re) !== 0;
  if (z !== null && !Te) {
    Be !== null && Be.includes(e) && za();
    var o = z.deps;
    e.rv < sr && (e.rv = sr, le === null && o !== null && o[me] === e ? me++ : le === null ? le = [e] : (!rt || !le.includes(e)) && le.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var n = (
      /** @type {Derived} */
      e
    ), a = n.parent;
    a !== null && !(a.f & Ee) && (n.f ^= Ee);
  }
  return r && (n = /** @type {Derived} */
  e, Vt(n) && an(n)), e.v;
}
function Ye(e) {
  var t = Te;
  try {
    return Te = !0, e();
  } finally {
    Te = t;
  }
}
const ss = -7169;
function Ve(e, t) {
  e.f = e.f & ss | t;
}
function is(e) {
  j === null && z === null && Va(), z !== null && z.f & Ee && j === null && Ha(), Jr && Da();
}
function ls(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function vt(e, t, r, o = !0) {
  var n = (e & Ct) !== 0, a = j, s = {
    ctx: Z,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Xe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      eo(s), s.f |= Ko;
    } catch (c) {
      throw ke(s), c;
    }
  else t !== null && br(s);
  var i = r && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (qo | er)) === 0;
  if (!i && !n && o && (a !== null && ls(s, a), z !== null && z.f & Re)) {
    var l = (
      /** @type {Derived} */
      z
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return s;
}
function xn(e) {
  const t = vt(gr, null, !1);
  return Ve(t, de), t.teardown = e, t;
}
function Se(e) {
  is();
  var t = j !== null && (j.f & Qe) !== 0 && Z !== null && !Z.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Z
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: j,
      reaction: z
    });
  } else {
    var o = Wt(e);
    return o;
  }
}
function cs(e) {
  const t = vt(Ct, e, !0);
  return () => {
    ke(t);
  };
}
function us(e) {
  const t = vt(Ct, e, !0);
  return (r = {}) => new Promise((o) => {
    r.outro ? Mt(t, () => {
      ke(t), o(void 0);
    }) : (ke(t), o(void 0));
  });
}
function Wt(e) {
  return vt(Yo, e, !1);
}
function to(e) {
  return vt(gr, e, !0);
}
function ee(e, t = [], r = B) {
  const o = t.map(r);
  return Et(() => e(...o.map(g)));
}
function Et(e, t = 0) {
  return vt(gr | pr | t, e, !0);
}
function nt(e, t = !0) {
  return vt(gr | Qe, e, !0, t);
}
function mn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Jr, o = z;
    Co(!0), De(null);
    try {
      t.call(null);
    } finally {
      Co(r), De(o);
    }
  }
}
function wn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var o = r.next;
    ke(r, t), r = o;
  }
}
function ds(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Qe || ke(t), t = r;
  }
}
function ke(e, t = !0) {
  var r = !1;
  if ((t || e.f & Ea) && e.nodes_start !== null) {
    for (var o = e.nodes_start, n = e.nodes_end; o !== null; ) {
      var a = o === n ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ We(o)
      );
      o.remove(), o = a;
    }
    r = !0;
  }
  wn(e, t && !r), ir(e, 0), Ve(e, xr);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  mn(e);
  var i = e.parent;
  i !== null && i.first !== null && yn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function yn(e) {
  var t = e.parent, r = e.prev, o = e.next;
  r !== null && (r.next = o), o !== null && (o.prev = r), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = r));
}
function Mt(e, t) {
  var r = [];
  ro(e, r, !0), bn(r, () => {
    ke(e), t && t();
  });
}
function bn(e, t) {
  var r = e.length;
  if (r > 0) {
    var o = () => --r || t();
    for (var n of e)
      n.out(o);
  } else
    t();
}
function ro(e, t, r) {
  if (!(e.f & ze)) {
    if (e.f ^= ze, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var n = o.next, a = (o.f & Ht) !== 0 || (o.f & Qe) !== 0;
      ro(o, t, a ? r : !1), o = n;
    }
  }
}
function lr(e) {
  _n(e, !0);
}
function _n(e, t) {
  if (e.f & ze) {
    e.f ^= ze, e.f & de || (e.f ^= de), Vt(e) && (Ve(e, Xe), br(e));
    for (var r = e.first; r !== null; ) {
      var o = r.next, n = (r.f & Ht) !== 0 || (r.f & Qe) !== 0;
      _n(r, n ? t : !1), r = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Nn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Z = null;
function Po(e) {
  Z = e;
}
function oo(e) {
  return (
    /** @type {T} */
    Pn().get(e)
  );
}
function An(e, t) {
  return Pn().set(e, t), t;
}
function re(e, t = !1, r) {
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
function oe(e) {
  const t = Z;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = j, o = z;
      t.e = null;
      try {
        for (var n = 0; n < s.length; n++) {
          var a = s[n];
          He(a.effect), De(a.reaction), Wt(a.fn);
        }
      } finally {
        He(r), De(o);
      }
    }
    Z = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Cn() {
  return !0;
}
function Pn(e) {
  return Z === null && Nn(), Z.c ?? (Z.c = new Map(fs(Z) || void 0));
}
function fs(e) {
  let t = e.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null)
      return r;
    t = t.p;
  }
  return null;
}
function hs(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const vs = [
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
function gs(e) {
  return vs.includes(e);
}
const ps = {
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
function xs(e) {
  return e = e.toLowerCase(), ps[e] ?? e;
}
const ms = ["touchstart", "touchmove"];
function ws(e) {
  return ms.includes(e);
}
function ys(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, St(() => {
      document.activeElement === r && e.focus();
    });
  }
}
function Sn(e) {
  var t = z, r = j;
  De(null), He(null);
  try {
    return e();
  } finally {
    De(t), He(r);
  }
}
const En = /* @__PURE__ */ new Set(), Ir = /* @__PURE__ */ new Set();
function Ln(e, t, r, o = {}) {
  function n(a) {
    if (o.capture || Ot.call(t, a), !a.cancelBubble)
      return Sn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? St(() => {
    t.addEventListener(e, n, o);
  }) : t.addEventListener(e, n, o), n;
}
function bs(e, t, r, o, n) {
  var a = { capture: o, passive: n }, s = Ln(e, t, r, a);
  (t === document.body || t === window || t === document) && xn(() => {
    t.removeEventListener(e, s, a);
  });
}
function no(e) {
  for (var t = 0; t < e.length; t++)
    En.add(e[t]);
  for (var r of Ir)
    r(e);
}
function Ot(e) {
  var _;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, n = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], a = (
    /** @type {null | Element} */
    n[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var l = n.indexOf(i);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = n.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  n[s] || e.target, a !== t) {
    It(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = z, h = j;
    De(null), He(null);
    try {
      for (var d, v = []; a !== null; ) {
        var u = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = a["__" + o];
          if (m !== void 0 && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Qr(m)) {
              var [p, ...C] = m;
              p.apply(a, [e, ...C]);
            } else
              m.call(a, e);
        } catch (b) {
          d ? v.push(b) : d = b;
        }
        if (e.cancelBubble || u === t || u === null)
          break;
        a = u;
      }
      if (d) {
        for (let b of v)
          queueMicrotask(() => {
            throw b;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, De(f), He(h);
    }
  }
}
function ao(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function be(e, t) {
  var r = (
    /** @type {Effect} */
    j
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  var r = (t & jo) !== 0, o = (t & Sa) !== 0, n, a = !e.startsWith("<!>");
  return () => {
    if (V)
      return be(W, null), W;
    n === void 0 && (n = ao(a ? e : "<!>" + e), r || (n = /** @type {Node} */
    /* @__PURE__ */ te(n)));
    var s = (
      /** @type {TemplateNode} */
      o || ln ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (r) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ te(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      be(i, l);
    } else
      be(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ne(e, t, r = "svg") {
  var o = !e.startsWith("<!>"), n = (t & jo) !== 0, a = `<${r}>${o ? e : "<!>" + e}</${r}>`, s;
  return () => {
    if (V)
      return be(W, null), W;
    if (!s) {
      var i = (
        /** @type {DocumentFragment} */
        ao(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ te(i)
      );
      if (n)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ te(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ te(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ te(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ te(c)
      ), h = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      be(f, h);
    } else
      be(c, c);
    return c;
  };
}
function So(e = "") {
  if (!V) {
    var t = ot(e + "");
    return be(t, t), t;
  }
  var r = W;
  return r.nodeType !== 3 && (r.before(r = ot()), ye(r)), be(r, r), r;
}
function ct() {
  if (V)
    return be(W, null), W;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ot();
  return e.append(t, r), be(t, r), e;
}
function F(e, t) {
  if (V) {
    j.nodes_end = W, lt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Fr = !0;
function je(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Tn(e, t) {
  return On(e, t);
}
function _s(e, t) {
  kr(), t.intro = t.intro ?? !1;
  const r = t.target, o = V, n = W;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ te(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== zo); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ We(a);
    if (!a)
      throw bt;
    Oe(!0), ye(
      /** @type {Comment} */
      a
    ), lt();
    const s = On(e, { ...t, anchor: a });
    if (W === null || W.nodeType !== 8 || /** @type {Comment} */
    W.data !== qr)
      throw wr(), bt;
    return Oe(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === bt)
      return t.recover === !1 && $a(), kr(), dn(r), Oe(!1), Tn(e, t);
    throw s;
  } finally {
    Oe(o), ye(n);
  }
}
const mt = /* @__PURE__ */ new Map();
function On(e, { target: t, anchor: r, props: o = {}, events: n, context: a, intro: s = !0 }) {
  kr();
  var i = /* @__PURE__ */ new Set(), l = (h) => {
    for (var d = 0; d < h.length; d++) {
      var v = h[d];
      if (!i.has(v)) {
        i.add(v);
        var u = ws(v);
        t.addEventListener(v, Ot, { passive: u });
        var m = mt.get(v);
        m === void 0 ? (document.addEventListener(v, Ot, { passive: u }), mt.set(v, 1)) : mt.set(v, m + 1);
      }
    }
  };
  l(Xr(En)), Ir.add(l);
  var c = void 0, f = us(() => {
    var h = r ?? t.appendChild(ot());
    return nt(() => {
      if (a) {
        re({});
        var d = (
          /** @type {ComponentContext} */
          Z
        );
        d.c = a;
      }
      n && (o.$$events = n), V && be(
        /** @type {TemplateNode} */
        h,
        null
      ), Fr = s, c = e(h, o) || {}, Fr = !0, V && (j.nodes_end = W), a && oe();
    }), () => {
      var u;
      for (var d of i) {
        t.removeEventListener(d, Ot);
        var v = (
          /** @type {number} */
          mt.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, Ot), mt.delete(d)) : mt.set(d, v);
      }
      Ir.delete(l), h !== r && ((u = h.parentNode) == null || u.removeChild(h));
    };
  });
  return Mr.set(c, f), c;
}
let Mr = /* @__PURE__ */ new WeakMap();
function Ns(e, t) {
  const r = Mr.get(e);
  return r ? (Mr.delete(e), r(t)) : Promise.resolve();
}
function ce(e, t, r = !1) {
  V && lt();
  var o = e, n = null, a = null, s = ie, i = r ? Ht : 0, l = !1;
  const c = (h, d = !0) => {
    l = !0, f(d, h);
  }, f = (h, d) => {
    if (s === (s = h)) return;
    let v = !1;
    if (V) {
      const u = (
        /** @type {Comment} */
        o.data === Kr
      );
      !!s === u && (o = Rr(), ye(o), Oe(!1), v = !0);
    }
    s ? (n ? lr(n) : d && (n = nt(() => d(o))), a && Mt(a, () => {
      a = null;
    })) : (a ? lr(a) : d && (a = nt(() => d(o))), n && Mt(n, () => {
      n = null;
    })), v && Oe(!0);
  };
  Et(() => {
    l = !1, t(c), l || f(null, null);
  }, i), V && (o = W);
}
function As(e, t, r) {
  V && lt();
  var o = e, n = ie, a, s = Ba;
  Et(() => {
    s(n, n = t()) && (a && Mt(a), a = nt(() => r(o)));
  }), V && (o = W);
}
function Ke(e, t) {
  return t;
}
function Cs(e, t, r, o) {
  for (var n = [], a = t.length, s = 0; s < a; s++)
    ro(t[s].e, n, !0);
  var i = a > 0 && n.length === 0 && r !== null;
  if (i) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    dn(l), l.append(
      /** @type {Element} */
      r
    ), o.clear(), et(e, t[0].prev, t[a - 1].next);
  }
  bn(n, () => {
    for (var c = 0; c < a; c++) {
      var f = t[c];
      i || (o.delete(f.k), et(e, f.prev, f.next)), ke(f.e, !i);
    }
  });
}
function qe(e, t, r, o, n, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Uo) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = V ? ye(
      /** @type {Comment | Text} */
      /* @__PURE__ */ te(c)
    ) : c.appendChild(ot());
  }
  V && lt();
  var f = null, h = !1, d = /* @__PURE__ */ on(() => {
    var v = r();
    return Qr(v) ? v : v == null ? [] : Xr(v);
  });
  Et(() => {
    var v = g(d), u = v.length;
    if (h && u === 0)
      return;
    h = u === 0;
    let m = !1;
    if (V) {
      var p = (
        /** @type {Comment} */
        s.data === Kr
      );
      p !== (u === 0) && (s = Rr(), ye(s), Oe(!1), m = !0);
    }
    if (V) {
      for (var C = null, _, b = 0; b < u; b++) {
        if (W.nodeType === 8 && /** @type {Comment} */
        W.data === qr) {
          s = /** @type {Comment} */
          W, m = !0, Oe(!1);
          break;
        }
        var x = v[b], A = o(x, b);
        _ = Rn(
          W,
          i,
          C,
          null,
          x,
          A,
          b,
          n,
          t,
          r
        ), i.items.set(A, _), C = _;
      }
      u > 0 && ye(Rr());
    }
    V || Ps(v, i, s, n, t, o, r), a !== null && (u === 0 ? f ? lr(f) : f = nt(() => a(s)) : f !== null && Mt(f, () => {
      f = null;
    })), m && Oe(!0), g(d);
  }), V && (s = W);
}
function Ps(e, t, r, o, n, a, s) {
  var L, R, M, $;
  var i = (n & ma) !== 0, l = (n & (zr | Yr)) !== 0, c = e.length, f = t.items, h = t.first, d = h, v, u = null, m, p = [], C = [], _, b, x, A;
  if (i)
    for (A = 0; A < c; A += 1)
      _ = e[A], b = a(_, A), x = f.get(b), x !== void 0 && ((L = x.a) == null || L.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(x));
  for (A = 0; A < c; A += 1) {
    if (_ = e[A], b = a(_, A), x = f.get(b), x === void 0) {
      var N = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : r;
      u = Rn(
        N,
        t,
        u,
        u === null ? t.first : u.next,
        _,
        b,
        A,
        o,
        n,
        s
      ), f.set(b, u), p = [], C = [], d = u.next;
      continue;
    }
    if (l && Ss(x, _, A, n), x.e.f & ze && (lr(x.e), i && ((R = x.a) == null || R.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(x))), x !== d) {
      if (v !== void 0 && v.has(x)) {
        if (p.length < C.length) {
          var P = C[0], O;
          u = P.prev;
          var k = p[0], T = p[p.length - 1];
          for (O = 0; O < p.length; O += 1)
            Eo(p[O], P, r);
          for (O = 0; O < C.length; O += 1)
            v.delete(C[O]);
          et(t, k.prev, T.next), et(t, u, k), et(t, T, P), d = P, u = T, A -= 1, p = [], C = [];
        } else
          v.delete(x), Eo(x, d, r), et(t, x.prev, x.next), et(t, x, u === null ? t.first : u.next), et(t, u, x), u = x;
        continue;
      }
      for (p = [], C = []; d !== null && d.k !== b; )
        d.e.f & ze || (v ?? (v = /* @__PURE__ */ new Set())).add(d), C.push(d), d = d.next;
      if (d === null)
        continue;
      x = d;
    }
    p.push(x), u = x, d = x.next;
  }
  if (d !== null || v !== void 0) {
    for (var G = v === void 0 ? [] : Xr(v); d !== null; )
      d.e.f & ze || G.push(d), d = d.next;
    var q = G.length;
    if (q > 0) {
      var E = n & Uo && c === 0 ? r : null;
      if (i) {
        for (A = 0; A < q; A += 1)
          (M = G[A].a) == null || M.measure();
        for (A = 0; A < q; A += 1)
          ($ = G[A].a) == null || $.fix();
      }
      Cs(t, G, E, f);
    }
  }
  i && St(() => {
    var Y;
    if (m !== void 0)
      for (x of m)
        (Y = x.a) == null || Y.apply();
  }), j.first = t.first && t.first.e, j.last = u && u.e;
}
function Ss(e, t, r, o) {
  o & zr && Or(e.v, t), o & Yr ? Or(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Rn(e, t, r, o, n, a, s, i, l, c) {
  var f = (l & zr) !== 0, h = (l & wa) === 0, d = f ? h ? /* @__PURE__ */ mr(n) : ge(n) : n, v = l & Yr ? ge(s) : s, u = {
    i: v,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: o
  };
  try {
    return u.e = nt(() => i(e, d, v, c), V), u.e.prev = r && r.e, u.e.next = o && o.e, r === null ? t.first = u : (r.next = u, r.e.next = u.e), o !== null && (o.prev = u, o.e.prev = u.e), u;
  } finally {
  }
}
function Eo(e, t, r) {
  for (var o = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, n = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== o; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(a)
    );
    n.before(a), a = s;
  }
}
function et(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function jt(e, t, r, o, n) {
  var a = e, s = "", i;
  Et(() => {
    if (s === (s = t() ?? "")) {
      V && lt();
      return;
    }
    i !== void 0 && (ke(i), i = void 0), s !== "" && (i = nt(() => {
      if (V) {
        W.data;
        for (var l = lt(), c = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ We(l);
        if (l === null)
          throw wr(), bt;
        be(W, c), a = ye(l);
        return;
      }
      var f = s + "";
      f = `<svg>${f}</svg>`;
      var h = ao(f);
      for (h = /** @type {Element} */
      /* @__PURE__ */ te(h), be(
        /** @type {TemplateNode} */
        /* @__PURE__ */ te(h),
        /** @type {TemplateNode} */
        h.lastChild
      ); /* @__PURE__ */ te(h); )
        a.before(
          /** @type {Node} */
          /* @__PURE__ */ te(h)
        );
    }));
  });
}
function kn(e, t, ...r) {
  var o = e, n = pe, a;
  Et(() => {
    n !== (n = t()) && (a && (ke(a), a = null), a = nt(() => (
      /** @type {SnippetFn} */
      n(o, ...r)
    )));
  }, Ht), V && (o = W);
}
function Ie(e, t) {
  St(() => {
    var r = e.getRootNode(), o = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!o.querySelector("#" + t.hash)) {
      const n = document.createElement("style");
      n.id = t.hash, n.textContent = t.code, o.appendChild(n);
    }
  });
}
function In(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = In(e[t])) && (o && (o += " "), o += r);
  } else for (r in e) e[r] && (o && (o += " "), o += r);
  return o;
}
function Es() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = In(e)) && (o && (o += " "), o += t);
  return o;
}
function Ls(e) {
  return typeof e == "object" ? Es(e) : e ?? "";
}
const Lo = [...` 	
\r\f \v\uFEFF`];
function Ts(e, t, r) {
  var o = e == null ? "" : "" + e;
  if (t && (o = o ? o + " " + t : t), r) {
    for (var n in r)
      if (r[n])
        o = o ? o + " " + n : n;
      else if (o.length)
        for (var a = n.length, s = 0; (s = o.indexOf(n, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || Lo.includes(o[s - 1])) && (i === o.length || Lo.includes(o[i])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(i + 1) : s = i;
        }
  }
  return o === "" ? null : o;
}
function _r(e, t, r, o, n, a) {
  var s = e.__className;
  if (V || s !== r) {
    var i = Ts(r, o, a);
    (!V || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : t ? e.className = i : e.setAttribute("class", i)), e.__className = r;
  } else if (a) {
    n ?? (n = {});
    for (var l in a) {
      var c = !!a[l];
      c !== !!n[l] && e.classList.toggle(l, c);
    }
  }
  return a;
}
const Xt = Symbol("class");
function Os(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function K(e, t, r, o) {
  var n = e.__attributes ?? (e.__attributes = {});
  V && (n[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || n[t] !== (n[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[La] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Fn(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function cr(e, t, r, o, n = !1, a = !1, s = !1) {
  let i = V && a;
  i && Oe(!1);
  var l = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in r || (r[f] = null);
  r.class ? r.class = Ls(r.class) : (o || r[Xt]) && (r.class = null);
  var h = Fn(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const b in r) {
    let x = r[b];
    if (c && b === "value" && x == null) {
      e.value = e.__value = "", l[b] = x;
      continue;
    }
    var v = l[b];
    if (!(x === v && b !== "class")) {
      l[b] = x;
      var u = b[0] + b[1];
      if (u !== "$$") {
        if (u === "on") {
          const A = {}, N = "$$" + b;
          let P = b.slice(2);
          var m = gs(P);
          if (hs(P) && (P = P.slice(0, -7), A.capture = !0), !m && v) {
            if (x != null) continue;
            e.removeEventListener(P, l[N], A), l[N] = null;
          }
          if (x != null)
            if (m)
              e[`__${P}`] = x, no([P]);
            else {
              let O = function(k) {
                l[b].call(this, k);
              };
              l[N] = Ln(P, e, O, A);
            }
          else m && (e[`__${P}`] = void 0);
        } else if (b === "class") {
          var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
          _r(e, p, x, o, t == null ? void 0 : t[Xt], r[Xt]);
        } else if (b === "style" && x != null)
          e.style.cssText = x + "";
        else if (b === "autofocus")
          ys(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!a && (b === "__value" || b === "value" && x != null))
          e.value = e.__value = x;
        else if (b === "selected" && c)
          Os(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var C = b;
          n || (C = xs(C));
          var _ = C === "defaultValue" || C === "defaultChecked";
          if (x == null && !a && !_)
            if (d[b] = null, C === "value" || C === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                e
              );
              const N = t === void 0;
              if (C === "value") {
                let P = A.defaultValue;
                A.removeAttribute(C), A.defaultValue = P, A.value = A.__value = N ? P : null;
              } else {
                let P = A.defaultChecked;
                A.removeAttribute(C), A.defaultChecked = P, A.checked = N ? P : !1;
              }
            } else
              e.removeAttribute(b);
          else _ || h.includes(C) && (a || typeof x != "string") ? e[C] = x : typeof x != "function" && K(e, C, x);
        }
        b === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return i && Oe(!0), l;
}
var To = /* @__PURE__ */ new Map();
function Fn(e) {
  var t = To.get(e.nodeName);
  if (t) return t;
  To.set(e.nodeName, t = []);
  for (var r, o = e, n = Element.prototype; n !== o; ) {
    r = Oa(o);
    for (var a in r)
      r[a].set && t.push(a);
    o = Xo(o);
  }
  return t;
}
function ue(e, t, r, o) {
  var n = e.__styles ?? (e.__styles = {});
  n[t] !== r && (n[t] = r, r == null ? e.style.removeProperty(t) : e.style.setProperty(t, r, ""));
}
const Rs = () => performance.now(), Me = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Rs(),
  tasks: /* @__PURE__ */ new Set()
};
function Mn() {
  const e = Me.now();
  Me.tasks.forEach((t) => {
    t.c(e) || (Me.tasks.delete(t), t.f());
  }), Me.tasks.size !== 0 && Me.tick(Mn);
}
function Bn(e) {
  let t;
  return Me.tasks.size === 0 && Me.tick(Mn), {
    promise: new Promise((r) => {
      Me.tasks.add(t = { c: e, f: r });
    }),
    abort() {
      Me.tasks.delete(t);
    }
  };
}
function zt(e, t) {
  Sn(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function ks(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function Oo(e) {
  const t = {}, r = e.split(";");
  for (const o of r) {
    const [n, a] = o.split(":");
    if (!n || a === void 0) break;
    const s = ks(n.trim());
    t[s] = a.trim();
  }
  return t;
}
const Is = (e) => e;
function ut(e, t, r, o) {
  var n = (e & Aa) !== 0, a = (e & Ca) !== 0, s = n && a, i = (e & Pa) !== 0, l = s ? "both" : n ? "in" : "out", c, f = t.inert, h = t.style.overflow, d, v;
  function u() {
    var b = z, x = j;
    De(null), He(null);
    try {
      return c ?? (c = r()(t, (o == null ? void 0 : o()) ?? /** @type {P} */
      {}, {
        direction: l
      }));
    } finally {
      De(b), He(x);
    }
  }
  var m = {
    is_global: i,
    in() {
      var b;
      if (t.inert = f, !n) {
        v == null || v.abort(), (b = v == null ? void 0 : v.reset) == null || b.call(v);
        return;
      }
      a || d == null || d.abort(), zt(t, "introstart"), d = Br(t, u(), v, 1, () => {
        zt(t, "introend"), d == null || d.abort(), d = c = void 0, t.style.overflow = h;
      });
    },
    out(b) {
      if (!a) {
        b == null || b(), c = void 0;
        return;
      }
      t.inert = !0, zt(t, "outrostart"), v = Br(t, u(), d, 0, () => {
        zt(t, "outroend"), b == null || b();
      });
    },
    stop: () => {
      d == null || d.abort(), v == null || v.abort();
    }
  }, p = (
    /** @type {Effect} */
    j
  );
  if ((p.transitions ?? (p.transitions = [])).push(m), n && Fr) {
    var C = i;
    if (!C) {
      for (var _ = (
        /** @type {Effect | null} */
        p.parent
      ); _ && _.f & Ht; )
        for (; (_ = _.parent) && !(_.f & pr); )
          ;
      C = !_ || (_.f & Ko) !== 0;
    }
    C && Wt(() => {
      Ye(() => m.in());
    });
  }
}
function Br(e, t, r, o, n) {
  var a = o === 1;
  if (Ia(t)) {
    var s, i = !1;
    return St(() => {
      if (!i) {
        var p = t({ direction: a ? "in" : "out" });
        s = Br(e, p, r, o, n);
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
  if (r == null || r.deactivate(), !(t != null && t.duration))
    return n(), {
      abort: pe,
      deactivate: pe,
      reset: pe,
      t: () => o
    };
  const { delay: l = 0, css: c, tick: f, easing: h = Is } = t;
  var d = [];
  if (a && r === void 0 && (f && f(0, 1), c)) {
    var v = Oo(c(0, 1));
    d.push(v, v);
  }
  var u = () => 1 - o, m = e.animate(d, { duration: l });
  return m.onfinish = () => {
    var p = (r == null ? void 0 : r.t()) ?? 1 - o;
    r == null || r.abort();
    var C = o - p, _ = (
      /** @type {number} */
      t.duration * Math.abs(C)
    ), b = [];
    if (_ > 0) {
      var x = !1;
      if (c)
        for (var A = Math.ceil(_ / 16.666666666666668), N = 0; N <= A; N += 1) {
          var P = p + C * h(N / A), O = Oo(c(P, 1 - P));
          b.push(O), x || (x = O.overflow === "hidden");
        }
      x && (e.style.overflow = "hidden"), u = () => {
        var k = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          m.currentTime
        );
        return p + C * h(k / _);
      }, f && Bn(() => {
        if (m.playState !== "running") return !1;
        var k = u();
        return f(k, 1 - k), !0;
      });
    }
    m = e.animate(b, { duration: _, fill: "forwards" }), m.onfinish = () => {
      u = () => o, f == null || f(o, 1 - o), n();
    };
  }, {
    abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = pe);
    },
    deactivate: () => {
      n = pe;
    },
    reset: () => {
      o === 0 && (f == null || f(1, 0));
    },
    t: () => u()
  };
}
var tt, _t, Bt, hr, Dn;
const vr = class vr {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Le(this, hr);
    /** */
    Le(this, tt, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Le(this, _t);
    /** @type {ResizeObserverOptions} */
    Le(this, Bt);
    at(this, Bt, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, r) {
    var o = D(this, tt).get(t) || /* @__PURE__ */ new Set();
    return o.add(r), D(this, tt).set(t, o), yo(this, hr, Dn).call(this).observe(t, D(this, Bt)), () => {
      var n = D(this, tt).get(t);
      n.delete(r), n.size === 0 && (D(this, tt).delete(t), D(this, _t).unobserve(t));
    };
  }
};
tt = new WeakMap(), _t = new WeakMap(), Bt = new WeakMap(), hr = new WeakSet(), Dn = function() {
  return D(this, _t) ?? at(this, _t, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var r of t) {
        vr.entries.set(r.target, r);
        for (var o of D(this, tt).get(r.target) || [])
          o(r);
      }
    }
  ));
}, /** @static */
Ae(vr, "entries", /* @__PURE__ */ new WeakMap());
let Dr = vr;
var Fs = /* @__PURE__ */ new Dr({
  box: "border-box"
});
function Ms(e, t, r) {
  var o = Fs.observe(e, () => r(e[t]));
  Wt(() => (Ye(() => r(e[t])), o));
}
function Ro(e, t) {
  return e === t || (e == null ? void 0 : e[Rt]) === t;
}
function $t(e = {}, t, r, o) {
  return Wt(() => {
    var n, a;
    return to(() => {
      n = a, a = [], Ye(() => {
        e !== r(...a) && (t(e, ...a), n && Ro(r(...n), e) && t(null, ...n));
      });
    }), () => {
      St(() => {
        a && Ro(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function dt(e) {
  Z === null && Nn(), Se(() => {
    const t = Ye(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Hn(e, t, r) {
  if (e == null)
    return t(void 0), pe;
  const o = Ye(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const wt = [];
function At(e, t = pe) {
  let r = null;
  const o = /* @__PURE__ */ new Set();
  function n(i) {
    if (tn(e, i) && (e = i, r)) {
      const l = !wt.length;
      for (const c of o)
        c[1](), wt.push(c, e);
      if (l) {
        for (let c = 0; c < wt.length; c += 2)
          wt[c][0](wt[c + 1]);
        wt.length = 0;
      }
    }
  }
  function a(i) {
    n(i(
      /** @type {T} */
      e
    ));
  }
  function s(i, l = pe) {
    const c = [i, l];
    return o.add(c), o.size === 1 && (r = t(n, a) || pe), i(
      /** @type {T} */
      e
    ), () => {
      o.delete(c), o.size === 0 && r && (r(), r = null);
    };
  }
  return { set: n, update: a, subscribe: s };
}
function Vn(e) {
  let t;
  return Hn(e, (r) => t = r)(), t;
}
let Yt = !1, Hr = Symbol();
function ur(e, t, r) {
  const o = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ mr(void 0),
    unsubscribe: pe
  });
  if (o.store !== e && !(Hr in r))
    if (o.unsubscribe(), o.store = e ?? null, e == null)
      o.source.v = void 0, o.unsubscribe = pe;
    else {
      var n = !0;
      o.unsubscribe = Hn(e, (a) => {
        n ? o.source.v = a : U(o.source, a);
      }), n = !1;
    }
  return e && Hr in r ? Vn(e) : g(o.source);
}
function ft(e, t) {
  return e.set(t), t;
}
function Lt() {
  const e = {};
  function t() {
    xn(() => {
      for (var r in e)
        e[r].unsubscribe();
      It(e, Hr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Bs(e, t, r) {
  return e.set(r), t;
}
function Ds(e) {
  var t = Yt;
  try {
    return Yt = !1, [e(), Yt];
  } finally {
    Yt = t;
  }
}
function y(e, t, r, o) {
  var A;
  var n = (r & ya) !== 0, a = !0, s = (r & _a) !== 0, i = (r & Na) !== 0, l = !1, c;
  s ? [c, l] = Ds(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var f = Rt in e || Qo in e, h = s && (((A = it(e, t)) == null ? void 0 : A.set) ?? (f && t in e && ((N) => e[t] = N))) || void 0, d = (
    /** @type {V} */
    o
  ), v = !0, u = !1, m = () => (u = !0, v && (v = !1, i ? d = Ye(
    /** @type {() => V} */
    o
  ) : d = /** @type {V} */
  o), d);
  c === void 0 && o !== void 0 && (h && a && Ga(), c = m(), h && h(c));
  var p;
  if (p = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? m() : (v = !0, u = !1, N);
  }, !(r & ba))
    return p;
  if (h) {
    var C = e.$$legacy;
    return function(N, P) {
      return arguments.length > 0 ? ((!P || C || l) && h(P ? p() : N), N) : p();
    };
  }
  var _ = !1, b = /* @__PURE__ */ mr(c), x = /* @__PURE__ */ B(() => {
    var N = p(), P = g(b);
    return _ ? (_ = !1, P) : b.v = N;
  });
  return n || (x.equals = Zr), function(N, P) {
    if (arguments.length > 0) {
      const O = P ? g(x) : s ? Pe(N) : N;
      return x.equals(O) || (_ = !0, U(b, O), u && d !== void 0 && (d = O), Ye(() => g(x))), N;
    }
    return g(x);
  };
}
function Hs(e) {
  return new Vs(e);
}
var Ge, Ce;
class Vs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Le(this, Ge);
    /** @type {Record<string, any>} */
    Le(this, Ce);
    var a;
    var r = /* @__PURE__ */ new Map(), o = (s, i) => {
      var l = /* @__PURE__ */ mr(i);
      return r.set(s, l), l;
    };
    const n = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return g(r.get(i) ?? o(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === Qo ? !0 : (g(r.get(i) ?? o(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, l) {
          return U(r.get(i) ?? o(i, l), l), Reflect.set(s, i, l);
        }
      }
    );
    at(this, Ce, (t.hydrate ? _s : Tn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: n,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && w(), at(this, Ge, n.$$events);
    for (const s of Object.keys(D(this, Ce)))
      s === "$set" || s === "$destroy" || s === "$on" || It(this, s, {
        get() {
          return D(this, Ce)[s];
        },
        /** @param {any} value */
        set(i) {
          D(this, Ce)[s] = i;
        },
        enumerable: !0
      });
    D(this, Ce).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(n, s);
    }, D(this, Ce).$destroy = () => {
      Ns(D(this, Ce));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    D(this, Ce).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    D(this, Ge)[t] = D(this, Ge)[t] || [];
    const o = (...n) => r.call(this, ...n);
    return D(this, Ge)[t].push(o), () => {
      D(this, Ge)[t] = D(this, Ge)[t].filter(
        /** @param {any} fn */
        (n) => n !== o
      );
    };
  }
  $destroy() {
    D(this, Ce).$destroy();
  }
}
Ge = new WeakMap(), Ce = new WeakMap();
let Wn;
typeof HTMLElement == "function" && (Wn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, o) {
    super();
    /** The Svelte component constructor */
    Ae(this, "$$ctor");
    /** Slots */
    Ae(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ae(this, "$$c");
    /** Whether or not the custom element is connected */
    Ae(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ae(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ae(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ae(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ae(this, "$$me");
    this.$$ctor = t, this.$$s = r, o && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const n = this.$$c.$on(t, r);
      this.$$l_u.set(r, n);
    }
    super.addEventListener(t, r, o);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, o) {
    if (super.removeEventListener(t, r, o), this.$$c) {
      const n = this.$$l_u.get(r);
      n && (n(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(n) {
        return (a) => {
          const s = document.createElement("slot");
          n !== "default" && (s.name = n), F(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, o = Ws(this);
      for (const n of this.$$s)
        n in o && (n === "default" && !this.$$d.children ? (this.$$d.children = t(n), r.default = !0) : r[n] = t(n));
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = Zt(a, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = Hs({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = cs(() => {
        to(() => {
          var n;
          this.$$r = !0;
          for (const a of rr(this.$$c)) {
            if (!((n = this.$$p_d[a]) != null && n.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Zt(
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
      for (const n in this.$$l)
        for (const a of this.$$l[n]) {
          const s = this.$$c.$on(n, a);
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
  attributeChangedCallback(t, r, o) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Zt(t, o, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
    return rr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Zt(e, t, r, o) {
  var a;
  const n = (a = r[e]) == null ? void 0 : a.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !r[e])
    return t;
  if (o === "toAttribute")
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
function Ws(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function fe(e, t, r, o, n, a) {
  let s = class extends Wn {
    constructor() {
      super(e, r, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return rr(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return rr(t).forEach((i) => {
    It(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(l) {
        var h;
        l = Zt(i, l, t), this.$$d[i] = l;
        var c = this.$$c;
        if (c) {
          var f = (h = it(c, i)) == null ? void 0 : h.get;
          f ? c[i] = l : c.$set({ [i]: l });
        }
      }
    });
  }), o.forEach((i) => {
    It(s.prototype, i, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function ko(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function $s(e) {
  return e;
}
function Gs(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Vr(e, t) {
  if (e === t || e !== e) return () => e;
  const r = typeof e;
  if (r !== typeof t || Array.isArray(e) !== Array.isArray(t))
    throw new Error("Cannot interpolate values of different type");
  if (Array.isArray(e)) {
    const o = (
      /** @type {Array<any>} */
      t.map((n, a) => Vr(
        /** @type {Array<any>} */
        e[a],
        n
      ))
    );
    return (n) => o.map((a) => a(n));
  }
  if (r === "object") {
    if (!e || !t)
      throw new Error("Object cannot be null");
    if (ko(e) && ko(t)) {
      const a = e.getTime(), i = t.getTime() - a;
      return (l) => new Date(a + l * i);
    }
    const o = Object.keys(t), n = {};
    return o.forEach((a) => {
      n[a] = Vr(e[a], t[a]);
    }), (a) => {
      const s = {};
      return o.forEach((i) => {
        s[i] = n[i](a);
      }), s;
    };
  }
  if (r === "number") {
    const o = (
      /** @type {number} */
      t - /** @type {number} */
      e
    );
    return (n) => e + n * o;
  }
  return () => t;
}
var Ue, Nt, Dt, st;
const fo = class fo {
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(t, r = {}) {
    Le(this, Ue, ge(
      /** @type {T} */
      void 0
    ));
    Le(this, Nt, ge(
      /** @type {T} */
      void 0
    ));
    /** @type {TweenedOptions<T>} */
    Le(this, Dt);
    /** @type {import('../internal/client/types').Task | null} */
    Le(this, st, null);
    D(this, Ue).v = D(this, Nt).v = t, at(this, Dt, r);
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
  static of(t, r) {
    const o = new fo(t(), r);
    return to(() => {
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
  set(t, r) {
    var h;
    U(D(this, Nt), t);
    let {
      delay: o = 0,
      duration: n = 400,
      easing: a = $s,
      interpolate: s = Vr
    } = { ...D(this, Dt), ...r };
    if (n === 0)
      return (h = D(this, st)) == null || h.abort(), U(D(this, Ue), t), Promise.resolve();
    const i = Me.now() + o;
    let l, c = !1, f = D(this, st);
    return at(this, st, Bn((d) => {
      if (d < i)
        return !0;
      if (!c) {
        c = !0;
        const u = D(this, Ue).v;
        l = s(u, t), typeof n == "function" && (n = n(u, t)), f == null || f.abort();
      }
      const v = d - i;
      return v > /** @type {number} */
      n ? (U(D(this, Ue), t), !1) : (U(D(this, Ue), l(a(v / /** @type {number} */
      n))), !0);
    })), D(this, st).promise;
  }
  get current() {
    return g(D(this, Ue));
  }
  get target() {
    return g(D(this, Nt));
  }
  set target(t) {
    this.set(t);
  }
};
Ue = new WeakMap(), Nt = new WeakMap(), Dt = new WeakMap(), st = new WeakMap();
let yt = fo;
const Us = (e) => e;
function ht(e, { delay: t = 0, duration: r = 400, easing: o = Us } = {}) {
  const n = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: o,
    css: (a) => `opacity: ${a * n}`
  };
}
var js = /* @__PURE__ */ Ne('<div class="state-labels__label svelte-19e6ym4"> </div>'), zs = /* @__PURE__ */ Ne('<div aria-hidden="true"></div>');
const Ys = {
  hash: "svelte-19e6ym4",
  code: `.state-labels.svelte-19e6ym4 {position:absolute;left:0;top:0;pointer-events:none;width:100%;height:100%;container-type:inline-size;}.state-labels__label.svelte-19e6ym4 {position:absolute;height:2em;margin-top:-1em;display:flex;justify-content:center;align-items:center;color:var(--Border, #000);text-align:center;font-family:ABCSans, ABCSans;font-size:0.875rem;font-style:normal;font-weight:700;line-height:normal;-webkit-text-stroke:5px transparent;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels__label.svelte-19e6ym4 {font-size:1.125rem;}
}
@container (min-width: 38rem) {.state-labels__label.svelte-19e6ym4 {font-size:1.25rem;}
}.state-labels--overlaid.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {-webkit-text-stroke:3px #f1f1f1;paint-order:stroke fill;}
@container (min-width: 30rem) {.state-labels--overlaid.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {-webkit-text-stroke:5px #f1f1f1;font-size:1.125rem;}
}.state-labels--ready.svelte-19e6ym4 .state-labels__label:where(.svelte-19e6ym4) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}`
};
function $n(e, t) {
  re(t, !0), Ie(e, Ys);
  let r = y(t, "labels", 7), o = y(t, "overlayLabels", 7, !1), n = we(void 0);
  dt(() => {
    setTimeout(() => {
      U(n, !0);
    });
  });
  var a = zs();
  let s;
  return qe(a, 21, r, Ke, (i, l) => {
    var c = ct(), f = _e(c);
    As(f, () => g(l).name, (h) => {
      var d = js(), v = H(d, !0);
      I(d), ee(
        (u) => {
          ue(d, "left", g(l).left + "%"), ue(d, "top", g(l).top + "%"), ue(d, "width", g(l).width + "%"), ue(d, "margin-left", u), je(v, g(l).name);
        },
        [
          () => Math.round(0 - g(l).width / 2) + "%"
        ]
      ), ut(3, d, () => ht, () => ({ duration: 1e3 })), F(h, d);
    }), F(i, c);
  }), I(a), ee(() => s = _r(a, 1, "state-labels svelte-19e6ym4", null, s, {
    "state-labels--overlaid": o(),
    "state-labels--ready": g(n)
  })), F(e, a), oe({
    get labels() {
      return r();
    },
    set labels(i) {
      r(i), w();
    },
    get overlayLabels() {
      return o();
    },
    set overlayLabels(i = !1) {
      o(i), w();
    }
  });
}
fe($n, { labels: {}, overlayLabels: {} }, [], [], !0);
var Ks = /* @__PURE__ */ Ne('<span class="accessible-hide svelte-ivafae"><!></span>');
const qs = {
  hash: "svelte-ivafae",
  code: ".accessible-hide.svelte-ivafae {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"
};
function Gn(e, t) {
  re(t, !0), Ie(e, qs);
  let r = y(t, "children", 7);
  var o = Ks(), n = H(o);
  return kn(n, () => r() ?? pe), I(o), F(e, o), oe({
    get children() {
      return r();
    },
    set children(a) {
      r(a), w();
    }
  });
}
fe(Gn, { children: {} }, [], [], !0);
const Io = At({});
var Qs = /* @__PURE__ */ Ne("<a><!></a>");
const Xs = {
  hash: "svelte-70abd9",
  code: "a.svelte-70abd9 {display:inline-block;padding:0.5rem 1rem;font-size:0.75rem;font-weight:700;line-height:1.3rem;padding:0.3rem 0.6rem 0.1rem;text-decoration:none;letter-spacing:0.125rem;text-transform:uppercase;color:#fff;background-color:#0058cc;transition:opacity 0.2s;position:absolute;}a.svelte-70abd9:focus {opacity:1;}a.svelte-70abd9:not(:focus) {clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;opacity:0.1;}.skip-link--topleft.svelte-70abd9 {left:1rem;top:1rem;}.skip-link--bottomleft.svelte-70abd9 {left:1rem;bottom:1rem;}"
};
function Wr(e, t) {
  re(t, !0), Ie(e, Xs);
  const [r, o] = Lt(), n = () => ur(Io, "$links", r);
  let a = y(t, "id", 7), s = y(t, "target", 7), i = y(t, "children", 7), l = y(t, "position", 7, "topleft"), c = we(void 0);
  Se(() => {
    Bs(Io, Ye(n)[a()] = g(c), Ye(n));
  });
  var f = Qs();
  f.__click = (v) => {
    var p;
    v.preventDefault();
    const m = v.target.href.split("#")[1];
    (p = n()[m]) == null || p.focus();
  };
  var h = H(f);
  kn(h, () => i() ?? pe), I(f), $t(f, (v) => U(c, v), () => g(c)), ee(() => {
    K(f, "id", a()), K(f, "href", `#${s()}`), _r(f, 1, `skip-link--${l()}`, "svelte-70abd9");
  }), F(e, f);
  var d = oe({
    get id() {
      return a();
    },
    set id(v) {
      a(v), w();
    },
    get target() {
      return s();
    },
    set target(v) {
      s(v), w();
    },
    get children() {
      return i();
    },
    set children(v) {
      i(v), w();
    },
    get position() {
      return l();
    },
    set position(v = "topleft") {
      l(v), w();
    }
  });
  return o(), d;
}
no(["click"]);
fe(
  Wr,
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
function Zs(e, t, r) {
  var n;
  const o = e.target.dataset.id;
  U(t, Pe(o)), (n = r()) == null || n({ code: o });
}
function Js(e, t) {
  var o;
  const r = e.target.dataset.id;
  (o = t()) == null || o({ code: r, clientX: null, clientY: null });
}
function ei(e, t, r) {
  var o;
  g(t) === e.target.dataset.id && U(t, null), (o = r()) == null || o({ code: null });
}
var ti = /* @__PURE__ */ Ne("<li><button> </button></li>"), ri = /* @__PURE__ */ Ne("<li> <ul></ul></li>"), oi = /* @__PURE__ */ Ne('<ul class="hexmapkeyboardnav svelte-1vj52vk"></ul>'), ni = /* @__PURE__ */ Ne("<!> <!> <!>", 1);
const ai = {
  hash: "svelte-1vj52vk",
  code: ".hexmapkeyboardnav.svelte-1vj52vk {max-height:300px;overflow:auto;}"
};
function Un(e, t) {
  re(t, !0), Ie(e, ai);
  let r = y(t, "groups", 7), o = y(t, "layout", 7), n = y(t, "onChange", 7), a = y(t, "onClick", 7), s = y(t, "onFocus", 7), i = y(t, "customElectorateAltText", 23, () => ({})), l = we(null);
  Se(() => {
    var u;
    (u = n()) == null || u(g(l));
  });
  let c = /* @__PURE__ */ B(() => [
    "QLD",
    "NT",
    "WA",
    "SA",
    "NSW",
    "ACT",
    "VIC",
    "TAS"
  ].filter((u) => o().positions[u]).map((u) => r().find((m) => m.name === u)).map((u) => ({
    ...u,
    hexes: [...u.hexes].sort((m, p) => m.coord[0] + m.coord[1] * 1e3 - (p.coord[0] + p.coord[1] * 1e3))
  })));
  var f = ni(), h = _e(f);
  Wr(h, {
    id: "hex-map-top",
    target: "hex-map-bottom",
    position: "topleft",
    children: (u, m) => {
      or();
      var p = So("Skip past map");
      F(u, p);
    },
    $$slots: { default: !0 }
  });
  var d = Q(h, 2);
  Gn(d, {
    children: (u, m) => {
      var p = oi();
      p.__click = [Js, a], p.__focusin = [Zs, l, s], p.__focusout = [ei, l, s], qe(p, 21, () => g(c), Ke, (C, _) => {
        var b = ri(), x = H(b), A = Q(x);
        qe(A, 21, () => g(_).hexes, Ke, (N, P) => {
          var O = ti(), k = H(O), T = H(k);
          I(k), I(O), ee(() => {
            K(k, "data-id", g(P).id), je(T, `${g(P).name ?? ""} ${i()[g(P).id] || ""}`);
          }), F(N, O);
        }), I(A), I(b), ee(() => je(x, `${g(_).name ?? ""} `)), F(C, b);
      }), I(p), F(u, p);
    },
    $$slots: { default: !0 }
  });
  var v = Q(d, 2);
  return Wr(v, {
    id: "hex-map-bottom",
    target: "hex-map-top",
    position: "bottomleft",
    children: (u, m) => {
      or();
      var p = So("Skip above map");
      F(u, p);
    },
    $$slots: { default: !0 }
  }), F(e, f), oe({
    get groups() {
      return r();
    },
    set groups(u) {
      r(u), w();
    },
    get layout() {
      return o();
    },
    set layout(u) {
      o(u), w();
    },
    get onChange() {
      return n();
    },
    set onChange(u) {
      n(u), w();
    },
    get onClick() {
      return a();
    },
    set onClick(u) {
      a(u), w();
    },
    get onFocus() {
      return s();
    },
    set onFocus(u) {
      s(u), w();
    },
    get customElectorateAltText() {
      return i();
    },
    set customElectorateAltText(u = {}) {
      i(u), w();
    }
  });
}
no(["click", "focusin", "focusout"]);
fe(
  Un,
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
function si(e) {
  return Object.entries(e).reduce((t, [r, o]) => (t[o] = r, t), {});
}
const Fo = 16;
function Nr(e = [0, 0], t = "px") {
  const r = e[0] * (Fo * Math.sqrt(3)), o = e[1] * 1.5 * Fo;
  return [r, o].map((n) => `${Math.round(n)}${t}`);
}
var ii = /* @__PURE__ */ ne('<path style="color:#000000;fill:var(--c-tileFocusBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 16.109376,0.41754687 1.558594,8.8179375 C 0.593711,9.3751322 -4.71e-4,10.404898 10e-7,11.519109 v 16.800782 c -4.72e-4,1.11421 0.59371,2.143976 1.558593,2.701171 l 14.550782,8.400391 c 0.964489,0.556729 2.152698,0.556729 3.117187,0 l 14.552734,-8.400391 c 0.964884,-0.557194 1.559066,-1.58696 1.558594,-2.701171 V 11.519109 c 4.72e-4,-1.114211 -0.59371,-2.143977 -1.558594,-2.7011715 L 19.226563,0.41754687 c -0.964489,-0.5567288 -2.152698,-0.5567288 -3.117187,0 z M 17.667969,2.716375 33.103516,11.317938 V 28.521062 L 17.667969,37.122625 2.234376,28.521062 V 11.317938 Z"></path><path style="color:#000000;fill:var(--c-tileFocusBorderGap);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.359376,1.362859 A 1.7815382,1.7815382 0 0 0 16.777344,1.573797 L 2.226563,9.976141 a 1.7815382,1.7815382 0 0 0 -0.890625,1.542968 v 16.800782 a 1.7815382,1.7815382 0 0 0 0.890625,1.542968 l 14.550781,8.402344 a 1.7815382,1.7815382 0 0 0 1.78125,0 l 14.552735,-8.402344 a 1.7815382,1.7815382 0 0 0 0.890625,-1.542968 V 11.519109 A 1.7815382,1.7815382 0 0 0 33.111329,9.976141 L 18.558594,1.573797 A 1.7815382,1.7815382 0 0 0 17.359376,1.362859 Z m 0.308593,1.753907 14.552735,8.402343 V 28.319891 L 17.667969,36.722234 3.117188,28.319891 V 11.519109 Z"></path>', 1), li = /* @__PURE__ */ ne('<g class="hex-map-focus-indicator svelte-n6iudw"><!><path style="color:#000000;fill:var(--c-tileInteractBorder);stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none" d="M 17.22353,2.345715 2.67275,10.746105 A 0.89076908,0.89076908 0 0 0 2.22743,11.51759 v 16.802734 a 0.89076908,0.89076908 0 0 0 0.44532,0.771485 l 14.55078,8.402343 a 0.89076908,0.89076908 0 0 0 0.89062,0 l 14.55078,-8.402343 a 0.89076908,0.89076908 0 0 0 0.44532,-0.771485 V 11.51759 A 0.89076908,0.89076908 0 0 0 32.66493,10.746105 L 18.11415,2.345715 a 0.89076908,0.89076908 0 0 0 -0.89062,0 z M 17.66884,4.144543 31.329,12.033215 V 27.806652 L 17.66884,35.693371 4.00868,27.806652 V 12.033215 Z"></path></g>');
const ci = {
  hash: "svelte-n6iudw",
  code: ".hex-map-focus-indicator.svelte-n6iudw {pointer-events:none;}"
};
function Jt(e, t) {
  re(t, !0), Ie(e, ci);
  let r = y(t, "groups", 7), o = y(t, "id", 7), n = y(t, "layout", 7), a = y(t, "type", 7, "focus"), s = /* @__PURE__ */ B(() => r().flatMap((h) => h.hexes.map((d) => ({ ...d, group: h.name }))).sort((h, d) => h.index - d.index)), i = /* @__PURE__ */ B(() => {
    if (!o())
      return;
    const h = g(s).find((b) => b.id === o()), [d, v] = n().positions[h.group], [u, m] = h.coord, p = m % 2 ? 0.5 : 0, [C, _] = Nr([d + u + p, v + m], "").map(Number);
    return [C - 3, _ - 3];
  });
  var l = ct(), c = _e(l);
  {
    var f = (h) => {
      var d = li(), v = H(d);
      {
        var u = (m) => {
          var p = ii();
          or(), F(m, p);
        };
        ce(v, (m) => {
          a() === "focus" && m(u);
        });
      }
      or(), I(d), ee((m) => K(d, "transform", m), [
        () => `translate(${g(i).join(" ")}) scale(0.95)`
      ]), F(h, d);
    };
    ce(c, (h) => {
      g(i) && h(f);
    });
  }
  return F(e, l), oe({
    get groups() {
      return r();
    },
    set groups(h) {
      r(h), w();
    },
    get id() {
      return o();
    },
    set id(h) {
      o(h), w();
    },
    get layout() {
      return n();
    },
    set layout(h) {
      n(h), w();
    },
    get type() {
      return a();
    },
    set type(h = "focus") {
      a(h), w();
    }
  });
}
fe(Jt, { groups: {}, id: {}, layout: {}, type: {} }, [], [], !0);
var ui = typeof global == "object" && global && global.Object === Object && global, di = typeof self == "object" && self && self.Object === Object && self, jn = ui || di || Function("return this")(), dr = jn.Symbol, zn = Object.prototype, fi = zn.hasOwnProperty, hi = zn.toString, Tt = dr ? dr.toStringTag : void 0;
function vi(e) {
  var t = fi.call(e, Tt), r = e[Tt];
  try {
    e[Tt] = void 0;
    var o = !0;
  } catch {
  }
  var n = hi.call(e);
  return o && (t ? e[Tt] = r : delete e[Tt]), n;
}
var gi = Object.prototype, pi = gi.toString;
function xi(e) {
  return pi.call(e);
}
var mi = "[object Null]", wi = "[object Undefined]", Mo = dr ? dr.toStringTag : void 0;
function yi(e) {
  return e == null ? e === void 0 ? wi : mi : Mo && Mo in Object(e) ? vi(e) : xi(e);
}
function bi(e) {
  return e != null && typeof e == "object";
}
var _i = "[object Symbol]";
function Ni(e) {
  return typeof e == "symbol" || bi(e) && yi(e) == _i;
}
var Ai = /\s/;
function Ci(e) {
  for (var t = e.length; t-- && Ai.test(e.charAt(t)); )
    ;
  return t;
}
var Pi = /^\s+/;
function Si(e) {
  return e && e.slice(0, Ci(e) + 1).replace(Pi, "");
}
function $r(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Bo = NaN, Ei = /^[-+]0x[0-9a-f]+$/i, Li = /^0b[01]+$/i, Ti = /^0o[0-7]+$/i, Oi = parseInt;
function Do(e) {
  if (typeof e == "number")
    return e;
  if (Ni(e))
    return Bo;
  if ($r(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = $r(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Si(e);
  var r = Li.test(e);
  return r || Ti.test(e) ? Oi(e.slice(2), r ? 2 : 8) : Ei.test(e) ? Bo : +e;
}
var Er = function() {
  return jn.Date.now();
}, Ri = "Expected a function", ki = Math.max, Ii = Math.min;
function Fi(e, t, r) {
  var o, n, a, s, i, l, c = 0, f = !1, h = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Ri);
  t = Do(t) || 0, $r(r) && (f = !!r.leading, h = "maxWait" in r, a = h ? ki(Do(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);
  function v(N) {
    var P = o, O = n;
    return o = n = void 0, c = N, s = e.apply(O, P), s;
  }
  function u(N) {
    return c = N, i = setTimeout(C, t), f ? v(N) : s;
  }
  function m(N) {
    var P = N - l, O = N - c, k = t - P;
    return h ? Ii(k, a - O) : k;
  }
  function p(N) {
    var P = N - l, O = N - c;
    return l === void 0 || P >= t || P < 0 || h && O >= a;
  }
  function C() {
    var N = Er();
    if (p(N))
      return _(N);
    i = setTimeout(C, m(N));
  }
  function _(N) {
    return i = void 0, d && o ? v(N) : (o = n = void 0, s);
  }
  function b() {
    i !== void 0 && clearTimeout(i), c = 0, o = l = n = i = void 0;
  }
  function x() {
    return i === void 0 ? s : _(Er());
  }
  function A() {
    var N = Er(), P = p(N);
    if (o = arguments, n = this, l = N, P) {
      if (i === void 0)
        return u(l);
      if (h)
        return clearTimeout(i), i = setTimeout(C, t), v(l);
    }
    return i === void 0 && (i = setTimeout(C, t)), s;
  }
  return A.cancel = b, A.flush = x, A;
}
function Mi({ isInteractive: e = !1, onClick: t, onHover: r }) {
  if (!e)
    return {};
  const o = Fi(r, 10), n = ({ target: i, clientX: l, clientY: c }) => {
    var h;
    const f = (h = i == null ? void 0 : i.dataset) == null ? void 0 : h.id;
    !f || !t || t({ code: f, clientX: l, clientY: c });
  }, a = (i) => {
    const l = i.target, { clientX: c, clientY: f } = i, h = l.dataset.id;
    l.nodeName !== "polygon" || !h || o({ code: h, clientX: c, clientY: f });
  }, s = (i) => {
    o({ code: null });
  };
  return {
    onblur: s,
    onmouseout: s,
    onmouseover: a,
    onclick: n
  };
}
var Bi = /* @__PURE__ */ ne('<g><text> </text><text class="hexlabels__text svelte-1kzhlql"> </text></g>'), Di = /* @__PURE__ */ ne('<g class="hexlabels svelte-1kzhlql"></g>');
const Hi = {
  hash: "svelte-1kzhlql",
  code: ".hexlabels.svelte-1kzhlql {pointer-events:none;}.hexlabels__text.svelte-1kzhlql {font-size:10px;font-weight:700;font-family:ABCSans, sans-serif;text-anchor:middle;transition:all 0.2s;}"
};
function Yn(e, t) {
  re(t, !0), Ie(e, Hi);
  let r = y(t, "hexes", 7), o = y(t, "allocations", 7), n = y(t, "certainties", 7), a = y(t, "labelsToShow", 23, () => ({})), s = y(t, "showElectorateLabels", 7, !1), i = /* @__PURE__ */ B(() => s() ? r() : r().filter(({ id: c }) => a()[c]));
  var l = Di();
  return qe(l, 21, () => g(i), Ke, (c, f) => {
    let h = () => g(f).id, d = () => g(f).coordPx, v = () => g(f).shortName;
    var u = Bi(), m = H(u);
    let p;
    var C = H(m, !0);
    I(m);
    var _ = Q(m), b = H(_, !0);
    I(_), I(u), ee(
      (x) => {
        K(u, "transform", x), p = _r(m, 0, "hexlabels__text svelte-1kzhlql", null, p, {
          "hexlabels__text--allocation": o()[h()]
        }), ue(m, "stroke", `var(--u-${o()[h()]})`), ue(m, "stroke-width", "3"), ue(m, "opacity", o()[h()] && !n()[h()] ? 1 : 0), je(C, v()), ue(_, "fill", o()[h()] && n()[h()] ? "white" : "black"), je(b, v());
      },
      [
        () => `translate(${d().join(" ")}) rotate(-30) translate(0 3)`
      ]
    ), F(c, u);
  }), I(l), F(e, l), oe({
    get hexes() {
      return r();
    },
    set hexes(c) {
      r(c), w();
    },
    get allocations() {
      return o();
    },
    set allocations(c) {
      o(c), w();
    },
    get certainties() {
      return n();
    },
    set certainties(c) {
      n(c), w();
    },
    get labelsToShow() {
      return a();
    },
    set labelsToShow(c = {}) {
      a(c), w();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(c = !1) {
      s(c), w();
    }
  });
}
fe(
  Yn,
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
var Vi = /* @__PURE__ */ ne('<g class="group-outline group-outline__under svelte-is11bp"><!></g>'), Wi = /* @__PURE__ */ ne('<g><g class="group-hexes svelte-is11bp"><!></g><!></g>'), $i = /* @__PURE__ */ ne('<g class="group-outline group-outline__over svelte-is11bp"><!></g>'), Gi = /* @__PURE__ */ ne('<g><g class="group-hex-strokes svelte-is11bp"><!></g><!><!></g>'), Ui = /* @__PURE__ */ ne('<g class="svelte-is11bp"><!><!></g>');
const ji = {
  hash: "svelte-is11bp",
  code: `.group.svelte-is11bp:not(.group--map-is-static) {transition:all 1s cubic-bezier(0.42, 0, 0.58, 1);}.group--rendered.svelte-is11bp .hex {transition:all 0.5s;}.group--rendered.svelte-is11bp .hex-outline {transition:opacity 0.5s, stroke 0.5s;}.group--hidden.svelte-is11bp {opacity:0;pointer-events:none;}.group-hex-strokes.svelte-is11bp,
.group-outline.svelte-is11bp {pointer-events:none;}.group.svelte-is11bp .hex {vector-effect:non-scaling-stroke;fill:transparent;transform-box:fill-box;transform-origin:50% 50%;--hexFlipMinWidth: 0.03;}
@media (min-width: 46.5rem) {.group.svelte-is11bp .hex {--hexFlipMinWidth: 0.03;}
}.group.svelte-is11bp .hex.hex--flip {
  animation: svelte-is11bp-hex-flip 1s ease-in-out;}.group-outline.svelte-is11bp .hex-outline {fill:transparent;stroke:var(--c-stateOutline);stroke-width:1.5px;vector-effect:non-scaling-stroke;}.group--map-is-empty.svelte-is11bp:not(.group--has-focuses) .group-outline:where(.svelte-is11bp) .hex-outline {stroke:var(--c-emptyStateOutline);}.group--map-is-full.svelte-is11bp:not(.group--has-focuses) .group-outline:where(.svelte-is11bp) .hex-outline {stroke:var(--c-fullStateOutline);}.group-hexes.svelte-is11bp .hex[data-allocation="Any"] {fill:var(--a-Any);}.group-hexes.svelte-is11bp .hex[data-allocation="ALP"] {fill:var(--a-ALP);}.group-hexes.svelte-is11bp .hex[data-allocation="CLP"] {fill:var(--a-CLP);}.group-hexes.svelte-is11bp .hex[data-allocation="GRN"] {fill:var(--a-GRN);}.group-hexes.svelte-is11bp .hex[data-allocation="IND"] {fill:var(--a-IND);}.group-hexes.svelte-is11bp .hex[data-allocation="KAP"] {fill:var(--a-KAP);}.group-hexes.svelte-is11bp .hex[data-allocation="LIB"] {fill:var(--a-LIB);}.group-hexes.svelte-is11bp .hex[data-allocation="LNP"] {fill:var(--a-LNP);}.group-hexes.svelte-is11bp .hex[data-allocation="NAT"] {fill:var(--a-NAT);}.group-hexes.svelte-is11bp .hex[data-allocation="ONP"] {fill:var(--a-ONP);}.group-hexes.svelte-is11bp .hex[data-allocation="OTH"] {fill:var(--a-OTH);}.group-hexes.svelte-is11bp .hex[data-allocation="PUP"] {fill:var(--a-PUP);}.group-hexes.svelte-is11bp .hex[data-allocation="Teal"] {fill:var(--a-Teal);}.group-hexes.svelte-is11bp .hex[data-allocation="CA"] {fill:var(--a-CA);}.group-hexes.svelte-is11bp .hex[data-allocation="TOP"] {fill:var(--a-TOP);}.group-hexes.svelte-is11bp .hex[data-allocation="null"] {fill:var(--a-null);stroke:var(--a-nullBorder);stroke-width:1.5px;}.group--map-is-empty.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex {fill:var(--c-empty);stroke:var(--c-emptyBorder);stroke-width:1px;}.group-hex-strokes.svelte-is11bp .hex {fill:transparent;stroke:transparent;stroke-width:1.5px;}.group-hex-strokes.svelte-is11bp .hex:not([data-allocation="null"]) {fill:transparent;stroke:var(--c-filledBorder);stroke-width:1.5px;}.group-hex-strokes.svelte-is11bp .hex[data-certain="null"]:not([data-allocation="null"]) {fill:url(#uncertainty-hash);stroke-width:2px;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex {stroke-width:1.5px;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="true"] {fill:var(--c-white);}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="true"] {stroke:var(--c-black);}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="false"] {fill:#fff;stroke:#fff;}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex[data-allocation="null"][data-focused="false"] {stroke:transparent;}.group--has-focuses.svelte-is11bp .group-hexes:where(.svelte-is11bp) .hex:not([data-allocation="null"])[data-focused="false"] {opacity:0.1;}.group--has-focuses.svelte-is11bp .group-hex-strokes:where(.svelte-is11bp) .hex:not([data-allocation="null"])[data-focused="false"] {stroke:var(--c-white);}.group--is-outline.svelte-is11bp .hex {opacity:0;}.group--is-outline.svelte-is11bp .hex-outline {stroke:var(--c-emptyBorder) !important;}

@keyframes svelte-is11bp-hex-flip {
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
function Kn(e, t) {
  re(t, !0), Ie(e, ji);
  let r = y(t, "groups", 7), o = y(t, "isStaticLayout", 7), n = y(t, "layout", 7), a = y(t, "allocations", 7), s = y(t, "focuses", 7), i = y(t, "certainties", 7), l = y(t, "showElectorateLabels", 7), c = y(t, "showFocusedElectorateLabels", 7), f = y(t, "labelsToShow", 7), h = y(t, "isOutlineOnly", 7, !1), d = y(t, "showStateOutlinesOnTop", 7, !1), v = y(t, "hexFlip", 7, "None"), u = we(void 0), m = we(!1);
  dt(() => {
    setTimeout(
      () => {
        U(m, !0);
      },
      1
    );
  });
  let p = /* @__PURE__ */ B(() => {
    const T = Object.values(a());
    return T.length !== 0 && T.some(Boolean);
  }), C = /* @__PURE__ */ B(() => {
    const T = Object.values(a());
    return T.length !== 0 && T.every(Boolean);
  }), _ = /* @__PURE__ */ B(() => Object.values(s()).some(Boolean)), b = /* @__PURE__ */ B(() => {
    var T;
    return Array.from(((T = g(u)) == null ? void 0 : T.querySelectorAll("polygon.hex")) || []).filter((G) => G instanceof SVGPolygonElement);
  }), x = { allocation: {} };
  Se(() => {
    const T = { ...a() }, G = s(), q = i();
    g(b).forEach((E) => {
      const L = E.dataset.id;
      if (!L)
        return;
      const R = T[L] || null, M = x.allocation[L];
      E.dataset.allocation = R, v() === "Flip" && M !== R && (E.style.setProperty("--allocationFrom", `var(--a-${M})`), E.style.setProperty("--allocationTo", `var(--a-${R})`), E.classList.add("hex--flip")), x.allocation[L] = R;
      const $ = g(_) ? G[L] || !1 : !0;
      E.dataset.focused = $;
      const Y = q[L] || null;
      E.dataset.certain = Y;
    });
  });
  let A = /* @__PURE__ */ B(() => {
    const T = r(), G = n();
    return T.map((q) => {
      const E = G.positions[q.name], L = E && E[0] !== 1 / 0, R = Nr(E).join(","), M = g(_) && c() ? s() : f(), $ = {
        "data-name": q.name,
        style: `transform: translate(${R})`,
        class: [
          "group",
          !L && "group--hidden",
          o() && "group--map-is-static",
          !g(p) && "group--map-is-empty",
          g(C) && "group--map-is-full",
          g(_) && "group--has-focuses",
          h() && "group--is-outline",
          g(m) && "group--rendered"
        ].filter(Boolean).join(" ")
      };
      return { isVisible: L, labels: M, group: q, groupProps: $ };
    });
  }), N = /* @__PURE__ */ B(() => d() || g(p) && g(_));
  var P = Ui(), O = H(P);
  qe(O, 17, () => g(A), Ke, (T, G) => {
    let q = () => g(G).groupProps, E = () => g(G).group;
    var L = Wi();
    let R;
    var M = H(L), $ = H(M);
    jt($, () => E().svgHexes), I(M);
    var Y = Q(M);
    {
      var ae = (he) => {
        var X = Vi(), xe = H(X);
        jt(xe, () => E().svgOutline), I(X), ut(2, X, () => ht, () => ({ duration: 200, delay: 200 })), F(he, X);
      };
      ce(Y, (he) => {
        g(N) || he(ae);
      });
    }
    I(L), ee(() => R = cr(L, R, { ...q() }, "svelte-is11bp", !0)), F(T, L);
  });
  var k = Q(O);
  return qe(k, 17, () => g(A), Ke, (T, G) => {
    let q = () => g(G).groupProps, E = () => g(G).isVisible, L = () => g(G).labels, R = () => g(G).group;
    var M = Gi();
    let $;
    var Y = H(M), ae = H(Y);
    jt(ae, () => R().svgHexes), I(Y);
    var he = Q(Y);
    {
      var X = (ve) => {
        var se = $i(), Ze = H(se);
        jt(Ze, () => R().svgOutline), I(se), ut(3, se, () => ht, () => ({ duration: 200 })), F(ve, se);
      };
      ce(he, (ve) => {
        g(N) && ve(X);
      });
    }
    var xe = Q(he);
    {
      var Fe = (ve) => {
        Yn(ve, {
          get hexes() {
            return R().hexes;
          },
          get allocations() {
            return a();
          },
          get certainties() {
            return i();
          },
          get labelsToShow() {
            return L();
          },
          get showElectorateLabels() {
            return l();
          }
        });
      };
      ce(xe, (ve) => {
        E() && ve(Fe);
      });
    }
    I(M), ee(() => $ = cr(M, $, { ...q() }, "svelte-is11bp", !0)), F(T, M);
  }), I(P), $t(P, (T) => U(u, T), () => g(u)), bs("animationend", P, (T) => {
    T.target.classList.remove("hex--flip");
  }), F(e, P), oe({
    get groups() {
      return r();
    },
    set groups(T) {
      r(T), w();
    },
    get isStaticLayout() {
      return o();
    },
    set isStaticLayout(T) {
      o(T), w();
    },
    get layout() {
      return n();
    },
    set layout(T) {
      n(T), w();
    },
    get allocations() {
      return a();
    },
    set allocations(T) {
      a(T), w();
    },
    get focuses() {
      return s();
    },
    set focuses(T) {
      s(T), w();
    },
    get certainties() {
      return i();
    },
    set certainties(T) {
      i(T), w();
    },
    get showElectorateLabels() {
      return l();
    },
    set showElectorateLabels(T) {
      l(T), w();
    },
    get showFocusedElectorateLabels() {
      return c();
    },
    set showFocusedElectorateLabels(T) {
      c(T), w();
    },
    get labelsToShow() {
      return f();
    },
    set labelsToShow(T) {
      f(T), w();
    },
    get isOutlineOnly() {
      return h();
    },
    set isOutlineOnly(T = !1) {
      h(T), w();
    },
    get showStateOutlinesOnTop() {
      return d();
    },
    set showStateOutlinesOnTop(T = !1) {
      d(T), w();
    },
    get hexFlip() {
      return v();
    },
    set hexFlip(T = "None") {
      v(T), w();
    }
  });
}
fe(
  Kn,
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
var zi = /* @__PURE__ */ ne('<g class="svelte-1trui9u"><path d="m -0.2818285,0 -1.224857,-62.62499 1.603794,-1.590508 1.473302,1.469369 L 0.2818285,0 Z" stroke-width="2" class="svelte-1trui9u"></path><path d="M -3.3195607,1.900056 -1.8778392e-5,-1.419517 3.3195642,1.900064" stroke-width="2" fill="none" class="svelte-1trui9u"></path></g>');
const Yi = {
  hash: "svelte-1trui9u",
  code: `path.svelte-1trui9u,
g.svelte-1trui9u {transition:all 0.5s;}`
};
function so(e, t) {
  re(t, !0), Ie(e, Yi);
  let r = y(t, "coordPx", 7), o = y(t, "rotation", 7), n = y(t, "colour", 7), a = y(t, "opacity", 7, 1), s = y(t, "value", 7), i = y(t, "arrowHeight", 7), l = y(t, "tether", 7, "base"), c = /* @__PURE__ */ B(() => {
    const p = Math.abs(s());
    return Math.min(1.5, 0.3 + p / 20);
  }), f = /* @__PURE__ */ B(() => l() === "base" ? "" : `translate(0 ${63 * s() * i()})`);
  var h = zi(), d = H(h), v = Q(d);
  return I(h), ee(
    (u) => {
      K(h, "data-tether", l()), K(h, "transform", u), ue(h, "opacity", a()), K(d, "transform", `${g(f)} scale(${g(c)} ${s() * i()})`), ue(d, "fill", n()), K(v, "transform", `translate(0 ${-63 * s() * i()}) ${g(f)} rotate(${s() < 0 ? 180 : 0}) scale(${g(c)})`), ue(v, "stroke", n());
    },
    [
      () => `translate(${r().join(" ")}) rotate(${o()})`
    ]
  ), F(e, h), oe({
    get coordPx() {
      return r();
    },
    set coordPx(u) {
      r(u), w();
    },
    get rotation() {
      return o();
    },
    set rotation(u) {
      o(u), w();
    },
    get colour() {
      return n();
    },
    set colour(u) {
      n(u), w();
    },
    get opacity() {
      return a();
    },
    set opacity(u = 1) {
      a(u), w();
    },
    get value() {
      return s();
    },
    set value(u) {
      s(u), w();
    },
    get arrowHeight() {
      return i();
    },
    set arrowHeight(u) {
      i(u), w();
    },
    get tether() {
      return l();
    },
    set tether(u = "base") {
      l(u), w();
    }
  });
}
fe(
  so,
  {
    coordPx: {},
    rotation: {},
    colour: {},
    opacity: {},
    value: {},
    arrowHeight: {},
    tether: {}
  },
  [],
  [],
  !0
);
var Ki = /* @__PURE__ */ ne('<g class="hex-map-arrows"></g>');
function io(e, t) {
  re(t, !0);
  let r = y(t, "groups", 7), o = y(t, "layout", 7), n = y(t, "arrowData", 7), a = y(t, "arrowHeight", 7), s = y(t, "getColourForValue", 7), i = y(t, "getRotationForValue", 7);
  var l = ct(), c = _e(l);
  return qe(c, 17, r, Ke, (f, h) => {
    var d = ct(), v = _e(d);
    {
      var u = (m) => {
        var p = Ki();
        qe(p, 21, () => g(h).hexes, Ke, (C, _) => {
          let b = () => g(_).coordPx, x = () => g(_).id;
          const A = /* @__PURE__ */ B(() => i()(n()[x()])), N = /* @__PURE__ */ B(() => n()[x()] ? 1 : 0), P = /* @__PURE__ */ B(() => n()[x()] || 0), O = /* @__PURE__ */ B(() => s()(n()[x()]));
          so(C, {
            get coordPx() {
              return b();
            },
            get rotation() {
              return g(A);
            },
            get opacity() {
              return g(N);
            },
            get value() {
              return g(P);
            },
            get colour() {
              return g(O);
            },
            get arrowHeight() {
              return a();
            }
          });
        }), I(p), ee((C) => K(p, "transform", C), [
          () => `translate(${Nr(o().positions[g(h).name], "").join(",")})`
        ]), ut(3, p, () => ht, () => ({ duration: 750 })), F(m, p);
      };
      ce(v, (m) => {
        o().positions[g(h).name] && m(u);
      });
    }
    F(f, d);
  }), F(e, l), oe({
    get groups() {
      return r();
    },
    set groups(f) {
      r(f), w();
    },
    get layout() {
      return o();
    },
    set layout(f) {
      o(f), w();
    },
    get arrowData() {
      return n();
    },
    set arrowData(f) {
      n(f), w();
    },
    get arrowHeight() {
      return a();
    },
    set arrowHeight(f) {
      a(f), w();
    },
    get getColourForValue() {
      return s();
    },
    set getColourForValue(f) {
      s(f), w();
    },
    get getRotationForValue() {
      return i();
    },
    set getRotationForValue(f) {
      i(f), w();
    }
  });
}
fe(
  io,
  {
    groups: {},
    layout: {},
    arrowData: {},
    arrowHeight: {},
    getColourForValue: {},
    getRotationForValue: {}
  },
  [],
  [],
  !0
);
const fr = At(), qi = { url: "https://www.abc.net.au/news-web/api/syndicate/storylab/elections/federal/2025" }, Qi = {
  liveData: qi
}, Xi = { None: "a", Any: "z", ALP: "b", CA: "c", CLP: "d", GRN: "e", IND: "f", KAP: "g", LIB: "h", LNP: "i", NAT: "j", ONP: "k", OTH: "l", UAP: "m", Teal: "t", PUP: "m", TOP: "m" }, Zi = { LIB: "LNP", LNP: "LNP", CLP: "LNP", NAT: "LNP", ALP: "ALP" }, qn = {
  hashCodes: Xi,
  synonyms: Zi
};
function Ji(e, t = (r) => !0) {
  return e.data.electorates.reduce((r, o) => {
    const n = o.code;
    if (Number(o.counted || 0) <= 5)
      return r[n] = 0, r;
    if (!o.runners)
      return console.error("Missing runners"), r;
    const s = [...o.runners, ...o.ghosts || []].filter((i) => {
      const l = qn.synonyms[i.party.code] || i.party.code;
      return t(l);
    }).reduce((i, l) => {
      var h;
      const c = (h = l == null ? void 0 : l.simple) == null ? void 0 : h.swing, f = c ? Number(c) : 0;
      return i + f;
    }, 0);
    return r[n] = s, r;
  }, {});
}
let Kt;
async function Qn({ cache: e } = { cache: !0 }) {
  return e && Kt || (Kt = fetch(Qi.liveData.url).then((t) => t.json())), Kt;
}
var el = /* @__PURE__ */ ne('<g><g transform="translate(0,10)"><text class="caption svelte-egtalb"> </text></g></g>'), tl = /* @__PURE__ */ ne('<g><!><text class="hex-map-arrow-legend svelte-egtalb"><tspan> </tspan></text></g>'), rl = /* @__PURE__ */ ne('<text class="labor svelte-egtalb">Labor</text><g><text class="lnp svelte-egtalb">L/NP</text></g>', 1), ol = /* @__PURE__ */ ne('<text class="hex-map-arrow-legend__light svelte-egtalb"> </text>'), nl = /* @__PURE__ */ ne('<!><g class="hex-map-arrow-legend svelte-egtalb"><!><!><text> </text><!></g>', 1);
const al = {
  hash: "svelte-egtalb",
  code: `.hex-map-arrow-legend.svelte-egtalb {fill:black;
  /* Text Regular/xs */font-family:ABCSans;font-size:0.75rem;font-style:normal;font-weight:400;line-height:135%; /* 1.0125rem */width:30px;text-align:center;font-size:var(--fontSize);}text.hex-map-arrow-legend__light.svelte-egtalb {fill:var(--Light-grey-compliant, #767676);}.lnp.svelte-egtalb {fill:var(--a-LNP);}.labor.svelte-egtalb {fill:var(--a-ALP);}.lnp.svelte-egtalb,
.labor.svelte-egtalb {font-weight:bold;}.caption.svelte-egtalb {color:#000;
  /* Text Regular/lg */font-family:ABCSans;font-style:normal;font-weight:400;line-height:150%; /* 1.6875rem */}`
};
function lo(e, t) {
  re(t, !0), Ie(e, al);
  const [r, o] = Lt(), n = () => ur(a, "$svgElCurrentScale", r), a = oo("svgElCurrentScale");
  let s = /* @__PURE__ */ B(() => n()), i = y(t, "caption", 7, ""), l = y(t, "scales", 7), c = y(t, "arrowHeight", 7), f = y(t, "getRotationForValue", 7), h = y(t, "getColourForValue", 7), d = y(t, "countedPct", 7), v = y(t, "alpLnp", 7, !1), u = y(t, "chartName", 7, "");
  const m = {
    largeScreen: {
      left: 0,
      top: 460,
      fontSize: "18px",
      yOffset: 25,
      arrowGap: 35,
      captionSize: "24px"
    },
    smallScreen: {
      left: 0,
      top: 460,
      fontSize: "12px",
      yOffset: 15,
      arrowGap: 20,
      captionSize: "18px"
    }
  };
  let p = /* @__PURE__ */ B(() => m[g(s) < 1.2 ? "largeScreen" : "smallScreen"]), C = /* @__PURE__ */ B(() => `scale(${g(s).toFixed(2)})`);
  var _ = nl(), b = _e(_);
  {
    var x = (L) => {
      var R = el(), M = H(R), $ = H(M), Y = H($, !0);
      I($), I(M), I(R), ee(
        (ae) => {
          K(R, "transform", ae), ue($, "font-size", g(p).captionSize), je(Y, i());
        },
        [
          () => `scale(${n().toFixed(2)})`
        ]
      ), F(L, R);
    };
    ce(b, (L) => {
      i() && L(x);
    });
  }
  var A = Q(b), N = H(A);
  qe(N, 17, l, Ke, (L, R, M) => {
    let $ = () => g(R).name, Y = () => g(R).value, ae = () => g(R).tether, he = /* @__PURE__ */ on(() => Fa(g(R).colour, null));
    var X = tl(), xe = H(X);
    const Fe = /* @__PURE__ */ B(() => f()(Y())), ve = /* @__PURE__ */ B(() => h()(Y()));
    so(xe, {
      coordPx: [10, 0],
      get arrowHeight() {
        return c();
      },
      get rotation() {
        return g(Fe);
      },
      get colour() {
        return g(ve);
      },
      get value() {
        return Y();
      },
      get tether() {
        return ae();
      }
    });
    var se = Q(xe), Ze = H(se), Gt = H(Ze, !0);
    I(Ze), I(se), I(X), ee(() => {
      K(X, "transform", `translate(${M * g(p).arrowGap * g(s)} 0)`), K(se, "y", g(p).yOffset), K(se, "transform", g(C)), ue(se, "fill", g(he)), je(Gt, $());
    }), F(L, X);
  });
  var P = Q(N);
  {
    var O = (L) => {
      var R = rl(), M = _e(R), $ = Q(M), Y = H($);
      I($), ee(() => {
        K(M, "y", g(p).yOffset * 2), K(M, "transform", g(C)), K($, "transform", `translate(${2 * g(p).arrowGap * g(s)} 0)`), K(Y, "y", g(p).yOffset * 2), K(Y, "transform", g(C));
      }), F(L, R);
    };
    ce(P, (L) => {
      v() && L(O);
    });
  }
  var k = Q(P), T = H(k, !0);
  I(k);
  var G = Q(k);
  {
    var q = (L) => {
      var R = ol(), M = H(R);
      I(R), ee(() => {
        K(R, "y", g(p).yOffset * (v() ? 4 : 3)), K(R, "transform", g(C)), je(M, `${d() ?? ""}% counted`);
      }), F(L, R);
    };
    ce(G, (L) => {
      d() && L(q);
    });
  }
  I(A), ee(() => {
    K(A, "transform", `translate(${g(p).left} ${g(p).top - (v() ? g(p).yOffset : 0)})`), ue(A, "--fontSize", g(p).fontSize), K(k, "y", g(p).yOffset * (v() ? 3 : 2)), K(k, "transform", g(C)), je(T, u());
  }), ut(3, A, () => ht), F(e, _);
  var E = oe({
    get caption() {
      return i();
    },
    set caption(L = "") {
      i(L), w();
    },
    get scales() {
      return l();
    },
    set scales(L) {
      l(L), w();
    },
    get arrowHeight() {
      return c();
    },
    set arrowHeight(L) {
      c(L), w();
    },
    get getRotationForValue() {
      return f();
    },
    set getRotationForValue(L) {
      f(L), w();
    },
    get getColourForValue() {
      return h();
    },
    set getColourForValue(L) {
      h(L), w();
    },
    get countedPct() {
      return d();
    },
    set countedPct(L) {
      d(L), w();
    },
    get alpLnp() {
      return v();
    },
    set alpLnp(L = !1) {
      v(L), w();
    },
    get chartName() {
      return u();
    },
    set chartName(L = "") {
      u(L), w();
    }
  });
  return o(), E;
}
fe(
  lo,
  {
    caption: {},
    scales: {},
    arrowHeight: {},
    getRotationForValue: {},
    getColourForValue: {},
    countedPct: {},
    alpLnp: {},
    chartName: {}
  },
  [],
  [],
  !0
);
var sl = /* @__PURE__ */ Ne("<!> <!>", 1);
const il = { hash: "svelte-45h", code: "" };
function Xn(e, t) {
  re(t, !0), Ie(e, il);
  const [r, o] = Lt(), { resetViewboxPadding: n, setViewboxPadding: a } = oo("viewbox-padding") || {}, s = {
    ALP: "Labor",
    LNP: "L/NP",
    GRN: "Greens",
    IND: "Independents",
    ONP: "One Nation",
    TOP: "Trumpet of Patriots"
  };
  let i = y(t, "arrowChart", 7), l = y(t, "groups", 7), c = y(t, "layout", 7), f = y(t, "arrowChartPercentCounted", 7), h = y(t, "arrowChartCaption", 7);
  const d = 0.08;
  let v = we(void 0), u = /* @__PURE__ */ B(() => String(i().split(" ")[0])), m = /* @__PURE__ */ B(() => g(v) ? Ji(g(v), (N) => N === g(u)) : {});
  Se(() => {
    ft(fr, (N) => `Change in first pref
for ${g(u)}: ${g(m)[N] ? g(m)[N].toFixed(3) + "%" : "not applicable"}`);
  }), dt(() => () => {
    ft(fr, void 0);
  });
  let p = /* @__PURE__ */ B(() => () => `var(--a-${g(u).length > 3 ? "OTH" : g(u).toUpperCase()}, hotpink)`);
  const C = () => 20;
  dt(() => {
    const N = a("HexMapArrowsFirsPreference", [33, 0, 30, 0]);
    return Qn({ cache: !0 }).then((P) => {
      U(v, Pe(P));
    }), () => n(N);
  });
  var _ = ct(), b = _e(_);
  {
    var x = (N) => {
      var P = sl(), O = _e(P);
      io(O, {
        get groups() {
          return l();
        },
        get layout() {
          return c();
        },
        get arrowData() {
          return g(m);
        },
        arrowHeight: d,
        getRotationForValue: C,
        get getColourForValue() {
          return g(p);
        }
      });
      var k = Q(O, 2);
      const T = /* @__PURE__ */ B(() => h() ? s[g(u)] || g(u) : ""), G = /* @__PURE__ */ B(() => {
        var q, E, L;
        return f() ? (L = (E = (q = g(v)) == null ? void 0 : q.data) == null ? void 0 : E.overall) == null ? void 0 : L.counted : void 0;
      });
      lo(k, {
        get caption() {
          return g(T);
        },
        chartName: "Primary vote change %",
        get countedPct() {
          return g(G);
        },
        arrowHeight: d,
        getRotationForValue: C,
        get getColourForValue() {
          return g(p);
        },
        scales: [
          { name: "-10", value: -10, tether: "head" },
          { name: "-5", value: -5, tether: "head" },
          { name: "5", value: 5, tether: "base" },
          { name: "10", value: 10, tether: "base" }
        ]
      }), F(N, P);
    };
    ce(b, (N) => {
      g(v) && N(x);
    });
  }
  F(e, _);
  var A = oe({
    get arrowChart() {
      return i();
    },
    set arrowChart(N) {
      i(N), w();
    },
    get groups() {
      return l();
    },
    set groups(N) {
      l(N), w();
    },
    get layout() {
      return c();
    },
    set layout(N) {
      c(N), w();
    },
    get arrowChartPercentCounted() {
      return f();
    },
    set arrowChartPercentCounted(N) {
      f(N), w();
    },
    get arrowChartCaption() {
      return h();
    },
    set arrowChartCaption(N) {
      h(N), w();
    }
  });
  return o(), A;
}
fe(
  Xn,
  {
    arrowChart: {},
    groups: {},
    layout: {},
    arrowChartPercentCounted: {},
    arrowChartCaption: {}
  },
  [],
  [],
  !0
);
var ll = /* @__PURE__ */ Ne("<!> <!>", 1);
function Zn(e, t) {
  re(t, !0);
  const [r, o] = Lt(), { resetViewboxPadding: n, setViewboxPadding: a } = oo("viewbox-padding") || {};
  let s = y(t, "groups", 7), i = y(t, "layout", 7), l = y(t, "arrowChartPercentCounted", 7), c = we(void 0), f = /* @__PURE__ */ B(() => {
    const _ = g(c);
    if (!_)
      return {};
    const b = ["LIB", "LNP", "NAT", "CLP"];
    return _.data.electorates.reduce(
      (x, A) => {
        var k, T;
        const [N, P] = A.swingDial[0].party.code === "ALP" ? A.swingDial : [...A.swingDial].reverse();
        return N.party.code === "ALP" && b.includes(P.party.code) && Number(A.counted || 0) > 5 && (x[A.code] = Number(((k = N.predicted2CP) == null ? void 0 : k.swing) || ((T = N.simple2CP) == null ? void 0 : T.swing) || 0)), x;
      },
      {}
    );
  });
  Se(() => {
    ft(fr, (_) => `Swing: ${g(f)[_] ? `${g(f)[_].toFixed(2)}% to ${g(f)[_] > 0 ? "ALP" : "Coalition"}` : "not applicable"}`);
  }), dt(() => () => {
    ft(fr, void 0);
  });
  let h = /* @__PURE__ */ B(() => (_) => `var(--a-${_ < 0 ? "LNP" : "ALP"}, hotpink)`);
  const d = (_) => _ < 0 ? -135 : -45;
  dt(() => {
    Qn({ cache: !0 }).then((b) => {
      U(c, Pe(b));
    });
    const _ = a("HexMapArrowsSwing", [30, 0, 30, 0]);
    return () => n(_);
  });
  const v = 0.06;
  var u = ct(), m = _e(u);
  {
    var p = (_) => {
      var b = ll(), x = _e(b);
      io(x, {
        get arrowData() {
          return g(f);
        },
        arrowHeight: v,
        getRotationForValue: d,
        get getColourForValue() {
          return g(h);
        },
        get groups() {
          return s();
        },
        get layout() {
          return i();
        }
      });
      var A = Q(x, 2);
      const N = /* @__PURE__ */ B(() => {
        var P, O, k;
        return l() ? (k = (O = (P = g(c)) == null ? void 0 : P.data) == null ? void 0 : O.overall) == null ? void 0 : k.counted : void 0;
      });
      lo(A, {
        chartName: "Percentage point swing",
        get countedPct() {
          return g(N);
        },
        arrowHeight: v,
        getRotationForValue: d,
        get getColourForValue() {
          return g(h);
        },
        scales: [
          {
            name: "10",
            value: 10,
            tether: "base",
            colour: "var(--a-ALP)"
          },
          {
            name: "5",
            value: 5,
            tether: "base",
            colour: "var(--a-ALP)"
          },
          {
            name: "5",
            value: -5,
            tether: "base",
            colour: "var(--a-LNP)"
          },
          {
            name: "10",
            value: -10,
            tether: "base",
            colour: "var(--a-LNP)"
          }
        ],
        alpLnp: !0
      }), F(_, b);
    };
    ce(m, (_) => {
      g(c) && _(p);
    });
  }
  F(e, u);
  var C = oe({
    get groups() {
      return s();
    },
    set groups(_) {
      s(_), w();
    },
    get layout() {
      return i();
    },
    set layout(_) {
      i(_), w();
    },
    get arrowChartPercentCounted() {
      return l();
    },
    set arrowChartPercentCounted(_) {
      l(_), w();
    }
  });
  return o(), C;
}
fe(
  Zn,
  {
    groups: {},
    layout: {},
    arrowChartPercentCounted: {}
  },
  [],
  [],
  !0
);
function cl() {
  const e = At([0, 0, 0, 0]), t = At("none");
  let r = 0;
  function o(s, i) {
    e.set(i);
    const l = [s, r++].join();
    return t.set(l), l;
  }
  function n(s) {
    Vn(t) === s && (e.set([0, 0, 0, 0]), t.set("none"));
  }
  const a = {
    setViewboxPadding: o,
    resetViewboxPadding: n
  };
  return An("viewbox-padding", a), {
    viewboxPadding: e,
    viewboxApi: a
  };
}
function Ho(e, t = [0, 0, 0, 0]) {
  const [r, o, n, a] = t, [s, i, l, c] = e;
  return [s - a, i - r, l + a + o, c + r + n];
}
function ul() {
  return { svgElCurrentScale: At(1) };
}
const dl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAMCAYAAABm+U3GAAAACXBIWXMAABvBAAAbwQGXmrkfAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPpJREFUOI2d0rErhVEYwOHn09dVpFsGRVkMRtnsWCwyUiKRKPGn6FJkRJgsBhtlUgZlsLAZZDCIotw4htvN8dW97v3e8Xd6n06dk4QQEgS/M4BVDMo3NyilEdqNZYwhyQE+YAtnCCmKmMEUCjnAF+zjEOVqTEIIF2jPAX7gAHt4j3oR82kO9Asn2MFz1AuYxBw60ibRK6zjPmoJRlQevKcaG4VvUcJ1pg9hDf3Zhf/gJ2zj1N8v2YdFjNZarAW/YhdH+Ix6FxYwgZZ6N8rCZRyrPMxb1NswjVm01gOz8DfOsYHHzPk4ltDZCBgvXmITd1FPMIwV9DYDVucHs4YzzzgMYBMAAAAASUVORK5CYII=";
var fl = /* @__PURE__ */ Ne('<div class="hexmap__labels svelte-82t7dm"><!></div>'), hl = /* @__PURE__ */ Ne('<div class="hexmap svelte-82t7dm"><div><svg><defs id="defs1"><pattern id="uncertainty-hash" patternUnits="userSpaceOnUse" width="10.5" height="6" preserveAspectRatio="xMidYMid"><image x="0" y="0" width="22" height="12" transform="scale(0.5)" transform-origin="top left"></image></pattern></defs><!><!><!><!><!></svg> <!></div> <!></div>');
const vl = {
  hash: "svelte-82t7dm",
  code: ".hexmap.svelte-82t7dm {position:relative;width:100%;height:100%;position:relative;}.hexmap.svelte-82t7dm * {box-sizing:border-box;}.hexmap__labels.svelte-82t7dm {position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;}.hexmap.svelte-82t7dm svg:where(.svelte-82t7dm) {width:100%;height:100%;margin:0 auto;}.hexmap__viz.svelte-82t7dm {position:relative;margin:0 auto;max-height:100%;}"
};
function Jn(e, t) {
  re(t, !0), Ie(e, vl);
  const [r, o] = Lt(), n = () => ur(he, "$viewboxPadding", r), a = () => ur(X, "$svgElCurrentScale", r);
  let s = y(t, "config", 23, () => ({})), i = y(t, "layout", 23, () => ({})), l = y(t, "allocations", 23, () => ({})), c = y(t, "focuses", 23, () => ({})), f = y(t, "certainties", 23, () => ({})), h = y(t, "labelsToShow", 23, () => ({})), d = y(t, "showStateLabels", 7, !1), v = y(t, "showElectorateLabels", 7, !1), u = y(t, "showFocusedElectorateLabels", 7, !1), m = y(t, "isStaticLayout", 7, !1), p = y(t, "onClick", 7, ({ code: S }) => {
  }), C = y(t, "onHover", 7, ({ code: S }) => {
  }), _ = y(t, "onFocus", 7, ({ code: S }) => {
  }), b = y(t, "customViewbox", 7, null), x = y(t, "onViewboxChange", 7, ({ newViewbox: S }) => {
  }), A = y(t, "isInteractive", 7, !1), N = y(t, "arrowChart", 7, "None"), P = y(t, "arrowChartPercentCounted", 7, !0), O = y(t, "arrowChartCaption", 7), k = y(t, "selectedElectorate", 7, null), T = y(t, "customElectorateAltText", 7), G = y(t, "showStateOutlinesOnTop", 7, !1), q = y(t, "isInline", 7, !1), E = y(t, "hexFlip", 7, "None"), L = y(t, "altText", 7, ""), R = we(void 0), M = we(0), $ = we(0), Y = we(null), ae = we(null);
  const { viewboxPadding: he } = cl(), { svgElCurrentScale: X } = ul();
  An("svgElCurrentScale", X);
  const xe = Ho(i().viewbox, n()), Fe = {
    easing: Gs,
    duration: q() ? 0 : 1100
  };
  let ve = new yt(xe[0], Fe), se = new yt(xe[1], Fe), Ze = new yt(xe[2], Fe), Gt = new yt(xe[3], Fe);
  Se(() => {
    const [S, J, Je, Pr] = Ho(b() || i().viewbox, n());
    ve.set(S), se.set(J), Ze.set(Je), Gt.set(Pr);
  }), Se(() => {
    x()(i().viewbox);
  }), Se(() => {
    if (!g(R) || g($))
      return;
    const S = g(R).getBoundingClientRect();
    U($, S.height / S.width);
  });
  let oa = /* @__PURE__ */ B(() => Mi({
    isInteractive: A(),
    onClick: p(),
    onHover: (S) => {
      U(ae, Pe(S.code)), C()(S);
    }
  }));
  Se(() => {
    let S = g(M), J = Ze.current;
    if (!S) {
      ft(X, 1);
      return;
    }
    ft(X, J / S + 0.1);
  });
  let na = /* @__PURE__ */ B(() => L() ? { "aria-label": L(), role: "img" } : {});
  var Ut = hl(), gt = H(Ut);
  let ho;
  var pt = H(gt);
  let vo;
  var Ar = H(pt), Cr = H(Ar), aa = H(Cr);
  K(aa, "href", dl), I(Cr), I(Ar);
  var go = Q(Ar);
  const sa = /* @__PURE__ */ B(() => N() !== "None");
  Kn(go, {
    get groups() {
      return s().groups;
    },
    get isStaticLayout() {
      return m();
    },
    get layout() {
      return i();
    },
    get allocations() {
      return l();
    },
    get focuses() {
      return c();
    },
    get certainties() {
      return f();
    },
    get showElectorateLabels() {
      return v();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    get labelsToShow() {
      return h();
    },
    get showStateOutlinesOnTop() {
      return G();
    },
    get hexFlip() {
      return E();
    },
    get isOutlineOnly() {
      return g(sa);
    }
  });
  var po = Q(go);
  Jt(po, {
    get groups() {
      return s().groups;
    },
    get id() {
      return g(Y);
    },
    get layout() {
      return i();
    },
    type: "focus"
  });
  var xo = Q(po);
  Jt(xo, {
    get groups() {
      return s().groups;
    },
    get id() {
      return k();
    },
    get layout() {
      return i();
    },
    type: "focus"
  });
  var mo = Q(xo);
  Jt(mo, {
    get groups() {
      return s().groups;
    },
    get id() {
      return g(ae);
    },
    get layout() {
      return i();
    },
    type: "hover"
  });
  var ia = Q(mo);
  {
    var la = (S) => {
      var J = ct(), Je = _e(J);
      {
        var Pr = (xt) => {
          Zn(xt, {
            get groups() {
              return s().groups;
            },
            get layout() {
              return i();
            },
            get arrowChartPercentCounted() {
              return P();
            }
          });
        }, va = (xt) => {
          Xn(xt, {
            get groups() {
              return s().groups;
            },
            get layout() {
              return i();
            },
            get arrowChart() {
              return N();
            },
            get arrowChartPercentCounted() {
              return P();
            },
            get arrowChartCaption() {
              return O();
            }
          });
        };
        ce(Je, (xt) => {
          N() === "Labor/Coalition 2CP Swing" ? xt(Pr) : xt(va, !1);
        });
      }
      F(S, J);
    };
    ce(ia, (S) => {
      N() !== "None" && S(la);
    });
  }
  I(pt), $t(pt, (S) => U(R, S), () => g(R));
  var ca = Q(pt, 2);
  {
    var ua = (S) => {
      var J = fl(), Je = H(J);
      $n(Je, {
        get labels() {
          return i().labels;
        },
        get overlayLabels() {
          return i().overlayLabels;
        }
      }), I(J), F(S, J);
    };
    ce(ca, (S) => {
      d() && S(ua);
    });
  }
  I(gt);
  var da = Q(gt, 2);
  {
    var fa = (S) => {
      Un(S, {
        get customElectorateAltText() {
          return T();
        },
        get groups() {
          return s().groups;
        },
        get layout() {
          return i();
        },
        onChange: (J) => {
          U(Y, Pe(J));
        },
        get onClick() {
          return p();
        },
        get onFocus() {
          return _();
        }
      });
    };
    ce(da, (S) => {
      A() && S(fa);
    });
  }
  I(Ut), ee(
    (S, J, Je) => {
      ho = cr(
        gt,
        ho,
        {
          class: "hexmap__viz",
          "data-svgratio": g($) || "null",
          ...g(oa),
          [Xt]: {
            "hexmap__viz--vertical": g($) <= 1
          }
        },
        "svelte-82t7dm"
      ), ue(gt, "aspect-ratio", S), vo = cr(
        pt,
        vo,
        {
          viewBox: J,
          ...g(na)
        },
        "svelte-82t7dm",
        !0
      ), K(Cr, "patternTransform", Je);
    },
    [
      () => g($) ? g($).toFixed(3) : null,
      () => [
        ve.current,
        se.current,
        Ze.current,
        Gt.current
      ].join(" "),
      () => `scale(${a().toFixed(2)})`
    ]
  ), Ms(pt, "clientWidth", (S) => U(M, S)), ut(3, gt, () => ht, () => ({ duration: q() ? 0 : 250 })), ut(3, Ut, () => ht, () => ({ duration: 750 })), F(e, Ut);
  var ha = oe({
    get config() {
      return s();
    },
    set config(S = {}) {
      s(S), w();
    },
    get layout() {
      return i();
    },
    set layout(S = {}) {
      i(S), w();
    },
    get allocations() {
      return l();
    },
    set allocations(S = {}) {
      l(S), w();
    },
    get focuses() {
      return c();
    },
    set focuses(S = {}) {
      c(S), w();
    },
    get certainties() {
      return f();
    },
    set certainties(S = {}) {
      f(S), w();
    },
    get labelsToShow() {
      return h();
    },
    set labelsToShow(S = {}) {
      h(S), w();
    },
    get showStateLabels() {
      return d();
    },
    set showStateLabels(S = !1) {
      d(S), w();
    },
    get showElectorateLabels() {
      return v();
    },
    set showElectorateLabels(S = !1) {
      v(S), w();
    },
    get showFocusedElectorateLabels() {
      return u();
    },
    set showFocusedElectorateLabels(S = !1) {
      u(S), w();
    },
    get isStaticLayout() {
      return m();
    },
    set isStaticLayout(S = !1) {
      m(S), w();
    },
    get onClick() {
      return p();
    },
    set onClick(S = ({ code: J }) => {
    }) {
      p(S), w();
    },
    get onHover() {
      return C();
    },
    set onHover(S = ({ code: J }) => {
    }) {
      C(S), w();
    },
    get onFocus() {
      return _();
    },
    set onFocus(S = ({ code: J }) => {
    }) {
      _(S), w();
    },
    get customViewbox() {
      return b();
    },
    set customViewbox(S = null) {
      b(S), w();
    },
    get onViewboxChange() {
      return x();
    },
    set onViewboxChange(S = ({ newViewbox: J }) => {
    }) {
      x(S), w();
    },
    get isInteractive() {
      return A();
    },
    set isInteractive(S = !1) {
      A(S), w();
    },
    get arrowChart() {
      return N();
    },
    set arrowChart(S = "None") {
      N(S), w();
    },
    get arrowChartPercentCounted() {
      return P();
    },
    set arrowChartPercentCounted(S = !0) {
      P(S), w();
    },
    get arrowChartCaption() {
      return O();
    },
    set arrowChartCaption(S) {
      O(S), w();
    },
    get selectedElectorate() {
      return k();
    },
    set selectedElectorate(S = null) {
      k(S), w();
    },
    get customElectorateAltText() {
      return T();
    },
    set customElectorateAltText(S) {
      T(S), w();
    },
    get showStateOutlinesOnTop() {
      return G();
    },
    set showStateOutlinesOnTop(S = !1) {
      G(S), w();
    },
    get isInline() {
      return q();
    },
    set isInline(S = !1) {
      q(S), w();
    },
    get hexFlip() {
      return E();
    },
    set hexFlip(S = "None") {
      E(S), w();
    },
    get altText() {
      return L();
    },
    set altText(S = "") {
      L(S), w();
    }
  });
  return o(), ha;
}
fe(
  Jn,
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
    arrowChartPercentCounted: {},
    arrowChartCaption: {},
    selectedElectorate: {},
    customElectorateAltText: {},
    showStateOutlinesOnTop: {},
    isInline: {},
    hexFlip: {},
    altText: {}
  },
  [],
  [],
  !0
);
let gl = At({
  allocated: {},
  uncertain: {}
});
const pl = { black: "#000", white: "#fff", emptyStateOutline: "black", stateOutline: "#767676", fullStateOutline: "transparent", filledBorder: "#fff", empty: "#f1f1f1", emptyBorder: "#767676", tileFocusBorder: "black", tileFocusBorderGap: "white", tileInteractBorder: "black" }, xl = { null: "#f1f1f1", nullBorder: "#fff", Any: "#fff", ALP: "#e11f30", CA: "#757575", CLP: "#cc8500", GRN: "#51a802", IND: "#757575", KAP: "#804a40", LIB: "#0a52bf", LNP: "#0a52bf", NAT: "#007056", ONP: "#e5660b", OTH: "#757575", TOP: "#cc8500", Teal: "#0098a6" }, ml = { ALP: "#f9d2d6", CA: "#e3e3e3", CLP: "#f5e7cc", GRN: "#dceecc", IND: "#e3e3e3", KAP: "#e6dbd9", LIB: "#cedcf2", LNP: "#cedcf2", NAT: "#cce2dd", ONP: "#f4dccc", OTH: "#e3e3e3", TOP: "#f5e7cc" }, Vo = {
  c: pl,
  allocated: xl,
  uncertain: ml
};
function ea(e, t) {
  re(t, !0);
  const [r, o] = Lt();
  let n = y(t, "rootEl", 15), a = y(t, "colours", 7, Vo);
  Se(() => {
    const i = a(), l = n();
    if (!l)
      return;
    ft(gl, {
      allocated: i.allocated,
      uncertain: i.uncertain
    });
    const c = { allocated: "a", uncertain: "u" };
    Object.entries(i).forEach(([f, h]) => {
      const d = c[f] || f;
      Object.entries(h).forEach(([v, u]) => {
        const m = `--${d}-${v}`;
        l.style.setProperty(m, u);
      });
    });
  }), dt(() => {
    n();
  }), $t(sn.body, (i) => n(i), () => n());
  var s = oe({
    get rootEl() {
      return n();
    },
    set rootEl(i) {
      n(i), w();
    },
    get colours() {
      return a();
    },
    set colours(i = Vo) {
      a(i), w();
    }
  });
  return o(), s;
}
fe(ea, { rootEl: {}, colours: {} }, [], [], !0);
const wl = { viewbox: [-50, -1, 480, 526], positions: { ACT: [9.003006, 11], NSW: [4, 7], NT: [2.51, 6], QLD: [4.5, 0], SA: [2.004, 7], TAS: [7, 17.75, !0], VIC: [4.02, 11], WA: [0.05, 7] }, labels: [{ left: 34, top: 30.25, width: 8, name: "NT" }, { left: 65.25, top: 21.25, width: 8, name: "QLD" }, { left: 57.75, top: 43.5, width: 8, name: "NSW" }, { left: 67.5, top: 57.5, width: 8, name: "ACT" }, { left: 58, top: 66.5, width: 8, name: "VIC" }, { left: 58, top: 85.5, width: 8, name: "TAS" }, { left: 34, top: 48.5, width: 8, name: "SA" }, { left: 24.5, top: 53, width: 8, name: "WA" }], overlayLabels: !0 }, yl = { viewbox: [-1, -1, 480, 526], positions: { ACT: [11.5, 12.25, !0], NSW: [6.75, 7.75], NT: [3.5, 6], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 30, top: 30.25, width: 8, name: "NT" }, { left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 71, top: 63, width: 8, name: "ACT" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, bl = { viewbox: [-1, -1, 480, 526], positions: { NSW: [6.75, 7.75], QLD: [5.75, 0], SA: [3, 7.75], TAS: [9.26, 19.5, !0], VIC: [6.25, 12.75, !0], WA: [0, 6.75] }, labels: [{ left: 62.5, top: 21.25, width: 8, name: "QLD" }, { left: 67.5, top: 47.5, width: 8, name: "NSW" }, { left: 60.25, top: 74.75, width: 8, name: "VIC" }, { left: 60.25, top: 93.25, width: 8, name: "TAS" }, { left: 30, top: 52, width: 8, name: "SA" }, { left: 15.75, top: 51.75, width: 8, name: "WA" }], overlayLabels: !0 }, _l = { viewbox: [-40, -40, 650, 595], positions: { ACT: [10, 19, !0], NSW: [0, 0], NT: [15, 19], QLD: [1, 9, !0], SA: [17, 9, !0], TAS: [3, 19], VIC: [12, 0], WA: [11, 8] }, labels: [{ left: 75, top: 80, width: 8, name: "NT" }, { left: 31, top: 40, width: 8, name: "QLD" }, { left: 29, top: 3.5, width: 8, name: "NSW" }, { left: 55, top: 80, width: 8, name: "ACT" }, { left: 74, top: 3.5, width: 8, name: "VIC" }, { left: 25, top: 80, width: 8, name: "TAS" }, { left: 85, top: 40, width: 8, name: "SA" }, { left: 56, top: 40, width: 8, name: "WA" }] }, Nl = { viewbox: [0, 0, 300, 300], positions: { ACT: [4, 2, !0] }, labels: [{ left: 50, top: 10, width: 8, name: "ACT" }] }, Al = { viewbox: [0, 0, 300, 300], positions: { NSW: [0.15, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NSW" }] }, Cl = { viewbox: [0, 0, 300, 300], positions: { NT: [4.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "NT" }] }, Pl = { viewbox: [0, 0, 300, 300], positions: { QLD: [0.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "QLD" }] }, Sl = { viewbox: [0, 0, 300, 300], positions: { SA: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "SA" }] }, El = { viewbox: [0, 0, 300, 300], positions: { TAS: [4, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "TAS" }] }, Ll = { viewbox: [0, 0, 300, 300], positions: { VIC: [1.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "VIC" }] }, Tl = { viewbox: [0, 0, 300, 300], positions: { WA: [3.5, 2] }, labels: [{ left: 50, top: 10, width: 8, name: "WA" }] }, Ol = { viewbox: [0, 0, 480, 500], positions: { ACT: [8, 11.5, !0], NT: [7.75, 6, !0] }, labels: [{ left: 51, top: 25, width: 8, name: "NT" }, { left: 50.75, top: 51, width: 8, name: "ACT" }] }, Rl = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.5, 12], QLD: [4.75, 3, !0] }, labels: [{ left: 73.25, top: 21.25, width: 8, name: "QLD" }, { left: 41, top: 85, width: 8, name: "NSW" }] }, kl = { viewbox: [0, 0, 480, 500], positions: { NSW: [3.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 50.25, top: 8.75, width: 8, name: "NSW" }, { left: 50.75, top: 53.25, width: 8, name: "VIC" }] }, Il = { viewbox: [0, 0, 480, 500], positions: { QLD: [4.75, 3, !0], VIC: [4.25, 12] }, labels: [{ left: 41.75, top: 21.5, width: 8, name: "QLD" }, { left: 62.75, top: 61.75, width: 8, name: "VIC" }] }, Fl = { viewbox: [0, 0, 480, 500], positions: { QLD: [7, 7, !0], WA: [2, 5] }, labels: [{ left: 71.5, top: 28.25, width: 8, name: "QLD" }, { left: 11.75, top: 28.75, width: 8, name: "WA" }] }, Ml = { viewbox: [0, 0, 480, 500], positions: { QLD: [1, 2], NSW: [7, 10], VIC: [0, 14] }, labels: [{ left: 37.25, top: 4, width: 8, name: "QLD" }, { left: 80.25, top: 43.5, width: 8, name: "NSW" }, { left: 17.5, top: 62.5, width: 8, name: "VIC" }] }, Bl = { viewbox: [0, 0, 480, 500], positions: { SA: [7.25, 7, !0], TAS: [11, 9], WA: [2, 5] }, labels: [{ left: 72.5, top: 35.75, width: 8, name: "TAS" }, { left: 50.25, top: 26.5, width: 8, name: "SA" }, { left: 24.5, top: 18.75, width: 8, name: "WA" }] }, Dl = {
  COUNTRY: wl,
  EXPLODED: yl,
  EXPLODED_STATES_ONLY: bl,
  GRID: _l,
  ACT: Nl,
  NSW: Al,
  NT: Cl,
  QLD: Pl,
  SA: Sl,
  TAS: El,
  VIC: Ll,
  WA: Tl,
  ACT_NT: Ol,
  NSW_QLD: Rl,
  NSW_VIC: kl,
  QLD_VIC: Il,
  QLD_WA: Fl,
  QLD_NSW_VIC: Ml,
  SA_TAS_WA: Bl
}, Hl = 291, Vl = 200, Wl = /* @__PURE__ */ JSON.parse(`[{"name":"ACT","svgHexes":"<polygon data-id='BEAN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='CANB' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='FENN' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,27.7,24,41.6,32,55.4,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bean","coord":[0,1],"shortName":"Bean","index":21,"id":"BEAN","coordPx":[27.7,40]},{"name":"Canberra","coord":[1,1],"shortName":"Canb","index":2,"id":"CANB","coordPx":[55.4,40]},{"name":"Fenner","coord":[0,0],"shortName":"Fenn","index":26,"id":"FENN","coordPx":[13.9,16]}]},{"name":"NSW","svgHexes":"<polygon data-id='COOK' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WHIT' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='BERO' class='hex' points='207.8,32 207.8,48 194,56 180.1,48 180.1,32 194,24' /><polygon data-id='MITC' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='SYDN' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='BRFD' class='hex' points='263.3,32 263.3,48 249.4,56 235.6,48 235.6,32 249.4,24' /><polygon data-id='PARK' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='PARR' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='BART' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='HUNT' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='WERR' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='LYNE' class='hex' points='194,8 194,24 180.1,32 166.3,24 166.3,8 180.1,0' /><polygon data-id='MCMA' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='RIVE' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BLAX' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MACA' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='WENT' class='hex' points='263.3,80 263.3,96 249.4,104 235.6,96 235.6,80 249.4,72' /><polygon data-id='WATS' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='HUGH' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HUME' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='PAGE' class='hex' points='249.4,8 249.4,24 235.6,32 221.7,24 221.7,8 235.6,0' /><polygon data-id='EMON' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='DOBE' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='PATE' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='FOWL' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='ROBE' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='SHOR' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='CHIF' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='BENN' class='hex' points='235.6,32 235.6,48 221.7,56 207.8,48 207.8,32 221.7,24' /><polygon data-id='LIND' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MACK' class='hex' points='291,32 291,48 277.1,56 263.3,48 263.3,32 277.1,24' /><polygon data-id='CALA' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='NENG' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='GRAY' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='RICH' class='hex' points='277.1,8 277.1,24 263.3,32 249.4,24 249.4,8 263.3,0' /><polygon data-id='REID' class='hex' points='249.4,56 249.4,72 235.6,80 221.7,72 221.7,56 235.6,48' /><polygon data-id='MACQ' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='FARR' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='NEWC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='COWP' class='hex' points='221.7,8 221.7,24 207.8,32 194,24 194,8 207.8,0' /><polygon data-id='KSMI' class='hex' points='277.1,104 277.1,120 263.3,128 249.4,120 249.4,104 263.3,96' /><polygon data-id='WARR' class='hex' points='277.1,56 277.1,72 263.3,80 249.4,72 249.4,56 263.3,48' /><polygon data-id='CUNN' class='hex' points='249.4,104 249.4,120 235.6,128 221.7,120 221.7,104 235.6,96' /><polygon data-id='GILM' class='hex' points='263.3,128 263.3,144 249.4,152 235.6,144 235.6,128 249.4,120' /><polygon data-id='BANK' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='GREE' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,152.4,0,166.3,8,180.1,0,194,8,207.8,0,221.7,8,235.6,0,249.4,8,263.3,0,277.1,8,277.1,24,291,32,291,48,277.1,56,277.1,72,263.3,80,263.3,96,277.1,104,277.1,120,263.3,128,263.3,144,249.4,152,249.4,168,235.6,176,221.7,168,221.7,152,207.8,144,207.8,128,194,120,180.1,128,166.3,120,166.3,104,152.4,96,138.6,104,124.7,96,110.9,104,97,96,83.1,104,69.3,96,55.4,104,41.6,96,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Cook","coord":[7,4],"shortName":"Cook","index":72,"id":"COOK","coordPx":[207.8,112]},{"name":"Whitlam","coord":[7,5],"shortName":"Whit","index":43,"id":"WHIT","coordPx":[221.7,136]},{"name":"Berowra","coord":[6,1],"shortName":"Bero","index":70,"id":"BERO","coordPx":[194,40]},{"name":"Mitchell","coord":[4,1],"shortName":"Mitc","index":80,"id":"MITC","coordPx":[138.6,40]},{"name":"Sydney","coord":[7,3],"shortName":"Syd","index":16,"id":"SYDN","coordPx":[221.7,88]},{"name":"Bradfield","coord":[8,1],"shortName":"Brad","index":71,"id":"BRFD","coordPx":[249.4,40]},{"name":"Parkes","coord":[0,1],"shortName":"Park","index":141,"id":"PARK","coordPx":[27.7,40]},{"name":"Parramatta","coord":[5,2],"shortName":"Parr","index":62,"id":"PARR","coordPx":[152.4,64]},{"name":"Barton","coord":[5,3],"shortName":"Bart","index":20,"id":"BART","coordPx":[166.3,88]},{"name":"Hunter","coord":[1,0],"shortName":"Hunt","index":55,"id":"HUNT","coordPx":[41.6,16]},{"name":"Werriwa","coord":[3,3],"shortName":"Werr","index":68,"id":"WERR","coordPx":[110.9,88]},{"name":"Lyne","coord":[6,0],"shortName":"Lyne","index":137,"id":"LYNE","coordPx":[180.1,16]},{"name":"McMahon","coord":[2,2],"shortName":"Mcma","index":40,"id":"MCMA","coordPx":[69.3,64]},{"name":"Riverina","coord":[0,3],"shortName":"Rivr","index":142,"id":"RIVE","coordPx":[27.7,88]},{"name":"Blaxland","coord":[6,2],"shortName":"Blax","index":0,"id":"BLAX","coordPx":[180.1,64]},{"name":"Macarthur","coord":[2,3],"shortName":"Maca","index":36,"id":"MACA","coordPx":[83.1,88]},{"name":"Wentworth","coord":[8,3],"shortName":"Went","index":111,"id":"WENT","coordPx":[249.4,88]},{"name":"Watson","coord":[7,2],"shortName":"Wats","index":17,"id":"WATS","coordPx":[207.8,64]},{"name":"Hughes","coord":[6,4],"shortName":"Hugh","index":87,"id":"HUGH","coordPx":[180.1,112]},{"name":"Hume","coord":[1,3],"shortName":"Hume","index":78,"id":"HUME","coordPx":[55.4,88]},{"name":"Page","coord":[8,0],"shortName":"Page","index":144,"id":"PAGE","coordPx":[235.6,16]},{"name":"Eden-Monaro","coord":[8,6],"shortName":"Eden","index":51,"id":"EMON","coordPx":[235.6,160]},{"name":"Dobell","coord":[3,0],"shortName":"Dobe","index":49,"id":"DOBE","coordPx":[97,16]},{"name":"Paterson","coord":[2,0],"shortName":"Pate","index":63,"id":"PATE","coordPx":[69.3,16]},{"name":"Fowler","coord":[4,2],"shortName":"Fowl","index":6,"id":"FOWL","coordPx":[124.7,64]},{"name":"Robertson","coord":[5,1],"shortName":"Robs","index":109,"id":"ROBE","coordPx":[166.3,40]},{"name":"Shortland","coord":[4,0],"shortName":"Shld","index":66,"id":"SHOR","coordPx":[124.7,16]},{"name":"Chifley","coord":[3,1],"shortName":"Chif","index":3,"id":"CHIF","coordPx":[110.9,40]},{"name":"Bennelong","coord":[7,1],"shortName":"Benn","index":84,"id":"BENN","coordPx":[221.7,40]},{"name":"Lindsay","coord":[1,2],"shortName":"Linds","index":107,"id":"LIND","coordPx":[41.6,64]},{"name":"Mackellar","coord":[9,1],"shortName":"Mack","index":79,"id":"MACK","coordPx":[277.1,40]},{"name":"Calare","coord":[1,1],"shortName":"Cala","index":135,"id":"CALA","coordPx":[55.4,40]},{"name":"New England","coord":[0,0],"shortName":"New","index":139,"id":"NENG","coordPx":[13.9,16]},{"name":"Grayndler","coord":[6,3],"shortName":"Gray","index":11,"id":"GRAY","coordPx":[194,88]},{"name":"Richmond","coord":[9,0],"shortName":"Rich","index":65,"id":"RICH","coordPx":[263.3,16]},{"name":"Reid","coord":[8,2],"shortName":"Reid","index":108,"id":"REID","coordPx":[235.6,64]},{"name":"Macquarie","coord":[2,1],"shortName":"Macq","index":59,"id":"MACQ","coordPx":[83.1,40]},{"name":"Farrer","coord":[0,2],"shortName":"Farr","index":75,"id":"FARR","coordPx":[13.9,64]},{"name":"Newcastle","coord":[5,0],"shortName":"Newc","index":13,"id":"NEWC","coordPx":[152.4,16]},{"name":"Cowper","coord":[7,0],"shortName":"Cowp","index":143,"id":"COWP","coordPx":[207.8,16]},{"name":"Kingsford Smith","coord":[9,4],"shortName":"Kngs","index":34,"id":"KSMI","coordPx":[263.3,112]},{"name":"Warringah","coord":[9,2],"shortName":"Warr","index":146,"id":"WARR","coordPx":[263.3,64]},{"name":"Cunningham","coord":[8,4],"shortName":"Cunn","index":5,"id":"CUNN","coordPx":[235.6,112]},{"name":"Gilmore","coord":[8,5],"shortName":"Gilm","index":52,"id":"GILM","coordPx":[249.4,136]},{"name":"Banks","coord":[4,3],"shortName":"Bnks","index":83,"id":"BANK","coordPx":[138.6,88]},{"name":"Greenway","coord":[3,2],"shortName":"Grnw","index":53,"id":"GREE","coordPx":[97,64]}]},{"name":"NT","svgHexes":"<polygon data-id='LING' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SOLO' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,55.4,24,41.6,32,27.7,24,13.9,32,0,24,0,8' />","hexes":[{"name":"Lingiari","coord":[1,0],"shortName":"Ling","index":57,"id":"LING","coordPx":[41.6,16]},{"name":"Solomon","coord":[0,0],"shortName":"Solo","index":67,"id":"SOLO","coordPx":[13.9,16]}]},{"name":"QLD","svgHexes":"<polygon data-id='OXLE' class='hex' points='110.9,152 110.9,168 97,176 83.1,168 83.1,152 97,144' /><polygon data-id='FISH' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='BOWM' class='hex' points='235.6,128 235.6,144 221.7,152 207.8,144 207.8,128 221.7,120' /><polygon data-id='LILL' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='FLYN' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CAPR' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='DICK' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='GRIF' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='FAIR' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='LONG' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='BLAI' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='FADD' class='hex' points='194,152 194,168 180.1,176 166.3,168 166.3,152 180.1,144' /><polygon data-id='BRIS' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='WRIG' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='HINK' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='LEIC' class='hex' points='166.3,8 166.3,24 152.4,32 138.6,24 138.6,8 152.4,0' /><polygon data-id='KENN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='DAWS' class='hex' points='180.1,32 180.1,48 166.3,56 152.4,48 152.4,32 166.3,24' /><polygon data-id='BONN' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='WBAY' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='MARA' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='MCPH' class='hex' points='249.4,152 249.4,168 235.6,176 221.7,168 221.7,152 235.6,144' /><polygon data-id='MONC' class='hex' points='221.7,152 221.7,168 207.8,176 194,168 194,152 207.8,144' /><polygon data-id='RYAN' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='RANK' class='hex' points='138.6,152 138.6,168 124.7,176 110.9,168 110.9,152 124.7,144' /><polygon data-id='PETR' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='MORE' class='hex' points='124.7,128 124.7,144 110.9,152 97,144 97,128 110.9,120' /><polygon data-id='FORD' class='hex' points='166.3,152 166.3,168 152.4,176 138.6,168 138.6,152 152.4,144' /><polygon data-id='HERB' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='GROO' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='27.7,152,41.6,144,41.6,128,55.4,120,69.3,128,83.1,120,83.1,104,97,96,97,80,110.9,72,110.9,56,124.7,48,124.7,32,138.6,24,138.6,8,152.4,0,166.3,8,166.3,24,180.1,32,180.1,48,194,56,194,72,207.8,80,207.8,96,221.7,104,221.7,120,235.6,128,235.6,144,249.4,152,249.4,168,235.6,176,221.7,168,207.8,176,194,168,180.1,176,166.3,168,152.4,176,138.6,168,124.7,176,110.9,168,97,176,83.1,168,69.3,176,55.4,168,41.6,176,27.7,168,27.7,152' />","hexes":[{"name":"Oxley","coord":[3,6],"shortName":"Oxly","index":41,"id":"OXLE","coordPx":[97,160]},{"name":"Fisher","coord":[6,3],"shortName":"Fish","index":116,"id":"FISH","coordPx":[194,88]},{"name":"Bowman","coord":[7,5],"shortName":"Bow","index":125,"id":"BOWM","coordPx":[221.7,136]},{"name":"Lilley","coord":[6,4],"shortName":"Lill","index":56,"id":"LILL","coordPx":[180.1,112]},{"name":"Flynn","coord":[3,3],"shortName":"Flyn","index":126,"id":"FLYN","coordPx":[110.9,88]},{"name":"Capricornia","coord":[4,2],"shortName":"Capr","index":112,"id":"CAPR","coordPx":[124.7,64]},{"name":"Dickson","coord":[4,4],"shortName":"Dick","index":132,"id":"DICK","coordPx":[124.7,112]},{"name":"Griffith","coord":[6,5],"shortName":"Grif","index":54,"id":"GRIF","coordPx":[194,136]},{"name":"Fairfax","coord":[6,2],"shortName":"Fair","index":115,"id":"FAIR","coordPx":[180.1,64]},{"name":"Longman","coord":[5,3],"shortName":"Long","index":134,"id":"LONG","coordPx":[166.3,88]},{"name":"Blair","coord":[3,4],"shortName":"Blar","index":45,"id":"BLAI","coordPx":[97,112]},{"name":"Fadden","coord":[6,6],"shortName":"Fadd","index":114,"id":"FADD","coordPx":[180.1,160]},{"name":"Brisbane","coord":[5,5],"shortName":"Bris","index":131,"id":"BRIS","coordPx":[166.3,136]},{"name":"Wright","coord":[2,6],"shortName":"Wrgt","index":123,"id":"WRIG","coordPx":[69.3,160]},{"name":"Hinkler","coord":[5,2],"shortName":"Hink","index":118,"id":"HINK","coordPx":[152.4,64]},{"name":"Leichhardt","coord":[5,0],"shortName":"Lcht","index":133,"id":"LEIC","coordPx":[152.4,16]},{"name":"Kennedy","coord":[1,5],"shortName":"Kend","index":148,"id":"KENN","coordPx":[55.4,136]},{"name":"Dawson","coord":[5,1],"shortName":"Daws","index":113,"id":"DAWS","coordPx":[166.3,40]},{"name":"Bonner","coord":[7,4],"shortName":"Bonn","index":124,"id":"BONN","coordPx":[207.8,112]},{"name":"Wide Bay","coord":[4,3],"shortName":"Wide","index":122,"id":"WBAY","coordPx":[138.6,88]},{"name":"Maranoa","coord":[1,6],"shortName":"Mara","index":119,"id":"MARA","coordPx":[41.6,160]},{"name":"McPherson","coord":[8,6],"shortName":"Mcph","index":120,"id":"MCPH","coordPx":[235.6,160]},{"name":"Moncrieff","coord":[7,6],"shortName":"Monc","index":121,"id":"MONC","coordPx":[207.8,160]},{"name":"Ryan","coord":[4,5],"shortName":"Ryan","index":130,"id":"RYAN","coordPx":[138.6,136]},{"name":"Rankin","coord":[4,6],"shortName":"Rank","index":42,"id":"RANK","coordPx":[124.7,160]},{"name":"Petrie","coord":[5,4],"shortName":"Petr","index":129,"id":"PETR","coordPx":[152.4,112]},{"name":"Moreton","coord":[3,5],"shortName":"More","index":61,"id":"MORE","coordPx":[110.9,136]},{"name":"Forde","coord":[5,6],"shortName":"Ford","index":127,"id":"FORD","coordPx":[152.4,160]},{"name":"Herbert","coord":[4,1],"shortName":"Herb","index":128,"id":"HERB","coordPx":[138.6,40]},{"name":"Groom","coord":[2,5],"shortName":"Groo","index":117,"id":"GROO","coordPx":[83.1,136]}]},{"name":"SA","svgHexes":"<polygon data-id='ADEL' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='SPEN' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='STUR' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='GREY' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='HIND' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='BOOT' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='MAKI' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MAYO' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BARK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='KING' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' />","svgOutline":"<polygon data-id='' class='hex-outline' points='13.9,32,27.7,24,27.7,8,41.6,0,55.4,8,55.4,24,69.3,32,69.3,48,55.4,56,55.4,72,69.3,80,69.3,96,55.4,104,55.4,120,69.3,128,69.3,144,55.4,152,55.4,168,41.6,176,27.7,168,27.7,152,13.9,144,13.9,128,27.7,120,27.7,104,13.9,96,13.9,80,27.7,72,27.7,56,13.9,48,13.9,32' />","hexes":[{"name":"Adelaide","coord":[1,4],"shortName":"Adel","index":18,"id":"ADEL","coordPx":[41.6,112]},{"name":"Spence","coord":[0,1],"shortName":"Spen","index":15,"id":"SPEN","coordPx":[27.7,40]},{"name":"Sturt","coord":[1,3],"shortName":"Strt","index":93,"id":"STUR","coordPx":[55.4,88]},{"name":"Grey","coord":[1,0],"shortName":"Grey","index":77,"id":"GREY","coordPx":[41.6,16]},{"name":"Hindmarsh","coord":[0,3],"shortName":"Hind","index":29,"id":"HIND","coordPx":[27.7,88]},{"name":"Boothby","coord":[1,5],"shortName":"Boot","index":97,"id":"BOOT","coordPx":[55.4,136]},{"name":"Makin","coord":[1,2],"shortName":"Makn","index":38,"id":"MAKI","coordPx":[41.6,64]},{"name":"Mayo","coord":[1,6],"shortName":"Mayo","index":149,"id":"MAYO","coordPx":[41.6,160]},{"name":"Barker","coord":[1,1],"shortName":"Bark","index":69,"id":"BARK","coordPx":[55.4,40]},{"name":"Kingston","coord":[0,5],"shortName":"King","index":35,"id":"KING","coordPx":[27.7,136]}]},{"name":"TAS","svgHexes":"<polygon data-id='BASS' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='BRAD' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='CLAR' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='FRAN' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='LYON' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,55.4,56,41.6,48,27.7,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Bass","coord":[2,0],"shortName":"Bass","index":96,"id":"BASS","coordPx":[69.3,16]},{"name":"Braddon","coord":[0,0],"shortName":"Brdn","index":98,"id":"BRAD","coordPx":[13.9,16]},{"name":"Clark","coord":[0,1],"shortName":"Clrk","index":145,"id":"CLAR","coordPx":[27.7,40]},{"name":"Franklin","coord":[1,1],"shortName":"Fran","index":7,"id":"FRAN","coordPx":[55.4,40]},{"name":"Lyons","coord":[1,0],"shortName":"Lyon","index":58,"id":"LYON","coordPx":[41.6,16]}]},{"name":"VIC","svgHexes":"<polygon data-id='ASTO' class='hex' points='166.3,56 166.3,72 152.4,80 138.6,72 138.6,56 152.4,48' /><polygon data-id='CORI' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BEND' class='hex' points='41.6,32 41.6,48 27.7,56 13.9,48 13.9,32 27.7,24' /><polygon data-id='BRUC' class='hex' points='180.1,80 180.1,96 166.3,104 152.4,96 152.4,80 166.3,72' /><polygon data-id='CALW' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='CASE' class='hex' points='207.8,80 207.8,96 194,104 180.1,96 180.1,80 194,72' /><polygon data-id='KOOY' class='hex' points='124.7,80 124.7,96 110.9,104 97,96 97,80 110.9,72' /><polygon data-id='CHIS' class='hex' points='138.6,56 138.6,72 124.7,80 110.9,72 110.9,56 124.7,48' /><polygon data-id='LALO' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='WANN' class='hex' points='27.7,56 27.7,72 13.9,80 0,72 0,56 13.9,48' /><polygon data-id='DEAK' class='hex' points='152.4,32 152.4,48 138.6,56 124.7,48 124.7,32 138.6,24' /><polygon data-id='DUNK' class='hex' points='180.1,128 180.1,144 166.3,152 152.4,144 152.4,128 166.3,120' /><polygon data-id='FLIN' class='hex' points='207.8,128 207.8,144 194,152 180.1,144 180.1,128 194,120' /><polygon data-id='GORT' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='GELL' class='hex' points='97,128 97,144 83.1,152 69.3,144 69.3,128 83.1,120' /><polygon data-id='GIPP' class='hex' points='221.7,56 221.7,72 207.8,80 194,72 194,56 207.8,48' /><polygon data-id='GOLD' class='hex' points='152.4,128 152.4,144 138.6,152 124.7,144 124.7,128 138.6,120' /><polygon data-id='HAWK' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MARI' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='MACN' class='hex' points='138.6,104 138.6,120 124.7,128 110.9,120 110.9,104 124.7,96' /><polygon data-id='HOLT' class='hex' points='194,104 194,120 180.1,128 166.3,120 166.3,104 180.1,96' /><polygon data-id='HOTH' class='hex' points='152.4,80 152.4,96 138.6,104 124.7,96 124.7,80 138.6,72' /><polygon data-id='INDI' class='hex' points='138.6,8 138.6,24 124.7,32 110.9,24 110.9,8 124.7,0' /><polygon data-id='ISAA' class='hex' points='166.3,104 166.3,120 152.4,128 138.6,120 138.6,104 152.4,96' /><polygon data-id='JAGA' class='hex' points='97,32 97,48 83.1,56 69.3,48 69.3,32 83.1,24' /><polygon data-id='WILL' class='hex' points='97,80 97,96 83.1,104 69.3,96 69.3,80 83.1,72' /><polygon data-id='LTRO' class='hex' points='221.7,104 221.7,120 207.8,128 194,120 194,104 207.8,96' /><polygon data-id='BALL' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='MALL' class='hex' points='27.7,8 27.7,24 13.9,32 0,24 0,8 13.9,0' /><polygon data-id='FRAS' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='MCEW' class='hex' points='194,56 194,72 180.1,80 166.3,72 166.3,56 180.1,48' /><polygon data-id='MELB' class='hex' points='110.9,104 110.9,120 97,128 83.1,120 83.1,104 97,96' /><polygon data-id='MENZ' class='hex' points='124.7,32 124.7,48 110.9,56 97,48 97,32 110.9,24' /><polygon data-id='MONA' class='hex' points='235.6,80 235.6,96 221.7,104 207.8,96 207.8,80 221.7,72' /><polygon data-id='NICH' class='hex' points='55.4,8 55.4,24 41.6,32 27.7,24 27.7,8 41.6,0' /><polygon data-id='SCUL' class='hex' points='110.9,8 110.9,24 97,32 83.1,24 83.1,8 97,0' /><polygon data-id='CORA' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COOP' class='hex' points='110.9,56 110.9,72 97,80 83.1,72 83.1,56 97,48' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,8,13.9,0,27.7,8,41.6,0,55.4,8,69.3,0,83.1,8,97,0,110.9,8,124.7,0,138.6,8,138.6,24,152.4,32,152.4,48,166.3,56,180.1,48,194,56,207.8,48,221.7,56,221.7,72,235.6,80,235.6,96,221.7,104,221.7,120,207.8,128,207.8,144,194,152,180.1,144,166.3,152,152.4,144,138.6,152,124.7,144,124.7,128,110.9,120,97,128,97,144,83.1,152,69.3,144,55.4,152,41.6,144,41.6,128,27.7,120,27.7,104,13.9,96,13.9,80,0,72,0,56,13.9,48,13.9,32,0,24,0,8' />","hexes":[{"name":"Aston","coord":[5,2],"shortName":"Astn","index":82,"id":"ASTO","coordPx":[152.4,64]},{"name":"Corio","coord":[1,4],"shortName":"Cori","index":25,"id":"CORI","coordPx":[41.6,112]},{"name":"Bendigo","coord":[0,1],"shortName":"Bndi","index":22,"id":"BEND","coordPx":[27.7,40]},{"name":"Bruce","coord":[5,3],"shortName":"Bruc","index":24,"id":"BRUC","coordPx":[166.3,88]},{"name":"Calwell","coord":[2,0],"shortName":"Calw","index":1,"id":"CALW","coordPx":[69.3,16]},{"name":"Casey","coord":[6,3],"shortName":"Casy","index":99,"id":"CASE","coordPx":[194,88]},{"name":"Kooyong","coord":[3,3],"shortName":"Kooy","index":105,"id":"KOOY","coordPx":[110.9,88]},{"name":"Chisholm","coord":[4,2],"shortName":"Chis","index":100,"id":"CHIS","coordPx":[124.7,64]},{"name":"Lalor","coord":[1,5],"shortName":"Lalo","index":12,"id":"LALO","coordPx":[55.4,136]},{"name":"Wannon","coord":[0,2],"shortName":"Wann","index":95,"id":"WANN","coordPx":[13.9,64]},{"name":"Deakin","coord":[4,1],"shortName":"Deak","index":101,"id":"DEAK","coordPx":[138.6,40]},{"name":"Dunkley","coord":[5,5],"shortName":"Dunk","index":50,"id":"DUNK","coordPx":[166.3,136]},{"name":"Flinders","coord":[6,5],"shortName":"Flnd","index":102,"id":"FLIN","coordPx":[194,136]},{"name":"Gorton","coord":[2,2],"shortName":"Gort","index":10,"id":"GORT","coordPx":[69.3,64]},{"name":"Gellibrand","coord":[2,5],"shortName":"Gelli","index":9,"id":"GELL","coordPx":[83.1,136]},{"name":"Gippsland","coord":[7,2],"shortName":"Gips","index":136,"id":"GIPP","coordPx":[207.8,64]},{"name":"Goldstein","coord":[4,5],"shortName":"Gold","index":86,"id":"GOLD","coordPx":[138.6,136]},{"name":"Hawke","coord":[1,1],"shortName":"Hawk","index":28,"id":"HAWK","coordPx":[55.4,40]},{"name":"Maribyrnong","coord":[1,3],"shortName":"Mari","index":39,"id":"MARI","coordPx":[55.4,88]},{"name":"Macnamara","coord":[4,4],"shortName":"Macn","index":37,"id":"MACN","coordPx":[124.7,112]},{"name":"Holt","coord":[6,4],"shortName":"Holt","index":30,"id":"HOLT","coordPx":[180.1,112]},{"name":"Hotham","coord":[4,3],"shortName":"Hoth","index":31,"id":"HOTH","coordPx":[138.6,88]},{"name":"Indi","coord":[4,0],"shortName":"Indi","index":147,"id":"INDI","coordPx":[124.7,16]},{"name":"Isaacs","coord":[5,4],"shortName":"Isac","index":32,"id":"ISAA","coordPx":[152.4,112]},{"name":"Jagajaga","coord":[2,1],"shortName":"Jaga","index":33,"id":"JAGA","coordPx":[83.1,40]},{"name":"Wills","coord":[2,3],"shortName":"Wils","index":44,"id":"WILL","coordPx":[83.1,88]},{"name":"La Trobe","coord":[7,4],"shortName":"Latr","index":106,"id":"LTRO","coordPx":[207.8,112]},{"name":"Ballarat","coord":[1,2],"shortName":"Ball","index":19,"id":"BALL","coordPx":[41.6,64]},{"name":"Mallee","coord":[0,0],"shortName":"Mall","index":138,"id":"MALL","coordPx":[13.9,16]},{"name":"Fraser","coord":[2,4],"shortName":"Fras","index":8,"id":"FRAS","coordPx":[69.3,112]},{"name":"McEwen","coord":[6,2],"shortName":"McE","index":60,"id":"MCEW","coordPx":[180.1,64]},{"name":"Melbourne","coord":[3,4],"shortName":"Melb","index":150,"id":"MELB","coordPx":[97,112]},{"name":"Menzies","coord":[3,1],"shortName":"Menz","index":88,"id":"MENZ","coordPx":[110.9,40]},{"name":"Monash","coord":[7,3],"shortName":"Mona","index":89,"id":"MONA","coordPx":[221.7,88]},{"name":"Nicholls","coord":[1,0],"shortName":"Nich","index":140,"id":"NICH","coordPx":[41.6,16]},{"name":"Scullin","coord":[3,0],"shortName":"Scul","index":14,"id":"SCUL","coordPx":[97,16]},{"name":"Corangamite","coord":[0,3],"shortName":"Cora","index":47,"id":"CORA","coordPx":[27.7,88]},{"name":"Cooper","coord":[3,2],"shortName":"Coop","index":4,"id":"COOP","coordPx":[97,64]}]},{"name":"WA","svgHexes":"<polygon data-id='DURA' class='hex' points='83.1,8 83.1,24 69.3,32 55.4,24 55.4,8 69.3,0' /><polygon data-id='PEAR' class='hex' points='69.3,32 69.3,48 55.4,56 41.6,48 41.6,32 55.4,24' /><polygon data-id='MOOR' class='hex' points='55.4,56 55.4,72 41.6,80 27.7,72 27.7,56 41.6,48' /><polygon data-id='HASL' class='hex' points='83.1,56 83.1,72 69.3,80 55.4,72 55.4,56 69.3,48' /><polygon data-id='CURT' class='hex' points='41.6,80 41.6,96 27.7,104 13.9,96 13.9,80 27.7,72' /><polygon data-id='COWA' class='hex' points='69.3,80 69.3,96 55.4,104 41.6,96 41.6,80 55.4,72' /><polygon data-id='FREM' class='hex' points='27.7,104 27.7,120 13.9,128 0,120 0,104 13.9,96' /><polygon data-id='PERT' class='hex' points='55.4,104 55.4,120 41.6,128 27.7,120 27.7,104 41.6,96' /><polygon data-id='BULL' class='hex' points='83.1,104 83.1,120 69.3,128 55.4,120 55.4,104 69.3,96' /><polygon data-id='BRAN' class='hex' points='41.6,128 41.6,144 27.7,152 13.9,144 13.9,128 27.7,120' /><polygon data-id='CANN' class='hex' points='27.7,152 27.7,168 13.9,176 0,168 0,152 13.9,144' /><polygon data-id='SWAN' class='hex' points='69.3,128 69.3,144 55.4,152 41.6,144 41.6,128 55.4,120' /><polygon data-id='TANG' class='hex' points='55.4,152 55.4,168 41.6,176 27.7,168 27.7,152 41.6,144' /><polygon data-id='BURT' class='hex' points='83.1,152 83.1,168 69.3,176 55.4,168 55.4,152 69.3,144' /><polygon data-id='FORR' class='hex' points='41.6,176 41.6,192 27.7,200 13.9,192 13.9,176 27.7,168' /><polygon data-id='OCON' class='hex' points='69.3,176 69.3,192 55.4,200 41.6,192 41.6,176 55.4,168' />","svgOutline":"<polygon data-id='' class='hex-outline' points='0,104,13.9,96,13.9,80,27.7,72,27.7,56,41.6,48,41.6,32,55.4,24,55.4,8,69.3,0,83.1,8,83.1,24,69.3,32,69.3,48,83.1,56,83.1,72,69.3,80,69.3,96,83.1,104,83.1,120,69.3,128,69.3,144,83.1,152,83.1,168,69.3,176,69.3,192,55.4,200,41.6,192,27.7,200,13.9,192,13.9,176,0,168,0,152,13.9,144,13.9,128,0,120,0,104' />","hexes":[{"name":"Durack","coord":[2,0],"shortName":"Dura","index":74,"id":"DURA","coordPx":[69.3,16]},{"name":"Pearce","coord":[1,1],"shortName":"Pear","index":92,"id":"PEAR","coordPx":[55.4,40]},{"name":"Moore","coord":[1,2],"shortName":"Moor","index":90,"id":"MOOR","coordPx":[41.6,64]},{"name":"Hasluck","coord":[2,2],"shortName":"Hasl","index":103,"id":"HASL","coordPx":[69.3,64]},{"name":"Curtin","coord":[0,3],"shortName":"Curt","index":73,"id":"CURT","coordPx":[27.7,88]},{"name":"Cowan","coord":[1,3],"shortName":"Cowa","index":48,"id":"COWA","coordPx":[55.4,88]},{"name":"Fremantle","coord":[0,4],"shortName":"Frem","index":27,"id":"FREM","coordPx":[13.9,112]},{"name":"Perth","coord":[1,4],"shortName":"Prth","index":64,"id":"PERT","coordPx":[41.6,112]},{"name":"Bullwinkel","coord":[2,4],"shortName":"Bull","index":37,"id":"BULL","coordPx":[69.3,112]},{"name":"Brand","coord":[0,5],"shortName":"Brnd","index":23,"id":"BRAN","coordPx":[27.7,136]},{"name":"Canning","coord":[0,6],"shortName":"Cani","index":85,"id":"CANN","coordPx":[13.9,160]},{"name":"Swan","coord":[1,5],"shortName":"Swan","index":110,"id":"SWAN","coordPx":[55.4,136]},{"name":"Tangney","coord":[1,6],"shortName":"Tang","index":94,"id":"TANG","coordPx":[41.6,160]},{"name":"Burt","coord":[2,6],"shortName":"Burt","index":46,"id":"BURT","coordPx":[69.3,160]},{"name":"Forrest","coord":[0,7],"shortName":"Forr","index":76,"id":"FORR","coordPx":[27.7,184]},{"name":"O'Connor","coord":[1,7],"shortName":"Ocon","index":81,"id":"OCON","coordPx":[55.4,184]}]}]`), co = {
  svgWidth: Hl,
  svgHeight: Vl,
  groups: Wl
};
function $l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lr, Wo;
function Gl() {
  if (Wo) return Lr;
  Wo = 1;
  function e(t) {
    if (t.length >= 255)
      throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), o = 0; o < r.length; o++)
      r[o] = 255;
    for (var n = 0; n < t.length; n++) {
      var a = t.charAt(n), s = a.charCodeAt(0);
      if (r[s] !== 255)
        throw new TypeError(a + " is ambiguous");
      r[s] = n;
    }
    var i = t.length, l = t.charAt(0), c = Math.log(i) / Math.log(256), f = Math.log(256) / Math.log(i);
    function h(u) {
      if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (u.length === 0)
        return "";
      for (var m = 0, p = 0, C = 0, _ = u.length; C !== _ && u[C] === 0; )
        C++, m++;
      for (var b = (_ - C) * f + 1 >>> 0, x = new Uint8Array(b); C !== _; ) {
        for (var A = u[C], N = 0, P = b - 1; (A !== 0 || N < p) && P !== -1; P--, N++)
          A += 256 * x[P] >>> 0, x[P] = A % i >>> 0, A = A / i >>> 0;
        if (A !== 0)
          throw new Error("Non-zero carry");
        p = N, C++;
      }
      for (var O = b - p; O !== b && x[O] === 0; )
        O++;
      for (var k = l.repeat(m); O < b; ++O)
        k += t.charAt(x[O]);
      return k;
    }
    function d(u) {
      if (typeof u != "string")
        throw new TypeError("Expected String");
      if (u.length === 0)
        return new Uint8Array();
      for (var m = 0, p = 0, C = 0; u[m] === l; )
        p++, m++;
      for (var _ = (u.length - m) * c + 1 >>> 0, b = new Uint8Array(_); u[m]; ) {
        var x = r[u.charCodeAt(m)];
        if (x === 255)
          return;
        for (var A = 0, N = _ - 1; (x !== 0 || A < C) && N !== -1; N--, A++)
          x += i * b[N] >>> 0, b[N] = x % 256 >>> 0, x = x / 256 >>> 0;
        if (x !== 0)
          throw new Error("Non-zero carry");
        C = A, m++;
      }
      for (var P = _ - C; P !== _ && b[P] === 0; )
        P++;
      for (var O = new Uint8Array(p + (_ - P)), k = p; P !== _; )
        O[k++] = b[P++];
      return O;
    }
    function v(u) {
      var m = d(u);
      if (m)
        return m;
      throw new Error("Non-base" + i + " character");
    }
    return {
      encode: h,
      decodeUnsafe: d,
      decode: v
    };
  }
  return Lr = e, Lr;
}
var Ul = Gl();
const jl = /* @__PURE__ */ $l(Ul);
var zl = "0123456789abcdefghijklmnopqrstuvwxyz";
jl(zl);
new TextEncoder();
new TextDecoder();
const Yl = function(e) {
  return e.slice(e.length - 1) + e.slice(0, e.length - 1);
}, Kl = function(e, { delineator: t }) {
  e += t;
  const r = [];
  let o = e;
  for (let a = 0; a < e.length; a++)
    o = Yl(o), r.push(o);
  r.sort();
  let n = "";
  for (let a = 0; a < r.length; a++)
    n += r[a].charAt(r[a].length - 1);
  return n;
}, ql = function(e, { delineator: t }) {
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
function ta(e) {
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
    (t, r, o) => (o === 0 || r !== t[t.length - 1].char ? t.push({ char: r, repeated: 1 }) : t[t.length - 1].repeated++, t),
    []
  ).reduce((t, { char: r, repeated: o }) => t += o === 1 ? r : r + String(o), "");
}
function ra(e) {
  return e.replace(
    /(\w)(\d+)/g,
    (t, r, o) => r.repeat(+o)
  );
}
async function Ql(e, { delineator: t }) {
  const r = Kl(e, { delineator: t });
  return ta(r);
}
async function Xl(e, { delineator: t }) {
  const r = ra(e);
  return ql(r, { delineator: t });
}
function Zl({ delineator: e = "q" }) {
  if (e.length !== 1)
    throw new Error("Delineator must be 1 char");
  return {
    encode: (t) => Ql(t, { delineator: e }),
    decode: (t) => Xl(t, { delineator: e })
  };
}
const Gr = 26, Ur = 97, Jl = 48, $o = async (e, { maxBits: t }) => {
  const r = [1, ...e].map((i) => i ? 1 : 0).join(""), o = [];
  for (let i = r.length; i > 0; i -= t)
    o.push(r.slice(Math.max(0, i - t), i));
  return o.reverse(), o.map((i) => parseInt(i, 2)).map((i) => i > Gr ? i % Gr : String.fromCharCode(i + Ur)).join("");
};
async function Go(e, { maxBits: t }) {
  return e.split("").map((i) => i.charCodeAt(0)).map(
    (i) => i >= Ur ? i - Ur : i - Jl + Gr
  ).map(
    (i, l) => Number(i).toString(2).padStart(l > 0 ? t : 0, "0")
  ).flatMap(
    (i) => i.split("").map((l) => l === "1")
  ).slice(1);
}
function ec({ maxBits: e = 5 } = {}) {
  if (![4, 5].includes(e))
    throw new Error("Bits must be 4 for alpha, and 5 for alphanumeric");
  return e === 4 ? {
    encode: async (t) => ta(await $o(t, { maxBits: e })),
    decode: async (t) => Go(ra(t), { maxBits: e })
  } : {
    encode: (t) => $o(t, { maxBits: e }),
    decode: (t) => Go(t, { maxBits: e })
  };
}
const uo = co.groups.flatMap((e) => e.hexes.map((t) => ({ ...t, group: e.name }))).sort((e, t) => e.index - t.index), tc = Object.values(uo).reduce((e, t) => (e[t.id] = t, e), {});
co.groups;
const jr = "q", rc = "x";
Zl({ delineator: jr });
const oc = si(qn.hashCodes);
if (oc[jr] || rc === jr)
  throw new Error("Can not use delineator in allocation map");
ec({ maxBits: 4 });
Object.freeze(
  uo.reduce((e, t) => (e[t.id] = null, e), {})
);
Object.freeze(
  uo.reduce((e, t) => (e[t.id] = !0, e), {})
);
var nc = /* @__PURE__ */ Ne("<!> <div><!></div>", 1);
function ac(e, t) {
  re(t, !0);
  let r = y(t, "allocations", 23, () => ({})), o = y(t, "certainties", 23, () => ({})), n = y(t, "focuses", 23, () => ({})), a = y(t, "showStateLabels", 7, !1), s = y(t, "showElectorateLabels", 7, !1), i = y(t, "layout", 7, "COUNTRY"), l = y(t, "selectedElectorate", 7, null), c = y(t, "customViewbox", 7, null), f = y(t, "onClick", 7, () => {
  }), h = y(t, "onHover", 7, () => {
  }), d = y(t, "onFocus", 7, () => {
  }), v = y(t, "onApi", 7, () => {
  }), u = y(t, "onViewboxChange", 7, () => {
  }), m = y(t, "isStaticLayout", 7, !0), p = y(t, "isInteractive", 7, !0), C = y(t, "colours", 7), _ = y(t, "customElectorateAltText", 23, () => ({})), b = y(t, "areStateOutlinesOnTop", 7), x = we(void 0), A = /* @__PURE__ */ B(() => Dl[i()]);
  function N(E, L, R, M = !0) {
    const $ = M ? R.getScreenCTM() : R.getCTM(), Y = R.createSVGPoint();
    Y.x = E, Y.y = L;
    const ae = Y.matrixTransform($);
    return [ae.x, ae.y].map(Number);
  }
  function P(E) {
    const L = tc[E], R = g(A).positions[L == null ? void 0 : L.group];
    if (!g(x))
      return;
    const M = g(x).querySelector("svg");
    if (!L || !R || !M)
      throw new Error(`Could not find hexagon with id ${E}`);
    const $ = [-0.5, -1], [Y, ae] = Nr(
      [
        R[0] + $[0],
        R[1] + $[1]
      ],
      ""
    ).map(Number), he = Number(L.coordPx[0] + Y), X = Number(L.coordPx[1] + ae), [xe, Fe] = N(he, X, M), [ve, se] = N(he, X, M, !1);
    return {
      code: E,
      screenCoord: [xe, Fe],
      containerCoord: [ve, se],
      svgCoord: [he, X]
    };
  }
  function O(E) {
    var R;
    const L = (R = g(x)) == null ? void 0 : R.querySelector(`.hexmapkeyboardnav button[data-id="${E}"]`);
    L instanceof HTMLButtonElement && L.focus();
  }
  Se(() => {
    v() && v()({ getHex: P, focusHex: O });
  });
  var k = nc(), T = _e(k);
  ea(T, {
    get colours() {
      return C();
    },
    get rootEl() {
      return g(x);
    },
    set rootEl(E) {
      U(x, Pe(E));
    }
  });
  var G = Q(T, 2), q = H(G);
  return Jn(q, {
    config: co,
    get layout() {
      return g(A);
    },
    get allocations() {
      return r();
    },
    get certainties() {
      return o();
    },
    get focuses() {
      return n();
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
      return h();
    },
    get onFocus() {
      return d();
    },
    get selectedElectorate() {
      return l();
    },
    get customViewbox() {
      return c();
    },
    get isStaticLayout() {
      return m();
    },
    get isInteractive() {
      return p();
    },
    get onViewboxChange() {
      return u();
    },
    get customElectorateAltText() {
      return _();
    },
    get showStateOutlinesOnTop() {
      return b();
    }
  }), I(G), $t(G, (E) => U(x, E), () => g(x)), F(e, k), oe({
    get allocations() {
      return r();
    },
    set allocations(E = {}) {
      r(E), w();
    },
    get certainties() {
      return o();
    },
    set certainties(E = {}) {
      o(E), w();
    },
    get focuses() {
      return n();
    },
    set focuses(E = {}) {
      n(E), w();
    },
    get showStateLabels() {
      return a();
    },
    set showStateLabels(E = !1) {
      a(E), w();
    },
    get showElectorateLabels() {
      return s();
    },
    set showElectorateLabels(E = !1) {
      s(E), w();
    },
    get layout() {
      return i();
    },
    set layout(E = "COUNTRY") {
      i(E), w();
    },
    get selectedElectorate() {
      return l();
    },
    set selectedElectorate(E = null) {
      l(E), w();
    },
    get customViewbox() {
      return c();
    },
    set customViewbox(E = null) {
      c(E), w();
    },
    get onClick() {
      return f();
    },
    set onClick(E = () => {
    }) {
      f(E), w();
    },
    get onHover() {
      return h();
    },
    set onHover(E = () => {
    }) {
      h(E), w();
    },
    get onFocus() {
      return d();
    },
    set onFocus(E = () => {
    }) {
      d(E), w();
    },
    get onApi() {
      return v();
    },
    set onApi(E = () => {
    }) {
      v(E), w();
    },
    get onViewboxChange() {
      return u();
    },
    set onViewboxChange(E = () => {
    }) {
      u(E), w();
    },
    get isStaticLayout() {
      return m();
    },
    set isStaticLayout(E = !0) {
      m(E), w();
    },
    get isInteractive() {
      return p();
    },
    set isInteractive(E = !0) {
      p(E), w();
    },
    get colours() {
      return C();
    },
    set colours(E) {
      C(E), w();
    },
    get customElectorateAltText() {
      return _();
    },
    set customElectorateAltText(E = {}) {
      _(E), w();
    },
    get areStateOutlinesOnTop() {
      return b();
    },
    set areStateOutlinesOnTop(E) {
      b(E), w();
    }
  });
}
customElements.define("abcnews-hexmap", fe(
  ac,
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
  ac as default
};
