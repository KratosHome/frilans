import React, {FC, Fragment, useEffect, useState} from 'react';
import "./timelineCanvasCanva.scss"
import {Stage, Layer, Line, Text, Rect} from "react-konva";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {queries} from "@testing-library/react";

interface TimelineStateProps {
    width: number;
    height: number;
}

interface TimelineStageState {
    zoom: number;
    isDraggingKey: boolean;
    currentXOffset: number;
    currentYOffset: number;
}

interface ITimeIntervals {
    linePosition: number;
    currentSecond: number;
    currentTime: string;
}

type TimelineCanvasCanvaType = {
    setTime: (value: any) => void
    time: any
    seSecond: any
    second: any
    romsCount: any
    setRomsCount: any
    sliderPointerCord: any
    setSliderPointerCord: any
    setMove?: any
    move?: any
}

export const TimelineCanvasCanva: FC<TimelineCanvasCanvaType> = ({
                                                                     setTime,
                                                                     time,
                                                                     seSecond,
                                                                     second,
                                                                     romsCount,
                                                                     setRomsCount,
                                                                     setSliderPointerCord,
                                                                     sliderPointerCord,
                                                                     move
                                                                 }) => {
        const [width, setWidth] = useState<any>(useWindowDimensions().width)
        const [isZoomIn, setIsZoomIn] = useState<boolean>(false)
        const [timelineStageState, setTimelineStageState] = useState({
            zoom: 1,
            isDraggingKey: false,
            currentXOffset: 0,
            currentYOffset: 0
        })
        let minPixelsInSecond: number = 20;
        let leftCanvasMargin: number = 72;


        const generateTimeIntervals = (): ITimeIntervals[] => {
            const {zoom} = timelineStageState;
            let linePosition: number = 0;
            let currentSecond: number = 0;
            let currentTime: string = "00:00:00";
            const intervalData: ITimeIntervals[] = [];

            while (linePosition < width) {
                const step2 = (minPixelsInSecond * (zoom) / romsCount)
                intervalData.push({linePosition, currentSecond, currentTime});
                linePosition += step2;
                currentSecond = (currentSecond + 1) + 25;
                currentTime = new Date(-10800000 + currentSecond * 1000).toLocaleTimeString();
            }

            return intervalData;

        }

        let newArr = generateTimeIntervals().filter(function (value, index, ar) {
            return (index % 5 === 0);
        });


        const handleTimelineWheel = (event: any) => {
            setIsZoomIn(event.evt.wheelDeltaY > 0 ? true : false)

            setTimelineStageState((prevState: TimelineStageState) => {
                return {
                    ...prevState,
                    zoom: isZoomIn ? prevState.zoom * 1.05 : prevState.zoom / 1.05
                }
            });
        }

        const updateCurrentOffset = (xPos: number, yPos: number): void => {
            timelineStageState.currentXOffset = xPos
            timelineStageState.currentYOffset = yPos
        }

        const handleDragBound = (position: any) => {
            const boundX: number = position.x > 0 ? 0 : position.x;

            updateCurrentOffset(boundX, 0);

            return {
                x: boundX,
                y: 0
            };
        }

        const onMouseMove = (e: any) => {
            seSecond(e.target.id())
            setSliderPointerCord(e.evt.x)
        }


        let timerNow = new Date(-10800000 + second * 1000).toLocaleTimeString();
        setTime(timerNow)


        return (
            <div className="containerTimelineCanvasCanva">
                <div>
                    <Stage
                        width={width}
                        height={70}
                        onWheel={handleTimelineWheel}
                        dragBoundFunc={handleDragBound}
                    >
                        <Layer>
                            {newArr.map(
                                (
                                    {linePosition, currentSecond, currentTime}: ITimeIntervals,
                                    index: number
                                ) => {
                                    if (true) {
                                        return (
                                            <Fragment key={linePosition.toString() + index.toString()}>
                                                <Text
                                                    id={currentSecond.toString()}
                                                    x={linePosition - 18 + leftCanvasMargin}
                                                    y={10}
                                                    text={currentTime}
                                                    fill="white"
                                                    fontSize={10}
                                                    opacity={0.5}
                                                />
                                                <Line
                                                    onClick={onMouseMove}
                                                    id={currentSecond.toString()}
                                                    x={linePosition + leftCanvasMargin}
                                                    y={22}
                                                    points={[0, 10, 0, 0, 0, 0, 0, 0]}
                                                    stroke="white"
                                                    strokeWidth={0.4}
                                                />
                                            </Fragment>
                                        );
                                    }
                                    return null;
                                }
                            )}
                        </Layer>
                        <Layer>
                            {generateTimeIntervals().map(
                                (
                                    {linePosition, currentSecond}: ITimeIntervals,
                                    index: number
                                ) => {
                                    if (true) {
                                        return (
                                            <Fragment key={linePosition.toString() + index.toString()}>
                                                <Line
                                                    onClick={onMouseMove}
                                                    id={currentSecond.toString()}
                                                    x={linePosition + leftCanvasMargin}
                                                    y={30}
                                                    points={[0, 10, 0, 0, 0, 0, 0, 0]}
                                                    stroke="white"
                                                    fill="white"
                                                    strokeWidth={0.4}
                                                />
                                                <Rect
                                                    onClick={onMouseMove}
                                                    id={currentSecond.toString()}
                                                    x={linePosition + leftCanvasMargin}
                                                    y={0}
                                                    width={linePosition - 4}
                                                    height={80}
                                                    fill="red"
                                                    opacity={0}
                                                />
                                            </Fragment>
                                        );
                                    }
                                    return null;
                                }
                            )}
                        </Layer>
                        <Layer>
                            <Line
                                strokeWidth={0.4}
                                x={72}
                                y={40}
                                points={[0, 0, 0, 0, width, 0, 0, 0]}
                                stroke="white"
                                fill="white"
                            />
                        </Layer>
                    </Stage>
                </div>

            </div>
        );
    }
;

/*
  {newArr.map(
                                                    (
                                                        {linePosition, currentSecond}: ITimeIntervals,
                                                        index: number
                                                    ) => {
                                                        if (true) {
                                                            return (
                                                                <Fragment key={linePosition.toString() + index.toString()}>
                                                                    <Text
                                                                        x={linePosition - 3 + leftCanvasMargin}
                                                                        y={10}
                                                                        text={currentSecond.toString()}
                                                                        fill="white"
                                                                    />
                                                                </Fragment>
                                                            );
                                                        }
                                                        return null;
                                                    }
                                                )}

 */