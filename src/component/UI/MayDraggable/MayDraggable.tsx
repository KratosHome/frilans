import React, {FC, memo} from 'react';
import Draggable, {DraggableData, DraggableEvent} from 'react-draggable';
import {MayDraggableType} from "./MayDraggableType";

export const MayDraggable: FC<MayDraggableType> = memo(({
                                                            children,
                                                            minRight,
                                                            leftCord,
                                                            setLeftCoords,
                                                            minLeft,
                                                            minTop,
                                                            minBottom,
                                                            topCoords,
                                                            setTopCoords
                                                        }) => {

    const onDrag = (e: DraggableEvent, data: DraggableData) => {
        if (leftCord) {
            setLeftCoords(data.lastX)
        }
        if (topCoords) {
            setTopCoords(data.lastY)
        }
    };
    return (
        <Draggable
            position={{
                x: leftCord,
                y: topCoords
            }}
            onDrag={onDrag}
            bounds={{
                right: minRight,
                left: minLeft,
                top: minTop,
                bottom: minBottom,
            }}
        >
            {children}
        </Draggable>
    );
});
