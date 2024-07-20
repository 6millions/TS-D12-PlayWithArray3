import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});