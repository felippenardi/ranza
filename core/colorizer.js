'use strict';

var suportColors = process.env ? require('supports-color') : null,
    useColors = suportColors && true;

var colors = {
  'success': 92,
  'error': 91
};

function colorizer(color, message) {
  if (!useColors) return String(str);
  return '\u001b[' + colors[color] + 'm' + message + '\u001b[0m';
}

module.exports = colorizer;