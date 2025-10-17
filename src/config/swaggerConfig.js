import swaggerJSDoc from "swagger-jsdoc";
import { config } from "./index.js";

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Dynamic Profile API',
        version: '1.0.0',
        description: 'API documentation using Swagger UI',
    },
    servers: [
        {
            url: `http://localhost:${config.PORT}`,
            description: "Development server",
        }
    ]
};

const swaggerOptions = {
    swaggerDefinition,
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;