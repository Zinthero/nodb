import React, { Component } from 'react'
import axios from 'axios'
import SongCard from './SongCard'
import Header from './Header'
import SonOfRobot from '../audio/Rick Astley - Never Gonna Give You Up (Video).mp3'



export default class Songs extends Component {
    constructor(){
        super()
        this.state={
            songs:[],
            userInput:''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleAddSong = this.handleAddSong.bind(this)
        this.deleteSong = this.deleteSong.bind(this)
        this.updateSong=this.updateSong.bind(this)
    }
    componentDidMount(){
        axios.get('api/songs').then(results=>{
            this.setState({songs:results.data})
        })
    }
    handleInput(e){
        this.setState({userInput: e.target.value})
    }

    handleAddSong(){
        axios.post('/api/songs',{title: this.state.userInput}).then(results=>{
            this.setState({
                songs:results.data,
                userInput:''
            })
        })
    }
    deleteSong(id){
        axios.delete(`/api/songs/${id}`,).then(results=>{
            this.setState({
                songs: results.data
            })
        })
    }
    updateSong(title, id){
        axios.put(`/api/songs/${id}`,{title}).then(results=>{
            this.setState({
                songs: results.data
            })
        })
    }
  render() {
      let songList=this.state.songs.map(songs=>{
    return (
        <SongCard
        songs={songs}
        deleteSong={this.deleteSong}
        updateSong={this.updateSong}>
        </SongCard>
        
     
    )
  })
  return(
      <div className="card card-body mb-3">
      
          <Header/>
          <input value={this.state.userInput} type= 'text' placeholder ='New Song' onChange={this.handleInput}/>
          <button type="button" class="btn btn-success ml-5 " onClick={this.handleAddSong}>Add</button>
          {songList}
          <audio autoPlay>
          <source src={SonOfRobot}/>
            <p>If you are reading this, it is because your browser does not support the audio element.     </p>
            </audio>
      </div>
  )
}
}

