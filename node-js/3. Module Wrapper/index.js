console.log("Hello World");

// Behind the scene
(function (exports, require, module, __filename, __dirname) {
  console.log("Hello World");
})();

console.log(__dirname);
console.log(__filename);
console.log(module);
