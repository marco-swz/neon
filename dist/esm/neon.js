import { p as promiseResolve, b as bootstrapLazy } from './index-C2QtI0Sh.js';
export { s as setNonce } from './index-C2QtI0Sh.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.43.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["ne-button_3",[[769,"ne-button",{"disabled":[516],"loading":[516],"href":[513],"theme":[513],"variant":[513]}],[769,"ne-dialog",{"open":[1540],"titleText":[1,"title-text"],"close":[64],"show":[64]},null,{"open":[{"watchOpen":0}]}],[577,"ne-input",{"default":[1],"disabled":[1028],"loading":[4],"name":[1],"placeholder":[1],"required":[4],"readonly":[4],"type":[1],"value":[1025],"step":[2],"pattern":[1],"focus":[64],"reset":[64],"select":[64]},null,{"default":[{"watchDefault":0}],"value":[{"watchValue":0}],"name":[{"watchName":0}],"disabled":[{"watchDisabled":0}],"loading":[{"watchLoading":0}]}]]]], options);
});
