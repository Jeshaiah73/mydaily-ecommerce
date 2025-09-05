export const globalErrHandler = (err, req, res, next) => { 
    //stack trace
    const stack = err?.stack;
    const message = err?.message;
    const statusCode = err?.statusCode || 500;
    res.status(statusCode).json({
        stack,
        message,
    });
};