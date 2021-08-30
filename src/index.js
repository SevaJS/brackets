module.exports = function check(str, bracketsConfig) {
  const openBrackets = bracketsConfig.map(one => one[0]);
  const closeBrackets = bracketsConfig.map(one => one[1]);
  const stack = [];

  for (let i of str) {
    const closeIndex = closeBrackets.indexOf(i);
    const openIndex = openBrackets.indexOf(i);

    if (closeIndex === openIndex) {
      if (stack[stack.length - 1] === openBrackets[openIndex]) {
        stack.pop();
      } else {
        stack.push(openBrackets[openIndex]);
      }
      continue;
    }

    if (openIndex >= 0) {
      stack.push(openIndex);
      continue;
    }

    if (closeIndex !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;


}
