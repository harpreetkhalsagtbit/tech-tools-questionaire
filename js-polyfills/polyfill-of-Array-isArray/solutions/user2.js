function customIsArray(value) {
    'use strict';
    
    if (!value) return false;

    return Object.prototype.toString.call(value) === "[object Array]";
  }

  Array.prototype.customIsArray = customIsArray;
  
  module.exports = {
      customIsArray
  }