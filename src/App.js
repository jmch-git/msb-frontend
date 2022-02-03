import './App.css';

// IMPORT COMPONENTS
import { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import CreateForm from "./pages/CreateForm";
import Info from "./pages/Info";
import EditForm from "./pages/EditForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);


  const [brands, setBrands] = useState(null);

const URL = "https://backend-msb.herokuapp.com/brands/"

  const getBrands = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBrands(data);
  }

  const createBrands = async (brand) => {
    if (!user) return;
    const token = await user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(brand),
    });
    getBrands();
  };

  const updateBrands = async (brand, id) => {
    if (!user) return;
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(brand),
    });
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
          <Brands brands={brands} />
        </Route>
        <Route exact path="/brands/add">
          <CreateForm createBrands={createBrands} user={user} />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route
          path="/brands/:id"
          render={(rp) => (
            <EditForm
              brands={brands}
              user={user}
              updateBrands={updateBrands}
              {...rp}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
