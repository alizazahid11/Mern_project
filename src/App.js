import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar'
function App() {
  return (
<>
<div className="App">
  <BrowserRouter>

<Nav/>
{/* adding route to project (means content inside the links) */}
<Routes>
  <Route path="/" element={<h1>product component</h1>}></Route>
  <Route path="/add" element={<h1>Add product component</h1>}></Route>
  <Route path="/update" element={<h1>update component</h1>}></Route>
  <Route path="/logout" element={<h1>logout component</h1>}></Route>
  <Route path="/profile" element={<h1>profile component</h1>}></Route>
</Routes>

</BrowserRouter>
</div>
</>
  );
}

export default App;
