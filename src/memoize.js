module.exports = (func) => {
  const cache = {};
  if (typeof func != 'function') return undefined;
  return (...args) => {
    if (args.length == 0) return null;
    let key = args[0];
    if (key in cache) {
      return cache[key];
    } else {
      let countResult = func.apply(this, args);
      cache[key] = countResult;
      return countResult;
    }
  };
};