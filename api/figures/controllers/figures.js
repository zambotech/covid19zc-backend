'use strict';

const { sanitizeEntity } = require('strapi-utils');
const { convertRestQueryParams } = require('strapi-utils');

/**
 * A set of functions called "actions" for `Counter`
 */

module.exports = {
  index: async ctx => {
      const pumDataCount = await strapi.query('pum').count();
      const puiDataCount = await strapi.query('pui').count();
      const confirmedCasesCount = await strapi.query('cases').count();
      const latestConfirmedCasesUpdated = await strapi.query('cases').find({ _sort: 'updated_at:desc' })
    
      const figures = {
        pui: await strapi.query('pui').findOne({id: puiDataCount}),
        pum: await strapi.query('pum').findOne({id: pumDataCount}),
        confirmed: {
          value: confirmedCasesCount,
          updated_at: latestConfirmedCasesUpdated.shift().updated_at
        }
      }

      return figures;
  }
};

