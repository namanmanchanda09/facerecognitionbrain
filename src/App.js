import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';
import Particles from 'react-particles-js'

const particlesOptions = {
  particles: {
    number:{
      value: 100,
      density: {
        enable:true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles' 
          params={particlesOptions}
        />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      
      {/* <FaceRecognition /> */}

    </div>
  );
}

export default App;







