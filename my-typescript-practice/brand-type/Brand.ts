// --- Step 1: 브랜딩을 위한 제네릭 타입 만들기 ---
// K: 원본 타입 (e.g., string, number)
// T: 고유한 브랜드 이름 (e.g., 'UserID')
type Brand<K, T> = K & { __brand: T };

// --- Step 2: 브랜드 타입을 사용해 고유 ID 타입 정의하기 ---
type UserID = Brand<string, "UserID">;
type PostID = Brand<string, "PostID">;

// --- Step 3: 타입 안전성 테스트 ---
function getUserById(id: UserID) {
  console.log(`Fetching user with ID: ${id}`);
}

function getPostById(id: PostID) {
  console.log(`Fetching post with ID: ${id}`);
}

// 실제 값을 생성할 때는 타입 단언(as)을 사용해 브랜드를 '입혀줍니다'.
const userId = "user-abc-123" as UserID;
const postId = "post-def-456" as PostID;

// 이 함수 호출들은 성공해야 합니다. (OK)
getUserById(userId);
getPostById(postId);

// 아래 함수 호출들은 타입 에러를 발생시켜야 합니다. (Error)
/*
getUserById(postId); // Error: Argument of type 'PostID' is not assignable to parameter of type 'UserID'.
getPostById(userId); // Error: Argument of type 'UserID' is not assignable to parameter of type 'PostID'.

const regularString = 'some-random-string';
getUserById(regularString); // Error: Argument of type 'string' is not assignable to parameter of type 'UserID'.
*/
