type Props2 = {
    id: number;
    name: string;
    isVisible: boolean;
    active: boolean;
  };

  //문제
  type OmitByValue<T, V> = Omit<T, {
    [K in keyof T]: T[K] extends V ? K : never
  }[keyof T]>;
  //[keyof T]가 유니온 키 추출 부분
  
  type NoBooleans = OmitByValue<Props2, boolean>;
  /*
  {
    id: number;
    name: string;
  }
  */
  