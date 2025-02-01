import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent"; // Eliminamos la importación de Header
import "./index.css";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
