import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLInputObjectType, GraphQLFloat } from 'graphql/type/index.js';

import { TenantDetailsType } from './tenantType.js';
import { getAllTenants, getTenant, createTenantMutation, updateTenantMutation, deleteTenantMutation } from './tenantService.js'


export const GetAllTenants = {
    type: GraphQLList(TenantDetailsType),
    resolve: () => getAllTenants(),
};

export const GetTenant = {
    type: TenantDetailsType,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLID)
        },
    },
    resolve: (root, args) => getTenant(args),
};

export const CreateTenantMutation = {
    type: TenantDetailsType,
    args: {
        name: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLString
        },
        occupation: {
            type: GraphQLString
        },
        tenancy_period: {
            type: GraphQLString
        },
        landlord: {
            type: GraphQLList(GraphQLID)
        },
    },
    resolve: (root, args) => createTenantMutation(args)
}

export const UpdateTenantMutation = {
    type: TenantDetailsType,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLString
        },
        occupation: {
            type: GraphQLString
        },
        tenancy_period: {
            type: GraphQLString
        },
        landlord: {
            type: GraphQLList(GraphQLID)
        },
    },
    resolve: (root, args) => updateTenantMutation(args)
}

export const DeleteTenantMutation = {
    type: GraphQLString,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLID)
        },
    },
    resolve: (root, args) => deleteTenantMutation(args)
}