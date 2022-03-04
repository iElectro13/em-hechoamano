import Footer from "./components/containers/Footer";
import Navbar from "./components/containers/Navbar";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="bg-orange-400 min-h-screen">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
