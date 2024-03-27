// interface ErrorResponse {
//     status: number;
//     statusText: string;
//     message: string;
// }

// function isObject(value: unknown): value is object {
//     return typeof value !== 'object' && value !== null && value !== undefined;
// }

// function isErrorResponse(value: unknown): value is ErrorResponse {
//     if (!isObject(value)) {
//         return false;
//     }

//     if (
//         'status' in value &&
//         value.status === 'number' &&
//         'statusText' in value &&
//         value.statusText === 'string' &&
//         'message' in value &&
//         value.message === 'string'
//     ) {
//         return true;
//     }
//     return false;
// }

// function submitForm() {
//     try {
//         //...
//     } catch (error) {
//         if (isErrorResponse(error)) {
//             // ^?
//         }

//         console.log(error);
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface ApiError {
    statusCode: number;
    error: string;
    message: string;
}

interface NetworkError {
    message: string;
}

function isObject(value: unknown): value is object {
    return typeof value === 'object' && typeof value !== 'undefined' && value !== null;
}

function isApiError(error: unknown): error is ApiError {
    // Реализуйте проверку на соответствие объекта интерфейсу ApiError
    // if (!isObject(error)) {
    //     return false;
    // }
    // if (
    //     'statusCode' in error &&
    //     error.statusCode === 'number' &&
    //     'error' in error &&
    //     error.error === 'string' &&
    //     'message' in error &&
    //     error.message === 'string'
    // ) {
    //     return true;
    // }
    // return false;

    return (
        isObject(error) &&
        typeof (error as ApiError).statusCode === 'number' &&
        typeof (error as ApiError).error === 'string' &&
        typeof (error as ApiError).message === 'string'
    );
}

function isNetworkError(error: unknown): error is NetworkError {
    // Реализуйте проверку на соответствие объекта интерфейсу NetworkError
    // if (!isObject(error)) {
    //     return false;
    // }

    // if ('message' in error && error.message === 'string') {
    //     return true;
    // }

    // return false;

    return isObject(error) && typeof (error as NetworkError).message === 'string';
}

function handleError(error: unknown): void {
    if (isApiError(error)) {
        console.log('ApiError:', error.message);
    }
    if (isNetworkError(error)) {
        console.log('NetworkError:', error.message);
    }
    console.error('An unexpected error occurred:', error);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Вам нужно написать функцию isPoint, которая будет являться типовым стражом (type guard) и проверять, 
что переданный объект соответствует интерфейсу Point. Ваша функция должна вернуть true, если объект является точкой, 
и false в противном случае.
После этого напишите функцию calculateDistance, которая принимает две точки и вычисляет расстояние между ними по формуле Евклида. 
Убедитесь, что ваша функция корректно работает с объектами, которые соответствуют интерфейсу Point, и генерирует ошибку, 
если хотя бы один из аргументов не является точкой.
*/

// interface Point {
//     x: number;
//     y: number;
// }

// function isPointObject(point: unknown): boolean {
//     return typeof point !== 'object' && typeof point !== 'undefined' && point !== null;
// }

// function isPoint(point: unknown): point is Point {
//     return (
//         isPointObject(point) &&
//         typeof (point as Point).x === 'number' &&
//         typeof (point as Point).y === 'number'
//     );
// }

// function handlePointError(value: unknown) {
//     if (!isPoint(value)) {
//         console.log('Point Error');
//     }
//     console.error('An unexpected error occurred:');
// }

// function calculateDistance(point: Point) {
//     try {
//         if (isPoint(point)) {
//             const distance = Math.sqrt(point.x ** 2 + point.y ** 2);
//             console.log('Distance from the origin:', distance);
//         }
//     } catch (error) {
//         handlePointError(point);
//     }
// }

// calculateDistance({ x: 2, y: 5 });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
