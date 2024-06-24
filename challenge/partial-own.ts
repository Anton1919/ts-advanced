type MyPartial<T> = {
    [K in keyof T]?: T[K];
};

type TestPartial = MyPartial<{ a: number; b: string }>; // a?: number | undefined; b?: string | undefined;

// Как удалять optional из значений

type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};

type TestReq = MyRequired<{ a?: number; b?: string }>; // a: number; b: string;
