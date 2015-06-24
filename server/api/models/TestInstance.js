/**
* TestInstance.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    state: { type: 'string', defaultsTo: 'init' },
    env: { type: 'string', required: 'true' },
    status: { type: 'string', defaultsTo: 'init' },
    result: { type: 'json' }
  },

  afterCreate: function(values, cb) {
    console.log(values);
    //testetService.startTest(values.id, values.env, values.source);
    cb()
  }

};

