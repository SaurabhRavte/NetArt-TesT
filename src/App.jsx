import "./App.css";
import logo from "./assets/logo.png";
import cup from "./assets/1.png";
import DetailsCard from "./components/DetailsCard";
import BottomSecs from "./components/BottomSecs";
import Footer from "./components/FooterCard";

function App() {
  return (
    <div className="App">
      <img src={logo} className="Logo" />
      <div className="container">
        <div className="image">
          <img src={cup} className="cupImage" />
        </div>
        <div className="details">
          <DetailsCard />
        </div>
      </div>
      <BottomSecs />
      <Footer />
    </div>
  );
}

export default App;
