import "./App.css";
import Button from "./component/Button";
import ImageComponent from "./component/ImageComponent";

function App() {
  return (
    <div className="App">
      <Button string="Funzione eseguita" />
      <ImageComponent src="https://placekitten.com/200" alt="kittens image" />
    </div>
  );
}

export default App;
