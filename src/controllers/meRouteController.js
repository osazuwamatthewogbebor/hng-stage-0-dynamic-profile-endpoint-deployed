import { config } from "../config/index.js";
import { getCatFact } from "../utils/catFacts.js";
import getTimeISO from "../utils/getTimeISO.js";


export default async (req, res) => {
    const catFact = await getCatFact();
    const curentTimeStamp = getTimeISO;

    const profile = {
        status: "success",
        user: {
            email: config.EMAIL,
            name: config.NAME,
            stack: config.STACK,
        },
        timestamp: curentTimeStamp,
        fact: catFact,
    };

    res.status(200).json(profile);
}