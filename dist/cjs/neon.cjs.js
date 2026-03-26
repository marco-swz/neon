'use strict';

var index = require('./index-sQFzheBC.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.43.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('neon.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ne-button_3.cjs",[[769,"ne-button",{"disabled":[516],"loading":[516],"href":[513],"theme":[513],"variant":[513]}],[769,"ne-dialog",{"open":[1540],"titleText":[1,"title-text"],"close":[64],"show":[64]},null,{"open":[{"watchOpen":0}]}],[577,"ne-input",{"default":[1],"disabled":[1028],"loading":[4],"name":[1],"placeholder":[1],"required":[4],"readonly":[4],"type":[1],"value":[1025],"step":[2],"pattern":[1],"focus":[64],"reset":[64],"select":[64]},null,{"default":[{"watchDefault":0}],"value":[{"watchValue":0}],"name":[{"watchName":0}],"disabled":[{"watchDisabled":0}],"loading":[{"watchLoading":0}]}]]]], options);
});

exports.setNonce = index.setNonce;
