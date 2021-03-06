const express = require('express');
const server = express();

const PORT = process.env.PORT || 3030;

require('./routes/names.js')(server);

console.log(PORT)

server.listen( PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

