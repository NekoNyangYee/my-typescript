"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
function updatePersonInfo(obj, key, value) {
    var _a;
    return __assign(__assign({}, obj), (_a = {}, _a[key] = value, _a));
}
var userInfos = {
    id: 1,
    name: "thkim",
    email: "a1234@gmail.com"
};
var updatedUserInfos = updatePersonInfo(userInfos, "email", "bbb12345@gmail.com");
console.log(updatedUserInfos);
// 만약 제네릭이 없었다면?
/*
function updatePersonInfo(obj: PersonInfo, key: "id" | "name" | "email", value: PersonInfo["id"] | PersonInfo["name"] | PersonInfo["email"]): PersonInfo {
    return {
        ...obj,
        [key]: value
    }
}
*/ 
