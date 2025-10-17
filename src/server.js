import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import { config } from './config/index.js';
import { ratelimiter } from './config/rateLimiter.js';

import errorHandler, { route404Handler } from './middleware/errorHandlers.js';
import meRoute from "./routes/meRoute.js";
import healthRoute from "./routes/healthRoute.js";

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './config/swaggerConfig.js';


const app = express();
const port = config.PORT;

app.use(helmet());
app.use(morgan('combined'));

app.use(cors({
    origin: '*',
    methods: 'GET',
    credentials: true
}));


// Rate limiter
app.use(ratelimiter);


// Endpoints

    // API health 
app.use('/health', healthRoute);

    // GET /me endpoint
app.use('/me', meRoute);

    // API docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Error handlers
    
    // 404 handler
app.use(route404Handler);

    // Globalerror handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});