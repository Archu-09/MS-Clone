import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({         /* styling of video streaming part*/
  video: {
    width: '450px',                              
    [theme.breakpoints.down('xs')]: {            
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>                 
      {stream && (                                           /* streaming of our own video*/
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (               /* if the given condition is true then it will play the user's video*/
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;   

/* the default name of the users in the video player has been set to "Name", user's name will be displayed
on the top of their video if they will typed in their name in option box otherwise, "Name" will be displayed 
as their name. */