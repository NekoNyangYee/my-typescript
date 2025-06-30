// T와 그 모든 하위 객체의 속성을 재귀적으로 선택적(optional)으로 만드는
// DeepPartial<T> 유틸리티 타입을 만들어보세요.
type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

// --- 테스트 케이스 ---
interface UserPreferences {
  notifications: {
    email: boolean;
    sms: boolean;
    push: {
      enabled: boolean;
      sound: string;
    };
  };
  privacy: {
    profileVisibility: "public" | "private";
    shareUsageData: boolean;
  };
}

// DeepPartial을 적용한 타입
type PartialUserPreferences = DeepPartial<UserPreferences>;

// 테스트용 변수 (이 코드가 에러 없이 동작해야 함)
// 어떤 레벨의 속성이든 선택적으로 제공할 수 있어야 합니다.

const prefs1: PartialUserPreferences = {
  notifications: {
    email: true, // sms와 push를 생략해도 OK
  },
};

const prefs2: PartialUserPreferences = {
  privacy: {
    shareUsageData: false, // profileVisibility를 생략해도 OK
  },
};

const prefs3: PartialUserPreferences = {
  notifications: {
    push: {
      sound: "ding", // push의 enabled를 생략해도 OK
    },
  },
};

const prefs4: PartialUserPreferences = {}; // 최상위 객체가 비어있어도 OK

// 이 변수 선언은 에러가 발생해야 함 (타입이 맞지 않음)
/*
const invalidPrefs: PartialUserPreferences = {
    notifications: {
        email: 'yes' // 'yes'는 boolean이 아님
    }
};
*/
