import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating
        style={{ backgroundColor: 'lightblue' }}
        totalStars={5}
        onDoubleClick={e => alert('double click')}
      />
    </div>
  );
}

export default App;
