import { Router } from "express";

import {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler
} from "../controllers/users.mjs";

const usersRouter = Router();
usersRouter.route("/").get(getUsersHandler).post(postUsersHandler);

usersRouter
  .route("/:userId")
  .get(getUserByIdHandler)
  .delete(deleteUserByIdHandler)
  .put(putUserByIdHandler);

export default usersRouter;
