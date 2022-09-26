import React, {useLayoutEffect, useRef, useState} from 'react';
import {ControlsPlayer} from "../ControlsPlayer";
import AddContentPlayer from "../../../../store/AddContentPlayer";

export const AudioPlayer = () => {

    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const audioRef = useRef<any>(new Audio(AddContentPlayer.initialState.song));
    const intervalRef = useRef<any>();
    const isReady = useRef<any>(false);


    useLayoutEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        };
    }, []);

    return (
        <div>
            <audio src={AddContentPlayer.initialState.song} ref={audioRef}/>
            <ControlsPlayer
                progressBar={trackProgress}
                elemRef={audioRef}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                setProgress={setTrackProgress}
                intervalRef={intervalRef}
                isReady={isReady}
            />
        </div>
    );
};
