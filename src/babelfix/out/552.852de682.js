"use strict";

(self["webpackChunkquasar_project"] = self["webpackChunkquasar_project"] || []).push([[552], {
  57552: function _(e, n, t) {
    t.r(n), t.d(n, {
      default: function _default() {
        return K;
      }
    });
    t(3240);
    var o = t(59835),
      i = t(61957),
      a = (0, o._)("div", {
        class: "fit full-height row no-wrap justify-center items-center content-center"
      }, [(0, o._)("h4", {
        style: {
          color: "white"
        }
      }, "Auslöser betätigen")], -1),
      r = {
        class: ""
      },
      u = (0, o._)("div", {
        class: ""
      }, [(0, o._)("h4", {
        style: {
          color: "white"
        }
      }, "Auslöser betätigen")], -1),
      l = {
        style: {
          overflow: "hidden",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          "justify-items": "center"
        }
      },
      c = (0, o._)("h1", {
        style: {
          color: "white"
        }
      }, "Warte auf Bild", -1),
      s = {
        key: 0,
        style: {
          "background-color": "#33333333",
          cursor: "no-drop",
          position: "absolute",
          left: "0px",
          right: "0px",
          top: "0px",
          bottom: "0px",
          "z-index": "999999"
        }
      },
      d = {
        key: 0,
        style: {
          position: "absolute",
          right: "18px",
          bottom: "18px"
        }
      },
      v = (0, o.Uk)("Setup-Mode verlassen"),
      m = {
        key: 0,
        style: {
          position: "absolute",
          right: "18px",
          top: "18px"
        }
      };
    function f(e, n, t, f, g, p) {
      var w = (0, o.up)("q-btn"),
        h = (0, o.up)("q-dialog"),
        k = (0, o.up)("snes-countdown"),
        b = (0, o.up)("d-animation"),
        C = (0, o.up)("q-img"),
        W = (0, o.up)("q-fab"),
        _ = (0, o.up)("q-fab-action"),
        y = (0, o.up)("q-page");
      return (0, o.wg)(), (0, o.j4)(y, {
        class: "clientPage",
        onClick: n[15] || (n[15] = function (e) {
          return f.devModeTap();
        })
      }, {
        default: (0, o.w5)(function () {
          return [a, (0, o.Wm)(h, {
            modelValue: f.showTrigger,
            "onUpdate:modelValue": n[2] || (n[2] = function (e) {
              return f.showTrigger = e;
            }),
            class: "clientDialog",
            persistent: "",
            maximized: ""
          }, {
            default: (0, o.w5)(function () {
              return [(0, o._)("div", {
                class: "fit full-height column wrap justify-center items-center content-center",
                onClick: n[1] || (n[1] = function (e) {
                  return f.devModeTap();
                })
              }, [(0, o._)("div", r, [(0, o.Wm)(w, {
                icon: "camera",
                color: "white",
                "text-color": "black",
                size: "xl",
                class: "trigger",
                onClick: n[0] || (n[0] = function (e) {
                  return f.clickTrigger();
                }),
                round: ""
              })]), u])];
            }),
            _: 1
          }, 8, ["modelValue"]), (0, o.Wm)(h, {
            modelValue: f.showCountdown,
            "onUpdate:modelValue": n[3] || (n[3] = function (e) {
              return f.showCountdown = e;
            }),
            class: "clientDialog",
            persistent: "",
            maximized: ""
          }, {
            default: (0, o.w5)(function () {
              return [(0, o._)("div", null, [(0, o.Wm)(k)])];
            }),
            _: 1
          }, 8, ["modelValue"]), (0, o.Wm)(h, {
            modelValue: f.showWaitBetweenCountdownAndPreview,
            "onUpdate:modelValue": n[5] || (n[5] = function (e) {
              return f.showWaitBetweenCountdownAndPreview = e;
            }),
            class: "clientDialog",
            persistent: "",
            maximized: ""
          }, {
            default: (0, o.w5)(function () {
              return [(0, o._)("div", {
                class: "fit full-height column wrap justify-center items-center content-center",
                onClick: n[4] || (n[4] = function (e) {
                  return f.devModeTap();
                })
              }, [(0, o._)("div", l, [(0, o.Wm)(b, {
                trigger: f.hideWatingAnimation,
                triggerWatch: f.updateFadeAnimation
              }, {
                default: (0, o.w5)(function () {
                  return [(0, o.Wm)(b, {
                    trigger: f.showWatingAnimation,
                    triggerWatch: f.updateShowWaitAnimation
                  }, {
                    default: (0, o.w5)(function () {
                      return [c];
                    }),
                    _: 1
                  }, 8, ["trigger", "triggerWatch"])];
                }),
                _: 1
              }, 8, ["trigger", "triggerWatch"])])])];
            }),
            _: 1
          }, 8, ["modelValue"]), (0, o.Wm)(h, {
            modelValue: f.showPreview,
            "onUpdate:modelValue": n[7] || (n[7] = function (e) {
              return f.showPreview = e;
            }),
            class: "clientDialog",
            persistent: "",
            maximized: ""
          }, {
            default: (0, o.w5)(function () {
              return [(0, o._)("div", {
                onClick: n[6] || (n[6] = function (e) {
                  return f.devModeTap();
                })
              }, [(0, o.Wm)(C, {
                src: "".concat(f.httpUrl, "/").concat(f.preview.imagePath),
                fit: "cover",
                height: "100%",
                width: "100%"
              }, null, 8, ["src"])])];
            }),
            _: 1
          }, 8, ["modelValue"]), f.devMode ? ((0, o.wg)(), (0, o.iD)("div", s, [(0, o.Wm)(i.uT, {
            appear: "",
            "enter-active-class": "animated slideInUp",
            "leave-active-class": "animated slideOutDown"
          }, {
            default: (0, o.w5)(function () {
              return [f.devMode ? ((0, o.wg)(), (0, o.iD)("div", d, [(0, o.Wm)(W, {
                icon: "close",
                color: "primary",
                onClick: n[8] || (n[8] = function (e) {
                  return f.devMode = !1;
                })
              }, {
                default: (0, o.w5)(function () {
                  return [v];
                }),
                _: 1
              }), (0, o.Wm)(W, {
                color: "primary",
                icon: "edit",
                direction: "up",
                label: "Modus",
                "vertical-actions-align": "right"
              }, {
                default: (0, o.w5)(function () {
                  return [(0, o.Wm)(_, {
                    color: "primary",
                    "label-position": "left",
                    label: "Auslöser + Countdown + Vorschau",
                    icon: "camera",
                    onClick: n[9] || (n[9] = function (e) {
                      return f.setMode("full");
                    })
                  }), (0, o.Wm)(_, {
                    color: "primary",
                    "label-position": "left",
                    label: "Auslöser + Countdown",
                    icon: "123",
                    onClick: n[10] || (n[10] = function (e) {
                      return f.setMode("trigger+countdown");
                    })
                  }), (0, o.Wm)(_, {
                    color: "accent",
                    "label-position": "left",
                    label: "Countdown + Vorschau",
                    icon: "image",
                    onClick: n[11] || (n[11] = function (e) {
                      return f.setMode("countdown+preview");
                    })
                  }), (0, o.Wm)(_, {
                    color: "secondary",
                    "label-position": "left",
                    label: "Nur letztes Bild",
                    icon: "image",
                    onClick: n[12] || (n[12] = function (e) {
                      return f.setMode("preview");
                    })
                  }), (0, o.Wm)(_, {
                    color: "secondary",
                    "label-position": "left",
                    label: "aktuelle Gallery Slides",
                    icon: "collections"
                  })];
                }),
                _: 1
              })])) : (0, o.kq)("", !0)];
            }),
            _: 1
          }), (0, o.Wm)(i.uT, {
            appear: "",
            "enter-active-class": "animated slideInDown",
            "leave-active-class": "animated slideOutUp"
          }, {
            default: (0, o.w5)(function () {
              return [f.devMode ? ((0, o.wg)(), (0, o.iD)("div", m, [(0, o.Wm)(w, {
                color: "primary",
                rounded: "",
                icon: "fullscreen",
                onClick: n[13] || (n[13] = function (e) {
                  return f.goFullScreen();
                })
              }), (0, o.Wm)(w, {
                color: "primary",
                rounded: "",
                icon: "close",
                label: "Client Modus verlassen",
                onClick: n[14] || (n[14] = function (e) {
                  return f.leaveClient();
                })
              })])) : (0, o.kq)("", !0)];
            }),
            _: 1
          })])) : (0, o.kq)("", !0)];
        }),
        _: 1
      });
    }
    t(18048);
    var g = t(60499),
      p = t(60899),
      w = t(6827),
      h = t(36431),
      k = {
        class: "countdownBackground"
      },
      b = (0, o._)("div", {
        class: "snesCountdownWrapper"
      }, [(0, o._)("div", {
        class: "countdown"
      })], -1),
      C = [b];
    function W(e, n, t, i, a, r) {
      return (0, o.wg)(), (0, o.iD)("div", k, C);
    }
    var _ = {
        name: "snesCountdown",
        components: {}
      },
      y = t(11639);
    var A = (0, y.Z)(_, [["render", W]]);
    var M = A,
      T = t(86970);
    function D(e, n, t, i, a, r) {
      return (0, o.wg)(), (0, o.iD)("span", {
        class: (0, T.C_)(r.animationClass["click"]),
        onClick: n[1] || (n[1] = function (e) {
          return r.animateCheck("click");
        })
      }, [(0, o._)("span", {
        class: (0, T.C_)(r.animationClass["hover"]),
        onMouseenter: n[0] || (n[0] = function (e) {
          return r.animateCheck("hover");
        })
      }, [(0, o._)("span", {
        class: (0, T.C_)(r.animationClass["trigger"])
      }, [(0, o.WI)(e.$slots, "default", {}, void 0, !0)], 2)], 34)], 2);
    }
    var x = t(54080),
      S = t.n(x),
      I = (t(35038), {
        name: "dAnimation",
        props: {
          hover: Object,
          click: Object,
          trigger: Object,
          triggerWatch: Number
        },
        data: function data() {
          return {
            animation: "",
            baseClass: "animate__animated animate__",
            types: ["click", "hover", "trigger"],
            forceAnimate: {
              click: !1,
              hover: !1,
              trigger: !1
            },
            stopAnimationTimer: {
              click: void 0,
              hover: void 0,
              trigger: void 0
            },
            defaultDurations: {
              default: 1e3,
              slow: 2e3,
              slower: 3e3,
              fast: 800,
              faster: 500
            }
          };
        },
        mounted: function mounted() {
          !0 === this.init && this.animate();
        },
        beforeUnmount: function beforeUnmount() {},
        computed: {
          animationClass: function animationClass() {
            var e,
              n = {},
              t = S()(this.types);
            try {
              for (t.s(); !(e = t.n()).done;) {
                var o = e.value;
                n[o] = this.forceAnimate[o] ? "danimation ".concat(this.baseClass).concat(this[o].animation, " animate__").concat(this[o].duration || "") : "";
              }
            } catch (i) {
              t.e(i);
            } finally {
              t.f();
            }
            return n;
          }
        },
        watch: {
          trigger: function trigger(e) {
            this.animate("trigger");
          },
          triggerWatch: function triggerWatch(e) {
            this.animateCheck("trigger");
          }
        },
        emits: ["update"],
        methods: {
          animate: function animate(e) {
            var n = this;
            console.log("animate!", e), this.forceAnimate[e] = !1, setTimeout(function () {
              var t;
              n.forceAnimate[e] = !0, n.stopAnimationTimer[e] && clearTimeout(n.stopAnimationTimer[e]), n.stopAnimationTimer[e] = setTimeout(function () {
                n.forceAnimate[e] = n.persistent || !1;
              }, n.defaultDurations[(null === (t = n[e]) || void 0 === t ? void 0 : t.duration) || "default"]);
            }, 10);
          },
          animateCheck: function animateCheck(e) {
            this[e] && this[e].animation && this.animate(e);
          }
        }
      });
    var F = (0, y.Z)(I, [["render", D], ["__scopeId", "data-v-59d4cf90"]]);
    var Z = F,
      j = t(28339),
      O = t(44858),
      V = t(51268),
      H = t(23577),
      P = t(98143),
      U = {
        name: "ClientPage",
        components: {
          DAnimation: Z,
          SnesCountdown: M
        },
        setup: function setup() {
          var e = (0, h.T)(),
            n = (0, P.F)(),
            t = (0, j.tv)(),
            i = (0, O.u)(),
            a = (0, V.Jk)(i),
            r = a.mode,
            u = {
              full: {
                trigger: !0,
                countdown: !0,
                preview: !0
              },
              "trigger+countdown": {
                trigger: !0,
                countdown: !0,
                preview: !1
              },
              "countdown+preview": {
                trigger: !1,
                countdown: !0,
                preview: !0
              },
              preview: {
                trigger: !1,
                countdown: !1,
                preview: !0
              }
            },
            l = (0, g.iH)({}),
            c = (0, g.iH)(!1),
            s = function s() {
              var e = ["flip", "jackInTheBox", "jackInTheBox", "lightSpeedInRight", "lightSpeedInLeft", "backInDown", "backInUp", "backInLeft", "backInRight"];
              return e[Math.floor(Math.random() * e.length)];
            },
            d = function d() {
              var e = ["lightSpeedInRight", "hinge", "hinge", "lightSpeedOutLeft", "backOutDown", "backOutUp", "backOutLeft", "backOutRight", "fadeOut", "fadeOut"];
              return e[Math.floor(Math.random() * e.length)];
            },
            v = (0, g.iH)(0),
            m = (0, g.iH)(0),
            f = (0, o.Fl)(function () {
              return {
                animation: s(),
                duration: "slower",
                updateShowWaitAnimation: m.value
              };
            }),
            k = (0, o.Fl)(function () {
              return {
                animation: d(),
                duration: "slower",
                updateFadeAnimation: v.value
              };
            }),
            b = (0, g.iH)(0),
            C = (0, V.Jk)(i),
            W = C.devMode,
            _ = 15,
            y = (0, g.iH)("Noch ".concat(_ - b.value, " tippen für Einstellungen")),
            A = (0, p.Z)(function () {
              b.value = 0;
            }, 1e4),
            M = function M() {
              if (i.goFullScreen(), b.value++, A(), b.value === _ - 10 && (this.notif = w.Z.create({
                caption: y,
                timeout: 0,
                group: !1
              })), b.value >= _ - 10 && (y.value = "Noch ".concat(_ - b.value, " tippen für Einstellungen"), this.notif({
                timeout: 200
              })), b.value >= _) return W.value = !0, void (b.value = 0);
            },
            T = (0, p.Z)(function () {
              W.value = !1;
            }, 1e4),
            D = (0, p.Z)(function () {
              W.value = !1;
            }, 300),
            x = function x() {
              i.goFullScreen(), e.emit("trigger");
            },
            S = (0, g.iH)(0),
            I = (0, o.Fl)(function () {
              return {
                imagePath: "preview/preview.jpg?tid=" + S.value
              };
            }),
            F = (0, g.iH)(!1);
          e.on("preview", function (e) {
            console.log("got preview from Server"), c.value = !1, S.value++, F.value = !0, I.value = e;
          });
          var Z = (0, g.iH)(!1),
            U = (0, g.iH)({
              count: 1,
              animation: "wobble",
              force: !0
            });
          e.on("countdown", function (e) {
            console.log("got countdown from Server"), l.value.countdown && (Z.value = !0);
          }), e.on("pictureTaken", function (e) {
            var t, o, i, a;
            console.log("countdown End", -1 * parseInt(null === (t = n.settings) || void 0 === t || null === (o = t.camera) || void 0 === o ? void 0 : o.triggerDelay)), setTimeout(function () {
              U.value = {
                count: 2,
                animation: "heartBeat",
                speed: "fast",
                force: !0
              };
            }, -1 * parseInt(null === (i = n.settings) || void 0 === i || null === (a = i.camera) || void 0 === a ? void 0 : a.triggerDelay));
          }), e.on("countdownEnd", function (e) {
            setTimeout(function () {
              Z.value = !1, c.value = !0, setTimeout(function () {
                return m.value++;
              }, 1), setTimeout(function () {
                return v.value++;
              }, 2500);
            }, 1e3);
          });
          var q = (0, g.iH)(!1),
            B = function B() {
              t.push("/");
            };
          (0, o.bv)(function () {
            i.showHeader = !1, i.showMenu = !1, i.goFullScreen(), console.log("reset handle dada?"), e.on("setClientMode", function () {
              Q(r.value);
            });
          }), (0, o.Ah)(function () {
            i.showHeader = !0, i.showMenu = !0, i.leftDrawerOpen = !0;
          });
          var Q = function Q(e) {
            switch (l.value = u[e], r.value = e, console.log(r.value), r.value) {
              case "full":
                q.value = !0, Z.value = !1, F.value = !1;
                break;
              case "trigger+countdown":
                q.value = !0, Z.value = !1, F.value = !1;
                break;
              case "countdown+preview":
                q.value = !1, Z.value = !1, F.value = !1;
                break;
              case "preview":
                q.value = !1, Z.value = !1, F.value = !0;
                break;
            }
          };
          return Q(r.value), {
            modes: u,
            mode: r,
            setMode: Q,
            devModeTap: M,
            devMode: W,
            hideDevMode: T,
            hideDevModeQuickly: D,
            clickTrigger: x,
            showPreview: F,
            preview: I,
            showCountdown: Z,
            endOfCountdown: U,
            showTrigger: q,
            showWaitBetweenCountdownAndPreview: c,
            showWatingAnimation: f,
            hideWatingAnimation: k,
            updateFadeAnimation: v,
            updateShowWaitAnimation: m,
            leaveClient: B,
            goFullScreen: i.goFullScreen,
            httpUrl: H.D
          };
        }
      },
      q = t(69885),
      B = t(32074),
      Q = t(24455),
      z = t(70335),
      E = t(19361),
      L = t(10935),
      N = t(22857),
      R = t(62146),
      J = t(69984),
      G = t.n(J);
    var $ = (0, y.Z)(U, [["render", f]]);
    var K = $;
    G()(U, "components", {
      QPage: q.Z,
      QDialog: B.Z,
      QBtn: Q.Z,
      QImg: z.Z,
      QFab: E.Z,
      QFabAction: L.Z,
      QIcon: N.Z
    }), G()(U, "directives", {
      ClosePopup: R.Z
    });
  }
}]);