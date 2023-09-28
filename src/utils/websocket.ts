import useWebSocket, { ReadyState, Options } from 'react-use-websocket';

const useWebSocketIo = (socketUrl: string, options: Options, connect?: boolean) => {
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, options, connect);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  console.log('sendMessage, lastMessage, ', sendMessage, lastMessage, connectionStatus);
};

export default useWebSocketIo;

// useEffect(() => {
//   if (lastMessage !== null) {
//     setMessageHistory((prev) => prev.concat(lastMessage));
//   }
// }, [lastMessage, setMessageHistory]);

// const handleClickChangeSocketUrl = useCallback(
//   () => setSocketUrl('wss://demos.kaazing.com/echo'),
//   []
// );

// const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);
