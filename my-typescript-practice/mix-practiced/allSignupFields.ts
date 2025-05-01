type AllSignupFields = {
    username: string;
    email: string;
    password: string;
    nickname?: string;
    marketingOptIn?: boolean;
};

type SignupForm = 
  Required<Pick<AllSignupFields, "username" | "email" | "password">> &
  Partial<Pick<AllSignupFields, "nickname" | "marketingOptIn">>;
