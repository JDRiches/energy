import Dashboard from "./components/Dashboard";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="flex flex-row items-start justify-center m-auto w-auto gap-1">
        <About />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
