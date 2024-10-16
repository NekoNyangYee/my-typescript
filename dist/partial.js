"use strict";
function createUser(user) {
    console.log(user.name);
    console.log(user.age, user.email, user.description);
    console.log(user.id, user.name, user.age, user.email, user.description);
}
createUser({ name: 'neo', age: 85 });
createUser({ name: 'neo', age: 85, email: 'a@kakao.com' });
