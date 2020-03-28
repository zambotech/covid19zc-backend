'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /**
     * Count records.
     *
     * @return {Number}
     */

    count(ctx) {
        if (ctx.query._q) {
            return strapi.services.cases.countSearch(ctx.query);
        }

        return strapi.services.cases.count(ctx.query);
    },

    /**
    * Retrieve records.
    *
    * @return {Array}
    */

    async find(ctx) {
        let entities;

        // If additional parameters is specified, it will query that instead.
        // Else, it will count all the cases in tracker.
        if (ctx.query._q) {
            entities = await strapi.services.cases.search(ctx.query);
        } else {
            entities = await strapi.services.cases.find(ctx.query);
        }

        // Maps the entities with the model.
        return entities.map(entity => {
            // Removes all private fields of the model.
            const cases = sanitizeEntity(entity, {
              model: strapi.models.cases,
            });

            // Checks if the patient is considered as an elderly.
            if(cases.Age >= 60)
                cases.Elderly = true;
            else
                cases.Elderly = false;
            return cases;
        });
    },

    /**
    * Retrieve a record.
    *
    * @return {Object}
    */

    async findOne(ctx) {
        const entity = await strapi.services.cases.findOne(ctx.params);
        const cases = sanitizeEntity(entity, {
            model: strapi.models.cases
        });

        // Checks if the patient is considered as an elderly.
        if(cases.Age >= 60)
            cases.Elderly = true;
        else
            cases.Elderly = false;
        return cases;
    },
};
