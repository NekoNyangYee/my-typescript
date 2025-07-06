// --- ↓↓↓ 여기에 mapUtils의 타입을 선언하세요 ↓↓↓ ---

interface Coordinates {
  lat: number;
  lon: number;
}

/* 여기에 타입 선언 코드를 작성하세요 */
interface MapUtils {
  center: Coordinates;
  setCenter(lat: number, lon: number): void;
  getDistance(from: Coordinates, to: Coordinates): number;
}
// --- ↑↑↑ 여기에 mapUtils의 타입을 선언하세요 ↑↑↑ ---

declare const mapUtils: MapUtils;
// --- 테스트 케이스 ---
// 아래 코드는 여러분이 타입을 올바르게 선언했다면
// 어떠한 타입 에러도 발생시키지 않아야 합니다.

// 1. 초기 중심 좌표 사용
const initialCenter = mapUtils.center;
console.log(`초기 중심: 위도 ${initialCenter.lat}, 경도 ${initialCenter.lon}`);

// 2. 중심 좌표 변경
mapUtils.setCenter(36.635, 127.456); // 청주시청 좌표

// 3. 두 지점 간의 거리 계산
const seoul = { lat: 37.5665, lon: 126.978 };
const busan = { lat: 35.1796, lon: 129.0756 };
const distance = mapUtils.getDistance(seoul, busan);
console.log(`서울과 부산 사이의 거리: 약 ${distance.toFixed(2)}km`);

// --- 아래는 모두 타입 에러가 발생해야 올바른 선언입니다 ---

// 4. 존재하지 않는 속성에 접근 (Error)
/*
console.log(mapUtils.zoomLevel);
*/

// 5. 잘못된 타입의 인자를 함수에 전달 (Error)
/*
mapUtils.setCenter("36.635", "127.456");
*/

// 6. 필수 인자를 누락하고 함수 호출 (Error)
/*
const wrongDistance = mapUtils.getDistance(seoul);
*/

// 7. 객체의 속성 형태가 올바르지 않은 경우 (Error)
/*
const wrongPoint = { latitude: 37.5665, longitude: 126.9780 };
const anotherDistance = mapUtils.getDistance(seoul, wrongPoint);
*/
