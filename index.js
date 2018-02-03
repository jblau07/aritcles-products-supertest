const http = require('http');
const app = require('./server');
const PORT = process.env.PORT || 4567;

http.createServer(app).listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});