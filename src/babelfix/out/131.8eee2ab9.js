"use strict";

(self["webpackChunkquasar_project"] = self["webpackChunkquasar_project"] || []).push([[131], {
  43131: function _(e, t, n) {
    n.r(t), n.d(t, {
      default: function _default() {
        return H;
      }
    });
    var r = n(59835),
      a = (0, r.Uk)(" Photobooth V4 ("),
      u = (0, r.Uk)("Verbunden"),
      l = (0, r.Uk)("Nicht verbunden "),
      o = (0, r.Uk)("Suchen"),
      i = (0, r.Uk)(") "),
      c = (0, r.Uk)(" Photobooth Menu ");
    function f(e, t, n, f, p, d) {
      var s = (0, r.up)("q-btn"),
        w = (0, r.up)("q-chip"),
        k = (0, r.up)("q-toolbar-title"),
        g = (0, r.up)("q-toolbar"),
        m = (0, r.up)("q-header"),
        h = (0, r.up)("q-item-label"),
        q = (0, r.up)("EssentialLink"),
        v = (0, r.up)("q-list"),
        b = (0, r.up)("q-drawer"),
        y = (0, r.up)("router-view"),
        Z = (0, r.up)("q-page-container"),
        _ = (0, r.up)("q-footer"),
        Q = (0, r.up)("q-layout");
      return (0, r.wg)(), (0, r.j4)(Q, {
        view: "lHh Lpr lFf"
      }, {
        default: (0, r.w5)(function () {
          return [e.pageState.showHeader ? ((0, r.wg)(), (0, r.j4)(m, {
            key: 0,
            elevated: ""
          }, {
            default: (0, r.w5)(function () {
              return [(0, r.Wm)(g, null, {
                default: (0, r.w5)(function () {
                  return [(0, r.Wm)(s, {
                    flat: "",
                    dense: "",
                    round: "",
                    icon: "menu",
                    "aria-label": "Menu",
                    onClick: e.toggleLeftDrawer
                  }, null, 8, ["onClick"]), (0, r.Wm)(k, null, {
                    default: (0, r.w5)(function () {
                      return [a, e.connected ? ((0, r.wg)(), (0, r.j4)(w, {
                        key: 0,
                        color: "green"
                      }, {
                        default: (0, r.w5)(function () {
                          return [u];
                        }),
                        _: 1
                      })) : (0, r.kq)("", !0), e.connected ? (0, r.kq)("", !0) : ((0, r.wg)(), (0, r.j4)(w, {
                        key: 1,
                        color: "red"
                      }, {
                        default: (0, r.w5)(function () {
                          return [l];
                        }),
                        _: 1
                      })), e.connected ? (0, r.kq)("", !0) : ((0, r.wg)(), (0, r.j4)(s, {
                        key: 2,
                        icon: "search",
                        onClick: t[0] || (t[0] = function (t) {
                          return e.serverSearch = !0;
                        })
                      }, {
                        default: (0, r.w5)(function () {
                          return [o];
                        }),
                        _: 1
                      })), i];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          })) : (0, r.kq)("", !0), e.pageState.showMenu ? ((0, r.wg)(), (0, r.j4)(b, {
            key: 1,
            modelValue: e.pageState.leftDrawerOpen,
            "onUpdate:modelValue": t[1] || (t[1] = function (t) {
              return e.pageState.leftDrawerOpen = t;
            }),
            bordered: ""
          }, {
            default: (0, r.w5)(function () {
              return [(0, r.Wm)(v, null, {
                default: (0, r.w5)(function () {
                  return [(0, r.Wm)(h, {
                    header: ""
                  }, {
                    default: (0, r.w5)(function () {
                      return [c];
                    }),
                    _: 1
                  }), ((0, r.wg)(!0), (0, r.iD)(r.HY, null, (0, r.Ko)(e.essentialLinks, function (e) {
                    return (0, r.wg)(), (0, r.j4)(q, (0, r.dG)({
                      key: e.title
                    }, e), null, 16);
                  }), 128))];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue"])) : (0, r.kq)("", !0), (0, r.Wm)(Z, null, {
            default: (0, r.w5)(function () {
              return [(0, r.Wm)(y)];
            }),
            _: 1
          }), (0, r.Wm)(_, {
            elevated: "",
            class: "bg-grey-8 text-white footer"
          })];
        }),
        _: 1
      });
    }
    var p = n(86970);
    function d(e, t, n, a, u, l) {
      var o = (0, r.up)("q-icon"),
        i = (0, r.up)("q-item-section"),
        c = (0, r.up)("q-item-label"),
        f = (0, r.up)("q-item");
      return (0, r.wg)(), (0, r.j4)(f, {
        clickable: "",
        tag: "a",
        target: "_self",
        href: e.link,
        onClick: e.special
      }, {
        default: (0, r.w5)(function () {
          return [e.icon ? ((0, r.wg)(), (0, r.j4)(i, {
            key: 0,
            avatar: ""
          }, {
            default: (0, r.w5)(function () {
              return [(0, r.Wm)(o, {
                name: e.icon
              }, null, 8, ["name"])];
            }),
            _: 1
          })) : (0, r.kq)("", !0), (0, r.Wm)(i, null, {
            default: (0, r.w5)(function () {
              return [(0, r.Wm)(c, null, {
                default: (0, r.w5)(function () {
                  return [(0, r.Uk)((0, p.zw)(e.title), 1)];
                }),
                _: 1
              }), (0, r.Wm)(c, {
                caption: ""
              }, {
                default: (0, r.w5)(function () {
                  return [(0, r.Uk)((0, p.zw)(e.caption), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["href", "onClick"]);
    }
    var s = (0, r.aZ)({
        name: "EssentialLink",
        props: {
          title: {
            type: String,
            required: !0
          },
          caption: {
            type: String,
            default: ""
          },
          link: {
            type: String,
            default: "#"
          },
          icon: {
            type: String,
            default: ""
          },
          special: {
            type: Function,
            default: function _default() {}
          }
        }
      }),
      w = n(11639),
      k = n(490),
      g = n(76749),
      m = n(22857),
      h = n(33115),
      q = n(69984),
      v = n.n(q);
    var b = (0, w.Z)(s, [["render", d]]);
    var y = b;
    v()(s, "components", {
      QItem: k.Z,
      QItemSection: g.Z,
      QIcon: m.Z,
      QItemLabel: h.Z
    });
    var Z = n(44858),
      _ = n(51268),
      Q = n(36431),
      S = [{
        title: "Dashboard",
        caption: "Overview",
        icon: "dashboard",
        link: "/#/"
      }, {
        title: "Client",
        caption: "Trigger / Preview / Gallery",
        icon: "camera",
        link: "/#/client"
      }, {
        title: "Settings",
        caption: "Delay, Preview Timer, Camera",
        icon: "settings",
        link: "/#/settings"
      }, {
        title: "Gallery",
        caption: "Gallery Overview",
        icon: "collections",
        link: "/#/gallery"
      }],
      L = (0, r.aZ)({
        name: "MainLayout",
        components: {
          EssentialLink: y
        },
        setup: function setup() {
          var e = (0, Z.u)(),
            t = (0, Q.T)(),
            n = (0, _.Jk)(t),
            r = n.connected,
            a = (0, _.Jk)(e),
            u = a.serverSearch;
          return {
            connected: r,
            serverSearch: u,
            pageState: e,
            essentialLinks: S,
            toggleLeftDrawer: function toggleLeftDrawer() {
              e.leftDrawerOpen = !e.leftDrawerOpen;
            }
          };
        }
      }),
      W = n(77605),
      j = n(16602),
      C = n(51663),
      D = n(24455),
      U = n(81973),
      O = n(57691),
      T = n(36689),
      I = n(13246),
      P = n(12133),
      V = n(71378);
    var G = (0, w.Z)(L, [["render", f]]);
    var H = G;
    v()(L, "components", {
      QLayout: W.Z,
      QHeader: j.Z,
      QToolbar: C.Z,
      QBtn: D.Z,
      QToolbarTitle: U.Z,
      QChip: O.Z,
      QDrawer: T.Z,
      QList: I.Z,
      QItemLabel: h.Z,
      QPageContainer: P.Z,
      QFooter: V.Z
    });
  }
}]);