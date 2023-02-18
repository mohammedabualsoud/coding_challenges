/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  const result = [];
  for (const char of address) {
    result.push(char === "." ? "[.]" : char);
  }
  return result.join("");
};
