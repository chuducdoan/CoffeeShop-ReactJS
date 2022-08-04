import axiosClient from './axiosClient';

const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    getProductsByCategory: (categoryId, params) => {
        const url = `/categories/${categoryId}/products`;
        return axiosClient.get(url, {params});
    },
    getImagesByProduct: (productId) => {
        const url =  `/products/${productId}/images`;
        return axiosClient.get(url)
    }
}

export default productApi;