export {};

// ================================================================
// 응용 문제: 쇼핑몰 주문 관리 시스템
//
// 사용 유틸: Pick, Omit, Partial, Required, Record,
//           Exclude, NonNullable, Readonly, 커스텀 Mapped Type, ReturnType
// ================================================================

// ── 기본 타입 ────────────────────────────────────────────────────

type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipping"
  | "delivered"
  | "cancelled";

type PaymentMethod = "card" | "cash" | "transfer" | "kakaopay" | null;

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  thumbnailUrl: string | null;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  grade: "bronze" | "silver" | "gold" | "vip";
}

interface Order {
  id: string;
  customer: Customer;
  products: Product[];
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  shippingAddress: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  memo: string | null;
}

// ================================================================
// 문제 1. Pick
// ================================================================
// 주문 목록 페이지에서는 모든 정보가 필요하지 않습니다.
// Order에서 id, status, totalAmount, createdAt 필드만 골라
// OrderSummary 타입을 만드세요.

// TODO:
type OrderSummary = Pick<Order, "id" | "status" | "totalAmount" | "createdAt">;

// 테스트 (에러 없이 동작해야 함)
const summary: OrderSummary = {
  id: "ORD-001",
  status: "pending",
  totalAmount: 59000,
  createdAt: new Date(),
};

// ================================================================
// 문제 2. Omit
// ================================================================
// 주문 생성 시 id, createdAt, updatedAt 은 서버에서 자동 생성됩니다.
// 해당 필드를 제외한 CreateOrderInput 타입을 만드세요.

// TODO:
type CreateOrderInput = Omit<Order, "id" | "createdAt" | "updatedAt">;

// 테스트 (에러 없이 동작해야 함)
const newOrder: CreateOrderInput = {
  customer: {} as Customer,
  products: [],
  status: "pending",
  paymentMethod: "card",
  totalAmount: 120000,
  shippingAddress: "서울시 강남구",
  memo: null,
};

// ================================================================
// 문제 3. Partial
// ================================================================
// 주문 수정 API는 변경할 필드만 전달받습니다.
// Order의 모든 필드를 선택적으로 바꾼 UpdateOrderInput 타입을 만드세요.

// TODO:
type UpdateOrderInput = Partial<Order>;

// 테스트 (에러 없이 동작해야 함)
const patch: UpdateOrderInput = {
  status: "confirmed", // 일부 필드만 전달해도 OK
};

// ================================================================
// 문제 4. Required + NonNullable 조합
// ================================================================
// 배송(shipping) 상태가 되려면 shippingAddress와 paymentMethod가
// 반드시 존재해야 합니다(null 불가).
//
// Order를 기반으로, shippingAddress와 paymentMethod가
// null을 허용하지 않는 ShippableOrder 타입을 만드세요.
//
// 힌트: Omit으로 해당 필드를 제거한 뒤, 직접 다시 선언하거나
//       커스텀 유틸을 활용해도 됩니다.

// TODO:
type ShippableOrder = Omit<Order, "paymentMethod" | "shippingAddress"> & {
  paymentMethod: NonNullable<Order["paymentMethod"]>;
  shippingAddress: NonNullable<Order["shippingAddress"]>;
};

// 테스트 (에러 없이 동작해야 함)
const readyToShip: ShippableOrder = {
  id: "ORD-002",
  customer: {} as Customer,
  products: [],
  status: "shipping",
  paymentMethod: "card", // null 불가
  totalAmount: 99000,
  shippingAddress: "부산시 해운대구", // null 불가
  createdAt: new Date(),
  updatedAt: null,
  memo: null,
};

// 아래는 에러가 발생해야 함
/*
const invalidShip: ShippableOrder = {
  ...readyToShip,
  shippingAddress: null, // ❌ null 불가
};
*/

// ================================================================
// 문제 5. Record
// ================================================================
// 각 주문 상태별로 주문 ID 배열을 관리하는 맵이 필요합니다.
// OrderStatus를 키, string[] 을 값으로 하는 OrderStatusMap 타입을 만드세요.

// TODO:
type OrderStatusMap = Record<OrderStatus, string[]>;

// 테스트 (에러 없이 동작해야 함)
const statusBoard: OrderStatusMap = {
  pending: ["ORD-001", "ORD-002"],
  confirmed: ["ORD-003"],
  shipping: [],
  delivered: ["ORD-004"],
  cancelled: [],
};

// ================================================================
// 문제 6. Exclude
// ================================================================
// 결제가 완료된 주문의 paymentMethod는 null이 될 수 없습니다.
// PaymentMethod에서 null을 제거한 ValidPaymentMethod 타입을 만드세요.

// TODO:
type ValidPaymentMethod = Exclude<PaymentMethod, null>;

// 테스트 (에러 없이 동작해야 함)
const method: ValidPaymentMethod = "kakaopay";

// 아래는 에러가 발생해야 함
/*
const invalid: ValidPaymentMethod = null; // ❌
*/

// ================================================================
// 문제 7. Readonly
// ================================================================
// 배송 완료(delivered)된 주문은 어떤 필드도 수정할 수 없어야 합니다.
// Order를 기반으로 DeliveredOrder 타입을 만드세요.

// TODO:
type DeliveredOrder = Readonly<Order>;

// 테스트: 아래는 에러가 발생해야 함
/*
const done: DeliveredOrder = { ...readyToShip, status: "delivered" };
done.status = "cancelled"; // ❌ 수정 불가
*/

// ================================================================
// 문제 8. 커스텀 Mapped Type — MakeRequired<T, K>
// ================================================================
// T 타입에서 K로 지정한 키들만 Required(+ NonNullable)로 바꾸고
// 나머지는 그대로 유지하는 유틸리티 타입 MakeRequired<T, K>를 구현하세요.
//
// 힌트: Omit, Pick, Required 를 조합하세요.

// TODO:
type MakeRequired<T, K extends keyof T> = Omit<T, K> &
  Required<{ [P in K]: NonNullable<T[P]> }>;

// 이를 이용해 Order에서 memo, shippingAddress만 필수로 바꾸세요.
// TODO:
type OrderWithRequiredMemo = MakeRequired<Order, "memo" | "shippingAddress">;

// 테스트 (에러 없이 동작해야 함)
const noted: OrderWithRequiredMemo = {
  id: "ORD-005",
  customer: {} as Customer,
  products: [],
  status: "confirmed",
  paymentMethod: "card",
  totalAmount: 30000,
  shippingAddress: "서울시 마포구", // 필수, null 불가
  createdAt: new Date(),
  updatedAt: null,
  memo: "문 앞에 놓아주세요", // 필수, null 불가
};

// 아래는 에러가 발생해야 함
/*
const noMemo: OrderWithRequiredMemo = {
  ...noted,
  memo: null, // ❌ 필수 필드
};
*/

// ================================================================
// 문제 9. ReturnType 응용
// ================================================================
// 아래 함수 fetchOrderDetails의 반환 타입을 ReturnType으로 추출해
// OrderDetailResult 타입을 만드세요.
// 그 타입을 이용해 변수 detailCache를 선언하세요.

function fetchOrderDetails(id: string) {
  return {
    order: {} as Order,
    relatedOrders: [] as OrderSummary[],
    isEditable: true,
    fetchedAt: new Date(),
  };
}

// TODO:
type OrderDetailResult = ReturnType<typeof fetchOrderDetails>;

const detailCache: OrderDetailResult = {
  order: {} as Order,
  relatedOrders: [] as OrderSummary[],
  isEditable: true,
  fetchedAt: new Date(),
};

// TODO: OrderDetailResult 타입으로 detailCache 변수를 선언하세요.
// const detailCache: OrderDetailResult = ...

// ================================================================
// 문제 10. 복합 응용 — 배송 가능한 고객
// ================================================================
// 주문을 배송하려면 고객의 phone과 address가 반드시 있어야 합니다.
// Customer에서 phone, address가 null이 아닌 VerifiedCustomer 타입을 만드세요.
//
// 그런 다음, ShippableOrder의 customer 필드가 VerifiedCustomer인
// FinalOrder 타입을 만드세요.
// (힌트: Omit<ShippableOrder, "customer"> 와 교차 타입을 활용하세요)

// TODO:
type VerifiedCustomer = MakeRequired<Customer, "phone" | "address">;

// TODO:
type FinalOrder = Omit<ShippableOrder, "customer"> & {
  customer: VerifiedCustomer;
};

// 테스트 (에러 없이 동작해야 함)
const final: FinalOrder = {
  ...readyToShip,
  customer: {
    id: "C-001",
    name: "홍길동",
    email: "hong@example.com",
    phone: "010-1234-5678", // null 불가
    address: "서울시 강남구", // null 불가
    grade: "gold",
  },
};
