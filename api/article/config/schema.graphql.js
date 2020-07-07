module.exports = {
  query: `
    articleBySlug(slug: String!): Article!
    articlesBySearch(query: String!): [Article]!
  `,
  resolver: {
    Query: {
      articleBySlug: {
        description: "Return the post by the slug",
        resolverOf: "application::article.article.findOne", // Will apply the same policy on the custom resolver as the controller's action `findByCategories`.
        resolver: async (obj, options, ctx) => {
          const result = await strapi.controllers.article.findBySlug(
            options.slug
          );
          return result;
        },
      },
      articlesBySearch: {
        description: "Return the posts by the query",
        resolverOf: "application::article.article.find",
        resolver: async (obj, options, ctx) => {
          const result = await strapi.controllers.article.searchArticle(
            options.query
          );
          return result;
        },
      },
    },
  },
};
