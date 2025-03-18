import Tesseract from "tesseract.js";
import { IOcr } from "../interface/ocr.interface";

class OcrServices implements IOcr {
    async decodeImg(imagePath: string): Promise<string> {
        const buffer = Buffer.from(imagePath, 'base64');
            const result = await Tesseract.recognize(buffer,'vie',{
                logger: (message) => console.log(message)
            })
        return result.data.text;
    }
}

export default new OcrServices();

