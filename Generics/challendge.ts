//////////////////////
//////////////////////
function concat<T, U>(obj1: T, obj2: U): T & U {
    return {
        ...obj1,
        ...obj2,
    };
}

concat({ a: 1 }, { b: 2 });
//////////////////////
//////////////////////
function getValue<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getValue({ a: 1, b: 2 }, 'a');
//////////////////////
//////////////////////
function getKey<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
    const key = (Object.keys(obj) as Array<U>).find(k => obj[k] === value);

    return key || null;
}
getKey({ age: 12, name: 'Max' }, 'Max');
//////////////////////
//////////////////////
