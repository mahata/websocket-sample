import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

const WS_URL = 'ws://localhost:8080';

function App() {
  const [count, setCount] = useState(0)
  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.')
    },
  });

  useEffect(() => {
    if (readyState === WebSocket.OPEN) {
      sendJsonMessage({ message: 'Hello, server!' });
    }
  }, [sendJsonMessage, readyState]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
