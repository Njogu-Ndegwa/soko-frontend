module.exports = {
  client: {
    addTypename: true,
    includes: ['app/(default)/accounts/**/*.ts*'],
    service: {
      url: 'https://dev-federated-graphql-api.omnivoltaic.com/graphql',
      name: 'account-service',
    },
  },
};