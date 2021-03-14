import { Reducer } from "redux";
import { ProductTypes, ProductState } from './types';

const INITIAL_STATE: any = {
  products: [],
  loading: false,
  error: false,
  success: false,
  submittedForm: false
}

const reducer: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
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
      return { ...state, loading: false, error: true }

    case ProductTypes.POST_PRODUCT_REQUEST:
      return { ...state, loading: true }
    case ProductTypes.POST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        submittedForm: true,
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

export default reducer;
