import React from 'react';
import StarRating from './StarRating';
import { FaTrash } from 'react-icons/fa';
import { useColors } from '../ColorProvider';

function Color({ id, title, color, rating }) {
  //컨텍스트 '객체' 반환하는 커스텀 훅, ('배열' 구조분해 x)
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  );
}

export default Color;
