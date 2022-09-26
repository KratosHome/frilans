import React, {FC, memo} from 'react';
import "./ToolBar.scss"
import {ToolBarType} from "./ToolBarType";

export const ToolBar: FC<ToolBarType> = memo(({toolBarSelection, setToolBarSelection}) => {
    return (
        <div className="containerToolBar">
            <div
                className={toolBarSelection === 1 ? "toolBarSelection" : ""}
                onClick={() => setToolBarSelection(1)}>
                <svg width="28" height="28" viewBox="0 0 28 28">
                    <path
                          d="M23 5H5C4 5 3 6 3 7v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V7c0-1-1-2-2-2zm0 15.92c-.014.02-.038.042-.057.06-.01.007-.017.014-.023.02H5V7.08L5.08 7h17.83c.02.014.042.038.06.057l.02.023v13.84H23zM10.5 14.5l2.5 3.01L16.5 13l4.5 6H7l3.5-4.5z"
                          >
                    </path>
                </svg>
                <div>Media</div>
            </div>
            <div
                className={toolBarSelection === 2 ? "toolBarSelection" : ""}
                onClick={() => setToolBarSelection(2)}
            >
                <svg width="28" height="28" viewBox="0 0 28 28">
                    <path d="M15 25h-2V3h2v22zM5 21V7c0-1.1.9-2 2-2h4v2H7v14h4v2H7c-1.1 0-2-.9-2-2z"
                         ></path>
                    <path d="M23 21V7c0-1.1-.9-2-2-2h-4v2h4v14h-4v2h4c1.1 0 2-.9 2-2z"></path>
                </svg>
                <div>Transitions</div>
            </div>
            <div className={toolBarSelection === 3 ? "toolBarSelection" : ""}
                 onClick={() => setToolBarSelection(3)}
            >
                <svg width="28" height="28" viewBox="0 0 28 28">
                    <path d="M11.974 24V7.383H6V4h16v3.383h-5.96V24h-4.066z"></path>
                </svg>
                <div>Text</div>
            </div>
        </div>
    );
});
