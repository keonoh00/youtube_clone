import express from "express";
import {
  postEdit,
  watchVideos,
  editVideos,
  uploadVideo,
  deleteVideo,
  postUpload,
} from "../controllers/videoController";
import { uploadVideoFile, useronlyMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter
  .route("/upload")
  .all(useronlyMiddleware)
  .get(uploadVideo)
  .post(
    uploadVideoFile.fields([
      { name: "video", maxCount: 1 },
      { name: "thumb", maxCount: 1 },
    ]),
    postUpload
  );
videoRouter.get("/:id([0-9a-f]{24})", watchVideos);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .get(editVideos)
  .post(
    uploadVideoFile.fields([
      { name: "video", maxCount: 1 },
      { name: "thumb", maxCount: 1 },
    ]),
    postEdit
  );
videoRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);

export default videoRouter;
