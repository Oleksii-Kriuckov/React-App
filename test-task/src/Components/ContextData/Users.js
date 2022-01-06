import {makeAutoObservable} from "mobx";
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

export default class UsersAll {
    constructor() {
        this._users = [];
        this._currentArray = [];
        this._isPostsVisible = false;
        this._userId = 0;
        makeAutoObservable(this);
    }

     setUsers(array) {
        this._users = array
    }
    setCurrentArray(array) {
        this._currentArray = array
    }
    setIsPostsVisible(bool) {
        this._isPostsVisible = bool;
    } 
    setUserId(number) {
        this._userId = number;
    }

    get userId () {
        return this._userId
    }
    get isPostsVisible () {
        return this._isPostsVisible
    }
    get users () {
        return this._users
    }
    get currentArray () {
        return this._currentArray
    }
}