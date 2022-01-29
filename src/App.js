import './App.css';

// IMPORT COMPONENTS
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./pages/Home";
import Companies from "./pages/Companies";
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
        <Route exact path="/companies">
          <Companies URL={URL}/>
        </Route>
        <Route exact path="/companies/add">
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
