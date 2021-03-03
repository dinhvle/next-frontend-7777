import { useState } from 'react';
import useForm from '../lib/useForm';
import Form from '../components/styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Cuchi bag',
    price: 150000,
    description: 'Only the greatest bag!',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
