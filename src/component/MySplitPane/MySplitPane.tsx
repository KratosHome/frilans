import React, { useState} from 'react';
import "./SplitePanel.scss"
import {ToolBar} from "../ToolBar";
import {Media} from "./Media";
import {MayPlayer} from './MayPlayer';
import {MayDraggable} from "../UI";

export const MySplitPane = () => {
    const [topCoords, setTopCoords] = useState<number>(450);
    const [leftCoords, setLeftCoords] = useState<number>(600);
    const [toolBarSelection, setToolBarSelection] = useState(1)

    return (
        <div className="containerSplitPane"
             style={{
                 height: `${topCoords}px`
             }}
        >
            <ToolBar
                toolBarSelection={toolBarSelection}
                setToolBarSelection={setToolBarSelection}
            />
            <div style={{
                width: `${leftCoords}px`,
                minWidth: "300px"
            }}>
                <div
                    style={{
                        width: `${leftCoords - 600}px`,
                    }}>
                </div>
                {toolBarSelection === 1 && <Media topCoords={topCoords}/>}
                {toolBarSelection === 2 && <div>22</div>}
                {toolBarSelection === 3 && <div>333</div>}
                <MayDraggable
                    topCoords={0}
                    minTop={0}
                    minBottom={0}
                    minLeft={440}
                    minRight={1200}
                    leftCord={leftCoords}
                    setLeftCoords={setLeftCoords}
                >
                    <div className="verticalLin"
                         style={{
                             top: "55px",
                             height: `${topCoords}px`
                         }}/>
                </MayDraggable>
            </div>
            <MayPlayer
                leftCoords={leftCoords}
                topCoords={topCoords}
            />
            <MayDraggable
                setTopCoords={setTopCoords}
                topCoords={topCoords}
                minTop={200}
                minBottom={800}
                minLeft={0}
                minRight={0}
                leftCord={0}
                setLeftCoords={setLeftCoords}
            >
                <div className={"horizontalLin"}/>
            </MayDraggable>
        </div>
    );
};
