import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import SideNav, {Nav, NavIcon, NavText} from 'react-sidenav';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SvgIcon from 'react-icons-kit';
import {ic_aspect_ratio} from 'react-icons-kit/md/ic_aspect_ratio';
import * as All from 'react-icons-kit/md';
import {DropdownItem} from 'reactstrap';

class HeaderCall extends Component {
  render() {
    return (
    // <div className="fullMenu"style={{background: '#0d47a1', color: '#FFF', width: 250, marginBottom:0, padding:0,top:0}} >
    //     <SideNav highlightColor='#cddc39' highlightBgColor='#757575' defaultSelected='' style={{bottom:'0'}}>
    //       <img src="http://www.grupossg.com/images/logogrupossg.png" alt="Grupo SSG" style={{height:"125px", width:"195px"}}/>
    //         <Nav id='index'>
    //             <NavIcon><SvgIcon size={30} icon={All.ic_home}/></NavIcon>
    //             <NavText> Inicio </NavText>
    //         </Nav>
    //         <Nav id='console'>
    //             <NavIcon><SvgIcon size={30} icon={All.ic_aspect_ratio}/></NavIcon>
    //             <NavText> Consola </NavText>
    //         </Nav>
    //         <Nav id='calls'>
    //           <NavIcon><SvgIcon size={30} icon={All.ic_phone}/></NavIcon>
    //           <NavText> Llamadas activas </NavText>
    //         </Nav>
    //         <Nav id='history'>
    //           <NavIcon><SvgIcon size={30} icon={All.ic_watch_later}/></NavIcon>
    //           <NavText> Historial llamadas </NavText>
    //         </Nav>
    //     </SideNav>
    //
    // </div>

    <SideNav className="sidenav---sidenav---_2tBP sidenav---expanded---1KdUL" style={{background: '#0d47a1', color: '#FFF', width: 250}} >
      <Link to={'/'}><img src="http://www.grupossg.com/images/logogrupossg.png" alt="Grupo SSG" style={{height:"140px", width:"205px"}}/></Link>
      <br/>
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" >
          <NavIcon >
            <SvgIcon size={30} icon={All.ic_home}  style={{color:'#ffff00'}} />
          </NavIcon>
          <NavText style={{color:'#ffff00'}} >
            Inicio
          </NavText>
        </NavItem>

        <NavItem eventKey="console">
          <NavIcon  >
            <SvgIcon size={30} icon={All.ic_aspect_ratio}  style={{color:'#ffff00'}}/>
          </NavIcon>
          <NavText  style={{color:'#ffff00'}}>
            Consola
          </NavText>
        </NavItem>

        <NavItem eventKey="activeCalls">
          <NavIcon >
            <SvgIcon size={30} icon={All.ic_contact_phone}  style={{color:'#ffff00'}}/>
          </NavIcon>
          <NavText  style={{color:'#ffff00'}}>
            Llamadas activas
          </NavText>
        </NavItem>

        <NavItem eventKey="history">
          <NavIcon>
            <SvgIcon size={30} icon={All.ic_watch_later}  style={{color:'#ffff00'}}/>
          </NavIcon>
          <NavText style={{color:'#ffff00'}}>
            Historial llamadas
          </NavText>
        </NavItem>


      </SideNav.Nav>
    </SideNav>
  )}



}

export default HeaderCall;
