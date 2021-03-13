import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as ProductsService from '../../store/ducks/products/actions';
import { Form } from './styles';

const NewProductForm = () => {
  const [submittedData, setSubmittedData] = useState({});
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();

  const { submittedForm } = useSelector((state: any) => state.products)

  const onSubmit = async (data: any) => {
    setSubmittedData(data);
    try {
      dispatch(ProductsService.postProductRequest(data));
    } catch (e) {
      console.log(e)
    }
    reset(data);
    toast.success('Produto adicionado')
  }

  useEffect(() => {
    if (submittedForm) {
      reset({ ...submittedData })
    }
  }, [submittedForm, submittedData, reset])

  return (
    <Form>
      <input
        type="text"
        placeholder="Título"
        name="title"
        ref={register({
          required: 'Campo obrigatório',
        })}
      />
      {errors.title && <p
        role="alert"
        data-testid="email-error">{errors.title.message}</p>
      }

      <input
        type="text"
        placeholder="Preço (incluir R$)"
        name="price"
        ref={register({
          required: 'Campo obrigatório',
        })}
      />
      {errors.price && <p
        role="alert"
        data-testid="email-error">{errors.price.message}</p>
      }

      <input
        type="text"
        placeholder="Descrição"
        name="description"
        ref={register({
          required: 'Campo obrigatório',
        })}
      />
      {errors.description && <p
        role="alert"
        data-testid="email-error">{errors.description.message}</p>
      }

      <input
        type="text"
        placeholder="URL da imagem"
        name="image"
        ref={register({
          required: 'Campo obrigatório',
        })}
      />
      {errors.image && <p
        role="alert"
        data-testid="email-error">{errors.image.message}</p>
      }

      <button onClick={handleSubmit(onSubmit)}>Adicionar</button>
      <Toaster />
    </Form>
  );
}

export default NewProductForm;