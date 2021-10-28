import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Members, About, Merch, Events, Discover } from "./components";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })


  return (

    <div className="App">
        {isLoading?
          <Loading/>:
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/merch" exact component={() => <Merch />} />
              <Route path="/members" exact component={() => <Members />} />
              <Route path="/events" exact component={() => <Events />} />
              <Route path="/discover" exact component={() => <Discover />} />
            </Switch>
          </Router>
        }

    </div>
  );
}

export default App;
