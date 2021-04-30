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

import { TenantDetailsType } from '../tenant/tenantType.js';

export const LandlordDetailsType = new GraphQLObjectType({
    name: 'LandlordDetailsType',
    description: 'Landlords details',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Landlord\'s id',
            resolve: (obj, args, context) => obj._id || obj.id
        },
        name: {
            type: GraphQLString,
            description: 'Landlord\'s Name',
        },
        property_type: {
            type: GraphQLString,
            description: 'Type of property',
        },
        property_location: {
            type: GraphQLString,
            description: 'Address of the property',
        },
        property_description: {
            type: GraphQLString,
            description: 'A brief description of the property',
        },
        vacant_room: {
            type: GraphQLString,
            description: 'No of rooms/flats that are vacant',
        },
        occupied_room: {
            type: GraphQLString,
            description: 'No of room/flats occupied',
        },
        rent: {
            type: GraphQLString,
            description: 'Rent payable',
        },
        tenants: {
            type: GraphQLList( TenantDetailsType ),
            description: 'Tenant\'s info',
        }
    })
});
