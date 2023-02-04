import Extensions from "./components/Extensions";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Features/>
      <Extensions/>
      <Questions/>
    </div>
  );
}

export default App;
