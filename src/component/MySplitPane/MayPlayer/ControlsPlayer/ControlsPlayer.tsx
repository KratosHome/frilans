import React, {FC, useEffect, useState} from 'react';
import "./ControlsPlayer.scss"
import {ControlsPlayerType} from "../AudioPlayer/ControlsPlayerType";
import AddContentPlayer from "../../../../store/AddContentPlayer";


export const ControlsPlayer: FC<ControlsPlayerType> = ({
                                                           elemRef,
                                                           setIsPlaying,
                                                           isPlaying,
                                                           progressBar,
                                                           setProgress,
                                                           intervalRef,
                                                           isReady,
                                                       }) => {

    const [hoverVolume, setHoverVolume] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(10);


    const {duration} = elemRef.current;
    const startTimer = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            if (elemRef.current.ended) {
            } else {
                setProgress(elemRef.current.currentTime);
            }
        }, 100);
    };

    const onScrub = (value: any) => {
        clearInterval(intervalRef.current);
        elemRef.current.currentTime = value;
        setProgress(elemRef.current.currentTime);
    };

    const onScrubEnd = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };

    useEffect(() => {
        if (isPlaying) {
            elemRef.current.play();
            startTimer();
        } else {
            elemRef.current.pause();
        }
    }, [isPlaying, elemRef]);

    useEffect(() => {
        elemRef.current.pause();

        elemRef.current = new Audio(AddContentPlayer.initialState.song);
        setProgress(elemRef.current.currentTime);

        if (isReady.current) {
            elemRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = false;
        }
    }, [elemRef]);



    const rewindLeft = () => {
        setIsPlaying(false)
        onScrub(progressBar - 0.5)
    }
    const rewindRight = () => {
        setIsPlaying(false)
        onScrub(progressBar + 0.5)
    }


    const onVolume = (value: any) => {
        setVolume(value);
        if (value === "10") {
            elemRef.current.volume = 1;
        } else if (value === "9") {
            elemRef.current.volume = 0.9;
        } else if (value === "8") {
            elemRef.current.volume = 0.8;
        } else if (value === "7") {
            elemRef.current.volume = 0.7;
        } else if (value === "6") {
            elemRef.current.volume = 0.6;
        } else if (value === "5") {
            elemRef.current.volume = 0.5;
        } else if (value === "4") {
            elemRef.current.volume = 0.4;
        } else if (value === "3") {
            elemRef.current.volume = 0.3;
        } else if (value === "2") {
            elemRef.current.volume = 0.2;
        } else if (value === "1") {
            elemRef.current.volume = 0.1;
        } else if (value === "0") {
            elemRef.current.volume = 0;
        }
    };

    const clickVolume = () => {
        if (volume >= 1) {
            setVolume(0);
            elemRef.current.volume = 0;
        } else {
            elemRef.current.volume = 1;
            setVolume(10);
        }
    }
    return (
        <div className="containerPlayerControls">
            <input
                type="range"
                value={progressBar}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="timelinePlayerControls"
                onChange={(e) => onScrub(+e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
            />
            <div className="buttonsPlayerControls">
                <div className="currentTimePlayerControls">
                    {progressBar}
                </div>
                <div>
                    <button onClick={rewindLeft}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                            <path stroke="#fff" d="M10.026 13.5H11.5v-9h-1.457L5.5 8.718v1.046l4.526 3.736z"></path>
                            <path fill="#fff" d="M13 4H14V14H13z"></path>
                        </svg>
                    </button>
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                            <path stroke="#fff" d="M7.974 13.5H6.5v-9h1.457L12.5 8.718v1.046L7.974 13.5z"></path>
                        </svg>
                    </button>
                    <button onClick={rewindRight}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 18 18" className="revert-icon">
                            <path stroke="#fff" d="M10.026 13.5H11.5v-9h-1.457L5.5 8.718v1.046l4.526 3.736z"></path>
                            <path fill="#fff" d="M13 4H14V14H13z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <button onClick={clickVolume}>
                        <div
                            onMouseOver={() => setHoverVolume(true)}
                            onMouseOut={() => setHoverVolume(false)}
                            className={hoverVolume ? "volumeControlsPlayer" : "hideBlock"}
                        >
                            <input
                                type="range"
                                value={volume}
                                step="1"
                                min="0"
                                max="10"
                                onChange={(e) => onVolume(e.target.value)}
                            />
                        </div>
                        {volume !== 0
                            ?
                            <svg
                                onMouseOver={() => setHoverVolume(true)}
                                onMouseOut={() => setHoverVolume(false)}
                                width="18" height="18" fill="none" viewBox="0 0 18 18">
                                <path fill="#fff"
                                      d="M8.575 3.074c.26.125.425.388.425.676v10.5c0 .288-.165.551-.425.676s-.568.09-.794-.09L4.237 12H1.5c-.414 0-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75h2.737L7.78 3.164c.226-.18.534-.215.794-.09zM7.5 5.31L4.969 7.336c-.133.106-.299.164-.469.164H2.25v3H4.5c.17 0 .336.058.469.164L7.5 12.69V5.31zM13.773 3.167c.293-.293.767-.293 1.06 0C16.38 4.714 17.25 6.812 17.25 9c0 2.187-.87 4.285-2.416 5.832-.293.293-.768.293-1.06 0-.293-.292-.293-.767 0-1.06 1.265-1.266 1.976-2.982 1.976-4.772s-.711-3.507-1.977-4.772c-.293-.293-.292-.768 0-1.061zm-2.648 2.647c.293-.292.768-.292 1.06 0 .844.844 1.318 1.989 1.318 3.182 0 1.193-.474 2.338-1.317 3.181-.293.293-.768.293-1.061 0-.293-.292-.293-.767 0-1.06.562-.563.878-1.325.878-2.121 0-.795-.316-1.558-.878-2.121-.293-.293-.293-.768 0-1.06z"></path>
                            </svg>
                            :
                            <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                                <path fill="#fff"
                                      d="M8.575 3.074c.26.125.425.388.425.676v10.5c0 .288-.165.551-.425.676s-.568.09-.794-.09L4.237 12H1.5c-.414 0-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75h2.737L7.78 3.164c.226-.18.534-.215.794-.09zM7.5 5.31L4.969 7.336c-.133.106-.299.164-.469.164H2.25v3H4.5c.17 0 .336.058.469.164L7.5 12.69V5.31zM17.78 6.22c.293.293.293.767 0 1.06l-4.5 4.5c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l4.5-4.5c.293-.293.767-.293 1.06 0z"></path>
                                <path fill="#fff"
                                      d="M12.22 6.22c.293-.293.767-.293 1.06 0l4.5 4.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-4.5-4.5c-.293-.293-.293-.767 0-1.06z"></path>
                            </svg>
                        }
                    </button>
                    <button>
                        <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                            <path fill="#fff"
                                  d="M2.25 6.75v-3c0-.825.675-1.5 1.5-1.5h3v1.5h-3v3h-1.5zm0 4.5h1.5v3h3v1.5h-3c-.825 0-1.5-.675-1.5-1.5v-3zm12 3h-3v1.5h3c.825 0 1.5-.675 1.5-1.5v-3h-1.5v3zm-3-12h3c.825 0 1.5.675 1.5 1.5v3h-1.5v-3h-3v-1.5z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
