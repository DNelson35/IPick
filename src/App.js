import './App.css';
import WheelComponent from "react-wheel-of-prizes";

function App() {
  const segments = ["Mc Donalds", "Burger King", "Arbys", "KFC", "Pizza Hut"];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={250}
          upDuration={50}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
    </div>
  );
}

export default App;
