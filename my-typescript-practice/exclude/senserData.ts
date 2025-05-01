type SensorData = {
    temperature: number;
    humidity: number;
    label: string;
    active: boolean;
};

type NumberKey<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];
  
// 여기에 NumericSensorData 타입을 정의하세요
type NumericSensorData = Pick<SensorData, NumberKey<SensorData>>;
  