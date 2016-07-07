const app = require('./app');
const port = 3000;
const db = require('./mongoose-config.js');

db.connect('mongodb://localhost/pokemon');

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});