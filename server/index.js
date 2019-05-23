require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
routes = require("./routes/routes");
const app = express();
const port = process.env.port || 3001;
app.use(cors());

app.use(json());
routes(app);
massive(process.env.CONNECTION_STRING).then(db => {
	app.set("db", db);
});

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
