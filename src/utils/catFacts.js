import axios from "axios";
import { config } from "../config/index.js"


export const getCatFact = async () => {
    try {
        const response = await axios.get(
            config.CAT_FACTS_API_ENDPOINT, {
            timeout: config.CAT_FACTS_API_TIMEOUT
        });

        if (response.data && response.data.fact) {
            return response.data.fact;
        } else {
            console.error("External API returned unexpected data structure.");
            return "Failed to fetch cat fact: External API structure error.";
        };

    } catch (error) {
        if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
            console.error("Cat Facts API Timeout:", error.message);
        } else {
            console.error("Error fetching cat fact (Network/Unknown):", error.message);
        };

        return "Failed to retrieve a dynamic cat fact due to a sserrvice error/timeout.";  
    };
};
