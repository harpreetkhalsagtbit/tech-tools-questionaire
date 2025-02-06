/**
 * Read FAQs section on the left for more information on how to use the editor
**/

/**
 * Do not change function name
 */

function customIsArray(value) {
    // DO NOT REMOVE
    'use strict';
  
    if (!value) return false;
  
    // for Array.prototype we can check if prototype is related to an Array or not
    return value instanceof Array || value.isPrototypeOf([])
}
  
Array.prototype.customIsArray = customIsArray;
