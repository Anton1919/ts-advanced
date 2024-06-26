function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(yearOrName: number | string, name?: string): string {
    if (typeof yearOrName === 'string') {
        return `Hi ${yearOrName}! Happy New Year!`;
    } else if (typeof name === 'string') {
        return `Hi ${name}! Happy New Year ${yearOrName}!`;
    } else {
        throw new Error('Invalid arguments');
    }
}

// Примеры вызова функции:
console.log(newYearCongratulate('John')); // Hi John! Happy New Year!
console.log(newYearCongratulate(2023, 'Mila')); // Hi Mila! Happy New Year 2023!


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

function newYearCongratulate2<T, U>(yearOrName?: T, name?: U): string {
    if (typeof yearOrName === 'string') {
        return `Hi ${yearOrName}! Happy New Year!`;
    } else if (typeof yearOrName === 'number' && typeof name === 'string') {
        return `Hi ${name}! Happy New Year ${yearOrName}!`;
    } else {
        throw new Error('Invalid arguments');
    }
}

// Примеры вызова функции:
console.log(newYearCongratulate2('John')); // Hi John! Happy New Year!
console.log(newYearCongratulate2(2023, 'Mila')); // Hi Mila! Happy New Year 2023!
