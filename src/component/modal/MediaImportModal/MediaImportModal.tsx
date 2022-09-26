import React from 'react';
import "./MediaImportModal.scss"
import {BandMediaImportModal} from "../../UI";

export const MediaImportModal = () => {
    return (
        <div className="containerMediaImportModal">
            <div className="textMediaImportModal">Import media</div>
            <BandMediaImportModal/>
            <div className="textMediaImportModal">Dropbox</div>
            <div className="textMediaImportModal">Google Drive</div>
            <BandMediaImportModal/>
            <div className="textMediaImportModal">URL Input</div>
        </div>
    );
};
