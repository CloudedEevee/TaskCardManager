const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors(), express.json(), express.urlencoded({ extended: true } ));

require("./config/mongoose.config");
require("./routes/user.routes")(app);
require("./routes/task.routes")(app);


app.listen(8000, () => console.log("The server is all fired up on port 8000"));