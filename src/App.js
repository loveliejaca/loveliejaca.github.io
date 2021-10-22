import './assets/styles/style.scss'

import Mv from "./components/Mv"
import Skills from "./components/Skills"
import Project from "./components/Project"

function App() {
  return (
    <div className="l-wrapper">
      <main className="l-main">
        <Mv/>
        <Skills/>
        <Project/>

      </main>
    </div>
  );
}

export default App;
