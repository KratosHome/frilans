import {makeAutoObservable} from 'mobx';
import { mediaContentAPI } from '../API/mediaContentAPI';

class MediaContentStore {
    initialState = mediaContentAPI

    constructor() {
        makeAutoObservable(this);
    }

    mediaContent(state: any) {
        this.initialState = state
    }
}

export default new MediaContentStore();
