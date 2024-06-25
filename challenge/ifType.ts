/*
* Implement the util type IfType<C, T, F> which accepts condition C,
* a truthy value T, and a falsy value F.
* C is expected to be either true or false while T and F can be any type.
*/

type IfType<C, T, F> = C extends true ? T : F

type A = IfType<true, 'a', 'b'>  // expected to be 'a'
type B = IfType<false, 'a', 'b'> // expected to be 'b'