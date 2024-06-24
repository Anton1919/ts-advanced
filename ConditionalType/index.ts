// Аналог цикла в js

// 1.
type IsNumber<T> = T extends number ? true : false;
type Test = IsNumber<string>; // false

// 2. Type Destributios - позволяет отфильтровать по значению для каждого  элемента <Т>
type Union = 'test' | number | {} | 'qwerty';
type GetString<T> = T extends string ? T : never;
type Test2 = GetString<Union>;

// 3.
