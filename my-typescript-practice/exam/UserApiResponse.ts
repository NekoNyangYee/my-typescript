type ApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: { code: number; message: string };
    };

/// 이렇게 만들 수 있도록 ApiResponse<T>를 정의하세요.
type UserApiResponse = ApiResponse<{ id: string; name: string }>;
type ProductApiResponse = ApiResponse<{ sku: string; price: number }>;
type CartApiResponse = ApiResponse<{
  items: { sku: string; quantity: number }[];
}>;
