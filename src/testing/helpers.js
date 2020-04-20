/* eslint-disable no-console */
import _ from 'lodash';

export function equal(result, expected) {
  if (_.isEqual(result, expected)) {
    console.log('success');
  } else {
    console.log('--failure:--');
    console.log(JSON.stringify(result));
    console.log(JSON.stringify(expected));
    console.log('------------');
  }
}

export function notEqual(result, expected) {
  if (_.isEqual(result, expected)) {
    console.log('--failure:--');
    console.log(JSON.stringify(result));
    console.log(JSON.stringify(expected));
    console.log('------------');
  } else {
    console.log('success');
  }
}