import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar';
import Footer from './components/footer';
import Signup from './components/signup'
function App() {
  return (
<>
<div className="App">
  <BrowserRouter>

<Nav/>
{/* adding route to project (means content inside the links) */}
<Routes>
  <Route path="/" ></Route>
  <Route path="/add" element={<h1>Add product component</h1>}></Route>
  <Route path="/update" element={<h1>update component</h1>}></Route>
  <Route path="/logout" element={<h1>logout component</h1>}></Route>
  <Route path="/profile" element={<h1>profile component</h1>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>

</Routes>

</BrowserRouter>
<Signup/>
<Footer/>
</div>
</>
  );
}

export default App;
