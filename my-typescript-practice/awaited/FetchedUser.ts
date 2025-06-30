// API로부터 받아오는 유저 정보의 타입 (Promise로 감싸져 있음)
type FetchedUser = Promise<{
  id: string;
  name: string;
  email: string;
}>;

// API로부터 받아오는 게시물 목록의 타입 (Promise로 감싸져 있음)
type FetchedPosts = Promise<string[]>;

// 아주 가끔, 다른 비동기 처리를 거쳐 Promise가 중첩될 수도 있음
type NestedPromiseNumber = Promise<Promise<number>>;

// --- 문제 ---
// Awaited<T> 유틸리티 타입을 사용하여, Promise가 모두 해결되었을 때
// 실제 데이터의 타입을 정의해 보세요.

// FetchedUser에서 실제 유저 객체의 타입을 추출하세요.
type UserData = Awaited<FetchedUser>;

// FetchedPosts에서 실제 게시물 배열의 타입을 추출하세요.
type PostsData = Awaited<FetchedPosts>;

// NestedPromiseNumber에서 최종 숫자의 타입을 추출하세요.
type FinalNumber = Awaited<NestedPromiseNumber>;

// --- 테스트 케이스 ---
// 아래 변수 선언들이 타입 에러 없이 성공해야 합니다.
const user: UserData = { id: "1", name: "홍길동", email: "hong@example.com" };
const posts: PostsData = ["첫 번째 글", "두 번째 글"];
const finalNum: FinalNumber = 100;

// user.id, posts.length, finalNum.toFixed() 등의 속성/메서드 접근이
// 타입 에러 없이 가능해야 합니다.
console.log(user.name, posts.length, finalNum.toFixed(2));
