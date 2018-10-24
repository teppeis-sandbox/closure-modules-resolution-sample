### tl;dr

All Closure Scripts, Closure Modules and ES Modules can load each other.

But..

- Closure Scripts and Closure Modules require ES Modules to call `goog.declareModuleId()`.
- Closure Scripts need to call `goog.module.get()` to load Closure Modules without `goog.module.declareLegacyNamespace()` and ES Modules.
