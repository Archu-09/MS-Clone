/* this is for the other people who send the message */


const TheirMessage = ({ lastMessage, message }) => {     
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
                            /* it will give us the boolean value whether it is the first mesaage by the user or not*/
    return (
      <div className="message-row">
        {isFirstMessageByUser && (
            <div                        /* is it is the first message by the user and message avatar exists then 
                                         it will set the background image to this message avatar image*/
            className="message-avatar"
            style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
          />
        )}
        {message.attachments && message.attachments.length > 0
          ? (                                                      /* image attachments */
            <img
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
            />
          )
          : (                                                     /* text message */
            <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
              {message.text}
            </div>
          )}
      </div>
    );
  };
  
  export default TheirMessage;