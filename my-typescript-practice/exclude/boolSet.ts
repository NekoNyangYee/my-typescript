
type Settings = {
    theme: string;
    notifications: boolean;
    autoSave: boolean;
    fontSize: number;
  };
  
  // 여기에 NoBooleanSettings 타입을 작성하세요
  type BooleanKeys<T> = {
    [K in keyof T]: T[K] extends boolean ? K : never
  }[keyof T];
  
  type NoBooleanSettings = Omit<Settings, BooleanKeys<Settings>>;
    