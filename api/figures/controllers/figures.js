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

      const pui = await strapi.query('pui').findOne({id: puiDataCount})
      const pum = await strapi.query('pum').findOne({id: pumDataCount})
    
      const figures = {
        pui: pui,
        pum: pum,
        confirmed: {
          value: confirmedCasesCount,
          updatedAtReadable: latestConfirmedCasesUpdated.shift().dateUpdatedAt
        }
      }

      return figures;
  }
};

