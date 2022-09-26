import React, {FC} from 'react';
import "./MediaContent.scss"
import {observer} from "mobx-react-lite";
import MediaContentStore from '../../../../store/MediaContentStore'
import {MediaContentItems} from "../MediaContentItems";
import {MediaContentType} from "./MediaContentType";
import newtimeLineContent from '../../../../store/newtimeLineContent';


export const MediaContent: FC<MediaContentType> = observer(({topCoords}) => {

    return (
        <div className="containerMediaContent" style={{
            height: `${topCoords - 52}px`
        }}>
            <div className="addNewMediaFile">
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                    <path fill="#828282" stroke="#828282" strokeWidth="0.357" d="M18.309 7.962H38.384V8.578H18.309z"
                          transform="rotate(90 18.309 7.962)"></path>
                    <path fill="#828282" d="M28.217 18.486H48.649V19.459H28.217z"
                          transform="rotate(-180 28.217 18.486)"></path>
                    <circle cx="18" cy="18" r="17.285" stroke="#828282" strokeWidth="1.43"></circle>
                </svg>
                <div>Drag and drop
                    your media here or <span>upload media</span></div>
            </div>
            {newtimeLineContent.initialState[0].items.map((i: any) =>
                <MediaContentItems
                    key={i.id}
                    item={i}
                    name={i.name}
                    preview={i.preview}
                />
            )}
        </div>
    );
});
