import logo from './logo.svg';
import './App.css';
import './styles.css';
import Navbar from './Navbar';
import Top from './Top';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Bottom from './Bottom';

function App() {
    return (
        <>
            <Navbar />
            <Top />
            <About />
            <Projects />
            <Contact />
            <Bottom />
        </>
  );
}

export default App;