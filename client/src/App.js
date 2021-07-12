import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ChatEngine } from 'react-chat-engine';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './styles.css';

/* this application consists of a login form, one line heading, video player, option box and chat feed*/

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
   image: {
     marginLeft: '15px',
   },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }
}));

const projectID = "ed54c25a-b3f9-4daf-92ff-9d2bd9cf6890";

const App = () => {
  const classes = useStyles();

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static">
        <Typography variant="h4" align="center"> 🔊Microsoft Teams </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>

      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />

    </div>
  );
};

export default App;

/* all the great features of chat feed has been made possible because of chat-engine. Chat-engine uses sockets 
behind the scene and allows you to create simple chat application in just few lines of code, it also allows
complete customization of absolutely any part of the application */
