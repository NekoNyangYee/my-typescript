type Props = {
    id: number;
    name: string;
    isVisible: boolean;
    active: boolean;
  };

  //문제
  type PickByValue<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never
  }[keyof T];
  
  type OnlyBooleans = PickByValue<Props, boolean>;
  /*
  {
    isVisible: boolean;
    active: boolean;
  }
  */
  