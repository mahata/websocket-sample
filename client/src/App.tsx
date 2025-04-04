import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

const WS_URL = 'ws://localhost:8080';

function App() {
  const [text, setText] = useState('');

  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.')
    },
  });

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" />
        <button onClick={() => {
          sendJsonMessage({ message: text });
          setText('');
        }}>Send</button>
      </div>
    </>
  )
}

export default App
