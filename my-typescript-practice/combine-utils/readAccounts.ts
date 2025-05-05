type Account = {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
};

type SafeAccount = Readonly<Pick<Account, "id" | "createdAt">> & Omit<Account, "id" | "createdAt">;
  