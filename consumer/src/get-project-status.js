const axios = require('axios');

module.exports = async project => {
  axios.get(
    `http://40.76.53.97:9000/api/qualitygates/project_status?projectKey=${project.key}`,
  );
};
