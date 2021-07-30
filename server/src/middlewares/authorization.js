import jwt from "jsonwebtoken";
import config from "../config/index.js";

export async function isAuthenticated(ctx, next) {
  // eslint-disable-line import/prefer-default-export
  try {
    const { authorization = "" } = ctx.request.headers;
    const [, token] = authorization.trim().split(" ");
    console.log(authorization);
    if (token) {
      const isValid = jwt.verify(token, config.jwt.JWT_SECRET);
      if (isValid) {
        console.log(isValid);
        await next();
      }
      throw new Error("Invalid token");
    }
    throw new Error("A token is required to access this resource");
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    ctx.body = {
      success: false,
      status: 500,
      statusMessages: ["Internal server error"],
    };
  }
}
