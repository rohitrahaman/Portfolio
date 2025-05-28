import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Nameinfo from "./components/Nameinfo";
import Other from "./components/Other";

function App() {
  return (
    <div>
      <Header />

      <Nameinfo />
      <About />
      <Experience />

      <Featured />
      <Other />
      <Contact />
    </div>
  );
}

export default App;
