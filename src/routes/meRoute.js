import { Router } from "express";
import meRouteController from "../controllers/meRouteController.js";

const router = Router();

/**
 * @swagger
 *  tags:
 *      name: Profile
 *      description: Dynamic Profile Retrieval
 *
 * /me:
 *   get:
 *     tags:
 *         - Profile
 *     summary: Retrieve dynamic profile, current timestamp, and a fresh cat fact.
 *     description: Returns the developer's profile, a current timestamp IN ISO 8601 format, and a random cat fact from an external API.
 *     responses:
 *       200:
 *         description: Successful retrieval of the dynamic profile.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - status
 *                 - user
 *                 - timestamp
 *                 - fact
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [success]
 *                   description: Must always be "success".
 *                 user:
 *                   type: object
 *                   description: User profile details.
 *                   properties:
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: john.doe@example.com
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     stack:
 *                       type: string
 *                       example: Python/FastAPI
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   description: Current UTC time in ISO 8601 format. Updates on every request.
 *                   example: 2025-10-17T11:45:30.123Z
 *                 fact:
 *                   type: string
 *                   description: A cat fact fetched from the external Cat Facts API (or a fallback message if the API fails).
 *                   example: "The average cat sleeps 16 to 18 hours per day."
 *
 *       500:
 *         description: An unexpected internal server error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [error]
 *                 message:
 *                   type: string
 *                   example: An unexpected internal server error occurred.
 */

router.get("/", meRouteController);

export default router;
