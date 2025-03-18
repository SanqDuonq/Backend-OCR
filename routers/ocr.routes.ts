import express from 'express';
import ocrController from '../controllers/ocr.controller';
const router = express.Router();

router.post('/upload', ocrController.decodeImg);

export default router;