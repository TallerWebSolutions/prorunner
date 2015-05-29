/**
* TestInstance.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    timestamp: { type: 'datetime' },
    state: { type: 'string', defaultsTo: 'init' },
    env: { type: 'string' },
    result: { type: 'json' }
  }
};

