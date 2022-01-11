import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Counter  from "./components/Counter"
import Home from './components/Home';
import State from './components/State';
import Posts from './components/Posts'
import Users from './components/Users';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import LifeCycle from './components/LifeCycle';
function App() {

// Here we are  Using the react-router-dom package for routing the components
    // command - npm install react-router-dom

  return (
    

    <main>
     <Router>
     <header>
        <Nav/>
      </header>
      <section className='container'>
        <Routes>
          <Route path="/" element={<Home name="Welcome To React world"/>} />

          <Route path="/counter" element={<Counter/>} />
          <Route path="/state" element={<State/>} />
          <Route path="/post" element={<Posts/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/editproduct/:id" element={<EditProduct/>} />
          <Route path="/life" element={<LifeCycle/>} />

          
        </Routes>
        
      </section>
     </Router>
    </main>
  );
}

export default App;
