"use strict";

(self["webpackChunkquasar_project"] = self["webpackChunkquasar_project"] || []).push([[862], {
  91862: function _(e, t, n) {
    n.r(t), n.d(t, {
      default: function _default() {
        return v;
      }
    });
    var r = n(59835),
      o = {
        class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
      },
      l = (0, r._)("div", {
        style: {
          "font-size": "30vh"
        }
      }, " 404 ", -1),
      a = (0, r._)("div", {
        class: "text-h2",
        style: {
          opacity: ".4"
        }
      }, " Oops. Nothing here... ", -1);
    function s(e, t, n, s, c, u) {
      var i = (0, r.up)("q-btn");
      return (0, r.wg)(), (0, r.iD)("div", o, [(0, r._)("div", null, [l, a, (0, r.Wm)(i, {
        class: "q-mt-xl",
        color: "white",
        "text-color": "blue",
        unelevated: "",
        to: "/",
        label: "Go Home",
        "no-caps": ""
      })])]);
    }
    var c = (0, r.aZ)({
        name: "ErrorNotFound"
      }),
      u = n(11639),
      i = n(24455),
      p = n(69984),
      d = n.n(p);
    var f = (0, u.Z)(c, [["render", s]]);
    var v = f;
    d()(c, "components", {
      QBtn: i.Z
    });
  }
}]);