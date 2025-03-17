'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').map((el) => {
    const line = el.split(':');

    if (line.length === 2) {
      line[0] = line[0].trim();
      line[1] = line[1].trim();
    }
    result[line[0]] = line[1];
  });

  return result;
}

module.exports = convertToObject;
