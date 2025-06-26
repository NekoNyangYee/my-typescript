interface AppSettings {
  theme: "light" | "dark";
  fontSize: number;
  notificationsEnabled: boolean;
}

// AppSettings의 모든 속성을 선택적(optional)으로 만드는
// UpdateSettingsPayload 타입을 만드세요.
type UpdateSettingsPayload = Partial<AppSettings>;

// --- 테스트 케이스 ---

// 모든 속성을 다 보내는 경우 (OK)
const fullUpdate: UpdateSettingsPayload = {
  theme: "dark",
  fontSize: 16,
  notificationsEnabled: true,
};

// 일부 속성만 보내는 경우 (OK)
const partialUpdate: UpdateSettingsPayload = {
  fontSize: 18,
};

// 빈 객체를 보내는 경우도 허용됩니다. (OK)
const emptyUpdate: UpdateSettingsPayload = {};
