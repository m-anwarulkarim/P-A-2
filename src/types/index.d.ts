import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      users?: JwtPayload;
    }
  }
}

export const role = {
  admin: "admin",
  customer: "customer",
};
