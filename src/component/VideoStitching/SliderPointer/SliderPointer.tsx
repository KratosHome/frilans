import React, {FC, useState} from 'react';
import "./SliderPointer.scss"
import {MayDraggable} from "../../UI";
import {NewMayDraggable} from "../../UI/NewMayDraggable";


type SliderPointerType = {
    time: string
    sliderPointerCord: any
    setSliderPointerCord: any
    setMove: any
    move:any
}

export const SliderPointer: FC<SliderPointerType> = ({time, sliderPointerCord, setSliderPointerCord, setMove, move}) => {


    return (
        <>
            <div
                className="containerSliderPointer"
                style={{
                    marginLeft: sliderPointerCord === 0 ? `` : `${sliderPointerCord - 35}px`
                }}>
                <input type="text" value={time} disabled={true}/>
            </div>
        </>
    );
};
