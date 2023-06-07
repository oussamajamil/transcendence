import { extname } from 'path';
import { diskStorage } from 'multer';

function generateFilename(file) {
  return `${Date.now()}${extname(file.originalname)}`;
}
export const storage = diskStorage({
  destination: './uploads',
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, callback) => {
    const ext = extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'));
    }
    callback(null, true);
  },
  filename: async (req, file, callback) => {
    req.body.avatar = generateFilename(file);
    callback(null, generateFilename(file));
  },
});
