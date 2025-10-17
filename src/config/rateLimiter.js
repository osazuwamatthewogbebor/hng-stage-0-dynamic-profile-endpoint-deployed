import rateLimit from 'express-rate-limit';

export const ratelimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: {
        error: 'Too many requests from this IP address',
        retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
});