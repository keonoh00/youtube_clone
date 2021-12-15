import express from "express";
import {
  postEdit,
  watchVideos,
  editVideos,
  uploadVideo,
  deleteVideo,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(uploadVideo).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watchVideos);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(editVideos).post(postEdit);
videoRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);

export default videoRouter;
