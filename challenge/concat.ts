type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];

type Resultt = Concat<[1], [2]>

