/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    project: { model: 'Project', required: true },
    name: { type: 'string', required: true },
    url: { type: 'string', required: true },
    branch: { type: 'string', required: true }
  }

};

