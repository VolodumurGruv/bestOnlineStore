"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const app = (0, express_1.default)();
const PORT = 4200;
const staticPath = (0, path_1.join)(__dirname, '../../../front-end/dist/front-end/');
app.use(express_1.default.static(staticPath));
app.get('/favicon.ico', (req, res) => {
    res.sendFile((0, path_1.join)(staticPath, 'favicon.ico'));
});
app.get('*', (req, res) => {
    res.sendFile((0, path_1.join)(staticPath, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server for Angular work on ${PORT}`);
});
