function customPow (x, n) {
  if (x < 0 ||
     n < 0 ||
     x % Math.floor(x) !== 0 ||
     n % Math.floor(n) !== 0 ||
     (typeof x) !== 'number' ||
     (typeof n) !== 'number') return NaN;

  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

module.exports = customPow;
