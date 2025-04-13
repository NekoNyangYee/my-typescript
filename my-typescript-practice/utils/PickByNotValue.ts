type Props3 = {
    id: number;
    name: string;
    active: boolean;
    meta: string;
};
  
//문제
type PickByNotValue<T, V> = Omit<T, {
    [K in keyof T]: T[K] extends V ? K : never;
}[keyof T]>;

type NotBooleans = PickByNotValue<Props3, boolean>;
  /*
  {
    id: number;
    name: string;
    meta: string;
  }
  */
  