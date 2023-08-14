import React from "react";

import "./Playlist.css";

import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component{
    constructor(props){
        super(props);

        this.handleNameChange=this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }

    render(){
        return(
            <div className="Playlist">
            <input onChange={this.handleNameChange} defaultValue={'new playlist'}/>
            <TrackList track={this.props.playListTracks}
                       isRemoval={true}
                       onRemove={this.props.onRemove}/>
            <button className="Playlist-save" onClick={this.props.onSave}>save to spotify</button>
            </div>
        );
    }
}

export default Playlist;