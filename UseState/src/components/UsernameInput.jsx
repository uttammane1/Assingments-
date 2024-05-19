
import { useState } from 'react';

function UsernameInput() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <p>Username: {username.toLowerCase()}</p>
    </div>
  );
}

export default UsernameInput;
