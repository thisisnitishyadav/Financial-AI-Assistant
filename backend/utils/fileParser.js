const fs = require('fs');
const xlsx = require('xlsx');

function parseFile(filePath) {
  const workbook = xlsx.readFile(filePath);
  const json = {};

  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    json[sheetName] = xlsx.utils.sheet_to_json(sheet);
  });

  return json;
}

module.exports = { parseFile };
