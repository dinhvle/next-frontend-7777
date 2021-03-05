import { useEffect } from 'react';
import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  // create this so we have something to watch
  const initialValues = Object.values(initial).join('');
  useEffect(() => {
    // This function runs when the things we are watching change
    // Basically this is a workaound to form reload when initialValue changes
    // Is there a better way for this???
    setInputs(initial);
  }, [initialValues]);
  // {
  //   name: 'name of product',
  //   description: 'description of product',
  //   price: 1000,
  // }
  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    // Is there an easier way to clear value in Object???
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
