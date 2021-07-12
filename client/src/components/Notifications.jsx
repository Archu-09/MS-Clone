import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

/* will get the notification on the option form if someone will try to join a call
 also, contain an option to answer a call i.e. admit button */ 

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h4>{call.name} is in the waiting room</h4>
          <Button variant="contained" color="secondary" halfWidth onClick={answerCall}>
            Admit
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;