import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react';
import "./VideoPlayer.scss"
import AddContentPlayer from "../../../../store/AddContentPlayer";
import {ControlsPlayerViedo} from "../ControlsPlayerViedo/ControlsPlayerViedo";

type VideoPlayerType = {
    topCoords: number
}
export const VideoPlayer: FC<VideoPlayerType> = ({topCoords}) => {

    const [videoProgress, setVideoProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<any>();

    const videoRef = useRef<any>();
    const intervalRef = useRef<any>();
    const isReady = useRef<any>(false);


    useLayoutEffect(() => {
        setDuration(videoRef)
        return () => {
            clearInterval(intervalRef.current);
            videoRef.current.pause();
        };
    }, []);


    return (
        <div>
            <video
                height={topCoords - 50}
                src={AddContentPlayer.initialState.video}
                ref={videoRef}
            />
            <ControlsPlayerViedo
                elemRef={videoRef}
                progressBar={videoProgress}
                setProgress={setVideoProgress}
            />
        </div>
    );
};
/*
      <ControlsPlayer
                progressBar={trackProgress}
                elemRef={audioRef}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                setProgress={setTrackProgress}
                intervalRef={intervalRef}
                isReady={isReady}
            />
 */