type AllUserRoles = "admin" | "editor" | "viewer" | "guest";

// 'admin' 역할을 제외한 나머지 역할들을 포함하는 타입을 만드세요.
type NormalUserRoles = Exclude<AllUserRoles, "admin">;

// 테스트 (이 코드가 에러 없이 동작해야 합니다)
const userRole: NormalUserRoles = "editor";
const guestRole: NormalUserRoles = "guest";

// 이 코드는 에러가 발생해야 합니다.
// const adminRole: NormalUserRoles = 'admin';
