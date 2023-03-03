const express = require('express');
const app = express();
const port = 3100; 
const cors = require('cors');
const authenRouter = require('./routes/authenticationRouter.js');
const favRouter = require("./routes/favoritesRouter.js");
const roomRouter = require("./routes/roomLinstingRouter.js");
// middleware
app.use(express.json());
app.use(cors());

app.use('/authentication', authenRouter);
app.use('/favorites', favRouter);
app.use('/room', roomRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () =>
  console.log(`Example app listening on port ${port}`),
);
