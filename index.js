//Your code here
const justInvoke = function (anotherFunction) {
  return anotherFunction();
};

const setThisWithCall = function (fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

const setThisWithCall = function (fn, thisValue, arg) {
  return fn.apply(thisValue, arg);
};
