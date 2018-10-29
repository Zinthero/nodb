import React, { Component } from 'react'
import Stars from './Stars'
import gif from '../images/tenor.gif'


export default class SongCard extends Component {
    constructor(){
        super()
        this.state={
            title:'',
            edit:false
        }
        this.handleTitleChange=this.handleTitleChange.bind(this)
    }

    componentDidMount(){
        this.setState({title: this.props.songs.title})
    }

    handleTitleChange(e){
        this.setState({title:e.target.value})
    }

    toggleEdit=()=>{
        this.setState({edit: !this.state.edit})
    }

  render() {
      console.log(this.state.edit)
    return (
      <div>
        {
            this.state.edit ?
            (
                <div>
                    <input value={this.state.title} type='text' onChange={this.handleTitleChange}/>
                    <button type="button" class="btn btn-primary" onClick={()=>{
                        this.props.updateSong(this.state.title,this.props.songs.id)
                        this.toggleEdit()
                    }}>Submit</button>
                    <button type="button" class="btn btn-danger" onClick={this.toggleEdit}>Cancel</button>
                </div>
            ):
            (
                <div>
                    {this.props.songs.title}
                    
                    <button type="button" class="btn btn-primary" onClick={this.toggleEdit}>Edit</button>
                    <button type="button" class="btn btn-danger" onClick={()=> this.props.deleteSong(this.props.songs.id)}>Delete</button>
                    <img src={gif} height="100" width="100"/>
                    <Stars/>
                    </div>
                    
            )
        }
      </div>
    )
  }
}
