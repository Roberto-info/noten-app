/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Your GET endpoint
* Holt die Noten der Person
*
* personId oas_any_type_not_mapped Id der Person
* body oas_any_type_not_mapped  (optional)
* returns oas_any_type_not_mapped
* */
const getPersonNote = ({ personId, body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        personId,
        body,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getPersonNote,
};
