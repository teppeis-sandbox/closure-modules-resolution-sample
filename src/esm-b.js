// ES Modules can load ES Modules, Closure Scripts and Closure Modules
import esma from './esm-a.js';

const scriptA = goog.require('closurescript.a');
const moduleA = goog.require('closuremodule.a');

console.log(esma, scriptA, moduleA);
