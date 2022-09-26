import React from 'react';
import "./HeaderModal.scss"
import {BandMediaImportModal} from "../../UI";

export const HeaderModal = () => {
    return (
        <div className="containerHeaderModal">
            <div className="textHeaderModal">Rename</div>
            <div className="textHeaderModal">Delete</div>
            <BandMediaImportModal/>
            <div className="textHeaderModal">Save project as..</div>
        </div>
    );
};
