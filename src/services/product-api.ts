import axios from "axios";

export async function getProductList() {
    return axios.get('https://64b14794062767bc4825f76a.mockapi.io/product')
}

export async function createProduct(data: any) {
    return axios.post('https://64b14794062767bc4825f76a.mockapi.io/product', data)
}

export async function getProductDetail(id: string) {
    return axios.get('https://64b14794062767bc4825f76a.mockapi.io/product/' + id)
}

export async function updateProduct(data: any, productId: string) {
    return axios.put('https://64b14794062767bc4825f76a.mockapi.io/product/' + productId, data)
}

export async function loginApi(name: string) {
    return axios.get('https://64b14794062767bc4825f76a.mockapi.io/product/', { params: {name: name}})
}