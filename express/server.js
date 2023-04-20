import express from "express";
import path from "path";
const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '..', 'front', 'build')));


app.get('/', function (req, res) {
    console.log(path.join(__dirname, 'front', 'build', 'index.html'))
    res.sendFile(path.join(__dirname, 'front', 'build', 'index.html'));
});

app.listen(3002, () => console.log("connected: " + 3002));