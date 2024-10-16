"use strict";
var userExtends = {
    email: 'a@kakao.com',
    description: 'hello'
};
function printUserOmit(user) {
    console.log(user.email, user.description);
}
printUserOmit(userExtends);
