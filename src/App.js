import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar';
import Footer from './components/footer';
import Signup from './components/signup';
import Private from './components/priv_component';
import Login from './components/login';
import Addproduct from './components/Addproduct'
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          {/* Adding routes to the project (content inside the links) */}
          <Routes>
            <Route path="/" element={<Private />}>
              <Route index element={<h1>Home component</h1>} />
              <Route path="/add" element={<Addproduct/>} />
              <Route path="/update" element={<h1>Update component</h1>} />
              <Route path="/logout" element={<h1>Logout component</h1>} />
              <Route path="/profile" element={<h1>Profile component</h1>} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
