import {makeAutoObservable} from 'mobx';

class timeLineContent {
    initialState: any = [
        {
            id: 1,
            content: [
                {
                    id: Math.random(),
                    name: "bones.png",
                    preview: "../content/bones-prev.png",
                    img: "../content/bones.png",
                    video: "",
                    song: "",
                    time: "",
                    format: "img",
                    beginTime: "00:00:00",
                    endTime: "00:05:00",
                }
            ]
        },
        {
            id: 2,
            content: []
        },
    ]

    constructor() {
        makeAutoObservable(this);
    }

    addContant(state: any) {
        this.initialState = state
    }
}

export default new timeLineContent();
