// --- 기본 타입 (수정하지 마세요) ---

// 사용자의 역할을 나타내는 리터럴 타입
type UserRole = "admin" | "editor" | "guest";

// 모든 사용자의 기본 정보를 담는 핵심 인터페이스
interface User {
  readonly userId: string;
  username: string;
  email: string;
  role: UserRole;
  lastLogin?: Date;
  settings: {
    theme: "dark" | "light";
    notifications: boolean;
  };
}

// --- ↓↓↓ 여기에 4개의 미션 타입을 정의하세요 ↓↓↓ ---

/**
 * ## 미션 1: 사용자 정보 업데이트 타입
 * 사용자가 자신의 프로필을 업데이트할 때 사용하는 데이터의 타입을 만드세요.
 * - `id`와 `role`은 절대 변경할 수 없어야 합니다.
 * - 나머지 모든 속성은 선택적으로(optional) 보낼 수 있어야 합니다.
 * - 힌트: Omit<T, K>와 Partial<T>을 조합해 보세요.
 */
type UserUpdatePayload = Partial<Omit<User, "userId" | "role">>;

/**
 * ## 미션 2: 공개 프로필 타입
 * 다른 사용자에게 공개되는 프로필 정보의 타입을 만드세요.
 * - 개인정보인 `email`, `lastLogin`, `settings`는 제외해야 합니다.
 * - `id`, `username`, `role`만 포함되어야 합니다.
 * - 힌트: Pick<T, K> 또는 Omit<T, K>을 사용해 보세요.
 */
type PublicUserProfile = Pick<User, "userId" | "username" | "role">;

/**
 * ## 미션 3: 역할별 권한 맵 타입
 * 각 사용자 역할(`UserRole`)에 따른 권한 목록(문자열 배열)을 매핑하는 타입을 만드세요.
 * - 예시: { admin: ['create', 'read', 'update', 'delete'], editor: [...] }
 * - 힌트: Record<K, T>를 사용해 보세요.
 */
type RolePermissions = Record<UserRole, Array<string>>;

/**
 * ## 미션 4: 필수 설정 타입
 * User 인터페이스의 `settings` 속성만 가져오되, 그 내부의 모든 속성들을
 * 선택적이 아닌 필수(required)로 만드는 타입을 만드세요.
 * - 힌트: Pick<T, K>과 Required<T>를 사용해 보세요.
 */
type RequiredUserSettings = {
  settings: Required<User["settings"]>;
};

// --- ↑↑↑ 여기에 4개의 미션 타입을 정의하세요 ↑↑↑ ---

// --- 테스트 케이스 ---
// 아래 테스트 케이스들이 모두 에러 없이 동작하도록 위 타입들을 완성해야 합니다.

// 미션 1 테스트
const updateData: UserUpdatePayload = {
  username: "Alex_v2",
  settings: { theme: "dark", notifications: true },
};
// updateData.id = 'new-id'; // Error: id는 포함될 수 없음
// updateData.role = 'admin'; // Error: role은 포함될 수 없음

// 미션 2 테스트
const publicProfile: PublicUserProfile = {
  userId: "user-123",
  username: "Alex",
  role: "editor",
};
// const email = publicProfile.email; // Error: email은 포함되지 않음

// 미션 3 테스트
const permissions: RolePermissions = {
  admin: ["create-user", "delete-user", "read-logs"],
  editor: ["create-post", "edit-post"],
  guest: ["read-post"],
};
// permissions.superadmin = []; // Error: superadmin은 UserRole에 없는 역할임

// 미션 4 테스트
const userSettings: RequiredUserSettings = {
  settings: {
    theme: "light",
    notifications: false,
  },
};
// const incompleteSettings: RequiredUserSettings = { settings: { theme: 'dark' } }; // Error: notifications 속성이 없음
