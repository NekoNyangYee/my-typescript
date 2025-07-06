// --- ↓↓↓ 여기에 storageMaster의 타입을 선언하세요 ↓↓↓ ---

/* 여기에 타입 선언 코드를 작성하세요 */

// --- ↑↑↑ 여기에 storageMaster의 타입을 선언하세요 ↑↑↑ ---

// --- 테스트 케이스 ---
// 아래 테스트 케이스가 모두 에러 없이 동작하도록 타입을 완성해야 합니다.

// 테스트를 위한 유저와 상품 인터페이스
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

interface Product {
  sku: string;
  name: string;
  price: number;
}

interface StorageState {
  prefix: string;
  setItem(key: string, value: unknown): void;
  getItem<T>(key: string): T | null;
}

declare const storageMaster: StorageState;

// 1. 데이터 저장 (OK)
// setItem의 value는 어떤 형태의 객체든 받을 수 있습니다.
storageMaster.setItem("user:1", { id: 1, name: "Alex", isActive: true });
storageMaster.setItem("product:101", {
  sku: "TS-BOOK-2025",
  name: "Advanced TypeScript",
  price: 32000,
});

// 2. 제네릭을 사용해 타입에 맞게 데이터 가져오기 (OK)
// getItem<User>로 호출했으므로, 반환 값의 타입은 User | null 이 됩니다.
const user = storageMaster.getItem<User>("user:1");
if (user) {
  // 'user'는 User 타입으로 추론되어야 합니다.
  console.log(`유저 이름: ${user.name}`);
}

// getItem<Product>로 호출했으므로, 반환 값의 타입은 Product | null 이 됩니다.
const product = storageMaster.getItem<Product>("product:101");
if (product) {
  // 'product'는 Product 타입으로 추론되어야 합니다.
  console.log(`상품 가격: ${product.price}`);
}

// 3. 데이터가 없을 경우 null 처리 (OK)
const nonExistentUser = storageMaster.getItem<User>("user:2");
console.log(`없는 유저: ${nonExistentUser}`); // null 출력

// --- 아래는 모두 타입 에러가 발생해야 올바른 선언입니다 ---

// 4. 반환된 타입에 존재하지 않는 속성 접근 (Error)
/*
if (user) {
  console.log(user.email); // User 타입에는 'email' 속성이 없음
}
*/

// 5. 타입 추론이 잘못된 경우 (Error)
// user 타입의 객체를 Product 타입으로 가져오려고 시도.
// 타입스크립트가 컴파일 시점에 막을 수는 없지만, 아래 코드에서 에러가 발생해야 함.
/*
const wrongType = storageMaster.getItem<Product>('user:1');
if (wrongType) {
  console.log(wrongType.price); // user:1 데이터에는 price 속성이 없음에도 접근 시도
                                // 올바르게 타입이 추론되었다면, wrongType은 Product | null 이므로
                                // user.name 같은 속성은 없어야 함.
                                // (이 부분은 런타임에러지만, 타입정의가 잘 되었다는 증거)
}
*/

// 6. 제네릭 타입을 전달하지 않은 경우 (Error)
// T가 추론될 수 없으므로 에러가 발생해야 함
/*
const unknownItem = storageMaster.getItem('user:1');
*/
