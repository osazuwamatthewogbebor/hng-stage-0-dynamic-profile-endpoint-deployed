import { Router } from "express";
import healthController from "../controllers/healthController.js";

const router = Router();

/**
 * @swagger
 *  tags:
 *      name: Health
 *      description: API Health Status
 *
 * /health:
 *   get:
 *     tags:
 *         - Health
 *     summary: Check API health
 *     description: Returns the API health status and a current timestamp IN ISO 8601 format..
 *     responses:
 *       200:
 *         description: API is up and running.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - status
 *                 - meassage
 *                 - timestamp
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [success]
 *                 message:
 *                   type: string
 *                   description: API health details.
 *                   example: API is running.
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   description: Current UTC time in ISO 8601 format. Updates on every request.
 *                   example: 2025-10-17T11:45:30.123Z
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

router.get("/", healthController);

export default router;
