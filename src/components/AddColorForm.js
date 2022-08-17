import React from 'react';
import { useInput } from '../hooks';
import { useColors } from "../ColorProvider";

function AddColorForm() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const {addColor} = useColors();

  const submit = e => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title" required />
      <input {...colorProps} type="color" required />
      <button>Add</button>
    </form>
  );
}

export default AddColorForm;
