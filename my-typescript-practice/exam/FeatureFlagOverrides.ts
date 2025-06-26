// 관리 대상인 기능 플래그 목록
type FeatureID = "newUserProfile" | "darkMode" | "betaAnalytics";

// 사용자가 일부 기능의 상태만 덮어쓸 때 사용하는
// 객체의 타입을 정의해 보세요.
type FeatureFlagOverrides = {
  [K in FeatureID]?: { enabled: boolean };
};

// --- 테스트 케이스 ---

// 일부 기능만 덮어쓰는 경우 (OK)
const userOverrides: FeatureFlagOverrides = {
  darkMode: { enabled: true },
  betaAnalytics: { enabled: false },
};

// 하나의 기능만 덮어쓰는 경우 (OK)
const singleOverride: FeatureFlagOverrides = {
  newUserProfile: { enabled: true },
};

// 빈 객체도 허용됩니다. (OK)
const noOverride: FeatureFlagOverrides = {};

// 존재하지 않는 기능 플래그를 사용하려는 경우 (Error)
/*
const invalidFeature: FeatureFlagOverrides = {
  newPaymentSystem: { enabled: true } // 'newPaymentSystem'은 FeatureID에 없음
};
*/

// 값의 형태가 { enabled: boolean }이 아닌 경우 (Error)
/*
const invalidValue: FeatureFlagOverrides = {
  darkMode: { enabled: 'on' } // 'on'은 boolean이 아님
};
*/
