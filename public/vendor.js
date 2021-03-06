(_xamzrequire = (function e(t, r, n) {
  function i(o, a) {
    if (!r[o]) {
      if (!t[o]) {
        var u = "function" == typeof _xamzrequire && _xamzrequire;
        if (!a && u) return u(o, !0);
        if (s) return s(o, !0);
        var c = new Error("Cannot find module '" + o + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var h = (r[o] = { exports: {} });
      t[o][0].call(
        h.exports,
        function (e) {
          var r = t[o][1][e];
          return i(r ? r : e);
        },
        h,
        h.exports,
        e,
        t,
        r,
        n
      );
    }
    return r[o].exports;
  }
  for (
    var s = "function" == typeof _xamzrequire && _xamzrequire, o = 0;
    o < n.length;
    o++
  )
    i(n[o]);
  return i;
})(
  {
    23: [
      function (e, t, r) {
        var n = { util: e("./util") },
          i = {};
        i.toString(),
          (t.exports = n),
          n.util.update(n, {
            VERSION: "2.2.4",
            Signers: {},
            Protocol: {
              Json: e("./protocol/json"),
              Query: e("./protocol/query"),
              Rest: e("./protocol/rest"),
              RestJson: e("./protocol/rest_json"),
              RestXml: e("./protocol/rest_xml"),
            },
            XML: { Builder: e("./xml/builder"), Parser: null },
            JSON: { Builder: e("./json/builder"), Parser: e("./json/parser") },
            Model: {
              Api: e("./model/api"),
              Operation: e("./model/operation"),
              Shape: e("./model/shape"),
              Paginator: e("./model/paginator"),
              ResourceWaiter: e("./model/resource_waiter"),
            },
            util: e("./util"),
            apiLoader: function () {
              throw new Error("No API loader set");
            },
          }),
          e("./service"),
          e("./credentials"),
          e("./credentials/credential_provider_chain"),
          e("./credentials/temporary_credentials"),
          e("./credentials/web_identity_credentials"),
          e("./credentials/cognito_identity_credentials"),
          e("./credentials/saml_credentials"),
          e("./config"),
          e("./http"),
          e("./sequential_executor"),
          e("./event_listeners"),
          e("./request"),
          e("./response"),
          e("./resource_waiter"),
          e("./signers/request_signer"),
          e("./param_validator"),
          (n.events = new n.SequentialExecutor());
      },
      {
        "./config": 22,
        "./credentials": 24,
        "./credentials/cognito_identity_credentials": 25,
        "./credentials/credential_provider_chain": 26,
        "./credentials/saml_credentials": 27,
        "./credentials/temporary_credentials": 28,
        "./credentials/web_identity_credentials": 29,
        "./event_listeners": 35,
        "./http": 36,
        "./json/builder": 38,
        "./json/parser": 39,
        "./model/api": 40,
        "./model/operation": 42,
        "./model/paginator": 43,
        "./model/resource_waiter": 44,
        "./model/shape": 45,
        "./param_validator": 46,
        "./protocol/json": 47,
        "./protocol/query": 48,
        "./protocol/rest": 49,
        "./protocol/rest_json": 50,
        "./protocol/rest_xml": 51,
        "./request": 55,
        "./resource_waiter": 56,
        "./response": 57,
        "./sequential_executor": 59,
        "./service": 60,
        "./signers/request_signer": 74,
        "./util": 81,
        "./xml/builder": 83,
      },
    ],
    83: [
      function (e, t, r) {
        function n() {}
        function i(e, t, r) {
          switch (r.type) {
            case "structure":
              return s(e, t, r);
            case "map":
              return o(e, t, r);
            case "list":
              return a(e, t, r);
            default:
              return u(e, t, r);
          }
        }
        function s(e, t, r) {
          h.arrayEach(r.memberNames, function (n) {
            var s = r.members[n];
            if ("body" === s.location) {
              var o = t[n],
                a = s.name;
              if (void 0 !== o && null !== o)
                if (s.isXmlAttribute) e.att(a, o);
                else if (s.flattened) i(e, o, s);
                else {
                  var u = e.ele(a);
                  c(u, s), i(u, o, s);
                }
            }
          });
        }
        function o(e, t, r) {
          var n = r.key.name || "key",
            s = r.value.name || "value";
          h.each(t, function (t, o) {
            var a = e.ele(r.flattened ? r.name : "entry");
            i(a.ele(n), t, r.key), i(a.ele(s), o, r.value);
          });
        }
        function a(e, t, r) {
          r.flattened
            ? h.arrayEach(t, function (t) {
                var n = r.member.name || r.name,
                  s = e.ele(n);
                i(s, t, r.member);
              })
            : h.arrayEach(t, function (t) {
                var n = r.member.name || "member",
                  s = e.ele(n);
                i(s, t, r.member);
              });
        }
        function u(e, t, r) {
          e.txt(r.toWireFormat(t));
        }
        function c(e, t) {
          var r,
            n = "xmlns";
          t.xmlNamespaceUri
            ? ((r = t.xmlNamespaceUri),
              t.xmlNamespacePrefix && (n += ":" + t.xmlNamespacePrefix))
            : e.isRoot && t.api.xmlNamespaceUri && (r = t.api.xmlNamespaceUri),
            r && e.att(n, r);
        }
        var h = e("../util"),
          l = e("xmlbuilder");
        (n.prototype.toXML = function (e, t, r, n) {
          var s = l.create(r);
          return (
            c(s, t),
            i(s, e, t),
            s.children.length > 0 || n ? s.root().toString() : ""
          );
        }),
          (t.exports = n);
      },
      { "../util": 81, xmlbuilder: 86 },
    ],
    86: [
      function (e, t, r) {
        (function () {
          var r;
          (r = e("./XMLBuilder")),
            (t.exports.create = function (e, t, n) {
              return null != e ? new r(e, t, n).root() : new r();
            });
        }.call(this));
      },
      { "./XMLBuilder": 84 },
    ],
    84: [
      function (e, t, r) {
        (function () {
          var r, n;
          (n = e("./XMLFragment")),
            (r = (function () {
              function e(e, t, r) {
                var i, s, o;
                if (
                  ((this.children = []),
                  (this.rootObject = null),
                  this.is(e, "Object") &&
                    ((o = [e, t]), (t = o[0]), (r = o[1]), (e = null)),
                  null != e &&
                    ((e = "" + e || ""), null == t && (t = { version: "1.0" })),
                  null != t && null == t.version)
                )
                  throw new Error("Version number is required");
                if (null != t) {
                  if (
                    ((t.version = "" + t.version || ""),
                    !t.version.match(/1\.[0-9]+/))
                  )
                    throw new Error("Invalid version number: " + t.version);
                  if (((i = { version: t.version }), null != t.encoding)) {
                    if (
                      ((t.encoding = "" + t.encoding || ""),
                      !t.encoding.match(/[A-Za-z](?:[A-Za-z0-9._-]|-)*/))
                    )
                      throw new Error("Invalid encoding: " + t.encoding);
                    i.encoding = t.encoding;
                  }
                  null != t.standalone &&
                    (i.standalone = t.standalone ? "yes" : "no"),
                    (s = new n(this, "?xml", i)),
                    this.children.push(s);
                }
                null != r &&
                  ((i = {}),
                  null != e && (i.name = e),
                  null != r.ext &&
                    ((r.ext = "" + r.ext || ""), (i.ext = r.ext)),
                  (s = new n(this, "!DOCTYPE", i)),
                  this.children.push(s)),
                  null != e && this.begin(e);
              }
              return (
                (e.prototype.begin = function (t, r, i) {
                  var s, o;
                  if (null == t) throw new Error("Root element needs a name");
                  return (
                    this.rootObject &&
                      ((this.children = []), (this.rootObject = null)),
                    null != r
                      ? ((s = new e(t, r, i)), s.root())
                      : ((t = "" + t || ""),
                        (o = new n(this, t, {})),
                        (o.isRoot = !0),
                        (o.documentObject = this),
                        this.children.push(o),
                        (this.rootObject = o),
                        o)
                  );
                }),
                (e.prototype.root = function () {
                  return this.rootObject;
                }),
                (e.prototype.end = function (e) {
                  return toString(e);
                }),
                (e.prototype.toString = function (e) {
                  var t, r, n, i, s;
                  for (
                    r = "", s = this.children, n = 0, i = s.length;
                    i > n;
                    n++
                  )
                    (t = s[n]), (r += t.toString(e));
                  return r;
                }),
                (e.prototype.is = function (e, t) {
                  var r;
                  return (
                    (r = Object.prototype.toString.call(e).slice(8, -1)),
                    null != e && r === t
                  );
                }),
                e
              );
            })()),
            (t.exports = r);
        }.call(this));
      },
      { "./XMLFragment": 85 },
    ],
    85: [
      function (e, t, r) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = (function () {
            function e(e, t, r, n) {
              (this.isRoot = !1),
                (this.documentObject = null),
                (this.parent = e),
                (this.name = t),
                (this.attributes = r),
                (this.value = n),
                (this.children = []);
            }
            return (
              (e.prototype.element = function (t, n, i) {
                var s, o, a, u, c;
                if (null == t) throw new Error("Missing element name");
                (t = "" + t || ""),
                  this.assertLegalChar(t),
                  null == n && (n = {}),
                  this.is(n, "String") && this.is(i, "Object")
                    ? ((u = [i, n]), (n = u[0]), (i = u[1]))
                    : this.is(n, "String") &&
                      ((c = [{}, n]), (n = c[0]), (i = c[1]));
                for (o in n)
                  r.call(n, o) &&
                    ((a = n[o]), (a = "" + a || ""), (n[o] = this.escape(a)));
                return (
                  (s = new e(this, t, n)),
                  null != i &&
                    ((i = "" + i || ""),
                    (i = this.escape(i)),
                    this.assertLegalChar(i),
                    s.raw(i)),
                  this.children.push(s),
                  s
                );
              }),
              (e.prototype.insertBefore = function (t, n, i) {
                var s, o, a, u, c, h;
                if (this.isRoot)
                  throw new Error("Cannot insert elements at root level");
                if (null == t) throw new Error("Missing element name");
                (t = "" + t || ""),
                  this.assertLegalChar(t),
                  null == n && (n = {}),
                  this.is(n, "String") && this.is(i, "Object")
                    ? ((c = [i, n]), (n = c[0]), (i = c[1]))
                    : this.is(n, "String") &&
                      ((h = [{}, n]), (n = h[0]), (i = h[1]));
                for (a in n)
                  r.call(n, a) &&
                    ((u = n[a]), (u = "" + u || ""), (n[a] = this.escape(u)));
                return (
                  (s = new e(this.parent, t, n)),
                  null != i &&
                    ((i = "" + i || ""),
                    (i = this.escape(i)),
                    this.assertLegalChar(i),
                    s.raw(i)),
                  (o = this.parent.children.indexOf(this)),
                  this.parent.children.splice(o, 0, s),
                  s
                );
              }),
              (e.prototype.insertAfter = function (t, n, i) {
                var s, o, a, u, c, h;
                if (this.isRoot)
                  throw new Error("Cannot insert elements at root level");
                if (null == t) throw new Error("Missing element name");
                (t = "" + t || ""),
                  this.assertLegalChar(t),
                  null == n && (n = {}),
                  this.is(n, "String") && this.is(i, "Object")
                    ? ((c = [i, n]), (n = c[0]), (i = c[1]))
                    : this.is(n, "String") &&
                      ((h = [{}, n]), (n = h[0]), (i = h[1]));
                for (a in n)
                  r.call(n, a) &&
                    ((u = n[a]), (u = "" + u || ""), (n[a] = this.escape(u)));
                return (
                  (s = new e(this.parent, t, n)),
                  null != i &&
                    ((i = "" + i || ""),
                    (i = this.escape(i)),
                    this.assertLegalChar(i),
                    s.raw(i)),
                  (o = this.parent.children.indexOf(this)),
                  this.parent.children.splice(o + 1, 0, s),
                  s
                );
              }),
              (e.prototype.remove = function () {
                var e, t;
                if (this.isRoot)
                  throw new Error("Cannot remove the root element");
                return (
                  (e = this.parent.children.indexOf(this)),
                  [].splice.apply(
                    this.parent.children,
                    [e, e - e + 1].concat((t = []))
                  ),
                  t,
                  this.parent
                );
              }),
              (e.prototype.text = function (t) {
                var r;
                if (null == t) throw new Error("Missing element text");
                return (
                  (t = "" + t || ""),
                  (t = this.escape(t)),
                  this.assertLegalChar(t),
                  (r = new e(this, "", {}, t)),
                  this.children.push(r),
                  this
                );
              }),
              (e.prototype.cdata = function (t) {
                var r;
                if (null == t) throw new Error("Missing CDATA text");
                if (
                  ((t = "" + t || ""), this.assertLegalChar(t), t.match(/]]>/))
                )
                  throw new Error("Invalid CDATA text: " + t);
                return (
                  (r = new e(this, "", {}, "<![CDATA[" + t + "]]>")),
                  this.children.push(r),
                  this
                );
              }),
              (e.prototype.comment = function (t) {
                var r;
                if (null == t) throw new Error("Missing comment text");
                if (
                  ((t = "" + t || ""),
                  (t = this.escape(t)),
                  this.assertLegalChar(t),
                  t.match(/--/))
                )
                  throw new Error(
                    "Comment text cannot contain double-hypen: " + t
                  );
                return (
                  (r = new e(this, "", {}, "<!-- " + t + " -->")),
                  this.children.push(r),
                  this
                );
              }),
              (e.prototype.raw = function (t) {
                var r;
                if (null == t) throw new Error("Missing raw text");
                return (
                  (t = "" + t || ""),
                  (r = new e(this, "", {}, t)),
                  this.children.push(r),
                  this
                );
              }),
              (e.prototype.up = function () {
                if (this.isRoot)
                  throw new Error(
                    "This node has no parent. Use doc() if you need to get the document object."
                  );
                return this.parent;
              }),
              (e.prototype.root = function () {
                var e;
                if (this.isRoot) return this;
                for (e = this.parent; !e.isRoot; ) e = e.parent;
                return e;
              }),
              (e.prototype.document = function () {
                return this.root().documentObject;
              }),
              (e.prototype.end = function (e) {
                return this.document().toString(e);
              }),
              (e.prototype.prev = function () {
                var e;
                if (this.isRoot) throw new Error("Root node has no siblings");
                if (((e = this.parent.children.indexOf(this)), 1 > e))
                  throw new Error("Already at the first node");
                return this.parent.children[e - 1];
              }),
              (e.prototype.next = function () {
                var e;
                if (this.isRoot) throw new Error("Root node has no siblings");
                if (
                  ((e = this.parent.children.indexOf(this)),
                  -1 === e || e === this.parent.children.length - 1)
                )
                  throw new Error("Already at the last node");
                return this.parent.children[e + 1];
              }),
              (e.prototype.clone = function (t) {
                var r;
                return (
                  (r = new e(
                    this.parent,
                    this.name,
                    this.attributes,
                    this.value
                  )),
                  t &&
                    this.children.forEach(function (e) {
                      var n;
                      return (
                        (n = e.clone(t)), (n.parent = r), r.children.push(n)
                      );
                    }),
                  r
                );
              }),
              (e.prototype.importXMLBuilder = function (e) {
                var t;
                return (
                  (t = e.root().clone(!0)),
                  (t.parent = this),
                  this.children.push(t),
                  (t.isRoot = !1),
                  this
                );
              }),
              (e.prototype.attribute = function (e, t) {
                var r;
                if (null == e) throw new Error("Missing attribute name");
                if (null == t) throw new Error("Missing attribute value");
                return (
                  (e = "" + e || ""),
                  (t = "" + t || ""),
                  null == (r = this.attributes) && (this.attributes = {}),
                  (this.attributes[e] = this.escape(t)),
                  this
                );
              }),
              (e.prototype.removeAttribute = function (e) {
                if (null == e) throw new Error("Missing attribute name");
                return (e = "" + e || ""), delete this.attributes[e], this;
              }),
              (e.prototype.toString = function (e, t) {
                var r, n, i, s, o, a, u, c, h, l, p, f;
                (a = (null != e && e.pretty) || !1),
                  (s = (null != e && e.indent) || "  "),
                  (o = (null != e && e.newline) || "\n"),
                  t || (t = 0),
                  (c = new Array(t + 1).join(s)),
                  (u = ""),
                  a && (u += c),
                  (u += null == this.value ? "<" + this.name : "" + this.value),
                  (p = this.attributes);
                for (r in p)
                  (n = p[r]),
                    (u +=
                      "!DOCTYPE" === this.name
                        ? " " + n
                        : " " + r + '="' + n + '"');
                if (0 === this.children.length)
                  null == this.value &&
                    (u +=
                      "?xml" === this.name
                        ? "?>"
                        : "!DOCTYPE" === this.name
                        ? ">"
                        : "/>"),
                    a && (u += o);
                else if (
                  a &&
                  1 === this.children.length &&
                  this.children[0].value
                )
                  (u += ">"),
                    (u += this.children[0].value),
                    (u += "</" + this.name + ">"),
                    (u += o);
                else {
                  for (
                    u += ">",
                      a && (u += o),
                      f = this.children,
                      h = 0,
                      l = f.length;
                    l > h;
                    h++
                  )
                    (i = f[h]), (u += i.toString(e, t + 1));
                  a && (u += c), (u += "</" + this.name + ">"), a && (u += o);
                }
                return u;
              }),
              (e.prototype.escape = function (e) {
                return e
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/'/g, "&apos;")
                  .replace(/"/g, "&quot;");
              }),
              (e.prototype.assertLegalChar = function (e) {
                var t, r;
                if (
                  ((t = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/),
                  (r = e.match(t)))
                )
                  throw new Error(
                    "Invalid character (" + r + ") in string: " + e
                  );
              }),
              (e.prototype.is = function (e, t) {
                var r;
                return (
                  (r = Object.prototype.toString.call(e).slice(8, -1)),
                  null != e && r === t
                );
              }),
              (e.prototype.ele = function (e, t, r) {
                return this.element(e, t, r);
              }),
              (e.prototype.txt = function (e) {
                return this.text(e);
              }),
              (e.prototype.dat = function (e) {
                return this.cdata(e);
              }),
              (e.prototype.att = function (e, t) {
                return this.attribute(e, t);
              }),
              (e.prototype.com = function (e) {
                return this.comment(e);
              }),
              (e.prototype.doc = function () {
                return this.document();
              }),
              (e.prototype.e = function (e, t, r) {
                return this.element(e, t, r);
              }),
              (e.prototype.t = function (e) {
                return this.text(e);
              }),
              (e.prototype.d = function (e) {
                return this.cdata(e);
              }),
              (e.prototype.a = function (e, t) {
                return this.attribute(e, t);
              }),
              (e.prototype.c = function (e) {
                return this.comment(e);
              }),
              (e.prototype.r = function (e) {
                return this.raw(e);
              }),
              (e.prototype.u = function () {
                return this.up();
              }),
              e
            );
          })()),
            (t.exports = e);
        }.call(this));
      },
      {},
    ],
    74: [
      function (e, t, r) {
        var n = e("../core"),
          i = n.util.inherit;
        (n.Signers.RequestSigner = i({
          constructor: function (e) {
            this.request = e;
          },
        })),
          (n.Signers.RequestSigner.getVersion = function (e) {
            switch (e) {
              case "v2":
                return n.Signers.V2;
              case "v3":
                return n.Signers.V3;
              case "v4":
                return n.Signers.V4;
              case "s3":
                return n.Signers.S3;
              case "v3https":
                return n.Signers.V3Https;
            }
            throw new Error("Unknown signing version " + e);
          }),
          e("./v2"),
          e("./v3"),
          e("./v3https"),
          e("./v4"),
          e("./s3"),
          e("./presign");
      },
      {
        "../core": 23,
        "./presign": 73,
        "./s3": 75,
        "./v2": 76,
        "./v3": 77,
        "./v3https": 78,
        "./v4": 79,
      },
    ],
    79: [
      function (e, t, r) {
        var n = e("../core"),
          i = n.util.inherit,
          s = {},
          o = "presigned-expires";
        (n.Signers.V4 = i(n.Signers.RequestSigner, {
          constructor: function (e, t) {
            n.Signers.RequestSigner.call(this, e), (this.serviceName = t);
          },
          algorithm: "AWS4-HMAC-SHA256",
          addAuthorization: function (e, t) {
            var r = n.util.date.iso8601(t).replace(/[:\-]|\.\d{3}/g, "");
            this.isPresigned()
              ? this.updateForPresigned(e, r)
              : this.addHeaders(e, r),
              (this.request.headers.Authorization = this.authorization(e, r));
          },
          addHeaders: function (e, t) {
            (this.request.headers["X-Amz-Date"] = t),
              e.sessionToken &&
                (this.request.headers["x-amz-security-token"] = e.sessionToken);
          },
          updateForPresigned: function (e, t) {
            var r = this.credentialString(t),
              i = {
                "X-Amz-Date": t,
                "X-Amz-Algorithm": this.algorithm,
                "X-Amz-Credential": e.accessKeyId + "/" + r,
                "X-Amz-Expires": this.request.headers[o],
                "X-Amz-SignedHeaders": this.signedHeaders(),
              };
            e.sessionToken && (i["X-Amz-Security-Token"] = e.sessionToken),
              this.request.headers["Content-Type"] &&
                (i["Content-Type"] = this.request.headers["Content-Type"]),
              this.request.headers["Content-MD5"] &&
                (i["Content-MD5"] = this.request.headers["Content-MD5"]),
              n.util.each.call(this, this.request.headers, function (e, t) {
                e !== o &&
                  this.isSignableHeader(e) &&
                  0 === e.toLowerCase().indexOf("x-amz-") &&
                  (i[e] = t);
              });
            var s = this.request.path.indexOf("?") >= 0 ? "&" : "?";
            this.request.path += s + n.util.queryParamsToString(i);
          },
          authorization: function (e, t) {
            var r = [],
              n = this.credentialString(t);
            return (
              r.push(this.algorithm + " Credential=" + e.accessKeyId + "/" + n),
              r.push("SignedHeaders=" + this.signedHeaders()),
              r.push("Signature=" + this.signature(e, t)),
              r.join(", ")
            );
          },
          signature: function (e, t) {
            var r = s[this.serviceName],
              i = t.substr(0, 8);
            if (
              !r ||
              r.akid !== e.accessKeyId ||
              r.region !== this.request.region ||
              r.date !== i
            ) {
              var o = e.secretAccessKey,
                a = n.util.crypto.hmac("AWS4" + o, i, "buffer"),
                u = n.util.crypto.hmac(a, this.request.region, "buffer"),
                c = n.util.crypto.hmac(u, this.serviceName, "buffer"),
                h = n.util.crypto.hmac(c, "aws4_request", "buffer");
              s[this.serviceName] = {
                region: this.request.region,
                date: i,
                key: h,
                akid: e.accessKeyId,
              };
            }
            var l = s[this.serviceName].key;
            return n.util.crypto.hmac(l, this.stringToSign(t), "hex");
          },
          stringToSign: function (e) {
            var t = [];
            return (
              t.push("AWS4-HMAC-SHA256"),
              t.push(e),
              t.push(this.credentialString(e)),
              t.push(this.hexEncodedHash(this.canonicalString())),
              t.join("\n")
            );
          },
          canonicalString: function () {
            var e = [],
              t = this.request.pathname();
            return (
              "s3" !== this.serviceName && (t = n.util.uriEscapePath(t)),
              e.push(this.request.method),
              e.push(t),
              e.push(this.request.search()),
              e.push(this.canonicalHeaders() + "\n"),
              e.push(this.signedHeaders()),
              e.push(this.hexEncodedBodyHash()),
              e.join("\n")
            );
          },
          canonicalHeaders: function () {
            var e = [];
            n.util.each.call(this, this.request.headers, function (t, r) {
              e.push([t, r]);
            }),
              e.sort(function (e, t) {
                return e[0].toLowerCase() < t[0].toLowerCase() ? -1 : 1;
              });
            var t = [];
            return (
              n.util.arrayEach.call(this, e, function (e) {
                var r = e[0].toLowerCase();
                this.isSignableHeader(r) &&
                  t.push(r + ":" + this.canonicalHeaderValues(e[1].toString()));
              }),
              t.join("\n")
            );
          },
          canonicalHeaderValues: function (e) {
            return e.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
          },
          signedHeaders: function () {
            var e = [];
            return (
              n.util.each.call(this, this.request.headers, function (t) {
                (t = t.toLowerCase()), this.isSignableHeader(t) && e.push(t);
              }),
              e.sort().join(";")
            );
          },
          credentialString: function (e) {
            var t = [];
            return (
              t.push(e.substr(0, 8)),
              t.push(this.request.region),
              t.push(this.serviceName),
              t.push("aws4_request"),
              t.join("/")
            );
          },
          hexEncodedHash: function (e) {
            return n.util.crypto.sha256(e, "hex");
          },
          hexEncodedBodyHash: function () {
            return this.isPresigned() && "s3" === this.serviceName
              ? "UNSIGNED-PAYLOAD"
              : this.request.headers["X-Amz-Content-Sha256"]
              ? this.request.headers["X-Amz-Content-Sha256"]
              : this.hexEncodedHash(this.request.body || "");
          },
          unsignableHeaders: [
            "authorization",
            "content-type",
            "content-length",
            "user-agent",
            o,
          ],
          isSignableHeader: function (e) {
            return 0 === e.toLowerCase().indexOf("x-amz-")
              ? !0
              : this.unsignableHeaders.indexOf(e) < 0;
          },
          isPresigned: function () {
            return this.request.headers[o] ? !0 : !1;
          },
        })),
          (t.exports = n.Signers.V4);
      },
      { "../core": 23 },
    ],
    78: [
      function (e, t, r) {
        var n = e("../core"),
          i = n.util.inherit;
        e("./v3"),
          (n.Signers.V3Https = i(n.Signers.V3, {
            authorization: function (e) {
              return (
                "AWS3-HTTPS AWSAccessKeyId=" +
                e.accessKeyId +
                ",Algorithm=HmacSHA256,Signature=" +
                this.signature(e)
              );
            },
            stringToSign: function () {
              return this.request.headers["X-Amz-Date"];
            },
          })),
          (t.exports = n.Signers.V3Https);
      },
      { "../core": 23, "./v3": 77 },
    ],
    77: [
      function (e, t, r) {
        var n = e("../core"),
          i = n.util.inherit;
        (n.Signers.V3 = i(n.Signers.RequestSigner, {
          addAuthorization: function (e, t) {
            var r = n.util.date.rfc822(t);
            (this.request.headers["X-Amz-Date"] = r),
              e.sessionToken &&
                (this.request.headers["x-amz-security-token"] = e.sessionToken),
              (this.request.headers[
                "X-Amzn-Authorization"
              ] = this.authorization(e, r));
          },
          authorization: function (e) {
            return (
              "AWS3 AWSAccessKeyId=" +
              e.accessKeyId +
              ",Algorithm=HmacSHA256,SignedHeaders=" +
              this.signedHeaders() +
              ",Signature=" +
              this.signature(e)
            );
          },
          signedHeaders: function () {
            var e = [];
            return (
              n.util.arrayEach(this.headersToSign(), function (t) {
                e.push(t.toLowerCase());
              }),
              e.sort().join(";")
            );
          },
          canonicalHeaders: function () {
            var e = this.request.headers,
              t = [];
            return (
              n.util.arrayEach(this.headersToSign(), function (r) {
                t.push(r.toLowerCase().trim() + ":" + String(e[r]).trim());
              }),
              t.sort().join("\n") + "\n"
            );
          },
          headersToSign: function () {
            var e = [];
            return (
              n.util.each(this.request.headers, function (t) {
                ("Host" === t ||
                  "Content-Encoding" === t ||
                  t.match(/^X-Amz/i)) &&
                  e.push(t);
              }),
              e
            );
          },
          signature: function (e) {
            return n.util.crypto.hmac(
              e.secretAccessKey,
              this.stringToSign(),
              "base64"
            );
          },
          stringToSign: function () {
            var e = [];
            return (
              e.push(this.request.method),
              e.push("/"),
              e.push(""),
              e.push(this.canonicalHeaders()),
              e.push(this.request.body),
              n.util.crypto.sha256(e.join("\n"))
            );
          },
        })),
          (t.exports = n.Signers.V3);
      },
      { "../core": 23 },
    ],
    76: [
      function (e, t, r) {
        var n = e("../core"),
          i = n.util.inherit;
        (n.Signers.V2 = i(n.Signers.RequestSigner, {
          addAuthorization: function (e, t) {
            t || (t = n.util.date.getDate());
            var r = this.request;
            (r.params.Timestamp = n.util.date.iso8601(t)),
              (r.params.SignatureVersion = "2"),
              (r.params.SignatureMethod = "HmacSHA256"),
              (r.params.AWSAccessKeyId = e.accessKeyId),
              e.sessionToken && (r.params.SecurityToken = e.sessionToken),
              delete r.params.Signature,
              (r.params.Signature = this.signature(e)),
              (r.body = n.util.queryParamsToString(r.params)),
              (r.headers["Content-Length"] = r.body.length);
          },
          signature: function (e) {
            return n.util.crypto.hmac(
              e.secretAccessKey,
              this.stringToSign(),
              "base64"
            );
          },
          stringToSign: function () {
            var e = [];
            return (
              e.push(this.request.method),
              e.push(this.request.endpoint.host.toLowerCase()),
              e.push(this.request.pathname()),
              e.push(n.util.queryParamsToString(this.request.params)),
              e.join("\n")
            );
          },
        })),
          (t.exports = n.Signers.V2);
      },
      { "../core": 23 },
    ],
    75: [
      function (e, t, r) {
        var n = e("../core"),
          i = n.util.inherit;
        (n.Signers.S3 = i(n.Signers.RequestSigner, {
          subResources: {
            acl: 1,
            cors: 1,
            lifecycle: 1,
            delete: 1,
            location: 1,
            logging: 1,
            notification: 1,
            partNumber: 1,
            policy: 1,
            requestPayment: 1,
            restore: 1,
            tagging: 1,
            torrent: 1,
            uploadId: 1,
            uploads: 1,
            versionId: 1,
            versioning: 1,
            versions: 1,
            website: 1,
          },
          responseHeaders: {
            "response-content-type": 1,
            "response-content-language": 1,
            "response-expires": 1,
            "response-cache-control": 1,
            "response-content-disposition": 1,
            "response-content-encoding": 1,
          },
          addAuthorization: function (e, t) {
            this.request.headers["presigned-expires"] ||
              (this.request.headers["X-Amz-Date"] = n.util.date.rfc822(t)),
              e.sessionToken &&
                (this.request.headers["x-amz-security-token"] = e.sessionToken);
            var r = this.sign(e.secretAccessKey, this.stringToSign()),
              i = "AWS " + e.accessKeyId + ":" + r;
            this.request.headers.Authorization = i;
          },
          stringToSign: function () {
            var e = this.request,
              t = [];
            t.push(e.method),
              t.push(e.headers["Content-MD5"] || ""),
              t.push(e.headers["Content-Type"] || ""),
              t.push(e.headers["presigned-expires"] || "");
            var r = this.canonicalizedAmzHeaders();
            return (
              r && t.push(r), t.push(this.canonicalizedResource()), t.join("\n")
            );
          },
          canonicalizedAmzHeaders: function () {
            var e = [];
            n.util.each(this.request.headers, function (t) {
              t.match(/^x-amz-/i) && e.push(t);
            }),
              e.sort(function (e, t) {
                return e.toLowerCase() < t.toLowerCase() ? -1 : 1;
              });
            var t = [];
            return (
              n.util.arrayEach.call(this, e, function (e) {
                t.push(e.toLowerCase() + ":" + String(this.request.headers[e]));
              }),
              t.join("\n")
            );
          },
          canonicalizedResource: function () {
            var e = this.request,
              t = e.path.split("?"),
              r = t[0],
              i = t[1],
              s = "";
            if (
              (e.virtualHostedBucket && (s += "/" + e.virtualHostedBucket),
              (s += r),
              i)
            ) {
              var o = [];
              n.util.arrayEach.call(this, i.split("&"), function (e) {
                var t = e.split("=")[0],
                  r = e.split("=")[1];
                if (this.subResources[t] || this.responseHeaders[t]) {
                  var n = { name: t };
                  void 0 !== r &&
                    (this.subResources[t]
                      ? (n.value = r)
                      : (n.value = decodeURIComponent(r))),
                    o.push(n);
                }
              }),
                o.sort(function (e, t) {
                  return e.name < t.name ? -1 : 1;
                }),
                o.length &&
                  ((i = []),
                  n.util.arrayEach(o, function (e) {
                    void 0 === e.value
                      ? i.push(e.name)
                      : i.push(e.name + "=" + e.value);
                  }),
                  (s += "?" + i.join("&")));
            }
            return s;
          },
          sign: function (e, t) {
            return n.util.crypto.hmac(e, t, "base64", "sha1");
          },
        })),
          (t.exports = n.Signers.S3);
      },
      { "../core": 23 },
    ],
    73: [
      function (e, t, r) {
        function n(e) {
          var t = e.httpRequest.headers[a];
          if (
            (delete e.httpRequest.headers["User-Agent"],
            delete e.httpRequest.headers["X-Amz-User-Agent"],
            e.service.getSignerClass() === s.Signers.V4)
          ) {
            if (t > 604800) {
              var r =
                "Presigning does not support expiry time greater than a week with SigV4 signing.";
              throw s.util.error(new Error(), {
                code: "InvalidExpiryTime",
                message: r,
                retryable: !1,
              });
            }
            e.httpRequest.headers[a] = t;
          } else {
            if (e.service.getSignerClass() !== s.Signers.S3)
              throw s.util.error(new Error(), {
                message: "Presigning only supports S3 or SigV4 signing.",
                code: "UnsupportedSigner",
                retryable: !1,
              });
            e.httpRequest.headers[a] = parseInt(
              s.util.date.unixTimestamp() + t,
              10
            ).toString();
          }
        }
        function i(e) {
          var t = e.httpRequest.endpoint,
            r = s.util.urlParse(e.httpRequest.path),
            n = {};
          r.search && (n = s.util.queryStringParse(r.search.substr(1))),
            s.util.each(e.httpRequest.headers, function (e, t) {
              e === a && (e = "Expires"), (n[e] = t);
            }),
            delete e.httpRequest.headers[a];
          var i = n.Authorization.split(" ");
          if ("AWS" === i[0])
            (i = i[1].split(":")),
              (n.AWSAccessKeyId = i[0]),
              (n.Signature = i[1]);
          else if ("AWS4-HMAC-SHA256" === i[0]) {
            i.shift();
            var o = i.join(" "),
              u = o.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
            (n["X-Amz-Signature"] = u), delete n.Expires;
          }
          delete n.Authorization,
            delete n.Host,
            (t.pathname = r.pathname),
            (t.search = s.util.queryParamsToString(n));
        }
        var s = e("../core"),
          o = s.util.inherit,
          a = "presigned-expires";
        (s.Signers.Presign = o({
          sign: function (e, t, r) {
            if (
              ((e.httpRequest.headers[a] = t || 3600),
              e.on("build", n),
              e.on("sign", i),
              e.removeListener(
                "afterBuild",
                s.EventListeners.Core.SET_CONTENT_LENGTH
              ),
              e.removeListener(
                "afterBuild",
                s.EventListeners.Core.COMPUTE_SHA256
              ),
              e.emit("beforePresign", [e]),
              !r)
            ) {
              if ((e.build(), e.response.error)) throw e.response.error;
              return s.util.urlFormat(e.httpRequest.endpoint);
            }
            e.build(function () {
              this.response.error
                ? r(this.response.error)
                : r(null, s.util.urlFormat(e.httpRequest.endpoint));
            });
          },
        })),
          (t.exports = s.Signers.Presign);
      },
      { "../core": 23 },
    ],
    60: [
      function (e, t, r) {
        var n = e("./core"),
          i = e("./model/api"),
          s = e("./region_config"),
          o = n.util.inherit;
        (n.Service = o({
          constructor: function (e) {
            if (!this.loadServiceClass)
              throw n.util.error(
                new Error(),
                "Service must be constructed with `new' operator"
              );
            var t = this.loadServiceClass(e || {});
            return t ? new t(e) : void this.initialize(e);
          },
          initialize: function (e) {
            var t = n.config[this.serviceIdentifier];
            (this.config = new n.Config(n.config)),
              t && this.config.update(t, !0),
              e && this.config.update(e, !0),
              this.validateService(),
              this.config.endpoint || s(this),
              (this.config.endpoint = this.endpointFromTemplate(
                this.config.endpoint
              )),
              this.setEndpoint(this.config.endpoint);
          },
          validateService: function () {},
          loadServiceClass: function (e) {
            var t = e;
            if (n.util.isEmpty(this.api)) {
              if (t.apiConfig)
                return n.Service.defineServiceApi(
                  this.constructor,
                  t.apiConfig
                );
              if (this.constructor.services) {
                (t = new n.Config(n.config)), t.update(e, !0);
                var r = t.apiVersions[this.constructor.serviceIdentifier];
                return (r = r || t.apiVersion), this.getLatestServiceClass(r);
              }
              return null;
            }
            return null;
          },
          getLatestServiceClass: function (e) {
            return (
              (e = this.getLatestServiceVersion(e)),
              null === this.constructor.services[e] &&
                n.Service.defineServiceApi(this.constructor, e),
              this.constructor.services[e]
            );
          },
          getLatestServiceVersion: function (e) {
            if (
              !this.constructor.services ||
              0 === this.constructor.services.length
            )
              throw new Error(
                "No services defined on " + this.constructor.serviceIdentifier
              );
            if (
              (e
                ? n.util.isType(e, Date) &&
                  (e = n.util.date.iso8601(e).split("T")[0])
                : (e = "latest"),
              Object.hasOwnProperty(this.constructor.services, e))
            )
              return e;
            for (
              var t = Object.keys(this.constructor.services).sort(),
                r = null,
                i = t.length - 1;
              i >= 0;
              i--
            )
              if (
                ("*" !== t[i][t[i].length - 1] && (r = t[i]),
                t[i].substr(0, 10) <= e)
              )
                return r;
            throw new Error(
              "Could not find " +
                this.constructor.serviceIdentifier +
                " API to satisfy version constraint `" +
                e +
                "'"
            );
          },
          api: {},
          defaultRetryCount: 3,
          makeRequest: function (e, t, r) {
            if (
              ("function" == typeof t && ((r = t), (t = null)),
              (t = t || {}),
              this.config.params)
            ) {
              var i = this.api.operations[e];
              i &&
                ((t = n.util.copy(t)),
                n.util.each(this.config.params, function (e, r) {
                  i.input.members[e] &&
                    (void 0 === t[e] || null === t[e]) &&
                    (t[e] = r);
                }));
            }
            var s = new n.Request(this, e, t);
            return this.addAllRequestListeners(s), r && s.send(r), s;
          },
          makeUnauthenticatedRequest: function (e, t, r) {
            "function" == typeof t && ((r = t), (t = {}));
            var n = this.makeRequest(e, t).toUnauthenticated();
            return r ? n.send(r) : n;
          },
          waitFor: function (e, t, r) {
            var i = new n.ResourceWaiter(this, e);
            return i.wait(t, r);
          },
          addAllRequestListeners: function (e) {
            for (
              var t = [
                  n.events,
                  n.EventListeners.Core,
                  this.serviceInterface(),
                  n.EventListeners.CorePost,
                ],
                r = 0;
              r < t.length;
              r++
            )
              t[r] && e.addListeners(t[r]);
            this.config.paramValidation ||
              e.removeListener(
                "validate",
                n.EventListeners.Core.VALIDATE_PARAMETERS
              ),
              this.config.logger && e.addListeners(n.EventListeners.Logger),
              this.setupRequestListeners(e);
          },
          setupRequestListeners: function () {},
          getSignerClass: function () {
            var e;
            return (
              (e = this.config.signatureVersion
                ? this.config.signatureVersion
                : this.api.signatureVersion),
              n.Signers.RequestSigner.getVersion(e)
            );
          },
          serviceInterface: function () {
            switch (this.api.protocol) {
              case "ec2":
                return n.EventListeners.Query;
              case "query":
                return n.EventListeners.Query;
              case "json":
                return n.EventListeners.Json;
              case "rest-json":
                return n.EventListeners.RestJson;
              case "rest-xml":
                return n.EventListeners.RestXml;
            }
            if (this.api.protocol)
              throw new Error(
                "Invalid service `protocol' " +
                  this.api.protocol +
                  " in API config"
              );
          },
          successfulResponse: function (e) {
            return e.httpResponse.statusCode < 300;
          },
          numRetries: function () {
            return void 0 !== this.config.maxRetries
              ? this.config.maxRetries
              : this.defaultRetryCount;
          },
          retryDelays: function () {
            for (var e = this.numRetries(), t = [], r = 0; e > r; ++r)
              t[r] = 30 * Math.pow(2, r);
            return t;
          },
          retryableError: function (e) {
            return this.networkingError(e)
              ? !0
              : this.expiredCredentialsError(e)
              ? !0
              : this.throttledError(e)
              ? !0
              : e.statusCode >= 500
              ? !0
              : !1;
          },
          networkingError: function (e) {
            return "NetworkingError" === e.code;
          },
          expiredCredentialsError: function (e) {
            return "ExpiredTokenException" === e.code;
          },
          clockSkewError: function (e) {
            switch (e.code) {
              case "RequestTimeTooSkewed":
              case "RequestExpired":
              case "InvalidSignatureException":
              case "SignatureDoesNotMatch":
              case "AuthFailure":
              case "RequestInTheFuture":
                return !0;
              default:
                return !1;
            }
          },
          throttledError: function (e) {
            switch (e.code) {
              case "ProvisionedThroughputExceededException":
              case "Throttling":
              case "ThrottlingException":
              case "RequestLimitExceeded":
              case "RequestThrottled":
                return !0;
              default:
                return !1;
            }
          },
          endpointFromTemplate: function (e) {
            if ("string" != typeof e) return e;
            var t = e;
            return (
              (t = t.replace(/\{service\}/g, this.api.endpointPrefix)),
              (t = t.replace(/\{region\}/g, this.config.region)),
              (t = t.replace(
                /\{scheme\}/g,
                this.config.sslEnabled ? "https" : "http"
              ))
            );
          },
          setEndpoint: function (e) {
            this.endpoint = new n.Endpoint(e, this.config);
          },
          paginationConfig: function (e, t) {
            var r = this.api.operations[e].paginator;
            if (!r) {
              if (t) {
                var i = new Error();
                throw n.util.error(i, "No pagination configuration for " + e);
              }
              return null;
            }
            return r;
          },
        })),
          n.util.update(n.Service, {
            defineMethods: function (e) {
              n.util.each(e.prototype.api.operations, function (t) {
                e.prototype[t] ||
                  (e.prototype[t] = function (e, r) {
                    return this.makeRequest(t, e, r);
                  });
              });
            },
            defineService: function (e, t, r) {
              (n.Service._serviceMap[e] = !0),
                Array.isArray(t) || ((r = t), (t = []));
              var i = o(n.Service, r || {});
              if ("string" == typeof e) {
                n.Service.addVersions(i, t);
                var s = i.serviceIdentifier || e;
                i.serviceIdentifier = s;
              } else (i.prototype.api = e), n.Service.defineMethods(i);
              return i;
            },
            addVersions: function (e, t) {
              Array.isArray(t) || (t = [t]), (e.services = e.services || {});
              for (var r = 0; r < t.length; r++)
                void 0 === e.services[t[r]] && (e.services[t[r]] = null);
              e.apiVersions = Object.keys(e.services).sort();
            },
            defineServiceApi: function (e, t, r) {
              function s(e) {
                e.isApi ? (a.prototype.api = e) : (a.prototype.api = new i(e));
              }
              var a = o(e, { serviceIdentifier: e.serviceIdentifier });
              if ("string" == typeof t) {
                if (r) s(r);
                else
                  try {
                    s(n.apiLoader(e.serviceIdentifier, t));
                  } catch (u) {
                    throw n.util.error(u, {
                      message:
                        "Could not find API configuration " +
                        e.serviceIdentifier +
                        "-" +
                        t,
                    });
                  }
                e.services.hasOwnProperty(t) ||
                  (e.apiVersions = e.apiVersions.concat(t).sort()),
                  (e.services[t] = a);
              } else s(t);
              return n.Service.defineMethods(a), a;
            },
            hasService: function (e) {
              return n.Service._serviceMap.hasOwnProperty(e);
            },
            _serviceMap: {},
          });
      },
      { "./core": 23, "./model/api": 40, "./region_config": 54 },
    ],
    54: [
      function (e, t, r) {
        function n(e) {
          if (!e) return null;
          var t = e.split("-");
          return t.length < 3
            ? null
            : t.slice(0, t.length - 2).join("-") + "-*";
        }
        function i(e) {
          var t = e.config.region,
            r = n(t),
            i = e.api.endpointPrefix;
          return [
            [t, i],
            [r, i],
            [t, "*"],
            [r, "*"],
            ["*", i],
            ["*", "*"],
          ].map(function (e) {
            return e[0] && e[1] ? e.join("/") : null;
          });
        }
        function s(e, t) {
          a.each(t, function (t, r) {
            "globalEndpoint" !== t &&
              (void 0 === e.config[t] || null === e.config[t]) &&
              (e.config[t] = r);
          });
        }
        function o(e) {
          for (var t = i(e), r = 0; r < t.length; r++) {
            var n = t[r];
            if (n && u.rules.hasOwnProperty(n)) {
              var o = u.rules[n];
              return (
                "string" == typeof o && (o = u.patterns[o]),
                (e.isGlobalEndpoint = !!o.globalEndpoint),
                o.signatureVersion || (o.signatureVersion = "v4"),
                void s(e, o)
              );
            }
          }
        }
        var a = e("./util"),
          u = e("./region_config.json");
        t.exports = o;
      },
      { "./region_config.json": 53, "./util": 81 },
    ],
    53: [
      function (e, t, r) {
        t.exports = {
          rules: {
            "*/*": { endpoint: "{service}.{region}.amazonaws.com" },
            "cn-*/*": { endpoint: "{service}.{region}.amazonaws.com.cn" },
            "*/cloudfront": "globalSSL",
            "*/iam": "globalSSL",
            "*/sts": "globalSSL",
            "*/importexport": {
              endpoint: "{service}.amazonaws.com",
              signatureVersion: "v2",
              globalEndpoint: !0,
            },
            "*/route53": {
              endpoint: "https://{service}.amazonaws.com",
              signatureVersion: "v3https",
              globalEndpoint: !0,
            },
            "us-gov-*/iam": "globalGovCloud",
            "us-gov-*/sts": { endpoint: "{service}.{region}.amazonaws.com" },
            "us-gov-west-1/s3": "s3dash",
            "us-west-1/s3": "s3dash",
            "us-west-2/s3": "s3dash",
            "eu-west-1/s3": "s3dash",
            "ap-southeast-1/s3": "s3dash",
            "ap-southeast-2/s3": "s3dash",
            "ap-northeast-1/s3": "s3dash",
            "sa-east-1/s3": "s3dash",
            "us-east-1/s3": {
              endpoint: "{service}.amazonaws.com",
              signatureVersion: "s3",
            },
            "us-east-1/sdb": {
              endpoint: "{service}.amazonaws.com",
              signatureVersion: "v2",
            },
            "*/sdb": {
              endpoint: "{service}.{region}.amazonaws.com",
              signatureVersion: "v2",
            },
          },
          patterns: {
            globalSSL: {
              endpoint: "https://{service}.amazonaws.com",
              globalEndpoint: !0,
            },
            globalGovCloud: { endpoint: "{service}.us-gov.amazonaws.com" },
            s3dash: {
              endpoint: "{service}-{region}.amazonaws.com",
              signatureVersion: "s3",
            },
          },
        };
      },
      {},
    ],
    57: [
      function (e, t, r) {
        var n = e("./core"),
          i = n.util.inherit;
        n.Response = i({
          constructor: function (e) {
            (this.request = e),
              (this.data = null),
              (this.error = null),
              (this.retryCount = 0),
              (this.redirectCount = 0),
              (this.httpResponse = new n.HttpResponse()),
              e &&
                ((this.maxRetries = e.service.numRetries()),
                (this.maxRedirects = e.service.config.maxRedirects));
          },
          nextPage: function (e) {
            var t,
              r = this.request.service,
              i = this.request.operation;
            try {
              t = r.paginationConfig(i, !0);
            } catch (s) {
              this.error = s;
            }
            if (!this.hasNextPage()) {
              if (e) e(this.error, null);
              else if (this.error) throw this.error;
              return null;
            }
            var o = n.util.copy(this.request.params);
            if (this.nextPageTokens) {
              var a = t.inputToken;
              "string" == typeof a && (a = [a]);
              for (var u = 0; u < a.length; u++)
                o[a[u]] = this.nextPageTokens[u];
              return r.makeRequest(this.request.operation, o, e);
            }
            return e ? e(null, null) : null;
          },
          hasNextPage: function () {
            return (
              this.cacheNextPageTokens(),
              this.nextPageTokens
                ? !0
                : void 0 === this.nextPageTokens
                ? void 0
                : !1
            );
          },
          cacheNextPageTokens: function () {
            if (this.hasOwnProperty("nextPageTokens"))
              return this.nextPageTokens;
            this.nextPageTokens = void 0;
            var e = this.request.service.paginationConfig(
              this.request.operation
            );
            if (!e) return this.nextPageTokens;
            if (
              ((this.nextPageTokens = null),
              e.moreResults && !n.util.jamespath.find(e.moreResults, this.data))
            )
              return this.nextPageTokens;
            var t = e.outputToken;
            return (
              "string" == typeof t && (t = [t]),
              n.util.arrayEach.call(this, t, function (e) {
                var t = n.util.jamespath.find(e, this.data);
                t &&
                  ((this.nextPageTokens = this.nextPageTokens || []),
                  this.nextPageTokens.push(t));
              }),
              this.nextPageTokens
            );
          },
        });
      },
      { "./core": 23 },
    ],
    56: [
      function (e, t, r) {
        var n = e("./core"),
          i = n.util.inherit;
        n.ResourceWaiter = i({
          constructor: function (e, t) {
            (this.service = e),
              (this.state = t),
              "object" == typeof this.state &&
                n.util.each.call(this, this.state, function (e, t) {
                  (this.state = e), (this.expectedValue = t);
                }),
              this.loadWaiterConfig(this.state),
              this.expectedValue ||
                (this.expectedValue = this.config.successValue);
          },
          service: null,
          state: null,
          expectedValue: null,
          config: null,
          waitDone: !1,
          Listeners: {
            retry: new n.SequentialExecutor().addNamedListeners(function (e) {
              e("RETRY_CHECK", "retry", function (e) {
                var t = e.request._waiter;
                e.error &&
                  "ResourceNotReady" === e.error.code &&
                  (e.error.retryDelay = 1e3 * t.config.interval);
              });
            }),
            output: new n.SequentialExecutor().addNamedListeners(function (e) {
              e("CHECK_OUT_ERROR", "extractError", function (e) {
                e.error && e.request._waiter.setError(e, !0);
              }),
                e("CHECK_OUTPUT", "extractData", function (e) {
                  var t = e.request._waiter,
                    r = t.checkSuccess(e);
                  r ? (e.error = null) : t.setError(e, null === r ? !1 : !0);
                });
            }),
            error: new n.SequentialExecutor().addNamedListeners(function (e) {
              e("CHECK_ERROR", "extractError", function (e) {
                var t = e.request._waiter,
                  r = t.checkError(e);
                r
                  ? ((e.error = null),
                    (e.data = {}),
                    e.request.removeAllListeners("extractData"))
                  : t.setError(e, null === r ? !1 : !0);
              }),
                e("CHECK_ERR_OUTPUT", "extractData", function (e) {
                  e.request._waiter.setError(e, !0);
                });
            }),
          },
          wait: function (e, t) {
            "function" == typeof e && ((t = e), (e = void 0));
            var r = this.service.makeRequest(this.config.operation, e),
              n = this.Listeners[this.config.successType];
            return (
              (r._waiter = this),
              (r.response.maxRetries = this.config.maxAttempts),
              r.addListeners(this.Listeners.retry),
              n && r.addListeners(n),
              t && r.send(t),
              r
            );
          },
          setError: function (e, t) {
            (e.data = null),
              (e.error = n.util.error(e.error || new Error(), {
                code: "ResourceNotReady",
                message: "Resource is not in the state " + this.state,
                retryable: t,
              }));
          },
          checkSuccess: function (e) {
            if (!this.config.successPath)
              return e.httpResponse.statusCode < 300;
            var t = n.util.jamespath.find(this.config.successPath, e.data);
            return this.config.failureValue &&
              this.config.failureValue.indexOf(t) >= 0
              ? null
              : this.expectedValue
              ? t === this.expectedValue
              : t
              ? !0
              : !1;
          },
          checkError: function (e) {
            var t = this.config.successValue;
            return "number" == typeof t
              ? e.httpResponse.statusCode === t
              : e.error && e.error.code === t;
          },
          loadWaiterConfig: function (e, t) {
            if (!this.service.api.waiters[e]) {
              if (t) return;
              throw new n.util.error(new Error(), {
                code: "StateNotFoundError",
                message: "State " + e + " not found.",
              });
            }
            this.config = this.service.api.waiters[e];
            var r = this.config;
            !(function () {
              (r.successType = r.successType || r.acceptorType),
                (r.successPath = r.successPath || r.acceptorPath),
                (r.successValue = r.successValue || r.acceptorValue),
                (r.failureType = r.failureType || r.acceptorType),
                (r.failurePath = r.failurePath || r.acceptorPath),
                (r.failureValue = r.failureValue || r.acceptorValue);
            })();
          },
        });
      },
      { "./core": 23 },
    ],
    55: [
      function (e, t, r) {
        (function (t) {
          function r(e) {
            return a.hasOwnProperty(e._asm.currentState);
          }
          var n = e("./core"),
            i = e("./state_machine"),
            s = n.util.inherit,
            o = n.util.nodeRequire("domain"),
            a = { success: 1, error: 1, complete: 1 },
            u = new i();
          (u.setupStates = function () {
            var e = function (e, t) {
              var n = this;
              (n._haltHandlersOnError = !1),
                n.emit(n._asm.currentState, function (e) {
                  if (e)
                    if (r(n)) {
                      if (!(o && n.domain instanceof o.Domain)) throw e;
                      (e.domainEmitter = n),
                        (e.domain = n.domain),
                        (e.domainThrown = !1),
                        n.domain.emit("error", e);
                    } else (n.response.error = e), t(e);
                  else t(n.response.error);
                });
            };
            this.addState("validate", "build", "error", e),
              this.addState("build", "afterBuild", "restart", e),
              this.addState("afterBuild", "sign", "restart", e),
              this.addState("sign", "send", "retry", e),
              this.addState("retry", "afterRetry", "afterRetry", e),
              this.addState("afterRetry", "sign", "error", e),
              this.addState("send", "validateResponse", "retry", e),
              this.addState(
                "validateResponse",
                "extractData",
                "extractError",
                e
              ),
              this.addState("extractError", "extractData", "retry", e),
              this.addState("extractData", "success", "retry", e),
              this.addState("restart", "build", "error", e),
              this.addState("success", "complete", "complete", e),
              this.addState("error", "complete", "complete", e),
              this.addState("complete", null, null, e);
          }),
            u.setupStates(),
            (n.Request = s({
              constructor: function (e, t, r) {
                var s = e.endpoint,
                  a = e.config.region;
                e.isGlobalEndpoint && (a = "us-east-1"),
                  (this.domain = o && o.active),
                  (this.service = e),
                  (this.operation = t),
                  (this.params = r || {}),
                  (this.httpRequest = new n.HttpRequest(s, a)),
                  (this.startTime = n.util.date.getDate()),
                  (this.response = new n.Response(this)),
                  (this._asm = new i(u.states, "validate")),
                  (this._haltHandlersOnError = !1),
                  n.SequentialExecutor.call(this),
                  (this.emit = this.emitEvent);
              },
              send: function (e) {
                return (
                  e &&
                    this.on("complete", function (t) {
                      e.call(t, t.error, t.data);
                    }),
                  this.runTo(),
                  this.response
                );
              },
              build: function (e) {
                return this.runTo("send", e);
              },
              runTo: function (e, t) {
                return this._asm.runTo(e, t, this), this;
              },
              abort: function () {
                return (
                  this.removeAllListeners("validateResponse"),
                  this.removeAllListeners("extractError"),
                  this.on("validateResponse", function (e) {
                    e.error = n.util.error(
                      new Error("Request aborted by user"),
                      { code: "RequestAbortedError", retryable: !1 }
                    );
                  }),
                  this.httpRequest.stream &&
                    (this.httpRequest.stream.abort(),
                    this.httpRequest._abortCallback
                      ? this.httpRequest._abortCallback()
                      : this.removeAllListeners("send")),
                  this
                );
              },
              eachPage: function (e) {
                function t(r) {
                  e.call(r, r.error, r.data, function (i) {
                    i !== !1 &&
                      (r.hasNextPage()
                        ? r.nextPage().on("complete", t).send()
                        : e.call(r, null, null, n.util.fn.noop));
                  });
                }
                (e = n.util.fn.makeAsync(e, 3)), this.on("complete", t).send();
              },
              eachItem: function (e) {
                function t(t, i) {
                  if (t) return e(t, null);
                  if (null === i) return e(null, null);
                  var s = r.service.paginationConfig(r.operation),
                    o = s.resultKey;
                  Array.isArray(o) && (o = o[0]);
                  var a = n.util.jamespath.query(o, i);
                  n.util.arrayEach(a, function (t) {
                    n.util.arrayEach(t, function (t) {
                      e(null, t);
                    });
                  });
                }
                var r = this;
                this.eachPage(t);
              },
              isPageable: function () {
                return this.service.paginationConfig(this.operation) ? !0 : !1;
              },
              createReadStream: function () {
                var e = n.util.nodeRequire("stream"),
                  r = this,
                  i = null;
                return (
                  2 === n.HttpClient.streamsApiVersion
                    ? ((i = new e.PassThrough()), r.send())
                    : ((i = new e.Stream()),
                      (i.readable = !0),
                      (i.sent = !1),
                      i.on("newListener", function (e) {
                        i.sent ||
                          "data" !== e ||
                          ((i.sent = !0),
                          t.nextTick(function () {
                            r.send();
                          }));
                      })),
                  this.on("httpHeaders", function (e, t, s) {
                    if (300 > e) {
                      r.removeListener(
                        "httpData",
                        n.EventListeners.Core.HTTP_DATA
                      ),
                        r.removeListener(
                          "httpError",
                          n.EventListeners.Core.HTTP_ERROR
                        ),
                        r.on("httpError", function (e) {
                          (s.error = e), (s.error.retryable = !1);
                        });
                      var o = s.httpResponse.createUnbufferedStream();
                      2 === n.HttpClient.streamsApiVersion
                        ? o.pipe(i)
                        : (o.on("data", function (e) {
                            i.emit("data", e);
                          }),
                          o.on("end", function () {
                            i.emit("end");
                          })),
                        o.on("error", function (e) {
                          i.emit("error", e);
                        });
                    }
                  }),
                  this.on("error", function (e) {
                    i.emit("error", e);
                  }),
                  i
                );
              },
              emitEvent: function (e, t, r) {
                "function" == typeof t && ((r = t), (t = null)),
                  r || (r = function () {}),
                  t || (t = this.eventParameters(e, this.response));
                var i = n.SequentialExecutor.prototype.emit;
                i.call(this, e, t, function (e) {
                  e && (this.response.error = e), r.call(this, e);
                });
              },
              eventParameters: function (e) {
                switch (e) {
                  case "restart":
                  case "validate":
                  case "sign":
                  case "build":
                  case "afterValidate":
                  case "afterBuild":
                    return [this];
                  case "error":
                    return [this.response.error, this.response];
                  default:
                    return [this.response];
                }
              },
              presign: function (e, t) {
                return (
                  t || "function" != typeof e || ((t = e), (e = null)),
                  new n.Signers.Presign().sign(this.toGet(), e, t)
                );
              },
              toUnauthenticated: function () {
                return (
                  this.removeListener(
                    "validate",
                    n.EventListeners.Core.VALIDATE_CREDENTIALS
                  ),
                  this.removeListener("sign", n.EventListeners.Core.SIGN),
                  this.toGet()
                );
              },
              toGet: function () {
                return (
                  ("query" === this.service.api.protocol ||
                    "ec2" === this.service.api.protocol) &&
                    (this.removeListener("build", this.buildAsGet),
                    this.addListener("build", this.buildAsGet)),
                  this
                );
              },
              buildAsGet: function (e) {
                (e.httpRequest.method = "GET"),
                  (e.httpRequest.path =
                    e.service.endpoint.path + "?" + e.httpRequest.body),
                  (e.httpRequest.body = ""),
                  delete e.httpRequest.headers["Content-Length"],
                  delete e.httpRequest.headers["Content-Type"];
              },
              haltHandlersOnError: function () {
                this._haltHandlersOnError = !0;
              },
            })),
            n.util.mixin(n.Request, n.SequentialExecutor);
        }.call(this, e("_process")));
      },
      { "./core": 23, "./state_machine": 80, _process: 13 },
    ],
    80: [
      function (e, t, r) {
        function n(e, t) {
          (this.currentState = t || null), (this.states = e || {});
        }
        (n.prototype.runTo = function (e, t, r, n) {
          "function" == typeof e && ((n = r), (r = t), (t = e), (e = null));
          var i = this,
            s = i.states[i.currentState];
          s.fn.call(r || i, n, function (n) {
            if (n) {
              if (!s.fail) return t ? t.call(r, n) : null;
              i.currentState = s.fail;
            } else {
              if (!s.accept) return t ? t.call(r) : null;
              i.currentState = s.accept;
            }
            return i.currentState === e
              ? t
                ? t.call(r, n)
                : null
              : void i.runTo(e, t, r, n);
          });
        }),
          (n.prototype.addState = function (e, t, r, n) {
            return (
              "function" == typeof t
                ? ((n = t), (t = null), (r = null))
                : "function" == typeof r && ((n = r), (r = null)),
              this.currentState || (this.currentState = e),
              (this.states[e] = { accept: t, fail: r, fn: n }),
              this
            );
          }),
          (t.exports = n);
      },
      {},
    ],
    46: [
      function (e, t, r) {
        var n = e("./core");
        n.ParamValidator = n.util.inherit({
          validate: function (e, t, r) {
            if (
              ((this.errors = []),
              this.validateMember(e, t || {}, r || "params"),
              !(this.errors.length > 1))
            ) {
              if (1 === this.errors.length) throw this.errors[0];
              return !0;
            }
            var i = this.errors.join("\n* ");
            if (this.errors.length > 1)
              throw (
                ((i =
                  "There were " +
                  this.errors.length +
                  " validation errors:\n* " +
                  i),
                n.util.error(new Error(i), {
                  code: "MultipleValidationErrors",
                  errors: this.errors,
                }))
              );
          },
          validateStructure: function (e, t, r) {
            this.validateType(r, t, ["object"], "structure");
            for (var n, i = 0; e.required && i < e.required.length; i++) {
              n = e.required[i];
              var s = t[n];
              (void 0 === s || null === s) &&
                this.fail(
                  "MissingRequiredParameter",
                  "Missing required key '" + n + "' in " + r
                );
            }
            for (n in t)
              if (t.hasOwnProperty(n)) {
                var o = t[n],
                  a = e.members[n];
                if (void 0 !== a) {
                  var u = [r, n].join(".");
                  this.validateMember(a, o, u);
                } else
                  this.fail(
                    "UnexpectedParameter",
                    "Unexpected key '" + n + "' found in " + r
                  );
              }
            return !0;
          },
          validateMember: function (e, t, r) {
            switch (e.type) {
              case "structure":
                return this.validateStructure(e, t, r);
              case "list":
                return this.validateList(e, t, r);
              case "map":
                return this.validateMap(e, t, r);
              default:
                return this.validateScalar(e, t, r);
            }
          },
          validateList: function (e, t, r) {
            this.validateType(r, t, [Array]);
            for (var n = 0; n < t.length; n++)
              this.validateMember(e.member, t[n], r + "[" + n + "]");
          },
          validateMap: function (e, t, r) {
            this.validateType(r, t, ["object"], "map");
            for (var n in t)
              t.hasOwnProperty(n) &&
                this.validateMember(e.value, t[n], r + "['" + n + "']");
          },
          validateScalar: function (e, t, r) {
            switch (e.type) {
              case null:
              case void 0:
              case "string":
                return this.validateType(r, t, ["string"]);
              case "base64":
              case "binary":
                return this.validatePayload(r, t);
              case "integer":
              case "float":
                return this.validateNumber(r, t);
              case "boolean":
                return this.validateType(r, t, ["boolean"]);
              case "timestamp":
                return this.validateType(
                  r,
                  t,
                  [
                    Date,
                    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/,
                    "number",
                  ],
                  "Date object, ISO-8601 string, or a UNIX timestamp"
                );
              default:
                return this.fail(
                  "UnkownType",
                  "Unhandled type " + e.type + " for " + r
                );
            }
          },
          fail: function (e, t) {
            this.errors.push(n.util.error(new Error(t), { code: e }));
          },
          validateType: function (e, t, r, i) {
            if (null !== t && void 0 !== t) {
              for (var s = !1, o = 0; o < r.length; o++) {
                if ("string" == typeof r[o]) {
                  if (typeof t === r[o]) return;
                } else if (r[o] instanceof RegExp) {
                  if ((t || "").toString().match(r[o])) return;
                } else {
                  if (t instanceof r[o]) return;
                  if (n.util.isType(t, r[o])) return;
                  i || s || (r = r.slice()), (r[o] = n.util.typeName(r[o]));
                }
                s = !0;
              }
              var a = i;
              a || (a = r.join(", ").replace(/,([^,]+)$/, ", or$1"));
              var u = a.match(/^[aeiou]/i) ? "n" : "";
              this.fail(
                "InvalidParameterType",
                "Expected " + e + " to be a" + u + " " + a
              );
            }
          },
          validateNumber: function (e, t) {
            if (null !== t && void 0 !== t) {
              if ("string" == typeof t) {
                var r = parseFloat(t);
                r.toString() === t && (t = r);
              }
              this.validateType(e, t, ["number"]);
            }
          },
          validatePayload: function (e, t) {
            if (
              null !== t &&
              void 0 !== t &&
              "string" != typeof t &&
              (!t || "number" != typeof t.byteLength)
            ) {
              if (n.util.isNode()) {
                var r = n.util.nodeRequire("stream").Stream;
                if (n.util.Buffer.isBuffer(t) || t instanceof r) return;
              }
              var i = [
                "Buffer",
                "Stream",
                "File",
                "Blob",
                "ArrayBuffer",
                "DataView",
              ];
              if (t)
                for (var s = 0; s < i.length; s++) {
                  if (n.util.isType(t, i[s])) return;
                  if (n.util.typeName(t.constructor) === i[s]) return;
                }
              this.fail(
                "InvalidParameterType",
                "Expected " +
                  e +
                  " to be a string, Buffer, Stream, Blob, or typed array object"
              );
            }
          },
        });
      },
      { "./core": 23 },
    ],
    40: [
      function (e, t, r) {
        function n(e, t) {
          (e = e || {}),
            (t = t || {}),
            (t.api = this),
            (e.metadata = e.metadata || {}),
            h(this, "isApi", !0, !1),
            h(this, "apiVersion", e.metadata.apiVersion),
            h(this, "endpointPrefix", e.metadata.endpointPrefix),
            h(this, "signingName", e.metadata.signingName),
            h(this, "globalEndpoint", e.metadata.globalEndpoint),
            h(this, "signatureVersion", e.metadata.signatureVersion),
            h(this, "jsonVersion", e.metadata.jsonVersion),
            h(this, "targetPrefix", e.metadata.targetPrefix),
            h(this, "protocol", e.metadata.protocol),
            h(this, "timestampFormat", e.metadata.timestampFormat),
            h(this, "xmlNamespaceUri", e.metadata.xmlNamespace),
            h(this, "abbreviation", e.metadata.serviceAbbreviation),
            h(this, "fullName", e.metadata.serviceFullName),
            l(this, "className", function () {
              var t =
                e.metadata.serviceAbbreviation || e.metadata.serviceFullName;
              return t
                ? ((t = t.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, "")),
                  "ElasticLoadBalancing" === t && (t = "ELB"),
                  t)
                : null;
            }),
            h(
              this,
              "operations",
              new i(
                e.operations,
                t,
                function (e, r) {
                  return new s(e, r, t);
                },
                c.string.lowerFirst
              )
            ),
            h(
              this,
              "shapes",
              new i(e.shapes, t, function (e, r) {
                return o.create(r, t);
              })
            ),
            h(
              this,
              "paginators",
              new i(e.paginators, t, function (e, r) {
                return new a(e, r, t);
              })
            ),
            h(
              this,
              "waiters",
              new i(
                e.waiters,
                t,
                function (e, r) {
                  return new u(e, r, t);
                },
                c.string.lowerFirst
              )
            ),
            t.documentation &&
              (h(this, "documentation", e.documentation),
              h(this, "documentationUrl", e.documentationUrl));
        }
        var i = e("./collection"),
          s = e("./operation"),
          o = e("./shape"),
          a = e("./paginator"),
          u = e("./resource_waiter"),
          c = e("../util"),
          h = c.property,
          l = c.memoizedProperty;
        t.exports = n;
      },
      {
        "../util": 81,
        "./collection": 41,
        "./operation": 42,
        "./paginator": 43,
        "./resource_waiter": 44,
        "./shape": 45,
      },
    ],
    44: [
      function (e, t, r) {
        function n(e, t, r) {
          function n() {
            s(this, "name", e),
              s(this, "api", r.api, !1),
              t.operation &&
                s(this, "operation", i.string.lowerFirst(t.operation));
            var n = this,
              o = {
                ignoreErrors: "ignore_errors",
                successType: "success_type",
                successValue: "success_value",
                successPath: "success_path",
                acceptorType: "acceptor_type",
                acceptorValue: "acceptor_value",
                acceptorPath: "acceptor_path",
                failureType: "failure_type",
                failureValue: "failure_value",
                failurePath: "success_path",
                interval: "interval",
                maxAttempts: "max_attempts",
              };
            Object.keys(o).forEach(function (e) {
              var r = t[o[e]];
              r && s(n, e, r);
            });
          }
          if (((r = r || {}), r.api)) {
            var o = null;
            t["extends"]
              ? (o = r.api.waiters[t["extends"]])
              : "__default__" !== e && (o = r.api.waiters.__default__),
              o && (n.prototype = o);
          }
          return new n();
        }
        var i = e("../util"),
          s = i.property;
        t.exports = n;
      },
      { "../util": 81 },
    ],
    43: [
      function (e, t, r) {
        function n(e, t) {
          i(this, "inputToken", t.input_token),
            i(this, "limitKey", t.limit_key),
            i(this, "moreResults", t.more_results),
            i(this, "outputToken", t.output_token),
            i(this, "resultKey", t.result_key);
        }
        var i = e("../util").property;
        t.exports = n;
      },
      { "../util": 81 },
    ],
    42: [
      function (e, t, r) {
        function n(e, t, r) {
          (r = r || {}),
            o(this, "name", t.name || e),
            o(this, "api", r.api, !1),
            (t.http = t.http || {}),
            o(this, "httpMethod", t.http.method || "POST"),
            o(this, "httpPath", t.http.requestUri || "/"),
            a(this, "input", function () {
              return t.input
                ? i.create(t.input, r)
                : new i.create({ type: "structure" }, r);
            }),
            a(this, "output", function () {
              return t.output
                ? i.create(t.output, r)
                : new i.create({ type: "structure" }, r);
            }),
            a(this, "errors", function () {
              var e = [];
              if (!t.errors) return null;
              for (var n = 0; n < t.errors.length; n++)
                e.push(i.create(t.errors[n], r));
              return e;
            }),
            a(this, "paginator", function () {
              return r.api.paginators[e];
            }),
            r.documentation &&
              (o(this, "documentation", t.documentation),
              o(this, "documentationUrl", t.documentationUrl));
        }
        var i = e("./shape"),
          s = e("../util"),
          o = s.property,
          a = s.memoizedProperty;
        t.exports = n;
      },
      { "../util": 81, "./shape": 45 },
    ],
    36: [
      function (e, t, r) {
        var n = e("./core"),
          i = n.util.inherit;
        (n.Endpoint = i({
          constructor: function (e, t) {
            if (
              (n.util.hideProperties(this, [
                "slashes",
                "auth",
                "hash",
                "search",
                "query",
              ]),
              "undefined" == typeof e || null === e)
            )
              throw new Error("Invalid endpoint: " + e);
            if ("string" != typeof e) return n.util.copy(e);
            if (!e.match(/^http/)) {
              var r =
                t && void 0 !== t.sslEnabled
                  ? t.sslEnabled
                  : n.config.sslEnabled;
              e = (r ? "https" : "http") + "://" + e;
            }
            n.util.update(this, n.util.urlParse(e)),
              this.port
                ? (this.port = parseInt(this.port, 10))
                : (this.port = "https:" === this.protocol ? 443 : 80);
          },
        })),
          (n.HttpRequest = i({
            constructor: function (e, t) {
              (e = new n.Endpoint(e)),
                (this.method = "POST"),
                (this.path = e.path || "/"),
                (this.headers = {}),
                (this.body = ""),
                (this.endpoint = e),
                (this.region = t),
                this.setUserAgent();
            },
            setUserAgent: function () {
              var e = n.util.isBrowser() ? "X-Amz-" : "";
              this.headers[e + "User-Agent"] = n.util.userAgent();
            },
            pathname: function () {
              return this.path.split("?", 1)[0];
            },
            search: function () {
              var e = this.path.split("?", 2)[1];
              return e
                ? ((e = n.util.queryStringParse(e)),
                  n.util.queryParamsToString(e))
                : "";
            },
          })),
          (n.HttpResponse = i({
            constructor: function () {
              (this.statusCode = void 0),
                (this.headers = {}),
                (this.body = void 0),
                (this.streaming = !1),
                (this.stream = null);
            },
            createUnbufferedStream: function () {
              return (this.streaming = !0), this.stream;
            },
          })),
          (n.HttpClient = i({})),
          (n.HttpClient.getInstance = function () {
            return (
              void 0 === this.singleton && (this.singleton = new this()),
              this.singleton
            );
          });
      },
      { "./core": 23 },
    ],
    35: [
      function (e, t, r) {
        var n = e("./core"),
          i = e("./sequential_executor");
        (n.EventListeners = { Core: {} }),
          (n.EventListeners = {
            Core: new i().addNamedListeners(function (e, t) {
              t("VALIDATE_CREDENTIALS", "validate", function (e, t) {
                return e.service.api.signatureVersion
                  ? void e.service.config.getCredentials(function (r) {
                      r &&
                        (e.response.error = n.util.error(r, {
                          code: "CredentialsError",
                          message: "Missing credentials in config",
                        })),
                        t();
                    })
                  : t();
              }),
                e("VALIDATE_REGION", "validate", function (e) {
                  e.service.config.region ||
                    e.service.isGlobalEndpoint ||
                    (e.response.error = n.util.error(new Error(), {
                      code: "ConfigError",
                      message: "Missing region in config",
                    }));
                }),
                e("VALIDATE_PARAMETERS", "validate", function (e) {
                  var t = e.service.api.operations[e.operation].input;
                  new n.ParamValidator().validate(t, e.params);
                }),
                t("COMPUTE_SHA256", "afterBuild", function (e, t) {
                  if (
                    (e.haltHandlersOnError(), !e.service.api.signatureVersion)
                  )
                    return t();
                  if (e.service.getSignerClass(e) === n.Signers.V4) {
                    var r = e.httpRequest.body || "";
                    n.util.computeSha256(r, function (r, n) {
                      r
                        ? t(r)
                        : ((e.httpRequest.headers["X-Amz-Content-Sha256"] = n),
                          t());
                    });
                  } else t();
                }),
                e("SET_CONTENT_LENGTH", "afterBuild", function (e) {
                  if (void 0 === e.httpRequest.headers["Content-Length"]) {
                    var t = n.util.string.byteLength(e.httpRequest.body);
                    e.httpRequest.headers["Content-Length"] = t;
                  }
                }),
                e("SET_HTTP_HOST", "afterBuild", function (e) {
                  e.httpRequest.headers.Host = e.httpRequest.endpoint.host;
                }),
                e("RESTART", "restart", function () {
                  var e = this.response.error;
                  e &&
                    e.retryable &&
                    ((this.httpRequest = new n.HttpRequest(
                      this.service.endpoint,
                      this.service.region
                    )),
                    this.response.retryCount < this.service.config.maxRetries
                      ? this.response.retryCount++
                      : (this.response.error = null));
                }),
                t("SIGN", "sign", function (e, t) {
                  return e.service.api.signatureVersion
                    ? void e.service.config.getCredentials(function (r, i) {
                        if (r) return (e.response.error = r), t();
                        try {
                          var s = n.util.date.getDate(),
                            o = e.service.getSignerClass(e),
                            a = new o(
                              e.httpRequest,
                              e.service.api.signingName ||
                                e.service.api.endpointPrefix
                            );
                          delete e.httpRequest.headers.Authorization,
                            delete e.httpRequest.headers.Date,
                            delete e.httpRequest.headers["X-Amz-Date"],
                            a.addAuthorization(i, s),
                            (e.signedAt = s);
                        } catch (u) {
                          e.response.error = u;
                        }
                        t();
                      })
                    : t();
                }),
                e("VALIDATE_RESPONSE", "validateResponse", function (e) {
                  this.service.successfulResponse(e, this)
                    ? ((e.data = {}), (e.error = null))
                    : ((e.data = null),
                      (e.error = n.util.error(new Error(), {
                        code: "UnknownError",
                        message: "An unknown error occurred.",
                      })));
                }),
                t("SEND", "send", function (e, t) {
                  function r(r) {
                    (e.httpResponse.stream = r),
                      r.on("headers", function (t, i) {
                        e.request.emit("httpHeaders", [t, i, e]),
                          e.httpResponse.streaming ||
                            (2 === n.HttpClient.streamsApiVersion
                              ? r.on("readable", function () {
                                  var t = r.read();
                                  null !== t &&
                                    e.request.emit("httpData", [t, e]);
                                })
                              : r.on("data", function (t) {
                                  e.request.emit("httpData", [t, e]);
                                }));
                      }),
                      r.on("end", function () {
                        e.request.emit("httpDone"), t();
                      });
                  }
                  function i(t) {
                    t.on("sendProgress", function (t) {
                      e.request.emit("httpUploadProgress", [t, e]);
                    }),
                      t.on("receiveProgress", function (t) {
                        e.request.emit("httpDownloadProgress", [t, e]);
                      });
                  }
                  function s(r) {
                    (e.error = n.util.error(r, {
                      code: "NetworkingError",
                      region: e.request.httpRequest.region,
                      hostname: e.request.httpRequest.endpoint.hostname,
                      retryable: !0,
                    })),
                      e.request.emit("httpError", [e.error, e], function () {
                        t();
                      });
                  }
                  function o() {
                    var t = n.HttpClient.getInstance(),
                      o = e.request.service.config.httpOptions || {};
                    try {
                      var a = t.handleRequest(e.request.httpRequest, o, r, s);
                      i(a);
                    } catch (u) {
                      s(u);
                    }
                  }
                  (e.httpResponse._abortCallback = t),
                    (e.error = null),
                    (e.data = null);
                  var a = (n.util.date.getDate() - this.signedAt) / 1e3;
                  a >= 600
                    ? this.emit("sign", [this], function (e) {
                        e ? t(e) : o();
                      })
                    : o();
                }),
                e("HTTP_HEADERS", "httpHeaders", function (e, t, r) {
                  (r.httpResponse.statusCode = e),
                    (r.httpResponse.headers = t),
                    (r.httpResponse.body = new n.util.Buffer("")),
                    (r.httpResponse.buffers = []),
                    (r.httpResponse.numBytes = 0);
                  var i = t.date || t.Date;
                  if (i) {
                    var s = Date.parse(i);
                    r.request.service.config.correctClockSkew &&
                      n.util.isClockSkewed(s) &&
                      n.util.applyClockOffset(s);
                  }
                }),
                e("HTTP_DATA", "httpData", function (e, t) {
                  if (e) {
                    if (n.util.isNode()) {
                      t.httpResponse.numBytes += e.length;
                      var r = t.httpResponse.headers["content-length"],
                        i = { loaded: t.httpResponse.numBytes, total: r };
                      t.request.emit("httpDownloadProgress", [i, t]);
                    }
                    t.httpResponse.buffers.push(new n.util.Buffer(e));
                  }
                }),
                e("HTTP_DONE", "httpDone", function (e) {
                  if (
                    e.httpResponse.buffers &&
                    e.httpResponse.buffers.length > 0
                  ) {
                    var t = n.util.buffer.concat(e.httpResponse.buffers);
                    e.httpResponse.body = t;
                  }
                  delete e.httpResponse.numBytes, delete e.httpResponse.buffers;
                }),
                e("FINALIZE_ERROR", "retry", function (e) {
                  e.httpResponse.statusCode &&
                    ((e.error.statusCode = e.httpResponse.statusCode),
                    void 0 === e.error.retryable &&
                      (e.error.retryable = this.service.retryableError(
                        e.error,
                        this
                      )));
                }),
                e("INVALIDATE_CREDENTIALS", "retry", function (e) {
                  if (e.error)
                    switch (e.error.code) {
                      case "RequestExpired":
                      case "ExpiredTokenException":
                      case "ExpiredToken":
                        (e.error.retryable = !0),
                          (e.request.service.config.credentials.expired = !0);
                    }
                }),
                e("EXPIRED_SIGNATURE", "retry", function (e) {
                  var t = e.error;
                  t &&
                    "string" == typeof t.code &&
                    "string" == typeof t.message &&
                    t.code.match(/Signature/) &&
                    t.message.match(/expired/) &&
                    (e.error.retryable = !0);
                }),
                e("CLOCK_SKEWED", "retry", function (e) {
                  e.error &&
                    this.service.clockSkewError(e.error) &&
                    this.service.config.correctClockSkew &&
                    n.config.isClockSkewed &&
                    (e.error.retryable = !0);
                }),
                e("REDIRECT", "retry", function (e) {
                  e.error &&
                    e.error.statusCode >= 300 &&
                    e.error.statusCode < 400 &&
                    e.httpResponse.headers.location &&
                    ((this.httpRequest.endpoint = new n.Endpoint(
                      e.httpResponse.headers.location
                    )),
                    (this.httpRequest.headers.Host = this.httpRequest.endpoint.host),
                    (e.error.redirect = !0),
                    (e.error.retryable = !0));
                }),
                e("RETRY_CHECK", "retry", function (e) {
                  if (e.error)
                    if (e.error.redirect && e.redirectCount < e.maxRedirects)
                      e.error.retryDelay = 0;
                    else if (e.retryCount < e.maxRetries) {
                      var t = this.service.retryDelays();
                      e.error.retryDelay = t[e.retryCount] || 0;
                    }
                }),
                t("RESET_RETRY_STATE", "afterRetry", function (e, t) {
                  var r,
                    n = !1;
                  e.error &&
                    ((r = e.error.retryDelay || 0),
                    e.error.retryable && e.retryCount < e.maxRetries
                      ? (e.retryCount++, (n = !0))
                      : e.error.redirect &&
                        e.redirectCount < e.maxRedirects &&
                        (e.redirectCount++, (n = !0))),
                    n ? ((e.error = null), setTimeout(t, r)) : t();
                });
            }),
            CorePost: new i().addNamedListeners(function (e) {
              e("EXTRACT_REQUEST_ID", "extractData", function (e) {
                e.requestId ||
                  (e.requestId =
                    e.httpResponse.headers["x-amz-request-id"] ||
                    e.httpResponse.headers["x-amzn-requestid"]),
                  !e.requestId &&
                    e.data &&
                    e.data.ResponseMetadata &&
                    (e.requestId = e.data.ResponseMetadata.RequestId);
              }),
                e("ENOTFOUND_ERROR", "httpError", function (e) {
                  if ("NetworkingError" === e.code && "ENOTFOUND" === e.errno) {
                    var t =
                      "Inaccessible host: `" +
                      e.hostname +
                      "'. This service may not be available in the `" +
                      e.region +
                      "' region.";
                    this.response.error = n.util.error(new Error(t), {
                      code: "UnknownEndpoint",
                      region: e.region,
                      hostname: e.hostname,
                      retryable: !0,
                      originalError: e,
                    });
                  }
                });
            }),
            Logger: new i().addNamedListeners(function (t) {
              t("LOG_REQUEST", "complete", function (t) {
                function r() {
                  var r = n.util.date.getDate().getTime(),
                    o = (r - i.startTime.getTime()) / 1e3,
                    a = s.isTTY ? !0 : !1,
                    u = t.httpResponse.statusCode,
                    c = e("util").inspect(i.params, !0, null),
                    h = "";
                  return (
                    a && (h += "[33m"),
                    (h += "[AWS " + i.service.serviceIdentifier + " " + u),
                    (h +=
                      " " + o.toString() + "s " + t.retryCount + " retries]"),
                    a && (h += "[0;1m"),
                    (h += " " + n.util.string.lowerFirst(i.operation)),
                    (h += "(" + c + ")"),
                    a && (h += "[0m"),
                    h
                  );
                }
                var i = t.request,
                  s = i.service.config.logger;
                if (s) {
                  var o = r();
                  "function" == typeof s.log
                    ? s.log(o)
                    : "function" == typeof s.write && s.write(o + "\n");
                }
              });
            }),
            Json: new i().addNamedListeners(function (t) {
              var r = e("./protocol/json");
              t("BUILD", "build", r.buildRequest),
                t("EXTRACT_DATA", "extractData", r.extractData),
                t("EXTRACT_ERROR", "extractError", r.extractError);
            }),
            Rest: new i().addNamedListeners(function (t) {
              var r = e("./protocol/rest");
              t("BUILD", "build", r.buildRequest),
                t("EXTRACT_DATA", "extractData", r.extractData),
                t("EXTRACT_ERROR", "extractError", r.extractError);
            }),
            RestJson: new i().addNamedListeners(function (t) {
              var r = e("./protocol/rest_json");
              t("BUILD", "build", r.buildRequest),
                t("EXTRACT_DATA", "extractData", r.extractData),
                t("EXTRACT_ERROR", "extractError", r.extractError);
            }),
            RestXml: new i().addNamedListeners(function (t) {
              var r = e("./protocol/rest_xml");
              t("BUILD", "build", r.buildRequest),
                t("EXTRACT_DATA", "extractData", r.extractData),
                t("EXTRACT_ERROR", "extractError", r.extractError);
            }),
            Query: new i().addNamedListeners(function (t) {
              var r = e("./protocol/query");
              t("BUILD", "build", r.buildRequest),
                t("EXTRACT_DATA", "extractData", r.extractData),
                t("EXTRACT_ERROR", "extractError", r.extractError);
            }),
          });
      },
      {
        "./core": 23,
        "./protocol/json": 47,
        "./protocol/query": 48,
        "./protocol/rest": 49,
        "./protocol/rest_json": 50,
        "./protocol/rest_xml": 51,
        "./sequential_executor": 59,
        util: 20,
      },
    ],
    59: [
      function (e, t, r) {
        var n = e("./core");
        (n.SequentialExecutor = n.util.inherit({
          constructor: function () {
            this._events = {};
          },
          listeners: function (e) {
            return this._events[e] ? this._events[e].slice(0) : [];
          },
          on: function (e, t) {
            return (
              this._events[e]
                ? this._events[e].push(t)
                : (this._events[e] = [t]),
              this
            );
          },
          onAsync: function (e, t) {
            return (t._isAsync = !0), this.on(e, t);
          },
          removeListener: function (e, t) {
            var r = this._events[e];
            if (r) {
              for (var n = r.length, i = -1, s = 0; n > s; ++s)
                r[s] === t && (i = s);
              i > -1 && r.splice(i, 1);
            }
            return this;
          },
          removeAllListeners: function (e) {
            return e ? delete this._events[e] : (this._events = {}), this;
          },
          emit: function (e, t, r) {
            r || (r = function () {});
            var n = this.listeners(e),
              i = n.length;
            return this.callListeners(n, t, r), i > 0;
          },
          callListeners: function (e, t, r, i) {
            function s(i) {
              return i &&
                ((a = n.util.error(a || new Error(), i)),
                o._haltHandlersOnError)
                ? r.call(o, a)
                : void o.callListeners(e, t, r, a);
            }
            for (var o = this, a = i || null; e.length > 0; ) {
              var u = e.shift();
              if (u._isAsync) return void u.apply(o, t.concat([s]));
              try {
                u.apply(o, t);
              } catch (c) {
                a = n.util.error(a || new Error(), c);
              }
              if (a && o._haltHandlersOnError) return void r.call(o, a);
            }
            r.call(o, a);
          },
          addListeners: function (e) {
            var t = this;
            return (
              e._events && (e = e._events),
              n.util.each(e, function (e, r) {
                "function" == typeof r && (r = [r]),
                  n.util.arrayEach(r, function (r) {
                    t.on(e, r);
                  });
              }),
              t
            );
          },
          addNamedListener: function (e, t, r) {
            return (this[e] = r), this.addListener(t, r), this;
          },
          addNamedAsyncListener: function (e, t, r) {
            return (r._isAsync = !0), this.addNamedListener(e, t, r);
          },
          addNamedListeners: function (e) {
            var t = this;
            return (
              e(
                function () {
                  t.addNamedListener.apply(t, arguments);
                },
                function () {
                  t.addNamedAsyncListener.apply(t, arguments);
                }
              ),
              this
            );
          },
        })),
          (n.SequentialExecutor.prototype.addListener =
            n.SequentialExecutor.prototype.on),
          (t.exports = n.SequentialExecutor);
      },
      { "./core": 23 },
    ],
    51: [
      function (e, t, r) {
        function n(e) {
          var t = e.service.api.operations[e.operation].input,
            r = new a.XML.Builder(),
            n = e.params,
            i = t.payload;
          if (i) {
            var s = t.members[i];
            if (((n = n[i]), void 0 === n)) return;
            if ("structure" === s.type) {
              var o = s.name;
              e.httpRequest.body = r.toXML(n, s, o, !0);
            } else e.httpRequest.body = n;
          } else
            e.httpRequest.body = r.toXML(
              n,
              t,
              t.name || t.shape || u.string.upperFirst(e.operation) + "Request"
            );
        }
        function i(e) {
          c.buildRequest(e),
            ["GET", "HEAD"].indexOf(e.httpRequest.method) < 0 && n(e);
        }
        function s(e) {
          c.extractError(e);
          var t = new a.XML.Parser().parse(e.httpResponse.body.toString());
          t.Errors && (t = t.Errors),
            t.Error && (t = t.Error),
            t.Code
              ? (e.error = u.error(new Error(), {
                  code: t.Code,
                  message: t.Message,
                }))
              : (e.error = u.error(new Error(), {
                  code: e.httpResponse.statusCode,
                  message: null,
                }));
        }
        function o(e) {
          c.extractData(e);
          var t,
            r = e.request,
            n = e.httpResponse.body,
            i = r.service.api.operations[r.operation],
            s = i.output,
            o = s.payload;
          if (o) {
            var h = s.members[o];
            h.isStreaming
              ? (e.data[o] = n)
              : "structure" === h.type
              ? ((t = new a.XML.Parser()),
                (e.data[o] = t.parse(n.toString(), h)))
              : (e.data[o] = n.toString());
          } else if (n.length > 0) {
            t = new a.XML.Parser();
            var l = t.parse(n.toString(), s);
            u.update(e.data, l);
          }
        }
        var a = e("../core"),
          u = e("../util"),
          c = e("./rest");
        t.exports = { buildRequest: i, extractError: s, extractData: o };
      },
      { "../core": 23, "../util": 81, "./rest": 49 },
    ],
    50: [
      function (e, t, r) {
        function n(e) {
          var t = new h(),
            r = e.service.api.operations[e.operation].input;
          if (r.payload) {
            var n = {},
              i = r.members[r.payload];
            if (((n = e.params[r.payload]), void 0 === n)) return;
            "structure" === i.type
              ? (e.httpRequest.body = t.build(n, i))
              : (e.httpRequest.body = n);
          } else e.httpRequest.body = t.build(e.params, r);
        }
        function i(e) {
          u.buildRequest(e),
            ["GET", "HEAD", "DELETE"].indexOf(e.httpRequest.method) < 0 && n(e);
        }
        function s(e) {
          c.extractError(e);
        }
        function o(e) {
          u.extractData(e);
          var t = e.request,
            r = t.service.api.operations[t.operation].output || {};
          if (r.payload) {
            var n = r.members[r.payload],
              i = e.httpResponse.body;
            if (n.isStreaming) e.data[r.payload] = i;
            else if ("structure" === n.type) {
              var s = new l();
              e.data[r.payload] = s.parse(i, n);
            } else e.data[r.payload] = i.toString();
          } else {
            var o = e.data;
            c.extractData(e), (e.data = a.merge(o, e.data));
          }
        }
        var a = e("../util"),
          u = e("./rest"),
          c = e("./json"),
          h = e("../json/builder"),
          l = e("../json/parser");
        t.exports = { buildRequest: i, extractError: s, extractData: o };
      },
      {
        "../json/builder": 38,
        "../json/parser": 39,
        "../util": 81,
        "./json": 47,
        "./rest": 49,
      },
    ],
    49: [
      function (e, t, r) {
        function n(e) {
          e.httpRequest.method =
            e.service.api.operations[e.operation].httpMethod;
        }
        function i(e) {
          var t = e.service.api.operations[e.operation],
            r = t.input,
            n = [e.httpRequest.endpoint.path, t.httpPath].join("/");
          n = n.replace(/\/+/g, "/");
          var i = {},
            s = !1;
          if (
            (c.each(r.members, function (t, r) {
              var o = e.params[t];
              if (null !== o && void 0 !== o)
                if ("uri" === r.location) {
                  var a = new RegExp("\\{" + r.name + "(\\+)?\\}");
                  n = n.replace(a, function (e, t) {
                    var r = t ? c.uriEscapePath : c.uriEscape;
                    return r(String(o));
                  });
                } else
                  "querystring" === r.location &&
                    ((s = !0),
                    "list" === r.type
                      ? (i[r.name] = o.map(function (e) {
                          return c.uriEscape(String(e));
                        }))
                      : (i[r.name] = c.uriEscape(String(o))));
            }),
            s)
          ) {
            n += n.indexOf("?") >= 0 ? "&" : "?";
            var o = [];
            c.arrayEach(Object.keys(i).sort(), function (e) {
              Array.isArray(i[e]) || (i[e] = [i[e]]);
              for (var t = 0; t < i[e].length; t++)
                o.push(c.uriEscape(String(e)) + "=" + i[e][t]);
            }),
              (n += o.join("&"));
          }
          e.httpRequest.path = n;
        }
        function s(e) {
          var t = e.service.api.operations[e.operation];
          c.each(t.input.members, function (t, r) {
            var n = e.params[t];
            null !== n &&
              void 0 !== n &&
              ("headers" === r.location && "map" === r.type
                ? c.each(n, function (t, n) {
                    e.httpRequest.headers[r.name + t] = n;
                  })
                : "header" === r.location &&
                  ((n = r.toWireFormat(n).toString()),
                  (e.httpRequest.headers[r.name] = n)));
          });
        }
        function o(e) {
          n(e), i(e), s(e);
        }
        function a() {}
        function u(e) {
          var t = e.request,
            r = {},
            n = e.httpResponse,
            i = t.service.api.operations[t.operation],
            s = i.output,
            o = {};
          c.each(n.headers, function (e, t) {
            o[e.toLowerCase()] = t;
          }),
            c.each(s.members, function (e, t) {
              var i = (t.name || e).toLowerCase();
              if ("headers" === t.location && "map" === t.type) {
                r[e] = {};
                var s = t.isLocationName ? t.name : "",
                  a = new RegExp("^" + s + "(.+)", "i");
                c.each(n.headers, function (t, n) {
                  var i = t.match(a);
                  null !== i && (r[e][i[1]] = n);
                });
              } else
                "header" === t.location
                  ? void 0 !== o[i] && (r[e] = o[i])
                  : "statusCode" === t.location &&
                    (r[e] = parseInt(n.statusCode, 10));
            }),
            (e.data = r);
        }
        var c = e("../util");
        t.exports = { buildRequest: o, extractError: a, extractData: u };
      },
      { "../util": 81 },
    ],
    48: [
      function (e, t, r) {
        function n(e) {
          var t = e.service.api.operations[e.operation],
            r = e.httpRequest;
          (r.headers["Content-Type"] =
            "application/x-www-form-urlencoded; charset=utf-8"),
            (r.params = { Version: e.service.api.apiVersion, Action: t.name });
          var n = new u();
          n.serialize(e.params, t.input, function (e, t) {
            r.params[e] = t;
          }),
            (r.body = a.queryParamsToString(r.params));
        }
        function i(e) {
          var t,
            r = e.httpResponse.body.toString();
          (t = r.match("<UnknownOperationException")
            ? {
                Code: "UnknownOperation",
                Message: "Unknown operation " + e.request.operation,
              }
            : new o.XML.Parser().parse(r)),
            t.requestId && !e.requestId && (e.requestId = t.requestId),
            t.Errors && (t = t.Errors),
            t.Error && (t = t.Error),
            t.Code
              ? (e.error = a.error(new Error(), {
                  code: t.Code,
                  message: t.Message,
                }))
              : (e.error = a.error(new Error(), {
                  code: e.httpResponse.statusCode,
                  message: null,
                }));
        }
        function s(e) {
          var t = e.request,
            r = t.service.api.operations[t.operation],
            n = r.output || {},
            i = n;
          if (i.resultWrapper) {
            var s = c.create({ type: "structure" });
            (s.members[i.resultWrapper] = n),
              (s.memberNames = [i.resultWrapper]),
              a.property(n, "name", n.resultWrapper),
              (n = s);
          }
          var u = new o.XML.Parser();
          if (n && n.members && !n.members._XAMZRequestId) {
            var h = c.create(
              { type: "string" },
              { api: { protocol: "query" } },
              "requestId"
            );
            n.members._XAMZRequestId = h;
          }
          var l = u.parse(e.httpResponse.body.toString(), n);
          (e.requestId = l._XAMZRequestId || l.requestId),
            l._XAMZRequestId && delete l._XAMZRequestId,
            i.resultWrapper &&
              l[i.resultWrapper] &&
              (a.update(l, l[i.resultWrapper]), delete l[i.resultWrapper]),
            (e.data = l);
        }
        var o = e("../core"),
          a = e("../util"),
          u = e("../query/query_param_serializer"),
          c = e("../model/shape");
        t.exports = { buildRequest: n, extractError: i, extractData: s };
      },
      {
        "../core": 23,
        "../model/shape": 45,
        "../query/query_param_serializer": 52,
        "../util": 81,
      },
    ],
    52: [
      function (e, t, r) {
        function n() {}
        function i(e) {
          return e.isQueryName || "ec2" !== e.api.protocol
            ? e.name
            : e.name[0].toUpperCase() + e.name.substr(1);
        }
        function s(e, t, r, n) {
          c.each(r.members, function (r, s) {
            var o = t[r];
            if (null !== o && void 0 !== o) {
              var a = i(s);
              (a = e ? e + "." + a : a), u(a, o, s, n);
            }
          });
        }
        function o(e, t, r, n) {
          var i = 1;
          c.each(t, function (t, s) {
            var o = r.flattened ? "." : ".entry.",
              a = o + i++ + ".",
              c = a + (r.key.name || "key"),
              h = a + (r.value.name || "value");
            u(e + c, t, r.key, n), u(e + h, s, r.value, n);
          });
        }
        function a(e, t, r, n) {
          var s = r.member || {};
          return 0 === t.length
            ? void n.call(this, e, null)
            : void c.arrayEach(t, function (t, o) {
                var a = "." + (o + 1);
                if ("ec2" === r.api.protocol) a += "";
                else if (r.flattened) {
                  if (s.name) {
                    var c = e.split(".");
                    c.pop(), c.push(i(s)), (e = c.join("."));
                  }
                } else a = ".member" + a;
                u(e + a, t, s, n);
              });
        }
        function u(e, t, r, n) {
          null !== t &&
            void 0 !== t &&
            ("structure" === r.type
              ? s(e, t, r, n)
              : "list" === r.type
              ? a(e, t, r, n)
              : "map" === r.type
              ? o(e, t, r, n)
              : n(e, r.toWireFormat(t).toString()));
        }
        var c = e("../util");
        (n.prototype.serialize = function (e, t, r) {
          s("", e, t, r);
        }),
          (t.exports = n);
      },
      { "../util": 81 },
    ],
    45: [
      function (e, t, r) {
        function n(e, t, r) {
          null !== r && void 0 !== r && y.property.apply(this, arguments);
        }
        function i(e, t) {
          e.constructor.prototype[t] ||
            y.memoizedProperty.apply(this, arguments);
        }
        function s(e, t, r) {
          (t = t || {}),
            n(this, "shape", e.shape),
            n(this, "api", t.api, !1),
            n(this, "type", e.type),
            n(this, "location", e.location || this.location || "body"),
            n(
              this,
              "name",
              this.name || e.xmlName || e.queryName || e.locationName || r
            ),
            n(this, "isStreaming", e.streaming || this.isStreaming || !1),
            n(this, "isComposite", e.isComposite || !1),
            n(this, "isShape", !0, !1),
            n(this, "isQueryName", e.queryName ? !0 : !1, !1),
            n(this, "isLocationName", e.locationName ? !0 : !1, !1),
            t.documentation &&
              (n(this, "documentation", e.documentation),
              n(this, "documentationUrl", e.documentationUrl)),
            e.xmlAttribute && n(this, "isXmlAttribute", e.xmlAttribute || !1),
            n(this, "defaultValue", null),
            (this.toWireFormat = function (e) {
              return null === e || void 0 === e ? "" : e;
            }),
            (this.toType = function (e) {
              return e;
            });
        }
        function o(e) {
          s.apply(this, arguments),
            n(this, "isComposite", !0),
            e.flattened && n(this, "flattened", e.flattened || !1);
        }
        function a(e, t) {
          var r = null,
            a = !this.isShape;
          o.apply(this, arguments),
            a &&
              (n(this, "defaultValue", function () {
                return {};
              }),
              n(this, "members", {}),
              n(this, "memberNames", []),
              n(this, "required", []),
              n(this, "isRequired", function () {
                return !1;
              })),
            e.members &&
              (n(
                this,
                "members",
                new v(e.members, t, function (e, r) {
                  return s.create(r, t, e);
                })
              ),
              i(this, "memberNames", function () {
                return e.xmlOrder || Object.keys(e.members);
              })),
            e.required &&
              (n(this, "required", e.required),
              n(
                this,
                "isRequired",
                function (t) {
                  if (!r) {
                    r = {};
                    for (var n = 0; n < e.required.length; n++)
                      r[e.required[n]] = !0;
                  }
                  return r[t];
                },
                !1,
                !0
              )),
            n(this, "resultWrapper", e.resultWrapper || null),
            e.payload && n(this, "payload", e.payload),
            "string" == typeof e.xmlNamespace
              ? n(this, "xmlNamespaceUri", e.xmlNamespace)
              : "object" == typeof e.xmlNamespace &&
                (n(this, "xmlNamespacePrefix", e.xmlNamespace.prefix),
                n(this, "xmlNamespaceUri", e.xmlNamespace.uri));
        }
        function u(e, t) {
          var r = this,
            a = !this.isShape;
          if (
            (o.apply(this, arguments),
            a &&
              n(this, "defaultValue", function () {
                return [];
              }),
            e.member &&
              i(this, "member", function () {
                return s.create(e.member, t);
              }),
            this.flattened)
          ) {
            var u = this.name;
            i(this, "name", function () {
              return r.member.name || u;
            });
          }
        }
        function c(e, t) {
          var r = !this.isShape;
          o.apply(this, arguments),
            r &&
              (n(this, "defaultValue", function () {
                return {};
              }),
              n(this, "key", s.create({ type: "string" }, t)),
              n(this, "value", s.create({ type: "string" }, t))),
            e.key &&
              i(this, "key", function () {
                return s.create(e.key, t);
              }),
            e.value &&
              i(this, "value", function () {
                return s.create(e.value, t);
              });
        }
        function h(e) {
          var t = this;
          if ((s.apply(this, arguments), "header" === this.location))
            n(this, "timestampFormat", "rfc822");
          else if (e.timestampFormat)
            n(this, "timestampFormat", e.timestampFormat);
          else if (this.api)
            if (this.api.timestampFormat)
              n(this, "timestampFormat", this.api.timestampFormat);
            else
              switch (this.api.protocol) {
                case "json":
                case "rest-json":
                  n(this, "timestampFormat", "unixTimestamp");
                  break;
                case "rest-xml":
                case "query":
                case "ec2":
                  n(this, "timestampFormat", "iso8601");
              }
          (this.toType = function (e) {
            return null === e || void 0 === e
              ? null
              : "function" == typeof e.toUTCString
              ? e
              : "string" == typeof e || "number" == typeof e
              ? y.date.parseTimestamp(e)
              : null;
          }),
            (this.toWireFormat = function (e) {
              return y.date.format(e, t.timestampFormat);
            });
        }
        function l() {
          if ((s.apply(this, arguments), this.api))
            switch (this.api.protocol) {
              case "rest-xml":
              case "query":
              case "ec2":
                this.toType = function (e) {
                  return e || "";
                };
            }
        }
        function p() {
          s.apply(this, arguments),
            (this.toType = function (e) {
              return null === e || void 0 === e ? null : parseFloat(e);
            }),
            (this.toWireFormat = this.toType);
        }
        function f() {
          s.apply(this, arguments),
            (this.toType = function (e) {
              return null === e || void 0 === e ? null : parseInt(e, 10);
            }),
            (this.toWireFormat = this.toType);
        }
        function d() {
          s.apply(this, arguments),
            (this.toType = y.base64.decode),
            (this.toWireFormat = y.base64.encode);
        }
        function m() {
          d.apply(this, arguments);
        }
        function g() {
          s.apply(this, arguments),
            (this.toType = function (e) {
              return "boolean" == typeof e
                ? e
                : null === e || void 0 === e
                ? null
                : "true" === e;
            });
        }
        var v = e("./collection"),
          y = e("../util");
        (s.normalizedTypes = {
          character: "string",
          double: "float",
          long: "integer",
          short: "integer",
          biginteger: "integer",
          bigdecimal: "float",
          blob: "binary",
        }),
          (s.types = {
            structure: a,
            list: u,
            map: c,
            boolean: g,
            timestamp: h,
            float: p,
            integer: f,
            string: l,
            base64: m,
            binary: d,
          }),
          (s.resolve = function (e, t) {
            if (e.shape) {
              var r = t.api.shapes[e.shape];
              if (!r)
                throw new Error("Cannot find shape reference: " + e.shape);
              return r;
            }
            return null;
          }),
          (s.create = function (e, t, r) {
            if (e.isShape) return e;
            var n = s.resolve(e, t);
            if (n) {
              var i = Object.keys(e);
              if (
                (t.documentation ||
                  (i = i.filter(function (e) {
                    return !e.match(/documentation/);
                  })),
                i === ["shape"])
              )
                return n;
              var o = function () {
                n.constructor.call(this, e, t, r);
              };
              return (o.prototype = n), new o();
            }
            e.type ||
              (e.members
                ? (e.type = "structure")
                : e.member
                ? (e.type = "list")
                : e.key
                ? (e.type = "map")
                : (e.type = "string"));
            var a = e.type;
            if (
              (s.normalizedTypes[e.type] &&
                (e.type = s.normalizedTypes[e.type]),
              s.types[e.type])
            )
              return new s.types[e.type](e, t, r);
            throw new Error("Unrecognized shape type: " + a);
          }),
          (s.shapes = {
            StructureShape: a,
            ListShape: u,
            MapShape: c,
            StringShape: l,
            BooleanShape: g,
            Base64Shape: m,
          }),
          (t.exports = s);
      },
      { "../util": 81, "./collection": 41 },
    ],
    41: [
      function (e, t, r) {
        function n(e, t, r, n) {
          s(this, n(e), function () {
            return r(e, t);
          });
        }
        function i(e, t, r, i) {
          i = i || String;
          var s = this;
          for (var o in e) e.hasOwnProperty(o) && n.call(s, o, e[o], r, i);
        }
        var s = e("../util").memoizedProperty;
        t.exports = i;
      },
      { "../util": 81 },
    ],
    47: [
      function (e, t, r) {
        function n(e) {
          var t = e.httpRequest,
            r = e.service.api,
            n = r.targetPrefix + "." + r.operations[e.operation].name,
            i = r.jsonVersion || "1.0",
            s = r.operations[e.operation].input,
            o = new a();
          1 === i && (i = "1.0"),
            (t.body = o.build(e.params || {}, s)),
            (t.headers["Content-Type"] = "application/x-amz-json-" + i),
            (t.headers["X-Amz-Target"] = n);
        }
        function i(e) {
          var t = {},
            r = e.httpResponse;
          if (
            ((t.code = r.headers["x-amzn-errortype"] || "UnknownError"),
            "string" == typeof t.code && (t.code = t.code.split(":")[0]),
            r.body.length > 0)
          ) {
            var n = JSON.parse(r.body.toString());
            (n.__type || n.code) &&
              (t.code = (n.__type || n.code).split("#").pop()),
              "RequestEntityTooLarge" === t.code
                ? (t.message = "Request body must be less than 1 MB")
                : (t.message = n.message || n.Message || null);
          } else
            (t.statusCode = r.statusCode),
              (t.message = r.statusCode.toString());
          e.error = o.error(new Error(), t);
        }
        function s(e) {
          var t = e.httpResponse.body.toString() || "{}";
          if (e.request.service.config.convertResponseTypes === !1)
            e.data = JSON.parse(t);
          else {
            var r = e.request.service.api.operations[e.request.operation],
              n = r.output || {},
              i = new u();
            e.data = i.parse(t, n);
          }
        }
        var o = e("../util"),
          a = e("../json/builder"),
          u = e("../json/parser");
        t.exports = { buildRequest: n, extractError: i, extractData: s };
      },
      { "../json/builder": 38, "../json/parser": 39, "../util": 81 },
    ],
    39: [
      function (e, t, r) {
        function n() {}
        function i(e, t) {
          if (!t || void 0 === e) return void 0;
          switch (t.type) {
            case "structure":
              return s(e, t);
            case "map":
              return a(e, t);
            case "list":
              return o(e, t);
            default:
              return u(e, t);
          }
        }
        function s(e, t) {
          if (null == e) return void 0;
          var r = {};
          return (
            c.each(e, function (e, n) {
              var s = t.members[e];
              if (s) {
                var o = i(n, s);
                void 0 !== o && (r[e] = o);
              }
            }),
            r
          );
        }
        function o(e, t) {
          if (null == e) return void 0;
          var r = [];
          return (
            c.arrayEach(e, function (e) {
              var n = i(e, t.member);
              void 0 === n ? r.push(null) : r.push(n);
            }),
            r
          );
        }
        function a(e, t) {
          if (null == e) return void 0;
          var r = {};
          return (
            c.each(e, function (e, n) {
              var s = i(n, t.value);
              void 0 === s ? (r[e] = null) : (r[e] = s);
            }),
            r
          );
        }
        function u(e, t) {
          return t.toType(e);
        }
        var c = e("../util");
        (n.prototype.parse = function (e, t) {
          return i(JSON.parse(e), t);
        }),
          (t.exports = n);
      },
      { "../util": 81 },
    ],
    38: [
      function (e, t, r) {
        function n() {}
        function i(e, t) {
          if (!t || void 0 === e || null === e) return void 0;
          switch (t.type) {
            case "structure":
              return s(e, t);
            case "map":
              return a(e, t);
            case "list":
              return o(e, t);
            default:
              return u(e, t);
          }
        }
        function s(e, t) {
          var r = {};
          return (
            c.each(e, function (e, n) {
              var s = t.members[e];
              if (s) {
                if ("body" !== s.location) return;
                var o = i(n, s);
                void 0 !== o && (r[e] = o);
              }
            }),
            r
          );
        }
        function o(e, t) {
          var r = [];
          return (
            c.arrayEach(e, function (e) {
              var n = i(e, t.member);
              void 0 !== n && r.push(n);
            }),
            r
          );
        }
        function a(e, t) {
          var r = {};
          return (
            c.each(e, function (e, n) {
              var s = i(n, t.value);
              void 0 !== s && (r[e] = s);
            }),
            r
          );
        }
        function u(e, t) {
          return t.toWireFormat(e);
        }
        var c = e("../util");
        (n.prototype.build = function (e, t) {
          return JSON.stringify(i(e, t));
        }),
          (t.exports = n);
      },
      { "../util": 81 },
    ],
    81: [
      function (e, t, r) {
        (function (r) {
          var n,
            i = e("crypto"),
            s = e("buffer").Buffer,
            o = {
              engine: function () {
                return o.isBrowser() && "undefined" != typeof navigator
                  ? navigator.userAgent
                  : r.platform + "/" + r.version;
              },
              userAgent: function () {
                var t = o.isBrowser() ? "js" : "nodejs",
                  r = "aws-sdk-" + t + "/" + e("./core").VERSION;
                return "nodejs" === t && (r += " " + o.engine()), r;
              },
              isBrowser: function () {
                return r && r.browser;
              },
              isNode: function () {
                return !o.isBrowser();
              },
              nodeRequire: function (t) {
                return o.isNode() ? e(t) : void 0;
              },
              multiRequire: function (t, r) {
                return e(o.isNode() ? t : r);
              },
              uriEscape: function (e) {
                var t = encodeURIComponent(e);
                return (
                  (t = t.replace(/[^A-Za-z0-9_.~\-%]+/g, escape)),
                  (t = t.replace(/[*]/g, function (e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                  }))
                );
              },
              uriEscapePath: function (e) {
                var t = [];
                return (
                  o.arrayEach(e.split("/"), function (e) {
                    t.push(o.uriEscape(e));
                  }),
                  t.join("/")
                );
              },
              urlParse: function (t) {
                return e("url").parse(t);
              },
              urlFormat: function (t) {
                return e("url").format(t);
              },
              queryStringParse: function (t) {
                return e("querystring").parse(t);
              },
              queryParamsToString: function (e) {
                var t = [],
                  r = o.uriEscape,
                  n = Object.keys(e).sort();
                return (
                  o.arrayEach(n, function (n) {
                    var i = e[n],
                      s = r(n),
                      a = s + "=";
                    if (Array.isArray(i)) {
                      var u = [];
                      o.arrayEach(i, function (e) {
                        u.push(r(e));
                      }),
                        (a = s + "=" + u.sort().join("&" + s + "="));
                    } else void 0 !== i && null !== i && (a = s + "=" + r(i));
                    t.push(a);
                  }),
                  t.join("&")
                );
              },
              readFileSync: function (e) {
                return "undefined" != typeof window
                  ? null
                  : o.nodeRequire("fs").readFileSync(e, "utf-8");
              },
              base64: {
                encode: function (e) {
                  return new s(e).toString("base64");
                },
                decode: function (e) {
                  return new s(e, "base64");
                },
              },
              Buffer: s,
              buffer: {
                toStream: function (e) {
                  o.Buffer.isBuffer(e) || (e = new o.Buffer(e));
                  var t = new (o.nodeRequire("stream").Readable)(),
                    r = 0;
                  return (
                    (t._read = function (n) {
                      if (r >= e.length) return t.push(null);
                      var i = r + n;
                      i > e.length && (i = e.length),
                        t.push(e.slice(r, i)),
                        (r = i);
                    }),
                    t
                  );
                },
                concat: function (e) {
                  var t,
                    r = 0,
                    n = 0,
                    i = null;
                  for (t = 0; t < e.length; t++) r += e[t].length;
                  for (i = new s(r), t = 0; t < e.length; t++)
                    e[t].copy(i, n), (n += e[t].length);
                  return i;
                },
              },
              string: {
                byteLength: function (e) {
                  if (null === e || void 0 === e) return 0;
                  if (
                    ("string" == typeof e && (e = new s(e)),
                    "number" == typeof e.byteLength)
                  )
                    return e.byteLength;
                  if ("number" == typeof e.length) return e.length;
                  if ("number" == typeof e.size) return e.size;
                  if ("string" == typeof e.path)
                    return o.nodeRequire("fs").lstatSync(e.path).size;
                  throw o.error(new Error("Cannot determine length of " + e), {
                    object: e,
                  });
                },
                upperFirst: function (e) {
                  return e[0].toUpperCase() + e.substr(1);
                },
                lowerFirst: function (e) {
                  return e[0].toLowerCase() + e.substr(1);
                },
              },
              ini: {
                parse: function (e) {
                  var t,
                    r = {};
                  return (
                    o.arrayEach(e.split(/\r?\n/), function (e) {
                      e = e.split(/(^|\s);/)[0];
                      var n = e.match(/^\s*\[([^\[\]]+)\]\s*$/);
                      if (n) t = n[1];
                      else if (t) {
                        var i = e.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
                        i && ((r[t] = r[t] || {}), (r[t][i[1]] = i[2]));
                      }
                    }),
                    r
                  );
                },
              },
              fn: {
                noop: function () {},
                makeAsync: function (e, t) {
                  return t && t <= e.length
                    ? e
                    : function () {
                        var t = Array.prototype.slice.call(arguments, 0),
                          r = t.pop(),
                          n = e.apply(null, t);
                        r(n);
                      };
                },
              },
              jamespath: {
                query: function (e, t) {
                  if (!t) return [];
                  var r = [],
                    n = e.split(/\s+\|\|\s+/);
                  return (
                    o.arrayEach.call(this, n, function (e) {
                      var n = [t],
                        i = e.split(".");
                      return (
                        o.arrayEach.call(this, i, function (e) {
                          var t = e.match("^(.+?)(?:\\[(-?\\d+|\\*|)\\])?$"),
                            r = [];
                          return (
                            o.arrayEach.call(this, n, function (e) {
                              "*" === t[1]
                                ? o.arrayEach.call(this, e, function (e) {
                                    r.push(e);
                                  })
                                : e.hasOwnProperty(t[1]) && r.push(e[t[1]]);
                            }),
                            (n = r),
                            void 0 !== t[2] &&
                              ((r = []),
                              o.arrayEach.call(this, n, function (e) {
                                if (Array.isArray(e))
                                  if ("*" === t[2] || "" === t[2])
                                    r = r.concat(e);
                                  else {
                                    var n = parseInt(t[2], 10);
                                    0 > n && (n = e.length + n), r.push(e[n]);
                                  }
                              }),
                              (n = r)),
                            0 === n.length ? o.abort : void 0
                          );
                        }),
                        n.length > 0 ? ((r = n), o.abort) : void 0
                      );
                    }),
                    r
                  );
                },
                find: function (e, t) {
                  return o.jamespath.query(e, t)[0];
                },
              },
              date: {
                getDate: function () {
                  return (
                    n || (n = e("./core")),
                    n.config.systemClockOffset
                      ? new Date(
                          new Date().getTime() + n.config.systemClockOffset
                        )
                      : new Date()
                  );
                },
                iso8601: function (e) {
                  return (
                    void 0 === e && (e = o.date.getDate()),
                    e.toISOString().replace(/\.\d{3}Z$/, "Z")
                  );
                },
                rfc822: function (e) {
                  return (
                    void 0 === e && (e = o.date.getDate()), e.toUTCString()
                  );
                },
                unixTimestamp: function (e) {
                  return (
                    void 0 === e && (e = o.date.getDate()), e.getTime() / 1e3
                  );
                },
                from: function (e) {
                  return "number" == typeof e ? new Date(1e3 * e) : new Date(e);
                },
                format: function (e, t) {
                  return t || (t = "iso8601"), o.date[t](o.date.from(e));
                },
                parseTimestamp: function (e) {
                  if ("number" == typeof e) return new Date(1e3 * e);
                  if (e.match(/^\d+$/)) return new Date(1e3 * e);
                  if (e.match(/^\d{4}/)) return new Date(e);
                  if (e.match(/^\w{3},/)) return new Date(e);
                  throw o.error(new Error("unhandled timestamp format: " + e), {
                    code: "TimestampParserError",
                  });
                },
              },
              crypto: {
                crc32Table: [
                  0,
                  1996959894,
                  3993919788,
                  2567524794,
                  124634137,
                  1886057615,
                  3915621685,
                  2657392035,
                  249268274,
                  2044508324,
                  3772115230,
                  2547177864,
                  162941995,
                  2125561021,
                  3887607047,
                  2428444049,
                  498536548,
                  1789927666,
                  4089016648,
                  2227061214,
                  450548861,
                  1843258603,
                  4107580753,
                  2211677639,
                  325883990,
                  1684777152,
                  4251122042,
                  2321926636,
                  335633487,
                  1661365465,
                  4195302755,
                  2366115317,
                  997073096,
                  1281953886,
                  3579855332,
                  2724688242,
                  1006888145,
                  1258607687,
                  3524101629,
                  2768942443,
                  901097722,
                  1119000684,
                  3686517206,
                  2898065728,
                  853044451,
                  1172266101,
                  3705015759,
                  2882616665,
                  651767980,
                  1373503546,
                  3369554304,
                  3218104598,
                  565507253,
                  1454621731,
                  3485111705,
                  3099436303,
                  671266974,
                  1594198024,
                  3322730930,
                  2970347812,
                  795835527,
                  1483230225,
                  3244367275,
                  3060149565,
                  1994146192,
                  31158534,
                  2563907772,
                  4023717930,
                  1907459465,
                  112637215,
                  2680153253,
                  3904427059,
                  2013776290,
                  251722036,
                  2517215374,
                  3775830040,
                  2137656763,
                  141376813,
                  2439277719,
                  3865271297,
                  1802195444,
                  476864866,
                  2238001368,
                  4066508878,
                  1812370925,
                  453092731,
                  2181625025,
                  4111451223,
                  1706088902,
                  314042704,
                  2344532202,
                  4240017532,
                  1658658271,
                  366619977,
                  2362670323,
                  4224994405,
                  1303535960,
                  984961486,
                  2747007092,
                  3569037538,
                  1256170817,
                  1037604311,
                  2765210733,
                  3554079995,
                  1131014506,
                  879679996,
                  2909243462,
                  3663771856,
                  1141124467,
                  855842277,
                  2852801631,
                  3708648649,
                  1342533948,
                  654459306,
                  3188396048,
                  3373015174,
                  1466479909,
                  544179635,
                  3110523913,
                  3462522015,
                  1591671054,
                  702138776,
                  2966460450,
                  3352799412,
                  1504918807,
                  783551873,
                  3082640443,
                  3233442989,
                  3988292384,
                  2596254646,
                  62317068,
                  1957810842,
                  3939845945,
                  2647816111,
                  81470997,
                  1943803523,
                  3814918930,
                  2489596804,
                  225274430,
                  2053790376,
                  3826175755,
                  2466906013,
                  167816743,
                  2097651377,
                  4027552580,
                  2265490386,
                  503444072,
                  1762050814,
                  4150417245,
                  2154129355,
                  426522225,
                  1852507879,
                  4275313526,
                  2312317920,
                  282753626,
                  1742555852,
                  4189708143,
                  2394877945,
                  397917763,
                  1622183637,
                  3604390888,
                  2714866558,
                  953729732,
                  1340076626,
                  3518719985,
                  2797360999,
                  1068828381,
                  1219638859,
                  3624741850,
                  2936675148,
                  906185462,
                  1090812512,
                  3747672003,
                  2825379669,
                  829329135,
                  1181335161,
                  3412177804,
                  3160834842,
                  628085408,
                  1382605366,
                  3423369109,
                  3138078467,
                  570562233,
                  1426400815,
                  3317316542,
                  2998733608,
                  733239954,
                  1555261956,
                  3268935591,
                  3050360625,
                  752459403,
                  1541320221,
                  2607071920,
                  3965973030,
                  1969922972,
                  40735498,
                  2617837225,
                  3943577151,
                  1913087877,
                  83908371,
                  2512341634,
                  3803740692,
                  2075208622,
                  213261112,
                  2463272603,
                  3855990285,
                  2094854071,
                  198958881,
                  2262029012,
                  4057260610,
                  1759359992,
                  534414190,
                  2176718541,
                  4139329115,
                  1873836001,
                  414664567,
                  2282248934,
                  4279200368,
                  1711684554,
                  285281116,
                  2405801727,
                  4167216745,
                  1634467795,
                  376229701,
                  2685067896,
                  3608007406,
                  1308918612,
                  956543938,
                  2808555105,
                  3495958263,
                  1231636301,
                  1047427035,
                  2932959818,
                  3654703836,
                  1088359270,
                  936918e3,
                  2847714899,
                  3736837829,
                  1202900863,
                  817233897,
                  3183342108,
                  3401237130,
                  1404277552,
                  615818150,
                  3134207493,
                  3453421203,
                  1423857449,
                  601450431,
                  3009837614,
                  3294710456,
                  1567103746,
                  711928724,
                  3020668471,
                  3272380065,
                  1510334235,
                  755167117,
                ],
                crc32: function (e) {
                  var t = o.crypto.crc32Table,
                    r = -1;
                  "string" == typeof e && (e = new s(e));
                  for (var n = 0; n < e.length; n++) {
                    var i = e.readUInt8(n);
                    r = (r >>> 8) ^ t[255 & (r ^ i)];
                  }
                  return (-1 ^ r) >>> 0;
                },
                hmac: function (e, t, r, n) {
                  return (
                    r || (r = "binary"),
                    "buffer" === r && (r = void 0),
                    n || (n = "sha256"),
                    "string" == typeof t && (t = new s(t)),
                    i.createHmac(n, e).update(t).digest(r)
                  );
                },
                md5: function (e, t, r) {
                  return o.crypto.hash("md5", e, t, r);
                },
                sha256: function (e, t, r) {
                  return o.crypto.hash("sha256", e, t, r);
                },
                hash: function (e, t, r, n) {
                  var i = o.crypto.createHash(e);
                  r || (r = "binary"),
                    "buffer" === r && (r = void 0),
                    "string" == typeof t && (t = new s(t));
                  var a = o.arraySliceFn(t),
                    u = s.isBuffer(t);
                  if (
                    n &&
                    "object" == typeof t &&
                    "function" == typeof t.on &&
                    !u
                  )
                    t.on("data", function (e) {
                      i.update(e);
                    }),
                      t.on("error", function (e) {
                        n(e);
                      }),
                      t.on("end", function () {
                        n(null, i.digest(r));
                      });
                  else {
                    if (!n || !a || u || "undefined" == typeof FileReader) {
                      o.isBrowser() &&
                        "object" == typeof t &&
                        !u &&
                        (t = new s(new Uint8Array(t)));
                      var c = i.update(t).digest(r);
                      return n && n(null, c), c;
                    }
                    var h = 0,
                      l = 524288,
                      p = new FileReader();
                    (p.onerror = function () {
                      n(new Error("Failed to read data."));
                    }),
                      (p.onload = function () {
                        var e = new s(new Uint8Array(p.result));
                        i.update(e), (h += e.length), p._continueReading();
                      }),
                      (p._continueReading = function () {
                        if (h >= t.size) return void n(null, i.digest(r));
                        var e = h + l;
                        e > t.size && (e = t.size),
                          p.readAsArrayBuffer(a.call(t, h, e));
                      }),
                      p._continueReading();
                  }
                },
                toHex: function (e) {
                  for (var t = [], r = 0; r < e.length; r++)
                    t.push(("0" + e.charCodeAt(r).toString(16)).substr(-2, 2));
                  return t.join("");
                },
                createHash: function (e) {
                  return i.createHash(e);
                },
              },
              abort: {},
              each: function (e, t) {
                for (var r in e)
                  if (e.hasOwnProperty(r)) {
                    var n = t.call(this, r, e[r]);
                    if (n === o.abort) break;
                  }
              },
              arrayEach: function (e, t) {
                for (var r in e)
                  if (e.hasOwnProperty(r)) {
                    var n = t.call(this, e[r], parseInt(r, 10));
                    if (n === o.abort) break;
                  }
              },
              update: function (e, t) {
                return (
                  o.each(t, function (t, r) {
                    e[t] = r;
                  }),
                  e
                );
              },
              merge: function (e, t) {
                return o.update(o.copy(e), t);
              },
              copy: function (e) {
                if (null === e || void 0 === e) return e;
                var t = {};
                for (var r in e) t[r] = e[r];
                return t;
              },
              isEmpty: function (e) {
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0;
              },
              arraySliceFn: function (e) {
                var t = e.slice || e.webkitSlice || e.mozSlice;
                return "function" == typeof t ? t : null;
              },
              isType: function (e, t) {
                return (
                  "function" == typeof t && (t = o.typeName(t)),
                  Object.prototype.toString.call(e) === "[object " + t + "]"
                );
              },
              typeName: function (e) {
                if (e.hasOwnProperty("name")) return e.name;
                var t = e.toString(),
                  r = t.match(/^\s*function (.+)\(/);
                return r ? r[1] : t;
              },
              error: function (e, t) {
                var r = null;
                return (
                  "string" == typeof e.message &&
                    "" !== e.message &&
                    ("string" == typeof t || (t && t.message)) &&
                    ((r = o.copy(e)), (r.message = e.message)),
                  (e.message = e.message || null),
                  "string" == typeof t
                    ? (e.message = t)
                    : "object" == typeof t &&
                      null !== t &&
                      (o.update(e, t),
                      t.message && (e.message = t.message),
                      (t.code || t.name) && (e.code = t.code || t.name),
                      t.stack && (e.stack = t.stack)),
                  "function" == typeof Object.defineProperty &&
                    (Object.defineProperty(e, "name", {
                      writable: !0,
                      enumerable: !1,
                    }),
                    Object.defineProperty(e, "message", { enumerable: !0 })),
                  (e.name = (t && t.name) || e.name || e.code || "Error"),
                  (e.time = new Date()),
                  r && (e.originalError = r),
                  e
                );
              },
              inherit: function (e, t) {
                var r = null;
                if (void 0 === t) (t = e), (e = Object), (r = {});
                else {
                  var n = function () {};
                  (n.prototype = e.prototype), (r = new n());
                }
                return (
                  t.constructor === Object &&
                    (t.constructor = function () {
                      return e !== Object ? e.apply(this, arguments) : void 0;
                    }),
                  (t.constructor.prototype = r),
                  o.update(t.constructor.prototype, t),
                  (t.constructor.__super__ = e),
                  t.constructor
                );
              },
              mixin: function () {
                for (var e = arguments[0], t = 1; t < arguments.length; t++)
                  for (var r in arguments[t].prototype) {
                    var n = arguments[t].prototype[r];
                    "constructor" !== r && (e.prototype[r] = n);
                  }
                return e;
              },
              hideProperties: function (e, t) {
                "function" == typeof Object.defineProperty &&
                  o.arrayEach(t, function (t) {
                    Object.defineProperty(e, t, {
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    });
                  });
              },
              property: function (e, t, r, n, i) {
                var s = { configurable: !0, enumerable: void 0 !== n ? n : !0 };
                "function" != typeof r || i
                  ? ((s.value = r), (s.writable = !0))
                  : (s.get = r),
                  Object.defineProperty(e, t, s);
              },
              memoizedProperty: function (e, t, r, n) {
                var i = null;
                o.property(
                  e,
                  t,
                  function () {
                    return null === i && (i = r()), i;
                  },
                  n
                );
              },
              hoistPayloadMember: function (e) {
                var t = e.request,
                  r = t.operation,
                  n = t.service.api.operations[r].output;
                if (n.payload) {
                  var i = n.members[n.payload],
                    s = e.data[n.payload];
                  "structure" === i.type &&
                    o.each(s, function (t, r) {
                      o.property(e.data, t, r, !1);
                    });
                }
              },
              computeSha256: function (e, t) {
                if (o.isNode()) {
                  var r = o.nodeRequire("stream").Stream,
                    n = o.nodeRequire("fs");
                  if (e instanceof r) {
                    if ("string" != typeof e.path)
                      return t(
                        new Error(
                          "Non-file stream objects are not supported with SigV4"
                        )
                      );
                    e = n.createReadStream(e.path);
                  }
                }
                o.crypto.sha256(e, "hex", function (e, r) {
                  e ? t(e) : t(null, r);
                });
              },
              isClockSkewed: function (e) {
                return e
                  ? (o.property(
                      n.config,
                      "isClockSkewed",
                      Math.abs(new Date().getTime() - e) >= 3e5,
                      !1
                    ),
                    n.config.isClockSkewed)
                  : void 0;
              },
              applyClockOffset: function (e) {
                e && (n.config.systemClockOffset = e - new Date().getTime());
              },
            };
          t.exports = o;
        }.call(this, e("_process")));
      },
      {
        "./core": 23,
        _process: 13,
        buffer: 1,
        crypto: 6,
        querystring: 17,
        url: 18,
      },
    ],
    29: [
      function (e, t, r) {
        var n = e("../core");
        n.WebIdentityCredentials = n.util.inherit(n.Credentials, {
          constructor: function (e) {
            n.Credentials.call(this),
              (this.expired = !0),
              (this.params = e),
              (this.params.RoleSessionName =
                this.params.RoleSessionName || "web-identity"),
              (this.data = null);
          },
          refresh: function (e) {
            var t = this;
            t.createClients(),
              e ||
                (e = function (e) {
                  if (e) throw e;
                }),
              t.service.assumeRoleWithWebIdentity(function (r, n) {
                (t.data = null),
                  r || ((t.data = n), t.service.credentialsFrom(n, t)),
                  e(r);
              });
          },
          createClients: function () {
            this.service = this.service || new n.STS({ params: this.params });
          },
        });
      },
      { "../core": 23 },
    ],
    28: [
      function (e, t, r) {
        var n = e("../core");
        n.TemporaryCredentials = n.util.inherit(n.Credentials, {
          constructor: function (e) {
            n.Credentials.call(this),
              this.loadMasterCredentials(),
              (this.expired = !0),
              (this.params = e || {}),
              this.params.RoleArn &&
                (this.params.RoleSessionName =
                  this.params.RoleSessionName || "temporary-credentials");
          },
          refresh: function (e) {
            var t = this;
            t.createClients(),
              e ||
                (e = function (e) {
                  if (e) throw e;
                }),
              (t.service.config.credentials = t.masterCredentials);
            var r = t.params.RoleArn
              ? t.service.assumeRole
              : t.service.getSessionToken;
            r.call(t.service, function (r, n) {
              r || t.service.credentialsFrom(n, t), e(r);
            });
          },
          loadMasterCredentials: function () {
            for (
              this.masterCredentials = n.config.credentials;
              this.masterCredentials.masterCredentials;

            )
              this.masterCredentials = this.masterCredentials.masterCredentials;
          },
          createClients: function () {
            this.service = this.service || new n.STS({ params: this.params });
          },
        });
      },
      { "../core": 23 },
    ],
    27: [
      function (e, t, r) {
        var n = e("../core");
        n.SAMLCredentials = n.util.inherit(n.Credentials, {
          constructor: function (e) {
            n.Credentials.call(this), (this.expired = !0), (this.params = e);
          },
          refresh: function (e) {
            var t = this;
            t.createClients(),
              e ||
                (e = function (e) {
                  if (e) throw e;
                }),
              t.service.assumeRoleWithSAML(function (r, n) {
                r || t.service.credentialsFrom(n, t), e(r);
              });
          },
          createClients: function () {
            this.service = this.service || new n.STS({ params: this.params });
          },
        });
      },
      { "../core": 23 },
    ],
    25: [
      function (e, t, r) {
        var n = e("../core");
        n.CognitoIdentityCredentials = n.util.inherit(n.Credentials, {
          localStorageKey: {
            id: "aws.cognito.identity-id.",
            providers: "aws.cognito.identity-providers.",
          },
          constructor: function (e) {
            n.Credentials.call(this),
              (this.expired = !0),
              (this.params = e),
              (this.data = null),
              (this.identityId = null),
              this.loadCachedId();
          },
          refresh: function (e) {
            var t = this;
            t.createClients(),
              (t.data = null),
              (t.identityId = null),
              t.getId(function (r) {
                r
                  ? (t.clearCachedId(), e(r))
                  : t.params.RoleArn
                  ? t.getCredentialsFromSTS(e)
                  : t.getCredentialsForIdentity(e);
              });
          },
          clearCachedId: function () {
            (this.identityId = null), delete this.params.IdentityId;
            var e = this.params.IdentityPoolId;
            delete this.storage[this.localStorageKey.id + e],
              delete this.storage[this.localStorageKey.providers + e];
          },
          getId: function (e) {
            var t = this;
            return "string" == typeof t.params.IdentityId
              ? e(null, t.params.IdentityId)
              : void t.cognito.getId(function (r, n) {
                  !r && n.IdentityId
                    ? ((t.params.IdentityId = n.IdentityId),
                      e(null, n.IdentityId))
                    : e(r);
                });
          },
          loadCredentials: function (e, t) {
            e &&
              t &&
              ((t.expired = !1),
              (t.accessKeyId = e.Credentials.AccessKeyId),
              (t.secretAccessKey = e.Credentials.SecretKey),
              (t.sessionToken = e.Credentials.SessionToken),
              (t.expireTime = e.Credentials.Expiration));
          },
          getCredentialsForIdentity: function (e) {
            var t = this;
            t.cognito.getCredentialsForIdentity(function (r, n) {
              r
                ? t.clearCachedId()
                : (t.cacheId(n), (t.data = n), t.loadCredentials(t.data, t)),
                e(r);
            });
          },
          getCredentialsFromSTS: function (e) {
            var t = this;
            t.cognito.getOpenIdToken(function (r, n) {
              r
                ? (t.clearCachedId(), e(r))
                : (t.cacheId(n),
                  (t.params.WebIdentityToken = n.Token),
                  t.webIdentityCredentials.refresh(function (r) {
                    r
                      ? t.clearCachedId()
                      : ((t.data = t.webIdentityCredentials.data),
                        t.sts.credentialsFrom(t.data, t)),
                      e(r);
                  }));
            });
          },
          loadCachedId: function () {
            var e = this;
            if (n.util.isBrowser() && !e.params.IdentityId) {
              var t = e.getStorage("id");
              if (t && e.params.Logins) {
                var r = Object.keys(e.params.Logins),
                  i = (e.getStorage("providers") || "").split(","),
                  s = i.filter(function (e) {
                    return -1 !== r.indexOf(e);
                  });
                0 !== s.length && (e.params.IdentityId = t);
              } else t && (e.params.IdentityId = t);
            }
          },
          createClients: function () {
            (this.webIdentityCredentials =
              this.webIdentityCredentials ||
              new n.WebIdentityCredentials(this.params)),
              (this.cognito =
                this.cognito || new n.CognitoIdentity({ params: this.params })),
              (this.sts = this.sts || new n.STS());
          },
          cacheId: function (e) {
            (this.identityId = e.IdentityId),
              (this.params.IdentityId = this.identityId),
              n.util.isBrowser() &&
                (this.setStorage("id", e.IdentityId),
                this.params.Logins &&
                  this.setStorage(
                    "providers",
                    Object.keys(this.params.Logins).join(",")
                  ));
          },
          getStorage: function (e) {
            return this.storage[
              this.localStorageKey[e] + this.params.IdentityPoolId
            ];
          },
          setStorage: function (e, t) {
            try {
              this.storage[
                this.localStorageKey[e] + this.params.IdentityPoolId
              ] = t;
            } catch (r) {}
          },
          storage: (function () {
            try {
              return n.util.isBrowser() &&
                null !== window.localStorage &&
                "object" == typeof window.localStorage
                ? window.localStorage
                : {};
            } catch (e) {
              return {};
            }
          })(),
        });
      },
      { "../core": 23 },
    ],
    22: [
      function (e, t, r) {
        var n = e("./core");
        e("./credentials"),
          e("./credentials/credential_provider_chain"),
          (n.Config = n.util.inherit({
            constructor: function (e) {
              void 0 === e && (e = {}),
                (e = this.extractCredentials(e)),
                n.util.each.call(this, this.keys, function (t, r) {
                  this.set(t, e[t], r);
                });
            },
            getCredentials: function (e) {
              function t(t) {
                e(t, t ? null : o.credentials);
              }
              function r(e, t) {
                return new n.util.error(t || new Error(), {
                  code: "CredentialsError",
                  message: e,
                });
              }
              function i() {
                o.credentials.get(function (e) {
                  if (e) {
                    var n =
                      "Could not load credentials from " +
                      o.credentials.constructor.name;
                    e = r(n, e);
                  }
                  t(e);
                });
              }
              function s() {
                var e = null;
                (o.credentials.accessKeyId && o.credentials.secretAccessKey) ||
                  (e = r("Missing credentials")),
                  t(e);
              }
              var o = this;
              o.credentials
                ? "function" == typeof o.credentials.get
                  ? i()
                  : s()
                : o.credentialProvider
                ? o.credentialProvider.resolve(function (e, n) {
                    e &&
                      (e = r(
                        "Could not load credentials from any providers",
                        e
                      )),
                      (o.credentials = n),
                      t(e);
                  })
                : t(r("No credentials to load"));
            },
            update: function (e, t) {
              (t = t || !1),
                (e = this.extractCredentials(e)),
                n.util.each.call(this, e, function (e, r) {
                  (t ||
                    this.keys.hasOwnProperty(e) ||
                    n.Service.hasService(e)) &&
                    this.set(e, r);
                });
            },
            loadFromPath: function (e) {
              this.clear();
              var t = JSON.parse(n.util.readFileSync(e)),
                r = new n.FileSystemCredentials(e),
                i = new n.CredentialProviderChain();
              return (
                i.providers.unshift(r),
                i.resolve(function (e, r) {
                  if (e) throw e;
                  t.credentials = r;
                }),
                this.constructor(t),
                this
              );
            },
            clear: function () {
              n.util.each.call(this, this.keys, function (e) {
                delete this[e];
              }),
                this.set("credentials", void 0),
                this.set("credentialProvider", void 0);
            },
            set: function (e, t, r) {
              void 0 === t
                ? (void 0 === r && (r = this.keys[e]),
                  "function" == typeof r
                    ? (this[e] = r.call(this))
                    : (this[e] = r))
                : "httpOptions" === e && this[e]
                ? (this[e] = n.util.merge(this[e], t))
                : (this[e] = t);
            },
            keys: {
              credentials: null,
              credentialProvider: null,
              region: null,
              logger: null,
              apiVersions: {},
              apiVersion: null,
              endpoint: void 0,
              httpOptions: { timeout: 12e4 },
              maxRetries: void 0,
              maxRedirects: 10,
              paramValidation: !0,
              sslEnabled: !0,
              s3ForcePathStyle: !1,
              s3BucketEndpoint: !1,
              computeChecksums: !0,
              convertResponseTypes: !0,
              correctClockSkew: !1,
              dynamoDbCrc32: !0,
              systemClockOffset: 0,
              signatureVersion: null,
            },
            extractCredentials: function (e) {
              return (
                e.accessKeyId &&
                  e.secretAccessKey &&
                  ((e = n.util.copy(e)),
                  (e.credentials = new n.Credentials(e))),
                e
              );
            },
          })),
          (n.config = new n.Config());
      },
      {
        "./core": 23,
        "./credentials": 24,
        "./credentials/credential_provider_chain": 26,
      },
    ],
    26: [
      function (e, t, r) {
        var n = e("../core");
        (n.CredentialProviderChain = n.util.inherit(n.Credentials, {
          constructor: function (e) {
            e
              ? (this.providers = e)
              : (this.providers = n.CredentialProviderChain.defaultProviders.slice(
                  0
                ));
          },
          resolve: function (e) {
            function t(i, s) {
              if ((!i && s) || r === n.length) return void e(i, s);
              var o = n[r++];
              (s = "function" == typeof o ? o.call() : o),
                s.get
                  ? s.get(function (e) {
                      t(e, e ? null : s);
                    })
                  : t(null, s);
            }
            if (0 === this.providers.length)
              return e(new Error("No providers")), this;
            var r = 0,
              n = this.providers.slice(0);
            return t(), this;
          },
        })),
          (n.CredentialProviderChain.defaultProviders = []);
      },
      { "../core": 23 },
    ],
    24: [
      function (e, t, r) {
        var n = e("./core");
        n.Credentials = n.util.inherit({
          constructor: function () {
            if (
              (n.util.hideProperties(this, ["secretAccessKey"]),
              (this.expired = !1),
              (this.expireTime = null),
              1 === arguments.length && "object" == typeof arguments[0])
            ) {
              var e = arguments[0].credentials || arguments[0];
              (this.accessKeyId = e.accessKeyId),
                (this.secretAccessKey = e.secretAccessKey),
                (this.sessionToken = e.sessionToken);
            } else
              (this.accessKeyId = arguments[0]),
                (this.secretAccessKey = arguments[1]),
                (this.sessionToken = arguments[2]);
          },
          expiryWindow: 15,
          needsRefresh: function () {
            var e = n.util.date.getDate().getTime(),
              t = new Date(e + 1e3 * this.expiryWindow);
            return this.expireTime && t > this.expireTime
              ? !0
              : this.expired || !this.accessKeyId || !this.secretAccessKey;
          },
          get: function (e) {
            var t = this;
            this.needsRefresh()
              ? this.refresh(function (r) {
                  r || (t.expired = !1), e && e(r);
                })
              : e && e();
          },
          refresh: function (e) {
            (this.expired = !1), e();
          },
        });
      },
      { "./core": 23 },
    ],
    20: [
      function (e, t, r) {
        (function (t, n) {
          function i(e, t) {
            var n = { seen: [], stylize: o };
            return (
              arguments.length >= 3 && (n.depth = arguments[2]),
              arguments.length >= 4 && (n.colors = arguments[3]),
              m(t) ? (n.showHidden = t) : t && r._extend(n, t),
              E(n.showHidden) && (n.showHidden = !1),
              E(n.depth) && (n.depth = 2),
              E(n.colors) && (n.colors = !1),
              E(n.customInspect) && (n.customInspect = !0),
              n.colors && (n.stylize = s),
              u(n, e, n.depth)
            );
          }
          function s(e, t) {
            var r = i.styles[t];
            return r
              ? "[" + i.colors[r][0] + "m" + e + "[" + i.colors[r][1] + "m"
              : e;
          }
          function o(e, t) {
            return e;
          }
          function a(e) {
            var t = {};
            return (
              e.forEach(function (e, r) {
                t[e] = !0;
              }),
              t
            );
          }
          function u(e, t, n) {
            if (
              e.customInspect &&
              t &&
              C(t.inspect) &&
              t.inspect !== r.inspect &&
              (!t.constructor || t.constructor.prototype !== t)
            ) {
              var i = t.inspect(n, e);
              return w(i) || (i = u(e, i, n)), i;
            }
            var s = c(e, t);
            if (s) return s;
            var o = Object.keys(t),
              m = a(o);
            if (
              (e.showHidden && (o = Object.getOwnPropertyNames(t)),
              A(t) &&
                (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
            )
              return h(t);
            if (0 === o.length) {
              if (C(t)) {
                var g = t.name ? ": " + t.name : "";
                return e.stylize("[Function" + g + "]", "special");
              }
              if (S(t))
                return e.stylize(RegExp.prototype.toString.call(t), "regexp");
              if (x(t))
                return e.stylize(Date.prototype.toString.call(t), "date");
              if (A(t)) return h(t);
            }
            var v = "",
              y = !1,
              b = ["{", "}"];
            if ((d(t) && ((y = !0), (b = ["[", "]"])), C(t))) {
              var E = t.name ? ": " + t.name : "";
              v = " [Function" + E + "]";
            }
            if (
              (S(t) && (v = " " + RegExp.prototype.toString.call(t)),
              x(t) && (v = " " + Date.prototype.toUTCString.call(t)),
              A(t) && (v = " " + h(t)),
              0 === o.length && (!y || 0 == t.length))
            )
              return b[0] + v + b[1];
            if (0 > n)
              return S(t)
                ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
                : e.stylize("[Object]", "special");
            e.seen.push(t);
            var R;
            return (
              (R = y
                ? l(e, t, n, m, o)
                : o.map(function (r) {
                    return p(e, t, n, m, r, y);
                  })),
              e.seen.pop(),
              f(R, v, b)
            );
          }
          function c(e, t) {
            if (E(t)) return e.stylize("undefined", "undefined");
            if (w(t)) {
              var r =
                "'" +
                JSON.stringify(t)
                  .replace(/^"|"$/g, "")
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return e.stylize(r, "string");
            }
            return y(t)
              ? e.stylize("" + t, "number")
              : m(t)
              ? e.stylize("" + t, "boolean")
              : g(t)
              ? e.stylize("null", "null")
              : void 0;
          }
          function h(e) {
            return "[" + Error.prototype.toString.call(e) + "]";
          }
          function l(e, t, r, n, i) {
            for (var s = [], o = 0, a = t.length; a > o; ++o)
              L(t, String(o))
                ? s.push(p(e, t, r, n, String(o), !0))
                : s.push("");
            return (
              i.forEach(function (i) {
                i.match(/^\d+$/) || s.push(p(e, t, r, n, i, !0));
              }),
              s
            );
          }
          function p(e, t, r, n, i, s) {
            var o, a, c;
            if (
              ((c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }),
              c.get
                ? (a = c.set
                    ? e.stylize("[Getter/Setter]", "special")
                    : e.stylize("[Getter]", "special"))
                : c.set && (a = e.stylize("[Setter]", "special")),
              L(n, i) || (o = "[" + i + "]"),
              a ||
                (e.seen.indexOf(c.value) < 0
                  ? ((a = g(r) ? u(e, c.value, null) : u(e, c.value, r - 1)),
                    a.indexOf("\n") > -1 &&
                      (a = s
                        ? a
                            .split("\n")
                            .map(function (e) {
                              return "  " + e;
                            })
                            .join("\n")
                            .substr(2)
                        : "\n" +
                          a
                            .split("\n")
                            .map(function (e) {
                              return "   " + e;
                            })
                            .join("\n")))
                  : (a = e.stylize("[Circular]", "special"))),
              E(o))
            ) {
              if (s && i.match(/^\d+$/)) return a;
              (o = JSON.stringify("" + i)),
                o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                  ? ((o = o.substr(1, o.length - 2)),
                    (o = e.stylize(o, "name")))
                  : ((o = o
                      .replace(/'/g, "\\'")
                      .replace(/\\"/g, '"')
                      .replace(/(^"|"$)/g, "'")),
                    (o = e.stylize(o, "string")));
            }
            return o + ": " + a;
          }
          function f(e, t, r) {
            var n = 0,
              i = e.reduce(function (e, t) {
                return (
                  n++,
                  t.indexOf("\n") >= 0 && n++,
                  e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                );
              }, 0);
            return i > 60
              ? r[0] +
                  ("" === t ? "" : t + "\n ") +
                  " " +
                  e.join(",\n  ") +
                  " " +
                  r[1]
              : r[0] + t + " " + e.join(", ") + " " + r[1];
          }
          function d(e) {
            return Array.isArray(e);
          }
          function m(e) {
            return "boolean" == typeof e;
          }
          function g(e) {
            return null === e;
          }
          function v(e) {
            return null == e;
          }
          function y(e) {
            return "number" == typeof e;
          }
          function w(e) {
            return "string" == typeof e;
          }
          function b(e) {
            return "symbol" == typeof e;
          }
          function E(e) {
            return void 0 === e;
          }
          function S(e) {
            return R(e) && "[object RegExp]" === q(e);
          }
          function R(e) {
            return "object" == typeof e && null !== e;
          }
          function x(e) {
            return R(e) && "[object Date]" === q(e);
          }
          function A(e) {
            return R(e) && ("[object Error]" === q(e) || e instanceof Error);
          }
          function C(e) {
            return "function" == typeof e;
          }
          function T(e) {
            return (
              null === e ||
              "boolean" == typeof e ||
              "number" == typeof e ||
              "string" == typeof e ||
              "symbol" == typeof e ||
              "undefined" == typeof e
            );
          }
          function q(e) {
            return Object.prototype.toString.call(e);
          }
          function _(e) {
            return 10 > e ? "0" + e.toString(10) : e.toString(10);
          }
          function I() {
            var e = new Date(),
              t = [_(e.getHours()), _(e.getMinutes()), _(e.getSeconds())].join(
                ":"
              );
            return [e.getDate(), D[e.getMonth()], t].join(" ");
          }
          function L(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          var P = /%[sdj%]/g;
          (r.format = function (e) {
            if (!w(e)) {
              for (var t = [], r = 0; r < arguments.length; r++)
                t.push(i(arguments[r]));
              return t.join(" ");
            }
            for (
              var r = 1,
                n = arguments,
                s = n.length,
                o = String(e).replace(P, function (e) {
                  if ("%%" === e) return "%";
                  if (r >= s) return e;
                  switch (e) {
                    case "%s":
                      return String(n[r++]);
                    case "%d":
                      return Number(n[r++]);
                    case "%j":
                      try {
                        return JSON.stringify(n[r++]);
                      } catch (t) {
                        return "[Circular]";
                      }
                    default:
                      return e;
                  }
                }),
                a = n[r];
              s > r;
              a = n[++r]
            )
              o += g(a) || !R(a) ? " " + a : " " + i(a);
            return o;
          }),
            (r.deprecate = function (e, i) {
              function s() {
                if (!o) {
                  if (t.throwDeprecation) throw new Error(i);
                  t.traceDeprecation ? console.trace(i) : console.error(i),
                    (o = !0);
                }
                return e.apply(this, arguments);
              }
              if (E(n.process))
                return function () {
                  return r.deprecate(e, i).apply(this, arguments);
                };
              if (t.noDeprecation === !0) return e;
              var o = !1;
              return s;
            });
          var O,
            j = {};
          (r.debuglog = function (e) {
            if (
              (E(O) && (O = t.env.NODE_DEBUG || ""),
              (e = e.toUpperCase()),
              !j[e])
            )
              if (new RegExp("\\b" + e + "\\b", "i").test(O)) {
                var n = t.pid;
                j[e] = function () {
                  var t = r.format.apply(r, arguments);
                  console.error("%s %d: %s", e, n, t);
                };
              } else j[e] = function () {};
            return j[e];
          }),
            (r.inspect = i),
            (i.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39],
            }),
            (i.styles = {
              special: "cyan",
              number: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              date: "magenta",
              regexp: "red",
            }),
            (r.isArray = d),
            (r.isBoolean = m),
            (r.isNull = g),
            (r.isNullOrUndefined = v),
            (r.isNumber = y),
            (r.isString = w),
            (r.isSymbol = b),
            (r.isUndefined = E),
            (r.isRegExp = S),
            (r.isObject = R),
            (r.isDate = x),
            (r.isError = A),
            (r.isFunction = C),
            (r.isPrimitive = T),
            (r.isBuffer = e("./support/isBuffer"));
          var D = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          (r.log = function () {
            console.log("%s - %s", I(), r.format.apply(r, arguments));
          }),
            (r.inherits = e("inherits")),
            (r._extend = function (e, t) {
              if (!t || !R(t)) return e;
              for (var r = Object.keys(t), n = r.length; n--; )
                e[r[n]] = t[r[n]];
              return e;
            });
        }.call(
          this,
          e("_process"),
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { "./support/isBuffer": 19, _process: 13, inherits: 12 },
    ],
    19: [
      function (e, t, r) {
        t.exports = function (e) {
          return (
            e &&
            "object" == typeof e &&
            "function" == typeof e.copy &&
            "function" == typeof e.fill &&
            "function" == typeof e.readUInt8
          );
        };
      },
      {},
    ],
    18: [
      function (e, t, r) {
        function n() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        function i(e, t, r) {
          if (e && c(e) && e instanceof n) return e;
          var i = new n();
          return i.parse(e, t, r), i;
        }
        function s(e) {
          return (
            u(e) && (e = i(e)),
            e instanceof n ? e.format() : n.prototype.format.call(e)
          );
        }
        function o(e, t) {
          return i(e, !1, !0).resolve(t);
        }
        function a(e, t) {
          return e ? i(e, !1, !0).resolveObject(t) : t;
        }
        function u(e) {
          return "string" == typeof e;
        }
        function c(e) {
          return "object" == typeof e && null !== e;
        }
        function h(e) {
          return null === e;
        }
        function l(e) {
          return null == e;
        }
        var p = e("punycode");
        (r.parse = i),
          (r.resolve = o),
          (r.resolveObject = a),
          (r.format = s),
          (r.Url = n);
        var f = /^([a-z0-9.+-]+:)/i,
          d = /:[0-9]*$/,
          m = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
          g = ["{", "}", "|", "\\", "^", "`"].concat(m),
          v = ["'"].concat(g),
          y = ["%", "/", "?", ";", "#"].concat(v),
          w = ["/", "?", "#"],
          b = 255,
          E = /^[a-z0-9A-Z_-]{0,63}$/,
          S = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
          R = { javascript: !0, "javascript:": !0 },
          x = { javascript: !0, "javascript:": !0 },
          A = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0,
          },
          C = e("querystring");
        (n.prototype.parse = function (e, t, r) {
          if (!u(e))
            throw new TypeError(
              "Parameter 'url' must be a string, not " + typeof e
            );
          var n = e;
          n = n.trim();
          var i = f.exec(n);
          if (i) {
            i = i[0];
            var s = i.toLowerCase();
            (this.protocol = s), (n = n.substr(i.length));
          }
          if (r || i || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var o = "//" === n.substr(0, 2);
            !o || (i && x[i]) || ((n = n.substr(2)), (this.slashes = !0));
          }
          if (!x[i] && (o || (i && !A[i]))) {
            for (var a = -1, c = 0; c < w.length; c++) {
              var h = n.indexOf(w[c]);
              -1 !== h && (-1 === a || a > h) && (a = h);
            }
            var l, d;
            (d = -1 === a ? n.lastIndexOf("@") : n.lastIndexOf("@", a)),
              -1 !== d &&
                ((l = n.slice(0, d)),
                (n = n.slice(d + 1)),
                (this.auth = decodeURIComponent(l))),
              (a = -1);
            for (var c = 0; c < y.length; c++) {
              var h = n.indexOf(y[c]);
              -1 !== h && (-1 === a || a > h) && (a = h);
            }
            -1 === a && (a = n.length),
              (this.host = n.slice(0, a)),
              (n = n.slice(a)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var m =
              "[" === this.hostname[0] &&
              "]" === this.hostname[this.hostname.length - 1];
            if (!m)
              for (
                var g = this.hostname.split(/\./), c = 0, T = g.length;
                T > c;
                c++
              ) {
                var q = g[c];
                if (q && !q.match(E)) {
                  for (var _ = "", I = 0, L = q.length; L > I; I++)
                    _ += q.charCodeAt(I) > 127 ? "x" : q[I];
                  if (!_.match(E)) {
                    var P = g.slice(0, c),
                      O = g.slice(c + 1),
                      j = q.match(S);
                    j && (P.push(j[1]), O.unshift(j[2])),
                      O.length && (n = "/" + O.join(".") + n),
                      (this.hostname = P.join("."));
                    break;
                  }
                }
              }
            if (
              (this.hostname.length > b
                ? (this.hostname = "")
                : (this.hostname = this.hostname.toLowerCase()),
              !m)
            ) {
              for (
                var D = this.hostname.split("."), k = [], c = 0;
                c < D.length;
                ++c
              ) {
                var N = D[c];
                k.push(N.match(/[^A-Za-z0-9_-]/) ? "xn--" + p.encode(N) : N);
              }
              this.hostname = k.join(".");
            }
            var U = this.port ? ":" + this.port : "",
              B = this.hostname || "";
            (this.host = B + U),
              (this.href += this.host),
              m &&
                ((this.hostname = this.hostname.substr(
                  1,
                  this.hostname.length - 2
                )),
                "/" !== n[0] && (n = "/" + n));
          }
          if (!R[s])
            for (var c = 0, T = v.length; T > c; c++) {
              var M = v[c],
                z = encodeURIComponent(M);
              z === M && (z = escape(M)), (n = n.split(M).join(z));
            }
          var H = n.indexOf("#");
          -1 !== H && ((this.hash = n.substr(H)), (n = n.slice(0, H)));
          var F = n.indexOf("?");
          if (
            (-1 !== F
              ? ((this.search = n.substr(F)),
                (this.query = n.substr(F + 1)),
                t && (this.query = C.parse(this.query)),
                (n = n.slice(0, F)))
              : t && ((this.search = ""), (this.query = {})),
            n && (this.pathname = n),
            A[s] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            var U = this.pathname || "",
              N = this.search || "";
            this.path = U + N;
          }
          return (this.href = this.format()), this;
        }),
          (n.prototype.format = function () {
            var e = this.auth || "";
            e &&
              ((e = encodeURIComponent(e)),
              (e = e.replace(/%3A/i, ":")),
              (e += "@"));
            var t = this.protocol || "",
              r = this.pathname || "",
              n = this.hash || "",
              i = !1,
              s = "";
            this.host
              ? (i = e + this.host)
              : this.hostname &&
                ((i =
                  e +
                  (-1 === this.hostname.indexOf(":")
                    ? this.hostname
                    : "[" + this.hostname + "]")),
                this.port && (i += ":" + this.port)),
              this.query &&
                c(this.query) &&
                Object.keys(this.query).length &&
                (s = C.stringify(this.query));
            var o = this.search || (s && "?" + s) || "";
            return (
              t && ":" !== t.substr(-1) && (t += ":"),
              this.slashes || ((!t || A[t]) && i !== !1)
                ? ((i = "//" + (i || "")),
                  r && "/" !== r.charAt(0) && (r = "/" + r))
                : i || (i = ""),
              n && "#" !== n.charAt(0) && (n = "#" + n),
              o && "?" !== o.charAt(0) && (o = "?" + o),
              (r = r.replace(/[?#]/g, function (e) {
                return encodeURIComponent(e);
              })),
              (o = o.replace("#", "%23")),
              t + i + r + o + n
            );
          }),
          (n.prototype.resolve = function (e) {
            return this.resolveObject(i(e, !1, !0)).format();
          }),
          (n.prototype.resolveObject = function (e) {
            if (u(e)) {
              var t = new n();
              t.parse(e, !1, !0), (e = t);
            }
            var r = new n();
            if (
              (Object.keys(this).forEach(function (e) {
                r[e] = this[e];
              }, this),
              (r.hash = e.hash),
              "" === e.href)
            )
              return (r.href = r.format()), r;
            if (e.slashes && !e.protocol)
              return (
                Object.keys(e).forEach(function (t) {
                  "protocol" !== t && (r[t] = e[t]);
                }),
                A[r.protocol] &&
                  r.hostname &&
                  !r.pathname &&
                  (r.path = r.pathname = "/"),
                (r.href = r.format()),
                r
              );
            if (e.protocol && e.protocol !== r.protocol) {
              if (!A[e.protocol])
                return (
                  Object.keys(e).forEach(function (t) {
                    r[t] = e[t];
                  }),
                  (r.href = r.format()),
                  r
                );
              if (((r.protocol = e.protocol), e.host || x[e.protocol]))
                r.pathname = e.pathname;
              else {
                for (
                  var i = (e.pathname || "").split("/");
                  i.length && !(e.host = i.shift());

                );
                e.host || (e.host = ""),
                  e.hostname || (e.hostname = ""),
                  "" !== i[0] && i.unshift(""),
                  i.length < 2 && i.unshift(""),
                  (r.pathname = i.join("/"));
              }
              if (
                ((r.search = e.search),
                (r.query = e.query),
                (r.host = e.host || ""),
                (r.auth = e.auth),
                (r.hostname = e.hostname || e.host),
                (r.port = e.port),
                r.pathname || r.search)
              ) {
                var s = r.pathname || "",
                  o = r.search || "";
                r.path = s + o;
              }
              return (
                (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r
              );
            }
            var a = r.pathname && "/" === r.pathname.charAt(0),
              c = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
              p = c || a || (r.host && e.pathname),
              f = p,
              d = (r.pathname && r.pathname.split("/")) || [],
              i = (e.pathname && e.pathname.split("/")) || [],
              m = r.protocol && !A[r.protocol];
            if (
              (m &&
                ((r.hostname = ""),
                (r.port = null),
                r.host && ("" === d[0] ? (d[0] = r.host) : d.unshift(r.host)),
                (r.host = ""),
                e.protocol &&
                  ((e.hostname = null),
                  (e.port = null),
                  e.host && ("" === i[0] ? (i[0] = e.host) : i.unshift(e.host)),
                  (e.host = null)),
                (p = p && ("" === i[0] || "" === d[0]))),
              c)
            )
              (r.host = e.host || "" === e.host ? e.host : r.host),
                (r.hostname =
                  e.hostname || "" === e.hostname ? e.hostname : r.hostname),
                (r.search = e.search),
                (r.query = e.query),
                (d = i);
            else if (i.length)
              d || (d = []),
                d.pop(),
                (d = d.concat(i)),
                (r.search = e.search),
                (r.query = e.query);
            else if (!l(e.search)) {
              if (m) {
                r.hostname = r.host = d.shift();
                var g =
                  r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                g && ((r.auth = g.shift()), (r.host = r.hostname = g.shift()));
              }
              return (
                (r.search = e.search),
                (r.query = e.query),
                (h(r.pathname) && h(r.search)) ||
                  (r.path =
                    (r.pathname ? r.pathname : "") +
                    (r.search ? r.search : "")),
                (r.href = r.format()),
                r
              );
            }
            if (!d.length)
              return (
                (r.pathname = null),
                r.search ? (r.path = "/" + r.search) : (r.path = null),
                (r.href = r.format()),
                r
              );
            for (
              var v = d.slice(-1)[0],
                y =
                  ((r.host || e.host) && ("." === v || ".." === v)) || "" === v,
                w = 0,
                b = d.length;
              b >= 0;
              b--
            )
              (v = d[b]),
                "." == v
                  ? d.splice(b, 1)
                  : ".." === v
                  ? (d.splice(b, 1), w++)
                  : w && (d.splice(b, 1), w--);
            if (!p && !f) for (; w--; w) d.unshift("..");
            !p ||
              "" === d[0] ||
              (d[0] && "/" === d[0].charAt(0)) ||
              d.unshift(""),
              y && "/" !== d.join("/").substr(-1) && d.push("");
            var E = "" === d[0] || (d[0] && "/" === d[0].charAt(0));
            if (m) {
              r.hostname = r.host = E ? "" : d.length ? d.shift() : "";
              var g =
                r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
              g && ((r.auth = g.shift()), (r.host = r.hostname = g.shift()));
            }
            return (
              (p = p || (r.host && d.length)),
              p && !E && d.unshift(""),
              d.length
                ? (r.pathname = d.join("/"))
                : ((r.pathname = null), (r.path = null)),
              (h(r.pathname) && h(r.search)) ||
                (r.path =
                  (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
              (r.auth = e.auth || r.auth),
              (r.slashes = r.slashes || e.slashes),
              (r.href = r.format()),
              r
            );
          }),
          (n.prototype.parseHost = function () {
            var e = this.host,
              t = d.exec(e);
            t &&
              ((t = t[0]),
              ":" !== t && (this.port = t.substr(1)),
              (e = e.substr(0, e.length - t.length))),
              e && (this.hostname = e);
          });
      },
      { punycode: 14, querystring: 17 },
    ],
    17: [
      function (e, t, r) {
        "use strict";
        (r.decode = r.parse = e("./decode")),
          (r.encode = r.stringify = e("./encode"));
      },
      { "./decode": 15, "./encode": 16 },
    ],
    16: [
      function (e, t, r) {
        "use strict";
        function n(e, t) {
          if (e.map) return e.map(t);
          for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
          return r;
        }
        var i = function (e) {
          switch (typeof e) {
            case "string":
              return e;
            case "boolean":
              return e ? "true" : "false";
            case "number":
              return isFinite(e) ? e : "";
            default:
              return "";
          }
        };
        t.exports = function (e, t, r, a) {
          return (
            (t = t || "&"),
            (r = r || "="),
            null === e && (e = void 0),
            "object" == typeof e
              ? n(o(e), function (o) {
                  var a = encodeURIComponent(i(o)) + r;
                  return s(e[o])
                    ? n(e[o], function (e) {
                        return a + encodeURIComponent(i(e));
                      }).join(t)
                    : a + encodeURIComponent(i(e[o]));
                }).join(t)
              : a
              ? encodeURIComponent(i(a)) + r + encodeURIComponent(i(e))
              : ""
          );
        };
        var s =
            Array.isArray ||
            function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            },
          o =
            Object.keys ||
            function (e) {
              var t = [];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
              return t;
            };
      },
      {},
    ],
    15: [
      function (e, t, r) {
        "use strict";
        function n(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        t.exports = function (e, t, r, s) {
          (t = t || "&"), (r = r || "=");
          var o = {};
          if ("string" != typeof e || 0 === e.length) return o;
          var a = /\+/g;
          e = e.split(t);
          var u = 1e3;
          s && "number" == typeof s.maxKeys && (u = s.maxKeys);
          var c = e.length;
          u > 0 && c > u && (c = u);
          for (var h = 0; c > h; ++h) {
            var l,
              p,
              f,
              d,
              m = e[h].replace(a, "%20"),
              g = m.indexOf(r);
            g >= 0
              ? ((l = m.substr(0, g)), (p = m.substr(g + 1)))
              : ((l = m), (p = "")),
              (f = decodeURIComponent(l)),
              (d = decodeURIComponent(p)),
              n(o, f)
                ? i(o[f])
                  ? o[f].push(d)
                  : (o[f] = [o[f], d])
                : (o[f] = d);
          }
          return o;
        };
        var i =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };
      },
      {},
    ],
    14: [
      function (e, t, r) {
        (function (e) {
          !(function (n) {
            function i(e) {
              throw RangeError(O[e]);
            }
            function s(e, t) {
              for (var r = e.length; r--; ) e[r] = t(e[r]);
              return e;
            }
            function o(e, t) {
              return s(e.split(P), t).join(".");
            }
            function a(e) {
              for (var t, r, n = [], i = 0, s = e.length; s > i; )
                (t = e.charCodeAt(i++)),
                  t >= 55296 && 56319 >= t && s > i
                    ? ((r = e.charCodeAt(i++)),
                      56320 == (64512 & r)
                        ? n.push(((1023 & t) << 10) + (1023 & r) + 65536)
                        : (n.push(t), i--))
                    : n.push(t);
              return n;
            }
            function u(e) {
              return s(e, function (e) {
                var t = "";
                return (
                  e > 65535 &&
                    ((e -= 65536),
                    (t += k(((e >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += k(e))
                );
              }).join("");
            }
            function c(e) {
              return 10 > e - 48
                ? e - 22
                : 26 > e - 65
                ? e - 65
                : 26 > e - 97
                ? e - 97
                : S;
            }
            function h(e, t) {
              return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
            }
            function l(e, t, r) {
              var n = 0;
              for (
                e = r ? D(e / C) : e >> 1, e += D(e / t);
                e > (j * x) >> 1;
                n += S
              )
                e = D(e / j);
              return D(n + ((j + 1) * e) / (e + A));
            }
            function p(e) {
              var t,
                r,
                n,
                s,
                o,
                a,
                h,
                p,
                f,
                d,
                m = [],
                g = e.length,
                v = 0,
                y = q,
                w = T;
              for (r = e.lastIndexOf(_), 0 > r && (r = 0), n = 0; r > n; ++n)
                e.charCodeAt(n) >= 128 && i("not-basic"),
                  m.push(e.charCodeAt(n));
              for (s = r > 0 ? r + 1 : 0; g > s; ) {
                for (
                  o = v, a = 1, h = S;
                  s >= g && i("invalid-input"),
                    (p = c(e.charCodeAt(s++))),
                    (p >= S || p > D((E - v) / a)) && i("overflow"),
                    (v += p * a),
                    (f = w >= h ? R : h >= w + x ? x : h - w),
                    !(f > p);
                  h += S
                )
                  (d = S - f), a > D(E / d) && i("overflow"), (a *= d);
                (t = m.length + 1),
                  (w = l(v - o, t, 0 == o)),
                  D(v / t) > E - y && i("overflow"),
                  (y += D(v / t)),
                  (v %= t),
                  m.splice(v++, 0, y);
              }
              return u(m);
            }
            function f(e) {
              var t,
                r,
                n,
                s,
                o,
                u,
                c,
                p,
                f,
                d,
                m,
                g,
                v,
                y,
                w,
                b = [];
              for (
                e = a(e), g = e.length, t = q, r = 0, o = T, u = 0;
                g > u;
                ++u
              )
                (m = e[u]), 128 > m && b.push(k(m));
              for (n = s = b.length, s && b.push(_); g > n; ) {
                for (c = E, u = 0; g > u; ++u)
                  (m = e[u]), m >= t && c > m && (c = m);
                for (
                  v = n + 1,
                    c - t > D((E - r) / v) && i("overflow"),
                    r += (c - t) * v,
                    t = c,
                    u = 0;
                  g > u;
                  ++u
                )
                  if (((m = e[u]), t > m && ++r > E && i("overflow"), m == t)) {
                    for (
                      p = r, f = S;
                      (d = o >= f ? R : f >= o + x ? x : f - o), !(d > p);
                      f += S
                    )
                      (w = p - d),
                        (y = S - d),
                        b.push(k(h(d + (w % y), 0))),
                        (p = D(w / y));
                    b.push(k(h(p, 0))), (o = l(r, v, n == s)), (r = 0), ++n;
                  }
                ++r, ++t;
              }
              return b.join("");
            }
            function d(e) {
              return o(e, function (e) {
                return I.test(e) ? p(e.slice(4).toLowerCase()) : e;
              });
            }
            function m(e) {
              return o(e, function (e) {
                return L.test(e) ? "xn--" + f(e) : e;
              });
            }
            var g = "object" == typeof r && r,
              v = "object" == typeof t && t && t.exports == g && t,
              y = "object" == typeof e && e;
            (y.global === y || y.window === y) && (n = y);
            var w,
              b,
              E = 2147483647,
              S = 36,
              R = 1,
              x = 26,
              A = 38,
              C = 700,
              T = 72,
              q = 128,
              _ = "-",
              I = /^xn--/,
              L = /[^ -~]/,
              P = /\x2E|\u3002|\uFF0E|\uFF61/g,
              O = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
              },
              j = S - R,
              D = Math.floor,
              k = String.fromCharCode;
            if (
              ((w = {
                version: "1.2.4",
                ucs2: { decode: a, encode: u },
                decode: p,
                encode: f,
                toASCII: m,
                toUnicode: d,
              }),
              "function" == typeof define &&
                "object" == typeof define.amd &&
                define.amd)
            )
              define("punycode", function () {
                return w;
              });
            else if (g && !g.nodeType)
              if (v) v.exports = w;
              else for (b in w) w.hasOwnProperty(b) && (g[b] = w[b]);
            else n.punycode = w;
          })(this);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    13: [
      function (e, t, r) {
        function n() {
          if (!a) {
            a = !0;
            for (var e, t = o.length; t; ) {
              (e = o), (o = []);
              for (var r = -1; ++r < t; ) e[r]();
              t = o.length;
            }
            a = !1;
          }
        }
        function i() {}
        var s = (t.exports = {}),
          o = [],
          a = !1;
        (s.nextTick = function (e) {
          o.push(e), a || setTimeout(n, 0);
        }),
          (s.title = "browser"),
          (s.browser = !0),
          (s.env = {}),
          (s.argv = []),
          (s.version = ""),
          (s.versions = {}),
          (s.on = i),
          (s.addListener = i),
          (s.once = i),
          (s.off = i),
          (s.removeListener = i),
          (s.removeAllListeners = i),
          (s.emit = i),
          (s.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (s.cwd = function () {
            return "/";
          }),
          (s.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (s.umask = function () {
            return 0;
          });
      },
      {},
    ],
    12: [
      function (e, t, r) {
        "function" == typeof Object.create
          ? (t.exports = function (e, t) {
              (e.super_ = t),
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                }));
            })
          : (t.exports = function (e, t) {
              e.super_ = t;
              var r = function () {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            });
      },
      {},
    ],
    6: [
      function (e, t, r) {
        function n(e, t, r) {
          a.isBuffer(t) || (t = new a(t)),
            a.isBuffer(r) || (r = new a(r)),
            t.length > f
              ? (t = e(t))
              : t.length < f && (t = a.concat([t, d], f));
          for (var n = new a(f), i = new a(f), s = 0; f > s; s++)
            (n[s] = 54 ^ t[s]), (i[s] = 92 ^ t[s]);
          var o = e(a.concat([n, r]));
          return e(a.concat([i, o]));
        }
        function i(e, t) {
          e = e || "sha1";
          var r = p[e],
            i = [],
            o = 0;
          return (
            r || s("algorithm:", e, "is not yet supported"),
            {
              update: function (e) {
                return (
                  a.isBuffer(e) || (e = new a(e)),
                  i.push(e),
                  (o += e.length),
                  this
                );
              },
              digest: function (e) {
                var s = a.concat(i),
                  o = t ? n(r, t, s) : r(s);
                return (i = null), e ? o.toString(e) : o;
              },
            }
          );
        }
        function s() {
          var e = [].slice.call(arguments).join(" ");
          throw new Error(
            [
              e,
              "we accept pull requests",
              "http://github.com/dominictarr/crypto-browserify",
            ].join("\n")
          );
        }
        function o(e, t) {
          for (var r in e) t(e[r], r);
        }
        var a = e("buffer").Buffer,
          u = e("./sha"),
          c = e("./sha256"),
          h = e("./rng"),
          l = e("./md5"),
          p = { sha1: u, sha256: c, md5: l },
          f = 64,
          d = new a(f);
        d.fill(0),
          (r.createHash = function (e) {
            return i(e);
          }),
          (r.createHmac = function (e, t) {
            return i(e, t);
          }),
          (r.randomBytes = function (e, t) {
            if (!t || !t.call) return new a(h(e));
            try {
              t.call(this, void 0, new a(h(e)));
            } catch (r) {
              t(r);
            }
          }),
          o(
            [
              "createCredentials",
              "createCipher",
              "createCipheriv",
              "createDecipher",
              "createDecipheriv",
              "createSign",
              "createVerify",
              "createDiffieHellman",
              "pbkdf2",
            ],
            function (e) {
              r[e] = function () {
                s("sorry,", e, "is not implemented yet");
              };
            }
          );
      },
      { "./md5": 7, "./rng": 8, "./sha": 9, "./sha256": 10, buffer: 1 },
    ],
    10: [
      function (e, t, r) {
        var n = e("./helpers"),
          i = function (e, t) {
            var r = (65535 & e) + (65535 & t),
              n = (e >> 16) + (t >> 16) + (r >> 16);
            return (n << 16) | (65535 & r);
          },
          s = function (e, t) {
            return (e >>> t) | (e << (32 - t));
          },
          o = function (e, t) {
            return e >>> t;
          },
          a = function (e, t, r) {
            return (e & t) ^ (~e & r);
          },
          u = function (e, t, r) {
            return (e & t) ^ (e & r) ^ (t & r);
          },
          c = function (e) {
            return s(e, 2) ^ s(e, 13) ^ s(e, 22);
          },
          h = function (e) {
            return s(e, 6) ^ s(e, 11) ^ s(e, 25);
          },
          l = function (e) {
            return s(e, 7) ^ s(e, 18) ^ o(e, 3);
          },
          p = function (e) {
            return s(e, 17) ^ s(e, 19) ^ o(e, 10);
          },
          f = function (e, t) {
            var r,
              n,
              s,
              o,
              f,
              d,
              m,
              g,
              v,
              y,
              w,
              b,
              E = new Array(
                1116352408,
                1899447441,
                3049323471,
                3921009573,
                961987163,
                1508970993,
                2453635748,
                2870763221,
                3624381080,
                310598401,
                607225278,
                1426881987,
                1925078388,
                2162078206,
                2614888103,
                3248222580,
                3835390401,
                4022224774,
                264347078,
                604807628,
                770255983,
                1249150122,
                1555081692,
                1996064986,
                2554220882,
                2821834349,
                2952996808,
                3210313671,
                3336571891,
                3584528711,
                113926993,
                338241895,
                666307205,
                773529912,
                1294757372,
                1396182291,
                1695183700,
                1986661051,
                2177026350,
                2456956037,
                2730485921,
                2820302411,
                3259730800,
                3345764771,
                3516065817,
                3600352804,
                4094571909,
                275423344,
                430227734,
                506948616,
                659060556,
                883997877,
                958139571,
                1322822218,
                1537002063,
                1747873779,
                1955562222,
                2024104815,
                2227730452,
                2361852424,
                2428436474,
                2756734187,
                3204031479,
                3329325298
              ),
              S = new Array(
                1779033703,
                3144134277,
                1013904242,
                2773480762,
                1359893119,
                2600822924,
                528734635,
                1541459225
              ),
              R = new Array(64);
            (e[t >> 5] |= 128 << (24 - (t % 32))),
              (e[(((t + 64) >> 9) << 4) + 15] = t);
            for (var v = 0; v < e.length; v += 16) {
              (r = S[0]),
                (n = S[1]),
                (s = S[2]),
                (o = S[3]),
                (f = S[4]),
                (d = S[5]),
                (m = S[6]),
                (g = S[7]);
              for (var y = 0; 64 > y; y++)
                16 > y
                  ? (R[y] = e[y + v])
                  : (R[y] = i(
                      i(i(p(R[y - 2]), R[y - 7]), l(R[y - 15])),
                      R[y - 16]
                    )),
                  (w = i(i(i(i(g, h(f)), a(f, d, m)), E[y]), R[y])),
                  (b = i(c(r), u(r, n, s))),
                  (g = m),
                  (m = d),
                  (d = f),
                  (f = i(o, w)),
                  (o = s),
                  (s = n),
                  (n = r),
                  (r = i(w, b));
              (S[0] = i(r, S[0])),
                (S[1] = i(n, S[1])),
                (S[2] = i(s, S[2])),
                (S[3] = i(o, S[3])),
                (S[4] = i(f, S[4])),
                (S[5] = i(d, S[5])),
                (S[6] = i(m, S[6])),
                (S[7] = i(g, S[7]));
            }
            return S;
          };
        t.exports = function (e) {
          return n.hash(e, f, 32, !0);
        };
      },
      { "./helpers": 5 },
    ],
    9: [
      function (e, t, r) {
        function n(e, t) {
          (e[t >> 5] |= 128 << (24 - (t % 32))),
            (e[(((t + 64) >> 9) << 4) + 15] = t);
          for (
            var r = Array(80),
              n = 1732584193,
              u = -271733879,
              c = -1732584194,
              h = 271733878,
              l = -1009589776,
              p = 0;
            p < e.length;
            p += 16
          ) {
            for (var f = n, d = u, m = c, g = h, v = l, y = 0; 80 > y; y++) {
              16 > y
                ? (r[y] = e[p + y])
                : (r[y] = a(r[y - 3] ^ r[y - 8] ^ r[y - 14] ^ r[y - 16], 1));
              var w = o(o(a(n, 5), i(y, u, c, h)), o(o(l, r[y]), s(y)));
              (l = h), (h = c), (c = a(u, 30)), (u = n), (n = w);
            }
            (n = o(n, f)),
              (u = o(u, d)),
              (c = o(c, m)),
              (h = o(h, g)),
              (l = o(l, v));
          }
          return Array(n, u, c, h, l);
        }
        function i(e, t, r, n) {
          return 20 > e
            ? (t & r) | (~t & n)
            : 40 > e
            ? t ^ r ^ n
            : 60 > e
            ? (t & r) | (t & n) | (r & n)
            : t ^ r ^ n;
        }
        function s(e) {
          return 20 > e
            ? 1518500249
            : 40 > e
            ? 1859775393
            : 60 > e
            ? -1894007588
            : -899497514;
        }
        function o(e, t) {
          var r = (65535 & e) + (65535 & t),
            n = (e >> 16) + (t >> 16) + (r >> 16);
          return (n << 16) | (65535 & r);
        }
        function a(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        var u = e("./helpers");
        t.exports = function (e) {
          return u.hash(e, n, 20, !0);
        };
      },
      { "./helpers": 5 },
    ],
    8: [
      function (e, t, r) {
        !(function () {
          var e,
            r,
            n = this;
          (e = function (e) {
            for (var t, t, r = new Array(e), n = 0; e > n; n++)
              0 == (3 & n) && (t = 4294967296 * Math.random()),
                (r[n] = (t >>> ((3 & n) << 3)) & 255);
            return r;
          }),
            n.crypto &&
              crypto.getRandomValues &&
              (r = function (e) {
                var t = new Uint8Array(e);
                return crypto.getRandomValues(t), t;
              }),
            (t.exports = r || e);
        })();
      },
      {},
    ],
    7: [
      function (e, t, r) {
        function n(e, t) {
          (e[t >> 5] |= 128 << t % 32), (e[(((t + 64) >>> 9) << 4) + 14] = t);
          for (
            var r = 1732584193,
              n = -271733879,
              i = -1732584194,
              h = 271733878,
              l = 0;
            l < e.length;
            l += 16
          ) {
            var p = r,
              f = n,
              d = i,
              m = h;
            (r = s(r, n, i, h, e[l + 0], 7, -680876936)),
              (h = s(h, r, n, i, e[l + 1], 12, -389564586)),
              (i = s(i, h, r, n, e[l + 2], 17, 606105819)),
              (n = s(n, i, h, r, e[l + 3], 22, -1044525330)),
              (r = s(r, n, i, h, e[l + 4], 7, -176418897)),
              (h = s(h, r, n, i, e[l + 5], 12, 1200080426)),
              (i = s(i, h, r, n, e[l + 6], 17, -1473231341)),
              (n = s(n, i, h, r, e[l + 7], 22, -45705983)),
              (r = s(r, n, i, h, e[l + 8], 7, 1770035416)),
              (h = s(h, r, n, i, e[l + 9], 12, -1958414417)),
              (i = s(i, h, r, n, e[l + 10], 17, -42063)),
              (n = s(n, i, h, r, e[l + 11], 22, -1990404162)),
              (r = s(r, n, i, h, e[l + 12], 7, 1804603682)),
              (h = s(h, r, n, i, e[l + 13], 12, -40341101)),
              (i = s(i, h, r, n, e[l + 14], 17, -1502002290)),
              (n = s(n, i, h, r, e[l + 15], 22, 1236535329)),
              (r = o(r, n, i, h, e[l + 1], 5, -165796510)),
              (h = o(h, r, n, i, e[l + 6], 9, -1069501632)),
              (i = o(i, h, r, n, e[l + 11], 14, 643717713)),
              (n = o(n, i, h, r, e[l + 0], 20, -373897302)),
              (r = o(r, n, i, h, e[l + 5], 5, -701558691)),
              (h = o(h, r, n, i, e[l + 10], 9, 38016083)),
              (i = o(i, h, r, n, e[l + 15], 14, -660478335)),
              (n = o(n, i, h, r, e[l + 4], 20, -405537848)),
              (r = o(r, n, i, h, e[l + 9], 5, 568446438)),
              (h = o(h, r, n, i, e[l + 14], 9, -1019803690)),
              (i = o(i, h, r, n, e[l + 3], 14, -187363961)),
              (n = o(n, i, h, r, e[l + 8], 20, 1163531501)),
              (r = o(r, n, i, h, e[l + 13], 5, -1444681467)),
              (h = o(h, r, n, i, e[l + 2], 9, -51403784)),
              (i = o(i, h, r, n, e[l + 7], 14, 1735328473)),
              (n = o(n, i, h, r, e[l + 12], 20, -1926607734)),
              (r = a(r, n, i, h, e[l + 5], 4, -378558)),
              (h = a(h, r, n, i, e[l + 8], 11, -2022574463)),
              (i = a(i, h, r, n, e[l + 11], 16, 1839030562)),
              (n = a(n, i, h, r, e[l + 14], 23, -35309556)),
              (r = a(r, n, i, h, e[l + 1], 4, -1530992060)),
              (h = a(h, r, n, i, e[l + 4], 11, 1272893353)),
              (i = a(i, h, r, n, e[l + 7], 16, -155497632)),
              (n = a(n, i, h, r, e[l + 10], 23, -1094730640)),
              (r = a(r, n, i, h, e[l + 13], 4, 681279174)),
              (h = a(h, r, n, i, e[l + 0], 11, -358537222)),
              (i = a(i, h, r, n, e[l + 3], 16, -722521979)),
              (n = a(n, i, h, r, e[l + 6], 23, 76029189)),
              (r = a(r, n, i, h, e[l + 9], 4, -640364487)),
              (h = a(h, r, n, i, e[l + 12], 11, -421815835)),
              (i = a(i, h, r, n, e[l + 15], 16, 530742520)),
              (n = a(n, i, h, r, e[l + 2], 23, -995338651)),
              (r = u(r, n, i, h, e[l + 0], 6, -198630844)),
              (h = u(h, r, n, i, e[l + 7], 10, 1126891415)),
              (i = u(i, h, r, n, e[l + 14], 15, -1416354905)),
              (n = u(n, i, h, r, e[l + 5], 21, -57434055)),
              (r = u(r, n, i, h, e[l + 12], 6, 1700485571)),
              (h = u(h, r, n, i, e[l + 3], 10, -1894986606)),
              (i = u(i, h, r, n, e[l + 10], 15, -1051523)),
              (n = u(n, i, h, r, e[l + 1], 21, -2054922799)),
              (r = u(r, n, i, h, e[l + 8], 6, 1873313359)),
              (h = u(h, r, n, i, e[l + 15], 10, -30611744)),
              (i = u(i, h, r, n, e[l + 6], 15, -1560198380)),
              (n = u(n, i, h, r, e[l + 13], 21, 1309151649)),
              (r = u(r, n, i, h, e[l + 4], 6, -145523070)),
              (h = u(h, r, n, i, e[l + 11], 10, -1120210379)),
              (i = u(i, h, r, n, e[l + 2], 15, 718787259)),
              (n = u(n, i, h, r, e[l + 9], 21, -343485551)),
              (r = c(r, p)),
              (n = c(n, f)),
              (i = c(i, d)),
              (h = c(h, m));
          }
          return Array(r, n, i, h);
        }
        function i(e, t, r, n, i, s) {
          return c(h(c(c(t, e), c(n, s)), i), r);
        }
        function s(e, t, r, n, s, o, a) {
          return i((t & r) | (~t & n), e, t, s, o, a);
        }
        function o(e, t, r, n, s, o, a) {
          return i((t & n) | (r & ~n), e, t, s, o, a);
        }
        function a(e, t, r, n, s, o, a) {
          return i(t ^ r ^ n, e, t, s, o, a);
        }
        function u(e, t, r, n, s, o, a) {
          return i(r ^ (t | ~n), e, t, s, o, a);
        }
        function c(e, t) {
          var r = (65535 & e) + (65535 & t),
            n = (e >> 16) + (t >> 16) + (r >> 16);
          return (n << 16) | (65535 & r);
        }
        function h(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        var l = e("./helpers");
        t.exports = function (e) {
          return l.hash(e, n, 16);
        };
      },
      { "./helpers": 5 },
    ],
    5: [
      function (e, t, r) {
        function n(e, t) {
          if (e.length % a !== 0) {
            var r = e.length + (a - (e.length % a));
            e = o.concat([e, u], r);
          }
          for (
            var n = [], i = t ? e.readInt32BE : e.readInt32LE, s = 0;
            s < e.length;
            s += a
          )
            n.push(i.call(e, s));
          return n;
        }
        function i(e, t, r) {
          for (
            var n = new o(t), i = r ? n.writeInt32BE : n.writeInt32LE, s = 0;
            s < e.length;
            s++
          )
            i.call(n, e[s], 4 * s, !0);
          return n;
        }
        function s(e, t, r, s) {
          o.isBuffer(e) || (e = new o(e));
          var a = t(n(e, s), e.length * c);
          return i(a, r, s);
        }
        var o = e("buffer").Buffer,
          a = 4,
          u = new o(a);
        u.fill(0);
        var c = 8;
        t.exports = { hash: s };
      },
      { buffer: 1 },
    ],
    1: [
      function (e, t, r) {
        function n() {
          return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function i(e) {
          return this instanceof i
            ? ((this.length = 0),
              (this.parent = void 0),
              "number" == typeof e
                ? s(this, e)
                : "string" == typeof e
                ? o(this, e, arguments.length > 1 ? arguments[1] : "utf8")
                : a(this, e))
            : arguments.length > 1
            ? new i(e, arguments[1])
            : new i(e);
        }
        function s(e, t) {
          if (((e = f(e, 0 > t ? 0 : 0 | d(t))), !i.TYPED_ARRAY_SUPPORT))
            for (var r = 0; t > r; r++) e[r] = 0;
          return e;
        }
        function o(e, t, r) {
          ("string" != typeof r || "" === r) && (r = "utf8");
          var n = 0 | g(t, r);
          return (e = f(e, n)), e.write(t, r), e;
        }
        function a(e, t) {
          if (i.isBuffer(t)) return u(e, t);
          if (Y(t)) return c(e, t);
          if (null == t)
            throw new TypeError(
              "must start with number, buffer, array or string"
            );
          return "undefined" != typeof ArrayBuffer &&
            t.buffer instanceof ArrayBuffer
            ? h(e, t)
            : t.length
            ? l(e, t)
            : p(e, t);
        }
        function u(e, t) {
          var r = 0 | d(t.length);
          return (e = f(e, r)), t.copy(e, 0, 0, r), e;
        }
        function c(e, t) {
          var r = 0 | d(t.length);
          e = f(e, r);
          for (var n = 0; r > n; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function h(e, t) {
          var r = 0 | d(t.length);
          e = f(e, r);
          for (var n = 0; r > n; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function l(e, t) {
          var r = 0 | d(t.length);
          e = f(e, r);
          for (var n = 0; r > n; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function p(e, t) {
          var r,
            n = 0;
          "Buffer" === t.type &&
            Y(t.data) &&
            ((r = t.data), (n = 0 | d(r.length))),
            (e = f(e, n));
          for (var i = 0; n > i; i += 1) e[i] = 255 & r[i];
          return e;
        }
        function f(e, t) {
          i.TYPED_ARRAY_SUPPORT
            ? (e = i._augment(new Uint8Array(t)))
            : ((e.length = t), (e._isBuffer = !0));
          var r = 0 !== t && t <= i.poolSize >>> 1;
          return r && (e.parent = G), e;
        }
        function d(e) {
          if (e >= n())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                n().toString(16) +
                " bytes"
            );
          return 0 | e;
        }
        function m(e, t) {
          if (!(this instanceof m)) return new m(e, t);
          var r = new i(e, t);
          return delete r.parent, r;
        }
        function g(e, t) {
          "string" != typeof e && (e = "" + e);
          var r = e.length;
          if (0 === r) return 0;
          for (var n = !1; ; )
            switch (t) {
              case "ascii":
              case "binary":
              case "raw":
              case "raws":
                return r;
              case "utf8":
              case "utf-8":
                return M(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return F(e).length;
              default:
                if (n) return M(e).length;
                (t = ("" + t).toLowerCase()), (n = !0);
            }
        }
        function v(e, t, r) {
          var n = !1;
          if (
            ((t = 0 | t),
            (r = void 0 === r || r === 1 / 0 ? this.length : 0 | r),
            e || (e = "utf8"),
            0 > t && (t = 0),
            r > this.length && (r = this.length),
            t >= r)
          )
            return "";
          for (;;)
            switch (e) {
              case "hex":
                return q(this, t, r);
              case "utf8":
              case "utf-8":
                return A(this, t, r);
              case "ascii":
                return C(this, t, r);
              case "binary":
                return T(this, t, r);
              case "base64":
                return x(this, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _(this, t, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (n = !0);
            }
        }
        function y(e, t, r, n) {
          r = Number(r) || 0;
          var i = e.length - r;
          n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
          var s = t.length;
          if (s % 2 !== 0) throw new Error("Invalid hex string");
          n > s / 2 && (n = s / 2);
          for (var o = 0; n > o; o++) {
            var a = parseInt(t.substr(2 * o, 2), 16);
            if (isNaN(a)) throw new Error("Invalid hex string");
            e[r + o] = a;
          }
          return o;
        }
        function w(e, t, r, n) {
          return V(M(t, e.length - r), e, r, n);
        }
        function b(e, t, r, n) {
          return V(z(t), e, r, n);
        }
        function E(e, t, r, n) {
          return b(e, t, r, n);
        }
        function S(e, t, r, n) {
          return V(F(t), e, r, n);
        }
        function R(e, t, r, n) {
          return V(H(t, e.length - r), e, r, n);
        }
        function x(e, t, r) {
          return 0 === t && r === e.length
            ? K.fromByteArray(e)
            : K.fromByteArray(e.slice(t, r));
        }
        function A(e, t, r) {
          var n = "",
            i = "";
          r = Math.min(e.length, r);
          for (var s = t; r > s; s++)
            e[s] <= 127
              ? ((n += X(i) + String.fromCharCode(e[s])), (i = ""))
              : (i += "%" + e[s].toString(16));
          return n + X(i);
        }
        function C(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; r > i; i++) n += String.fromCharCode(127 & e[i]);
          return n;
        }
        function T(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; r > i; i++) n += String.fromCharCode(e[i]);
          return n;
        }
        function q(e, t, r) {
          var n = e.length;
          (!t || 0 > t) && (t = 0), (!r || 0 > r || r > n) && (r = n);
          for (var i = "", s = t; r > s; s++) i += B(e[s]);
          return i;
        }
        function _(e, t, r) {
          for (var n = e.slice(t, r), i = "", s = 0; s < n.length; s += 2)
            i += String.fromCharCode(n[s] + 256 * n[s + 1]);
          return i;
        }
        function I(e, t, r) {
          if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
          if (e + t > r)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function L(e, t, r, n, s, o) {
          if (!i.isBuffer(e))
            throw new TypeError("buffer must be a Buffer instance");
          if (t > s || o > t) throw new RangeError("value is out of bounds");
          if (r + n > e.length) throw new RangeError("index out of range");
        }
        function P(e, t, r, n) {
          0 > t && (t = 65535 + t + 1);
          for (var i = 0, s = Math.min(e.length - r, 2); s > i; i++)
            e[r + i] =
              (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
        }
        function O(e, t, r, n) {
          0 > t && (t = 4294967295 + t + 1);
          for (var i = 0, s = Math.min(e.length - r, 4); s > i; i++)
            e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
        }
        function j(e, t, r, n, i, s) {
          if (t > i || s > t) throw new RangeError("value is out of bounds");
          if (r + n > e.length) throw new RangeError("index out of range");
          if (0 > r) throw new RangeError("index out of range");
        }
        function D(e, t, r, n, i) {
          return (
            i || j(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38),
            W.write(e, t, r, n, 23, 4),
            r + 4
          );
        }
        function k(e, t, r, n, i) {
          return (
            i || j(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308),
            W.write(e, t, r, n, 52, 8),
            r + 8
          );
        }
        function N(e) {
          if (((e = U(e).replace($, "")), e.length < 2)) return "";
          for (; e.length % 4 !== 0; ) e += "=";
          return e;
        }
        function U(e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        }
        function B(e) {
          return 16 > e ? "0" + e.toString(16) : e.toString(16);
        }
        function M(e, t) {
          t = t || 1 / 0;
          for (var r, n = e.length, i = null, s = [], o = 0; n > o; o++) {
            if (((r = e.charCodeAt(o)), r > 55295 && 57344 > r)) {
              if (!i) {
                if (r > 56319) {
                  (t -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                if (o + 1 === n) {
                  (t -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (56320 > r) {
                (t -= 3) > -1 && s.push(239, 191, 189), (i = r);
                continue;
              }
              (r = ((i - 55296) << 10) | (r - 56320) | 65536), (i = null);
            } else i && ((t -= 3) > -1 && s.push(239, 191, 189), (i = null));
            if (128 > r) {
              if ((t -= 1) < 0) break;
              s.push(r);
            } else if (2048 > r) {
              if ((t -= 2) < 0) break;
              s.push((r >> 6) | 192, (63 & r) | 128);
            } else if (65536 > r) {
              if ((t -= 3) < 0) break;
              s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(2097152 > r)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              s.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return s;
        }
        function z(e) {
          for (var t = [], r = 0; r < e.length; r++)
            t.push(255 & e.charCodeAt(r));
          return t;
        }
        function H(e, t) {
          for (var r, n, i, s = [], o = 0; o < e.length && !((t -= 2) < 0); o++)
            (r = e.charCodeAt(o)),
              (n = r >> 8),
              (i = r % 256),
              s.push(i),
              s.push(n);
          return s;
        }
        function F(e) {
          return K.toByteArray(N(e));
        }
        function V(e, t, r, n) {
          for (var i = 0; n > i && !(i + r >= t.length || i >= e.length); i++)
            t[i + r] = e[i];
          return i;
        }
        function X(e) {
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return String.fromCharCode(65533);
          }
        }
        var K = e("base64-js"),
          W = e("ieee754"),
          Y = e("is-array");
        (r.Buffer = i),
          (r.SlowBuffer = m),
          (r.INSPECT_MAX_BYTES = 50),
          (i.poolSize = 8192);
        var G = {};
        (i.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var e = new ArrayBuffer(0),
              t = new Uint8Array(e);
            return (
              (t.foo = function () {
                return 42;
              }),
              42 === t.foo() &&
                "function" == typeof t.subarray &&
                0 === new Uint8Array(1).subarray(1, 1).byteLength
            );
          } catch (r) {
            return !1;
          }
        })()),
          (i.isBuffer = function (e) {
            return !(null == e || !e._isBuffer);
          }),
          (i.compare = function (e, t) {
            if (!i.isBuffer(e) || !i.isBuffer(t))
              throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (
              var r = e.length, n = t.length, s = 0, o = Math.min(r, n);
              o > s && e[s] === t[s];

            )
              ++s;
            return (
              s !== o && ((r = e[s]), (n = t[s])), n > r ? -1 : r > n ? 1 : 0
            );
          }),
          (i.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (i.concat = function (e, t) {
            if (!Y(e))
              throw new TypeError("list argument must be an Array of Buffers.");
            if (0 === e.length) return new i(0);
            if (1 === e.length) return e[0];
            var r;
            if (void 0 === t)
              for (t = 0, r = 0; r < e.length; r++) t += e[r].length;
            var n = new i(t),
              s = 0;
            for (r = 0; r < e.length; r++) {
              var o = e[r];
              o.copy(n, s), (s += o.length);
            }
            return n;
          }),
          (i.byteLength = g),
          (i.prototype.length = void 0),
          (i.prototype.parent = void 0),
          (i.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? A(this, 0, e)
              : v.apply(this, arguments);
          }),
          (i.prototype.equals = function (e) {
            if (!i.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e ? !0 : 0 === i.compare(this, e);
          }),
          (i.prototype.inspect = function () {
            var e = "",
              t = r.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString("hex", 0, t).match(/.{2}/g).join(" ")),
                this.length > t && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (i.prototype.compare = function (e) {
            if (!i.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e ? 0 : i.compare(this, e);
          }),
          (i.prototype.indexOf = function (e, t) {
            function r(e, t, r) {
              for (var n = -1, i = 0; r + i < e.length; i++)
                if (e[r + i] === t[-1 === n ? 0 : i - n]) {
                  if ((-1 === n && (n = i), i - n + 1 === t.length))
                    return r + n;
                } else n = -1;
              return -1;
            }
            if (
              (t > 2147483647
                ? (t = 2147483647)
                : -2147483648 > t && (t = -2147483648),
              (t >>= 0),
              0 === this.length)
            )
              return -1;
            if (t >= this.length) return -1;
            if (
              (0 > t && (t = Math.max(this.length + t, 0)),
              "string" == typeof e)
            )
              return 0 === e.length
                ? -1
                : String.prototype.indexOf.call(this, e, t);
            if (i.isBuffer(e)) return r(this, e, t);
            if ("number" == typeof e)
              return i.TYPED_ARRAY_SUPPORT &&
                "function" === Uint8Array.prototype.indexOf
                ? Uint8Array.prototype.indexOf.call(this, e, t)
                : r(this, [e], t);
            throw new TypeError("val must be string, number or Buffer");
          }),
          (i.prototype.get = function (e) {
            return (
              console.log(
                ".get() is deprecated. Access using array indexes instead."
              ),
              this.readUInt8(e)
            );
          }),
          (i.prototype.set = function (e, t) {
            return (
              console.log(
                ".set() is deprecated. Access using array indexes instead."
              ),
              this.writeUInt8(e, t)
            );
          }),
          (i.prototype.write = function (e, t, r, n) {
            if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
            else if (void 0 === r && "string" == typeof t)
              (n = t), (r = this.length), (t = 0);
            else if (isFinite(t))
              (t = 0 | t),
                isFinite(r)
                  ? ((r = 0 | r), void 0 === n && (n = "utf8"))
                  : ((n = r), (r = void 0));
            else {
              var i = n;
              (n = t), (t = 0 | r), (r = i);
            }
            var s = this.length - t;
            if (
              ((void 0 === r || r > s) && (r = s),
              (e.length > 0 && (0 > r || 0 > t)) || t > this.length)
            )
              throw new RangeError("attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ; )
              switch (n) {
                case "hex":
                  return y(this, e, t, r);
                case "utf8":
                case "utf-8":
                  return w(this, e, t, r);
                case "ascii":
                  return b(this, e, t, r);
                case "binary":
                  return E(this, e, t, r);
                case "base64":
                  return S(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return R(this, e, t, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (i.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          }),
          (i.prototype.slice = function (e, t) {
            var r = this.length;
            (e = ~~e),
              (t = void 0 === t ? r : ~~t),
              0 > e ? ((e += r), 0 > e && (e = 0)) : e > r && (e = r),
              0 > t ? ((t += r), 0 > t && (t = 0)) : t > r && (t = r),
              e > t && (t = e);
            var n;
            if (i.TYPED_ARRAY_SUPPORT) n = i._augment(this.subarray(e, t));
            else {
              var s = t - e;
              n = new i(s, void 0);
              for (var o = 0; s > o; o++) n[o] = this[o + e];
            }
            return n.length && (n.parent = this.parent || this), n;
          }),
          (i.prototype.readUIntLE = function (e, t, r) {
            (e = 0 | e), (t = 0 | t), r || I(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
              n += this[e + s] * i;
            return n;
          }),
          (i.prototype.readUIntBE = function (e, t, r) {
            (e = 0 | e), (t = 0 | t), r || I(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
              n += this[e + --t] * i;
            return n;
          }),
          (i.prototype.readUInt8 = function (e, t) {
            return t || I(e, 1, this.length), this[e];
          }),
          (i.prototype.readUInt16LE = function (e, t) {
            return t || I(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (i.prototype.readUInt16BE = function (e, t) {
            return t || I(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (i.prototype.readUInt32LE = function (e, t) {
            return (
              t || I(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (i.prototype.readUInt32BE = function (e, t) {
            return (
              t || I(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (i.prototype.readIntLE = function (e, t, r) {
            (e = 0 | e), (t = 0 | t), r || I(e, t, this.length);
            for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
              n += this[e + s] * i;
            return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
          }),
          (i.prototype.readIntBE = function (e, t, r) {
            (e = 0 | e), (t = 0 | t), r || I(e, t, this.length);
            for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256); )
              s += this[e + --n] * i;
            return (i *= 128), s >= i && (s -= Math.pow(2, 8 * t)), s;
          }),
          (i.prototype.readInt8 = function (e, t) {
            return (
              t || I(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (i.prototype.readInt16LE = function (e, t) {
            t || I(e, 2, this.length);
            var r = this[e] | (this[e + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (i.prototype.readInt16BE = function (e, t) {
            t || I(e, 2, this.length);
            var r = this[e + 1] | (this[e] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (i.prototype.readInt32LE = function (e, t) {
            return (
              t || I(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (i.prototype.readInt32BE = function (e, t) {
            return (
              t || I(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (i.prototype.readFloatLE = function (e, t) {
            return t || I(e, 4, this.length), W.read(this, e, !0, 23, 4);
          }),
          (i.prototype.readFloatBE = function (e, t) {
            return t || I(e, 4, this.length), W.read(this, e, !1, 23, 4);
          }),
          (i.prototype.readDoubleLE = function (e, t) {
            return t || I(e, 8, this.length), W.read(this, e, !0, 52, 8);
          }),
          (i.prototype.readDoubleBE = function (e, t) {
            return t || I(e, 8, this.length), W.read(this, e, !1, 52, 8);
          }),
          (i.prototype.writeUIntLE = function (e, t, r, n) {
            (e = +e),
              (t = 0 | t),
              (r = 0 | r),
              n || L(this, e, t, r, Math.pow(2, 8 * r), 0);
            var i = 1,
              s = 0;
            for (this[t] = 255 & e; ++s < r && (i *= 256); )
              this[t + s] = (e / i) & 255;
            return t + r;
          }),
          (i.prototype.writeUIntBE = function (e, t, r, n) {
            (e = +e),
              (t = 0 | t),
              (r = 0 | r),
              n || L(this, e, t, r, Math.pow(2, 8 * r), 0);
            var i = r - 1,
              s = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
              this[t + i] = (e / s) & 255;
            return t + r;
          }),
          (i.prototype.writeUInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 1, 255, 0),
              i.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = e),
              t + 1
            );
          }),
          (i.prototype.writeUInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 2, 65535, 0),
              i.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e), (this[t + 1] = e >>> 8))
                : P(this, e, t, !0),
              t + 2
            );
          }),
          (i.prototype.writeUInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 2, 65535, 0),
              i.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = e))
                : P(this, e, t, !1),
              t + 2
            );
          }),
          (i.prototype.writeUInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 4, 4294967295, 0),
              i.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = e))
                : O(this, e, t, !0),
              t + 4
            );
          }),
          (i.prototype.writeUInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 4, 4294967295, 0),
              i.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = e))
                : O(this, e, t, !1),
              t + 4
            );
          }),
          (i.prototype.writeIntLE = function (e, t, r, n) {
            if (((e = +e), (t = 0 | t), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              L(this, e, t, r, i - 1, -i);
            }
            var s = 0,
              o = 1,
              a = 0 > e ? 1 : 0;
            for (this[t] = 255 & e; ++s < r && (o *= 256); )
              this[t + s] = (((e / o) >> 0) - a) & 255;
            return t + r;
          }),
          (i.prototype.writeIntBE = function (e, t, r, n) {
            if (((e = +e), (t = 0 | t), !n)) {
              var i = Math.pow(2, 8 * r - 1);
              L(this, e, t, r, i - 1, -i);
            }
            var s = r - 1,
              o = 1,
              a = 0 > e ? 1 : 0;
            for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
              this[t + s] = (((e / o) >> 0) - a) & 255;
            return t + r;
          }),
          (i.prototype.writeInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 1, 127, -128),
              i.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              0 > e && (e = 255 + e + 1),
              (this[t] = e),
              t + 1
            );
          }),
          (i.prototype.writeInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 2, 32767, -32768),
              i.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e), (this[t + 1] = e >>> 8))
                : P(this, e, t, !0),
              t + 2
            );
          }),
          (i.prototype.writeInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 2, 32767, -32768),
              i.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = e))
                : P(this, e, t, !1),
              t + 2
            );
          }),
          (i.prototype.writeInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 4, 2147483647, -2147483648),
              i.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : O(this, e, t, !0),
              t + 4
            );
          }),
          (i.prototype.writeInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t = 0 | t),
              r || L(this, e, t, 4, 2147483647, -2147483648),
              0 > e && (e = 4294967295 + e + 1),
              i.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = e))
                : O(this, e, t, !1),
              t + 4
            );
          }),
          (i.prototype.writeFloatLE = function (e, t, r) {
            return D(this, e, t, !0, r);
          }),
          (i.prototype.writeFloatBE = function (e, t, r) {
            return D(this, e, t, !1, r);
          }),
          (i.prototype.writeDoubleLE = function (e, t, r) {
            return k(this, e, t, !0, r);
          }),
          (i.prototype.writeDoubleBE = function (e, t, r) {
            return k(this, e, t, !1, r);
          }),
          (i.prototype.copy = function (e, t, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && r > n && (n = r),
              n === r)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (0 > t) throw new RangeError("targetStart out of bounds");
            if (0 > r || r >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (0 > n) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
              e.length - t < n - r && (n = e.length - t + r);
            var s = n - r;
            if (1e3 > s || !i.TYPED_ARRAY_SUPPORT)
              for (var o = 0; s > o; o++) e[o + t] = this[o + r];
            else e._set(this.subarray(r, r + s), t);
            return s;
          }),
          (i.prototype.fill = function (e, t, r) {
            if ((e || (e = 0), t || (t = 0), r || (r = this.length), t > r))
              throw new RangeError("end < start");
            if (r !== t && 0 !== this.length) {
              if (0 > t || t >= this.length)
                throw new RangeError("start out of bounds");
              if (0 > r || r > this.length)
                throw new RangeError("end out of bounds");
              var n;
              if ("number" == typeof e) for (n = t; r > n; n++) this[n] = e;
              else {
                var i = M(e.toString()),
                  s = i.length;
                for (n = t; r > n; n++) this[n] = i[n % s];
              }
              return this;
            }
          }),
          (i.prototype.toArrayBuffer = function () {
            if ("undefined" != typeof Uint8Array) {
              if (i.TYPED_ARRAY_SUPPORT) return new i(this).buffer;
              for (
                var e = new Uint8Array(this.length), t = 0, r = e.length;
                r > t;
                t += 1
              )
                e[t] = this[t];
              return e.buffer;
            }
            throw new TypeError(
              "Buffer.toArrayBuffer not supported in this browser"
            );
          });
        var J = i.prototype;
        i._augment = function (e) {
          return (
            (e.constructor = i),
            (e._isBuffer = !0),
            (e._set = e.set),
            (e.get = J.get),
            (e.set = J.set),
            (e.write = J.write),
            (e.toString = J.toString),
            (e.toLocaleString = J.toString),
            (e.toJSON = J.toJSON),
            (e.equals = J.equals),
            (e.compare = J.compare),
            (e.indexOf = J.indexOf),
            (e.copy = J.copy),
            (e.slice = J.slice),
            (e.readUIntLE = J.readUIntLE),
            (e.readUIntBE = J.readUIntBE),
            (e.readUInt8 = J.readUInt8),
            (e.readUInt16LE = J.readUInt16LE),
            (e.readUInt16BE = J.readUInt16BE),
            (e.readUInt32LE = J.readUInt32LE),
            (e.readUInt32BE = J.readUInt32BE),
            (e.readIntLE = J.readIntLE),
            (e.readIntBE = J.readIntBE),
            (e.readInt8 = J.readInt8),
            (e.readInt16LE = J.readInt16LE),
            (e.readInt16BE = J.readInt16BE),
            (e.readInt32LE = J.readInt32LE),
            (e.readInt32BE = J.readInt32BE),
            (e.readFloatLE = J.readFloatLE),
            (e.readFloatBE = J.readFloatBE),
            (e.readDoubleLE = J.readDoubleLE),
            (e.readDoubleBE = J.readDoubleBE),
            (e.writeUInt8 = J.writeUInt8),
            (e.writeUIntLE = J.writeUIntLE),
            (e.writeUIntBE = J.writeUIntBE),
            (e.writeUInt16LE = J.writeUInt16LE),
            (e.writeUInt16BE = J.writeUInt16BE),
            (e.writeUInt32LE = J.writeUInt32LE),
            (e.writeUInt32BE = J.writeUInt32BE),
            (e.writeIntLE = J.writeIntLE),
            (e.writeIntBE = J.writeIntBE),
            (e.writeInt8 = J.writeInt8),
            (e.writeInt16LE = J.writeInt16LE),
            (e.writeInt16BE = J.writeInt16BE),
            (e.writeInt32LE = J.writeInt32LE),
            (e.writeInt32BE = J.writeInt32BE),
            (e.writeFloatLE = J.writeFloatLE),
            (e.writeFloatBE = J.writeFloatBE),
            (e.writeDoubleLE = J.writeDoubleLE),
            (e.writeDoubleBE = J.writeDoubleBE),
            (e.fill = J.fill),
            (e.inspect = J.inspect),
            (e.toArrayBuffer = J.toArrayBuffer),
            e
          );
        };
        var $ = /[^+\/0-9A-z\-]/g;
      },
      { "base64-js": 2, ieee754: 3, "is-array": 4 },
    ],
    4: [
      function (e, t, r) {
        var n = Array.isArray,
          i = Object.prototype.toString;
        t.exports =
          n ||
          function (e) {
            return !!e && "[object Array]" == i.call(e);
          };
      },
      {},
    ],
    3: [
      function (e, t, r) {
        (r.read = function (e, t, r, n, i) {
          var s,
            o,
            a = 8 * i - n - 1,
            u = (1 << a) - 1,
            c = u >> 1,
            h = -7,
            l = r ? i - 1 : 0,
            p = r ? -1 : 1,
            f = e[t + l];
          for (
            l += p, s = f & ((1 << -h) - 1), f >>= -h, h += a;
            h > 0;
            s = 256 * s + e[t + l], l += p, h -= 8
          );
          for (
            o = s & ((1 << -h) - 1), s >>= -h, h += n;
            h > 0;
            o = 256 * o + e[t + l], l += p, h -= 8
          );
          if (0 === s) s = 1 - c;
          else {
            if (s === u) return o ? NaN : (f ? -1 : 1) * (1 / 0);
            (o += Math.pow(2, n)), (s -= c);
          }
          return (f ? -1 : 1) * o * Math.pow(2, s - n);
        }),
          (r.write = function (e, t, r, n, i, s) {
            var o,
              a,
              u,
              c = 8 * s - i - 1,
              h = (1 << c) - 1,
              l = h >> 1,
              p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              f = n ? 0 : s - 1,
              d = n ? 1 : -1,
              m = 0 > t || (0 === t && 0 > 1 / t) ? 1 : 0;
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((a = isNaN(t) ? 1 : 0), (o = h))
                  : ((o = Math.floor(Math.log(t) / Math.LN2)),
                    t * (u = Math.pow(2, -o)) < 1 && (o--, (u *= 2)),
                    (t += o + l >= 1 ? p / u : p * Math.pow(2, 1 - l)),
                    t * u >= 2 && (o++, (u /= 2)),
                    o + l >= h
                      ? ((a = 0), (o = h))
                      : o + l >= 1
                      ? ((a = (t * u - 1) * Math.pow(2, i)), (o += l))
                      : ((a = t * Math.pow(2, l - 1) * Math.pow(2, i)),
                        (o = 0)));
              i >= 8;
              e[r + f] = 255 & a, f += d, a /= 256, i -= 8
            );
            for (
              o = (o << i) | a, c += i;
              c > 0;
              e[r + f] = 255 & o, f += d, o /= 256, c -= 8
            );
            e[r + f - d] |= 128 * m;
          });
      },
      {},
    ],
    2: [
      function (e, t, r) {
        var n =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        !(function (e) {
          "use strict";
          function t(e) {
            var t = e.charCodeAt(0);
            return t === o || t === l
              ? 62
              : t === a || t === p
              ? 63
              : u > t
              ? -1
              : u + 10 > t
              ? t - u + 26 + 26
              : h + 26 > t
              ? t - h
              : c + 26 > t
              ? t - c + 26
              : void 0;
          }
          function r(e) {
            function r(e) {
              c[l++] = e;
            }
            var n, i, o, a, u, c;
            if (e.length % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var h = e.length;
            (u = "=" === e.charAt(h - 2) ? 2 : "=" === e.charAt(h - 1) ? 1 : 0),
              (c = new s((3 * e.length) / 4 - u)),
              (o = u > 0 ? e.length - 4 : e.length);
            var l = 0;
            for (n = 0, i = 0; o > n; n += 4, i += 3)
              (a =
                (t(e.charAt(n)) << 18) |
                (t(e.charAt(n + 1)) << 12) |
                (t(e.charAt(n + 2)) << 6) |
                t(e.charAt(n + 3))),
                r((16711680 & a) >> 16),
                r((65280 & a) >> 8),
                r(255 & a);
            return (
              2 === u
                ? ((a = (t(e.charAt(n)) << 2) | (t(e.charAt(n + 1)) >> 4)),
                  r(255 & a))
                : 1 === u &&
                  ((a =
                    (t(e.charAt(n)) << 10) |
                    (t(e.charAt(n + 1)) << 4) |
                    (t(e.charAt(n + 2)) >> 2)),
                  r((a >> 8) & 255),
                  r(255 & a)),
              c
            );
          }
          function i(e) {
            function t(e) {
              return n.charAt(e);
            }
            function r(e) {
              return (
                t((e >> 18) & 63) +
                t((e >> 12) & 63) +
                t((e >> 6) & 63) +
                t(63 & e)
              );
            }
            var i,
              s,
              o,
              a = e.length % 3,
              u = "";
            for (i = 0, o = e.length - a; o > i; i += 3)
              (s = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2]), (u += r(s));
            switch (a) {
              case 1:
                (s = e[e.length - 1]),
                  (u += t(s >> 2)),
                  (u += t((s << 4) & 63)),
                  (u += "==");
                break;
              case 2:
                (s = (e[e.length - 2] << 8) + e[e.length - 1]),
                  (u += t(s >> 10)),
                  (u += t((s >> 4) & 63)),
                  (u += t((s << 2) & 63)),
                  (u += "=");
            }
            return u;
          }
          var s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            o = "+".charCodeAt(0),
            a = "/".charCodeAt(0),
            u = "0".charCodeAt(0),
            c = "a".charCodeAt(0),
            h = "A".charCodeAt(0),
            l = "-".charCodeAt(0),
            p = "_".charCodeAt(0);
          (e.toByteArray = r), (e.fromByteArray = i);
        })("undefined" == typeof r ? (this.base64js = {}) : r);
      },
      {},
    ],
  },
  {},
  []
)),
  (_xamzrequire = (function t(e, r, n) {
    function i(o, a) {
      if (!r[o]) {
        if (!e[o]) {
          var u = "function" == typeof _xamzrequire && _xamzrequire;
          if (!a && u) return u(o, !0);
          if (s) return s(o, !0);
          var c = new Error("Cannot find module '" + o + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var h = (r[o] = { exports: {} });
        e[o][0].call(
          h.exports,
          function (t) {
            var r = e[o][1][t];
            return i(r ? r : t);
          },
          h,
          h.exports,
          t,
          e,
          r,
          n
        );
      }
      return r[o].exports;
    }
    for (
      var s = "function" == typeof _xamzrequire && _xamzrequire, o = 0;
      o < n.length;
      o++
    )
      i(n[o]);
    return i;
  })(
    {
      21: [
        function (e, t, r) {
          var n = e("./core");
          (n.apiLoader = function (e, t) {
            return n.apiLoader.services[e][t];
          }),
            (n.apiLoader.services = {}),
            (n.XML.Parser = e("./xml/browser_parser")),
            e("./http/xhr"),
            "undefined" != typeof window && (window.AWS = n),
            "undefined" != typeof t && (t.exports = n);
        },
        { "./core": 23, "./http/xhr": 37, "./xml/browser_parser": 82 },
      ],
      82: [
        function (e, t, r) {
          function n() {}
          function i(e, t) {
            switch ((t || (t = {}), t.type)) {
              case "structure":
                return s(e, t);
              case "map":
                return o(e, t);
              case "list":
                return a(e, t);
              case void 0:
              case null:
                return c(e);
              default:
                return u(e, t);
            }
          }
          function s(e, t) {
            var r = {};
            return null === e
              ? r
              : (h.each(t.members, function (t, n) {
                  if (n.isXmlAttribute) {
                    if (e.attributes.hasOwnProperty(n.name)) {
                      var s = e.attributes[n.name].value;
                      r[t] = i({ textContent: s }, n);
                    }
                  } else {
                    var o = n.flattened ? e : e.getElementsByTagName(n.name)[0];
                    o
                      ? (r[t] = i(o, n))
                      : n.flattened ||
                        "list" !== n.type ||
                        (r[t] = n.defaultValue);
                  }
                }),
                r);
          }
          function o(e, t) {
            for (
              var r = {},
                n = t.key.name || "key",
                s = t.value.name || "value",
                o = t.flattened ? t.name : "entry",
                a = e.firstElementChild;
              a;

            ) {
              if (a.nodeName === o) {
                var u = a.getElementsByTagName(n)[0].textContent,
                  c = a.getElementsByTagName(s)[0];
                r[u] = i(c, t.value);
              }
              a = a.nextElementSibling;
            }
            return r;
          }
          function a(e, t) {
            for (
              var r = [],
                n = t.flattened ? t.name : t.member.name || "member",
                s = e.firstElementChild;
              s;

            )
              s.nodeName === n && r.push(i(s, t.member)),
                (s = s.nextElementSibling);
            return r;
          }
          function u(e, t) {
            if (e.getAttribute) {
              var r = e.getAttribute("encoding");
              "base64" === r && (t = new l.create({ type: r }));
            }
            var n = e.textContent;
            return (
              "" === n && (n = null),
              "function" == typeof t.toType ? t.toType(n) : n
            );
          }
          function c(e) {
            if (void 0 === e || null === e) return "";
            if (!e.firstElementChild)
              return null === e.parentNode.parentNode
                ? {}
                : 0 === e.childNodes.length
                ? ""
                : e.textContent;
            for (
              var t = { type: "structure", members: {} },
                r = e.firstElementChild;
              r;

            ) {
              var n = r.nodeName;
              t.members.hasOwnProperty(n)
                ? (t.members[n].type = "list")
                : (t.members[n] = { name: n }),
                (r = r.nextElementSibling);
            }
            return s(e, t);
          }
          var h = e("../util"),
            l = e("../model/shape");
          (n.prototype.parse = function (e, t) {
            if ("" === e.replace(/^\s+/, "")) return {};
            var r, n;
            try {
              if (window.DOMParser) {
                try {
                  var s = new DOMParser();
                  r = s.parseFromString(e, "text/xml");
                } catch (o) {
                  throw h.error(new Error("Parse error in document"), {
                    originalError: o,
                  });
                }
                if (null === r.documentElement)
                  throw new Error("Cannot parse empty document.");
                var a = r.getElementsByTagName("parsererror")[0];
                if (
                  a &&
                  (a.parentNode === r || "body" === a.parentNode.nodeName)
                )
                  throw new Error(a.getElementsByTagName("div")[0].textContent);
              } else {
                if (!window.ActiveXObject)
                  throw new Error("Cannot load XML parser");
                if (
                  ((r = new window.ActiveXObject("Microsoft.XMLDOM")),
                  (r.async = !1),
                  !r.loadXML(e))
                )
                  throw new Error("Parse error in document");
              }
            } catch (u) {
              n = u;
            }
            if (r && r.documentElement && !n) {
              var c = i(r.documentElement, t),
                l = r.getElementsByTagName("ResponseMetadata")[0];
              return l && (c.ResponseMetadata = i(l, {})), c;
            }
            if (n) throw h.error(n || new Error(), { code: "XMLParserError" });
            return {};
          }),
            (t.exports = n);
        },
        { "../model/shape": 45, "../util": 81 },
      ],
      37: [
        function (e, t, r) {
          var n = e("../core"),
            i = e("events").EventEmitter;
          e("../http"),
            (n.XHRClient = n.util.inherit({
              handleRequest: function (e, t, r, s) {
                var o = this,
                  a = e.endpoint,
                  u = new i(),
                  c = a.protocol + "//" + a.hostname;
                80 !== a.port && 443 !== a.port && (c += ":" + a.port),
                  (c += e.path);
                var h = new XMLHttpRequest(),
                  l = !1;
                (e.stream = h),
                  h.addEventListener(
                    "readystatechange",
                    function () {
                      try {
                        if (0 === h.status) return;
                      } catch (e) {
                        return;
                      }
                      if (this.readyState >= this.HEADERS_RECEIVED && !l) {
                        try {
                          h.responseType = "arraybuffer";
                        } catch (e) {}
                        (u.statusCode = h.status),
                          (u.headers = o.parseHeaders(
                            h.getAllResponseHeaders()
                          )),
                          u.emit("headers", u.statusCode, u.headers),
                          (l = !0);
                      }
                      this.readyState === this.DONE && o.finishRequest(h, u);
                    },
                    !1
                  ),
                  h.upload.addEventListener("progress", function (e) {
                    u.emit("sendProgress", e);
                  }),
                  h.addEventListener(
                    "progress",
                    function (e) {
                      u.emit("receiveProgress", e);
                    },
                    !1
                  ),
                  h.addEventListener(
                    "timeout",
                    function () {
                      s(
                        n.util.error(new Error("Timeout"), {
                          code: "TimeoutError",
                        })
                      );
                    },
                    !1
                  ),
                  h.addEventListener(
                    "error",
                    function () {
                      s(
                        n.util.error(new Error("Network Failure"), {
                          code: "NetworkingError",
                        })
                      );
                    },
                    !1
                  ),
                  r(u),
                  h.open(e.method, c, t.xhrAsync !== !1),
                  n.util.each(e.headers, function (e, t) {
                    "Content-Length" !== e &&
                      "User-Agent" !== e &&
                      "Host" !== e &&
                      h.setRequestHeader(e, t);
                  }),
                  t.timeout && t.xhrAsync !== !1 && (h.timeout = t.timeout),
                  t.xhrWithCredentials && (h.withCredentials = !0);
                try {
                  h.send(e.body);
                } catch (p) {
                  if (!e.body || "object" != typeof e.body.buffer) throw p;
                  h.send(e.body.buffer);
                }
                return u;
              },
              parseHeaders: function (e) {
                var t = {};
                return (
                  n.util.arrayEach(e.split(/\r?\n/), function (e) {
                    var r = e.split(":", 1)[0],
                      n = e.substring(r.length + 2);
                    r.length > 0 && (t[r.toLowerCase()] = n);
                  }),
                  t
                );
              },
              finishRequest: function (e, t) {
                var r;
                if ("arraybuffer" === e.responseType && e.response) {
                  var i = e.response;
                  r = new n.util.Buffer(i.byteLength);
                  for (var s = new Uint8Array(i), o = 0; o < r.length; ++o)
                    r[o] = s[o];
                }
                try {
                  r ||
                    "string" != typeof e.responseText ||
                    (r = new n.util.Buffer(e.responseText));
                } catch (a) {}
                r && t.emit("data", r), t.emit("end");
              },
            })),
            (n.HttpClient.prototype = n.XHRClient.prototype),
            (n.HttpClient.streamsApiVersion = 1);
        },
        { "../core": 23, "../http": 36, events: 11 },
      ],
      11: [
        function (e, t, r) {
          function n() {
            (this._events = this._events || {}),
              (this._maxListeners = this._maxListeners || void 0);
          }
          function i(e) {
            return "function" == typeof e;
          }
          function s(e) {
            return "number" == typeof e;
          }
          function o(e) {
            return "object" == typeof e && null !== e;
          }
          function a(e) {
            return void 0 === e;
          }
          (t.exports = n),
            (n.EventEmitter = n),
            (n.prototype._events = void 0),
            (n.prototype._maxListeners = void 0),
            (n.defaultMaxListeners = 10),
            (n.prototype.setMaxListeners = function (e) {
              if (!s(e) || 0 > e || isNaN(e))
                throw TypeError("n must be a positive number");
              return (this._maxListeners = e), this;
            }),
            (n.prototype.emit = function (e) {
              var t, r, n, s, u, c;
              if (
                (this._events || (this._events = {}),
                "error" === e &&
                  (!this._events.error ||
                    (o(this._events.error) && !this._events.error.length)))
              ) {
                if (((t = arguments[1]), t instanceof Error)) throw t;
                throw TypeError('Uncaught, unspecified "error" event.');
              }
              if (((r = this._events[e]), a(r))) return !1;
              if (i(r))
                switch (arguments.length) {
                  case 1:
                    r.call(this);
                    break;
                  case 2:
                    r.call(this, arguments[1]);
                    break;
                  case 3:
                    r.call(this, arguments[1], arguments[2]);
                    break;
                  default:
                    for (
                      n = arguments.length, s = new Array(n - 1), u = 1;
                      n > u;
                      u++
                    )
                      s[u - 1] = arguments[u];
                    r.apply(this, s);
                }
              else if (o(r)) {
                for (
                  n = arguments.length, s = new Array(n - 1), u = 1;
                  n > u;
                  u++
                )
                  s[u - 1] = arguments[u];
                for (c = r.slice(), n = c.length, u = 0; n > u; u++)
                  c[u].apply(this, s);
              }
              return !0;
            }),
            (n.prototype.addListener = function (e, t) {
              var r;
              if (!i(t)) throw TypeError("listener must be a function");
              if (
                (this._events || (this._events = {}),
                this._events.newListener &&
                  this.emit("newListener", e, i(t.listener) ? t.listener : t),
                this._events[e]
                  ? o(this._events[e])
                    ? this._events[e].push(t)
                    : (this._events[e] = [this._events[e], t])
                  : (this._events[e] = t),
                o(this._events[e]) && !this._events[e].warned)
              ) {
                var r;
                (r = a(this._maxListeners)
                  ? n.defaultMaxListeners
                  : this._maxListeners),
                  r &&
                    r > 0 &&
                    this._events[e].length > r &&
                    ((this._events[e].warned = !0),
                    console.error(
                      "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                      this._events[e].length
                    ),
                    "function" == typeof console.trace && console.trace());
              }
              return this;
            }),
            (n.prototype.on = n.prototype.addListener),
            (n.prototype.once = function (e, t) {
              function r() {
                this.removeListener(e, r),
                  n || ((n = !0), t.apply(this, arguments));
              }
              if (!i(t)) throw TypeError("listener must be a function");
              var n = !1;
              return (r.listener = t), this.on(e, r), this;
            }),
            (n.prototype.removeListener = function (e, t) {
              var r, n, s, a;
              if (!i(t)) throw TypeError("listener must be a function");
              if (!this._events || !this._events[e]) return this;
              if (
                ((r = this._events[e]),
                (s = r.length),
                (n = -1),
                r === t || (i(r.listener) && r.listener === t))
              )
                delete this._events[e],
                  this._events.removeListener &&
                    this.emit("removeListener", e, t);
              else if (o(r)) {
                for (a = s; a-- > 0; )
                  if (r[a] === t || (r[a].listener && r[a].listener === t)) {
                    n = a;
                    break;
                  }
                if (0 > n) return this;
                1 === r.length
                  ? ((r.length = 0), delete this._events[e])
                  : r.splice(n, 1),
                  this._events.removeListener &&
                    this.emit("removeListener", e, t);
              }
              return this;
            }),
            (n.prototype.removeAllListeners = function (e) {
              var t, r;
              if (!this._events) return this;
              if (!this._events.removeListener)
                return (
                  0 === arguments.length
                    ? (this._events = {})
                    : this._events[e] && delete this._events[e],
                  this
                );
              if (0 === arguments.length) {
                for (t in this._events)
                  "removeListener" !== t && this.removeAllListeners(t);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = {}),
                  this
                );
              }
              if (((r = this._events[e]), i(r))) this.removeListener(e, r);
              else for (; r.length; ) this.removeListener(e, r[r.length - 1]);
              return delete this._events[e], this;
            }),
            (n.prototype.listeners = function (e) {
              var t;
              return (t =
                this._events && this._events[e]
                  ? i(this._events[e])
                    ? [this._events[e]]
                    : this._events[e].slice()
                  : []);
            }),
            (n.listenerCount = function (e, t) {
              var r;
              return (r =
                e._events && e._events[t]
                  ? i(e._events[t])
                    ? 1
                    : e._events[t].length
                  : 0);
            });
        },
        {},
      ],
    },
    {},
    [21]
  ));
(AWS.apiLoader.services.cognitoidentity = {}),
  (AWS.CognitoIdentity = AWS.Service.defineService("cognitoidentity", [
    "2014-06-30",
  ])),
  (_xamzrequire = (function e(t, n, r) {
    function i(u, a) {
      if (!n[u]) {
        if (!t[u]) {
          var c = "function" == typeof _xamzrequire && _xamzrequire;
          if (!a && c) return c(u, !0);
          if (o) return o(u, !0);
          var d = new Error("Cannot find module '" + u + "'");
          throw ((d.code = "MODULE_NOT_FOUND"), d);
        }
        var f = (n[u] = { exports: {} });
        t[u][0].call(
          f.exports,
          function (e) {
            var n = t[u][1][e];
            return i(n ? n : e);
          },
          f,
          f.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[u].exports;
    }
    for (
      var o = "function" == typeof _xamzrequire && _xamzrequire, u = 0;
      u < r.length;
      u++
    )
      i(r[u]);
    return i;
  })(
    {
      63: [
        function (e, t, n) {
          var r = e("../core");
          r.util.update(r.CognitoIdentity.prototype, {
            getOpenIdToken: function (e, t) {
              return this.makeUnauthenticatedRequest("getOpenIdToken", e, t);
            },
            getId: function (e, t) {
              return this.makeUnauthenticatedRequest("getId", e, t);
            },
            getCredentialsForIdentity: function (e, t) {
              return this.makeUnauthenticatedRequest(
                "getCredentialsForIdentity",
                e,
                t
              );
            },
          });
        },
        { "../core": 23 },
      ],
    },
    {},
    [63]
  ));
AWS.apiLoader.services.cognitoidentity["2014-06-30"] = {
  version: "2.0",
  metadata: {
    apiVersion: "2014-06-30",
    endpointPrefix: "cognito-identity",
    jsonVersion: "1.1",
    serviceFullName: "Amazon Cognito Identity",
    signatureVersion: "v4",
    targetPrefix: "AWSCognitoIdentityService",
    protocol: "json",
  },
  operations: {
    CreateIdentityPool: {
      input: {
        type: "structure",
        required: ["IdentityPoolName", "AllowUnauthenticatedIdentities"],
        members: {
          IdentityPoolName: {},
          AllowUnauthenticatedIdentities: { type: "boolean" },
          SupportedLoginProviders: { shape: "S4" },
          DeveloperProviderName: {},
          OpenIdConnectProviderARNs: { shape: "S8" },
        },
      },
      output: { shape: "Sa" },
      http: {},
    },
    DeleteIdentities: {
      input: {
        type: "structure",
        required: ["IdentityIdsToDelete"],
        members: { IdentityIdsToDelete: { type: "list", member: {} } },
      },
      output: {
        type: "structure",
        members: {
          UnprocessedIdentityIds: {
            type: "list",
            member: {
              type: "structure",
              members: { IdentityId: {}, ErrorCode: {} },
            },
          },
        },
      },
      http: {},
    },
    DeleteIdentityPool: {
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: { IdentityPoolId: {} },
      },
      http: {},
    },
    DescribeIdentity: {
      input: {
        type: "structure",
        required: ["IdentityId"],
        members: { IdentityId: {} },
      },
      output: { shape: "Sl" },
      http: {},
    },
    DescribeIdentityPool: {
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: { IdentityPoolId: {} },
      },
      output: { shape: "Sa" },
      http: {},
    },
    GetCredentialsForIdentity: {
      input: {
        type: "structure",
        required: ["IdentityId"],
        members: { IdentityId: {}, Logins: { shape: "Sq" } },
      },
      output: {
        type: "structure",
        members: {
          IdentityId: {},
          Credentials: {
            type: "structure",
            members: {
              AccessKeyId: {},
              SecretKey: {},
              SessionToken: {},
              Expiration: { type: "timestamp" },
            },
          },
        },
      },
      http: {},
    },
    GetId: {
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: { AccountId: {}, IdentityPoolId: {}, Logins: { shape: "Sq" } },
      },
      output: { type: "structure", members: { IdentityId: {} } },
      http: {},
    },
    GetIdentityPoolRoles: {
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: { IdentityPoolId: {} },
      },
      output: {
        type: "structure",
        members: { IdentityPoolId: {}, Roles: { shape: "S12" } },
      },
      http: {},
    },
    GetOpenIdToken: {
      input: {
        type: "structure",
        required: ["IdentityId"],
        members: { IdentityId: {}, Logins: { shape: "Sq" } },
      },
      output: { type: "structure", members: { IdentityId: {}, Token: {} } },
      http: {},
    },
    GetOpenIdTokenForDeveloperIdentity: {
      input: {
        type: "structure",
        required: ["IdentityPoolId", "Logins"],
        members: {
          IdentityPoolId: {},
          IdentityId: {},
          Logins: { shape: "Sq" },
          TokenDuration: { type: "long" },
        },
      },
      output: { type: "structure", members: { IdentityId: {}, Token: {} } },
      http: {},
    },
    ListIdentities: {
      input: {
        type: "structure",
        required: ["IdentityPoolId", "MaxResults"],
        members: {
          IdentityPoolId: {},
          MaxResults: { type: "integer" },
          NextToken: {},
          HideDisabled: { type: "boolean" },
        },
      },
      output: {
        type: "structure",
        members: {
          IdentityPoolId: {},
          Identities: { type: "list", member: { shape: "Sl" } },
          NextToken: {},
        },
      },
      http: {},
    },
    ListIdentityPools: {
      input: {
        type: "structure",
        required: ["MaxResults"],
        members: { MaxResults: { type: "integer" }, NextToken: {} },
      },
      output: {
        type: "structure",
        members: {
          IdentityPools: {
            type: "list",
            member: {
              type: "structure",
              members: { IdentityPoolId: {}, IdentityPoolName: {} },
            },
          },
          NextToken: {},
        },
      },
      http: {},
    },
    LookupDeveloperIdentity: {
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: {
          IdentityPoolId: {},
          IdentityId: {},
          DeveloperUserIdentifier: {},
          MaxResults: { type: "integer" },
          NextToken: {},
        },
      },
      output: {
        type: "structure",
        members: {
          IdentityId: {},
          DeveloperUserIdentifierList: { type: "list", member: {} },
          NextToken: {},
        },
      },
      http: {},
    },
    MergeDeveloperIdentities: {
      input: {
        type: "structure",
        required: [
          "SourceUserIdentifier",
          "DestinationUserIdentifier",
          "DeveloperProviderName",
          "IdentityPoolId",
        ],
        members: {
          SourceUserIdentifier: {},
          DestinationUserIdentifier: {},
          DeveloperProviderName: {},
          IdentityPoolId: {},
        },
      },
      output: { type: "structure", members: { IdentityId: {} } },
      http: {},
    },
    SetIdentityPoolRoles: {
      input: {
        type: "structure",
        required: ["IdentityPoolId", "Roles"],
        members: { IdentityPoolId: {}, Roles: { shape: "S12" } },
      },
      http: {},
    },
    UnlinkDeveloperIdentity: {
      input: {
        type: "structure",
        required: [
          "IdentityId",
          "IdentityPoolId",
          "DeveloperProviderName",
          "DeveloperUserIdentifier",
        ],
        members: {
          IdentityId: {},
          IdentityPoolId: {},
          DeveloperProviderName: {},
          DeveloperUserIdentifier: {},
        },
      },
      http: {},
    },
    UnlinkIdentity: {
      input: {
        type: "structure",
        required: ["IdentityId", "Logins", "LoginsToRemove"],
        members: {
          IdentityId: {},
          Logins: { shape: "Sq" },
          LoginsToRemove: { shape: "Sm" },
        },
      },
      http: {},
    },
    UpdateIdentityPool: {
      input: { shape: "Sa" },
      output: { shape: "Sa" },
      http: {},
    },
  },
  shapes: {
    S4: { type: "map", key: {}, value: {} },
    S8: { type: "list", member: {} },
    Sa: {
      type: "structure",
      required: [
        "IdentityPoolId",
        "IdentityPoolName",
        "AllowUnauthenticatedIdentities",
      ],
      members: {
        IdentityPoolId: {},
        IdentityPoolName: {},
        AllowUnauthenticatedIdentities: { type: "boolean" },
        SupportedLoginProviders: { shape: "S4" },
        DeveloperProviderName: {},
        OpenIdConnectProviderARNs: { shape: "S8" },
      },
    },
    Sl: {
      type: "structure",
      members: {
        IdentityId: {},
        Logins: { shape: "Sm" },
        CreationDate: { type: "timestamp" },
        LastModifiedDate: { type: "timestamp" },
      },
    },
    Sm: { type: "list", member: {} },
    Sq: { type: "map", key: {}, value: {} },
    S12: { type: "map", key: {}, value: {} },
  },
};
(AWS.apiLoader.services.cognitosync = {}),
  (AWS.CognitoSync = AWS.Service.defineService("cognitosync", ["2014-06-30"]));
AWS.apiLoader.services.cognitosync["2014-06-30"] = {
  version: "2.0",
  metadata: {
    apiVersion: "2014-06-30",
    endpointPrefix: "cognito-sync",
    jsonVersion: "1.1",
    serviceFullName: "Amazon Cognito Sync",
    signatureVersion: "v4",
    protocol: "rest-json",
  },
  operations: {
    BulkPublish: {
      http: {
        requestUri: "/identitypools/{IdentityPoolId}/bulkpublish",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
        },
      },
      output: { type: "structure", members: { IdentityPoolId: {} } },
    },
    DeleteDataset: {
      http: {
        method: "DELETE",
        requestUri:
          "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId", "IdentityId", "DatasetName"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
          DatasetName: { location: "uri", locationName: "DatasetName" },
        },
      },
      output: { type: "structure", members: { Dataset: { shape: "S8" } } },
    },
    DescribeDataset: {
      http: {
        method: "GET",
        requestUri:
          "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId", "IdentityId", "DatasetName"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
          DatasetName: { location: "uri", locationName: "DatasetName" },
        },
      },
      output: { type: "structure", members: { Dataset: { shape: "S8" } } },
    },
    DescribeIdentityPoolUsage: {
      http: {
        method: "GET",
        requestUri: "/identitypools/{IdentityPoolId}",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
        },
      },
      output: {
        type: "structure",
        members: { IdentityPoolUsage: { shape: "Sg" } },
      },
    },
    DescribeIdentityUsage: {
      http: {
        method: "GET",
        requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId", "IdentityId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
        },
      },
      output: {
        type: "structure",
        members: {
          IdentityUsage: {
            type: "structure",
            members: {
              IdentityId: {},
              IdentityPoolId: {},
              LastModifiedDate: { type: "timestamp" },
              DatasetCount: { type: "integer" },
              DataStorage: { type: "long" },
            },
          },
        },
      },
    },
    GetBulkPublishDetails: {
      http: {
        requestUri: "/identitypools/{IdentityPoolId}/getBulkPublishDetails",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
        },
      },
      output: {
        type: "structure",
        members: {
          IdentityPoolId: {},
          BulkPublishStartTime: { type: "timestamp" },
          BulkPublishCompleteTime: { type: "timestamp" },
          BulkPublishStatus: {},
          FailureMessage: {},
        },
      },
    },
    GetCognitoEvents: {
      http: {
        method: "GET",
        requestUri: "/identitypools/{IdentityPoolId}/events",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
        },
      },
      output: { type: "structure", members: { Events: { shape: "Sq" } } },
    },
    GetIdentityPoolConfiguration: {
      http: {
        method: "GET",
        requestUri: "/identitypools/{IdentityPoolId}/configuration",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
        },
      },
      output: {
        type: "structure",
        members: {
          IdentityPoolId: {},
          PushSync: { shape: "Sv" },
          CognitoStreams: { shape: "Sz" },
        },
      },
    },
    ListDatasets: {
      http: {
        method: "GET",
        requestUri:
          "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityId", "IdentityPoolId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
          NextToken: { location: "querystring", locationName: "nextToken" },
          MaxResults: {
            location: "querystring",
            locationName: "maxResults",
            type: "integer",
          },
        },
      },
      output: {
        type: "structure",
        members: {
          Datasets: { type: "list", member: { shape: "S8" } },
          Count: { type: "integer" },
          NextToken: {},
        },
      },
    },
    ListIdentityPoolUsage: {
      http: { method: "GET", requestUri: "/identitypools", responseCode: 200 },
      input: {
        type: "structure",
        members: {
          NextToken: { location: "querystring", locationName: "nextToken" },
          MaxResults: {
            location: "querystring",
            locationName: "maxResults",
            type: "integer",
          },
        },
      },
      output: {
        type: "structure",
        members: {
          IdentityPoolUsages: { type: "list", member: { shape: "Sg" } },
          MaxResults: { type: "integer" },
          Count: { type: "integer" },
          NextToken: {},
        },
      },
    },
    ListRecords: {
      http: {
        method: "GET",
        requestUri:
          "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId", "IdentityId", "DatasetName"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
          DatasetName: { location: "uri", locationName: "DatasetName" },
          LastSyncCount: {
            location: "querystring",
            locationName: "lastSyncCount",
            type: "long",
          },
          NextToken: { location: "querystring", locationName: "nextToken" },
          MaxResults: {
            location: "querystring",
            locationName: "maxResults",
            type: "integer",
          },
          SyncSessionToken: {
            location: "querystring",
            locationName: "syncSessionToken",
          },
        },
      },
      output: {
        type: "structure",
        members: {
          Records: { shape: "S1c" },
          NextToken: {},
          Count: { type: "integer" },
          DatasetSyncCount: { type: "long" },
          LastModifiedBy: {},
          MergedDatasetNames: { type: "list", member: {} },
          DatasetExists: { type: "boolean" },
          DatasetDeletedAfterRequestedSyncCount: { type: "boolean" },
          SyncSessionToken: {},
        },
      },
    },
    RegisterDevice: {
      http: {
        requestUri:
          "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId", "IdentityId", "Platform", "Token"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
          Platform: {},
          Token: {},
        },
      },
      output: { type: "structure", members: { DeviceId: {} } },
    },
    SetCognitoEvents: {
      http: {
        requestUri: "/identitypools/{IdentityPoolId}/events",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId", "Events"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          Events: { shape: "Sq" },
        },
      },
    },
    SetIdentityPoolConfiguration: {
      http: {
        requestUri: "/identitypools/{IdentityPoolId}/configuration",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          PushSync: { shape: "Sv" },
          CognitoStreams: { shape: "Sz" },
        },
      },
      output: {
        type: "structure",
        members: {
          IdentityPoolId: {},
          PushSync: { shape: "Sv" },
          CognitoStreams: { shape: "Sz" },
        },
      },
    },
    SubscribeToDataset: {
      http: {
        requestUri:
          "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId", "IdentityId", "DatasetName", "DeviceId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
          DatasetName: { location: "uri", locationName: "DatasetName" },
          DeviceId: { location: "uri", locationName: "DeviceId" },
        },
      },
      output: { type: "structure", members: {} },
    },
    UnsubscribeFromDataset: {
      http: {
        method: "DELETE",
        requestUri:
          "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["IdentityPoolId", "IdentityId", "DatasetName", "DeviceId"],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
          DatasetName: { location: "uri", locationName: "DatasetName" },
          DeviceId: { location: "uri", locationName: "DeviceId" },
        },
      },
      output: { type: "structure", members: {} },
    },
    UpdateRecords: {
      http: {
        requestUri:
          "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: [
          "IdentityPoolId",
          "IdentityId",
          "DatasetName",
          "SyncSessionToken",
        ],
        members: {
          IdentityPoolId: { location: "uri", locationName: "IdentityPoolId" },
          IdentityId: { location: "uri", locationName: "IdentityId" },
          DatasetName: { location: "uri", locationName: "DatasetName" },
          DeviceId: {},
          RecordPatches: {
            type: "list",
            member: {
              type: "structure",
              required: ["Op", "Key", "SyncCount"],
              members: {
                Op: {},
                Key: {},
                Value: {},
                SyncCount: { type: "long" },
                DeviceLastModifiedDate: { type: "timestamp" },
              },
            },
          },
          SyncSessionToken: {},
          ClientContext: {
            location: "header",
            locationName: "x-amz-Client-Context",
          },
        },
      },
      output: { type: "structure", members: { Records: { shape: "S1c" } } },
    },
  },
  shapes: {
    S8: {
      type: "structure",
      members: {
        IdentityId: {},
        DatasetName: {},
        CreationDate: { type: "timestamp" },
        LastModifiedDate: { type: "timestamp" },
        LastModifiedBy: {},
        DataStorage: { type: "long" },
        NumRecords: { type: "long" },
      },
    },
    Sg: {
      type: "structure",
      members: {
        IdentityPoolId: {},
        SyncSessionsCount: { type: "long" },
        DataStorage: { type: "long" },
        LastModifiedDate: { type: "timestamp" },
      },
    },
    Sq: { type: "map", key: {}, value: {} },
    Sv: {
      type: "structure",
      members: { ApplicationArns: { type: "list", member: {} }, RoleArn: {} },
    },
    Sz: {
      type: "structure",
      members: { StreamName: {}, RoleArn: {}, StreamingStatus: {} },
    },
    S1c: {
      type: "list",
      member: {
        type: "structure",
        members: {
          Key: {},
          Value: {},
          SyncCount: { type: "long" },
          LastModifiedDate: { type: "timestamp" },
          LastModifiedBy: {},
          DeviceLastModifiedDate: { type: "timestamp" },
        },
      },
    },
  },
};
(AWS.apiLoader.services.dynamodb = {}),
  (AWS.DynamoDB = AWS.Service.defineService("dynamodb", [
    "2011-12-05",
    "2012-08-10",
  ])),
  (_xamzrequire = (function t(e, r, n) {
    function i(u, o) {
      if (!r[u]) {
        if (!e[u]) {
          var s = "function" == typeof _xamzrequire && _xamzrequire;
          if (!o && s) return s(u, !0);
          if (a) return a(u, !0);
          var c = new Error("Cannot find module '" + u + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var p = (r[u] = { exports: {} });
        e[u][0].call(
          p.exports,
          function (t) {
            var r = e[u][1][t];
            return i(r ? r : t);
          },
          p,
          p.exports,
          t,
          e,
          r,
          n
        );
      }
      return r[u].exports;
    }
    for (
      var a = "function" == typeof _xamzrequire && _xamzrequire, u = 0;
      u < n.length;
      u++
    )
      i(n[u]);
    return i;
  })(
    {
      64: [
        function (t, e, r) {
          var n = t("../core");
          t("../dynamodb/document_client"),
            n.util.update(n.DynamoDB.prototype, {
              setupRequestListeners: function (t) {
                t.service.config.dynamoDbCrc32 &&
                  t.addListener("extractData", this.checkCrc32);
              },
              checkCrc32: function (t) {
                t.httpResponse.streaming ||
                  t.request.service.crc32IsValid(t) ||
                  (t.error = n.util.error(new Error(), {
                    code: "CRC32CheckFailed",
                    message: "CRC32 integrity check failed",
                    retryable: !0,
                  }));
              },
              crc32IsValid: function (t) {
                var e = t.httpResponse.headers["x-amz-crc32"];
                return e
                  ? parseInt(e, 10) === n.util.crypto.crc32(t.httpResponse.body)
                  : !0;
              },
              defaultRetryCount: 10,
              retryDelays: function () {
                for (var t = this.numRetries(), e = [], r = 0; t > r; ++r)
                  0 === r ? e.push(0) : e.push(50 * Math.pow(2, r - 1));
                return e;
              },
            });
        },
        { "../core": 23, "../dynamodb/document_client": 31 },
      ],
      31: [
        function (t, e, r) {
          var n = t("../core"),
            i = t("./translator"),
            a = t("./set");
          (n.DynamoDB.DocumentClient = n.util.inherit({
            constructor: function (t) {
              var e = this;
              (e.options = t || {}), e.configure(e.options);
            },
            configure: function (t) {
              var e = this;
              (e.service = t.service),
                e.bindServiceObject(t),
                (e.attrValue =
                  e.service.api.operations.putItem.input.members.Item.value.shape);
            },
            bindServiceObject: function (t) {
              var e = this;
              if (((t = t || {}), e.service)) {
                var r = n.util.copy(e.service.config);
                (e.service = new e.service.constructor.__super__(r)),
                  (e.service.config.params = n.util.merge(
                    e.service.config.params || {},
                    t.params
                  ));
              } else e.service = new n.DynamoDB(t);
            },
            batchGet: function (t, e) {
              var r = this,
                n = r.getTranslator(),
                i = r.service.api.operations.batchGetItem.input,
                a = r.service.api.operations.batchGetItem.output,
                u = n.translateInput(t, i),
                o = r.service.batchGetItem(u);
              return (
                r.setupRequest(o, a, n), "function" == typeof e && o.send(e), o
              );
            },
            batchWrite: function (t, e) {
              var r = this,
                n = r.getTranslator(),
                i = r.service.api.operations.batchWriteItem.input,
                a = r.service.api.operations.batchWriteItem.output,
                u = n.translateInput(t, i),
                o = r.service.batchWriteItem(u);
              return (
                r.setupRequest(o, a, n), "function" == typeof e && o.send(e), o
              );
            },
            delete: function (t, e) {
              var r = this,
                n = r.getTranslator(),
                i = r.service.api.operations.deleteItem.input,
                a = r.service.api.operations.deleteItem.output,
                u = n.translateInput(t, i),
                o = r.service.deleteItem(u);
              return (
                r.setupRequest(o, a, n), "function" == typeof e && o.send(e), o
              );
            },
            get: function (t, e) {
              var r = this,
                n = r.getTranslator(),
                i = r.service.api.operations.getItem.input,
                a = r.service.api.operations.getItem.output,
                u = n.translateInput(t, i),
                o = r.service.getItem(u);
              return (
                r.setupRequest(o, a, n), "function" == typeof e && o.send(e), o
              );
            },
            put: function (t, e) {
              var r = this,
                n = r.getTranslator(),
                i = r.service.api.operations.putItem.input,
                a = r.service.api.operations.putItem.output,
                u = n.translateInput(t, i),
                o = r.service.putItem(u);
              return (
                r.setupRequest(o, a, n), "function" == typeof e && o.send(e), o
              );
            },
            update: function (t, e) {
              var r = this,
                n = r.getTranslator(),
                i = r.service.api.operations.updateItem.input,
                a = r.service.api.operations.updateItem.output,
                u = n.translateInput(t, i),
                o = r.service.updateItem(u);
              return (
                r.setupRequest(o, a, n), "function" == typeof e && o.send(e), o
              );
            },
            scan: function (t, e) {
              var r = this,
                n = r.getTranslator(),
                i = r.service.api.operations.scan.input,
                a = r.service.api.operations.scan.output,
                u = n.translateInput(t, i),
                o = r.service.scan(u);
              return (
                r.setupRequest(o, a, n), "function" == typeof e && o.send(e), o
              );
            },
            query: function (t, e) {
              var r = this,
                n = r.getTranslator(),
                i = r.service.api.operations.query.input,
                a = r.service.api.operations.query.output,
                u = n.translateInput(t, i),
                o = r.service.query(u);
              return (
                r.setupRequest(o, a, n), "function" == typeof e && o.send(e), o
              );
            },
            createSet: function (t, e) {
              return (e = e || {}), new a(t, e);
            },
            getTranslator: function () {
              return new i({ attrValue: this.attrValue });
            },
            setupRequest: function (t, e, r) {
              t.on("extractData", function (t) {
                var n = r.translateOutput(t.data, e);
                t.data = n;
              });
            },
          })),
            (e.exports = n.DynamoDB.DocumentClient);
        },
        { "../core": 23, "./set": 32, "./translator": 33 },
      ],
      33: [
        function (t, e, r) {
          var n = t("../core").util,
            i = t("./converter"),
            a = function (t) {
              (t = t || {}), (this.attrValue = t.attrValue);
            };
          (a.prototype.translateInput = function (t, e) {
            return (this.mode = "input"), this.translate(t, e);
          }),
            (a.prototype.translateOutput = function (t, e) {
              return (this.mode = "output"), this.translate(t, e);
            }),
            (a.prototype.translate = function (t, e) {
              var r = this;
              if (!e || void 0 === t) return void 0;
              if (e.shape === r.attrValue) return i[r.mode](t);
              switch (e.type) {
                case "structure":
                  return r.translateStructure(t, e);
                case "map":
                  return r.translateMap(t, e);
                case "list":
                  return r.translateList(t, e);
                default:
                  return r.translateScalar(t, e);
              }
            }),
            (a.prototype.translateStructure = function (t, e) {
              var r = this;
              if (null == t) return void 0;
              var i = {};
              return (
                n.each(t, function (t, n) {
                  var a = e.members[t];
                  if (a) {
                    var u = r.translate(n, a);
                    void 0 !== u && (i[t] = u);
                  }
                }),
                i
              );
            }),
            (a.prototype.translateList = function (t, e) {
              var r = this;
              if (null == t) return void 0;
              var i = [];
              return (
                n.arrayEach(t, function (t) {
                  var n = r.translate(t, e.member);
                  void 0 === n ? i.push(null) : i.push(n);
                }),
                i
              );
            }),
            (a.prototype.translateMap = function (t, e) {
              var r = this;
              if (null == t) return void 0;
              var i = {};
              return (
                n.each(t, function (t, n) {
                  var a = r.translate(n, e.value);
                  void 0 === a ? (i[t] = null) : (i[t] = a);
                }),
                i
              );
            }),
            (a.prototype.translateScalar = function (t, e) {
              return e.toType(t);
            }),
            (e.exports = a);
        },
        { "../core": 23, "./converter": 30 },
      ],
      30: [
        function (t, e, r) {
          function n(t) {
            if ("Object" === o(t)) {
              var e = { M: {} };
              for (var r in t) e.M[r] = n(t[r]);
              return e;
            }
            if ("Array" === o(t)) {
              for (var a = { L: [] }, u = 0; u < t.length; u++)
                a.L.push(n(t[u]));
              return a;
            }
            return "Set" === o(t)
              ? i(t)
              : "String" === o(t)
              ? { S: t }
              : "Number" === o(t)
              ? { N: t.toString() }
              : "Binary" === o(t)
              ? { B: t }
              : "Boolean" === o(t)
              ? { BOOL: t }
              : "null" === o(t)
              ? { NULL: !0 }
              : void 0;
          }
          function i(t) {
            var e = {};
            switch (t.type) {
              case "String":
                e.SS = t.values;
                break;
              case "Binary":
                e.BS = t.values;
                break;
              case "Number":
                e.NS = t.values.map(function (t) {
                  return t.toString();
                });
            }
            return e;
          }
          function a(t) {
            var e, r, n;
            for (var i in t) {
              var o = t[i];
              if ("M" === i) {
                r = {};
                for (var c in o) r[c] = a(o[c]);
                return r;
              }
              if ("L" === i) {
                for (e = [], n = 0; n < o.length; n++) e.push(a(o[n]));
                return e;
              }
              if ("SS" === i) {
                for (e = [], n = 0; n < o.length; n++) e.push(o[n] + "");
                return new s(e);
              }
              if ("NS" === i) {
                for (e = [], n = 0; n < o.length; n++) e.push(Number(o[n]));
                return new s(e);
              }
              if ("BS" === i) {
                for (e = [], n = 0; n < o.length; n++)
                  e.push(new u.Buffer(o[n]));
                return new s(e);
              }
              if ("S" === i) return o + "";
              if ("N" === i) return Number(o);
              if ("B" === i) return new u.Buffer(o);
              if ("BOOL" === i) return "true" === o || "TRUE" === o || o === !0;
              if ("NULL" === i) return null;
            }
          }
          var u = t("../core").util,
            o = t("./types").typeOf,
            s = t("./set");
          e.exports = { input: n, output: a };
        },
        { "../core": 23, "./set": 32, "./types": 34 },
      ],
      32: [
        function (t, e, r) {
          var n = t("../core").util,
            i = t("./types").typeOf,
            a = n.inherit({
              constructor: function (t, e) {
                (e = e || {}), this.initialize(t, e.validate);
              },
              initialize: function (t, e) {
                var r = this;
                (r.values = [].concat(t)), r.detectType(), e && r.validate();
              },
              detectType: function () {
                var t = this,
                  e = t.values[0];
                if (e)
                  if ("String" === i(e)) t.type = "String";
                  else if ("Number" === i(e)) t.type = "Number";
                  else {
                    if ("Binary" !== i(e))
                      throw n.error(new Error(), {
                        code: "InvalidSetType",
                        message:
                          "Sets can contain string, number, or binary values",
                      });
                    t.type = "Binary";
                  }
              },
              validate: function () {
                for (
                  var t = this, e = t.values.length, r = t.values, a = 0;
                  e > a;
                  a++
                )
                  if (i(r[a]) !== t.type)
                    throw n.error(new Error(), {
                      code: "InvalidType",
                      message: t.type + " Set contains " + i(r[a]) + " value",
                    });
              },
            });
          e.exports = a;
        },
        { "../core": 23, "./types": 34 },
      ],
      34: [
        function (t, e, r) {
          function n(t) {
            return null === t && "object" == typeof t
              ? "null"
              : void 0 !== t && i(t)
              ? "Binary"
              : void 0 !== t && t.constructor
              ? a.typeName(t.constructor)
              : "undefined";
          }
          function i(t) {
            var e = [
              "Buffer",
              "File",
              "Blob",
              "ArrayBuffer",
              "DataView",
              "Int8Array",
              "Uint8Array",
              "Uint8ClampedArray",
              "Int16Array",
              "Uint16Array",
              "Int32Array",
              "Uint32Array",
              "Float32Array",
              "Float64Array",
            ];
            if (a.isNode()) {
              var r = a.nodeRequire("stream").Stream;
              if (a.Buffer.isBuffer(t) || t instanceof r) return !0;
            } else
              for (var n = 0; n < e.length; n++)
                if (void 0 !== t && t.constructor) {
                  if (a.isType(t, e[n])) return !0;
                  if (a.typeName(t.constructor) === e[n]) return !0;
                }
            return !1;
          }
          var a = t("../core").util;
          e.exports = { typeOf: n, isBinary: i };
        },
        { "../core": 23 },
      ],
    },
    {},
    [64]
  ));
AWS.apiLoader.services.dynamodb["2012-08-10"] = {
  version: "2.0",
  metadata: {
    apiVersion: "2012-08-10",
    endpointPrefix: "dynamodb",
    jsonVersion: "1.0",
    serviceAbbreviation: "DynamoDB",
    serviceFullName: "Amazon DynamoDB",
    signatureVersion: "v4",
    targetPrefix: "DynamoDB_20120810",
    protocol: "json",
  },
  operations: {
    BatchGetItem: {
      input: {
        type: "structure",
        required: ["RequestItems"],
        members: { RequestItems: { shape: "S2" }, ReturnConsumedCapacity: {} },
      },
      output: {
        type: "structure",
        members: {
          Responses: { type: "map", key: {}, value: { shape: "Sr" } },
          UnprocessedKeys: { shape: "S2" },
          ConsumedCapacity: { shape: "St" },
        },
      },
      http: {},
    },
    BatchWriteItem: {
      input: {
        type: "structure",
        required: ["RequestItems"],
        members: {
          RequestItems: { shape: "S10" },
          ReturnConsumedCapacity: {},
          ReturnItemCollectionMetrics: {},
        },
      },
      output: {
        type: "structure",
        members: {
          UnprocessedItems: { shape: "S10" },
          ItemCollectionMetrics: {
            type: "map",
            key: {},
            value: { type: "list", member: { shape: "S1a" } },
          },
          ConsumedCapacity: { shape: "St" },
        },
      },
      http: {},
    },
    CreateTable: {
      input: {
        type: "structure",
        required: [
          "AttributeDefinitions",
          "TableName",
          "KeySchema",
          "ProvisionedThroughput",
        ],
        members: {
          AttributeDefinitions: { shape: "S1f" },
          TableName: {},
          KeySchema: { shape: "S1j" },
          LocalSecondaryIndexes: {
            type: "list",
            member: {
              type: "structure",
              required: ["IndexName", "KeySchema", "Projection"],
              members: {
                IndexName: {},
                KeySchema: { shape: "S1j" },
                Projection: { shape: "S1o" },
              },
            },
          },
          GlobalSecondaryIndexes: {
            type: "list",
            member: {
              type: "structure",
              required: [
                "IndexName",
                "KeySchema",
                "Projection",
                "ProvisionedThroughput",
              ],
              members: {
                IndexName: {},
                KeySchema: { shape: "S1j" },
                Projection: { shape: "S1o" },
                ProvisionedThroughput: { shape: "S1u" },
              },
            },
          },
          ProvisionedThroughput: { shape: "S1u" },
          StreamSpecification: { shape: "S1w" },
        },
      },
      output: {
        type: "structure",
        members: { TableDescription: { shape: "S20" } },
      },
      http: {},
    },
    DeleteItem: {
      input: {
        type: "structure",
        required: ["TableName", "Key"],
        members: {
          TableName: {},
          Key: { shape: "S6" },
          Expected: { shape: "S2e" },
          ConditionalOperator: {},
          ReturnValues: {},
          ReturnConsumedCapacity: {},
          ReturnItemCollectionMetrics: {},
          ConditionExpression: {},
          ExpressionAttributeNames: { shape: "Sm" },
          ExpressionAttributeValues: { shape: "S2m" },
        },
      },
      output: {
        type: "structure",
        members: {
          Attributes: { shape: "Ss" },
          ConsumedCapacity: { shape: "Su" },
          ItemCollectionMetrics: { shape: "S1a" },
        },
      },
      http: {},
    },
    DeleteTable: {
      input: {
        type: "structure",
        required: ["TableName"],
        members: { TableName: {} },
      },
      output: {
        type: "structure",
        members: { TableDescription: { shape: "S20" } },
      },
      http: {},
    },
    DescribeTable: {
      input: {
        type: "structure",
        required: ["TableName"],
        members: { TableName: {} },
      },
      output: { type: "structure", members: { Table: { shape: "S20" } } },
      http: {},
    },
    GetItem: {
      input: {
        type: "structure",
        required: ["TableName", "Key"],
        members: {
          TableName: {},
          Key: { shape: "S6" },
          AttributesToGet: { shape: "Sj" },
          ConsistentRead: { type: "boolean" },
          ReturnConsumedCapacity: {},
          ProjectionExpression: {},
          ExpressionAttributeNames: { shape: "Sm" },
        },
      },
      output: {
        type: "structure",
        members: { Item: { shape: "Ss" }, ConsumedCapacity: { shape: "Su" } },
      },
      http: {},
    },
    ListTables: {
      input: {
        type: "structure",
        members: { ExclusiveStartTableName: {}, Limit: { type: "integer" } },
      },
      output: {
        type: "structure",
        members: {
          TableNames: { type: "list", member: {} },
          LastEvaluatedTableName: {},
        },
      },
      http: {},
    },
    PutItem: {
      input: {
        type: "structure",
        required: ["TableName", "Item"],
        members: {
          TableName: {},
          Item: { shape: "S14" },
          Expected: { shape: "S2e" },
          ReturnValues: {},
          ReturnConsumedCapacity: {},
          ReturnItemCollectionMetrics: {},
          ConditionalOperator: {},
          ConditionExpression: {},
          ExpressionAttributeNames: { shape: "Sm" },
          ExpressionAttributeValues: { shape: "S2m" },
        },
      },
      output: {
        type: "structure",
        members: {
          Attributes: { shape: "Ss" },
          ConsumedCapacity: { shape: "Su" },
          ItemCollectionMetrics: { shape: "S1a" },
        },
      },
      http: {},
    },
    Query: {
      input: {
        type: "structure",
        required: ["TableName"],
        members: {
          TableName: {},
          IndexName: {},
          Select: {},
          AttributesToGet: { shape: "Sj" },
          Limit: { type: "integer" },
          ConsistentRead: { type: "boolean" },
          KeyConditions: { type: "map", key: {}, value: { shape: "S35" } },
          QueryFilter: { shape: "S36" },
          ConditionalOperator: {},
          ScanIndexForward: { type: "boolean" },
          ExclusiveStartKey: { shape: "S6" },
          ReturnConsumedCapacity: {},
          ProjectionExpression: {},
          FilterExpression: {},
          KeyConditionExpression: {},
          ExpressionAttributeNames: { shape: "Sm" },
          ExpressionAttributeValues: { shape: "S2m" },
        },
      },
      output: {
        type: "structure",
        members: {
          Items: { shape: "Sr" },
          Count: { type: "integer" },
          ScannedCount: { type: "integer" },
          LastEvaluatedKey: { shape: "S6" },
          ConsumedCapacity: { shape: "Su" },
        },
      },
      http: {},
    },
    Scan: {
      input: {
        type: "structure",
        required: ["TableName"],
        members: {
          TableName: {},
          IndexName: {},
          AttributesToGet: { shape: "Sj" },
          Limit: { type: "integer" },
          Select: {},
          ScanFilter: { shape: "S36" },
          ConditionalOperator: {},
          ExclusiveStartKey: { shape: "S6" },
          ReturnConsumedCapacity: {},
          TotalSegments: { type: "integer" },
          Segment: { type: "integer" },
          ProjectionExpression: {},
          FilterExpression: {},
          ExpressionAttributeNames: { shape: "Sm" },
          ExpressionAttributeValues: { shape: "S2m" },
          ConsistentRead: { type: "boolean" },
        },
      },
      output: {
        type: "structure",
        members: {
          Items: { shape: "Sr" },
          Count: { type: "integer" },
          ScannedCount: { type: "integer" },
          LastEvaluatedKey: { shape: "S6" },
          ConsumedCapacity: { shape: "Su" },
        },
      },
      http: {},
    },
    UpdateItem: {
      input: {
        type: "structure",
        required: ["TableName", "Key"],
        members: {
          TableName: {},
          Key: { shape: "S6" },
          AttributeUpdates: {
            type: "map",
            key: {},
            value: {
              type: "structure",
              members: { Value: { shape: "S8" }, Action: {} },
            },
          },
          Expected: { shape: "S2e" },
          ConditionalOperator: {},
          ReturnValues: {},
          ReturnConsumedCapacity: {},
          ReturnItemCollectionMetrics: {},
          UpdateExpression: {},
          ConditionExpression: {},
          ExpressionAttributeNames: { shape: "Sm" },
          ExpressionAttributeValues: { shape: "S2m" },
        },
      },
      output: {
        type: "structure",
        members: {
          Attributes: { shape: "Ss" },
          ConsumedCapacity: { shape: "Su" },
          ItemCollectionMetrics: { shape: "S1a" },
        },
      },
      http: {},
    },
    UpdateTable: {
      input: {
        type: "structure",
        required: ["TableName"],
        members: {
          AttributeDefinitions: { shape: "S1f" },
          TableName: {},
          ProvisionedThroughput: { shape: "S1u" },
          GlobalSecondaryIndexUpdates: {
            type: "list",
            member: {
              type: "structure",
              members: {
                Update: {
                  type: "structure",
                  required: ["IndexName", "ProvisionedThroughput"],
                  members: {
                    IndexName: {},
                    ProvisionedThroughput: { shape: "S1u" },
                  },
                },
                Create: {
                  type: "structure",
                  required: [
                    "IndexName",
                    "KeySchema",
                    "Projection",
                    "ProvisionedThroughput",
                  ],
                  members: {
                    IndexName: {},
                    KeySchema: { shape: "S1j" },
                    Projection: { shape: "S1o" },
                    ProvisionedThroughput: { shape: "S1u" },
                  },
                },
                Delete: {
                  type: "structure",
                  required: ["IndexName"],
                  members: { IndexName: {} },
                },
              },
            },
          },
          StreamSpecification: { shape: "S1w" },
        },
      },
      output: {
        type: "structure",
        members: { TableDescription: { shape: "S20" } },
      },
      http: {},
    },
  },
  shapes: {
    S2: {
      type: "map",
      key: {},
      value: {
        type: "structure",
        required: ["Keys"],
        members: {
          Keys: { type: "list", member: { shape: "S6" } },
          AttributesToGet: { shape: "Sj" },
          ConsistentRead: { type: "boolean" },
          ProjectionExpression: {},
          ExpressionAttributeNames: { shape: "Sm" },
        },
      },
    },
    S6: { type: "map", key: {}, value: { shape: "S8" } },
    S8: {
      type: "structure",
      members: {
        S: {},
        N: {},
        B: { type: "blob" },
        SS: { type: "list", member: {} },
        NS: { type: "list", member: {} },
        BS: { type: "list", member: { type: "blob" } },
        M: { type: "map", key: {}, value: { shape: "S8" } },
        L: { type: "list", member: { shape: "S8" } },
        NULL: { type: "boolean" },
        BOOL: { type: "boolean" },
      },
    },
    Sj: { type: "list", member: {} },
    Sm: { type: "map", key: {}, value: {} },
    Sr: { type: "list", member: { shape: "Ss" } },
    Ss: { type: "map", key: {}, value: { shape: "S8" } },
    St: { type: "list", member: { shape: "Su" } },
    Su: {
      type: "structure",
      members: {
        TableName: {},
        CapacityUnits: { type: "double" },
        Table: { shape: "Sw" },
        LocalSecondaryIndexes: { shape: "Sx" },
        GlobalSecondaryIndexes: { shape: "Sx" },
      },
    },
    Sw: { type: "structure", members: { CapacityUnits: { type: "double" } } },
    Sx: { type: "map", key: {}, value: { shape: "Sw" } },
    S10: {
      type: "map",
      key: {},
      value: {
        type: "list",
        member: {
          type: "structure",
          members: {
            PutRequest: {
              type: "structure",
              required: ["Item"],
              members: { Item: { shape: "S14" } },
            },
            DeleteRequest: {
              type: "structure",
              required: ["Key"],
              members: { Key: { shape: "S6" } },
            },
          },
        },
      },
    },
    S14: { type: "map", key: {}, value: { shape: "S8" } },
    S1a: {
      type: "structure",
      members: {
        ItemCollectionKey: { type: "map", key: {}, value: { shape: "S8" } },
        SizeEstimateRangeGB: { type: "list", member: { type: "double" } },
      },
    },
    S1f: {
      type: "list",
      member: {
        type: "structure",
        required: ["AttributeName", "AttributeType"],
        members: { AttributeName: {}, AttributeType: {} },
      },
    },
    S1j: {
      type: "list",
      member: {
        type: "structure",
        required: ["AttributeName", "KeyType"],
        members: { AttributeName: {}, KeyType: {} },
      },
    },
    S1o: {
      type: "structure",
      members: {
        ProjectionType: {},
        NonKeyAttributes: { type: "list", member: {} },
      },
    },
    S1u: {
      type: "structure",
      required: ["ReadCapacityUnits", "WriteCapacityUnits"],
      members: {
        ReadCapacityUnits: { type: "long" },
        WriteCapacityUnits: { type: "long" },
      },
    },
    S1w: {
      type: "structure",
      members: { StreamEnabled: { type: "boolean" }, StreamViewType: {} },
    },
    S20: {
      type: "structure",
      members: {
        AttributeDefinitions: { shape: "S1f" },
        TableName: {},
        KeySchema: { shape: "S1j" },
        TableStatus: {},
        CreationDateTime: { type: "timestamp" },
        ProvisionedThroughput: { shape: "S23" },
        TableSizeBytes: { type: "long" },
        ItemCount: { type: "long" },
        TableArn: {},
        LocalSecondaryIndexes: {
          type: "list",
          member: {
            type: "structure",
            members: {
              IndexName: {},
              KeySchema: { shape: "S1j" },
              Projection: { shape: "S1o" },
              IndexSizeBytes: { type: "long" },
              ItemCount: { type: "long" },
              IndexArn: {},
            },
          },
        },
        GlobalSecondaryIndexes: {
          type: "list",
          member: {
            type: "structure",
            members: {
              IndexName: {},
              KeySchema: { shape: "S1j" },
              Projection: { shape: "S1o" },
              IndexStatus: {},
              Backfilling: { type: "boolean" },
              ProvisionedThroughput: { shape: "S23" },
              IndexSizeBytes: { type: "long" },
              ItemCount: { type: "long" },
              IndexArn: {},
            },
          },
        },
        StreamSpecification: { shape: "S1w" },
        LatestStreamLabel: {},
        LatestStreamArn: {},
      },
    },
    S23: {
      type: "structure",
      members: {
        LastIncreaseDateTime: { type: "timestamp" },
        LastDecreaseDateTime: { type: "timestamp" },
        NumberOfDecreasesToday: { type: "long" },
        ReadCapacityUnits: { type: "long" },
        WriteCapacityUnits: { type: "long" },
      },
    },
    S2e: {
      type: "map",
      key: {},
      value: {
        type: "structure",
        members: {
          Value: { shape: "S8" },
          Exists: { type: "boolean" },
          ComparisonOperator: {},
          AttributeValueList: { shape: "S2i" },
        },
      },
    },
    S2i: { type: "list", member: { shape: "S8" } },
    S2m: { type: "map", key: {}, value: { shape: "S8" } },
    S35: {
      type: "structure",
      required: ["ComparisonOperator"],
      members: { AttributeValueList: { shape: "S2i" }, ComparisonOperator: {} },
    },
    S36: { type: "map", key: {}, value: { shape: "S35" } },
  },
  examples: {},
  paginators: {
    BatchGetItem: {
      input_token: "RequestItems",
      output_token: "UnprocessedKeys",
    },
    ListTables: {
      input_token: "ExclusiveStartTableName",
      output_token: "LastEvaluatedTableName",
      limit_key: "Limit",
      result_key: "TableNames",
    },
    Query: {
      input_token: "ExclusiveStartKey",
      output_token: "LastEvaluatedKey",
      limit_key: "Limit",
      result_key: "Items",
    },
    Scan: {
      input_token: "ExclusiveStartKey",
      output_token: "LastEvaluatedKey",
      limit_key: "Limit",
      result_key: "Items",
    },
  },
  waiters: {
    __default__: { interval: 20, max_attempts: 25 },
    __TableState: { operation: "DescribeTable" },
    TableExists: {
      extends: "__TableState",
      ignore_errors: ["ResourceNotFoundException"],
      success_type: "output",
      success_path: "Table.TableStatus",
      success_value: "ACTIVE",
    },
    TableNotExists: {
      extends: "__TableState",
      success_type: "error",
      success_value: "ResourceNotFoundException",
    },
  },
};
(AWS.apiLoader.services.lambda = {}),
  (AWS.Lambda = AWS.Service.defineService("lambda", [
    "2014-11-11",
    "2015-03-31",
  ]));
AWS.apiLoader.services.lambda["2015-03-31"] = {
  version: "2.0",
  metadata: {
    apiVersion: "2015-03-31",
    endpointPrefix: "lambda",
    serviceFullName: "AWS Lambda",
    signatureVersion: "v4",
    protocol: "rest-json",
  },
  operations: {
    AddPermission: {
      http: {
        requestUri: "/2015-03-31/functions/{FunctionName}/versions/HEAD/policy",
        responseCode: 201,
      },
      input: {
        type: "structure",
        required: ["FunctionName", "StatementId", "Action", "Principal"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
          StatementId: {},
          Action: {},
          Principal: {},
          SourceArn: {},
          SourceAccount: {},
        },
      },
      output: { type: "structure", members: { Statement: {} } },
    },
    CreateEventSourceMapping: {
      http: {
        requestUri: "/2015-03-31/event-source-mappings/",
        responseCode: 202,
      },
      input: {
        type: "structure",
        required: ["EventSourceArn", "FunctionName", "StartingPosition"],
        members: {
          EventSourceArn: {},
          FunctionName: {},
          Enabled: { type: "boolean" },
          BatchSize: { type: "integer" },
          StartingPosition: {},
        },
      },
      output: { shape: "Se" },
    },
    CreateFunction: {
      http: { requestUri: "/2015-03-31/functions", responseCode: 201 },
      input: {
        type: "structure",
        required: ["FunctionName", "Runtime", "Role", "Handler", "Code"],
        members: {
          FunctionName: {},
          Runtime: {},
          Role: {},
          Handler: {},
          Description: {},
          Timeout: { type: "integer" },
          MemorySize: { type: "integer" },
          Code: {
            type: "structure",
            members: {
              ZipFile: { type: "blob" },
              S3Bucket: {},
              S3Key: {},
              S3ObjectVersion: {},
            },
          },
        },
      },
      output: { shape: "St" },
    },
    DeleteEventSourceMapping: {
      http: {
        method: "DELETE",
        requestUri: "/2015-03-31/event-source-mappings/{UUID}",
        responseCode: 202,
      },
      input: {
        type: "structure",
        required: ["UUID"],
        members: { UUID: { location: "uri", locationName: "UUID" } },
      },
      output: { shape: "Se" },
    },
    DeleteFunction: {
      http: {
        method: "DELETE",
        requestUri: "/2015-03-31/functions/{FunctionName}",
        responseCode: 204,
      },
      input: {
        type: "structure",
        required: ["FunctionName"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
        },
      },
    },
    GetEventSourceMapping: {
      http: {
        method: "GET",
        requestUri: "/2015-03-31/event-source-mappings/{UUID}",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["UUID"],
        members: { UUID: { location: "uri", locationName: "UUID" } },
      },
      output: { shape: "Se" },
    },
    GetFunction: {
      http: {
        method: "GET",
        requestUri: "/2015-03-31/functions/{FunctionName}/versions/HEAD",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["FunctionName"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
        },
      },
      output: {
        type: "structure",
        members: {
          Configuration: { shape: "St" },
          Code: {
            type: "structure",
            members: { RepositoryType: {}, Location: {} },
          },
        },
      },
    },
    GetFunctionConfiguration: {
      http: {
        method: "GET",
        requestUri:
          "/2015-03-31/functions/{FunctionName}/versions/HEAD/configuration",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["FunctionName"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
        },
      },
      output: { shape: "St" },
    },
    GetPolicy: {
      http: {
        method: "GET",
        requestUri: "/2015-03-31/functions/{FunctionName}/versions/HEAD/policy",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["FunctionName"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
        },
      },
      output: { type: "structure", members: { Policy: {} } },
    },
    Invoke: {
      http: { requestUri: "/2015-03-31/functions/{FunctionName}/invocations" },
      input: {
        type: "structure",
        required: ["FunctionName"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
          InvocationType: {
            location: "header",
            locationName: "X-Amz-Invocation-Type",
          },
          LogType: { location: "header", locationName: "X-Amz-Log-Type" },
          ClientContext: {
            location: "header",
            locationName: "X-Amz-Client-Context",
          },
          Payload: { type: "blob" },
        },
        payload: "Payload",
      },
      output: {
        type: "structure",
        members: {
          StatusCode: { location: "statusCode", type: "integer" },
          FunctionError: {
            location: "header",
            locationName: "X-Amz-Function-Error",
          },
          LogResult: { location: "header", locationName: "X-Amz-Log-Result" },
          Payload: { type: "blob" },
        },
        payload: "Payload",
      },
    },
    InvokeAsync: {
      http: {
        requestUri: "/2014-11-13/functions/{FunctionName}/invoke-async/",
        responseCode: 202,
      },
      input: {
        deprecated: !0,
        type: "structure",
        required: ["FunctionName", "InvokeArgs"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
          InvokeArgs: { type: "blob", streaming: !0 },
        },
        payload: "InvokeArgs",
      },
      output: {
        deprecated: !0,
        type: "structure",
        members: { Status: { location: "statusCode", type: "integer" } },
      },
      deprecated: !0,
    },
    ListEventSourceMappings: {
      http: {
        method: "GET",
        requestUri: "/2015-03-31/event-source-mappings/",
        responseCode: 200,
      },
      input: {
        type: "structure",
        members: {
          EventSourceArn: {
            location: "querystring",
            locationName: "EventSourceArn",
          },
          FunctionName: {
            location: "querystring",
            locationName: "FunctionName",
          },
          Marker: { location: "querystring", locationName: "Marker" },
          MaxItems: {
            location: "querystring",
            locationName: "MaxItems",
            type: "integer",
          },
        },
      },
      output: {
        type: "structure",
        members: {
          NextMarker: {},
          EventSourceMappings: { type: "list", member: { shape: "Se" } },
        },
      },
    },
    ListFunctions: {
      http: {
        method: "GET",
        requestUri: "/2015-03-31/functions/",
        responseCode: 200,
      },
      input: {
        type: "structure",
        members: {
          Marker: { location: "querystring", locationName: "Marker" },
          MaxItems: {
            location: "querystring",
            locationName: "MaxItems",
            type: "integer",
          },
        },
      },
      output: {
        type: "structure",
        members: {
          NextMarker: {},
          Functions: { type: "list", member: { shape: "St" } },
        },
      },
    },
    RemovePermission: {
      http: {
        method: "DELETE",
        requestUri:
          "/2015-03-31/functions/{FunctionName}/versions/HEAD/policy/{StatementId}",
        responseCode: 204,
      },
      input: {
        type: "structure",
        required: ["FunctionName", "StatementId"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
          StatementId: { location: "uri", locationName: "StatementId" },
        },
      },
    },
    UpdateEventSourceMapping: {
      http: {
        method: "PUT",
        requestUri: "/2015-03-31/event-source-mappings/{UUID}",
        responseCode: 202,
      },
      input: {
        type: "structure",
        required: ["UUID"],
        members: {
          UUID: { location: "uri", locationName: "UUID" },
          FunctionName: {},
          Enabled: { type: "boolean" },
          BatchSize: { type: "integer" },
        },
      },
      output: { shape: "Se" },
    },
    UpdateFunctionCode: {
      http: {
        method: "PUT",
        requestUri: "/2015-03-31/functions/{FunctionName}/versions/HEAD/code",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["FunctionName"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
          ZipFile: { type: "blob" },
          S3Bucket: {},
          S3Key: {},
          S3ObjectVersion: {},
        },
      },
      output: { shape: "St" },
    },
    UpdateFunctionConfiguration: {
      http: {
        method: "PUT",
        requestUri:
          "/2015-03-31/functions/{FunctionName}/versions/HEAD/configuration",
        responseCode: 200,
      },
      input: {
        type: "structure",
        required: ["FunctionName"],
        members: {
          FunctionName: { location: "uri", locationName: "FunctionName" },
          Role: {},
          Handler: {},
          Description: {},
          Timeout: { type: "integer" },
          MemorySize: { type: "integer" },
        },
      },
      output: { shape: "St" },
    },
  },
  shapes: {
    Se: {
      type: "structure",
      members: {
        UUID: {},
        BatchSize: { type: "integer" },
        EventSourceArn: {},
        FunctionArn: {},
        LastModified: { type: "timestamp" },
        LastProcessingResult: {},
        State: {},
        StateTransitionReason: {},
      },
    },
    St: {
      type: "structure",
      members: {
        FunctionName: {},
        FunctionArn: {},
        Runtime: {},
        Role: {},
        Handler: {},
        CodeSize: { type: "long" },
        Description: {},
        Timeout: { type: "integer" },
        MemorySize: { type: "integer" },
        LastModified: {},
      },
    },
  },
  paginators: {
    ListEventSourceMappings: {
      input_token: "Marker",
      output_token: "NextMarker",
      limit_key: "MaxItems",
      result_key: "EventSourceMappings",
    },
    ListFunctions: {
      input_token: "Marker",
      output_token: "NextMarker",
      limit_key: "MaxItems",
      result_key: "Functions",
    },
  },
};
(AWS.apiLoader.services.sts = {}),
  (AWS.STS = AWS.Service.defineService("sts", ["2011-06-15"])),
  (_xamzrequire = (function e(r, t, n) {
    function i(o, a) {
      if (!t[o]) {
        if (!r[o]) {
          var u = "function" == typeof _xamzrequire && _xamzrequire;
          if (!a && u) return u(o, !0);
          if (s) return s(o, !0);
          var c = new Error("Cannot find module '" + o + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var d = (t[o] = { exports: {} });
        r[o][0].call(
          d.exports,
          function (e) {
            var t = r[o][1][e];
            return i(t ? t : e);
          },
          d,
          d.exports,
          e,
          r,
          t,
          n
        );
      }
      return t[o].exports;
    }
    for (
      var s = "function" == typeof _xamzrequire && _xamzrequire, o = 0;
      o < n.length;
      o++
    )
      i(n[o]);
    return i;
  })(
    {
      71: [
        function (e, r, t) {
          var n = e("../core");
          n.util.update(n.STS.prototype, {
            credentialsFrom: function (e, r) {
              return e
                ? (r || (r = new n.TemporaryCredentials()),
                  (r.expired = !1),
                  (r.accessKeyId = e.Credentials.AccessKeyId),
                  (r.secretAccessKey = e.Credentials.SecretAccessKey),
                  (r.sessionToken = e.Credentials.SessionToken),
                  (r.expireTime = e.Credentials.Expiration),
                  r)
                : null;
            },
            assumeRoleWithWebIdentity: function (e, r) {
              return this.makeUnauthenticatedRequest(
                "assumeRoleWithWebIdentity",
                e,
                r
              );
            },
            assumeRoleWithSAML: function (e, r) {
              return this.makeUnauthenticatedRequest(
                "assumeRoleWithSAML",
                e,
                r
              );
            },
          });
        },
        { "../core": 23 },
      ],
    },
    {},
    [71]
  ));
AWS.apiLoader.services.sts["2011-06-15"] = {
  version: "2.0",
  metadata: {
    apiVersion: "2011-06-15",
    endpointPrefix: "sts",
    globalEndpoint: "sts.amazonaws.com",
    serviceAbbreviation: "AWS STS",
    serviceFullName: "AWS Security Token Service",
    signatureVersion: "v4",
    xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
    protocol: "query",
  },
  operations: {
    AssumeRole: {
      input: {
        type: "structure",
        required: ["RoleArn", "RoleSessionName"],
        members: {
          RoleArn: {},
          RoleSessionName: {},
          Policy: {},
          DurationSeconds: { type: "integer" },
          ExternalId: {},
          SerialNumber: {},
          TokenCode: {},
        },
      },
      output: {
        resultWrapper: "AssumeRoleResult",
        type: "structure",
        members: {
          Credentials: { shape: "Sa" },
          AssumedRoleUser: { shape: "Sf" },
          PackedPolicySize: { type: "integer" },
        },
      },
      http: {},
    },
    AssumeRoleWithSAML: {
      input: {
        type: "structure",
        required: ["RoleArn", "PrincipalArn", "SAMLAssertion"],
        members: {
          RoleArn: {},
          PrincipalArn: {},
          SAMLAssertion: {},
          Policy: {},
          DurationSeconds: { type: "integer" },
        },
      },
      output: {
        resultWrapper: "AssumeRoleWithSAMLResult",
        type: "structure",
        members: {
          Credentials: { shape: "Sa" },
          AssumedRoleUser: { shape: "Sf" },
          PackedPolicySize: { type: "integer" },
          Subject: {},
          SubjectType: {},
          Issuer: {},
          Audience: {},
          NameQualifier: {},
        },
      },
      http: {},
    },
    AssumeRoleWithWebIdentity: {
      input: {
        type: "structure",
        required: ["RoleArn", "RoleSessionName", "WebIdentityToken"],
        members: {
          RoleArn: {},
          RoleSessionName: {},
          WebIdentityToken: {},
          ProviderId: {},
          Policy: {},
          DurationSeconds: { type: "integer" },
        },
      },
      output: {
        resultWrapper: "AssumeRoleWithWebIdentityResult",
        type: "structure",
        members: {
          Credentials: { shape: "Sa" },
          SubjectFromWebIdentityToken: {},
          AssumedRoleUser: { shape: "Sf" },
          PackedPolicySize: { type: "integer" },
          Provider: {},
          Audience: {},
        },
      },
      http: {},
    },
    DecodeAuthorizationMessage: {
      input: {
        type: "structure",
        required: ["EncodedMessage"],
        members: { EncodedMessage: {} },
      },
      output: {
        resultWrapper: "DecodeAuthorizationMessageResult",
        type: "structure",
        members: { DecodedMessage: {} },
      },
      http: {},
    },
    GetFederationToken: {
      input: {
        type: "structure",
        required: ["Name"],
        members: { Name: {}, Policy: {}, DurationSeconds: { type: "integer" } },
      },
      output: {
        resultWrapper: "GetFederationTokenResult",
        type: "structure",
        members: {
          Credentials: { shape: "Sa" },
          FederatedUser: {
            type: "structure",
            required: ["FederatedUserId", "Arn"],
            members: { FederatedUserId: {}, Arn: {} },
          },
          PackedPolicySize: { type: "integer" },
        },
      },
      http: {},
    },
    GetSessionToken: {
      input: {
        type: "structure",
        members: {
          DurationSeconds: { type: "integer" },
          SerialNumber: {},
          TokenCode: {},
        },
      },
      output: {
        resultWrapper: "GetSessionTokenResult",
        type: "structure",
        members: { Credentials: { shape: "Sa" } },
      },
      http: {},
    },
  },
  shapes: {
    Sa: {
      type: "structure",
      required: [
        "AccessKeyId",
        "SecretAccessKey",
        "SessionToken",
        "Expiration",
      ],
      members: {
        AccessKeyId: {},
        SecretAccessKey: {},
        SessionToken: {},
        Expiration: { type: "timestamp" },
      },
    },
    Sf: {
      type: "structure",
      required: ["AssumedRoleId", "Arn"],
      members: { AssumedRoleId: {}, Arn: {} },
    },
  },
};
