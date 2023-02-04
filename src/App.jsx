import Extensions from "./components/Extensions";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero/>
      <Features/>
      <Extensions/>
    </div>
  );
}

export default App;
