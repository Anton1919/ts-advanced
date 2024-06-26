type Unshift<T extends readonly any[], U> = [U, ...T]

type R2 = Unshift<[1, 2], 0>