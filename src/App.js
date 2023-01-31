import React from 'react';
import './App.css';

const data = [
  { id: 'SNARE', letter: 'Q', src: 'http://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'BASS', letter: 'W', src: 'http://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'POP', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'TOM TOM', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'KICK', letter: 'S', src: 'http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg' },
  { id: 'VOCAL', letter: 'D', src: 'http://dl.sndup.net/mjpj/vocal.wav' },
  { id: 'HI-HAT', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'CLAP', letter: 'X', src: 'http://dl.sndup.net/dcbh/clap.wav' },
  { id: 'CHORD', letter: 'C', src: 'http://dl.sndup.net/cnth/chord2.wav'  },
  
]

class DrumPad extends React.Component {
 
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      <div 
          className='drum-pad' 
          id={this.props.id}
          onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
    <div id='drum-machine'>
        <div id='display'><p id='soundname'>{this.state.display}</p></div>
        <div id='drum-pads'>{data.map(d => (
          <DrumPad 
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
    </div>
    )
  }
}



export default App;

