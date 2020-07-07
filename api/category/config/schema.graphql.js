module.exports = {
  query: `
    tagBySlug(slug: String!): Category!
  `,
  resolver: {
    Query: {
      tagBySlug: {
        description: 'Return the tag by the slug',
        resolverOf: 'application::category.category.findOne',
        resolver: async (obj, options, ctx) => {
          const result = await strapi.controllers.category.findBySlug(options.slug);
          return result;
        },
      }
    }
  }
}
