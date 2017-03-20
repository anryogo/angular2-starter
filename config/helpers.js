const path = require('path');

const _root = path.resolve(__dirname, '..');
const root = path.join.bind(path, _root);

exports.root = root;
