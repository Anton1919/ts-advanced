type Push<T extends readonly any[], U> = [...T, U]

type R1 = Push<[1, 2], '3'> // [1, 2, '3']