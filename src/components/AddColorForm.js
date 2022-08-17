import React, { useRef } from 'react';

function AddColorForm({ onNewColor = f => f }) {
  const txtTile = useRef();
  const hexColor = useRef();

  const submit = e => {
    e.preventDefault();
    const title = txtTile.current.value;
    const color = hexColor.current.value;
    onNewColor(title, color);
    txtTile.current.value = '';
    hexColor.current.value = '';
  };
  return (
    <form onSubmit={submit}>
      <input ref={txtTile} type="text" placeholder="color title" required />
      <input ref={hexColor} type="color" required />
    </form>
  );
}

export default AddColorForm;
