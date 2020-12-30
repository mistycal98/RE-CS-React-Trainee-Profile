// Package imports
const path = require("path");
const multer = require("multer");

// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, "uploads/");
// 	},
// 	filename: (req, file, cb) => {
// 		cb(
// 			null,
// 			Date.now() + file.originalname + path.extname(file.originalname)
// 		);
// 	},
// });

const storage = multer.diskStorage({
	filename: (req, file, cb) => {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
			cb(new Error("File not supported"), false);
			return;
		}
		cb(null, true);
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
