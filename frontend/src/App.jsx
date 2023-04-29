import React from "react"
import Header from '../src/components/Header';
import Landingpage from '../src/screens/Landingpage/Landing';
import Mynotes from '../src/screens/Mynotes/Mynotes';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";



function App() {

  return (
<Router>
<Header />
<Routes>
<Route path="/" element={<Landingpage />} />
<Route path="/mynotes" element={<Mynotes />} />


</Routes>

</Router>
    
    

    
    
  )
}

export default App ;

