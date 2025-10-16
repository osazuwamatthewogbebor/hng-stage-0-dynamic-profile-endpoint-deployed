import express from 'express';
import { config } from './config/index.js';
import morgan from 'morgan';
import { getCatFact } from './utils/catFacts.js';
import errorHandler from './middleware/errorHandler.js';
import corsHeader from './middleware/corsHeader.js';
import meRouteHandler from './controllers/meRouteHandler.js';

const app = express();
const port = config.PORT;

// Request logger
app.use(morgan('tiny'));

// Cors setup
app.use(corsHeader);


// GET /me endpoint
app.get('/me', meRouteHandler);

// Globalerror handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});