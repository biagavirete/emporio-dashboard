import api from './api';

const ProductsService = {
  getProducts: () => api.get('/beers', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),
  postProduct: (newProduct: any) => api.post('/beers', newProduct, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }),
  deleteProduct: (id: any) => api.delete(`/beers/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
};

export default ProductsService;