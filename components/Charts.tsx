import { useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Motion, spring} from "react-motion";


export const PowerLineChart = (props: {
    data: number,
    width: string,
    height: string,
    image: string,
    imgWidth: number,
    imgHeight: number,
    colorClass: string
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctx = canvasRef.current?.getContext('2d');
    if(ctx){
        const WIDTH = ctx.canvas.width;
        const HEIGHT = ctx.canvas.height;
        ctx.clearRect(0,0,WIDTH,HEIGHT);
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0,0,WIDTH,HEIGHT);
        ctx.fillStyle = 'rgb(214, 219, 220)';
        ctx.fillRect(0,0,WIDTH,HEIGHT*(1-props.data));
        ctx.save();
    }


    return (
        <>
        <div style={{display: "flex", flexDirection: "column"}}>
            <Image src={props.image} width={props.imgWidth} height={props.imgHeight} alt="My avatar" />
            <div style={{height: "10px"}}></div>
            <div style={{width: props.width, height: props.height}} className={props.colorClass}>
                <canvas ref={canvasRef} style={{height: "100%",width: "100%"}} />
            </div>
        </div>
        </>
    )
}

export default PowerLineChart;