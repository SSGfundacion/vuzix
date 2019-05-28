import React, {Component} from 'react';
import {Link,BrowserRouter as Router , Route} from 'react-router-dom';
// import SideNav, {Nav, NavIcon, NavText} from 'react-sidenav';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SvgIcon from 'react-icons-kit';
import * as All from 'react-icons-kit/md';
import Landing from './Landing';
import VideoChatCall from './callcenter/VideoChatCall';
import VideoChatSub from './callcenter/VideoChatSub';
import ActiveCalls from './callcenter/ActiveCalls';
import HistoryCalls from './callcenter/HistoryCalls';
import VideoPlayer from './VideoPlayer';
import PendingCalls from './callcenter/PendingCalls';
import logogrupossg  from '../static/logogrupossg.png';

class Header extends Component {
  render() {
    return (

    <Router>
      <Route render={({location, history}) =>(
        <React.Fragment>


          <SideNav className="sidenav---sidenav---_2tBP sidenav---expanded---1KdUL" style={{background: '#0d47a1', color: '#FFF', width: 250}} onSelect={(selected) =>{

            const to = '/ssg-frontv2/'+selected;
            if(location.pathname !==to){
              history.push(to);
            }

          }} >
            <Link to={'/ssg-frontv2'}><img src={logogrupossg} alt="Grupo SSG" style={{height:"140px", width:"205px"}}/></Link>
            <br/>
            <SideNav.Nav>

              <NavItem eventKey="callcenter/pendingCalls">
                <NavIcon style={{marginTop:10}}  >
                  <SvgIcon size={30} icon={All.ic_video_call}  style={{color:'#ffff00'}}/>
                </NavIcon>
                <NavText  style={{color:'#ffff00'}}>
                  Centralita
                </NavText>
              </NavItem>

              <NavItem eventKey="callcenter/activeCalls">
                <NavIcon style={{marginTop:10}} >
                  <SvgIcon size={30} icon={All.ic_contact_phone}  style={{color:'#ffff00'}}/>
                </NavIcon>
                <NavText  style={{color:'#ffff00'}}>
                  Llamadas activas
                </NavText>
              </NavItem>

              <NavItem eventKey="callcenter/historyCalls">
                <NavIcon style={{marginTop:10}} >
                  <SvgIcon size={30} icon={All.ic_watch_later}  style={{color:'#ffff00'}}/>
                </NavIcon>
                <NavText style={{color:'#ffff00'}}>
                  Historial llamadas
                </NavText>
              </NavItem>


            </SideNav.Nav>
          </SideNav>
          <main>
            <Route path="/ssg-frontv2" exact component={props=> <PendingCalls/>}/>
            <Route path="/ssg-frontv2/callcenter/console" exact component={props => <VideoChatCall/>} />
            <Route path="/ssg-frontv2/callcenter/activeCalls" exact component={props => <ActiveCalls />} />
            <Route path="/ssg-frontv2/callcenter/historyCalls" exact component={props => <HistoryCalls />} />
            <Route path="/ssg-frontv2/callcenter/videoPlayer/id=X20180101" exact component={props => <VideoPlayer/>} />
            <Route path="/ssg-frontv2/callcenter/activeCall/id=A20180510"  exact component={props => <VideoChatSub/>} />
            <Route path="/ssg-frontv2/callcenter/pendingCalls" exact component={props => <PendingCalls/>} />
          </main>
        </React.Fragment>

      )}


    />



    </Router>
  )}



}

export default Header;
