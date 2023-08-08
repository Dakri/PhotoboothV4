"use strict";

(self["webpackChunkquasar_project"] = self["webpackChunkquasar_project"] || []).push([[974], {
  36974: function _(e, n, l) {
    l.r(n), l.d(n, {
      default: function _default() {
        return x;
      }
    });
    var r = l(59835),
      a = l(86970),
      t = {
        class: "full-width q-pa-lg",
        style: {
          "max-height": "calc(100vh - 50px)",
          overflow: "auto"
        }
      },
      u = (0, r._)("br", null, null, -1),
      o = (0, r.Uk)(),
      i = ["onClick"],
      c = {
        style: {
          position: "absolute",
          top: "0.5em",
          left: "0.5em",
          "background-color": "#33333388",
          color: "#ffffff",
          padding: "0.5em",
          "font-weight": "bold"
        }
      },
      s = ["src"];
    function f(e, n, l, f, g, d) {
      var m = (0, r.up)("q-card-section"),
        v = (0, r.up)("q-card"),
        p = (0, r.up)("vue-easy-lightbox"),
        w = (0, r.up)("q-page");
      return (0, r.wg)(), (0, r.j4)(w, {
        style: {
          "background-color": "#ffffff"
        }
      }, {
        default: (0, r.w5)(function () {
          return [(0, r._)("div", t, [(0, r._)("div", null, [(0, r._)("h4", null, [(0, r.Uk)((0, a.zw)(f.currentGallery.name), 1), u, o, (0, r._)("small", null, "(" + (0, a.zw)(f.currentGallery.photos) + " Fotos)", 1)])]), (0, r.Wm)(v, null, {
            default: (0, r.w5)(function () {
              return [(0, r.Wm)(m, {
                class: "row wrap q-gutter-lg"
              }, {
                default: (0, r.w5)(function () {
                  return [((0, r.wg)(!0), (0, r.iD)(r.HY, null, (0, r.Ko)(f.galleryImagesSrcThumbnails, function (e, n) {
                    return (0, r.wg)(), (0, r.iD)("div", {
                      key: n,
                      style: {
                        cursor: "pointer",
                        position: "relative"
                      },
                      onClick: function onClick() {
                        return f.showImg(n);
                      }
                    }, [(0, r._)("span", c, (0, a.zw)(n), 1), (0, r._)("img", {
                      src: e
                    }, null, 8, s)], 8, i);
                  }), 128))];
                }),
                _: 1
              })];
            }),
            _: 1
          }), (0, r.Wm)(p, {
            visible: f.visibleRef,
            imgs: f.galleryImagesSrc,
            index: f.indexRef,
            onHide: f.onHideImg
          }, null, 8, ["visible", "imgs", "index", "onHide"])])];
        }),
        _: 1
      });
    }
    l(47378), l(3240);
    var g = l(60499),
      d = l(21495),
      m = l(51268),
      v = l(51019),
      p = l(23577),
      w = {
        name: "SettingsPage",
        components: {
          VueEasyLightbox: v.Z
        },
        setup: function setup() {
          var e = (0, d.s)(),
            n = (0, m.Jk)(e),
            l = n.currentGallery,
            a = n.galleryImages;
          e.requestGallery(), e.requestGalleryImages();
          var t = (0, r.Fl)(function () {
              return l.value.id ? a.value.map(function (e) {
                return "".concat(p.D, "/").concat(l.value.id, "/thumbnails/").concat(e);
              }) : [];
            }),
            u = (0, r.Fl)(function () {
              return l.value.id ? a.value.map(function (e) {
                return "".concat(p.D, "/").concat(l.value.id, "/preview/").concat(e);
              }) : [];
            }),
            o = (0, g.iH)(!1),
            i = (0, g.iH)(0),
            c = function c(e) {
              console.log(e), i.value = e, o.value = !0;
            },
            s = function s() {
              return o.value = !1;
            };
          return {
            visibleRef: o,
            showImg: c,
            onHideImg: s,
            indexRef: i,
            currentGallery: l,
            galleryImages: a,
            galleryImagesSrcThumbnails: t,
            galleryImagesSrc: u
          };
        }
      },
      y = l(11639),
      h = l(69885),
      b = l(44458),
      k = l(63190),
      _ = l(69984),
      I = l.n(_);
    var q = (0, y.Z)(w, [["render", f]]);
    var x = q;
    I()(w, "components", {
      QPage: h.Z,
      QCard: b.Z,
      QCardSection: k.Z
    });
  }
}]);