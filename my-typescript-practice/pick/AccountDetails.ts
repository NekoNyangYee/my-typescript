interface AccountDetails {
  id: string;
  username: string;
  email: string;
  profileImageUrl: string;
  lastLogin: Date;
}

// AccountDetails 타입에서 'id'와 'profileImageUrl' 속성만 선택하여
// 새로운 타입을 만드세요.
type UserAvatarInfo = Pick<AccountDetails, "id" | "profileImageUrl">;

// --- 테스트 케이스 ---
const avatarData: UserAvatarInfo = {
  id: "user-123",
  profileImageUrl: "http://example.com/img/avatar.png",
};

// 이 코드는 에러가 발생해야 합니다. (username은 선택되지 않은 속성이므로)
/*
const invalidAvatarData: UserAvatarInfo = {
  id: 'user-123',
  profileImageUrl: 'http://example.com/img/avatar.png',
  username: 'John Doe'
};
*/
