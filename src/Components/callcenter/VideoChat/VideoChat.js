/* Let CRA handle linting for sample VideoApp */
import React, {Component} from 'react';
import Spinner from 'react-spinner';
import classNames from 'classnames';
import * as Reactstrap from 'reactstrap';
import SvgIcon from 'react-icons-kit';
import * as Icons from 'react-icons-kit/md';

import AccCore from 'opentok-accelerator-core';
import 'opentok-solutions-css';

import config from './config.json';
import './VideoApp.css';

let otCore;
const otCoreOptions = {
  credentials: {
    apiKey: config.apiKey,
    sessionId: config.sessionId,
    token: config.tokenPublisher
  },
  // A container can either be a query selector or an HTML Element
  streamContainers(pubSub, type, data, stream) {
    return {
      publisher: {
        camera: '#cameraPublisherContainer',
        screen: '#screenPublisherContainer'
      },
      subscriber: {
        camera: '#cameraSubscriberContainer',
        screen: '#screenSubscriberContainer'
      }
    }[pubSub][type];
  },
  controlsContainer: '#controls',
  packages: [
    'annotation', 'screenSharing'
  ],
  communication: {
    callProperites: null, // Using default
  },
  screenSharing: {
    extensionID: 'plocfffmbcclpdifaikiikgplfnepkpo',
    annotation: true,
    externalWindow: false,
    dev: true,
    screenProperties: {
      insertMode: 'VideoAppend',
      width: '100%',
      height: '100%',
      showControls: false,
      style: {
        buttonDisplayMode: 'off'
      },
      videoSource: 'window',
      fitMode: 'contain' // Using default
    }
  },

  annotation: {
    absoluteParent: {
      publisher: '.VideoApp-video-container',
      subscriber: '.VideoApp-video-container'
    }
  }
};

/**
 * Build classes for container elements based on state
 * @param {Object} state
 */
const containerClasses = (state) => {
  const {active, meta, localAudioEnabled, localVideoEnabled} = state;
  const sharingScreen = meta
    ? !!meta.publisher.screen
    : false;
  const viewingSharedScreen = meta
    ? meta.subscriber.screen
    : false;
  const activeCameraSubscribers = meta
    ? meta.subscriber.camera
    : 0;
  const activeCameraSubscribersGt2 = activeCameraSubscribers > 2;
  const activeCameraSubscribersOdd = activeCameraSubscribers % 2;
  const screenshareActive = viewingSharedScreen || sharingScreen;
  return {
    controlClass: classNames('VideoApp-control-container', {
      hidden: !active
    }),
    localAudioClass: classNames('ots-video-control circle audio', {
      hidden: !active,
      muted: !localAudioEnabled
    }),
    localVideoClass: classNames('ots-video-control circle video', {
      hidden: !active,
      muted: !localVideoEnabled
    }),
    localCallClass: classNames('ots-video-control circle end-call', {
      hidden: !active
    }),
    cameraPublisherClass: classNames('video-container', {
      hidden: !active,
      small: !!activeCameraSubscribers || screenshareActive,
      left: screenshareActive
    }),
    screenPublisherClass: classNames('video-container', {
      hidden: !active || !sharingScreen
    }),
    cameraSubscriberClass: classNames('video-container', {
      hidden: !active || !activeCameraSubscribers
    }, {
      'active-gt2': activeCameraSubscribersGt2 && !screenshareActive
    }, {
      'active-odd': activeCameraSubscribersOdd && !screenshareActive
    }, {small: screenshareActive}),
    screenSubscriberClass: classNames('video-container', {
      hidden: !viewingSharedScreen || !active
    })
  };
};

const connectingMask = () => <div className="VideoApp-mask">
  <Spinner/>
  <div className="message with-spinner">Conectando</div>
</div>;

const startCallMask = start => <div className="VideoApp-mask">
  <button className="message button clickable" onClick={start}>Atender llamada</button>
</div>;

class VideoChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      active: false,
      publishers: null,
      subscribers: null,
      meta: null,
      localAudioEnabled: true,
      localVideoEnabled: true
    };
    this.startCall = this.startCall.bind(this);
    this.endCall = this.endCall.bind(this);
    this.toggleLocalAudio = this.toggleLocalAudio.bind(this);
    this.toggleLocalVideo = this.toggleLocalVideo.bind(this);
  }

  componentDidMount() {
    otCore = new AccCore(otCoreOptions);
    otCore.connect().then(() => this.setState({connected: true}));
    const events = [
      'subscribeToCamera',
      'unsubscribeFromCamera',
      'subscribeToScreen',
      'unsubscribeFromScreen',
      'startScreenShare',
      'endScreenShare'
    ];

    events.forEach(event => otCore.on(event, ({publishers, subscribers, meta}) => {
      this.setState({publishers, subscribers, meta});
    }));
  }

  startCall() {
    otCore.startCall().then(({publishers, subscribers, meta}) => {
      this.setState({publishers, subscribers, meta, active: true});
    }).catch(error => console.log(error));
  }

  endCall() {
    otCore.endCall();
    this.setState({active: false});
  }

  toggleLocalAudio() {
    otCore.toggleLocalAudio(!this.state.localAudioEnabled);
    this.setState({
      localAudioEnabled: !this.state.localAudioEnabled
    });
  }

  toggleLocalVideo() {
    otCore.toggleLocalVideo(!this.state.localVideoEnabled);
    this.setState({
      localVideoEnabled: !this.state.localVideoEnabled
    });
  }

  render() {
    const {connected, active} = this.state;
    const {
      localAudioClass,
      localVideoClass,
      localCallClass,
      controlClass,
      cameraPublisherClass,
      screenPublisherClass,
      cameraSubscriberClass,
      screenSubscriberClass
    } = containerClasses(this.state);

    return (<div className="VideoApp">
      <div className="VideoApp-main">
        <Reactstrap.Container>
          <Reactstrap.Row>
            <Reactstrap.Col xs="6" sm="4"></Reactstrap.Col>
            <Reactstrap.Col xs="6" sm="4" style={{right:"4%"}}>
              <div id="controls" className={controlClass} style={{marginRight:"30%"}}>
                <div className="fakeButtonGrey">
                  <div style={{
                      marginTop: 10
                    }}>
                    <SvgIcon size={32} icon={Icons.ic_image} style={{
                        color: '#000000'
                      }}/>
                  </div>
                </div>

                <div className="fakeButtonGrey">
                  <div style={{
                      marginTop: 10
                    }}>
                    <SvgIcon size={32} icon={Icons.ic_video_call} style={{
                        color: '#000000'
                      }}/>
                  </div>
                </div>
                <div className={localAudioClass} onClick={this.toggleLocalAudio}/>
                <div className={localVideoClass} onClick={this.toggleLocalVideo}/>
                <div className={localCallClass} onClick={this.endCall}/>
              </div>
            </Reactstrap.Col>
            <Reactstrap.Col sm="4"></Reactstrap.Col>

          </Reactstrap.Row>
        </Reactstrap.Container>


        <div className="VideoApp-video-container">
          {!connected && connectingMask()}
          {connected && !active && startCallMask(this.startCall)}
          <div id="cameraPublisherContainer" className={cameraPublisherClass}/>
          <div id="screenPublisherContainer" className={screenPublisherClass}/>
          <div id="cameraSubscriberContainer" className={cameraSubscriberClass}/>
          <div id="screenSubscriberContainer" className={screenSubscriberClass}/>
        </div>
        <div id="chat" className="VideoApp-chat-container"/>
      </div>
    </div>);
  }
}

export default VideoChat;
