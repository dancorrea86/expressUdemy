const express = require('express');
const app = express();

app.get('/opa', (req, res) => {
  res.json([
    { id: 7, name: 'Ana', position: 1 },
    { id: 34, name: 'Bia', position: 2 },
    { id: 73, name: 'Carlos', position: 3 }
  ])
});
// app.get('/opa', (req, res) => {
//   res.json({
//     name: 'iPad 32Gb',
//     price: 1899.00,
//     dicount: 0.12
//   })
// });

app.listen(3000, () => {
  console.log('Backend funcionando!!!')
});
