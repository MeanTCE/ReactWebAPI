/* eslint-disable import/no-anonymous-default-export */
import http from '../constant/_configAxios'

//method Read all product
const getAllProduct = () => {
    return http.get('products')
}

//method Read by ID
const getProductById = (id) => {
    return http.get(`products/${id}`)
}

//method add new product
const addNewProduct = (data) => {
    return http.post(`products/`, data)
}

//method update product
const updateProduct = (id, data) => {
    return http.put(`products/${id}`, data)
}

//method delete product
const deleteProduct = (id) => {
    return http.delete(`products/${id}`)
}

export default {
    getAllProduct,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
}