type Profile = {
    id: string;
    nickname: string;
    bio: string;
    updatedAt: Date;
};

type FlexibleProfile = Readonly<Pick<Profile, "id" | "updatedAt">>
                    & Omit<Profile,  "id" | "updatedAt" | "bio">
                    & Partial<Pick<Profile, "bio">>;

//type FlexibleProfile = {
//   readonly id: string;
//   readonly updatedAt: Date;
//   nickname: string;
//   bio?: string;
// }
