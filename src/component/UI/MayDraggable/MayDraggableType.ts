import {ReactNode} from "react";

export type MayDraggableType = {
    children: ReactNode;
    topCoords: number
    setTopCoords?: any
    leftCord?: any;
    setLeftCoords?: any
    minRight?: number
    minLeft?: number
    minTop?: number
    minBottom?: number
}