import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar';
import Footer from './components/footer';
import Signup from './components/signup';
import Private from './components/priv_component';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          {/* Adding routes to the project (content inside the links) */}
          <Routes>
            <Route element={<Private/>}>
            <Route path="/" element={<h1>Home component</h1>} />
            <Route path="/add" element={<h1>Add product component</h1>} />
            <Route path="/update" element={<h1>Update component</h1>} />
            <Route path="/logout" element={<h1>Logout component</h1>} />
            <Route path="/profile" element={<h1>Profile component</h1>} />
            </Route>
            <Route path="/signup" element={<Signup />} />

          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
