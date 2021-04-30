import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLEnumType, 
    GraphQLID, 
    GraphQLBoolean, 
    GraphQLFloat 
} from 'graphql/type/index.js'

import { LandlordDetailsType } from '../landlord/landlordType.js';

export const TenantDetailsType = new GraphQLObjectType({
    name: 'TenantDetailsType',
    description: 'Tenant\'s details',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Tenants\'s id',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        name: {
            type: GraphQLString,
            description: 'Tenant\'s Name',
        },
        gender: {
            type: GraphQLString,
            description: 'Sex',
        },
        occupation: {
            type: GraphQLString,
            description: 'Occupation',
        },
        tenancy_period: {
            type: GraphQLString,
            description: 'Tenancy duration',
        },
        landlord: {
            type: LandlordDetailsType,
            description: 'Tenant\'s  landlord info',
        }
    })
});


