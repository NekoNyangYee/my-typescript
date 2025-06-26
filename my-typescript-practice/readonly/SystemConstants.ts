interface SystemConstants {
  API_URL: string;
  MAX_CONNECTIONS: number;
  DEFAULT_LANGUAGE: "ko" | "en";
}

// SystemConstants의 모든 속성을 읽기 전용으로 만드는 타입을 정의하세요.
type ImmutableConstants = Readonly<SystemConstants>;

// --- 테스트 케이스 ---

const constants: ImmutableConstants = {
  API_URL: "https://api.example.com",
  MAX_CONNECTIONS: 100,
  DEFAULT_LANGUAGE: "ko",
};

// 아래와 같이 속성에 새로운 값을 할당하려고 하면
// 타입스크립트 에러가 발생해야 합니다. (OK)
/*
constants.API_URL = 'http://new-api.com'; // Error: Cannot assign to 'API_URL' because it is a read-only property.
constants.MAX_CONNECTIONS = 50; // Error: Cannot assign to 'MAX_CONNECTIONS' because it is a read-only property.
*/
