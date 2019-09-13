import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css';
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: 'b7b1ee303ec349e39623a22a40912d16'
});


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
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response)
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
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
        
        <FaceRecognition />
  
      </div>
    );
  }
}

export default App;









