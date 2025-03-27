module.exports = {
  client: {
    addTypename: true,
    includes: ['app/(default)/staff/**/*.ts*'],
    service: {
      url: 'https://dev-federated-graphql-api.omnivoltaic.com/graphql',
      name: 'staff-service',
    },
  },
};