import { useEffect, useState } from 'react';

const useForm = (initial = {}, deps=[]) => {
  const [inputs, setInputs] = useState(initial);

  useEffect(() => {
    setInputs(initial);
  }, deps);

  const handleChange = (e) => {
    let { value, name, type, checked } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => {
        if (typeof value === 'boolean') return [key, false];
        if (typeof value === 'number') return [key, 0];
        return [key, ''];
      })
    );
    setInputs(blankState);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
};

export { useForm };
