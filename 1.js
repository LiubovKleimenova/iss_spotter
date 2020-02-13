let testFn = function(a) {
  console.log(`${a}`);
}

let testFn2 = function(callback) {
  callback(123);
};

testFn2(testFn);