// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lVyt3":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "16df5292ac9dc4ba";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aR1JP":[function(require,module,exports) {
var _modelsMjs = require("./models.mjs");
var _mainCss = require("./styles/main.css");
var _siteMjs = require("./classes/site.mjs");
var _sidebarMjs = require("./classes/sidebar.mjs");
const site = new (0, _siteMjs.Site)("#site");
site.render((0, _modelsMjs.model));
const sidebar = new (0, _sidebarMjs.SideBar)("#panel");

},{"./models.mjs":"rHUM0","./styles/main.css":"clPKd","./classes/site.mjs":"6gmZB","./classes/sidebar.mjs":"9k52X"}],"rHUM0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "model", ()=>model);
var _imgJpg = require("./images/img.jpg"); // специально именно так из-за парселя
var _imgJpgDefault = parcelHelpers.interopDefault(_imgJpg);
var _blockMjs = require("./classes/block.mjs");
const model = [
    new (0, _blockMjs.TitleBlock)("Hello World from JS!", {
        tag: "h1",
        // styles: 'background: linear-gradient(to bottom left, #553c9a, #ee4b2b);color: transparent;-webkit-background-clip: text;'
        styles: {
            background: "linear-gradient(to bottom left, #553c9a, #ee4b2b)",
            color: "transparent",
            "-webkit-background-clip": "text",
            "text-align": "center"
        }
    }),
    new (0, _blockMjs.ParagraphBlock)("Some text has arrived here", {
        styles: {
            color: "#333333",
            "font-family": "Bitter, serif",
            "font-size": "35px",
            "font-weight": "normal",
            "line-height": "54px",
            margin: "10px"
        }
    }),
    new (0, _blockMjs.ColumnsBlock)([
        "Ipsum dolor sit amet consectetur adipisicing elit. Ad, corporis!",
        "Ipsum dolor sit amet consectetur adipisicing elit. Ad, corporis!",
        "Ipsum dolor sit amet consectetur adipisicing elit. Ad, corporis!"
    ], {
        styles: {
            color: "#bbc3c8",
            "font-family": "Verdana, sans-serif",
            "font-size": "16px",
            "line-height": "26px",
            "text-indent": "10px",
            margin: "1px"
        }
    }),
    new (0, _blockMjs.ImageBlock)((0, _imgJpgDefault.default), {
        alt: "\u0417\u0434\u0435\u0441\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430",
        styles: {
            width: "1000px",
            height: "auto"
        },
        divStyles: {
            padding: "20px",
            display: "flex",
            "justify-content": "center"
        }
    }),
    new (0, _blockMjs.TextBlock)("Lorem ipsum dolor sit amet consectetur adipisicing elit.         Suscipit consequatur quisquam impedit labore alias reprehenderit corrupt        i nulla in, officia tempore hic ducimus recusandae vitae quis laboriosam unde         inventore sunt asperiores excepturi porro ea eveniet! Culpa libero vel, odit impedit        ducimus perferendis maxime reiciendis quae deleniti excepturi officiis accusantium        ex dolor quidem vero beatae incidunt vitae itaque ipsam animi magni ipsum ullam.         Dolor eligendi incidunt corrupti, consequatur architecto ratione a quod, eos         possimus odit repudiandae velit laborum maiores magni? Enim sapiente perspiciatis         error iusto. Quibusdam dolore molestiae dolores illum suscipit cupiditate autem         nam eum laboriosam vel atque perferendis possimus nesciunt soluta porro consequatur         aliquid error distinctio debitis in, est assumenda modi accusamus quidem? Id facere        ullam animi fugit labore, eligendi possimus ab odio voluptatibus commodi, nihil odit        hic atque nemo reiciendis magni aperiam recusandae omnis quae deserunt aspernatur.        Quae, incidunt? Itaque ex ut libero sint voluptatum eum at similique quod. Eveniet        nostrum, itaque voluptatum earum voluptate error. Assumenda quod earum maiores         vero maxime natus qui repellat possimus adipisci quaerat! Dolores iste amet eum        totam rerum reiciendis in quibusdam adipisci explicabo dolorum veritatis maiores         natus cumque recusandae, inventore, odio dolorem excepturi debitis quas obcaecati         soluta qui tempora. Molestiae ipsum adipisci quaerat hic!", {
        styles: {
            background: "linear-gradient(to top right, #adb7bd, #ee4b2b)",
            color: "transparent",
            "-webkit-background-clip": "text",
            "font-family": "Lucida Sans, Arial, sans-serif",
            "font-size": "16px",
            "line-height": "26px",
            "text-indent": "30px",
            margin: "0"
        },
        divStyles: {
        }
    })
];

},{"./images/img.jpg":"hhSyj","./classes/block.mjs":"5IESz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhSyj":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("1XKra") + "img.e1c7c74c.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"5IESz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TitleBlock", ()=>TitleBlock);
parcelHelpers.export(exports, "ParagraphBlock", ()=>ParagraphBlock);
parcelHelpers.export(exports, "ColumnsBlock", ()=>ColumnsBlock);
parcelHelpers.export(exports, "ImageBlock", ()=>ImageBlock);
parcelHelpers.export(exports, "TextBlock", ()=>TextBlock);
var _utilsMjs = require("../utils.mjs");
class Block {
    constructor(value, options){
        this.value = value;
        this.options = options;
    }
    toHTML() {
        throw new Error("\u041C\u0435\u0442\u043E\u0434 toHTML \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u043A\u043B\u0430\u0441\u0441\u0435!");
    }
}
class TitleBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML() {
        const { tag ="h1" , styles  } = this.options;
        // const tag = block.options.tag ?? 'h1'
        // const styles = block.options.styles
        return (0, _utilsMjs.row)((0, _utilsMjs.col)(`<${tag} class="header" style="${(0, _utilsMjs.toCSS)(styles)}">${this.value}</${tag}>`));
    }
}
class ParagraphBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML() {
        const styles = this.options.styles;
        return (0, _utilsMjs.row)((0, _utilsMjs.col)(`<p class="paragraph" style="${(0, _utilsMjs.toCSS)(styles)}">${this.value}</p>`));
    }
}
class ColumnsBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML() {
        const styles = this.options.styles;
        const html = this.value.map((item)=>(0, _utilsMjs.col)(item, styles)) // Аналогично .map(item => col(item))
        ;
        // Получили map и соединяем его элементы с помощью join(), избавляясь от запятых при автоматическом преобразовании в строку
        return (0, _utilsMjs.row)(`<p>${html.join("")}</p>`);
    }
}
class ImageBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML() {
        const { styles , alt , divStyles  } = this.options;
        return (0, _utilsMjs.row)(`<img alt="${alt}" src="${this.value}" style="${(0, _utilsMjs.toCSS)(styles)}"/>`, divStyles);
    }
}
class TextBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML() {
        const { styles , divStyles  } = this.options;
        return (0, _utilsMjs.row)(`<p style="${(0, _utilsMjs.toCSS)(styles)}">${this.value}</p>`, divStyles);
    }
}

},{"../utils.mjs":"6pXkX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pXkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "row", ()=>row);
parcelHelpers.export(exports, "col", ()=>col);
parcelHelpers.export(exports, "toCSS", ()=>toCSS);
parcelHelpers.export(exports, "sideBlock", ()=>sideBlock);
function row(content, styles = {}) {
    return `<div class="row" style="${toCSS(styles)}">${content}</div>`;
}
function col(content, styles = {}) {
    return `<div class="col-sm" style="${toCSS(styles)}">${content}</div>`;
}
function toCSS(styles = {}) {
    return Object.keys(styles).map((key)=>{
        return `${key}: ${styles[key]}`;
    }).join(";");
}
function sideBlock(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group  myMargins">
                <input class="form-control form-control-sm" name="value" placeholder="Ваш текст">  
            </div>
            <span class="text-danger" style="display: none; font-size: 0.8rem;" name="span">*Это поле должно быть обязательно заполнено!</span>
            <div class="form-group  myMargins">
                <input class="form-control form-control-sm" name="styles" placeholder="Ваши стили">
            </div>
            <button type="submit" class="btn btn-primary btn-sm  myMargins">Добавить</button>
        </form>
        <hr />
    `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"clPKd":[function() {},{}],"6gmZB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Site", ()=>Site);
class Site {
    constructor(selector){
        this.$el = document.querySelector(selector);
    }
    render(model) {
        model.forEach((block)=>{
            this.$el.insertAdjacentHTML("beforeend", block.toHTML());
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9k52X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SideBar", ()=>SideBar);
var _utilsMjs = require("../utils.mjs");
class SideBar {
    constructor(selector){
        this.$el = document.querySelector(selector);
        this.init();
    }
    init() {
        this.$el.insertAdjacentHTML("afterbegin", this.template);
        this.$el.addEventListener("submit", this.add);
    }
    get template() {
        return [
            (0, _utilsMjs.sideBlock)("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"),
            (0, _utilsMjs.sideBlock)("\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A")
        ].join("");
    }
    add(event) {
        event.preventDefault();
        event.target // Наша форма
        ;
        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;
        // Отлавливание ошибок на незаполненность поля с текстом
        const $span = event.target.children[2];
        if (!value) {
            $span.setAttribute("style", "display: show");
            return; // Чтобы дальше не работать с пустым value выходим из функции
        } else $span.setAttribute("style", "display: none");
        const $el = type === "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" ? document.querySelector(".header") : document.querySelector(".paragraph");
        const fullStyles = type === "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" ? "text-align: center;" + styles : "font-family: Bitter, serif;font-size: 35px;" + styles;
        $el.textContent = value;
        if (styles) $el.setAttribute("style", fullStyles);
    // if(type === 'Заголовок') {
    //     const $el = document.querySelector('.header')
    //     $el.textContent = value
    //     if(styles)
    //         $el.setAttribute('style', 'text-align: center;' + styles)
    // }  else {
    //     const $el = document.querySelector('.paragraph')
    //     $el.textContent = value
    //     if(styles)
    //         $el.setAttribute('style', 'font-family: Bitter, serif;' + styles)
    // }
    }
}

},{"../utils.mjs":"6pXkX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lVyt3","aR1JP"], "aR1JP", "parcelRequire5634")

//# sourceMappingURL=index.ac9dc4ba.js.map
