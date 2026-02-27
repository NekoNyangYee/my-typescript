export {};

// ================================================================
// 정답: 쇼핑몰 주문 관리 시스템
// ================================================================

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

// ── 문제 1 ───────────────────────────────────────────────────────
// Pick<Order, ...> 으로 필요한 4개 필드만 선택
type OrderSummary = Pick<Order, "id" | "status" | "totalAmount" | "createdAt">;

// ── 문제 2 ───────────────────────────────────────────────────────
// Omit<Order, ...> 으로 서버 자동 생성 필드 3개 제거
type CreateOrderInput = Omit<Order, "id" | "createdAt" | "updatedAt">;

// ── 문제 3 ───────────────────────────────────────────────────────
// Partial<Order> 로 모든 필드를 optional로 변환
type UpdateOrderInput = Partial<Order>;

// ── 문제 4 ───────────────────────────────────────────────────────
// Omit으로 null 가능 필드를 제거한 뒤, null이 아닌 타입으로 재선언
type ShippableOrder = Omit<Order, "shippingAddress" | "paymentMethod"> & {
  shippingAddress: string; // null 제거
  paymentMethod: Exclude<PaymentMethod, null>; // null 제거
};

// ── 문제 5 ───────────────────────────────────────────────────────
// Record<OrderStatus, string[]>
type OrderStatusMap = Record<OrderStatus, string[]>;

// ── 문제 6 ───────────────────────────────────────────────────────
// Exclude<PaymentMethod, null> 로 null 제거
type ValidPaymentMethod = Exclude<PaymentMethod, null>;

// ── 문제 7 ───────────────────────────────────────────────────────
// Readonly<Order> 로 모든 필드를 읽기 전용으로 변환
type DeliveredOrder = Readonly<Order>;

// ── 문제 8 ───────────────────────────────────────────────────────
// Omit으로 대상 키 제거 → Pick + Required로 대상 키를 필수+NonNull → 교차
type MakeRequired<T, K extends keyof T> = Omit<T, K> &
  Required<{ [P in K]: NonNullable<T[P]> }>;

type OrderWithRequiredMemo = MakeRequired<Order, "memo" | "shippingAddress">;

// ── 문제 9 ───────────────────────────────────────────────────────
// ReturnType으로 함수 반환 타입 추출
function fetchOrderDetails(id: string) {
  return {
    order: {} as Order,
    relatedOrders: [] as OrderSummary[],
    isEditable: true,
    fetchedAt: new Date(),
  };
}

type OrderDetailResult = ReturnType<typeof fetchOrderDetails>;

const detailCache: OrderDetailResult = {
  order: {} as Order,
  relatedOrders: [],
  isEditable: false,
  fetchedAt: new Date(),
};

// ── 문제 10 ──────────────────────────────────────────────────────
// MakeRequired(8번 유틸)로 phone, address를 필수+NonNull로 변환
type VerifiedCustomer = MakeRequired<Customer, "phone" | "address">;

// ShippableOrder의 customer를 VerifiedCustomer로 교체
type FinalOrder = Omit<ShippableOrder, "customer"> & {
  customer: VerifiedCustomer;
};
