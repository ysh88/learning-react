import React, {useContext}from 'react';
import Color from './Color';
import { useColors } from "../ColorProvider";

function ColorList() {
  const {colors} = useColors(); //컨텍스트 '객체' 반환하는 커스텀 훅, ('배열' 구조분해 x)
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  return (
    <div className="color-list">
      {colors.map(color => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}

export default ColorList;
