type MapValueToString<T> = {
    [K in keyof T]: string;
};

function convertValue<T extends Record<string, any>>(obj: T): MapValueToString<T> {
    const result: any = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = String(obj[key]);
        }
    }
    return result;
}

interface Person {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
}

const person: Person = {
    id: 1,
    name: "th kim",
    age: 23,
    isActive: true,
};

const personString = convertValue(person);
console.log(personString);