if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + ".js", t).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, a) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let i = {};
    const r = (e) => n(e, c),
      o = { module: { uri: c }, exports: i, require: r };
    s[c] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (a(...e), i));
  };
}
define(["./workbox-9b4d2a02"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/531-856bcb27b41bcac4.js",
          revision: "856bcb27b41bcac4",
        },
        {
          url: "/_next/static/chunks/framework-2c16ac744b6cdea6.js",
          revision: "2c16ac744b6cdea6",
        },
        {
          url: "/_next/static/chunks/main-ad31422ebc9a27b1.js",
          revision: "ad31422ebc9a27b1",
        },
        {
          url: "/_next/static/chunks/pages/403-16412792ca4307e6.js",
          revision: "16412792ca4307e6",
        },
        {
          url: "/_next/static/chunks/pages/404-5751200a4fe546a6.js",
          revision: "5751200a4fe546a6",
        },
        {
          url: "/_next/static/chunks/pages/500-c4abd4e70b3be8b4.js",
          revision: "c4abd4e70b3be8b4",
        },
        {
          url: "/_next/static/chunks/pages/504-550c577771619e5d.js",
          revision: "550c577771619e5d",
        },
        {
          url: "/_next/static/chunks/pages/_app-8ef76a7ed100a18f.js",
          revision: "8ef76a7ed100a18f",
        },
        {
          url: "/_next/static/chunks/pages/_error-77823ddac6993d35.js",
          revision: "77823ddac6993d35",
        },
        {
          url: "/_next/static/chunks/pages/bots-67aea5d21f5846ef.js",
          revision: "67aea5d21f5846ef",
        },
        {
          url: "/_next/static/chunks/pages/index-88197ccf301d1556.js",
          revision: "88197ccf301d1556",
        },
        {
          url: "/_next/static/chunks/pages/partner-1b735b6325fb85d1.js",
          revision: "1b735b6325fb85d1",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-59c5c889f52620d6.js",
          revision: "59c5c889f52620d6",
        },
        {
          url: "/_next/static/css/58fa4400a1e80a48.css",
          revision: "58fa4400a1e80a48",
        },
        {
          url: "/_next/static/fT39VmTdTURMWG_ttCP9j/_buildManifest.js",
          revision: "e47d3f7356559bfc689231873ebcbb77",
        },
        {
          url: "/_next/static/fT39VmTdTURMWG_ttCP9j/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: t,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
