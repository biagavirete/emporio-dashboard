import { Reducer } from "redux";
import { ProductTypes } from './types';

const INITIAL_STATE: any = {
  products: [],
  loading: false,
  error: false,
  success: false,
}

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true }
    case ProductTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      }
    case ProductTypes.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: false }

    case ProductTypes.POST_PRODUCT_REQUEST:
      return { ...state, loading: true }
    case ProductTypes.POST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        data: action.payload
      }
    case ProductTypes.POST_PRODUCT_FAILURE:
      return { ...state, loading: false, error: true }

    case ProductTypes.DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true }
    case ProductTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      }
    case ProductTypes.DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
