"use strict";

(self["webpackChunkquasar_project"] = self["webpackChunkquasar_project"] || []).push([[54], {
  84054: function _(e, n, u) {
    u.r(n), u.d(n, {
      default: function _default() {
        return P;
      }
    });
    var t = u(59835),
      l = u(86970),
      r = {
        class: "q-gutter-lg q-pa-lg"
      },
      a = (0, t._)("b", null, "Erkannte Kamera", -1),
      o = (0, t._)("b", null, "ACHTUNG KEINE KAMERA ERKANNT", -1),
      i = (0, t._)("b", null, "Bitte beachten", -1),
      f = (0, t.Uk)(" Kamera Konfiguration "),
      c = (0, t._)("ul", null, [(0, t._)("li", null, "Kamera auf Raw + JPG stellen"), (0, t._)("li", null, "Belichtung / Blitz einstellen"), (0, t._)("li", null, "Fokus setzen und auf manuell stellen")], -1),
      s = (0, t.Uk)(" Photobooth Einstellungen "),
      d = (0, t._)("ul", null, [(0, t._)("li", null, "USB Stick anschließen und für Live-Kopie konfigurieren"), (0, t._)("li", null, "Eine neue Gallerie erstellen, alte ggf. für mehr Speicherplatz löschen"), (0, t._)("li", null, "Testfotos machen und ggf. Delay für den Auslöser in den Einstellungen anpassen")], -1),
      m = (0, t.Uk)(" Tipps und Tricks "),
      _ = (0, t._)("ul", null, [(0, t._)("li", null, "Um im Client-Mode wieder auf Admin-Funktionen zuzugreifen, mehrfach auf Bildschirm tippen")], -1);
    function w(e, n, u, w, g, p) {
      var W = (0, t.up)("q-item"),
        v = (0, t.up)("q-list"),
        b = (0, t.up)("q-card-section"),
        k = (0, t.up)("q-card"),
        h = (0, t.up)("storage-used"),
        q = (0, t.up)("q-label"),
        S = (0, t.up)("q-item-section"),
        Z = (0, t.up)("q-item-label"),
        U = (0, t.up)("q-page");
      return (0, t.wg)(), (0, t.j4)(U, null, {
        default: (0, t.w5)(function () {
          return [(0, t._)("div", r, [(0, t.Wm)(k, null, {
            default: (0, t.w5)(function () {
              return [(0, t.Wm)(b, null, {
                default: (0, t.w5)(function () {
                  return [a, (0, t.Wm)(v, null, {
                    default: (0, t.w5)(function () {
                      return [w.serverStatus.cameraFound && "none" !== w.serverStatus.cameraFound ? ((0, t.wg)(), (0, t.j4)(W, {
                        key: 0
                      }, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Uk)((0, l.zw)(w.serverStatus.cameraFound), 1)];
                        }),
                        _: 1
                      })) : ((0, t.wg)(), (0, t.j4)(W, {
                        key: 1,
                        class: "bg-negative text-white"
                      }, {
                        default: (0, t.w5)(function () {
                          return [o];
                        }),
                        _: 1
                      }))];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }), (0, t.Wm)(k, null, {
            default: (0, t.w5)(function () {
              return [(0, t.Wm)(b, null, {
                default: (0, t.w5)(function () {
                  return [(0, t.Wm)(h)];
                }),
                _: 1
              })];
            }),
            _: 1
          }), (0, t.Wm)(k, null, {
            default: (0, t.w5)(function () {
              return [(0, t.Wm)(b, null, {
                default: (0, t.w5)(function () {
                  return [i, (0, t.Wm)(v, null, {
                    default: (0, t.w5)(function () {
                      return [(0, t.Wm)(W, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(S, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(q, null, {
                                default: (0, t.w5)(function () {
                                  return [f];
                                }),
                                _: 1
                              }), c];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), (0, t.Wm)(W, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(S, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(Z, null, {
                                default: (0, t.w5)(function () {
                                  return [s];
                                }),
                                _: 1
                              }), d];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), (0, t.Wm)(W, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(S, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(Z, null, {
                                default: (0, t.w5)(function () {
                                  return [m];
                                }),
                                _: 1
                              }), _];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          })])];
        }),
        _: 1
      });
    }
    var g = u(36431),
      p = (u(14749), (0, t._)("b", null, "Speicherverbrauch", -1)),
      W = (0, t._)("b", null, "Name", -1),
      v = (0, t._)("b", null, "Größe", -1),
      b = (0, t._)("b", null, "Verbraucht", -1),
      k = (0, t._)("b", null, "Verfügbar", -1),
      h = {
        class: "absolute-full flex flex-center"
      };
    function q(e, n, u, r, a, o) {
      var i = (0, t.up)("q-item-section"),
        f = (0, t.up)("q-item"),
        c = (0, t.up)("q-item-label"),
        s = (0, t.up)("q-badge"),
        d = (0, t.up)("q-linear-progress"),
        m = (0, t.up)("q-list");
      return (0, t.wg)(), (0, t.iD)("div", null, [p, (0, t.Wm)(m, null, {
        default: (0, t.w5)(function () {
          return [(0, t.Wm)(f, null, {
            default: (0, t.w5)(function () {
              return [(0, t.Wm)(i, null, {
                default: (0, t.w5)(function () {
                  return [W];
                }),
                _: 1
              }), (0, t.Wm)(i, null, {
                default: (0, t.w5)(function () {
                  return [v];
                }),
                _: 1
              }), (0, t.Wm)(i, null, {
                default: (0, t.w5)(function () {
                  return [b];
                }),
                _: 1
              }), (0, t.Wm)(i, null, {
                default: (0, t.w5)(function () {
                  return [k];
                }),
                _: 1
              }), (0, t.Wm)(i)];
            }),
            _: 1
          }), ((0, t.wg)(!0), (0, t.iD)(t.HY, null, (0, t.Ko)(r.serverStatus.storageUsage, function (e) {
            return (0, t.wg)(), (0, t.j4)(f, {
              key: e.dev
            }, {
              default: (0, t.w5)(function () {
                return [(0, t.Wm)(i, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.Wm)(c, null, {
                      default: (0, t.w5)(function () {
                        return [(0, t._)("b", null, (0, l.zw)(e.dev), 1)];
                      }),
                      _: 2
                    }, 1024), (0, t.Uk)("(" + (0, l.zw)(e.mount) + ") ", 1)];
                  }),
                  _: 2
                }, 1024), (0, t.Wm)(i, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.Uk)((0, l.zw)(e.storage[0]), 1)];
                  }),
                  _: 2
                }, 1024), (0, t.Wm)(i, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.Uk)((0, l.zw)(e.storage[1]), 1)];
                  }),
                  _: 2
                }, 1024), (0, t.Wm)(i, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.Uk)((0, l.zw)(e.storage[2]), 1)];
                  }),
                  _: 2
                }, 1024), (0, t.Wm)(i, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.Wm)(d, {
                      size: "25px",
                      value: r.percentageToInt(e.storage[3]) / 100,
                      color: r.storageColorsGetter(e.storage[3])
                    }, {
                      default: (0, t.w5)(function () {
                        return [(0, t._)("div", h, [(0, t.Wm)(s, {
                          color: "white",
                          "text-color": r.storageColorsGetter(e.storage[3]),
                          label: e.storage[3]
                        }, null, 8, ["text-color", "label"])])];
                      }),
                      _: 2
                    }, 1032, ["value", "color"])];
                  }),
                  _: 2
                }, 1024)];
              }),
              _: 2
            }, 1024);
          }), 128))];
        }),
        _: 1
      })]);
    }
    u(18048), u(40950), u(55195), u(97490);
    var S = u(98143),
      Z = u(51268),
      U = {
        name: "storageUsed",
        setup: function setup() {
          var e = (0, S.F)(),
            n = (0, Z.Jk)(e),
            u = n.serverStatus,
            t = function t(e) {
              return parseInt(e.replace(/\D/, ""));
            },
            l = function l(e) {
              for (var n = {
                  50: "green",
                  75: "yellow-8",
                  90: "red"
                }, u = t(e), l = 0, r = Object.keys(n); l < r.length; l++) {
                var a = r[l];
                if (u < a) return n[a];
              }
              return n[90];
            };
          return {
            serverStatus: u,
            storageColorsGetter: l,
            percentageToInt: t
          };
        }
      },
      Q = u(11639),
      z = u(13246),
      I = u(490),
      C = u(76749),
      K = u(33115),
      E = u(8289),
      T = u(20990),
      j = u(69984),
      x = u.n(j);
    var F = (0, Q.Z)(U, [["render", q]]);
    var G = F;
    x()(U, "components", {
      QList: z.Z,
      QItem: I.Z,
      QItemSection: C.Z,
      QItemLabel: K.Z,
      QLinearProgress: E.Z,
      QBadge: T.Z
    });
    var y = {
        name: "IndexPage",
        components: {
          StorageUsed: G
        },
        setup: function setup() {
          var e = (0, g.T)(),
            n = (0, S.F)(),
            u = (0, Z.Jk)(n),
            t = u.serverStatus;
          return {
            socket: e,
            serverStatus: t
          };
        }
      },
      A = u(69885),
      B = u(44458),
      L = u(63190);
    var N = (0, Q.Z)(y, [["render", w]]);
    var P = N;
    x()(y, "components", {
      QPage: A.Z,
      QCard: B.Z,
      QCardSection: L.Z,
      QList: z.Z,
      QItem: I.Z,
      QItemSection: C.Z,
      QItemLabel: K.Z
    });
  }
}]);