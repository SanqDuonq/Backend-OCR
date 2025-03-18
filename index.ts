import express from 'express';
import dotenv from 'dotenv';
import ocrRoute from './routers/ocr.routes';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: '*'
}));
app.use(express.json({
    limit: '50mb'
}))
app.use(ocrRoute);

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`);
})
