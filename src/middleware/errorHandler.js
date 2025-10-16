export default (err, req, res) => {
    console.error(`Unjandled Server Error: ${err.stack || err.message}`);

    res.status(500).json({
        status: 'error',
        message: 'An unexpected internal server error occurred.'
    });
};