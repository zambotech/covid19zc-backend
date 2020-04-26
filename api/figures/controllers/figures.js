'use strict';

const { sanitizeEntity } = require('strapi-utils');
const { convertRestQueryParams } = require('strapi-utils');

/**
 * A set of functions called "actions" for `Counter`
 */

module.exports = {
  index: async ctx => {
      const probableDataCount = await strapi.query('probable').count();
      const suspectDataCount = await strapi.query('suspect').count();
      const confirmedCasesCount = await strapi.query('cases').count();
      const latestConfirmedCasesUpdated = await strapi.query('cases').find({ _sort: 'updated_at:desc' })

      const suspect = await strapi.query('suspect').findOne({id: suspectDataCount})
      const probable = await strapi.query('probable').findOne({id: probableDataCount})
    
      const figures = {
        suspect: suspect,
        probable: probable,
        confirmed: {
          value: confirmedCasesCount,
          dataUpdatedAt: latestConfirmedCasesUpdated.shift().dateUpdatedAt
        }
      }

      return figures;
  }
};

