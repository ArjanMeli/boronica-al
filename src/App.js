import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Galeri from './Galeri';
import Produktet from './Produktet';











import './jani.css';
import Rejat from './Rejat';


function App(){

  return(

    <div className="App">
     
     


      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/galeri' element={<Galeri/>}/>
        <Route path='/produktet' element={<Produktet/>}/>
        <Route path='/rejat' element={<Rejat/>}/>



      </Routes>



     

      

    </div>
  )
}






    
   


export default App;















  


















