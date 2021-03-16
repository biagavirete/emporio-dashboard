import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import * as ProductsActions from '../../store/ducks/products/actions';
import { Product } from '../../store/ducks/products/types';

import NewProductForm from '../../components/NewProductForm';
import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';

import { Table, NewProductButton } from '../Products/styles';
import { IoTrashOutline } from 'react-icons/io5';

const Products = () => {
  const [showAddNewProduct, setShowAddNewProduct] = useState(false);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
  const { role } = useSelector((state: any) => state.users.data)

  const toggleAddNewProduct = () => {
    setShowAddNewProduct(!showAddNewProduct);
  }

  useEffect(() => {
    dispatch(ProductsActions.getProductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { submittedForm, products } = useSelector((state: any) => state.products)

  const deleteProduct = (id: any) => {
    try {
      dispatch(ProductsActions.deleteProductRequest(id))
    } catch (e) {
      console.log(e)
    }
    dispatch(ProductsActions.getProductsRequest())
  }

  useEffect(() => {
    dispatch(ProductsActions.getProductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submittedForm])

  return (
    <>
      { token ? (
        <>
          <Sidebar />
          <div className="content-area">
            <h1>Produtos disponíveis</h1>

            <div className="table">
              {role === 'admin' ? (
                <>
                  <Table>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products !== undefined && products.map((row: Product) => (
                        <>
                          <tr key={row.id}>
                            <td>{row.title}</td>
                            <td>{row.price}</td>
                            <td><button onClick={() => deleteProduct(row.id)}>
                              <IoTrashOutline size={20} />
                            </button></td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </Table>
                </>
              ) : (
                <>
                  <Table>
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products !== undefined && products.map((row: Product) => (
                        <>
                          <tr>
                            <td>{row.title}</td>
                            <td>{row.price}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </Table>
                </>
              )}
            </div>
            <div className="new-product">
              <NewProductButton onClick={toggleAddNewProduct}>
                Adicionar novo produto
            </NewProductButton>
              {showAddNewProduct && (
                <>
                  <h3>Novo produto</h3>
                  <NewProductForm />
                </>
              )
              }
            </div>
          </div>
          <UserInfo />
        </>
      ) : <Redirect to="/" />}
    </>
  );
}

export default Products;