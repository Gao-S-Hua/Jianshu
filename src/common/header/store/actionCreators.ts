import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
import { Dispatch } from 'redux';
export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

const changeList = (data: string[]) => ({
	type : constants.CHANGE_LIST,
	data : fromJS(data),
	totalPage : Math.ceil(data.length / 10)
})

export const mouseEnter = () => ({
	type : constants.MOUSE_ENTER
})


export const mouseLeave = () => ({
	type : constants.MOUSE_LEAVE
})

export const listChange = () => ({
	type : constants.SWITCH_LIST
})

export const getList = () => {
	return (dispatch : Dispatch) => {
		axios.get('/api/headerList.json').then( (res) => {
			const data = res.data.data;
			dispatch( changeList(data) );
		} ).catch( () => {console.log("header_list 404")} )
	}
}