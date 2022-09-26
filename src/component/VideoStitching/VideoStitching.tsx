import React, {FC, memo, useState} from 'react';
import "./VideoStitching.scss"
import {MountingBlock} from "./MountingBlock";
import {TimelineCanvas} from "./TimelineCanvas";
import {SliderPointer} from "./SliderPointer/SliderPointer";
import {TimelineCanvasCanva} from "./TimelineCanvasCanva";
import timeLineContent from '../../store/timeLineContent';
import {observer} from "mobx-react-lite";
import newtimeLineContent from '../../store/newtimeLineContent';


export const VideoStitching = observer(() => {

    const [sliderPointerCord, setSliderPointerCord] = useState<any>(0)
    const [romsCount, setRomsCount] = useState<string>("1")
    const [second, seSecond] = useState<number>(0)
    const [time, setTime] = useState<string>("00:00:00")
    const [move, setMove] = useState<boolean>(false)
    const inputChange = (e: any) => {
        setRomsCount(e.target.value)
    }

    const filter = newtimeLineContent.initialState.filter((item: any) => item.id !== 1)

    console.log(filter)
    return (
        <>
            <div className={"containerVideoStitching"}>
                <div className="toolbarVideoStitching">
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" className="">
                            <path d="M10 15.5l1.42-1.42-3.59-3.58H17v10h2v-12H7.83l3.59-3.58L10 3.5l-6 6 6 6z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" className="timeline-toolbar__history--disabled">
                            <path
                                d="M19.5 9.5l-6-6-1.42 1.42 3.59 3.58H4.5v12h2v-10h9.17l-3.59 3.58 1.42 1.42 6-6z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <path
                                d="M9.786 1H6.214l-.714.778H3v1.555h10V1.778h-2.5L9.786 1zm1.071 4.667v7.777H5.143V5.667h5.714zM3.714 4.11h8.572v9.333c0 .856-.643 1.556-1.429 1.556H5.143c-.786 0-1.429-.7-1.429-1.556V4.111z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg width="13" height="14" viewBox="0 0 13 14">
                            <path
                                d="M6.86 2.69c0 .527.148 1.044.43 1.49L6 6 4.71 4.18c.283-.446.432-.963.43-1.49.014-.697-.249-1.37-.73-1.875C3.929.311 3.267.018 2.57 0 1.875.018 1.214.311.732.815.25 1.32-.013 1.993.001 2.69c-.008.345.052.689.177 1.011.125.322.312.617.55.866.239.25.525.45.84.59.317.14.657.215 1.003.223.261.002.521-.039.77-.12l1.59 2.22L1 12.92 2.4 14 6 9l3.6 5 1.4-1.08-3.93-5.44 1.59-2.22c.248.081.508.122.77.12.345-.008.686-.084 1.002-.223.316-.14.601-.34.84-.59.239-.25.426-.544.55-.866.125-.322.186-.666.178-1.011.013-.697-.25-1.37-.731-1.875C10.789.311 10.127.018 9.43 0c-.696.018-1.357.311-1.839.815-.481.504-.744 1.178-.73 1.875zm2.57.86c-.234-.008-.455-.108-.616-.278-.161-.17-.249-.398-.243-.632 0-.228.09-.447.252-.608.16-.161.38-.252.608-.252.228 0 .447.09.608.252.161.161.252.38.252.608.005.234-.082.461-.243.632-.161.17-.383.27-.617.278zm-6.86 0c-.234-.008-.455-.108-.616-.278-.161-.17-.249-.398-.243-.632-.006-.234.082-.461.243-.632.16-.17.382-.27.617-.278.116.003.23.028.337.076.107.047.203.115.283.2.08.084.142.184.183.293.042.109.06.225.057.341.004.116-.015.232-.057.341-.04.11-.103.209-.183.294-.08.084-.176.152-.283.2-.106.047-.22.072-.337.075z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <path
                                d="M13.002 8c0 .227-.02.44-.047.653l1.406 1.1c.127.1.16.28.08.427l-1.333 2.307c-.06.106-.173.166-.287.166-.04 0-.08-.006-.12-.02l-1.66-.666c-.346.26-.72.486-1.126.653l-.254 1.767c-.02.16-.16.28-.326.28H6.668c-.167 0-.307-.12-.327-.28l-.253-1.767c-.407-.167-.78-.387-1.127-.653l-1.66.666c-.033.014-.073.02-.113.02-.12 0-.233-.06-.293-.166L1.56 10.18c-.08-.147-.046-.327.08-.427l1.407-1.1C3.021 8.44 3.001 8.22 3.001 8c0-.22.02-.44.047-.653l-1.407-1.1c-.126-.1-.166-.28-.08-.427l1.334-2.307c.06-.106.173-.166.286-.166.04 0 .08.006.12.02l1.66.666c.347-.26.72-.486 1.127-.653l.253-1.767c.02-.16.16-.28.327-.28h2.667c.166 0 .306.12.326.28l.254 1.767c.407.167.78.387 1.127.653l1.66-.666c.033-.014.073-.02.113-.02.12 0 .233.06.293.166l1.333 2.307c.08.147.047.327-.08.427l-1.406 1.1c.027.213.046.426.046.653zm-1.334 0c0-.14-.006-.28-.033-.487l-.094-.753.594-.467.713-.566-.466-.807-.847.34-.707.287-.606-.467c-.267-.2-.534-.353-.82-.473l-.707-.287-.107-.753-.127-.9h-.926l-.134.9-.106.753-.707.287c-.273.113-.547.273-.833.486l-.6.454-.694-.28-.846-.34-.467.806.72.56.593.467-.093.753c-.02.2-.033.354-.033.487s.013.287.033.493l.093.754-.593.466-.72.56.467.807.846-.34.707-.287.607.467c.266.2.533.353.82.473l.706.287.107.753.127.9h.933l.133-.9.107-.753.707-.287c.273-.113.546-.273.833-.486l.6-.454.693.28.847.34.467-.806-.72-.56-.594-.467.094-.753c.02-.2.033-.347.033-.487zM8.001 5.333C6.528 5.333 5.335 6.527 5.335 8c0 1.473 1.193 2.667 2.666 2.667 1.474 0 2.667-1.194 2.667-2.667 0-1.473-1.193-2.667-2.667-2.667zM6.668 8c0 .733.6 1.333 1.333 1.333.734 0 1.334-.6 1.334-1.333S8.735 6.667 8 6.667c-.733 0-1.333.6-1.333 1.333z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <SliderPointer
                        time={time}
                        setSliderPointerCord={setSliderPointerCord}
                        sliderPointerCord={sliderPointerCord}
                        setMove={setMove}
                        move={move}
                    />
                    <TimelineCanvasCanva
                        time={time}
                        setTime={setTime}
                        second={second}
                        seSecond={seSecond}
                        romsCount={romsCount}
                        setRomsCount={setRomsCount}
                        sliderPointerCord={sliderPointerCord}
                        setSliderPointerCord={setSliderPointerCord}
                        setMove={setMove}
                        move={move}
                    />

                    {
                        /*
                                            <TimelineCanvas
                        romsCount={romsCount}
                        setRomsCount={setRomsCount}
                        time={time}
                        setTime={setTime}
                    />
                         */
                    }
                    {
                        timeLineContent.initialState.map((item: any) =>
                            <MountingBlock key={item.id} content={item.content}/>
                        )
                    }
                </div>
            </div>

            <div className="timelineFooter">
                <div className="timelineInputFooter">
                    <button>
                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 13H5v-2h14v2z"></path>
                        </svg>
                    </button>
                    <div className="inputFooter">
                        <input
                            value={romsCount}
                            onChange={inputChange}
                            type="range"
                            min="1"
                            max="10"
                        />
                    </div>
                    <button>
                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                    </button>
                </div>
                <div className="timerFooter"><span>Duration</span> <span>{time}</span></div>
                <button className="btnPublishFooter">Publish</button>
            </div>
        </>
    );
});
