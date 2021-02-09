require('dotenv').config();

/**
 * Enum for api config
 * @readonly
 * @enum {PORT}
 */

const apiConfig = {
  PORT: process.env.PORT || '3001'
}

export default Object.freeze(apiConfig);