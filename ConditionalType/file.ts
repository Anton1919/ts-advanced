///////// https://www.youtube.com/watch?v=SpQDK74vLKo
///////// ссылка на урок
interface User {
    id: number;
}

interface Message {
    id: string;
}

function f<T extends { id: any }>(obj: T): T extends User ? number : string {
    return obj.id;
}

const f1 = f({} as User);
const f2 = f({} as Message);
/////////
/////////

/////////
/////////
type Filter<T, U> = T extends U ? never : T
type Test11 = Filter<'a' | 'b' | 'c', 'b'>
/////////
/////////

/////////
/////////
type GetStatus<T> = T extends object ? T extends { status: string } ? T['status'] : null : null
type TestStatus = GetStatus<{ status: 'One' }>

///////////////////////////
/////////  INFER /////////
///////////////////////////

type TryInfer<T extends object> = T extends infer R ? R : never
type ResInfer = TryInfer<{ a: '1', b: '2' }>

// а если мы хотим вытащить значения то:
type TryValueInfer<T extends object> = T extends infer R ? R[keyof R] : never
type ResValueInfer = TryValueInfer<{ a: '1', b: '2' }>

//////////////////////////
//////////////////////////
function test() {
    return {
        name: 'Anton',
    };
}

// аналог ReturnType
type FnRes<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type Re = FnRes<typeof test>
type Re2 = ReturnType<typeof test>

//////////////////////////
//////////////////////////
type GetStatusInfer<T extends object> = T extends infer R ? R : never
type TestStatusInfer = GetStatusInfer<{ status: 'One' }>

type GetStatusValueInfer<T> = T extends infer U ? U extends { status: any } ? U['status'] : null : null
type TestStatusValueInfer = GetStatusValueInfer<{ status: 'Two' }>