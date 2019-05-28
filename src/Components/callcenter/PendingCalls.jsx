import React, {Component} from 'react'
import * as Reactstrap from 'reactstrap';
import * as Icons from 'react-icons-kit/md';
import SvgIcon from 'react-icons-kit';
import { toastr } from 'react-redux-toastr';
import { Link } from 'react-router-dom';

class PendingCalls extends Component {
  state = {
    calls: [
      {
        ambulancia:'1111KLM',
        vuzix: '12345',
        horaEntrada:'22:45',
        contrato: 'Andalucía',
        solicitante: 'Martínez Rodriguez, Francisco',
        id:1
      },
      {
        ambulancia:'2222LTH',
        vuzix: '09876',
        horaEntrada:'23:10',
        contrato: 'Andalucía',
        solicitante: 'Ordoñez Jiménez,Mª José',
        id:2
      },
      {
        ambulancia:'3333KBD',
        vuzix: '56789',
        horaEntrada:'23:40',
        contrato: 'Andalucía',
        solicitante: 'García Ruiz, Miguel',
        id:3
      }
    ]
  }


  async buttonToastr(){
    const toastrOptions ={
      icon:<SvgIcon size={50} icon={Icons.ic_phone} style={{color:'##ffffff'}} />
    }
    await toastr.error('Nueva llamada entrante', toastrOptions);
  }

  async activeToastr(){
    var i;
    for(i=0;i++;i%2){
      await this.buttonToastr();
    }
  }


  render(){
    return(
      <Reactstrap.Container style={{marginLeft:'20%'}}>
        <br/>
        <h3>LLamadas en espera</h3>
        <Reactstrap.ListGroup onMouseEnter={()=>setTimeout(this.buttonToastr(),2500)}>
          {this.state.calls.map(c=>

            <Reactstrap.ListGroupItem key={c.id} style={{textAlign:'left'}}>
              <b>Ambulancia: </b> {c.ambulancia}
              <br/>
              <b>Vuzix: </b> {c.vuzix}
              <br/>
              <b>Hora de entrada:</b> {c.horaEntrada}
              <br/>
              <b>Contrato: </b> {c.contrato}
              <br/>
              <b>Solicitante: </b> {c.solicitante}
              <br/>
              <Link to={'/vuzix/callcenter/console'}>
                <Reactstrap.Button color="primary" size="lg" style={{height:"20%",width:"25%"}}>Atender llamada</Reactstrap.Button>
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

export default PendingCalls;
