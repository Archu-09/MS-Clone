/* here we will use all the three components (MyMessage, MessageForm, TheirMessage) inside the chat feed */

import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];                                 /* the message*/
      const lastMessageKey = index === 0 ? null : keys[index - 1];   /* if there are messages then it will get us the last message*/
      const isMyMessage = userName === message.sender.username;      /* it will check if it is my mesage*/

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage                            /* if it is our message then render MyMessage component otherwise render TheirMessage component */
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>               /* the chat bubble will be shown up for who read the messages (render read receipts) */ 
      );
    });
  };

  if (!chat) return <div />;

  return (                                    /* structure of our chat feed */
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;