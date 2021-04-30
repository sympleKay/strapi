import axios from 'axios';
import { STRAPI_API } from '../constants/utils.js'


export const getAllLandLords = async () => {
    try {
        const res = await axios.get(`${STRAPI_API}/landlords`)
        // console.log(res.data)
        return res.data;
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const getLandLord = async (args) => {
    try {
        const res = await axios.get(`${STRAPI_API}/landlords/${args.id}`);
        // console.log(res.data)
        return res.data;    
    } catch (e) {
        console.log(e)
        throw e 
    }
    
}

export const createLandlordMutation = async (args) => {
    try {
        const res = await axios.post(`${STRAPI_API}/landlords`, { ...args } );
        console.log(res.data);
        // console.log(args);
        return res.data;
    } catch (e) {
        console.log(e)
        throw e 
    }
}

export const updateLandlordMutation = async (args) => {
    try {
        const res = await axios.put(`${STRAPI_API}/landlords/${args.id}`, { ...args } );
        // console.log(res.data);
        return res.data;
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const deleteLandlordMutation = async (args) => {
    try {
        const res = await axios.delete(`${STRAPI_API}/landlords/${args.id}`)
        // console.log(res.data);
        return `${res.data.name} with id: ${res.data._id} deleted successfully`;
    } catch (e) {
        console.log(e)
        throw e
    }
}