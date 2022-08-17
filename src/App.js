import React, { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './components/ColorList';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <ColorList
        colors={colors}
        //상태 변화를 감지해서 반영하기 위해서 함수를 전달
        //즉, Color 컴포넌트에서 해당 Color의 아이디를 인자로 전달하면서 호출
        onRemoveColor={id => {
          //컬러 데이터에 선언된 아이디와 삭제하려는 컴포넌트의 아이디 비교
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          );

          setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
