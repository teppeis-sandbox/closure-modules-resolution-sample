goog.addDependency('../../src/closure-module-a.js', ['closuremodule.a'], [], {'module': 'goog'});
goog.addDependency('../../src/closure-module-b.js', ['closuremodule.b'], ['closuremodule.a', 'closurescript.a', 'esm.a'], {'lang': 'es6', 'module': 'goog'});
goog.addDependency('../../src/closure-module-c.js', ['closuremodule.c'], [], {'module': 'goog'});
goog.addDependency('../../src/closure-script-a.js', ['closurescript.a'], [], {});
goog.addDependency('../../src/closure-script-b.js', ['closurescript.b'], ['closuremodule.a', 'closuremodule.c', 'closurescript.a', 'esm.a'], {'lang': 'es6'});
goog.addDependency('../../src/esm-a.js', ['esm.a'], [], {'lang': 'es6', 'module': 'es6'});
goog.addDependency('../../src/esm-b.js', [], ['../../src/esm-a.js', 'closuremodule.a', 'closurescript.a'], {'lang': 'es6', 'module': 'es6'});

