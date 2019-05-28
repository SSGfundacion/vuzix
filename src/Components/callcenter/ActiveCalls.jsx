import React, {Component} from 'react'
import * as Reactstrap from 'reactstrap';
import { Link } from 'react-router-dom';

class ActiveCalls extends Component {
  state = {
    calls: [
      {
        ambulancia:'1111KBH',
        vuzix: '12345',
        doctor:'Manuel Rodríguez',
        horaEntrada:'22:45',
        contrato:'Andalucía',
        solicitante:'Martínez Rodriguez, María'
      },
      {
        ambulancia:'2222KAL',
        vuzix: '09876',
        doctor:'Ana Martínez',
        horaEntrada:'23:10',
        contrato:'Andalucía',
        solicitante:'Jimenez Perez, Antonio'
      },
      {
        ambulancia:'3333KAB',
        vuzix: '56789',
        doctor:'Pedro García',
        horaEntrada:'23:40',
        contrato:'Andalucía',
        solicitante:'García Martinez, Juan Andres'
      }
    ]
  }


  render(){
    return(
      <Reactstrap.Container style={{marginLeft:'20%'}}>
        <br/>
        <h3>LLamadas activas</h3>
        <Reactstrap.ListGroup>
          {this.state.calls.map(c=>
            <Link to={'/ssg-frontv2/callcenter/activeCall/id=A20180510'}>
            <Reactstrap.ListGroupItem key={c.ambulancia}  style={{textAlign:'left'}}>
              <b>Ambulancia: </b> {c.ambulancia}
              <br/>
              <b>Vuzix: </b> {c.vuzix}
              <br/>
              <b>Doctor:</b> {c.doctor}
              <br/>
              <b>Hora de entrada</b> {c.horaEntrada}
              <br/>
              <b>Contrato: </b> {c.contrato}
              <br/>
              <b>Solicitante: </b> {c.solicitante}
            </Reactstrap.ListGroupItem>
            <br/>
            </Link>
          )}
        </Reactstrap.ListGroup>

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

export default ActiveCalls;
