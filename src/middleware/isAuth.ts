import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";

// Runs before resolver
export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("not authenticated");
  }
  return next();
};
