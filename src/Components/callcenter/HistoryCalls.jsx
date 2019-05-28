import React, {Component} from 'react'
import * as Reactstrap from 'reactstrap';
import { Link } from 'react-router-dom';

class HistoryCalls extends Component {
  state = {
    calls: [
      {
        ambulancia:'1111KBH',
        vuzix: '12345',
        fecha: '11/05/2018 23:15',
        duracion: '25 min',
        id:'A20180511',
        doctor: 'Manuel Rodriguez',
        contrato: 'Andalucía',
        solicitante: 'Martínez Rodriguez, Francisco'
      },
      {
        ambulancia:'2222KAL',
        vuzix: '09876',
        fecha: '09/05/2018 15:35',
        duracion: '35 min',
        id:'B20180511',
        doctor: 'Pedro García',
        contrato: 'Andalucía',
        solicitante: 'Ordoñez Jiménez,Mª José'
      },

    ]
  }


  render(){
    return(
      <Reactstrap.Container style={{marginLeft:'20%'}}>
        <br/>
        <h3>Historial de llamadas</h3>
        <Reactstrap.ListGroup>
          {this.state.calls.map(c=>

            <Reactstrap.ListGroupItem key={c.id} style={{textAlign:'left'}}>
              <b>N.Archivo : </b> {c.id}
              <br/>
              <b>Fecha : </b> {c.fecha}
              <br/>
              <b>Solicitante: </b> {c.solicitante}
              <br/>
              <b>Contrato: </b> {c.contrato}
              <br/>
              <b>Doctor : </b> {c.doctor}
              <br/>
              <b>Ambulancia: </b> {c.ambulancia}
              <br/>
              <b>Vuzix: </b> {c.vuzix}
              <br/>
              <b>Duración: </b> {c.duracion}
              <br/>
              <Link to={'/ssg-frontv2/callcenter/videoPlayer/id=X20180101'}>
                  <Reactstrap.Button color="primary" size="mg">Reproducir</Reactstrap.Button>
              </Link>
            </Reactstrap.ListGroupItem>

          )}
        </Reactstrap.ListGroup>
        <br/>

        <Reactstrap.Pagination>
          <Reactstrap.PaginationItem>
            <Reactstrap.PaginationLink previous href="#"/>
          </Reactstrap.PaginationItem>

          <Reactstrap.PaginationItem>
            <Reactstrap.PaginationLink>
              1
            </Reactstrap.PaginationLink>
          </Reactstrap.PaginationItem>

          <Reactstrap.PaginationItem>
            <Reactstrap.PaginationLink>
              2
            </Reactstrap.PaginationLink>
          </Reactstrap.PaginationItem>

          <Reactstrap.PaginationItem>
            <Reactstrap.PaginationLink>
              3
            </Reactstrap.PaginationLink>
          </Reactstrap.PaginationItem>

          <Reactstrap.PaginationItem>
            <Reactstrap.PaginationLink>
              4
            </Reactstrap.PaginationLink>
          </Reactstrap.PaginationItem>

          <Reactstrap.PaginationItem>
            <Reactstrap.PaginationLink next href="#"/>
          </Reactstrap.PaginationItem>

        </Reactstrap.Pagination>
      </Reactstrap.Container>
    );
  }


}

export default HistoryCalls;
