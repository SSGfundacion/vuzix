import React, { Component} from 'react';
import Youtube from 'react-youtube';

class VideoPlayer extends Component{
  renderContent(){

    const opts = {
      height: '680',
      width: '980',
      playerVars:{
        autoplay:0
      }
    };
    return(
      <div className="container">
        <Youtube
          videoId="Z4bOZL6L8g8"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
  render(){
    return(
      <div className="container">
        <br/>
        <h4 style={{textAlign:'center',color:'blue'}}>Reproduciendo Archivo: X20180101</h4>
        <div style={{textAlign:'center', width:'Auto', margin:'0'}}>
          {this.renderContent()}
        </div>

      </div>
    );
  }
  _onReady(event){
    event.target.pauseVideo();
  }

}

export default VideoPlayer;
