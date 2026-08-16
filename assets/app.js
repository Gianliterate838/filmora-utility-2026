/**
 * Filmora — Pages helper (UI only).
 * Keyword: filmora
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'Filmora',
    keyword: 'filmora',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.FilmoraUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);
