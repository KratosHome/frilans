import React, {FC, ReactNode, useState} from 'react';
import timeLineContent from '../../../store/timeLineContent';

type NewMayDraggableType = {
    children: ReactNode;
    topCoords?: number
    setTopCoords?: any
    leftCord?: any;
    setLeftCoords?: any
    minRight?: number
    minLeft?: number
    minTop?: number
    minBottom?: number
    setSliderPointerCord?: any
    item?: any
}
export const NewMayDraggable: FC<NewMayDraggableType> = ({children, setSliderPointerCord, item}) => {


    // растояния минус х значення = то сещаеться время
    function dragStartHandler(e: any, item: any) {
     //   console.log("dragStartHandler", item)
    }

    function dragLeaveHandler(e: any) {
    }

    function dragEndHandler(e: any) {

    }

    function dragOverHandler(e: any) {
        e.preventDefault();
    }

    function dropHandler(e: any, item: any) {
        e.preventDefault();
        // console.log("dropHandler", e)
    }


    return (
        <div
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, children)} // момент коли взяли карточку
            onDragLeave={(e) => dragLeaveHandler(e)} // якщо вийли за кордон іншої картки
            onDragEnd={(e) => dragEndHandler(e)} // якщо ми відпустили переміщення
            onDragOver={(e) => dragOverHandler(e)} // якщо ми находимся над іншим обєктом
            onDrop={(e) => dropHandler(e, children)} // коли відпустили картку і повинно щось з цим трапитись
        >
            {children}
        </div>
    );
};
