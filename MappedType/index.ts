// Позволяет итерироваться по типам
type AddNull<T> = {
    [K in keyof T]: T[K] | null; // итерация по ключам как будто циклом
};

type MyObj = {
    a: number;
    b: string;
};

type Test1 = AddNull<MyObj>; //  a: number | null ,  b: string | null
type Test3 = AddNull<[1, number, 'asdf', undefined]>; //  [1 | null, number | null, "asdf" | null, null | undefined]
