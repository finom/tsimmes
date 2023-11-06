const fs = require('fs');
const path = require('path');

const umdTemplate = fs.readFileSync(path.join(__dirname, './umdTemplate.js'), { encoding: 'utf-8' });
const umdTemplateEs5 = fs.readFileSync(path.join(__dirname, './umdTemplate-es5.js'), { encoding: 'utf-8' });

const tsimmes = fs.readFileSync(path.join(__dirname, '../src.js'), { encoding: 'utf-8' });
const tsimmesEs5 = fs.readFileSync(path.join(__dirname, '../es5/src.js'), { encoding: 'utf-8' });

const tsimmesUmd = umdTemplate.replace('tsimmes_PLACEHODER', tsimmes);
const tsimmesUmdEs5 = umdTemplateEs5.replace('tsimmes_PLACEHODER', tsimmesEs5);

fs.writeFileSync(path.join(__dirname, '../tsimmes.umd.js'), tsimmesUmd);
fs.writeFileSync(path.join(__dirname, '../es5/tsimmes.umd.js'), tsimmesUmdEs5);
