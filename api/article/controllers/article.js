"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findBySlug: async (slug) => {
    try {
      const result = await strapi
        .query("article")
        .model.query((qb) => {
          qb.where("slug", slug);
        })
        .fetch();
      const field = result.toJSON();
      strapi.services.article.increaseViewCount(field);
      return field;
    } catch (error) {
      return error;
    }
  },
  searchArticle: async (query) => {
    try {
      const result = await strapi.query("article").search({ _q: query });
      return result;
    } catch (error) {
      return error;
    }
  },
};
