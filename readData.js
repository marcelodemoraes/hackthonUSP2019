const csv = require('csv-parser');
const fs = require('fs');

const items = []
fs.createReadStream('data.csv')
.pipe(csv())
.on('data', (row) => {
  console.log(row);
  const { i: name, v1: waste, v2: users, v3: cost} = row;
  items.push({ name, waste, users, cost });
})
.on('end', () => {
  console.log(items);
  console.log('CSV file successfully processed');
});
