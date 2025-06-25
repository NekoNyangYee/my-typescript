interface Product {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
}

// Product 타입에서 'id'와 'createdAt' 속성을 제외한 타입을 만드세요.
type CreateProductDTO = Omit<Product, "id" | "createdAt">;
// 테스트 (이 코드가 에러 없이 동작해야 합니다)
const newProductData: CreateProductDTO = {
  name: "고급 키보드",
  price: 180000,
};

// 이 코드는 에러가 발생해야 합니다.
/*
const invalidProductData: CreateProductDTO = {
  id: 'p-12345',
  name: '기계식 마우스',
  price: 85000
};
*/
