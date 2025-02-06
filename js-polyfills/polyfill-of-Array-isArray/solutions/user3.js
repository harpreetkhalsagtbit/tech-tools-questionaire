function customIsArray(value) {
    'use strict';
    
    return value && value.__proto__ === Array.prototype || value === Array.prototype
  }

  Array.prototype.customIsArray = customIsArray;
  
  module.exports = {
      customIsArray
  }