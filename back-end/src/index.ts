import express from 'express';
import { join } from 'path';

const app = express();
const PORT = 4200;

const staticPath = join(__dirname, '../../../front-end/dist/front-end/');
app.use(express.static(staticPath));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(join(staticPath, 'favicon.ico'));
});

app.get('*', (req, res) => {
  res.sendFile(join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server for Angular work on ${PORT}`);
});

