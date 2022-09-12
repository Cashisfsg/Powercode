import './App.css';
import Navbar from './components/Navbar';
import Benefits from './containers/Benefits';
import Courses from './containers/Courses';
import Footer from './containers/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Benefits />
      <Courses />
      <Footer />
    </>
  );
}

export default App;
