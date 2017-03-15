const fs = require('fs');
const path = require('path');

const umdTemplate = fs.readFileSync(path.join(__dirname, './umdTemplate.js'), { encoding: 'utf-8' });
const bala = fs.readFileSync(path.join(__dirname, '../src.js'), { encoding: 'utf-8' });
const balaUmd = umdTemplate.replace('BALA_PLACEHODER', bala)

fs.writeFileSync(path.join(__dirname, '../bala.umd.js'), balaUmd);
