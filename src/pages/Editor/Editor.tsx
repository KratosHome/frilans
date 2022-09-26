import React from 'react';
import {MySplitPane, VideoStitching} from "../../component";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import pageIdStore from '../../store/pageIdStore';

export const Editor = observer(() => {
    const pageId = useParams();
    pageIdStore.getPageIdStore(pageId.id)
    return (
        <div >
            <MySplitPane />
            <VideoStitching />
        </div>
    );
});
