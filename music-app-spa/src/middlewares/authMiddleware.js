import * as authServices from "../services/authService.js";

export const authMiddleware = (ctx, next) => {
    ctx.user = authServices.getUser();

    next();
};