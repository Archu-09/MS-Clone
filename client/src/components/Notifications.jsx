import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

// get the notification if someone is trying to join a call
// contain an option to answer a call

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