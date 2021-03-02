import { useState } from 'react';
import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Cuchi bag',
    price: 150000,
    description: 'Only the greatest bag',
  });

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        value={inputs.name}
        onChange={handleChange}
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        placeholder="price"
        value={inputs.price}
        onChange={handleChange}
      />

      <label htmlFor="description">Name</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="description"
        value={inputs.description}
        onChange={handleChange}
      />

      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
}
