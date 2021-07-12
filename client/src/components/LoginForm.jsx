/* Chat Engine has been used for all the great features of chat application */


import { useState } from 'react';        
import axios from 'axios';

const projectID = 'ed54c25a-b3f9-4daf-92ff-9d2bd9cf6890';    /* created an instance of chat on chat-engine and from 
                                                there, this unique project ID has been generated */

const LoginForm = () => {
  const [username, setUsername] = useState('');      /* username and password will be provided by chat admin */
  const [password, setPassword] = useState('');      /* we can create our own username and password on chat-engine*/
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (                           /* structure of the login form */
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;