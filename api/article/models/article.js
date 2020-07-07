"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    afterFind: async (model, attrs, options) => {
      if(attrs && attrs.article) {
        try {
          const entry = await strapi.query('article').update({slug: attrs.article.slug}, {view_count: attrs.article.view_count + 1})
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
