require('dotenv').config()

/**
 * According to NPM dotenv library documentation, it is strongly recommanded to NOT HAVE multiple *.env files.
 *
 * @see {@link https://www.npmjs.com/package/dotenv#should-i-have-multiple-env-files}
 *
 * @returns {{GOOGLE_CLIENT_ID: (*|string), OCTOPOD_CLIENT_ID: (*|string), OCTOPOD_CLIENT_SECRET: (*|string)}}
 */
function config() {

  const APP_ENV = {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    OCTOPOD_API_URL: process.env.OCTOPOD_API_URL,
    OCTOPOD_CLIENT_ID: process.env.OCTOPOD_CLIENT_ID,
    OCTOPOD_CLIENT_SECRET: process.env.OCTOPOD_CLIENT_SECRET
  }

  if ('test' === process.env.NODE_ENV) {
    APP_ENV.GOOGLE_CLIENT_ID = 'google-client-id'
    APP_ENV.OCTOPOD_API_URL = 'http://octopod/api.url'
    APP_ENV.OCTOPOD_CLIENT_ID = 'octopod-client-id'
    APP_ENV.OCTOPOD_CLIENT_SECRET = 'octopod-client-secret'
  }

  return APP_ENV
}

module.exports = config()
