interface ConvertData<I, O> {
    convert(input: I): O;
}

const parseData: ConvertData<string, number> = {
    convert: (input: string): number => {
        return JSON.parse(input);
    }
}

function convertFunction<I, O>(data: ConvertData<I, O>, input: I): O {
    return data.convert(input);
}

const json = '{"name": "Jhon", "age": 25}';
const parsingData = convertFunction(parseData, json);

console.log(parsingData);