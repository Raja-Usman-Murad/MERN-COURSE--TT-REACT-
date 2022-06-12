import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Footer from "./component/Footer";
import Error from "./component/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/about" component={About} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/registration" component={Registration} />

        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
