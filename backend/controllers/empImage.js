// Package imports
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
	},
});

const upload = multer({
	storage,
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
			cb(new Error("File not supported"), false);
			return;
		}
		cb(null, true);
	},
});

module.exports = upload;
