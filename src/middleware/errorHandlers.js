
export const route404Handler = (req, res, next) => {
    console.log(`404: ${req.method} ${req.originalUrl} not Found`);
    res.status(404).json({
        status: 'error',
        message: `Route not found: Cannot ${req.method} ${req.originalUrl}. Correct route is GET /me`
    })
};

export default (err, req, res, next) => {
    console.error(`Unhandled Server Error: ${err.stack || err.message}`);
    
    const errStatus = err.statusCode || 500;
    res.status(errStatus).json({
        status: 'error',
        message: 'An unexpected internal server error occurred.'
    });
};