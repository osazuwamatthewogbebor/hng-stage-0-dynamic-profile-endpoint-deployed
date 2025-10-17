import dotenv from 'dotenv';

dotenv.config();

const config = {
    EMAIL: process.env.EMAIL || "osazuwamatthewogbebor@gmail.com",
    NAME: process.env.NAME || "Osazuwa Matthew Ogbebor",
    STACK: process.env.STACK || "Node.js/Express",
    CAT_FACTS_API_ENDPOINT: process.env.CAT_FACTS_API_ENDPOINT || "https://catfact.ninja/fact",
    CAT_FACTS_API_TIMEOUT: Number(process.env.CAT_FACTS_API_TIMEOUT) || 10000,
    PORT: Number(process.env.PORT) || 3000,
};

if (!config.EMAIL || !config.NAME || !config.STACK) {
    console.error("FATAL ERROR: User profile environment variables (EMAIL, NAME, STACK) must be set.");
    process.exit(1);
};

export { config };

