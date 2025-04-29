type UserField = "id" | "name" | "email" | "password" | "token";

// 여기에 SafeUserField 타입을 정의하세요
type SafeUserField = Exclude<UserField, "password" | "token">;
