import React, { useEffect, useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import NewProductForm from '../../components/NewProductForm';
import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';
import * as ProductsService from '../../store/ducks/products/actions';
import { Product } from '../../store/ducks/products/types';
import { MainContainer } from '../Dashboard/styles';

const Products = () => {
  const [showAddNewProduct, setShowAddNewProduct] = useState(false);

  const dispatch = useDispatch();

  const { role } = useSelector((state: any) => state.users.data)

  const toggleAddNewProduct = () => {
    setShowAddNewProduct(!showAddNewProduct);
  }

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

  useEffect(() => {
    dispatch(ProductsService.getProductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  return (
    <MainContainer>
      <Sidebar />
      <div className="content-area">
        <h1>Produtos disponíveis</h1>
        <div className="table">
          {role === 'admin' ? (
            <>
              <table>
                <tbody>
                  {products !== undefined && products.map((row: Product) => (
                    <>
                      <tr>
                        <td>{row.title}</td>
                        <td>{row.price}</td>
                        <td><button onClick={() => deleteProduct(row.id)}><IoTrashOutline size={20} /></button></td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <table>
                {products !== undefined && products.map((row: Product) => (
                  <>
                    <tr>
                      <td>{row.title}</td>
                      <td>{row.price}</td>
                    </tr>
                  </>
                ))}
              </table>
            </>
          )}
        </div>
        <div className="new-product">
          <button onClick={toggleAddNewProduct}>Adicionar novo produto</button>

          {showAddNewProduct && <NewProductForm />}

        </div>
      </div>
      <UserInfo />
    </MainContainer>
  );
}

export default Products;