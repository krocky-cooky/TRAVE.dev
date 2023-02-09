import React, {useState, useEffect, useRef} from 'react';
import {lineChartDataFormat} from '../../components/Charts';
import Head from 'next/head'
import dynamic from "next/dynamic";
import PowerLineChart from '../../components/Charts';
import BattleViewer from '../../components/Battle';

type ContainerProps = {}

type CommunicationFormat = {
    normalizedData: number,
    deviceInterface: number,
    latestWinner: number,
}

export const LiveDemo = (props: ContainerProps) => {
    const MAX_VALUE_LENGTH: number = 20;
    const CHART_TIMER_UPDATE_INTERVAL_MS = 1500;
    const BATTLE_TIMER_UPDATE_INTERVAL_MS = 500;
    const INITIAL_LINE_CHART_DATA: lineChartDataFormat = {
        labels: [],
        datasets: [
            {
                label: "value",
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 0
            }
        ]
    }
    for(var i=0;i < MAX_VALUE_LENGTH;++i) {
        INITIAL_LINE_CHART_DATA.datasets[0].data.push(0);
        INITIAL_LINE_CHART_DATA.labels.push(`${i}`);
    }

    const [chartTimer, setChartTimer] = useState<number>(0);
    const [battleTimer, setBattleTimer] = useState<number>(0);
    const socketRef = useRef<WebSocket>();
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [currentDeviceProfile, setCurrentDeviceProfile] = useState<CommunicationFormat>();
    const [deviceLineChartProp, setDeviceLineChartProp] = useState<lineChartDataFormat>(INITIAL_LINE_CHART_DATA);
    const [currentForceGaugeProfile, setCurrentForceGaugeProfile] = useState<CommunicationFormat>();
    const [forceGaugeLineChartProp, setForceGaugeLineChartProp] = useState<lineChartDataFormat>(INITIAL_LINE_CHART_DATA);
    const [battlePosition, setBattlePosition] = useState<number>(0.5);
    const updateChartTimer = () => {
        setInterval(() => {
            const nowTimer = new Date();
            setChartTimer(nowTimer.getSeconds());
        },CHART_TIMER_UPDATE_INTERVAL_MS);
    }
    const updateBattleTimer = () => {
        setInterval(() => {
            const nowTimer = new Date();
            setBattleTimer(nowTimer.getSeconds());
        },BATTLE_TIMER_UPDATE_INTERVAL_MS);
    }

    const connectWebSocket = () => {
        // socketRef.current = new WebSocket("wss://i1n1dxezt4.execute-api.ap-northeast-1.amazonaws.com/production");
        // socketRef.current.onopen = () => {
        //     setIsConnected(true);
        //     console.log("websocket connected.");
        // }

        // socketRef.current.onclose = () => {
        //     setIsConnected(false);
        //     console.log("websocket closed.")
        // }

        // socketRef.current.onmessage = (event) => {
        //     const message: string = event.data;
        //     const parsed: CommunicationFormat = JSON.parse(message) as CommunicationFormat;
        //     if(parsed.deviceInterface === 0) {
        //         setCurrentDeviceProfile(parsed);
        //     } else if(parsed.deviceInterface == 1) {
        //         setCurrentForceGaugeProfile(parsed);
        //     }
        // }
    };

    useEffect(() => {
        connectWebSocket();
        updateChartTimer();
        updateBattleTimer();
    },[]);

    // useEffect(() => {

    //     if(socketRef.current?.readyState === 3) {
    //         connectWebSocket();
    //     }
    //     const position: number = battleTimer/60;
    //     setBattlePosition(position);

    // },[battleTimer]);
    
    useEffect(() => {
        //const normalizedValue = currentDeviceProfile?.normalizedData;
        const normalizedValue = chartTimer%10;
        console.log(normalizedValue);
        const propTmp: lineChartDataFormat = {
            labels: deviceLineChartProp.labels,
            datasets: deviceLineChartProp.datasets
        };
        propTmp.datasets[0].data.push(normalizedValue);
        // if(normalizedValue) {
        //     propTmp.data.push(valueToBeInserted);
        // }
        if(propTmp.datasets[0].data.length > MAX_VALUE_LENGTH) {
            propTmp.datasets[0].data.shift();
        }

        setDeviceLineChartProp(propTmp);

    },[chartTimer]);

    useEffect(() => {
        //const normalizedValue = currentForceGaugeProfile?.normalizedData;
        const normalizedValue = chartTimer%10;
        const propTmp: lineChartDataFormat = {
            labels: forceGaugeLineChartProp.labels,
            datasets: forceGaugeLineChartProp.datasets
        };
        propTmp.datasets[0].data.push(normalizedValue);
        // if(normalizedValue) {
        //     propTmp.data.push(valueToBeInserted);
        // }
        if(propTmp.datasets[0].data.length > MAX_VALUE_LENGTH) {
            propTmp.datasets[0].data.shift();
        }

        setForceGaugeLineChartProp(propTmp);
    }, [chartTimer]);


    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

            <PowerLineChart
                data={deviceLineChartProp} />
            <PowerLineChart
                data={forceGaugeLineChartProp} />
            {/* <BattleViewer
                position={battlePosition} /> */}

            </main>
        </>
    )
}

export default LiveDemo;