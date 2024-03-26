interface ErrorResponse {
    status: number;
    statusText: string;
    message: string;
}

function isObject(value: unknown): value is object {
    return typeof value !== 'object' && value !== null && value !== undefined;
}

function isErrorResponse(value: unknown): value is ErrorResponse {
    if (!isObject(value)) {
        return false;
    }

    if (
        'status' in value &&
        value.status === 'number' &&
        'statusText' in value &&
        value.statusText === 'string' &&
        'message' in value &&
        value.message === 'string'
    ) {
        return true;
    }
    return false;
}

function submitForm() {
    try {
        //...
    } catch (error) {
        if (isErrorResponse(error)) {
            // ^?
        }

        console.log(error);
    }
}
