# Dynamic Profile API

A RESTful API built with **Express.js API** that returns a **developer profile**, **current timestamp**, and a **random cat fact** from an external API.  
This project demonstrates key backend skills such as working with external APIs, structured JSON responses, Swagger documentation, and rate limiting.
---

## Features

* Returns developer profile details (name, email, stack)  
* Fetches a random **cat fact** from an external API (with fallback support)  
* Includes **rate limiting** to prevent abuse  
* Automatically documents endpoints via **Swagger UI**  
* Organized with **Express Router** and modular architecture  
* Dynamic timestamp generation (UTC ISO 8601 format)
* Cat facts integration from https://catfact.ninja/fact
* Error handling for external API failures
* Timeout handling for API requests (10 seconds)
* CORS enabled for cross-origin requests
* Rate limiting (100 requests per 15 minutes per IP)
* Request logging for debugging
* GET /: Endpoint with API and endpoint information
* GET /me: Endpoint with profile, dynamic cat facts and current timestamp
* GET /health: Endpoint for API health check and current timestamp
* GET /docs: Endpoint for Swagger Documentation

---

##  Project Structure

```

project/
├── src/
│   ├── routes/
│   │   └── meRoute.js
│   │   └── healthRoute.js
│   ├── controllers/
│   │   └── meRouteController.js
│   │   └── healthController.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── config/
│   │   └── index.js
│   │   └── rateLimiter.js
│   │   └── swaggerConfig.js
│   ├── utils/
│   │   └── catFacts.js
│   │   └── getTimeISO.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

````

---

## Dependencies
### Stack: Node.js/Express

| Package                | Purpose                     |
| ---------------------- | --------------------------- |
| **express**            | Web framework               |
| **axios**              | Fetch external cat facts    |
| **express-rate-limit** | Prevent API abuse           |
| **swagger-jsdoc**      | Auto-generate Swagger specs |
| **swagger-ui-express** | Serve Swagger UI            |
| **dotenv**             | Environment variables       |
| **helmet**             | Security                    |
| **morgan**             | Request logging             |
| **cors**               | Cross Origin                |


---

## ⚙️ Installation & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/osazuwamatthewogbebor/hng-stage-0-dynamic-profile-endpoint-deployed.git
cd hng-stage-0-dynamic-profile-endpoint-deployed
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the credentials in .env.example. Replace with yours:

```bash
MY_EMAIL="your-email@example.com"
MY_NAME="Your Name For The Challenge"
MY_STACK="Your Tech Stack"

CAT_FACT_API_URL="https://catfact.ninja/fact"
PORT=3000
CAT_FACTS_API_TIMEOUT="API TIMEOUT"
```

### 4. Start the server

```bash
npm run dev
```

The API will run by default on:

```
http://localhost:3000
```

---

## API Endpoints

### **GET /**

Retrieves:

* Message
* Health endpoint
* Dynamic profile endpoint
* Documentation endpoint

#### Example Response:

```json
{
  "message": "HNG Stage-0 Backend Task - Dynamic Profile Endpoint",
  "healthCheck": "You can always go to /health endpoint to check API health status",
  "dynamic profile": "Go to /me endpoint to get profile with dynamic cat facts",
  "documentation": "Go to /docs endpoint for Swagger docs and API usage guidelines"
}
```

#### Error Response (500)

```json
{
  "status": "error",
  "message": "An unexpected internal server error occurred."
}
```

### **GET /me**

Retrieves:

* Status
* Developer profile
* Current UTC timestamp (ISO 8601 format)
* A random cat fact from the [Cat Fact API](https://catfact.ninja/fact)

#### Example Response:

```json
{
  "status": "success",
  "user": {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "stack": "Python/FastAPI"
  },
  "timestamp": "2025-10-17T11:45:30.123Z",
  "fact": "Cats sleep 16 to 18 hours per day."
}
```

#### Error Response (500)

```json
{
  "status": "error",
  "message": "An unexpected internal server error occurred."
}
```

### **GET /health**

Retrieves:

* Status
* Health message
* Current UTC timestamp (ISO 8601 format)

#### Example Response:

```json
{
  "status": "success",
  "message": "API is running"
  "timestamp": "2025-10-17T11:45:30.123Z",
}
```

#### Error Response (500)

```json
{
  "status": "error",
  "message": "An unexpected internal server error occurred."
}
```

### GET /docs
Opens Swagger documentation

---

## Rate Limiting

To prevent abuse, the API uses **rate limiting** middleware.

By default, the API allows 100 requests per 15 minutes per IP.
If you exceed this limit, you’ll receive a 429 Too Many Requests response.

| Configuration | Value (example) |
| ------------- | --------------- |
| Window        | 15 minutes      |
| Max Requests  | 100             |

If a user exceeds the limit:

```json
{
  "message": "Too many requests from this IP, please try again later."
}
```

You can adjust this in your rate limiter in config folder:
```
windowMs: 15 * 60 * 1000, // 15 minutes
max: 100, // requests
---
```

## Swagger Documentation

This project uses **Swagger UI** (via `swagger-jsdoc` and `swagger-ui-express`) for live, interactive documentation.

### Access Swagger UI:

Once the server is running, open your browser and go to:

```
http://localhost:3000/docs
```
You can interact with the /me route directly from your browser.

You’ll see the `/me` route fully documented — including request, response schemas, and example outputs.

---

## Author

**Osazuwa Ogbebor**

HNG Internship: Backend Development Stage 0 Task

Project: Dynamic Profile API

---

## License
MIT License © 2025 Osazuwa Ogbebor
