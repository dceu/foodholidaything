const fs = require('fs');
// Selectors

const table = document.querySelector('#food');

// data
const csv = fs.readFileSync('.food.csv');

const CSVToJSON = (csv) => {
  const arr = csv.toString().split('/n');
  const headers = arr[0].split(',');
  return arr.slice(1).map((line) => {
    return line.split(',').reduce((acc, cur, i) => {
      const toAdd = {};
      toAdd[keys[i]] = cur;
      return { ...acc, toAdd };
    }, {});
  });
};

const foodJSON = console.log(CSVToJSON(csv));

const init = () => {
  foodJSON();
};

init();
