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
      imageUrl:'',
      box:{}
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box;
    

  }  

  onInputChange = (event) =>{
    this.setState({input:event.target.value});
    
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl:this.state.input});
    console.log('Click');
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
       this.state.input)
    .then(response => this.calculateFaceLocation(response))
    .catch(error => console.log(error));
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
        
        <FaceRecognition imageUrl={this.state.imageUrl}/>
  
      </div>
    );
  }
}

export default App;









