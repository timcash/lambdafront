import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import uuid from 'uuid';

export function saveNote(author, text, clipid) {
	console.log("fetching....");
	fetch("https://swq1lg8p9e.execute-api.us-west-2.amazonaws.com/hackday/single",
	{
		method: "post",
		body: JSON.stringify({"noteid": uuid.v4(), "author":author, "text": text, "clipid": clipid})
	}).then((result)=> {
		//console.log("fetch result", result);
		return result.json();
	}).then((result)=> {
		console.log("json result", result);
	}).catch((e)=>{
		console.log(e);
	});

	return { type: types.SAVE_NOTE,  author, text, clipid };
}

export function addSearchNote(noteid, author, text, clipid) {
	return { type: types.ADD_NOTE, noteid, author, text, clipid };
}

export function deleteSearchNotes() {
	return { type: types.DELETE_NOTES};
}
