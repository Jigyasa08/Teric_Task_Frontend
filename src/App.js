import "./App.css";
import { Navbar } from "./Components/NavBar";
import { Routes } from "./Routes/Routes";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="headerPic">
        <img
          style={{ width: "100%", height: "520px" }}
          src="https://cdn57.androidauthority.net/wp-content/uploads/2019/06/Tubi-best-movie-apps-for-Android.jpg"
        />
      </div>
      <Routes />
    </div>
  );
}
