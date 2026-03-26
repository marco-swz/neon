'use strict';

var index = require('./index-sQFzheBC.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["ne-button_3.cjs",[[769,"ne-button",{"disabled":[516],"loading":[516],"href":[513],"theme":[513],"variant":[513]}],[769,"ne-dialog",{"open":[1540],"titleText":[1,"title-text"],"close":[64],"show":[64]},null,{"open":[{"watchOpen":0}]}],[577,"ne-input",{"default":[1],"disabled":[1028],"loading":[4],"name":[1],"placeholder":[1],"required":[4],"readonly":[4],"type":[1],"value":[1025],"step":[2],"pattern":[1],"focus":[64],"reset":[64],"select":[64]},null,{"default":[{"watchDefault":0}],"value":[{"watchValue":0}],"name":[{"watchName":0}],"disabled":[{"watchDisabled":0}],"loading":[{"watchLoading":0}]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
