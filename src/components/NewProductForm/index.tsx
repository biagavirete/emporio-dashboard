import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as ProductsService from '../../store/ducks/products/actions';
import { Form } from './styles';

const NewProductForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();

  const { error } = useSelector((state: any) => state.products);

  const onSubmit = async (data: any) => {
    try {
      dispatch(ProductsService.postProductRequest(data));
    } catch (e) {
      console.log(e);
    }
    reset({});
    toast.success('Produto adicionado');
  }

  if (error) {
    toast.error('Erro ao cadastrar');
  }

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