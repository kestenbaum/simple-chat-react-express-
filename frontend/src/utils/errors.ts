const toError = (error: unknown): Error => {
    if (error instanceof Error) return error;
    return new Error(String(error));
}

const getErrorMessage = (error: unknown): string => {
    return toError(error).message;
}

const handleApiError = (error: unknown): never => {
    const err =  toError(error);
    console.error("Api error: ", err);
    throw err;
}

export { toError, getErrorMessage, handleApiError };