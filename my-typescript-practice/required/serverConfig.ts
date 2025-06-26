interface ServerConfig {
  port: number;
  serviceName: string;
  cacheTTL?: number; // Time To Live, 초 단위 (선택 사항)
  enableCors?: boolean; // CORS 활성화 여부 (선택 사항)
}

// ServerConfig의 모든 속성(선택적 속성 포함)을
// 필수로 만드는 FinalizedConfig 타입을 만드세요.
type FinalizedConfig = Required<ServerConfig>;

// --- 테스트 케이스 ---

// 이 객체는 모든 속성을 다 가지고 있으므로 FinalizedConfig 타입에 할당 가능해야 합니다. (OK)
const completeConfig: FinalizedConfig = {
  port: 8080,
  serviceName: "my-api",
  cacheTTL: 3600,
  enableCors: true,
};

// 이 객체는 cacheTTL이 없으므로 FinalizedConfig 타입에 할당할 수 없어야 합니다. (Error)
/*
const incompleteConfig: FinalizedConfig = {
  port: 3000,
  serviceName: 'test-server'
};
*/
