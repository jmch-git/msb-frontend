import './App.css';

// IMPORT COMPONENTS
import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import CreateForm from "./pages/CreateForm";
import Info from "./pages/Info";

function App() {
  const [ brands, setBrands ] = useState(null);

  const URL = "https://backend-msb.herokuapp.com/brands"

  const getBrands  = async() => {
    const response = await fetch(URL);
    const data = await response.json();
    setBrands(data);
  }

  const createBrands = async (brand) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(brand),
    });
    // update list of people
    getBrands();
  }

  useEffect(() => getBrands(), []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/brands">
          <Brands brands={brands}/>
        </Route>
        <Route exact path="/brands/add">
        <CreateForm createBrands={createBrands}/>
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
