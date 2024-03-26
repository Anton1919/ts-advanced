// Аналог тайп гардов но асерты выкидывают ошибку, а гарды булево значение

interface Options {
    a: number;
    b: string;
}

function assertOptions(value: unknown): asserts value is Options {
    if (value === null || typeof value !== 'object') {
        throw new Error('options must be of type object');
    }

    if (!('a' in value) || typeof value.a !== 'number') {
        throw new Error('options "a" must be of type number');
    }

    if (!('b' in value) || value.b !== 'string') {
        throw new Error('options "b" must be of type string');
    }
}

function doSomething(value: unknown) {
    assertOptions(value);

    value;
}
