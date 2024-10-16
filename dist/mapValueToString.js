"use strict";
function convertValue(obj) {
    var result = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = String(obj[key]);
        }
    }
    return result;
}
var person = {
    id: 1,
    name: "th kim",
    age: 23,
    isActive: true,
};
var personString = convertValue(person);
console.log(personString);
