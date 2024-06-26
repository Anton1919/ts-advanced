const foo1 = (arg1: string, arg2: number): any => {
};

type MyParameters1<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

type FunctionParamsType = MyParameters1<typeof foo1> // [arg1: string, arg2: number]