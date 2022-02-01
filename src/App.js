import './App.css';

// IMPORT COMPONENTS
import { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import CreateForm from "./pages/CreateForm";
import Info from "./pages/Info";

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);
  
  
  
  
  const [ brands, setBrands ] = useState(null);

  const URL = "https://backend-msb.herokuapp.com/brands"

  const getBrands  = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    setBrands(data);
  }

  const createBrands = async (brand) => {
    if(!user) return;
    const token = user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(brand),
    });
    // update list of people
    getBrands();
  }

  useEffect(() => getBrands(), []);

  return (
    <div className="App">
      <NavBar user={user} />
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route exact path="/brands">
          <Brands brands={brands}/>
        </Route>
        <Route exact path="/brands/add">
        <CreateForm createBrands={createBrands} user={user}/>
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
