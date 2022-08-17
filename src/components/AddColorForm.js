import React, { useState } from 'react';

function AddColorForm({ onNewColor = f => f }) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = e => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle('')
    setColor('')
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="color title"
        required
      />
      <input
        value={color}
        onChange={e => setColor(e.target.value)}
        type="color"
        required
      />
    </form>
  );
}

export default AddColorForm;
