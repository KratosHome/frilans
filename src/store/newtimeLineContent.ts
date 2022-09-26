import {makeAutoObservable} from 'mobx';
import {mediaContentAPI} from "../API/mediaContentAPI";

class newtimeLineContent {
    initialState: any = [
        {
            id: 1,
            items: mediaContentAPI
        },
        {
            id: 2,
            items: [
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
        }
    ]

    constructor() {
        makeAutoObservable(this);
    }

    addContant(state: any) {
        this.initialState = state
    }
}

export default new newtimeLineContent();
