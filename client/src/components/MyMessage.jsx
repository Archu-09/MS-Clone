/* it is something going to be like a chat bubble that we sent a message */

const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
      return (                                      /* it will render a image if the message is image */
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
  
    return (                              /* if it is not an image then it will render a text for message */ 
        
      <div className="message" style={{ float: 'right', marginRight: '20px', color: 'white', backgroundColor: '#5c407e' }}>
        {message.text}
      </div>
    );
  };
  
  export default MyMessage;