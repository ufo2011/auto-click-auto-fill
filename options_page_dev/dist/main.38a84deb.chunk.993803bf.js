// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"static/js/main.38a84deb.chunk.js":[function(require,module,exports) {
(this["webpackJsonpacf-options_page"] = this["webpackJsonpacf-options_page"] || []).push([[0], {
  81: function (e, t, a) {
    e.exports = a(96);
  },
  86: function (e, t, a) {},
  87: function (e, t, a) {},
  92: function (e, t, a) {},
  93: function (e, t, a) {},
  95: function (e, t, a) {},
  96: function (e, t, a) {
    "use strict";

    a.r(t);

    var n = a(0),
        r = a.n(n),
        l = a(21),
        c = a.n(l),
        o = (a(86), a(8)),
        i = (a(87), a(110)),
        m = a(109),
        s = a(107),
        u = a(69),
        d = a(106),
        E = a(101),
        f = a(114),
        b = a(102),
        p = a(73),
        g = a(103),
        h = a(72),
        v = a(74),
        y = a(13),
        O = a(70),
        N = a(71),
        x = a(14),
        C = a(54),
        k = a(31),
        j = /^\d+$/,
        I = /^\d{2}:\d{2}:\d{2}:\d{2}$/,
        w = function (e, t) {
      for (var a in e) -1 !== t.indexOf(a) && -1 === e[a].indexOf("e") && (e[a] = Number(e[a]));
    },
        S = ["retry", "retryInterval"],
        T = function (e) {
      var t = e.show,
          a = e.handleClose,
          l = Object(k.a)({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: y.h,
        shouldFocusError: !0
      }),
          c = l.register,
          i = l.handleSubmit,
          m = l.errors,
          u = l.reset,
          I = l.watch,
          T = l.formState,
          F = T.isDirty,
          R = T.isValid,
          A = I("notifications.sound"),
          B = Object(n.useState)(!0),
          P = Object(o.a)(B, 2),
          _ = P[0],
          H = P[1],
          W = Object(n.useState)(),
          D = Object(o.a)(W, 2),
          V = D[0],
          L = D[1];
      Object(n.useEffect)(function () {
        x.g.getItem(y.c.SETTINGS, y.h).then(u).catch(L).finally(function (e) {
          return H(!1);
        });
      }, [u]);
      return r.a.createElement(d.a, {
        show: t,
        onHide: a,
        size: "lg"
      }, r.a.createElement(d.a.Header, {
        closeButton: !0
      }, r.a.createElement(d.a.Title, null, "Settings")), r.a.createElement(d.a.Body, null, _ ? r.a.createElement(C.Loading, {
        className: "d-flex justify-content-center m-5"
      }) : V ? r.a.createElement(E.a, {
        variant: "danger"
      }, r.a.createElement(E.a.Heading, null, "Error"), JSON.stringify(V)) : r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
        className: "mb-2"
      }, r.a.createElement(f.a.Body, null, r.a.createElement(s.a.Check, {
        id: "checkiFrames",
        name: "checkiFrames",
        ref: c,
        label: "Check IFrames"
      }), r.a.createElement("small", {
        className: "text-muted"
      }, "Check this box if you want to check xPath within iFrames also"))), r.a.createElement(f.a, {
        className: "mb-2"
      }, r.a.createElement(f.a.Header, null, "Show Notification"), r.a.createElement(f.a.Body, null, r.a.createElement(b.a, null, r.a.createElement(p.a, null, r.a.createElement(s.a.Check, {
        id: "notifications.onError",
        name: "notifications.onError",
        ref: c,
        label: r.a.createElement("span", null, "on ", r.a.createElement("span", {
          className: "text-danger"
        }, "Error"), " occured")
      }), r.a.createElement(s.a.Check, {
        id: "notifications.onAction",
        name: "notifications.onAction",
        ref: c,
        label: r.a.createElement("span", null, "on ", r.a.createElement("span", {
          className: "text-success"
        }, "Action"), " completion")
      }), r.a.createElement(s.a.Check, {
        id: "notifications.onBatch",
        name: "notifications.onBatch",
        ref: c,
        label: r.a.createElement("span", null, "on ", r.a.createElement("span", {
          className: "text-success"
        }, "Batch"), " completion")
      }), r.a.createElement(s.a.Check, {
        id: "notifications.onConfig",
        name: "notifications.onConfig",
        ref: c,
        label: r.a.createElement("span", null, "on ", r.a.createElement("span", {
          className: "text-success"
        }, "Config"), " completion")
      })), r.a.createElement(p.a, {
        className: "d-flex align-items-center"
      }, r.a.createElement(s.a.Check, {
        id: "notifications.sound",
        name: "notifications.sound",
        ref: c,
        label: r.a.createElement("span", null, "Notification Sound ", A ? r.a.createElement(O.a, null) : r.a.createElement(N.a, null), " ")
      }))))), r.a.createElement(f.a, {
        className: "mb-2"
      }, r.a.createElement(f.a.Body, null, "Extension load ", r.a.createElement(s.a.Check, {
        inline: !0,
        type: "radio",
        name: "loadType",
        id: "loadTypeWindow",
        value: y.b.WINDOW,
        ref: c,
        label: "Window"
      }), r.a.createElement(s.a.Check, {
        inline: !0,
        type: "radio",
        name: "loadType",
        id: "loadTypeDocument",
        value: y.b.DOCUMENT,
        ref: c,
        label: "Document"
      }), r.a.createElement("small", null, r.a.createElement("ul", {
        className: "mb-0 mt-2"
      }, r.a.createElement("li", null, r.a.createElement("span", {
        className: "text-primary"
      }, "Window"), " (default) browser loads extension once all its content is loaded"), r.a.createElement("li", null, r.a.createElement("span", {
        className: "text-primary"
      }, "Document"), " browser loads extension before scripts and images are loaded (faster)(unsafe)"))))), r.a.createElement(f.a, {
        className: "mb-2"
      }, r.a.createElement(f.a.Body, null, r.a.createElement(s.a, {
        onSubmit: i(function (e) {
          w(e, S), x.g.setItem(y.c.SETTINGS, e).then(function (t) {
            u(e);
          }).catch(L).finally(function (e) {
            return H(!1);
          });
        })
      }, r.a.createElement(b.a, null, r.a.createElement(p.a, {
        md: 6,
        sm: 12,
        className: "mb-2 mb-md-0"
      }, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "retry"
      }, "Retry")), r.a.createElement(h.a, {
        placeholder: "5",
        "aria-label": "5",
        id: "retry",
        name: "retry",
        "aria-describedby": "retry",
        ref: c({
          pattern: j
        }),
        isInvalid: m.retry
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, m.retry && "Only valid numbers are allowed"))), r.a.createElement(p.a, {
        md: 6,
        sm: 12
      }, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "retry-interval"
      }, "Retry Interval\xa0", r.a.createElement("small", {
        className: "text-info"
      }, "(sec)"))), r.a.createElement(h.a, {
        placeholder: "1",
        "aria-label": "1",
        id: "retryInterval",
        name: "retryInterval",
        "aria-describedby": "retry-interval",
        ref: c({
          validate: function (e) {
            return !isNaN(e);
          }
        }),
        isInvalid: m.retryInterval
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, m.retryInterval && "Only valid numbers are allowed"))), r.a.createElement(p.a, {
        xs: 12
      }, r.a.createElement("h6", {
        className: "my-2 text-secondary font-weight-light"
      }, r.a.createElement("small", null, "* Below are action which can be performed if xpath is not found by extension after retry"))), r.a.createElement(p.a, {
        md: 4,
        sm: 12
      }, r.a.createElement(s.a.Check, {
        type: "radio",
        name: "retryOption",
        id: "retryOptionStop",
        value: y.d.STOP,
        ref: c,
        label: "Stop"
      })), r.a.createElement(p.a, {
        md: 4,
        sm: 12
      }, r.a.createElement(s.a.Check, {
        type: "radio",
        name: "retryOption",
        id: "retryOptionSkip",
        value: y.d.SKIP,
        ref: c,
        label: "Skip Not Found"
      })), r.a.createElement(p.a, {
        md: 4,
        sm: 12
      }, r.a.createElement(s.a.Check, {
        type: "radio",
        name: "retryOption",
        id: "retryOptionReload",
        value: y.d.RELOAD,
        ref: c,
        label: "Retry Refresh"
      }))), F && r.a.createElement("div", {
        className: "d-flex justify-content-end mt-2"
      }, r.a.createElement(v.a, {
        type: "submit",
        disabled: !R
      }, "Save"))))))));
    },
        F = function (e) {
      var t = e.name,
          a = Object(n.useState)(!1),
          l = Object(o.a)(a, 2),
          c = l[0],
          d = l[1],
          E = Object(n.useState)(!1),
          f = Object(o.a)(E, 2),
          b = f[0],
          p = f[1];
      Object(n.useEffect)(function () {
        var e = function () {
          p(0 !== window.pageYOffset);
        };

        return window.addEventListener("scroll", e), function () {
          window.removeEventListener("scroll", e);
        };
      }, []);
      var g = "".concat(b ? "shadow" : "");
      return r.a.createElement(i.a, {
        expand: "lg",
        variant: "light",
        sticky: "top",
        className: g
      }, r.a.createElement(i.a.Brand, {
        className: "".concat(t.match(/DEV/i) ? "dev" : t.match(/BETA/i) ? "beta" : "")
      }, r.a.createElement("img", {
        src: "./icon32.png",
        width: "30",
        height: "30",
        className: "d-inline-block align-top mr-2",
        alt: "Auto click Auto Fill logo"
      }), t), r.a.createElement(i.a.Toggle, {
        "aria-controls": "basic-navbar-nav"
      }), r.a.createElement(i.a.Collapse, {
        id: "basic-navbar-nav"
      }, r.a.createElement(m.a, {
        className: "mr-auto"
      }), r.a.createElement(s.a, {
        inline: !0
      }, r.a.createElement(m.a, {
        className: "mr-2"
      }, r.a.createElement(m.a.Link, {
        href: "https://getautoclicker.com/docs/getting-started",
        target: "_blank"
      }, "Documentaion"), r.a.createElement(m.a.Link, {
        href: "https://getautoclicker.com/blog",
        target: "_blank"
      }, "Blog"), r.a.createElement(m.a.Link, {
        href: "https://getautoclicker.com/examples/getautoclicker.com",
        target: "_blank"
      }, "Examples")), r.a.createElement(u.a, {
        width: "24",
        height: "24",
        onClick: function () {
          return d(!0);
        }
      }), r.a.createElement(T, {
        show: c,
        handleClose: function () {
          d(!1);
        }
      }))));
    },
        R = function (e) {
      var t = e.version;
      return r.a.createElement(i.a, {
        expand: "lg",
        sticky: "bottom"
      }, r.a.createElement(m.a, {
        className: "mr-auto"
      }, r.a.createElement(m.a.Link, {
        href: "mailto:dhruv.techapps@gmail.com",
        active: !0
      }, "dhruv.techapps@gmail.com"), r.a.createElement(m.a.Link, {
        href: "https://github.com/Dhruv-Techapps/auto-click-auto-fill/issues",
        target: "_blank"
      }, "Issues"), r.a.createElement(m.a.Link, {
        href: "https://getautoclicker.com/test",
        target: "_blank"
      }, "Test"), r.a.createElement(m.a.Link, null, "v", t)));
    },
        A = a(11),
        B = a(7),
        P = a(17),
        _ = (a(92), ["repeat", "repeatInterval"]),
        H = function (e) {
      var t = e.batch,
          a = e.configIndex,
          l = e.setConfigs,
          c = Object(k.a)({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: t,
        shouldFocusError: !0
      }),
          o = c.register,
          i = c.handleSubmit,
          m = c.errors,
          u = c.reset,
          d = c.formState,
          E = d.isDirty,
          y = d.isValid;
      Object(n.useEffect)(function () {
        u(t);
      }, [t, u]);
      return r.a.createElement(s.a, {
        onSubmit: i(function (e) {
          w(e, _), u(e), l(function (t) {
            return t.map(function (t, n) {
              return n === a ? (t.batch = Object(B.a)(Object(B.a)({}, t.batch), e), t) : t;
            });
          });
        })
      }, r.a.createElement(f.a.Body, null, r.a.createElement(b.a, null, r.a.createElement(p.a, {
        md: "6",
        sm: "12"
      }, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "batch-repeat"
      }, "repeat")), r.a.createElement(h.a, {
        name: "repeat",
        ref: o({
          pattern: j
        }),
        isInvalid: !!m.repeat,
        placeholder: "0",
        "aria-label": "0",
        "aria-describedby": "batch-repeat"
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, m.repeat && "Only valid numbers are allowed"))), r.a.createElement(p.a, {
        md: "6",
        sm: "12"
      }, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "batch-repeat-interval"
      }, "R-Interval\xa0", r.a.createElement("small", {
        className: "text-info"
      }, "(sec)"))), r.a.createElement(h.a, {
        name: "repeatInterval",
        ref: o({
          validate: function (e) {
            return !isNaN(e);
          }
        }),
        isInvalid: !!m.repeatInterval,
        placeholder: "0",
        "aria-label": "0",
        "aria-describedby": "batch-repeat-interval"
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, m.repeatInterval && "Only valid numbers are allowed")))), E && r.a.createElement("div", {
        className: "d-flex justify-content-end mt-2"
      }, r.a.createElement(v.a, {
        type: "submit",
        disabled: !y
      }, "Save"))));
    },
        W = r.a.memo(function (e) {
      var t = e.batch,
          a = e.configIndex,
          n = e.setConfigs;
      return r.a.createElement(f.a, {
        className: "mb-3"
      }, r.a.createElement(f.a.Header, {
        as: "h5"
      }, r.a.createElement(b.a, null, r.a.createElement(p.a, null, r.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://getautoclicker.com/docs/batch"
      }, "Batch")), r.a.createElement(p.a, {
        md: "auto"
      }, r.a.createElement(s.a.Check, {
        type: "switch",
        id: "batch-refresh",
        label: "Refresh",
        name: "refresh",
        checked: t.refresh,
        onChange: function (e) {
          var t = x.a.getNameValue(e.currentTarget),
              r = t.name,
              l = t.value;
          n(function (e) {
            return e.map(function (e, t) {
              return t === a ? (e.batch = Object(B.a)(Object(B.a)({}, e.batch), {}, Object(P.a)({}, r, l)), e) : e;
            });
          });
        }
      })))), !t.refresh && r.a.createElement(H, {
        batch: t,
        configIndex: a,
        setConfigs: n
      }));
    }),
        D = a(108),
        V = a(75),
        L = r.a.forwardRef(function (e, t) {
      var a = e.children,
          n = e.onClick;
      return r.a.createElement("button", {
        type: "button",
        className: "btn p-1",
        "data-toggle": "dropdown",
        ref: t,
        onClick: function (e) {
          e.preventDefault(), n(e);
        }
      }, a);
    });

    L.displayName = "ParDropdownToggleagraph";
    a(93);

    var q = a(76),
        M = a(104),
        z = a(77),
        U = a(78),
        J = a(79),
        G = a(80),
        $ = function (e) {
      var t = e.value,
          a = e.data,
          l = e.row.index,
          c = e.column,
          i = c.id,
          m = c.required,
          u = c.pattern,
          d = c.validate,
          E = c.dataType,
          f = e.updateAction,
          b = r.a.useState(t),
          p = Object(o.a)(b, 2),
          g = p[0],
          h = p[1],
          v = r.a.useState(a[l].error === i),
          y = Object(o.a)(v, 2),
          O = y[0],
          N = y[1],
          x = Object(n.useRef)();
      return r.a.useEffect(function () {
        h(t);
      }, [t]), r.a.createElement(s.a.Control, {
        ref: x,
        value: g,
        name: i,
        onChange: function (e) {
          x.current.classList.remove("is-valid"), N(!1);
          var t = e.currentTarget.value;
          t ? (u && !u.test(t) && N(!0), d && !d(t) && N(!0)) : m && N(!0), h(t);
        },
        onBlur: function (e) {
          var t = e.currentTarget.value;
          f(l, i, "number" === E && -1 === t.indexOf("e") ? Number(t) : t);
        },
        isInvalid: O
      });
    },
        K = a(112),
        X = a(113),
        Y = a(35),
        Q = function () {
      return r.a.createElement(K.a, {
        trigger: "click",
        placement: "right",
        rootClose: !0,
        overlay: r.a.createElement(X.a, {
          id: "popover-basic"
        }, r.a.createElement(X.a.Title, null, "Examples"), r.a.createElement(X.a.Content, null, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("code", null, "\\d+.\\d*"), " float number extract $", r.a.createElement("span", {
          className: "text-success"
        }, "123.00"), " only"), r.a.createElement("li", null, r.a.createElement("code", null, "\\d+"), " number extract $", r.a.createElement("span", {
          className: "text-success"
        }, "123"), ".00 only"), r.a.createElement("li", null, "supports regex pattern"))))
      }, r.a.createElement(Y.a, {
        className: "ml-2 text-info"
      }));
    },
        Z = ["retry", "retryInterval"],
        ee = Object(n.forwardRef)(function (e, t) {
      var a = e.configIndex,
          l = e.setConfigs,
          c = Object(k.a)({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: Object(B.a)({}, y.f),
        shouldFocusError: !0
      }),
          i = c.register,
          m = c.handleSubmit,
          u = c.errors,
          O = c.reset,
          N = c.formState.isDirty,
          x = Object(n.useState)(!1),
          C = Object(o.a)(x, 2),
          I = C[0],
          S = C[1],
          T = Object(n.useRef)(-1);
      Object(n.useImperativeHandle)(t, function () {
        return {
          showAddon: function (e, t) {
            T.current = e, O(Object(B.a)({}, t)), S(!0);
          }
        };
      });
      return r.a.createElement(d.a, {
        show: I,
        size: "lg",
        onHide: function () {
          S(!1);
        }
      }, r.a.createElement(s.a, {
        onSubmit: m(function (e) {
          w(e, Z), O(e), l(function (t) {
            return t.map(function (t, n) {
              return n === a ? (t.actions[T.current].addon = Object(B.a)({}, e), Object(B.a)({}, t)) : t;
            });
          }), S(!1);
        })
      }, r.a.createElement(d.a.Header, {
        closeButton: !0
      }, r.a.createElement(d.a.Title, null, "Addon")), r.a.createElement(d.a.Body, null, r.a.createElement(E.a, {
        variant: "info"
      }, "Add condition will be checked before executing Action"), r.a.createElement(f.a, null, r.a.createElement(f.a.Body, null, r.a.createElement(b.a, {
        className: "mb-2"
      }, r.a.createElement(p.a, null, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "addon-element"
      }, "Element Finder ", r.a.createElement("small", {
        className: "text-danger"
      }, "*"))), r.a.createElement(s.a.Control, {
        type: "text",
        placeholder: "Element Finder",
        "aria-label": "Element Finder",
        "aria-describedby": "addon-element",
        name: "elementFinder",
        ref: i({
          required: !0
        }),
        isInvalid: !!u.element
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.element && "Element is required"))), r.a.createElement(p.a, null, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "addon-condition"
      }, "Condition ", r.a.createElement("small", {
        className: "text-danger"
      }, "*"))), r.a.createElement(s.a.Control, {
        as: "select",
        "aria-describedby": "addon-condition",
        custom: !0,
        ref: i({
          required: !0
        }),
        isInvalid: !!u.condition,
        name: "condition"
      }, Object.entries(y.a).map(function (e, t) {
        return r.a.createElement("option", {
          key: t,
          value: e[1]
        }, e[0]);
      })), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.condition && "Condition is required")))), r.a.createElement(b.a, null, r.a.createElement(p.a, null, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "addon-value"
      }, "Value ", r.a.createElement("small", {
        className: "text-danger"
      }, "*"))), r.a.createElement(s.a.Control, {
        type: "text",
        placeholder: "Value",
        "aria-label": "Value",
        "aria-describedby": "addon-value",
        ref: i({
          required: !0
        }),
        isInvalid: !!u.value,
        name: "value"
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.value && "Value is required"))), r.a.createElement(p.a, null, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "addon-value-extractor"
      }, "Value Extractor\xa0", r.a.createElement(Q, null))), r.a.createElement(s.a.Control, {
        type: "text",
        placeholder: "Value Extractor",
        "aria-label": "Value Extractor",
        name: "valueExtractor",
        "aria-describedby": "addon-value-extractor",
        ref: i(),
        isInvalid: !!u.valueExtractor
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.valueExtractor && "Not a valid regex")))), r.a.createElement("hr", null), r.a.createElement(b.a, null, r.a.createElement(p.a, null, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "addon-retry"
      }, "Retry")), r.a.createElement(h.a, {
        placeholder: "0",
        "aria-label": "0",
        name: "retry",
        "aria-describedby": "addon-retry",
        ref: i({
          pattern: j
        }),
        isInvalid: u.retry
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.retry && "Only valid numbers are allowed"))), r.a.createElement(p.a, null, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "addon-retry-interval"
      }, "Retry Interval\xa0", r.a.createElement("small", {
        className: "text-info"
      }, "(sec)"))), r.a.createElement(h.a, {
        placeholder: "0",
        "aria-label": "0",
        id: "addon-retryInterval",
        name: "retryInterval",
        "aria-describedby": "retry-interval",
        ref: i({
          validate: function (e) {
            return !isNaN(e);
          }
        }),
        isInvalid: u.retryInterval
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.retryInterval && "Only valid numbers are allowed"))))))), N && r.a.createElement(d.a.Footer, null, r.a.createElement(v.a, {
        type: "submit"
      }, "Save"))));
    }),
        te = r.a.memo(ee),
        ae = Object(n.forwardRef)(function (e, t) {
      var a = Object(n.useState)(!1),
          l = Object(o.a)(a, 2),
          c = l[0],
          i = l[1],
          m = Object(n.useRef)({});
      Object(n.useImperativeHandle)(t, function () {
        return {
          confirm: function (e) {
            m.current = e, i(!0);
          }
        };
      });
      return r.a.createElement(d.a, {
        show: c,
        centered: !0,
        backdrop: "static",
        keyboard: !1
      }, r.a.createElement(d.a.Body, {
        className: "mx-auto text-center"
      }, r.a.createElement("h4", {
        className: "my-3"
      }, m.current.title || "Confirm"), m.current.message), r.a.createElement(d.a.Footer, null, r.a.createElement(v.a, {
        variant: "secondary",
        className: "px-3 mr-3",
        size: "md",
        onClick: function () {
          i(!1);
        }
      }, "No"), r.a.createElement(v.a, {
        variant: "primary",
        className: "px-3",
        size: "md",
        onClick: function () {
          m.current.confirmFunc(), i(!1);
        }
      }, "Yes")));
    }),
        ne = function () {
      return r.a.createElement(K.a, {
        trigger: "click",
        rootClose: !0,
        placement: "right",
        overlay: r.a.createElement(X.a, {
          id: "popover-basic"
        }, r.a.createElement(X.a.Content, null, '<input type="password" name="login" id="username" class="form-control test" readonly disabled>', r.a.createElement(M.a, {
          bordered: !0,
          striped: !0,
          className: "mt-3"
        }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "getElementBy"), r.a.createElement("th", null, "Element Finder"), r.a.createElement("th", null, "# of elements"))), r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "getElementById")), r.a.createElement("td", null, r.a.createElement("code", null, "#username"), r.a.createElement("br", null), r.a.createElement("code", null, "Id::username")), r.a.createElement("td", null, "1")), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "getElementsByClassName")), r.a.createElement("td", null, r.a.createElement("code", null, "ClassName::form-control test")), r.a.createElement("td", null, ">1")), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "getElementsByName")), r.a.createElement("td", null, r.a.createElement("code", null, "Name::login")), r.a.createElement("td", null, ">1")), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "getElementsByTagName")), r.a.createElement("td", null, r.a.createElement("code", null, "TagName::input")), r.a.createElement("td", null, ">1")), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "querySelector")), r.a.createElement("td", null, r.a.createElement("code", null, "Selector::input"), r.a.createElement("br", null), r.a.createElement("code", null, "Selector::input[type]"), r.a.createElement("br", null), r.a.createElement("code", null, "Selector::input[disabled]"), r.a.createElement("br", null), r.a.createElement("code", null, "Selector::input[type='password']"), r.a.createElement("br", null), r.a.createElement("code", null, "Selector::input[name='login']"), r.a.createElement("br", null), r.a.createElement("code", null, "Selector::input#username"), r.a.createElement("br", null), r.a.createElement("code", null, "Selector::input.form-control.test"), r.a.createElement("br", null)), r.a.createElement("td", null, "1")), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "querySelectorAll")), r.a.createElement("td", null, r.a.createElement("code", null, "SelectorAll::input")), r.a.createElement("td", null, ">1")), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://getautoclicker.com/docs/xpath",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "XPath")), r.a.createElement("td", null, r.a.createElement("code", null, "//input[contains(@class,'test')]")), r.a.createElement("td", null, ">1"))))))
      }, r.a.createElement(Y.a, {
        className: "ml-2 text-info"
      }));
    },
        re = function () {
      return r.a.createElement(K.a, {
        trigger: "click",
        placement: "right",
        rootClose: !0,
        overlay: r.a.createElement(X.a, {
          id: "popover-basic"
        }, r.a.createElement(X.a.Content, null, r.a.createElement(M.a, {
          bordered: !0,
          striped: !0,
          className: "mt-3"
        }, r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://getautoclicker.com/docs/action#scroll-to-examples",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Scroll To")), r.a.createElement("td", null, r.a.createElement("code", null, "ScrollTo::Bottom"))), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://getautoclicker.com/docs/action#click-events-examples",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Click Events")), r.a.createElement("td", null, r.a.createElement("code", null, "ClickEvents::dblclick"))), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://getautoclicker.com/docs/action#form-events-examples",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Form Events")), r.a.createElement("td", null, r.a.createElement("code", null, "FormEvents::submit"))), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://getautoclicker.com/docs/action#exec-command-examples",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Exec Command")), r.a.createElement("td", null, r.a.createElement("code", null, 'ExecCommand::["cut","paste"]'))), r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("a", {
          href: "https://getautoclicker.com/docs/action#location-command-examples",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Location Command")), r.a.createElement("td", null, r.a.createElement("code", null, "LocationCommand::href::https://getautoclicker.com"))), r.a.createElement("tr", null, r.a.createElement("td", null, "Plain text"), r.a.createElement("td", null, r.a.createElement("code", null, "Hello World")))))))
      }, r.a.createElement(Y.a, {
        className: "ml-2 text-info"
      }));
    },
        le = Object(n.forwardRef)(function (e, t) {
      var a = e.actions,
          l = e.configIndex,
          c = e.setConfigs,
          i = e.hiddenColumns,
          m = e.addonRef,
          u = e.toastRef,
          d = Object(n.useState)(a),
          E = Object(o.a)(d, 2),
          f = E[0],
          b = E[1],
          p = Object(n.useState)(),
          g = Object(o.a)(p, 2),
          h = g[0],
          O = g[1],
          N = Object(n.useRef)(),
          x = Object(n.useRef)(!0),
          C = Object(n.useRef)(!1);
      Object(n.useImperativeHandle)(t, function () {
        return {
          addAction: function () {
            b([].concat(Object(A.a)(f), [Object(B.a)(Object(B.a)({}, y.e), {}, {
              focus: !0
            })])), C.current = !0;
          }
        };
      }), Object(n.useEffect)(function () {
        x.current ? x.current = !1 : b(a);
      }, [a]);

      var k = {
        Cell: $
      },
          I = r.a.useMemo(function () {
        return [{
          Header: "Init Wait",
          style: {
            width: "90px"
          },
          accessor: "initWait",
          dataType: "number",
          validate: function (e) {
            return !isNaN(e);
          }
        }, {
          Header: "Name",
          style: {
            width: "90px"
          },
          accessor: "name"
        }, {
          Header: "Element Finder",
          accessor: "elementFinder",
          required: !0
        }, {
          Header: "Value",
          accessor: "value"
        }, {
          Header: "Repeat",
          style: {
            width: "90px"
          },
          accessor: "repeat",
          dataType: "number",
          pattern: j
        }, {
          Header: "R-Interval",
          style: {
            width: "100px"
          },
          accessor: "repeatInterval",
          dataType: "number",
          validate: function (e) {
            return !isNaN(e);
          }
        }];
      }, []),
          w = {
        hiddenColumns: i
      },
          S = function (e) {
        b(function (t) {
          return t.filter(function (t, a) {
            return a !== e;
          });
        }), C.current = !0;
      },
          T = function () {
        var e = !0;
        return f.forEach(function (t, a) {
          document.querySelector("#actions tbody tr:nth-child(".concat(a + 1, ") input[name=elementFinder]")).classList.remove("is-invalid"), t.elementFinder || (document.querySelector("#actions tbody tr:nth-child(".concat(a + 1, ") input[name=elementFinder]")).classList.add("is-invalid"), e = !1);
        }), e;
      },
          F = Object(q.useTable)({
        columns: I,
        data: f,
        defaultColumn: k,
        initialState: w,
        updateAction: function (e, t, a) {
          b(function (n) {
            return n.map(function (n, r) {
              return r === e ? Object(B.a)(Object(B.a)({}, n), {}, Object(P.a)({}, t, a)) : n;
            });
          }), C.current = !0;
        }
      }),
          R = F.getTableProps,
          _ = F.getTableBodyProps,
          H = F.headerGroups,
          W = F.rows,
          D = F.prepareRow,
          V = F.setHiddenColumns;

      Object(n.useEffect)(function () {
        x.current ? x.current = !1 : V(i);
      }, [i, V]);

      var L = function (e, t, a) {
        if (a >= e.length) for (var n = a - e.length + 1; n--;) e.push(void 0);
        return e.splice(a, 0, e.splice(t, 1)[0]), e;
      };

      return r.a.createElement(s.a, {
        onSubmit: function (e) {
          e.preventDefault(), O(), T() ? (c(function (e) {
            return e.map(function (e, t) {
              return t === l ? (e.actions = Object(A.a)(f), e) : e;
            });
          }), C.current = !1, u.current.push({
            body: r.a.createElement("p", null, r.a.createElement("span", {
              className: "badge badge-success"
            }, "actions"), " saved successfully !"),
            header: r.a.createElement("strong", {
              className: "mr-auto"
            }, "Actions")
          })) : O("Element Finder cant be empty");
        }
      }, r.a.createElement(M.a, Object.assign({
        hover: !0
      }, R(), {
        id: "actions",
        borderless: !0
      }), r.a.createElement("thead", null, H.map(function (e, t) {
        return r.a.createElement("tr", Object.assign({}, e.getHeaderGroupProps(), {
          key: t
        }), r.a.createElement("th", {
          style: {
            width: "30px"
          }
        }), e.headers.map(function (e, t) {
          return r.a.createElement("th", Object.assign({}, e.getHeaderProps([{
            style: e.style
          }]), {
            key: t
          }), e.render("Header"), " ", e.required && r.a.createElement("small", {
            className: "text-danger"
          }, "*"), "Element Finder" === e.Header && r.a.createElement(ne, null), "Value" === e.Header && r.a.createElement(re, null));
        }), r.a.createElement("th", {
          style: {
            width: "80px"
          }
        }));
      })), r.a.createElement("tbody", _(), W.map(function (e, t) {
        return D(e), r.a.createElement("tr", Object.assign({}, e.getRowProps(), {
          key: t
        }), r.a.createElement("td", {
          align: "center"
        }, r.a.createElement("div", {
          className: "d-flex flex-column align-items-center"
        }, r.a.createElement(J.a, {
          width: "20",
          height: "20",
          onClick: function (t) {
            return function (e, t) {
              null === e.currentTarget.getAttribute("disabled") && (b(function (e) {
                return Object(A.a)(L(e, +t, t - 1));
              }), C.current = !0);
            }(t, e.id);
          },
          disabled: 0 === t
        }), r.a.createElement(G.a, {
          width: "20",
          height: "20",
          onClick: function (t) {
            return function (e, t) {
              null === e.currentTarget.getAttribute("disabled") && (b(function (e) {
                return Object(A.a)(L(e, +t, +t + 1));
              }), C.current = !0);
            }(t, e.id);
          },
          disabled: t === W.length - 1
        }))), e.cells.map(function (e, t) {
          return r.a.createElement("td", Object.assign({}, e.getCellProps(), {
            key: t
          }), e.render("Cell"));
        }), r.a.createElement("td", {
          align: "center"
        }, r.a.createElement(U.a, {
          className: "text-primary mr-3",
          width: "20",
          height: "20",
          onClick: function () {
            return function (e) {
              m.current.showAddon(e.id, e.original.addon);
            }(e);
          }
        }), r.a.createElement(v.a, {
          variant: "link",
          className: "p-0",
          onClick: function () {
            !function (e) {
              var t = "#".concat(+e + 1, " - ").concat(f[e].name || f[e].elementFinder || "row");
              N.current.confirm({
                title: "Remove Action",
                message: r.a.createElement("p", null, "Are you sure to remove ", r.a.createElement("span", {
                  className: "codecode-danger"
                }, t), " Action?"),
                confirmFunc: S.bind(null, Number(e))
              });
            }(e.id);
          },
          disabled: 1 === f.length
        }, r.a.createElement(z.a, {
          className: "x-circle " + (1 === f.length ? "text-muted" : "text-danger"),
          width: "20",
          height: "20"
        }))));
      }))), C.current && r.a.createElement("div", {
        className: "d-flex justify-content-end align-items-center mt-2"
      }, r.a.createElement("span", {
        className: "text-danger mr-3"
      }, h), r.a.createElement(v.a, {
        type: "submit"
      }, "Save")), r.a.createElement(ae, {
        ref: N
      }));
    }),
        ce = ["name", "initWait", "repeat", "repeatInterval"],
        oe = r.a.memo(function (e) {
      var t = e.actions,
          a = e.configIndex,
          l = e.setConfigs,
          c = e.addonRef,
          i = e.toastRef,
          m = Object(n.useState)(x.e.getItem("hiddenColumns", ce)),
          s = Object(o.a)(m, 2),
          u = s[0],
          d = s[1],
          E = Object(n.useRef)(),
          g = Object(n.useRef)(!0),
          h = function (e) {
        var t = e.currentTarget.getAttribute("data-column"),
            a = u.indexOf(t);
        d(function (e) {
          return -1 !== a ? e.filter(function (e, t) {
            return t !== a;
          }) : [].concat(Object(A.a)(e), [t]);
        });
      };

      return Object(n.useEffect)(function () {
        g.current ? g.current = !1 : x.e.setItem("hiddenColumns", u);
      }, [u]), r.a.createElement(f.a, null, r.a.createElement(f.a.Header, {
        as: "h5"
      }, r.a.createElement(b.a, null, r.a.createElement(p.a, {
        className: "d-flex align-items-center"
      }, r.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://getautoclicker.com/docs/action"
      }, "Action")), r.a.createElement(p.a, {
        md: "auto",
        className: "d-flex align-items-center"
      }, r.a.createElement(v.a, {
        variant: "success",
        onClick: function () {
          E.current.addAction();
        }
      }, "Add Action"), r.a.createElement(D.a, {
        alignRight: !0,
        className: "ml-2"
      }, r.a.createElement(D.a.Toggle, {
        as: L
      }, r.a.createElement(V.a, {
        width: "28",
        height: "28"
      })), r.a.createElement(D.a.Menu, null, r.a.createElement(D.a.Item, {
        onClick: h,
        "data-column": "name",
        active: -1 === u.indexOf("name")
      }, "Name"), r.a.createElement(D.a.Item, {
        onClick: h,
        "data-column": "initWait",
        active: -1 === u.indexOf("initWait")
      }, "Init Wait"), r.a.createElement(D.a.Item, {
        onClick: h,
        "data-column": "repeat",
        active: -1 === u.indexOf("repeat")
      }, "Repeat"), r.a.createElement(D.a.Item, {
        onClick: h,
        "data-column": "repeatInterval",
        active: -1 === u.indexOf("repeatInterval")
      }, "R-interval")))))), r.a.createElement(f.a.Body, null, r.a.createElement(le, {
        ref: E,
        toastRef: i,
        actions: t,
        configIndex: a,
        setConfigs: l,
        hiddenColumns: u,
        addonRef: c
      })));
    }),
        ie = a(63),
        me = function () {
      return r.a.createElement(K.a, {
        trigger: "click",
        placement: "right",
        rootClose: !0,
        overlay: r.a.createElement(X.a, {
          id: "popover-basic"
        }, r.a.createElement(X.a.Title, null, "Examples"), r.a.createElement(X.a.Content, null, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("code", null, "13:00:00:00"), " at afternoon 1 PM"), r.a.createElement("li", null, r.a.createElement("code", null, "00:00:00:00"), " at midnight 12 AM"), r.a.createElement("li", null, r.a.createElement("code", null, "15:15:15:15"), " at afternoon 3 PM and 15 mins and 15 seconds and 15 milliseconds"), r.a.createElement("li", null, r.a.createElement("code", null, "empty blank"), " start immediately"))))
      }, r.a.createElement(Y.a, {
        className: "ml-2 text-info"
      }));
    },
        se = ["initWait"],
        ue = function (e) {
      var t = e.config,
          a = e.configIndex,
          l = e.setConfigs,
          c = Object(n.useRef)(!0),
          o = Object(k.a)({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: t,
        shouldFocusError: !0
      }),
          i = o.register,
          m = o.handleSubmit,
          u = o.errors,
          d = o.reset,
          E = o.formState,
          y = E.isDirty,
          O = E.isValid;
      Object(n.useEffect)(function () {
        c.current ? c.current = !1 : d(t);
      }, [t, d]);
      return r.a.createElement(s.a, {
        onSubmit: m(function (e) {
          w(e, se), d(e), l(function (t) {
            return t.map(function (t, n) {
              return n === a ? Object(B.a)(Object(B.a)({}, t), e) : t;
            });
          });
        })
      }, r.a.createElement(f.a.Body, null, r.a.createElement(b.a, null, r.a.createElement(p.a, {
        md: "5",
        sm: "12"
      }, r.a.createElement(g.a, {
        className: "mb-2"
      }, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "config-name"
      }, "Name")), r.a.createElement(h.a, {
        name: "name",
        ref: i,
        placeholder: "getautoclicker.com",
        "aria-label": "getautoclicker.com",
        "aria-describedby": "config-name"
      }))), r.a.createElement(p.a, {
        md: "7",
        sm: "12"
      }, r.a.createElement(g.a, {
        className: "mb-2"
      }, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "config-url"
      }, "URL\xa0", r.a.createElement("small", {
        className: "text-danger"
      }, "*"))), r.a.createElement(h.a, {
        name: "url",
        ref: i({
          required: !0
        }),
        isInvalid: !!u.url,
        placeholder: "https://getautoclicker.com/",
        "aria-label": "https://getautoclicker.com/",
        "aria-describedby": "config-url"
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.url && "URL is required"))), r.a.createElement(p.a, {
        md: "5",
        sm: "12"
      }, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "config-init-wait"
      }, "Init Wait\xa0", r.a.createElement("small", {
        className: "text-info"
      }, "(sec)"))), r.a.createElement(h.a, {
        ref: i({
          validate: function (e) {
            return !isNaN(e);
          }
        }),
        isInvalid: !!u.initWait,
        name: "initWait",
        placeholder: "0",
        "aria-label": "0",
        "aria-describedby": "config-init-wait"
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.initWait && "Only valid numbers are allowed"))), r.a.createElement(p.a, {
        md: "7",
        sm: "12"
      }, r.a.createElement(g.a, null, r.a.createElement(g.a.Prepend, null, r.a.createElement(g.a.Text, {
        id: "config-start-time"
      }, "Start Time\xa0", r.a.createElement(me, null))), r.a.createElement(h.a, {
        ref: i({
          pattern: I
        }),
        isInvalid: !!u.startTime,
        name: "startTime",
        placeholder: "hh:mm:ss:ms",
        "aria-label": "hh:mm:ss:ms",
        "aria-describedby": "config-start-time"
      }), r.a.createElement(s.a.Control.Feedback, {
        type: "invalid"
      }, u.startTime && "Start time should matcg hh:mm:ss format")))), y && r.a.createElement("div", {
        className: "d-flex justify-content-end mt-2"
      }, r.a.createElement(v.a, {
        type: "submit",
        disabled: !O
      }, "Save"))));
    },
        de = r.a.memo(function (e) {
      var t = e.config,
          a = e.configIndex,
          l = e.toastRef,
          c = e.setConfigs,
          o = Object(n.createRef)();
      return r.a.createElement(f.a, {
        className: "mb-3"
      }, r.a.createElement(f.a.Header, {
        as: "h5"
      }, r.a.createElement(b.a, null, r.a.createElement(p.a, {
        className: "d-flex align-items-center"
      }, r.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://getautoclicker.com/docs/configuration"
      }, "Configuration")), r.a.createElement(p.a, {
        md: "auto",
        className: "d-flex align-items-center"
      }, r.a.createElement(s.a.Check, {
        type: "switch",
        name: "enable",
        id: "config-enable",
        label: "Enable",
        checked: t.enable,
        onChange: function (e) {
          var t = x.a.getNameValue(e.currentTarget),
              n = t.name,
              r = t.value;
          c(function (e) {
            return e.map(function (t, l) {
              return l === a ? Object(B.a)(Object(B.a)({}, e[a]), {}, Object(P.a)({}, n, r)) : t;
            });
          });
        }
      }), r.a.createElement(D.a, {
        className: "ml-3",
        alignRight: !0
      }, r.a.createElement(D.a.Toggle, {
        as: L
      }, r.a.createElement(ie.a, {
        width: "24",
        height: "24"
      })), r.a.createElement(D.a.Menu, null, r.a.createElement(D.a.Item, {
        href: "#/action-1",
        onClick: function () {
          x.b.export(t.name || t.url || "configuration-".concat(a), t).catch(function (e) {
            l.current.push({
              body: JSON.stringify(e),
              header: r.a.createElement("strong", {
                className: "mr-auto"
              }, "Export Error"),
              bodyClass: "text-danger"
            });
          });
        }
      }, "Export"), r.a.createElement(D.a.Item, {
        href: "#/action-2",
        onClick: function (e) {
          return o.current.click();
        }
      }, "Import"))), r.a.createElement("div", {
        className: "custom-file d-none"
      }, r.a.createElement("input", {
        type: "file",
        className: "custom-file-input",
        ref: o,
        accept: ".json",
        id: "import-configuration",
        onChange: function (e) {
          var t = e.currentTarget.files;
          if (t.length <= 0) return !1;
          var a = new FileReader();
          a.onload = function (e) {
            try {
              var t = JSON.parse(e.target.result),
                  a = t.name || t.url || "configuration";
              x.d.import(t, y.c.CONFIGS), l.current.push({
                body: r.a.createElement("p", null, r.a.createElement("span", {
                  className: "badge badge-success"
                }, a), " imported successfully!"),
                header: r.a.createElement("strong", {
                  className: "mr-auto"
                }, "Configuration"),
                delay: 2e3,
                onClose: function () {
                  window.location.reload();
                }
              });
            } catch (n) {
              l.current.push({
                body: JSON.stringify(n),
                header: r.a.createElement("strong", {
                  className: "mr-auto"
                }, "Import Error"),
                bodyClass: "text-danger"
              });
            }
          }, a.readAsText(t.item(0));
        }
      }), r.a.createElement("label", {
        className: "custom-file-label",
        htmlFor: "import-configuration",
        style: {
          fontSize: "1rem",
          fontWeight: 400
        }
      }, "Import"))))), t.enable && r.a.createElement(ue, {
        config: t,
        configIndex: a,
        setConfigs: c
      }));
    }),
        Ee = function (e, t) {
      var a = "configuration-".concat(t);
      return e && null !== e.match("://.*") ? a = e.split("/")[2] : e && (a = e), a;
    },
        fe = function (e) {
      var t = e.toastRef,
          a = Object(n.useState)([Object(B.a)({}, y.g)]),
          l = Object(o.a)(a, 2),
          c = l[0],
          i = l[1],
          m = Object(n.useState)(0),
          u = Object(o.a)(m, 2),
          d = u[0],
          g = u[1],
          h = Object(n.useState)(!0),
          O = Object(o.a)(h, 2),
          N = O[0],
          k = O[1],
          j = Object(n.useState)(),
          I = Object(o.a)(j, 2),
          w = I[0],
          S = I[1],
          T = c[d],
          F = Object(n.useRef)(!0),
          R = Object(n.useRef)(),
          P = Object(n.useRef)(),
          _ = Object(n.createRef)();

      Object(n.useEffect)(function () {
        x.g.getItem(y.c.CONFIGS, [Object(B.a)(Object(B.a)({}, y.g), {}, {
          name: ""
        })]).then(function (e) {
          g(H(e)), i(e);
        }).catch(S).finally(function (e) {
          return k(!1);
        });
      }, []);

      var H = function (e) {
        var t = {},
            a = 0;

        if (window.location.search) {
          var n = window.location.search.replace("?", "").split("&");

          for (var r in n) {
            var l = n[r].split("="),
                c = Object(o.a)(l, 2),
                i = c[0],
                m = c[1];
            t[i] = decodeURIComponent(m);
          }

          if (t.url) if (-1 === (a = e.findIndex(function (e) {
            return e.url === t.url;
          })) && t.elementFinder) {
            var s = Object(B.a)(Object(B.a)({}, y.g), {}, {
              name: "getautoclicker.com"
            });
            s.url = t.url, s.actions[0].elementFinder = t.elementFinder, e.push(s), a = e.length - 1;
          } else if (t.error) {
            var u = e[a].actions.findIndex(function (e) {
              return e.elementFinder === t.elementFinder;
            });
            -1 !== u && (e[a].actions[u].error = "elementFinder");
          } else if (t.elementFinder) {
            if (-1 === e[a].actions.findIndex(function (e) {
              return e.elementFinder === t.elementFinder;
            })) {
              var d = Object(B.a)({}, y.e);
              d.elementFinder = t.elementFinder, e[a].actions.push(d);
            }
          }
        }

        return a;
      };

      Object(n.useEffect)(function () {
        F.current ? F.current = !1 : x.g.setItem(y.c.CONFIGS, c).catch(S).finally(function (e) {
          return k(!1);
        });
      }, [c]);

      var V = function () {
        var e = c[d].name;
        k(!0), i(c.filter(function (e, t) {
          return t !== d;
        })), g(function (e) {
          return 2 === c.length ? 0 : 0 === e ? e : e - 1;
        }), k(!1), t.current.push({
          body: r.a.createElement("p", null, r.a.createElement("span", {
            className: "badge badge-danger"
          }, e), " removed successfully"),
          header: r.a.createElement("strong", {
            className: "mr-auto"
          }, "Configuration")
        });
      };

      return r.a.createElement(r.a.Fragment, null, N ? r.a.createElement(C.Loading, {
        className: "d-flex justify-content-center m-5"
      }) : w ? r.a.createElement(E.a, {
        variant: "danger"
      }, r.a.createElement(E.a.Heading, null, "Error"), JSON.stringify(w)) : r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
        className: "mb-3"
      }, r.a.createElement(f.a.Body, null, r.a.createElement(b.a, null, r.a.createElement(p.a, null, r.a.createElement(s.a, null, r.a.createElement(s.a.Group, {
        controlId: "selected",
        className: "mb-0"
      }, r.a.createElement(s.a.Control, {
        as: "select",
        custom: !0,
        onChange: function (e) {
          g(x.a.getValue(e.currentTarget));
        },
        value: d,
        "data-type": "number"
      }, c.map(function (e, t) {
        return r.a.createElement("option", {
          key: t,
          value: t
        }, e.name || Ee(e.url, t));
      }))))), r.a.createElement(p.a, {
        md: "auto",
        className: "d-flex align-items-center"
      }, r.a.createElement(v.a, {
        type: "button",
        variant: "success",
        onClick: function () {
          var e = Ee(void 0, c.length);
          i([].concat(Object(A.a)(c), [Object(B.a)(Object(B.a)({}, y.g), {}, {
            name: e
          })])), t.current.push({
            body: r.a.createElement("p", null, r.a.createElement("span", {
              className: "badge badge-success"
            }, e), " added successfully "),
            header: r.a.createElement("strong", {
              className: "mr-auto"
            }, "Configuration")
          });
        }
      }, "Add Configuration"), r.a.createElement(D.a, {
        className: "ml-3",
        alignRight: !0
      }, r.a.createElement(D.a.Toggle, {
        as: L,
        id: "dropdown-basic"
      }, r.a.createElement(ie.a, {
        width: "24",
        height: "24"
      })), r.a.createElement(D.a.Menu, null, r.a.createElement(D.a.Item, {
        onClick: function () {
          x.b.export("All Configurations", c).catch(function (e) {
            t.current.push({
              body: JSON.stringify(e),
              header: r.a.createElement("strong", {
                className: "mr-auto"
              }, "Export Error"),
              bodyClass: "text-danger"
            });
          });
        }
      }, "Export All"), r.a.createElement(D.a.Item, {
        onClick: function (e) {
          return _.current.click();
        }
      }, "Import All"), r.a.createElement(D.a.Divider, null), r.a.createElement(D.a.Item, {
        onClick: function () {
          var e = c[d].name || c[d].url || "configuration-".concat(d);
          P.current.confirm({
            title: "Remove Configuration",
            message: r.a.createElement("p", null, "Are you sure to remove ", r.a.createElement("span", {
              className: "badge badge-danger"
            }, e), " Configuration?"),
            confirmFunc: V
          });
        },
        className: 1 === c.length ? "text-muted" : "text-danger",
        disabled: 1 === c.length
      }, "Remove Configuration"))), r.a.createElement("div", {
        className: "custom-file d-none"
      }, r.a.createElement("input", {
        type: "file",
        className: "custom-file-input",
        ref: _,
        accept: ".json",
        id: "import-configurations",
        onChange: function (e) {
          var a = e.currentTarget.files;
          if (a.length <= 0) return !1;
          var n = new FileReader();
          n.onload = function (e) {
            try {
              k(!0), i(JSON.parse(e.target.result)), g(0), k(!1);
            } catch (w) {
              t.current.push({
                body: JSON.stringify(w),
                header: r.a.createElement("strong", {
                  className: "mr-auto"
                }, "Import Error"),
                bodyClass: "text-danger"
              });
            }
          }, n.readAsText(a.item(0));
        }
      }), r.a.createElement("label", {
        className: "custom-file-label",
        htmlFor: "import-configurations",
        style: {
          fontSize: "1rem",
          fontWeight: 400
        }
      }, "Import All")))))), r.a.createElement(de, {
        config: T,
        configIndex: d,
        toastRef: t,
        setConfigs: i
      }), r.a.createElement(ae, {
        ref: P
      }), T.enable && r.a.createElement(r.a.Fragment, null, r.a.createElement(W, {
        batch: T.batch,
        configIndex: d,
        setConfigs: i
      }), r.a.createElement(oe, {
        actions: T.actions,
        configIndex: d,
        toastRef: t,
        setConfigs: i,
        addonRef: R
      }), r.a.createElement(te, {
        ref: R,
        configIndex: d,
        setConfigs: i
      }))));
    },
        be = (a(95), a(111)),
        pe = Object(n.forwardRef)(function (e, t) {
      var a = Object(n.useState)([]),
          l = Object(o.a)(a, 2),
          c = l[0],
          i = l[1];
      return Object(n.useImperativeHandle)(t, function () {
        return {
          push: function (e) {
            i([e].concat(Object(A.a)(c)));
          }
        };
      }), r.a.createElement("div", {
        className: "toast-handler"
      }, c.map(function (e, t) {
        var a = e.body,
            n = e.header,
            l = e.bodyClass,
            c = e.headerClass,
            o = e.delay,
            m = void 0 === o ? 5e3 : o,
            s = e.autohide,
            u = void 0 === s || s,
            d = e.show,
            E = void 0 === d || d,
            f = e.onClose;
        return r.a.createElement(be.a, {
          key: t,
          onClose: function () {
            var e;
            e = t, i(function (t) {
              return t.map(function (t, a) {
                return a === e ? Object(B.a)(Object(B.a)({}, t[e]), {}, {
                  show: !1
                }) : t;
              });
            }), f && f(t);
          },
          show: E,
          delay: m,
          autohide: u
        }, r.a.createElement(be.a.Header, {
          className: c
        }, n), r.a.createElement(be.a.Body, {
          className: l
        }, a));
      }));
    });

    pe.displayName = "ToastHandler";

    var ge = pe,
        he = a(105),
        ve = function (e) {
      var t = e.error,
          a = e.className;
      return r.a.createElement(E.a, {
        variant: "danger",
        className: a
      }, r.a.createElement(E.a.Heading, null, "Error"), JSON.stringify(t));
    },
        ye = function (e) {
      var t = e.client,
          a = e.slot,
          l = e.format;
      return Object(n.useEffect)(function () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, []), r.a.createElement("ins", {
        className: "adsbygoogle",
        style: {
          display: "block"
        },
        "data-ad-client": t,
        "data-ad-slot": a,
        "data-ad-format": l,
        "data-full-width-responsive": "true"
      });
    };

    var Oe = function () {
      var e = Object(n.useRef)(),
          t = Object(n.useState)(),
          a = Object(o.a)(t, 2),
          l = a[0],
          c = a[1],
          i = Object(n.useState)(),
          m = Object(o.a)(i, 2),
          s = m[0],
          u = m[1];
      Object(n.useEffect)(function () {
        x.f.values(["name", "version"]).then(c).catch(function (e) {
          u(e), "Could not establish connection. Receiving end does not exist." === e.message && (window.location.href = "https://getautoclicker.com/");
        });
      }, []);

      try {
        return r.a.createElement(he.a, null, s ? r.a.createElement(ve, {
          error: s,
          className: "mt-5"
        }) : l && r.a.createElement(r.a.Fragment, null, r.a.createElement(F, {
          name: l.name
        }), r.a.createElement("main", null, r.a.createElement(fe, {
          toastRef: e
        })), r.a.createElement(R, {
          version: l.version
        }), r.a.createElement(ge, {
          ref: e
        })), r.a.createElement(ye, {
          client: "ca-pub-9512495707028343",
          slot: "4304175895",
          format: "auto"
        }));
      } catch (s) {
        console.error(",ers", s);
      }
    };

    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    window.react_env = Object({
      NODE_ENV: "production",
      PUBLIC_URL: ".",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0,
      REACT_APP_CHROME_EXTENSION_ID: "pmckiknbinanfnmbichcncmfpbcfpocn",
      REACT_APP_EXTERNALLY_CONNECTABLE: "https://getautoclicker.com/* https://dhruv-techapps.github.io/*"
    }), c.a.render(r.a.createElement(Oe, null), document.getElementById("root")), window.$(document).keydown(function (e) {
      return 123 !== e.keyCode && (!e.ctrlKey || !e.shiftKey || 73 !== e.keyCode) && void 0;
    }), window.$(document).on("contextmenu", function (e) {
      e.preventDefault();
    }), window.onerror = function (e) {
      x.c.error({
        name: "OptionsPageError",
        stack: e
      });
    }, console.error = function () {
      var e = console.error;
      return function () {
        for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];

        x.c.error({
          name: "OptionsPageError",
          stack: a[0]
        }), e.apply(console, a);
      };
    }(), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
      e.unregister();
    }).catch(function (e) {
      console.error(e.message);
    });
  }
}, [[81, 1, 2]]]);
},{}],"C:/Users/dharm/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59836" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/dharm/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","static/js/main.38a84deb.chunk.js"], null)
//# sourceMappingURL=/main.38a84deb.chunk.993803bf.js.map