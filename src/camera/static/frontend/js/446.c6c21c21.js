"use strict";

(self["webpackChunkquasar_project"] = self["webpackChunkquasar_project"] || []).push([[446], {
  70446: function _(e, l, n) {
    n.r(l), n.d(l, {
      default: function _default() {
        return ze;
      }
    });
    var t = n(59835),
      u = n(86970),
      r = {
        class: "full-width full-height"
      },
      a = (0, t._)("div", {
        class: "text-h4 q-mb-md"
      }, "Allgemein", -1),
      i = {
        class: "q-gutter-md"
      },
      o = (0, t._)("div", {
        class: "text-h4 q-mb-md"
      }, "Kamera/Bild Einstellungen", -1),
      c = {
        class: "q-gutter-md"
      },
      m = (0, t._)("div", {
        class: "text-h4 q-mb-md"
      }, "Galerie", -1),
      s = {
        class: "q-gutter-md"
      },
      d = (0, t._)("br", null, null, -1),
      f = (0, t._)("div", {
        class: "text-h4 q-mb-md"
      }, "Galerien", -1),
      p = {
        class: "q-gutter-md"
      },
      w = (0, t.Uk)(' Noch keine Gallery vorhanden, bitte über das "+" erstellen '),
      b = (0, t.Uk)("Name + Details"),
      y = (0, t.Uk)(" Aktiv "),
      g = (0, t.Uk)(" USB Ziel "),
      _ = (0, t.Uk)(" Aktion "),
      v = {
        key: 0
      },
      W = (0, t.Uk)("Aktivieren"),
      U = (0, t.Uk)("USB für Kopie konfigurieren"),
      k = (0, t.Uk)("Auf USB Downloaden"),
      h = (0, t.Uk)("Leeren"),
      G = (0, t.Uk)("Löschen"),
      q = {
        class: "text-right"
      },
      V = {
        class: "q-ml-sm"
      },
      C = (0, t.Uk)("Gallerie "),
      D = (0, t.Uk)(" wirklich löschen?"),
      z = {
        class: "q-ml-sm"
      },
      Z = (0, t.Uk)("Gallerie "),
      Q = (0, t.Uk)(" wirklich leeren?"),
      x = (0, t.Uk)("Wählen"),
      S = (0, t.Uk)("Kopieren"),
      j = (0, t._)("div", {
        class: "text-h6"
      }, "Neue Galerie erstellen", -1),
      A = {
        class: "row q-gutter-md"
      },
      T = (0, t.Uk)("Erstellen"),
      H = (0, t.Uk)("Abbrechen"),
      L = (0, t._)("div", {
        class: "text-h4 q-mb-md"
      }, "Usb Speicher", -1),
      F = (0, t._)("div", {
        class: "text-h4 q-mb-md"
      }, "Movies", -1),
      I = (0, t._)("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.", -1),
      M = (0, t._)("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.", -1),
      B = (0, t._)("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.", -1);
    function P(e, l, n, P, K, N) {
      var O = (0, t.up)("q-tab"),
        E = (0, t.up)("q-tabs"),
        Y = (0, t.up)("q-input"),
        $ = (0, t.up)("q-tab-panel"),
        J = (0, t.up)("q-item-section"),
        R = (0, t.up)("q-item"),
        X = (0, t.up)("q-item-label"),
        ee = (0, t.up)("q-icon"),
        le = (0, t.up)("q-separator"),
        ne = (0, t.up)("q-list"),
        te = (0, t.up)("q-menu"),
        ue = (0, t.up)("q-btn"),
        re = (0, t.up)("q-avatar"),
        ae = (0, t.up)("q-card-section"),
        ie = (0, t.up)("q-card-actions"),
        oe = (0, t.up)("q-card"),
        ce = (0, t.up)("q-dialog"),
        me = (0, t.up)("usb-devices"),
        se = (0, t.up)("q-checkbox"),
        de = (0, t.up)("q-select"),
        fe = (0, t.up)("q-tab-panels"),
        pe = (0, t.up)("q-page"),
        we = (0, t.Q2)("close-popup");
      return (0, t.wg)(), (0, t.j4)(pe, {
        style: {
          "background-color": "#ffffff"
        }
      }, {
        default: (0, t.w5)(function () {
          return [(0, t._)("div", r, [(0, t.Wm)(E, {
            modelValue: P.tab,
            "onUpdate:modelValue": l[0] || (l[0] = function (e) {
              return P.tab = e;
            }),
            horizontal: "",
            class: "bg-teal text-white",
            "keep-alive": ""
          }, {
            default: (0, t.w5)(function () {
              return [(0, t.Wm)(O, {
                name: "general",
                icon: "settings",
                label: "Allgemein"
              }), (0, t.Wm)(O, {
                name: "camera",
                icon: "camera",
                label: "Kamera"
              }), (0, t.Wm)(O, {
                name: "gallery",
                icon: "collections",
                label: "Galerie"
              }), (0, t.Wm)(O, {
                name: "usb",
                icon: "usb",
                label: "Usb"
              }), (0, t.Wm)(O, {
                name: "clients",
                icon: "computer",
                label: "Clients"
              })];
            }),
            _: 1
          }, 8, ["modelValue"]), (0, t.Wm)(fe, {
            modelValue: P.tab,
            "onUpdate:modelValue": l[23] || (l[23] = function (e) {
              return P.tab = e;
            }),
            animated: "",
            horizontal: "",
            infinite: "",
            "transition-prev": "jump-right",
            "transition-next": "jump-left"
          }, {
            default: (0, t.w5)(function () {
              return [(0, t.Wm)($, {
                name: "general"
              }, {
                default: (0, t.w5)(function () {
                  return [a, (0, t._)("div", i, [(0, t.Wm)(Y, {
                    filled: "",
                    type: "text",
                    modelValue: P.app.password,
                    "onUpdate:modelValue": [l[1] || (l[1] = function (e) {
                      return P.app.password = e;
                    }), P.updateSettings],
                    modelModifiers: {
                      lazy: !0
                    },
                    label: "Passwort für allgemeinen Zugriff",
                    hint: "Default:  photobooth"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), (0, t.Wm)(Y, {
                    filled: "",
                    type: "text",
                    modelValue: P.settings.password,
                    "onUpdate:modelValue": [l[2] || (l[2] = function (e) {
                      return P.settings.password = e;
                    }), P.updateSettings],
                    modelModifiers: {
                      lazy: !0
                    },
                    label: "Passwort um Einstellungen zu ändern",
                    hint: "Default:  photobooth"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), (0, t.Wm)(Y, {
                    filled: "",
                    type: "text",
                    modelValue: P.gallery.password,
                    "onUpdate:modelValue": [l[3] || (l[3] = function (e) {
                      return P.gallery.password = e;
                    }), P.updateSettings],
                    modelModifiers: {
                      lazy: !0
                    },
                    label: "Passwort um Gallerie einzusehen",
                    hint: "Default:  photobooth"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])])];
                }),
                _: 1
              }), (0, t.Wm)($, {
                name: "camera"
              }, {
                default: (0, t.w5)(function () {
                  return [o, (0, t._)("div", c, [(0, t.Wm)(Y, {
                    filled: "",
                    type: "number",
                    modelValue: P.camera.triggerDelay,
                    "onUpdate:modelValue": [l[4] || (l[4] = function (e) {
                      return P.camera.triggerDelay = e;
                    }), P.updateSettings],
                    modelModifiers: {
                      lazy: !0
                    },
                    label: "Auslöser Verzögerung",
                    hint: "Default:  -465",
                    prefix: "Millisekunden"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), (0, t.Wm)(Y, {
                    filled: "",
                    type: "number",
                    modelValue: P.camera.countdown,
                    "onUpdate:modelValue": [l[5] || (l[5] = function (e) {
                      return P.camera.countdown = e;
                    }), P.updateSettings],
                    modelModifiers: {
                      lazy: !0
                    },
                    label: "Auslöser Countdown",
                    hint: "Default:  3",
                    prefix: "Sekunden"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), (0, t.Wm)(Y, {
                    filled: "",
                    type: "number",
                    modelValue: P.camera.previewTimeout,
                    "onUpdate:modelValue": [l[6] || (l[6] = function (e) {
                      return P.camera.previewTimeout = e;
                    }), P.updateSettings],
                    modelModifiers: {
                      lazy: !0
                    },
                    label: "Bildanzeige Timeout",
                    hint: "Default:  5",
                    prefix: "Sekunden"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])])];
                }),
                _: 1
              }), (0, t.Uk)(" " + (0, u.zw)(P.galleryList) + " ", 1), (0, t.Wm)($, {
                name: "gallery"
              }, {
                default: (0, t.w5)(function () {
                  return [m, (0, t._)("div", s, [(0, t.Wm)(Y, {
                    filled: "",
                    type: "text",
                    modelValue: P.gallery.resolution,
                    "onUpdate:modelValue": [l[7] || (l[7] = function (e) {
                      return P.gallery.resolution = e;
                    }), P.updateSettings],
                    modelModifiers: {
                      lazy: !0
                    },
                    label: "Breite Thumbnails",
                    hint: "Default:  80px",
                    prefix: "Width"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])]), d, f, (0, t._)("div", p, [(0, t.Wm)(ne, {
                    class: "gallery-list"
                  }, {
                    default: (0, t.w5)(function () {
                      return [P.galleryList.length <= 0 ? ((0, t.wg)(), (0, t.j4)(R, {
                        key: 0
                      }, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(J, {
                            class: "col-6"
                          }, {
                            default: (0, t.w5)(function () {
                              return [w];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })) : (0, t.kq)("", !0), (0, t.Wm)(R, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(J, {
                            class: "col-6"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(X, null, {
                                default: (0, t.w5)(function () {
                                  return [b];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }), (0, t.Wm)(J, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(X, null, {
                                default: (0, t.w5)(function () {
                                  return [y];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }), (0, t.Wm)(J, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(X, null, {
                                default: (0, t.w5)(function () {
                                  return [g];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          }), (0, t.Wm)(J, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(X, null, {
                                default: (0, t.w5)(function () {
                                  return [_];
                                }),
                                _: 1
                              })];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      }), ((0, t.wg)(!0), (0, t.iD)(t.HY, null, (0, t.Ko)(P.galleryList, function (e) {
                        return (0, t.wg)(), (0, t.j4)(R, {
                          key: e.id
                        }, {
                          default: (0, t.w5)(function () {
                            return [(0, t.Wm)(J, {
                              class: "col-6"
                            }, {
                              default: (0, t.w5)(function () {
                                return [(0, t.Wm)(X, null, {
                                  default: (0, t.w5)(function () {
                                    return [(0, t._)("b", null, (0, u.zw)(e.name), 1)];
                                  }),
                                  _: 2
                                }, 1024), (0, t.Wm)(X, null, {
                                  default: (0, t.w5)(function () {
                                    return [(0, t.Uk)((0, u.zw)(e.photos) + " Fotos / " + (0, u.zw)(e.storedOnUSB) + " Usb", 1)];
                                  }),
                                  _: 2
                                }, 1024)];
                              }),
                              _: 2
                            }, 1024), (0, t.Wm)(J, null, {
                              default: (0, t.w5)(function () {
                                return [(0, t.Wm)(X, null, {
                                  default: (0, t.w5)(function () {
                                    return [e.active ? ((0, t.wg)(), (0, t.j4)(ee, {
                                      key: 0,
                                      name: "check_circle",
                                      size: "md",
                                      color: "green",
                                      filled: ""
                                    })) : (0, t.kq)("", !0), e.active ? (0, t.kq)("", !0) : ((0, t.wg)(), (0, t.j4)(ee, {
                                      key: 1,
                                      name: "check_circle",
                                      size: "md",
                                      disabled: "true",
                                      color: "gray"
                                    }))];
                                  }),
                                  _: 2
                                }, 1024)];
                              }),
                              _: 2
                            }, 1024), (0, t.Wm)(J, null, {
                              default: (0, t.w5)(function () {
                                return [(0, t.Wm)(X, null, {
                                  default: (0, t.w5)(function () {
                                    return [e.usbTarget ? ((0, t.wg)(), (0, t.iD)("span", v, [(0, t.Uk)((0, u.zw)(e.usbTarget.dev) + " ", 1), (0, t._)("i", null, "(" + (0, u.zw)(e.usbTarget.size) + ")", 1)])) : (0, t.kq)("", !0)];
                                  }),
                                  _: 2
                                }, 1024)];
                              }),
                              _: 2
                            }, 1024), (0, t.Wm)(J, {
                              class: "text-right"
                            }, {
                              default: (0, t.w5)(function () {
                                return [(0, t.Wm)(X, null, {
                                  default: (0, t.w5)(function () {
                                    return [(0, t.Wm)(ue, {
                                      color: "primary",
                                      icon: "menu"
                                    }, {
                                      default: (0, t.w5)(function () {
                                        return [(0, t.Wm)(te, {
                                          "transition-show": "jump-down",
                                          "transition-hide": "jump-up"
                                        }, {
                                          default: (0, t.w5)(function () {
                                            return [(0, t.Wm)(ne, {
                                              style: {
                                                "min-width": "100px"
                                              }
                                            }, {
                                              default: (0, t.w5)(function () {
                                                return [(0, t.Wm)(R, {
                                                  clickable: "",
                                                  disable: e.active
                                                }, {
                                                  default: (0, t.w5)(function () {
                                                    return [(0, t.Wm)(J, null, {
                                                      default: (0, t.w5)(function () {
                                                        return [W];
                                                      }),
                                                      _: 1
                                                    })];
                                                  }),
                                                  _: 2
                                                }, 1032, ["disable"]), (0, t.Wm)(R, {
                                                  clickable: ""
                                                }, {
                                                  default: (0, t.w5)(function () {
                                                    return [(0, t.wy)(((0, t.wg)(), (0, t.j4)(J, {
                                                      onClick: function onClick(l) {
                                                        return P.configureGalleryUsb(e);
                                                      }
                                                    }, {
                                                      default: (0, t.w5)(function () {
                                                        return [U];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["onClick"])), [[we]])];
                                                  }),
                                                  _: 2
                                                }, 1024), (0, t.Wm)(R, {
                                                  clickable: ""
                                                }, {
                                                  default: (0, t.w5)(function () {
                                                    return [(0, t.wy)(((0, t.wg)(), (0, t.j4)(J, {
                                                      onClick: function onClick(l) {
                                                        return P.copyGalleryUsb(e);
                                                      }
                                                    }, {
                                                      default: (0, t.w5)(function () {
                                                        return [k];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["onClick"])), [[we]])];
                                                  }),
                                                  _: 2
                                                }, 1024), (0, t.Wm)(le), (0, t.Wm)(R, {
                                                  clickable: ""
                                                }, {
                                                  default: (0, t.w5)(function () {
                                                    return [(0, t.wy)(((0, t.wg)(), (0, t.j4)(J, {
                                                      onClick: function onClick(l) {
                                                        return P.clearGallery(e);
                                                      }
                                                    }, {
                                                      default: (0, t.w5)(function () {
                                                        return [h];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["onClick"])), [[we]])];
                                                  }),
                                                  _: 2
                                                }, 1024), (0, t.Wm)(R, {
                                                  clickable: ""
                                                }, {
                                                  default: (0, t.w5)(function () {
                                                    return [(0, t.wy)(((0, t.wg)(), (0, t.j4)(J, {
                                                      onClick: function onClick(l) {
                                                        return P.removeGallery(e);
                                                      }
                                                    }, {
                                                      default: (0, t.w5)(function () {
                                                        return [G];
                                                      }),
                                                      _: 2
                                                    }, 1032, ["onClick"])), [[we]])];
                                                  }),
                                                  _: 2
                                                }, 1024)];
                                              }),
                                              _: 2
                                            }, 1024)];
                                          }),
                                          _: 2
                                        }, 1024)];
                                      }),
                                      _: 2
                                    }, 1024)];
                                  }),
                                  _: 2
                                }, 1024)];
                              }),
                              _: 2
                            }, 1024)];
                          }),
                          _: 2
                        }, 1024);
                      }), 128)), (0, t.Wm)(R, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(J, {
                            class: "text-right"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t._)("div", q, [(0, t.Wm)(ue, {
                                fab: "",
                                icon: "add",
                                color: "primary",
                                onClick: l[8] || (l[8] = function (e) {
                                  return P.showGalleryDialog = !0;
                                })
                              })])];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }), (0, t.Wm)(ce, {
                    modelValue: P.confirmDelete,
                    "onUpdate:modelValue": l[10] || (l[10] = function (e) {
                      return P.confirmDelete = e;
                    }),
                    persistent: ""
                  }, {
                    default: (0, t.w5)(function () {
                      return [(0, t.Wm)(oe, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(ae, {
                            class: "row items-center"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(re, {
                                icon: "trash",
                                color: "primary",
                                "text-color": "white"
                              }), (0, t._)("span", V, [C, (0, t._)("b", null, (0, u.zw)(P.toDeleteGallery.name), 1), D])];
                            }),
                            _: 1
                          }), (0, t.Wm)(ie, {
                            align: "right"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.wy)((0, t.Wm)(ue, {
                                flat: "",
                                label: "Abbrechen",
                                color: "primary"
                              }, null, 512), [[we]]), (0, t.wy)((0, t.Wm)(ue, {
                                flat: "",
                                label: "Löschen",
                                color: "primary",
                                onClick: l[9] || (l[9] = function (e) {
                                  return P.removeGalleryConfirmed(P.toDeleteGallery);
                                })
                              }, null, 512), [[we]])];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), (0, t.Wm)(ce, {
                    modelValue: P.confirmClear,
                    "onUpdate:modelValue": l[12] || (l[12] = function (e) {
                      return P.confirmClear = e;
                    }),
                    persistent: ""
                  }, {
                    default: (0, t.w5)(function () {
                      return [(0, t.Wm)(oe, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(ae, {
                            class: "row items-center"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(re, {
                                icon: "trash",
                                color: "primary",
                                "text-color": "white"
                              }), (0, t._)("span", z, [Z, (0, t._)("b", null, (0, u.zw)(P.toClearGallery.name), 1), Q])];
                            }),
                            _: 1
                          }), (0, t.Wm)(ie, {
                            align: "right"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.wy)((0, t.Wm)(ue, {
                                flat: "",
                                label: "Abbrechen",
                                color: "primary"
                              }, null, 512), [[we]]), (0, t.wy)((0, t.Wm)(ue, {
                                flat: "",
                                label: "Leeren",
                                color: "primary",
                                onClick: l[11] || (l[11] = function (e) {
                                  return P.clearGalleryConfirmed(P.toClearGallery);
                                })
                              }, null, 512), [[we]])];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), (0, t.Wm)(ce, {
                    modelValue: P.showGalleryUsbDialog,
                    "onUpdate:modelValue": l[14] || (l[14] = function (e) {
                      return P.showGalleryUsbDialog = e;
                    }),
                    persistent: ""
                  }, {
                    default: (0, t.w5)(function () {
                      return [(0, t.Wm)(oe, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(ae, {
                            class: "row items-center"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(me, {
                                devices: P.usb,
                                "onUpdate:devices": l[13] || (l[13] = function (e) {
                                  return P.usb = e;
                                })
                              }, {
                                action: (0, t.w5)(function (e) {
                                  return [(0, t.wy)(((0, t.wg)(), (0, t.j4)(ue, {
                                    onClick: function onClick(l) {
                                      return P.configureGalleryUsbConfirmed(e);
                                    }
                                  }, {
                                    default: (0, t.w5)(function () {
                                      return [x];
                                    }),
                                    _: 2
                                  }, 1032, ["onClick"])), [[we]])];
                                }),
                                _: 1
                              }, 8, ["devices"])];
                            }),
                            _: 1
                          }), (0, t.Wm)(ie, {
                            align: "right"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.wy)((0, t.Wm)(ue, {
                                flat: "",
                                label: "Abbrechen",
                                color: "primary"
                              }, null, 512), [[we]])];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), (0, t.Wm)(ce, {
                    modelValue: P.showCopyGalleryUsbDialog,
                    "onUpdate:modelValue": l[16] || (l[16] = function (e) {
                      return P.showCopyGalleryUsbDialog = e;
                    }),
                    persistent: ""
                  }, {
                    default: (0, t.w5)(function () {
                      return [(0, t.Wm)(oe, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(ae, {
                            class: "row items-center"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(me, {
                                devices: P.usb,
                                "onUpdate:devices": l[15] || (l[15] = function (e) {
                                  return P.usb = e;
                                })
                              }, {
                                action: (0, t.w5)(function (e) {
                                  return [(0, t.wy)(((0, t.wg)(), (0, t.j4)(ue, {
                                    onClick: function onClick(l) {
                                      return P.copyGalleryUsbConfirmed(e);
                                    }
                                  }, {
                                    default: (0, t.w5)(function () {
                                      return [S];
                                    }),
                                    _: 2
                                  }, 1032, ["onClick"])), [[we]])];
                                }),
                                _: 1
                              }, 8, ["devices"])];
                            }),
                            _: 1
                          }), (0, t.Wm)(ie, {
                            align: "right"
                          }, {
                            default: (0, t.w5)(function () {
                              return [(0, t.wy)((0, t.Wm)(ue, {
                                flat: "",
                                label: "Abbrechen",
                                color: "primary"
                              }, null, 512), [[we]])];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["modelValue"]), (0, t.Wm)(ce, {
                    modelValue: P.showGalleryDialog,
                    "onUpdate:modelValue": l[21] || (l[21] = function (e) {
                      return P.showGalleryDialog = e;
                    })
                  }, {
                    default: (0, t.w5)(function () {
                      return [(0, t.Wm)(oe, null, {
                        default: (0, t.w5)(function () {
                          return [(0, t.Wm)(ae, null, {
                            default: (0, t.w5)(function () {
                              return [j];
                            }),
                            _: 1
                          }), (0, t.Wm)(ae, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(Y, {
                                modelValue: P.newGallery.name,
                                "onUpdate:modelValue": l[17] || (l[17] = function (e) {
                                  return P.newGallery.name = e;
                                }),
                                label: "Galeriename"
                              }, null, 8, ["modelValue"])];
                            }),
                            _: 1
                          }), (0, t.Wm)(ae, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(se, {
                                "model-value": P.newGallery.active,
                                "onUpdate:model-value": l[18] || (l[18] = function (e) {
                                  return P.newGallery.active = e;
                                }),
                                label: "Beim erstellen aktiv"
                              }, null, 8, ["model-value"])];
                            }),
                            _: 1
                          }), (0, t.Wm)(ae, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t.Wm)(de, {
                                modelValue: P.newGallery.usbTarget,
                                "onUpdate:modelValue": l[19] || (l[19] = function (e) {
                                  return P.newGallery.usbTarget = e;
                                }),
                                label: "Speicherziel (USB)",
                                options: P.usbOptions,
                                "emit-value": "",
                                "map-options": ""
                              }, null, 8, ["modelValue", "options"])];
                            }),
                            _: 1
                          }), (0, t.Uk)(" " + (0, u.zw)(P.newGallery) + " ", 1), (0, t.Wm)(ae, null, {
                            default: (0, t.w5)(function () {
                              return [(0, t._)("div", A, [(0, t.Wm)(ue, {
                                onClick: l[20] || (l[20] = function (e) {
                                  return P.confirmNewGallery();
                                }),
                                color: "positive"
                              }, {
                                default: (0, t.w5)(function () {
                                  return [T];
                                }),
                                _: 1
                              }), (0, t.wy)(((0, t.wg)(), (0, t.j4)(ue, {
                                color: "negative"
                              }, {
                                default: (0, t.w5)(function () {
                                  return [H];
                                }),
                                _: 1
                              })), [[we]])])];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })];
                    }),
                    _: 1
                  }, 8, ["modelValue"])])];
                }),
                _: 1
              }), (0, t.Wm)($, {
                name: "usb"
              }, {
                default: (0, t.w5)(function () {
                  return [L, (0, t.Wm)(me, {
                    devices: P.usb,
                    "onUpdate:devices": l[22] || (l[22] = function (e) {
                      return P.usb = e;
                    }),
                    onInput: P.updateSettings
                  }, null, 8, ["devices", "onInput"])];
                }),
                _: 1
              }), (0, t.Wm)($, {
                name: "clients"
              }, {
                default: (0, t.w5)(function () {
                  return [F, I, M, B];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue"])])];
        }),
        _: 1
      });
    }
    n(47378), n(66827), n(3240);
    var K = n(60499),
      N = n(98143),
      O = (0, t.Uk)("Gerät"),
      E = (0, t.Uk)("Größe"),
      Y = (0, t.Uk)("Mountpunkt"),
      $ = (0, t.Uk)("Aktion");
    function J(e, l, n, r, a, i) {
      var o = (0, t.up)("q-item-label"),
        c = (0, t.up)("q-item-section"),
        m = (0, t.up)("q-item"),
        s = (0, t.up)("q-list");
      return (0, t.wg)(), (0, t.j4)(s, null, {
        default: (0, t.w5)(function () {
          return [(0, t.Wm)(m, null, {
            default: (0, t.w5)(function () {
              return [(0, t.Wm)(c, null, {
                default: (0, t.w5)(function () {
                  return [(0, t.Wm)(o, null, {
                    default: (0, t.w5)(function () {
                      return [O];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), (0, t.Wm)(c, null, {
                default: (0, t.w5)(function () {
                  return [(0, t.Wm)(o, null, {
                    default: (0, t.w5)(function () {
                      return [E];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), (0, t.Wm)(c, null, {
                default: (0, t.w5)(function () {
                  return [(0, t.Wm)(o, null, {
                    default: (0, t.w5)(function () {
                      return [Y];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }), (0, t.Wm)(c, null, {
                default: (0, t.w5)(function () {
                  return [(0, t.Wm)(o, null, {
                    default: (0, t.w5)(function () {
                      return [$];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              })];
            }),
            _: 1
          }), ((0, t.wg)(!0), (0, t.iD)(t.HY, null, (0, t.Ko)(n.devices, function (l) {
            return (0, t.wg)(), (0, t.j4)(m, {
              key: l.name
            }, {
              default: (0, t.w5)(function () {
                return [(0, t.Wm)(c, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.Wm)(o, null, {
                      default: (0, t.w5)(function () {
                        return [(0, t.Uk)((0, u.zw)(l.dev), 1)];
                      }),
                      _: 2
                    }, 1024)];
                  }),
                  _: 2
                }, 1024), (0, t.Wm)(c, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.Wm)(o, null, {
                      default: (0, t.w5)(function () {
                        return [(0, t.Uk)((0, u.zw)(l.size), 1)];
                      }),
                      _: 2
                    }, 1024)];
                  }),
                  _: 2
                }, 1024), (0, t.Wm)(c, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.Wm)(o, null, {
                      default: (0, t.w5)(function () {
                        return [(0, t.Uk)((0, u.zw)(l.mount), 1)];
                      }),
                      _: 2
                    }, 1024)];
                  }),
                  _: 2
                }, 1024), (0, t.Wm)(c, null, {
                  default: (0, t.w5)(function () {
                    return [(0, t.WI)(e.$slots, "action", (0, u.vs)((0, t.F4)(l)))];
                  }),
                  _: 2
                }, 1024)];
              }),
              _: 2
            }, 1024);
          }), 128))];
        }),
        _: 3
      });
    }
    var R = {
        name: "UsbDevices",
        props: {
          devices: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        setup: function setup() {
          return {};
        }
      },
      X = n(11639),
      ee = n(13246),
      le = n(490),
      ne = n(76749),
      te = n(33115),
      ue = n(69984),
      re = n.n(ue);
    var ae = (0, X.Z)(R, [["render", J]]);
    var ie = ae;
    re()(R, "components", {
      QList: ee.Z,
      QItem: le.Z,
      QItemSection: ne.Z,
      QItemLabel: te.Z
    });
    var oe = n(60899),
      ce = n(21495),
      me = {
        name: "SettingsPage",
        components: {
          UsbDevices: ie
        },
        setup: function setup() {
          var e = (0, N.F)(),
            l = (0, ce.s)(),
            n = (0, t.Fl)(function () {
              return e.settings;
            }),
            u = (0, t.Fl)(function () {
              return n.value.app || {};
            }),
            r = (0, t.Fl)(function () {
              return n.value.settings || {};
            }),
            a = (0, t.Fl)(function () {
              return n.value.gallery || {};
            }),
            i = (0, t.Fl)(function () {
              return n.value.camera || {};
            }),
            o = ((0, t.Fl)(function () {
              return i.value.preview || {};
            }), (0, t.Fl)(function () {
              return n.value.availableUsb || [];
            })),
            c = (0, t.Fl)(function () {
              return Object.values(n.value.availableUsb).map(function (e) {
                return {
                  label: "".concat(e.dev, " (").concat(e.size, ")"),
                  value: e
                };
              });
            }),
            m = (0, t.Fl)(function () {
              return n.value.clients || {};
            }),
            s = (0, K.iH)({
              name: "",
              active: !1,
              usb: ""
            }),
            d = (0, t.Fl)(function () {
              var e;
              if (!l.gallery.list || !l.gallery.currentActive) return [];
              var n = null === (e = l.gallery) || void 0 === e ? void 0 : e.currentActive,
                t = Object.values(l.gallery.list),
                u = t.map(function (e) {
                  return e.active = !1, e.id === n && (e.active = !0), e;
                });
              return u;
            }),
            f = (0, K.iH)(!1);
          setTimeout(function () {
            f.value = !0;
          }, 200);
          var p = (0, oe.Z)(function () {
              console.log("save Settings"), e.saveSettings();
            }, 500),
            w = (0, K.iH)(!1),
            b = function b() {
              l.addGallery(s.value), s.value = {
                name: "",
                active: !1,
                usb: ""
              }, l.requestGallery(), w.value = !1;
            },
            y = (0, K.iH)(!1),
            g = (0, K.iH)(!1),
            _ = (0, K.iH)({}),
            v = (0, K.iH)({}),
            W = function W(e) {
              _.value = e, y.value = !0;
            },
            U = function U(e) {
              v.value = e, g.value = !0;
            },
            k = function k(e) {
              l.removeGallery(e), l.requestGallery();
            },
            h = function h(e) {
              l.clearGallery(e), l.requestGallery();
            };
          l.requestGallery();
          var G = (0, K.iH)(!1),
            q = (0, K.iH)({}),
            V = function V(e) {
              q.value = e, G.value = !0;
            },
            C = function C(e) {
              l.setGalleryUsbTarget(q.value, e), q.value = {}, l.requestGallery();
            },
            D = (0, K.iH)(!1),
            z = (0, K.iH)({}),
            Z = function Z(e) {
              z.value = e, D.value = !0;
            },
            Q = function Q(e) {
              l.copyGalleryToUsbTarget(z.value, e), z.value = {}, l.requestGallery();
            };
          return {
            tab: (0, K.iH)("gallery"),
            splitterModel: (0, K.iH)(20),
            showFooterButtons: f,
            settingsComp: n,
            app: u,
            settings: r,
            gallery: a,
            camera: i,
            usb: o,
            usbOptions: c,
            clients: m,
            updateSettings: p,
            galleryList: d,
            showGalleryDialog: w,
            newGallery: s,
            confirmNewGallery: b,
            removeGallery: W,
            clearGallery: U,
            toDeleteGallery: _,
            toClearGallery: v,
            confirmDelete: y,
            confirmClear: g,
            removeGalleryConfirmed: k,
            clearGalleryConfirmed: h,
            configureGalleryUsb: V,
            configureGalleryUsbConfirmed: C,
            showGalleryUsbDialog: G,
            showCopyGalleryUsbDialog: D,
            currentCopyToUsbGallery: z,
            copyGalleryUsb: Z,
            copyGalleryUsbConfirmed: Q
          };
        }
      },
      se = n(69885),
      de = n(47817),
      fe = n(70900),
      pe = n(89800),
      we = n(84106),
      be = n(66611),
      ye = n(22857),
      ge = n(24455),
      _e = n(47447),
      ve = n(50926),
      We = n(32074),
      Ue = n(44458),
      ke = n(63190),
      he = n(61357),
      Ge = n(11821),
      qe = n(91006),
      Ve = n(18401),
      Ce = n(62146);
    var De = (0, X.Z)(me, [["render", P]]);
    var ze = De;
    re()(me, "components", {
      QPage: se.Z,
      QTabs: de.Z,
      QTab: fe.Z,
      QTabPanels: pe.Z,
      QTabPanel: we.Z,
      QInput: be.Z,
      QList: ee.Z,
      QItem: le.Z,
      QItemSection: ne.Z,
      QItemLabel: te.Z,
      QIcon: ye.Z,
      QBtn: ge.Z,
      QMenu: _e.Z,
      QSeparator: ve.Z,
      QDialog: We.Z,
      QCard: Ue.Z,
      QCardSection: ke.Z,
      QAvatar: he.Z,
      QCardActions: Ge.Z,
      QCheckbox: qe.Z,
      QSelect: Ve.Z
    }), re()(me, "directives", {
      ClosePopup: Ce.Z
    });
  }
}]);