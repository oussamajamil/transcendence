import { extname } from 'path';
import { diskStorage } from 'multer';

function generateFilename(file) {
    return `${Date.now()}${extname(file.originalname)}`;
  }

  
export const storage = diskStorage({
  destination: './uploads',
  filename: async (req, file, callback) => {
    req.body.file = generateFilename(file);
    callback(null, generateFilename(file));
  },
});
