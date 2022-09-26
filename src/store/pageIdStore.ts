import {makeAutoObservable} from 'mobx';

class pageIdStore {
    state = "1"

    constructor() {
        makeAutoObservable(this);
    }

    getPageIdStore(page: any) {
        this.state = page
    }
}

export default new pageIdStore();
