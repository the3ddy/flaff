/**
 * *********************
 *
 * @module Server
 * @author the3ddy
 * @date 5/23/2019
 * @description where server lives
 *
 * *********************
 */

/**
 * Module Dependencies
 */
const app = require('./api');

/**
 * Setting Port
 * note: typically you would want to save the port number into an .env file
 */
const PORT = '3000';

/**
 * Listening to Port
 */
app.listen(PORT, () => {
  console.log(`Your majestic server is running @ ${PORT}`);
})

module.exports = app;