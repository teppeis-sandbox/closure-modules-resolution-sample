// Closure Modules can load Closure Modules, Closure Scripts and ES Modules with declareModuleId()
goog.module('closuremodule.b');

const moduleA = goog.require('closuremodule.a');
const scriptA = goog.require('closurescript.a');
const esmA = goog.require('esm.a');

console.log(moduleA, scriptA, esmA);
