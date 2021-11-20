import { singleton } from "aurelia-framework";
import { observable } from "aurelia-framework";

// @singleton
// @observable
export class LangState {
    public static subscribeId: string = 'updateLangState';
    constructor(){
    }
}