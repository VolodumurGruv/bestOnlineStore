import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4200;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticPath = path.join(
	__dirname,
	"../../../bestOnlineStore/front-end/dist/front-end/"
);
app.use(express.static(staticPath));

app.get("/favicon.ico", (req, res) => {
	res.sendFile(path.join(staticPath, "favicon.ico"));
});

app.get("*", (req, res) => {
	res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server for Angular work on ${PORT}`);
});
