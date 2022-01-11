import axios from "axios";
import {MAIN_URL} from './Url'


export function getproducts(){
    return axios.get(MAIN_URL)
}

export function deleteProduct(id){
    return axios.delete(`${MAIN_URL}/${id}`);
}

export function  addProduct(data){
    return axios.post(MAIN_URL,data);
}

export function getproductsById(id){
    return axios.get(`${MAIN_URL}/${id}`);
}



export function updateProduct(id,data){
    return axios.put(`${MAIN_URL}/${id}`,data);
}  