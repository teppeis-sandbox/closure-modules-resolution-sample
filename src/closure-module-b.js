// Closure Modules can load Closure Scripts, Closure Modules and ES Modules with goog.declareModuleId()
goog.module('closuremodule.b');

const scriptA = goog.require('closurescript.a');
const moduleA = goog.require('closuremodule.a');
const esmA = goog.require('esm.a');

console.log(scriptA, moduleA, esmA);
