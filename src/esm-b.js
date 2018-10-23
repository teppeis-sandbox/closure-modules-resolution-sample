// ES Modules can load ES Modules, Closure Modules and Closure Scripts
import esma from './esm-a.js';

const moduleA = goog.require('closuremodule.a');
const scriptA = goog.require('closurescript.a');

console.log(esma, moduleA, scriptA);
