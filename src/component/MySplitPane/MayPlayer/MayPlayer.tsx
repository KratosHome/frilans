import React, {FC} from 'react';
import "./MayPlayer.scss"
import {MayPlayerType} from "./MayPlayerType";
import AddContentPlayer from "../../../store/AddContentPlayer";
import {observer} from "mobx-react-lite";
import {AudioPlayer} from "./AudioPlayer";
import {VideoPlayer} from "./VideoPlayer";

export const MayPlayer: FC<MayPlayerType> = observer(({topCoords, leftCoords}) => {

    return (
        <div className="containerVideoPlayer">
            {
                AddContentPlayer.initialState.format === "img" ?
                    <>
                        <img height={topCoords} width={1200} src={AddContentPlayer.initialState.img}
                             alt={AddContentPlayer.initialState.name}/>
                    </>
                    :
                    AddContentPlayer.initialState.format === "song" ?
                        <>
                            <img height={topCoords - 50} width={1200} src={AddContentPlayer.initialState.preview}
                                 alt={AddContentPlayer.initialState.name}/>
                            <AudioPlayer/>
                        </>
                        :
                        AddContentPlayer.initialState.format === "video" ?
                            <div>
                                <VideoPlayer topCoords={topCoords}/>
                            </div>
                            :
                            null
            }
        </div>
    );
});

