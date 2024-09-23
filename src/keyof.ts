interface PersonInfo {
    id: number;
    name: string;
    email: string;
};

function updatePersonInfo<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    return {
        ...obj,
        [key]: value
    }
}

const userInfos: PersonInfo = {
    id: 1,
    name: "thkim",
    email: "a1234@gmail.com"
};

const updatedUserInfos = updatePersonInfo(userInfos, "email", "bbb12345@gmail.com");

console.log(updatedUserInfos);

// 만약 제네릭이 없었다면?
/*
function updatePersonInfo(obj: PersonInfo, key: "id" | "name" | "email", value: PersonInfo["id"] | PersonInfo["name"] | PersonInfo["email"]): PersonInfo {
    return {
        ...obj,
        [key]: value
    }
}
*/