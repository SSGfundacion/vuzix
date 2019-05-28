import React, {Component} from 'react'
import VideoChat from './VideoChat/VideoChat';
import * as Reactstrap from 'reactstrap';
import * as Icons from 'react-icons-kit/md';
import SvgIcon from 'react-icons-kit';
import { Link } from 'react-router-dom';

class VideoChatCall extends Component {
  state = {
    serial: '',
    ambulancia: '',
    doctors: [
      {
        name: 'Manuel Rodriguez',
        especialidad: 'Traumatología',
        id: 1,
        photo: "https://drsafehands.com/resources/assets/images/doctor.png"
      }, {
        name: 'Laura Vázquez',
        especialidad: 'Familia',
        id: 2,
        photo: "http://pluspng.com/img-png/png-woman-doctor-circumcision-clinic-cardiff-567.png"
      }, {
        name: 'Pedro García',
        especialidad: 'Cirugía',
        id: 3,
        photo: "http://pngimg.com/uploads/doctor/doctor_PNG16009.png"
      }
    ]
  }
  componentDidMount(){
    this.timer = setInterval(this.buttonToastr(),2000);
  }

  componentDidUpdate(){
    clearInterval(this.timer);
  }


  matriculaGen() {
    var matricula = "";
    var letrasP = "KLMNOP";
    var letrasB = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros = "0123456789";
    for (var i = 0; i < 5; i++) {
      matricula += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    matricula +=letrasP.charAt(Math.floor(Math.random() * letrasP.length))
    for (var j = 0; j<2; j++){
      matricula+=letrasB.charAt(Math.floor(Math.random() * letrasB.length));
    }
    return matricula;

  }

  serialGen() {
    var serial = "";
    var numeros = "0123456789";
    for (var i = 0; i < 5; i++) {
      serial += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    return serial;

  }


  async buttonToastr(){
    let [s,a] = await [this.serialGen(), this.matriculaGen()];
    await this.setState({ambulancia:a,serial:s});
  }

  async refreshPage(){
    await window.location.reload();
  }

  renderContent() {
        return (
        <Reactstrap.Container id="containerVid">.
          <h3 style={{textAlign:'center'}}> Llamada en curso</h3>
          <div style={{
              textAlign: 'center',
              fontSize: 15,
            }}>
            <b>Ambulancia: </b>
            {this.state.ambulancia}
            <br/>
            <b>Vuzix: </b>
            {this.state.serial}
            <br/>
            <b>Solicitante: </b>
            Martinez Ruiz, Pablo
            <br/>
            <b>Contrato: </b>
            Andalucía
          </div>
          <Reactstrap.Row>
            {/* COMPONENTE DE VIDEOCHAT */}
            <Reactstrap.Col xs="6" md="6" lg="8" xl="8">
              <div>
              <VideoChat />
              </div>
            </Reactstrap.Col>

            {/* TABLA CON LOS MÉDICOS DISPONIBLES */}
            <Reactstrap.Col xs="4" md="4" lg="4" xl="4" style={{left:"12%",marginTop:50}}>
              <h3 style={{
                  textAlign: 'center'
                }}>Médicos disponibles</h3>
              <Reactstrap.Table  style={{paddingLeft:20}} >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Asignar</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.doctors.map(d=>
                    <tr>
                      <td>
                        <img src={d.photo} alt="DOCTOR" style={{height:"80px", width:"70px"}}/>
                      </td>
                      <td>
                        <b>{d.name}</b><br/>{d.especialidad}
                      </td>
                      <td>
                        <Reactstrap.Button color="success">
                          <Link to = {'/ssg-frontv2/callcenter/pendingCalls'}>
                            <SvgIcon size={30} icon={Icons.ic_phone}  style={{color:'#f4ff81 '}} />
                          </Link>
                        </Reactstrap.Button>
                      </td>
                    </tr>

                  )}
                </tbody>
              </Reactstrap.Table>
              <br/>
              <Reactstrap.Button color="info"><h4>Más médicos</h4></Reactstrap.Button>

            </Reactstrap.Col>
          </Reactstrap.Row>

        </Reactstrap.Container>
        );
      }

  render() {

    return(

     <div>{this.renderContent()}</div>

    );
  }

}

export default VideoChatCall;
