'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#bootstrap
 */

module.exports = () => {
  const io = require('socket.io')(strapi.server)

  io.on('connection', socket => {
    console.log(Date.now(), 'A client has connected.')

    socket.on('disconnect', () => {
      console.log(Date.now(), 'A client disconnected.')
    })
  })

  strapi.io = io
};
