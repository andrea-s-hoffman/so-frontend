import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import HomeView from "./components/HomeView";
import Header from "./components/Header";
import TopFiveView from "./components/TopFiveView";
import MyShoutoutsRoute from "./components/MyShoutoutsRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/user/:toName" element={<HomeView />} />
          <Route path="/whatever" element={<TopFiveView />} />
          <Route path="/me" element={<MyShoutoutsRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
