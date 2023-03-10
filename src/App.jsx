import Contact from "./components/Contact";
import Extensions from "./components/Extensions";
import Features from "./components/Features";
import Footer from "./components/Footer";
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
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
