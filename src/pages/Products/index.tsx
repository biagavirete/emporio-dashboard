import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ProductsService from '../../store/ducks/products/actions';
import { Product } from '../../store/ducks/products/types';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductsService.getProductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { products } = useSelector((state: any) => state.products)

  const deleteProduct = (id: any) => {
    try {
      dispatch(ProductsService.deleteProductRequest(id))
    } catch (e) {
      console.log(e)
    }
    dispatch(ProductsService.getProductsRequest())
  }
  return (
    <>
      <h1>Produtos disponíveis</h1>
      <table>
        {products !== undefined && products.map((row: Product) => (
          <>
            <tr>
              <td>{row.title}</td>
              <td>{row.price}</td>
              <td><button onClick={() => deleteProduct(row.id)}>Excluir</button></td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
}

export default Products;