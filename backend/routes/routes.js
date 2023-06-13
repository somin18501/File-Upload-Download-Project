import { uploadFile, downloadFile } from '../controller/file-controller.js';
import express from 'express';
import upload from '../utils/upload.js';

const router = express.Router()

router.post('/upload',upload.single('file'),uploadFile);
router.get('/file/:fileId',downloadFile);

export default router;