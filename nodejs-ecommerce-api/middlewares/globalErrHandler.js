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

//404 Handler
export const notFound = (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} Not Found`);
    next(err);
}