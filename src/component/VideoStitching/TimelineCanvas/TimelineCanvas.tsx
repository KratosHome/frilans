import React, {FC, useEffect, useRef, useState} from 'react';
import "./TimelineCanvas.scss"
import useWindowDimensions from "../../../hooks/useWindowDimensions";

type TimelineCanvas = {
    time: number
    setTime: (value: number) => void
    romsCount: number
    setRomsCount: (value: number) => void
}

export const TimelineCanvas: FC<TimelineCanvas> = ({romsCount, setRomsCount, setTime, time}) => {

    const canvasRef = useRef<any>(null)
    const [width, setWidth] = useState<any>(useWindowDimensions().width - 70)

    const [height, setHeight] = useState(20)

    const [canvaCordX, setCanvaCordX] = useState<number>(1)

    const canvasMouseMove = (e: any) => {
        setCanvaCordX(e.screenX)
    }
    let timeObj: any = {
        h: ("0" + Math.floor((time / 3600000) % 60)).slice(-2),
        m: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
        s: ("0" + Math.floor((time / 1000) % 60)).slice(-2),
        ms: ("0" + ((time / 10) % 100)).slice(-2)
    }


    const draw = (ctx: any) => {

        //let xRato = width / (cord2.columns[0].length - 2)
        ctx.beginPath()// почати малювання
        ctx.lineWidth = 1 // товщина лінії
        ctx.strokeStyle = "#ffffff" // клір лінії
        for (let i = 1; i <= romsCount; i++) {
            const step = width / romsCount * i
            ctx.moveTo(step, 20)
            ctx.lineTo(step, 10)
            // console.log(timeObj)
        }
        ctx.stroke()
        ctx.closePath() // закінчити малювання


        ctx.beginPath()// почати малювання
        ctx.lineWidth = 1 // товщина лінії
        ctx.strokeStyle = "#ffffff" // клір лінії
        ctx.font = "normal 10px Helvetica,sans-serif"
        ctx.fillStyle = "#ffffff" // колір лінії
        for (let i = 1; i <= romsCount; i++) {
            const step = width / romsCount * i * 5

            ctx.moveTo(step, 0)
            ctx.lineTo(step, 30)
            ctx.fillText(`${Math.floor(timeObj.h)}:${timeObj.m}:${timeObj.s}:${timeObj.ms}`, step + 5, 7) // текст
        }
        ctx.stroke()
        ctx.closePath() // закінчити малювання

        ctx.beginPath()// почати малювання
        ctx.moveTo(0, 0)
        ctx.lineTo(0, 30)
        ctx.fillText(`00:00:00:00`, 5, 7)
        ctx.stroke()
        ctx.closePath() // закінчити малювання

        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.moveTo(0, 20);
        ctx.lineTo(width, 20);
        ctx.stroke();
        ctx.closePath()


    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw(context)
    }, [draw])


    return (
        <div>
            <canvas onClick={canvasMouseMove} ref={canvasRef} className="timelineСanvas" width={width} height={height}/>
        </div>
    );
};



