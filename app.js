const express = require('express');
const app = express();
const port = 3100; 
const cors = require('cors');


// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () =>
  console.log(`Example app listening on port ${port}`),
);
