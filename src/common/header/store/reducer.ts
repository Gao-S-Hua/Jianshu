import * as constants from './constants';
import {fromJS} from 'immutable';
export interface IState {
    focused : boolean;
    mouseIn : boolean;
    list : string[];
    page : number;
    totalPage : number;
};
const defaultState : any = fromJS({
    focused : false,
    mouseIn : false, 
    list : [],
    page : 0,
    totalPage : 1
});


interface IAction {type : string; data ? : any; totalPage ?: number}

const reducer = (state = defaultState, action : IAction) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set("focused", true);
        case constants.SEARCH_BLUR:
            return state.set("focused", false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
            // Or can use state.merge({pro1 : value1, pro2 : value2})
        case constants.MOUSE_ENTER:
            return state.set("mouseIn", true);
        case constants.MOUSE_LEAVE:
            return state.set("mouseIn", false);
        case constants.SWITCH_LIST:
            return state.set("page", (state.get("page") + 1) % state.get("totalPage"));
        default :
            return state;
    }
}

export default reducer;