import React, {useState, useEffect, useRef} from 'react';
import styles from '../../styles/Home.module.css';
import Head from 'next/head'
import dynamic from "next/dynamic";
import PowerLineChart from '../../components/Charts';
import BattleViewer from '../../components/Battle';
import { normalize } from 'path';

type ContainerProps = {}

type CommunicationFormat = {
    normalizedData: number,
    deviceInterface: number,
    latestWinner: number,
    deviceTorque: number,
    stateId: number
}

const BattleState = {
    deviceWon: 0,
    forceGaugeWon: 1,
    else: 2
}

type BattleState = typeof BattleState[keyof typeof BattleState];

export const LiveDemo = (props: ContainerProps) => {
    const CHART_TIMER_UPDATE_INTERVAL_MS = 1000;
    const BATTLE_TIMER_UPDATE_INTERVAL_MS = 1000;
    const PASS = "112358";

    const [visible, setVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [chartTimer, setChartTimer] = useState<number>(0);
    const [battleTimer, setBattleTimer] = useState<number>(0);
    const [battleState, setBattleState] = useState<BattleState>(BattleState.else);
    const socketRef = useRef<WebSocket>();
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [currentDeviceProfile, setCurrentDeviceProfile] = useState<CommunicationFormat>();
    const [deviceLineChartProp, setDeviceLineChartProp] = useState<number>(0);
    const [currentForceGaugeProfile, setCurrentForceGaugeProfile] = useState<CommunicationFormat>();
    const [forceGaugeLineChartProp, setForceGaugeLineChartProp] = useState<number>(0);
    const [battlePosition, setBattlePosition] = useState<number>(0.5);
    const updateChartTimer = () => {
        setInterval(() => {
            const nowTimer = new Date();
            setChartTimer(nowTimer.getMilliseconds());
        },CHART_TIMER_UPDATE_INTERVAL_MS);
    }
    const updateBattleTimer = () => {
        setInterval(() => {
            const nowTimer = new Date();
            setBattleTimer(nowTimer.getMilliseconds());
        },BATTLE_TIMER_UPDATE_INTERVAL_MS);
    }

    const connectWebSocket = () => {
        if(!visible)return;
        if(socketRef.current?.readyState === 1) return;
        socketRef.current = new WebSocket("wss://i1n1dxezt4.execute-api.ap-northeast-1.amazonaws.com/production");
        socketRef.current.onopen = () => {
            setIsConnected(true);
            console.log("websocket connected.");
        }

        socketRef.current.onclose = () => {
            setIsConnected(false);
            console.log("websocket closed.");
        }

        socketRef.current.onmessage = (event) => {
            const message: string = event.data;
            const parsed: CommunicationFormat = JSON.parse(message) as CommunicationFormat;
            if(parsed.deviceInterface === 0) {
                setCurrentDeviceProfile(parsed);
            } else if(parsed.deviceInterface == 1) {
                setCurrentForceGaugeProfile(parsed);
            }
        }
    };

    useEffect(() => {
        connectWebSocket();
    },[visible]);

    useEffect(() => {
        if(socketRef.current?.readyState === 3) {
            connectWebSocket();
        }
    },[battleTimer]);
    
    useEffect(() => {
        if(currentDeviceProfile) {
            const normalizedValue = currentDeviceProfile?.normalizedData;
            const deviceTorque = currentDeviceProfile?.deviceTorque;
            const battleState = currentDeviceProfile?.stateId;
            const latestWinner = currentDeviceProfile?.latestWinner;

            setDeviceLineChartProp(deviceTorque/6.0);
            if(battleState !== 3 && battleState !== 4) {
                setBattlePosition(normalizedValue);
            }
            if(battleState === 3 || battleState === 4) {
                if(latestWinner === 0) {
                    setBattleState(0);
                } else if(latestWinner === 1) {
                    setBattleState(1);
                }
            } else {
                setBattleState(2);
            }
        }
        

    },[currentDeviceProfile]);

    useEffect(() => {
        const normalizedValue = currentForceGaugeProfile?.normalizedData;
        if(normalizedValue) {
            setForceGaugeLineChartProp(normalizedValue);
        }
        
    }, [currentForceGaugeProfile]);


    return (
        <>
            <Head>
                <title>TRAVE Live Demo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/TRAVE_Symbol.svg" />
            </Head>
            <main className={styles.main}>
                {visible ? (
                    <div className={styles.battle_monitor}>
                        <div>
                        {battleState === BattleState.forceGaugeWon && (
                            <div style={{position: "relative", top: "150px",left: "-100px",height: "0",display: "flex", flexDirection: "column"}}>
                                <img src={"/images/flag.png"} width="70px" />
                                <div style={{fontSize: "30px",fontWeight: "bold"}}>
                                    WIN!!
                                </div>
                            </div>
                        )}
                        {battleState === BattleState.deviceWon && (
                            <div style={{position: "relative", top: "200px",left: "-100px",height: "0",display: "flex", flexDirection: "column"}}>
                                <div style={{fontSize: "30px",fontWeight: "bold"}}>
                                    LOSE...
                                </div>
                            </div>
                        )}
                        <PowerLineChart
                            data={forceGaugeLineChartProp} 
                            height={"200px"}
                            width={"70px"}
                            imgWidth={100}
                            imgHeight={100}
                            image="/images/handgrip.png"
                            colorClass={styles.blue_vertical_gradient} />
            
                        </div>
                        <div style={{width:"20px"}}></div>
                        <BattleViewer
                            position={battlePosition} />
                        <div style={{width:"20px"}}></div>
                        <div>
                        {battleState === BattleState.deviceWon && (
                            <div style={{position: "relative", top: "150px",left: "100px",height: "0",display: "flex", flexDirection: "column"}}>
                                <img src={"/images/flag.png"} width="70px" />
                                <div style={{fontSize: "30px",fontWeight: "bold"}}>
                                    WIN!!
                                </div>
                            </div>
                        )}
                        {battleState === BattleState.forceGaugeWon && (
                            <div style={{position: "relative", top: "200px",left: "90px",height: "0",display: "flex", flexDirection: "column"}}>
                                <div style={{fontSize: "30px",fontWeight: "bold"}}>
                                    LOSE...
                                </div>
                            </div>
                        )}
                        <PowerLineChart
                            data={deviceLineChartProp}
                            height={"200px"}
                            width={"70px"}
                            imgWidth={100}
                            imgHeight={100}
                            image="/images/weight.png"
                            colorClass={styles.red_vertical_gradient} />
                        </div>
                    </div>
                ) : (
                    <>
                        <input
                            onChange={(event)=> {setInputValue(event.target.value)}}/>
                        <button onClick={() => {
                            if(inputValue === PASS) {
                                setVisible(true);
                            }
                        }}>
                            confirm
                        </button>
                    </>
                )}
                
            
            </main>
        </>
    )
}

export default LiveDemo;