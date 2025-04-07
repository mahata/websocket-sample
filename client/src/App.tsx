import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { ServerToClientMessage } from '../../shared/types/types';


const WS_URL = 'ws://localhost:8080';

function App() {
  const [text, setText] = useState('');

  const { lastJsonMessage, sendJsonMessage } = useWebSocket<ServerToClientMessage>(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
  });

  useEffect(() => {
    if (lastJsonMessage) {
      console.log('Received message:', lastJsonMessage);
      if (lastJsonMessage.status === 'received') {
        console.log(lastJsonMessage.received.message)
      }
    }
  }, [lastJsonMessage]);

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
        />
        <button
          type="button"
          onClick={() => {
            sendJsonMessage({ message: text });
            setText('');
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default App;
