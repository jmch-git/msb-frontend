import './App.css';

// IMPORT COMPONENTS
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import CreateForm from "./pages/CreateForm";
import Info from "./pages/Info";

function App() {
  // URL should have backend Heroku URL
  const URL = ""

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/brands">
          <Brands URL={URL}/>
        </Route>
        <Route exact path="/brands/add">
          <CreateForm />
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
