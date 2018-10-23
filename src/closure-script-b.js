// Closure Scripts can load Closure Scripts, Closure Modules and ES Modules with declareModuleId()
goog.provide('closurescript.b');

goog.require('closurescript.a');
goog.require('closuremodule.a');
goog.require('closuremodule.c');
goog.require('esm.a');

// Closure Modules with goog.module.declareLegacyNamespace();
console.log(closurescript.a, closuremodule.c);

goog.scope(() => {
  // without goog.module.declareLegacyNamespace();
  const moduleA = goog.module.get('closuremodule.a');
  // ESM cannot use goog.module.declareLegacyNamespace();
  const esma = goog.module.get('esm.a');

  console.log(moduleA, esma);
});
