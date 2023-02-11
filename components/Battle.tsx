import {Motion, spring} from "react-motion";
import Image from 'next/image';
import { useRef } from 'react';
import styles from '../styles/Home.module.css';


export const BattleViewer = (props: {
    position: number,
}) => {

    return (
        <>
            <div style={{width:"700px",height:"400px", display: "flex", alignItems: "center"}}>
                <Motion defaultStyle={{p: 0.5}} style={{p: spring(props.position)}}>
                    {(value) => (
                        <div 
                            style={{
                                height: '70px',
                                width: '100%'
                            }}
                            className={styles.red_horizontal_gradient}
                        >
                        <div 
                            style={{
                                height: '100%',
                                width: `${value.p*700}px`,
                            }}
                            className={styles.blue_horizontal_gradient}
                            >
                                {/* <Image src={"/images/flag.png"} width={64} height={64} alt="My avatar" /> */}
                            </div>
                            </div>
                    )}
                </Motion>
            </div>
        </>
    )
}

export default BattleViewer;