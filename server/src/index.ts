import express, {type Application, Request, Response} from 'express';
import "dotenv/config"

const app: Application = express();


const PORT = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hey this is working fine");
})

app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`);

})
