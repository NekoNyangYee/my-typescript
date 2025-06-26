interface ShipmentInfo {
  trackingNumber: string; // 송장번호
  carrier: "CJ" | "Lotte" | "PostOffice"; // 배송사
  senderAddress: string; // 발송지
  recipientAddress: string; // 수신지
  status: "pending" | "in-transit" | "delivered"; // 배송 상태
}

// ShipmentInfo 타입에서 'recipientAddress'와 'status'만 선택한 후,
// 이들을 선택적(optional) 속성으로 만드는 타입을 정의하세요.
type UpdateShipmentPayload = Partial<
  Pick<ShipmentInfo, "recipientAddress" | "status">
>;

// --- 테스트 케이스 ---

// 수신지만 변경하는 경우 (OK)
const updateAddress: UpdateShipmentPayload = {
  recipientAddress: "서울시 강남구 테헤란로 427",
};

// 배송 상태만 변경하는 경우 (OK)
const updateStatus: UpdateShipmentPayload = {
  status: "delivered",
};

// 둘 다 변경하는 경우 (OK)
const updateBoth: UpdateShipmentPayload = {
  recipientAddress: "서울시 서초구 서초대로 77길",
  status: "in-transit",
};

// 수정 불가능한 필드를 보내는 경우 (Error)
/*
const invalidUpdate: UpdateShipmentPayload = {
  trackingNumber: '123-456-789'
};
*/
