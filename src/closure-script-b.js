// Closure Scripts can load Closure Scripts, Closure Modules and ES Modules with goog.declareModuleId()
goog.provide('closurescript.b');

goog.require('closurescript.a');
goog.require('closuremodule.a');
goog.require('closuremodule.c');
goog.require('esm.a');

// Closure Script and Closure Module with goog.module.declareLegacyNamespace() are available in top level
console.log(closurescript.a, closuremodule.c);

// Use goog.scope because goog.module.get() is not available in top level
goog.scope(() => {
  // Closure Module without goog.module.declareLegacyNamespace()
  const moduleA = goog.module.get('closuremodule.a');
  // ESM with goog.declareModuleId() (goog.module.declareLegacyNamespace() is not available in ESM)
  const esma = goog.module.get('esm.a');

  console.log(moduleA, esma);
});
