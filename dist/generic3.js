"use strict";
var parseData = {
    convert: function (input) {
        return JSON.parse(input);
    }
};
function convertFunction(data, input) {
    return data.convert(input);
}
var json = '{"name": "Jhon", "age": 25}';
var parsedData = convertFunction(parseData, json);
console.log(parsedData);
