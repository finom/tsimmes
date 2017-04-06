const fs = require('fs');
const path = require('path');

const umdTemplate = fs.readFileSync(path.join(__dirname, './umdTemplate.js'), { encoding: 'utf-8' });
const umdTemplateEs5 = fs.readFileSync(path.join(__dirname, './umdTemplate-es5.js'), { encoding: 'utf-8' });

const bala = fs.readFileSync(path.join(__dirname, '../src.js'), { encoding: 'utf-8' });
const balaEs5 = fs.readFileSync(path.join(__dirname, '../es5/src.js'), { encoding: 'utf-8' });

const balaUmd = umdTemplate.replace('BALA_PLACEHODER', bala);
const balaUmdEs5 = umdTemplateEs5.replace('BALA_PLACEHODER', balaEs5);

fs.writeFileSync(path.join(__dirname, '../bala.umd.js'), balaUmd);
fs.writeFileSync(path.join(__dirname, '../es5/bala.umd.js'), balaUmdEs5);
