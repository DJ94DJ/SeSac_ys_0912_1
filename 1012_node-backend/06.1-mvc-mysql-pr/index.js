const express = require('express');
const app = express();
const router = require('./routes/index');
const PORT = 8000;


app.set("view engine", "ejs");
app.use(express. json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, function() {
    console.log(`server open: ${PORT}`);
});

