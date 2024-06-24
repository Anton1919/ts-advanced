// ### Question

// If we have a type which is a wrapped type like Promise, how we can get the type which is inside the wrapped type?

// For example: if we have `Promise<ExampleType>` how to get ExampleType?

type ExampleType = Promise<string>

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
    ? U extends PromiseLike<any>
        ? MyAwaited<U>
        : U
    : never;

type Result1 = MyAwaited<ExampleType>

// Example with function:
type IData = {
    title: string
}

async function getData(): Promise<IData[]> {
    return [{ title: 'Data' }];
}

type R = Awaited<ReturnType<typeof getData>>; // type R = IData[], а без awaited был бы тип такой type R = Promise<IData[]>

