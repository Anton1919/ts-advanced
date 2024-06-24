// Позволяет подхватить самостоятельно тип на этапе итерации

type GetValue<T extends any[]> = T extends (infer Item)[] ? Item : never;

// в этом случае тайпскрипт сам поймет какой тип мы передаем

type Value1 = GetValue<number[]>;
type Value = GetValue<(number | string)[]>;

// Пример с ReturnType и Parameters

type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer Return // здесь мы говорим подхватить возвращаемое значение
    ? Return
    : never;

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Args) => any
    ? Args
    : never;

type TestReturnType = MyReturnType<() => number>;
type TestParametersType = MyParameters<(...args: string[]) => string>;
