'use strict';

function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);
  } catch (error) {
    console.log('There was a', error.name, 'parsing JSON data:', error.message);
    result = null;
  } finally {
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);
