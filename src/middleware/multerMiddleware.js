import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// These two lines replace __dirname (not available in ES modules directly)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the path for storing uploaded files
const uploadsDir = path.join(__dirname, '../../uploads');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir); // Use the uploads directory in your project
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Include file extension
    cb(null, file.originalname); // Save with original name (or you can modify it as needed)
  }
});

const upload = multer({ storage: storage });

export default upload;
