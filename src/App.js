import React from 'react';
import logo from './logo.svg';
import './App.css';
import IMAGE from './Developer.png'
import Phot from './Phot';
import Names from './Names';
import Button from './Button';
function App() {;
  return (
    <div className="App">
     <Phot IMAGE={IMAGE}/>
     <Names names="ALA DIN"/>
     <Names names="HABIBI"/>
     <Button BTN= "FB" url='https://www.facebook.com/'/>
     <Button BTN="IN" url='https://www.linkedin.com/'/>     

    </div>
  );
}

export default App;
