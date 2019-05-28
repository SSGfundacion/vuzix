import React, {Component} from 'react'
import * as Reactstrap from 'reactstrap';
import config from './VideoChat/config.json';
import VideoChatSub from './VideoChat/VideoChatSub';
import './ChatSub.css';
import 'opentok-solutions-css';

class VideoChatSubCallCenter extends Component{
  state={
    serial:'123456',
    ambulancia: '9876KPT',
    solicitante: 'Martinez Rodriguez, Francisco',
    doctor: {
      name: 'Ana Martínez',
      especialidad: 'Familia'
    }
  }

  render(){
    return(
      <Reactstrap.Container style={{marginLeft:'20%'}}>
        <br/>
        <Reactstrap.Row>
          <Reactstrap.Col sm="4" xs="4">
            <h4> Doctor </h4>
            <h6> {this.state.doctor.name} </h6>
            <h6> {this.state.doctor.especialidad} </h6>
          </Reactstrap.Col>

          <Reactstrap.Col sm="4" xs="4">
            <h4>Modo espectador</h4>
          </Reactstrap.Col>
          <Reactstrap.Col sm="4" xs="4">
            <h4> Ambulancia </h4>
            <h6> {this.state.ambulancia} </h6>
            <h6> {this.state.solicitante} </h6>
          </Reactstrap.Col>
        </Reactstrap.Row>
        <Reactstrap.DropdownItem divider />
        <div style={{align:'center', width:'Auto'}} id="layout">
                <VideoChatSub />

        </div>
      </Reactstrap.Container>
    )
  }
}

export default VideoChatSubCallCenter;
