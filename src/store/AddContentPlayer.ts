import {makeAutoObservable} from 'mobx';

class AddContentPlayer {
    initialState: any = {}

    constructor() {
        makeAutoObservable(this);
    }

    addContantPlayer(state: any) {
        this.initialState = state
    }
}

export default new AddContentPlayer();
