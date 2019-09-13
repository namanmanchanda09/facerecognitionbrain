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

class App extends React.Component{
  constructor(){
    super();
    this.state={
      input:'',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSubmit = () =>{
    console.log('Click');
  }



  render(){
    return (
      <div className="App">
        <Particles className='particles' 
            params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        
        {/* <FaceRecognition /> */}
  
      </div>
    );
  }
}

export default App;









