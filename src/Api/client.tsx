import { base_api } from ".";
import axios from 'axios';

export const client = axios.create({
    baseURL: base_api,
    headers: {Accept: 'application/json',"Content-Type":'application/json'}
});