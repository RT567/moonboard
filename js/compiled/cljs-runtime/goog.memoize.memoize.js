goog.loadModule(function(exports) {
  function memoize(f, serializer = simpleSerializer) {
    const uidF = goog.getUid(f);
    const keyFn = ([that, ...args]) => {
      return serializer(uidF, args);
    };
    const valueFn = ([that, ...args]) => {
      return f.apply(that, args);
    };
    const memoizedFn = function(...args) {
      if (memoize.ENABLE_MEMOIZE) {
        const cacheKey = this || goog.global;
        let cache = MODULE_LOCAL_CACHE.get(cacheKey);
        if (!cache) {
          cache = {};
          MODULE_LOCAL_CACHE.set(cacheKey, cache);
        }
        return reflect.cache(cache, [this, ...args], valueFn, keyFn);
      } else {
        return f.apply(this, args);
      }
    };
    return memoizedFn;
  }
  "use strict";
  goog.module("goog.memoize");
  goog.module.declareLegacyNamespace();
  const reflect = goog.require("goog.reflect");
  const MODULE_LOCAL_CACHE = new WeakMap();
  exports = memoize;
  memoize.ENABLE_MEMOIZE = goog.define("goog.memoize.ENABLE_MEMOIZE", true);
  const clearCache = function(cacheOwner) {
    MODULE_LOCAL_CACHE.set(cacheOwner || goog.global, {});
  };
  exports.clearCache = clearCache;
  const simpleSerializer = function(functionUid, args) {
    const context = [functionUid];
    for (let i = args.length - 1; i >= 0; --i) {
      context.push(typeof args[i], args[i]);
    }
    return context.join("\v");
  };
  exports.simpleSerializer = simpleSerializer;
  return exports;
});

//# sourceMappingURL=goog.memoize.memoize.js.map
