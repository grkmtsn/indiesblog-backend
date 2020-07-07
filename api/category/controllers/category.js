'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findBySlug: async (slug) => {
    const result = await strapi
      .query("category")
      .model.query((qb) => {
        qb.where("slug", slug);
      })
      .fetch();

    const field = result.toJSON();
    return field;
  }
};
