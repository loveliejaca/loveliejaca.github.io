import './assets/styles/style.scss'


import Mv from "./components/Mv"
import Skills from "./components/Skills"
import Project from "./components/Project"
import About from "./components/About"
import Galaxy from "./components/Galaxy"
// import AnimationHeart from "./components/AnimationHeart"

function App() {
  return (
    <div className="l-wrapper">
        <Galaxy/>
      <div className="bg"></div>
      <main className="l-main">
        <Mv/>
        <Skills/>
        <About/>

        <section className="l-section experiments">
          <div className="l-container">
            <h2 className="cmn-heading cmn-heading-expe"><span>Experiments</span></h2>
          </div>

        </section>


        <Project/>

      </main>
    </div>
  );
}

export default App;
