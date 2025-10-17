import getTimeISO from "../utils/getTimeISO.js";


export default (req, res) => {
    const currentTimeStamp = getTimeISO;

    res.status(200).json({
        "status": "success",
        "message": "API is running",
        "timestamp": currentTimeStamp
    });
};