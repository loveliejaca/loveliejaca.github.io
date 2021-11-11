import './assets/styles/style.scss'


import Header from "./components/Header"
import Mv from "./components/Mv"
import Skills from "./components/Skills"
import Project from "./components/Project"
import About from "./components/About"
import Contact from "./components/Contact"
import Experiment from "./components/Experiment"

function App() {
  return (
    <div className="l-wrapper">
        <Header/>
      <div className="bg"></div>
      <main className="l-main" id="home">
        <Mv/>
        <section className="l-section" id="skills">
          <Skills/>
        </section>

        <section className="l-section" id="experiment">
          <Experiment/>
        </section>

        <section className="l-section" id="contact">
          <Contact/>
        </section>

      </main>
      <footer className="l-footer">
        <div className="footer-logo"></div>
        <div className="footer-email">
          <a href="jlablab@gmail.com">jlablab@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
