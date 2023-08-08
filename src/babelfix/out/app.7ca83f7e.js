"use strict";

(function () {
  "use strict";

  var e = {
      19270: function _(e, t, n) {
        var r = n(47798),
          o = n.n(r),
          i = n(1001),
          c = n.n(i),
          a = (n(45905), n(26653), n(14893), n(6649), n(75918), n(71175), n(47378), n(40950), n(54018), n(55195), n(61957)),
          s = n(71947),
          u = n(60499),
          l = n(59835),
          f = (0, l._)("h6", null, "Serversuche:", -1);
        function p(e, t, n, r, o, i) {
          var c = (0, l.up)("router-view"),
            a = (0, l.up)("q-card-section"),
            s = (0, l.up)("q-icon"),
            u = (0, l.up)("q-card"),
            p = (0, l.up)("q-dialog");
          return (0, l.wg)(), (0, l.iD)(l.HY, null, [(0, l.Wm)(c), (0, l.Wm)(p, {
            modelValue: e.serverSearch,
            "onUpdate:modelValue": t[0] || (t[0] = function (t) {
              return e.serverSearch = t;
            }),
            persistent: ""
          }, {
            default: (0, l.w5)(function () {
              return [(0, l.Wm)(u, null, {
                default: (0, l.w5)(function () {
                  return [(0, l.Wm)(a, null, {
                    default: (0, l.w5)(function () {
                      return [f];
                    }),
                    _: 1
                  }), (0, l.Wm)(a, {
                    class: "row justify-center items-center"
                  }, {
                    default: (0, l.w5)(function () {
                      return [(0, l.Wm)(s, {
                        name: "search"
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue"])], 64);
        }
        var h = n(36431),
          d = n(98143),
          g = n(21495),
          v = n(6827),
          m = n(44858),
          y = n(51268),
          b = (0, l.aZ)({
            name: "App",
            setup: function setup() {
              var e, t, n, r, o;
              try {
                e = (0, h.T)(), e.connect(), t = (0, d.F)(), t.initSocket(), n = (0, g.s)(), n.initSocket(), r = (0, m.u)();
                var i = (0, y.Jk)(r),
                  c = i.serverSearchExp;
                o = c;
              } catch (a) {
                document.write(a.message);
              }
              return {
                socket: e,
                serverSearch: o
              };
            }
          }),
          k = n(11639),
          S = n(32074),
          w = n(44458),
          C = n(63190),
          x = n(22857),
          P = n(69984),
          T = n.n(P);
        var q = (0, k.Z)(b, [["render", p]]);
        var G = q;
        T()(b, "components", {
          QDialog: S.Z,
          QCard: w.Z,
          QCardSection: C.Z,
          QIcon: x.Z
        });
        var j = n(23340),
          O = (0, j.h)(function () {
            var e = (0, y.WB)();
            return e;
          }),
          Z = n(28339),
          _ = [{
            path: "/",
            component: function component() {
              return Promise.all([n.e(736), n.e(131)]).then(n.bind(n, 43131));
            },
            children: [{
              path: "",
              component: function component() {
                return Promise.all([n.e(736), n.e(54)]).then(n.bind(n, 84054));
              }
            }]
          }, {
            path: "/client",
            component: function component() {
              return Promise.all([n.e(736), n.e(131)]).then(n.bind(n, 43131));
            },
            children: [{
              path: "",
              component: function component() {
                return Promise.all([n.e(736), n.e(552)]).then(n.bind(n, 57552));
              }
            }]
          }, {
            path: "/settings",
            component: function component() {
              return Promise.all([n.e(736), n.e(131)]).then(n.bind(n, 43131));
            },
            children: [{
              path: "",
              component: function component() {
                return Promise.all([n.e(736), n.e(446)]).then(n.bind(n, 70446));
              }
            }]
          }, {
            path: "/gallery",
            component: function component() {
              return Promise.all([n.e(736), n.e(131)]).then(n.bind(n, 43131));
            },
            children: [{
              path: "",
              component: function component() {
                return Promise.all([n.e(736), n.e(974)]).then(n.bind(n, 36974));
              }
            }]
          }, {
            path: "/:catchAll(.*)*",
            component: function component() {
              return n.e(862).then(n.bind(n, 91862));
            }
          }],
          E = _,
          A = (0, j.BC)(function () {
            var e = Z.r5,
              t = (0, Z.p7)({
                scrollBehavior: function scrollBehavior() {
                  return {
                    left: 0,
                    top: 0
                  };
                },
                routes: E,
                history: e("/")
              });
            return t;
          });
        function I(e, t) {
          return N.apply(this, arguments);
        }
        function N() {
          return N = c()(o()().mark(function e(t, n) {
            var r, i, c;
            return o()().wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (r = t(G), r.use(s.Z, n), "function" !== typeof O) {
                    e.next = 8;
                    break;
                  }
                  return e.next = 5, O({});
                case 5:
                  e.t0 = e.sent, e.next = 9;
                  break;
                case 8:
                  e.t0 = O;
                case 9:
                  if (i = e.t0, r.use(i), e.t1 = u.Xl, "function" !== typeof A) {
                    e.next = 18;
                    break;
                  }
                  return e.next = 15, A({
                    store: i
                  });
                case 15:
                  e.t2 = e.sent, e.next = 19;
                  break;
                case 18:
                  e.t2 = A;
                case 19:
                  return e.t3 = e.t2, c = (0, e.t1)(e.t3), i.use(function (e) {
                    var t = e.store;
                    t.router = c;
                  }), e.abrupt("return", {
                    app: r,
                    store: i,
                    router: c
                  });
                case 23:
                case "end":
                  return e.stop();
              }
            }, e);
          })), N.apply(this, arguments);
        }
        var D = n(52941),
          F = {
            config: {},
            plugins: {
              Notify: v.Z,
              AppFullscreen: D.Z
            }
          },
          Q = "/";
        function W(e, t) {
          return B.apply(this, arguments);
        }
        function B() {
          return B = c()(o()().mark(function e(t, n) {
            var r, i, c, a, s, u, l, f;
            return o()().wrap(function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  r = t.app, i = t.router, c = t.store, a = !1, s = function s(e) {
                    try {
                      return i.resolve(e).href;
                    } catch (t) {}
                    return Object(e) === e ? null : e;
                  }, u = function u(e) {
                    if (a = !0, "string" === typeof e && /^https?:\/\//.test(e)) window.location.href = e;else {
                      var t = s(e);
                      null !== t && (window.location.href = t, window.location.reload());
                    }
                  }, l = window.location.href.replace(window.location.origin, ""), f = 0;
                case 6:
                  if (!(!1 === a && f < n.length)) {
                    e.next = 22;
                    break;
                  }
                  return e.prev = 7, e.next = 10, n[f]({
                    app: r,
                    router: i,
                    store: c,
                    ssrContext: null,
                    redirect: u,
                    urlPath: l,
                    publicPath: Q
                  });
                case 10:
                  e.next = 19;
                  break;
                case 12:
                  if (e.prev = 12, e.t0 = e["catch"](7), !e.t0 || !e.t0.url) {
                    e.next = 17;
                    break;
                  }
                  return u(e.t0.url), e.abrupt("return");
                case 17:
                  return console.error("[Quasar] boot error:", e.t0), e.abrupt("return");
                case 19:
                  f++, e.next = 6;
                  break;
                case 22:
                  if (!0 !== a) {
                    e.next = 24;
                    break;
                  }
                  return e.abrupt("return");
                case 24:
                  r.use(i), r.mount("#q-app");
                case 26:
                case "end":
                  return e.stop();
              }
            }, e, null, [[7, 12]]);
          })), B.apply(this, arguments);
        }
        I(a.ri, F).then(function (e) {
          return Promise.all([Promise.resolve().then(n.bind(n, 91569)), Promise.resolve().then(n.bind(n, 20101))]).then(function (t) {
            var n = t.map(function (e) {
              return e.default;
            }).filter(function (e) {
              return "function" === typeof e;
            });
            W(e, n);
          });
        });
      },
      91569: function _(e, t, n) {
        n.r(t), n.d(t, {
          api: function api() {
            return c;
          }
        });
        var r = n(23340),
          o = n(22572),
          i = n.n(o),
          c = i().create({
            baseURL: "https://api.example.com"
          });
        t["default"] = (0, r.xr)(function (e) {
          var t = e.app;
          t.config.globalProperties.$axios = i(), t.config.globalProperties.$api = c;
        });
      },
      20101: function _(e, t, n) {
        n.r(t), n.d(t, {
          api: function api() {
            return i;
          }
        });
        var r = n(23340),
          o = n(83397),
          i = o.ZP.io;
        t["default"] = (0, r.xr)(function (e) {
          var t = e.app;
          t.config.globalProperties.$socketio = o.ZP.io;
        });
      },
      23577: function _(e, t, n) {
        n.d(t, {
          D: function D() {
            return s;
          },
          Y: function Y() {
            return i;
          }
        });
        n(40950), n(95265);
        var r = "ws://192.168.42.158:3000",
          o = "ws://" + location.host,
          i = o.match("localhost") ? r : o,
          c = "http://192.168.42.158:3000",
          a = "http://" + location.host,
          s = a.match("localhost") ? c : a;
      },
      21495: function _(e, t, n) {
        n.d(t, {
          s: function s() {
            return i;
          }
        });
        var r = n(51268),
          o = n(36431),
          i = (n(6827), (0, r.Q_)("gallery", {
            state: function state() {
              return {
                gallery: {},
                socketStore: (0, o.T)(),
                galleryImages: []
              };
            },
            getters: {
              currentGallery: function currentGallery(e) {
                return e.gallery.list && e.gallery.currentActive ? e.gallery.list[e.gallery.currentActive] : [];
              }
            },
            actions: {
              initSocket: function initSocket() {
                var e = this;
                this.socketStore.on("receiveGallery", function (t) {
                  e.receiveGallery(t);
                }), this.socketStore.on("receiveGalleryImages", function (t) {
                  e.receiveGalleryImages(t);
                }), this.requestGallery();
              },
              requestGallery: function requestGallery() {
                console.log("request gallery"), this.socketStore.socketClient.emit("requestGallery");
              },
              receiveGallery: function receiveGallery(e) {
                console.log("receive gallery", e), this.gallery = e.list;
              },
              removeGallery: function removeGallery(e) {
                this.socketStore.emit("removeGallery", e);
              },
              clearGallery: function clearGallery(e) {
                this.socketStore.emit("clearGallery", e);
              },
              addGallery: function addGallery(e) {
                this.socketStore.emit("addGallery", e);
              },
              requestGalleryImages: function requestGalleryImages() {
                this.socketStore.emit("requestGalleryImages");
              },
              receiveGalleryImages: function receiveGalleryImages(e) {
                this.galleryImages = e;
              },
              setGalleryUsbTarget: function setGalleryUsbTarget(e, t) {
                this.socketStore.emit("setGalleryUsbTarget", {
                  galleryTarget: e,
                  usbTarget: t
                });
              },
              copyGalleryToUsbTarget: function copyGalleryToUsbTarget(e, t) {
                this.socketStore.emit("copyGalleryToUsbTarget", {
                  galleryTarget: e,
                  usbTarget: t
                });
              }
            }
          }));
      },
      44858: function _(e, t, n) {
        n.d(t, {
          u: function u() {
            return c;
          }
        });
        var r = n(51268),
          o = (n(6827), n(52941)),
          i = n(46038),
          c = (0, r.Q_)("page", {
            state: function state() {
              return {
                fullscreen: !1,
                devMode: (0, i.y$C)("client-devMode", !1),
                mode: (0, i.y$C)("client-mode", "full"),
                showHeader: !0,
                showMenu: !0,
                leftDrawerOpen: (0, i.y$C)("client-leftDrawerOpen", !1),
                serverSearch: !1
              };
            },
            actions: {
              goFullScreen: function goFullScreen() {
                o.Z.request().then(function () {}).catch(function (e) {});
              }
            }
          });
      },
      98143: function _(e, t, n) {
        n.d(t, {
          F: function F() {
            return c;
          }
        });
        n(74074), n(47378), n(3240);
        var r = n(51268),
          o = n(36431),
          i = n(6827),
          c = (0, r.Q_)("settings", {
            state: function state() {
              return {
                settings: {},
                serverStatus: {},
                socketStore: (0, o.T)()
              };
            },
            actions: {
              initSocket: function initSocket() {
                var e = this;
                this.socketStore.on("receiveSettings", function (t) {
                  e.receiveSettings(t);
                }), this.socketStore.on("savedSettings", function (t) {
                  e.savedSettings(t);
                }), this.socketStore.on("serverStatus", function (t) {
                  console.log("serverstatus", {
                    data: t
                  }), e.serverStatus = t;
                }), this.socketStore.on("storageWarning", function (e) {
                  console.log("storageWarning", {
                    data: e
                  }), "/client" === currentRoute || i.Z.create({
                    type: "warning",
                    message: e.map(function (e) {
                      return "".concat(e.dev, " (").concat(e.mount, ") ist bereits halb voll");
                    }).join("<br>"),
                    html: !0,
                    caption: !1,
                    badgeStyle: "opacity: 0"
                  });
                }), this.socketStore.on("storageError", function (t) {
                  console.log("storageError", {
                    data: t
                  });
                  var n = e.router.options.history.location;
                  "/client" === n ? i.Z.create({
                    type: "negative",
                    message: t.map(function (e) {
                      return "Speicherplatz fast voll - Bitte Fotografen bescheid geben";
                    }).join("<br>"),
                    html: !0,
                    caption: !1,
                    badgeStyle: "opacity: 0"
                  }) : i.Z.create({
                    type: "negative",
                    message: t.map(function (e) {
                      return "".concat(e.dev, " (").concat(e.mount, ") ist bald voll");
                    }).join("<br>"),
                    html: !0,
                    caption: !1,
                    badgeStyle: "opacity: 0"
                  });
                }), this.requestSettings();
              },
              requestSettings: function requestSettings() {
                console.log("request settings"), this.socketStore.requestSettings();
              },
              receiveSettings: function receiveSettings(e) {
                console.log("receive settings", e), this.settings = e;
              },
              savedSettings: function savedSettings(e) {
                console.log("message settings", e), i.Z.create({
                  type: e.type,
                  message: e.text
                });
              },
              saveSettings: function saveSettings() {
                this.socketStore.sendSettings(this.settings);
              }
            }
          });
      },
      36431: function _(e, t, n) {
        n.d(t, {
          T: function T() {
            return a;
          }
        });
        var r = n(51268),
          o = n(83397),
          i = n(6827),
          c = n(23577);
        console.log("Socket reinitialized");
        var a = (0, r.Q_)("socket", {
          state: function state() {
            return {
              socketClient: void 0,
              clientState: void 0,
              connected: !1
            };
          },
          getters: {},
          actions: {
            connect: function connect() {
              var e,
                t = this;
              if (null === (e = this.socketClient) || void 0 === e || !e.connected) {
                var n = (0, o.io)(c.Y);
                this.socketClient = n, n.on("connect", function () {
                  console.log("connection"), t.connected = !0;
                }), n.on("disconnect", function () {
                  console.log("DISCONNECTION"), t.connected = !1;
                }), n.on("noCamera", function (e) {
                  i.Z.create({
                    type: "negative",
                    caption: "Kamera wurde nicht erkannt"
                  });
                }), n.on("clientStatus", function (e) {
                  var t = "error" === e.type ? "negative" : "success" === e.type ? "positive" : "neutral";
                  i.Z.create({
                    type: t,
                    message: "Photobooth Meldung: ".concat(e.message)
                  });
                });
              }
            },
            on: function on(e, t) {
              this.socketClient.on(e, t);
            },
            once: function once(e, t) {
              this.socketClient.once(e, t);
            },
            emit: function emit(e, t) {
              this.socketClient.emit(e, t);
            },
            trigger: function trigger() {
              console.log("Trigger socket", {
                socket: this.socketClient
              }), this.socketClient.emit("trigger");
            },
            requestSettings: function requestSettings() {
              console.log("socket request send"), this.socketClient.emit("requestSettings");
            },
            sendSettings: function sendSettings(e) {
              this.socketClient.emit("sendSettings", e);
            },
            saveConfig: function saveConfig() {
              this.socketClient.emit("config", {
                "camera:triggerDelay": -465
              });
            }
          }
        });
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = t[r] = {
      exports: {}
    };
    return e[r](i, i.exports, n), i.exports;
  }
  n.m = e, function () {
    var e = [];
    n.O = function (t, r, o, i) {
      if (!r) {
        var c = 1 / 0;
        for (l = 0; l < e.length; l++) {
          r = e[l][0], o = e[l][1], i = e[l][2];
          for (var a = !0, s = 0; s < r.length; s++) (!1 & i || c >= i) && Object.keys(n.O).every(function (e) {
            return n.O[e](r[s]);
          }) ? r.splice(s--, 1) : (a = !1, i < c && (c = i));
          if (a) {
            e.splice(l--, 1);
            var u = o();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      i = i || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
      e[l] = [r, o, i];
    };
  }(), function () {
    n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, {
        a: t
      }), t;
    };
  }(), function () {
    n.d = function (e, t) {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      });
    };
  }(), function () {
    n.f = {}, n.e = function (e) {
      return Promise.all(Object.keys(n.f).reduce(function (t, r) {
        return n.f[r](e, t), t;
      }, []));
    };
  }(), function () {
    n.u = function (e) {
      return "js/" + e + "." + {
        54: "eaf62811",
        131: "8eee2ab9",
        446: "c6c21c21",
        552: "852de682",
        862: "591fa84b",
        974: "efebfbc6"
      }[e] + ".js";
    };
  }(), function () {
    n.miniCssF = function (e) {
      return "css/" + ({
        143: "app",
        736: "vendor"
      }[e] || e) + "." + {
        54: "f35e1ed3",
        143: "31d6cfe0",
        446: "6f33057d",
        552: "ae1c5d6e",
        736: "31767d4c",
        974: "6f33057d"
      }[e] + ".css";
    };
  }(), function () {
    n.g = function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    }();
  }(), function () {
    n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
  }(), function () {
    var e = {},
      t = "quasar-project:";
    n.l = function (r, o, i, c) {
      if (e[r]) e[r].push(o);else {
        var a, s;
        if (void 0 !== i) for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
          var f = u[l];
          if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + i) {
            a = f;
            break;
          }
        }
        a || (s = !0, a = document.createElement("script"), a.charset = "utf-8", a.timeout = 120, n.nc && a.setAttribute("nonce", n.nc), a.setAttribute("data-webpack", t + i), a.src = r), e[r] = [o];
        var p = function p(t, n) {
            a.onerror = a.onload = null, clearTimeout(h);
            var o = e[r];
            if (delete e[r], a.parentNode && a.parentNode.removeChild(a), o && o.forEach(function (e) {
              return e(n);
            }), t) return t(n);
          },
          h = setTimeout(p.bind(null, void 0, {
            type: "timeout",
            target: a
          }), 12e4);
        a.onerror = p.bind(null, a.onerror), a.onload = p.bind(null, a.onload), s && document.head.appendChild(a);
      }
    };
  }(), function () {
    n.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    };
  }(), function () {
    n.p = "/";
  }(), function () {
    var e = function e(_e, t, n, r) {
        var o = document.createElement("link");
        o.rel = "stylesheet", o.type = "text/css";
        var i = function i(_i) {
          if (o.onerror = o.onload = null, "load" === _i.type) n();else {
            var c = _i && ("load" === _i.type ? "missing" : _i.type),
              a = _i && _i.target && _i.target.href || t,
              s = new Error("Loading CSS chunk " + _e + " failed.\n(" + a + ")");
            s.code = "CSS_CHUNK_LOAD_FAILED", s.type = c, s.request = a, o.parentNode.removeChild(o), r(s);
          }
        };
        return o.onerror = o.onload = i, o.href = t, document.head.appendChild(o), o;
      },
      t = function t(e, _t) {
        for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getAttribute("data-href") || o.getAttribute("href");
          if ("stylesheet" === o.rel && (i === e || i === _t)) return o;
        }
        var c = document.getElementsByTagName("style");
        for (r = 0; r < c.length; r++) {
          o = c[r], i = o.getAttribute("data-href");
          if (i === e || i === _t) return o;
        }
      },
      r = function r(_r) {
        return new Promise(function (o, i) {
          var c = n.miniCssF(_r),
            a = n.p + c;
          if (t(c, a)) return o();
          e(_r, a, o, i);
        });
      },
      o = {
        143: 0
      };
    n.f.miniCss = function (e, t) {
      var n = {
        54: 1,
        446: 1,
        552: 1,
        974: 1
      };
      o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = r(e).then(function () {
        o[e] = 0;
      }, function (t) {
        throw delete o[e], t;
      }));
    };
  }(), function () {
    var e = {
      143: 0
    };
    n.f.j = function (t, r) {
      var o = n.o(e, t) ? e[t] : void 0;
      if (0 !== o) if (o) r.push(o[2]);else {
        var i = new Promise(function (n, r) {
          o = e[t] = [n, r];
        });
        r.push(o[2] = i);
        var c = n.p + n.u(t),
          a = new Error(),
          s = function s(r) {
            if (n.o(e, t) && (o = e[t], 0 !== o && (e[t] = void 0), o)) {
              var i = r && ("load" === r.type ? "missing" : r.type),
                c = r && r.target && r.target.src;
              a.message = "Loading chunk " + t + " failed.\n(" + i + ": " + c + ")", a.name = "ChunkLoadError", a.type = i, a.request = c, o[1](a);
            }
          };
        n.l(c, s, "chunk-" + t, t);
      }
    }, n.O.j = function (t) {
      return 0 === e[t];
    };
    var t = function t(_t2, r) {
        var o,
          i,
          c = r[0],
          a = r[1],
          s = r[2],
          u = 0;
        if (c.some(function (t) {
          return 0 !== e[t];
        })) {
          for (o in a) n.o(a, o) && (n.m[o] = a[o]);
          if (s) var l = s(n);
        }
        for (_t2 && _t2(r); u < c.length; u++) i = c[u], n.o(e, i) && e[i] && e[i][0](), e[i] = 0;
        return n.O(l);
      },
      r = self["webpackChunkquasar_project"] = self["webpackChunkquasar_project"] || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
  }();
  var r = n.O(void 0, [736], function () {
    return n(19270);
  });
  r = n.O(r);
})();