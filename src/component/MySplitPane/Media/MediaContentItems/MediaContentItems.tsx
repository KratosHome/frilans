import React, {FC, useState} from 'react';
import AddContentPlayer from '../../../../store/AddContentPlayer';
import "./MediaContentItems.scss"
import {MediaContentItemsType} from "./MediaContentItemsType";
import {observer} from "mobx-react-lite";
import {NewMayDraggable} from "../../../UI/NewMayDraggable";


export const MediaContentItems: FC<MediaContentItemsType> = observer(({name, preview, item}) => {

    const [hoverMediaContentItem, setHoverMediaContentItem] = useState<boolean>(false);

    const addContentPlayer = () => {
        AddContentPlayer.addContantPlayer(item)
    }


    return (
        <NewMayDraggable item={item}>
            <div
                className={hoverMediaContentItem ? "mediaContentItem hoverItemMediaContent" : " mediaContentItem"}
                onMouseOver={() => setHoverMediaContentItem(true)}
                onMouseOut={() => setHoverMediaContentItem(false)}
                onClick={addContentPlayer}
            >
                <button
                    onMouseOver={() => setHoverMediaContentItem(true)}
                    onMouseOut={() => setHoverMediaContentItem(false)}
                    className={hoverMediaContentItem ? "deleteMediaContentItem" : "hideBlock"}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path fill="#1A1A1A"
                              d="M8 0C3.576 0 0 3.576 0 8c0 4.424 3.576 8 8 8 4.424 0 8-3.576 8-8 0-4.424-3.576-8-8-8z"></path>
                        <path fill="currentColor"
                              d="M9.25 3.5h-2.5l-.5.5H4.5v1h7V4H9.75l-.5-.5zm.75 3v5H6v-5h4zm-5-1h6v6c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-6z"></path>
                    </svg>
                </button>
                <button
                    onMouseOver={() => setHoverMediaContentItem(true)}
                    onMouseOut={() => setHoverMediaContentItem(false)}
                    className={hoverMediaContentItem ? "addMediaContentItem" : "hideBlock"}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <rect width="16" height="16" fill="#1A1A1A" rx="8"></rect>
                        <path fill="currentColor"
                              d="M8 4c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5z"></path>
                        <path fill="currentColor"
                              d="M4 8c0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5s-.224.5-.5.5h-7c-.276 0-.5-.224-.5-.5z"></path>
                    </svg>
                </button>
                <img draggable="false" src={preview} alt={name}/>
                <div>{name}</div>
            </div>
        </NewMayDraggable>
    );
});
