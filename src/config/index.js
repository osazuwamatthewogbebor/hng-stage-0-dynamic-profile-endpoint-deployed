import dotenv from 'dotenv';

dotenv.config();

const config = {
    EMAIL: process.env.EMAIL,
    NAME: process.env.NAME,
    STACK: process.env.STACK,
    CAT_FACTS_API_ENDPOINT: process.env.CAT_FACTS_API_ENDPOINT || "https://catfact.ninja/fact",
    PORT: Number(process.env.PORT) || 3000,
    CAT_FACTS_API_TIMEOUT: Number(process.env.CAT_FACTS_API_TIMEOUT) || 5000   
};

if (!config.EMAIL || !config.NAME || !config.STACK) {
    console.error("FATAL ERROR: User profile environment variables (EMAIL, NAME, STACK) must be set.");
    process.exit(1);
};

export default config;

