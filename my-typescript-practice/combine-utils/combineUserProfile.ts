type UserProfile = {
    userId: string;
    username: string;
    email: string;
    phone: string;
    address: string;
};

type OptionalOnly<UserProfileType, PartialType extends keyof UserProfileType>
                = Partial<Pick<UserProfileType, PartialType>>
                & Omit<UserProfileType, PartialType>;
  
type PartialContactUser = OptionalOnly<UserProfile, "email" | "phone">;