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
      const activeCasesCount = await strapi.query('activeCases').count();
      const totalCasesInAffectedAreasCount = await strapi.query('affectedAreas').count()
      const totalCasesInAffectedAreasQuery = await strapi.query('affectedAreas').find()

      var totalCasesInAffectedAreas = 0
      for(var x = 0; x < totalCasesInAffectedAreasCount; x++)
      {
        totalCasesInAffectedAreas += totalCasesInAffectedAreasQuery[x].Cases
      }

      const suspect = await strapi.query('suspect').findOne({id: suspectDataCount})
      const probable = await strapi.query('probable').findOne({id: probableDataCount})
      const active = await strapi.query('activeCases').findOne({id: activeCasesCount})
    
      const figures = {
        suspect: suspect,
        probable: probable,
        active: {
          value: activeCasesCount,
          dataUpdatedAt: active.dateUpdatedAt
        },
        totalCases: totalCasesInAffectedAreas
      }

      return figures;
  }
};

