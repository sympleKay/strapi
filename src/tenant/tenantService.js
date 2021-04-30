import axios from 'axios';
import { STRAPI_API } from '../constants/utils.js'

// const request = axios.default;

export const getAllTenants = async (args,context) => {
    const res = await axios.get(`${STRAPI_API}/tenants`)
    console.log(res.data)
    return res.data;
}

export const getTenant = async (args) => {
    try {
        const res = await axios.get(`${STRAPI_API}/tenants/${args.id}`);
        // console.log(res.data)
        return res.data;    
    } catch (e) {
        console.log(e)
        throw e 
    }
    
}

export const createTenantMutation = async (args) => {
    try {
        
        const res = await axios.post(`${STRAPI_API}/tenants`, { ...args } );
        const addToLandlord = await axios.put(`${STRAPI_API}/landlords/${args.landlord}`, {tenants: res.data._id })
        // console.log(res.data);
        // console.log(args);
        return res.data;
    } catch (e) {
        console.log(e)
        throw e 
    }
}

export const updateTenantMutation = async (args) => {
    try {
        const res = await axios.put(`${STRAPI_API}/tenants/${args.id}`, { ...args } );
        // console.log(res.data);
        return res.data;
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const deleteTenantMutation = async (args) => {
    try {
        const res = await axios.delete(`${STRAPI_API}/tenants/${args.id}`)
        // console.log(res.data);
        return `${res.data.name} with id: ${res.data._id} deleted successfully`;
    } catch (e) {
        console.log(e)
        throw e
    }
}