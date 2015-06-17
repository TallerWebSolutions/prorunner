/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    owner: { model: 'User' },
    envs: { collection: 'Env', via: 'projetc' },
    repo: { type: 'string' },
    testInstances: { collection: 'TestInstance' },
    key: { type: 'string' }
  },
  
  beforeCreate: function(values, cb) {
    values.key = crypto.randomBytes(20).toString('hex');
  }
};

