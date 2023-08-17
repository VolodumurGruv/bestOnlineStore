import multer from "multer";
import express from "express";
import { isAuth } from "../utils/auth.js";

const uploadRouter = express.Router();

const storageConfig = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "uploads/images/");
	},
	filename(req, file, cb) {
		cb(null, `${Date.now()}_${file.originalname}`);
	},
});

const upload = multer({
	storage: storageConfig,
});

uploadRouter.post("/", isAuth, upload.single("image"), (req, res) => {
	res.send({
		message: "success",
		text: "File saved on server.",
		payload: `File path: /${req.file.path}`,
	});
});

export default uploadRouter;
