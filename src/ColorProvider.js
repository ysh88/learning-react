import React, { createContext, useContext, useState } from 'react';
import colorData from './color-data.json';
import { v4 } from 'uuid';

const ColorContext = createContext();

function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) =>
    setColors([...colors, { id: v4(), rating: 0, title, color }]);
  const rateColor = (id, rating) =>
    setColors(
      colors.map(color => (color.id === id ? { ...color, rating } : color))
    );
  const removeColor = id => setColors(colors.filter(color => color.id !== id));

  return (
    <div>
      <ColorContext.Provider
        value={{ colors, addColor, rateColor, removeColor }}
      >
        {children}
      </ColorContext.Provider>
    </div>
  );
}

export default ColorProvider;
export const useColors = () => useContext(ColorContext);//컨테스트를 반환하는 커스텀 훅

