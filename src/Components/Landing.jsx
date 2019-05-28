import React, {Component} from 'react';
import DevTools from '../devTools';
import * as Reactstrap from 'reactstrap';


class Landing extends Component {

  render() {
    return (<div  className="container" style={{
        textAlign: 'center'
      }}>
        <DevTools />
        <br/>
        <br/>
        <h1> Seleccione el rol con el cual quiera interacturar </h1>
        <br/>
        <Reactstrap.Button color="primary" size="lg" block >Centralita</Reactstrap.Button>
        <br/>
        <Reactstrap.Button color="success" size="lg" block>Doctor</Reactstrap.Button>
    </div>

  );
  }

}

export default Landing;
