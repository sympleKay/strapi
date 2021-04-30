import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLInputObjectType, GraphQLFloat } from 'graphql/type/index.js';

import { LandlordDetailsType } from './landlordType.js';
import { getAllLandLords, createLandlordMutation, updateLandlordMutation, deleteLandlordMutation, getLandLord } from './landlordService.js'


export const GetAllLandLords = {
    type: GraphQLList(LandlordDetailsType),
    resolve: () => getAllLandLords(),
};

export const GetLandLord = {
    type: LandlordDetailsType,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLID)
        },
    },
    resolve: (root, args) => getLandLord(args),
};

export const CreateLandlordMutation = {
    type: LandlordDetailsType,
    args: {
        name: {
            type: GraphQLString
        },
        property_type: {
            type: GraphQLString
        },
        property_location: {
            type: GraphQLString
        },
        vacant_room: {
            type: GraphQLString
        },
        occupied_room: {
            type: GraphQLString
        },
        rent: {
            type: GraphQLString
        },
        property_description: {
            type: GraphQLString
        },
    },
    resolve: (root, args) => createLandlordMutation(args)
}

export const UpdateLandlordMutation = {
    type: LandlordDetailsType,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        property_type: {
            type: GraphQLString
        },
        property_location: {
            type: GraphQLString
        },
        vacant_room: {
            type: GraphQLString
        },
        occupied_room: {
            type: GraphQLString
        },
        rent: {
            type: GraphQLString
        },
        property_description: {
            type: GraphQLString
        },
        tenants: {
            type: GraphQLList(GraphQLID)
        }
    },
    resolve: (root, args) => updateLandlordMutation(args)
}

export const DeleteLandlordMutation = {
    type: GraphQLString,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLID)
        },
    },
    resolve: (root, args) => deleteLandlordMutation(args)
}

// 608b86a067762e3e14f62456 landlord