import "./styles.css";
import load from "../public/loading.gif";

export default function App() {
  return (
    <div className="App dot-flashing">
      <img src={load} alt="loading..." className="size" />
    </div>
  );
}
