type Config = {
    apiKey: string;
    endpoint: string;
    retries: number;
    timeout: number;
};

type CustomizeConfig<T, R extends keyof T, O extends keyof T> = Readonly<Pick<T, R>> 
                                                                & Omit<T, R | O>
                                                                & Partial<Pick<T, O>>;  