var romanToInt = function (s) {
  const rules = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let sum = 0;
  for (let index = 0; index < s.length; index++) {
    const firstRoman = s[index];
    const secondRoman = s[index + 1];
    if (rules[`${firstRoman}${secondRoman}`]) {
      sum += rules[`${firstRoman}${secondRoman}`];
      index++;
    } else {
      sum += rules[`${firstRoman}`];
    }
  }
};
