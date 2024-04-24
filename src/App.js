import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-200">
      <div className="flex flex-row items-start justify-center m-auto w-auto gap-1">
        <About />
        <Dashboard />
      </div>
      <div className="flex flex-row">
        <Footer />
      </div>

    </div>
  );
}

export default App;
