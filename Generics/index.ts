// /*
//     Нужно типизировать интерфейс Calculator, так, чтобы вызовы `calculator` были
//     с ошибками компиляции или без них в зависимости от переданных параметров.
//     Типы SumAction, LengthAction, ZeroAction также можно менять.
// */

// type SumAction = (...params: any) => any;
// type LengthAction = (...params: any) => any;
// type ZeroAction = (...params: any) => any;
// type LogAction = (...params: any) => (...params: any) => any;

// interface Calculator {
//     (command: 'sum'): SumAction;
//     (command: 'length'): LengthAction;
//     (command: 'zero'): ZeroAction;
//     (command: 'log'): LogAction;
// }

// /* Этот код трогать не нужно */
// const calculator: Calculator = (command: string): any => {
//     switch (command) {
//         case 'sum':
//             return (a: any, b: any) => a + b;
//         case 'length':
//             return (a: any) => a.length;
//         case 'zero':
//             return (a: any) => (typeof a === 'string' ? a.length !== 0 : a !== 0);
//         case 'log':
//             return (b: any) => (a: any) => Math.log(a) / Math.log(b);
//     }
// };
// /* --- */

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
    Даны несколько заготовленных type alias. При помощи них "собран" тип Student.
    Соберите типы Teacher и Director из имеющихся типов. Для проверки используйте
    переменные в самом низу. Можно определять новые типы.
    
    Teacher имеет идентификатор, имя, уровень скила и словарь из его курсов.
    В словаре курсов Teacher-а по ключу id курса лежит объект с идентификатором курса,
    названием и ролью учителя.

    Director имеет идентификатор, имя, словарь студентов и словарь учителей. Словарь
    студентов по id студента содержит объект с идентификатором и именем студента.
    Словарь учителей по id учителя содержит объект с идентификатором, именем, уровнем
    и оценкой учителя
*/
// type User = {
//     id: string;
//     name: string;
// };

// type Course = {
//     id: number;
//     title: string;
// };

// type WithRate = {
//     rate: 1 | 2 | 3 | 4 | 5;
// };

// type WithStudentRole = {
//     role: 'student';
// };

// type WithTeacherRole = {
//     role: 'teacher';
// };

// type WithLevel = {
//     level: 'junior' | 'middle' | 'senior';
// };
// /* --- */

// type StudentCourse = Course & WithStudentRole & WithRate & WithLevel;
// type Student = User & { courses: { [id: number]: StudentCourse } };

// type Teacher = User & WithLevel & { courses: { [id: number]: Course & WithTeacherRole } };

// type StudentDict = { [id: string]: User };
// type TeacherDict = { [id: string]: User & WithLevel & WithRate };
// type Director = User & { students: StudentDict } & { teachers: TeacherDict };

// /*--  Проверка  --*/
// const s1: Student = {
//     id: 's1',
//     name: 's1',
//     courses: {
//         [1]: {
//             id: 1,
//             title: 'First',
//             rate: 5,
//             role: 'student',
//             level: 'middle',
//         },
//     },
// };

// const t1: Teacher = {
//     id: 't1',
//     name: 't1',
//     level: 'junior',
//     courses: {
//         [5]: {
//             id: 5,
//             title: 'Fifth',
//             role: 'teacher',
//         },
//         [1]: {
//             ...s1.courses[1],
//             role: 'teacher',
//         },
//     },
// };

// const d1: Director = {
//     id: 'd1',
//     name: 'd1',
//     students: {
//         ['s1']: s1,
//         ['s2']: {
//             id: 's2',
//             name: 's2',
//         },
//     },
//     teachers: {
//         ['t1']: {
//             ...t1,
//             rate: 3,
//         },
//         ['t2']: {
//             id: 't2',
//             name: 't2',
//             level: 'senior',
//             rate: 5,
//         },
//     },
// };

/* --- */

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Напишите функцию, которая принимает массив и сортирует его. Используйте дженерики для обеспечения того, 
чтобы функция могла работать с различными типами элементов массива, поддерживающими операцию сравнения.
*/

// const x = <T>(array: T[]): T[] => {
//     const copiedArray = [...array];
//     return copiedArray.sort((a, b) => (a < b ? -1 : 1));
// };

// x(['1', '2', '3']);
// x([1, 2, 3]);
