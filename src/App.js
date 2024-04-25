import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" md:h-screen flex flex-col md:items-center md:justify-center bg-slate-200 p-5">
      <div className="grid gap-16 place-items-center mx-5 md:grid-cols-2 sm:grid-cols-1 md:h-screen">
        <About />
        <Dashboard />
      </div>
      <div className="flex flex-row items-center justify-center">
        <Footer />
      </div>

    </div>
  );
}

export default App;
