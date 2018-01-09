const app = require('./app');
const port = 7000;
app.listen(port, () => {
  console.log(`Cakes API Server running on ${port}`);
});
