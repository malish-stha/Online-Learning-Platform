import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  getCoursesAnalytics,
  getOrdersAnalytics,
  getUserAnalytics,
} from "../controllers/analytics.controller";
const analyticsRouter = express.Router();

analyticsRouter.get(
  "/get-user-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getUserAnalytics
);

analyticsRouter.get(
  "/get-orders-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getOrdersAnalytics
);

analyticsRouter.get(
  "/get-courses-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getCoursesAnalytics
);

export default analyticsRouter;
