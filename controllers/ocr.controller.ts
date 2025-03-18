import { Request, Response } from "express";
import ocrService from "../services/ocr.service";
import { extractFlightDetail } from "../util/regex";

class OcrController {
    async decodeImg(req: Request, res: Response) {
		try {
			const { image } = req.body;
			if (!image) {
				res.status(400).json({ error: "No image provided" }) 
			}
			console.log("Processing OCR...");
			const rawText = await ocrService.decodeImg(image);
			console.log("Raw OCR text:", rawText);
	
			if (!rawText) {
				res.status(400).json({ error: "No text detected" });
			}

			console.log("Extracting flight details...");
			const flightDetails = extractFlightDetail(rawText);
			console.log("Extracted flight details:", flightDetails);
	
			if (!flightDetails.from || !flightDetails.to) {
				res.status(400).json({ error: "No valid flight details found" });
				return;
			}
	
			res.json({ success: true, flightDetails,rawText });
		} catch (error) {
			console.error("Error processing OCR:", error);
			res.status(500).json({ error: "OCR processing failed" });
		}
	}
}

export default new OcrController();
