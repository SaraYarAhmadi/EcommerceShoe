
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../frontend/public/uploads/images/blogs/"));
    },
    filename: function (req, file, cb) {
        const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
    },
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb({ message: "Unsupported file format" }, false);
    }
};

const uploadBlogImage = multer({
    storage: storage,
    fileFilter: multerFilter,
    limits: { fileSize: 1000000 },
});

// const blogImageUpload = (req, res, next) => {
//     uploadBlogImage(req, res, function (err) {
//         if (err) {
//             // Handle multer error
//             return res.status(400).json({ error: err.message });
//         }
//         next();
//     });
// };


const blogImgResize = async (req, res, next) => {
    if (!req.files) return next();
    await Promise.all(
        req.files.map(async (file) => {
            const { path } = file;
            const newPath = path.replace("public/images/", "public/images/blogs/");
            await sharp(path)
                .resize(300, 300)
                .toFormat("jpeg")
                .jpeg({ quality: 90 })
                .toFile(`.${newPath}`);
            fs.unlinkSync(path);
        })
    );
    next();
};

export { uploadBlogImage }