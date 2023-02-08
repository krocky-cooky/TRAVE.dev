import React, {useState, useEffect, useRef} from 'react';

type ContainerProps = {}

export const LiveDemo = (props: ContainerProps) => {
    const [timer, setTimer] = useState<number>(0);
    const socketRef = useRef<WebSocket>();
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const updateTimer = () => {
        setInterval(() => {
            const nowTimer = new Date();
            setTimer(nowTimer.getSeconds());
        },500);
    }

    const connectWebSocket = () => {
        socketRef.current = new WebSocket("wss://i1n1dxezt4.execute-api.ap-northeast-1.amazonaws.com/production");
        socketRef.current.onopen = () => {
            setIsConnected(true);
            console.log("websocket connected");
        }

        socketRef.current.onclose = () => {
            setIsConnected(false);
            console.log("websocket closed.")
        }

        socketRef.current.onmessage = (event) => {
            const message: string = event.data;
            console.log(message);
        }
    }
    useEffect(() => {
        connectWebSocket();
        updateTimer();
    },[])
    useEffect(() => {

        if(socketRef.current?.readyState === 3) {
            connectWebSocket();
        }

    },[timer])

    return (
        <>

        </>
    )
}

export default LiveDemo;