import { GraphQLObjectType, GraphQLSchema } from 'graphql/type/index.js';

import { GetAllLandLords, GetLandLord, CreateLandlordMutation, UpdateLandlordMutation, DeleteLandlordMutation } from './landlord/landlordSchema.js';
import { GetAllTenants, GetTenant, CreateTenantMutation, UpdateTenantMutation, DeleteTenantMutation } from './tenant/tenantSchema.js';

const query = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        GetAllLandLords,
        GetLandLord,
        GetAllTenants,
        GetTenant
    },
});
  
const mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
      CreateLandlordMutation,
      UpdateLandlordMutation,
      DeleteLandlordMutation,
      CreateTenantMutation,
      UpdateTenantMutation,
      DeleteTenantMutation
    },
});

export default new GraphQLSchema({
    query,
    mutation,
    //subscription,
});
  