const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const db = require('./db');
const Image = db.image;
app.use(fileUpload({
    createParentPath: true,
}));
app.post("/uploads", (req, res) => {
    if (req.files) {
        return res.status(400).json({msg: "No file uploaded"})
    }
    const file = req.files.file;
    if (!file)
        return res.json({error: "Incorrect input name"});
    const newFileName = encodeURI(Date.now() + "-" + file.name);
    file.mv(`${__dirname}/public/uploads/${newFileName}`, err => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log("file was uploaded");
        res.json({
            fileName: file.name,
            filePath: `/uploads/${newFileName}`,
        });

    });

});
// function writeToDb(data, res) {
//     data = JSON.parse(data, true);
//     console.log(data);
//     Image.create({
//         image_name: data['input-1'],
//         file_name: data['input-2'],
//         user_name : data['input-3'],
//     })
//         .then(result => {
//             console.log(result);
//             res.end('ok');
//         }).catch(err => {
//         console.log(err);
//         res.end('error');
//     })
// }
app.listen(5000, () => console.log("Server Started ..."));