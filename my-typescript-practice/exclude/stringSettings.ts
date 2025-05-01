type ServerConfig = {
    host: string;
    port: number;
    useSSL: boolean;
    apiKey: string;
};
  
  // 여기에 StringSettings 타입을 작성하세요
type StringKey<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T]; // ["host" | "port" | "useSSL" | "apiKey"] => "host" | never | never | "apiKey" // → "host" | "apiKey"

type StringSettings = Pick<ServerConfig, StringKey<ServerConfig>>;
  