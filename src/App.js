import React, {useState, useEffect, useCallback} from 'react';
import Loading from './components/Loading';
import LSwitch from "react-switch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Members, About, Merch, Events, Discover } from "./components";


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [checked, setLightOn] = useState(false);
  const [count, setCount] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  })

const switchOn = () => {
    setLightOn(!checked);
    var body = document.body;
    body.classList.toggle("light-mode");
}

const blub = <i style={{color:"#E0D268"}}className="fas fa-sun fa-lg mt-n2"></i>;

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
        <div className="fixed-top text-right mt-1">
        <label>
           <LSwitch onChange={() => switchOn()} checked={checked} height={25} handleDiameter={0} onColor="#F5DADF" offColor="#303030" offHandleColor="#131313" onHandleColor="#131313" uncheckedHandleIcon={blub} checkedIcon={false} uncheckedIcon={false}/>
         </label>
         </div>


    </div>
  );
}

export default App;
