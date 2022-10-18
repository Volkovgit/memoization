module.exports = (fn) => {
  const cache = {};
  return (...args) => {
    let arg = args[0];
    if (arg in cache) {
      return cache[arg];
    } else {
      let countResult = fn(arg);
      cache[arg] = countResult;
      return countResult;
    }
  };
};
