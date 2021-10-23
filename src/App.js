

import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './Home'
import SingleMovie from './components/SingleMovie'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faStar, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
library.add(faStar, faArrowLeft)

function App(){
  
return(
<>
  <Router>
  <Navbar />
      <Switch>
         <Route path="/" exact component={Home} />       
          <Route path="/singleMovie/:title" component={SingleMovie} />       
       </Switch>
    </Router>
</>
)
  
}

export default App;