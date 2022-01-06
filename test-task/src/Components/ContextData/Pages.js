import {makeAutoObservable} from "mobx";

export default class Pages {
    constructor() {
        this._page = 1;
        this._totalPage = 0;
        makeAutoObservable(this)
    } 

    setPage(number) {
        this._page = number;
    }
    setTotalPage(number) {
        this._totalPage = number;
    }

    get page () {
        return this._page
    }
    get totalPage () {
        return this._totalPage
    }
}

